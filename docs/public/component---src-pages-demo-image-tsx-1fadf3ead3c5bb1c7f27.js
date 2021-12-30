(self.webpackChunkgatsby_starter_blog =
  self.webpackChunkgatsby_starter_blog || []).push([
  [748],
  {
    2370: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var r = n(7294),
        i = n(3366),
        o = n(7715),
        a = n.n(o),
        s = n(7970);
      function l() {
        return (
          (l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          l.apply(this, arguments)
        );
      }
      var c = new Map(),
        u = new WeakMap(),
        d = 0;
      function f(e) {
        return Object.keys(e)
          .sort()
          .filter(function (t) {
            return void 0 !== e[t];
          })
          .map(function (t) {
            return (
              t +
              '_' +
              ('root' === t
                ? (n = e.root)
                  ? (u.has(n) || ((d += 1), u.set(n, d.toString())), u.get(n))
                  : '0'
                : e[t])
            );
            var n;
          })
          .toString();
      }
      function h(e, t, n) {
        if ((void 0 === n && (n = {}), !e)) return function () {};
        var r = (function (e) {
            var t = f(e),
              n = c.get(t);
            if (!n) {
              var r,
                i = new Map(),
                o = new IntersectionObserver(function (t) {
                  t.forEach(function (t) {
                    var n,
                      o =
                        t.isIntersecting &&
                        r.some(function (e) {
                          return t.intersectionRatio >= e;
                        });
                    e.trackVisibility &&
                      void 0 === t.isVisible &&
                      (t.isVisible = o),
                      null == (n = i.get(t.target)) ||
                        n.forEach(function (e) {
                          e(o, t);
                        });
                  });
                }, e);
              (r =
                o.thresholds ||
                (Array.isArray(e.threshold)
                  ? e.threshold
                  : [e.threshold || 0])),
                (n = { id: t, observer: o, elements: i }),
                c.set(t, n);
            }
            return n;
          })(n),
          i = r.id,
          o = r.observer,
          a = r.elements,
          s = a.get(e) || [];
        return (
          a.has(e) || a.set(e, s),
          s.push(t),
          o.observe(e),
          function () {
            s.splice(s.indexOf(t), 1),
              0 === s.length && (a.delete(e), o.unobserve(e)),
              0 === a.size && (o.disconnect(), c.delete(i));
          }
        );
      }
      function p(e) {
        return 'function' != typeof e.children;
      }
      var g = (function (e) {
        var t, n;
        function i(t) {
          var n;
          return (
            ((n = e.call(this, t) || this).node = null),
            (n._unobserveCb = null),
            (n.handleNode = function (e) {
              n.node &&
                (n.unobserve(),
                e ||
                  n.props.triggerOnce ||
                  n.props.skip ||
                  n.setState({
                    inView: !!n.props.initialInView,
                    entry: void 0,
                  })),
                (n.node = e || null),
                n.observeNode();
            }),
            (n.handleChange = function (e, t) {
              e && n.props.triggerOnce && n.unobserve(),
                p(n.props) || n.setState({ inView: e, entry: t }),
                n.props.onChange && n.props.onChange(e, t);
            }),
            (n.state = { inView: !!t.initialInView, entry: void 0 }),
            n
          );
        }
        (n = e),
          ((t = i).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var o = i.prototype;
        return (
          (o.componentDidUpdate = function (e) {
            (e.rootMargin === this.props.rootMargin &&
              e.root === this.props.root &&
              e.threshold === this.props.threshold &&
              e.skip === this.props.skip &&
              e.trackVisibility === this.props.trackVisibility &&
              e.delay === this.props.delay) ||
              (this.unobserve(), this.observeNode());
          }),
          (o.componentWillUnmount = function () {
            this.unobserve(), (this.node = null);
          }),
          (o.observeNode = function () {
            if (this.node && !this.props.skip) {
              var e = this.props,
                t = e.threshold,
                n = e.root,
                r = e.rootMargin,
                i = e.trackVisibility,
                o = e.delay;
              this._unobserveCb = h(this.node, this.handleChange, {
                threshold: t,
                root: n,
                rootMargin: r,
                trackVisibility: i,
                delay: o,
              });
            }
          }),
          (o.unobserve = function () {
            this._unobserveCb &&
              (this._unobserveCb(), (this._unobserveCb = null));
          }),
          (o.render = function () {
            if (!p(this.props)) {
              var e = this.state,
                t = e.inView,
                n = e.entry;
              return this.props.children({
                inView: t,
                entry: n,
                ref: this.handleNode,
              });
            }
            var i = this.props,
              o = i.children,
              a = i.as,
              s = i.tag,
              c = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  i = {},
                  o = Object.keys(e);
                for (r = 0; r < o.length; r++)
                  (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i;
              })(i, [
                'children',
                'as',
                'tag',
                'triggerOnce',
                'threshold',
                'root',
                'rootMargin',
                'onChange',
                'skip',
                'trackVisibility',
                'delay',
                'initialInView',
              ]);
            return (0, r.createElement)(
              a || s || 'div',
              l({ ref: this.handleNode }, c),
              o,
            );
          }),
          i
        );
      })(r.Component);
      (g.displayName = 'InView'),
        (g.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 });
      var m,
        v = n(3921),
        b = n(2058),
        y = function (e) {
          var t = (0, r.useRef)(e);
          return (t.current = e), t;
        },
        w = function (e, t) {
          var n = (0, r.useRef)(!1);
          (0, r.useEffect)(function () {
            if (n.current) return e();
            n.current = !0;
          }, t);
        },
        E = function (e) {
          return r.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                xmlnsXlink: 'http://www.w3.org/1999/xlink',
              },
              e,
            ),
            r.createElement(
              'g',
              { fill: 'none', fillRule: 'evenodd' },
              r.createElement('path', { d: 'M0 0h32v32H0z' }),
              r.createElement('path', {
                d: 'M9.779 8.888a2.668 2.668 0 000 5.334 2.668 2.668 0 000-5.334m11.145 1.597a1.776 1.776 0 00-2.714.02l-7.543 9.05-2.297-2.298a1.778 1.778 0 00-2.516 0l-2.298 2.299V7.11h24.888V19.26l-7.52-8.774zm7.52-5.152H3.556c-.982 0-1.778.795-1.778 1.778V24.89c0 .981.796 1.778 1.778 1.778h24.888c.984 0 1.778-.797 1.778-1.778V7.11c0-.983-.794-1.778-1.778-1.778z',
                fill: 'currentColor',
              }),
            ),
          );
        },
        N = [
          'className',
          'style',
          'src',
          'srcSet',
          'height',
          'radius',
          'round',
          'errorIcon',
          'loadingIcon',
          'lazyLoad',
          'alt',
          'onLoad',
          'onError',
          'showError',
          'showLoading',
          'fit',
          'width',
        ];
      !(function (e) {
        (e.LOADING = 'loading'), (e.ERROR = 'error'), (e.NONE = 'none');
      })(m || (m = {}));
      var x = r.forwardRef(function (e, t) {
          var n,
            o = e.className,
            l = e.style,
            c = e.src,
            u = e.srcSet,
            d = e.height,
            f = e.radius,
            p = e.round,
            g = e.errorIcon,
            x = e.loadingIcon,
            k = e.lazyLoad,
            O = e.alt,
            V = e.onLoad,
            C = e.onError,
            M = e.showError,
            z = void 0 === M || M,
            I = e.showLoading,
            R = void 0 === I || I,
            S = e.fit,
            j = void 0 === S ? 'none' : S,
            A = e.width,
            L = void 0 === A ? '100%' : A,
            D = (0, i.Z)(e, N),
            H = (0, v.qt)().getPrefixCls,
            _ = (0, r.useState)(k ? m.NONE : m.LOADING),
            Z = _[0],
            G = _[1],
            q = (0, r.useState)(function () {
              return !k;
            }),
            P = q[0],
            W = q[1],
            T = (function (e) {
              var t = void 0 === e ? {} : e,
                n = t.threshold,
                i = t.delay,
                o = t.trackVisibility,
                a = t.rootMargin,
                s = t.root,
                l = t.triggerOnce,
                c = t.skip,
                u = t.initialInView,
                d = (0, r.useRef)(),
                f = (0, r.useState)({ inView: !!u }),
                p = f[0],
                g = f[1],
                m = (0, r.useCallback)(
                  function (e) {
                    void 0 !== d.current && (d.current(), (d.current = void 0)),
                      c ||
                        (e &&
                          (d.current = h(
                            e,
                            function (e, t) {
                              g({ inView: e, entry: t }),
                                t.isIntersecting &&
                                  l &&
                                  d.current &&
                                  (d.current(), (d.current = void 0));
                            },
                            {
                              root: s,
                              rootMargin: a,
                              threshold: n,
                              trackVisibility: o,
                              delay: i,
                            },
                          )));
                  },
                  [Array.isArray(n) ? n.toString() : n, s, a, l, c, o, i],
                );
              (0, r.useEffect)(function () {
                d.current || !p.entry || l || c || g({ inView: !!u });
              });
              var v = [m, p.inView, p.entry];
              return (v.ref = v[0]), (v.inView = v[1]), (v.entry = v[2]), v;
            })(),
            B = T.inView,
            F = T.ref,
            X = (0, b.Z)(t, k ? F : null),
            Y = y(B),
            U = y(k),
            J = y(P),
            K = null != c ? c : u,
            Q = H('image');
          w(
            function () {
              U.current
                ? !Y.current && J.current
                  ? W(!1)
                  : Y.current && (W(!0), G(m.LOADING))
                : (W(!0), G(m.LOADING));
            },
            [K, Y, U, J],
          ),
            w(
              function () {
                !P && B && (W(!0), G(m.LOADING));
              },
              [B, P],
            );
          var $;
          return r.createElement(
            'div',
            Object.assign(
              {
                className: a()(
                  Q,
                  ((n = {}),
                  (n[Q + '-round'] = p),
                  (n[Q + '-' + j] = 'none' !== j),
                  n),
                  o,
                ),
                style: Object.assign({}, l, {
                  width: L,
                  height: d,
                  borderRadius: f,
                }),
                ref: X,
              },
              D,
            ),
            r.createElement(
              'img',
              Object.assign(
                {
                  className: Q + '-img',
                  alt: O,
                  onError: function (e) {
                    G(m.ERROR), null == C || C(e);
                  },
                  onLoad: function (e) {
                    G(m.NONE), null == V || V(e);
                  },
                  draggable: !1,
                },
                P ? { src: c, srcSet: u } : { 'data-src': c, 'data-srcset': u },
              ),
            ),
            Z !== m.NONE &&
              (($ = Q + '-placeholder'),
              Z === m.LOADING && R
                ? r.createElement(
                    'div',
                    { className: $ },
                    null != x
                      ? x
                      : r.createElement(s.ZPm, {
                          component: E,
                          className: Q + '-loading-icon',
                        }),
                  )
                : (Z === m.ERROR && z && (null != g || s.ZPm), null)),
          );
        }),
        k = (0, r.memo)(x),
        O = n(3954),
        V = n.n(O),
        C = n(7206),
        M = n.n(C),
        z = Array.from({ length: 12 }, function (e, t) {
          return t;
        }),
        I = function (e) {
          var t = e.className;
          return r.createElement(
            'div',
            { className: t },
            z.map(function (e) {
              return r.createElement('i', { key: e });
            }),
          );
        },
        R = function (e) {
          var t = e.className;
          return r.createElement(
            'svg',
            {
              className: t,
              viewBox: '0 0 50 50',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.createElement('circle', {
              fill: 'none',
              strokeWidth: '3',
              cx: '25',
              cy: '25',
              r: '22',
            }),
          );
        },
        S = [
          'type',
          'size',
          'className',
          'color',
          'textColor',
          'textSize',
          'vertical',
          'children',
        ],
        j = r.forwardRef(function (e, t) {
          var n,
            o = e.type,
            s = e.size,
            l = e.className,
            c = e.color,
            u = e.textColor,
            d = e.textSize,
            f = e.vertical,
            h = e.children,
            p = (0, i.Z)(e, S),
            g = (0, v.qt)().getPrefixCls,
            m = g('loading'),
            b = a()(m, (((n = {})[m + '-vertical'] = f), n), l);
          return r.createElement(
            'span',
            Object.assign(
              { ref: t, className: b, role: 'alert', 'aria-label': 'loading' },
              p,
            ),
            r.createElement(
              'div',
              {
                className: g('loading-spinner'),
                style: { color: c, fontSize: s },
              },
              'circle' === o
                ? r.createElement(I, { className: g('loading-ios-spinner') })
                : r.createElement(R, {
                    className: g('loading-material-spinner'),
                  }),
            ),
            h &&
              r.createElement(
                'span',
                {
                  className: g('loading-text'),
                  style: { color: u, fontSize: d },
                },
                h,
              ),
          );
        }),
        A = n(7090),
        L = [
          'href',
          'target',
          'htmlType',
          'onClick',
          'loading',
          'icon',
          'plain',
          'disabled',
          'className',
          'children',
          'block',
          'loadingText',
          'loadingType',
          'type',
          'hairline',
          'loadingSize',
          'size',
          'shape',
        ],
        D = r.forwardRef(function (e, t) {
          var n,
            o = e.href,
            s = e.target,
            l = e.htmlType,
            c = e.onClick,
            u = e.loading,
            d = e.icon,
            f = e.plain,
            h = e.disabled,
            p = e.className,
            g = e.children,
            m = e.block,
            b = e.loadingText,
            y = e.loadingType,
            w = e.type,
            E = e.hairline,
            N = void 0 === E || E,
            x = e.loadingSize,
            k = void 0 === x ? 20 : x,
            O = e.size,
            C = void 0 === O ? 'default' : O,
            z = e.shape,
            I = void 0 === z ? 'square' : z,
            R = (0, i.Z)(e, L),
            S = (0, (0, v.qt)().getPrefixCls)('button'),
            D = function (e) {
              u || h || null == c || c(e);
            },
            H = a()(
              S,
              (((n = {})[S + '-loading'] = u),
              (n[S + '-disabled'] = h),
              (n[S + '-plain'] = f),
              (n[S + '-hairline'] = N),
              (n[S + '-block'] = m),
              (n[S + '-' + C] = 'default' !== C && C),
              (n[S + '-' + w] = w),
              (n[S + '-' + I] = I),
              n),
              p,
            ),
            _ = function () {
              var e,
                t = u || !!d,
                n = u ? null : g;
              return r.createElement(
                r.Fragment,
                null,
                t &&
                  r.createElement(
                    'div',
                    { className: S + '-icon' },
                    u
                      ? r.createElement(
                          j,
                          {
                            type: y,
                            size: k,
                            color: w ? '#fff' : void 0,
                            textColor: w ? '#fff' : void 0,
                          },
                          b,
                        )
                      : d,
                  ),
                ((e = n),
                M()(e) || V()(e) ? r.createElement('span', null, n) : n),
              );
            };
          return (null != s ? s : o)
            ? r.createElement(
                A.Z,
                Object.assign(
                  {
                    component: 'a',
                    touchDisabled: h,
                    activeClassName: S + '-active',
                    className: H,
                    href: o,
                    target: s,
                    role: 'button',
                    'aria-disabled': h,
                    onClick: D,
                    ref: t,
                  },
                  R,
                ),
                _(),
              )
            : r.createElement(
                A.Z,
                Object.assign(
                  {
                    component: 'button',
                    touchDisabled: h,
                    activeClassName: S + '-active',
                    className: H,
                    disabled: h,
                    type: l,
                    'aria-disabled': h,
                    onClick: D,
                    ref: t,
                  },
                  R,
                ),
                _(),
              );
        }),
        H = function () {
          var e = (0, r.useState)(2),
            t = e[0],
            n = e[1],
            i = [
              'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG91cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
              'https://images.unsplash.com/photo-1528127269322-539801943592?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG91cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
              'https://images.unsplash.com/photo-1595614007536-6e6a8ef82139?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRvdXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            ];
          return r.createElement(
            'div',
            null,
            r.createElement(k, {
              fit: 'contain',
              src: i[0],
              height: 100,
              lazyLoad: !0,
            }),
            r.createElement(k, {
              fit: 'scale-down',
              src: i[1],
              height: 100,
              lazyLoad: !0,
            }),
            r.createElement(k, { src: i[t], height: 100, lazyLoad: !0 }),
            r.createElement(
              D,
              {
                type: 'primary',
                onClick: function () {
                  n((t + 1) % i.length);
                },
              },
              'CHANGE',
            ),
          );
        },
        _ = function (e) {
          return r.createElement(H, e);
        };
    },
    9785: function (e) {
      var t = Array.isArray;
      e.exports = t;
    },
    3954: function (e) {
      e.exports = function (e) {
        return null === e;
      };
    },
    7206: function (e, t, n) {
      var r = n(9736),
        i = n(9785),
        o = n(2360);
      e.exports = function (e) {
        return (
          'string' == typeof e || (!i(e) && o(e) && '[object String]' == r(e))
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-demo-image-tsx-1fadf3ead3c5bb1c7f27.js.map
