var J, v, Fe, U, ge, De, ne, pe, oe, ie, O = {}, Re = [], rt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, de = Array.isArray;
function T(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function Le(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function p(t, e, r) {
  var n, o, i, _ = {};
  for (i in e)
    i == "key" ? n = e[i] : i == "ref" ? o = e[i] : _[i] = e[i];
  if (arguments.length > 2 && (_.children = arguments.length > 3 ? J.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      _[i] === void 0 && (_[i] = t.defaultProps[i]);
  return W(t, _, n, o, null);
}
function W(t, e, r, n, o) {
  var i = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++Fe, __i: -1, __u: 0 };
  return o == null && v.vnode != null && v.vnode(i), i;
}
function K(t) {
  return t.children;
}
function q(t, e) {
  this.props = t, this.context = e;
}
function $(t, e) {
  if (e == null)
    return t.__ ? $(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null)
      return r.__e;
  return typeof t.type == "function" ? $(t) : null;
}
function Ne(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return Ne(t);
  }
}
function we(t) {
  (!t.__d && (t.__d = !0) && U.push(t) && !z.__r++ || ge !== v.debounceRendering) && ((ge = v.debounceRendering) || De)(z);
}
function z() {
  var t, e, r, n, o, i, _, u;
  for (U.sort(ne); t = U.shift(); )
    t.__d && (e = U.length, n = void 0, i = (o = (r = t).__v).__e, _ = [], u = [], r.__P && ((n = T({}, o)).__v = o.__v + 1, v.vnode && v.vnode(n), he(r.__P, n, o, r.__n, r.__P.namespaceURI, 32 & o.__u ? [i] : null, _, i ?? $(o), !!(32 & o.__u), u), n.__v = o.__v, n.__.__k[n.__i] = n, qe(_, n, u), n.__e != i && Ne(n)), U.length > e && U.sort(ne));
  z.__r = 0;
}
function Be(t, e, r, n, o, i, _, u, c, l, f) {
  var s, d, a, g, y, S = n && n.__k || Re, h = e.length;
  for (r.__d = c, nt(r, e, S), c = r.__d, s = 0; s < h; s++)
    (a = r.__k[s]) != null && (d = a.__i === -1 ? O : S[a.__i] || O, a.__i = s, he(t, a, d, o, i, _, u, c, l, f), g = a.__e, a.ref && d.ref != a.ref && (d.ref && ve(d.ref, null, a), f.push(a.ref, a.__c || g, a)), y == null && g != null && (y = g), 65536 & a.__u || d.__k === a.__k ? c = We(a, c, t) : typeof a.type == "function" && a.__d !== void 0 ? c = a.__d : g && (c = g.nextSibling), a.__d = void 0, a.__u &= -196609);
  r.__d = c, r.__e = y;
}
function nt(t, e, r) {
  var n, o, i, _, u, c = e.length, l = r.length, f = l, s = 0;
  for (t.__k = [], n = 0; n < c; n++)
    (o = e[n]) != null && typeof o != "boolean" && typeof o != "function" ? (_ = n + s, (o = t.__k[n] = typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? W(null, o, null, null, null) : de(o) ? W(K, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? W(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = t, o.__b = t.__b + 1, i = null, (u = o.__i = ot(o, r, _, f)) !== -1 && (f--, (i = r[u]) && (i.__u |= 131072)), i == null || i.__v === null ? (u == -1 && s--, typeof o.type != "function" && (o.__u |= 65536)) : u !== _ && (u == _ - 1 ? s-- : u == _ + 1 ? s++ : (u > _ ? s-- : s++, o.__u |= 65536))) : o = t.__k[n] = null;
  if (f)
    for (n = 0; n < l; n++)
      (i = r[n]) != null && !(131072 & i.__u) && (i.__e == t.__d && (t.__d = $(i)), Ve(i, i));
}
function We(t, e, r) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = 0; n && o < n.length; o++)
      n[o] && (n[o].__ = t, e = We(n[o], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !r.contains(e) && (e = $(t)), r.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function ot(t, e, r, n) {
  var o = t.key, i = t.type, _ = r - 1, u = r + 1, c = e[r];
  if (c === null || c && o == c.key && i === c.type && !(131072 & c.__u))
    return r;
  if (n > (c != null && !(131072 & c.__u) ? 1 : 0))
    for (; _ >= 0 || u < e.length; ) {
      if (_ >= 0) {
        if ((c = e[_]) && !(131072 & c.__u) && o == c.key && i === c.type)
          return _;
        _--;
      }
      if (u < e.length) {
        if ((c = e[u]) && !(131072 & c.__u) && o == c.key && i === c.type)
          return u;
        u++;
      }
    }
  return -1;
}
function Se(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || rt.test(e) ? r : r + "px";
}
function N(t, e, r, n, o) {
  var i;
  e:
    if (e === "style")
      if (typeof r == "string")
        t.style.cssText = r;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (e in n)
            r && e in r || Se(t.style, e, "");
        if (r)
          for (e in r)
            n && r[e] === n[e] || Se(t.style, e, r[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      i = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in t || e === "onFocusOut" || e === "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = r, r ? n ? r.u = n.u : (r.u = pe, t.addEventListener(e, i ? ie : oe, i)) : t.removeEventListener(e, i ? ie : oe, i);
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
function ke(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e.t == null)
        e.t = pe++;
      else if (e.t < r.u)
        return;
      return r(v.event ? v.event(e) : e);
    }
  };
}
function he(t, e, r, n, o, i, _, u, c, l) {
  var f, s, d, a, g, y, S, h, b, H, P, D, M, me, R, X, k = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & r.__u && (c = !!(32 & r.__u), i = [u = e.__e = r.__e]), (f = v.__b) && f(e);
  e:
    if (typeof k == "function")
      try {
        if (h = e.props, b = "prototype" in k && k.prototype.render, H = (f = k.contextType) && n[f.__c], P = f ? H ? H.props.value : f.__ : n, r.__c ? S = (s = e.__c = r.__c).__ = s.__E : (b ? e.__c = s = new k(h, P) : (e.__c = s = new q(h, P), s.constructor = k, s.render = st), H && H.sub(s), s.props = h, s.state || (s.state = {}), s.context = P, s.__n = n, d = s.__d = !0, s.__h = [], s._sb = []), b && s.__s == null && (s.__s = s.state), b && k.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = T({}, s.__s)), T(s.__s, k.getDerivedStateFromProps(h, s.__s))), a = s.props, g = s.state, s.__v = e, d)
          b && k.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), b && s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (b && k.getDerivedStateFromProps == null && h !== a && s.componentWillReceiveProps != null && s.componentWillReceiveProps(h, P), !s.__e && (s.shouldComponentUpdate != null && s.shouldComponentUpdate(h, s.__s, P) === !1 || e.__v === r.__v)) {
            for (e.__v !== r.__v && (s.props = h, s.state = s.__s, s.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(L) {
              L && (L.__ = e);
            }), D = 0; D < s._sb.length; D++)
              s.__h.push(s._sb[D]);
            s._sb = [], s.__h.length && _.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(h, s.__s, P), b && s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(a, g, y);
          });
        }
        if (s.context = P, s.props = h, s.__P = t, s.__e = !1, M = v.__r, me = 0, b) {
          for (s.state = s.__s, s.__d = !1, M && M(e), f = s.render(s.props, s.state, s.context), R = 0; R < s._sb.length; R++)
            s.__h.push(s._sb[R]);
          s._sb = [];
        } else
          do
            s.__d = !1, M && M(e), f = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++me < 25);
        s.state = s.__s, s.getChildContext != null && (n = T(T({}, n), s.getChildContext())), b && !d && s.getSnapshotBeforeUpdate != null && (y = s.getSnapshotBeforeUpdate(a, g)), Be(t, de(X = f != null && f.type === K && f.key == null ? f.props.children : f) ? X : [X], e, r, n, o, i, _, u, c, l), s.base = e.__e, e.__u &= -161, s.__h.length && _.push(s), S && (s.__E = s.__ = null);
      } catch (L) {
        if (e.__v = null, c || i != null) {
          for (e.__u |= c ? 160 : 32; u && u.nodeType === 8 && u.nextSibling; )
            u = u.nextSibling;
          i[i.indexOf(u)] = null, e.__e = u;
        } else
          e.__e = r.__e, e.__k = r.__k;
        v.__e(L, e, r);
      }
    else
      i == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = it(r.__e, e, r, n, o, i, _, c, l);
  (f = v.diffed) && f(e);
}
function qe(t, e, r) {
  e.__d = void 0;
  for (var n = 0; n < r.length; n++)
    ve(r[n], r[++n], r[++n]);
  v.__c && v.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      v.__e(i, o.__v);
    }
  });
}
function it(t, e, r, n, o, i, _, u, c) {
  var l, f, s, d, a, g, y, S = r.props, h = e.props, b = e.type;
  if (b === "svg" ? o = "http://www.w3.org/2000/svg" : b === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (l = 0; l < i.length; l++)
      if ((a = i[l]) && "setAttribute" in a == !!b && (b ? a.localName === b : a.nodeType === 3)) {
        t = a, i[l] = null;
        break;
      }
  }
  if (t == null) {
    if (b === null)
      return document.createTextNode(h);
    t = document.createElementNS(o, b, h.is && h), u && (v.__m && v.__m(e, i), u = !1), i = null;
  }
  if (b === null)
    S === h || u && t.data === h || (t.data = h);
  else {
    if (i = i && J.call(t.childNodes), S = r.props || O, !u && i != null)
      for (S = {}, l = 0; l < t.attributes.length; l++)
        S[(a = t.attributes[l]).name] = a.value;
    for (l in S)
      if (a = S[l], l != "children") {
        if (l == "dangerouslySetInnerHTML")
          s = a;
        else if (!(l in h)) {
          if (l == "value" && "defaultValue" in h || l == "checked" && "defaultChecked" in h)
            continue;
          N(t, l, null, a, o);
        }
      }
    for (l in h)
      a = h[l], l == "children" ? d = a : l == "dangerouslySetInnerHTML" ? f = a : l == "value" ? g = a : l == "checked" ? y = a : u && typeof a != "function" || S[l] === a || N(t, l, a, S[l], o);
    if (f)
      u || s && (f.__html === s.__html || f.__html === t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
    else if (s && (t.innerHTML = ""), Be(t, de(d) ? d : [d], e, r, n, b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, _, i ? i[0] : r.__k && $(r, 0), u, c), i != null)
      for (l = i.length; l--; )
        Le(i[l]);
    u || (l = "value", b === "progress" && g == null ? t.removeAttribute("value") : g !== void 0 && (g !== t[l] || b === "progress" && !g || b === "option" && g !== S[l]) && N(t, l, g, S[l], o), l = "checked", y !== void 0 && y !== t[l] && N(t, l, y, S[l], o));
  }
  return t;
}
function ve(t, e, r) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else
      t.current = e;
  } catch (o) {
    v.__e(o, r);
  }
}
function Ve(t, e, r) {
  var n, o;
  if (v.unmount && v.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || ve(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (i) {
        v.__e(i, e);
      }
    n.base = n.__P = null;
  }
  if (n = t.__k)
    for (o = 0; o < n.length; o++)
      n[o] && Ve(n[o], e, r || typeof t.type != "function");
  r || Le(t.__e), t.__c = t.__ = t.__e = t.__d = void 0;
}
function st(t, e, r) {
  return this.constructor(t, r);
}
function _t(t, e, r) {
  var n, o, i, _;
  v.__ && v.__(t, e), o = (n = typeof r == "function") ? null : r && r.__k || e.__k, i = [], _ = [], he(e, t = (!n && r || e).__k = p(K, null, [t]), o || O, O, e.namespaceURI, !n && r ? [r] : o ? null : e.firstChild ? J.call(e.childNodes) : null, i, !n && r ? r : o ? o.__e : e.firstChild, n, _), qe(i, t, _);
}
J = Re.slice, v = { __e: function(t, e, r, n) {
  for (var o, i, _; e = e.__; )
    if ((o = e.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), _ = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), _ = o.__d), _)
          return o.__E = o;
      } catch (u) {
        t = u;
      }
  throw t;
} }, Fe = 0, q.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = T({}, this.state), typeof t == "function" && (t = t(T({}, r), this.props)), t && T(r, t), t != null && this.__v && (e && this._sb.push(e), we(this));
}, q.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), we(this));
}, q.prototype.render = K, U = [], De = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ne = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, z.__r = 0, pe = 0, oe = ke(!1), ie = ke(!0);
var I, m, Z, xe, G = 0, Ye = [], w = v, Ee = w.__b, Pe = w.__r, Ce = w.diffed, Te = w.__c, Ae = w.unmount, Ue = w.__;
function ye(t, e) {
  w.__h && w.__h(m, t, G || e), G = 0;
  var r = m.__H || (m.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function ze(t) {
  return G = 1, ut(Je, t);
}
function ut(t, e, r) {
  var n = ye(I++, 2);
  if (n.t = t, !n.__c && (n.__ = [r ? r(e) : Je(void 0, e), function(u) {
    var c = n.__N ? n.__N[0] : n.__[0], l = n.t(c, u);
    c !== l && (n.__N = [l, n.__[1]], n.__c.setState({}));
  }], n.__c = m, !m.u)) {
    var o = function(u, c, l) {
      if (!n.__c.__H)
        return !0;
      var f = n.__c.__H.__.filter(function(d) {
        return !!d.__c;
      });
      if (f.every(function(d) {
        return !d.__N;
      }))
        return !i || i.call(this, u, c, l);
      var s = !1;
      return f.forEach(function(d) {
        if (d.__N) {
          var a = d.__[0];
          d.__ = d.__N, d.__N = void 0, a !== d.__[0] && (s = !0);
        }
      }), !(!s && n.__c.props === u) && (!i || i.call(this, u, c, l));
    };
    m.u = !0;
    var i = m.shouldComponentUpdate, _ = m.componentWillUpdate;
    m.componentWillUpdate = function(u, c, l) {
      if (this.__e) {
        var f = i;
        i = void 0, o(u, c, l), i = f;
      }
      _ && _.call(this, u, c, l);
    }, m.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function j(t, e) {
  var r = ye(I++, 3);
  !w.__s && Ge(r.__H, e) && (r.__ = t, r.i = e, m.__H.__h.push(r));
}
function x(t) {
  return G = 5, ct(function() {
    return { current: t };
  }, []);
}
function ct(t, e) {
  var r = ye(I++, 7);
  return Ge(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function lt() {
  for (var t; t = Ye.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(V), t.__H.__h.forEach(se), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], w.__e(e, t.__v);
      }
}
w.__b = function(t) {
  m = null, Ee && Ee(t);
}, w.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Ue && Ue(t, e);
}, w.__r = function(t) {
  Pe && Pe(t), I = 0;
  var e = (m = t.__c).__H;
  e && (Z === m ? (e.__h = [], m.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.i = r.__N = void 0;
  })) : (e.__h.forEach(V), e.__h.forEach(se), e.__h = [], I = 0)), Z = m;
}, w.diffed = function(t) {
  Ce && Ce(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Ye.push(e) !== 1 && xe === w.requestAnimationFrame || ((xe = w.requestAnimationFrame) || at)(lt)), e.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.i = void 0;
  })), Z = m = null;
}, w.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(V), r.__h = r.__h.filter(function(n) {
        return !n.__ || se(n);
      });
    } catch (n) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], w.__e(n, r.__v);
    }
  }), Te && Te(t, e);
}, w.unmount = function(t) {
  Ae && Ae(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      V(n);
    } catch (o) {
      e = o;
    }
  }), r.__H = void 0, e && w.__e(e, r.__v));
};
var $e = typeof requestAnimationFrame == "function";
function at(t) {
  var e, r = function() {
    clearTimeout(n), $e && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 100);
  $e && (e = requestAnimationFrame(r));
}
function V(t) {
  var e = m, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), m = e;
}
function se(t) {
  var e = m;
  t.__c = t.__(), m = e;
}
function Ge(t, e) {
  return !t || t.length !== e.length || e.some(function(r, n) {
    return r !== t[n];
  });
}
function Je(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const ee = {
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "3rem",
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
}, ft = {
  button: "control_button"
}, pt = ({ player: t, audioRef: e }) => {
  const r = x(null), n = x(null);
  j(() => t.onAnimate.subscribe(({ playbackMilliseconds: f }) => {
    r.current && (r.current.valueAsNumber = f / 1e3), n.current && (n.current.textContent = l());
  }).unsubscribe, [t]);
  const o = () => {
    if (!r.current)
      return;
    const f = r.current.valueAsNumber * 1e3;
    t.scrub(f);
  }, i = () => {
    t.play();
  }, _ = () => {
    t.stop();
  }, [u, c] = ze(null), l = () => `${Math.round(t.getCurrentPlaybackMilliseconds() / 1e3)}:${Math.round(u / 1e3)}`;
  if (j(() => {
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
  }, []), !!u)
    return p("div", { style: ee.container }, [
      p("button", { class: ft.button, onClick: i }, "Play"),
      p("button", { onClick: _ }, "Stop"),
      p("time", { style: ee.time, ref: n }, l()),
      p("input", {
        style: ee.scrubBar,
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
var _e = function(t, e) {
  return _e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, _e(t, e);
};
function F(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  _e(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
function ue(t) {
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
function ce(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), o, i = [], _;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (u) {
    _ = { error: u };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (_)
        throw _.error;
    }
  }
  return i;
}
function le(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = e.length, i; n < o; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function E(t) {
  return typeof t == "function";
}
function Ke(t) {
  var e = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = t(e);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var te = Ke(function(t) {
  return function(r) {
    t(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, o) {
      return o + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function ae(t, e) {
  if (t) {
    var r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
  }
}
var Q = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, r, n, o, i;
    if (!this.closed) {
      this.closed = !0;
      var _ = this._parentage;
      if (_)
        if (this._parentage = null, Array.isArray(_))
          try {
            for (var u = ue(_), c = u.next(); !c.done; c = u.next()) {
              var l = c.value;
              l.remove(this);
            }
          } catch (y) {
            e = { error: y };
          } finally {
            try {
              c && !c.done && (r = u.return) && r.call(u);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          _.remove(this);
      var f = this.initialTeardown;
      if (E(f))
        try {
          f();
        } catch (y) {
          i = y instanceof te ? y.errors : [y];
        }
      var s = this._finalizers;
      if (s) {
        this._finalizers = null;
        try {
          for (var d = ue(s), a = d.next(); !a.done; a = d.next()) {
            var g = a.value;
            try {
              He(g);
            } catch (y) {
              i = i ?? [], y instanceof te ? i = le(le([], ce(i)), ce(y.errors)) : i.push(y);
            }
          }
        } catch (y) {
          n = { error: y };
        } finally {
          try {
            a && !a.done && (o = d.return) && o.call(d);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
      if (i)
        throw new te(i);
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
    r === e ? this._parentage = null : Array.isArray(r) && ae(r, e);
  }, t.prototype.remove = function(e) {
    var r = this._finalizers;
    r && ae(r, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Qe = Q.EMPTY;
function Xe(t) {
  return t instanceof Q || t && "closed" in t && E(t.remove) && E(t.add) && E(t.unsubscribe);
}
function He(t) {
  E(t) ? t() : t.unsubscribe();
}
var Ze = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, et = {
  setTimeout: function(t, e) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    return setTimeout.apply(void 0, le([t, e], ce(r)));
  },
  clearTimeout: function(t) {
    var e = et.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function dt(t) {
  et.setTimeout(function() {
    throw t;
  });
}
function Me() {
}
function Y(t) {
  t();
}
var tt = function(t) {
  F(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.isStopped = !1, r ? (n.destination = r, Xe(r) && r.add(n)) : n.destination = bt, n;
  }
  return e.create = function(r, n, o) {
    return new fe(r, n, o);
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
}(Q), ht = Function.prototype.bind;
function re(t, e) {
  return ht.call(t, e);
}
var vt = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(e);
      } catch (n) {
        B(n);
      }
  }, t.prototype.error = function(e) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(e);
      } catch (n) {
        B(n);
      }
    else
      B(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (r) {
        B(r);
      }
  }, t;
}(), fe = function(t) {
  F(e, t);
  function e(r, n, o) {
    var i = t.call(this) || this, _;
    if (E(r) || !r)
      _ = {
        next: r ?? void 0,
        error: n ?? void 0,
        complete: o ?? void 0
      };
    else {
      var u;
      i && Ze.useDeprecatedNextContext ? (u = Object.create(r), u.unsubscribe = function() {
        return i.unsubscribe();
      }, _ = {
        next: r.next && re(r.next, u),
        error: r.error && re(r.error, u),
        complete: r.complete && re(r.complete, u)
      }) : _ = r;
    }
    return i.destination = new vt(_), i;
  }
  return e;
}(tt);
function B(t) {
  dt(t);
}
function yt(t) {
  throw t;
}
var bt = {
  closed: !0,
  next: Me,
  error: yt,
  complete: Me
}, mt = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function gt(t) {
  return t;
}
function wt(t) {
  return t.length === 0 ? gt : t.length === 1 ? t[0] : function(r) {
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
    var o = this, i = kt(e) ? e : new fe(e, r, n);
    return Y(function() {
      var _ = o, u = _.operator, c = _.source;
      i.add(u ? u.call(i, c) : c ? o._subscribe(i) : o._trySubscribe(i));
    }), i;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (r) {
      e.error(r);
    }
  }, t.prototype.forEach = function(e, r) {
    var n = this;
    return r = Ie(r), new r(function(o, i) {
      var _ = new fe({
        next: function(u) {
          try {
            e(u);
          } catch (c) {
            i(c), _.unsubscribe();
          }
        },
        error: i,
        complete: o
      });
      n.subscribe(_);
    });
  }, t.prototype._subscribe = function(e) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(e);
  }, t.prototype[mt] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    return wt(e)(this);
  }, t.prototype.toPromise = function(e) {
    var r = this;
    return e = Ie(e), new e(function(n, o) {
      var i;
      r.subscribe(function(_) {
        return i = _;
      }, function(_) {
        return o(_);
      }, function() {
        return n(i);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Ie(t) {
  var e;
  return (e = t ?? Ze.Promise) !== null && e !== void 0 ? e : Promise;
}
function St(t) {
  return t && E(t.next) && E(t.error) && E(t.complete);
}
function kt(t) {
  return t && t instanceof tt || St(t) && Xe(t);
}
var xt = Ke(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), be = function(t) {
  F(e, t);
  function e() {
    var r = t.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return e.prototype.lift = function(r) {
    var n = new je(this, this);
    return n.operator = r, n;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new xt();
  }, e.prototype.next = function(r) {
    var n = this;
    Y(function() {
      var o, i;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var _ = ue(n.currentObservers), u = _.next(); !u.done; u = _.next()) {
            var c = u.value;
            c.next(r);
          }
        } catch (l) {
          o = { error: l };
        } finally {
          try {
            u && !u.done && (i = _.return) && i.call(_);
          } finally {
            if (o)
              throw o.error;
          }
        }
      }
    });
  }, e.prototype.error = function(r) {
    var n = this;
    Y(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = r;
        for (var o = n.observers; o.length; )
          o.shift().error(r);
      }
    });
  }, e.prototype.complete = function() {
    var r = this;
    Y(function() {
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
    var n = this, o = this, i = o.hasError, _ = o.isStopped, u = o.observers;
    return i || _ ? Qe : (this.currentObservers = null, u.push(r), new Q(function() {
      n.currentObservers = null, ae(u, r);
    }));
  }, e.prototype._checkFinalizedStatuses = function(r) {
    var n = this, o = n.hasError, i = n.thrownError, _ = n.isStopped;
    o ? r.error(i) : _ && r.complete();
  }, e.prototype.asObservable = function() {
    var r = new Oe();
    return r.source = this, r;
  }, e.create = function(r, n) {
    return new je(r, n);
  }, e;
}(Oe), je = function(t) {
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
    return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && o !== void 0 ? o : Qe;
  }, e;
}(be), Et = function(t) {
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
}(be);
const Pt = () => {
  const t = x(new Et({ playbackMilliseconds: 0 })).current, e = x(new be()).current, r = x(0), n = x(0), [o, i] = ze("stopped"), _ = () => o === "stopped" ? n.current : performance.now() - r.current + n.current, u = () => {
    const c = _();
    t.next({ playbackMilliseconds: c });
  };
  return j(() => {
    if (o === "stopped") {
      u();
      return;
    } else {
      const c = () => {
        u(), l = requestAnimationFrame(c);
      };
      let l = requestAnimationFrame(c);
      return () => {
        cancelAnimationFrame(l);
      };
    }
  }, [o]), {
    getCurrentPlaybackMilliseconds: _,
    onAnimate: t,
    onScrub: e,
    mode: o,
    scrub(c) {
      r.current = performance.now(), n.current = c, u(), e.next();
    },
    play() {
      const c = _();
      i("playing"), r.current = performance.now(), n.current = c, e.next();
    },
    stop() {
      const c = _();
      i("stopped"), n.current = c, e.next();
    }
  };
}, C = ({ children: t, player: e, enter: r, exit: n, fadeDuration: o }) => {
  const i = x(null);
  return j(() => {
    const _ = i.current;
    if (_)
      return e.onAnimate.subscribe(({ playbackMilliseconds: u }) => {
        const c = (u - r) / o, l = (1 - (u - n)) / o, f = Math.min(c, l);
        f < 1 && (_.style.pointerEvents = "none"), _.style.opacity = f * 100 + "%";
      }).unsubscribe;
  }, [e]), p("div", { ref: i }, t);
}, Ct = browser.runtime.getURL("resources/here-i-am.mp3"), Tt = ({ player: t, audioRef: e }) => {
  const r = e || x(null);
  return j(() => {
    const n = () => {
      r.current.currentTime = t.getCurrentPlaybackMilliseconds() / 1e3, t.mode === "playing" && r.current.paused && r.current.play(), t.mode === "stopped" && !r.current.paused && r.current.pause();
    };
    return n(), t.onScrub.subscribe(() => {
      n();
    }).unsubscribe;
  }, [t]), p("audio", { src: Ct, ref: r });
}, At = {
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
}, A = ({ children: t }) => p("div", { style: At.center }, t);
browser.runtime.getURL("resources/staff-roll.mp3");
browser.runtime.getURL("resources/here-i-am.mp3");
const Ut = browser.runtime.getURL("resources/cohost.svg"), $t = browser.runtime.getURL("resources/jae.jpg"), Ht = browser.runtime.getURL("resources/vogon.png"), Mt = browser.runtime.getURL("resources/aidan.png"), Ot = browser.runtime.getURL("resources/kaara.jpg"), It = browser.runtime.getURL("resources/bugs/eggbug_wink.png"), jt = {
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
}, Ft = () => {
  const t = Pt(), e = x(null);
  return p("div", { style: jt.takeover, class: "takeover" }, [
    p(Tt, { player: t, audioRef: e }),
    p(A, {}, [
      p(C, { enter: 0, exit: 12e3, fadeDuration: 2e3, player: t }, [
        p("div", { style: { display: "flex", flexDirection: "column" } }, [
          p("img", { src: Ut }),
          p(C, { enter: 5e3, exit: 12e3, fadeDuration: 2e3, player: t }, [
            p("div", { style: { marginTop: "24px" } }, "cohost is designed, developed, and operated by anti software software club llc")
          ])
        ])
      ])
    ]),
    p(A, {}, [
      p(C, { enter: 12e3, exit: 45e3, fadeDuration: 2e3, player: t }, [
        p("img", { src: $t })
      ])
    ]),
    p(A, {}, [
      p(C, { enter: 45e3, exit: 75e3, fadeDuration: 2e3, player: t }, [
        p("img", { src: Ht })
      ])
    ]),
    p(A, {}, [
      p(C, { enter: 75e3, exit: 11e4, fadeDuration: 2e3, player: t }, [
        p("img", { src: Mt })
      ])
    ]),
    p(A, {}, [
      p(C, { enter: 11e4, exit: 135e3, fadeDuration: 2e3, player: t }, [
        p("img", { src: Ot })
      ])
    ]),
    p(A, {}, [
      p(C, { enter: (3 * 60 + 30) * 1e3, exit: (3 * 60 + 50) * 1e3, fadeDuration: 2e3, player: t }, [
        p("div", {}, "cohost is designed, developed, and operated by anti software software club llc")
      ])
    ]),
    p(A, {}, [
      p(C, { enter: (3 * 60 + 50) * 1e3, exit: Number.POSITIVE_INFINITY, fadeDuration: 2e3, player: t }, [
        p("div", {}, p("span", {}, "thanks for using cohost ", p("img", { src: It, style: { display: "inline-block" } })))
      ])
    ]),
    p(pt, { player: t, audioRef: e })
  ]);
}, Dt = async () => {
  console.log("start", window.cohost_credits_roll);
  const t = { ...window.cohost_credits_roll };
  t ? t.entry_element ? (document.body.removeChild(t.entry_element), console.log("Removing prev entry")) : console.log("no prev entry element") : console.log("no prev entry");
  const e = document.createElement("div");
  _t(p(Ft, {}), e), document.body.append(e), window.cohost_credits_roll = window.cohost_credits_roll || {}, window.cohost_credits_roll.entry_element = e, console.log("end", window.cohost_credits_roll);
};
Dt();
