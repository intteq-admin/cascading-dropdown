import { jsx as m, jsxs as R } from "react/jsx-runtime";
import { useState as y, useRef as j, useEffect as k } from "react";
function z({
  levels: e,
  onChange: f,
  className: h = "",
  style: w = {},
  selectProps: p = {},
  selectStyle: S = {},
  disabled: N = !1
}) {
  const [l, u] = y({}), [r, $] = y({}), [L, x] = y({}), O = j(e), g = JSON.stringify(e) !== JSON.stringify(O.current);
  g && (O.current = e), k(() => {
    (async () => {
      for (const s of e)
        s.dependsOn || await b(s);
    })();
  }, [g]);
  const b = async (n, s) => {
    x((t) => ({ ...t, [n.name]: !0 }));
    try {
      const t = await n.fetch(s);
      u((a) => ({ ...a, [n.name]: t || [] }));
    } catch (t) {
      console.error(`Error loading options for ${n.name}:`, t), u((a) => ({ ...a, [n.name]: [] }));
    } finally {
      x((t) => ({ ...t, [n.name]: !1 }));
    }
  }, I = async (n, s) => {
    const t = e.findIndex((o) => o.name === n.name), a = { ...r, [n.name]: s }, i = { ...l };
    for (let o = t + 1; o < e.length; o++) {
      const c = e[o].name;
      a[c] = void 0, i[c] = [];
    }
    $(a), u(i);
    const d = e[t + 1];
    d && (s ?? null) !== null && await b(d, s), f == null || f(a);
  }, D = (n) => !!(N || n.disabled || n.dependsOn && (r[n.dependsOn] === void 0 || r[n.dependsOn] === null || r[n.dependsOn] === ""));
  return /* @__PURE__ */ m(
    "div",
    {
      className: `cascade-dropdown ${h}`,
      style: { display: "flex", gap: "12px", ...w },
      children: e.map((n) => {
        const s = l[n.name] || [], t = r[n.name], a = D(n), i = L[n.name], d = {
          cursor: a || i ? "not-allowed" : "pointer",
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
            disabled: a || i,
            onChange: (o) => I(n, o.target.value),
            ...p,
            className: `cascade-select ${p.className || ""}`,
            style: { ...d, ...S, ...p.style },
            children: [
              /* @__PURE__ */ m("option", { value: "", children: i ? "Loading..." : n.placeholder || `Select ${n.label || n.name}` }),
              s.map((o, c) => {
                const K = o[n.valueKey || "id"];
                return /* @__PURE__ */ m("option", { value: o[n.valueKey || "id"], children: o[n.labelKey || "name"] }, K || `${n.name}-${c}`);
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
