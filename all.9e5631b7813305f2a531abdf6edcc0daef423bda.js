/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	iss released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject = (function () {
    function C() {
        if (b) return;
        try {
            var e = a.getElementsByTagName("body")[0].appendChild(U("span"));
            e.parentNode.removeChild(e);
        } catch (t) {
            return;
        }
        b = !0;
        var n = c.length;
        for (var r = 0; r < n; r++) c[r]();
    }
    function k(e) {
        b ? e() : (c[c.length] = e);
    }
    function L(t) {
        if (typeof u.addEventListener != e) u.addEventListener("load", t, !1);
        else if (typeof a.addEventListener != e) a.addEventListener("load", t, !1);
        else if (typeof u.attachEvent != e) z(u, "onload", t);
        else if (typeof u.onload == "function") {
            var n = u.onload;
            u.onload = function () {
                n(), t();
            };
        } else u.onload = t;
    }
    function A() {
        l ? O() : M();
    }
    function O() {
        var n = a.getElementsByTagName("body")[0],
            r = U(t);
        r.setAttribute("type", i);
        var s = n.appendChild(r);
        if (s) {
            var o = 0;
            (function () {
                if (typeof s.GetVariable != e) {
                    var t = s.GetVariable("$version");
                    t && ((t = t.split(" ")[1].split(",")), (T.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)]));
                } else if (o < 10) {
                    o++, setTimeout(arguments.callee, 10);
                    return;
                }
                n.removeChild(r), (s = null), M();
            })();
        } else M();
    }
    function M() {
        var t = h.length;
        if (t > 0)
            for (var n = 0; n < t; n++) {
                var r = h[n].id,
                    i = h[n].callbackFn,
                    s = { success: !1, id: r };
                if (T.pv[0] > 0) {
                    var o = R(r);
                    if (o)
                        if (W(h[n].swfVersion) && !(T.wk && T.wk < 312)) V(r, !0), i && ((s.success = !0), (s.ref = _(r)), i(s));
                        else if (h[n].expressInstall && D()) {
                            var u = {};
                            (u.data = h[n].expressInstall),
                                (u.width = o.getAttribute("width") || "0"),
                                (u.height = o.getAttribute("height") || "0"),
                                o.getAttribute("class") && (u.styleclass = o.getAttribute("class")),
                                o.getAttribute("align") && (u.align = o.getAttribute("align"));
                            var a = {},
                                f = o.getElementsByTagName("param"),
                                l = f.length;
                            for (var c = 0; c < l; c++) f[c].getAttribute("name").toLowerCase() != "movie" && (a[f[c].getAttribute("name")] = f[c].getAttribute("value"));
                            P(u, a, r, i);
                        } else H(o), i && i(s);
                } else {
                    V(r, !0);
                    if (i) {
                        var p = _(r);
                        p && typeof p.SetVariable != e && ((s.success = !0), (s.ref = p)), i(s);
                    }
                }
            }
    }
    function _(n) {
        var r = null,
            i = R(n);
        if (i && i.nodeName == "OBJECT")
            if (typeof i.SetVariable != e) r = i;
            else {
                var s = i.getElementsByTagName(t)[0];
                s && (r = s);
            }
        return r;
    }
    function D() {
        return !w && W("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312);
    }
    function P(t, n, r, i) {
        (w = !0), (g = i || null), (y = { success: !1, id: r });
        var o = R(r);
        if (o) {
            o.nodeName == "OBJECT" ? ((v = B(o)), (m = null)) : ((v = o), (m = r)), (t.id = s);
            if (typeof t.width == e || (!/%$/.test(t.width) && parseInt(t.width, 10) < 310)) t.width = "310";
            if (typeof t.height == e || (!/%$/.test(t.height) && parseInt(t.height, 10) < 137)) t.height = "137";
            a.title = a.title.slice(0, 47) + " - Flash Player Installation";
            var f = T.ie && T.win ? "ActiveX" : "PlugIn",
                l = "MMredirectURL=" + u.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + a.title;
            typeof n.flashvars != e ? (n.flashvars += "&" + l) : (n.flashvars = l);
            if (T.ie && T.win && o.readyState != 4) {
                var c = U("div");
                (r += "SWFObjectNew"),
                    c.setAttribute("id", r),
                    o.parentNode.insertBefore(c, o),
                    (o.style.display = "none"),
                    (function () {
                        o.readyState == 4 ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10);
                    })();
            }
            j(t, n, r);
        }
    }
    function H(e) {
        if (T.ie && T.win && e.readyState != 4) {
            var t = U("div");
            e.parentNode.insertBefore(t, e),
                t.parentNode.replaceChild(B(e), t),
                (e.style.display = "none"),
                (function () {
                    e.readyState == 4 ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10);
                })();
        } else e.parentNode.replaceChild(B(e), e);
    }
    function B(e) {
        var n = U("div");
        if (T.win && T.ie) n.innerHTML = e.innerHTML;
        else {
            var r = e.getElementsByTagName(t)[0];
            if (r) {
                var i = r.childNodes;
                if (i) {
                    var s = i.length;
                    for (var o = 0; o < s; o++) (i[o].nodeType != 1 || i[o].nodeName != "PARAM") && i[o].nodeType != 8 && n.appendChild(i[o].cloneNode(!0));
                }
            }
        }
        return n;
    }
    function j(n, r, s) {
        var o,
            u = R(s);
        if (T.wk && T.wk < 312) return o;
        if (u) {
            typeof n.id == e && (n.id = s);
            if (T.ie && T.win) {
                var a = "";
                for (var f in n)
                    n[f] != Object.prototype[f] && (f.toLowerCase() == "data" ? (r.movie = n[f]) : f.toLowerCase() == "styleclass" ? (a += ' class="' + n[f] + '"') : f.toLowerCase() != "classid" && (a += " " + f + '="' + n[f] + '"'));
                var l = "";
                for (var c in r) r[c] != Object.prototype[c] && (l += '<param name="' + c + '" value="' + r[c] + '" />');
                (u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>"), (p[p.length] = n.id), (o = R(n.id));
            } else {
                var h = U(t);
                h.setAttribute("type", i);
                for (var d in n) n[d] != Object.prototype[d] && (d.toLowerCase() == "styleclass" ? h.setAttribute("class", n[d]) : d.toLowerCase() != "classid" && h.setAttribute(d, n[d]));
                for (var v in r) r[v] != Object.prototype[v] && v.toLowerCase() != "movie" && F(h, v, r[v]);
                u.parentNode.replaceChild(h, u), (o = h);
            }
        }
        return o;
    }
    function F(e, t, n) {
        var r = U("param");
        r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r);
    }
    function I(e) {
        var t = R(e);
        t &&
            t.nodeName == "OBJECT" &&
            (T.ie && T.win
                ? ((t.style.display = "none"),
                  (function () {
                      t.readyState == 4 ? q(e) : setTimeout(arguments.callee, 10);
                  })())
                : t.parentNode.removeChild(t));
    }
    function q(e) {
        var t = R(e);
        if (t) {
            for (var n in t) typeof t[n] == "function" && (t[n] = null);
            t.parentNode.removeChild(t);
        }
    }
    function R(e) {
        var t = null;
        try {
            t = a.getElementById(e);
        } catch (n) {}
        return t;
    }
    function U(e) {
        return a.createElement(e);
    }
    function z(e, t, n) {
        e.attachEvent(t, n), (d[d.length] = [e, t, n]);
    }
    function W(e) {
        var t = T.pv,
            n = e.split(".");
        return (n[0] = parseInt(n[0], 10)), (n[1] = parseInt(n[1], 10) || 0), (n[2] = parseInt(n[2], 10) || 0), t[0] > n[0] || (t[0] == n[0] && t[1] > n[1]) || (t[0] == n[0] && t[1] == n[1] && t[2] >= n[2]) ? !0 : !1;
    }
    function X(n, r, i, s) {
        if (T.ie && T.mac) return;
        var o = a.getElementsByTagName("head")[0];
        if (!o) return;
        var u = i && typeof i == "string" ? i : "screen";
        s && ((E = null), (S = null));
        if (!E || S != u) {
            var f = U("style");
            f.setAttribute("type", "text/css"), f.setAttribute("media", u), (E = o.appendChild(f)), T.ie && T.win && typeof a.styleSheets != e && a.styleSheets.length > 0 && (E = a.styleSheets[a.styleSheets.length - 1]), (S = u);
        }
        T.ie && T.win ? E && typeof E.addRule == t && E.addRule(n, r) : E && typeof a.createTextNode != e && E.appendChild(a.createTextNode(n + " {" + r + "}"));
    }
    function V(e, t) {
        if (!x) return;
        var n = t ? "visible" : "hidden";
        b && R(e) ? (R(e).style.visibility = n) : X("#" + e, "visibility:" + n);
    }
    function $(t) {
        var n = /[\\\"<>\.;]/,
            r = n.exec(t) != null;
        return r && typeof encodeURIComponent != e ? encodeURIComponent(t) : t;
    }
    var e = "undefined",
        t = "object",
        n = "Shockwave Flash",
        r = "ShockwaveFlash.ShockwaveFlash",
        i = "application/x-shockwave-flash",
        s = "SWFObjectExprInst",
        o = "onreadystatechange",
        u = window,
        a = document,
        f = navigator,
        l = !1,
        c = [A],
        h = [],
        p = [],
        d = [],
        v,
        m,
        g,
        y,
        b = !1,
        w = !1,
        E,
        S,
        x = !0,
        T = (function () {
            var s = typeof a.getElementById != e && typeof a.getElementsByTagName != e && typeof a.createElement != e,
                o = f.userAgent.toLowerCase(),
                c = f.platform.toLowerCase(),
                h = c ? /win/.test(c) : /win/.test(o),
                p = c ? /mac/.test(c) : /mac/.test(o),
                d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                v = !1,
                m = [0, 0, 0],
                g = null;
            if (typeof f.plugins != e && typeof f.plugins[n] == t)
                (g = f.plugins[n].description),
                    g &&
                        (typeof f.mimeTypes == e || !f.mimeTypes[i] || !!f.mimeTypes[i].enabledPlugin) &&
                        ((l = !0),
                        (v = !1),
                        (g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1")),
                        (m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10)),
                        (m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10)),
                        (m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0));
            else if (typeof u.ActiveXObject != e)
                try {
                    var y = new ActiveXObject(r);
                    y && ((g = y.GetVariable("$version")), g && ((v = !0), (g = g.split(" ")[1].split(",")), (m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)])));
                } catch (b) {}
            return { w3: s, pv: m, wk: d, ie: v, win: h, mac: p };
        })(),
        N = (function () {
            if (!T.w3) return;
            ((typeof a.readyState != e && a.readyState == "complete") || (typeof a.readyState == e && (a.getElementsByTagName("body")[0] || a.body))) && C(),
                b ||
                    (typeof a.addEventListener != e && a.addEventListener("DOMContentLoaded", C, !1),
                    T.ie &&
                        T.win &&
                        (a.attachEvent(o, function () {
                            a.readyState == "complete" && (a.detachEvent(o, arguments.callee), C());
                        }),
                        u == top &&
                            (function () {
                                if (b) return;
                                try {
                                    a.documentElement.doScroll("left");
                                } catch (e) {
                                    setTimeout(arguments.callee, 0);
                                    return;
                                }
                                C();
                            })()),
                    T.wk &&
                        (function () {
                            if (b) return;
                            if (!/loaded|complete/.test(a.readyState)) {
                                setTimeout(arguments.callee, 0);
                                return;
                            }
                            C();
                        })(),
                    L(C));
        })(),
        J = (function () {
            T.ie &&
                T.win &&
                window.attachEvent("onunload", function () {
                    var e = d.length;
                    for (var t = 0; t < e; t++) d[t][0].detachEvent(d[t][1], d[t][2]);
                    var n = p.length;
                    for (var r = 0; r < n; r++) I(p[r]);
                    for (var i in T) T[i] = null;
                    T = null;
                    for (var s in swfobject) swfobject[s] = null;
                    swfobject = null;
                });
        })();
    return {
        registerObject: function (e, t, n, r) {
            if (T.w3 && e && t) {
                var i = {};
                (i.id = e), (i.swfVersion = t), (i.expressInstall = n), (i.callbackFn = r), (h[h.length] = i), V(e, !1);
            } else r && r({ success: !1, id: e });
        },
        getObjectById: function (e) {
            if (T.w3) return _(e);
        },
        embedSWF: function (n, r, i, s, o, u, a, f, l, c) {
            var h = { success: !1, id: r };
            T.w3 && !(T.wk && T.wk < 312) && n && r && i && s && o
                ? (V(r, !1),
                  k(function () {
                      (i += ""), (s += "");
                      var p = {};
                      if (l && typeof l === t) for (var d in l) p[d] = l[d];
                      (p.data = n), (p.width = i), (p.height = s);
                      var v = {};
                      if (f && typeof f === t) for (var m in f) v[m] = f[m];
                      if (a && typeof a === t) for (var g in a) typeof v.flashvars != e ? (v.flashvars += "&" + g + "=" + a[g]) : (v.flashvars = g + "=" + a[g]);
                      if (W(o)) {
                          var y = j(p, v, r);
                          p.id == r && V(r, !0), (h.success = !0), (h.ref = y);
                      } else {
                          if (u && D()) {
                              (p.data = u), P(p, v, r, c);
                              return;
                          }
                          V(r, !0);
                      }
                      c && c(h);
                  }))
                : c && c(h);
        },
        switchOffAutoHideShow: function () {
            x = !1;
        },
        ua: T,
        getFlashPlayerVersion: function () {
            return { major: T.pv[0], minor: T.pv[1], release: T.pv[2] };
        },
        hasFlashPlayerVersion: W,
        createSWF: function (e, t, n) {
            return T.w3 ? j(e, t, n) : undefined;
        },
        showExpressInstall: function (e, t, n, r) {
            T.w3 && D() && P(e, t, n, r);
        },
        removeSWF: function (e) {
            T.w3 && I(e);
        },
        createCSS: function (e, t, n, r) {
            T.w3 && X(e, t, n, r);
        },
        addDomLoadEvent: k,
        addLoadEvent: L,
        getQueryParamValue: function (e) {
            var t = a.location.search || a.location.hash;
            if (t) {
                /\?/.test(t) && (t = t.split("?")[1]);
                if (e == null) return $(t);
                var n = t.split("&");
                for (var r = 0; r < n.length; r++) if (n[r].substring(0, n[r].indexOf("=")) == e) return $(n[r].substring(n[r].indexOf("=") + 1));
            }
            return "";
        },
        expressInstallCallback: function () {
            if (w) {
                var e = R(s);
                e && v && (e.parentNode.replaceChild(v, e), m && (V(m, !0), T.ie && T.win && (v.style.display = "block")), g && g(y)), (w = !1);
            }
        },
    };
})();
(function () {
    function e(t, n, r) {
        if (t === n) return 0 !== t || 1 / t == 1 / n;
        if (null == t || null == n) return t === n;
        t._chain && (t = t._wrapped), n._chain && (n = n._wrapped);
        if (t.isEqual && E.isFunction(t.isEqual)) return t.isEqual(n);
        if (n.isEqual && E.isFunction(n.isEqual)) return n.isEqual(t);
        var i = a.call(t);
        if (i != a.call(n)) return !1;
        switch (i) {
            case "[object String]":
                return t == "" + n;
            case "[object Number]":
                return t != +t ? n != +n : 0 == t ? 1 / t == 1 / n : t == +n;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +n;
            case "[object RegExp]":
                return t.source == n.source && t.global == n.global && t.multiline == n.multiline && t.ignoreCase == n.ignoreCase;
        }
        if ("object" != typeof t || "object" != typeof n) return !1;
        for (var s = r.length; s--; ) if (r[s] == t) return !0;
        r.push(t);
        var s = 0,
            o = !0;
        if ("[object Array]" == i) {
            if (((s = t.length), (o = s == n.length))) for (; s-- && (o = s in t == s in n && e(t[s], n[s], r)); );
        } else {
            if ("constructor" in t != "constructor" in n || t.constructor != n.constructor) return !1;
            for (var u in t) if (E.has(t, u) && (s++, !(o = E.has(n, u) && e(t[u], n[u], r)))) break;
            if (o) {
                for (u in n) if (E.has(n, u) && !s--) break;
                o = !s;
            }
        }
        return r.pop(), o;
    }
    var t = this,
        n = t._,
        r = {},
        i = Array.prototype,
        s = Object.prototype,
        o = i.slice,
        u = i.unshift,
        a = s.toString,
        f = s.hasOwnProperty,
        l = i.forEach,
        c = i.map,
        h = i.reduce,
        p = i.reduceRight,
        d = i.filter,
        v = i.every,
        m = i.some,
        g = i.indexOf,
        y = i.lastIndexOf,
        s = Array.isArray,
        b = Object.keys,
        w = Function.prototype.bind,
        E = function (e) {
            return new _(e);
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = E), (exports._ = E)) : (t._ = E), (E.VERSION = "1.3.3");
    var S = (E.each = E.forEach = function (e, t, n) {
        if (e != null)
            if (l && e.forEach === l) e.forEach(t, n);
            else if (e.length === +e.length) {
                for (var i = 0, s = e.length; i < s; i++) if (i in e && t.call(n, e[i], i, e) === r) break;
            } else for (i in e) if (E.has(e, i) && t.call(n, e[i], i, e) === r) break;
    });
    (E.map = E.collect = function (e, t, n) {
        var r = [];
        return e == null
            ? r
            : c && e.map === c
            ? e.map(t, n)
            : (S(e, function (e, i, s) {
                  r[r.length] = t.call(n, e, i, s);
              }),
              e.length === +e.length && (r.length = e.length),
              r);
    }),
        (E.reduce = E.foldl = E.inject = function (e, t, n, r) {
            var i = arguments.length > 2;
            e == null && (e = []);
            if (h && e.reduce === h) return r && (t = E.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
            S(e, function (e, s, o) {
                i ? (n = t.call(r, n, e, s, o)) : ((n = e), (i = !0));
            });
            if (!i) throw new TypeError("Reduce of empty array with no initial value");
            return n;
        }),
        (E.reduceRight = E.foldr = function (e, t, n, r) {
            var i = arguments.length > 2;
            e == null && (e = []);
            if (p && e.reduceRight === p) return r && (t = E.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
            var s = E.toArray(e).reverse();
            return r && !i && (t = E.bind(t, r)), i ? E.reduce(s, t, n, r) : E.reduce(s, t);
        }),
        (E.find = E.detect = function (e, t, n) {
            var r;
            return (
                x(e, function (e, i, s) {
                    if (t.call(n, e, i, s)) return (r = e), !0;
                }),
                r
            );
        }),
        (E.filter = E.select = function (e, t, n) {
            var r = [];
            return e == null
                ? r
                : d && e.filter === d
                ? e.filter(t, n)
                : (S(e, function (e, i, s) {
                      t.call(n, e, i, s) && (r[r.length] = e);
                  }),
                  r);
        }),
        (E.reject = function (e, t, n) {
            var r = [];
            return e == null
                ? r
                : (S(e, function (e, i, s) {
                      t.call(n, e, i, s) || (r[r.length] = e);
                  }),
                  r);
        }),
        (E.every = E.all = function (e, t, n) {
            var i = !0;
            return e == null
                ? i
                : v && e.every === v
                ? e.every(t, n)
                : (S(e, function (e, s, o) {
                      if (!(i = i && t.call(n, e, s, o))) return r;
                  }),
                  !!i);
        });
    var x = (E.some = E.any = function (e, t, n) {
        t || (t = E.identity);
        var i = !1;
        return e == null
            ? i
            : m && e.some === m
            ? e.some(t, n)
            : (S(e, function (e, s, o) {
                  if (i || (i = t.call(n, e, s, o))) return r;
              }),
              !!i);
    });
    (E.include = E.contains = function (e, t) {
        var n = !1;
        return e == null
            ? n
            : g && e.indexOf === g
            ? e.indexOf(t) != -1
            : (n = x(e, function (e) {
                  return e === t;
              }));
    }),
        (E.invoke = function (e, t) {
            var n = o.call(arguments, 2);
            return E.map(e, function (e) {
                return (E.isFunction(t) ? t || e : e[t]).apply(e, n);
            });
        }),
        (E.pluck = function (e, t) {
            return E.map(e, function (e) {
                return e[t];
            });
        }),
        (E.max = function (e, t, n) {
            if (!t && E.isArray(e) && e[0] === +e[0]) return Math.max.apply(Math, e);
            if (!t && E.isEmpty(e)) return -Infinity;
            var r = { computed: -Infinity };
            return (
                S(e, function (e, i, s) {
                    (i = t ? t.call(n, e, i, s) : e), i >= r.computed && (r = { value: e, computed: i });
                }),
                r.value
            );
        }),
        (E.min = function (e, t, n) {
            if (!t && E.isArray(e) && e[0] === +e[0]) return Math.min.apply(Math, e);
            if (!t && E.isEmpty(e)) return Infinity;
            var r = { computed: Infinity };
            return (
                S(e, function (e, i, s) {
                    (i = t ? t.call(n, e, i, s) : e), i < r.computed && (r = { value: e, computed: i });
                }),
                r.value
            );
        }),
        (E.shuffle = function (e) {
            var t = [],
                n;
            return (
                S(e, function (e, r) {
                    (n = Math.floor(Math.random() * (r + 1))), (t[r] = t[n]), (t[n] = e);
                }),
                t
            );
        }),
        (E.sortBy = function (e, t, n) {
            var r = E.isFunction(t)
                ? t
                : function (e) {
                      return e[t];
                  };
            return E.pluck(
                E.map(e, function (e, t, i) {
                    return { value: e, criteria: r.call(n, e, t, i) };
                }).sort(function (e, t) {
                    var n = e.criteria,
                        r = t.criteria;
                    return n === void 0 ? 1 : r === void 0 ? -1 : n < r ? -1 : n > r ? 1 : 0;
                }),
                "value"
            );
        }),
        (E.groupBy = function (e, t) {
            var n = {},
                r = E.isFunction(t)
                    ? t
                    : function (e) {
                          return e[t];
                      };
            return (
                S(e, function (e, t) {
                    var i = r(e, t);
                    (n[i] || (n[i] = [])).push(e);
                }),
                n
            );
        }),
        (E.sortedIndex = function (e, t, n) {
            n || (n = E.identity);
            for (var r = 0, i = e.length; r < i; ) {
                var s = (r + i) >> 1;
                n(e[s]) < n(t) ? (r = s + 1) : (i = s);
            }
            return r;
        }),
        (E.toArray = function (e) {
            return e ? (E.isArray(e) || E.isArguments(e) ? o.call(e) : e.toArray && E.isFunction(e.toArray) ? e.toArray() : E.values(e)) : [];
        }),
        (E.size = function (e) {
            return E.isArray(e) ? e.length : E.keys(e).length;
        }),
        (E.first = E.head = E.take = function (e, t, n) {
            return t != null && !n ? o.call(e, 0, t) : e[0];
        }),
        (E.initial = function (e, t, n) {
            return o.call(e, 0, e.length - (t == null || n ? 1 : t));
        }),
        (E.last = function (e, t, n) {
            return t != null && !n ? o.call(e, Math.max(e.length - t, 0)) : e[e.length - 1];
        }),
        (E.rest = E.tail = function (e, t, n) {
            return o.call(e, t == null || n ? 1 : t);
        }),
        (E.compact = function (e) {
            return E.filter(e, function (e) {
                return !!e;
            });
        }),
        (E.flatten = function (e, t) {
            return E.reduce(
                e,
                function (e, n) {
                    return E.isArray(n) ? e.concat(t ? n : E.flatten(n)) : ((e[e.length] = n), e);
                },
                []
            );
        }),
        (E.without = function (e) {
            return E.difference(e, o.call(arguments, 1));
        }),
        (E.uniq = E.unique = function (e, t, n) {
            var n = n ? E.map(e, n) : e,
                r = [];
            return (
                e.length < 3 && (t = !0),
                E.reduce(
                    n,
                    function (n, i, s) {
                        if (t ? E.last(n) !== i || !n.length : !E.include(n, i)) n.push(i), r.push(e[s]);
                        return n;
                    },
                    []
                ),
                r
            );
        }),
        (E.union = function () {
            return E.uniq(E.flatten(arguments, !0));
        }),
        (E.intersection = E.intersect = function (e) {
            var t = o.call(arguments, 1);
            return E.filter(E.uniq(e), function (e) {
                return E.every(t, function (t) {
                    return E.indexOf(t, e) >= 0;
                });
            });
        }),
        (E.difference = function (e) {
            var t = E.flatten(o.call(arguments, 1), !0);
            return E.filter(e, function (e) {
                return !E.include(t, e);
            });
        }),
        (E.zip = function () {
            for (var e = o.call(arguments), t = E.max(E.pluck(e, "length")), n = Array(t), r = 0; r < t; r++) n[r] = E.pluck(e, "" + r);
            return n;
        }),
        (E.indexOf = function (e, t, n) {
            if (e == null) return -1;
            var r;
            if (n) return (n = E.sortedIndex(e, t)), e[n] === t ? n : -1;
            if (g && e.indexOf === g) return e.indexOf(t);
            n = 0;
            for (r = e.length; n < r; n++) if (n in e && e[n] === t) return n;
            return -1;
        }),
        (E.lastIndexOf = function (e, t) {
            if (e == null) return -1;
            if (y && e.lastIndexOf === y) return e.lastIndexOf(t);
            for (var n = e.length; n--; ) if (n in e && e[n] === t) return n;
            return -1;
        }),
        (E.range = function (e, t, n) {
            arguments.length <= 1 && ((t = e || 0), (e = 0));
            for (var n = arguments[2] || 1, r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = Array(r); i < r; ) (s[i++] = e), (e += n);
            return s;
        });
    var T = function () {};
    (E.bind = function (e, t) {
        var n, r;
        if (e.bind === w && w) return w.apply(e, o.call(arguments, 1));
        if (!E.isFunction(e)) throw new TypeError();
        return (
            (r = o.call(arguments, 2)),
            (n = function () {
                if (this instanceof n) {
                    T.prototype = e.prototype;
                    var i = new T(),
                        s = e.apply(i, r.concat(o.call(arguments)));
                    return Object(s) === s ? s : i;
                }
                return e.apply(t, r.concat(o.call(arguments)));
            })
        );
    }),
        (E.bindAll = function (e) {
            var t = o.call(arguments, 1);
            return (
                t.length == 0 && (t = E.functions(e)),
                S(t, function (t) {
                    e[t] = E.bind(e[t], e);
                }),
                e
            );
        }),
        (E.memoize = function (e, t) {
            var n = {};
            return (
                t || (t = E.identity),
                function () {
                    var r = t.apply(this, arguments);
                    return E.has(n, r) ? n[r] : (n[r] = e.apply(this, arguments));
                }
            );
        }),
        (E.delay = function (e, t) {
            var n = o.call(arguments, 2);
            return setTimeout(function () {
                return e.apply(null, n);
            }, t);
        }),
        (E.defer = function (e) {
            return E.delay.apply(E, [e, 1].concat(o.call(arguments, 1)));
        }),
        (E.throttle = function (e, t) {
            var n,
                r,
                i,
                s,
                o,
                u,
                a = E.debounce(function () {
                    o = s = !1;
                }, t);
            return function () {
                return (
                    (n = this),
                    (r = arguments),
                    i ||
                        (i = setTimeout(function () {
                            (i = null), o && e.apply(n, r), a();
                        }, t)),
                    s ? (o = !0) : (u = e.apply(n, r)),
                    a(),
                    (s = !0),
                    u
                );
            };
        }),
        (E.debounce = function (e, t, n) {
            var r;
            return function () {
                var i = this,
                    s = arguments;
                n && !r && e.apply(i, s),
                    clearTimeout(r),
                    (r = setTimeout(function () {
                        (r = null), n || e.apply(i, s);
                    }, t));
            };
        }),
        (E.once = function (e) {
            var t = !1,
                n;
            return function () {
                return t ? n : ((t = !0), (n = e.apply(this, arguments)));
            };
        }),
        (E.wrap = function (e, t) {
            return function () {
                var n = [e].concat(o.call(arguments, 0));
                return t.apply(this, n);
            };
        }),
        (E.compose = function () {
            var e = arguments;
            return function () {
                for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                return t[0];
            };
        }),
        (E.after = function (e, t) {
            return e <= 0
                ? t()
                : function () {
                      if (--e < 1) return t.apply(this, arguments);
                  };
        }),
        (E.keys =
            b ||
            function (e) {
                if (e !== Object(e)) throw new TypeError("Invalid object");
                var t = [],
                    n;
                for (n in e) E.has(e, n) && (t[t.length] = n);
                return t;
            }),
        (E.values = function (e) {
            return E.map(e, E.identity);
        }),
        (E.functions = E.methods = function (e) {
            var t = [],
                n;
            for (n in e) E.isFunction(e[n]) && t.push(n);
            return t.sort();
        }),
        (E.extend = function (e) {
            return (
                S(o.call(arguments, 1), function (t) {
                    for (var n in t) e[n] = t[n];
                }),
                e
            );
        }),
        (E.pick = function (e) {
            var t = {};
            return (
                S(E.flatten(o.call(arguments, 1)), function (n) {
                    n in e && (t[n] = e[n]);
                }),
                t
            );
        }),
        (E.defaults = function (e) {
            return (
                S(o.call(arguments, 1), function (t) {
                    for (var n in t) e[n] == null && (e[n] = t[n]);
                }),
                e
            );
        }),
        (E.clone = function (e) {
            return E.isObject(e) ? (E.isArray(e) ? e.slice() : E.extend({}, e)) : e;
        }),
        (E.tap = function (e, t) {
            return t(e), e;
        }),
        (E.isEqual = function (t, n) {
            return e(t, n, []);
        }),
        (E.isEmpty = function (e) {
            if (e == null) return !0;
            if (E.isArray(e) || E.isString(e)) return e.length === 0;
            for (var t in e) if (E.has(e, t)) return !1;
            return !0;
        }),
        (E.isElement = function (e) {
            return !!e && e.nodeType == 1;
        }),
        (E.isArray =
            s ||
            function (e) {
                return a.call(e) == "[object Array]";
            }),
        (E.isObject = function (e) {
            return e === Object(e);
        }),
        (E.isArguments = function (e) {
            return a.call(e) == "[object Arguments]";
        }),
        E.isArguments(arguments) ||
            (E.isArguments = function (e) {
                return !!e && !!E.has(e, "callee");
            }),
        (E.isFunction = function (e) {
            return a.call(e) == "[object Function]";
        }),
        (E.isString = function (e) {
            return a.call(e) == "[object String]";
        }),
        (E.isNumber = function (e) {
            return a.call(e) == "[object Number]";
        }),
        (E.isFinite = function (e) {
            return E.isNumber(e) && isFinite(e);
        }),
        (E.isNaN = function (e) {
            return e !== e;
        }),
        (E.isBoolean = function (e) {
            return e === !0 || e === !1 || a.call(e) == "[object Boolean]";
        }),
        (E.isDate = function (e) {
            return a.call(e) == "[object Date]";
        }),
        (E.isRegExp = function (e) {
            return a.call(e) == "[object RegExp]";
        }),
        (E.isNull = function (e) {
            return e === null;
        }),
        (E.isUndefined = function (e) {
            return e === void 0;
        }),
        (E.has = function (e, t) {
            return f.call(e, t);
        }),
        (E.noConflict = function () {
            return (t._ = n), this;
        }),
        (E.identity = function (e) {
            return e;
        }),
        (E.times = function (e, t, n) {
            for (var r = 0; r < e; r++) t.call(n, r);
        }),
        (E.escape = function (e) {
            return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
        }),
        (E.result = function (e, t) {
            if (e == null) return null;
            var n = e[t];
            return E.isFunction(n) ? n.call(e) : n;
        }),
        (E.mixin = function (e) {
            S(E.functions(e), function (t) {
                P(t, (E[t] = e[t]));
            });
        });
    var N = 0;
    (E.uniqueId = function (e) {
        var t = N++;
        return e ? e + t : t;
    }),
        (E.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
    var C = /.^/,
        k = { "\\": "\\", "'": "'", r: "\r", n: "\n", t: "	", u2028: "\u2028", u2029: "\u2029" },
        L;
    for (L in k) k[k[L]] = L;
    var A = /\\|'|\r|\n|\t|\u2028|\u2029/g,
        O = /\\(\\|'|r|n|t|u2028|u2029)/g,
        M = function (e) {
            return e.replace(O, function (e, t) {
                return k[t];
            });
        };
    (E.template = function (e, t, n) {
        (n = E.defaults(n || {}, E.templateSettings)),
            (e =
                "__p+='" +
                e
                    .replace(A, function (e) {
                        return "\\" + k[e];
                    })
                    .replace(n.escape || C, function (e, t) {
                        return "'+\n_.escape(" + M(t) + ")+\n'";
                    })
                    .replace(n.interpolate || C, function (e, t) {
                        return "'+\n(" + M(t) + ")+\n'";
                    })
                    .replace(n.evaluate || C, function (e, t) {
                        return "';\n" + M(t) + "\n;__p+='";
                    }) +
                "';\n"),
            n.variable || (e = "with(obj||{}){\n" + e + "}\n");
        var e = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + e + "return __p;\n",
            r = new Function(n.variable || "obj", "_", e);
        return t
            ? r(t, E)
            : ((t = function (e) {
                  return r.call(this, e, E);
              }),
              (t.source = "function(" + (n.variable || "obj") + "){\n" + e + "}"),
              t);
    }),
        (E.chain = function (e) {
            return E(e).chain();
        });
    var _ = function (e) {
        this._wrapped = e;
    };
    E.prototype = _.prototype;
    var D = function (e, t) {
            return t ? E(e).chain() : e;
        },
        P = function (e, t) {
            _.prototype[e] = function () {
                var e = o.call(arguments);
                return u.call(e, this._wrapped), D(t.apply(E, e), this._chain);
            };
        };
    E.mixin(E),
        S("pop,push,reverse,shift,sort,splice,unshift".split(","), function (e) {
            var t = i[e];
            _.prototype[e] = function () {
                var n = this._wrapped;
                t.apply(n, arguments);
                var r = n.length;
                return (e == "shift" || e == "splice") && r === 0 && delete n[0], D(n, this._chain);
            };
        }),
        S(["concat", "join", "slice"], function (e) {
            var t = i[e];
            _.prototype[e] = function () {
                return D(t.apply(this._wrapped, arguments), this._chain);
            };
        }),
        (_.prototype.chain = function () {
            return (this._chain = !0), this;
        }),
        (_.prototype.value = function () {
            return this._wrapped;
        });
}.call(this),
    function () {
        var e = this,
            t = e.Backbone,
            n = Array.prototype.slice,
            r = Array.prototype.splice,
            i;
        (i = "undefined" != typeof exports ? exports : (e.Backbone = {})), (i.VERSION = "0.9.2");
        var s = e._;
        !s && "undefined" != typeof require && (s = require("underscore"));
        var o = e.jQuery || e.Zepto || e.ender;
        (i.setDomLibrary = function (e) {
            o = e;
        }),
            (i.noConflict = function () {
                return (e.Backbone = t), this;
            }),
            (i.emulateHTTP = !1),
            (i.emulateJSON = !1);
        var u = /\s+/,
            a = (i.Events = {
                on: function (e, t, n) {
                    var r, i, s, o, a;
                    if (!t) return this;
                    e = e.split(u);
                    for (r = this._callbacks || (this._callbacks = {}); (i = e.shift()); ) (s = (a = r[i]) ? a.tail : {}), (s.next = o = {}), (s.context = n), (s.callback = t), (r[i] = { tail: o, next: a ? a.next : s });
                    return this;
                },
                off: function (e, t, n) {
                    var r, i, o, a, f, l;
                    if ((i = this._callbacks)) {
                        if (!e && !t && !n) return delete this._callbacks, this;
                        for (e = e ? e.split(u) : s.keys(i); (r = e.shift()); )
                            if (((o = i[r]), delete i[r], o && (t || n))) for (a = o.tail; (o = o.next) !== a; ) ((f = o.callback), (l = o.context), (t && f !== t) || (n && l !== n)) && this.on(r, f, l);
                        return this;
                    }
                },
                trigger: function (e) {
                    var t, r, i, s, o, a;
                    if (!(i = this._callbacks)) return this;
                    (o = i.all), (e = e.split(u));
                    for (a = n.call(arguments, 1); (t = e.shift()); ) {
                        if ((r = i[t])) for (s = r.tail; (r = r.next) !== s; ) r.callback.apply(r.context || this, a);
                        if ((r = o)) {
                            s = r.tail;
                            for (t = [t].concat(a); (r = r.next) !== s; ) r.callback.apply(r.context || this, t);
                        }
                    }
                    return this;
                },
            });
        (a.bind = a.on), (a.unbind = a.off);
        var f = (i.Model = function (e, t) {
            var n;
            e || (e = {}), t && t.parse && (e = this.parse(e));
            if ((n = T(this, "defaults"))) e = s.extend({}, n, e);
            t && t.collection && (this.collection = t.collection),
                (this.attributes = {}),
                (this._escapedAttributes = {}),
                (this.cid = s.uniqueId("c")),
                (this.changed = {}),
                (this._silent = {}),
                (this._pending = {}),
                this.set(e, { silent: !0 }),
                (this.changed = {}),
                (this._silent = {}),
                (this._pending = {}),
                (this._previousAttributes = s.clone(this.attributes)),
                this.initialize.apply(this, arguments);
        });
        s.extend(f.prototype, a, {
            changed: null,
            _silent: null,
            _pending: null,
            idAttribute: "id",
            initialize: function () {},
            toJSON: function () {
                return s.clone(this.attributes);
            },
            get: function (e) {
                return this.attributes[e];
            },
            escape: function (e) {
                var t;
                return (t = this._escapedAttributes[e]) ? t : ((t = this.get(e)), (this._escapedAttributes[e] = s.escape(null == t ? "" : "" + t)));
            },
            has: function (e) {
                return null != this.get(e);
            },
            set: function (e, t, n) {
                var r, i;
                s.isObject(e) || null == e ? ((r = e), (n = t)) : ((r = {}), (r[e] = t)), n || (n = {});
                if (!r) return this;
                r instanceof f && (r = r.attributes);
                if (n.unset) for (i in r) r[i] = void 0;
                if (!this._validate(r, n)) return !1;
                this.idAttribute in r && (this.id = r[this.idAttribute]);
                var t = (n.changes = {}),
                    o = this.attributes,
                    u = this._escapedAttributes,
                    a = this._previousAttributes || {};
                for (i in r) {
                    e = r[i];
                    if (!s.isEqual(o[i], e) || (n.unset && s.has(o, i))) delete u[i], ((n.silent ? this._silent : t)[i] = !0);
                    n.unset ? delete o[i] : (o[i] = e), !s.isEqual(a[i], e) || s.has(o, i) != s.has(a, i) ? ((this.changed[i] = e), n.silent || (this._pending[i] = !0)) : (delete this.changed[i], delete this._pending[i]);
                }
                return n.silent || this.change(n), this;
            },
            unset: function (e, t) {
                return ((t || (t = {})).unset = !0), this.set(e, null, t);
            },
            clear: function (e) {
                return ((e || (e = {})).unset = !0), this.set(s.clone(this.attributes), e);
            },
            fetch: function (e) {
                var e = e ? s.clone(e) : {},
                    t = this,
                    n = e.success;
                return (
                    (e.success = function (r, i, s) {
                        if (!t.set(t.parse(r, s), e)) return !1;
                        n && n(t, r);
                    }),
                    (e.error = i.wrapError(e.error, t, e)),
                    (this.sync || i.sync).call(this, "read", this, e)
                );
            },
            save: function (e, t, n) {
                var r, o;
                s.isObject(e) || null == e ? ((r = e), (n = t)) : ((r = {}), (r[e] = t)), (n = n ? s.clone(n) : {});
                if (n.wait) {
                    if (!this._validate(r, n)) return !1;
                    o = s.clone(this.attributes);
                }
                e = s.extend({}, n, { silent: !0 });
                if (r && !this.set(r, n.wait ? e : n)) return !1;
                var u = this,
                    a = n.success;
                return (
                    (n.success = function (e, t, i) {
                        (t = u.parse(e, i)), n.wait && (delete n.wait, (t = s.extend(r || {}, t)));
                        if (!u.set(t, n)) return !1;
                        a ? a(u, e) : u.trigger("sync", u, e, n);
                    }),
                    (n.error = i.wrapError(n.error, u, n)),
                    (t = this.isNew() ? "create" : "update"),
                    (t = (this.sync || i.sync).call(this, t, this, n)),
                    n.wait && this.set(o, e),
                    t
                );
            },
            destroy: function (e) {
                var e = e ? s.clone(e) : {},
                    t = this,
                    n = e.success,
                    r = function () {
                        t.trigger("destroy", t, t.collection, e);
                    };
                if (this.isNew()) return r(), !1;
                (e.success = function (i) {
                    e.wait && r(), n ? n(t, i) : t.trigger("sync", t, i, e);
                }),
                    (e.error = i.wrapError(e.error, t, e));
                var o = (this.sync || i.sync).call(this, "delete", this, e);
                return e.wait || r(), o;
            },
            url: function () {
                var e = T(this, "urlRoot") || T(this.collection, "url") || N();
                return this.isNew() ? e : e + ("/" == e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id);
            },
            parse: function (e) {
                return e;
            },
            clone: function () {
                return new this.constructor(this.attributes);
            },
            isNew: function () {
                return null == this.id;
            },
            change: function (e) {
                e || (e = {});
                var t = this._changing;
                this._changing = !0;
                for (var n in this._silent) this._pending[n] = !0;
                var r = s.extend({}, e.changes, this._silent);
                this._silent = {};
                for (n in r) this.trigger("change:" + n, this, this.get(n), e);
                if (t) return this;
                for (; !s.isEmpty(this._pending); ) {
                    (this._pending = {}), this.trigger("change", this, e);
                    for (n in this.changed) !this._pending[n] && !this._silent[n] && delete this.changed[n];
                    this._previousAttributes = s.clone(this.attributes);
                }
                return (this._changing = !1), this;
            },
            hasChanged: function (e) {
                return arguments.length ? s.has(this.changed, e) : !s.isEmpty(this.changed);
            },
            changedAttributes: function (e) {
                if (!e) return this.hasChanged() ? s.clone(this.changed) : !1;
                var t,
                    n = !1,
                    r = this._previousAttributes,
                    i;
                for (i in e) s.isEqual(r[i], (t = e[i])) || ((n || (n = {}))[i] = t);
                return n;
            },
            previous: function (e) {
                return !arguments.length || !this._previousAttributes ? null : this._previousAttributes[e];
            },
            previousAttributes: function () {
                return s.clone(this._previousAttributes);
            },
            isValid: function () {
                return !this.validate(this.attributes);
            },
            _validate: function (e, t) {
                if (t.silent || !this.validate) return !0;
                var e = s.extend({}, this.attributes, e),
                    n = this.validate(e, t);
                return n ? (t && t.error ? t.error(this, n, t) : this.trigger("error", this, n, t), !1) : !0;
            },
        });
        var l = (i.Collection = function (e, t) {
            t || (t = {}), t.model && (this.model = t.model), t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, { silent: !0, parse: t.parse });
        });
        s.extend(l.prototype, a, {
            model: f,
            initialize: function () {},
            toJSON: function (e) {
                return this.map(function (t) {
                    return t.toJSON(e);
                });
            },
            add: function (e, t) {
                var n,
                    i,
                    o,
                    u,
                    a,
                    f = {},
                    l = {},
                    c = [];
                t || (t = {}), (e = s.isArray(e) ? e.slice() : [e]), (n = 0);
                for (i = e.length; n < i; n++) {
                    if (!(o = e[n] = this._prepareModel(e[n], t))) throw Error("Can't add an invalid model to a collection");
                    (u = o.cid), (a = o.id), f[u] || this._byCid[u] || (null != a && (l[a] || this._byId[a])) ? c.push(n) : (f[u] = l[a] = o);
                }
                for (n = c.length; n--; ) e.splice(c[n], 1);
                n = 0;
                for (i = e.length; n < i; n++) (o = e[n]).on("all", this._onModelEvent, this), (this._byCid[o.cid] = o), null != o.id && (this._byId[o.id] = o);
                (this.length += i), r.apply(this.models, [null != t.at ? t.at : this.models.length, 0].concat(e)), this.comparator && this.sort({ silent: !0 });
                if (t.silent) return this;
                n = 0;
                for (i = this.models.length; n < i; n++) f[(o = this.models[n]).cid] && ((t.index = n), o.trigger("add", o, this, t));
                return this;
            },
            remove: function (e, t) {
                var n, r, i, o;
                t || (t = {}), (e = s.isArray(e) ? e.slice() : [e]), (n = 0);
                for (r = e.length; n < r; n++)
                    if ((o = this.getByCid(e[n]) || this.get(e[n])))
                        delete this._byId[o.id], delete this._byCid[o.cid], (i = this.indexOf(o)), this.models.splice(i, 1), this.length--, t.silent || ((t.index = i), o.trigger("remove", o, this, t)), this._removeReference(o);
                return this;
            },
            push: function (e, t) {
                return (e = this._prepareModel(e, t)), this.add(e, t), e;
            },
            pop: function (e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e), t;
            },
            unshift: function (e, t) {
                return (e = this._prepareModel(e, t)), this.add(e, s.extend({ at: 0 }, t)), e;
            },
            shift: function (e) {
                var t = this.at(0);
                return this.remove(t, e), t;
            },
            get: function (e) {
                return null == e ? void 0 : this._byId[null != e.id ? e.id : e];
            },
            getByCid: function (e) {
                return e && this._byCid[e.cid || e];
            },
            at: function (e) {
                return this.models[e];
            },
            where: function (e) {
                return s.isEmpty(e)
                    ? []
                    : this.filter(function (t) {
                          for (var n in e) if (e[n] !== t.get(n)) return !1;
                          return !0;
                      });
            },
            sort: function (e) {
                e || (e = {});
                if (!this.comparator) throw Error("Cannot sort a set without a comparator");
                var t = s.bind(this.comparator, this);
                return 1 == this.comparator.length ? (this.models = this.sortBy(t)) : this.models.sort(t), e.silent || this.trigger("reset", this, e), this;
            },
            pluck: function (e) {
                return s.map(this.models, function (t) {
                    return t.get(e);
                });
            },
            reset: function (e, t) {
                e || (e = []), t || (t = {});
                for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
                return this._reset(), this.add(e, s.extend({ silent: !0 }, t)), t.silent || this.trigger("reset", this, t), this;
            },
            fetch: function (e) {
                (e = e ? s.clone(e) : {}), void 0 === e.parse && (e.parse = !0);
                var t = this,
                    n = e.success;
                return (
                    (e.success = function (r, i, s) {
                        t[e.add ? "add" : "reset"](t.parse(r, s), e), n && n(t, r);
                    }),
                    (e.error = i.wrapError(e.error, t, e)),
                    (this.sync || i.sync).call(this, "read", this, e)
                );
            },
            create: function (e, t) {
                var n = this,
                    t = t ? s.clone(t) : {},
                    e = this._prepareModel(e, t);
                if (!e) return !1;
                t.wait || n.add(e, t);
                var r = t.success;
                return (
                    (t.success = function (i, s) {
                        t.wait && n.add(i, t), r ? r(i, s) : i.trigger("sync", e, s, t);
                    }),
                    e.save(null, t),
                    e
                );
            },
            parse: function (e) {
                return e;
            },
            chain: function () {
                return s(this.models).chain();
            },
            _reset: function () {
                (this.length = 0), (this.models = []), (this._byId = {}), (this._byCid = {});
            },
            _prepareModel: function (e, t) {
                return t || (t = {}), e instanceof f ? e.collection || (e.collection = this) : ((t.collection = this), (e = new this.model(e, t)), e._validate(e.attributes, t) || (e = !1)), e;
            },
            _removeReference: function (e) {
                this == e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
            },
            _onModelEvent: function (e, t, n, r) {
                (("add" == e || "remove" == e) && n != this) ||
                    ("destroy" == e && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], (this._byId[t.id] = t)), this.trigger.apply(this, arguments));
            },
        }),
            s.each(
                "forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(
                    ","
                ),
                function (e) {
                    l.prototype[e] = function () {
                        return s[e].apply(s, [this.models].concat(s.toArray(arguments)));
                    };
                }
            );
        var c = (i.Router = function (e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
            }),
            h = /:\w+/g,
            p = /\*\w+/g,
            d = /[-[\]{}()+?.,\\^$|#\s]/g;
        s.extend(c.prototype, a, {
            initialize: function () {},
            route: function (e, t, n) {
                return (
                    i.history || (i.history = new v()),
                    s.isRegExp(e) || (e = this._routeToRegExp(e)),
                    n || (n = this[t]),
                    i.history.route(
                        e,
                        s.bind(function (r) {
                            (r = this._extractParameters(e, r)), n && n.apply(this, r), this.trigger.apply(this, ["route:" + t].concat(r)), i.history.trigger("route", this, t, r);
                        }, this)
                    ),
                    this
                );
            },
            navigate: function (e, t) {
                i.history.navigate(e, t);
            },
            _bindRoutes: function () {
                if (this.routes) {
                    var e = [],
                        t;
                    for (t in this.routes) e.unshift([t, this.routes[t]]);
                    t = 0;
                    for (var n = e.length; t < n; t++) this.route(e[t][0], e[t][1], this[e[t][1]]);
                }
            },
            _routeToRegExp: function (e) {
                return (e = e.replace(d, "\\$&").replace(h, "([^/]+)").replace(p, "(.*?)")), RegExp("^" + e + "$");
            },
            _extractParameters: function (e, t) {
                return e.exec(t).slice(1);
            },
        });
        var v = (i.History = function () {
                (this.handlers = []), s.bindAll(this, "checkUrl");
            }),
            m = /^[#\/]/,
            g = /msie [\w.]+/;
        (v.started = !1),
            s.extend(v.prototype, a, {
                interval: 50,
                getHash: function (e) {
                    return (e = (e ? e.location : window.location).href.match(/#(.*)$/)) ? e[1] : "";
                },
                getFragment: function (e, t) {
                    if (null == e)
                        if (this._hasPushState || t) {
                            var e = window.location.pathname,
                                n = window.location.search;
                            n && (e += n);
                        } else e = this.getHash();
                    return e.indexOf(this.options.root) || (e = e.substr(this.options.root.length)), e.replace(m, "");
                },
                start: function (e) {
                    if (v.started) throw Error("Backbone.history has already been started");
                    (v.started = !0),
                        (this.options = s.extend({}, { root: "/" }, this.options, e)),
                        (this._wantsHashChange = !1 !== this.options.hashChange),
                        (this._wantsPushState = !!this.options.pushState),
                        (this._hasPushState = !(!this.options.pushState || !window.history || !window.history.pushState));
                    var e = this.getFragment(),
                        t = document.documentMode;
                    if ((t = g.exec(navigator.userAgent.toLowerCase()) && (!t || 7 >= t))) (this.iframe = o('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow), this.navigate(e);
                    this._hasPushState
                        ? o(window).bind("popstate", this.checkUrl)
                        : this._wantsHashChange && "onhashchange" in window && !t
                        ? o(window).bind("hashchange", this.checkUrl)
                        : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                        (this.fragment = e),
                        (e = window.location),
                        (t = e.pathname == this.options.root);
                    if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !t) return (this.fragment = this.getFragment(null, !0)), window.location.replace(this.options.root + "#" + this.fragment), !0;
                    this._wantsPushState &&
                        this._hasPushState &&
                        t &&
                        e.hash &&
                        ((this.fragment = this.getHash().replace(m, "")), window.history.replaceState({}, document.title, e.protocol + "//" + e.host + this.options.root + this.fragment));
                    if (!this.options.silent) return this.loadUrl();
                },
                stop: function () {
                    o(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), (v.started = !1);
                },
                route: function (e, t) {
                    this.handlers.unshift({ route: e, callback: t });
                },
                checkUrl: function () {
                    var e = this.getFragment();
                    e == this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe)));
                    if (e == this.fragment) return !1;
                    this.iframe && this.navigate(e), this.loadUrl() || this.loadUrl(this.getHash());
                },
                loadUrl: function (e) {
                    var t = (this.fragment = this.getFragment(e));
                    return s.any(this.handlers, function (e) {
                        if (e.route.test(t)) return e.callback(t), !0;
                    });
                },
                navigate: function (e, t) {
                    if (!v.started) return !1;
                    if (!t || !0 === t) t = { trigger: t };
                    var n = (e || "").replace(m, "");
                    this.fragment != n &&
                        (this._hasPushState
                            ? (0 != n.indexOf(this.options.root) && (n = this.options.root + n), (this.fragment = n), window.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n))
                            : this._wantsHashChange
                            ? ((this.fragment = n),
                              this._updateHash(window.location, n, t.replace),
                              this.iframe && n != this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, n, t.replace)))
                            : window.location.assign(this.options.root + e),
                        t.trigger && this.loadUrl(e));
                },
                _updateHash: function (e, t, n) {
                    n ? e.replace(e.toString().replace(/(javascript:|#).*$/, "") + "#" + t) : (e.hash = t);
                },
            });
        var y = (i.View = function (e) {
                (this.cid = s.uniqueId("view")), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents();
            }),
            b = /^(\S+)\s*(.*)$/,
            w = "model,collection,el,id,attributes,className,tagName".split(",");
        s.extend(y.prototype, a, {
            tagName: "div",
            $: function (e) {
                return this.$el.find(e);
            },
            initialize: function () {},
            render: function () {
                return this;
            },
            remove: function () {
                return this.$el.remove(), this;
            },
            make: function (e, t, n) {
                return (e = document.createElement(e)), t && o(e).attr(t), n && o(e).html(n), e;
            },
            setElement: function (e, t) {
                return this.$el && this.undelegateEvents(), (this.$el = e instanceof o ? e : o(e)), (this.el = this.$el[0]), !1 !== t && this.delegateEvents(), this;
            },
            delegateEvents: function (e) {
                if (e || (e = T(this, "events"))) {
                    this.undelegateEvents();
                    for (var t in e) {
                        var n = e[t];
                        s.isFunction(n) || (n = this[e[t]]);
                        if (!n) throw Error('Method "' + e[t] + '" does not exist');
                        var r = t.match(b),
                            i = r[1],
                            r = r[2],
                            n = s.bind(n, this),
                            i = i + (".delegateEvents" + this.cid);
                        "" === r ? this.$el.bind(i, n) : this.$el.delegate(r, i, n);
                    }
                }
            },
            undelegateEvents: function () {
                this.$el.unbind(".delegateEvents" + this.cid);
            },
            _configure: function (e) {
                this.options && (e = s.extend({}, this.options, e));
                for (var t = 0, n = w.length; t < n; t++) {
                    var r = w[t];
                    e[r] && (this[r] = e[r]);
                }
                this.options = e;
            },
            _ensureElement: function () {
                if (this.el) this.setElement(this.el, !1);
                else {
                    var e = T(this, "attributes") || {};
                    this.id && (e.id = this.id), this.className && (e["class"] = this.className), this.setElement(this.make(this.tagName, e), !1);
                }
            },
        }),
            (f.extend = l.extend = c.extend = y.extend = function (e, t) {
                var n = x(this, e, t);
                return (n.extend = this.extend), n;
            });
        var E = { create: "POST", update: "PUT", delete: "DELETE", read: "GET" };
        (i.sync = function (e, t, n) {
            var r = E[e];
            n || (n = {});
            var u = { type: r, dataType: "json" };
            return (
                n.url || (u.url = T(t, "url") || N()),
                !n.data && t && ("create" == e || "update" == e) && ((u.contentType = "application/json"), (u.data = JSON.stringify(t.toJSON()))),
                i.emulateJSON && ((u.contentType = "application/x-www-form-urlencoded"), (u.data = u.data ? { model: u.data } : {})),
                i.emulateHTTP &&
                    ("PUT" === r || "DELETE" === r) &&
                    (i.emulateJSON && (u.data._method = r),
                    (u.type = "POST"),
                    (u.beforeSend = function (e) {
                        e.setRequestHeader("X-HTTP-Method-Override", r);
                    })),
                "GET" !== u.type && !i.emulateJSON && (u.processData = !1),
                o.ajax(s.extend(u, n))
            );
        }),
            (i.wrapError = function (e, t, n) {
                return function (r, i) {
                    (i = r === t ? i : r), e ? e(t, i, n) : t.trigger("error", t, i, n);
                };
            });
        var S = function () {},
            x = function (e, t, n) {
                var r;
                return (
                    (r =
                        t && t.hasOwnProperty("constructor")
                            ? t.constructor
                            : function () {
                                  e.apply(this, arguments);
                              }),
                    s.extend(r, e),
                    (S.prototype = e.prototype),
                    (r.prototype = new S()),
                    t && s.extend(r.prototype, t),
                    n && s.extend(r, n),
                    (r.prototype.constructor = r),
                    (r.__super__ = e.prototype),
                    r
                );
            },
            T = function (e, t) {
                return !e || !e[t] ? null : s.isFunction(e[t]) ? e[t]() : e[t];
            },
            N = function () {
                throw Error('A "url" property or function must be specified');
            };
    }.call(this),
    function () {
        var e, t, n, r, i, s;
        (e = this.jQuery),
            (r = "keyup"),
            (n = "keydown"),
            (t = "change"),
            (s = function (e) {
                return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>");
            }),
            (i = (function () {
                function i(t, n) {
                    (this.el = t),
                        (this.names = n),
                        (this.txt = this.el.find("textarea")),
                        (this.tags = e('<div class="mentions"></div>')),
                        (this.wrap = this.el.find(".wrap")),
                        (this.minH = this.txt.height()),
                        this.wrap.append(this.tags),
                        this.initEvents(),
                        this.addEvents(),
                        this.update();
                }
                return (
                    (i.prototype.reset = function () {
                        return this.txt.val(""), this.tags.html(""), this.update();
                    }),
                    (i.prototype.update = function () {
                        var e,
                            t,
                            n,
                            r,
                            i,
                            o,
                            u = this;
                        (r = this.txt),
                            (t = this.tags),
                            (o = this.wraps),
                            (i = s(r.val())),
                            (i = i.replace(/@([A-Za-z0-9]+)/g, function (e, t) {
                                return u.checkName(t) ? "<b>" + e + "</b>" : e;
                            })),
                            t.html(i),
                            (e = Math.max(this.minH, t.height())),
                            (e += 3),
                            i.match(/<br\/>$/) && (e += this.minH),
                            (n = { height: e }),
                            r.css(n),
                            this.el.css(n),
                            this.onupdate != null && this.onupdate();
                    }),
                    (i.prototype.getValue = function () {
                        var e,
                            t = this;
                        return (
                            (e = this.txt.val()),
                            (e = e.replace(/@([A-Za-z0-9]+)/g, function (e, n) {
                                var r;
                                return (r = t.checkName(n)), r ? "@[" + r.id + "|" + r.name + "]" : e;
                            })),
                            e
                        );
                    }),
                    (i.prototype.checkName = function (e) {
                        var t, n;
                        return (
                            (t = this.names),
                            (n = t.filter(function (t) {
                                return t.name === e;
                            })),
                            n[0]
                        );
                    }),
                    (i.prototype.checkMatch = function (e) {
                        var t, n;
                        return (
                            (t = this.names),
                            (n = t.filter(function (t) {
                                return t.name.toLowerCase().indexOf(e.toLowerCase()) === 0;
                            })),
                            n[0]
                        );
                    }),
                    (i.prototype.autoComplete = function () {
                        var e,
                            t,
                            n,
                            r,
                            i,
                            s,
                            o,
                            u = this;
                        return (
                            (s = this.txt),
                            (o = s.val()),
                            (i = s[0].selectionStart),
                            (t = o.substr(0, i)),
                            (e = o.substr(i, o.length)),
                            (n = /([A-Za-z0-9]+$)/),
                            (r = /@([A-Za-z0-9]+$)/),
                            t.match(r) && (n = r),
                            (t = t.replace(n, function (e, t) {
                                var n;
                                return (n = u.checkMatch(t)), n ? "@" + n.name : e;
                            })),
                            s.val("" + t + e),
                            (s[0].selectionStart = t.length),
                            (s[0].selectionEnd = t.length)
                        );
                    }),
                    (i.prototype.initEvents = function () {
                        var e = this;
                        this.events = {
                            keyup: function (t) {
                                if (t.keyCode === 13 && !t.shiftKey && e.submit) return e.submit(e.getValue());
                                e.update();
                            },
                            keydown: function (t) {
                                t.keyCode === 13 && (t.shiftKey || t.preventDefault());
                                if (t.keyCode === 9 && e.tabComplete) {
                                    t.preventDefault(), e.autoComplete();
                                    return;
                                }
                                e.update();
                            },
                            change: function (t) {
                                e.update();
                            },
                        };
                    }),
                    (i.prototype.addEvents = function () {
                        this.txt.bind(r, this.events[r]).bind(n, this.events[n]).bind(t, this.events[t]);
                    }),
                    (i.prototype.removeEvents = function () {
                        this.txt.unbind(r, this.events[r]).unbind(n, this.events[n]), unbind(t, this.events[t]);
                    }),
                    i
                );
            })()),
            (e.fn.mentionizer = function (e) {
                var t, n, r, s, o, u, a;
                e || (e = {}),
                    (t = e.data),
                    (o = e.submit),
                    (a = e.update),
                    (u = e.tabCompletion),
                    (s = e.reset),
                    (n = e.data || []),
                    (r = this.data("mentionizer")),
                    r || ((r = new i(this, n)), this.data("mentionizer", r)),
                    t instanceof Array &&
                        t.sort(function (e, t) {
                            return e.name > t.name ? 1 : -1;
                        }),
                    t && (r.names = t),
                    o && (r.submit = o),
                    a && (r.onupdate = a),
                    u && (r.tabComplete = u),
                    s && r.reset();
            }),
            (e.parseMentions = function (e) {
                return e.replace(/@\[(.*?)\]/g, function (e, t) {
                    var n, r, i;
                    return (r = t.indexOf("|")), (n = t.substr(0, r)), (i = t.substr(r + 1, t.length)), "<a data='" + n + "'>" + i + "</a>";
                });
            });
    }.call(this),
    (function (e, t, n) {
        var r, i, s, o, u, a;
        (u = { paneClass: "pane", sliderClass: "slider", contentClass: "content", iOSNativeScrolling: !1, preventPageScrolling: !1, disableResize: !1, alwaysVisible: !1, flashDelay: 1500, sliderMinHeight: 20, sliderMaxHeight: null }),
            (r = "Microsoft Internet Explorer" === t.navigator.appName && /msie 7./i.test(t.navigator.appVersion) && t.ActiveXObject),
            (i = null),
            (s = {}),
            (a = function () {
                var e, t;
                return (
                    (e = n.createElement("div")),
                    (t = e.style),
                    (t.position = "absolute"),
                    (t.width = "100px"),
                    (t.height = "100px"),
                    (t.overflow = "scroll"),
                    (t.top = "-9999px"),
                    n.body.appendChild(e),
                    (t = e.offsetWidth - e.clientWidth),
                    n.body.removeChild(e),
                    t
                );
            }),
            (o = (function () {
                function o(r, s) {
                    (this.el = r), (this.options = s), i || (i = a()), (this.$el = e(this.el)), (this.doc = e(n)), (this.win = e(t)), this.generate(), this.createEvents(), this.addEvents(), this.reset();
                }
                return (
                    (o.prototype.preventScrolling = function (e, t) {
                        this.isActive &&
                            ("DOMMouseScroll" === e.type
                                ? (("down" === t && 0 < e.originalEvent.detail) || ("up" === t && 0 > e.originalEvent.detail)) && e.preventDefault()
                                : "mousewheel" === e.type && e.originalEvent && e.originalEvent.wheelDelta && (("down" === t && 0 > e.originalEvent.wheelDelta) || ("up" === t && 0 < e.originalEvent.wheelDelta)) && e.preventDefault());
                    }),
                    (o.prototype.updateScrollValues = function () {
                        var e;
                        (e = this.content[0]),
                            (this.maxScrollTop = e.scrollHeight - e.clientHeight),
                            (this.contentScrollTop = e.scrollTop),
                            (this.maxSliderTop = this.paneHeight - this.sliderHeight),
                            (this.sliderTop = (this.contentScrollTop * this.maxSliderTop) / this.maxScrollTop);
                    }),
                    (o.prototype.handleKeyPress = function (e) {
                        var t;
                        if (38 === e || 33 === e || 40 === e || 34 === e)
                            (t = 38 === e || 40 === e ? 40 : 0.9 * this.paneHeight),
                                (t = 100 * (t / (this.contentHeight - this.paneHeight))),
                                (t = (t * this.maxSliderTop) / 100),
                                (this.sliderY = 38 === e || 33 === e ? this.sliderY - t : this.sliderY + t),
                                this.scroll();
                        else if (36 === e || 35 === e) (this.sliderY = 36 === e ? 0 : this.maxSliderTop), this.scroll();
                    }),
                    (o.prototype.createEvents = function () {
                        var e = this;
                        this.events = {
                            down: function (t) {
                                return (e.isBeingDragged = !0), (e.offsetY = t.pageY - e.slider.offset().top), e.pane.addClass("active"), e.doc.bind("mousemove", e.events.drag).bind("mouseup", e.events.up), !1;
                            },
                            drag: function (t) {
                                return (
                                    (e.sliderY = t.pageY - e.$el.offset().top - e.offsetY),
                                    e.scroll(),
                                    e.updateScrollValues(),
                                    e.contentScrollTop >= e.maxScrollTop ? e.$el.trigger("scrollend") : 0 === e.contentScrollTop && e.$el.trigger("scrolltop"),
                                    !1
                                );
                            },
                            up: function () {
                                return (e.isBeingDragged = !1), e.pane.removeClass("active"), e.doc.unbind("mousemove", e.events.drag).unbind("mouseup", e.events.up), !1;
                            },
                            resize: function () {
                                e.reset();
                            },
                            panedown: function (t) {
                                return (e.sliderY = (t.offsetY || t.originalEvent.layerY) - 0.5 * e.sliderHeight), e.scroll(), e.events.down(t), !1;
                            },
                            scroll: function (t) {
                                e.isBeingDragged ||
                                    (e.updateScrollValues(),
                                    (e.sliderY = e.sliderTop),
                                    e.slider.css({ top: e.sliderTop }),
                                    null != t &&
                                        (e.contentScrollTop >= e.maxScrollTop
                                            ? (e.options.preventPageScrolling && e.preventScrolling(t, "down"), e.$el.trigger("scrollend"))
                                            : 0 === e.contentScrollTop && (e.options.preventPageScrolling && e.preventScrolling(t, "up"), e.$el.trigger("scrolltop"))));
                            },
                            wheel: function (t) {
                                if (null != t) return (e.sliderY += -t.wheelDeltaY || -t.delta), e.scroll(), !1;
                            },
                            keydown: function (t) {
                                var n;
                                null != t &&
                                    ((n = t.which), 38 === n || 33 === n || 40 === n || 34 === n || 36 === n || 35 === n) &&
                                    ((e.sliderY = isNaN(e.sliderY) ? 0 : e.sliderY),
                                    (s[n] = setTimeout(function () {
                                        e.handleKeyPress(n);
                                    }, 100)),
                                    t.preventDefault());
                            },
                            keyup: function (t) {
                                null != t && ((t = t.which), e.handleKeyPress(t), null != s[t] && clearTimeout(s[t]));
                            },
                        };
                    }),
                    (o.prototype.addEvents = function () {
                        var e;
                        this.removeEvents(),
                            (e = this.events),
                            this.options.disableResize || this.win.bind("resize", e.resize),
                            this.slider.bind("mousedown", e.down),
                            this.pane.bind("mousedown", e.panedown).bind("mousewheel DOMMouseScroll", e.wheel),
                            this.content.bind("scroll mousewheel DOMMouseScroll touchmove", e.scroll),
                            this.options.keyboardSupport && this.addKeyboardEvents();
                    }),
                    (o.prototype.addKeyboardEvents = function () {
                        this.content.bind("keydown", events.keydown).bind("keyup", events.keyup);
                    }),
                    (o.prototype.removeEvents = function () {
                        var e;
                        (e = this.events),
                            this.win.unbind("resize", e.resize),
                            this.slider.unbind(),
                            this.pane.unbind(),
                            this.content.unbind("scroll mousewheel DOMMouseScroll touchmove", e.scroll).unbind("keydown", e.keydown).unbind("keyup", e.keyup);
                    }),
                    (o.prototype.generate = function () {
                        var e, t, n, r, s;
                        return (
                            (n = this.options),
                            (r = n.paneClass),
                            (s = n.sliderClass),
                            (e = n.contentClass),
                            0 === this.$el.find("" + r).length && 0 === this.$el.find("" + s).length && this.$el.append('<div class="' + r + '"><div class="' + s + '" /></div>'),
                            (this.content = this.$el.children("." + e)),
                            this.content.attr("tabindex", 0),
                            (this.slider = this.$el.find("." + s)),
                            (this.pane = this.$el.find("." + r)),
                            i && ((t = { right: -i }), this.$el.addClass("has-scrollbar")),
                            n.iOSNativeScrolling && (null == t && (t = {}), (t.WebkitOverflowScrolling = "touch")),
                            null != t && this.content.css(t),
                            n.alwaysVisible && this.pane.css({ opacity: 1, visibility: "visible" }),
                            this
                        );
                    }),
                    (o.prototype.restore = function () {
                        return (this.stopped = !1), this.pane.show(), this.addEvents();
                    }),
                    (o.prototype.reset = function () {
                        var e, t, n, s, o, u, a;
                        return (
                            this.$el.find("." + this.options.paneClass).length || this.generate().stop(),
                            this.stopped && this.restore(),
                            (e = this.content[0]),
                            (n = e.style),
                            (s = n.overflowY),
                            r && this.content.css({ height: this.content.height() }),
                            (t = e.scrollHeight + i),
                            (u = this.pane.outerHeight()),
                            (a = parseInt(this.pane.css("top"), 10)),
                            (o = parseInt(this.pane.css("bottom"), 10)),
                            (o = u + a + o),
                            (a = Math.round((o / t) * o)),
                            a < this.options.sliderMinHeight ? (a = this.options.sliderMinHeight) : null != this.options.sliderMaxHeight && a > this.options.sliderMaxHeight && (a = this.options.sliderMaxHeight),
                            "scroll" === s && "scroll" !== n.overflowX && (a += i),
                            (this.maxSliderTop = o - a),
                            (this.contentHeight = t),
                            (this.paneHeight = u),
                            (this.paneOuterHeight = o),
                            (this.sliderHeight = a),
                            this.slider.height(a),
                            this.events.scroll(),
                            this.pane.show(),
                            (this.isActive = !0),
                            this.pane.outerHeight(!0) >= e.scrollHeight && "scroll" !== s ? (this.pane.hide(), (this.isActive = !1)) : this.el.clientHeight === e.scrollHeight && "scroll" === s ? this.slider.hide() : this.slider.show(),
                            this
                        );
                    }),
                    (o.prototype.scroll = function () {
                        return (
                            (this.sliderY = Math.max(0, this.sliderY)),
                            (this.sliderY = Math.min(this.maxSliderTop, this.sliderY)),
                            this.content.scrollTop(-1 * (((this.paneHeight - this.contentHeight + i) * this.sliderY) / this.maxSliderTop)),
                            this.slider.css({ top: this.sliderY }),
                            this
                        );
                    }),
                    (o.prototype.scrollBottom = function (e) {
                        return this.reset(), this.content.scrollTop(this.contentHeight - this.content.height() - e).trigger("mousewheel"), this;
                    }),
                    (o.prototype.scrollTop = function (e) {
                        return this.reset(), this.content.scrollTop(+e).trigger("mousewheel"), this;
                    }),
                    (o.prototype.scrollTo = function (t) {
                        return this.reset(), (t = e(t).offset().top), t > this.maxSliderTop && ((t /= this.contentHeight), (this.sliderY = t *= this.maxSliderTop), this.scroll()), this;
                    }),
                    (o.prototype.stop = function () {
                        return (this.stopped = !0), this.removeEvents(), this.pane.hide(), this;
                    }),
                    (o.prototype.flash = function () {
                        var e = this;
                        return (
                            this.pane.addClass("flashed"),
                            setTimeout(function () {
                                e.pane.removeClass("flashed");
                            }, this.options.flashDelay),
                            this
                        );
                    }),
                    o
                );
            })()),
            (e.fn.nanoScroller = function (t) {
                return this.each(function () {
                    var n;
                    (n = this.nanoscroller) || ((n = e.extend({}, u)), (this.nanoscroller = n = new o(this, n)));
                    if ("object" == typeof t) {
                        e.extend(n.options, t);
                        if (t.scrollBottom) return n.scrollBottom(t.scrollBottom);
                        if (t.scrollTop) return n.scrollTop(t.scrollTop);
                        if (t.scrollTo) return n.scrollTo(t.scrollTo);
                        if ("bottom" === t.scroll) return n.scrollBottom(0);
                        if ("top" === t.scroll) return n.scrollTop(0);
                        if (t.scroll && t.scroll instanceof e) return n.scrollTo(t.scroll);
                        if (t.stop) return n.stop();
                        if (t.flash) return n.flash();
                    }
                    return n.reset();
                });
            });
    })(jQuery, window, document),
    (function (e) {
        function t(e) {
            var t = [],
                n;
            for (n in e) t.unshift(n + ":" + e[n] + ";");
            return t.join("");
        }
        function n(t) {
            for (var n = {}, t = (i.exec(e.trim(t)) || ["", ""])[1].split(";"), r = t.length - 1; 0 <= r; r--) {
                var s = t[r].split(":");
                n[e.trim(s[0])] = e.trim(s[1]);
            }
            return n;
        }
        var r = /(\d+)(px|%)/i,
            i = /(.{5,}); *$/;
        (e.fn.tinyLayout = function (i) {
            if (1 != this.length) throw "Apply to only one element per call!!";
            var s = { orientation: "horizontal", frames: [] },
                o = e.extend(s, i),
                u = { vertical: "height", horizontal: "width" }[s.orientation],
                a = e.extend({ position: "absolute" }, "width" == u ? { top: "0px", bottom: "0px" } : { left: "0px", right: "0px" }),
                i = function () {
                    for (var i = [], s = o.frames.length - 1; 0 <= s; s--) {
                        var f = o.frames[s][1],
                            l = o.frames[s][0].get(0);
                        if ("*" == f) {
                            i.unshift([l, "*", -1]);
                            var p = s;
                        } else "function" == typeof f ? ((f = f()), i.unshift([l, f[0], f[1]])) : ((f = r.exec(f)), i.unshift([l, parseInt(f[1]), f[2]]));
                    }
                    for (var f = (l = s = 0), d = i[s]; s < p; s++, d = i[s]) {
                        var v = "width" == u ? { left: l + "px", "margin-left": f + "%", width: d[1] + d[2] } : { top: l + "px", "margin-top": f + "%", height: d[1] + d[2] };
                        (d[0].style.cssText = t(e.extend(n(d[0].style.cssText), a, v))), t(e.extend({}, v, a)), "px" == d[2] ? (l += d[1]) : (f += d[1]);
                    }
                    for (var s = i.length - 1, m = 0, g = 0, d = i[s]; s > p; s--, d = i[s])
                        (v = "width" == u ? { right: m + "px", "margin-right": g + "%", width: d[1] + d[2] } : { bottom: m + "px", "margin-bottom": g + "%", height: d[1] + d[2] }),
                            (d[0].style.cssText = t(e.extend(n(d[0].style.cssText), a, v))),
                            t(e.extend({}, v, a)),
                            "px" == d[2] ? (m += d[1]) : (g += d[1]);
                    (v = "width" == u ? { right: m + "px", "margin-right": g + "%", left: l + "px", "margin-left": f + "%" } : { bottom: m + "px", "margin-bottom": g + "%", top: l + "px", "margin-top": f + "%" }),
                        (i[p][0].style.cssText = t(e.extend(n(d[0].style.cssText), a, v))),
                        t(e.extend({}, v, a));
                };
            (o.recompute = i), i();
            for (i = o.frames.length - 1; 0 >= i; i--) e(o.frames[i]).data("tinyLayout", o);
        }),
            (e.fn.tinyLayout_removeFrame = function () {
                e(this[0]).data("tinyLayout");
            });
    })(jQuery),
    (function (e) {
        e.cookie = function (t, n, r) {
            if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(n)) || n === null || n === undefined)) {
                r = e.extend({}, r);
                if (n === null || n === undefined) r.expires = -1;
                if (typeof r.expires == "number") {
                    var i = r.expires,
                        s = (r.expires = new Date());
                    s.setDate(s.getDate() + i);
                }
                return (
                    (n = String(n)),
                    (document.cookie = [
                        encodeURIComponent(t),
                        "=",
                        r.raw ? n : encodeURIComponent(n),
                        r.expires ? "; expires=" + r.expires.toUTCString() : "",
                        r.path ? "; path=" + r.path : "",
                        r.domain ? "; domain=" + r.domain : "",
                        r.secure ? "; secure" : "",
                    ].join(""))
                );
            }
            r = n || {};
            var o = r.raw
                    ? function (e) {
                          return e;
                      }
                    : decodeURIComponent,
                u = document.cookie.split("; ");
            for (var a = 0, f; (f = u[a] && u[a].split("=")); a++) if (o(f[0]) === t) return o(f[1] || "");
            var l = {};
            if (document.cookie && document.cookie !== "" && arguments.length === 0) {
                var c = document.cookie.split(";"),
                    a;
                for (a = 0; a < c.length; a += 1) {
                    var h = jQuery.trim(c[a]),
                        p = h.indexOf("=");
                    if (p <= -1) continue;
                    l[h.substring(0, p)] = decodeURIComponent(h.substring(p + 1, h.length));
                }
                return l;
            }
            return null;
        };
    })(jQuery),
    !(function (e) {
        "use strict";
        var t = String.prototype.trim,
            n = String.prototype.trimRight,
            r = String.prototype.trimLeft,
            i = function (e) {
                return e * 1 || 0;
            },
            s = function (e, t) {
                if (t < 1) return "";
                var n = "";
                while (t > 0) t & 1 && (n += e), (t >>= 1), (e += e);
                return n;
            },
            o = [].slice,
            u = function (e, t, n) {
                return ("" + e).replace(t, n);
            },
            a = function (e) {
                return e != null ? "[" + d.escapeRegExp(e) + "]" : "\\s";
            },
            f = function (e, t) {
                (e += ""), (t += "");
                var n = [],
                    r,
                    i;
                for (var s = 0; s <= t.length; s++) for (var o = 0; o <= e.length; o++) s && o ? (e.charAt(o - 1) === t.charAt(s - 1) ? (i = r) : (i = Math.min(n[o], n[o - 1], r) + 1)) : (i = s + o), (r = n[o]), (n[o] = i);
                return n.pop();
            },
            l = { lt: "<", gt: ">", quot: '"', apos: "'", amp: "&" },
            c = {};
        for (var h in l) c[l[h]] = h;
        var p = (function () {
                function e(e) {
                    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
                }
                var t = s,
                    n = function () {
                        return n.cache.hasOwnProperty(arguments[0]) || (n.cache[arguments[0]] = n.parse(arguments[0])), n.format.call(null, n.cache[arguments[0]], arguments);
                    };
                return (
                    (n.format = function (n, r) {
                        var i = 1,
                            s = n.length,
                            o = "",
                            u,
                            a = [],
                            f,
                            l,
                            c,
                            h,
                            d,
                            v;
                        for (f = 0; f < s; f++) {
                            o = e(n[f]);
                            if (o === "string") a.push(n[f]);
                            else if (o === "array") {
                                c = n[f];
                                if (c[2]) {
                                    u = r[i];
                                    for (l = 0; l < c[2].length; l++) {
                                        if (!u.hasOwnProperty(c[2][l])) throw new Error(p('[_.sprintf] property "%s" does not exist', c[2][l]));
                                        u = u[c[2][l]];
                                    }
                                } else c[1] ? (u = r[c[1]]) : (u = r[i++]);
                                if (/[^s]/.test(c[8]) && e(u) != "number") throw new Error(p("[_.sprintf] expecting number but found %s", e(u)));
                                switch (c[8]) {
                                    case "b":
                                        u = u.toString(2);
                                        break;
                                    case "c":
                                        u = String.fromCharCode(u);
                                        break;
                                    case "d":
                                        u = parseInt(u, 10);
                                        break;
                                    case "e":
                                        u = c[7] ? u.toExponential(c[7]) : u.toExponential();
                                        break;
                                    case "f":
                                        u = c[7] ? parseFloat(u).toFixed(c[7]) : parseFloat(u);
                                        break;
                                    case "o":
                                        u = u.toString(8);
                                        break;
                                    case "s":
                                        u = (u = String(u)) && c[7] ? u.substring(0, c[7]) : u;
                                        break;
                                    case "u":
                                        u = Math.abs(u);
                                        break;
                                    case "x":
                                        u = u.toString(16);
                                        break;
                                    case "X":
                                        u = u.toString(16).toUpperCase();
                                }
                                (u = /[def]/.test(c[8]) && c[3] && u >= 0 ? "+" + u : u), (d = c[4] ? (c[4] == "0" ? "0" : c[4].charAt(1)) : " "), (v = c[6] - String(u).length), (h = c[6] ? t(d, v) : ""), a.push(c[5] ? u + h : h + u);
                            }
                        }
                        return a.join("");
                    }),
                    (n.cache = {}),
                    (n.parse = function (e) {
                        var t = e,
                            n = [],
                            r = [],
                            i = 0;
                        while (t) {
                            if ((n = /^[^\x25]+/.exec(t)) !== null) r.push(n[0]);
                            else if ((n = /^\x25{2}/.exec(t)) !== null) r.push("%");
                            else {
                                if ((n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t)) === null) throw new Error("[_.sprintf] huh?");
                                if (n[2]) {
                                    i |= 1;
                                    var s = [],
                                        o = n[2],
                                        u = [];
                                    if ((u = /^([a-z_][a-z_\d]*)/i.exec(o)) === null) throw new Error("[_.sprintf] huh?");
                                    s.push(u[1]);
                                    while ((o = o.substring(u[0].length)) !== "")
                                        if ((u = /^\.([a-z_][a-z_\d]*)/i.exec(o)) !== null) s.push(u[1]);
                                        else {
                                            if ((u = /^\[(\d+)\]/.exec(o)) === null) throw new Error("[_.sprintf] huh?");
                                            s.push(u[1]);
                                        }
                                    n[2] = s;
                                } else i |= 2;
                                if (i === 3) throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                                r.push(n);
                            }
                            t = t.substring(n[0].length);
                        }
                        return r;
                    }),
                    n
                );
            })(),
            d = {
                VERSION: "2.2.0rc",
                isBlank: function (e) {
                    return /^\s*$/.test(e);
                },
                stripTags: function (e) {
                    return u(e, /<\/?[^>]+>/g, "");
                },
                capitalize: function (e) {
                    return (e += ""), e.charAt(0).toUpperCase() + e.slice(1);
                },
                chop: function (e, t) {
                    return (e += ""), (t = ~~t), t > 0 ? e.match(new RegExp(".{1," + t + "}", "g")) : [e];
                },
                clean: function (e) {
                    return d.strip(e).replace(/\s+/g, " ");
                },
                count: function (e, t) {
                    return (e += ""), (t += ""), e.split(t).length - 1;
                },
                chars: function (e) {
                    return ("" + e).split("");
                },
                swapCase: function (e) {
                    return u(e, /\S/g, function (e) {
                        return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase();
                    });
                },
                escapeHTML: function (e) {
                    return u(e, /[&<>"']/g, function (e) {
                        return "&" + c[e] + ";";
                    });
                },
                unescapeHTML: function (e) {
                    return u(e, /\&([^;]+);/g, function (e, t) {
                        var n;
                        return t in l ? l[t] : (n = t.match(/^#x([\da-fA-F]+)$/)) ? String.fromCharCode(parseInt(n[1], 16)) : (n = t.match(/^#(\d+)$/)) ? String.fromCharCode(~~n[1]) : e;
                    });
                },
                escapeRegExp: function (e) {
                    return u(e, /([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
                },
                insert: function (e, t, n) {
                    var r = d.chars(e);
                    return r.splice(~~t, 0, "" + n), r.join("");
                },
                include: function (e, t) {
                    return !!~("" + e).indexOf(t);
                },
                join: function () {
                    var e = o.call(arguments);
                    return e.join(e.shift());
                },
                lines: function (e) {
                    return ("" + e).split("\n");
                },
                reverse: function (e) {
                    return d.chars(e).reverse().join("");
                },
                splice: function (e, t, n, r) {
                    var i = d.chars(e);
                    return i.splice(~~t, ~~n, r), i.join("");
                },
                startsWith: function (e, t) {
                    return (e += ""), (t += ""), e.length >= t.length && e.slice(0, t.length) === t;
                },
                endsWith: function (e, t) {
                    return (e += ""), (t += ""), e.length >= t.length && e.slice(e.length - t.length) === t;
                },
                succ: function (e) {
                    e += "";
                    var t = d.chars(e);
                    return t.splice(e.length - 1, 1, String.fromCharCode(e.charCodeAt(e.length - 1) + 1)), t.join("");
                },
                titleize: function (e) {
                    return u(e, /(?:^|\s)\S/g, function (e) {
                        return e.toUpperCase();
                    });
                },
                camelize: function (e) {
                    return d.trim(e).replace(/[-_\s]+(.)?/g, function (e, t) {
                        return t.toUpperCase();
                    });
                },
                underscored: function (e) {
                    return d
                        .trim(e)
                        .replace(/([a-z\d])([A-Z]+)/g, "$1_$2")
                        .replace(/[-\s]+/g, "_")
                        .toLowerCase();
                },
                dasherize: function (e) {
                    return d
                        .trim(e)
                        .replace(/([A-Z])/g, "-$1")
                        .replace(/[-_\s]+/g, "-")
                        .toLowerCase();
                },
                classify: function (e) {
                    return d.titleize(u(e, /_/g, " ")).replace(/\s/g, "");
                },
                humanize: function (e) {
                    return d.capitalize(d.underscored(e).replace(/_id$/, "").replace(/_/g, " "));
                },
                trim: function (e, n) {
                    return (e += ""), !n && t ? t.call(e) : ((n = a(n)), e.replace(new RegExp("^" + n + "+|" + n + "+$", "g"), ""));
                },
                ltrim: function (e, t) {
                    return (e += ""), !t && r ? r.call(e) : ((t = a(t)), e.replace(new RegExp("^" + t + "+"), ""));
                },
                rtrim: function (e, t) {
                    return (e += ""), !t && n ? n.call(e) : ((t = a(t)), e.replace(new RegExp(t + "+$"), ""));
                },
                truncate: function (e, t, n) {
                    return (e += ""), (n = n || "..."), (t = ~~t), e.length > t ? e.slice(0, t) + n : e;
                },
                prune: function (e, t, n) {
                    (e += ""), (t = ~~t), (n = n != null ? "" + n : "...");
                    var r,
                        i,
                        s = e.replace(/\W/g, function (e) {
                            return e.toUpperCase() !== e.toLowerCase() ? "A" : " ";
                        });
                    return (i = s.charAt(t)), (r = s.slice(0, t)), i && i.match(/\S/) && (r = r.replace(/\s\S+$/, "")), (r = d.rtrim(r)), (r + n).length > e.length ? e : e.slice(0, r.length) + n;
                },
                words: function (e, t) {
                    return d.trim(e, t).split(t || /\s+/);
                },
                pad: function (e, t, n, r) {
                    e += "";
                    var i = 0;
                    (t = ~~t), n ? n.length > 1 && (n = n.charAt(0)) : (n = " ");
                    switch (r) {
                        case "right":
                            return (i = t - e.length), e + s(n, i);
                        case "both":
                            return (i = t - e.length), s(n, Math.ceil(i / 2)) + e + s(n, Math.floor(i / 2));
                        default:
                            return (i = t - e.length), s(n, i) + e;
                    }
                },
                lpad: function (e, t, n) {
                    return d.pad(e, t, n);
                },
                rpad: function (e, t, n) {
                    return d.pad(e, t, n, "right");
                },
                lrpad: function (e, t, n) {
                    return d.pad(e, t, n, "both");
                },
                sprintf: p,
                vsprintf: function (e, t) {
                    return t.unshift(e), p.apply(null, t);
                },
                toNumber: function (e, t) {
                    e += "";
                    var n = i(i(e).toFixed(~~t));
                    return n === 0 && !e.match(/^0+$/) ? Number.NaN : n;
                },
                strRight: function (e, t) {
                    (e += ""), (t = t != null ? "" + t : t);
                    var n = t ? e.indexOf(t) : -1;
                    return ~n ? e.slice(n + t.length, e.length) : e;
                },
                strRightBack: function (e, t) {
                    (e += ""), (t = t != null ? "" + t : t);
                    var n = t ? e.lastIndexOf(t) : -1;
                    return ~n ? e.slice(n + t.length, e.length) : e;
                },
                strLeft: function (e, t) {
                    (e += ""), (t = t != null ? "" + t : t);
                    var n = t ? e.indexOf(t) : -1;
                    return ~n ? e.slice(0, n) : e;
                },
                strLeftBack: function (e, t) {
                    (e += ""), (t = t != null ? "" + t : t);
                    var n = e.lastIndexOf(t);
                    return ~n ? e.slice(0, n) : e;
                },
                toSentence: function (e, t, n) {
                    t || (t = ", "), n || (n = " and ");
                    var r = e.length,
                        i = "";
                    for (var s = 0; s < r; s++) (i += e[s]), s === r - 2 ? (i += n) : s < r - 1 && (i += t);
                    return i;
                },
                slugify: function (e) {
                    var t = "ąàáäâãćęèéëêìíïîłńòóöôõùúüûñçżź",
                        n = "aaaaaaceeeeeiiiilnooooouuuunczz",
                        r = new RegExp(a(t), "g");
                    return (
                        (e = ("" + e).toLowerCase()),
                        (e = e.replace(r, function (e) {
                            var r = t.indexOf(e);
                            return n.charAt(r) || "-";
                        })),
                        d.dasherize(e.replace(/[^\w\s-]/g, ""))
                    );
                },
                surround: function (e, t) {
                    return [t, e, t].join("");
                },
                quote: function (e) {
                    return d.surround(e, '"');
                },
                exports: function () {
                    var e = {};
                    for (var t in this) {
                        if (!this.hasOwnProperty(t) || t.match(/^(?:include|contains|reverse)$/)) continue;
                        e[t] = this[t];
                    }
                    return e;
                },
                repeat: function (e, t, n) {
                    t = ~~t;
                    if (n == null) return s(e + "", t);
                    for (var r = []; t > 0; r[--t] = e);
                    return r.join(n);
                },
                levenshtein: f,
            };
        (d.strip = d.trim),
            (d.lstrip = d.ltrim),
            (d.rstrip = d.rtrim),
            (d.center = d.lrpad),
            (d.rjust = d.lpad),
            (d.ljust = d.rpad),
            (d.contains = d.include),
            (d.q = d.quote),
            typeof exports != "undefined"
                ? (typeof module != "undefined" && module.exports && (module.exports = d), (exports._s = d))
                : typeof define == "function" && define.amd
                ? define("underscore.string", [], function () {
                      return d;
                  })
                : ((e._ = e._ || {}), (e._.string = e._.str = d));
    })(this),
    function () {
        var e, t, n, r;
        (n = 60),
            (t = 3600),
            (e = 86400),
            (r = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i),
            _.mixin({
                insertScript: function (e) {
                    var t;
                    return (t = document.createElement("script")), (t.type = "text/javascript"), (t.src = e), document.body.appendChild(t);
                },
                displayTime: function (r) {
                    var i, s, o, u, a;
                    if (r == null) return;
                    return (
                        (u = new Date().getTime()),
                        (u = Math.round(u / 1e3)),
                        (i = u - r),
                        (a = ""),
                        i < n
                            ? (a = "just now")
                            : i < t
                            ? ((o = Math.round(i / n)), (a = "" + o + " minute ago"), o > 1 && (a = "" + o + " minutes ago"))
                            : i < e
                            ? ((s = Math.round(i / t)), (a = "" + s + " hour ago"), s > 1 && (a = "" + s + " hours ago"))
                            : (a = i.toString().split(/\s/).splice(1, 4)),
                        a
                    );
                },
                timeToHHMMSS: function (e) {
                    var t, n, r, i, s;
                    return (
                        (t = new Date(e)),
                        (n = t.getHours()),
                        (i = t.getMinutes()),
                        (s = t.getSeconds()),
                        (r = "AM"),
                        n > 12 && ((n -= 12), (r = "PM")),
                        n < 10 && (n = "0" + n),
                        i < 10 && (i = "0" + i),
                        s < 10 && (s = "0" + s),
                        "" + n + ":" + i + ":" + s + " " + r
                    );
                },
                linkify: function (e) {
                    return e.replace(r, '<a target="_blank" href="$1">$1</a>');
                },
                match: function (e, t) {
                    return String(e).match(t);
                },
                hhmmss: function (e) {
                    var t, n, r;
                    return (t = parseInt(e / 3600) % 24), (n = parseInt(e / 60) % 60), (r = e % 60), (n < 10 ? "0" + n : n) + ":" + (r < 10 ? "0" + r : r);
                },
                numberComma: function (e) {
                    var t, n, r, i;
                    (i = e.toString()), (n = i.length), (r = "");
                    while (n--) (t = i.length - 1 - n), (r = i.charAt(n) + (t % 3 === 0 && t > 0 ? "," : "") + r);
                    return r;
                },
                printDate: function (e) {
                    var t, n, r, i, s;
                    return (t = e.toString().split(/\s/)), (r = t[1]), (n = t[2]), (s = t[3]), (i = t[4]), "" + r + " " + n + " " + s + " (" + i + ")";
                },
            });
    }.call(this),
    function () {
        Backbone.View.prototype.close = function () {
            this.remove(), this.unbind(), this.undelegateEvents();
            if (this.onClose) return this.onClose();
        };
    }.call(this),
    (function (e, t, n) {
        function r(e) {
            var t;
            (e = e.target || e), (e.style.height = e.minHeight + "px"), (t = Math.max(e.minHeight, e.scrollHeight)), (e.style.height = t + "px"), (e.style.overflow = e.scrollHeight > e.clientHeight ? "auto" : "hidden");
        }
        (e.fn.autoexpand = function (t) {
            var n;
            n = this[0];
            if (!n) return;
            n.autoexpander || ((n.autoexpander = !0), (n.rows = 1), (n.minHeight = Math.max(10, n.clientHeight)), e(n).on("keyup focus change", r)), r(n);
            if (typeof t != "object") return;
            t.stop && ((n.autoexpander = !1), e(n).off("keyup focus change", r));
        }),
            e("textarea.chat").autoexpand();
    })(jQuery, window, document),
    function () {
        window.Emotes = (function () {
            function e() {}
            return (
                (e.list = []),
                (e.add = function (e, t) {
                    return this.list.push([e, t]);
                }),
                (e.imgify = function (e) {
                    return '<img src="/images/emotes/' + e + '.gif">';
                }),
                (e.emotifyBasic = function (e) {
                    var t, n, r, i, s, o;
                    o = this.list;
                    for (i = 0, s = o.length; i < s; i++) (t = o[i]), (n = t[0]), (r = this.imgify(t[1])), (e = e.replace(n, r));
                    return e;
                }),
                (e.emotifyPng = function (e) {
                    return '<span class="emotes emotes-' + e + '"></span>';
                }),
                (e.emotifyPost = function (e) {
                    var t = this;
                    return (
                        (e = e.replace(/:(wtf):/g, function (e, n) {
                            return t.emotifyPng(n);
                        })),
                        (e = e.replace(/:(troll):/g, function (e, n) {
                            return t.emotifyPng(n);
                        })),
                        (e = e.replace(/:(trollface):/g, function (e, n) {
                            return t.emotifyPng("troll");
                        })),
                        (e = e.replace(/:(facepalm):/g, function (e, n) {
                            return t.emotifyPng(n);
                        })),
                        (e = e.replace(/:(sadfrog):/g, function (e, n) {
                            return t.emotifyPng(n);
                        })),
                        (e = e.replace(/:(feelsbadman):/g, function (e, n) {
                            return t.emotifyPng(n);
                        })),
                        (e = e.replace(/:(lol):/g, function (e, n) {
                            return t.emotifyPng(n);
                        })),
                        (e = e.replace(/:(LOL):/g, function (e, n) {
                            return t.emotifyPng("lol");
                        })),
                        (e = e.replace(/(T_T)/g, function (e, n) {
                            return t.emotifyPng(n);
                        })),
                        (e = e.replace(/:(pokerface):/g, function (e, n) {
                            return t.emotifyPng(n);
                        })),
                        (e = e.replace(/:(poker):/g, function (e, n) {
                            return t.emotifyPng("pokerface");
                        }))
                    );
                }),
                e.add(":-))", "laugh"),
                e.add(":))", "laugh"),
                e.add(":-((", "cry"),
                e.add(":((", "cry"),
                e.add(":-D", "grin"),
                e.add(":-P", "tongue"),
                e.add(":P", "tongue"),
                e.add(":D", "grin"),
                e.add("&lt;3", "heart"),
                e.add(":-*", "lips"),
                e.add("&gt;:)", "leer"),
                e.add(":O", "shocked"),
                e.add(":-O", "shocked"),
                e.add(":ZZ", "sleeping"),
                e.add(":Z", "sleepy"),
                e.add(":-B", "bucktooth"),
                e.add(":B", "bucktooth"),
                e.add("O:)", "angel"),
                e.add("&gt;:(", "angry"),
                e.add(":)~", "artist"),
                e.add(":&gt;", "blush"),
                e.add(":-?", "confused"),
                e.add("B-)", "cool"),
                e.add(";)", "wink"),
                e.add(";-)", "wink"),
                e.add(":-)", "smile"),
                e.add(":)", "smile"),
                e.add(":-(", "sad"),
                e.add(":(", "sad"),
                e.add("(y)", "yes"),
                e.add("(n)", "no"),
                e.add(":baby:", "baby"),
                e.add(":gossip:", "gossip"),
                e.add(":up:", "thumbsup"),
                e.add(":down:", "thumbsdown"),
                e
            );
        })();
    }.call(this),
    function () {
        (this.regexParseMention = /@\[(.*?)\|(.*?)\]/g),
            (this.regexParseHashTag = /#[a-zA-Z0-9]+/g),
            (this.regexParseGrowlButton = /\#\[(.*?)\|(.*?)\|(.*?)\]/g),
            (this.regexUrl = /^http:\/\/|^https:\/\//),
            (this.err = function () {
                return console.log(arguments);
            }),
            (this.wait = this.after = function (e, t) {
                return setTimeout(t, e);
            }),
            (this.prevent = function (e) {
                return clearTimeout(e);
            }),
            (this.every = function (e, t) {
                return setInterval(t, e);
            }),
            (this.finish = function (e) {
                return clearInterval(e);
            }),
            (this.setHashValue = function (e) {
                return (this.location.hash = "#!/" + e);
            }),
            (this.getHashValue = function (e) {
                return this.location.hash.replace("#!/", "");
            }),
            (this.getUrlVars = function () {
                var e, t, n, r, i, s;
                (n = window.location.search.match(/([a-zA-Z0-9])+=([a-zA-Z0-9])+/g)), (t = {});
                if (!n) return t;
                for (i = 0, s = n.length; i < s; i++) (r = n[i]), (e = r.split("=")), (t[e[0]] = e[1]);
                return t;
            });
    }.call(this),
    function () {
        var e;
        e = window.location.hostname;
        if (window.location.hostname.match(/local/) || window.location.hostname.match(/^192/)) e = "zobe.com";
        window.location.search.match(/local/) && (e = "localhost"),
            window.location.search.match(/live/) && (e = "teenchat.com"),
            (this.MakeChat = (function () {
                function t() {}
                return (
                    (t.Models = {}),
                    (t.Collections = {}),
                    (t.Views = {}),
                    (t.Sounds = {
                        list: {},
                        add: function (e, t) {
                            if (window.Audio == null) return;
                            return (this.list[e] = new Audio(t));
                        },
                        play: function (e) {
                            var t,
                                n = this;
                            if (this.__debounce) return;
                            t = this.list[e];
                            if (t == null) return;
                            return (
                                t.play(),
                                (this.__debounce = !0),
                                after(1e3, function () {
                                    return (n.__debounce = !1);
                                })
                            );
                        },
                    }),
                    (t.Images = { desktopNotification: "/images/themes/bluejeans/icon/growl_makechat.png" }),
                    (t.karmaBoost = [
                        {
                            name: "Answer Quiz",
                            type: "solvemedia_quiz",
                            enabled: !0,
                            karma: 10,
                            description:
                                "In this option, we‚Äôll give you a few quizzes to answer from our ad partners. If you answer correctly, the system will reward you with 20 karma points. Which expires in a week. Keep in mind, you can only do this once a day.",
                            action: "Launch",
                        },
                        { name: "Boost with a tweet", type: "pay_tweet", enabled: !1, karma: 1, description: "coming soon.", action: "TBA" },
                    ]),
                    (t.settings = {
                        backlogs: 200,
                        host: e,
                        maxChars: 200,
                        maxTextWidth: 100,
                        portWebSocket: 80,
                        portFlashSocket: 7001,
                        socketSwfUrl: "/images/TchatFlashSocket.swf",
                        sounds: { mentioned: !0, enterleave: !1, message: !1, muteall: !1 },
                        timeout: 4e4,
                        theme: "",
                    }),
                    (t.patterns = {
                        regexParseMention: /@\[(.*?)\|(.*?)\]/g,
                        regexParseHashTag: /#[a-zA-Z0-9]+/g,
                        regexParseGrowlButton: /\#\[(.*?)\|(.*?)\|(.*?)\]/g,
                        regexUrl: /^http:\/\/|^https:\/\//,
                        regexActionWord: /^\w+/,
                        regexInviteLink: /!\[([a-zA-Z0-9]+)\|([a-zA-Z0-9]+)\]/g,
                    }),
                    (t.convertPost = function (e) {
                        return Emotes.emotifyPost(Emotes.emotifyBasic(e));
                    }),
                    (t.socketType = (function () {
                        return window.WebSocket != null ? "websockets" : "flashsockets";
                    })()),
                    (t.system = { currentPrivateChatId: null, currentRoomId: null }),
                    (t.gateway = {}),
                    (t.KeyCodes = { ENTER: 13, ESC: 27, OPEN_BRACKET: 219, CLOSE_BRACKET: 221, BACKSPACE: 8, TAB: 9, J: 74, K: 75 }),
                    (t.Sections = { MESSAGES: "messages", TOKENS: "tokens", KARMA: "karma", ACTIVITY: "activity" }),
                    (t.KarmaBoostType = { REFERRAL: "referral_link", QUIZ: "solvemedia" }),
                    (t.callbacks = new Backbone.Model()),
                    (t.facebook = { appId: 324124234351283, status: !0, cookie: !0, xfbml: !0, redirect_uri: "http://test.teenchat.com:8080/facebook/login/" }),
                    (t.utils = {
                        scrollTop: function (e) {
                            return (e.scrollTop = 0);
                        },
                        scrollBottom: function (e) {
                            return (e.scrollTop = e.scrollHeight - e.clientHeight);
                        },
                    }),
                    t
                );
            })()),
            $(function () {
                return (MakeChat.WEBKIT = document.body.style.webkitTransition !== void 0);
            }),
            MakeChat.Sounds.add("mentioned", "images/pop.mp3");
    }.call(this),
    function () {
        var e,
            t,
            n,
            r = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            i = {}.hasOwnProperty,
            s = function (e, t) {
                function r() {
                    this.constructor = e;
                }
                for (var n in t) i.call(t, n) && (e[n] = t[n]);
                return (r.prototype = t.prototype), (e.prototype = new r()), (e.__super__ = t.prototype), e;
            };
        (e = MakeChat.Models),
            (n = function () {
                return console.log(arguments);
            }),
            (n = function () {}),
            (t = !1),
            (e.Socket = (function (e) {
                function t() {
                    return (this.retryXMLConnection = r(this.retryXMLConnection, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    s(t, e),
                    (t.prototype.connect = function () {
                        switch (MakeChat.socketType) {
                            case "websockets":
                                return this.connectWebSockets();
                            case "flashsockets":
                                return this.connectFlashSockets();
                        }
                    }),
                    (t.prototype.connectWebSockets = function () {
                        var e,
                            t,
                            r = this;
                        n("establishing websockets connection.."),
                            (e = this.get("host")),
                            (t = MakeChat.settings.portWebSocket),
                            (this.socket = new WebSocket("ws://" + e + ":" + t + "/ws")),
                            (this.socket.onopen = function (e) {
                                return n("connected via websockets"), r.onConnect(e);
                            }),
                            (this.socket.onclose = function (e) {
                                return n("websockets closed"), r.onClose(e);
                            }),
                            (this.socket.onmessage = function (e) {
                                return r.onMessage(e.data);
                            });
                    }),
                    (t.prototype.connectFlashSockets = function () {
                        var e,
                            t,
                            r,
                            i,
                            s = this;
                        n("establishing flashsockets connection.."),
                            (e = this.get("host")),
                            (t = MakeChat.settings.portFlashSocket),
                            (i =
                                '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="1" height="1" id="swfsocket">\n<param name="allowScriptAccess" value="always" />\n<param name="movie" value="' +
                                MakeChat.settings.socketSwfUrl +
                                '" />\n<param name="quality" value="high" />\n<param name="bgcolor" value="#ffcc00" />\n<embed src="' +
                                MakeChat.settings.socketSwfUrl +
                                '" quality="high" bgcolor="#ffcc00" width="1" height="1" name="swfsocket" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />\n</object>'),
                            (r = document.getElementById("swfContainer")),
                            (r.innerHTML = i),
                            (MakeChat.gateway.init = function (e) {
                                return n("JavaScript to Flash connected");
                            }),
                            (MakeChat.gateway.connect = function (e) {
                                return n("connected via swfsockets"), s.onConnect(e);
                            }),
                            (MakeChat.gateway.message = function (e) {
                                return s.onMessage(e);
                            }),
                            (MakeChat.gateway.error = function (e) {
                                return n("error flashsocket");
                            }),
                            (MakeChat.gateway.close = function (e) {
                                return n("close flashsocket", e);
                            }),
                            this.retryXMLConnection();
                    }),
                    (t.prototype.retryXMLConnection = function () {
                        var e, t;
                        (e = this.get("host")), (t = document.getElementById("swfsocket"));
                        if (t == null) {
                            n("xmlsocket retrying"), after(1e3, this.retryXMLConnection);
                            if (!(this.retries++ < 50)) return;
                        }
                        return (
                            (this.socket = t),
                            this.socket.connect({
                                init: "MakeChat.gateway.init",
                                connect: "MakeChat.gateway.connect",
                                message: "MakeChat.gateway.message",
                                error: "MakeChat.gateway.error",
                                close: "MakeChat.gateway.close",
                                port: MakeChat.settings.portFlashSocket,
                                host: this.get("host"),
                            })
                        );
                    }),
                    (t.prototype.onClose = function () {
                        this.trigger("close");
                    }),
                    (t.prototype.onConnect = function () {
                        var e = this;
                        n("connected to", this.get("host")),
                            after(1e3, function () {
                                return e.trigger("connect");
                            });
                    }),
                    (t.prototype.onMessage = function (e) {
                        var t, r;
                        try {
                            return (r = e.replace(/\n/g, "")), (r = JSON.parse(r));
                        } catch (i) {
                            return n("parsing JSON error", e);
                        } finally {
                            (t = r.C), n("->    ", t, e), this.bufferSocketEvents ? this.bufferEvents(t, r) : this.publish(t, r);
                        }
                    }),
                    (t.prototype.buffer = function () {
                        return (this.bufferSocketEvents = !0);
                    }),
                    (t.prototype.bufferedCommands = []),
                    (t.prototype.bufferEvents = function (e, t) {
                        return this.bufferedCommands.push({ command: e, json: t });
                    }),
                    (t.prototype.eventQueue = []),
                    (t.prototype.timeoutId = null),
                    (t.prototype.publish = function (e, t) {
                        return this.trigger(e, t);
                    }),
                    (t.prototype.releaseBufferedEvents = function () {
                        var e = this;
                        return (
                            (this.bufferSocketEvents = !1),
                            _.each(this.bufferedCommands, function (t, n) {
                                return e.publish(t.command, t.json);
                            }),
                            (this.bufferedCommands = [])
                        );
                    }),
                    (t.prototype.send = function (e, t) {
                        if (e == null && t == null) return;
                        return (t.C = e), (t = JSON.stringify(t)), n("<-    ", e, t), this.socket.send(t);
                    }),
                    t
                );
            })(Backbone.Model));
    }.call(this),
    function () {
        var e,
            t = {}.hasOwnProperty,
            n = function (e, n) {
                function i() {
                    this.constructor = e;
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return (i.prototype = n.prototype), (e.prototype = new i()), (e.__super__ = n.prototype), e;
            };
        (e = MakeChat.Models),
            (e.User = (function (e) {
                function t() {
                    return t.__super__.constructor.apply(this, arguments);
                }
                return n(t, e), (t.prototype.defaults = { tokens: 0, karma: 0, mod: !1, idle: !1, king: !1, age: "", gender: "", council: !1 }), t;
            })(Backbone.Model));
    }.call(this),
    function () {
        var e,
            t,
            n,
            r,
            i,
            s,
            o = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            u = {}.hasOwnProperty,
            a = function (e, t) {
                function r() {
                    this.constructor = e;
                }
                for (var n in t) u.call(t, n) && (e[n] = t[n]);
                return (r.prototype = t.prototype), (e.prototype = new r()), (e.__super__ = t.prototype), e;
            };
        (t = MakeChat.Models),
            (e = MakeChat.Collections),
            (i = MakeChat.Sounds),
            (n = MakeChat.Sections),
            (r = MakeChat.settings),
            (s = /^[a-zA-Z0-9]+$/),
            (t.Core = (function (u) {
                function f() {
                    return (
                        (this.youtubeResponse = o(this.youtubeResponse, this)),
                        (this.whisperUpdate = o(this.whisperUpdate, this)),
                        (this.unignoreUserResponse = o(this.unignoreUserResponse, this)),
                        (this.timedOut = o(this.timedOut, this)),
                        (this.tokenUpdate = o(this.tokenUpdate, this)),
                        (this.tokenGrabSubmit = o(this.tokenGrabSubmit, this)),
                        (this.tokenGrab = o(this.tokenGrab, this)),
                        (this.systemPost = o(this.systemPost, this)),
                        (this.setUserIdResponse = o(this.setUserIdResponse, this)),
                        (this.setThemeResponse = o(this.setThemeResponse, this)),
                        (this.setPMThreshold = o(this.setPMThreshold, this)),
                        (this.setMaxChars = o(this.setMaxChars, this)),
                        (this.setCookies = o(this.setCookies, this)),
                        (this.selectRoomByUrl = o(this.selectRoomByUrl, this)),
                        (this.selectRoom = o(this.selectRoom, this)),
                        (this.roomUpdate = o(this.roomUpdate, this)),
                        (this.roomChange = o(this.roomChange, this)),
                        (this.roomBackLog = o(this.roomBackLog, this)),
                        (this.requestUnignoreUser = o(this.requestUnignoreUser, this)),
                        (this.requestTypingMessage = o(this.requestTypingMessage, this)),
                        (this.requestSetAge = o(this.requestSetAge, this)),
                        (this.requestSetGender = o(this.requestSetGender, this)),
                        (this.requestRoomUpdate = o(this.requestRoomUpdate, this)),
                        (this.requestPrivateChatMessage = o(this.requestPrivateChatMessage, this)),
                        (this.requestPrivateChat = o(this.requestPrivateChat, this)),
                        (this.requestPostMessage = o(this.requestPostMessage, this)),
                        (this.requestNewRoom = o(this.requestNewRoom, this)),
                        (this.requestModal = o(this.requestModal, this)),
                        (this.requestLeaveRoom = o(this.requestLeaveRoom, this)),
                        (this.requestLeavePrivateChat = o(this.requestLeavePrivateChat, this)),
                        (this.requestKickUser = o(this.requestKickUser, this)),
                        (this.requestJoinRoom = o(this.requestJoinRoom, this)),
                        (this.requestIgnoreUser = o(this.requestIgnoreUser, this)),
                        (this.requestEditRoom = o(this.requestEditRoom, this)),
                        (this.requestAssignModUser = o(this.requestAssignModUser, this)),
                        (this.removeUser = o(this.removeUser, this)),
                        (this.privateTypingStopResponse = o(this.privateTypingStopResponse, this)),
                        (this.privateTypingResponse = o(this.privateTypingResponse, this)),
                        (this.privateMessageResponse = o(this.privateMessageResponse, this)),
                        (this.privateLogOn = o(this.privateLogOn, this)),
                        (this.privateLogOff = o(this.privateLogOff, this)),
                        (this.postMessage = o(this.postMessage, this)),
                        (this.pong = o(this.pong, this)),
                        (this.pingUrlRemove = o(this.pingUrlRemove, this)),
                        (this.pingUrl = o(this.pingUrl, this)),
                        (this.openPrivateTab = o(this.openPrivateTab, this)),
                        (this.nameUpdate = o(this.nameUpdate, this)),
                        (this.modStatus = o(this.modStatus, this)),
                        (this.maxChars = o(this.maxChars, this)),
                        (this.karmaButtonHighlight = o(this.karmaButtonHighlight, this)),
                        (this.karmaRaffle = o(this.karmaRaffle, this)),
                        (this.karmaUpdate = o(this.karmaUpdate, this)),
                        (this.karmaBoost = o(this.karmaBoost, this)),
                        (this.joinRoomResponse = o(this.joinRoomResponse, this)),
                        (this.inviteUserResponse = o(this.inviteUserResponse, this)),
                        (this.ignoreUserResponse = o(this.ignoreUserResponse, this)),
                        (this.idleUser = o(this.idleUser, this)),
                        (this.growlMessage = o(this.growlMessage, this)),
                        (this.growlExpire = o(this.growlExpire, this)),
                        (this.growlClosed = o(this.growlClosed, this)),
                        (this.gaEvent = o(this.gaEvent, this)),
                        (this.facebookLogin = o(this.facebookLogin, this)),
                        (this.exitUrl = o(this.exitUrl, this)),
                        (this.declareMessage = o(this.declareMessage, this)),
                        (this.createRoomResponse = o(this.createRoomResponse, this)),
                        (this.councilUpdate = o(this.councilUpdate, this)),
                        (this.closeRoom = o(this.closeRoom, this)),
                        (this.clearRooms = o(this.clearRooms, this)),
                        (this.closePrivateTab = o(this.closePrivateTab, this)),
                        (this.closePrivateChat = o(this.closePrivateChat, this)),
                        (this.checkNameAvailability = o(this.checkNameAvailability, this)),
                        (this.checkNameResponse = o(this.checkNameResponse, this)),
                        (this.checkConnection = o(this.checkConnection, this)),
                        (this.changeNameResponse = o(this.changeNameResponse, this)),
                        (this.connect = o(this.connect, this)),
                        (this.boostSolveMediaResponse = o(this.boostSolveMediaResponse, this)),
                        (this.boostSolveMedia = o(this.boostSolveMedia, this)),
                        (this.addUser = o(this.addUser, this)),
                        (this.activityUpdate = o(this.activityUpdate, this)),
                        (this.actionMessage = o(this.actionMessage, this)),
                        f.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    a(f, u),
                    (f.prototype.defaults = { connected: !1, timeServerDifference: 0, currentRoomUrl: void 0, theme: "light", sounds_mentioned: !0, sounds_enters: !1, sounds_post: !1, mute_all_sounds: !1, currentSection: "messages" }),
                    (f.prototype.initialize = function () {
                        return (
                            (this.user = new t.User()),
                            (this.users = new Backbone.Collection()),
                            (this.rooms = new e.Rooms()),
                            (this.growls = new e.Growls()),
                            (this.notifications = new e.Notifications()),
                            (this.karmaBoosts = new e.Offers()),
                            (this.tokenGrabs = new e.Offers()),
                            (this.backlogEvents = { system_post: "system", adduser: "enter", removeuser: "leave", action: "action", declare: "declare" }),
                            (this.socket = new t.Socket({ host: r.host })),
                            (this.rooms.user = this.user),
                            (this.privateChats = new e.PrivateChats()),
                            (MakeChat.browser = (function () {
                                if ($.browser.mozilla) return "mozilla";
                                if ($.browser.webkit) return "webkit";
                                if ($.browser.opera) return "opera";
                                if ($.browser.msie) return "msie";
                            })()),
                            this.globalCallbacks(),
                            this.onLoad(),
                            this.socket.connect()
                        );
                    }),
                    (f.prototype.onLoad = function () {
                        var e,
                            t,
                            n,
                            r,
                            s,
                            o = this;
                        return (
                            this.on("change:currentRoomUrl", this.selectRoomByUrl),
                            this.user.on("change:age", this.requestSetAge),
                            this.user.on("change:gender", this.requestSetGender),
                            (n = this.rooms),
                            n.on("requestJoinRoom", this.requestJoinRoom),
                            n.on("requestLeaveRoom", this.requestLeaveRoom),
                            n.on("requestPostMessage", this.requestPostMessage),
                            n.on("requestEditRoom", this.requestEditRoom),
                            n.on("requestRoomUpdate", this.requestRoomUpdate),
                            n.on("selectRoom", this.selectRoom),
                            n.on("change:url", this.selectRoom),
                            n.on("maxChars", this.requestMaxChars),
                            (s = this.users),
                            n.on("mentioned", function () {
                                if (o.get("mute_all_sounds")) return;
                                if (o.get("sounds_mentioned")) return i.play("mentioned");
                            }),
                            n.on("enterleave", function () {
                                if (o.get("mute_all_sounds")) return;
                                if (o.get("sounds_enters")) return i.play("mentioned");
                            }),
                            n.on("post", function () {
                                o.get("mute_all_sounds") && eturn;
                                if (o.get("sounds_post")) return i.play("mentioned");
                            }),
                            (e = this.growls),
                            e.on("growlClosed", this.growlClosed),
                            e.on("growlExpire", this.growlExpire),
                            (t = this.privateChats),
                            t
                                .on("privateMessage", this.requestPrivateChatMessage)
                                .on("requestTypingMessage", this.requestTypingMessage)
                                .on("requestLeavePrivateChat", this.requestLeavePrivateChat)
                                .on("closePrivateChat", this.closePrivateChat)
                                .on("closePrivateTab", this.closePrivateTab)
                                .on("add", this.openPrivateTab),
                            (r = this.socket),
                            r
                                .on("all", this.checkConnection)
                                .on("connect", this.connect)
                                .on("ping", this.pong)
                                .on("checked_name", this.checkNameResponse)
                                .on("name_change_response", this.changeNameResponse)
                                .on("set_id", this.setUserIdResponse)
                                .on("set_cookie", this.setCookies)
                                .on("room_update", this.roomUpdate)
                                .on("join_room launch_room", this.joinRoomResponse)
                                .on("room_created", this.createRoomResponse)
                                .on("close_room", this.closeRoom)
                                .on("room_list_clear", this.clearRooms)
                                .on("post", this.postMessage)
                                .on("action", this.actionMessage)
                                .on("backlog", this.roomBackLog)
                                .on("declare", this.declareMessage)
                                .on("growl", this.growlMessage)
                                .on("ping_url", this.pingUrl)
                                .on("ping_url_remove", this.pingUrlRemove)
                                .on("ga_event", this.gaEvent)
                                .on("adduser", this.addUser)
                                .on("removeuser", this.removeUser)
                                .on("name_update", this.nameUpdate)
                                .on("karma_update", this.karmaUpdate)
                                .on("token_update", this.tokenUpdate)
                                .on("token_grab", this.tokenGrab)
                                .on("system_post", this.systemPost)
                                .on("ignored", this.ignoreUserResponse)
                                .on("unignored", this.unignoreUserResponse)
                                .on("idle_state", this.idleUser)
                                .on("mod_status", this.modStatus)
                                .on("im_message", this.privateMessageResponse)
                                .on("im_is_typing", this.privateTypingResponse)
                                .on("im_not_typing", this.privateTypingStopResponse)
                                .on("im_logoff", this.privateLogOff)
                                .on("im_logon", this.privateLogOn)
                                .on("set_theme", this.setThemeResponse)
                                .on("maxchars", this.setMaxChars)
                                .on("boost_solvemedia", this.boostSolveMedia)
                                .on("boost_solvemedia_response", this.boostSolveMediaResponse)
                                .on("karma_button_highlight", this.karmaButtonHighlight)
                                .on("exit_url", this.exitUrl)
                                .on("karma_raffle", this.karmaRaffle)
                                .on("invite_sent", this.inviteUserResponse)
                                .on("youtube", this.youtubeResponse)
                                .on("karma_boost", this.karmaBoost)
                                .on("council_update", this.councilUpdate)
                                .on("whisper", this.whisperUpdate)
                                .on("pmthreshold", this.setPMThreshold)
                                .on("activity", this.activityUpdate)
                        );
                    }),
                    (f.prototype.actionMessage = function (e) {
                        var t, n;
                        t = this.rooms.get(e.RoomID);
                        if (t == null) return;
                        return (n = "action"), t.post({ id: e.UID, name: e.Name, post: e.Post || e.Message, time: e.Time, type: n });
                    }),
                    (f.prototype.activityUpdate = function (e) {
                        return this.trigger("activity", { message: e.Message, type: e.Type, notify: e.Notification, time: e.Time });
                    }),
                    (f.prototype.addUser = function (e) {
                        var t,
                            n,
                            r,
                            i,
                            s,
                            o = this;
                        (s = e.UID),
                            this.users.get(s) || this.users.add({ id: s, name: e.Name, karma: e.Karma, gender: e.Gender, age: e.Age }),
                            (t = this.users.get(s)),
                            t.set({ name: e.Name, karma: e.Karma, gender: e.Gender, age: e.Age }),
                            (r = this.rooms.get(e.RoomID));
                        if (r == null) return;
                        r.users.add(t.attributes),
                            (i = r.users.get(s)),
                            t.on("change", function () {
                                return i.set(t.attributes);
                            }),
                            this.user.id === i.id && i.set({ self: !0 });
                        if (e.Msg.length > 0) {
                            r.post({ id: s, post: e.Msg, time: e.Time, type: "enter" }),
                                (n = r.users.find(function (e) {
                                    return e.id === o.user.id && e.get("mod");
                                }));
                            if (n == null) return;
                            return r.showModOptions(!0);
                        }
                        return;
                    }),
                    (f.prototype.boostSolveMedia = function (e) {
                        var t, n;
                        return (
                            (n = "solvemedia"),
                            (t = this.karmaBoosts.get(n)) ? e.State === "disabled" && this.karmaBoosts.remove(t) : this.karmaBoosts.add({ id: n, state: e.State, title: e.Title, points: e.Reward, message: e.Message }),
                            (MakeChat.challengeKey = e.ChallengeKey)
                        );
                    }),
                    (f.prototype.boostSolveMediaResponse = function (e) {
                        var t;
                        return (t = e.Success ? "You answered correctly!" : "Sorry, wrong answer."), this.trigger("karmaBoostResult", { message: t, success: e.Success });
                    }),
                    (f.prototype.connect = function () {
                        var e;
                        return (
                            (e = new Date()),
                            this.set({ connected: !0 }),
                            this.socket.send("setup", {
                                UserAgent: { browser: JSON.stringify($.browser), userAgent: navigator.userAgent },
                                Cookies: $.cookie(),
                                GetVars: getUrlVars(),
                                LocalTime: e.getTime(),
                                TimeZone: e.getTimezoneOffset(),
                                Screen: "" + window.screen.width + "x" + window.screen.height + "x" + window.screen.colorDepth,
                            })
                        );
                    }),
                    (f.prototype.changeNameResponse = function (e) {
                        if (!e.Success) return;
                        return this.user.set({ name: e.Name });
                    }),
                    (f.prototype.checkConnection = function () {
                        return clearTimeout(this.connectionId), (this.connectionId = after(r.timeout, this.timedOut));
                    }),
                    (f.prototype.checkNameResponse = function (e) {
                        var t;
                        return (t = e.Available ? "available" : "taken"), this.trigger("checkNameResponse", t);
                    }),
                    (f.prototype.checkNameAvailability = function (e) {
                        return e.length < 3 ? this.trigger("checkNameResponse", "short") : e.match(s) ? this.socket.send("check_name", { Name: e }) : this.trigger("checkNameResponse", "alphanumeric");
                    }),
                    (f.prototype.closePrivateChat = function (e) {
                        return this.trigger("closePrivateChat");
                    }),
                    (f.prototype.closePrivateTab = function (e) {
                        return this.socket.send("im_close_tab", { UID: e });
                    }),
                    (f.prototype.clearRooms = function () {
                        return this.rooms.each(function (e) {
                            return e.set({ display: !1 });
                        });
                    }),
                    (f.prototype.closeRoom = function (e) {
                        var t;
                        t = this.rooms.get(e.RoomID);
                        if (t == null) return;
                        return t.close({ reason: e.Reason, immediate: !0, message: e.CloseMsg });
                    }),
                    (f.prototype.confirm = function (e, t) {
                        return this.trigger("confirm", { message: e, callback: t });
                    }),
                    (f.prototype.councilUpdate = function (e) {
                        var t, n, r;
                        (t = e.Status === "enabled"), (n = this.rooms.get(e.RoomID));
                        if (n == null) return;
                        r = n.users.get(e.UserID);
                        if (r == null) return;
                        return r.set({ council: t });
                    }),
                    (f.prototype.createRoomResponse = function (e) {
                        var t;
                        this.roomUpdate(e), (t = this.rooms.get(e.RoomID));
                        if (t == null) return;
                        return this.trigger("createRoom", t);
                    }),
                    (f.prototype.declareMessage = function (e) {
                        var t;
                        t = this.rooms.get(e.RoomID);
                        if (t == null) return;
                        return t.post({ id: e.UID, name: e.Name || "", post: e.Post || e.Message, time: e.Time, type: "declare" });
                    }),
                    (f.prototype.disconnect = function () {
                        return this.socket.disconnect();
                    }),
                    (f.prototype.exitUrl = function (e) {
                        var t;
                        return (t = e.URL), this.trigger("exitUrl", t);
                    }),
                    (f.prototype.facebookLogin = function (e) {
                        var t, n, r, i;
                        return (t = e.accessToken), (n = e.expiresIn), (r = e.signedRequest), (i = e.userID), this.socket.send("facebook_login", { AccessToken: t, ExpiresIn: n, SignedRequest: r, UserID: i });
                    }),
                    (f.prototype.gaEvent = function (e) {
                        return this._trackEvent(e.Category, e.Action, e.OptLabel, e.OptValue, e.OptNoninteraction);
                    }),
                    (f.prototype._trackEvent = function (e, t, n, r, i) {
                        if (typeof _gaq != "undefined" && _gaq !== null) return _gaq.push(["_trackEvent", e, t, n, r, i]);
                    }),
                    (f.prototype.getEventType = function (e) {
                        return this.backlogEvents[e];
                    }),
                    (f.prototype.globalCallbacks = function () {
                        var e,
                            t = this;
                        return (
                            (e = MakeChat.callbacks),
                            e.on("showSettings", function () {
                                return t.requestModal("settings");
                            }),
                            e.on("showHelp", function () {
                                return t.requestModal("help");
                            }),
                            e.on("showAvailableRooms", function () {
                                return t.requestModal("availableRooms");
                            }),
                            e.on("showKarmaBoostOptions", function () {
                                return t.requestModal("karmaboost");
                            }),
                            e.on("showPrivateChat", function (e) {
                                var r, i;
                                t.openSection(n.MESSAGES);
                                if ((r = t.privateChats.get(e))) {
                                    r.set({ active: !0, closed: !1 }), r.trigger("focus", r);
                                    return;
                                }
                                if (e === t.user.id) return;
                                i = t.users.get(e);
                                if (i != null) return t.requestPrivateChat(i.id);
                            }),
                            e.on("closePrivateChat", function (e) {
                                var n;
                                return (n = t.privateChats.get(e)), n != null ? n.leave() : void 0;
                            }),
                            e.on("joinPublicChat", function (e) {
                                return t.requestJoinRoom(e);
                            }),
                            e.on("showPublicChat", function (e) {
                                var n;
                                return (n = t.rooms.get(e)) != null ? n.trigger("focus") : void 0;
                            }),
                            e.on("sendInvite", function (e) {
                                var n;
                                n = t.users.get(e);
                                if (n == null) return;
                                return n.trigger("sendInvite", n);
                            }),
                            e.on("toggleIgnore", function (e) {
                                var n;
                                n = t.users.get(e);
                                if (n == null) return;
                                return n.get("ignored") ? t.requestUnignoreUser(e) : t.requestIgnoreUser(e);
                            }),
                            e.on("solvemedia_response", function (e) {
                                return t.socket.send("boost_solvemedia_check", { Challenge: e.puzzleId, UserResponse: e.response });
                            }),
                            e.on("auth.statusChange", function (e) {
                                switch (e.status) {
                                    case "connected":
                                        return t.trigger("fb.connected"), t.facebookLogin(e);
                                    case "not_authorized":
                                        return t.trigger("fb.register");
                                    default:
                                        return t.trigger("fb.login");
                                }
                            }),
                            e.on("user.show", function (e) {
                                return t.trigger("user.show", e);
                            }),
                            e.on("user.hide", function (e) {
                                return t.trigger("user.hide", e);
                            }),
                            e.on("all", function (e, n, r) {
                                if (r == null) return;
                                return t.socket.send("growl_callback", { GrowlID: r, ActionID: e });
                            })
                        );
                    }),
                    (f.prototype.growlClosed = function (e) {
                        return this.socket.send("system_growl_close", { GrowlID: e, Closed: "closed" });
                    }),
                    (f.prototype.growlExpire = function (e) {
                        return this.socket.send("system_growl_close", { GrowlID: e, Closed: "expired" });
                    }),
                    (f.prototype.growlMessage = function (e) {
                        var t, n, r;
                        this.growls.add({ id: e.GrowlID, message: e.Message, sticky: e.Sticky, timeout: e.Timeout, roomId: e.RoomID }),
                            (t = this.growls.get(e.GrowlID)),
                            (r = e.RoomID),
                            r === "all" &&
                                this.rooms.each(function (e) {
                                    return e.growl(t);
                                }),
                            (n = this.rooms.get(r));
                        if (n == null) return;
                        n.growl(t);
                    }),
                    (f.prototype.idleUser = function (e) {
                        return this.rooms.each(function (t) {
                            var n, r, i;
                            i = t.users.get(e.UID);
                            if (i == null) return;
                            i.set({ idle: e.State === "idle" }), (n = "" + i.get("name") + " came back from being idle."), (r = "available"), i.get("idle") && ((n = "" + i.get("name") + " is now idle."), (r = "idle"));
                            return;
                        });
                    }),
                    (f.prototype.ignoreUserResponse = function (e) {
                        var t;
                        t = this.users.get(e.UID);
                        if (t == null) return;
                        return t.set({ ignored: !0 });
                    }),
                    (f.prototype.inviteUserResponse = function (e) {
                        return this.trigger("inviteSent", { userId: e.UID, roomId: e.RoomID });
                    }),
                    (f.prototype.joinRoomResponse = function (e) {
                        return this.rooms.join({ id: e.RoomID });
                    }),
                    (f.prototype.karmaBoost = function (e) {
                        var t, n, r, i;
                        (i = e.Type), (n = e.ChallengeKey), (r = e.State);
                        if (!(t = this.karmaBoosts.get(i)))
                            return (
                                this.karmaBoosts.add({ id: i, type: e.Type, state: r, title: e.Title, message: e.Message || e.Description, instructions: e.Instructions, reward: e.Reward, challengKey: n, refLink: e.ReferralURL }),
                                (MakeChat.challengeKey = n)
                            );
                        if (r === "disabled") return this.karmaBoosts.remove(t);
                    }),
                    (f.prototype.karmaBoostLaunched = function () {
                        return this.socket.send("karma_boost_launched", {});
                    }),
                    (f.prototype.karmaUpdate = function (e) {
                        var t;
                        return e.UID === this.user.id && this.user.set({ karma: e.Karma }), (t = this.users.get(e.UID)), t != null ? t.set({ karma: e.Karma }) : void 0;
                    }),
                    (f.prototype.karmaRaffle = function (e) {
                        var t;
                        t = this.rooms.get(e.RoomID);
                        if (t == null) return;
                        return t.raffle.set({ seconds: e.Seconds, message: e.Message, display: e.Display }), t.raffle.startTimer();
                    }),
                    (f.prototype.karmaButtonHighlight = function (e) {
                        return this.trigger("karmaButtonHighlight", { state: e.State });
                    }),
                    (f.prototype.maxChars = function (e) {
                        return this.socket.send("max_chars_hit", { CurrentMax: e });
                    }),
                    (f.prototype.modStatus = function (e) {
                        var t, n, r;
                        (t = e.ModStatus === "enabled"), (n = this.rooms.get(e.RoomID));
                        if (n == null) return;
                        r = n.users.get(e.UserID);
                        if (r == null) return;
                        r.set({ mod: t });
                        if (r.id !== this.user.id) return;
                        return n.showModOptions(t);
                    }),
                    (f.prototype.nameUpdate = function (e) {
                        var t;
                        t = this.users.get(e.UID);
                        if (t == null) return;
                        t.set({ name: e.Name });
                        if (e.UID === this.user.id) return this.user.set({ name: e.Name });
                    }),
                    (f.prototype.newPrivateChat = function (e) {
                        var t,
                            n,
                            r = this;
                        return (
                            (n = this.users.get(e)),
                            this.privateChats.add(n.attributes),
                            (t = this.privateChats.get(e)),
                            n.on("change", function () {
                                return t.set(n.attributes);
                            }),
                            t
                        );
                    }),
                    (f.prototype.openPrivateTab = function (e) {
                        return this.socket.send("im_open_tab", { UID: e.id });
                    }),
                    (f.prototype.openSection = function (e) {
                        return this.set({ currentSection: e });
                    }),
                    (f.prototype.pingUrl = function (e) {
                        return this.trigger("pingUrl", { url: e.URL, id: e.id, timeout: e.Timeout });
                    }),
                    (f.prototype.pingUrlRemove = function (e) {
                        return this.trigger("pingUrlRemove", { id: e.id });
                    }),
                    (f.prototype.pong = function (e) {
                        return this.socket.send("pong", { Timestamp: String(new Date().getTime()), key: e.Key }), this.checkConnection();
                    }),
                    (f.prototype.postMessage = function (e) {
                        var t, n;
                        t = this.rooms.get(e.RoomID);
                        if (t == null) return;
                        return this.user.id === e.UID && (n = "self"), t.post({ id: e.UID, name: e.Name, post: e.Post, time: e.Time, type: n });
                    }),
                    (f.prototype.privateLogOff = function (e) {
                        var t;
                        t = this.privateChats.get(e.UID);
                        if (t == null) return;
                        return t.set({ online: !1 });
                    }),
                    (f.prototype.privateLogOn = function (e) {
                        var t;
                        t = this.privateChats.get(e.UID);
                        if (t == null) return;
                        return t.set({ online: !0, name: e.Name });
                    }),
                    (f.prototype.privateMessageResponse = function (e) {
                        var t, n, r, i;
                        return (
                            (t = e.UID),
                            (n = e.Message),
                            (r = this.privateChats.get(t) || this.newPrivateChat(t)),
                            (i = e.Type),
                            i.indexOf("system") > -1 && (i += " announce"),
                            r.post({ name: r.get("name"), post: n, time: new Date().getTime() / 1e3, type: i }),
                            this.trigger("notification", { type: "messages", message: n })
                        );
                    }),
                    (f.prototype.privateTypingResponse = function (e) {
                        var t;
                        t = this.privateChats.get(e.UID);
                        if (t == null) return;
                        return t.set({ typing: !0 });
                    }),
                    (f.prototype.privateTypingStopResponse = function (e) {
                        var t;
                        t = this.privateChats.get(e.UID);
                        if (t == null) return;
                        return t.set({ typing: !1 });
                    }),
                    (f.prototype.removeUser = function (e) {
                        var t, n;
                        t = this.rooms.get(e.RoomID);
                        if (t == null) return;
                        n = t.users.get(e.UID);
                        if (n == null) return;
                        return t.post({ id: n.id, post: e.Msg, time: e.Time, type: "leave" }), n.trigger("leave", n), t.users.remove(n);
                    }),
                    (f.prototype.requestAssignModUser = function (e) {
                        var t,
                            n = this;
                        return (
                            (t = "Do you want to promote " + e.userName + " to moderator of this room?"),
                            this.confirm(t, function () {
                                return n.socket.send("assign_moderator", { RoomID: e.roomId, UserID: e.userId });
                            })
                        );
                    }),
                    (f.prototype.requestChangeName = function (e) {
                        return this.socket.send("name_change", { Name: e });
                    }),
                    (f.prototype.requestEditRoom = function (e) {
                        return this.trigger("editRoom", e);
                    }),
                    (f.prototype.requestIgnoreUser = function (e) {
                        return this.socket.send("ignore", { UID: e });
                    }),
                    (f.prototype.requestJoinRoom = function (e) {
                        return this.socket.send("join_room", { RoomID: e });
                    }),
                    (f.prototype.requestKickUser = function (e) {
                        return this.socket.send("kick_user", { RoomID: e.roomId, UserID: e.userId, Reason: "kicked", Message: "You have been kicked from the room" });
                    }),
                    (f.prototype.requestLeavePrivateChat = function (e) {
                        return this.socket.send("im_close_tab", { UID: e });
                    }),
                    (f.prototype.requestLeaveRoom = function (e) {
                        return this.socket.send("leave_room", { RoomID: e });
                    }),
                    (f.prototype.requestModal = function (e) {
                        return this.trigger("modal", e);
                    }),
                    (f.prototype.requestNewRoom = function (e) {
                        return this.socket.send("create_room", {});
                    }),
                    (f.prototype.requestPingUrlRemove = function (e) {
                        return this.socket.send("ping_url_remove_success", { id: e.id, Success: "true" });
                    }),
                    (f.prototype.requestPostMessage = function (e, t) {
                        return this.socket.send("post", { Post: e, RoomID: t });
                    }),
                    (f.prototype.requestPrivateChat = function (e) {
                        var t;
                        t = this.privateChats.get(e) || this.newPrivateChat(e);
                        if (t == null) return;
                        return t.select(), this.trigger("openPrivateChat"), this.rooms.active.trigger("openPrivateChat", this);
                    }),
                    (f.prototype.requestPrivateChatMessage = function (e) {
                        return this.socket.send("im_post", { UID: e.id, Message: e.post });
                    }),
                    (f.prototype.requestRoomUpdate = function (e) {
                        var t = this;
                        return (
                            this.socket.send("room_change_name", { RoomID: e.id, Name: e.name }),
                            after(1, function () {
                                return t.socket.send("room_change_url", { RoomID: e.id, URL: e.url });
                            })
                        );
                    }),
                    (f.prototype.requestSetGender = function (e) {
                        return this.socket.send("set_gender", { Gender: e.get("gender") });
                    }),
                    (f.prototype.requestSetAge = function (e) {
                        return this.socket.send("set_age", { Age: e.get("age") });
                    }),
                    (f.prototype.requestSetName = function (e) {
                        var t;
                        return (
                            this.user.set({ tempName: e }),
                            (t = { Name: e, RoomURL: this.get("currentRoomUrl"), UserAgent: { browser: JSON.stringify($.browser), userAgent: navigator.userAgent }, Cookies: $.cookie() }),
                            $.cookie("gender", this.user.get("gender"), { expires: 365, path: "/" }),
                            $.cookie("age", this.user.get("age"), { expires: 365, path: "/" }),
                            $.cookie("username", e, { expires: 365, path: "/" }),
                            this.socket.send("login", t)
                        );
                    }),
                    (f.prototype.requestSetTheme = function (e) {
                        return this.set({ theme: e }), this.socket.send("update_theme", { Theme: e });
                    }),
                    (f.prototype.requestTypingMessage = function (e) {
                        return this.socket.send("im_keystroke", { UID: e.id, Key: e.key, Timestamp: new Date().getTime().toString() });
                    }),
                    (f.prototype.requestUnignoreUser = function (e) {
                        return this.socket.send("unignore", { UID: e });
                    }),
                    (f.prototype.roomBackLog = function (e) {
                        var t,
                            n,
                            r,
                            i = this;
                        return (
                            (r = this.rooms.get(e.RoomID)),
                            (n = e.Events),
                            (t = []),
                            _.each(n, function (e, n) {
                                var s;
                                return (s = i.getEventType(e.C) || ""), (s += " backlog"), t.push(r.post({ id: e.UID, name: e.Name || "", post: e.Post || e.Msg || e.Message, time: e.Time, type: s }, !0));
                            }),
                            r.trigger("backlog", t)
                        );
                    }),
                    (f.prototype.roomChange = function (e) {
                        return this.set({ currentRoomUrl: e });
                    }),
                    (f.prototype.roomUpdate = function (e) {
                        return this.rooms.update({ id: e.RoomID, name: e.RoomName, url: e.RoomURL, totalUsers: e.NumUsers || 0, display: e.Display });
                    }),
                    (f.prototype.selectRoom = function (e) {
                        return this.trigger("selectRoom", e);
                    }),
                    (f.prototype.selectRoomByUrl = function (e) {
                        var t, n;
                        (n = e.get("currentRoomUrl")),
                            (t = this.rooms.find(function (e) {
                                return n === e.get("url");
                            }));
                        if (t == null) return;
                        return t.select();
                    }),
                    (f.prototype.sendRoomInvite = function (e) {
                        return this.socket.send("invite", { UID: e.userId, RoomID: e.roomId });
                    }),
                    (f.prototype.setCookies = function (e) {
                        return $.cookie(e.Key, e.Data, { expires: 365, path: "/" }), this.socket.send("cookie_set", { Key: e.Key, Data: e.Data, Expires: e.Expires, Success: !0, ErrorMsg: null });
                    }),
                    (f.prototype.setMaxChars = function (e) {
                        return (MakeChat.settings.maxChars = e.Max);
                    }),
                    (f.prototype.setPMThreshold = function (e) {
                        return this.user.set({ pmThreshold: e.Value });
                    }),
                    (f.prototype.setPrivateChatThreshold = function (e) {
                        return this.socket.send("karma_threshold", { Threshold: e });
                    }),
                    (f.prototype.setThemeResponse = function (e) {
                        return console.log("yo set theme", e), this.set({ theme: e.Theme });
                    }),
                    (f.prototype.setUserIdResponse = function (e) {
                        var t,
                            n = this;
                        return (
                            (t = e.PMThresholdOptions),
                            this.user.set({ id: e.PubId, privateId: e.ID, name: this.user.get("tempName") }),
                            _.each(t, function (e) {
                                return n.trigger("thresholdOption", e);
                            }),
                            this.trigger("setUserID", this.user)
                        );
                    }),
                    (f.prototype.systemPost = function (e) {
                        var t;
                        t = this.rooms.get(e.RoomID);
                        if (t == null) return;
                        return t.post({ name: "system", post: e.Message, time: e.Time, type: "system" });
                    }),
                    (f.prototype.tokenGrab = function (e) {
                        var t, n, r;
                        (r = e.Type), (t = e.State);
                        if (r === "youtube_success") return this.trigger("tokenGrabResult", e.Success);
                        if (!(n = this.tokenGrabs.get(r)))
                            return this.tokenGrabs.add({ id: r, type: r, state: t, title: e.Title, reward: e.Reward, message: e.Description, instructions: e.Instructions, url1: e.URL1, url2: e.URL2, url3: e.URL3 });
                        if (t === "disabled") return this.tokenGrabs.remove(n);
                    }),
                    (f.prototype.tokenGrabSubmit = function (e) {
                        return this.socket.send("token_grab_youtube", { Code1: e.code1, Code2: e.code2, Code3: e.code3 });
                    }),
                    (f.prototype.tokenUpdate = function (e) {
                        var t;
                        return (t = e.Tokens), this.user.set({ tokens: t });
                    }),
                    (f.prototype.timedOut = function () {
                        this.trigger("timedOut");
                    }),
                    (f.prototype.unignoreUserResponse = function (e) {
                        var t;
                        t = this.users.get(e.UID);
                        if (t == null) return;
                        return t.set({ ignored: !1 });
                    }),
                    (f.prototype.whisperUpdate = function (e) {
                        var t, n, r, i;
                        n = this.rooms.get(e.RoomID);
                        if (n == null) return;
                        (i = "whisper"), (r = this.users.get(e.SenderID));
                        if (r == null) return;
                        t = this.users.get(e.ReceiverID);
                        if (t == null) return;
                        return (e.Message = "@[" + t.id + "|" + t.get("name") + "] " + e.Message), n.post({ id: r.id, name: r.get("name"), post: e.Post || e.Message, time: e.Time, type: i });
                    }),
                    (f.prototype.youtubeResponse = function (e) {
                        return this.trigger("youtubeVideo", { videoId: e.VideoID, type: e.Type, id: e.ID, title: e.Title, description: e.Description, close: e.Close });
                    }),
                    (f.prototype.youtubeEvent = function (e, t) {
                        return this.socket.send("youtube_event", { ID: e, Event: t });
                    }),
                    (f.prototype.youtubeClose = function (e) {
                        return this.socket.send("youtube_close", { ID: e });
                    }),
                    f
                );
            })(Backbone.Model));
    }.call(this),
    function () {
        var e,
            t,
            n = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            r = {}.hasOwnProperty,
            i = function (e, t) {
                function i() {
                    this.constructor = e;
                }
                for (var n in t) r.call(t, n) && (e[n] = t[n]);
                return (i.prototype = t.prototype), (e.prototype = new i()), (e.__super__ = t.prototype), e;
            };
        (e = MakeChat.Models),
            (t = MakeChat.patterns),
            (e.Growl = (function (e) {
                function r() {
                    return (this.tick = n(this.tick, this)), r.__super__.constructor.apply(this, arguments);
                }
                return (
                    i(r, e),
                    (r.prototype.defaults = { time: 0, sticky: !1, message: "", expired: !1, closed: !1 }),
                    (r.prototype.initialize = function () {
                        var e;
                        return (e = this.get("message")), this.set({ message: this.parseCommands(e, this.id) }), this.tick();
                    }),
                    (r.prototype.close = function () {
                        return this.set({ closed: !0 });
                    }),
                    (r.prototype.parseCommands = function (e, n) {
                        return e.replace(t.regexParseGrowlButton, function (e, r, i, s) {
                            return i.match(t.regexUrl)
                                ? '<a data-callback="' + i + '" class="growl_button ' + s + '" href="' + i + '" target="_blank">' + r + "</a>"
                                : '<a data-callback="' + i + '" class="growl_button ' + s + '" onclick="window.MakeChat.callbacks.trigger(\'' + i + "','" + s + "','" + n + "');\">" + r + "</a>";
                        });
                    }),
                    (r.prototype.tick = function () {
                        var e;
                        return (e = this.get("timeout")), e--, this.set({ timeout: e }), e > 0 ? after(1e3, this.tick) : this.set({ expired: !0 });
                    }),
                    r
                );
            })(Backbone.Model));
    }.call(this),
    function () {
        var e,
            t,
            n,
            r = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            i = {}.hasOwnProperty,
            s = function (e, t) {
                function r() {
                    this.constructor = e;
                }
                for (var n in t) i.call(t, n) && (e[n] = t[n]);
                return (r.prototype = t.prototype), (e.prototype = new r()), (e.__super__ = t.prototype), e;
            };
        (t = MakeChat.Models),
            (e = MakeChat.Collections),
            (n = MakeChat.patterns),
            (t.Room = (function (i) {
                function o() {
                    return (
                        (this.showModOptions = r(this.showModOptions, this)),
                        (this.sendMessage = r(this.sendMessage, this)),
                        (this.requestUnignoreUser = r(this.requestUnignoreUser, this)),
                        (this.requestPrivateChat = r(this.requestPrivateChat, this)),
                        (this.requestKickUser = r(this.requestKickUser, this)),
                        (this.requestInviteUser = r(this.requestInviteUser, this)),
                        (this.requestIgnoreUser = r(this.requestIgnoreUser, this)),
                        (this.requestAssignModUser = r(this.requestAssignModUser, this)),
                        (this.join = r(this.join, this)),
                        (this.editRoom = r(this.editRoom, this)),
                        (this.changeUserName = r(this.changeUserName, this)),
                        (this.addRemoveUser = r(this.addRemoveUser, this)),
                        o.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    s(o, i),
                    (o.prototype.defaults = { subscribed: !1, selected: !1, totalUsers: 0, display: !0, index: 0 }),
                    (o.prototype.initialize = function () {
                        return (this.users = new e.Users()), (this.growls = new Backbone.Collection()), (this.raffle = new t.Raffle()), this.onLoad();
                    }),
                    (o.prototype.onLoad = function () {
                        return (
                            this.users.on("kick", this.requestKickUser),
                            this.users.on("assignMod", this.requestAssignModUser),
                            this.users.on("chat", this.requestPrivateChat),
                            this.users.on("ignore", this.requestIgnoreUser),
                            this.users.on("invite", this.requestInviteUser),
                            this.users.on("unignore", this.requestUnignoreUser),
                            this.users.on("add remove", this.addRemoveUser),
                            this.users.on("change:name", this.changeUserName)
                        );
                    }),
                    (o.prototype.addRemoveUser = function () {
                        return this.trigger("enterleave", this);
                    }),
                    (o.prototype.close = function (e) {
                        return this.set({ subscribed: !e.immediate, display: !1 }), this.trigger("closed", e);
                    }),
                    (o.prototype.changeUserName = function (e) {
                        return this.post({ id: e.id, name: e.get("name"), post: "" + e.previous("name") + " is now " + e.get("name"), type: "system" });
                    }),
                    (o.prototype.deselect = function () {
                        return this.set({ selected: !1 });
                    }),
                    (o.prototype.editRoom = function () {
                        return this.trigger("requestEditRoom", this);
                    }),
                    (o.prototype.growl = function (e) {
                        var t;
                        return (t = e.get("message")), (t = this.parsePost(t)), e.set({ message: t }), this.trigger("growl", e);
                    }),
                    (o.prototype.join = function () {
                        return this.trigger("requestJoinRoom", this.id);
                    }),
                    (o.prototype.leave = function () {
                        return this.trigger("requestLeaveRoom", this.id);
                    }),
                    (o.prototype.hasMentions = function (e) {
                        var t, n, r;
                        return (t = this.collection.user.id), (r = this.collection.user.get("name")), (n = "@[" + t + "|" + r + "]"), e.indexOf(n) > -1;
                    }),
                    (o.prototype.maxChars = function (e) {
                        return this.trigger("maxChars", e);
                    }),
                    (o.prototype.parseInviteLinks = function (e) {
                        var t = this;
                        return e.replace(n.regexInviteLink, function (e, t, n) {
                            var r;
                            return (r = "onclick=\"MakeChat.callbacks.trigger('joinPublicChat', '" + t + "')\""), "<span class='invite' " + r + " >" + n + "</span>";
                        });
                    }),
                    (o.prototype.parseAction = function (e) {
                        return e.replace(n.regexActionWord, function (e) {
                            return '<span class="action">' + e + "</span>";
                        });
                    }),
                    (o.prototype.parsePost = function (e, t) {
                        var r = this;
                        return (
                            (e = MakeChat.convertPost(e)),
                            (e = e.replace(n.regexParseMention, function (e, n, i) {
                                var s, o;
                                return (
                                    (s = "mention"),
                                    (o = r.users.get(n)),
                                    o != null
                                        ? (o.get("mod") && (s += " mod"),
                                          o.get("king") && (s += " king"),
                                          (i = o.get("name")),
                                          "<b onclick=\"MakeChat.callbacks.trigger('showPrivateChat', '" + o.id + "')\" data-id='" + o.id + "' class=\"" + s + '">' + i + "</b>")
                                        : t
                                        ? '<b class="' + s + '">' + i + "</b>"
                                        : i
                                );
                            })),
                            (e = e.replace(n.regexParseHashTag, function (e) {
                                return e.length > 3 ? '<span class="hashtag">' + e + "</span>" : e;
                            })),
                            e
                        );
                    }),
                    (o.prototype.post = function (e, t) {
                        var n, r, i, s, o;
                        return (
                            (o = e.type) == null && (e.type = ""),
                            (n = this.hasMentions(e.post)),
                            (r = e.type.indexOf("backlog") > -1),
                            (e.post = this.parsePost(e.post, r)),
                            e.type.indexOf("action") > -1 && (e.post = this.parseAction(e.post)),
                            (e.post = this.parseInviteLinks(e.post)),
                            r ||
                                (n && ((e.type += " mentioned"), this.trigger("mentioned", { room: this, name: e.name, post: e.post })),
                                e.id != null && ((s = this.users.get(e.id)), s != null && (s.get("mod") && (e.type += " mod"), s.get("king") && (e.type += " king")))),
                            (i = { id: e.id, name: e.name, time: e.time, post: e.post, type: e.type || "" }),
                            t || this.trigger("post", i),
                            i
                        );
                    }),
                    (o.prototype.requestAssignModUser = function (e) {
                        return this.trigger("requestAssignModUser", { userName: e.get("name"), userId: e.id, roomId: this.id });
                    }),
                    (o.prototype.requestIgnoreUser = function (e) {
                        return this.trigger("requestIgnoreUser", e.id);
                    }),
                    (o.prototype.requestInviteUser = function (e) {
                        return this.trigger("requestInviteUser", e);
                    }),
                    (o.prototype.requestKickUser = function (e) {
                        return this.trigger("requestKickUser", { userId: e.id, roomId: this.id });
                    }),
                    (o.prototype.requestPrivateChat = function (e) {
                        return this.trigger("requestPrivateChat", e.id);
                    }),
                    (o.prototype.requestUnignoreUser = function (e) {
                        return this.trigger("requestUnignoreUser", e.id);
                    }),
                    (o.prototype.select = function () {
                        return this.set({ selected: !0 });
                    }),
                    (o.prototype.subscribe = function () {
                        return this.set({ subscribed: !0 });
                    }),
                    (o.prototype.unsubscribe = function () {
                        var e = this;
                        return (
                            this.growls.each(function (e) {
                                return e.close();
                            }),
                            this.growls.reset(),
                            this.users.reset(),
                            this.set({ subscribed: !1 })
                        );
                    }),
                    (o.prototype.update = function (e) {
                        return this.trigger("requestRoomUpdate", { id: this.id, name: e.name, url: e.url });
                    }),
                    (o.prototype.sendMessage = function (e) {
                        var t, n;
                        n = /^\/pm \@\[([a-z0-9]+)\|\w+\]/;
                        if ((t = e.match(n))) {
                            MakeChat.callbacks.trigger("showPrivateChat", t[1]);
                            return;
                        }
                        n = /^\/clear/;
                        if ((t = e.match(n))) {
                            this.trigger("clearLogs");
                            return;
                        }
                        return this.trigger("requestPostMessage", e, this.id);
                    }),
                    (o.prototype.showModOptions = function (e) {
                        return (
                            this.trigger("showModOptions", e),
                            this.users.each(function (t) {
                                return t.set({ modOptions: e });
                            })
                        );
                    }),
                    o
                );
            })(Backbone.Model));
    }.call(this),
    function () {
        var e,
            t = {}.hasOwnProperty,
            n = function (e, n) {
                function i() {
                    this.constructor = e;
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return (i.prototype = n.prototype), (e.prototype = new i()), (e.__super__ = n.prototype), e;
            };
        (e = MakeChat.Models),
            (e.PrivateChat = (function (e) {
                function t() {
                    return t.__super__.constructor.apply(this, arguments);
                }
                return (
                    n(t, e),
                    (t.prototype.defaults = { active: !1, closed: !1, focused: !1, unread: 0 }),
                    (t.prototype.blur = function () {
                        return this.set({ focused: !1 });
                    }),
                    (t.prototype.focus = function () {
                        return this.set({ focused: !0 });
                    }),
                    (t.prototype.leave = function () {
                        return this.set({ closed: !0 }), this.trigger("closePrivateTab", this.id);
                    }),
                    (t.prototype.parsePost = function (e) {
                        return (e = MakeChat.convertPost(e));
                    }),
                    (t.prototype.post = function (e) {
                        return (e.post = this.parsePost(e.post)), this.set({ closed: !1 }), (!this.get("active") || !this.get("focused")) && this.unread(), this.trigger("post", e);
                    }),
                    (t.prototype.select = function () {
                        return this.set({ active: !0, closed: !1 }), this.clearUnread(), this.trigger("select");
                    }),
                    (t.prototype.send = function (e) {
                        return this.trigger("privateMessage", e);
                    }),
                    (t.prototype.typing = function (e) {
                        return this.trigger("requestTypingMessage", { id: this.id, key: e });
                    }),
                    (t.prototype.unread = function () {
                        return this.set({ unread: this.get("unread") + 1 });
                    }),
                    (t.prototype.clearUnread = function () {
                        return this.set({ unread: 0 });
                    }),
                    t
                );
            })(Backbone.Model));
    }.call(this),
    function () {
        var e,
            t = {}.hasOwnProperty,
            n = function (e, n) {
                function i() {
                    this.constructor = e;
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return (i.prototype = n.prototype), (e.prototype = new i()), (e.__super__ = n.prototype), e;
            };
        (e = MakeChat.Models),
            (e.Raffle = (function (e) {
                function t() {
                    return t.__super__.constructor.apply(this, arguments);
                }
                return (
                    n(t, e),
                    (t.prototype.defaults = { seconds: 0, message: "", display: !1 }),
                    (t.prototype.startTimer = function () {
                        return this.tick();
                    }),
                    (t.prototype.tick = function () {
                        var e = this;
                        return (
                            clearInterval(this.interval),
                            (this.interval = every(1e3, function () {
                                var t;
                                (t = e.get("seconds")), t--, e.set({ seconds: t });
                                if (t <= 0) return clearInterval(e.interval);
                            }))
                        );
                    }),
                    t
                );
            })(Backbone.Model));
    }.call(this),
    function () {
        var e,
            t = {}.hasOwnProperty,
            n = function (e, n) {
                function i() {
                    this.constructor = e;
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return (i.prototype = n.prototype), (e.prototype = new i()), (e.__super__ = n.prototype), e;
            };
        (e = MakeChat.Models),
            (e.Notification = (function (e) {
                function t() {
                    return t.__super__.constructor.apply(this, arguments);
                }
                return n(t, e), t;
            })(Backbone.Model));
    }.call(this),
    function () {
        var e,
            t = {}.hasOwnProperty,
            n = function (e, n) {
                function i() {
                    this.constructor = e;
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return (i.prototype = n.prototype), (e.prototype = new i()), (e.__super__ = n.prototype), e;
            };
        (e = MakeChat.Models),
            (e.Offer = (function (e) {
                function t() {
                    return t.__super__.constructor.apply(this, arguments);
                }
                return (
                    n(t, e),
                    (t.prototype.launch = function () {
                        return this.trigger("launch", this);
                    }),
                    t
                );
            })(Backbone.Model));
    }.call(this),
    function () {
        var e,
            t,
            n = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            r = {}.hasOwnProperty,
            i = function (e, t) {
                function i() {
                    this.constructor = e;
                }
                for (var n in t) r.call(t, n) && (e[n] = t[n]);
                return (i.prototype = t.prototype), (e.prototype = new i()), (e.__super__ = t.prototype), e;
            };
        (e = MakeChat.Collections),
            (t = MakeChat.Models),
            (e.Users = (function (e) {
                function r() {
                    return (this.sortUsers = n(this.sortUsers, this)), (this.changeUsers = n(this.changeUsers, this)), (this.changeName = n(this.changeName, this)), r.__super__.constructor.apply(this, arguments);
                }
                return (
                    i(r, e),
                    (r.prototype.model = t.User),
                    (r.prototype.comparator = function (e) {
                        return e.get("name").toLowerCase();
                    }),
                    (r.prototype.initialize = function () {
                        return this.on("add remove change:karma change:idle change:council", this.changeUsers), this.on("change:name", this.changeName);
                    }),
                    (r.prototype.changeName = function () {
                        return this.sort();
                    }),
                    (r.prototype.changeUsers = function () {
                        return clearTimeout(this.timeoutCb), (this.timeoutCb = after(500, this.sortUsers));
                    }),
                    (r.prototype.sortUsers = function () {
                        var e,
                            t,
                            n,
                            r,
                            i,
                            s,
                            o,
                            u,
                            a,
                            f = this;
                        return (
                            (u = this.toJSON()),
                            (a = _.sortBy(u, function (e) {
                                return -e.karma;
                            })),
                            (n = []),
                            (e = []),
                            (r = []),
                            (o = 0),
                            _.each(a, function (t) {
                                return t.karma > o && (o = t.karma), t.council ? n.push(t) : t.idle ? r.push(t) : e.push(t);
                            }),
                            this.trigger("councilEnabled", n.length > 0),
                            (t = [].concat(e).concat(r)),
                            _.each(n, function (e, t) {
                                var n;
                                n = f.get(e.id);
                                if (n == null) return;
                                return n.set({ karmaRatio: e.karma / o, sortId: t });
                            }),
                            _.each(t, function (e, t) {
                                var n;
                                n = f.get(e.id);
                                if (n == null) return;
                                return n.set({ karmaRatio: e.karma / o, sortId: t });
                            }),
                            (i = e.splice(0, 1)[0] || r.splice(0, 1)[0]),
                            this.king && this.king.set({ king: !1 }),
                            (s = this.get(i.id)),
                            s.set({ king: !0, karmaRatio: i.karma / o, sortId: 0 }),
                            (this.king = s),
                            this
                        );
                    }),
                    r
                );
            })(Backbone.Collection));
    }.call(this),
    function () {
        var e,
            t,
            n = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            r = {}.hasOwnProperty,
            i = function (e, t) {
                function i() {
                    this.constructor = e;
                }
                for (var n in t) r.call(t, n) && (e[n] = t[n]);
                return (i.prototype = t.prototype), (e.prototype = new i()), (e.__super__ = t.prototype), e;
            };
        (e = MakeChat.Collections),
            (t = MakeChat.Models),
            (e.Rooms = (function (e) {
                function r() {
                    return (
                        (this.requestSelectRoom = n(this.requestSelectRoom, this)),
                        (this.requestLeaveRoom = n(this.requestLeaveRoom, this)),
                        (this.changeSubscribed = n(this.changeSubscribed, this)),
                        (this.changeTotalUsers = n(this.changeTotalUsers, this)),
                        r.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    i(r, e),
                    (r.prototype.model = t.Room),
                    (r.prototype.comparator = function (e) {
                        return -e.get("totalUsers");
                    }),
                    (r.prototype.initialize = function () {
                        return (
                            (this.highestKarma = 0),
                            this.on("requestLeaveRoom", this.requestLeaveRoom).on("change:selected", this.requestSelectRoom).on("change:subscribed", this.changeSubscribed).on("change:totalUsers", this.changeTotalUsers)
                        );
                    }),
                    (r.prototype.changeTotalUsers = function (e) {
                        return this.sort(), e.set({ index: this.indexOf(e) });
                    }),
                    (r.prototype.changeSubscribed = function (e) {
                        var t, n;
                        return (
                            (n = this.subscribed) == null && (this.subscribed = []),
                            e.get("subscribed") ? (this.subscribed.push(e), this.trigger("subscribed")) : ((t = this.subscribed.indexOf(e)), this.subscribed.splice(t, 1), this.trigger("unsubscribed"))
                        );
                    }),
                    (r.prototype.create = function (e) {
                        var n;
                        return (n = new t.Room(e)), this.add(n);
                    }),
                    (r.prototype.join = function (e) {
                        var t;
                        return (t = this.get(e.id)), t == null ? this.create(e) : (t.set(e), t.subscribe(), this.select(t));
                    }),
                    (r.prototype.nextSubscribed = function () {
                        var e, t;
                        return (e = this.subscribed.indexOf(this.active)), e++, e >= this.subscribed.length && (e = 0), (t = this.subscribed[e]), t != null ? t.select() : void 0;
                    }),
                    (r.prototype.prevSubscribed = function () {
                        var e, t;
                        return (e = this.subscribed.indexOf(this.active)), e--, e < 0 && (e = this.subscribed.length - 1), (t = this.subscribed[e]), t != null ? t.select() : void 0;
                    }),
                    (r.prototype.requestLeaveRoom = function (e) {
                        var t, n;
                        (n = this.get(e)), n.unsubscribe();
                        if (this.active === n) {
                            t = this.where({ subscribed: !0 })[0];
                            if (t != null) return this.select(t);
                        }
                    }),
                    (r.prototype.requestSelectRoom = function (e) {
                        if (!e.get("subscribed")) return;
                        if (this.active === e) return;
                        return this.select(e);
                    }),
                    (r.prototype.select = function (e) {
                        return this.active != null && this.active.deselect(), (this.active = e), this.active.select(), (MakeChat.system.currentRoomId = this.active.id), this.trigger("selectRoom", this.active);
                    }),
                    (r.prototype.update = function (e) {
                        var t;
                        return (t = this.get(e.id)), t != null ? t.set(e) : this.create(e);
                    }),
                    r
                );
            })(Backbone.Collection));
    }.call(this),
    function () {
        var e,
            t,
            n = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            r = {}.hasOwnProperty,
            i = function (e, t) {
                function i() {
                    this.constructor = e;
                }
                for (var n in t) r.call(t, n) && (e[n] = t[n]);
                return (i.prototype = t.prototype), (e.prototype = new i()), (e.__super__ = t.prototype), e;
            };
        (e = MakeChat.Collections),
            (t = MakeChat.Models),
            (e.PrivateChats = (function (e) {
                function r() {
                    return (this.updateTabs = n(this.updateTabs, this)), (this.changeClosed = n(this.changeClosed, this)), (this.changeActive = n(this.changeActive, this)), r.__super__.constructor.apply(this, arguments);
                }
                return (
                    i(r, e),
                    (r.prototype.model = t.PrivateChat),
                    (r.prototype.initialize = function () {
                        return this.on("change:active", this.changeActive), this.on("change:closed", this.changeClosed), this.on("change:closed", this.updateTabs), this.on("add", this.updateTabs);
                    }),
                    (r.prototype.changeActive = function (e) {
                        if (e === this.active) {
                            this.active = null;
                            return;
                        }
                        if (!e.get("active")) return;
                        return this.active != null && this.active.set({ active: !1 }), (this.active = e), (MakeChat.system.currentPrivateChatId = this.active.id);
                    }),
                    (r.prototype.changeClosed = function (e) {
                        if (!e.get("closed")) return;
                        return e.set({ active: !1 }), (this.active = null), (MakeChat.system.currentPrivateChatId = null), this.trigger("closePrivateChat");
                    }),
                    (r.prototype.next = function () {
                        var e, t;
                        return (e = this.tabs.indexOf(this.active)), e++, e >= this.tabs.length && (e = 0), (t = this.tabs[e]), t != null ? t.select() : void 0;
                    }),
                    (r.prototype.prev = function () {
                        var e, t;
                        return (e = this.tabs.indexOf(this.active)), e--, e < 0 && (e = this.tabs.length - 1), (t = this.tabs[e]), t != null ? t.select() : void 0;
                    }),
                    (r.prototype.updateTabs = function (e) {
                        var t;
                        return (t = this.tabs) == null && (this.tabs = []), e.get("closed") ? this.tabs.splice(this.tabs.indexOf(e), 1) : this.tabs.push(e);
                    }),
                    r
                );
            })(Backbone.Collection));
    }.call(this),
    function () {
        var e,
            t,
            n = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            r = {}.hasOwnProperty,
            i = function (e, t) {
                function i() {
                    this.constructor = e;
                }
                for (var n in t) r.call(t, n) && (e[n] = t[n]);
                return (i.prototype = t.prototype), (e.prototype = new i()), (e.__super__ = t.prototype), e;
            };
        (e = MakeChat.Collections),
            (t = MakeChat.Models),
            (e.Growls = (function (e) {
                function r() {
                    return (this.growlClosed = n(this.growlClosed, this)), (this.growlExpire = n(this.growlExpire, this)), r.__super__.constructor.apply(this, arguments);
                }
                return (
                    i(r, e),
                    (r.prototype.model = t.Growl),
                    (r.prototype.initialize = function () {
                        return this.on("change:expired", this.growlExpire), this.on("change:closed", this.growlClosed);
                    }),
                    (r.prototype.growlExpire = function (e) {
                        if (!e.get("expired")) return;
                        return this.trigger("growlExpire", e.id), this.remove(e);
                    }),
                    (r.prototype.growlClosed = function (e) {
                        if (!e.get("closed")) return;
                        return this.trigger("growlClosed", e.id), this.remove(e);
                    }),
                    r
                );
            })(Backbone.Collection));
    }.call(this),
    function () {
        var e,
            t,
            n = {}.hasOwnProperty,
            r = function (e, t) {
                function i() {
                    this.constructor = e;
                }
                for (var r in t) n.call(t, r) && (e[r] = t[r]);
                return (i.prototype = t.prototype), (e.prototype = new i()), (e.__super__ = t.prototype), e;
            };
        (e = MakeChat.Collections),
            (t = MakeChat.Models),
            (e.Notifications = (function (e) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments);
                }
                return (
                    r(n, e),
                    (n.prototype.model = t.Notification),
                    (n.prototype.clear = function (e) {
                        return e ? (this.remove(this.where({ section: e })), this.trigger("clear", e)) : this.reset();
                    }),
                    n
                );
            })(Backbone.Collection));
    }.call(this),
    function () {
        var e,
            t,
            n = {}.hasOwnProperty,
            r = function (e, t) {
                function i() {
                    this.constructor = e;
                }
                for (var r in t) n.call(t, r) && (e[r] = t[r]);
                return (i.prototype = t.prototype), (e.prototype = new i()), (e.__super__ = t.prototype), e;
            };
        (e = MakeChat.Collections),
            (t = MakeChat.Models),
            (e.Offers = (function (e) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments);
                }
                return r(n, e), (n.prototype.model = t.Offer), n;
            })(Backbone.Collection));
    }.call(this),
    function () {
        var e,
            t,
            n,
            r,
            i = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            s = {}.hasOwnProperty,
            o = function (e, t) {
                function r() {
                    this.constructor = e;
                }
                for (var n in t) s.call(t, n) && (e[n] = t[n]);
                return (r.prototype = t.prototype), (e.prototype = new r()), (e.__super__ = t.prototype), e;
            };
        (r = MakeChat.Views),
            (t = MakeChat.KeyCodes),
            (n = MakeChat.settings),
            (r.Login = (function (e) {
                function r() {
                    return (
                        (this.hide = i(this.hide, this)),
                        (this.focus = i(this.focus, this)),
                        (this.checkNameResponse = i(this.checkNameResponse, this)),
                        (this.connected = i(this.connected, this)),
                        (this.checkKeys = i(this.checkKeys, this)),
                        (this.changeUserAttributes = i(this.changeUserAttributes, this)),
                        (this.clickSubmit = i(this.clickSubmit, this)),
                        r.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    o(r, e),
                    (r.prototype.events = { "keyup .input_text": "checkKeys" }),
                    (r.prototype.initialize = function () {
                        var e = this;
                        return (
                            (this.$el = $("#login")),
                            (this.el = this.$el.get(0)),
                            (this.nameInput = this.$el.find(".input_text")),
                            (this.submitButton = this.$el.find(".button")),
                            (this.status = this.$el.find(".notification")),
                            (this.maxTextWidth = parseInt(n.maxTextWidth)),
                            this.delegateEvents(),
                            this.onLoad(),
                            after(1e3, function () {
                                return e.nameInput.focus();
                            })
                        );
                    }),
                    (r.prototype.onLoad = function () {
                        var e,
                            t,
                            n,
                            r,
                            i,
                            s = this;
                        this.model.on("checkNameResponse", this.checkNameResponse),
                            this.model.on("change:connected", this.connected),
                            this.model.user.on("change", this.changeUserAttributes),
                            this.model.user.on("change:id", this.hide),
                            this.$el.find("a").click(function () {
                                return !1;
                            }),
                            (n = this.$el.find(".age")),
                            n
                                .find(".age13")
                                .off()
                                .click(function () {
                                    return s.model.user.set({ age: "13-17" }), s.showGender();
                                }),
                            n
                                .find(".age18")
                                .off()
                                .click(function () {
                                    return s.model.user.set({ age: "18-23" }), s.showGender();
                                }),
                            n
                                .find(".age24")
                                .off()
                                .click(function () {
                                    return s.model.user.set({ age: "24+" }), s.showGender();
                                }),
                            (e = void 0),
                            n.find(".action").click(function () {
                                return e != null && e.removeClass("active"), (e = $(this)), e.addClass("active");
                            }),
                            (i = this.$el.find(".gender")),
                            i
                                .find(".male")
                                .off()
                                .click(function () {
                                    return s.model.user.set({ gender: "male" }), s.showSubmit();
                                }),
                            i
                                .find(".female")
                                .off()
                                .click(function () {
                                    return s.model.user.set({ gender: "female" }), s.showSubmit();
                                }),
                            (t = void 0),
                            i.find(".action").click(function () {
                                return t != null && t.removeClass("active"), (t = $(this)), t.addClass("active");
                            }),
                            this.$el.find(".login").click(function () {
                                return s.clickSubmit();
                            }),
                            (r = $.cookie("username"));
                        if (r != null) return this.$el.find(".input_text").val(r);
                    }),
                    (r.prototype.onClose = function () {
                        return (
                            this.model.off("checkNameResponse", this.checkNameResponse),
                            this.model.off("change:connected", this.connected),
                            this.model.user.off("change", this.changeUserAttributes),
                            this.model.user.off("change:id", this.hide),
                            this.$el.find("a").off()
                        );
                    }),
                    (r.prototype.clickSubmit = function () {
                        var e;
                        return (e = this.nameInput.val()), this.submit(e);
                    }),
                    (r.prototype.changeUserAttributes = function (e) {
                        if (!e.get("age")) return;
                        this.showGender();
                        if (!e.get("gender")) return;
                        !this.validName;
                    }),
                    (r.prototype.checkKeys = function (e) {
                        var n;
                        (n = this.nameInput.val()), this.checkWidth(n);
                        if (!this.model.get("connected")) return;
                        return e.keyCode === t.ENTER ? this.showAge() : (this.$el.addClass("checking"), this.status.text("checking availability..."), this.checkName(this.nameInput.val()));
                    }),
                    (r.prototype.checkName = function (e) {
                        return (this.processing = !0), this.model.checkNameAvailability(e);
                    }),
                    (r.prototype.checkWidth = function (e) {
                        var t, r, i, s, o, u;
                        (s = /\s/g), e.match(s) && ((e = e.replace(s, "")), this.nameInput.val(e)), (o = $("#text_checker").text(e)), (i = n.maxTextWidth);
                        if (o.width() > i) {
                            (r = e.length - 1), (u = []);
                            while (o.width() > i) (t = e.substr(0, r)), o.text(t), this.nameInput.val(t), u.push(r--);
                            return u;
                        }
                    }),
                    (r.prototype.connected = function () {
                        var e,
                            t = this;
                        e = this.nameInput.val();
                        if (e.length > 0)
                            return after(100, function () {
                                return t.checkName(e);
                            });
                        return;
                    }),
                    (r.prototype.checkNameResponse = function (e) {
                        this.nameInput.val().length < 3 && (e = "short"), (this.processing = !1), (this.validName = e === "available"), this.showSubmit(), this.status.text(""), this.$el.find(".age").removeClass("hidden");
                        switch (e) {
                            case "available":
                                return (this.el.className = "available"), this.status.text("Name is available!"), this.showSubmit();
                            case "short":
                                return (this.el.className = "taken"), this.status.text("Minimum of 3 letters");
                            case "alphanumeric":
                                return (this.el.className = "taken"), this.status.text("Alphanumeric letters only");
                            case "taken":
                                return (this.$el.className = "taken"), this.status.text("Name is taken, sorry.");
                        }
                    }),
                    (r.prototype.focus = function () {
                        return this.nameInput.focus();
                    }),
                    (r.prototype.hide = function () {
                        var e = this;
                        return (
                            this.$el.addClass("hidden"),
                            this.unbind(),
                            this.undelegateEvents(),
                            after(2e3, function () {
                                return e.close();
                            })
                        );
                    }),
                    (r.prototype.showAge = function () {
                        var e, t, n;
                        return (
                            (e = this.$el.find(".age")),
                            e.removeClass("hidden"),
                            (n = this.model.user.get("age") || $.cookie("age")),
                            (t = (function () {
                                switch (n) {
                                    case "13-17":
                                        return ".age13";
                                    case "18-23":
                                        return ".age18";
                                    case "24+":
                                        return ".age24";
                                }
                            })()),
                            this.$el.find(t).focus()
                        );
                    }),
                    (r.prototype.showGender = function () {
                        var e, t, n;
                        return (
                            (e = this.$el.find(".gender")),
                            e.removeClass("hidden"),
                            (n = $.cookie("gender")),
                            (t = (function () {
                                switch (n) {
                                    case "male":
                                        return ".male";
                                    case "female":
                                        return ".female";
                                }
                            })()),
                            this.model.user.get("gender") ? (this.showSubmit(), this.$el.find(".login.button").focus()) : this.$el.find(t).focus()
                        );
                    }),
                    (r.prototype.showSubmit = function () {
                        var e;
                        e = this.model.user;
                        if (!this.validName) return;
                        if (!this.model.user.get("age")) return;
                        if (!this.model.user.get("gender")) return;
                        return this.$el.find(".login.button").removeClass("disabled");
                    }),
                    (r.prototype.submit = function (e) {
                        var t;
                        t = this.$el.find(".notification");
                        if (this.processing) return;
                        return this.validName
                            ? this.model.user.get("age")
                                ? this.model.user.get("gender")
                                    ? (this.model.requestSetName(e), this.trigger("submit"))
                                    : (t.text("Please select your gender"), this.showGender())
                                : (t.text("Please select your age"), this.showAge())
                            : this.focus();
                    }),
                    r
                );
            })(Backbone.View)),
            (e = (function (e) {
                function t() {
                    return (
                        (this.fbRegister = i(this.fbRegister, this)),
                        (this.fbConnected = i(this.fbConnected, this)),
                        (this.showRegistration = i(this.showRegistration, this)),
                        (this.showFBLogin = i(this.showFBLogin, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    o(t, e),
                    (t.prototype.templates = {
                        connected: _.template("<span class='avatar'><img src='<%= imgurl %>'/></span>\nHi <%= name %>, welcome to TeenChat!"),
                        not_authorized: _.template(
                            'Sign-In using Facebook.\n<div class="fb-login-button" data-registration-url="https://www.facebook.com/dialog/oauth/?scope=<%=%20scope%20%>&amp;client_id=<%=%20client_id%20%>&amp;redirect_uri=<%=%20redirect_uri%20%>"></div>'
                        ),
                    }),
                    (t.prototype.show = function () {
                        return this.$el.removeClass("hidden");
                    }),
                    (t.prototype.hide = function () {
                        return this.$el.addClass("hidden");
                    }),
                    (t.prototype.initialize = function () {
                        return this.model.on("fb.connected", this.fbConnected), this.model.on("fb.register fb.login", this.showFBLogin), this.fbRegister();
                    }),
                    (t.prototype.showFBLogin = function () {
                        return this.show;
                    }),
                    (t.prototype.showRegistration = function () {
                        return this.regWindow || (this.regWindow = new r.FBLoginWindow({ model: this.model })), this.regWindow.show();
                    }),
                    (t.prototype.fbConnected = function () {
                        var e = this;
                        return FB.api("/me", function (t) {
                            return (
                                (e.model.user.facebook = new Backbone.Model()),
                                e.model.user.facebook.set(t),
                                FB.api("/me/picture", function (t) {
                                    return (
                                        e.model.user.facebook.set({ picture: t.data.url }),
                                        (e.el.innerHTML = e.templates.connected({ imgurl: e.model.user.facebook.get("picture"), name: e.model.user.facebook.get("first_name") })),
                                        e.$el.show()
                                    );
                                })
                            );
                        });
                    }),
                    (t.prototype.fbRegister = function () {
                        var e;
                        return (e = this.templates.not_authorized({ scope: "email, user_birthday, publish_actions", redirect_uri: MakeChat.facebook.redirect_uri, client_id: MakeChat.facebook.appId })), (this.el.innerHTML = e);
                    }),
                    t
                );
            })(Backbone.View));
    }.call(this),
    function () {
        var e,
            t = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            n = {}.hasOwnProperty,
            r = function (e, t) {
                function i() {
                    this.constructor = e;
                }
                for (var r in t) n.call(t, r) && (e[r] = t[r]);
                return (i.prototype = t.prototype), (e.prototype = new i()), (e.__super__ = t.prototype), e;
            };
        (e = MakeChat.Views),
            (e.TimeoutWindow = (function (e) {
                function n() {
                    return (this.hide = t(this.hide, this)), (this.show = t(this.show, this)), n.__super__.constructor.apply(this, arguments);
                }
                return (
                    r(n, e),
                    (n.prototype.events = { "click .reload": "reload" }),
                    (n.prototype.initialize = function () {
                        return (this.$el = $("#timedout")), this.delegateEvents(), this.onLoad();
                    }),
                    (n.prototype.onLoad = function () {
                        return this.model.on("timedOut", this.show), this.model.socket.on("all", this.hide);
                    }),
                    (n.prototype.show = function () {
                        return this.$el.removeClass("hidden"), (this.visible = !0);
                    }),
                    (n.prototype.hide = function () {
                        if (!this.visible) return;
                        return this.$el.addClass("hidden");
                    }),
                    (n.prototype.reload = function () {
                        return window.location.reload();
                    }),
                    n
                );
            })(Backbone.View));
    }.call(this),
    function () {
        var e,
            t,
            n,
            r,
            i,
            s,
            o,
            u = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            a = {}.hasOwnProperty,
            f = function (e, t) {
                function r() {
                    this.constructor = e;
                }
                for (var n in t) a.call(t, n) && (e[n] = t[n]);
                return (r.prototype = t.prototype), (e.prototype = new r()), (e.__super__ = t.prototype), e;
            };
        (o = MakeChat.Views),
            (n = MakeChat.KeyCodes),
            (i = MakeChat.settings),
            (o.Header = (function (n) {
                function r() {
                    return (
                        (this.enable = u(this.enable, this)),
                        (this.requestFAQ = u(this.requestFAQ, this)),
                        (this.requestHelp = u(this.requestHelp, this)),
                        (this.requestSettings = u(this.requestSettings, this)),
                        (this.requestNewRoom = u(this.requestNewRoom, this)),
                        (this.limitRooms = u(this.limitRooms, this)),
                        r.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    f(r, n),
                    (r.prototype.events = { "click .create": "requestNewRoom", "click .settings": "requestSettings", "click .help": "requestHelp", "click .faq": "requestFAQ" }),
                    (r.prototype.initialize = function () {
                        var n, r, i;
                        return (
                            (n = new e({ el: this.$el.find(".user-name"), model: this.model })),
                            (r = new t({ el: this.$el.find(".karma"), model: this.model })),
                            (i = new s({ el: this.$el.find(".tokens"), model: this.model })),
                            this.model.rooms.on("subscribed unsubscribed", this.limitRooms),
                            this.onLoad()
                        );
                    }),
                    (r.prototype.onLoad = function () {
                        return this.model.on("createRoom", this.enable);
                    }),
                    (r.prototype.limitRooms = function () {
                        var e, t;
                        return (t = this.model.rooms), (e = this.$el.find(".create")), t.subscribed.length < 4 ? e.show() : e.hide();
                    }),
                    (r.prototype.requestNewRoom = function () {
                        if (this.processing) return;
                        return this.model.requestNewRoom(), this.disable();
                    }),
                    (r.prototype.requestSettings = function () {
                        return this.model.requestModal("settings");
                    }),
                    (r.prototype.requestHelp = function () {
                        return this.model.requestModal("help");
                    }),
                    (r.prototype.requestFAQ = function () {
                        return this.model.requestModal("faq");
                    }),
                    (r.prototype.disable = function () {
                        var e;
                        return (this.processing = !0), (e = this.$el.find(".create.button")), e.text("Please Wait..."), e.removeClass("creating");
                    }),
                    (r.prototype.enable = function () {
                        var e;
                        return (this.processing = !1), (e = this.$el.find(".create.button")), e.text("Create Room"), e.removeClass("creating");
                    }),
                    r
                );
            })(Backbone.View)),
            (e = (function (e) {
                function t() {
                    return (
                        (this.restore = u(this.restore, this)),
                        (this.checkNameResponse = u(this.checkNameResponse, this)),
                        (this.checkName = u(this.checkName, this)),
                        (this.changeName = u(this.changeName, this)),
                        (this.changeTempName = u(this.changeTempName, this)),
                        (this.editName = u(this.editName, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    f(t, e),
                    (t.prototype.events = { click: "editName", 'keyup input[type="text"]': "checkName", 'blur input[type="text"]': "restore" }),
                    (t.prototype.initialize = function () {
                        return (
                            (this.textInput = this.$el.find("input[type=text]")),
                            (this.title = this.$el.find(".text")),
                            (this.notifier = new r({ el: $("#header .name-availability"), model: this.model })),
                            this.model.on("checkNameResponse", this.checkNameResponse),
                            this.model.on("setUserID", this.changeName),
                            this.model.user.on("change:tempName", this.changeTempName),
                            this.model.user.on("change:name", this.changeName)
                        );
                    }),
                    (t.prototype.editName = function () {
                        return this.textInput.val(this.model.user.get("name")), this.$el.addClass("editing"), this.textInput.focus();
                    }),
                    (t.prototype.changeTempName = function (e) {
                        return this.notifier.reset();
                    }),
                    (t.prototype.changeName = function (e) {
                        return this.notifier.reset(), this.title.text(e.get("name"));
                    }),
                    (t.prototype.checkName = function (e) {
                        var t;
                        t = this.textInput.val();
                        switch (e.keyCode) {
                            case n.ENTER:
                                return this.textInput.get(0).blur(), this.requestChangeName(t);
                            case n.ESC:
                                return this.textInput.get(0).blur();
                            default:
                                return this.checkWidth(t), this.notifier.checking(), this.model.checkNameAvailability(this.textInput.val());
                        }
                    }),
                    (t.prototype.checkNameResponse = function (e) {
                        if (!this.model.user.get("name")) return;
                        (this.processing = !1), (this.validName = e === "available"), this.notifier.reset();
                        switch (e) {
                            case "available":
                                return this.notifier.available();
                            default:
                                return this.notifier.taken();
                        }
                    }),
                    (t.prototype.checkWidth = function (e) {
                        var t, n, r, s, o, u;
                        (s = /\s/g), e.match(s) && ((e = e.replace(s, "")), this.textInput.val(e)), (o = $("#text_checker").text(e)), (r = i.maxTextWidth);
                        if (o.width() > r) {
                            (n = e.length - 1), (u = []);
                            while (o.width() > r) (t = e.substr(0, n)), o.text(t), this.textInput.val(t), u.push(n--);
                            return u;
                        }
                    }),
                    (t.prototype.requestChangeName = function (e) {
                        if (this.processing) return;
                        if (!this.validName) return;
                        return (this.processing = !0), this.model.requestChangeName(e);
                    }),
                    (t.prototype.restore = function () {
                        return this.$el.removeClass("editing"), this.notifier.reset();
                    }),
                    t
                );
            })(Backbone.View)),
            (r = (function (e) {
                function t() {
                    return (this.reset = u(this.reset, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    f(t, e),
                    (t.prototype.initialize = function () {
                        return (this.className = this.el.className);
                    }),
                    (t.prototype.reset = function () {
                        return (this.el.className = this.className);
                    }),
                    (t.prototype.available = function () {
                        return (this.el.className = this.className + " available");
                    }),
                    (t.prototype.taken = function () {
                        return (this.el.className = this.className + " taken");
                    }),
                    (t.prototype.checking = function () {
                        return (this.el.className = this.className + " checking");
                    }),
                    t
                );
            })(Backbone.View)),
            (t = (function (e) {
                function t() {
                    return (this.karmaUpdate = u(this.karmaUpdate, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    f(t, e),
                    (t.prototype.initialize = function () {
                        return (this.textValue = this.$el.find(".text")), this.model.user.on("change:karma", this.karmaUpdate), this.karmaUpdate(this.model.user);
                    }),
                    (t.prototype.karmaUpdate = function (e) {
                        var t;
                        return (t = e.get("karma")), this.textValue.text("" + _.numberComma(t) + " karma");
                    }),
                    t
                );
            })(Backbone.View)),
            (s = (function (e) {
                function t() {
                    return (this.tokenUpdate = u(this.tokenUpdate, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    f(t, e),
                    (t.prototype.initialize = function () {
                        return (this.textValue = this.$el.find(".text")), this.model.user.on("change:tokens", this.tokenUpdate), this.tokenUpdate(this.model.user);
                    }),
                    (t.prototype.tokenUpdate = function (e) {
                        var t;
                        return (t = e.get("tokens")), this.textValue.text("" + _.numberComma(t) + " tokens");
                    }),
                    t
                );
            })(Backbone.View));
    }.call(this),
    function () {
        var e,
            t,
            n,
            r,
            i,
            s,
            o,
            u,
            a,
            f,
            l,
            c,
            h,
            p,
            d,
            v,
            m = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            g = {}.hasOwnProperty,
            y = function (e, t) {
                function r() {
                    this.constructor = e;
                }
                for (var n in t) g.call(t, n) && (e[n] = t[n]);
                return (r.prototype = t.prototype), (e.prototype = new r()), (e.__super__ = t.prototype), e;
            };
        (d = MakeChat.Views),
            (l = MakeChat.KeyCodes),
            (u = MakeChat.KarmaBoostType),
            (c = MakeChat.settings),
            (d.Modals = (function (s) {
                function o() {
                    return (this.onModalResponse = m(this.onModalResponse, this)), o.__super__.constructor.apply(this, arguments);
                }
                return (
                    y(o, s),
                    (o.prototype.initialize = function () {
                        var s, o, u;
                        return (
                            (this.settingsView = new h({ el: $("#settings"), model: this.model })),
                            (this.helpView = new r({ el: $("#help"), model: this.model })),
                            (this.editRoomView = new t({ el: $("#m-edit"), model: this.model })),
                            (this.inviteUser = new i({ el: $("#invite-user"), model: this.model })),
                            (this.faq = new n({ el: $("#faq"), model: this.model })),
                            (this.confirmModal = new e({ el: $("#confirm-modal"), model: this.model })),
                            (this.karmaBoostWindow = new a({ el: $("#karmaboost-window"), model: this.model })),
                            (o = new p({ el: $("#tokengrab-window"), model: this.model })),
                            (u = new v({ el: $("#yt-overlay"), model: this.model })),
                            (s = new f({ el: $("#karmareferral-window"), model: this.model })),
                            this.onLoad()
                        );
                    }),
                    (o.prototype.onLoad = function () {
                        return this.model.on("modal", this.onModalResponse);
                    }),
                    (o.prototype.onModalResponse = function (e, t) {
                        switch (e) {
                            case "settings":
                                return this.settingsView.toggle();
                            case "help":
                                return this.helpView.toggle();
                            case "faq":
                                return this.faq.toggle();
                        }
                    }),
                    o
                );
            })(Backbone.View)),
            (d.Modal = (function (e) {
                function t() {
                    return (
                        (this.documentKey = m(this.documentKey, this)),
                        (this.documentClick = m(this.documentClick, this)),
                        (this.elClick = m(this.elClick, this)),
                        (this.hide = m(this.hide, this)),
                        (this.show = m(this.show, this)),
                        (this.toggle = m(this.toggle, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    y(t, e),
                    (t.prototype.initialize = function () {
                        if (this.onLoad != null) return this.onLoad();
                    }),
                    (t.prototype.toggle = function () {
                        return this.visible ? this.hide() : this.show();
                    }),
                    (t.prototype.bindEvents = function () {
                        return $(document).on("keydown", this.documentKey), $(document).on("click", this.documentClick), this.$el.on("click", this.elClick);
                    }),
                    (t.prototype.removeEvents = function () {
                        return $(document).off("keydown", this.documentKey), $(document).off("click", this.documentClick), this.$el.off("click", this.elClick);
                    }),
                    (t.prototype.show = function () {
                        var e = this;
                        return (
                            (this.visible = !0),
                            this.onShow != null && this.onShow(),
                            this.removeEvents(),
                            after(1, function () {
                                return e.bindEvents();
                            })
                        );
                    }),
                    (t.prototype.hide = function () {
                        return (this.visible = !1), this.onHide != null && this.onHide(), this.removeEvents();
                    }),
                    (t.prototype.elClick = function (e) {
                        return (this.prevent = !0);
                    }),
                    (t.prototype.documentClick = function (e) {
                        return e.target.tagName === "A" ? !0 : this.prevent ? ((this.prevent = !1), !1) : this.hide();
                    }),
                    (t.prototype.documentKey = function (e) {
                        if (e.keyCode === l.ESC) return this.hide();
                    }),
                    t
                );
            })(Backbone.View)),
            (h = (function (e) {
                function t() {
                    return (
                        (this.toggleSoundsAll = m(this.toggleSoundsAll, this)),
                        (this.toggleSoundsPost = m(this.toggleSoundsPost, this)),
                        (this.toggleSoundsEnter = m(this.toggleSoundsEnter, this)),
                        (this.toggleSoundsMention = m(this.toggleSoundsMention, this)),
                        (this.toggleTheme = m(this.toggleTheme, this)),
                        (this.toggleChatSize = m(this.toggleChatSize, this)),
                        (this.changeChatSize = m(this.changeChatSize, this)),
                        (this.changeSoundsPost = m(this.changeSoundsPost, this)),
                        (this.changeTheme = m(this.changeTheme, this)),
                        (this.changeSoundsEnters = m(this.changeSoundsEnters, this)),
                        (this.changeSoundsMentioned = m(this.changeSoundsMentioned, this)),
                        (this.changeMuteAll = m(this.changeMuteAll, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    y(t, e),
                    (t.prototype.events = {
                        "click .close": "hide",
                        "click .theme": "toggleTheme",
                        "click .mention": "toggleSoundsMention",
                        "click .enter": "toggleSoundsEnter",
                        "click .message": "toggleSoundsPost",
                        "click .chat.size": "toggleChatSize",
                        "click .all": "toggleSoundsAll",
                    }),
                    (t.prototype.onLoad = function () {
                        return (
                            this.model.on("change:theme", this.changeTheme),
                            this.model.on("change:sounds_mentioned", this.changeSoundsMentioned),
                            this.model.on("change:sounds_enters", this.changeSoundsEnters),
                            this.model.on("change:sounds_post", this.changeSoundsPost),
                            this.model.on("change:chat_size", this.changeChatSize),
                            this.model.on("change:mute_all_sounds", this.changeMuteAll),
                            this.changeTheme(this.model),
                            this.changeSoundsMentioned(this.model),
                            this.changeSoundsEnters(this.model),
                            this.changeSoundsPost(this.model),
                            this.changeMuteAll(this.model)
                        );
                    }),
                    (t.prototype.changeMuteAll = function (e) {
                        var t;
                        return (t = this.$el.find(".sfx.all input[type=checkbox]")), e.get("mute_all_sounds") ? t.attr("checked", "checked") : t.removeAttr("checked");
                    }),
                    (t.prototype.changeSoundsMentioned = function (e) {
                        var t;
                        return (t = this.$el.find(".sfx.mention input[type=checkbox]")), e.get("sounds_mentioned") ? t.attr("checked", "checked") : t.removeAttr("checked");
                    }),
                    (t.prototype.changeSoundsEnters = function (e) {
                        var t;
                        return (t = this.$el.find(".sfx.enter input[type=checkbox]")), e.get("sounds_enters") ? t.attr("checked", "checked") : t.removeAttr("checked");
                    }),
                    (t.prototype.changeTheme = function (e) {
                        var t;
                        return (t = this.$el.find(".theme input[type=checkbox]")), e.get("theme") === "dark" ? t.attr("checked", "checked") : t.removeAttr("checked");
                    }),
                    (t.prototype.changeSoundsPost = function (e) {
                        var t;
                        return (t = this.$el.find(".sfx.message input[type=checkbox]")), e.get("sounds_post") ? t.attr("checked", "checked") : t.removeAttr("checked");
                    }),
                    (t.prototype.changeChatSize = function (e) {
                        var t;
                        return (t = this.$el.find(".chat.size input[type=checkbox]")), e.get("chat_size") ? t.attr("checked", "checked") : t.removeAttr("checked");
                    }),
                    (t.prototype.onShow = function () {
                        return this.$el.removeClass("hidden");
                    }),
                    (t.prototype.onHide = function () {
                        return this.$el.addClass("hidden");
                    }),
                    (t.prototype.toggleChatSize = function (e) {
                        var t;
                        return (t = this.model.get("chat_size")), this.model.set({ chat_size: !t });
                    }),
                    (t.prototype.toggleTheme = function () {
                        var e;
                        return (e = this.$el.find(".theme input[type=checkbox]")), e.attr("checked") ? this.model.requestSetTheme("light") : this.model.requestSetTheme("dark");
                    }),
                    (t.prototype.toggleSoundsMention = function () {
                        var e;
                        return (e = this.model.get("sounds_mentioned")), this.model.set({ sounds_mentioned: !e });
                    }),
                    (t.prototype.toggleSoundsEnter = function () {
                        var e;
                        return (e = this.model.get("sounds_enters")), this.model.set({ sounds_enters: !e });
                    }),
                    (t.prototype.toggleSoundsPost = function () {
                        var e;
                        return (e = this.model.get("sounds_post")), this.model.set({ sounds_post: !e });
                    }),
                    (t.prototype.toggleSoundsAll = function () {
                        var e;
                        return (e = this.model.get("mute_all_sounds")), this.model.set({ mute_all_sounds: !e });
                    }),
                    t
                );
            })(d.Modal)),
            (r = (function (e) {
                function t() {
                    return (this.render = m(this.render, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    y(t, e),
                    (t.prototype.events = { "click .close": "hide" }),
                    (t.prototype.onLoad = function () {}),
                    (t.prototype.render = function (e) {
                        var t;
                        return (t = this.$el.find(".content")), t.html(e);
                    }),
                    (t.prototype.onShow = function () {
                        var e, t;
                        return this.loaded || ((this.loaded = !0), (e = new Date().getTime()), (t = "help-contentd41d.html?" + e), $.get(t, this.render)), this.$el.removeClass("hidden");
                    }),
                    (t.prototype.onHide = function () {
                        return this.$el.addClass("hidden");
                    }),
                    t
                );
            })(d.Modal)),
            (t = (function (e) {
                function t() {
                    return (this.editRoom = m(this.editRoom, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    y(t, e),
                    (t.prototype.events = { "click .close": "hide" }),
                    (t.prototype.initialize = function () {
                        return this.model.on("editRoom", this.editRoom);
                    }),
                    (t.prototype.editRoom = function (e) {
                        var t,
                            n,
                            r,
                            i = this;
                        return (
                            (t = this.$el.find(".room_name input")),
                            (r = this.$el.find(".room_url input")),
                            (n = this.$el.find(".mod.button")),
                            t.val(e.get("name")),
                            r.val(e.get("url")),
                            t.off().keyup(function (n) {
                                if (n.keyCode !== l.ENTER) return;
                                if (e.get("name") === t.val() && e.get("url") === r.val()) return;
                                return e.update({ name: t.val(), url: r.val() }), i.hide();
                            }),
                            r.off().keyup(function (n) {
                                if (n.keyCode !== l.ENTER) return;
                                if (e.get("name") === t.val() && e.get("url") === r.val()) return;
                                return e.update({ name: t.val(), url: r.val() }), i.hide();
                            }),
                            n.off().click(function () {
                                if (e.get("name") === t.val() && e.get("url") === r.val()) return;
                                return e.update({ name: t.val(), url: r.val() }), i.hide();
                            }),
                            after(100, function () {
                                return t.focus();
                            }),
                            this.show()
                        );
                    }),
                    (t.prototype.onShow = function () {
                        return this.$el.removeClass("hidden");
                    }),
                    (t.prototype.onHide = function () {
                        return this.$el.addClass("hidden");
                    }),
                    t
                );
            })(d.Modal)),
            (i = (function (e) {
                function t() {
                    return (this.sent = m(this.sent, this)), (this.render = m(this.render, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    y(t, e),
                    (t.prototype.events = { "click .cancel": "hide", "click .close": "hide" }),
                    (t.prototype.initialize = function () {
                        var e, t;
                        return (
                            (this.selected = []),
                            (e = this.model),
                            (t = e.users),
                            t.on("sendInvite", this.render),
                            this.model.on("inviteSent", this.sent),
                            (this.tpl = _.template($("#tpl-invite-room").html())),
                            (this.tplMessage = _.template('Invite <span class="username"><%= name %></span> to which room(s)?'))
                        );
                    }),
                    (t.prototype.render = function (e) {
                        var t,
                            n,
                            r,
                            i,
                            s,
                            o = this;
                        return (
                            (r = this.model.rooms.where({ subscribed: !0 })),
                            (r = _.reject(r, function (t) {
                                return t.users.get(e.id);
                            })),
                            (i = []),
                            (t = this.$el.find("ul")),
                            (s = this.$el.find(".invite")),
                            (n = this.$el.find(".message")),
                            t.empty(),
                            s.off(),
                            this.$el.find(".cancel").show(),
                            _.each(r, function (e) {
                                var n;
                                return (
                                    (n = $(o.tpl(e.toJSON()))),
                                    n.click(function () {
                                        return n.hasClass("checked") ? (n.removeClass("checked"), i.splice(i.indexOf(e.id), 1)) : (n.addClass("checked"), i.push(e.id));
                                    }),
                                    t.append(n)
                                );
                            }),
                            r.length > 0
                                ? (n.html(this.tplMessage(e.toJSON())),
                                  s.click(function () {
                                      return o.sendInvites(e.id, i);
                                  }),
                                  s.show())
                                : (n.html("No rooms available."), s.hide()),
                            this.show()
                        );
                    }),
                    (t.prototype.sendInvites = function (e, t) {
                        var n = this;
                        return (
                            _.each(t, function (t) {
                                return n.model.sendRoomInvite({ userId: e, roomId: t });
                            }),
                            this.sent()
                        );
                    }),
                    (t.prototype.sent = function () {
                        return this.$el.find(".message").text("Invite sent!"), this.$el.find("ul").empty(), this.$el.find(".invite, .cancel").hide(), this.$el.find(".invite").off();
                    }),
                    (t.prototype.onShow = function () {
                        return this.$el.removeClass("hidden"), this.$el.find(".modal").removeClass("hidden");
                    }),
                    (t.prototype.onHide = function () {
                        return this.$el.find(".modal").addClass("hidden");
                    }),
                    t
                );
            })(d.Modal)),
            (s = (function (e) {
                function t() {
                    return (this.toggle = m(this.toggle, this)), (this.launch = m(this.launch, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    y(t, e),
                    (t.prototype.events = { "click h4": "toggle", "click .accept": "launch" }),
                    (t.prototype.initialize = function (e) {
                        var t,
                            n,
                            r,
                            i = this;
                        return (
                            (t = e.json),
                            (this.data = t),
                            (n = t.karma),
                            (r = n > 1 ? "points" : "point"),
                            t.enabled ||
                                ((n = ""),
                                (r = "soon"),
                                this.$el.addClass("disabled"),
                                after(1, function () {
                                    return i.undelegateEvents();
                                })),
                            this.$el.find(".karma").text("" + n + " " + r)
                        );
                    }),
                    (t.prototype.render = function (e) {
                        return this.$el.find(".title").text(e.title), this.$el.find(".reward").text(e.points), this.$el.find(".message").html(e.message);
                    }),
                    (t.prototype.hide = function () {
                        return this.$el.removeClass("active");
                    }),
                    (t.prototype.launch = function () {
                        return this.trigger("launch", this), this.model.launchKarmaBoost({ title: this.$el.find(".title").text(), points: this.$el.find(".reward").text(), description: this.$el.find(".message").text() });
                    }),
                    (t.prototype.toggle = function () {
                        return this.$el.hasClass("active") ? this.$el.removeClass("active") : this.$el.addClass("active");
                    }),
                    t
                );
            })(Backbone.View)),
            (o = (function (e) {
                function t() {
                    return (this.boostSolveMedia = m(this.boostSolveMedia, this)), (this.result = m(this.result, this)), (this.render = m(this.render, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    y(t, e),
                    (t.prototype.events = { "click .close": "hide" }),
                    (t.prototype.initialize = function () {
                        return (
                            (this.dictionary = {}),
                            (this.tpl = _.template($("#tpl-karma-boost-item").html())),
                            _.each(MakeChat.karmaBoost, this.render),
                            this.model.on("boostSolveMedia", this.boostSolveMedia),
                            this.model.on("karmaBoostResult", this.result),
                            this.checkIfEmpty()
                        );
                    }),
                    (t.prototype.render = function (e) {
                        var t;
                        return (t = new s({ el: $(this.tpl(e)), model: this.model, json: e })), e.type != null && (this.dictionary[e.type] = t), t.on("launch", this.hide), this.$el.find(".rewards").append(t.el);
                    }),
                    (t.prototype.result = function (e) {
                        return this.show();
                    }),
                    (t.prototype.boostSolveMedia = function (e) {
                        var t, n, r, i;
                        return (
                            (i = this.dictionary.solvemedia_quiz),
                            i == null &&
                                ((r = "solvemedia_quiz"),
                                (n = (function () {
                                    var e, n, i, s;
                                    (i = MakeChat.karmaBoost), (s = []);
                                    for (e = 0, n = i.length; e < n; e++) (t = i[e]), t.type === r && s.push(t);
                                    return s;
                                })()),
                                this.render(n[0]),
                                (i = this.dictionary.solvemedia_quiz)),
                            i.render(e),
                            e.state === "disabled" && i.remove(),
                            this.checkIfEmpty()
                        );
                    }),
                    (t.prototype.checkIfEmpty = function () {
                        return this.$el.find(".rewards").children().length > 0
                            ? this.$el.find(".instructions").text("Complete the tasks below for instant karma boost.")
                            : this.$el.find(".instructions").text("Check again later for karma boost options.");
                    }),
                    (t.prototype.onShow = function () {
                        return this.$el.removeClass("hidden");
                    }),
                    (t.prototype.onHide = function () {
                        return this.$el.addClass("hidden");
                    }),
                    t
                );
            })(d.Modal)),
            (e = (function (e) {
                function t() {
                    return (this.confirm = m(this.confirm, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    y(t, e),
                    (t.prototype.events = { "click .cancel": "hide" }),
                    (t.prototype.initialize = function () {
                        return this.model.on("confirm", this.confirm);
                    }),
                    (t.prototype.confirm = function (e) {
                        var t,
                            n,
                            r = this;
                        return (
                            (t = e.callback),
                            (n = e.message),
                            this.$el
                                .find(".confirm")
                                .off()
                                .click(function () {
                                    return r.hide(), t();
                                }),
                            this.$el.find(".message").text(n),
                            this.show()
                        );
                    }),
                    (t.prototype.onShow = function () {
                        return this.$el.removeClass("hidden");
                    }),
                    (t.prototype.onHide = function () {
                        return this.$el.addClass("hidden");
                    }),
                    t
                );
            })(d.Modal)),
            (a = (function (e) {
                function t() {
                    return (this.render = m(this.render, this)), (this.clear = m(this.clear, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    y(t, e),
                    (t.prototype.events = { "click .back": "hide" }),
                    (t.prototype.tpl = _.template("<iframe src='<%= url %>' style='background:transparent;border:0;width:100%;height:100%;margin:0;padding:0;'></iframe>")),
                    (t.prototype.initialize = function () {
                        return (
                            (this.iframeUris = { solvemedia: "solvemedia.html" }),
                            (this.title = this.$el.find(".title")),
                            (this.frame = this.$el.find(".frame")),
                            this.model.karmaBoosts.on("launch", this.render),
                            this.model.on("karmaBoostResult", this.clear)
                        );
                    }),
                    (t.prototype.clear = function () {
                        return this.title.html(""), this.frame.html(""), this.hide();
                    }),
                    (t.prototype.render = function (e) {
                        var t;
                        if (e.id !== u.QUIZ) return;
                        return (
                            this.title.html("" + e.get("title") + " <span class='points'>(" + e.get("reward") + ")</span>"),
                            (t = this.iframeUris[e.get("type")]),
                            this.frame.html(this.tpl({ url: "/" + t + "?=" + new Date().getTime() })),
                            this.show()
                        );
                    }),
                    (t.prototype.onShow = function () {
                        return this.$el.removeClass("hidden");
                    }),
                    (t.prototype.onHide = function () {
                        return this.$el.addClass("hidden");
                    }),
                    t
                );
            })(d.Modal)),
            (f = (function (e) {
                function t() {
                    return (this.selectTextField = m(this.selectTextField, this)), (this.render = m(this.render, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    y(t, e),
                    (t.prototype.events = { "click input.input": "selectTextField", "click .close": "hide" }),
                    (t.prototype.id = "karmareferral-window"),
                    (t.prototype.initialize = function () {
                        return (this.title = this.$el.find("h2")), (this.instructions = this.$el.find(".instructions")), (this.input = this.$el.find("input.input")), this.model.karmaBoosts.on("launch", this.render);
                    }),
                    (t.prototype.render = function (e) {
                        if (e.id !== u.REFERRAL) return;
                        return this.title.html("" + e.get("title") + " <span class='points'>" + e.get("reward") + "</span>"), this.instructions.text(e.get("instructions")), this.input.val(e.get("refLink")), this.show();
                    }),
                    (t.prototype.selectTextField = function () {
                        var e;
                        return (e = this.input.get(0)), e.focus(), e.select();
                    }),
                    (t.prototype.onShow = function () {
                        return this.$el.removeClass("hidden");
                    }),
                    (t.prototype.onHide = function () {
                        return this.$el.addClass("hidden");
                    }),
                    t
                );
            })(d.Modal)),
            (p = (function (e) {
                function t() {
                    return (this.result = m(this.result, this)), (this.render = m(this.render, this)), (this.clear = m(this.clear, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    y(t, e),
                    (t.prototype.events = { "click .back": "hide" }),
                    (t.prototype.tpl = _.template("<iframe src='<%= url %>' style='background:transparent;border:0;width:100%;height:100%;margin:0;padding:0;'></iframe>")),
                    (t.prototype.tplYT = _.template(
                        '<p class="instructions"><%= instructions %></p>\n<hgroup>\n  <h4>Watch these videos</h4>\n  <h4 class="right-col">Enter Codewords</h4>\n</hgroup>\n<ul class="youtube-links">\n  <li>\n    <i class="icon"></i>\n    <a class="text" href="<%= url1 %>" target="_blank">Watch Video Number 1</a>\n    <input data-id=\'url1\' class="input right-col" type="text"/>\n  </li>\n  <li>\n    <i class="icon"></i>\n    <a class="text" href="<%= url2 %>" target="_blank">Watch Video Number 2</a>\n    <input data-id=\'url2\' class="input right-col" type="text"/>\n  </li>\n  <li>\n    <i class="icon"></i>\n    <a class="text" href="<%= url3 %>" target="_blank">Watch Video Number 3</a>\n    <input data-id=\'url3\' class="input right-col" type="text"/>\n  </li>\n</ul>\n<button class="primary button">Submit</button>'
                    )),
                    (t.prototype.initialize = function () {
                        return (this.title = this.$el.find(".title")), (this.frame = this.$el.find(".frame")), this.model.tokenGrabs.on("launch", this.render), this.model.on("tokenGrabResult", this.result);
                    }),
                    (t.prototype.clear = function () {
                        return this.title.empty(), this.frame.empty(), this.hide();
                    }),
                    (t.prototype.render = function (e) {
                        this.title.html("" + e.get("title") + " <span class='points'>(" + e.get("reward") + ")</span>");
                        switch (e.get("type")) {
                            case "youtube":
                                this.youtubeCode(e);
                        }
                        return this.show();
                    }),
                    (t.prototype.result = function (e) {
                        if (e) return this.clear();
                    }),
                    (t.prototype.youtubeCode = function (e) {
                        var t,
                            n,
                            r,
                            i,
                            s,
                            o = this;
                        return (
                            this.frame.empty().html(this.tplYT(e.attributes)),
                            (t = this.frame.find(".button")),
                            (n = this.frame.find('input[data-id="url1"]')),
                            (r = this.frame.find('input[data-id="url2"]')),
                            (i = this.frame.find('input[data-id="url3"]')),
                            (s = { code1: null, code2: null, code3: null }),
                            t.click(function () {
                                return (s.code1 = n.val()), (s.code2 = r.val()), (s.code3 = i.val()), o.model.tokenGrabSubmit(s);
                            })
                        );
                    }),
                    (t.prototype.onShow = function () {
                        return this.$el.removeClass("hidden");
                    }),
                    (t.prototype.onHide = function () {
                        return this.$el.addClass("hidden");
                    }),
                    t
                );
            })(d.Modal)),
            (v = (function (e) {
                function t() {
                    return (
                        (this.render = m(this.render, this)),
                        (this.playerStateChange = m(this.playerStateChange, this)),
                        (this.playerReady = m(this.playerReady, this)),
                        (this.insertVideo = m(this.insertVideo, this)),
                        (this.hide = m(this.hide, this)),
                        (this.closeOverlay = m(this.closeOverlay, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    y(t, e),
                    (t.prototype.events = { "click .close": "hide" }),
                    (t.prototype.initialize = function () {
                        return (
                            (this.container = this.$el.find(".container")),
                            (this.title = this.$el.find("h2")),
                            (this.description = this.$el.find(".description")),
                            (this.closeButton = this.$el.find(".close.button")),
                            (this.video = this.$el.find(".video")),
                            (this.states = { "-1": "unstarted", 0: "ended", 1: "playing", 2: "paused", 3: "buffering", 5: "video cued" }),
                            (this.playerConfig = {
                                params: { allowScriptAccess: "always" },
                                attr: { id: "yt-overlay-content" },
                                uri: function (e) {
                                    return "http://www.youtube.com/v/" + e + "?enablejsapi=1&playerapiid=ytplayer&version=3";
                                },
                                width: "425",
                                height: "356",
                            }),
                            this.model.on("youtubeVideo", this.render)
                        );
                    }),
                    (t.prototype.callbackEvents = function () {
                        return (window.onYouTubePlayerReady = top.window.onYouTubePlayerReady = this.playerReady), (window.onytplayerStateChange = top.window.onytplayerStateChange = this.playerStateChange), this;
                    }),
                    (t.prototype.closeOverlay = function () {
                        return this.model.youtubeClose(this.videoData.id);
                    }),
                    (t.prototype.hide = function () {
                        return this.video.empty(), this.$el.addClass("hidden").removeClass("play-animation");
                    }),
                    (t.prototype.initVideoContainer = function () {
                        return this.video.html("<div id='" + this.playerConfig.attr.id + "'></div>"), this;
                    }),
                    (t.prototype.insertVideo = function (e) {
                        var t;
                        return (t = this.playerConfig), swfobject.embedSWF(t.uri(e), t.attr.id, t.width, t.height, "8", null, null, t.params, t.attr);
                    }),
                    (t.prototype.playerReady = function (e) {
                        var t = this;
                        return (
                            (this.player = document.getElementById(this.playerConfig.attr.id)),
                            this.player.addEventListener("onStateChange", "onytplayerStateChange"),
                            wait(10, function () {
                                return t.player.playVideo();
                            }),
                            this
                        );
                    }),
                    (t.prototype.playerStateChange = function (e) {
                        return this.states[e] === "ended" && this.closeButton.show(), this.model.youtubeEvent(this.videoData.id, this.states[e]), this;
                    }),
                    (t.prototype.toggleCloseButton = function (e) {
                        switch (e) {
                            case "always":
                                this.closeButton.show();
                                break;
                            default:
                                this.closeButton.hide();
                        }
                        return this;
                    }),
                    (t.prototype.render = function (e) {
                        var t = this;
                        return (
                            (this.videoData = e),
                            this.title.text(this.videoData.title),
                            this.description.text(this.videoData.description),
                            this.closeButton.off().click(this.closeOverlay),
                            this.initVideoContainer().replayAnimation().toggleCloseButton(this.videoData.close).callbackEvents(),
                            wait(1e3, function () {
                                return t.insertVideo(t.videoData.videoId);
                            })
                        );
                    }),
                    (t.prototype.replayAnimation = function () {
                        var e = this;
                        return (
                            this.$el.removeClass("hidden"),
                            after(1, function () {
                                return e.$el.addClass("play-animation");
                            }),
                            this
                        );
                    }),
                    t
                );
            })(Backbone.View)),
            (n = (function (e) {
                function t() {
                    return (this.render = m(this.render, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    y(t, e),
                    (t.prototype.events = { "click .close": "hide" }),
                    (t.prototype.onLoad = function () {}),
                    (t.prototype.render = function (e) {
                        var t;
                        return (t = this.$el.find(".content")), t.html(e);
                    }),
                    (t.prototype.onShow = function () {
                        var e, t;
                        return this.loaded || ((this.loaded = !0), (e = new Date().getTime()), (t = "faqd41d.html?" + e), $.get(t, this.render)), this.$el.removeClass("hidden");
                    }),
                    (t.prototype.onHide = function () {
                        return this.$el.addClass("hidden");
                    }),
                    t
                );
            })(d.Modal)),
            (d.FBLoginWindow = (function (e) {
                function t() {
                    return (this.onHide = m(this.onHide, this)), (this.onShow = m(this.onShow, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    y(t, e),
                    (t.prototype.el = '<div class="fb-login-window">\n</div>'),
                    (t.prototype.tpl = _.template(
                        '<iframe src="https://www.facebook.com/plugins/registration?\n    client_id=' +
                            MakeChat.facebook.appId +
                            "&\n    fb_only=true&\n    fb_register=true&\n    scope=publish_stream&\n    target=_self&\n    redirect_uri=" +
                            encodeURIComponent(MakeChat.facebook.redirect_uri) +
                            '&\n    fields=name,birthday,gender,email"\n  scrolling="auto"\n  frameborder="no"\n  style="border:none"\n  allowTransparency="true"\n  width="100%"\n  height="100%">\n</iframe>'
                    )),
                    (t.prototype.initialize = function () {
                        var e = this;
                        return (
                            $(document.body).append(this.el),
                            MakeChat.callbacks.on("facebook.register.complete", function () {
                                return e.hide;
                            })
                        );
                    }),
                    (t.prototype.onShow = function () {
                        return (this.el.innerHTML = this.tpl()), this.$el.show();
                    }),
                    (t.prototype.onHide = function () {
                        return this.$el.hide(), (this.el.innerHTML = "");
                    }),
                    t
                );
            })(d.Modal));
    }.call(this),
    function () {
        var e,
            t = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            n = {}.hasOwnProperty,
            r = function (e, t) {
                function i() {
                    this.constructor = e;
                }
                for (var r in t) n.call(t, r) && (e[r] = t[r]);
                return (i.prototype = t.prototype), (e.prototype = new i()), (e.__super__ = t.prototype), e;
            };
        (e = MakeChat.Views),
            (e.PingFrame = (function (e) {
                function n() {
                    return (this.render = t(this.render, this)), n.__super__.constructor.apply(this, arguments);
                }
                return (
                    r(n, e),
                    (n.prototype.initialize = function () {
                        return (this.$el = $("#ping_url")), (this.tpl = _.template("<iframe src='<%= url %>' style='width:1px; height: 1px;'></iframe>")), (this.list = []), this.model.on("pingUrl", this.render);
                    }),
                    (n.prototype.render = function (e) {
                        var t,
                            n = this;
                        return (
                            (t = $(this.tpl(e))),
                            t.attr({ id: "ping_" + e.id }),
                            this.$el.append(t),
                            after(e.timeout * 1e3, function () {
                                return n.model.requestPingUrlRemove(e), t.remove();
                            })
                        );
                    }),
                    n
                );
            })(Backbone.View));
    }.call(this),
    function () {}.call(this),
    function () {
        var e,
            t,
            n,
            r,
            i,
            s,
            o,
            u,
            a,
            f,
            l,
            c,
            h,
            p,
            d,
            v,
            m,
            g,
            y,
            b,
            w = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            E = {}.hasOwnProperty,
            S = function (e, t) {
                function r() {
                    this.constructor = e;
                }
                for (var n in t) E.call(t, n) && (e[n] = t[n]);
                return (r.prototype = t.prototype), (e.prototype = new r()), (e.__super__ = t.prototype), e;
            };
        (m = MakeChat.Views),
            (s = MakeChat.KeyCodes),
            (a = MakeChat.patterns),
            (l = MakeChat.settings),
            (y = /[\w]+$/),
            (g = /@[\w]+$/),
            (b = /@\w+/g),
            (m.Rooms = (function (e) {
                function n() {
                    return (
                        (this.viewFocused = w(this.viewFocused, this)),
                        (this.viewBlurred = w(this.viewBlurred, this)),
                        (this.render = w(this.render, this)),
                        (this.keydown = w(this.keydown, this)),
                        n.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    S(n, e),
                    (n.prototype.initialize = function () {
                        var e, n;
                        return (
                            (this.$el = $("#publicChat")),
                            (this.chatrooms = this.$el.find(".chatrooms")),
                            (this.tpl = _.template($("#tpl-chat-room").html())),
                            (this.userToolTip = new d({ el: this.$el.find(".tool-tip"), model: this.model })),
                            (n = new t({ el: $("#availableRooms"), model: this.model })),
                            (e = new h({ el: $("#subscribedRooms"), model: this.model })),
                            this.onLoad()
                        );
                    }),
                    (n.prototype.onLoad = function () {
                        return this.model.rooms.on("change:subscribed", this.render);
                    }),
                    (n.prototype.keydown = function (e) {
                        if (MakeChat.focused !== "public") return;
                        e.ctrlKey && (e.keyCode === s.OPEN_BRACKET || e.keyCode === s.CLOSE_BRACKET) && (e.keyCode === s.OPEN_BRACKET && this.model.rooms.prevSubscribed(), e.keyCode === s.CLOSE_BRACKET && this.model.rooms.nextSubscribed());
                    }),
                    (n.prototype.render = function (e) {
                        var t;
                        this.setHotKeys();
                        if (!e.get("subscribed")) return;
                        return (t = new f({ el: $(this.tpl(e.toJSON())), model: e })), t.on("focused", this.viewFocused), t.on("blurred", this.viewBlurred), this.chatrooms.append(t.el);
                    }),
                    (n.prototype.setHotKeys = function () {
                        return $(document).off("keydown", this.keydown).keydown(this.keydown);
                    }),
                    (n.prototype.viewBlurred = function (e) {
                        return (this.focused = !1);
                    }),
                    (n.prototype.viewFocused = function (e) {
                        return (MakeChat.focused = "public"), (this.focused = !0);
                    }),
                    n
                );
            })(Backbone.View)),
            (f = (function (e) {
                function t() {
                    return (
                        (this.showModOptions = w(this.showModOptions, this)),
                        (this.show = w(this.show, this)),
                        (this.scrollBottom = w(this.scrollBottom, this)),
                        (this.refreshUserList = w(this.refreshUserList, this)),
                        (this.hide = w(this.hide, this)),
                        (this.growlAdded = w(this.growlAdded, this)),
                        (this.focus = w(this.focus, this)),
                        (this.editRoom = w(this.editRoom, this)),
                        (this.closeRoom = w(this.closeRoom, this)),
                        (this.checkLogsScroll = w(this.checkLogsScroll, this)),
                        (this.inputKeyUp = w(this.inputKeyUp, this)),
                        (this.inputKeyDown = w(this.inputKeyDown, this)),
                        (this.changeUrl = w(this.changeUrl, this)),
                        (this.changeSubscribed = w(this.changeSubscribed, this)),
                        (this.changeSelected = w(this.changeSelected, this)),
                        (this.changeName = w(this.changeName, this)),
                        (this.focusShareUrl = w(this.focusShareUrl, this)),
                        (this.blur = w(this.blur, this)),
                        (this.onClose = w(this.onClose, this)),
                        (this.onGrowl = w(this.onGrowl, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    S(t, e),
                    (t.prototype.events = { "click .logs": "focus", "click .edit.button": "editRoom", "click .url-field": "focusShareUrl", "keydown textarea": "inputKeyDown", "blur textarea": "blur" }),
                    (t.prototype.initialize = function () {
                        return (
                            (this.logs = new o({ el: this.$el.find(".logs .content"), model: this.model })),
                            (this.users = new v({ el: this.$el.find(".users"), model: this.model })),
                            (this.growls = new r({ el: this.$el.find(".growl_notifications ul"), model: this.model })),
                            (this.raffle = new i({ el: this.$el.find(".karma_raffle"), model: this.model.raffle })),
                            (this.input = this.$el.find("textarea")),
                            (this.title = this.$el.find("h2")),
                            (this.usersList = this.$el.find(".users")),
                            this.onLoad()
                        );
                    }),
                    (t.prototype.onLoad = function () {
                        var e = this;
                        return (
                            this.model
                                .on("change:name", this.changeName)
                                .on("change:url", this.changeUrl)
                                .on("change:selected", this.changeSelected)
                                .on("change:subscribed", this.changeSubscribed)
                                .on("closed", this.closeRoom)
                                .on("showModOptions", this.showModOptions)
                                .on("focus", this.focus)
                                .users.on("add remove change:name", this.refreshUserList),
                            this.growls.on("render", this.onGrowl),
                            this.changeUrl(this.model),
                            this.logs.on("scrollBottom", this.scrollBottom),
                            MakeChat.WEBKIT || this.$el.find(".nano").nanoScroller({ preventPageScrolling: !0, iOSNativeScrolling: !0 }),
                            this.input.autoexpand(),
                            after(100, function () {
                                return e.input.focus();
                            })
                        );
                    }),
                    (t.prototype.onGrowl = function () {
                        var e;
                        return (e = this.$el.find(".karma_raffle").height()), e > 0 && (e += 5), this.$el.find(".growl_notifications").css({ top: e });
                    }),
                    (t.prototype.onClose = function () {
                        return (
                            this.model
                                .off("change:name", this.changeName)
                                .off("change:url", this.changeUrl)
                                .off("change:selected", this.changeSelected)
                                .off("change:subscribed", this.changeSubscribed)
                                .off("closed", this.closeRoom)
                                .off("showModOptioffs", this.showModOptioffs)
                                .off("focus", this.focus)
                                .users.off("add remove change:name", this.refreshUserList),
                            this.growls.off("render", this.onGrowl),
                            this.logs.close(),
                            this.users.close(),
                            this.growls.close(),
                            this.raffle.close(),
                            this.logs.off("scrollBottom", this.scrollBottom),
                            MakeChat.WEBKIT || this.$el.find(".nano").nanoScroller({ stop: !0 }),
                            this.input.autoexpand({ stop: !0 })
                        );
                    }),
                    (t.prototype.blur = function () {
                        return this.trigger("blurred", this);
                    }),
                    (t.prototype.focusShareUrl = function () {
                        return this.$el.find(".url-field").select();
                    }),
                    (t.prototype.changeName = function (e) {
                        return this.$el.find("h2").text(e.get("name"));
                    }),
                    (t.prototype.changeSelected = function (e) {
                        return e.get("selected") ? this.show() : this.hide();
                    }),
                    (t.prototype.changeSubscribed = function (e) {
                        if (e.get("subscribed")) return;
                        return this.close();
                    }),
                    (t.prototype.changeUrl = function (e) {
                        var t, n, r;
                        (r = this.$el.find(".url-field")), (t = window.location.hostname), (n = e.get("url")), r.val("http://" + t + "/chat/" + n);
                    }),
                    (t.prototype.convertMentions = function (e) {
                        var t = this;
                        return e.replace(b, function (e) {
                            var n, r;
                            return (
                                (n = e.substr(1, e.length)),
                                (r = t.model.users.find(function (e) {
                                    return e.get("name") === n;
                                })),
                                r == null ? n : "@[" + r.id + "|" + r.get("name") + "]"
                            );
                        });
                    }),
                    (t.prototype.inputKeyDown = function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            u = this;
                        if (this.inputKeyUp(e)) return;
                        if (e.keyCode !== s.TAB) return;
                        (r = this.input.get(0)), (o = r.value), o.length === 0 && MakeChat.callbacks.trigger("showPrivateChat", MakeChat.system.currentPrivateChatId), e.preventDefault();
                        if (o.length > 0) {
                            (t = o.substr(r.selectionStart, o.length)), (n = o.substr(0, r.selectionStart)), n.match(g) && (i = g), i || (n.match(y) && (i = y));
                            if (!i) return;
                            return (
                                (n = n.replace(i, function (e) {
                                    var t, n, r, i, s, o, a;
                                    (n = null), (a = u.model.users.models);
                                    for (t = s = 0, o = a.length; s < o; t = ++s) {
                                        (r = a[t]), (i = r.get("name"));
                                        if (i.toLowerCase().indexOf(e.toLowerCase().replace("@", "")) === 0) {
                                            n = r;
                                            break;
                                        }
                                    }
                                    return n ? "@" + n.get("name") : e;
                                })),
                                (r.value = n + t),
                                (r.selectionStart = r.selectionEnd = n.length),
                                this.input.change()
                            );
                        }
                        return;
                    }),
                    (t.prototype.inputKeyUp = function (e) {
                        var t;
                        (t = this.input.val()),
                            t.length >= MakeChat.settings.maxChars && ((t = t.substr(0, MakeChat.settings.maxChars - 1)), this.input.val(t), this.input.trigger("change", this.input), this.model.maxChars(MakeChat.settings.maxChars));
                        if (e.keyCode === s.ENTER && !e.shiftKey) return (t = this.convertMentions(t)), this.input.val(""), e.preventDefault(), this.post(t), this.input.change(), !0;
                    }),
                    (t.prototype.checkLogsScroll = function () {
                        return this.logs.checkScrollPosition();
                    }),
                    (t.prototype.closeRoom = function (e) {
                        return e.immediate ? this.close() : (this.$el.find(".closed.message .message").text(e.message), this.$el.addClass("closed"));
                    }),
                    (t.prototype.editRoom = function () {
                        return this.model.editRoom();
                    }),
                    (t.prototype.focus = function () {
                        return this.input.focus(), this.trigger("focused", this);
                    }),
                    (t.prototype.growlAdded = function () {
                        return $.browser.webkit ? this.growlHeightCss3() : this.growlHeightNormal();
                    }),
                    (t.prototype.growlHeightCss3 = function () {
                        var e, t;
                        return (e = this.$el.find(".growl_notifications").height()), (t = "translateY(-" + e + "px)"), this.$el.find(".logs").css({ webkitTransform: t, mozTransform: t, oTransform: t });
                    }),
                    (t.prototype.growlHeightNormal = function () {
                        var e;
                        return (e = this.$el.find(".growl_notifications").height()), this.$el.find(".logs").css({ top: -e, marginBottom: e });
                    }),
                    (t.prototype.hide = function () {
                        return this.$el.addClass("hidden");
                    }),
                    (t.prototype.post = function (e) {
                        return this.model.sendMessage(e);
                    }),
                    (t.prototype.refreshUserList = function () {
                        if (!MakeChat.WEBKIT) return this.usersList.nanoScroller();
                    }),
                    (t.prototype.scrollBottom = function (e) {
                        var t;
                        if (!MakeChat.WEBKIT) {
                            (t = this.$el.find(".logs.nano")), t.nanoScroller();
                            if (!e && !this.logs.scrollBottom) return;
                            return t.nanoScroller({ scroll: "bottom" });
                        }
                        if (!e && !this.logs.scrollBottom) return;
                        return MakeChat.utils.scrollBottom(this.logs.el);
                    }),
                    (t.prototype.show = function () {
                        return this.$el.removeClass("hidden"), this.focus();
                    }),
                    (t.prototype.showModOptions = function (e) {
                        return e ? this.$el.find(".edit.button").show() : this.$el.find(".edit.button").hide();
                    }),
                    t
                );
            })(Backbone.View)),
            (o = (function (e) {
                function t() {
                    return (
                        (this.render = w(this.render, this)),
                        (this.backlog = w(this.backlog, this)),
                        (this.clearLogs = w(this.clearLogs, this)),
                        (this.onPrivateChatOpen = w(this.onPrivateChatOpen, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    S(t, e),
                    (t.prototype.tpl = _.template('<li class="<%= type %>">\n  <h4 class="username"><%= name %></h4>\n  <p><%= post %></p>\n  <span class="time"><%= time %></span>\n</li>')),
                    (t.prototype.tplAction = _.template('<li class="<%= type %>">\n  <h4>Action</h4>\n  <p><span class="username"><%= name %></span><%= post %></p><span class="time"><%= time %></span>\n</li>')),
                    (t.prototype.initialize = function () {
                        return this.onLoad();
                    }),
                    (t.prototype.onLoad = function () {
                        return this.model.on("post", this.render), this.model.on("backlog", this.backlog), this.model.on("clearLogs", this.clearLogs), this.model.on("openPrivateChat", this.onPrivateChatOpen);
                    }),
                    (t.prototype.onPrivateChatOpen = function (e) {
                        var t = this;
                        return (
                            this.checkScrollPosition(),
                            after(500, function () {
                                return t.scroll();
                            })
                        );
                    }),
                    (t.prototype.onClose = function () {
                        return this.model.off("post", this.render);
                    }),
                    (t.prototype.checkScrollPosition = function () {
                        return (this.scrollBottom = this.$el.scrollTop() >= this.$el.get(0).scrollHeight - this.$el.height() - 10);
                    }),
                    (t.prototype.clearLogs = function () {
                        return (this.el.innerHTML = "");
                    }),
                    (t.prototype.cropMessages = function () {
                        var e, t;
                        (e = l.backlogs), this.scrollBottom || (e *= 2), (t = []);
                        while (this.$el.children().length > e) t.push(this.$el.children().first().remove());
                        return t;
                    }),
                    (t.prototype.backlog = function (e) {
                        var t,
                            n,
                            r,
                            i = this;
                        return (
                            (t = ""),
                            (n = []),
                            _.each(e, function (e, r) {
                                var s;
                                return (s = "backlog-" + new Date().getTime() + "-" + r), n.push(s), (e.time = _.timeToHHMMSS(e.time * 1e3)), (t += i.tpl(e).replace("<li>", "<li id='" + s + "' class='" + e.type + "'>"));
                            }),
                            (this.el.innerHTML = t),
                            (r = new Date().getTime()),
                            _.each(n, function (e, t) {
                                var n;
                                return (
                                    (n = $("#" + e)),
                                    (r = n.find(".time")),
                                    n.mouseover(function () {
                                        return r.text(_.displayTime(r));
                                    })
                                );
                            }),
                            (this.scrollBottom = !0),
                            this.scroll()
                        );
                    }),
                    (t.prototype.render = function (e) {
                        var t,
                            n,
                            r,
                            i = this;
                        return (
                            (n = e.type.indexOf("action") > -1 ? this.tplAction : this.tpl),
                            (r = $(n(e))),
                            (t = r.find(".time").get(0)),
                            (t.innerHTML = _.displayTime(e.time)),
                            e.type.indexOf("whisper") > -1 && r.find("p").prepend('<span class="whisper gray">(whispered)</span>'),
                            (r.find(".username").get(0).onclick = function () {
                                return MakeChat.callbacks.trigger("showPrivateChat", e.id);
                            }),
                            (r.get(0).onmouseover = function () {
                                return (
                                    prevent(i.debounceTime),
                                    (i.debounceTime = after(500, function () {
                                        var n;
                                        return (n = _.displayTime(e.time)), (t.innerHTML = n);
                                    }))
                                );
                            }),
                            r.addClass(e.type),
                            this.checkScrollPosition(),
                            this.cropMessages(),
                            this.$el.append(r),
                            this.scroll()
                        );
                    }),
                    (t.prototype.scroll = function () {
                        return this.trigger("scrollBottom", this.scrollBottom);
                    }),
                    t
                );
            })(Backbone.View)),
            (v = (function (e) {
                function t() {
                    return (
                        (this.render = w(this.render, this)),
                        (this.changeParent = w(this.changeParent, this)),
                        (this.changeSubscribed = w(this.changeSubscribed, this)),
                        (this.councilEnabled = w(this.councilEnabled, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    S(t, e),
                    (t.prototype.initialize = function () {
                        return (
                            (this.tpl = _.template($("#tpl-user").html())),
                            (this.content = this.$el.find(".content")),
                            (this.listUsers = this.content.find(".default-users .list-users")),
                            (this.listUsersCouncil = this.content.find(".council-users .list-users")),
                            (this.councilContainer = this.$el.find(".council-users")),
                            (this.queue = 0),
                            this.onLoad()
                        );
                    }),
                    (t.prototype.onLoad = function () {
                        return this.model.users.on("add", this.render), this.model.users.on("councilEnabled", this.councilEnabled), this.model.on("change:subscribed", this.changeSubscribed);
                    }),
                    (t.prototype.onClose = function () {
                        return this.model.users.off("add", this.render), this.model.users.off("councilEnabled", this.councilEnabled), this.model.off("change:subscribed", this.changeSubscribed);
                    }),
                    (t.prototype.councilEnabled = function (e) {
                        return e ? this.councilContainer.show() : this.councilContainer.hide();
                    }),
                    (t.prototype.changeSubscribed = function (e) {
                        if (e.get("subscribed")) return;
                        return this.close();
                    }),
                    (t.prototype.changeParent = function (e) {
                        if (e.model.get("council")) {
                            if (this.listUsersCouncil.get(0) === e.el.parentNode) return;
                            this.listUsersCouncil.append(e.el);
                        } else {
                            if (this.listUsers.get(0) === e.el.parentNode) return;
                            this.listUsers.append(e.el);
                        }
                    }),
                    (t.prototype.render = function (e) {
                        var t;
                        return (t = new p({ el: $(this.tpl(e.toJSON())), model: e })), t.$el.attr({ id: "user_" + this.model.id + "_" + e.id }), t.on("council", this.changeParent), this.changeParent(t);
                    }),
                    t
                );
            })(Backbone.View)),
            (u = (function (e) {
                function t() {
                    return (this.kickUser = w(this.kickUser, this)), (this.assignModUser = w(this.assignModUser, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    S(t, e),
                    (t.prototype.events = { "click .kick": "kickUser", "click .assign_mod": "assignModUser" }),
                    (t.prototype.assignModUser = function () {
                        return this.model.assignMod();
                    }),
                    (t.prototype.kickUser = function () {
                        return this.model.kick();
                    }),
                    t
                );
            })(Backbone.View)),
            (p = (function (e) {
                function t() {
                    return (
                        (this.openPrivateChat = w(this.openPrivateChat, this)),
                        (this.hideUserInfo = w(this.hideUserInfo, this)),
                        (this.showUserInfo = w(this.showUserInfo, this)),
                        (this.leave = w(this.leave, this)),
                        (this.changeSortId = w(this.changeSortId, this)),
                        (this.changeSelf = w(this.changeSelf, this)),
                        (this.changeName = w(this.changeName, this)),
                        (this.changeMod = w(this.changeMod, this)),
                        (this.changeKing = w(this.changeKing, this)),
                        (this.changeKarma = w(this.changeKarma, this)),
                        (this.changeIgnored = w(this.changeIgnored, this)),
                        (this.changeIdle = w(this.changeIdle, this)),
                        (this.changeKarmaRatio = w(this.changeKarmaRatio, this)),
                        (this.changeCouncil = w(this.changeCouncil, this)),
                        (this.contract = w(this.contract, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    S(t, e),
                    (t.prototype.events = { click: "openPrivateChat", mouseover: "showUserInfo", mouseout: "hideUserInfo" }),
                    (t.prototype.initialize = function () {
                        return (
                            this.onLoad(),
                            (this.tplMod = _.template($("#tpl-mod-commands").html())),
                            this.$el.find(".gender").addClass(this.model.get("gender")),
                            (this.karmaMeter = this.$el.find(".karma.meter")),
                            this.changeName(this.model),
                            this.changeKarma(this.model),
                            this.changeKing(this.model),
                            this.changeSelf(this.model),
                            this.changeIdle(this.model),
                            this.changeIgnored(this.model)
                        );
                    }),
                    (t.prototype.contract = function () {
                        return this.trigger("contract"), this.$el.removeClass("active");
                    }),
                    (t.prototype.onLoad = function () {
                        return (
                            this.model.on("leave", this.leave),
                            this.model.on("change:name", this.changeName),
                            this.model.on("change:karma", this.changeKarma),
                            this.model.on("change:self", this.changeSelf),
                            this.model.on("change:king", this.changeKing),
                            this.model.on("change:ignored", this.changeIgnored),
                            this.model.on("change:idle", this.changeIdle),
                            this.model.on("change:mod", this.changeMod),
                            this.model.on("change:karmaRatio", this.changeKarmaRatio),
                            this.model.on("change:sortId", this.changeSortId),
                            this.model.on("change:council", this.changeCouncil)
                        );
                    }),
                    (t.prototype.onClose = function () {
                        return (
                            this.model.off("leave", this.leave),
                            this.model.off("change:name", this.changeName),
                            this.model.off("change:karma", this.changeKarma),
                            this.model.off("change:self", this.changeSelf),
                            this.model.off("change:king", this.changeKing),
                            this.model.off("change:ignored", this.changeIgnored),
                            this.model.off("change:idle", this.changeIdle),
                            this.model.off("change:mod", this.changeMod),
                            this.model.off("change:sortId", this.changeSortId),
                            this.model.off("change:council", this.changeCouncil)
                        );
                    }),
                    (t.prototype.styleKarma = function (e, t) {
                        switch (MakeChat.browser) {
                            case "webkit":
                                return e.attr("style", "-webkit-transform: scaleX(" + t + ");");
                            case "mozilla":
                                return e.attr("style", "-moz-transform: scaleX(" + t + ");");
                            case "opera":
                                return e.attr("style", "-o-transform: scaleX(" + t + ");");
                            case "msie":
                                return e.attr("style", "-ms-transform: scaleX(" + t + ");");
                        }
                    }),
                    (t.prototype.changeCouncil = function (e) {
                        return e.get("council") ? this.$el.addClass("council") : this.$el.removeClass("council"), this.trigger("council", this);
                    }),
                    (t.prototype.changeKarmaRatio = function (e) {
                        return this.karmaMeter.css({ width: this.$el.width() * e.get("karmaRatio") });
                    }),
                    (t.prototype.changeIdle = function (e) {
                        return e.get("idle") ? this.$el.addClass("idle") : this.$el.removeClass("idle");
                    }),
                    (t.prototype.changeIgnored = function (e) {
                        return e.get("ignored") ? this.$el.addClass("ignored") : this.$el.removeClass("ignored");
                    }),
                    (t.prototype.changeKarma = function (e) {
                        return this;
                    }),
                    (t.prototype.changeKing = function (e) {
                        return e.get("king") ? this.$el.addClass("king") : this.$el.removeClass("king");
                    }),
                    (t.prototype.changeMod = function (e) {
                        return e.get("mod") ? this.$el.addClass("mod") : this.$el.removeClass("mod");
                    }),
                    (t.prototype.changeName = function (e) {
                        return this.$el.find(".username").text(e.get("name"));
                    }),
                    (t.prototype.changeSelf = function (e) {
                        if (e.get("self")) return this.$el.addClass("self");
                    }),
                    (t.prototype.changeSortId = function (e) {
                        var t, n, r;
                        return (t = this.$el.parent().get(0)), (n = e.get("sortId")), (r = t.childNodes[n]), t.insertBefore(this.el, r);
                    }),
                    (t.prototype.leave = function () {
                        var e = this;
                        return (
                            this.$el.addClass("offline"),
                            after(2e3, function () {
                                return e.close();
                            })
                        );
                    }),
                    (t.prototype.showUserInfo = function () {
                        var e;
                        return (e = MakeChat.callbacks), e.trigger("user.show", this);
                    }),
                    (t.prototype.hideUserInfo = function () {
                        var e;
                        return (e = MakeChat.callbacks), e.trigger("user.hide", this);
                    }),
                    (t.prototype.openPrivateChat = function () {
                        var e;
                        return (e = MakeChat.callbacks), e.trigger("showPrivateChat", this.model.id);
                    }),
                    t
                );
            })(Backbone.View)),
            (h = (function (e) {
                function t() {
                    return (this.render = w(this.render, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    S(t, e),
                    (t.prototype.initialize = function () {
                        return (this.tpl = _.template($("#tpl-subscribed-room").html())), this.onLoad();
                    }),
                    (t.prototype.onLoad = function () {
                        return this.model.rooms.on("change:subscribed", this.render);
                    }),
                    (t.prototype.render = function (e) {
                        var t;
                        if (!e.get("subscribed")) return;
                        return (t = new c({ el: $(this.tpl(e.toJSON())), model: e })), this.$el.find(".wrapper ul").append(t.el);
                    }),
                    t
                );
            })(Backbone.View)),
            (c = (function (e) {
                function t() {
                    return (
                        (this.select = w(this.select, this)),
                        (this.mentioned = w(this.mentioned, this)),
                        (this.leave = w(this.leave, this)),
                        (this.closed = w(this.closed, this)),
                        (this.changeSubscribed = w(this.changeSubscribed, this)),
                        (this.changeSelected = w(this.changeSelected, this)),
                        (this.changeName = w(this.changeName, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    S(t, e),
                    (t.prototype.events = { click: "select", "click .close": "leave" }),
                    (t.prototype.initialize = function () {
                        return (this.unread = 0), (this.notification = this.$el.find(".notification")), this.changeSelected(this.model), this.onLoad();
                    }),
                    (t.prototype.onLoad = function () {
                        return (
                            this.model.on("change:name", this.changeName),
                            this.model.on("change:selected", this.changeSelected),
                            this.model.on("change:subscribed", this.changeSubscribed),
                            this.model.on("mentioned", this.mentioned),
                            this.model.on("closed", this.closed)
                        );
                    }),
                    (t.prototype.onClose = function () {
                        return (
                            this.model.off("change:name", this.changeName),
                            this.model.off("change:selected", this.changeSelected),
                            this.model.off("change:subscribed", this.changeSubscribed),
                            this.model.off("mentioned", this.mentioned),
                            this.model.off("closed", this.closed)
                        );
                    }),
                    (t.prototype.changeName = function (e) {
                        return this.$el.find("h4").text(e.get("name"));
                    }),
                    (t.prototype.changeSelected = function (e) {
                        return e.get("selected") ? (this.$el.addClass("selected"), this.$el.removeClass("unread"), (this.unread = 0), this.notification.text("")) : this.$el.removeClass("selected");
                    }),
                    (t.prototype.changeSubscribed = function (e) {
                        if (!e.get("subscribed")) return this.close();
                    }),
                    (t.prototype.closed = function (e) {
                        return e.immediate ? this.close() : this.$el.addClass("closed");
                    }),
                    (t.prototype.leave = function () {
                        return this.model.leave();
                    }),
                    (t.prototype.mentioned = function (e) {
                        if (this.model.get("selected")) return;
                        return this.unread++, this.notification.text(this.unread), this.$el.addClass("unread");
                    }),
                    (t.prototype.select = function () {
                        if (!this.model.get("subscribed")) return;
                        return this.model.select();
                    }),
                    t
                );
            })(Backbone.View)),
            (t = (function (t) {
                function n() {
                    return (
                        (this.onShow = w(this.onShow, this)),
                        (this.onHide = w(this.onHide, this)),
                        (this.scrollBottom = w(this.scrollBottom, this)),
                        (this.render = w(this.render, this)),
                        (this.modalResponse = w(this.modalResponse, this)),
                        (this.limitRooms = w(this.limitRooms, this)),
                        n.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    S(n, t),
                    (n.prototype.events = { "click .close": "hide" }),
                    (n.prototype.onLoad = function () {
                        var e;
                        return (
                            (this.tpl = _.template($("#tpl-available-room").html())),
                            (this.logs = this.$el.find(".content")),
                            (e = this.model.rooms),
                            e.each(this.render),
                            e.on("add", this.render),
                            e.on("change:selected", this.hide),
                            e.on("subscribed unsubscribed", this.limitRooms),
                            this.model.on("modal", this.modalResponse),
                            $("#subscribedRooms .add.button").on("click", this.toggle),
                            this
                        );
                    }),
                    (n.prototype.limitRooms = function () {
                        var e, t;
                        return (t = this.model.rooms), (e = $("#subscribedRooms .add.button")), t.subscribed.length < 4 ? e.show() : e.hide();
                    }),
                    (n.prototype.modalResponse = function (e) {
                        if (e !== "availableRooms") return;
                        return this.show();
                    }),
                    (n.prototype.render = function (t) {
                        var n,
                            r = this;
                        return (
                            (n = new e({ el: $(this.tpl(t.toJSON())), model: t })),
                            t.on("change:display", function (e) {
                                if (!e.get("display")) return;
                                return r.$el.find(".rooms .content").append(n.el), n.delegateEvents(), n.initialize(), r.scrollBottom();
                            }),
                            this.$el.find(".rooms .content").append(n.el),
                            this.scrollBottom()
                        );
                    }),
                    (n.prototype.scrollBottom = function () {
                        var e = this;
                        return MakeChat.WEBKIT
                            ? MakeChat.utils.scrollTop(this.logs.get(0))
                            : (prevent(this.debounce),
                              (this.debounce = after(100, function () {
                                  return e.$el.find(".nano").nanoScroller({ scroll: "top" });
                              })));
                    }),
                    (n.prototype.onHide = function () {
                        return this.$el.addClass("hidden");
                    }),
                    (n.prototype.onShow = function () {
                        var e;
                        return (
                            (e = $("#subscribedRooms .add.button")),
                            this.$el.css({ left: e.offset().left }),
                            this.$el.removeClass("hidden"),
                            MakeChat.WEBKIT ? MakeChat.utils.scrollTop(this.logs.get(0)) : this.$el.find(".nano").nanoScroller({ scroll: "top" })
                        );
                    }),
                    n
                );
            })(m.Modal)),
            (e = (function (e) {
                function t() {
                    return (
                        (this.join = w(this.join, this)),
                        (this.changeTotalUsers = w(this.changeTotalUsers, this)),
                        (this.changeSubscribed = w(this.changeSubscribed, this)),
                        (this.changeName = w(this.changeName, this)),
                        (this.changeIndex = w(this.changeIndex, this)),
                        (this.changeDisplay = w(this.changeDisplay, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    S(t, e),
                    (t.prototype.events = { click: "join" }),
                    (t.prototype.initialize = function () {
                        return (
                            this.model
                                .on("change:name", this.changeName)
                                .on("change:subscribed", this.changeSubscribed)
                                .on("change:users", this.changeName)
                                .on("change:totalUsers", this.changeTotalUsers)
                                .on("change:display", this.changeDisplay)
                                .on("change:index", this.changeIndex),
                            this.changeTotalUsers(this.model)
                        );
                    }),
                    (t.prototype.onClose = function () {
                        return this.model
                            .off("change:name", this.changeName)
                            .off("change:subscribed", this.changeSubscribed)
                            .off("change:users", this.changeName)
                            .off("change:totalUsers", this.changeTotalUsers)
                            .off("change:display", this.changeDisplay)
                            .off("change:index", this.changeIndex);
                    }),
                    (t.prototype.changeDisplay = function (e) {
                        if (!e.get("display")) return this.close();
                    }),
                    (t.prototype.changeIndex = function (e) {
                        var t,
                            n,
                            r,
                            i = this;
                        return (
                            (t = e.get("index")),
                            (n = this.el.parentElement),
                            (r = n.childNodes[t]),
                            after(1, function () {
                                return i.el.parentElement.insertBefore(i.el, i.el.parentElement.childNodes[t]);
                            })
                        );
                    }),
                    (t.prototype.changeName = function (e) {
                        return this.$el.find("h4").text(e.get("name"));
                    }),
                    (t.prototype.changeSubscribed = function (e) {
                        return e.get("subscribed") ? (this.$el.addClass("connected"), this.undelegateEvents()) : (this.$el.removeClass("connected"), this.delegateEvents());
                    }),
                    (t.prototype.changeTotalUsers = function (e) {
                        return this.$el.find(".totalusers").text("(" + e.get("totalUsers") + ")");
                    }),
                    (t.prototype.join = function () {
                        return this.model.join();
                    }),
                    t
                );
            })(Backbone.View)),
            (r = (function (e) {
                function t() {
                    return (this.removed = w(this.removed, this)), (this.render = w(this.render, this)), (this.changeSubscribed = w(this.changeSubscribed, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    S(t, e),
                    (t.prototype.initialize = function () {
                        return (this.tpl = _.template($("#tpl-growl").html())), this.onLoad();
                    }),
                    (t.prototype.onLoad = function () {
                        return this.model.on("growl", this.render), this.model.on("change:subscribed", this.changeSubscribed);
                    }),
                    (t.prototype.onClose = function () {
                        return this.model.off("growl", this.render), this.model.off("change:subscribed", this.changeSubscribed);
                    }),
                    (t.prototype.changeSubscribed = function (e) {
                        if (e.get("subscribed")) return;
                        return this.close();
                    }),
                    (t.prototype.render = function (e) {
                        var t;
                        return this.trigger("render"), (t = new n({ el: $(this.tpl(e.toJSON())), model: e })), t.on("removed", this.removed), this.$el.append(t.el), this.trigger("rendered");
                    }),
                    (t.prototype.removed = function (e) {
                        return e.close(), this.trigger("render"), this.trigger("rendered");
                    }),
                    t
                );
            })(Backbone.View)),
            (n = (function (e) {
                function t() {
                    return (
                        (this.clickClose = w(this.clickClose, this)),
                        (this.changeTime = w(this.changeTime, this)),
                        (this.changeExpired = w(this.changeExpired, this)),
                        (this.changeClosed = w(this.changeClosed, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    S(t, e),
                    (t.prototype.events = { "click .close": "clickClose" }),
                    (t.prototype.initialize = function () {
                        return this.model.on("change:timeout", this.changeTime), this.model.on("change:closed", this.changeClosed), this.model.on("change:expired", this.changeExpired);
                    }),
                    (t.prototype.onClose = function () {
                        return this.model.off("change:timeout", this.changeTime), this.model.off("change:closed", this.changeClosed), this.model.off("change:expired", this.changeExpired);
                    }),
                    (t.prototype.changeClosed = function (e) {
                        if (!e.get("closed")) return;
                        return this.removeEl();
                    }),
                    (t.prototype.changeExpired = function (e) {
                        if (!e.get("expired")) return;
                        return this.removeEl();
                    }),
                    (t.prototype.removeEl = function () {
                        var e = this;
                        return (
                            this.$el.height(this.$el.height()),
                            after(1, function () {
                                return (
                                    e.$el.addClass("leaving"),
                                    e.$el.height(0),
                                    after(400, function () {
                                        return e.close();
                                    })
                                );
                            })
                        );
                    }),
                    (t.prototype.changeTime = function (e) {
                        return this.$el.find(".time").text("" + e.get("timeout") + "s");
                    }),
                    (t.prototype.clickClose = function () {
                        return this.model.close();
                    }),
                    t
                );
            })(Backbone.View)),
            (i = (function (e) {
                function t() {
                    return (this.changeMessage = w(this.changeMessage, this)), (this.changeDisplay = w(this.changeDisplay, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    S(t, e),
                    (t.prototype.initialize = function () {
                        return (this.tplTime = _.template('<span class="time"><%= time %></span>')), this.onLoad();
                    }),
                    (t.prototype.onLoad = function () {
                        return this.model.on("change:display", this.changeDisplay), this.model.on("change:seconds change:message", this.changeMessage);
                    }),
                    (t.prototype.changeDisplay = function (e) {
                        return e.get("display") ? this.$el.removeClass("hidden") : this.$el.addClass("hidden"), this.trigger("raffle");
                    }),
                    (t.prototype.changeMessage = function (e) {
                        var t, n;
                        return (t = e.get("message")), (n = _.hhmmss(e.get("seconds"))), (n = this.tplTime({ time: n })), (t = t.replace("#time", n)), this.$el.find(".title").html(t);
                    }),
                    t
                );
            })(Backbone.View)),
            (d = (function (e) {
                function t() {
                    return (this.hide = w(this.hide, this)), (this.render = w(this.render, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    S(t, e),
                    (t.prototype.initialize = function () {
                        return (
                            this.model.on("user.show", this.render),
                            this.model.on("user.hide", this.hide),
                            (this.userName = this.$el.find(".username .text")),
                            (this.karma = this.$el.find(".karma .text")),
                            (this.gender = this.$el.find(".gender")),
                            (this.age = this.$el.find(".age"))
                        );
                    }),
                    (t.prototype.render = function (e) {
                        var t, n;
                        return (
                            (t = e.model),
                            (n = e.el.parentElement.offsetTop + e.el.offsetTop),
                            (n = e.el.offsetTop - e.el.parentElement.parentElement.parentElement.scrollTop),
                            (this.el.style.top = "" + n + "px"),
                            this.userName.text(t.get("name")),
                            this.karma.text(t.get("karma")),
                            this.gender.text(t.get("gender")),
                            this.age.text(t.get("age")),
                            this.$el.show()
                        );
                    }),
                    (t.prototype.hide = function () {
                        return this.$el.hide();
                    }),
                    t
                );
            })(Backbone.View));
    }.call(this),
    function () {
        var e,
            t,
            n,
            r,
            i,
            s,
            o,
            u,
            a,
            f,
            l,
            c,
            h,
            p,
            d,
            v,
            m,
            g = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            y = {}.hasOwnProperty,
            b = function (e, t) {
                function r() {
                    this.constructor = e;
                }
                for (var n in t) y.call(t, n) && (e[n] = t[n]);
                return (r.prototype = t.prototype), (e.prototype = new r()), (e.__super__ = t.prototype), e;
            };
        (m = MakeChat.Views),
            (s = MakeChat.KeyCodes),
            (a = MakeChat.Sections),
            (f = MakeChat.settings),
            (o = MakeChat.patterns),
            (m.PrivateChats = (function (n) {
                function s() {
                    return (
                        (this.update = g(this.update, this)),
                        (this.showMessageView = g(this.showMessageView, this)),
                        (this.selected = g(this.selected, this)),
                        (this.privatePost = g(this.privatePost, this)),
                        (this.addNotification = g(this.addNotification, this)),
                        (this.goBack = g(this.goBack, this)),
                        (this.changeSection = g(this.changeSection, this)),
                        (this.checkIfEmpty = g(this.checkIfEmpty, this)),
                        s.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    b(s, n),
                    (s.prototype.initialize = function () {
                        var n,
                            s,
                            o,
                            u,
                            f,
                            l,
                            m,
                            g = this;
                        (this.backButton = this.$el.find(".back.button")),
                            this.backButton.on("click", this.goBack),
                            (o = new t({ el: $("#privatechat-notification"), model: this.model })),
                            o.$el.click(function () {
                                if (g.model.get("currentSection") === a.MESSAGES) return g.goBack();
                            }),
                            (s = new i({ el: $("#user-tab-karma"), model: this.model })),
                            (f = new p({ el: $("#user-tab-tokens"), model: this.model })),
                            (n = new e({ el: $("#user-tab-activity"), model: this.model })),
                            (u = new h({ el: $(".karma-threshold"), model: this.model })),
                            (this.chatWindows = new r({ el: this.$el.find(".privatechats"), model: this.model })),
                            (this.tabs = new c({ el: this.$el.find(".users .content"), model: this.model })),
                            (l = new d({ el: $("#user-tab-nav"), model: this.model })),
                            (m = new v({ el: this.$el.find(".log-container"), model: this.model })),
                            this.onLoad(),
                            this.checkIfEmpty(),
                            this.update(),
                            $("#publicChat").attr({ tabIndex: 1 }),
                            $("#privateChat").attr({ tabIndex: 2 });
                        if (!MakeChat.WEBKIT) return $("#privateChat").find(".nano").nanoScroller();
                    }),
                    (s.prototype.onLoad = function () {
                        var e, t, n;
                        return (
                            (e = this.model),
                            (n = e.privateChats),
                            (t = e.notifications),
                            n.on("add change:closed", this.update).on("change:active", this.selected).on("change:closed", this.checkIfEmpty).on("post", this.privatePost),
                            t.on("add", this.addNotification),
                            e.on("change:currentSection", this.changeSection),
                            this.chatWindows.on("escapeKey", this.goBack),
                            this.tabs.on("click", this.showMessageView)
                        );
                    }),
                    (s.prototype.checkIfEmpty = function () {
                        return this.model.privateChats.where({ closed: !0 }).length < this.model.privateChats.length
                            ? this.$el.find(".empty").remove()
                            : (this.$el.find(".users .content")[0].innerHTML += "<div class='empty'>You have no private chats.</div>");
                    }),
                    (s.prototype.changeSection = function (e) {
                        var t;
                        return this.goBack(), (t = e.get("currentSection")), (this.chatWindows.focused = t === a.MESSAGES);
                    }),
                    (s.prototype.goBack = function () {
                        var e;
                        (this.unread = 0), this.$el.removeClass("message_view"), (this.chatWindows.focused = !0), this.backButton.removeClass("unread").find(".unread").text("");
                        if (!(e = this.model.privateChats.active)) return;
                        return e.blur(), e.set({ active: !1 });
                    }),
                    (s.prototype.addNotification = function (e) {
                        var t;
                        if (e.get("section") !== a.MESSAGES) return;
                        return (t = this.unread) == null && (this.unread = 0), this.unread++, this.backButton.addClass("unread").find(".unread").text(this.unread);
                    }),
                    (s.prototype.privatePost = function (e) {
                        var t, n;
                        if ((t = this.model.privateChats.active)) {
                            if (t.get("name") === e.name) return;
                        } else if (this.model.get("currentSection") === a.MESSAGES) return;
                        if ((n = e.type)) if (n.indexOf("system") > -1 || n.indexOf("offline") > -1 || n.indexOf("online") > -1) return;
                        return this.model.notifications.add({ section: a.MESSAGES, name: e.name, message: e.post });
                    }),
                    (s.prototype.selected = function (e) {
                        if (!e.get("active")) return;
                        return this.model.openSection(a.MESSAGES), this.showMessageView();
                    }),
                    (s.prototype.showMessageView = function () {
                        return this.$el.addClass("message_view");
                    }),
                    (s.prototype.update = function () {
                        this.checkIfEmpty();
                        if (!MakeChat.WEBKIT) return this.$el.find(".users.nano").nanoScroller();
                    }),
                    s
                );
            })(Backbone.View)),
            (v = (function (e) {
                function t() {
                    return (this.changeSection = g(this.changeSection, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    b(t, e),
                    (t.prototype.initialize = function () {
                        return (
                            (this.sections = { messages: $("#user-tab-messages"), karma: $("#user-tab-karma"), tokens: $("#user-tab-tokens"), activity: $("#user-tab-activity") }),
                            this.model.on("change:currentSection", this.changeSection),
                            this.changeSection(this.model)
                        );
                    }),
                    (t.prototype.changeSection = function (e) {
                        var t, n;
                        (t = e.get("currentSection")), (n = this.sections[t]);
                        if (n) {
                            this.$el.find(".active").removeClass("active"), n.addClass("active");
                            if (!MakeChat.WEBKIT) return n.find(".nano").nanoScroller();
                        }
                    }),
                    t
                );
            })(Backbone.View)),
            (d = (function (e) {
                function t() {
                    return (
                        (this.show = g(this.show, this)),
                        (this.clearNotification = g(this.clearNotification, this)),
                        (this.changeSection = g(this.changeSection, this)),
                        (this.addNotification = g(this.addNotification, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    b(t, e),
                    (t.prototype.id = "user-tab-nav"),
                    (t.prototype.initialize = function () {
                        var e = this;
                        return (
                            (this.tabs = { messages: this.$el.find(".messages"), karma: this.$el.find(".karma"), tokens: this.$el.find(".tokens"), activity: this.$el.find(".activity") }),
                            this.tabs.messages.click(function () {
                                return e.show("messages");
                            }),
                            this.tabs.karma.click(function () {
                                return e.show("karma");
                            }),
                            this.tabs.tokens.click(function () {
                                return e.show("tokens");
                            }),
                            this.tabs.activity.click(function () {
                                return e.show("activity");
                            }),
                            this.model.on("change:currentSection", this.changeSection),
                            this.model.notifications.on("add", this.addNotification).on("clear", this.clearNotification),
                            this.changeSection(this.model)
                        );
                    }),
                    (t.prototype.addNotification = function (e) {
                        var t, n, r, i;
                        (n = e.get("section")), (r = this.tabs[n]), (t = this.$el.find(".active"));
                        if (t.is(r)) return;
                        return (i = r.data("unread")), isNaN(i) && (i = 0), i++, r.addClass("unread").find(".unread").text(i), r.data("unread", i);
                    }),
                    (t.prototype.changeSection = function (e) {
                        var t, n;
                        (t = e.get("currentSection")), (n = this.tabs[t]);
                        if (!n) return;
                        return this.$el.find(".active").removeClass("active"), n.removeClass("unread").addClass("active"), this.model.notifications.clear(t);
                    }),
                    (t.prototype.clearNotification = function (e) {
                        var t;
                        t = this.tabs[e];
                        if (!t) return;
                        return t.data("unread", 0), t.removeClass("unread").find(".unread").text("");
                    }),
                    (t.prototype.show = function (e) {
                        return this.model.openSection(e);
                    }),
                    t
                );
            })(Backbone.View)),
            (r = (function (e) {
                function t() {
                    return (this.render = g(this.render, this)), (this.keydown = g(this.keydown, this)), (this.checkRemoved = g(this.checkRemoved, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    b(t, e),
                    (t.prototype.initialize = function () {
                        return (
                            (this.tpl = _.template($("#tpl-private-chat").html())),
                            this.model.privateChats.on("add", this.render),
                            this.model.privateChats.on("change:closed", this.checkRemoved),
                            (this.parent = $("#privateChat")),
                            (this.tabs = this.parent.find(".users .content"))
                        );
                    }),
                    (t.prototype.checkRemoved = function (e) {
                        var t;
                        if (!e.get("closed")) return;
                        if (this.tabs.children().length > 1) return;
                        return (this.focused = !1), (t = MakeChat.callbacks), t.trigger("showPublicChat", MakeChat.system.currentRoomId);
                    }),
                    (t.prototype.keydown = function (e) {
                        var t, n, r, i, o, u;
                        if (MakeChat.focused !== "private" || this.model.get("currentSection") !== a.MESSAGES) return;
                        (i = e.keyCode), (n = e.ctrlKey);
                        if (i === s.OPEN_BRACKET || i === s.CLOSE_BRACKET) {
                            if (!this.parent.hasClass("message_view")) {
                                (r = i === s.CLOSE_BRACKET), (u = this.tabs.find(".highlighted")), (o = r ? u.next() : u.prev()), o.get(0) || (o = r ? this.tabs.children().first() : this.tabs.children().last());
                                if (o.hasClass("tip")) return;
                                u.removeClass("highlighted"), (u = o), u.addClass("highlighted"), u.focus();
                                return;
                            }
                            if (i === s.OPEN_BRACKET && n) {
                                this.model.privateChats.prev();
                                return;
                            }
                            if (i === s.CLOSE_BRACKET && n) {
                                this.model.privateChats.next();
                                return;
                            }
                        }
                        if (!this.parent.hasClass("message_view")) {
                            t = MakeChat.callbacks;
                            switch (i) {
                                case s.ENTER:
                                    return t.trigger("showPrivateChat", this.tabs.find(".highlighted").data("id")), e.preventDefault();
                                case s.ESC:
                                    return this.tabs.find(".highlighted").removeClass("highlighted"), e.preventDefault();
                                case s.BACKSPACE:
                                    return t.trigger("closePrivateChat", this.tabs.find(".highlighted").data("id")), e.preventDefault();
                                case s.TAB:
                                    return t.trigger("showPublicChat", MakeChat.system.currentRoomId), (this.focused = !1), e.preventDefault();
                            }
                        }
                    }),
                    (t.prototype.setHotKeys = function () {
                        return $(document).off("keydown", this.keydown).keydown(this.keydown);
                    }),
                    (t.prototype.render = function (e) {
                        var t,
                            r = this;
                        return (
                            this.setHotKeys(),
                            (t = new n({ el: $(this.tpl(e.toJSON())), model: e })),
                            e.on("change:closed", function () {
                                return e.get("closed") ? t.close() : (r.$el.append(t.el), t.delegateEvents(), t.onLoad(), r.assignViewEvents(t));
                            }),
                            this.assignViewEvents(t),
                            this.$el.append(t.el)
                        );
                    }),
                    (t.prototype.assignViewEvents = function (e) {
                        var t = this;
                        return (
                            e.on("focused", function () {
                                return (t.focused = !0);
                            }),
                            e.on("blurred", function () {
                                return (t.focused = !1);
                            }),
                            e.on("escapeKey", function () {
                                return t.trigger("escapeKey", e.model);
                            })
                        );
                    }),
                    t
                );
            })(Backbone.View)),
            (n = (function (e) {
                function t() {
                    return (
                        (this.typing = g(this.typing, this)),
                        (this.select = g(this.select, this)),
                        (this.update = g(this.update, this)),
                        (this.render = g(this.render, this)),
                        (this.requestInviteUser = g(this.requestInviteUser, this)),
                        (this.requestIgnoreUser = g(this.requestIgnoreUser, this)),
                        (this.focus = g(this.focus, this)),
                        (this.keydownListener = g(this.keydownListener, this)),
                        (this.changeTyping = g(this.changeTyping, this)),
                        (this.changeOnline = g(this.changeOnline, this)),
                        (this.changeIgnored = g(this.changeIgnored, this)),
                        (this.changeName = g(this.changeName, this)),
                        (this.changeKarma = g(this.changeKarma, this)),
                        (this.changeGender = g(this.changeGender, this)),
                        (this.changeAge = g(this.changeAge, this)),
                        (this.changeActive = g(this.changeActive, this)),
                        (this.blur = g(this.blur, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    b(t, e),
                    (t.prototype.events = {
                        "click .logs": "focus",
                        "keyup textarea": "typing",
                        "keydown textarea": "keydownListener",
                        "blur textarea": "blur",
                        "click li.ignore": "requestIgnoreUser",
                        "click li.invite": "requestInviteUser",
                    }),
                    (t.prototype.initialize = function () {
                        return (
                            (this.tpl = _.template($("#tpl-log").html())),
                            (this.nanoLogs = this.$el.find(".nano")),
                            (this.textInput = this.$el.find("textarea")),
                            (this.logs = this.$el.find(".content")),
                            this.$el.find(".invite").hide(),
                            this.onLoad()
                        );
                    }),
                    (t.prototype.onLoad = function () {
                        var e;
                        return (
                            (e = this.model),
                            e.on("post", this.render),
                            e.on("change:active", this.changeActive),
                            e.on("change:name", this.changeName),
                            e.on("change:age", this.changeAge),
                            e.on("change:gender", this.changeGender),
                            e.on("change:online", this.changeOnline),
                            e.on("change:typing", this.changeTyping),
                            e.on("change:karma", this.changeKarma),
                            e.on("change:ignored", this.changeIgnored),
                            e.on("select", this.select),
                            e.on("focus", this.focus),
                            MakeChat.WEBKIT || this.$el.find(".nano").nanoScroller(),
                            this.$el.find("textarea").autoexpand(),
                            this.changeActive(e),
                            this.changeName(e),
                            this.changeGender(e),
                            this.changeKarma(e),
                            this.changeIgnored(e)
                        );
                    }),
                    (t.prototype.onClose = function () {
                        var e;
                        return (
                            (e = this.model),
                            e.off("post", this.render),
                            e.off("change:active", this.changeActive),
                            e.off("change:name", this.changeName),
                            e.off("change:age", this.changeAge),
                            e.off("change:gender", this.changeGender),
                            e.off("change:online", this.changeOnline),
                            e.off("change:typing", this.changeTyping),
                            e.off("change:karma", this.changeKarma),
                            e.off("change:ignored", this.changeIgnored),
                            e.off("select", this.select),
                            e.off("focus", this.focus),
                            MakeChat.WEBKIT || this.$el.find(".nano").nanoScroller({ stop: !0 }),
                            this.$el.find("textarea").autoexpand({ stop: !0 })
                        );
                    }),
                    (t.prototype.blur = function () {
                        return this.trigger("blurred", this);
                    }),
                    (t.prototype.changeActive = function (e) {
                        var t = this;
                        prevent(this.debounceFocus);
                        if (!e.get("active")) return this.$el.addClass("hidden");
                        this.$el.removeClass("hidden");
                        if (!MakeChat.currentPrivateChatId)
                            return (
                                this.focus(),
                                MakeChat.WEBKIT
                                    ? MakeChat.utils.scrollBottom(this.logs.get(0))
                                    : after(400, function () {
                                          return t.$el.find(".nano").nanoScroller({ scroll: "bottom" });
                                      })
                            );
                    }),
                    (t.prototype.changeAge = function (e) {
                        return this.$el.find(".age").text(e.get("age"));
                    }),
                    (t.prototype.changeGender = function (e) {
                        return this.$el.find(".gender").text(e.get("gender"));
                    }),
                    (t.prototype.changeKarma = function (e) {
                        return this.$el.find(".karma").text(e.get("karma"));
                    }),
                    (t.prototype.changeName = function (e) {
                        if (e.get("name") === e.previous("name")) return;
                        return this.$el.find(".name").text(e.get("name")), e.post({ id: e.id, name: e.get("name"), post: "" + e.previous("name") + " is now " + e.get("name") + ".", time: new Date().getTime(), type: "system" });
                    }),
                    (t.prototype.changeIgnored = function (e) {
                        return e.get("ignored") ? (this.$el.addClass("ignored"), this.$el.find(".ignore .label").text("Un-Ignore")) : (this.$el.removeClass("ignored"), this.$el.find(".ignore .label").text("Ignore"));
                    }),
                    (t.prototype.changeOnline = function (e) {
                        return e.get("online")
                            ? e.post({ id: e.id, name: e.get("name"), post: "" + e.previous("name") + " is back.", time: new Date().getTime(), type: "online" })
                            : e.post({ id: e.id, name: e.get("name"), post: "" + e.get("name") + " has gone offline.", time: new Date().getTime(), type: "offline" });
                    }),
                    (t.prototype.changeTyping = function (e) {
                        var t;
                        this.$el.find(".is-typing").remove(), e.get("typing") && ((t = e.get("name")), this.render({ name: t, post: "" + t + " is typing", time: new Date().getTime(), type: "is-typing" }));
                    }),
                    (t.prototype.cropMessage = function () {
                        var e, t, n;
                        (t = f.backlogs), (e = this.$el.find(".content")), (n = []);
                        while (e.children().length > t) n.push(e.children().first().remove());
                        return n;
                    }),
                    (t.prototype.keydownListener = function (e) {
                        var t;
                        if (e.keyCode === s.TAB) return this.textInput.val().length === 0 && ((t = MakeChat.callbacks), t.trigger("showPublicChat", MakeChat.system.currentRoomId)), !1;
                        if (e.keyCode === s.ENTER && !e.shiftKey) return e.preventDefault(), this.submit();
                    }),
                    (t.prototype.focus = function () {
                        var e = this;
                        return (
                            prevent(this.debounceFocus),
                            (this.debounceFocus = after(400, function () {
                                return e.textInput.focus(), (MakeChat.focused = "private"), e.trigger("focused", e);
                            }))
                        );
                    }),
                    (t.prototype.requestIgnoreUser = function () {
                        var e;
                        return (e = MakeChat.callbacks), e.trigger("toggleIgnore", this.model.id);
                    }),
                    (t.prototype.requestInviteUser = function (e) {
                        var t;
                        return (t = MakeChat.callbacks), t.trigger("sendInvite", this.model.id);
                    }),
                    (t.prototype.render = function (e) {
                        var t, n;
                        return (
                            this.cropMessage(),
                            (t = $(this.tpl(e))),
                            t.mouseover(function () {
                                return t.find(".time").text(_.displayTime(e.time));
                            }),
                            e.type != null && t.addClass(e.type),
                            this.checkScroll(),
                            (n = this.logs.find(".is-typing")),
                            n.get(0) ? t.insertBefore(n) : this.logs.append(t),
                            this.update(),
                            t
                        );
                    }),
                    (t.prototype.checkScroll = function () {
                        var e;
                        return (e = this.logs.get(0)), (this.scrollBottom = e.scrollTop > e.scrollHeight - e.clientHeight), this;
                    }),
                    (t.prototype.update = function () {
                        var e = this;
                        return (
                            MakeChat.WEBKIT
                                ? MakeChat.utils.scrollBottom(this.logs.get(0))
                                : after(1, function () {
                                      return e.nanoLogs.nanoScroller({ scroll: "bottom" });
                                  }),
                            this
                        );
                    }),
                    (t.prototype.select = function () {
                        var e = this;
                        return after(400, function () {
                            return e.focus();
                        });
                    }),
                    (t.prototype.submit = function () {
                        var e, t, n, r;
                        (r = this.$el.find("textarea")), (t = r.val()), r.val(""), r.change();
                        if (t.length > 1) {
                            n = /^\/clear/;
                            if ((e = t.match(n))) {
                                this.$el.find(".content").empty(), this.checkScroll().update();
                                return;
                            }
                            return this.model.post({ name: this.model.get("name"), post: _.escape(t), time: new Date().getTime() / 1e3, type: "self" }), this.model.send({ id: this.model.id, post: t });
                        }
                        return;
                    }),
                    (t.prototype.typing = function (e) {
                        var t,
                            n,
                            r = this;
                        if (e.keyCode === s.ESC) return e.preventDefault(), this.trigger("escapeKey", this);
                        if (e.keyCode === s.ENTER && !e.shiftKey) {
                            e.preventDefault();
                            return;
                        }
                        if (this.debounce) return;
                        return (
                            (this.debounce = !0),
                            (n = this.textInput.val()),
                            (t = n.substr(n.length - 1, 1)),
                            this.model.typing(t),
                            after(500, function () {
                                return (r.debounce = !1);
                            })
                        );
                    }),
                    t
                );
            })(Backbone.View)),
            (c = (function (e) {
                function t() {
                    return (this.clickTab = g(this.clickTab, this)), (this.render = g(this.render, this)), (this.showMessage = g(this.showMessage, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    b(t, e),
                    (t.prototype.initialize = function () {
                        var e;
                        return (this.tpl = _.template($("#tpl-private-user").html())), (e = this.model.privateChats), e.on("add", this.render), e.on("add change:closed", this.showMessage);
                    }),
                    (t.prototype.showMessage = function (e) {
                        return this.el.scrollHeight > this.el.clientHeight ? this.$el.find("li.tip").hide() : this.$el.find("li.tip").show();
                    }),
                    (t.prototype.render = function (e) {
                        var t,
                            n = this;
                        return (
                            (t = new l({ el: $(this.tpl(e.toJSON())), model: e })),
                            t.on("click", this.clickTab),
                            (t.el.tabIndex = 0),
                            e.on("change:closed", function () {
                                return e.get("closed") ? (t.close(), t.off("click", n.clickTab)) : (n.$el.prepend(t.el), t.delegateEvents(), t.onLoad(), t.on("click", n.clickTab));
                            }),
                            this.$el.prepend(t.el)
                        );
                    }),
                    (t.prototype.clickTab = function () {
                        return this.trigger("click");
                    }),
                    t
                );
            })(Backbone.View)),
            (l = (function (e) {
                function t() {
                    return (
                        (this.select = g(this.select, this)),
                        (this.post = g(this.post, this)),
                        (this.leave = g(this.leave, this)),
                        (this.changeTyping = g(this.changeTyping, this)),
                        (this.changeOnline = g(this.changeOnline, this)),
                        (this.changeName = g(this.changeName, this)),
                        (this.changeKarma = g(this.changeKarma, this)),
                        (this.changeIgnored = g(this.changeIgnored, this)),
                        (this.changeGender = g(this.changeGender, this)),
                        (this.changeFocus = g(this.changeFocus, this)),
                        (this.changeAge = g(this.changeAge, this)),
                        (this.changeActive = g(this.changeActive, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    b(t, e),
                    (t.prototype.events = { click: "select", "mousedown .close": "leave" }),
                    (t.prototype.initialize = function () {
                        return (this.message = this.$el.find(".message")), this.onLoad();
                    }),
                    (t.prototype.onLoad = function () {
                        var e;
                        return (
                            (e = this.model),
                            e
                                .on("change:active", this.changeActive)
                                .on("change:focused", this.changeFocus)
                                .on("change:online", this.changeOnline)
                                .on("change:typing", this.changeTyping)
                                .on("change:name", this.changeName)
                                .on("change:age", this.changeAge)
                                .on("change:gender", this.changeGender)
                                .on("change:karma", this.changeKarma)
                                .on("change:ignored", this.changeIgnored)
                                .on("post", this.post),
                            this.$el.data("id", e.id)
                        );
                    }),
                    (t.prototype.onClose = function () {
                        var e;
                        return (
                            (e = this.model),
                            e
                                .off("change:active", this.changeActive)
                                .off("change:focused", this.changeFocus)
                                .off("change:online", this.changeOnline)
                                .off("change:typing", this.changeTyping)
                                .off("change:name", this.changeName)
                                .off("change:age", this.changeAge)
                                .off("change:gender", this.changeGender)
                                .off("change:karma", this.changeKarma)
                                .off("change:ignored", this.changeIgnored)
                                .off("post", this.post),
                            this.$el.data("id", e.id)
                        );
                    }),
                    (t.prototype.changeActive = function (e) {
                        return e.get("active")
                            ? (this.$el.parent().find(".highlighted").removeClass("highlighted"), this.$el.addClass("highlighted"), this.model.focus(), this.$el.addClass("selected"), this.$el.removeClass("unread"), e.clearUnread())
                            : this.$el.removeClass("selected");
                    }),
                    (t.prototype.changeAge = function (e) {
                        return this.$el.find(".age").text(e.get("age"));
                    }),
                    (t.prototype.changeFocus = function (e) {
                        if (!this.model.get("focused")) return;
                        return this.$el.addClass("selected"), this.$el.removeClass("unread"), e.clearUnread();
                    }),
                    (t.prototype.changeGender = function (e) {
                        return this.$el.find(".gender").text(e.get("gender"));
                    }),
                    (t.prototype.changeIgnored = function (e) {
                        return e.get("ignored") ? this.$el.addClass("ignored") : this.$el.removeClass("ignored");
                    }),
                    (t.prototype.changeKarma = function (e) {
                        return this.$el.find(".karma").text(e.get("karma"));
                    }),
                    (t.prototype.changeName = function (e) {
                        return this.$el.find(".name").text(e.get("name"));
                    }),
                    (t.prototype.changeOnline = function (e) {
                        return e.get("online") ? this.$el.removeClass("offline") : this.$el.addClass("offline");
                    }),
                    (t.prototype.changeTyping = function (e) {
                        return e.get("typing") ? (this.$el.addClass("typing"), this.$el.find(".notification").text("...")) : this.$el.removeClass("typing");
                    }),
                    (t.prototype.leave = function (e) {
                        return e.preventDefault(), this.model.leave();
                    }),
                    (t.prototype.post = function (e) {
                        var t, n;
                        (t = e.post.substr(0, 100)), (n = e.type), this.message.html(t);
                        if (n) if (n.indexOf("system") > -1 || n.indexOf("offline") > -1 || n.indexOf("online") > -1) return;
                        if (!this.model.get("active") || !this.model.get("focused")) this.$el.addClass("unread"), this.$el.find(".notification").text(this.model.get("unread"));
                        if (this.el.parentElement.firstChild === this.el) return;
                        return this.el.parentElement.insertBefore(this.el, this.el.parentElement.firstChild);
                    }),
                    (t.prototype.select = function () {
                        return this.model.select(), this.model.focus(), this.trigger("click");
                    }),
                    t
                );
            })(Backbone.View)),
            (t = (function (e) {
                function t() {
                    return (
                        (this.show = g(this.show, this)), (this.removeFirstElement = g(this.removeFirstElement, this)), (this.hide = g(this.hide, this)), (this.render = g(this.render, this)), t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    b(t, e),
                    (t.prototype.id = "privatechat-notification"),
                    (t.prototype.events = { "click .close": "hide" }),
                    (t.prototype.tpl = _.template("<li>\n  <span class='name'><%= name %></span>\n  <span class='message'><%= message %></span>\n</li>")),
                    (t.prototype.initialize = function () {
                        return (this.list = this.$el.find("ul")), this.model.notifications.on("add", this.render);
                    }),
                    (t.prototype.render = function (e) {
                        var t,
                            n,
                            r,
                            i = this;
                        return (
                            (t = e.toJSON()),
                            (t.message = t.message.substr(0, 100)),
                            (r = $(this.tpl(t))),
                            r.click(function () {
                                return i.hide(), i.model.openSection(e.get("section"));
                            }),
                            this.list.find(".leaving").remove(),
                            this.list.append(r),
                            (n = this.list.get(0)),
                            n.insertBefore(n.lastElementChild, n.firstElementChild.nextSibling),
                            n.children.length > 1 && (n.firstElementChild.className = "leaving"),
                            this.checkRemove(),
                            this.show()
                        );
                    }),
                    (t.prototype.checkRemove = function () {
                        return prevent(this.timeout), this.list.children().length ? (this.show(), (this.timeout = after(5e3, this.removeFirstElement))) : this.hide();
                    }),
                    (t.prototype.hide = function () {
                        var e = this;
                        return (
                            prevent(this.timeout),
                            (this.timeout = after(500, function () {
                                return e.list.html("");
                            })),
                            this.$el.addClass("hidden"),
                            this
                        );
                    }),
                    (t.prototype.removeFirstElement = function () {
                        var e,
                            t,
                            n = this;
                        return (
                            (t = this.list.get(0)),
                            (e = t.firstElementChild),
                            (e.className = "leaving"),
                            t.children.length || this.hide(),
                            (this.timeout = after(500, function () {
                                return t.removeChild(e), n.checkRemove();
                            }))
                        );
                    }),
                    (t.prototype.show = function () {
                        return this.$el.removeClass("hidden");
                    }),
                    t
                );
            })(Backbone.View)),
            (u = (function (e) {
                function t() {
                    return t.__super__.constructor.apply(this, arguments);
                }
                return (
                    b(t, e),
                    (t.prototype.render = function () {
                        if (!MakeChat.WEBKIT) return this.$el.find(".nano").nanoScroller();
                    }),
                    t
                );
            })(Backbone.View)),
            (i = (function (e) {
                function t() {
                    return (this.render = g(this.render, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    b(t, e),
                    (t.prototype.id = "user-tab-karma"),
                    (t.prototype.tpl = _.template('<li>\n  <span class="title"><%= title %></span>\n  <b class="points"><%= reward %></b>\n  <span class="message"><%= message %></span>\n</li>')),
                    (t.prototype.initialize = function () {
                        return (this.list = this.$el.find("ul")), (this.instructions = this.$el.find(".instructions")), this.model.karmaBoosts.on("add", this.render), this.checkEmpty();
                    }),
                    (t.prototype.render = function (e) {
                        var n,
                            r,
                            i = this;
                        return (
                            (n = e.toJSON()),
                            (r = $(this.tpl(n))),
                            this.list.append(r),
                            e.on("remove", function () {
                                return r.remove(), i.checkEmpty();
                            }),
                            r.click(function () {
                                return e.launch();
                            }),
                            this.checkEmpty(),
                            this.addNotification(e),
                            t.__super__.render.apply(this, arguments)
                        );
                    }),
                    (t.prototype.checkEmpty = function () {
                        return this.instructions.text(this.model.karmaBoosts.length ? "Complete the tasks below for instant karma boost." : "Check back next time for other offers or wait for notifications.");
                    }),
                    (t.prototype.addNotification = function (e) {
                        if (this.model.get("currentSection") === a.KARMA) return;
                        return this.model.notifications.add({ section: a.KARMA, name: "Karma Boost", message: e.get("message") });
                    }),
                    t
                );
            })(u)),
            (p = (function (e) {
                function t() {
                    return (this.render = g(this.render, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    b(t, e),
                    (t.prototype.id = "user-tab-tokens"),
                    (t.prototype.tpl = _.template('<li>\n  <span class="title"><%= title %></span>\n  <b class="points"><%= reward %></b>\n  <span class="message"><%= message %></span>\n</li>')),
                    (t.prototype.initialize = function () {
                        return (this.list = this.$el.find("ul.offers")), (this.instructions = this.$el.find(".instructions")), this.model.tokenGrabs.on("add", this.render), this.checkEmpty();
                    }),
                    (t.prototype.render = function (e) {
                        var n,
                            r,
                            i = this;
                        return (
                            (n = e.toJSON()),
                            (r = $(this.tpl(n))),
                            this.list.append(r),
                            e.on("remove", function () {
                                return r.remove(), i.checkEmpty();
                            }),
                            r.click(function () {
                                return e.launch();
                            }),
                            this.checkEmpty(),
                            this.addNotification(e),
                            t.__super__.render.apply(this, arguments)
                        );
                    }),
                    (t.prototype.checkEmpty = function () {
                        return this.instructions.text(this.model.karmaBoosts.length ? "Want instant tokens? Complete the tasks below!" : "Check back next time for other offers or wait for notifications.");
                    }),
                    (t.prototype.addNotification = function (e) {
                        if (this.model.get("currentSection") === a.TOKENS) return;
                        return this.model.notifications.add({ section: a.TOKENS, name: "Token Grab", message: e.get("message") });
                    }),
                    t
                );
            })(u)),
            (e = (function (e) {
                function t() {
                    return (this.render = g(this.render, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    b(t, e),
                    (t.prototype.tpl = _.template('<li>\n  <span class="description">\n  <%= message %>\n  <span class="date"><%= date %></span>\n  </span>\n  <span class="badge">\n    <i class="icon"></i>\n  </span>\n</li>')),
                    (t.prototype.types = { karma_gift: "gift", karma_increase: "karma", karma_expires: "expire", tokens: "token", idle_message: "message", raffle_win: "raffle" }),
                    (t.prototype.initialize = function () {
                        return this.model.on("activity", this.render), (this.logs = this.$el.find(".activity")), this.render({ message: "You logged in.", type: "tail", notify: !0 });
                    }),
                    (t.prototype.render = function (e) {
                        var n,
                            r,
                            i,
                            s,
                            u,
                            a,
                            f = this;
                        (r = e.message),
                            (a = e.type),
                            (s = e.time),
                            (i = e.notify),
                            (a = this.types[a] || a),
                            (r = MakeChat.convertPost(r)),
                            (r = r.replace(o.regexParseMention, function (e, t, n) {
                                return "<b class='username'>" + n + "</b>";
                            })),
                            (s = s != null ? new Date(s * 1e3) : new Date()),
                            (u = $(this.tpl({ message: r, date: _.printDate(s) }))),
                            u.addClass(a),
                            u.find(".icon").addClass(a),
                            (n = this.logs.children().first()),
                            n.hasClass(a) ? n.prepend(u.find(".description")) : this.logs.prepend(u),
                            t.__super__.render.apply(this, arguments);
                        if (i) return this.addNotification({ message: r, type: a });
                    }),
                    (t.prototype.addNotification = function (e) {
                        var t, n, r;
                        (t = e.message), (r = e.type), (n = "Activity");
                        if (this.model.get("currentSection") === a.ACTIVITY) return;
                        return this.model.notifications.add({ section: a.ACTIVITY, name: n, message: t });
                    }),
                    t
                );
            })(u)),
            (h = (function (e) {
                function t() {
                    return (this.updateThreshold = g(this.updateThreshold, this)), (this.update = g(this.update, this)), (this.render = g(this.render, this)), t.__super__.constructor.apply(this, arguments);
                }
                return (
                    b(t, e),
                    (t.prototype.events = { "change select": "update" }),
                    (t.prototype.tpl = _.template("<option><%= option %></option>")),
                    (t.prototype.initialize = function () {
                        return this.model.on("thresholdOption", this.render), this.model.user.on("change:pmThreshold", this.updateThreshold), (this.options = this.$el.find(".threshold-list")), this.updateThreshold(this.model.user), this;
                    }),
                    (t.prototype.render = function (e) {
                        var t, n;
                        return (n = e || "none"), (t = this.tpl({ option: n })), this.options.append(t);
                    }),
                    (t.prototype.update = function (e) {
                        var t;
                        return (t = this.options.val()), t === "none" && (t = 0), (t = parseInt(t)), this.model.setPrivateChatThreshold(t);
                    }),
                    (t.prototype.updateThreshold = function (e) {
                        var t, n, r, i, s, o;
                        (i = String(e.get("pmThreshold"))), i === "0" && (i = "none"), (r = this.options.find("option"));
                        for (t = s = 0, o = r.length; s < o; t = ++s) {
                            n = r[t];
                            if (String(n.value) === String(i)) {
                                this.options[0].selectedIndex = t;
                                break;
                            }
                        }
                        return this;
                    }),
                    t
                );
            })(Backbone.View));
    }.call(this),
    function () {}.call(this),
    function () {
        var e,
            t,
            n,
            r,
            i,
            s,
            o = function (e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            u = {}.hasOwnProperty,
            a = function (e, t) {
                function r() {
                    this.constructor = e;
                }
                for (var n in t) u.call(t, n) && (e[n] = t[n]);
                return (r.prototype = t.prototype), (e.prototype = new r()), (e.__super__ = t.prototype), e;
            },
            f = this;
        (s = this.MakeChat),
            (n = s.Models),
            (r = s.Views),
            (t = s.Collections),
            (e = (function (e) {
                function t() {
                    return (
                        (this.removeFooter = o(this.removeFooter, this)),
                        (this.requestDesktopNotification = o(this.requestDesktopNotification, this)),
                        (this.privateChatMessage = o(this.privateChatMessage, this)),
                        (this.nameMentioned = o(this.nameMentioned, this)),
                        (this.focus = o(this.focus, this)),
                        (this.changeUserID = o(this.changeUserID, this)),
                        (this.changeChatSize = o(this.changeChatSize, this)),
                        (this.changeTheme = o(this.changeTheme, this)),
                        (this.blur = o(this.blur, this)),
                        t.__super__.constructor.apply(this, arguments)
                    );
                }
                return (
                    a(t, e),
                    (t.prototype.initialize = function () {
                        var e, t, n, i, s, o, u, a;
                        document.querySelector("#login") != null && (this.login = new r.Login({ model: this.model })), (n = (a = window.opener) != null ? a.__$m() : void 0);
                        if (n != null || noLaunch)
                            return (
                                (u = new r.TimeoutWindow({ model: this.model })),
                                (e = new r.Header({ model: this.model, el: this.$el.find("#header") })),
                                (t = new r.Modals({ model: this.model, el: this.el })),
                                (o = new r.Rooms({ model: this.model })),
                                (i = new r.PingFrame({ model: this.model })),
                                (s = new r.PrivateChats({ model: this.model, el: this.$el.find("#privateChat") })),
                                this.onLoad()
                            );
                    }),
                    (t.prototype.onLoad = function () {
                        var e = this;
                        return (
                            $("#main-container").removeClass("hidden"),
                            $("#header").removeClass("hidden"),
                            after(100, function () {
                                var t;
                                return (t = e.login) != null ? t.focus() : void 0;
                            }),
                            this.model.on("change:theme", this.changeTheme),
                            this.model.on("setUserID", this.changeUserID),
                            this.model.rooms.on("mentioned", this.nameMentioned),
                            this.model.privateChats.on("post", this.privateChatMessage),
                            this.model.on("change:chat_size", this.changeChatSize),
                            window.addEventListener("focus", this.focus),
                            window.addEventListener("blur", this.blur),
                            (this.focused = !0)
                        );
                    }),
                    (t.prototype.blur = function () {
                        return (this.focused = !1);
                    }),
                    (t.prototype.changeTheme = function (e) {
                        var t;
                        return (t = e.get("theme")), t === "dark" ? $(document.body).addClass("cosmos") : $(document.body).removeClass("cosmos");
                    }),
                    (t.prototype.changeChatSize = function (e) {
                        e.get("chat_size") ? this.$el.addClass("compact") : this.$el.removeClass("compact");
                    }),
                    (t.prototype.changeUserID = function (e) {
                        return this.removeFooter(e), this.requestDesktopNotification(e);
                    }),
                    (t.prototype.desktopNotify = function (e, t, n) {
                        var r,
                            i,
                            s = this;
                        if (window.webkitNotifications == null) return;
                        if (window.webkitNotifications.checkPermission() !== 0) return;
                        if (this.focused) return;
                        if (this.debouncing) return;
                        return (
                            (this.debouncing = !0),
                            (r = MakeChat.Images.desktopNotification),
                            (i = window.webkitNotifications.createNotification(r, e, t)),
                            i.addEventListener("click", function (e) {
                                window.focus(), i.cancel();
                                if (n == null) return;
                                if (!n.roomId) return;
                                return s.selectRoom(n.roomId);
                            }),
                            i.show(),
                            after(1e3, function () {
                                return (s.debouncing = !1);
                            }),
                            after(1e4, function () {
                                return i.cancel();
                            })
                        );
                    }),
                    (t.prototype.focus = function () {
                        return (this.focused = !0);
                    }),
                    (t.prototype.nameMentioned = function (e) {
                        var t, n, r, i, s;
                        return (i = e.room), (n = e.name), (r = e.post), (s = "TeenChat - " + n + " (" + i.get("name") + ")"), (t = _.str.stripTags(r)), this.desktopNotify(s, t, { roomId: i.id });
                    }),
                    (t.prototype.privateChatMessage = function (e) {
                        var t, n, r, i;
                        return (n = e.name), (r = e.post), (i = "MakeChat - " + n + " (Private Message)"), (t = _.str.stripTags(r)), this.desktopNotify(i, t);
                    }),
                    (t.prototype.requestDesktopNotification = function () {
                        if (window.webkitNotifications == null) return;
                        if (window.webkitNotifications.checkPermission() === 0) return;
                        return window.webkitNotifications.requestPermission();
                    }),
                    (t.prototype.removeFooter = function () {
                        var e;
                        return (e = $("#footer")), e.addClass("hidden"), e.remove();
                    }),
                    (t.prototype.selectRoom = function (e) {
                        return this.model.rooms.select(this.model.rooms.get(e));
                    }),
                    t
                );
            })(Backbone.View)),
            (i = function () {
                var t, r, i, s, o, u, a, f, l, c, h, p, d;
                if (window.staticmode) return;
                (window.noLaunch = !0), (a = (h = window.opener) != null ? h.__$m() : void 0), (f = (p = window.opener) != null ? p.__$c() : void 0), noLaunch && ((a = new n.Core()), (f = MakeChat));
                if (window.location.pathname === "/chat/" && a === void 0) {
                    (l = window.location.hash.substr(1)), (window.location = l.length > 2 ? "/chat/" + l : "/");
                    return;
                }
                return (
                    (u = a || new n.Core()),
                    (t = new e({ el: $("#main"), model: u })),
                    (o = function () {
                        return (
                            $(document).off("scroll", o),
                            $("#testimonials .photo").each(function () {
                                var e;
                                return (e = this.getAttribute("data-src")), (this.innerHTML = "<img src='" + e + "' />");
                            })
                        );
                    }),
                    $(document).scroll(o),
                    (d = t.login) != null &&
                        d.on("submit", function () {
                            return t.login.off("submit"), $("#aux-content").remove();
                        }),
                    a == null
                        ? ((i = window.location.hash.substr(1)), (s = window.location.pathname.split("index.html").pop()), window.location.hostname === "localhost" && (s = "test"), u.set({ currentRoomUrl: s || i }))
                        : ((c = new Backbone.Router()),
                          window.location.hostname === "localhost" && u.set({ currentRoomUrl: "test" }),
                          window.history.pushState != null
                              ? (u.on("selectRoom", function (e) {
                                    return c.navigate("chat/" + e.get("url") + "/", { trigger: !0 });
                                }),
                                c.route("chat/_room_url/index.html", "roomUrl", function (e) {
                                    return u.set({ currentRoomUrl: e });
                                }),
                                Backbone.history.start({ pushState: !0 }))
                              : (u.on("selectRoom", function (e) {
                                    return c.navigate("" + e.get("url"), { trigger: !0 });
                                }),
                                c.route(":room_url", "roomUrl", function (e) {
                                    return u.set({ currentRoomUrl: e });
                                }),
                                Backbone.history.start()),
                          u.socket.releaseBufferedEvents(),
                          (window.MakeChat = f),
                          (r = { pm: "showPrivateChat" }),
                          (window._cb = function (e, t) {
                              return MakeChat.callbacks.trigger(r[e], t);
                          }),
                          (window._t = function (e, t) {
                              return (e.textContent = _.displayTime(t));
                          }),
                          $("#exit-url").remove())
                );
            }),
            $(i);
    }.call(this));
