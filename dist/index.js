/*! For license information please see index.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports["chakra-data-tables"] = t())
    : (e["chakra-data-tables"] = t());
})(self, function () {
  return (function () {
    "use strict";
    var e = {
        251: function (e, t, r) {
          var n = r(294);
          Symbol.for("react.element"),
            Symbol.for("react.fragment"),
            Object.prototype.hasOwnProperty,
            n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner;
        },
        408: function (e, t) {
          var r = Symbol.for("react.element"),
            n = Symbol.for("react.portal"),
            o = Symbol.for("react.fragment"),
            u = Symbol.for("react.strict_mode"),
            a = Symbol.for("react.profiler"),
            c = Symbol.for("react.provider"),
            f = Symbol.for("react.context"),
            i = Symbol.for("react.forward_ref"),
            l = Symbol.for("react.suspense"),
            s = Symbol.for("react.memo"),
            p = Symbol.for("react.lazy"),
            y = Symbol.iterator,
            d = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function () {},
              enqueueReplaceState: function () {},
              enqueueSetState: function () {},
            },
            _ = Object.assign,
            b = {};
          function m(e, t, r) {
            (this.props = e),
              (this.context = t),
              (this.refs = b),
              (this.updater = r || d);
          }
          function h() {}
          function v(e, t, r) {
            (this.props = e),
              (this.context = t),
              (this.refs = b),
              (this.updater = r || d);
          }
          (m.prototype.isReactComponent = {}),
            (m.prototype.setState = function (e, t) {
              if ("object" != typeof e && "function" != typeof e && null != e)
                throw Error(
                  "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                );
              this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (m.prototype.forceUpdate = function (e) {
              this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (h.prototype = m.prototype);
          var S = (v.prototype = new h());
          (S.constructor = v), _(S, m.prototype), (S.isPureReactComponent = !0);
          var E = Array.isArray,
            R = Object.prototype.hasOwnProperty,
            w = { current: null },
            k = { key: !0, ref: !0, __self: !0, __source: !0 };
          function $(e, t, n) {
            var o,
              u = {},
              a = null,
              c = null;
            if (null != t)
              for (o in (void 0 !== t.ref && (c = t.ref),
              void 0 !== t.key && (a = "" + t.key),
              t))
                R.call(t, o) && !k.hasOwnProperty(o) && (u[o] = t[o]);
            var f = arguments.length - 2;
            if (1 === f) u.children = n;
            else if (1 < f) {
              for (var i = Array(f), l = 0; l < f; l++) i[l] = arguments[l + 2];
              u.children = i;
            }
            if (e && e.defaultProps)
              for (o in (f = e.defaultProps)) void 0 === u[o] && (u[o] = f[o]);
            return {
              $$typeof: r,
              type: e,
              key: a,
              ref: c,
              props: u,
              _owner: w.current,
            };
          }
          function j(e) {
            return "object" == typeof e && null !== e && e.$$typeof === r;
          }
          var O = /\/+/g;
          function g(e, t) {
            return "object" == typeof e && null !== e && null != e.key
              ? (function (e) {
                  var t = { "=": "=0", ":": "=2" };
                  return (
                    "$" +
                    e.replace(/[=:]/g, function (e) {
                      return t[e];
                    })
                  );
                })("" + e.key)
              : t.toString(36);
          }
          function C(e, t, o, u, a) {
            var c = typeof e;
            ("undefined" !== c && "boolean" !== c) || (e = null);
            var f = !1;
            if (null === e) f = !0;
            else
              switch (c) {
                case "string":
                case "number":
                  f = !0;
                  break;
                case "object":
                  switch (e.$$typeof) {
                    case r:
                    case n:
                      f = !0;
                  }
              }
            if (f)
              return (
                (a = a((f = e))),
                (e = "" === u ? "." + g(f, 0) : u),
                E(a)
                  ? ((o = ""),
                    null != e && (o = e.replace(O, "$&/") + "/"),
                    C(a, t, o, "", function (e) {
                      return e;
                    }))
                  : null != a &&
                    (j(a) &&
                      (a = (function (e, t) {
                        return {
                          $$typeof: r,
                          type: e.type,
                          key: t,
                          ref: e.ref,
                          props: e.props,
                          _owner: e._owner,
                        };
                      })(
                        a,
                        o +
                          (!a.key || (f && f.key === a.key)
                            ? ""
                            : ("" + a.key).replace(O, "$&/") + "/") +
                          e
                      )),
                    t.push(a)),
                1
              );
            if (((f = 0), (u = "" === u ? "." : u + ":"), E(e)))
              for (var i = 0; i < e.length; i++) {
                var l = u + g((c = e[i]), i);
                f += C(c, t, o, l, a);
              }
            else if (
              ((l = (function (e) {
                return null === e || "object" != typeof e
                  ? null
                  : "function" == typeof (e = (y && e[y]) || e["@@iterator"])
                  ? e
                  : null;
              })(e)),
              "function" == typeof l)
            )
              for (e = l.call(e), i = 0; !(c = e.next()).done; )
                f += C((c = c.value), t, o, (l = u + g(c, i++)), a);
            else if ("object" === c)
              throw (
                ((t = String(e)),
                Error(
                  "Objects are not valid as a React child (found: " +
                    ("[object Object]" === t
                      ? "object with keys {" + Object.keys(e).join(", ") + "}"
                      : t) +
                    "). If you meant to render a collection of children, use an array instead."
                ))
              );
            return f;
          }
          function x(e, t, r) {
            if (null == e) return e;
            var n = [],
              o = 0;
            return (
              C(e, n, "", "", function (e) {
                return t.call(r, e, o++);
              }),
              n
            );
          }
          function P(e) {
            if (-1 === e._status) {
              var t = e._result;
              (t = t()).then(
                function (t) {
                  (0 !== e._status && -1 !== e._status) ||
                    ((e._status = 1), (e._result = t));
                },
                function (t) {
                  (0 !== e._status && -1 !== e._status) ||
                    ((e._status = 2), (e._result = t));
                }
              ),
                -1 === e._status && ((e._status = 0), (e._result = t));
            }
            if (1 === e._status) return e._result.default;
            throw e._result;
          }
          var I = { current: null },
            T = { transition: null },
            D = {
              ReactCurrentDispatcher: I,
              ReactCurrentBatchConfig: T,
              ReactCurrentOwner: w,
            };
          (t.Children = {
            map: x,
            forEach: function (e, t, r) {
              x(
                e,
                function () {
                  t.apply(this, arguments);
                },
                r
              );
            },
            count: function (e) {
              var t = 0;
              return (
                x(e, function () {
                  t++;
                }),
                t
              );
            },
            toArray: function (e) {
              return (
                x(e, function (e) {
                  return e;
                }) || []
              );
            },
            only: function (e) {
              if (!j(e))
                throw Error(
                  "React.Children.only expected to receive a single React element child."
                );
              return e;
            },
          }),
            (t.Component = m),
            (t.Fragment = o),
            (t.Profiler = a),
            (t.PureComponent = v),
            (t.StrictMode = u),
            (t.Suspense = l),
            (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
            (t.cloneElement = function (e, t, n) {
              if (null == e)
                throw Error(
                  "React.cloneElement(...): The argument must be a React element, but you passed " +
                    e +
                    "."
                );
              var o = _({}, e.props),
                u = e.key,
                a = e.ref,
                c = e._owner;
              if (null != t) {
                if (
                  (void 0 !== t.ref && ((a = t.ref), (c = w.current)),
                  void 0 !== t.key && (u = "" + t.key),
                  e.type && e.type.defaultProps)
                )
                  var f = e.type.defaultProps;
                for (i in t)
                  R.call(t, i) &&
                    !k.hasOwnProperty(i) &&
                    (o[i] = void 0 === t[i] && void 0 !== f ? f[i] : t[i]);
              }
              var i = arguments.length - 2;
              if (1 === i) o.children = n;
              else if (1 < i) {
                f = Array(i);
                for (var l = 0; l < i; l++) f[l] = arguments[l + 2];
                o.children = f;
              }
              return {
                $$typeof: r,
                type: e.type,
                key: u,
                ref: a,
                props: o,
                _owner: c,
              };
            }),
            (t.createContext = function (e) {
              return (
                ((e = {
                  $$typeof: f,
                  _currentValue: e,
                  _currentValue2: e,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                  _defaultValue: null,
                  _globalName: null,
                }).Provider = { $$typeof: c, _context: e }),
                (e.Consumer = e)
              );
            }),
            (t.createElement = $),
            (t.createFactory = function (e) {
              var t = $.bind(null, e);
              return (t.type = e), t;
            }),
            (t.createRef = function () {
              return { current: null };
            }),
            (t.forwardRef = function (e) {
              return { $$typeof: i, render: e };
            }),
            (t.isValidElement = j),
            (t.lazy = function (e) {
              return {
                $$typeof: p,
                _payload: { _status: -1, _result: e },
                _init: P,
              };
            }),
            (t.memo = function (e, t) {
              return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
            }),
            (t.startTransition = function (e) {
              var t = T.transition;
              T.transition = {};
              try {
                e();
              } finally {
                T.transition = t;
              }
            }),
            (t.unstable_act = function () {
              throw Error(
                "act(...) is not supported in production builds of React."
              );
            }),
            (t.useCallback = function (e, t) {
              return I.current.useCallback(e, t);
            }),
            (t.useContext = function (e) {
              return I.current.useContext(e);
            }),
            (t.useDebugValue = function () {}),
            (t.useDeferredValue = function (e) {
              return I.current.useDeferredValue(e);
            }),
            (t.useEffect = function (e, t) {
              return I.current.useEffect(e, t);
            }),
            (t.useId = function () {
              return I.current.useId();
            }),
            (t.useImperativeHandle = function (e, t, r) {
              return I.current.useImperativeHandle(e, t, r);
            }),
            (t.useInsertionEffect = function (e, t) {
              return I.current.useInsertionEffect(e, t);
            }),
            (t.useLayoutEffect = function (e, t) {
              return I.current.useLayoutEffect(e, t);
            }),
            (t.useMemo = function (e, t) {
              return I.current.useMemo(e, t);
            }),
            (t.useReducer = function (e, t, r) {
              return I.current.useReducer(e, t, r);
            }),
            (t.useRef = function (e) {
              return I.current.useRef(e);
            }),
            (t.useState = function (e) {
              return I.current.useState(e);
            }),
            (t.useSyncExternalStore = function (e, t, r) {
              return I.current.useSyncExternalStore(e, t, r);
            }),
            (t.useTransition = function () {
              return I.current.useTransition();
            }),
            (t.version = "18.1.0");
        },
        294: function (e, t, r) {
          e.exports = r(408);
        },
        893: function (e, t, r) {
          r(251);
        },
      },
      t = {};
    function r(n) {
      var o = t[n];
      if (void 0 !== o) return o.exports;
      var u = (t[n] = { exports: {} });
      return e[n](u, u.exports, r), u.exports;
    }
    r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    };
    var n = {};
    return r.r(n), r(893), n;
  })();
});

