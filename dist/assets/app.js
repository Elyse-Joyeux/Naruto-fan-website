function nm(l, s) {
  for (var a = 0; a < s.length; a++) {
    const c = s[a];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const f in c)
        if (f !== "default" && !(f in l)) {
          const m = Object.getOwnPropertyDescriptor(c, f);
          m &&
            Object.defineProperty(
              l,
              f,
              m.get ? m : { enumerable: !0, get: () => c[f] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) c(f);
  new MutationObserver((f) => {
    for (const m of f)
      if (m.type === "childList")
        for (const x of m.addedNodes)
          x.tagName === "LINK" && x.rel === "modulepreload" && c(x);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(f) {
    const m = {};
    return (
      f.integrity && (m.integrity = f.integrity),
      f.referrerPolicy && (m.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (m.credentials = "omit")
          : (m.credentials = "same-origin"),
      m
    );
  }
  function c(f) {
    if (f.ep) return;
    f.ep = !0;
    const m = a(f);
    fetch(f.href, m);
  }
})();
function dd(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var pa = { exports: {} },
  Gr = {},
  ma = { exports: {} },
  de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ic;
function rm() {
  if (Ic) return de;
  Ic = 1;
  var l = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    m = Symbol.for("react.provider"),
    x = Symbol.for("react.context"),
    v = Symbol.for("react.forward_ref"),
    C = Symbol.for("react.suspense"),
    _ = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    L = Symbol.iterator;
  function I(y) {
    return y === null || typeof y != "object"
      ? null
      : ((y = (L && y[L]) || y["@@iterator"]),
        typeof y == "function" ? y : null);
  }
  var G = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Y = Object.assign,
    b = {};
  function A(y, P, Q) {
    ((this.props = y),
      (this.context = P),
      (this.refs = b),
      (this.updater = Q || G));
  }
  ((A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (y, P) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, y, P, "setState");
    }),
    (A.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    }));
  function Z() {}
  Z.prototype = A.prototype;
  function ne(y, P, Q) {
    ((this.props = y),
      (this.context = P),
      (this.refs = b),
      (this.updater = Q || G));
  }
  var ie = (ne.prototype = new Z());
  ((ie.constructor = ne), Y(ie, A.prototype), (ie.isPureReactComponent = !0));
  var q = Array.isArray,
    se = Object.prototype.hasOwnProperty,
    ae = { current: null },
    re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(y, P, Q) {
    var J,
      ue = {},
      fe = null,
      oe = null;
    if (P != null)
      for (J in (P.ref !== void 0 && (oe = P.ref),
      P.key !== void 0 && (fe = "" + P.key),
      P))
        se.call(P, J) && !re.hasOwnProperty(J) && (ue[J] = P[J]);
    var pe = arguments.length - 2;
    if (pe === 1) ue.children = Q;
    else if (1 < pe) {
      for (var ve = Array(pe), Le = 0; Le < pe; Le++)
        ve[Le] = arguments[Le + 2];
      ue.children = ve;
    }
    if (y && y.defaultProps)
      for (J in ((pe = y.defaultProps), pe))
        ue[J] === void 0 && (ue[J] = pe[J]);
    return {
      $$typeof: l,
      type: y,
      key: fe,
      ref: oe,
      props: ue,
      _owner: ae.current,
    };
  }
  function we(y, P) {
    return {
      $$typeof: l,
      type: y.type,
      key: P,
      ref: y.ref,
      props: y.props,
      _owner: y._owner,
    };
  }
  function Me(y) {
    return typeof y == "object" && y !== null && y.$$typeof === l;
  }
  function He(y) {
    var P = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function (Q) {
        return P[Q];
      })
    );
  }
  var _e = /\/+/g;
  function Ae(y, P) {
    return typeof y == "object" && y !== null && y.key != null
      ? He("" + y.key)
      : P.toString(36);
  }
  function Pe(y, P, Q, J, ue) {
    var fe = typeof y;
    (fe === "undefined" || fe === "boolean") && (y = null);
    var oe = !1;
    if (y === null) oe = !0;
    else
      switch (fe) {
        case "string":
        case "number":
          oe = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case l:
            case s:
              oe = !0;
          }
      }
    if (oe)
      return (
        (oe = y),
        (ue = ue(oe)),
        (y = J === "" ? "." + Ae(oe, 0) : J),
        q(ue)
          ? ((Q = ""),
            y != null && (Q = y.replace(_e, "$&/") + "/"),
            Pe(ue, P, Q, "", function (Le) {
              return Le;
            }))
          : ue != null &&
            (Me(ue) &&
              (ue = we(
                ue,
                Q +
                  (!ue.key || (oe && oe.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(_e, "$&/") + "/") +
                  y,
              )),
            P.push(ue)),
        1
      );
    if (((oe = 0), (J = J === "" ? "." : J + ":"), q(y)))
      for (var pe = 0; pe < y.length; pe++) {
        fe = y[pe];
        var ve = J + Ae(fe, pe);
        oe += Pe(fe, P, Q, ve, ue);
      }
    else if (((ve = I(y)), typeof ve == "function"))
      for (y = ve.call(y), pe = 0; !(fe = y.next()).done; )
        ((fe = fe.value),
          (ve = J + Ae(fe, pe++)),
          (oe += Pe(fe, P, Q, ve, ue)));
    else if (fe === "object")
      throw (
        (P = String(y)),
        Error(
          "Objects are not valid as a React child (found: " +
            (P === "[object Object]"
              ? "object with keys {" + Object.keys(y).join(", ") + "}"
              : P) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return oe;
  }
  function Oe(y, P, Q) {
    if (y == null) return y;
    var J = [],
      ue = 0;
    return (
      Pe(y, J, "", "", function (fe) {
        return P.call(Q, fe, ue++);
      }),
      J
    );
  }
  function xe(y) {
    if (y._status === -1) {
      var P = y._result;
      ((P = P()),
        P.then(
          function (Q) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 1), (y._result = Q));
          },
          function (Q) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 2), (y._result = Q));
          },
        ),
        y._status === -1 && ((y._status = 0), (y._result = P)));
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var he = { current: null },
    j = { transition: null },
    X = {
      ReactCurrentDispatcher: he,
      ReactCurrentBatchConfig: j,
      ReactCurrentOwner: ae,
    };
  function D() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (de.Children = {
      map: Oe,
      forEach: function (y, P, Q) {
        Oe(
          y,
          function () {
            P.apply(this, arguments);
          },
          Q,
        );
      },
      count: function (y) {
        var P = 0;
        return (
          Oe(y, function () {
            P++;
          }),
          P
        );
      },
      toArray: function (y) {
        return (
          Oe(y, function (P) {
            return P;
          }) || []
        );
      },
      only: function (y) {
        if (!Me(y))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return y;
      },
    }),
    (de.Component = A),
    (de.Fragment = a),
    (de.Profiler = f),
    (de.PureComponent = ne),
    (de.StrictMode = c),
    (de.Suspense = C),
    (de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X),
    (de.act = D),
    (de.cloneElement = function (y, P, Q) {
      if (y == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            y +
            ".",
        );
      var J = Y({}, y.props),
        ue = y.key,
        fe = y.ref,
        oe = y._owner;
      if (P != null) {
        if (
          (P.ref !== void 0 && ((fe = P.ref), (oe = ae.current)),
          P.key !== void 0 && (ue = "" + P.key),
          y.type && y.type.defaultProps)
        )
          var pe = y.type.defaultProps;
        for (ve in P)
          se.call(P, ve) &&
            !re.hasOwnProperty(ve) &&
            (J[ve] = P[ve] === void 0 && pe !== void 0 ? pe[ve] : P[ve]);
      }
      var ve = arguments.length - 2;
      if (ve === 1) J.children = Q;
      else if (1 < ve) {
        pe = Array(ve);
        for (var Le = 0; Le < ve; Le++) pe[Le] = arguments[Le + 2];
        J.children = pe;
      }
      return {
        $$typeof: l,
        type: y.type,
        key: ue,
        ref: fe,
        props: J,
        _owner: oe,
      };
    }),
    (de.createContext = function (y) {
      return (
        (y = {
          $$typeof: x,
          _currentValue: y,
          _currentValue2: y,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (y.Provider = { $$typeof: m, _context: y }),
        (y.Consumer = y)
      );
    }),
    (de.createElement = W),
    (de.createFactory = function (y) {
      var P = W.bind(null, y);
      return ((P.type = y), P);
    }),
    (de.createRef = function () {
      return { current: null };
    }),
    (de.forwardRef = function (y) {
      return { $$typeof: v, render: y };
    }),
    (de.isValidElement = Me),
    (de.lazy = function (y) {
      return { $$typeof: O, _payload: { _status: -1, _result: y }, _init: xe };
    }),
    (de.memo = function (y, P) {
      return { $$typeof: _, type: y, compare: P === void 0 ? null : P };
    }),
    (de.startTransition = function (y) {
      var P = j.transition;
      j.transition = {};
      try {
        y();
      } finally {
        j.transition = P;
      }
    }),
    (de.unstable_act = D),
    (de.useCallback = function (y, P) {
      return he.current.useCallback(y, P);
    }),
    (de.useContext = function (y) {
      return he.current.useContext(y);
    }),
    (de.useDebugValue = function () {}),
    (de.useDeferredValue = function (y) {
      return he.current.useDeferredValue(y);
    }),
    (de.useEffect = function (y, P) {
      return he.current.useEffect(y, P);
    }),
    (de.useId = function () {
      return he.current.useId();
    }),
    (de.useImperativeHandle = function (y, P, Q) {
      return he.current.useImperativeHandle(y, P, Q);
    }),
    (de.useInsertionEffect = function (y, P) {
      return he.current.useInsertionEffect(y, P);
    }),
    (de.useLayoutEffect = function (y, P) {
      return he.current.useLayoutEffect(y, P);
    }),
    (de.useMemo = function (y, P) {
      return he.current.useMemo(y, P);
    }),
    (de.useReducer = function (y, P, Q) {
      return he.current.useReducer(y, P, Q);
    }),
    (de.useRef = function (y) {
      return he.current.useRef(y);
    }),
    (de.useState = function (y) {
      return he.current.useState(y);
    }),
    (de.useSyncExternalStore = function (y, P, Q) {
      return he.current.useSyncExternalStore(y, P, Q);
    }),
    (de.useTransition = function () {
      return he.current.useTransition();
    }),
    (de.version = "18.3.1"),
    de
  );
}
var Ac;
function Da() {
  return (Ac || ((Ac = 1), (ma.exports = rm())), ma.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dc;
function om() {
  if (Dc) return Gr;
  Dc = 1;
  var l = Da(),
    s = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    c = Object.prototype.hasOwnProperty,
    f = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(v, C, _) {
    var O,
      L = {},
      I = null,
      G = null;
    (_ !== void 0 && (I = "" + _),
      C.key !== void 0 && (I = "" + C.key),
      C.ref !== void 0 && (G = C.ref));
    for (O in C) c.call(C, O) && !m.hasOwnProperty(O) && (L[O] = C[O]);
    if (v && v.defaultProps)
      for (O in ((C = v.defaultProps), C)) L[O] === void 0 && (L[O] = C[O]);
    return {
      $$typeof: s,
      type: v,
      key: I,
      ref: G,
      props: L,
      _owner: f.current,
    };
  }
  return ((Gr.Fragment = a), (Gr.jsx = x), (Gr.jsxs = x), Gr);
}
var Fc;
function lm() {
  return (Fc || ((Fc = 1), (pa.exports = om())), pa.exports);
}
var d = lm(),
  k = Da();
const fd = dd(k),
  im = nm({ __proto__: null, default: fd }, [k]);
var ll = {},
  ha = { exports: {} },
  ot = {},
  ga = { exports: {} },
  va = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uc;
function am() {
  return (
    Uc ||
      ((Uc = 1),
      (function (l) {
        function s(j, X) {
          var D = j.length;
          j.push(X);
          e: for (; 0 < D; ) {
            var y = (D - 1) >>> 1,
              P = j[y];
            if (0 < f(P, X)) ((j[y] = X), (j[D] = P), (D = y));
            else break e;
          }
        }
        function a(j) {
          return j.length === 0 ? null : j[0];
        }
        function c(j) {
          if (j.length === 0) return null;
          var X = j[0],
            D = j.pop();
          if (D !== X) {
            j[0] = D;
            e: for (var y = 0, P = j.length, Q = P >>> 1; y < Q; ) {
              var J = 2 * (y + 1) - 1,
                ue = j[J],
                fe = J + 1,
                oe = j[fe];
              if (0 > f(ue, D))
                fe < P && 0 > f(oe, ue)
                  ? ((j[y] = oe), (j[fe] = D), (y = fe))
                  : ((j[y] = ue), (j[J] = D), (y = J));
              else if (fe < P && 0 > f(oe, D))
                ((j[y] = oe), (j[fe] = D), (y = fe));
              else break e;
            }
          }
          return X;
        }
        function f(j, X) {
          var D = j.sortIndex - X.sortIndex;
          return D !== 0 ? D : j.id - X.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var m = performance;
          l.unstable_now = function () {
            return m.now();
          };
        } else {
          var x = Date,
            v = x.now();
          l.unstable_now = function () {
            return x.now() - v;
          };
        }
        var C = [],
          _ = [],
          O = 1,
          L = null,
          I = 3,
          G = !1,
          Y = !1,
          b = !1,
          A = typeof setTimeout == "function" ? setTimeout : null,
          Z = typeof clearTimeout == "function" ? clearTimeout : null,
          ne = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ie(j) {
          for (var X = a(_); X !== null; ) {
            if (X.callback === null) c(_);
            else if (X.startTime <= j)
              (c(_), (X.sortIndex = X.expirationTime), s(C, X));
            else break;
            X = a(_);
          }
        }
        function q(j) {
          if (((b = !1), ie(j), !Y))
            if (a(C) !== null) ((Y = !0), xe(se));
            else {
              var X = a(_);
              X !== null && he(q, X.startTime - j);
            }
        }
        function se(j, X) {
          ((Y = !1), b && ((b = !1), Z(W), (W = -1)), (G = !0));
          var D = I;
          try {
            for (
              ie(X), L = a(C);
              L !== null && (!(L.expirationTime > X) || (j && !He()));
            ) {
              var y = L.callback;
              if (typeof y == "function") {
                ((L.callback = null), (I = L.priorityLevel));
                var P = y(L.expirationTime <= X);
                ((X = l.unstable_now()),
                  typeof P == "function"
                    ? (L.callback = P)
                    : L === a(C) && c(C),
                  ie(X));
              } else c(C);
              L = a(C);
            }
            if (L !== null) var Q = !0;
            else {
              var J = a(_);
              (J !== null && he(q, J.startTime - X), (Q = !1));
            }
            return Q;
          } finally {
            ((L = null), (I = D), (G = !1));
          }
        }
        var ae = !1,
          re = null,
          W = -1,
          we = 5,
          Me = -1;
        function He() {
          return !(l.unstable_now() - Me < we);
        }
        function _e() {
          if (re !== null) {
            var j = l.unstable_now();
            Me = j;
            var X = !0;
            try {
              X = re(!0, j);
            } finally {
              X ? Ae() : ((ae = !1), (re = null));
            }
          } else ae = !1;
        }
        var Ae;
        if (typeof ne == "function")
          Ae = function () {
            ne(_e);
          };
        else if (typeof MessageChannel < "u") {
          var Pe = new MessageChannel(),
            Oe = Pe.port2;
          ((Pe.port1.onmessage = _e),
            (Ae = function () {
              Oe.postMessage(null);
            }));
        } else
          Ae = function () {
            A(_e, 0);
          };
        function xe(j) {
          ((re = j), ae || ((ae = !0), Ae()));
        }
        function he(j, X) {
          W = A(function () {
            j(l.unstable_now());
          }, X);
        }
        ((l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (l.unstable_continueExecution = function () {
            Y || G || ((Y = !0), xe(se));
          }),
          (l.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (we = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return I;
          }),
          (l.unstable_getFirstCallbackNode = function () {
            return a(C);
          }),
          (l.unstable_next = function (j) {
            switch (I) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = I;
            }
            var D = I;
            I = X;
            try {
              return j();
            } finally {
              I = D;
            }
          }),
          (l.unstable_pauseExecution = function () {}),
          (l.unstable_requestPaint = function () {}),
          (l.unstable_runWithPriority = function (j, X) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var D = I;
            I = j;
            try {
              return X();
            } finally {
              I = D;
            }
          }),
          (l.unstable_scheduleCallback = function (j, X, D) {
            var y = l.unstable_now();
            switch (
              (typeof D == "object" && D !== null
                ? ((D = D.delay),
                  (D = typeof D == "number" && 0 < D ? y + D : y))
                : (D = y),
              j)
            ) {
              case 1:
                var P = -1;
                break;
              case 2:
                P = 250;
                break;
              case 5:
                P = 1073741823;
                break;
              case 4:
                P = 1e4;
                break;
              default:
                P = 5e3;
            }
            return (
              (P = D + P),
              (j = {
                id: O++,
                callback: X,
                priorityLevel: j,
                startTime: D,
                expirationTime: P,
                sortIndex: -1,
              }),
              D > y
                ? ((j.sortIndex = D),
                  s(_, j),
                  a(C) === null &&
                    j === a(_) &&
                    (b ? (Z(W), (W = -1)) : (b = !0), he(q, D - y)))
                : ((j.sortIndex = P), s(C, j), Y || G || ((Y = !0), xe(se))),
              j
            );
          }),
          (l.unstable_shouldYield = He),
          (l.unstable_wrapCallback = function (j) {
            var X = I;
            return function () {
              var D = I;
              I = X;
              try {
                return j.apply(this, arguments);
              } finally {
                I = D;
              }
            };
          }));
      })(va)),
    va
  );
}
var Wc;
function sm() {
  return (Wc || ((Wc = 1), (ga.exports = am())), ga.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bc;
function um() {
  if (Bc) return ot;
  Bc = 1;
  var l = Da(),
    s = sm();
  function a(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var c = new Set(),
    f = {};
  function m(e, t) {
    (x(e, t), x(e + "Capture", t));
  }
  function x(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var v = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    C = Object.prototype.hasOwnProperty,
    _ =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    O = {},
    L = {};
  function I(e) {
    return C.call(L, e)
      ? !0
      : C.call(O, e)
        ? !1
        : _.test(e)
          ? (L[e] = !0)
          : ((O[e] = !0), !1);
  }
  function G(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Y(e, t, n, r) {
    if (t === null || typeof t > "u" || G(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function b(e, t, n, r, o, i, u) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = u));
  }
  var A = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      A[e] = new b(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      A[t] = new b(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        A[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      A[e] = new b(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        A[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      A[e] = new b(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      A[e] = new b(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      A[e] = new b(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      A[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Z = /[\-:]([a-z])/g;
  function ne(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Z, ne);
      A[t] = new b(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Z, ne);
        A[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Z, ne);
      A[t] = new b(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      A[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (A.xlinkHref = new b(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      A[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function ie(e, t, n, r) {
    var o = A.hasOwnProperty(t) ? A[t] : null;
    (o !== null
      ? o.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Y(t, n, o, r) && (n = null),
      r || o === null
        ? I(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : o.mustUseProperty
          ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
          : ((t = o.attributeName),
            (r = o.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((o = o.type),
                (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var q = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    se = Symbol.for("react.element"),
    ae = Symbol.for("react.portal"),
    re = Symbol.for("react.fragment"),
    W = Symbol.for("react.strict_mode"),
    we = Symbol.for("react.profiler"),
    Me = Symbol.for("react.provider"),
    He = Symbol.for("react.context"),
    _e = Symbol.for("react.forward_ref"),
    Ae = Symbol.for("react.suspense"),
    Pe = Symbol.for("react.suspense_list"),
    Oe = Symbol.for("react.memo"),
    xe = Symbol.for("react.lazy"),
    he = Symbol.for("react.offscreen"),
    j = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (j && e[j]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var D = Object.assign,
    y;
  function P(e) {
    if (y === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        y = (t && t[1]) || "";
      }
    return (
      `
` +
      y +
      e
    );
  }
  var Q = !1;
  function J(e, t) {
    if (!e || Q) return "";
    Q = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (E) {
            var r = E;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (E) {
            r = E;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (E) {
          r = E;
        }
        e();
      }
    } catch (E) {
      if (E && r && typeof E.stack == "string") {
        for (
          var o = E.stack.split(`
`),
            i = r.stack.split(`
`),
            u = o.length - 1,
            p = i.length - 1;
          1 <= u && 0 <= p && o[u] !== i[p];
        )
          p--;
        for (; 1 <= u && 0 <= p; u--, p--)
          if (o[u] !== i[p]) {
            if (u !== 1 || p !== 1)
              do
                if ((u--, p--, 0 > p || o[u] !== i[p])) {
                  var h =
                    `
` + o[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      h.includes("<anonymous>") &&
                      (h = h.replace("<anonymous>", e.displayName)),
                    h
                  );
                }
              while (1 <= u && 0 <= p);
            break;
          }
      }
    } finally {
      ((Q = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? P(e) : "";
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return P(e.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = J(e.type, !1)), e);
      case 11:
        return ((e = J(e.type.render, !1)), e);
      case 1:
        return ((e = J(e.type, !0)), e);
      default:
        return "";
    }
  }
  function fe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case re:
        return "Fragment";
      case ae:
        return "Portal";
      case we:
        return "Profiler";
      case W:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case Pe:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case He:
          return (e.displayName || "Context") + ".Consumer";
        case Me:
          return (e._context.displayName || "Context") + ".Provider";
        case _e:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Oe:
          return (
            (t = e.displayName || null),
            t !== null ? t : fe(e.type) || "Memo"
          );
        case xe:
          ((t = e._payload), (e = e._init));
          try {
            return fe(e(t));
          } catch {}
      }
    return null;
  }
  function oe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return fe(t);
      case 8:
        return t === W ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function pe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ve(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Le(e) {
    var t = ve(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var o = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (u) {
            ((r = "" + u), i.call(this, u));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Et(e) {
    e._valueTracker || (e._valueTracker = Le(e));
  }
  function Ct(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ve(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function N(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Te(e, t) {
    var n = t.checked;
    return D({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Bt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = pe(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function Yr(e, t) {
    ((t = t.checked), t != null && ie(e, "checked", t, !1));
  }
  function kl(e, t) {
    Yr(e, t);
    var n = pe(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Sl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Sl(e, t.type, pe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function $a(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Sl(e, t, n) {
    (t !== "number" || N(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var sr = Array.isArray;
  function Tn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        ((o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + pe(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Nl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return D({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ka(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (sr(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: pe(n) };
  }
  function Ga(e, t) {
    var n = pe(t.value),
      r = pe(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Qa(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Ya(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function El(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ya(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var qr,
    qa = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, o);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          qr = qr || document.createElement("div"),
            qr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = qr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function ur(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var cr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    lf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(cr).forEach(function (e) {
    lf.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (cr[t] = cr[e]));
    });
  });
  function Xa(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (cr.hasOwnProperty(e) && cr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Za(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          o = Xa(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, o) : (e[n] = o));
      }
  }
  var af = D(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Cl(e, t) {
    if (t) {
      if (af[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function jl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var bl = null;
  function _l(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Pl = null,
    Rn = null,
    zn = null;
  function Ja(e) {
    if ((e = zr(e))) {
      if (typeof Pl != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = wo(t)), Pl(e.stateNode, e.type, t));
    }
  }
  function es(e) {
    Rn ? (zn ? zn.push(e) : (zn = [e])) : (Rn = e);
  }
  function ts() {
    if (Rn) {
      var e = Rn,
        t = zn;
      if (((zn = Rn = null), Ja(e), t)) for (e = 0; e < t.length; e++) Ja(t[e]);
    }
  }
  function ns(e, t) {
    return e(t);
  }
  function rs() {}
  var Tl = !1;
  function os(e, t, n) {
    if (Tl) return e(t, n);
    Tl = !0;
    try {
      return ns(e, t, n);
    } finally {
      ((Tl = !1), (Rn !== null || zn !== null) && (rs(), ts()));
    }
  }
  function dr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = wo(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var Rl = !1;
  if (v)
    try {
      var fr = {};
      (Object.defineProperty(fr, "passive", {
        get: function () {
          Rl = !0;
        },
      }),
        window.addEventListener("test", fr, fr),
        window.removeEventListener("test", fr, fr));
    } catch {
      Rl = !1;
    }
  function sf(e, t, n, r, o, i, u, p, h) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, E);
    } catch (R) {
      this.onError(R);
    }
  }
  var pr = !1,
    Xr = null,
    Zr = !1,
    zl = null,
    uf = {
      onError: function (e) {
        ((pr = !0), (Xr = e));
      },
    };
  function cf(e, t, n, r, o, i, u, p, h) {
    ((pr = !1), (Xr = null), sf.apply(uf, arguments));
  }
  function df(e, t, n, r, o, i, u, p, h) {
    if ((cf.apply(this, arguments), pr)) {
      if (pr) {
        var E = Xr;
        ((pr = !1), (Xr = null));
      } else throw Error(a(198));
      Zr || ((Zr = !0), (zl = E));
    }
  }
  function fn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function ls(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function is(e) {
    if (fn(e) !== e) throw Error(a(188));
  }
  function ff(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = fn(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var i = o.alternate;
      if (i === null) {
        if (((r = o.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === i.child) {
        for (i = o.child; i; ) {
          if (i === n) return (is(o), e);
          if (i === r) return (is(o), t);
          i = i.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) ((n = o), (r = i));
      else {
        for (var u = !1, p = o.child; p; ) {
          if (p === n) {
            ((u = !0), (n = o), (r = i));
            break;
          }
          if (p === r) {
            ((u = !0), (r = o), (n = i));
            break;
          }
          p = p.sibling;
        }
        if (!u) {
          for (p = i.child; p; ) {
            if (p === n) {
              ((u = !0), (n = i), (r = o));
              break;
            }
            if (p === r) {
              ((u = !0), (r = i), (n = o));
              break;
            }
            p = p.sibling;
          }
          if (!u) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function as(e) {
    return ((e = ff(e)), e !== null ? ss(e) : null);
  }
  function ss(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ss(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var us = s.unstable_scheduleCallback,
    cs = s.unstable_cancelCallback,
    pf = s.unstable_shouldYield,
    mf = s.unstable_requestPaint,
    Re = s.unstable_now,
    hf = s.unstable_getCurrentPriorityLevel,
    Ml = s.unstable_ImmediatePriority,
    ds = s.unstable_UserBlockingPriority,
    Jr = s.unstable_NormalPriority,
    gf = s.unstable_LowPriority,
    fs = s.unstable_IdlePriority,
    eo = null,
    jt = null;
  function vf(e) {
    if (jt && typeof jt.onCommitFiberRoot == "function")
      try {
        jt.onCommitFiberRoot(eo, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var gt = Math.clz32 ? Math.clz32 : wf,
    yf = Math.log,
    xf = Math.LN2;
  function wf(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((yf(e) / xf) | 0)) | 0);
  }
  var to = 64,
    no = 4194304;
  function mr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ro(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      o = e.suspendedLanes,
      i = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var p = u & ~o;
      p !== 0 ? (r = mr(p)) : ((i &= u), i !== 0 && (r = mr(i)));
    } else ((u = n & ~o), u !== 0 ? (r = mr(u)) : i !== 0 && (r = mr(i)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & o) === 0 &&
      ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - gt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
    return r;
  }
  function kf(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Sf(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        o = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;
    ) {
      var u = 31 - gt(i),
        p = 1 << u,
        h = o[u];
      (h === -1
        ? ((p & n) === 0 || (p & r) !== 0) && (o[u] = kf(p, t))
        : h <= t && (e.expiredLanes |= p),
        (i &= ~p));
    }
  }
  function Ol(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ps() {
    var e = to;
    return ((to <<= 1), (to & 4194240) === 0 && (to = 64), e);
  }
  function Ll(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function hr(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - gt(t)),
      (e[t] = n));
  }
  function Nf(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - gt(n),
        i = 1 << o;
      ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i));
    }
  }
  function Il(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - gt(n),
        o = 1 << r;
      ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
    }
  }
  var ye = 0;
  function ms(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var hs,
    Al,
    gs,
    vs,
    ys,
    Dl = !1,
    oo = [],
    Vt = null,
    Ht = null,
    $t = null,
    gr = new Map(),
    vr = new Map(),
    Kt = [],
    Ef =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function xs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ht = null;
        break;
      case "mouseover":
      case "mouseout":
        $t = null;
        break;
      case "pointerover":
      case "pointerout":
        gr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vr.delete(t.pointerId);
    }
  }
  function yr(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [o],
        }),
        t !== null && ((t = zr(t)), t !== null && Al(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function Cf(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return ((Vt = yr(Vt, e, t, n, r, o)), !0);
      case "dragenter":
        return ((Ht = yr(Ht, e, t, n, r, o)), !0);
      case "mouseover":
        return (($t = yr($t, e, t, n, r, o)), !0);
      case "pointerover":
        var i = o.pointerId;
        return (gr.set(i, yr(gr.get(i) || null, e, t, n, r, o)), !0);
      case "gotpointercapture":
        return (
          (i = o.pointerId),
          vr.set(i, yr(vr.get(i) || null, e, t, n, r, o)),
          !0
        );
    }
    return !1;
  }
  function ws(e) {
    var t = pn(e.target);
    if (t !== null) {
      var n = fn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = ls(n)), t !== null)) {
            ((e.blockedOn = t),
              ys(e.priority, function () {
                gs(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function lo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((bl = r), n.target.dispatchEvent(r), (bl = null));
      } else return ((t = zr(n)), t !== null && Al(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function ks(e, t, n) {
    lo(e) && n.delete(t);
  }
  function jf() {
    ((Dl = !1),
      Vt !== null && lo(Vt) && (Vt = null),
      Ht !== null && lo(Ht) && (Ht = null),
      $t !== null && lo($t) && ($t = null),
      gr.forEach(ks),
      vr.forEach(ks));
  }
  function xr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Dl ||
        ((Dl = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, jf)));
  }
  function wr(e) {
    function t(o) {
      return xr(o, e);
    }
    if (0 < oo.length) {
      xr(oo[0], e);
      for (var n = 1; n < oo.length; n++) {
        var r = oo[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Vt !== null && xr(Vt, e),
        Ht !== null && xr(Ht, e),
        $t !== null && xr($t, e),
        gr.forEach(t),
        vr.forEach(t),
        n = 0;
      n < Kt.length;
      n++
    )
      ((r = Kt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Kt.length && ((n = Kt[0]), n.blockedOn === null); )
      (ws(n), n.blockedOn === null && Kt.shift());
  }
  var Mn = q.ReactCurrentBatchConfig,
    io = !0;
  function bf(e, t, n, r) {
    var o = ye,
      i = Mn.transition;
    Mn.transition = null;
    try {
      ((ye = 1), Fl(e, t, n, r));
    } finally {
      ((ye = o), (Mn.transition = i));
    }
  }
  function _f(e, t, n, r) {
    var o = ye,
      i = Mn.transition;
    Mn.transition = null;
    try {
      ((ye = 4), Fl(e, t, n, r));
    } finally {
      ((ye = o), (Mn.transition = i));
    }
  }
  function Fl(e, t, n, r) {
    if (io) {
      var o = Ul(e, t, n, r);
      if (o === null) (ri(e, t, r, ao, n), xs(e, r));
      else if (Cf(o, e, t, n, r)) r.stopPropagation();
      else if ((xs(e, r), t & 4 && -1 < Ef.indexOf(e))) {
        for (; o !== null; ) {
          var i = zr(o);
          if (
            (i !== null && hs(i),
            (i = Ul(e, t, n, r)),
            i === null && ri(e, t, r, ao, n),
            i === o)
          )
            break;
          o = i;
        }
        o !== null && r.stopPropagation();
      } else ri(e, t, r, null, n);
    }
  }
  var ao = null;
  function Ul(e, t, n, r) {
    if (((ao = null), (e = _l(r)), (e = pn(e)), e !== null))
      if (((t = fn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = ls(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((ao = e), null);
  }
  function Ss(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (hf()) {
          case Ml:
            return 1;
          case ds:
            return 4;
          case Jr:
          case gf:
            return 16;
          case fs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Gt = null,
    Wl = null,
    so = null;
  function Ns() {
    if (so) return so;
    var e,
      t = Wl,
      n = t.length,
      r,
      o = "value" in Gt ? Gt.value : Gt.textContent,
      i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === o[i - r]; r++);
    return (so = o.slice(e, 1 < r ? 1 - r : void 0));
  }
  function uo(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function co() {
    return !0;
  }
  function Es() {
    return !1;
  }
  function lt(e) {
    function t(n, r, o, i, u) {
      ((this._reactName = n),
        (this._targetInst = o),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null));
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(i) : i[p]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? co
          : Es),
        (this.isPropagationStopped = Es),
        this
      );
    }
    return (
      D(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = co));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = co));
        },
        persist: function () {},
        isPersistent: co,
      }),
      t
    );
  }
  var On = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Bl = lt(On),
    kr = D({}, On, { view: 0, detail: 0 }),
    Pf = lt(kr),
    Vl,
    Hl,
    Sr,
    fo = D({}, kr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Kl,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Sr &&
              (Sr && e.type === "mousemove"
                ? ((Vl = e.screenX - Sr.screenX), (Hl = e.screenY - Sr.screenY))
                : (Hl = Vl = 0),
              (Sr = e)),
            Vl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Hl;
      },
    }),
    Cs = lt(fo),
    Tf = D({}, fo, { dataTransfer: 0 }),
    Rf = lt(Tf),
    zf = D({}, kr, { relatedTarget: 0 }),
    $l = lt(zf),
    Mf = D({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Of = lt(Mf),
    Lf = D({}, On, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    If = lt(Lf),
    Af = D({}, On, { data: 0 }),
    js = lt(Af),
    Df = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Ff = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Uf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Wf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Uf[e])
        ? !!t[e]
        : !1;
  }
  function Kl() {
    return Wf;
  }
  var Bf = D({}, kr, {
      key: function (e) {
        if (e.key) {
          var t = Df[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = uo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Ff[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Kl,
      charCode: function (e) {
        return e.type === "keypress" ? uo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? uo(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Vf = lt(Bf),
    Hf = D({}, fo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    bs = lt(Hf),
    $f = D({}, kr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Kl,
    }),
    Kf = lt($f),
    Gf = D({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qf = lt(Gf),
    Yf = D({}, fo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    qf = lt(Yf),
    Xf = [9, 13, 27, 32],
    Gl = v && "CompositionEvent" in window,
    Nr = null;
  v && "documentMode" in document && (Nr = document.documentMode);
  var Zf = v && "TextEvent" in window && !Nr,
    _s = v && (!Gl || (Nr && 8 < Nr && 11 >= Nr)),
    Ps = " ",
    Ts = !1;
  function Rs(e, t) {
    switch (e) {
      case "keyup":
        return Xf.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function zs(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Ln = !1;
  function Jf(e, t) {
    switch (e) {
      case "compositionend":
        return zs(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ts = !0), Ps);
      case "textInput":
        return ((e = t.data), e === Ps && Ts ? null : e);
      default:
        return null;
    }
  }
  function ep(e, t) {
    if (Ln)
      return e === "compositionend" || (!Gl && Rs(e, t))
        ? ((e = Ns()), (so = Wl = Gt = null), (Ln = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return _s && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var tp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ms(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tp[e.type] : t === "textarea";
  }
  function Os(e, t, n, r) {
    (es(r),
      (t = vo(t, "onChange")),
      0 < t.length &&
        ((n = new Bl("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var Er = null,
    Cr = null;
  function np(e) {
    Zs(e, 0);
  }
  function po(e) {
    var t = Un(e);
    if (Ct(t)) return e;
  }
  function rp(e, t) {
    if (e === "change") return t;
  }
  var Ls = !1;
  if (v) {
    var Ql;
    if (v) {
      var Yl = "oninput" in document;
      if (!Yl) {
        var Is = document.createElement("div");
        (Is.setAttribute("oninput", "return;"),
          (Yl = typeof Is.oninput == "function"));
      }
      Ql = Yl;
    } else Ql = !1;
    Ls = Ql && (!document.documentMode || 9 < document.documentMode);
  }
  function As() {
    Er && (Er.detachEvent("onpropertychange", Ds), (Cr = Er = null));
  }
  function Ds(e) {
    if (e.propertyName === "value" && po(Cr)) {
      var t = [];
      (Os(t, Cr, e, _l(e)), os(np, t));
    }
  }
  function op(e, t, n) {
    e === "focusin"
      ? (As(), (Er = t), (Cr = n), Er.attachEvent("onpropertychange", Ds))
      : e === "focusout" && As();
  }
  function lp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return po(Cr);
  }
  function ip(e, t) {
    if (e === "click") return po(t);
  }
  function ap(e, t) {
    if (e === "input" || e === "change") return po(t);
  }
  function sp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var vt = typeof Object.is == "function" ? Object.is : sp;
  function jr(e, t) {
    if (vt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!C.call(t, o) || !vt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function Fs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Us(e, t) {
    var n = Fs(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Fs(n);
    }
  }
  function Ws(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ws(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Bs() {
    for (var e = window, t = N(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = N(e.document);
    }
    return t;
  }
  function ql(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function up(e) {
    var t = Bs(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Ws(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && ql(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var o = n.textContent.length,
            i = Math.min(r.start, o);
          ((r = r.end === void 0 ? i : Math.min(r.end, o)),
            !e.extend && i > r && ((o = r), (r = i), (i = o)),
            (o = Us(n, i)));
          var u = Us(n, r);
          o &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== o.node ||
              e.anchorOffset !== o.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(o.node, o.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var cp = v && "documentMode" in document && 11 >= document.documentMode,
    In = null,
    Xl = null,
    br = null,
    Zl = !1;
  function Vs(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Zl ||
      In == null ||
      In !== N(r) ||
      ((r = In),
      "selectionStart" in r && ql(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (br && jr(br, r)) ||
        ((br = r),
        (r = vo(Xl, "onSelect")),
        0 < r.length &&
          ((t = new Bl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = In))));
  }
  function mo(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var An = {
      animationend: mo("Animation", "AnimationEnd"),
      animationiteration: mo("Animation", "AnimationIteration"),
      animationstart: mo("Animation", "AnimationStart"),
      transitionend: mo("Transition", "TransitionEnd"),
    },
    Jl = {},
    Hs = {};
  v &&
    ((Hs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete An.animationend.animation,
      delete An.animationiteration.animation,
      delete An.animationstart.animation),
    "TransitionEvent" in window || delete An.transitionend.transition);
  function ho(e) {
    if (Jl[e]) return Jl[e];
    if (!An[e]) return e;
    var t = An[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Hs) return (Jl[e] = t[n]);
    return e;
  }
  var $s = ho("animationend"),
    Ks = ho("animationiteration"),
    Gs = ho("animationstart"),
    Qs = ho("transitionend"),
    Ys = new Map(),
    qs =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Qt(e, t) {
    (Ys.set(e, t), m(t, [e]));
  }
  for (var ei = 0; ei < qs.length; ei++) {
    var ti = qs[ei],
      dp = ti.toLowerCase(),
      fp = ti[0].toUpperCase() + ti.slice(1);
    Qt(dp, "on" + fp);
  }
  (Qt($s, "onAnimationEnd"),
    Qt(Ks, "onAnimationIteration"),
    Qt(Gs, "onAnimationStart"),
    Qt("dblclick", "onDoubleClick"),
    Qt("focusin", "onFocus"),
    Qt("focusout", "onBlur"),
    Qt(Qs, "onTransitionEnd"),
    x("onMouseEnter", ["mouseout", "mouseover"]),
    x("onMouseLeave", ["mouseout", "mouseover"]),
    x("onPointerEnter", ["pointerout", "pointerover"]),
    x("onPointerLeave", ["pointerout", "pointerover"]),
    m(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    m(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    m(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    m(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    m(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var _r =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    pp = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(_r),
    );
  function Xs(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), df(r, t, void 0, e), (e.currentTarget = null));
  }
  function Zs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var p = r[u],
              h = p.instance,
              E = p.currentTarget;
            if (((p = p.listener), h !== i && o.isPropagationStopped()))
              break e;
            (Xs(o, p, E), (i = h));
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((p = r[u]),
              (h = p.instance),
              (E = p.currentTarget),
              (p = p.listener),
              h !== i && o.isPropagationStopped())
            )
              break e;
            (Xs(o, p, E), (i = h));
          }
      }
    }
    if (Zr) throw ((e = zl), (Zr = !1), (zl = null), e);
  }
  function Se(e, t) {
    var n = t[ui];
    n === void 0 && (n = t[ui] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Js(t, e, 2, !1), n.add(r));
  }
  function ni(e, t, n) {
    var r = 0;
    (t && (r |= 4), Js(n, e, r, t));
  }
  var go = "_reactListening" + Math.random().toString(36).slice(2);
  function Pr(e) {
    if (!e[go]) {
      ((e[go] = !0),
        c.forEach(function (n) {
          n !== "selectionchange" && (pp.has(n) || ni(n, !1, e), ni(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[go] || ((t[go] = !0), ni("selectionchange", !1, t));
    }
  }
  function Js(e, t, n, r) {
    switch (Ss(t)) {
      case 1:
        var o = bf;
        break;
      case 4:
        o = _f;
        break;
      default:
        o = Fl;
    }
    ((n = o.bind(null, t, n, e)),
      (o = void 0),
      !Rl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      r
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : o !== void 0
          ? e.addEventListener(t, n, { passive: o })
          : e.addEventListener(t, n, !1));
  }
  function ri(e, t, n, r, o) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var p = r.stateNode.containerInfo;
          if (p === o || (p.nodeType === 8 && p.parentNode === o)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var h = u.tag;
              if (
                (h === 3 || h === 4) &&
                ((h = u.stateNode.containerInfo),
                h === o || (h.nodeType === 8 && h.parentNode === o))
              )
                return;
              u = u.return;
            }
          for (; p !== null; ) {
            if (((u = pn(p)), u === null)) return;
            if (((h = u.tag), h === 5 || h === 6)) {
              r = i = u;
              continue e;
            }
            p = p.parentNode;
          }
        }
        r = r.return;
      }
    os(function () {
      var E = i,
        R = _l(n),
        z = [];
      e: {
        var T = Ys.get(e);
        if (T !== void 0) {
          var F = Bl,
            B = e;
          switch (e) {
            case "keypress":
              if (uo(n) === 0) break e;
            case "keydown":
            case "keyup":
              F = Vf;
              break;
            case "focusin":
              ((B = "focus"), (F = $l));
              break;
            case "focusout":
              ((B = "blur"), (F = $l));
              break;
            case "beforeblur":
            case "afterblur":
              F = $l;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              F = Cs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = Rf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = Kf;
              break;
            case $s:
            case Ks:
            case Gs:
              F = Of;
              break;
            case Qs:
              F = Qf;
              break;
            case "scroll":
              F = Pf;
              break;
            case "wheel":
              F = qf;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = If;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = bs;
          }
          var $ = (t & 4) !== 0,
            ze = !$ && e === "scroll",
            w = $ ? (T !== null ? T + "Capture" : null) : T;
          $ = [];
          for (var g = E, S; g !== null; ) {
            S = g;
            var M = S.stateNode;
            if (
              (S.tag === 5 &&
                M !== null &&
                ((S = M),
                w !== null &&
                  ((M = dr(g, w)), M != null && $.push(Tr(g, M, S)))),
              ze)
            )
              break;
            g = g.return;
          }
          0 < $.length &&
            ((T = new F(T, B, null, n, R)), z.push({ event: T, listeners: $ }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((T = e === "mouseover" || e === "pointerover"),
            (F = e === "mouseout" || e === "pointerout"),
            T &&
              n !== bl &&
              (B = n.relatedTarget || n.fromElement) &&
              (pn(B) || B[zt]))
          )
            break e;
          if (
            (F || T) &&
            ((T =
              R.window === R
                ? R
                : (T = R.ownerDocument)
                  ? T.defaultView || T.parentWindow
                  : window),
            F
              ? ((B = n.relatedTarget || n.toElement),
                (F = E),
                (B = B ? pn(B) : null),
                B !== null &&
                  ((ze = fn(B)), B !== ze || (B.tag !== 5 && B.tag !== 6)) &&
                  (B = null))
              : ((F = null), (B = E)),
            F !== B)
          ) {
            if (
              (($ = Cs),
              (M = "onMouseLeave"),
              (w = "onMouseEnter"),
              (g = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                (($ = bs),
                (M = "onPointerLeave"),
                (w = "onPointerEnter"),
                (g = "pointer")),
              (ze = F == null ? T : Un(F)),
              (S = B == null ? T : Un(B)),
              (T = new $(M, g + "leave", F, n, R)),
              (T.target = ze),
              (T.relatedTarget = S),
              (M = null),
              pn(R) === E &&
                (($ = new $(w, g + "enter", B, n, R)),
                ($.target = S),
                ($.relatedTarget = ze),
                (M = $)),
              (ze = M),
              F && B)
            )
              t: {
                for ($ = F, w = B, g = 0, S = $; S; S = Dn(S)) g++;
                for (S = 0, M = w; M; M = Dn(M)) S++;
                for (; 0 < g - S; ) (($ = Dn($)), g--);
                for (; 0 < S - g; ) ((w = Dn(w)), S--);
                for (; g--; ) {
                  if ($ === w || (w !== null && $ === w.alternate)) break t;
                  (($ = Dn($)), (w = Dn(w)));
                }
                $ = null;
              }
            else $ = null;
            (F !== null && eu(z, T, F, $, !1),
              B !== null && ze !== null && eu(z, ze, B, $, !0));
          }
        }
        e: {
          if (
            ((T = E ? Un(E) : window),
            (F = T.nodeName && T.nodeName.toLowerCase()),
            F === "select" || (F === "input" && T.type === "file"))
          )
            var K = rp;
          else if (Ms(T))
            if (Ls) K = ap;
            else {
              K = lp;
              var ee = op;
            }
          else
            (F = T.nodeName) &&
              F.toLowerCase() === "input" &&
              (T.type === "checkbox" || T.type === "radio") &&
              (K = ip);
          if (K && (K = K(e, E))) {
            Os(z, K, n, R);
            break e;
          }
          (ee && ee(e, T, E),
            e === "focusout" &&
              (ee = T._wrapperState) &&
              ee.controlled &&
              T.type === "number" &&
              Sl(T, "number", T.value));
        }
        switch (((ee = E ? Un(E) : window), e)) {
          case "focusin":
            (Ms(ee) || ee.contentEditable === "true") &&
              ((In = ee), (Xl = E), (br = null));
            break;
          case "focusout":
            br = Xl = In = null;
            break;
          case "mousedown":
            Zl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Zl = !1), Vs(z, n, R));
            break;
          case "selectionchange":
            if (cp) break;
          case "keydown":
          case "keyup":
            Vs(z, n, R);
        }
        var te;
        if (Gl)
          e: {
            switch (e) {
              case "compositionstart":
                var le = "onCompositionStart";
                break e;
              case "compositionend":
                le = "onCompositionEnd";
                break e;
              case "compositionupdate":
                le = "onCompositionUpdate";
                break e;
            }
            le = void 0;
          }
        else
          Ln
            ? Rs(e, n) && (le = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (le = "onCompositionStart");
        (le &&
          (_s &&
            n.locale !== "ko" &&
            (Ln || le !== "onCompositionStart"
              ? le === "onCompositionEnd" && Ln && (te = Ns())
              : ((Gt = R),
                (Wl = "value" in Gt ? Gt.value : Gt.textContent),
                (Ln = !0))),
          (ee = vo(E, le)),
          0 < ee.length &&
            ((le = new js(le, e, null, n, R)),
            z.push({ event: le, listeners: ee }),
            te
              ? (le.data = te)
              : ((te = zs(n)), te !== null && (le.data = te)))),
          (te = Zf ? Jf(e, n) : ep(e, n)) &&
            ((E = vo(E, "onBeforeInput")),
            0 < E.length &&
              ((R = new js("onBeforeInput", "beforeinput", null, n, R)),
              z.push({ event: R, listeners: E }),
              (R.data = te))));
      }
      Zs(z, t);
    });
  }
  function Tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function vo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e,
        i = o.stateNode;
      (o.tag === 5 &&
        i !== null &&
        ((o = i),
        (i = dr(e, n)),
        i != null && r.unshift(Tr(e, i, o)),
        (i = dr(e, t)),
        i != null && r.push(Tr(e, i, o))),
        (e = e.return));
    }
    return r;
  }
  function Dn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function eu(e, t, n, r, o) {
    for (var i = t._reactName, u = []; n !== null && n !== r; ) {
      var p = n,
        h = p.alternate,
        E = p.stateNode;
      if (h !== null && h === r) break;
      (p.tag === 5 &&
        E !== null &&
        ((p = E),
        o
          ? ((h = dr(n, i)), h != null && u.unshift(Tr(n, h, p)))
          : o || ((h = dr(n, i)), h != null && u.push(Tr(n, h, p)))),
        (n = n.return));
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var mp = /\r\n?/g,
    hp = /\u0000|\uFFFD/g;
  function tu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        mp,
        `
`,
      )
      .replace(hp, "");
  }
  function yo(e, t, n) {
    if (((t = tu(t)), tu(e) !== t && n)) throw Error(a(425));
  }
  function xo() {}
  var oi = null,
    li = null;
  function ii(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ai = typeof setTimeout == "function" ? setTimeout : void 0,
    gp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    nu = typeof Promise == "function" ? Promise : void 0,
    vp =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof nu < "u"
          ? function (e) {
              return nu.resolve(null).then(e).catch(yp);
            }
          : ai;
  function yp(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function si(e, t) {
    var n = t,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(o), wr(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = o;
    } while (n);
    wr(t);
  }
  function Yt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ru(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Fn = Math.random().toString(36).slice(2),
    bt = "__reactFiber$" + Fn,
    Rr = "__reactProps$" + Fn,
    zt = "__reactContainer$" + Fn,
    ui = "__reactEvents$" + Fn,
    xp = "__reactListeners$" + Fn,
    wp = "__reactHandles$" + Fn;
  function pn(e) {
    var t = e[bt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[zt] || n[bt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ru(e); e !== null; ) {
            if ((n = e[bt])) return n;
            e = ru(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function zr(e) {
    return (
      (e = e[bt] || e[zt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Un(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function wo(e) {
    return e[Rr] || null;
  }
  var ci = [],
    Wn = -1;
  function qt(e) {
    return { current: e };
  }
  function Ne(e) {
    0 > Wn || ((e.current = ci[Wn]), (ci[Wn] = null), Wn--);
  }
  function ke(e, t) {
    (Wn++, (ci[Wn] = e.current), (e.current = t));
  }
  var Xt = {},
    Ge = qt(Xt),
    Je = qt(!1),
    mn = Xt;
  function Bn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Xt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
      i;
    for (i in n) o[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      o
    );
  }
  function et(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function ko() {
    (Ne(Je), Ne(Ge));
  }
  function ou(e, t, n) {
    if (Ge.current !== Xt) throw Error(a(168));
    (ke(Ge, t), ke(Je, n));
  }
  function lu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(a(108, oe(e) || "Unknown", o));
    return D({}, n, r);
  }
  function So(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Xt),
      (mn = Ge.current),
      ke(Ge, e),
      ke(Je, Je.current),
      !0
    );
  }
  function iu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    (n
      ? ((e = lu(e, t, mn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Ne(Je),
        Ne(Ge),
        ke(Ge, e))
      : Ne(Je),
      ke(Je, n));
  }
  var Mt = null,
    No = !1,
    di = !1;
  function au(e) {
    Mt === null ? (Mt = [e]) : Mt.push(e);
  }
  function kp(e) {
    ((No = !0), au(e));
  }
  function Zt() {
    if (!di && Mt !== null) {
      di = !0;
      var e = 0,
        t = ye;
      try {
        var n = Mt;
        for (ye = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Mt = null), (No = !1));
      } catch (o) {
        throw (Mt !== null && (Mt = Mt.slice(e + 1)), us(Ml, Zt), o);
      } finally {
        ((ye = t), (di = !1));
      }
    }
    return null;
  }
  var Vn = [],
    Hn = 0,
    Eo = null,
    Co = 0,
    ct = [],
    dt = 0,
    hn = null,
    Ot = 1,
    Lt = "";
  function gn(e, t) {
    ((Vn[Hn++] = Co), (Vn[Hn++] = Eo), (Eo = e), (Co = t));
  }
  function su(e, t, n) {
    ((ct[dt++] = Ot), (ct[dt++] = Lt), (ct[dt++] = hn), (hn = e));
    var r = Ot;
    e = Lt;
    var o = 32 - gt(r) - 1;
    ((r &= ~(1 << o)), (n += 1));
    var i = 32 - gt(t) + o;
    if (30 < i) {
      var u = o - (o % 5);
      ((i = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (o -= u),
        (Ot = (1 << (32 - gt(t) + o)) | (n << o) | r),
        (Lt = i + e));
    } else ((Ot = (1 << i) | (n << o) | r), (Lt = e));
  }
  function fi(e) {
    e.return !== null && (gn(e, 1), su(e, 1, 0));
  }
  function pi(e) {
    for (; e === Eo; )
      ((Eo = Vn[--Hn]), (Vn[Hn] = null), (Co = Vn[--Hn]), (Vn[Hn] = null));
    for (; e === hn; )
      ((hn = ct[--dt]),
        (ct[dt] = null),
        (Lt = ct[--dt]),
        (ct[dt] = null),
        (Ot = ct[--dt]),
        (ct[dt] = null));
  }
  var it = null,
    at = null,
    Ee = !1,
    yt = null;
  function uu(e, t) {
    var n = ht(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function cu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (it = e), (at = Yt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (it = e), (at = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = hn !== null ? { id: Ot, overflow: Lt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ht(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (it = e),
              (at = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function mi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function hi(e) {
    if (Ee) {
      var t = at;
      if (t) {
        var n = t;
        if (!cu(e, t)) {
          if (mi(e)) throw Error(a(418));
          t = Yt(n.nextSibling);
          var r = it;
          t && cu(e, t)
            ? uu(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (it = e));
        }
      } else {
        if (mi(e)) throw Error(a(418));
        ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (it = e));
      }
    }
  }
  function du(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    it = e;
  }
  function jo(e) {
    if (e !== it) return !1;
    if (!Ee) return (du(e), (Ee = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !ii(e.type, e.memoizedProps))),
      t && (t = at))
    ) {
      if (mi(e)) throw (fu(), Error(a(418)));
      for (; t; ) (uu(e, t), (t = Yt(t.nextSibling)));
    }
    if ((du(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                at = Yt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        at = null;
      }
    } else at = it ? Yt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function fu() {
    for (var e = at; e; ) e = Yt(e.nextSibling);
  }
  function $n() {
    ((at = it = null), (Ee = !1));
  }
  function gi(e) {
    yt === null ? (yt = [e]) : yt.push(e);
  }
  var Sp = q.ReactCurrentBatchConfig;
  function Mr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var o = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (u) {
              var p = o.refs;
              u === null ? delete p[i] : (p[i] = u);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function bo(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function pu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function mu(e) {
    function t(w, g) {
      if (e) {
        var S = w.deletions;
        S === null ? ((w.deletions = [g]), (w.flags |= 16)) : S.push(g);
      }
    }
    function n(w, g) {
      if (!e) return null;
      for (; g !== null; ) (t(w, g), (g = g.sibling));
      return null;
    }
    function r(w, g) {
      for (w = new Map(); g !== null; )
        (g.key !== null ? w.set(g.key, g) : w.set(g.index, g), (g = g.sibling));
      return w;
    }
    function o(w, g) {
      return ((w = an(w, g)), (w.index = 0), (w.sibling = null), w);
    }
    function i(w, g, S) {
      return (
        (w.index = S),
        e
          ? ((S = w.alternate),
            S !== null
              ? ((S = S.index), S < g ? ((w.flags |= 2), g) : S)
              : ((w.flags |= 2), g))
          : ((w.flags |= 1048576), g)
      );
    }
    function u(w) {
      return (e && w.alternate === null && (w.flags |= 2), w);
    }
    function p(w, g, S, M) {
      return g === null || g.tag !== 6
        ? ((g = aa(S, w.mode, M)), (g.return = w), g)
        : ((g = o(g, S)), (g.return = w), g);
    }
    function h(w, g, S, M) {
      var K = S.type;
      return K === re
        ? R(w, g, S.props.children, M, S.key)
        : g !== null &&
            (g.elementType === K ||
              (typeof K == "object" &&
                K !== null &&
                K.$$typeof === xe &&
                pu(K) === g.type))
          ? ((M = o(g, S.props)), (M.ref = Mr(w, g, S)), (M.return = w), M)
          : ((M = Xo(S.type, S.key, S.props, null, w.mode, M)),
            (M.ref = Mr(w, g, S)),
            (M.return = w),
            M);
    }
    function E(w, g, S, M) {
      return g === null ||
        g.tag !== 4 ||
        g.stateNode.containerInfo !== S.containerInfo ||
        g.stateNode.implementation !== S.implementation
        ? ((g = sa(S, w.mode, M)), (g.return = w), g)
        : ((g = o(g, S.children || [])), (g.return = w), g);
    }
    function R(w, g, S, M, K) {
      return g === null || g.tag !== 7
        ? ((g = En(S, w.mode, M, K)), (g.return = w), g)
        : ((g = o(g, S)), (g.return = w), g);
    }
    function z(w, g, S) {
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return ((g = aa("" + g, w.mode, S)), (g.return = w), g);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case se:
            return (
              (S = Xo(g.type, g.key, g.props, null, w.mode, S)),
              (S.ref = Mr(w, null, g)),
              (S.return = w),
              S
            );
          case ae:
            return ((g = sa(g, w.mode, S)), (g.return = w), g);
          case xe:
            var M = g._init;
            return z(w, M(g._payload), S);
        }
        if (sr(g) || X(g))
          return ((g = En(g, w.mode, S, null)), (g.return = w), g);
        bo(w, g);
      }
      return null;
    }
    function T(w, g, S, M) {
      var K = g !== null ? g.key : null;
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return K !== null ? null : p(w, g, "" + S, M);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case se:
            return S.key === K ? h(w, g, S, M) : null;
          case ae:
            return S.key === K ? E(w, g, S, M) : null;
          case xe:
            return ((K = S._init), T(w, g, K(S._payload), M));
        }
        if (sr(S) || X(S)) return K !== null ? null : R(w, g, S, M, null);
        bo(w, S);
      }
      return null;
    }
    function F(w, g, S, M, K) {
      if ((typeof M == "string" && M !== "") || typeof M == "number")
        return ((w = w.get(S) || null), p(g, w, "" + M, K));
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case se:
            return (
              (w = w.get(M.key === null ? S : M.key) || null),
              h(g, w, M, K)
            );
          case ae:
            return (
              (w = w.get(M.key === null ? S : M.key) || null),
              E(g, w, M, K)
            );
          case xe:
            var ee = M._init;
            return F(w, g, S, ee(M._payload), K);
        }
        if (sr(M) || X(M)) return ((w = w.get(S) || null), R(g, w, M, K, null));
        bo(g, M);
      }
      return null;
    }
    function B(w, g, S, M) {
      for (
        var K = null, ee = null, te = g, le = (g = 0), Ve = null;
        te !== null && le < S.length;
        le++
      ) {
        te.index > le ? ((Ve = te), (te = null)) : (Ve = te.sibling);
        var ge = T(w, te, S[le], M);
        if (ge === null) {
          te === null && (te = Ve);
          break;
        }
        (e && te && ge.alternate === null && t(w, te),
          (g = i(ge, g, le)),
          ee === null ? (K = ge) : (ee.sibling = ge),
          (ee = ge),
          (te = Ve));
      }
      if (le === S.length) return (n(w, te), Ee && gn(w, le), K);
      if (te === null) {
        for (; le < S.length; le++)
          ((te = z(w, S[le], M)),
            te !== null &&
              ((g = i(te, g, le)),
              ee === null ? (K = te) : (ee.sibling = te),
              (ee = te)));
        return (Ee && gn(w, le), K);
      }
      for (te = r(w, te); le < S.length; le++)
        ((Ve = F(te, w, le, S[le], M)),
          Ve !== null &&
            (e &&
              Ve.alternate !== null &&
              te.delete(Ve.key === null ? le : Ve.key),
            (g = i(Ve, g, le)),
            ee === null ? (K = Ve) : (ee.sibling = Ve),
            (ee = Ve)));
      return (
        e &&
          te.forEach(function (sn) {
            return t(w, sn);
          }),
        Ee && gn(w, le),
        K
      );
    }
    function $(w, g, S, M) {
      var K = X(S);
      if (typeof K != "function") throw Error(a(150));
      if (((S = K.call(S)), S == null)) throw Error(a(151));
      for (
        var ee = (K = null), te = g, le = (g = 0), Ve = null, ge = S.next();
        te !== null && !ge.done;
        le++, ge = S.next()
      ) {
        te.index > le ? ((Ve = te), (te = null)) : (Ve = te.sibling);
        var sn = T(w, te, ge.value, M);
        if (sn === null) {
          te === null && (te = Ve);
          break;
        }
        (e && te && sn.alternate === null && t(w, te),
          (g = i(sn, g, le)),
          ee === null ? (K = sn) : (ee.sibling = sn),
          (ee = sn),
          (te = Ve));
      }
      if (ge.done) return (n(w, te), Ee && gn(w, le), K);
      if (te === null) {
        for (; !ge.done; le++, ge = S.next())
          ((ge = z(w, ge.value, M)),
            ge !== null &&
              ((g = i(ge, g, le)),
              ee === null ? (K = ge) : (ee.sibling = ge),
              (ee = ge)));
        return (Ee && gn(w, le), K);
      }
      for (te = r(w, te); !ge.done; le++, ge = S.next())
        ((ge = F(te, w, le, ge.value, M)),
          ge !== null &&
            (e &&
              ge.alternate !== null &&
              te.delete(ge.key === null ? le : ge.key),
            (g = i(ge, g, le)),
            ee === null ? (K = ge) : (ee.sibling = ge),
            (ee = ge)));
      return (
        e &&
          te.forEach(function (tm) {
            return t(w, tm);
          }),
        Ee && gn(w, le),
        K
      );
    }
    function ze(w, g, S, M) {
      if (
        (typeof S == "object" &&
          S !== null &&
          S.type === re &&
          S.key === null &&
          (S = S.props.children),
        typeof S == "object" && S !== null)
      ) {
        switch (S.$$typeof) {
          case se:
            e: {
              for (var K = S.key, ee = g; ee !== null; ) {
                if (ee.key === K) {
                  if (((K = S.type), K === re)) {
                    if (ee.tag === 7) {
                      (n(w, ee.sibling),
                        (g = o(ee, S.props.children)),
                        (g.return = w),
                        (w = g));
                      break e;
                    }
                  } else if (
                    ee.elementType === K ||
                    (typeof K == "object" &&
                      K !== null &&
                      K.$$typeof === xe &&
                      pu(K) === ee.type)
                  ) {
                    (n(w, ee.sibling),
                      (g = o(ee, S.props)),
                      (g.ref = Mr(w, ee, S)),
                      (g.return = w),
                      (w = g));
                    break e;
                  }
                  n(w, ee);
                  break;
                } else t(w, ee);
                ee = ee.sibling;
              }
              S.type === re
                ? ((g = En(S.props.children, w.mode, M, S.key)),
                  (g.return = w),
                  (w = g))
                : ((M = Xo(S.type, S.key, S.props, null, w.mode, M)),
                  (M.ref = Mr(w, g, S)),
                  (M.return = w),
                  (w = M));
            }
            return u(w);
          case ae:
            e: {
              for (ee = S.key; g !== null; ) {
                if (g.key === ee)
                  if (
                    g.tag === 4 &&
                    g.stateNode.containerInfo === S.containerInfo &&
                    g.stateNode.implementation === S.implementation
                  ) {
                    (n(w, g.sibling),
                      (g = o(g, S.children || [])),
                      (g.return = w),
                      (w = g));
                    break e;
                  } else {
                    n(w, g);
                    break;
                  }
                else t(w, g);
                g = g.sibling;
              }
              ((g = sa(S, w.mode, M)), (g.return = w), (w = g));
            }
            return u(w);
          case xe:
            return ((ee = S._init), ze(w, g, ee(S._payload), M));
        }
        if (sr(S)) return B(w, g, S, M);
        if (X(S)) return $(w, g, S, M);
        bo(w, S);
      }
      return (typeof S == "string" && S !== "") || typeof S == "number"
        ? ((S = "" + S),
          g !== null && g.tag === 6
            ? (n(w, g.sibling), (g = o(g, S)), (g.return = w), (w = g))
            : (n(w, g), (g = aa(S, w.mode, M)), (g.return = w), (w = g)),
          u(w))
        : n(w, g);
    }
    return ze;
  }
  var Kn = mu(!0),
    hu = mu(!1),
    _o = qt(null),
    Po = null,
    Gn = null,
    vi = null;
  function yi() {
    vi = Gn = Po = null;
  }
  function xi(e) {
    var t = _o.current;
    (Ne(_o), (e._currentValue = t));
  }
  function wi(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Qn(e, t) {
    ((Po = e),
      (vi = Gn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (tt = !0), (e.firstContext = null)));
  }
  function ft(e) {
    var t = e._currentValue;
    if (vi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Gn === null)) {
        if (Po === null) throw Error(a(308));
        ((Gn = e), (Po.dependencies = { lanes: 0, firstContext: e }));
      } else Gn = Gn.next = e;
    return t;
  }
  var vn = null;
  function ki(e) {
    vn === null ? (vn = [e]) : vn.push(e);
  }
  function gu(e, t, n, r) {
    var o = t.interleaved;
    return (
      o === null ? ((n.next = n), ki(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      It(e, r)
    );
  }
  function It(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Jt = !1;
  function Si(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function vu(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function At(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function en(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (me & 2) !== 0)) {
      var o = r.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (r.pending = t),
        It(e, n)
      );
    }
    return (
      (o = r.interleaved),
      o === null ? ((t.next = t), ki(r)) : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      It(e, n)
    );
  }
  function To(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Il(e, n));
    }
  }
  function yu(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var o = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (i === null ? (o = i = u) : (i = i.next = u), (n = n.next));
        } while (n !== null);
        i === null ? (o = i = t) : (i = i.next = t);
      } else o = i = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function Ro(e, t, n, r) {
    var o = e.updateQueue;
    Jt = !1;
    var i = o.firstBaseUpdate,
      u = o.lastBaseUpdate,
      p = o.shared.pending;
    if (p !== null) {
      o.shared.pending = null;
      var h = p,
        E = h.next;
      ((h.next = null), u === null ? (i = E) : (u.next = E), (u = h));
      var R = e.alternate;
      R !== null &&
        ((R = R.updateQueue),
        (p = R.lastBaseUpdate),
        p !== u &&
          (p === null ? (R.firstBaseUpdate = E) : (p.next = E),
          (R.lastBaseUpdate = h)));
    }
    if (i !== null) {
      var z = o.baseState;
      ((u = 0), (R = E = h = null), (p = i));
      do {
        var T = p.lane,
          F = p.eventTime;
        if ((r & T) === T) {
          R !== null &&
            (R = R.next =
              {
                eventTime: F,
                lane: 0,
                tag: p.tag,
                payload: p.payload,
                callback: p.callback,
                next: null,
              });
          e: {
            var B = e,
              $ = p;
            switch (((T = t), (F = n), $.tag)) {
              case 1:
                if (((B = $.payload), typeof B == "function")) {
                  z = B.call(F, z, T);
                  break e;
                }
                z = B;
                break e;
              case 3:
                B.flags = (B.flags & -65537) | 128;
              case 0:
                if (
                  ((B = $.payload),
                  (T = typeof B == "function" ? B.call(F, z, T) : B),
                  T == null)
                )
                  break e;
                z = D({}, z, T);
                break e;
              case 2:
                Jt = !0;
            }
          }
          p.callback !== null &&
            p.lane !== 0 &&
            ((e.flags |= 64),
            (T = o.effects),
            T === null ? (o.effects = [p]) : T.push(p));
        } else
          ((F = {
            eventTime: F,
            lane: T,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            R === null ? ((E = R = F), (h = z)) : (R = R.next = F),
            (u |= T));
        if (((p = p.next), p === null)) {
          if (((p = o.shared.pending), p === null)) break;
          ((T = p),
            (p = T.next),
            (T.next = null),
            (o.lastBaseUpdate = T),
            (o.shared.pending = null));
        }
      } while (!0);
      if (
        (R === null && (h = z),
        (o.baseState = h),
        (o.firstBaseUpdate = E),
        (o.lastBaseUpdate = R),
        (t = o.shared.interleaved),
        t !== null)
      ) {
        o = t;
        do ((u |= o.lane), (o = o.next));
        while (o !== t);
      } else i === null && (o.shared.lanes = 0);
      ((wn |= u), (e.lanes = u), (e.memoizedState = z));
    }
  }
  function xu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback;
        if (o !== null) {
          if (((r.callback = null), (r = n), typeof o != "function"))
            throw Error(a(191, o));
          o.call(r);
        }
      }
  }
  var Or = {},
    _t = qt(Or),
    Lr = qt(Or),
    Ir = qt(Or);
  function yn(e) {
    if (e === Or) throw Error(a(174));
    return e;
  }
  function Ni(e, t) {
    switch ((ke(Ir, t), ke(Lr, e), ke(_t, Or), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : El(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = El(t, e)));
    }
    (Ne(_t), ke(_t, t));
  }
  function Yn() {
    (Ne(_t), Ne(Lr), Ne(Ir));
  }
  function wu(e) {
    yn(Ir.current);
    var t = yn(_t.current),
      n = El(t, e.type);
    t !== n && (ke(Lr, e), ke(_t, n));
  }
  function Ei(e) {
    Lr.current === e && (Ne(_t), Ne(Lr));
  }
  var Ce = qt(0);
  function zo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Ci = [];
  function ji() {
    for (var e = 0; e < Ci.length; e++)
      Ci[e]._workInProgressVersionPrimary = null;
    Ci.length = 0;
  }
  var Mo = q.ReactCurrentDispatcher,
    bi = q.ReactCurrentBatchConfig,
    xn = 0,
    je = null,
    De = null,
    We = null,
    Oo = !1,
    Ar = !1,
    Dr = 0,
    Np = 0;
  function Qe() {
    throw Error(a(321));
  }
  function _i(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!vt(e[n], t[n])) return !1;
    return !0;
  }
  function Pi(e, t, n, r, o, i) {
    if (
      ((xn = i),
      (je = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Mo.current = e === null || e.memoizedState === null ? bp : _p),
      (e = n(r, o)),
      Ar)
    ) {
      i = 0;
      do {
        if (((Ar = !1), (Dr = 0), 25 <= i)) throw Error(a(301));
        ((i += 1),
          (We = De = null),
          (t.updateQueue = null),
          (Mo.current = Pp),
          (e = n(r, o)));
      } while (Ar);
    }
    if (
      ((Mo.current = Ao),
      (t = De !== null && De.next !== null),
      (xn = 0),
      (We = De = je = null),
      (Oo = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function Ti() {
    var e = Dr !== 0;
    return ((Dr = 0), e);
  }
  function Pt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (We === null ? (je.memoizedState = We = e) : (We = We.next = e), We);
  }
  function pt() {
    if (De === null) {
      var e = je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = De.next;
    var t = We === null ? je.memoizedState : We.next;
    if (t !== null) ((We = t), (De = e));
    else {
      if (e === null) throw Error(a(310));
      ((De = e),
        (e = {
          memoizedState: De.memoizedState,
          baseState: De.baseState,
          baseQueue: De.baseQueue,
          queue: De.queue,
          next: null,
        }),
        We === null ? (je.memoizedState = We = e) : (We = We.next = e));
    }
    return We;
  }
  function Fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ri(e) {
    var t = pt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = De,
      o = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (o !== null) {
        var u = o.next;
        ((o.next = i.next), (i.next = u));
      }
      ((r.baseQueue = o = i), (n.pending = null));
    }
    if (o !== null) {
      ((i = o.next), (r = r.baseState));
      var p = (u = null),
        h = null,
        E = i;
      do {
        var R = E.lane;
        if ((xn & R) === R)
          (h !== null &&
            (h = h.next =
              {
                lane: 0,
                action: E.action,
                hasEagerState: E.hasEagerState,
                eagerState: E.eagerState,
                next: null,
              }),
            (r = E.hasEagerState ? E.eagerState : e(r, E.action)));
        else {
          var z = {
            lane: R,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          };
          (h === null ? ((p = h = z), (u = r)) : (h = h.next = z),
            (je.lanes |= R),
            (wn |= R));
        }
        E = E.next;
      } while (E !== null && E !== i);
      (h === null ? (u = r) : (h.next = p),
        vt(r, t.memoizedState) || (tt = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = h),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      o = e;
      do ((i = o.lane), (je.lanes |= i), (wn |= i), (o = o.next));
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function zi(e) {
    var t = pt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      o = n.pending,
      i = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var u = (o = o.next);
      do ((i = e(i, u.action)), (u = u.next));
      while (u !== o);
      (vt(i, t.memoizedState) || (tt = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function ku() {}
  function Su(e, t) {
    var n = je,
      r = pt(),
      o = t(),
      i = !vt(r.memoizedState, o);
    if (
      (i && ((r.memoizedState = o), (tt = !0)),
      (r = r.queue),
      Mi(Cu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Ur(9, Eu.bind(null, n, r, o, t), void 0, null),
        Be === null)
      )
        throw Error(a(349));
      (xn & 30) !== 0 || Nu(n, t, o);
    }
    return o;
  }
  function Nu(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (je.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Eu(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ju(t) && bu(e));
  }
  function Cu(e, t, n) {
    return n(function () {
      ju(t) && bu(e);
    });
  }
  function ju(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !vt(e, n);
    } catch {
      return !0;
    }
  }
  function bu(e) {
    var t = It(e, 1);
    t !== null && St(t, e, 1, -1);
  }
  function _u(e) {
    var t = Pt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = jp.bind(null, je, e)),
      [t.memoizedState, e]
    );
  }
  function Ur(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (je.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Pu() {
    return pt().memoizedState;
  }
  function Lo(e, t, n, r) {
    var o = Pt();
    ((je.flags |= e),
      (o.memoizedState = Ur(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function Io(e, t, n, r) {
    var o = pt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (De !== null) {
      var u = De.memoizedState;
      if (((i = u.destroy), r !== null && _i(r, u.deps))) {
        o.memoizedState = Ur(t, n, i, r);
        return;
      }
    }
    ((je.flags |= e), (o.memoizedState = Ur(1 | t, n, i, r)));
  }
  function Tu(e, t) {
    return Lo(8390656, 8, e, t);
  }
  function Mi(e, t) {
    return Io(2048, 8, e, t);
  }
  function Ru(e, t) {
    return Io(4, 2, e, t);
  }
  function zu(e, t) {
    return Io(4, 4, e, t);
  }
  function Mu(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ou(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      Io(4, 4, Mu.bind(null, t, e), n)
    );
  }
  function Oi() {}
  function Lu(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && _i(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Iu(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && _i(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Au(e, t, n) {
    return (xn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (tt = !0)), (e.memoizedState = n))
      : (vt(n, t) ||
          ((n = ps()), (je.lanes |= n), (wn |= n), (e.baseState = !0)),
        t);
  }
  function Ep(e, t) {
    var n = ye;
    ((ye = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = bi.transition;
    bi.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ye = n), (bi.transition = r));
    }
  }
  function Du() {
    return pt().memoizedState;
  }
  function Cp(e, t, n) {
    var r = on(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Fu(e))
    )
      Uu(t, n);
    else if (((n = gu(e, t, n, r)), n !== null)) {
      var o = Ze();
      (St(n, e, r, o), Wu(n, t, r));
    }
  }
  function jp(e, t, n) {
    var r = on(e),
      o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Fu(e)) Uu(t, o);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            p = i(u, n);
          if (((o.hasEagerState = !0), (o.eagerState = p), vt(p, u))) {
            var h = t.interleaved;
            (h === null
              ? ((o.next = o), ki(t))
              : ((o.next = h.next), (h.next = o)),
              (t.interleaved = o));
            return;
          }
        } catch {
        } finally {
        }
      ((n = gu(e, t, o, r)),
        n !== null && ((o = Ze()), St(n, e, r, o), Wu(n, t, r)));
    }
  }
  function Fu(e) {
    var t = e.alternate;
    return e === je || (t !== null && t === je);
  }
  function Uu(e, t) {
    Ar = Oo = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Wu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Il(e, n));
    }
  }
  var Ao = {
      readContext: ft,
      useCallback: Qe,
      useContext: Qe,
      useEffect: Qe,
      useImperativeHandle: Qe,
      useInsertionEffect: Qe,
      useLayoutEffect: Qe,
      useMemo: Qe,
      useReducer: Qe,
      useRef: Qe,
      useState: Qe,
      useDebugValue: Qe,
      useDeferredValue: Qe,
      useTransition: Qe,
      useMutableSource: Qe,
      useSyncExternalStore: Qe,
      useId: Qe,
      unstable_isNewReconciler: !1,
    },
    bp = {
      readContext: ft,
      useCallback: function (e, t) {
        return ((Pt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ft,
      useEffect: Tu,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Lo(4194308, 4, Mu.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Lo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Lo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Pt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Pt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Cp.bind(null, je, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Pt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: _u,
      useDebugValue: Oi,
      useDeferredValue: function (e) {
        return (Pt().memoizedState = e);
      },
      useTransition: function () {
        var e = _u(!1),
          t = e[0];
        return ((e = Ep.bind(null, e[1])), (Pt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = je,
          o = Pt();
        if (Ee) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), Be === null)) throw Error(a(349));
          (xn & 30) !== 0 || Nu(r, t, n);
        }
        o.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (o.queue = i),
          Tu(Cu.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          Ur(9, Eu.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Pt(),
          t = Be.identifierPrefix;
        if (Ee) {
          var n = Lt,
            r = Ot;
          ((n = (r & ~(1 << (32 - gt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Dr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = Np++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    _p = {
      readContext: ft,
      useCallback: Lu,
      useContext: ft,
      useEffect: Mi,
      useImperativeHandle: Ou,
      useInsertionEffect: Ru,
      useLayoutEffect: zu,
      useMemo: Iu,
      useReducer: Ri,
      useRef: Pu,
      useState: function () {
        return Ri(Fr);
      },
      useDebugValue: Oi,
      useDeferredValue: function (e) {
        var t = pt();
        return Au(t, De.memoizedState, e);
      },
      useTransition: function () {
        var e = Ri(Fr)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: ku,
      useSyncExternalStore: Su,
      useId: Du,
      unstable_isNewReconciler: !1,
    },
    Pp = {
      readContext: ft,
      useCallback: Lu,
      useContext: ft,
      useEffect: Mi,
      useImperativeHandle: Ou,
      useInsertionEffect: Ru,
      useLayoutEffect: zu,
      useMemo: Iu,
      useReducer: zi,
      useRef: Pu,
      useState: function () {
        return zi(Fr);
      },
      useDebugValue: Oi,
      useDeferredValue: function (e) {
        var t = pt();
        return De === null ? (t.memoizedState = e) : Au(t, De.memoizedState, e);
      },
      useTransition: function () {
        var e = zi(Fr)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: ku,
      useSyncExternalStore: Su,
      useId: Du,
      unstable_isNewReconciler: !1,
    };
  function xt(e, t) {
    if (e && e.defaultProps) {
      ((t = D({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Li(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : D({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Do = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? fn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ze(),
        o = on(e),
        i = At(r, o);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = en(e, i, o)),
        t !== null && (St(t, e, o, r), To(t, e, o)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ze(),
        o = on(e),
        i = At(r, o);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = en(e, i, o)),
        t !== null && (St(t, e, o, r), To(t, e, o)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ze(),
        r = on(e),
        o = At(n, r);
      ((o.tag = 2),
        t != null && (o.callback = t),
        (t = en(e, o, r)),
        t !== null && (St(t, e, r, n), To(t, e, r)));
    },
  };
  function Bu(e, t, n, r, o, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !jr(n, r) || !jr(o, i)
          : !0
    );
  }
  function Vu(e, t, n) {
    var r = !1,
      o = Xt,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = ft(i))
        : ((o = et(t) ? mn : Ge.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Bn(e, o) : Xt)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Do),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Hu(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Do.enqueueReplaceState(t, t.state, null));
  }
  function Ii(e, t, n, r) {
    var o = e.stateNode;
    ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Si(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (o.context = ft(i))
      : ((i = et(t) ? mn : Ge.current), (o.context = Bn(e, i))),
      (o.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Li(e, t, i, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function" ||
        (typeof o.UNSAFE_componentWillMount != "function" &&
          typeof o.componentWillMount != "function") ||
        ((t = o.state),
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && Do.enqueueReplaceState(o, o.state, null),
        Ro(e, n, o, r),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function qn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += ue(r)), (r = r.return));
      while (r);
      var o = n;
    } catch (i) {
      o =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Ai(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Di(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Tp = typeof WeakMap == "function" ? WeakMap : Map;
  function $u(e, t, n) {
    ((n = At(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        ($o || (($o = !0), (Ji = r)), Di(e, t));
      }),
      n
    );
  }
  function Ku(e, t, n) {
    ((n = At(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      ((n.payload = function () {
        return r(o);
      }),
        (n.callback = function () {
          Di(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          (Di(e, t),
            typeof r != "function" &&
              (nn === null ? (nn = new Set([this])) : nn.add(this)));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : "",
          });
        }),
      n
    );
  }
  function Gu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Tp();
      var o = new Set();
      r.set(t, o);
    } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
    o.has(n) || (o.add(n), (e = Hp.bind(null, e, t, n)), t.then(e, e));
  }
  function Qu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Yu(e, t, n, r, o) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = At(-1, 1)), (t.tag = 2), en(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = o), e);
  }
  var Rp = q.ReactCurrentOwner,
    tt = !1;
  function Xe(e, t, n, r) {
    t.child = e === null ? hu(t, null, n, r) : Kn(t, e.child, n, r);
  }
  function qu(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
      Qn(t, o),
      (r = Pi(e, t, n, r, i, o)),
      (n = Ti()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Dt(e, t, o))
        : (Ee && n && fi(t), (t.flags |= 1), Xe(e, t, r, o), t.child)
    );
  }
  function Xu(e, t, n, r, o) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !ia(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Zu(e, t, i, r, o))
        : ((e = Xo(n.type, null, r, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), (e.lanes & o) === 0)) {
      var u = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : jr), n(u, r) && e.ref === t.ref)
      )
        return Dt(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = an(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Zu(e, t, n, r, o) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (jr(i, r) && e.ref === t.ref)
        if (((tt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
          (e.flags & 131072) !== 0 && (tt = !0);
        else return ((t.lanes = e.lanes), Dt(e, t, o));
    }
    return Fi(e, t, n, r, o);
  }
  function Ju(e, t, n) {
    var r = t.pendingProps,
      o = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ke(Zn, st),
          (st |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ke(Zn, st),
            (st |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          ke(Zn, st),
          (st |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ke(Zn, st),
        (st |= r));
    return (Xe(e, t, o, n), t.child);
  }
  function ec(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Fi(e, t, n, r, o) {
    var i = et(n) ? mn : Ge.current;
    return (
      (i = Bn(t, i)),
      Qn(t, o),
      (n = Pi(e, t, n, r, i, o)),
      (r = Ti()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Dt(e, t, o))
        : (Ee && r && fi(t), (t.flags |= 1), Xe(e, t, n, o), t.child)
    );
  }
  function tc(e, t, n, r, o) {
    if (et(n)) {
      var i = !0;
      So(t);
    } else i = !1;
    if ((Qn(t, o), t.stateNode === null))
      (Uo(e, t), Vu(t, n, r), Ii(t, n, r, o), (r = !0));
    else if (e === null) {
      var u = t.stateNode,
        p = t.memoizedProps;
      u.props = p;
      var h = u.context,
        E = n.contextType;
      typeof E == "object" && E !== null
        ? (E = ft(E))
        : ((E = et(n) ? mn : Ge.current), (E = Bn(t, E)));
      var R = n.getDerivedStateFromProps,
        z =
          typeof R == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function";
      (z ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((p !== r || h !== E) && Hu(t, u, r, E)),
        (Jt = !1));
      var T = t.memoizedState;
      ((u.state = T),
        Ro(t, r, u, o),
        (h = t.memoizedState),
        p !== r || T !== h || Je.current || Jt
          ? (typeof R == "function" && (Li(t, n, R, r), (h = t.memoizedState)),
            (p = Jt || Bu(t, n, p, r, T, h, E))
              ? (z ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = h)),
            (u.props = r),
            (u.state = h),
            (u.context = E),
            (r = p))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((u = t.stateNode),
        vu(e, t),
        (p = t.memoizedProps),
        (E = t.type === t.elementType ? p : xt(t.type, p)),
        (u.props = E),
        (z = t.pendingProps),
        (T = u.context),
        (h = n.contextType),
        typeof h == "object" && h !== null
          ? (h = ft(h))
          : ((h = et(n) ? mn : Ge.current), (h = Bn(t, h))));
      var F = n.getDerivedStateFromProps;
      ((R =
        typeof F == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((p !== z || T !== h) && Hu(t, u, r, h)),
        (Jt = !1),
        (T = t.memoizedState),
        (u.state = T),
        Ro(t, r, u, o));
      var B = t.memoizedState;
      p !== z || T !== B || Je.current || Jt
        ? (typeof F == "function" && (Li(t, n, F, r), (B = t.memoizedState)),
          (E = Jt || Bu(t, n, E, r, T, B, h) || !1)
            ? (R ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(r, B, h),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, B, h)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (p === e.memoizedProps && T === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && T === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = B)),
          (u.props = r),
          (u.state = B),
          (u.context = h),
          (r = E))
        : (typeof u.componentDidUpdate != "function" ||
            (p === e.memoizedProps && T === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && T === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ui(e, t, n, r, i, o);
  }
  function Ui(e, t, n, r, o, i) {
    ec(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return (o && iu(t, n, !1), Dt(e, t, i));
    ((r = t.stateNode), (Rp.current = t));
    var p =
      u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = Kn(t, e.child, null, i)), (t.child = Kn(t, null, p, i)))
        : Xe(e, t, p, i),
      (t.memoizedState = r.state),
      o && iu(t, n, !0),
      t.child
    );
  }
  function nc(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? ou(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ou(e, t.context, !1),
      Ni(e, t.containerInfo));
  }
  function rc(e, t, n, r, o) {
    return ($n(), gi(o), (t.flags |= 256), Xe(e, t, n, r), t.child);
  }
  var Wi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Bi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function oc(e, t, n) {
    var r = t.pendingProps,
      o = Ce.current,
      i = !1,
      u = (t.flags & 128) !== 0,
      p;
    if (
      ((p = u) ||
        (p = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      p
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (o |= 1),
      ke(Ce, o & 1),
      e === null)
    )
      return (
        hi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((u = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (u = { mode: "hidden", children: u }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = u))
                  : (i = Zo(u, r, 0, null)),
                (e = En(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = Bi(n)),
                (t.memoizedState = Wi),
                e)
              : Vi(t, u))
      );
    if (((o = e.memoizedState), o !== null && ((p = o.dehydrated), p !== null)))
      return zp(e, t, u, r, p, o, n);
    if (i) {
      ((i = r.fallback), (u = t.mode), (o = e.child), (p = o.sibling));
      var h = { mode: "hidden", children: r.children };
      return (
        (u & 1) === 0 && t.child !== o
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = h),
            (t.deletions = null))
          : ((r = an(o, h)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
        p !== null ? (i = an(p, i)) : ((i = En(i, u, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? Bi(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (i.memoizedState = u),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Wi),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = an(i, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Vi(e, t) {
    return (
      (t = Zo({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Fo(e, t, n, r) {
    return (
      r !== null && gi(r),
      Kn(t, e.child, null, n),
      (e = Vi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function zp(e, t, n, r, o, i, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Ai(Error(a(422)))), Fo(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (o = t.mode),
            (r = Zo({ mode: "visible", children: r.children }, o, 0, null)),
            (i = En(i, o, u, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && Kn(t, e.child, null, u),
            (t.child.memoizedState = Bi(u)),
            (t.memoizedState = Wi),
            i);
    if ((t.mode & 1) === 0) return Fo(e, t, u, null);
    if (o.data === "$!") {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var p = r.dgst;
      return (
        (r = p),
        (i = Error(a(419))),
        (r = Ai(i, r, void 0)),
        Fo(e, t, u, r)
      );
    }
    if (((p = (u & e.childLanes) !== 0), tt || p)) {
      if (((r = Be), r !== null)) {
        switch (u & -u) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        ((o = (o & (r.suspendedLanes | u)) !== 0 ? 0 : o),
          o !== 0 &&
            o !== i.retryLane &&
            ((i.retryLane = o), It(e, o), St(r, e, o, -1)));
      }
      return (la(), (r = Ai(Error(a(421)))), Fo(e, t, u, r));
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = $p.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (at = Yt(o.nextSibling)),
        (it = t),
        (Ee = !0),
        (yt = null),
        e !== null &&
          ((ct[dt++] = Ot),
          (ct[dt++] = Lt),
          (ct[dt++] = hn),
          (Ot = e.id),
          (Lt = e.overflow),
          (hn = t)),
        (t = Vi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function lc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), wi(e.return, t, n));
  }
  function Hi(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: o,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = o));
  }
  function ic(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      i = r.tail;
    if ((Xe(e, t, r.children, n), (r = Ce.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && lc(e, n, t);
          else if (e.tag === 19) lc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((ke(Ce, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            ((e = n.alternate),
              e !== null && zo(e) === null && (o = n),
              (n = n.sibling));
          ((n = o),
            n === null
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
            Hi(t, !1, o, n, i));
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (((e = o.alternate), e !== null && zo(e) === null)) {
              t.child = o;
              break;
            }
            ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
          }
          Hi(t, !0, n, null, i);
          break;
        case "together":
          Hi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Uo(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Dt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (wn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = an(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Mp(e, t, n) {
    switch (t.tag) {
      case 3:
        (nc(t), $n());
        break;
      case 5:
        wu(t);
        break;
      case 1:
        et(t.type) && So(t);
        break;
      case 4:
        Ni(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          o = t.memoizedProps.value;
        (ke(_o, r._currentValue), (r._currentValue = o));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ke(Ce, Ce.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? oc(e, t, n)
              : (ke(Ce, Ce.current & 1),
                (e = Dt(e, t, n)),
                e !== null ? e.sibling : null);
        ke(Ce, Ce.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ic(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          ke(Ce, Ce.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Ju(e, t, n));
    }
    return Dt(e, t, n);
  }
  var ac, $i, sc, uc;
  ((ac = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    ($i = function () {}),
    (sc = function (e, t, n, r) {
      var o = e.memoizedProps;
      if (o !== r) {
        ((e = t.stateNode), yn(_t.current));
        var i = null;
        switch (n) {
          case "input":
            ((o = Te(e, o)), (r = Te(e, r)), (i = []));
            break;
          case "select":
            ((o = D({}, o, { value: void 0 })),
              (r = D({}, r, { value: void 0 })),
              (i = []));
            break;
          case "textarea":
            ((o = Nl(e, o)), (r = Nl(e, r)), (i = []));
            break;
          default:
            typeof o.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = xo);
        }
        Cl(n, r);
        var u;
        n = null;
        for (E in o)
          if (!r.hasOwnProperty(E) && o.hasOwnProperty(E) && o[E] != null)
            if (E === "style") {
              var p = o[E];
              for (u in p) p.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              E !== "dangerouslySetInnerHTML" &&
                E !== "children" &&
                E !== "suppressContentEditableWarning" &&
                E !== "suppressHydrationWarning" &&
                E !== "autoFocus" &&
                (f.hasOwnProperty(E)
                  ? i || (i = [])
                  : (i = i || []).push(E, null));
        for (E in r) {
          var h = r[E];
          if (
            ((p = o != null ? o[E] : void 0),
            r.hasOwnProperty(E) && h !== p && (h != null || p != null))
          )
            if (E === "style")
              if (p) {
                for (u in p)
                  !p.hasOwnProperty(u) ||
                    (h && h.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in h)
                  h.hasOwnProperty(u) &&
                    p[u] !== h[u] &&
                    (n || (n = {}), (n[u] = h[u]));
              } else (n || (i || (i = []), i.push(E, n)), (n = h));
            else
              E === "dangerouslySetInnerHTML"
                ? ((h = h ? h.__html : void 0),
                  (p = p ? p.__html : void 0),
                  h != null && p !== h && (i = i || []).push(E, h))
                : E === "children"
                  ? (typeof h != "string" && typeof h != "number") ||
                    (i = i || []).push(E, "" + h)
                  : E !== "suppressContentEditableWarning" &&
                    E !== "suppressHydrationWarning" &&
                    (f.hasOwnProperty(E)
                      ? (h != null && E === "onScroll" && Se("scroll", e),
                        i || p === h || (i = []))
                      : (i = i || []).push(E, h));
        }
        n && (i = i || []).push("style", n);
        var E = i;
        (t.updateQueue = E) && (t.flags |= 4);
      }
    }),
    (uc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Wr(e, t) {
    if (!Ee)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var o = e.child; o !== null; )
        ((n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags & 14680064),
          (r |= o.flags & 14680064),
          (o.return = e),
          (o = o.sibling));
    else
      for (o = e.child; o !== null; )
        ((n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags),
          (r |= o.flags),
          (o.return = e),
          (o = o.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function Op(e, t, n) {
    var r = t.pendingProps;
    switch ((pi(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ye(t), null);
      case 1:
        return (et(t.type) && ko(), Ye(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Yn(),
          Ne(Je),
          Ne(Ge),
          ji(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (jo(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), yt !== null && (na(yt), (yt = null)))),
          $i(e, t),
          Ye(t),
          null
        );
      case 5:
        Ei(t);
        var o = yn(Ir.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (sc(e, t, n, r, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return (Ye(t), null);
          }
          if (((e = yn(_t.current)), jo(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[bt] = t), (r[Rr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (Se("cancel", r), Se("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                Se("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < _r.length; o++) Se(_r[o], r);
                break;
              case "source":
                Se("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (Se("error", r), Se("load", r));
                break;
              case "details":
                Se("toggle", r);
                break;
              case "input":
                (Bt(r, i), Se("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }),
                  Se("invalid", r));
                break;
              case "textarea":
                (Ka(r, i), Se("invalid", r));
            }
            (Cl(n, i), (o = null));
            for (var u in i)
              if (i.hasOwnProperty(u)) {
                var p = i[u];
                u === "children"
                  ? typeof p == "string"
                    ? r.textContent !== p &&
                      (i.suppressHydrationWarning !== !0 &&
                        yo(r.textContent, p, e),
                      (o = ["children", p]))
                    : typeof p == "number" &&
                      r.textContent !== "" + p &&
                      (i.suppressHydrationWarning !== !0 &&
                        yo(r.textContent, p, e),
                      (o = ["children", "" + p]))
                  : f.hasOwnProperty(u) &&
                    p != null &&
                    u === "onScroll" &&
                    Se("scroll", r);
              }
            switch (n) {
              case "input":
                (Et(r), $a(r, i, !0));
                break;
              case "textarea":
                (Et(r), Qa(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = xo);
            }
            ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((u = o.nodeType === 9 ? o : o.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ya(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = u.createElement(n, { is: r.is }))
                    : ((e = u.createElement(n)),
                      n === "select" &&
                        ((u = e),
                        r.multiple
                          ? (u.multiple = !0)
                          : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[bt] = t),
              (e[Rr] = r),
              ac(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((u = jl(n, r)), n)) {
                case "dialog":
                  (Se("cancel", e), Se("close", e), (o = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Se("load", e), (o = r));
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < _r.length; o++) Se(_r[o], e);
                  o = r;
                  break;
                case "source":
                  (Se("error", e), (o = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (Se("error", e), Se("load", e), (o = r));
                  break;
                case "details":
                  (Se("toggle", e), (o = r));
                  break;
                case "input":
                  (Bt(e, r), (o = Te(e, r)), Se("invalid", e));
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (o = D({}, r, { value: void 0 })),
                    Se("invalid", e));
                  break;
                case "textarea":
                  (Ka(e, r), (o = Nl(e, r)), Se("invalid", e));
                  break;
                default:
                  o = r;
              }
              (Cl(n, o), (p = o));
              for (i in p)
                if (p.hasOwnProperty(i)) {
                  var h = p[i];
                  i === "style"
                    ? Za(e, h)
                    : i === "dangerouslySetInnerHTML"
                      ? ((h = h ? h.__html : void 0), h != null && qa(e, h))
                      : i === "children"
                        ? typeof h == "string"
                          ? (n !== "textarea" || h !== "") && ur(e, h)
                          : typeof h == "number" && ur(e, "" + h)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (f.hasOwnProperty(i)
                            ? h != null && i === "onScroll" && Se("scroll", e)
                            : h != null && ie(e, i, h, u));
                }
              switch (n) {
                case "input":
                  (Et(e), $a(e, r, !1));
                  break;
                case "textarea":
                  (Et(e), Qa(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + pe(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? Tn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        Tn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = xo);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Ye(t), null);
      case 6:
        if (e && t.stateNode != null) uc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (((n = yn(Ir.current)), yn(_t.current), jo(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[bt] = t),
              (i = r.nodeValue !== n) && ((e = it), e !== null))
            )
              switch (e.tag) {
                case 3:
                  yo(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    yo(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[bt] = t),
              (t.stateNode = r));
        }
        return (Ye(t), null);
      case 13:
        if (
          (Ne(Ce),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ee && at !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (fu(), $n(), (t.flags |= 98560), (i = !1));
          else if (((i = jo(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(a(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(a(317));
              i[bt] = t;
            } else
              ($n(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ye(t), (i = !1));
          } else (yt !== null && (na(yt), (yt = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ce.current & 1) !== 0
                  ? Fe === 0 && (Fe = 3)
                  : la())),
            t.updateQueue !== null && (t.flags |= 4),
            Ye(t),
            null);
      case 4:
        return (
          Yn(),
          $i(e, t),
          e === null && Pr(t.stateNode.containerInfo),
          Ye(t),
          null
        );
      case 10:
        return (xi(t.type._context), Ye(t), null);
      case 17:
        return (et(t.type) && ko(), Ye(t), null);
      case 19:
        if ((Ne(Ce), (i = t.memoizedState), i === null)) return (Ye(t), null);
        if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
          if (r) Wr(i, !1);
          else {
            if (Fe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = zo(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Wr(i, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (u = i.alternate),
                      u === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = u.childLanes),
                          (i.lanes = u.lanes),
                          (i.child = u.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = u.memoizedProps),
                          (i.memoizedState = u.memoizedState),
                          (i.updateQueue = u.updateQueue),
                          (i.type = u.type),
                          (e = u.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (ke(Ce, (Ce.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Re() > Jn &&
              ((t.flags |= 128), (r = !0), Wr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = zo(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Wr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !u.alternate &&
                  !Ee)
              )
                return (Ye(t), null);
            } else
              2 * Re() - i.renderingStartTime > Jn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Wr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = i.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (i.last = u));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Re()),
            (t.sibling = null),
            (n = Ce.current),
            ke(Ce, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ye(t), null);
      case 22:
      case 23:
        return (
          oa(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (st & 1073741824) !== 0 &&
              (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ye(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Lp(e, t) {
    switch ((pi(t), t.tag)) {
      case 1:
        return (
          et(t.type) && ko(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Yn(),
          Ne(Je),
          Ne(Ge),
          ji(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Ei(t), null);
      case 13:
        if (
          (Ne(Ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          $n();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (Ne(Ce), null);
      case 4:
        return (Yn(), null);
      case 10:
        return (xi(t.type._context), null);
      case 22:
      case 23:
        return (oa(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Wo = !1,
    qe = !1,
    Ip = typeof WeakSet == "function" ? WeakSet : Set,
    U = null;
  function Xn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          be(e, t, r);
        }
      else n.current = null;
  }
  function Ki(e, t, n) {
    try {
      n();
    } catch (r) {
      be(e, t, r);
    }
  }
  var cc = !1;
  function Ap(e, t) {
    if (((oi = io), (e = Bs()), ql(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var o = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, i.nodeType);
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              p = -1,
              h = -1,
              E = 0,
              R = 0,
              z = e,
              T = null;
            t: for (;;) {
              for (
                var F;
                z !== n || (o !== 0 && z.nodeType !== 3) || (p = u + o),
                  z !== i || (r !== 0 && z.nodeType !== 3) || (h = u + r),
                  z.nodeType === 3 && (u += z.nodeValue.length),
                  (F = z.firstChild) !== null;
              )
                ((T = z), (z = F));
              for (;;) {
                if (z === e) break t;
                if (
                  (T === n && ++E === o && (p = u),
                  T === i && ++R === r && (h = u),
                  (F = z.nextSibling) !== null)
                )
                  break;
                ((z = T), (T = z.parentNode));
              }
              z = F;
            }
            n = p === -1 || h === -1 ? null : { start: p, end: h };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      li = { focusedElem: e, selectionRange: n }, io = !1, U = t;
      U !== null;
    )
      if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (U = e));
      else
        for (; U !== null; ) {
          t = U;
          try {
            var B = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (B !== null) {
                    var $ = B.memoizedProps,
                      ze = B.memoizedState,
                      w = t.stateNode,
                      g = w.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? $ : xt(t.type, $),
                        ze,
                      );
                    w.__reactInternalSnapshotBeforeUpdate = g;
                  }
                  break;
                case 3:
                  var S = t.stateNode.containerInfo;
                  S.nodeType === 1
                    ? (S.textContent = "")
                    : S.nodeType === 9 &&
                      S.documentElement &&
                      S.removeChild(S.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (M) {
            be(t, t.return, M);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (U = e));
            break;
          }
          U = t.return;
        }
    return ((B = cc), (cc = !1), B);
  }
  function Br(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var i = o.destroy;
          ((o.destroy = void 0), i !== void 0 && Ki(t, n, i));
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Bo(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Gi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function dc(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), dc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[bt],
          delete t[Rr],
          delete t[ui],
          delete t[xp],
          delete t[wp])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function fc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function pc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || fc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Qi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = xo)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Qi(e, t, n), e = e.sibling; e !== null; )
        (Qi(e, t, n), (e = e.sibling));
  }
  function Yi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Yi(e, t, n), e = e.sibling; e !== null; )
        (Yi(e, t, n), (e = e.sibling));
  }
  var $e = null,
    wt = !1;
  function tn(e, t, n) {
    for (n = n.child; n !== null; ) (mc(e, t, n), (n = n.sibling));
  }
  function mc(e, t, n) {
    if (jt && typeof jt.onCommitFiberUnmount == "function")
      try {
        jt.onCommitFiberUnmount(eo, n);
      } catch {}
    switch (n.tag) {
      case 5:
        qe || Xn(n, t);
      case 6:
        var r = $e,
          o = wt;
        (($e = null),
          tn(e, t, n),
          ($e = r),
          (wt = o),
          $e !== null &&
            (wt
              ? ((e = $e),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : $e.removeChild(n.stateNode)));
        break;
      case 18:
        $e !== null &&
          (wt
            ? ((e = $e),
              (n = n.stateNode),
              e.nodeType === 8
                ? si(e.parentNode, n)
                : e.nodeType === 1 && si(e, n),
              wr(e))
            : si($e, n.stateNode));
        break;
      case 4:
        ((r = $e),
          (o = wt),
          ($e = n.stateNode.containerInfo),
          (wt = !0),
          tn(e, t, n),
          ($e = r),
          (wt = o));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !qe &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          o = r = r.next;
          do {
            var i = o,
              u = i.destroy;
            ((i = i.tag),
              u !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Ki(n, t, u),
              (o = o.next));
          } while (o !== r);
        }
        tn(e, t, n);
        break;
      case 1:
        if (
          !qe &&
          (Xn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (p) {
            be(n, t, p);
          }
        tn(e, t, n);
        break;
      case 21:
        tn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((qe = (r = qe) || n.memoizedState !== null), tn(e, t, n), (qe = r))
          : tn(e, t, n);
        break;
      default:
        tn(e, t, n);
    }
  }
  function hc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Ip()),
        t.forEach(function (r) {
          var o = Kp.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(o, o));
        }));
    }
  }
  function kt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
          var i = e,
            u = t,
            p = u;
          e: for (; p !== null; ) {
            switch (p.tag) {
              case 5:
                (($e = p.stateNode), (wt = !1));
                break e;
              case 3:
                (($e = p.stateNode.containerInfo), (wt = !0));
                break e;
              case 4:
                (($e = p.stateNode.containerInfo), (wt = !0));
                break e;
            }
            p = p.return;
          }
          if ($e === null) throw Error(a(160));
          (mc(i, u, o), ($e = null), (wt = !1));
          var h = o.alternate;
          (h !== null && (h.return = null), (o.return = null));
        } catch (E) {
          be(o, t, E);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (gc(t, e), (t = t.sibling));
  }
  function gc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((kt(t, e), Tt(e), r & 4)) {
          try {
            (Br(3, e, e.return), Bo(3, e));
          } catch ($) {
            be(e, e.return, $);
          }
          try {
            Br(5, e, e.return);
          } catch ($) {
            be(e, e.return, $);
          }
        }
        break;
      case 1:
        (kt(t, e), Tt(e), r & 512 && n !== null && Xn(n, n.return));
        break;
      case 5:
        if (
          (kt(t, e),
          Tt(e),
          r & 512 && n !== null && Xn(n, n.return),
          e.flags & 32)
        ) {
          var o = e.stateNode;
          try {
            ur(o, "");
          } catch ($) {
            be(e, e.return, $);
          }
        }
        if (r & 4 && ((o = e.stateNode), o != null)) {
          var i = e.memoizedProps,
            u = n !== null ? n.memoizedProps : i,
            p = e.type,
            h = e.updateQueue;
          if (((e.updateQueue = null), h !== null))
            try {
              (p === "input" &&
                i.type === "radio" &&
                i.name != null &&
                Yr(o, i),
                jl(p, u));
              var E = jl(p, i);
              for (u = 0; u < h.length; u += 2) {
                var R = h[u],
                  z = h[u + 1];
                R === "style"
                  ? Za(o, z)
                  : R === "dangerouslySetInnerHTML"
                    ? qa(o, z)
                    : R === "children"
                      ? ur(o, z)
                      : ie(o, R, z, E);
              }
              switch (p) {
                case "input":
                  kl(o, i);
                  break;
                case "textarea":
                  Ga(o, i);
                  break;
                case "select":
                  var T = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!i.multiple;
                  var F = i.value;
                  F != null
                    ? Tn(o, !!i.multiple, F, !1)
                    : T !== !!i.multiple &&
                      (i.defaultValue != null
                        ? Tn(o, !!i.multiple, i.defaultValue, !0)
                        : Tn(o, !!i.multiple, i.multiple ? [] : "", !1));
              }
              o[Rr] = i;
            } catch ($) {
              be(e, e.return, $);
            }
        }
        break;
      case 6:
        if ((kt(t, e), Tt(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          ((o = e.stateNode), (i = e.memoizedProps));
          try {
            o.nodeValue = i;
          } catch ($) {
            be(e, e.return, $);
          }
        }
        break;
      case 3:
        if (
          (kt(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            wr(t.containerInfo);
          } catch ($) {
            be(e, e.return, $);
          }
        break;
      case 4:
        (kt(t, e), Tt(e));
        break;
      case 13:
        (kt(t, e),
          Tt(e),
          (o = e.child),
          o.flags & 8192 &&
            ((i = o.memoizedState !== null),
            (o.stateNode.isHidden = i),
            !i ||
              (o.alternate !== null && o.alternate.memoizedState !== null) ||
              (Zi = Re())),
          r & 4 && hc(e));
        break;
      case 22:
        if (
          ((R = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((qe = (E = qe) || R), kt(t, e), (qe = E)) : kt(t, e),
          Tt(e),
          r & 8192)
        ) {
          if (
            ((E = e.memoizedState !== null),
            (e.stateNode.isHidden = E) && !R && (e.mode & 1) !== 0)
          )
            for (U = e, R = e.child; R !== null; ) {
              for (z = U = R; U !== null; ) {
                switch (((T = U), (F = T.child), T.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Br(4, T, T.return);
                    break;
                  case 1:
                    Xn(T, T.return);
                    var B = T.stateNode;
                    if (typeof B.componentWillUnmount == "function") {
                      ((r = T), (n = T.return));
                      try {
                        ((t = r),
                          (B.props = t.memoizedProps),
                          (B.state = t.memoizedState),
                          B.componentWillUnmount());
                      } catch ($) {
                        be(r, n, $);
                      }
                    }
                    break;
                  case 5:
                    Xn(T, T.return);
                    break;
                  case 22:
                    if (T.memoizedState !== null) {
                      xc(z);
                      continue;
                    }
                }
                F !== null ? ((F.return = T), (U = F)) : xc(z);
              }
              R = R.sibling;
            }
          e: for (R = null, z = e; ; ) {
            if (z.tag === 5) {
              if (R === null) {
                R = z;
                try {
                  ((o = z.stateNode),
                    E
                      ? ((i = o.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((p = z.stateNode),
                        (h = z.memoizedProps.style),
                        (u =
                          h != null && h.hasOwnProperty("display")
                            ? h.display
                            : null),
                        (p.style.display = Xa("display", u))));
                } catch ($) {
                  be(e, e.return, $);
                }
              }
            } else if (z.tag === 6) {
              if (R === null)
                try {
                  z.stateNode.nodeValue = E ? "" : z.memoizedProps;
                } catch ($) {
                  be(e, e.return, $);
                }
            } else if (
              ((z.tag !== 22 && z.tag !== 23) ||
                z.memoizedState === null ||
                z === e) &&
              z.child !== null
            ) {
              ((z.child.return = z), (z = z.child));
              continue;
            }
            if (z === e) break e;
            for (; z.sibling === null; ) {
              if (z.return === null || z.return === e) break e;
              (R === z && (R = null), (z = z.return));
            }
            (R === z && (R = null),
              (z.sibling.return = z.return),
              (z = z.sibling));
          }
        }
        break;
      case 19:
        (kt(t, e), Tt(e), r & 4 && hc(e));
        break;
      case 21:
        break;
      default:
        (kt(t, e), Tt(e));
    }
  }
  function Tt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (fc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (ur(o, ""), (r.flags &= -33));
            var i = pc(e);
            Yi(e, i, o);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              p = pc(e);
            Qi(e, p, u);
            break;
          default:
            throw Error(a(161));
        }
      } catch (h) {
        be(e, e.return, h);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Dp(e, t, n) {
    ((U = e), vc(e));
  }
  function vc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; U !== null; ) {
      var o = U,
        i = o.child;
      if (o.tag === 22 && r) {
        var u = o.memoizedState !== null || Wo;
        if (!u) {
          var p = o.alternate,
            h = (p !== null && p.memoizedState !== null) || qe;
          p = Wo;
          var E = qe;
          if (((Wo = u), (qe = h) && !E))
            for (U = o; U !== null; )
              ((u = U),
                (h = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? wc(o)
                  : h !== null
                    ? ((h.return = u), (U = h))
                    : wc(o));
          for (; i !== null; ) ((U = i), vc(i), (i = i.sibling));
          ((U = o), (Wo = p), (qe = E));
        }
        yc(e);
      } else
        (o.subtreeFlags & 8772) !== 0 && i !== null
          ? ((i.return = o), (U = i))
          : yc(e);
    }
  }
  function yc(e) {
    for (; U !== null; ) {
      var t = U;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                qe || Bo(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !qe)
                  if (n === null) r.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : xt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      o,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                i !== null && xu(t, i, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  xu(t, u, n);
                }
                break;
              case 5:
                var p = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = p;
                  var h = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      h.autoFocus && n.focus();
                      break;
                    case "img":
                      h.src && (n.src = h.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var E = t.alternate;
                  if (E !== null) {
                    var R = E.memoizedState;
                    if (R !== null) {
                      var z = R.dehydrated;
                      z !== null && wr(z);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          qe || (t.flags & 512 && Gi(t));
        } catch (T) {
          be(t, t.return, T);
        }
      }
      if (t === e) {
        U = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (U = n));
        break;
      }
      U = t.return;
    }
  }
  function xc(e) {
    for (; U !== null; ) {
      var t = U;
      if (t === e) {
        U = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (U = n));
        break;
      }
      U = t.return;
    }
  }
  function wc(e) {
    for (; U !== null; ) {
      var t = U;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Bo(4, t);
            } catch (h) {
              be(t, n, h);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (h) {
                be(t, o, h);
              }
            }
            var i = t.return;
            try {
              Gi(t);
            } catch (h) {
              be(t, i, h);
            }
            break;
          case 5:
            var u = t.return;
            try {
              Gi(t);
            } catch (h) {
              be(t, u, h);
            }
        }
      } catch (h) {
        be(t, t.return, h);
      }
      if (t === e) {
        U = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        ((p.return = t.return), (U = p));
        break;
      }
      U = t.return;
    }
  }
  var Fp = Math.ceil,
    Vo = q.ReactCurrentDispatcher,
    qi = q.ReactCurrentOwner,
    mt = q.ReactCurrentBatchConfig,
    me = 0,
    Be = null,
    Ie = null,
    Ke = 0,
    st = 0,
    Zn = qt(0),
    Fe = 0,
    Vr = null,
    wn = 0,
    Ho = 0,
    Xi = 0,
    Hr = null,
    nt = null,
    Zi = 0,
    Jn = 1 / 0,
    Ft = null,
    $o = !1,
    Ji = null,
    nn = null,
    Ko = !1,
    rn = null,
    Go = 0,
    $r = 0,
    ea = null,
    Qo = -1,
    Yo = 0;
  function Ze() {
    return (me & 6) !== 0 ? Re() : Qo !== -1 ? Qo : (Qo = Re());
  }
  function on(e) {
    return (e.mode & 1) === 0
      ? 1
      : (me & 2) !== 0 && Ke !== 0
        ? Ke & -Ke
        : Sp.transition !== null
          ? (Yo === 0 && (Yo = ps()), Yo)
          : ((e = ye),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Ss(e.type))),
            e);
  }
  function St(e, t, n, r) {
    if (50 < $r) throw (($r = 0), (ea = null), Error(a(185)));
    (hr(e, n, r),
      ((me & 2) === 0 || e !== Be) &&
        (e === Be && ((me & 2) === 0 && (Ho |= n), Fe === 4 && ln(e, Ke)),
        rt(e, r),
        n === 1 &&
          me === 0 &&
          (t.mode & 1) === 0 &&
          ((Jn = Re() + 500), No && Zt())));
  }
  function rt(e, t) {
    var n = e.callbackNode;
    Sf(e, t);
    var r = ro(e, e === Be ? Ke : 0);
    if (r === 0)
      (n !== null && cs(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && cs(n), t === 1))
        (e.tag === 0 ? kp(Sc.bind(null, e)) : au(Sc.bind(null, e)),
          vp(function () {
            (me & 6) === 0 && Zt();
          }),
          (n = null));
      else {
        switch (ms(r)) {
          case 1:
            n = Ml;
            break;
          case 4:
            n = ds;
            break;
          case 16:
            n = Jr;
            break;
          case 536870912:
            n = fs;
            break;
          default:
            n = Jr;
        }
        n = Tc(n, kc.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function kc(e, t) {
    if (((Qo = -1), (Yo = 0), (me & 6) !== 0)) throw Error(a(327));
    var n = e.callbackNode;
    if (er() && e.callbackNode !== n) return null;
    var r = ro(e, e === Be ? Ke : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = qo(e, r);
    else {
      t = r;
      var o = me;
      me |= 2;
      var i = Ec();
      (Be !== e || Ke !== t) && ((Ft = null), (Jn = Re() + 500), Sn(e, t));
      do
        try {
          Bp();
          break;
        } catch (p) {
          Nc(e, p);
        }
      while (!0);
      (yi(),
        (Vo.current = i),
        (me = o),
        Ie !== null ? (t = 0) : ((Be = null), (Ke = 0), (t = Fe)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((o = Ol(e)), o !== 0 && ((r = o), (t = ta(e, o)))),
        t === 1)
      )
        throw ((n = Vr), Sn(e, 0), ln(e, r), rt(e, Re()), n);
      if (t === 6) ln(e, r);
      else {
        if (
          ((o = e.current.alternate),
          (r & 30) === 0 &&
            !Up(o) &&
            ((t = qo(e, r)),
            t === 2 && ((i = Ol(e)), i !== 0 && ((r = i), (t = ta(e, i)))),
            t === 1))
        )
          throw ((n = Vr), Sn(e, 0), ln(e, r), rt(e, Re()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Nn(e, nt, Ft);
            break;
          case 3:
            if (
              (ln(e, r),
              (r & 130023424) === r && ((t = Zi + 500 - Re()), 10 < t))
            ) {
              if (ro(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & r) !== r)) {
                (Ze(), (e.pingedLanes |= e.suspendedLanes & o));
                break;
              }
              e.timeoutHandle = ai(Nn.bind(null, e, nt, Ft), t);
              break;
            }
            Nn(e, nt, Ft);
            break;
          case 4:
            if ((ln(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var u = 31 - gt(r);
              ((i = 1 << u), (u = t[u]), u > o && (o = u), (r &= ~i));
            }
            if (
              ((r = o),
              (r = Re() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Fp(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ai(Nn.bind(null, e, nt, Ft), r);
              break;
            }
            Nn(e, nt, Ft);
            break;
          case 5:
            Nn(e, nt, Ft);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return (rt(e, Re()), e.callbackNode === n ? kc.bind(null, e) : null);
  }
  function ta(e, t) {
    var n = Hr;
    return (
      e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256),
      (e = qo(e, t)),
      e !== 2 && ((t = nt), (nt = n), t !== null && na(t)),
      e
    );
  }
  function na(e) {
    nt === null ? (nt = e) : nt.push.apply(nt, e);
  }
  function Up(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              i = o.getSnapshot;
            o = o.value;
            try {
              if (!vt(i(), o)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ln(e, t) {
    for (
      t &= ~Xi,
        t &= ~Ho,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - gt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function Sc(e) {
    if ((me & 6) !== 0) throw Error(a(327));
    er();
    var t = ro(e, 0);
    if ((t & 1) === 0) return (rt(e, Re()), null);
    var n = qo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ol(e);
      r !== 0 && ((t = r), (n = ta(e, r)));
    }
    if (n === 1) throw ((n = Vr), Sn(e, 0), ln(e, t), rt(e, Re()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Nn(e, nt, Ft),
      rt(e, Re()),
      null
    );
  }
  function ra(e, t) {
    var n = me;
    me |= 1;
    try {
      return e(t);
    } finally {
      ((me = n), me === 0 && ((Jn = Re() + 500), No && Zt()));
    }
  }
  function kn(e) {
    rn !== null && rn.tag === 0 && (me & 6) === 0 && er();
    var t = me;
    me |= 1;
    var n = mt.transition,
      r = ye;
    try {
      if (((mt.transition = null), (ye = 1), e)) return e();
    } finally {
      ((ye = r), (mt.transition = n), (me = t), (me & 6) === 0 && Zt());
    }
  }
  function oa() {
    ((st = Zn.current), Ne(Zn));
  }
  function Sn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), gp(n)), Ie !== null))
      for (n = Ie.return; n !== null; ) {
        var r = n;
        switch ((pi(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && ko());
            break;
          case 3:
            (Yn(), Ne(Je), Ne(Ge), ji());
            break;
          case 5:
            Ei(r);
            break;
          case 4:
            Yn();
            break;
          case 13:
            Ne(Ce);
            break;
          case 19:
            Ne(Ce);
            break;
          case 10:
            xi(r.type._context);
            break;
          case 22:
          case 23:
            oa();
        }
        n = n.return;
      }
    if (
      ((Be = e),
      (Ie = e = an(e.current, null)),
      (Ke = st = t),
      (Fe = 0),
      (Vr = null),
      (Xi = Ho = wn = 0),
      (nt = Hr = null),
      vn !== null)
    ) {
      for (t = 0; t < vn.length; t++)
        if (((n = vn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var o = r.next,
            i = n.pending;
          if (i !== null) {
            var u = i.next;
            ((i.next = o), (r.next = u));
          }
          n.pending = r;
        }
      vn = null;
    }
    return e;
  }
  function Nc(e, t) {
    do {
      var n = Ie;
      try {
        if ((yi(), (Mo.current = Ao), Oo)) {
          for (var r = je.memoizedState; r !== null; ) {
            var o = r.queue;
            (o !== null && (o.pending = null), (r = r.next));
          }
          Oo = !1;
        }
        if (
          ((xn = 0),
          (We = De = je = null),
          (Ar = !1),
          (Dr = 0),
          (qi.current = null),
          n === null || n.return === null)
        ) {
          ((Fe = 1), (Vr = t), (Ie = null));
          break;
        }
        e: {
          var i = e,
            u = n.return,
            p = n,
            h = t;
          if (
            ((t = Ke),
            (p.flags |= 32768),
            h !== null && typeof h == "object" && typeof h.then == "function")
          ) {
            var E = h,
              R = p,
              z = R.tag;
            if ((R.mode & 1) === 0 && (z === 0 || z === 11 || z === 15)) {
              var T = R.alternate;
              T
                ? ((R.updateQueue = T.updateQueue),
                  (R.memoizedState = T.memoizedState),
                  (R.lanes = T.lanes))
                : ((R.updateQueue = null), (R.memoizedState = null));
            }
            var F = Qu(u);
            if (F !== null) {
              ((F.flags &= -257),
                Yu(F, u, p, i, t),
                F.mode & 1 && Gu(i, E, t),
                (t = F),
                (h = E));
              var B = t.updateQueue;
              if (B === null) {
                var $ = new Set();
                ($.add(h), (t.updateQueue = $));
              } else B.add(h);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Gu(i, E, t), la());
                break e;
              }
              h = Error(a(426));
            }
          } else if (Ee && p.mode & 1) {
            var ze = Qu(u);
            if (ze !== null) {
              ((ze.flags & 65536) === 0 && (ze.flags |= 256),
                Yu(ze, u, p, i, t),
                gi(qn(h, p)));
              break e;
            }
          }
          ((i = h = qn(h, p)),
            Fe !== 4 && (Fe = 2),
            Hr === null ? (Hr = [i]) : Hr.push(i),
            (i = u));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var w = $u(i, h, t);
                yu(i, w);
                break e;
              case 1:
                p = h;
                var g = i.type,
                  S = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof g.getDerivedStateFromError == "function" ||
                    (S !== null &&
                      typeof S.componentDidCatch == "function" &&
                      (nn === null || !nn.has(S))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var M = Ku(i, p, t);
                  yu(i, M);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        jc(n);
      } catch (K) {
        ((t = K), Ie === n && n !== null && (Ie = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Ec() {
    var e = Vo.current;
    return ((Vo.current = Ao), e === null ? Ao : e);
  }
  function la() {
    ((Fe === 0 || Fe === 3 || Fe === 2) && (Fe = 4),
      Be === null ||
        ((wn & 268435455) === 0 && (Ho & 268435455) === 0) ||
        ln(Be, Ke));
  }
  function qo(e, t) {
    var n = me;
    me |= 2;
    var r = Ec();
    (Be !== e || Ke !== t) && ((Ft = null), Sn(e, t));
    do
      try {
        Wp();
        break;
      } catch (o) {
        Nc(e, o);
      }
    while (!0);
    if ((yi(), (me = n), (Vo.current = r), Ie !== null)) throw Error(a(261));
    return ((Be = null), (Ke = 0), Fe);
  }
  function Wp() {
    for (; Ie !== null; ) Cc(Ie);
  }
  function Bp() {
    for (; Ie !== null && !pf(); ) Cc(Ie);
  }
  function Cc(e) {
    var t = Pc(e.alternate, e, st);
    ((e.memoizedProps = e.pendingProps),
      t === null ? jc(e) : (Ie = t),
      (qi.current = null));
  }
  function jc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Op(n, t, st)), n !== null)) {
          Ie = n;
          return;
        }
      } else {
        if (((n = Lp(n, t)), n !== null)) {
          ((n.flags &= 32767), (Ie = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Fe = 6), (Ie = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ie = t;
        return;
      }
      Ie = t = e;
    } while (t !== null);
    Fe === 0 && (Fe = 5);
  }
  function Nn(e, t, n) {
    var r = ye,
      o = mt.transition;
    try {
      ((mt.transition = null), (ye = 1), Vp(e, t, n, r));
    } finally {
      ((mt.transition = o), (ye = r));
    }
    return null;
  }
  function Vp(e, t, n, r) {
    do er();
    while (rn !== null);
    if ((me & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (Nf(e, i),
      e === Be && ((Ie = Be = null), (Ke = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Ko ||
        ((Ko = !0),
        Tc(Jr, function () {
          return (er(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = mt.transition), (mt.transition = null));
      var u = ye;
      ye = 1;
      var p = me;
      ((me |= 4),
        (qi.current = null),
        Ap(e, n),
        gc(n, e),
        up(li),
        (io = !!oi),
        (li = oi = null),
        (e.current = n),
        Dp(n),
        mf(),
        (me = p),
        (ye = u),
        (mt.transition = i));
    } else e.current = n;
    if (
      (Ko && ((Ko = !1), (rn = e), (Go = o)),
      (i = e.pendingLanes),
      i === 0 && (nn = null),
      vf(n.stateNode),
      rt(e, Re()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
    if ($o) throw (($o = !1), (e = Ji), (Ji = null), e);
    return (
      (Go & 1) !== 0 && e.tag !== 0 && er(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === ea ? $r++ : (($r = 0), (ea = e))) : ($r = 0),
      Zt(),
      null
    );
  }
  function er() {
    if (rn !== null) {
      var e = ms(Go),
        t = mt.transition,
        n = ye;
      try {
        if (((mt.transition = null), (ye = 16 > e ? 16 : e), rn === null))
          var r = !1;
        else {
          if (((e = rn), (rn = null), (Go = 0), (me & 6) !== 0))
            throw Error(a(331));
          var o = me;
          for (me |= 4, U = e.current; U !== null; ) {
            var i = U,
              u = i.child;
            if ((U.flags & 16) !== 0) {
              var p = i.deletions;
              if (p !== null) {
                for (var h = 0; h < p.length; h++) {
                  var E = p[h];
                  for (U = E; U !== null; ) {
                    var R = U;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Br(8, R, i);
                    }
                    var z = R.child;
                    if (z !== null) ((z.return = R), (U = z));
                    else
                      for (; U !== null; ) {
                        R = U;
                        var T = R.sibling,
                          F = R.return;
                        if ((dc(R), R === E)) {
                          U = null;
                          break;
                        }
                        if (T !== null) {
                          ((T.return = F), (U = T));
                          break;
                        }
                        U = F;
                      }
                  }
                }
                var B = i.alternate;
                if (B !== null) {
                  var $ = B.child;
                  if ($ !== null) {
                    B.child = null;
                    do {
                      var ze = $.sibling;
                      (($.sibling = null), ($ = ze));
                    } while ($ !== null);
                  }
                }
                U = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && u !== null)
              ((u.return = i), (U = u));
            else
              e: for (; U !== null; ) {
                if (((i = U), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Br(9, i, i.return);
                  }
                var w = i.sibling;
                if (w !== null) {
                  ((w.return = i.return), (U = w));
                  break e;
                }
                U = i.return;
              }
          }
          var g = e.current;
          for (U = g; U !== null; ) {
            u = U;
            var S = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && S !== null)
              ((S.return = u), (U = S));
            else
              e: for (u = g; U !== null; ) {
                if (((p = U), (p.flags & 2048) !== 0))
                  try {
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Bo(9, p);
                    }
                  } catch (K) {
                    be(p, p.return, K);
                  }
                if (p === u) {
                  U = null;
                  break e;
                }
                var M = p.sibling;
                if (M !== null) {
                  ((M.return = p.return), (U = M));
                  break e;
                }
                U = p.return;
              }
          }
          if (
            ((me = o),
            Zt(),
            jt && typeof jt.onPostCommitFiberRoot == "function")
          )
            try {
              jt.onPostCommitFiberRoot(eo, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((ye = n), (mt.transition = t));
      }
    }
    return !1;
  }
  function bc(e, t, n) {
    ((t = qn(n, t)),
      (t = $u(e, t, 1)),
      (e = en(e, t, 1)),
      (t = Ze()),
      e !== null && (hr(e, 1, t), rt(e, t)));
  }
  function be(e, t, n) {
    if (e.tag === 3) bc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          bc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (nn === null || !nn.has(r)))
          ) {
            ((e = qn(n, e)),
              (e = Ku(t, e, 1)),
              (t = en(t, e, 1)),
              (e = Ze()),
              t !== null && (hr(t, 1, e), rt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Hp(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Ze()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Be === e &&
        (Ke & n) === n &&
        (Fe === 4 || (Fe === 3 && (Ke & 130023424) === Ke && 500 > Re() - Zi)
          ? Sn(e, 0)
          : (Xi |= n)),
      rt(e, t));
  }
  function _c(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = no), (no <<= 1), (no & 130023424) === 0 && (no = 4194304)));
    var n = Ze();
    ((e = It(e, t)), e !== null && (hr(e, t, n), rt(e, n)));
  }
  function $p(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), _c(e, n));
  }
  function Kp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    (r !== null && r.delete(t), _c(e, n));
  }
  var Pc;
  Pc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Je.current) tt = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((tt = !1), Mp(e, t, n));
        tt = (e.flags & 131072) !== 0;
      }
    else ((tt = !1), Ee && (t.flags & 1048576) !== 0 && su(t, Co, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Uo(e, t), (e = t.pendingProps));
        var o = Bn(t, Ge.current);
        (Qn(t, n), (o = Pi(null, t, r, e, o, n)));
        var i = Ti();
        return (
          (t.flags |= 1),
          typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              et(r) ? ((i = !0), So(t)) : (i = !1),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              Si(t),
              (o.updater = Do),
              (t.stateNode = o),
              (o._reactInternals = t),
              Ii(t, r, e, n),
              (t = Ui(null, t, r, !0, i, n)))
            : ((t.tag = 0), Ee && i && fi(t), Xe(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Uo(e, t),
            (e = t.pendingProps),
            (o = r._init),
            (r = o(r._payload)),
            (t.type = r),
            (o = t.tag = Qp(r)),
            (e = xt(r, e)),
            o)
          ) {
            case 0:
              t = Fi(null, t, r, e, n);
              break e;
            case 1:
              t = tc(null, t, r, e, n);
              break e;
            case 11:
              t = qu(null, t, r, e, n);
              break e;
            case 14:
              t = Xu(null, t, r, xt(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : xt(r, o)),
          Fi(e, t, r, o, n)
        );
      case 1:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : xt(r, o)),
          tc(e, t, r, o, n)
        );
      case 3:
        e: {
          if ((nc(t), e === null)) throw Error(a(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (o = i.element),
            vu(e, t),
            Ro(t, r, null, n));
          var u = t.memoizedState;
          if (((r = u.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ((o = qn(Error(a(423)), t)), (t = rc(e, t, r, n, o)));
              break e;
            } else if (r !== o) {
              ((o = qn(Error(a(424)), t)), (t = rc(e, t, r, n, o)));
              break e;
            } else
              for (
                at = Yt(t.stateNode.containerInfo.firstChild),
                  it = t,
                  Ee = !0,
                  yt = null,
                  n = hu(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if (($n(), r === o)) {
              t = Dt(e, t, n);
              break e;
            }
            Xe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          wu(t),
          e === null && hi(t),
          (r = t.type),
          (o = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (u = o.children),
          ii(r, o) ? (u = null) : i !== null && ii(r, i) && (t.flags |= 32),
          ec(e, t),
          Xe(e, t, u, n),
          t.child
        );
      case 6:
        return (e === null && hi(t), null);
      case 13:
        return oc(e, t, n);
      case 4:
        return (
          Ni(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Kn(t, null, r, n)) : Xe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : xt(r, o)),
          qu(e, t, r, o, n)
        );
      case 7:
        return (Xe(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Xe(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Xe(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (o = t.pendingProps),
            (i = t.memoizedProps),
            (u = o.value),
            ke(_o, r._currentValue),
            (r._currentValue = u),
            i !== null)
          )
            if (vt(i.value, u)) {
              if (i.children === o.children && !Je.current) {
                t = Dt(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var p = i.dependencies;
                if (p !== null) {
                  u = i.child;
                  for (var h = p.firstContext; h !== null; ) {
                    if (h.context === r) {
                      if (i.tag === 1) {
                        ((h = At(-1, n & -n)), (h.tag = 2));
                        var E = i.updateQueue;
                        if (E !== null) {
                          E = E.shared;
                          var R = E.pending;
                          (R === null
                            ? (h.next = h)
                            : ((h.next = R.next), (R.next = h)),
                            (E.pending = h));
                        }
                      }
                      ((i.lanes |= n),
                        (h = i.alternate),
                        h !== null && (h.lanes |= n),
                        wi(i.return, n, t),
                        (p.lanes |= n));
                      break;
                    }
                    h = h.next;
                  }
                } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((u = i.return), u === null)) throw Error(a(341));
                  ((u.lanes |= n),
                    (p = u.alternate),
                    p !== null && (p.lanes |= n),
                    wi(u, n, t),
                    (u = i.sibling));
                } else u = i.child;
                if (u !== null) u.return = i;
                else
                  for (u = i; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((i = u.sibling), i !== null)) {
                      ((i.return = u.return), (u = i));
                      break;
                    }
                    u = u.return;
                  }
                i = u;
              }
          (Xe(e, t, o.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (r = t.pendingProps.children),
          Qn(t, n),
          (o = ft(o)),
          (r = r(o)),
          (t.flags |= 1),
          Xe(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (o = xt(r, t.pendingProps)),
          (o = xt(r.type, o)),
          Xu(e, t, r, o, n)
        );
      case 15:
        return Zu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : xt(r, o)),
          Uo(e, t),
          (t.tag = 1),
          et(r) ? ((e = !0), So(t)) : (e = !1),
          Qn(t, n),
          Vu(t, r, o),
          Ii(t, r, o, n),
          Ui(null, t, r, !0, e, n)
        );
      case 19:
        return ic(e, t, n);
      case 22:
        return Ju(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function Tc(e, t) {
    return us(e, t);
  }
  function Gp(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ht(e, t, n, r) {
    return new Gp(e, t, n, r);
  }
  function ia(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Qp(e) {
    if (typeof e == "function") return ia(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === _e)) return 11;
      if (e === Oe) return 14;
    }
    return 2;
  }
  function an(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ht(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Xo(e, t, n, r, o, i) {
    var u = 2;
    if (((r = e), typeof e == "function")) ia(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case re:
          return En(n.children, o, i, t);
        case W:
          ((u = 8), (o |= 8));
          break;
        case we:
          return (
            (e = ht(12, n, t, o | 2)),
            (e.elementType = we),
            (e.lanes = i),
            e
          );
        case Ae:
          return (
            (e = ht(13, n, t, o)),
            (e.elementType = Ae),
            (e.lanes = i),
            e
          );
        case Pe:
          return (
            (e = ht(19, n, t, o)),
            (e.elementType = Pe),
            (e.lanes = i),
            e
          );
        case he:
          return Zo(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Me:
                u = 10;
                break e;
              case He:
                u = 9;
                break e;
              case _e:
                u = 11;
                break e;
              case Oe:
                u = 14;
                break e;
              case xe:
                ((u = 16), (r = null));
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ht(u, n, t, o)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = i),
      t
    );
  }
  function En(e, t, n, r) {
    return ((e = ht(7, e, r, t)), (e.lanes = n), e);
  }
  function Zo(e, t, n, r) {
    return (
      (e = ht(22, e, r, t)),
      (e.elementType = he),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function aa(e, t, n) {
    return ((e = ht(6, e, null, t)), (e.lanes = n), e);
  }
  function sa(e, t, n) {
    return (
      (t = ht(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Yp(e, t, n, r, o) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ll(0)),
      (this.expirationTimes = Ll(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ll(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null));
  }
  function ua(e, t, n, r, o, i, u, p, h) {
    return (
      (e = new Yp(e, t, n, p, h)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = ht(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Si(i),
      e
    );
  }
  function qp(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ae,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Rc(e) {
    if (!e) return Xt;
    e = e._reactInternals;
    e: {
      if (fn(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (et(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (et(n)) return lu(e, n, t);
    }
    return t;
  }
  function zc(e, t, n, r, o, i, u, p, h) {
    return (
      (e = ua(n, r, !0, e, o, i, u, p, h)),
      (e.context = Rc(null)),
      (n = e.current),
      (r = Ze()),
      (o = on(n)),
      (i = At(r, o)),
      (i.callback = t ?? null),
      en(n, i, o),
      (e.current.lanes = o),
      hr(e, o, r),
      rt(e, r),
      e
    );
  }
  function Jo(e, t, n, r) {
    var o = t.current,
      i = Ze(),
      u = on(o);
    return (
      (n = Rc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = At(i, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = en(o, t, u)),
      e !== null && (St(e, o, u, i), To(e, o, u)),
      u
    );
  }
  function el(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Mc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ca(e, t) {
    (Mc(e, t), (e = e.alternate) && Mc(e, t));
  }
  function Xp() {
    return null;
  }
  var Oc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function da(e) {
    this._internalRoot = e;
  }
  ((tl.prototype.render = da.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      Jo(e, t, null, null);
    }),
    (tl.prototype.unmount = da.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (kn(function () {
            Jo(null, e, null, null);
          }),
            (t[zt] = null));
        }
      }));
  function tl(e) {
    this._internalRoot = e;
  }
  tl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = vs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++);
      (Kt.splice(n, 0, e), n === 0 && ws(e));
    }
  };
  function fa(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function nl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Lc() {}
  function Zp(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var E = el(u);
          i.call(E);
        };
      }
      var u = zc(t, r, e, 0, null, !1, !1, "", Lc);
      return (
        (e._reactRootContainer = u),
        (e[zt] = u.current),
        Pr(e.nodeType === 8 ? e.parentNode : e),
        kn(),
        u
      );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
      var p = r;
      r = function () {
        var E = el(h);
        p.call(E);
      };
    }
    var h = ua(e, 0, !1, null, null, !1, !1, "", Lc);
    return (
      (e._reactRootContainer = h),
      (e[zt] = h.current),
      Pr(e.nodeType === 8 ? e.parentNode : e),
      kn(function () {
        Jo(t, h, n, r);
      }),
      h
    );
  }
  function rl(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof o == "function") {
        var p = o;
        o = function () {
          var h = el(u);
          p.call(h);
        };
      }
      Jo(t, u, e, o);
    } else u = Zp(n, t, e, o, r);
    return el(u);
  }
  ((hs = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = mr(t.pendingLanes);
          n !== 0 &&
            (Il(t, n | 1),
            rt(t, Re()),
            (me & 6) === 0 && ((Jn = Re() + 500), Zt()));
        }
        break;
      case 13:
        (kn(function () {
          var r = It(e, 1);
          if (r !== null) {
            var o = Ze();
            St(r, e, 1, o);
          }
        }),
          ca(e, 1));
    }
  }),
    (Al = function (e) {
      if (e.tag === 13) {
        var t = It(e, 134217728);
        if (t !== null) {
          var n = Ze();
          St(t, e, 134217728, n);
        }
        ca(e, 134217728);
      }
    }),
    (gs = function (e) {
      if (e.tag === 13) {
        var t = on(e),
          n = It(e, t);
        if (n !== null) {
          var r = Ze();
          St(n, e, t, r);
        }
        ca(e, t);
      }
    }),
    (vs = function () {
      return ye;
    }),
    (ys = function (e, t) {
      var n = ye;
      try {
        return ((ye = e), t());
      } finally {
        ye = n;
      }
    }),
    (Pl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((kl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var o = wo(r);
                if (!o) throw Error(a(90));
                (Ct(r), kl(r, o));
              }
            }
          }
          break;
        case "textarea":
          Ga(e, n);
          break;
        case "select":
          ((t = n.value), t != null && Tn(e, !!n.multiple, t, !1));
      }
    }),
    (ns = ra),
    (rs = kn));
  var Jp = { usingClientEntryPoint: !1, Events: [zr, Un, wo, es, ts, ra] },
    Kr = {
      findFiberByHostInstance: pn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    em = {
      bundleType: Kr.bundleType,
      version: Kr.version,
      rendererPackageName: Kr.rendererPackageName,
      rendererConfig: Kr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: q.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = as(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Kr.findFiberByHostInstance || Xp,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ol = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ol.isDisabled && ol.supportsFiber)
      try {
        ((eo = ol.inject(em)), (jt = ol));
      } catch {}
  }
  return (
    (ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jp),
    (ot.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!fa(t)) throw Error(a(200));
      return qp(e, t, null, n);
    }),
    (ot.createRoot = function (e, t) {
      if (!fa(e)) throw Error(a(299));
      var n = !1,
        r = "",
        o = Oc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = ua(e, 1, !1, null, null, n, !1, r, o)),
        (e[zt] = t.current),
        Pr(e.nodeType === 8 ? e.parentNode : e),
        new da(t)
      );
    }),
    (ot.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return ((e = as(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (ot.flushSync = function (e) {
      return kn(e);
    }),
    (ot.hydrate = function (e, t, n) {
      if (!nl(t)) throw Error(a(200));
      return rl(null, e, t, !0, n);
    }),
    (ot.hydrateRoot = function (e, t, n) {
      if (!fa(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        u = Oc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (o = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = zc(t, null, e, 1, n ?? null, o, !1, i, u)),
        (e[zt] = t.current),
        Pr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (o = n._getVersion),
            (o = o(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, o])
              : t.mutableSourceEagerHydrationData.push(n, o));
      return new tl(t);
    }),
    (ot.render = function (e, t, n) {
      if (!nl(t)) throw Error(a(200));
      return rl(null, e, t, !1, n);
    }),
    (ot.unmountComponentAtNode = function (e) {
      if (!nl(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (kn(function () {
            rl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[zt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (ot.unstable_batchedUpdates = ra),
    (ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!nl(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return rl(e, t, n, !1, r);
    }),
    (ot.version = "18.3.1-next-f1338f8080-20240426"),
    ot
  );
}
var Vc;
function pd() {
  if (Vc) return ha.exports;
  Vc = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (s) {
        console.error(s);
      }
  }
  return (l(), (ha.exports = um()), ha.exports);
}
var Hc;
function cm() {
  if (Hc) return ll;
  Hc = 1;
  var l = pd();
  return ((ll.createRoot = l.createRoot), (ll.hydrateRoot = l.hydrateRoot), ll);
}
var dm = cm();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fm = (l) => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  pm = (l) =>
    l.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, a, c) =>
      c ? c.toUpperCase() : a.toLowerCase(),
    ),
  $c = (l) => {
    const s = pm(l);
    return s.charAt(0).toUpperCase() + s.slice(1);
  },
  md = (...l) =>
    l
      .filter((s, a, c) => !!s && s.trim() !== "" && c.indexOf(s) === a)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var mm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hm = k.forwardRef(
  (
    {
      color: l = "currentColor",
      size: s = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: c,
      className: f = "",
      children: m,
      iconNode: x,
      ...v
    },
    C,
  ) =>
    k.createElement(
      "svg",
      {
        ref: C,
        ...mm,
        width: s,
        height: s,
        stroke: l,
        strokeWidth: c ? (Number(a) * 24) / Number(s) : a,
        className: md("lucide", f),
        ...v,
      },
      [
        ...x.map(([_, O]) => k.createElement(_, O)),
        ...(Array.isArray(m) ? m : [m]),
      ],
    ),
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ut = (l, s) => {
  const a = k.forwardRef(({ className: c, ...f }, m) =>
    k.createElement(hm, {
      ref: m,
      iconNode: s,
      className: md(`lucide-${fm($c(l))}`, `lucide-${l}`, c),
      ...f,
    }),
  );
  return ((a.displayName = $c(l)), a);
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gm = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  vm = ut("chevron-down", gm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ym = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  xm = ut("chevron-up", ym);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wm = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "10", x2: "10", y1: "15", y2: "9", key: "c1nkhi" }],
    ["line", { x1: "14", x2: "14", y1: "15", y2: "9", key: "h65svq" }],
  ],
  km = ut("circle-pause", wm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sm = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }],
  ],
  Nm = ut("circle-play", Sm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Em = [
    [
      "path",
      {
        d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
        key: "96xj49",
      },
    ],
  ],
  pl = ut("flame", Em);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cm = [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ],
  jm = ut("menu", Cm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bm = [
    ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
    ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
  ],
  _m = ut("music", bm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pm = [
    ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
    [
      "path",
      {
        d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
        key: "1ph1d7",
      },
    ],
  ],
  Tm = ut("scroll", Pm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rm = [
    ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }],
    ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
    ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
    ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }],
    ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" }],
    ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }],
    ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }],
    ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }],
  ],
  zm = ut("swords", Rm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mm = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  Om = ut("target", Mm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lm = [
    [
      "path",
      {
        d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
        key: "ftymec",
      },
    ],
    [
      "rect",
      { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" },
    ],
  ],
  Im = ut("video", Lm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Am = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  hd = ut("x", Am);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dm = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  Fm = ut("zap", Dm),
  Um =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
function Wm(l) {
  const [s, a] = k.useState(!1),
    { src: c, alt: f, style: m, className: x, ...v } = l;
  return s
    ? d.jsx("div", {
        className: `inline-block bg-gray-100 text-center align-middle ${x ?? ""}`,
        style: m,
        children: d.jsx("div", {
          className: "flex items-center justify-center w-full h-full",
          children: d.jsx("img", {
            src: Um,
            alt: "Error loading image",
            ...v,
            "data-original-url": c,
          }),
        }),
      })
    : d.jsx("img", {
        src: c,
        alt: f,
        className: x,
        style: m,
        ...v,
        onError: () => a(!0),
      });
}
function Bm({
  name: l,
  title: s,
  village: a,
  rank: c,
  image: f,
  bio: m,
  abilities: x,
  achievements: v,
  signature: C,
  onSelect: _,
  isFavorite: O = !1,
  onToggleFavorite: L,
}) {
  const [I, G] = k.useState(!1),
    Y = `hero-details-${l.toLowerCase().replace(/\s+/g, "-")}`;
  return d.jsxs("div", {
    className:
      "bg-gradient-to-br from-black via-slate-900 to-black rounded-2xl overflow-hidden border-2 border-orange-500/30 hover:border-orange-500 transition-all duration-500 shadow-2xl hover:shadow-orange-500/20",
    children: [
      d.jsxs("div", {
        className: "relative h-80 overflow-hidden group",
        children: [
          d.jsx(Wm, {
            src: f,
            alt: l,
            className:
              "w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700",
            loading: "lazy",
          }),
          d.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent",
          }),
          d.jsxs("div", {
            className: "absolute bottom-0 left-0 right-0 p-6",
            children: [
              d.jsx("h3", {
                className: "text-3xl mb-1 text-white",
                children: l,
              }),
              d.jsx("p", { className: "text-orange-400 italic", children: s }),
            ],
          }),
          d.jsx("div", {
            className:
              "absolute top-4 right-4 bg-orange-500 text-black px-4 py-2 rounded-full shadow-lg",
            children: c,
          }),
        ],
      }),
      d.jsxs("div", {
        className: "p-6",
        children: [
          d.jsx("div", {
            className: "mb-4",
            children: d.jsxs("span", {
              className:
                "inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-4 py-2 rounded-full shadow-lg",
              children: [
                d.jsx("span", { className: "text-sm", children: "🍃" }),
                a,
              ],
            }),
          }),
          d.jsx("p", {
            className: "text-gray-300 leading-relaxed mb-4",
            children: m,
          }),
          d.jsxs("div", {
            className:
              "mb-4 p-4 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg border border-orange-500/20",
            children: [
              d.jsx("p", {
                className: "text-sm text-orange-400 mb-1",
                children: "Signature Technique",
              }),
              d.jsxs("p", {
                className: "text-white italic",
                children: ['"', C, '"'],
              }),
            ],
          }),
          d.jsxs("div", {
            className: "grid grid-cols-2 gap-3 mb-4",
            children: [
              d.jsx("button", {
                onClick: _,
                className:
                  "w-full py-3 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 rounded-lg transition-all duration-300",
                children: "View Full Profile",
              }),
              d.jsx("button", {
                onClick: L,
                className:
                  "w-full py-3 bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 rounded-lg transition-all duration-300",
                "aria-pressed": O,
                children: O ? "Remove Favorite" : "Add Favorite",
              }),
            ],
          }),
          d.jsx("button", {
            onClick: () => G(!I),
            className:
              "w-full flex items-center justify-center gap-2 py-3 bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 rounded-lg transition-all duration-300 mb-4",
            "aria-expanded": I,
            "aria-controls": Y,
            children: I
              ? d.jsxs(d.Fragment, {
                  children: [d.jsx(xm, { className: "w-5 h-5" }), "Show Less"],
                })
              : d.jsxs(d.Fragment, {
                  children: [
                    d.jsx(vm, { className: "w-5 h-5" }),
                    "Show More Details",
                  ],
                }),
          }),
          I &&
            d.jsxs("div", {
              id: Y,
              className:
                "space-y-6 animate-in fade-in slide-in-from-top-2 duration-500",
              children: [
                d.jsxs("div", {
                  children: [
                    d.jsx("h4", {
                      className: "text-orange-400 mb-3 flex items-center gap-2",
                      children: "⚡ Special Abilities",
                    }),
                    d.jsx("ul", {
                      className: "space-y-2",
                      children: x.map((b, A) =>
                        d.jsxs(
                          "li",
                          {
                            className: "flex items-start gap-2 text-gray-300",
                            children: [
                              d.jsx("span", {
                                className: "text-orange-500 mt-1",
                                children: "▸",
                              }),
                              d.jsx("span", { children: b }),
                            ],
                          },
                          A,
                        ),
                      ),
                    }),
                  ],
                }),
                d.jsxs("div", {
                  children: [
                    d.jsx("h4", {
                      className: "text-yellow-400 mb-3 flex items-center gap-2",
                      children: "🏆 Major Achievements",
                    }),
                    d.jsx("ul", {
                      className: "space-y-2",
                      children: v.map((b, A) =>
                        d.jsxs(
                          "li",
                          {
                            className: "flex items-start gap-2 text-gray-300",
                            children: [
                              d.jsx("span", {
                                className: "text-yellow-500 mt-1",
                                children: "★",
                              }),
                              d.jsx("span", { children: b }),
                            ],
                          },
                          A,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function Vm({
  name: l,
  rank: s,
  team: a,
  objective: c,
  outcome: f,
  notableEvents: m,
  onSelect: x,
}) {
  const v = {
    D: "from-gray-600 to-gray-700",
    C: "from-green-600 to-green-700",
    B: "from-blue-600 to-blue-700",
    A: "from-purple-600 to-purple-700",
    S: "from-red-600 to-red-700",
  };
  return d.jsxs("div", {
    className:
      "bg-gradient-to-br from-slate-900 to-black rounded-xl border-2 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 p-6 shadow-xl hover:shadow-yellow-500/20",
    children: [
      d.jsxs("div", {
        className: "flex items-start justify-between mb-4",
        children: [
          d.jsx("h3", { className: "text-xl text-yellow-400", children: l }),
          d.jsxs("div", {
            className: `bg-gradient-to-r ${v[s]} px-3 py-1 rounded-full text-white shadow-lg`,
            children: ["Rank ", s],
          }),
        ],
      }),
      d.jsxs("div", {
        className: "space-y-4",
        children: [
          d.jsxs("div", {
            children: [
              d.jsx("p", {
                className: "text-orange-400 text-sm mb-1",
                children: "Team",
              }),
              d.jsx("p", { className: "text-white", children: a }),
            ],
          }),
          d.jsxs("div", {
            children: [
              d.jsx("p", {
                className: "text-orange-400 text-sm mb-1",
                children: "Objective",
              }),
              d.jsx("p", { className: "text-gray-300", children: c }),
            ],
          }),
          d.jsxs("div", {
            className:
              "bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20",
            children: [
              d.jsx("p", {
                className: "text-yellow-400 text-sm mb-2",
                children: "Notable Events",
              }),
              d.jsx("ul", {
                className: "space-y-1",
                children: m.map((C, _) =>
                  d.jsxs(
                    "li",
                    {
                      className: "text-gray-400 text-sm flex items-start gap-2",
                      children: [
                        d.jsx("span", {
                          className: "text-yellow-500",
                          children: "→",
                        }),
                        C,
                      ],
                    },
                    _,
                  ),
                ),
              }),
            ],
          }),
          d.jsxs("div", {
            className: "pt-3 border-t border-gray-700",
            children: [
              d.jsx("p", {
                className: "text-green-400 text-sm mb-1",
                children: "Outcome",
              }),
              d.jsx("p", { className: "text-gray-300", children: f }),
            ],
          }),
          d.jsx("button", {
            onClick: x,
            className:
              "w-full py-3 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-300 transition-all duration-300",
            children: "Open Mission Details",
          }),
        ],
      }),
    ],
  });
}
function Hm() {
  const [l, s] = k.useState(!1),
    a = [
      { name: "Home", href: "#home" },
      { name: "Heroes", href: "#heroes" },
      { name: "Wars", href: "#wars" },
      { name: "Missions", href: "#missions" },
      { name: "Videos", href: "#videos" },
      { name: "Facts", href: "#facts" },
    ];
  return d.jsx("nav", {
    className:
      "fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-orange-500/30",
    children: d.jsxs("div", {
      className: "max-w-7xl mx-auto px-4",
      children: [
        d.jsxs("div", {
          className: "flex items-center justify-between h-16",
          children: [
            d.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                d.jsx(pl, { className: "w-8 h-8 text-orange-500" }),
                d.jsx("span", {
                  className:
                    "text-2xl bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent",
                  children: "NARUTO UNIVERSE",
                }),
              ],
            }),
            d.jsx("div", {
              className: "hidden md:flex items-center gap-8",
              children: a.map((c) =>
                d.jsxs(
                  "a",
                  {
                    href: c.href,
                    className:
                      "text-gray-300 hover:text-orange-500 transition-colors duration-300 relative group",
                    children: [
                      c.name,
                      d.jsx("span", {
                        className:
                          "absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300",
                      }),
                    ],
                  },
                  c.name,
                ),
              ),
            }),
            d.jsx("button", {
              onClick: () => s(!l),
              className: "md:hidden text-orange-500",
              "aria-label": l
                ? "Close navigation menu"
                : "Open navigation menu",
              "aria-expanded": l,
              "aria-controls": "mobile-nav-menu",
              children: l
                ? d.jsx(hd, { className: "w-6 h-6" })
                : d.jsx(jm, { className: "w-6 h-6" }),
            }),
          ],
        }),
        l &&
          d.jsx("div", {
            className: "md:hidden pb-4",
            id: "mobile-nav-menu",
            children: a.map((c) =>
              d.jsx(
                "a",
                {
                  href: c.href,
                  onClick: () => s(!1),
                  className:
                    "block py-2 text-gray-300 hover:text-orange-500 transition-colors",
                  children: c.name,
                },
                c.name,
              ),
            ),
          }),
      ],
    }),
  });
}
function $m({
  title: l,
  description: s,
  videoId: a,
  category: c,
  watched: f = !1,
  onToggleWatched: m,
}) {
  return d.jsxs("div", {
    className:
      "bg-gradient-to-br from-black to-slate-900 rounded-xl overflow-hidden border-2 border-orange-500/30 hover:border-orange-500 transition-all duration-300 shadow-xl",
    children: [
      d.jsx("div", {
        className: "aspect-video",
        children: d.jsx("iframe", {
          className: "w-full h-full",
          src: `https://www.youtube.com/embed/${a}`,
          title: l,
          allow:
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: !0,
          loading: "lazy",
        }),
      }),
      d.jsxs("div", {
        className: "p-5",
        children: [
          d.jsx("div", {
            className: "mb-3",
            children: d.jsx("span", {
              className:
                "inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-3 py-1 rounded-full text-sm shadow-lg",
              children: c,
            }),
          }),
          d.jsx("h3", { className: "text-white mb-2", children: l }),
          d.jsx("p", {
            className: "text-gray-400 text-sm leading-relaxed",
            children: s,
          }),
          d.jsx("button", {
            onClick: m,
            className:
              "mt-4 w-full py-2 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 transition-all duration-300",
            "aria-pressed": f,
            children: f ? "Mark Unwatched" : "Mark Watched",
          }),
        ],
      }),
    ],
  });
}
function Km({
  name: l,
  duration: s,
  description: a,
  keyEvents: c,
  casualties: f,
  outcome: m,
  image: x,
  onSelect: v,
}) {
  return d.jsxs("div", {
    className:
      "bg-gradient-to-br from-red-950/50 via-black to-black rounded-2xl overflow-hidden border-2 border-red-500/30 hover:border-red-500 transition-all duration-500 shadow-2xl",
    children: [
      d.jsxs("div", {
        className: "relative h-64 overflow-hidden",
        children: [
          d.jsx("img", {
            src: x,
            alt: l,
            className: "w-full h-full object-cover opacity-70",
            loading: "lazy",
            onError: (C) => {
              C.currentTarget.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'%3E%3Crect width='100%25' height='100%25' fill='%230b0b0b'/%3E%3Ctext x='50%25' y='50%25' fill='%23ef4444' font-size='32' text-anchor='middle'%3EWar image unavailable%3C/text%3E%3C/svg%3E";
            },
          }),
          d.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent",
          }),
          d.jsxs("div", {
            className: "absolute bottom-0 left-0 right-0 p-6",
            children: [
              d.jsx("h3", {
                className: "text-3xl text-red-400 mb-2",
                children: l,
              }),
              d.jsx("p", { className: "text-gray-300", children: s }),
            ],
          }),
        ],
      }),
      d.jsxs("div", {
        className: "p-6",
        children: [
          d.jsx("p", {
            className: "text-gray-300 leading-relaxed mb-6",
            children: a,
          }),
          d.jsxs("div", {
            className: "space-y-4",
            children: [
              d.jsxs("div", {
                className:
                  "bg-red-500/10 rounded-lg p-4 border border-red-500/20",
                children: [
                  d.jsx("h4", {
                    className: "text-red-400 mb-2",
                    children: "⚔️ Key Events",
                  }),
                  d.jsx("ul", {
                    className: "space-y-1",
                    children: c.map((C, _) =>
                      d.jsxs(
                        "li",
                        {
                          className:
                            "text-gray-400 text-sm flex items-start gap-2",
                          children: [
                            d.jsx("span", {
                              className: "text-red-500",
                              children: "•",
                            }),
                            C,
                          ],
                        },
                        _,
                      ),
                    ),
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                  d.jsxs("div", {
                    className:
                      "bg-orange-500/10 rounded-lg p-3 border border-orange-500/20",
                    children: [
                      d.jsx("p", {
                        className: "text-xs text-orange-400 mb-1",
                        children: "Casualties",
                      }),
                      d.jsx("p", { className: "text-white", children: f }),
                    ],
                  }),
                  d.jsxs("div", {
                    className:
                      "bg-green-500/10 rounded-lg p-3 border border-green-500/20",
                    children: [
                      d.jsx("p", {
                        className: "text-xs text-green-400 mb-1",
                        children: "Outcome",
                      }),
                      d.jsx("p", { className: "text-white", children: m }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          d.jsx("button", {
            onClick: v,
            className:
              "mt-4 w-full py-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 transition-all duration-300",
            children: "Open War Timeline",
          }),
        ],
      }),
    ],
  });
}
function dn(l, s, { checkForDefaultPrevented: a = !0 } = {}) {
  return function (f) {
    if ((l == null || l(f), a === !1 || !f.defaultPrevented))
      return s == null ? void 0 : s(f);
  };
}
function Kc(l, s) {
  if (typeof l == "function") return l(s);
  l != null && (l.current = s);
}
function gd(...l) {
  return (s) => {
    let a = !1;
    const c = l.map((f) => {
      const m = Kc(f, s);
      return (!a && typeof m == "function" && (a = !0), m);
    });
    if (a)
      return () => {
        for (let f = 0; f < c.length; f++) {
          const m = c[f];
          typeof m == "function" ? m() : Kc(l[f], null);
        }
      };
  };
}
function Pn(...l) {
  return k.useCallback(gd(...l), l);
}
function Gm(l, s) {
  const a = k.createContext(s),
    c = (m) => {
      const { children: x, ...v } = m,
        C = k.useMemo(() => v, Object.values(v));
      return d.jsx(a.Provider, { value: C, children: x });
    };
  c.displayName = l + "Provider";
  function f(m) {
    const x = k.useContext(a);
    if (x) return x;
    if (s !== void 0) return s;
    throw new Error(`\`${m}\` must be used within \`${l}\``);
  }
  return [c, f];
}
function Qm(l, s = []) {
  let a = [];
  function c(m, x) {
    const v = k.createContext(x),
      C = a.length;
    a = [...a, x];
    const _ = (L) => {
      var Z;
      const { scope: I, children: G, ...Y } = L,
        b = ((Z = I == null ? void 0 : I[l]) == null ? void 0 : Z[C]) || v,
        A = k.useMemo(() => Y, Object.values(Y));
      return d.jsx(b.Provider, { value: A, children: G });
    };
    _.displayName = m + "Provider";
    function O(L, I) {
      var b;
      const G = ((b = I == null ? void 0 : I[l]) == null ? void 0 : b[C]) || v,
        Y = k.useContext(G);
      if (Y) return Y;
      if (x !== void 0) return x;
      throw new Error(`\`${L}\` must be used within \`${m}\``);
    }
    return [_, O];
  }
  const f = () => {
    const m = a.map((x) => k.createContext(x));
    return function (v) {
      const C = (v == null ? void 0 : v[l]) || m;
      return k.useMemo(() => ({ [`__scope${l}`]: { ...v, [l]: C } }), [v, C]);
    };
  };
  return ((f.scopeName = l), [c, Ym(f, ...s)]);
}
function Ym(...l) {
  const s = l[0];
  if (l.length === 1) return s;
  const a = () => {
    const c = l.map((f) => ({ useScope: f(), scopeName: f.scopeName }));
    return function (m) {
      const x = c.reduce((v, { useScope: C, scopeName: _ }) => {
        const L = C(m)[`__scope${_}`];
        return { ...v, ...L };
      }, {});
      return k.useMemo(() => ({ [`__scope${s.scopeName}`]: x }), [x]);
    };
  };
  return ((a.scopeName = s.scopeName), a);
}
var gl =
    globalThis != null && globalThis.document ? k.useLayoutEffect : () => {},
  qm = im.useId || (() => {}),
  Xm = 0;
function ya(l) {
  const [s, a] = k.useState(qm());
  return (
    gl(() => {
      a((c) => c ?? String(Xm++));
    }, [l]),
    l || (s ? `radix-${s}` : "")
  );
}
function bn(l) {
  const s = k.useRef(l);
  return (
    k.useEffect(() => {
      s.current = l;
    }),
    k.useMemo(
      () =>
        (...a) => {
          var c;
          return (c = s.current) == null ? void 0 : c.call(s, ...a);
        },
      [],
    )
  );
}
function Zm({ prop: l, defaultProp: s, onChange: a = () => {} }) {
  const [c, f] = Jm({ defaultProp: s, onChange: a }),
    m = l !== void 0,
    x = m ? l : c,
    v = bn(a),
    C = k.useCallback(
      (_) => {
        if (m) {
          const L = typeof _ == "function" ? _(l) : _;
          L !== l && v(L);
        } else f(_);
      },
      [m, l, f, v],
    );
  return [x, C];
}
function Jm({ defaultProp: l, onChange: s }) {
  const a = k.useState(l),
    [c] = a,
    f = k.useRef(c),
    m = bn(s);
  return (
    k.useEffect(() => {
      f.current !== c && (m(c), (f.current = c));
    }, [c, f, m]),
    a
  );
}
var vd = pd();
const eh = dd(vd);
var Fa = k.forwardRef((l, s) => {
  const { children: a, ...c } = l,
    f = k.Children.toArray(a),
    m = f.find(nh);
  if (m) {
    const x = m.props.children,
      v = f.map((C) =>
        C === m
          ? k.Children.count(x) > 1
            ? k.Children.only(null)
            : k.isValidElement(x)
              ? x.props.children
              : null
          : C,
      );
    return d.jsx(za, {
      ...c,
      ref: s,
      children: k.isValidElement(x) ? k.cloneElement(x, void 0, v) : null,
    });
  }
  return d.jsx(za, { ...c, ref: s, children: a });
});
Fa.displayName = "Slot";
var za = k.forwardRef((l, s) => {
  const { children: a, ...c } = l;
  if (k.isValidElement(a)) {
    const f = oh(a),
      m = rh(c, a.props);
    return (
      a.type !== k.Fragment && (m.ref = s ? gd(s, f) : f),
      k.cloneElement(a, m)
    );
  }
  return k.Children.count(a) > 1 ? k.Children.only(null) : null;
});
za.displayName = "SlotClone";
var th = ({ children: l }) => d.jsx(d.Fragment, { children: l });
function nh(l) {
  return k.isValidElement(l) && l.type === th;
}
function rh(l, s) {
  const a = { ...s };
  for (const c in s) {
    const f = l[c],
      m = s[c];
    /^on[A-Z]/.test(c)
      ? f && m
        ? (a[c] = (...v) => {
            (m(...v), f(...v));
          })
        : f && (a[c] = f)
      : c === "style"
        ? (a[c] = { ...f, ...m })
        : c === "className" && (a[c] = [f, m].filter(Boolean).join(" "));
  }
  return { ...l, ...a };
}
function oh(l) {
  var c, f;
  let s =
      (c = Object.getOwnPropertyDescriptor(l.props, "ref")) == null
        ? void 0
        : c.get,
    a = s && "isReactWarning" in s && s.isReactWarning;
  return a
    ? l.ref
    : ((s =
        (f = Object.getOwnPropertyDescriptor(l, "ref")) == null
          ? void 0
          : f.get),
      (a = s && "isReactWarning" in s && s.isReactWarning),
      a ? l.props.ref : l.props.ref || l.ref);
}
var lh = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Wt = lh.reduce((l, s) => {
    const a = k.forwardRef((c, f) => {
      const { asChild: m, ...x } = c,
        v = m ? Fa : s;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        d.jsx(v, { ...x, ref: f })
      );
    });
    return ((a.displayName = `Primitive.${s}`), { ...l, [s]: a });
  }, {});
function ih(l, s) {
  l && vd.flushSync(() => l.dispatchEvent(s));
}
function ah(l, s = globalThis == null ? void 0 : globalThis.document) {
  const a = bn(l);
  k.useEffect(() => {
    const c = (f) => {
      f.key === "Escape" && a(f);
    };
    return (
      s.addEventListener("keydown", c, { capture: !0 }),
      () => s.removeEventListener("keydown", c, { capture: !0 })
    );
  }, [a, s]);
}
var sh = "DismissableLayer",
  Ma = "dismissableLayer.update",
  uh = "dismissableLayer.pointerDownOutside",
  ch = "dismissableLayer.focusOutside",
  Gc,
  yd = k.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  xd = k.forwardRef((l, s) => {
    const {
        disableOutsidePointerEvents: a = !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        onFocusOutside: m,
        onInteractOutside: x,
        onDismiss: v,
        ...C
      } = l,
      _ = k.useContext(yd),
      [O, L] = k.useState(null),
      I =
        (O == null ? void 0 : O.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, G] = k.useState({}),
      Y = Pn(s, (re) => L(re)),
      b = Array.from(_.layers),
      [A] = [..._.layersWithOutsidePointerEventsDisabled].slice(-1),
      Z = b.indexOf(A),
      ne = O ? b.indexOf(O) : -1,
      ie = _.layersWithOutsidePointerEventsDisabled.size > 0,
      q = ne >= Z,
      se = ph((re) => {
        const W = re.target,
          we = [..._.branches].some((Me) => Me.contains(W));
        !q ||
          we ||
          (f == null || f(re),
          x == null || x(re),
          re.defaultPrevented || v == null || v());
      }, I),
      ae = mh((re) => {
        const W = re.target;
        [..._.branches].some((Me) => Me.contains(W)) ||
          (m == null || m(re),
          x == null || x(re),
          re.defaultPrevented || v == null || v());
      }, I);
    return (
      ah((re) => {
        ne === _.layers.size - 1 &&
          (c == null || c(re),
          !re.defaultPrevented && v && (re.preventDefault(), v()));
      }, I),
      k.useEffect(() => {
        if (O)
          return (
            a &&
              (_.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Gc = I.body.style.pointerEvents),
                (I.body.style.pointerEvents = "none")),
              _.layersWithOutsidePointerEventsDisabled.add(O)),
            _.layers.add(O),
            Qc(),
            () => {
              a &&
                _.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (I.body.style.pointerEvents = Gc);
            }
          );
      }, [O, I, a, _]),
      k.useEffect(
        () => () => {
          O &&
            (_.layers.delete(O),
            _.layersWithOutsidePointerEventsDisabled.delete(O),
            Qc());
        },
        [O, _],
      ),
      k.useEffect(() => {
        const re = () => G({});
        return (
          document.addEventListener(Ma, re),
          () => document.removeEventListener(Ma, re)
        );
      }, []),
      d.jsx(Wt.div, {
        ...C,
        ref: Y,
        style: {
          pointerEvents: ie ? (q ? "auto" : "none") : void 0,
          ...l.style,
        },
        onFocusCapture: dn(l.onFocusCapture, ae.onFocusCapture),
        onBlurCapture: dn(l.onBlurCapture, ae.onBlurCapture),
        onPointerDownCapture: dn(
          l.onPointerDownCapture,
          se.onPointerDownCapture,
        ),
      })
    );
  });
xd.displayName = sh;
var dh = "DismissableLayerBranch",
  fh = k.forwardRef((l, s) => {
    const a = k.useContext(yd),
      c = k.useRef(null),
      f = Pn(s, c);
    return (
      k.useEffect(() => {
        const m = c.current;
        if (m)
          return (
            a.branches.add(m),
            () => {
              a.branches.delete(m);
            }
          );
      }, [a.branches]),
      d.jsx(Wt.div, { ...l, ref: f })
    );
  });
fh.displayName = dh;
function ph(l, s = globalThis == null ? void 0 : globalThis.document) {
  const a = bn(l),
    c = k.useRef(!1),
    f = k.useRef(() => {});
  return (
    k.useEffect(() => {
      const m = (v) => {
          if (v.target && !c.current) {
            let C = function () {
              wd(uh, a, _, { discrete: !0 });
            };
            const _ = { originalEvent: v };
            v.pointerType === "touch"
              ? (s.removeEventListener("click", f.current),
                (f.current = C),
                s.addEventListener("click", f.current, { once: !0 }))
              : C();
          } else s.removeEventListener("click", f.current);
          c.current = !1;
        },
        x = window.setTimeout(() => {
          s.addEventListener("pointerdown", m);
        }, 0);
      return () => {
        (window.clearTimeout(x),
          s.removeEventListener("pointerdown", m),
          s.removeEventListener("click", f.current));
      };
    }, [s, a]),
    { onPointerDownCapture: () => (c.current = !0) }
  );
}
function mh(l, s = globalThis == null ? void 0 : globalThis.document) {
  const a = bn(l),
    c = k.useRef(!1);
  return (
    k.useEffect(() => {
      const f = (m) => {
        m.target &&
          !c.current &&
          wd(ch, a, { originalEvent: m }, { discrete: !1 });
      };
      return (
        s.addEventListener("focusin", f),
        () => s.removeEventListener("focusin", f)
      );
    }, [s, a]),
    {
      onFocusCapture: () => (c.current = !0),
      onBlurCapture: () => (c.current = !1),
    }
  );
}
function Qc() {
  const l = new CustomEvent(Ma);
  document.dispatchEvent(l);
}
function wd(l, s, a, { discrete: c }) {
  const f = a.originalEvent.target,
    m = new CustomEvent(l, { bubbles: !1, cancelable: !0, detail: a });
  (s && f.addEventListener(l, s, { once: !0 }),
    c ? ih(f, m) : f.dispatchEvent(m));
}
var xa = "focusScope.autoFocusOnMount",
  wa = "focusScope.autoFocusOnUnmount",
  Yc = { bubbles: !1, cancelable: !0 },
  hh = "FocusScope",
  kd = k.forwardRef((l, s) => {
    const {
        loop: a = !1,
        trapped: c = !1,
        onMountAutoFocus: f,
        onUnmountAutoFocus: m,
        ...x
      } = l,
      [v, C] = k.useState(null),
      _ = bn(f),
      O = bn(m),
      L = k.useRef(null),
      I = Pn(s, (b) => C(b)),
      G = k.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (k.useEffect(() => {
      if (c) {
        let b = function (ie) {
            if (G.paused || !v) return;
            const q = ie.target;
            v.contains(q) ? (L.current = q) : cn(L.current, { select: !0 });
          },
          A = function (ie) {
            if (G.paused || !v) return;
            const q = ie.relatedTarget;
            q !== null && (v.contains(q) || cn(L.current, { select: !0 }));
          },
          Z = function (ie) {
            if (document.activeElement === document.body)
              for (const se of ie) se.removedNodes.length > 0 && cn(v);
          };
        (document.addEventListener("focusin", b),
          document.addEventListener("focusout", A));
        const ne = new MutationObserver(Z);
        return (
          v && ne.observe(v, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", b),
              document.removeEventListener("focusout", A),
              ne.disconnect());
          }
        );
      }
    }, [c, v, G.paused]),
      k.useEffect(() => {
        if (v) {
          Xc.add(G);
          const b = document.activeElement;
          if (!v.contains(b)) {
            const Z = new CustomEvent(xa, Yc);
            (v.addEventListener(xa, _),
              v.dispatchEvent(Z),
              Z.defaultPrevented ||
                (gh(kh(Sd(v)), { select: !0 }),
                document.activeElement === b && cn(v)));
          }
          return () => {
            (v.removeEventListener(xa, _),
              setTimeout(() => {
                const Z = new CustomEvent(wa, Yc);
                (v.addEventListener(wa, O),
                  v.dispatchEvent(Z),
                  Z.defaultPrevented || cn(b ?? document.body, { select: !0 }),
                  v.removeEventListener(wa, O),
                  Xc.remove(G));
              }, 0));
          };
        }
      }, [v, _, O, G]));
    const Y = k.useCallback(
      (b) => {
        if ((!a && !c) || G.paused) return;
        const A = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey,
          Z = document.activeElement;
        if (A && Z) {
          const ne = b.currentTarget,
            [ie, q] = vh(ne);
          ie && q
            ? !b.shiftKey && Z === q
              ? (b.preventDefault(), a && cn(ie, { select: !0 }))
              : b.shiftKey &&
                Z === ie &&
                (b.preventDefault(), a && cn(q, { select: !0 }))
            : Z === ne && b.preventDefault();
        }
      },
      [a, c, G.paused],
    );
    return d.jsx(Wt.div, { tabIndex: -1, ...x, ref: I, onKeyDown: Y });
  });
kd.displayName = hh;
function gh(l, { select: s = !1 } = {}) {
  const a = document.activeElement;
  for (const c of l)
    if ((cn(c, { select: s }), document.activeElement !== a)) return;
}
function vh(l) {
  const s = Sd(l),
    a = qc(s, l),
    c = qc(s.reverse(), l);
  return [a, c];
}
function Sd(l) {
  const s = [],
    a = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (c) => {
        const f = c.tagName === "INPUT" && c.type === "hidden";
        return c.disabled || c.hidden || f
          ? NodeFilter.FILTER_SKIP
          : c.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; a.nextNode(); ) s.push(a.currentNode);
  return s;
}
function qc(l, s) {
  for (const a of l) if (!yh(a, { upTo: s })) return a;
}
function yh(l, { upTo: s }) {
  if (getComputedStyle(l).visibility === "hidden") return !0;
  for (; l; ) {
    if (s !== void 0 && l === s) return !1;
    if (getComputedStyle(l).display === "none") return !0;
    l = l.parentElement;
  }
  return !1;
}
function xh(l) {
  return l instanceof HTMLInputElement && "select" in l;
}
function cn(l, { select: s = !1 } = {}) {
  if (l && l.focus) {
    const a = document.activeElement;
    (l.focus({ preventScroll: !0 }), l !== a && xh(l) && s && l.select());
  }
}
var Xc = wh();
function wh() {
  let l = [];
  return {
    add(s) {
      const a = l[0];
      (s !== a && (a == null || a.pause()), (l = Zc(l, s)), l.unshift(s));
    },
    remove(s) {
      var a;
      ((l = Zc(l, s)), (a = l[0]) == null || a.resume());
    },
  };
}
function Zc(l, s) {
  const a = [...l],
    c = a.indexOf(s);
  return (c !== -1 && a.splice(c, 1), a);
}
function kh(l) {
  return l.filter((s) => s.tagName !== "A");
}
var Sh = "Portal",
  Nd = k.forwardRef((l, s) => {
    var v;
    const { container: a, ...c } = l,
      [f, m] = k.useState(!1);
    gl(() => m(!0), []);
    const x =
      a ||
      (f &&
        ((v = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : v.body));
    return x ? eh.createPortal(d.jsx(Wt.div, { ...c, ref: s }), x) : null;
  });
Nd.displayName = Sh;
function Nh(l, s) {
  return k.useReducer((a, c) => s[a][c] ?? a, l);
}
var yl = (l) => {
  const { present: s, children: a } = l,
    c = Eh(s),
    f =
      typeof a == "function" ? a({ present: c.isPresent }) : k.Children.only(a),
    m = Pn(c.ref, Ch(f));
  return typeof a == "function" || c.isPresent
    ? k.cloneElement(f, { ref: m })
    : null;
};
yl.displayName = "Presence";
function Eh(l) {
  const [s, a] = k.useState(),
    c = k.useRef({}),
    f = k.useRef(l),
    m = k.useRef("none"),
    x = l ? "mounted" : "unmounted",
    [v, C] = Nh(x, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    k.useEffect(() => {
      const _ = il(c.current);
      m.current = v === "mounted" ? _ : "none";
    }, [v]),
    gl(() => {
      const _ = c.current,
        O = f.current;
      if (O !== l) {
        const I = m.current,
          G = il(_);
        (l
          ? C("MOUNT")
          : G === "none" || (_ == null ? void 0 : _.display) === "none"
            ? C("UNMOUNT")
            : C(O && I !== G ? "ANIMATION_OUT" : "UNMOUNT"),
          (f.current = l));
      }
    }, [l, C]),
    gl(() => {
      if (s) {
        let _;
        const O = s.ownerDocument.defaultView ?? window,
          L = (G) => {
            const b = il(c.current).includes(G.animationName);
            if (G.target === s && b && (C("ANIMATION_END"), !f.current)) {
              const A = s.style.animationFillMode;
              ((s.style.animationFillMode = "forwards"),
                (_ = O.setTimeout(() => {
                  s.style.animationFillMode === "forwards" &&
                    (s.style.animationFillMode = A);
                })));
            }
          },
          I = (G) => {
            G.target === s && (m.current = il(c.current));
          };
        return (
          s.addEventListener("animationstart", I),
          s.addEventListener("animationcancel", L),
          s.addEventListener("animationend", L),
          () => {
            (O.clearTimeout(_),
              s.removeEventListener("animationstart", I),
              s.removeEventListener("animationcancel", L),
              s.removeEventListener("animationend", L));
          }
        );
      } else C("ANIMATION_END");
    }, [s, C]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(v),
      ref: k.useCallback((_) => {
        (_ && (c.current = getComputedStyle(_)), a(_));
      }, []),
    }
  );
}
function il(l) {
  return (l == null ? void 0 : l.animationName) || "none";
}
function Ch(l) {
  var c, f;
  let s =
      (c = Object.getOwnPropertyDescriptor(l.props, "ref")) == null
        ? void 0
        : c.get,
    a = s && "isReactWarning" in s && s.isReactWarning;
  return a
    ? l.ref
    : ((s =
        (f = Object.getOwnPropertyDescriptor(l, "ref")) == null
          ? void 0
          : f.get),
      (a = s && "isReactWarning" in s && s.isReactWarning),
      a ? l.props.ref : l.props.ref || l.ref);
}
var ka = 0;
function jh() {
  k.useEffect(() => {
    const l = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", l[0] ?? Jc()),
      document.body.insertAdjacentElement("beforeend", l[1] ?? Jc()),
      ka++,
      () => {
        (ka === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((s) => s.remove()),
          ka--);
      }
    );
  }, []);
}
function Jc() {
  const l = document.createElement("span");
  return (
    l.setAttribute("data-radix-focus-guard", ""),
    (l.tabIndex = 0),
    (l.style.outline = "none"),
    (l.style.opacity = "0"),
    (l.style.position = "fixed"),
    (l.style.pointerEvents = "none"),
    l
  );
}
var Rt = function () {
  return (
    (Rt =
      Object.assign ||
      function (s) {
        for (var a, c = 1, f = arguments.length; c < f; c++) {
          a = arguments[c];
          for (var m in a)
            Object.prototype.hasOwnProperty.call(a, m) && (s[m] = a[m]);
        }
        return s;
      }),
    Rt.apply(this, arguments)
  );
};
function Ed(l, s) {
  var a = {};
  for (var c in l)
    Object.prototype.hasOwnProperty.call(l, c) &&
      s.indexOf(c) < 0 &&
      (a[c] = l[c]);
  if (l != null && typeof Object.getOwnPropertySymbols == "function")
    for (var f = 0, c = Object.getOwnPropertySymbols(l); f < c.length; f++)
      s.indexOf(c[f]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(l, c[f]) &&
        (a[c[f]] = l[c[f]]);
  return a;
}
function bh(l, s, a) {
  if (a || arguments.length === 2)
    for (var c = 0, f = s.length, m; c < f; c++)
      (m || !(c in s)) &&
        (m || (m = Array.prototype.slice.call(s, 0, c)), (m[c] = s[c]));
  return l.concat(m || Array.prototype.slice.call(s));
}
var ml = "right-scroll-bar-position",
  hl = "width-before-scroll-bar",
  _h = "with-scroll-bars-hidden",
  Ph = "--removed-body-scroll-bar-size";
function Sa(l, s) {
  return (typeof l == "function" ? l(s) : l && (l.current = s), l);
}
function Th(l, s) {
  var a = k.useState(function () {
    return {
      value: l,
      callback: s,
      facade: {
        get current() {
          return a.value;
        },
        set current(c) {
          var f = a.value;
          f !== c && ((a.value = c), a.callback(c, f));
        },
      },
    };
  })[0];
  return ((a.callback = s), a.facade);
}
var Rh = typeof window < "u" ? k.useLayoutEffect : k.useEffect,
  ed = new WeakMap();
function zh(l, s) {
  var a = Th(null, function (c) {
    return l.forEach(function (f) {
      return Sa(f, c);
    });
  });
  return (
    Rh(
      function () {
        var c = ed.get(a);
        if (c) {
          var f = new Set(c),
            m = new Set(l),
            x = a.current;
          (f.forEach(function (v) {
            m.has(v) || Sa(v, null);
          }),
            m.forEach(function (v) {
              f.has(v) || Sa(v, x);
            }));
        }
        ed.set(a, l);
      },
      [l],
    ),
    a
  );
}
function Mh(l) {
  return l;
}
function Oh(l, s) {
  s === void 0 && (s = Mh);
  var a = [],
    c = !1,
    f = {
      read: function () {
        if (c)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return a.length ? a[a.length - 1] : l;
      },
      useMedium: function (m) {
        var x = s(m, c);
        return (
          a.push(x),
          function () {
            a = a.filter(function (v) {
              return v !== x;
            });
          }
        );
      },
      assignSyncMedium: function (m) {
        for (c = !0; a.length; ) {
          var x = a;
          ((a = []), x.forEach(m));
        }
        a = {
          push: function (v) {
            return m(v);
          },
          filter: function () {
            return a;
          },
        };
      },
      assignMedium: function (m) {
        c = !0;
        var x = [];
        if (a.length) {
          var v = a;
          ((a = []), v.forEach(m), (x = a));
        }
        var C = function () {
            var O = x;
            ((x = []), O.forEach(m));
          },
          _ = function () {
            return Promise.resolve().then(C);
          };
        (_(),
          (a = {
            push: function (O) {
              (x.push(O), _());
            },
            filter: function (O) {
              return ((x = x.filter(O)), a);
            },
          }));
      },
    };
  return f;
}
function Lh(l) {
  l === void 0 && (l = {});
  var s = Oh(null);
  return ((s.options = Rt({ async: !0, ssr: !1 }, l)), s);
}
var Cd = function (l) {
  var s = l.sideCar,
    a = Ed(l, ["sideCar"]);
  if (!s)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var c = s.read();
  if (!c) throw new Error("Sidecar medium not found");
  return k.createElement(c, Rt({}, a));
};
Cd.isSideCarExport = !0;
function Ih(l, s) {
  return (l.useMedium(s), Cd);
}
var jd = Lh(),
  Na = function () {},
  xl = k.forwardRef(function (l, s) {
    var a = k.useRef(null),
      c = k.useState({
        onScrollCapture: Na,
        onWheelCapture: Na,
        onTouchMoveCapture: Na,
      }),
      f = c[0],
      m = c[1],
      x = l.forwardProps,
      v = l.children,
      C = l.className,
      _ = l.removeScrollBar,
      O = l.enabled,
      L = l.shards,
      I = l.sideCar,
      G = l.noRelative,
      Y = l.noIsolation,
      b = l.inert,
      A = l.allowPinchZoom,
      Z = l.as,
      ne = Z === void 0 ? "div" : Z,
      ie = l.gapMode,
      q = Ed(l, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      se = I,
      ae = zh([a, s]),
      re = Rt(Rt({}, q), f);
    return k.createElement(
      k.Fragment,
      null,
      O &&
        k.createElement(se, {
          sideCar: jd,
          removeScrollBar: _,
          shards: L,
          noRelative: G,
          noIsolation: Y,
          inert: b,
          setCallbacks: m,
          allowPinchZoom: !!A,
          lockRef: a,
          gapMode: ie,
        }),
      x
        ? k.cloneElement(k.Children.only(v), Rt(Rt({}, re), { ref: ae }))
        : k.createElement(ne, Rt({}, re, { className: C, ref: ae }), v),
    );
  });
xl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
xl.classNames = { fullWidth: hl, zeroRight: ml };
var Ah = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Dh() {
  if (!document) return null;
  var l = document.createElement("style");
  l.type = "text/css";
  var s = Ah();
  return (s && l.setAttribute("nonce", s), l);
}
function Fh(l, s) {
  l.styleSheet
    ? (l.styleSheet.cssText = s)
    : l.appendChild(document.createTextNode(s));
}
function Uh(l) {
  var s = document.head || document.getElementsByTagName("head")[0];
  s.appendChild(l);
}
var Wh = function () {
    var l = 0,
      s = null;
    return {
      add: function (a) {
        (l == 0 && (s = Dh()) && (Fh(s, a), Uh(s)), l++);
      },
      remove: function () {
        (l--,
          !l && s && (s.parentNode && s.parentNode.removeChild(s), (s = null)));
      },
    };
  },
  Bh = function () {
    var l = Wh();
    return function (s, a) {
      k.useEffect(
        function () {
          return (
            l.add(s),
            function () {
              l.remove();
            }
          );
        },
        [s && a],
      );
    };
  },
  bd = function () {
    var l = Bh(),
      s = function (a) {
        var c = a.styles,
          f = a.dynamic;
        return (l(c, f), null);
      };
    return s;
  },
  Vh = { left: 0, top: 0, right: 0, gap: 0 },
  Ea = function (l) {
    return parseInt(l || "", 10) || 0;
  },
  Hh = function (l) {
    var s = window.getComputedStyle(document.body),
      a = s[l === "padding" ? "paddingLeft" : "marginLeft"],
      c = s[l === "padding" ? "paddingTop" : "marginTop"],
      f = s[l === "padding" ? "paddingRight" : "marginRight"];
    return [Ea(a), Ea(c), Ea(f)];
  },
  $h = function (l) {
    if ((l === void 0 && (l = "margin"), typeof window > "u")) return Vh;
    var s = Hh(l),
      a = document.documentElement.clientWidth,
      c = window.innerWidth;
    return {
      left: s[0],
      top: s[1],
      right: s[2],
      gap: Math.max(0, c - a + s[2] - s[0]),
    };
  },
  Kh = bd(),
  lr = "data-scroll-locked",
  Gh = function (l, s, a, c) {
    var f = l.left,
      m = l.top,
      x = l.right,
      v = l.gap;
    return (
      a === void 0 && (a = "margin"),
      `
  .`
        .concat(
          _h,
          ` {
   overflow: hidden `,
        )
        .concat(
          c,
          `;
   padding-right: `,
        )
        .concat(v, "px ")
        .concat(
          c,
          `;
  }
  body[`,
        )
        .concat(
          lr,
          `] {
    overflow: hidden `,
        )
        .concat(
          c,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            s && "position: relative ".concat(c, ";"),
            a === "margin" &&
              `
    padding-left: `
                .concat(
                  f,
                  `px;
    padding-top: `,
                )
                .concat(
                  m,
                  `px;
    padding-right: `,
                )
                .concat(
                  x,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(v, "px ")
                .concat(
                  c,
                  `;
    `,
                ),
            a === "padding" &&
              "padding-right: ".concat(v, "px ").concat(c, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          ml,
          ` {
    right: `,
        )
        .concat(v, "px ")
        .concat(
          c,
          `;
  }
  
  .`,
        )
        .concat(
          hl,
          ` {
    margin-right: `,
        )
        .concat(v, "px ")
        .concat(
          c,
          `;
  }
  
  .`,
        )
        .concat(ml, " .")
        .concat(
          ml,
          ` {
    right: 0 `,
        )
        .concat(
          c,
          `;
  }
  
  .`,
        )
        .concat(hl, " .")
        .concat(
          hl,
          ` {
    margin-right: 0 `,
        )
        .concat(
          c,
          `;
  }
  
  body[`,
        )
        .concat(
          lr,
          `] {
    `,
        )
        .concat(Ph, ": ")
        .concat(
          v,
          `px;
  }
`,
        )
    );
  },
  td = function () {
    var l = parseInt(document.body.getAttribute(lr) || "0", 10);
    return isFinite(l) ? l : 0;
  },
  Qh = function () {
    k.useEffect(function () {
      return (
        document.body.setAttribute(lr, (td() + 1).toString()),
        function () {
          var l = td() - 1;
          l <= 0
            ? document.body.removeAttribute(lr)
            : document.body.setAttribute(lr, l.toString());
        }
      );
    }, []);
  },
  Yh = function (l) {
    var s = l.noRelative,
      a = l.noImportant,
      c = l.gapMode,
      f = c === void 0 ? "margin" : c;
    Qh();
    var m = k.useMemo(
      function () {
        return $h(f);
      },
      [f],
    );
    return k.createElement(Kh, { styles: Gh(m, !s, f, a ? "" : "!important") });
  },
  Oa = !1;
if (typeof window < "u")
  try {
    var al = Object.defineProperty({}, "passive", {
      get: function () {
        return ((Oa = !0), !0);
      },
    });
    (window.addEventListener("test", al, al),
      window.removeEventListener("test", al, al));
  } catch {
    Oa = !1;
  }
var tr = Oa ? { passive: !1 } : !1,
  qh = function (l) {
    return l.tagName === "TEXTAREA";
  },
  _d = function (l, s) {
    if (!(l instanceof Element)) return !1;
    var a = window.getComputedStyle(l);
    return (
      a[s] !== "hidden" &&
      !(a.overflowY === a.overflowX && !qh(l) && a[s] === "visible")
    );
  },
  Xh = function (l) {
    return _d(l, "overflowY");
  },
  Zh = function (l) {
    return _d(l, "overflowX");
  },
  nd = function (l, s) {
    var a = s.ownerDocument,
      c = s;
    do {
      typeof ShadowRoot < "u" && c instanceof ShadowRoot && (c = c.host);
      var f = Pd(l, c);
      if (f) {
        var m = Td(l, c),
          x = m[1],
          v = m[2];
        if (x > v) return !0;
      }
      c = c.parentNode;
    } while (c && c !== a.body);
    return !1;
  },
  Jh = function (l) {
    var s = l.scrollTop,
      a = l.scrollHeight,
      c = l.clientHeight;
    return [s, a, c];
  },
  eg = function (l) {
    var s = l.scrollLeft,
      a = l.scrollWidth,
      c = l.clientWidth;
    return [s, a, c];
  },
  Pd = function (l, s) {
    return l === "v" ? Xh(s) : Zh(s);
  },
  Td = function (l, s) {
    return l === "v" ? Jh(s) : eg(s);
  },
  tg = function (l, s) {
    return l === "h" && s === "rtl" ? -1 : 1;
  },
  ng = function (l, s, a, c, f) {
    var m = tg(l, window.getComputedStyle(s).direction),
      x = m * c,
      v = a.target,
      C = s.contains(v),
      _ = !1,
      O = x > 0,
      L = 0,
      I = 0;
    do {
      if (!v) break;
      var G = Td(l, v),
        Y = G[0],
        b = G[1],
        A = G[2],
        Z = b - A - m * Y;
      (Y || Z) && Pd(l, v) && ((L += Z), (I += Y));
      var ne = v.parentNode;
      v = ne && ne.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? ne.host : ne;
    } while ((!C && v !== document.body) || (C && (s.contains(v) || s === v)));
    return (((O && Math.abs(L) < 1) || (!O && Math.abs(I) < 1)) && (_ = !0), _);
  },
  sl = function (l) {
    return "changedTouches" in l
      ? [l.changedTouches[0].clientX, l.changedTouches[0].clientY]
      : [0, 0];
  },
  rd = function (l) {
    return [l.deltaX, l.deltaY];
  },
  od = function (l) {
    return l && "current" in l ? l.current : l;
  },
  rg = function (l, s) {
    return l[0] === s[0] && l[1] === s[1];
  },
  og = function (l) {
    return `
  .block-interactivity-`
      .concat(
        l,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        l,
        ` {pointer-events: all;}
`,
      );
  },
  lg = 0,
  nr = [];
function ig(l) {
  var s = k.useRef([]),
    a = k.useRef([0, 0]),
    c = k.useRef(),
    f = k.useState(lg++)[0],
    m = k.useState(bd)[0],
    x = k.useRef(l);
  (k.useEffect(
    function () {
      x.current = l;
    },
    [l],
  ),
    k.useEffect(
      function () {
        if (l.inert) {
          document.body.classList.add("block-interactivity-".concat(f));
          var b = bh([l.lockRef.current], (l.shards || []).map(od), !0).filter(
            Boolean,
          );
          return (
            b.forEach(function (A) {
              return A.classList.add("allow-interactivity-".concat(f));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(f)),
                b.forEach(function (A) {
                  return A.classList.remove("allow-interactivity-".concat(f));
                }));
            }
          );
        }
      },
      [l.inert, l.lockRef.current, l.shards],
    ));
  var v = k.useCallback(function (b, A) {
      if (
        ("touches" in b && b.touches.length === 2) ||
        (b.type === "wheel" && b.ctrlKey)
      )
        return !x.current.allowPinchZoom;
      var Z = sl(b),
        ne = a.current,
        ie = "deltaX" in b ? b.deltaX : ne[0] - Z[0],
        q = "deltaY" in b ? b.deltaY : ne[1] - Z[1],
        se,
        ae = b.target,
        re = Math.abs(ie) > Math.abs(q) ? "h" : "v";
      if ("touches" in b && re === "h" && ae.type === "range") return !1;
      var W = window.getSelection(),
        we = W && W.anchorNode,
        Me = we ? we === ae || we.contains(ae) : !1;
      if (Me) return !1;
      var He = nd(re, ae);
      if (!He) return !0;
      if (
        (He ? (se = re) : ((se = re === "v" ? "h" : "v"), (He = nd(re, ae))),
        !He)
      )
        return !1;
      if (
        (!c.current && "changedTouches" in b && (ie || q) && (c.current = se),
        !se)
      )
        return !0;
      var _e = c.current || se;
      return ng(_e, A, b, _e === "h" ? ie : q);
    }, []),
    C = k.useCallback(function (b) {
      var A = b;
      if (!(!nr.length || nr[nr.length - 1] !== m)) {
        var Z = "deltaY" in A ? rd(A) : sl(A),
          ne = s.current.filter(function (se) {
            return (
              se.name === A.type &&
              (se.target === A.target || A.target === se.shadowParent) &&
              rg(se.delta, Z)
            );
          })[0];
        if (ne && ne.should) {
          A.cancelable && A.preventDefault();
          return;
        }
        if (!ne) {
          var ie = (x.current.shards || [])
              .map(od)
              .filter(Boolean)
              .filter(function (se) {
                return se.contains(A.target);
              }),
            q = ie.length > 0 ? v(A, ie[0]) : !x.current.noIsolation;
          q && A.cancelable && A.preventDefault();
        }
      }
    }, []),
    _ = k.useCallback(function (b, A, Z, ne) {
      var ie = {
        name: b,
        delta: A,
        target: Z,
        should: ne,
        shadowParent: ag(Z),
      };
      (s.current.push(ie),
        setTimeout(function () {
          s.current = s.current.filter(function (q) {
            return q !== ie;
          });
        }, 1));
    }, []),
    O = k.useCallback(function (b) {
      ((a.current = sl(b)), (c.current = void 0));
    }, []),
    L = k.useCallback(function (b) {
      _(b.type, rd(b), b.target, v(b, l.lockRef.current));
    }, []),
    I = k.useCallback(function (b) {
      _(b.type, sl(b), b.target, v(b, l.lockRef.current));
    }, []);
  k.useEffect(function () {
    return (
      nr.push(m),
      l.setCallbacks({
        onScrollCapture: L,
        onWheelCapture: L,
        onTouchMoveCapture: I,
      }),
      document.addEventListener("wheel", C, tr),
      document.addEventListener("touchmove", C, tr),
      document.addEventListener("touchstart", O, tr),
      function () {
        ((nr = nr.filter(function (b) {
          return b !== m;
        })),
          document.removeEventListener("wheel", C, tr),
          document.removeEventListener("touchmove", C, tr),
          document.removeEventListener("touchstart", O, tr));
      }
    );
  }, []);
  var G = l.removeScrollBar,
    Y = l.inert;
  return k.createElement(
    k.Fragment,
    null,
    Y ? k.createElement(m, { styles: og(f) }) : null,
    G
      ? k.createElement(Yh, { noRelative: l.noRelative, gapMode: l.gapMode })
      : null,
  );
}
function ag(l) {
  for (var s = null; l !== null; )
    (l instanceof ShadowRoot && ((s = l.host), (l = l.host)),
      (l = l.parentNode));
  return s;
}
const sg = Ih(jd, ig);
var Rd = k.forwardRef(function (l, s) {
  return k.createElement(xl, Rt({}, l, { ref: s, sideCar: sg }));
});
Rd.classNames = xl.classNames;
var ug = function (l) {
    if (typeof document > "u") return null;
    var s = Array.isArray(l) ? l[0] : l;
    return s.ownerDocument.body;
  },
  rr = new WeakMap(),
  ul = new WeakMap(),
  cl = {},
  Ca = 0,
  zd = function (l) {
    return l && (l.host || zd(l.parentNode));
  },
  cg = function (l, s) {
    return s
      .map(function (a) {
        if (l.contains(a)) return a;
        var c = zd(a);
        return c && l.contains(c)
          ? c
          : (console.error(
              "aria-hidden",
              a,
              "in not contained inside",
              l,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (a) {
        return !!a;
      });
  },
  dg = function (l, s, a, c) {
    var f = cg(s, Array.isArray(l) ? l : [l]);
    cl[a] || (cl[a] = new WeakMap());
    var m = cl[a],
      x = [],
      v = new Set(),
      C = new Set(f),
      _ = function (L) {
        !L || v.has(L) || (v.add(L), _(L.parentNode));
      };
    f.forEach(_);
    var O = function (L) {
      !L ||
        C.has(L) ||
        Array.prototype.forEach.call(L.children, function (I) {
          if (v.has(I)) O(I);
          else
            try {
              var G = I.getAttribute(c),
                Y = G !== null && G !== "false",
                b = (rr.get(I) || 0) + 1,
                A = (m.get(I) || 0) + 1;
              (rr.set(I, b),
                m.set(I, A),
                x.push(I),
                b === 1 && Y && ul.set(I, !0),
                A === 1 && I.setAttribute(a, "true"),
                Y || I.setAttribute(c, "true"));
            } catch (Z) {
              console.error("aria-hidden: cannot operate on ", I, Z);
            }
        });
    };
    return (
      O(s),
      v.clear(),
      Ca++,
      function () {
        (x.forEach(function (L) {
          var I = rr.get(L) - 1,
            G = m.get(L) - 1;
          (rr.set(L, I),
            m.set(L, G),
            I || (ul.has(L) || L.removeAttribute(c), ul.delete(L)),
            G || L.removeAttribute(a));
        }),
          Ca--,
          Ca ||
            ((rr = new WeakMap()),
            (rr = new WeakMap()),
            (ul = new WeakMap()),
            (cl = {})));
      }
    );
  },
  fg = function (l, s, a) {
    a === void 0 && (a = "data-aria-hidden");
    var c = Array.from(Array.isArray(l) ? l : [l]),
      f = ug(l);
    return f
      ? (c.push.apply(c, Array.from(f.querySelectorAll("[aria-live], script"))),
        dg(c, f, a, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Ua = "Dialog",
  [Md] = Qm(Ua),
  [pg, Nt] = Md(Ua),
  Od = (l) => {
    const {
        __scopeDialog: s,
        children: a,
        open: c,
        defaultOpen: f,
        onOpenChange: m,
        modal: x = !0,
      } = l,
      v = k.useRef(null),
      C = k.useRef(null),
      [_ = !1, O] = Zm({ prop: c, defaultProp: f, onChange: m });
    return d.jsx(pg, {
      scope: s,
      triggerRef: v,
      contentRef: C,
      contentId: ya(),
      titleId: ya(),
      descriptionId: ya(),
      open: _,
      onOpenChange: O,
      onOpenToggle: k.useCallback(() => O((L) => !L), [O]),
      modal: x,
      children: a,
    });
  };
Od.displayName = Ua;
var Ld = "DialogTrigger",
  mg = k.forwardRef((l, s) => {
    const { __scopeDialog: a, ...c } = l,
      f = Nt(Ld, a),
      m = Pn(s, f.triggerRef);
    return d.jsx(Wt.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": f.open,
      "aria-controls": f.contentId,
      "data-state": Va(f.open),
      ...c,
      ref: m,
      onClick: dn(l.onClick, f.onOpenToggle),
    });
  });
mg.displayName = Ld;
var Wa = "DialogPortal",
  [hg, Id] = Md(Wa, { forceMount: void 0 }),
  Ad = (l) => {
    const { __scopeDialog: s, forceMount: a, children: c, container: f } = l,
      m = Nt(Wa, s);
    return d.jsx(hg, {
      scope: s,
      forceMount: a,
      children: k.Children.map(c, (x) =>
        d.jsx(yl, {
          present: a || m.open,
          children: d.jsx(Nd, { asChild: !0, container: f, children: x }),
        }),
      ),
    });
  };
Ad.displayName = Wa;
var vl = "DialogOverlay",
  Dd = k.forwardRef((l, s) => {
    const a = Id(vl, l.__scopeDialog),
      { forceMount: c = a.forceMount, ...f } = l,
      m = Nt(vl, l.__scopeDialog);
    return m.modal
      ? d.jsx(yl, {
          present: c || m.open,
          children: d.jsx(gg, { ...f, ref: s }),
        })
      : null;
  });
Dd.displayName = vl;
var gg = k.forwardRef((l, s) => {
    const { __scopeDialog: a, ...c } = l,
      f = Nt(vl, a);
    return d.jsx(Rd, {
      as: Fa,
      allowPinchZoom: !0,
      shards: [f.contentRef],
      children: d.jsx(Wt.div, {
        "data-state": Va(f.open),
        ...c,
        ref: s,
        style: { pointerEvents: "auto", ...c.style },
      }),
    });
  }),
  _n = "DialogContent",
  Fd = k.forwardRef((l, s) => {
    const a = Id(_n, l.__scopeDialog),
      { forceMount: c = a.forceMount, ...f } = l,
      m = Nt(_n, l.__scopeDialog);
    return d.jsx(yl, {
      present: c || m.open,
      children: m.modal
        ? d.jsx(vg, { ...f, ref: s })
        : d.jsx(yg, { ...f, ref: s }),
    });
  });
Fd.displayName = _n;
var vg = k.forwardRef((l, s) => {
    const a = Nt(_n, l.__scopeDialog),
      c = k.useRef(null),
      f = Pn(s, a.contentRef, c);
    return (
      k.useEffect(() => {
        const m = c.current;
        if (m) return fg(m);
      }, []),
      d.jsx(Ud, {
        ...l,
        ref: f,
        trapFocus: a.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: dn(l.onCloseAutoFocus, (m) => {
          var x;
          (m.preventDefault(), (x = a.triggerRef.current) == null || x.focus());
        }),
        onPointerDownOutside: dn(l.onPointerDownOutside, (m) => {
          const x = m.detail.originalEvent,
            v = x.button === 0 && x.ctrlKey === !0;
          (x.button === 2 || v) && m.preventDefault();
        }),
        onFocusOutside: dn(l.onFocusOutside, (m) => m.preventDefault()),
      })
    );
  }),
  yg = k.forwardRef((l, s) => {
    const a = Nt(_n, l.__scopeDialog),
      c = k.useRef(!1),
      f = k.useRef(!1);
    return d.jsx(Ud, {
      ...l,
      ref: s,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (m) => {
        var x, v;
        ((x = l.onCloseAutoFocus) == null || x.call(l, m),
          m.defaultPrevented ||
            (c.current || (v = a.triggerRef.current) == null || v.focus(),
            m.preventDefault()),
          (c.current = !1),
          (f.current = !1));
      },
      onInteractOutside: (m) => {
        var C, _;
        ((C = l.onInteractOutside) == null || C.call(l, m),
          m.defaultPrevented ||
            ((c.current = !0),
            m.detail.originalEvent.type === "pointerdown" && (f.current = !0)));
        const x = m.target;
        (((_ = a.triggerRef.current) == null ? void 0 : _.contains(x)) &&
          m.preventDefault(),
          m.detail.originalEvent.type === "focusin" &&
            f.current &&
            m.preventDefault());
      },
    });
  }),
  Ud = k.forwardRef((l, s) => {
    const {
        __scopeDialog: a,
        trapFocus: c,
        onOpenAutoFocus: f,
        onCloseAutoFocus: m,
        ...x
      } = l,
      v = Nt(_n, a),
      C = k.useRef(null),
      _ = Pn(s, C);
    return (
      jh(),
      d.jsxs(d.Fragment, {
        children: [
          d.jsx(kd, {
            asChild: !0,
            loop: !0,
            trapped: c,
            onMountAutoFocus: f,
            onUnmountAutoFocus: m,
            children: d.jsx(xd, {
              role: "dialog",
              id: v.contentId,
              "aria-describedby": v.descriptionId,
              "aria-labelledby": v.titleId,
              "data-state": Va(v.open),
              ...x,
              ref: _,
              onDismiss: () => v.onOpenChange(!1),
            }),
          }),
          d.jsxs(d.Fragment, {
            children: [
              d.jsx(wg, { titleId: v.titleId }),
              d.jsx(Sg, { contentRef: C, descriptionId: v.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Ba = "DialogTitle",
  Wd = k.forwardRef((l, s) => {
    const { __scopeDialog: a, ...c } = l,
      f = Nt(Ba, a);
    return d.jsx(Wt.h2, { id: f.titleId, ...c, ref: s });
  });
Wd.displayName = Ba;
var Bd = "DialogDescription",
  xg = k.forwardRef((l, s) => {
    const { __scopeDialog: a, ...c } = l,
      f = Nt(Bd, a);
    return d.jsx(Wt.p, { id: f.descriptionId, ...c, ref: s });
  });
xg.displayName = Bd;
var Vd = "DialogClose",
  Hd = k.forwardRef((l, s) => {
    const { __scopeDialog: a, ...c } = l,
      f = Nt(Vd, a);
    return d.jsx(Wt.button, {
      type: "button",
      ...c,
      ref: s,
      onClick: dn(l.onClick, () => f.onOpenChange(!1)),
    });
  });
Hd.displayName = Vd;
function Va(l) {
  return l ? "open" : "closed";
}
var $d = "DialogTitleWarning",
  [xv, Kd] = Gm($d, { contentName: _n, titleName: Ba, docsSlug: "dialog" }),
  wg = ({ titleId: l }) => {
    const s = Kd($d),
      a = `\`${s.contentName}\` requires a \`${s.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${s.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${s.docsSlug}`;
    return (
      k.useEffect(() => {
        l && (document.getElementById(l) || console.error(a));
      }, [a, l]),
      null
    );
  },
  kg = "DialogDescriptionWarning",
  Sg = ({ contentRef: l, descriptionId: s }) => {
    const c = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Kd(kg).contentName}}.`;
    return (
      k.useEffect(() => {
        var m;
        const f =
          (m = l.current) == null ? void 0 : m.getAttribute("aria-describedby");
        s && f && (document.getElementById(s) || console.warn(c));
      }, [c, l, s]),
      null
    );
  },
  Ng = Od,
  Eg = Ad,
  Cg = Dd,
  jg = Fd,
  bg = Wd,
  _g = Hd;
function Gd(l) {
  var s,
    a,
    c = "";
  if (typeof l == "string" || typeof l == "number") c += l;
  else if (typeof l == "object")
    if (Array.isArray(l)) {
      var f = l.length;
      for (s = 0; s < f; s++)
        l[s] && (a = Gd(l[s])) && (c && (c += " "), (c += a));
    } else for (a in l) l[a] && (c && (c += " "), (c += a));
  return c;
}
function Pg() {
  for (var l, s, a = 0, c = "", f = arguments.length; a < f; a++)
    (l = arguments[a]) && (s = Gd(l)) && (c && (c += " "), (c += s));
  return c;
}
const Ha = "-",
  Tg = (l) => {
    const s = zg(l),
      { conflictingClassGroups: a, conflictingClassGroupModifiers: c } = l;
    return {
      getClassGroupId: (x) => {
        const v = x.split(Ha);
        return (v[0] === "" && v.length !== 1 && v.shift(), Qd(v, s) || Rg(x));
      },
      getConflictingClassGroupIds: (x, v) => {
        const C = a[x] || [];
        return v && c[x] ? [...C, ...c[x]] : C;
      },
    };
  },
  Qd = (l, s) => {
    var x;
    if (l.length === 0) return s.classGroupId;
    const a = l[0],
      c = s.nextPart.get(a),
      f = c ? Qd(l.slice(1), c) : void 0;
    if (f) return f;
    if (s.validators.length === 0) return;
    const m = l.join(Ha);
    return (x = s.validators.find(({ validator: v }) => v(m))) == null
      ? void 0
      : x.classGroupId;
  },
  ld = /^\[(.+)\]$/,
  Rg = (l) => {
    if (ld.test(l)) {
      const s = ld.exec(l)[1],
        a = s == null ? void 0 : s.substring(0, s.indexOf(":"));
      if (a) return "arbitrary.." + a;
    }
  },
  zg = (l) => {
    const { theme: s, classGroups: a } = l,
      c = { nextPart: new Map(), validators: [] };
    for (const f in a) La(a[f], c, f, s);
    return c;
  },
  La = (l, s, a, c) => {
    l.forEach((f) => {
      if (typeof f == "string") {
        const m = f === "" ? s : id(s, f);
        m.classGroupId = a;
        return;
      }
      if (typeof f == "function") {
        if (Mg(f)) {
          La(f(c), s, a, c);
          return;
        }
        s.validators.push({ validator: f, classGroupId: a });
        return;
      }
      Object.entries(f).forEach(([m, x]) => {
        La(x, id(s, m), a, c);
      });
    });
  },
  id = (l, s) => {
    let a = l;
    return (
      s.split(Ha).forEach((c) => {
        (a.nextPart.has(c) ||
          a.nextPart.set(c, { nextPart: new Map(), validators: [] }),
          (a = a.nextPart.get(c)));
      }),
      a
    );
  },
  Mg = (l) => l.isThemeGetter,
  Og = (l) => {
    if (l < 1) return { get: () => {}, set: () => {} };
    let s = 0,
      a = new Map(),
      c = new Map();
    const f = (m, x) => {
      (a.set(m, x), s++, s > l && ((s = 0), (c = a), (a = new Map())));
    };
    return {
      get(m) {
        let x = a.get(m);
        if (x !== void 0) return x;
        if ((x = c.get(m)) !== void 0) return (f(m, x), x);
      },
      set(m, x) {
        a.has(m) ? a.set(m, x) : f(m, x);
      },
    };
  },
  Ia = "!",
  Aa = ":",
  Lg = Aa.length,
  Ig = (l) => {
    const { prefix: s, experimentalParseClassName: a } = l;
    let c = (f) => {
      const m = [];
      let x = 0,
        v = 0,
        C = 0,
        _;
      for (let Y = 0; Y < f.length; Y++) {
        let b = f[Y];
        if (x === 0 && v === 0) {
          if (b === Aa) {
            (m.push(f.slice(C, Y)), (C = Y + Lg));
            continue;
          }
          if (b === "/") {
            _ = Y;
            continue;
          }
        }
        b === "[" ? x++ : b === "]" ? x-- : b === "(" ? v++ : b === ")" && v--;
      }
      const O = m.length === 0 ? f : f.substring(C),
        L = Ag(O),
        I = L !== O,
        G = _ && _ > C ? _ - C : void 0;
      return {
        modifiers: m,
        hasImportantModifier: I,
        baseClassName: L,
        maybePostfixModifierPosition: G,
      };
    };
    if (s) {
      const f = s + Aa,
        m = c;
      c = (x) =>
        x.startsWith(f)
          ? m(x.substring(f.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: x,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (a) {
      const f = c;
      c = (m) => a({ className: m, parseClassName: f });
    }
    return c;
  },
  Ag = (l) =>
    l.endsWith(Ia)
      ? l.substring(0, l.length - 1)
      : l.startsWith(Ia)
        ? l.substring(1)
        : l,
  Dg = (l) => {
    const s = Object.fromEntries(l.orderSensitiveModifiers.map((c) => [c, !0]));
    return (c) => {
      if (c.length <= 1) return c;
      const f = [];
      let m = [];
      return (
        c.forEach((x) => {
          x[0] === "[" || s[x] ? (f.push(...m.sort(), x), (m = [])) : m.push(x);
        }),
        f.push(...m.sort()),
        f
      );
    };
  },
  Fg = (l) => ({
    cache: Og(l.cacheSize),
    parseClassName: Ig(l),
    sortModifiers: Dg(l),
    ...Tg(l),
  }),
  Ug = /\s+/,
  Wg = (l, s) => {
    const {
        parseClassName: a,
        getClassGroupId: c,
        getConflictingClassGroupIds: f,
        sortModifiers: m,
      } = s,
      x = [],
      v = l.trim().split(Ug);
    let C = "";
    for (let _ = v.length - 1; _ >= 0; _ -= 1) {
      const O = v[_],
        {
          isExternal: L,
          modifiers: I,
          hasImportantModifier: G,
          baseClassName: Y,
          maybePostfixModifierPosition: b,
        } = a(O);
      if (L) {
        C = O + (C.length > 0 ? " " + C : C);
        continue;
      }
      let A = !!b,
        Z = c(A ? Y.substring(0, b) : Y);
      if (!Z) {
        if (!A) {
          C = O + (C.length > 0 ? " " + C : C);
          continue;
        }
        if (((Z = c(Y)), !Z)) {
          C = O + (C.length > 0 ? " " + C : C);
          continue;
        }
        A = !1;
      }
      const ne = m(I).join(":"),
        ie = G ? ne + Ia : ne,
        q = ie + Z;
      if (x.includes(q)) continue;
      x.push(q);
      const se = f(Z, A);
      for (let ae = 0; ae < se.length; ++ae) {
        const re = se[ae];
        x.push(ie + re);
      }
      C = O + (C.length > 0 ? " " + C : C);
    }
    return C;
  };
function Bg() {
  let l = 0,
    s,
    a,
    c = "";
  for (; l < arguments.length; )
    (s = arguments[l++]) && (a = Yd(s)) && (c && (c += " "), (c += a));
  return c;
}
const Yd = (l) => {
  if (typeof l == "string") return l;
  let s,
    a = "";
  for (let c = 0; c < l.length; c++)
    l[c] && (s = Yd(l[c])) && (a && (a += " "), (a += s));
  return a;
};
function Vg(l, ...s) {
  let a,
    c,
    f,
    m = x;
  function x(C) {
    const _ = s.reduce((O, L) => L(O), l());
    return ((a = Fg(_)), (c = a.cache.get), (f = a.cache.set), (m = v), v(C));
  }
  function v(C) {
    const _ = c(C);
    if (_) return _;
    const O = Wg(C, a);
    return (f(C, O), O);
  }
  return function () {
    return m(Bg.apply(null, arguments));
  };
}
const Ue = (l) => {
    const s = (a) => a[l] || [];
    return ((s.isThemeGetter = !0), s);
  },
  qd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Xd = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Hg = /^\d+\/\d+$/,
  $g = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Kg =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Gg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Qg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Yg =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  or = (l) => Hg.test(l),
  ce = (l) => !!l && !Number.isNaN(Number(l)),
  un = (l) => !!l && Number.isInteger(Number(l)),
  ja = (l) => l.endsWith("%") && ce(l.slice(0, -1)),
  Ut = (l) => $g.test(l),
  qg = () => !0,
  Xg = (l) => Kg.test(l) && !Gg.test(l),
  Zd = () => !1,
  Zg = (l) => Qg.test(l),
  Jg = (l) => Yg.test(l),
  ev = (l) => !V(l) && !H(l),
  tv = (l) => ir(l, tf, Zd),
  V = (l) => qd.test(l),
  Cn = (l) => ir(l, nf, Xg),
  ba = (l) => ir(l, iv, ce),
  ad = (l) => ir(l, Jd, Zd),
  nv = (l) => ir(l, ef, Jg),
  dl = (l) => ir(l, rf, Zg),
  H = (l) => Xd.test(l),
  Qr = (l) => ar(l, nf),
  rv = (l) => ar(l, av),
  sd = (l) => ar(l, Jd),
  ov = (l) => ar(l, tf),
  lv = (l) => ar(l, ef),
  fl = (l) => ar(l, rf, !0),
  ir = (l, s, a) => {
    const c = qd.exec(l);
    return c ? (c[1] ? s(c[1]) : a(c[2])) : !1;
  },
  ar = (l, s, a = !1) => {
    const c = Xd.exec(l);
    return c ? (c[1] ? s(c[1]) : a) : !1;
  },
  Jd = (l) => l === "position" || l === "percentage",
  ef = (l) => l === "image" || l === "url",
  tf = (l) => l === "length" || l === "size" || l === "bg-size",
  nf = (l) => l === "length",
  iv = (l) => l === "number",
  av = (l) => l === "family-name",
  rf = (l) => l === "shadow",
  sv = () => {
    const l = Ue("color"),
      s = Ue("font"),
      a = Ue("text"),
      c = Ue("font-weight"),
      f = Ue("tracking"),
      m = Ue("leading"),
      x = Ue("breakpoint"),
      v = Ue("container"),
      C = Ue("spacing"),
      _ = Ue("radius"),
      O = Ue("shadow"),
      L = Ue("inset-shadow"),
      I = Ue("text-shadow"),
      G = Ue("drop-shadow"),
      Y = Ue("blur"),
      b = Ue("perspective"),
      A = Ue("aspect"),
      Z = Ue("ease"),
      ne = Ue("animate"),
      ie = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      q = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      se = () => [...q(), H, V],
      ae = () => ["auto", "hidden", "clip", "visible", "scroll"],
      re = () => ["auto", "contain", "none"],
      W = () => [H, V, C],
      we = () => [or, "full", "auto", ...W()],
      Me = () => [un, "none", "subgrid", H, V],
      He = () => ["auto", { span: ["full", un, H, V] }, un, H, V],
      _e = () => [un, "auto", H, V],
      Ae = () => ["auto", "min", "max", "fr", H, V],
      Pe = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      Oe = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      xe = () => ["auto", ...W()],
      he = () => [
        or,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...W(),
      ],
      j = () => [l, H, V],
      X = () => [...q(), sd, ad, { position: [H, V] }],
      D = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      y = () => ["auto", "cover", "contain", ov, tv, { size: [H, V] }],
      P = () => [ja, Qr, Cn],
      Q = () => ["", "none", "full", _, H, V],
      J = () => ["", ce, Qr, Cn],
      ue = () => ["solid", "dashed", "dotted", "double"],
      fe = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      oe = () => [ce, ja, sd, ad],
      pe = () => ["", "none", Y, H, V],
      ve = () => ["none", ce, H, V],
      Le = () => ["none", ce, H, V],
      Et = () => [ce, H, V],
      Ct = () => [or, "full", ...W()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Ut],
        breakpoint: [Ut],
        color: [qg],
        container: [Ut],
        "drop-shadow": [Ut],
        ease: ["in", "out", "in-out"],
        font: [ev],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Ut],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Ut],
        shadow: [Ut],
        spacing: ["px", ce],
        text: [Ut],
        "text-shadow": [Ut],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", or, V, H, A] }],
        container: ["container"],
        columns: [{ columns: [ce, V, H, v] }],
        "break-after": [{ "break-after": ie() }],
        "break-before": [{ "break-before": ie() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: se() }],
        overflow: [{ overflow: ae() }],
        "overflow-x": [{ "overflow-x": ae() }],
        "overflow-y": [{ "overflow-y": ae() }],
        overscroll: [{ overscroll: re() }],
        "overscroll-x": [{ "overscroll-x": re() }],
        "overscroll-y": [{ "overscroll-y": re() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: we() }],
        "inset-x": [{ "inset-x": we() }],
        "inset-y": [{ "inset-y": we() }],
        start: [{ start: we() }],
        end: [{ end: we() }],
        top: [{ top: we() }],
        right: [{ right: we() }],
        bottom: [{ bottom: we() }],
        left: [{ left: we() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [un, "auto", H, V] }],
        basis: [{ basis: [or, "full", "auto", v, ...W()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [ce, or, "auto", "initial", "none", V] }],
        grow: [{ grow: ["", ce, H, V] }],
        shrink: [{ shrink: ["", ce, H, V] }],
        order: [{ order: [un, "first", "last", "none", H, V] }],
        "grid-cols": [{ "grid-cols": Me() }],
        "col-start-end": [{ col: He() }],
        "col-start": [{ "col-start": _e() }],
        "col-end": [{ "col-end": _e() }],
        "grid-rows": [{ "grid-rows": Me() }],
        "row-start-end": [{ row: He() }],
        "row-start": [{ "row-start": _e() }],
        "row-end": [{ "row-end": _e() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": Ae() }],
        "auto-rows": [{ "auto-rows": Ae() }],
        gap: [{ gap: W() }],
        "gap-x": [{ "gap-x": W() }],
        "gap-y": [{ "gap-y": W() }],
        "justify-content": [{ justify: [...Pe(), "normal"] }],
        "justify-items": [{ "justify-items": [...Oe(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...Oe()] }],
        "align-content": [{ content: ["normal", ...Pe()] }],
        "align-items": [{ items: [...Oe(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...Oe(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": Pe() }],
        "place-items": [{ "place-items": [...Oe(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...Oe()] }],
        p: [{ p: W() }],
        px: [{ px: W() }],
        py: [{ py: W() }],
        ps: [{ ps: W() }],
        pe: [{ pe: W() }],
        pt: [{ pt: W() }],
        pr: [{ pr: W() }],
        pb: [{ pb: W() }],
        pl: [{ pl: W() }],
        m: [{ m: xe() }],
        mx: [{ mx: xe() }],
        my: [{ my: xe() }],
        ms: [{ ms: xe() }],
        me: [{ me: xe() }],
        mt: [{ mt: xe() }],
        mr: [{ mr: xe() }],
        mb: [{ mb: xe() }],
        ml: [{ ml: xe() }],
        "space-x": [{ "space-x": W() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": W() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: he() }],
        w: [{ w: [v, "screen", ...he()] }],
        "min-w": [{ "min-w": [v, "screen", "none", ...he()] }],
        "max-w": [
          { "max-w": [v, "screen", "none", "prose", { screen: [x] }, ...he()] },
        ],
        h: [{ h: ["screen", ...he()] }],
        "min-h": [{ "min-h": ["screen", "none", ...he()] }],
        "max-h": [{ "max-h": ["screen", ...he()] }],
        "font-size": [{ text: ["base", a, Qr, Cn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [c, H, ba] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              ja,
              V,
            ],
          },
        ],
        "font-family": [{ font: [rv, V, s] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [f, H, V] }],
        "line-clamp": [{ "line-clamp": [ce, "none", H, ba] }],
        leading: [{ leading: [m, ...W()] }],
        "list-image": [{ "list-image": ["none", H, V] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", H, V] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: j() }],
        "text-color": [{ text: j() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ue(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [ce, "from-font", "auto", H, Cn] },
        ],
        "text-decoration-color": [{ decoration: j() }],
        "underline-offset": [{ "underline-offset": [ce, "auto", H, V] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: W() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              H,
              V,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", H, V] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: X() }],
        "bg-repeat": [{ bg: D() }],
        "bg-size": [{ bg: y() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  un,
                  H,
                  V,
                ],
                radial: ["", H, V],
                conic: [un, H, V],
              },
              lv,
              nv,
            ],
          },
        ],
        "bg-color": [{ bg: j() }],
        "gradient-from-pos": [{ from: P() }],
        "gradient-via-pos": [{ via: P() }],
        "gradient-to-pos": [{ to: P() }],
        "gradient-from": [{ from: j() }],
        "gradient-via": [{ via: j() }],
        "gradient-to": [{ to: j() }],
        rounded: [{ rounded: Q() }],
        "rounded-s": [{ "rounded-s": Q() }],
        "rounded-e": [{ "rounded-e": Q() }],
        "rounded-t": [{ "rounded-t": Q() }],
        "rounded-r": [{ "rounded-r": Q() }],
        "rounded-b": [{ "rounded-b": Q() }],
        "rounded-l": [{ "rounded-l": Q() }],
        "rounded-ss": [{ "rounded-ss": Q() }],
        "rounded-se": [{ "rounded-se": Q() }],
        "rounded-ee": [{ "rounded-ee": Q() }],
        "rounded-es": [{ "rounded-es": Q() }],
        "rounded-tl": [{ "rounded-tl": Q() }],
        "rounded-tr": [{ "rounded-tr": Q() }],
        "rounded-br": [{ "rounded-br": Q() }],
        "rounded-bl": [{ "rounded-bl": Q() }],
        "border-w": [{ border: J() }],
        "border-w-x": [{ "border-x": J() }],
        "border-w-y": [{ "border-y": J() }],
        "border-w-s": [{ "border-s": J() }],
        "border-w-e": [{ "border-e": J() }],
        "border-w-t": [{ "border-t": J() }],
        "border-w-r": [{ "border-r": J() }],
        "border-w-b": [{ "border-b": J() }],
        "border-w-l": [{ "border-l": J() }],
        "divide-x": [{ "divide-x": J() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": J() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...ue(), "hidden", "none"] }],
        "divide-style": [{ divide: [...ue(), "hidden", "none"] }],
        "border-color": [{ border: j() }],
        "border-color-x": [{ "border-x": j() }],
        "border-color-y": [{ "border-y": j() }],
        "border-color-s": [{ "border-s": j() }],
        "border-color-e": [{ "border-e": j() }],
        "border-color-t": [{ "border-t": j() }],
        "border-color-r": [{ "border-r": j() }],
        "border-color-b": [{ "border-b": j() }],
        "border-color-l": [{ "border-l": j() }],
        "divide-color": [{ divide: j() }],
        "outline-style": [{ outline: [...ue(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [ce, H, V] }],
        "outline-w": [{ outline: ["", ce, Qr, Cn] }],
        "outline-color": [{ outline: j() }],
        shadow: [{ shadow: ["", "none", O, fl, dl] }],
        "shadow-color": [{ shadow: j() }],
        "inset-shadow": [{ "inset-shadow": ["none", L, fl, dl] }],
        "inset-shadow-color": [{ "inset-shadow": j() }],
        "ring-w": [{ ring: J() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: j() }],
        "ring-offset-w": [{ "ring-offset": [ce, Cn] }],
        "ring-offset-color": [{ "ring-offset": j() }],
        "inset-ring-w": [{ "inset-ring": J() }],
        "inset-ring-color": [{ "inset-ring": j() }],
        "text-shadow": [{ "text-shadow": ["none", I, fl, dl] }],
        "text-shadow-color": [{ "text-shadow": j() }],
        opacity: [{ opacity: [ce, H, V] }],
        "mix-blend": [
          { "mix-blend": [...fe(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": fe() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [ce] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": oe() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": oe() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": j() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": j() }],
        "mask-image-t-from-pos": [{ "mask-t-from": oe() }],
        "mask-image-t-to-pos": [{ "mask-t-to": oe() }],
        "mask-image-t-from-color": [{ "mask-t-from": j() }],
        "mask-image-t-to-color": [{ "mask-t-to": j() }],
        "mask-image-r-from-pos": [{ "mask-r-from": oe() }],
        "mask-image-r-to-pos": [{ "mask-r-to": oe() }],
        "mask-image-r-from-color": [{ "mask-r-from": j() }],
        "mask-image-r-to-color": [{ "mask-r-to": j() }],
        "mask-image-b-from-pos": [{ "mask-b-from": oe() }],
        "mask-image-b-to-pos": [{ "mask-b-to": oe() }],
        "mask-image-b-from-color": [{ "mask-b-from": j() }],
        "mask-image-b-to-color": [{ "mask-b-to": j() }],
        "mask-image-l-from-pos": [{ "mask-l-from": oe() }],
        "mask-image-l-to-pos": [{ "mask-l-to": oe() }],
        "mask-image-l-from-color": [{ "mask-l-from": j() }],
        "mask-image-l-to-color": [{ "mask-l-to": j() }],
        "mask-image-x-from-pos": [{ "mask-x-from": oe() }],
        "mask-image-x-to-pos": [{ "mask-x-to": oe() }],
        "mask-image-x-from-color": [{ "mask-x-from": j() }],
        "mask-image-x-to-color": [{ "mask-x-to": j() }],
        "mask-image-y-from-pos": [{ "mask-y-from": oe() }],
        "mask-image-y-to-pos": [{ "mask-y-to": oe() }],
        "mask-image-y-from-color": [{ "mask-y-from": j() }],
        "mask-image-y-to-color": [{ "mask-y-to": j() }],
        "mask-image-radial": [{ "mask-radial": [H, V] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": oe() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": oe() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": j() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": j() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": q() }],
        "mask-image-conic-pos": [{ "mask-conic": [ce] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": oe() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": oe() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": j() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": j() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: X() }],
        "mask-repeat": [{ mask: D() }],
        "mask-size": [{ mask: y() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", H, V] }],
        filter: [{ filter: ["", "none", H, V] }],
        blur: [{ blur: pe() }],
        brightness: [{ brightness: [ce, H, V] }],
        contrast: [{ contrast: [ce, H, V] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", G, fl, dl] }],
        "drop-shadow-color": [{ "drop-shadow": j() }],
        grayscale: [{ grayscale: ["", ce, H, V] }],
        "hue-rotate": [{ "hue-rotate": [ce, H, V] }],
        invert: [{ invert: ["", ce, H, V] }],
        saturate: [{ saturate: [ce, H, V] }],
        sepia: [{ sepia: ["", ce, H, V] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", H, V] }],
        "backdrop-blur": [{ "backdrop-blur": pe() }],
        "backdrop-brightness": [{ "backdrop-brightness": [ce, H, V] }],
        "backdrop-contrast": [{ "backdrop-contrast": [ce, H, V] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", ce, H, V] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [ce, H, V] }],
        "backdrop-invert": [{ "backdrop-invert": ["", ce, H, V] }],
        "backdrop-opacity": [{ "backdrop-opacity": [ce, H, V] }],
        "backdrop-saturate": [{ "backdrop-saturate": [ce, H, V] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", ce, H, V] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": W() }],
        "border-spacing-x": [{ "border-spacing-x": W() }],
        "border-spacing-y": [{ "border-spacing-y": W() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              H,
              V,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [ce, "initial", H, V] }],
        ease: [{ ease: ["linear", "initial", Z, H, V] }],
        delay: [{ delay: [ce, H, V] }],
        animate: [{ animate: ["none", ne, H, V] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [b, H, V] }],
        "perspective-origin": [{ "perspective-origin": se() }],
        rotate: [{ rotate: ve() }],
        "rotate-x": [{ "rotate-x": ve() }],
        "rotate-y": [{ "rotate-y": ve() }],
        "rotate-z": [{ "rotate-z": ve() }],
        scale: [{ scale: Le() }],
        "scale-x": [{ "scale-x": Le() }],
        "scale-y": [{ "scale-y": Le() }],
        "scale-z": [{ "scale-z": Le() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: Et() }],
        "skew-x": [{ "skew-x": Et() }],
        "skew-y": [{ "skew-y": Et() }],
        transform: [{ transform: [H, V, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: se() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Ct() }],
        "translate-x": [{ "translate-x": Ct() }],
        "translate-y": [{ "translate-y": Ct() }],
        "translate-z": [{ "translate-z": Ct() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: j() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: j() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              H,
              V,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": W() }],
        "scroll-mx": [{ "scroll-mx": W() }],
        "scroll-my": [{ "scroll-my": W() }],
        "scroll-ms": [{ "scroll-ms": W() }],
        "scroll-me": [{ "scroll-me": W() }],
        "scroll-mt": [{ "scroll-mt": W() }],
        "scroll-mr": [{ "scroll-mr": W() }],
        "scroll-mb": [{ "scroll-mb": W() }],
        "scroll-ml": [{ "scroll-ml": W() }],
        "scroll-p": [{ "scroll-p": W() }],
        "scroll-px": [{ "scroll-px": W() }],
        "scroll-py": [{ "scroll-py": W() }],
        "scroll-ps": [{ "scroll-ps": W() }],
        "scroll-pe": [{ "scroll-pe": W() }],
        "scroll-pt": [{ "scroll-pt": W() }],
        "scroll-pr": [{ "scroll-pr": W() }],
        "scroll-pb": [{ "scroll-pb": W() }],
        "scroll-pl": [{ "scroll-pl": W() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", H, V] },
        ],
        fill: [{ fill: ["none", ...j()] }],
        "stroke-w": [{ stroke: [ce, Qr, Cn, ba] }],
        stroke: [{ stroke: ["none", ...j()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  uv = Vg(sv);
function wl(...l) {
  return uv(Pg(l));
}
function _a({ ...l }) {
  return d.jsx(Ng, { "data-slot": "dialog", ...l });
}
function cv({ ...l }) {
  return d.jsx(Eg, { "data-slot": "dialog-portal", ...l });
}
function dv({ className: l, ...s }) {
  return d.jsx(Cg, {
    "data-slot": "dialog-overlay",
    className: wl(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
      l,
    ),
    ...s,
  });
}
function Pa({ className: l, children: s, ...a }) {
  return d.jsxs(cv, {
    "data-slot": "dialog-portal",
    children: [
      d.jsx(dv, {}),
      d.jsxs(jg, {
        "data-slot": "dialog-content",
        className: wl(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          l,
        ),
        ...a,
        children: [
          s,
          d.jsxs(_g, {
            className:
              "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            children: [
              d.jsx(hd, {}),
              d.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ta({ className: l, ...s }) {
  return d.jsx("div", {
    "data-slot": "dialog-header",
    className: wl("flex flex-col gap-2 text-center sm:text-left", l),
    ...s,
  });
}
function Ra({ className: l, ...s }) {
  return d.jsx(bg, {
    "data-slot": "dialog-title",
    className: wl("text-lg leading-none font-semibold", l),
    ...s,
  });
}
const jn = [
    {
      name: "Naruto Uzumaki",
      title: "The Seventh Hokage • Child of Prophecy",
      village: "Konohagakure",
      rank: "Hokage",
      clan: "Uzumaki",
      image:
        "https://static.wikia.nocookie.net/naruto/images/7/7d/Naruto_Part_II.png",
      bio: "Born with the Nine-Tailed Fox sealed inside him, Naruto faced rejection and loneliness but never gave up on his dream.",
      abilities: [
        "Kurama Link Mode",
        "Six Paths Sage Mode",
        "Rasenshuriken",
        "Shadow Clone Jutsu",
      ],
      achievements: [
        "Defeated Pain",
        "Helped end Fourth War",
        "Became Seventh Hokage",
      ],
      signature: "Rasengan",
      relationships: [
        "Sasuke (rival-brother)",
        "Jiraiya (mentor)",
        "Hinata (wife)",
      ],
      quote: "I'm not gonna run away, I never go back on my word.",
      arc: "War Arc",
      powerStats: { speed: 9, iq: 7, chakra: 10, taijutsu: 8 },
    },
    {
      name: "Sasuke Uchiha",
      title: "The Shadow Hokage • Last Uchiha",
      village: "Konohagakure",
      rank: "Rogue Ninja",
      clan: "Uchiha",
      image:
        "https://static.wikia.nocookie.net/naruto/images/5/58/Sasuke_Part_2.png",
      bio: "After his clan's massacre, Sasuke pursued revenge before finding redemption as Konoha's protector from the shadows.",
      abilities: ["Rinnegan", "Amaterasu", "Perfect Susanoo", "Chidori"],
      achievements: [
        "Defeated Danzō",
        "Fought Kaguya",
        "Protects the village from the shadows",
      ],
      signature: "Chidori",
      relationships: ["Naruto (rival)", "Itachi (brother)", "Sakura (wife)"],
      quote:
        "I have long since closed my eyes... My only goal is in the darkness.",
      arc: "War Arc",
      powerStats: { speed: 9, iq: 8, chakra: 9, taijutsu: 8 },
    },
    {
      name: "Itachi Uchiha",
      title: "The Clan Killer • Konoha's Martyr",
      village: "Konohagakure",
      rank: "ANBU Captain",
      clan: "Uchiha",
      image: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png",
      bio: "A prodigy who carried unbearable burdens to prevent war, living as a villain to protect his brother and village.",
      abilities: ["Tsukuyomi", "Amaterasu", "Susanoo", "Izanami"],
      achievements: [
        "Prevented Uchiha coup",
        "Akatsuki double-agent",
        "Protected Sasuke",
      ],
      signature: "Tsukuyomi",
      relationships: ["Sasuke (brother)", "Shisui (friend)", "Konoha (duty)"],
      quote:
        "People live their lives bound by what they accept as correct and true.",
      arc: "Shippuden",
      powerStats: { speed: 8, iq: 10, chakra: 8, taijutsu: 7 },
    },
    {
      name: "Madara Uchiha",
      title: "Ghost of the Uchiha",
      village: "Konohagakure",
      rank: "Co-Founder",
      clan: "Uchiha",
      image:
        "https://static.wikia.nocookie.net/naruto/images/a/ae/Madara_Uchiha.png",
      bio: "Co-founder of Konoha who sought peace through domination and became one of history's most powerful shinobi.",
      abilities: ["Rinnegan", "Perfect Susanoo", "Limbo", "Infinite Tsukuyomi"],
      achievements: [
        "Fought entire Allied Forces",
        "Became Ten-Tails Jinchūriki",
      ],
      signature: "Perfect Susanoo",
      relationships: [
        "Hashirama (rival)",
        "Obito (pawn)",
        "Black Zetsu (manipulator)",
      ],
      quote: "Wake up to reality. Nothing ever goes as planned in this world.",
      arc: "War Arc",
      powerStats: { speed: 8, iq: 9, chakra: 10, taijutsu: 9 },
    },
    {
      name: "Kakashi Hatake",
      title: "The Copy Ninja • Sixth Hokage",
      village: "Konohagakure",
      rank: "Hokage",
      clan: "Hatake",
      image:
        "https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png",
      bio: "A brilliant shinobi and Team 7 leader who turned pain into leadership and protected Konoha through multiple eras.",
      abilities: ["Kamui", "Lightning Blade", "1,000 copied jutsu"],
      achievements: ["Led Team 7", "Became Sixth Hokage"],
      signature: "Lightning Blade",
      relationships: [
        "Obito (teammate)",
        "Naruto (student)",
        "Minato (teacher)",
      ],
      quote: "Those who abandon their friends are worse than scum.",
      arc: "Shippuden",
      powerStats: { speed: 8, iq: 9, chakra: 7, taijutsu: 8 },
    },
    {
      name: "Minato Namikaze",
      title: "The Yellow Flash • Fourth Hokage",
      village: "Konohagakure",
      rank: "Hokage",
      clan: "Namikaze",
      image:
        "https://static.wikia.nocookie.net/naruto/images/7/70/Minato_Namikaze.png",
      bio: "The Fourth Hokage famed for unmatched speed and sacrifice, who sealed the Nine-Tails into his son to save the village.",
      abilities: ["Flying Thunder God", "Rasengan", "Sealing Jutsu"],
      achievements: ["Youngest Hokage", "Saved Konoha from Nine-Tails"],
      signature: "Flying Thunder God",
      relationships: ["Naruto (son)", "Kushina (wife)", "Jiraiya (mentor)"],
      quote: "As long as there is hope, there is always a path forward.",
      arc: "Part 1",
      powerStats: { speed: 10, iq: 9, chakra: 8, taijutsu: 8 },
    },
    {
      name: "Sakura Haruno",
      title: "Medical Ninja • Student of Tsunade",
      village: "Konohagakure",
      rank: "Jonin",
      clan: "Haruno",
      image:
        "https://static.wikia.nocookie.net/naruto/images/3/3e/Sakura_Haruno.png",
      bio: "Sakura grows from a genin into one of the strongest kunoichi, mastering medical ninjutsu and superhuman strength.",
      abilities: [
        "Chakra Enhanced Strength",
        "Medical Ninjutsu",
        "Byakugo Seal",
      ],
      achievements: [
        "Defeated Sasori with Chiyo",
        "Healed countless shinobi in the war",
      ],
      signature: "Cherry Blossom Impact",
      relationships: [
        "Naruto (teammate)",
        "Sasuke (husband)",
        "Tsunade (mentor)",
      ],
      quote: "A smile is the easiest way out of a difficult situation.",
      arc: "Shippuden",
      powerStats: { speed: 7, iq: 8, chakra: 8, taijutsu: 9 },
    },
    {
      name: "Shikamaru Nara",
      title: "Genius Strategist • Eighth Hokage's Advisor",
      village: "Konohagakure",
      rank: "Jonin",
      clan: "Nara",
      image:
        "https://static.wikia.nocookie.net/naruto/images/9/97/Shikamaru_Nara.png",
      bio: "The tactical mastermind of Konoha known for his shadow techniques and battle intelligence.",
      abilities: [
        "Shadow Possession Jutsu",
        "Shadow Strangle",
        "Battle Strategy",
      ],
      achievements: ["Defeated Hidan", "Led multiple successful war squads"],
      signature: "Shadow Possession",
      relationships: ["Choji (best friend)", "Asuma (mentor)", "Temari (wife)"],
      quote: "It's such a drag...",
      arc: "Shippuden",
      powerStats: { speed: 6, iq: 10, chakra: 7, taijutsu: 5 },
    },
    {
      name: "Hinata Hyuga",
      title: "Byakugan Princess • Gentle Fist Master",
      village: "Konohagakure",
      rank: "Jonin",
      clan: "Hyuga",
      image:
        "https://static.wikia.nocookie.net/naruto/images/9/97/Hinata_Part_II.png",
      bio: "Hinata overcomes fear and self-doubt, becoming a brave and skilled shinobi who follows her own ninja way.",
      abilities: ["Byakugan", "Gentle Fist", "Twin Lion Fists"],
      achievements: [
        "Protected Naruto against Pain",
        "Fought in the Fourth War",
      ],
      signature: "Twin Lion Fists",
      relationships: ["Naruto (husband)", "Neji (cousin)", "Hanabi (sister)"],
      quote: "I never go back on my word, because that too is my ninja way.",
      arc: "Shippuden",
      powerStats: { speed: 7, iq: 7, chakra: 7, taijutsu: 8 },
    },
    {
      name: "Gaara",
      title: "Fifth Kazekage • Former Jinchuriki",
      village: "Sunagakure",
      rank: "Kage",
      clan: "Sabaku",
      image: "https://static.wikia.nocookie.net/naruto/images/9/93/Gaara.png",
      bio: "Once isolated like Naruto, Gaara becomes the Kazekage and one of the most respected leaders of his generation.",
      abilities: ["Sand Manipulation", "Absolute Defense", "Sand Mausoleum"],
      achievements: [
        "Became Fifth Kazekage",
        "Led divisions in the Fourth War",
      ],
      signature: "Sand Tsunami",
      relationships: [
        "Naruto (friend)",
        "Kankuro (brother)",
        "Temari (sister)",
      ],
      quote:
        "In order to escape a road of solitude, one has to work hard and forge a new path.",
      arc: "Shippuden",
      powerStats: { speed: 7, iq: 8, chakra: 8, taijutsu: 6 },
    },
    {
      name: "Rock Lee",
      title: "The Green Beast • Taijutsu Specialist",
      village: "Konohagakure",
      rank: "Jonin",
      clan: "Lee",
      image:
        "https://static.wikia.nocookie.net/naruto/images/7/70/Rock_Lee.png",
      bio: "A hard-working taijutsu specialist who proves effort and spirit can overcome natural talent.",
      abilities: ["Eight Gates", "Strong Fist", "Drunken Fist"],
      achievements: [
        "Defied prodigies in Chunin Exams",
        "Fought in Fourth War frontlines",
      ],
      signature: "Primary Lotus",
      relationships: [
        "Might Guy (mentor)",
        "Neji (teammate)",
        "Tenten (teammate)",
      ],
      quote: "A dropout will beat a genius through hard work.",
      arc: "Part 1",
      powerStats: { speed: 9, iq: 5, chakra: 6, taijutsu: 10 },
    },
  ],
  fv = [
    {
      name: "Fourth Shinobi World War",
      duration: "2 Days",
      description:
        "The largest shinobi conflict sparked by Obito to capture all tailed beasts.",
      keyEvents: [
        "Allied Forces formed",
        "Ten-Tails revived",
        "Madara's revival",
        "Kaguya sealed",
      ],
      casualties: "40,000+ shinobi",
      outcome: "Allied Victory",
      image:
        "https://static.wikia.nocookie.net/naruto/images/0/07/Fourth_Shinobi_World_War.png",
      timeline: [
        "Alliance formed",
        "Ten-Tails battle",
        "Six Paths awakening",
        "Final Valley duel",
      ],
    },
    {
      name: "Third Shinobi World War",
      duration: "Several Years",
      description:
        "A brutal global war that shaped the legends of Minato, Kakashi, and the Sannin.",
      keyEvents: [
        "Kannabi Bridge",
        "Obito presumed dead",
        "Yellow Flash rises",
      ],
      casualties: "Thousands",
      outcome: "Ceasefire",
      image:
        "https://static.wikia.nocookie.net/naruto/images/b/b4/Third_Shinobi_World_War.png",
      timeline: [
        "Village tensions rise",
        "Frontline escalation",
        "Kannabi Bridge",
        "War exhaustion ceasefire",
      ],
    },
  ],
  pv = [
    {
      name: "Land of Waves Mission",
      rank: "C",
      team: "Team 7",
      objective: "Protect Tazuna and complete the bridge.",
      outcome: "Success",
      notableEvents: [
        "First Zabuza fight",
        "Sasuke awakens Sharingan",
        "Haku's sacrifice",
      ],
      quote: "A true shinobi endures.",
    },
    {
      name: "Sasuke Recovery Mission",
      rank: "S",
      team: "Shikamaru-led retrieval squad",
      objective: "Bring Sasuke back before reaching Orochimaru.",
      outcome: "Failed",
      notableEvents: ["Sound Four battles", "Naruto vs Sasuke (Part 1)"],
      quote: "You are my friend.",
    },
    {
      name: "Kazekage Rescue Mission",
      rank: "S",
      team: "Team Kakashi & Team Guy",
      objective: "Rescue Gaara from Akatsuki.",
      outcome: "Partial Success",
      notableEvents: ["Sakura vs Sasori", "Gaara revived by Chiyo"],
      quote: "A shinobi's life isn't measured by how they lived.",
    },
  ],
  ud = [
    {
      title: "Naruto vs Sasuke - Final Valley",
      description: "The final clash between rivals.",
      videoId: "BCE1vJ5R1K4",
      category: "Epic Battle",
    },
    {
      title: "Madara vs Shinobi Alliance",
      description: "Madara dominates the battlefield.",
      videoId: "QhBnZ6NPOY0",
      category: "War Arc",
    },
    {
      title: "Itachi's Truth Revealed",
      description: "The truth behind Itachi's sacrifice.",
      videoId: "yPYZpwSpKmA",
      category: "Character Story",
    },
    {
      title: "Naruto vs Pain",
      description: "Konoha's savior returns.",
      videoId: "8oW2MilqOo0",
      category: "Epic Battle",
    },
  ],
  mv = [
    {
      icon: "🍥",
      title: "Naruto's Name Origin",
      description:
        "Named after ramen topping fish cake and Jiraiya's novel character.",
    },
    {
      icon: "👁️",
      title: "Sharingan Evolution",
      description:
        "Sharingan awakens through intense emotional events and can evolve to Mangekyō.",
    },
    {
      icon: "⚡",
      title: "Nature Transformations",
      description:
        "Five base chakra natures combine into Kekkei Genkai like Wood and Ice release.",
    },
  ],
  hv = [
    {
      name: "Uchiha",
      kekkeiGenkai: "Sharingan",
      specialty: "Genjutsu and Fire Release",
      members: ["Sasuke", "Itachi", "Madara", "Obito"],
    },
    {
      name: "Uzumaki",
      kekkeiGenkai: "Exceptional life-force",
      specialty: "Sealing techniques",
      members: ["Naruto", "Kushina", "Nagato", "Karin"],
    },
    {
      name: "Hyuga",
      kekkeiGenkai: "Byakugan",
      specialty: "Gentle Fist taijutsu",
      members: ["Hinata", "Neji", "Hiashi", "Hanabi"],
    },
  ],
  gv = [
    {
      name: "Rasengan",
      type: "Ninjutsu",
      rank: "A",
      users: ["Naruto", "Minato", "Konohamaru"],
      firstAppearance: "Episode 86",
    },
    {
      name: "Chidori",
      type: "Ninjutsu",
      rank: "A",
      users: ["Sasuke", "Kakashi"],
      firstAppearance: "Episode 67",
    },
    {
      name: "Tsukuyomi",
      type: "Genjutsu",
      rank: "S",
      users: ["Itachi"],
      firstAppearance: "Episode 82",
    },
    {
      name: "Eight Gates",
      type: "Taijutsu",
      rank: "S",
      users: ["Might Guy", "Rock Lee"],
      firstAppearance: "Episode 50",
    },
  ],
  vv = [
    {
      arc: "Part 1",
      period: "Academy to Valley of the End",
      highlight: "Naruto and Sasuke's first final battle.",
    },
    {
      arc: "Shippuden",
      period: "Akatsuki era",
      highlight: "Pain assault, Itachi truth, Five Kage Summit.",
    },
    {
      arc: "War Arc",
      period: "Fourth Shinobi World War",
      highlight: "Ten-Tails, Madara, Kaguya, and the final reconciliation.",
    },
  ],
  cd = [
    {
      prompt:
        "Who said this quote: 'Those who abandon their friends are worse than scum.'?",
      options: ["Jiraiya", "Kakashi", "Sasuke", "Minato"],
      answer: "Kakashi",
    },
    {
      prompt: "Which jutsu belongs to Itachi?",
      options: ["Rasengan", "Flying Thunder God", "Tsukuyomi", "Eight Gates"],
      answer: "Tsukuyomi",
    },
  ];
function yv() {
  var Ct;
  const [l, s] = k.useState(""),
    [a, c] = k.useState("All"),
    [f, m] = k.useState("All"),
    [x, v] = k.useState("All"),
    [C, _] = k.useState("chakra"),
    [O, L] = k.useState([]),
    [I, G] = k.useState([]),
    [Y, b] = k.useState(""),
    [A, Z] = k.useState(""),
    [ne, ie] = k.useState(null),
    [q, se] = k.useState(null),
    [ae, re] = k.useState(null),
    [W, we] = k.useState(0),
    [Me, He] = k.useState(0),
    [_e, Ae] = k.useState(!1),
    [Pe, Oe] = k.useState(!1),
    [xe, he] = k.useState("naruto-theme"),
    j = k.useRef(null),
    X = ["All", ...new Set(jn.map((N) => N.village))],
    D = ["All", ...new Set(jn.map((N) => N.rank))],
    y = ["All", ...new Set(ud.map((N) => N.category))],
    P = Array.from({ length: 18 }, (N, Te) => Te),
    Q = [
      {
        label: "Naruto Theme",
        value: "naruto-theme",
        src: "/audio/naruto-theme.mp3",
      },
      {
        label: "Sadness and Sorrow",
        value: "sadness-and-sorrow",
        src: "/audio/sadness-and-sorrow.mp3",
      },
    ],
    J = k.useMemo(
      () =>
        jn.filter((N) => {
          const Te = N.name.toLowerCase().includes(l.toLowerCase()),
            Bt = a === "All" || N.village === a,
            Yr = f === "All" || N.rank === f;
          return Te && Bt && Yr;
        }),
      [l, a, f],
    ),
    ue = k.useMemo(
      () => ud.filter((N) => x === "All" || N.category === x),
      [x],
    ),
    fe = k.useMemo(
      () => [...jn].sort((N, Te) => Te.powerStats[C] - N.powerStats[C]),
      [C],
    ),
    oe = k.useMemo(
      () => jn.filter((N) => N.name === Y || N.name === A),
      [Y, A],
    ),
    pe = cd[W % cd.length],
    ve = (N) => {
      L((Te) => (Te.includes(N) ? Te.filter((Bt) => Bt !== N) : [...Te, N]));
    },
    Le = (N) => {
      G((Te) => (Te.includes(N) ? Te.filter((Bt) => Bt !== N) : [...Te, N]));
    },
    Et = (N) => {
      _e || (N === pe.answer && He((Te) => Te + 1), Ae(!0));
    };
  return (
    k.useEffect(() => {
      j.current && (j.current.volume = 0.35);
    }, []),
    k.useEffect(() => {
      if (!j.current) return;
      const N = j.current;
      Pe
        ? N.play().catch(() => {
            Oe(!1);
          })
        : N.pause();
    }, [Pe, xe]),
    d.jsxs("div", {
      className:
        "min-h-screen bg-gradient-to-b from-[#120909] via-[#0a0a12] to-black text-white relative overflow-hidden shippuden-theme",
      children: [
        d.jsx("audio", {
          ref: j,
          loop: !0,
          preload: "none",
          src: (Ct = Q.find((N) => N.value === xe)) == null ? void 0 : Ct.src,
        }),
        d.jsx("div", {
          className: "pointer-events-none absolute inset-0 opacity-70",
          children: P.map((N) =>
            d.jsx(
              "span",
              {
                className: "chakra-particle",
                style: {
                  left: `${(N * 17) % 100}%`,
                  animationDelay: `${(N % 7) * 0.9}s`,
                  animationDuration: `${8 + (N % 6)}s`,
                },
              },
              N,
            ),
          ),
        }),
        d.jsxs("div", {
          className:
            "fixed z-50 right-4 bottom-4 bg-black/80 border border-red-500/40 rounded-xl p-3 backdrop-blur-md shadow-xl",
          children: [
            d.jsxs("div", {
              className: "flex items-center gap-2 mb-2",
              children: [
                d.jsx(_m, { className: "w-4 h-4 text-red-400" }),
                d.jsx("p", {
                  className: "text-xs text-red-200",
                  children: "Naruto OST Mode",
                }),
              ],
            }),
            d.jsx("select", {
              value: xe,
              onChange: (N) => he(N.target.value),
              className:
                "w-full bg-black border border-red-500/30 rounded-md px-2 py-1 text-xs mb-2",
              "aria-label": "Select Naruto background track",
              children: Q.map((N) =>
                d.jsx("option", { value: N.value, children: N.label }, N.value),
              ),
            }),
            d.jsxs("button", {
              onClick: () => Oe((N) => !N),
              className:
                "w-full flex items-center justify-center gap-2 py-2 rounded-md bg-red-500/20 hover:bg-red-500/30 text-red-100 text-sm",
              "aria-pressed": Pe,
              children: [
                Pe
                  ? d.jsx(km, { className: "w-4 h-4" })
                  : d.jsx(Nm, { className: "w-4 h-4" }),
                Pe ? "Mute Shinobi Sound" : "Enable Shinobi Sound",
              ],
            }),
          ],
        }),
        d.jsx(Hm, {}),
        d.jsxs("section", {
          id: "home",
          className:
            "relative min-h-screen flex items-center justify-center overflow-hidden pt-16",
          children: [
            d.jsxs("div", {
              className: "absolute inset-0",
              children: [
                d.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-b from-red-900/50 via-black to-black",
                }),
                d.jsx("div", {
                  className: "absolute inset-0 opacity-35",
                  style: {
                    backgroundImage:
                      "url(https://static.wikia.nocookie.net/naruto/images/e/e6/Konohagakure.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                  },
                }),
              ],
            }),
            d.jsxs("div", {
              className: "relative z-10 text-center px-4 max-w-6xl mx-auto",
              children: [
                d.jsxs("div", {
                  className: "flex items-center justify-center gap-4 mb-8",
                  children: [
                    d.jsx(pl, {
                      className: "w-16 h-16 text-red-500 animate-pulse",
                    }),
                    d.jsx("h1", {
                      className:
                        "text-7xl md:text-9xl bg-gradient-to-r from-red-500 via-amber-400 to-red-500 bg-clip-text text-transparent",
                      children: "NARUTO",
                    }),
                    d.jsx(pl, {
                      className: "w-16 h-16 text-red-500 animate-pulse",
                    }),
                  ],
                }),
                d.jsx("p", {
                  className: "text-3xl md:text-4xl text-red-300 mb-8",
                  children: "The Ultimate Shinobi Universe",
                }),
                d.jsx("p", {
                  className: "text-gray-300 max-w-2xl mx-auto",
                  children:
                    "Walk through the Hidden Leaf, relive legendary battles, and hear Naruto OST while exploring.",
                }),
              ],
            }),
          ],
        }),
        d.jsx("section", {
          className: "py-10 px-4",
          children: d.jsxs("div", {
            className:
              "max-w-4xl mx-auto border border-red-500/30 rounded-2xl p-5 bg-black/60 text-center",
            children: [
              d.jsx("h3", {
                className: "text-xl text-red-300 mb-2",
                children: "Sharingan Eyes Overlay",
              }),
              d.jsxs("p", {
                className: "text-sm text-gray-300 mb-4",
                children: [
                  "Drop your original sharingan image into ",
                  d.jsx("code", {
                    children: "/public/images/sharingan-eyes.png",
                  }),
                ],
              }),
              d.jsx("img", {
                src: "/images/sharingan-eyes.png",
                alt: "Sharingan eyes overlay placeholder",
                className: "mx-auto max-h-40 object-contain",
                loading: "lazy",
                onError: (N) => {
                  N.currentTarget.style.display = "none";
                },
              }),
            ],
          }),
        }),
        d.jsx("section", {
          id: "heroes",
          className:
            "py-24 px-4 bg-gradient-to-b from-black via-slate-950 to-black",
          children: d.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              d.jsx("div", {
                className: "text-center mb-16",
                children: d.jsxs("div", {
                  className: "flex items-center justify-center gap-4 mb-6",
                  children: [
                    d.jsx(Fm, { className: "w-12 h-12 text-orange-500" }),
                    d.jsx("h2", {
                      className:
                        "text-6xl bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent",
                      children: "Legendary Heroes",
                    }),
                  ],
                }),
              }),
              d.jsxs("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: [
                  d.jsxs("div", {
                    className:
                      "lg:col-span-3 bg-slate-950/70 border border-orange-500/30 rounded-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-3",
                    children: [
                      d.jsx("input", {
                        value: l,
                        onChange: (N) => s(N.target.value),
                        placeholder: "Search hero...",
                        className:
                          "bg-black border border-orange-500/30 rounded-md px-3 py-2",
                        "aria-label": "Search heroes",
                      }),
                      d.jsx("select", {
                        value: a,
                        onChange: (N) => c(N.target.value),
                        className:
                          "bg-black border border-orange-500/30 rounded-md px-3 py-2",
                        "aria-label": "Filter heroes by village",
                        children: X.map((N) =>
                          d.jsx("option", { value: N, children: N }, N),
                        ),
                      }),
                      d.jsx("select", {
                        value: f,
                        onChange: (N) => m(N.target.value),
                        className:
                          "bg-black border border-orange-500/30 rounded-md px-3 py-2",
                        "aria-label": "Filter heroes by rank",
                        children: D.map((N) =>
                          d.jsx("option", { value: N, children: N }, N),
                        ),
                      }),
                    ],
                  }),
                  J.map((N) =>
                    d.jsx(
                      Bm,
                      {
                        ...N,
                        isFavorite: O.includes(N.name),
                        onToggleFavorite: () => ve(N.name),
                        onSelect: () => ie(N),
                      },
                      N.name,
                    ),
                  ),
                ],
              }),
            ],
          }),
        }),
        d.jsx("section", {
          id: "wars",
          className:
            "py-24 px-4 bg-gradient-to-b from-black via-red-950/20 to-black",
          children: d.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              d.jsx("div", {
                className: "text-center mb-16",
                children: d.jsxs("div", {
                  className: "flex items-center justify-center gap-4 mb-6",
                  children: [
                    d.jsx(zm, { className: "w-12 h-12 text-red-500" }),
                    d.jsx("h2", {
                      className:
                        "text-6xl bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent",
                      children: "Great Shinobi Wars",
                    }),
                  ],
                }),
              }),
              d.jsx("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: fv.map((N) =>
                  d.jsx(Km, { ...N, onSelect: () => se(N) }, N.name),
                ),
              }),
            ],
          }),
        }),
        d.jsx("section", {
          id: "missions",
          className:
            "py-24 px-4 bg-gradient-to-b from-black via-yellow-950/10 to-black",
          children: d.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              d.jsx("div", {
                className: "text-center mb-16",
                children: d.jsxs("div", {
                  className: "flex items-center justify-center gap-4 mb-6",
                  children: [
                    d.jsx(Om, { className: "w-12 h-12 text-yellow-500" }),
                    d.jsx("h2", {
                      className:
                        "text-6xl bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent",
                      children: "Iconic Missions",
                    }),
                  ],
                }),
              }),
              d.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: pv.map((N) =>
                  d.jsx(Vm, { ...N, onSelect: () => re(N) }, N.name),
                ),
              }),
            ],
          }),
        }),
        d.jsx("section", {
          id: "videos",
          className:
            "py-24 px-4 bg-gradient-to-b from-black via-orange-950/10 to-black",
          children: d.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              d.jsx("div", {
                className: "text-center mb-16",
                children: d.jsxs("div", {
                  className: "flex items-center justify-center gap-4 mb-6",
                  children: [
                    d.jsx(Im, { className: "w-12 h-12 text-orange-500" }),
                    d.jsx("h2", {
                      className:
                        "text-6xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent",
                      children: "Epic Moments",
                    }),
                  ],
                }),
              }),
              d.jsx("div", {
                className: "mb-6 max-w-sm mx-auto",
                children: d.jsx("select", {
                  value: x,
                  onChange: (N) => v(N.target.value),
                  className:
                    "w-full bg-black border border-orange-500/30 rounded-md px-3 py-2",
                  "aria-label": "Filter videos by category",
                  children: y.map((N) =>
                    d.jsx("option", { value: N, children: N }, N),
                  ),
                }),
              }),
              d.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: ue.map((N) =>
                  d.jsx(
                    $m,
                    {
                      ...N,
                      watched: I.includes(N.videoId),
                      onToggleWatched: () => Le(N.videoId),
                    },
                    N.videoId,
                  ),
                ),
              }),
            ],
          }),
        }),
        d.jsx("section", {
          id: "facts",
          className: "py-24 px-4 bg-gradient-to-b from-black to-slate-950",
          children: d.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              d.jsx("div", {
                className: "text-center mb-16",
                children: d.jsxs("div", {
                  className: "flex items-center justify-center gap-4 mb-6",
                  children: [
                    d.jsx(Tm, { className: "w-12 h-12 text-yellow-500" }),
                    d.jsx("h2", {
                      className:
                        "text-6xl bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent",
                      children: "Shinobi Knowledge",
                    }),
                  ],
                }),
              }),
              d.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: mv.map((N) =>
                  d.jsxs(
                    "div",
                    {
                      className:
                        "bg-gradient-to-br from-orange-950/30 via-black to-black p-8 rounded-2xl border-2 border-orange-500/30",
                      children: [
                        d.jsx("div", {
                          className: "text-5xl mb-4",
                          children: N.icon,
                        }),
                        d.jsx("h3", {
                          className: "text-2xl text-orange-400 mb-3",
                          children: N.title,
                        }),
                        d.jsx("p", {
                          className: "text-gray-300",
                          children: N.description,
                        }),
                      ],
                    },
                    N.title,
                  ),
                ),
              }),
            ],
          }),
        }),
        d.jsx("section", {
          className: "py-24 px-4 bg-gradient-to-b from-slate-950 to-black",
          children: d.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              d.jsx("h2", {
                className: "text-4xl text-orange-400 mb-6",
                children: "Power Ranking Board",
              }),
              d.jsx("div", {
                className: "mb-6 max-w-xs",
                children: d.jsxs("select", {
                  value: C,
                  onChange: (N) => _(N.target.value),
                  className:
                    "w-full bg-black border border-orange-500/30 rounded-md px-3 py-2",
                  children: [
                    d.jsx("option", { value: "speed", children: "Speed" }),
                    d.jsx("option", { value: "iq", children: "IQ" }),
                    d.jsx("option", { value: "chakra", children: "Chakra" }),
                    d.jsx("option", {
                      value: "taijutsu",
                      children: "Taijutsu",
                    }),
                  ],
                }),
              }),
              d.jsx("div", {
                className: "grid gap-3",
                children: fe.map((N, Te) =>
                  d.jsxs(
                    "div",
                    {
                      className:
                        "border border-orange-500/30 rounded-lg p-4 flex items-center justify-between bg-black/70 hover:border-orange-500 transition-colors",
                      children: [
                        d.jsxs("p", { children: [Te + 1, ". ", N.name] }),
                        d.jsxs("p", {
                          className: "text-orange-300",
                          children: [
                            C.toUpperCase(),
                            ": ",
                            N.powerStats[C],
                            "/10",
                          ],
                        }),
                      ],
                    },
                    N.name,
                  ),
                ),
              }),
            ],
          }),
        }),
        d.jsx("section", {
          className: "py-24 px-4 bg-gradient-to-b from-black to-slate-950",
          children: d.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              d.jsx("h2", {
                className: "text-4xl text-yellow-400 mb-8",
                children: "Arc Timeline",
              }),
              d.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                children: vv.map((N) =>
                  d.jsxs(
                    "div",
                    {
                      className:
                        "border border-yellow-500/30 rounded-xl p-5 bg-black/70",
                      children: [
                        d.jsx("h3", {
                          className: "text-xl text-yellow-300 mb-1",
                          children: N.arc,
                        }),
                        d.jsx("p", {
                          className: "text-gray-400 text-sm mb-3",
                          children: N.period,
                        }),
                        d.jsx("p", {
                          className: "text-gray-300",
                          children: N.highlight,
                        }),
                      ],
                    },
                    N.arc,
                  ),
                ),
              }),
            ],
          }),
        }),
        d.jsx("section", {
          className: "py-24 px-4 bg-gradient-to-b from-slate-950 to-black",
          children: d.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              d.jsx("h2", {
                className: "text-4xl text-red-400 mb-8",
                children: "Clan Pages",
              }),
              d.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-5",
                children: hv.map((N) =>
                  d.jsxs(
                    "div",
                    {
                      className:
                        "border border-red-500/30 rounded-xl p-6 bg-black/70",
                      children: [
                        d.jsx("h3", {
                          className: "text-2xl text-red-300 mb-2",
                          children: N.name,
                        }),
                        d.jsxs("p", {
                          className: "text-gray-400 mb-2",
                          children: ["Kekkei Genkai: ", N.kekkeiGenkai],
                        }),
                        d.jsxs("p", {
                          className: "text-gray-400 mb-3",
                          children: ["Specialty: ", N.specialty],
                        }),
                        d.jsx("p", {
                          className: "text-white text-sm",
                          children: N.members.join(" • "),
                        }),
                      ],
                    },
                    N.name,
                  ),
                ),
              }),
            ],
          }),
        }),
        d.jsx("section", {
          className: "py-24 px-4 bg-gradient-to-b from-black to-slate-950",
          children: d.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              d.jsx("h2", {
                className: "text-4xl text-cyan-400 mb-8",
                children: "Jutsu Encyclopedia",
              }),
              d.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: gv.map((N) =>
                  d.jsxs(
                    "div",
                    {
                      className:
                        "border border-cyan-500/30 rounded-xl p-5 bg-black/70",
                      children: [
                        d.jsx("h3", {
                          className: "text-xl text-cyan-300 mb-2",
                          children: N.name,
                        }),
                        d.jsxs("p", {
                          className: "text-gray-300 text-sm",
                          children: ["Type: ", N.type, " • Rank: ", N.rank],
                        }),
                        d.jsxs("p", {
                          className: "text-gray-300 text-sm mt-2",
                          children: ["Users: ", N.users.join(", ")],
                        }),
                        d.jsxs("p", {
                          className: "text-gray-500 text-sm mt-2",
                          children: ["First appearance: ", N.firstAppearance],
                        }),
                      ],
                    },
                    N.name,
                  ),
                ),
              }),
            ],
          }),
        }),
        d.jsx("section", {
          className: "py-24 px-4 bg-gradient-to-b from-slate-950 to-black",
          children: d.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              d.jsx("h2", {
                className: "text-4xl text-green-400 mb-6",
                children: "Compare Two Characters",
              }),
              d.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-3 mb-6",
                children: [
                  d.jsxs("select", {
                    value: Y,
                    onChange: (N) => b(N.target.value),
                    className:
                      "bg-black border border-green-500/30 rounded-md px-3 py-2",
                    children: [
                      d.jsx("option", {
                        value: "",
                        children: "Select first hero",
                      }),
                      jn.map((N) =>
                        d.jsx(
                          "option",
                          { value: N.name, children: N.name },
                          N.name,
                        ),
                      ),
                    ],
                  }),
                  d.jsxs("select", {
                    value: A,
                    onChange: (N) => Z(N.target.value),
                    className:
                      "bg-black border border-green-500/30 rounded-md px-3 py-2",
                    children: [
                      d.jsx("option", {
                        value: "",
                        children: "Select second hero",
                      }),
                      jn.map((N) =>
                        d.jsx(
                          "option",
                          { value: N.name, children: N.name },
                          N.name,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              d.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                children: oe.map((N) =>
                  d.jsxs(
                    "div",
                    {
                      className:
                        "border border-green-500/30 rounded-xl p-5 bg-black/70",
                      children: [
                        d.jsx("h3", {
                          className: "text-xl text-green-300 mb-2",
                          children: N.name,
                        }),
                        d.jsxs("p", {
                          className: "text-sm text-gray-300",
                          children: ["Speed: ", N.powerStats.speed],
                        }),
                        d.jsxs("p", {
                          className: "text-sm text-gray-300",
                          children: ["IQ: ", N.powerStats.iq],
                        }),
                        d.jsxs("p", {
                          className: "text-sm text-gray-300",
                          children: ["Chakra: ", N.powerStats.chakra],
                        }),
                        d.jsxs("p", {
                          className: "text-sm text-gray-300",
                          children: ["Taijutsu: ", N.powerStats.taijutsu],
                        }),
                      ],
                    },
                    N.name,
                  ),
                ),
              }),
            ],
          }),
        }),
        d.jsx("section", {
          className: "py-24 px-4 bg-gradient-to-b from-black to-slate-950",
          children: d.jsxs("div", {
            className:
              "max-w-4xl mx-auto border border-purple-500/30 rounded-2xl p-8 bg-black/70",
            children: [
              d.jsx("h2", {
                className: "text-4xl text-purple-400 mb-3",
                children: "Quiz Mode",
              }),
              d.jsxs("p", {
                className: "text-gray-400 mb-6",
                children: ["Score: ", Me],
              }),
              d.jsx("p", { className: "text-xl mb-5", children: pe.prompt }),
              d.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                children: pe.options.map((N) =>
                  d.jsx(
                    "button",
                    {
                      onClick: () => Et(N),
                      className:
                        "px-4 py-3 rounded-lg border border-purple-500/30 hover:bg-purple-500/20 text-left",
                      children: N,
                    },
                    N,
                  ),
                ),
              }),
              _e &&
                d.jsx("button", {
                  onClick: () => {
                    (we((N) => N + 1), Ae(!1));
                  },
                  className:
                    "mt-6 px-5 py-3 rounded-lg bg-purple-500/20 hover:bg-purple-500/30",
                  children: "Next Question",
                }),
            ],
          }),
        }),
        d.jsx("footer", {
          className: "py-16 px-4 border-t border-orange-500/20 bg-black",
          children: d.jsxs("div", {
            className: "max-w-7xl mx-auto text-center",
            children: [
              d.jsxs("div", {
                className: "flex items-center justify-center gap-3 mb-6",
                children: [
                  d.jsx(pl, { className: "w-8 h-8 text-orange-500" }),
                  d.jsx("span", {
                    className:
                      "text-2xl bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent",
                    children: "NARUTO UNIVERSE",
                  }),
                ],
              }),
              d.jsx("p", {
                className: "text-gray-600 mt-2",
                children:
                  "Naruto Fan Website • 2026 • The Will of Fire Burns On",
              }),
            ],
          }),
        }),
        d.jsx(_a, {
          open: !!ne,
          onOpenChange: (N) => !N && ie(null),
          children: d.jsxs(Pa, {
            className: "max-w-3xl bg-slate-950 text-white border-orange-500/30",
            children: [
              d.jsx(Ta, {
                children: d.jsx(Ra, {
                  className: "text-2xl text-orange-400",
                  children: ne == null ? void 0 : ne.name,
                }),
              }),
              ne &&
                d.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    d.jsx("p", {
                      className: "text-gray-300",
                      children: ne.bio,
                    }),
                    d.jsxs("p", {
                      className: "text-gray-400",
                      children: ["Arc: ", ne.arc, " • Clan: ", ne.clan],
                    }),
                    d.jsxs("p", {
                      className: "text-yellow-300 italic",
                      children: ['"', ne.quote, '"'],
                    }),
                    d.jsxs("p", {
                      className: "text-gray-300",
                      children: [
                        "Relationships: ",
                        ne.relationships.join(" • "),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        }),
        d.jsx(_a, {
          open: !!q,
          onOpenChange: (N) => !N && se(null),
          children: d.jsxs(Pa, {
            className: "max-w-3xl bg-slate-950 text-white border-red-500/30",
            children: [
              d.jsx(Ta, {
                children: d.jsx(Ra, {
                  className: "text-2xl text-red-400",
                  children: q == null ? void 0 : q.name,
                }),
              }),
              q &&
                d.jsx("ul", {
                  className: "space-y-2 text-gray-300",
                  children: q.timeline.map((N) =>
                    d.jsxs("li", { children: ["• ", N] }, N),
                  ),
                }),
            ],
          }),
        }),
        d.jsx(_a, {
          open: !!ae,
          onOpenChange: (N) => !N && re(null),
          children: d.jsxs(Pa, {
            className: "max-w-3xl bg-slate-950 text-white border-yellow-500/30",
            children: [
              d.jsx(Ta, {
                children: d.jsx(Ra, {
                  className: "text-2xl text-yellow-400",
                  children: ae == null ? void 0 : ae.name,
                }),
              }),
              ae &&
                d.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    d.jsxs("p", {
                      className: "text-gray-300",
                      children: ["Objective: ", ae.objective],
                    }),
                    d.jsxs("p", {
                      className: "text-gray-300",
                      children: ["Outcome: ", ae.outcome],
                    }),
                    d.jsxs("p", {
                      className: "text-yellow-200 italic",
                      children: ['"', ae.quote, '"'],
                    }),
                  ],
                }),
            ],
          }),
        }),
      ],
    })
  );
}
const of = document.getElementById("root");
if (!of) throw new Error("Root element with id 'root' was not found.");
dm.createRoot(of).render(d.jsx(fd.StrictMode, { children: d.jsx(yv, {}) }));
