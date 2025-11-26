import We, { useState as fe, useRef as dr, useEffect as vr } from "react";
var H = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function pr() {
  if (Ae) return J;
  Ae = 1;
  var m = We, x = Symbol.for("react.element"), N = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, w = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(_, l, O) {
    var v, R = {}, T = null, D = null;
    O !== void 0 && (T = "" + O), l.key !== void 0 && (T = "" + l.key), l.ref !== void 0 && (D = l.ref);
    for (v in l) S.call(l, v) && !$.hasOwnProperty(v) && (R[v] = l[v]);
    if (_ && _.defaultProps) for (v in l = _.defaultProps, l) R[v] === void 0 && (R[v] = l[v]);
    return { $$typeof: x, type: _, key: T, ref: D, props: R, _owner: w.current };
  }
  return J.Fragment = N, J.jsx = k, J.jsxs = k, J;
}
var K = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function yr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && (function() {
    var m = We, x = Symbol.for("react.element"), N = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), _ = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), V = Symbol.iterator, q = "@@iterator";
    function Q(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = V && e[V] || e[q];
      return typeof r == "function" ? r : null;
    }
    var C = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        h("error", e, t);
      }
    }
    function h(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var y = !1, d = !1, P = !1, W = !1, b = !1, F;
    F = Symbol.for("react.module.reference");
    function ee(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === S || e === $ || b || e === w || e === O || e === v || W || e === D || y || d || P || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === R || e.$$typeof === k || e.$$typeof === _ || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === F || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && a("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case S:
          return "Fragment";
        case N:
          return "Portal";
        case $:
          return "Profiler";
        case w:
          return "StrictMode";
        case O:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return ce(r) + ".Consumer";
          case k:
            var t = e;
            return ce(t._context) + ".Provider";
          case l:
            return Ye(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : j(e.type) || "Memo";
          case T: {
            var u = e, s = u._payload, i = u._init;
            try {
              return j(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, M = 0, le, de, ve, pe, ye, ge, me;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Le() {
      {
        if (M === 0) {
          le = console.log, de = console.info, ve = console.warn, pe = console.error, ye = console.group, ge = console.groupCollapsed, me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function Ne() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: le
            }),
            info: A({}, e, {
              value: de
            }),
            warn: A({}, e, {
              value: ve
            }),
            error: A({}, e, {
              value: pe
            }),
            group: A({}, e, {
              value: ye
            }),
            groupCollapsed: A({}, e, {
              value: ge
            }),
            groupEnd: A({}, e, {
              value: me
            })
          });
        }
        M < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = C.ReactCurrentDispatcher, te;
    function B(e, r, t) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            te = n && n[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ne = !1, z;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      z = new Ve();
    }
    function he(e, r) {
      if (!e || ne)
        return "";
      {
        var t = z.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ne = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = re.current, re.current = null, Le();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (g) {
              n = g;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var o = g.stack.split(`
`), p = n.stack.split(`
`), f = o.length - 1, c = p.length - 1; f >= 1 && c >= 0 && o[f] !== p[c]; )
            c--;
          for (; f >= 1 && c >= 0; f--, c--)
            if (o[f] !== p[c]) {
              if (f !== 1 || c !== 1)
                do
                  if (f--, c--, c < 0 || o[f] !== p[c]) {
                    var E = `
` + o[f].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, E), E;
                  }
                while (f >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = s, Ne(), Error.prepareStackTrace = u;
      }
      var L = e ? e.displayName || e.name : "", I = L ? B(L) : "";
      return typeof e == "function" && z.set(e, I), I;
    }
    function Me(e, r, t) {
      return he(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Ue(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case O:
          return B("Suspense");
        case v:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Me(e.render);
          case R:
            return G(e.type, r, t);
          case T: {
            var n = e, u = n._payload, s = n._init;
            try {
              return G(s(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, Ee = {}, Re = C.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, u) {
      {
        var s = Function.call.bind(U);
        for (var i in e)
          if (s(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              o = f;
            }
            o && !(o instanceof Error) && (X(u), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), X(null)), o instanceof Error && !(o.message in Ee) && (Ee[o.message] = !0, X(u), a("Failed %s type: %s", t, o.message), X(null));
          }
      }
    }
    var Ke = Array.isArray;
    function ae(e) {
      return Ke(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function Oe(e) {
      if (Be(e))
        return a("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), _e(e);
    }
    var Te = C.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, Se;
    function Ge(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      typeof e.ref == "string" && Te.current;
    }
    function Ze(e, r) {
      {
        var t = function() {
          xe || (xe = !0, a("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Se || (Se = !0, a("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, u, s, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: x,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function rr(e, r, t, n, u) {
      {
        var s, i = {}, o = null, p = null;
        t !== void 0 && (Oe(t), o = "" + t), Xe(r) && (Oe(r.key), o = "" + r.key), Ge(r) && (p = r.ref, He(r, u));
        for (s in r)
          U.call(r, s) && !ze.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (s in f)
            i[s] === void 0 && (i[s] = f[s]);
        }
        if (o || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Ze(i, c), p && Qe(i, c);
        }
        return er(e, o, p, u, n, Te.current, i);
      }
    }
    var oe = C.ReactCurrentOwner, we = C.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === x;
    }
    function Ce() {
      {
        if (oe.current) {
          var e = j(oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var Pe = {};
    function nr(e) {
      {
        var r = Ce();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Pe[t])
          return;
        Pe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== oe.current && (n = " It was passed a child from " + j(e._owner.type) + "."), Y(e), a('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), Y(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ue(n) && je(n, r);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Q(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), i; !(i = s.next()).done; )
              ue(i.value) && je(i.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = j(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ie) {
          ie = !0;
          var u = j(r);
          a("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && a("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            Y(e), a("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), a("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    var De = {};
    function Fe(e, r, t, n, u, s) {
      {
        var i = ee(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = tr();
          p ? o += p : o += Ce();
          var f;
          e === null ? f = "null" : ae(e) ? f = "array" : e !== void 0 && e.$$typeof === x ? (f = "<" + (j(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, a("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, o);
        }
        var c = rr(e, r, t, u, s);
        if (c == null)
          return c;
        if (i) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (ae(E)) {
                for (var L = 0; L < E.length; L++)
                  ke(E[L], e);
                Object.freeze && Object.freeze(E);
              } else
                a("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(E, e);
        }
        if (U.call(r, "key")) {
          var I = j(e), g = Object.keys(r).filter(function(lr) {
            return lr !== "key";
          }), se = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[I + se]) {
            var cr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            a(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, se, I, cr, I), De[I + se] = !0;
          }
        }
        return e === S ? or(c) : ar(c), c;
      }
    }
    function ir(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var sr = ur, fr = ir;
    K.Fragment = S, K.jsx = sr, K.jsxs = fr;
  })()), K;
}
var $e;
function gr() {
  return $e || ($e = 1, process.env.NODE_ENV === "production" ? H.exports = pr() : H.exports = yr()), H.exports;
}
var Z = gr();
function br({
  levels: m,
  onChange: x,
  className: N = "",
  style: S = {},
  selectProps: w = {},
  selectStyle: $ = {},
  disabled: k = !1
}) {
  const [_, l] = fe({}), [O, v] = fe({}), [R, T] = fe({}), D = dr(m), V = JSON.stringify(m) !== JSON.stringify(D.current);
  V && (D.current = m), vr(() => {
    (async () => {
      for (const h of m)
        h.dependsOn || await q(h);
    })();
  }, [V]);
  const q = async (a, h) => {
    T((y) => ({ ...y, [a.name]: !0 }));
    try {
      const y = await a.fetch(h);
      l((d) => ({ ...d, [a.name]: y || [] }));
    } catch (y) {
      console.error(`Error loading options for ${a.name}:`, y), l((d) => ({ ...d, [a.name]: [] }));
    } finally {
      T((y) => ({ ...y, [a.name]: !1 }));
    }
  }, Q = async (a, h) => {
    const y = m.findIndex((b) => b.name === a.name), d = { ...O, [a.name]: h }, P = { ..._ };
    for (let b = y + 1; b < m.length; b++) {
      const F = m[b].name;
      d[F] = void 0, P[F] = [];
    }
    v(d), l(P);
    const W = m[y + 1];
    W && h && await q(W, h), x == null || x(d);
  }, C = (a) => !!(k || a.disabled || a.dependsOn && !O[a.dependsOn]);
  return /* @__PURE__ */ Z.jsx(
    "div",
    {
      className: `cascade-dropdown ${N}`,
      style: { display: "flex", gap: "12px", ...S },
      children: m.map((a) => {
        const h = _[a.name] || [], y = O[a.name], d = C(a), P = R[a.name], W = {
          cursor: d || P ? "not-allowed" : "pointer",
          opacity: d ? 0.5 : 1,
          backgroundColor: d ? "#f5f5f5" : "#ffffff",
          color: d ? "#999" : "#333",
          border: d ? "1px solid #e0e0e0" : "1px solid #ccc",
          padding: "8px 12px",
          borderRadius: "4px",
          fontSize: "14px",
          transition: "all 0.2s ease",
          outline: "none",
          minWidth: "150px"
        };
        return /* @__PURE__ */ Z.jsxs(
          "select",
          {
            value: y || "",
            disabled: d || P,
            onChange: (b) => Q(a, b.target.value),
            ...w,
            className: `cascade-select ${w.className || ""}`,
            style: { ...W, ...$, ...w.style },
            children: [
              /* @__PURE__ */ Z.jsx("option", { value: "", children: P ? "Loading..." : a.placeholder || `Select ${a.label || a.name}` }),
              h.map((b, F) => {
                const ee = b[a.valueKey || "id"];
                return /* @__PURE__ */ Z.jsx("option", { value: b[a.valueKey || "id"], children: b[a.labelKey || "name"] }, ee || `${a.name}-${F}`);
              })
            ]
          },
          a.name
        );
      })
    }
  );
}
export {
  br as CascadeDropdown
};
