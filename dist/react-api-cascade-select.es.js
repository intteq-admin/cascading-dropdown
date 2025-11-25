import re, { useState as M, useEffect as te } from "react";
var N = { exports: {} }, S = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X;
function ne() {
  if (X) return S;
  X = 1;
  var c = Symbol.for("react.transitional.element"), m = Symbol.for("react.fragment");
  function _(b, i, f) {
    var R = null;
    if (f !== void 0 && (R = "" + f), i.key !== void 0 && (R = "" + i.key), "key" in i) {
      f = {};
      for (var p in i)
        p !== "key" && (f[p] = i[p]);
    } else f = i;
    return i = f.ref, {
      $$typeof: c,
      type: b,
      key: R,
      ref: i !== void 0 ? i : null,
      props: f
    };
  }
  return S.Fragment = m, S.jsx = _, S.jsxs = _, S;
}
var g = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B;
function ae() {
  return B || (B = 1, process.env.NODE_ENV !== "production" && (function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case t:
          return "Fragment";
        case u:
          return "Profiler";
        case d:
          return "StrictMode";
        case l:
          return "Suspense";
        case x:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case $:
            return "Portal";
          case E:
            return e.displayName || "Context";
          case s:
            return (e._context.displayName || "Context") + ".Consumer";
          case v:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Y:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case I:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function m(e) {
      return "" + e;
    }
    function _(e) {
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
    function b(e) {
      if (e === t) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === I)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = D.A;
      return e === null ? null : e.getOwner();
    }
    function f() {
      return Error("react-stack-top-frame");
    }
    function R(e) {
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
    function O() {
      var e = c(this.type);
      return z[e] || (z[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function k(e, r, n, a, P, F) {
      var o = n.ref;
      return e = {
        $$typeof: j,
        type: e,
        key: r,
        props: n,
        _owner: a
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: O
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
        value: P
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function A(e, r, n, a, P, F) {
      var o = r.children;
      if (o !== void 0)
        if (a)
          if (Q(o)) {
            for (a = 0; a < o.length; a++)
              h(o[a]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(o);
      if (U.call(r, "key")) {
        o = c(e);
        var y = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        a = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", G[o + a] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          o,
          y,
          o
        ), G[o + a] = !0);
      }
      if (o = null, n !== void 0 && (_(n), o = "" + n), R(r) && (_(r.key), o = "" + r.key), "key" in r) {
        n = {};
        for (var W in r)
          W !== "key" && (n[W] = r[W]);
      } else n = r;
      return o && p(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), k(
        e,
        o,
        n,
        i(),
        P,
        F
      );
    }
    function h(e) {
      w(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === I && (e._payload.status === "fulfilled" ? w(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function w(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    var T = re, j = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), E = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), D = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, Q = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var q, z = {}, J = T.react_stack_bottom_frame.bind(
      T,
      f
    )(), V = L(b(f)), G = {};
    g.Fragment = t, g.jsx = function(e, r, n) {
      var a = 1e4 > D.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        n,
        !1,
        a ? Error("react-stack-top-frame") : J,
        a ? L(b(e)) : V
      );
    }, g.jsxs = function(e, r, n) {
      var a = 1e4 > D.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        n,
        !0,
        a ? Error("react-stack-top-frame") : J,
        a ? L(b(e)) : V
      );
    };
  })()), g;
}
var H;
function oe() {
  return H || (H = 1, process.env.NODE_ENV === "production" ? N.exports = ne() : N.exports = ae()), N.exports;
}
var C = oe();
function ce({
  levels: c,
  onChange: m,
  className: _ = "",
  style: b = {},
  selectProps: i = {},
  selectStyle: f = {},
  disabled: R = !1
}) {
  const [p, O] = M({}), [k, A] = M({}), [h, w] = M({});
  te(() => {
    (async () => {
      for (const d of c)
        d.dependsOn || await T(d);
    })();
  }, [c]);
  const T = async (t, d) => {
    w((u) => ({ ...u, [t.name]: !0 }));
    try {
      const u = await t.fetch(d);
      O((s) => ({ ...s, [t.name]: u || [] }));
    } catch (u) {
      console.error(`Error loading options for ${t.name}:`, u), O((s) => ({ ...s, [t.name]: [] }));
    } finally {
      w((u) => ({ ...u, [t.name]: !1 }));
    }
  }, j = async (t, d) => {
    const u = c.findIndex((l) => l.name === t.name), s = { ...k, [t.name]: d }, E = { ...p };
    for (let l = u + 1; l < c.length; l++) {
      const x = c[l].name;
      s[x] = void 0, E[x] = [];
    }
    A(s), O(E);
    const v = c[u + 1];
    v && d && await T(v, d), m == null || m(s);
  }, $ = (t) => !!(R || t.disabled || t.dependsOn && !k[t.dependsOn]);
  return /* @__PURE__ */ C.jsx(
    "div",
    {
      className: `cascade-dropdown ${_}`,
      style: { display: "flex", gap: "12px", ...b },
      children: c.map((t) => {
        const d = p[t.name] || [], u = k[t.name], s = $(t), E = h[t.name], v = {
          cursor: s || E ? "not-allowed" : "pointer",
          opacity: s ? 0.5 : 1,
          backgroundColor: s ? "#f5f5f5" : "#ffffff",
          color: s ? "#999" : "#333",
          border: s ? "1px solid #e0e0e0" : "1px solid #ccc",
          padding: "8px 12px",
          borderRadius: "4px",
          fontSize: "14px",
          transition: "all 0.2s ease",
          outline: "none",
          minWidth: "150px"
        };
        return /* @__PURE__ */ C.jsxs(
          "select",
          {
            value: u || "",
            disabled: s || E,
            onChange: (l) => j(t, l.target.value),
            ...i,
            className: `cascade-select ${i.className || ""}`,
            style: { ...v, ...f, ...i.style },
            children: [
              /* @__PURE__ */ C.jsx("option", { value: "", children: E ? "Loading..." : `Select ${t.label || t.name}` }),
              d.map((l, x) => {
                const Y = l[t.valueKey || "id"];
                return /* @__PURE__ */ C.jsx("option", { value: l[t.valueKey || "id"], children: l[t.labelKey || "name"] }, Y || `${t.name}-${x}`);
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
  ce as CascadeDropdown
};
