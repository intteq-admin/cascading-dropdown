import re, { useState as J, useRef as te, useEffect as ne } from "react";
var $ = { exports: {} }, h = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B;
function ae() {
  if (B) return h;
  B = 1;
  var s = Symbol.for("react.transitional.element"), m = Symbol.for("react.fragment");
  function b(R, i, f) {
    var T = null;
    if (f !== void 0 && (T = "" + f), i.key !== void 0 && (T = "" + i.key), "key" in i) {
      f = {};
      for (var p in i)
        p !== "key" && (f[p] = i[p]);
    } else f = i;
    return i = f.ref, {
      $$typeof: s,
      type: R,
      key: T,
      ref: i !== void 0 ? i : null,
      props: f
    };
  }
  return h.Fragment = m, h.jsx = b, h.jsxs = b, h;
}
var A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H;
function oe() {
  return H || (H = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case t:
          return "Profiler";
        case I:
          return "StrictMode";
        case E:
          return "Suspense";
        case y:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case N:
            return "Portal";
          case u:
            return e.displayName || "Context";
          case d:
            return (e._context.displayName || "Context") + ".Consumer";
          case c:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case l:
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case _:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
            } catch {
            }
        }
      return null;
    }
    function m(e) {
      return "" + e;
    }
    function b(e) {
      try {
        m(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), m(e);
      }
    }
    function R(e) {
      if (e === w) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === _)
        return "<...>";
      try {
        var r = s(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = L.A;
      return e === null ? null : e.getOwner();
    }
    function f() {
      return Error("react-stack-top-frame");
    }
    function T(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function n() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function x() {
      var e = s(this.type);
      return z[e] || (z[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function k(e, r, n, a, C, W) {
      var o = n.ref;
      return e = {
        $$typeof: g,
        type: e,
        key: r,
        props: n,
        _owner: a
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function j(e, r, n, a, C, W) {
      var o = r.children;
      if (o !== void 0)
        if (a)
          if (Q(o)) {
            for (a = 0; a < o.length; a++)
              P(o[a]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(o);
      if (U.call(r, "key")) {
        o = s(e);
        var O = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        a = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", X[o + a] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          o,
          O,
          o
        ), X[o + a] = !0);
      }
      if (o = null, n !== void 0 && (b(n), o = "" + n), T(r) && (b(r.key), o = "" + r.key), "key" in r) {
        n = {};
        for (var M in r)
          M !== "key" && (n[M] = r[M]);
      } else n = r;
      return o && p(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), k(
        e,
        o,
        n,
        i(),
        C,
        W
      );
    }
    function P(e) {
      S(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === _ && (e._payload.status === "fulfilled" ? S(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function S(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    var v = re, g = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), t = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), L = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, Q = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var q, z = {}, V = v.react_stack_bottom_frame.bind(
      v,
      f
    )(), G = F(R(f)), X = {};
    A.Fragment = w, A.jsx = function(e, r, n) {
      var a = 1e4 > L.recentlyCreatedOwnerStacks++;
      return j(
        e,
        r,
        n,
        !1,
        a ? Error("react-stack-top-frame") : V,
        a ? F(R(e)) : G
      );
    }, A.jsxs = function(e, r, n) {
      var a = 1e4 > L.recentlyCreatedOwnerStacks++;
      return j(
        e,
        r,
        n,
        !0,
        a ? Error("react-stack-top-frame") : V,
        a ? F(R(e)) : G
      );
    };
  })()), A;
}
var Z;
function se() {
  return Z || (Z = 1, process.env.NODE_ENV === "production" ? $.exports = ae() : $.exports = oe()), $.exports;
}
var Y = se();
function ie({
  levels: s,
  onChange: m,
  className: b = "",
  style: R = {},
  selectProps: i = {},
  selectStyle: f = {},
  disabled: T = !1
}) {
  const [p, x] = J({}), [k, j] = J({}), [P, S] = J({}), v = te(s), g = JSON.stringify(s) !== JSON.stringify(v.current);
  g && (v.current = s), ne(() => {
    (async () => {
      for (const d of s)
        d.dependsOn || await N(d);
    })();
  }, [g]);
  const N = async (t, d) => {
    S((u) => ({ ...u, [t.name]: !0 }));
    try {
      const u = await t.fetch(d);
      x((c) => ({ ...c, [t.name]: u || [] }));
    } catch (u) {
      console.error(`Error loading options for ${t.name}:`, u), x((c) => ({ ...c, [t.name]: [] }));
    } finally {
      S((u) => ({ ...u, [t.name]: !1 }));
    }
  }, w = async (t, d) => {
    const u = s.findIndex((l) => l.name === t.name), c = { ...k, [t.name]: d }, E = { ...p };
    for (let l = u + 1; l < s.length; l++) {
      const _ = s[l].name;
      c[_] = void 0, E[_] = [];
    }
    j(c), x(E);
    const y = s[u + 1];
    y && d && await N(y, d), m == null || m(c);
  }, I = (t) => !!(T || t.disabled || t.dependsOn && !k[t.dependsOn]);
  return /* @__PURE__ */ Y.jsx(
    "div",
    {
      className: `cascade-dropdown ${b}`,
      style: { display: "flex", gap: "12px", ...R },
      children: s.map((t) => {
        const d = p[t.name] || [], u = k[t.name], c = I(t), E = P[t.name], y = {
          cursor: c || E ? "not-allowed" : "pointer",
          opacity: c ? 0.5 : 1,
          backgroundColor: c ? "#f5f5f5" : "#ffffff",
          color: c ? "#999" : "#333",
          border: c ? "1px solid #e0e0e0" : "1px solid #ccc",
          padding: "8px 12px",
          borderRadius: "4px",
          fontSize: "14px",
          transition: "all 0.2s ease",
          outline: "none",
          minWidth: "150px"
        };
        return /* @__PURE__ */ Y.jsxs(
          "select",
          {
            value: u || "",
            disabled: c || E,
            onChange: (l) => w(t, l.target.value),
            ...i,
            className: `cascade-select ${i.className || ""}`,
            style: { ...y, ...f, ...i.style },
            children: [
              /* @__PURE__ */ Y.jsx("option", { value: "", children: E ? "Loading..." : `Select ${t.label || t.name}` }),
              d.map((l, _) => {
                const D = l[t.valueKey || "id"];
                return /* @__PURE__ */ Y.jsx("option", { value: l[t.valueKey || "id"], children: l[t.labelKey || "name"] }, D || `${t.name}-${_}`);
              })
            ]
          },
          t.name
        );
      })
    }
  );
}
export {
  ie as CascadeDropdown
};
