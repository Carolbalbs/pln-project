(self.webpackChunk_languagetool_web_website = self.webpackChunk_languagetool_web_website || []).push([[6497], {
    99330: (e,t,n)=>{
        "use strict";
        n.d(t, {
            J: ()=>r
        });
        const r = "production"
    }
    ,
    70133: (e,t,n)=>{
        "use strict";
        n.d(t, {
            RP: ()=>l,
            cc: ()=>c,
            fH: ()=>i
        });
        var r = n(74211)
          , o = n(48894)
          , s = n(86922)
          , a = n(66885);
        function i() {
            return (0,
            r.YO)("globalEventProcessors", (()=>[]))
        }
        function c(e) {
            i().push(e)
        }
        function l(e, t, n, r=0) {
            return new o.cW(((o,i)=>{
                const c = e[r];
                if (null === t || "function" != typeof c)
                    o(t);
                else {
                    const d = c({
                        ...t
                    }, n);
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.id && null === d && s.kg.log(`Event processor "${c.id}" dropped event`),
                    (0,
                    a.J8)(d) ? d.then((t=>l(e, t, n, r + 1).then(o))).then(null, i) : l(e, d, n, r + 1).then(o).then(null, i)
                }
            }
            ))
        }
    }
    ,
    60074: (e,t,n)=>{
        "use strict";
        n.d(t, {
            $e: ()=>i,
            Tb: ()=>o,
            YA: ()=>s,
            av: ()=>a
        });
        var r = n(6878);
        function o(e, t) {
            return (0,
            r.Gd)().captureException(e, {
                captureContext: t
            })
        }
        function s(e, t) {
            (0,
            r.Gd)().setTag(e, t)
        }
        function a(e) {
            (0,
            r.Gd)().setUser(e)
        }
        function i(e) {
            (0,
            r.Gd)().withScope(e)
        }
    }
    ,
    6878: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Gd: ()=>m,
            cu: ()=>h
        });
        var r = n(67451)
          , o = n(94180)
          , s = n(86922)
          , a = n(74211)
          , i = n(99330)
          , c = n(25516)
          , l = n(89015);
        const d = 4
          , u = 100;
        class p {
            constructor(e, t=new c.s, n=d) {
                this._version = n,
                this._stack = [{
                    scope: t
                }],
                e && this.bindClient(e)
            }
            isOlderThan(e) {
                return this._version < e
            }
            bindClient(e) {
                this.getStackTop().client = e,
                e && e.setupIntegrations && e.setupIntegrations()
            }
            pushScope() {
                const e = c.s.clone(this.getScope());
                return this.getStack().push({
                    client: this.getClient(),
                    scope: e
                }),
                e
            }
            popScope() {
                return !(this.getStack().length <= 1) && !!this.getStack().pop()
            }
            withScope(e) {
                const t = this.pushScope();
                try {
                    e(t)
                } finally {
                    this.popScope()
                }
            }
            getClient() {
                return this.getStackTop().client
            }
            getScope() {
                return this.getStackTop().scope
            }
            getStack() {
                return this._stack
            }
            getStackTop() {
                return this._stack[this._stack.length - 1]
            }
            captureException(e, t) {
                const n = this._lastEventId = t && t.event_id ? t.event_id : (0,
                r.DM)()
                  , o = new Error("Sentry syntheticException");
                return this._withClient(((r,s)=>{
                    r.captureException(e, {
                        originalException: e,
                        syntheticException: o,
                        ...t,
                        event_id: n
                    }, s)
                }
                )),
                n
            }
            captureMessage(e, t, n) {
                const o = this._lastEventId = n && n.event_id ? n.event_id : (0,
                r.DM)()
                  , s = new Error(e);
                return this._withClient(((r,a)=>{
                    r.captureMessage(e, t, {
                        originalException: e,
                        syntheticException: s,
                        ...n,
                        event_id: o
                    }, a)
                }
                )),
                o
            }
            captureEvent(e, t) {
                const n = t && t.event_id ? t.event_id : (0,
                r.DM)();
                return e.type || (this._lastEventId = n),
                this._withClient(((r,o)=>{
                    r.captureEvent(e, {
                        ...t,
                        event_id: n
                    }, o)
                }
                )),
                n
            }
            lastEventId() {
                return this._lastEventId
            }
            addBreadcrumb(e, t) {
                const {scope: n, client: r} = this.getStackTop();
                if (!r)
                    return;
                const {beforeBreadcrumb: a=null, maxBreadcrumbs: i=u} = r.getOptions && r.getOptions() || {};
                if (i <= 0)
                    return;
                const c = {
                    timestamp: (0,
                    o.yW)(),
                    ...e
                }
                  , l = a ? (0,
                s.Cf)((()=>a(c, t))) : c;
                null !== l && (r.emit && r.emit("beforeAddBreadcrumb", l, t),
                n.addBreadcrumb(l, i))
            }
            setUser(e) {
                this.getScope().setUser(e)
            }
            setTags(e) {
                this.getScope().setTags(e)
            }
            setExtras(e) {
                this.getScope().setExtras(e)
            }
            setTag(e, t) {
                this.getScope().setTag(e, t)
            }
            setExtra(e, t) {
                this.getScope().setExtra(e, t)
            }
            setContext(e, t) {
                this.getScope().setContext(e, t)
            }
            configureScope(e) {
                const {scope: t, client: n} = this.getStackTop();
                n && e(t)
            }
            run(e) {
                const t = _(this);
                try {
                    e(this)
                } finally {
                    _(t)
                }
            }
            getIntegration(e) {
                const t = this.getClient();
                if (!t)
                    return null;
                try {
                    return t.getIntegration(e)
                } catch (t) {
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn(`Cannot retrieve integration ${e.id} from the current Hub`),
                    null
                }
            }
            startTransaction(e, t) {
                const n = this._callExtensionMethod("startTransaction", e, t);
                if (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && !n) {
                    this.getClient() ? console.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n") : console.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")
                }
                return n
            }
            traceHeaders() {
                return this._callExtensionMethod("traceHeaders")
            }
            captureSession(e=!1) {
                if (e)
                    return this.endSession();
                this._sendSessionUpdate()
            }
            endSession() {
                const e = this.getStackTop().scope
                  , t = e.getSession();
                t && (0,
                l.RJ)(t),
                this._sendSessionUpdate(),
                e.setSession()
            }
            startSession(e) {
                const {scope: t, client: n} = this.getStackTop()
                  , {release: r, environment: o=i.J} = n && n.getOptions() || {}
                  , {userAgent: s} = a.n2.navigator || {}
                  , c = (0,
                l.Hv)({
                    release: r,
                    environment: o,
                    user: t.getUser(),
                    ...s && {
                        userAgent: s
                    },
                    ...e
                })
                  , d = t.getSession && t.getSession();
                return d && "ok" === d.status && (0,
                l.CT)(d, {
                    status: "exited"
                }),
                this.endSession(),
                t.setSession(c),
                c
            }
            shouldSendDefaultPii() {
                const e = this.getClient()
                  , t = e && e.getOptions();
                return Boolean(t && t.sendDefaultPii)
            }
            _sendSessionUpdate() {
                const {scope: e, client: t} = this.getStackTop()
                  , n = e.getSession();
                n && t && t.captureSession && t.captureSession(n)
            }
            _withClient(e) {
                const {scope: t, client: n} = this.getStackTop();
                n && e(n, t)
            }
            _callExtensionMethod(e, ...t) {
                const n = h().__SENTRY__;
                if (n && n.extensions && "function" == typeof n.extensions[e])
                    return n.extensions[e].apply(this, t);
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn(`Extension method ${e} couldn't be found, doing nothing.`)
            }
        }
        function h() {
            return a.n2.__SENTRY__ = a.n2.__SENTRY__ || {
                extensions: {},
                hub: void 0
            },
            a.n2
        }
        function _(e) {
            const t = h()
              , n = y(t);
            return v(t, e),
            n
        }
        function m() {
            const e = h();
            if (e.__SENTRY__ && e.__SENTRY__.acs) {
                const t = e.__SENTRY__.acs.getCurrentHub();
                if (t)
                    return t
            }
            return g(e)
        }
        function g(e=h()) {
            return f(e) && !y(e).isOlderThan(d) || v(e, new p),
            y(e)
        }
        function f(e) {
            return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
        }
        function y(e) {
            return (0,
            a.YO)("hub", (()=>new p), e)
        }
        function v(e, t) {
            if (!e)
                return !1;
            return (e.__SENTRY__ = e.__SENTRY__ || {}).hub = t,
            !0
        }
    }
    ,
    25516: (e,t,n)=>{
        "use strict";
        n.d(t, {
            s: ()=>c
        });
        var r = n(66885)
          , o = n(94180)
          , s = n(67451)
          , a = n(70133)
          , i = n(89015);
        class c {
            constructor() {
                this._notifyingListeners = !1,
                this._scopeListeners = [],
                this._eventProcessors = [],
                this._breadcrumbs = [],
                this._attachments = [],
                this._user = {},
                this._tags = {},
                this._extra = {},
                this._contexts = {},
                this._sdkProcessingMetadata = {},
                this._propagationContext = l()
            }
            static clone(e) {
                const t = new c;
                return e && (t._breadcrumbs = [...e._breadcrumbs],
                t._tags = {
                    ...e._tags
                },
                t._extra = {
                    ...e._extra
                },
                t._contexts = {
                    ...e._contexts
                },
                t._user = e._user,
                t._level = e._level,
                t._span = e._span,
                t._session = e._session,
                t._transactionName = e._transactionName,
                t._fingerprint = e._fingerprint,
                t._eventProcessors = [...e._eventProcessors],
                t._requestSession = e._requestSession,
                t._attachments = [...e._attachments],
                t._sdkProcessingMetadata = {
                    ...e._sdkProcessingMetadata
                },
                t._propagationContext = {
                    ...e._propagationContext
                }),
                t
            }
            addScopeListener(e) {
                this._scopeListeners.push(e)
            }
            addEventProcessor(e) {
                return this._eventProcessors.push(e),
                this
            }
            setUser(e) {
                return this._user = e || {},
                this._session && (0,
                i.CT)(this._session, {
                    user: e
                }),
                this._notifyScopeListeners(),
                this
            }
            getUser() {
                return this._user
            }
            getRequestSession() {
                return this._requestSession
            }
            setRequestSession(e) {
                return this._requestSession = e,
                this
            }
            setTags(e) {
                return this._tags = {
                    ...this._tags,
                    ...e
                },
                this._notifyScopeListeners(),
                this
            }
            setTag(e, t) {
                return this._tags = {
                    ...this._tags,
                    [e]: t
                },
                this._notifyScopeListeners(),
                this
            }
            setExtras(e) {
                return this._extra = {
                    ...this._extra,
                    ...e
                },
                this._notifyScopeListeners(),
                this
            }
            setExtra(e, t) {
                return this._extra = {
                    ...this._extra,
                    [e]: t
                },
                this._notifyScopeListeners(),
                this
            }
            setFingerprint(e) {
                return this._fingerprint = e,
                this._notifyScopeListeners(),
                this
            }
            setLevel(e) {
                return this._level = e,
                this._notifyScopeListeners(),
                this
            }
            setTransactionName(e) {
                return this._transactionName = e,
                this._notifyScopeListeners(),
                this
            }
            setContext(e, t) {
                return null === t ? delete this._contexts[e] : this._contexts[e] = t,
                this._notifyScopeListeners(),
                this
            }
            setSpan(e) {
                return this._span = e,
                this._notifyScopeListeners(),
                this
            }
            getSpan() {
                return this._span
            }
            getTransaction() {
                const e = this.getSpan();
                return e && e.transaction
            }
            setSession(e) {
                return e ? this._session = e : delete this._session,
                this._notifyScopeListeners(),
                this
            }
            getSession() {
                return this._session
            }
            update(e) {
                if (!e)
                    return this;
                if ("function" == typeof e) {
                    const t = e(this);
                    return t instanceof c ? t : this
                }
                return e instanceof c ? (this._tags = {
                    ...this._tags,
                    ...e._tags
                },
                this._extra = {
                    ...this._extra,
                    ...e._extra
                },
                this._contexts = {
                    ...this._contexts,
                    ...e._contexts
                },
                e._user && Object.keys(e._user).length && (this._user = e._user),
                e._level && (this._level = e._level),
                e._fingerprint && (this._fingerprint = e._fingerprint),
                e._requestSession && (this._requestSession = e._requestSession),
                e._propagationContext && (this._propagationContext = e._propagationContext)) : (0,
                r.PO)(e) && (this._tags = {
                    ...this._tags,
                    ...e.tags
                },
                this._extra = {
                    ...this._extra,
                    ...e.extra
                },
                this._contexts = {
                    ...this._contexts,
                    ...e.contexts
                },
                e.user && (this._user = e.user),
                e.level && (this._level = e.level),
                e.fingerprint && (this._fingerprint = e.fingerprint),
                e.requestSession && (this._requestSession = e.requestSession),
                e.propagationContext && (this._propagationContext = e.propagationContext)),
                this
            }
            clear() {
                return this._breadcrumbs = [],
                this._tags = {},
                this._extra = {},
                this._user = {},
                this._contexts = {},
                this._level = void 0,
                this._transactionName = void 0,
                this._fingerprint = void 0,
                this._requestSession = void 0,
                this._span = void 0,
                this._session = void 0,
                this._notifyScopeListeners(),
                this._attachments = [],
                this._propagationContext = l(),
                this
            }
            addBreadcrumb(e, t) {
                const n = "number" == typeof t ? t : 100;
                if (n <= 0)
                    return this;
                const r = {
                    timestamp: (0,
                    o.yW)(),
                    ...e
                }
                  , s = this._breadcrumbs;
                return s.push(r),
                this._breadcrumbs = s.length > n ? s.slice(-n) : s,
                this._notifyScopeListeners(),
                this
            }
            getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1]
            }
            clearBreadcrumbs() {
                return this._breadcrumbs = [],
                this._notifyScopeListeners(),
                this
            }
            addAttachment(e) {
                return this._attachments.push(e),
                this
            }
            getAttachments() {
                return this._attachments
            }
            clearAttachments() {
                return this._attachments = [],
                this
            }
            applyToEvent(e, t={}, n) {
                if (this._extra && Object.keys(this._extra).length && (e.extra = {
                    ...this._extra,
                    ...e.extra
                }),
                this._tags && Object.keys(this._tags).length && (e.tags = {
                    ...this._tags,
                    ...e.tags
                }),
                this._user && Object.keys(this._user).length && (e.user = {
                    ...this._user,
                    ...e.user
                }),
                this._contexts && Object.keys(this._contexts).length && (e.contexts = {
                    ...this._contexts,
                    ...e.contexts
                }),
                this._level && (e.level = this._level),
                this._transactionName && (e.transaction = this._transactionName),
                this._span) {
                    e.contexts = {
                        trace: this._span.getTraceContext(),
                        ...e.contexts
                    };
                    const t = this._span.transaction;
                    if (t) {
                        e.sdkProcessingMetadata = {
                            dynamicSamplingContext: t.getDynamicSamplingContext(),
                            ...e.sdkProcessingMetadata
                        };
                        const n = t.name;
                        n && (e.tags = {
                            transaction: n,
                            ...e.tags
                        })
                    }
                }
                this._applyFingerprint(e);
                const r = this._getBreadcrumbs()
                  , o = [...e.breadcrumbs || [], ...r];
                return e.breadcrumbs = o.length > 0 ? o : void 0,
                e.sdkProcessingMetadata = {
                    ...e.sdkProcessingMetadata,
                    ...this._sdkProcessingMetadata,
                    propagationContext: this._propagationContext
                },
                (0,
                a.RP)([...n || [], ...(0,
                a.fH)(), ...this._eventProcessors], e, t)
            }
            setSDKProcessingMetadata(e) {
                return this._sdkProcessingMetadata = {
                    ...this._sdkProcessingMetadata,
                    ...e
                },
                this
            }
            setPropagationContext(e) {
                return this._propagationContext = e,
                this
            }
            getPropagationContext() {
                return this._propagationContext
            }
            _getBreadcrumbs() {
                return this._breadcrumbs
            }
            _notifyScopeListeners() {
                this._notifyingListeners || (this._notifyingListeners = !0,
                this._scopeListeners.forEach((e=>{
                    e(this)
                }
                )),
                this._notifyingListeners = !1)
            }
            _applyFingerprint(e) {
                e.fingerprint = e.fingerprint ? (0,
                s.lE)(e.fingerprint) : [],
                this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
                e.fingerprint && !e.fingerprint.length && delete e.fingerprint
            }
        }
        function l() {
            return {
                traceId: (0,
                s.DM)(),
                spanId: (0,
                s.DM)().substring(16)
            }
        }
    }
    ,
    89015: (e,t,n)=>{
        "use strict";
        n.d(t, {
            CT: ()=>i,
            Hv: ()=>a,
            RJ: ()=>c
        });
        var r = n(94180)
          , o = n(67451)
          , s = n(39109);
        function a(e) {
            const t = (0,
            r.ph)()
              , n = {
                sid: (0,
                o.DM)(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: ()=>function(e) {
                    return (0,
                    s.Jr)({
                        sid: `${e.sid}`,
                        init: e.init,
                        started: new Date(1e3 * e.started).toISOString(),
                        timestamp: new Date(1e3 * e.timestamp).toISOString(),
                        status: e.status,
                        errors: e.errors,
                        did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                        duration: e.duration,
                        abnormal_mechanism: e.abnormal_mechanism,
                        attrs: {
                            release: e.release,
                            environment: e.environment,
                            ip_address: e.ipAddress,
                            user_agent: e.userAgent
                        }
                    })
                }(n)
            };
            return e && i(n, e),
            n
        }
        function i(e, t={}) {
            if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
            e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
            e.timestamp = t.timestamp || (0,
            r.ph)(),
            t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
            t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
            t.sid && (e.sid = 32 === t.sid.length ? t.sid : (0,
            o.DM)()),
            void 0 !== t.init && (e.init = t.init),
            !e.did && t.did && (e.did = `${t.did}`),
            "number" == typeof t.started && (e.started = t.started),
            e.ignoreDuration)
                e.duration = void 0;
            else if ("number" == typeof t.duration)
                e.duration = t.duration;
            else {
                const t = e.timestamp - e.started;
                e.duration = t >= 0 ? t : 0
            }
            t.release && (e.release = t.release),
            t.environment && (e.environment = t.environment),
            !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
            !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
            "number" == typeof t.errors && (e.errors = t.errors),
            t.status && (e.status = t.status)
        }
        function c(e, t) {
            let n = {};
            t ? n = {
                status: t
            } : "ok" === e.status && (n = {
                status: "exited"
            }),
            i(e, n)
        }
    }
    ,
    61495: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Rt: ()=>a,
            l4: ()=>c,
            qT: ()=>l
        });
        var r = n(66885);
        const o = (0,
        n(74211).Rf)()
          , s = 80;
        function a(e, t={}) {
            if (!e)
                return "<unknown>";
            try {
                let n = e;
                const r = 5
                  , o = [];
                let a = 0
                  , c = 0;
                const l = " > "
                  , d = l.length;
                let u;
                const p = Array.isArray(t) ? t : t.keyAttrs
                  , h = !Array.isArray(t) && t.maxStringLength || s;
                for (; n && a++ < r && (u = i(n, p),
                !("html" === u || a > 1 && c + o.length * d + u.length >= h)); )
                    o.push(u),
                    c += u.length,
                    n = n.parentNode;
                return o.reverse().join(l)
            } catch (e) {
                return "<unknown>"
            }
        }
        function i(e, t) {
            const n = e
              , o = [];
            let s, a, i, c, l;
            if (!n || !n.tagName)
                return "";
            o.push(n.tagName.toLowerCase());
            const d = t && t.length ? t.filter((e=>n.getAttribute(e))).map((e=>[e, n.getAttribute(e)])) : null;
            if (d && d.length)
                d.forEach((e=>{
                    o.push(`[${e[0]}="${e[1]}"]`)
                }
                ));
            else if (n.id && o.push(`#${n.id}`),
            s = n.className,
            s && (0,
            r.HD)(s))
                for (a = s.split(/\s+/),
                l = 0; l < a.length; l++)
                    o.push(`.${a[l]}`);
            const u = ["aria-label", "type", "name", "title", "alt"];
            for (l = 0; l < u.length; l++)
                i = u[l],
                c = n.getAttribute(i),
                c && o.push(`[${i}="${c}"]`);
            return o.join("")
        }
        function c() {
            try {
                return o.document.location.href
            } catch (e) {
                return ""
            }
        }
        function l(e) {
            return o.document && o.document.querySelector ? o.document.querySelector(e) : null
        }
    }
    ,
    6905: (e,t,n)=>{
        "use strict";
        function r() {
            return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
        }
        function o() {
            return "npm"
        }
        n.d(t, {
            S: ()=>o,
            n: ()=>r
        })
    }
    ,
    66885: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Cy: ()=>g,
            HD: ()=>l,
            J8: ()=>m,
            Kj: ()=>_,
            PO: ()=>u,
            TX: ()=>i,
            V9: ()=>y,
            VW: ()=>a,
            VZ: ()=>o,
            cO: ()=>p,
            fm: ()=>c,
            i2: ()=>f,
            kK: ()=>h,
            pt: ()=>d,
            y1: ()=>v
        });
        const r = Object.prototype.toString;
        function o(e) {
            switch (r.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return y(e, Error)
            }
        }
        function s(e, t) {
            return r.call(e) === `[object ${t}]`
        }
        function a(e) {
            return s(e, "ErrorEvent")
        }
        function i(e) {
            return s(e, "DOMError")
        }
        function c(e) {
            return s(e, "DOMException")
        }
        function l(e) {
            return s(e, "String")
        }
        function d(e) {
            return null === e || "object" != typeof e && "function" != typeof e
        }
        function u(e) {
            return s(e, "Object")
        }
        function p(e) {
            return "undefined" != typeof Event && y(e, Event)
        }
        function h(e) {
            return "undefined" != typeof Element && y(e, Element)
        }
        function _(e) {
            return s(e, "RegExp")
        }
        function m(e) {
            return Boolean(e && e.then && "function" == typeof e.then)
        }
        function g(e) {
            return u(e) && "nativeEvent"in e && "preventDefault"in e && "stopPropagation"in e
        }
        function f(e) {
            return "number" == typeof e && e != e
        }
        function y(e, t) {
            try {
                return e instanceof t
            } catch (e) {
                return !1
            }
        }
        function v(e) {
            return !("object" != typeof e || null === e || !e.__isVue && !e._isVue)
        }
    }
    ,
    86922: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Cf: ()=>a,
            LD: ()=>s,
            RU: ()=>o,
            kg: ()=>i
        });
        var r = n(74211);
        const o = ["debug", "info", "warn", "error", "log", "assert", "trace"]
          , s = {};
        function a(e) {
            if (!("console"in r.n2))
                return e();
            const t = r.n2.console
              , n = {}
              , o = Object.keys(s);
            o.forEach((e=>{
                const r = s[e];
                n[e] = t[e],
                t[e] = r
            }
            ));
            try {
                return e()
            } finally {
                o.forEach((e=>{
                    t[e] = n[e]
                }
                ))
            }
        }
        const i = function() {
            let e = !1;
            const t = {
                enable: ()=>{
                    e = !0
                }
                ,
                disable: ()=>{
                    e = !1
                }
                ,
                isEnabled: ()=>e
            };
            return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? o.forEach((n=>{
                t[n] = (...t)=>{
                    e && a((()=>{
                        r.n2.console[n](`Sentry Logger [${n}]:`, ...t)
                    }
                    ))
                }
            }
            )) : o.forEach((e=>{
                t[e] = ()=>{}
            }
            )),
            t
        }()
    }
    ,
    67451: (e,t,n)=>{
        "use strict";
        n.d(t, {
            DM: ()=>s,
            Db: ()=>c,
            EG: ()=>l,
            YO: ()=>d,
            jH: ()=>i,
            lE: ()=>u
        });
        var r = n(39109)
          , o = n(74211);
        function s() {
            const e = o.n2
              , t = e.crypto || e.msCrypto;
            let n = ()=>16 * Math.random();
            try {
                if (t && t.randomUUID)
                    return t.randomUUID().replace(/-/g, "");
                t && t.getRandomValues && (n = ()=>t.getRandomValues(new Uint8Array(1))[0])
            } catch (e) {}
            return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e=>(e ^ (15 & n()) >> e / 4).toString(16)))
        }
        function a(e) {
            return e.exception && e.exception.values ? e.exception.values[0] : void 0
        }
        function i(e) {
            const {message: t, event_id: n} = e;
            if (t)
                return t;
            const r = a(e);
            return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
        }
        function c(e, t, n) {
            const r = e.exception = e.exception || {}
              , o = r.values = r.values || []
              , s = o[0] = o[0] || {};
            s.value || (s.value = t || ""),
            s.type || (s.type = n || "Error")
        }
        function l(e, t) {
            const n = a(e);
            if (!n)
                return;
            const r = n.mechanism;
            if (n.mechanism = {
                type: "generic",
                handled: !0,
                ...r,
                ...t
            },
            t && "data"in t) {
                const e = {
                    ...r && r.data,
                    ...t.data
                };
                n.mechanism.data = e
            }
        }
        function d(e) {
            if (e && e.__sentry_captured__)
                return !0;
            try {
                (0,
                r.xp)(e, "__sentry_captured__", !0)
            } catch (e) {}
            return !1
        }
        function u(e) {
            return Array.isArray(e) ? e : [e]
        }
    }
    ,
    5728: (e,t,n)=>{
        "use strict";
        n.d(t, {
            KV: ()=>s,
            l$: ()=>a
        });
        var r = n(6905);
        e = n.hmd(e);
        var o = n(27061);
        function s() {
            return !(0,
            r.n)() && "[object process]" === Object.prototype.toString.call(void 0 !== o ? o : 0)
        }
        function a(e, t) {
            return e.require(t)
        }
    }
    ,
    39109: (e,t,n)=>{
        "use strict";
        n.d(t, {
            $Q: ()=>l,
            HK: ()=>d,
            Jr: ()=>g,
            Sh: ()=>p,
            _j: ()=>u,
            hl: ()=>i,
            xp: ()=>c,
            zf: ()=>m
        });
        var r = n(61495)
          , o = n(66885)
          , s = n(86922)
          , a = n(65268);
        function i(e, t, n) {
            if (!(t in e))
                return;
            const r = e[t]
              , o = n(r);
            "function" == typeof o && l(o, r),
            e[t] = o
        }
        function c(e, t, n) {
            try {
                Object.defineProperty(e, t, {
                    value: n,
                    writable: !0,
                    configurable: !0
                })
            } catch (n) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.log(`Failed to add non-enumerable property "${t}" to object`, e)
            }
        }
        function l(e, t) {
            try {
                const n = t.prototype || {};
                e.prototype = t.prototype = n,
                c(e, "__sentry_original__", t)
            } catch (e) {}
        }
        function d(e) {
            return e.__sentry_original__
        }
        function u(e) {
            return Object.keys(e).map((t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)).join("&")
        }
        function p(e) {
            if ((0,
            o.VZ)(e))
                return {
                    message: e.message,
                    name: e.name,
                    stack: e.stack,
                    ..._(e)
                };
            if ((0,
            o.cO)(e)) {
                const t = {
                    type: e.type,
                    target: h(e.target),
                    currentTarget: h(e.currentTarget),
                    ..._(e)
                };
                return "undefined" != typeof CustomEvent && (0,
                o.V9)(e, CustomEvent) && (t.detail = e.detail),
                t
            }
            return e
        }
        function h(e) {
            try {
                return (0,
                o.kK)(e) ? (0,
                r.Rt)(e) : Object.prototype.toString.call(e)
            } catch (e) {
                return "<unknown>"
            }
        }
        function _(e) {
            if ("object" == typeof e && null !== e) {
                const t = {};
                for (const n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            }
            return {}
        }
        function m(e, t=40) {
            const n = Object.keys(p(e));
            if (n.sort(),
            !n.length)
                return "[object has no keys]";
            if (n[0].length >= t)
                return (0,
                a.$G)(n[0], t);
            for (let e = n.length; e > 0; e--) {
                const r = n.slice(0, e).join(", ");
                if (!(r.length > t))
                    return e === n.length ? r : (0,
                    a.$G)(r, t)
            }
            return ""
        }
        function g(e) {
            return f(e, new Map)
        }
        function f(e, t) {
            if ((0,
            o.PO)(e)) {
                const n = t.get(e);
                if (void 0 !== n)
                    return n;
                const r = {};
                t.set(e, r);
                for (const n of Object.keys(e))
                    void 0 !== e[n] && (r[n] = f(e[n], t));
                return r
            }
            if (Array.isArray(e)) {
                const n = t.get(e);
                if (void 0 !== n)
                    return n;
                const r = [];
                return t.set(e, r),
                e.forEach((e=>{
                    r.push(f(e, t))
                }
                )),
                r
            }
            return e
        }
    }
    ,
    65268: (e,t,n)=>{
        "use strict";
        n.d(t, {
            $G: ()=>o,
            U0: ()=>a,
            nK: ()=>s
        });
        var r = n(66885);
        function o(e, t=0) {
            return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0, t)}...`
        }
        function s(e, t) {
            if (!Array.isArray(e))
                return "";
            const n = [];
            for (let t = 0; t < e.length; t++) {
                const o = e[t];
                try {
                    (0,
                    r.y1)(o) ? n.push("[VueViewModel]") : n.push(String(o))
                } catch (e) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(t)
        }
        function a(e, t=[], n=!1) {
            return t.some((t=>function(e, t, n=!1) {
                return !!(0,
                r.HD)(e) && ((0,
                r.Kj)(t) ? t.test(e) : !!(0,
                r.HD)(t) && (n ? e === t : e.includes(t)))
            }(e, t, n)))
        }
    }
    ,
    48894: (e,t,n)=>{
        "use strict";
        n.d(t, {
            $2: ()=>a,
            WD: ()=>s,
            cW: ()=>i
        });
        var r, o = n(66885);
        function s(e) {
            return new i((t=>{
                t(e)
            }
            ))
        }
        function a(e) {
            return new i(((t,n)=>{
                n(e)
            }
            ))
        }
        !function(e) {
            e[e.PENDING = 0] = "PENDING";
            e[e.RESOLVED = 1] = "RESOLVED";
            e[e.REJECTED = 2] = "REJECTED"
        }(r || (r = {}));
        class i {
            constructor(e) {
                i.prototype.__init.call(this),
                i.prototype.__init2.call(this),
                i.prototype.__init3.call(this),
                i.prototype.__init4.call(this),
                this._state = r.PENDING,
                this._handlers = [];
                try {
                    e(this._resolve, this._reject)
                } catch (e) {
                    this._reject(e)
                }
            }
            then(e, t) {
                return new i(((n,r)=>{
                    this._handlers.push([!1, t=>{
                        if (e)
                            try {
                                n(e(t))
                            } catch (e) {
                                r(e)
                            }
                        else
                            n(t)
                    }
                    , e=>{
                        if (t)
                            try {
                                n(t(e))
                            } catch (e) {
                                r(e)
                            }
                        else
                            r(e)
                    }
                    ]),
                    this._executeHandlers()
                }
                ))
            }
            catch(e) {
                return this.then((e=>e), e)
            }
            finally(e) {
                return new i(((t,n)=>{
                    let r, o;
                    return this.then((t=>{
                        o = !1,
                        r = t,
                        e && e()
                    }
                    ), (t=>{
                        o = !0,
                        r = t,
                        e && e()
                    }
                    )).then((()=>{
                        o ? n(r) : t(r)
                    }
                    ))
                }
                ))
            }
            __init() {
                this._resolve = e=>{
                    this._setResult(r.RESOLVED, e)
                }
            }
            __init2() {
                this._reject = e=>{
                    this._setResult(r.REJECTED, e)
                }
            }
            __init3() {
                this._setResult = (e,t)=>{
                    this._state === r.PENDING && ((0,
                    o.J8)(t) ? t.then(this._resolve, this._reject) : (this._state = e,
                    this._value = t,
                    this._executeHandlers()))
                }
            }
            __init4() {
                this._executeHandlers = ()=>{
                    if (this._state === r.PENDING)
                        return;
                    const e = this._handlers.slice();
                    this._handlers = [],
                    e.forEach((e=>{
                        e[0] || (this._state === r.RESOLVED && e[1](this._value),
                        this._state === r.REJECTED && e[2](this._value),
                        e[0] = !0)
                    }
                    ))
                }
            }
        }
    }
    ,
    94180: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z1: ()=>p,
            ph: ()=>d,
            yW: ()=>l
        });
        var r = n(5728)
          , o = n(74211);
        e = n.hmd(e);
        const s = (0,
        o.Rf)()
          , a = {
            nowSeconds: ()=>Date.now() / 1e3
        };
        const i = (0,
        r.KV)() ? function() {
            try {
                return (0,
                r.l$)(e, "perf_hooks").performance
            } catch (e) {
                return
            }
        }() : function() {
            const {performance: e} = s;
            if (!e || !e.now)
                return;
            return {
                now: ()=>e.now(),
                timeOrigin: Date.now() - e.now()
            }
        }()
          , c = void 0 === i ? a : {
            nowSeconds: ()=>(i.timeOrigin + i.now()) / 1e3
        }
          , l = a.nowSeconds.bind(a)
          , d = c.nowSeconds.bind(c);
        let u;
        const p = (()=>{
            const {performance: e} = s;
            if (!e || !e.now)
                return void (u = "none");
            const t = 36e5
              , n = e.now()
              , r = Date.now()
              , o = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t
              , a = o < t
              , i = e.timing && e.timing.navigationStart
              , c = "number" == typeof i ? Math.abs(i + n - r) : t;
            return a || c < t ? o <= c ? (u = "timeOrigin",
            e.timeOrigin) : (u = "navigationStart",
            i) : (u = "dateNow",
            r)
        }
        )()
    }
    ,
    74211: (e,t,n)=>{
        "use strict";
        function r(e) {
            return e && e.Math == Math ? e : void 0
        }
        n.d(t, {
            Rf: ()=>s,
            YO: ()=>a,
            n2: ()=>o
        });
        const o = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
            return this
        }() || {};
        function s() {
            return o
        }
        function a(e, t, n) {
            const r = n || o
              , s = r.__SENTRY__ = r.__SENTRY__ || {};
            return s[e] || (s[e] = t())
        }
    }
    ,
    93653: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>c
        });
        var r = n(24246)
          , o = n(60042)
          , s = n.n(o)
          , a = n(27378);
        const i = e=>`0 ${e}`.substr(-2)
          , c = ({expirationDate: e, theme: t, onFinish: n})=>{
            const [o,c] = (0,
            a.useState)([])
              , [l,d] = (0,
            a.useState)(!1)
              , u = (0,
            a.useRef)()
              , p = (0,
            a.useCallback)((()=>{
                const [t,r] = (e=>{
                    const t = Date.now()
                      , n = Math.max(0, e.getTime() - t)
                      , r = Math.floor(n / 1e3 % 60)
                      , o = Math.floor(n / 1e3 / 60 % 60)
                      , s = Math.floor(n / 1e3 / 60 / 60);
                    return [`${i(s)}:${i(o)}:${i(r)}`, 0 === n]
                }
                )(e);
                return c(t.split("")),
                r && (d(!0),
                n?.()),
                r
            }
            ), [e, n]);
            return (0,
            a.useEffect)((()=>(l ? "number" == typeof u.current && (clearInterval(u.current),
            u.current = void 0) : void 0 === u.current && (p(),
            u.current = window.setInterval(p, 1e3)),
            ()=>{
                "number" == typeof u.current && (clearInterval(u.current),
                u.current = void 0)
            }
            )), [p, l]),
            (0,
            r.jsx)("div", {
                className: s()("coupon-timer", {
                    "coupon-timer--default": void 0 === t || "default" === t,
                    "coupon-timer--premium": "premium" === t
                }),
                children: o.map(((e,t)=>(0,
                r.jsx)("span", {
                    className: ":" === e ? "coupon-timer__divider" : "coupon-timer__digit",
                    children: e
                }, t)))
            })
        }
    }
    ,
    65551: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            default: ()=>Ie
        });
        var r = n(24246)
          , o = n(27378)
          , s = n(31683)
          , a = n(60042)
          , i = n.n(a)
          , c = n(43431)
          , l = n(64528)
          , d = n(55583)
          , u = n(44444);
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(n), !0).forEach((function(t) {
                    _(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function _(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r)
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        const m = (0,
        u.Z)()
          , g = e=>"upload" !== e.activeSource ? null : "result" === e.docxState ? (0,
        r.jsx)("button", {
            className: "welcome-editor__header__back welcome-editor__header__back--button",
            onClick: ()=>e.resetDocxUpload(!0),
            children: m.get("js.welcome_editor.back_link")
        }, "back-to-upload") : null
          , f = e=>{
            return !1 == (t = e.activeSource,
            n = e.docxState,
            "input" === t || "result" === n) ? null : (0,
            r.jsxs)("div", {
                className: "welcome-editor__header",
                children: ["input" === e.activeSource && (0,
                r.jsxs)("div", {
                    className: "welcome-editor__controls",
                    children: [(0,
                    r.jsx)(d.Z, {
                        accented: !0,
                        onChange: e.onLanguageChange,
                        value: e.selectedLanguage,
                        preferredLanguagesConfig: e.preferredLanguagesConfig
                    }), (0,
                    r.jsx)("div", {
                        children: e.documentActions
                    })]
                }), (0,
                r.jsx)(g, h({}, e))]
            });
            var t, n
        }
        ;
        var y = n(97018)
          , v = n(7727)
          , b = n(64554)
          , x = n(32835);
        const w = (0,
        u.Z)()
          , E = e=>{
            const t = b.Do - e.remainingRephrasings;
            return (0,
            r.jsxs)("div", {
                className: i()("welcome-text-statistics", e.className),
                children: [(0,
                r.jsxs)("span", {
                    className: "welcome-text-statistics__item",
                    "data-testid": "statistics-characters",
                    children: [w.choice("js.text_statistics.characters", e.statistics.characters), " ", (0,
                    r.jsx)("i", {
                        className: "welcome-text-statistics__item__value",
                        children: (0,
                        v.Z)(e.statistics.characters, w.getLocale())
                    })]
                }), (0,
                r.jsxs)("span", {
                    className: "welcome-text-statistics__item",
                    "data-testid": "statistics-words",
                    children: [w.choice("js.text_statistics.words", e.statistics.words), " ", (0,
                    r.jsx)("i", {
                        className: "welcome-text-statistics__item__value",
                        children: (0,
                        v.Z)(e.statistics.words, w.getLocale())
                    })]
                }), e.remainingRephrasings > -1 && (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsxs)("span", {
                        className: "welcome-text-statistics__item welcome-text-statistics__item--separated",
                        children: [w.get("js.welcome_editor.paraphrasings"), " ", (0,
                        r.jsxs)("i", {
                            className: "welcome-text-statistics__item__value",
                            children: [t, "/", b.Do]
                        })]
                    }), (0,
                    r.jsx)("span", {
                        className: "icon icon--info icon--has-tooltip welcome-text-statistics__info",
                        children: (0,
                        r.jsxs)(y.Z, {
                            className: "welcome-text-statistics__tooltip",
                            position: "top-right",
                            forcePosition: !0,
                            hoverOnly: !0,
                            children: [(0,
                            r.jsx)("h5", {
                                className: "headline headline--5",
                                children: w.get("js.welcome_editor.unlimited_paraphrasings_headline")
                            }), (0,
                            r.jsx)("p", {
                                className: "paragraph paragraph--6 welcome-text-statistics__tooltip__text",
                                dangerouslySetInnerHTML: {
                                    __html: w.get("js.welcome_editor.unlimited_paraphrasings_text")
                                }
                            }), (0,
                            r.jsx)("a", {
                                className: "btn btn--upgrade no-gutter",
                                href: (0,
                                x.Z)("welcome-editor-footer-tooltip"),
                                children: w.get("js.upgrade_to_premium")
                            })]
                        })
                    })]
                })]
            })
        }
          , S = (0,
        u.Z)().get("js.welcome_editor.checking_text")
          , T = e=>{
            const t = "IN_PROGRESS" === e.ltAssistantState?.checkStatus
              , n = e.ltAssistantState?.displayedErrors.length ?? 0
              , o = (0,
            x.Z)("welcome-editor-premium-matches", e.premiumErrors)
              , {length: s} = e.premiumErrors
              , a = 0 === n && 0 === s;
            return e.showDocxUpload && "upload" === e.activeSource ? null : (0,
            r.jsxs)("div", {
                className: "welcome-editor__footer",
                children: [(0,
                r.jsx)(E, {
                    statistics: e.textStatistics,
                    isLoggedIn: e.isLoggedIn,
                    remainingRephrasings: e.remainingRephrasings
                }), (0,
                r.jsxs)("div", {
                    className: "welcome-errors",
                    children: [t && (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)("span", {
                            className: "welcome-errors__caption",
                            children: S
                        }), (0,
                        r.jsx)("i", {
                            className: "icon icon--checking"
                        })]
                    }), n > 0 && (0,
                    r.jsx)(r.Fragment, {
                        children: (0,
                        r.jsx)("span", {
                            className: "welcome-errors__status welcome-errors__status--common",
                            children: n
                        })
                    }), s > 0 && (0,
                    r.jsx)("a", {
                        className: "welcome-errors__status welcome-errors__status--premium",
                        href: o,
                        target: "_blank",
                        children: s
                    }), a && (0,
                    r.jsx)("span", {
                        className: "welcome-errors__status welcome-errors__status--no-errors",
                        children: " "
                    })]
                })]
            })
        }
        ;
        var k = n(20941)
          , j = n(19925)
          , N = n(117)
          , C = n(85725)
          , P = n(41096)
          , A = n(39558)
          , L = n(40926)
          , R = n(9685);
        function O(e) {
            const t = (0,
            R.Z)(e);
            return b.b[t] || ""
        }
        const D = /\s+/g;
        var I = n(90254)
          , M = n(8686);
        function U(e, t) {
            return "en" === t ? "GB" === e || "IE" === e ? "en-GB" : "CA" === e ? "en-CA" : "NZ" === e ? "en-NZ" : "AU" === e ? "en-AU" : "ZA" === e ? "en-ZA" : "en-US" : "de" === t ? "AT" === e ? "de-AT" : "CH" === e ? "de-CH" : "de-DE" : "pt" === t ? ["PT", "IT", "DE", "ES", "NL", "BE", "CH", "AT", "FR", "LU", "GB", "IE", "PL", "CZ", "DK", "SE", "NO"].includes(e) ? "pt-PT" : "pt-BR" : null
        }
        var B = n(54280)
          , G = n(99944)
          , q = n(37976);
        const H = (0,
        u.Z)()
          , Z = ({onCopy: e, onClear: t, onSave: n, showSaveAction: s, showTextActions: a})=>{
            const {current: c} = (0,
            o.useRef)({
                copyAction: H.get("js.action_copy"),
                copySuccess: H.get("js.success_copy"),
                deleteAction: H.get("js.action_delete"),
                saveAction: H.get("js.action_save")
            })
              , l = (0,
            o.useRef)()
              , [d,u] = (0,
            o.useState)(!1)
              , p = i()("button-link", "button-link--gray-background", "button-link--with-icon")
              , h = i()(p, "button-link--icon-bookmark-blue", "document-actions__button", "actions__button--save")
              , _ = i()(p, "document-actions__button", "icon--copy", {
                "document-actions__button--highlighted": d
            })
              , m = i()(p, "document-actions__button", "icon--trash");
            return (0,
            o.useEffect)((()=>()=>{
                "number" == typeof l.current && window.clearTimeout(l.current)
            }
            ), [l]),
            (0,
            r.jsxs)("div", {
                className: "button-link-group",
                children: [s && (0,
                r.jsx)("span", {
                    tabIndex: -1,
                    className: h,
                    onClick: n,
                    children: (0,
                    r.jsx)("i", {
                        className: "document-actions__caption",
                        children: c.saveAction
                    })
                }), a && (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)("span", {
                        tabIndex: -1,
                        className: _,
                        onClick: ()=>{
                            d || (e(),
                            u(!0),
                            l.current = window.setTimeout((()=>u(!1)), 1200))
                        }
                        ,
                        children: (0,
                        r.jsx)("i", {
                            className: "document-actions__caption",
                            children: c.copyAction
                        })
                    }), (0,
                    r.jsx)("span", {
                        className: m,
                        onClick: t,
                        children: (0,
                        r.jsx)("i", {
                            className: "document-actions__caption",
                            children: c.deleteAction
                        })
                    })]
                })]
            })
        }
          , Y = ({className: e, accented: t})=>(0,
        r.jsxs)("div", {
            className: i()("loading-bar-container", e, {
                "loading-bar-container--accented": t
            }),
            children: [(0,
            r.jsx)("div", {
                className: "loading-bar loading-bar-1"
            }), (0,
            r.jsx)("div", {
                className: "loading-bar loading-bar-2"
            }), (0,
            r.jsx)("div", {
                className: "loading-bar loading-bar-3"
            })]
        });
        function $(e) {
            const t = 1024
              , n = 1048576;
            switch (!0) {
            case e < t:
                return `${(0,
                v.Z)(e, "en")} Bytes`;
            case e < n:
                return `${(0,
                v.Z)(Math.round(e / t), "en")} KB`;
            case e < 1073741824:
                return `${(0,
                v.Z)(Math.round(e / n), "en")} MB`;
            default:
                return ""
            }
        }
        var F = n(45921);
        const z = e=>e.includes("-")
          , W = (()=>{
            const e = Array.from(navigator.languages)
              , t = e[0];
            if (!t)
                return;
            if (z(t) && (n = t,
            b.E7.includes(n)))
                return t;
            var n;
            const r = e.find((e=>e.startsWith(t) && z(e))) || b.E7.find((e=>e.startsWith(t) && z(e)));
            return r || "en-us"
        }
        )();
        var V = n(84064);
        const K = "/images/logo_word.svg?0102f4bf8d859c3441b0337c11aec5d2"
          , J = (0,
        u.Z)()
          , X = ()=>{
            const e = (0,
            V.Z)()
              , {current: t} = (0,
            o.useRef)({
                uploadFooterText: J.get("js.welcome_editor.docx.privacy_note"),
                uploadTrust: J.get("js.welcome_editor.docx.trust"),
                uploadTrustByBrowser: J.get("js.welcome_editor.docx.trust_by_browser", {
                    browserName: e
                }),
                uploadTrustGdpr: J.get("js.welcome_editor.docx.trust_gdpr"),
                uploadTrustHosting: J.get("js.welcome_editor.docx.trust_hosting")
            })
              , n = Boolean(W?.startsWith("de"))
              , s = !1 === n && ["Chrome", "Firefox", "Edge", "Safari"].includes(e) ? t.uploadTrustByBrowser : t.uploadTrust;
            return (0,
            r.jsxs)("div", {
                className: "docx_upload__footer",
                children: [(0,
                r.jsxs)("div", {
                    className: "docx_upload__footer__left",
                    children: [(0,
                    r.jsx)("i", {
                        className: "icon icon--info-small docx_upload__footer__left__icon"
                    }), (0,
                    r.jsx)("p", {
                        className: "docx_upload__footer__left__text",
                        children: t.uploadFooterText
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "docx_upload__footer__right",
                    children: n ? (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)("p", {
                            className: "docx_upload__footer__right__text",
                            dangerouslySetInnerHTML: {
                                __html: t.uploadTrust
                            }
                        }), (0,
                        r.jsxs)("span", {
                            className: "docx-upload__attr docx-upload__attr--circular-icon",
                            children: [(0,
                            r.jsx)("span", {
                                className: "icon icon--ssl"
                            }), t.uploadTrustGdpr]
                        }), (0,
                        r.jsxs)("span", {
                            className: "docx-upload__attr docx-upload__attr--circular-icon",
                            children: [(0,
                            r.jsx)("span", {
                                className: "icon icon--german-hosting"
                            }), t.uploadTrustHosting]
                        })]
                    }) : (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)("p", {
                            className: "docx_upload__footer__right__text",
                            dangerouslySetInnerHTML: {
                                __html: s
                            }
                        }), (0,
                        r.jsx)("div", {
                            className: "docx_upload__footer__stars",
                            children: Array.from("abcde").map((e=>(0,
                            r.jsx)("span", {
                                className: "icon icon--yellow-star"
                            }, e)))
                        })]
                    })
                })]
            })
        }
          , Q = ({isHidden: e, onDocxInputChange: t, pushHistory: n})=>{
            const {current: s} = (0,
            o.useRef)({
                uploadHeadline: J.get("js.welcome_editor.docx.upload_headline"),
                uploadDescription: J.get("js.welcome_editor.docx.upload_description"),
                uploadLabel: J.get("js.welcome_editor.docx.upload_label"),
                uploadBack: J.get("js.welcome_editor.docx.upload_back"),
                uploadSuffix: J.get("js.its_free")
            });
            return (0,
            r.jsx)(F.Z, {
                disabled: !0 === e,
                onDrop: t,
                children: (0,
                r.jsxs)("div", {
                    className: "docx-upload__inner",
                    children: [(0,
                    r.jsx)("input", {
                        className: i()("docx-upload__input", {
                            "docx-upload__input--disabled": !0 === e
                        }),
                        type: "file",
                        name: "docx_upload",
                        id: "docx_upload",
                        accept: ".doc,.docx",
                        onInput: e=>t(e.currentTarget?.files?.item(0))
                    }), (0,
                    r.jsxs)("div", {
                        className: "docx-upload__upload-area",
                        children: [(0,
                        r.jsx)("div", {
                            className: "docx-upload__logo",
                            children: (0,
                            r.jsx)("img", {
                                src: K,
                                className: "docx-upload__logo__image",
                                alt: ""
                            })
                        }), (0,
                        r.jsx)("h3", {
                            className: "docx-upload__upload-area__headline",
                            children: s.uploadHeadline
                        }), (0,
                        r.jsx)("p", {
                            className: "docx-upload__upload-area__description",
                            dangerouslySetInnerHTML: {
                                __html: s.uploadDescription
                            }
                        }), (0,
                        r.jsxs)("div", {
                            className: "btn-wrapper",
                            children: [(0,
                            r.jsxs)("label", {
                                className: "btn btn--primary",
                                htmlFor: "docx_upload",
                                children: [s.uploadLabel, " ", (0,
                                r.jsx)("i", {
                                    children: s.uploadSuffix
                                })]
                            }), (0,
                            r.jsx)("a", {
                                className: "btn btn--primary btn--outline",
                                href: ".",
                                onClick: n,
                                children: s.uploadBack
                            })]
                        })]
                    }), (0,
                    r.jsx)(X, {})]
                })
            })
        }
          , ee = ({docxState: e, docxUploadProgress: t})=>{
            const {current: n} = (0,
            o.useRef)({
                processingCaptionAnalyzing: J.get("js.welcome_editor.docx.processing_caption_anlyzing")
            })
              , s = J.get("js.welcome_editor.docx.processing_caption_uploading", {
                percent: String(t)
            });
            return (0,
            r.jsxs)("div", {
                className: "docx-upload__inner",
                children: [(0,
                r.jsxs)("div", {
                    className: "docx-upload__upload-area",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "docx-upload__progress",
                        children: [(0,
                        r.jsx)("div", {
                            className: "docx-upload__logo docx-upload__logo--analyzing",
                            children: (0,
                            r.jsx)("img", {
                                src: K,
                                className: "docx-upload__logo__image",
                                alt: ""
                            })
                        }), (0,
                        r.jsx)("h2", {
                            className: "docx-upload__upload-area__caption",
                            children: "upload" === e ? (0,
                            r.jsx)(r.Fragment, {
                                children: s
                            }) : (0,
                            r.jsx)(r.Fragment, {
                                children: n.processingCaptionAnalyzing
                            })
                        })]
                    }), "upload" === e && (0,
                    r.jsx)(Y, {
                        accented: !0,
                        className: "docx-upload__loading-bar"
                    })]
                }), (0,
                r.jsx)(X, {})]
            })
        }
          , te = (e,t,n)=>{
            if ("error_file_too_big" === e)
                return n.failedReasonTooBig;
            if ("error_processing" === e)
                return n.failedReasonProcessingError;
            if ("error_wrong_filetype" === e) {
                return Boolean(t?.match(/\.doc$/i)) ? n.failedReasonOldWordFile : n.failedReasonNotSupported
            }
            return "error_text_too_long" === e ? n.failedReasonTextTooLong : "error_text_too_short" === e ? n.failedReasonTextTooShort : "error_unsupported_language" === e ? n.failedReasonUnsupportedLanguage : n.failedReasonError
        }
          , ne = ({reset: e, docxState: t, docxFile: n})=>{
            const {current: s} = (0,
            o.useRef)({
                failedCaption: J.get("js.welcome_editor.docx.failed_caption"),
                failedReasonTooBig: J.get("js.welcome_editor.docx.failed_reason_too_big"),
                failedReasonOldWordFile: J.get("js.welcome_editor.docx.failed_reason_old_word_file"),
                failedReasonNotSupported: J.get("js.welcome_editor.docx.failed_reason_not_supported"),
                failedReasonProcessingError: J.get("js.welcome_editor.docx.failed_reason_processing_error"),
                failedReasonTextTooLong: J.get("js.welcome_editor.docx.failed_reason_text_too_long_error", {
                    fileName: String(n.name)
                }),
                failedReasonTextTooShort: J.get("js.welcome_editor.docx.failed_reason_text_too_short_error", {
                    fileName: String(n.name)
                }),
                failedReasonUnsupportedLanguage: J.get("js.welcome_editor.docx.failed_reason_unsupported_language_error"),
                failedReasonUnknownError: J.get("js.welcome_editor.docx.failed_reason_unknown_error"),
                failedButton: J.get("js.welcome_editor.docx.failed_button")
            });
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)("div", {
                    className: "docx-upload__inner docx-upload__inner--error | text-center",
                    children: [(0,
                    r.jsx)("h2", {
                        className: "docx-upload__caption docx-upload__caption--error",
                        children: s.failedCaption
                    }), n.name && (0,
                    r.jsx)("span", {
                        className: "docx-upload__filename docx-upload__filename--error",
                        children: n.name
                    }), (0,
                    r.jsx)("p", {
                        className: "docx-upload__description",
                        children: te(t, n.name, s)
                    })]
                }), (0,
                r.jsx)("button", {
                    className: "btn btn--prominent-blue btn--flat docx-upload__cta",
                    onClick: ()=>e(!1),
                    children: s.failedButton
                })]
            })
        }
          , re = ({docxFile: e, docxReport: t})=>{
            const {wordsCount: n, language: s, spellingErrors: a, grammarErrors: i, styleIssues: c, punctuationIssues: l} = t
              , d = a + i + c + l
              , u = d > 0
              , p = s.split("-").shift()
              , {current: h} = (0,
            o.useRef)({
                resultCaptionHasErrors: J.get("js.welcome_editor.docx.result_caption_has_errors"),
                resultCaptionNoErrors: J.get("js.welcome_editor.docx.result_caption_no_errors"),
                resultDescriptionHasErrors: J.choice("js.welcome_editor.docx.result_description_has_errors", d, {
                    errors: String(d)
                }),
                resultDescriptionNoErrors: J.get("js.welcome_editor.docx.result_description_no_errors"),
                resultListCaption: J.get("js.welcome_editor.docx.result_list_caption"),
                resultListSpelling: J.choice("js.mistake_count.possible_spelling_errors", a),
                resultListSpellingInfo: J.get("js.welcome_editor.docx.result_list_spelling_info"),
                resultListGrammar: J.choice("js.mistake_count.grammar_errors", i),
                resultListGrammarInfo: J.get("js.welcome_editor.docx.result_list_grammar_info"),
                resultListPunctuation: J.choice("js.mistake_count.punctuation_errors", l),
                resultListPunctuationInfo: J.get("js.welcome_editor.docx.result_list_punctuation_info"),
                resultListStyle: J.choice("js.mistake_count.style_errors", c),
                resultListStyleInfo: J.get("js.welcome_editor.docx.result_list_style_info"),
                resultDetailsCaption: J.get("js.welcome_editor.docx.result_details_caption"),
                resultDetailsWords: J.choice("js.text_statistics.words", n),
                resultCtaHasErrors: J.get("js.welcome_editor.docx.result_cta_has_errors"),
                resultCtaNoErrors: J.get("js.sign_up_button"),
                resultCtaSuffix: J.get("js.its_free"),
                languageNicename: J.has(`js.languages.${p}`) ? J.get(`js.languages.${p}`) : ""
            })
              , _ = u ? h.resultCaptionHasErrors : h.resultCaptionNoErrors
              , m = u ? h.resultDescriptionHasErrors : h.resultDescriptionNoErrors
              , g = u ? h.resultCtaHasErrors : h.resultCtaNoErrors;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)("div", {
                    className: "docx-upload__inner",
                    children: (0,
                    r.jsxs)("div", {
                        className: "docx-upload__result",
                        children: [(0,
                        r.jsx)("h2", {
                            className: "docx-upload__caption",
                            children: _
                        }), (0,
                        r.jsx)("span", {
                            className: "docx-upload__filename",
                            children: e.name
                        }), (0,
                        r.jsx)("p", {
                            className: "docx-upload__description",
                            dangerouslySetInnerHTML: {
                                __html: m
                            }
                        }), u && (0,
                        r.jsxs)(r.Fragment, {
                            children: [(0,
                            r.jsxs)("div", {
                                className: "docx-upload__result-details",
                                children: [(0,
                                r.jsxs)("h3", {
                                    className: "docx-upload__result-details__caption",
                                    children: [h.resultListCaption, " ", (0,
                                    r.jsx)("span", {
                                        className: "docx-upload__result-details__caption--subtle",
                                        children: d
                                    })]
                                }), (0,
                                r.jsxs)("ul", {
                                    children: [(0,
                                    r.jsxs)("li", {
                                        className: "docx-upload__list__item",
                                        children: [(0,
                                        r.jsx)("span", {
                                            className: "docx-upload__list__amount docx-upload__list__amount--spelling",
                                            children: a
                                        }), (0,
                                        r.jsx)("span", {
                                            className: "docx-upload__list__type",
                                            children: h.resultListSpelling
                                        }), (0,
                                        r.jsx)("span", {
                                            className: "docx-upload__list__info icon icon--info icon--has-tooltip",
                                            children: (0,
                                            r.jsx)(y.Z, {
                                                position: "top-right",
                                                forcePosition: !0,
                                                hoverOnly: !0,
                                                children: (0,
                                                r.jsx)("p", {
                                                    children: h.resultListSpellingInfo
                                                })
                                            })
                                        })]
                                    }), (0,
                                    r.jsxs)("li", {
                                        className: "docx-upload__list__item",
                                        children: [(0,
                                        r.jsx)("span", {
                                            className: "docx-upload__list__amount docx-upload__list__amount--grammar",
                                            children: i
                                        }), (0,
                                        r.jsx)("span", {
                                            className: "docx-upload__list__type",
                                            children: h.resultListGrammar
                                        }), (0,
                                        r.jsx)("span", {
                                            className: "docx-upload__list__info icon icon--info icon--has-tooltip",
                                            children: (0,
                                            r.jsx)(y.Z, {
                                                position: "top-left",
                                                forcePosition: !0,
                                                hoverOnly: !0,
                                                children: (0,
                                                r.jsx)("p", {
                                                    children: h.resultListGrammarInfo
                                                })
                                            })
                                        })]
                                    }), (0,
                                    r.jsxs)("li", {
                                        className: "docx-upload__list__item",
                                        children: [(0,
                                        r.jsx)("span", {
                                            className: "docx-upload__list__amount docx-upload__list__amount--style",
                                            children: c
                                        }), (0,
                                        r.jsx)("span", {
                                            className: "docx-upload__list__type",
                                            children: h.resultListStyle
                                        }), (0,
                                        r.jsx)("span", {
                                            className: "docx-upload__list__info icon icon--info icon--has-tooltip",
                                            children: (0,
                                            r.jsx)(y.Z, {
                                                position: "top-right",
                                                forcePosition: !0,
                                                hoverOnly: !0,
                                                children: (0,
                                                r.jsx)("p", {
                                                    children: h.resultListStyleInfo
                                                })
                                            })
                                        })]
                                    }), (0,
                                    r.jsxs)("li", {
                                        className: "docx-upload__list__item",
                                        children: [(0,
                                        r.jsx)("span", {
                                            className: "docx-upload__list__amount docx-upload__list__amount--punctuation",
                                            children: l
                                        }), (0,
                                        r.jsx)("span", {
                                            className: "docx-upload__list__type",
                                            children: h.resultListPunctuation
                                        }), (0,
                                        r.jsx)("span", {
                                            className: "docx-upload__list__info icon icon--info icon--has-tooltip",
                                            children: (0,
                                            r.jsx)(y.Z, {
                                                position: "top-left",
                                                forcePosition: !0,
                                                hoverOnly: !0,
                                                children: (0,
                                                r.jsx)("p", {
                                                    children: h.resultListPunctuationInfo
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "docx-upload__result-details",
                                children: [(0,
                                r.jsx)("h3", {
                                    className: "docx-upload__result-details__caption",
                                    children: h.resultDetailsCaption
                                }), h.languageNicename && (0,
                                r.jsx)("span", {
                                    "data-lang": s.toLowerCase(),
                                    className: "docx-upload__attr docx-upload__attr--flag",
                                    children: h.languageNicename
                                }), (0,
                                r.jsxs)("span", {
                                    className: "docx-upload__attr",
                                    children: [(0,
                                    r.jsx)("span", {
                                        className: "icon icon--all-documents"
                                    }), (0,
                                    v.Z)(n, J.getLocale()), " ", h.resultDetailsWords]
                                }), (0,
                                r.jsxs)("span", {
                                    className: "docx-upload__attr",
                                    children: [(0,
                                    r.jsx)("span", {
                                        className: "icon icon--all-documents"
                                    }), ".docx"]
                                }), (0,
                                r.jsxs)("span", {
                                    className: "docx-upload__attr",
                                    children: [(0,
                                    r.jsx)("span", {
                                        className: "icon icon--all-documents"
                                    }), $(e.size)]
                                })]
                            })]
                        })]
                    })
                }), (0,
                r.jsxs)("a", {
                    className: "btn btn--prominent-blue btn--flat docx-upload__cta",
                    href: "/register",
                    children: [g, " ", (0,
                    r.jsx)("i", {
                        children: h.resultCtaSuffix
                    })]
                })]
            })
        }
          , oe = ({target: e, current: t, children: n})=>(Array.isArray(e) ? e : [e]).includes(t) ? (0,
        r.jsx)(r.Fragment, {
            children: n
        }) : null
          , se = ({onDocxInputChange: e, onLTAssistantUpdate: t, reset: n, pushHistory: s, ltAssistant: a, language: i, docxState: c, docxContent: l, docxFile: d, docxReport: u, docxUploadProgress: p})=>{
            const h = (0,
            o.useRef)(null)
              , _ = (0,
            o.useRef)(null);
            return (0,
            o.useEffect)((()=>(h.current && l && a && (_.current?.destroy(),
            h.current.innerHTML = l,
            _.current = a.initElement(h.current, {
                onUpdate(e) {
                    t(e)
                },
                id: "docx-upload",
                checkLevel: "picky",
                maxTextLengthBasic: b.l5,
                language: i
            }),
            requestAnimationFrame((()=>{
                h.current && h.current.focus(),
                _.current?.getText()
            }
            ))),
            ()=>{
                _.current && _.current.destroy()
            }
            )), [a, h, l]),
            (0,
            r.jsxs)("div", {
                className: "docx-upload",
                children: [(0,
                r.jsx)(oe, {
                    target: "pristine",
                    current: c,
                    children: (0,
                    r.jsx)(Q, {
                        onDocxInputChange: e,
                        pushHistory: s
                    })
                }), (0,
                r.jsx)(oe, {
                    target: ["upload", "analyzing"],
                    current: c,
                    children: (0,
                    r.jsx)(ee, {
                        docxState: c,
                        docxUploadProgress: p
                    })
                }), (0,
                r.jsx)(oe, {
                    target: ["error_file_too_big", "error_unknown", "error_wrong_filetype", "error_processing", "error_text_too_long", "error_text_too_short", "error_unsupported_language"],
                    current: c,
                    children: (0,
                    r.jsx)(ne, {
                        reset: n,
                        docxState: c,
                        docxFile: d
                    })
                }), (0,
                r.jsx)(oe, {
                    target: "result",
                    current: c,
                    children: (0,
                    r.jsx)(re, {
                        docxFile: d,
                        docxReport: u
                    })
                }), (0,
                r.jsx)("div", {
                    className: "docx-upload__textarea",
                    contentEditable: !0,
                    tabIndex: -1,
                    spellCheck: !1,
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    "data-lt-active": "true",
                    "data-lt-toolbar": "false",
                    "data-gramm": "false",
                    ref: h
                })]
            })
        }
        ;
        var ae = n(40979)
          , ie = n(60074)
          , ce = n(36918);
        class le extends o.Component {
            state = {
                hasError: !1
            };
            static getDerivedStateFromError() {
                return {
                    hasError: !0
                }
            }
            componentDidCatch(e, t) {
                (0,
                ce.t)(e) || (console.log(t),
                ie.Tb(e))
            }
            render() {
                return !1 === this.state.hasError ? this.props.children : null
            }
        }
        const de = le;
        var ue = n(14246)
          , pe = n(13822)
          , he = n(18459)
          , _e = n(82698)
          , me = n(4746);
        const ge = (0,
        u.Z)()
          , fe = "js-welcome-editor-sidebar";
        class ye extends o.Component {
            ref = (0,
            o.createRef)();
            innerRef = (0,
            o.createRef)();
            rewritingNavigationRef = (0,
            o.createRef)();
            interval;
            headerElement;
            constructor(e) {
                super(e),
                this.state = {
                    isSticky: !1,
                    isInLoadingState: !0,
                    isRewritingSupported: (0,
                    me.Z)(e.selectedLanguage, !e.isLoggedIn),
                    isRewritingSupportedWhenLoggedIn: (0,
                    me.Z)(e.selectedLanguage)
                }
            }
            setCorrectionMode = ()=>{
                "correction" !== this.props.mode && this.props.onModeChange("correction")
            }
            ;
            setRewritingMode = ()=>{
                "rewrite" !== this.props.mode && this.props.onModeChange("rewrite")
            }
            ;
            static getDerivedStateFromProps(e) {
                const t = {};
                return ["CHECKING", "LOADING"].includes(e.status) && (t.isInLoadingState = !0),
                ["IN_PROGRESS", "CHECKING", "LOADING"].includes(e.status) || (t.isInLoadingState = !1),
                t.isRewritingSupported = (0,
                me.Z)(e.selectedLanguage, !e.isLoggedIn),
                t.isRewritingSupportedWhenLoggedIn = (0,
                me.Z)(e.selectedLanguage),
                t
            }
            renderIntroState() {
                return (0,
                r.jsxs)("div", {
                    className: "sidebar-intro",
                    children: [(0,
                    r.jsx)("input", {
                        hidden: !0,
                        type: "file",
                        name: "docx_upload",
                        id: "docx_upload",
                        accept: ".doc,.docx",
                        onInput: e=>{
                            this.props.onDocxInputChange(e.currentTarget?.files?.item(0))
                        }
                    }), (0,
                    r.jsxs)("button", {
                        onClick: this.props.onInsertExampleTextClick,
                        className: "sidebar-intro__item | flex",
                        children: [(0,
                        r.jsx)("div", {
                            className: "sidebar-intro__item--text | flex",
                            children: (0,
                            r.jsxs)("div", {
                                className: "sidebar-intro__item-text-wrapper | flex text-left",
                                children: [(0,
                                r.jsx)("p", {
                                    className: "sidebar-intro__item-title",
                                    children: ge.get("js.welcome_editor.options.example_text")
                                }), (0,
                                r.jsx)("span", {
                                    className: "sidebar-intro__item-subtitle",
                                    children: ge.get("js.welcome_editor.options.example_text_sub")
                                })]
                            })
                        }), (0,
                        r.jsx)("div", {
                            className: "sidebar-intro__item-button--text | flex",
                            children: ge.get("js.welcome_editor.options.example_text_button")
                        })]
                    }), (0,
                    r.jsxs)("label", {
                        htmlFor: "docx_upload",
                        className: "sidebar-intro__item",
                        children: [(0,
                        r.jsx)("div", {
                            className: "sidebar-intro__item--word | flex",
                            children: (0,
                            r.jsxs)("div", {
                                className: "sidebar-intro__item-text-wrapper | flex text-left",
                                children: [(0,
                                r.jsx)("p", {
                                    className: "sidebar-intro__item-title",
                                    children: ge.get("js.welcome_editor.options.word")
                                }), (0,
                                r.jsx)("span", {
                                    className: "sidebar-intro__item-subtitle",
                                    children: ge.get("js.welcome_editor.options.word_sub")
                                })]
                            })
                        }), (0,
                        r.jsx)("div", {
                            className: "sidebar-intro__item-button--word | flex",
                            children: ge.get("js.welcome_editor.options.word_button")
                        })]
                    })]
                })
            }
            updateSidebarPosition = e=>{
                if (!this.ref.current || !this.innerRef.current || this.headerElement?.hasAttribute(b.aX))
                    return;
                const t = this.headerElement?.offsetHeight || 88
                  , n = this.ref.current.getBoundingClientRect()
                  , r = Math.min(420, n.height)
                  , o = n.top
                  , s = n.bottom;
                if (o < t) {
                    let e = t;
                    const o = Math.min(window.innerHeight, s);
                    if (e + r > s) {
                        e -= e + r - s
                    }
                    this.innerRef.current.style.position = "fixed",
                    this.innerRef.current.style.top = e + "px",
                    this.innerRef.current.style.bottom = window.innerHeight - o + "px",
                    this.innerRef.current.style.left = "auto",
                    this.innerRef.current.style.right = "auto",
                    this.innerRef.current.style.height = "",
                    this.innerRef.current.style.width = n.width + "px"
                } else
                    this.innerRef.current.style.position = "",
                    this.innerRef.current.style.top = "",
                    this.innerRef.current.style.bottom = "",
                    this.innerRef.current.style.left = "",
                    this.innerRef.current.style.right = "",
                    this.innerRef.current.style.height = Math.max(r, Math.min(window.innerHeight, s) - o) + "px";
                e && e.isTrusted && ["resize", "scroll"].includes(e.type) && this.ensureSelectedItemIsVisible()
            }
            ;
            ensureSelectedItemIsVisible() {
                if (!this.innerRef.current)
                    return;
                const e = this.innerRef.current.querySelector(".js-error-list-item-selected");
                if (!e)
                    return;
                const t = this.getScrollArea();
                if (!t)
                    return;
                const n = e.getBoundingClientRect()
                  , r = t.getBoundingClientRect().bottom - 20;
                n.bottom > r && (t.scrollTop = Math.round(t.scrollTop + (n.bottom - r)))
            }
            getScrollArea() {
                return this.ref.current?.querySelector(".js-scroll-area-scrollable")
            }
            resetPosition() {
                this.innerRef.current
            }
            onMouseWheel = e=>{
                if (!(e.target instanceof HTMLElement))
                    return;
                if (e.deltaY < 0)
                    return;
                const t = this.getScrollArea();
                if (!t)
                    return;
                if (!(t.scrollHeight > t.offsetHeight))
                    return;
                Math.abs(t.scrollHeight - t.scrollTop - t.clientHeight) < 1 && e.preventDefault()
            }
            ;
            componentDidMount() {
                window.addEventListener("scroll", this.updateSidebarPosition),
                window.addEventListener("resize", this.updateSidebarPosition),
                this.ref.current?.addEventListener("wheel", this.onMouseWheel),
                this.interval = window.setInterval(this.updateSidebarPosition, 400),
                this.headerElement = document.querySelector("#primary-website-header") || void 0,
                this.updateSidebarPosition()
            }
            componentWillUnmount() {
                window.removeEventListener("scroll", this.updateSidebarPosition),
                window.removeEventListener("resize", this.updateSidebarPosition),
                window.clearInterval(this.interval)
            }
            renderContent() {
                return "correction" === this.props.mode ? this.props.ltAssistantState && this.props.ltAssistantState.currentText.trim().length ? (0,
                r.jsx)(he.Z, {
                    loading: this.state.isInLoadingState,
                    selectedErrorIndex: this.props.selectedErrorIndex,
                    statusMessage: null,
                    status: this.props.status,
                    displayedErrors: this.props.ltAssistantState?.displayedErrors || [],
                    premiumErrors: this.props.ltAssistantState?.premiumErrors || [],
                    pickyErrors: this.props.ltAssistantState?.pickyErrors || [],
                    premiumPickyErrors: this.props.ltAssistantState?.premiumPickyErrors || [],
                    isIncompleteResult: this.props.ltAssistantState?.isIncompleteResult || !1,
                    ignoredRules: [],
                    isPremiumUser: this.props.isPremium,
                    context: "welcome-editor",
                    errorLabels: this.props.errorLabels,
                    onErrorSelect: this.props.onErrorSelect,
                    onErrorUnselect: this.props.onErrorUnselect,
                    onFixSelect: this.props.onFixSelect,
                    onErrorIgnore: this.props.onErrorIgnore,
                    onDictionaryAdd: this.props.onDictionaryAdd
                }) : this.renderIntroState() : "rewrite" === this.props.mode ? (0,
                r.jsx)(_e.Z, {
                    synonyms: this.props.synonyms,
                    context: "welcome-editor",
                    rephrasings: this.props.rephrasings,
                    remainingRephrasings: this.props.remainingRephrasings,
                    isInitialLoading: !1,
                    isRewritingSupported: this.state.isRewritingSupported,
                    language: this.props.selectedLanguage,
                    onApplySynonym: this.props.onApplySynonym,
                    onApplyRephrasing: this.props.onApplyRephrasing,
                    resetRemainingRephrasings: this.props.resetRemainingRephrasings
                }) : null
            }
            render() {
                const e = this.props.ltAssistantState && this.props.ltAssistantState.displayedErrors.length > 0 ? (0,
                r.jsx)("span", {
                    className: "tab-navigation__error-count",
                    children: this.props.ltAssistantState.displayedErrors.length
                }) : null;
                return (0,
                r.jsx)(F.Z, {
                    disabled: !1,
                    onDrop: this.props.onDocxInputChange,
                    children: (0,
                    r.jsx)("aside", {
                        className: i()("welcome-editor__sidebar", fe),
                        ref: this.ref,
                        children: (0,
                        r.jsxs)("div", {
                            className: "welcome-editor__sidebar__inner",
                            ref: this.innerRef,
                            children: [(0,
                            r.jsxs)("nav", {
                                className: i()("tab-navigation", "welcome-editor__sidebar__navigation", {
                                    "tab-navigation--second": "rewrite" === this.props.mode
                                }),
                                children: [(0,
                                r.jsxs)("button", {
                                    className: i()("tab-navigation__button", {
                                        "tab-navigation__button--active": "correction" === this.props.mode
                                    }),
                                    onClick: this.setCorrectionMode,
                                    onMouseUp: ({currentTarget: e})=>e?.blur(),
                                    children: [(0,
                                    r.jsx)("i", {
                                        className: i()("icon", {
                                            "icon--text-edit-blue": "correction" !== this.props.mode,
                                            "icon--text-edit-white": "correction" === this.props.mode
                                        })
                                    }), ge.get("js.sidebar.mode_correction"), " ", e]
                                }), "nope" === this.state.isRewritingSupported ? (0,
                                r.jsxs)(r.Fragment, {
                                    children: [(0,
                                    r.jsxs)("span", {
                                        ref: this.rewritingNavigationRef,
                                        className: i()("tab-navigation__button", "tab-navigation__button--disabled"),
                                        "data-testid": "document-mode-navigation-rewriting",
                                        children: [(0,
                                        r.jsx)("i", {
                                            className: i()("icon", "icon--padlock")
                                        }), ge.get("js.sidebar.mode_rewriting")]
                                    }), (0,
                                    r.jsxs)(y.Z, {
                                        className: "tab-navigation__tooltip",
                                        position: "bottom-left",
                                        hoverOnly: !0,
                                        anchorRef: this.rewritingNavigationRef,
                                        children: [(0,
                                        r.jsx)("h4", {
                                            className: "tab-navigation__tooltip__caption",
                                            children: "nope" === this.state.isRewritingSupportedWhenLoggedIn ? (0,
                                            r.jsxs)(r.Fragment, {
                                                children: [ge.get("js.sidebar.mode_rewriting_tooltip_caption"), (0,
                                                r.jsx)("span", {
                                                    className: "new-highlight | inline-block",
                                                    children: "Beta"
                                                })]
                                            }) : ge.get("js.sidebar.mode_rewriting_tooltip_account")
                                        }), (0,
                                        r.jsx)("p", {
                                            className: "tab-navigation__tooltip__description",
                                            children: ge.get("js.sidebar.mode_rewriting_tooltip_description")
                                        }), "nope" === this.state.isRewritingSupportedWhenLoggedIn && (0,
                                        r.jsx)("p", {
                                            className: "tab-navigation__tooltip__message",
                                            children: ge.get("js.sidebar.mode_rewriting_tooltip_message")
                                        })]
                                    })]
                                }) : (0,
                                r.jsxs)("button", {
                                    className: i()("tab-navigation__button", {
                                        "tab-navigation__button--active": "rewrite" === this.props.mode
                                    }),
                                    onClick: this.setRewritingMode,
                                    onMouseUp: ({currentTarget: e})=>e?.blur(),
                                    children: [(0,
                                    r.jsx)("i", {
                                        className: i()("icon", {
                                            "icon--rephrase-blue": "rewrite" !== this.props.mode,
                                            "icon--rephrase-white": "rewrite" === this.props.mode
                                        })
                                    }), ge.get("js.sidebar.mode_rewriting")]
                                })]
                            }), (0,
                            r.jsx)("div", {
                                className: "welcome-editor__sidebar__content",
                                children: this.renderContent()
                            })]
                        })
                    })
                })
            }
        }
        const ve = ye;
        var be = n(6147)
          , xe = n(37855)
          , we = n(10763)
          , Ee = n(93378)
          , Se = n(90910);
        const Te = ["synonyms"];
        function ke(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function je(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ke(Object(n), !0).forEach((function(t) {
                    Ne(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ke(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function Ne(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r)
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Ce(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, s = Object.keys(e);
                for (r = 0; r < s.length; r++)
                    n = s[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++)
                    n = s[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        const Pe = c.Ry({
            user: c.AG(I.c),
            language: c.jt(c.AG(c.Z_())),
            check_token: c.AG(c.Z_()),
            geoip: c.Ry({
                country: c.Z_(),
                languages: c.IX(c.Z_())
            }),
            csrf_token: c.Z_(),
            ooxml_url: c.Z_(),
            error_labels: c.IM(c.Z_(), be.e)
        })
          , Ae = (0,
        u.Z)()
          , Le = ({search: e})=>{
            const t = new URLSearchParams(e).get("source");
            return "upload" === t ? t : "input"
        }
          , Re = {
            synonymSets: [],
            dataSource: {
                licenseUrl: "",
                sourceName: "",
                sourceUrl: ""
            },
            genders: null
        }
          , Oe = /^<br\s?\/?>$/;
        class De extends o.Component {
            throttleOnInput;
            ltTextarea = (0,
            o.createRef)();
            welcomeEditor = (0,
            o.createRef)();
            initialContent = null;
            hasTextChanged = !1;
            ltAssistantEditor = null;
            textStatistics;
            preferredLanguagesConfig;
            mediaMatcher = matchMedia("screen and (max-width: 900px)");
            history;
            isPremium;
            unbindHistoryListener = ()=>{}
            ;
            pasteHintIgnoreTypes;
            constructor(e) {
                super(e);
                try {
                    c.hu(e.data, Pe)
                } catch (e) {
                    (0,
                    ie.Tb)(e)
                }
                if (e.ltAssistantCtrPromise.then(this.configureLTAssistantInstances).catch((e=>{
                    M.Z.trackEvent("WelcomeEditor", "load_standalone_failed", e.message)
                }
                )),
                this.isPremium = this.props.data.user?.is_premium ?? !1,
                this.props.data.user) {
                    const e = this.props.data.user.preferred_languages ? this.props.data.user.preferred_languages.split(/,\s*/) : [];
                    this.props.data.language && e.unshift(this.props.data.language),
                    this.preferredLanguagesConfig = {
                        de_variation: this.props.data.user.de_variation,
                        en_variation: this.props.data.user.en_variation,
                        pt_variation: this.props.data.user.pt_variation,
                        ca_variation: this.props.data.user.ca_variation,
                        preferred_languages: (0,
                        xe.Z)(e),
                        mother_tongue: this.props.data.user.mother_tongue
                    }
                } else {
                    const e = [...(0,
                    B.Z)().map((e=>(0,
                    R.Z)(e))), ...this.props.data.geoip.languages, "en"];
                    this.props.data.language && e.unshift(this.props.data.language),
                    this.preferredLanguagesConfig = {
                        de_variation: U(this.props.data.geoip.country, "de"),
                        en_variation: U(this.props.data.geoip.country, "en"),
                        pt_variation: U(this.props.data.geoip.country, "pt"),
                        ca_variation: "ca-es",
                        preferred_languages: (0,
                        xe.Z)(e),
                        mother_tongue: (t = this.props.data.geoip.country,
                        ["DE", "CH", "AT"].includes(t) && "de" === navigator.language ? "de" : ["FR", "CA", "CH", "BE"].includes(t) && "fr" === navigator.language ? "fr" : null)
                    }
                }
                var t;
                const n = (0,
                j.Z)(this.preferredLanguagesConfig)[0];
                let r = n ? n.code : "en-us";
                const o = k.Z.get(b.Dc);
                this.props.data.language ? r = this.props.data.language : o && (r = o);
                const a = (0,
                P.Z)();
                if (a)
                    this.initialContent = {
                        value: (0,
                        G.Z)(a),
                        source: null,
                        scaffold: null
                    };
                else {
                    const e = k.Z.get(b.sb);
                    e && e.content && Date.now() - e.date < 3e4 ? this.initialContent = e.content : this.props.data.language ? this.initialContent = {
                        value: (0,
                        G.Z)(O(r)),
                        source: null,
                        scaffold: null
                    } : this.initialContent = {
                        value: "",
                        source: null,
                        scaffold: null
                    }
                }
                if (this.textStatistics = new L.Z(""),
                this.history = (0,
                s.lX)(),
                this.state = {
                    selectedLanguage: r,
                    forceLanguage: !1,
                    ltAssistantState: null,
                    currentModal: null,
                    showSaveAction: !1,
                    showTextActions: !1,
                    showSidebar: !this.mediaMatcher.matches,
                    activeSource: Le(this.history.location),
                    docxState: "pristine",
                    docxContent: null,
                    docxUploadProgress: 0,
                    pasteSource: null,
                    selectedErrorIndex: -1,
                    docxFile: {
                        name: null,
                        size: 0
                    },
                    docxReport: {
                        language: r,
                        wordsCount: 0,
                        spellingErrors: 0,
                        grammarErrors: 0,
                        styleIssues: 0,
                        punctuationIssues: 0
                    },
                    textStatistics: {
                        characters: 0,
                        words: 0,
                        readingTime: 0
                    },
                    textErrors: [],
                    premiumErrors: [],
                    mode: "correction",
                    status: "CHECKING",
                    synonyms: {
                        result: Re,
                        state: null,
                        source: null,
                        selection: {}
                    },
                    rephrasings: {
                        result: [],
                        state: null,
                        source: null,
                        selection: {}
                    },
                    ignoredRules: [],
                    remainingRephrasings: -1
                },
                this.throttleOnInput = (0,
                C.P)(this.onTextareaInput.bind(this), 500),
                this.pasteHintIgnoreTypes = k.Z.get(b.h) || [],
                !e.data.user?.prefer_oxford_spelling) {
                    const e = {
                        id: "OXFORD_SPELLING_Z_NOT_S",
                        language: "en"
                    };
                    this.state.ignoredRules.push(e)
                }
            }
            configureLTAssistantInstances = e=>{
                const t = (0,
                A.Z)(e, this.preferredLanguagesConfig, this.props.data.user, this.props.data.check_token, {
                    emphasizeErrors: this.mediaMatcher.matches,
                    disableExternalRephrasings: !this.props.data.user
                })
                  , n = (0,
                A.Z)(e, this.preferredLanguagesConfig, void 0, this.props.data.check_token, {
                    emphasizeErrors: !1,
                    disableDictionaryAdd: !0,
                    disablePremiumTeaser: !0,
                    disableExternalRephrasings: !0,
                    disableRuleIgnore: !0
                });
                this.setState({
                    ltAssistant: t,
                    docxLtAssistant: n
                })
            }
            ;
            onLTAssistantEditor = e=>{
                this.ltAssistantEditor = e
            }
            ;
            onClear = ()=>{
                this.ltTextarea.current && (this.ltTextarea.current.clear(),
                k.Z.remove(b.sb),
                M.Z.trackEvent("WelcomeEditor", "clear"))
            }
            ;
            onCopy = ()=>{
                this.ltTextarea.current && (this.ltTextarea.current.copy(),
                M.Z.trackEvent("WelcomeEditor", "copy", (0,
                R.Z)(this.state.selectedLanguage)))
            }
            ;
            onModalClose = ()=>{
                this.setState({
                    currentModal: null
                })
            }
            ;
            showDictionaryModal() {
                this.setState({
                    currentModal: "account"
                }),
                M.Z.trackEvent("WelcomeEditor", "add_to_dictionary")
            }
            onDictionaryAdd = ()=>!this.props.data.user && (this.showDictionaryModal(),
            !0);
            onSidebarDictionaryAdd = e=>{
                this.props.data.user ? this.ltAssistantEditor && (this.ltAssistantEditor.addToDictionary(e),
                this.selectNextError()) : this.showDictionaryModal()
            }
            ;
            onSave = ()=>{
                this.props.data && this.props.data.user ? location.href = "/editor/new?store=true" : (this.setState({
                    currentModal: "account"
                }),
                M.Z.trackEvent("WelcomeEditor", "save"))
            }
            ;
            onRuleIgnore = ()=>(this.setState({
                currentModal: "account"
            }),
            M.Z.trackEvent("WelcomeEditor", "ignore_rule"),
            !0);
            onLTAssistantUpdate = e=>{
                const t = e.languageCode.toLowerCase();
                t && this.state.selectedLanguage !== t && this.setLanguage(t);
                const n = this.ltAssistantEditor?.getRemainingRephrasings() ?? -1;
                let r = [...e.errors, ...e.pickyErrors];
                this.isPremium && (r.push(...e.premiumErrors),
                r.push(...e.premiumPickyErrors)),
                r = r.filter((({rule: e})=>void 0 === this.state.ignoredRules.find((({id: t})=>e.id === t))));
                const o = this.isPremium ? [] : [...e.premiumErrors, ...e.premiumPickyErrors];
                0 === n ? this.ltAssistantEditor?.disableRewriteMode() : this.ltAssistantEditor?.enableRewriteMode(),
                e.synonyms.result.synonymSets = e.synonyms.result.synonymSets.map((e=>{
                    let {synonyms: t} = e
                      , n = Ce(e, Te);
                    const r = t.filter((({word: e},t,n)=>n.findIndex((t=>t.word === e)) === t));
                    return je(je({}, n), {}, {
                        synonyms: r
                    })
                }
                )),
                "loading" === e.synonyms.state && (e.synonyms.result = this.state.synonyms.result),
                "loading" === e.rephrasings.state && (e.rephrasings.result = this.state.rephrasings.result),
                this.setState({
                    ltAssistantState: e,
                    status: e.checkStatus,
                    synonyms: e.synonyms,
                    rephrasings: e.rephrasings,
                    remainingRephrasings: n,
                    premiumErrors: o,
                    textErrors: r
                }),
                !this.hasTextChanged && e.checkedText.text.length > 10 && !this.isDemoText(e.checkedText.text) && (this.hasTextChanged = !0,
                M.Z.trackEvent("WelcomeEditor", "check", (0,
                R.Z)(e.languageCode)))
            }
            ;
            onTextareaInput = ()=>{
                this.updateActionsAndStatistics()
            }
            ;
            onLanguageChange = e=>{
                if (!this.ltTextarea.current)
                    return;
                this.isDemoText(this.ltTextarea.current.getPlainText()) ? (this.ltTextarea.current.clear(),
                setTimeout((()=>{
                    this.setLanguage(e, !0),
                    this.ltTextarea.current?.setPlainText(O(e)),
                    this.ltTextarea.current?.focus()
                }
                ), 0)) : (this.setLanguage(e, !0),
                this.ltTextarea.current.focus())
            }
            ;
            onMouseDown = e=>{
                this.state.selectedErrorIndex > -1 && e.isTrusted && !e.target?.closest(`.${fe}`) && (this.setState({
                    selectedErrorIndex: -1
                }),
                this.ltTextarea.current?.setHighlightedError(null))
            }
            ;
            setLanguage(e, t) {
                const n = {
                    selectedLanguage: e
                };
                void 0 !== t && (n.forceLanguage = !0),
                this.ltTextarea.current && this.ltTextarea.current.getPlainText().length > 10 && (n.status = "CHECKING"),
                this.setState(n),
                k.Z.set(b.Dc, e)
            }
            updateActionsAndStatistics() {
                if (!this.ltTextarea.current)
                    return;
                const e = this.ltTextarea.current.getPlainText()
                  , t = {};
                e.length >= 140 ? this.state.showSaveAction || (t.showSaveAction = !0) : this.state.showSaveAction && (t.showSaveAction = !1),
                t.showTextActions = e.trim().length > 0,
                this.textStatistics.updateText(e),
                t.textStatistics = {
                    characters: this.textStatistics.countCharacters(),
                    words: this.textStatistics.countWords(),
                    readingTime: this.textStatistics.getReadingTime()
                },
                this.setState(t)
            }
            onMatchMediaChange = ()=>{
                this.setState({
                    showSidebar: !this.mediaMatcher.matches
                })
            }
            ;
            bindMediaMatcherCrossBrowser() {
                "function" == typeof this.mediaMatcher.addEventListener ? this.mediaMatcher.addEventListener("change", this.onMatchMediaChange) : "function" == typeof this.mediaMatcher.addListener && this.mediaMatcher.addListener(this.onMatchMediaChange)
            }
            unbindMediaMatcherCrossBrowser() {
                "function" == typeof this.mediaMatcher.removeEventListener ? this.mediaMatcher.removeEventListener("change", this.onMatchMediaChange) : "function" == typeof this.mediaMatcher.removeListener && this.mediaMatcher.removeListener(this.onMatchMediaChange)
            }
            getEditorBottomOffScreenSize() {
                return new Promise((e=>requestAnimationFrame((()=>{
                    if (!this.welcomeEditor.current)
                        return void e(null);
                    const t = window.scrollY || window.pageYOffset
                      , {height: n, top: r} = this.welcomeEditor.current.getBoundingClientRect()
                      , o = n + r + t + 42
                      , s = Math.max(o - (innerHeight + t), 0);
                    e(s > 0 ? s : null)
                }
                ))))
            }
            scrollToRevealEditorBottom(e) {
                new Promise((e=>{
                    (window.scrollY || window.pageYOffset) > 0 ? e() : (scrollTo(0, 1),
                    requestAnimationFrame((()=>e())))
                }
                )).then((()=>{
                    const t = window.scrollY || window.pageYOffset;
                    scrollTo(0, t + e)
                }
                ))
            }
            componentDidMount() {
                window.addEventListener("pagehide", this.saveLastText),
                this.bindMediaMatcherCrossBrowser(),
                this.updateActionsAndStatistics(),
                this.unbindHistoryListener = this.history.listen(this.applyHistoryChange),
                document.addEventListener("mousedown", this.onMouseDown),
                (0,
                Ee.x3)("welcome_editor.ready", Math.round(Date.now() - performance.timeOrigin), "millisecond")
            }
            componentWillUnmount() {
                window.removeEventListener("pagehide", this.saveLastText),
                this.unbindMediaMatcherCrossBrowser(),
                this.unbindHistoryListener(),
                document.removeEventListener("mousedown", this.onMouseDown)
            }
            componentDidUpdate() {
                "result" === this.state.docxState && this.getEditorBottomOffScreenSize().then((e=>{
                    "number" == typeof e && this.scrollToRevealEditorBottom(e)
                }
                ))
            }
            isDemoText(e) {
                return function(e, t, n=2, r=!1) {
                    if (r || (e = e.toLowerCase(),
                    t = t.toLowerCase()),
                    e.length < n || t.length < n)
                        return 0;
                    const o = new Map;
                    for (let t = 0; t < e.length - (n - 1); t++) {
                        const r = e.substr(t, n);
                        o.set(r, o.has(r) ? o.get(r) + 1 : 1)
                    }
                    let s = 0;
                    for (let e = 0; e < t.length - (n - 1); e++) {
                        const r = t.substr(e, n)
                          , a = o.has(r) ? o.get(r) : 0;
                        a > 0 && (o.set(r, a - 1),
                        s++)
                    }
                    return 2 * s / (e.length + t.length - 2 * (n - 1))
                }(O(this.state.selectedLanguage), function(e) {
                    return e.replace(D, " ").toLowerCase()
                }(e)) > .94
            }
            scrollToFirstError = ()=>{
                if (!this.ltAssistantEditor)
                    return;
                const e = this.ltAssistantEditor.getDisplayedErrors()[0];
                this.ltAssistantEditor.scrollToError(e, !0, "center")
            }
            ;
            saveLastText = ()=>{
                if (!this.ltTextarea.current)
                    return;
                const e = this.ltTextarea.current.getPlainText();
                if (this.isDemoText(e))
                    return;
                const t = this.ltTextarea.current.getHTML();
                t.value.length < 2e6 && t.value.length > 3 && !Oe.test(t.value) && k.Z.set(b.sb, {
                    date: Date.now(),
                    content: t
                })
            }
            ;
            applyHistoryChange = e=>{
                const t = Le(e);
                M.Z.trackEvent("WelcomeEditor", `source:${t}`),
                this.setState({
                    activeSource: t
                })
            }
            ;
            pushHistory = e=>{
                e.preventDefault();
                const t = e.currentTarget.pathname + e.currentTarget.search;
                e.currentTarget.host !== location.host ? location.href = t : this.history.push(t)
            }
            ;
            shouldShowDocxUpload() {
                return !1 === this.mediaMatcher.matches
            }
            setTmpDocxCookie(e, t) {
                (0,
                Se.d)({
                    name: b.d6,
                    value: JSON.stringify({
                        id: e,
                        name: t
                    }),
                    lifetime: 5760
                })
            }
            onDocxInputChange = async e=>{
                if (!(e instanceof File))
                    return M.Z.trackEvent("WelcomeEditor", "word:unknown_error"),
                    void this.setState({
                        docxState: "error_unknown"
                    });
                if (null === e.name.match(/\.docx$/))
                    return M.Z.trackEvent("WelcomeEditor", "word:wrong_filetype"),
                    void this.setState({
                        docxState: "error_wrong_filetype",
                        docxFile: {
                            size: e.size,
                            name: e.name
                        }
                    });
                if (e.size > b.Tb)
                    return M.Z.trackEvent("WelcomeEditor", "word:file_too_large"),
                    void this.setState({
                        docxState: "error_file_too_big"
                    });
                this.history.push({
                    search: "source=upload"
                }),
                this.setState({
                    docxState: "upload"
                });
                try {
                    const t = this.props.data.user && this.props.data.user.id
                      , {html: n, id: r, name: o} = await q.Z.upload(t, e, this.props.data.ooxml_url, (e=>{
                        this.setState({
                            docxUploadProgress: e
                        })
                    }
                    ));
                    if (null === t)
                        this.setTmpDocxCookie(r, o),
                        this.setState({
                            docxState: "analyzing",
                            docxContent: n,
                            docxFile: {
                                size: e.size,
                                name: o
                            }
                        });
                    else {
                        const {id: e} = await ae.Z.add(o, n, null, null, !1, !1, "auto", r, null, null, {
                            csrfToken: this.props.data.csrf_token,
                            isUnloading: !1
                        });
                        location.href = `/editor/${e}`
                    }
                } catch (e) {
                    M.Z.trackEvent("WelcomeEditor", "word:failed", String(e)),
                    this.setState({
                        docxState: "error_processing"
                    })
                }
            }
            ;
            resetDocxUpload = e=>{
                if (M.Z.trackEvent("WelcomeEditor", "word:try_again"),
                e) {
                    const e = new URLSearchParams(this.history.location.search);
                    e.delete("source"),
                    this.history.replace({
                        search: e.toString()
                    })
                }
                this.setState((({docxReport: e})=>({
                    docxState: "pristine",
                    docxContent: null,
                    docxUploadProgress: 0,
                    docxFile: {
                        name: null,
                        size: 0
                    },
                    docxReport: {
                        language: e.language,
                        wordsCount: 0,
                        spellingErrors: 0,
                        grammarErrors: 0,
                        styleIssues: 0,
                        punctuationIssues: 0
                    }
                })))
            }
            ;
            getRoughAmountOfErrorsLabel(e) {
                switch (!0) {
                case 0 === e:
                    return "has no errors";
                case 1 === e:
                    return "has one error";
                case e <= 10:
                    return "has <= 10 errors";
                case e <= 25:
                    return "has <= 25 errors";
                case e <= 50:
                    return "has <= 50 errors";
                case e <= 100:
                    return "has <= 100 errors";
                default:
                    return "has > 100 errors"
                }
            }
            onDocxLtAssistantUpdate = e=>{
                if ("IN_PROGRESS" === e.checkStatus)
                    return;
                if ("TEXT_TOO_SHORT" === e.checkStatus)
                    return M.Z.trackEvent("WelcomeEditor", "word:failed", "text too short"),
                    void this.setState({
                        docxState: "error_text_too_short"
                    });
                if ("TEXT_TOO_LONG" === e.checkStatus)
                    return M.Z.trackEvent("WelcomeEditor", "word:failed", "text too long"),
                    void this.setState({
                        docxState: "error_text_too_long"
                    });
                if ("UNSUPPORTED_LANGUAGE" === e.checkStatus)
                    return M.Z.trackEvent("WelcomeEditor", "word:failed", `unsupported language ${e.languageCode || "<unknown>"}`),
                    void this.setState({
                        docxState: "error_unsupported_language"
                    });
                const t = [...e.errors, ...e.pickyErrors, ...e.premiumErrors, ...e.premiumPickyErrors]
                  , n = t.filter((({isSpellingError: e})=>e)).length
                  , r = t.filter((({isSpellingError: e, isStyleError: t, isPunctuationError: n})=>!e && !t && !n)).length
                  , o = t.filter((({isStyleError: e})=>e)).length
                  , s = t.filter((({isPunctuationError: e})=>e)).length
                  , a = new L.Z(e.currentText);
                M.Z.trackEvent("WelcomeEditor", "word:result", this.getRoughAmountOfErrorsLabel(t.length)),
                a.countCharacters() > 1e4 && M.Z.trackEvent("WelcomeEditor", "word:long_text"),
                this.setState({
                    docxState: "result",
                    docxContent: null,
                    docxReport: {
                        language: e.languageCode,
                        wordsCount: a.countWords(),
                        spellingErrors: n,
                        grammarErrors: r,
                        styleIssues: o,
                        punctuationIssues: s
                    }
                })
            }
            ;
            onPaste = e=>{
                e && (0,
                we.Z)(e) && e !== this.state.pasteSource && !this.pasteHintIgnoreTypes.includes(e) && (M.Z.trackEvent("WelcomeEditor", "paste_hint_teaser:show", e),
                this.setState({
                    pasteSource: e
                }))
            }
            ;
            onGoToLandingPage = ()=>{
                if (!this.state.pasteSource)
                    return;
                M.Z.trackEvent("WelcomeEditor", "paste_hint_teaser:click", this.state.pasteSource),
                this.onIgnorePasteHint(!1);
                const e = "word" === this.state.pasteSource ? "word" : "desktop-app";
                window.open(`https://languagetool.org/${e}`, "_blank")
            }
            ;
            onIgnorePasteHint = (e=!0)=>{
                const t = this.state.pasteSource;
                if (!t)
                    return;
                const n = [...this.pasteHintIgnoreTypes];
                n.includes(t) || n.push(t),
                this.pasteHintIgnoreTypes = n,
                e && M.Z.trackEvent("WelcomeEditor", "paste_hint_teaser:ignore", t),
                k.Z.set(b.h, n),
                this.setState({
                    pasteSource: null
                })
            }
            ;
            onModeChange = e=>{
                this.ltAssistantEditor?.setInteractionMode(e),
                this.setState({
                    mode: e
                })
            }
            ;
            onInsertExampleTextClick = ()=>{
                let e = O(this.state.selectedLanguage);
                if (e)
                    this.setState({
                        status: "CHECKING"
                    });
                else {
                    const t = "en-us";
                    this.setLanguage(t),
                    e = O(t)
                }
                this.ltTextarea.current?.setPlainText(e)
            }
            ;
            onSignificantChange = ()=>{
                this.setState({
                    status: "CHECKING"
                })
            }
            ;
            onErrorSelect = e=>{
                if (!this.state.ltAssistantState)
                    return;
                const t = this.state.ltAssistantState.displayedErrors.findIndex((t=>t.id === e.id));
                this.setState({
                    selectedErrorIndex: t
                }),
                this.ltTextarea.current?.setHighlightedError(e)
            }
            ;
            onErrorUnselect = ()=>{
                this.setState({
                    selectedErrorIndex: -1
                }),
                this.ltTextarea.current?.setHighlightedError(null)
            }
            ;
            onErrorHighlight = ()=>{
                const e = this.state.selectedErrorIndex > -1 ? this.state.ltAssistantState?.displayedErrors?.[this.state.selectedErrorIndex] : null;
                e && this.ltTextarea.current?.setHighlightedError(e)
            }
            ;
            onFixSelect = (e,t)=>{
                this.ltAssistantEditor && this.state.ltAssistantState && this.ltAssistantEditor.applyFix(e, t)
            }
            ;
            onErrorIgnore = e=>{
                if (!this.ltAssistantEditor)
                    return;
                const t = {
                    id: e.rule.id,
                    phrase: e.originalPhrase,
                    language: (0,
                    R.Z)(e.language.code)
                };
                this.setState({
                    ignoredRules: [...this.state.ignoredRules, t]
                }, (()=>{
                    this.ltAssistantEditor?.ignoreRule(t),
                    this.selectNextError()
                }
                ))
            }
            ;
            selectNextError = ()=>{
                if (!this.state.ltAssistantState || -1 === this.state.selectedErrorIndex)
                    return;
                const e = this.state.ltAssistantState.displayedErrors[this.state.selectedErrorIndex + 1]
                  , t = this.state.ltAssistantState.displayedErrors[this.state.selectedErrorIndex - 1];
                e ? (this.setState({
                    selectedErrorIndex: this.state.selectedErrorIndex
                }),
                this.ltTextarea.current?.setHighlightedError(e)) : t ? (this.setState({
                    selectedErrorIndex: this.state.selectedErrorIndex - 1
                }),
                this.ltTextarea.current?.setHighlightedError(t)) : (this.setState({
                    selectedErrorIndex: -1
                }),
                this.ltTextarea.current?.setHighlightedError(null))
            }
            ;
            onApplySynonym = e=>{
                this.ltAssistantEditor?.applySynonym(e)
            }
            ;
            onApplyRephrasing = (e,t)=>{
                this.ltAssistantEditor?.applyRephrasing(e, {
                    label: t,
                    language: (0,
                    R.Z)(this.state.selectedLanguage)
                }),
                this.ltAssistantEditor?.reportPhrase({
                    country: this.props.data.geoip.country || "",
                    chosenSentence: e.replacement,
                    originalSentence: e.source,
                    hasSubscription: this.isPremium
                })
            }
            ;
            onResetRemainingRephrasings = ()=>{
                if (0 !== this.state.remainingRephrasings)
                    return;
                const e = this.ltAssistantEditor?.getRemainingRephrasings();
                "number" == typeof e && e > 0 && (this.ltAssistantEditor?.enableRewriteMode(),
                this.setState({
                    remainingRephrasings: e
                }))
            }
            ;
            render() {
                const e = this.shouldShowDocxUpload()
                  , t = (0,
                r.jsx)(Z, {
                    onClear: this.onClear,
                    onCopy: this.onCopy,
                    onSave: this.onSave,
                    showSaveAction: this.state.showSaveAction,
                    showTextActions: this.state.showTextActions
                })
                  , {activeSource: n} = this.state;
                return (0,
                r.jsx)(o.StrictMode, {
                    children: (0,
                    r.jsxs)(de, {
                        children: [(0,
                        r.jsxs)("div", {
                            ref: this.welcomeEditor,
                            className: i()("welcome-editor__inner", {
                                "welcome-editor__inner--with-sidebar": this.state.showSidebar
                            }),
                            children: [(0,
                            r.jsx)(f, {
                                activeSource: n,
                                onLanguageChange: this.onLanguageChange,
                                selectedLanguage: this.state.selectedLanguage,
                                preferredLanguagesConfig: this.preferredLanguagesConfig,
                                documentActions: t,
                                docxState: this.state.docxState,
                                resetDocxUpload: this.resetDocxUpload
                            }), (0,
                            r.jsx)(l.Z, {
                                className: "welcome-editor__textarea",
                                isHidden: e && "upload" === n,
                                ref: this.ltTextarea,
                                content: this.initialContent,
                                language: this.state.forceLanguage ? this.state.selectedLanguage : "auto",
                                documentMode: "correction",
                                onLTAssistantEditor: this.onLTAssistantEditor,
                                onLTAssistantUpdate: this.onLTAssistantUpdate,
                                onInput: this.throttleOnInput.call,
                                onDictionaryAdd: this.onDictionaryAdd,
                                onRuleIgnore: this.onRuleIgnore,
                                ltAssistant: this.state.ltAssistant,
                                onPaste: this.onPaste,
                                onSignificantChange: this.onSignificantChange,
                                ignoredRules: this.state.ignoredRules
                            }), e && "input" !== n && (0,
                            r.jsx)(se, {
                                ltAssistant: this.state.docxLtAssistant,
                                language: this.state.forceLanguage ? this.state.selectedLanguage : "auto",
                                docxState: this.state.docxState,
                                docxContent: this.state.docxContent,
                                docxFile: this.state.docxFile,
                                docxReport: this.state.docxReport,
                                docxUploadProgress: this.state.docxUploadProgress,
                                onDocxInputChange: this.onDocxInputChange,
                                onLTAssistantUpdate: this.onDocxLtAssistantUpdate,
                                reset: this.resetDocxUpload,
                                pushHistory: this.pushHistory
                            }), this.state.pasteSource && ["word", "applemail", "iwork", "outlook"].includes(String(this.state.pasteSource)) && (0,
                            r.jsx)(ue.Z, {
                                headline: Ae.get("js.snack_bar.supported_paste_event_headline", {
                                    source: pe.Z.getSnackbarDisplayName(this.state.pasteSource) || this.state.pasteSource
                                }),
                                description: Ae.get("js.snack_bar.supported_paste_event_description", {
                                    source: pe.Z.getSnackbarDisplayName(this.state.pasteSource) || this.state.pasteSource
                                }),
                                type: this.state.pasteSource,
                                sticky: !0,
                                primaryButton: {
                                    text: Ae.get("js.snack_bar.supported_paste_event_primary_cta"),
                                    action: this.onGoToLandingPage
                                },
                                secondaryButton: {
                                    text: Ae.get("js.snack_bar.supported_paste_event_secondary_cta"),
                                    action: this.onIgnorePasteHint
                                }
                            }), (0,
                            r.jsx)(T, {
                                activeSource: n,
                                showDocxUpload: e,
                                ltAssistantState: this.state.ltAssistantState,
                                textStatistics: this.state.textStatistics,
                                premiumErrors: this.state.premiumErrors,
                                isLoggedIn: !!this.props.data.user,
                                remainingRephrasings: this.state.remainingRephrasings
                            }), "account" === this.state.currentModal && (0,
                            r.jsx)(N.Z, {
                                className: "modal--account-teaser",
                                title: Ae.get("js.account_modal.account_headline"),
                                onClose: this.onModalClose,
                                children: (0,
                                r.jsxs)("div", {
                                    className: "account-teaser",
                                    children: [(0,
                                    r.jsx)("h3", {
                                        className: "headline headline--4",
                                        children: Ae.get("js.account_modal.account_headline")
                                    }), (0,
                                    r.jsx)("p", {
                                        className: "paragraph paragraph--4",
                                        children: Ae.get("js.account_modal.account_text")
                                    }), (0,
                                    r.jsxs)("ul", {
                                        className: "check-list",
                                        children: [(0,
                                        r.jsx)("li", {
                                            children: Ae.get("js.account_modal.account_reason_1")
                                        }), (0,
                                        r.jsx)("li", {
                                            children: Ae.get("js.account_modal.account_reason_2")
                                        }), (0,
                                        r.jsx)("li", {
                                            children: Ae.get("js.account_modal.account_reason_3")
                                        }), (0,
                                        r.jsx)("li", {
                                            children: Ae.get("js.account_modal.account_reason_4")
                                        }), (0,
                                        r.jsx)("li", {
                                            children: Ae.get("js.account_modal.account_reason_6")
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "button-wrapper",
                                        children: [(0,
                                        r.jsx)("a", {
                                            className: "btn btn--primary",
                                            href: "/register",
                                            children: Ae.get("js.sign_up_button")
                                        }), (0,
                                        r.jsx)("button", {
                                            className: "btn btn--primary btn--outline",
                                            onClick: this.onModalClose,
                                            children: Ae.get("js.maybe_later_button")
                                        })]
                                    })]
                                })
                            })]
                        }), "input" === n && this.state.showSidebar && (0,
                        r.jsx)(ve, {
                            ltAssistantState: this.state.ltAssistantState,
                            mode: this.state.mode,
                            isPremium: this.isPremium,
                            isLoggedIn: !!this.props.data.user,
                            status: this.state.status,
                            onModeChange: this.onModeChange,
                            pushHistory: this.pushHistory,
                            onInsertExampleTextClick: this.onInsertExampleTextClick,
                            errorLabels: this.props.data.error_labels,
                            selectedErrorIndex: this.state.selectedErrorIndex,
                            synonyms: this.state.synonyms,
                            rephrasings: this.state.rephrasings,
                            remainingRephrasings: this.state.remainingRephrasings,
                            selectedLanguage: this.state.selectedLanguage,
                            onErrorSelect: this.onErrorSelect,
                            onDictionaryAdd: this.onSidebarDictionaryAdd,
                            onErrorIgnore: this.onErrorIgnore,
                            onErrorUnselect: this.onErrorUnselect,
                            onFixSelect: this.onFixSelect,
                            onApplySynonym: this.onApplySynonym,
                            onApplyRephrasing: this.onApplyRephrasing,
                            resetRemainingRephrasings: this.onResetRemainingRephrasings,
                            onDocxInputChange: this.onDocxInputChange
                        })]
                    })
                })
            }
        }
        const Ie = De
    }
    ,
    39043: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>i
        });
        var r = n(24246)
          , o = n(60042)
          , s = n.n(o)
          , a = n(42716);
        const i = e=>{
            const t = e.tooltipPosition ? "clickable-icon__tooltip--" + e.tooltipPosition : "clickable-icon__tooltip--top-right"
              , n = "string" == typeof e.href ? "a" : "button";
            return (0,
            r.jsxs)(n, {
                className: s()(e.className, "clickable-icon", {
                    "clickable-icon--active": e.isActive,
                    "clickable-icon--green-notification": e.inlineTeaserType && "DISCOUNT_TIMER" !== e.inlineTeaserType,
                    "clickable-icon--orange-notification": "DISCOUNT_TIMER" === e.inlineTeaserType
                }),
                disabled: e.isDisabled,
                onClick: e.onClick,
                "data-testid": e.testId,
                href: e.href,
                children: [e.text && (0,
                r.jsx)("span", {
                    className: "clickable-icon__label",
                    children: e.text
                }), e.children, e.tooltip && !1 === (0,
                a.Z)() && (0,
                r.jsx)("span", {
                    className: s()("clickable-icon__tooltip", t),
                    children: e.tooltip || e.text
                })]
            })
        }
    }
    ,
    18459: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>L
        });
        var r = n(24246)
          , o = n(44444)
          , s = n(32835)
          , a = n(27378)
          , i = n(60042)
          , c = n.n(i)
          , l = n(36461);
        const d = (0,
        o.Z)()
          , u = e=>{
            const [t,n] = ((e,t)=>{
                switch (!0) {
                case "" === e && Boolean(t.match(/[a-z0-9]{2,}/)):
                    return ["error-list-item__fix--strikethrough", t];
                case "" === e:
                    return ["error-list-item__fix--delete", d.get("js.error.delete_word")];
                case " " === e && Boolean(t.match(/^\s\s+$/)):
                    return ["error-list-item__fix--optional", d.get("js.error.remove_extra_whitespace")];
                case " " === e && Boolean(t.match(/^[-\s]+$/)):
                    return ["error-list-item__fix--optional", d.get("js.error.replace_with_whitespace")];
                default:
                    return ["", e]
                }
            }
            )(e.fix.value, e.originalPhrase);
            return (0,
            r.jsx)("button", {
                className: c()("error-list-item__fix", t),
                onClick: ()=>e.onClick(e.fix),
                title: e.fix.shortDescription,
                children: n
            })
        }
        ;
        var p = n(9685);
        function h(e, t, n) {
            return n[void 0 === n[t] ? "en" : t][e]
        }
        function _(e, t) {
            return e.shortDescription ? e.shortDescription : e.isSpellingError ? h("spelling_error", (0,
            p.Z)(e.language.code), t) : e.isStyleError ? h("style_error", (0,
            p.Z)(e.language.code), t) : e.isPunctuationError ? h("punctuation_error", (0,
            p.Z)(e.language.code), t) : h("grammar_error", (0,
            p.Z)(e.language.code), t)
        }
        var m = n(39043);
        const g = (0,
        o.Z)();
        class f extends a.Component {
            state = {
                selected: !1,
                height: 48
            };
            fullViewRef = e=>{
                if (e) {
                    const t = e.offsetHeight;
                    this.props.onSelect(this.props.error, t),
                    this.setState({
                        height: t
                    })
                }
            }
            ;
            previewRef = e=>{
                e && this.props.selected && this.props.onUnselect(this.props.error)
            }
            ;
            onPreviewClick = ()=>{
                this.setState({
                    selected: !0
                })
            }
            ;
            onFixClick = e=>{
                const t = this.props.error.fixes.indexOf(e);
                t > -1 && this.props.onFixSelect(this.props.error, t)
            }
            ;
            onUnselect = ()=>{
                this.setState({
                    selected: !1,
                    height: 48
                })
            }
            ;
            onIgnore = ()=>this.props.onErrorIgnore(this.props.error);
            onDictionaryAdd = ()=>this.props.onDictionaryAdd(this.props.error.originalPhrase);
            onDetailsClick = ()=>{
                if (this.props.error.rule.urls && this.props.error.rule.urls[0])
                    return window.open(this.props.error.rule.urls[0].value, "_blank")
            }
            ;
            getHostname = ()=>this.props.error.rule.urls && this.props.error.rule.urls[0] ? new URL(this.props.error.rule.urls[0].value).hostname : "unknown";
            componentDidUpdate(e, t) {
                const n = this.props.selected !== t.selected
                  , r = !0 === this.props.selected;
                n && this.setState((({height: e})=>({
                    selected: !!this.props.selected,
                    height: r ? e : 48
                })))
            }
            render() {
                const e = _(this.props.error, this.props.errorLabels);
                return (0,
                r.jsxs)("div", {
                    className: c()("error-list-item", `error-list-item--${(0,
                    l.Z)(this.props.error)}`, {
                        "js-error-list-item-selected": this.props.selected,
                        "error-list-item--selected": this.props.selected,
                        "error-list-item--picky": this.props.error.isPicky
                    }),
                    style: {
                        height: this.props.isMobile ? "100%" : this.state.height
                    },
                    children: [this.state.selected || this.props.isMobile ? (0,
                    r.jsxs)("div", {
                        className: "error-list-item__content",
                        ref: this.fullViewRef,
                        children: [(0,
                        r.jsx)("h4", {
                            className: "error-list-item__headline",
                            onClick: this.onUnselect,
                            children: e
                        }), (0,
                        r.jsxs)("p", {
                            className: "error-list-item__description",
                            children: [this.props.error.description, this.props.error.rule.urls && this.props.error.rule.urls[0] && (0,
                            r.jsx)("span", {
                                className: "icon icon--info error-list-item__info",
                                onClick: this.onDetailsClick,
                                title: g.get("js.error.more_info_external", {
                                    website: this.getHostname()
                                })
                            })]
                        }), !!this.props.error.fixes.length && (0,
                        r.jsx)("div", {
                            className: "error-list-item__fixes",
                            children: this.props.error.fixes.map(((e,t)=>(0,
                            r.jsx)(u, {
                                onClick: this.onFixClick,
                                fix: e,
                                originalPhrase: this.props.error.originalPhrase
                            }, t)))
                        }), this.props.error.isSpellingError && (0,
                        r.jsx)(m.Z, {
                            className: "error-list-item__link error-list-item__link--dictionary icon--dictionary",
                            onClick: this.onDictionaryAdd,
                            text: this.props.isMobile ? void 0 : g.get("js.error.add_to_dictionary"),
                            tooltip: g.get("js.error.add_to_dictionary"),
                            tooltipPosition: "bottom-right"
                        }), (0,
                        r.jsx)(m.Z, {
                            className: "error-list-item__link error-list-item__link--ignore icon--ignore",
                            onClick: this.onIgnore,
                            text: this.props.isMobile ? void 0 : g.get("js.error.ignore_error"),
                            tooltip: g.get("js.error.ignore_error"),
                            tooltipPosition: "bottom-right"
                        })]
                    }) : (0,
                    r.jsxs)("div", {
                        className: "error-list-item__preview",
                        onClick: this.onPreviewClick,
                        ref: this.previewRef,
                        children: [(0,
                        r.jsx)("b", {
                            children: this.props.error.originalPhrase
                        }), " ", (0,
                        r.jsx)("span", {
                            children: e
                        })]
                    }), this.props.error.isPicky && (0,
                    r.jsx)("span", {
                        className: "icon icon--glasses error-list-item__picky",
                        title: g.get("js.error.picky_error")
                    })]
                })
            }
        }
        const y = f;
        var v = n(85725)
          , b = n(35954);
        class x extends a.Component {
            ref = (0,
            a.createRef)();
            throttleRecalculate;
            constructor(e) {
                super(e),
                this.state = {
                    itemsToRender: [],
                    placeholderTopHeight: "0px",
                    placeholderBottomHeight: "0px",
                    displayOverflowHint: !1
                },
                this.throttleRecalculate = (0,
                v.P)(this.recalculate, 100)
            }
            onWindowResize = ()=>{
                this.props.mobileRenderedErrorItem || this.throttleRecalculate.call()
            }
            ;
            onScroll = ()=>{
                this.props.mobileRenderedErrorItem || this.throttleRecalculate.call()
            }
            ;
            recalculate = (e=this.props.itemCount,t=this.props.selectedIndexHeight,n=this.props.headerHeight)=>{
                if (!this.ref.current)
                    return;
                const r = this.ref.current.scrollTop
                  , o = this.ref.current.offsetHeight
                  , s = this.props.itemHeight + this.props.itemMarginBottom;
                n = n || 0;
                const a = Math.ceil(o / s)
                  , i = Math.max(Math.floor((r - n) / s - 4), 0)
                  , c = Math.min(i + a + 4, e - 1)
                  , l = [];
                for (let e = i; e <= c; e++)
                    l.push(e);
                let d = i * s;
                this.props.selectedIndex && -1 !== this.props.selectedIndex && t && this.props.selectedIndex < i && (d = d - this.props.itemHeight + t);
                let u = (e - c) * s;
                this.props.selectedIndex && -1 !== this.props.selectedIndex && t && this.props.selectedIndex > c && (u = u - this.props.itemHeight + t),
                this.setState({
                    itemsToRender: l,
                    placeholderTopHeight: d + "px",
                    placeholderBottomHeight: u + "px"
                })
            }
            ;
            toggleVisualOverflowHint = ()=>this.setState({
                displayOverflowHint: (this.ref.current?.scrollTop ?? 0) > 0
            });
            componentDidMount() {
                window.addEventListener("resize", this.onWindowResize),
                void 0 === this.props.mobileRenderedErrorItem ? (this.recalculate(this.props.itemCount),
                this.ref.current?.addEventListener("scroll", this.toggleVisualOverflowHint),
                this.toggleVisualOverflowHint()) : this.setState({
                    itemsToRender: [this.props.mobileRenderedErrorItem]
                })
            }
            static getDerivedStateFromProps(e) {
                return void 0 !== e.mobileRenderedErrorItem ? {
                    itemsToRender: [e.mobileRenderedErrorItem]
                } : {}
            }
            componentDidUpdate(e) {
                e.itemCount === this.props.itemCount && e.selectedIndex === this.props.selectedIndex && e.selectedIndexHeight === this.props.selectedIndexHeight && e.headerHeight === this.props.headerHeight || this.recalculate(this.props.itemCount)
            }
            componentWillUnmount() {
                window.removeEventListener("resize", this.onWindowResize),
                this.ref.current?.removeEventListener("scroll", this.toggleVisualOverflowHint)
            }
            render() {
                return (0,
                r.jsxs)(r.Fragment, {
                    children: [this.state.displayOverflowHint && (0,
                    r.jsx)("div", {
                        className: "auto-list-visual-hint"
                    }), (0,
                    r.jsxs)(b.Z, {
                        className: c()("auto-list", this.props.className, {
                            "auto-list--overflow-hint": this.state.displayOverflowHint
                        }),
                        scrollableRef: this.ref,
                        onScroll: this.onScroll,
                        children: [this.props.header, (0,
                        r.jsx)("div", {
                            className: "auto-list__top-placeholder",
                            style: {
                                height: this.state.placeholderTopHeight
                            }
                        }), this.state.itemsToRender.map((e=>this.props.render({
                            index: e
                        }))), (0,
                        r.jsx)("div", {
                            className: "auto-list__bottom-placeholder",
                            style: {
                                height: this.state.placeholderBottomHeight
                            }
                        })]
                    })]
                })
            }
        }
        const w = x;
        var E = n(76994);
        const S = (0,
        o.Z)();
        class T extends a.Component {
            state = {
                selected: !1,
                height: 48
            };
            fullViewRef = e=>{
                if (e) {
                    const t = e.offsetHeight;
                    this.props.onSelect(this.props.error, t),
                    this.setState({
                        height: t
                    })
                }
            }
            ;
            previewRef = e=>{
                e && this.props.selected && this.props.onUnselect(this.props.error)
            }
            ;
            onPreviewClick = ()=>{
                this.setState({
                    selected: !0
                })
            }
            ;
            onUnselect = ()=>{
                this.setState({
                    selected: !1,
                    height: 48
                })
            }
            ;
            onIgnore = ()=>this.props.onErrorIgnore(this.props.error);
            componentDidUpdate(e, t) {
                const n = this.props.selected !== t.selected
                  , r = !0 === this.props.selected;
                n && this.setState((({height: e})=>({
                    selected: !!this.props.selected,
                    height: r ? e : 48
                })))
            }
            render() {
                const e = _(this.props.error, this.props.errorLabels);
                return (0,
                r.jsxs)("div", {
                    className: c()("error-list-item", `error-list-item--${(0,
                    l.Z)(this.props.error)}`, {
                        "js-error-list-item-selected": this.props.selected,
                        "error-list-item--selected": this.props.selected,
                        "error-list-item--picky": this.props.error.isPicky
                    }),
                    style: {
                        height: this.props.isMobile ? "100%" : this.state.height
                    },
                    children: [this.state.selected || this.props.isMobile ? (0,
                    r.jsxs)("div", {
                        className: "error-list-item__content",
                        ref: this.fullViewRef,
                        children: [(0,
                        r.jsx)("h4", {
                            className: "error-list-item__headline",
                            onClick: this.onUnselect,
                            children: e
                        }), (0,
                        r.jsx)("p", {
                            className: "error-list-item__description",
                            children: S.get("js.error.premium_error_description")
                        }), (0,
                        r.jsx)("a", {
                            className: "error-list-item__fix error-list-item__fix--premium",
                            href: this.props.upgradeURL,
                            target: "_blank",
                            children: S.get("js.error.premium_error_button")
                        }), (0,
                        r.jsx)(m.Z, {
                            className: "error-list-item__link error-list-item__link--ignore icon--ignore",
                            onClick: this.onIgnore,
                            text: this.props.isMobile ? void 0 : S.get("js.error.ignore_error"),
                            tooltip: S.get("js.error.ignore_error"),
                            tooltipPosition: "bottom-right"
                        })]
                    }) : (0,
                    r.jsxs)("div", {
                        className: "error-list-item__preview",
                        onClick: this.onPreviewClick,
                        ref: this.previewRef,
                        children: [(0,
                        r.jsx)("b", {
                            children: this.props.error.originalPhrase
                        }), " ", (0,
                        r.jsx)("span", {
                            children: e
                        })]
                    }), this.props.isMobile && (0,
                    r.jsx)("span", {
                        className: "icon icon--premium-orange error-list-item__premium",
                        title: S.get("js.error.premium_error")
                    })]
                })
            }
        }
        const k = T;
        const j = (0,
        o.Z)();
        class N extends a.Component {
            constructor(e) {
                super(e),
                this.state = {
                    selectedErrorIndex: this.props.selectedErrorIndex,
                    selectedHeight: void 0
                }
            }
            onSelect = (e,t)=>{
                this.props.onErrorSelect(e);
                const n = this.props.errors.indexOf(e);
                this.setState({
                    selectedErrorIndex: n,
                    selectedHeight: t
                })
            }
            ;
            onUnselect = ()=>{
                this.props.onErrorUnselect(),
                this.setState({
                    selectedErrorIndex: -1,
                    selectedHeight: void 0
                })
            }
            ;
            renderItem = (e,t)=>{
                const n = this.props.errors[e];
                return n ? "HIDDEN_RULE" === n.rule.id ? (0,
                r.jsx)(k, {
                    selected: Boolean(this.state.selectedErrorIndex === e),
                    error: n,
                    onSelect: this.onSelect,
                    onUnselect: this.onUnselect,
                    upgradeURL: t,
                    onErrorIgnore: this.props.onErrorIgnore,
                    errorLabels: this.props.errorLabels,
                    isMobile: this.props.isMobile
                }, n.id) : (0,
                r.jsx)(y, {
                    selected: Boolean(this.state.selectedErrorIndex === e),
                    error: n,
                    onSelect: this.onSelect,
                    onUnselect: this.onUnselect,
                    onFixSelect: this.props.onFixSelect,
                    onDictionaryAdd: this.props.onDictionaryAdd,
                    onErrorIgnore: this.props.onErrorIgnore,
                    errorLabels: this.props.errorLabels,
                    isMobile: this.props.isMobile
                }, n.id) : null
            }
            ;
            static getDerivedStateFromProps(e, t) {
                return e.selectedErrorIndex !== t.selectedErrorIndex ? {
                    selectedErrorIndex: e.selectedErrorIndex
                } : null
            }
            getHeader(e, t) {
                return (0,
                r.jsxs)(r.Fragment, {
                    children: [!!e.grammarErrors.length && (0,
                    r.jsx)("div", {
                        children: (0,
                        r.jsxs)("a", {
                            className: "premium-list-item premium-list-item--grammar",
                            href: t,
                            target: "_blank",
                            rel: "noreferrer",
                            children: [(0,
                            r.jsx)("span", {
                                className: "premium-list-item__count",
                                children: e.grammarErrors.length
                            }), j.choice("js.mistake_count.more_grammar_issues_found", e.grammarErrors.length), (0,
                            r.jsx)("em", {
                                className: "premium-list-item__badge",
                                children: "Premium"
                            })]
                        })
                    }, `grammar:${e.grammarErrors.length}`), !!e.punctuationErrors.length && (0,
                    r.jsx)("div", {
                        children: (0,
                        r.jsxs)("a", {
                            className: "premium-list-item premium-list-item--punctuation",
                            href: t,
                            target: "_blank",
                            rel: "noreferrer",
                            children: [(0,
                            r.jsx)("span", {
                                className: "premium-list-item__count",
                                children: e.punctuationErrors.length
                            }), j.choice("js.mistake_count.more_punctuation_issues_found", e.punctuationErrors.length), (0,
                            r.jsx)("em", {
                                className: "premium-list-item__badge",
                                children: "Premium"
                            })]
                        })
                    }, `punct:${e.punctuationErrors.length}`), !!e.styleErrors.length && (0,
                    r.jsx)("div", {
                        children: (0,
                        r.jsxs)("a", {
                            className: "premium-list-item premium-list-item--style",
                            href: t,
                            target: "_blank",
                            rel: "noreferrer",
                            children: [(0,
                            r.jsx)("span", {
                                className: "premium-list-item__count",
                                children: e.styleErrors.length
                            }), j.choice("js.mistake_count.more_style_issues_found", e.styleErrors.length), (0,
                            r.jsx)("em", {
                                className: "premium-list-item__badge",
                                children: "Premium"
                            })]
                        })
                    }, `style:${e.styleErrors.length}`)]
                })
            }
            render() {
                const e = this.props.premiumErrors.length + this.props.premiumPickyErrors.length
                  , t = (0,
                E.Z)([...this.props.premiumErrors, ...this.props.premiumPickyErrors])
                  , n = Math.min(t.grammarErrors.length + t.punctuationErrors.length + t.punctuationErrors.length, 3)
                  , o = (0,
                s.B)(this.props.context + "-premium-matches", t);
                return (0,
                r.jsx)("div", {
                    className: c()("error-list", this.props.className),
                    children: this.props.isMobile ? this.renderItem(this.props.selectedErrorIndex, o) : (0,
                    r.jsxs)(r.Fragment, {
                        children: [this.props.showHeadline && (0,
                        r.jsxs)("h3", {
                            className: "headline headline--suggestions",
                            children: [(0,
                            r.jsxs)("span", {
                                children: [j.get("js.sidebar.suggestions_headline"), (0,
                                r.jsx)("i", {
                                    children: this.props.errors.length
                                })]
                            }), e > 0 && (0,
                            r.jsxs)("a", {
                                className: "headline--suggestions__premium-suggestions",
                                href: o,
                                target: "_blank",
                                rel: "noreferrer",
                                children: ["Premium", (0,
                                r.jsx)("span", {
                                    className: c()("headline--suggestions__premium-suggestions__suggestions mistake-count"),
                                    children: e < 10 ? e : "9+"
                                })]
                            })]
                        }), this.props.isIncompleteResult && (0,
                        r.jsxs)("div", {
                            className: "error-list__incomplete-results-notice icon--warning",
                            children: [(0,
                            r.jsx)("strong", {
                                className: "error-list__incomplete-results-notice__headline",
                                children: j.get("js.sidebar.incomplete_results")
                            }), (0,
                            r.jsx)("br", {}), (0,
                            r.jsx)("span", {
                                className: "error-list__incomplete-results-notice__description",
                                children: j.get("js.sidebar.incomplete_results_description")
                            })]
                        }), (0,
                        r.jsx)(w, {
                            className: "error-list__auto-list",
                            itemCount: this.props.errors.length,
                            itemHeight: 48,
                            itemMarginBottom: 8,
                            header: this.getHeader(t, o),
                            headerHeight: 56 * n,
                            selectedIndex: this.state.selectedErrorIndex,
                            selectedIndexHeight: this.state.selectedHeight,
                            render: ({index: e})=>this.renderItem(e, o)
                        })]
                    })
                })
            }
        }
        const C = N
          , P = e=>(0,
        r.jsxs)("div", {
            className: "error-list-skeleton",
            children: [e.showHeadline && (0,
            r.jsx)("div", {
                className: "error-list-skeleton__headline"
            }), (0,
            r.jsx)("div", {
                className: "error-list-skeleton__item"
            }), (0,
            r.jsx)("div", {
                className: "error-list-skeleton__item"
            }), (0,
            r.jsx)("div", {
                className: "error-list-skeleton__item"
            }), (0,
            r.jsx)("div", {
                className: "error-list-skeleton__item"
            }), (0,
            r.jsx)("div", {
                className: "error-list-skeleton__item"
            }), (0,
            r.jsx)("div", {
                className: "error-list-skeleton__item"
            }), (0,
            r.jsx)("div", {
                className: "error-list-skeleton__item"
            }), (0,
            r.jsx)("div", {
                className: "error-list-skeleton__item"
            })]
        })
          , A = (0,
        o.Z)()
          , L = e=>{
            const t = e.premiumErrors.concat(e.premiumPickyErrors);
            switch (!0) {
            case e.loading:
                return (0,
                r.jsx)(P, {
                    showHeadline: e.showHeadline
                });
            case "TEXT_TOO_SHORT" === e.status:
                return (0,
                r.jsxs)("div", {
                    className: "info-box info-box--vertically-centered info-box--character info-box--no-errors-found",
                    children: [(0,
                    r.jsx)("div", {
                        className: "info-box__headline",
                        children: A.get("js.sidebar.no_errors_title")
                    }), (0,
                    r.jsx)("div", {
                        className: "info-box__text",
                        children: A.get("js.sidebar.no_errors_text")
                    })]
                });
            case "TEXT_TOO_LONG" === e.status && !0 === e.isPremiumUser:
                return (0,
                r.jsxs)("div", {
                    className: "info-box info-box--vertically-centered info-box--character info-box--failure",
                    children: [(0,
                    r.jsx)("div", {
                        className: "info-box__headline",
                        children: A.get("js.sidebar.status_text_too_long")
                    }), (0,
                    r.jsx)("div", {
                        className: "info-box__text",
                        children: A.get("js.sidebar.text_too_long")
                    })]
                });
            case "TEXT_TOO_LONG" === e.status && !1 === e.isPremiumUser:
                return (0,
                r.jsxs)("div", {
                    className: "info-box info-box--vertically-centered info-box--premium info-box--wide",
                    children: [(0,
                    r.jsx)("div", {
                        className: "info-box__headline",
                        children: A.get("js.sidebar.status_text_too_long")
                    }), (0,
                    r.jsx)("div", {
                        className: "info-box__text",
                        children: A.get("js.sidebar.text_too_long_premium")
                    }), (0,
                    r.jsx)("a", {
                        className: "btn btn--upgrade",
                        href: (0,
                        s.Z)(e.context + "-text-too-long"),
                        target: "_blank",
                        rel: "noreferrer",
                        children: A.get("js.sidebar.upgrade_button")
                    })]
                });
            case "FAILED" === e.status:
                return (0,
                r.jsxs)("div", {
                    className: "info-box info-box--vertically-centered info-box--character info-box--failure",
                    children: [(0,
                    r.jsx)("div", {
                        className: "info-box__headline",
                        children: A.get("js.sidebar.error_title")
                    }), (0,
                    r.jsx)("div", {
                        className: "info-box__text",
                        children: e.statusMessage ? e.statusMessage : A.get("js.sidebar.error_message")
                    })]
                });
            case "UNSUPPORTED_LANGUAGE" === e.status:
                return (0,
                r.jsxs)("div", {
                    className: "info-box info-box--vertically-centered info-box--character info-box--failure",
                    children: [(0,
                    r.jsx)("div", {
                        className: "info-box__headline",
                        children: A.get("js.sidebar.error_title")
                    }), (0,
                    r.jsx)("div", {
                        className: "info-box__text",
                        children: A.get("js.status_unknown_language")
                    })]
                });
            case e.displayedErrors.length > 0 || e.isIncompleteResult:
                return (0,
                r.jsx)(C, {
                    errors: e.displayedErrors,
                    errorLabels: e.errorLabels,
                    premiumErrors: e.premiumErrors,
                    premiumPickyErrors: e.premiumPickyErrors,
                    selectedErrorIndex: e.isMobile && e.selectedErrorIndex < 0 ? 0 : e.selectedErrorIndex,
                    isIncompleteResult: e.isIncompleteResult,
                    onErrorSelect: e.onErrorSelect,
                    onErrorUnselect: e.onErrorUnselect,
                    onFixSelect: e.onFixSelect,
                    onErrorIgnore: e.onErrorIgnore,
                    onDictionaryAdd: e.onDictionaryAdd,
                    isMobile: e.isMobile,
                    context: e.context,
                    showHeadline: e.showHeadline
                });
            case e.premiumErrors.length > 0 || e.premiumPickyErrors.length > 0:
                return (0,
                r.jsxs)("div", {
                    className: "info-box info-box--vertically-centered info-box--premium info-box--wide",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "info-box__headline",
                        children: [t.length, " ", A.choice("js.mistake_count.more_premium_writing_issues_found", t.length)]
                    }), (0,
                    r.jsx)("div", {
                        className: "info-box__text",
                        children: A.get("js.sidebar.premium_text")
                    }), (0,
                    r.jsx)("a", {
                        className: "btn btn--upgrade",
                        href: (0,
                        s.Z)(e.context + "-premium-matches", t),
                        target: "_blank",
                        rel: "noreferrer",
                        children: A.get("js.sidebar.upgrade_button")
                    }), e.ignoredRules.length > 0 && e.onAllRulesEnable && (0,
                    r.jsx)("div", {
                        className: "info-box__link",
                        onClick: e.onAllRulesEnable,
                        children: A.choice("js.status_ignored_rules", e.ignoredRules.length, {
                            value: String(e.ignoredRules.length)
                        })
                    })]
                });
            case e.pickyErrors.length > 0:
                return (0,
                r.jsxs)("div", {
                    className: "info-box info-box--vertically-centered info-box--character info-box--no-errors-found",
                    children: [(0,
                    r.jsx)("div", {
                        className: "info-box__headline",
                        children: A.get("js.sidebar.picky_title")
                    }), (0,
                    r.jsx)("div", {
                        className: "info-box__text",
                        children: "welcome-editor" === e.context ? A.get("js.sidebar.welcome_editor_picky_text") : A.get("js.sidebar.picky_text")
                    }), "welcome-editor" === e.context && (0,
                    r.jsx)("a", {
                        className: "btn btn--prominent-blue",
                        href: "/editor/new?store=true",
                        children: A.get("js.sidebar.go_to_editor_link")
                    }), e.ignoredRules.length > 0 && e.onAllRulesEnable && (0,
                    r.jsx)("div", {
                        className: "info-box__link",
                        onClick: e.onAllRulesEnable,
                        children: A.choice("js.status_ignored_rules", e.ignoredRules.length, {
                            value: String(e.ignoredRules.length)
                        })
                    })]
                });
            default:
                return (0,
                r.jsxs)("div", {
                    className: "info-box info-box--vertically-centered info-box--character info-box--no-errors-found",
                    children: [(0,
                    r.jsx)("div", {
                        className: "info-box__headline",
                        children: A.get("js.sidebar.no_errors_title")
                    }), (0,
                    r.jsx)("div", {
                        className: "info-box__text",
                        children: A.get("js.sidebar.no_errors_text")
                    }), e.ignoredRules.length > 0 && e.onAllRulesEnable && (0,
                    r.jsx)("div", {
                        className: "info-box__link",
                        onClick: e.onAllRulesEnable,
                        children: A.choice("js.status_ignored_rules", e.ignoredRules.length, {
                            value: String(e.ignoredRules.length)
                        })
                    })]
                })
            }
        }
    }
    ,
    82698: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>G
        });
        var r = n(24246)
          , o = n(27378)
          , s = n(44444)
          , a = n(60042)
          , i = n.n(a);
        const c = (e,t)=>{
            const n = (0,
            o.useRef)()
              , [r,s] = (0,
            o.useState)(!0)
              , [a,i] = (0,
            o.useState)(e);
            return (0,
            o.useEffect)((()=>("number" == typeof n.current && clearTimeout(n.current),
            "loading" === e ? t() ? (n.current = window.setTimeout((()=>{
                s(!1),
                i("loading")
            }
            ), 500),
            s(!0)) : i("loading") : (s(!1),
            i(e)),
            ()=>{
                "number" == typeof n.current && clearTimeout(n.current)
            }
            )), [e, t]),
            [r, a]
        }
        ;
        var l = n(8686);
        const d = ({topic: e, status: t, hasContent: n, language: r})=>{
            const s = n();
            (0,
            o.useEffect)((()=>{
                "failed" === t && l.Z.trackEvent("Rewriting", `loading_ ${e}_failed`, r),
                "succeeded" === t && !1 === s && l.Z.trackEvent("Rewriting", `no_ ${e}_found`, r)
            }
            ), [t, s, r, e])
        }
          , u = ["source", "onApplySynonym"];
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(n), !0).forEach((function(t) {
                    _(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function _(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r)
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function m(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, s = Object.keys(e);
                for (r = 0; r < s.length; r++)
                    n = s[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++)
                    n = s[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        const g = (0,
        s.Z)();
        let f = 0;
        const y = ({source: e})=>"string" == typeof e ? (0,
        r.jsxs)("h3", {
            className: "rewrite-suggestions__headline",
            children: [g.get("js.sidebar.mode_rewriting_caption"), (0,
            r.jsx)("i", {
                className: "rewrite-suggestions__headline__accented",
                children: e
            })]
        }) : null
          , v = e=>{
            let {source: t, onApplySynonym: n} = e
              , s = m(e, u);
            const a = s.result.synonymSets.length > 0
              , [l,p] = c(s.state, (()=>a))
              , [_,v] = (0,
            o.useState)(!1)
              , b = s.result.synonymSets.length > 1 || s.result.synonymSets[0]?.synonyms.length > 4
              , x = a ? [h(h({}, s.result.synonymSets[0]), {}, {
                synonyms: s.result.synonymSets[0].synonyms.slice(0, 4)
            })] : []
              , w = ()=>v(!_)
              , E = e=>e.stopPropagation();
            if (d({
                topic: "synonyms",
                hasContent: ()=>a,
                language: s.language,
                status: p
            }),
            "loading" === p)
                return (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(y, {
                        source: t
                    }), (0,
                    r.jsx)("div", {
                        className: "rewrite-box rewrite-box--loading"
                    })]
                });
            if ("failed" === p)
                return (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(y, {
                        source: t
                    }), (0,
                    r.jsx)("div", {
                        className: "rewrite-box",
                        children: (0,
                        r.jsx)("p", {
                            className: "rewrite-box__message",
                            children: g.get("js.sidebar.mode_rewriting_synonyms_failed")
                        })
                    })]
                });
            if ("succeeded" === p && a) {
                const e = (0,
                r.jsx)(r.Fragment, {
                    children: "de" !== s.language && (0,
                    r.jsxs)("div", {
                        className: "rewrite-box__synonyms-source",
                        children: ["Source:", (0,
                        r.jsx)("a", {
                            href: s.result.dataSource.sourceUrl,
                            target: "_blank",
                            className: "rewrite-box__synonyms-source__link",
                            children: s.result.dataSource.sourceName
                        })]
                    })
                });
                return (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(y, {
                        source: t
                    }), (0,
                    r.jsxs)("div", {
                        className: i()("rewrite-box", {
                            "rewrite-box--disabled": l
                        }),
                        children: [(_ ? s.result.synonymSets : x).map((({title: e, type: t, synonyms: o},s)=>(0,
                        r.jsxs)("div", {
                            className: "rewrite-box__synonyms",
                            children: [(0,
                            r.jsx)("h4", {
                                className: i()("rewrite-box__caption", {
                                    "rewrite-box__caption--first": 0 === s
                                }),
                                children: e
                            }), o.map((({word: o})=>{
                                return (0,
                                r.jsx)("button", {
                                    className: "rewrite-box__suggestion",
                                    onMouseDown: E,
                                    onClick: ()=>(e=>{
                                        n(e),
                                        v(!1)
                                    }
                                    )(o),
                                    children: (s = o,
                                    s.replace(/^(.+)\s+\(([^\s]+)\s[^)]+\)$/, "$1 ($2)"))
                                }, `${t}-${e}-${o}`);
                                var s
                            }
                            ))]
                        }, `${t}-${e}-${++f}-group`))), b ? (0,
                        r.jsxs)("div", {
                            className: "rewrite-box__footer",
                            children: [(0,
                            r.jsxs)("button", {
                                className: "rewrite-box__load-more",
                                onClick: w,
                                children: [(0,
                                r.jsx)("i", {
                                    className: "icon icon--blue-dots-horizontal"
                                }), !1 === _ ? g.get("js.sidebar.mode_rewriting_synonyms_show_more") : g.get("js.sidebar.mode_rewriting_synonyms_show_less")]
                            }), e]
                        }) : e]
                    })]
                })
            }
            return null
        }
        ;
        var b = n(64554)
          , x = n(20941);
        const w = (0,
        s.Z)()
          , E = x.Z.get(b.rR)
          , S = e=>"fluency" === e ? "icon--rewriting-fluent" : "formality" === e ? "icon--rewriting-formal" : "shortened" === e ? "icon--rewriting-short" : "simplicity" === e ? "icon--rewriting-simple" : "icon--rewriting-general"
          , T = e=>{
            const t = []
              , n = []
              , {length: r} = e;
            e: for (let o = 0; o < r; o += 1)
                if (!n.includes(o)) {
                    t: for (let t = o + 1; t < r; t += 1) {
                        const r = e[o]
                          , s = e[t];
                        if (void 0 === s.added && void 0 === s.removed) {
                            if ("" === s.value?.trim())
                                continue t;
                            break t
                        }
                        const a = !0 === r.removed && !0 === s.added
                          , i = !0 === r.added && !0 === s.removed;
                        if (a)
                            continue e;
                        if (i) {
                            n.push(t);
                            break t
                        }
                    }
                    t.push(e[o])
                }
            return t
        }
          , k = ({text: e, diff: t})=>null === t ? (0,
        r.jsx)("p", {
            className: "rewrite-box__sentence",
            children: e
        }) : (0,
        r.jsx)("p", {
            className: "rewrite-box__sentence",
            children: T(t).map(((e,t)=>{
                const n = ((e,t)=>[(()=>{
                    try {
                        return e.value ? encodeURIComponent(e.value) : "%20"
                    } catch {
                        return "%20"
                    }
                }
                )(), !0 === e.removed ? "removed" : "", !0 === e.added ? "added" : "", void 0 === e.removed && void 0 === e.added ? "static" : "", String(e.count + t)].join("-"))(e, t);
                switch (!0) {
                case "string" == typeof e.value && void 0 === e.added && void 0 === e.removed:
                    return (0,
                    r.jsx)(o.Fragment, {
                        children: e.value
                    }, n);
                case !0 === e.added:
                    return (0,
                    r.jsx)("span", {
                        className: "rewrite-box__sentence__added",
                        children: e.value
                    }, n);
                case !0 === e.removed:
                    return (0,
                    r.jsx)("span", {
                        className: "rewrite-box__sentence__removed",
                        children: e.value
                    }, n);
                default:
                    return
                }
            }
            ))
        })
          , j = ({source: e})=>"string" == typeof e ? (0,
        r.jsxs)("h3", {
            className: "rewrite-suggestions__headline",
            children: [(0,
            r.jsx)("i", {
                className: "icon icon--rewriting-headline-ai"
            }), (0,
            r.jsx)("span", {
                dangerouslySetInnerHTML: {
                    __html: w.get("js.sidebar.mode_rewriting_phrases_caption")
                }
            })]
        }) : null
          , N = e=>{
            const [t,n] = c(e.state, (()=>e.result.length > 0));
            return d({
                topic: "rephrasings",
                hasContent: ()=>e.result.length > 0,
                language: e.language,
                status: n
            }),
            "loading" === n ? (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(j, {
                    source: e.source
                }), Array.from({
                    length: 3
                }, ((e,t)=>(0,
                r.jsx)("div", {
                    className: i()("rewrite-box", "rewrite-box--loading", `rewrite-box--loading-${t}`)
                }, `rewrite-box-${t}`)))]
            }) : "failed" === n ? (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(j, {
                    source: e.source
                }), (0,
                r.jsx)("div", {
                    className: "rewrite-box",
                    children: (0,
                    r.jsx)("p", {
                        className: "rewrite-box__message",
                        children: w.get("js.sidebar.mode_rewriting_phrases_failed")
                    })
                })]
            }) : "succeeded" === n && 0 === e.result.length ? (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(j, {
                    source: e.source
                }), (0,
                r.jsx)("div", {
                    className: "rewrite-box",
                    children: (0,
                    r.jsx)("p", {
                        className: "rewrite-box__message",
                        children: w.get("js.sidebar.mode_rewriting_phrases_no_result")
                    })
                })]
            }) : "succeeded" === n ? (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(j, {
                    source: e.source
                }), e.result.map((({uuid: n, label: o, text: s, diff: a},c)=>{
                    let l = null;
                    const d = o.split("-")[0];
                    return l = w.has(`js.sidebar.rewriting_label_ ${d}`) ? w.get(`js.sidebar.rewriting_label_ ${d}`) : w.get("js.sidebar.rewriting_label_general"),
                    E && (l += " (" + o + ")"),
                    (0,
                    r.jsxs)("button", {
                        className: i()("rewrite-box", "rewrite-box--hover", {
                            "rewrite-box--disabled": t
                        }),
                        onClick: ()=>e.onApplyRephrasing(s, o),
                        "data-testid": `rewriting-suggestion-${c}`,
                        children: [(0,
                        r.jsxs)("h4", {
                            className: "rewrite-box__label",
                            children: [(0,
                            r.jsx)("i", {
                                className: i()("icon", S(d))
                            }), l]
                        }), (0,
                        r.jsx)(k, {
                            text: s,
                            diff: a
                        })]
                    }, n)
                }
                ))]
            }) : null
        }
        ;
        var C = n(81432)
          , P = n(35954)
          , A = n(93653)
          , L = n(7727);
        const R = (0,
        s.Z)()
          , O = ({remainingRephrasings: e, resetRemainingRephrasings: t, context: n})=>{
            const s = (0,
            o.useRef)(function() {
                const e = new Date;
                return e.setHours(23),
                e.setMinutes(59),
                e.setSeconds(59),
                e.setMilliseconds(999),
                e
            }())
              , a = (0,
            o.useCallback)((()=>{
                window.setTimeout((()=>{
                    t?.()
                }
                ), 100)
            }
            ), [t]);
            if (e > 0) {
                const t = R.choice("js.sidebar.mode_rewriting_teaser_hint", e, {
                    remaining: String(e),
                    url: `/premium?pk_campaign=${n}-rewriting&remaining_rephrasings=${e}`
                });
                return (0,
                r.jsx)("div", {
                    className: "rephrasing-teaser icon--premium-orange",
                    children: (0,
                    r.jsx)("div", {
                        className: "rephrasing-teaser__hint",
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    })
                })
            }
            return 0 === e ? (0,
            r.jsxs)("div", {
                className: "rephrasing-teaser",
                children: [(0,
                r.jsxs)("a", {
                    className: "rephrasing-teaser__header",
                    href: `/premium?pk_campaign=${n}-rewriting&remaining_rephrasings=${e}`,
                    target: "_blank",
                    children: [(0,
                    r.jsxs)("h5", {
                        className: "rephrasing-teaser__countdown",
                        children: [R.get("js.sidebar.mode_rewriting_teaser_countdown"), (0,
                        r.jsx)("strong", {
                            className: "rephrasing-teaser__countdown__suffix",
                            children: R.choice("js.sidebar.mode_rewriting_teaser_countdown_suffix", b.Do, {
                                amount: String(b.Do)
                            })
                        })]
                    }), (0,
                    r.jsx)(A.Z, {
                        expirationDate: s.current,
                        theme: "premium",
                        onFinish: a
                    })]
                }), (0,
                r.jsx)("h4", {
                    className: "rephrasing-teaser__caption",
                    children: R.get("js.sidebar.mode_rewriting_teaser_caption")
                }), (0,
                r.jsx)("p", {
                    className: "rephrasing-teaser__description",
                    children: R.get("js.sidebar.mode_rewriting_teaser_description")
                }), (0,
                r.jsxs)("ul", {
                    className: "rephrasing-teaser__list",
                    children: [(0,
                    r.jsx)("li", {
                        className: "rephrasing-teaser__list-item icon--orange-check-filled",
                        dangerouslySetInnerHTML: {
                            __html: R.get("js.sidebar.mode_rewriting_teaser_list_item_1", {
                                amount: (0,
                                L.Z)(b.l5, R.getLocale())
                            })
                        }
                    }), (0,
                    r.jsx)("li", {
                        className: "rephrasing-teaser__list-item icon--orange-check-filled",
                        dangerouslySetInnerHTML: {
                            __html: R.get("js.sidebar.mode_rewriting_teaser_list_item_2")
                        }
                    }), (0,
                    r.jsx)("li", {
                        className: "rephrasing-teaser__list-item icon--orange-check-filled",
                        dangerouslySetInnerHTML: {
                            __html: R.get("js.sidebar.mode_rewriting_teaser_list_item_3")
                        }
                    })]
                }), (0,
                r.jsx)("a", {
                    href: `/premium?pk_campaign=${n}-rewriting&remaining_rephrasings=0`,
                    className: "btn btn--upgrade btn--full-width rephrasing-teaser__cta",
                    target: "_blank",
                    children: R.get("js.sidebar.mode_rewriting_teaser_cta")
                })]
            }) : null
        }
        ;
        var D = n(65363);
        function I(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function M(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? I(Object(n), !0).forEach((function(t) {
                    U(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function U(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r)
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        const B = (0,
        s.Z)()
          , G = e=>{
            const {remainingRephrasings: t, onApplySynonym: n, onApplyRephrasing: s, resetRemainingRephrasings: a} = e
              , i = (0,
            o.useRef)(null)
              , c = (0,
            o.useRef)((0,
            D.Z)("post/product-rephrase-feature/", B.getLocale()))
              , d = !(null !== e.synonyms.state && null !== e.synonyms.source || null !== e.rephrasings.state && null !== e.rephrasings.source);
            return "indetermined" === e.isRewritingSupported ? null : 0 === t ? (0,
            r.jsx)("div", {
                className: "rewrite-suggestions",
                children: (0,
                r.jsx)(O, {
                    remainingRephrasings: t,
                    resetRemainingRephrasings: a,
                    context: e.context
                })
            }) : e.isInitialLoading ? (0,
            r.jsxs)("div", {
                className: "rewrite-initial",
                children: [(0,
                r.jsx)("div", {
                    className: "rewrite-initial__visual",
                    children: (0,
                    r.jsx)("div", {
                        className: "rewrite-initial__visual__initial-loading"
                    })
                }), (0,
                r.jsx)("h3", {
                    className: "rewrite-initial__headline headline headline--5",
                    children: B.get("js.sidebar.mode_rewriting_initial_placeholder_caption")
                }), (0,
                r.jsx)("p", {
                    className: "paragraph paragraph--6",
                    children: B.get("js.sidebar.mode_rewriting_initial_placeholder_description")
                }), (0,
                r.jsx)("a", {
                    className: "rewrite-initial__link paragraph paragraph--6",
                    href: c.current,
                    target: "_blank",
                    children: B.get("js.sidebar.mode_rewriting_placeholder_link_text")
                })]
            }) : d ? (0,
            r.jsxs)("div", {
                className: "rewrite-initial",
                children: [(0,
                r.jsx)("div", {
                    className: "rewrite-initial__visual",
                    children: (0,
                    r.jsx)(C.F, {
                        name: "rephrasing_empty_state",
                        fallback: (0,
                        r.jsx)("div", {
                            className: "rewrite-initial__visual__fallback"
                        })
                    })
                }), (0,
                r.jsxs)("h3", {
                    className: "rewrite-initial__headline headline headline--5",
                    children: [B.get("js.sidebar.mode_rewriting_placeholder_caption"), (0,
                    r.jsx)("span", {
                        className: "new-highlight | inline-block",
                        children: "Beta"
                    })]
                }), (0,
                r.jsx)("p", {
                    className: "paragraph paragraph--6",
                    children: B.get("js.sidebar.mode_rewriting_placeholder_description")
                }), (0,
                r.jsx)("a", {
                    className: "rewrite-initial__link paragraph paragraph--6",
                    href: c.current,
                    target: "_blank",
                    children: B.get("js.sidebar.mode_rewriting_placeholder_link_text")
                })]
            }) : (0,
            r.jsxs)(P.Z, {
                className: "rewrite-suggestions",
                indicatorColor: "black",
                scrollableRef: i,
                children: [(0,
                r.jsx)(v, M({
                    language: e.language,
                    onApplySynonym: t=>{
                        null !== e.synonyms.source && (n({
                            source: e.synonyms.source,
                            selection: e.synonyms.selection,
                            replacement: t
                        }),
                        l.Z.trackEvent("Rewriting", "apply:synonym", e.language))
                    }
                }, e.synonyms)), e.showRemainingRephrasings && (0,
                r.jsx)(O, {
                    remainingRephrasings: t,
                    context: e.context
                }), (0,
                r.jsx)(N, M({
                    language: e.language,
                    onApplyRephrasing: (t,n)=>{
                        null !== e.rephrasings.source && (s({
                            source: e.rephrasings.source,
                            selection: e.rephrasings.selection,
                            replacement: t
                        }, n),
                        l.Z.trackEvent("Rewriting", "apply:rephrasing", e.language))
                    }
                }, e.rephrasings))]
            })
        }
    }
    ,
    64528: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>k
        });
        var r = n(24246)
          , o = n(27378)
          , s = n(11753);
        function a(e) {
            const t = window.getSelection();
            if (t && t.rangeCount) {
                let n = t.getRangeAt(0);
                n.deleteContents();
                const r = n.createContextualFragment(e)
                  , o = r.lastChild;
                n.insertNode(r),
                o && (n = n.cloneRange(),
                n.setStartAfter(o),
                n.collapse(!0),
                t.removeAllRanges(),
                t.addRange(n))
            }
        }
        var i = n(68916);
        var c = n(44444)
          , l = n(60042)
          , d = n.n(l);
        function u(e) {
            return !!e.parentElement && (e.parentElement.firstChild === e && ["DIV", "P", "TD", "TH"].includes(e.parentElement.nodeName) && (t = e.parentElement,
            ["block", "grid", "flex", "table-cell"].includes(window.getComputedStyle(t).display)) || !!e.previousSibling && "BR" === e.previousSibling.nodeName);
            var t
        }
        var p = n(8686)
          , h = n(13822)
          , _ = n(968);
        var m = n(66161)
          , g = n(83748)
          , f = n(85699)
          , y = n(42716)
          , v = n(64554)
          , b = n(36461)
          , x = n(9685);
        const w = (0,
        _.Z)()
          , E = "lt-textarea--preserve-style"
          , S = (0,
        c.Z)();
        class T extends o.Component {
            ref = (0,
            o.createRef)();
            ltAssistantEditor = null;
            lastLTAssistantState = null;
            isClearingBeforeInput = !1;
            translations;
            undoManager;
            ooxmlInputHandler;
            supportsOoxml;
            alreadyTrackedErrorCorrection = !1;
            constructor(e) {
                super(e),
                this.state = {
                    scaffold: e.content ? e.content.scaffold : null,
                    source: e.content ? e.content.source : null,
                    css: e.content ? this.scopeAndExtractCSS(e.content.source, e.content.scaffold || "", e.content.value) : null,
                    isPlaceholderVisible: !0,
                    selectedErrorBox: null,
                    selectedErrorType: null
                },
                this.translations = {
                    placeholder: S.get("js.textarea_placeholder"),
                    ooxmlPlaceholder: S.get("js.textarea_ooxml_placeholder")
                },
                this.supportsOoxml = !!this.props.editor
            }
            updatePlaceholder() {
                if (!this.ref.current)
                    return;
                const e = this.isEmpty();
                this.state.isPlaceholderVisible !== e && this.setState({
                    isPlaceholderVisible: e
                })
            }
            clear() {
                this.clearTextfield(),
                this.updatePlaceholder()
            }
            clearTextfield() {
                this.ref.current && (m.Z.addCurrentState(!0),
                function(e) {
                    e.focus();
                    const t = window.getSelection();
                    if (!t)
                        return;
                    const n = document.createRange();
                    n.selectNodeContents(e),
                    t.removeAllRanges(),
                    t.addRange(n),
                    document.execCommand("delete", !1, void 0),
                    document.execCommand("removeFormat", !1, void 0),
                    document.execCommand("delete", !1, void 0),
                    t.collapse(e, 0)
                }(this.ref.current))
            }
            copy() {
                this.ref.current && (0,
                i.Z)(this.ref.current)
            }
            focus() {
                this.ref.current && this.ref.current.focus()
            }
            isEmpty() {
                return !this.ref.current || (!this.ref.current.firstChild || 1 === this.ref.current.childElementCount && /^\n?$/.test(this.ref.current.innerText) && !!this.ref.current.firstElementChild && !["UL", "OL"].includes(this.ref.current.firstElementChild.nodeName) && !this.ref.current.firstElementChild.querySelector("ul, ol"))
            }
            setCheckLevel(e) {
                this.ltAssistantEditor && this.ltAssistantEditor.setCheckLevel(e)
            }
            getScrollableParent() {
                return this.ref.current ? this.props.editor ? this.ref.current.closest(".document") : this.ref.current.parentElement : null
            }
            onInput = e=>{
                e && "input" === e.type && function(e, t) {
                    if (" " !== e.data)
                        return;
                    const n = window.getSelection();
                    if (!n || !n.isCollapsed || !n.anchorNode || n.anchorNode.nodeType !== Node.TEXT_NODE)
                        return;
                    let r = null;
                    if (2 !== n.anchorOffset || "* " !== n.anchorNode.nodeValue && "* " !== n.anchorNode.nodeValue)
                        if (2 !== n.anchorOffset || "- " !== n.anchorNode.nodeValue && "- " !== n.anchorNode.nodeValue) {
                            if (3 !== n.anchorOffset || "1. " !== n.anchorNode.nodeValue && "1. " !== n.anchorNode.nodeValue)
                                return;
                            r = "ol"
                        } else
                            r = "ul";
                    else
                        r = "ul";
                    u(n.anchorNode) && !function(e) {
                        return !!e.parentElement && !!e.parentElement.closest("li")
                    }(n.anchorNode) && setTimeout((()=>{
                        const e = window.getSelection();
                        if (!e)
                            return;
                        t && t.onBefore && t.onBefore();
                        const n = document.createRange();
                        n.selectNode(e.anchorNode),
                        e.removeAllRanges(),
                        e.addRange(n),
                        document.execCommand("insertHTML", !1, `<${r}><li></li></${r}>`)
                    }
                    ), 0)
                }(e, {
                    onBefore: ()=>m.Z.addCurrentState(!0)
                }),
                this.isClearingBeforeInput || this.updatePlaceholder(),
                this.props.onInput && this.props.onInput()
            }
            ;
            onBeforeInput = (e=!1)=>{
                this.isClearingBeforeInput || this.isEverythingSelected() && (this.isClearingBeforeInput = !0,
                w && !e || this.clearTextfield(),
                this.isClearingBeforeInput = !1)
            }
            ;
            isEverythingSelected() {
                if (!this.ref.current)
                    return !1;
                const e = window.getSelection();
                if (!e)
                    return !1;
                if (e.isCollapsed)
                    return !1;
                if (1 !== e.rangeCount)
                    return !1;
                const t = e.getRangeAt(0)
                  , n = document.createRange();
                n.selectNodeContents(this.ref.current);
                return n.toString().trim() === t.toString().trim()
            }
            onPaste = e=>{
                if (this.props.isOOXML)
                    return;
                if (!e.clipboardData)
                    return;
                let t = "";
                try {
                    t = e.clipboardData.getData("text/html")
                } catch (e) {
                    return
                }
                let n = "";
                try {
                    n = e.clipboardData.getData("text/plain")
                } catch (e) {
                    return
                }
                location.href.match(/skipfilter=1/) ? console.log(t) : this.handlePaste({
                    "text/html": t,
                    "text/plain": n
                }, (()=>e.preventDefault()), Array.from(e.clipboardData.types || []))
            }
            ;
            handlePaste(e, t, n) {
                const r = e["text/html"]
                  , o = e["text/plain"]
                  , i = n || Object.keys(e);
                console.log("Pasted:", i);
                const c = h.Z.guessTypeFromHTML(r) || h.Z.guessTypeFromMimeTypes(i);
                console.log("Got paste source:", c);
                const l = {};
                this.onBeforeInput(!0);
                const d = this.isEmpty();
                if (d && (l.source = null,
                l.scaffold = null,
                l.css = null,
                p.Z.trackEvent("PasteType", c || "unknown")),
                r && this.ref.current) {
                    const e = h.Z.canPreserveFormatting(c);
                    if (e && d) {
                        const e = h.Z.splitHTML(r);
                        e ? (l.scaffold = e.scaffold,
                        l.css = this.scopeAndExtractCSS(c, e.scaffold, e.value),
                        l.source = c,
                        a(h.Z.cleanHTML(c, e.value))) : (l.scaffold = null,
                        l.css = this.scopeAndExtractCSS(c, "", r),
                        l.source = c,
                        a(h.Z.cleanHTML(c, r)))
                    } else if (e && c === this.state.source) {
                        const e = h.Z.splitHTML(r);
                        a(h.Z.cleanHTML(c, e ? e.value : r))
                    } else {
                        a((0,
                        s.Z)(r))
                    }
                    t?.()
                }
                if (!r && d && o) {
                    const e = document.createElement("div");
                    e.style.whiteSpace = "pre-wrap",
                    e.textContent = o,
                    a(e.outerHTML),
                    t?.()
                }
                var u;
                u = l,
                0 !== Object.keys(u).length && this.setState(l),
                this.onInput(),
                this.props.onSignificantChange && o && o.length > 200 && setTimeout((()=>{
                    "IN_PROGRESS" === this.ltAssistantEditor?.getStatus() && (this.lastLTAssistantState = null,
                    this.props.onSignificantChange?.())
                }
                ), 10),
                this.props.onPaste && this.props.onPaste(c)
            }
            onKeydown = e=>{
                this.ref.current && ("Backspace" !== e.key && "Delete" !== e.key || setTimeout((()=>{
                    this.isEmpty() && this.clear()
                }
                ), 10),
                "s" === e.key && (e.ctrlKey || e.metaKey) && this.ref.current.matches(":focus") && e.preventDefault())
            }
            ;
            onCopy = e=>{
                if (!e.clipboardData)
                    return;
                const t = window.getSelection();
                if (!t)
                    return;
                let n = t.getRangeAt(0);
                if (this.isEverythingSelected() && (n = document.createRange(),
                n.selectNodeContents(this.ref.current)),
                !n)
                    return;
                const r = n.cloneContents()
                  , o = document.createElement("div");
                o.appendChild(r);
                let s = o.innerHTML;
                const a = t.toString();
                !s.match(/white-space:\s*pre/) && n.startContainer.parentElement && n.endContainer.parentElement && n.startContainer.parentElement === n.endContainer.parentElement && "pre-wrap" === window.getComputedStyle(n.startContainer.parentElement).whiteSpace && (s = `<span style="white-space: pre-wrap;">${s}</span>`),
                this.state.scaffold && (s = h.Z.joinHTML(this.state.scaffold, s)),
                e.clipboardData.setData("text/plain", a),
                e.clipboardData.setData("text/html", s),
                e.preventDefault()
            }
            ;
            scopeAndExtractCSS(e, t, n) {
                if (!h.Z.canPreserveFormatting(e))
                    return null;
                const r = h.Z.increaseFontSize(t, n, v.$s);
                return function(e, t) {
                    const n = document.createElement("style");
                    n.media = "not all",
                    Object.assign(n, {
                        disabled: !0
                    }),
                    n.textContent = t,
                    document.head.append(n);
                    let r = "";
                    n.sheet && Array.from(n.sheet.cssRules).forEach((t=>{
                        r += (function(e, t) {
                            const n = (t = t.trim()).match(/^(.+?)\s*({[\s\S]+})$/);
                            if (!n)
                                return null;
                            const [,r,o] = n;
                            return r.split(",").map((t=>(t = t.trim().replace(/\b(html|body)(\.|\s|\[|$)/g, "")).startsWith("@") ? t : `${e} ${t}`)).join(", ") + " " + o
                        }(e, t.cssText) || "") + "\n"
                    }
                    ));
                    return n.textContent = "",
                    n.remove(),
                    r
                }(`.${E}`, r)
            }
            onPlaceholderClick = e=>{
                if (this.props.onOOXMLSelect && e.target instanceof Element && "EM" === e.target.nodeName)
                    return this.props.onOOXMLSelect(),
                    !1
            }
            ;
            setPlainText(e) {
                this.ref.current && (this.setState({
                    source: null,
                    scaffold: null,
                    css: null
                }),
                this.ref.current.innerText = e,
                this.updatePlaceholder(),
                this.onInput())
            }
            setHTML(e) {
                this.ref.current && (this.props.isOOXML || h.Z.canPreserveFormatting(e.source) ? this.ref.current.innerHTML = e.value : this.ref.current.innerHTML = (0,
                s.Z)(e.value),
                e.scaffold === this.state.scaffold && e.source === this.state.source || this.setState({
                    scaffold: e.scaffold,
                    source: e.source,
                    css: this.scopeAndExtractCSS(e.source, e.scaffold || "", e.value)
                }),
                this.updatePlaceholder(),
                this.onInput())
            }
            getPlainText() {
                return this.ltAssistantEditor ? this.ltAssistantEditor.getText() : this.ref.current ? this.ref.current.innerText : ""
            }
            getHTML() {
                let e = "";
                return this.ref.current && (e = this.ref.current.innerHTML),
                {
                    value: e,
                    source: this.state.source,
                    scaffold: this.state.scaffold
                }
            }
            extractId() {
                const e = location.href.match(/\/editor\/(\w+)([&?/#]|$)/);
                return e ? e[1] : "unknown"
            }
            createLtAssistantEditor(e) {
                const t = e.initElement(this.ref.current, {
                    id: this.props.cacheKey,
                    ignoredRules: [...this.props.ignoredRules || []],
                    checkLevel: this.props.checkLevel,
                    language: this.props.language,
                    showPickyAsHiddenMatch: !this.props.editor,
                    maxTextLengthBasic: this.props.isOOXML ? v.l5 : void 0,
                    writingGoalId: this.props.writingGoalId || this.props.writingGoalCustom,
                    onDictionaryAdd: e=>!!this.props.onDictionaryAdd && this.props.onDictionaryAdd(e),
                    onTemporaryIgnore: (e,t)=>{
                        this.props.onTemporaryIgnore && this.props.onTemporaryIgnore(e, t)
                    }
                    ,
                    onRuleIgnore: ()=>!1,
                    onUpdate: e=>{
                        const {displayedErrors: t, checkStatus: n, synonyms: r, rephrasings: o} = e
                          , s = t.length !== this.lastLTAssistantState?.displayedErrors.length
                          , a = this.lastLTAssistantState?.synonyms.state !== r.state
                          , i = this.lastLTAssistantState?.rephrasings.state !== o.state;
                        (!this.lastLTAssistantState || n !== this.lastLTAssistantState.checkStatus || "COMPLETED" === n && s || a || i || "TEXT_TOO_SHORT" === n) && (console.log("New LT State:", e.checkStatus, e),
                        this.lastLTAssistantState = e,
                        this.props.onLTAssistantUpdate && this.props.onLTAssistantUpdate(e))
                    }
                    ,
                    onErrorClick: e=>!!this.props.onErrorSelect && this.props.onErrorSelect(e),
                    onBeforeErrorCorrect: (e,t)=>{
                        m.Z.addCurrentState(!0),
                        this.props.onBeforeErrorCorrect?.(e, t),
                        this.trackErrorCorrection(e)
                    }
                    ,
                    onBeforeRephrasingApply: ()=>{
                        m.Z.addCurrentState(!0)
                    }
                });
                return this.props.onLTAssistantEditor?.(t),
                t
            }
            componentDidMount() {
                if (!this.ref.current)
                    return;
                w && !this.ref.current.firstChild && (this.ref.current.innerHTML = "<br>",
                this.ref.current.classList.add("lt-textarea__textarea--safari-caret-hack"));
                !("correction" !== this.props.documentMode || location.hash && (e=>{
                    try {
                        return document.querySelector(e)
                    } catch {
                        return null
                    }
                }
                )(location.hash)) && !1 === (0,
                y.Z)() && this.ref.current?.focus?.({
                    preventScroll: !0
                }),
                this.props.content && this.props.content.value && this.setHTML(this.props.content),
                this.props.ltAssistant && (this.ltAssistantEditor = this.createLtAssistantEditor(this.props.ltAssistant)),
                document.execCommand("defaultParagraphSeparator", !1, "div"),
                this.ref.current.addEventListener("input", this.onInput),
                this.ref.current.addEventListener("beforeinput", (()=>this.onBeforeInput())),
                this.ref.current.addEventListener("copy", this.onCopy);
                const e = this.getScrollableParent()
                  , t = {
                    content: this.props.content || {
                        value: "",
                        source: null,
                        scaffold: null
                    },
                    offset: 0,
                    scrollTop: 0
                };
                m.Z.observe(this.extractId(), this.ref.current, t, {
                    setCurrentState: t=>{
                        this.ref.current?.blur(),
                        this.setHTML(t.content),
                        this.ltAssistantEditor && setTimeout((()=>{
                            this.ltAssistantEditor.setSelection({
                                start: t.offset
                            }),
                            e && (e.scrollTop = t.scrollTop),
                            this.ref.current?.focus()
                        }
                        ), 50)
                    }
                    ,
                    getCurrentState: ()=>{
                        const t = this.ltAssistantEditor && this.ltAssistantEditor.getSelection();
                        return {
                            content: this.getHTML(),
                            offset: t ? t.start : 0,
                            scrollTop: e ? e.scrollTop : 0
                        }
                    }
                }),
                g.Z.setRedo((()=>{
                    m.Z.redo()
                }
                )),
                g.Z.setUndo((()=>{
                    m.Z.undo()
                }
                )),
                this.props.isOOXML && this.initOOXML()
            }
            initOOXML() {
                this.ref.current && (this.ooxmlInputHandler && this.ooxmlInputHandler.destroy(),
                this.ooxmlInputHandler = new f.Z(this.ref.current,(e=>{
                    this.props.onOOXMLUnsupportedInput && this.props.onOOXMLUnsupportedInput(e)
                }
                )))
            }
            trackErrorCorrection(e) {
                this.alreadyTrackedErrorCorrection || (this.alreadyTrackedErrorCorrection = !0,
                p.Z.trackEvent("LTTextarea", "correct", (0,
                x.Z)(e.language.code)))
            }
            componentWillUnmount() {
                this.ltAssistantEditor && this.ltAssistantEditor.destroy(),
                m.Z.unobserve()
            }
            componentDidUpdate(e) {
                !this.ltAssistantEditor && this.props.ltAssistant && (this.ltAssistantEditor = this.createLtAssistantEditor(this.props.ltAssistant)),
                this.ltAssistantEditor && e.checkLevel !== this.props.checkLevel && (this.lastLTAssistantState = null,
                this.ltAssistantEditor.setCheckLevel(this.props.checkLevel || "hidden-picky")),
                this.ltAssistantEditor && e.language !== this.props.language && this.ltAssistantEditor.setLanguage(this.props.language),
                m.Z.changeCurrentId(this.extractId())
            }
            setHighlightedError = e=>{
                this.ltAssistantEditor && (e ? this.ltAssistantEditor.scrollToError(e, !1, "smart").then((t=>{
                    if (!t.length || !this.ref.current)
                        return;
                    const n = this.ref.current.getBoundingClientRect()
                      , r = Math.min.apply(null, t.map((e=>e.top)))
                      , o = Math.max.apply(null, t.map((e=>e.bottom)));
                    this.setState({
                        selectedErrorType: (0,
                        b.Z)(e),
                        selectedErrorBox: {
                            top: r - n.top - document.scrollingElement.scrollTop,
                            bottom: o - n.top - document.scrollingElement.scrollTop
                        }
                    })
                }
                )) : (this.state.selectedErrorBox || this.state.selectedErrorType) && this.setState({
                    selectedErrorType: null,
                    selectedErrorBox: null
                }))
            }
            ;
            getSelectedErrorBoxDimensions = ()=>this.state.selectedErrorBox && this.ref.current ? {
                selectedErrorBoxTop: Math.floor(this.state.selectedErrorBox.top),
                selectedErrorBoxBottom: Math.ceil(this.state.selectedErrorBox.bottom),
                selectedErrorBoxHeight: Math.round(this.state.selectedErrorBox.bottom - this.state.selectedErrorBox.top)
            } : {
                selectedErrorBoxTop: "auto",
                selectedErrorBoxBottom: "auto",
                selectedErrorBoxHeight: "auto"
            };
            render() {
                const {selectedErrorBoxTop: e, selectedErrorBoxBottom: t, selectedErrorBoxHeight: n} = this.getSelectedErrorBoxDimensions();
                return (0,
                r.jsxs)("div", {
                    className: d()("lt-textarea", {
                        "lt-textarea--editor": this.props.editor,
                        [E]: h.Z.canPreserveFormatting(this.state.source),
                        "is-hidden": Boolean(this.props.isHidden)
                    }),
                    children: [this.state.isPlaceholderVisible && (this.supportsOoxml ? (0,
                    r.jsx)("div", {
                        className: "lt-textarea__placeholder",
                        dangerouslySetInnerHTML: {
                            __html: S.get("js.textarea_ooxml_placeholder")
                        },
                        onClick: this.onPlaceholderClick
                    }) : (0,
                    r.jsx)("div", {
                        className: "lt-textarea__placeholder",
                        children: this.translations.placeholder
                    })), this.state.css && (0,
                    r.jsx)("style", {
                        dangerouslySetInnerHTML: {
                            __html: this.state.css
                        }
                    }), (0,
                    r.jsx)("div", {
                        className: d()("lt-textarea__textarea", this.props.className),
                        contentEditable: !0,
                        spellCheck: !1,
                        autoCorrect: "off",
                        onPaste: this.onPaste,
                        onClick: this.props.onTextAreaClick,
                        onKeyDown: this.onKeydown,
                        "data-lt-active": "true",
                        "data-lt-toolbar": "false",
                        "data-lt-editor-input": "true",
                        "data-gramm": "false",
                        ref: this.ref
                    }), (0,
                    r.jsxs)("div", {
                        className: d()("lt-textarea__overlay", {
                            "lt-textarea__overlay--visible": "correction" === this.props.documentMode && !!this.state.selectedErrorBox
                        }),
                        children: [(0,
                        r.jsx)("div", {
                            className: "lt-textarea__overlay__top",
                            style: {
                                height: e
                            }
                        }), (0,
                        r.jsx)("div", {
                            className: "lt-textarea__overlay__bottom",
                            style: {
                                top: t
                            }
                        }), (0,
                        r.jsx)("div", {
                            className: d()("lt-textarea__overlay__dot", `lt-textarea__overlay__dot--${this.state.selectedErrorType}`),
                            style: {
                                top: e,
                                height: n
                            }
                        })]
                    })]
                })
            }
        }
        const k = T
    }
    ,
    55583: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>m
        });
        var r = n(24246)
          , o = n(27378)
          , s = n(64554)
          , a = n(44444)
          , i = n(9685)
          , c = n(52330)
          , l = n(19925);
        const d = (0,
        a.Z)();
        var u = n(60042)
          , p = n.n(u);
        const h = (0,
        c.Z)()
          , _ = ({code: e, name: t})=>(0,
        r.jsx)("option", {
            value: e,
            children: t
        })
          , m = e=>{
            const t = function(e) {
                const t = (0,
                c.Z)();
                t.sort(((e,t)=>{
                    const n = e.name.toLowerCase()
                      , r = t.name.toLowerCase();
                    return n < r ? -1 : n > r ? 1 : 0
                }
                ));
                const n = [];
                t.forEach((e=>{
                    const t = (0,
                    i.Z)(e.code);
                    if (!s.nh.find((e=>e.code === t)))
                        return void n.push(e);
                    const r = n.find((e=>e.code === t));
                    r ? r.items.push(e) : n.push({
                        code: t,
                        items: [e],
                        title: "---"
                    })
                }
                ));
                const r = (0,
                l.Z)(e || null, t);
                return r.length && n.unshift({
                    title: d.get("js.language_selector.recommended_languages"),
                    items: r,
                    code: ""
                }),
                n
            }(e.preferredLanguagesConfig)
              , n = (a = e.value,
            h.find((e=>e.code === a)) || null);
            var a;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)("div", {
                    className: p()("language-selector", e.className, {
                        "language-selector--compact-view": Boolean(e.compactView),
                        "language-selector--accented": Boolean(e.accented)
                    }),
                    "data-lang": n && n.code,
                    children: [n ? (u = n.name,
                    String(u.split(/\s+/).shift())) : "Unknown language", (0,
                    r.jsx)("select", {
                        onChange: t=>e.onChange(t.target.value),
                        value: n ? n.code : void 0,
                        children: t.map(((e,n)=>{
                            const s = t[n + 1];
                            return "items"in e ? (0,
                            r.jsxs)(o.Fragment, {
                                children: [(0,
                                r.jsx)("option", {
                                    disabled: !0,
                                    children: e.title
                                }, "title-" + n), e.items.map((e=>(0,
                                r.jsx)(_, {
                                    code: e.code,
                                    name: e.name
                                }, e.code))), s && !("items"in s) && (0,
                                r.jsx)("option", {
                                    disabled: !0,
                                    children: "---"
                                }, "separator-" + n)]
                            }, `group-${e.code}`) : (0,
                            r.jsx)(_, {
                                code: e.code,
                                name: e.name
                            }, e.code)
                        }
                        ))
                    })]
                }), Boolean(e.compactView) && (0,
                r.jsx)("div", {
                    className: "language-selector-divider"
                })]
            });
            var u
        }
    }
    ,
    81432: (e,t,n)=>{
        "use strict";
        n.d(t, {
            F: ()=>h
        });
        var r = n(24246)
          , o = n(27378);
        const s = ["name", "fallback"];
        function a(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, s = Object.keys(e);
                for (r = 0; r < s.length; r++)
                    n = s[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++)
                    n = s[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach((function(t) {
                    l(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function l(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r)
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        const d = (0,
        o.lazy)((()=>n.e(1362).then(n.t.bind(n, 9115, 23))))
          , u = {}
          , p = (e,t)=>c(c({}, e), t)
          , h = e=>{
            let {name: t, fallback: i} = e
              , l = a(e, s);
            const h = (e=>{
                const [t,r] = (0,
                o.useReducer)(p, u);
                return (0,
                o.useEffect)((()=>{
                    if (void 0 === t[e]) {
                        let t;
                        switch (e) {
                        case "shortcut_onboarding":
                            t = n.e(1970).then(n.t.bind(n, 15536, 19));
                            break;
                        case "character_idle":
                            t = n.e(6078).then(n.t.bind(n, 48048, 19));
                            break;
                        case "character_error":
                            t = n.e(3760).then(n.t.bind(n, 65970, 19));
                            break;
                        case "character_reading":
                            t = n.e(9862).then(n.t.bind(n, 96313, 19));
                            break;
                        case "rephrasing_empty_state":
                            t = n.e(6306).then(n.t.bind(n, 56963, 19));
                            break;
                        default:
                            throw new Error(`Cannot load unknown animation "${e}"`)
                        }
                        t.then((t=>r({
                            [e]: t
                        })))
                    }
                }
                ), [e, t]),
                t[e] ?? null
            }
            )(t);
            return h ? (0,
            r.jsx)(o.Suspense, {
                fallback: i ?? (0,
                r.jsx)(r.Fragment, {}),
                children: (0,
                r.jsx)(d, c({
                    animationData: h
                }, l))
            }) : null
        }
    }
    ,
    117: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>c
        });
        var r = n(24246)
          , o = n(27378)
          , s = n(31542)
          , a = n(60042)
          , i = n.n(a);
        const c = e=>{
            const t = t=>{
                "Escape" === t.key && !e.requiresConfirmation && e.onClose && e.onClose()
            }
            ;
            return (0,
            o.useEffect)((()=>{
                if (!e.requiresConfirmation)
                    return document.addEventListener("keydown", t),
                    ()=>{
                        e.requiresConfirmation || document.removeEventListener("keydown", t)
                    }
            }
            ), []),
            (0,
            s.createPortal)((0,
            r.jsx)("div", {
                className: "modal__shadow",
                onMouseDown: t=>{
                    t.target instanceof HTMLElement && t.target.matches(".modal__shadow") && !e.requiresConfirmation && e.onClose && e.onClose()
                }
                ,
                "data-force-appearance": e.appearance,
                children: (0,
                r.jsxs)("section", {
                    className: i()("modal", e.className),
                    children: [(e.title || e.onClose) && (0,
                    r.jsxs)("div", {
                        className: "modal__header",
                        children: [(0,
                        r.jsx)("h3", {
                            className: "modal__header__title",
                            children: e.title
                        }), (0,
                        r.jsx)("div", {
                            className: "modal__close icon--close",
                            onClick: e.onClose
                        })]
                    }), (0,
                    r.jsx)("div", {
                        className: i()("modal__content", {
                            "modal__content--fixed": !0 === e.fixedContent
                        }),
                        children: e.children
                    })]
                })
            }), document.body)
        }
    }
    ,
    35954: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>l
        });
        var r = n(24246)
          , o = n(27378)
          , s = n(60042)
          , a = n.n(s)
          , i = n(85725);
        class c extends o.Component {
            throttleOnScroll;
            maxHeight;
            constructor(e) {
                super(e),
                this.state = {
                    scrollTopShadow: "0px",
                    scrollBottomShadow: "0px"
                },
                this.maxHeight = "black" === this.props.indicatorColor ? 12 : 16,
                this.throttleOnScroll = (0,
                i.P)(this.onScroll.bind(this), 150)
            }
            update = ()=>{
                if (!1 === Boolean(this.props.showIndicator) || !this.props.scrollableRef.current)
                    return;
                const e = this.props.scrollableRef.current
                  , t = Math.min(this.maxHeight, Math.floor(e.scrollTop / 2)) + "px"
                  , n = e.scrollHeight === e.clientHeight ? "0px" : Math.min(this.maxHeight, Math.floor((e.scrollHeight - e.clientHeight - e.scrollTop) / 2)) + "px";
                n === this.state.scrollBottomShadow && t === this.state.scrollTopShadow || this.setState({
                    scrollTopShadow: t,
                    scrollBottomShadow: n
                })
            }
            ;
            onScroll = ()=>{
                this.props.onScroll && this.props.onScroll(),
                this.update()
            }
            ;
            componentDidMount() {
                setTimeout(this.update, 0)
            }
            render() {
                return (0,
                r.jsxs)("div", {
                    className: a()("scroll-area", {
                        "scroll-area--white": void 0 === this.props.indicatorColor || "white" === this.props.indicatorColor,
                        "scroll-area--black": "black" === this.props.indicatorColor,
                        "scroll-area--hide-scrollbars": !1 === Boolean(this.props.showScrollbars)
                    }),
                    children: [this.props.showIndicator && (0,
                    r.jsx)("span", {
                        className: "scroll-area__scroll-top",
                        style: {
                            height: this.state.scrollTopShadow
                        }
                    }), (0,
                    r.jsx)("div", {
                        className: a()("scroll-area__scrollable", "js-scroll-area-scrollable", this.props.className),
                        ref: this.props.scrollableRef,
                        onScroll: this.throttleOnScroll.call,
                        children: this.props.children
                    }), this.props.showIndicator && (0,
                    r.jsx)("span", {
                        className: "scroll-area__scroll-bottom",
                        style: {
                            height: this.state.scrollBottomShadow
                        }
                    })]
                })
            }
        }
        const l = c
    }
    ,
    14246: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>c
        });
        var r = n(24246)
          , o = n(27378)
          , s = n(60042)
          , a = n.n(s)
          , i = n(84522);
        const c = e=>{
            const t = (0,
            o.useContext)(i.Z)
              , n = ()=>t.dispatch({
                type: "HIDE_SNACK_BAR",
                payload: null
            });
            return (0,
            o.useEffect)((()=>{
                let t = null;
                return e.sticky || (t = window.setTimeout(n, 1e4)),
                ()=>{
                    "number" == typeof t && clearTimeout(t)
                }
            }
            ), []),
            (0,
            r.jsxs)("div", {
                className: a()("snackbar", {
                    "snackbar--de": "de" === e.language,
                    "snackbar--applemail": "applemail" === e.type,
                    "snackbar--pages": "iwork" === e.type,
                    "snackbar--rephrasing": "rephrasing" === e.type,
                    "snackbar--word": "word" === e.type,
                    "snackbar--outlook": "outlook" === e.type
                }),
                children: [(0,
                r.jsx)("h5", {
                    className: "headline headline--5 snackbar__headline",
                    children: e.headline
                }), (0,
                r.jsx)("p", {
                    className: "paragraph paragraph--5 snackbar__paragraph",
                    children: e.description
                }), (0,
                r.jsxs)("div", {
                    className: "snackbar__btn-wrapper",
                    children: [e.primaryButton && (0,
                    r.jsx)("button", {
                        className: "snackbar__button btn btn--primary no-gutter",
                        onClick: e.primaryButton.action,
                        children: e.primaryButton.text
                    }), e.secondaryButton && (0,
                    r.jsx)("button", {
                        className: "snackbar__button btn btn--outline btn--white no-gutter",
                        onClick: e.secondaryButton.action,
                        children: e.secondaryButton.text
                    })]
                })]
            })
        }
    }
    ,
    97018: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>d
        });
        var r = n(24246)
          , o = n(27378)
          , s = n(60042)
          , a = n.n(s)
          , i = n(72510);
        const c = getComputedStyle(document.documentElement)
          , l = parseInt(c.getPropertyValue("--tooltip-delay"), 10)
          , d = e=>{
            const [t,n] = (0,
            o.useState)(e.isOpen ?? !1)
              , [s,c] = (0,
            o.useState)(e.anchorRef?.current || null)
              , d = (0,
            o.useRef)(null)
              , [u,p] = (0,
            o.useState)(e.position)
              , h = (0,
            o.useRef)()
              , _ = (0,
            o.useCallback)((()=>{
                if (!d.current)
                    return;
                if (e.forcePosition)
                    return;
                const t = d.current.getBoundingClientRect();
                e.position.startsWith("top") ? t.top < 30 && p(e.position.replace("top", "bottom")) : e.position.startsWith("bottom") && t.bottom > document.documentElement.clientHeight && p(e.position.replace("bottom", "top"))
            }
            ), [e.forcePosition, e.position])
              , m = (0,
            o.useCallback)((e=>{
                const t = e.target;
                t instanceof HTMLElement && s && !s.contains(t) && n(!1)
            }
            ), [s]);
            return (0,
            i.A)(m),
            (0,
            o.useEffect)((()=>{
                e.anchorRef?.current && s !== e.anchorRef?.current ? c(e.anchorRef?.current) : !s && d.current && c(d.current.parentElement)
            }
            ), [s, e.anchorRef, d.current?.parentElement]),
            (0,
            o.useEffect)((()=>{
                _();
                const r = ()=>{
                    e.hoverOnly || n(!t)
                }
                  , o = ()=>{
                    e.hoverOnly && (clearTimeout(h.current),
                    h.current = window.setTimeout((()=>n(!0)), l))
                }
                  , a = ()=>{
                    e.hoverOnly && (clearTimeout(h.current),
                    h.current = window.setTimeout((()=>n(!1)), l))
                }
                ;
                return s?.addEventListener("click", r),
                s?.addEventListener("mouseenter", o),
                s?.addEventListener("mouseleave", a),
                ()=>{
                    s?.removeEventListener("click", r),
                    s?.removeEventListener("mouseenter", o),
                    s?.removeEventListener("mouseleave", a)
                }
            }
            ), [s, t, e.hoverOnly, _]),
            (0,
            r.jsx)("div", {
                ref: d,
                className: a()(e.className, "tooltip", {
                    "tooltip--visible": t,
                    "tooltip--top": "top" === u,
                    "tooltip--top-right": "top-right" === u,
                    "tooltip--top-left": "top-left" === u,
                    "tooltip--bottom": "bottom" === u,
                    "tooltip--bottom-left": "bottom-left" === u,
                    "tooltip--bottom-right": "bottom-right" === u
                }),
                children: e.children
            })
        }
    }
    ,
    45921: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>d
        });
        var r = n(24246)
          , o = n(27378)
          , s = n(117);
        const a = (0,
        n(44444).Z)()
          , i = ()=>(0,
        r.jsx)("div", {
            className: "ooxml-drop-hint",
            children: a.get("js.ooxml_uploader.drop_hint")
        });
        var c = n(46417);
        const l = e=>Array.from(e).some((e=>"file" === e.kind))
          , d = ({disabled: e, appearance: t, onDrop: n, onDragEnter: a=(()=>{}
        ), onDragLeave: d=(()=>{}
        ), children: u})=>{
            const p = (0,
            o.useRef)()
              , [h,_] = (0,
            o.useState)(!1)
              , [m,g] = (0,
            o.useState)(!1)
              , f = ()=>{
                _(!0),
                a()
            }
              , y = e=>{
                e.clientX >= 0 && e.clientX <= document.body.clientWidth && e.clientY >= 0 && e.clientY <= document.body.clientHeight || (_(!1),
                d())
            }
              , v = t=>{
                var n;
                t.dataTransfer && l(t.dataTransfer.items) && (t.preventDefault(),
                window.clearTimeout(p.current),
                p.current = window.setTimeout((()=>{
                    p.current = void 0,
                    g(!1)
                }
                ), 500),
                e || m || (n = t.dataTransfer.items,
                Array.from(n).some((e=>"file" === e.kind && (e.type === c.Nn || e.type === c.J8))) ? (t.dataTransfer.dropEffect = "copy",
                t.dataTransfer.effectAllowed = "copy",
                g(!0)) : (t.dataTransfer.dropEffect = "none",
                t.dataTransfer.effectAllowed = "none")))
            }
              , b = e=>{
                if (!e.dataTransfer)
                    return;
                l(e.dataTransfer.items) && e.preventDefault();
                const t = (r = e.dataTransfer.files,
                Array.from(r).find((e=>e.type === c.Nn || e.type === c.J8)));
                var r;
                t && n(t)
            }
            ;
            return (0,
            o.useEffect)((()=>{
                const t = ()=>{
                    window.document.documentElement.removeEventListener("dragover", v),
                    window.document.documentElement.removeEventListener("drop", b)
                }
                ;
                return e ? t() : (window.document.documentElement.addEventListener("dragover", v),
                window.document.documentElement.addEventListener("drop", b)),
                t
            }
            ), [e]),
            (0,
            o.useEffect)((()=>(h ? (window.document.documentElement.addEventListener("dragleave", y),
            window.document.documentElement.removeEventListener("dragenter", f)) : (window.document.documentElement.addEventListener("dragenter", f),
            window.document.documentElement.removeEventListener("dragleave", y)),
            ()=>{
                window.document.documentElement.removeEventListener("dragleave", y),
                window.document.documentElement.removeEventListener("dragenter", f)
            }
            )), [h]),
            (0,
            r.jsxs)(r.Fragment, {
                children: [u, m && (0,
                r.jsx)(s.Z, {
                    className: "modal--ooxml-drop-hint",
                    appearance: t,
                    requiresConfirmation: !0,
                    children: (0,
                    r.jsx)(i, {})
                })]
            })
        }
    }
    ,
    64554: (e,t,n)=>{
        "use strict";
        n.d(t, {
            $g: ()=>h,
            $s: ()=>D,
            A7: ()=>U,
            D3: ()=>v,
            Dc: ()=>l,
            Do: ()=>I,
            E7: ()=>r,
            F4: ()=>S,
            Gx: ()=>x,
            HM: ()=>f,
            IS: ()=>L,
            JQ: ()=>g,
            M1: ()=>R,
            NZ: ()=>E,
            Nl: ()=>b,
            PP: ()=>j,
            Ph: ()=>O,
            Tb: ()=>N,
            Ud: ()=>o,
            W$: ()=>T,
            aX: ()=>G,
            b: ()=>c,
            d6: ()=>C,
            e8: ()=>w,
            fK: ()=>a,
            h: ()=>y,
            hx: ()=>B,
            ic: ()=>m,
            kY: ()=>p,
            l5: ()=>M,
            nh: ()=>s,
            pY: ()=>A,
            qd: ()=>_,
            rR: ()=>d,
            sV: ()=>P,
            sb: ()=>u,
            tx: ()=>i,
            vq: ()=>k
        });
        const r = ["ast-es", "be-by", "br-fr", "ca-es", "ca-es-valencia", "zh-cn", "da-dk", "nl", "en-us", "en-gb", "en-za", "en-nz", "en-ca", "en-au", "eo", "fr", "gl-es", "de-de", "de-at", "de-ch", "el-gr", "it", "ja-jp", "km-kh", "fa", "pl-pl", "pt-br", "pt-pt", "pt-ao", "pt-mz", "ro-ro", "ru-ru", "sk-sk", "sl-si", "es", "sv", "ta-in", "tl-ph", "uk-ua", "ga-ie", "ar", "no"]
          , o = ["en", "de", "es", "nl", "fr", "ru", "it", "ca", "pt-br", "pt", "uk", "pl"]
          , s = [{
            code: "en",
            variants: ["en-us", "en-gb", "en-za", "en-nz", "en-ca", "en-au"]
        }, {
            code: "de",
            variants: ["de-de", "de-at", "de-ch"]
        }, {
            code: "pt",
            variants: ["pt-br", "pt-pt", "pt-ao", "pt-mz"]
        }, {
            code: "ca",
            variants: ["ca-es", "ca-es-valencia"]
        }]
          , a = {
            en: "en-us",
            pt: "pt-br",
            ca: "ca-es",
            de: "de-de"
        }
          , i = {
            UKRAINE: {
                countries: ["UA", "BY"],
                percent: 50
            },
            "ITALY-DISCOUNT": {
                countries: ["IT"],
                percent: 20
            },
            "SPAIN-DISCOUNT": {
                countries: ["ES"],
                percent: 20
            },
            SOUTH_EUROPE: {
                countries: ["RO", "AL", "GR", "ME", "EE", "LT", "LV", "BG", "CY", "MT", "SK", "SI", "RS", "HR", "XK", "HU", "MD", "TR", "PT"],
                percent: 20
            },
            AFRICA: {
                countries: ["NG", "ET", "EG", "CD", "CG", "TZ", "KE", "UG", "DZ", "SD", "MA", "AO", "MZ", "TN", "CI", "DJ", "SZ", "MU", "GQ", "GA", "BW", "SO", "CD", "ER", "MG"],
                percent: 50
            },
            ASIA: {
                countries: ["ID", "PK", "BD", "VN", "MM", "PH", "UZ", "MY", "NP", "KZ", "KH", "UZ", "TH", "YE", "SY", "JO"],
                percent: 50
            },
            LATIN_AMERICA: {
                countries: ["PE", "VE", "EC", "SV", "DO", "BO", "SR", "AR", "HN", "BZ", "CR", "PA", "GT", "NI", "GY", "UY", "HT", "JM", "TT", "CU"],
                percent: 50
            },
            BRAZIL: {
                countries: ["BR"],
                percent: 50
            }
        }
          , c = {
            de: "LanguageTool ist Ihr intelligenter Schreibassistent für alle gängigen Browser und Textverarbeitungsprogramme. Schreiben sie in diesem Textfeld oder fügen Sie einen Text ein. Rechtshcreibfehler werden rot markirt, Grammatikfehler werden gelb hervor gehoben und Stilfehler werden, anders wie die anderen Fehler, blau unterstrichen. wussten Sie dass Synonyme per Doppelklick auf ein Wort aufgerufen werden können? Nutzen Sie LanguageTool in allen Lebenslagen, zB. wenn Sie am Donnerstag, dem 13. Mai 2022, einen Basketballkorb in 10 Fuß Höhe montieren möchten.",
            en: "LanguageTool is your intelligent writing assistant for all common browsers and word processors. Write or paste your text here too have it checked continuously. Errors will be underlined in different colours: we will mark seplling errors with red underilnes. Furthermore grammar error's are highlighted in yellow. LanguageTool also marks style issues in a reliable manner by underlining them in blue. did you know that you can sea synonyms by double clicking a word? Its a impressively versatile tool especially if youd like to tell a colleague from over sea's about what happened at 5 PM in the afternoon on Monday, 27 May 2007.",
            es: "Escribe o pega tu texto aqui para tenerlo revisado contínuamente. los errores se subrayaran en diferentes colores: marcaremos los errores ortograficos en rojo; los errores de gramática son resaltado en amarillo; los problemas relacionados al estilo serán marcados en azul. Sabías que te proponemos sinónimos al hacer doble clic sobre una palabra? LanguageTool es un herramienta para textos impecables, sean e-mails, artículos, blogs o otros, incluso cuando el texto se complejice.",
            fr: "Écrivez ou collez votre texte ici pour le faire vérifier en continue. Les erreurs seront soulignés de différentes couleurs : les erreurs d’orthografe en rouge et les erreurs grammaticaux en jaune. Les problèmes de style, comme par exemple les pléonasmes, seront marqués en bleu dans vos textes. Le saviez vous ? LanguageTool vous propose des synonymes lorsque vous double-cliquez sur un mot . Découvrez l’intégralité de ses fonctionnalités, parfoi inattendues, comme la vérification des date. Par exemple, le mercredi 28 août 2020 était en fait un vendredi !",
            nl: "Schrijf of plak hier je tekst om deze al typende te checke. Vergissingen worden gemarkeerd met verschillende kleuren: spelvouten laten we rood ondersteept zien. Grammaticafouten daarentegen markeren we met geel. LanguageTool laat stijlwesties zo optimaal mogelijk zien in het blauw. wist u al dat u synoniemen kunt oproepen met een dubbelklik op een woord ? LanguageTool is een absolute musthave voor het schrijven van perfecte tekst. Bij voorbeeld om een collega te vertellen wat er vrijdag 3 Maart 2007 gebeurd is.",
            ast: "Apega testu equí. o revisa toes les pallabres de esti testu pa ver dalgún de los problemis que LanguageTool ye pa deteutar. ¿Afáyeste con los correutores gramaticales? Has date cuenta de que entá nun son perfeutos.",
            be: "Паспрабуйце напісаць нейкі тэкст з памылкамі, а LanguageTool паспрабуе паказаць нейкия найбольш распаусюджаныя памылки.",
            br: "Lakait amañ ho testenn vrezhonek da vezañ gwiriet. Pe implijit an frazenn-mañ gant meur a fazioù yezhadurel enni.",
            ca: "Introduïu açí el vostre text. o feu servir aquest texts com a a exemple per a alguns errades que LanguageTool hi pot detectat.",
            eo: "Algluu vian kontrolendan tekston ĉi tie... Aŭ nur kontrolu ĉi tiun ekzemplon. Ĉu vi vi rimarkis, ke estas gramatikaj eraro en tiu frazo? Rimarku, ke Lingvoilo ankaux atentigas pri literumaj erraroj kiel ĉi-tiu.",
            gl: "Esta vai a ser unha mostra de de exemplo para amosar o funcionamento de LanguageTool.",
            el: "Επικολλήστε το κείμενο σας εδώ και κάντε κλικ στο κουμπί ελέγχου. Κάντε κλικ στις χρωματιστές φράσεις για λεπτομέρειες σχετικά με πιθανά σφάλματα. Για παράδειγμα σε αυτή τη πρόταση υπάρχουν εσκεμμένα λάθη για να να δείτε πώς λειτουργει το LanguageTool..",
            it: "Inserite qui il vostro testo... oppure controlate direttamente questo ed avrete un assaggio di quali errori possono essere identificati con LanguageTool.",
            km: "ឃ្លា​នេះ​បង្ហាញ​ពី​ពី​កំហុស​វេយ្យាករណ៍ ដើម្បី​បញ្ជាក់​ពី​ប្រសិទ្ធភាព​របស់​កម្មវិធី LanguageTool សំរាប់​ភាសាខ្មែរ។",
            pl: "Wpisz tekst lub użyj istniejącego przykładu. To jest przykładowy tekst który pokazuje, jak jak działa LanguageTool. LanguageTool ma jusz korektor psowni, który wyrurznia bledy na czewrono.",
            pt: "Cole aqui seu texto...ou verifique esta texto, afim de revelar alguns dos dos problemas que o LanguageTool consegue detectar. Isto tal vez permita corrigir os seus erro. Nós prometo ajudá-lo. para testar a grafia e as regrs do antigo) Acordo Ortográfico,, verifique o mesmo texto mesmo texto em Português de Angola ou Português do Moçambique e faça a analise dos resultados.. Nossa equipe anuncia a versão 4.5, que será lançada sexta-feira, 26 de março de 2019.",
            ru: "Вставьте ваш текст сюда .. или проверьте этот текстт. По сравнению с рядовыми средствами проверки орфографии LanguageTool сможет найти грамматические и стилевые проблемы. Релиз LanguageTool 5.0 состоялся в пятницу 27 июня 2020 года.",
            zh: "将文本粘贴在此，或者检测以下文本：我和她去看了二部电影。",
            sl: "Tukaj vnesite svoje besedilo... Pa poglejmo primer besedila s nekaj napakami ki jih lahko razpozna orodje LanguageTool; ko opazite napake, jih lahko enostavno popiravite. ( Obenem se izvrši tudi preverjanje črkovanja črkovanja.",
            tl: "Ang LanguageTool ay maganda gamit sa araw-araw. Ang talatang ito ay nagpapakita ng ng kakayahan ng LanguageTool at hinahalimbawa kung paano ito gamitin. Litaw rin sa talatang ito na may mga bagaybagay na hindii pa kayang itama nng LanguageTool.",
            ta: "இந்த பெட்டியில் உங்கள் உரையை ஒட்டி சரிவர சோதிக்கிறதா என பாருங்கள். 'லேங்குவேஜ் டூல்' சில இலக்கணப் பிழைகளைச் சரியாக கண்டுபிடிக்கும். பல பிழைகளைப் பிடிக்க தடுமாறலாம்.",
            uk: "Внизу наведено приклад тексту з помилками, які допоможе виправити LanguageTool. Будь-ласка, вставте тутт ваш текст, або перевірте цей текст на предмет помилок. Знайти всі помилки для LanguageTool є не по силах з багатьох причин але дещо він вам все таки підкаже. Порівняно з засобами перевірки орфографії LanguageTool також змайде граматичні та стильові проблеми. LanguageTool — ваш самий кращий помічник."
        }
          , l = "user.preferredCheckLanguage"
          , d = "user.devMode"
          , u = "welcome.lastText"
          , p = "welcome.referralInfo"
          , h = "user.countMode"
          , _ = "user.sessionInfo"
          , m = "user.seenOOXMLInfo"
          , g = "user.leftSidebarCollapsed"
          , f = "user.rightSidebarCollapsed"
          , y = "user.pasteHintIgnore"
          , v = "user.settingsSidebarLeftCollapsed"
          , b = "user.showShortcutOnboarding"
          , x = "user.appearance"
          , w = "user.showReferralTeaser"
          , E = "user.hasRated"
          , S = "user.showTeamsTeaser"
          , T = "user.statisticsInterval"
          , k = "user.hasSeenUserStatisticsPrivacyInfo"
          , j = 18e5
          , N = 52428800
          , C = "tmp_docx"
          , P = ["en", "de", "fr", "nl", "es", "pt-br", "pt-pt"]
          , A = ["en", "de", "fr", "nl", "es", "pt-br", "pt-pt"]
          , L = "https://languagetool.org/insights"
          , R = "c818882422a0440162727d9475"
          , O = "https://collector.languagetool.org"
          , D = 1.25
          , I = 3
          , M = 15e4
          , U = 138470
          , B = "ME7QE3CGWG"
          , G = "data-main-menu-open"
    }
    ,
    46417: (e,t,n)=>{
        "use strict";
        n.d(t, {
            J8: ()=>o,
            Nn: ()=>r,
            a3: ()=>s,
            eN: ()=>i,
            ry: ()=>c,
            uy: ()=>a
        });
        const r = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          , o = "application/msword"
          , s = 1e3
          , a = 25e3
          , i = 500
          , c = 1e3
    }
    ,
    68916: (e,t,n)=>{
        "use strict";
        function r(e) {
            const t = e === document.activeElement;
            e.focus();
            const n = window.getSelection();
            if (!n)
                return !1;
            if (!n.isCollapsed)
                return document.execCommand("copy"),
                !0;
            const r = null !== n.anchorNode && null !== n.focusNode ? n.getRangeAt(0) : null
              , o = document.createRange();
            return o.selectNodeContents(e),
            n.removeAllRanges(),
            n.addRange(o),
            document.execCommand("copy"),
            n.removeAllRanges(),
            r && n.addRange(r),
            t || e.blur(),
            !0
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    11753: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>w
        });
        var r = n(37855)
          , o = n(11200);
        const s = ["TABLE", "TR", "TD", "TBODY", "THEAD", "TH", "CAPTION", "COL", "COLGROUP"]
          , a = ["H1", "H2", "H3", "H4", "H5", "DIV", "BLOCKQUOTE", "PRE", "P"]
          , i = ["H1", "H2", "H3", "H4", "H5"]
          , c = ["A", "U", "BR", "SPAN", "DIV", "H1", "H2", "H3", "H4", "H5", "P", "FIGURE", "SECTION", "FIGCAPTION", "LI", "OL", "UL", "MENU", "FORM", "NAV", "MAIN", "HEADER", "FOOTER", "I", "STRONG", "EM", "B", "TABLE", "THEAD", "TR", "TD", "TH", "TBODY", "CAPTION", "BLOCKQUOTE", "PRE", "CODE", "HR", "SUP", "SUB"]
          , l = ["BR", "HR", "TD", "TH"]
          , d = ["SCRIPT", "IFRAME", "OBJECT", "STYLE", "META", "HEAD", "FRAME", "FRAMESET", "NOSCRIPT", "IMG", "MATH"]
          , u = 16
          , p = 40
          , h = 20
          , _ = ["table-cell", "inline", "inline-block", "inline-flex", "inline-grid"]
          , m = ["H1", "H2", "H3", "H4", "H4", "H5", "B", "STRONG"]
          , g = ["EM", "I"]
          , f = ["border", "cellpadding", "cellspacing"]
          , y = ["href", "hreflang", "target", "download", "rel", "title"];
        function v(e, t) {
            let n = e;
            for (; n; ) {
                if ("fontWeight" === t && m.includes(n.nodeName))
                    return {
                        element: n,
                        value: n.style[t] || "700"
                    };
                if ("fontStyle" === t && g.includes(n.nodeName))
                    return {
                        element: n,
                        value: n.style[t] || "italic"
                    };
                if (n.style[t])
                    return {
                        element: n,
                        value: n.style[t] || ""
                    };
                n = n.parentElement
            }
            return null
        }
        function b(e) {
            return "P" === e.nodeName && "MsoNormal" === e.className && null !== e.textContent && !e.textContent.trim()
        }
        function x(e) {
            return "bold" === e ? "700" : "normal" === e ? "400" : "inherit" === e ? "" : String(e)
        }
        function w(e) {
            const t = document.createElement("div");
            t.innerHTML = e;
            const n = document.createNodeIterator(t, NodeFilter.SHOW_COMMENT);
            let m;
            for (; m = n.nextNode(); )
                m.parentNode && m.parentNode.removeChild(m);
            let g = t.querySelectorAll("p.MsoNormal");
            g.forEach((e=>{
                const t = e.previousElementSibling;
                t && b(t) && b(e) && e.remove()
            }
            )),
            g = t.querySelectorAll("p.MsoNormal"),
            g.forEach((e=>{
                const t = document.createElement("div");
                t.innerHTML = e.innerHTML,
                e.parentNode?.replaceChild(t, e)
            }
            ));
            t.querySelectorAll("p.MsoTitle").forEach((e=>{
                const t = document.createElement("h1");
                t.innerHTML = e.innerHTML,
                e.parentNode?.replaceChild(t, e)
            }
            ));
            t.querySelectorAll("span.c-mrkdwn__br:empty").forEach((e=>{
                const t = document.createElement("br");
                e.parentNode?.replaceChild(t, e)
            }
            ));
            const w = Array.from(t.getElementsByTagName("*"));
            let E;
            Array.from(w, (e=>{
                const t = e.nodeName.toUpperCase();
                if (d.includes(t) && e.parentElement)
                    return void e.remove();
                if (!c.includes(t))
                    return (0,
                    o.Z)(e),
                    void (e.parentElement && !e.parentElement.childNodes.length && e.parentElement.remove());
                let n = e instanceof HTMLElement ? e.style.display : ""
                  , r = e instanceof HTMLElement ? e.style.fontSize : "";
                const l = e instanceof HTMLElement ? x(e.style.fontWeight) : ""
                  , m = e instanceof HTMLElement ? e.style.fontStyle : ""
                  , g = e instanceof HTMLElement ? e.style.marginLeft : ""
                  , b = e instanceof HTMLElement ? e.style.paddingLeft : ""
                  , w = e instanceof HTMLElement ? e.style.marginRight : ""
                  , E = e instanceof HTMLElement ? e.style.paddingRight : "";
                let S = e instanceof HTMLElement ? e.style.whiteSpace : "";
                if (s.includes(t) ? n = "" : ["table-cell", "inline-flex", "inline-grid"].includes(n) ? n = "inline-block" : ["table-row", "table", "flex", "grid", "table-caption"].includes(n) ? n = "block" : "block" !== n || a.includes(t) ? n && !["block", "inline-block", "inline"].includes(n) && (n = "") : n = "block",
                r && ((r.endsWith("em") || r.endsWith("rem")) && (r = Math.round(h * parseInt(r)) + "px"),
                0 === parseFloat(r) ? r = "" : parseInt(r) < u ? r = u + "px" : parseInt(r) > p && (r = p + "px")),
                i.includes(t) && (r = ""),
                "pre" === S && (S = "pre-wrap"),
                Array.from(e.attributes).forEach((n=>{
                    "TABLE" === t && f.includes(n.name) || ["TD", "TH"].includes(t) && "valign" === n.name || "A" === t && y.includes(n.name) || e.removeAttribute(n.name)
                }
                )),
                e instanceof HTMLElement) {
                    e.style.fontSize = r,
                    n && (e.style.display = n),
                    S && (e.style.whiteSpace = S);
                    const t = v(e, "fontWeight");
                    l && t && x(t.element.style.fontWeight) !== l && (e.style.fontWeight = l);
                    const o = v(e, "fontStyle");
                    m && o && o.element.style.fontStyle !== m && (e.style.fontStyle = m)
                }
                return _.includes(n) && e instanceof HTMLElement && (g && (e.style.marginLeft = g),
                w && (e.style.marginRight = w),
                b && (e.style.paddingLeft = b),
                E && (e.style.paddingRight = E)),
                e.nextSibling || e.previousSibling || !e.parentElement || t !== e.parentElement.nodeName || e.attributes.length ? void 0 : ((0,
                o.Z)(e),
                void (e.parentElement && !e.parentElement.childNodes.length && e.parentElement.remove()))
            }
            ));
            let S = 0;
            for (; (E = t.querySelectorAll("*:empty")) && (Array.from(E, (e=>{
                (e.attributes.length || l.includes(e.nodeName)) && ("A" !== e.nodeName || e.hasAttribute("name") || e.hasAttribute("id")) || e.remove()
            }
            )),
            !(++S > 6)); )
                ;
            const T = Array.from(t.querySelectorAll("[style*='font-size']"))
              , k = T.map((e=>e.style.fontSize))
              , j = (0,
            r.Z)(k);
            return (1 === j.length && j[0].includes("px") && parseInt(j[0]) < 18 || 1 === j.length && "medium" === j[0]) && T.forEach((e=>{
                e.style.fontSize = ""
            }
            )),
            t.innerHTML
        }
    }
    ,
    77431: (e,t,n)=>{
        "use strict";
        function r(e, t) {
            const n = document.getElementById(e);
            if (!(n instanceof t))
                throw new Error(`#${e} is not an instance of ${t.name}`);
            return n
        }
        n.d(t, {
            Z: ()=>r
        }),
        r.silent = (e,t)=>{
            try {
                return r(e, t)
            } catch {
                return null
            }
        }
    }
    ,
    11200: (e,t,n)=>{
        "use strict";
        function r(e) {
            const t = document.createDocumentFragment();
            for (; e.firstChild; ) {
                const n = e.removeChild(e.firstChild);
                t.appendChild(n)
            }
            e.parentNode.replaceChild(t, e)
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    50448: (e,t,n)=>{
        "use strict";
        var r = n(62166)
          , o = n(18418);
        const s = {
            "pt.js": n(70758),
            "en.js": n(97849)
        };
        (0,
        r.Z)(),
        (0,
        o.Z)({
            i18nMessages: s,
            locale: "pt",
            ltAssistantCtrPromise: n.e(1115).then(n.t.bind(n, 16656, 23)).then((({default: e})=>e))
        })
    }
    ,
    72510: (e,t,n)=>{
        "use strict";
        n.d(t, {
            A: ()=>o
        });
        var r = n(27378);
        const o = e=>{
            (0,
            r.useEffect)((()=>(document.addEventListener("click", e),
            ()=>document.removeEventListener("click", e))), [e])
        }
    }
    ,
    44444: (e,t,n)=>{
        "use strict";
        n.d(t, {
            L: ()=>i,
            Z: ()=>c
        });
        var r = n(43187)
          , o = n.n(r);
        class s extends (o()) {
            _applyReplacements(e, t) {
                return Object.keys(t).sort(this._sortReplacementKeys).forEach((function(n) {
                    e = e.replace(new RegExp("%{" + n + "}","gi"), (function(e) {
                        const r = t[n];
                        if (e === e.toUpperCase())
                            return r.toUpperCase();
                        return e === e.replace(/\w/i, (function(e) {
                            return e.toUpperCase()
                        }
                        )) ? r.charAt(0).toUpperCase() + r.slice(1) : r
                    }
                    ))
                }
                )),
                e
            }
        }
        let a;
        const i = (e,t)=>{
            a = new s({
                fallback: "en",
                messages: e,
                locale: t
            })
        }
        ;
        function c() {
            if (!(a instanceof s))
                throw new Error("i18n has not been initialized.");
            return a
        }
    }
    ,
    18418: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>ae
        });
        var r = n(58460)
          , o = n(48377)
          , s = n(85725);
        var a = n(21489);
        var i = n(72791)
          , c = n(64554)
          , l = n(44444)
          , d = n(7727);
        const u = "nav-burger--open"
          , p = "nav__dropdown--open"
          , h = "header--nav-open"
          , _ = "nav__dropdown__submenu--open"
          , m = "header-overlay--open"
          , g = ".js-premium-discount-badge"
          , f = ".js-submenu-title"
          , y = document.getElementById("primary-website-header")
          , v = document.getElementById("header-overlay")
          , b = document.getElementById("dropdown-close")
          , x = document.getElementById("nav-dropdown")
          , w = document.getElementById("dropdown-toggle")
          , E = document.getElementById("burger-toggle");
        let S = 0
          , T = -1;
        function k() {
            E?.addEventListener("click", (e=>{
                e.stopImmediatePropagation(),
                C()
            }
            )),
            w?.addEventListener("click", (e=>{
                e.stopImmediatePropagation(),
                C()
            }
            )),
            b?.addEventListener("click", (e=>{
                e.stopImmediatePropagation(),
                C(!1)
            }
            )),
            [w, b].forEach((e=>e?.addEventListener("mouseup", (e=>{
                const t = e.target;
                t && document.activeElement && document.activeElement === t && "function" == typeof t.blur && t.blur()
            }
            ))));
            const e = document.querySelectorAll(f);
            for (const t of e)
                t.addEventListener("click", j);
            document.addEventListener("click", N),
            window.addEventListener("resize", P),
            document.addEventListener("keydown", (e=>{
                "Escape" === e.key && C(!1)
            }
            )),
            (0,
            o.Z)().then((e=>{
                if (e && e.percent) {
                    const t = document.querySelectorAll(g);
                    for (const n of t)
                        n.style.display = "inline",
                        n.textContent = (0,
                        d.Z)(-e.percent / 100, (0,
                        l.Z)().getLocale(), {
                            style: "percent",
                            maximumFractionDigits: 0
                        })
                }
            }
            )),
            y && (S = function(e) {
                const {transitionDuration: t="0s"} = getComputedStyle(e);
                return t.endsWith("ms") ? parseInt(t, 10) : 1e3 * parseFloat(t)
            }(y))
        }
        function j() {
            const e = document.getElementsByClassName(_);
            for (const t of e)
                t !== this.parentElement?.parentElement && t.classList.remove(_);
            this.parentElement?.parentElement?.classList.toggle(_)
        }
        function N(e) {
            const t = e.target;
            !0 === y?.classList.contains(h) != !1 && !0 !== y?.contains(t) && C(!1)
        }
        function C(e) {
            E?.classList.toggle(u, e),
            x?.classList.toggle(p, e),
            y?.classList.toggle(h, e),
            v?.classList.toggle(m, e),
            !0 === y?.classList.contains(h) ? (clearTimeout(T),
            y.setAttribute(c.aX, "true"),
            P()) : T = window.setTimeout((()=>y?.removeAttribute(c.aX)), S)
        }
        function P() {
            requestAnimationFrame((()=>{
                y?.hasAttribute(c.aX) && y.style.setProperty("--main-header-height", `${Math.round(y.offsetHeight)}px`)
            }
            ))
        }
        var A = n(8686);
        var L = n(20941);
        var R = n(76368);
        function O(e) {
            Array.from(e.children).filter((e=>{
                return t = HTMLSourceElement,
                e instanceof t;
                var t
            }
            )).forEach((e=>{
                "string" == typeof e.dataset.src && (e.src = e.dataset.src)
            }
            )),
            e.classList.remove("lazy-video")
        }
        function D(e) {
            e.classList.add("lazy-in-viewport"),
            e.classList.remove("lazy-background")
        }
        var I = n(95294);
        function M(e) {
            const t = e.toString();
            return 1 === t.length ? "0" + t : t
        }
        function U(e) {
            e().then((e=>{
                if (!e)
                    return;
                const t = document.getElementById("discount-timer")
                  , n = document.getElementById("discount-message-box");
                if (!t || !e.expires || e.expires < new Date)
                    return;
                const r = document.getElementById("countdown__labels__hour-singular")
                  , o = document.getElementById("countdown__labels__hour-plural")
                  , s = document.getElementById("countdown__labels__minute-singular")
                  , a = document.getElementById("countdown__labels__minute-plural")
                  , i = document.getElementById("countdown__labels__second-singular")
                  , c = document.getElementById("countdown__labels__second-plural")
                  , l = document.getElementById("discount-timer-percent");
                if (n) {
                    const e = "string" == typeof n.dataset.propagateTo ? document.querySelector(n.dataset.propagateTo) : null;
                    n.classList.replace("hidden", "flex"),
                    e && e.classList.add("has-discount-message-box")
                }
                function d() {
                    const n = function(e) {
                        const t = Date.now();
                        let n = e.getTime() - t;
                        n < 0 && (n = 0);
                        const r = Math.floor(n / 1e3 % 60)
                          , o = Math.floor(n / 1e3 / 60 % 60);
                        return `${M(Math.floor(n / 1e3 / 60 / 60))}:${M(o)}:${M(r)}`
                    }(e.expires)
                      , l = n.split(/:|/)
                      , d = document.createElement("div");
                    if (l.forEach(((e,t)=>{
                        const n = document.createElement("span");
                        if (n.className = "discount-timer__count-down__digit",
                        n.textContent = e,
                        d.appendChild(n),
                        t % 2 == 1 && t < l.length - 1) {
                            const e = document.createElement("span");
                            e.className = "discount-timer__count-down__divider",
                            e.textContent = ":",
                            d.appendChild(e)
                        }
                    }
                    )),
                    r && o && s && a && i && c) {
                        const e = n.split(":");
                        1 === parseInt(e[0]) ? (r.classList.replace("hidden", "block"),
                        o.classList.replace("block", "hidden")) : (r.classList.replace("block", "hidden"),
                        o.classList.replace("hidden", "block")),
                        1 === parseInt(e[1]) ? (s.classList.replace("hidden", "block"),
                        a.classList.replace("block", "hidden")) : (s.classList.replace("block", "hidden"),
                        a.classList.replace("hidden", "block")),
                        1 === parseInt(e[2]) ? (i.classList.replace("hidden", "block"),
                        c.classList.replace("block", "hidden")) : (i.classList.replace("block", "hidden"),
                        c.classList.replace("hidden", "block"))
                    }
                    t.innerHTML = d.innerHTML
                }
                l && e.percent && (l.textContent = String(e.percent)),
                d(),
                window.setInterval(d, 1e3)
            }
            ))
        }
        var B = n(24246)
          , G = n(37634);
        const q = e=>{
            switch (!0) {
            case "WelcomeEditor" === e:
                return {
                    then: e=>e(n(65551))
                };
            case "App" === e:
                return Promise.all([n.e(9335), n.e(1189)]).then(n.bind(n, 45796));
            default:
                return {
                    then: ()=>{}
                }
            }
        }
        ;
        var H = n(77431)
          , Z = n(36365)
          , Y = n(93465);
        const $ = "cookie-setting-necessary"
          , F = "cookie-setting-analytics"
          , z = "cookie-setting-marketing";
        var W = n(80252);
        const V = ".js-user-account-dropdown";
        var K = n(53544)
          , J = n(90910);
        class X extends HTMLElement {
            static isRegistered = !1;
            _closeButton;
            constructor() {
                super();
                const {isClosable: e, trackClick: t} = this.dataset;
                e && (this._closeButton = document.createElement("button"),
                this._closeButton.setAttribute("data-close-header-banner", ""),
                this._closeButton.setAttribute("data-track-click", t ?? ""),
                this._closeButton.classList.add("icon", "icon--close-white", "header-banner__close"),
                this.appendChild(this._closeButton))
            }
            connectedCallback() {
                this._closeButton?.addEventListener("click", this._handleClick)
            }
            disconnectedCallback() {
                this._closeButton?.removeEventListener("click", this._handleClick)
            }
            _handleClick = e=>{
                e.stopPropagation();
                if (!e.target)
                    return;
                const {cookie: t} = this.dataset;
                t && ((0,
                J.d)({
                    name: t,
                    value: "true",
                    lifetime: 43200
                }),
                this.classList.replace("flex", "hidden"))
            }
        }
        class Q extends HTMLElement {
            static isRegistered = !1;
            _nextButton;
            _previousButton;
            _controls;
            constructor() {
                super(),
                this._nextButton = document.createElement("button"),
                this._previousButton = document.createElement("button"),
                this._controls = document.createElement("div"),
                this._nextButton.classList.add("horizontal-scroll-section__controls__button", "horizontal-scroll-section__controls__button--next", "cursor-pointer"),
                this._previousButton.classList.add("horizontal-scroll-section__controls__button", "horizontal-scroll-section__controls__button--prev", "cursor-pointer"),
                this._controls.classList.add("horizontal-scroll-section__controls", "flex"),
                this.appendChild(this._controls),
                this._controls.appendChild(this._previousButton),
                this._controls.appendChild(this._nextButton)
            }
            connectedCallback() {
                this._nextButton?.addEventListener("click", this._handleClickNext),
                this._previousButton?.addEventListener("click", this._handleClickPrevious)
            }
            disconnectedCallback() {
                this._nextButton?.removeEventListener("click", this._handleClickNext),
                this._previousButton?.addEventListener("click", this._handleClickPrevious)
            }
            _handleClickNext = e=>{
                e.target && this.scrollBy({
                    top: 0,
                    left: 1,
                    behavior: "smooth"
                })
            }
            ;
            _handleClickPrevious = e=>{
                e.target && this.scrollBy({
                    top: 0,
                    left: -1,
                    behavior: "smooth"
                })
            }
        }
        var ee = n(93378);
        const te = {
            "languagetool.org": "ref_lt_org",
            "rechtschreibpruefung24.de": "ref_rsp24_de",
            "korrekturen.de": "ref_korrekturen_de",
            "posteditacat.xyz": "ref_sdltrados",
            "sentencechecker.top": "ref_mark",
            "check-my-grammar.org": "ref_mark",
            "grammarcheck.biz": "ref_mark",
            "grammarcheck.id": "ref_mark",
            "satzapp.de": "ref_netzverb",
            "satzapp.com": "ref_netzverb",
            "netzverb.de": "ref_netzverb",
            "netzverb.com": "ref_netzverb",
            "verbformen.de": "ref_netzverb",
            "verbformen.com": "ref_netzverb",
            "grammar.com": "ref_grammar_com",
            "online-spellcheck.com": "ref_online",
            "127.0.0.1": "ref_fake_test"
        }
          , ne = ["startpage", "premium", "premium_new"]
          , re = 43200;
        function oe(e) {
            return e.replace(/\s+/g, "_").replace(/[^a-z0-9-_.]+/gi, "")
        }
        function se() {
            if (!function() {
                const e = document.querySelector('meta[name="route"]');
                return ne.includes(String(e?.content).trim())
            }())
                return;
            const e = oe(new URLSearchParams(location.search).get("a") || "")
              , t = oe(new URLSearchParams(location.search).get("pk_campaign") || "")
              , n = oe(new URLSearchParams(location.search).get("pk_kwd") || "")
              , r = function() {
                for (const [e,t] of Object.entries(te))
                    if (document.referrer.includes(e))
                        return t
            }();
            r && (0,
            J.d)({
                name: r,
                value: "true",
                lifetime: re
            }),
            e && (0,
            J.d)({
                name: "affiliate",
                value: e,
                lifetime: 12 * re
            }),
            t && (0,
            J.d)({
                name: "campaign",
                value: t,
                lifetime: re
            }),
            n && (0,
            J.d)({
                name: "campaign_keyword",
                value: n,
                lifetime: re
            })
        }
        function ae({i18nMessages: e, locale: t, ltAssistantCtrPromise: n}) {
            window.getTestVariant = r.Z,
            window.getCoupon = o.Z,
            (0,
            l.L)(e, t),
            function(e) {
                Array.from(document.querySelectorAll("[data-component]"), (t=>{
                    const n = t.getAttribute("data-component")
                      , r = t.getAttribute("data-component-data");
                    let o = {};
                    r && (o = JSON.parse(r)),
                    q(n).then((({default: n})=>{
                        (0,
                        G.createRoot)(t).render((0,
                        B.jsx)(n, {
                            data: o,
                            ltAssistantCtrPromise: e
                        }))
                    }
                    ))
                }
                ))
            }(n),
            document.querySelectorAll(V).forEach((e=>{
                if (!e)
                    return;
                if (!("open"in e) || "boolean" != typeof e.open)
                    return void console.warn(`${V} should be a <details>-element.`);
                const t = t=>{
                    t.target && !1 === e?.contains(t.target) && e?.removeAttribute("open")
                }
                ;
                e.addEventListener("toggle", (()=>{
                    e.open ? document.addEventListener("click", t) : document.removeEventListener("click", t)
                }
                ))
            }
            )),
            function() {
                const e = new URLSearchParams(location.search).get("referral");
                e && (L.Z.set(c.kY, e),
                L.Z.set(c.e8, !0),
                L.Z.set("referal_test", 1))
            }(),
            function() {
                const e = document.getElementById("content-register")
                  , t = document.getElementById("register-form-toggle")
                  , n = document.getElementById("register-form-social-toggle");
                if (e && t && n) {
                    let r = e.classList.contains("email-register");
                    const o = function() {
                        if (r ? e.classList.remove("email-register") : e.classList.add("email-register"),
                        r = !r,
                        r) {
                            const t = e.querySelector("input[type=text], input[type=email]");
                            t && t.focus()
                        }
                    };
                    n.addEventListener("click", o),
                    t.addEventListener("click", o)
                }
            }(),
            function() {
                const e = document.getElementById("primary-website-header");
                if (e) {
                    const t = (0,
                    s.P)((()=>{
                        const t = window.scrollY || window.pageYOffset;
                        0 === t ? e.classList.remove("header--sticky") : t > 0 && !e.classList.contains("header--sticky") && !e.classList.contains("header--pinned") && e.classList.add("header--sticky")
                    }
                    ), 200).call;
                    window.addEventListener("scroll", t),
                    t()
                }
            }(),
            (0,
            a.Z)() && document.documentElement?.setAttribute("data-lt-is-touch-device", "true"),
            (0,
            i.Z)(),
            k(),
            function() {
                const e = document.querySelectorAll("form input:not([type=checkbox]):not([type=radio])");
                Array.from(e, (e=>{
                    function t() {
                        e.value ? e.classList.remove("empty") : e.classList.add("empty")
                    }
                    e.addEventListener("input", (function() {
                        e.classList.add("touched"),
                        t()
                    }
                    )),
                    t()
                }
                ))
            }(),
            Array.from(document.querySelectorAll("[data-track-click]"), (e=>{
                e.addEventListener("click", (function() {
                    const t = (e.getAttribute("data-track-click") || "").split("|");
                    t.length < 2 || A.Z.trackEvent(t[0], t[1], t[2])
                }
                ))
            }
            )),
            Array.from(document.querySelectorAll("[data-event-track]"), (e=>{
                const t = e.getAttribute("data-event-track") || ""
                  , [n,r,o] = t.split("|");
                n && r && A.Z.trackEvent(n, r, o)
            }
            )),
            function() {
                const e = document.getElementById("nav-editor-hint");
                e && !L.Z.get("hasOpenedEditor") && (e.classList.add("nav-hint--show"),
                document.querySelectorAll(".js-user-account-widget").forEach((e=>e.addEventListener("click", (function() {
                    L.Z.set("hasOpenedEditor", !0)
                }
                )))))
            }(),
            (0,
            R.Z)(),
            function() {
                const e = Array.from(document.querySelectorAll("video.lazy-video"))
                  , t = Array.from(document.querySelectorAll(".lazy-background"));
                if (!("IntersectionObserver"in window))
                    return e.forEach((e=>O(e))),
                    void t.forEach((e=>D(e)));
                const n = new IntersectionObserver((e=>{
                    e.forEach((e=>{
                        if (!e.isIntersecting)
                            return;
                        const t = e.target instanceof HTMLElement && e.target.classList.contains("lazy-video") ? e.target : null;
                        if (t) {
                            O(t);
                            try {
                                t.load()
                            } catch {}
                        }
                        const r = e.target instanceof HTMLElement && e.target.classList.contains("lazy-background") ? e.target : null;
                        r && D(r),
                        n.unobserve(e.target)
                    }
                    ))
                }
                ));
                e.forEach((e=>n.observe(e))),
                t.forEach((e=>n.observe(e)))
            }(),
            (0,
            I.Z)(),
            U(o.Z),
            (0,
            W.Z)(),
            function() {
                const e = H.Z.silent($, HTMLInputElement)
                  , t = H.Z.silent(F, HTMLInputElement)
                  , n = H.Z.silent(z, HTMLInputElement);
                if (!e || !t || !n)
                    return;
                const r = {};
                "boolean" == typeof Y.Z.get("analytics") && (r.analytics = Y.Z.get("analytics")),
                "boolean" == typeof Y.Z.get("marketing") && (r.marketing = Y.Z.get("marketing")),
                Y.Z.set(r),
                (0,
                Z.Z)(e);
                const o = (0,
                Z.Z)(t, {
                    onChange: e=>Y.Z.set({
                        analytics: e
                    })
                });
                o.checked = Y.Z.get("analytics"),
                o.disabled = !1;
                const s = (0,
                Z.Z)(n, {
                    onChange: e=>Y.Z.set({
                        marketing: e
                    })
                });
                s.checked = Y.Z.get("marketing"),
                s.disabled = !1
            }(),
            Array.from(document.querySelectorAll("a[download][data-success-page]")).filter((e=>Boolean(e.href))).forEach((e=>{
                e.addEventListener("click", (t=>{
                    t.preventDefault();
                    const {successPage: n} = e.dataset;
                    window.open(e.href, "_blank"),
                    n && (location.href = n)
                }
                ))
            }
            )),
            (0,
            K.Z)(),
            (0,
            ee.ZP)(),
            X.isRegistered || (customElements.define("header-banner", X),
            X.isRegistered = !0),
            Q.isRegistered || (customElements.define("horizontal-scroller", Q),
            Q.isRegistered = !0),
            se()
        }
        n.e(6959).then(n.bind(n, 51227))
    }
    ,
    83748: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>i
        });
        var r = n(8686)
          , o = n(88882);
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function a(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r)
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        const i = class {
            static _initialized = !1;
            static _history = null;
            static _triggerSearch;
            static _uploadStart;
            static _uploadCancel;
            static _uploadUpdateProgress;
            static _uploadFinish;
            static _setPushBackService;
            static _undo;
            static _redo;
            static _copy;
            static _pushBack;
            static _onKeyboardChange;
            static _updateSettingsUi;
            static _textStorage = {};
            static init(e, t, n, r) {
                this._initialized || (this._initialized = !0,
                this._history = e,
                this._listen(),
                this.trigger({
                    command: "READY",
                    username: t,
                    token: n,
                    userId: r
                }))
            }
            static logout() {
                this.trigger({
                    command: "LOGOUT"
                })
            }
            static _listen() {
                window.onDesktopMessage = this._onMessage.bind(this),
                window?.chrome?.webview?.addEventListener?.("message", (e=>{
                    this._onMessage(e.data)
                }
                )),
                window.ipcRenderer?.on("message", ((e,t)=>{
                    console.log("Received message from Electron", {
                        event: e,
                        message: t
                    }),
                    this._onMessage(t)
                }
                ))
            }
            static _onMessage(e) {
                "CHECK_TEXT" === e.command ? this._handleCheckText(e) : "SEARCH" === e.command ? this._handleSearch() : "UNDO" === e.command ? this.triggerUndo() : "REDO" === e.command ? this.triggerRedo() : "TEXT_TO_CLIPBOARD" === e.command ? ("COPY" === e.action && this.triggerCopy(),
                "PUSH_BACK" === e.action && this.triggerPushBack()) : "UPDATE_APP_SETTINGS_UI" === e.command ? this.triggerUpdateSettingsUi({
                    openOnLogin: e.openOnLogin,
                    shortcut: e.shortcut,
                    installedApps: e.installedApps
                }) : "UPLOAD_START" === e.command || "UPLOAD_CANCEL" === e.command ? this.triggerUploadStart() : "UPLOAD_UPDATE_PROGRESS" === e.command ? this.triggerUploadUpdateProgress(e.progress) : "UPLOAD_FINISH" === e.command ? this.triggerUploadFinish(e.ooxmlId, e.name, e.html) : "CLEAR_PUSH_BACK_SERVICE" === e.command ? this.handleSetPushBackService(null) : "SET_PUSH_BACK_SERVICE" === e.command ? this.handleSetPushBackService(e.service) : "ON_KEYBOARD_CHANGE" === e.command && this.triggerOnKeyboardChangeMessageInterface(e.keyboardHeight, e.contentHeight)
            }
            static trigger(e) {
                window?.webkit?.messageHandlers?.macApp?.postMessage?.(JSON.stringify(e)),
                (0,
                o.Z)() ? window?.chrome?.webview?.postMessage(JSON.stringify(e)) : window.ipcRenderer && (console.log("Sending message to Electron", e),
                window.ipcRenderer.send("message", JSON.stringify(e)))
            }
            static _handleCheckText(e) {
                if (!this._history)
                    return;
                e.trackingEvent && r.Z.trackEvent("Desktop", e.trackingEvent);
                const t = Math.round(999999 * Math.random());
                this._textStorage[t] = {
                    text: e.text,
                    isHTML: e.isHTML
                },
                this._history.replace("/editor/new?desktop_text_id=" + t)
            }
            static setSearchTrigger(e) {
                this._triggerSearch = e
            }
            static setUploadStart(e) {
                this._uploadStart = e
            }
            static setUploadCancel(e) {
                this._uploadCancel = e
            }
            static setUploadUpdateProgress(e) {
                this._uploadUpdateProgress = e
            }
            static setUploadFinish(e) {
                this._uploadFinish = e
            }
            static _handleSearch() {
                this._triggerSearch?.()
            }
            static getText(e) {
                if (void 0 === this._textStorage[e])
                    return null;
                const t = this._textStorage[e];
                return delete this._textStorage[e],
                t
            }
            static triggerUndo() {
                this._undo?.()
            }
            static triggerRedo() {
                this._redo?.()
            }
            static triggerCopy() {
                this._copy?.()
            }
            static triggerPushBack() {
                this._pushBack?.()
            }
            static triggerOnKeyboardChangeMessageInterface(e, t) {
                this._onKeyboardChange?.(e, t)
            }
            static triggerUpdateSettingsUi(e) {
                this._updateSettingsUi?.(e)
            }
            static triggerUploadStart() {
                this._uploadStart?.()
            }
            static triggerUploadCancel() {
                this._uploadCancel?.()
            }
            static triggerUploadUpdateProgress(e) {
                this._uploadUpdateProgress?.(e)
            }
            static triggerUploadFinish(e, t, n) {
                this._uploadFinish?.(e, t, n)
            }
            static handleSetPushBackService(e) {
                this._setPushBackService?.(e)
            }
            static getTextFromClipboard() {
                this.trigger({
                    command: "GET_CLIPBOARD_TEXT"
                })
            }
            static getTextFromCamera() {
                this.trigger({
                    command: "GET_CAMERA_TEXT"
                })
            }
            static openSafariSettings() {
                this.trigger({
                    command: "OPEN_SAFARI_SETTINGS"
                })
            }
            static cancelFileUpload() {
                this.trigger({
                    command: "UPLOAD_CANCEL"
                })
            }
            static setAppSettings(e) {
                this.trigger(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? s(Object(n), !0).forEach((function(t) {
                            a(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({
                    command: "SET_APP_SETTINGS"
                }, e))
            }
            static getAppSettings() {
                this.trigger({
                    command: "REQUEST_APP_SETTINGS"
                })
            }
            static changeShortcut() {
                this.trigger({
                    command: "CHANGE_SHORTCUT"
                })
            }
            static print() {
                this.trigger({
                    command: "PRINT"
                })
            }
            static sendFeedback() {
                this.trigger({
                    command: "FEEDBACK"
                })
            }
            static rateApp() {
                this.trigger({
                    command: "RATE"
                })
            }
            static pushBackText() {
                this.trigger({
                    command: "PUSH_BACK_TEXT"
                })
            }
            static downloadFile(e, t, n) {
                n && this.trigger({
                    command: "DOWNLOAD_FILE",
                    filename: e,
                    fileExtension: t,
                    data: n
                })
            }
            static setUndo(e) {
                this._undo = e
            }
            static setRedo(e) {
                this._redo = e
            }
            static setCopy(e) {
                this._copy = e
            }
            static setPushBack(e) {
                this._pushBack = e
            }
            static setOnKeyboardChange(e) {
                this._onKeyboardChange = e
            }
            static setUpdateSettingsUi(e) {
                this._updateSettingsUi = e
            }
            static setPushBackService(e) {
                this._setPushBackService = e
            }
            static getTextFromURL(e) {
                const t = e.match(/(&|\?)desktop_text_id=(\d+)/);
                if (!t)
                    return null;
                const n = t[2];
                return this.getText(n)
            }
        }
    }
    ,
    66161: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>s
        });
        const r = navigator.userAgent.includes("Macintosh")
          , o = {};
        const s = class {
            static _lastAdd = 0;
            static _index;
            static _history;
            static _callbacks;
            static _element;
            static _id;
            static _canUndo;
            static _canRedo;
            static observe(e, t, n, r) {
                this._id = e,
                this._element = t,
                this._callbacks = r,
                this._index = 0,
                this._lastAdd = 0,
                o[e] || (o[e] = []),
                this._history = o[e],
                this._canUndo = o[e].length > 1,
                this._canRedo = !1,
                this._element.addEventListener("paste", this._onPasteOrDrop),
                this._element.addEventListener("drop", this._onPasteOrDrop),
                this._element.addEventListener("keydown", this._onKeyDown),
                this._element.addEventListener("input", this._onInput),
                this._element.addEventListener("paste", this._onInput),
                this.add(n)
            }
            static _onKeyDown = e=>{
                " " === e.key || "Enter" === e.key ? this.addCurrentState() : "Backspace" !== e.key && "Delete" !== e.key || this.addCurrentState();
                (r ? e.metaKey : e.ctrlKey) && ("z" !== e.key || e.shiftKey ? ("y" === e.key || "z" === e.key && e.shiftKey) && (e.preventDefault(),
                this.redo()) : (e.preventDefault(),
                this.undo()))
            }
            ;
            static _onPasteOrDrop = ()=>{
                this.addCurrentState(!0)
            }
            ;
            static _onInput = ()=>{
                this._history && (this._canUndo = !0,
                this._canRedo = !1,
                this._index && (this._history.splice(0, this._index),
                this._index = 0))
            }
            ;
            static changeCurrentId(e) {
                const t = this._id;
                t && t !== e && (this._id = e,
                o[e] = o[t],
                delete o[t])
            }
            static unobserve() {
                this._history && (this._history.splice(0, this._index),
                this._history.length = Math.min(this._history.length, 3),
                this._element && (this._element.removeEventListener("paste", this._onPasteOrDrop),
                this._element.removeEventListener("drop", this._onPasteOrDrop),
                this._element.removeEventListener("keydown", this._onKeyDown),
                this._element.removeEventListener("input", this._onInput),
                this._element.removeEventListener("paste", this._onInput)),
                this._lastAdd = 0,
                this._index = this._callbacks = this._id = this._element = this._history = this._canUndo = this._canRedo = void 0)
            }
            static addCurrentState(e=!1) {
                const t = this._callbacks && this._callbacks.getCurrentState();
                t && this.add(t, e)
            }
            static add(e, t=!1) {
                if (!this._history || void 0 === this._index)
                    return;
                const n = Date.now() - this._lastAdd;
                return !(!t && n < 4e3) && (this._history[this._index] && this._history[this._index].content.value === e.content.value ? (this._history[this._index].offset = e.offset,
                this._history[this._index].scrollTop = e.scrollTop,
                !1) : (this._lastAdd = Date.now(),
                this._history.splice(0, this._index),
                this._history.unshift(e),
                this._history.length = Math.min(25, this._history.length),
                this._index = 0,
                !0))
            }
            static canUndo() {
                return !!this._canUndo
            }
            static undo() {
                if (!this._history || !this._callbacks || void 0 === this._index)
                    return;
                if (!this._canUndo)
                    return;
                const e = this._index + 1;
                0 === this._index && this.addCurrentState(!0);
                const t = this._history[e];
                t && (this._lastAdd = 0,
                this._index = e,
                e === this._history.length - 1 && (this._canUndo = !1),
                this._canRedo = !0,
                this._callbacks.setCurrentState(t))
            }
            static canRedo() {
                return !!this._canRedo
            }
            static redo() {
                if (!this._history || !this._callbacks || void 0 === this._index)
                    return;
                if (!this._canRedo)
                    return;
                const e = this._index - 1;
                e < 0 || (this._lastAdd = 0,
                this._index = e,
                0 === e && (this._canRedo = !1),
                this._canUndo = !0,
                this._callbacks.setCurrentState(this._history[e]))
            }
            static clear(e) {
                delete o[e]
            }
        }
    }
    ,
    85699: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>i
        });
        const r = "data-editable-id"
          , o = `[${r}]`
          , s = "data-editable-touched"
          , a = `[${s}]`;
        const i = class {
            _input;
            _editableElements;
            _onUnsupportedInputType;
            constructor(e, t) {
                this._input = e,
                this._onUnsupportedInputType = t,
                this._editableElements = [],
                this._updateEditableElements(),
                this._input.addEventListener("beforeinput", this._onBeforeInput)
            }
            destroy() {
                this._input.removeEventListener("beforeinput", this._onBeforeInput),
                this._editableElements = []
            }
            _updateEditableElements() {
                this._editableElements = Array.from(this._input.querySelectorAll(o))
            }
            _onBeforeInput = e=>{
                e.preventDefault();
                const t = window.getSelection();
                if (!t)
                    return;
                this._updateEditableElements();
                const n = e.inputType;
                "deleteContentBackward" === n ? this._handleDeleteBackward(t) : "deleteContentForward" === n || "deleteByCut" === n || "deleteContent" === n ? this._handleDeleteForward(t) : "insertText" === n ? this._handleInsertText(t, e) : "insertFromPaste" === n ? this._handleInsertFromPaste(t, e) : "deleteWordForward" === n ? this._handleDeleteWordForward(t) : "deleteWordBackward" === n ? this._handleDeleteWordBackward(t) : this._onUnsupportedInputType && this._onUnsupportedInputType(n),
                this._dispatchInput(e)
            }
            ;
            _dispatchInput(e) {
                const t = new InputEvent("input",{
                    inputType: e.inputType
                });
                this._input.dispatchEvent(t)
            }
            _isTextNode(e) {
                return e && e.nodeType === Node.TEXT_NODE
            }
            _isElementNode(e) {
                return e && e.nodeType === Node.ELEMENT_NODE
            }
            _isEditableTextNode(e) {
                return Boolean(e.parentElement && e.parentElement.getAttribute(r))
            }
            _getClosestEditable(e) {
                return this._isTextNode(e) ? e.parentElement?.closest(o) || null : e.closest(o)
            }
            _getPreviousEditableTextNode(e, t=!1) {
                const n = this._getClosestEditable(e);
                if (!n)
                    return null;
                if (e.nodeType === Node.TEXT_NODE && this._isTextNode(e.previousSibling) && (!t || e.previousSibling.nodeValue))
                    return e.previousSibling;
                const r = this._getPreviousEditable(n, t);
                return r ? this._getLastTextNode(r, t) : null
            }
            _getNextEditableTextNode(e, t=!1) {
                const n = this._getClosestEditable(e);
                if (!n)
                    return null;
                if (e.nodeType === Node.TEXT_NODE && this._isTextNode(e.nextSibling) && (!t || e.nextSibling.nodeValue))
                    return e.nextSibling;
                const r = this._getNextEditable(n, t);
                return r ? this._getFirstTextNode(r, t) : null
            }
            _findFirstEditable(e) {
                return e.matches(o) ? e : e.querySelector(o)
            }
            _findFirstEditableTextNode(e) {
                const t = this._findFirstEditable(e);
                return t ? this._getFirstTextNode(t) : null
            }
            _getPreviousEditable(e, t=!1) {
                const n = this._getClosestEditable(e);
                if (!n)
                    return null;
                let r = this._editableElements.indexOf(n);
                if (-1 === r)
                    throw new Error("OOXMLInputHandler: could not find current editable in list of all editables");
                if (!t)
                    return this._editableElements[r - 1] || null;
                for (; --r >= 0; )
                    if (this._editableElements[r].innerText.length)
                        return this._editableElements[r];
                return null
            }
            _getNextEditable(e, t=!1) {
                const n = this._getClosestEditable(e);
                if (!n)
                    return null;
                let r = this._editableElements.indexOf(n);
                if (-1 === r)
                    throw new Error("OOXMLHandler: could not find current editable in list of all editables");
                if (!t)
                    return this._editableElements[r + 1] || null;
                for (; ++r < this._editableElements.length; )
                    if (this._editableElements[r].innerText.length && "\ufeff" !== this._editableElements[r].innerText)
                        return this._editableElements[r];
                return null
            }
            _clearSelection(e) {
                if (!e.anchorNode || !e.focusNode)
                    return;
                const {start: t, end: n} = this._getSelectionStartAndEnd(e);
                if (t.node === n.node && this._isTextNode(t.node) && this._isEditableTextNode(t.node)) {
                    const e = t.node.nodeValue || ""
                      , r = e.substr(0, t.offset) + e.substr(n.offset);
                    t.node.nodeValue = r,
                    this._touchNode(t.node),
                    this._setCaret(t.node, t.offset)
                } else {
                    for (const r of this._editableElements)
                        !e.containsNode(r) || r.contains(t.node) || r.contains(n.node) || (r.textContent = "",
                        this._touchNode(r));
                    if (this._isTextNode(t.node) && this._isEditableTextNode(t.node)) {
                        const e = (t.node.nodeValue || "").substr(0, t.offset);
                        t.node.nodeValue = e,
                        this._touchNode(t.node)
                    }
                    if (this._isTextNode(n.node) && this._isEditableTextNode(n.node)) {
                        const e = (n.node.nodeValue || "").substr(n.offset);
                        n.node.nodeValue = e,
                        this._touchNode(n.node)
                    }
                    if (this._input.contains(t.node))
                        this._setCaret(t.node, t.offset);
                    else if (this._input.contains(n.node))
                        this._setCaret(n.node, n.offset);
                    else {
                        const e = this._getPreviousEditable(t.node, !0);
                        e && this._setCaretAtEnd(e)
                    }
                }
            }
            _handleDeleteBackward(e) {
                if (e.isCollapsed) {
                    const t = e.anchorNode
                      , n = e.anchorOffset;
                    if (this._isTextNode(t) && this._isEditableTextNode(t))
                        if (0 === n) {
                            const e = this._getPreviousEditableTextNode(t, !0);
                            if (!e)
                                return;
                            const n = e.nodeValue || ""
                              , r = n.substr(0, Math.max(n.length - 1, 0));
                            e.nodeValue = r,
                            this._touchNode(e),
                            this._setCaret(e, r.length)
                        } else {
                            const e = t.nodeValue || ""
                              , r = e.substr(0, n - 1) + e.substr(n);
                            t.nodeValue = r,
                            this._touchNode(t),
                            this._setCaret(t, n - 1)
                        }
                } else
                    this._clearSelection(e)
            }
            _handleDeleteForward(e) {
                if (e.isCollapsed) {
                    const t = e.anchorNode
                      , n = e.anchorOffset;
                    if (this._isTextNode(t) && this._isEditableTextNode(t))
                        if (n === t.length) {
                            const e = this._getNextEditableTextNode(t, !0);
                            if (!e)
                                return;
                            const n = (e.nodeValue || "").substr(1);
                            e.nodeValue = n,
                            this._touchNode(e),
                            this._setCaret(e, 0)
                        } else {
                            const e = t.nodeValue || ""
                              , r = e.substr(0, n) + e.substr(n + 1);
                            t.nodeValue = r,
                            this._touchNode(t),
                            this._setCaret(t, n)
                        }
                } else
                    this._clearSelection(e)
            }
            _handleDeleteWordForward(e) {
                e.isCollapsed ? (e.modify("extend", "forward", "word"),
                this._clearSelection(e)) : this._clearSelection(e)
            }
            _handleDeleteWordBackward(e) {
                e.isCollapsed ? (e.modify("extend", "backward", "word"),
                this._clearSelection(e)) : this._clearSelection(e)
            }
            _handleInsertText(e, t) {
                void 0 !== t.data && this._insertText(e, t.data || "")
            }
            _handleInsertFromPaste(e, t) {
                const n = t.dataTransfer;
                if (!n)
                    return;
                let r = "";
                if (r = n.getData("text/plain"),
                !r) {
                    const e = n.getData("text/html");
                    if (e) {
                        const t = document.createElement("div");
                        t.innerHTML = e,
                        r = t.innerText
                    }
                }
                this._insertText(e, r)
            }
            _insertText(e, t) {
                if (!e.anchorNode || !e.focusNode)
                    return;
                e.isCollapsed || this._clearSelection(e);
                const {start: n, end: r} = this._getSelectionStartAndEnd(e);
                let o = null;
                if (this._isTextNode(n.node))
                    o = n;
                else if (this._isTextNode(r.node))
                    o = r;
                else {
                    if (!this._isElementNode(n.node) || 0 !== n.offset)
                        return;
                    {
                        const e = this._findFirstEditable(n.node);
                        if (!e)
                            return;
                        const t = document.createTextNode("");
                        e.appendChild(t),
                        o = {
                            node: t,
                            offset: 0
                        }
                    }
                }
                if (this._isInFootNote(o.node))
                    return;
                t = t.replace(/\n/g, " ");
                const s = o.node.nodeValue || ""
                  , a = s.substr(0, o.offset) + t + s.substr(o.offset);
                o.node.nodeValue = a,
                this._touchNode(o.node),
                this._setCaret(o.node, o.offset + t.length)
            }
            _isInFootNote(e) {
                return e.parentElement?.id.startsWith("footnote-ref")
            }
            _setCaretAtEnd(e) {
                if (this._isElementNode(e)) {
                    const t = this._getLastTextNode(e, !0);
                    t && this._setCaret(t, t.length)
                } else
                    this._isTextNode(e) && this._setCaret(e, e.length)
            }
            _setCaretAtStart(e) {
                if (this._isElementNode(e)) {
                    const t = this._getFirstTextNode(e, !0);
                    t && this._setCaret(t, 0)
                } else
                    this._isTextNode(e) && this._setCaret(e, 0)
            }
            _setCaret(e, t) {
                const n = window.getSelection();
                if (!n)
                    return;
                const r = document.createRange();
                r.setEnd(e, t),
                r.setStart(e, t),
                n.removeAllRanges(),
                n.addRange(r)
            }
            _getAllTextNodes(e, t) {
                const n = []
                  , r = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null);
                let o;
                for (; o = r.nextNode(); )
                    t && !o.nodeValue || n.push(o);
                return n
            }
            _getLastTextNode(e, t=!1) {
                const n = this._getAllTextNodes(e, t);
                return n[n.length - 1] || null
            }
            _getFirstTextNode(e, t=!1) {
                return this._getAllTextNodes(e, t)[0] || null
            }
            _getSelectionStartAndEnd(e) {
                const t = e.anchorNode
                  , n = e.focusNode
                  , r = e.anchorOffset
                  , o = e.focusOffset;
                if (!t || !n)
                    return null;
                let s, a;
                return t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_PRECEDING || n === t && o < r ? (s = {
                    node: n,
                    offset: o
                },
                a = {
                    node: t,
                    offset: r
                }) : (s = {
                    node: t,
                    offset: r
                },
                a = {
                    node: n,
                    offset: o
                }),
                {
                    start: s,
                    end: a
                }
            }
            _touchNode(e) {
                const t = this._getClosestEditable(e);
                t && !t.hasAttribute(s) && t.setAttribute(s, "1")
            }
            static getChanges(e) {
                const t = [];
                return Array.from(e.querySelectorAll(a)).forEach((e=>{
                    e.getAttribute(r) && t.push({
                        value: e.textContent || "",
                        id: e.getAttribute(r)
                    })
                }
                )),
                t
            }
        }
    }
    ,
    13822: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>i,
            h: ()=>o
        });
        var r = n(14556);
        const o = ["word", "wordonline", "publisher", "excel", "evernote", "dropboxpaper", "dudenmentor", "medium", "canva", "figma", "powerpoint", "onenote", "gdocs", "gsheets", "gmail", "reddit", "twitter", "mediawiki", "outlook", "libreoffice", "openoffice", "whatsapp", "thunderbird", "slack", "tinymce", "ckeditor", "vscode", "notion", "indesign", "adobepdf", "iwork", "applemail", "yahoomail", "protonmail", "wordpress", "stibodx"]
          , s = ["word", "wordonline", "powerpoint", "onenote", "outlook", "libreoffice", "openoffice", "gdocs", "stibodx"]
          , a = {
            word: "MS Office",
            wordonline: "MS Office",
            onenote: "OneNote",
            outlook: "Outlook",
            powerpoint: "PowerPoint",
            gdocs: "Google Docs",
            openoffice: "OpenOffice",
            libreoffice: "LibreOffice",
            stibodx: "Stibo DX",
            applemail: "Apple Mail",
            iwork: "Apple Pages"
        };
        const i = class {
            static SCAFFOLD_CONTENT_PLACEHOLDER = "{{%%ltplaceholder%%}}";
            static extractGeneratorMetaTag(e) {
                const t = e.match(/<meta[^>]+name=["']?(generator|originator)[^>]*>/i);
                if (!t)
                    return null;
                const n = document.createElement("head");
                try {
                    n.innerHTML = t[0]
                } catch {}
                return n.firstElementChild && n.firstElementChild.getAttribute("content") || null
            }
            static cleanHTML(e, t) {
                return "gdocs" === e ? t.replace(/(id="docs-internal-guid-)([a-z0-9-]+?)(")/gi, ((e,t,n,r)=>t + "fake-" + String(Math.round(99999 * Math.random())) + r)) : t
            }
            static guessTypeFromHTML(e) {
                const t = this.extractGeneratorMetaTag(e);
                if (t) {
                    if (t.includes("Microsoft Word"))
                        return e.includes("_MailAutoSig") || e.includes(".E-MailFormatvorlage") || e.includes(".EmailStyle") || e.includes(".EstiloCorreo") || e.includes(".E-mailStijl") || e.includes(".Stylwiadomocie-mail") || e.includes(".EstiloDeEmail") || e.includes(".StileMessaggioDiPostaElettronica") || e.includes("mso-style-type:personal") || e.includes('name="_olk_signature"') || e.includes("mso-bookmark: _olk_signature") ? "outlook" : "word";
                    if (t.includes("Microsoft PowerPoint"))
                        return "powerpoint";
                    if (t.includes("Microsoft Publisher"))
                        return "publisher";
                    if (t.includes("Microsoft Excel"))
                        return "excel";
                    if (t.includes("Microsoft OneNote"))
                        return "onenote";
                    if (t.includes("OpenOffice"))
                        return "openoffice";
                    if (t.includes("LibreOffice"))
                        return "libreoffice";
                    if (t.includes("Cocoa HTML Writer"))
                        return "iwork"
                }
                return e.includes('="urn:schemas-microsoft-com:office:word"') ? "word" : e.includes('="urn:schemas-microsoft-com:office:publisher"') ? "publisher" : e.includes('="urn:schemas-microsoft-com:office:excel"') ? "excel" : e.includes("Slack-Lato,") ? "slack" : e.includes("data-reddit-rtjson=") ? "reddit" : e.includes("font-family: TwitterChirp") ? "twitter" : e.includes('id="docs-internal-guid') ? "gdocs" : e.includes("<google-sheets-html-origin") ? "gsheets" : e.includes("WordVisiCarriageReturn") || e.includes("OutlineElement Ltr") ? "wordonline" : e.includes('data-smartmail="') || e.includes('"gmail_signature') || e.includes("g_editable") && e.includes("Am Al editable") || e.includes('src="blob:https://mail.google.com') || e.includes('<img data-surl="cid:') ? "gmail" : e.includes("protonmail_signature") ? "protonmail" : e.includes(' data-usually-unique-id="') || e.match(/\sclass="[^"]*\sauthor-d-\w+"/) ? "dropboxpaper" : e.match(/class="graf graf--(p|h\d|blockquote|li)"/) ? "medium" : e.includes("data-en-clipboard=") && e.includes("data-pm-slice=") ? "evernote" : e.includes("para-style-body") && e.includes("direction-ltr") ? "canva" : e.includes('yahoo-style-wrap"') || e.includes('class="ydp') && e.includes("data-setdir=") || e.includes('<div dir="ltr" data-setdir="false">') ? "yahoomail" : e.includes("\x3c!--(figmeta)") && e.includes("(/figmeta)") ? "figma" : e.includes("\x3c!-- wp:paragraph --\x3e") || e.includes("\x3c!-- wp:heading --\x3e") ? "wordpress" : e.includes("ApplePlainTextBody") || e.includes("AppleMailSignature") || e.includes('="application/x-apple-msg-attachment') || e.includes('class="MailOutline"') && (0,
                r.Z)() || e.includes("caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); font-family: Helvetica") && e.includes("-webkit-text-stroke-width: 0px;") && (0,
                r.Z)() ? "applemail" : e.includes("moz-signature") ? "thunderbird" : e.includes('<span style="color: rgb(0, 0, 0); font-family: Publico, cv, icons, serif;') ? "dudenmentor" : e.includes("/newsgate/fonts/ng/css/ng.css") || e.includes("body .cci-note {") || e.includes("body .cci-highlight-yellow {") || e.includes("body .cci-codes {") ? "stibodx" : null
            }
            static guessTypeFromMimeTypes(e) {
                for (const t of e) {
                    if (t.includes("vscode"))
                        return "vscode";
                    if (t.includes("_notion"))
                        return "notion";
                    if (t.includes("rich-text-multi-line-tag"))
                        return "wordpress";
                    if (t.includes("slack/"))
                        return "slack";
                    if (t.includes("text/xcustom"))
                        return "mediawiki";
                    if (t.includes("com.adobe.indesign"))
                        return "indesign";
                    if (t.includes("com.adobe.pdf"))
                        return "adobepdf";
                    if (t.includes("whatsapp"))
                        return "whatsapp";
                    if (t.includes("google-docs-document"))
                        return "gdocs";
                    if (t.includes("com.apple.iwork"))
                        return "iwork";
                    if (t.includes("cke/id"))
                        return "ckeditor";
                    if (t.includes("tinymce"))
                        return "tinymce"
                }
                return null
            }
            static splitHTML(e) {
                const t = e.match(/^([\s\S]+<body[^>]*>)([\s\S]+)(<\/body>[\s\S]+)$/i);
                if (!t)
                    return null;
                const n = this.removeConditionalComments(t[2]);
                return {
                    scaffold: t[1] + this.SCAFFOLD_CONTENT_PLACEHOLDER + t[3],
                    value: n
                }
            }
            static joinHTML(e, t) {
                return e.replace(this.SCAFFOLD_CONTENT_PLACEHOLDER, this.restoreConditionalComments(t))
            }
            static canPreserveFormatting(e) {
                return s.includes(e)
            }
            static getDisplayName(e) {
                return a[e] || null
            }
            static getSnackbarDisplayName(e) {
                return "word" === e || "wordonline" === e ? "MS Word" : this.getDisplayName(e)
            }
            static extractCSS(e) {
                const t = e.match(/<style[^>]*>[\s\S]+?<\/style>/gi);
                if (t) {
                    let e = "";
                    return t.map((t=>{
                        const n = t.match(/<style[^>]*>([\s\S]+?)<\/style>/i);
                        n && (e += n[1].replace("\x3c!--", "").replace("--\x3e", "") + "\n")
                    }
                    )),
                    e
                }
                return ""
            }
            static increaseFontSize(e, t, n) {
                let r = this.extractCSS(e);
                const o = /(font(?:-size)?:\s*)(\d+(?:\.\d+)?)(px|pt)/g;
                r = r.replace(o, ((e,t,r,o)=>t + Math.round(parseFloat(r) * n) + o));
                const s = /(line-height:\s*)(\d+(?:\.\d+)?)(px|pt)/g;
                r = r.replace(s, ((e,t,r,o)=>t + Math.round(parseFloat(r) * n) + o));
                const a = [];
                [...t.matchAll(o)].forEach((e=>{
                    const t = Math.round(parseFloat(e[2]) * n) + e[3]
                      , r = `[style*="${e[0]}"] { font-size: ${t} !important; }`;
                    a.includes(r) || a.push(r)
                }
                ));
                return [...t.matchAll(s)].forEach((e=>{
                    const t = Math.round(parseFloat(e[2]) * n) + e[3]
                      , r = `[style*="${e[0]}"] { line-height: ${t} !important; }`;
                    a.includes(r) || a.push(r)
                }
                )),
                a.length && (r += "\n" + a.join("\n")),
                r
            }
            static removeConditionalComments(e) {
                return e.replace(/<!\[if !supportLists\]>([\s\S]+?)<!\[endif\]>/gi, ((e,t)=>`<span class="pasted-word-bullet-point" contenteditable="false">${t}</span>`))
            }
            static restoreConditionalComments(e) {
                return e.replace(/<span[^>]+class="pasted-word-bullet-point"[^>]*>([\s\S]+?)<\/span>/gi, ((e,t)=>`<![if !supportLists]>${t}<![endif]>`))
            }
        }
    }
    ,
    40926: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>c
        });
        var r = n(37855);
        const o = /(^\s*)|(\s*$)/g
          , s = /([a-zèéêáàâ0-9])['’`´‘]([a-z])/gi
          , a = /[-_–"“”„'’`´‘˚^°+*.!?…:,;=)([\]%¡¿‽#<>•/]/g
          , i = /\s+/g;
        const c = class {
            _text;
            _sentenceRanges;
            _normalizedText;
            _allWords = null;
            constructor(e, t) {
                this._text = e,
                this._sentenceRanges = t,
                this._normalizedText = this.normalizeText(e)
            }
            updateText(e, t) {
                this._text = e,
                this._sentenceRanges = t,
                this._normalizedText = this.normalizeText(e),
                this._allWords = null
            }
            normalizeText(e) {
                return e = (e = (e = (e = e.replace(s, "$1$2")).replace(a, " ")).replace(i, " ")).replace(o, "")
            }
            getAllWords() {
                return this._normalizedText ? (this._allWords || (this._allWords = this._normalizedText.replace(/([0-9])[.,]([0-9])/g, "$1$2").split(/\s/)),
                this._allWords) : []
            }
            countWords() {
                return this.getAllWords().length
            }
            countUniqueWords() {
                const e = this.getAllWords();
                return (0,
                r.Z)(e).length
            }
            countSentences() {
                return this._sentenceRanges?.length ?? 0
            }
            getReadingTime() {
                return Math.round(this.countWords() / 200)
            }
            getSpeakingTime() {
                return Math.round(this.countWords() / 130)
            }
            countCharacters() {
                return this._text.trim().length
            }
        }
    }
    ,
    39558: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>d
        });
        var r = n(20941)
          , o = n(64554);
        var s = n(58460);
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function i(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r)
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        const c = {}
          , l = e=>{
            const t = [];
            for (const n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                    const r = n;
                    t.push([n, e[r]])
                }
            return t.sort((([e],[t])=>e.localeCompare(t))).reduce(((e,[t,n])=>`${e};${t}=${JSON.stringify(n)}`), "")
        }
        ;
        function d(e, t, n, d, u) {
            const p = r.Z.get(o.rR) || !1
              , h = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        i(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({
                ignoreFocus: !0,
                localeCode: (document.documentElement.lang || "en").toLowerCase(),
                enableSynonyms: !0,
                disablePremiumTeaser: !0,
                disableRuleIgnore: !0,
                dev: p,
                testGroups: {
                    deggec: !0,
                    qb: "test" === (0,
                    s.Z)("qb_062023") || p
                }
            }, u);
            h.preferredVariants = [t.en_variation, t.de_variation, t.pt_variation, t.ca_variation].filter((e=>!!e)),
            h.preferredLanguages = t.preferred_languages,
            h.motherTongue = t.mother_tongue || void 0,
            n && (d && (h.user = {
                email: n.email,
                token: d,
                premium: n.is_premium
            }),
            h.enableStatisticsCollection = n.statistics_collection);
            const _ = l(h);
            return void 0 === c[_] && (c[_] = new e(h)),
            c[_]
        }
    }
    ,
    93465: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>d
        });
        var r = n(90910);
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    a(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function a(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r)
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        const i = "cookie-consent"
          , c = Object.prototype.hasOwnProperty;
        let l = !1;
        const d = new class {
            _consent;
            COOKIE_NAME = "cookie_consent";
            constructor() {
                if (l)
                    throw new Error("Please use the exported instance.");
                l = !0,
                this._consent = this._getConsentCookieData()
            }
            set(e) {
                const t = s(s({}, this._consent), e);
                try {
                    (0,
                    r.d)({
                        name: this.COOKIE_NAME,
                        value: btoa(JSON.stringify(t)),
                        lifetime: 15768e3
                    }),
                    this._notifyChange(t),
                    this._consent = t
                } catch (e) {
                    console.error(e)
                }
            }
            get(e) {
                return this._consent[e]
            }
            analytics(e) {
                "boolean" == typeof this._consent.analytics && e(this._consent.analytics),
                window.addEventListener(`${i}.analytics`, (t=>{
                    "boolean" == typeof t.detail.analytics && e(t.detail.analytics)
                }
                ))
            }
            marketing(e) {
                "boolean" == typeof this._consent.marketing && e(this._consent.marketing),
                window.addEventListener(`${i}.marketing`, (t=>{
                    "boolean" == typeof t.detail.marketing && e(t.detail.marketing)
                }
                ))
            }
            onChange(e) {
                window.addEventListener(i, (t=>{
                    e(t.detail)
                }
                ))
            }
            _getConsentCookieData() {
                try {
                    const [,e=""] = document.cookie.match(/cookie_consent=([^;]+)/) || []
                      , t = JSON.parse(atob(decodeURIComponent(e)));
                    return function(e) {
                        const t = ["analytics", "marketing"];
                        return "object" == typeof e && null !== e && Object.keys(e).length === t.length && t.every((t=>["boolean", "undefined"].includes(typeof e[t])))
                    }(t) ? t : {}
                } catch {
                    return {}
                }
            }
            _notifyChange(e) {
                let t;
                for (t in e)
                    c.call(e, t) && e[t] !== this._consent[t] && window.dispatchEvent(new CustomEvent(`${i}.${t}`,{
                        detail: {
                            [t]: e[t]
                        }
                    }));
                window.dispatchEvent(new CustomEvent(i,{
                    detail: this._consent
                }))
            }
        }
    }
    ,
    48377: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>w
        });
        var r = n(64554)
          , o = n(20941);
        const s = 1700802e6
          , a = s + 972e5
          , i = 17010612e5
          , c = i + 1728e5
          , l = 1701234e6
          , d = l + 1728e5
          , u = 17010072e5
          , p = u + 324e5
          , h = {
            code: "2023-NOV-CYBERWEEK",
            percent: 20,
            expires: new Date(a)
        }
          , _ = {
            code: "2023-NOV-CYBERWEEK-SOUTH-EUROPE",
            percent: 33,
            expires: new Date(a)
        }
          , m = {
            code: "2023-NOV-CYBERWEEK",
            percent: 20,
            expires: new Date(c)
        }
          , g = {
            code: "2023-NOV-CYBERWEEK-SOUTH-EUROPE",
            percent: 33,
            expires: new Date(c)
        }
          , f = {
            code: "2023-NOV-CYBERWEEK",
            percent: 20,
            expires: new Date(d)
        }
          , y = {
            code: "2023-NOV-CYBERWEEK-SOUTH-EUROPE",
            percent: 33,
            expires: new Date(d)
        }
          , v = {
            code: "2023-NOV-CYBERWEEK",
            percent: 20,
            expires: new Date(p)
        }
          , b = {
            code: "2023-NOV-CYBERWEEK-SOUTH-EUROPE",
            percent: 33,
            expires: new Date(p)
        };
        function x() {
            return document.documentElement.hasAttribute("data-lt-extension-installed") || "localhost" === location.hostname ? new Promise(((e,t)=>{
                let n = 0;
                const r = ()=>{
                    if (document.documentElement.hasAttribute("data-lt-coupon"))
                        return clearInterval(o),
                        void e(function() {
                            const e = document.documentElement.getAttribute("data-lt-coupon")
                              , t = document.documentElement.getAttribute("data-lt-coupon-expires") || void 0;
                            return {
                                code: e,
                                percent: Number(document.documentElement.getAttribute("data-lt-coupon-percent")) || void 0,
                                expires: t ? new Date(+t) : void 0
                            }
                        }());
                    "complete" === document.readyState && ++n > 5 && (clearInterval(o),
                    t())
                }
                  , o = setInterval(r, 150);
                r()
            }
            )) : Promise.reject()
        }
        function w() {
            const e = String(o.Z.get(r.kY));
            if (e)
                try {
                    const [t,n,r] = atob(e).split(":");
                    if (t && n && r)
                        return Promise.resolve({
                            code: r,
                            percent: Number(n),
                            expires: new Date(1e3 * (Number(t) + 86400))
                        })
                } catch {
                    o.Z.remove(r.kY)
                }
            const t = document.documentElement.getAttribute("data-country") || "XX"
              , n = new URLSearchParams(location.search)
              , w = location.href.includes("/premium");
            if (n.get("coupon") && w) {
                const e = n.get("coupon");
                if (e && (!r.tx[e] || r.tx[e].countries.includes(t)))
                    return Promise.resolve({
                        code: e
                    })
            }
            const E = []
              , S = function(e) {
                for (const t in r.tx) {
                    if (navigator.language.startsWith("de") || navigator.language.startsWith("nl"))
                        return null;
                    if ({}.hasOwnProperty.call(r.tx, t) && r.tx[t].countries.includes(e))
                        return {
                            code: t,
                            percent: r.tx[t].percent
                        }
                }
                return null
            }(t);
            S && E.push(S);
            const T = Date.now();
            T > s && T < a && (20 === S?.percent ? E.push(_) : E.push(h)),
            T > i && T < c && (20 === S?.percent ? E.push(g) : E.push(m)),
            T > l && T < d && (20 === S?.percent ? E.push(y) : E.push(f)),
            T > u && T < p && (20 === S?.percent ? E.push(b) : E.push(v));
            const k = n.get("utm_campaign") || n.get("pk_campaign");
            return k && k.includes("addon2-changelog") && w && (20 === S?.percent ? E.push({
                code: "2023-NOV-CHANGELOG-LINK-SOUTH-EUROPE",
                percent: 33
            }) : E.push({
                code: "2023-NOV-CHANGELOG-LINK",
                percent: 20
            })),
            x().then((e=>{
                E.unshift(e)
            }
            )).catch((()=>null)).then((()=>{
                const e = E.find((e=>void 0 === e.percent));
                if (e)
                    return e;
                E.sort(((e,t)=>e.percent === t.percent ? 0 : e.percent > t.percent ? -1 : 1));
                const t = E[0] || null;
                if (!t)
                    return null;
                if (!t.expires) {
                    const e = E.find((e=>!!e.expires));
                    e && (t.expires = e.expires)
                }
                return t
            }
            ))
        }
    }
    ,
    36461: (e,t,n)=>{
        "use strict";
        function r(e) {
            return e.isSpellingError ? "spelling" : e.isStyleError ? "style" : "TYPOGRAPHY" === e.rule.category.id ? "typography" : e.isPunctuationError ? "punctuation" : "grammar"
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    4419: (e,t,n)=>{
        "use strict";
        function r(e) {
            return {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": e || ""
            }
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    19925: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>l
        });
        var r = n(54280)
          , o = n(9685)
          , s = n(64554)
          , a = n(52330);
        function i(e, t) {
            return e.find((e=>e.code === t))
        }
        function c(e, t) {
            return e.find((e=>(0,
            o.Z)(e.code) === t))
        }
        function l(e, t=(0,
        a.Z)()) {
            const n = {
                en: e && e.en_variation || s.fK.en,
                de: e && e.de_variation || s.fK.de,
                pt: e && e.pt_variation || s.fK.pt,
                ca: e && e.ca_variation || s.fK.ca
            }
              , l = [];
            let d = [];
            e && e.preferred_languages.length ? (d = [...e.preferred_languages],
            e.mother_tongue && d.unshift(e.mother_tongue)) : d = (0,
            r.Z)().concat(["en-us"]);
            const u = [];
            return d.forEach((e=>{
                if (e.includes("-"))
                    u.push(e.toLowerCase());
                else {
                    const t = (0,
                    o.Z)(e)
                      , r = d.find((e=>e.includes("-") && e.startsWith(t)));
                    if (r)
                        return void u.push(r);
                    const s = n[t] || t;
                    u.push(s)
                }
            }
            )),
            u.forEach((e=>{
                const n = e.toLowerCase().replace(/_/g, "-")
                  , r = (0,
                o.Z)(n);
                if (c(l, r))
                    return;
                let a = i(t, n);
                if (a)
                    return void l.push(a);
                s.fK[r] && (a = i(t, n),
                a) ? l.push(a) : (a = c(t, r),
                a && l.push(a))
            }
            )),
            l
        }
    }
    ,
    52330: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>s
        });
        var r = n(64554);
        const o = (0,
        n(44444).Z)();
        function s() {
            return r.E7.map((e=>({
                code: e,
                name: o.get(`js.languages.${e}`)
            })))
        }
    }
    ,
    58460: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>s
        });
        var r = n(20941);
        const o = {
            qb_062023: [{
                name: "test",
                from: 0,
                to: 50
            }, {
                name: "control",
                from: 50,
                to: 100
            }],
            ditch_braintree: [{
                name: "test",
                from: 0,
                to: 50
            }, {
                name: "control",
                from: 50,
                to: 100
            }],
            google_pay: [{
                name: "test",
                from: 0,
                to: 50
            }, {
                name: "control",
                from: 50,
                to: 100
            }]
        };
        function s(e) {
            const t = o[e];
            if (!t)
                throw new Error("Test does not exist");
            let n = "control"
              , s = Math.floor(100 * Math.random());
            try {
                const t = r.Z.get("test:" + e);
                if (navigator.webdriver && "number" != typeof t)
                    return "control";
                "number" == typeof t ? s = t : r.Z.set("test:" + e, s)
            } catch {}
            for (const e of t) {
                if (s >= e.from && s < e.to) {
                    n = e.name;
                    break
                }
            }
            return n
        }
    }
    ,
    40979: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>l
        });
        var r = n(4419);
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    a(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function a(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r)
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        const i = "/documents"
          , c = navigator.userAgent.includes("Chrome/");
        const l = class {
            static _searchAbortController = null;
            static get(e, t) {
                return fetch(`${i}/${e}`, {
                    method: "GET",
                    headers: (0,
                    r.Z)(t)
                }).then((e=>e.ok ? e.json() : Promise.reject())).then((e=>e.data))
            }
            static update(e, t, n) {
                const o = JSON.stringify(t)
                  , s = o.length < 48e3;
                return s && n.isUnloading && !c ? (this.updateAsBeacon(e, t, n),
                new Promise((()=>null))) : fetch(`${i}/${e}`, {
                    method: "PATCH",
                    body: o,
                    headers: (0,
                    r.Z)(n.csrfToken),
                    keepalive: s
                }).then((e=>e.ok ? e.json() : Promise.reject())).then((e=>e.data))
            }
            static updateAsBeacon(e, t, n) {
                if (!navigator.sendBeacon)
                    return;
                const r = s(s({}, t), {}, {
                    _method: "PATCH",
                    _token: n.csrfToken
                })
                  , o = new Blob([JSON.stringify(r)],{
                    type: "application/json"
                });
                navigator.sendBeacon(`${i}/${e}`, o)
            }
            static add(e, t, n, o, s=!1, a=!1, l="auto", d, u, p, h) {
                const _ = JSON.stringify({
                    text: t,
                    scaffold: n,
                    source: o,
                    snippet: e,
                    ooxml_id: d,
                    picky: a,
                    persistent: s,
                    language: l,
                    writing_goal: u,
                    writing_goal_custom: p
                })
                  , m = _.length < 48e3;
                return m && h.isUnloading && !c ? (this.addAsBeacon(e, t, n, o, s, a, l, d, h),
                new Promise((()=>null))) : fetch(i, {
                    method: "POST",
                    body: _,
                    headers: (0,
                    r.Z)(h.csrfToken),
                    keepalive: m
                }).then((e=>e.ok ? e.json() : Promise.reject())).then((e=>e.data))
            }
            static addAsBeacon(e, t, n, r, o=!1, s=!1, a="auto", c, l) {
                if (!navigator.sendBeacon)
                    return;
                const d = {
                    text: t,
                    scaffold: n,
                    source: r,
                    snippet: e,
                    picky: s,
                    persistent: o,
                    ooxml_id: c,
                    language: a,
                    _token: l.csrfToken
                }
                  , u = new Blob([JSON.stringify(d)],{
                    type: "application/json"
                });
                navigator.sendBeacon(i, u)
            }
            static remove(e, t, n=!1) {
                let o = `${i}/${e}`;
                return n && (o += "?force=1"),
                fetch(o, {
                    method: "DELETE",
                    headers: (0,
                    r.Z)(t)
                }).then((e=>e.ok ? Promise.resolve() : Promise.reject()))
            }
            static restore(e, t) {
                return fetch(`${i}/${e}/restore`, {
                    method: "PATCH",
                    headers: (0,
                    r.Z)(t)
                }).then((e=>e.ok ? e.json() : Promise.reject())).then((e=>e.data))
            }
            static ignoreRule(e, t, n) {
                return fetch(`/documents/${e}/ignore_rule`, {
                    method: "POST",
                    headers: (0,
                    r.Z)(n),
                    body: JSON.stringify({
                        rule_id: t.id.slice(0, 100),
                        language: t.language,
                        phrase: t.phrase
                    })
                }).then((e=>e.ok ? Promise.resolve() : Promise.reject()))
            }
            static clearIgnoredRules(e, t) {
                return fetch(`${i}/${e}/clear_ignored_rules`, {
                    method: "POST",
                    headers: (0,
                    r.Z)(t)
                }).then((e=>e.ok ? Promise.resolve() : Promise.reject()))
            }
            static search(e, t) {
                return this._searchAbortController && this._searchAbortController.abort(),
                this._searchAbortController = new AbortController,
                fetch(`${i}/search?q=${encodeURIComponent(e)}`, {
                    method: "GET",
                    headers: (0,
                    r.Z)(t),
                    signal: this._searchAbortController.signal
                }).then((e=>e.ok ? e.json() : Promise.reject())).then((e=>e.data))
            }
            static getTrash(e) {
                return fetch(`${i}/trash`, {
                    method: "GET",
                    headers: (0,
                    r.Z)(e)
                }).then((e=>e.ok ? e.json() : Promise.reject())).then((e=>e.data))
            }
            static clearTrash(e) {
                return fetch(`${i}/clear_trash`, {
                    method: "POST",
                    headers: (0,
                    r.Z)(e)
                }).then((e=>e.ok ? Promise.resolve() : Promise.reject()))
            }
        }
    }
    ,
    37976: (e,t,n)=>{
        "use strict";
        n.d(t, {
            O: ()=>o,
            Z: ()=>s
        });
        var r = n(85725);
        const o = "rate_limit";
        const s = class {
            static upload(e, t, n, s, a) {
                return new Promise(((i,c)=>{
                    const l = new FormData;
                    l.append("file", t),
                    "number" == typeof e && l.append("userId", String(e));
                    const d = new XMLHttpRequest;
                    d.responseType = "json";
                    const u = (0,
                    r.P)(s, 200);
                    d.upload.addEventListener("progress", (function(e) {
                        const t = Math.round(e.loaded / e.total * 100);
                        u.call(Math.min(99, t))
                    }
                    ));
                    const p = ()=>{
                        d.abort()
                    }
                    ;
                    a && a.signal.addEventListener("abort", p),
                    d.addEventListener("load", (function() {
                        a && a.signal.removeEventListener("abort", p),
                        200 === d.status || 204 === d.status ? (u.call(100),
                        u.flush(),
                        i(d.response)) : c()
                    }
                    )),
                    d.addEventListener("error", (function() {
                        c(new Error(429 === d.status ? o : "failure"))
                    }
                    )),
                    d.open("POST", `${n}/docs`, !0),
                    d.setRequestHeader("Accept", "application/json"),
                    d.send(l)
                }
                ))
            }
            static update(e, t, n, r) {
                return fetch(`${r}/docs`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: e,
                        id: t,
                        changes: n
                    })
                }).then((e=>e.ok ? e.json() : Promise.reject()))
            }
            static getDownloadURL(e, t, n) {
                return `${n}/docs?userId=${e}&id=${t}`
            }
            static download(e, t, n) {
                return window.open(this.getDownloadURL(e, t, n), "_blank"),
                Promise.resolve()
            }
        }
    }
    ,
    8686: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>a
        });
        var r = n(64554)
          , o = n(84064)
          , s = n(38277);
        const a = class {
            static trackMatomoEvent(e, t, n) {
                window._paq && window._paq.push(["trackEvent", e, t, n || ""])
            }
            static trackAnalyticsEvent(e, t, n) {
                window.dataLayer && window.dataLayer.push({
                    event: "custom-event",
                    event_category: e,
                    event_action: t,
                    event_label: n
                })
            }
            static trackEvent(e, t, n) {
                this.trackMatomoEvent(e, t, n),
                this.trackAnalyticsEvent(e, t, n)
            }
            static trackPurchase(e) {
                if (!window.dataLayer)
                    return;
                window.dataLayer.push({
                    event: "purchase",
                    ecommerce: {
                        transaction_id: e.transactionId,
                        currency: e.currency,
                        value: e.value,
                        tax: e.tax,
                        coupon: e.coupon,
                        items: [{
                            item_id: e.item,
                            item_name: e.item
                        }]
                    }
                });
                let t = null;
                e.item.includes("business") ? t = "AW-1013216392/zym1CI_ElI0YEIjpkeMD" : e.item.includes("1-month") ? t = "AW-1013216392/KaDMCMvMko0YEIjpkeMD" : e.item.includes("3-month") ? t = "AW-1013216392/jvMeCM7Mko0YEIjpkeMD" : e.item.includes("1-year") ? t = "AW-1013216392/Aj3fCMnNko0YEIjpkeMD" : e.item.includes("2-year") && (t = "AW-1013216392/AXe0CMzNko0YEIjpkeMD"),
                !t || navigator.webdriver || (0,
                s.Z)() || function(...e) {
                    window.dataLayer.push(arguments)
                }("event", "conversion", {
                    send_to: t,
                    transaction_id: ""
                }),
                this.trackPurchaseToShareASale(e)
            }
            static loadShareASaleScript() {
                if (navigator.webdriver || (0,
                s.Z)())
                    return;
                const e = "https://www.dwin1.com/49397.js";
                if (document.querySelector(`script[src="${e}"]`))
                    return;
                const t = document.createElement("script");
                t.defer = !0,
                t.src = e,
                document.body.append(t)
            }
            static trackPurchaseToShareASale(e) {
                this.trackToShareASale({
                    type: "sale",
                    trackingId: e.transactionId,
                    amount: e.value,
                    coupon: e.coupon,
                    currency: e.currency,
                    sku: e.item
                })
            }
            static trackInstallationToShareASale() {
                const e = [Date.now(), (0,
                o.Z)(), navigator.language].join(":");
                this.trackToShareASale({
                    type: "lead",
                    trackingId: e,
                    amount: 0
                })
            }
            static trackToShareASale(e) {
                if (navigator.webdriver || (0,
                s.Z)())
                    return void console.log("ShareASale tracking disabled in dev and test env", e);
                const t = document.documentElement.getAttribute("data-country") || "unknown"
                  , n = document.createElement("img");
                n.width = n.height = 1,
                n.style.position = "absolute";
                const o = new URL("https://www.shareasale.com/sale.cfm");
                o.searchParams.append("tracking", e.trackingId),
                o.searchParams.append("amount", String(e.amount)),
                o.searchParams.append("merchantID", String(r.A7)),
                o.searchParams.append("transtype", e.type),
                o.searchParams.append("xtype", t),
                e.coupon && o.searchParams.append("couponcode", e.coupon),
                e.currency && o.searchParams.append("currency", e.currency.toUpperCase()),
                e.sku && o.searchParams.append("skulist", e.sku),
                n.src = o.toString(),
                document.body.append(n),
                this.loadShareASaleScript()
            }
            static trackPageView() {
                window._paq && window._paq.push(["trackPageView"]),
                window.dataLayer && window.dataLayer.push({
                    event: "custom-pageview"
                })
            }
        }
    }
    ,
    66807: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>E
        });
        var r = n(93465)
          , o = n(8686);
        const s = "cookie-banner"
          , a = "cookie-banner-accept-all"
          , i = "cookie-banner-preferences"
          , c = "cookie-banner--slide-out";
        let l, d, u, p, h, _ = null;
        const m = Math.random() < .01;
        function g() {
            "number" == typeof h && clearTimeout(h),
            l?.remove(),
            l = null
        }
        function f(e=!1) {
            _ && window.clearTimeout(_),
            e ? g() : (l?.addEventListener("transitionend", (()=>g()), {
                once: !0
            }),
            l?.classList.add(c),
            h = window.setTimeout((()=>g()), 250))
        }
        function y(e) {
            const t = new URL(location.href);
            t.href = u?.href || "",
            t.searchParams.set("return", location.pathname + location.search + location.hash),
            "" !== t.pathname ? (location.href = t.toString(),
            w("go_to_preferences"),
            e?.preventDefault()) : f(!0)
        }
        function v() {
            r.Z.set({
                analytics: !0,
                marketing: !0
            }),
            p?.removeEventListener("click", b),
            u?.removeEventListener("click", y),
            f(),
            w("accept_all"),
            x()
        }
        function b() {
            r.Z.set({
                analytics: !1,
                marketing: !1
            }),
            d?.removeEventListener("click", v),
            u?.removeEventListener("click", y),
            f(),
            w("decline_all"),
            x()
        }
        function x() {
            window.dataLayer && window.dataLayer.push({
                event: "update-consent"
            })
        }
        function w(e) {
            m && o.Z.trackMatomoEvent("CookieBanner", e)
        }
        function E() {
            return l = document.getElementById(s),
            null !== l && (_ = window.setTimeout((()=>{
                w("show")
            }
            ), 700),
            d = document.getElementById(a),
            u = document.getElementById(i),
            d?.addEventListener("click", v, {
                once: !0
            }),
            u?.addEventListener("click", y, {
                once: !0
            })),
            {
                hide: f
            }
        }
    }
    ,
    80252: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>c
        });
        var r = n(64554)
          , o = n(90910);
        const s = "data-lt-extension-installed";
        var a = n(93465)
          , i = n(66807);
        function c() {
            const e = (0,
            i.Z)()
              , t = window.dataLayer = window.dataLayer || [];
            function n(...e) {
                t.push(arguments)
            }
            new Promise((e=>{
                if (document.documentElement.hasAttribute(s))
                    return void e(void 0);
                const t = new MutationObserver((n=>{
                    for (const {attributeName: r} of n)
                        if (r === s) {
                            e(void 0),
                            t.disconnect();
                            break
                        }
                }
                ));
                t.observe(document.documentElement, {
                    attributeFilter: [s]
                }),
                setTimeout((()=>t.disconnect()), 5e3)
            }
            )).then((()=>{
                a.Z.set({
                    analytics: a.Z.get("analytics") ?? !0,
                    marketing: a.Z.get("marketing") ?? !0
                }),
                e.hide(!0)
            }
            )),
            function() {
                try {
                    if (document.cookie.includes("cookieconsent_dismissed"))
                        return a.Z.set({
                            analytics: !0,
                            marketing: !0
                        }),
                        (0,
                        o.k)("cookieconsent_dismissed"),
                        !0
                } catch {}
                return !1
            }() && e.hide(!0),
            a.Z.analytics((e=>{
                window._paq = window._paq || [],
                window._paq.push([e ? "setCookieConsentGiven" : "forgetCookieConsentGiven"]),
                n("consent", "update", {
                    analytics_storage: e ? "granted" : "denied"
                }),
                window.FS?.consent?.(e),
                e || ((0,
                o.k)("_ga"),
                (0,
                o.k)("_ga_" + r.hx))
            }
            )),
            a.Z.marketing((e=>{
                n("consent", "update", {
                    ad_storage: e ? "granted" : "denied",
                    personalization_storage: e ? "granted" : "denied"
                }),
                e || ((0,
                o.k)("_gcl_au"),
                (0,
                o.k)("_ttp"),
                (0,
                o.k)("_tt_enable_cookie"),
                (0,
                o.k)("_fbp"))
            }
            ))
        }
    }
    ,
    76368: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>a
        });
        const r = document.querySelectorAll("link[rel=icon][data-color-scheme-dark-href]")
          , o = window.matchMedia("(prefers-color-scheme: dark)");
        function s() {
            r.forEach((e=>{
                const t = o.matches ? "data-color-scheme-dark-href" : "data-color-scheme-light-href";
                e.href = e.getAttribute(t) ?? e.href
            }
            ))
        }
        function a() {
            var e;
            r.forEach((e=>{
                e.setAttribute("data-color-scheme-light-href", e.href)
            }
            )),
            e = s,
            "function" == typeof o.addEventListener ? o.addEventListener("change", e) : o.addListener(e),
            s()
        }
    }
    ,
    72791: (e,t,n)=>{
        "use strict";
        function r() {
            const e = document.getElementById("language-select");
            e && e.addEventListener("change", (e=>{
                e.target instanceof HTMLSelectElement && (window.location.href = e.target.value)
            }
            ))
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    93378: (e,t,n)=>{
        "use strict";
        n.d(t, {
            ZP: ()=>xr,
            du: ()=>br,
            x3: ()=>vr
        });
        var r = n(6878)
          , o = n(86922)
          , s = n(67451)
          , a = n(65268);
        const i = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
          , c = [/^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/];
        class l {
            static __initStatic() {
                this.id = "InboundFilters"
            }
            constructor(e={}) {
                this.name = l.id,
                this._options = e
            }
            setupOnce(e, t) {}
            processEvent(e, t, n) {
                const r = n.getOptions()
                  , l = function(e={}, t={}) {
                    return {
                        allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                        denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                        ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : i],
                        ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || [], ...e.disableTransactionDefaults ? [] : c],
                        ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                    }
                }(this._options, r);
                return function(e, t) {
                    if (t.ignoreInternal && function(e) {
                        try {
                            return "SentryError" === e.exception.values[0].type
                        } catch (e) {}
                        return !1
                    }(e))
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${(0,
                        s.jH)(e)}`),
                        !0;
                    if (function(e, t) {
                        if (e.type || !t || !t.length)
                            return !1;
                        return function(e) {
                            const t = [];
                            e.message && t.push(e.message);
                            let n;
                            try {
                                n = e.exception.values[e.exception.values.length - 1]
                            } catch (e) {}
                            n && n.value && (t.push(n.value),
                            n.type && t.push(`${n.type}: ${n.value}`));
                            "undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__ || 0 !== t.length || o.kg.error(`Could not extract message for event ${(0,
                            s.jH)(e)}`);
                            return t
                        }(e).some((e=>(0,
                        a.U0)(e, t)))
                    }(e, t.ignoreErrors))
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0,
                        s.jH)(e)}`),
                        !0;
                    if (function(e, t) {
                        if ("transaction" !== e.type || !t || !t.length)
                            return !1;
                        const n = e.transaction;
                        return !!n && (0,
                        a.U0)(n, t)
                    }(e, t.ignoreTransactions))
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0,
                        s.jH)(e)}`),
                        !0;
                    if (function(e, t) {
                        if (!t || !t.length)
                            return !1;
                        const n = d(e);
                        return !!n && (0,
                        a.U0)(n, t)
                    }(e, t.denyUrls))
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0,
                        s.jH)(e)}.\nUrl: ${d(e)}`),
                        !0;
                    if (!function(e, t) {
                        if (!t || !t.length)
                            return !0;
                        const n = d(e);
                        return !n || (0,
                        a.U0)(n, t)
                    }(e, t.allowUrls))
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0,
                        s.jH)(e)}.\nUrl: ${d(e)}`),
                        !0;
                    return !1
                }(e, l) ? null : e
            }
        }
        function d(e) {
            try {
                let t;
                try {
                    t = e.exception.values[0].stacktrace.frames
                } catch (e) {}
                return t ? function(e=[]) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        const n = e[t];
                        if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename)
                            return n.filename || null
                    }
                    return null
                }(t) : null
            } catch (t) {
                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.error(`Cannot extract url for event ${(0,
                s.jH)(e)}`),
                null
            }
        }
        l.__initStatic();
        var u = n(39109);
        let p;
        class h {
            static __initStatic() {
                this.id = "FunctionToString"
            }
            constructor() {
                this.name = h.id
            }
            setupOnce() {
                p = Function.prototype.toString;
                try {
                    Function.prototype.toString = function(...e) {
                        const t = (0,
                        u.HK)(this) || this;
                        return p.apply(t, e)
                    }
                } catch (e) {}
            }
        }
        h.__initStatic();
        var _ = n(70133);
        const m = [];
        function g(e) {
            const t = e.defaultIntegrations || []
              , n = e.integrations;
            let r;
            t.forEach((e=>{
                e.isDefaultInstance = !0
            }
            )),
            r = Array.isArray(n) ? [...t, ...n] : "function" == typeof n ? (0,
            s.lE)(n(t)) : t;
            const o = function(e) {
                const t = {};
                return e.forEach((e=>{
                    const {name: n} = e
                      , r = t[n];
                    r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e)
                }
                )),
                Object.keys(t).map((e=>t[e]))
            }(r)
              , a = function(e, t) {
                for (let n = 0; n < e.length; n++)
                    if (!0 === t(e[n]))
                        return n;
                return -1
            }(o, (e=>"Debug" === e.name));
            if (-1 !== a) {
                const [e] = o.splice(a, 1);
                o.push(e)
            }
            return o
        }
        function f(e, t, n) {
            if (n[t.name] = t,
            -1 === m.indexOf(t.name) && (t.setupOnce(_.cc, r.Gd),
            m.push(t.name)),
            e.on && "function" == typeof t.preprocessEvent) {
                const n = t.preprocessEvent.bind(t);
                e.on("preprocessEvent", ((t,r)=>n(t, r, e)))
            }
            if (e.addEventProcessor && "function" == typeof t.processEvent) {
                const n = t.processEvent.bind(t)
                  , r = Object.assign(((t,r)=>n(t, r, e)), {
                    id: t.name
                });
                e.addEventProcessor(r)
            }
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`Integration installed: ${t.name}`)
        }
        const y = 50
          , v = /\(error: (.*)\)/
          , b = /captureMessage|captureException/;
        function x(...e) {
            const t = e.sort(((e,t)=>e[0] - t[0])).map((e=>e[1]));
            return (e,n=0)=>{
                const r = []
                  , o = e.split("\n");
                for (let e = n; e < o.length; e++) {
                    const n = o[e];
                    if (n.length > 1024)
                        continue;
                    const s = v.test(n) ? n.replace(v, "$1") : n;
                    if (!s.match(/\S*Error: /)) {
                        for (const e of t) {
                            const t = e(s);
                            if (t) {
                                r.push(t);
                                break
                            }
                        }
                        if (r.length >= y)
                            break
                    }
                }
                return function(e) {
                    if (!e.length)
                        return [];
                    const t = Array.from(e);
                    /sentryWrapped/.test(t[t.length - 1].function || "") && t.pop();
                    t.reverse(),
                    b.test(t[t.length - 1].function || "") && (t.pop(),
                    b.test(t[t.length - 1].function || "") && t.pop());
                    return t.slice(0, y).map((e=>({
                        ...e,
                        filename: e.filename || t[t.length - 1].filename,
                        function: e.function || "?"
                    })))
                }(r)
            }
        }
        const w = "<anonymous>";
        function E(e) {
            try {
                return e && "function" == typeof e && e.name || w
            } catch (e) {
                return w
            }
        }
        var S = n(74211);
        const T = (0,
        S.Rf)();
        function k() {
            if (!("fetch"in T))
                return !1;
            try {
                return new Headers,
                new Request("http://www.example.com"),
                new Response,
                !0
            } catch (e) {
                return !1
            }
        }
        function j(e) {
            return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
        }
        var N = n(66885);
        const C = (0,
        S.Rf)();
        const P = (0,
        S.Rf)()
          , A = "__sentry_xhr_v2__"
          , L = {}
          , R = {};
        function O(e) {
            if (!R[e])
                switch (R[e] = !0,
                e) {
                case "console":
                    !function() {
                        if (!("console"in S.n2))
                            return;
                        o.RU.forEach((function(e) {
                            e in S.n2.console && (0,
                            u.hl)(S.n2.console, e, (function(t) {
                                return o.LD[e] = t,
                                function(...t) {
                                    I("console", {
                                        args: t,
                                        level: e
                                    });
                                    const n = o.LD[e];
                                    n && n.apply(S.n2.console, t)
                                }
                            }
                            ))
                        }
                        ))
                    }();
                    break;
                case "dom":
                    !function() {
                        if (!P.document)
                            return;
                        const e = I.bind(null, "dom")
                          , t = Y(e, !0);
                        P.document.addEventListener("click", t, !1),
                        P.document.addEventListener("keypress", t, !1),
                        ["EventTarget", "Node"].forEach((t=>{
                            const n = P[t] && P[t].prototype;
                            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0,
                            u.hl)(n, "addEventListener", (function(t) {
                                return function(n, r, o) {
                                    if ("click" === n || "keypress" == n)
                                        try {
                                            const r = this
                                              , s = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {}
                                              , a = s[n] = s[n] || {
                                                refCount: 0
                                            };
                                            if (!a.handler) {
                                                const r = Y(e);
                                                a.handler = r,
                                                t.call(this, n, r, o)
                                            }
                                            a.refCount++
                                        } catch (e) {}
                                    return t.call(this, n, r, o)
                                }
                            }
                            )),
                            (0,
                            u.hl)(n, "removeEventListener", (function(e) {
                                return function(t, n, r) {
                                    if ("click" === t || "keypress" == t)
                                        try {
                                            const n = this
                                              , o = n.__sentry_instrumentation_handlers__ || {}
                                              , s = o[t];
                                            s && (s.refCount--,
                                            s.refCount <= 0 && (e.call(this, t, s.handler, r),
                                            s.handler = void 0,
                                            delete o[t]),
                                            0 === Object.keys(o).length && delete n.__sentry_instrumentation_handlers__)
                                        } catch (e) {}
                                    return e.call(this, t, n, r)
                                }
                            }
                            )))
                        }
                        ))
                    }();
                    break;
                case "xhr":
                    !function() {
                        if (!P.XMLHttpRequest)
                            return;
                        const e = XMLHttpRequest.prototype;
                        (0,
                        u.hl)(e, "open", (function(e) {
                            return function(...t) {
                                const n = Date.now()
                                  , r = t[1]
                                  , o = this[A] = {
                                    method: (0,
                                    N.HD)(t[0]) ? t[0].toUpperCase() : t[0],
                                    url: t[1],
                                    request_headers: {}
                                };
                                (0,
                                N.HD)(r) && "POST" === o.method && r.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                                const s = ()=>{
                                    const e = this[A];
                                    if (e && 4 === this.readyState) {
                                        try {
                                            e.status_code = this.status
                                        } catch (e) {}
                                        I("xhr", {
                                            args: t,
                                            endTimestamp: Date.now(),
                                            startTimestamp: n,
                                            xhr: this
                                        })
                                    }
                                }
                                ;
                                return "onreadystatechange"in this && "function" == typeof this.onreadystatechange ? (0,
                                u.hl)(this, "onreadystatechange", (function(e) {
                                    return function(...t) {
                                        return s(),
                                        e.apply(this, t)
                                    }
                                }
                                )) : this.addEventListener("readystatechange", s),
                                (0,
                                u.hl)(this, "setRequestHeader", (function(e) {
                                    return function(...t) {
                                        const [n,r] = t
                                          , o = this[A];
                                        return o && (o.request_headers[n.toLowerCase()] = r),
                                        e.apply(this, t)
                                    }
                                }
                                )),
                                e.apply(this, t)
                            }
                        }
                        )),
                        (0,
                        u.hl)(e, "send", (function(e) {
                            return function(...t) {
                                const n = this[A];
                                return n && void 0 !== t[0] && (n.body = t[0]),
                                I("xhr", {
                                    args: t,
                                    startTimestamp: Date.now(),
                                    xhr: this
                                }),
                                e.apply(this, t)
                            }
                        }
                        ))
                    }();
                    break;
                case "fetch":
                    !function() {
                        if (!function() {
                            if (!k())
                                return !1;
                            if (j(T.fetch))
                                return !0;
                            let e = !1;
                            const t = T.document;
                            if (t && "function" == typeof t.createElement)
                                try {
                                    const n = t.createElement("iframe");
                                    n.hidden = !0,
                                    t.head.appendChild(n),
                                    n.contentWindow && n.contentWindow.fetch && (e = j(n.contentWindow.fetch)),
                                    t.head.removeChild(n)
                                } catch (e) {
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                                }
                            return e
                        }())
                            return;
                        (0,
                        u.hl)(S.n2, "fetch", (function(e) {
                            return function(...t) {
                                const {method: n, url: r} = function(e) {
                                    if (0 === e.length)
                                        return {
                                            method: "GET",
                                            url: ""
                                        };
                                    if (2 === e.length) {
                                        const [t,n] = e;
                                        return {
                                            url: U(t),
                                            method: M(n, "method") ? String(n.method).toUpperCase() : "GET"
                                        }
                                    }
                                    const t = e[0];
                                    return {
                                        url: U(t),
                                        method: M(t, "method") ? String(t.method).toUpperCase() : "GET"
                                    }
                                }(t)
                                  , o = {
                                    args: t,
                                    fetchData: {
                                        method: n,
                                        url: r
                                    },
                                    startTimestamp: Date.now()
                                };
                                return I("fetch", {
                                    ...o
                                }),
                                e.apply(S.n2, t).then((e=>(I("fetch", {
                                    ...o,
                                    endTimestamp: Date.now(),
                                    response: e
                                }),
                                e)), (e=>{
                                    throw I("fetch", {
                                        ...o,
                                        endTimestamp: Date.now(),
                                        error: e
                                    }),
                                    e
                                }
                                ))
                            }
                        }
                        ))
                    }();
                    break;
                case "history":
                    !function() {
                        if (!function() {
                            const e = C.chrome
                              , t = e && e.app && e.app.runtime
                              , n = "history"in C && !!C.history.pushState && !!C.history.replaceState;
                            return !t && n
                        }())
                            return;
                        const e = P.onpopstate;
                        function t(e) {
                            return function(...t) {
                                const n = t.length > 2 ? t[2] : void 0;
                                if (n) {
                                    const e = B
                                      , t = String(n);
                                    B = t,
                                    I("history", {
                                        from: e,
                                        to: t
                                    })
                                }
                                return e.apply(this, t)
                            }
                        }
                        P.onpopstate = function(...t) {
                            const n = P.location.href
                              , r = B;
                            if (B = n,
                            I("history", {
                                from: r,
                                to: n
                            }),
                            e)
                                try {
                                    return e.apply(this, t)
                                } catch (e) {}
                        }
                        ,
                        (0,
                        u.hl)(P.history, "pushState", t),
                        (0,
                        u.hl)(P.history, "replaceState", t)
                    }();
                    break;
                case "error":
                    $ = P.onerror,
                    P.onerror = function(e, t, n, r, o) {
                        return I("error", {
                            column: r,
                            error: o,
                            line: n,
                            msg: e,
                            url: t
                        }),
                        !(!$ || $.__SENTRY_LOADER__) && $.apply(this, arguments)
                    }
                    ,
                    P.onerror.__SENTRY_INSTRUMENTED__ = !0;
                    break;
                case "unhandledrejection":
                    F = P.onunhandledrejection,
                    P.onunhandledrejection = function(e) {
                        return I("unhandledrejection", e),
                        !(F && !F.__SENTRY_LOADER__) || F.apply(this, arguments)
                    }
                    ,
                    P.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
                    break;
                default:
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("unknown instrumentation type:", e))
                }
        }
        function D(e, t) {
            L[e] = L[e] || [],
            L[e].push(t),
            O(e)
        }
        function I(e, t) {
            if (e && L[e])
                for (const n of L[e] || [])
                    try {
                        n(t)
                    } catch (t) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${E(n)}\nError:`, t)
                    }
        }
        function M(e, t) {
            return !!e && "object" == typeof e && !!e[t]
        }
        function U(e) {
            return "string" == typeof e ? e : e ? M(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
        }
        let B;
        const G = 1e3;
        let q, H, Z;
        function Y(e, t=!1) {
            return n=>{
                if (!n || n._sentryCaptured)
                    return;
                const r = function(e) {
                    try {
                        return e.target
                    } catch (e) {
                        return null
                    }
                }(n);
                if (function(e, t) {
                    return "keypress" === e && (!t || !t.tagName || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable)
                }(n.type, r))
                    return;
                (0,
                u.xp)(n, "_sentryCaptured", !0),
                r && !r._sentryId && (0,
                u.xp)(r, "_sentryId", (0,
                s.DM)());
                const o = "keypress" === n.type ? "input" : n.type;
                (function(e) {
                    if (e.type !== H)
                        return !1;
                    try {
                        if (!e.target || e.target._sentryId !== Z)
                            return !1
                    } catch (e) {}
                    return !0
                }
                )(n) || (e({
                    event: n,
                    name: o,
                    global: t
                }),
                H = n.type,
                Z = r ? r._sentryId : void 0),
                clearTimeout(q),
                q = P.setTimeout((()=>{
                    Z = void 0,
                    H = void 0
                }
                ), G)
            }
        }
        let $ = null;
        let F = null;
        const z = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
        function W(e, t=!1) {
            const {host: n, path: r, pass: o, port: s, projectId: a, protocol: i, publicKey: c} = e;
            return `${i}://${c}${t && o ? `:${o}` : ""}@${n}${s ? `:${s}` : ""}/${r ? `${r}/` : r}${a}`
        }
        function V(e) {
            return {
                protocol: e.protocol,
                publicKey: e.publicKey || "",
                pass: e.pass || "",
                host: e.host,
                port: e.port || "",
                path: e.path || "",
                projectId: e.projectId
            }
        }
        function K(e) {
            const t = "string" == typeof e ? function(e) {
                const t = z.exec(e);
                if (!t)
                    return void console.error(`Invalid Sentry Dsn: ${e}`);
                const [n,r,o="",s,a="",i] = t.slice(1);
                let c = ""
                  , l = i;
                const d = l.split("/");
                if (d.length > 1 && (c = d.slice(0, -1).join("/"),
                l = d.pop()),
                l) {
                    const e = l.match(/^\d+/);
                    e && (l = e[0])
                }
                return V({
                    host: s,
                    pass: o,
                    path: c,
                    projectId: l,
                    port: a,
                    protocol: n,
                    publicKey: r
                })
            }(e) : V(e);
            if (t && function(e) {
                if ("undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__)
                    return !0;
                const {port: t, projectId: n, protocol: r} = e;
                return !(["protocol", "publicKey", "host", "projectId"].find((t=>!e[t] && (o.kg.error(`Invalid Sentry Dsn: ${t} missing`),
                !0))) || (n.match(/^\d+$/) ? function(e) {
                    return "http" === e || "https" === e
                }(r) ? t && isNaN(parseInt(t, 10)) && (o.kg.error(`Invalid Sentry Dsn: Invalid port ${t}`),
                1) : (o.kg.error(`Invalid Sentry Dsn: Invalid protocol ${r}`),
                1) : (o.kg.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
                1)))
            }(t))
                return t
        }
        var J = n(48894);
        function X(e, t=100, n=1 / 0) {
            try {
                return ee("", e, t, n)
            } catch (e) {
                return {
                    ERROR: `**non-serializable** (${e})`
                }
            }
        }
        function Q(e, t=3, n=102400) {
            const r = X(e, t);
            return o = r,
            function(e) {
                return ~-encodeURI(e).split(/%..|./).length
            }(JSON.stringify(o)) > n ? Q(e, t - 1, n) : r;
            var o
        }
        function ee(e, t, r=1 / 0, o=1 / 0, s=function() {
            const e = "function" == typeof WeakSet
              , t = e ? new WeakSet : [];
            return [function(n) {
                if (e)
                    return !!t.has(n) || (t.add(n),
                    !1);
                for (let e = 0; e < t.length; e++)
                    if (t[e] === n)
                        return !0;
                return t.push(n),
                !1
            }
            , function(n) {
                if (e)
                    t.delete(n);
                else
                    for (let e = 0; e < t.length; e++)
                        if (t[e] === n) {
                            t.splice(e, 1);
                            break
                        }
            }
            ]
        }()) {
            const [a,i] = s;
            if (null == t || ["number", "boolean", "string"].includes(typeof t) && !(0,
            N.i2)(t))
                return t;
            const c = function(e, t) {
                try {
                    if ("domain" === e && t && "object" == typeof t && t._events)
                        return "[Domain]";
                    if ("domainEmitter" === e)
                        return "[DomainEmitter]";
                    if (void 0 !== n.g && t === n.g)
                        return "[Global]";
                    if ("undefined" != typeof window && t === window)
                        return "[Window]";
                    if ("undefined" != typeof document && t === document)
                        return "[Document]";
                    if ((0,
                    N.y1)(t))
                        return "[VueViewModel]";
                    if ((0,
                    N.Cy)(t))
                        return "[SyntheticEvent]";
                    if ("number" == typeof t && t != t)
                        return "[NaN]";
                    if ("function" == typeof t)
                        return `[Function: ${E(t)}]`;
                    if ("symbol" == typeof t)
                        return `[${String(t)}]`;
                    if ("bigint" == typeof t)
                        return `[BigInt: ${String(t)}]`;
                    const r = function(e) {
                        const t = Object.getPrototypeOf(e);
                        return t ? t.constructor.name : "null prototype"
                    }(t);
                    return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`
                } catch (e) {
                    return `**non-serializable** (${e})`
                }
            }(e, t);
            if (!c.startsWith("[object "))
                return c;
            if (t.__sentry_skip_normalization__)
                return t;
            const l = "number" == typeof t.__sentry_override_normalization_depth__ ? t.__sentry_override_normalization_depth__ : r;
            if (0 === l)
                return c.replace("object ", "");
            if (a(t))
                return "[Circular ~]";
            const d = t;
            if (d && "function" == typeof d.toJSON)
                try {
                    return ee("", d.toJSON(), l - 1, o, s)
                } catch (e) {}
            const p = Array.isArray(t) ? [] : {};
            let h = 0;
            const _ = (0,
            u.Sh)(t);
            for (const e in _) {
                if (!Object.prototype.hasOwnProperty.call(_, e))
                    continue;
                if (h >= o) {
                    p[e] = "[MaxProperties ~]";
                    break
                }
                const t = _[e];
                p[e] = ee(e, t, l - 1, o, s),
                h++
            }
            return i(t),
            p
        }
        function te(e, t=[]) {
            return [e, t]
        }
        function ne(e, t) {
            const [n,r] = e;
            return [n, [...r, t]]
        }
        function re(e, t) {
            const n = e[1];
            for (const e of n) {
                if (t(e, e[0].type))
                    return !0
            }
            return !1
        }
        function oe(e, t) {
            return (t || new TextEncoder).encode(e)
        }
        function se(e, t) {
            const [n,r] = e;
            let o = JSON.stringify(n);
            function s(e) {
                "string" == typeof o ? o = "string" == typeof e ? o + e : [oe(o, t), e] : o.push("string" == typeof e ? oe(e, t) : e)
            }
            for (const e of r) {
                const [t,n] = e;
                if (s(`\n ${JSON.stringify(t)}\n`),
                "string" == typeof n || n instanceof Uint8Array)
                    s(n);
                else {
                    let e;
                    try {
                        e = JSON.stringify(n)
                    } catch (t) {
                        e = JSON.stringify(X(n))
                    }
                    s(e)
                }
            }
            return "string" == typeof o ? o : function(e) {
                const t = e.reduce(((e,t)=>e + t.length), 0)
                  , n = new Uint8Array(t);
                let r = 0;
                for (const t of e)
                    n.set(t, r),
                    r += t.length;
                return n
            }(o)
        }
        function ae(e, t) {
            const n = "string" == typeof e.data ? oe(e.data, t) : e.data;
            return [(0,
            u.Jr)({
                type: "attachment",
                length: n.length,
                filename: e.filename,
                content_type: e.contentType,
                attachment_type: e.attachmentType
            }), n]
        }
        const ie = {
            session: "session",
            sessions: "session",
            attachment: "attachment",
            transaction: "transaction",
            event: "error",
            client_report: "internal",
            user_report: "default",
            profile: "profile",
            replay_event: "replay",
            replay_recording: "replay",
            check_in: "monitor",
            statsd: "unknown"
        };
        function ce(e) {
            return ie[e]
        }
        function le(e) {
            if (!e || !e.sdk)
                return;
            const {name: t, version: n} = e.sdk;
            return {
                name: t,
                version: n
            }
        }
        class de extends Error {
            constructor(e, t="warn") {
                super(e),
                this.message = e,
                this.name = new.target.prototype.constructor.name,
                Object.setPrototypeOf(this, new.target.prototype),
                this.logLevel = t
            }
        }
        const ue = "7";
        function pe(e) {
            const t = e.protocol ? `${e.protocol}:` : ""
              , n = e.port ? `:${e.port}` : "";
            return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`
        }
        function he(e, t={}) {
            const n = "string" == typeof t ? t : t.tunnel
              , r = "string" != typeof t && t._metadata ? t._metadata.sdk : void 0;
            return n || `${function(e) {
                return `${pe(e)}${e.projectId}/envelope/`
            }(e)}?${function(e, t) {
                return (0,
                u._j)({
                    sentry_key: e.publicKey,
                    sentry_version: ue,
                    ...t && {
                        sentry_client: `${t.name}/${t.version}`
                    }
                })
            }(e, r)}`
        }
        function _e(e, t, n, r) {
            const o = le(n)
              , s = e.type && "replay_event" !== e.type ? e.type : "event";
            !function(e, t) {
                t && (e.sdk = e.sdk || {},
                e.sdk.name = e.sdk.name || t.name,
                e.sdk.version = e.sdk.version || t.version,
                e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []],
                e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []])
            }(e, n && n.sdk);
            const a = function(e, t, n, r) {
                const o = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
                return {
                    event_id: e.event_id,
                    sent_at: (new Date).toISOString(),
                    ...t && {
                        sdk: t
                    },
                    ...!!n && r && {
                        dsn: W(r)
                    },
                    ...o && {
                        trace: (0,
                        u.Jr)({
                            ...o
                        })
                    }
                }
            }(e, o, r, t);
            delete e.sdkProcessingMetadata;
            return te(a, [[{
                type: s
            }, e]])
        }
        var me = n(89015)
          , ge = n(99330);
        function fe(e, t, n) {
            const r = t.getOptions()
              , {publicKey: o} = t.getDsn() || {}
              , {segment: s} = n && n.getUser() || {}
              , a = (0,
            u.Jr)({
                environment: r.environment || ge.J,
                release: r.release,
                user_segment: s,
                public_key: o,
                trace_id: e
            });
            return t.emit && t.emit("createDsc", a),
            a
        }
        var ye = n(94180)
          , ve = n(25516);
        function be(e, t, n, r, o) {
            const {normalizeDepth: i=3, normalizeMaxBreadth: c=1e3} = e
              , l = {
                ...t,
                event_id: t.event_id || n.event_id || (0,
                s.DM)(),
                timestamp: t.timestamp || (0,
                ye.yW)()
            }
              , d = n.integrations || e.integrations.map((e=>e.name));
            !function(e, t) {
                const {environment: n, release: r, dist: o, maxValueLength: s=250} = t;
                "environment"in e || (e.environment = "environment"in t ? n : ge.J);
                void 0 === e.release && void 0 !== r && (e.release = r);
                void 0 === e.dist && void 0 !== o && (e.dist = o);
                e.message && (e.message = (0,
                a.$G)(e.message, s));
                const i = e.exception && e.exception.values && e.exception.values[0];
                i && i.value && (i.value = (0,
                a.$G)(i.value, s));
                const c = e.request;
                c && c.url && (c.url = (0,
                a.$G)(c.url, s))
            }(l, e),
            function(e, t) {
                t.length > 0 && (e.sdk = e.sdk || {},
                e.sdk.integrations = [...e.sdk.integrations || [], ...t])
            }(l, d),
            void 0 === t.type && function(e, t) {
                const n = S.n2._sentryDebugIds;
                if (!n)
                    return;
                let r;
                const o = xe.get(t);
                o ? r = o : (r = new Map,
                xe.set(t, r));
                const s = Object.keys(n).reduce(((e,o)=>{
                    let s;
                    const a = r.get(o);
                    a ? s = a : (s = t(o),
                    r.set(o, s));
                    for (let t = s.length - 1; t >= 0; t--) {
                        const r = s[t];
                        if (r.filename) {
                            e[r.filename] = n[o];
                            break
                        }
                    }
                    return e
                }
                ), {});
                try {
                    e.exception.values.forEach((e=>{
                        e.stacktrace.frames.forEach((e=>{
                            e.filename && (e.debug_id = s[e.filename])
                        }
                        ))
                    }
                    ))
                } catch (e) {}
            }(l, e.stackParser);
            let u = r;
            n.captureContext && (u = ve.s.clone(u).update(n.captureContext));
            let p = (0,
            J.WD)(l);
            const h = o && o.getEventProcessors ? o.getEventProcessors() : [];
            if (u) {
                if (u.getAttachments) {
                    const e = [...n.attachments || [], ...u.getAttachments()];
                    e.length && (n.attachments = e)
                }
                p = u.applyToEvent(l, n, h)
            } else
                p = (0,
                _.RP)([...h, ...(0,
                _.fH)()], l, n);
            return p.then((e=>(e && function(e) {
                const t = {};
                try {
                    e.exception.values.forEach((e=>{
                        e.stacktrace.frames.forEach((e=>{
                            e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id),
                            delete e.debug_id)
                        }
                        ))
                    }
                    ))
                } catch (e) {}
                if (0 === Object.keys(t).length)
                    return;
                e.debug_meta = e.debug_meta || {},
                e.debug_meta.images = e.debug_meta.images || [];
                const n = e.debug_meta.images;
                Object.keys(t).forEach((e=>{
                    n.push({
                        type: "sourcemap",
                        code_file: e,
                        debug_id: t[e]
                    })
                }
                ))
            }(e),
            "number" == typeof i && i > 0 ? function(e, t, n) {
                if (!e)
                    return null;
                const r = {
                    ...e,
                    ...e.breadcrumbs && {
                        breadcrumbs: e.breadcrumbs.map((e=>({
                            ...e,
                            ...e.data && {
                                data: X(e.data, t, n)
                            }
                        })))
                    },
                    ...e.user && {
                        user: X(e.user, t, n)
                    },
                    ...e.contexts && {
                        contexts: X(e.contexts, t, n)
                    },
                    ...e.extra && {
                        extra: X(e.extra, t, n)
                    }
                };
                e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace,
                e.contexts.trace.data && (r.contexts.trace.data = X(e.contexts.trace.data, t, n)));
                e.spans && (r.spans = e.spans.map((e=>(e.data && (e.data = X(e.data, t, n)),
                e))));
                return r
            }(e, i, c) : e)))
        }
        const xe = new WeakMap;
        const we = "Not capturing exception because it's already been captured.";
        class Ee {
            constructor(e) {
                if (this._options = e,
                this._integrations = {},
                this._integrationsInitialized = !1,
                this._numProcessing = 0,
                this._outcomes = {},
                this._hooks = {},
                this._eventProcessors = [],
                e.dsn ? this._dsn = K(e.dsn) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("No DSN provided, client will not send events."),
                this._dsn) {
                    const t = he(this._dsn, e);
                    this._transport = e.transport({
                        recordDroppedEvent: this.recordDroppedEvent.bind(this),
                        ...e.transportOptions,
                        url: t
                    })
                }
            }
            captureException(e, t, n) {
                if ((0,
                s.YO)(e))
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(we));
                let r = t && t.event_id;
                return this._process(this.eventFromException(e, t).then((e=>this._captureEvent(e, t, n))).then((e=>{
                    r = e
                }
                ))),
                r
            }
            captureMessage(e, t, n, r) {
                let o = n && n.event_id;
                const s = (0,
                N.pt)(e) ? this.eventFromMessage(String(e), t, n) : this.eventFromException(e, n);
                return this._process(s.then((e=>this._captureEvent(e, n, r))).then((e=>{
                    o = e
                }
                ))),
                o
            }
            captureEvent(e, t, n) {
                if (t && t.originalException && (0,
                s.YO)(t.originalException))
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(we));
                let r = t && t.event_id;
                return this._process(this._captureEvent(e, t, n).then((e=>{
                    r = e
                }
                ))),
                r
            }
            captureSession(e) {
                "string" != typeof e.release ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("Discarded session because of missing or non-string release") : (this.sendSession(e),
                (0,
                me.CT)(e, {
                    init: !1
                }))
            }
            getDsn() {
                return this._dsn
            }
            getOptions() {
                return this._options
            }
            getSdkMetadata() {
                return this._options._metadata
            }
            getTransport() {
                return this._transport
            }
            flush(e) {
                const t = this._transport;
                return t ? this._isClientDoneProcessing(e).then((n=>t.flush(e).then((e=>n && e)))) : (0,
                J.WD)(!0)
            }
            close(e) {
                return this.flush(e).then((e=>(this.getOptions().enabled = !1,
                e)))
            }
            getEventProcessors() {
                return this._eventProcessors
            }
            addEventProcessor(e) {
                this._eventProcessors.push(e)
            }
            setupIntegrations(e) {
                (e && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) && (this._integrations = function(e, t) {
                    const n = {};
                    return t.forEach((t=>{
                        t && f(e, t, n)
                    }
                    )),
                    n
                }(this, this._options.integrations),
                this._integrationsInitialized = !0)
            }
            getIntegrationById(e) {
                return this._integrations[e]
            }
            getIntegration(e) {
                try {
                    return this._integrations[e.id] || null
                } catch (t) {
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`Cannot retrieve integration ${e.id} from the current Client`),
                    null
                }
            }
            addIntegration(e) {
                f(this, e, this._integrations)
            }
            sendEvent(e, t={}) {
                this.emit("beforeSendEvent", e, t);
                let n = _e(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (const e of t.attachments || [])
                    n = ne(n, ae(e, this._options.transportOptions && this._options.transportOptions.textEncoder));
                const r = this._sendEnvelope(n);
                r && r.then((t=>this.emit("afterSendEvent", e, t)), null)
            }
            sendSession(e) {
                const t = function(e, t, n, r) {
                    const o = le(n);
                    return te({
                        sent_at: (new Date).toISOString(),
                        ...o && {
                            sdk: o
                        },
                        ...!!r && t && {
                            dsn: W(t)
                        }
                    }, ["aggregates"in e ? [{
                        type: "sessions"
                    }, e] : [{
                        type: "session"
                    }, e.toJSON()]])
                }(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(t)
            }
            recordDroppedEvent(e, t, n) {
                if (this._options.sendClientReports) {
                    const n = `${e}:${t}`;
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`Adding outcome: "${n}"`),
                    this._outcomes[n] = this._outcomes[n] + 1 || 1
                }
            }
            on(e, t) {
                this._hooks[e] || (this._hooks[e] = []),
                this._hooks[e].push(t)
            }
            emit(e, ...t) {
                this._hooks[e] && this._hooks[e].forEach((e=>e(...t)))
            }
            _updateSessionFromEvent(e, t) {
                let n = !1
                  , r = !1;
                const o = t.exception && t.exception.values;
                if (o) {
                    r = !0;
                    for (const e of o) {
                        const t = e.mechanism;
                        if (t && !1 === t.handled) {
                            n = !0;
                            break
                        }
                    }
                }
                const s = "ok" === e.status;
                (s && 0 === e.errors || s && n) && ((0,
                me.CT)(e, {
                    ...n && {
                        status: "crashed"
                    },
                    errors: e.errors || Number(r || n)
                }),
                this.captureSession(e))
            }
            _isClientDoneProcessing(e) {
                return new J.cW((t=>{
                    let n = 0;
                    const r = setInterval((()=>{
                        0 == this._numProcessing ? (clearInterval(r),
                        t(!0)) : (n += 1,
                        e && n >= e && (clearInterval(r),
                        t(!1)))
                    }
                    ), 1)
                }
                ))
            }
            _isEnabled() {
                return !1 !== this.getOptions().enabled && void 0 !== this._transport
            }
            _prepareEvent(e, t, n) {
                const r = this.getOptions()
                  , o = Object.keys(this._integrations);
                return !t.integrations && o.length > 0 && (t.integrations = o),
                this.emit("preprocessEvent", e, t),
                be(r, e, t, n, this).then((e=>{
                    if (null === e)
                        return e;
                    const {propagationContext: t} = e.sdkProcessingMetadata || {};
                    if (!(e.contexts && e.contexts.trace) && t) {
                        const {traceId: r, spanId: o, parentSpanId: s, dsc: a} = t;
                        e.contexts = {
                            trace: {
                                trace_id: r,
                                span_id: o,
                                parent_span_id: s
                            },
                            ...e.contexts
                        };
                        const i = a || fe(r, this, n);
                        e.sdkProcessingMetadata = {
                            dynamicSamplingContext: i,
                            ...e.sdkProcessingMetadata
                        }
                    }
                    return e
                }
                ))
            }
            _captureEvent(e, t={}, n) {
                return this._processEvent(e, t, n).then((e=>e.event_id), (e=>{
                    if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                        const t = e;
                        "log" === t.logLevel ? o.kg.log(t.message) : o.kg.warn(t)
                    }
                }
                ))
            }
            _processEvent(e, t, n) {
                const r = this.getOptions()
                  , {sampleRate: o} = r
                  , s = Te(e)
                  , a = Se(e)
                  , i = e.type || "error"
                  , c = `before send for type \`${i}\``;
                if (a && "number" == typeof o && Math.random() > o)
                    return this.recordDroppedEvent("sample_rate", "error", e),
                    (0,
                    J.$2)(new de(`Discarding event because it's not included in the random sample (sampling rate = ${o})`,"log"));
                const l = "replay_event" === i ? "replay" : i;
                return this._prepareEvent(e, t, n).then((n=>{
                    if (null === n)
                        throw this.recordDroppedEvent("event_processor", l, e),
                        new de("An event processor returned `null`, will not send event.","log");
                    if (t.data && !0 === t.data.__sentry__)
                        return n;
                    const o = function(e, t, n) {
                        const {beforeSend: r, beforeSendTransaction: o} = e;
                        if (Se(t) && r)
                            return r(t, n);
                        if (Te(t) && o)
                            return o(t, n);
                        return t
                    }(r, n, t);
                    return function(e, t) {
                        const n = `${t} must return \`null\` or a valid event.`;
                        if ((0,
                        N.J8)(e))
                            return e.then((e=>{
                                if (!(0,
                                N.PO)(e) && null !== e)
                                    throw new de(n);
                                return e
                            }
                            ), (e=>{
                                throw new de(`${t} rejected with ${e}`)
                            }
                            ));
                        if (!(0,
                        N.PO)(e) && null !== e)
                            throw new de(n);
                        return e
                    }(o, c)
                }
                )).then((r=>{
                    if (null === r)
                        throw this.recordDroppedEvent("before_send", l, e),
                        new de(`${c} returned \`null\`, will not send event.`,"log");
                    const o = n && n.getSession();
                    !s && o && this._updateSessionFromEvent(o, r);
                    const a = r.transaction_info;
                    if (s && a && r.transaction !== e.transaction) {
                        const e = "custom";
                        r.transaction_info = {
                            ...a,
                            source: e
                        }
                    }
                    return this.sendEvent(r, t),
                    r
                }
                )).then(null, (e=>{
                    if (e instanceof de)
                        throw e;
                    throw this.captureException(e, {
                        data: {
                            __sentry__: !0
                        },
                        originalException: e
                    }),
                    new de(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`)
                }
                ))
            }
            _process(e) {
                this._numProcessing++,
                e.then((e=>(this._numProcessing--,
                e)), (e=>(this._numProcessing--,
                e)))
            }
            _sendEnvelope(e) {
                if (this.emit("beforeEnvelope", e),
                this._isEnabled() && this._transport)
                    return this._transport.send(e).then(null, (e=>{
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.error("Error while sending event:", e)
                    }
                    ));
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.error("Transport disabled")
            }
            _clearOutcomes() {
                const e = this._outcomes;
                return this._outcomes = {},
                Object.keys(e).map((t=>{
                    const [n,r] = t.split(":");
                    return {
                        reason: n,
                        category: r,
                        quantity: e[t]
                    }
                }
                ))
            }
        }
        function Se(e) {
            return void 0 === e.type
        }
        function Te(e) {
            return "transaction" === e.type
        }
        const ke = "7.77.0";
        var je = n(6905);
        function Ne(e, t) {
            const n = Pe(e, t)
              , r = {
                type: t && t.name,
                value: Le(t)
            };
            return n.length && (r.stacktrace = {
                frames: n
            }),
            void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"),
            r
        }
        function Ce(e, t) {
            return {
                exception: {
                    values: [Ne(e, t)]
                }
            }
        }
        function Pe(e, t) {
            const n = t.stacktrace || t.stack || ""
              , r = function(e) {
                if (e) {
                    if ("number" == typeof e.framesToPop)
                        return e.framesToPop;
                    if (Ae.test(e.message))
                        return 1
                }
                return 0
            }(t);
            try {
                return e(n, r)
            } catch (e) {}
            return []
        }
        const Ae = /Minified React error #\d+;/i;
        function Le(e) {
            const t = e && e.message;
            return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
        }
        function Re(e, t, n, o, a) {
            let i;
            if ((0,
            N.VW)(t) && t.error) {
                return Ce(e, t.error)
            }
            if ((0,
            N.TX)(t) || (0,
            N.fm)(t)) {
                const r = t;
                if ("stack"in t)
                    i = Ce(e, t);
                else {
                    const t = r.name || ((0,
                    N.TX)(r) ? "DOMError" : "DOMException")
                      , a = r.message ? `${t}: ${r.message}` : t;
                    i = Oe(e, a, n, o),
                    (0,
                    s.Db)(i, a)
                }
                return "code"in r && (i.tags = {
                    ...i.tags,
                    "DOMException.code": `${r.code}`
                }),
                i
            }
            if ((0,
            N.VZ)(t))
                return Ce(e, t);
            if ((0,
            N.PO)(t) || (0,
            N.cO)(t)) {
                return i = function(e, t, n, o) {
                    const s = (0,
                    r.Gd)().getClient()
                      , a = s && s.getOptions().normalizeDepth
                      , i = {
                        exception: {
                            values: [{
                                type: (0,
                                N.cO)(t) ? t.constructor.name : o ? "UnhandledRejection" : "Error",
                                value: De(t, {
                                    isUnhandledRejection: o
                                })
                            }]
                        },
                        extra: {
                            __serialized__: Q(t, a)
                        }
                    };
                    if (n) {
                        const t = Pe(e, n);
                        t.length && (i.exception.values[0].stacktrace = {
                            frames: t
                        })
                    }
                    return i
                }(e, t, n, a),
                (0,
                s.EG)(i, {
                    synthetic: !0
                }),
                i
            }
            return i = Oe(e, t, n, o),
            (0,
            s.Db)(i, `${t}`, void 0),
            (0,
            s.EG)(i, {
                synthetic: !0
            }),
            i
        }
        function Oe(e, t, n, r) {
            const o = {
                message: t
            };
            if (r && n) {
                const r = Pe(e, n);
                r.length && (o.exception = {
                    values: [{
                        value: t,
                        stacktrace: {
                            frames: r
                        }
                    }]
                })
            }
            return o
        }
        function De(e, {isUnhandledRejection: t}) {
            const n = (0,
            u.zf)(e)
              , r = t ? "promise rejection" : "exception";
            if ((0,
            N.VW)(e))
                return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
            if ((0,
            N.cO)(e)) {
                return `Event \`${function(e) {
                    try {
                        const t = Object.getPrototypeOf(e);
                        return t ? t.constructor.name : void 0
                    } catch (e) {}
                }(e)}\` (type=${e.type}) captured as ${r}`
            }
            return `Object captured as ${r} with keys: ${n}`
        }
        var Ie = n(60074);
        const Me = S.n2;
        let Ue = 0;
        function Be() {
            return Ue > 0
        }
        function Ge(e, t={}, n) {
            if ("function" != typeof e)
                return e;
            try {
                const t = e.__sentry_wrapped__;
                if (t)
                    return t;
                if ((0,
                u.HK)(e))
                    return e
            } catch (t) {
                return e
            }
            const r = function() {
                const r = Array.prototype.slice.call(arguments);
                try {
                    n && "function" == typeof n && n.apply(this, arguments);
                    const o = r.map((e=>Ge(e, t)));
                    return e.apply(this, o)
                } catch (e) {
                    throw Ue++,
                    setTimeout((()=>{
                        Ue--
                    }
                    )),
                    (0,
                    Ie.$e)((n=>{
                        n.addEventProcessor((e=>(t.mechanism && ((0,
                        s.Db)(e, void 0, void 0),
                        (0,
                        s.EG)(e, t.mechanism)),
                        e.extra = {
                            ...e.extra,
                            arguments: r
                        },
                        e))),
                        (0,
                        Ie.Tb)(e)
                    }
                    )),
                    e
                }
            };
            try {
                for (const t in e)
                    Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t])
            } catch (e) {}
            (0,
            u.$Q)(r, e),
            (0,
            u.xp)(e, "__sentry_wrapped__", r);
            try {
                Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                    get: ()=>e.name
                })
            } catch (e) {}
            return r
        }
        class qe extends Ee {
            constructor(e) {
                const t = Me.SENTRY_SDK_SOURCE || (0,
                je.S)();
                e._metadata = e._metadata || {},
                e._metadata.sdk = e._metadata.sdk || {
                    name: "sentry.javascript.browser",
                    packages: [{
                        name: `${t}:@sentry/browser`,
                        version: ke
                    }],
                    version: ke
                },
                super(e),
                e.sendClientReports && Me.document && Me.document.addEventListener("visibilitychange", (()=>{
                    "hidden" === Me.document.visibilityState && this._flushOutcomes()
                }
                ))
            }
            eventFromException(e, t) {
                return function(e, t, n, r) {
                    const o = Re(e, t, n && n.syntheticException || void 0, r);
                    return (0,
                    s.EG)(o),
                    o.level = "error",
                    n && n.event_id && (o.event_id = n.event_id),
                    (0,
                    J.WD)(o)
                }(this._options.stackParser, e, t, this._options.attachStacktrace)
            }
            eventFromMessage(e, t="info", n) {
                return function(e, t, n="info", r, o) {
                    const s = Oe(e, t, r && r.syntheticException || void 0, o);
                    return s.level = n,
                    r && r.event_id && (s.event_id = r.event_id),
                    (0,
                    J.WD)(s)
                }(this._options.stackParser, e, t, n, this._options.attachStacktrace)
            }
            captureUserFeedback(e) {
                if (!this._isEnabled())
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("SDK not enabled, will not capture user feedback."));
                const t = function(e, {metadata: t, tunnel: n, dsn: r}) {
                    const o = {
                        event_id: e.event_id,
                        sent_at: (new Date).toISOString(),
                        ...t && t.sdk && {
                            sdk: {
                                name: t.sdk.name,
                                version: t.sdk.version
                            }
                        },
                        ...!!n && !!r && {
                            dsn: W(r)
                        }
                    }
                      , s = function(e) {
                        return [{
                            type: "user_report"
                        }, e]
                    }(e);
                    return te(o, [s])
                }(e, {
                    metadata: this.getSdkMetadata(),
                    dsn: this.getDsn(),
                    tunnel: this.getOptions().tunnel
                });
                this._sendEnvelope(t)
            }
            _prepareEvent(e, t, n) {
                return e.platform = e.platform || "javascript",
                super._prepareEvent(e, t, n)
            }
            _flushOutcomes() {
                const e = this._clearOutcomes();
                if (0 === e.length)
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("No outcomes to send"));
                if (!this._dsn)
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("No dsn provided, will not send outcomes"));
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("Sending outcomes:", e);
                const t = (n = e,
                te((r = this._options.tunnel && W(this._dsn)) ? {
                    dsn: r
                } : {}, [[{
                    type: "client_report"
                }, {
                    timestamp: s || (0,
                    ye.yW)(),
                    discarded_events: n
                }]]));
                var n, r, s;
                this._sendEnvelope(t)
            }
        }
        var He = n(61495);
        class Ze {
            static __initStatic() {
                this.id = "GlobalHandlers"
            }
            constructor(e) {
                this.name = Ze.id,
                this._options = {
                    onerror: !0,
                    onunhandledrejection: !0,
                    ...e
                },
                this._installFunc = {
                    onerror: Ye,
                    onunhandledrejection: $e
                }
            }
            setupOnce() {
                Error.stackTraceLimit = 50;
                const e = this._options;
                for (const n in e) {
                    const r = this._installFunc[n];
                    r && e[n] && (t = n,
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`Global Handler attached: ${t}`),
                    r(),
                    this._installFunc[n] = void 0)
                }
                var t
            }
        }
        function Ye() {
            D("error", (e=>{
                const [t,n,r] = We();
                if (!t.getIntegration(Ze))
                    return;
                const {msg: o, url: s, line: a, column: i, error: c} = e;
                if (Be() || c && c.__sentry_own_request__)
                    return;
                const l = void 0 === c && (0,
                N.HD)(o) ? function(e, t, n, r) {
                    const o = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
                    let s = (0,
                    N.VW)(e) ? e.message : e
                      , a = "Error";
                    const i = s.match(o);
                    i && (a = i[1],
                    s = i[2]);
                    const c = {
                        exception: {
                            values: [{
                                type: a,
                                value: s
                            }]
                        }
                    };
                    return Fe(c, t, n, r)
                }(o, s, a, i) : Fe(Re(n, c || o, void 0, r, !1), s, a, i);
                l.level = "error",
                ze(t, c, l, "onerror")
            }
            ))
        }
        function $e() {
            D("unhandledrejection", (e=>{
                const [t,n,r] = We();
                if (!t.getIntegration(Ze))
                    return;
                let o = e;
                try {
                    "reason"in e ? o = e.reason : "detail"in e && "reason"in e.detail && (o = e.detail.reason)
                } catch (e) {}
                if (Be() || o && o.__sentry_own_request__)
                    return !0;
                const s = (0,
                N.pt)(o) ? {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: `Non-Error promise rejection captured with value: ${String(o)}`
                        }]
                    }
                } : Re(n, o, void 0, r, !0);
                s.level = "error",
                ze(t, o, s, "onunhandledrejection")
            }
            ))
        }
        function Fe(e, t, n, r) {
            const o = e.exception = e.exception || {}
              , s = o.values = o.values || []
              , a = s[0] = s[0] || {}
              , i = a.stacktrace = a.stacktrace || {}
              , c = i.frames = i.frames || []
              , l = isNaN(parseInt(r, 10)) ? void 0 : r
              , d = isNaN(parseInt(n, 10)) ? void 0 : n
              , u = (0,
            N.HD)(t) && t.length > 0 ? t : (0,
            He.l4)();
            return 0 === c.length && c.push({
                colno: l,
                filename: u,
                function: "?",
                in_app: !0,
                lineno: d
            }),
            e
        }
        function ze(e, t, n, r) {
            (0,
            s.EG)(n, {
                handled: !1,
                type: r
            }),
            e.captureEvent(n, {
                originalException: t
            })
        }
        function We() {
            const e = (0,
            r.Gd)()
              , t = e.getClient()
              , n = t && t.getOptions() || {
                stackParser: ()=>[],
                attachStacktrace: !1
            };
            return [e, n.stackParser, n.attachStacktrace]
        }
        Ze.__initStatic();
        const Ve = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
        class Ke {
            static __initStatic() {
                this.id = "TryCatch"
            }
            constructor(e) {
                this.name = Ke.id,
                this._options = {
                    XMLHttpRequest: !0,
                    eventTarget: !0,
                    requestAnimationFrame: !0,
                    setInterval: !0,
                    setTimeout: !0,
                    ...e
                }
            }
            setupOnce() {
                this._options.setTimeout && (0,
                u.hl)(Me, "setTimeout", Je),
                this._options.setInterval && (0,
                u.hl)(Me, "setInterval", Je),
                this._options.requestAnimationFrame && (0,
                u.hl)(Me, "requestAnimationFrame", Xe),
                this._options.XMLHttpRequest && "XMLHttpRequest"in Me && (0,
                u.hl)(XMLHttpRequest.prototype, "send", Qe);
                const e = this._options.eventTarget;
                if (e) {
                    (Array.isArray(e) ? e : Ve).forEach(et)
                }
            }
        }
        function Je(e) {
            return function(...t) {
                const n = t[0];
                return t[0] = Ge(n, {
                    mechanism: {
                        data: {
                            function: E(e)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }),
                e.apply(this, t)
            }
        }
        function Xe(e) {
            return function(t) {
                return e.apply(this, [Ge(t, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: E(e)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                })])
            }
        }
        function Qe(e) {
            return function(...t) {
                const n = this;
                return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e=>{
                    e in n && "function" == typeof n[e] && (0,
                    u.hl)(n, e, (function(t) {
                        const n = {
                            mechanism: {
                                data: {
                                    function: e,
                                    handler: E(t)
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        }
                          , r = (0,
                        u.HK)(t);
                        return r && (n.mechanism.data.handler = E(r)),
                        Ge(t, n)
                    }
                    ))
                }
                )),
                e.apply(this, t)
            }
        }
        function et(e) {
            const t = Me
              , n = t[e] && t[e].prototype;
            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0,
            u.hl)(n, "addEventListener", (function(t) {
                return function(n, r, o) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = Ge(r.handleEvent, {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: E(r),
                                    target: e
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        }))
                    } catch (e) {}
                    return t.apply(this, [n, Ge(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: E(r),
                                target: e
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    }), o])
                }
            }
            )),
            (0,
            u.hl)(n, "removeEventListener", (function(e) {
                return function(t, n, r) {
                    const o = n;
                    try {
                        const n = o && o.__sentry_wrapped__;
                        n && e.call(this, t, n, r)
                    } catch (e) {}
                    return e.call(this, t, o, r)
                }
            }
            )))
        }
        Ke.__initStatic();
        const tt = ["fatal", "error", "warning", "log", "info", "debug"];
        function nt(e) {
            return "warn" === e ? "warning" : tt.includes(e) ? e : "log"
        }
        function rt(e) {
            if (!e)
                return {};
            const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!t)
                return {};
            const n = t[6] || ""
              , r = t[8] || "";
            return {
                host: t[4],
                path: t[5],
                protocol: t[2],
                search: n,
                hash: r,
                relative: t[5] + n + r
            }
        }
        const ot = 1024;
        class st {
            static __initStatic() {
                this.id = "Breadcrumbs"
            }
            constructor(e) {
                this.name = st.id,
                this.options = {
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0,
                    ...e
                }
            }
            setupOnce() {
                if (this.options.console && D("console", it),
                this.options.dom && D("dom", function(e) {
                    function t(t) {
                        let n, s = "object" == typeof e ? e.serializeAttribute : void 0, a = "object" == typeof e && "number" == typeof e.maxStringLength ? e.maxStringLength : void 0;
                        a && a > ot && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a} was configured. Sentry will use 1024 instead.`),
                        a = ot),
                        "string" == typeof s && (s = [s]);
                        try {
                            const e = t.event;
                            n = function(e) {
                                return !!e && !!e.target
                            }(e) ? (0,
                            He.Rt)(e.target, {
                                keyAttrs: s,
                                maxStringLength: a
                            }) : (0,
                            He.Rt)(e, {
                                keyAttrs: s,
                                maxStringLength: a
                            })
                        } catch (e) {
                            n = "<unknown>"
                        }
                        0 !== n.length && (0,
                        r.Gd)().addBreadcrumb({
                            category: `ui.${t.name}`,
                            message: n
                        }, {
                            event: t.event,
                            name: t.name,
                            global: t.global
                        })
                    }
                    return t
                }(this.options.dom)),
                this.options.xhr && D("xhr", ct),
                this.options.fetch && D("fetch", lt),
                this.options.history && D("history", dt),
                this.options.sentry) {
                    const e = (0,
                    r.Gd)().getClient();
                    e && e.on && e.on("beforeSendEvent", at)
                }
            }
        }
        function at(e) {
            (0,
            r.Gd)().addBreadcrumb({
                category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                event_id: e.event_id,
                level: e.level,
                message: (0,
                s.jH)(e)
            }, {
                event: e
            })
        }
        function it(e) {
            const t = {
                category: "console",
                data: {
                    arguments: e.args,
                    logger: "console"
                },
                level: nt(e.level),
                message: (0,
                a.nK)(e.args, " ")
            };
            if ("assert" === e.level) {
                if (!1 !== e.args[0])
                    return;
                t.message = `Assertion failed: ${(0,
                a.nK)(e.args.slice(1), " ") || "console.assert"}`,
                t.data.arguments = e.args.slice(1)
            }
            (0,
            r.Gd)().addBreadcrumb(t, {
                input: e.args,
                level: e.level
            })
        }
        function ct(e) {
            const {startTimestamp: t, endTimestamp: n} = e
              , o = e.xhr[A];
            if (!t || !n || !o)
                return;
            const {method: s, url: a, status_code: i, body: c} = o
              , l = {
                method: s,
                url: a,
                status_code: i
            }
              , d = {
                xhr: e.xhr,
                input: c,
                startTimestamp: t,
                endTimestamp: n
            };
            (0,
            r.Gd)().addBreadcrumb({
                category: "xhr",
                data: l,
                type: "http"
            }, d)
        }
        function lt(e) {
            const {startTimestamp: t, endTimestamp: n} = e;
            if (n && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method))
                if (e.error) {
                    const o = e.fetchData
                      , s = {
                        data: e.error,
                        input: e.args,
                        startTimestamp: t,
                        endTimestamp: n
                    };
                    (0,
                    r.Gd)().addBreadcrumb({
                        category: "fetch",
                        data: o,
                        level: "error",
                        type: "http"
                    }, s)
                } else {
                    const o = {
                        ...e.fetchData,
                        status_code: e.response && e.response.status
                    }
                      , s = {
                        input: e.args,
                        response: e.response,
                        startTimestamp: t,
                        endTimestamp: n
                    };
                    (0,
                    r.Gd)().addBreadcrumb({
                        category: "fetch",
                        data: o,
                        type: "http"
                    }, s)
                }
        }
        function dt(e) {
            let t = e.from
              , n = e.to;
            const o = rt(Me.location.href);
            let s = rt(t);
            const a = rt(n);
            s.path || (s = o),
            o.protocol === a.protocol && o.host === a.host && (n = a.relative),
            o.protocol === s.protocol && o.host === s.host && (t = s.relative),
            (0,
            r.Gd)().addBreadcrumb({
                category: "navigation",
                data: {
                    from: t,
                    to: n
                }
            })
        }
        function ut(e, t, n=250, r, o, s, i) {
            if (!(s.exception && s.exception.values && i && (0,
            N.V9)(i.originalException, Error)))
                return;
            const c = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
            var l, d;
            c && (s.exception.values = (l = pt(e, t, o, i.originalException, r, s.exception.values, c, 0),
            d = n,
            l.map((e=>(e.value && (e.value = (0,
            a.$G)(e.value, d)),
            e)))))
        }
        function pt(e, t, n, r, o, s, a, i) {
            if (s.length >= n + 1)
                return s;
            let c = [...s];
            if ((0,
            N.V9)(r[o], Error)) {
                ht(a, i);
                const s = e(t, r[o])
                  , l = c.length;
                _t(s, o, l, i),
                c = pt(e, t, n, r[o], o, [s, ...c], s, l)
            }
            return Array.isArray(r.errors) && r.errors.forEach(((r,s)=>{
                if ((0,
                N.V9)(r, Error)) {
                    ht(a, i);
                    const l = e(t, r)
                      , d = c.length;
                    _t(l, `errors[${s}]`, d, i),
                    c = pt(e, t, n, r, o, [l, ...c], l, d)
                }
            }
            )),
            c
        }
        function ht(e, t) {
            e.mechanism = e.mechanism || {
                type: "generic",
                handled: !0
            },
            e.mechanism = {
                ...e.mechanism,
                is_exception_group: !0,
                exception_id: t
            }
        }
        function _t(e, t, n, r) {
            e.mechanism = e.mechanism || {
                type: "generic",
                handled: !0
            },
            e.mechanism = {
                ...e.mechanism,
                type: "chained",
                source: t,
                exception_id: n,
                parent_id: r
            }
        }
        st.__initStatic();
        class mt {
            static __initStatic() {
                this.id = "LinkedErrors"
            }
            constructor(e={}) {
                this.name = mt.id,
                this._key = e.key || "cause",
                this._limit = e.limit || 5
            }
            setupOnce() {}
            preprocessEvent(e, t, n) {
                const r = n.getOptions();
                ut(Ne, r.stackParser, r.maxValueLength, this._key, this._limit, e, t)
            }
        }
        mt.__initStatic();
        class gt {
            static __initStatic() {
                this.id = "HttpContext"
            }
            constructor() {
                this.name = gt.id
            }
            setupOnce() {}
            preprocessEvent(e) {
                if (!Me.navigator && !Me.location && !Me.document)
                    return;
                const t = e.request && e.request.url || Me.location && Me.location.href
                  , {referrer: n} = Me.document || {}
                  , {userAgent: r} = Me.navigator || {}
                  , o = {
                    ...e.request && e.request.headers,
                    ...n && {
                        Referer: n
                    },
                    ...r && {
                        "User-Agent": r
                    }
                }
                  , s = {
                    ...e.request,
                    ...t && {
                        url: t
                    },
                    headers: o
                };
                e.request = s
            }
        }
        gt.__initStatic();
        class ft {
            static __initStatic() {
                this.id = "Dedupe"
            }
            constructor() {
                this.name = ft.id
            }
            setupOnce(e, t) {}
            processEvent(e) {
                if (e.type)
                    return e;
                try {
                    if (function(e, t) {
                        if (!t)
                            return !1;
                        if (function(e, t) {
                            const n = e.message
                              , r = t.message;
                            if (!n && !r)
                                return !1;
                            if (n && !r || !n && r)
                                return !1;
                            if (n !== r)
                                return !1;
                            if (!vt(e, t))
                                return !1;
                            if (!yt(e, t))
                                return !1;
                            return !0
                        }(e, t))
                            return !0;
                        if (function(e, t) {
                            const n = bt(t)
                              , r = bt(e);
                            if (!n || !r)
                                return !1;
                            if (n.type !== r.type || n.value !== r.value)
                                return !1;
                            if (!vt(e, t))
                                return !1;
                            if (!yt(e, t))
                                return !1;
                            return !0
                        }(e, t))
                            return !0;
                        return !1
                    }(e, this._previousEvent))
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("Event dropped due to being a duplicate of previously captured event."),
                        null
                } catch (e) {}
                return this._previousEvent = e
            }
        }
        function yt(e, t) {
            let n = xt(e)
              , r = xt(t);
            if (!n && !r)
                return !0;
            if (n && !r || !n && r)
                return !1;
            if (r.length !== n.length)
                return !1;
            for (let e = 0; e < r.length; e++) {
                const t = r[e]
                  , o = n[e];
                if (t.filename !== o.filename || t.lineno !== o.lineno || t.colno !== o.colno || t.function !== o.function)
                    return !1
            }
            return !0
        }
        function vt(e, t) {
            let n = e.fingerprint
              , r = t.fingerprint;
            if (!n && !r)
                return !0;
            if (n && !r || !n && r)
                return !1;
            try {
                return !(n.join("") !== r.join(""))
            } catch (e) {
                return !1
            }
        }
        function bt(e) {
            return e.exception && e.exception.values && e.exception.values[0]
        }
        function xt(e) {
            const t = e.exception;
            if (t)
                try {
                    return t.values[0].stacktrace.frames
                } catch (e) {
                    return
                }
        }
        ft.__initStatic();
        const wt = "?";
        function Et(e, t, n, r) {
            const o = {
                filename: e,
                function: t,
                in_app: !0
            };
            return void 0 !== n && (o.lineno = n),
            void 0 !== r && (o.colno = r),
            o
        }
        const St = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
          , Tt = /\((\S*)(?::(\d+))(?::(\d+))\)/
          , kt = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
          , jt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
          , Nt = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i
          , Ct = x(...[[30, e=>{
            const t = St.exec(e);
            if (t) {
                if (t[2] && 0 === t[2].indexOf("eval")) {
                    const e = Tt.exec(t[2]);
                    e && (t[2] = e[1],
                    t[3] = e[2],
                    t[4] = e[3])
                }
                const [e,n] = Pt(t[1] || wt, t[2]);
                return Et(n, e, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
            }
        }
        ], [50, e=>{
            const t = kt.exec(e);
            if (t) {
                if (t[3] && t[3].indexOf(" > eval") > -1) {
                    const e = jt.exec(t[3]);
                    e && (t[1] = t[1] || "eval",
                    t[3] = e[1],
                    t[4] = e[2],
                    t[5] = "")
                }
                let e = t[3]
                  , n = t[1] || wt;
                return [n,e] = Pt(n, e),
                Et(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
            }
        }
        ], [40, e=>{
            const t = Nt.exec(e);
            return t ? Et(t[2], t[1] || wt, +t[3], t[4] ? +t[4] : void 0) : void 0
        }
        ]])
          , Pt = (e,t)=>{
            const n = -1 !== e.indexOf("safari-extension")
              , r = -1 !== e.indexOf("safari-web-extension");
            return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : wt, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
        }
        ;
        function At(e) {
            const t = [];
            function n(e) {
                return t.splice(t.indexOf(e), 1)[0]
            }
            return {
                $: t,
                add: function(r) {
                    if (!(void 0 === e || t.length < e))
                        return (0,
                        J.$2)(new de("Not adding Promise because buffer limit was reached."));
                    const o = r();
                    return -1 === t.indexOf(o) && t.push(o),
                    o.then((()=>n(o))).then(null, (()=>n(o).then(null, (()=>{}
                    )))),
                    o
                },
                drain: function(e) {
                    return new J.cW(((n,r)=>{
                        let o = t.length;
                        if (!o)
                            return n(!0);
                        const s = setTimeout((()=>{
                            e && e > 0 && n(!1)
                        }
                        ), e);
                        t.forEach((e=>{
                            (0,
                            J.WD)(e).then((()=>{
                                --o || (clearTimeout(s),
                                n(!0))
                            }
                            ), r)
                        }
                        ))
                    }
                    ))
                }
            }
        }
        const Lt = 6e4;
        function Rt(e, {statusCode: t, headers: n}, r=Date.now()) {
            const o = {
                ...e
            }
              , s = n && n["x-sentry-rate-limits"]
              , a = n && n["retry-after"];
            if (s)
                for (const e of s.trim().split(",")) {
                    const [t,n] = e.split(":", 2)
                      , s = parseInt(t, 10)
                      , a = 1e3 * (isNaN(s) ? 60 : s);
                    if (n)
                        for (const e of n.split(";"))
                            o[e] = r + a;
                    else
                        o.all = r + a
                }
            else
                a ? o.all = r + function(e, t=Date.now()) {
                    const n = parseInt(`${e}`, 10);
                    if (!isNaN(n))
                        return 1e3 * n;
                    const r = Date.parse(`${e}`);
                    return isNaN(r) ? Lt : r - t
                }(a, r) : 429 === t && (o.all = r + 6e4);
            return o
        }
        const Ot = 30;
        function Dt(e, t, n=At(e.bufferSize || Ot)) {
            let r = {};
            function s(s) {
                const a = [];
                if (re(s, ((t,n)=>{
                    const o = ce(n);
                    if (function(e, t, n=Date.now()) {
                        return function(e, t) {
                            return e[t] || e.all || 0
                        }(e, t) > n
                    }(r, o)) {
                        const r = It(t, n);
                        e.recordDroppedEvent("ratelimit_backoff", o, r)
                    } else
                        a.push(t)
                }
                )),
                0 === a.length)
                    return (0,
                    J.WD)();
                const i = te(s[0], a)
                  , c = t=>{
                    re(i, ((n,r)=>{
                        const o = It(n, r);
                        e.recordDroppedEvent(t, ce(r), o)
                    }
                    ))
                }
                ;
                return n.add((()=>t({
                    body: se(i, e.textEncoder)
                }).then((e=>(void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
                r = Rt(r, e),
                e)), (e=>{
                    throw c("network_error"),
                    e
                }
                )))).then((e=>e), (e=>{
                    if (e instanceof de)
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.error("Skipped sending event because buffer is full."),
                        c("queue_overflow"),
                        (0,
                        J.WD)();
                    throw e
                }
                ))
            }
            return s.__sentry__baseTransport__ = !0,
            {
                send: s,
                flush: e=>n.drain(e)
            }
        }
        function It(e, t) {
            if ("event" === t || "transaction" === t)
                return Array.isArray(e) ? e[1] : void 0
        }
        let Mt;
        function Ut(e, t=function() {
            if (Mt)
                return Mt;
            if (j(Me.fetch))
                return Mt = Me.fetch.bind(Me);
            const e = Me.document;
            let t = Me.fetch;
            if (e && "function" == typeof e.createElement)
                try {
                    const n = e.createElement("iframe");
                    n.hidden = !0,
                    e.head.appendChild(n);
                    const r = n.contentWindow;
                    r && r.fetch && (t = r.fetch),
                    e.head.removeChild(n)
                } catch (e) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                }
            return Mt = t.bind(Me)
        }()) {
            let n = 0
              , r = 0;
            return Dt(e, (function(o) {
                const s = o.body.length;
                n += s,
                r++;
                const a = {
                    body: o.body,
                    method: "POST",
                    referrerPolicy: "origin",
                    headers: e.headers,
                    keepalive: n <= 6e4 && r < 15,
                    ...e.fetchOptions
                };
                try {
                    return t(e.url, a).then((e=>(n -= s,
                    r--,
                    {
                        statusCode: e.status,
                        headers: {
                            "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": e.headers.get("Retry-After")
                        }
                    })))
                } catch (e) {
                    return Mt = void 0,
                    n -= s,
                    r--,
                    (0,
                    J.$2)(e)
                }
            }
            ))
        }
        const Bt = 4;
        function Gt(e) {
            return Dt(e, (function(t) {
                return new J.cW(((n,r)=>{
                    const o = new XMLHttpRequest;
                    o.onerror = r,
                    o.onreadystatechange = ()=>{
                        o.readyState === Bt && n({
                            statusCode: o.status,
                            headers: {
                                "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                                "retry-after": o.getResponseHeader("Retry-After")
                            }
                        })
                    }
                    ,
                    o.open("POST", e.url);
                    for (const t in e.headers)
                        Object.prototype.hasOwnProperty.call(e.headers, t) && o.setRequestHeader(t, e.headers[t]);
                    o.send(t.body)
                }
                ))
            }
            ))
        }
        const qt = [new l, new h, new Ke, new st, new Ze, new mt, new ft, new gt];
        function Ht(e={}) {
            void 0 === e.defaultIntegrations && (e.defaultIntegrations = qt),
            void 0 === e.release && ("string" == typeof __SENTRY_RELEASE__ && (e.release = __SENTRY_RELEASE__),
            Me.SENTRY_RELEASE && Me.SENTRY_RELEASE.id && (e.release = Me.SENTRY_RELEASE.id)),
            void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0),
            void 0 === e.sendClientReports && (e.sendClientReports = !0);
            const t = {
                ...e,
                stackParser: (n = e.stackParser || Ct,
                Array.isArray(n) ? x(...n) : n),
                integrations: g(e),
                transport: e.transport || (k() ? Ut : Gt)
            };
            var n;
            !function(e, t) {
                !0 === t.debug && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? o.kg.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
                const n = (0,
                r.Gd)();
                n.getScope().update(t.initialScope);
                const s = new e(t);
                n.bindClient(s)
            }(qe, t),
            e.autoSessionTracking && function() {
                if (void 0 === Me.document)
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
                const e = (0,
                r.Gd)();
                if (!e.captureSession)
                    return;
                Zt(e),
                D("history", (({from: e, to: t})=>{
                    void 0 !== e && e !== t && Zt((0,
                    r.Gd)())
                }
                ))
            }()
        }
        function Zt(e) {
            e.startSession({
                ignoreDuration: !0
            }),
            e.captureSession()
        }
        const Yt = "baggage"
          , $t = "sentry-"
          , Ft = /^sentry-/
          , zt = 8192;
        function Wt(e) {
            if (!e)
                return;
            return function(e) {
                if (0 === Object.keys(e).length)
                    return;
                return Object.entries(e).reduce(((e,[t,n],r)=>{
                    const s = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`
                      , a = 0 === r ? s : `${e},${s}`;
                    return a.length > zt ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`),
                    e) : a
                }
                ), "")
            }(Object.entries(e).reduce(((e,[t,n])=>(n && (e[`${$t}${t}`] = n),
            e)), {}))
        }
        function Vt(e) {
            return e.split(",").map((e=>e.split("=").map((e=>decodeURIComponent(e.trim()))))).reduce(((e,[t,n])=>(e[t] = n,
            e)), {})
        }
        const Kt = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
        function Jt(e, t) {
            const n = function(e) {
                if (!e)
                    return;
                const t = e.match(Kt);
                if (!t)
                    return;
                let n;
                return "1" === t[3] ? n = !0 : "0" === t[3] && (n = !1),
                {
                    traceId: t[1],
                    parentSampled: n,
                    parentSpanId: t[2]
                }
            }(e)
              , r = function(e) {
                if (!(0,
                N.HD)(e) && !Array.isArray(e))
                    return;
                let t = {};
                if (Array.isArray(e))
                    t = e.reduce(((e,t)=>({
                        ...e,
                        ...Vt(t)
                    })), {});
                else {
                    if (!e)
                        return;
                    t = Vt(e)
                }
                const n = Object.entries(t).reduce(((e,[t,n])=>(t.match(Ft) && (e[t.slice($t.length)] = n),
                e)), {});
                return Object.keys(n).length > 0 ? n : void 0
            }(t)
              , {traceId: o, parentSpanId: a, parentSampled: i} = n || {}
              , c = {
                traceId: o || (0,
                s.DM)(),
                spanId: (0,
                s.DM)().substring(16),
                sampled: i
            };
            return a && (c.parentSpanId = a),
            r && (c.dsc = r),
            {
                traceparentData: n,
                dynamicSamplingContext: r,
                propagationContext: c
            }
        }
        function Xt(e=(0,
        s.DM)(), t=(0,
        s.DM)().substring(16), n) {
            let r = "";
            return void 0 !== n && (r = n ? "-1" : "-0"),
            `${e}-${t}${r}`
        }
        class Qt {
            constructor(e=1e3) {
                this._maxlen = e,
                this.spans = []
            }
            add(e) {
                this.spans.length > this._maxlen ? e.spanRecorder = void 0 : this.spans.push(e)
            }
        }
        class en {
            constructor(e={}) {
                this.traceId = e.traceId || (0,
                s.DM)(),
                this.spanId = e.spanId || (0,
                s.DM)().substring(16),
                this.startTimestamp = e.startTimestamp || (0,
                ye.ph)(),
                this.tags = e.tags || {},
                this.data = e.data || {},
                this.instrumenter = e.instrumenter || "sentry",
                this.origin = e.origin || "manual",
                e.parentSpanId && (this.parentSpanId = e.parentSpanId),
                "sampled"in e && (this.sampled = e.sampled),
                e.op && (this.op = e.op),
                e.description && (this.description = e.description),
                e.name && (this.description = e.name),
                e.status && (this.status = e.status),
                e.endTimestamp && (this.endTimestamp = e.endTimestamp)
            }
            get name() {
                return this.description || ""
            }
            set name(e) {
                this.setName(e)
            }
            startChild(e) {
                const t = new en({
                    ...e,
                    parentSpanId: this.spanId,
                    sampled: this.sampled,
                    traceId: this.traceId
                });
                if (t.spanRecorder = this.spanRecorder,
                t.spanRecorder && t.spanRecorder.add(t),
                t.transaction = this.transaction,
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && t.transaction) {
                    const n = `[Tracing] Starting '${e && e.op || "< unknown op >"}' span on transaction '${t.transaction.name || "< unknown name >"}' (${t.transaction.spanId}).`;
                    t.transaction.metadata.spanMetadata[t.spanId] = {
                        logMessage: n
                    },
                    o.kg.log(n)
                }
                return t
            }
            setTag(e, t) {
                return this.tags = {
                    ...this.tags,
                    [e]: t
                },
                this
            }
            setData(e, t) {
                return this.data = {
                    ...this.data,
                    [e]: t
                },
                this
            }
            setStatus(e) {
                return this.status = e,
                this
            }
            setHttpStatus(e) {
                this.setTag("http.status_code", String(e)),
                this.setData("http.response.status_code", e);
                const t = function(e) {
                    if (e < 400 && e >= 100)
                        return "ok";
                    if (e >= 400 && e < 500)
                        switch (e) {
                        case 401:
                            return "unauthenticated";
                        case 403:
                            return "permission_denied";
                        case 404:
                            return "not_found";
                        case 409:
                            return "already_exists";
                        case 413:
                            return "failed_precondition";
                        case 429:
                            return "resource_exhausted";
                        default:
                            return "invalid_argument"
                        }
                    if (e >= 500 && e < 600)
                        switch (e) {
                        case 501:
                            return "unimplemented";
                        case 503:
                            return "unavailable";
                        case 504:
                            return "deadline_exceeded";
                        default:
                            return "internal_error"
                        }
                    return "unknown_error"
                }(e);
                return "unknown_error" !== t && this.setStatus(t),
                this
            }
            setName(e) {
                this.description = e
            }
            isSuccess() {
                return "ok" === this.status
            }
            finish(e) {
                if (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
                    const {logMessage: e} = this.transaction.metadata.spanMetadata[this.spanId];
                    e && o.kg.log(e.replace("Starting", "Finishing"))
                }
                this.endTimestamp = "number" == typeof e ? e : (0,
                ye.ph)()
            }
            toTraceparent() {
                return Xt(this.traceId, this.spanId, this.sampled)
            }
            toContext() {
                return (0,
                u.Jr)({
                    data: this.data,
                    description: this.description,
                    endTimestamp: this.endTimestamp,
                    op: this.op,
                    parentSpanId: this.parentSpanId,
                    sampled: this.sampled,
                    spanId: this.spanId,
                    startTimestamp: this.startTimestamp,
                    status: this.status,
                    tags: this.tags,
                    traceId: this.traceId
                })
            }
            updateWithContext(e) {
                return this.data = e.data || {},
                this.description = e.description,
                this.endTimestamp = e.endTimestamp,
                this.op = e.op,
                this.parentSpanId = e.parentSpanId,
                this.sampled = e.sampled,
                this.spanId = e.spanId || this.spanId,
                this.startTimestamp = e.startTimestamp || this.startTimestamp,
                this.status = e.status,
                this.tags = e.tags || {},
                this.traceId = e.traceId || this.traceId,
                this
            }
            getTraceContext() {
                return (0,
                u.Jr)({
                    data: Object.keys(this.data).length > 0 ? this.data : void 0,
                    description: this.description,
                    op: this.op,
                    parent_span_id: this.parentSpanId,
                    span_id: this.spanId,
                    status: this.status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                    trace_id: this.traceId
                })
            }
            toJSON() {
                return (0,
                u.Jr)({
                    data: Object.keys(this.data).length > 0 ? this.data : void 0,
                    description: this.description,
                    op: this.op,
                    parent_span_id: this.parentSpanId,
                    span_id: this.spanId,
                    start_timestamp: this.startTimestamp,
                    status: this.status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                    timestamp: this.endTimestamp,
                    trace_id: this.traceId,
                    origin: this.origin
                })
            }
        }
        class tn extends en {
            constructor(e, t) {
                super(e),
                delete this.description,
                this._measurements = {},
                this._contexts = {},
                this._hub = t || (0,
                r.Gd)(),
                this._name = e.name || "",
                this.metadata = {
                    source: "custom",
                    ...e.metadata,
                    spanMetadata: {}
                },
                this._trimEnd = e.trimEnd,
                this.transaction = this;
                const n = this.metadata.dynamicSamplingContext;
                n && (this._frozenDynamicSamplingContext = {
                    ...n
                })
            }
            get name() {
                return this._name
            }
            set name(e) {
                this.setName(e)
            }
            setName(e, t="custom") {
                this._name = e,
                this.metadata.source = t
            }
            initSpanRecorder(e=1e3) {
                this.spanRecorder || (this.spanRecorder = new Qt(e)),
                this.spanRecorder.add(this)
            }
            setContext(e, t) {
                null === t ? delete this._contexts[e] : this._contexts[e] = t
            }
            setMeasurement(e, t, n="") {
                this._measurements[e] = {
                    value: t,
                    unit: n
                }
            }
            setMetadata(e) {
                this.metadata = {
                    ...this.metadata,
                    ...e
                }
            }
            finish(e) {
                const t = this._finishTransaction(e);
                if (t)
                    return this._hub.captureEvent(t)
            }
            toContext() {
                const e = super.toContext();
                return (0,
                u.Jr)({
                    ...e,
                    name: this.name,
                    trimEnd: this._trimEnd
                })
            }
            updateWithContext(e) {
                return super.updateWithContext(e),
                this.name = e.name || "",
                this._trimEnd = e.trimEnd,
                this
            }
            getDynamicSamplingContext() {
                if (this._frozenDynamicSamplingContext)
                    return this._frozenDynamicSamplingContext;
                const e = this._hub || (0,
                r.Gd)()
                  , t = e.getClient();
                if (!t)
                    return {};
                const n = e.getScope()
                  , o = fe(this.traceId, t, n)
                  , s = this.metadata.sampleRate;
                void 0 !== s && (o.sample_rate = `${s}`);
                const a = this.metadata.source;
                return a && "url" !== a && (o.transaction = this.name),
                void 0 !== this.sampled && (o.sampled = String(this.sampled)),
                o
            }
            setHub(e) {
                this._hub = e
            }
            _finishTransaction(e) {
                if (void 0 !== this.endTimestamp)
                    return;
                this.name || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
                this.name = "<unlabeled transaction>"),
                super.finish(e);
                const t = this._hub.getClient();
                if (t && t.emit && t.emit("finishTransaction", this),
                !0 !== this.sampled)
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
                    void (t && t.recordDroppedEvent("sample_rate", "transaction"));
                const n = this.spanRecorder ? this.spanRecorder.spans.filter((e=>e !== this && e.endTimestamp)) : [];
                this._trimEnd && n.length > 0 && (this.endTimestamp = n.reduce(((e,t)=>e.endTimestamp && t.endTimestamp ? e.endTimestamp > t.endTimestamp ? e : t : e)).endTimestamp);
                const r = this.metadata
                  , s = {
                    contexts: {
                        ...this._contexts,
                        trace: this.getTraceContext()
                    },
                    spans: n,
                    start_timestamp: this.startTimestamp,
                    tags: this.tags,
                    timestamp: this.endTimestamp,
                    transaction: this.name,
                    type: "transaction",
                    sdkProcessingMetadata: {
                        ...r,
                        dynamicSamplingContext: this.getDynamicSamplingContext()
                    },
                    ...r.source && {
                        transaction_info: {
                            source: r.source
                        }
                    }
                };
                return Object.keys(this._measurements).length > 0 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)),
                s.measurements = this._measurements),
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),
                s
            }
        }
        const nn = {
            idleTimeout: 1e3,
            finalTimeout: 3e4,
            heartbeatInterval: 5e3
        }
          , rn = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
        class on extends Qt {
            constructor(e, t, n, r) {
                super(r),
                this._pushActivity = e,
                this._popActivity = t,
                this.transactionSpanId = n
            }
            add(e) {
                e.spanId !== this.transactionSpanId && (e.finish = t=>{
                    e.endTimestamp = "number" == typeof t ? t : (0,
                    ye.ph)(),
                    this._popActivity(e.spanId)
                }
                ,
                void 0 === e.endTimestamp && this._pushActivity(e.spanId)),
                super.add(e)
            }
        }
        class sn extends tn {
            constructor(e, t, n=nn.idleTimeout, r=nn.finalTimeout, s=nn.heartbeatInterval, a=!1) {
                super(e, t),
                this._idleHub = t,
                this._idleTimeout = n,
                this._finalTimeout = r,
                this._heartbeatInterval = s,
                this._onScope = a,
                this.activities = {},
                this._heartbeatCounter = 0,
                this._finished = !1,
                this._idleTimeoutCanceledPermanently = !1,
                this._beforeFinishCallbacks = [],
                this._finishReason = rn[4],
                a && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),
                t.configureScope((e=>e.setSpan(this)))),
                this._restartIdleTimeout(),
                setTimeout((()=>{
                    this._finished || (this.setStatus("deadline_exceeded"),
                    this._finishReason = rn[3],
                    this.finish())
                }
                ), this._finalTimeout)
            }
            finish(e=(0,
            ye.ph)()) {
                if (this._finished = !0,
                this.activities = {},
                "ui.action.click" === this.op && this.setTag("finishReason", this._finishReason),
                this.spanRecorder) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Tracing] finishing IdleTransaction", new Date(1e3 * e).toISOString(), this.op);
                    for (const t of this._beforeFinishCallbacks)
                        t(this, e);
                    this.spanRecorder.spans = this.spanRecorder.spans.filter((t=>{
                        if (t.spanId === this.spanId)
                            return !0;
                        t.endTimestamp || (t.endTimestamp = e,
                        t.setStatus("cancelled"),
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(t, void 0, 2)));
                        const n = t.startTimestamp < e
                          , r = (this._finalTimeout + this._idleTimeout) / 1e3
                          , s = t.endTimestamp - this.startTimestamp < r;
                        if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                            const e = JSON.stringify(t, void 0, 2);
                            n ? s || o.kg.log("[Tracing] discarding Span since it finished after Transaction final timeout", e) : o.kg.log("[Tracing] discarding Span since it happened after Transaction was finished", e)
                        }
                        return n && s
                    }
                    )),
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Tracing] flushing IdleTransaction")
                } else
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Tracing] No active IdleTransaction");
                if (this._onScope) {
                    const e = this._idleHub.getScope();
                    e.getTransaction() === this && e.setSpan(void 0)
                }
                return super.finish(e)
            }
            registerBeforeFinishCallback(e) {
                this._beforeFinishCallbacks.push(e)
            }
            initSpanRecorder(e) {
                if (!this.spanRecorder) {
                    const t = e=>{
                        this._finished || this._pushActivity(e)
                    }
                      , n = e=>{
                        this._finished || this._popActivity(e)
                    }
                    ;
                    this.spanRecorder = new on(t,n,this.spanId,e),
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("Starting heartbeat"),
                    this._pingHeartbeat()
                }
                this.spanRecorder.add(this)
            }
            cancelIdleTimeout(e, {restartOnChildSpanChange: t}={
                restartOnChildSpanChange: !0
            }) {
                this._idleTimeoutCanceledPermanently = !1 === t,
                this._idleTimeoutID && (clearTimeout(this._idleTimeoutID),
                this._idleTimeoutID = void 0,
                0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = rn[5],
                this.finish(e)))
            }
            setFinishReason(e) {
                this._finishReason = e
            }
            _restartIdleTimeout(e) {
                this.cancelIdleTimeout(),
                this._idleTimeoutID = setTimeout((()=>{
                    this._finished || 0 !== Object.keys(this.activities).length || (this._finishReason = rn[1],
                    this.finish(e))
                }
                ), this._idleTimeout)
            }
            _pushActivity(e) {
                this.cancelIdleTimeout(void 0, {
                    restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
                }),
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`[Tracing] pushActivity: ${e}`),
                this.activities[e] = !0,
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)
            }
            _popActivity(e) {
                if (this.activities[e] && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`[Tracing] popActivity ${e}`),
                delete this.activities[e],
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)),
                0 === Object.keys(this.activities).length) {
                    const e = (0,
                    ye.ph)();
                    this._idleTimeoutCanceledPermanently ? (this._finishReason = rn[5],
                    this.finish(e)) : this._restartIdleTimeout(e + this._idleTimeout / 1e3)
                }
            }
            _beat() {
                if (this._finished)
                    return;
                const e = Object.keys(this.activities).join("");
                e === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1,
                this._prevHeartbeatString = e,
                this._heartbeatCounter >= 3 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"),
                this.setStatus("deadline_exceeded"),
                this._finishReason = rn[0],
                this.finish()) : this._pingHeartbeat()
            }
            _pingHeartbeat() {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
                setTimeout((()=>{
                    this._beat()
                }
                ), this._heartbeatInterval)
            }
        }
        function an(e) {
            return (e || (0,
            r.Gd)()).getScope().getTransaction()
        }
        let cn = !1;
        function ln() {
            const e = an();
            if (e) {
                const t = "internal_error";
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`[Tracing] Transaction: ${t} -> Global error occured`),
                e.setStatus(t)
            }
        }
        function dn(e) {
            if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
                return !1;
            const t = (0,
            r.Gd)().getClient()
              , n = e || t && t.getOptions();
            return !!n && (n.enableTracing || "tracesSampleRate"in n || "tracesSampler"in n)
        }
        function un(e, t, n) {
            if (!dn(t))
                return e.sampled = !1,
                e;
            if (void 0 !== e.sampled)
                return e.setMetadata({
                    sampleRate: Number(e.sampled)
                }),
                e;
            let r;
            return "function" == typeof t.tracesSampler ? (r = t.tracesSampler(n),
            e.setMetadata({
                sampleRate: Number(r)
            })) : void 0 !== n.parentSampled ? r = n.parentSampled : void 0 !== t.tracesSampleRate ? (r = t.tracesSampleRate,
            e.setMetadata({
                sampleRate: Number(r)
            })) : (r = 1,
            e.setMetadata({
                sampleRate: r
            })),
            function(e) {
                if ((0,
                N.i2)(e) || "number" != typeof e && "boolean" != typeof e)
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`),
                    !1;
                if (e < 0 || e > 1)
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`),
                    !1;
                return !0
            }(r) ? r ? (e.sampled = Math.random() < r,
            e.sampled ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`[Tracing] starting ${e.op} transaction - ${e.name}`),
            e) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`),
            e)) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Tracing] Discarding transaction because " + ("function" == typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")),
            e.sampled = !1,
            e) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."),
            e.sampled = !1,
            e)
        }
        function pn() {
            const e = this.getScope().getSpan();
            return e ? {
                "sentry-trace": e.toTraceparent()
            } : {}
        }
        function hn(e, t) {
            const n = this.getClient()
              , r = n && n.getOptions() || {}
              , s = r.instrumenter || "sentry"
              , a = e.instrumenter || "sentry";
            s !== a && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.error(`A transaction was started with instrumenter=\`${a}\`, but the SDK is configured with the \`${s}\` instrumenter.\nThe transaction will not be sampled. Please use the ${s} instrumentation to start transactions.`),
            e.sampled = !1);
            let i = new tn(e,this);
            return i = un(i, r, {
                parentSampled: e.parentSampled,
                transactionContext: e,
                ...t
            }),
            i.sampled && i.initSpanRecorder(r._experiments && r._experiments.maxSpans),
            n && n.emit && n.emit("startTransaction", i),
            i
        }
        function _n(e, t, n, r, o, s, a) {
            const i = e.getClient()
              , c = i && i.getOptions() || {};
            let l = new sn(t,e,n,r,a,o);
            return l = un(l, c, {
                parentSampled: t.parentSampled,
                transactionContext: t,
                ...s
            }),
            l.sampled && l.initSpanRecorder(c._experiments && c._experiments.maxSpans),
            i && i.emit && i.emit("startTransaction", l),
            l
        }
        function mn() {
            const e = (0,
            r.cu)();
            e.__SENTRY__ && (e.__SENTRY__.extensions = e.__SENTRY__.extensions || {},
            e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = hn),
            e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = pn),
            cn || (cn = !0,
            D("error", ln),
            D("unhandledrejection", ln)))
        }
        ln.tag = "sentry_tracingErrorCallback";
        const gn = S.n2;
        const fn = (e,t,n)=>{
            let r, o;
            return s=>{
                t.value >= 0 && (s || n) && (o = t.value - (r || 0),
                (o || void 0 === r) && (r = t.value,
                t.delta = o,
                e(t)))
            }
        }
          , yn = ()=>gn.__WEB_VITALS_POLYFILL__ ? gn.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || (()=>{
            const e = gn.performance.timing
              , t = gn.performance.navigation.type
              , n = {
                entryType: "navigation",
                startTime: 0,
                type: 2 == t ? "back_forward" : 1 === t ? "reload" : "navigate"
            };
            for (const t in e)
                "navigationStart" !== t && "toJSON" !== t && (n[t] = Math.max(e[t] - e.navigationStart, 0));
            return n
        }
        )()) : gn.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
          , vn = ()=>{
            const e = yn();
            return e && e.activationStart || 0
        }
          , bn = (e,t)=>{
            const n = yn();
            let r = "navigate";
            return n && (r = gn.document.prerendering || vn() > 0 ? "prerender" : n.type.replace(/_/g, "-")),
            {
                name: e,
                value: void 0 === t ? -1 : t,
                rating: "good",
                delta: 0,
                entries: [],
                id: `v3-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`,
                navigationType: r
            }
        }
          , xn = (e,t,n)=>{
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    const r = new PerformanceObserver((e=>{
                        t(e.getEntries())
                    }
                    ));
                    return r.observe(Object.assign({
                        type: e,
                        buffered: !0
                    }, n || {})),
                    r
                }
            } catch (e) {}
        }
          , wn = (e,t)=>{
            const n = r=>{
                "pagehide" !== r.type && "hidden" !== gn.document.visibilityState || (e(r),
                t && (removeEventListener("visibilitychange", n, !0),
                removeEventListener("pagehide", n, !0)))
            }
            ;
            addEventListener("visibilitychange", n, !0),
            addEventListener("pagehide", n, !0)
        }
          , En = e=>{
            const t = bn("CLS", 0);
            let n, r = 0, o = [];
            const s = e=>{
                e.forEach((e=>{
                    if (!e.hadRecentInput) {
                        const s = o[0]
                          , a = o[o.length - 1];
                        r && 0 !== o.length && e.startTime - a.startTime < 1e3 && e.startTime - s.startTime < 5e3 ? (r += e.value,
                        o.push(e)) : (r = e.value,
                        o = [e]),
                        r > t.value && (t.value = r,
                        t.entries = o,
                        n && n())
                    }
                }
                ))
            }
              , a = xn("layout-shift", s);
            if (a) {
                n = fn(e, t);
                const r = ()=>{
                    s(a.takeRecords()),
                    n(!0)
                }
                ;
                return wn(r),
                r
            }
        }
        ;
        let Sn = -1;
        const Tn = ()=>(Sn < 0 && (Sn = "hidden" !== gn.document.visibilityState || gn.document.prerendering ? 1 / 0 : 0,
        wn((({timeStamp: e})=>{
            Sn = e
        }
        ), !0)),
        {
            get firstHiddenTime() {
                return Sn
            }
        })
          , kn = e=>{
            const t = Tn()
              , n = bn("FID");
            let r;
            const o = e=>{
                e.startTime < t.firstHiddenTime && (n.value = e.processingStart - e.startTime,
                n.entries.push(e),
                r(!0))
            }
              , s = e=>{
                e.forEach(o)
            }
              , a = xn("first-input", s);
            r = fn(e, n),
            a && wn((()=>{
                s(a.takeRecords()),
                a.disconnect()
            }
            ), !0)
        }
          , jn = {}
          , Nn = e=>{
            const t = Tn()
              , n = bn("LCP");
            let r;
            const o = e=>{
                const o = e[e.length - 1];
                if (o) {
                    const e = Math.max(o.startTime - vn(), 0);
                    e < t.firstHiddenTime && (n.value = e,
                    n.entries = [o],
                    r())
                }
            }
              , s = xn("largest-contentful-paint", o);
            if (s) {
                r = fn(e, n);
                const t = ()=>{
                    jn[n.id] || (o(s.takeRecords()),
                    s.disconnect(),
                    jn[n.id] = !0,
                    r(!0))
                }
                ;
                return ["keydown", "click"].forEach((e=>{
                    addEventListener(e, t, {
                        once: !0,
                        capture: !0
                    })
                }
                )),
                wn(t, !0),
                t
            }
        }
          , Cn = {}
          , Pn = {};
        let An, Ln, Rn;
        function On(e, t) {
            return Gn(e, t),
            Pn[e] || (!function(e) {
                const t = {};
                "event" === e && (t.durationThreshold = 0);
                xn(e, (t=>{
                    Dn(e, {
                        entries: t
                    })
                }
                ), t)
            }(e),
            Pn[e] = !0),
            qn(e, t)
        }
        function Dn(e, t) {
            const n = Cn[e];
            if (n && n.length)
                for (const r of n)
                    try {
                        r(t)
                    } catch (t) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${E(r)}\nError:`, t)
                    }
        }
        function In() {
            En((e=>{
                Dn("cls", {
                    metric: e
                }),
                An = e
            }
            ))
        }
        function Mn() {
            kn((e=>{
                Dn("fid", {
                    metric: e
                }),
                Ln = e
            }
            ))
        }
        function Un() {
            Nn((e=>{
                Dn("lcp", {
                    metric: e
                }),
                Rn = e
            }
            ))
        }
        function Bn(e, t, n, r) {
            return Gn(e, t),
            Pn[e] || (n(),
            Pn[e] = !0),
            r && t({
                metric: r
            }),
            qn(e, t)
        }
        function Gn(e, t) {
            Cn[e] = Cn[e] || [],
            Cn[e].push(t)
        }
        function qn(e, t) {
            return ()=>{
                const n = Cn[e];
                if (!n)
                    return;
                const r = n.indexOf(t);
                -1 !== r && n.splice(r, 1)
            }
        }
        function Hn(e) {
            return "number" == typeof e && isFinite(e)
        }
        function Zn(e, {startTimestamp: t, ...n}) {
            return t && e.startTimestamp > t && (e.startTimestamp = t),
            e.startChild({
                startTimestamp: t,
                ...n
            })
        }
        function Yn(e) {
            return e / 1e3
        }
        function $n() {
            return gn && gn.addEventListener && gn.performance
        }
        let Fn, zn, Wn = 0, Vn = {};
        function Kn() {
            const e = $n();
            if (e && ye.Z1) {
                e.mark && gn.performance.mark("sentry-tracing-init");
                const t = Bn("fid", (({metric: e})=>{
                    const t = e.entries.pop();
                    if (!t)
                        return;
                    const n = Yn(ye.Z1)
                      , r = Yn(t.startTime);
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Measurements] Adding FID"),
                    Vn.fid = {
                        value: e.value,
                        unit: "millisecond"
                    },
                    Vn["mark.fid"] = {
                        value: n + r,
                        unit: "second"
                    }
                }
                ), Mn, Ln)
                  , n = function(e) {
                    return Bn("cls", e, In, An)
                }((({metric: e})=>{
                    const t = e.entries.pop();
                    t && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Measurements] Adding CLS"),
                    Vn.cls = {
                        value: e.value,
                        unit: ""
                    },
                    zn = t)
                }
                ))
                  , r = function(e) {
                    return Bn("lcp", e, Un, Rn)
                }((({metric: e})=>{
                    const t = e.entries.pop();
                    t && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Measurements] Adding LCP"),
                    Vn.lcp = {
                        value: e.value,
                        unit: "millisecond"
                    },
                    Fn = t)
                }
                ));
                return ()=>{
                    t(),
                    n(),
                    r()
                }
            }
            return ()=>{}
        }
        function Jn(e) {
            const t = $n();
            if (!t || !gn.performance.getEntries || !ye.Z1)
                return;
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Tracing] Adding & adjusting spans using Performance API");
            const n = Yn(ye.Z1)
              , r = t.getEntries();
            let s, a;
            if (r.slice(Wn).forEach((t=>{
                const r = Yn(t.startTime)
                  , i = Yn(t.duration);
                if (!("navigation" === e.op && n + r < e.startTimestamp))
                    switch (t.entryType) {
                    case "navigation":
                        !function(e, t, n) {
                            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((r=>{
                                Xn(e, t, r, n)
                            }
                            )),
                            Xn(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
                            Xn(e, t, "fetch", n, "cache", "domainLookupStart"),
                            Xn(e, t, "domainLookup", n, "DNS"),
                            function(e, t, n) {
                                Zn(e, {
                                    op: "browser",
                                    origin: "auto.browser.browser.metrics",
                                    description: "request",
                                    startTimestamp: n + Yn(t.requestStart),
                                    endTimestamp: n + Yn(t.responseEnd)
                                }),
                                Zn(e, {
                                    op: "browser",
                                    origin: "auto.browser.browser.metrics",
                                    description: "response",
                                    startTimestamp: n + Yn(t.responseStart),
                                    endTimestamp: n + Yn(t.responseEnd)
                                })
                            }(e, t, n)
                        }(e, t, n),
                        s = n + Yn(t.responseStart),
                        a = n + Yn(t.requestStart);
                        break;
                    case "mark":
                    case "paint":
                    case "measure":
                        {
                            !function(e, t, n, r, o) {
                                const s = o + n
                                  , a = s + r;
                                Zn(e, {
                                    description: t.name,
                                    endTimestamp: a,
                                    op: t.entryType,
                                    origin: "auto.resource.browser.metrics",
                                    startTimestamp: s
                                })
                            }(e, t, r, i, n);
                            const s = Tn()
                              , a = t.startTime < s.firstHiddenTime;
                            "first-paint" === t.name && a && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Measurements] Adding FP"),
                            Vn.fp = {
                                value: t.startTime,
                                unit: "millisecond"
                            }),
                            "first-contentful-paint" === t.name && a && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Measurements] Adding FCP"),
                            Vn.fcp = {
                                value: t.startTime,
                                unit: "millisecond"
                            });
                            break
                        }
                    case "resource":
                        {
                            const o = t.name.replace(gn.location.origin, "");
                            !function(e, t, n, r, o, s) {
                                if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType)
                                    return;
                                const a = {};
                                "transferSize"in t && (a["http.response_transfer_size"] = t.transferSize);
                                "encodedBodySize"in t && (a["http.response_content_length"] = t.encodedBodySize);
                                "decodedBodySize"in t && (a["http.decoded_response_content_length"] = t.decodedBodySize);
                                "renderBlockingStatus"in t && (a["resource.render_blocking_status"] = t.renderBlockingStatus);
                                const i = s + r
                                  , c = i + o;
                                Zn(e, {
                                    description: n,
                                    endTimestamp: c,
                                    op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                                    origin: "auto.resource.browser.metrics",
                                    startTimestamp: i,
                                    data: a
                                })
                            }(e, t, o, r, i, n);
                            break
                        }
                    }
            }
            )),
            Wn = Math.max(r.length - 1, 0),
            function(e) {
                const t = gn.navigator;
                if (!t)
                    return;
                const n = t.connection;
                n && (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType),
                n.type && e.setTag("connectionType", n.type),
                Hn(n.rtt) && (Vn["connection.rtt"] = {
                    value: n.rtt,
                    unit: "millisecond"
                }));
                Hn(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`);
                Hn(t.hardwareConcurrency) && e.setTag("hardwareConcurrency", String(t.hardwareConcurrency))
            }(e),
            "pageload" === e.op) {
                "number" == typeof s && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Measurements] Adding TTFB"),
                Vn.ttfb = {
                    value: 1e3 * (s - e.startTimestamp),
                    unit: "millisecond"
                },
                "number" == typeof a && a <= s && (Vn["ttfb.requestTime"] = {
                    value: 1e3 * (s - a),
                    unit: "millisecond"
                })),
                ["fcp", "fp", "lcp"].forEach((t=>{
                    if (!Vn[t] || n >= e.startTimestamp)
                        return;
                    const r = Vn[t].value
                      , s = n + Yn(r)
                      , a = Math.abs(1e3 * (s - e.startTimestamp))
                      , i = a - r;
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`[Measurements] Normalized ${t} from ${r} to ${a} (${i})`),
                    Vn[t].value = a
                }
                ));
                const t = Vn["mark.fid"];
                t && Vn.fid && (Zn(e, {
                    description: "first input delay",
                    endTimestamp: t.value + Yn(Vn.fid.value),
                    op: "ui.action",
                    origin: "auto.ui.browser.metrics",
                    startTimestamp: t.value
                }),
                delete Vn["mark.fid"]),
                "fcp"in Vn || delete Vn.cls,
                Object.keys(Vn).forEach((t=>{
                    e.setMeasurement(t, Vn[t].value, Vn[t].unit)
                }
                )),
                function(e) {
                    Fn && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Measurements] Adding LCP Data"),
                    Fn.element && e.setTag("lcp.element", (0,
                    He.Rt)(Fn.element)),
                    Fn.id && e.setTag("lcp.id", Fn.id),
                    Fn.url && e.setTag("lcp.url", Fn.url.trim().slice(0, 200)),
                    e.setTag("lcp.size", Fn.size));
                    zn && zn.sources && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Measurements] Adding CLS Data"),
                    zn.sources.forEach(((t,n)=>e.setTag(`cls.source.${n + 1}`, (0,
                    He.Rt)(t.node)))))
                }(e)
            }
            Fn = void 0,
            zn = void 0,
            Vn = {}
        }
        function Xn(e, t, n, r, o, s) {
            const a = s ? t[s] : t[`${n}End`]
              , i = t[`${n}Start`];
            i && a && Zn(e, {
                op: "browser",
                origin: "auto.browser.browser.metrics",
                description: o || n,
                startTimestamp: r + Yn(i),
                endTimestamp: r + Yn(a)
            })
        }
        const Qn = ["localhost", /^\/(?!\/)/]
          , er = {
            traceFetch: !0,
            traceXHR: !0,
            enableHTTPTimings: !0,
            tracingOrigins: Qn,
            tracePropagationTargets: Qn
        };
        function tr(e) {
            const {traceFetch: t, traceXHR: n, tracePropagationTargets: o, tracingOrigins: s, shouldCreateSpanForRequest: i, enableHTTPTimings: c} = {
                traceFetch: er.traceFetch,
                traceXHR: er.traceXHR,
                ...e
            }
              , l = "function" == typeof i ? i : e=>!0
              , d = e=>function(e, t) {
                return (0,
                a.U0)(e, t || Qn)
            }(e, o || s)
              , u = {};
            t && D("fetch", (e=>{
                const t = function(e, t, n, o) {
                    if (!dn() || !e.fetchData)
                        return;
                    const s = t(e.fetchData.url);
                    if (e.endTimestamp && s) {
                        const t = e.fetchData.__span;
                        if (!t)
                            return;
                        const n = o[t];
                        if (n) {
                            if (e.response) {
                                n.setHttpStatus(e.response.status);
                                const t = e.response && e.response.headers && e.response.headers.get("content-length")
                                  , r = parseInt(t);
                                r > 0 && n.setData("http.response_content_length", r)
                            } else
                                e.error && n.setStatus("internal_error");
                            n.finish(),
                            delete o[t]
                        }
                        return
                    }
                    const a = (0,
                    r.Gd)()
                      , i = a.getScope()
                      , c = a.getClient()
                      , l = i.getSpan()
                      , {method: d, url: u} = e.fetchData
                      , p = s && l ? l.startChild({
                        data: {
                            url: u,
                            type: "fetch",
                            "http.method": d
                        },
                        description: `${d} ${u}`,
                        op: "http.client",
                        origin: "auto.http.browser"
                    }) : void 0;
                    p && (e.fetchData.__span = p.spanId,
                    o[p.spanId] = p);
                    if (n(e.fetchData.url) && c) {
                        const t = e.args[0];
                        e.args[1] = e.args[1] || {};
                        const n = e.args[1];
                        n.headers = function(e, t, n, r, o) {
                            const s = o || n.getSpan()
                              , a = s && s.transaction
                              , {traceId: i, sampled: c, dsc: l} = n.getPropagationContext()
                              , d = s ? s.toTraceparent() : Xt(i, void 0, c)
                              , u = a ? a.getDynamicSamplingContext() : l || fe(i, t, n)
                              , p = Wt(u)
                              , h = "undefined" != typeof Request && (0,
                            N.V9)(e, Request) ? e.headers : r.headers;
                            if (h) {
                                if ("undefined" != typeof Headers && (0,
                                N.V9)(h, Headers)) {
                                    const e = new Headers(h);
                                    return e.append("sentry-trace", d),
                                    p && e.append(Yt, p),
                                    e
                                }
                                if (Array.isArray(h)) {
                                    const e = [...h, ["sentry-trace", d]];
                                    return p && e.push([Yt, p]),
                                    e
                                }
                                {
                                    const e = "baggage"in h ? h.baggage : void 0
                                      , t = [];
                                    return Array.isArray(e) ? t.push(...e) : e && t.push(e),
                                    p && t.push(p),
                                    {
                                        ...h,
                                        "sentry-trace": d,
                                        baggage: t.length > 0 ? t.join(",") : void 0
                                    }
                                }
                            }
                            return {
                                "sentry-trace": d,
                                baggage: p
                            }
                        }(t, c, i, n, p)
                    }
                    return p
                }(e, l, d, u);
                c && t && nr(t)
            }
            )),
            n && D("xhr", (e=>{
                const t = function(e, t, n, o) {
                    const s = e.xhr
                      , a = s && s[A];
                    if (!dn() || s && s.__sentry_own_request__ || !s || !a)
                        return;
                    const i = t(a.url);
                    if (e.endTimestamp && i) {
                        const e = s.__sentry_xhr_span_id__;
                        if (!e)
                            return;
                        const t = o[e];
                        return void (t && (t.setHttpStatus(a.status_code),
                        t.finish(),
                        delete o[e]))
                    }
                    const c = (0,
                    r.Gd)()
                      , l = c.getScope()
                      , d = l.getSpan()
                      , u = i && d ? d.startChild({
                        data: {
                            ...a.data,
                            type: "xhr",
                            "http.method": a.method,
                            url: a.url
                        },
                        description: `${a.method} ${a.url}`,
                        op: "http.client",
                        origin: "auto.http.browser"
                    }) : void 0;
                    u && (s.__sentry_xhr_span_id__ = u.spanId,
                    o[s.__sentry_xhr_span_id__] = u);
                    if (s.setRequestHeader && n(a.url))
                        if (u) {
                            const e = u && u.transaction
                              , t = Wt(e && e.getDynamicSamplingContext());
                            or(s, u.toTraceparent(), t)
                        } else {
                            const e = c.getClient()
                              , {traceId: t, sampled: n, dsc: r} = l.getPropagationContext();
                            or(s, Xt(t, void 0, n), Wt(r || (e ? fe(t, e, l) : void 0)))
                        }
                    return u
                }(e, l, d, u);
                c && t && nr(t)
            }
            ))
        }
        function nr(e) {
            const t = e.data.url;
            if (!t)
                return;
            const n = On("resource", (({entries: r})=>{
                r.forEach((r=>{
                    if (function(e) {
                        return "resource" === e.entryType && "initiatorType"in e && "string" == typeof e.nextHopProtocol && ("fetch" === e.initiatorType || "xmlhttprequest" === e.initiatorType)
                    }(r) && r.name.endsWith(t)) {
                        (function(e) {
                            const {name: t, version: n} = function(e) {
                                let t = "unknown"
                                  , n = "unknown"
                                  , r = "";
                                for (const o of e) {
                                    if ("/" === o) {
                                        [t,n] = e.split("/");
                                        break
                                    }
                                    if (!isNaN(Number(o))) {
                                        t = "h" === r ? "http" : r,
                                        n = e.split(r)[1];
                                        break
                                    }
                                    r += o
                                }
                                r === e && (t = r);
                                return {
                                    name: t,
                                    version: n
                                }
                            }(e.nextHopProtocol)
                              , r = [];
                            if (r.push(["network.protocol.version", n], ["network.protocol.name", t]),
                            !ye.Z1)
                                return r;
                            return [...r, ["http.request.redirect_start", rr(e.redirectStart)], ["http.request.fetch_start", rr(e.fetchStart)], ["http.request.domain_lookup_start", rr(e.domainLookupStart)], ["http.request.domain_lookup_end", rr(e.domainLookupEnd)], ["http.request.connect_start", rr(e.connectStart)], ["http.request.secure_connection_start", rr(e.secureConnectionStart)], ["http.request.connection_end", rr(e.connectEnd)], ["http.request.request_start", rr(e.requestStart)], ["http.request.response_start", rr(e.responseStart)], ["http.request.response_end", rr(e.responseEnd)]]
                        }
                        )(r).forEach((t=>e.setData(...t))),
                        setTimeout(n)
                    }
                }
                ))
            }
            ))
        }
        function rr(e=0) {
            return ((ye.Z1 || performance.timeOrigin) + e) / 1e3
        }
        function or(e, t, n) {
            try {
                e.setRequestHeader("sentry-trace", t),
                n && e.setRequestHeader(Yt, n)
            } catch (e) {}
        }
        const sr = {
            ...nn,
            markBackgroundTransactions: !0,
            routingInstrumentation: function(e, t=!0, n=!0) {
                if (!gn || !gn.location)
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("Could not initialize routing instrumentation due to invalid location"));
                let r, s = gn.location.href;
                t && (r = e({
                    name: gn.location.pathname,
                    startTimestamp: ye.Z1 ? ye.Z1 / 1e3 : void 0,
                    op: "pageload",
                    origin: "auto.pageload.browser",
                    metadata: {
                        source: "url"
                    }
                })),
                n && D("history", (({to: t, from: n})=>{
                    void 0 === n && s && -1 !== s.indexOf(t) ? s = void 0 : n !== t && (s = void 0,
                    r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`[Tracing] Finishing current transaction with op: ${r.op}`),
                    r.finish()),
                    r = e({
                        name: gn.location.pathname,
                        op: "navigation",
                        origin: "auto.navigation.browser",
                        metadata: {
                            source: "url"
                        }
                    }))
                }
                ))
            },
            startTransactionOnLocationChange: !0,
            startTransactionOnPageLoad: !0,
            enableLongTask: !0,
            _experiments: {},
            ...er
        };
        class ar {
            constructor(e) {
                this.name = "BrowserTracing",
                this._hasSetTracePropagationTargets = !1,
                mn(),
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (this._hasSetTracePropagationTargets = !(!e || !e.tracePropagationTargets && !e.tracingOrigins)),
                this.options = {
                    ...sr,
                    ...e
                },
                void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask),
                e && !e.tracePropagationTargets && e.tracingOrigins && (this.options.tracePropagationTargets = e.tracingOrigins),
                this._collectWebVitals = Kn(),
                this.options.enableLongTask && On("longtask", (({entries: e})=>{
                    for (const t of e) {
                        const e = an();
                        if (!e)
                            return;
                        const n = Yn(ye.Z1 + t.startTime)
                          , r = Yn(t.duration);
                        e.startChild({
                            description: "Main UI thread blocked",
                            op: "ui.long-task",
                            origin: "auto.ui.browser.metrics",
                            startTimestamp: n,
                            endTimestamp: n + r
                        })
                    }
                }
                )),
                this.options._experiments.enableInteractions && On("event", (({entries: e})=>{
                    for (const t of e) {
                        const e = an();
                        if (!e)
                            return;
                        if ("click" === t.name) {
                            const n = Yn(ye.Z1 + t.startTime)
                              , r = Yn(t.duration);
                            e.startChild({
                                description: (0,
                                He.Rt)(t.target),
                                op: `ui.interaction.${t.name}`,
                                origin: "auto.ui.browser.metrics",
                                startTimestamp: n,
                                endTimestamp: n + r
                            })
                        }
                    }
                }
                ))
            }
            setupOnce(e, t) {
                this._getCurrentHub = t;
                const n = t().getClient()
                  , r = n && n.getOptions()
                  , {routingInstrumentation: s, startTransactionOnLocationChange: a, startTransactionOnPageLoad: i, markBackgroundTransactions: c, traceFetch: l, traceXHR: d, shouldCreateSpanForRequest: u, enableHTTPTimings: p, _experiments: h} = this.options
                  , _ = r && r.tracePropagationTargets
                  , m = _ || this.options.tracePropagationTargets;
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._hasSetTracePropagationTargets && _ && o.kg.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."),
                s((e=>{
                    const n = this._createRouteTransaction(e);
                    return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, e, t),
                    n
                }
                ), i, a),
                c && (gn && gn.document ? gn.document.addEventListener("visibilitychange", (()=>{
                    const e = an();
                    if (gn.document.hidden && e) {
                        const t = "cancelled";
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${e.op}`),
                        e.status || e.setStatus(t),
                        e.setTag("visibilitychange", "document.hidden"),
                        e.finish()
                    }
                }
                )) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")),
                h.enableInteractions && this._registerInteractionListener(),
                tr({
                    traceFetch: l,
                    traceXHR: d,
                    tracePropagationTargets: m,
                    shouldCreateSpanForRequest: u,
                    enableHTTPTimings: p
                })
            }
            _createRouteTransaction(e) {
                if (!this._getCurrentHub)
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`[Tracing] Did not create ${e.op} transaction because _getCurrentHub is invalid.`));
                const t = this._getCurrentHub()
                  , {beforeNavigate: n, idleTimeout: r, finalTimeout: s, heartbeatInterval: a} = this.options
                  , i = "pageload" === e.op
                  , c = i ? ir("sentry-trace") : ""
                  , l = i ? ir("baggage") : ""
                  , {traceparentData: d, dynamicSamplingContext: u, propagationContext: p} = Jt(c, l)
                  , h = {
                    ...e,
                    ...d,
                    metadata: {
                        ...e.metadata,
                        dynamicSamplingContext: d && !u ? {} : u
                    },
                    trimEnd: !0
                }
                  , _ = "function" == typeof n ? n(h) : h
                  , m = void 0 === _ ? {
                    ...h,
                    sampled: !1
                } : _;
                m.metadata = m.name !== h.name ? {
                    ...m.metadata,
                    source: "custom"
                } : m.metadata,
                this._latestRouteName = m.name,
                this._latestRouteSource = m.metadata && m.metadata.source,
                !1 === m.sampled && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`[Tracing] Will not send ${m.op} transaction because of beforeNavigate.`),
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`[Tracing] Starting ${m.op} transaction on scope`);
                const {location: g} = gn
                  , f = _n(t, m, r, s, !0, {
                    location: g
                }, a)
                  , y = t.getScope();
                return i && d ? y.setPropagationContext(p) : y.setPropagationContext({
                    traceId: f.traceId,
                    spanId: f.spanId,
                    parentSpanId: f.parentSpanId,
                    sampled: f.sampled
                }),
                f.registerBeforeFinishCallback((e=>{
                    this._collectWebVitals(),
                    Jn(e)
                }
                )),
                f
            }
            _registerInteractionListener() {
                let e;
                const t = ()=>{
                    const {idleTimeout: t, finalTimeout: n, heartbeatInterval: r} = this.options
                      , s = "ui.action.click"
                      , a = an();
                    if (a && a.op && ["navigation", "pageload"].includes(a.op))
                        return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`[Tracing] Did not create ${s} transaction because a pageload or navigation transaction is in progress.`));
                    if (e && (e.setFinishReason("interactionInterrupted"),
                    e.finish(),
                    e = void 0),
                    !this._getCurrentHub)
                        return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`[Tracing] Did not create ${s} transaction because _getCurrentHub is invalid.`));
                    if (!this._latestRouteName)
                        return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`));
                    const i = this._getCurrentHub()
                      , {location: c} = gn
                      , l = {
                        name: this._latestRouteName,
                        op: s,
                        trimEnd: !0,
                        metadata: {
                            source: this._latestRouteSource || "url"
                        }
                    };
                    e = _n(i, l, t, n, !0, {
                        location: c
                    }, r)
                }
                ;
                ["click"].forEach((e=>{
                    addEventListener(e, t, {
                        once: !1,
                        capture: !0
                    })
                }
                ))
            }
        }
        function ir(e) {
            const t = (0,
            He.qT)(`meta[name=${e}]`);
            return t ? t.getAttribute("content") : void 0
        }
        class cr {
            static __initStatic() {
                this.id = "ExtraErrorData"
            }
            constructor(e) {
                this.name = cr.id,
                this._options = {
                    depth: 3,
                    ...e
                }
            }
            setupOnce(e, t) {}
            processEvent(e, t) {
                return this.enhanceEventWithErrorData(e, t)
            }
            enhanceEventWithErrorData(e, t={}) {
                return function(e, t={}, n) {
                    if (!t.originalException || !(0,
                    N.VZ)(t.originalException))
                        return e;
                    const r = t.originalException.name || t.originalException.constructor.name
                      , s = function(e) {
                        try {
                            const t = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"]
                              , n = {};
                            for (const r of Object.keys(e)) {
                                if (-1 !== t.indexOf(r))
                                    continue;
                                const o = e[r];
                                n[r] = (0,
                                N.VZ)(o) ? o.toString() : o
                            }
                            if ("function" == typeof e.toJSON) {
                                const t = e.toJSON();
                                for (const e of Object.keys(t)) {
                                    const r = t[e];
                                    n[e] = (0,
                                    N.VZ)(r) ? r.toString() : r
                                }
                            }
                            return n
                        } catch (e) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.error("Unable to extract extra data from the Error object:", e)
                        }
                        return null
                    }(t.originalException);
                    if (s) {
                        const t = {
                            ...e.contexts
                        }
                          , o = X(s, n);
                        return (0,
                        N.PO)(o) && ((0,
                        u.xp)(o, "__sentry_skip_normalization__", !0),
                        t[r] = o),
                        {
                            ...e,
                            contexts: t
                        }
                    }
                    return e
                }(e, t, this._options.depth)
            }
        }
        cr.__initStatic();
        var lr = n(38277)
          , dr = n(1477);
        function ur(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function pr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ur(Object(n), !0).forEach((function(t) {
                    hr(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ur(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function hr(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r)
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        const _r = "https://4301771f50c14140a2ea39bb6c247cfe@o1133128.ingest.sentry.io/6179378"
          , mr = "ab757a2a1"
          , gr = [/^ResizeObserver loop limit exceeded/, /^ResizeObserver loop completed with undelivered notifications/, "web3 is not defined", /^msoComment(Show|Hide) is not defined/, "undefined is not an object (evaluating 'window.webkit.messageHandlers')", /^The fetching process for the media resource was aborted by the user agent/, /^Can't find variable: msDiscoverChatAvailable/, /^Loading chunk \d+ failed/]
          , fr = ["languagetool.org", "languagetool.com", "languagetoolplus.com"]
          , yr = ()=>{
            const {hostname: e} = top?.location || self.location;
            return !1 === (0,
            lr.Z)() && fr.includes(e)
        }
        ;
        function vr(e, t, n) {
            const o = r.Gd().getScope().getTransaction();
            o?.setMeasurement(e, t, n)
        }
        function br(e, t) {
            if (!1 !== yr())
                try {
                    const n = {
                        id: t.userId
                    };
                    t.name && (n.username = t.name),
                    Ht({
                        dsn: _r,
                        release: mr,
                        normalizeDepth: t.depth + 1,
                        beforeSend: (e,n)=>"function" == typeof t?.beforeSend ? t.beforeSend(e, n) : e,
                        beforeBreadcrumb: (e,n)=>"function" == typeof t?.beforeBreadcrumb ? t.beforeBreadcrumb(e, n) : e,
                        ignoreErrors: gr,
                        integrations: [new cr({
                            depth: t.depth
                        }), new ar({
                            beforeNavigate: e=>{
                                if (!location.pathname.startsWith("/editor"))
                                    return e
                            }
                        })],
                        allowUrls: [/https:\/\/languagetool\.org/],
                        tracePropagationTargets: [/^\//],
                        tracesSampleRate: .005
                    }),
                    Ie.YA("app", e),
                    Ie.av(n)
                } catch (e) {
                    console.error(e?.message || "Could not initialize Sentry.")
                }
        }
        function xr() {
            const e = document.querySelectorAll('meta[name="sentry-init"]')
              , {dataset: t={}, content: n} = e[0] || {};
            let r = "website";
            const o = {
                depth: 3,
                userId: t.userId || "anon"
            };
            n && (r = n),
            t.depth && !1 === Number.isNaN(parseInt(t.depth, 10)) && (o.depth = parseInt(t.depth, 10)),
            o.userId.startsWith("guest_") && (o.name = "Guest"),
            "true" === t.filterBreadcrumb && (o.beforeBreadcrumb = e=>function(e) {
                if ("console" === e.category && Array.isArray(e.data?.arguments)) {
                    const t = e.data?.arguments.filter((e=>(0,
                    dr.Z)(e))).findIndex((e=>"string" == typeof e.currentText)) ?? -1;
                    if (t > -1) {
                        const {currentText: n} = e.data.arguments[t];
                        e.data.arguments[t] = pr(pr({}, e.data.arguments[t]), {}, {
                            currentText: `[redacted (${n.length} chars)]`
                        })
                    }
                }
                return e
            }(e)),
            br(r, o),
            e.length > 1 && Ie.Tb(new Error(`Expected 1 Sentry init config, but received ${e.length}`))
        }
    }
    ,
    53544: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>o
        });
        var r = n(8686);
        function o() {
            if (location.href.includes("/webextension/welcome/finish")) {
                if (navigator.userAgent.includes("Firefox/") && "1" === navigator.doNotTrack)
                    return;
                r.Z.trackInstallationToShareASale()
            } else
                (location.href.includes("sscid=") || location.href.includes("utm_source=shareasale")) && r.Z.loadShareASaleScript()
        }
    }
    ,
    95294: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>i
        });
        var r = n(64554)
          , o = n(20941);
        function s() {
            const e = document.referrer;
            if (!e)
                return null;
            const t = new URL(e);
            return ["languagetool.org", "languagetool.com", "localhost", "languagetoolplus.com"].includes(t.hostname) ? null : t.hostname
        }
        function a() {
            try {
                const e = document.cookie.match(/_ad_ref=(.+?)(;|$)/);
                if (e)
                    return decodeURIComponent(e[1])
            } catch {}
            return null
        }
        function i() {
            let e = o.Z.get(r.qd);
            const t = Date.now();
            if (e)
                e && t - e.time > 18e5 && (e = {
                    time: t,
                    count: e.count + 1,
                    firstSession: e.firstSession || t,
                    source: e.source || null
                },
                o.Z.set(r.qd, e));
            else {
                const n = new URLSearchParams(location.search);
                e = {
                    count: 1,
                    time: t,
                    firstSession: t,
                    source: a() || n.get("utm_campaign") || n.get("a") || n.get("pk_campaign") || s() || null
                },
                o.Z.set(r.qd, e)
            }
        }
    }
    ,
    20941: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>r
        });
        const r = {
            set: (e,t)=>{
                try {
                    localStorage.setItem(e, JSON.stringify(t))
                } catch (t) {
                    console.error("LocalStorage: Error setting item:", e)
                }
            }
            ,
            get: e=>{
                try {
                    return JSON.parse(localStorage.getItem(e) || "null")
                } catch (t) {
                    console.error("LocalStorage: Error reading item:", e)
                }
            }
            ,
            remove: e=>{
                try {
                    return localStorage.removeItem(e)
                } catch (t) {
                    console.error("LocalStorage: Error removing item:", e)
                }
            }
        }
    }
    ,
    84522: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>r
        });
        const r = (0,
        n(27378).createContext)({
            get state() {
                throw new Error("Please do not use the EditorContext outside of the editor.")
            },
            dispatch: ()=>null,
            history: null,
            location: null,
            ltAssistant: null
        })
    }
    ,
    6147: (e,t,n)=>{
        "use strict";
        n.d(t, {
            e: ()=>o
        });
        var r = n(43431);
        const o = r.Ry({
            spelling_error: r.Z_(),
            style_error: r.Z_(),
            punctuation_error: r.Z_(),
            grammar_error: r.Z_()
        })
    }
    ,
    90254: (e,t,n)=>{
        "use strict";
        n.d(t, {
            c: ()=>o
        });
        var r = n(43431);
        const o = r.Ry({
            id: r.Rx(),
            email: r.Z_(),
            name: r.Z_(),
            first_name: r.Z_(),
            avatar: r.AG(r.Z_()),
            role_id: r.jt(r.AG(r.Rx())),
            is_premium: r.O7(),
            is_enterprise: r.O7(),
            created_at: r.Z_(),
            updated_at: r.Z_(),
            api_key: r.AG(r.Z_()),
            premium_from: r.AG(r.Z_()),
            premium_to: r.AG(r.Z_()),
            cancel_date: r.AG(r.Z_()),
            geo_ip_country: r.AG(r.Z_()),
            global_picky_mode: r.AG(r.O7()),
            mother_tongue: r.AG(r.Z_()),
            en_variation: r.AG(r.Z_()),
            de_variation: r.AG(r.Z_()),
            pt_variation: r.AG(r.Z_()),
            ca_variation: r.AG(r.Z_()),
            verified: r.O7(),
            requests_per_day: r.AG(r.Rx()),
            preferred_languages: r.AG(r.Z_()),
            prefer_oxford_spelling: r.jt(r.O7()),
            display_language: r.AG(r.Z_()),
            apple_user_id: r.AG(r.Z_()),
            google_user_id: r.AG(r.Z_()),
            facebook_user_id: r.AG(r.Z_()),
            roles: r.AG(r.IX(r.Z_())),
            manager_email: r.AG(r.Z_()),
            dpa_level: r.jt(r.Rx()),
            fastspring_account_id: r.AG(r.Z_()),
            recurly_account_id: r.AG(r.Z_()),
            statistics_collection: r.O7()
        })
    }
    ,
    90910: (e,t,n)=>{
        "use strict";
        function r(e) {
            const t = "https:" === location.protocol
              , n = function(e) {
                if (-1 === e)
                    return "Thu, 01 Jan 1970 00:00:00 GMT";
                const t = new Date;
                return t.setMinutes(t.getMinutes() + e),
                t.toUTCString()
            }(e.lifetime)
              , r = encodeURIComponent(e.value);
            try {
                document.cookie = `${e.name}=${r}; expires=${n}; path=/; ${t ? "; Secure" : ""}`.trim()
            } catch {}
        }
        function o(e) {
            r({
                value: "",
                lifetime: -1,
                name: e
            })
        }
        n.d(t, {
            d: ()=>r,
            k: ()=>o
        })
    }
    ,
    99944: (e,t,n)=>{
        "use strict";
        function r(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    7727: (e,t,n)=>{
        "use strict";
        function r(e, t, n) {
            return e.toLocaleString(t, n)
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    65363: (e,t,n)=>{
        "use strict";
        function r(e, t, n={}) {
            if (void 0 === window.__LT_BLOG_CONFIG__)
                throw new Error("Ensure that the blog config is exposed on the global variable `__LT_BLOG_CONFIG__`.");
            const r = new URL(window.__LT_BLOG_CONFIG__.base_url)
              , o = "string" == typeof t && "string" == typeof window.__LT_BLOG_CONFIG__.pages?.[e]?.[t] ? window.__LT_BLOG_CONFIG__.pages[e][t] : e
              , [s,a] = o.split("#")
              , i = new URLSearchParams(n);
            return r.pathname += s.replace(/^\//, ""),
            r.search = i.toString(),
            a?.trim() && (r.hash = a),
            r.toString()
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    54280: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>r
        });
        const r = ()=>Array.from(navigator.languages || [], (e=>e.toLowerCase()))
    }
    ,
    84064: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>r
        });
        const r = ()=>{
            const e = navigator.userAgent.toLowerCase();
            switch (!0) {
            case e.includes("opr/") || e.includes("opera/"):
                return "Opera";
            case e.includes("edg/") || e.includes("edge/"):
                return "Edge";
            case e.includes("chromium/"):
                return "Chromium";
            case e.includes("chrome/"):
                return "Chrome";
            case e.includes("seamonkey/"):
                return "Seamonkey";
            case e.includes("firefox/"):
                return "Firefox";
            case e.includes("safari/"):
                return "Safari";
            case e.includes("YaBrowser/"):
                return "Yandex";
            case e.includes("trident/"):
                return "Internet Explorer";
            default:
                return "unknown browser"
            }
        }
    }
    ,
    9685: (e,t,n)=>{
        "use strict";
        function r(e) {
            return e.split("-")[0]
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    41096: (e,t,n)=>{
        "use strict";
        function r() {
            const e = location.search.match(/(&|\?)text=(.+?)($|&|#)/);
            return e ? (e[2] = e[2].replace(/\+/g, "%20"),
            decodeURIComponent(e[2])) : null
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    32835: (e,t,n)=>{
        "use strict";
        n.d(t, {
            B: ()=>o,
            Z: ()=>s
        });
        var r = n(76994);
        function o(e, t) {
            let n = "";
            document.documentElement.lang && "en" !== document.documentElement.lang && (n = "/" + document.documentElement.lang);
            let r = `${n}/premium?pk_campaign=${encodeURIComponent(e)}`;
            return t.grammarErrors.length > 0 && (r += `&grammarMatches=${t.grammarErrors.length}`),
            t.styleErrors.length > 0 && (r += `&styleMatches=${t.styleErrors.length}`),
            t.punctuationErrors.length > 0 && (r += `&punctuationMatches=${t.punctuationErrors.length}`),
            r
        }
        function s(e, t=[]) {
            return o(e, (0,
            r.Z)(t))
        }
    }
    ,
    4333: (e,t,n)=>{
        "use strict";
        function r() {
            const e = navigator.userAgent.includes("iPhone OS")
              , t = navigator.userAgent.includes("Macintosh") && Boolean(navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
            return e || t
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    42716: (e,t,n)=>{
        "use strict";
        function r() {
            return navigator.userAgent.includes("AppleWebKit/") && navigator.userAgent.includes("LanguageToolMobile/") && !navigator.userAgent.includes("Chrome/") && !navigator.userAgent.includes("Chromium/")
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    36918: (e,t,n)=>{
        "use strict";
        n.d(t, {
            t: ()=>s
        });
        var r = n(8686);
        function o(e) {
            const t = Object(e);
            return "name"in t && "string" == typeof t.name && "message"in t && "string" == typeof t.message
        }
        function s(e) {
            const t = o(e) && "NotFoundError" === e.name && String(e.message).replace(/[^a-z\s]/gi, "").startsWith("Failed to execute removeChild on Node")
              , n = o(e) && "ChunkLoadError" === e.name && Boolean(String(e.message).match(/^Loading chunk \d+ failed/));
            return n && r.Z.trackMatomoEvent("Exception", e.message, location.pathname),
            t || n
        }
    }
    ,
    38277: (e,t,n)=>{
        "use strict";
        function r() {
            return ["localhost", "127.0.0.1", "0.0.0.0"].includes(location.hostname) || "file:" === location.protocol
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    14556: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>o
        });
        var r = n(4333);
        function o() {
            return navigator.userAgent.includes("Mac OS") && !(0,
            r.Z)()
        }
    }
    ,
    1477: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>r
        });
        const r = e=>"object" == typeof e && null !== e
    }
    ,
    10763: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>s
        });
        var r = n(14556)
          , o = n(22728);
        function s(e) {
            const t = ["applemail", "word", "iwork"].includes(e) && (0,
            r.Z)()
              , n = ["outlook"].includes(e) && (0,
            o.Z)();
            return t || n
        }
    }
    ,
    968: (e,t,n)=>{
        "use strict";
        function r() {
            return (navigator.userAgent.includes("Safari/") || navigator.userAgent.includes("AppleWebKit/")) && !navigator.userAgent.includes("Chrome/") && !navigator.userAgent.includes("Chromium/")
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    4746: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>o
        });
        var r = n(64554);
        function o(e, t=!1) {
            if ("auto" === e)
                return "indetermined";
            return (t ? r.pY : r.sV).some((t=>e.toLowerCase().startsWith(t.toLowerCase()))) ? "yep" : "nope"
        }
    }
    ,
    21489: (e,t,n)=>{
        "use strict";
        function r() {
            if (!("ontouchstart"in window))
                return !1;
            const e = navigator.userAgent.includes("iPhone OS")
              , t = navigator.userAgent.includes("Macintosh") && Boolean(navigator.maxTouchPoints && navigator.maxTouchPoints > 2)
              , n = navigator.userAgent.includes("Android");
            return e || t || n
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    22728: (e,t,n)=>{
        "use strict";
        function r() {
            return navigator.userAgent.includes("Windows")
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    88882: (e,t,n)=>{
        "use strict";
        function r() {
            return navigator.userAgent.includes("LanguageToolDesktopWindows")
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    76994: (e,t,n)=>{
        "use strict";
        function r(e) {
            const t = []
              , n = []
              , r = [];
            for (const o of e)
                o.isStyleError ? n.push(o) : o.isPunctuationError ? r.push(o) : t.push(o);
            return {
                grammarErrors: t,
                styleErrors: n,
                punctuationErrors: r
            }
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    36365: (e,t,n)=>{
        "use strict";
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach((function(t) {
                    s(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function s(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r)
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        n.d(t, {
            Z: ()=>h
        });
        const a = "switch"
          , i = "switch--checked"
          , c = "switch--disabled"
          , l = "switch--dark-blue"
          , d = "switch__dot";
        function u() {}
        const p = {
            className: "",
            onChange: u
        };
        function h(e, t) {
            if (null === e.parentElement)
                return {
                    destroy: u,
                    checked: !1,
                    disabled: !1
                };
            const n = o(o({}, p), t)
              , r = Object.assign(document.createElement("label"), {
                className: [a, n.className, e.className, e.checked ? i : "", e.disabled ? c : ""].join(" ")
            })
              , s = Object.assign(document.createElement("span"), {
                className: d
            })
              , h = ()=>{
                r.classList.toggle(i, e.checked),
                n.onChange(e.checked)
            }
            ;
            return "dark" === n.style && r.classList.add(l),
            e.parentElement.insertBefore(r, e),
            r.appendChild(e),
            r.appendChild(s),
            e.className = "",
            e.addEventListener("change", h),
            {
                destroy: ()=>{
                    e.removeEventListener("change", h),
                    r.parentElement?.appendChild(e),
                    r.parentElement?.removeChild(r)
                }
                ,
                get checked() {
                    return e.checked
                },
                set checked(t) {
                    e.checked = t,
                    e.dispatchEvent(new Event("change"))
                },
                get disabled() {
                    return e.disabled
                },
                set disabled(t) {
                    e.disabled = t,
                    r.classList.toggle(c, t)
                }
            }
        }
    }
    ,
    85725: (e,t,n)=>{
        "use strict";
        function r(e, t) {
            let n = !1
              , r = null
              , o = null;
            return {
                call: function(...s) {
                    r = s,
                    n || (n = !0,
                    o = window.setTimeout((function() {
                        n = !1,
                        e(...s),
                        r = null,
                        o = null
                    }
                    ), t))
                },
                isBusy: ()=>!!r,
                cancel() {
                    o && (clearTimeout(o),
                    o = null),
                    n = !1,
                    r = null
                },
                flush() {
                    r && (o && (clearTimeout(o),
                    o = null),
                    n = !1,
                    e(...r),
                    r = null)
                }
            }
        }
        n.d(t, {
            P: ()=>r
        })
    }
    ,
    62166: (e,t,n)=>{
        "use strict";
        function r() {
            window.addEventListener("error", (function(e) {
                try {
                    window.dataLayer && window.dataLayer.push({
                        event: "custom-event",
                        event_category: "Exception",
                        event_action: e.message,
                        event_label: e.error ? e.error.stack.replace(/\n/g, "|").substr(0, 450) : e.filename + ":" + e.lineno + ":" + e.colno
                    })
                } catch {}
            }
            ), !1)
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    37855: (e,t,n)=>{
        "use strict";
        function r(e) {
            const t = [];
            return e.forEach((e=>{
                -1 === t.indexOf(e) && t.push(e)
            }
            )),
            t
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    60042: (e,t)=>{
        var n;
        /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
        !function() {
            "use strict";
            var r = {}.hasOwnProperty;
            function o() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var s = typeof n;
                        if ("string" === s || "number" === s)
                            e.push(n);
                        else if (Array.isArray(n)) {
                            if (n.length) {
                                var a = o.apply(null, n);
                                a && e.push(a)
                            }
                        } else if ("object" === s) {
                            if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                e.push(n.toString());
                                continue
                            }
                            for (var i in n)
                                r.call(n, i) && n[i] && e.push(i)
                        }
                    }
                }
                return e.join(" ")
            }
            e.exports ? (o.default = o,
            e.exports = o) : void 0 === (n = function() {
                return o
            }
            .apply(t, [])) || (e.exports = n)
        }()
    }
    ,
    31683: (e,t,n)=>{
        "use strict";
        n.d(t, {
            lX: ()=>E,
            q_: ()=>C,
            ob: ()=>m,
            PP: ()=>A,
            Ep: ()=>_,
            Hp: ()=>g
        });
        var r = n(25773);
        function o(e) {
            return "/" === e.charAt(0)
        }
        function s(e, t) {
            for (var n = t, r = n + 1, o = e.length; r < o; n += 1,
            r += 1)
                e[n] = e[r];
            e.pop()
        }
        const a = function(e, t) {
            void 0 === t && (t = "");
            var n, r = e && e.split("/") || [], a = t && t.split("/") || [], i = e && o(e), c = t && o(t), l = i || c;
            if (e && o(e) ? a = r : r.length && (a.pop(),
            a = a.concat(r)),
            !a.length)
                return "/";
            if (a.length) {
                var d = a[a.length - 1];
                n = "." === d || ".." === d || "" === d
            } else
                n = !1;
            for (var u = 0, p = a.length; p >= 0; p--) {
                var h = a[p];
                "." === h ? s(a, p) : ".." === h ? (s(a, p),
                u++) : u && (s(a, p),
                u--)
            }
            if (!l)
                for (; u--; u)
                    a.unshift("..");
            !l || "" === a[0] || a[0] && o(a[0]) || a.unshift("");
            var _ = a.join("/");
            return n && "/" !== _.substr(-1) && (_ += "/"),
            _
        };
        function i(e) {
            return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e)
        }
        const c = function e(t, n) {
            if (t === n)
                return !0;
            if (null == t || null == n)
                return !1;
            if (Array.isArray(t))
                return Array.isArray(n) && t.length === n.length && t.every((function(t, r) {
                    return e(t, n[r])
                }
                ));
            if ("object" == typeof t || "object" == typeof n) {
                var r = i(t)
                  , o = i(n);
                return r !== t || o !== n ? e(r, o) : Object.keys(Object.assign({}, t, n)).every((function(r) {
                    return e(t[r], n[r])
                }
                ))
            }
            return !1
        };
        var l = n(92215);
        function d(e) {
            return "/" === e.charAt(0) ? e : "/" + e
        }
        function u(e) {
            return "/" === e.charAt(0) ? e.substr(1) : e
        }
        function p(e, t) {
            return function(e, t) {
                return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length))
            }(e, t) ? e.substr(t.length) : e
        }
        function h(e) {
            return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e
        }
        function _(e) {
            var t = e.pathname
              , n = e.search
              , r = e.hash
              , o = t || "/";
            return n && "?" !== n && (o += "?" === n.charAt(0) ? n : "?" + n),
            r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r),
            o
        }
        function m(e, t, n, o) {
            var s;
            "string" == typeof e ? (s = function(e) {
                var t = e || "/"
                  , n = ""
                  , r = ""
                  , o = t.indexOf("#");
                -1 !== o && (r = t.substr(o),
                t = t.substr(0, o));
                var s = t.indexOf("?");
                return -1 !== s && (n = t.substr(s),
                t = t.substr(0, s)),
                {
                    pathname: t,
                    search: "?" === n ? "" : n,
                    hash: "#" === r ? "" : r
                }
            }(e),
            s.state = t) : (void 0 === (s = (0,
            r.Z)({}, e)).pathname && (s.pathname = ""),
            s.search ? "?" !== s.search.charAt(0) && (s.search = "?" + s.search) : s.search = "",
            s.hash ? "#" !== s.hash.charAt(0) && (s.hash = "#" + s.hash) : s.hash = "",
            void 0 !== t && void 0 === s.state && (s.state = t));
            try {
                s.pathname = decodeURI(s.pathname)
            } catch (e) {
                throw e instanceof URIError ? new URIError('Pathname "' + s.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e
            }
            return n && (s.key = n),
            o ? s.pathname ? "/" !== s.pathname.charAt(0) && (s.pathname = a(s.pathname, o.pathname)) : s.pathname = o.pathname : s.pathname || (s.pathname = "/"),
            s
        }
        function g(e, t) {
            return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && c(e.state, t.state)
        }
        function f() {
            var e = null;
            var t = [];
            return {
                setPrompt: function(t) {
                    return e = t,
                    function() {
                        e === t && (e = null)
                    }
                },
                confirmTransitionTo: function(t, n, r, o) {
                    if (null != e) {
                        var s = "function" == typeof e ? e(t, n) : e;
                        "string" == typeof s ? "function" == typeof r ? r(s, o) : o(!0) : o(!1 !== s)
                    } else
                        o(!0)
                },
                appendListener: function(e) {
                    var n = !0;
                    function r() {
                        n && e.apply(void 0, arguments)
                    }
                    return t.push(r),
                    function() {
                        n = !1,
                        t = t.filter((function(e) {
                            return e !== r
                        }
                        ))
                    }
                },
                notifyListeners: function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                        n[r] = arguments[r];
                    t.forEach((function(e) {
                        return e.apply(void 0, n)
                    }
                    ))
                }
            }
        }
        var y = !("undefined" == typeof window || !window.document || !window.document.createElement);
        function v(e, t) {
            t(window.confirm(e))
        }
        var b = "popstate"
          , x = "hashchange";
        function w() {
            try {
                return window.history.state || {}
            } catch (e) {
                return {}
            }
        }
        function E(e) {
            void 0 === e && (e = {}),
            y || (0,
            l.Z)(!1);
            var t, n = window.history, o = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState"in window.history, s = !(-1 === window.navigator.userAgent.indexOf("Trident")), a = e, i = a.forceRefresh, c = void 0 !== i && i, u = a.getUserConfirmation, g = void 0 === u ? v : u, E = a.keyLength, S = void 0 === E ? 6 : E, T = e.basename ? h(d(e.basename)) : "";
            function k(e) {
                var t = e || {}
                  , n = t.key
                  , r = t.state
                  , o = window.location
                  , s = o.pathname + o.search + o.hash;
                return T && (s = p(s, T)),
                m(s, r, n)
            }
            function j() {
                return Math.random().toString(36).substr(2, S)
            }
            var N = f();
            function C(e) {
                (0,
                r.Z)(q, e),
                q.length = n.length,
                N.notifyListeners(q.location, q.action)
            }
            function P(e) {
                (function(e) {
                    return void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
                }
                )(e) || R(k(e.state))
            }
            function A() {
                R(k(w()))
            }
            var L = !1;
            function R(e) {
                if (L)
                    L = !1,
                    C();
                else {
                    N.confirmTransitionTo(e, "POP", g, (function(t) {
                        t ? C({
                            action: "POP",
                            location: e
                        }) : function(e) {
                            var t = q.location
                              , n = D.indexOf(t.key);
                            -1 === n && (n = 0);
                            var r = D.indexOf(e.key);
                            -1 === r && (r = 0);
                            var o = n - r;
                            o && (L = !0,
                            M(o))
                        }(e)
                    }
                    ))
                }
            }
            var O = k(w())
              , D = [O.key];
            function I(e) {
                return T + _(e)
            }
            function M(e) {
                n.go(e)
            }
            var U = 0;
            function B(e) {
                1 === (U += e) && 1 === e ? (window.addEventListener(b, P),
                s && window.addEventListener(x, A)) : 0 === U && (window.removeEventListener(b, P),
                s && window.removeEventListener(x, A))
            }
            var G = !1;
            var q = {
                length: n.length,
                action: "POP",
                location: O,
                createHref: I,
                push: function(e, t) {
                    var r = "PUSH"
                      , s = m(e, t, j(), q.location);
                    N.confirmTransitionTo(s, r, g, (function(e) {
                        if (e) {
                            var t = I(s)
                              , a = s.key
                              , i = s.state;
                            if (o)
                                if (n.pushState({
                                    key: a,
                                    state: i
                                }, null, t),
                                c)
                                    window.location.href = t;
                                else {
                                    var l = D.indexOf(q.location.key)
                                      , d = D.slice(0, l + 1);
                                    d.push(s.key),
                                    D = d,
                                    C({
                                        action: r,
                                        location: s
                                    })
                                }
                            else
                                window.location.href = t
                        }
                    }
                    ))
                },
                replace: function(e, t) {
                    var r = "REPLACE"
                      , s = m(e, t, j(), q.location);
                    N.confirmTransitionTo(s, r, g, (function(e) {
                        if (e) {
                            var t = I(s)
                              , a = s.key
                              , i = s.state;
                            if (o)
                                if (n.replaceState({
                                    key: a,
                                    state: i
                                }, null, t),
                                c)
                                    window.location.replace(t);
                                else {
                                    var l = D.indexOf(q.location.key);
                                    -1 !== l && (D[l] = s.key),
                                    C({
                                        action: r,
                                        location: s
                                    })
                                }
                            else
                                window.location.replace(t)
                        }
                    }
                    ))
                },
                go: M,
                goBack: function() {
                    M(-1)
                },
                goForward: function() {
                    M(1)
                },
                block: function(e) {
                    void 0 === e && (e = !1);
                    var t = N.setPrompt(e);
                    return G || (B(1),
                    G = !0),
                    function() {
                        return G && (G = !1,
                        B(-1)),
                        t()
                    }
                },
                listen: function(e) {
                    var t = N.appendListener(e);
                    return B(1),
                    function() {
                        B(-1),
                        t()
                    }
                }
            };
            return q
        }
        var S = "hashchange"
          , T = {
            hashbang: {
                encodePath: function(e) {
                    return "!" === e.charAt(0) ? e : "!/" + u(e)
                },
                decodePath: function(e) {
                    return "!" === e.charAt(0) ? e.substr(1) : e
                }
            },
            noslash: {
                encodePath: u,
                decodePath: d
            },
            slash: {
                encodePath: d,
                decodePath: d
            }
        };
        function k(e) {
            var t = e.indexOf("#");
            return -1 === t ? e : e.slice(0, t)
        }
        function j() {
            var e = window.location.href
              , t = e.indexOf("#");
            return -1 === t ? "" : e.substring(t + 1)
        }
        function N(e) {
            window.location.replace(k(window.location.href) + "#" + e)
        }
        function C(e) {
            void 0 === e && (e = {}),
            y || (0,
            l.Z)(!1);
            var t = window.history
              , n = (window.navigator.userAgent.indexOf("Firefox"),
            e)
              , o = n.getUserConfirmation
              , s = void 0 === o ? v : o
              , a = n.hashType
              , i = void 0 === a ? "slash" : a
              , c = e.basename ? h(d(e.basename)) : ""
              , u = T[i]
              , g = u.encodePath
              , b = u.decodePath;
            function x() {
                var e = b(j());
                return c && (e = p(e, c)),
                m(e)
            }
            var w = f();
            function E(e) {
                (0,
                r.Z)(G, e),
                G.length = t.length,
                w.notifyListeners(G.location, G.action)
            }
            var C = !1
              , P = null;
            function A() {
                var e, t, n = j(), r = g(n);
                if (n !== r)
                    N(r);
                else {
                    var o = x()
                      , a = G.location;
                    if (!C && (t = o,
                    (e = a).pathname === t.pathname && e.search === t.search && e.hash === t.hash))
                        return;
                    if (P === _(o))
                        return;
                    P = null,
                    function(e) {
                        if (C)
                            C = !1,
                            E();
                        else {
                            var t = "POP";
                            w.confirmTransitionTo(e, t, s, (function(n) {
                                n ? E({
                                    action: t,
                                    location: e
                                }) : function(e) {
                                    var t = G.location
                                      , n = D.lastIndexOf(_(t));
                                    -1 === n && (n = 0);
                                    var r = D.lastIndexOf(_(e));
                                    -1 === r && (r = 0);
                                    var o = n - r;
                                    o && (C = !0,
                                    I(o))
                                }(e)
                            }
                            ))
                        }
                    }(o)
                }
            }
            var L = j()
              , R = g(L);
            L !== R && N(R);
            var O = x()
              , D = [_(O)];
            function I(e) {
                t.go(e)
            }
            var M = 0;
            function U(e) {
                1 === (M += e) && 1 === e ? window.addEventListener(S, A) : 0 === M && window.removeEventListener(S, A)
            }
            var B = !1;
            var G = {
                length: t.length,
                action: "POP",
                location: O,
                createHref: function(e) {
                    var t = document.querySelector("base")
                      , n = "";
                    return t && t.getAttribute("href") && (n = k(window.location.href)),
                    n + "#" + g(c + _(e))
                },
                push: function(e, t) {
                    var n = "PUSH"
                      , r = m(e, void 0, void 0, G.location);
                    w.confirmTransitionTo(r, n, s, (function(e) {
                        if (e) {
                            var t = _(r)
                              , o = g(c + t);
                            if (j() !== o) {
                                P = t,
                                function(e) {
                                    window.location.hash = e
                                }(o);
                                var s = D.lastIndexOf(_(G.location))
                                  , a = D.slice(0, s + 1);
                                a.push(t),
                                D = a,
                                E({
                                    action: n,
                                    location: r
                                })
                            } else
                                E()
                        }
                    }
                    ))
                },
                replace: function(e, t) {
                    var n = "REPLACE"
                      , r = m(e, void 0, void 0, G.location);
                    w.confirmTransitionTo(r, n, s, (function(e) {
                        if (e) {
                            var t = _(r)
                              , o = g(c + t);
                            j() !== o && (P = t,
                            N(o));
                            var s = D.indexOf(_(G.location));
                            -1 !== s && (D[s] = t),
                            E({
                                action: n,
                                location: r
                            })
                        }
                    }
                    ))
                },
                go: I,
                goBack: function() {
                    I(-1)
                },
                goForward: function() {
                    I(1)
                },
                block: function(e) {
                    void 0 === e && (e = !1);
                    var t = w.setPrompt(e);
                    return B || (U(1),
                    B = !0),
                    function() {
                        return B && (B = !1,
                        U(-1)),
                        t()
                    }
                },
                listen: function(e) {
                    var t = w.appendListener(e);
                    return U(1),
                    function() {
                        U(-1),
                        t()
                    }
                }
            };
            return G
        }
        function P(e, t, n) {
            return Math.min(Math.max(e, t), n)
        }
        function A(e) {
            void 0 === e && (e = {});
            var t = e
              , n = t.getUserConfirmation
              , o = t.initialEntries
              , s = void 0 === o ? ["/"] : o
              , a = t.initialIndex
              , i = void 0 === a ? 0 : a
              , c = t.keyLength
              , l = void 0 === c ? 6 : c
              , d = f();
            function u(e) {
                (0,
                r.Z)(b, e),
                b.length = b.entries.length,
                d.notifyListeners(b.location, b.action)
            }
            function p() {
                return Math.random().toString(36).substr(2, l)
            }
            var h = P(i, 0, s.length - 1)
              , g = s.map((function(e) {
                return m(e, void 0, "string" == typeof e ? p() : e.key || p())
            }
            ))
              , y = _;
            function v(e) {
                var t = P(b.index + e, 0, b.entries.length - 1)
                  , r = b.entries[t];
                d.confirmTransitionTo(r, "POP", n, (function(e) {
                    e ? u({
                        action: "POP",
                        location: r,
                        index: t
                    }) : u()
                }
                ))
            }
            var b = {
                length: g.length,
                action: "POP",
                location: g[h],
                index: h,
                entries: g,
                createHref: y,
                push: function(e, t) {
                    var r = "PUSH"
                      , o = m(e, t, p(), b.location);
                    d.confirmTransitionTo(o, r, n, (function(e) {
                        if (e) {
                            var t = b.index + 1
                              , n = b.entries.slice(0);
                            n.length > t ? n.splice(t, n.length - t, o) : n.push(o),
                            u({
                                action: r,
                                location: o,
                                index: t,
                                entries: n
                            })
                        }
                    }
                    ))
                },
                replace: function(e, t) {
                    var r = "REPLACE"
                      , o = m(e, t, p(), b.location);
                    d.confirmTransitionTo(o, r, n, (function(e) {
                        e && (b.entries[b.index] = o,
                        u({
                            action: r,
                            location: o
                        }))
                    }
                    ))
                },
                go: v,
                goBack: function() {
                    v(-1)
                },
                goForward: function() {
                    v(1)
                },
                canGo: function(e) {
                    var t = b.index + e;
                    return t >= 0 && t < b.entries.length
                },
                block: function(e) {
                    return void 0 === e && (e = !1),
                    d.setPrompt(e)
                },
                listen: function(e) {
                    return d.appendListener(e)
                }
            };
            return b
        }
    }
    ,
    43187: function(e, t) {
        var n, r, o;
        /*!
 *  Lang.js for Laravel localization in JavaScript.
 *
 *  @version 1.1.12
 *  @license MIT https://github.com/rmariuzzo/Lang.js/blob/master/LICENSE
 *  @site    https://github.com/rmariuzzo/Lang.js
 *  @author  Rubens Mariuzzo <rubens@mariuzzo.com>
 */
        !function(s, a) {
            "use strict";
            r = [],
            void 0 === (o = "function" == typeof (n = function() {
                function e() {
                    if ("undefined" != typeof document && document.documentElement)
                        return document.documentElement.lang
                }
                function t(e) {
                    return "-Inf" === e ? -1 / 0 : "+Inf" === e || "Inf" === e || "*" === e ? 1 / 0 : parseInt(e, 10)
                }
                var n = /^({\s*(\-?\d+(\.\d+)?[\s*,\s*\-?\d+(\.\d+)?]*)\s*})|([\[\]])\s*(-Inf|\*|\-?\d+(\.\d+)?)\s*,\s*(\+?Inf|\*|\-?\d+(\.\d+)?)\s*([\[\]])$/
                  , r = /({\s*(\-?\d+(\.\d+)?[\s*,\s*\-?\d+(\.\d+)?]*)\s*})|([\[\]])\s*(-Inf|\*|\-?\d+(\.\d+)?)\s*,\s*(\+?Inf|\*|\-?\d+(\.\d+)?)\s*([\[\]])/
                  , o = {
                    locale: "en"
                }
                  , s = function(t) {
                    t = t || {},
                    this.locale = t.locale || e() || o.locale,
                    this.fallback = t.fallback,
                    this.messages = t.messages
                };
                return s.prototype.setMessages = function(e) {
                    this.messages = e
                }
                ,
                s.prototype.getLocale = function() {
                    return this.locale || this.fallback
                }
                ,
                s.prototype.setLocale = function(e) {
                    this.locale = e
                }
                ,
                s.prototype.getFallback = function() {
                    return this.fallback
                }
                ,
                s.prototype.setFallback = function(e) {
                    this.fallback = e
                }
                ,
                s.prototype.has = function(e, t) {
                    return !("string" != typeof e || !this.messages) && null !== this._getMessage(e, t)
                }
                ,
                s.prototype.get = function(e, t, n) {
                    if (!this.has(e, n))
                        return e;
                    var r = this._getMessage(e, n);
                    return null === r ? e : (t && (r = this._applyReplacements(r, t)),
                    r)
                }
                ,
                s.prototype.trans = function(e, t) {
                    return this.get(e, t)
                }
                ,
                s.prototype.choice = function(e, t, n, o) {
                    (n = void 0 !== n ? n : {}).count = t;
                    var s = this.get(e, n, o);
                    if (null == s)
                        return s;
                    for (var a = s.split("|"), i = [], c = 0; c < a.length; c++)
                        if (a[c] = a[c].trim(),
                        r.test(a[c])) {
                            var l = a[c].split(/\s/);
                            i.push(l.shift()),
                            a[c] = l.join(" ")
                        }
                    if (1 === a.length)
                        return s;
                    for (var d = 0; d < i.length; d++)
                        if (this._testInterval(t, i[d]))
                            return a[d];
                    return o = o || this._getLocale(e),
                    a[this._getPluralForm(t, o)]
                }
                ,
                s.prototype.transChoice = function(e, t, n) {
                    return this.choice(e, t, n)
                }
                ,
                s.prototype._parseKey = function(e, t) {
                    if ("string" != typeof e || "string" != typeof t)
                        return null;
                    var n = e.split(".")
                      , r = n[0].replace(/\//g, ".");
                    return {
                        source: t + "." + r,
                        sourceFallback: this.getFallback() + "." + r,
                        entries: n.slice(1)
                    }
                }
                ,
                s.prototype._getMessage = function(e, t) {
                    if (t = t || this.getLocale(),
                    e = this._parseKey(e, t),
                    void 0 === this.messages[e.source] && void 0 === this.messages[e.sourceFallback])
                        return null;
                    var n = this.messages[e.source]
                      , r = e.entries.slice()
                      , o = r.join(".");
                    if ("string" != typeof (n = void 0 !== n ? this._getValueInKey(n, o) : void 0) && this.messages[e.sourceFallback])
                        for (n = this.messages[e.sourceFallback],
                        r = e.entries.slice(),
                        o = ""; r.length && void 0 !== n; ) {
                            n[o = o ? o.concat(".", r.shift()) : r.shift()] && (n = n[o],
                            o = "")
                        }
                    return "string" != typeof n ? null : n
                }
                ,
                s.prototype._getValueInKey = function(e, t) {
                    if ("string" == typeof e[t])
                        return e[t];
                    for (var n = (t = (t = t.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), r = 0, o = n.length; r < o; ++r) {
                        var s = n.slice(0, r + 1).join(".")
                          , a = n.slice(r + 1, n.length).join(".");
                        if (e[s])
                            return this._getValueInKey(e[s], a)
                    }
                    return e
                }
                ,
                s.prototype._getLocale = function(e) {
                    return e = this._parseKey(e, this.locale),
                    this.messages[e.source] ? this.locale : this.messages[e.sourceFallback] ? this.fallback : null
                }
                ,
                s.prototype._findMessageInTree = function(e, t) {
                    for (; e.length && void 0 !== t; ) {
                        var n = e.join(".");
                        if (t[n]) {
                            t = t[n];
                            break
                        }
                        t = t[e.shift()]
                    }
                    return t
                }
                ,
                s.prototype._sortReplacementKeys = function(e, t) {
                    return t.length - e.length
                }
                ,
                s.prototype._applyReplacements = function(e, t) {
                    return Object.keys(t).sort(this._sortReplacementKeys).forEach((function(n) {
                        e = e.replace(new RegExp(":" + n,"gi"), (function(e) {
                            var r = t[n];
                            return e === e.toUpperCase() ? r.toUpperCase() : e === e.replace(/\w/i, (function(e) {
                                return e.toUpperCase()
                            }
                            )) ? r.charAt(0).toUpperCase() + r.slice(1) : r
                        }
                        ))
                    }
                    )),
                    e
                }
                ,
                s.prototype._testInterval = function(e, r) {
                    if ("string" != typeof r)
                        throw "Invalid interval: should be a string.";
                    var o = (r = r.trim()).match(n);
                    if (!o)
                        throw "Invalid interval: " + r;
                    if (!o[2]) {
                        var s = (o = o.filter((function(e) {
                            return !!e
                        }
                        )))[1]
                          , a = t(o[2]);
                        a === 1 / 0 && (a = -1 / 0);
                        var i = t(o[3])
                          , c = o[4];
                        return ("[" === s ? e >= a : e > a) && ("]" === c ? e <= i : e < i)
                    }
                    for (var l = o[2].split(","), d = 0; d < l.length; d++)
                        if (parseInt(l[d], 10) === e)
                            return !0;
                    return !1
                }
                ,
                s.prototype._getPluralForm = function(e, t) {
                    switch (t) {
                    case "az":
                    case "bo":
                    case "dz":
                    case "id":
                    case "ja":
                    case "jv":
                    case "ka":
                    case "km":
                    case "kn":
                    case "ko":
                    case "ms":
                    case "th":
                    case "tr":
                    case "vi":
                    case "zh":
                    default:
                        return 0;
                    case "af":
                    case "bn":
                    case "bg":
                    case "ca":
                    case "da":
                    case "de":
                    case "el":
                    case "en":
                    case "eo":
                    case "es":
                    case "et":
                    case "eu":
                    case "fa":
                    case "fi":
                    case "fo":
                    case "fur":
                    case "fy":
                    case "gl":
                    case "gu":
                    case "ha":
                    case "he":
                    case "hu":
                    case "is":
                    case "it":
                    case "ku":
                    case "lb":
                    case "ml":
                    case "mn":
                    case "mr":
                    case "nah":
                    case "nb":
                    case "ne":
                    case "nl":
                    case "nn":
                    case "no":
                    case "om":
                    case "or":
                    case "pa":
                    case "pap":
                    case "ps":
                    case "pt":
                    case "so":
                    case "sq":
                    case "sv":
                    case "sw":
                    case "ta":
                    case "te":
                    case "tk":
                    case "ur":
                    case "zu":
                        return 1 == e ? 0 : 1;
                    case "am":
                    case "bh":
                    case "fil":
                    case "fr":
                    case "gun":
                    case "hi":
                    case "hy":
                    case "ln":
                    case "mg":
                    case "nso":
                    case "xbr":
                    case "ti":
                    case "wa":
                        return 0 === e || 1 === e ? 0 : 1;
                    case "be":
                    case "bs":
                    case "hr":
                    case "ru":
                    case "sr":
                    case "uk":
                        return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
                    case "cs":
                    case "sk":
                        return 1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2;
                    case "ga":
                        return 1 == e ? 0 : 2 == e ? 1 : 2;
                    case "lt":
                        return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
                    case "sl":
                        return e % 100 == 1 ? 0 : e % 100 == 2 ? 1 : e % 100 == 3 || e % 100 == 4 ? 2 : 3;
                    case "mk":
                        return e % 10 == 1 ? 0 : 1;
                    case "mt":
                        return 1 == e ? 0 : 0 === e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
                    case "lv":
                        return 0 === e ? 0 : e % 10 == 1 && e % 100 != 11 ? 1 : 2;
                    case "pl":
                        return 1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 12 || e % 100 > 14) ? 1 : 2;
                    case "cy":
                        return 1 == e ? 0 : 2 == e ? 1 : 8 == e || 11 == e ? 2 : 3;
                    case "ro":
                        return 1 == e ? 0 : 0 === e || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
                    case "ar":
                        return 0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 && e % 100 <= 99 ? 4 : 5
                    }
                }
                ,
                s
            }
            ) ? n.apply(t, r) : n) || (e.exports = o)
        }()
    },
    97849: e=>{
        e.exports = {
            textarea_placeholder: "Enter or paste your text here to check it for grammar and punctuation mistakes …",
            action_copy: "Copy",
            success_copy: "Copied",
            action_delete: "Delete",
            status_checking: "Checking text …",
            status_no_errors: "Looks good. No mistakes were found.",
            status_ignored_rules: "%{value} error was ignored|%{value} errors were ignored",
            copy_to_clipboard: "Copy",
            endpoint: "Endpoint",
            base_url: "Base URL",
            day: "Day|Days",
            request: "Request|Requests",
            mistake_count: {
                writing_issues_found: "writing issue found|writing issues found",
                premium_writing_issues_found: "advanced issue found|advanced issues found",
                more_premium_writing_issues_found: "more advanced issue|more advanced issues",
                more_grammar_issues_found: "more grammar issue|more grammar issues",
                more_style_issues_found: "more style issue|more style issues",
                get_premium: "Get Premium to see all mistakes",
                spelling_errors: "Spelling error|Spelling errors",
                grammar_errors: "Grammar error|Grammar errors",
                style_errors: "Style issue|Style issues",
                more_punctuation_issues_found: "more punctuation issue|more punctuation issues",
                punctuation_errors: "Punctuation error|Punctuation errors",
                possible_spelling_errors: "Possible spelling error|Possible spelling errors",
                errors: "%{count} error|%{count} errors",
                no_errors: "No errors"
            },
            text_statistics: {
                words: "word|words",
                characters: "character|characters",
                reading_time: "<i>Approximate reading time:</i> %{value} min",
                reading_time_a_few_seconds: "<i>Approximate reading time:</i> a few seconds",
                sentences: "sentence|sentences"
            },
            did_you_know: {
                title: "Did you know:",
                value1: "Double-clicking on a word will show synonym suggestions"
            },
            language_selector: {
                recommended_languages: "Languages recommended for you:"
            },
            languages: {
                "ast-es": "Asturian",
                "be-by": "Belarusian",
                "br-fr": "Breton",
                "ca-es": "Catalan",
                "ca-es-valencia": "Catalan (Valencian)",
                "zh-cn": "Chinese",
                "da-dk": "Danish",
                nl: "Dutch",
                "en-us": "English (US)",
                "en-gb": "English (British)",
                "en-za": "English (South Africa)",
                "en-nz": "English (New Zealand)",
                "en-ca": "English (Canada)",
                "en-au": "English (Australia)",
                eo: "Esperanto",
                fr: "French",
                "gl-es": "Galician",
                "de-de": "German (Germany)",
                "de-at": "German (Austria)",
                "de-ch": "German (Switzerland)",
                "el-gr": "Greek",
                it: "Italian",
                "ja-jp": "Japanese",
                "km-kh": "Khmer",
                fa: "Persian",
                "pl-pl": "Polish",
                "pt-pt": "Portuguese (Portugal)",
                "pt-br": "Portuguese (Brazil)",
                "pt-ao": "Portuguese (Angola)",
                "pt-mz": "Portuguese (Mozambique)",
                "ro-ro": "Romanian",
                "ru-ru": "Russian",
                "sk-sk": "Slovak",
                "sl-si": "Slovenian",
                es: "Spanish",
                sv: "Swedish",
                "ta-in": "Tamil",
                "tl-ph": "Tagalog",
                "uk-ua": "Ukrainian",
                "ga-ie": "Irish",
                ar: "Arabic",
                no: "Norwegian",
                en: "English",
                de: "German",
                pt: "Portuguese",
                ast: "Asturian",
                be: "Belarusian",
                br: "Breton",
                ca: "Catalan",
                zh: "Chinese",
                da: "Danish",
                gl: "Galician",
                el: "Greek",
                ja: "Japanese",
                km: "Khmer",
                pl: "Polish",
                ro: "Romanian",
                ru: "Russian",
                sk: "Slovak",
                sl: "Slovenian",
                ta: "Tamil",
                tl: "Tagalog",
                uk: "Ukrainian",
                ga: "Irish"
            },
            premium_benefits: {
                style_checking: "Enhanced grammar, punctuation, and style checking",
                more_characters: "Up to 150,000 characters per text field",
                style_guide: "Style Guide",
                word_addin: "Add-in for Microsoft Word"
            },
            confirmations: {
                delete_document: "Are you sure you want to move this text to the recycle bin?"
            },
            flash_messages: {
                copy_success: "The text was copied to your clipboard",
                document_delete_success: "The text has been moved to the recycle bin",
                error: "Oops, something went wrong. Please try again.",
                rate_limit: "You did this too often. Please wait a few minutes before trying again.",
                successfully_saved: "The changes were successfully saved",
                text_404: "The text you were trying to open doesn’t seem to exist (anymore)",
                document_save_error: "Your text couldn’t be saved. Please check your internet connection and make sure you don’t lose your text.",
                document_load_error: "Your text couldn’t be loaded. Please check your internet connection.",
                successfully_resend_email_confirmation: "E-mail confirmation was sent successfully",
                doc_too_large: "The document exceeds the maximum file size of 50 MB.",
                print_error: "Empty texts cannot be printed",
                successfully_invite_email_confirmation: "Invites were successfully sent. Check your inbox for your discount",
                push_back_success: "The text was pushed back to the application of origin",
                download_failed: "Oops, something went wrong. Your download failed. Please try again.",
                file_read_failed: "Oops, something went wrong while reading the file. Please try again.",
                import_partially_successful: "Some data was not imported successfully",
                dictionary_too_large_error: "Uploaded dictionary exceeds the maximum word count of %{max}",
                style_guide_too_large_error: "Uploaded Style Guide exceeds the maximum rule count of %{max}",
                delete_account_success: "Your account was successfully deleted",
                delete_account_error: "An error occurred while deleting your account",
                delete_account_error2: "You need to cancel your Premium subscription first before you can delete your account.",
                verify_email: "Please confirm your current e-mail address first."
            },
            snack_bar: {
                supported_paste_event_headline: "LanguageTool for %{source} is here",
                supported_paste_event_description: "Over are the times of Copy-Paste. Check Texts directly in %{source} with LanguageTool for Desktop.",
                supported_paste_event_primary_cta: "Try for Free",
                supported_paste_event_secondary_cta: "Ignore"
            },
            rating_teaser: {
                rating_headline: "Do you enjoy using LanguageTool?",
                rating_description: "We are excited to hear your feedback",
                feedback_headline: "We are sorry to hear that",
                feedback_description: "Please help us fix the issue",
                positive_headline: "We are happy to hear that",
                positive_description: "Please give us a review",
                rating_option_positive: "Love it!",
                rating_option_neutral: "It’s okay",
                rating_option_negative: "It’s bad",
                rating_option_dismiss: "Dismiss",
                rating_option_send_feedback: "Send Feedback",
                rating_option_rate_now: "Rate now",
                rating_option_rate_later: "Maybe later"
            },
            premium_view_teaser: {
                headline: "All Benefits of LanguageTool Premium",
                premium_hint: "Only with Premium",
                cta: "Upgrade to Premium"
            },
            placeholders: {
                search_text: "Search texts",
                document_title: "Enter a title"
            },
            document_list: {
                searching: "Searching …",
                no_results_found: "No results found",
                search_query_too_short: "Enter at least %{value} characters to search",
                info_box_welcome_headline: "Start writing",
                info_box_welcome_text: "The texts you write will appear here",
                empty: "Empty",
                all_texts_filter: "All texts",
                permanent_texts_filter: "Permanent texts",
                temporary_texts_filter: "Temporary texts",
                check_text_button: "Check a new text"
            },
            document_types: {
                permanent: "Permanent text",
                temporary: "Temporary text"
            },
            documents: {
                about_temporary_headline: "About temporary texts",
                about_temporary_text: "A temporary text will be automatically moved to your recycle bin <strong>%{value} days</strong> after its last change. This setting is recommended for texts that don’t have a long life span (mails, chat messages, meeting notes …).",
                about_permanent_headline: "About permanent texts",
                about_permanent_text: "A permanent text will be securely stored until you delete it.",
                document_type_switch_label: "Store it permanently:",
                confirm_leave: "Your text hasn’t been saved yet. You will lose your text if you proceed. Are you sure?"
            },
            sidebar: {
                suggestions_headline: "Suggestions",
                status_calculating: "Calculating",
                status_failed: "Error",
                status_text_too_long: "Text too long",
                status_start_writing: "Start writing",
                status_text_too_short: "Text too short",
                text_too_long: "The maximum supported text length is 150,000 characters.",
                text_too_long_premium: "Upgrade to Premium and get advanced grammar and style suggestions for longer texts.",
                upgrade_button: "Upgrade",
                error_title: "An error appeared",
                error_message: "Please check your internet connection or try again in a few seconds.",
                premium_text: "Upgrade to Premium and get advanced punctuation, grammar, and style suggestions.",
                picky_title: "Looks good so far!",
                picky_text: "Consider enabling the Picky Mode to get more suggestions.",
                welcome_editor_picky_text: "But in the Editor you can get even more suggestions.",
                no_errors_title: "Splendid!",
                no_errors_text: "No errors were found.",
                delete_text_button: "Delete text",
                copy_text_button: "Copy text",
                text_score_headline: "Text score",
                picky_mode_label: "Picky Mode",
                insert_from_clipboard: "Paste",
                insert_from_camera: "Scan text",
                insert_from_word: "Import Word file",
                picky_mode_info_headline: "Enable the Picky Mode to perfect your writing",
                picky_mode_info_item_1: "Provides more style and tonality suggestions",
                picky_mode_info_item_2: "Detects long or complex sentences",
                picky_mode_info_item_3: "Recognizes colloquialism and redundancies",
                picky_mode_info_item_4: "Proactively suggests synonyms for commonly overused words",
                toggle_left_sidebar_link: "Toggle left sidebar",
                toggle_right_sidebar_link: "Toggle right sidebar",
                show_statistics_link: "Text statistics",
                go_to_editor_link: "Go to editor",
                feedback_text_button: "Send feedback",
                help_text_button: "Go to help center",
                mac_text_button: "Get the macOS app",
                print_text_button: "Print text",
                windows_text_button: "Get the Windows app",
                start_writing_title: "Start writing",
                start_writing_text: "Let’s fill this empty page",
                limited_time_offer: "Limited-time offer",
                ios_text_button: "Get the iOS app",
                incomplete_results: "Results are incomplete",
                incomplete_results_description: "Text checking was stopped due to too many errors.",
                rewriting_label_fluency: "Fluent",
                rewriting_label_formality: "Formal",
                rewriting_label_shortened: "Concise",
                rewriting_label_simplicity: "Simple",
                rewriting_label_general: "Paraphrased",
                mode_correction: "Correct",
                mode_rewriting: "Paraphrase",
                mode_rewriting_initial_placeholder_caption: "Analyzing text…",
                mode_rewriting_initial_placeholder_description: "Preparing your document for rewriting. Stay tuned!",
                mode_rewriting_placeholder_caption: "Click on Any Sentence or Word",
                mode_rewriting_placeholder_description: "Paraphrase online and find alternative wordings by clicking on any part of your sentence.",
                mode_rewriting_placeholder_link_text: "Read More About Paraphrasing",
                mode_rewriting_caption: "Synonyms",
                mode_rewriting_synonyms_failed: "Failed to load synonyms.",
                mode_rewriting_synonyms_no_result: "No synonyms found for “%{word}”",
                mode_rewriting_synonyms_show_more: "Show More",
                mode_rewriting_synonyms_show_less: "Show Less",
                mode_rewriting_phrases_caption: "Paraphrased Sentences <i>(A.I. Suggestions)</i>",
                mode_rewriting_phrases_apply: "Apply Paraphrasing",
                mode_rewriting_phrases_no_result: "No paraphrasing options found for the selected sentence.",
                mode_rewriting_phrases_failed: "Failed to load paraphrased sentences.",
                mode_rewriting_tooltip_caption: "Language not supported",
                mode_rewriting_tooltip_account: "Account required",
                mode_rewriting_tooltip_description: "Paraphrasing helps you rewrite parts of your text to sound more fluent, more formal, or more comprehensible.",
                mode_rewriting_tooltip_message: "For the time of the BETA, paraphrasing is currently only accessible for selected languages (e.g., English, German, Spanish).",
                mode_rewriting_teaser_hint: 'Get the paraphrasing for <strong>%{remaining}</strong> more sentence <strong>today</strong> with your free account. <a href="%{url}" target="_blank">Unlock unlimited</a>|Paraphrase <strong>%{remaining}</strong> more sentences <strong>today</strong> with your free account. <a href="%{url}" target="_blank">Unlock unlimited</a>',
                mode_rewriting_teaser_countdown: "Get more tomorrow",
                mode_rewriting_teaser_countdown_suffix: "One Paraphrasing|%{amount} Paraphrasings",
                mode_rewriting_teaser_caption: "Need More Right Away?",
                mode_rewriting_teaser_description: "Benefit from unlimited paraphrasing and much more:",
                mode_rewriting_teaser_list_item_1: "<strong>Check up to %{amount}</strong> characters per text",
                mode_rewriting_teaser_list_item_2: "<strong>Advanced style suggestions</strong> for more convincing and compelling texts",
                mode_rewriting_teaser_list_item_3: "<strong>Unlimited paraphrased sentences</strong> to make your text more individual",
                mode_rewriting_teaser_cta: "Unlock All Premium Benefits",
                goals_menu_header_label: "Goal",
                goals_menu_header_no_goal: "None",
                goals_menu_header_set_goal: "Set",
                goals_menu_header_change_goal: "Change",
                goals_menu_header_search_placeholder: "Search for a text type (e.g., job application)",
                goals_menu_header_info_headline: "Writing Goals",
                goals_menu_header_info_text: "By setting a writing goal, LanguageTool can provide more specific style rules for your individual use case. Thus, leading to better, more tailored suggestions.",
                goals_menu_text_type_label: "Text type",
                goals_menu_clear_goal: "Clear writing goal"
            },
            error: {
                ignore_error: "Ignore in this text",
                add_to_dictionary: "Add to Personal Dictionary",
                spelling_error: "Spelling mistake",
                style_error: "Style suggestion",
                grammar_error: "Grammar mistake",
                more_info_external: "Get more info from %{website}",
                picky_error: "Picky suggestion",
                premium_error: "Premium suggestion",
                premium_error_description: "This is an advanced suggestion that is only available in the Premium version of LanguageTool. Upgrade to Premium to get suggestions like this and many more.",
                premium_error_button: "Access all benefits of Premium",
                punctuation_error: "Punctuation mistake",
                delete_word: "Delete",
                remove_extra_whitespace: "Remove extra white space",
                replace_with_whitespace: "Replace with white space"
            },
            wysiwyg: {
                bold: "Bold",
                italic: "Italic",
                underline: "Underline",
                strike_through: "Strike through",
                headline_1: "Headline 1",
                ordered_list: "Ordered list",
                unordered_list: "Unordered list",
                clear_formatting: "Clear formatting",
                undo: "Undo",
                redo: "Redo",
                headline_2: "Headline 2",
                formatting_disabled: "Formatting controls disabled",
                formatting_disabled_headline: "%{program} detected",
                formatting_disabled_text: "All formatting controls are disabled to preserve original styling. This ensures that texts can be copied and pasted between the LanguageTool Editor and %{program} without losing formatting or embedded images.",
                formatting_disabled_button: "Convert to normal text",
                formatting_disabled_button_confirm: "Are you sure you want to remove styles and images from this text?",
                limited_editing_headline: "Limited editing capabilities",
                limited_editing_text: "The Editor doesn’t support the features that word processors offer. That’s why your document is displayed differently. <br /><strong>But don’t worry:</strong> Once you export it, your document will look the same as it did before. To ensure this, you can only make basic text edits here.",
                export_docx_button: "Export as .docx",
                push_back_button: "Paste to…",
                headline_3: "Headline 3",
                paragraph: "Paragraph",
                select_text: "Select text",
                limited_editing_error: "Line breaks can’t be inserted to ensure your original Word document formatting is preserved. In the LanguageTool Editor, you can only make text corrections to Word documents."
            },
            statistics: {
                not_enough_words: "Type at least <strong>%{value} words</strong> to get a qualified score for your text.",
                score_less_than_50: "C’mon, you can do it!",
                score_less_than_75: "Way to go!",
                score_less_than_90: "Not bad.",
                score_less_than_100: "Almost there!",
                score_100: "Hooray!",
                score_text: "Your text has scored <strong>%{score} out of 100</strong>.",
                performance_headline: "Performance",
                error_list_headline: "Apply all of LanguageTool’s suggestions to reach 100:",
                text_statistics_headline: "Text statistics",
                reading_time: "Reading time",
                sentence_count: "Sentences",
                word_count: "Words",
                speaking_time: "Speaking time",
                character_count: "Characters",
                unique_words: "Unique words",
                minute_abbreviation: "min",
                teaser_text: "Get more statistics for your text and check longer documents by creating an account for free."
            },
            account_modal: {
                account_headline: "Create your free account",
                account_text: "Upgrade your writing experience by signing up. Many helpful features are waiting for you:",
                account_reason_1: "Distraction-free writing experience",
                account_reason_2: "Personal Dictionary",
                account_reason_3: "Quality scoring for evaluating style and grammar",
                account_reason_4: "Texts are securely stored",
                account_reason_5: "App for Windows & Mac",
                account_reason_6: "Access even more suggestions for advanced punctuation, style, and typography with the “Picky Mode”",
                try_editor_headline: "Try the LanguageTool Editor for a Better Writing Experience",
                account_reason_7: "Choose between dark and light appearance",
                account_reason_8: "Statistics help you stay on the write path"
            },
            download_button: "Download",
            sign_up_button: "Sign up",
            maybe_later_button: "Maybe later",
            action_save: "Save",
            settings: {
                nav_hide: "Hide Details",
                nav_extend: "Read more",
                nav_category_account: "Account",
                nav_category_addons: "Add-ons",
                nav_category_team: "Team",
                languages_nav_link: "Languages",
                personal_dictionary_nav_link: "Personal Dictionary",
                user_style_guide_nav_link: "Style Guide",
                trash_nav_link: "Recycle Bin",
                my_account_nav_link: "My Account",
                managed_accounts_nav_link: "Managed Accounts",
                user_management_nav_link: "User Management",
                api_link: "API",
                access_tokens_link: "Access Tokens",
                help_link: "Help",
                browser_addon_settings_nav_link: "Browser Add-on",
                log_out_link: "Log out",
                headline: "Settings",
                trash_link: "Open recycle bin",
                general_nav_link: "General",
                app_link: "App Settings",
                referral_settings_nav_link: "Refer friends",
                dashboard_nav_link: "My LanguageTool",
                tips_nav_link: "Writing Tips",
                team_dictionary_nav_link: "Team Dictionary",
                team_style_guide_nav_link: "Team Style Guide",
                teams_teaser: {
                    headline: "It’s Dangerous To Write Alone! Take This.",
                    description: "Write better together with the LanguageTool Dictionary and Style Guide for teams.",
                    cta: "Read All About Teams"
                }
            },
            general_dictionary: {
                import_dictionary: "Import dictionary",
                add_new_phrase: "Add new phrase",
                add_new_phrase_placeholder: "Enter new phrase",
                input_placeholder: "Type to filter phrases…",
                clear_search: "Clear search",
                empty_search: "There are no phrases matching your search…",
                empty_search_add: "Press %{enter} to add phrase",
                remove_word: "Remove word",
                word_already_in_dictionary: "Sorry, you were trying to add words that are already in your dictionary.",
                copy_success: "The words were successfully copied to your clipboard",
                word_contains_space_error: "Sorry, you cannot add words that contain a white space.",
                press_enter_hint: "Press Enter to add the word to your dictionary"
            },
            personal_dictionary: {
                headline: "Personal Dictionary",
                empty_headline: "Give Us Your Word",
                description: "Your Personal Dictionary contains custom words and phrases you use in your writing. Add words here that you don’t want to be marked as spelling mistakes. This is especially helpful when you use lesser-known technical terms or proper nouns.",
                description_learn_more: "Learn more about the Personal Dictionary",
                empty_description: "There are words and phrases LanguageTool doesn’t know about? Add them to your personal dictionary and benefit from adjusted suggestions.",
                limit_warning: "You’ve reached the maximum displayable dictionary size of %{limit} phrases. You can still edit it by using the import functionality."
            },
            team_dictionary: {
                headline: "Team Dictionary",
                empty_headline: "Spread Your Word",
                description: "Your Team Dictionary contains all custom words and phrases you and your colleagues use while writing. Add words here that should not be marked as spelling mistakes. This is especially helpful when using lesser-known technical terms or proper nouns.",
                description_rescricted: "Your Team Dictionary contains all custom words and phrases you and your colleagues use while writing.",
                edit_description: "Only admin users can edit the Team Dictionary. Please visit %{user-management-link} to give team members the admin permission.",
                edit_description_rescricted: "Only admin users can edit the Team Dictionary. To add words, ask your account manager (%{manager-email}) to add the words for you or to give you admin permissions.",
                description_learn_more: "Learn more about the Team Dictionary",
                limit_warning: "You’ve reached the maximum displayable dictionary size of %{limit} phrases. You can still edit it by using the import functionality.",
                empty_description: "There are words and phrases LanguageTool doesn’t know about? Add them to your team’s dictionary so all of you can benefit from adjusted suggestions."
            },
            style_guide: {
                headline: "Style Guide",
                import: "Import Style Guide",
                add_new: "Add rule",
                description_learn_more: "Learn more about Style Guides",
                table_header_rule: "Rule",
                table_header_description: "Description",
                delete_rule_confrimation: "Do you really want to delete this rule?",
                empty_search: "There are no rules matching your search…",
                loading_failed: "Failed to load rules. Please try again or reach out to our support.",
                limit_warning: "You’ve reached the maximum displayable style guide size of %{limit} entries. You can still edit your style guide by using the import functionality."
            },
            team_style_guide: {
                description: "Add rules for your team to unify spellings across your company.",
                edit_description: "Only admin users can edit the Team Style Guide. Please visit %{user-management-link} to give team members the admin permission.",
                edit_description_rescricted: "Only admin users can edit the Team Style guide. To add rules, ask your account manager (%{manager-email}) to add the rule for you or to give you admin permissions.",
                style_guide_empty: "There are no custom rules for your team.",
                empty_headline: "Let’s Be Better Together",
                empty_description: "Create custom rules for your team so inconsistency in your corporate voice are a thing of the past."
            },
            user_style_guide: {
                description: "Add rules to unify spellings across your texts.",
                empty_headline: "Writing With Style",
                empty_description: "Create custom rules that emphasize your personal style of writing, so your texts will stand out even more."
            },
            user_management: {
                headline: "User Management",
                description: "Expand your team and enjoy a unified voice through a shared dictionary and style guide, ensuring consistency regardless of your organization’s size.",
                read_more: "Read more",
                get_more_seats_button: "Get more seats",
                invite_members_button: "Invite members",
                empty_state_headline: "Write Better Together",
                loading: "Loading...",
                seat_info: "You are currently using <b>the only</b> seat of your contract.|You are currently using <b>%{currentSeats}</b> out of <b>%{totalSeats}</b> seats of your contract.",
                seat_info_get_more_seats: "Get more seats",
                seat_info_full_owner: 'You’ve used <b>your only</b> seat. In order to invite more members, please <a href="%{url}" target="_blank">get more seats</a>.|You’ve used up <b>all of your %{seatLimit}</b> seats. In order to invite more members, please <a href="%{url}" target="_blank">get more seats</a>.',
                seat_info_full_admin: "You’ve used <b>your only seat</b>. In order to invite more members, please ask the owner to get more seats.|You’ve used up <b>all of your %{seatLimit} seats</b>. In order to invite more members, please ask the owner to get more seats.",
                email: "Email",
                name: "Name",
                actions: "Actions",
                role: "Role",
                roles: {
                    owner: "Owner",
                    admin: "Admin",
                    editor: "Editor",
                    member: "Member"
                },
                copy_invite: "Copy invite",
                copy_invite_success: "Successfully copied the invitation link.",
                copy_invite_error: "Failed to copy the invitation link.",
                modal_title_add: "Add team members",
                modal_title_edit: "Edit %{name}",
                modal_tab_single: "Individual User",
                modal_tab_multiple: "Multiple Members",
                modal_input_emails: "List of Emails (comma separated)",
                modal_input_placeholder_email: "Enter member email",
                modal_input_placeholder_name: "Enter member name",
                modal_input_placeholder_emails: "Enter member emails",
                error: {
                    invalid_email: "The email address is not valid.",
                    erronous_emails: "Please correct this invalid email address:|Please correct these invalid email addresses:",
                    failed_emails: "Failed to invite member:|Failed to invite members:",
                    no_seats_left: "You have no seats left.",
                    unauthorized: "You’re unfortunately not allowed to do this.",
                    user_not_found: "User not found. Please refresh the page and try again.",
                    unknown: "Something went wrong. Please try again."
                },
                modal_warning_seats_full: "You’ve used up all your seats. You can still add users, but you have to unlock them later.",
                modal_success_invite_sent: "Invitation successfully sent.|Invitations successfully sent.",
                modal_success_user_updated: "Member successfully updated.",
                modal_button_cancel: "Cancel",
                modal_button_save: "Save member",
                modal_button_add: "Add member",
                user_delete_confirmation: "Do you really want to delete this user? This will also delete the texts stored in the LanguageTool Editor. This action cannot be undone.",
                user_delete_success: "User successfully removed."
            },
            form_validation: {
                error_required: "This field is required",
                error_invalid_url: "Not a valid URL"
            },
            language_settings: {
                headline: "Language Settings",
                mother_tongue_headline: "Mother Tongue",
                mother_tongue_description: "Set mother tongue if you want to be warned about false friends when writing in other languages. This setting will also be used for automatic language detection.",
                language_variations_headline: "Language Varieties",
                language_variations_description: "Some languages have varieties depending on the country they are spoken in.",
                oxford_spelling_option_label: "Prefer Oxford spelling",
                interpret_english_as: "Interpret English as:",
                interpret_german_as: "Interpret German as:",
                interpret_portuguese_as: "Interpret Portuguese as:",
                interpret_catalan_as: "Interpret Catalan as:",
                display_language_headline: "Display Language",
                display_language_description: "Set this value to change the language of the editor’s user interface. Beware that the language chosen here will not be considered during the processing of your texts."
            },
            correction_mode_settings: {
                headline: "Picky Mode for New Texts",
                description: "Picky Mode provides more style and tonality suggestions to make your writing truly perfect. Set whether to enable Picky mode by default for new texts.",
                disabled: "Disabled by default",
                enabled: "Enabled by default"
            },
            statistics_collection_settings: {
                headline: "Collection of Text Statistics",
                description: 'LanguageTool collects <a href="/editor/statistics">aggregated usage statistics</a> in the add-ons, desktop apps, and on the website. This helps you better track your productivity and progress. Keep in mind that LanguageTool ensures privacy by making these statistics only visible to you. This feature is currently not available in our Firefox add-on.',
                disabled: "Disabled",
                enabled: "Enabled (recommended)"
            },
            upgrade_teaser: {
                text_1: "Take your writing to the next level"
            },
            upgrade_button: "Upgrade now",
            loading_status: "Loading …",
            trash: {
                headline: "Recycle Bin",
                all_deleted_texts_headline: "Your Deleted Texts",
                description: "All expired temporary texts as well as those texts that you intentionally deleted will be moved to the recycle bin. This ensures that no text is accidentally lost.",
                flash_message_deleted: "The text has been permanently deleted.",
                flash_message_restored: "The text has been restored.",
                flash_message_cleared: "Your trash has been successfully cleared.",
                empty_trash: "Your recycle bin is empty",
                restore_button: "Restore",
                delete_button: "Delete",
                clear_trash_button: "Clear entire trash"
            },
            important_label: "Important:",
            api: {
                max_requests_label: "Max. API requests / day:",
                get_more_link: "Get more",
                usage_headline: "Usage in the past 7 days"
            },
            access_tokens: {
                headline: "Access Tokens",
                description: "LanguageTool works natively with a number of apps. All you have to do is create your very own API token and follow the instructions below.",
                error_generate_pit: "Failed to generate a Personal Integration Token.",
                success_generate_pit: "Successfully generated a Personal Integration Token.",
                error_copy: "Failed to copy the value.",
                success_copy: "Successfully copied the value to the clipboard.",
                general_token_badge: "Developers only",
                general_token_headline: "Developer API",
                general_token_description: "The LanguageTool proofreading API allows programmatic access to our advanced style, grammar, and spelling checker.",
                general_token_cta: "Get General API Access",
                general_token_read_more: "Read more about the Proofreading API",
                general_token_label_token: "General API token",
                general_token_label_endpoint: "HTTP Endpoint",
                integration_token_headline: "Supported Apps",
                integration_token_description: "LanguageTool works natively with a number of apps. All you have to do is create your very own API key and follow the instructions below.",
                integration_token_obsidian: "A powerful and extensible knowledge base that works on top of your local folder of plain text files",
                integration_token_libre_office: "Open Source alternative to Microsoft Word",
                integration_token_instructions: "Read instructions",
                integration_token_create: "Create Integrations Key",
                integration_token_read_more: "Read more about integrations",
                teaser_title: "Native integration in Obsidian and LibreOffice"
            },
            account: {
                headline: "My Account",
                teaser_headline: "Become an even better writer",
                teaser_text_1: "Find many more grammar and punctuation issues",
                teaser_text_2: "Get advanced suggestions to improve style and tonality",
                teaser_text_3: "Check longer texts",
                teaser_text_4: "Add-in for Microsoft Word",
                change_password_headline: "Change my password",
                current_password_label: "Current password:",
                current_password_placeholder: "Enter your current password …",
                new_password_label: "New password:",
                new_password_placeholder: "Enter your new password …",
                repeat_password_label: "Repeat new password:",
                repeat_password_placeholder: "Repeat your new password …",
                change_password_button: "Set new password",
                change_email_headline: "Change my e-mail address",
                change_email_text: "You will need to use the new e-mail to log in to all applications using your account (e.g., the browser add-on, Word, etc.) and this website.",
                current_email_label: "Current e-mail:",
                new_email_label: "New e-mail:",
                new_email_placeholder: "Enter your new e-mail address…",
                repeat_email_label: "Repeat new e-mail:",
                repeat_email_placeholder: "Repeat your new e-mail address…",
                change_email_button: "Save new e-mail",
                teaser_button: "Get LanguageTool Premium",
                subscription_info_headline: "Subscription info",
                subscription_info_premium: "You are on the <strong>LanguageTool Premium</strong> plan.",
                subscription_info_enterprise: "You are on the <strong>LanguageTool Enterprise</strong> plan.",
                billing_link: "Manage billing and invoices",
                payment_method_link: "Manage payment method",
                address_form_toggle: "Change invoice address",
                flash_address_success: "Successfully updated the address.",
                flash_address_failure: "Failed to update the address.",
                flash_address_failure_payment_due: "Changing the address is unfortunately not possible while your payment is processed. Please try again later.",
                flash_address_failure_paypal_expired: "Changing the address is currently not possible because of an expired PayPal billing agreement.",
                confirm_address_delete: "Do you really want to delete the address?",
                flash_delete_address_success: "Successfully cleared the address.",
                flash_delete_address_failure: "Failed to clear the address.",
                address_form_caption: "Change the address that’s displayed on your invoices.",
                address_form_label_name: "Company Name",
                address_form_placeholder_name: "Add your company’s name",
                address_form_label_street: "Street",
                address_form_placeholder_street: "Add your street",
                address_form_label_zip_code: "Zip Code",
                address_form_placeholder_zip_code: "Add your zip code",
                address_form_zip_code_invalid: "Zip code is invalid",
                address_form_label_city: "City",
                address_form_placeholder_city: "Add your city",
                address_form_submit: "Save address",
                address_form_delete: "Delete address",
                invoices_heading: "Invoices",
                invoices_table_caption_number: "Invoice number",
                invoices_table_caption_product: "Product",
                invoices_table_caption_due_at: "Due at",
                invoices_table_caption_state: "State",
                invoices_table_caption_total: "Total",
                invoices_table_caption_download: "Invoice download",
                invoices_table_state_open: "Open",
                invoices_table_state_pending: "Pending",
                invoices_table_state_processing: "Processing",
                invoices_table_state_past_due: "Past due",
                invoices_table_state_paid: "Paid",
                invoices_table_state_closed: "Closed",
                invoices_table_state_failed: "Failed",
                invoices_table_state_voided: "Voided",
                invoices_table_text_download: "Download invoice #%{number}",
                invoices_table_error: "Failed to load the invoices.",
                invoices_table_no_result: "There are no invoices yet.",
                billing_info_heading: "Your Subscription",
                billing_info_caption: "Next invoice at %{date}",
                billing_info_error: "Could not load subscription data.",
                billing_info_no_result: "There is no subscription currently. If this is a mistake, please reach out to our support team.",
                billing_info_reactivate: "Reactivate subscription",
                billing_info_reactivation_confirm: "Do you really want to reactivate your subscription?",
                billing_info_reactivation_failed: "Reactivating your subscription failed. Please reach out to our support team or try again later.",
                billing_info_canceled: "Your subscription of “%{product}” has been canceled. The current term will expire on %{date}. To undo the cancellation, press “%{buttonText}”.",
                billing_info_discount: "Discount",
                billing_info_vat: "%{region} VAT",
                billing_info_total_amount: "Total",
                cancellation_heading: "Cancel your subscription",
                cancellation_initialization_failed: "Sorry, we couldn’t load your subscription data. Please try again later.",
                cancellation_description: "Press “%{buttonText}” to cancel your subscription of “%{product}”.",
                cancellation_submit: "Cancel Subscription Renewal",
                cancellation_failed: "Failed to cancel your subscription.",
                cancellation_confirm: "Do you really want to cancel your subscription?",
                deletion_heading: "Account deletion",
                deletion_description: "Here you can delete your entire account. Your texts will also be irrevocably deleted.",
                deletion_description2: "Please enter your password to prove it is you who is deleting the account:",
                deletion_button: "Delete my account",
                deletion_button2: "I want my account and all my texts deleted",
                deletion_confirm: "All your texts will be irrevocably deleted. Are you sure?"
            },
            status_text_too_long: "This text is a little long",
            link_text_too_long: "Upgrade to Premium to check longer texts and to get more suggestions",
            status_error: "An unexpected error occurred, please try again.",
            status_unknown_language: "It appears that the language of this text isn’t supported by LanguageTool",
            action_try_again: "Try again",
            just_now: "Just now",
            yesterday: "Yesterday",
            verify_email_description: "Your e-mail %{email} still needs to be confirmed",
            verify_email_description_short: "Confirm your e-mail address",
            verify_email_button: "Resend e-mail",
            download_desktop_app_teaser_top_bar_description: "Get the new desktop app to check texts in <strong>Outlook and Apple Mail</strong>",
            download_desktop_app_teaser_top_bar_description_short: "LanguageTool for Outlook and Apple Mail",
            download_desktop_app_teaser_top_bar_button: "Download",
            general_settings: {
                headline: "General Settings",
                appearance_headline: "Appearance",
                appearance_description: "Adjust the Editor’s appearance to either dark or light. By default, the Editor adjusts to your system’s appearance settings, but you are also free to permanently set the mode you like best.",
                appearance_option_default: "Automatic",
                appearance_option_light: "Light",
                appearance_option_dark: "Dark"
            },
            textarea_ooxml_placeholder: "Enter or paste your text here or <em>open a Word document</em> …",
            app_settings: {
                headline: "App Settings",
                new_app_teaser_headline: "It’s here! Finally!",
                new_app_teaser_sub_headline: "Checking for Slack, Apple Mail, Messages, and more",
                new_app_teaser_description: "Whether you’re finalizing an important business email in Apple Mail or putting the finishing touches on a casual conversation in Apple Messages, LanguageTool’s new app for macOS has you covered.",
                new_app_teaser_examples: "Currently supported",
                new_app_teaser_button: "Download the public BETA version",
                general_headline: "General",
                launch_headline: "Launch",
                launch_description: "Run LanguageTool at system startup",
                shortcut_headline: "Check selected text",
                shortcut_description: "Select text in any app and check it in the LanguageTool editor by using this shortcut.",
                change_shortcut: "Change shortcut",
                set_shortcut: "Set shortcut",
                safari_headline: "Safari Extension",
                safari_description: "This app comes with a browser extension for Safari. Enabling the extension allows LanguageTool to check your writing in Safari. To activate this feature, follow the instructions below.",
                safari_checklist_1: "Open Safari extension Settings",
                safari_checklist_2: "Click the checkbox to enable LanguageTool",
                safari_checklist_3: "Go to any multi-line text field (e.g., on Gmail, Facebook, …) and start writing",
                safari_button: "Open Safari extension settings",
                privacy_hint_headline: "We value privacy",
                privacy_hint_description: 'All texts are only checked for typos, grammatical errors, and style flaws. LanguageTool does not store text checked by the browser extension or link texts to your user profile. Should you have any further questions regarding privacy, please take a look at our <a href="/legal/privacy" target="_blank">privacy policy</a>.',
                shortcut_checklist_1: "<strong>First</strong> select text",
                shortcut_checklist_2: "<strong>Then</strong> press shortcut to check text",
                mac_shortcut_headline: "Check texts from clipboard",
                mac_shortcut_description: "To check texts, you first have to copy them to your clipboard by pressing <strong>⌘ C</strong> or use the <strong>“copy”</strong> option in the context menu on right click while text is selected.",
                mac_shortcut_checklist_1: "<strong>First</strong> copy text",
                mac_shortcut_checklist_2: "<strong>Then</strong> check text from clipboard",
                shortcut_info_box: "Learn how to use the shortcut to check texts system-wide in all your favorite writing applications, such as Outlook, Word, PowerPoint, and many others.",
                learn_more: "Learn more"
            },
            please_note: "Please note:",
            ooxml_uploader: {
                headline: "Word Document",
                error: "An unexpected error appeared",
                checking: "Importing & checking …",
                hint: "For Word documents, editing actions are limited to minor text changes and error corrections to preserve the original formatting.",
                intro: "You’re about to edit a Word document in LanguageTool. Before you start, please keep the following things in mind:",
                style_headline: "Style & Formatting are preserved",
                style_text: "Your document will look a little different in the LanguageTool Editor. However, once you export it and open it in your Word program, everything will look exactly as you left it.",
                limitations_headline: "Editing functionality is limited",
                limitations_text: "For Word documents, the Editor only allows minor changes like error corrections. This ensures that all styles, tables, and images are preserved.",
                button: "Okay, got it",
                unsupported_file_error: "Only .docx files are supported. Please check if your Word program can save the document as .docx.",
                drop_hint: "Drop your document here to check it …"
            },
            referral_notice: {
                title: "Get up to 75% off Premium",
                description: "Invite your friends and colleagues and get Premium discounts for everybody",
                invite: "Invite a Friend"
            },
            invitation_modal: {
                special: "Special",
                headline: "Get up to <strong>75%</strong> discount for you and your friends",
                description: "The more friends you invite, the more discount you and your fellow writers get. You will receive an e-mail with your customized discount code as soon as you submit the invitations.",
                discount: "Discount",
                teaser: "Get <strong>%{discount}%</strong> off Premium by inviting <strong>%{friends}</strong> friends",
                send: "Send discounts",
                placeholder: "Add one more friend to get %{discount}% off Premium",
                placeholder_empty: "Enter just one e-mail address and get %{discount}% off Premium",
                error_invalid_email: "Invalid e-mail",
                error_duplicate_email: "This e-mail already exist",
                teaser_empty: "Invite your first friend and get <strong>%{discount}%</strong> off Premium",
                teaser_full: "All done! Send the discounts to you and your friends."
            },
            welcome_editor: {
                headline: "Instantly Enhance Your Writing",
                text: "To correct your text, simply start typing or choose one of the options below:",
                options: {
                    paste: "Paste from clipboard",
                    example_text: "Try with an Example Text",
                    example_text_sub: "Including spelling and grammar errors",
                    example_text_button: "Insert Example Text",
                    word: "Check a Word document",
                    word_sub: "Proofread your .docx file",
                    word_button: "Browse Files"
                },
                back_link: "Go back",
                paraphrasings: "Paraphrasing",
                checking_text: "Checking text…",
                unlimited_paraphrasings_headline: "Do you need more than three paraphrased sentences a day?",
                unlimited_paraphrasings_text: "Benefit from unlimited paraphrasing and much more with <b>LanguageTool Premium</b>.",
                tabs: {
                    text: "Insert Text",
                    docx: "Check Word Document"
                },
                docx: {
                    processing_caption_uploading: "%{percent} % – Uploading file…",
                    processing_caption_anlyzing: "Importing and analyzing file…",
                    processing_description: "Depending on the file size, this can take a moment",
                    failed_caption: "An error occurred",
                    failed_reason_processing_error: "While analyzing your document, an error occurred.",
                    failed_reason_too_big: "The file you selected exceeds the allowed maximum size.",
                    failed_button: "Try again",
                    result_caption_has_errors: "Text Results",
                    result_caption_no_errors: "No mistakes found 🎉",
                    result_description_has_errors: "Your text has been analyzed and <strong>%{errors} suggestion</strong> was found. For more detailed information, take a look at the analysis below.|Your text has been analyzed and <strong>%{errors} suggestions</strong> were found. For more detailed information, take a look at the analysis below.",
                    result_description_no_errors: "Congrats! Your document doesn’t contain any mistakes. You can call yourself a real pro-writer. Check all your texts and benefit from our intelligent text correction by creating a free LanguageTool account today.",
                    result_list_caption: "Suggestions",
                    result_list_spelling_info: "Number of potentially misspelled or unknown words LanguageTool found in your text.",
                    result_list_grammar_info: "Number of potential grammatical issues LanguageTool found in your text.",
                    result_list_style_info: "Occurrences of words or phrasings where LanguageTool has suggestions for improvements (e.g., colloquial phrases, passive voice).",
                    result_details_caption: "Document Attributes",
                    result_cta_has_errors: "Sign up to fix issues",
                    result_list_punctuation_info: "Missing or wrong commas, missing question marks, and other punctuation-related issues.",
                    failed_reason_old_word_file: "LanguageTool doesn’t support the old Word format (.doc). Please open this file in your Word program and save the file in the new format (.docx) before uploading it again.",
                    failed_reason_not_supported: "The chosen file format is unfortunately not supported. Please select a Word file (.docx).",
                    failed_reason_unknown_error: "Something went wrong. Please try again.",
                    failed_reason_text_too_long_error: "The text in the file “%{fileName}” you’ve uploaded unfortunately is too long for us to be able to find all the issues. Please upload a file with fewer than 150,000 characters.",
                    failed_reason_text_too_short_error: "The text in the file “%{fileName}” you’ve uploaded is unfortunately too short for us to detect the language. We’re therefore not able to find any issues. Please upload a file with at least 50 characters.",
                    failed_reason_unsupported_language_error: "The language of your document is unfortunately not supported by LanguageTool. Please try a different one.",
                    upload_text: "Check your Word file by <b>dragging</b> and <b>dropping</b>",
                    upload_headline: "Check your Word files",
                    upload_description: "Check any .docx file by <b>dragging</b> and <b>dropping</b>",
                    upload_label: "Browse files",
                    upload_back: "Write new text",
                    privacy_note: "Files won’t be shared with any third parties",
                    trust: "<strong>Trusted</strong> by millions",
                    trust_by_browser: "<strong>Trusted</strong> by millions of %{browserName} users",
                    trust_gdpr: "GDPR-compliant",
                    trust_hosting: "Hosted in Germany"
                }
            },
            its_free: "It’s free",
            correction_features: {
                headline: "More than your <strong>regular old spell correction</strong>",
                feature_1: "<strong>Advanced spell correction</strong>",
                feature_2: "Intelligent <strong>grammar</strong> and <strong>punctuation</strong> checking",
                feature_3: "<strong>Style suggestions</strong> for more professional texts",
                feature_4: "<strong>Personal Dictionary</strong> for individual terms",
                feature_5: "<strong>Picky Mode</strong> for perfect style and typography",
                feature_6: "<strong>Synonyms</strong> for alternative phrasing",
                feature_7: "Finds <strong>typical German mistakes</strong> when writing English texts"
            },
            settings_dashboard: {
                headline: "Welcome back",
                sub_headline: "You are on the write track"
            },
            settings_statistics: {
                headline: "Welcome Back",
                sub_headline: "You’re on the right track. LanguageTool not only helps you write, but also helps you keep track of your writing. Statistics will be based on all texts you write in apps or on websites that are supported by LanguageTool.",
                read_more: "Read more",
                empty_info: "We’re currently collecting the first batch of data to provide the most useful statistics. Come back in a week to see the results of your very first week of writing.",
                empty_info_read_more: "Read more about Statistics",
                privacy_info_headline: "We Value Your Data Privacy",
                privacy_info_description: 'This data is only visible to you. Statistics are gathered by your usage of the LanguageTool <b>website</b>, <b>editor</b>, and <b>browser add-ons</b> (Chrome, Edge, Safari, and Opera). To respect your privacy, LanguageTool solely stores aggregated usage numbers. You can turn off this functionality in the <a href="/editor/settings/language">settings</a>. For more information, consult our <a href="/legal/privacy#statistics" target="_blank">Privacy Policy</a>.',
                error_info: "An unexpected error occurred",
                error_reason: "Failed to load the data",
                empty_chart_info: "Not enough data yet",
                time_frame_placeholder: "Time frame",
                time_frame: {
                    week: "7 days",
                    "1_month": "30 days",
                    "3_months": "3 months",
                    "6_months": "6 months",
                    year: "year"
                },
                time_frame_last: {
                    week: "last 7 days",
                    "1_month": "last 30 days",
                    "3_months": "last 3 months",
                    "6_months": "last 6 months",
                    year: "last year"
                },
                summary_card: {
                    text_written: "Texts Written",
                    sentences_written: "Sentences Written",
                    words_written: "Words Written",
                    regular_suggestions_applied: "Suggestions Accepted",
                    total_paraphrasings_applied: "Paraphrased Sentences",
                    premium_suggestions_applied: "Premium Suggestions Applied",
                    premium_suggestions_found: "Premium Suggestions Found",
                    more: "more",
                    less: "fewer",
                    than_the_last_week: "than in the last 7 days",
                    than_the_last_1_month: "than in the last 30 days",
                    than_the_last_3_months: "than in the last 3 months",
                    than_the_last_6_months: "than in the last 6 months",
                    than_the_last_year: "than in the last year",
                    trend: {
                        up: {
                            week: "<b>%{diff} more</b> than the week before",
                            "1_month": "<b>%{diff} more</b> than the month before",
                            "3_months": "<b>%{diff} more</b> than the previous 3 months",
                            "6_months": "<b>%{diff} more</b> than the previous 6 months",
                            year: "<b>%{diff} more</b> than the year before"
                        },
                        down: {
                            week: "<b>%{diff} fewer</b> than the week before",
                            "1_month": "<b>%{diff} fewer</b> than the month before",
                            "3_months": "<b>%{diff} fewer</b> than the previous 3 months",
                            "6_months": "<b>%{diff} fewer</b> than the previous 6 months",
                            year: "<b>%{diff} fewer</b> than the year before"
                        }
                    }
                },
                numbers_explained: {
                    headline: "Numbers Explained",
                    headline_empty: "Data collection in progress",
                    description_empty: "Please come back in a couple of days when we’ve had enough time to collect all the data you want to know about.",
                    languages_used: {
                        common: "Most of your writing is in <b>%{first_language}</b>.",
                        week: "Another language you’ve used in the last <b>week</b> is: <b>%{language}</b>.|Other languages you’ve used in the last <b>week</b> are: <b>%{list_of_languages}</b>.",
                        "1_month": "Another language you’ve used in the last <b>month</b> is: <b>%{language}</b>.|Other languages you’ve used in the last <b>month</b> are: <b>%{list_of_languages}</b>.",
                        "3_months": "Another language you’ve used in the last <b>3 months</b> is: <b>%{language}</b>.|Other languages you’ve used in the last <b>3 months</b> are: <b>%{list_of_languages}</b>.",
                        "6_months": "Another language you’ve used in the last <b>6 months</b> is: <b>%{language}</b>.|Other languages you’ve used in the last <b>6 months</b> are: <b>%{list_of_languages}</b>.",
                        year: "Another language you’ve used in the last <b>year</b> is: <b>%{language}</b>.|Other languages you’ve used in the last <b>year</b> are: <b>%{list_of_languages}</b>."
                    },
                    suggestions_applied: {
                        common: "The type of the issue is: <b>%{most_error_type}</b>|The most common error type is: <b>%{most_error_type}</b> (with a total of <b>%{most_error_count}</b>).",
                        week: "In the last <b>week</b> LanguageTool helped you correct the <b>single</b> issue, that can make all the difference.|In total, LanguageTool helped you avoid <b>%{total_error_count}</b> errors in the last <b>week</b>.",
                        "1_month": "In the last <b>month</b> LanguageTool helped you correct the <b>single</b> issue, that can make all the difference.|In total, LanguageTool helped you avoid <b>%{total_error_count}</b> errors in the last <b>month</b>.",
                        "3_months": "In the last <b>3 months</b> LanguageTool helped you correct the <b>single</b> issue, that can make all the difference.|In total, LanguageTool helped you avoid <b>%{total_error_count}</b> errors in the last <b>3 months</b>.",
                        "6_months": "In the last <b>6 months</b> LanguageTool helped you correct the <b>single</b> issue, that can make all the difference.|In total, LanguageTool helped you avoid <b>%{total_error_count}</b> errors in the last <b>6 months</b>.",
                        year: "In the last <b>year</b> LanguageTool helped you correct the <b>single</b> issue, that can make all the difference.|In total, LanguageTool helped you avoid <b>%{total_error_count}</b> errors in the last <b>year</b>."
                    },
                    writing_productivity: {
                        common: "On this day you write the most: <b>%{day}</b>.|On these days you write the most: <b>%{list_of_days}</b>.",
                        stage_1: {
                            week: "You’ve barely written within the last <b>week</b>.",
                            "1_month": "You’ve barely written within the last <b>month</b>.",
                            "3_months": "You’ve barely written within the last <b>3 months</b>.",
                            "6_months": "You’ve barely written within the last <b>6 months</b>.",
                            year: "You’ve barely written within the last <b>year</b>."
                        },
                        stage_2: {
                            week: "You’ve been writing occasionally within the last <b>week</b>.",
                            "1_month": "You’ve been writing occasionally within the last <b>month</b>.",
                            "3_months": "You’ve been writing occasionally within the last <b>3 months</b>.",
                            "6_months": "You’ve been writing occasionally within the last <b>6 months</b>.",
                            year: "You’ve been writing occasionally within the last <b>year</b>."
                        },
                        stage_3: {
                            week: "You’ve been writing consistently within the last <b>week</b>.",
                            "1_month": "You’ve been writing consistently within the last <b>month</b>.",
                            "3_months": "You’ve been writing consistently within the last <b>3 months</b>.",
                            "6_months": "You’ve been writing consistently within the last <b>6 months</b>.",
                            year: "You’ve been writing consistently within the last <b>year</b>."
                        }
                    }
                },
                languages_used_headline: "Languages Used",
                languages_used_description_versions: {
                    week: "This shows you which languages you’ve used the most over the course of the last week.",
                    "1_month": "This shows you which languages you’ve used the most over the course of the last month.",
                    "3_months": "This shows you which languages you’ve used the most over the course of the last 3 months.",
                    "6_months": "This shows you which languages you’ve used the most over the course of the last 6 months.",
                    year: "This shows you which languages you’ve used the most over the course of the last year."
                },
                languages_used_tooltip: "%{count} Word|%{count} Words",
                unknown_language: "Other",
                suggestions_headline: "Avoided Mistakes and Improvements Applied",
                suggestions_description_versions: {
                    week: "These are the accepted suggestions in the last week.",
                    "1_month": "These are the accepted suggestions in the last month.",
                    "3_months": "These are the accepted suggestions in the last 3 months.",
                    "6_months": "These are the accepted suggestions in the last 6 months.",
                    year: "These are the accepted suggestions in the last year."
                },
                suggestions_applied_total: "Total Suggestions Applied",
                suggestions_applied_last: "in the %{timeframe}",
                suggestions_applied_last_week: "in the last 7 days",
                suggestions_applied_last_1_month: "in the last 30 days",
                suggestions_applied_last_3_months: "in the last 3 months",
                suggestions_applied_last_6_months: "in the last 6 months",
                suggestions_applied_last_year: "in the last year",
                suggestions_spelling: "Spelling",
                suggestions_grammar: "Grammar",
                suggestions_punctuation: "Punctuation",
                suggestions_style: "Style",
                suggestions_total_number: "Total",
                percent_of_all_suggestions: "<b>%{percentage}</b> of all suggestions",
                writing_consistency_headline: "Writing Productivity",
                writing_consistency_description_versions: {
                    week: "This shows you which days you’ve been writing the most over the course of the last week.",
                    "1_month": "This shows you which days you’ve been writing the most over the course of the last month.",
                    "3_months": "This shows you which days you’ve been writing the most over the course of the last 3 months.",
                    "6_months": "This shows you which days you’ve been writing the most over the course of the last 6 months.",
                    year: "This shows you which days you’ve been writing the most over the course of the last year."
                },
                writing_consistency_legend_few_words: "few words",
                writing_consistency_legend_many_words: "tons of words",
                writing_consistency_total_number: "Total word count",
                premium_title: "Only with Premium",
                premium_description: "Details matter. Don’t miss LanguageTool’s advanced grammar and style suggestions.",
                premium_headline_versions: {
                    week: "You’ve missed %{count} Premium suggestion in the last week|You’ve missed %{count} Premium suggestions in the last week",
                    "1_month": "You’ve missed %{count} Premium suggestion in the last month|You’ve missed %{count} Premium suggestions in the last month",
                    "3_months": "You’ve missed %{count} Premium suggestion in the last 3 months|You’ve missed %{count} Premium suggestions in the last 3 months",
                    "6_months": "You’ve missed %{count} Premium suggestion in the last 6 months|You’ve missed %{count} Premium suggestions in the last 6 months",
                    year: "You’ve missed %{count} Premium suggestion in the last year|You’ve missed %{count} Premium suggestions in the last year"
                },
                premium_read_more: "Read more about Premium"
            },
            settings_tips: {
                headline_getting_started: "Getting started with LanguageTool",
                headline_whats_new: "What’s New in LanguageTool?",
                read_more: "Read more",
                headline_improve_writing: "Writing Tips",
                see_all_product_updates: "See all product updates",
                see_all_articles: "See all articles",
                load_more: "Load more",
                error_rss_connect: "An error occurred while loading the blog articles",
                error_rss_empty: "There are no blog articles as of now"
            },
            shortcut_onboarding_notice: {
                title: "Use LanguageTool system-wide",
                description: "Check your texts from all your favorite apps with a simple key-press.",
                learn_how: "Learn more"
            },
            shortcut_onboarding_modal: {
                headline: "This is how to use LanguageTool system-wide",
                description: "Follow these four steps and never miss an embarrassing typo again. No matter where you write.",
                step_1: {
                    headline: "Write your text as usual",
                    description: "Open the mail client or text editor of your choice and start typing your text as you usually do."
                },
                step_2: {
                    headline: "Select text and press %{shortcut}",
                    description: "Select the part of the text you want to check and use the system-wide shortcut to open it in LanguageTool.",
                    set_shortcut: "Set your custom shortcut",
                    headline_default: "Select text and press the shortcut"
                },
                step_3: {
                    headline: "Correct your text with LanguageTool",
                    description: "LanguageTool offers a distraction-free writing environment that is designed to resolve your mistakes in an efficient and reliable manner."
                },
                step_4: {
                    headline: "Paste the text back",
                    description: "Press the Paste-Back-Button in the LanguageTool Editor to transfer your corrections to the initial text."
                },
                cta: "Get started",
                info: "You can always find this tutorial in the app settings"
            },
            dictionary_import_modal: {
                headline: "Import dictionary as CSV",
                step_1: "Step 1",
                step_1_description: "Download existing dictionary. All your existing phrases will be pre-populated in the template.",
                step_1_short: "Download existing dictionary as CSV",
                download_existing_dictionary: "Download existing dictionary",
                step_2: "Step 2",
                step_2_description: "Add new phrases or delete any existing ones that you no longer want to use.",
                step_2_short: "Update dictionary in file",
                step_3: "Step 3",
                step_3_description: "Upload the adjusted dictionary as CSV.",
                step_3_short: "Upload modified CSV",
                notice: "Note: If you upload a CSV that does not contain your existing phrases, they will be deleted.",
                cancel: "Cancel",
                upload: "Upload CSV",
                confirmation: "Your existing dictionary will be overwritten. Are you sure you want to continue?",
                example_phrase: "Phrase %{number}",
                download_example_dictionary: "Download example file"
            },
            "style-guide_import_modal": {
                headline: "Use CSV of Existing Rules",
                step_1: "Step 1",
                step_1_description: "Download the CSV of rules. If you have already created style rules, they will be pre-populated in the template.",
                step_1_short: "Download existing Style Guide as CSV",
                "download_existing_style-guide": "Download existing Style Guide",
                step_2: "Step 2",
                step_2_description: "Add new rules or delete any existing rules that you no longer want to use.",
                step_2_short: "Update Style Guide in file",
                step_3: "Step 3",
                step_3_description: "Upload the CSV to import all style rules.",
                step_3_short: "Upload modified CSV",
                notice: "Note: If you upload a CSV that does not contain your existing rules, those rules will be deleted.",
                cancel: "Cancel",
                upload: "Upload CSV"
            },
            "style-guide_add_modal": {
                headline: "Create new rule",
                pattern_label: "Phrase",
                pattern_placeholder: "Phrase to replace",
                pattern_tooltip: "Enter the phrase that should be replaced",
                suggestions_label: "Replacements",
                description_label: "Full description",
                description_placeholder: "Type the description of your rule here",
                add_new_suggestion_placeholder: "Add new replacement",
                url_label: "Link",
                url_placeholder: "URL",
                url_tooltip: "Enter some URL referencing the rule",
                preview: "Preview",
                cancel: "Cancel",
                add_rule: "Add new rule"
            },
            "style-guide_edit_modal": {
                headline: "Edit rule",
                cancel: "Cancel",
                update_rule: "Update style rule"
            },
            tooltips: {
                all_texts: "All texts",
                change_language: "Change language",
                all_suggestions: "All suggestions",
                more_options: "More options",
                next_suggestion: "Next suggestion",
                previous_suggestion: "Previous suggestion",
                all_settings: "All settings",
                hide_all_texts: "Hide all texts",
                hide_all_suggestions: "Hide all suggestions",
                hide_all_settings: "Hide all settings",
                hide_suggestions: "Hide suggestions",
                open_keyboard: "Open the keyboard"
            },
            dock: {
                texts: "Texts",
                statistics: "Statistics",
                settings: "Settings",
                new_text: "New text",
                account: "Account"
            },
            limited_time_discount: {
                title: "Get %{discount} off Premium",
                description: "Take your writing to the next level and receive an exclusive discount for a limited time only.",
                cta: "Claim discount now"
            },
            upgrade_to_premium: "Get Premium"
        }
    }
    ,
    70758: e=>{
        e.exports = {
            textarea_placeholder: "Insira ou cole seu texto aqui para verificar erros de gramática ou de pontuação…",
            action_copy: "Copiar",
            success_copy: "Copiado",
            action_delete: "Excluir",
            status_checking: "Verificando texto...",
            status_no_errors: "Parece bom. Nenhum erro foi encontrado.",
            status_ignored_rules: "o erro %{value} foi ignorado|os erros %{value} foram ignorados",
            copy_to_clipboard: "Copiar",
            endpoint: "Endpoint",
            base_url: "Base URL",
            day: "Dia|Dias",
            request: "Solicitação| Solicitações",
            mistake_count: {
                writing_issues_found: "erro de escrita encontrado|erros de escrita encontrados",
                premium_writing_issues_found: "erro avançado encontrado|erros avançados encontrados",
                more_premium_writing_issues_found: "outro erro avançado|outros erros avançados",
                more_grammar_issues_found: "outro erro gramatical|outros erros gramaticais",
                more_style_issues_found: "outro erro de estilo|outros erros de estilo",
                get_premium: "Obtenha a versão Premium para ver todos os erros",
                spelling_errors: "Erro de ortografia|Erros de ortografia",
                grammar_errors: "Erro gramatical|Erros gramaticais",
                style_errors: "Problema de estilo|Problemas de estilo",
                more_punctuation_issues_found: "outro erro de pontuação|outros erros de pontuação",
                punctuation_errors: "Erro de pontuação|Erros de pontuação",
                possible_spelling_errors: "Possível erro de ortografia|Possíveis erros de ortografia",
                errors: "%{count} erro|%{count} erros",
                no_errors: "Nenhum erro"
            },
            text_statistics: {
                words: "palavra|palavras",
                characters: "caractere|caracteres",
                reading_time: "<i>Tempo de leitura aproximado:</i> %{value} min",
                reading_time_a_few_seconds: "<i>Tempo de leitura aproximado:</i> alguns segundos",
                sentences: "frase|frases"
            },
            did_you_know: {
                title: "Você sabia:",
                value1: "Clicar duas vezes em uma palavra mostrará sugestões de sinônimos"
            },
            language_selector: {
                recommended_languages: "Idiomas recomendados para você:"
            },
            languages: {
                "ast-es": "Asturiano",
                "be-by": "Bielorrusso",
                "br-fr": "Bretão",
                "ca-es": "Catalão",
                "ca-es-valencia": "Catalão (valenciano)",
                "zh-cn": "Chinês",
                "da-dk": "Dinamarquês",
                nl: "Holandês",
                "en-us": "Inglês (EUA)",
                "en-gb": "Inglês (Reino Unido)",
                "en-za": "Inglês (África do Sul)",
                "en-nz": "Inglês (Nova Zelândia)",
                "en-ca": "Inglês (Canadá)",
                "en-au": "Inglês (Austrália)",
                eo: "Esperanto",
                fr: "Francês",
                "gl-es": "Galego",
                "de-de": "Alemão (Alemanha)",
                "de-at": "Alemão (Áustria)",
                "de-ch": "Alemão (Suíça)",
                "el-gr": "Grego",
                it: "Italiano",
                "ja-jp": "Japonês",
                "km-kh": "Khmer",
                fa: "Persa",
                "pl-pl": "Polonês",
                "pt-pt": "Português (Portugal)",
                "pt-br": "Português (Brasil)",
                "pt-ao": "Português (Angola)",
                "pt-mz": "Português (Moçambique)",
                "ro-ro": "Romeno",
                "ru-ru": "Russo",
                "sk-sk": "Eslovaco",
                "sl-si": "Esloveno",
                es: "Espanhol",
                sv: "Sueco",
                "ta-in": "Tâmil",
                "tl-ph": "Tagalo",
                "uk-ua": "Ucraniano",
                "ga-ie": "Irlandês",
                ar: "Árabe",
                no: "Norueguês",
                en: "Inglês",
                de: "Alemão",
                pt: "Português",
                ast: "Asturiano",
                be: "Bielorrusso",
                br: "Bretão",
                ca: "Catalão",
                zh: "Chinês",
                da: "Dinamarquês",
                gl: "Galego",
                el: "Grego",
                ja: "Japonês",
                km: "Khmer",
                pl: "Polonês",
                ro: "Romeno",
                ru: "Russo",
                sk: "Eslovaco",
                sl: "Esloveno",
                ta: "Tamil",
                tl: "Tagalo",
                uk: "Ucraniano",
                ga: "Irlandês"
            },
            premium_benefits: {
                style_checking: "Verificação aprimorada de gramática, pontuação e estilo",
                more_characters: "Até 150.000 caracteres por campo de texto",
                style_guide: "Guia de Estilo",
                word_addin: "Add-in para Microsoft Word"
            },
            confirmations: {
                delete_document: "Tem certeza de que deseja mover este texto para a lixeira?"
            },
            flash_messages: {
                copy_success: "O texto foi copiado para sua área de transferência",
                document_delete_success: "O texto foi movido para a lixeira",
                error: "Oops, algo deu errado. Por favor, tente novamente.",
                rate_limit: "Você fez isso muitas vezes. Por favor, aguarde alguns minutos antes de tentar novamente.",
                successfully_saved: "As alterações foram salvas com sucesso",
                text_404: "O texto que você estava tentando abrir parece não existir (mais)",
                document_save_error: "Não foi possível salvar o seu texto. Verifique a sua conexão com a internet e certifique-se de não perder seu texto.",
                document_load_error: "Não foi possível carregar seu texto. Por favor, verifique sua conexão com a internet.",
                successfully_resend_email_confirmation: "A confirmação por e-mail foi enviada com sucesso",
                doc_too_large: "O documento excede o tamanho máximo de arquivo de 50 MB.",
                print_error: "Textos vazios não podem ser impressos",
                successfully_invite_email_confirmation: "Os convites foram enviados com sucesso. Verifique seu desconto na sua caixa de entrada",
                push_back_success: "O texto foi enviado de volta para o aplicativo de origem",
                download_failed: "Opa, alguma coisa deu errado e seu download falhou. Por favor, tente novamente.",
                file_read_failed: "Opa, algo deu errado ao ler o arquivo. Por favor, tente novamente.",
                import_partially_successful: "Alguns dados não foram importados com sucesso",
                dictionary_too_large_error: "O dicionário carregado excede a contagem máxima de palavras de %{max}",
                style_guide_too_large_error: "O Guia de Estilo carregado excede a contagem máxima de palavras de %{max}",
                delete_account_success: "Sua conta foi deletada com sucesso",
                delete_account_error: "Erro ao deletar sua conta.",
                delete_account_error2: "Você precisa cancelar sua assinatura Premium antes de excluir sua conta.",
                verify_email: "Confirme seu e-mail atual primeiro."
            },
            snack_bar: {
                supported_paste_event_headline: "O LanguageTool %{source} está aqui",
                supported_paste_event_description: "Lá se foram os tempos do copiar e colar. Verifique textos diretamente no %{source} com o LanguageTool para Desktop.",
                supported_paste_event_primary_cta: "Experimente grátis",
                supported_paste_event_secondary_cta: "Ignorar"
            },
            rating_teaser: {
                rating_headline: "Está gostando de usar o LanguageTool?",
                rating_description: "Nós gostaríamos de conhecer sua opinião",
                feedback_headline: "Lamentamos por isso",
                feedback_description: "Por favor, ajude-nos a corrigir este problema",
                positive_headline: "Ficamos felizes por saber disso",
                positive_description: "Por favor, nos dê uma avaliação",
                rating_option_positive: "Adoro!",
                rating_option_neutral: "Está bem",
                rating_option_negative: "Está ruim",
                rating_option_dismiss: "Descartar",
                rating_option_send_feedback: "Enviar feedback",
                rating_option_rate_now: "Avalie agora",
                rating_option_rate_later: "Talvez mais tarde"
            },
            premium_view_teaser: {
                headline: "Todos os benefícios do LanguageTool Premium",
                premium_hint: "Somente com o Premium",
                cta: "Atualizar para Premium"
            },
            placeholders: {
                search_text: "Pesquisar textos",
                document_title: "Digite um título"
            },
            document_list: {
                searching: "Pesquisando...",
                no_results_found: "Nenhum resultado encontrado",
                search_query_too_short: "Digite pelo menos %{value} caracteres para pesquisar",
                info_box_welcome_headline: "Começar a escrever",
                info_box_welcome_text: "Os textos que você escrever aparecerão aqui",
                empty: "Vazio",
                all_texts_filter: "Todos os textos",
                permanent_texts_filter: "Textos permanentes",
                temporary_texts_filter: "Textos temporários",
                check_text_button: "Verificar um novo texto"
            },
            document_types: {
                permanent: "Texto permanente",
                temporary: "Texto temporário"
            },
            documents: {
                about_temporary_headline: "Sobre os textos temporários",
                about_temporary_text: "Um texto temporário será movido automaticamente para a sua lixeira <strong>%{value} dias</strong> após a sua última alteração. É indicado para textos que não tenham um tempo de vida útil longo (e-mails, mensagens de chat, notas de reuniões…).",
                about_permanent_headline: "Sobre textos permanentes",
                about_permanent_text: "Um texto permanente será armazenado com segurança até que você o exclua.",
                document_type_switch_label: "Armazenar permanentemente:",
                confirm_leave: "Seu texto ainda não foi salvo. Você perderá o seu texto se continuar. Você tem certeza?"
            },
            sidebar: {
                suggestions_headline: "Sugestões",
                status_calculating: "Calculando",
                status_failed: "Erro",
                status_text_too_long: "Texto muito longo",
                status_start_writing: "Começar a escrever",
                status_text_too_short: "Texto muito curto",
                text_too_long: "O tamanho máximo de texto compatível é de 150.000 caracteres.",
                text_too_long_premium: "Atualize para o Premium e obtenha sugestões de gramática e estilo avançadas para textos longos.",
                upgrade_button: "Upgrade",
                error_title: "Ocorreu um erro",
                error_message: "Verifique sua conexão com a internet ou tente novamente em alguns segundos.",
                premium_text: "Mude para a versão Premium e obtenha sugestões avançadas de gramática e estilo.",
                picky_title: "Parece bom até agora!",
                picky_text: "Considere ativar o Modo Exigente para obter mais sugestões.",
                welcome_editor_picky_text: "Porém, no editor você pode conseguir muitas outras sugestões.",
                no_errors_title: "Esplêndido!",
                no_errors_text: "Nenhum erro foi encontrado.",
                delete_text_button: "Excluir texto",
                copy_text_button: "Copiar texto",
                text_score_headline: "Pontuação do texto",
                picky_mode_label: "Modo exigente",
                insert_from_clipboard: "Colar",
                insert_from_camera: "Escanear texto",
                insert_from_word: "Importar arquivo Word",
                picky_mode_info_headline: "Ative o Modo Exigente para aperfeiçoar a sua escrita",
                picky_mode_info_item_1: "Oferece mais sugestões de estilo e tom",
                picky_mode_info_item_2: "Detecta frases longas ou complexas",
                picky_mode_info_item_3: "Reconhece coloquialismos e redundâncias",
                picky_mode_info_item_4: "Sugere sinônimos de maneira proativa para palavras comumente usadas em excesso",
                toggle_left_sidebar_link: "Ocultar barra lateral esquerda",
                toggle_right_sidebar_link: "Ocultar barra lateral direita",
                show_statistics_link: "Mostrar estatísticas de texto",
                go_to_editor_link: "Ir para o Editor",
                feedback_text_button: "Enviar feedback",
                help_text_button: "Ir para centro de ajuda",
                mac_text_button: "Obter app macOS",
                print_text_button: "Imprimir texto",
                windows_text_button: "Obtenha o app para o Windows",
                start_writing_title: "Começar a escrever",
                start_writing_text: "Vamos preencher essa página vazia",
                limited_time_offer: "Oferta por tempo limitado",
                ios_text_button: "Obtenha o aplicativo iOS",
                incomplete_results: "Os resultados estão incompletos",
                incomplete_results_description: "A verificação de texto foi interrompida devido a muitos erros.",
                rewriting_label_fluency: "Fluente",
                rewriting_label_formality: "Formal",
                rewriting_label_shortened: "Curto",
                rewriting_label_simplicity: "Simples",
                rewriting_label_general: "Parafraseado",
                mode_correction: "Correções",
                mode_rewriting: "Parafrasear",
                mode_rewriting_initial_placeholder_caption: "Analisando o texto…",
                mode_rewriting_initial_placeholder_description: "Preparando seu documento para reescrever. Fique ligado!",
                mode_rewriting_placeholder_caption: "Clique em qualquer frase ou palavra",
                mode_rewriting_placeholder_description: "Reescreva qualquer frase online e encontre sugestões de palavras clicando em qualquer parte dela.",
                mode_rewriting_placeholder_link_text: "Leia mais sobre a ferramenta de parafraseamento",
                mode_rewriting_caption: "Sinônimos",
                mode_rewriting_synonyms_failed: "Falha ao carregar sinônimos",
                mode_rewriting_synonyms_no_result: "Nenhum sinônimo encontrado para %{word}",
                mode_rewriting_synonyms_show_more: "Mostrar Mais",
                mode_rewriting_synonyms_show_less: "Mostrar Menos",
                mode_rewriting_phrases_caption: "Frases parafraseadas <i>(Sugestões geradas por I.A.)</i>",
                mode_rewriting_phrases_apply: "Aplicar parafraseamento",
                mode_rewriting_phrases_no_result: "Nenhum parafraseamento encontrado para a frase selecionada.",
                mode_rewriting_phrases_failed: "Falha ao carregar os parafraseamentos.",
                mode_rewriting_tooltip_caption: "Idioma não suportado",
                mode_rewriting_tooltip_account: "Uma conta é necessária",
                mode_rewriting_tooltip_description: "A ferramenta de parafraseamento ajuda você a reescrever partes do seu texto para que este soe mais fluente, mais formal ou mais compreensível.",
                mode_rewriting_tooltip_message: "Na versão BETA, a ferramenta de parafraseamento só está acessível para idiomas selecionados (por exemplo, inglês, alemão, espanhol).",
                mode_rewriting_teaser_hint: 'Reescreva mais <strong>%{remaining}</strong> frases <strong>hoje</strong> com sua conta gratuita. <a href="%{url}" target="_blank">Desbloqueie ilimitado</a>|Reescreva <strong>%{remaining}</strong> mais frases <strong> hoje</strong> com sua conta gratuita.<a href="%{url}" target="_blank">Desbloqueie ilimitado</a>',
                mode_rewriting_teaser_countdown: "Receba mais amanhã",
                mode_rewriting_teaser_countdown_suffix: "Um parafraseamento|%{amount} Parafraseamentos",
                mode_rewriting_teaser_caption: "Precisa de mais agora mesmo?",
                mode_rewriting_teaser_description: "Aproveite parafraseamentos ilimitados e muito mais:",
                mode_rewriting_teaser_list_item_1: "<strong>Verifique até %{amount}</strong> caracteres por texto",
                mode_rewriting_teaser_list_item_2: "<strong>Sugestões de estilo avançadas</strong> para textos mais interessantes e atraentes",
                mode_rewriting_teaser_list_item_3: "<strong>Parafraseamentos ilimitados</strong> para personalizar seu texto",
                mode_rewriting_teaser_cta: "Desbloqueie Todos Os Benefícios Premium",
                goals_menu_header_label: "Objetivo",
                goals_menu_header_no_goal: "Nenhum",
                goals_menu_header_set_goal: "Definir",
                goals_menu_header_change_goal: "Alterar",
                goals_menu_header_search_placeholder: "Pesquisar tipo de texto (por exemplo, candidatura de emprego)",
                goals_menu_header_info_headline: "Metas de redação",
                goals_menu_header_info_text: "Ao selecionar uma meta de redação, o LanguageTool oferece regras mais específicas de estilo para o seu caso individual, resultando em sugestões mais personalizadas.",
                goals_menu_text_type_label: "Tipo de texto",
                goals_menu_clear_goal: "Remover meta de redação"
            },
            error: {
                ignore_error: "Ignorar neste texto",
                add_to_dictionary: "Adicionar ao Dicionário Pessoal",
                spelling_error: "Erro de ortografia",
                style_error: "Sugestão de estilo",
                grammar_error: "Erro de gramática",
                more_info_external: "Obtenha mais informações de %{website}",
                picky_error: "Sugestão exigente",
                premium_error: "Sugestão Premium",
                premium_error_description: "Esta é uma sugestão avançada que só está disponível na versão Premium do LanguageTool. Atualize para Premium para obter sugestões como esta e muitas outras.",
                premium_error_button: "Conheça todos os benefícios Premium",
                punctuation_error: "Erro de pontuação",
                delete_word: "Apagar",
                remove_extra_whitespace: "Remover espaço em branco a mais",
                replace_with_whitespace: "Substituir por espaço"
            },
            wysiwyg: {
                bold: "Negrito",
                italic: "Itálico",
                underline: "Sublinhado",
                strike_through: "Riscado",
                headline_1: "Título 1",
                ordered_list: "Lista ordenada",
                unordered_list: "Lista não ordenada",
                clear_formatting: "Limpar formatação",
                undo: "Desfazer",
                redo: "Refazer",
                headline_2: "Título 2",
                formatting_disabled: "Controles de formatação desabilitados",
                formatting_disabled_headline: "%{program} detetado",
                formatting_disabled_text: "Todos os controlos de formatação encontram-se desativados de forma a preservar o estilo original. Isto garante que os textos possam ser copiados e colados entre o LanguageTool Editor e o %{program} sem perda de formatação ou imagens incorporadas.",
                formatting_disabled_button: "Converter para texto normal",
                formatting_disabled_button_confirm: "Você tem certeza de que quer remover estilos e imagens deste texto?",
                limited_editing_headline: "Capacidades limitadas de edição",
                limited_editing_text: "O Editor não oferece suporte às funcionalidades que os programas de texto oferecem. É por isso que seu documento é exibido de forma diferente.<br /> <strong></strong> após exportá-lo, seu documento terá a mesma aparência de antes. Para garantir isso, você só pode realizar edições básicas de texto aqui.",
                export_docx_button: "Exportar como .docx",
                push_back_button: "Colar em...",
                headline_3: "Título 3",
                paragraph: "Parágrafo",
                select_text: "Selecione texto",
                limited_editing_error: "As quebras de linha não podem ser inseridas para garantir que a formatação do documento original do Word seja preservada. No Editor de LanguageTool, você só pode fazer correções de texto em documentos do Word."
            },
            statistics: {
                not_enough_words: "Digite pelo menos <strong>%{value} palavras</strong> para obter uma pontuação qualificada para o seu texto.",
                score_less_than_50: "Vamos lá! Você consegue!",
                score_less_than_75: "Muto bem!",
                score_less_than_90: "Nada mal.",
                score_less_than_100: "Quase lá!",
                score_100: "Uhul!",
                score_text: "O seu texto alcançou a pontuação de <strong>%{score} em 100</strong>.",
                performance_headline: "Desempenho",
                error_list_headline: "Aplique todas as sugestões do LanguageTool para chegar a 100:",
                text_statistics_headline: "Estatísticas de texto",
                reading_time: "Tempo de leitura",
                sentence_count: "Frases",
                word_count: "Palavras",
                speaking_time: "Tempo de fala",
                character_count: "Caracteres",
                unique_words: "Palavras únicas",
                minute_abbreviation: "min.",
                teaser_text: "Veja mais estatísticas sobre o seu texto e verifique documentos mais longos criando uma conta gratuitamente."
            },
            account_modal: {
                account_headline: "Crie sua conta gratuita",
                account_text: "Eleve a sua experiência de escrita fazendo o seu cadastro. Vários recursos úteis estão esperando por você:",
                account_reason_1: "Experiência de escrita sem distrações",
                account_reason_2: "Dicionário Pessoal",
                account_reason_3: "Pontuação da qualidade para avaliar estilo e gramática",
                account_reason_4: "Os textos são armazenados em segurança",
                account_reason_5: "Aplicativo para Windows e Mac",
                account_reason_6: 'Acesse o "Modo exigente" para obter ainda mais sugestões em um estilo e tipografia avançados',
                try_editor_headline: "Experimente o editor LanguageTool para uma melhor experiência de escrita",
                account_reason_7: "Escolha entre o modo escuro e claro",
                account_reason_8: "As estatísticas ajudam você a manter o foco na sua escrita"
            },
            download_button: "Baixar",
            sign_up_button: "Registre-se",
            maybe_later_button: "Talvez mais tarde",
            action_save: "Salvar",
            settings: {
                nav_hide: "Esconder detalhes",
                nav_extend: "Mais informações",
                nav_category_account: "Conta",
                nav_category_addons: "Extensões",
                nav_category_team: "Equipe",
                languages_nav_link: "Idiomas",
                personal_dictionary_nav_link: "Dicionário Pessoal",
                user_style_guide_nav_link: "Guia de Estilo",
                trash_nav_link: "Lixeira",
                my_account_nav_link: "Minha conta",
                managed_accounts_nav_link: "Gerenciar contas",
                user_management_nav_link: "Gerenciamento de usuários",
                api_link: "API",
                access_tokens_link: "Tokens de acesso",
                help_link: "Ajuda",
                browser_addon_settings_nav_link: "Extensão de navegador",
                log_out_link: "Sair",
                headline: "Configurações",
                trash_link: "Abrir cesto de reciclagem",
                general_nav_link: "Geral",
                app_link: "Configurações do aplicativo",
                referral_settings_nav_link: "Indique a amigos",
                dashboard_nav_link: "Meu LanguageTool",
                tips_nav_link: "Dicas de redação",
                team_dictionary_nav_link: "Dicionário de equipe",
                team_style_guide_nav_link: "Guia de Estilo de Equipe",
                teams_teaser: {
                    headline: "É perigoso escrever sozinho! Aceite isso.",
                    description: "Escreva melhor com o Dicionário e o Guia de Estilo do LanguageTool Equipes.",
                    cta: "Leia tudo sobre o Equipes"
                }
            },
            general_dictionary: {
                import_dictionary: "Importar dicionário",
                add_new_phrase: "Adicionar nova frase",
                add_new_phrase_placeholder: "Inserir nova frase",
                input_placeholder: "Digite para filtrar frases…",
                clear_search: "Limpar pesquisa",
                empty_search: "Não há frases que correspondam à sua pesquisa...",
                empty_search_add: "Pressione %{enter} para adicionar a frase",
                remove_word: "Remover palavra",
                word_already_in_dictionary: "Desculpe, mas você está tentando adicionar palavras que já estão em seu dicionário.",
                copy_success: "As palavras foram copiadas com sucesso para a sua área de transferência",
                word_contains_space_error: "Desculpe, você não pode adicionar palavras que contenham um espaço em branco.",
                press_enter_hint: "Pressione Enter para adicionar a palavra ao seu dicionário"
            },
            personal_dictionary: {
                headline: "Dicionário pessoal",
                empty_headline: "Nos dê a sua palavra",
                description: "Seu Dicionário Pessoal contém palavras e frases que você usa em sua escrita. Adicione aqui palavras que você não deseja que sejam marcadas como erros ortográficos. Isso é especialmente útil quando você usa termos técnicos menos conhecidos ou nomes próprios.",
                description_learn_more: "Saiba mais sobre o Dicionário Pessoal",
                empty_description: "Existem palavras e frases que não conhecemos? Adicione-as ao seu Dicionário Pessoal e receba sugestões personalizadas.",
                limit_warning: "Você atingiu o limite máximo de %{limit} termos visualizáveis do dicionário. Ainda é possível editá-los por meio da função de importação."
            },
            team_dictionary: {
                headline: "Dicionário de equipe",
                empty_headline: "Espalhe a sua palavra",
                description: "Seu Dicionário de Equipe contém palavras e frases personalizadas que você e seus colegas usam enquanto escrevem. Adicione aqui as palavras que não devem ser marcadas como erros de ortografia. Isso é especialmente útil ao usar termos técnicos menos conhecidos ou nomes próprios.",
                description_rescricted: "Seu Dicionário de Equipe contém palavras e frases personalizadas que você e seus colegas usam enquanto escrevem.",
                edit_description: "Apenas os usuários administradores podem editar o Dicionário de Equipe. Por favor, visite %{user-management-link} para dar permissão de administrador aos membros da equipe.",
                edit_description_rescricted: "Somente usuários administradores podem editar o Dicionário de Equipe. Para adicionar palavras, peça ao seu gerente de conta (%{manager-email}) para adicionar as palavras para você ou para lhe dar permissões de administrador.",
                description_learn_more: "Saiba mais sobre o Dicionário de Equipe",
                limit_warning: "Você atingiu o tamanho máximo do dicionário exibível de frases %{limit}. Você ainda pode editá-lo usando a funcionalidade de importação.",
                empty_description: "Existem palavras e frases que não conhecemos? Acrescente-as ao Dicionário de Equipe para que todos possam se beneficiar de sugestões personalizadas."
            },
            style_guide: {
                headline: "Guia de Estilo",
                import: "Importar Guia de Estilo",
                add_new: "Adicionar regra",
                description_learn_more: "Saiba mais sobre Guias de Estilo",
                table_header_rule: "Regra",
                table_header_description: "Descrição",
                delete_rule_confrimation: "Deseja realmente excluir esta regra?",
                empty_search: "Não há regras correspondentes à sua busca...",
                loading_failed: "Falha ao carregar regras. Por favor, tente novamente ou entre em contato com o nosso suporte.",
                limit_warning: "Você atingiu o tamanho máximo do guia de estilo exibível de %{limit} entradas. Você ainda pode editar seu guia de estilo usando a funcionalidade de importação."
            },
            team_style_guide: {
                description: "Adicione regras de estilo para sua equipe para unificar estilos de escrita em toda a sua empresa ",
                edit_description: "Somente usuários administradores podem editar o Guia de Estilo da equipe. Por favor, visite %{user-management-link} para dar aos membros da equipe a permissão de administrador.",
                edit_description_rescricted: "Somente usuários administradores podem editar o Guia de Estilo da equipe. Para adicionar regras, peça ao seu gerente de conta (%{manager-email}) para adicionar a regra para você ou para lhe dar permissões de administrador.",
                style_guide_empty: "Não há regras personalizadas para sua equipe.",
                empty_headline: "Vamos Ser Melhores Juntos",
                empty_description: "Crie regras personalizadas para sua equipe para que a inconsistência em sua voz corporativa seja coisa do passado."
            },
            user_style_guide: {
                description: "Adicione regras para unificar a ortografia em seus textos.",
                empty_headline: "Escrevendo Com Estilo",
                empty_description: "Crie regras personalizadas que enfatizem seu estilo pessoal de escrita, para que seus textos se destaquem ainda mais."
            },
            user_management: {
                headline: "Gerenciamento de usuários",
                description: "Aumente a sua equipe e desfrute de um estilo de redação unificado por meio de um dicionário e de um guia de estilo compartilhados, garantindo consistência independentemente do tamanho da sua empresa.",
                read_more: "Leia mais",
                get_more_seats_button: "Obter mais vagas",
                invite_members_button: "Convidar membros",
                empty_state_headline: "Juntos, escrevemos melhor",
                loading: "Carregando...",
                seat_info: "Você está utilizando <b>a única</b> vaga de seu contrato.|Você está utilizando <b>%{currentSeats}</b> das <b>%{totalSeats}</b> vagas do seu contrato.",
                seat_info_get_more_seats: "Obter mais vagas",
                seat_info_full_owner: 'Você usou <b>sua única vaga</b>. Para convidar mais membros, <a href="%{url}" target="_blank">obtenha mais vagas</a>.|Você usou <b>todas as suas %{seatLimit} vagas</b>. Para convidar mais membros, <a href="%{url}" target="_blank">obtenha mais vagas</a>.',
                seat_info_full_admin: "Você usou <b>sua única vaga</b>. Para convidar mais membros, solicite mais vagas ao proprietário.|Você usou <b>todas as suas %{seatLimit} vagas</b>. Para convidar mais membros, solicite mais vagas ao proprietário.",
                email: "E-mail",
                name: "Nome",
                actions: "Ações",
                role: "Título",
                roles: {
                    owner: "Proprietário",
                    admin: "Administrador",
                    editor: "Editor",
                    member: "Membro"
                },
                copy_invite: "Copiar convite",
                copy_invite_success: "Link do convite copiado corretamente",
                copy_invite_error: "Erro ao copiar link do convite",
                modal_title_add: "Adicionar membros à equipe",
                modal_title_edit: "Editar %{name}",
                modal_tab_single: "Usuário individual",
                modal_tab_multiple: "Múltiplos membros",
                modal_input_emails: "Lista de e-mails (separados por vírgulas)",
                modal_input_placeholder_email: "Inserir e-mail do membro",
                modal_input_placeholder_name: "Inserir nome do membro",
                modal_input_placeholder_emails: "Inserir e-mails do membro",
                error: {
                    invalid_email: "O endereço de e-mail é inválido.",
                    erronous_emails: "Corrija o seguinte endereço de e-mail inválido:|Corrija os seguintes endereços de e-mail inválidos:",
                    failed_emails: "Falha ao convidar membro:|Falha ao convidar membros",
                    no_seats_left: "Não há vagas disponíveis.",
                    unauthorized: "Infelizmente, esta ação não é permitida.",
                    user_not_found: "Usuário não encontrado. Recarregue a página e tente novamente.",
                    unknown: "Algo deu errado. Tente novamente."
                },
                modal_warning_seats_full: "Você preencheu todas as suas vagas. Ainda é possível adicionar usuários, mas será preciso desbloqueá-los mais tarde.",
                modal_success_invite_sent: "Convite enviado com sucesso.|Convites enviados com sucesso.",
                modal_success_user_updated: "Membro atualizado com sucesso.",
                modal_button_cancel: "Cancelar",
                modal_button_save: "Salvar membro",
                modal_button_add: "Adicionar membro",
                user_delete_confirmation: "Tem certeza que deseja deletar este usuário?",
                user_delete_success: "Usuário removido com sucesso."
            },
            form_validation: {
                error_required: "Este campo é obrigatório",
                error_invalid_url: "Não é um URL válido"
            },
            language_settings: {
                headline: "Configurações de idiomas",
                mother_tongue_headline: "Língua materna",
                mother_tongue_description: "Defina a língua materna se quiser ser avisado sobre falsos cognatos ao escrever em outros idiomas. Esta configuração também será usada para detecção automática de idioma.",
                language_variations_headline: "Variações de idiomas",
                language_variations_description: "Alguns idiomas têm variações dependendo do país em que são falados.",
                oxford_spelling_option_label: "Preferir a ortografia Oxford",
                interpret_english_as: "Interpretar inglês como:",
                interpret_german_as: "Interpretar alemão como:",
                interpret_portuguese_as: "Interpretar português como:",
                interpret_catalan_as: "Interpretar catalão como:",
                display_language_headline: "Idioma de exibição",
                display_language_description: "Defina este valor para alterar o idioma da interface do usuário do editor. Saiba que o idioma escolhido aqui não será considerado durante o processamento de seus textos."
            },
            correction_mode_settings: {
                headline: "Modo Exigente para novos textos",
                description: "O Modo Exigente oferece mais sugestões de estilo e de tonalidade para tornar sua escrita verdadeiramente perfeita. Defina se deseja ativar o Modo Exigente como padrão para novos textos.",
                disabled: "Desativado por padrão",
                enabled: "Ativado por padrão"
            },
            statistics_collection_settings: {
                headline: "Coleção de estatísticas de texto",
                description: 'O LanguageTool coleta <a href="/editor/statistics">estatísticas de uso agregadas</a> nos complementos, aplicativos de desktop e no site. Isso ajuda você a monitorar melhor sua produtividade e progresso. Lembre-se de que o LanguageTool garante a privacidade, tornando essas estatísticas visíveis apenas para você.',
                disabled: "Desativado",
                enabled: "Ativado (recomendado)"
            },
            upgrade_teaser: {
                text_1: "Eleve o nível da sua escrita"
            },
            upgrade_button: "Atualizar agora",
            loading_status: "Carregando...",
            trash: {
                headline: "Lixeira",
                all_deleted_texts_headline: "Seus textos excluídos",
                description: "Todos os textos temporários expirados, bem como aqueles que você excluiu intencionalmente, serão movidos para a lixeira. Isso garante que nenhum texto seja perdido acidentalmente.",
                flash_message_deleted: "O texto foi excluído permanentemente.",
                flash_message_restored: "O texto foi restaurado.",
                flash_message_cleared: "Sua lixeira foi esvaziada com sucesso.",
                empty_trash: "Sua lixeira está vazia",
                restore_button: "Restaurar",
                delete_button: "Excluir",
                clear_trash_button: "Esvaziar a lixeira toda"
            },
            important_label: "Importante:",
            api: {
                max_requests_label: "Máx. de solicitações de API/dia:",
                get_more_link: "Obter mais",
                usage_headline: "Uso nos últimos 7 dias"
            },
            access_tokens: {
                headline: "Tokens de acesso",
                description: "O LanguageTool funciona de maneira nativa com vários aplicativos. Tudo o que você precisa fazer é criar seu próprio token de API e seguir as instruções abaixo.",
                error_generate_pit: "Falha ao gerar um Token de Integração Pessoal.",
                success_generate_pit: "Token de Integração Pessoal gerado com sucesso.",
                error_copy: "Falha ao copiar o valor.",
                success_copy: "Valor copiado com sucesso para a área de transferência.",
                general_token_badge: "Apenas desenvolvedores",
                general_token_headline: "API do desenvolvedor",
                general_token_description: "A API de revisão do LanguageTool permite acesso programático ao nosso verificador ortográfico, gramatical e de estilo avançado.",
                general_token_cta: "Obter acesso geral à API",
                general_token_read_more: "Leia mais sobre a API de revisão",
                general_token_label_token: "Token geral da API",
                general_token_label_endpoint: "Endpoint HTTP",
                integration_token_headline: "Apps Suportados",
                integration_token_description: "O LanguageTool funciona de forma nativa com vários aplicativos. Tudo o que você precisa fazer é criar sua própria chave de API e seguir as instruções abaixo.",
                integration_token_obsidian: "Uma base de conhecimento poderosa e extensível que funciona em sua pasta local de arquivos de texto simples",
                integration_token_libre_office: "Alternativa de código aberto ao Microsoft Word",
                integration_token_instructions: "Ler instruções",
                integration_token_create: "Criar Chaves de Integração",
                integration_token_read_more: "Leia mais sobre integrações",
                teaser_title: "Integração nativa no Obsidian e LibreOffice"
            },
            account: {
                headline: "Minha conta",
                teaser_headline: "Torne-se um escritor ainda melhor",
                teaser_text_1: "Encontre muitos outros problemas de gramática e pontuação",
                teaser_text_2: "Obtenha sugestões avançadas para melhorar o estilo e o tom",
                teaser_text_3: "Verifique textos mais longos",
                teaser_text_4: "Extensão para Microsoft Word",
                change_password_headline: "Alterar minha senha",
                current_password_label: "Senha atual:",
                current_password_placeholder: "Digite sua senha atual...",
                new_password_label: "Nova senha:",
                new_password_placeholder: "Digite sua nova senha...",
                repeat_password_label: "Repita a nova senha:",
                repeat_password_placeholder: "Repita sua nova senha...",
                change_password_button: "Definir nova senha",
                change_email_headline: "Alterar meu endereço de e-mail",
                change_email_text: "Você precisará usar o novo e-mail para fazer login em todos os aplicativos usando a sua conta (por exemplo, a extensão do navegador, Word, etc.) e neste site.",
                current_email_label: "E-mail atual:",
                new_email_label: "Novo e-mail:",
                new_email_placeholder: "Digite seu novo endereço de e-mail...",
                repeat_email_label: "Repetir novo e-mail:",
                repeat_email_placeholder: "Repita seu novo endereço de e-mail…",
                change_email_button: "Salvar novo e-mail",
                teaser_button: "Obter LanguageTool Premium",
                subscription_info_headline: "Informações de assinatura",
                subscription_info_premium: "Você está no plano <strong>LanguageTool Premium</strong>.",
                subscription_info_enterprise: "Você está no plano <strong>LanguageTool Enterprise</strong>.",
                billing_link: "Gerenciar cobranças e faturas",
                payment_method_link: "Gerenciar forma de pagamento",
                address_form_toggle: "Alterar endereço da fatura",
                flash_address_success: "Endereço atualizado com sucesso.",
                flash_address_failure: "Falha ao atualizar o endereço.",
                flash_address_failure_payment_due: "Infelizmente, não é possível alterar seu endereço enquanto seu pagamento está sendo processado. Por favor, tente novamente mais tarde.",
                flash_address_failure_paypal_expired: "No momento, não é possível alterar o endereço devido a um contrato de cobrança do PayPal expirado.",
                confirm_address_delete: "Você deseja realmente excluir o endereço?",
                flash_delete_address_success: "O endereço foi apagado com sucesso.",
                flash_delete_address_failure: "Falha ao limpar o endereço.",
                address_form_caption: "Alterar o endereço exibido nas suas faturas.",
                address_form_label_name: "Nome da Empresa",
                address_form_placeholder_name: "Adicione o nome da sua empresa",
                address_form_label_street: "Rua",
                address_form_placeholder_street: "Adicione sua rua",
                address_form_label_zip_code: "CEP",
                address_form_placeholder_zip_code: "Adicione seu CEP",
                address_form_zip_code_invalid: "CEP inválido",
                address_form_label_city: "Cidade",
                address_form_placeholder_city: "Adicione sua cidade",
                address_form_submit: "Salvar endereço",
                address_form_delete: "Excluir endereço",
                invoices_heading: "Faturas",
                invoices_table_caption_number: "Número de fatura",
                invoices_table_caption_product: "Produto",
                invoices_table_caption_due_at: "Vencimento em",
                invoices_table_caption_state: "Estado",
                invoices_table_caption_total: "Total",
                invoices_table_caption_download: "Download de fatura",
                invoices_table_state_open: "Abrir",
                invoices_table_state_pending: "Pendente",
                invoices_table_state_processing: "Processando",
                invoices_table_state_past_due: "Vencida",
                invoices_table_state_paid: "Paga",
                invoices_table_state_closed: "Fechada",
                invoices_table_state_failed: "Falhou",
                invoices_table_state_voided: "Anulada",
                invoices_table_text_download: "Download fatura #%{number}",
                invoices_table_error: "Erro ao carregar faturas",
                invoices_table_no_result: "Ainda não há faturas.",
                billing_info_heading: "Sua assinatura",
                billing_info_caption: "Próxima fatura em %{date}",
                billing_info_error: "Não foi possível carregar os dados da assinatura.",
                billing_info_no_result: "Não há assinatura no momento. Se isso for um erro, entre em contato com nossa equipe de suporte.",
                billing_info_reactivate: "Reativar assinatura",
                billing_info_reactivation_confirm: "Deseja realmente reativar sua assinatura?",
                billing_info_reactivation_failed: "Falha ao reativar sua assinatura. Entre em contato com nossa equipe de suporte ou tente novamente mais tarde.",
                billing_info_canceled: 'Sua assinatura de "%{product}" foi cancelada. O prazo atual expirará em %{date}. Para desfazer o cancelamento, aperte "%{buttonText}"',
                billing_info_discount: "Desconto",
                billing_info_vat: "%{region} IVA",
                billing_info_total_amount: "Total",
                cancellation_heading: "Cancelar sua assinatura",
                cancellation_initialization_failed: "Desculpe, não foi possível carregar seus dados de assinatura. Por favor, tente novamente mais tarde.",
                cancellation_description: 'Aperte "%{buttonText}" para cancelar a assinatura de "%{product}".',
                cancellation_submit: "Cancelar renovação da assinatura",
                cancellation_failed: "Erro ao cancelar sua assinatura.",
                cancellation_confirm: "Deseja realmente cancelar sua assinatura?",
                deletion_heading: "Exclusão de conta",
                deletion_description: "Aqui você pode excluir toda a sua conta. Seus textos também serão excluídos de forma irreversível.",
                deletion_description2: "Por favor, insira a sua senha para provar que é você mesmo que está excluindo a conta.",
                deletion_button: "Excluir minha conta",
                deletion_button2: "Eu quero excluir minha conta e todos os meus textos",
                deletion_confirm: "Todos os seus textos serão excluídos irrevogavelmente. Tem certeza?"
            },
            status_text_too_long: "Este texto está um pouco longo",
            link_text_too_long: "Atualize para a versão Premium para verificar textos mais longos e obter mais sugestões",
            status_error: "Ocorreu um erro inesperado, tente novamente.",
            status_unknown_language: "Parece que o idioma deste texto não é compatível com o LanguageTool",
            action_try_again: "Tente novamente",
            just_now: "agora mesmo",
            yesterday: "ontem",
            verify_email_description: "O seu e-mail %{email} ainda precisa ser confirmado",
            verify_email_description_short: "Confirme seu endereço de e-mail",
            verify_email_button: "Reenviar e-mail",
            download_desktop_app_teaser_top_bar_description: "Obtenha o novo aplicativo para desktop para verificar textos no <strong>Outlook e Apple Mail</strong>",
            download_desktop_app_teaser_top_bar_description_short: "LanguageTool para Outlook e Apple Mail",
            download_desktop_app_teaser_top_bar_button: "Download",
            general_settings: {
                headline: "Configurações Gerais",
                appearance_headline: "Aspecto",
                appearance_description: "Ajuste a aparência do editor para escuro ou claro. Por padrão, o Editor se ajusta às configurações de aparência de seu sistema, mas você também está livre para definir permanentemente o modo que você mais gostar.",
                appearance_option_default: "Automático",
                appearance_option_light: "Claro",
                appearance_option_dark: "Escuro"
            },
            textarea_ooxml_placeholder: "Insira ou cole aqui seu texto, ou <em>abra um documento Word</em> …",
            app_settings: {
                headline: "Configurações do aplicativo",
                new_app_teaser_headline: "Chegou! Finalmente!",
                new_app_teaser_sub_headline: "Verificação para Slack, Apple Mail, Mensagens e mais",
                new_app_teaser_description: "Esteja você finalizando um e-mail comercial importante no Apple Mail ou dando os toques finais em uma conversa casual no Apple Messages, o novo aplicativo do LanguageTool para macOS te ajudará.",
                new_app_teaser_examples: "Atualmente compatível",
                new_app_teaser_button: "Baixe a versão BETA pública",
                general_headline: "Geral",
                launch_headline: "Iniciar",
                launch_description: "Iniciar o LanguageTool no arranque do sistema",
                shortcut_headline: "Checar o texto selecionado",
                shortcut_description: "Selecione o texto em qualquer aplicativo e verifique-o no editor do LanguageTool usando este atalho.",
                change_shortcut: "Mudar atalho",
                set_shortcut: "Definir atalho",
                safari_headline: "Extensão Safari",
                safari_description: "Este aplicativo vem com uma extensão para Safari. Habilitá-la permitirá que o LanguageTool verifique sua escrita neste navegador. Para ativar este recurso, siga as instruções abaixo.",
                safari_checklist_1: "Abra as configurações da extensão do Safari",
                safari_checklist_2: "Clique na caixa de seleção para habilitar o LanguageTool",
                safari_checklist_3: "Vá para qualquer campo de texto de várias linhas (por exemplo, no Gmail, Facebook, ...) e comece a escrever",
                safari_button: "Abra as configurações da extensão do Safari",
                privacy_hint_headline: "Nós valorizamos a privacidade",
                privacy_hint_description: 'Todos os textos são verificados apenas com relação a erros de digitação, erros gramaticais e falhas de estilo. O LanguageTool não armazena texto verificado pela extensão do navegador nem vincula textos ao seu perfil de usuário. Caso você tenha mais alguma dúvida sobre privacidade, dê uma olhada em nosso <a href="https://languagetool.org/legal/privacy" target="_blank"> política de privacidade </a>.',
                shortcut_checklist_1: "<strong> Primeiro </strong> selecione o texto",
                shortcut_checklist_2: "<strong> em seguida </strong> pressione o atalho para verificar o texto",
                mac_shortcut_headline: "Verifique os textos da área de transferência",
                mac_shortcut_description: "Para verificar os textos, primeiro você deve copiá-los para sua área de transferência pressionando <strong> ⌘ C </strong> ou usar a opção <strong> “copiar”</strong> no menu de contexto ao clicar com o botão direito enquanto o texto é selecionado.",
                mac_shortcut_checklist_1: "<strong>Primeira</strong> copiar texto",
                mac_shortcut_checklist_2: "<strong>Então</strong> verificar o texto da área de transferência",
                shortcut_info_box: "Aprenda a usar o atalho para verificar textos em todo o sistema, em todos os seus aplicativos de escrita favoritos, como Outlook, Word, PowerPoint e muitos outros.",
                learn_more: "Saiba mais"
            },
            please_note: "Por favor, observe:",
            ooxml_uploader: {
                headline: "Documento Word",
                error: "Um erro inesperado ocorreu",
                checking: "Importando e verificando …",
                hint: "Para documentos Word, as ações de edição são limitadas a pequenas alterações de texto e correções de erros para preservar a formatação original.",
                intro: "Você está prestes a editar um documento Word no LanguageTool. Antes de começar, lembre-se do seguinte:",
                style_headline: "Estilo e formatação são preservados",
                style_text: "Seu documento terá uma aparência um pouco diferente no Editor de LanguageTool. No entanto, após exportá-lo e abri-lo no Word, tudo parecerá exatamente como você o deixou.",
                limitations_headline: "A funcionalidade de edição é limitada",
                limitations_text: "Para documentos Word, o Editor permite fazer apenas pequenas alterações, como correções de erros. Isso garante que todos os estilos, tabelas e imagens sejam preservados.",
                button: "Ok, entendi",
                unsupported_file_error: "Compatível apenas com arquivos .docx. Verifique se o seu programa Word tem a opção de salvar o documento como .docx.",
                drop_hint: "Solte seu documento aqui para verificá-lo …"
            },
            referral_notice: {
                title: "Até 75% de desconto no Premium",
                description: "Convide seus amigos e colegas e ganhe descontos Premium para todos",
                invite: "Convide um amigo"
            },
            invitation_modal: {
                special: "Especial",
                headline: "Obtenha até <strong>75%</strong> de desconto para você e seus amigos",
                description: "Quanto mais amigos convidar, mais desconto você e seus colegas escritores terão. Você receberá um código de desconto personalizado em seu e-mail.",
                discount: "Desconto",
                teaser: "Obtenha um desconto de <strong>%{discount}%</strong> no Premium ao convidar <strong>%{friends}</strong> amigos",
                send: "Enviar descontos",
                placeholder: "Adicione mais um amigo para obter %{discount}% no Premium",
                placeholder_empty: "Insira um endereço de e-mail para obter %{discount}% de desconto no Premium",
                error_invalid_email: "E-mail inválido",
                error_duplicate_email: "Este e-mail já existe",
                teaser_empty: "Obtenha até <strong>%{discount}%</strong>de desconto no Premium ao convidar seus amigos",
                teaser_full: "Tudo feito! Envie os descontos para você e seus amigos."
            },
            welcome_editor: {
                headline: "Aprimore sua escrita instantaneamente",
                text: "Para corrigir seu texto, basta começar a digitar ou escolher uma das opções abaixo:",
                options: {
                    paste: "Colar da área de trabalho",
                    example_text: "Tente com um texto de exemplo",
                    example_text_sub: "Incluindo erros de ortografia e gramática",
                    example_text_button: "Inserir texto de exemplo",
                    word: "Verifique um documento do Word",
                    word_sub: "Revise seu arquivo .docx",
                    word_button: "Procurar arquivos"
                },
                back_link: "Voltar",
                paraphrasings: "Parafraseamentos",
                checking_text: "Verificando texto…",
                unlimited_paraphrasings_headline: "Você precisa de mais de três textos parafraseados por dia?",
                unlimited_paraphrasings_text: "Aproveite os parafraseamentos ilimitados e muito mais com o <b>LanguageTool Premium</b>",
                tabs: {
                    text: "Inserir texto",
                    docx: "Verificar um documento Word"
                },
                docx: {
                    processing_caption_uploading: "%{percent} % - A enviar ficheiro…",
                    processing_caption_anlyzing: "Importando e verificando arquivo…",
                    processing_description: "Dependendo do tamanho do arquivo, isso pode demorar um pouco",
                    failed_caption: "Um erro ocorreu",
                    failed_reason_processing_error: "Um erro ocorreu enquanto verificávamos seu documento.",
                    failed_reason_too_big: "O arquivo selecionado excede o tamanho máximo permitido.",
                    failed_button: "Tente novamente",
                    result_caption_has_errors: "Resultado de texto",
                    result_caption_no_errors: "Nenhum erro encontrado 🎉",
                    result_description_has_errors: "Seu texto foi analisado e <strong>%{errors} sugestão</strong> foi encontrado. Para obter informações mais detalhadas, consulte a análise abaixo.|Seu texto foi analisado e <strong>%{errors} sugestões</strong> foram encontrados. Para obter informações mais detalhadas, consulte a análise abaixo.",
                    result_description_no_errors: "Parabéns! Seu documento não contém erros. Você se considerar um escritor profissional. Verifique todos os seus textos e se beneficie de nossa correção de texto inteligente, criando uma conta gratuita no LanguageTool hoje mesmo.",
                    result_list_caption: "Sugestões",
                    result_list_spelling_info: "Quantidade de palavras potencialmente incorretas que o LanguageTool encontrou em seu texto.",
                    result_list_grammar_info: "Número de potenciais erros gramaticais que o LanguageTool encontrou no seu texto.",
                    result_list_style_info: "Ocorrências de palavras ou frases para as quais o LanguageTool tem sugestões de melhoria (p. ex, frases coloquiais, voz passiva).",
                    result_details_caption: "Atributos do documento",
                    result_cta_has_errors: "Inscreva-se para corrigir problemas",
                    result_list_punctuation_info: "Vírgulas ausentes ou incorretas, pontos de interrogação ausentes e outros problemas relacionados à pontuação.",
                    failed_reason_old_word_file: "O LanguageTool não é compatível com o formato antigo do Word (.doc). Abra este arquivo no Word do seu computador e salve-o no novo formato (.docx) antes de enviá-lo novamente.",
                    failed_reason_not_supported: "Infelizmente o formato do arquivo escolhido não é compatível. Por favor, selecione um arquivo Word (.docx).",
                    failed_reason_unknown_error: "Algo deu errado. Por favor, tente novamente.",
                    failed_reason_text_too_long_error: 'O texto no arquivo "%{fileName}" que você enviou infelizmente é muito longo para que possamos encontrar todos os problemas. Faça upload de um arquivo com menos de 150.000 caracteres.',
                    failed_reason_text_too_short_error: 'O texto no arquivo "%{fileName}" que você enviou infelizmente é muito curto para que possamos detectar seu idioma ou encontrar possíveis problemas. Faça o upload de um arquivo com pelo menos 50 caracteres.',
                    failed_reason_unsupported_language_error: "O idioma do seu documento infelizmente não é compatível com o LanguageTool. Por favor, tente com outro.",
                    upload_text: "Verifique seu arquivo do Word <b>arrastando</b> e <b>soltando</b> ou",
                    upload_headline: "Verifique sues arquivos de Word",
                    upload_description: "Verifique qualquer arquivo .docx <b>arrastando</b> e <b>soltando</b>",
                    upload_label: "Navegar pelos arquivos",
                    upload_back: "Escrever novo texto",
                    privacy_note: "Os arquivos não serão compartilhados com terceiros",
                    trust: "Milhões <strong>confiam</strong> em nós",
                    trust_by_browser: "<strong>Milhões</strong> de usuários of %{browserName} confiam",
                    trust_gdpr: "Compatível com a GDPR",
                    trust_hosting: "Hospedado na Alemanha"
                }
            },
            its_free: "É gratuito",
            correction_features: {
                headline: "Mais que o seu <strong>regular antiga correção ortográfica</strong>",
                feature_1: "<strong>Correção ortográfica avançada</strong>",
                feature_2: "Inteligente <strong>gramática</strong> e <strong>pontuação</strong> verificando",
                feature_3: "<strong>Sugestões de estilo</strong> para textos mais profissionais",
                feature_4: "<strong>Dicionário Pessoal</strong> para termos individuais",
                feature_5: "<strong>Modo Exigente</strong> para estilo e ortografia perfeitos",
                feature_6: "<strong>Sinônimos</strong> para frases alternativas",
                feature_7: "Encontra <strong>erros típicos de alemão</strong> ao escrever textos em inglês"
            },
            settings_dashboard: {
                headline: "Bem-vindo/a de volta",
                sub_headline: "Você está no campo de escritura"
            },
            settings_statistics: {
                headline: "Bem-vindo/a de volta",
                sub_headline: "Você está no caminho certo. O LanguageTool não apenas ajuda você a escrever, mas também ajuda a acompanhar sua escrita. As estatísticas serão baseadas em todos os textos que você escrever em aplicativos ou em sites compatíveis com o LanguageTool.",
                read_more: "Saiba mais",
                empty_info: "No momento, estamos coletando o primeiro lote de dados para fornecer as estatísticas mais úteis. Volte em uma semana para ver os resultados de sua primeira semana de escrita.",
                empty_info_read_more: "Saiba mais sobre as estatísticas",
                privacy_info_headline: "Valorizamos a privacidade dos seus dados",
                privacy_info_description: 'Esses dados são visíveis apenas para você. As estatísticas são coletadas pelo uso do <b>website</b>, do <b>editor</b> e dos <b>complementos</b> do LanguageTool. Para respeitar a sua privacidade, o LanguageTool armazena apenas números de uso agregados. Você pode desativar esta funcionalidade no <a href="/editor/settings/language">configurações</a>. Para mais informações, consulte nossa <a href="/legal/privacy#statistics" target="_blank"> Política de Privacidade</a>.',
                error_info: "Ocorreu um erro inesperado",
                error_reason: "Erro ao carregar os dados",
                empty_chart_info: "Ainda não há dados suficientes",
                time_frame_placeholder: "Período de tempo",
                time_frame: {
                    week: "7 dias",
                    "1_month": "30 dias",
                    "3_months": "3 meses",
                    "6_months": "6 meses",
                    year: "12 meses"
                },
                time_frame_last: {
                    week: "últimos 7 dias",
                    "1_month": "últimos 30 dias",
                    "3_months": "últimos 3 meses",
                    "6_months": "últimos 6 meses",
                    year: "último ano"
                },
                summary_card: {
                    text_written: "Textos escritos",
                    sentences_written: "Frases escritas",
                    words_written: "Palavras escritas",
                    regular_suggestions_applied: "Sugestões aceitas",
                    total_paraphrasings_applied: "Frases reformuladas",
                    premium_suggestions_applied: "Sugestões Premium aplicadas",
                    premium_suggestions_found: "Sugestões Premium encontradas",
                    more: "mais",
                    less: "menos",
                    than_the_last_week: "comparado aos últimos 7 dias",
                    than_the_last_1_month: "comparado aos últimos 30 dias",
                    than_the_last_3_months: "comparado aos últimos 3 meses",
                    than_the_last_6_months: "comparado aos últimos 6 meses",
                    than_the_last_year: "comparado aos últimos 12 meses",
                    trend: {
                        up: {
                            week: "<b>%{diff} more</b> do que na semana anterior",
                            "1_month": "<b>%{diff} mais</b> que no mês anterior",
                            "3_months": "<b>%{diff} more</b> do que nos 3 meses anteriores",
                            "6_months": "<b>%{diff} more</b> do que nos 6 meses anteriores",
                            year: "<b>%{diff} more</b> do que no ano anterior"
                        },
                        down: {
                            week: "<b>%{diff} fewer</b> do que na semana anterior",
                            "1_month": "<b>%{diff} menos</b> que no mês anterior",
                            "3_months": "<b>%{diff} fewer</b> do que os 3 meses anteriores",
                            "6_months": "<b>%{diff} fewer</b> do que os 6 meses anteriores",
                            year: "<b>%{diff} fewer</b> do que no ano anterior"
                        }
                    }
                },
                numbers_explained: {
                    headline: "Números explicados",
                    headline_empty: "Coletando dados",
                    description_empty: "Volte em alguns dias, quando tivermos tempo suficiente para coletar todos os dados que você deseja conhecer.",
                    languages_used: {
                        common: "A maior parte da sua escrita está em <b>%{first_language}</b>.",
                        week: "Outro idioma que você usou na última <b>semana</b> foi: <b>%{language}</b>.|Outros idiomas que você usou na última <b> semana </b> foram: <b>%{list_of_languages}</b>.",
                        "1_month": "Outro idioma que você usou no último <b>mês</b> foi: <b>%{language}</b>.|Outros idiomas que você usou no último <b>month</b> foram: <b>%{list_of_languages}</b>.",
                        "3_months": "Outro idioma que você usou no último <b>3 meses</b> foi: <b>%{language}</b>.|Outros idiomas que você usou no último <b>3 meses</b> foram: <b>%{list_of_languages}</b>.",
                        "6_months": "Outro idioma que você usou no último <b>6 meses</b> foi: <b>%{language}</b>.|Outros idiomas que você usou no último <b>6 meses</b> foram: <b>%{list_of_languages}</b>.",
                        year: "Outro idioma que você usou no último <b>ano</b> foi: <b>%{language}</b>.|Outros idiomas que você usou no último <b>ano</b> foram: <b>%{list_of_languages}</b>."
                    },
                    suggestions_applied: {
                        common: "O tipo de erro é <b>%{most_error_type}</b>|O tipo de erro mais comum é: <b>%{most_error_type}</b> (com o total de <b>%{most_error_count}</b>).",
                        week: "Na última <b>semana</b> o LanguageTool ajudou você a corrigir o <b>único</b> erro, que podia fazer toda a diferença.|No total, o LanguageTool ajudou você a evitar <b>%{total_error_count}</b> erros embaraçosos na última <b>semana</b>.",
                        "1_month": "No último <b>mês</b>, o LanguageTool ajudou você a corrigir um <b>único</b> erro, que podia fazer toda a diferença.|No total, o LanguageTool ajudou você a evitar <b>%{total_error_count}</b> erros embaraçosos no último <b>mês</b>.",
                        "3_months": "Nos últimos <b>3 meses</b> o LanguageTool ajudou você a corrigir o <b>único</b> erro, que podia fazer toda a diferença.|No total, o LanguageTool ajudou você a evitar <b>%{total_error_count}</b> erros embaraçosos nos últimos <b>3 meses</b>.",
                        "6_months": "Nos últimos <b>6 meses</b>, o LanguageTool ajudou você a corrigir um <b>único</b> erro, que podia fazer toda a diferença.|No total, o LanguageTool ajudou você a evitar <b>%{total_error_count}</b> erros embaraçosos nos últimos <b>6 meses</b>.um",
                        year: "No último <b>ano</b>, o LanguageTool ajudou você a corrigir um <b>único</b> erro, que podia fazer toda a diferença.|No total, o LanguageTool ajudou você a evitar <b>%{total_error_count}</b> erros embaraçosos no último <b>ano</b>."
                    },
                    writing_productivity: {
                        common: "Este é o dia em que você escreveu mais: <b>%{day}</b>.|Estes são os dias em que você escreveu mais: <b>%{list_of_days}</b>.",
                        stage_1: {
                            week: "Você mal escreveu na última <b>semana</b>.",
                            "1_month": "Você mal escreveu no último <b>mês</b>.",
                            "3_months": "Você mal escreveu nos últimos <b>3 meses</b>.",
                            "6_months": "Você mal escreveu nos últimos <b>6 meses</b>.",
                            year: "Você mal escreveu no último <b>ano</b>."
                        },
                        stage_2: {
                            week: "Você tem escrito de vez em quando na última <b>semana</b>.",
                            "1_month": "Você tem escrito de vez em quando no último <b>mês</b>.",
                            "3_months": "Você tem escrito de vez em quando nos últimos <b>3 meses</b>.",
                            "6_months": "Você tem escrito de vez em quando nos últimos <b>6 meses</b>.",
                            year: "Você tem escrito de vez em quando no último <b>ano</b>."
                        },
                        stage_3: {
                            week: "Você tem escrito com regularidade na última <b>semana</b>.",
                            "1_month": "Você tem escrito com regularidade no último <b>mês</b>.",
                            "3_months": "Você tem escrito com regularidade nos últimos <b>3 meses</b>.",
                            "6_months": "Você tem escrito com regularidade nos últimos <b>6 meses</b>.",
                            year: "Você tem escrito com regularidade no último <b>ano</b>."
                        }
                    }
                },
                languages_used_headline: "Idiomas usados",
                languages_used_description_versions: {
                    week: "Aqui mostramos quais idiomas você mais usou ao longo da última semana.",
                    "1_month": "Aqui mostramos quais idiomas você mais usou ao longo do último mês.",
                    "3_months": "Aqui mostramos quais idiomas você mais usou ao longo dos últimos 3 meses.",
                    "6_months": "Aqui mostramos quais idiomas você mais usou ao longo dos últimos 6 meses.",
                    year: "Aqui mostramos quais idiomas você mais usou ao longo do último ano."
                },
                languages_used_tooltip: "%{count} Palavras|%{count} Palavras",
                unknown_language: "Idioma desconhecido",
                suggestions_headline: "Erros evitados e melhorias aplicadas",
                suggestions_description_versions: {
                    week: "Estas são as sugestões aceitas na semana passada.",
                    "1_month": "Estas são as sugestões aceitas no último mês.",
                    "3_months": "Estas são as sugestões aceitas nos últimos 3 meses.",
                    "6_months": "Estas são as sugestões aceitas nos últimos 6 meses.",
                    year: "Estas são as sugestões aceitas no último ano."
                },
                suggestions_applied_total: "Total de sugestões aplicadas",
                suggestions_applied_last: "nos últimos %{timeframe}",
                suggestions_applied_last_week: "nos últimos 7 dias",
                suggestions_applied_last_1_month: "nos últimos 30 dias",
                suggestions_applied_last_3_months: "nos últimos 3 meses",
                suggestions_applied_last_6_months: "nos últimos 6 meses",
                suggestions_applied_last_year: "no último ano",
                suggestions_spelling: "Ortografia",
                suggestions_grammar: "Gramática",
                suggestions_punctuation: "Pontuação",
                suggestions_style: "Estilo",
                suggestions_total_number: "Total",
                percent_of_all_suggestions: "<b>%{percentage}</b> de todas as sugestões",
                writing_consistency_headline: "Produtividade na escrita",
                writing_consistency_description_versions: {
                    week: "Aqui mostramos em quais dias você mais escreveu ao longo da última semana.",
                    "1_month": "Aqui mostramos em quais dias você mais escreveu ao longo do último mês.",
                    "3_months": "Aqui mostramos em quais dias você mais escreveu ao longo dos últimos 3 meses.",
                    "6_months": "Aqui mostramos em quais dias você mais escreveu ao longo dos últimos 6 meses.",
                    year: "Aqui mostramos em quais dias você mais escreveu ao longo do último ano."
                },
                writing_consistency_legend_few_words: "poucas palavras",
                writing_consistency_legend_many_words: "muitas palavras",
                writing_consistency_total_number: "Contagem total de palavras",
                premium_title: "Apenas com Premium",
                premium_description: "Pequenos detalhes importam. Não perca as sugestões avançadas de gramática e estilo do LanguageTool.",
                premium_headline_versions: {
                    week: "Você não aproveitou %{count} sugestões Premium durante a última semana|Você não aproveitou %{count} sugestões Premium durante a última semana",
                    "1_month": "Você não aproveitou %{count} sugestões Premium durante o último mês|Você não aproveitou %{count} sugestões Premium durante o último mês",
                    "3_months": "Você não aproveitou %{count} sugestões Premium durante os últimos 3 meses|Você não aproveitou %{count} sugestões Premium durante os últimos 3 meses",
                    "6_months": "Você não aproveitou %{count} sugestões Premium durante os últimos 6 meses|Você não aproveitou %{count} sugestões Premium durante os últimos 6 meses",
                    year: "Você não aproveitou %{count} sugestões Premium durante o último ano|Você não aproveitou %{count} sugestões Premium durante o último ano"
                },
                premium_read_more: "Saiba mais sobre o Premium"
            },
            settings_tips: {
                headline_getting_started: "Começando no LanguageTool",
                headline_whats_new: "Quais são as novidades do LanguageTool?",
                read_more: "Leia mais",
                headline_improve_writing: "Dicas de escrita",
                see_all_product_updates: "Veja todas as atualizações do produto",
                see_all_articles: "Ver todos os artigos",
                load_more: "Carregar mais",
                error_rss_connect: "Ocorreu um erro ao carregar os artigos do blog",
                error_rss_empty: "Não existem artigos de blog neste momento"
            },
            shortcut_onboarding_notice: {
                title: "Use o LanguageTool em todo o sistema",
                description: "Verifique seus textos de todos os seus aplicativos favoritos com um simples pressionar de tecla",
                learn_how: "Saiba mais"
            },
            shortcut_onboarding_modal: {
                headline: "Essa é a forma de usar o LanguageTool em todo o sistema",
                description: "Siga estes quatro passos e nunca mais deixe passar um erro de digitação embaraçoso. Não importa onde você escreva.",
                step_1: {
                    headline: "Escreva seu texto como de costume",
                    description: "Abra sua caixa de e-mail ou editor de texto de sua escolha e comece a digitar como costuma fazer."
                },
                step_2: {
                    headline: "Selecione o texto e pressione %{shortcut}",
                    description: "Selecione a parte do texto que você deseja verificar e use o atalho em todo o sistema para abri-lo no LanguageTool.",
                    set_shortcut: "Defina seu atalho personalizado",
                    headline_default: "Selecione o texto e pressione o atalho"
                },
                step_3: {
                    headline: "Corrija seu texto com o LanguageTool",
                    description: "O LanguageTool oferece um ambiente de escrita sem distrações projetado para resolver seus erros de maneira eficiente e confiável."
                },
                step_4: {
                    headline: "Colar o texto de volta",
                    description: "Pressione o botão Colar-Voltar no Editor do LanguageTool para transferir suas correções para o texto inicial."
                },
                cta: "Iniciar",
                info: "Você pode encontrar sempre esse tutorial nas configurações do aplicativo"
            },
            dictionary_import_modal: {
                headline: "Importar dicionário como CSV",
                step_1: "Passo 1",
                step_1_description: "Baixe o dicionário existente. Todas as suas frases existentes serão preenchidas previamente no modelo.",
                step_1_short: "Baixar dicionário existente como CSV",
                download_existing_dictionary: "Baixar dicionário existente",
                step_2: "Passo 2",
                step_2_description: "Adicione novas frases ou exclua as existentes que você já não deseja usar.",
                step_2_short: "Atualizar regras no arquivo",
                step_3: "Passo 3",
                step_3_description: "Carregue o dicionário ajustado como CSV.",
                step_3_short: "Carregar CSV modificado",
                notice: "Observação: se você carregar um CSV que não contenha suas frases existentes, essas frases serão excluídas.",
                cancel: "Cancelar",
                upload: "Carregar CSV",
                confirmation: "O dicionário existente será substituído. Tem certeza que deseja continuar?",
                example_phrase: "Frase %{number}",
                download_example_dictionary: "Baixar arquivo de exemplo"
            },
            "style-guide_import_modal": {
                headline: "Usar CSV de regras existentes",
                step_1: "Passo 1",
                step_1_description: "Baixe o CSV de regras. Se você já criou regras de estilo, elas serão pré-preenchidas no modelo.",
                step_1_short: "Baixar o Guia de Estilo existente como CSV",
                "download_existing_style-guide": "Baixar o Guia de Estilo existente",
                step_2: "Passo 2",
                step_2_description: "Adicione novas regras ou exclua as regras existentes que você não deseja mais usar.",
                step_2_short: "Atualizar Guia de Estilo no arquivo",
                step_3: "Passo 3",
                step_3_description: "Carregue o CSV para importar todas as regras de estilo.",
                step_3_short: "Carregar CSV modificado",
                notice: "Observação: se você carregar um CSV que não contenha suas regras existentes, essas regras serão excluídas.",
                cancel: "Cancelar",
                upload: "Carregar CSV"
            },
            "style-guide_add_modal": {
                headline: "Criar nova regra",
                pattern_label: "Padrão",
                pattern_placeholder: "Frase a substituir",
                pattern_tooltip: "Insira a frase que deve ser substituída",
                suggestions_label: "Substituições",
                description_label: "Descrição completa",
                description_placeholder: "Digite aqui here a descrição da sua regra",
                add_new_suggestion_placeholder: "Adicionar nova substituição",
                url_label: "Link",
                url_placeholder: "URL",
                url_tooltip: "Insira um URL referenciando a regra",
                preview: "Visualizar",
                cancel: "Cancelar",
                add_rule: "Adicione nova regra"
            },
            "style-guide_edit_modal": {
                headline: "Editar regra",
                cancel: "Cancelar",
                update_rule: "Atualizar regra de estilo"
            },
            tooltips: {
                all_texts: "Todos os textos",
                change_language: "Mudar idioma",
                all_suggestions: "Todas as sugestões",
                more_options: "Mais opções",
                next_suggestion: "Próxima sugestão",
                previous_suggestion: "Sugestão anterior",
                all_settings: "Todas as configurações",
                hide_all_texts: "Ocultar todos os textos",
                hide_all_suggestions: "Ocultar todas as sugestões",
                hide_all_settings: "Ocultar todas as configurações",
                hide_suggestions: "Ocultar sugestões",
                open_keyboard: "Abrir o teclado"
            },
            dock: {
                texts: "Textos",
                statistics: "Estatísticas",
                settings: "Opções",
                new_text: "Próximo texto",
                account: "Conta"
            },
            limited_time_discount: {
                title: "Obtenha %{discount} no Premium",
                description: "Leve sua escrita para um nível mais elevado e receba um desconto exclusivo por tempo limitado.",
                cta: "Peça agora seu desconto"
            },
            upgrade_to_premium: "Obtenha o Premium"
        }
    }
    ,
    27061: e=>{
        var t, n, r = e.exports = {};
        function o() {
            throw new Error("setTimeout has not been defined")
        }
        function s() {
            throw new Error("clearTimeout has not been defined")
        }
        function a(e) {
            if (t === setTimeout)
                return setTimeout(e, 0);
            if ((t === o || !t) && setTimeout)
                return t = setTimeout,
                setTimeout(e, 0);
            try {
                return t(e, 0)
            } catch (n) {
                try {
                    return t.call(null, e, 0)
                } catch (n) {
                    return t.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                t = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                t = o
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                n = s
            }
        }();
        var i, c = [], l = !1, d = -1;
        function u() {
            l && i && (l = !1,
            i.length ? c = i.concat(c) : d = -1,
            c.length && p())
        }
        function p() {
            if (!l) {
                var e = a(u);
                l = !0;
                for (var t = c.length; t; ) {
                    for (i = c,
                    c = []; ++d < t; )
                        i && i[d].run();
                    d = -1,
                    t = c.length
                }
                i = null,
                l = !1,
                function(e) {
                    if (n === clearTimeout)
                        return clearTimeout(e);
                    if ((n === s || !n) && clearTimeout)
                        return n = clearTimeout,
                        clearTimeout(e);
                    try {
                        return n(e)
                    } catch (t) {
                        try {
                            return n.call(null, e)
                        } catch (t) {
                            return n.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function h(e, t) {
            this.fun = e,
            this.array = t
        }
        function _() {}
        r.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            c.push(new h(e,t)),
            1 !== c.length || l || a(p)
        }
        ,
        h.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        r.title = "browser",
        r.browser = !0,
        r.env = {},
        r.argv = [],
        r.version = "",
        r.versions = {},
        r.on = _,
        r.addListener = _,
        r.once = _,
        r.off = _,
        r.removeListener = _,
        r.removeAllListeners = _,
        r.emit = _,
        r.prependListener = _,
        r.prependOnceListener = _,
        r.listeners = function(e) {
            return []
        }
        ,
        r.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        r.cwd = function() {
            return "/"
        }
        ,
        r.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        r.umask = function() {
            return 0
        }
    }
    ,
    73323: (e,t)=>{
        "use strict";
        /**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        function n(e, t) {
            var n = e.length;
            e.push(t);
            e: for (; 0 < n; ) {
                var r = n - 1 >>> 1
                  , o = e[r];
                if (!(0 < s(o, t)))
                    break e;
                e[r] = t,
                e[n] = o,
                n = r
            }
        }
        function r(e) {
            return 0 === e.length ? null : e[0]
        }
        function o(e) {
            if (0 === e.length)
                return null;
            var t = e[0]
              , n = e.pop();
            if (n !== t) {
                e[0] = n;
                e: for (var r = 0, o = e.length, a = o >>> 1; r < a; ) {
                    var i = 2 * (r + 1) - 1
                      , c = e[i]
                      , l = i + 1
                      , d = e[l];
                    if (0 > s(c, n))
                        l < o && 0 > s(d, c) ? (e[r] = d,
                        e[l] = n,
                        r = l) : (e[r] = c,
                        e[i] = n,
                        r = i);
                    else {
                        if (!(l < o && 0 > s(d, n)))
                            break e;
                        e[r] = d,
                        e[l] = n,
                        r = l
                    }
                }
            }
            return t
        }
        function s(e, t) {
            var n = e.sortIndex - t.sortIndex;
            return 0 !== n ? n : e.id - t.id
        }
        if ("object" == typeof performance && "function" == typeof performance.now) {
            var a = performance;
            t.unstable_now = function() {
                return a.now()
            }
        } else {
            var i = Date
              , c = i.now();
            t.unstable_now = function() {
                return i.now() - c
            }
        }
        var l = []
          , d = []
          , u = 1
          , p = null
          , h = 3
          , _ = !1
          , m = !1
          , g = !1
          , f = "function" == typeof setTimeout ? setTimeout : null
          , y = "function" == typeof clearTimeout ? clearTimeout : null
          , v = "undefined" != typeof setImmediate ? setImmediate : null;
        function b(e) {
            for (var t = r(d); null !== t; ) {
                if (null === t.callback)
                    o(d);
                else {
                    if (!(t.startTime <= e))
                        break;
                    o(d),
                    t.sortIndex = t.expirationTime,
                    n(l, t)
                }
                t = r(d)
            }
        }
        function x(e) {
            if (g = !1,
            b(e),
            !m)
                if (null !== r(l))
                    m = !0,
                    R(w);
                else {
                    var t = r(d);
                    null !== t && O(x, t.startTime - e)
                }
        }
        function w(e, n) {
            m = !1,
            g && (g = !1,
            y(k),
            k = -1),
            _ = !0;
            var s = h;
            try {
                for (b(n),
                p = r(l); null !== p && (!(p.expirationTime > n) || e && !C()); ) {
                    var a = p.callback;
                    if ("function" == typeof a) {
                        p.callback = null,
                        h = p.priorityLevel;
                        var i = a(p.expirationTime <= n);
                        n = t.unstable_now(),
                        "function" == typeof i ? p.callback = i : p === r(l) && o(l),
                        b(n)
                    } else
                        o(l);
                    p = r(l)
                }
                if (null !== p)
                    var c = !0;
                else {
                    var u = r(d);
                    null !== u && O(x, u.startTime - n),
                    c = !1
                }
                return c
            } finally {
                p = null,
                h = s,
                _ = !1
            }
        }
        "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var E, S = !1, T = null, k = -1, j = 5, N = -1;
        function C() {
            return !(t.unstable_now() - N < j)
        }
        function P() {
            if (null !== T) {
                var e = t.unstable_now();
                N = e;
                var n = !0;
                try {
                    n = T(!0, e)
                } finally {
                    n ? E() : (S = !1,
                    T = null)
                }
            } else
                S = !1
        }
        if ("function" == typeof v)
            E = function() {
                v(P)
            }
            ;
        else if ("undefined" != typeof MessageChannel) {
            var A = new MessageChannel
              , L = A.port2;
            A.port1.onmessage = P,
            E = function() {
                L.postMessage(null)
            }
        } else
            E = function() {
                f(P, 0)
            }
            ;
        function R(e) {
            T = e,
            S || (S = !0,
            E())
        }
        function O(e, n) {
            k = f((function() {
                e(t.unstable_now())
            }
            ), n)
        }
        t.unstable_IdlePriority = 5,
        t.unstable_ImmediatePriority = 1,
        t.unstable_LowPriority = 4,
        t.unstable_NormalPriority = 3,
        t.unstable_Profiling = null,
        t.unstable_UserBlockingPriority = 2,
        t.unstable_cancelCallback = function(e) {
            e.callback = null
        }
        ,
        t.unstable_continueExecution = function() {
            m || _ || (m = !0,
            R(w))
        }
        ,
        t.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < e ? Math.floor(1e3 / e) : 5
        }
        ,
        t.unstable_getCurrentPriorityLevel = function() {
            return h
        }
        ,
        t.unstable_getFirstCallbackNode = function() {
            return r(l)
        }
        ,
        t.unstable_next = function(e) {
            switch (h) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = h
            }
            var n = h;
            h = t;
            try {
                return e()
            } finally {
                h = n
            }
        }
        ,
        t.unstable_pauseExecution = function() {}
        ,
        t.unstable_requestPaint = function() {}
        ,
        t.unstable_runWithPriority = function(e, t) {
            switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
            }
            var n = h;
            h = e;
            try {
                return t()
            } finally {
                h = n
            }
        }
        ,
        t.unstable_scheduleCallback = function(e, o, s) {
            var a = t.unstable_now();
            switch ("object" == typeof s && null !== s ? s = "number" == typeof (s = s.delay) && 0 < s ? a + s : a : s = a,
            e) {
            case 1:
                var i = -1;
                break;
            case 2:
                i = 250;
                break;
            case 5:
                i = 1073741823;
                break;
            case 4:
                i = 1e4;
                break;
            default:
                i = 5e3
            }
            return e = {
                id: u++,
                callback: o,
                priorityLevel: e,
                startTime: s,
                expirationTime: i = s + i,
                sortIndex: -1
            },
            s > a ? (e.sortIndex = s,
            n(d, e),
            null === r(l) && e === r(d) && (g ? (y(k),
            k = -1) : g = !0,
            O(x, s - a))) : (e.sortIndex = i,
            n(l, e),
            m || _ || (m = !0,
            R(w))),
            e
        }
        ,
        t.unstable_shouldYield = C,
        t.unstable_wrapCallback = function(e) {
            var t = h;
            return function() {
                var n = h;
                h = t;
                try {
                    return e.apply(this, arguments)
                } finally {
                    h = n
                }
            }
        }
    }
    ,
    91102: (e,t,n)=>{
        "use strict";
        e.exports = n(73323)
    }
    ,
    25773: (e,t,n)=>{
        "use strict";
        function r() {
            return r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            r.apply(this, arguments)
        }
        n.d(t, {
            Z: ()=>r
        })
    }
    ,
    43431: (e,t,n)=>{
        "use strict";
        n.d(t, {
            AG: ()=>v,
            IM: ()=>E,
            IX: ()=>_,
            O7: ()=>m,
            Rx: ()=>b,
            Ry: ()=>x,
            Yl: ()=>f,
            Z_: ()=>S,
            hu: ()=>d,
            jt: ()=>w,
            kE: ()=>g
        });
        class r extends TypeError {
            constructor(e, t) {
                let n;
                const {message: r, explanation: o, ...s} = e
                  , {path: a} = e
                  , i = 0 === a.length ? r : `At path: ${a.join(".")} -- ${r}`;
                super(o ?? i),
                null != o && (this.cause = i),
                Object.assign(this, s),
                this.name = this.constructor.name,
                this.failures = ()=>n ?? (n = [e, ...t()])
            }
        }
        function o(e) {
            return "object" == typeof e && null != e
        }
        function s(e) {
            return "symbol" == typeof e ? e.toString() : "string" == typeof e ? JSON.stringify(e) : `${e}`
        }
        function a(e, t, n, r) {
            if (!0 === e)
                return;
            !1 === e ? e = {} : "string" == typeof e && (e = {
                message: e
            });
            const {path: o, branch: a} = t
              , {type: i} = n
              , {refinement: c, message: l=`Expected a value of type \`${i}\`${c ? ` with refinement \`${c}\`` : ""}, but received: \`${s(r)}\``} = e;
            return {
                value: r,
                type: i,
                refinement: c,
                key: o[o.length - 1],
                path: o,
                branch: a,
                ...e,
                message: l
            }
        }
        function *i(e, t, n, r) {
            var s;
            o(s = e) && "function" == typeof s[Symbol.iterator] || (e = [e]);
            for (const o of e) {
                const e = a(o, t, n, r);
                e && (yield e)
            }
        }
        function *c(e, t, n={}) {
            const {path: r=[], branch: s=[e], coerce: a=!1, mask: i=!1} = n
              , l = {
                path: r,
                branch: s
            };
            if (a && (e = t.coercer(e, l),
            i && "type" !== t.type && o(t.schema) && o(e) && !Array.isArray(e)))
                for (const n in e)
                    void 0 === t.schema[n] && delete e[n];
            let d = "valid";
            for (const r of t.validator(e, l))
                r.explanation = n.message,
                d = "not_valid",
                yield[r, void 0];
            for (let[u,p,h] of t.entries(e, l)) {
                const t = c(p, h, {
                    path: void 0 === u ? r : [...r, u],
                    branch: void 0 === u ? s : [...s, p],
                    coerce: a,
                    mask: i,
                    message: n.message
                });
                for (const n of t)
                    n[0] ? (d = null != n[0].refinement ? "not_refined" : "not_valid",
                    yield[n[0], void 0]) : a && (p = n[1],
                    void 0 === u ? e = p : e instanceof Map ? e.set(u, p) : e instanceof Set ? e.add(p) : o(e) && (void 0 !== p || u in e) && (e[u] = p))
            }
            if ("not_valid" !== d)
                for (const r of t.refiner(e, l))
                    r.explanation = n.message,
                    d = "not_refined",
                    yield[r, void 0];
            "valid" === d && (yield[void 0, e])
        }
        class l {
            constructor(e) {
                const {type: t, schema: n, validator: r, refiner: o, coercer: s=(e=>e), entries: a=function*() {}
                } = e;
                this.type = t,
                this.schema = n,
                this.entries = a,
                this.coercer = s,
                this.validator = r ? (e,t)=>i(r(e, t), t, this, e) : ()=>[],
                this.refiner = o ? (e,t)=>i(o(e, t), t, this, e) : ()=>[]
            }
            assert(e, t) {
                return d(e, this, t)
            }
            create(e, t) {
                return function(e, t, n) {
                    const r = p(e, t, {
                        coerce: !0,
                        message: n
                    });
                    if (r[0])
                        throw r[0];
                    return r[1]
                }(e, this, t)
            }
            is(e) {
                return u(e, this)
            }
            mask(e, t) {
                return function(e, t, n) {
                    const r = p(e, t, {
                        coerce: !0,
                        mask: !0,
                        message: n
                    });
                    if (r[0])
                        throw r[0];
                    return r[1]
                }(e, this, t)
            }
            validate(e, t={}) {
                return p(e, this, t)
            }
        }
        function d(e, t, n) {
            const r = p(e, t, {
                message: n
            });
            if (r[0])
                throw r[0]
        }
        function u(e, t) {
            return !p(e, t)[0]
        }
        function p(e, t, n={}) {
            const o = c(e, t, n)
              , s = function(e) {
                const {done: t, value: n} = e.next();
                return t ? void 0 : n
            }(o);
            if (s[0]) {
                return [new r(s[0],(function*() {
                    for (const e of o)
                        e[0] && (yield e[0])
                }
                )), void 0]
            }
            return [void 0, s[1]]
        }
        function h(e, t) {
            return new l({
                type: e,
                schema: null,
                validator: t
            })
        }
        function _(e) {
            return new l({
                type: "array",
                schema: e,
                *entries(t) {
                    if (e && Array.isArray(t))
                        for (const [n,r] of t.entries())
                            yield[n, r, e]
                },
                coercer: e=>Array.isArray(e) ? e.slice() : e,
                validator: e=>Array.isArray(e) || `Expected an array value, but received: ${s(e)}`
            })
        }
        function m() {
            return h("boolean", (e=>"boolean" == typeof e))
        }
        function g(e) {
            const t = {}
              , n = e.map((e=>s(e))).join();
            for (const n of e)
                t[n] = n;
            return new l({
                type: "enums",
                schema: t,
                validator: t=>e.includes(t) || `Expected one of \`${n}\`, but received: ${s(t)}`
            })
        }
        function f() {
            return h("func", (e=>"function" == typeof e || `Expected a function, but received: ${s(e)}`))
        }
        function y() {
            return h("never", (()=>!1))
        }
        function v(e) {
            return new l({
                ...e,
                validator: (t,n)=>null === t || e.validator(t, n),
                refiner: (t,n)=>null === t || e.refiner(t, n)
            })
        }
        function b() {
            return h("number", (e=>"number" == typeof e && !isNaN(e) || `Expected a number, but received: ${s(e)}`))
        }
        function x(e) {
            const t = e ? Object.keys(e) : []
              , n = y();
            return new l({
                type: "object",
                schema: e || null,
                *entries(r) {
                    if (e && o(r)) {
                        const o = new Set(Object.keys(r));
                        for (const n of t)
                            o.delete(n),
                            yield[n, r[n], e[n]];
                        for (const e of o)
                            yield[e, r[e], n]
                    }
                },
                validator: e=>o(e) || `Expected an object, but received: ${s(e)}`,
                coercer: e=>o(e) ? {
                    ...e
                } : e
            })
        }
        function w(e) {
            return new l({
                ...e,
                validator: (t,n)=>void 0 === t || e.validator(t, n),
                refiner: (t,n)=>void 0 === t || e.refiner(t, n)
            })
        }
        function E(e, t) {
            return new l({
                type: "record",
                schema: null,
                *entries(n) {
                    if (o(n))
                        for (const r in n) {
                            const o = n[r];
                            yield[r, r, e],
                            yield[r, o, t]
                        }
                },
                validator: e=>o(e) || `Expected an object, but received: ${s(e)}`
            })
        }
        function S() {
            return h("string", (e=>"string" == typeof e || `Expected a string, but received: ${s(e)}`))
        }
    }
    ,
    92215: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>s
        });
        var r = !0
          , o = "Invariant failed";
        function s(e, t) {
            if (!e) {
                if (r)
                    throw new Error(o);
                var n = "function" == typeof t ? t() : t
                  , s = n ? "".concat(o, ": ").concat(n) : o;
                throw new Error(s)
            }
        }
    }
}, e=>{
    e.O(0, [9335], (()=>{
        return t = 50448,
        e(e.s = t);
        var t
    }
    ));
    e.O()
}
]);
