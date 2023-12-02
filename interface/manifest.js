(()=>{
    "use strict";
    var e, t, r, a, n, o = {}, s = {};
    function c(e) {
        var t = s[e];
        if (void 0 !== t)
            return t.exports;
        var r = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return o[e].call(r.exports, r, r.exports, c),
        r.loaded = !0,
        r.exports
    }
    c.m = o,
    c.amdO = {},
    e = [],
    c.O = (t,r,a,n)=>{
        if (!r) {
            var o = 1 / 0;
            for (d = 0; d < e.length; d++) {
                for (var [r,a,n] = e[d], s = !0, l = 0; l < r.length; l++)
                    (!1 & n || o >= n) && Object.keys(c.O).every((e=>c.O[e](r[l]))) ? r.splice(l--, 1) : (s = !1,
                    n < o && (o = n));
                if (s) {
                    e.splice(d--, 1);
                    var i = a();
                    void 0 !== i && (t = i)
                }
            }
            return t
        }
        n = n || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > n; d--)
            e[d] = e[d - 1];
        e[d] = [r, a, n]
    }
    ,
    c.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return c.d(t, {
            a: t
        }),
        t
    }
    ,
    r = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
    c.t = function(e, a) {
        if (1 & a && (e = this(e)),
        8 & a)
            return e;
        if ("object" == typeof e && e) {
            if (4 & a && e.__esModule)
                return e;
            if (16 & a && "function" == typeof e.then)
                return e
        }
        var n = Object.create(null);
        c.r(n);
        var o = {};
        t = t || [null, r({}), r([]), r(r)];
        for (var s = 2 & a && e; "object" == typeof s && !~t.indexOf(s); s = r(s))
            Object.getOwnPropertyNames(s).forEach((t=>o[t] = ()=>e[t]));
        return o.default = ()=>e,
        c.d(n, o),
        n
    }
    ,
    c.d = (e,t)=>{
        for (var r in t)
            c.o(t, r) && !c.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    c.f = {},
    c.e = e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e, t),
    t)), [])),
    c.u = e=>9335 === e ? "js/_new/react.bundle.js" : "js/_new/chunks/" + {
        12: "user-statistics-view",
        1115: "languagetool-pt-br-external-react",
        1189: "editor",
        1362: "lottie-lib",
        1813: "languagetool-fr-external-react",
        1970: "shortcut_onboarding",
        2097: "languagetool-pl-external-react",
        2392: "languagetool-nl-external-react",
        2837: "languagetool-it-external-react",
        3253: "user-management-view",
        3554: "languagetool-de-external-react",
        3760: "character_error",
        3782: "languagetool-es-external-react",
        4324: "languagetool-ru-external-react",
        4496: "languagetool-pt-external-react",
        4646: "languagetool-en-external-react",
        6078: "character_idle",
        6306: "rephrasing_empty_state",
        6959: "standalone-styles",
        7819: "languagetool-ca-external-react",
        8045: "languagetool-uk-external-react",
        8201: "react-transition-group_CSSTransition",
        9450: "papaparse",
        9862: "character_reading"
    }[e] + ".js?id=" + {
        12: "f2d8345fda47e4a6",
        1115: "8e0f9e671ff6eaf9",
        1189: "00b183b8d72398c2",
        1362: "3526b1c0b628cc18",
        1813: "b1f7ab4e46da27d6",
        1970: "cd80dbece3605fe3",
        2097: "703c39b06aad1ed6",
        2392: "b6927169bc096699",
        2837: "a9eed6d60f9e10b4",
        3253: "8709b93c86103d9a",
        3554: "f3e25f5ecbd8fafe",
        3760: "c8e001504dfff174",
        3782: "a544017b7c61ae9d",
        4324: "fb16108847ac2c56",
        4496: "c9a1d3d644a81d96",
        4646: "9c9dc6fb1dd99181",
        6078: "672ad02f02f4a9f7",
        6306: "ae4e005e30f39106",
        6959: "2d3cad06521b2005",
        7819: "8310581f8af085be",
        8045: "40eceefdeb1bf0b3",
        8201: "3492b4c2aceb7ef4",
        9450: "03b3b743b9b833d7",
        9862: "7ba26d859c58b91e"
    }[e],
    c.miniCssF = e=>({
        924: "css/_new/client_login",
        1463: "css/_new/media_assets",
        2312: "css/_new/api",
        2413: "css/_new/cookie-banner",
        3043: "css/_new/print",
        3164: "css/_new/business",
        3365: "css/_new/desktop_app_download_success",
        3662: "css/_new/app",
        3816: "css/_new/premium_new",
        4304: "css/_new/onboarding",
        4648: "css/_new/errors",
        5949: "css/_new/webextension",
        6379: "css/_new/webextension/uninstall",
        6825: "css/_new/finish_installation",
        7388: "css/_new/about",
        8993: "css/_new/lp_desktop_app",
        9268: "css/_new/sponsoring",
        9293: "css/_new/nonprofit",
        9472: "css/_new/dev",
        9771: "css/_new/checkout",
        9829: "css/_new/premium",
        9830: "css/_new/offboarding"
    }[e] + ".css"),
    c.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    c.hmd = e=>((e = Object.create(e)).children || (e.children = []),
    Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: ()=>{
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }),
    e),
    c.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    a = {},
    n = "@languagetool-web/website:",
    c.l = (e,t,r,o)=>{
        if (a[e])
            a[e].push(t);
        else {
            var s, l;
            if (void 0 !== r)
                for (var i = document.getElementsByTagName("script"), d = 0; d < i.length; d++) {
                    var u = i[d];
                    if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == n + r) {
                        s = u;
                        break
                    }
                }
            s || (l = !0,
            (s = document.createElement("script")).charset = "utf-8",
            s.timeout = 120,
            c.nc && s.setAttribute("nonce", c.nc),
            s.setAttribute("data-webpack", n + r),
            s.src = e),
            a[e] = [t];
            var f = (t,r)=>{
                s.onerror = s.onload = null,
                clearTimeout(b);
                var n = a[e];
                if (delete a[e],
                s.parentNode && s.parentNode.removeChild(s),
                n && n.forEach((e=>e(r))),
                t)
                    return t(r)
            }
              , b = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: s
            }), 12e4);
            s.onerror = f.bind(null, s.onerror),
            s.onload = f.bind(null, s.onload),
            l && document.head.appendChild(s)
        }
    }
    ,
    c.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.nmd = e=>(e.paths = [],
    e.children || (e.children = []),
    e),
    c.p = "/",
    (()=>{
        var e = {
            2531: 0,
            4648: 0,
            5949: 0,
            3043: 0,
            3662: 0,
            3365: 0,
            2413: 0,
            6825: 0,
            8993: 0,
            9771: 0,
            1463: 0,
            7388: 0,
            9293: 0,
            9830: 0,
            4304: 0,
            9472: 0,
            2312: 0,
            924: 0,
            9268: 0,
            3164: 0,
            3816: 0,
            9829: 0,
            6379: 0
        };
        c.f.j = (t,r)=>{
            var a = c.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a)
                    r.push(a[2]);
                else if (/^(2(312|413|531)|3(043|164|365|662|816)|9(2(4|68|93)|472|771|829|830)|1463|4304|4648|5949|6379|6825|7388|8993)$/.test(t))
                    e[t] = 0;
                else {
                    var n = new Promise(((r,n)=>a = e[t] = [r, n]));
                    r.push(a[2] = n);
                    var o = c.p + c.u(t)
                      , s = new Error;
                    c.l(o, (r=>{
                        if (c.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0),
                        a)) {
                            var n = r && ("load" === r.type ? "missing" : r.type)
                              , o = r && r.target && r.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")",
                            s.name = "ChunkLoadError",
                            s.type = n,
                            s.request = o,
                            a[1](s)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        c.O.j = t=>0 === e[t];
        var t = (t,r)=>{
            var a, n, [o,s,l] = r, i = 0;
            if (o.some((t=>0 !== e[t]))) {
                for (a in s)
                    c.o(s, a) && (c.m[a] = s[a]);
                if (l)
                    var d = l(c)
            }
            for (t && t(r); i < o.length; i++)
                n = o[i],
                c.o(e, n) && e[n] && e[n][0](),
                e[n] = 0;
            return c.O(d)
        }
          , r = self.webpackChunk_languagetool_web_website = self.webpackChunk_languagetool_web_website || [];
        r.forEach(t.bind(null, 0)),
        r.push = t.bind(null, r.push.bind(r))
    }
    )(),
    c.nc = void 0
}
)();
