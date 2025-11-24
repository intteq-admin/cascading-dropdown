import { useState, useEffect } from "react";
import { CascadeDropdownProps } from "./types";

export default function CascadeDropdown({ levels, onChange }: CascadeDropdownProps) {
  const [options, setOptions] = useState<Record<string, any[]>>({});
  const [values, setValues] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  // INITIAL LOAD: load the first dropdown (no dependencies)
  useEffect(() => {
    levels.forEach(level => {
      if (!level.dependsOn) {
        loadOptions(level);
      }
    });
  }, []);

  const loadOptions = async (level: any, parentValue?: any) => {
    setLoading(prev => ({ ...prev, [level.name]: true }));
    const data = await level.fetch(parentValue);
    setOptions(prev => ({ ...prev, [level.name]: data }));
    setLoading(prev => ({ ...prev, [level.name]: false }));
  };

const handleChange = async (level: any, selectedValue: any) => {
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
  if (nextLevel) {
    const dependsOn = nextLevel.dependsOn;
    if (dependsOn && newValues[dependsOn]) {
      loadOptions(nextLevel, newValues[dependsOn]);
    }
  }
  onChange?.(newValues);
};

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      {levels.map(level => {
        const opts = options[level.name] || [];
        const val = values[level.name];

        return (
          <select
            key={level.name}
            value={val || ""}
            disabled={loading[level.name]}
            onChange={e => handleChange(level, e.target.value)}
          >
            <option value="">Select {level.label || level.name}</option>
            {opts.map(item => (
              <option key={item[level.valueKey || "id"]} value={item[level.valueKey || "id"]}>
                {item[level.labelKey || "name"]}
              </option>
            ))}
          </select>
        );
      })}
    </div>
  );
}
