'use strict';
(self.webpackChunkgatsby_starter_blog =
  self.webpackChunkgatsby_starter_blog || []).push([
  [175],
  {
    7175: function (e, n, t) {
      t.r(n),
        t.d(n, {
          createIntersectionObserver: function () {
            return i;
          },
        });
      var r,
        o = new WeakMap(),
        c =
          navigator.connection ||
          navigator.mozConnection ||
          navigator.webkitConnection;
      function i(e) {
        return 'IntersectionObserver' in window
          ? (r ||
              (r = new IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    var n;
                    e.isIntersecting &&
                      (null == (n = o.get(e.target)) || n(),
                      o.delete(e.target));
                  });
                },
                {
                  rootMargin:
                    '4g' !== (null == c ? void 0 : c.effectiveType) ||
                    (null != c && c.saveData)
                      ? '2500px'
                      : '1250px',
                },
              )),
            function (n) {
              return (
                n.current && (o.set(n.current, e), r.observe(n.current)),
                function () {
                  r &&
                    n.current &&
                    (o.delete(n.current), r.unobserve(n.current));
                }
              );
            })
          : function () {
              return e(), function () {};
            };
      }
    },
  },
]);
//# sourceMappingURL=175-77e7564bde78d9f787ae.js.map
