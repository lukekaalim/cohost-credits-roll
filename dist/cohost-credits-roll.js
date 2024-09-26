var z, d, Fe, A, be, Ie, te, ae, re, ne, H = {}, je = [], et = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, fe = Array.isArray;
function C(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function Re(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function S(t, e, r) {
  var n, o, i, u = {};
  for (i in e)
    i == "key" ? n = e[i] : i == "ref" ? o = e[i] : u[i] = e[i];
  if (arguments.length > 2 && (u.children = arguments.length > 3 ? z.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      u[i] === void 0 && (u[i] = t.defaultProps[i]);
  return N(t, u, n, o, null);
}
function N(t, e, r, n, o) {
  var i = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++Fe, __i: -1, __u: 0 };
  return o == null && d.vnode != null && d.vnode(i), i;
}
function G(t) {
  return t.children;
}
function B(t, e) {
  this.props = t, this.context = e;
}
function T(t, e) {
  if (e == null)
    return t.__ ? T(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null)
      return r.__e;
  return typeof t.type == "function" ? T(t) : null;
}
function De(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return De(t);
  }
}
function me(t) {
  (!t.__d && (t.__d = !0) && A.push(t) && !V.__r++ || be !== d.debounceRendering) && ((be = d.debounceRendering) || Ie)(V);
}
function V() {
  var t, e, r, n, o, i, u, _;
  for (A.sort(te); t = A.shift(); )
    t.__d && (e = A.length, n = void 0, i = (o = (r = t).__v).__e, u = [], _ = [], r.__P && ((n = C({}, o)).__v = o.__v + 1, d.vnode && d.vnode(n), pe(r.__P, n, o, r.__n, r.__P.namespaceURI, 32 & o.__u ? [i] : null, u, i ?? T(o), !!(32 & o.__u), _), n.__v = o.__v, n.__.__k[n.__i] = n, Be(u, n, _), n.__e != i && De(n)), A.length > e && A.sort(te));
  V.__r = 0;
}
function Le(t, e, r, n, o, i, u, _, c, l, f) {
  var s, p, a, m, v, w = n && n.__k || je, h = e.length;
  for (r.__d = c, tt(r, e, w), c = r.__d, s = 0; s < h; s++)
    (a = r.__k[s]) != null && (p = a.__i === -1 ? H : w[a.__i] || H, a.__i = s, pe(t, a, p, o, i, u, _, c, l, f), m = a.__e, a.ref && p.ref != a.ref && (p.ref && he(p.ref, null, a), f.push(a.ref, a.__c || m, a)), v == null && m != null && (v = m), 65536 & a.__u || p.__k === a.__k ? c = Ne(a, c, t) : typeof a.type == "function" && a.__d !== void 0 ? c = a.__d : m && (c = m.nextSibling), a.__d = void 0, a.__u &= -196609);
  r.__d = c, r.__e = v;
}
function tt(t, e, r) {
  var n, o, i, u, _, c = e.length, l = r.length, f = l, s = 0;
  for (t.__k = [], n = 0; n < c; n++)
    (o = e[n]) != null && typeof o != "boolean" && typeof o != "function" ? (u = n + s, (o = t.__k[n] = typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? N(null, o, null, null, null) : fe(o) ? N(G, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? N(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = t, o.__b = t.__b + 1, i = null, (_ = o.__i = rt(o, r, u, f)) !== -1 && (f--, (i = r[_]) && (i.__u |= 131072)), i == null || i.__v === null ? (_ == -1 && s--, typeof o.type != "function" && (o.__u |= 65536)) : _ !== u && (_ == u - 1 ? s-- : _ == u + 1 ? s++ : (_ > u ? s-- : s++, o.__u |= 65536))) : o = t.__k[n] = null;
  if (f)
    for (n = 0; n < l; n++)
      (i = r[n]) != null && !(131072 & i.__u) && (i.__e == t.__d && (t.__d = T(i)), We(i, i));
}
function Ne(t, e, r) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = 0; n && o < n.length; o++)
      n[o] && (n[o].__ = t, e = Ne(n[o], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !r.contains(e) && (e = T(t)), r.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function rt(t, e, r, n) {
  var o = t.key, i = t.type, u = r - 1, _ = r + 1, c = e[r];
  if (c === null || c && o == c.key && i === c.type && !(131072 & c.__u))
    return r;
  if (n > (c != null && !(131072 & c.__u) ? 1 : 0))
    for (; u >= 0 || _ < e.length; ) {
      if (u >= 0) {
        if ((c = e[u]) && !(131072 & c.__u) && o == c.key && i === c.type)
          return u;
        u--;
      }
      if (_ < e.length) {
        if ((c = e[_]) && !(131072 & c.__u) && o == c.key && i === c.type)
          return _;
        _++;
      }
    }
  return -1;
}
function ge(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || et.test(e) ? r : r + "px";
}
function D(t, e, r, n, o) {
  var i;
  e:
    if (e === "style")
      if (typeof r == "string")
        t.style.cssText = r;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (e in n)
            r && e in r || ge(t.style, e, "");
        if (r)
          for (e in r)
            n && r[e] === n[e] || ge(t.style, e, r[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      i = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in t || e === "onFocusOut" || e === "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = r, r ? n ? r.u = n.u : (r.u = ae, t.addEventListener(e, i ? ne : re, i)) : t.removeEventListener(e, i ? ne : re, i);
    else {
      if (o == "http://www.w3.org/2000/svg")
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t)
        try {
          t[e] = r ?? "";
          break e;
        } catch {
        }
      typeof r == "function" || (r == null || r === !1 && e[4] !== "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && r == 1 ? "" : r));
    }
}
function we(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e.t == null)
        e.t = ae++;
      else if (e.t < r.u)
        return;
      return r(d.event ? d.event(e) : e);
    }
  };
}
function pe(t, e, r, n, o, i, u, _, c, l) {
  var f, s, p, a, m, v, w, h, y, $, P, I, U, ye, j, K, k = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & r.__u && (c = !!(32 & r.__u), i = [_ = e.__e = r.__e]), (f = d.__b) && f(e);
  e:
    if (typeof k == "function")
      try {
        if (h = e.props, y = "prototype" in k && k.prototype.render, $ = (f = k.contextType) && n[f.__c], P = f ? $ ? $.props.value : f.__ : n, r.__c ? w = (s = e.__c = r.__c).__ = s.__E : (y ? e.__c = s = new k(h, P) : (e.__c = s = new B(h, P), s.constructor = k, s.render = ot), $ && $.sub(s), s.props = h, s.state || (s.state = {}), s.context = P, s.__n = n, p = s.__d = !0, s.__h = [], s._sb = []), y && s.__s == null && (s.__s = s.state), y && k.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = C({}, s.__s)), C(s.__s, k.getDerivedStateFromProps(h, s.__s))), a = s.props, m = s.state, s.__v = e, p)
          y && k.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), y && s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y && k.getDerivedStateFromProps == null && h !== a && s.componentWillReceiveProps != null && s.componentWillReceiveProps(h, P), !s.__e && (s.shouldComponentUpdate != null && s.shouldComponentUpdate(h, s.__s, P) === !1 || e.__v === r.__v)) {
            for (e.__v !== r.__v && (s.props = h, s.state = s.__s, s.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(R) {
              R && (R.__ = e);
            }), I = 0; I < s._sb.length; I++)
              s.__h.push(s._sb[I]);
            s._sb = [], s.__h.length && u.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(h, s.__s, P), y && s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(a, m, v);
          });
        }
        if (s.context = P, s.props = h, s.__P = t, s.__e = !1, U = d.__r, ye = 0, y) {
          for (s.state = s.__s, s.__d = !1, U && U(e), f = s.render(s.props, s.state, s.context), j = 0; j < s._sb.length; j++)
            s.__h.push(s._sb[j]);
          s._sb = [];
        } else
          do
            s.__d = !1, U && U(e), f = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++ye < 25);
        s.state = s.__s, s.getChildContext != null && (n = C(C({}, n), s.getChildContext())), y && !p && s.getSnapshotBeforeUpdate != null && (v = s.getSnapshotBeforeUpdate(a, m)), Le(t, fe(K = f != null && f.type === G && f.key == null ? f.props.children : f) ? K : [K], e, r, n, o, i, u, _, c, l), s.base = e.__e, e.__u &= -161, s.__h.length && u.push(s), w && (s.__E = s.__ = null);
      } catch (R) {
        if (e.__v = null, c || i != null) {
          for (e.__u |= c ? 160 : 32; _ && _.nodeType === 8 && _.nextSibling; )
            _ = _.nextSibling;
          i[i.indexOf(_)] = null, e.__e = _;
        } else
          e.__e = r.__e, e.__k = r.__k;
        d.__e(R, e, r);
      }
    else
      i == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = nt(r.__e, e, r, n, o, i, u, c, l);
  (f = d.diffed) && f(e);
}
function Be(t, e, r) {
  e.__d = void 0;
  for (var n = 0; n < r.length; n++)
    he(r[n], r[++n], r[++n]);
  d.__c && d.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      d.__e(i, o.__v);
    }
  });
}
function nt(t, e, r, n, o, i, u, _, c) {
  var l, f, s, p, a, m, v, w = r.props, h = e.props, y = e.type;
  if (y === "svg" ? o = "http://www.w3.org/2000/svg" : y === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (l = 0; l < i.length; l++)
      if ((a = i[l]) && "setAttribute" in a == !!y && (y ? a.localName === y : a.nodeType === 3)) {
        t = a, i[l] = null;
        break;
      }
  }
  if (t == null) {
    if (y === null)
      return document.createTextNode(h);
    t = document.createElementNS(o, y, h.is && h), _ && (d.__m && d.__m(e, i), _ = !1), i = null;
  }
  if (y === null)
    w === h || _ && t.data === h || (t.data = h);
  else {
    if (i = i && z.call(t.childNodes), w = r.props || H, !_ && i != null)
      for (w = {}, l = 0; l < t.attributes.length; l++)
        w[(a = t.attributes[l]).name] = a.value;
    for (l in w)
      if (a = w[l], l != "children") {
        if (l == "dangerouslySetInnerHTML")
          s = a;
        else if (!(l in h)) {
          if (l == "value" && "defaultValue" in h || l == "checked" && "defaultChecked" in h)
            continue;
          D(t, l, null, a, o);
        }
      }
    for (l in h)
      a = h[l], l == "children" ? p = a : l == "dangerouslySetInnerHTML" ? f = a : l == "value" ? m = a : l == "checked" ? v = a : _ && typeof a != "function" || w[l] === a || D(t, l, a, w[l], o);
    if (f)
      _ || s && (f.__html === s.__html || f.__html === t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
    else if (s && (t.innerHTML = ""), Le(t, fe(p) ? p : [p], e, r, n, y === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, u, i ? i[0] : r.__k && T(r, 0), _, c), i != null)
      for (l = i.length; l--; )
        Re(i[l]);
    _ || (l = "value", y === "progress" && m == null ? t.removeAttribute("value") : m !== void 0 && (m !== t[l] || y === "progress" && !m || y === "option" && m !== w[l]) && D(t, l, m, w[l], o), l = "checked", v !== void 0 && v !== t[l] && D(t, l, v, w[l], o));
  }
  return t;
}
function he(t, e, r) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else
      t.current = e;
  } catch (o) {
    d.__e(o, r);
  }
}
function We(t, e, r) {
  var n, o;
  if (d.unmount && d.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || he(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (i) {
        d.__e(i, e);
      }
    n.base = n.__P = null;
  }
  if (n = t.__k)
    for (o = 0; o < n.length; o++)
      n[o] && We(n[o], e, r || typeof t.type != "function");
  r || Re(t.__e), t.__c = t.__ = t.__e = t.__d = void 0;
}
function ot(t, e, r) {
  return this.constructor(t, r);
}
function it(t, e, r) {
  var n, o, i, u;
  d.__ && d.__(t, e), o = (n = typeof r == "function") ? null : r && r.__k || e.__k, i = [], u = [], pe(e, t = (!n && r || e).__k = S(G, null, [t]), o || H, H, e.namespaceURI, !n && r ? [r] : o ? null : e.firstChild ? z.call(e.childNodes) : null, i, !n && r ? r : o ? o.__e : e.firstChild, n, u), Be(i, t, u);
}
z = je.slice, d = { __e: function(t, e, r, n) {
  for (var o, i, u; e = e.__; )
    if ((o = e.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), u = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), u = o.__d), u)
          return o.__E = o;
      } catch (_) {
        t = _;
      }
  throw t;
} }, Fe = 0, B.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = C({}, this.state), typeof t == "function" && (t = t(C({}, r), this.props)), t && C(r, t), t != null && this.__v && (e && this._sb.push(e), me(this));
}, B.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), me(this));
}, B.prototype.render = G, A = [], Ie = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, te = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, V.__r = 0, ae = 0, re = we(!1), ne = we(!0);
var M, b, Q, Se, Y = 0, qe = [], g = d, ke = g.__b, Ee = g.__r, xe = g.diffed, Pe = g.__c, Ce = g.unmount, Ae = g.__;
function de(t, e) {
  g.__h && g.__h(b, t, Y || e), Y = 0;
  var r = b.__H || (b.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function Ve(t) {
  return Y = 1, st(ze, t);
}
function st(t, e, r) {
  var n = de(M++, 2);
  if (n.t = t, !n.__c && (n.__ = [r ? r(e) : ze(void 0, e), function(_) {
    var c = n.__N ? n.__N[0] : n.__[0], l = n.t(c, _);
    c !== l && (n.__N = [l, n.__[1]], n.__c.setState({}));
  }], n.__c = b, !b.u)) {
    var o = function(_, c, l) {
      if (!n.__c.__H)
        return !0;
      var f = n.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (f.every(function(p) {
        return !p.__N;
      }))
        return !i || i.call(this, _, c, l);
      var s = !1;
      return f.forEach(function(p) {
        if (p.__N) {
          var a = p.__[0];
          p.__ = p.__N, p.__N = void 0, a !== p.__[0] && (s = !0);
        }
      }), !(!s && n.__c.props === _) && (!i || i.call(this, _, c, l));
    };
    b.u = !0;
    var i = b.shouldComponentUpdate, u = b.componentWillUpdate;
    b.componentWillUpdate = function(_, c, l) {
      if (this.__e) {
        var f = i;
        i = void 0, o(_, c, l), i = f;
      }
      u && u.call(this, _, c, l);
    }, b.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function O(t, e) {
  var r = de(M++, 3);
  !g.__s && Ye(r.__H, e) && (r.__ = t, r.i = e, b.__H.__h.push(r));
}
function E(t) {
  return Y = 5, _t(function() {
    return { current: t };
  }, []);
}
function _t(t, e) {
  var r = de(M++, 7);
  return Ye(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function ut() {
  for (var t; t = qe.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(W), t.__H.__h.forEach(oe), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], g.__e(e, t.__v);
      }
}
g.__b = function(t) {
  b = null, ke && ke(t);
}, g.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Ae && Ae(t, e);
}, g.__r = function(t) {
  Ee && Ee(t), M = 0;
  var e = (b = t.__c).__H;
  e && (Q === b ? (e.__h = [], b.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.i = r.__N = void 0;
  })) : (e.__h.forEach(W), e.__h.forEach(oe), e.__h = [], M = 0)), Q = b;
}, g.diffed = function(t) {
  xe && xe(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (qe.push(e) !== 1 && Se === g.requestAnimationFrame || ((Se = g.requestAnimationFrame) || ct)(ut)), e.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.i = void 0;
  })), Q = b = null;
}, g.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(W), r.__h = r.__h.filter(function(n) {
        return !n.__ || oe(n);
      });
    } catch (n) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], g.__e(n, r.__v);
    }
  }), Pe && Pe(t, e);
}, g.unmount = function(t) {
  Ce && Ce(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      W(n);
    } catch (o) {
      e = o;
    }
  }), r.__H = void 0, e && g.__e(e, r.__v));
};
var Te = typeof requestAnimationFrame == "function";
function ct(t) {
  var e, r = function() {
    clearTimeout(n), Te && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 100);
  Te && (e = requestAnimationFrame(r));
}
function W(t) {
  var e = b, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), b = e;
}
function oe(t) {
  var e = b;
  t.__c = t.__(), b = e;
}
function Ye(t, e) {
  return !t || t.length !== e.length || e.some(function(r, n) {
    return r !== t[n];
  });
}
function ze(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const X = {
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "2rem",
    display: "flex",
    gap: "2rem",
    margin: "0 2rem"
  },
  scrubBar: {
    flex: 1
  },
  time: {
    width: "5rem",
    display: "flex",
    alignItems: "center"
  }
}, lt = {
  button: "control_button"
}, at = ({ player: t, audioRef: e }) => {
  const r = E(null), n = E(null);
  O(() => t.onAnimate.subscribe(({ playbackMilliseconds: f }) => {
    r.current && (r.current.valueAsNumber = f / 1e3), n.current && (n.current.textContent = l());
  }).unsubscribe, [t]);
  const o = () => {
    if (!r.current)
      return;
    const f = r.current.valueAsNumber * 1e3;
    t.scrub(f);
  }, i = () => {
    t.play();
  }, u = () => {
    t.stop();
  }, [_, c] = Ve(null), l = () => `${Math.round(t.getCurrentPlaybackMilliseconds() / 1e3)}:${Math.round(_ / 1e3)}`;
  if (O(() => {
    const f = e.current;
    if (f) {
      if (!Number.isNaN(f.duration)) {
        c(f.duration * 1e3);
        return;
      }
      f.addEventListener("loadeddata", () => {
        c(f.duration * 1e3);
      });
    }
  }, []), !!_)
    return S("div", { style: X.container }, [
      S("button", { class: lt.button, onClick: i }, "Play"),
      S("button", { onClick: u }, "Stop"),
      S("time", { style: X.time, ref: n }, l()),
      S("input", {
        style: X.scrubBar,
        type: "range",
        min: 0,
        max: _ / 1e3,
        step: 0.1,
        value: t.getCurrentPlaybackMilliseconds(),
        ref: r,
        onInput: o
      })
    ]);
};
var ie = function(t, e) {
  return ie = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, ie(t, e);
};
function F(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ie(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
function se(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function _e(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), o, i = [], u;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (_) {
    u = { error: _ };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return i;
}
function ue(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = e.length, i; n < o; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function x(t) {
  return typeof t == "function";
}
function Ge(t) {
  var e = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = t(e);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var Z = Ge(function(t) {
  return function(r) {
    t(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, o) {
      return o + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function ce(t, e) {
  if (t) {
    var r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
  }
}
var J = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, r, n, o, i;
    if (!this.closed) {
      this.closed = !0;
      var u = this._parentage;
      if (u)
        if (this._parentage = null, Array.isArray(u))
          try {
            for (var _ = se(u), c = _.next(); !c.done; c = _.next()) {
              var l = c.value;
              l.remove(this);
            }
          } catch (v) {
            e = { error: v };
          } finally {
            try {
              c && !c.done && (r = _.return) && r.call(_);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          u.remove(this);
      var f = this.initialTeardown;
      if (x(f))
        try {
          f();
        } catch (v) {
          i = v instanceof Z ? v.errors : [v];
        }
      var s = this._finalizers;
      if (s) {
        this._finalizers = null;
        try {
          for (var p = se(s), a = p.next(); !a.done; a = p.next()) {
            var m = a.value;
            try {
              $e(m);
            } catch (v) {
              i = i ?? [], v instanceof Z ? i = ue(ue([], _e(i)), _e(v.errors)) : i.push(v);
            }
          }
        } catch (v) {
          n = { error: v };
        } finally {
          try {
            a && !a.done && (o = p.return) && o.call(p);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
      if (i)
        throw new Z(i);
    }
  }, t.prototype.add = function(e) {
    var r;
    if (e && e !== this)
      if (this.closed)
        $e(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var r = this._parentage;
    return r === e || Array.isArray(r) && r.includes(e);
  }, t.prototype._addParent = function(e) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(e), r) : r ? [r, e] : e;
  }, t.prototype._removeParent = function(e) {
    var r = this._parentage;
    r === e ? this._parentage = null : Array.isArray(r) && ce(r, e);
  }, t.prototype.remove = function(e) {
    var r = this._finalizers;
    r && ce(r, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Je = J.EMPTY;
function Ke(t) {
  return t instanceof J || t && "closed" in t && x(t.remove) && x(t.add) && x(t.unsubscribe);
}
function $e(t) {
  x(t) ? t() : t.unsubscribe();
}
var Qe = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Xe = {
  setTimeout: function(t, e) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    return setTimeout.apply(void 0, ue([t, e], _e(r)));
  },
  clearTimeout: function(t) {
    var e = Xe.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function ft(t) {
  Xe.setTimeout(function() {
    throw t;
  });
}
function Ue() {
}
function q(t) {
  t();
}
var Ze = function(t) {
  F(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.isStopped = !1, r ? (n.destination = r, Ke(r) && r.add(n)) : n.destination = vt, n;
  }
  return e.create = function(r, n, o) {
    return new le(r, n, o);
  }, e.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, e.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(r) {
    this.destination.next(r);
  }, e.prototype._error = function(r) {
    try {
      this.destination.error(r);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(J), pt = Function.prototype.bind;
function ee(t, e) {
  return pt.call(t, e);
}
var ht = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(e);
      } catch (n) {
        L(n);
      }
  }, t.prototype.error = function(e) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(e);
      } catch (n) {
        L(n);
      }
    else
      L(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (r) {
        L(r);
      }
  }, t;
}(), le = function(t) {
  F(e, t);
  function e(r, n, o) {
    var i = t.call(this) || this, u;
    if (x(r) || !r)
      u = {
        next: r ?? void 0,
        error: n ?? void 0,
        complete: o ?? void 0
      };
    else {
      var _;
      i && Qe.useDeprecatedNextContext ? (_ = Object.create(r), _.unsubscribe = function() {
        return i.unsubscribe();
      }, u = {
        next: r.next && ee(r.next, _),
        error: r.error && ee(r.error, _),
        complete: r.complete && ee(r.complete, _)
      }) : u = r;
    }
    return i.destination = new ht(u), i;
  }
  return e;
}(Ze);
function L(t) {
  ft(t);
}
function dt(t) {
  throw t;
}
var vt = {
  closed: !0,
  next: Ue,
  error: dt,
  complete: Ue
}, yt = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function bt(t) {
  return t;
}
function mt(t) {
  return t.length === 0 ? bt : t.length === 1 ? t[0] : function(r) {
    return t.reduce(function(n, o) {
      return o(n);
    }, r);
  };
}
var He = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var r = new t();
    return r.source = this, r.operator = e, r;
  }, t.prototype.subscribe = function(e, r, n) {
    var o = this, i = wt(e) ? e : new le(e, r, n);
    return q(function() {
      var u = o, _ = u.operator, c = u.source;
      i.add(_ ? _.call(i, c) : c ? o._subscribe(i) : o._trySubscribe(i));
    }), i;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (r) {
      e.error(r);
    }
  }, t.prototype.forEach = function(e, r) {
    var n = this;
    return r = Me(r), new r(function(o, i) {
      var u = new le({
        next: function(_) {
          try {
            e(_);
          } catch (c) {
            i(c), u.unsubscribe();
          }
        },
        error: i,
        complete: o
      });
      n.subscribe(u);
    });
  }, t.prototype._subscribe = function(e) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(e);
  }, t.prototype[yt] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    return mt(e)(this);
  }, t.prototype.toPromise = function(e) {
    var r = this;
    return e = Me(e), new e(function(n, o) {
      var i;
      r.subscribe(function(u) {
        return i = u;
      }, function(u) {
        return o(u);
      }, function() {
        return n(i);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Me(t) {
  var e;
  return (e = t ?? Qe.Promise) !== null && e !== void 0 ? e : Promise;
}
function gt(t) {
  return t && x(t.next) && x(t.error) && x(t.complete);
}
function wt(t) {
  return t && t instanceof Ze || gt(t) && Ke(t);
}
var St = Ge(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), ve = function(t) {
  F(e, t);
  function e() {
    var r = t.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return e.prototype.lift = function(r) {
    var n = new Oe(this, this);
    return n.operator = r, n;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new St();
  }, e.prototype.next = function(r) {
    var n = this;
    q(function() {
      var o, i;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var u = se(n.currentObservers), _ = u.next(); !_.done; _ = u.next()) {
            var c = _.value;
            c.next(r);
          }
        } catch (l) {
          o = { error: l };
        } finally {
          try {
            _ && !_.done && (i = u.return) && i.call(u);
          } finally {
            if (o)
              throw o.error;
          }
        }
      }
    });
  }, e.prototype.error = function(r) {
    var n = this;
    q(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = r;
        for (var o = n.observers; o.length; )
          o.shift().error(r);
      }
    });
  }, e.prototype.complete = function() {
    var r = this;
    q(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = !0;
        for (var n = r.observers; n.length; )
          n.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), t.prototype._trySubscribe.call(this, r);
  }, e.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, e.prototype._innerSubscribe = function(r) {
    var n = this, o = this, i = o.hasError, u = o.isStopped, _ = o.observers;
    return i || u ? Je : (this.currentObservers = null, _.push(r), new J(function() {
      n.currentObservers = null, ce(_, r);
    }));
  }, e.prototype._checkFinalizedStatuses = function(r) {
    var n = this, o = n.hasError, i = n.thrownError, u = n.isStopped;
    o ? r.error(i) : u && r.complete();
  }, e.prototype.asObservable = function() {
    var r = new He();
    return r.source = this, r;
  }, e.create = function(r, n) {
    return new Oe(r, n);
  }, e;
}(He), Oe = function(t) {
  F(e, t);
  function e(r, n) {
    var o = t.call(this) || this;
    return o.destination = r, o.source = n, o;
  }
  return e.prototype.next = function(r) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, r);
  }, e.prototype.error = function(r) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, r);
  }, e.prototype.complete = function() {
    var r, n;
    (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r);
  }, e.prototype._subscribe = function(r) {
    var n, o;
    return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && o !== void 0 ? o : Je;
  }, e;
}(ve), kt = function(t) {
  F(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n._value = r, n;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._subscribe = function(r) {
    var n = t.prototype._subscribe.call(this, r);
    return !n.closed && r.next(this._value), n;
  }, e.prototype.getValue = function() {
    var r = this, n = r.hasError, o = r.thrownError, i = r._value;
    if (n)
      throw o;
    return this._throwIfClosed(), i;
  }, e.prototype.next = function(r) {
    t.prototype.next.call(this, this._value = r);
  }, e;
}(ve);
const Et = () => {
  const t = E(new kt({ playbackMilliseconds: 0 })).current, e = E(new ve()).current, r = E(0), n = E(0), [o, i] = Ve("stopped"), u = () => o === "stopped" ? n.current : performance.now() - r.current + n.current, _ = () => {
    const c = u();
    t.next({ playbackMilliseconds: c });
  };
  return O(() => {
    if (o === "stopped") {
      _();
      return;
    } else {
      const c = () => {
        _(), l = requestAnimationFrame(c);
      };
      let l = requestAnimationFrame(c);
      return () => {
        cancelAnimationFrame(l);
      };
    }
  }, [o]), {
    getCurrentPlaybackMilliseconds: u,
    onAnimate: t,
    onScrub: e,
    mode: o,
    scrub(c) {
      r.current = performance.now(), n.current = c, _(), e.next();
    },
    play() {
      const c = u();
      i("playing"), r.current = performance.now(), n.current = c, e.next();
    },
    stop() {
      const c = u();
      i("stopped"), n.current = c, e.next();
    }
  };
}, xt = ({ children: t, player: e, enter: r, exit: n, fadeDuration: o }) => {
  const i = E(null);
  return O(() => {
    const u = i.current;
    if (u)
      return e.onAnimate.subscribe(({ playbackMilliseconds: _ }) => {
        const c = (_ - r) / o, l = (1 - (_ - n)) / o, f = Math.min(c, l);
        u.style.opacity = f * 100 + "%";
      }).unsubscribe;
  }, [e]), S("div", { ref: i }, t);
}, Pt = browser.runtime.getURL("resources/here-i-am.mp3"), Ct = ({ player: t, audioRef: e }) => {
  const r = e || E(null);
  return O(() => {
    const n = () => {
      r.current.currentTime = t.getCurrentPlaybackMilliseconds() / 1e3, t.mode === "playing" && r.current.paused && r.current.play(), t.mode === "stopped" && !r.current.paused && r.current.pause();
    };
    return n(), t.onScrub.subscribe(() => {
      n();
    }).unsubscribe;
  }, [t]), S("audio", { src: Pt, ref: r });
}, At = {
  center: {
    margin: "auto"
  }
}, Tt = ({ children: t }) => S("div", { style: At.center }, t);
browser.runtime.getURL("resources/staff-roll.mp3");
browser.runtime.getURL("resources/here-i-am.mp3");
const $t = browser.runtime.getURL("resources/cohost.svg"), Ut = {
  takeover: {
    position: "absolute",
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    display: "flex"
  },
  button: {
    background: "black",
    color: "white",
    padding: "1.5rem",
    borderRadius: "0.5rem"
  }
}, Ht = () => {
  const t = Et(), e = E(null);
  return S("div", { style: Ut.takeover }, [
    S(Ct, { player: t, audioRef: e }),
    S(at, { player: t, audioRef: e }),
    S(Tt, {}, [
      S(xt, { enter: 0, exit: 1e4, fadeDuration: 2e3, player: t }, [
        S("img", { src: $t })
      ])
    ])
  ]);
}, Mt = async () => {
  console.log("start", window.cohost_credits_roll);
  const t = { ...window.cohost_credits_roll };
  t ? t.entry_element ? (document.body.removeChild(t.entry_element), console.log("Removing prev entry")) : console.log("no prev entry element") : console.log("no prev entry");
  const e = document.createElement("div");
  it(S(Ht, {}), e), document.body.append(e), window.cohost_credits_roll = window.cohost_credits_roll || {}, window.cohost_credits_roll.entry_element = e, console.log("end", window.cohost_credits_roll);
};
Mt();
