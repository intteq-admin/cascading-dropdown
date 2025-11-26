import { useState, useEffect, useRef } from "react";
import { CascadeDropdownProps, CascadeLevel } from "./types";

export default function CascadeDropdown({
  levels,
  onChange,
  className = "",
  style = {},
  selectProps = {},
  selectStyle = {},
  disabled = false
}: CascadeDropdownProps) {
  const [options, setOptions] = useState<Record<string, any[]>>({});
  const [values, setValues] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const levelsRef = useRef(levels);
 const levelsChanged = JSON.stringify(levels) !== JSON.stringify(levelsRef.current);
 if (levelsChanged) levelsRef.current = levels;

  useEffect(() => {
    const loadInitialOptions = async () => {
      for (const level of levels) {
        if (!level.dependsOn) {
          await loadOptions(level);
        }
      }
    };
    loadInitialOptions();
  }, [levelsChanged]);

  const loadOptions = async (level: CascadeLevel, parentValue?: any) => {
    setLoading(prev => ({ ...prev, [level.name]: true }));
    try {
      const data = await level.fetch(parentValue);
      setOptions(prev => ({ ...prev, [level.name]: data || [] }));
    } catch (error) {
      console.error(`Error loading options for ${level.name}:`, error);
      setOptions(prev => ({ ...prev, [level.name]: [] }));
    } finally {
      setLoading(prev => ({ ...prev, [level.name]: false }));
    }
  };

  const handleChange = async (level: CascadeLevel, selectedValue: any) => {
    const levelIndex = levels.findIndex(l => l.name === level.name);
    const newValues: Record<string, any> = { ...values, [level.name]: selectedValue };

    const newOptions = { ...options };
    for (let i = levelIndex + 1; i < levels.length; i++) {
      const lvName = levels[i].name;
      newValues[lvName] = undefined;
      newOptions[lvName] = [];
    }

    setValues(newValues);
    setOptions(newOptions);

    const nextLevel = levels[levelIndex + 1];
    if (nextLevel && selectedValue) {
      await loadOptions(nextLevel, selectedValue);
    }

    onChange?.(newValues);
  };

  const isLevelDisabled = (level: CascadeLevel) => {
    if (disabled) return true;
    if (level.disabled) return true;
    if (level.dependsOn && !values[level.dependsOn]) return true;
    return false;
  };

  return (
    <div
      className={`cascade-dropdown ${className}`}
      style={{ display: "flex", gap: "12px", ...style }}
    >
      {levels.map(level => {
        const opts = options[level.name] || [];
        const val = values[level.name];
        const levelDisabled = isLevelDisabled(level);
        const isLoading = loading[level.name];

        const defaultSelectStyle: React.CSSProperties = {
          cursor: levelDisabled || isLoading ? "not-allowed" : "pointer",
          opacity: levelDisabled ? 0.5 : 1,
          backgroundColor: levelDisabled ? "#f5f5f5" : "#ffffff",
          color: levelDisabled ? "#999" : "#333",
          border: levelDisabled ? "1px solid #e0e0e0" : "1px solid #ccc",
          padding: "8px 12px",
          borderRadius: "4px",
          fontSize: "14px",
          transition: "all 0.2s ease",
          outline: "none",
          minWidth: "150px"
        };

        return (
          <select
            key={level.name}
            value={val || ""}
            disabled={levelDisabled || isLoading}
            onChange={e => handleChange(level, e.target.value)}
            {...selectProps}
            className={`cascade-select ${selectProps.className || ""}`}
            style={{ ...defaultSelectStyle, ...selectStyle, ...selectProps.style }}
          >
           <option value="">
              {isLoading ? "Loading..." : (level.placeholder || `Select ${level.label || level.name}`)}
            </option>

            {opts.map((item, index) => {
              const key = item[level.valueKey || "id"];
              return (
                <option key={key || `${level.name}-${index}`} value={item[level.valueKey || "id"]}>
                  {item[level.labelKey || "name"]}
                </option>
              );
            })}
          </select>
        );
      })}
    </div>
  );
}
