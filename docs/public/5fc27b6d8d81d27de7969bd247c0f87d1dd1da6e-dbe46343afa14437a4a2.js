/*! For license information please see 5fc27b6d8d81d27de7969bd247c0f87d1dd1da6e-dbe46343afa14437a4a2.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog =
  self.webpackChunkgatsby_starter_blog || []).push([
  [509],
  {
    8: function (e) {
      function t(c) {
        return (
          (e.exports = t =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(c)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    7715: function (e, t) {
      var c;
      !(function () {
        'use strict';
        var n = {}.hasOwnProperty;
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var c = arguments[t];
            if (c) {
              var i = typeof c;
              if ('string' === i || 'number' === i) e.push(c);
              else if (Array.isArray(c)) {
                if (c.length) {
                  var s = r.apply(null, c);
                  s && e.push(s);
                }
              } else if ('object' === i)
                if (c.toString === Object.prototype.toString)
                  for (var l in c) n.call(c, l) && c[l] && e.push(l);
                else e.push(c.toString());
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (c = function () {
                return r;
              }.apply(t, [])) || (e.exports = c);
      })();
    },
    9662: function (e, t, c) {
      var n = c(7854),
        r = c(614),
        i = c(6330),
        s = n.TypeError;
      e.exports = function (e) {
        if (r(e)) return e;
        throw s(i(e) + ' is not a function');
      };
    },
    9670: function (e, t, c) {
      var n = c(7854),
        r = c(111),
        i = n.String,
        s = n.TypeError;
      e.exports = function (e) {
        if (r(e)) return e;
        throw s(i(e) + ' is not an object');
      };
    },
    1318: function (e, t, c) {
      var n = c(5656),
        r = c(1400),
        i = c(6244),
        s = function (e) {
          return function (t, c, s) {
            var l,
              o = n(t),
              a = i(o),
              v = r(s, a);
            if (e && c != c) {
              for (; a > v; ) if ((l = o[v++]) != l) return !0;
            } else
              for (; a > v; v++)
                if ((e || v in o) && o[v] === c) return e || v || 0;
            return !e && -1;
          };
        };
      e.exports = { includes: s(!0), indexOf: s(!1) };
    },
    4326: function (e, t, c) {
      var n = c(1702),
        r = n({}.toString),
        i = n(''.slice);
      e.exports = function (e) {
        return i(r(e), 8, -1);
      };
    },
    9920: function (e, t, c) {
      var n = c(2597),
        r = c(3887),
        i = c(1236),
        s = c(3070);
      e.exports = function (e, t, c) {
        for (var l = r(t), o = s.f, a = i.f, v = 0; v < l.length; v++) {
          var h = l[v];
          n(e, h) || (c && n(c, h)) || o(e, h, a(t, h));
        }
      };
    },
    8880: function (e, t, c) {
      var n = c(9781),
        r = c(3070),
        i = c(9114);
      e.exports = n
        ? function (e, t, c) {
            return r.f(e, t, i(1, c));
          }
        : function (e, t, c) {
            return (e[t] = c), e;
          };
    },
    9114: function (e) {
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        };
      };
    },
    9781: function (e, t, c) {
      var n = c(7293);
      e.exports = !n(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    317: function (e, t, c) {
      var n = c(7854),
        r = c(111),
        i = n.document,
        s = r(i) && r(i.createElement);
      e.exports = function (e) {
        return s ? i.createElement(e) : {};
      };
    },
    8113: function (e, t, c) {
      var n = c(5005);
      e.exports = n('navigator', 'userAgent') || '';
    },
    7392: function (e, t, c) {
      var n,
        r,
        i = c(7854),
        s = c(8113),
        l = i.process,
        o = i.Deno,
        a = (l && l.versions) || (o && o.version),
        v = a && a.v8;
      v && (r = (n = v.split('.'))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
        !r &&
          s &&
          (!(n = s.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
          (n = s.match(/Chrome\/(\d+)/)) &&
          (r = +n[1]),
        (e.exports = r);
    },
    748: function (e) {
      e.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf',
      ];
    },
    2109: function (e, t, c) {
      var n = c(7854),
        r = c(1236).f,
        i = c(8880),
        s = c(1320),
        l = c(3505),
        o = c(9920),
        a = c(4705);
      e.exports = function (e, t) {
        var c,
          v,
          h,
          u,
          m,
          w = e.target,
          g = e.global,
          f = e.stat;
        if ((c = g ? n : f ? n[w] || l(w, {}) : (n[w] || {}).prototype))
          for (v in t) {
            if (
              ((u = t[v]),
              (h = e.noTargetGet ? (m = r(c, v)) && m.value : c[v]),
              !a(g ? v : w + (f ? '.' : '#') + v, e.forced) && void 0 !== h)
            ) {
              if (typeof u == typeof h) continue;
              o(u, h);
            }
            (e.sham || (h && h.sham)) && i(u, 'sham', !0), s(c, v, u, e);
          }
      };
    },
    7293: function (e) {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (t) {
          return !0;
        }
      };
    },
    6916: function (e) {
      var t = Function.prototype.call;
      e.exports = t.bind
        ? t.bind(t)
        : function () {
            return t.apply(t, arguments);
          };
    },
    6530: function (e, t, c) {
      var n = c(9781),
        r = c(2597),
        i = Function.prototype,
        s = n && Object.getOwnPropertyDescriptor,
        l = r(i, 'name'),
        o = l && 'something' === function () {}.name,
        a = l && (!n || (n && s(i, 'name').configurable));
      e.exports = { EXISTS: l, PROPER: o, CONFIGURABLE: a };
    },
    1702: function (e) {
      var t = Function.prototype,
        c = t.bind,
        n = t.call,
        r = c && c.bind(n);
      e.exports = c
        ? function (e) {
            return e && r(n, e);
          }
        : function (e) {
            return (
              e &&
              function () {
                return n.apply(e, arguments);
              }
            );
          };
    },
    5005: function (e, t, c) {
      var n = c(7854),
        r = c(614),
        i = function (e) {
          return r(e) ? e : void 0;
        };
      e.exports = function (e, t) {
        return arguments.length < 2 ? i(n[e]) : n[e] && n[e][t];
      };
    },
    8173: function (e, t, c) {
      var n = c(9662);
      e.exports = function (e, t) {
        var c = e[t];
        return null == c ? void 0 : n(c);
      };
    },
    7854: function (e, t, c) {
      var n = function (e) {
        return e && e.Math == Math && e;
      };
      e.exports =
        n('object' == typeof globalThis && globalThis) ||
        n('object' == typeof window && window) ||
        n('object' == typeof self && self) ||
        n('object' == typeof c.g && c.g) ||
        (function () {
          return this;
        })() ||
        Function('return this')();
    },
    2597: function (e, t, c) {
      var n = c(1702),
        r = c(7908),
        i = n({}.hasOwnProperty);
      e.exports =
        Object.hasOwn ||
        function (e, t) {
          return i(r(e), t);
        };
    },
    3501: function (e) {
      e.exports = {};
    },
    4664: function (e, t, c) {
      var n = c(9781),
        r = c(7293),
        i = c(317);
      e.exports =
        !n &&
        !r(function () {
          return (
            7 !=
            Object.defineProperty(i('div'), 'a', {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    8361: function (e, t, c) {
      var n = c(7854),
        r = c(1702),
        i = c(7293),
        s = c(4326),
        l = n.Object,
        o = r(''.split);
      e.exports = i(function () {
        return !l('z').propertyIsEnumerable(0);
      })
        ? function (e) {
            return 'String' == s(e) ? o(e, '') : l(e);
          }
        : l;
    },
    2788: function (e, t, c) {
      var n = c(1702),
        r = c(614),
        i = c(5465),
        s = n(Function.toString);
      r(i.inspectSource) ||
        (i.inspectSource = function (e) {
          return s(e);
        }),
        (e.exports = i.inspectSource);
    },
    9909: function (e, t, c) {
      var n,
        r,
        i,
        s = c(8536),
        l = c(7854),
        o = c(1702),
        a = c(111),
        v = c(8880),
        h = c(2597),
        u = c(5465),
        m = c(6200),
        w = c(3501),
        g = 'Object already initialized',
        f = l.TypeError,
        p = l.WeakMap;
      if (s || u.state) {
        var d = u.state || (u.state = new p()),
          z = o(d.get),
          x = o(d.has),
          E = o(d.set);
        (n = function (e, t) {
          if (x(d, e)) throw new f(g);
          return (t.facade = e), E(d, e, t), t;
        }),
          (r = function (e) {
            return z(d, e) || {};
          }),
          (i = function (e) {
            return x(d, e);
          });
      } else {
        var M = m('state');
        (w[M] = !0),
          (n = function (e, t) {
            if (h(e, M)) throw new f(g);
            return (t.facade = e), v(e, M, t), t;
          }),
          (r = function (e) {
            return h(e, M) ? e[M] : {};
          }),
          (i = function (e) {
            return h(e, M);
          });
      }
      e.exports = {
        set: n,
        get: r,
        has: i,
        enforce: function (e) {
          return i(e) ? r(e) : n(e, {});
        },
        getterFor: function (e) {
          return function (t) {
            var c;
            if (!a(t) || (c = r(t)).type !== e)
              throw f('Incompatible receiver, ' + e + ' required');
            return c;
          };
        },
      };
    },
    614: function (e) {
      e.exports = function (e) {
        return 'function' == typeof e;
      };
    },
    4705: function (e, t, c) {
      var n = c(7293),
        r = c(614),
        i = /#|\.prototype\./,
        s = function (e, t) {
          var c = o[l(e)];
          return c == v || (c != a && (r(t) ? n(t) : !!t));
        },
        l = (s.normalize = function (e) {
          return String(e).replace(i, '.').toLowerCase();
        }),
        o = (s.data = {}),
        a = (s.NATIVE = 'N'),
        v = (s.POLYFILL = 'P');
      e.exports = s;
    },
    111: function (e, t, c) {
      var n = c(614);
      e.exports = function (e) {
        return 'object' == typeof e ? null !== e : n(e);
      };
    },
    1913: function (e) {
      e.exports = !1;
    },
    2190: function (e, t, c) {
      var n = c(7854),
        r = c(5005),
        i = c(614),
        s = c(7976),
        l = c(3307),
        o = n.Object;
      e.exports = l
        ? function (e) {
            return 'symbol' == typeof e;
          }
        : function (e) {
            var t = r('Symbol');
            return i(t) && s(t.prototype, o(e));
          };
    },
    6244: function (e, t, c) {
      var n = c(7466);
      e.exports = function (e) {
        return n(e.length);
      };
    },
    133: function (e, t, c) {
      var n = c(7392),
        r = c(7293);
      e.exports =
        !!Object.getOwnPropertySymbols &&
        !r(function () {
          var e = Symbol();
          return (
            !String(e) ||
            !(Object(e) instanceof Symbol) ||
            (!Symbol.sham && n && n < 41)
          );
        });
    },
    8536: function (e, t, c) {
      var n = c(7854),
        r = c(614),
        i = c(2788),
        s = n.WeakMap;
      e.exports = r(s) && /native code/.test(i(s));
    },
    3070: function (e, t, c) {
      var n = c(7854),
        r = c(9781),
        i = c(4664),
        s = c(9670),
        l = c(4948),
        o = n.TypeError,
        a = Object.defineProperty;
      t.f = r
        ? a
        : function (e, t, c) {
            if ((s(e), (t = l(t)), s(c), i))
              try {
                return a(e, t, c);
              } catch (n) {}
            if ('get' in c || 'set' in c) throw o('Accessors not supported');
            return 'value' in c && (e[t] = c.value), e;
          };
    },
    1236: function (e, t, c) {
      var n = c(9781),
        r = c(6916),
        i = c(5296),
        s = c(9114),
        l = c(5656),
        o = c(4948),
        a = c(2597),
        v = c(4664),
        h = Object.getOwnPropertyDescriptor;
      t.f = n
        ? h
        : function (e, t) {
            if (((e = l(e)), (t = o(t)), v))
              try {
                return h(e, t);
              } catch (c) {}
            if (a(e, t)) return s(!r(i.f, e, t), e[t]);
          };
    },
    8006: function (e, t, c) {
      var n = c(6324),
        r = c(748).concat('length', 'prototype');
      t.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return n(e, r);
        };
    },
    5181: function (e, t) {
      t.f = Object.getOwnPropertySymbols;
    },
    7976: function (e, t, c) {
      var n = c(1702);
      e.exports = n({}.isPrototypeOf);
    },
    6324: function (e, t, c) {
      var n = c(1702),
        r = c(2597),
        i = c(5656),
        s = c(1318).indexOf,
        l = c(3501),
        o = n([].push);
      e.exports = function (e, t) {
        var c,
          n = i(e),
          a = 0,
          v = [];
        for (c in n) !r(l, c) && r(n, c) && o(v, c);
        for (; t.length > a; ) r(n, (c = t[a++])) && (~s(v, c) || o(v, c));
        return v;
      };
    },
    5296: function (e, t) {
      'use strict';
      var c = {}.propertyIsEnumerable,
        n = Object.getOwnPropertyDescriptor,
        r = n && !c.call({ 1: 2 }, 1);
      t.f = r
        ? function (e) {
            var t = n(this, e);
            return !!t && t.enumerable;
          }
        : c;
    },
    2140: function (e, t, c) {
      var n = c(7854),
        r = c(6916),
        i = c(614),
        s = c(111),
        l = n.TypeError;
      e.exports = function (e, t) {
        var c, n;
        if ('string' === t && i((c = e.toString)) && !s((n = r(c, e))))
          return n;
        if (i((c = e.valueOf)) && !s((n = r(c, e)))) return n;
        if ('string' !== t && i((c = e.toString)) && !s((n = r(c, e))))
          return n;
        throw l("Can't convert object to primitive value");
      };
    },
    3887: function (e, t, c) {
      var n = c(5005),
        r = c(1702),
        i = c(8006),
        s = c(5181),
        l = c(9670),
        o = r([].concat);
      e.exports =
        n('Reflect', 'ownKeys') ||
        function (e) {
          var t = i.f(l(e)),
            c = s.f;
          return c ? o(t, c(e)) : t;
        };
    },
    1320: function (e, t, c) {
      var n = c(7854),
        r = c(614),
        i = c(2597),
        s = c(8880),
        l = c(3505),
        o = c(2788),
        a = c(9909),
        v = c(6530).CONFIGURABLE,
        h = a.get,
        u = a.enforce,
        m = String(String).split('String');
      (e.exports = function (e, t, c, o) {
        var a,
          h = !!o && !!o.unsafe,
          w = !!o && !!o.enumerable,
          g = !!o && !!o.noTargetGet,
          f = o && void 0 !== o.name ? o.name : t;
        r(c) &&
          ('Symbol(' === String(f).slice(0, 7) &&
            (f = '[' + String(f).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
          (!i(c, 'name') || (v && c.name !== f)) && s(c, 'name', f),
          (a = u(c)).source ||
            (a.source = m.join('string' == typeof f ? f : ''))),
          e !== n
            ? (h ? !g && e[t] && (w = !0) : delete e[t],
              w ? (e[t] = c) : s(e, t, c))
            : w
            ? (e[t] = c)
            : l(t, c);
      })(Function.prototype, 'toString', function () {
        return (r(this) && h(this).source) || o(this);
      });
    },
    4488: function (e, t, c) {
      var n = c(7854).TypeError;
      e.exports = function (e) {
        if (null == e) throw n("Can't call method on " + e);
        return e;
      };
    },
    3505: function (e, t, c) {
      var n = c(7854),
        r = Object.defineProperty;
      e.exports = function (e, t) {
        try {
          r(n, e, { value: t, configurable: !0, writable: !0 });
        } catch (c) {
          n[e] = t;
        }
        return t;
      };
    },
    6200: function (e, t, c) {
      var n = c(2309),
        r = c(9711),
        i = n('keys');
      e.exports = function (e) {
        return i[e] || (i[e] = r(e));
      };
    },
    5465: function (e, t, c) {
      var n = c(7854),
        r = c(3505),
        i = '__core-js_shared__',
        s = n[i] || r(i, {});
      e.exports = s;
    },
    2309: function (e, t, c) {
      var n = c(1913),
        r = c(5465);
      (e.exports = function (e, t) {
        return r[e] || (r[e] = void 0 !== t ? t : {});
      })('versions', []).push({
        version: '3.20.1',
        mode: n ? 'pure' : 'global',
        copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
      });
    },
    1400: function (e, t, c) {
      var n = c(9303),
        r = Math.max,
        i = Math.min;
      e.exports = function (e, t) {
        var c = n(e);
        return c < 0 ? r(c + t, 0) : i(c, t);
      };
    },
    5656: function (e, t, c) {
      var n = c(8361),
        r = c(4488);
      e.exports = function (e) {
        return n(r(e));
      };
    },
    9303: function (e) {
      var t = Math.ceil,
        c = Math.floor;
      e.exports = function (e) {
        var n = +e;
        return n != n || 0 === n ? 0 : (n > 0 ? c : t)(n);
      };
    },
    7466: function (e, t, c) {
      var n = c(9303),
        r = Math.min;
      e.exports = function (e) {
        return e > 0 ? r(n(e), 9007199254740991) : 0;
      };
    },
    7908: function (e, t, c) {
      var n = c(7854),
        r = c(4488),
        i = n.Object;
      e.exports = function (e) {
        return i(r(e));
      };
    },
    7593: function (e, t, c) {
      var n = c(7854),
        r = c(6916),
        i = c(111),
        s = c(2190),
        l = c(8173),
        o = c(2140),
        a = c(5112),
        v = n.TypeError,
        h = a('toPrimitive');
      e.exports = function (e, t) {
        if (!i(e) || s(e)) return e;
        var c,
          n = l(e, h);
        if (n) {
          if (
            (void 0 === t && (t = 'default'), (c = r(n, e, t)), !i(c) || s(c))
          )
            return c;
          throw v("Can't convert object to primitive value");
        }
        return void 0 === t && (t = 'number'), o(e, t);
      };
    },
    4948: function (e, t, c) {
      var n = c(7593),
        r = c(2190);
      e.exports = function (e) {
        var t = n(e, 'string');
        return r(t) ? t : t + '';
      };
    },
    6330: function (e, t, c) {
      var n = c(7854).String;
      e.exports = function (e) {
        try {
          return n(e);
        } catch (t) {
          return 'Object';
        }
      };
    },
    9711: function (e, t, c) {
      var n = c(1702),
        r = 0,
        i = Math.random(),
        s = n((1).toString);
      e.exports = function (e) {
        return 'Symbol(' + (void 0 === e ? '' : e) + ')_' + s(++r + i, 36);
      };
    },
    3307: function (e, t, c) {
      var n = c(133);
      e.exports = n && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
    },
    5112: function (e, t, c) {
      var n = c(7854),
        r = c(2309),
        i = c(2597),
        s = c(9711),
        l = c(133),
        o = c(3307),
        a = r('wks'),
        v = n.Symbol,
        h = v && v.for,
        u = o ? v : (v && v.withoutSetter) || s;
      e.exports = function (e) {
        if (!i(a, e) || (!l && 'string' != typeof a[e])) {
          var t = 'Symbol.' + e;
          l && i(v, e) ? (a[e] = v[e]) : (a[e] = o && h ? h(t) : u(t));
        }
        return a[e];
      };
    },
    5438: function (e, t, c) {
      var n = c(2109),
        r = Math.hypot,
        i = Math.abs,
        s = Math.sqrt;
      n(
        { target: 'Math', stat: !0, forced: !!r && r(1 / 0, NaN) !== 1 / 0 },
        {
          hypot: function (e, t) {
            for (var c, n, r = 0, l = 0, o = arguments.length, a = 0; l < o; )
              a < (c = i(arguments[l++]))
                ? ((r = r * (n = a / c) * n + 1), (a = c))
                : (r += c > 0 ? (n = c / a) * n : c);
            return a === 1 / 0 ? 1 / 0 : a * s(r);
          },
        },
      );
    },
    9797: function (e, t, c) {
      'use strict';
      c.d(t, {
        Z: function () {
          return i;
        },
      });
      var n,
        r = c(7294),
        i =
          'undefined' != typeof window &&
          (null === (n = window.document) || void 0 === n
            ? void 0
            : n.createElement)
            ? r.useLayoutEffect
            : r.useEffect;
    },
    2058: function (e, t, c) {
      'use strict';
      c.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = c(7294),
        r = function (e) {
          var t = (0, n.useRef)(),
            c = (0, n.useRef)(e);
          return (
            (c.current = e),
            t.current ||
              (t.current = function () {
                for (
                  var e = c.current,
                    t = arguments.length,
                    n = new Array(t),
                    r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return null == e ? void 0 : e.apply(void 0, n);
              }),
            t.current
          );
        },
        i = function (e, t) {
          'function' == typeof e ? e(t) : e && (e.current = t);
        };
      function s() {
        for (var e = arguments.length, t = new Array(e), c = 0; c < e; c++)
          t[c] = arguments[c];
        var n = r(function (e) {
          t.filter(Boolean).forEach(function (t) {
            i(t, e);
          });
        });
        return n;
      }
    },
    460: function (e, t) {
      'use strict';
      t.Z = function (e) {
        return e;
      };
    },
    3921: function (e, t, c) {
      'use strict';
      c.d(t, {
        qt: function () {
          return s;
        },
      });
      var n = c(7294),
        r = {
          getPrefixCls: function (e, t) {
            return (null != t ? t : 'rmcv') + (e ? '-' + e : '');
          },
          theme: {},
          prefix: 'rmcv',
        },
        i = (0, n.createContext)(Object.assign({}, r)),
        s =
          (i.Provider,
          function () {
            return (0, n.useContext)(i);
          });
    },
    7090: function (e, t, c) {
      'use strict';
      c.d(t, {
        Z: function () {
          return He;
        },
      });
      var n = c(3366),
        r = c(2982),
        i = c(7326),
        s = c(8052),
        l = c(136),
        o = c(2963),
        a = c(1120);
      var v = c(5671),
        h = c(3144),
        u = c(885);
      c(5438);
      function m(e, t, c) {
        return Math.max(t, Math.min(e, c));
      }
      var w = function (e, t) {
          return void 0 === e && (e = t), Array.isArray(e) ? e : [e, e];
        },
        g = function (e, t) {
          return [e[0] + t[0], e[1] + t[1]];
        },
        f = function (e, t) {
          return [e[0] - t[0], e[1] - t[1]];
        },
        p = function (e, t) {
          (e[0] += t[0]), (e[1] += t[1]);
        };
      function d(e, t, c) {
        return 0 === t || Math.abs(t) === 1 / 0
          ? Math.pow(e, 5 * c)
          : (e * t * c) / (t + c * e);
      }
      function z(e, t, c) {
        var n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.15;
        return 0 === n
          ? m(e, t, c)
          : e < t
          ? -d(t - e, c - t, n) + t
          : e > c
          ? +d(e - c, c - t, n) + c
          : e;
      }
      function x(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var c,
            n = (0, a.Z)(e);
          if (t) {
            var r = (0, a.Z)(this).constructor;
            c = Reflect.construct(n, arguments, r);
          } else c = n.apply(this, arguments);
          return (0, o.Z)(this, c);
        };
      }
      function E(e, t) {
        var c =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!c) {
          if (
            Array.isArray(e) ||
            (c = (function (e, t) {
              if (!e) return;
              if ('string' == typeof e) return M(e, t);
              var c = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === c && e.constructor && (c = e.constructor.name);
              if ('Map' === c || 'Set' === c) return Array.from(e);
              if (
                'Arguments' === c ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
              )
                return M(e, t);
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            c && (e = c);
            var n = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var i,
          s = !0,
          l = !1;
        return {
          s: function () {
            c = c.call(e);
          },
          n: function () {
            var e = c.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (l = !0), (i = e);
          },
          f: function () {
            try {
              s || null == c.return || c.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var c = 0, n = new Array(t); c < t; c++) n[c] = e[c];
        return n;
      }
      function H(e, t, c) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = c),
          e
        );
      }
      function b(e, t) {
        var c = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            c.push.apply(c, n);
        }
        return c;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var c = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(c), !0).forEach(function (t) {
                H(e, t, c[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c))
            : b(Object(c)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(c, t),
                );
              });
        }
        return e;
      }
      var y = {
        pointer: { start: 'down', change: 'move', end: 'up' },
        mouse: { start: 'down', change: 'move', end: 'up' },
        touch: { start: 'start', change: 'move', end: 'end' },
        gesture: { start: 'start', change: 'change', end: 'end' },
      };
      function V(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : '';
      }
      function j(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
          c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = y[e],
          r = (n && n[t]) || t;
        return 'on' + V(e) + V(r) + (c ? 'Capture' : '');
      }
      function B(e) {
        return 'touches' in e;
      }
      function S(e) {
        return B(e)
          ? (function (e) {
              return 'touchend' === e.type ? e.changedTouches : e.targetTouches;
            })(e)[0]
          : e;
      }
      function C(e) {
        return (function (e) {
          return Array.from(e.touches).filter(function (t) {
            var c, n;
            return (
              t.target === e.currentTarget ||
              (null === (c = e.currentTarget) ||
              void 0 === c ||
              null === (n = c.contains) ||
              void 0 === n
                ? void 0
                : n.call(c, t.target))
            );
          });
        })(e).map(function (e) {
          return e.identifier;
        });
      }
      function L(e) {
        var t = S(e);
        return B(e) ? t.identifier : t.pointerId;
      }
      function k(e) {
        var t = S(e);
        return [t.clientX, t.clientY];
      }
      function F(e) {
        if ('function' == typeof e) {
          for (
            var t = arguments.length, c = new Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            c[n - 1] = arguments[n];
          return e.apply(void 0, c);
        }
        return e;
      }
      function _() {}
      function P() {
        for (var e = arguments.length, t = new Array(e), c = 0; c < e; c++)
          t[c] = arguments[c];
        return 0 === t.length
          ? _
          : 1 === t.length
          ? t[0]
          : function () {
              var e,
                c,
                n = E(t);
              try {
                for (n.s(); !(c = n.n()).done; ) {
                  var r = c.value;
                  e = r.apply(this, arguments) || e;
                }
              } catch (i) {
                n.e(i);
              } finally {
                n.f();
              }
              return e;
            };
      }
      function Z(e, t) {
        return Object.assign({}, t, e || {});
      }
      var A = (function () {
        function e(t, c, n) {
          (0, v.Z)(this, e),
            (this.ctrl = t),
            (this.args = c),
            (this.key = n),
            this.state ||
              ((this.state = { values: [0, 0], initial: [0, 0] }),
              this.init && this.init(),
              this.reset());
        }
        return (
          (0, h.Z)(e, [
            {
              key: 'state',
              get: function () {
                return this.ctrl.state[this.key];
              },
              set: function (e) {
                this.ctrl.state[this.key] = e;
              },
            },
            {
              key: 'shared',
              get: function () {
                return this.ctrl.state.shared;
              },
            },
            {
              key: 'eventStore',
              get: function () {
                return this.ctrl.gestureEventStores[this.key];
              },
            },
            {
              key: 'timeoutStore',
              get: function () {
                return this.ctrl.gestureTimeoutStores[this.key];
              },
            },
            {
              key: 'config',
              get: function () {
                return this.ctrl.config[this.key];
              },
            },
            {
              key: 'sharedConfig',
              get: function () {
                return this.ctrl.config.shared;
              },
            },
            {
              key: 'handler',
              get: function () {
                return this.ctrl.handlers[this.key];
              },
            },
            {
              key: 'reset',
              value: function () {
                var e = this.state,
                  t = this.shared,
                  c = this.config,
                  n = this.ingKey,
                  r = this.args,
                  i = c.transform,
                  s = c.threshold;
                (t[n] = e._active = e.active = e._blocked = e._force = !1),
                  (e._step = [!1, !1]),
                  (e.intentional = !1),
                  (e._movement = [0, 0]),
                  (e._distance = [0, 0]),
                  (e._delta = [0, 0]),
                  (e._threshold = f(i(s), i([0, 0])).map(Math.abs)),
                  (e._bounds = [
                    [-1 / 0, 1 / 0],
                    [-1 / 0, 1 / 0],
                  ]),
                  (e.args = r),
                  (e.axis = void 0),
                  (e.memo = void 0),
                  (e.elapsedTime = 0),
                  (e.direction = [0, 0]),
                  (e.distance = [0, 0]),
                  (e.velocity = [0, 0]),
                  (e.movement = [0, 0]),
                  (e.delta = [0, 0]),
                  (e.timeStamp = 0);
              },
            },
            {
              key: 'start',
              value: function (e) {
                var t = this.state,
                  c = this.config;
                t._active ||
                  (this.reset(),
                  (t._active = !0),
                  (t.target = e.target),
                  (t.currentTarget = e.currentTarget),
                  (t.initial = t.values),
                  (t.lastOffset = c.from ? F(c.from, t) : t.offset),
                  (t.offset = t.lastOffset)),
                  (t.startTime = t.timeStamp = e.timeStamp);
              },
            },
            {
              key: 'compute',
              value: function (e) {
                var t = this.state,
                  c = this.config,
                  n = this.shared;
                t.args = this.args;
                var r = 0;
                if (
                  (e &&
                    ((t.event = e),
                    c.preventDefault &&
                      e.cancelable &&
                      t.event.preventDefault(),
                    (t.type = e.type),
                    (n.touches =
                      this.ctrl.pointerIds.size || this.ctrl.touchIds.size),
                    (n.locked = !!document.pointerLockElement),
                    Object.assign(
                      n,
                      (function (e) {
                        var t = {};
                        if (
                          ('buttons' in e && (t.buttons = e.buttons),
                          'shiftKey' in e)
                        ) {
                          var c = e.shiftKey,
                            n = e.altKey,
                            r = e.metaKey,
                            i = e.ctrlKey;
                          Object.assign(t, {
                            shiftKey: c,
                            altKey: n,
                            metaKey: r,
                            ctrlKey: i,
                          });
                        }
                        return t;
                      })(e),
                    ),
                    (n.down = n.pressed = n.buttons % 2 == 1 || n.touches > 0),
                    (r = e.timeStamp - t.timeStamp),
                    (t.timeStamp = e.timeStamp),
                    (t.elapsedTime = t.timeStamp - t.startTime)),
                  t._active)
                ) {
                  var i = t._delta.map(Math.abs);
                  p(t._distance, i);
                }
                var s = c.transform(t._movement),
                  l = (0, u.Z)(s, 2),
                  o = l[0],
                  a = l[1],
                  v = (0, u.Z)(t._threshold, 2),
                  h = v[0],
                  m = v[1],
                  w = (0, u.Z)(t._step, 2),
                  g = w[0],
                  d = w[1];
                if (
                  (!1 === g && (g = Math.abs(o) >= h && Math.sign(o) * h),
                  !1 === d && (d = Math.abs(a) >= m && Math.sign(a) * m),
                  (t.intentional = !1 !== g || !1 !== d),
                  t.intentional)
                ) {
                  t._step = [g, d];
                  var x = [0, 0];
                  if (
                    ((x[0] = !1 !== g ? o - g : 0),
                    (x[1] = !1 !== d ? a - d : 0),
                    this.intent && this.intent(x),
                    ((t._active && !t._blocked) || t.active) &&
                      ((t.first = t._active && !t.active),
                      (t.last = !t._active && t.active),
                      (t.active = n[this.ingKey] = t._active),
                      e))
                  ) {
                    t.first &&
                      ('bounds' in c && (t._bounds = F(c.bounds, t)),
                      this.setup && this.setup()),
                      (t.movement = x);
                    var E = t.offset;
                    if ((this.computeOffset(), !t.last || r > 32)) {
                      t.delta = f(t.offset, E);
                      var M = t.delta.map(Math.abs);
                      p(t.distance, M),
                        (t.direction = t.delta.map(Math.sign)),
                        !t.first &&
                          r > 0 &&
                          (t.velocity = [M[0] / r, M[1] / r]);
                    }
                  }
                  var H,
                    b,
                    O,
                    y,
                    V,
                    j,
                    B,
                    S,
                    C,
                    L,
                    k,
                    _,
                    P,
                    Z,
                    A,
                    T,
                    D = (t._active && c.rubberband) || [0, 0];
                  (t.offset =
                    ((H = t._bounds),
                    (b = t.offset),
                    (O = D),
                    (y = (0, u.Z)(b, 2)),
                    (V = y[0]),
                    (j = y[1]),
                    (B = (0, u.Z)(O, 2)),
                    (S = B[0]),
                    (C = B[1]),
                    (L = (0, u.Z)(H, 2)),
                    (k = (0, u.Z)(L[0], 2)),
                    (_ = k[0]),
                    (P = k[1]),
                    (Z = (0, u.Z)(L[1], 2)),
                    (A = Z[0]),
                    (T = Z[1]),
                    [z(V, _, P, S), z(j, A, T, C)])),
                    this.computeMovement();
                }
              },
            },
            {
              key: 'emit',
              value: function () {
                var e = this.state,
                  t = this.shared,
                  c = this.config;
                if (
                  (e._active || this.clean(),
                  (!e._blocked && e.intentional) ||
                    e._force ||
                    c.triggerAllEvents)
                ) {
                  var n,
                    r,
                    i,
                    s = this.handler(
                      O(
                        O(O({}, t), e),
                        {},
                        ((n = {}),
                        (r = this.aliasKey),
                        (i = e.values),
                        r in n
                          ? Object.defineProperty(n, r, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (n[r] = i),
                        n),
                      ),
                    );
                  void 0 !== s && (e.memo = s);
                }
              },
            },
            {
              key: 'clean',
              value: function () {
                this.eventStore.clean(), this.timeoutStore.clean();
              },
            },
          ]),
          e
        );
      })();
      var T = (function (e) {
          (0, l.Z)(c, e);
          var t = x(c);
          function c() {
            var e;
            (0, v.Z)(this, c);
            for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
              r[s] = arguments[s];
            return (
              (e = t.call.apply(t, [this].concat(r))),
              H((0, i.Z)(e), 'aliasKey', 'xy'),
              e
            );
          }
          return (
            (0, h.Z)(c, [
              {
                key: 'reset',
                value: function () {
                  (0, s.Z)((0, a.Z)(c.prototype), 'reset', this).call(this),
                    (this.state.axis = void 0);
                },
              },
              {
                key: 'init',
                value: function () {
                  (this.state.offset = [0, 0]),
                    (this.state.lastOffset = [0, 0]);
                },
              },
              {
                key: 'computeOffset',
                value: function () {
                  this.state.offset = g(
                    this.state.lastOffset,
                    this.state.movement,
                  );
                },
              },
              {
                key: 'computeMovement',
                value: function () {
                  this.state.movement = f(
                    this.state.offset,
                    this.state.lastOffset,
                  );
                },
              },
              {
                key: 'intent',
                value: function (e) {
                  var t, c, n, r, i;
                  (this.state.axis =
                    this.state.axis ||
                    ((t = e),
                    (c = (0, u.Z)(t, 2)),
                    (n = c[0]),
                    (r = c[1]),
                    (i = Math.abs(n) - Math.abs(r)) > 0
                      ? 'x'
                      : i < 0
                      ? 'y'
                      : void 0)),
                    (this.state._blocked =
                      ((this.config.lockDirection || !!this.config.axis) &&
                        !this.state.axis) ||
                      (!!this.config.axis &&
                        this.config.axis !== this.state.axis)),
                    this.state._blocked ||
                      ((this.config.axis || this.config.lockDirection) &&
                        (function (e, t) {
                          switch (t) {
                            case 'x':
                              e[1] = 0;
                              break;
                            case 'y':
                              e[0] = 0;
                          }
                        })(e, this.state.axis));
                },
              },
            ]),
            c
          );
        })(A),
        D = 0.15,
        I = {
          enabled: function () {
            var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            return e;
          },
          preventDefault: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return e;
          },
          triggerAllEvents: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return e;
          },
          rubberband: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            switch (e) {
              case !0:
                return [D, D];
              case !1:
                return [0, 0];
              default:
                return w(e);
            }
          },
          from: function (e) {
            return 'function' == typeof e ? e : null != e ? w(e) : void 0;
          },
          transform: function (e, t, c) {
            return e || c.shared.transform;
          },
          threshold: function (e) {
            return w(e, 0);
          },
        };
      var R = O(
          O({}, I),
          {},
          {
            axis: function (e, t, c) {
              var n = c.axis;
              if (((this.lockDirection = 'lock' === n), !this.lockDirection))
                return n;
            },
            bounds: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if ('function' == typeof e)
                return function (t) {
                  return R.bounds(e(t));
                };
              if ('current' in e)
                return function () {
                  return e.current;
                };
              if ('function' == typeof HTMLElement && e instanceof HTMLElement)
                return e;
              var t = e.left,
                c = void 0 === t ? -1 / 0 : t,
                n = e.right,
                r = void 0 === n ? 1 / 0 : n,
                i = e.top,
                s = void 0 === i ? -1 / 0 : i,
                l = e.bottom,
                o = void 0 === l ? 1 / 0 : l;
              return [
                [c, r],
                [s, o],
              ];
            },
          },
        ),
        N = 10,
        G = {
          ArrowRight: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            return [N * e, 0];
          },
          ArrowLeft: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            return [-10 * e, 0];
          },
          ArrowUp: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            return [0, -10 * e];
          },
          ArrowDown: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            return [0, N * e];
          },
        },
        K = (function (e) {
          (0, l.Z)(c, e);
          var t = x(c);
          function c() {
            var e;
            (0, v.Z)(this, c);
            for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
              r[s] = arguments[s];
            return (
              (e = t.call.apply(t, [this].concat(r))),
              H((0, i.Z)(e), 'ingKey', 'dragging'),
              e
            );
          }
          return (
            (0, h.Z)(c, [
              {
                key: 'reset',
                value: function () {
                  (0, s.Z)((0, a.Z)(c.prototype), 'reset', this).call(this);
                  var e = this.state;
                  (e._pointerId = void 0),
                    (e._pointerActive = !1),
                    (e._keyboardActive = !1),
                    (e._preventScroll = !1),
                    (e._delayed = !1),
                    (e.swipe = [0, 0]),
                    (e.tap = !1),
                    (e.canceled = !1),
                    (e.cancel = this.cancel.bind(this));
                },
              },
              {
                key: 'setup',
                value: function () {
                  var e = this.state;
                  if (e._bounds instanceof HTMLElement) {
                    var t = e._bounds.getBoundingClientRect(),
                      c = e.currentTarget.getBoundingClientRect(),
                      n = {
                        left: t.left - c.left + e.offset[0],
                        right: t.right - c.right + e.offset[0],
                        top: t.top - c.top + e.offset[1],
                        bottom: t.bottom - c.bottom + e.offset[1],
                      };
                    e._bounds = R.bounds(n);
                  }
                },
              },
              {
                key: 'cancel',
                value: function () {
                  var e = this,
                    t = this.state;
                  t.canceled ||
                    ((t.canceled = !0),
                    (t._active = !1),
                    setTimeout(function () {
                      e.compute(), e.emit();
                    }, 0));
                },
              },
              {
                key: 'setActive',
                value: function () {
                  this.state._active =
                    this.state._pointerActive || this.state._keyboardActive;
                },
              },
              {
                key: 'clean',
                value: function () {
                  this.pointerClean(),
                    (this.state._pointerActive = !1),
                    (this.state._keyboardActive = !1),
                    (0, s.Z)((0, a.Z)(c.prototype), 'clean', this).call(this);
                },
              },
              {
                key: 'pointerDown',
                value: function (e) {
                  var t = this.config,
                    c = this.state;
                  (null == e.buttons ||
                    (Array.isArray(t.pointerButtons)
                      ? t.pointerButtons.includes(e.buttons)
                      : -1 === t.pointerButtons ||
                        t.pointerButtons === e.buttons)) &&
                    (this.ctrl.setEventIds(e),
                    t.pointerCapture && e.target.setPointerCapture(e.pointerId),
                    c._pointerActive ||
                      (this.start(e),
                      this.setupPointer(e),
                      (c._pointerId = L(e)),
                      (c._pointerActive = !0),
                      (c.values = k(e)),
                      (c.initial = c.values),
                      t.preventScroll
                        ? this.setupScrollPrevention(e)
                        : t.delay > 0
                        ? this.setupDelayTrigger(e)
                        : this.startPointerDrag(e)));
                },
              },
              {
                key: 'startPointerDrag',
                value: function (e) {
                  var t = this.state;
                  (t._active = !0),
                    (t._preventScroll = !0),
                    (t._delayed = !1),
                    this.compute(e),
                    this.emit();
                },
              },
              {
                key: 'pointerMove',
                value: function (e) {
                  var t = this.state,
                    c = this.config;
                  if (
                    t._pointerActive &&
                    (t.type !== e.type || e.timeStamp !== t.timeStamp)
                  ) {
                    var n = L(e);
                    if (!t._pointerId || n === t._pointerId) {
                      var r = k(e);
                      return (
                        document.pointerLockElement === e.target
                          ? (t._delta = [e.movementX, e.movementY])
                          : ((t._delta = f(r, t.values)), (t.values = r)),
                        p(t._movement, t._delta),
                        this.compute(e),
                        t._delayed
                          ? (this.timeoutStore.remove('dragDelay'),
                            (t.active = !1),
                            void this.startPointerDrag(e))
                          : c.preventScroll && !t._preventScroll
                          ? t.axis
                            ? t.axis === c.preventScrollAxis ||
                              'xy' === c.preventScrollAxis
                              ? ((t._active = !1), void this.clean())
                              : (this.timeoutStore.remove('startPointerDrag'),
                                void this.startPointerDrag(e))
                            : void 0
                          : void this.emit()
                      );
                    }
                  }
                },
              },
              {
                key: 'pointerUp',
                value: function (e) {
                  this.ctrl.setEventIds(e);
                  try {
                    this.config.pointerCapture &&
                      e.target.hasPointerCapture(e.pointerId) &&
                      e.target.releasePointerCapture(e.pointerId);
                  } catch (b) {
                    0;
                  }
                  var t = this.state,
                    c = this.config;
                  if (t._pointerActive) {
                    var n = L(e);
                    if (!t._pointerId || n === t._pointerId) {
                      (this.state._pointerActive = !1),
                        this.setActive(),
                        this.compute(e);
                      var r = (0, u.Z)(t._distance, 2),
                        i = r[0],
                        s = r[1];
                      if (((t.tap = i <= 3 && s <= 3), t.tap && c.filterTaps))
                        t._force = !0;
                      else {
                        var l = (0, u.Z)(t.direction, 2),
                          o = l[0],
                          a = l[1],
                          v = (0, u.Z)(t.velocity, 2),
                          h = v[0],
                          m = v[1],
                          w = (0, u.Z)(t.movement, 2),
                          g = w[0],
                          f = w[1],
                          p = (0, u.Z)(c.swipe.velocity, 2),
                          d = p[0],
                          z = p[1],
                          x = (0, u.Z)(c.swipe.distance, 2),
                          E = x[0],
                          M = x[1],
                          H = c.swipe.duration;
                        t.elapsedTime < H &&
                          (Math.abs(h) > d &&
                            Math.abs(g) > E &&
                            (t.swipe[0] = o),
                          Math.abs(m) > z &&
                            Math.abs(f) > M &&
                            (t.swipe[1] = a));
                      }
                      this.emit();
                    }
                  }
                },
              },
              {
                key: 'pointerClick',
                value: function (e) {
                  this.state.tap || (e.preventDefault(), e.stopPropagation());
                },
              },
              {
                key: 'setupPointer',
                value: function (e) {
                  var t = this.config,
                    c = t.device;
                  t.pointerLock && e.currentTarget.requestPointerLock(),
                    t.pointerCapture ||
                      (this.eventStore.add(
                        this.sharedConfig.window,
                        c,
                        'change',
                        this.pointerMove.bind(this),
                      ),
                      this.eventStore.add(
                        this.sharedConfig.window,
                        c,
                        'end',
                        this.pointerUp.bind(this),
                      ));
                },
              },
              {
                key: 'pointerClean',
                value: function () {
                  this.config.pointerLock &&
                    document.pointerLockElement === this.state.currentTarget &&
                    document.exitPointerLock();
                },
              },
              {
                key: 'preventScroll',
                value: function (e) {
                  this.state._preventScroll &&
                    e.cancelable &&
                    e.preventDefault();
                },
              },
              {
                key: 'setupScrollPrevention',
                value: function (e) {
                  !(function (e) {
                    'persist' in e &&
                      'function' == typeof e.persist &&
                      e.persist();
                  })(e),
                    this.eventStore.add(
                      this.sharedConfig.window,
                      'touch',
                      'change',
                      this.preventScroll.bind(this),
                      { passive: !1 },
                    ),
                    this.eventStore.add(
                      this.sharedConfig.window,
                      'touch',
                      'end',
                      this.clean.bind(this),
                      { passive: !1 },
                    ),
                    this.eventStore.add(
                      this.sharedConfig.window,
                      'touch',
                      'cancel',
                      this.clean.bind(this),
                      { passive: !1 },
                    ),
                    this.timeoutStore.add(
                      'startPointerDrag',
                      this.startPointerDrag.bind(this),
                      this.config.preventScroll,
                      e,
                    );
                },
              },
              {
                key: 'setupDelayTrigger',
                value: function (e) {
                  (this.state._delayed = !0),
                    this.timeoutStore.add(
                      'dragDelay',
                      this.startPointerDrag.bind(this),
                      this.config.delay,
                      e,
                    );
                },
              },
              {
                key: 'keyDown',
                value: function (e) {
                  var t = G[e.key],
                    c = this.state;
                  if (t) {
                    var n = e.shiftKey ? 10 : e.altKey ? 0.1 : 1;
                    (c._delta = t(n)),
                      this.start(e),
                      (c._keyboardActive = !0),
                      p(c._movement, c._delta),
                      this.compute(e),
                      this.emit();
                  }
                },
              },
              {
                key: 'keyUp',
                value: function (e) {
                  e.key in G &&
                    ((this.state._keyboardActive = !1),
                    this.setActive(),
                    this.compute(e),
                    this.emit());
                },
              },
              {
                key: 'bind',
                value: function (e) {
                  var t = this.config.device;
                  e(t, 'start', this.pointerDown.bind(this)),
                    this.config.pointerCapture &&
                      (e(t, 'change', this.pointerMove.bind(this)),
                      e(t, 'end', this.pointerUp.bind(this)),
                      e(t, 'cancel', this.pointerUp.bind(this))),
                    e('key', 'down', this.keyDown.bind(this)),
                    e('key', 'up', this.keyUp.bind(this)),
                    this.config.filterTaps &&
                      e('click', '', this.pointerClick.bind(this), {
                        capture: !0,
                      });
                },
              },
            ]),
            c
          );
        })(T);
      var U =
        'undefined' != typeof window &&
        window.document &&
        window.document.createElement;
      function W() {
        return U && 'ontouchstart' in window;
      }
      var q = {
          isBrowser: U,
          gesture: (function () {
            try {
              return 'constructor' in GestureEvent;
            } catch (e) {
              return !1;
            }
          })(),
          touch: W(),
          touchscreen: W() || (U && window.navigator.maxTouchPoints > 1),
          pointer: U && 'onpointerdown' in window,
          pointerLock: U && 'exitPointerLock' in window.document,
        },
        Q = O(
          O({}, R),
          {},
          {
            pointerLock: function (e, t, c) {
              var n = c.pointer,
                r = (n = void 0 === n ? {} : n).lock,
                i = void 0 !== r && r,
                s = n.touch,
                l = void 0 !== s && s;
              return (this.useTouch = q.touch && l), q.pointerLock && i;
            },
            device: function (e, t) {
              return this.useTouch
                ? 'touch'
                : this.pointerLock
                ? 'mouse'
                : q.pointer
                ? 'pointer'
                : q.touch
                ? 'touch'
                : 'mouse';
            },
            preventScroll: function () {
              var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = arguments.length > 2 ? arguments[2] : void 0,
                c = t.preventScrollAxis,
                n = void 0 === c ? 'y' : c;
              return (
                n && (this.preventScrollAxis = n),
                !!q.touchscreen && ('number' == typeof e ? e : !!e && 250)
              );
            },
            pointerCapture: function (e, t, c) {
              var n = c.pointer,
                r = (n = void 0 === n ? {} : n).capture,
                i = void 0 === r || r,
                s = n.buttons,
                l = void 0 === s ? 1 : s;
              return (
                (this.pointerButtons = l),
                !this.pointerLock && 'pointer' === this.device && i
              );
            },
            threshold: function (e, t, c) {
              var n = c.filterTaps,
                r = void 0 !== n && n,
                i = c.axis,
                s = w(e, r ? 3 : (void 0 === i ? void 0 : i) ? 1 : 0);
              return (this.filterTaps = r), s;
            },
            swipe: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.velocity,
                c = void 0 === t ? 0.5 : t,
                n = e.distance,
                r = void 0 === n ? 50 : n,
                i = e.duration,
                s = void 0 === i ? 250 : i;
              return {
                velocity: this.transform(w(c)),
                distance: this.transform(w(r)),
                duration: s,
              };
            },
            delay: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              switch (e) {
                case !0:
                  return 180;
                case !1:
                  return 0;
                default:
                  return e;
              }
            },
          },
        );
      O(
        O({}, I),
        {},
        {
          useTouch: function (e, t, c) {
            var n = c.pointer,
              r = (n = void 0 === n ? {} : n).touch;
            return q.touch && void 0 !== r && r;
          },
          device: function (e, t, c) {
            if (c.shared.target && !q.touch && q.gesture) return 'gesture';
            if (this.useTouch) return 'touch';
            if (q.touchscreen) {
              if (q.pointer) return 'pointer';
              if (q.touch) return 'touch';
            }
          },
          bounds: function (e, t, c) {
            var n = c.scaleBounds,
              r = void 0 === n ? {} : n,
              i = c.angleBounds,
              s = void 0 === i ? {} : i,
              l = function (e) {
                var t = Z(F(r, e), { min: -1 / 0, max: 1 / 0 });
                return [t.min, t.max];
              },
              o = function (e) {
                var t = Z(F(s, e), { min: -1 / 0, max: 1 / 0 });
                return [t.min, t.max];
              };
            return 'function' != typeof r && 'function' != typeof s
              ? [l(), o()]
              : function (e) {
                  return [l(e), o(e)];
                };
          },
          threshold: function (e, t, c) {
            this.lockDirection = 'lock' === c.axis;
            var n = w(e, this.lockDirection ? [0.1, 3] : 0);
            return n;
          },
        },
      ),
        O(
          O({}, R),
          {},
          {
            mouseOnly: function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return e;
            },
          },
        ),
        O(
          O({}, R),
          {},
          {
            mouseOnly: function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return e;
            },
          },
        );
      var Y = new Map(),
        X = new Map();
      function $(e) {
        Y.set(e.key, e.engine), X.set(e.key, e.resolver);
      }
      var J = { key: 'drag', engine: K, resolver: Q },
        ee = c(7294);
      function te(e, t) {
        var c =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!c) {
          if (
            Array.isArray(e) ||
            (c = (function (e, t) {
              if (!e) return;
              if ('string' == typeof e) return ce(e, t);
              var c = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === c && e.constructor && (c = e.constructor.name);
              if ('Map' === c || 'Set' === c) return Array.from(e);
              if (
                'Arguments' === c ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
              )
                return ce(e, t);
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            c && (e = c);
            var n = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var i,
          s = !0,
          l = !1;
        return {
          s: function () {
            c = c.call(e);
          },
          n: function () {
            var e = c.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (l = !0), (i = e);
          },
          f: function () {
            try {
              s || null == c.return || c.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function ce(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var c = 0, n = new Array(t); c < t; c++) n[c] = e[c];
        return n;
      }
      function ne(e, t) {
        if (null == e) return {};
        var c,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var c,
              n,
              r = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (c = i[n]), t.indexOf(c) >= 0 || (r[c] = e[c]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (c = i[n]),
              t.indexOf(c) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, c) &&
                  (r[c] = e[c]));
        }
        return r;
      }
      var re = function (e) {
          return e;
        },
        ie = {
          target: function (e) {
            if (e)
              return function () {
                return 'current' in e ? e.current : e;
              };
          },
          enabled: function () {
            var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            return e;
          },
          window: (function (e) {
            function t() {
              return e.apply(this, arguments);
            }
            return (
              (t.toString = function () {
                return e.toString();
              }),
              t
            );
          })(function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : q.isBrowser
                ? window
                : void 0;
            return e;
          }),
          eventOptions: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.passive,
              c = void 0 === t || t,
              n = e.capture,
              r = void 0 !== n && n;
            return { passive: c, capture: r };
          },
          transform: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : re;
            return e;
          },
        },
        se = ['target', 'eventOptions', 'window', 'enabled', 'transform'];
      function le() {
        for (
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0,
            c = {},
            n = 0,
            r = Object.entries(t);
          n < r.length;
          n++
        ) {
          var i = (0, u.Z)(r[n], 2),
            s = i[0],
            l = i[1];
          switch (typeof l) {
            case 'function':
              c[s] = l.call(c, e[s], s, e);
              break;
            case 'object':
              c[s] = le(e[s], l);
              break;
            case 'boolean':
              l && (c[s] = e[s]);
          }
        }
        return c;
      }
      var oe = (function () {
          function e(t) {
            (0, v.Z)(this, e), H(this, '_listeners', []), (this._ctrl = t);
          }
          return (
            (0, h.Z)(e, [
              {
                key: 'add',
                value: function (e, t, c, n, r) {
                  var i = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : '',
                        c = y[e],
                        n = (c && c[t]) || t;
                      return e + n;
                    })(t, c),
                    s = O(O({}, this._ctrl.config.shared.eventOptions), r);
                  e.addEventListener(i, n, s),
                    this._listeners.push(function () {
                      return e.removeEventListener(i, n, s);
                    });
                },
              },
              {
                key: 'clean',
                value: function () {
                  this._listeners.forEach(function (e) {
                    return e();
                  }),
                    (this._listeners = []);
                },
              },
            ]),
            e
          );
        })(),
        ae = (function () {
          function e() {
            (0, v.Z)(this, e), H(this, '_timeouts', new Map());
          }
          return (
            (0, h.Z)(e, [
              {
                key: 'add',
                value: function (e, t) {
                  var c,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 140;
                  this.remove(e);
                  for (
                    var r = arguments.length,
                      i = new Array(r > 3 ? r - 3 : 0),
                      s = 3;
                    s < r;
                    s++
                  )
                    i[s - 3] = arguments[s];
                  this._timeouts.set(
                    e,
                    (c = window).setTimeout.apply(c, [t, n].concat(i)),
                  );
                },
              },
              {
                key: 'remove',
                value: function (e) {
                  var t = this._timeouts.get(e);
                  t && window.clearTimeout(t);
                },
              },
              {
                key: 'clean',
                value: function () {
                  this._timeouts.forEach(function (e) {
                    window.clearTimeout(e);
                  }),
                    this._timeouts.clear();
                },
              },
            ]),
            e
          );
        })(),
        ve = (function () {
          function e(t) {
            (0, v.Z)(this, e),
              H(this, 'gestures', new Set()),
              H(this, '_targetEventStore', new oe(this)),
              H(this, 'gestureEventStores', {}),
              H(this, 'gestureTimeoutStores', {}),
              H(this, 'handlers', {}),
              H(this, 'config', {}),
              H(this, 'pointerIds', new Set()),
              H(this, 'touchIds', new Set()),
              H(this, 'state', {
                shared: { shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1 },
              }),
              (function (e, t) {
                t.drag && he(e, 'drag');
                t.wheel && he(e, 'wheel');
                t.scroll && he(e, 'scroll');
                t.move && he(e, 'move');
                t.pinch && he(e, 'pinch');
                t.hover && he(e, 'hover');
              })(this, t);
          }
          return (
            (0, h.Z)(e, [
              {
                key: 'setEventIds',
                value: function (e) {
                  B(e)
                    ? (this.touchIds = new Set(C(e)))
                    : 'pointerId' in e &&
                      ('pointerup' === e.type
                        ? this.pointerIds.delete(e.pointerId)
                        : this.pointerIds.add(e.pointerId));
                },
              },
              {
                key: 'applyHandlers',
                value: function (e, t) {
                  (this.handlers = e), (this.nativeHandlers = t);
                },
              },
              {
                key: 'applyConfig',
                value: function (e, t) {
                  this.config = (function (e, t) {
                    var c = e,
                      n = c.target,
                      r = c.eventOptions,
                      i = c.window,
                      s = c.enabled,
                      l = c.transform,
                      o = ne(c, se),
                      a = {
                        shared: le(
                          {
                            target: n,
                            eventOptions: r,
                            window: i,
                            enabled: s,
                            transform: l,
                          },
                          ie,
                        ),
                      };
                    if (t) {
                      var v = X.get(t);
                      a[t] = le(O({ shared: a.shared }, o), v);
                    } else
                      for (var h in o) {
                        var u = X.get(h);
                        u && (a[h] = le(O({ shared: a.shared }, o[h]), u));
                      }
                    return a;
                  })(e, t);
                },
              },
              {
                key: 'clean',
                value: function () {
                  this._targetEventStore.clean();
                  var e,
                    t = te(this.gestures);
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var c = e.value;
                      this.gestureEventStores[c].clean(),
                        this.gestureTimeoutStores[c].clean();
                    }
                  } catch (n) {
                    t.e(n);
                  } finally {
                    t.f();
                  }
                },
              },
              {
                key: 'effect',
                value: function () {
                  var e = this;
                  return (
                    this.config.shared.target && this.bind(),
                    function () {
                      return e._targetEventStore.clean();
                    }
                  );
                },
              },
              {
                key: 'bind',
                value: function () {
                  for (
                    var e = this, t = arguments.length, c = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    c[n] = arguments[n];
                  var i,
                    s = this.config.shared,
                    l = s.eventOptions,
                    o = {};
                  if (!s.target || (i = s.target())) {
                    var a = ue(o, l, !!i);
                    if (s.enabled) {
                      var v,
                        h = te(this.gestures);
                      try {
                        for (h.s(); !(v = h.n()).done; ) {
                          var u = v.value;
                          if (this.config[u].enabled) {
                            var m = Y.get(u);
                            new m(this, c, u).bind(a);
                          }
                        }
                      } catch (E) {
                        h.e(E);
                      } finally {
                        h.f();
                      }
                      var w = function (t) {
                        a(
                          t,
                          '',
                          function (n) {
                            return e.nativeHandlers[t](
                              O(
                                O({}, e.state.shared),
                                {},
                                { event: n, args: c },
                              ),
                            );
                          },
                          void 0,
                          !0,
                        );
                      };
                      for (var g in this.nativeHandlers) w(g);
                    }
                    for (var f in o) o[f] = P.apply(void 0, (0, r.Z)(o[f]));
                    if (!i) return o;
                    for (var p in o) {
                      var d = p.substr(2).toLowerCase(),
                        z = !!~d.indexOf('capture'),
                        x = !!~d.indexOf('passive');
                      (z || x) && (d = d.replace(/capture|passive/g, '')),
                        this._targetEventStore.add(i, d, '', o[p], {
                          capture: z,
                          passive: x,
                        });
                    }
                  }
                },
              },
            ]),
            e
          );
        })();
      function he(e, t) {
        e.gestures.add(t),
          (e.gestureEventStores[t] = new oe(e)),
          (e.gestureTimeoutStores[t] = new ae());
      }
      var ue = function (e, t, c) {
        return function (n, r, i) {
          var s,
            l,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            v = null !== (s = o.capture) && void 0 !== s ? s : t.capture,
            h = null !== (l = o.passive) && void 0 !== l ? l : t.passive,
            u = a ? n : j(n, r, v);
          c && h && (u += 'Passive'), (e[u] = e[u] || []), e[u].push(i);
        };
      };
      function me(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          c = arguments.length > 2 ? arguments[2] : void 0,
          n = arguments.length > 3 ? arguments[3] : void 0,
          r = ee.useMemo(function () {
            return new ve(e);
          }, []);
        if (
          (r.applyHandlers(e, n),
          r.applyConfig(t, c),
          ee.useEffect(r.effect.bind(r)),
          ee.useEffect(function () {
            return r.clean.bind(r);
          }, []),
          void 0 === t.target)
        )
          return r.bind.bind(r);
      }
      var we = c(7715),
        ge = c.n(we),
        fe = c(3921),
        pe = c(9797),
        de = function () {
          var e = (0, ee.useRef)(!1);
          return (
            (0, pe.Z)(function () {
              return function () {
                e.current = !0;
              };
            }, []),
            e
          );
        },
        ze = c(2058),
        xe = c(460),
        Ee = [
          'component',
          'activeClassName',
          'style',
          'className',
          'delay',
          'touchDisabled',
        ],
        Me = ee.forwardRef(function (e, t) {
          var c = e.component,
            r = void 0 === c ? 'div' : c,
            i = e.activeClassName,
            s = e.style,
            l = e.className,
            o = e.delay,
            a = e.touchDisabled,
            v = (0, n.Z)(e, Ee),
            h = (0, fe.qt)().getPrefixCls,
            u = (0, ee.useRef)(null),
            m = (0, ze.Z)(u, t),
            w = (0, ee.useState)(!1),
            g = w[0],
            f = w[1],
            p = de();
          return (
            (function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              $(J), me({ drag: e }, t, 'drag');
            })(
              function (e) {
                var t = e.active;
                p.current || f(t);
              },
              { pointer: { touch: !0 }, target: u, delay: o, enabled: !a },
            ),
            ee.createElement(
              r,
              Object.assign({}, v, {
                ref: m,
                style: Object.assign({ cursor: a ? '' : 'cursor' }, s),
                className: ge()(l, g && !a && i, !a && h('touchable')),
              }),
            )
          );
        }),
        He = (0, xe.Z)(Me);
    },
    7970: function (e, t, c) {
      'use strict';
      c.d(t, {
        _Dd: function () {
          return g;
        },
        LWQ: function () {
          return h;
        },
        Z_Z: function () {
          return m;
        },
        l62: function () {
          return p;
        },
        ZPm: function () {
          return x;
        },
      });
      var n = c(7294),
        r = c(3366),
        i = c(7715),
        s = c.n(i),
        l = function (e) {
          return e.replace(/\w[A-Z\s]/g, function (e) {
            return e[0] + '-' + e[1].trim();
          });
        },
        o = ['className'],
        a = function (e, t) {
          var c = n.forwardRef(function (c, i) {
            var a = c.className,
              v = (0, r.Z)(c, o);
            return n.createElement(
              'span',
              Object.assign({}, v, {
                ref: i,
                className: s()('rmc-vant-icon', a),
                role: 'img',
                'aria-label': l(t),
              }),
              n.createElement(e, {
                width: '1em',
                height: '1em',
                fill: 'currentColor',
              }),
            );
          });
          return (c.displayName = 'ForwardRefExotic' + t), c;
        },
        v =
          (a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512.34304 56.32C700.857344 56.32 853.67808 205.770752 853.67808 390.126592c0 168.199168-100.186112 354.92352-300.55936 560.173056-0.338944 0.34816-0.683008 0.690176-1.031168 1.02912-22.515712 21.912576-58.53184 21.423104-80.444416-1.092608C271.219712 744.292352 171.008 557.58848 171.008 390.126592 171.008 205.770752 323.82976 56.32 512.34304 56.32z m0 56.889344c-157.375488 0-284.44672 124.26752-284.44672 276.917248 0 149.999616 93.45024 324.104192 284.514304 520.43264 190.979072-195.625984 284.378112-369.69984 284.378112-520.43264 0-152.649728-127.070208-276.917248-284.445696-276.917248z m0 455.113728c-78.547968 0-142.22336-63.675392-142.22336-142.22336s63.675392-142.22336 142.22336-142.22336 142.22336 63.675392 142.22336 142.22336-63.675392 142.22336-142.22336 142.22336z m0-56.889344c47.128576 0 85.334016-38.20544 85.334016-85.334016s-38.20544-85.334016-85.334016-85.334016-85.334016 38.20544-85.334016 85.334016 38.20544 85.334016 85.334016 85.334016z',
              }),
            );
          }, 'LocationOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M417.144832 784.264192l94.977024 101.270528 341.21728-361.694208c78.251008-82.948096 76.356608-213.086208-4.278272-293.720064-79.32416-79.32416-207.93344-79.32416-287.256576 0l-50.22208 50.22208-50.210816-50.210816c-79.273984-79.273984-207.802368-79.273984-287.075328 0-80.51712 80.51712-82.312192 210.495488-4.04992 293.206016l246.898688 260.92544z m84.452352-594.359296l9.984 9.984 9.997312-9.995264c101.53984-101.53984 266.16832-101.53984 367.70816 0 102.395904 102.39488 104.802304 267.652096 5.43232 372.984832L553.50272 924.572672a56.88832 56.88832 0 0 1-2.464768 2.4576c-22.91712 21.49376-58.918912 20.338688-80.411648-2.579456l-94.802944-101.086208-246.898688-260.926464c-99.436544-105.086976-97.15712-270.232576 5.144576-372.533248 101.489664-101.489664 266.038272-101.489664 367.527936 0z',
              }),
            );
          }, 'LikeOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M720.692224 636.6976l170.748928-191.096832-250.462208-54.23616L512 169.920512 383.021056 391.364608l-250.462208 54.23616 170.748928 191.096832-25.81504 254.963712L512 788.32128l234.507264 103.340032-25.81504-254.963712zM512 850.48832L255.744 963.412992c-14.37696 6.335488-31.16544-0.183296-37.499904-14.558208a28.444672 28.444672 0 0 1-2.270208-14.336l28.208128-278.60992L57.6 447.08864c-10.468352-11.71456-9.45664-29.696 2.25792-40.163328a28.444672 28.444672 0 0 1 12.932096-6.588416l273.690624-59.267072 140.941312-241.98144c7.906304-13.574144 25.320448-18.168832 38.895616-10.262528a28.444672 28.444672 0 0 1 10.262528 10.262528l140.941312 241.98144 273.690624 59.267072c15.353856 3.323904 25.105408 18.465792 21.78048 33.819648a28.444672 28.444672 0 0 1-6.58944 12.93312L779.81696 655.906816l28.208128 278.60992c1.583104 15.629312-9.8048 29.58336-25.434112 31.16544-4.89472 0.495616-9.833472-0.28672-14.336-2.271232L512 850.489344z',
              }),
            );
          }, 'StarOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M302.21312 170.636288c-0.740352 0-1.42336 0.05632-2.162688 0.05632-23.836672 1.024-52.905984 18.88768-88.745984 54.72768-143.076352 143.131648 139.776 429.339648 142.676992 432.24064 2.900992 2.788352 288.939008 285.924352 432.241664 142.620672 35.84-35.84 53.702656-64.852992 54.726656-88.68864 0.854016-22.016-11.945984-44.99968-41.699328-74.752-29.468672-29.526016-54.100992-43.46368-74.580992-41.586688-18.716672 1.820672-38.684672 18.31936-59.33568 49.09568-18.601984 31.174656-44.315648 40.675328-62.406656 42.894336-47.104 6.029312-102.798336-26.454016-177.436672-101.092352-74.694656-74.752-106.836992-131.12832-101.091328-177.379328 2.219008-18.147328 11.662336-43.804672 44.089344-63.260672 29.581312-19.854336 46.08-39.822336 47.899648-58.537984 1.93536-19.968-12.059648-45.056-41.641984-74.63936-28.672-28.672-51.2-41.698304-72.534016-41.698304m385.195008 727.209984c-171.121664 0-363.292672-189.609984-373.646336-199.964672-13.36832-13.42464-325.574656-329.78432-142.676992-512.681984 47.046656-47.04768 87.267328-69.745664 126.633984-71.339008 52.62336-1.990656 91.307008 32.256 117.248 58.25536 42.780672 42.722304 61.782016 82.146304 58.027008 120.37632-3.64032 36.97664-27.819008 70.029312-74.068992 101.033984-14.848 8.931328-17.35168 16.497664-18.091008 22.187008-1.820672 15.019008 6.713344 51.996672 84.878336 130.219008 78.108672 78.051328 115.086336 86.356992 130.219008 84.877312 5.68832-0.739328 13.254656-3.299328 21.390336-16.896 31.80032-47.444992 64.852992-71.68 101.830656-75.264 37.716992-4.265984 77.539328 15.132672 120.32 57.970688 25.998336 25.997312 60.416 66.445312 58.310656 117.30432-1.64864 39.31136-24.291328 79.531008-71.337984 126.577664-41.244672 41.244672-89.259008 57.344-139.036672 57.344',
              }),
            );
          }, 'PhoneOutlined')),
        h = v,
        u =
          (a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M232.57088 208.62976c12.62592 43.70432 7.553024 91.60704-16.17408 132.703232-23.74656 41.129984-62.74048 69.486592-106.942464 80.384-6.5536 29.3632-9.899008 59.579392-9.899008 90.283008s3.345408 60.919808 9.899008 90.281984c44.203008 10.898432 83.195904 39.25504 106.942464 80.384 23.72608 41.096192 28.798976 88.999936 16.173056 132.704256 44.756992 41.255936 98.0992 72.2176 156.326912 90.40384 31.541248-32.842752 75.60192-52.441088 123.103232-52.441088 47.501312 0 91.561984 19.598336 123.103232 52.441088 58.228736-18.18624 111.56992-49.147904 156.326912-90.40384-12.62592-43.70432-7.554048-91.60704 16.173056-132.703232 23.74656-41.129984 62.74048-69.486592 106.942464-80.384 6.5536-29.3632 9.899008-59.579392 9.899008-90.283008s-3.345408-60.919808-9.899008-90.281984c-44.203008-10.898432-83.195904-39.25504-106.942464-80.384-23.72608-41.096192-28.798976-88.999936-16.173056-132.704256-44.756992-41.255936-98.0992-72.2176-156.326912-90.40384-31.541248 32.842752-75.60192 52.441088-123.103232 52.441088-47.501312 0-91.561984-19.598336-123.103232-52.441088-58.228736 18.18624-111.56992 49.147904-156.326912 90.40384zM612.468736 53.444608c96.59392 21.066752 182.074368 71.877632 246.363136 142.353408-21.472256 34.509824-23.7056 79.43168-1.961984 117.091328 21.76512 37.697536 61.845504 58.228736 102.51264 56.84224 14.257152 44.873728 21.94944 92.672 21.94944 142.268416 0 49.595392-7.692288 97.394688-21.950464 142.26944-40.666112-1.38752-80.746496 19.14368-102.51264 56.84224-21.741568 37.658624-19.509248 82.58048 1.963008 117.090304-64.288768 70.475776-149.77024 121.286656-246.36416 142.353408-19.135488-35.899392-56.948736-60.33408-100.468736-60.33408-43.52 0-81.333248 24.434688-100.46976 60.33408-96.59392-21.066752-182.074368-71.877632-246.363136-142.353408 21.472256-34.509824 23.7056-79.43168 1.961984-117.091328-21.76512-37.697536-61.845504-58.228736-102.51264-56.84224C50.36032 609.395712 42.668032 561.59744 42.668032 512c0-49.595392 7.692288-97.394688 21.950464-142.26944 40.666112 1.38752 80.746496-19.14368 102.51264-56.84224 21.741568-37.658624 19.509248-82.58048-1.963008-117.090304 64.288768-70.475776 149.77024-121.286656 246.36416-142.353408 19.135488 35.899392 56.948736 60.33408 100.468736 60.33408 43.52 0 81.333248-24.434688 100.46976-60.33408zM512 341.332992c-94.256128 0-170.667008 76.41088-170.667008 170.667008S417.743872 682.667008 512 682.667008 682.667008 606.256128 682.667008 512 606.256128 341.332992 512 341.332992z m0 56.889344c62.83776 0 113.777664 50.939904 113.777664 113.777664S574.83776 625.777664 512 625.777664 398.222336 574.83776 398.222336 512 449.16224 398.222336 512 398.222336z',
              }),
            );
          }, 'SettingOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M881.777664 657.979392c0-68.33664-26.144768-133.638144-70.122496-193.550336a470.111232 470.111232 0 0 0-48.028672-55.687168c-20.472832 26.892288-39.94112 45.9008-54.607872 57.1392-21.163008 16.218112-51.003392-2.977792-45.02016-28.959744 29.174784-126.6944-13.152256-221.017088-103.144448-290.709504-25.1392-19.469312-52.204544-35.410944-79.2576-48.001024a473.81504 473.81504 0 0 0-2.394112-1.10592c-16.151552 106.058752-65.24928 165.267456-176.601088 252.08832l-2.79552 2.180096C179.939328 444.827648 142.22336 499.06688 142.22336 625.77664c0 122.462208 81.90976 221.529088 220.367872 285.55776-44.795904-72.400896-58.544128-141.91616-44.4416-207.535104 12.332032-57.380864 44.91264-107.523072 91.078656-150.63552 20.478976-19.125248 42.326016-35.607552 64.192512-49.48992 13.244416-8.40704 23.729152-14.168064 30.108672-17.26464 26.253312-12.741632 52.378624 17.59232 35.88608 41.66656-0.308224 0.45056-1.598464 2.886656-3.140608 7.12704-15.212544 41.82016-0.39936 98.715648 75.639808 171.575296 57.79456 59.05408 67.264512 131.65568 30.779392 213.351424 161.084416-77.031424 239.084544-164.864 239.084544-262.151168zM735.127552 350.478336c9.156608-14.034944 28.399616-17.152 41.519104-6.725632 5.4784 4.354048 14.49984 12.254208 25.888768 23.45984a526.482432 526.482432 0 0 1 54.980608 63.553536c50.568192 68.892672 81.150976 145.275904 81.150976 227.213312 0 134.273024-108.817408 245.459968-319.848448 335.302656l-11.14112 2.27328h-24.496128c-22.93248 0-36.438016-25.74336-23.40352-44.611584 60.16-87.083008 62.440448-152.301568 12.130304-203.727872-65.906688-63.133696-95.14496-122.631168-97.600512-174.758912a369.16736 369.16736 0 0 0-26.252288 22.285312c-38.344704 35.80928-64.6912 76.355584-74.288128 121.010176-14.788608 68.814848 10.40384 145.722368 87.768064 232.420352 16.3584 18.331648 3.346432 47.382528-21.223424 47.382528h-13.6448l-8.994816-1.4592C214.667264 926.42816 85.332992 797.39904 85.332992 625.77664c0-148.26496 47.17568-216.105984 179.493888-319.268864l2.794496-2.178048c112.551936-87.7568 150.580224-138.491904 159.1296-249.623552 1.400832-18.212864 19.360768-30.40256 36.804608-24.98048 8.850432 2.751488 23.496704 8.27392 42.04544 16.90624 30.676992 14.278656 61.34272 32.339968 90.085376 54.59968 83.607552 64.748544 133.623808 150.217728 134.378496 256.804864 1.69984-2.473984 3.388416-4.994048 5.062656-7.559168z',
              }),
            );
          }, 'FireOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M56.889344 440.889344v-14.22336 14.22336z m0 142.221312v14.22336-14.22336z m910.221312 0v14.22336-14.22336z m0-142.221312v-14.22336 14.22336z m0 0v14.221312c-31.418368 0-56.88832 25.470976-56.88832 56.889344s25.469952 56.889344 56.88832 56.889344v227.555328c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832V568.889344c31.418368 0 56.88832-25.470976 56.88832-56.889344s-25.469952-56.889344-56.88832-56.889344V227.555328c0-31.418368 25.469952-56.88832 56.88832-56.88832H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.88832v227.555328H910.22336V227.555328H113.77664v227.555328H56.889344v-14.221312 14.221312c31.418368 0 56.88832 25.470976 56.88832 56.889344s-25.469952 56.889344-56.88832 56.889344v14.221312-14.221312h56.88832v227.555328H910.22336V568.889344h56.88832v14.221312-14.221312c-31.418368 0-56.88832-25.470976-56.88832-56.889344s25.469952-56.889344 56.88832-56.889344v-14.221312z m-597.332992-42.667008H654.22336c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H369.77664c-15.709184 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.735488-28.444672 28.444672-28.444672z m0 170.667008H654.22336c15.709184 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.735488 28.444672-28.444672 28.444672H369.77664c-15.709184 0-28.444672-12.734464-28.444672-28.444672 0-15.70816 12.735488-28.443648 28.444672-28.443648zM56.889344 398.222336c62.83776 0 113.77664 50.939904 113.77664 113.777664s-50.93888 113.777664-113.77664 113.777664v-56.88832c31.418368 0 56.88832-25.470976 56.88832-56.889344s-25.469952-56.889344-56.88832-56.889344V398.22336z m910.221312 0v56.88832c-31.418368 0-56.88832 25.470976-56.88832 56.889344s25.469952 56.889344 56.88832 56.889344v56.88832c-62.83776 0-113.77664-50.939904-113.77664-113.777664s50.93888-113.777664 113.77664-113.777664z',
              }),
            );
          }, 'CouponOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M341.332992 853.332992m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0ZM739.555328 853.332992m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0ZM232.368128 284.798976l42.764288 372.946944c1.647616 14.3616 13.80352 25.203712 28.259328 25.203712h500.655104c13.765632 0 25.554944-9.856 27.995136-23.40352l61.45024-341.261312c2.783232-15.461376-7.493632-30.252032-22.953984-33.035264a28.444672 28.444672 0 0 0-5.041152-0.45056h-633.12896z m-6.52288-56.889344h639.65184c5.070848 0 10.13248 0.452608 15.122432 1.35168 46.383104 8.351744 77.212672 52.722688 68.860928 99.104768l-61.45024 341.262336c-7.318528 40.641536-42.687488 70.21056-83.98336 70.21056h-500.65408c-43.367424 0-79.838208-32.52736-84.779008-75.61216L164.919296 195.958784c-1.646592-14.3616-13.80352-25.203712-28.259328-25.203712H56.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672S41.179136 113.865728 56.889344 113.865728h79.770624c43.367424 0 79.838208 32.52736 84.777984 75.61216l4.407296 38.431744z',
              }),
            );
          }, 'CartOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M136.129536 113.58208c43.70432 0 80.344064 33.020928 84.87424 76.489728l3.904512 37.48352h666.20416c31.418368 0 56.88832 25.470976 56.88832 56.889344 0 5.4272-0.776192 10.824704-2.306048 16.03072l-84.668416 288.29184c-6.56384 22.347776-26.0864 38.436864-49.275904 40.609792L272.04608 679.950336l3.584 34.393088c1.5104 14.4896 13.723648 25.496576 28.292096 25.496576h547.684352c15.709184 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.735488 28.444672-28.444672 28.444672H303.9232c-43.70432 0-80.345088-33.019904-84.87424-76.489728L164.420608 195.969024c-1.509376-14.4896-13.722624-25.496576-28.291072-25.496576H56.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h79.240192zM266.150912 623.366144l540.292096-50.628608 84.668416-288.29184h-660.2752l35.314688 338.920448zM341.332992 910.222336m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0ZM739.555328 910.222336m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0Z',
              }),
            );
          }, 'ShoppingCartOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336C292.068352 113.777664 113.777664 292.068352 113.777664 512c0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656zM284.806144 284.45696c31.415296 0 56.8832 25.462784 56.889344 56.877056h423.697408c15.70816 0 28.443648 12.734464 28.443648 28.443648 0 2.958336-0.4608 5.89824-1.36704 8.71424l-54.92736 170.667008a28.444672 28.444672 0 0 1-27.077632 19.730432H341.695488v57.084928h369.536c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H341.695488c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-57.085952h-0.361472v-227.54304h-28.0832c-15.70816 0-28.443648-12.735488-28.443648-28.444672s12.734464-28.444672 28.443648-28.444672h28.444672z m441.550848 113.765376H341.695488v113.77664l348.04224 0.001024 36.61824-113.777664zM341.332992 739.555328m-28.444672 0a28.444672 28.444672 0 1 0 56.889344 0 28.444672 28.444672 0 1 0-56.889344 0ZM682.667008 739.555328m-28.444672 0a28.444672 28.444672 0 1 0 56.889344 0 28.444672 28.444672 0 1 0-56.889344 0Z',
              }),
            );
          }, 'CartCircleOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M323.253248 427.812864v57.302016c-118.257664 15.788032-209.475584 117.060608-209.475584 239.638528l0.009216-1.011712c0.03584 0.587776 0.054272 1.181696 0.054272 1.778688 0 15.709184-12.734464 28.444672-28.444672 28.444672-15.70816 0-28.443648-12.735488-28.443648-28.444672 0-0.256 0.003072-0.512 0.01024-0.768h-0.073728c0-154.034176 116.606976-280.834048 266.36288-296.93952zM321.156096 200.3968l0.47104 0.004096c15.492096 0.25088 27.973632 12.888064 27.973632 28.440576 0 15.709184-12.735488 28.444672-28.444672 28.444672-47.128576 0-85.332992 38.20544-85.332992 85.332992 0 47.128576 38.20544 85.334016 85.332992 85.334016v56.88832c-78.546944 0-142.222336-63.674368-142.222336-142.222336 0-78.546944 63.675392-142.222336 142.22336-142.222336z m245.353472 282.042368c188.51328 0 341.332992 152.820736 341.332992 341.334016H850.95424c0-157.094912-127.350784-284.444672-284.444672-284.444672l-4.704256 0.037888c-154.924032 2.511872-279.740416 128.882688-279.740416 284.40576H225.1776c0-188.512256 152.819712-341.332992 341.332992-341.332992z m-245.353472-54.48704c15.709184 0 28.444672 12.735488 28.444672 28.444672 0 15.710208-12.735488 28.444672-28.444672 28.444672s-28.444672-12.734464-28.444672-28.444672c0-15.70816 12.735488-28.443648 28.444672-28.443648z m-67.535872 367.376384c15.710208 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.734464 28.443648-28.444672 28.443648-15.70816 0-28.443648-12.734464-28.443648-28.443648 0-15.710208 12.734464-28.444672 28.443648-28.444672z m625.777664 0c15.710208 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.734464 28.443648-28.444672 28.443648-15.70816 0-28.443648-12.734464-28.443648-28.443648 0-15.710208 12.734464-28.444672 28.443648-28.444672zM568.037376 455.110656c78.546944 0 142.222336-63.674368 142.222336-142.221312 0-78.547968-63.675392-142.22336-142.222336-142.22336-78.546944 0-142.222336 63.675392-142.222336 142.22336 0 78.546944 63.675392 142.221312 142.222336 142.221312z m0 56.889344c-109.966336 0-199.110656-89.145344-199.110656-199.110656 0-109.96736 89.14432-199.11168 199.110656-199.11168 109.966336 0 199.110656 89.145344 199.110656 199.11168C767.148032 422.854656 678.003712 512 568.037376 512z',
              }),
            );
          }, 'FriendsOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 807.663616l83.332096-124.997632h314.89024v-512H113.77664v512h314.89024L512 807.663616z m47.3344 31.555584a56.889344 56.889344 0 0 1-15.777792 15.778816c-26.14272 17.42848-61.462528 10.36288-78.891008-15.778816l-66.443264-99.664896H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832v-512c0-31.419392 25.469952-56.889344 56.88832-56.889344H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.889344v512c0 31.418368-25.469952 56.88832-56.88832 56.88832H625.77664l-66.443264 99.66592zM312.889344 284.443648h398.221312c15.710208 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.734464 28.444672-28.444672 28.444672H312.889344c-15.710208 0-28.444672-12.734464-28.444672-28.444672 0-15.70816 12.734464-28.443648 28.444672-28.443648zM312.889344 455.109632h398.221312c15.710208 0 28.444672 12.735488 28.444672 28.444672S726.820864 512 711.110656 512H312.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672z',
              }),
            );
          }, 'CommentOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M837.52448 113.777664c11.65312 0 22.12864 7.108608 26.433536 17.938432L965.3248 386.740224a28.444672 28.444672 0 0 1-5.13024 29.356032L532.38272 899.551232c-10.411008 11.764736-28.387328 12.86144-40.15104 2.451456-0.89088-0.78848-1.731584-1.631232-2.516992-2.52416L64.813056 415.986688a28.444672 28.444672 0 0 1-5.136384-29.105152l99.381248-254.988288a28.444672 28.444672 0 0 1 26.503168-18.11456h651.963392zM642.243584 426.665984h-271.9744l140.793856 348.192768 131.180544-348.192768z m232.63232 0H703.035392l-127.404032 338.16576 299.24352-338.16576z m-565.971968 0H149.93408L444.387328 761.72288 308.903936 426.665984z m61.728768-256H205.0048l-77.604864 199.11168h185.2672l57.966592-199.11168z m199.2704 0H429.883392l-57.965568 199.11168H641.52576l-71.621632-199.11168z m248.318976 0H630.361088l71.620608 199.11168h195.382272l-79.141888-199.110656z',
              }),
            );
          }, 'GemOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M227.555328 910.222336c-31.418368 0-56.88832-25.469952-56.88832-56.889344V512c-31.419392 0-56.889344-25.469952-56.889344-56.889344V284.444672c0-31.419392 25.469952-56.889344 56.889344-56.889344h88.178688c13.177856-64.917504 70.571008-113.77664 139.37664-113.77664 46.52544 0 87.832576 22.339584 113.780736 56.87808 25.942016-34.53952 67.249152-56.879104 113.774592-56.879104 68.805632 0 126.198784 48.86016 139.37664 113.77664l88.178688 0.001024c31.105024 0 56.379392 24.963072 56.881152 55.948288l0.008192 0.941056v170.665984c0 31.105024-24.963072 56.379392-55.948288 56.882176l-0.941056 0.007168v341.332992c0 31.105024-24.963072 56.379392-55.948288 56.881152l-0.940032 0.008192H227.555328z m341.332992-625.778688h-113.77664v568.889344h113.77664V284.443648zM398.22336 512H227.555328v341.332992H398.22336V512z m398.222336 0H625.77664v341.332992h170.667008V512z m-398.22336-227.555328H170.668032v170.665984h227.555328V284.444672z m455.11168 0H625.777664v170.665984h227.555328V284.444672zM625.777664 170.667008c-37.154816 0-68.762624 23.745536-80.477184 56.88832h160.955392c-11.71456-33.142784-43.323392-56.88832-80.478208-56.88832z m-227.555328 0c-37.154816 0-68.763648 23.745536-80.478208 56.88832H478.69952c-11.71456-33.142784-43.322368-56.88832-80.477184-56.88832z',
              }),
            );
          }, 'GiftOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M745.027584 117.228544c33.325056 33.325056 15.314944 105.36448-40.225792 160.90624a240.377856 240.377856 0 0 1-6.5536 6.310912l155.0848-0.001024c31.419392 0 56.889344 25.469952 56.889344 56.88832v113.777664c0 31.105024-24.963072 56.379392-55.948288 56.882176l-0.941056 0.007168v341.332992c0 31.419392-25.469952 56.889344-56.88832 56.889344H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.889344V512c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-113.77664c0-31.419392 25.469952-56.889344 56.889344-56.889344l192.452608 0.001024a240.376832 240.376832 0 0 1-6.5536-6.310912c-55.54176-55.54176-73.550848-127.581184-40.225792-160.90624 33.324032-33.325056 105.36448-15.314944 160.905216 40.226816 27.215872 27.214848 45.41952 58.391552 52.987904 87.033856l0.45056 1.75104c7.279616-29.119488 25.667584-61.014016 53.43744-88.784896 55.54176-55.54176 127.582208-73.551872 160.90624-40.226816zM483.555328 512l-256 0.001024v341.332992h256V511.997952z m312.889344 0.001024h-256v341.331968l256 0.001024V512zM483.555328 341.331968l-312.88832 0.001024v113.777664h312.88832V341.331968z m369.777664 0.001024H540.443648v113.777664h312.889344v-113.77664zM624.34816 197.6832c-36.214784 36.214784-45.86496 74.81344-40.226816 80.452608 5.639168 5.638144 44.237824-4.011008 80.453632-40.226816 36.215808-36.214784 45.86496-74.81344 40.226816-80.452608-5.639168-5.639168-44.237824 4.011008-80.453632 40.226816zM356.56704 157.45536c-5.638144 5.638144 4.011008 44.2368 40.226816 80.452608 36.215808 36.215808 74.81344 45.86496 80.452608 40.226816 5.639168-5.639168-4.011008-44.2368-40.225792-80.452608-36.215808-36.215808-74.814464-45.86496-80.453632-40.226816z',
              }),
            );
          }, 'PointGiftOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M817.575936 154.712064H206.201856l-28.399616 56.798208h-63.502336l41.099264-82.198528a56.798208 56.798208 0 0 1 50.80064-31.396864h611.376128a56.798208 56.798208 0 0 1 50.80064 31.396864l41.100288 82.198528h0.002048v624.78336c0 31.369216-25.428992 56.798208-56.799232 56.798208H171.098112c-31.369216 0-56.798208-25.428992-56.798208-56.799232V211.510272h731.675648l-28.399616-56.798208z m35.10272 113.59744l-170.394624-0.001024v340.79232l-170.395648-65.604608-170.395648 65.604608V268.30848h-170.3936v567.984128h681.57952V268.309504z m-227.192832 0H398.292992v258.059264l113.595392-43.73504 113.59744 43.73504V268.309504z',
              }),
            );
          }, 'SendGiftOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c217.73312 0 394.652672 174.741504 398.169088 391.635968l0.053248 6.585344v284.444672c0 31.419392-25.469952 56.889344-56.889344 56.889344h-56.88832c-31.419392 0-56.889344-25.469952-56.889344-56.889344V512c0-31.418368 25.469952-56.889344 56.889344-56.889344h56.88832c0-186.628096-149.778432-338.27328-335.68768-341.286912L512 113.77664l-5.644288 0.04608C322.304 116.80768 173.666304 265.464832 170.71104 449.522688l-0.044032 5.587968h56.88832c31.105024 0 56.379392 24.964096 56.881152 55.948288l0.008192 0.941056v227.555328c0 31.105024-24.963072 56.379392-55.948288 56.881152l-0.941056 0.008192h-112.75264a1.024 1.024 0 0 1-1.024-1.024V455.110656c0-219.931648 178.28864-398.221312 398.221312-398.221312zM853.332992 512h-56.88832v227.555328h56.88832V512z m-625.77664 0h-56.889344v227.555328h56.88832V512zM853.332992 463.128576c0-15.709184 12.735488-28.443648 28.444672-28.443648 15.710208 0 28.444672 12.734464 28.444672 28.444672v324.000768c-0.841728 116.01408-55.412736 180.272128-157.559808 180.272128H540.68224c-15.70816 0-28.443648-12.734464-28.443648-28.444672 0-15.70816 12.734464-28.443648 28.443648-28.443648h211.981312c68.537344 0 100.042752-37.098496 100.66944-123.589632l0.001024-323.795968z',
              }),
            );
          }, 'ServiceOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M264.282112 341.332992L228.726784 910.22336H790.28224l-35.555328-568.889344h-490.4448z m242.174976-170.665984c-60.92288 0-110.73024 50.712576-110.73024 113.77664h-56.88832c0-94.256128 75.044864-170.665984 167.61856-170.665984s167.61856 76.41088 167.61856 170.667008h97.723392c20.445184 0 37.36576 15.896576 38.64064 36.3008l37.827584 605.2352c1.334272 21.34016-14.884864 39.72096-36.225024 41.055232-0.804864 0.050176-1.609728 0.074752-2.415616 0.074752H209.3824c-21.38112 0-38.715392-17.333248-38.715392-38.715392 0-0.805888 0.024576-1.610752 0.074752-2.415616l37.82656-605.234176c1.275904-20.404224 18.19648-36.3008 38.641664-36.3008h369.977344c0-63.065088-49.80736-113.777664-110.73024-113.777664z',
              }),
            );
          }, 'BagOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M227.555328 113.777664h568.889344c31.418368 0 56.88832 25.469952 56.88832 56.889344v256c0 15.70816-12.734464 28.443648-28.443648 28.443648-15.710208 0-28.444672-12.734464-28.444672-28.443648v-256H227.555328v682.665984h199.11168c15.70816 0 28.443648 12.735488 28.443648 28.444672s-12.734464 28.444672-28.443648 28.444672H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.889344V170.667008c0-31.419392 25.469952-56.889344 56.88832-56.889344zM739.555328 910.222336c94.257152 0 170.667008-76.41088 170.667008-170.667008s-76.41088-170.665984-170.667008-170.665984-170.665984 76.409856-170.665984 170.665984c0 94.257152 76.409856 170.667008 170.665984 170.667008z m0 56.88832C613.879808 967.110656 512 865.230848 512 739.555328S613.879808 512 739.555328 512s227.555328 101.879808 227.555328 227.555328-101.879808 227.555328-227.555328 227.555328zM711.110656 655.859712c0-15.709184 12.735488-28.444672 28.444672-28.444672S768 640.150528 768 655.859712v72.8832l55.126016 55.126016c11.108352 11.108352 11.108352 29.118464 0 40.226816-11.108352 11.108352-29.118464 11.108352-40.226816 0l-55.126016-55.126016a56.889344 56.889344 0 0 1-16.662528-40.226816v-72.8832zM312.889344 284.444672h341.332992c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H312.889344c-15.710208 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.734464-28.444672 28.444672-28.444672zM312.889344 398.222336h227.555328c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H312.889344c-15.710208 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.734464-28.444672 28.444672-28.444672zM312.889344 512h113.77664c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.443648 28.444672H312.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672S297.179136 512 312.889344 512z',
              }),
            );
          }, 'TodoListOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M227.555328 113.777664h568.889344c31.418368 0 56.88832 25.469952 56.88832 56.889344v256c0 15.70816-12.734464 28.443648-28.443648 28.443648-15.710208 0-28.444672-12.734464-28.444672-28.443648v-256H227.555328v682.665984h199.11168c15.70816 0 28.443648 12.735488 28.443648 28.444672s-12.734464 28.444672-28.443648 28.444672H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.889344V170.667008c0-31.419392 25.469952-56.889344 56.88832-56.889344zM739.555328 910.222336c94.257152 0 170.667008-76.41088 170.667008-170.667008s-76.41088-170.665984-170.667008-170.665984-170.665984 76.409856-170.665984 170.665984c0 94.257152 76.409856 170.667008 170.665984 170.667008z m0 56.88832C613.879808 967.110656 512 865.230848 512 739.555328S613.879808 512 739.555328 512s227.555328 101.879808 227.555328 227.555328-101.879808 227.555328-227.555328 227.555328zM800.507904 742.02624c13.458432 0 24.38144-10.923008 24.38144-24.38144 0-13.457408-10.923008-24.38144-24.38144-24.38144H781.78304l25.843712-25.842688c9.558016-9.558016 9.558016-24.966144 0-34.475008-9.50784-9.556992-24.916992-9.556992-34.473984 0l-33.59744 33.59744-33.59744-33.59744c-9.556992-9.556992-24.96512-9.556992-34.473984 0-9.556992 9.508864-9.556992 24.916992 0 34.475008l25.843712 25.843712h-18.724864c-13.457408 0-24.38144 10.923008-24.38144 24.38144 0 13.457408 10.924032 24.380416 24.38144 24.380416h36.57216v24.38144h-36.57216c-13.457408 0-24.38144 10.921984-24.38144 24.380416s10.924032 24.38144 24.38144 24.38144h36.57216v24.380416c0 13.458432 10.921984 24.38144 24.38144 24.38144 13.457408 0 24.380416-10.923008 24.380416-24.38144v-24.38144h36.571136c13.458432 0 24.38144-10.921984 24.38144-24.380416s-10.923008-24.38144-24.38144-24.38144h-36.571136v-24.38144h36.571136zM312.889344 284.444672h341.332992c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H312.889344c-15.710208 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.734464-28.444672 28.444672-28.444672zM312.889344 398.222336h227.555328c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H312.889344c-15.710208 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.734464-28.444672 28.444672-28.444672zM312.889344 512h113.77664c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.443648 28.444672H312.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672S297.179136 512 312.889344 512z',
              }),
            );
          }, 'BalanceListOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M511.65696 471.998464l140.791808-140.792832c11.108352-11.108352 29.118464-11.108352 40.226816 0 11.108352 11.108352 11.108352 29.118464 0 40.226816L551.882752 512.22528l140.792832 140.792832c11.108352 11.108352 11.108352 29.118464 0 40.226816-11.108352 11.108352-29.118464 11.108352-40.226816 0L511.65696 552.452096 370.864128 693.244928c-11.108352 11.108352-29.118464 11.108352-40.226816 0-11.108352-11.108352-11.108352-29.118464 0-40.226816L471.42912 512.22528 330.637312 371.432448c-11.108352-11.108352-11.108352-29.118464 0-40.226816 11.108352-11.108352 29.118464-11.108352 40.226816 0l140.792832 140.792832zM512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z',
              }),
            );
          }, 'CloseOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0-853.332992c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m-28.444672 227.555328c-15.709184 0-28.444672 12.734464-28.444672 28.444672v256c0 15.70816 12.735488 28.443648 28.444672 28.443648h256c15.709184 0 28.444672-12.734464 28.444672-28.443648 0-15.710208-12.735488-28.444672-28.444672-28.444672H512V312.889344c0-15.710208-12.735488-28.444672-28.444672-28.444672z',
              }),
            );
          }, 'ClockOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 910.222336c-219.534336 0-398.222336-178.688-398.222336-398.222336S292.465664 113.777664 512 113.777664 910.222336 292.465664 910.222336 512 731.534336 910.222336 512 910.222336m0-853.332992c-251.334656 0-455.110656 203.776-455.110656 455.110656 0 251.334656 203.776 455.110656 455.110656 455.110656 251.334656 0 455.110656-203.776 455.110656-455.110656 0-251.334656-203.776-455.110656-455.110656-455.110656m6.610944 227.555328c-45.682688 0-81.92 13.084672-108.146688 39.99232-26.907648 26.283008-39.99232 61.89568-39.99232 107.577344v1.024c0 18.374656 14.790656 33.222656 33.166336 33.222656 18.318336 0 33.166336-14.848 33.166336-33.222656 0-0.398336-0.113664-1.024-0.113664-1.024 0-27.59168 5.574656-49.379328 16.838656-64.398336 12.515328-17.521664 33.108992-26.283008 61.326336-26.283008 22.470656 0 39.99232 6.257664 52.451328 18.774016 11.889664 12.515328 18.204672 29.411328 18.204672 51.25632 0 16.27136-5.689344 31.232-16.953344 45.625344l-10.638336 11.88864c-38.683648 34.361344-61.780992 60.416-71.28064 77.484032-14.166016 25.542656-11.606016 49.152-11.606016 49.152 0 18.317312 14.905344 33.165312 33.222656 33.165312 18.37568 0 30.492672-12.628992 33.16736-33.165312 0 0 3.412992-19.115008 10.29632-31.63136 5.632-11.206656 14.39232-21.901312 25.6-31.85664 30.094336-25.657344 47.558656-41.92768 53.134336-48.811008 15.017984-19.968 23.09632-45.625344 23.09632-76.23168 0-37.48864-12.457984-67.526656-36.806656-89.428992-25.03168-22.470656-57.515008-33.108992-98.132992-33.108992m-10.667008 365.7216c-13.084672 0-23.779328 3.753984-31.857664 12.515328-9.443328 8.078336-13.824 18.772992-13.824 31.857664 0 12.515328 4.380672 23.153664 13.824 31.915008 8.078336 8.704 18.772992 13.084672 31.85664 13.084672 12.573696 0 23.780352-4.380672 33.16736-12.459008 8.704-8.817664 13.084672-19.39968 13.084672-32.540672 0-13.084672-4.380672-23.779328-13.084672-31.857664-8.761344-8.761344-20.025344-12.515328-33.16736-12.515328',
              }),
            );
          }, 'QuestionOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M784.444416 345.934848l7.419904 7.181312c6.457344 6.249472 5.987328 16.16896-0.781312 22.720512L467.772416 688.736256c-10.058752 9.735168-26.573824 9.30816-36.928512-0.712704l-140.93312-136.393728c-6.38976-6.18496-7.424-15.802368-1.790976-22.684672l13.170688-16.093184c5.398528-6.597632 15.49824-8.25344 22.63552-3.636224l113.998848 73.746432c6.012928 3.8912 16.362496 3.38432 21.976064-1.031168l301.232128-236.868608c6.770688-5.3248 17.37728-4.871168 23.31136 0.872448zM512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z',
              }),
            );
          }, 'PassedOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M483.555328 483.780608V284.669952c0-15.709184 12.735488-28.444672 28.444672-28.444672h0.146432c15.628288 0.08192 28.23168 12.816384 28.14976 28.443648l-1.033216 199.11168h200.292352c15.709184 0 28.444672 12.735488 28.444672 28.444672s-12.735488 28.444672-28.444672 28.444672H538.968064l-1.041408 200.440832c-0.077824 14.997504-12.25728 27.11552-27.255808 27.11552-14.974976 0-27.11552-12.140544-27.11552-27.11552V540.668928H284.444672c-15.709184 0-28.444672-12.735488-28.444672-28.444672s12.735488-28.444672 28.444672-28.444672h199.110656zM512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z',
              }),
            );
          }, 'AddOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M454.7072 426.667008l-81.883136-81.883136c-11.108352-11.108352-11.108352-29.11744 0-40.225792 11.108352-11.108352 29.118464-11.108352 40.226816 0l99.959808 99.959808 99.959808-99.959808c11.108352-11.108352 29.118464-11.108352 40.226816 0 11.108352 11.108352 11.108352 29.11744 0 40.225792l-81.883136 81.883136h82.90816c15.709184 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.735488 28.444672-28.444672 28.444672H540.444672v85.334016h113.77664c15.710208 0 28.445696 12.734464 28.445696 28.443648 0 15.710208-12.735488 28.444672-28.444672 28.444672H540.444672v113.777664C540.444672 755.264512 527.70816 768 512 768s-28.444672-12.735488-28.444672-28.444672v-113.77664h-113.77664c-15.710208 0-28.445696-12.735488-28.445696-28.445696 0-15.70816 12.735488-28.443648 28.444672-28.443648h113.777664v-85.334016h-113.77664c-15.710208 0-28.445696-12.734464-28.445696-28.444672 0-15.70816 12.735488-28.443648 28.444672-28.443648h84.929536zM512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z',
              }),
            );
          }, 'GoldCoinOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336C292.068352 113.777664 113.777664 292.068352 113.777664 512c0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656zM540.444672 711.110656h28.444672c15.70816 0 28.443648 12.735488 28.443648 28.444672S584.598528 768 568.889344 768H455.110656c-15.70816 0-28.443648-12.735488-28.443648-28.444672s12.734464-28.444672 28.443648-28.444672h28.444672v-256h-14.222336c-15.70816 0-28.443648-12.734464-28.443648-28.443648 0-15.710208 12.734464-28.444672 28.443648-28.444672H512c15.709184 0 28.444672 12.734464 28.444672 28.444672v284.443648zM512 298.667008m-42.667008 0a42.667008 42.667008 0 1 0 85.334016 0 42.667008 42.667008 0 1 0-85.334016 0Z',
              }),
            );
          }, 'InfoOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M683.776 534.258688L473.307136 702.631936c-12.26752 9.814016-30.16704 7.825408-39.980032-4.442112a28.444672 28.444672 0 0 1-6.233088-17.769472V343.67488c0-15.70816 12.734464-28.443648 28.444672-28.443648a28.444672 28.444672 0 0 1 17.768448 6.232064L683.776 489.836544c12.26752 9.812992 14.256128 27.713536 4.442112 39.980032a28.444672 28.444672 0 0 1-4.442112 4.442112zM512 910.22336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z',
              }),
            );
          }, 'PlayCircleOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M419.555328 341.332992c19.637248 0 35.555328 15.919104 35.555328 35.556352v270.221312c0 19.637248-15.91808 35.556352-35.555328 35.556352-19.636224 0-35.555328-15.919104-35.555328-35.556352V376.889344c0-19.637248 15.919104-35.556352 35.555328-35.556352z m184.889344 0c19.636224 0 35.555328 15.919104 35.555328 35.556352v270.221312c0 19.637248-15.919104 35.556352-35.555328 35.556352-19.637248 0-35.555328-15.919104-35.555328-35.556352V376.889344c0-19.637248 15.91808-35.556352 35.555328-35.556352zM512 910.22336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z',
              }),
            );
          }, 'PauseCircleOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M398.768128 369.523712h227.555328c15.710208 0 28.444672 12.735488 28.444672 28.444672v227.555328c0 15.710208-12.734464 28.444672-28.444672 28.444672H398.768128c-15.709184 0-28.444672-12.734464-28.444672-28.444672V397.968384c0-15.709184 12.735488-28.444672 28.444672-28.444672zM512 910.22336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z',
              }),
            );
          }, 'StopCircleOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656zM475.029504 263.806976c-0.131072-5.88288 4.069376-10.651648 10.23488-10.651648h59.160576c5.783552 0 10.37312 4.472832 10.233856 10.651648l-8.424448 376.91904c-0.131072 5.88288-5.127168 10.651648-10.52672 10.651648h-41.726976c-5.682176 0-10.38848-4.471808-10.52672-10.651648l-8.424448-376.91904z m39.815168 507.037696c-21.993472 0-39.82336-17.828864-39.82336-39.82336 0-21.992448 17.829888-39.821312 39.82336-39.821312s39.822336 17.828864 39.822336 39.822336-17.828864 39.822336-39.82336 39.822336z',
              }),
            );
          }, 'WarningOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656zM434.828288 395.219968c-6.02112-11.40736-14.3872-24.936448-23.446528-37.878784-8.951808-12.78976-18.326528-24.713216-26.944512-33.650688-8.143872-8.445952-12.020736-10.801152-11.614208-10.801152-4.61824 0-21.459968 15.425536-33.491968 31.466496-15.03744 20.052992-26.441728 43.237376-26.441728 60.583936 0 18.250752 12.270592 47.373312 31.744 78.977024 20.845568 33.82784 49.95072 70.610944 81.503232 102.99392l10.69056 10.693632c32.64512 31.811584 69.4272 60.91776 103.256064 81.762304 31.587328 19.469312 60.7232 31.744 78.973952 31.744 17.35168 0 40.542208-11.406336 60.58496-26.43968 16.043008-12.034048 31.468544-28.874752 31.468544-33.49504 0 0.407552-2.3552-3.468288-10.797056-11.609088-8.941568-8.62208-20.865024-17.995776-33.652736-26.947584-12.954624-9.066496-26.48064-17.429504-37.876736-23.44448-13.014016-6.867968-18.501632-8.6016-20.371456-8.63744 0.34816 0.00512 0.279552 0.125952-1.470464 2.6624-2.316288 3.354624-4.27008 7.350272-8.475648 17.083392-1.385472 3.202048-1.385472 3.202048-3.178496 7.18848-0.915456 1.979392-0.915456 1.979392-1.908736 4.031488-2.308096 4.698112-4.352 8.275968-6.995968 11.593728l-11.234304 14.094336-17.542144-4.140032c-10.391552-2.45248-25.37984-10.1376-44.027904-22.838272-18.898944-12.872704-39.202816-29.376512-55.277568-45.04576-15.13984-15.545344-31.643648-35.85024-44.514304-54.74816-12.6976-18.640896-20.383744-33.632256-22.837248-44.024832l-4.143104-17.54624 14.099456-11.235328c3.31776-2.644992 6.89664-4.688896 11.598848-6.998016 2.045952-0.990208 2.045952-0.990208 4.020224-1.902592 3.991552-1.794048 3.991552-1.794048 7.202816-3.183616 9.734144-4.20864 13.723648-6.15936 17.08544-8.47872 2.516992-1.73568 2.640896-1.80736 2.646016-1.46432-0.034816-1.872896-1.7664-7.356416-8.631296-20.365312z m-37.9648 242.870272l-11.2128-11.214848c-34.639872-35.549184-66.335744-75.606016-89.449472-113.114112C271.497216 473.668608 256 436.8896 256 404.939776c0-33.15712 15.906816-65.49504 37.819392-94.716928C317.652992 278.448128 342.160384 256 372.82304 256c18.782208 0 34.697216 9.672704 52.56704 28.203008 11.044864 11.455488 22.089728 25.503744 32.596992 40.51456 10.364928 14.80704 19.968 30.338048 27.153408 43.95008 10.889216 20.634624 15.208448 34.553856 15.208448 46.98112 0 19.661824-10.067968 36.38784-27.234304 48.2304-5.082112 3.505152-9.515008 6.00064-15.956992 9.024512a282.857472 282.857472 0 0 0 3.647488 5.48864c11.037696 16.206848 25.452544 33.942528 37.720064 46.55104 13.13792 12.796928 30.874624 27.213824 47.0784 38.25152 1.91488 1.302528 3.74784 2.51904 5.489664 3.647488 3.023872-6.443008 5.525504-10.883072 9.03168-15.960064 11.84256-17.164288 28.56448-27.234304 48.2304-27.234304 12.422144 0 26.343424 4.323328 46.98112 15.214592 13.59872 7.176192 29.125632 16.77824 43.945984 27.150336 15.01184 10.507264 29.059072 21.553152 40.518656 32.601088 18.526208 17.865728 28.198912 33.78176 28.198912 52.56192 0 30.66368-22.448128 55.171072-54.222848 79.003648-29.206528 21.90848-61.555712 37.820416-94.72 37.820416-31.9488 0-68.747264-15.50336-108.82048-40.20224-37.507072-23.112704-77.56288-54.8096-113.373184-89.70752z',
              }),
            );
          }, 'PhoneCircleOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 910.222336c-219.534336 0-398.222336-178.688-398.222336-398.222336S292.465664 113.777664 512 113.777664 910.222336 292.465664 910.222336 512 731.534336 910.222336 512 910.222336m0-853.332992c-251.334656 0-455.110656 203.776-455.110656 455.110656 0 251.334656 203.776 455.110656 455.110656 455.110656 251.334656 0 455.110656-203.776 455.110656-455.110656 0-251.334656-203.776-455.110656-455.110656-455.110656m-49.777664 682.665984h-71.11168c-27.419648 0-49.77664-22.356992-49.77664-49.77664 0-27.421696 22.356992-49.778688 49.77664-49.778688h71.11168C489.643008 640 512 662.356992 512 689.777664s-22.356992 49.777664-49.777664 49.777664M673.678336 300.032l-116.451328-67.185664c-4.380672-3.072-9.387008-5.291008-15.190016-5.291008H538.851328c-13.766656 0-24.576 10.467328-26.22464 23.665664-0.057344 0.683008-0.285696 1.195008-0.342016 1.878016-0.057344 0.454656-0.284672 0.852992-0.284672 1.307648v341.618688c-14.961664-7.964672-31.686656-12.914688-49.777664-12.914688h-71.11168c-58.88 0-106.665984 47.787008-106.665984 106.667008s47.785984 106.667008 106.665984 106.667008h71.11168c58.88 0 106.667008-47.787008 106.667008-106.667008 0-2.446336-0.569344-4.721664-0.740352-7.110656h0.740352V305.26464l76.34432 44.089344a28.326912 28.326912 0 0 0 14.164992 3.811328c9.842688 0 19.39968-5.12 24.633344-14.222336 7.907328-13.596672 3.243008-31.004672-10.353664-38.912',
              }),
            );
          }, 'MusicOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 877.714432c201.97888 0 365.714432-163.735552 365.714432-365.714432 0-201.97888-163.735552-365.714432-365.714432-365.714432-201.97888 0-365.714432 163.735552-365.714432 365.714432 0 201.97888 163.735552 365.714432 365.714432 365.714432z m0 60.952576C276.358144 938.667008 85.332992 747.641856 85.332992 512 85.332992 276.358144 276.358144 85.332992 512 85.332992c235.641856 0 426.667008 191.025152 426.667008 426.667008 0 235.641856-191.025152 426.667008-426.667008 426.667008zM355.330048 402.285568m-48.761856 0a48.761856 48.761856 0 1 0 97.523712 0 48.761856 48.761856 0 1 0-97.523712 0ZM671.379456 402.285568m-48.761856 0a48.761856 48.761856 0 1 0 97.523712 0 48.761856 48.761856 0 1 0-97.523712 0ZM701.063168 562.796544c5.608448-15.869952 23.020544-24.18688 38.890496-18.578432 15.868928 5.609472 24.18688 23.020544 18.577408 38.890496C722.24256 685.778944 624.896 755.80928 514.23232 755.80928c-110.66368 0-208.011264-70.03136-244.299776-172.700672-5.609472-15.869952 2.70848-33.281024 18.578432-38.890496 15.868928-5.608448 33.28 2.70848 38.889472 18.578432 27.74528 78.497792 102.20032 132.06016 186.831872 132.06016 84.630528 0 159.085568-53.562368 186.830848-132.06016z',
              }),
            );
          }, 'SmileOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M592.57856 335.425536l-6.105088 79.698944 71.964672-8.56064c38.227968-4.554752 64.982016 25.2928 55.424 64.602112-0.293888 0.868352-0.951296 3.342336-1.676288 7.258112-0.529408 2.852864-0.98304 5.9648-1.335296 9.346048-0.16384 1.555456-0.045056 2.628608 0.57856 5.023744 0.413696 1.533952 0.413696 1.533952 0.990208 3.593216 2.751488 9.91232 3.7888 17.634304 2.905088 28.756992-0.831488 10.35776-2.632704 17.417216-5.960704 25.904128-0.570368 1.441792-0.570368 1.441792-1.05472 2.660352-1.482752 3.767296-1.959936 5.52448-2.229248 8.64256-0.347136 4.02944-0.19968 5.518336 0.740352 9.94816 1.656832 7.801856 2.195456 12.818432 1.625088 20.805632-0.759808 10.661888-3.013632 18.789376-6.825984 27.021312-0.536576 1.15712-2.635776 5.430272-2.942976 6.140928-0.626688 2.944-0.60928 5.095424-0.377856 6.688768 0.070656 0.38912 0.070656 0.38912 0.512 3.155968 2.59584 28.427264-17.5616 54.76352-45.824 59.350016l-299.742208 48.622592c-24.29952 3.938304-45.427712-14.0288-45.427712-38.740992V538.22976c0-18.947072 14.260224-36.04992 32.907264-39.51616a8982.016 8982.016 0 0 0 36.616192-6.884352l1.374208-0.262144c17.27488-3.291136 29.362176-5.67296 32.969728-6.52288 16.463872-3.88096 34.3552-34.414592 47.968256-82.7904 5.8368-20.740096 10.523648-43.123712 14.14144-65.53088 2.17088-13.444096 3.492864-23.839744 4.163584-30.32576 2.635776-19.497984 18.325504-36.97664 37.403648-42.037248 0.873472-0.38912 1.780736-0.514048 2.683904-0.62464 0.632832-0.125952 1.26976-0.239616 1.908736-0.33792 42.98752-4.046848 75.99104 28.086272 72.625152 72.02816zM350.48448 540.297216V701.30688l33.51552-5.43744V533.993472a9102.736384 9102.736384 0 0 1-33.51552 6.303744z m174.99648-234.41408c-2.215936 1.017856-4.943872 4.018176-5.157888 5.527552-0.6656 6.565888-2.092032 17.77664-4.407296 32.11264-3.857408 23.89504-8.86784 47.812608-15.19104 70.28736-16.877568 59.972608-39.48544 100.021248-74.05568 111.305728l-0.002048 163.832832 219.488256-35.603456c6.027264-0.97792 10.735616-7.129088 10.775552-9.88672-0.356352-1.42336-0.356352-1.42336-0.854016-4.368384-0.82944-5.70368-0.883712-12.199936 0.273408-19.245056 0.607232-3.709952 1.665024-7.04512 3.16416-10.514432 0.80384-1.855488 3.248128-6.83008 3.38944-7.136256 1.737728-3.750912 2.6112-6.903808 2.983936-12.125184 0.238592-3.344384 0.095232-4.67968-0.768-8.75008-1.774592-8.35584-2.310144-13.778944-1.547264-22.6304 0.673792-7.820288 2.17088-13.331456 5.03808-20.611072l1.032192-2.609152c1.89952-4.842496 2.685952-7.924736 3.151872-13.719552 0.4352-5.491712 0.036864-8.464384-1.486848-13.952-0.5376-1.913856-0.5376-1.913856-1.169408-4.257792-1.815552-6.97856-2.485248-12.982272-1.72032-20.222976 0.467968-4.494336 1.08544-8.722432 1.816576-12.668928 1.110016-5.9904 2.289664-10.431488 2.68288-11.324416 2.041856-8.471552-0.620544-11.442176-9.434112-10.391552l-76.726272 9.126912c-25.012224 2.95424-45.078528-16.44544-43.173888-41.631744l6.454272-84.260864c1.29024-16.847872-8.608768-27.225088-24.55552-26.284032zM512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z',
              }),
            );
          }, 'ThumbCircleOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m0 56.88832c-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336 219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336z m224 170.667008c17.673216 0 32 14.32576 32 32v338.983936c0 17.673216-14.326784 32-32 32H438.417408l-33.1264 63.8208a32 32 0 0 1-13.66016 13.66016c-15.685632 8.1408-35.002368 2.025472-43.144192-13.66016l-33.1264-63.8208H288c-17.673216 0-32-14.326784-32-32v-338.98496c0-17.672192 14.326784-32 32-32h448z m-24.889344 56.88832H312.889344v289.206272h37.03808l26.96192 51.943424 26.960896-51.943424h307.26144V341.332992z',
              }),
            );
          }, 'CommentCircleOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656zM512.002048 341.332992c191.970304 0 284.442624 162.7136 284.442624 170.667008 0 7.962624-90.001408 170.667008-284.442624 170.667008-194.444288 0-284.44672-162.70336-284.44672-170.667008 0-7.954432 92.47232-170.667008 284.44672-170.667008z m0 56.889344c-69.479424 0-128.171008 25.307136-176.523264 68.073472-16.616448 14.696448-30.906368 30.595072-42.176512 45.97248 11.021312 15.251456 25.028608 30.99648 41.388032 45.561856 47.92832 42.67008 106.744832 67.94752 177.311744 67.94752 70.565888 0 129.381376-25.27744 177.307648-67.94752 16.360448-14.565376 30.36672-30.3104 41.388032-45.561856-11.270144-15.377408-25.55904-31.276032-42.175488-45.97248-48.352256-42.766336-107.041792-68.073472-176.520192-68.073472zM512 455.110656c31.418368 0 56.889344 25.470976 56.889344 56.889344S543.418368 568.889344 512 568.889344 455.110656 543.418368 455.110656 512s25.470976-56.889344 56.889344-56.889344z',
              }),
            );
          }, 'BrowsingHistoryOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656zM508.899328 227.555328c10.171392 0 18.688 7.707648 19.700736 17.828864l27.81184 278.119424 173.637632 109.028352c8.669184 5.443584 11.927552 16.490496 7.602176 25.766912-4.3264 9.27744-14.88384 13.881344-24.625152 10.739712l-257.760256-83.130368-0.119808 0.001024 0.003072-0.038912-0.038912-0.011264 0.0512-0.109568 34.03776-340.365312c1.011712-10.121216 9.52832-17.82784 19.699712-17.82784z',
              }),
            );
          }, 'UnderwayOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 903.110656c216.004608 0 391.110656-175.106048 391.110656-391.110656S728.004608 120.889344 512 120.889344 120.889344 295.995392 120.889344 512 295.995392 903.110656 512 903.110656z m0 64C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656zM512 512m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0ZM284.444672 512m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0ZM739.555328 512m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0Z',
              }),
            );
          }, 'MoreOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M170.667008 170.667008v682.665984h682.665984V170.667008H170.667008z m0-56.889344h682.665984c31.419392 0 56.889344 25.469952 56.889344 56.889344v682.665984c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344V170.667008c0-31.419392 25.469952-56.889344 56.889344-56.889344zM170.667008 284.444672h682.665984v56.88832H170.667008zM631.783424 622.775296L439.38816 718.972928c-14.050304 7.02464-31.136768 1.3312-38.162432-12.721152a28.444672 28.444672 0 0 1-3.002368-12.720128V501.13536c0-15.709184 12.734464-28.444672 28.444672-28.444672 4.415488 0 8.77056 1.028096 12.720128 3.003392l192.396288 96.197632c14.051328 7.02464 19.746816 24.111104 12.721152 38.162432a28.444672 28.444672 0 0 1-12.721152 12.721152z m-62.89408-25.442304l-113.778688-56.88832v113.77664l113.778688-56.88832zM284.444672 170.667008h56.88832l57.2416 113.77664h-56.889344zM455.110656 170.667008H512l57.2416 113.77664h-56.889344zM625.777664 170.667008h56.889344l57.2416 113.77664H683.01824z',
              }),
            );
          }, 'VideoOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M804.45952 198.769664c26.104832 0 48.859136 17.7664 55.190528 43.091968l35.75808 143.030272c9.622528 20.4032 14.702592 42.79296 14.702592 65.815552 0 48.293888-22.170624 91.409408-56.889344 119.724032V895.66208c0 23.564288-19.10272 42.667008-42.667008 42.667008H213.219328c-23.563264 0-42.665984-19.10272-42.665984-42.667008V570.431488C135.8336 542.117888 113.664 499.001344 113.664 450.707456c0-23.021568 5.07904-45.412352 14.702592-65.815552l35.75808-143.030272c6.331392-25.325568 29.085696-43.091968 55.190528-43.091968h585.14432z m-170.667008 346.7264c-28.254208 36.284416-72.353792 59.624448-121.905152 59.624448s-93.650944-23.340032-121.905152-59.625472c-28.254208 36.28544-72.353792 59.625472-121.905152 59.625472-14.063616 0-27.687936-1.880064-40.635392-5.402624V881.43872H796.33408V599.717888c-12.947456 3.52256-26.5728 5.402624-40.635392 5.402624-49.55136 0-93.650944-23.340032-121.905152-59.625472z m170.667008-289.837056h-585.14432l-37.269504 149.078016-0.397312 0.749568c-7.08608 13.5168-11.09504 28.900352-11.09504 45.21984 0 53.8624 43.66336 97.52576 97.523712 97.52576 53.322752 0 96.65024-42.795008 97.511424-95.911936l0.012288-1.6128h48.76288l0.012288 1.6128c0.861184 53.116928 44.188672 95.910912 97.511424 95.910912s96.65024-42.79296 97.511424-95.910912l0.012288-1.6128h48.76288l0.012288 1.6128c0.861184 53.116928 44.188672 95.910912 97.511424 95.910912 53.861376 0 97.523712-43.66336 97.523712-97.523712 0-16.320512-4.00896-31.704064-11.09504-45.220864l-0.397312-0.749568-37.269504-149.078016zM796.33408 84.992c15.70816 0 28.443648 12.735488 28.443648 28.444672s-12.734464 28.444672-28.443648 28.444672H227.44064c-15.70816 0-28.443648-12.735488-28.443648-28.444672S211.73248 84.992 227.44064 84.992H796.33408z',
              }),
            );
          }, 'ShopOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M795.947008 625.6896c62.670848 0 113.588224 51.208192 113.588224 114.097152l-0.058368 2.696192-0.022528 0.507904c-0.014336 0.28672-0.033792 0.601088-0.059392 1.019904l0.02048 1.174528c0 11.19232-2.461696 22.526976-6.97344 33.97632l-0.29696 0.800768-0.313344 0.822272c-1.672192 4.31104-3.940352 9.024512-8.92416 17.36192l1.347584-1.808384 0.169984-0.242688 0.04096-0.06144 1.093632-1.8944-0.666624 1.209344 0.0768-0.113664c0.023552-0.0256-0.095232 0.202752-0.533504 1.041408l-0.591872 1.1008-0.412672 0.754688c-1.024 1.855488-1.978368 3.470336-2.665472 4.419584a200.914944 200.914944 0 0 1-6.76864 10.473472c-13.25568 19.223552-31.315968 39.012352-53.075968 59.191296-14.54592 13.489152-29.970432 26.43968-45.6192 38.647808l-3.342336 2.59072c-9.946112 7.653376-26.584064 19.859456-21.825536 16.256a42.963968 42.963968 0 0 1-25.81504 8.621056c-8.99072 0-17.759232-2.761728-25.275392-8.198144l-0.495616-0.362496 0.8192 0.626688 0.0512 0.045056c0.06656 0.12288-15.015936-10.950656-23.640064-17.604608l-0.26624-0.205824c-16.34816-12.635136-32.467968-26.084352-47.632384-40.138752-22.432768-20.789248-40.921088-41.188352-54.268928-61.034496-6.093824-9.060352-11.082752-17.968128-14.922752-26.896384l-0.43008-1.058816c-5.516288-13.180928-8.431616-25.993216-8.431616-38.344704a60.205056 60.205056 0 0 1-0.227328-5.372928c0-62.910464 50.900992-114.097152 113.589248-114.097152 21.951488 0 43.214848 6.504448 61.37344 18.3296 18.13504-11.826176 39.407616-18.3296 61.384704-18.3296z m-5.41696-429.213696c25.57952 0 47.875072 17.408 54.078464 42.222592l35.037184 140.146688c9.428992 19.991552 14.405632 41.930752 14.405632 64.488448 0 83.560448-67.738624 151.299072-151.299072 151.299072-48.551936 0-91.762688-22.868992-119.447552-58.422272-27.684864 35.55328-70.894592 58.422272-119.446528 58.422272s-91.762688-22.868992-119.447552-58.422272c-27.684864 35.55328-70.895616 58.422272-119.446528 58.422272-13.779968 0-27.129856-1.842176-39.816192-5.29408v276.040704h306.581504c15.391744 0 27.870208 12.478464 27.870208 27.871232s-12.478464 27.871232-27.870208 27.871232H211.212288c-23.089152 0-41.805824-18.717696-41.805824-41.806848V560.644096C135.387136 532.89984 113.664 490.653696 113.664 443.333632c0-22.55872 4.97664-44.496896 14.406656-64.488448l35.03616-140.146688c6.204416-24.814592 28.499968-42.222592 54.07744-42.222592h573.346816z m5.41696 484.95616c-15.45216 0-30.342144 6.458368-41.23648 17.825792L734.63808 720.19968l-20.123648-20.892672c-10.990592-11.410432-25.9072-17.876992-41.325568-17.876992-31.5136 0-57.326592 25.64096-57.839616 57.392128l-0.004096 1.118208 0.1536 6.790144 0.03072-0.351232 0.032768-0.961536c0.007168 4.16256 1.291264 9.805824 4.110336 16.53248l0.420864 1.048576c2.31936 5.318656 5.59104 11.136 9.771008 17.350656 10.589184 15.744 26.364928 33.149952 45.90592 51.259392 13.831168 12.818432 28.709888 25.232384 43.829248 36.918272l1.664 1.278976 1.603584 1.221632a1238.3744 1238.3744 0 0 0 11.42272 8.546304l3.25632-2.423808 3.590144-2.689024a745.392128 745.392128 0 0 0 7.3472-5.5808l0.539648-0.417792c15.167488-11.753472 30.107648-24.240128 43.995136-37.118976 18.688-17.330176 33.95072-33.998848 44.537856-49.166336l0.55296-0.796672c1.782784-2.586624 3.41504-5.10976 5.740544-8.88832l0.186368-0.283648 0.263168-0.438272c0.177152-0.3072 0.425984-0.751616 0.836608-1.4848l0.41984-0.845824 0.232448-0.447488c0.100352-0.188416 0.22016-0.403456 0.40448-0.739328l0.976896-1.693696a59.53536 59.53536 0 0 0 3.15392-7.154688c2.2016-5.600256 3.21536-9.975808 3.33824-13.502464l0.014336-0.820224-0.01536-2.924544 0.13312-2.23744v-0.134144c0-32.17408-26.033152-58.355712-57.846784-58.355712z m-5.41696-429.213696H217.186304l-36.518912 146.071552-0.38912 0.734208c-6.94272 13.244416-10.870784 28.317696-10.870784 44.30848 0 52.775936 42.78272 95.558656 95.557632 95.558656 52.246528 0 94.700544-41.931776 95.54432-93.9776l0.013312-1.580032h47.778816l0.012288 1.580032c0.843776 52.045824 43.297792 93.9776 95.545344 93.9776 52.246528 0 94.700544-41.931776 95.54432-93.9776l0.013312-1.580032h47.778816l0.012288 1.580032c0.843776 52.045824 43.297792 93.9776 95.545344 93.9776 52.774912 0 95.557632-42.78272 95.557632-95.557632 0-15.991808-3.928064-31.065088-10.871808-44.309504l-0.38912-0.734208-36.517888-146.071552zM782.568448 84.992c15.392768 0 27.871232 12.478464 27.871232 27.871232s-12.478464 27.871232-27.871232 27.871232H225.147904c-15.392768 0-27.871232-12.478464-27.871232-27.871232S209.75616 84.992 225.147904 84.992h557.41952z',
              }),
            );
          }, 'ShopCollectOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M622.234624 123.076608l332.59008 324.588544c16.873472 16.492544 17.000448 43.175936 0.315392 59.602944L621.918208 835.125248c-16.704512 16.427008-30.246912 10.363904-30.246912-13.116416V650.533888C111.982592 650.533888 58.953728 901.86752 57.344 910.109696l0.4608-18.193408c4.714496-93.572096 52.7104-514.894848 533.866496-584.312832V136.107008c0-23.652352 13.5424-29.62944 30.563328-13.0304z m33.468416 123.053056l0.037888 61.473792c0 32.534528-23.49056 60.1088-55.0912 64.667648C395.674624 401.8432 265.0112 499.80416 189.359104 645.586944a565.121024 565.121024 0 0 0-11.319296 23.088128l-3.750912 8.573952 10.14272-5.855232c94.97088-52.511744 220.99968-83.0208 381.594624-85.940224l25.645056-0.231424c32.857088 0 59.937792 25.212928 63.638528 57.695232l0.43008 7.616512-0.036864 60.546048 237.182976-233.421824L655.70304 246.12864z',
              }),
            );
          }, 'ShareOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M155.974656 818.441216l111.712256-36.077568 21.907456 12.691456C354.75456 832.80384 431.485952 853.332992 512 853.332992c221.49632 0 398.222336-154.63424 398.222336-341.332992 0-186.697728-176.726016-341.332992-398.222336-341.332992S113.777664 325.301248 113.777664 512c0 65.89952 21.848064 129.069056 62.642176 183.640064l19.295232 25.810944-39.74144 96.990208zM512 910.222336c-92.73344 0-178.988032-24.2688-250.923008-65.942528l-145.903616 47.11936a28.444672 28.444672 0 0 1-19.526656-0.74752c-14.53568-5.955584-21.491712-22.56896-15.536128-37.10464l50.74432-123.845632C84.082688 667.132928 56.889344 592.345088 56.889344 512c0-219.931648 203.759616-398.222336 455.110656-398.222336S967.110656 292.068352 967.110656 512c0 219.931648-203.759616 398.222336-455.110656 398.222336zM512 512m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0ZM284.444672 512m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0ZM739.555328 512m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0Z',
              }),
            );
          }, 'ChatOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M349.821952 739.555328h503.51104V170.667008H170.667008v568.88832h113.77664V791.8592l65.378304-52.302848z m19.955712 56.889344l-142.222336 113.77664v-113.77664h-56.88832c-31.419392 0-56.889344-25.469952-56.889344-56.889344V170.667008c0-31.419392 25.469952-56.889344 56.889344-56.889344h682.665984c31.419392 0 56.889344 25.469952 56.889344 56.889344v568.88832c0 31.419392-25.469952 56.889344-56.889344 56.889344H369.777664zM676.49536 455.110656h0.0768c0 94.257152-75.044864 170.667008-167.61856 170.667008-92.457984 0-167.432192-76.219392-167.61856-170.314752v-0.142336c0-15.709184 12.734464-28.444672 28.443648-28.444672 15.639552 0 28.331008 12.621824 28.443648 28.234752 0 63.065088 49.80736 113.778688 110.731264 113.778688 60.2624 0 109.648896-49.619968 110.712832-111.731712a28.874752 28.874752 0 0 1-0.059392-1.84832c0-15.710208 12.734464-28.444672 28.444672-28.444672 15.642624 0 28.337152 12.627968 28.443648 28.246016zM369.77664 284.444672c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648s-28.444672-12.734464-28.444672-28.443648c0-15.710208 12.735488-28.444672 28.444672-28.444672z m284.444672 0c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648s-28.444672-12.734464-28.444672-28.443648c0-15.710208 12.735488-28.444672 28.444672-28.444672z',
              }),
            );
          }, 'SmileCommentOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M910.222336 170.667008c31.403008 0 56.88832 25.486336 56.88832 56.88832v568.889344c0 31.459328-25.485312 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.428992-56.88832-56.88832V227.555328c0-31.401984 25.485312-56.88832 56.88832-56.88832z m0 170.665984H113.77664v455.11168H910.22336V341.332992z m0-113.77664H113.77664v56.88832H910.22336v-56.889344zM245.588992 438.953984h43.350016l66.900992 198.656h1.024l66.900992-198.656h43.350016l-86.699008 243.712h-48.128l-86.699008-243.712z m247.126016 0h39.936v243.712h-39.936v-243.712z m87.721984 0H681.472c58.708992 0 88.404992 24.916992 88.404992 74.752 0 50.176-29.696 75.433984-89.088 75.433984h-60.416v93.526016h-39.936v-243.712z m39.936 34.132992v81.92H678.4c17.748992 0 30.72-3.412992 38.912-9.556992 8.192-6.486016 12.288-17.067008 12.288-31.744 0-14.678016-4.436992-24.918016-12.628992-31.062016C708.779008 476.16 695.808 473.088 678.4 473.088h-58.027008z',
              }),
            );
          }, 'VipCardOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 682.667008c157.093888 0 284.444672-127.350784 284.444672-284.444672 0-157.094912-127.350784-284.444672-284.444672-284.444672-157.093888 0-284.444672 127.34976-284.444672 284.444672 0 157.093888 127.350784 284.444672 284.444672 284.444672z m0 56.88832c-188.51328 0-341.332992-152.819712-341.332992-341.332992 0-188.51328 152.819712-341.332992 341.332992-341.332992 188.51328 0 341.332992 152.819712 341.332992 341.332992 0 188.51328-152.819712 341.332992-341.332992 341.332992zM512 469.332992c39.273472 0 71.110656-31.837184 71.110656-71.110656s-31.83616-71.11168-71.110656-71.11168c-39.273472 0-71.110656 31.838208-71.110656 71.11168 0 39.273472 31.83616 71.110656 71.110656 71.110656z m0 56.889344c-70.692864 0-128-57.30816-128-128 0-70.692864 57.307136-128 128-128s128 57.307136 128 128c0 70.69184-57.307136 128-128 128zM398.222336 881.230848L512 833.035264l113.777664 48.195584V719.214592c-37.376 13.768704-75.220992 20.760576-113.390592 20.760576-38.354944 0-76.455936-7.059456-114.16576-20.958208v162.213888zM341.332992 626.1248c57.264128 37.974016 114.281472 56.961024 171.05408 56.961024 56.771584 0 113.53088-18.987008 170.279936-56.961024v298.04544c0 15.710208-12.735488 28.445696-28.444672 28.445696-3.812352 0-7.584768-0.766976-11.09504-2.2528L512 894.816256l-131.127296 55.544832c-14.465024 6.127616-31.159296-0.631808-37.286912-15.096832a28.444672 28.444672 0 0 1-2.2528-11.094016V626.1248z',
              }),
            );
          }, 'AwardOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M118.79424 415.399936l393.243648 433.903616 393.16992-433.820672-124.901376-187.927552H243.636224L118.79424 415.399936z m-51.597312 27.783168c-12.20096-13.438976-13.713408-32.3584-3.776512-47.244288l136.517632-205.410304c8.249344-12.341248 23.056384-19.878912 39.022592-19.861504h546.07872c15.98464 0 30.795776 7.569408 39.021568 19.946496l136.521728 205.410304c9.9328 14.881792 8.420352 33.80224-3.780608 47.244288L547.245056 895.17056c-8.653824 9.542656-21.602304 15.069184-35.265536 15.051776-13.662208-0.013312-26.59328-5.572608-35.2256-15.136768L67.196928 443.184128z m245.692416-101.850112h398.221312c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H312.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672z',
              }),
            );
          }, 'DiamondOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M298.667008 711.110656l224.561152 157.500416V155.388928L298.667008 312.889344H113.77664v398.221312h184.889344z m0 56.889344H99.555328c-23.564288 0-42.665984-17.19296-42.665984-38.4v-435.2c0-21.20704 19.101696-38.4 42.665984-38.4h199.11168L526.222336 85.332992c31.418368 0 56.88832 17.90976 56.88832 40.000512v773.332992c0 22.091776-25.469952 40.000512-56.88832 40.000512L298.667008 768zM833.81248 190.18752C916.170752 272.54784 967.110656 386.32448 967.110656 512c0 125.67552-50.939904 239.453184-133.298176 321.81248l-40.226816-40.226816C865.649664 721.521664 910.222336 621.966336 910.222336 512c0-109.966336-44.572672-209.52064-116.636672-281.585664l40.226816-40.226816zM713.133056 310.866944C764.606464 362.3424 796.444672 433.453056 796.444672 512c0 78.546944-31.838208 149.6576-83.31264 201.133056l-40.225792-40.226816c41.179136-41.179136 66.649088-98.06848 66.649088-160.90624 0-62.83776-25.469952-119.72608-66.649088-160.90624l40.226816-40.226816z m-20.4032 411.0336c-15.70816 0-28.443648-12.734464-28.443648-28.443648 0-15.710208 12.734464-28.444672 28.443648-28.444672 15.710208 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.734464 28.443648-28.444672 28.443648z m1.072128-361.91744c-15.709184 0-28.444672-12.734464-28.444672-28.444672 0-15.70816 12.735488-28.443648 28.444672-28.443648s28.444672 12.734464 28.444672 28.443648c0 15.710208-12.735488 28.444672-28.444672 28.444672z m119.45472 482.414592c-15.70816 0-28.443648-12.735488-28.443648-28.444672s12.734464-28.444672 28.443648-28.444672c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672z m0.111616-604.019712c-15.710208 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.734464-28.444672 28.444672-28.444672 15.70816 0 28.443648 12.734464 28.443648 28.444672 0 15.70816-12.734464 28.443648-28.443648 28.443648z',
              }),
            );
          }, 'VolumeOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M455.110656 170.667008v113.77664h113.778688v-113.77664H455.110656z m0-56.889344h113.778688c31.418368 0 56.88832 25.469952 56.88832 56.889344v113.77664c0 31.419392-25.469952 56.889344-56.88832 56.889344H455.110656c-31.418368 0-56.88832-25.469952-56.88832-56.88832V170.667008c0-31.419392 25.469952-56.889344 56.88832-56.889344zM113.777664 739.555328v113.777664h113.777664v-113.77664h-113.77664z m0-56.88832h113.777664c31.419392 0 56.889344 25.469952 56.889344 56.88832v113.777664c0 31.419392-25.469952 56.889344-56.889344 56.889344h-113.77664c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-113.77664c0-31.419392 25.469952-56.889344 56.88832-56.889344zM455.110656 739.555328v113.777664h113.778688v-113.77664H455.110656z m0-56.88832h113.778688c31.418368 0 56.88832 25.469952 56.88832 56.88832v113.777664c0 31.419392-25.469952 56.889344-56.88832 56.889344H455.110656c-31.418368 0-56.88832-25.469952-56.88832-56.889344v-113.77664c0-31.419392 25.469952-56.889344 56.88832-56.889344zM796.444672 739.555328v113.777664h113.77664v-113.77664h-113.77664z m0-56.88832h113.77664c31.419392 0 56.889344 25.469952 56.889344 56.88832v113.777664c0 31.419392-25.469952 56.889344-56.88832 56.889344H796.444672c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-113.77664c0-31.419392 25.469952-56.889344 56.889344-56.889344zM160.057344 682.667008c45.197312-139.911168 171.505664-243.360768 323.497984-254.922752V284.444672h56.889344v143.299584c151.99232 11.561984 278.300672 115.011584 323.497984 254.922752h-60.383232c-42.225664-108.12416-142.861312-186.998784-263.114752-197.8368v197.8368h-56.889344v-197.8368c-120.25344 10.838016-220.889088 89.71264-263.114752 197.8368h-60.383232z',
              }),
            );
          }, 'ClusterOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M549.02272 108.048384l358.114304 306.95424c11.927552 10.223616 13.308928 28.18048 3.085312 40.108032s-28.18048 13.308928-40.108032 3.085312l-16.781312-14.383104v409.520128c0 31.419392-25.515008 56.89344-56.99072 56.89344h-170.56768c-31.475712 0-56.99072-25.474048-56.99072-56.89344V682.667008l-114.236416-0.004096 0.028672 170.674176c0 31.418368-25.516032 56.88832-56.991744 56.88832H227.657728c-31.475712 0-56.99072-25.473024-56.99072-56.892416V443.81184l-16.781312 14.384128c-11.927552 10.223616-29.884416 8.84224-40.108032-3.085312-10.223616-11.926528-8.84224-29.884416 3.085312-40.108032l358.11328-306.95424c21.305344-18.260992 52.742144-18.260992 74.046464 0zM512 151.240704l-284.343296 243.72224v458.37312h169.928704l-0.028672-170.665984c-0.004096-31.418368 25.50784-56.892416 56.988672-56.895488l114.23744 0.003072c31.475712 0 56.991744 25.469952 56.991744 56.889344v170.67008h170.56768V394.962944L512 151.240704z',
              }),
            );
          }, 'WapHomeOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M312.889344 398.222336c-15.702016 0-28.444672-12.8-28.444672-28.444672 0-15.644672 12.742656-28.444672 28.444672-28.444672 15.700992 0 28.443648 12.8 28.443648 28.444672 0 15.644672-12.742656 28.444672-28.443648 28.444672m0-113.777664c-47.161344 0-85.334016 38.228992-85.334016 85.332992s38.172672 85.332992 85.334016 85.332992c47.16032 0 85.332992-38.228992 85.332992-85.332992s-38.172672-85.332992-85.332992-85.332992M669.582336 335.531008c-11.321344-13.25568-27.249664-19.91168-43.179008-19.91168-16.156672 0-32.31232 6.883328-43.689984 20.537344L341.332992 625.77664l-73.499648-73.556992C256.681984 541.069312 242.118656 535.552 227.555328 535.552c-14.505984 0-29.070336 5.518336-40.220672 16.668672l-73.556992 73.556992V227.555328H910.22336v388.721664l-240.64-280.745984z m240.64 460.91264H113.77664v-90.22464l113.777664-113.777664 73.558016 73.556992c23.66464 23.665664 62.52032 21.844992 83.968-3.868672L626.28864 372.508672h0.113664L910.22336 703.715328v92.729344z m0-625.77664H113.77664c-31.403008 0-56.88832 25.428992-56.88832 56.88832v568.88832c0 31.403008 25.485312 56.889344 56.88832 56.889344H910.22336c31.459328 0 56.88832-25.486336 56.88832-56.88832V227.555328c0-31.459328-25.428992-56.88832-56.88832-56.88832z',
              }),
            );
          }, 'PhotoOutlined')),
        m = u,
        w =
          (a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M113.777664 227.555328v568.889344H910.22336V227.555328H113.77664z m0-56.88832H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.88832v568.889344c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832V227.555328c0-31.418368 25.469952-56.88832 56.88832-56.88832zM597.584896 547.371008l73.4208 36.7104c14.051328 7.026688 19.746816 24.112128 12.721152 38.163456-7.02464 14.050304-24.111104 19.745792-38.161408 12.720128l-105.120768-52.559872v270.927872h-56.889344V582.40512l-105.120768 52.559872c-14.050304 7.025664-31.136768 1.3312-38.161408-12.720128-7.025664-14.051328-1.3312-31.136768 12.720128-38.162432l73.66656-36.83328c-33.435648-7.036928-59.881472-17.62304-73.867264-30.80192-42.267648-39.8336-42.267648-106.343424-0.605184-148.005888 20.073472-20.073472 46.845952-31.17056 75.23328-31.17056 20.145152 0 39.469056 5.583872 56.13568 15.968256V227.555328h56.88832v126.201856c16.850944-10.71616 36.481024-16.4864 56.957952-16.4864 28.387328 0 55.160832 11.097088 75.23328 31.17056 41.663488 41.662464 41.663488 108.172288-0.60416 148.004864-14.066688 13.256704-40.737792 23.888896-74.446848 30.9248zM462.426112 408.66816c-9.41056-9.41056-21.706752-14.508032-35.00544-14.508032-13.294592 0-25.598976 5.09952-35.006464 14.508032-19.245056 19.245056-19.245056 48.812032-0.605184 66.378752 9.276416 8.741888 45.273088 18.622464 90.057728 22.8608-3.59424-44.246016-11.695104-81.560576-19.44064-89.239552z m99.971072 0c-7.744512 7.68-15.845376 44.99456-19.439616 89.239552 44.78464-4.238336 80.781312-14.118912 90.056704-22.8608 18.639872-17.56672 18.639872-47.13472-0.60416-66.378752-9.408512-9.408512-21.712896-14.508032-35.007488-14.508032-13.298688 0-25.593856 5.097472-35.00544 14.508032z',
              }),
            );
          }, 'GiftCardOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M170.667008 170.667008v682.665984h682.665984V170.667008H170.667008z m0-56.889344h682.665984c31.419392 0 56.889344 25.469952 56.889344 56.889344v682.665984c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344V170.667008c0-31.419392 25.469952-56.889344 56.889344-56.889344zM597.332992 227.555328H768c15.709184 0 28.444672 12.735488 28.444672 28.444672S783.70816 284.444672 768 284.444672H597.332992c-15.70816 0-28.443648-12.735488-28.443648-28.444672s12.734464-28.444672 28.443648-28.444672zM768 227.555328c15.709184 0 28.444672 12.735488 28.444672 28.444672v170.667008c0 15.70816-12.735488 28.443648-28.444672 28.443648s-28.444672-12.734464-28.444672-28.443648V256c0-15.709184 12.735488-28.444672 28.444672-28.444672zM617.4464 446.780416c-11.108352 11.107328-29.118464 11.107328-40.226816 0-11.107328-11.108352-11.107328-29.118464 0-40.226816l170.667008-170.667008c11.108352-11.108352 29.118464-11.108352 40.226816 0 11.108352 11.108352 11.108352 29.118464 0 40.226816L617.4464 446.780416zM426.667008 796.444672H256c-15.709184 0-28.444672-12.735488-28.444672-28.444672S240.29184 739.555328 256 739.555328h170.667008c15.70816 0 28.443648 12.735488 28.443648 28.444672s-12.734464 28.444672-28.443648 28.444672zM256 796.444672c-15.709184 0-28.444672-12.735488-28.444672-28.444672V597.332992c0-15.70816 12.735488-28.443648 28.444672-28.443648s28.444672 12.734464 28.444672 28.443648V768c0 15.709184-12.735488 28.444672-28.444672 28.444672zM406.5536 577.219584c11.108352-11.107328 29.118464-11.107328 40.226816 0 11.107328 11.108352 11.107328 29.118464 0 40.226816L276.113408 788.113408c-11.108352 11.108352-29.118464 11.108352-40.226816 0-11.108352-11.108352-11.108352-29.118464 0-40.226816l170.667008-170.667008z',
              }),
            );
          }, 'ExpandOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M457.13408 288.830464a343.783424 343.783424 0 0 1 54.86592-4.385792c14.949376 0 29.673472 0.960512 44.114944 2.824192 4.286464 0.519168 8.544256 1.115136 12.7744 1.788928V113.777664h56.88832v189.621248a318.503936 318.503936 0 0 1 39.936 17.17248l73.841664-110.30016V113.77664H284.444672v96.644096l73.1136 110.368768a328.276992 328.276992 0 0 1 40.66304-17.329152V113.777664h56.889344v175.371264c0.673792-0.10752 1.347584-0.214016 2.0224-0.31744z m256.91136 61.807616c84.46976 62.134272 139.287552 162.235392 139.287552 275.139584 0 188.51328-152.819712 341.332992-341.332992 341.332992-188.51328 0-341.332992-152.819712-341.332992-341.332992 0-112.64512 54.565888-212.54656 138.707968-274.711552L237.018112 241.83808a56.889344 56.889344 0 0 1-9.46176-31.417344v-96.644096c0-31.418368 25.468928-56.88832 56.88832-56.88832h455.110656c31.419392 0 56.889344 25.469952 56.889344 56.88832v96.493568a56.889344 56.889344 0 0 1-9.61536 31.647744l-72.784896 108.71808z m-31.68768 47.331328l-0.169984 0.252928a284.237824 284.237824 0 0 0-17.338368-12.374016c-34.506752-22.028288-74.083328-36.81792-116.588544-42.225664-11.69408-1.37216-23.66464-2.05824-35.91168-2.05824-15.492096 0-30.57664 1.097728-45.252608 3.293184C331.337728 366.3872 227.555328 483.96288 227.555328 625.777664c0 157.094912 127.350784 284.444672 284.444672 284.444672 157.093888 0 284.444672-127.34976 284.444672-284.444672 0-93.198336-44.822528-175.92832-114.086912-227.808256zM512 545.325056l-80.452608 80.452608L512 706.23232l80.452608-80.453632L512 545.325056z m40.226816-40.226816l80.452608 80.452608c22.216704 22.216704 22.216704 58.236928 0 80.453632l-80.452608 80.452608c-22.216704 22.216704-58.236928 22.216704-80.453632 0l-80.452608-80.452608c-22.216704-22.216704-22.216704-58.236928 0-80.453632l80.452608-80.452608c22.216704-22.216704 58.236928-22.216704 80.453632 0z',
              }),
            );
          }, 'MedalOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M341.220352 398.246912c17.26976-6.244352 29.75232-11.569152 37.44768-15.9744 21.505024-12.312576 39.745536-29.079552 54.720512-50.300928 22.723584-32.201728 26.955776-47.039488 51.61984-137.167872 1.619968-5.922816 4.880384-14.014464 9.7792-24.274944 22.669312-37.996544 54.940672-56.951808 96.813056-56.864768 40.452096 0 72.810496 18.95424 97.0752 56.864768 6.047744 10.46528 10.329088 22.153216 12.843008 35.06688 2.514944 12.91264 2.514944 27.74016 0 44.48256l-44.780544 156.270592c-0.792576 2.480128-0.792576 4.291584 0 5.436416 0.854016 1.232896 2.100224 1.849344 3.739648 1.849344h136.04352l-0.150528 0.316416h17.739776c52.799488 0 96 41.6 96 94.399488 0 8.000512-1.600512 16-3.2 24.000512l-47.879168 305.759232c-9.6 41.6-48 72.000512-92.8 72.000512H170.553344c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-398.22336c0-31.418368 25.469952-56.88832 56.889344-56.88832h170.667008v0.137216z m0 62.841856v392.132608h424.35584c14.400512 0 27.200512-9.6 30.400512-23.999488 38.163456-203.78112 57.244672-310.204416 57.244672-319.270912 0-17.600512-14.399488-32-32-32h-55.215104l-0.280576 0.591872H662.10816c-22.842368 0-40.967168-7.847936-54.3744-23.544832-20.110336-23.543808-18.884608-44.239872-11.570176-70.516736 16.66048-59.84768 30.769152-111.65696 42.330112-155.429888-0.334848-30.70976-14.444544-48.01024-42.330112-51.90144-27.884544-3.8912-46.319616 11.464704-55.305216 46.068736l-23.852032 82.64704c-27.285504 73.653248-80.637952 123.363328-160.05632 149.132288l-15.730688 6.090752zM170.553344 853.221376h113.777664v-398.22336H170.553344v398.22336z',
              }),
            );
          }, 'GoodJobOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M170.667008 713.37984v196.842496h682.665984v-196.84352L669.78816 625.778688H354.21184L170.667008 713.37984z m-24.50432-51.341312l183.54688-87.602176a56.889344 56.889344 0 0 1 24.50432-5.547008h315.573248c8.47872 0 16.850944 1.8944 24.50432 5.547008l183.545856 87.602176a56.889344 56.889344 0 0 1 32.385024 51.341312v196.842496c0 31.418368-25.469952 56.88832-56.889344 56.88832H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.88832v-196.84352a56.889344 56.889344 0 0 1 32.385024-51.340288zM512 455.110656c94.256128 0 170.667008-76.409856 170.667008-170.665984 0-94.257152-76.41088-170.667008-170.667008-170.667008s-170.667008 76.41088-170.667008 170.667008S417.743872 455.110656 512 455.110656zM512 512c-125.67552 0-227.555328-101.879808-227.555328-227.555328S386.32448 56.889344 512 56.889344s227.555328 101.879808 227.555328 227.555328S637.67552 512 512 512z m85.332992 227.555328h113.777664c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672h-113.77664c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.443648-28.444672z',
              }),
            );
          }, 'ManagerOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M796.444672 875.063296V113.77664H227.555328v761.285632L512 732.839936l284.444672 142.22336zM227.555328 56.889344h568.889344c31.418368 0 56.88832 25.469952 56.88832 56.88832v761.285632c0 31.418368-25.469952 56.88832-56.88832 56.88832a56.889344 56.889344 0 0 1-25.44128-6.00576L512 796.444672 252.996608 925.945856c-28.101632 14.051328-62.273536 2.660352-76.32384-25.44128a56.889344 56.889344 0 0 1-6.00576-25.44128V113.77664c0-31.418368 25.469952-56.88832 56.88832-56.88832z m142.22336 227.555328h284.443648c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H369.77664c-15.709184 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.735488-28.444672 28.444672-28.444672z m0 170.665984h284.443648c15.709184 0 28.444672 12.735488 28.444672 28.444672S669.93152 512 654.222336 512H369.77664c-15.709184 0-28.444672-12.735488-28.444672-28.444672s12.735488-28.444672 28.444672-28.444672z',
              }),
            );
          }, 'LabelOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M227.555328 113.777664V908.60544l212.70016-173.191168c41.846784-34.0736 101.87264-34.064384 143.70816 0.021504l212.48 173.121536V113.777664H227.556352z m0-56.88832h568.889344c31.418368 0 56.88832 25.469952 56.88832 56.88832v794.779648c0 31.419392-25.469952 56.889344-56.88832 56.889344a56.889344 56.889344 0 0 1-35.934208-12.785664l-212.48-173.121536c-20.918272-17.043456-50.930688-17.047552-71.85408-0.01024L263.4752 952.71936c-24.364032 19.837952-60.196864 16.16896-80.03584-8.194048a56.889344 56.889344 0 0 1-12.773376-35.919872V113.77664c0-31.418368 25.469952-56.88832 56.88832-56.88832zM654.222336 369.777664c15.709184 0 28.444672 12.735488 28.444672 28.444672 0 93.314048-74.89024 169.136128-167.84384 170.643456l-2.823168 0.023552c-94.08512 0-170.38848-76.132352-170.665984-170.151936v-0.515072c0-15.709184 12.734464-28.444672 28.443648-28.444672 15.709184 0 28.444672 12.735488 28.444672 28.444672C398.222336 461.060096 449.16224 512 512 512s113.777664-50.939904 113.777664-113.777664l0.004096-0.47104c0.25088-15.492096 12.888064-27.973632 28.440576-27.973632z',
              }),
            );
          }, 'BookmarkOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M398.222336 113.777664v56.889344H625.77664V113.77664H398.22336z m398.222336 56.889344H682.667008c0 31.418368-25.469952 56.88832-56.889344 56.88832H398.22336c-31.419392 0-56.889344-25.469952-56.889344-56.88832h-113.77664v739.555328h568.88832V170.667008z m56.88832 0v739.555328c0 31.418368-25.469952 56.88832-56.88832 56.88832H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.88832V170.667008c0-31.419392 25.469952-56.889344 56.88832-56.889344h113.777664c0-31.418368 25.469952-56.88832 56.889344-56.88832H625.77664c31.419392 0 56.889344 25.469952 56.889344 56.88832h113.77664c31.419392 0 56.889344 25.469952 56.889344 56.889344zM512.505856 453.891072l39.72096-39.72096c11.108352-11.108352 29.118464-11.108352 40.225792 0 11.108352 11.108352 11.108352 29.118464 0 40.225792l-29.1584 29.159424h19.816448c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672h-42.665984v28.444672h42.665984c15.710208 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.734464 28.444672-28.444672 28.444672h-42.665984v28.444672c0 15.709184-12.735488 28.444672-28.444672 28.444672s-28.444672-12.735488-28.444672-28.444672V625.77664h-42.665984c-15.710208 0-28.444672-12.734464-28.444672-28.444672 0-15.70816 12.734464-28.443648 28.444672-28.443648h42.665984v-28.444672h-42.665984c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h20.82816l-29.159424-29.159424c-11.108352-11.107328-11.108352-29.11744 0-40.225792 11.108352-11.108352 29.11744-11.108352 40.225792 0l39.72096 39.72096z',
              }),
            );
          }, 'BillOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 113.985536L395.423744 230.560768H230.560768v164.864L113.985536 512l116.575232 116.576256v164.862976h164.864L512 910.014464l116.576256-116.575232h164.862976v-164.864L910.014464 512 793.439232 395.423744V230.560768h-164.864L512 113.985536z m-140.13952 59.686912l99.912704-99.913728c22.216704-22.216704 58.236928-22.216704 80.453632 0l99.912704 99.913728h141.299712c31.418368 0 56.88832 25.469952 56.88832 56.88832v141.299712l99.913728 99.912704c22.216704 22.216704 22.216704 58.236928 0 80.453632l-99.913728 99.912704v141.299712c0 31.418368-25.469952 56.88832-56.88832 56.88832H652.13952l-99.912704 99.913728c-22.216704 22.216704-58.236928 22.216704-80.453632 0l-99.912704-99.913728H230.560768c-31.418368 0-56.88832-25.469952-56.88832-56.88832V652.13952L73.75872 552.226816c-22.216704-22.216704-22.216704-58.236928 0-80.453632l99.913728-99.912704V230.560768c0-31.418368 25.469952-56.88832 56.88832-56.88832h141.299712zM284.65152 429.48096h44.519424v57.752576h48.64512v-57.752576h44.716032v165.03808H377.81504V527.75936h-48.64512v66.758656H284.65152v-165.03808z m161.859584 82.63168c0-26.943488 6.551552-47.920128 19.654656-62.930944 13.103104-15.009792 31.34976-22.514688 54.738944-22.514688 23.979008 0 42.45504 7.3728 55.427072 22.121472 12.972032 14.747648 19.458048 35.4048 19.458048 61.97248 0 19.289088-2.833408 35.105792-8.500224 47.45216-5.666816 12.345344-13.856768 21.952512-24.568832 28.819456-10.71104 6.866944-24.060928 10.30144-40.046592 10.30144-16.248832 0-29.696-2.965504-40.342528-8.894464-10.646528-5.92896-19.277824-15.309824-25.894912-28.143616-6.617088-12.833792-9.925632-28.895232-9.925632-48.183296z m44.5184 0.22528c0 16.66048 2.702336 28.63104 8.107008 35.91168 5.405696 7.28064 12.75904 10.919936 22.063104 10.919936 9.565184 0 16.968704-3.564544 22.21056-10.694656 5.240832-7.130112 7.861248-19.926016 7.861248-38.388736 0-15.536128-2.73408-26.887168-8.205312-34.054144-5.471232-7.168-12.891136-10.752-22.259712-10.752-8.97536 0-16.182272 3.64032-21.620736 10.92096-5.43744 7.279616-8.15616 19.324928-8.15616 36.13696z m113.409024-82.85696h135.324672v40.753152h-45.403136v124.284928h-44.5184V470.234112h-45.403136v-40.753152z',
              }),
            );
          }, 'HotOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M739.555328 0c31.419392 0 56.889344 25.469952 56.889344 56.889344v910.221312c0 31.419392-25.469952 56.889344-56.889344 56.889344H284.444672c-31.419392 0-56.889344-25.469952-56.889344-56.889344V56.889344C227.555328 25.469952 253.02528 0 284.444672 0h455.110656z m0 56.889344H284.444672v910.221312h455.110656V56.889344z m-186.28608 645.12v55.636992c-0.683008 9.899008-2.048 19.456-4.093952 28.331008h107.776v33.792h-121.07776c-1.363968 2.048-2.38592 3.753984-3.40992 5.460992 42.632192 12.288 81.854464 26.964992 117.3248 43.691008l-20.1216 31.060992c-38.540288-21.163008-77.76256-37.888-118.007808-50.516992-24.55552 21.161984-64.801792 37.545984-120.735744 49.152l-19.098624-30.379008c56.615936-11.264 94.473216-24.916992 114.254848-41.300992l7.161856-7.168H369.09568v-33.792h77.76256c-20.123648-11.947008-40.587264-21.163008-61.391872-27.990016l16.71168-24.916992c25.238528 8.192 48.431104 18.432 69.576704 30.036992l-15.00672 22.870016H513.024c2.72896-9.216 4.774912-18.774016 5.797888-28.331008v-55.636992h34.44736z m-22.851584-118.784v23.209984h95.496192v32.086016h-95.496192v22.868992h119.370752v22.187008c-5.115904 23.209984-11.936768 46.08-20.463616 68.608l-33.42336-9.558016c6.81984-13.993984 12.618752-30.377984 17.734656-48.809984H372.847616v-32.427008h122.781696v-22.868992h-97.543168v-32.086016h97.543168v-23.209984h34.788352zM430.82752 697.571328c25.57952 6.827008 49.113088 15.702016 70.59968 25.942016l-17.73568 26.964992c-22.509568-11.947008-45.70112-21.504-69.57568-28.331008l16.71168-24.576z m-36.15232-333.254656l29.672448 14.336c-11.937792 26.281984-25.920512 48.809984-41.609216 67.584l-29.331456-21.504c15.688704-16.726016 29.672448-36.864 41.268224-60.416z m221.006848-5.803008c20.463616 25.259008 35.811328 47.104 46.72512 65.876992l-29.671424 20.822016c-11.255808-20.48-26.60352-43.350016-46.043136-68.608l28.98944-18.091008z m-135.400448 15.700992c6.820864 19.115008 12.618752 39.936 18.075648 62.123008l-35.811328 8.532992c-4.092928-24.233984-9.549824-45.396992-15.68768-63.828992l33.42336-6.827008z m70.59968-4.777984c9.5488 20.48 18.075648 42.324992 25.57952 66.217984l-35.47136 8.534016c-6.13888-25.6-13.98272-48.128-23.53152-67.584l33.42336-7.168z m6.820864-242.006016v40.96h69.576704v69.632c0 35.84 2.045952 60.416 6.81984 74.070016 2.048 6.144 3.75296 9.216 5.116928 9.216 1.70496 0 3.40992-5.12 4.774912-14.678016 1.024-9.216 1.70496-19.456 1.70496-30.377984l26.943488 13.312c-1.70496 30.036992-5.456896 49.492992-11.25376 58.368-4.093952 5.801984-8.86784 8.873984-15.007744 8.873984-12.959744-0.340992-23.532544-5.460992-31.7184-15.017984-14.665728-16.384-22.1696-51.2-22.1696-103.766016v-34.816h-34.787328c-0.681984 23.211008-3.40992 44.715008-8.185856 63.830016 13.983744 10.921984 27.285504 22.528 40.245248 35.497984l-20.1216 30.72c-10.914816-11.604992-21.828608-22.185984-32.7424-31.401984-11.254784 23.552-26.943488 43.008-46.72512 58.368l-26.261504-23.552c19.780608-14.678016 34.44736-33.792 44.337152-57.344-9.549824-7.168-19.098624-13.312-28.648448-18.774016l18.757632-27.988992c6.821888 4.096 13.642752 8.192 20.122624 12.288 2.387968-12.971008 3.751936-26.964992 4.43392-41.643008h-34.788352v-34.816h34.788352v-40.96h34.788352z m-116.642816 0.342016v38.912h37.516288v34.816h-37.516288v40.96l34.788352-10.24v34.132992c-11.595776 3.412992-23.192576 6.484992-34.788352 9.556992v46.422016c0 23.209984-10.913792 34.816-32.741376 34.816h-32.7424l-8.184832-34.134016c9.890816 1.366016 19.439616 2.390016 28.307456 2.390016 6.13888 0 9.549824-4.096 9.549824-11.947008v-29.012992c-15.00672 3.072-29.672448 6.144-44.679168 8.873984l-8.525824-33.108992a665.162752 665.162752 0 0 0 53.204992-9.216v-49.492992h-44.338176v-34.816h44.3392v-38.912h35.810304z',
              }),
            );
          }, 'HotSaleOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M227.555328 56.889344v590.221312c0 49.241088 49.376256 92.444672 113.777664 92.444672h341.334016c64.401408 0 113.77664-43.203584 113.77664-92.444672V56.889344H227.556352zM170.667008 0h682.665984v647.110656c0 82.475008-76.409856 149.334016-170.665984 149.334016H341.332992c-94.256128 0-170.665984-66.859008-170.665984-149.334016V0z m148.609024 483.555328h-34.83136V312.889344h29.326336l61.25568 99.229696h0.800768v-99.229696h34.83136v170.665984h-29.026304l-61.555712-100.175872h-0.800768v100.175872z m212.191232-35.008512v35.008512h-98.989056V312.889344h98.99008v35.008512h-62.257152v33.943552h58.55232v31.93344h-58.55232v34.771968h62.256128z m110.600192-71.554048l-24.322048 106.56256h-34.63168l-37.7344-170.665984h37.935104l19.51744 115.314688h0.800768l24.122368-115.314688h29.425664l24.122368 115.314688h0.800768l19.51744-115.314688h37.93408l-37.7344 170.665984h-34.63168l-24.321024-106.56256h-0.800768z',
              }),
            );
          }, 'NewOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M739.555328 227.555328C896.65024 227.555328 1024 354.906112 1024 512c0 157.093888-127.34976 284.444672-284.444672 284.444672H0V227.555328h739.555328z m0 56.889344H56.889344v455.110656h682.665984c125.67552 0 227.555328-101.879808 227.555328-227.555328s-101.879808-227.555328-227.555328-227.555328zM298.667008 405.958656l29.012992 10.24a244.71552 244.71552 0 0 1-13.995008 34.134016h34.816v29.696h-63.145984v30.72h57.344v29.353984h-57.344v91.478016c0 20.48-11.264 30.72-33.792 30.72h-17.750016l-7.168-30.038016c5.12 1.366016 9.899008 2.048 14.336 2.048 8.192 0 12.288-3.412992 12.288-10.24v-83.968H192.512v-29.353984h60.756992v-30.72h-66.217984v-29.696H223.232c-4.436992-11.947008-9.556992-23.211008-15.36-33.451008l28.331008-10.580992c5.460992 12.288 10.921984 26.964992 15.700992 44.032h32.427008c5.460992-14.336 10.24-29.014016 14.336-44.374016z m176.809984-57.344l15.702016 28.672c-29.355008 10.24-61.782016 16.384-97.28 18.774016v55.296h105.472v31.060992h-32.768v178.859008h-31.744V482.41664h-40.96v34.475008C392.192 576.966656 378.88 624.75264 353.963008 660.59264l-22.870016-24.576c19.456-28.672 30.038016-68.267008 31.403008-119.124992v-147.456c41.984-0.683008 79.531008-7.851008 112.980992-20.822016z m190.806016 153.6v153.6H634.88v-16.384h-63.147008v16.384h-31.744v-153.6h126.294016z m159.060992 0v153.6h-32.427008v-16.384H727.04v16.384h-31.744v-153.6h130.048z m-612.352 52.907008l29.355008 6.144c-8.192 34.475008-19.456 64.512-34.475008 90.112l-26.624-17.067008c15.019008-24.576 25.6-51.2 31.744-79.188992z m106.836992-2.388992C328.704 574.57664 335.872 594.374656 340.992 612.124672l-27.307008 10.24c-5.460992-21.163008-12.288-41.984-20.48-62.464l26.624-7.168zM634.88 532.934656h-63.147008v76.118016H634.88v-76.118016z m158.036992 0H727.04v76.118016h65.876992v-76.118016z m-13.312-175.444992v119.124992H585.728V357.489664h193.876992z m-32.425984 30.72h-129.024v57.684992h129.024v-57.684992z m-476.502016-46.08c4.096 9.216 8.534016 19.456 12.630016 30.72h63.145984v30.036992H190.464v-30.036992h60.756992c-4.096-8.875008-8.873984-17.408-13.993984-25.259008l33.449984-5.460992z',
              }),
            );
          }, 'NewArrivalOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M735.770624 853.2224l-3.54816 0.110592c1.183744 0 2.367488-0.036864 3.54816-0.110592z m0 0c-1.180672 0.073728-2.364416 0.110592-3.54816 0.110592l3.54816-0.110592zM767.97952 512l-10.97728-231.104512c-1.87392-29.98272-26.737664-53.34016-56.778752-53.34016H259.555328c-30.041088 0-54.903808 23.35744-56.777728 53.34016l-32 512a56.889344 56.889344 0 0 0-0.110592 3.549184c0 31.418368 25.469952 56.88832 56.88832 56.88832H512v-56.88832H227.555328l32-512h440.667136l10.9312 230.254592L767.978496 512z m0 0l-10.97728-231.104512c-1.87392-29.98272-26.737664-53.34016-56.778752-53.34016H259.555328c-30.041088 0-54.903808 23.35744-56.777728 53.34016l-32 512a56.889344 56.889344 0 0 0-0.110592 3.549184c0 31.418368 25.469952 56.88832 56.88832 56.88832H512v-56.88832H227.555328l32-512h440.667136l10.9312 230.254592L767.978496 512zM798.900224 597.332992c61.778944 0 111.322112 52.594688 111.322112 116.445184-0.043008 2.593792-0.044032 2.69312-0.136192 4.278272l0.016384 1.011712 0.003072 0.22016c0 11.22816-2.347008 22.636544-6.670336 34.217984-1.67936 4.856832-3.762176 9.716736-9.161728 19.24608 1.390592-1.95584 1.43872-2.024448 1.622016-2.3552l0.018432-0.034816c-0.021504 0.03584 0.011264-0.024576 0.909312-1.66912l-0.637952 1.220608c0.126976-0.203776 0.126976-0.203776-0.44544 0.95232-1.337344 2.65216-2.660352 5.106688-3.540992 6.38976a206.485504 206.485504 0 0 1-6.535168 10.677248c-12.822528 19.628032-30.307328 39.849984-51.37408 60.470272-14.72512 14.414848-30.380032 28.225536-46.241792 41.199616-9.423872 7.707648-27.086848 21.39136-22.285312 17.553408-7.579648 6.00576-16.869376 9.252864-26.445824 9.252864-9.289728 0-18.310144-3.001344-25.92768-8.82176l-0.473088-0.365568 0.119808 0.095232c4.478976 3.57376-13.105152-10.0096-22.412288-17.60256-15.83104-12.914688-31.439872-26.661888-46.125056-41.027584-21.716992-21.243904-39.615488-42.090496-52.525056-62.35136-5.880832-9.229312-10.69056-18.294784-14.385152-27.36128-0.254976-0.647168-0.254976-0.647168-0.407552-1.056768-5.28896-13.343744-8.072192-26.253312-8.072192-38.656-0.161792-2.167808-0.219136-3.565568-0.219136-5.48352 0-63.873024 49.52576-116.445184 111.321088-116.445184 21.233664 0 41.754624 6.452224 59.338752 18.1504 17.5616-11.698176 38.093824-18.1504 59.35104-18.1504z m0 56.889344c-14.189568 0-27.99616 6.321152-38.26688 17.63328l-21.005312 23.135232-21.06368-23.084032c-10.36288-11.354112-24.194048-17.68448-38.35392-17.68448-29.592576 0-54.432768 26.368-54.432768 59.55584 0 0.106496 0.053248 2.419712 0.159744 6.941696 0.03072-0.323584 0.031744-0.347136 0.054272-1.230848 0.006144 4.488192 1.284096 10.41408 4.059136 17.406976 0.262144 0.68608 0.354304 0.925696 0.406528 1.067008 2.258944 5.472256 5.43744 11.439104 9.49248 17.803264 10.23488 16.06144 25.464832 33.799168 44.329984 52.25472 13.350912 13.060096 27.712512 25.70752 42.305536 37.613568 3.4816 2.840576 8.37632 6.71232 12.699648 10.09664 4.324352-3.396608 9.233408-7.29088 12.744704-10.162176 14.639104-11.974656 29.06112-24.696832 42.46528-37.818368 18.359296-17.9712 33.293312-35.243008 43.541504-50.930688 1.726464-2.64192 3.306496-5.2224 5.55008-9.07264 0.273408-0.421888 0.423936-0.700416 1.267712-2.296832 0.519168-1.110016 0.519168-1.110016 1.016832-2.062336l0.944128-1.728512a63.183872 63.183872 0 0 0 3.08224-7.378944c2.248704-6.035456 3.254272-10.76224 3.316736-14.610432l0.003072-0.381952c0.004096 0.272384 0.004096 0.272384-0.014336-3.008512 0.0512-0.89088 0.0512-0.89088 0.086016-1.45408 0.04096-0.746496 0.04096-0.746496 0.044032-1.047552 0-33.16736-24.8576-59.55584-54.432768-59.55584zM512 796.444672c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648s-28.444672-12.734464-28.444672-28.443648c0-15.710208 12.735488-28.444672 28.444672-28.444672z m227.555328-312.889344C755.264512 483.555328 768 496.29184 768 512s-12.735488 28.444672-28.444672 28.444672S711.110656 527.70816 711.110656 512s12.735488-28.444672 28.444672-28.444672z m-256-426.665984c97.202176 0 176 78.7968 176 176h-56.88832c0-65.783808-53.327872-119.11168-119.11168-119.11168-65.782784 0-119.11168 53.327872-119.11168 119.11168h-56.88832c0-97.202176 78.797824-176 176-176z',
              }),
            );
          }, 'GoodsCollectOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M807.954432 376.316928C725.117952 301.010944 623.844352 256 512 256c-111.844352 0-213.117952 45.010944-295.954432 120.316928-58.077184 52.79744-101.267456 119.9616-102.250496 135.175168 0.137216-2.134016 1.082368 0.739328 3.4816 5.76512 4.56704 9.558016 11.793408 21.54496 21.1456 34.748416 21.890048 30.90432 52.386816 64.439296 87.351296 94.84288C312.73984 722.471936 412.740608 768 512 768c99.259392 0 199.261184-45.529088 286.226432-121.150464 34.96448-30.404608 65.461248-63.939584 87.351296-94.84288 9.352192-13.203456 16.57856-25.191424 21.1456-34.74944 2.217984-4.645888 3.192832-7.452672 3.43552-6.269952-1.860608-16.139264-44.746752-82.43712-102.204416-134.670336zM512 199.110656c284.444672 0 455.110656 256 455.110656 312.889344C967.110656 568.889344 768 824.889344 512 824.889344c-256 0-455.110656-256-455.110656-312.889344 0-56.889344 170.665984-312.889344 455.110656-312.889344z m0 142.22336c-94.256128 0-170.667008 76.409856-170.667008 170.665984S417.743872 682.667008 512 682.667008 682.667008 606.256128 682.667008 512 606.256128 341.332992 512 341.332992z m0 56.88832c62.83776 0 113.777664 50.939904 113.777664 113.777664S574.83776 625.777664 512 625.777664 398.222336 574.83776 398.222336 512 449.16224 398.222336 512 398.222336z',
              }),
            );
          }, 'EyeOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M144.384 445.39392c0 0.0256-0.02048 0.04608-0.04608 0.04608h-10.14784a0.04608 0.04608 0 0 1-0.04608-0.04608V435.2h10.24v10.19392zM145.92 434.176h-13.312a0.512 0.512 0 0 0 0 1.024h0.512v10.19392c0 0.590848 0.479232 1.07008 1.07008 1.07008h10.14784c0.590848 0 1.07008-0.479232 1.07008-1.07008V435.2h0.512a0.512 0.512 0 0 0 0-1.024z m-4.096 9.216a0.512 0.512 0 0 0 0.512-0.512v-5.12a0.512 0.512 0 0 0-1.024 0v5.12a0.512 0.512 0 0 0 0.512 0.512m-5.12 0a0.512 0.512 0 0 0 0.512-0.512v-5.12a0.512 0.512 0 0 0-1.024 0v5.12a0.512 0.512 0 0 0 0.512 0.512m2.56 0a0.512 0.512 0 0 0 0.512-0.512v-5.12a0.512 0.512 0 0 0-1.024 0v5.12a0.512 0.512 0 0 0 0.512 0.512m-3.584-10.24h7.168a0.512 0.512 0 0 0 0-1.024h-7.168a0.512 0.512 0 0 0 0 1.024M796.444672 850.779136a2.54976 2.54976 0 0 1-2.56 2.56H230.115328a2.54976 2.54976 0 0 1-2.56-2.56V284.449792h568.889344V850.78016z m85.332992-623.217664H142.22336c-15.700992 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.74368 28.443648 28.444672 28.443648h28.444672V850.78016c0 32.82432 26.624 59.44832 59.44832 59.44832h563.769344c32.82432 0 59.44832-26.624 59.44832-59.44832V284.449792h28.444672c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672zM654.22336 739.555328c15.700992 0 28.444672-12.742656 28.444672-28.444672V426.667008c0-15.702016-12.74368-28.444672-28.444672-28.444672-15.700992 0-28.444672 12.742656-28.444672 28.444672v284.443648c0 15.702016 12.74368 28.444672 28.444672 28.444672m-284.444672 0c15.700992 0 28.444672-12.742656 28.444672-28.444672V426.667008c0-15.702016-12.74368-28.444672-28.444672-28.444672-15.700992 0-28.444672 12.742656-28.444672 28.444672v284.443648c0 15.702016 12.74368 28.444672 28.444672 28.444672m142.222336 0c15.700992 0 28.444672-12.742656 28.444672-28.444672V426.667008c0-15.702016-12.74368-28.444672-28.444672-28.444672-15.700992 0-28.444672 12.742656-28.444672 28.444672v284.443648c0 15.702016 12.74368 28.444672 28.444672 28.444672M312.889344 170.667008h398.221312c15.702016 0 28.444672-12.74368 28.444672-28.444672 0-15.700992-12.742656-28.444672-28.444672-28.444672H312.889344c-15.702016 0-28.444672 12.74368-28.444672 28.444672 0 15.700992 12.742656 28.444672 28.444672 28.444672',
              }),
            );
          }, 'DeleteOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M853.221376 113.664c31.419392 0 56.889344 25.469952 56.889344 56.889344v682.668032c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.553344c-31.419392 0-56.889344-25.469952-56.889344-56.889344V170.553344C113.664 139.133952 139.133952 113.664 170.553344 113.664h682.668032z m0 56.889344H170.553344v682.668032h682.668032V170.553344zM710.99904 284.331008c15.709184 0 28.444672 12.735488 28.444672 28.444672s-12.735488 28.444672-28.444672 28.444672H540.332032v369.778688c0 15.709184-12.735488 28.444672-28.444672 28.444672s-28.444672-12.735488-28.444672-28.444672V341.220352H312.77568c-15.709184 0-28.444672-12.735488-28.444672-28.444672s12.735488-28.444672 28.444672-28.444672h398.22336z',
              }),
            );
          }, 'FontOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M790.25664 851.398656c-31.686656 37.376-77.88032 58.82368-126.862336 58.82368H393.91232c-48.982016 0-95.232-21.44768-126.86336-58.82368-31.686656-37.376-45.225984-86.528-37.203968-134.825984l23.66464-142.166016c22.528-135.053312 138.24-233.07264 275.115008-233.07264 136.932352 0 252.644352 98.019328 275.115008 233.07264l23.665664 142.166016c8.078336 48.297984-5.460992 97.449984-37.148672 134.825984z m-296.04864-566.953984c-56.548352 0-105.700352-41.302016-116.964352-98.19136-1.081344-5.632 1.308672-9.499648 2.787328-11.37664 1.593344-1.93536 4.380672-4.209664 8.59136-4.209664h280.006656c4.265984 0 6.996992 2.275328 8.646656 4.20864 1.478656 1.878016 3.868672 5.746688 2.787328 11.378688-11.264 56.88832-60.416 98.190336-116.963328 98.190336h-68.892672zM883.55328 707.18464l-23.66464-142.164992C840.48896 448.683008 762.20928 355.44064 658.956288 311.808c38.571008-25.657344 67.299328-65.934336 76.913664-114.574336 8.419328-43.179008-24.006656-83.456-67.241984-83.456H388.621312c-43.179008 0-75.662336 40.276992-67.185664 83.456 9.614336 48.64 38.342656 88.916992 76.857344 114.574336-103.140352 43.633664-181.476352 136.875008-200.875008 253.212672L173.75232 707.18464c-22.641664 136.020992 82.204672 259.924992 220.16 259.924992h269.481984c137.899008 0 242.802688-123.904 220.16-259.924992zM599.758848 654.2336c15.700992 0 28.444672-12.742656 28.444672-28.444672 0-15.700992-12.74368-28.444672-28.444672-28.444672h-21.844992l30.150656-30.150656c11.150336-11.150336 11.150336-29.126656 0-40.220672-11.092992-11.150336-29.070336-11.150336-40.220672 0L528.648192 566.1696l-39.196672-39.196672c-11.15136-11.150336-29.12768-11.150336-40.220672 0-11.150336 11.094016-11.150336 29.07136 0 40.220672l30.150656 30.150656h-21.844992c-15.700992 0-28.444672 12.74368-28.444672 28.444672 0 15.702016 12.74368 28.444672 28.444672 28.444672h42.667008v28.444672h-42.667008c-15.700992 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.74368 28.443648 28.444672 28.443648h42.667008v28.444672c0 15.700992 12.742656 28.444672 28.444672 28.444672 15.700992 0 28.443648-12.74368 28.443648-28.444672v-28.444672h42.667008c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672h-42.667008V654.2336h42.667008z',
              }),
            );
          }, 'BalanceOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M568.889344 113.777664c219.931648 0 398.221312 178.290688 398.221312 398.222336 0 219.931648-178.289664 398.222336-398.221312 398.222336-219.932672 0-398.22336-178.290688-398.22336-398.222336 0-219.931648 178.290688-398.222336 398.22336-398.222336z m0 56.889344c-188.51328 0-341.334016 152.819712-341.334016 341.332992 0 188.51328 152.820736 341.332992 341.334016 341.332992 188.512256 0 341.332992-152.819712 341.332992-341.332992 0-188.51328-152.820736-341.332992-341.332992-341.332992z m124.188672 128c13.604864 7.85408 18.266112 25.250816 10.411008 38.85568l-47.45216 82.190336h62.343168c15.709184 0 28.444672 12.735488 28.444672 28.444672s-12.735488 28.444672-28.444672 28.444672H604.60032v56.88832h113.778688c15.709184 0 28.444672 12.735488 28.444672 28.444672s-12.735488 28.444672-28.444672 28.444672H604.60032v113.777664c0 15.709184-12.734464 28.444672-28.443648 28.444672-15.709184 0-28.444672-12.735488-28.444672-28.444672V590.380032h-113.77664c-15.710208 0-28.445696-12.735488-28.445696-28.444672s12.735488-28.444672 28.444672-28.444672h113.77664v-56.88832h-113.77664c-15.709184 0-28.444672-12.735488-28.444672-28.444672s12.735488-28.444672 28.444672-28.444672h40.182784l-47.45216-82.190336c-7.775232-13.468672-3.284992-30.65344 10.006528-38.617088l0.405504-0.238592c13.468672-7.776256 30.65344-3.286016 38.617088 10.005504l0.238592 0.405504 63.875072 110.635008h50.537472l63.876096-110.635008c7.85408-13.604864 25.25184-18.266112 38.85568-10.411008z m-513.421312-39.69536c14.068736 6.991872 19.805184 24.064 12.814336 38.131712-32.897024 66.195456-50.248704 139.277312-50.248704 214.89664 0 55.604224 9.375744 109.887488 27.507712 161.18784 5.234688 14.811136-2.528256 31.062016-17.339392 36.297728-8.810496 3.11296-18.130944 1.62816-25.33888-3.204096a28.391424 28.391424 0 0 1-7.661568-7.018496l-87.465984-115.93728c-9.460736-12.540928-6.9632-30.377984 5.576704-39.83872 12.540928-9.46176 30.37696-6.964224 39.83872 5.576704l10.350592 13.7216A546.88768 546.88768 0 0 1 85.332992 512c0-84.453376 19.408896-166.1952 56.193024-240.214016 6.990848-14.068736 24.064-19.805184 38.130688-12.814336z',
              }),
            );
          }, 'RefundOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M170.667008 568.889344v284.443648h682.665984V568.889344H170.667008z m0-56.889344h682.665984c31.419392 0 56.889344 25.469952 56.889344 56.889344v284.443648c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344V568.889344c0-31.419392 25.469952-56.889344 56.889344-56.889344zM284.444672 398.222336V512h455.110656V398.222336H284.444672z m0-56.889344h455.110656c31.419392 0 56.889344 25.469952 56.889344 56.889344V512c0 31.418368-25.469952 56.889344-56.889344 56.889344H284.444672c-31.419392 0-56.889344-25.470976-56.889344-56.889344V398.222336c0-31.419392 25.469952-56.889344 56.889344-56.889344zM512 227.555328c15.709184 0 28.444672 12.735488 28.444672 28.444672v113.777664c0 15.709184-12.735488 28.444672-28.444672 28.444672s-28.444672-12.735488-28.444672-28.444672V256c0-15.709184 12.735488-28.444672 28.444672-28.444672z m29.809664-91.952128c0 30.900224-15.5904 55.959552-34.816 55.959552s-34.816-25.059328-34.816-55.959552c0-30.900224 15.5904-55.958528 34.816-55.958528s34.816 25.058304 34.816 55.958528zM256 682.667008h512c15.709184 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.735488 28.444672-28.444672 28.444672H256c-15.709184 0-28.444672-12.734464-28.444672-28.444672 0-15.70816 12.735488-28.443648 28.444672-28.443648z',
              }),
            );
          }, 'BirthdayCakeOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M398.222336 568.889344L512 682.665984l113.777664-113.77664h44.009472c8.47872 0 16.850944 1.8944 24.50432 5.547008l183.545856 87.602176a56.889344 56.889344 0 0 1 32.385024 51.341312v196.842496c0 31.418368-25.469952 56.88832-56.889344 56.88832H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.88832v-196.84352a56.889344 56.889344 0 0 1 32.385024-51.340288l183.54688-87.602176a56.889344 56.889344 0 0 1 24.50432-5.547008h44.008448z m-23.564288 56.88832h-20.445184L170.667008 713.37984v196.842496h682.665984v-196.84352L669.78816 625.778688h-20.445184L512 763.119616 374.658048 625.777664zM512 56.889344c125.67552 0 227.555328 101.879808 227.555328 227.555328S637.67552 512 512 512s-227.555328-101.879808-227.555328-227.555328S386.32448 56.889344 512 56.889344z m0 56.88832c-94.256128 0-170.667008 76.41088-170.667008 170.667008S417.743872 455.110656 512 455.110656s170.667008-76.409856 170.667008-170.665984c0-94.257152-76.41088-170.667008-170.667008-170.667008z',
              }),
            );
          }, 'UserOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M796.788736 57.344c31.419392 0 56.889344 25.469952 56.889344 56.889344v796.447744c0 31.419392-25.469952 56.889344-56.889344 56.889344H227.897344c-31.419392 0-56.889344-25.469952-56.889344-56.889344V114.234368C171.008 82.813952 196.477952 57.344 227.897344 57.344h568.891392z m0 56.889344H227.897344v796.447744h568.891392V114.234368zM540.787712 683.124736c15.709184 0 28.444672 12.735488 28.444672 28.444672s-12.735488 28.444672-28.444672 28.444672H370.11968c-15.70816 0-28.443648-12.735488-28.443648-28.444672s12.734464-28.444672 28.443648-28.444672h170.668032z m113.778688-170.667008c15.70816 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.444672-28.444672 28.444672h-284.44672c-15.70816 0-28.443648-12.735488-28.443648-28.444672 0-15.710208 12.734464-28.444672 28.443648-28.444672h284.44672z m0-170.668032c15.70816 0 28.444672 12.735488 28.444672 28.444672s-12.735488 28.444672-28.444672 28.444672h-284.44672c-15.70816 0-28.443648-12.735488-28.443648-28.444672s12.734464-28.444672 28.443648-28.444672h284.44672z',
              }),
            );
          }, 'OrdersOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M170.667008 113.777664h682.665984c31.460352 0 56.889344 25.428992 56.889344 56.889344v512c0 31.459328-25.428992 56.88832-56.889344 56.88832H540.444672v113.777664h170.665984c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H312.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h170.665984v-113.77664H170.667008c-31.460352 0-56.889344-25.430016-56.889344-56.889344v-512c0-31.460352 25.428992-56.889344 56.889344-56.889344z m0 568.889344h682.665984v-512H170.667008v512z m461.11744-248.138752l-192.397312 96.198656c-14.050304 7.02464-31.136768 1.330176-38.162432-12.721152a28.444672 28.444672 0 0 1-3.002368-12.720128V312.889344c0-15.710208 12.734464-28.444672 28.444672-28.444672 4.415488 0 8.77056 1.028096 12.720128 3.002368l192.396288 96.198656c14.051328 7.02464 19.746816 24.111104 12.721152 38.162432a28.444672 28.444672 0 0 1-12.721152 12.720128z',
              }),
            );
          }, 'TvOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M113.777664 227.555328v568.889344H910.22336V227.555328H113.77664z m0-56.88832H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.88832v568.889344c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832V227.555328c0-31.418368 25.469952-56.88832 56.88832-56.88832z m-46.186496 79.121408l35.484672-44.466176 392.153088 312.945664c10.39872 8.298496 25.15968 8.281088 35.53792-0.043008l390.10304-312.859648 35.593216 44.38016-390.104064 312.859648c-31.13472 24.97024-75.419648 25.023488-106.614784 0.129024L67.591168 249.788416z',
              }),
            );
          }, 'EnvelopOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M715.155456 385.266688c-39.262208-10.346496-70.588416-27.63776-108.435456-55.95136-7.17312-5.36576-14.087168-10.71616-27.201536-20.928512-42.791936-33.16224-67.456-47.673344-103.824384-57.64096-39.800832-10.909696-81.45408-15.322112-125.215744-13.186048l-75.323392 281.109504c47.54432-1.4336 92.83584 3.124224 135.7824 13.795328 44.10368 10.957824 76.52352 30.015488 117.547008 63.42144 4.953088 4.03456 9.938944 8.174592 19.264512 15.945728 42.058752 34.922496 65.615872 49.005568 103.942144 57.897984 31.391744 7.283712 54.610944 8.503296 70.372352 5.57056l74.442752-277.825536c-27.159552-1.011712-54.306816-5.082112-81.350656-12.208128z m-457.79968 200.720384l-70.79936 258.535424c-4.840448 17.676288-23.095296 28.082176-40.771584 23.241728-17.677312-4.840448-28.0832-23.095296-23.241728-40.771584l63.432704-231.636992-0.084992 0.016384 100.478976-374.990848c7.46496-27.85792 32.065536-47.706112 60.87168-49.113088 50.68288-2.473984 99.34848 2.681856 145.9968 15.46752 111.604736 30.589952 149.420032 110.790656 238.829568 134.350848 51.16928 13.484032 102.321152 13.689856 153.453568 0.6144L778.120192 722.52928c-31.331328 22.510592-78.47424 26.462208-141.42976 11.854848-118.598656-27.517952-147.074048-113.98144-241.757184-137.506816-42.684416-10.605568-88.544256-14.235648-137.577472-10.889216z',
              }),
            );
          }, 'FlagOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M296.81664 448.282624c7.478272 79.162368 71.632896 141.006848 151.015424 145.577984l58.811392 3.386368 73.549824-3.88096c81.55136-4.3008 146.962432-68.984832 152.174592-150.483968 5.157888-80.649216 7.888896-142.147584 8.251392-183.549952-24.129536 12.797952-35.155968 17.974272-50.33984 22.489088-35.006464 10.411008-69.658624 5.446656-92.6208-27.246592-1.71008-2.433024-14.502912-20.86912-18.786304-26.947584-8.196096-11.630592-15.481856-21.61664-22.708224-31.010816-14.12608-18.362368-26.939392-32.974848-38.135808-43.208704-7.583744-6.93248-12.450816-10.04032-11.42784-10.92096 0.294912 1.85856-11.782144 12.046336-25.94816 30.175232-16.979968 21.72928-34.342912 50.61632-45.266944 73.619456-18.737152 39.45472-56.503296 49.031168-94.103552 39.013376-16.352256-4.356096-27.122688-9.37984-55.4752-24.083456-0.510976 37.736448 2.99008 102.172672 11.011072 187.071488z m244.722688 204.091392V908.6464h-56.88832V652.96384l-40.0896-2.30912c-107.435008-6.185984-194.259968-89.884672-204.38016-197.021696-13.316096-140.954624-15.097856-224.254976-5.347328-249.901056 20.205568-53.139456 128.407552 61.847552 149.163008 18.14528 20.754432-43.70432 76.619776-135.435264 122.509312-136.53504 45.888512-1.098752 109.676544 96.62976 137.704448 136.534016 28.027904 39.90528 146.44736-91.789312 152.296448-9.029632 2.65216 37.5296 0.196608 115.418112-7.366656 233.66656-7.05536 110.299136-95.58016 197.840896-205.949952 203.66336l-41.6512 2.197504z m-111.525888 229.25312l-53.771264 18.572288c-38.41536-111.219712-80.028672-162.09408-120.155136-160.5888-10.706944-0.00512-24.654848 7.799808-39.15776 21.822464-5.542912 5.36064-10.71616 11.175936-15.454208 17.13664-2.57024 3.233792-7.549952 10.01472-7.892992 10.42432l-43.640832-36.494336c-18.014208 21.542912 14.774272-19.712 27.4432-31.963136 24.103936-23.30624 50.05312-37.82656 77.633536-37.794816 72.758272-2.766848 129.164288 66.19136 174.995456 198.885376z m83.074048-0.144384c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648s-28.444672-12.734464-28.444672-28.443648c0-15.710208 12.735488-28.444672 28.444672-28.444672zM404.036608 865.25952c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672c-15.70816 0-28.443648-12.735488-28.443648-28.444672s12.734464-28.444672 28.443648-28.444672z m370.726912-182.51776c27.579392-0.031744 53.528576 14.487552 77.632512 37.79584 11.72992 11.341824 40.70912 47.54944 30.640128 35.755008a28.305408 28.305408 0 0 1 4.772864 15.775744c0 15.710208-12.734464 28.444672-28.444672 28.444672-9.439232 0-17.804288-4.59776-22.97856-11.675648l-0.187392 0.156672c-0.342016-0.4096-5.322752-7.190528-7.892992-10.42432-4.738048-5.960704-9.910272-11.776-15.454208-17.13664-14.502912-14.022656-28.449792-21.827584-39.15776-21.822464-40.126464-1.50528-81.739776 49.369088-120.154112 160.5888l-0.013312-0.004096c-3.410944 11.884544-14.3616 20.581376-27.343872 20.581376-15.70816 0-28.443648-12.735488-28.443648-28.444672a28.3648 28.3648 0 0 1 2.075648-10.688512l-0.047104-0.016384c45.832192-132.694016 102.238208-201.652224 174.99648-198.885376z m-604.096512 60.905472c15.70816 0 28.443648 12.734464 28.443648 28.444672 0 15.70816-12.734464 28.443648-28.443648 28.443648-15.710208 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.734464-28.444672 28.444672-28.444672z',
              }),
            );
          }, 'FlowerOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M540.444672 541.273088l255.719424-370.60608H227.835904l255.719424 370.60608V832.50176l56.889344 34.134016V541.273088z m-113.777664 17.722368L168.701952 185.136128a45.510656 45.510656 0 0 1-8.051712-25.846784c0-25.135104 20.376576-45.51168 45.51168-45.51168h611.67616c9.233408 0 18.24768 2.808832 25.846784 8.051712 20.688896 14.27456 25.88672 42.61888 11.61216 63.306752L597.334016 558.995456v408.1152l-170.665984-102.4v-305.7152z',
              }),
            );
          }, 'FilterOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M170.553344 440.662016v426.668032h113.777664V440.662016H170.553344z m0-56.88832h113.777664c31.419392 0 56.889344 25.469952 56.889344 56.88832v426.668032c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.553344c-31.419392 0-56.889344-25.469952-56.889344-56.889344V440.662016c0-31.418368 25.469952-56.88832 56.889344-56.88832z m284.444672-56.889344v540.44672h113.778688v-540.44672H454.998016z m0-56.889344h113.778688c31.418368 0 56.88832 25.469952 56.88832 56.889344v540.44672c0 31.418368-25.469952 56.88832-56.88832 56.88832H454.998016c-31.418368 0-56.88832-25.469952-56.88832-56.889344v-540.44672c0-31.418368 25.469952-56.88832 56.88832-56.88832z m284.445696-113.777664v711.112704h113.777664V156.217344H739.443712z m0-56.889344h113.777664c31.419392 0 56.889344 25.469952 56.889344 56.889344v711.112704c0 31.419392-25.469952 56.889344-56.889344 56.889344H739.443712c-31.419392 0-56.889344-25.469952-56.889344-56.889344V156.217344c0-31.419392 25.469952-56.889344 56.889344-56.889344z',
              }),
            );
          }, 'BarChartOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M745.32864 155.27936c-15.166464 0-27.462656-12.295168-27.462656-27.46368 0-15.166464 12.296192-27.462656 27.46368-27.462656h109.85472c15.166464 0 27.46368 12.296192 27.46368 27.46368V237.6704c0 15.166464-12.297216 27.46368-27.46368 27.46368-15.168512 0-27.46368-12.297216-27.46368-27.46368v-82.39104h-82.39104zM196.06016 594.697216v274.635776h109.85472V594.696192h-109.85472z m0-54.92736h109.85472c30.334976 0 54.926336 24.592384 54.926336 54.92736v274.635776c0 30.334976-24.59136 54.92736-54.92736 54.92736h-109.85472c-30.334976 0-54.926336-24.592384-54.926336-54.92736V594.696192c0-30.334976 24.59136-54.92736 54.92736-54.92736z m274.634752-54.926336v384.489472h109.85472V484.842496h-109.85472z m0-54.92736h109.85472c30.334976 0 54.92736 24.592384 54.92736 54.92736v384.489472c0 30.334976-24.592384 54.92736-54.92736 54.92736h-109.85472c-30.334976 0-54.92736-24.592384-54.92736-54.92736V484.842496c0-30.334976 24.592384-54.92736 54.92736-54.92736z m274.635776-54.92736v494.344192h109.85472V374.9888H745.32864z m109.85472-54.92736c30.334976 0 54.926336 24.592384 54.926336 54.92736v494.344192c0 30.334976-24.59136 54.92736-54.92736 54.92736H745.32864c-30.334976 0-54.926336-24.592384-54.926336-54.92736V374.9888c0-30.336 24.59136-54.92736 54.92736-54.92736h109.85472z m21.444608-209.399808c9.475072 11.843584 7.555072 29.126656-4.288512 38.601728l-286.18752 228.950016-167.047168-54.150144-263.960576 156.606464c-13.044736 7.739392-29.893632 3.438592-37.632-9.60512-7.740416-13.04576-3.439616-29.894656 9.60512-37.634048l285.309952-169.27232 162.515968 52.680704 263.083008-210.466816c11.843584-9.475072 29.126656-7.555072 38.601728 4.289536z',
              }),
            );
          }, 'ChartTrendingOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M796.444672 56.889344c37.925888 0 56.88832 18.962432 56.88832 56.88832V512c0 56.889344-199.110656 28.444672-227.555328 85.332992-28.444672 56.889344 0 199.11168 0 227.556352 0 28.443648 0 142.221312-113.777664 142.221312s-113.777664-113.77664-113.777664-142.221312c0-28.444672 28.444672-170.667008 0-227.556352C369.77664 540.444672 170.667008 568.889344 170.667008 512V113.777664c0-37.925888 18.962432-56.88832 56.88832-56.88832h568.889344z m0 227.555328H227.555328v204.99456c10.979328 2.740224 26.42944 5.195776 53.741568 8.83712 6.15424 0.8192 6.15424 0.8192 12.4416 1.664 93.700096 12.649472 131.45088 24.12032 155.3664 71.95136 16.590848 33.181696 20.67968 76.36992 17.878016 132.754432-1.041408 20.963328-2.996224 42.380288-5.925888 67.76832-0.986112 8.546304-4.00896 33.332224-4.355072 36.296704-1.08544 9.288704-1.591296 14.892032-1.591296 16.178176 0 57.38496 12.422144 85.332992 56.889344 85.332992 30.396416 0 42.82368-10.43968 50.661376-34.823168 4.840448-15.059968 6.227968-29.889536 6.227968-50.509824 0-1.286144-0.505856-6.889472-1.591296-16.178176-0.346112-2.96448-3.36896-27.7504-4.355072-36.297728-2.92864-25.387008-4.88448-46.803968-5.925888-67.767296-2.801664-56.384512 1.287168-99.572736 17.878016-132.754432 23.91552-47.83104 61.666304-59.301888 155.3664-71.95136 6.28736-0.8448 6.28736-0.8448 12.4416-1.664 27.311104-3.641344 42.76224-6.096896 53.741568-8.83712v-204.99456z m0-170.667008H227.555328v113.777664h568.889344v-113.77664z',
              }),
            );
          }, 'BrushOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M796.444672 154.918912l-326.22592 186.41408H227.555328v341.334016h242.663424l326.22592 186.41408V154.918912z m56.88832 0v714.162176c0 31.419392-25.469952 56.889344-56.88832 56.889344a56.889344 56.889344 0 0 1-28.224512-7.49568l-313.10848-178.919424H227.554304c-31.418368 0-56.88832-25.469952-56.88832-56.88832V341.332992c0-31.418368 25.469952-56.88832 56.88832-56.88832h227.555328l313.10848-178.919424c27.27936-15.588352 62.030848-6.110208 77.6192 21.168128a56.889344 56.889344 0 0 1 7.49568 28.225536zM387.971072 910.222336h54.63552L408.4736 739.555328h-54.63552l34.132992 170.667008zM512 284.444672v455.110656h-45.51168l31.90272 159.510528c6.161408 30.808064-13.81888 60.778496-44.627968 66.940928a56.889344 56.889344 0 0 1-11.15648 1.103872h-54.63552c-27.117568 0-50.465792-19.140608-55.784448-45.73184l-47.741952-238.711808h170.665984v-398.22336H512z',
              }),
            );
          }, 'BullhornOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M170.553344 398.109696v455.11168h170.667008V398.11072H170.553344z m0-56.889344h170.667008c31.418368 0 56.889344 25.469952 56.889344 56.889344v455.11168c0 31.419392-25.470976 56.889344-56.889344 56.889344H170.553344c-31.419392 0-56.889344-25.469952-56.889344-56.889344V398.11072c0-31.419392 25.469952-56.889344 56.889344-56.889344zM625.664 284.331008c15.710208 0 28.444672 12.735488 28.444672 28.444672v56.889344c0 15.709184-12.734464 28.444672-28.444672 28.444672-15.70816 0-28.443648-12.735488-28.443648-28.444672v-56.889344c0-15.709184 12.734464-28.444672 28.443648-28.444672z m0 227.556352c15.710208 0 28.444672 12.735488 28.444672 28.444672v56.889344c0 15.70816-12.734464 28.443648-28.444672 28.443648-15.70816 0-28.443648-12.734464-28.443648-28.443648v-56.889344c0-15.709184 12.734464-28.444672 28.443648-28.444672z m113.778688-113.777664c15.709184 0 28.444672 12.734464 28.444672 28.443648v56.889344c0 15.709184-12.735488 28.444672-28.444672 28.444672s-28.444672-12.735488-28.444672-28.444672v-56.889344c0-15.70816 12.735488-28.443648 28.444672-28.443648z m0 227.555328c15.709184 0 28.444672 12.735488 28.444672 28.444672v56.889344c0 15.709184-12.735488 28.444672-28.444672 28.444672s-28.444672-12.735488-28.444672-28.444672v-56.889344c0-15.709184 12.735488-28.444672 28.444672-28.444672zM511.88736 170.553344v682.668032h341.334016V170.553344H511.88736z m0-56.889344h341.334016c31.419392 0 56.889344 25.469952 56.889344 56.889344v682.668032c0 31.419392-25.469952 56.889344-56.889344 56.889344H511.88736c-31.419392 0-56.889344-25.469952-56.889344-56.889344V170.553344c0-31.419392 25.469952-56.889344 56.889344-56.889344z',
              }),
            );
          }, 'HotelOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M113.777664 170.667008v512H910.22336v-512H113.77664z m426.667008 568.88832v113.777664h170.665984c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H312.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h170.665984v-113.77664h-369.77664c-31.419392 0-56.889344-25.470976-56.889344-56.889344v-512c0-31.419392 25.469952-56.889344 56.88832-56.889344H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.889344v512c0 31.418368-25.469952 56.88832-56.88832 56.88832H540.444672z m-27.938816-407.058432l39.72096-39.72096c11.108352-11.108352 29.118464-11.108352 40.225792 0 11.108352 11.108352 11.108352 29.118464 0 40.225792l-29.1584 29.159424h19.816448c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672h-42.665984v28.443648h42.665984c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672h-42.665984v28.444672c0 15.709184-12.735488 28.444672-28.444672 28.444672s-28.444672-12.735488-28.444672-28.444672v-28.444672h-42.665984c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h42.665984V419.05152h-42.665984c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h20.82816l-29.159424-29.159424c-11.108352-11.107328-11.108352-29.11744 0-40.225792 11.108352-11.108352 29.11744-11.108352 40.225792 0l39.72096 39.72096z',
              }),
            );
          }, 'CashierOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M796.444672 853.332992h56.88832V682.667008h-56.88832v170.665984z m56.88832-227.555328c31.460352 0 56.889344 25.428992 56.889344 56.889344v170.665984c0 31.460352-25.428992 56.889344-56.889344 56.889344H170.667008c-31.460352 0-56.889344-25.428992-56.889344-56.889344V170.667008c0-31.460352 25.428992-56.889344 56.889344-56.889344h568.88832c31.459328 0 56.889344 25.428992 56.889344 56.889344V625.77664h56.88832zM170.667008 853.332992h568.88832V170.667008H170.667008v682.665984z m113.77664-227.555328H398.22336V455.110656H284.444672v170.667008zM256 682.667008c-15.709184 0-28.444672-12.735488-28.444672-28.444672V426.667008c0-15.710208 12.735488-28.444672 28.444672-28.444672h170.667008c15.70816 0 28.443648 12.734464 28.443648 28.444672v227.555328c0 15.709184-12.734464 28.444672-28.443648 28.444672H256z m0-341.334016c-15.709184 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.735488-28.444672 28.444672-28.444672h398.222336c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H256z m284.444672 113.777664c-15.709184 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.735488-28.444672 28.444672-28.444672h113.77664c15.710208 0 28.445696 12.734464 28.445696 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H540.444672z m0 113.778688c-15.709184 0-28.444672-12.735488-28.444672-28.444672S524.735488 512 540.444672 512h113.77664c15.710208 0 28.445696 12.735488 28.445696 28.444672s-12.735488 28.444672-28.444672 28.444672H540.444672z m0.028672 113.77664c-15.725568 0-28.473344-12.746752-28.473344-28.47232 0-15.724544 12.747776-28.47232 28.473344-28.47232H654.19264c15.725568 0 28.473344 12.747776 28.473344 28.47232 0 15.725568-12.7488 28.473344-28.473344 28.473344H540.473344z',
              }),
            );
          }, 'NewspaperOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M509.39392 227.566592l-338.726912 622.55104h677.453824l-338.726912-622.55104z m49.9712-27.189248l338.726912 622.55104c15.015936 27.598848 4.815872 62.144512-22.781952 77.160448a56.889344 56.889344 0 0 1-27.189248 6.91712H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.88832a56.889344 56.889344 0 0 1 6.918144-27.189248l338.726912-622.55104c15.015936-27.597824 49.5616-37.797888 77.159424-22.781952a56.889344 56.889344 0 0 1 22.782976 22.781952zM483.823616 409.63072c-0.093184-4.202496 2.906112-7.60832 7.31136-7.60832h42.256384c4.13184 0 7.40864 3.19488 7.31136 7.60832l-6.018048 269.228032c-0.094208 4.201472-3.662848 7.60832-7.519232 7.60832h-29.805568c-4.058112 0-7.419904-3.19488-7.518208-7.60832l-6.018048-269.228032z m28.439552 362.16832c-15.710208 0-28.444672-12.734464-28.444672-28.443648 0-15.709184 12.734464-28.444672 28.444672-28.444672 15.70816 0 28.443648 12.735488 28.443648 28.444672s-12.734464 28.444672-28.443648 28.444672z',
              }),
            );
          }, 'WarnOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M853.332992 853.332992v-625.77664h-113.77664V256c0 15.709184-12.735488 28.444672-28.445696 28.444672-15.70816 0-28.443648-12.735488-28.443648-28.444672v-28.444672H341.332992V256c0 15.709184-12.734464 28.444672-28.443648 28.444672-15.710208 0-28.444672-12.735488-28.444672-28.444672v-28.444672H170.667008v625.777664h682.665984z m-113.77664-682.665984h113.77664c31.460352 0 56.889344 25.428992 56.889344 56.88832v625.777664c0 31.460352-25.428992 56.889344-56.889344 56.889344H170.667008c-31.460352 0-56.889344-25.428992-56.889344-56.889344v-625.77664c0-31.460352 25.428992-56.889344 56.889344-56.889344h113.77664v-28.444672c0-15.709184 12.735488-28.444672 28.445696-28.444672 15.70816 0 28.443648 12.735488 28.443648 28.444672v28.444672h341.334016v-28.444672c0-15.709184 12.734464-28.444672 28.443648-28.444672 15.710208 0 28.444672 12.735488 28.444672 28.444672v28.444672zM312.88832 625.77664c-15.710208 0-28.444672-12.734464-28.444672-28.444672 0-15.70816 12.734464-28.443648 28.444672-28.443648h398.221312c15.710208 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.734464 28.444672-28.444672 28.444672H312.889344z m0-113.777664c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h398.221312c15.710208 0 28.444672 12.735488 28.444672 28.444672S726.820864 512 711.110656 512H312.889344z m0 227.555328c-15.710208 0-28.444672-12.734464-28.444672-28.444672 0-15.70816 12.734464-28.443648 28.444672-28.443648h170.665984c15.709184 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.735488 28.444672-28.444672 28.444672H312.889344z',
              }),
            );
          }, 'NotesOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M170.667008 227.555328v625.777664h682.665984v-625.77664H170.667008z m540.443648-113.77664c15.710208 0 28.444672 12.734464 28.444672 28.443648v28.444672h113.777664c31.419392 0 56.889344 25.469952 56.889344 56.88832v625.777664c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-625.77664c0-31.419392 25.469952-56.889344 56.889344-56.889344h113.77664v-28.444672c0-15.709184 12.735488-28.444672 28.445696-28.444672 15.70816 0 28.443648 12.735488 28.443648 28.444672v28.444672h341.334016v-28.444672c0-15.709184 12.734464-28.444672 28.443648-28.444672z m-85.776384 374.81984H403.468288V603.51488c-0.569344 48.355328-8.534016 88.17664-23.894016 119.465984l22.756352 20.48c19.910656-36.40832 30.150656-83.910656 30.72-142.222336v-85.332992H595.75296v189.44c0 6.257664-3.414016 9.67168-10.24 9.67168-10.809344 0-22.187008-0.569344-34.418688-1.42336l7.68 28.444672h35.556352c20.48 0 31.003648-8.81664 31.003648-26.16832V488.598528z m-51.76832 137.67168H452.108288v75.377664h121.45664v-75.377664z m-28.444672 24.747008v25.030656H480.55296v-25.030656h64.56832z m-16.212992-129.138688h-28.729344v18.204672h-48.070656v24.46336h48.070656v21.04832h-55.750656v25.6H584.0896v-25.6h-55.18336v-21.049344h46.649344v-24.462336h-46.64832v-18.204672z m324.424704-180.545536H170.667008v56.889344h682.665984v-56.889344z m-512-113.77664h-56.88832V256c0 15.709184 12.734464 28.444672 28.444672 28.444672 15.70816 0 28.443648-12.735488 28.443648-28.444672v-28.444672z m398.22336 0h-56.889344V256c0 15.709184 12.734464 28.444672 28.443648 28.444672 15.710208 0 28.444672-12.735488 28.444672-28.444672v-28.444672z',
              }),
            );
          }, 'CalendarOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M679.211008 668.442624V535.202816c0-74.149888-80.678912-151.204864-170.665984-151.204864-89.98912 0-170.667008 77.056-170.667008 151.204864v133.239808h341.332992z m56.889344-133.239808v190.128128H280.988672V535.20384c0-101.547008 101.880832-208.094208 227.556352-208.094208 125.67552 0 227.555328 106.5472 227.555328 208.094208zM508.545024 99.55328c15.70816 0 28.443648 12.735488 28.443648 28.444672v56.88832c0 15.710208-12.734464 28.444672-28.443648 28.444672-15.710208 0-28.444672-12.734464-28.444672-28.444672v-56.88832c0-15.709184 12.734464-28.444672 28.444672-28.444672z m170.665984 56.889344c13.604864 7.85408 18.266112 25.250816 10.412032 38.85568l-28.444672 49.266688c-7.85408 13.604864-25.25184 18.266112-38.85568 10.412032-13.604864-7.855104-18.266112-25.25184-10.412032-38.856704l28.444672-49.266688c7.85408-13.604864 25.25184-18.266112 38.85568-10.411008z m137.341952 113.77664c11.108352 11.109376 11.108352 29.118464 0 40.226816l-40.226816 40.226816c-11.107328 11.108352-29.11744 11.108352-40.225792 0-11.108352-11.108352-11.108352-29.118464 0-40.226816l40.225792-40.225792c11.108352-11.108352 29.118464-11.108352 40.226816 0zM224.100352 895.998976c0-15.709184 12.734464-28.444672 28.444672-28.444672h512c15.70816 0 28.443648 12.735488 28.443648 28.444672s-12.734464 28.444672-28.443648 28.444672h-512c-15.710208 0-28.444672-12.735488-28.444672-28.444672z m106.156032-739.555328c13.604864-7.855104 31.000576-3.193856 38.85568 10.411008l28.444672 49.266688c7.85408 13.604864 3.192832 31.0016-10.412032 38.856704-13.604864 7.85408-31.000576 3.192832-38.85568-10.412032l-28.444672-49.266688c-7.85408-13.604864-3.192832-31.0016 10.412032-38.85568z m-122.81856 113.77664c11.108352-11.107328 29.118464-11.107328 40.226816 0l40.225792 40.226816c11.108352 11.108352 11.108352 29.118464 0 40.226816-11.108352 11.108352-29.11744 11.108352-40.225792 0l-40.226816-40.226816c-11.108352-11.108352-11.108352-29.11744 0-40.225792z',
              }),
            );
          }, 'BulbOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M511.993856 455.128064c-62.747648 0-113.77664-51.028992-113.77664-113.777664 0-62.748672 51.028992-113.777664 113.77664-113.777664 62.748672 0 113.778688 51.028992 113.778688 113.777664 0 62.748672-51.030016 113.777664-113.778688 113.777664M682.660864 341.3504c0-94.265344-76.401664-170.667008-170.667008-170.667008-94.26432 0-170.665984 76.401664-170.665984 170.667008s76.40064 170.667008 170.665984 170.667008 170.667008-76.401664 170.667008-170.667008m116.001792 446.390272c-6.656 6.940672-13.652992 13.42464-20.763648 19.910656-3.01568 2.673664-5.974016 5.51936-9.046016 8.192-6.20032 5.291008-12.686336 10.070016-19.113984 14.905344-4.380672 3.18464-8.534016 6.598656-12.971008 9.670656-5.404672 3.697664-10.979328 6.998016-16.555008 10.411008-5.74464 3.526656-11.37664 7.22432-17.294336 10.524672-4.550656 2.446336-9.27232 4.550656-13.88032 6.825984-7.11168 3.584-14.164992 7.281664-21.561344 10.411008-3.867648 1.649664-7.907328 2.900992-11.945984 4.436992-8.192 3.185664-16.441344 6.486016-24.918016 9.15968-3.924992 1.193984-8.078336 2.048-12.059648 3.18464-8.64768 2.390016-17.29536 4.893696-26.169344 6.713344-6.371328 1.308672-12.971008 1.99168-19.456 3.01568-6.713344 1.024-13.312 2.332672-20.139008 3.072a404.601856 404.601856 0 0 1-40.788992 2.048c-13.710336 0-27.363328-0.683008-40.788992-2.048-6.827008-0.739328-13.425664-2.048-20.139008-3.072-6.542336-1.024-13.084672-1.707008-19.456-3.01568-8.875008-1.819648-17.521664-4.323328-26.169344-6.71232-3.981312-1.137664-8.134656-1.99168-12.059648-3.185664-8.476672-2.673664-16.726016-5.974016-24.918016-9.15968-4.038656-1.536-8.078336-2.787328-11.945984-4.436992-7.396352-3.129344-14.449664-6.827008-21.561344-10.411008-4.608-2.275328-9.329664-4.379648-13.937664-6.825984-5.859328-3.300352-11.491328-6.998016-17.236992-10.524672-5.57568-3.412992-11.20768-6.713344-16.555008-10.411008-4.436992-3.072-8.646656-6.484992-12.971008-9.670656-6.427648-4.835328-12.91264-9.61536-19.113984-14.905344-3.072-2.67264-6.03136-5.518336-9.046016-8.192-7.110656-6.484992-14.107648-12.969984-20.763648-19.910656a66.158592 66.158592 0 0 1-1.93536-2.161664C285.526016 686.19264 393.10336 625.77664 512 625.77664c118.897664 0 226.417664 60.416 288.596992 159.801344-0.681984 0.739328-1.251328 1.422336-1.934336 2.16064M113.777664 512c0-219.534336 178.688-398.222336 398.222336-398.222336S910.222336 292.465664 910.222336 512c0 84.820992-26.851328 163.270656-72.192 227.897344-71.851008-103.083008-190.748672-171.008-326.030336-171.008-135.281664 0-254.179328 67.924992-326.086656 171.008C140.628992 675.270656 113.77664 596.820992 113.77664 512m755.883008 280.860672c60.814336-77.425664 97.449984-174.705664 97.449984-280.860672 0-251.334656-203.776-455.110656-455.110656-455.110656-251.334656 0-455.110656 203.776-455.110656 455.110656 0 106.155008 36.579328 203.435008 97.449984 280.860672 31.004672 39.424 68.209664 73.556992 110.364672 100.92032 1.593344 0.96768 3.129344 1.820672 4.665344 2.788352a434.100224 434.100224 0 0 0 36.46464 20.820992c3.641344 1.876992 7.396352 3.584 11.036672 5.347328 10.752 5.06368 21.561344 9.785344 32.65536 13.995008 4.835328 1.820672 9.670656 3.64032 14.563328 5.347328 10.467328 3.584 21.10464 6.713344 31.971328 9.556992 5.404672 1.42336 10.638336 2.95936 16.099328 4.153344 11.264 2.502656 22.699008 4.380672 34.246656 6.086656 5.00736 0.683008 9.956352 1.707008 15.076352 2.332672 16.611328 1.820672 33.39264 2.900992 50.516992 2.900992 17.123328 0 33.905664-1.08032 50.516992-2.900992 5.06368-0.625664 10.012672-1.649664 15.076352-2.332672 11.491328-1.705984 22.982656-3.584 34.246656-6.086656 5.460992-1.195008 10.694656-2.731008 16.099328-4.153344 10.809344-2.843648 21.504-5.972992 31.971328-9.556992 4.836352-1.707008 9.67168-3.526656 14.507008-5.347328 11.150336-4.209664 21.95968-8.931328 32.654336-13.995008 3.697664-1.763328 7.452672-3.470336 11.092992-5.347328a434.100224 434.100224 0 0 0 36.465664-20.820992c1.536-0.96768 3.072-1.820672 4.665344-2.788352 42.155008-27.363328 79.36-61.49632 110.364672-100.92032',
              }),
            );
          }, 'UserCircleOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M796.444672 568.889344V113.77664H227.555328v455.11168h568.889344z m-398.22336 113.77664h227.556352v-56.88832H398.22336v56.889344z m341.334016 56.889344H284.444672V910.22336h455.110656V739.555328z m56.889344-682.665984c31.459328 0 56.88832 25.485312 56.88832 56.88832v455.11168c0 31.459328-25.428992 56.88832-56.88832 56.88832H682.667008v56.889344h56.88832c31.459328 0 56.889344 25.486336 56.889344 56.88832V910.22336c0 31.459328-25.430016 56.88832-56.889344 56.88832H284.444672c-31.459328 0-56.889344-25.428992-56.889344-56.88832V739.555328c0-31.401984 25.430016-56.88832 56.889344-56.88832h56.88832V625.77664h-113.77664c-31.460352 0-56.889344-25.428992-56.889344-56.88832V113.77664c0-31.403008 25.428992-56.88832 56.88832-56.88832h568.889344zM597.332992 853.36064c-15.70816 0-28.443648-12.734464-28.443648-28.444672 0-15.70816 12.734464-28.443648 28.443648-28.443648h56.889344c15.709184 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.735488 28.444672-28.444672 28.444672h-56.889344z',
              }),
            );
          }, 'DesktopOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M725.332992 170.667008c-70.69184 0-128 57.307136-128 128 0 70.69184 57.30816 128 128 128 70.692864 0 128-57.30816 128-128 0-70.692864-57.307136-128-128-128z m0-56.889344c102.111232 0 184.889344 82.778112 184.889344 184.889344 0 102.111232-82.778112 184.88832-184.889344 184.88832-102.111232 0-184.88832-82.777088-184.88832-184.88832S623.22176 113.77664 725.332992 113.77664z m-554.665984 56.889344v256h256v-256h-256z m0-56.889344h256c31.418368 0 56.88832 25.469952 56.88832 56.889344v256c0 31.418368-25.469952 56.88832-56.88832 56.88832h-256c-31.419392 0-56.889344-25.469952-56.889344-56.88832v-256c0-31.419392 25.469952-56.889344 56.889344-56.889344z m0 483.555328v256h256v-256h-256z m0-56.88832h256c31.418368 0 56.88832 25.469952 56.88832 56.88832v256c0 31.419392-25.469952 56.889344-56.88832 56.889344h-256c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-256c0-31.418368 25.469952-56.88832 56.889344-56.88832z m426.665984 56.88832v256h256v-256h-256z m0-56.88832h256c31.419392 0 56.889344 25.469952 56.889344 56.88832v256c0 31.419392-25.469952 56.889344-56.889344 56.889344h-256c-31.418368 0-56.88832-25.469952-56.88832-56.889344v-256c0-31.418368 25.469952-56.88832 56.88832-56.88832z',
              }),
            );
          }, 'AppsOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M113.777664 455.110656c-10.223616-11.926528-8.84224-29.884416 3.085312-40.108032l358.11328-306.95424c21.305344-18.260992 52.742144-18.260992 74.046464 0l358.114304 306.95424c11.927552 10.223616 13.308928 28.18048 3.085312 40.108032s-28.18048 13.308928-40.108032 3.085312L512 151.241728l-358.11328 306.95424c-11.928576 10.223616-29.88544 8.84224-40.109056-3.085312zM227.555328 652.423168v144.021504h568.889344V652.423168L512 415.3856 227.555328 652.423168z m-56.88832 0a56.889344 56.889344 0 0 1 20.46976-43.703296l284.443648-237.036544c21.097472-17.58208 51.74272-17.58208 72.839168 0l284.444672 237.036544a56.889344 56.889344 0 0 1 20.46976 43.703296v144.021504c0 31.418368-25.470976 56.88832-56.889344 56.88832H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.88832V652.423168z',
              }),
            );
          }, 'HomeOutlined')),
        g = w,
        f =
          (a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512.631808 253.652992c7.713792-0.35328 15.543296 2.414592 21.433344 8.30464l281.726976 281.726976c11.113472 11.113472 11.113472 29.1328 0 40.246272-11.114496 11.113472-29.1328 11.113472-40.247296 0L540.971008 349.356032v518.56896c0 15.7184-12.741632 28.459008-28.459008 28.459008-15.717376 0-28.459008-12.741632-28.459008-28.459008V349.356032L249.479168 583.93088c-11.114496 11.113472-29.1328 11.113472-40.247296 0-11.113472-11.113472-11.113472-29.1328 0-40.246272l281.726976-281.726976c5.920768-5.920768 13.801472-8.686592 21.553152-8.29952zM797.099008 128c15.717376 0 28.457984 12.741632 28.457984 28.459008 0 15.717376-12.740608 28.457984-28.457984 28.457984H227.924992c-15.717376 0-28.457984-12.740608-28.457984-28.457984 0-15.7184 12.740608-28.459008 28.457984-28.459008h569.174016z',
              }),
            );
          }, 'BackTopOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M412.45184 670.512128c141.384704 0 256-114.615296 256-256s-114.615296-256-256-256-256 114.615296-256 256 114.615296 256 256 256z m241.847296-57.46688l255.670272 255.670272c11.108352 11.108352 11.108352 29.118464 0 40.226816-11.107328 11.108352-29.11744 11.108352-40.225792 0L614.352896 653.551616c-54.493184 46.072832-124.9536 73.849856-201.901056 73.849856-172.803072 0-312.88832-140.085248-312.88832-312.889344S239.648768 101.623808 412.45184 101.623808c172.804096 0 312.889344 140.084224 312.889344 312.88832 0 75.37152-26.650624 144.519168-71.042048 198.53312z',
              }),
            );
          }, 'SearchOutlined')),
        p = f,
        d =
          (a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 483.555328c-234.037248 0-426.667008-82.55488-426.667008-199.110656C85.332992 167.888896 277.962752 85.332992 512 85.332992c234.037248 0 426.667008 82.55488 426.667008 199.11168 0 116.555776-192.62976 199.110656-426.667008 199.110656z m0-56.88832c205.826048 0 369.777664-70.264832 369.777664-142.22336 0-71.95648-163.951616-142.221312-369.777664-142.221312-205.826048 0-369.777664 70.264832-369.777664 142.222336 0 71.95648 163.951616 142.222336 369.777664 142.222336zM204.24192 371.923968l24.38144 51.39968c-56.819712 26.95168-86.401024 59.247616-86.401024 88.676352 0 71.95648 163.951616 142.222336 369.777664 142.222336 205.826048 0 369.777664-70.264832 369.777664-142.222336 0-31.140864-33.158144-65.395712-95.87712-93.006848l22.921216-52.066304C889.915392 402.62656 938.667008 452.988928 938.667008 512c0 116.555776-192.62976 199.110656-426.667008 199.110656-234.037248 0-426.667008-82.55488-426.667008-199.110656 0-56.266752 44.3904-104.727552 118.908928-140.076032zM204.76928 599.230464l24.307712 51.433472c-57.10336 26.988544-86.85568 59.378688-86.85568 88.891392 0 71.957504 163.95264 142.22336 369.778688 142.22336s369.777664-70.265856 369.777664-142.22336c0-30.838784-32.512-64.74752-94.180352-92.254208l23.17312-51.954688c79.926272 35.649536 127.896576 85.680128 127.896576 144.20992 0 116.554752-192.62976 199.110656-426.667008 199.110656-234.037248 0-426.667008-82.55488-426.667008-199.11168 0-56.400896 44.599296-104.955904 119.436288-140.324864z',
              }),
            );
          }, 'PointsOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M701.315072 121.997312l120.713216 120.71424c11.111424 11.111424 11.111424 29.126656 0 40.23808l-100.594688 100.594688-160.95232-160.95232 100.595712-100.594688c11.1104-11.1104 29.126656-11.1104 40.23808 0z m-20.119552 60.357632l-40.23808 40.23808 80.47616 80.47616 40.23808-40.23808-80.47616-80.47616z m200.687616 671.076352c15.714304 0 28.452864 12.73856 28.452864 28.45184C910.336 897.59744 897.59744 910.336 881.883136 910.336H142.116864C126.40256 910.336 113.664 897.59744 113.664 881.883136c0-15.71328 12.73856-28.45184 28.452864-28.45184h739.766272zM520.2432 262.83008l160.95232 160.95232L359.29088 745.68704l-159.33952 31.86688c-15.408128 3.08224-30.398464-6.909952-33.47968-22.319104a28.452864 28.452864 0 0 1 0-11.160576l31.86688-159.33952 321.90464-321.90464z m0 80.47616L250.760192 612.788224l-20.118528 100.595712 100.594688-20.119552L600.71936 423.7824l-80.47616-80.47616z',
              }),
            );
          }, 'EditOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M768 540.444672v142.221312h85.332992V540.444672c31.419392 0 56.889344 25.469952 56.889344 56.88832v142.22336H711.110656v-142.22336H625.77664v312.889344c-31.418368 0-56.88832-25.469952-56.88832-56.889344V541.468672a1.024 1.024 0 0 1 1.024-1.024H768z m-42.667008 256c23.564288 0 42.667008 19.10272 42.667008 42.665984 0 23.564288-19.10272 42.667008-42.667008 42.667008s-42.665984-19.10272-42.665984-42.667008c0-23.563264 19.101696-42.665984 42.665984-42.665984z m142.22336 0c23.563264 0 42.665984 19.10272 42.665984 42.665984 0 23.564288-19.10272 42.667008-42.667008 42.667008s-42.665984-19.10272-42.665984-42.667008c0-23.563264 19.101696-42.665984 42.665984-42.665984zM170.667008 170.667008v256h256v-256h-256z m256 369.77664c31.418368 0 56.88832 25.470976 56.88832 56.889344v256c0 31.419392-25.469952 56.889344-56.88832 56.889344h-256c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-256c0-31.418368 25.469952-56.88832 56.889344-56.88832h256z m0 56.889344h-256v256h256v-256z m0-483.555328c31.418368 0 56.88832 25.469952 56.88832 56.889344v256c0 31.418368-25.469952 56.88832-56.88832 56.88832h-256c-31.419392 0-56.889344-25.469952-56.889344-56.88832v-256c0-31.419392 25.469952-56.889344 56.889344-56.889344h256z m426.665984 0c31.419392 0 56.889344 25.469952 56.889344 56.889344v256c0 31.418368-25.469952 56.88832-56.889344 56.88832h-256c-31.418368 0-56.88832-25.469952-56.88832-56.88832v-256c0-31.419392 25.469952-56.889344 56.88832-56.889344h256z m0 56.889344h-256v256h256v-256z',
              }),
            );
          }, 'QrOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M725.332992 881.777664c-23.564288 0-42.665984-19.10272-42.665984-42.667008 0-23.563264 19.101696-42.665984 42.665984-42.665984 23.564288 0 42.667008 19.10272 42.667008 42.665984 0 23.564288-19.10272 42.667008-42.667008 42.667008z m128-199.110656h56.889344l-56.889344 56.88832v-43.0848l6.90176 2.859008-6.90176-6.90176v-9.760768z m-284.443648-33.325056l56.88832 56.889344v203.99104c-31.418368 0-56.88832-25.469952-56.88832-56.889344v-203.99104zM768 540.444672v142.222336h85.332992v-142.22336c31.419392 0 56.889344 25.470976 56.889344 56.889344v142.22336h-90.2144L711.11168 630.657024v-33.325056h-33.324032l-56.69888-56.69888a57.65632 57.65632 0 0 1 4.68992-0.18944H768z m-654.222336-346.2144l56.889344 56.889344v175.547392h175.546368l56.889344 56.88832H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.88832V194.231296z m312.889344-80.452608c31.418368 0 56.88832 25.469952 56.88832 56.889344v232.435712l-56.88832-56.889344V170.667008H251.119616L194.23232 113.77664h232.435712z m170.665984 56.889344v256h256v-256h-256z m0-56.889344h256c31.419392 0 56.889344 25.469952 56.889344 56.889344v256c0 31.418368-25.469952 56.88832-56.889344 56.88832h-256c-31.418368 0-56.88832-25.469952-56.88832-56.88832v-256c0-31.419392 25.469952-56.889344 56.88832-56.889344zM170.667008 597.332992v256h256v-256h-256z m0-56.88832h256c31.418368 0 56.88832 25.469952 56.88832 56.88832v256c0 31.419392-25.469952 56.889344-56.88832 56.889344h-256c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-256c0-31.418368 25.469952-56.88832 56.889344-56.88832z',
              }),
            );
          }, 'QrInvalidOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M87.30624 353.523712c-27.410432-29.32736 16.077824-73.879552 43.552768-44.488704 59.551744 63.721472 142.072832 113.575936 223.08352 141.656064 204.224512 70.776832 400.790528-0.528384 558.675968-141.656064 29.75232-26.591232 73.49248 17.729536 43.543552 44.488704-20.455424 18.286592-41.660416 35.634176-63.526912 51.862528 18.354176 36.078592 36.702208 72.139776 55.06048 108.20096 18.302976 35.960832-34.85696 67.776512-53.19168 31.752192-19.87584-39.112704-39.785472-78.168064-59.669504-117.248l6.391808 12.561408c-36.477952 23.023616-74.47552 42.845184-113.639424 58.73664l44.539904 116.063232c14.52032 37.830656-45.069312 54.04672-59.38688 16.726016l-43.1616-112.452608c-42.187776 12.474368-85.46816 20.233216-129.431552 22.436864v-0.01024c0.04608 0.764928 0.070656 1.544192 0.070656 2.338816v132.120576c0 40.574976-61.58848 40.574976-61.58848 0V544.49152c0-0.999424 0.036864-1.974272 0.109568-2.924544-41.269248-2.881536-82.967552-10.881024-124.76416-24.659968-0.966656-0.318464-1.932288-0.638976-2.898944-0.96256L304.054272 638.48448c-14.322688 37.326848-73.897984 21.0944-59.38688-16.728064l47.20128-123.000832a36.702208 36.702208 0 0 1 2.130944-4.59776c-36.096-15.524864-71.550976-34.241536-104.86784-56.026112-24.14592 31.972352-48.285696 63.9488-72.43264 95.904768-10.22976 13.568-26.24512 20.799488-42.12736 11.29472-13.093888-7.839744-21.331968-29.431808-11.04896-43.03872l75.836416-100.409344c-18.518016-15.033344-35.97824-31.161344-52.051968-48.359424z',
              }),
            );
          }, 'ClosedEyeOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M511.654912 57.344c24.096768 0 43.630592 19.533824 43.630592 43.630592V824.6272l216.389632-216.389632c16.869376-16.868352 44.11392-17.037312 61.18912-0.505856l0.515072 0.505856c16.868352 16.868352 17.037312 44.11392 0.505856 61.18912l-0.505856 0.514048L552.79104 950.528c-22.49216 22.49216-58.81856 22.716416-81.586176 0.67584l-0.68608-0.67584L189.93152 669.939712c-17.03936-17.03936-17.03936-44.663808 0-61.703168 16.868352-16.868352 44.112896-17.037312 61.18912-0.505856l0.514048 0.505856 216.388608 216.388608V100.974592c0-24.096768 19.534848-43.630592 43.63264-43.630592z',
              }),
            );
          }, 'DownOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M113.777664 312.889344v-142.22336c0-31.418368 25.469952-56.88832 56.889344-56.88832h142.222336c15.70816 0 28.443648 12.735488 28.443648 28.444672s-12.734464 28.444672-28.443648 28.444672h-142.22336v142.222336c0 15.70816-12.734464 28.443648-28.443648 28.443648-15.709184 0-28.444672-12.734464-28.444672-28.443648z m56.889344 398.221312v142.22336h142.222336c15.70816 0 28.443648 12.734464 28.443648 28.443648 0 15.709184-12.734464 28.444672-28.443648 28.444672h-142.22336c-31.418368 0-56.88832-25.469952-56.88832-56.889344V711.110656c0-15.70816 12.735488-28.443648 28.444672-28.443648s28.444672 12.734464 28.444672 28.443648z m682.665984-398.221312v-142.22336H711.110656c-15.70816 0-28.443648-12.734464-28.443648-28.443648 0-15.709184 12.734464-28.444672 28.443648-28.444672h142.22336c31.418368 0 56.88832 25.469952 56.88832 56.889344v142.222336c0 15.70816-12.735488 28.443648-28.444672 28.443648s-28.444672-12.734464-28.444672-28.443648z m56.889344 398.221312v142.22336c0 31.418368-25.469952 56.88832-56.889344 56.88832H711.110656c-15.70816 0-28.443648-12.735488-28.443648-28.444672s12.734464-28.444672 28.443648-28.444672h142.22336V711.110656c0-15.70816 12.734464-28.443648 28.443648-28.443648 15.709184 0 28.444672 12.734464 28.444672 28.443648zM142.222336 483.555328H881.77664c15.709184 0 28.444672 12.735488 28.444672 28.444672s-12.735488 28.444672-28.444672 28.444672H142.22336c-15.709184 0-28.444672-12.735488-28.444672-28.444672s12.735488-28.444672 28.444672-28.444672z',
              }),
            );
          }, 'ScanOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M390.233088 434.658304c9.874432 9.874432 10.971136 25.20064 3.29216 36.287488l-3.29216 3.939328c-9.873408 9.873408-25.20064 10.971136-36.286464 3.291136l-3.940352-3.291136-170.667008-170.668032-2.132992-2.382848-2.40128-3.521536-1.657856-3.365888-1.193984-3.55328-0.63488-3.076096-0.206848-1.777664-0.103424-3.035136c0.03072-1.206272 0.13312-2.410496 0.310272-3.605504l-0.310272 4.204544 0.160768-3.039232 0.784384-4.2496 1.765376-4.847616 2.3296-4.036608 2.61632-3.241984L350.006272 93.323264c11.108352-11.108352 29.118464-11.108352 40.226816 0 9.874432 9.874432 10.971136 25.20064 3.29216 36.287488l-3.29216 3.939328-122.172416 122.109952h231.76704c195.181568 0 353.850368 152.56576 353.850368 341.33504 0 184.573952-151.69536 334.53568-340.893696 341.10976l-12.956672 0.22528H199.452672C183.743488 938.329088 171.008 925.5936 171.008 909.88544c0-13.964288 10.061824-25.578496 23.33184-27.98592l5.112832-0.458752h300.37504c164.251648 0 296.961024-127.60576 296.961024-284.44672 0-152.817664-125.991936-277.88288-284.3904-284.194816l-12.570624-0.25088H268.060672l122.17344 122.109952z',
              }),
            );
          }, 'RevokeOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m0 56.88832c-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336 219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336zM403.446784 295.944192c14.139392 0 25.6 11.461632 25.6 25.6v61.157376h61.0304c40.91904 0 74.263552 31.81056 74.263552 70.817792v171.27936c0 38.987776-33.350656 70.791168-74.263552 70.791168h-164.36224c-40.892416 0-74.263552-31.81056-74.263552-70.791168V453.51936c0-39.001088 33.363968-70.817792 74.262528-70.817792h52.13184l0.001024-61.157376c0-13.997056 11.23328-25.370624 25.177088-25.595904z m306.9952 86.757376c37.750784 0 67.8912 31.978496 67.8912 70.4512v82.3808c0 14.138368-11.461632 25.6-25.6 25.6h-46.0288c-14.138368 0-25.6-11.461632-25.6-25.6s11.461632-25.6 25.6-25.6h20.4288v-56.7808c0-10.851328-7.917568-19.2512-16.6912-19.2512h-49.7408c-8.782848 0-16.7168 8.410112-16.7168 19.2512v187.1616c0 14.138368-11.461632 25.6-25.6 25.6s-25.6-11.461632-25.6-25.6V453.152768c0-38.47168 30.16704-70.4512 67.9168-70.4512z m-332.5952 177.967104h-69.507072v64.130048c0 6.936576 7.308288 13.902848 17.374208 13.902848h52.13184v-78.032896z m129.604608 0H429.04576v78.032896h61.0304c10.08128 0 17.374208-6.95296 17.374208-13.902848v-64.130048zM377.84576 439.589888h-52.13184c-10.068992 0-17.374208 6.967296-17.374208 13.929472l-0.001024 55.949312h69.507072v-69.878784z m112.2304 0h-61.0304v69.87776h78.404608V453.51936c0-6.974464-7.29088-13.929472-17.374208-13.929472z',
              }),
            );
          }, 'FreePostageOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M906.715136 458.913792A401.88928 401.88928 0 0 1 910.222336 512c0 219.931648-178.290688 398.222336-398.222336 398.222336-219.931648 0-398.222336-178.290688-398.222336-398.222336 0-219.931648 178.290688-398.222336 398.222336-398.222336 61.83936 0 120.38656 14.09536 172.604416 39.24992l-24.68864 51.2512c-45.7216-22.023168-95.936512-33.611776-147.915776-33.611776-188.51328 0-341.332992 152.819712-341.332992 341.332992 0 188.51328 152.819712 341.332992 341.332992 341.332992 188.51328 0 341.332992-152.819712 341.332992-341.332992 0-15.353856-1.009664-30.5664-3.009536-45.574144l56.39168-7.512064zM673.942528 207.845376c-15.710208 0-28.444672-12.734464-28.444672-28.444672 0-15.709184 12.734464-28.443648 28.444672-28.443648 15.70816 0 28.443648 12.734464 28.443648 28.443648 0 15.710208-12.734464 28.444672-28.443648 28.444672z m204.68224 285.375488c-15.709184 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.735488-28.444672 28.444672-28.444672s28.444672 12.734464 28.444672 28.444672c0 15.70816-12.735488 28.443648-28.444672 28.443648z m-531.217408-24.585216c-7.10144-7.090176-8.249344-18.11456-1.990656-26.005504l14.635008-18.448384c5.998592-7.563264 17.219584-9.46176 25.14944-4.16768l126.665728 84.54144c6.6816 4.45952 18.180096 3.878912 24.418304-1.18272l334.702592-271.543296c7.522304-6.10304 19.306496-5.582848 25.901056 1.001472l8.2432 8.23296c7.176192 7.163904 6.653952 18.536448-0.867328 26.046464L545.031168 625.81248c-11.17696 11.160576-29.52704 10.672128-41.03168-0.816128L347.406336 468.635648z',
              }),
            );
          }, 'CertificateOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M646.280192 113.777664c54.235136 0 100.931584 38.28224 111.567872 91.46368l38.596608 192.980992 131.76832 43.922432c23.22944 7.743488 38.897664 29.483008 38.897664 53.96992v300.32896c0 31.419392-25.469952 56.889344-56.88832 56.889344H682.667008v-56.88832h227.555328V496.114688l-163.08736-54.363136-45.070336-225.352704c-5.318656-26.591232-28.66688-45.73184-55.784448-45.73184H170.667008V113.77664h475.613184zM455.110656 512c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H113.777664c-15.709184 0-28.444672-12.735488-28.444672-28.444672S98.06848 512 113.777664 512h341.332992z m0-170.667008c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H113.777664c-15.709184 0-28.444672-12.735488-28.444672-28.444672s12.735488-28.444672 28.444672-28.444672h341.332992z m-284.914688-170.67008c-15.49312-0.25088-27.973632-12.888064-27.973632-28.440576 0-15.709184 12.734464-28.444672 28.444672-28.444672h475.613184c54.235136 0 100.931584 38.28224 111.567872 91.46368l38.596608 192.980992 131.76832 43.922432c23.22944 7.743488 38.897664 29.483008 38.897664 53.96992v300.32896c0 31.419392-25.469952 56.889344-56.88832 56.889344H682.667008v-56.88832h227.555328V496.114688l-163.08736-54.363136-45.070336-225.352704c-5.318656-26.591232-28.66688-45.73184-55.784448-45.73184H170.667008zM625.777664 881.777664c31.419392 0 56.889344-25.469952 56.889344-56.88832 0-31.419392-25.469952-56.889344-56.889344-56.889344-31.418368 0-56.88832 25.469952-56.88832 56.889344 0 31.418368 25.469952 56.88832 56.88832 56.88832z m0 56.889344C562.939904 938.667008 512 887.72608 512 824.889344s50.939904-113.778688 113.777664-113.778688 113.777664 50.940928 113.777664 113.778688c0 62.83776-50.939904 113.77664-113.77664 113.77664zM227.555328 881.777664c31.419392 0 56.889344-25.469952 56.889344-56.88832 0-31.419392-25.469952-56.889344-56.889344-56.889344-31.418368 0-56.88832 25.469952-56.88832 56.889344 0 31.418368 25.469952 56.88832 56.88832 56.88832z m0 56.889344c-62.83776 0-113.77664-50.939904-113.77664-113.777664s50.93888-113.778688 113.77664-113.778688 113.777664 50.940928 113.777664 113.778688c0 62.83776-50.939904 113.77664-113.77664 113.77664zM284.444672 853.332992v-56.88832h284.444672v56.88832z',
              }),
            );
          }, 'LogisticsOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 597.332992c225.82272 0 398.222336 85.388288 398.222336 228.170752 0 61.536256-50.016256 108.33408-124.348416 108.33408h-547.74784c-74.776576 0-124.348416-45.830144-124.348416-108.33408 0-140.977152 174.35136-228.170752 398.222336-228.170752z m0 56.889344c-196.484096 0-341.332992 72.439808-341.332992 171.281408 0 30.04416 23.14752 51.44576 67.459072 51.44576h547.74784c43.726848 0 67.459072-22.20544 67.459072-51.44576 0-100.49024-142.926848-171.281408-341.332992-171.281408zM512 455.110656c94.256128 0 170.667008-76.409856 170.667008-170.665984 0-94.257152-76.41088-170.667008-170.667008-170.667008s-170.667008 76.41088-170.667008 170.667008S417.743872 455.110656 512 455.110656zM512 512c-125.67552 0-227.555328-101.879808-227.555328-227.555328S386.32448 56.889344 512 56.889344s227.555328 101.879808 227.555328 227.555328S637.67552 512 512 512z',
              }),
            );
          }, 'ContactOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M872.945664 670.112768l-51.80928-23.497728c-30.065664 66.290688-79.821824 121.71264-144.278528 158.925824C508.705792 902.623232 293.689344 845.010944 196.608 676.857856 99.52256 508.705792 157.136896 293.689344 325.289984 196.608 493.442048 99.52256 708.458496 157.136896 805.53984 325.289984l49.267712-28.444672C742.014976 101.48352 492.20608 34.547712 296.845312 147.339264 101.48352 260.132864 34.547712 509.94176 147.339264 705.302528c112.7936 195.361792 362.601472 262.2976 557.963264 149.506048 76.725248-44.29824 133.64224-109.728768 167.643136-184.695808zM705.302528 854.808576c76.725248-44.29824 133.64224-109.728768 167.643136-184.695808l-51.80928-23.497728c-30.065664 66.290688-79.821824 121.71264-144.278528 158.925824C508.705792 902.623232 293.689344 845.010944 196.608 676.857856 99.52256 508.705792 157.136896 293.689344 325.289984 196.608 493.442048 99.52256 708.458496 157.136896 805.53984 325.289984l49.267712-28.444672C742.014976 101.48352 492.20608 34.547712 296.845312 147.339264 101.48352 260.132864 34.547712 509.94176 147.339264 705.302528c112.7936 195.361792 362.601472 262.2976 557.963264 149.506048z m125.568-514.16576c15.709184 0 28.444672-12.735488 28.444672-28.444672s-12.735488-28.444672-28.444672-28.444672-28.444672 12.735488-28.444672 28.444672 12.735488 28.444672 28.444672 28.444672z m16.633856 345.389056c15.70816 0 28.443648-12.735488 28.443648-28.444672s-12.734464-28.444672-28.443648-28.444672c-15.710208 0-28.444672 12.735488-28.444672 28.444672s12.734464 28.444672 28.444672 28.444672zM895.76448 412.47232a0.256 0.256 0 0 1 0.361472-0.0256l113.376256 98.394112a0.256 0.256 0 0 1 0 0.386048l-113.376256 98.394112a0.256 0.256 0 0 1-0.422912-0.19456v-68.982784H768c-15.709184 0-28.444672-12.734464-28.444672-28.443648 0-15.709184 12.735488-28.444672 28.444672-28.444672h127.70304v-70.915072c0-0.04096 0.01024-0.08192 0.027648-0.116736zM334.380032 448.157696c0-15.709184 12.734464-28.444672 28.444672-28.444672h284.443648c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H362.824704c-15.710208 0-28.444672-12.735488-28.444672-28.444672zM533.490688 448.157696v85.332992h113.777664c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H533.490688v113.777664c0 15.709184-12.734464 28.444672-28.443648 28.444672-15.710208 0-28.444672-12.735488-28.444672-28.444672l-0.001024-113.777664H362.82368c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h113.77664v-85.332992h56.889344z m88.476672-149.490688c13.604864 7.85408 18.266112 25.250816 10.411008 38.85568l-71.110656 123.167744L512 432.24576l71.110656-123.167744c7.855104-13.604864 25.25184-18.266112 38.856704-10.411008z m-256 0c13.604864-7.855104 31.000576-3.193856 38.85568 10.411008l71.110656 123.167744-49.266688 28.444672-71.11168-123.167744c-7.85408-13.604864-3.192832-31.0016 10.412032-38.85568z',
              }),
            );
          }, 'CashBackRecordOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M872.945664 670.112768l-51.80928-23.497728c-30.065664 66.290688-79.821824 121.71264-144.278528 158.925824C508.705792 902.623232 293.689344 845.010944 196.608 676.857856 99.52256 508.705792 157.136896 293.689344 325.289984 196.608 493.442048 99.52256 708.458496 157.136896 805.53984 325.289984l49.267712-28.444672C742.014976 101.48352 492.20608 34.547712 296.845312 147.339264 101.48352 260.132864 34.547712 509.94176 147.339264 705.302528c112.7936 195.361792 362.601472 262.2976 557.963264 149.506048 76.725248-44.29824 133.64224-109.728768 167.643136-184.695808zM705.302528 854.808576c76.725248-44.29824 133.64224-109.728768 167.643136-184.695808l-51.80928-23.497728c-30.065664 66.290688-79.821824 121.71264-144.278528 158.925824C508.705792 902.623232 293.689344 845.010944 196.608 676.857856 99.52256 508.705792 157.136896 293.689344 325.289984 196.608 493.442048 99.52256 708.458496 157.136896 805.53984 325.289984l49.267712-28.444672C742.014976 101.48352 492.20608 34.547712 296.845312 147.339264 101.48352 260.132864 34.547712 509.94176 147.339264 705.302528c112.7936 195.361792 362.601472 262.2976 557.963264 149.506048z m125.568-514.16576c15.709184 0 28.444672-12.735488 28.444672-28.444672s-12.735488-28.444672-28.444672-28.444672-28.444672 12.735488-28.444672 28.444672 12.735488 28.444672 28.444672 28.444672zM756.4288 618.853376l179.77344 80.039936a0.256 0.256 0 0 0 0.349184-0.3072l-43.772928-143.59552a0.256 0.256 0 0 0-0.35328-0.156672l-136.000512 63.553536a0.256 0.256 0 0 0 0.004096 0.46592zM621.96736 298.667008c13.604864 7.85408 18.266112 25.250816 10.411008 38.85568l-47.453184 82.190336h62.343168c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H533.490688v56.88832h113.777664c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H533.490688v113.777664c0 15.709184-12.734464 28.444672-28.443648 28.444672-15.710208 0-28.444672-12.735488-28.444672-28.444672l-0.001024-113.777664H362.82368c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h113.77664v-56.88832H362.82368c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h40.18176l-47.451136-82.190336c-7.776256-13.468672-3.284992-30.65344 10.006528-38.617088l0.405504-0.238592c13.604864-7.855104 31.000576-3.193856 38.85568 10.411008l63.875072 110.635008h50.537472l63.875072-110.635008c7.855104-13.604864 25.25184-18.266112 38.856704-10.411008z',
              }),
            );
          }, 'AfterSaleOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M845.57312 714.068992H312.547328c-15.709184 0-28.444672 12.735488-28.444672 28.444672s12.735488 28.444672 28.444672 28.444672h529.011712l-87.375872 87.375872c-11.108352 11.108352-11.108352 29.118464 0 40.226816 11.108352 11.108352 29.118464 11.108352 40.226816 0l133.91872-133.91872c13.329408-13.329408 13.329408-34.941952 0-48.27136l-136.193024-136.192c-11.108352-11.109376-29.118464-11.109376-40.226816 0-11.108352 11.107328-11.108352 29.11744 0 40.225792l93.66528 93.66528zM177.743872 258.958336h533.025792c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H181.757952l87.376896 87.376896c11.107328 11.108352 11.107328 29.118464 0 40.226816-11.108352 11.107328-29.118464 11.107328-40.226816 0l-133.91872-133.91872c-13.329408-13.330432-13.329408-34.941952 0-48.27136l136.192-136.193024c11.108352-11.108352 29.118464-11.108352 40.226816 0 11.108352 11.108352 11.108352 29.118464 0 40.226816l-93.664256 93.664256z',
              }),
            );
          }, 'ExchangeOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656zM513.61792 284.040192l40.225792 40.226816L694.636544 465.05984c11.108352 11.108352 11.108352 29.11744 0 40.225792-11.108352 11.108352-29.118464 11.108352-40.226816 0l-114.37056-114.37056V710.7072c0 15.70816-12.734464 28.443648-28.443648 28.443648-15.709184 0-28.444672-12.734464-28.444672-28.443648V394.958848l-110.32576 110.326784c-11.109376 11.108352-29.119488 11.108352-40.226816 0-11.108352-11.108352-11.108352-29.11744 0-40.225792l140.792832-140.792832 40.225792-40.226816z',
              }),
            );
          }, 'UpgradeOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M184.889344 426.667008c39.273472 0 71.110656 31.837184 71.110656 71.110656s-31.837184 71.11168-71.110656 71.11168c-39.274496 0-71.11168-31.838208-71.11168-71.11168 0-39.273472 31.837184-71.110656 71.11168-71.110656z m327.110656 0c39.273472 0 71.110656 31.837184 71.110656 71.110656s-31.83616 71.11168-71.110656 71.11168c-39.273472 0-71.110656-31.838208-71.110656-71.11168 0-39.273472 31.83616-71.110656 71.110656-71.110656z m327.110656 0c39.274496 0 71.11168 31.837184 71.11168 71.110656s-31.837184 71.11168-71.11168 71.11168c-39.273472 0-71.110656-31.838208-71.110656-71.11168 0-39.273472 31.837184-71.110656 71.110656-71.110656z',
              }),
            );
          }, 'EllipsisOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M625.777664 886.670336V739.555328h147.115008L625.77664 886.67136z m-398.222336 23.552V113.77664h568.889344v568.889344H625.77664c-31.459328 0-56.88832 25.428992-56.88832 56.88832V910.22336H227.555328zM796.444672 56.889344H227.555328c-31.459328 0-56.88832 25.428992-56.88832 56.88832V910.22336c0 31.459328 25.428992 56.88832 56.88832 56.88832h374.67136a56.83712 56.83712 0 0 0 40.219648-16.667648l40.220672-40.220672 113.77664-113.777664 40.221696-40.220672c10.694656-10.638336 16.667648-25.145344 16.667648-40.220672v-602.22464c0-31.460352-25.428992-56.889344-56.88832-56.889344z m-142.22336 170.672128H369.778688c-15.700992 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.74368 28.443648 28.444672 28.443648H654.22336c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672m0 113.77664H369.77664c-15.700992 0-28.444672 12.74368-28.444672 28.445696 0 15.700992 12.74368 28.443648 28.444672 28.443648H654.22336c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672M540.444672 455.1168H369.77664c-15.700992 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.74368 28.444672 28.444672 28.444672h170.667008c15.700992 0 28.444672-12.74368 28.444672-28.444672 0-15.702016-12.74368-28.444672-28.444672-28.444672',
              }),
            );
          }, 'DescriptionOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M540.444672 113.777664H223.403008c-29.12768 0-52.736 23.609344-52.736 52.736v747.860992c0 29.12768 23.60832 52.736 52.736 52.736h520.30464c29.12768 0 52.736-23.60832 52.736-52.736V369.777664c0-15.700992-12.742656-28.444672-28.443648-28.444672s-28.444672 12.74368-28.444672 28.444672V910.22336h-512V170.667008h312.889344c15.700992 0 28.444672-12.74368 28.444672-28.444672 0-15.700992-12.74368-28.444672-28.444672-28.444672m-56.889344 568.889344H312.889344c-15.702016 0-28.444672 12.742656-28.444672 28.443648 0 15.702016 12.742656 28.444672 28.444672 28.444672h170.665984c15.702016 0 28.444672-12.742656 28.444672-28.444672 0-15.700992-12.742656-28.443648-28.444672-28.443648m0 113.77664H312.889344c-15.702016 0-28.444672 12.74368-28.444672 28.445696 0 15.700992 12.742656 28.443648 28.444672 28.443648h170.665984c15.702016 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.742656-28.444672-28.444672-28.444672M744.390656 56.889344c-7.22432 0-14.505984 2.787328-20.08064 8.30464l-215.552 215.609344a30.078976 30.078976 0 0 0-7.794688 13.539328L471.552 404.081664c-5.006336 18.489344 9.329664 35.612672 27.193344 35.612672 2.445312 0 4.948992-0.340992 7.451648-1.024l109.681664-29.411328c5.12-1.366016 9.785344-4.03968 13.540352-7.793664l215.66464-215.552c11.037696-11.15136 11.037696-29.07136 0-40.164352l-80.610304-80.553984c-5.57568-5.51936-12.8-8.305664-20.082688-8.305664m0 68.72064l40.220672 40.220672-190.350336 190.35136-54.89664 14.733312 14.676992-54.953984 190.349312-190.35136',
              }),
            );
          }, 'RecordsOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M170.667008 284.444672v568.88832h682.665984V284.444672H170.667008z m-56.889344-56.889344H910.22336v625.777664c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-625.77664z m704.396288-113.77664a56.889344 56.889344 0 0 1 50.88256 31.44704l41.1648 82.3296h-63.602688l-28.444672-56.88832H205.826048l-28.444672 56.88832h-63.603712l41.1648-82.3296a56.889344 56.889344 0 0 1 50.88256-31.44704z m-88.578048 284.99968c0.93184-0.774144 2.845696-0.688128 3.457024-0.063488l6.110208 6.242304c0.62464 0.637952 0.570368 1.840128-0.644096 3.080192l-1.188864 1.215488c3.56352 4.994048 2.797568 11.922432-1.9456 16.657408L483.92192 677.00224c-4.42368 4.417536-10.45504 6.227968-16.315392 5.513216-3.085312 0.567296-6.523904-0.453632-9.10848-3.094528l-0.905216-0.923648a21.705728 21.705728 0 0 1-2.394112-2.066432L345.58464 566.97856c-2.093056-2.091008-3.447808-4.66944-3.986432-7.36768a3.072 3.072 0 0 1-0.229376-1.691648 13.082624 13.082624 0 0 1 2.823168-9.14432l10.244096-12.914688c4.1984-5.29408 12.053504-6.623232 17.605632-2.9184l88.665088 59.180032c4.676608 3.122176 12.726272 2.715648 17.092608-0.827392l234.2912-190.08c4.48512-3.638272 11.132928-3.914752 15.857664-1.07008z',
              }),
            );
          }, 'SignOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M796.444672 113.777664c31.418368 0 56.88832 25.469952 56.88832 56.889344v739.555328c0 31.105024-24.963072 56.378368-55.948288 56.881152l-0.940032 0.007168H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.88832V170.667008c0-31.419392 25.469952-56.889344 56.88832-56.889344V910.22336h568.889344V113.77664z m-68.49536 286.36672l1.646592-1.366016c0.93184-0.774144 2.845696-0.688128 3.457024-0.063488l6.110208 6.242304c0.62464 0.637952 0.570368 1.840128-0.644096 3.080192l-1.188864 1.215488c3.56352 4.994048 2.797568 11.922432-1.9456 16.657408L483.92192 677.00224c-4.424704 4.41856-10.45504 6.227968-16.31744 5.512192-3.085312 0.567296-6.52288-0.453632-9.106432-3.093504l-0.909312-0.92672a21.705728 21.705728 0 0 1-2.390016-2.06336L345.58464 566.97856c-2.09408-2.091008-3.448832-4.670464-3.987456-7.369728a3.06688 3.06688 0 0 1-0.228352-1.6896 13.082624 13.082624 0 0 1 2.823168-9.14432l10.244096-12.914688c4.1984-5.29408 12.053504-6.623232 17.605632-2.9184l88.665088 59.180032c4.676608 3.122176 12.726272 2.715648 17.092608-0.827392l234.2912-190.08c4.48512-3.638272 11.132928-3.914752 15.857664-1.07008z m-329.728-286.36672v56.889344H227.556352V113.77664H398.22336z m398.22336 0v56.889344H625.77664V113.77664h170.667008z m-369.777664 0c-15.710208 0-28.444672 12.735488-28.444672 28.444672s12.734464 28.444672 28.444672 28.444672h170.665984c15.710208 0 28.444672-12.735488 28.444672-28.444672s-12.734464-28.444672-28.444672-28.444672H426.667008z m0-56.88832h170.665984c47.128576 0 85.334016 38.20544 85.334016 85.332992 0 47.128576-38.20544 85.332992-85.334016 85.332992H426.667008c-47.128576 0-85.334016-38.20544-85.334016-85.332992 0-47.128576 38.20544-85.332992 85.334016-85.332992z',
              }),
            );
          }, 'CompletedOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M796.444672 113.777664c31.418368 0 56.88832 25.469952 56.88832 56.889344v739.555328c0 31.418368-25.469952 56.88832-56.88832 56.88832H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.88832V170.667008c0-31.419392 25.469952-56.889344 56.88832-56.889344H398.22336v56.889344H227.555328v739.555328h568.889344V170.667008H625.77664V113.77664h170.667008z m-369.777664 0c-15.710208 0-28.444672 12.735488-28.444672 28.444672s12.734464 28.444672 28.444672 28.444672h170.665984c15.710208 0 28.444672-12.735488 28.444672-28.444672s-12.734464-28.444672-28.444672-28.444672H426.667008zM554.029056 512l63.044608 63.043584c11.606016 11.606016 11.606016 30.42304 0 42.03008-11.606016 11.606016-30.42304 11.606016-42.03008 0L512 554.029056l-63.945728 63.945728c-11.108352 11.108352-29.11744 11.108352-40.225792 0l-1.80224-1.80224c-11.109376-11.109376-11.109376-29.119488 0-40.226816L469.96992 512l-63.044608-63.043584c-11.606016-11.606016-11.606016-30.42304 0-42.03008 11.606016-11.606016 30.42304-11.606016 42.03008 0L512 469.970944l63.945728-63.945728c11.107328-11.108352 29.11744-11.108352 40.225792 0l1.80224 1.80224c11.109376 11.109376 11.109376 29.118464 0 40.226816L554.03008 512zM426.667008 56.889344h170.665984c47.128576 0 85.334016 38.20544 85.334016 85.332992 0 47.128576-38.20544 85.332992-85.334016 85.332992H426.667008c-47.128576 0-85.334016-38.20544-85.334016-85.332992 0-47.128576 38.20544-85.332992 85.334016-85.332992z',
              }),
            );
          }, 'FailureOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M910.222336 170.667008c31.459328 0 56.88832 25.428992 56.88832 56.88832v568.889344c0 31.459328-25.428992 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.428992-56.88832-56.88832V227.555328c0-31.459328 25.485312-56.88832 56.88832-56.88832z m0 170.665984H113.77664v455.11168H910.22336V341.332992z m0-113.77664H113.77664v56.88832H910.22336v-56.889344zM426.667008 711.109632h170.665984c15.702016 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.742656-28.444672-28.444672-28.444672H455.110656v-56.889344h142.22336c15.700992 0 28.443648-12.742656 28.443648-28.443648 0-15.702016-12.742656-28.444672-28.444672-28.444672H455.110656v-56.889344h142.22336c15.700992 0 28.443648-12.742656 28.443648-28.444672 0-15.700992-12.742656-28.443648-28.444672-28.443648H426.667008c-15.702016 0-28.444672 12.742656-28.444672 28.443648v227.556352c0 15.700992 12.742656 28.443648 28.444672 28.443648',
              }),
            );
          }, 'EcardPayOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M910.222336 341.332992v455.11168H113.77664V341.332992H910.22336z m0-113.77664v56.88832H113.77664v-56.889344H910.22336z m0-56.889344H113.77664c-31.459328 0-56.88832 25.428992-56.88832 56.88832v568.889344c0 31.459328 25.428992 56.88832 56.88832 56.88832H910.22336c31.403008 0 56.88832-25.428992 56.88832-56.88832V227.555328c0-31.459328-25.485312-56.88832-56.88832-56.88832z m-348.2112 478.6688H699.3408l-31.857664 31.913984c-11.150336 11.094016-11.150336 29.07136 0 40.220672 11.092992 11.092992 29.070336 11.092992 40.220672 0l80.44032-80.44032c11.094016-11.15136 11.094016-29.12768 0-40.278016l-80.44032-80.44032c-11.15136-11.094016-29.12768-11.094016-40.220672 0-11.150336 11.150336-11.150336 29.126656 0 40.219648l31.857664 31.915008H562.011136c-15.700992 0-28.444672 12.74368-28.444672 28.444672 0 15.700992 12.74368 28.444672 28.444672 28.444672',
              }),
            );
          }, 'PeerPayOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M770.332672 113.777664c12.572672 0 24.064 8.419328 27.420672 21.105664l38.4 143.190016h23.09632c28.16 0 50.972672 22.811648 50.972672 50.971648V852.87936c0 28.16-22.812672 50.972672-50.972672 50.972672H164.75136c-28.16 0-50.972672-22.812672-50.972672-50.972672V329.044992c0-25.486336 19.001344-45.62432 43.406336-49.492992l157.297664-157.297664c4.209664-4.209664 9.614336-6.257664 15.132672-6.257664 5.460992 0 10.865664 2.048 15.075328 6.25664 0.171008 0.228352 0.113664 0.512 0.227328 0.684032 0.228352 0.169984 0.569344 0.11264 0.740352 0.283648l81.52064 81.521664 335.75936-89.997312c2.445312-0.626688 4.948992-0.96768 7.395328-0.96768z m83.00032 221.184H170.667008v512h682.665984v-512zM750.251008 177.094656l-376.945664 100.978688h403.968l-27.02336-100.978688z m-420.636672-9.556992l-86.641664 86.528 136.590336-36.523008-49.948672-50.004992z m241.72032 284.478464a28.5696 28.5696 0 0 0-20.137984 8.305664L512 499.575808l-39.196672-39.254016a28.5696 28.5696 0 0 0-20.137984-8.30464c-7.282688 0-14.564352 2.786304-20.082688 8.30464-11.149312 11.15136-11.149312 29.12768 0 40.278016l30.15168 30.208h-21.844992c-15.702016 0-28.444672 12.686336-28.444672 28.443648 0 15.644672 12.742656 28.444672 28.444672 28.444672h42.665984V616.1408h-42.665984c-15.702016 0-28.444672 12.686336-28.444672 28.444672 0 15.644672 12.742656 28.444672 28.444672 28.444672h42.665984v28.443648c0 15.644672 12.74368 28.444672 28.444672 28.444672 15.700992 0 28.444672-12.8 28.444672-28.444672v-28.443648h42.665984c15.702016 0 28.444672-12.8 28.444672-28.444672 0-15.75936-12.742656-28.444672-28.444672-28.444672h-42.665984v-28.444672h42.665984c15.702016 0 28.444672-12.8 28.444672-28.444672 0-15.757312-12.742656-28.443648-28.444672-28.443648h-21.844992l30.208-30.208c11.092992-11.15136 11.092992-29.12768 0-40.278016a28.5696 28.5696 0 0 0-20.139008-8.30464',
              }),
            );
          }, 'BalancePayOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M910.222336 170.667008c31.403008 0 56.88832 25.486336 56.88832 56.88832v568.889344c0 31.459328-25.485312 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.428992-56.88832-56.88832V227.555328c0-31.401984 25.485312-56.88832 56.88832-56.88832z m0 170.665984H113.77664v455.11168H910.22336V341.332992z m0-113.77664H113.77664v56.88832H910.22336v-56.889344zM597.037056 683.098112h170.667008c15.700992 0 28.444672-12.74368 28.444672-28.444672 0-15.700992-12.74368-28.444672-28.444672-28.444672H597.037056c-15.700992 0-28.443648 12.74368-28.443648 28.444672 0 15.700992 12.742656 28.444672 28.443648 28.444672',
              }),
            );
          }, 'CreditPayOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M910.222336 170.667008c31.403008 0 56.88832 25.428992 56.88832 56.88832v568.889344c0 31.459328-25.485312 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.428992-56.88832-56.88832V227.555328c0-31.459328 25.485312-56.88832 56.88832-56.88832z m0 170.665984H113.77664v455.11168H910.22336V341.332992z m0-113.77664H113.77664v56.88832H910.22336v-56.889344zM479.817728 714.55232c11.094016 11.092992 29.12768 11.092992 40.220672 0l40.220672-40.220672c11.092992-11.094016 11.092992-29.12768 0-40.220672-11.094016-11.092992-29.12768-11.092992-40.220672 0l-40.220672 40.220672c-11.092992 11.092992-11.092992 29.126656 0 40.220672m153.99936 0l40.219648-40.220672c11.092992-11.094016 11.092992-29.12768 0-40.220672-11.092992-11.092992-29.12768-11.092992-40.220672 0l-40.220672 40.220672c-11.092992 11.092992-11.092992 29.126656 0 40.220672 11.094016 11.092992 29.12768 11.092992 40.220672 0m113.777664 0l40.220672-40.220672c11.092992-11.094016 11.092992-29.12768 0-40.220672-11.092992-11.092992-29.126656-11.092992-40.220672 0l-40.220672 40.220672c-11.092992 11.092992-11.092992 29.126656 0 40.220672 11.094016 11.092992 29.12768 11.092992 40.220672 0',
              }),
            );
          }, 'DebitPayOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M170.667008 284.444672v568.88832h682.665984V284.444672H170.667008z m675.951616-56.889344l-28.444672-56.88832H205.826048l-28.444672 56.88832h-63.603712l41.1648-82.3296a56.889344 56.889344 0 0 1 50.88256-31.44704h612.348928a56.889344 56.889344 0 0 1 50.88256 31.44704l41.1648 82.3296v625.777664c0 31.419392-25.468928 56.889344-56.88832 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-625.77664h732.84096zM512.505856 453.891072l39.72096-39.72096c11.108352-11.108352 29.118464-11.108352 40.225792 0 11.108352 11.108352 11.108352 29.118464 0 40.225792l-29.1584 29.159424h19.816448c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672h-42.665984v28.444672h42.665984c15.710208 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.734464 28.444672-28.444672 28.444672h-42.665984v28.444672c0 15.709184-12.735488 28.444672-28.444672 28.444672s-28.444672-12.735488-28.444672-28.444672V625.77664h-42.665984c-15.710208 0-28.444672-12.734464-28.444672-28.444672 0-15.70816 12.734464-28.443648 28.444672-28.443648h42.665984v-28.444672h-42.665984c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h20.82816l-29.159424-29.159424c-11.108352-11.107328-11.108352-29.11744 0-40.225792 11.108352-11.108352 29.11744-11.108352 40.225792 0l39.72096 39.72096z',
              }),
            );
          }, 'CashOnDeliverOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M910.222336 170.667008c31.403008 0 56.88832 25.486336 56.88832 56.88832v568.889344c0 31.401984-25.485312 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.486336-56.88832-56.88832V227.555328c0-31.401984 25.485312-56.88832 56.88832-56.88832z m0 56.88832H113.77664v568.889344H910.22336V227.555328zM341.037056 549.92896c23.552 0 42.667008-19.115008 42.667008-42.667008s-19.115008-42.665984-42.667008-42.665984-42.665984 19.113984-42.665984 42.665984c0 23.552 19.113984 42.667008 42.665984 42.667008m170.667008 0c23.552 0 42.667008-19.115008 42.667008-42.667008s-19.115008-42.665984-42.667008-42.665984-42.667008 19.113984-42.667008 42.665984c0 23.552 19.115008 42.667008 42.667008 42.667008m170.667008 0c23.552 0 42.665984-19.115008 42.665984-42.667008s-19.113984-42.665984-42.665984-42.665984c-23.552 0-42.667008 19.113984-42.667008 42.665984 0 23.552 19.115008 42.667008 42.667008 42.667008',
              }),
            );
          }, 'OtherPayOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M170.667008 284.444672v568.88832h682.665984V284.444672H170.667008z m-56.889344-56.889344H910.22336v625.777664c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-625.77664zM492.763136 398.22336a13.858816 13.858816 0 0 1 13.790208 12.480512l19.467264 194.68288 121.546752 76.319744a14.208 14.208 0 0 1-11.915264 25.554944l-180.4288-58.190848h-0.08704l0.002048-0.026624-0.027648-0.008192 0.03584-0.077824 23.826432-238.25408a13.858816 13.858816 0 0 1 13.790208-12.480512zM818.173952 113.77664a56.889344 56.889344 0 0 1 50.88256 31.44704l41.1648 82.330624h-63.602688l-28.444672-56.88832H205.826048l-28.444672 56.88832h-63.603712l41.1648-82.3296a56.889344 56.889344 0 0 1 50.88256-31.44704z',
              }),
            );
          }, 'TosendOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M113.777664 227.555328v568.889344H910.22336V227.555328H113.77664z m0-56.88832H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.88832v568.889344c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832V227.555328c0-31.418368 25.469952-56.88832 56.88832-56.88832zM938.667008 369.77664v56.889344H625.77664c-47.128576 0-85.332992 38.20544-85.332992 85.332992 0 47.128576 38.20544 85.332992 85.332992 85.332992h312.889344v56.889344H625.77664c-78.546944 0-142.222336-63.675392-142.222336-142.222336 0-78.546944 63.675392-142.222336 142.22336-142.222336h312.88832zM696.889344 554.667008c-23.564288 0-42.667008-19.10272-42.667008-42.667008s19.10272-42.667008 42.667008-42.667008c23.563264 0 42.665984 19.10272 42.665984 42.667008s-19.10272 42.667008-42.665984 42.667008z',
              }),
            );
          }, 'PendingPaymentOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M113.777664 341.332992v455.11168H910.22336V341.332992H113.77664z m682.667008-170.665984c31.418368 0 56.88832 25.469952 56.88832 56.88832v56.889344h56.889344c31.418368 0 56.88832 25.469952 56.88832 56.88832v455.11168c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832v-512l739.555328-0.001024v-113.77664z m170.665984 227.555328v56.88832H682.667008c-62.83776 0-113.777664 50.940928-113.777664 113.778688 0 62.83776 50.939904 113.77664 113.77664 113.77664h284.444672v56.889344H682.667008C588.409856 739.555328 512 663.145472 512 568.889344c0-94.257152 76.41088-170.667008 170.667008-170.667008h284.443648z m-270.221312 128c23.563264 0 42.665984 19.10272 42.665984 42.667008 0 23.563264-19.10272 42.665984-42.665984 42.665984-23.564288 0-42.667008-19.10272-42.667008-42.665984 0-23.564288 19.10272-42.667008 42.667008-42.667008zM596.51072 70.915072l0.878592 0.007168c19.326976 0.321536 38.008832 10.487808 48.376832 28.44672l41.163776 71.297024h109.513728v56.889344h-76.668928l32.835584 56.87296 20.355072 35.25632-67.25632-2.714624-109.2096-189.156352-299.077632 172.672-106.341376-4.293632 20.451328-11.808768 98.461696-56.846336h-167.77216v0.018432c-15.709184 0-28.444672 12.735488-28.444672 28.444672s12.735488 28.444672 28.444672 28.444672v56.88832c-18.18624 0-35.04128-5.68832-48.887808-15.382528l-36.462592-0.002048v-71.110656h0.026624l0.002048-0.248832c0.741376-45.715456 37.431296-82.692096 83.034112-83.892224l0.001024-0.048128h268.592128L568.05376 78.54592c8.98048-5.183488 18.784256-7.642112 28.45696-7.630848z',
              }),
            );
          }, 'PaidOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.334656 0 455.110656 203.776 455.110656 455.110656 0 251.334656-203.776 455.110656-455.110656 455.110656-251.334656 0-455.110656-203.776-455.110656-455.110656 0-251.334656 203.776-455.110656 455.110656-455.110656z m28.444672 58.368V256c0 15.700992-12.8 28.444672-28.444672 28.444672-15.644672 0-28.444672-12.74368-28.444672-28.444672V115.257344C286.72 129.251328 129.251328 286.662656 115.2 483.555328H256c15.644672 0 28.444672 12.8 28.444672 28.444672 0 15.700992-12.8 28.444672-28.444672 28.444672H115.2C129.251328 737.337344 286.72 894.804992 483.555328 908.8V768c0-15.644672 12.8-28.444672 28.444672-28.444672 15.644672 0 28.444672 12.8 28.444672 28.444672v140.8C737.28 894.804992 894.748672 737.337344 908.8 540.444672H768c-15.644672 0-28.444672-12.74368-28.444672-28.444672 0-15.644672 12.8-28.444672 28.444672-28.444672h140.8c-14.051328-196.892672-171.52-354.304-368.355328-368.297984zM512 455.133184c31.403008 0 56.889344 25.430016 56.889344 56.889344 0 31.459328-25.48736 56.889344-56.889344 56.889344-31.403008 0-56.889344-25.430016-56.889344-56.889344 0-31.459328 25.48736-56.88832 56.889344-56.88832z',
              }),
            );
          }, 'AimOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M481.456128 886.3232l30.570496-19.454976 30.55616 19.479552c33.123328 21.117952 57.868288 27.111424 75.708416 22.330368 17.840128-4.780032 36.273152-22.34368 54.4-57.192448l16.744448-32.190464 36.248576 1.608704c39.21408 1.7408 63.629312-5.43744 76.70784-18.515968 13.078528-13.079552 20.257792-37.49376 18.516992-76.70784l-1.609728-36.2496 32.190464-16.743424c34.849792-18.126848 52.412416-36.559872 57.193472-54.4 4.780032-17.841152-1.21344-42.586112-22.331392-75.70944l-19.479552-30.555136 19.456-30.570496c21.121024-33.189888 27.12064-57.9584 22.35392-75.747328-4.765696-17.787904-22.345728-36.23936-57.233408-54.421504l-32.091136-16.724992 1.54624-36.154368c1.683456-39.334912-5.50912-63.797248-18.511872-76.8s-37.465088-20.195328-76.8-18.512896l-36.154368 1.54624-16.724992-32.090112c-18.182144-34.88768-36.6336-52.467712-54.421504-57.234432-17.788928-4.765696-42.55744 1.232896-75.747328 22.354944l-30.557184 19.446784-30.548992-19.459072c-33.15712-21.118976-57.914368-27.11552-75.728896-22.342656-17.813504 4.773888-36.255744 22.344704-54.411264 57.213952l-16.734208 32.140288-36.201472-1.57696c-39.274496-1.712128-63.71328 5.47328-76.75392 18.51392s-20.226048 37.4784-18.51392 76.75392l1.57696 36.217856-32.160768 16.729088c-34.849792 18.126848-52.412416 36.559872-57.193472 54.4-4.780032 17.840128 1.21344 42.585088 22.331392 75.70944l19.479552 30.554112-19.456 30.570496c-21.121024 33.190912-27.12064 57.959424-22.35392 75.748352 4.765696 17.78688 22.345728 36.23936 57.233408 54.421504l32.091136 16.724992-1.54624 36.154368c-1.683456 39.334912 5.50912 63.797248 18.511872 76.8s37.465088 20.195328 76.8 18.512896l36.154368-1.54624 16.724992 32.090112c18.182144 34.88768 36.6336 52.467712 54.421504 57.233408 17.788928 4.76672 42.55744-1.232896 75.747328-22.35392zM512 934.31808c-45.51168 28.962816-85.850112 38.733824-121.014272 29.310976-35.165184-9.422848-65.214464-38.052864-90.146816-85.892096-53.916672 2.307072-93.735936-9.40032-119.457792-35.1232-25.721856-25.720832-37.429248-65.540096-35.1232-119.456768-47.838208-24.932352-76.469248-54.981632-85.891072-90.146816-9.422848-35.16416 0.34816-75.502592 29.310976-121.014272-28.9792-45.45536-38.74816-85.792768-29.310976-121.015296 9.437184-35.221504 38.068224-65.26976 85.891072-90.145792-2.348032-53.874688 9.35936-93.693952 35.1232-119.457792 25.76384-25.76384 65.583104-37.471232 119.457792-35.1232 24.90368-47.83104 54.95296-76.46208 90.146816-85.891072 35.192832-9.43104 75.531264 0.339968 121.014272 29.310976 45.51168-28.962816 85.850112-38.733824 121.014272-29.310976 35.165184 9.421824 65.214464 38.05184 90.146816 85.891072 53.916672-2.306048 93.735936 9.401344 119.457792 35.1232 25.721856 25.72288 37.429248 65.54112 35.1232 119.457792 47.838208 24.932352 76.469248 54.981632 85.891072 90.145792 9.422848 35.165184-0.34816 75.503616-29.310976 121.015296 28.9792 45.45536 38.74816 85.792768 29.310976 121.014272-9.437184 35.222528-38.068224 65.270784-85.891072 90.146816 2.388992 53.832704-9.3184 93.651968-35.1232 119.457792-25.8048 25.8048-65.624064 37.512192-119.457792 35.1232-24.876032 47.822848-54.924288 76.453888-90.146816 85.891072-35.221504 9.437184-75.559936-0.3328-121.014272-29.310976zM627.142656 504.718336c25.03168 0 44.146688 8.646656 57.79968 26.851328 11.83232 15.473664 18.204672 36.409344 18.204672 62.350336 0 25.486336-6.372352 46.420992-18.204672 62.350336-13.652992 17.294336-32.768 26.396672-57.79968 26.396672-25.485312 0-45.056-9.10336-58.708992-26.396672-12.288-16.384-18.204672-36.864-18.204672-62.350336 0-25.940992 5.916672-46.876672 18.204672-62.350336 13.652992-18.204672 33.22368-26.851328 58.708992-26.851328z m-45.056-153.372672h37.31968L436.907008 689.03936h-36.864L582.086656 351.34464zM393.216 357.716992c25.030656 0 44.145664 8.64768 57.798656 26.852352 11.833344 15.47264 18.204672 36.40832 18.204672 62.349312 0 25.48736-6.371328 46.422016-18.204672 62.35136-13.652992 17.293312-32.768 26.395648-57.798656 26.395648-25.486336 0-45.056-9.102336-58.708992-26.396672-12.288-16.384-18.204672-36.864-18.204672-62.350336 0-25.940992 5.916672-46.875648 18.204672-62.349312C348.16 366.364672 367.72864 357.716992 393.216 357.716992z m233.926656 178.404352c-11.83232 0-20.48 5.915648-25.940992 17.748992-4.096 9.556992-5.916672 22.755328-5.916672 40.049664 0 16.384 1.820672 29.582336 5.916672 39.595008C606.662656 645.347328 615.31136 651.264 627.142656 651.264c11.378688 0 19.570688-6.371328 25.03168-18.659328 3.64032-9.558016 5.916672-22.300672 5.916672-38.684672 0-16.838656-2.276352-30.036992-6.372352-39.595008-5.005312-12.288-13.197312-18.203648-24.576-18.203648zM393.216 389.12c-11.833344 0-20.48 5.916672-25.940992 17.748992-4.096 9.558016-5.916672 22.756352-5.916672 40.049664 0 16.384 1.820672 29.58336 5.916672 39.595008C372.736 498.347008 381.382656 504.262656 393.216 504.262656c11.377664 0 19.569664-6.371328 25.030656-18.659328 3.641344-9.556992 5.916672-22.300672 5.916672-38.684672 0-16.838656-2.275328-30.036992-6.371328-39.593984-5.006336-12.288-13.198336-18.204672-24.576-18.204672z',
              }),
            );
          }, 'DiscountOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M910.222336 170.667008c31.403008 0 56.88832 25.486336 56.88832 56.88832v568.889344c0 31.459328-25.485312 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.428992-56.88832-56.88832V227.555328c0-31.401984 25.485312-56.88832 56.88832-56.88832z m0 170.665984H113.77664v455.11168H910.22336V341.332992zM711.110656 625.777664c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H312.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h398.221312zM910.22336 227.555328H113.77664v56.889344H910.22336v-56.889344z',
              }),
            );
          }, 'IdcardOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M588.7744 75.798528L759.43936 189.576192c16.888832 11.25888 16.888832 36.07552 0 47.3344L588.7744 350.68928c-18.90304 12.602368-44.222464-0.948224-44.222464-23.666688V224.11264c-146.425856-13.402112-289.221632 72.40192-341.876736 217.071616C139.99104 613.408768 228.790272 803.84 401.01376 866.52416c172.223488 62.68416 362.65472-26.115072 425.33888-198.33856a334.544896 334.544896 0 0 0 14.629888-53.619712c0.193536-1.047552 0.410624-2.085888 0.651264-3.11296a33.26976 33.26976 0 0 1 1.805312-7.677952c6.268928-17.22368 25.311232-26.102784 42.533888-19.83488 17.222656 6.268928 26.10176 25.312256 19.83488 42.533888-3.540992 21.681152-9.353216 43.1616-17.087488 64.411648-75.220992 206.667776-303.73888 313.227264-510.406656 238.006272C171.644928 853.670912 65.08544 625.152 140.307456 418.485248c62.466048-171.624448 230.647808-274.21184 404.24448-260.989952v-58.03008c0-22.71744 25.319424-36.269056 44.222464-23.666688z',
              }),
            );
          }, 'ReplayOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M170.667008 170.667008v682.665984h682.665984V170.667008H170.667008z m0-56.889344h682.665984c31.419392 0 56.889344 25.469952 56.889344 56.889344v682.665984c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344V170.667008c0-31.419392 25.469952-56.889344 56.889344-56.889344zM666.00448 398.22336H768c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H597.332992c-15.70816 0-28.443648-12.734464-28.443648-28.443648V256c0-15.709184 12.734464-28.444672 28.443648-28.444672 15.710208 0 28.444672 12.735488 28.444672 28.444672v101.99552l122.108928-122.108928c11.108352-11.108352 29.118464-11.108352 40.226816 0 11.108352 11.108352 11.108352 29.118464 0 40.226816L666.00448 398.222336zM357.99552 625.77664H256c-15.709184 0-28.444672-12.734464-28.444672-28.444672 0-15.70816 12.735488-28.443648 28.444672-28.443648h170.667008c15.70816 0 28.443648 12.734464 28.443648 28.443648V768c0 15.709184-12.734464 28.444672-28.443648 28.444672-15.710208 0-28.444672-12.735488-28.444672-28.444672v-101.99552L276.113408 788.113408c-11.108352 11.108352-29.118464 11.108352-40.226816 0-11.108352-11.108352-11.108352-29.118464 0-40.226816l122.108928-122.108928z',
              }),
            );
          }, 'ShrinkOutlined'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 57.401344c94.11584 0 179.32288 37.305344 241.001472 97.62304 61.673472 60.3136 99.81952 143.634432 99.81952 235.669504 0 168.09984-100.16768 354.695168-300.411904 559.812608-0.335872 0.344064-0.67584 0.684032-1.021952 1.019904-11.15648 10.857472-25.657344 16.164864-40.083456 15.96928-14.427136-0.196608-28.778496-5.896192-39.635968-17.052672-200.2944-205.810688-300.488704-392.385536-300.488704-559.74912 0-92.035072 38.146048-175.356928 99.81952-235.669504C332.67712 94.706688 417.88416 57.401344 512 57.401344z m0 226.531328c-31.55968 0-60.132352 12.791808-80.815104 33.47456-20.682752 20.682752-33.47456 49.2544-33.47456 80.81408 0 31.560704 12.791808 60.133376 33.47456 80.816128 20.682752 20.682752 49.2544 33.47456 80.815104 33.47456 31.55968 0 60.132352-12.791808 80.815104-33.47456 20.682752-20.682752 33.47456-49.2544 33.47456-80.815104 0-31.55968-12.791808-60.132352-33.47456-80.815104-20.682752-20.682752-49.2544-33.47456-80.815104-33.47456z',
              }),
            );
          }, 'LocationFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M376.892416 823.40352L129.993728 562.477056c-99.436544-105.086976-97.15712-270.232576 5.144576-372.533248 101.490688-101.489664 266.038272-101.489664 367.52896 0l9.984 9.984 9.996288-9.99424c101.53984-101.540864 266.16832-101.540864 367.70816 0 102.395904 102.393856 104.802304 267.651072 5.433344 372.984832l-341.21728 361.694208a56.88832 56.88832 0 0 1-2.463744 2.4576c-22.91712 21.492736-58.918912 20.33664-80.411648-2.58048l-94.803968-101.086208z',
              }),
            );
          }, 'LikeFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 837.213184L255.744 950.136832c-14.37696 6.334464-31.16544-0.18432-37.499904-14.559232a28.444672 28.444672 0 0 1-2.270208-14.336l28.208128-278.60992L57.6 433.814528c-10.468352-11.71456-9.45664-29.696 2.25792-40.163328a28.444672 28.444672 0 0 1 12.932096-6.58944l273.690624-59.267072 140.941312-241.98144c7.906304-13.574144 25.320448-18.168832 38.895616-10.262528a28.444672 28.444672 0 0 1 10.262528 10.263552l140.941312 241.98144 273.690624 59.266048c15.353856 3.324928 25.105408 18.466816 21.78048 33.819648a28.444672 28.444672 0 0 1-6.58944 12.93312L779.81696 642.63168l28.208128 278.60992c1.583104 15.629312-9.8048 29.582336-25.434112 31.164416-4.89472 0.495616-9.833472-0.28672-14.336-2.270208L512 837.21216z',
              }),
            );
          }, 'StarFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M838.027264 645.378048a875.139072 875.139072 0 0 1 11.004928 9.352192c23.984128 20.736 33.595392 32.239616 34.613248 33.4848 0.01536 0.018432 2.091008 2.545664 4.155392 5.0944a339.017728 339.017728 0 0 1 2.95936 3.69664c0.50688 0.64512 0.925696 1.188864 1.214464 1.579008a21.48352 21.48352 0 0 1 1.64864 2.584576l5.097472 7.752704v0.739328c10.042368 21.046272 3.033088 48.800768-3.236864 62.826496-11.061248 24.745984-31.89248 49.841152-47.69792 65.076224-31.812608 30.656512-75.312128 65.845248-129.782784 65.845248-5.691392 0-11.486208-0.38912-17.220608-1.152-39.673856-5.188608-100.29056-30.140416-166.26688-68.4544-71.617536-41.588736-140.713984-93.922304-194.561024-147.357696-53.853184-53.449728-106.605568-122.06592-148.540416-193.211392-38.7072-65.671168-63.955968-126.14656-69.271552-165.91872-3.494912-26.046464 2.665472-55.016448 17.819648-83.766272 13.536256-25.68192 33.723392-50.458624 58.382336-71.653376 1.458176-1.2544 2.88768-2.48832 4.297728-3.704832 18.961408-16.366592 35.34848-30.512128 62.532608-41.088 9.550848-4.21888 18.535424-6.270976 27.454464-6.270976 8.206336 0 16.42496 1.788928 24.428544 5.317632l0.36352 0.164864c3.610624 1.696768 9.5744 4.943872 11.143168 5.804032 4.677632 2.358272 30.255104 16.468992 58.569728 55.81824 9.04192 12.57472 23.277568 33.799168 33.645568 52.248576 17.44384 31.045632 28.796928 57.872384 29.27104 59.000832l0.324608 0.770048 2.19648 6.903808c7.31136 19.4816 3.016704 39.697408-11.541504 54.223872-0.843776 0.869376-1.82784 1.907712-1.847296 1.927168l-1.20832 1.275904-0.913408 0.641024c-0.618496 0.53248-1.845248 1.624064-2.625536 2.318336-2.208768 1.965056-2.879488 2.557952-3.651584 3.14368l-0.672768 0.487424c-9.34912 6.42048-12.716032 8.342528-16.278528 10.377216-2.418688 1.381376-4.919296 2.807808-10.32192 6.332416l-0.249856 0.159744c-9.22112 5.786624-17.96096 9.430016-27.214848 13.289472-7.283712 3.035136-15.5392 6.4768-25.57952 11.594752-14.404608 7.34208-14.91456 28.23168-11.943936 35.15392 17.768448 41.4208 49.324032 83.33824 102.313984 135.913472 46.71488 46.401536 92.622848 76.101632 131.36896 99.033088 4.707328 2.786304 9.366528 4.140032 14.241792 4.140032 13.69088 0 26.8288-11.138048 32.729088-22.13888 4.540416-8.469504 8.79616-17.330176 12.551168-25.146368 3.06176-6.376448 5.95456-12.398592 8.704-17.622016l0.06656-0.12288c6.852608-12.775424 11.877376-20.978688 14.884864-25.61024 2.146304-3.304448 4.241408-6.530048 6.69184-9.148416 5.907456-8.717312 15.209472-16.047104 25.100288-19.607552 5.56032-2.003968 11.995136-3.064832 18.60096-3.064832 8.523776 0 16.68096 1.793024 22.965248 5.049344l16.869376 8.823808-0.011264 0.021504c1.284096 0.690176 2.605056 1.544192 4.14208 2.538496 1.85344 1.19808 4.550656 2.958336 7.952384 5.20192a1656.81664 1656.81664 0 0 1 27.506688 18.582528 421.75488 421.75488 0 0 1 6.074368 4.27008l46.751744 36.48z',
              }),
            );
          }, 'PhoneFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M612.46464 53.444608c96.596992 21.065728 182.080512 71.877632 246.370304 142.35648-21.47328 34.5088-23.7056 79.429632-1.964032 117.088256 21.763072 37.695488 61.83936 58.225664 102.503424 56.84224 14.265344 44.869632 21.958656 92.670976 21.958656 142.268416s-7.693312 97.398784-21.951488 142.27456c-40.670208-1.389568-80.74752 19.140608-102.510592 56.836096-21.742592 37.658624-19.510272 82.58048 1.96096 117.090304-64.28672 70.4768-149.77024 121.288704-246.366208 142.354432l-0.002048-0.012288c-19.13856-35.8912-56.948736-60.320768-100.463616-60.320768s-81.325056 24.428544-100.463616 60.320768l-0.001024 0.013312c-96.596992-21.066752-182.080512-71.878656-246.370304-142.35648 21.47328-34.5088 23.7056-79.430656 1.964032-117.08928-21.763072-37.695488-61.840384-58.225664-102.504448-56.84224C50.36032 609.399808 42.667008 561.598464 42.667008 512s7.693312-97.398784 21.951488-142.27456c40.670208 1.389568 80.74752-19.140608 102.510592-56.836096 21.742592-37.658624 19.510272-82.58048-1.96096-117.090304 64.28672-70.4768 149.77024-121.288704 246.367232-142.355456l0.002048 0.014336c19.13856 35.8912 56.947712 60.319744 100.462592 60.319744 43.358208 0 81.051648-24.252416 100.25472-59.931648zM512 398.222336c-62.83776 0-113.777664 50.939904-113.777664 113.777664S449.16224 625.777664 512 625.777664 625.777664 574.83776 625.777664 512 574.83776 398.222336 512 398.222336z',
              }),
            );
          }, 'SettingFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M455.110656 56.889344s303.839232 94.456832 236.606464 386.414592c0 0 33.615872-25.760768 67.232768-77.283328 0 0 151.272448 120.2176 151.272448 291.958784 0 120.2176-100.84864 223.261696-302.54592 309.131264h-24.495104c67.231744-97.318912 70.033408-177.46432 8.403968-240.4352C457.120768 597.869568 515.948544 512 515.948544 512S373.615616 581.07904 345.9584 709.77536c-14.848 69.087232 3.351552 155.353088 94.353408 257.335296h-13.6448C256 910.22336 113.77664 797.517824 113.77664 625.777664c0-320.92672 318.13632-267.33568 341.332992-568.88832z',
              }),
            );
          }, 'FireFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M56.889344 398.222336V227.555328c0-31.418368 25.469952-56.88832 56.88832-56.88832H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.88832V398.22336c-62.83776 0-113.77664 50.939904-113.77664 113.777664s50.93888 113.777664 113.77664 113.777664v170.667008c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832V625.77664c62.83776 0 113.77664-50.939904 113.77664-113.777664s-50.93888-113.777664-113.77664-113.777664z m312.88832 0c-15.709184 0-28.444672 12.734464-28.444672 28.444672 0 15.70816 12.735488 28.443648 28.444672 28.443648H654.22336c15.709184 0 28.444672-12.734464 28.444672-28.443648 0-15.710208-12.735488-28.444672-28.444672-28.444672H369.77664z m0 170.667008c-15.709184 0-28.444672 12.734464-28.444672 28.443648 0 15.710208 12.735488 28.444672 28.444672 28.444672H654.22336c15.709184 0 28.444672-12.734464 28.444672-28.444672 0-15.70816-12.735488-28.443648-28.444672-28.443648H369.77664z',
              }),
            );
          }, 'CouponFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M341.332992 853.332992m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0ZM739.555328 853.332992m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0ZM225.845248 227.909632h639.65184c5.070848 0 10.13248 0.452608 15.122432 1.35168 46.383104 8.351744 77.212672 52.722688 68.860928 99.104768l-61.45024 341.262336c-7.318528 40.641536-42.687488 70.21056-83.98336 70.21056h-500.65408c-43.367424 0-79.838208-32.52736-84.779008-75.61216L164.919296 195.958784c-1.646592-14.3616-13.80352-25.203712-28.259328-25.203712H56.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672S41.179136 113.865728 56.889344 113.865728h79.770624c43.367424 0 79.838208 32.52736 84.777984 75.61216l4.407296 38.431744z',
              }),
            );
          }, 'CartFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M136.129536 113.58208c43.70432 0 80.344064 33.020928 84.87424 76.489728l3.904512 37.48352h740.835328a1.024 1.024 0 0 1 0.982016 1.312768L850.352128 625.112064a1.024 1.024 0 0 1-0.886784 0.731136l-577.41824 54.10816 3.584 34.392064c1.5104 14.4896 13.723648 25.496576 28.292096 25.496576h547.684352c15.709184 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.735488 28.444672-28.444672 28.444672H303.9232c-43.70432 0-80.345088-33.019904-84.87424-76.489728L164.420608 195.969024c-1.509376-14.4896-13.722624-25.496576-28.291072-25.496576H56.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h79.240192zM341.332992 910.222336m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0ZM739.555328 910.222336m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0Z',
              }),
            );
          }, 'ShoppingCartFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336C292.068352 113.777664 113.777664 292.068352 113.777664 512c0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656zM284.444672 341.332992h480.948224c15.70816 0 28.443648 12.735488 28.443648 28.444672 0 2.958336-0.4608 5.89824-1.36704 8.71424l-54.92736 170.667008a28.444672 28.444672 0 0 1-27.077632 19.730432H284.444672V341.332992zM341.332992 739.555328m-28.444672 0a28.444672 28.444672 0 1 0 56.889344 0 28.444672 28.444672 0 1 0-56.889344 0ZM682.667008 739.555328m-28.444672 0a28.444672 28.444672 0 1 0 56.889344 0 28.444672 28.444672 0 1 0-56.889344 0ZM256.361472 341.34528c-15.70816 0-28.443648-12.735488-28.443648-28.444672s12.734464-28.444672 28.443648-28.444672h28.444672c31.419392 0 56.889344 25.469952 56.889344 56.889344v284.628992h369.536c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H341.695488c-31.419392 0-56.889344-25.469952-56.889344-56.889344V341.34528h-28.444672z',
              }),
            );
          }, 'CartCircleFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M627.305472 113.777664c109.966336 0 199.11168 89.145344 199.11168 199.11168 0 79.837184-46.989312 148.70016-114.82112 180.441088v-0.013312c146.973696 38.060032 255.514624 171.58144 255.514624 330.45504l-0.003072-0.47104 0.003072 0.47104c0 15.70816-12.734464 28.443648-28.443648 28.443648H312.889344l-0.47104-0.003072c-15.49312-0.251904-27.973632-12.889088-27.973632-28.440576l0.045056-5.645312c2.547712-157.09184 111.219712-288.387072 257.447936-325.315584l0.002048 0.012288c-67.252224-31.963136-113.74592-100.519936-113.74592-179.934208 0-109.96736 89.145344-199.11168 199.11168-199.11168z m-227.80928 66.184192c9.293824 0 18.409472 0.763904 27.287552 2.233344-25.996288 36.982784-41.255936 82.056192-41.255936 130.69312 0 67.386368 29.563904 129.440768 78.27456 171.784192-123.872256 53.94944-210.394112 172.865536-220.939264 310.652928l-105.381888 0.002048-0.392192-0.003072c-12.909568-0.20992-23.31136-10.740736-23.31136-23.70048l0.037888-4.704256c2.122752-130.911232 92.683264-240.323584 214.541312-271.096832l0.001024 0.01024c-56.04352-26.63424-94.788608-83.765248-94.788608-149.94432 0-91.638784 74.288128-165.926912 165.925888-165.926912z',
              }),
            );
          }, 'FriendsFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M625.777664 739.554304l-66.443264 99.66592a56.889344 56.889344 0 0 1-15.777792 15.777792c-26.14272 17.42848-61.462528 10.36288-78.891008-15.778816l-66.443264-99.664896H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832v-512c0-31.419392 25.469952-56.889344 56.88832-56.889344H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.889344v512c0 31.418368-25.469952 56.88832-56.88832 56.88832H625.77664zM312.889344 284.443648c-15.710208 0-28.444672 12.734464-28.444672 28.443648 0 15.710208 12.734464 28.444672 28.444672 28.444672h398.221312c15.710208 0 28.444672-12.734464 28.444672-28.444672 0-15.70816-12.734464-28.443648-28.444672-28.443648H312.889344z m0 170.665984c-15.710208 0-28.444672 12.735488-28.444672 28.444672S297.179136 512 312.889344 512h398.221312c15.710208 0 28.444672-12.735488 28.444672-28.444672s-12.734464-28.444672-28.444672-28.444672H312.889344z',
              }),
            );
          }, 'CommentFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M645.773312 426.665984l-134.68672 486.074368-143.988736-486.074368h278.675456z m305.065984 0l-358.196224 404.7872 112.162816-404.7872h246.033408z m-643.074048 0L426.52672 827.57632 74.19904 426.665984h233.566208z m79.4368-312.88832l-74.534912 256H66.343936l99.647488-255.673344a0.512 0.512 0 0 1 0.477184-0.326656h220.73344z m167.49568 0l87.533568 256H371.918848l74.534912-256h108.243968z m301.78304 0a0.512 0.512 0 0 1 0.475136 0.32256l101.62688 255.67744H702.353408l-87.533568-256h241.660928z',
              }),
            );
          }, 'GemFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M478.69952 227.555328c-11.71456-33.142784-43.322368-56.88832-80.477184-56.88832-37.154816 0-68.763648 23.745536-80.478208 56.88832H478.69952z m-219.854848 0c13.177856-64.91648 70.572032-113.77664 139.37664-113.77664 46.524416 0 87.830528 22.337536 113.778688 56.873984 25.94816-34.536448 67.254272-56.875008 113.777664-56.875008 68.805632 0 126.199808 48.861184 139.37664 113.777664h88.178688c31.419392 0 56.889344 25.469952 56.889344 56.889344v170.665984c0 31.419392-25.469952 56.889344-56.889344 56.889344v341.332992c0 31.419392-25.469952 56.889344-56.88832 56.889344H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.889344V512c-31.419392 0-56.889344-25.469952-56.889344-56.889344V284.444672c0-31.419392 25.469952-56.889344 56.889344-56.889344h88.177664z m286.455808 0h160.955392c-11.71456-33.142784-43.323392-56.88832-80.478208-56.88832s-68.762624 23.745536-80.477184 56.88832z m-90.189824 0V910.22336h113.778688V227.555328H455.110656z',
              }),
            );
          }, 'GiftFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M645.972992 252.126208c-15.41632 15.41632-29.80864 24.576-42.665984 31.060992h-39.140352c1.47968-14.164992 12.23168-42.04032 41.529344-71.337984 38.969344-38.912 75.435008-45.340672 80.497664-40.220672 5.006336 5.006336-1.308672 41.52832-40.220672 80.49664zM420.75136 283.1872c-12.857344-6.484992-27.249664-15.644672-42.609664-31.004672-38.969344-39.02464-45.227008-75.491328-40.220672-80.49664 0.966656-0.96768 3.014656-1.47968 5.916672-1.47968 12.91264 0 42.894336 10.068992 74.580992 41.699328 29.184 29.241344 39.993344 57.059328 41.472 71.281664H420.75136z m62.833664 227.550208v398.222336h-256c-31.14496 0-56.379392-24.92416-56.881152-55.947264l-0.008192-0.94208V510.737408H483.584z m369.777664 0V852.0704c0 31.459328-25.428992 56.889344-56.88832 56.889344h-256v-398.22336H853.36064zM458.63936 171.68384c27.590656 27.59168 45.681664 57.969664 53.419008 85.90336 7.68-27.933696 25.769984-58.31168 53.417984-85.95968 57.344-57.401344 126.691328-74.582016 160.939008-40.220672 32.21504 32.32768 18.486272 95.09888-30.532608 150.114304l-1.49504 1.665024h159.003648c31.08864 0 56.378368 24.92416 56.881152 55.947264l0.007168 0.94208v56.88832c0 31.14496-24.978432 56.380416-55.948288 56.881152l-0.940032 0.008192H540.500992V283.1872h-56.88832v170.667008H170.667008c-31.08864 0-56.379392-24.92416-56.881152-55.947264l-0.008192-0.94208v-56.88832c0-31.14496 24.979456-56.380416 55.948288-56.881152l0.941056-0.008192h159.003648c-50.28864-55.465984-64.56832-119.124992-31.971328-151.721984 34.304-34.532352 103.595008-17.124352 160.939008 40.219648z',
              }),
            );
          }, 'PointGiftFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M910.222336 284.444672v568.88832c0 31.460352-25.428992 56.889344-56.889344 56.889344H170.667008c-31.460352 0-56.889344-25.428992-56.889344-56.889344V284.444672H910.22336z m-227.555328 56.88832H341.332992v325.57568c0 7.73632 7.62368 13.198336 15.019008 10.752l137.670656-45.910016a57.143296 57.143296 0 0 1 35.954688 0L667.648 677.660672c7.395328 2.446336 15.019008-3.01568 15.019008-10.752V341.332992z m135.4752-227.572736c21.56032 0 41.300992 12.17536 50.915328 31.460352l41.187328 82.318336H113.800192l41.131008-82.31936c9.614336-19.284992 29.355008-31.459328 50.915328-31.459328z',
              }),
            );
          }, 'SendGiftFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M227.555328 455.110656c31.419392 0 56.889344 25.470976 56.889344 56.889344v227.555328c0 31.419392-25.469952 56.889344-56.889344 56.889344h-56.88832c-31.419392 0-56.889344-25.469952-56.889344-56.889344V455.110656h113.777664z m682.667008 0v284.444672c0 31.419392-25.469952 56.889344-56.889344 56.889344h-56.88832c-31.419392 0-56.889344-25.469952-56.889344-56.889344V512c0-31.418368 25.469952-56.889344 56.889344-56.889344h113.77664zM881.77664 654.22336c15.710208 0 28.444672 12.735488 28.444672 28.444672v104.46336c-0.841728 116.01408-55.412736 180.272128-157.559808 180.272128H540.68224c-15.70816 0-28.443648-12.734464-28.443648-28.444672 0-15.70816 12.734464-28.443648 28.443648-28.443648h211.981312c68.537344 0 100.042752-37.098496 100.66944-123.589632l0.001024-104.25856c0-15.70816 12.735488-28.443648 28.444672-28.443648zM512 56.889344c219.931648 0 398.222336 178.289664 398.222336 398.221312h-56.889344c0-188.512256-152.819712-341.332992-341.332992-341.332992-188.51328 0-341.332992 152.820736-341.332992 341.332992H113.77664c0-219.931648 178.290688-398.221312 398.222336-398.221312z',
              }),
            );
          }, 'ServiceFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M341.332992 284.444672c0-94.257152 75.045888-170.667008 167.61856-170.667008 92.57472 0 167.619584 76.41088 167.619584 170.667008h97.723392c20.445184 0 37.36576 15.896576 38.64064 36.3008l37.82656 605.2352c1.334272 21.34016-14.88384 39.72096-36.225024 41.055232-0.80384 0.050176-1.608704 0.074752-2.414592 0.074752H211.877888c-21.382144 0-38.716416-17.333248-38.716416-38.715392 0-0.805888 0.0256-1.610752 0.075776-2.415616l37.82656-605.234176c1.275904-20.404224 18.19648-36.3008 38.641664-36.3008h91.62752z m56.889344 0h221.46048c0-63.065088-49.80736-113.777664-110.73024-113.777664-60.92288 0-110.73024 50.712576-110.73024 113.77664z',
              }),
            );
          }, 'BagFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M739.538944 568.905728c94.26432 0 170.665984 76.345344 170.665984 170.667008 0 94.26432-76.40064 170.667008-170.665984 170.667008s-170.667008-76.402688-170.667008-170.667008c0-94.321664 76.401664-170.667008 170.667008-170.667008z m56.905728-455.12704c31.459328 0 56.88832 25.427968 56.88832 56.88832v372.905984C819.712 524.004352 781.19936 512 739.556352 512 613.888 512 512 613.888 512 739.555328c0 68.323328 30.777344 128.96768 78.507008 170.667008H227.555328c-31.459328 0-56.88832-25.428992-56.88832-56.889344V170.667008c0-31.460352 25.428992-56.889344 56.88832-56.889344z m-56.905728 513.608704c-15.702016 0-28.444672 12.8-28.444672 28.444672v72.875008a56.87808 56.87808 0 0 0 16.668672 40.220672l55.124992 55.181312c11.092992 11.094016 29.126656 11.094016 40.220672 0 11.092992-11.092992 11.092992-29.126656 0-40.219648l-55.126016-55.18336v-72.873984c0-15.644672-12.686336-28.444672-28.443648-28.444672zM426.665984 512h-113.77664c-15.702016 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.742656 28.444672 28.444672 28.444672h113.77664c15.702016 0 28.444672-12.74368 28.444672-28.444672C455.110656 524.742656 442.368 512 426.667008 512z m113.778688-113.777664H312.889344c-15.702016 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.742656 28.443648 28.444672 28.443648h227.555328c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672z m113.77664-113.777664H312.890368c-15.702016 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.742656 28.443648 28.444672 28.443648h341.332992c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672z',
              }),
            );
          }, 'TodoListFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M739.555328 568.911872c94.265344 0 170.667008 76.34432 170.667008 170.665984 0 94.265344-76.401664 170.667008-170.667008 170.667008-94.26432 0-170.665984-76.401664-170.665984-170.667008 0-94.32064 76.40064-170.665984 170.665984-170.665984z m56.889344-455.134208c31.459328 0 56.88832 25.428992 56.88832 56.889344v372.905984C819.712 524.004352 781.19936 512 739.556352 512 613.888 512 512 613.888 512 739.555328c0 68.323328 30.777344 128.96768 78.507008 170.667008H227.555328c-31.459328 0-56.88832-25.428992-56.88832-56.889344V170.667008c0-31.460352 25.428992-56.889344 56.88832-56.889344z m8.476672 531.990528c-8.306688-8.30464-21.788672-8.30464-30.15168 0l-35.214336 35.158016-35.214336-35.158016c-8.361984-8.30464-21.844992-8.30464-30.150656 0-8.363008 8.363008-8.363008 21.846016 0 30.15168l27.136 27.136h-25.771008c-11.776 0-21.332992 9.556992-21.332992 21.332992 0 11.776 9.556992 21.332992 21.332992 21.332992h42.667008v28.444672h-42.667008c-11.776 0-21.332992 9.558016-21.332992 21.334016s9.556992 21.332992 21.332992 21.332992h42.667008V841.0112c0 11.776 9.556992 21.332992 21.332992 21.332992 11.776 0 21.334016-9.556992 21.334016-21.332992v-24.177664h42.665984c11.776 0 21.334016-9.556992 21.334016-21.332992 0-11.776-9.558016-21.334016-21.334016-21.334016h-42.665984v-28.444672h42.665984c11.776 0 21.334016-9.556992 21.334016-21.332992 0-11.776-9.558016-21.332992-21.334016-21.332992h-25.769984l27.136-27.136c8.361984-8.305664 8.361984-21.788672 0-30.15168zM426.665984 512h-113.77664c-15.702016 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.742656 28.444672 28.444672 28.444672h113.77664c15.702016 0 28.444672-12.74368 28.444672-28.444672C455.110656 524.742656 442.368 512 426.667008 512z m113.778688-113.777664H312.889344c-15.702016 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.742656 28.443648 28.444672 28.443648h227.555328c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672z m113.77664-113.777664H312.890368c-15.702016 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.742656 28.443648 28.444672 28.443648h341.332992c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672z',
              }),
            );
          }, 'BalanceListFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m180.675584 274.316288c-11.108352-11.108352-29.118464-11.108352-40.226816 0L511.65696 471.998464 370.864128 331.205632c-11.108352-11.108352-29.118464-11.108352-40.226816 0-11.108352 11.108352-11.108352 29.118464 0 40.226816L471.42912 512.22528 330.637312 653.018112c-11.108352 11.108352-11.108352 29.118464 0 40.226816 11.108352 11.108352 29.118464 11.108352 40.226816 0l140.792832-140.792832 140.791808 140.792832c11.108352 11.108352 29.118464 11.108352 40.226816 0 11.108352-11.108352 11.108352-29.118464 0-40.226816L551.882752 512.22528l140.792832-140.792832c11.108352-11.108352 11.108352-29.118464 0-40.226816z',
              }),
            );
          }, 'ClearFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m-28.444672 227.555328c-15.709184 0-28.444672 12.734464-28.444672 28.444672v256c0 15.70816 12.735488 28.443648 28.444672 28.443648h256c15.709184 0 28.444672-12.734464 28.444672-28.443648 0-15.710208-12.735488-28.444672-28.444672-28.444672H512V312.889344c0-15.710208-12.735488-28.444672-28.444672-28.444672z',
              }),
            );
          }, 'ClockFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.334656 0 455.110656 203.776 455.110656 455.110656 0 251.334656-203.776 455.110656-455.110656 455.110656-251.334656 0-455.110656-203.776-455.110656-455.110656 0-251.334656 203.776-455.110656 455.110656-455.110656z m-4.056064 593.276928c-13.084672 0-23.779328 3.753984-31.857664 12.515328-9.443328 8.078336-13.824 18.772992-13.824 31.857664 0 12.515328 4.380672 23.153664 13.824 31.915008 8.078336 8.704 18.772992 13.084672 31.85664 13.084672 12.573696 0 23.780352-4.380672 33.16736-12.459008 8.704-8.817664 13.084672-19.39968 13.084672-32.540672 0-13.084672-4.380672-23.779328-13.084672-31.857664-8.761344-8.761344-20.025344-12.515328-33.16736-12.515328z m10.667008-365.7216c-45.682688 0-81.92 13.084672-108.146688 39.99232-26.907648 26.283008-39.99232 61.89568-39.99232 107.577344v1.024c0 18.374656 14.790656 33.222656 33.166336 33.222656 18.318336 0 33.166336-14.848 33.166336-33.222656 0-0.398336-0.113664-1.024-0.113664-1.024 0-27.59168 5.574656-49.379328 16.838656-64.398336 12.515328-17.521664 33.108992-26.283008 61.326336-26.283008 22.470656 0 39.99232 6.257664 52.451328 18.774016 11.889664 12.515328 18.204672 29.411328 18.204672 51.25632 0 16.27136-5.689344 31.232-16.953344 45.625344l-10.638336 11.88864c-38.683648 34.361344-61.780992 60.416-71.28064 77.484032-14.166016 25.542656-11.606016 49.152-11.606016 49.152 0 18.317312 14.905344 33.165312 33.222656 33.165312 18.37568 0 30.492672-12.628992 33.16736-33.165312 0 0 3.412992-19.115008 10.29632-31.63136 5.632-11.206656 14.39232-21.901312 25.6-31.85664 30.094336-25.657344 47.558656-41.92768 53.134336-48.811008 15.017984-19.968 23.09632-45.625344 23.09632-76.23168 0-37.48864-12.457984-67.526656-36.806656-89.428992-25.03168-22.470656-57.515008-33.108992-98.132992-33.108992z',
              }),
            );
          }, 'QuestionFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512.45568 57.344c251.35104 0 455.11168 203.76064 455.11168 455.11168 0 251.35104-203.76064 455.11168-455.11168 455.11168C261.10464 967.56736 57.344 763.80672 57.344 512.45568 57.344 261.10464 261.10464 57.344 512.45568 57.344z m272.444416 288.876544c-5.842944-5.445632-16.21504-5.953536-22.995968-1.074176l-0.315392 0.232448-301.232128 228.097024c-5.515264 4.176896-15.601664 4.72064-21.655552 1.186816l-0.320512-0.193536-113.998848-71.015424c-7.031808-4.380672-16.93696-2.89792-22.390784 3.219456l-0.24576 0.2816-13.169664 15.497216c-5.553152 6.53312-4.62848 15.625216 1.519616 21.586944l0.27136 0.258048 140.93312 131.342336c10.247168 9.550848 26.529792 10.051584 36.615168 0.9728l0.313344-0.28672 323.310592-301.310976c6.679552-6.223872 7.225344-15.606784 1.036288-21.63712l-0.254976-0.241664-7.419904-6.915072z',
              }),
            );
          }, 'CheckedFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M711.339008 540.444672h-170.89536v170.894336c0 15.643648-12.742656 28.443648-28.443648 28.443648s-28.444672-12.8-28.444672-28.443648v-170.89536H312.660992c-15.643648 0-28.443648-12.742656-28.443648-28.443648s12.8-28.444672 28.443648-28.444672h170.89536V312.660992c0-15.643648 12.742656-28.443648 28.443648-28.443648s28.444672 12.8 28.444672 28.443648v170.89536h170.894336c15.643648 0 28.443648 12.742656 28.443648 28.443648s-12.8 28.444672-28.443648 28.444672M512 56.889344c-251.334656 0-455.110656 203.776-455.110656 455.110656 0 251.334656 203.776 455.110656 455.110656 455.110656 251.334656 0 455.110656-203.776 455.110656-455.110656 0-251.334656-203.776-455.110656-455.110656-455.110656',
              }),
            );
          }, 'AddFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 967.110656C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z m-57.2928-540.443648H369.77664c-15.709184 0-28.444672 12.734464-28.444672 28.443648 0 15.710208 12.735488 28.444672 28.444672 28.444672h113.777664v85.334016h-113.77664c-15.710208 0-28.445696 12.734464-28.445696 28.443648 0 15.710208 12.735488 28.444672 28.444672 28.444672h113.777664v113.777664C483.555328 755.264512 496.29184 768 512 768s28.444672-12.735488 28.444672-28.444672v-113.77664h113.77664c15.710208 0 28.445696-12.735488 28.445696-28.445696 0-15.70816-12.735488-28.443648-28.444672-28.443648H540.444672v-85.334016h113.77664c15.710208 0 28.445696-12.734464 28.445696-28.444672 0-15.70816-12.735488-28.443648-28.444672-28.443648h-82.90816l81.883136-81.883136c11.108352-11.108352 11.108352-29.11744 0-40.225792-11.108352-11.108352-29.118464-11.108352-40.226816 0l-99.959808 99.959808-99.959808-99.959808c-11.108352-11.108352-29.118464-11.108352-40.226816 0-11.108352 11.108352-11.108352 29.11744 0 40.225792l81.883136 81.883136z',
              }),
            );
          }, 'GoldCoinFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m28.444672 341.332992h-99.555328v56.88832h42.665984v256h-56.88832V768h170.665984v-56.889344h-56.88832V398.22336zM512 256c-23.564288 0-42.667008 19.10272-42.667008 42.667008s19.10272 42.665984 42.667008 42.665984 42.667008-19.101696 42.667008-42.665984C554.667008 275.10272 535.564288 256 512 256z',
              }),
            );
          }, 'InfoFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 967.110656C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z m171.776-432.851968a28.444672 28.444672 0 0 0 4.441088-4.442112c9.814016-12.26752 7.825408-30.16704-4.442112-39.980032L473.30816 321.462272a28.444672 28.444672 0 0 0-17.768448-6.232064c-15.710208 0-28.444672 12.734464-28.444672 28.443648v336.746496a28.444672 28.444672 0 0 0 6.233088 17.769472c9.814016 12.26752 27.713536 14.256128 39.980032 4.442112L683.776 534.258688z',
              }),
            );
          }, 'PlayCircleFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 967.110656C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z m-92.444672-625.77664c-19.636224 0-35.555328 15.91808-35.555328 35.555328v270.221312c0 19.637248 15.919104 35.556352 35.555328 35.556352 19.637248 0 35.555328-15.919104 35.555328-35.556352V376.889344c0-19.637248-15.91808-35.556352-35.555328-35.556352z m184.889344 0c-19.637248 0-35.555328 15.91808-35.555328 35.555328v270.221312c0 19.637248 15.91808 35.556352 35.555328 35.556352 19.636224 0 35.555328-15.919104 35.555328-35.556352V376.889344c0-19.637248-15.919104-35.556352-35.555328-35.556352z',
              }),
            );
          }, 'PauseCircleFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 967.110656C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z m-113.231872-597.58592c-15.709184 0-28.444672 12.734464-28.444672 28.443648v227.555328c0 15.710208 12.735488 28.444672 28.444672 28.444672h227.555328c15.710208 0 28.444672-12.734464 28.444672-28.444672V397.968384c0-15.709184-12.734464-28.444672-28.444672-28.444672H398.768128z',
              }),
            );
          }, 'StopCircleFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344zM514.844672 691.2c-21.993472 0-39.82336 17.828864-39.82336 39.822336s17.829888 39.822336 39.82336 39.822336 39.822336-17.828864 39.822336-39.82336c0-21.992448-17.828864-39.821312-39.82336-39.821312z m29.580288-438.044672H485.26336c-6.165504 0-10.365952 4.768768-10.23488 10.651648l8.424448 376.91904c0.13824 6.17984 4.844544 10.651648 10.52672 10.651648h41.728c5.398528 0 10.3936-4.768768 10.52672-10.651648l8.423424-376.91904c0.13824-6.178816-4.450304-10.651648-10.233856-10.651648z',
              }),
            );
          }, 'WarningFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344zM372.82304 256c-30.662656 0-55.170048 22.448128-79.003648 54.222848C271.906816 339.443712 256 371.781632 256 404.9408c0 31.9488 15.497216 68.728832 40.201216 108.82048 23.113728 37.50912 54.8096 77.565952 89.450496 113.115136l11.211776 11.214848c35.80928 34.89792 75.866112 66.594816 113.374208 89.70752 40.072192 24.69888 76.869632 40.20224 108.82048 40.20224 33.163264 0 65.512448-15.91296 94.72-37.820416C745.550848 706.347008 768 681.84064 768 651.17696c0-18.782208-9.672704-34.697216-28.198912-52.56192-11.45856-11.04896-25.50784-22.094848-40.51968-32.602112-14.819328-10.37312-30.34624-19.974144-43.94496-27.150336-20.637696-10.891264-34.558976-15.214592-46.98112-15.214592-19.66592 0-36.38784 10.070016-48.2304 27.234304-3.506176 5.076992-6.007808 9.517056-9.03168 15.960064a283.293696 283.293696 0 0 1-5.48864-3.647488c-16.2048-11.03872-33.941504-25.454592-47.079424-38.250496-12.26752-12.609536-26.682368-30.345216-37.720064-46.55104a282.857472 282.857472 0 0 1-3.647488-5.48864c6.44096-3.023872 10.87488-5.520384 15.956992-9.024512 17.166336-11.843584 27.234304-28.5696 27.234304-48.232448 0-12.42624-4.319232-26.345472-15.208448-46.98112-7.184384-13.611008-16.78848-29.142016-27.153408-43.949056-10.50624-15.010816-21.552128-29.059072-32.596992-40.51456C407.52128 265.672704 391.605248 256 372.82304 256z m0 56.889344c-0.406528 0 3.470336 2.3552 11.614208 10.801152 8.617984 8.937472 17.99168 20.861952 26.944512 33.650688 9.059328 12.94336 17.425408 26.4704 23.446528 37.878784 6.864896 13.008896 8.59648 18.49344 8.63232 20.364288l-0.003072-0.055296c-0.026624-0.272384-0.275456-0.11264-2.643968 1.521664-3.361792 2.318336-7.35232 4.269056-17.08544 8.47872-3.211264 1.388544-3.211264 1.388544-7.202816 3.182592-1.974272 0.912384-1.974272 0.912384-4.020224 1.902592-4.702208 2.30912-8.281088 4.353024-11.598848 6.998016l-14.10048 11.235328 4.144128 17.54624c2.453504 10.3936 10.139648 25.383936 22.837248 44.024832 12.870656 18.89792 29.374464 39.202816 44.514304 54.74816 16.074752 15.669248 36.378624 32.173056 55.277568 45.04576 18.648064 12.700672 33.636352 20.385792 44.027904 22.838272l17.54112 4.140032 11.235328-14.094336c2.643968-3.31776 4.687872-6.895616 6.995968-11.593728 0.99328-2.052096 0.99328-2.052096 1.908736-4.031488 1.792-3.986432 1.792-3.986432 3.178496-7.18848 4.205568-9.73312 6.15936-13.728768 8.475648-17.083392 1.75104-2.536448 1.819648-2.65728 1.470464-2.6624 1.869824 0.03584 7.35744 1.769472 20.371456 8.63744 11.39712 6.014976 24.922112 14.377984 37.876736 23.44448 12.787712 8.951808 24.711168 18.326528 33.652736 26.947584 8.441856 8.1408 10.797056 12.01664 10.797056 11.610112 0 4.61824-15.425536 21.459968-31.468544 33.494016-20.042752 15.033344-43.23328 26.43968-60.58496 26.43968-18.251776 0-47.386624-12.274688-78.973952-31.744-33.82784-20.845568-70.610944-49.95072-103.256064-81.762304l-10.69056-10.693632c-31.552512-32.382976-60.657664-69.16608-81.503232-102.99392-19.473408-31.603712-31.744-60.726272-31.744-78.977024 0-17.34656 11.404288-40.530944 26.441728-60.583936 12.032-16.04096 28.872704-31.46752 33.491968-31.46752z',
              }),
            );
          }, 'PhoneCircleFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m30.036992 170.665984h-3.18464c-13.76768 0-24.576 10.467328-26.226688 23.665664-0.05632 0.683008-0.284672 1.195008-0.340992 1.878016-0.057344 0.454656-0.284672 0.852992-0.284672 1.307648v341.618688c-14.961664-7.964672-31.686656-12.914688-49.777664-12.914688h-71.11168c-58.88 0-106.665984 47.787008-106.665984 106.667008s47.785984 106.667008 106.665984 106.667008h71.11168c58.88 0 106.667008-47.787008 106.667008-106.667008 0-2.446336-0.569344-4.721664-0.740352-7.110656h0.740352V305.26464l76.34432 44.089344a28.326912 28.326912 0 0 0 14.164992 3.811328c9.842688 0 19.39968-5.12 24.633344-14.222336 7.907328-13.596672 3.243008-31.004672-10.353664-38.912l-116.451328-67.185664c-4.380672-3.072-9.387008-5.291008-15.190016-5.291008zM462.22336 640C489.643008 640 512 662.356992 512 689.777664s-22.356992 49.777664-49.777664 49.777664h-71.11168c-27.419648 0-49.77664-22.356992-49.77664-49.77664 0-27.421696 22.356992-49.778688 49.77664-49.778688h71.11168z',
              }),
            );
          }, 'MusicFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m227.95264 487.328768c-15.868928-5.608448-33.28 2.70848-38.889472 18.578432-27.74528 78.497792-102.20032 132.06016-186.830848 132.06016-84.631552 0-159.086592-53.562368-186.831872-132.06016-5.608448-15.869952-23.01952-24.18688-38.889472-18.578432-15.869952 5.609472-24.18688 23.020544-18.578432 38.890496 36.288512 102.670336 133.635072 172.700672 244.299776 172.700672 110.66368 0 208.01024-70.03136 244.298752-172.700672 5.609472-15.869952-2.70848-33.281024-18.577408-38.890496zM355.331072 353.523712c-26.9312 0-48.76288 21.83168-48.76288 48.76288 0 26.929152 21.83168 48.760832 48.76288 48.760832 26.930176 0 48.761856-21.83168 48.761856-48.761856 0-26.9312-21.83168-48.761856-48.76288-48.761856z m316.049408 0c-26.9312 0-48.76288 21.83168-48.76288 48.76288 0 26.929152 21.83168 48.760832 48.76288 48.760832 26.930176 0 48.761856-21.83168 48.761856-48.761856 0-26.9312-21.83168-48.761856-48.76288-48.761856z',
              }),
            );
          }, 'SmileFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m80.57856 278.536192c3.366912-43.941888-29.636608-76.075008-72.625152-72.02816-0.638976 0.098304-1.275904 0.211968-1.908736 0.33792-0.903168 0.110592-1.810432 0.23552-2.68288 0.62464-19.079168 5.059584-34.768896 22.53824-37.404672 42.037248-0.67072 6.486016-1.992704 16.881664-4.163584 30.32576-3.617792 22.407168-8.30464 44.78976-14.14144 65.529856-13.61408 48.376832-31.504384 78.910464-47.968256 82.791424-3.607552 0.84992-15.694848 3.231744-32.969728 6.52288l-1.374208 0.262144a8982.016 8982.016 0 0 1-36.616192 6.884352c-18.64704 3.46624-32.907264 20.569088-32.907264 39.51616v167.113728c0 24.711168 21.127168 42.679296 45.427712 38.740992l299.742208-48.622592c28.2624-4.585472 48.41984-30.922752 45.824-59.350016-0.441344-2.766848-0.441344-2.766848-0.512-3.155968-0.231424-1.593344-0.248832-3.744768 0.377856-6.688768 0.3072-0.710656 2.4064-4.983808 2.942976-6.140928 3.812352-8.23296 6.066176-16.359424 6.825984-27.021312 0.570368-7.9872 0.03072-13.0048-1.625088-20.805632-0.940032-4.429824-1.087488-5.91872-0.740352-9.947136 0.269312-3.119104 0.74752-4.876288 2.230272-8.643584l1.053696-2.660352c3.328-8.486912 5.13024-15.546368 5.960704-25.904128 0.882688-11.122688-0.1536-18.844672-2.905088-28.756992-0.576512-2.05824-0.576512-2.05824-0.990208-3.593216-0.623616-2.395136-0.743424-3.468288-0.57856-5.023744 0.352256-3.381248 0.805888-6.493184 1.335296-9.346048 0.724992-3.915776 1.3824-6.38976 1.676288-7.258112 9.558016-39.310336-17.196032-69.156864-55.424-64.602112l-71.964672 8.56064zM384 533.993472v161.876992l-33.516544 5.43744V540.297216a9102.736384 9102.736384 0 0 0 33.51552-6.303744z m141.479936-228.11136c15.947776-0.94208 25.847808 9.43616 24.556544 26.284032l-6.454272 84.260864c-1.90464 25.186304 18.161664 44.58496 43.173888 41.631744l76.726272-9.126912c8.813568-1.050624 11.475968 1.92 9.435136 10.391552-0.39424 0.892928-1.573888 5.334016-2.683904 11.324416a161.604608 161.604608 0 0 0-1.816576 12.668928c-0.764928 7.23968-0.095232 13.244416 1.72032 20.222976 0.631808 2.34496 0.631808 2.34496 1.169408 4.257792 1.523712 5.487616 1.922048 8.460288 1.486848 13.952-0.46592 5.79584-1.252352 8.87808-3.151872 13.719552l-1.032192 2.609152c-2.8672 7.28064-4.364288 12.790784-5.03808 20.611072-0.76288 8.851456-0.227328 14.27456 1.54624 22.6304 0.864256 4.0704 1.007616 5.40672 0.769024 8.75008-0.371712 5.2224-1.246208 8.374272-2.983936 12.125184-0.141312 0.3072-2.5856 5.280768-3.38944 7.13728-1.499136 3.468288-2.556928 6.803456-3.16416 10.513408-1.15712 7.04512-1.102848 13.541376-0.273408 19.245056 0.497664 2.944 0.497664 2.944 0.854016 4.368384-0.04096 2.757632-4.748288 8.9088-10.775552 9.88672l-219.488256 35.603456 0.001024-163.832832c34.57024-11.28448 57.18016-51.33312 74.05568-111.305728 6.325248-22.474752 11.334656-46.39232 15.192064-70.28736 2.31424-14.336 3.740672-25.546752 4.407296-32.11264 0.21504-1.509376 2.941952-4.509696 5.157888-5.528576z',
              }),
            );
          }, 'ThumbCircleFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m224 227.555328h-448c-17.673216 0-32 14.32576-32 32v338.983936c0 17.673216 14.326784 32 32 32h27.36128l33.1264 63.8208c8.1408 15.685632 27.457536 21.80096 43.143168 13.66016a32 32 0 0 0 13.66016-13.66016l33.1264-63.8208H736c17.673216 0 32-14.326784 32-32v-338.98496c0-17.672192-14.326784-32-32-32z m-24.889344 56.88832v289.206272h-307.26144l-26.959872 51.943424-26.96192-51.943424h-37.03808V341.332992h398.221312z',
              }),
            );
          }, 'CommentCircleFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m0.002048 284.443648c-191.9744 0-284.44672 162.7136-284.44672 170.667008 0 7.962624 90.002432 170.667008 284.44672 170.667008 194.441216 0 284.442624-162.70336 284.442624-170.667008 0-7.954432-92.47232-170.667008-284.442624-170.667008z m0 56.889344c62.834688 0 113.77664 50.936832 113.77664 113.77664 0 62.83776-50.941952 113.778688-113.77664 113.778688-62.838784 0-113.779712-50.940928-113.779712-113.778688 0-62.839808 50.940928-113.77664 113.779712-113.77664z m0 56.88832c-31.423488 0-56.891392 25.470976-56.891392 56.887296 0 31.422464 25.46688 56.890368 56.891392 56.890368 31.41632 0 56.887296-25.46688 56.887296-56.890368 0-31.41632-25.470976-56.887296-56.887296-56.887296z',
              }),
            );
          }, 'BrowsingHistoryFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m-3.100672 170.665984c-10.171392 0-18.688 7.707648-19.700736 17.828864l-34.035712 340.36224-0.0512 0.11264 0.038912 0.01024-0.004096 0.04096 0.12288-0.001024 257.757184 83.129344c9.6256 3.104768 20.047872-1.353728 24.467456-10.409984l0.157696-0.329728c4.325376-9.27744 1.067008-20.323328-7.602176-25.766912L556.41088 523.503616l-27.81184-278.1184c-1.000448-10.00448-9.331712-17.649664-19.346432-17.826816z',
              }),
            );
          }, 'UnderwayFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m0 398.221312c-31.418368 0-56.889344 25.470976-56.889344 56.889344s25.470976 56.889344 56.889344 56.889344 56.889344-25.470976 56.889344-56.889344-25.470976-56.889344-56.889344-56.889344z m-227.555328 0c-31.419392 0-56.889344 25.470976-56.889344 56.889344s25.469952 56.889344 56.889344 56.889344c31.418368 0 56.88832-25.470976 56.88832-56.889344s-25.469952-56.889344-56.88832-56.889344z m455.110656 0c-31.418368 0-56.88832 25.470976-56.88832 56.889344s25.469952 56.889344 56.88832 56.889344c31.419392 0 56.889344-25.470976 56.889344-56.889344s-25.469952-56.889344-56.889344-56.889344z',
              }),
            );
          }, 'MoreFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M910.222336 284.444672H113.77664V170.667008c0-31.419392 25.469952-56.889344 56.889344-56.889344h682.665984c31.419392 0 56.889344 25.469952 56.889344 56.889344v113.77664z m0 56.88832v512c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-512H910.22336zM284.444672 170.667008l57.2416 113.77664h56.88832l-57.2416-113.77664h-56.88832z m170.665984 0l57.2416 113.77664H569.2416L512 170.668032h-56.889344z m170.667008 0l57.2416 113.77664h56.88832l-57.2416-113.77664h-56.88832z m6.00576 452.108288a28.444672 28.444672 0 0 0 12.721152-12.721152c7.02464-14.051328 1.330176-31.136768-12.721152-38.162432L439.38816 475.69408a28.444672 28.444672 0 0 0-12.720128-3.003392c-15.710208 0-28.444672 12.735488-28.444672 28.444672v192.396288c0 4.415488 1.028096 8.77056 3.002368 12.720128 7.025664 14.051328 24.112128 19.746816 38.162432 12.721152l192.396288-96.197632z',
              }),
            );
          }, 'VideoFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M804.45952 198.769664c26.104832 0 48.859136 17.7664 55.190528 43.091968l35.75808 143.030272c9.622528 20.4032 14.702592 42.79296 14.702592 65.815552 0 48.293888-22.170624 91.409408-56.889344 119.724032V895.66208c0 23.564288-19.10272 42.667008-42.667008 42.667008H213.219328c-23.563264 0-42.665984-19.10272-42.665984-42.667008V570.431488C135.8336 542.117888 113.664 499.001344 113.664 450.707456c0-23.021568 5.07904-45.412352 14.702592-65.815552l35.75808-143.030272c6.331392-25.325568 29.085696-43.091968 55.190528-43.091968h585.14432z m-170.667008 346.7264c-28.254208 36.284416-72.353792 59.624448-121.905152 59.624448s-93.650944-23.340032-121.905152-59.625472c-28.254208 36.28544-72.353792 59.625472-121.905152 59.625472-14.063616 0-27.687936-1.880064-40.635392-5.402624V881.43872H796.33408V599.717888c-12.947456 3.52256-26.5728 5.402624-40.635392 5.402624-49.55136 0-93.650944-23.340032-121.905152-59.625472zM227.441664 84.992H796.33408c15.70816 0 28.443648 12.735488 28.443648 28.444672s-12.734464 28.444672-28.443648 28.444672H227.44064c-15.70816 0-28.443648-12.735488-28.443648-28.444672S211.73248 84.992 227.44064 84.992z',
              }),
            );
          }, 'ShopFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M795.947008 625.6896c62.670848 0 113.588224 51.208192 113.588224 114.097152l-0.058368 2.696192c-0.017408 0.456704-0.04096 0.857088-0.08192 1.527808l0.02048 1.174528c0 11.19232-2.461696 22.526976-6.97344 33.97632l-0.29696 0.800768c-1.707008 4.54656-3.935232 9.314304-9.23648 18.184192l1.34656-1.808384c0.09728-0.135168 0.159744-0.22528 0.20992-0.304128l1.09568-1.8944-0.669696 1.21344 0.078848-0.11776c0.023552-0.0256-0.095232 0.202752-0.533504 1.041408l-0.591872 1.1008c-1.176576 2.167808-2.29888 4.098048-3.078144 5.174272a200.914944 200.914944 0 0 1-6.76864 10.473472c-13.25568 19.223552-31.315968 39.012352-53.075968 59.191296-14.54592 13.489152-29.970432 26.43968-45.6192 38.647808l-3.342336 2.59072c-9.946112 7.653376-26.584064 19.859456-21.825536 16.256a42.963968 42.963968 0 0 1-25.81504 8.621056c-8.99072 0-17.759232-2.761728-25.275392-8.198144l-0.495616-0.362496 0.8192 0.626688c1.077248 0.873472-15.014912-10.933248-23.856128-17.7664-16.347136-12.634112-32.466944-26.083328-47.63136-40.137728-22.432768-20.789248-40.921088-41.188352-54.268928-61.034496-6.093824-9.060352-11.082752-17.968128-14.922752-26.896384l-0.390144-0.956416-0.04096-0.1024c-5.515264-13.180928-8.430592-25.993216-8.430592-38.344704a60.205056 60.205056 0 0 1-0.227328-5.372928c0-62.910464 50.900992-114.097152 113.589248-114.097152 21.951488 0 43.214848 6.504448 61.37344 18.3296 18.13504-11.826176 39.407616-18.3296 61.384704-18.3296z m-5.41696-429.213696c25.57952 0 47.875072 17.408 54.078464 42.222592l35.037184 140.146688c9.428992 19.991552 14.405632 41.930752 14.405632 64.488448 0 83.560448-67.738624 151.299072-151.299072 151.299072-48.551936 0-91.762688-22.868992-119.447552-58.422272-27.684864 35.55328-70.894592 58.422272-119.446528 58.422272s-91.762688-22.868992-119.447552-58.422272c-27.684864 35.55328-70.895616 58.422272-119.446528 58.422272-13.779968 0-27.129856-1.842176-39.816192-5.29408v276.040704h306.581504c15.391744 0 27.870208 12.478464 27.870208 27.871232s-12.478464 27.871232-27.870208 27.871232H211.212288c-23.089152 0-41.805824-18.717696-41.805824-41.806848V560.644096C135.387136 532.89984 113.664 490.653696 113.664 443.333632c0-22.55872 4.97664-44.496896 14.406656-64.488448l35.03616-140.146688c6.204416-24.814592 28.499968-42.222592 54.07744-42.222592h573.346816zM782.568448 84.992c15.392768 0 27.871232 12.478464 27.871232 27.871232s-12.478464 27.871232-27.871232 27.871232H225.147904c-15.392768 0-27.871232-12.478464-27.871232-27.871232S209.75616 84.992 225.147904 84.992h557.41952z',
              }),
            );
          }, 'ShopCollectFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M591.135744 143.848448c0-23.177216 13.52704-29.034496 30.53056-12.76928L953.89696 449.153024c16.856064 16.160768 16.98304 42.308608 0.316416 58.405888L621.349888 828.832768c-16.687104 16.09728-30.214144 10.155008-30.214144-12.853248V647.947264C103.977984 647.94624 57.344 902.51264 57.344 902.51264s-7.51616-514.000896 533.791744-590.61248V143.849472z',
              }),
            );
          }, 'ShareFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 113.777664c251.35104 0 455.110656 178.290688 455.110656 398.222336 0 219.931648-203.759616 398.222336-455.110656 398.222336-92.73344 0-178.988032-24.2688-250.923008-65.942528l-145.903616 47.11936a28.444672 28.444672 0 0 1-19.526656-0.74752c-14.53568-5.955584-21.491712-22.56896-15.536128-37.10464l50.74432-123.845632C84.082688 667.132928 56.889344 592.345088 56.889344 512c0-219.931648 203.759616-398.222336 455.110656-398.222336z m0 341.332992c-31.418368 0-56.889344 25.470976-56.889344 56.889344s25.470976 56.889344 56.889344 56.889344 56.889344-25.470976 56.889344-56.889344-25.470976-56.889344-56.889344-56.889344z m-227.555328 0c-31.419392 0-56.889344 25.470976-56.889344 56.889344s25.469952 56.889344 56.889344 56.889344c31.418368 0 56.88832-25.470976 56.88832-56.889344s-25.469952-56.889344-56.88832-56.889344z m455.110656 0c-31.418368 0-56.88832 25.470976-56.88832 56.889344s25.469952 56.889344 56.88832 56.889344c31.419392 0 56.889344-25.470976 56.889344-56.889344s-25.469952-56.889344-56.889344-56.889344z',
              }),
            );
          }, 'ChatFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M369.777664 796.444672l-142.222336 113.77664v-113.77664h-56.88832c-31.419392 0-56.889344-25.469952-56.889344-56.889344V170.667008c0-31.419392 25.469952-56.889344 56.889344-56.889344h682.665984c31.419392 0 56.889344 25.469952 56.889344 56.889344v568.88832c0 31.419392-25.469952 56.889344-56.889344 56.889344H369.777664zM676.49536 455.110656c-0.106496-15.618048-12.8-28.246016-28.443648-28.246016-15.710208 0-28.444672 12.734464-28.444672 28.444672 0 0.620544 0.02048 1.236992 0.059392 1.84832-1.06496 62.111744-50.450432 111.731712-110.712832 111.731712-60.92288 0-110.73024-50.7136-110.731264-113.778688-0.11264-15.612928-12.804096-28.234752-28.443648-28.234752-15.709184 0-28.444672 12.735488-28.444672 28.444672v0.14336c0.187392 94.094336 75.1616 170.313728 167.61856 170.313728 92.57472 0 167.619584-76.41088 167.619584-170.667008h-0.0768zM369.77664 284.444672c-15.709184 0-28.444672 12.734464-28.444672 28.444672 0 15.70816 12.735488 28.443648 28.444672 28.443648s28.444672-12.734464 28.444672-28.443648c0-15.710208-12.735488-28.444672-28.444672-28.444672z m284.444672 0c-15.709184 0-28.444672 12.734464-28.444672 28.444672 0 15.70816 12.735488 28.443648 28.444672 28.443648s28.444672-12.734464 28.444672-28.443648c0-15.710208-12.735488-28.444672-28.444672-28.444672z',
              }),
            );
          }, 'SmileCommentFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M967.110656 284.444672H56.889344v-56.889344c0-31.418368 25.469952-56.88832 56.88832-56.88832H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.88832v56.889344z m0 56.88832v455.11168c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832V341.332992h910.221312z m-721.52064 97.622016l86.697984 243.712h48.128l86.699008-243.712h-43.350016l-66.900992 198.656h-1.024l-66.900992-198.656h-43.350016z m247.124992 0v243.712h39.936v-243.712h-39.936z m87.721984 0v243.712h39.936v-93.526016h60.416c59.392 0 89.088-25.257984 89.088-75.433984 0-49.835008-29.696-74.752-88.404992-74.752h-101.035008z m39.936 34.132992H678.4c17.408 0 30.379008 3.072 38.571008 9.556992 8.192 6.144 12.628992 16.384 12.628992 31.062016 0 14.676992-4.096 25.257984-12.288 31.744-8.192 6.144-21.163008 9.556992-38.912 9.556992h-58.027008v-81.92z',
              }),
            );
          }, 'VipCardFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M682.667008 779.377664v166.048768c0 15.709184-12.735488 28.444672-28.444672 28.444672-3.812352 0-7.584768-0.765952-11.09504-2.2528L534.19008 925.47072a56.889344 56.889344 0 0 0-44.378112 0l-108.93824 46.14656c-14.465024 6.126592-31.159296-0.631808-37.286912-15.096832a28.444672 28.444672 0 0 1-2.2528-11.09504V779.377664c51.72736 24.572928 109.591552 38.322176 170.667008 38.322176 61.075456 0 118.939648-13.749248 170.667008-38.322176zM512 85.332992c188.51328 0 341.332992 152.820736 341.332992 341.334016S700.51328 768 512 768c-188.51328 0-341.332992-152.819712-341.332992-341.332992 0-188.51328 152.819712-341.334016 341.332992-341.334016z m0 227.556352c-62.83776 0-113.777664 50.939904-113.777664 113.77664 0 62.838784 50.939904 113.778688 113.777664 113.778688s113.777664-50.939904 113.777664-113.777664S574.83776 312.889344 512 312.889344z',
              }),
            );
          }, 'AwardFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M785.03936 170.667008c15.98464 0 30.795776 7.569408 39.021568 19.946496l136.521728 205.410304c9.9328 14.881792 8.420352 33.80224-3.780608 47.244288L547.245056 895.17056c-8.653824 9.542656-21.602304 15.069184-35.265536 15.051776-13.662208-0.013312-26.59328-5.572608-35.2256-15.136768L67.196928 443.184128c-12.20096-13.44-13.713408-32.359424-3.776512-47.245312l136.517632-205.410304c8.249344-12.341248 23.056384-19.878912 39.022592-19.861504h546.07872z m-73.928704 170.665984H312.889344c-15.710208 0-28.444672 12.735488-28.444672 28.444672s12.734464 28.444672 28.444672 28.444672h398.221312c15.710208 0 28.444672-12.735488 28.444672-28.444672s-12.734464-28.444672-28.444672-28.444672z',
              }),
            );
          }, 'DiamondFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M525.835264 139.611136c18.944-11.377664 43.065344 2.275328 43.065344 24.404992V859.99616c0 22.129664-24.121344 35.782656-43.065344 24.404992L297.938944 747.639808c-8.818688-5.291008-18.944-8.07936-29.298688-8.07936H113.788928c-31.459328 0-56.88832-25.428992-56.88832-56.88832V341.34016c0-31.459328 25.428992-56.889344 56.88832-56.889344h154.851328c10.354688 0 20.48-2.787328 29.298688-8.134656z m259.441664 30.446592c11.094016-11.092992 29.12768-11.092992 40.220672 0 91.307008 91.363328 141.596672 212.822016 141.596672 341.95968 0 129.08032-50.289664 250.537984-141.596672 341.902336a28.3904 28.3904 0 0 1-20.139008 8.361984c-7.22432 0-14.505984-2.787328-20.08064-8.361984-11.094016-11.094016-11.094016-29.07136 0-40.220672 80.553984-80.611328 124.928-187.734016 124.928-301.681664 0-113.948672-44.374016-221.12768-124.928-301.739008-11.094016-11.092992-11.094016-29.126656 0-40.220672z m-120.718336 120.71936c11.094016-11.094016 29.12768-11.094016 40.220672 0 59.107328 59.049984 91.648 137.613312 91.648 221.24032 0 83.56864-32.540672 162.132992-91.648 221.184a28.3904 28.3904 0 0 1-20.139008 8.361984c-7.22432 0-14.505984-2.787328-20.08064-8.361984-11.094016-11.094016-11.094016-29.07136 0-40.220672 48.411648-48.299008 74.979328-112.58368 74.979328-180.963328 0-68.380672-26.56768-132.665344-74.980352-181.020672-11.092992-11.092992-11.092992-29.12768 0-40.220672z',
              }),
            );
          }, 'VolumeFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M540.444672 341.332992v86.411264c151.99232 11.561984 278.300672 115.011584 323.497984 254.922752h46.27968c31.418368 0 56.88832 25.469952 56.88832 56.88832v113.777664c0 31.419392-25.469952 56.889344-56.88832 56.889344H796.444672c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-113.77664c0-31.419392 25.469952-56.889344 56.889344-56.889344h7.114752c-42.225664-108.12416-142.861312-186.998784-263.114752-197.8368v197.8368h28.444672c31.418368 0 56.88832 25.469952 56.88832 56.88832v113.777664c0 31.419392-25.469952 56.889344-56.88832 56.889344H455.110656c-31.418368 0-56.88832-25.469952-56.88832-56.889344v-113.77664c0-31.419392 25.469952-56.889344 56.88832-56.889344h28.444672v-197.8368c-120.25344 10.838016-220.889088 89.71264-263.114752 197.8368h7.114752c31.419392 0 56.889344 25.469952 56.889344 56.88832v113.777664c0 31.419392-25.469952 56.889344-56.889344 56.889344h-113.77664c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-113.77664c0-31.419392 25.469952-56.889344 56.88832-56.889344h46.27968c45.197312-139.911168 171.505664-243.360768 323.497984-254.922752v-86.411264h-28.444672c-31.418368 0-56.88832-25.469952-56.88832-56.88832V170.667008c0-31.419392 25.469952-56.889344 56.88832-56.889344h113.778688c31.418368 0 56.88832 25.469952 56.88832 56.889344v113.77664c0 31.419392-25.469952 56.889344-56.88832 56.889344h-28.444672z',
              }),
            );
          }, 'ClusterFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M548.727808 118.148096l358.22592 307.050496c11.930624 10.226688 13.312 28.189696 3.085312 40.12032-10.226688 11.931648-28.188672 13.313024-40.12032 3.086336l-16.807936-14.436352 0.022528 409.69728c0 31.428608-25.524224 56.909824-57.009152 56.909824H625.503232c-31.484928 0-57.009152-25.481216-57.009152-56.909824V692.94592H454.786048v170.720256l-0.534528 0.003072c0 31.428608-25.524224 56.906752-57.009152 56.906752H227.262464c-31.485952 0-57.009152-25.481216-57.009152-56.909824l-0.021504-409.69728-16.764928 14.436352c-11.930624 10.226688-29.893632 8.845312-40.12032-3.086336-10.226688-11.930624-8.845312-29.893632 3.086336-40.12032l358.22592-307.050496c21.310464-18.267136 52.757504-18.267136 74.068992 0z',
              }),
            );
          }, 'WapHomeFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M312.916992 284.422144c-47.104 0-85.332992 38.228992-85.332992 85.332992s38.228992 85.332992 85.332992 85.332992 85.334016-38.228992 85.334016-85.332992-38.230016-85.332992-85.334016-85.332992m356.665344 51.10784c-22.868992-26.73664-64.340992-26.452992-86.868992 0.626688L341.332992 625.77664l-73.499648-73.556992c-22.244352-22.243328-58.25536-22.243328-80.498688 0l-73.556992 73.556992V227.555328H910.22336v388.721664l-240.64-280.745984z m240.64-164.864H113.77664c-31.403008 0-56.88832 25.430016-56.88832 56.889344v568.88832c0 31.403008 25.485312 56.889344 56.88832 56.889344H910.22336c31.459328 0 56.88832-25.486336 56.88832-56.88832V227.555328c0-31.459328-25.428992-56.88832-56.88832-56.88832z',
              }),
            );
          }, 'PhotoFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M597.584896 547.371008c33.709056-7.035904 60.38016-17.668096 74.446848-30.9248 42.267648-39.8336 42.267648-106.3424 0.60416-148.004864-20.072448-20.073472-46.845952-31.17056-75.23328-31.17056-20.476928 0-40.107008 5.77024-56.957952 16.4864v-183.0912h-56.889344V353.23904c-16.6656-10.38336-35.989504-15.96928-56.134656-15.96928-28.387328 0-55.159808 11.098112-75.23328 31.17056-41.662464 41.663488-41.662464 108.173312 0.60416 148.005888 13.986816 13.179904 40.43264 23.76704 73.867264 30.802944l-73.665536 36.83328c-14.050304 7.02464-19.745792 24.111104-12.720128 38.162432 7.02464 14.050304 24.111104 19.745792 38.161408 12.720128l105.120768-52.559872v270.927872h56.889344V582.40512l105.120768 52.559872c14.050304 7.025664 31.136768 1.3312 38.161408-12.720128 7.025664-14.051328 1.3312-31.136768-12.720128-38.162432l-73.421824-36.7104zM113.77664 170.667008H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.88832v568.889344c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832V227.555328c0-31.418368 25.469952-56.88832 56.88832-56.88832z m448.61952 238.000128c9.41056-9.41056 21.706752-14.508032 35.00544-14.508032 13.294592 0 25.598976 5.09952 35.007488 14.508032 19.244032 19.245056 19.244032 48.812032 0.60416 66.378752-9.275392 8.741888-45.272064 18.622464-90.056704 22.8608 3.59424-44.246016 11.69408-81.560576 19.439616-89.239552z m-99.971072 0c7.745536 7.68 15.845376 44.99456 19.44064 89.239552-44.78464-4.238336-80.781312-14.118912-90.057728-22.8608-18.639872-17.56672-18.639872-47.13472 0.60416-66.378752 9.408512-9.408512 21.712896-14.508032 35.007488-14.508032 13.298688 0 25.593856 5.097472 35.00544 14.508032z',
              }),
            );
          }, 'GiftCardFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M796.444672 426.667008c0 15.700992-12.74368 28.443648-28.444672 28.443648-15.700992 0-28.444672-12.742656-28.444672-28.443648v-102.001664L609.108992 455.110656c-11.092992 11.094016-29.126656 11.094016-40.219648 0-11.094016-11.092992-11.094016-29.126656 0-40.219648l130.445312-130.44736h-102.00064c-15.702016 0-28.444672-12.742656-28.444672-28.443648s12.742656-28.444672 28.443648-28.444672H768c15.700992 0 28.444672 12.74368 28.444672 28.444672v170.667008zM455.110656 609.108992l-130.445312 130.44736h102.00064c15.702016 0 28.444672 12.742656 28.444672 28.443648S442.368 796.444672 426.667008 796.444672H256c-15.700992 0-28.444672-12.74368-28.444672-28.444672V597.332992c0-15.700992 12.74368-28.443648 28.444672-28.443648 15.700992 0 28.444672 12.742656 28.444672 28.443648v102.001664l130.446336-130.445312c11.092992-11.094016 29.126656-11.094016 40.219648 0 11.094016 11.092992 11.094016 29.126656 0 40.219648z m398.22336-495.331328H170.665984c-31.460352 0-56.889344 25.428992-56.889344 56.889344v682.665984c0 31.460352 25.428992 56.889344 56.889344 56.889344h682.665984c31.460352 0 56.889344-25.428992 56.889344-56.889344V170.667008c0-31.460352-25.428992-56.889344-56.889344-56.889344z',
              }),
            );
          }, 'ExpandFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512.006144 284.444672c188.47232 0 341.332992 152.803328 341.332992 341.332992 0 188.473344-152.860672 341.332992-341.332992 341.332992-188.530688 0-341.334016-152.859648-341.334016-341.332992 0-188.529664 152.803328-341.332992 341.334016-341.332992z m40.219648 220.672c-22.243328-22.243328-58.254336-22.243328-80.44032 0l-80.441344 80.44032c-22.243328 22.244352-22.243328 58.198016 0 80.441344l80.441344 80.44032c22.185984 22.244352 58.196992 22.244352 80.44032 0l80.441344-80.44032c22.243328-22.243328 22.243328-58.196992 0-80.441344zM682.667008 56.89344c31.459328 0 56.88832 25.428992 56.88832 56.889344v113.77664l-44.713984 44.715008c-38.684672-20.08064-81.180672-33.734656-125.952-40.219648v-118.272H455.110656v118.272c-44.771328 6.484992-87.267328 20.137984-125.952 40.219648l-44.713984-44.713984V113.783808c0-31.460352 25.428992-56.889344 56.88832-56.889344z',
              }),
            );
          }, 'MedalFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M341.220352 910.11072V398.246912c17.26976-6.244352 29.75232-11.569152 37.44768-15.9744 21.505024-12.312576 39.745536-29.079552 54.720512-50.300928 22.723584-32.201728 26.955776-47.039488 51.61984-137.167872 1.619968-5.922816 4.880384-14.014464 9.7792-24.274944 22.669312-37.996544 54.940672-56.951808 96.813056-56.864768 40.452096 0 72.810496 18.95424 97.0752 56.864768 6.047744 10.46528 10.329088 22.153216 12.843008 35.06688 2.514944 12.91264 2.514944 27.74016 0 44.48256l-44.780544 156.270592c-0.792576 2.480128-0.792576 4.291584 0 5.436416 0.854016 1.232896 2.100224 1.849344 3.739648 1.849344h136.04352l-0.150528 0.316416h17.739776c52.799488 0 96 41.6 96 94.399488 0 8.000512-1.600512 16-3.2 24.000512l-47.879168 305.759232c-9.6 41.6-48 72.000512-92.8 72.000512h-425.0112z m-56.889344 0H170.553344c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-398.22336c0-31.418368 25.469952-56.88832 56.889344-56.88832h113.777664V910.11072z',
              }),
            );
          }, 'GoodJobFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M146.162688 662.038528l183.54688-87.602176a56.889344 56.889344 0 0 1 24.50432-5.547008h315.573248c8.47872 0 16.850944 1.8944 24.50432 5.547008l183.545856 87.602176a56.889344 56.889344 0 0 1 32.385024 51.341312v196.842496c0 31.418368-25.469952 56.88832-56.889344 56.88832H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.88832v-196.84352a56.889344 56.889344 0 0 1 32.385024-51.340288zM568.889344 768c0 15.709184 12.734464 28.444672 28.443648 28.444672h113.777664c15.710208 0 28.444672-12.735488 28.444672-28.444672s-12.734464-28.444672-28.444672-28.444672h-113.77664c-15.710208 0-28.444672 12.735488-28.444672 28.444672zM512 512c-125.67552 0-227.555328-101.879808-227.555328-227.555328S386.32448 56.889344 512 56.889344s227.555328 101.879808 227.555328 227.555328S637.67552 512 512 512z',
              }),
            );
          }, 'ManagerFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M653.960192 341.332992H369.516544c-15.702016 0-28.444672-12.742656-28.444672-28.443648 0-15.702016 12.742656-28.444672 28.444672-28.444672h284.443648c15.702016 0 28.444672 12.742656 28.444672 28.444672 0 15.700992-12.742656 28.443648-28.444672 28.443648m0 170.667008H369.516544c-15.702016 0-28.444672-12.742656-28.444672-28.444672 0-15.700992 12.742656-28.444672 28.444672-28.444672h284.443648c15.702016 0 28.444672 12.74368 28.444672 28.444672 0 15.702016-12.742656 28.444672-28.444672 28.444672m142.22336-455.110656H227.293184c-31.460352 0-56.889344 25.428992-56.889344 56.88832v824.832c0 21.163008 22.300672 34.929664 41.187328 25.428992l274.716672-137.32864c15.985664-7.964672 34.873344-7.964672 50.859008 0l274.716672 137.32864c18.886656 9.500672 41.187328-4.265984 41.187328-25.428992v-824.832c0-31.459328-25.430016-56.88832-56.889344-56.88832',
              }),
            );
          }, 'LabelFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M341.332992 398.222336c0 94.256128 76.41088 170.667008 170.667008 170.667008s170.667008-76.41088 170.667008-170.667008c0-15.709184-12.735488-28.444672-28.444672-28.444672s-28.444672 12.735488-28.444672 28.444672C625.777664 461.060096 574.83776 512 512 512s-113.777664-50.939904-113.777664-113.777664c0-15.709184-12.735488-28.444672-28.444672-28.444672s-28.444672 12.735488-28.444672 28.444672zM227.556352 56.889344h568.88832c31.418368 0 56.88832 25.469952 56.88832 56.88832v794.779648c0 31.419392-25.469952 56.889344-56.88832 56.889344a56.889344 56.889344 0 0 1-35.934208-12.785664l-212.48-173.121536c-20.918272-17.043456-50.930688-17.047552-71.85408-0.01024L263.4752 952.71936c-24.364032 19.837952-60.196864 16.16896-80.03584-8.194048a56.889344 56.889344 0 0 1-12.773376-35.919872V113.77664c0-31.418368 25.469952-56.88832 56.88832-56.88832z',
              }),
            );
          }, 'BookmarkFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512.505856 454.90176l0.218112 0.218112a28.96896 28.96896 0 0 0-0.43008-0.007168l0.211968-0.210944z m0-1.010688l-39.72096-39.72096c-11.109376-11.108352-29.118464-11.108352-40.226816 0-11.108352 11.108352-11.108352 29.118464 0 40.225792l29.1584 29.159424h-20.82816c-15.70816 0-28.443648 12.735488-28.443648 28.444672s12.734464 28.444672 28.444672 28.444672h42.665984v28.444672h-42.665984c-15.710208 0-28.444672 12.734464-28.444672 28.443648 0 15.710208 12.734464 28.444672 28.444672 28.444672h42.665984v28.444672c0 15.709184 12.735488 28.444672 28.444672 28.444672s28.444672-12.735488 28.444672-28.444672V625.77664h42.665984c15.710208 0 28.444672-12.734464 28.444672-28.444672 0-15.70816-12.734464-28.443648-28.444672-28.443648h-42.665984v-28.444672h42.665984c15.710208 0 28.444672-12.735488 28.444672-28.444672s-12.734464-28.444672-28.444672-28.444672h-19.816448l29.1584-29.159424c11.108352-11.107328 11.108352-29.11744 0-40.225792-11.107328-11.108352-29.11744-11.108352-40.225792 0l-39.72096 39.72096z m27.9296 28.940288l0.723968 0.723968h-0.714752c0-0.241664-0.003072-0.483328-0.009216-0.723968zM341.332992 113.777664v56.889344c0 31.418368 25.469952 56.88832 56.889344 56.88832H625.77664c31.419392 0 56.889344-25.469952 56.889344-56.88832V113.77664h113.77664c31.419392 0 56.889344 25.469952 56.889344 56.889344v739.555328c0 31.418368-25.469952 56.88832-56.88832 56.88832H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.88832V170.667008c0-31.419392 25.469952-56.889344 56.88832-56.889344h113.777664zM426.667008 113.777664h170.665984c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H426.667008c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672z',
              }),
            );
          }, 'BillFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M371.86048 173.672448l99.912704-99.913728c22.216704-22.216704 58.236928-22.216704 80.453632 0l99.912704 99.913728h141.299712c31.418368 0 56.88832 25.469952 56.88832 56.88832v141.299712l99.913728 99.912704c22.216704 22.216704 22.216704 58.236928 0 80.453632l-99.913728 99.912704v141.299712c0 31.418368-25.469952 56.88832-56.88832 56.88832H652.13952l-99.912704 99.913728c-22.216704 22.216704-58.236928 22.216704-80.453632 0l-99.912704-99.913728H230.560768c-31.418368 0-56.88832-25.469952-56.88832-56.88832V652.13952L73.75872 552.226816c-22.216704-22.216704-22.216704-58.236928 0-80.453632l99.913728-99.912704V230.560768c0-31.418368 25.469952-56.88832 56.88832-56.88832h141.299712zM256 429.48096v165.03808h50.08384V527.75936h54.726656v66.758656h50.304v-165.03808h-50.304v57.752576H306.08384v-57.752576H256z m182.090752 82.63168c0 19.288064 3.72224 35.34848 11.16672 48.183296 7.44448 12.833792 17.155072 22.214656 29.1328 28.143616 11.976704 5.92896 27.10528 8.89344 45.38368 8.89344 17.984512 0 33.002496-3.433472 45.053952-10.300416 12.050432-6.866944 21.26336-16.474112 27.639808-28.819456 6.375424-12.346368 9.563136-28.163072 9.563136-47.45216 0-26.56768-7.297024-47.224832-21.891072-61.97248-14.594048-14.747648-35.3792-22.121472-62.355456-22.121472-26.312704 0-46.839808 7.504896-61.581312 22.514688-14.741504 15.010816-22.112256 35.987456-22.112256 62.930944z m50.08384 0.22528c0-16.812032 3.058688-28.857344 9.176064-36.13696 6.117376-7.28064 14.225408-10.919936 24.323072-10.919936 10.540032 0 18.88768 3.584 25.04192 10.750976 6.15424 7.168 9.23136 18.518016 9.23136 34.054144 0 18.46272-2.948096 31.258624-8.844288 38.38976-5.896192 7.129088-14.225408 10.693632-24.9856 10.693632-10.467328 0-18.740224-3.639296-24.82176-10.919936-6.080512-7.28064-9.120768-19.2512-9.120768-35.91168z m127.58528-82.85696v40.753152h51.078144v124.284928h50.08384V470.234112H768v-40.753152H615.759872z',
              }),
            );
          }, 'HotFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M739.555328 0c31.419392 0 56.889344 25.469952 56.889344 56.889344v910.221312c0 31.419392-25.469952 56.889344-56.889344 56.889344H284.444672c-31.419392 0-56.889344-25.469952-56.889344-56.889344V56.889344C227.555328 25.469952 253.02528 0 284.444672 0h455.110656z m-186.28608 702.009344h-34.44736v55.636992c-1.024 9.556992-3.069952 19.115008-5.798912 28.331008h-56.274944l15.00672-22.870016c-21.1456-11.604992-44.338176-21.844992-69.576704-30.036992l-16.71168 24.916992c20.804608 6.827008 41.268224 16.043008 61.390848 27.990016h-77.761536v33.792h124.145664l-7.161856 7.168c-19.781632 16.384-57.638912 30.036992-114.254848 41.300992l19.098624 30.379008c55.933952-11.606016 96.1792-27.990016 120.735744-49.152 40.245248 12.628992 79.46752 29.353984 118.006784 50.516992l20.122624-31.060992c-35.470336-16.726016-74.692608-31.403008-117.3248-43.691008 1.024-1.707008 2.045952-3.412992 3.40992-5.460992h121.07776v-33.792h-107.776c2.046976-8.875008 3.410944-18.432 4.092928-28.331008v-55.636992z m-22.851584-118.784h-34.788352v23.209984h-97.543168v32.086016h97.543168v22.868992H372.847616v32.427008h240.78848c-5.115904 18.432-10.913792 34.816-17.73568 48.809984l33.424384 9.558016c8.526848-22.528 15.347712-45.398016 20.463616-68.608v-22.187008H530.417664v-22.868992h95.496192v-32.086016h-95.496192v-23.209984zM430.82752 697.571328l-16.71168 24.576c23.873536 6.827008 47.066112 16.384 69.57568 28.331008l17.73568-26.964992c-21.486592-10.24-45.02016-19.115008-70.59968-25.942016z m-36.15232-333.254656c-11.595776 23.552-25.57952 43.689984-41.268224 60.416l29.331456 21.504c15.68768-18.774016 29.671424-41.302016 41.609216-67.584z m221.006848-5.803008l-28.98944 18.091008c19.439616 25.257984 34.787328 48.128 46.043136 68.608l29.671424-20.822016c-10.913792-18.772992-26.261504-40.617984-46.72512-65.876992z m-135.400448 15.700992l-33.42336 6.827008c6.137856 18.432 11.594752 39.595008 15.68768 63.828992l35.811328-8.532992c-5.456896-22.187008-11.25376-43.008-18.075648-62.123008z m70.59968-4.777984l-33.42336 7.168c9.5488 19.456 17.39264 41.984 23.53152 67.584l35.47136-8.534016c-7.503872-23.892992-16.03072-45.737984-25.57952-66.217984z m6.820864-242.006016h-34.788352v40.96h-34.788352v34.816h34.788352c-0.681984 14.678016-2.045952 28.672-4.43392 41.643008-6.479872-4.096-13.30176-8.192-20.1216-12.288l-18.75968 27.988992c9.550848 5.462016 19.099648 11.606016 28.649472 18.774016-9.890816 23.552-24.55552 42.665984-44.337152 57.344l26.261504 23.552c19.781632-15.36 35.470336-34.816 46.72512-58.368 10.913792 9.216 21.827584 19.796992 32.741376 31.401984l20.122624-30.72c-12.959744-12.969984-26.261504-24.576-40.245248-35.497984 4.774912-19.115008 7.503872-40.619008 8.185856-63.830016h34.788352v34.816c0 52.566016 7.502848 87.382016 22.1696 103.766016 8.184832 9.556992 18.757632 14.676992 31.717376 15.017984 6.139904 0 10.913792-3.072 15.00672-8.873984 5.797888-8.875008 9.549824-28.331008 11.254784-58.368l-26.943488-13.312c0 10.921984-0.681984 21.161984-1.70496 30.377984-1.363968 9.558016-3.069952 14.678016-4.774912 14.678016-1.363968 0-3.069952-3.072-5.115904-9.216-4.774912-13.654016-6.820864-38.230016-6.820864-74.070016v-69.632H557.70112v-40.96z m-116.642816 0.342016H405.248v38.912h-44.338176v34.816h44.3392v49.492992a665.162752 665.162752 0 0 1-53.20704 9.216l8.526848 33.108992c15.00672-2.729984 29.672448-5.801984 44.679168-8.873984v29.012992c0 7.851008-3.40992 11.947008-9.549824 11.947008-8.86784 0-18.41664-1.024-28.307456-2.390016l8.184832 34.134016h32.7424c21.827584 0 32.741376-11.606016 32.741376-34.816v-46.422016c11.595776-3.072 23.192576-6.144 34.788352-9.556992v-34.132992l-34.788352 10.24v-40.96h37.516288v-34.816h-37.516288v-38.912z',
              }),
            );
          }, 'HotSaleFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M853.332992 0v647.110656c0 82.475008-76.409856 149.334016-170.665984 149.334016H341.332992c-94.256128 0-170.665984-66.859008-170.665984-149.334016V0h682.665984zM313.771008 312.889344h-29.32736v170.665984h34.832384v-100.175872h0.800768l61.555712 100.175872h29.026304V312.889344h-34.83136v99.229696h-0.800768l-61.25568-99.229696z m217.696256 0h-98.989056v170.665984h98.99008v-35.008512h-62.257152v-34.771968h58.55232v-31.93344h-58.55232v-33.943552h62.256128v-35.008512z m51.847168 0h-37.93408l37.7344 170.665984h34.63168l24.321024-106.56256h0.800768l24.322048 106.56256h34.63168l37.7344-170.665984h-37.935104l-19.51744 115.314688h-0.800768l-24.122368-115.314688h-29.425664l-24.122368 115.314688h-0.800768l-19.51744-115.314688z',
              }),
            );
          }, 'NewFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M739.555328 227.555328C896.65024 227.555328 1024 354.906112 1024 512c0 157.093888-127.34976 284.444672-284.444672 284.444672H0V227.555328h739.555328zM297.764864 424.2688a391.79776 391.79776 0 0 1-13.328384 41.257984H254.3616c-4.784128-15.91808-9.56928-29.56288-14.6944-41.25696l-31.44192 11.369472c5.46816 9.096192 10.252288 19.167232 14.353408 29.887488H187.71968v30.862336h64.933888v26.313728H193.18784v30.861312h59.465728v76.992512c0 6.172672-4.10112 9.4208-11.620352 9.4208-4.10112 0-8.885248-0.973824-14.011392-2.27328l7.860224 31.186944h17.77152c23.580672 0 35.54304-10.07104 35.54304-30.212096v-85.11488h56.046592v-30.861312h-56.047616v-26.313728h61.857792v-30.862336h-33.149952c4.442112-9.4208 8.543232-19.49184 12.644352-30.536704z m178.738176-55.226368c-33.491968 12.345344-71.08608 18.8416-113.463296 19.49184v140.990464c-1.36704 47.755264-11.96032 85.11488-31.09888 112.0768l25.63072 25.665536c24.948736-34.436096 38.27712-80.24064 39.986176-137.742336v-30.862336h36.909056v169.253888h35.201024V498.6624h31.44192v-32.160768H397.55776v-50.354176c35.201024-1.948672 67.325952-7.471104 96.374784-16.56832z m192.408576 145.539072H540.069888v148.13696h34.859008v-15.26784h59.465728v15.26784h34.516992V514.581504z m159.60064 0H695.56736v148.13696h34.859008v-15.26784h62.541824v15.26784h35.54304V514.581504zM212.3264 566.234112c-5.810176 26.313728-16.062464 51.328-30.758912 74.718208l29.732864 17.8688c14.354432-24.36608 25.290752-52.953088 33.150976-86.089728z m110.728192-1.948672l-29.390848 7.471104c7.518208 19.167232 14.012416 38.98368 19.13856 59.12576l30.07488-11.045888c-4.785152-16.892928-11.620352-35.40992-19.822592-55.552z m311.340032-17.867776v69.520384h-59.465728v-69.520384h59.465728z m158.574592 0v69.520384h-62.541824v-69.520384h62.541824zM782.71488 377.163776H586.206208v115.976192h196.509696V377.163776z m-35.884032 31.83616v52.303872H622.09024v-52.302848h124.740608zM273.842176 363.52l-36.91008 5.84704c4.785152 6.822912 9.227264 14.29504 13.328384 22.41536h-59.123712v31.186944h156.86656v-31.18592h-62.199808c-4.10112-10.395648-7.860224-19.817472-11.961344-28.263424z',
              }),
            );
          }, 'NewArrivalFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M823.677952 682.667008c45.668352 0 82.87744 39.481344 82.87744 88.000512 0 1.608704-0.115712 2.960384-0.167936 3.964928 0.0256 0.42496 0.0512 0.965632 0.0512 1.544192 0 7.621632-1.693696 15.757312-5.107712 24.923136-1.2288 3.55328-2.794496 7.221248-4.786176 11.147264-0.086016 0.11264-0.24576 0.37888-0.478208 0.79872-0.284672 0.515072-0.51712 1.030144-0.76288 1.544192-0.854016 1.635328-1.784832 3.52768-3.039232 5.471232-32.94208 57.800704-115.84512 118.857728-119.38816 121.690112-2.599936 2.059264-5.67808 3.10272-8.781824 3.10272-3.091456 0-6.117376-0.978944-8.704-3.012608-4.139008-3.296256-101.372928-74.600448-126.631936-136.584192-0.129024-0.321536-0.24576-0.669696-0.387072-1.030144-3.996672-10.06592-6.040576-19.489792-6.040576-28.076032 0-0.42496 0.0256-0.79872 0.064512-1.210368a32.772096 32.772096 0 0 1-0.284672-4.273152c0-48.544768 37.1968-88.000512 82.87744-88.000512 22.530048 0 43.870208 9.976832 59.364352 26.955776 15.417344-16.978944 36.757504-26.955776 59.32544-26.955776z m-338.455552-512c-54.049792 0-99.69152 36.000768-114.253824 85.331968h228.507648c-14.56128-49.3312-60.204032-85.331968-114.253824-85.331968z m90.100736 654.111744l0.009216 0.021504-0.045056-0.114688 0.03584 0.093184-0.048128-0.120832 0.01024 0.027648c0.242688 0.652288 0.242688 0.652288 0.688128 1.784832 4.43392 10.883072 10.0352 21.441536 16.789504 32.039936 10.948608 17.183744 24.84224 34.39104 41.192448 51.712H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.889344 0-1.183744 0.036864-2.366464 0.110592-3.54816L204.55424 309.34016c1.87392-29.98272 26.73664-53.34016 56.777728-53.34016h51.12832c15.572992-80.12288 85.499904-140.83072 169.85088-142.198784l2.910208-0.023552c85.648384 0 157.007872 61.179904 172.762112 142.221312l68.90496 0.001024c30.040064 0 54.903808 23.35744 56.777728 53.34016l19.872768 317.964288c-13.668352 2.084864-26.87488 6.26688-39.218176 12.324864-18.32448-8.99072-38.53312-13.851648-59.333632-13.851648-77.89568 0-139.76576 65.67424-139.76576 144.889856 0 2.352128 0.059392 4.1728 0.222208 6.275072 0.110592 15.64672 3.490816 31.435776 9.64608 47.244288l0.165888 0.420864-0.0256-0.067584a36.07552 36.07552 0 0 1-0.09216-0.248832l-0.003072-0.01024c0.02048 0.0512 0.114688 0.293888 0.306176 0.794624l0.03072 0.083968-0.03072-0.079872-0.002048-0.00512-0.031744-0.079872-0.03584-0.09216-0.049152-0.12288z',
              }),
            );
          }, 'GoodsCollectFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512.004096 170.667008c-307.160064 0-455.114752 298.305536-455.114752 312.88832 0 14.599168 144.003072 312.889344 455.114752 312.889344 311.105536 0 455.10656-298.2912 455.10656-312.889344 0-14.582784-147.954688-312.88832-455.10656-312.88832z m0 483.555328c-94.2592 0-170.67008-76.41088-170.67008-170.669056 0-94.2592 76.41088-170.663936 170.67008-170.663936 94.251008 0 170.662912 76.40576 170.662912 170.663936 0 94.257152-76.411904 170.669056-170.662912 170.669056z m0-256c-47.136768 0-85.337088 38.20544-85.337088 85.32992 0 47.13472 38.20032 85.33504 85.337088 85.33504 47.123456 0 85.32992-38.20032 85.32992-85.33504 0-47.12448-38.206464-85.32992-85.32992-85.32992z',
              }),
            );
          }, 'EyeFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M144.384 445.39392c0 0.0256-0.02048 0.04608-0.04608 0.04608h-10.14784a0.04608 0.04608 0 0 1-0.04608-0.04608V435.2h10.24v10.19392zM145.92 434.176h-13.312a0.512 0.512 0 0 0 0 1.024h0.512v10.19392c0 0.590848 0.479232 1.07008 1.07008 1.07008h10.14784c0.590848 0 1.07008-0.479232 1.07008-1.07008V435.2h0.512a0.512 0.512 0 0 0 0-1.024z m-4.096 9.216a0.512 0.512 0 0 0 0.512-0.512v-5.12a0.512 0.512 0 0 0-1.024 0v5.12a0.512 0.512 0 0 0 0.512 0.512m-5.12 0a0.512 0.512 0 0 0 0.512-0.512v-5.12a0.512 0.512 0 0 0-1.024 0v5.12a0.512 0.512 0 0 0 0.512 0.512m2.56 0a0.512 0.512 0 0 0 0.512-0.512v-5.12a0.512 0.512 0 0 0-1.024 0v5.12a0.512 0.512 0 0 0 0.512 0.512m-3.584-10.24h7.168a0.512 0.512 0 0 0 0-1.024h-7.168a0.512 0.512 0 0 0 0 1.024M881.666048 227.447808c15.702016 0 28.444672 12.742656 28.444672 28.444672 0 15.700992-12.742656 28.444672-28.444672 28.444672h-28.444672V850.66752c0 32.82432-26.624 59.449344-59.44832 59.449344H230.00064c-32.82432 0-59.44832-26.624-59.44832-59.449344V284.337152h-28.444672c-15.702016 0-28.444672-12.74368-28.444672-28.444672 0-15.702016 12.742656-28.444672 28.444672-28.444672zM654.11072 398.109696c-15.700992 0-28.444672 12.742656-28.444672 28.443648v284.445696c0 15.700992 12.74368 28.444672 28.444672 28.444672 15.702016 0 28.444672-12.74368 28.444672-28.444672V426.553344c0-15.700992-12.742656-28.443648-28.444672-28.443648z m-284.444672 0c-15.702016 0-28.444672 12.742656-28.444672 28.443648v284.445696c0 15.700992 12.742656 28.444672 28.444672 28.444672 15.700992 0 28.444672-12.74368 28.444672-28.444672V426.553344c0-15.700992-12.74368-28.443648-28.444672-28.443648z m142.222336 0c-15.700992 0-28.444672 12.742656-28.444672 28.443648v284.445696c0 15.700992 12.74368 28.444672 28.444672 28.444672 15.700992 0 28.444672-12.74368 28.444672-28.444672V426.553344c0-15.700992-12.74368-28.443648-28.444672-28.443648zM312.77568 170.553344h398.22336c15.700992 0 28.444672-12.74368 28.444672-28.444672 0-15.702016-12.74368-28.444672-28.444672-28.444672h-398.22336c-15.700992 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.74368 28.444672 28.444672 28.444672',
              }),
            );
          }, 'DeleteFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M853.221376 113.664c31.419392 0 56.889344 25.469952 56.889344 56.889344v682.668032c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.553344c-31.419392 0-56.889344-25.469952-56.889344-56.889344V170.553344C113.664 139.133952 139.133952 113.664 170.553344 113.664h682.668032zM710.99904 284.331008h-398.22336c-15.709184 0-28.444672 12.735488-28.444672 28.444672 0 13.964288 10.062848 25.577472 23.33184 27.98592l5.112832 0.458752h170.667008v369.778688c0 15.709184 12.735488 28.444672 28.444672 28.444672 13.964288 0 25.577472-10.062848 27.98592-23.33184l0.458752-5.112832V341.220352h170.667008c15.709184 0 28.444672-12.735488 28.444672-28.444672 0-13.964288-10.062848-25.577472-23.33184-27.98592l-5.112832-0.458752z',
              }),
            );
          }, 'FontFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M693.98016 383.3344c144.723968 0 273.5872 104.680448 273.5872 233.212928 0 71.698432-47.241216 135.281664-110.824448 183.67488l-1.931264 1.461248 24.286208 80.20992-88.346624-48.19968-9.21088 2.258944c-29.184 7.129088-58.524672 13.806592-87.560192 13.806592-153.273344 0-273.958912-104.556544-273.958912-233.211904 0-128.4096 120.685568-233.212928 273.958912-233.212928zM379.502592 142.336c158.354432 0 297.129984 96.152576 325.133312 225.550336-10.160128-1.113088-20.44416-1.85344-30.976-1.85344-153.02656 0-273.959936 113.948672-273.959936 254.345216 0 23.35744 3.59424 45.851648 9.91232 67.355648-9.91232 0.7424-19.948544 1.235968-30.109696 1.235968-39.067648 0-70.67136-7.676928-109.293568-15.357952l-3.585024-0.708608-112.631808 56.356864 32.21504-96.646144C105.667584 576.256 57.344 503.8336 57.344 415.5904 57.344 262.711296 202.43968 142.336 379.502592 142.336z m229.60128 365.576192c-20.197376 0-36.552704 16.313344-36.552704 36.458496 0 20.145152 16.355328 36.45952 36.552704 36.45952 20.196352 0 36.552704-16.314368 36.552704-36.45952 0-20.145152-16.356352-36.458496-36.552704-36.458496z m177.31072-0.246784c-20.196352 0-36.552704 16.313344-36.552704 36.458496 0 20.145152 16.356352 36.458496 36.552704 36.458496 20.197376 0 36.552704-16.313344 36.552704-36.458496 0-20.145152-16.355328-36.458496-36.552704-36.458496z m-515.206144-232.09984c-24.162304 0-43.74016 19.526656-43.74016 43.626496s19.577856 43.626496 43.74016 43.626496c24.285184 0 43.86304-19.65056 43.74016-43.626496 0-24.09984-19.57888-43.62752-43.74016-43.62752z m225.015808 0c-24.162304 0-43.74016 19.526656-43.74016 43.626496s19.577856 43.626496 43.74016 43.626496c24.16128 0 43.86304-19.65056 43.74016-43.626496 0-24.09984-19.57888-43.62752-43.74016-43.62752z',
              }),
            );
          }, 'WechatFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M382.204928 621.262848c-51.075072 29.129728-58.650624-16.35328-58.650624-16.35328l-64.01024-152.809472c-24.630272-72.61184 21.31456-32.740352 21.31456-32.740352s39.424 30.511104 69.34528 49.103872c29.903872 18.591744 63.98976 5.45792 63.98976 5.45792l418.475008-197.60128c-77.207552-98.279424-204.745728-162.542592-349.134848-162.542592-235.640832 0-426.64448 171.01824-426.64448 381.99296 0 121.34912 63.246336 229.35552 161.76128 299.358208l-17.7664 104.476672s-8.659968 30.500864 21.35552 16.35328c20.452352-9.645056 72.594432-44.210176 103.63392-65.246208 48.7936 17.394688 101.955584 27.05408 157.683712 27.05408 235.6224 0 426.66496-171.01824 426.66496-381.996032 0-61.108224-16.098304-118.818816-44.613632-170.044416-133.327872 82.065408-443.440128 272.782336-483.403776 295.53664z',
              }),
            );
          }, 'WechatPayFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M782.793728 113.777664c70.086656 0 127.428608 57.460736 127.428608 127.68768v413.384704S884.736 651.656192 770.051072 613.352448c-31.860736-11.172864-74.866688-27.136-122.652672-44.691456 28.672-49.475584 50.968576-106.93632 66.89792-167.586816h-157.696v-55.865344H749.34272v-31.921152H556.601344v-94.168064h-78.052352c-13.760512 0-14.3104 13.236224-14.332928 14.29504v81.46944H269.882368v31.922176h194.331648v54.265856H303.331328v31.920128h312.20736c-11.15136 39.904256-27.077632 76.611584-44.599296 110.130176-100.353024-33.518592-208.672768-60.647424-277.16608-43.091968-43.009024 11.169792-71.682048 30.323712-87.609344 49.477632-74.86464 90.975232-20.707328 229.834752 136.989696 229.834752 93.979648 0 184.773632-52.66944 254.860288-138.85952 103.02976 50.05312 303.966208 133.832704 311.9616 137.163776l0.24576 0.1024v4.7872c0 70.22592-57.341952 127.685632-127.42656 127.685632H241.20832c-70.08768 0-127.43168-57.459712-127.43168-127.685632v-541.07136c0-70.22592 57.344-127.68768 127.43168-127.68768z m-474.68544 432.5376c73.27744-7.979008 141.768704 20.750336 223.007744 60.653568-58.93632 73.416704-130.61632 119.7056-202.297344 119.7056-124.24704 0-160.883712-97.357824-98.75968-151.629824 20.70528-17.55648 57.345024-27.129856 78.04928-28.72832z',
              }),
            );
          }, 'AlipayFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M633.257984 113.777664a56.889344 56.889344 0 0 1 47.3344 25.332736l58.962944 88.444928H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.889344v568.88832c0 31.419392-25.469952 56.889344-56.88832 56.889344H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.889344V284.444672c0-31.419392 25.469952-56.889344 56.88832-56.889344h170.667008l58.962944-88.444928a56.889344 56.889344 0 0 1 47.3344-25.332736h242.515968zM512 341.332992c-125.67552 0-227.555328 101.880832-227.555328 227.556352 0 125.67552 101.879808 227.555328 227.555328 227.555328s227.555328-101.880832 227.555328-227.555328c0-125.67552-101.879808-227.556352-227.555328-227.556352z m0 113.777664c62.83776 0 113.777664 50.940928 113.777664 113.778688 0 62.83776-50.939904 113.77664-113.777664 113.77664s-113.777664-50.93888-113.777664-113.77664S449.16224 455.110656 512 455.110656z',
              }),
            );
          }, 'PhotographFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M593.242112 69.001216l316.9792 96.079872v408.7296c0 68.79232 0 250.4192-369.773568 393.299968C170.7008 824.229888 170.667008 642.603008 170.667008 573.811712v-408.7296l323.487744-97.51552c2.802688-0.843776 5.516288-1.8944 8.177664-2.981888 34.922496-14.2336 65.214464-5.24288 76.878848-0.577536 4.573184 1.828864 9.234432 3.54304 14.030848 4.994048zM341.332992 514.941952v193.738752c3.3792 6.89152 10.652672 10.84416 19.065856 9.438208l49.354752-8.22272v-216.63744c-22.331392 4.4544-54.697984 10.625024-54.697984 10.625024-5.888 1.129472-11.022336 5.51424-13.7216 11.058176zM431.104 706.340864l237.340672-39.53664c17.466368-2.904064 29.947904-19.972096 28.319744-38.152192 0 0-1.6384-6.4768-0.17408-15.639552 1.465344-9.161728 8.68864-14.198784 10.018816-33.398784 1.038336-14.855168-3.7376-16.85504-2.402304-32.73728 1.335296-15.875072 7.857152-18.433024 9.467904-39.062528 1.610752-20.640768-5.999616-25.694208-4.534272-39.933952 1.45408-14.2336 4.130816-22.329344 4.130816-22.329344 5.67296-24.25344-9.198592-41.535488-33.2032-38.607872l-79.094784 9.674752c-11.886592 1.446912-20.77184-7.35232-19.851264-19.678208l6.639616-89.064448c2.486272-33.381376-21.48352-56.281088-53.530624-51.15904l4.13696-0.662528c-12.089344 1.936384-23.061504 13.657088-24.706048 26.149888 0 0-18.482176 187.05408-82.557952 206.468096v217.669632z',
              }),
            );
          }, 'YouzanShieldFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M766.0544 512H257.923072c-17.521664 0-30.492672-15.587328-28.502016-33.052672 15.30368-132.096 121.458688-235.406336 254.123008-248.718336v-31.118336c0-15.700992 12.74368-28.443648 28.444672-28.443648 15.758336 0 28.444672 12.742656 28.444672 28.443648v31.11936c132.66432 13.312 238.819328 116.621312 254.121984 248.717312C796.547072 496.412672 783.633408 512 766.0544 512zM540.433408 739.555328c0 47.04768-38.28736 85.334016-85.334016 85.334016s-85.332992-38.28736-85.332992-85.334016v-28.444672c0-15.700992 12.742656-28.443648 28.444672-28.443648 15.758336 0 28.444672 12.742656 28.444672 28.443648v28.444672c0 15.644672 12.8 28.444672 28.443648 28.444672 15.702016 0 28.444672-12.8 28.444672-28.444672V568.889344h56.889344v170.665984zM511.988736 56.889344c-251.33568 0-455.11168 203.776-455.11168 455.110656 0 251.334656 203.776 455.110656 455.11168 455.110656 251.334656 0 455.110656-203.776 455.110656-455.110656 0-251.334656-203.776-455.110656-455.110656-455.110656z',
              }),
            );
          }, 'UmbrellaCircleFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M597.332992 881.777664c0 47.128576-38.20544 85.332992-85.332992 85.332992-47.128576 0-85.332992-38.20544-85.332992-85.332992h170.665984z m-85.332992-768c15.709184 0 28.444672 12.735488 28.444672 28.444672l0.001024 29.613056C715.650048 186.290176 853.332992 333.06624 853.332992 512v284.443648h85.334016c15.70816 0 28.443648 12.735488 28.443648 28.445696 0 15.70816-12.734464 28.443648-28.443648 28.443648H85.332992c-15.70816 0-28.443648-12.734464-28.443648-28.443648 0-15.710208 12.734464-28.444672 28.443648-28.444672h85.334016V512c0-178.93376 137.683968-325.710848 312.88832-340.164608v-29.61408c0-15.70816 12.735488-28.443648 28.444672-28.443648z',
              }),
            );
          }, 'BellFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M853.332992 796.444672V625.77664H170.667008v170.667008H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.889344V398.22336c0-31.419392 25.469952-56.889344 56.88832-56.889344H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.889344v341.332992c0 31.419392-25.469952 56.889344-56.88832 56.889344h-56.889344zM227.556352 113.77664h568.88832c31.418368 0 56.88832 25.469952 56.88832 56.889344v113.77664H170.667008v-113.77664c0-31.419392 25.469952-56.889344 56.88832-56.889344zM839.109632 512c23.564288 0 42.667008-19.10272 42.667008-42.667008s-19.10272-42.665984-42.667008-42.665984c-23.563264 0-42.665984 19.101696-42.665984 42.665984 0 23.564288 19.10272 42.667008 42.665984 42.667008zM227.555328 682.667008h568.889344v170.665984c0 31.419392-25.469952 56.889344-56.889344 56.889344H284.444672c-31.419392 0-56.889344-25.469952-56.889344-56.889344V682.667008z',
              }),
            );
          }, 'PrinterFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M765.07136 625.777664a56.889344 56.889344 0 0 1 47.269888 25.23648l152.3712 227.556352c17.481728 26.105856 10.488832 61.441024-15.618048 78.921728a56.889344 56.889344 0 0 1-31.65184 9.618432H105.916416c-31.419392 0-56.889344-25.469952-56.889344-56.88832a56.889344 56.889344 0 0 1 9.460736-31.414272l150.721536-227.555328a56.889344 56.889344 0 0 1 47.428608-25.475072l97.460224 0.007168C430.205952 713.237504 512.37888 768 512 768c-0.377856 0 81.794048-54.762496 157.9008-142.215168l95.17056-0.007168z m-25.516032 227.555328v56.889344H284.444672v-56.889344h455.110656zM512 113.777664c125.67552 0 227.555328 101.879808 227.555328 227.555328C739.555328 530.96448 512 701.62944 512 701.62944S284.444672 530.96448 284.444672 341.332992c0-125.67552 101.879808-227.555328 227.555328-227.555328zM512 256c-47.128576 0-85.332992 38.20544-85.332992 85.332992 0 47.128576 38.20544 85.334016 85.332992 85.334016 47.128576 0 85.332992-38.20544 85.332992-85.334016C597.332992 294.20544 559.127552 256 512 256z',
              }),
            );
          }, 'MapMarkedFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M568.604672 654.676992c0 15.702016 12.742656 28.444672 28.444672 28.444672h170.665984c15.702016 0 28.444672-12.742656 28.444672-28.444672 0-15.700992-12.742656-28.443648-28.444672-28.443648H597.049344c-15.702016 0-28.444672 12.742656-28.444672 28.443648z m-511.715328-313.344h910.221312v455.11168c0 31.459328-25.428992 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.428992-56.88832-56.88832V341.332992z m910.221312-113.77664v56.88832H56.889344v-56.889344c0-31.401984 25.485312-56.88832 56.88832-56.88832H910.22336c31.459328 0 56.88832 25.486336 56.88832 56.88832z',
              }),
            );
          }, 'CardFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M483.555328 483.555328H284.444672C268.735488 483.555328 256 496.29184 256 512s12.735488 28.444672 28.444672 28.444672h199.110656v199.110656C483.555328 755.264512 496.29184 768 512 768s28.444672-12.735488 28.444672-28.444672V540.444672h199.110656C755.264512 540.444672 768 527.70816 768 512s-12.735488-28.444672-28.444672-28.444672H540.444672V284.444672C540.444672 268.735488 527.70816 256 512 256s-28.444672 12.735488-28.444672 28.444672v199.110656z m-312.88832-369.77664h682.665984c31.419392 0 56.889344 25.468928 56.889344 56.88832v682.665984c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344V170.667008c0-31.419392 25.469952-56.889344 56.889344-56.889344z',
              }),
            );
          }, 'AddSquareFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M438.449152 301.1072h144.243712L733.24544 150.5536c11.108352-11.108352 29.118464-11.108352 40.226816 0 11.108352 11.108352 11.108352 29.118464 0 40.226816l-110.326784 110.32576h190.18752c31.419392 0 56.889344 25.470976 56.889344 56.889344V813.1072c0 31.418368-25.469952 56.88832-56.889344 56.88832H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.88832V357.99552c0-31.418368 25.469952-56.88832 56.889344-56.88832h187.328512l-110.32576-110.326784c-11.109376-11.108352-11.109376-29.118464 0-40.226816 11.107328-11.108352 29.11744-11.108352 40.225792 0L438.449152 301.1072z m150.10816 310.444032a28.444672 28.444672 0 0 0 4.443136-4.442112c9.814016-12.26752 7.824384-30.16704-4.442112-39.980032l-115.678208-92.542976a28.444672 28.444672 0 0 0-17.769472-6.233088c-15.70816 0-28.443648 12.735488-28.443648 28.444672v185.084928a28.444672 28.444672 0 0 0 6.233088 17.769472c9.812992 12.26752 27.713536 14.255104 39.980032 4.442112l115.678208-92.542976z',
              }),
            );
          }, 'LiveFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M284.444672 455.110656v-113.77664c0-125.67552 101.879808-227.556352 227.555328-227.556352s227.555328 101.879808 227.555328 227.555328v113.777664h71.11168c23.564288 0 42.665984 19.10272 42.665984 42.667008v369.777664c0 23.564288-19.101696 42.667008-42.665984 42.667008H213.332992c-23.564288 0-42.665984-19.10272-42.665984-42.667008v-369.77664c0-23.565312 19.101696-42.668032 42.665984-42.668032h71.11168z m85.332992 0H654.22336v-113.77664c0-78.547968-63.675392-142.22336-142.222336-142.22336-78.546944 0-142.222336 63.675392-142.222336 142.22336v113.77664z',
              }),
            );
          }, 'LockFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M113.777664 512c0-219.931648 178.290688-398.222336 398.222336-398.222336 219.931648 0 398.222336 178.290688 398.222336 398.222336v284.444672c0 31.418368-25.469952 56.88832-56.889344 56.88832h-56.88832c-31.419392 0-56.889344-25.469952-56.889344-56.88832V568.889344c0-31.419392 25.469952-56.889344 56.889344-56.889344h56.88832c0-188.51328-152.819712-341.332992-341.332992-341.332992-188.51328 0-341.332992 152.819712-341.332992 341.332992h56.88832c31.419392 0 56.889344 25.469952 56.889344 56.889344v227.555328c0 31.418368-25.469952 56.88832-56.889344 56.88832h-56.88832c-31.419392 0-56.889344-25.469952-56.889344-56.88832V512z',
              }),
            );
          }, 'AudioFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M169.984 144.354304C169.984 112.70144 195.91168 87.04 227.013632 87.04h568.60672c31.49824 0 57.030656 25.53856 57.030656 57.314304v738.704384c0 31.653888-25.92768 57.314304-57.029632 57.314304H227.013632c-31.496192 0-57.029632-25.53856-57.029632-57.314304v-738.70336z m142.222336 56.46336c-15.709184 0-28.444672 12.735488-28.444672 28.444672v284.444672c0 15.70816 12.735488 28.443648 28.444672 28.443648h398.222336c15.709184 0 28.444672-12.734464 28.444672-28.443648V229.262336c0-15.709184-12.735488-28.444672-28.444672-28.444672h-398.22336z m0 455.11168c-15.709184 0-28.444672 12.734464-28.444672 28.443648 0 15.710208 12.735488 28.444672 28.444672 28.444672h398.222336c15.709184 0 28.444672-12.734464 28.444672-28.444672 0-15.70816-12.735488-28.443648-28.444672-28.443648h-398.22336z m0 113.77664c-15.709184 0-28.444672 12.735488-28.444672 28.444672 0 15.710208 12.735488 28.444672 28.444672 28.444672H539.76064c15.709184 0 28.444672-12.734464 28.444672-28.444672 0-15.70816-12.735488-28.443648-28.444672-28.443648H312.20736z',
              }),
            );
          }, 'GraphicFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M227.555328 113.777664h455.11168c31.418368 0 56.88832 25.469952 56.88832 56.889344v682.665984c0 31.419392-25.469952 56.889344-56.88832 56.889344H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.889344V170.667008c0-31.419392 25.469952-56.889344 56.88832-56.889344z m597.334016 0c15.70816 0 28.443648 12.735488 28.443648 28.444672V881.77664c0 15.709184-12.734464 28.444672-28.443648 28.444672-15.710208 0-28.444672-12.735488-28.444672-28.444672V142.22336c0-15.709184 12.734464-28.444672 28.444672-28.444672z m-512 170.667008c-15.710208 0-28.444672 12.734464-28.444672 28.444672 0 15.70816 12.734464 28.443648 28.444672 28.443648h284.443648c15.710208 0 28.444672-12.734464 28.444672-28.443648 0-15.710208-12.734464-28.444672-28.444672-28.444672H312.889344z m0 113.77664c-15.710208 0-28.444672 12.735488-28.444672 28.445696 0 15.70816 12.734464 28.443648 28.444672 28.443648h284.443648c15.710208 0 28.444672-12.734464 28.444672-28.443648 0-15.710208-12.734464-28.444672-28.444672-28.444672H312.889344z m0 113.778688c-15.710208 0-28.444672 12.735488-28.444672 28.444672s12.734464 28.444672 28.444672 28.444672h170.665984c15.709184 0 28.444672-12.735488 28.444672-28.444672S499.264512 512 483.555328 512H312.889344z',
              }),
            );
          }, 'ColumnFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M785.79712 539.923456L387.54816 858.523648c-12.26752 9.814016-30.16704 7.824384-39.981056-4.442112a28.444672 28.444672 0 0 1-6.233088-17.769472V199.110656c0-15.70816 12.735488-28.443648 28.444672-28.443648a28.444672 28.444672 0 0 1 17.769472 6.233088L785.79712 495.500288c12.266496 9.814016 14.255104 27.713536 4.442112 39.981056a28.444672 28.444672 0 0 1-4.442112 4.442112z',
              }),
            );
          }, 'PlayFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M341.332992 142.222336c47.128576 0 85.334016 38.20544 85.334016 85.332992v568.889344c0 47.128576-38.20544 85.332992-85.334016 85.332992-47.127552 0-85.332992-38.20544-85.332992-85.332992V227.555328c0-47.128576 38.20544-85.332992 85.332992-85.332992z m341.334016 0c47.127552 0 85.332992 38.20544 85.332992 85.332992v568.889344c0 47.128576-38.20544 85.332992-85.332992 85.332992-47.128576 0-85.334016-38.20544-85.334016-85.332992V227.555328c0-47.128576 38.20544-85.332992 85.334016-85.332992z',
              }),
            );
          }, 'PauseFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M348.16 307.2h327.68c22.621184 0 40.96 18.338816 40.96 40.96v327.68c0 22.621184-18.338816 40.96-40.96 40.96H348.16c-22.621184 0-40.96-18.338816-40.96-40.96V348.16c0-22.621184 18.338816-40.96 40.96-40.96z',
              }),
            );
          }, 'StopFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 682.667008c-94.256128 0-170.667008-76.41088-170.667008-170.667008S417.743872 341.332992 512 341.332992 682.667008 417.743872 682.667008 512 606.256128 682.667008 512 682.667008z m398.222336-56.889344c-62.83776 0-113.777664-50.939904-113.777664-113.777664s50.939904-113.777664 113.77664-113.777664C973.06112 398.222336 1024 449.16224 1024 512s-50.939904 113.777664-113.777664 113.777664z m-796.444672 0C50.939904 625.777664 0 574.83776 0 512s50.939904-113.777664 113.777664-113.777664S227.555328 449.16224 227.555328 512s-50.939904 113.777664-113.77664 113.777664z',
              }),
            );
          }, 'WeappNavFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M796.128256 345.342976l-67.332096 67.331072c-16.662528 16.662528-43.677696 16.662528-60.3392 0-16.662528-16.661504-16.662528-43.676672 0-60.3392l136.63744-136.63744c5.884928-7.56736 14.26432-13.101056 23.902208-15.366144 14.06976-3.529728 29.58848 0.206848 40.592384 11.210752 10.19392 10.19392 14.15168 24.261632 11.872256 37.464064v533.305344c0 23.564288-19.10272 42.667008-42.665984 42.667008-23.564288 0-42.667008-19.10272-42.667008-42.667008V345.344z m-611.555328-91.275264h369.77664c23.565312 0 42.667008 19.10272 42.667008 42.667008s-19.101696 42.667008-42.665984 42.667008H184.572928c-23.564288 0-42.667008-19.10272-42.667008-42.667008s19.10272-42.667008 42.667008-42.667008z m0 227.556352h369.77664c23.565312 0 42.667008 19.101696 42.667008 42.665984 0 23.564288-19.101696 42.667008-42.665984 42.667008H184.572928c-23.564288 0-42.667008-19.10272-42.667008-42.667008s19.10272-42.665984 42.667008-42.665984z m0 227.555328h369.77664c23.565312 0 42.667008 19.10272 42.667008 42.665984 0 23.564288-19.101696 42.667008-42.665984 42.667008H184.572928c-23.564288 0-42.667008-19.10272-42.667008-42.667008 0-23.563264 19.10272-42.665984 42.667008-42.665984z',
              }),
            );
          }, 'AscendingFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M769.340416 678.680576l67.331072-67.331072c16.662528-16.662528 43.677696-16.662528 60.340224 0 16.662528 16.661504 16.662528 43.676672 0 60.3392L760.374272 808.326144c-5.884928 7.56736-14.26432 13.101056-23.902208 15.366144-14.06976 3.529728-29.589504-0.206848-40.593408-11.210752-10.192896-10.19392-14.150656-24.261632-11.872256-37.464064V241.712128c0-23.564288 19.10272-42.667008 42.667008-42.667008s42.667008 19.10272 42.667008 42.667008v436.968448z m-612.179968-424.61184h369.77664c23.565312 0 42.667008 19.101696 42.667008 42.665984 0 23.564288-19.101696 42.667008-42.665984 42.667008H157.160448c-23.564288 0-42.667008-19.10272-42.667008-42.667008s19.10272-42.667008 42.667008-42.667008z m0 227.555328h369.77664c23.565312 0 42.667008 19.101696 42.667008 42.665984 0 23.564288-19.101696 42.667008-42.665984 42.667008H157.160448c-23.564288 0-42.667008-19.10272-42.667008-42.667008s19.10272-42.665984 42.667008-42.665984z m0 227.555328h369.77664c23.565312 0 42.667008 19.10272 42.667008 42.665984 0 23.564288-19.101696 42.667008-42.665984 42.667008H157.160448c-23.564288 0-42.667008-19.10272-42.667008-42.667008 0-23.563264 19.10272-42.665984 42.667008-42.665984z',
              }),
            );
          }, 'DescendingFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M199.110656 284.444672c-31.418368 0-56.88832-25.469952-56.88832-56.889344 0-31.418368 25.469952-56.88832 56.88832-56.88832 31.419392 0 56.889344 25.469952 56.889344 56.88832 0 31.419392-25.469952 56.889344-56.889344 56.889344z m156.444672-99.555328h483.555328c23.564288 0 42.667008 19.101696 42.667008 42.665984 0 23.564288-19.10272 42.667008-42.667008 42.667008H355.555328c-23.564288 0-42.665984-19.10272-42.665984-42.667008s19.101696-42.665984 42.665984-42.665984z m0 284.443648h483.555328c23.564288 0 42.667008 19.10272 42.667008 42.667008s-19.10272 42.667008-42.667008 42.667008H355.555328c-23.564288 0-42.665984-19.10272-42.665984-42.667008s19.101696-42.667008 42.665984-42.667008z m0 284.444672h483.555328c23.564288 0 42.667008 19.10272 42.667008 42.667008s-19.10272 42.665984-42.667008 42.665984H355.555328c-23.564288 0-42.665984-19.101696-42.665984-42.665984 0-23.564288 19.101696-42.667008 42.665984-42.667008zM199.110656 568.889344c-31.418368 0-56.88832-25.470976-56.88832-56.889344s25.469952-56.889344 56.88832-56.889344C230.530048 455.110656 256 480.581632 256 512s-25.469952 56.889344-56.889344 56.889344z m0 284.443648c-31.418368 0-56.88832-25.469952-56.88832-56.88832 0-31.419392 25.469952-56.889344 56.88832-56.889344 31.419392 0 56.889344 25.469952 56.889344 56.889344 0 31.418368-25.469952 56.88832-56.889344 56.88832z',
              }),
            );
          }, 'BarsFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M163.555328 227.555328h696.889344c27.491328 0 49.77664 22.286336 49.77664 49.777664 0 27.492352-22.285312 49.777664-49.77664 49.777664H163.555328c-27.491328 0-49.77664-22.285312-49.77664-49.77664 0-27.492352 22.285312-49.778688 49.77664-49.778688z m0 248.889344h696.889344c27.491328 0 49.77664 22.286336 49.77664 49.77664 0 27.492352-22.285312 49.778688-49.77664 49.778688H163.555328c-27.491328 0-49.77664-22.286336-49.77664-49.777664 0-27.491328 22.285312-49.777664 49.77664-49.777664z m0 248.88832h696.889344c27.491328 0 49.77664 22.286336 49.77664 49.777664 0 27.492352-22.285312 49.778688-49.77664 49.778688H163.555328c-27.491328 0-49.77664-22.286336-49.77664-49.778688 0-27.491328 22.285312-49.77664 49.77664-49.77664z',
              }),
            );
          }, 'WapNavFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M156.331008 625.665024c23.564288 0 42.667008 19.10272 42.667008 42.667008l-0.001024 156.443648 156.445696 0.001024c23.564288 0 42.667008 19.10272 42.667008 42.667008s-19.10272 42.667008-42.667008 42.667008h-184.87296C139.14112 910.11072 113.664 884.6336 113.664 853.206016v-184.87296C113.664 644.76672 132.76672 625.664 156.331008 625.664z m711.112704 0c23.564288 0 42.667008 19.10272 42.667008 42.667008v184.87296c0 31.428608-25.47712 56.905728-56.904704 56.905728h-184.87296c-23.565312 0-42.668032-19.10272-42.668032-42.667008s19.10272-42.667008 42.667008-42.667008l156.443648 0.001024 0.001024-156.445696c0-23.564288 19.10272-42.667008 42.667008-42.667008zM355.442688 113.664c23.564288 0 42.667008 19.10272 42.667008 42.667008s-19.10272 42.667008-42.667008 42.667008H198.998016v156.444672c0 23.564288-19.10272 42.667008-42.667008 42.667008S113.664 379.006976 113.664 355.442688v-184.87296C113.664 139.14112 139.14112 113.664 170.568704 113.664h184.87296z m497.763328 0c31.42656 0 56.904704 25.47712 56.904704 56.904704v184.87296c0 23.565312-19.10272 42.668032-42.667008 42.668032s-42.667008-19.10272-42.667008-42.667008V198.998016H668.332032c-23.564288 0-42.667008-19.10272-42.667008-42.667008S644.767744 113.664 668.332032 113.664h184.87296z',
              }),
            );
          }, 'EnlargeFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M398.678016 171.008l-18.944 56.889344H114.233344v398.222336l73.556992-73.556992c20.532224-20.533248 52.795392-22.112256 75.132928-4.739072l5.36576 4.739072 73.499648 73.556992 105.35936-126.464L569.344 683.008l-56.889344 170.667008h-398.22336c-29.159424 0-53.21728-21.97504-56.505344-50.25792L57.344 796.786688V227.897344c0-29.212672 21.97504-53.225472 50.25792-56.507392l6.631424-0.381952h284.444672z m512 0c29.212672 0 53.225472 21.925888 56.507392 50.24768l0.381952 6.641664v568.889344c0 29.159424-21.925888 53.21728-50.24768 56.506368l-6.641664 0.382976H626.233344L683.122688 683.008 510.350336 423.822336l72.818688-87.324672c21.025792-25.273344 58.554368-27.206656 82.05824-5.612544l4.810752 4.98688 240.64 280.747008V227.897344H493.51168l18.944-56.889344h398.22336zM313.372672 284.763136c15.880192 0 30.75072 4.344832 43.48928 11.90912l-15.07328 45.002752 46.368768 69.533696c-14.528512 26.354688-42.58304 44.22144-74.784768 44.22144-47.104 0-85.332992-38.228992-85.332992-85.334016 0-47.104 38.228992-85.332992 85.332992-85.332992z',
              }),
            );
          }, 'PhotoFailFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M454.658048 164.202496l0.339968 6.464512v682.669056c0 31.418368-25.469952 56.88832-56.88832 56.88832-29.174784 0-53.220352-21.960704-56.506368-50.253824l-0.382976-6.63552V307.99872L210.78016 438.450176c-20.507648 20.507648-52.77696 22.084608-75.094016 4.731904l-5.359616-4.731904c-20.507648-20.507648-22.085632-52.77696-4.732928-75.094016l4.732928-5.359616 227.556352-227.556352c34.279424-34.279424 91.835392-12.547072 96.775168 33.762304z m171.008-50.538496c29.17376 0 53.219328 21.961728 56.505344 50.254848l0.382976 6.634496v545.338368L812.99456 585.439232c20.507648-20.507648 52.77696-22.085632 75.094016-4.732928l5.359616 4.732928c20.507648 20.507648 22.085632 52.77696 4.732928 75.092992l-4.732928 5.359616-227.556352 227.556352c-34.279424 34.280448-91.835392 12.548096-96.775168-33.76128l-0.339968-6.465536V170.553344C568.776704 139.133952 594.246656 113.664 625.664 113.664z',
              }),
            );
          }, 'SortFilled'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M728.223744 520.22784a42.467328 42.467328 0 0 1-11.393024 20.503552L374.90688 882.65728c-16.662528 16.662528-43.677696 16.662528-60.340224 0s-16.662528-43.677696 0-60.340224L626.449408 510.43328 314.614784 198.598656c-16.662528-16.662528-16.662528-43.677696 0-60.340224 16.661504-16.662528 43.676672-16.662528 60.3392 0L716.879872 480.18432c10.860544 10.860544 14.642176 26.120192 11.343872 40.04352z',
              }),
            );
          }, 'Arrow'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M303.220736 520.22784c-3.29728-13.923328 0.484352-29.182976 11.344896-40.04352l341.925888-341.925888c16.661504-16.662528 43.676672-16.662528 60.3392 0s16.662528 43.677696 0 60.340224L404.996096 510.43328l311.883776 311.883776c16.662528 16.662528 16.662528 43.677696 0 60.340224s-43.677696 16.662528-60.340224 0L314.614784 540.731392a42.467328 42.467328 0 0 1-11.394048-20.503552z',
              }),
            );
          }, 'ArrowLeft'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M525.492224 291.8912a42.467328 42.467328 0 0 1 20.504576 11.394048L887.92064 645.211136c16.662528 16.661504 16.662528 43.676672 0 60.3392s-43.677696 16.662528-60.3392 0L515.698688 393.66656 203.86304 705.502208c-16.662528 16.661504-43.677696 16.661504-60.3392 0-16.662528-16.662528-16.662528-43.677696 0-60.340224L485.44768 303.236096c10.860544-10.860544 26.120192-14.642176 40.04352-11.343872z',
              }),
            );
          }, 'ArrowUp'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M505.952256 751.028224a42.467328 42.467328 0 0 1-20.503552-11.393024L143.52384 397.709312c-16.662528-16.661504-16.662528-43.676672 0-60.3392 16.661504-16.662528 43.676672-16.662528 60.3392 0L515.74784 649.253888 827.582464 337.41824c16.661504-16.662528 43.676672-16.662528 60.3392 0s16.662528 43.677696 0 60.340224L545.9968 739.683328c-10.861568 10.861568-26.120192 14.6432-40.044544 11.34592z',
              }),
            );
          }, 'ArrowDown'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M122.28096 536.623104c-9.940992-9.925632-11.548672-25.360384-2.78528-36.407296l20.487168-25.828352c8.397824-10.58816 24.108032-13.246464 35.211264-5.835776l177.3312 118.35904c9.353216 6.243328 25.452544 5.430272 34.185216-1.654784l468.5824-380.16c10.532864-8.54528 27.030528-7.817216 36.261888 1.400832l11.542528 11.52512c10.04544 10.03008 9.314304 25.951232-1.215488 36.465664l-502.92736 502.183936c-15.64672 15.624192-41.337856 14.94016-57.445376-1.142784l-219.22816-218.9056z',
              }),
            );
          }, 'Success'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M573.592576 513.252352l261.472256 261.472256c16.662528 16.662528 16.662528 43.677696 0 60.340224s-43.677696 16.662528-60.340224 0L513.252352 573.592576 251.78112 835.064832c-16.662528 16.662528-43.677696 16.662528-60.3392 0-16.662528-16.662528-16.662528-43.677696 0-60.340224l261.472256-261.472256L191.440896 251.78112c-16.662528-16.662528-16.662528-43.677696 0-60.3392 16.661504-16.662528 43.676672-16.662528 60.3392 0l261.472256 261.472256 261.472256-261.472256c16.662528-16.662528 43.677696-16.662528 60.340224 0 16.662528 16.661504 16.662528 43.676672 0 60.3392L573.592576 513.252352z',
              }),
            );
          }, 'Cross'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M550.4 550.4v332.8c0 21.20704-17.19296 38.4-38.4 38.4s-38.4-17.19296-38.4-38.4v-332.8h-332.8c-21.20704 0-38.4-17.19296-38.4-38.4s17.19296-38.4 38.4-38.4h332.8v-332.8c0-21.20704 17.19296-38.4 38.4-38.4s38.4 17.19296 38.4 38.4v332.8h332.8c21.20704 0 38.4 17.19296 38.4 38.4s-17.19296 38.4-38.4 38.4h-332.8z',
              }),
            );
          }, 'Plus'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M550.4 550.4h-409.6c-21.20704 0-38.4-17.19296-38.4-38.4s17.19296-38.4 38.4-38.4h742.4c21.20704 0 38.4 17.19296 38.4 38.4s-17.19296 38.4-38.4 38.4h-332.8z',
              }),
            );
          }, 'Minus'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M455.12192 128.99328c-0.187392-8.402944 5.812224-15.215616 14.620672-15.215616h84.514816c8.262656 0 14.81728 6.38976 14.620672 15.21664l-12.035072 538.456064c-0.187392 8.403968-7.324672 15.21664-15.03744 15.21664h-59.611136c-8.117248 0-14.839808-6.38976-15.03744-15.21664L455.12192 128.99328zM512 853.334016c-31.418368 0-56.889344-25.469952-56.889344-56.88832 0-31.419392 25.470976-56.889344 56.889344-56.889344s56.889344 25.469952 56.889344 56.889344c0 31.418368-25.470976 56.88832-56.889344 56.88832z',
              }),
            );
          }, 'Fail'),
          a(function (e) {
            return n.createElement(
              'svg',
              Object.assign({}, e, {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              n.createElement('path', {
                d: 'M512 903.110656c216.004608 0 391.110656-175.106048 391.110656-391.110656S728.004608 120.889344 512 120.889344 120.889344 295.995392 120.889344 512 295.995392 903.110656 512 903.110656z m0 64C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z',
              }),
            );
          }, 'Circle'),
          ['component', 'className']),
        z = function (e, t) {
          var c = e.component,
            i = e.className,
            l = (0, r.Z)(e, d);
          return n.createElement(
            'span',
            Object.assign(
              { className: s()('rmc-vant-icon', i), role: 'img', ref: t },
              l,
            ),
            n.createElement(
              c,
              Object.assign(
                { width: '1em', height: '1em', fill: 'currentColor' },
                l,
              ),
            ),
          );
        },
        x = n.forwardRef(z);
    },
    6539: function (e, t, c) {
      var n = c(7400).Symbol;
      e.exports = n;
    },
    9736: function (e, t, c) {
      var n = c(6539),
        r = c(4840),
        i = c(1258),
        s = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : s && s in Object(e)
          ? r(e)
          : i(e);
      };
    },
    9120: function (e, t, c) {
      var n = 'object' == typeof c.g && c.g && c.g.Object === Object && c.g;
      e.exports = n;
    },
    4840: function (e, t, c) {
      var n = c(6539),
        r = Object.prototype,
        i = r.hasOwnProperty,
        s = r.toString,
        l = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        var t = i.call(e, l),
          c = e[l];
        try {
          e[l] = void 0;
          var n = !0;
        } catch (o) {}
        var r = s.call(e);
        return n && (t ? (e[l] = c) : delete e[l]), r;
      };
    },
    1258: function (e) {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    7400: function (e, t, c) {
      var n = c(9120),
        r = 'object' == typeof self && self && self.Object === Object && self,
        i = n || r || Function('return this')();
      e.exports = i;
    },
    2360: function (e) {
      e.exports = function (e) {
        return null != e && 'object' == typeof e;
      };
    },
    7326: function (e, t, c) {
      'use strict';
      function n(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      c.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    5671: function (e, t, c) {
      'use strict';
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      c.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    3144: function (e, t, c) {
      'use strict';
      function n(e, t) {
        for (var c = 0; c < t.length; c++) {
          var n = t[c];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function r(e, t, c) {
        return (
          t && n(e.prototype, t),
          c && n(e, c),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      c.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    8052: function (e, t, c) {
      'use strict';
      c.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = c(1120);
      function r(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) &&
          null !== (e = (0, n.Z)(e));

        );
        return e;
      }
      function i() {
        return (
          (i =
            'undefined' != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (e, t, c) {
                  var n = r(e, t);
                  if (n) {
                    var i = Object.getOwnPropertyDescriptor(n, t);
                    return i.get
                      ? i.get.call(arguments.length < 3 ? e : c)
                      : i.value;
                  }
                }),
          i.apply(this, arguments)
        );
      }
    },
    1120: function (e, t, c) {
      'use strict';
      function n(e) {
        return (
          (n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          n(e)
        );
      }
      c.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    136: function (e, t, c) {
      'use strict';
      c.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = c(9611);
      function r(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        Object.defineProperty(e, 'prototype', {
          value: Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          }),
          writable: !1,
        }),
          t && (0, n.Z)(e, t);
      }
    },
    3366: function (e, t, c) {
      'use strict';
      function n(e, t) {
        if (null == e) return {};
        var c,
          n,
          r = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (c = i[n]), t.indexOf(c) >= 0 || (r[c] = e[c]);
        return r;
      }
      c.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    2963: function (e, t, c) {
      'use strict';
      c.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = c(8),
        r = c(7326);
      function i(e, t) {
        if (t && ('object' === n(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          );
        return (0, r.Z)(e);
      }
    },
    885: function (e, t, c) {
      'use strict';
      c.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = c(181);
      function r(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var c =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != c) {
              var n,
                r,
                i = [],
                s = !0,
                l = !1;
              try {
                for (
                  c = c.call(e);
                  !(s = (n = c.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  s = !0
                );
              } catch (o) {
                (l = !0), (r = o);
              } finally {
                try {
                  s || null == c.return || c.return();
                } finally {
                  if (l) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          (0, n.Z)(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
    },
  },
]);
//# sourceMappingURL=5fc27b6d8d81d27de7969bd247c0f87d1dd1da6e-dbe46343afa14437a4a2.js.map