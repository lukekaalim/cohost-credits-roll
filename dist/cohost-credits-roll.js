var at = Object.defineProperty;
var lt = (t, e, r) => e in t ? at(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var ne = (t, e, r) => (lt(t, typeof e != "symbol" ? e + "" : e, r), r);
var X, b, Be, I, Ee, Ve, ue, me, ae, le, H = {}, We = [], _t = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ye = Array.isArray;
function C(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function qe(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function a(t, e, r) {
  var n, o, i, c = {};
  for (i in e)
    i == "key" ? n = e[i] : i == "ref" ? o = e[i] : c[i] = e[i];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? X.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      c[i] === void 0 && (c[i] = t.defaultProps[i]);
  return q(t, c, n, o, null);
}
function q(t, e, r, n, o) {
  var i = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++Be, __i: -1, __u: 0 };
  return o == null && b.vnode != null && b.vnode(i), i;
}
function Z(t) {
  return t.children;
}
function z(t, e) {
  this.props = t, this.context = e;
}
function j(t, e) {
  if (e == null)
    return t.__ ? j(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null)
      return r.__e;
  return typeof t.type == "function" ? j(t) : null;
}
function ze(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return ze(t);
  }
}
function Pe(t) {
  (!t.__d && (t.__d = !0) && I.push(t) && !K.__r++ || Ee !== b.debounceRendering) && ((Ee = b.debounceRendering) || Ve)(K);
}
function K() {
  var t, e, r, n, o, i, c, u;
  for (I.sort(ue); t = I.shift(); )
    t.__d && (e = I.length, n = void 0, i = (o = (r = t).__v).__e, c = [], u = [], r.__P && ((n = C({}, o)).__v = o.__v + 1, b.vnode && b.vnode(n), ge(r.__P, n, o, r.__n, r.__P.namespaceURI, 32 & o.__u ? [i] : null, c, i ?? j(o), !!(32 & o.__u), u), n.__v = o.__v, n.__.__k[n.__i] = n, Ke(c, n, u), n.__e != i && ze(n)), I.length > e && I.sort(ue));
  K.__r = 0;
}
function Ye(t, e, r, n, o, i, c, u, l, _, f) {
  var s, d, p, w, m, S = n && n.__k || We, h = e.length;
  for (r.__d = l, ft(r, e, S), l = r.__d, s = 0; s < h; s++)
    (p = r.__k[s]) != null && (d = p.__i === -1 ? H : S[p.__i] || H, p.__i = s, ge(t, p, d, o, i, c, u, l, _, f), w = p.__e, p.ref && d.ref != p.ref && (d.ref && we(d.ref, null, p), f.push(p.ref, p.__c || w, p)), m == null && w != null && (m = w), 65536 & p.__u || d.__k === p.__k ? l = Je(p, l, t) : typeof p.type == "function" && p.__d !== void 0 ? l = p.__d : w && (l = w.nextSibling), p.__d = void 0, p.__u &= -196609);
  r.__d = l, r.__e = m;
}
function ft(t, e, r) {
  var n, o, i, c, u, l = e.length, _ = r.length, f = _, s = 0;
  for (t.__k = [], n = 0; n < l; n++)
    (o = e[n]) != null && typeof o != "boolean" && typeof o != "function" ? (c = n + s, (o = t.__k[n] = typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? q(null, o, null, null, null) : ye(o) ? q(Z, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? q(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = t, o.__b = t.__b + 1, i = null, (u = o.__i = pt(o, r, c, f)) !== -1 && (f--, (i = r[u]) && (i.__u |= 131072)), i == null || i.__v === null ? (u == -1 && s--, typeof o.type != "function" && (o.__u |= 65536)) : u !== c && (u == c - 1 ? s-- : u == c + 1 ? s++ : (u > c ? s-- : s++, o.__u |= 65536))) : o = t.__k[n] = null;
  if (f)
    for (n = 0; n < _; n++)
      (i = r[n]) != null && !(131072 & i.__u) && (i.__e == t.__d && (t.__d = j(i)), Ge(i, i));
}
function Je(t, e, r) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = 0; n && o < n.length; o++)
      n[o] && (n[o].__ = t, e = Je(n[o], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !r.contains(e) && (e = j(t)), r.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function pt(t, e, r, n) {
  var o = t.key, i = t.type, c = r - 1, u = r + 1, l = e[r];
  if (l === null || l && o == l.key && i === l.type && !(131072 & l.__u))
    return r;
  if (n > (l != null && !(131072 & l.__u) ? 1 : 0))
    for (; c >= 0 || u < e.length; ) {
      if (c >= 0) {
        if ((l = e[c]) && !(131072 & l.__u) && o == l.key && i === l.type)
          return c;
        c--;
      }
      if (u < e.length) {
        if ((l = e[u]) && !(131072 & l.__u) && o == l.key && i === l.type)
          return u;
        u++;
      }
    }
  return -1;
}
function Ue(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || _t.test(e) ? r : r + "px";
}
function V(t, e, r, n, o) {
  var i;
  e:
    if (e === "style")
      if (typeof r == "string")
        t.style.cssText = r;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (e in n)
            r && e in r || Ue(t.style, e, "");
        if (r)
          for (e in r)
            n && r[e] === n[e] || Ue(t.style, e, r[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      i = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in t || e === "onFocusOut" || e === "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = r, r ? n ? r.u = n.u : (r.u = me, t.addEventListener(e, i ? le : ae, i)) : t.removeEventListener(e, i ? le : ae, i);
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
function Te(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e.t == null)
        e.t = me++;
      else if (e.t < r.u)
        return;
      return r(b.event ? b.event(e) : e);
    }
  };
}
function ge(t, e, r, n, o, i, c, u, l, _) {
  var f, s, d, p, w, m, S, h, y, L, T, F, $, xe, N, re, E = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & r.__u && (l = !!(32 & r.__u), i = [u = e.__e = r.__e]), (f = b.__b) && f(e);
  e:
    if (typeof E == "function")
      try {
        if (h = e.props, y = "prototype" in E && E.prototype.render, L = (f = E.contextType) && n[f.__c], T = f ? L ? L.props.value : f.__ : n, r.__c ? S = (s = e.__c = r.__c).__ = s.__E : (y ? e.__c = s = new E(h, T) : (e.__c = s = new z(h, T), s.constructor = E, s.render = ht), L && L.sub(s), s.props = h, s.state || (s.state = {}), s.context = T, s.__n = n, d = s.__d = !0, s.__h = [], s._sb = []), y && s.__s == null && (s.__s = s.state), y && E.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = C({}, s.__s)), C(s.__s, E.getDerivedStateFromProps(h, s.__s))), p = s.props, w = s.state, s.__v = e, d)
          y && E.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), y && s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y && E.getDerivedStateFromProps == null && h !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(h, T), !s.__e && (s.shouldComponentUpdate != null && s.shouldComponentUpdate(h, s.__s, T) === !1 || e.__v === r.__v)) {
            for (e.__v !== r.__v && (s.props = h, s.state = s.__s, s.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(B) {
              B && (B.__ = e);
            }), F = 0; F < s._sb.length; F++)
              s.__h.push(s._sb[F]);
            s._sb = [], s.__h.length && c.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(h, s.__s, T), y && s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, w, m);
          });
        }
        if (s.context = T, s.props = h, s.__P = t, s.__e = !1, $ = b.__r, xe = 0, y) {
          for (s.state = s.__s, s.__d = !1, $ && $(e), f = s.render(s.props, s.state, s.context), N = 0; N < s._sb.length; N++)
            s.__h.push(s._sb[N]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(e), f = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++xe < 25);
        s.state = s.__s, s.getChildContext != null && (n = C(C({}, n), s.getChildContext())), y && !d && s.getSnapshotBeforeUpdate != null && (m = s.getSnapshotBeforeUpdate(p, w)), Ye(t, ye(re = f != null && f.type === Z && f.key == null ? f.props.children : f) ? re : [re], e, r, n, o, i, c, u, l, _), s.base = e.__e, e.__u &= -161, s.__h.length && c.push(s), S && (s.__E = s.__ = null);
      } catch (B) {
        if (e.__v = null, l || i != null) {
          for (e.__u |= l ? 160 : 32; u && u.nodeType === 8 && u.nextSibling; )
            u = u.nextSibling;
          i[i.indexOf(u)] = null, e.__e = u;
        } else
          e.__e = r.__e, e.__k = r.__k;
        b.__e(B, e, r);
      }
    else
      i == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = dt(r.__e, e, r, n, o, i, c, l, _);
  (f = b.diffed) && f(e);
}
function Ke(t, e, r) {
  e.__d = void 0;
  for (var n = 0; n < r.length; n++)
    we(r[n], r[++n], r[++n]);
  b.__c && b.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      b.__e(i, o.__v);
    }
  });
}
function dt(t, e, r, n, o, i, c, u, l) {
  var _, f, s, d, p, w, m, S = r.props, h = e.props, y = e.type;
  if (y === "svg" ? o = "http://www.w3.org/2000/svg" : y === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (_ = 0; _ < i.length; _++)
      if ((p = i[_]) && "setAttribute" in p == !!y && (y ? p.localName === y : p.nodeType === 3)) {
        t = p, i[_] = null;
        break;
      }
  }
  if (t == null) {
    if (y === null)
      return document.createTextNode(h);
    t = document.createElementNS(o, y, h.is && h), u && (b.__m && b.__m(e, i), u = !1), i = null;
  }
  if (y === null)
    S === h || u && t.data === h || (t.data = h);
  else {
    if (i = i && X.call(t.childNodes), S = r.props || H, !u && i != null)
      for (S = {}, _ = 0; _ < t.attributes.length; _++)
        S[(p = t.attributes[_]).name] = p.value;
    for (_ in S)
      if (p = S[_], _ != "children") {
        if (_ == "dangerouslySetInnerHTML")
          s = p;
        else if (!(_ in h)) {
          if (_ == "value" && "defaultValue" in h || _ == "checked" && "defaultChecked" in h)
            continue;
          V(t, _, null, p, o);
        }
      }
    for (_ in h)
      p = h[_], _ == "children" ? d = p : _ == "dangerouslySetInnerHTML" ? f = p : _ == "value" ? w = p : _ == "checked" ? m = p : u && typeof p != "function" || S[_] === p || V(t, _, p, S[_], o);
    if (f)
      u || s && (f.__html === s.__html || f.__html === t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
    else if (s && (t.innerHTML = ""), Ye(t, ye(d) ? d : [d], e, r, n, y === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, c, i ? i[0] : r.__k && j(r, 0), u, l), i != null)
      for (_ = i.length; _--; )
        qe(i[_]);
    u || (_ = "value", y === "progress" && w == null ? t.removeAttribute("value") : w !== void 0 && (w !== t[_] || y === "progress" && !w || y === "option" && w !== S[_]) && V(t, _, w, S[_], o), _ = "checked", m !== void 0 && m !== t[_] && V(t, _, m, S[_], o));
  }
  return t;
}
function we(t, e, r) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else
      t.current = e;
  } catch (o) {
    b.__e(o, r);
  }
}
function Ge(t, e, r) {
  var n, o;
  if (b.unmount && b.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || we(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (i) {
        b.__e(i, e);
      }
    n.base = n.__P = null;
  }
  if (n = t.__k)
    for (o = 0; o < n.length; o++)
      n[o] && Ge(n[o], e, r || typeof t.type != "function");
  r || qe(t.__e), t.__c = t.__ = t.__e = t.__d = void 0;
}
function ht(t, e, r) {
  return this.constructor(t, r);
}
function bt(t, e, r) {
  var n, o, i, c;
  b.__ && b.__(t, e), o = (n = typeof r == "function") ? null : r && r.__k || e.__k, i = [], c = [], ge(e, t = (!n && r || e).__k = a(Z, null, [t]), o || H, H, e.namespaceURI, !n && r ? [r] : o ? null : e.firstChild ? X.call(e.childNodes) : null, i, !n && r ? r : o ? o.__e : e.firstChild, n, c), Ke(i, t, c);
}
X = We.slice, b = { __e: function(t, e, r, n) {
  for (var o, i, c; e = e.__; )
    if ((o = e.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), c = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), c = o.__d), c)
          return o.__E = o;
      } catch (u) {
        t = u;
      }
  throw t;
} }, Be = 0, z.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = C({}, this.state), typeof t == "function" && (t = t(C({}, r), this.props)), t && C(r, t), t != null && this.__v && (e && this._sb.push(e), Pe(this));
}, z.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Pe(this));
}, z.prototype.render = Z, I = [], Ve = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ue = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, K.__r = 0, me = 0, ae = Te(!1), le = Te(!0);
var M, g, oe, Re, G = 0, Qe = [], k = b, Ce = k.__b, Ie = k.__r, Ae = k.diffed, je = k.__c, Le = k.unmount, $e = k.__;
function ke(t, e) {
  k.__h && k.__h(g, t, G || e), G = 0;
  var r = g.__H || (g.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function Xe(t) {
  return G = 1, vt(et, t);
}
function vt(t, e, r) {
  var n = ke(M++, 2);
  if (n.t = t, !n.__c && (n.__ = [r ? r(e) : et(void 0, e), function(u) {
    var l = n.__N ? n.__N[0] : n.__[0], _ = n.t(l, u);
    l !== _ && (n.__N = [_, n.__[1]], n.__c.setState({}));
  }], n.__c = g, !g.u)) {
    var o = function(u, l, _) {
      if (!n.__c.__H)
        return !0;
      var f = n.__c.__H.__.filter(function(d) {
        return !!d.__c;
      });
      if (f.every(function(d) {
        return !d.__N;
      }))
        return !i || i.call(this, u, l, _);
      var s = !1;
      return f.forEach(function(d) {
        if (d.__N) {
          var p = d.__[0];
          d.__ = d.__N, d.__N = void 0, p !== d.__[0] && (s = !0);
        }
      }), !(!s && n.__c.props === u) && (!i || i.call(this, u, l, _));
    };
    g.u = !0;
    var i = g.shouldComponentUpdate, c = g.componentWillUpdate;
    g.componentWillUpdate = function(u, l, _) {
      if (this.__e) {
        var f = i;
        i = void 0, o(u, l, _), i = f;
      }
      c && c.call(this, u, l, _);
    }, g.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function A(t, e) {
  var r = ke(M++, 3);
  !k.__s && Ze(r.__H, e) && (r.__ = t, r.i = e, g.__H.__h.push(r));
}
function x(t) {
  return G = 5, mt(function() {
    return { current: t };
  }, []);
}
function mt(t, e) {
  var r = ke(M++, 7);
  return Ze(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function yt() {
  for (var t; t = Qe.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Y), t.__H.__h.forEach(_e), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], k.__e(e, t.__v);
      }
}
k.__b = function(t) {
  g = null, Ce && Ce(t);
}, k.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), $e && $e(t, e);
}, k.__r = function(t) {
  Ie && Ie(t), M = 0;
  var e = (g = t.__c).__H;
  e && (oe === g ? (e.__h = [], g.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.i = r.__N = void 0;
  })) : (e.__h.forEach(Y), e.__h.forEach(_e), e.__h = [], M = 0)), oe = g;
}, k.diffed = function(t) {
  Ae && Ae(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Qe.push(e) !== 1 && Re === k.requestAnimationFrame || ((Re = k.requestAnimationFrame) || gt)(yt)), e.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.i = void 0;
  })), oe = g = null;
}, k.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(Y), r.__h = r.__h.filter(function(n) {
        return !n.__ || _e(n);
      });
    } catch (n) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], k.__e(n, r.__v);
    }
  }), je && je(t, e);
}, k.unmount = function(t) {
  Le && Le(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      Y(n);
    } catch (o) {
      e = o;
    }
  }), r.__H = void 0, e && k.__e(e, r.__v));
};
var De = typeof requestAnimationFrame == "function";
function gt(t) {
  var e, r = function() {
    clearTimeout(n), De && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 100);
  De && (e = requestAnimationFrame(r));
}
function Y(t) {
  var e = g, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), g = e;
}
function _e(t) {
  var e = g;
  t.__c = t.__(), g = e;
}
function Ze(t, e) {
  return !t || t.length !== e.length || e.some(function(r, n) {
    return r !== t[n];
  });
}
function et(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const ie = {
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "3rem",
    display: "flex",
    gap: "2rem"
  },
  scrubBar: {
    flex: 1
  },
  time: {
    width: "5rem",
    display: "flex",
    alignItems: "center"
  }
}, wt = {
  button: "control_button"
}, kt = ({ player: t, audioRef: e }) => {
  const r = x(null), n = x(null);
  A(() => t.onAnimate.subscribe(({ playbackMilliseconds: f }) => {
    r.current && (r.current.valueAsNumber = f / 1e3), n.current && (n.current.textContent = _());
  }).unsubscribe, [t]);
  const o = () => {
    if (!r.current)
      return;
    const f = r.current.valueAsNumber * 1e3;
    t.scrub(f);
  }, i = () => {
    t.play();
  }, c = () => {
    t.stop();
  }, [u, l] = Xe(null), _ = () => `${Math.round(t.getCurrentPlaybackMilliseconds() / 1e3)}:${Math.round(u / 1e3)}`;
  if (A(() => {
    const f = e.current;
    if (f) {
      if (!Number.isNaN(f.duration)) {
        l(f.duration * 1e3);
        return;
      }
      f.addEventListener("loadeddata", () => {
        l(f.duration * 1e3);
      });
    }
  }, []), !!u)
    return a("div", { style: ie.container, class: "controls-container" }, [
      a("button", { class: wt.button, onClick: i }, "Play"),
      a("button", { onClick: c }, "Stop"),
      a("time", { style: ie.time, ref: n }, _()),
      a("input", {
        style: ie.scrubBar,
        type: "range",
        min: 0,
        max: u / 1e3,
        step: 0.1,
        value: t.getCurrentPlaybackMilliseconds() / 1e3,
        ref: r,
        onInput: o
      })
    ]);
};
var fe = function(t, e) {
  return fe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, fe(t, e);
};
function O(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  fe(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
function pe(t) {
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
function de(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), o, i = [], c;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (u) {
    c = { error: u };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (c)
        throw c.error;
    }
  }
  return i;
}
function he(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = e.length, i; n < o; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function U(t) {
  return typeof t == "function";
}
function tt(t) {
  var e = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = t(e);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var se = tt(function(t) {
  return function(r) {
    t(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, o) {
      return o + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function be(t, e) {
  if (t) {
    var r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
  }
}
var ee = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, r, n, o, i;
    if (!this.closed) {
      this.closed = !0;
      var c = this._parentage;
      if (c)
        if (this._parentage = null, Array.isArray(c))
          try {
            for (var u = pe(c), l = u.next(); !l.done; l = u.next()) {
              var _ = l.value;
              _.remove(this);
            }
          } catch (m) {
            e = { error: m };
          } finally {
            try {
              l && !l.done && (r = u.return) && r.call(u);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          c.remove(this);
      var f = this.initialTeardown;
      if (U(f))
        try {
          f();
        } catch (m) {
          i = m instanceof se ? m.errors : [m];
        }
      var s = this._finalizers;
      if (s) {
        this._finalizers = null;
        try {
          for (var d = pe(s), p = d.next(); !p.done; p = d.next()) {
            var w = p.value;
            try {
              He(w);
            } catch (m) {
              i = i ?? [], m instanceof se ? i = he(he([], de(i)), de(m.errors)) : i.push(m);
            }
          }
        } catch (m) {
          n = { error: m };
        } finally {
          try {
            p && !p.done && (o = d.return) && o.call(d);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
      if (i)
        throw new se(i);
    }
  }, t.prototype.add = function(e) {
    var r;
    if (e && e !== this)
      if (this.closed)
        He(e);
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
    r === e ? this._parentage = null : Array.isArray(r) && be(r, e);
  }, t.prototype.remove = function(e) {
    var r = this._finalizers;
    r && be(r, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), rt = ee.EMPTY;
function nt(t) {
  return t instanceof ee || t && "closed" in t && U(t.remove) && U(t.add) && U(t.unsubscribe);
}
function He(t) {
  U(t) ? t() : t.unsubscribe();
}
var ot = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, it = {
  setTimeout: function(t, e) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    return setTimeout.apply(void 0, he([t, e], de(r)));
  },
  clearTimeout: function(t) {
    var e = it.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function St(t) {
  it.setTimeout(function() {
    throw t;
  });
}
function Me() {
}
function J(t) {
  t();
}
var st = function(t) {
  O(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.isStopped = !1, r ? (n.destination = r, nt(r) && r.add(n)) : n.destination = Ut, n;
  }
  return e.create = function(r, n, o) {
    return new ve(r, n, o);
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
}(ee), xt = Function.prototype.bind;
function ce(t, e) {
  return xt.call(t, e);
}
var Et = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(e);
      } catch (n) {
        W(n);
      }
  }, t.prototype.error = function(e) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(e);
      } catch (n) {
        W(n);
      }
    else
      W(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (r) {
        W(r);
      }
  }, t;
}(), ve = function(t) {
  O(e, t);
  function e(r, n, o) {
    var i = t.call(this) || this, c;
    if (U(r) || !r)
      c = {
        next: r ?? void 0,
        error: n ?? void 0,
        complete: o ?? void 0
      };
    else {
      var u;
      i && ot.useDeprecatedNextContext ? (u = Object.create(r), u.unsubscribe = function() {
        return i.unsubscribe();
      }, c = {
        next: r.next && ce(r.next, u),
        error: r.error && ce(r.error, u),
        complete: r.complete && ce(r.complete, u)
      }) : c = r;
    }
    return i.destination = new Et(c), i;
  }
  return e;
}(st);
function W(t) {
  St(t);
}
function Pt(t) {
  throw t;
}
var Ut = {
  closed: !0,
  next: Me,
  error: Pt,
  complete: Me
}, Tt = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Rt(t) {
  return t;
}
function Ct(t) {
  return t.length === 0 ? Rt : t.length === 1 ? t[0] : function(r) {
    return t.reduce(function(n, o) {
      return o(n);
    }, r);
  };
}
var Oe = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var r = new t();
    return r.source = this, r.operator = e, r;
  }, t.prototype.subscribe = function(e, r, n) {
    var o = this, i = At(e) ? e : new ve(e, r, n);
    return J(function() {
      var c = o, u = c.operator, l = c.source;
      i.add(u ? u.call(i, l) : l ? o._subscribe(i) : o._trySubscribe(i));
    }), i;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (r) {
      e.error(r);
    }
  }, t.prototype.forEach = function(e, r) {
    var n = this;
    return r = Fe(r), new r(function(o, i) {
      var c = new ve({
        next: function(u) {
          try {
            e(u);
          } catch (l) {
            i(l), c.unsubscribe();
          }
        },
        error: i,
        complete: o
      });
      n.subscribe(c);
    });
  }, t.prototype._subscribe = function(e) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(e);
  }, t.prototype[Tt] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    return Ct(e)(this);
  }, t.prototype.toPromise = function(e) {
    var r = this;
    return e = Fe(e), new e(function(n, o) {
      var i;
      r.subscribe(function(c) {
        return i = c;
      }, function(c) {
        return o(c);
      }, function() {
        return n(i);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Fe(t) {
  var e;
  return (e = t ?? ot.Promise) !== null && e !== void 0 ? e : Promise;
}
function It(t) {
  return t && U(t.next) && U(t.error) && U(t.complete);
}
function At(t) {
  return t && t instanceof st || It(t) && nt(t);
}
var jt = tt(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Se = function(t) {
  O(e, t);
  function e() {
    var r = t.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return e.prototype.lift = function(r) {
    var n = new Ne(this, this);
    return n.operator = r, n;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new jt();
  }, e.prototype.next = function(r) {
    var n = this;
    J(function() {
      var o, i;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var c = pe(n.currentObservers), u = c.next(); !u.done; u = c.next()) {
            var l = u.value;
            l.next(r);
          }
        } catch (_) {
          o = { error: _ };
        } finally {
          try {
            u && !u.done && (i = c.return) && i.call(c);
          } finally {
            if (o)
              throw o.error;
          }
        }
      }
    });
  }, e.prototype.error = function(r) {
    var n = this;
    J(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = r;
        for (var o = n.observers; o.length; )
          o.shift().error(r);
      }
    });
  }, e.prototype.complete = function() {
    var r = this;
    J(function() {
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
    var n = this, o = this, i = o.hasError, c = o.isStopped, u = o.observers;
    return i || c ? rt : (this.currentObservers = null, u.push(r), new ee(function() {
      n.currentObservers = null, be(u, r);
    }));
  }, e.prototype._checkFinalizedStatuses = function(r) {
    var n = this, o = n.hasError, i = n.thrownError, c = n.isStopped;
    o ? r.error(i) : c && r.complete();
  }, e.prototype.asObservable = function() {
    var r = new Oe();
    return r.source = this, r;
  }, e.create = function(r, n) {
    return new Ne(r, n);
  }, e;
}(Oe), Ne = function(t) {
  O(e, t);
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
    return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && o !== void 0 ? o : rt;
  }, e;
}(Se), Lt = function(t) {
  O(e, t);
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
}(Se);
const $t = () => {
  const t = x(new Lt({ playbackMilliseconds: 0 })).current, e = x(new Se()).current, r = x(0), n = x(0), [o, i] = Xe("stopped"), c = () => o === "stopped" ? n.current : performance.now() - r.current + n.current, u = () => {
    const l = c();
    t.next({ playbackMilliseconds: l });
  };
  return A(() => {
    if (o === "stopped") {
      u();
      return;
    } else {
      const l = () => {
        u(), _ = requestAnimationFrame(l);
      };
      let _ = requestAnimationFrame(l);
      return () => {
        u(), cancelAnimationFrame(_);
      };
    }
  }, [o]), {
    getCurrentPlaybackMilliseconds: c,
    onAnimate: t,
    onScrub: e,
    mode: o,
    scrub(l) {
      r.current = performance.now(), n.current = l, u(), e.next();
    },
    play() {
      const l = c();
      i("playing"), r.current = performance.now(), n.current = l, e.next();
    },
    stop() {
      const l = c();
      i("stopped"), n.current = l, e.next();
    }
  };
}, D = ({ enter: t, exit: e, fadeDuration: r, player: n }, o) => {
  const i = x(null);
  return A(() => {
    const c = i.current;
    if (c)
      return n.onAnimate.subscribe(({ playbackMilliseconds: u }) => {
        const l = (u - t) / r, _ = (1 - (u - e)) / r, f = Math.max(0, Math.min(1, Math.min(l, _)));
        console.log(f, l, _), f < 1 ? c.style.pointerEvents = "none" : c.style.pointerEvents = "auto", c.style.opacity = f * 100 + "%", c.style.filter = `blur(${(0.5 - f / 2) * 8}px)`;
      }).unsubscribe;
  }, [n]), o(i);
}, P = ({ children: t, player: e, enter: r, exit: n, fadeDuration: o }) => {
  const i = x(null);
  return A(() => {
    const c = i.current;
    if (c)
      return e.onAnimate.subscribe(({ playbackMilliseconds: u }) => {
        const l = (u - r) / o, _ = (1 - (u - n)) / o, f = Math.min(l, _);
        f < 1 && (c.style.pointerEvents = "none"), c.style.opacity = f * 100 + "%", c.style.filter = `blur(${(0.5 - f / 2) * 8}px)`;
      }).unsubscribe;
  }, [e]), a("div", { ref: i }, t);
}, Dt = browser.runtime.getURL("resources/here-i-am.mp3"), Ht = ({ player: t, audioRef: e }) => {
  const r = e || x(null);
  return A(() => {
    const n = () => {
      r.current.currentTime = t.getCurrentPlaybackMilliseconds() / 1e3, t.mode === "playing" && r.current.paused && r.current.play(), t.mode === "stopped" && !r.current.paused && r.current.pause();
    };
    return n(), t.onScrub.subscribe(() => {
      n();
    }).unsubscribe;
  }, [t]), a("audio", { src: Dt, ref: r });
}, Mt = ({ player: t }, e) => {
  const r = x(null);
  return A(() => {
    if (r.current)
      return t.onAnimate.subscribe(({ playbackMilliseconds: o }) => {
        r.current.style.transform = `translate(${-o / 1e3}px)`;
      }).unsubscribe;
  }, [t]), e(r);
};
var Q;
((t) => {
  class e {
    constructor(n, o) {
      ne(this, "x");
      ne(this, "y");
      this.x = n, this.y = o;
    }
  }
  t.Vector2 = e, t.lerp2 = (r, n, o) => new e(
    r.x + (n.x - r.x) * o,
    r.y + (n.y - r.y) * o
  );
})(Q || (Q = {}));
const Ot = {
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
}, R = ({ children: t }) => a("div", { style: Ot.center }, t), te = ({
  player: t,
  name: e,
  profileImgURL: r,
  subtitle: n,
  handle: o,
  pronouns: i,
  link: c,
  children: u,
  bannerImgURL: l,
  flip: _,
  links: f,
  sectionRef: s
}) => a("section", { class: "solo-feature", ref: s, style: { flexDirection: _ ? "row" : "row-reverse" } }, [
  a("div", { class: "left-pane" }, [
    a("div", { class: "floating-profile" }, [
      a("img", { src: r }),
      a("h2", {}, e),
      a("a", { class: "username", href: `https://cohost.org/${o}` }, "@" + o),
      a("div", {}, i),
      a("a", { class: "link", href: c }, c),
      a("div", { class: "subtitle" }, n)
    ])
  ]),
  a("div", { class: "right-pane" }, [
    a("div", { class: "floating-details" }, [
      u,
      f.length > 0 && a("nav", {}, [
        f.map((d) => a("li", {}, [
          a("div", { class: "link-title" }, d.title),
          a("a", {
            href: d.link
          }, d.linkText || d.link)
        ]))
      ])
    ])
  ]),
  a("div", { class: "banner" }, [
    Mt(
      { player: t, start: new Q.Vector2(0, 0), end: new Q.Vector2(0, 0) },
      (d) => a("img", { src: l, ref: d })
    )
  ])
]), Ft = 1, ct = Ft * 1e3, ut = ct * 60, Nt = ut * 60, v = ({
  hours: t = 0,
  minutes: e = 0,
  seconds: r = 0,
  milliseconds: n = 0
}) => n + r * ct + e * ut + t * Nt, Bt = browser.runtime.getURL("resources/jae.jpg"), Vt = browser.runtime.getURL("resources/bradley.jpeg"), Wt = browser.runtime.getURL("resources/vogon.png"), qt = browser.runtime.getURL("resources/chem.png"), zt = browser.runtime.getURL("resources/aidan.png"), Yt = browser.runtime.getURL("resources/streamer-eggbug.jpg"), Jt = browser.runtime.getURL("resources/kaara.jpg"), Kt = browser.runtime.getURL("resources/crow.jpg"), Gt = ({ rootRef: t, player: e }) => a(te, {
  player: e,
  sectionRef: t,
  name: "jae",
  handle: "jkap",
  pronouns: "they/she",
  link: "https://jkap.io/",
  profileImgURL: Bt,
  subtitle: "CEO of Posting",
  links: [
    {
      title: "🔵 tumblr",
      link: "yrfriendjkap.tumblr.com/"
    },
    {
      title: "🐘 mastodon",
      link: "xoxo.zone/@jkap"
    },
    {
      title: "🖼️ icon credit",
      link: "twitter.com/osmoru"
    },
    {
      title: "🐦 twitter",
      linkText: "not anymore lol"
    },
    {
      title: "🎬 letterboxd",
      link: "letterboxd.com/yrfriendjkap/"
    }
  ],
  bannerImgURL: Vt
}, [
  a("p", { class: "comment" }, [
    "butch jewish dyke",
    a("br", {}),
    "part of @staff, cohost user #1",
    a("br", {}),
    "married to @kadybat"
  ]),
  a("img", {
    src: "https://userbox.easrng.workers.dev/?info=This%20user%20can%20say%20it.&font=Atkinson%20Hyperlegible",
    alt: "This user can say it",
    title: "This user can say it"
  }),
  a("a", { href: "https://osu.ppy.sh/users/11459097" }, [
    a("img", {
      src: "https://osu-sig.vercel.app/card?user=jkap&mode=std&lang=en&blur=6&animation=true&mini=true&w=340&h=102"
    })
  ])
]), Qt = ({ player: t, rootRef: e }) => a(te, {
  flip: !0,
  player: t,
  sectionRef: e,
  name: "colin",
  handle: "vogon",
  pronouns: "he/him",
  link: "gameboat.org",
  profileImgURL: Wt,
  subtitle: 'the evil "Website Boy"',
  links: [
    {
      title: "mastodon",
      link: "mastodon.social/@vogon"
    },
    {
      title: "twitter (inactive)",
      link: "twitter.com/vogon"
    },
    {
      title: "🖼️ icon credit",
      link: "twitter.com/osmoru"
    },
    {
      title: "bluesky",
      linkText: "if bluesky has a million haters I am one of them, if bluesky has one hater that's me, if bluesky has no haters then I am no more on the earth",
      link: "https://cohost.org/vogon/post/1845751-bonus-pure-speculati"
    },
    {
      title: "irl",
      link: "seattle, WA"
    }
  ],
  bannerImgURL: qt
}, [
  a("p", { class: "comment" }, [
    "member of @staff, lapsed linguist and drummer, electronics hobbyist",
    a("br", {}),
    "zip's bf",
    a("br", {}),
    "no supervisor but ludd means the threads any good"
  ])
]), Xt = ({ player: t, rootRef: e }) => a(te, {
  player: t,
  sectionRef: e,
  name: "eggbug enthusiast",
  handle: "aidan",
  pronouns: "she/her",
  link: "https://twitter.com/AerialShading",
  profileImgURL: zt,
  subtitle: "former girlboss in chief",
  links: [
    {
      title: "HIRE ME",
      link: "https://www.aidangrealish.com/"
    }
  ],
  bannerImgURL: Yt
}, [
  a("p", { class: "comment" }, [
    "one quarter of @staff! i make the website look good and/or bad depending on your personal taste"
  ])
]), Zt = ({ player: t, rootRef: e }) => a(te, {
  player: t,
  sectionRef: e,
  name: "kara",
  handle: "kaara",
  pronouns: "it/she",
  link: "",
  profileImgURL: Jt,
  subtitle: "oh, to be [REDACTED]",
  links: [],
  bannerImgURL: Kt
}, [
  a("p", { class: "comment" }, [
    "1/4th of @staff",
    a("br", {}),
    "🏳️‍⚧️ t4t",
    a("br", {}),
    "i feel the wind in my dreams",
    a("br", {}),
    "Ⓐ"
  ])
]);
browser.runtime.getURL("resources/staff-roll.mp3");
browser.runtime.getURL("resources/here-i-am.mp3");
const er = browser.runtime.getURL("resources/cohost.svg");
browser.runtime.getURL("resources/jae.jpg");
browser.runtime.getURL("resources/vogon.png");
browser.runtime.getURL("resources/aidan.png");
browser.runtime.getURL("resources/kaara.jpg");
const tr = browser.runtime.getURL("resources/bugs/eggbug_wink.png"), rr = {
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
}, nr = () => {
  const t = $t(), e = x(null);
  return a("div", { style: rr.takeover, class: "takeover" }, [
    a(Ht, { player: t, audioRef: e }),
    a(R, {}, [
      a(P, { enter: 0, exit: v({ seconds: 5 }), fadeDuration: v({ seconds: 1 }), player: t }, [
        a("div", { style: { display: "flex", flexDirection: "column" } }, [
          a("img", { src: er })
        ])
      ])
    ]),
    a(P, { enter: v({ seconds: 6 }), exit: v({ seconds: 11 }), fadeDuration: v({ seconds: 1 }), player: t }, [
      a("div", { style: { marginTop: "24px", position: "absolute" } }, "cohost is designed, developed, and operated by anti software software club llc")
    ]),
    D({ enter: v({ seconds: 10 }), exit: v({ seconds: 34 }), fadeDuration: 2e3, player: t }, (r) => a(Gt, { rootRef: r, start: 0, end: 0, player: t })),
    D({ enter: v({ seconds: 34 }), exit: v({ seconds: 58 }), fadeDuration: 2e3, player: t }, (r) => a(Qt, { rootRef: r, start: 0, end: 0, player: t })),
    D({ enter: v({ seconds: 58 }), exit: v({ seconds: 82 }), fadeDuration: 2e3, player: t }, (r) => a(Xt, { rootRef: r, start: 0, end: 0, player: t })),
    D({ enter: v({ seconds: 82 }), exit: v({ seconds: 106 }), fadeDuration: 2e3, player: t }, (r) => a(Zt, { rootRef: r, start: 0, end: 0, player: t })),
    a(R, {}, [
      a(P, { enter: v({ seconds: 106 }), exit: v({ seconds: 130 }), fadeDuration: 2e3, player: t }, [
        a("p", {}, "cohost launched in private alpha on february 3, 2022, and to the public on june 28, 2022."),
        a("p", {}, "thank you to our alpha testers, our first 150 users.")
      ])
    ]),
    a(R, {}, [
      a(P, { enter: v({ seconds: 130 }), exit: v({ seconds: 142 }), fadeDuration: 2e3, player: t }, [
        a("p", {}, '"The Host" emoji set was designed by @SilverStarsIllustration')
      ])
    ]),
    a(R, {}, [
      a(P, { enter: v({ seconds: 142 }), exit: v({ seconds: 154 }), fadeDuration: 2e3, player: t }, [
        a("p", {}, "the new eggbug emoji set was designed by @dzuk")
      ])
    ]),
    a(R, {}, [
      a(P, { enter: v({ seconds: 154 }), exit: v({ seconds: 166 }), fadeDuration: 2e3, player: t }, [
        a("p", {}, '"Fuck Computers" was designed by @girlfiend; the phrase was borrowed from our friend astrid')
      ])
    ]),
    a(R, {}, [
      a(P, { enter: v({ seconds: 178 }), exit: v({ seconds: 190 }), fadeDuration: 2e3, player: t }, [
        a("p", {}, '"anonbug" (icon used in anonymous asks) was designed by @easrng')
      ])
    ]),
    D(
      { enter: v({ seconds: 190 }), exit: Number.POSITIVE_INFINITY, player: t, fadeDuration: 4e3 },
      (r) => a("div", { ref: r }, [
        a("img", { src: "https://staging.cohostcdn.org/attachment/613545d0-cf63-45b7-ab8d-738dd4b5bbc8/cohost%20sunset.png" })
      ])
    ),
    a(R, {}, [
      a(P, { enter: (3 * 60 + 30) * 1e3, exit: (3 * 60 + 50) * 1e3, fadeDuration: 2e3, player: t }, [
        a("div", {}, "cohost is designed, developed, and operated by anti software software club llc")
      ])
    ]),
    a(R, {}, [
      a(P, { enter: (3 * 60 + 50) * 1e3, exit: Number.POSITIVE_INFINITY, fadeDuration: 2e3, player: t }, [
        a("div", {}, a("span", {}, "thanks for using cohost ", a("img", { src: tr, style: { display: "inline-block" } })))
      ])
    ]),
    a(kt, { player: t, audioRef: e })
  ]);
}, or = async () => {
  console.log("start", window.cohost_credits_roll);
  const t = { ...window.cohost_credits_roll };
  t ? t.entry_element ? (document.body.removeChild(t.entry_element), console.log("Removing prev entry")) : console.log("no prev entry element") : console.log("no prev entry");
  const e = document.createElement("div");
  bt(a(nr, {}), e), document.body.append(e), window.cohost_credits_roll = window.cohost_credits_roll || {}, window.cohost_credits_roll.entry_element = e, console.log("end", window.cohost_credits_roll);
};
or();
