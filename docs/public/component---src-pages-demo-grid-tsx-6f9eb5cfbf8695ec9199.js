(self.webpackChunkgatsby_starter_blog =
  self.webpackChunkgatsby_starter_blog || []).push([
  [156],
  {
    7757: function (t, e, n) {
      t.exports = n(5666);
    },
    5536: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, {
          default: function () {
            return Gr;
          },
        });
      var r = n(7294),
        i = n(7970),
        o = n(3366),
        a = n(7715),
        u = n.n(a),
        s = n(3921),
        c = function (t) {
          return Array.isArray(t) ? t : [t];
        },
        l = n(460),
        f = n(644),
        d = n.n(f),
        h = n(8581),
        v = n.n(h),
        p = n(885),
        m = n(3144),
        y = n(5671),
        g = n(136),
        b = n(2963),
        w = n(1120),
        k = n(7326),
        _ = n(2982),
        x = n(8052),
        E = n(9611);
      function P() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function Z(t, e, n) {
        return (
          (Z = P()
            ? Reflect.construct
            : function (t, e, n) {
                var r = [null];
                r.push.apply(r, e);
                var i = new (Function.bind.apply(t, r))();
                return n && (0, E.Z)(i, n.prototype), i;
              }),
          Z.apply(null, arguments)
        );
      }
      function S(t) {
        var e = 'function' == typeof Map ? new Map() : void 0;
        return (
          (S = function (t) {
            if (
              null === t ||
              ((n = t),
              -1 === Function.toString.call(n).indexOf('[native code]'))
            )
              return t;
            var n;
            if ('function' != typeof t)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, r);
            }
            function r() {
              return Z(t, arguments, (0, w.Z)(this).constructor);
            }
            return (
              (r.prototype = Object.create(t.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              (0, E.Z)(r, t)
            );
          }),
          S(t)
        );
      }
      function A(t, e, n, r, i, o, a) {
        try {
          var u = t[o](a),
            s = u.value;
        } catch (c) {
          return void n(c);
        }
        u.done ? e(s) : Promise.resolve(s).then(r, i);
      }
      function O(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              A(o, r, i, a, u, 'next', t);
            }
            function u(t) {
              A(o, r, i, a, u, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      var R = n(7757),
        C = n.n(R),
        j = W(),
        N = function (t) {
          return D(t, j);
        },
        I = W();
      N.write = function (t) {
        return D(t, I);
      };
      var V = W();
      N.onStart = function (t) {
        return D(t, V);
      };
      var T = W();
      N.onFrame = function (t) {
        return D(t, T);
      };
      var L = W();
      N.onFinish = function (t) {
        return D(t, L);
      };
      var M = [];
      N.setTimeout = function (t, e) {
        var n = N.now() + e,
          r = {
            time: n,
            handler: t,
            cancel: function t() {
              var e = M.findIndex(function (e) {
                return e.cancel == t;
              });
              ~e && M.splice(e, 1), (Y.count -= ~e ? 1 : 0);
            },
          };
        return M.splice(q(n), 0, r), (Y.count += 1), Q(), r;
      };
      var q = function (t) {
        return ~(
          ~M.findIndex(function (e) {
            return e.time > t;
          }) || ~M.length
        );
      };
      (N.cancel = function (t) {
        j.delete(t), I.delete(t);
      }),
        (N.sync = function (t) {
          (U = !0), N.batchedUpdates(t), (U = !1);
        }),
        (N.throttle = function (t) {
          var e;
          function n() {
            try {
              t.apply(void 0, (0, _.Z)(e));
            } finally {
              e = null;
            }
          }
          function r() {
            for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
              r[i] = arguments[i];
            (e = r), N.onStart(n);
          }
          return (
            (r.handler = t),
            (r.cancel = function () {
              V.delete(n), (e = null);
            }),
            r
          );
        });
      var F =
        'undefined' != typeof window
          ? window.requestAnimationFrame
          : function () {};
      (N.use = function (t) {
        return (F = t);
      }),
        (N.now =
          'undefined' != typeof performance
            ? function () {
                return performance.now();
              }
            : Date.now),
        (N.batchedUpdates = function (t) {
          return t();
        }),
        (N.catch = console.error),
        (N.frameLoop = 'always'),
        (N.advance = function () {
          'demand' !== N.frameLoop
            ? console.warn(
                'Cannot call the manual advancement of rafz whilst frameLoop is not set as demand',
              )
            : B();
        });
      var z = -1,
        U = !1;
      function D(t, e) {
        U ? (e.delete(t), t(0)) : (e.add(t), Q());
      }
      function Q() {
        z < 0 && ((z = 0), 'demand' !== N.frameLoop && F(G));
      }
      function G() {
        ~z && (F(G), N.batchedUpdates(B));
      }
      function B() {
        var t = z;
        z = N.now();
        var e = q(z);
        e &&
          ($(M.splice(0, e), function (t) {
            return t.handler();
          }),
          (Y.count -= e)),
          V.flush(),
          j.flush(t ? Math.min(64, z - t) : 16.667),
          T.flush(),
          I.flush(),
          L.flush();
      }
      function W() {
        var t = new Set(),
          e = t;
        return {
          add: function (n) {
            (Y.count += e != t || t.has(n) ? 0 : 1), t.add(n);
          },
          delete: function (n) {
            return (Y.count -= e == t && t.has(n) ? 1 : 0), t.delete(n);
          },
          flush: function (n) {
            e.size &&
              ((t = new Set()),
              (Y.count -= e.size),
              $(e, function (e) {
                return e(n) && t.add(e);
              }),
              (Y.count += t.size),
              (e = t));
          },
        };
      }
      function $(t, e) {
        t.forEach(function (t) {
          try {
            e(t);
          } catch (n) {
            N.catch(n);
          }
        });
      }
      var Y = {
        count: 0,
        clear: function () {
          (z = -1),
            (M = []),
            (V = W()),
            (j = W()),
            (T = W()),
            (I = W()),
            (L = W()),
            (Y.count = 0);
        },
      };
      function H() {}
      var J = {
        arr: Array.isArray,
        obj: function (t) {
          return !!t && 'Object' === t.constructor.name;
        },
        fun: function (t) {
          return 'function' == typeof t;
        },
        str: function (t) {
          return 'string' == typeof t;
        },
        num: function (t) {
          return 'number' == typeof t;
        },
        und: function (t) {
          return void 0 === t;
        },
      };
      function X(t, e) {
        if (J.arr(t)) {
          if (!J.arr(e) || t.length !== e.length) return !1;
          for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
          return !0;
        }
        return t === e;
      }
      var K = function (t, e) {
        return t.forEach(e);
      };
      function tt(t, e, n) {
        if (J.arr(t))
          for (var r = 0; r < t.length; r++) e.call(n, t[r], ''.concat(r));
        else for (var i in t) t.hasOwnProperty(i) && e.call(n, t[i], i);
      }
      var et = function (t) {
        return J.und(t) ? [] : J.arr(t) ? t : [t];
      };
      function nt(t, e) {
        if (t.size) {
          var n = Array.from(t);
          t.clear(), K(n, e);
        }
      }
      var rt,
        it,
        ot = function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          return nt(t, function (t) {
            return t.apply(void 0, n);
          });
        },
        at = null,
        ut = !1,
        st = H,
        ct = Object.freeze({
          __proto__: null,
          get createStringInterpolator() {
            return rt;
          },
          get to() {
            return it;
          },
          get colors() {
            return at;
          },
          get skipAnimation() {
            return ut;
          },
          get willAdvance() {
            return st;
          },
          assign: function (t) {
            t.to && (it = t.to),
              t.now && (N.now = t.now),
              void 0 !== t.colors && (at = t.colors),
              null != t.skipAnimation && (ut = t.skipAnimation),
              t.createStringInterpolator && (rt = t.createStringInterpolator),
              t.requestAnimationFrame && N.use(t.requestAnimationFrame),
              t.batchedUpdates && (N.batchedUpdates = t.batchedUpdates),
              t.willAdvance && (st = t.willAdvance),
              t.frameLoop && (N.frameLoop = t.frameLoop);
          },
        }),
        lt = new Set(),
        ft = [],
        dt = [],
        ht = 0,
        vt = {
          get idle() {
            return !lt.size && !ft.length;
          },
          start: function (t) {
            ht > t.priority ? (lt.add(t), N.onStart(pt)) : (mt(t), N(gt));
          },
          advance: gt,
          sort: function (t) {
            if (ht)
              N.onFrame(function () {
                return vt.sort(t);
              });
            else {
              var e = ft.indexOf(t);
              ~e && (ft.splice(e, 1), yt(t));
            }
          },
          clear: function () {
            (ft = []), lt.clear();
          },
        };
      function pt() {
        lt.forEach(mt), lt.clear(), N(gt);
      }
      function mt(t) {
        ft.includes(t) || yt(t);
      }
      function yt(t) {
        var e, n, r;
        ft.splice(
          ((n = function (e) {
            return e.priority > t.priority;
          }),
          (r = (e = ft).findIndex(n)) < 0 ? e.length : r),
          0,
          t,
        );
      }
      function gt(t) {
        for (var e = dt, n = 0; n < ft.length; n++) {
          var r = ft[n];
          (ht = r.priority),
            r.idle || (st(r), r.advance(t), r.idle || e.push(r));
        }
        return (ht = 0), ((dt = ft).length = 0), (ft = e).length > 0;
      }
      var bt = '[-+]?\\d*\\.?\\d+',
        wt = bt + '%';
      function kt() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
      }
      var _t = new RegExp('rgb' + kt(bt, bt, bt)),
        xt = new RegExp('rgba' + kt(bt, bt, bt, bt)),
        Et = new RegExp('hsl' + kt(bt, wt, wt)),
        Pt = new RegExp('hsla' + kt(bt, wt, wt, bt)),
        Zt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        St =
          /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        At = /^#([0-9a-fA-F]{6})$/,
        Ot = /^#([0-9a-fA-F]{8})$/;
      function Rt(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
        );
      }
      function Ct(t, e, n) {
        var r = n < 0.5 ? n * (1 + e) : n + e - n * e,
          i = 2 * n - r,
          o = Rt(i, r, t + 1 / 3),
          a = Rt(i, r, t),
          u = Rt(i, r, t - 1 / 3);
        return (
          (Math.round(255 * o) << 24) |
          (Math.round(255 * a) << 16) |
          (Math.round(255 * u) << 8)
        );
      }
      function jt(t) {
        var e = parseInt(t, 10);
        return e < 0 ? 0 : e > 255 ? 255 : e;
      }
      function Nt(t) {
        return (((parseFloat(t) % 360) + 360) % 360) / 360;
      }
      function It(t) {
        var e = parseFloat(t);
        return e < 0 ? 0 : e > 1 ? 255 : Math.round(255 * e);
      }
      function Vt(t) {
        var e = parseFloat(t);
        return e < 0 ? 0 : e > 100 ? 1 : e / 100;
      }
      function Tt(t) {
        var e,
          n,
          r =
            'number' == typeof (e = t)
              ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
              : (n = At.exec(e))
              ? parseInt(n[1] + 'ff', 16) >>> 0
              : at && void 0 !== at[e]
              ? at[e]
              : (n = _t.exec(e))
              ? ((jt(n[1]) << 24) |
                  (jt(n[2]) << 16) |
                  (jt(n[3]) << 8) |
                  255) >>>
                0
              : (n = xt.exec(e))
              ? ((jt(n[1]) << 24) |
                  (jt(n[2]) << 16) |
                  (jt(n[3]) << 8) |
                  It(n[4])) >>>
                0
              : (n = Zt.exec(e))
              ? parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + 'ff', 16) >>>
                0
              : (n = Ot.exec(e))
              ? parseInt(n[1], 16) >>> 0
              : (n = St.exec(e))
              ? parseInt(
                  n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + n[4] + n[4],
                  16,
                ) >>> 0
              : (n = Et.exec(e))
              ? (255 | Ct(Nt(n[1]), Vt(n[2]), Vt(n[3]))) >>> 0
              : (n = Pt.exec(e))
              ? (Ct(Nt(n[1]), Vt(n[2]), Vt(n[3])) | It(n[4])) >>> 0
              : null;
        if (null === r) return t;
        var i = (16711680 & (r = r || 0)) >>> 16,
          o = (65280 & r) >>> 8,
          a = (255 & r) / 255;
        return 'rgba('
          .concat((4278190080 & r) >>> 24, ', ')
          .concat(i, ', ')
          .concat(o, ', ')
          .concat(a, ')');
      }
      var Lt = function t(e, n, r) {
        if (J.fun(e)) return e;
        if (J.arr(e)) return t({ range: e, output: n, extrapolate: r });
        if (J.str(e.output[0])) return rt(e);
        var i = e,
          o = i.output,
          a = i.range || [0, 1],
          u = i.extrapolateLeft || i.extrapolate || 'extend',
          s = i.extrapolateRight || i.extrapolate || 'extend',
          c =
            i.easing ||
            function (t) {
              return t;
            };
        return function (t) {
          var e = (function (t, e) {
            for (var n = 1; n < e.length - 1 && !(e[n] >= t); ++n);
            return n - 1;
          })(t, a);
          return (function (t, e, n, r, i, o, a, u, s) {
            var c = s ? s(t) : t;
            if (c < e) {
              if ('identity' === a) return c;
              'clamp' === a && (c = e);
            }
            if (c > n) {
              if ('identity' === u) return c;
              'clamp' === u && (c = n);
            }
            if (r === i) return r;
            if (e === n) return t <= e ? r : i;
            e === -1 / 0
              ? (c = -c)
              : n === 1 / 0
              ? (c -= e)
              : (c = (c - e) / (n - e));
            (c = o(c)),
              r === -1 / 0
                ? (c = -c)
                : i === 1 / 0
                ? (c += r)
                : (c = c * (i - r) + r);
            return c;
          })(t, a[e], a[e + 1], o[e], o[e + 1], c, u, s, i.map);
        };
      };
      function Mt() {
        return (
          (Mt =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          Mt.apply(this, arguments)
        );
      }
      var qt = Symbol.for('FluidValue.get'),
        Ft = Symbol.for('FluidValue.observers'),
        zt = function (t) {
          return Boolean(t && t[qt]);
        },
        Ut = function (t) {
          return t && t[qt] ? t[qt]() : t;
        },
        Dt = function (t) {
          return t[Ft] || null;
        };
      function Qt(t, e) {
        var n = t[Ft];
        n &&
          n.forEach(function (t) {
            !(function (t, e) {
              t.eventObserved ? t.eventObserved(e) : t(e);
            })(t, e);
          });
      }
      var Gt = (0, m.Z)(function t(e) {
          if (
            ((0, y.Z)(this, t),
            (this[qt] = void 0),
            (this[Ft] = void 0),
            !e && !(e = this.get))
          )
            throw Error('Unknown getter');
          Bt(this, e);
        }),
        Bt = function (t, e) {
          return Ht(t, qt, e);
        };
      function Wt(t, e) {
        if (t[qt]) {
          var n = t[Ft];
          n || Ht(t, Ft, (n = new Set())),
            n.has(e) ||
              (n.add(e), t.observerAdded && t.observerAdded(n.size, e));
        }
        return e;
      }
      function $t(t, e) {
        var n = t[Ft];
        if (n && n.has(e)) {
          var r = n.size - 1;
          r ? n.delete(e) : (t[Ft] = null),
            t.observerRemoved && t.observerRemoved(r, e);
        }
      }
      var Yt,
        Ht = function (t, e, n) {
          return Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0,
          });
        },
        Jt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Xt =
          /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Kt = new RegExp('('.concat(Jt.source, ')(%|[a-z]+)'), 'i'),
        te = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        ee = function (t, e, n, r, i) {
          return 'rgba('
            .concat(Math.round(e), ', ')
            .concat(Math.round(n), ', ')
            .concat(Math.round(r), ', ')
            .concat(i, ')');
        },
        ne = function (t) {
          Yt ||
            (Yt = at
              ? new RegExp(
                  '('.concat(Object.keys(at).join('|'), ')(?!\\w)'),
                  'g',
                )
              : /^\b$/);
          var e = t.output.map(function (t) {
              return Ut(t).replace(Xt, Tt).replace(Yt, Tt);
            }),
            n = e.map(function (t) {
              return t.match(Jt).map(Number);
            }),
            r = n[0]
              .map(function (t, e) {
                return n.map(function (t) {
                  if (!(e in t))
                    throw Error(
                      'The arity of each "output" value must be equal',
                    );
                  return t[e];
                });
              })
              .map(function (e) {
                return Lt(Mt({}, t, { output: e }));
              });
          return function (t) {
            var n,
              i =
                !Kt.test(e[0]) &&
                (null ==
                (n = e.find(function (t) {
                  return Kt.test(t);
                }))
                  ? void 0
                  : n.replace(Jt, '')),
              o = 0;
            return e[0]
              .replace(Jt, function () {
                return ''.concat(r[o++](t)).concat(i || '');
              })
              .replace(te, ee);
          };
        },
        re = 'react-spring: ',
        ie = function (t) {
          var e = t,
            n = !1;
          if ('function' != typeof e)
            throw new TypeError(
              ''.concat(re, 'once requires a function parameter'),
            );
          return function () {
            n || (e.apply(void 0, arguments), (n = !0));
          };
        },
        oe = ie(console.warn);
      function ae() {
        oe(
          ''.concat(
            re,
            'The "interpolate" function is deprecated in v9 (use "to" instead)',
          ),
        );
      }
      var ue = ie(console.warn);
      function se(t) {
        return J.str(t) && ('#' == t[0] || /\d/.test(t) || t in (at || {}));
      }
      var ce = function (t) {
          return (0, r.useEffect)(t, le);
        },
        le = [];
      function fe() {
        var t = (0, r.useState)()[1],
          e = (0, r.useState)(de)[0];
        return (
          ce(e.unmount),
          function () {
            e.current && t({});
          }
        );
      }
      function de() {
        var t = {
          current: !0,
          unmount: function () {
            return function () {
              t.current = !1;
            };
          },
        };
        return t;
      }
      function he(t) {
        var e = (0, r.useRef)();
        return (
          (0, r.useEffect)(function () {
            e.current = t;
          }),
          e.current
        );
      }
      var ve =
        'undefined' != typeof window &&
        window.document &&
        window.document.createElement
          ? r.useLayoutEffect
          : r.useEffect;
      function pe(t) {
        var e = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, w.Z)(t);
          if (e) {
            var i = (0, w.Z)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (0, b.Z)(this, n);
        };
      }
      var me = Symbol.for('Animated:node'),
        ye = function (t) {
          return t && t[me];
        },
        ge = function (t, e) {
          return (
            (n = t),
            (r = me),
            (i = e),
            Object.defineProperty(n, r, {
              value: i,
              writable: !0,
              configurable: !0,
            })
          );
          var n, r, i;
        },
        be = function (t) {
          return t && t[me] && t[me].getPayload();
        },
        we = (function () {
          function t() {
            (0, y.Z)(this, t), (this.payload = void 0), ge(this, this);
          }
          return (
            (0, m.Z)(t, [
              {
                key: 'getPayload',
                value: function () {
                  return this.payload || [];
                },
              },
            ]),
            t
          );
        })(),
        ke = (function (t) {
          (0, g.Z)(n, t);
          var e = pe(n);
          function n(t) {
            var r;
            return (
              (0, y.Z)(this, n),
              ((r = e.call(this)).done = !0),
              (r.elapsedTime = void 0),
              (r.lastPosition = void 0),
              (r.lastVelocity = void 0),
              (r.v0 = void 0),
              (r.durationProgress = 0),
              (r._value = t),
              J.num(r._value) && (r.lastPosition = r._value),
              r
            );
          }
          return (
            (0, m.Z)(
              n,
              [
                {
                  key: 'getPayload',
                  value: function () {
                    return [this];
                  },
                },
                {
                  key: 'getValue',
                  value: function () {
                    return this._value;
                  },
                },
                {
                  key: 'setValue',
                  value: function (t, e) {
                    return (
                      J.num(t) &&
                        ((this.lastPosition = t),
                        e &&
                          ((t = Math.round(t / e) * e),
                          this.done && (this.lastPosition = t))),
                      this._value !== t && ((this._value = t), !0)
                    );
                  },
                },
                {
                  key: 'reset',
                  value: function () {
                    var t = this.done;
                    (this.done = !1),
                      J.num(this._value) &&
                        ((this.elapsedTime = 0),
                        (this.durationProgress = 0),
                        (this.lastPosition = this._value),
                        t && (this.lastVelocity = null),
                        (this.v0 = null));
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function (t) {
                    return new n(t);
                  },
                },
              ],
            ),
            n
          );
        })(we),
        _e = (function (t) {
          (0, g.Z)(n, t);
          var e = pe(n);
          function n(t) {
            var r;
            return (
              (0, y.Z)(this, n),
              ((r = e.call(this, 0))._string = null),
              (r._toString = void 0),
              (r._toString = Lt({ output: [t, t] })),
              r
            );
          }
          return (
            (0, m.Z)(
              n,
              [
                {
                  key: 'getValue',
                  value: function () {
                    var t = this._string;
                    return null == t
                      ? (this._string = this._toString(this._value))
                      : t;
                  },
                },
                {
                  key: 'setValue',
                  value: function (t) {
                    if (J.str(t)) {
                      if (t == this._string) return !1;
                      (this._string = t), (this._value = 1);
                    } else {
                      if (
                        !(0, x.Z)((0, w.Z)(n.prototype), 'setValue', this).call(
                          this,
                          t,
                        )
                      )
                        return !1;
                      this._string = null;
                    }
                    return !0;
                  },
                },
                {
                  key: 'reset',
                  value: function (t) {
                    t &&
                      (this._toString = Lt({ output: [this.getValue(), t] })),
                      (this._value = 0),
                      (0, x.Z)((0, w.Z)(n.prototype), 'reset', this).call(this);
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function (t) {
                    return new n(t);
                  },
                },
              ],
            ),
            n
          );
        })(ke),
        xe = { dependencies: null },
        Ee = (function (t) {
          (0, g.Z)(n, t);
          var e = pe(n);
          function n(t) {
            var r;
            return (
              (0, y.Z)(this, n),
              ((r = e.call(this)).source = t),
              r.setValue(t),
              r
            );
          }
          return (
            (0, m.Z)(n, [
              {
                key: 'getValue',
                value: function (t) {
                  var e = {};
                  return (
                    tt(this.source, function (n, r) {
                      var i;
                      (i = n) && i[me] === i
                        ? (e[r] = n.getValue(t))
                        : zt(n)
                        ? (e[r] = Ut(n))
                        : t || (e[r] = n);
                    }),
                    e
                  );
                },
              },
              {
                key: 'setValue',
                value: function (t) {
                  (this.source = t), (this.payload = this._makePayload(t));
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.payload &&
                    K(this.payload, function (t) {
                      return t.reset();
                    });
                },
              },
              {
                key: '_makePayload',
                value: function (t) {
                  if (t) {
                    var e = new Set();
                    return tt(t, this._addToPayload, e), Array.from(e);
                  }
                },
              },
              {
                key: '_addToPayload',
                value: function (t) {
                  var e = this;
                  xe.dependencies && zt(t) && xe.dependencies.add(t);
                  var n = be(t);
                  n &&
                    K(n, function (t) {
                      return e.add(t);
                    });
                },
              },
            ]),
            n
          );
        })(we),
        Pe = (function (t) {
          (0, g.Z)(n, t);
          var e = pe(n);
          function n(t) {
            return (0, y.Z)(this, n), e.call(this, t);
          }
          return (
            (0, m.Z)(
              n,
              [
                {
                  key: 'getValue',
                  value: function () {
                    return this.source.map(function (t) {
                      return t.getValue();
                    });
                  },
                },
                {
                  key: 'setValue',
                  value: function (t) {
                    var e = this.getPayload();
                    return t.length == e.length
                      ? e
                          .map(function (e, n) {
                            return e.setValue(t[n]);
                          })
                          .some(Boolean)
                      : ((0, x.Z)((0, w.Z)(n.prototype), 'setValue', this).call(
                          this,
                          t.map(Ze),
                        ),
                        !0);
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function (t) {
                    return new n(t);
                  },
                },
              ],
            ),
            n
          );
        })(Ee);
      function Ze(t) {
        return (se(t) ? _e : ke).create(t);
      }
      function Se(t) {
        var e = ye(t);
        return e ? e.constructor : J.arr(t) ? Pe : se(t) ? _e : ke;
      }
      function Ae() {
        return (
          (Ae =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          Ae.apply(this, arguments)
        );
      }
      var Oe = function (t, e) {
          var n = !J.fun(t) || (t.prototype && t.prototype.isReactComponent);
          return (0, r.forwardRef)(function (i, o) {
            var a = (0, r.useRef)(null),
              u =
                n &&
                (0, r.useCallback)(
                  function (t) {
                    a.current = (function (t, e) {
                      t && (J.fun(t) ? t(e) : (t.current = e));
                      return e;
                    })(o, t);
                  },
                  [o],
                ),
              s = (function (t, e) {
                var n = new Set();
                (xe.dependencies = n),
                  t.style &&
                    (t = Ae({}, t, { style: e.createAnimatedStyle(t.style) }));
                return (t = new Ee(t)), (xe.dependencies = null), [t, n];
              })(i, e),
              c = (0, p.Z)(s, 2),
              l = c[0],
              f = c[1],
              d = fe(),
              h = function () {
                var t = a.current;
                (n && !t) ||
                  (!1 === (!!t && e.applyAnimatedValues(t, l.getValue(!0))) &&
                    d());
              },
              v = new Re(h, f),
              m = (0, r.useRef)();
            ve(function () {
              var t = m.current;
              (m.current = v),
                K(f, function (t) {
                  return Wt(t, v);
                }),
                t &&
                  (K(t.deps, function (e) {
                    return $t(e, t);
                  }),
                  N.cancel(t.update));
            }),
              (0, r.useEffect)(h, []),
              ce(function () {
                return function () {
                  var t = m.current;
                  K(t.deps, function (e) {
                    return $t(e, t);
                  });
                };
              });
            var y = e.getComponentProps(l.getValue());
            return r.createElement(t, Ae({}, y, { ref: u }));
          });
        },
        Re = (function () {
          function t(e, n) {
            (0, y.Z)(this, t), (this.update = e), (this.deps = n);
          }
          return (
            (0, m.Z)(t, [
              {
                key: 'eventObserved',
                value: function (t) {
                  'change' == t.type && N.write(this.update);
                },
              },
            ]),
            t
          );
        })();
      var Ce = Symbol.for('AnimatedComponent'),
        je = function (t) {
          return J.str(t)
            ? t
            : t && J.str(t.displayName)
            ? t.displayName
            : (J.fun(t) && t.name) || null;
        };
      function Ne(t) {
        var e = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, w.Z)(t);
          if (e) {
            var i = (0, w.Z)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (0, b.Z)(this, n);
        };
      }
      function Ie(t, e) {
        var n =
          ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
          t['@@iterator'];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ('string' == typeof t) return Ve(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === n && t.constructor && (n = t.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(t);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Ve(t, e);
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var o,
          a = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (u = !0), (o = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      function Ve(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Te() {
        return (
          (Te =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          Te.apply(this, arguments)
        );
      }
      function Le(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        return J.fun(t) ? t.apply(void 0, n) : t;
      }
      var Me = function (t, e) {
          return (
            !0 === t || !!(e && t && (J.fun(t) ? t(e) : et(t).includes(e)))
          );
        },
        qe = function (t, e) {
          return J.obj(t) ? e && t[e] : t;
        },
        Fe = function (t, e) {
          return !0 === t.default ? t[e] : t.default ? t.default[e] : void 0;
        },
        ze = function (t) {
          return t;
        },
        Ue = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : ze,
            n = De;
          t.default &&
            !0 !== t.default &&
            ((t = t.default), (n = Object.keys(t)));
          var r,
            i = {},
            o = Ie(n);
          try {
            for (o.s(); !(r = o.n()).done; ) {
              var a = r.value,
                u = e(t[a], a);
              J.und(u) || (i[a] = u);
            }
          } catch (s) {
            o.e(s);
          } finally {
            o.f();
          }
          return i;
        },
        De = [
          'config',
          'onProps',
          'onStart',
          'onChange',
          'onPause',
          'onResume',
          'onRest',
        ],
        Qe = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1,
        };
      function Ge(t) {
        var e = (function (t) {
          var e = {},
            n = 0;
          if (
            (tt(t, function (t, r) {
              Qe[r] || ((e[r] = t), n++);
            }),
            n)
          )
            return e;
        })(t);
        if (e) {
          var n = { to: e };
          return (
            tt(t, function (t, r) {
              return r in e || (n[r] = t);
            }),
            n
          );
        }
        return Te({}, t);
      }
      function Be(t) {
        return (
          (t = Ut(t)),
          J.arr(t)
            ? t.map(Be)
            : se(t)
            ? ct.createStringInterpolator({ range: [0, 1], output: [t, t] })(1)
            : t
        );
      }
      function We(t) {
        for (var e in t) return !0;
        return !1;
      }
      function $e(t) {
        return J.fun(t) || (J.arr(t) && J.obj(t[0]));
      }
      function Ye(t, e) {
        var n;
        null == (n = t.ref) || n.delete(t), null == e || e.delete(t);
      }
      function He(t, e) {
        var n;
        e &&
          t.ref !== e &&
          (null == (n = t.ref) || n.delete(t), e.add(t), (t.ref = e));
      }
      var Je = Te(
          {},
          { tension: 170, friction: 26 },
          {
            mass: 1,
            damping: 1,
            easing: function (t) {
              return t;
            },
            clamp: !1,
          },
        ),
        Xe = (0, m.Z)(function t() {
          (0, y.Z)(this, t),
            (this.tension = void 0),
            (this.friction = void 0),
            (this.frequency = void 0),
            (this.damping = void 0),
            (this.mass = void 0),
            (this.velocity = 0),
            (this.restVelocity = void 0),
            (this.precision = void 0),
            (this.progress = void 0),
            (this.duration = void 0),
            (this.easing = void 0),
            (this.clamp = void 0),
            (this.bounce = void 0),
            (this.decay = void 0),
            (this.round = void 0),
            Object.assign(this, Je);
        });
      function Ke(t, e) {
        if (J.und(e.decay)) {
          var n = !J.und(e.tension) || !J.und(e.friction);
          (!n && J.und(e.frequency) && J.und(e.damping) && J.und(e.mass)) ||
            ((t.duration = void 0), (t.decay = void 0)),
            n && (t.frequency = void 0);
        } else t.duration = void 0;
      }
      var tn = [],
        en = (0, m.Z)(function t() {
          (0, y.Z)(this, t),
            (this.changed = !1),
            (this.values = tn),
            (this.toValues = null),
            (this.fromValues = tn),
            (this.to = void 0),
            (this.from = void 0),
            (this.config = new Xe()),
            (this.immediate = !1);
        });
      function nn(t, e) {
        var n = e.key,
          r = e.props,
          i = e.defaultProps,
          o = e.state,
          a = e.actions;
        return new Promise(function (e, u) {
          var s,
            c,
            l,
            f = Me(
              null != (s = r.cancel) ? s : null == i ? void 0 : i.cancel,
              n,
            );
          if (f) p();
          else {
            J.und(r.pause) || (o.paused = Me(r.pause, n));
            var d = null == i ? void 0 : i.pause;
            !0 !== d && (d = o.paused || Me(d, n)),
              (c = Le(r.delay || 0, n)),
              d ? (o.resumeQueue.add(v), a.pause()) : (a.resume(), v());
          }
          function h() {
            o.resumeQueue.add(v),
              o.timeouts.delete(l),
              l.cancel(),
              (c = l.time - N.now());
          }
          function v() {
            c > 0
              ? ((l = N.setTimeout(p, c)),
                o.pauseQueue.add(h),
                o.timeouts.add(l))
              : p();
          }
          function p() {
            o.pauseQueue.delete(h),
              o.timeouts.delete(l),
              t <= (o.cancelId || 0) && (f = !0);
            try {
              a.start(Te({}, r, { callId: t, cancel: f }), e);
            } catch (n) {
              u(n);
            }
          }
        });
      }
      var rn = function (t, e) {
          return 1 == e.length
            ? e[0]
            : e.some(function (t) {
                return t.cancelled;
              })
            ? un(t.get())
            : e.every(function (t) {
                return t.noop;
              })
            ? on(t.get())
            : an(
                t.get(),
                e.every(function (t) {
                  return t.finished;
                }),
              );
        },
        on = function (t) {
          return { value: t, noop: !0, finished: !0, cancelled: !1 };
        },
        an = function (t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return { value: t, finished: e, cancelled: n };
        },
        un = function (t) {
          return { value: t, cancelled: !0, finished: !1 };
        };
      function sn(t, e, n, r) {
        var i = e.callId,
          o = e.parentId,
          a = e.onRest,
          u = n.asyncTo,
          s = n.promise;
        return o || t !== u || e.reset
          ? (n.promise = O(
              C().mark(function c() {
                var l, f, d, h, v, p, m, y;
                return C().wrap(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          if (
                            ((n.asyncId = i),
                            (n.asyncTo = t),
                            (l = Ue(e, function (t, e) {
                              return 'onRest' === e ? void 0 : t;
                            })),
                            (h = new Promise(function (t, e) {
                              return (f = t), (d = e);
                            })),
                            (v = function (t) {
                              var e =
                                (i <= (n.cancelId || 0) && un(r)) ||
                                (i !== n.asyncId && an(r, !1));
                              if (e) throw ((t.result = e), d(t), t);
                            }),
                            (p = function (t, e) {
                              var o = new ln(),
                                a = new fn();
                              return O(
                                C().mark(function u() {
                                  var s, c;
                                  return C().wrap(function (u) {
                                    for (;;)
                                      switch ((u.prev = u.next)) {
                                        case 0:
                                          if (!ct.skipAnimation) {
                                            u.next = 5;
                                            break;
                                          }
                                          throw (
                                            (cn(n),
                                            (a.result = an(r, !1)),
                                            d(a),
                                            a)
                                          );
                                        case 5:
                                          return (
                                            v(o),
                                            ((s = J.obj(t)
                                              ? Te({}, t)
                                              : Te({}, e, { to: t })).parentId =
                                              i),
                                            tt(l, function (t, e) {
                                              J.und(s[e]) && (s[e] = t);
                                            }),
                                            (u.next = 11),
                                            r.start(s)
                                          );
                                        case 11:
                                          if (((c = u.sent), v(o), !n.paused)) {
                                            u.next = 16;
                                            break;
                                          }
                                          return (
                                            (u.next = 16),
                                            new Promise(function (t) {
                                              n.resumeQueue.add(t);
                                            })
                                          );
                                        case 16:
                                          return u.abrupt('return', c);
                                        case 17:
                                        case 'end':
                                          return u.stop();
                                      }
                                  }, u);
                                }),
                              )();
                            }),
                            !ct.skipAnimation)
                          ) {
                            c.next = 9;
                            break;
                          }
                          return cn(n), c.abrupt('return', an(r, !1));
                        case 9:
                          return (
                            (c.prev = 9),
                            (y = J.arr(t)
                              ? (function () {
                                  var t = O(
                                    C().mark(function t(e) {
                                      var n, r, i;
                                      return C().wrap(
                                        function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                (n = Ie(e)),
                                                  (t.prev = 1),
                                                  n.s();
                                              case 3:
                                                if ((r = n.n()).done) {
                                                  t.next = 9;
                                                  break;
                                                }
                                                return (
                                                  (i = r.value),
                                                  (t.next = 7),
                                                  p(i)
                                                );
                                              case 7:
                                                t.next = 3;
                                                break;
                                              case 9:
                                                t.next = 14;
                                                break;
                                              case 11:
                                                (t.prev = 11),
                                                  (t.t0 = t.catch(1)),
                                                  n.e(t.t0);
                                              case 14:
                                                return (
                                                  (t.prev = 14),
                                                  n.f(),
                                                  t.finish(14)
                                                );
                                              case 17:
                                              case 'end':
                                                return t.stop();
                                            }
                                        },
                                        t,
                                        null,
                                        [[1, 11, 14, 17]],
                                      );
                                    }),
                                  );
                                  return function (e) {
                                    return t.apply(this, arguments);
                                  };
                                })()(t)
                              : Promise.resolve(t(p, r.stop.bind(r)))),
                            (c.next = 13),
                            Promise.all([y.then(f), h])
                          );
                        case 13:
                          (m = an(r.get(), !0, !1)), (c.next = 27);
                          break;
                        case 16:
                          if (
                            ((c.prev = 16),
                            (c.t0 = c.catch(9)),
                            !(c.t0 instanceof ln))
                          ) {
                            c.next = 22;
                            break;
                          }
                          (m = c.t0.result), (c.next = 27);
                          break;
                        case 22:
                          if (!(c.t0 instanceof fn)) {
                            c.next = 26;
                            break;
                          }
                          (m = c.t0.result), (c.next = 27);
                          break;
                        case 26:
                          throw c.t0;
                        case 27:
                          return (
                            (c.prev = 27),
                            i == n.asyncId &&
                              ((n.asyncId = o),
                              (n.asyncTo = o ? u : void 0),
                              (n.promise = o ? s : void 0)),
                            c.finish(27)
                          );
                        case 30:
                          return (
                            J.fun(a) &&
                              N.batchedUpdates(function () {
                                a(m, r, r.item);
                              }),
                            c.abrupt('return', m)
                          );
                        case 32:
                        case 'end':
                          return c.stop();
                      }
                  },
                  c,
                  null,
                  [[9, 16, 27, 30]],
                );
              }),
            )())
          : s;
      }
      function cn(t, e) {
        nt(t.timeouts, function (t) {
          return t.cancel();
        }),
          t.pauseQueue.clear(),
          t.resumeQueue.clear(),
          (t.asyncId = t.asyncTo = t.promise = void 0),
          e && (t.cancelId = e);
      }
      var ln = (function (t) {
          (0, g.Z)(n, t);
          var e = Ne(n);
          function n() {
            var t;
            return (
              (0, y.Z)(this, n),
              ((t = e.call(
                this,
                'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
              )).result = void 0),
              t
            );
          }
          return (0, m.Z)(n);
        })(S(Error)),
        fn = (function (t) {
          (0, g.Z)(n, t);
          var e = Ne(n);
          function n() {
            var t;
            return (
              (0, y.Z)(this, n),
              ((t = e.call(this, 'SkipAnimationSignal')).result = void 0),
              t
            );
          }
          return (0, m.Z)(n);
        })(S(Error)),
        dn = function (t) {
          return t instanceof vn;
        },
        hn = 1,
        vn = (function (t) {
          (0, g.Z)(n, t);
          var e = Ne(n);
          function n() {
            var t;
            (0, y.Z)(this, n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              ((t = e.call.apply(e, [this].concat(i))).id = hn++),
              (t.key = void 0),
              (t._priority = 0),
              t
            );
          }
          return (
            (0, m.Z)(n, [
              {
                key: 'priority',
                get: function () {
                  return this._priority;
                },
                set: function (t) {
                  this._priority != t &&
                    ((this._priority = t), this._onPriorityChange(t));
                },
              },
              {
                key: 'get',
                value: function () {
                  var t = ye(this);
                  return t && t.getValue();
                },
              },
              {
                key: 'to',
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  return ct.to(this, e);
                },
              },
              {
                key: 'interpolate',
                value: function () {
                  ae();
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  return ct.to(this, e);
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return this.get();
                },
              },
              {
                key: 'observerAdded',
                value: function (t) {
                  1 == t && this._attach();
                },
              },
              {
                key: 'observerRemoved',
                value: function (t) {
                  0 == t && this._detach();
                },
              },
              { key: '_attach', value: function () {} },
              { key: '_detach', value: function () {} },
              {
                key: '_onChange',
                value: function (t) {
                  var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  Qt(this, { type: 'change', parent: this, value: t, idle: e });
                },
              },
              {
                key: '_onPriorityChange',
                value: function (t) {
                  this.idle || vt.sort(this),
                    Qt(this, { type: 'priority', parent: this, priority: t });
                },
              },
            ]),
            n
          );
        })(Gt),
        pn = Symbol.for('SpringPhase'),
        mn = function (t) {
          return (1 & t[pn]) > 0;
        },
        yn = function (t) {
          return (2 & t[pn]) > 0;
        },
        gn = function (t) {
          return (4 & t[pn]) > 0;
        },
        bn = function (t, e) {
          return e ? (t[pn] |= 3) : (t[pn] &= -3);
        },
        wn = function (t, e) {
          return e ? (t[pn] |= 4) : (t[pn] &= -5);
        },
        kn = (function (t) {
          (0, g.Z)(n, t);
          var e = Ne(n);
          function n(t, r) {
            var i;
            if (
              ((0, y.Z)(this, n),
              ((i = e.call(this)).key = void 0),
              (i.animation = new en()),
              (i.queue = void 0),
              (i.defaultProps = {}),
              (i._state = {
                paused: !1,
                pauseQueue: new Set(),
                resumeQueue: new Set(),
                timeouts: new Set(),
              }),
              (i._pendingCalls = new Set()),
              (i._lastCallId = 0),
              (i._lastToId = 0),
              (i._memoizedDuration = 0),
              !J.und(t) || !J.und(r))
            ) {
              var o = J.obj(t) ? Te({}, t) : Te({}, r, { from: t });
              J.und(o.default) && (o.default = !0), i.start(o);
            }
            return i;
          }
          return (
            (0, m.Z)(n, [
              {
                key: 'idle',
                get: function () {
                  return !(yn(this) || this._state.asyncTo) || gn(this);
                },
              },
              {
                key: 'goal',
                get: function () {
                  return Ut(this.animation.to);
                },
              },
              {
                key: 'velocity',
                get: function () {
                  var t = ye(this);
                  return t instanceof ke
                    ? t.lastVelocity || 0
                    : t.getPayload().map(function (t) {
                        return t.lastVelocity || 0;
                      });
                },
              },
              {
                key: 'hasAnimated',
                get: function () {
                  return mn(this);
                },
              },
              {
                key: 'isAnimating',
                get: function () {
                  return yn(this);
                },
              },
              {
                key: 'isPaused',
                get: function () {
                  return gn(this);
                },
              },
              {
                key: 'advance',
                value: function (t) {
                  var e = this,
                    n = !0,
                    r = !1,
                    i = this.animation,
                    o = i.config,
                    a = i.toValues,
                    u = be(i.to);
                  !u && zt(i.to) && (a = et(Ut(i.to))),
                    i.values.forEach(function (s, c) {
                      if (!s.done) {
                        var l =
                            s.constructor == _e
                              ? 1
                              : u
                              ? u[c].lastPosition
                              : a[c],
                          f = i.immediate,
                          d = l;
                        if (!f) {
                          if (((d = s.lastPosition), o.tension <= 0))
                            return void (s.done = !0);
                          var h,
                            v = (s.elapsedTime += t),
                            p = i.fromValues[c],
                            m =
                              null != s.v0
                                ? s.v0
                                : (s.v0 = J.arr(o.velocity)
                                    ? o.velocity[c]
                                    : o.velocity);
                          if (J.und(o.duration))
                            if (o.decay) {
                              var y = !0 === o.decay ? 0.998 : o.decay,
                                g = Math.exp(-(1 - y) * v);
                              (d = p + (m / (1 - y)) * (1 - g)),
                                (f = Math.abs(s.lastPosition - d) < 0.1),
                                (h = m * g);
                            } else {
                              h = null == s.lastVelocity ? m : s.lastVelocity;
                              for (
                                var b =
                                    o.precision ||
                                    (p == l
                                      ? 0.005
                                      : Math.min(1, 0.001 * Math.abs(l - p))),
                                  w = o.restVelocity || b / 10,
                                  k = o.clamp ? 0 : o.bounce,
                                  _ = !J.und(k),
                                  x = p == l ? s.v0 > 0 : p < l,
                                  E = Math.ceil(t / 1),
                                  P = 0;
                                P < E &&
                                (Math.abs(h) > w ||
                                  !(f = Math.abs(l - d) <= b));
                                ++P
                              ) {
                                _ &&
                                  (d == l || d > l == x) &&
                                  ((h = -h * k), (d = l)),
                                  (d +=
                                    1 *
                                    (h +=
                                      1 *
                                      ((1e-6 * -o.tension * (d - l) +
                                        0.001 * -o.friction * h) /
                                        o.mass)));
                              }
                            }
                          else {
                            var Z = 1;
                            o.duration > 0 &&
                              (e._memoizedDuration !== o.duration &&
                                ((e._memoizedDuration = o.duration),
                                s.durationProgress > 0 &&
                                  ((s.elapsedTime =
                                    o.duration * s.durationProgress),
                                  (v = s.elapsedTime += t))),
                              (Z =
                                (Z =
                                  (o.progress || 0) + v / e._memoizedDuration) >
                                1
                                  ? 1
                                  : Z < 0
                                  ? 0
                                  : Z),
                              (s.durationProgress = Z)),
                              (h =
                                ((d = p + o.easing(Z) * (l - p)) -
                                  s.lastPosition) /
                                t),
                              (f = 1 == Z);
                          }
                          (s.lastVelocity = h),
                            Number.isNaN(d) &&
                              (console.warn('Got NaN while animating:', e),
                              (f = !0));
                        }
                        u && !u[c].done && (f = !1),
                          f ? (s.done = !0) : (n = !1),
                          s.setValue(d, o.round) && (r = !0);
                      }
                    });
                  var s = ye(this),
                    c = s.getValue();
                  if (n) {
                    var l = Ut(i.to);
                    (c === l && !r) || o.decay
                      ? r && o.decay && this._onChange(c)
                      : (s.setValue(l), this._onChange(l)),
                      this._stop();
                  } else r && this._onChange(c);
                },
              },
              {
                key: 'set',
                value: function (t) {
                  var e = this;
                  return (
                    N.batchedUpdates(function () {
                      e._stop(), e._focus(t), e._set(t);
                    }),
                    this
                  );
                },
              },
              {
                key: 'pause',
                value: function () {
                  this._update({ pause: !0 });
                },
              },
              {
                key: 'resume',
                value: function () {
                  this._update({ pause: !1 });
                },
              },
              {
                key: 'finish',
                value: function () {
                  var t = this;
                  if (yn(this)) {
                    var e = this.animation,
                      n = e.to,
                      r = e.config;
                    N.batchedUpdates(function () {
                      t._onStart(), r.decay || t._set(n, !1), t._stop();
                    });
                  }
                  return this;
                },
              },
              {
                key: 'update',
                value: function (t) {
                  return (this.queue || (this.queue = [])).push(t), this;
                },
              },
              {
                key: 'start',
                value: function (t, e) {
                  var n,
                    r = this;
                  return (
                    J.und(t)
                      ? ((n = this.queue || []), (this.queue = []))
                      : (n = [J.obj(t) ? t : Te({}, e, { to: t })]),
                    Promise.all(
                      n.map(function (t) {
                        return r._update(t);
                      }),
                    ).then(function (t) {
                      return rn(r, t);
                    })
                  );
                },
              },
              {
                key: 'stop',
                value: function (t) {
                  var e = this,
                    n = this.animation.to;
                  return (
                    this._focus(this.get()),
                    cn(this._state, t && this._lastCallId),
                    N.batchedUpdates(function () {
                      return e._stop(n, t);
                    }),
                    this
                  );
                },
              },
              {
                key: 'reset',
                value: function () {
                  this._update({ reset: !0 });
                },
              },
              {
                key: 'eventObserved',
                value: function (t) {
                  'change' == t.type
                    ? this._start()
                    : 'priority' == t.type && (this.priority = t.priority + 1);
                },
              },
              {
                key: '_prepareNode',
                value: function (t) {
                  var e = this.key || '',
                    n = t.to,
                    r = t.from;
                  (null == (n = J.obj(n) ? n[e] : n) || $e(n)) && (n = void 0),
                    null == (r = J.obj(r) ? r[e] : r) && (r = void 0);
                  var i = { to: n, from: r };
                  if (!mn(this)) {
                    if (t.reverse) {
                      var o = [r, n];
                      (n = o[0]), (r = o[1]);
                    }
                    (r = Ut(r)),
                      J.und(r) ? ye(this) || this._set(n) : this._set(r);
                  }
                  return i;
                },
              },
              {
                key: '_update',
                value: function (t, e) {
                  var n = this,
                    r = Te({}, t),
                    i = this.key,
                    o = this.defaultProps;
                  r.default &&
                    Object.assign(
                      o,
                      Ue(r, function (t, e) {
                        return /^on/.test(e) ? qe(t, i) : t;
                      }),
                    ),
                    An(this, r, 'onProps'),
                    On(this, 'onProps', r, this);
                  var a = this._prepareNode(r);
                  if (Object.isFrozen(this))
                    throw Error(
                      'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                    );
                  var u = this._state;
                  return nn(++this._lastCallId, {
                    key: i,
                    props: r,
                    defaultProps: o,
                    state: u,
                    actions: {
                      pause: function () {
                        gn(n) ||
                          (wn(n, !0),
                          ot(u.pauseQueue),
                          On(n, 'onPause', an(n, _n(n, n.animation.to)), n));
                      },
                      resume: function () {
                        gn(n) &&
                          (wn(n, !1),
                          yn(n) && n._resume(),
                          ot(u.resumeQueue),
                          On(n, 'onResume', an(n, _n(n, n.animation.to)), n));
                      },
                      start: this._merge.bind(this, a),
                    },
                  }).then(function (t) {
                    if (r.loop && t.finished && (!e || !t.noop)) {
                      var i = xn(r);
                      if (i) return n._update(i, !0);
                    }
                    return t;
                  });
                },
              },
              {
                key: '_merge',
                value: function (t, e, n) {
                  var r = this;
                  if (e.cancel) return this.stop(!0), n(un(this));
                  var i = !J.und(t.to),
                    o = !J.und(t.from);
                  if (i || o) {
                    if (!(e.callId > this._lastToId)) return n(un(this));
                    this._lastToId = e.callId;
                  }
                  var a = this.key,
                    u = this.defaultProps,
                    s = this.animation,
                    c = s.to,
                    l = s.from,
                    f = t.to,
                    d = void 0 === f ? c : f,
                    h = t.from,
                    v = void 0 === h ? l : h;
                  if (
                    (!o || i || (e.default && !J.und(d)) || (d = v), e.reverse)
                  ) {
                    var p = [v, d];
                    (d = p[0]), (v = p[1]);
                  }
                  var m = !X(v, l);
                  m && (s.from = v), (v = Ut(v));
                  var y = !X(d, c);
                  y && this._focus(d);
                  var g = $e(e.to),
                    b = s.config,
                    w = b.decay,
                    k = b.velocity;
                  (i || o) && (b.velocity = 0),
                    e.config &&
                      !g &&
                      (function (t, e, n) {
                        for (var r in (n &&
                          (Ke((n = Te({}, n)), e), (e = Te({}, n, e))),
                        Ke(t, e),
                        Object.assign(t, e),
                        Je))
                          null == t[r] && (t[r] = Je[r]);
                        var i = t.mass,
                          o = t.frequency,
                          a = t.damping;
                        J.und(o) ||
                          (o < 0.01 && (o = 0.01),
                          a < 0 && (a = 0),
                          (t.tension = Math.pow((2 * Math.PI) / o, 2) * i),
                          (t.friction = (4 * Math.PI * a * i) / o));
                      })(
                        b,
                        Le(e.config, a),
                        e.config !== u.config ? Le(u.config, a) : void 0,
                      );
                  var _ = ye(this);
                  if (!_ || J.und(d)) return n(an(this, !0));
                  var x = J.und(e.reset)
                      ? o && !e.default
                      : !J.und(v) && Me(e.reset, a),
                    E = x ? v : this.get(),
                    P = Be(d),
                    Z = J.num(P) || J.arr(P) || se(P),
                    S = !g && (!Z || Me(u.immediate || e.immediate, a));
                  if (y) {
                    var A = Se(d);
                    if (A !== _.constructor) {
                      if (!S)
                        throw Error(
                          'Cannot animate between '
                            .concat(_.constructor.name, ' and ')
                            .concat(A.name, ', as the "to" prop suggests'),
                        );
                      _ = this._set(P);
                    }
                  }
                  var O = _.constructor,
                    R = zt(d),
                    C = !1;
                  if (!R) {
                    var j = x || (!mn(this) && m);
                    (y || j) && (R = !(C = X(Be(E), P))),
                      ((X(s.immediate, S) || S) &&
                        X(b.decay, w) &&
                        X(b.velocity, k)) ||
                        (R = !0);
                  }
                  if (
                    (C &&
                      yn(this) &&
                      (s.changed && !x ? (R = !0) : R || this._stop(c)),
                    !g &&
                      ((R || zt(c)) &&
                        ((s.values = _.getPayload()),
                        (s.toValues = zt(d) ? null : O == _e ? [1] : et(P))),
                      s.immediate != S &&
                        ((s.immediate = S), S || x || this._set(c)),
                      R))
                  ) {
                    var I = s.onRest;
                    K(Sn, function (t) {
                      return An(r, e, t);
                    });
                    var V = an(this, _n(this, c));
                    ot(this._pendingCalls, V),
                      this._pendingCalls.add(n),
                      s.changed &&
                        N.batchedUpdates(function () {
                          (s.changed = !x),
                            null == I || I(V, r),
                            x
                              ? Le(u.onRest, V)
                              : null == s.onStart || s.onStart(V, r);
                        });
                  }
                  x && this._set(E),
                    g
                      ? n(sn(e.to, e, this._state, this))
                      : R
                      ? this._start()
                      : yn(this) && !y
                      ? this._pendingCalls.add(n)
                      : n(on(E));
                },
              },
              {
                key: '_focus',
                value: function (t) {
                  var e = this.animation;
                  t !== e.to &&
                    (Dt(this) && this._detach(),
                    (e.to = t),
                    Dt(this) && this._attach());
                },
              },
              {
                key: '_attach',
                value: function () {
                  var t = 0,
                    e = this.animation.to;
                  zt(e) && (Wt(e, this), dn(e) && (t = e.priority + 1)),
                    (this.priority = t);
                },
              },
              {
                key: '_detach',
                value: function () {
                  var t = this.animation.to;
                  zt(t) && $t(t, this);
                },
              },
              {
                key: '_set',
                value: function (t) {
                  var e = this,
                    n =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    r = Ut(t);
                  if (!J.und(r)) {
                    var i = ye(this);
                    if (!i || !X(r, i.getValue())) {
                      var o = Se(r);
                      i && i.constructor == o
                        ? i.setValue(r)
                        : ge(this, o.create(r)),
                        i &&
                          N.batchedUpdates(function () {
                            e._onChange(r, n);
                          });
                    }
                  }
                  return ye(this);
                },
              },
              {
                key: '_onStart',
                value: function () {
                  var t = this.animation;
                  t.changed ||
                    ((t.changed = !0),
                    On(this, 'onStart', an(this, _n(this, t.to)), this));
                },
              },
              {
                key: '_onChange',
                value: function (t, e) {
                  e || (this._onStart(), Le(this.animation.onChange, t, this)),
                    Le(this.defaultProps.onChange, t, this),
                    (0, x.Z)((0, w.Z)(n.prototype), '_onChange', this).call(
                      this,
                      t,
                      e,
                    );
                },
              },
              {
                key: '_start',
                value: function () {
                  var t = this.animation;
                  ye(this).reset(Ut(t.to)),
                    t.immediate ||
                      (t.fromValues = t.values.map(function (t) {
                        return t.lastPosition;
                      })),
                    yn(this) || (bn(this, !0), gn(this) || this._resume());
                },
              },
              {
                key: '_resume',
                value: function () {
                  ct.skipAnimation ? this.finish() : vt.start(this);
                },
              },
              {
                key: '_stop',
                value: function (t, e) {
                  if (yn(this)) {
                    bn(this, !1);
                    var n = this.animation;
                    K(n.values, function (t) {
                      t.done = !0;
                    }),
                      n.toValues &&
                        (n.onChange = n.onPause = n.onResume = void 0),
                      Qt(this, { type: 'idle', parent: this });
                    var r = e
                      ? un(this.get())
                      : an(this.get(), _n(this, null != t ? t : n.to));
                    ot(this._pendingCalls, r),
                      n.changed &&
                        ((n.changed = !1), On(this, 'onRest', r, this));
                  }
                },
              },
            ]),
            n
          );
        })(vn);
      function _n(t, e) {
        var n = Be(e);
        return X(Be(t.get()), n);
      }
      function xn(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : t.loop,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : t.to,
          r = Le(e);
        if (r) {
          var i = !0 !== r && Ge(r),
            o = (i || t).reverse,
            a = !i || i.reset;
          return En(
            Te(
              {},
              t,
              {
                loop: e,
                default: !1,
                pause: void 0,
                to: !o || $e(n) ? n : void 0,
                from: a ? t.from : void 0,
                reset: a,
              },
              i,
            ),
          );
        }
      }
      function En(t) {
        var e = (t = Ge(t)),
          n = e.to,
          r = e.from,
          i = new Set();
        return (
          J.obj(n) && Zn(n, i),
          J.obj(r) && Zn(r, i),
          (t.keys = i.size ? Array.from(i) : null),
          t
        );
      }
      function Pn(t) {
        var e = En(t);
        return J.und(e.default) && (e.default = Ue(e)), e;
      }
      function Zn(t, e) {
        tt(t, function (t, n) {
          return null != t && e.add(n);
        });
      }
      var Sn = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
      function An(t, e, n) {
        t.animation[n] = e[n] !== Fe(e, n) ? qe(e[n], t.key) : void 0;
      }
      function On(t, e) {
        for (
          var n,
            r,
            i,
            o,
            a,
            u,
            s = arguments.length,
            c = new Array(s > 2 ? s - 2 : 0),
            l = 2;
          l < s;
          l++
        )
          c[l - 2] = arguments[l];
        null == (i = (o = t.animation)[e]) ||
          (n = i).call.apply(n, [o].concat(c)),
          null == (a = (u = t.defaultProps)[e]) ||
            (r = a).call.apply(r, [u].concat(c));
      }
      var Rn = ['onStart', 'onChange', 'onRest'],
        Cn = 1,
        jn = (function () {
          function t(e, n) {
            (0, y.Z)(this, t),
              (this.id = Cn++),
              (this.springs = {}),
              (this.queue = []),
              (this.ref = void 0),
              (this._flush = void 0),
              (this._initialProps = void 0),
              (this._lastAsyncId = 0),
              (this._active = new Set()),
              (this._changed = new Set()),
              (this._started = !1),
              (this._item = void 0),
              (this._state = {
                paused: !1,
                pauseQueue: new Set(),
                resumeQueue: new Set(),
                timeouts: new Set(),
              }),
              (this._events = {
                onStart: new Map(),
                onChange: new Map(),
                onRest: new Map(),
              }),
              (this._onFrame = this._onFrame.bind(this)),
              n && (this._flush = n),
              e && this.start(Te({ default: !0 }, e));
          }
          return (
            (0, m.Z)(t, [
              {
                key: 'idle',
                get: function () {
                  return (
                    !this._state.asyncTo &&
                    Object.values(this.springs).every(function (t) {
                      return t.idle;
                    })
                  );
                },
              },
              {
                key: 'item',
                get: function () {
                  return this._item;
                },
                set: function (t) {
                  this._item = t;
                },
              },
              {
                key: 'get',
                value: function () {
                  var t = {};
                  return (
                    this.each(function (e, n) {
                      return (t[n] = e.get());
                    }),
                    t
                  );
                },
              },
              {
                key: 'set',
                value: function (t) {
                  for (var e in t) {
                    var n = t[e];
                    J.und(n) || this.springs[e].set(n);
                  }
                },
              },
              {
                key: 'update',
                value: function (t) {
                  return t && this.queue.push(En(t)), this;
                },
              },
              {
                key: 'start',
                value: function (t) {
                  var e = this.queue;
                  return (
                    t ? (e = et(t).map(En)) : (this.queue = []),
                    this._flush
                      ? this._flush(this, e)
                      : (Fn(this, e), Nn(this, e))
                  );
                },
              },
              {
                key: 'stop',
                value: function (t, e) {
                  if ((t !== !!t && (e = t), e)) {
                    var n = this.springs;
                    K(et(e), function (e) {
                      return n[e].stop(!!t);
                    });
                  } else
                    cn(this._state, this._lastAsyncId),
                      this.each(function (e) {
                        return e.stop(!!t);
                      });
                  return this;
                },
              },
              {
                key: 'pause',
                value: function (t) {
                  if (J.und(t)) this.start({ pause: !0 });
                  else {
                    var e = this.springs;
                    K(et(t), function (t) {
                      return e[t].pause();
                    });
                  }
                  return this;
                },
              },
              {
                key: 'resume',
                value: function (t) {
                  if (J.und(t)) this.start({ pause: !1 });
                  else {
                    var e = this.springs;
                    K(et(t), function (t) {
                      return e[t].resume();
                    });
                  }
                  return this;
                },
              },
              {
                key: 'each',
                value: function (t) {
                  tt(this.springs, t);
                },
              },
              {
                key: '_onFrame',
                value: function () {
                  var t = this,
                    e = this._events,
                    n = e.onStart,
                    r = e.onChange,
                    i = e.onRest,
                    o = this._active.size > 0,
                    a = this._changed.size > 0;
                  ((o && !this._started) || (a && !this._started)) &&
                    ((this._started = !0),
                    nt(n, function (e) {
                      var n = (0, p.Z)(e, 2),
                        r = n[0],
                        i = n[1];
                      (i.value = t.get()), r(i, t, t._item);
                    }));
                  var u = !o && this._started,
                    s = a || (u && i.size) ? this.get() : null;
                  a &&
                    r.size &&
                    nt(r, function (e) {
                      var n = (0, p.Z)(e, 2),
                        r = n[0],
                        i = n[1];
                      (i.value = s), r(i, t, t._item);
                    }),
                    u &&
                      ((this._started = !1),
                      nt(i, function (e) {
                        var n = (0, p.Z)(e, 2),
                          r = n[0],
                          i = n[1];
                        (i.value = s), r(i, t, t._item);
                      }));
                },
              },
              {
                key: 'eventObserved',
                value: function (t) {
                  if ('change' == t.type)
                    this._changed.add(t.parent),
                      t.idle || this._active.add(t.parent);
                  else {
                    if ('idle' != t.type) return;
                    this._active.delete(t.parent);
                  }
                  N.onFrame(this._onFrame);
                },
              },
            ]),
            t
          );
        })();
      function Nn(t, e) {
        return Promise.all(
          e.map(function (e) {
            return In(t, e);
          }),
        ).then(function (e) {
          return rn(t, e);
        });
      }
      function In(t, e, n) {
        return Vn.apply(this, arguments);
      }
      function Vn() {
        return (
          (Vn = O(
            C().mark(function t(e, n, r) {
              var i, o, a, u, s, c, l, f, d, h, v, p, m;
              return C().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((i = n.keys),
                        (o = n.to),
                        (a = n.from),
                        (u = n.loop),
                        (s = n.onRest),
                        (c = n.onResolve),
                        (l = J.obj(n.default) && n.default),
                        u && (n.loop = !1),
                        !1 === o && (n.to = null),
                        !1 === a && (n.from = null),
                        (f = J.arr(o) || J.fun(o) ? o : void 0)
                          ? ((n.to = void 0),
                            (n.onRest = void 0),
                            l && (l.onRest = void 0))
                          : K(Rn, function (t) {
                              var r = n[t];
                              if (J.fun(r)) {
                                var i = e._events[t];
                                (n[t] = function (t) {
                                  var e = t.finished,
                                    n = t.cancelled,
                                    o = i.get(r);
                                  o
                                    ? (e || (o.finished = !1),
                                      n && (o.cancelled = !0))
                                    : i.set(r, {
                                        value: null,
                                        finished: e || !1,
                                        cancelled: n || !1,
                                      });
                                }),
                                  l && (l[t] = n[t]);
                              }
                            }),
                        (d = e._state),
                        n.pause === !d.paused
                          ? ((d.paused = n.pause),
                            ot(n.pause ? d.pauseQueue : d.resumeQueue))
                          : d.paused && (n.pause = !0),
                        (h = (i || Object.keys(e.springs)).map(function (t) {
                          return e.springs[t].start(n);
                        })),
                        (v = !0 === n.cancel || !0 === Fe(n, 'cancel')),
                        (f || (v && d.asyncId)) &&
                          h.push(
                            nn(++e._lastAsyncId, {
                              props: n,
                              state: d,
                              actions: {
                                pause: H,
                                resume: H,
                                start: function (t, n) {
                                  v
                                    ? (cn(d, e._lastAsyncId), n(un(e)))
                                    : ((t.onRest = s), n(sn(f, t, d, e)));
                                },
                              },
                            }),
                          ),
                        !d.paused)
                      ) {
                        t.next = 15;
                        break;
                      }
                      return (
                        (t.next = 15),
                        new Promise(function (t) {
                          d.resumeQueue.add(t);
                        })
                      );
                    case 15:
                      return (
                        (t.t0 = rn), (t.t1 = e), (t.next = 19), Promise.all(h)
                      );
                    case 19:
                      if (
                        ((t.t2 = t.sent),
                        (p = (0, t.t0)(t.t1, t.t2)),
                        !u || !p.finished || (r && p.noop))
                      ) {
                        t.next = 26;
                        break;
                      }
                      if (!(m = xn(n, u, o))) {
                        t.next = 26;
                        break;
                      }
                      return Fn(e, [m]), t.abrupt('return', In(e, m, !0));
                    case 26:
                      return (
                        c &&
                          N.batchedUpdates(function () {
                            return c(p, e, e.item);
                          }),
                        t.abrupt('return', p)
                      );
                    case 28:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )),
          Vn.apply(this, arguments)
        );
      }
      function Tn(t, e) {
        var n = Te({}, t.springs);
        return (
          e &&
            K(et(e), function (t) {
              J.und(t.keys) && (t = En(t)),
                J.obj(t.to) || (t = Te({}, t, { to: void 0 })),
                qn(n, t, function (t) {
                  return Mn(t);
                });
            }),
          Ln(t, n),
          n
        );
      }
      function Ln(t, e) {
        tt(e, function (e, n) {
          t.springs[n] || ((t.springs[n] = e), Wt(e, t));
        });
      }
      function Mn(t, e) {
        var n = new kn();
        return (n.key = t), e && Wt(n, e), n;
      }
      function qn(t, e, n) {
        e.keys &&
          K(e.keys, function (r) {
            (t[r] || (t[r] = n(r)))._prepareNode(e);
          });
      }
      function Fn(t, e) {
        K(e, function (e) {
          qn(t.springs, e, function (e) {
            return Mn(e, t);
          });
        });
      }
      function zn(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = {},
          o = Object.keys(t);
        for (r = 0; r < o.length; r++)
          (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i;
      }
      var Un,
        Dn,
        Qn = ['children'],
        Gn = function (t) {
          var e,
            n,
            i,
            o,
            a,
            u,
            s,
            c = t.children,
            l = zn(t, Qn),
            f = (0, r.useContext)(Bn),
            d = l.pause || !!f.pause,
            h = l.immediate || !!f.immediate;
          (e = function () {
            return { pause: d, immediate: h };
          }),
            (n = [d, h]),
            (i = (0, r.useState)(function () {
              return { inputs: n, result: e() };
            })),
            (o = (0, p.Z)(i, 1)[0]),
            (a = (0, r.useRef)()),
            (u = a.current),
            (s = u)
              ? Boolean(
                  n &&
                    s.inputs &&
                    (function (t, e) {
                      if (t.length !== e.length) return !1;
                      for (var n = 0; n < t.length; n++)
                        if (t[n] !== e[n]) return !1;
                      return !0;
                    })(n, s.inputs),
                ) || (s = { inputs: n, result: e() })
              : (s = o),
            (0, r.useEffect)(
              function () {
                (a.current = s), u == o && (o.inputs = o.result = void 0);
              },
              [s],
            ),
            (l = s.result);
          var v = Bn.Provider;
          return r.createElement(v, { value: l }, c);
        },
        Bn =
          ((Un = Gn),
          (Dn = {}),
          Object.assign(Un, r.createContext(Dn)),
          (Un.Provider._context = Un),
          (Un.Consumer._context = Un),
          Un);
      (Gn.Provider = Bn.Provider), (Gn.Consumer = Bn.Consumer);
      var Wn = function () {
        var t = [],
          e = function (e) {
            ue(
              ''.concat(
                re,
                'Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions',
              ),
            );
            var r = [];
            return (
              K(t, function (t, i) {
                if (J.und(e)) r.push(t.start());
                else {
                  var o = n(e, t, i);
                  o && r.push(t.start(o));
                }
              }),
              r
            );
          };
        (e.current = t),
          (e.add = function (e) {
            t.includes(e) || t.push(e);
          }),
          (e.delete = function (e) {
            var n = t.indexOf(e);
            ~n && t.splice(n, 1);
          }),
          (e.pause = function () {
            var e = arguments;
            return (
              K(t, function (t) {
                return t.pause.apply(t, (0, _.Z)(e));
              }),
              this
            );
          }),
          (e.resume = function () {
            var e = arguments;
            return (
              K(t, function (t) {
                return t.resume.apply(t, (0, _.Z)(e));
              }),
              this
            );
          }),
          (e.set = function (e) {
            K(t, function (t) {
              return t.set(e);
            });
          }),
          (e.start = function (e) {
            var n = this,
              r = [];
            return (
              K(t, function (t, i) {
                if (J.und(e)) r.push(t.start());
                else {
                  var o = n._getProps(e, t, i);
                  o && r.push(t.start(o));
                }
              }),
              r
            );
          }),
          (e.stop = function () {
            var e = arguments;
            return (
              K(t, function (t) {
                return t.stop.apply(t, (0, _.Z)(e));
              }),
              this
            );
          }),
          (e.update = function (e) {
            var n = this;
            return (
              K(t, function (t, r) {
                return t.update(n._getProps(e, t, r));
              }),
              this
            );
          });
        var n = function (t, e, n) {
          return J.fun(t) ? t(n, e) : t;
        };
        return (e._getProps = n), e;
      };
      function $n(t, e, n) {
        var i = arguments,
          o = J.fun(e) && e;
        o && !n && (n = []);
        var a = (0, r.useMemo)(function () {
            return o || 3 == i.length ? Wn() : void 0;
          }, []),
          u = (0, r.useRef)(0),
          s = fe(),
          c = (0, r.useMemo)(function () {
            return {
              ctrls: [],
              queue: [],
              flush: function (t, e) {
                var n = Tn(t, e);
                return u.current > 0 &&
                  !c.queue.length &&
                  !Object.keys(n).some(function (e) {
                    return !t.springs[e];
                  })
                  ? Nn(t, e)
                  : new Promise(function (r) {
                      Ln(t, n),
                        c.queue.push(function () {
                          r(Nn(t, e));
                        }),
                        s();
                    });
              },
            };
          }, []),
          l = (0, r.useRef)((0, _.Z)(c.ctrls)),
          f = [],
          d = he(t) || 0;
        function h(t, n) {
          for (var r = t; r < n; r++) {
            var i = l.current[r] || (l.current[r] = new jn(null, c.flush)),
              a = o ? o(r, i) : e[r];
            a && (f[r] = Pn(a));
          }
        }
        (0, r.useMemo)(
          function () {
            K(l.current.slice(t, d), function (t) {
              Ye(t, a), t.stop(!0);
            }),
              (l.current.length = t),
              h(d, t);
          },
          [t],
        ),
          (0, r.useMemo)(function () {
            h(0, Math.min(d, t));
          }, n);
        var v = l.current.map(function (t, e) {
            return Tn(t, f[e]);
          }),
          p = (0, r.useContext)(Gn),
          m = he(p),
          y = p !== m && We(p);
        ve(function () {
          u.current++, (c.ctrls = l.current);
          var t = c.queue;
          t.length &&
            ((c.queue = []),
            K(t, function (t) {
              return t();
            })),
            K(l.current, function (t, e) {
              null == a || a.add(t), y && t.start({ default: p });
              var n = f[e];
              n && (He(t, n.ref), t.ref ? t.queue.push(n) : t.start(n));
            });
        }),
          ce(function () {
            return function () {
              K(c.ctrls, function (t) {
                return t.stop(!0);
              });
            };
          });
        var g = v.map(function (t) {
          return Te({}, t);
        });
        return a ? [g, a] : g;
      }
      var Yn;
      function Hn(t, e, n) {
        var i = arguments,
          o = J.fun(e) && e,
          a = o ? o() : e,
          u = a.reset,
          s = a.sort,
          c = a.trail,
          l = void 0 === c ? 0 : c,
          f = a.expires,
          d = void 0 === f || f,
          h = a.onDestroyed,
          v = a.ref,
          p = a.config,
          m = (0, r.useMemo)(function () {
            return o || 3 == i.length ? Wn() : void 0;
          }, []),
          y = et(t),
          g = [],
          b = (0, r.useRef)(null),
          w = u ? null : b.current;
        ve(function () {
          b.current = g;
        }),
          ce(function () {
            return function () {
              return K(b.current, function (t) {
                t.expired && clearTimeout(t.expirationId),
                  Ye(t.ctrl, m),
                  t.ctrl.stop(!0);
              });
            };
          });
        var k = Xn(y, o ? o() : e, w),
          _ = (u && b.current) || [];
        ve(function () {
          return K(_, function (t) {
            var e = t.ctrl,
              n = t.item,
              r = t.key;
            Ye(e, m), Le(h, n, r);
          });
        });
        var x = [];
        if (
          (w &&
            K(w, function (t, e) {
              t.expired
                ? (clearTimeout(t.expirationId), _.push(t))
                : ~(e = x[e] = k.indexOf(t.key)) && (g[e] = t);
            }),
          K(y, function (t, e) {
            g[e] ||
              ((g[e] = { key: k[e], item: t, phase: Yn.MOUNT, ctrl: new jn() }),
              (g[e].ctrl.item = t));
          }),
          x.length)
        ) {
          var E = -1,
            P = o ? o() : e,
            Z = P.leave;
          K(x, function (t, e) {
            var n = w[e];
            ~t
              ? ((E = g.indexOf(n)), (g[E] = Te({}, n, { item: y[t] })))
              : Z && g.splice(++E, 0, n);
          });
        }
        J.fun(s) &&
          g.sort(function (t, e) {
            return s(t.item, e.item);
          });
        var S = -l,
          A = fe(),
          O = Ue(e),
          R = new Map();
        K(g, function (t, n) {
          var r,
            i,
            a = t.key,
            u = t.phase,
            s = o ? o() : e,
            c = Le(s.delay || 0, a);
          if (u == Yn.MOUNT) (r = s.enter), (i = Yn.ENTER);
          else {
            var f = k.indexOf(a) < 0;
            if (u != Yn.LEAVE)
              if (f) (r = s.leave), (i = Yn.LEAVE);
              else {
                if (!(r = s.update)) return;
                i = Yn.UPDATE;
              }
            else {
              if (f) return;
              (r = s.enter), (i = Yn.ENTER);
            }
          }
          if (
            ((r = Le(r, t.item, n)), !(r = J.obj(r) ? Ge(r) : { to: r }).config)
          ) {
            var h = p || O.config;
            r.config = Le(h, t.item, n, i);
          }
          var m = Te(
            {},
            O,
            { delay: c + (S += l), ref: v, immediate: s.immediate, reset: !1 },
            r,
          );
          if (i == Yn.ENTER && J.und(m.from)) {
            var y = o ? o() : e,
              g = J.und(y.initial) || w ? y.from : y.initial;
            m.from = Le(g, t.item, n);
          }
          var _ = m.onResolve;
          m.onResolve = function (t) {
            Le(_, t);
            var e = b.current,
              n = e.find(function (t) {
                return t.key === a;
              });
            if (n && (!t.cancelled || n.phase == Yn.UPDATE) && n.ctrl.idle) {
              var r = e.every(function (t) {
                return t.ctrl.idle;
              });
              if (n.phase == Yn.LEAVE) {
                var i = Le(d, n.item);
                if (!1 !== i) {
                  var o = !0 === i ? 0 : i;
                  if (((n.expired = !0), !r && o > 0))
                    return void (
                      o <= 2147483647 && (n.expirationId = setTimeout(A, o))
                    );
                }
              }
              r &&
                e.some(function (t) {
                  return t.expired;
                }) &&
                A();
            }
          };
          var x = Tn(t.ctrl, m);
          R.set(t, { phase: i, springs: x, payload: m });
        });
        var C = (0, r.useContext)(Gn),
          j = he(C),
          N = C !== j && We(C);
        ve(
          function () {
            N &&
              K(g, function (t) {
                t.ctrl.start({ default: C });
              });
          },
          [C],
        ),
          ve(
            function () {
              K(R, function (t, e) {
                var n = t.phase,
                  r = t.payload,
                  i = e.ctrl;
                (e.phase = n),
                  null == m || m.add(i),
                  N && n == Yn.ENTER && i.start({ default: C }),
                  r && (He(i, r.ref), i.ref ? i.update(r) : i.start(r));
              });
            },
            u ? void 0 : n,
          );
        var I = function (t) {
          return r.createElement(
            r.Fragment,
            null,
            g.map(function (e, n) {
              var i = (R.get(e) || e.ctrl).springs,
                o = t(Te({}, i), e.item, e, n);
              return o && o.type
                ? r.createElement(
                    o.type,
                    Te({}, o.props, {
                      key: J.str(e.key) || J.num(e.key) ? e.key : e.ctrl.id,
                      ref: o.ref,
                    }),
                  )
                : o;
            }),
          );
        };
        return m ? [I, m] : I;
      }
      !(function (t) {
        (t.MOUNT = 'mount'),
          (t.ENTER = 'enter'),
          (t.UPDATE = 'update'),
          (t.LEAVE = 'leave');
      })(Yn || (Yn = {}));
      var Jn = 1;
      function Xn(t, e, n) {
        var r = e.key,
          i = e.keys,
          o = void 0 === i ? r : i;
        if (null === o) {
          var a = new Set();
          return t.map(function (t) {
            var e =
              n &&
              n.find(function (e) {
                return e.item === t && e.phase !== Yn.LEAVE && !a.has(e);
              });
            return e ? (a.add(e), e.key) : Jn++;
          });
        }
        return J.und(o) ? t : J.fun(o) ? t.map(o) : et(o);
      }
      var Kn = ['children'];
      function tr(t) {
        return (0, t.children)(
          (function (t, e) {
            var n = J.fun(t),
              r = $n(1, n ? t : [t], n ? e || [] : e),
              i = (0, p.Z)(r, 2),
              o = (0, p.Z)(i[0], 1)[0],
              a = i[1];
            return n || 2 == arguments.length ? [o, a] : o;
          })(zn(t, Kn)),
        );
      }
      var er = (function (t) {
        (0, g.Z)(n, t);
        var e = Ne(n);
        function n(t, r) {
          var i;
          (0, y.Z)(this, n),
            ((i = e.call(this)).key = void 0),
            (i.idle = !0),
            (i.calc = void 0),
            (i._active = new Set()),
            (i.source = t),
            (i.calc = Lt.apply(void 0, (0, _.Z)(r)));
          var o = i._get(),
            a = Se(o);
          return ge((0, k.Z)(i), a.create(o)), i;
        }
        return (
          (0, m.Z)(n, [
            {
              key: 'advance',
              value: function (t) {
                var e = this._get();
                X(e, this.get()) ||
                  (ye(this).setValue(e), this._onChange(e, this.idle)),
                  !this.idle && rr(this._active) && ir(this);
              },
            },
            {
              key: '_get',
              value: function () {
                var t = J.arr(this.source)
                  ? this.source.map(Ut)
                  : et(Ut(this.source));
                return this.calc.apply(this, (0, _.Z)(t));
              },
            },
            {
              key: '_start',
              value: function () {
                var t = this;
                this.idle &&
                  !rr(this._active) &&
                  ((this.idle = !1),
                  K(be(this), function (t) {
                    t.done = !1;
                  }),
                  ct.skipAnimation
                    ? (N.batchedUpdates(function () {
                        return t.advance();
                      }),
                      ir(this))
                    : vt.start(this));
              },
            },
            {
              key: '_attach',
              value: function () {
                var t = this,
                  e = 1;
                K(et(this.source), function (n) {
                  zt(n) && Wt(n, t),
                    dn(n) &&
                      (n.idle || t._active.add(n),
                      (e = Math.max(e, n.priority + 1)));
                }),
                  (this.priority = e),
                  this._start();
              },
            },
            {
              key: '_detach',
              value: function () {
                var t = this;
                K(et(this.source), function (e) {
                  zt(e) && $t(e, t);
                }),
                  this._active.clear(),
                  ir(this);
              },
            },
            {
              key: 'eventObserved',
              value: function (t) {
                'change' == t.type
                  ? t.idle
                    ? this.advance()
                    : (this._active.add(t.parent), this._start())
                  : 'idle' == t.type
                  ? this._active.delete(t.parent)
                  : 'priority' == t.type &&
                    (this.priority = et(this.source).reduce(function (t, e) {
                      return Math.max(t, (dn(e) ? e.priority : 0) + 1);
                    }, 0));
              },
            },
          ]),
          n
        );
      })(vn);
      function nr(t) {
        return !1 !== t.idle;
      }
      function rr(t) {
        return !t.size || Array.from(t).every(nr);
      }
      function ir(t) {
        t.idle ||
          ((t.idle = !0),
          K(be(t), function (t) {
            t.done = !0;
          }),
          Qt(t, { type: 'idle', parent: t }));
      }
      ct.assign({
        createStringInterpolator: ne,
        to: function (t, e) {
          return new er(t, e);
        },
      });
      vt.advance;
      var or = n(3935);
      function ar(t) {
        var e = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, w.Z)(t);
          if (e) {
            var i = (0, w.Z)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (0, b.Z)(this, n);
        };
      }
      function ur(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = {},
          o = Object.keys(t);
        for (r = 0; r < o.length; r++)
          (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i;
      }
      var sr = ['style', 'children', 'scrollTop', 'scrollLeft'],
        cr = /^--/;
      function lr(t, e) {
        return null == e || 'boolean' == typeof e || '' === e
          ? ''
          : 'number' != typeof e ||
            0 === e ||
            cr.test(t) ||
            (dr.hasOwnProperty(t) && dr[t])
          ? ('' + e).trim()
          : e + 'px';
      }
      var fr = {};
      var dr = {
          animationIterationCount: !0,
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
        hr = ['Webkit', 'Ms', 'Moz', 'O'];
      dr = Object.keys(dr).reduce(function (t, e) {
        return (
          hr.forEach(function (n) {
            return (t[
              (function (t, e) {
                return t + e.charAt(0).toUpperCase() + e.substring(1);
              })(n, e)
            ] = t[e]);
          }),
          t
        );
      }, dr);
      var vr = ['x', 'y', 'z'],
        pr = /^(matrix|translate|scale|rotate|skew)/,
        mr = /^(translate)/,
        yr = /^(rotate|skew)/,
        gr = function (t, e) {
          return J.num(t) && 0 !== t ? t + e : t;
        },
        br = function t(e, n) {
          return J.arr(e)
            ? e.every(function (e) {
                return t(e, n);
              })
            : J.num(e)
            ? e === n
            : parseFloat(e) === n;
        },
        wr = (function (t) {
          (0, g.Z)(n, t);
          var e = ar(n);
          function n(t) {
            (0, y.Z)(this, n);
            var r = t.x,
              i = t.y,
              o = t.z,
              a = ur(t, vr),
              u = [],
              s = [];
            return (
              (r || i || o) &&
                (u.push([r || 0, i || 0, o || 0]),
                s.push(function (t) {
                  return [
                    'translate3d('.concat(
                      t
                        .map(function (t) {
                          return gr(t, 'px');
                        })
                        .join(','),
                      ')',
                    ),
                    br(t, 0),
                  ];
                })),
              tt(a, function (t, e) {
                if ('transform' === e)
                  u.push([t || '']),
                    s.push(function (t) {
                      return [t, '' === t];
                    });
                else if (pr.test(e)) {
                  if ((delete a[e], J.und(t))) return;
                  var n = mr.test(e) ? 'px' : yr.test(e) ? 'deg' : '';
                  u.push(et(t)),
                    s.push(
                      'rotate3d' === e
                        ? function (t) {
                            var e = (0, p.Z)(t, 4),
                              r = e[0],
                              i = e[1],
                              o = e[2],
                              a = e[3];
                            return [
                              'rotate3d('
                                .concat(r, ',')
                                .concat(i, ',')
                                .concat(o, ',')
                                .concat(gr(a, n), ')'),
                              br(a, 0),
                            ];
                          }
                        : function (t) {
                            return [
                              ''.concat(e, '(').concat(
                                t
                                  .map(function (t) {
                                    return gr(t, n);
                                  })
                                  .join(','),
                                ')',
                              ),
                              br(t, e.startsWith('scale') ? 1 : 0),
                            ];
                          },
                    );
                }
              }),
              u.length && (a.transform = new kr(u, s)),
              e.call(this, a)
            );
          }
          return (0, m.Z)(n);
        })(Ee),
        kr = (function (t) {
          (0, g.Z)(n, t);
          var e = ar(n);
          function n(t, r) {
            var i;
            return (
              (0, y.Z)(this, n),
              ((i = e.call(this))._value = null),
              (i.inputs = t),
              (i.transforms = r),
              i
            );
          }
          return (
            (0, m.Z)(n, [
              {
                key: 'get',
                value: function () {
                  return this._value || (this._value = this._get());
                },
              },
              {
                key: '_get',
                value: function () {
                  var t = this,
                    e = '',
                    n = !0;
                  return (
                    K(this.inputs, function (r, i) {
                      var o = Ut(r[0]),
                        a = t.transforms[i](J.arr(o) ? o : r.map(Ut)),
                        u = (0, p.Z)(a, 2),
                        s = u[0],
                        c = u[1];
                      (e += ' ' + s), (n = n && c);
                    }),
                    n ? 'none' : e
                  );
                },
              },
              {
                key: 'observerAdded',
                value: function (t) {
                  var e = this;
                  1 == t &&
                    K(this.inputs, function (t) {
                      return K(t, function (t) {
                        return zt(t) && Wt(t, e);
                      });
                    });
                },
              },
              {
                key: 'observerRemoved',
                value: function (t) {
                  var e = this;
                  0 == t &&
                    K(this.inputs, function (t) {
                      return K(t, function (t) {
                        return zt(t) && $t(t, e);
                      });
                    });
                },
              },
              {
                key: 'eventObserved',
                value: function (t) {
                  'change' == t.type && (this._value = null), Qt(this, t);
                },
              },
            ]),
            n
          );
        })(Gt),
        _r = ['scrollTop', 'scrollLeft'];
      ct.assign({
        batchedUpdates: or.unstable_batchedUpdates,
        createStringInterpolator: ne,
        colors: {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199,
        },
      });
      var xr = (function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e.applyAnimatedValues,
            r =
              void 0 === n
                ? function () {
                    return !1;
                  }
                : n,
            i = e.createAnimatedStyle,
            o =
              void 0 === i
                ? function (t) {
                    return new Ee(t);
                  }
                : i,
            a = e.getComponentProps,
            u =
              void 0 === a
                ? function (t) {
                    return t;
                  }
                : a,
            s = {
              applyAnimatedValues: r,
              createAnimatedStyle: o,
              getComponentProps: u,
            },
            c = function t(e) {
              var n = je(e) || 'Anonymous';
              return (
                ((e = J.str(e)
                  ? t[e] || (t[e] = Oe(e, s))
                  : e[Ce] || (e[Ce] = Oe(e, s))).displayName =
                  'Animated('.concat(n, ')')),
                e
              );
            };
          return (
            tt(t, function (e, n) {
              J.arr(t) && (n = je(e)), (c[n] = c(e));
            }),
            { animated: c }
          );
        })(
          [
            'a',
            'abbr',
            'address',
            'area',
            'article',
            'aside',
            'audio',
            'b',
            'base',
            'bdi',
            'bdo',
            'big',
            'blockquote',
            'body',
            'br',
            'button',
            'canvas',
            'caption',
            'cite',
            'code',
            'col',
            'colgroup',
            'data',
            'datalist',
            'dd',
            'del',
            'details',
            'dfn',
            'dialog',
            'div',
            'dl',
            'dt',
            'em',
            'embed',
            'fieldset',
            'figcaption',
            'figure',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'head',
            'header',
            'hgroup',
            'hr',
            'html',
            'i',
            'iframe',
            'img',
            'input',
            'ins',
            'kbd',
            'keygen',
            'label',
            'legend',
            'li',
            'link',
            'main',
            'map',
            'mark',
            'menu',
            'menuitem',
            'meta',
            'meter',
            'nav',
            'noscript',
            'object',
            'ol',
            'optgroup',
            'option',
            'output',
            'p',
            'param',
            'picture',
            'pre',
            'progress',
            'q',
            'rp',
            'rt',
            'ruby',
            's',
            'samp',
            'script',
            'section',
            'select',
            'small',
            'source',
            'span',
            'strong',
            'style',
            'sub',
            'summary',
            'sup',
            'table',
            'tbody',
            'td',
            'textarea',
            'tfoot',
            'th',
            'thead',
            'time',
            'title',
            'tr',
            'track',
            'u',
            'ul',
            'var',
            'video',
            'wbr',
            'circle',
            'clipPath',
            'defs',
            'ellipse',
            'foreignObject',
            'g',
            'image',
            'line',
            'linearGradient',
            'mask',
            'path',
            'pattern',
            'polygon',
            'polyline',
            'radialGradient',
            'rect',
            'stop',
            'svg',
            'text',
            'tspan',
          ],
          {
            applyAnimatedValues: function (t, e) {
              if (!t.nodeType || !t.setAttribute) return !1;
              var n =
                  'filter' === t.nodeName ||
                  (t.parentNode && 'filter' === t.parentNode.nodeName),
                r = e,
                i = r.style,
                o = r.children,
                a = r.scrollTop,
                u = r.scrollLeft,
                s = ur(r, sr),
                c = Object.values(s),
                l = Object.keys(s).map(function (e) {
                  return n || t.hasAttribute(e)
                    ? e
                    : fr[e] ||
                        (fr[e] = e.replace(/([A-Z])/g, function (t) {
                          return '-' + t.toLowerCase();
                        }));
                });
              for (var f in (void 0 !== o && (t.textContent = o), i))
                if (i.hasOwnProperty(f)) {
                  var d = lr(f, i[f]);
                  cr.test(f) ? t.style.setProperty(f, d) : (t.style[f] = d);
                }
              l.forEach(function (e, n) {
                t.setAttribute(e, c[n]);
              }),
                void 0 !== a && (t.scrollTop = a),
                void 0 !== u && (t.scrollLeft = u);
            },
            createAnimatedStyle: function (t) {
              return new wr(t);
            },
            getComponentProps: function (t) {
              return ur(t, _r);
            },
          },
        ),
        Er = xr.animated,
        Pr = n(9797),
        Zr = function (t) {
          var e = (0, r.useRef)();
          return (
            (0, Pr.Z)(function () {
              e.current = t;
            }),
            e.current
          );
        },
        Sr = n(4578),
        Ar = (function (t) {
          function e(e) {
            var n;
            return (
              ((n = t.call(this, e) || this).unmounted = !1),
              (n.reset = function () {
                n.unmounted || n.setState({ shouldAnimate: !1 });
              }),
              (n.state = { diff: [], shouldAnimate: !1, value: null }),
              n
            );
          }
          (0, Sr.Z)(e, t);
          var n = e.prototype;
          return (
            (n.componentWillUnmount = function () {
              this.unmounted = !0;
            }),
            (e.getDerivedStateFromProps = function (t, e) {
              var n = t.value,
                r = t.dir,
                i = t.sign;
              if (n !== e.value) {
                var o,
                  a = (function (t, e, n, r) {
                    var i = [];
                    if (e !== t) {
                      for (var o = e, a = r * n; o !== t; )
                        i.push(o), (o = (o + a + 10) % 10);
                      i.push(t), -1 === r && i.reverse();
                    }
                    return i;
                  })(n, null !== (o = e.value) && void 0 !== o ? o : n, r, i);
                return { diff: a, shouldAnimate: a.length > 0, value: n };
              }
              return null;
            }),
            (n.render = function () {
              var t = this.state,
                e = t.diff,
                n = t.shouldAnimate,
                i = t.value,
                o = this.props,
                a = o.baseCls,
                s = o.sign,
                c = -1 === s;
              return r.createElement(
                'span',
                { className: a },
                r.createElement(
                  'span',
                  {
                    style: { visibility: n ? 'hidden' : void 0 },
                    className: a + '-current',
                  },
                  i,
                ),
                n &&
                  r.createElement(
                    tr,
                    {
                      from: { y: '0%' },
                      to: { y: ((e.length - 1) / e.length) * s * -100 + '%' },
                      onRest: this.reset,
                      reset: !0,
                    },
                    function (t) {
                      var n,
                        i = t.y;
                      return r.createElement(
                        Er.span,
                        {
                          style: { y: i },
                          className: u()(
                            a + '-scroller',
                            ((n = {}), (n[a + '-scroller--reverse'] = c), n),
                          ),
                        },
                        e.map(function (t) {
                          return r.createElement(
                            'span',
                            { className: a + '-scroller-value', key: t },
                            t,
                          );
                        }),
                      );
                    },
                  ),
              );
            }),
            e
          );
        })(r.PureComponent),
        Or = function (t) {
          var e = t.count,
            n = t.showZero,
            i = Zr(e),
            o = (0, s.qt)().getPrefixCls,
            a = e !== i && 0 === e && !n ? i : e,
            u = String(Math.abs(a)).split('').map(Number),
            c = void 0 === i ? 0 : Math.sign(a - i),
            l = a < 0 ? -1 : a > 0 || 0 === c ? 1 : -c;
          return r.createElement(
            'span',
            { title: String(a), className: o('badge-number-wrapper') },
            a < 0 && r.createElement('span', null, '-'),
            u.map(function (t, e) {
              return r.createElement(Ar, {
                baseCls: o('badge-number'),
                dir: l,
                sign: c,
                value: t,
                key: u.length - 1 - e,
              });
            }),
          );
        },
        Rr = (0, r.memo)(Or),
        Cr = [
          'dot',
          'content',
          'children',
          'color',
          'className',
          'showZero',
          'max',
        ];
      function jr(t) {
        var e = 3.70158;
        return 4.70158 * t * t * t - e * t * t;
      }
      function Nr(t) {
        var e = 3.70158;
        return 1 + 4.70158 * Math.pow(t - 1, 3) + e * Math.pow(t - 1, 2);
      }
      var Ir = r.forwardRef(function (t, e) {
          var n = t.dot,
            i = t.content,
            a = t.children,
            c = t.color,
            l = t.className,
            f = t.showZero,
            h = t.max,
            p = void 0 === h ? 99 : h,
            m = (0, o.Z)(t, Cr),
            y = (0, s.qt)().getPrefixCls,
            g = !(d()(n) || !1 === n),
            b = !(d()(i) || (v()(i) && 0 === i && !f)),
            w = (0, r.useState)(!1),
            k = w[0],
            _ = w[1],
            x = Zr(g),
            E = Zr(b),
            P = g || b,
            Z = k && (g === x || b === E),
            S = b ? g : g || g !== x,
            A = Hn(
              P ? [1] : [],
              {
                from: { scale: 0.6 },
                enter: { scale: 1 },
                leave: { scale: 0.6 },
                initial: !1,
                config: function (t, e, n) {
                  return 'enter' === n
                    ? { duration: 220, easing: Nr }
                    : { duration: 180, easing: jr };
                },
              },
              [P],
            )[0];
          (0, r.useEffect)(function () {
            _(!0);
          }, []);
          var O = y('badge'),
            R = d()(a),
            C = function (t, e) {
              var n,
                o = S
                  ? null
                  : v()(i)
                  ? i > p
                    ? p + '+'
                    : r.createElement(Rr, { count: i, showZero: f })
                  : i;
              return r.createElement(
                Er.div,
                {
                  key: e,
                  className: u()(
                    ((n = {}),
                    (n[O + '-fixed'] = !R),
                    (n[O + '-dot'] = S),
                    (n[O + '-content'] = !S),
                    n),
                  ),
                  style: Object.assign({ backgroundColor: c }, t),
                },
                o,
              );
            };
          return r.createElement(
            'div',
            Object.assign({ className: u()(O, l), ref: e }, m),
            a,
            Z
              ? A(function (t, e, n) {
                  var r = t.scale,
                    i = n.key,
                    o = r.to(function (t) {
                      return R
                        ? 'scale(' + t + ')'
                        : 'translate3d(50%, -50%, 0) scale(' + t + ')';
                    });
                  return C({ transform: o, WebkitTransform: o }, i);
                })
              : P && C(),
          );
        }),
        Vr = n(7090),
        Tr = function (t) {
          return null == t || !1 === t;
        },
        Lr = [
          'text',
          'iconSize',
          'icon',
          'dot',
          'max',
          'showZero',
          'className',
          'badge',
          'contentClassName',
          'clickable',
          'component',
        ],
        Mr = Symbol('grid-item'),
        qr = r.forwardRef(function (t, e) {
          var n,
            i = t.text,
            a = t.iconSize,
            c = t.icon,
            l = t.dot,
            f = t.max,
            d = t.showZero,
            h = t.className,
            v = t.badge,
            p = t.contentClassName,
            m = t.clickable,
            y = t.component,
            g = void 0 === y ? 'div' : y,
            b = (0, o.Z)(t, Lr),
            w = (0, (0, s.qt)().getPrefixCls)('grid-item'),
            k = r.createElement(
              'div',
              { className: u()(w + '-content', p) },
              r.createElement(
                Ir,
                { max: f, dot: l, content: v, showZero: d },
                ((n = w + '-icon'),
                r.isValidElement(c)
                  ? r.cloneElement(c, {
                      style: Object.assign(
                        { width: a, height: a, fontSize: a },
                        c.props.style,
                      ),
                      className: u()(c.props.className, n),
                    })
                  : r.createElement(
                      'div',
                      { style: { width: a, height: a }, className: n },
                      c,
                    )),
              ),
              !Tr(i) && r.createElement('div', { className: w + '-text' }, i),
            );
          return r.createElement(
            Vr.Z,
            Object.assign(
              {
                ref: e,
                component: g,
                touchDisabled: !m,
                activeClassName: w + '-active',
                className: u()(w, h),
              },
              m && { role: 'button', tabIndex: 0 },
              b,
            ),
            k,
          );
        });
      qr[Mr] = !0;
      var Fr = (0, l.Z)(qr),
        zr = [
          'children',
          'iconSize',
          'gutter',
          'square',
          'className',
          'direction',
          'style',
          'clickable',
          'border',
          'center',
          'column',
          'component',
        ],
        Ur = r.forwardRef(function (t, e) {
          var n,
            i = t.children,
            a = t.iconSize,
            l = t.gutter,
            f = t.square,
            d = t.className,
            h = t.direction,
            v = t.style,
            p = t.clickable,
            m = t.border,
            y = void 0 === m || m,
            g = t.center,
            b = void 0 === g || g,
            w = t.column,
            k = void 0 === w ? 3 : w,
            _ = t.component,
            x = void 0 === _ ? 'div' : _,
            E = (0, o.Z)(t, zr),
            P = (0, (0, s.qt)().getPrefixCls)('grid'),
            Z = u()(
              P,
              (((n = {})[P + '-horizontal'] = 'horizontal' === h),
              (n[P + '-center'] = b),
              (n[P + '-square'] = f),
              n),
              d,
            ),
            S = function (t, e, n) {
              var r,
                i = Math.ceil(e / k),
                o = t % k,
                a = Math.floor(t / k),
                s = y && a === i - 1,
                c = y && o === k - 1;
              return u()(
                (((r = {})[P + '-item-border-right'] = c || (y && !!l)),
                (r[P + '-item-border-bottom'] = s || (y && !!l)),
                (r[P + '-item-border'] = y),
                r),
                n,
              );
            },
            A = c(i)
              .filter(function (t) {
                return r.isValidElement(t) && t.type && t.type[Mr];
              })
              .map(function (t, e, n) {
                var i,
                  o = n.length;
                return r.cloneElement(t, {
                  iconSize: a,
                  key: null !== (i = t.key) && void 0 !== i ? i : String(e),
                  contentClassName: S(e, o, t.props.contentClassName),
                  className: S(e, o, t.props.className),
                  clickable: p,
                  onClick: p ? t.props.onClick : void 0,
                });
              });
          return r.createElement(
            x,
            Object.assign(
              {
                className: Z,
                style: Object.assign({}, v, {
                  gap: l,
                  gridTemplateColumns: 'repeat(' + k + ', minmax(0, 1fr))',
                }),
                ref: e,
              },
              E,
            ),
            A,
          );
        }),
        Dr = (0, l.Z)(Ur),
        Qr = function () {
          var t = Array.from({ length: 2 }, function (t, e) {
            return { text: '文字是否311233到期hi hi ' + (e + 1) };
          });
          return r.createElement(
            'div',
            null,
            r.createElement(
              Dr,
              { column: 3 },
              t.map(function (t, e) {
                return r.createElement(Fr, {
                  icon:
                    e % 2 == 0
                      ? r.createElement(i.Z_Z, null)
                      : r.createElement(i.LWQ, null),
                  text: t.text,
                  key: t.text,
                  badge: 10,
                });
              }),
            ),
            r.createElement(
              'div',
              null,
              r.createElement(
                Dr,
                { column: 2, clickable: !0 },
                r.createElement(Fr, {
                  dot: !0,
                  text: '文字',
                  icon: r.createElement(i._Dd, null),
                }),
                r.createElement(Fr, {
                  badge: 100,
                  text: '文字',
                  icon: r.createElement(i.l62, null),
                }),
              ),
            ),
          );
        },
        Gr = function (t) {
          return r.createElement(Qr, t);
        };
    },
    5666: function (t) {
      var e = (function (t) {
        'use strict';
        var e,
          n = Object.prototype,
          r = n.hasOwnProperty,
          i = 'function' == typeof Symbol ? Symbol : {},
          o = i.iterator || '@@iterator',
          a = i.asyncIterator || '@@asyncIterator',
          u = i.toStringTag || '@@toStringTag';
        function s(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          s({}, '');
        } catch (C) {
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function c(t, e, n, r) {
          var i = e && e.prototype instanceof m ? e : m,
            o = Object.create(i.prototype),
            a = new A(r || []);
          return (
            (o._invoke = (function (t, e, n) {
              var r = f;
              return function (i, o) {
                if (r === h) throw new Error('Generator is already running');
                if (r === v) {
                  if ('throw' === i) throw o;
                  return R();
                }
                for (n.method = i, n.arg = o; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var u = P(a, n);
                    if (u) {
                      if (u === p) continue;
                      return u;
                    }
                  }
                  if ('next' === n.method) n.sent = n._sent = n.arg;
                  else if ('throw' === n.method) {
                    if (r === f) throw ((r = v), n.arg);
                    n.dispatchException(n.arg);
                  } else 'return' === n.method && n.abrupt('return', n.arg);
                  r = h;
                  var s = l(t, e, n);
                  if ('normal' === s.type) {
                    if (((r = n.done ? v : d), s.arg === p)) continue;
                    return { value: s.arg, done: n.done };
                  }
                  'throw' === s.type &&
                    ((r = v), (n.method = 'throw'), (n.arg = s.arg));
                }
              };
            })(t, n, a)),
            o
          );
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (C) {
            return { type: 'throw', arg: C };
          }
        }
        t.wrap = c;
        var f = 'suspendedStart',
          d = 'suspendedYield',
          h = 'executing',
          v = 'completed',
          p = {};
        function m() {}
        function y() {}
        function g() {}
        var b = {};
        s(b, o, function () {
          return this;
        });
        var w = Object.getPrototypeOf,
          k = w && w(w(O([])));
        k && k !== n && r.call(k, o) && (b = k);
        var _ = (g.prototype = m.prototype = Object.create(b));
        function x(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function E(t, e) {
          function n(i, o, a, u) {
            var s = l(t[i], t, o);
            if ('throw' !== s.type) {
              var c = s.arg,
                f = c.value;
              return f && 'object' == typeof f && r.call(f, '__await')
                ? e.resolve(f.__await).then(
                    function (t) {
                      n('next', t, a, u);
                    },
                    function (t) {
                      n('throw', t, a, u);
                    },
                  )
                : e.resolve(f).then(
                    function (t) {
                      (c.value = t), a(c);
                    },
                    function (t) {
                      return n('throw', t, a, u);
                    },
                  );
            }
            u(s.arg);
          }
          var i;
          this._invoke = function (t, r) {
            function o() {
              return new e(function (e, i) {
                n(t, r, e, i);
              });
            }
            return (i = i ? i.then(o, o) : o());
          };
        }
        function P(t, n) {
          var r = t.iterator[n.method];
          if (r === e) {
            if (((n.delegate = null), 'throw' === n.method)) {
              if (
                t.iterator.return &&
                ((n.method = 'return'),
                (n.arg = e),
                P(t, n),
                'throw' === n.method)
              )
                return p;
              (n.method = 'throw'),
                (n.arg = new TypeError(
                  "The iterator does not provide a 'throw' method",
                ));
            }
            return p;
          }
          var i = l(r, t.iterator, n.arg);
          if ('throw' === i.type)
            return (
              (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), p
            );
          var o = i.arg;
          return o
            ? o.done
              ? ((n[t.resultName] = o.value),
                (n.next = t.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
                (n.delegate = null),
                p)
              : o
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              p);
        }
        function Z(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(Z, this),
            this.reset(!0);
        }
        function O(t) {
          if (t) {
            var n = t[o];
            if (n) return n.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var i = -1,
                a = function n() {
                  for (; ++i < t.length; )
                    if (r.call(t, i)) return (n.value = t[i]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          return { next: R };
        }
        function R() {
          return { value: e, done: !0 };
        }
        return (
          (y.prototype = g),
          s(_, 'constructor', g),
          s(g, 'constructor', y),
          (y.displayName = s(g, u, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === y || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), s(t, u, 'GeneratorFunction')),
              (t.prototype = Object.create(_)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(E.prototype),
          s(E.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new E(c(e, n, r, i), o);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(_),
          s(_, u, 'Generator'),
          s(_, o, function () {
            return this;
          }),
          s(_, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = O),
          (A.prototype = {
            constructor: A,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = e),
                this.tryEntries.forEach(S),
                !t)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function i(r, i) {
                return (
                  (u.type = 'throw'),
                  (u.arg = t),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = e)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  u = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var s = r.call(a, 'catchLoc'),
                    c = r.call(a, 'finallyLoc');
                  if (s && c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (s) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, 'finallyLoc') &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), p)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), S(n), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    S(n);
                  }
                  return i;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: O(t), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = e),
                p
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = e;
      } catch (n) {
        'object' == typeof globalThis
          ? (globalThis.regeneratorRuntime = e)
          : Function('r', 'regeneratorRuntime = r')(e);
      }
    },
    644: function (t) {
      t.exports = function (t) {
        return null == t;
      };
    },
    8581: function (t, e, n) {
      var r = n(9736),
        i = n(2360);
      t.exports = function (t) {
        return 'number' == typeof t || (i(t) && '[object Number]' == r(t));
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-demo-grid-tsx-6f9eb5cfbf8695ec9199.js.map
