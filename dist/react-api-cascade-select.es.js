import { jsx as m, jsxs as R } from "react/jsx-runtime";
import { useState as y, useRef as j, useEffect as k } from "react";
function z({
  levels: i,
  onChange: f,
  className: h = "",
  style: w = {},
  selectProps: p = {},
  selectStyle: S = {},
  disabled: N = !1
}) {
  const [x, u] = y({}), [r, $] = y({}), [L, l] = y({}), O = j(i), g = JSON.stringify(i) !== JSON.stringify(O.current);
  g && (O.current = i), k(() => {
    (async () => {
      for (const o of i)
        o.dependsOn || await b(o);
    })();
  }, [g]);
  const b = async (n, o) => {
    l((t) => ({ ...t, [n.name]: !0 }));
    try {
      const t = await n.fetch(o);
      u((a) => ({ ...a, [n.name]: t || [] }));
    } catch (t) {
      console.error(`Error loading options for ${n.name}:`, t), u((a) => ({ ...a, [n.name]: [] }));
    } finally {
      l((t) => ({ ...t, [n.name]: !1 }));
    }
  }, I = async (n, o) => {
    const t = i.findIndex((s) => s.name === n.name), a = { ...r, [n.name]: o }, e = { ...x };
    for (let s = t + 1; s < i.length; s++) {
      const c = i[s].name;
      a[c] = void 0, e[c] = [];
    }
    $(a), u(e);
    const d = i[t + 1];
    d && o != null && o !== "" && await b(d, o), f == null || f(a);
  }, D = (n) => !!(N || n.disabled || n.dependsOn && (r[n.dependsOn] === void 0 || r[n.dependsOn] === null || r[n.dependsOn] === ""));
  return /* @__PURE__ */ m(
    "div",
    {
      className: `cascade-dropdown ${h}`,
      style: { display: "flex", gap: "12px", ...w },
      children: i.map((n) => {
        const o = x[n.name] || [], t = r[n.name], a = D(n), e = L[n.name], d = {
          cursor: a || e ? "not-allowed" : "pointer",
          opacity: a ? 0.5 : 1,
          backgroundColor: a ? "#f5f5f5" : "#ffffff",
          color: a ? "#999" : "#333",
          border: a ? "1px solid #e0e0e0" : "1px solid #ccc",
          padding: "8px 12px",
          borderRadius: "4px",
          fontSize: "14px",
          transition: "all 0.2s ease",
          outline: "none",
          minWidth: "150px"
        };
        return /* @__PURE__ */ R(
          "select",
          {
            value: t ?? "",
            disabled: a || e,
            onChange: (s) => I(n, s.target.value),
            ...p,
            className: `cascade-select ${p.className || ""}`,
            style: { ...d, ...S, ...p.style },
            children: [
              /* @__PURE__ */ m("option", { value: "", children: e ? "Loading..." : n.placeholder || `Select ${n.label || n.name}` }),
              o.map((s, c) => {
                const K = s[n.valueKey || "id"];
                return /* @__PURE__ */ m("option", { value: s[n.valueKey || "id"], children: s[n.labelKey || "name"] }, K || `${n.name}-${c}`);
              })
            ]
          },
          n.name
        );
      })
    }
  );
}
export {
  z as CascadeDropdown
};
