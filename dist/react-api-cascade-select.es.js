import re, { useState as Y, useEffect as te } from "react";
var w = { exports: {} }, O = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function ne() {
  if (W) return O;
  W = 1;
  var u = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function m(E, c, l) {
    var R = null;
    if (l !== void 0 && (R = "" + l), c.key !== void 0 && (R = "" + c.key), "key" in c) {
      l = {};
      for (var p in c)
        p !== "key" && (l[p] = c[p]);
    } else l = c;
    return c = l.ref, {
      $$typeof: u,
      type: E,
      key: R,
      ref: c !== void 0 ? c : null,
      props: l
    };
  }
  return O.Fragment = d, O.jsx = m, O.jsxs = m, O;
}
var k = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function ae() {
  return U || (U = 1, process.env.NODE_ENV !== "production" && (function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case i:
          return "Fragment";
        case q:
          return "Profiler";
        case y:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case v:
            return "Portal";
          case z:
            return e.displayName || "Context";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case j:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function m(e) {
      try {
        d(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), d(e);
      }
    }
    function E(e) {
      if (e === i) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === j)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = P.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function R(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function a() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function x() {
      var e = u(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, r, a, o, S, N) {
      var s = a.ref;
      return e = {
        $$typeof: T,
        type: e,
        key: r,
        props: a,
        _owner: o
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(e, "ref", {
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
        value: S
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function t(e, r, a, o, S, N) {
      var s = r.children;
      if (s !== void 0)
        if (o)
          if (Q(s)) {
            for (o = 0; o < s.length; o++)
              _(s[o]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(s);
      if (I.call(r, "key")) {
        s = u(e);
        var b = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        o = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", M[s + o] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          s,
          b,
          s
        ), M[s + o] = !0);
      }
      if (s = null, a !== void 0 && (m(a), s = "" + a), R(r) && (m(r.key), s = "" + r.key), "key" in r) {
        a = {};
        for (var C in r)
          C !== "key" && (a[C] = r[C]);
      } else a = r;
      return s && p(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        s,
        a,
        c(),
        S,
        N
      );
    }
    function _(e) {
      f(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === j && (e._payload.status === "fulfilled" ? f(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function f(e) {
      return typeof e == "object" && e !== null && e.$$typeof === T;
    }
    var n = re, T = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), z = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), P = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, Q = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    n = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var $, D = {}, F = n.react_stack_bottom_frame.bind(
      n,
      l
    )(), L = g(E(l)), M = {};
    k.Fragment = i, k.jsx = function(e, r, a) {
      var o = 1e4 > P.recentlyCreatedOwnerStacks++;
      return t(
        e,
        r,
        a,
        !1,
        o ? Error("react-stack-top-frame") : F,
        o ? g(E(e)) : L
      );
    }, k.jsxs = function(e, r, a) {
      var o = 1e4 > P.recentlyCreatedOwnerStacks++;
      return t(
        e,
        r,
        a,
        !0,
        o ? Error("react-stack-top-frame") : F,
        o ? g(E(e)) : L
      );
    };
  })()), k;
}
var V;
function oe() {
  return V || (V = 1, process.env.NODE_ENV === "production" ? w.exports = ne() : w.exports = ae()), w.exports;
}
var A = oe();
function ue({ levels: u, onChange: d }) {
  const [m, E] = Y({}), [c, l] = Y({}), [R, p] = Y({});
  te(() => {
    u.forEach((t) => {
      t.dependsOn || x(t);
    });
  }, []);
  const x = async (t, _) => {
    p((n) => ({ ...n, [t.name]: !0 }));
    const f = await t.fetch(_);
    E((n) => ({ ...n, [t.name]: f })), p((n) => ({ ...n, [t.name]: !1 }));
  }, h = async (t, _) => {
    const f = u.findIndex((i) => i.name === t.name), n = { ...c, [t.name]: _ }, T = { ...m };
    for (let i = f + 1; i < u.length; i++) {
      const y = u[i].name;
      n[y] = void 0, T[y] = [];
    }
    l(n), E(T);
    const v = u[f + 1];
    if (v) {
      const i = v.dependsOn;
      i && n[i] && x(v, n[i]);
    }
    d == null || d(n);
  };
  return /* @__PURE__ */ A.jsx("div", { style: { display: "flex", gap: "12px" }, children: u.map((t) => {
    const _ = m[t.name] || [], f = c[t.name];
    return /* @__PURE__ */ A.jsxs(
      "select",
      {
        value: f || "",
        disabled: R[t.name],
        onChange: (n) => h(t, n.target.value),
        children: [
          /* @__PURE__ */ A.jsxs("option", { value: "", children: [
            "Select ",
            t.label || t.name
          ] }),
          _.map((n) => /* @__PURE__ */ A.jsx("option", { value: n[t.valueKey || "id"], children: n[t.labelKey || "name"] }, n[t.valueKey || "id"]))
        ]
      },
      t.name
    );
  }) });
}
export {
  ue as CascadeDropdown
};
