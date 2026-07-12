import { j as Nu } from "../jsx-runtime-DmTjM30f.js";
import * as ke from "react";
import kc from "react";
import et from "react-dom";
import { a as Fp, c as Jr, g as Up } from "../_commonjsHelpers-BkfeUUK-.js";
import { BreakpointProvider as Hp } from "../providers/breakpoint/breakpointProvider.js";
import { ThemeProvider as Wp } from "../providers/theme/themeProvider.js";
function zp(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const a in n)
        if (a !== "default" && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(n, a);
          o && Object.defineProperty(e, a, o.get ? o : {
            enumerable: !0,
            get: () => n[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Xl = { exports: {} }, ne = {};
/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bu;
function Vp() {
  if (Bu) return ne;
  Bu = 1;
  var e = kc, t = et;
  function r(d) {
    var R = d, g = d;
    if (d.alternate) for (; R.return; ) R = R.return;
    else {
      d = R;
      do
        R = d, R.flags & 4098 && (g = R.return), d = R.return;
      while (d);
    }
    return R.tag === 3 ? g : null;
  }
  function n(d) {
    if (r(d) !== d) throw Error("Unable to find node on an unmounted component.");
  }
  function a(d) {
    var R = d.alternate;
    if (!R) {
      if (R = r(d), R === null) throw Error("Unable to find node on an unmounted component.");
      return R !== d ? null : d;
    }
    for (var g = d, B = R; ; ) {
      var H = g.return;
      if (H === null) break;
      var W = H.alternate;
      if (W === null) {
        if (B = H.return, B !== null) {
          g = B;
          continue;
        }
        break;
      }
      if (H.child === W.child) {
        for (W = H.child; W; ) {
          if (W === g) return n(H), d;
          if (W === B) return n(H), R;
          W = W.sibling;
        }
        throw Error("Unable to find node on an unmounted component.");
      }
      if (g.return !== B.return) g = H, B = W;
      else {
        for (var L = !1, z = H.child; z; ) {
          if (z === g) {
            L = !0, g = H, B = W;
            break;
          }
          if (z === B) {
            L = !0, B = H, g = W;
            break;
          }
          z = z.sibling;
        }
        if (!L) {
          for (z = W.child; z; ) {
            if (z === g) {
              L = !0, g = W, B = H;
              break;
            }
            if (z === B) {
              L = !0, B = W, g = H;
              break;
            }
            z = z.sibling;
          }
          if (!L) throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (g.alternate !== B) throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (g.tag !== 3) throw Error("Unable to find node on an unmounted component.");
    return g.stateNode.current === g ? d : R;
  }
  var o = Object.assign;
  function l(d) {
    var R = d.keyCode;
    return "charCode" in d ? (d = d.charCode, d === 0 && R === 13 && (d = 13)) : d = R, d === 10 && (d = 13), 32 <= d || d === 13 ? d : 0;
  }
  function u() {
    return !0;
  }
  function i() {
    return !1;
  }
  function s(d) {
    function R(g, B, H, W, L) {
      this._reactName = g, this._targetInst = H, this.type = B, this.nativeEvent = W, this.target = L, this.currentTarget = null;
      for (var z in d) d.hasOwnProperty(z) && (g = d[z], this[z] = g ? g(W) : W[z]);
      return this.isDefaultPrevented = (W.defaultPrevented != null ? W.defaultPrevented : W.returnValue === !1) ? u : i, this.isPropagationStopped = i, this;
    }
    return o(R.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var g = this.nativeEvent;
      g && (g.preventDefault ? g.preventDefault() : typeof g.returnValue != "unknown" && (g.returnValue = !1), this.isDefaultPrevented = u);
    }, stopPropagation: function() {
      var g = this.nativeEvent;
      g && (g.stopPropagation ? g.stopPropagation() : typeof g.cancelBubble != "unknown" && (g.cancelBubble = !0), this.isPropagationStopped = u);
    }, persist: function() {
    }, isPersistent: u }), R;
  }
  var p = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(d) {
    return d.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, m = s(p), v = o({}, p, { view: 0, detail: 0 });
  s(v);
  var w, A, T, $ = o({}, v, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: X, button: 0, buttons: 0, relatedTarget: function(d) {
    return d.relatedTarget === void 0 ? d.fromElement === d.srcElement ? d.toElement : d.fromElement : d.relatedTarget;
  }, movementX: function(d) {
    return "movementX" in d ? d.movementX : (d !== T && (T && d.type === "mousemove" ? (w = d.screenX - T.screenX, A = d.screenY - T.screenY) : A = w = 0, T = d), w);
  }, movementY: function(d) {
    return "movementY" in d ? d.movementY : A;
  } });
  s($);
  var f = o({}, $, { dataTransfer: 0 });
  s(f);
  var C = o({}, v, { relatedTarget: 0 });
  s(C);
  var x = o({}, p, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
  s(x);
  var O = o({}, p, { clipboardData: function(d) {
    return "clipboardData" in d ? d.clipboardData : window.clipboardData;
  } });
  s(O);
  var M = o({}, p, { data: 0 });
  s(M);
  var y = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, P = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, S = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function U(d) {
    var R = this.nativeEvent;
    return R.getModifierState ? R.getModifierState(d) : (d = S[d]) ? !!R[d] : !1;
  }
  function X() {
    return U;
  }
  var Z = o({}, v, { key: function(d) {
    if (d.key) {
      var R = y[d.key] || d.key;
      if (R !== "Unidentified") return R;
    }
    return d.type === "keypress" ? (d = l(d), d === 13 ? "Enter" : String.fromCharCode(d)) : d.type === "keydown" || d.type === "keyup" ? P[d.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: X, charCode: function(d) {
    return d.type === "keypress" ? l(d) : 0;
  }, keyCode: function(d) {
    return d.type === "keydown" || d.type === "keyup" ? d.keyCode : 0;
  }, which: function(d) {
    return d.type === "keypress" ? l(d) : d.type === "keydown" || d.type === "keyup" ? d.keyCode : 0;
  } });
  s(Z);
  var J = o({}, $, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
  s(J);
  var q = o({}, v, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: X });
  s(q);
  var N = o({}, p, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
  s(N);
  var le = o({}, $, { deltaX: function(d) {
    return "deltaX" in d ? d.deltaX : "wheelDeltaX" in d ? -d.wheelDeltaX : 0;
  }, deltaY: function(d) {
    return "deltaY" in d ? d.deltaY : "wheelDeltaY" in d ? -d.wheelDeltaY : "wheelDelta" in d ? -d.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 });
  s(le);
  function ee(d, R, g, B, H, W, L, z, me) {
    var qe = Array.prototype.slice.call(arguments, 3);
    try {
      R.apply(g, qe);
    } catch (ul) {
      this.onError(ul);
    }
  }
  var oe = !1, fe = null, Oe = !1, ft = null, Yt = { onError: function(d) {
    oe = !0, fe = d;
  } };
  function Kt(d, R, g, B, H, W, L, z, me) {
    oe = !1, fe = null, ee.apply(Yt, arguments);
  }
  function Xt(d, R, g, B, H, W, L, z, me) {
    if (Kt.apply(this, arguments), oe) {
      if (oe) {
        var qe = fe;
        oe = !1, fe = null;
      } else throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
      Oe || (Oe = !0, ft = qe);
    }
  }
  var pt = Array.isArray, Re = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events, Jt = Re[0], Qt = Re[1], Zt = Re[2], er = Re[3], tr = Re[4], I = e.unstable_act;
  function We() {
  }
  function Me(d, R) {
    if (!d) return [];
    if (d = a(d), !d) return [];
    for (var g = d, B = []; ; ) {
      if (g.tag === 5 || g.tag === 6 || g.tag === 1 || g.tag === 0) {
        var H = g.stateNode;
        R(H) && B.push(H);
      }
      if (g.child) g.child.return = g, g = g.child;
      else {
        if (g === d) return B;
        for (; !g.sibling; ) {
          if (!g.return || g.return === d) return B;
          g = g.return;
        }
        g.sibling.return = g.return, g = g.sibling;
      }
    }
  }
  function pe(d, R) {
    if (d && !d._reactInternals) {
      var g = String(d);
      throw d = pt(d) ? "an array" : d && d.nodeType === 1 && d.tagName ? "a DOM node" : g === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : g, Error(R + "(...): the first argument must be a React class instance. Instead received: " + (d + "."));
    }
  }
  function Tt(d) {
    return !(!d || d.nodeType !== 1 || !d.tagName);
  }
  function Ie(d) {
    return Tt(d) ? !1 : d != null && typeof d.render == "function" && typeof d.setState == "function";
  }
  function mt(d, R) {
    return Ie(d) ? d._reactInternals.type === R : !1;
  }
  function Ne(d, R) {
    return pe(d, "findAllInRenderedTree"), d ? Me(d._reactInternals, R) : [];
  }
  function Ot(d, R) {
    return pe(d, "scryRenderedDOMComponentsWithClass"), Ne(d, function(g) {
      if (Tt(g)) {
        var B = g.className;
        typeof B != "string" && (B = g.getAttribute("class") || "");
        var H = B.split(/\s+/);
        if (!pt(R)) {
          if (R === void 0) throw Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
          R = R.split(/\s+/);
        }
        return R.every(function(W) {
          return H.indexOf(W) !== -1;
        });
      }
      return !1;
    });
  }
  function Pr(d, R) {
    return pe(d, "scryRenderedDOMComponentsWithTag"), Ne(d, function(g) {
      return Tt(g) && g.tagName.toUpperCase() === R.toUpperCase();
    });
  }
  function _r(d, R) {
    return pe(d, "scryRenderedComponentsWithType"), Ne(d, function(g) {
      return mt(g, R);
    });
  }
  function Sr(d, R, g) {
    var B = d.type || "unknown-event";
    d.currentTarget = Qt(g), Xt(B, R, void 0, d), d.currentTarget = null;
  }
  function Tr(d, R, g) {
    for (var B = []; d; ) {
      B.push(d);
      do
        d = d.return;
      while (d && d.tag !== 5);
      d = d || null;
    }
    for (d = B.length; 0 < d--; ) R(B[d], "captured", g);
    for (d = 0; d < B.length; d++) R(B[d], "bubbled", g);
  }
  function Or(d, R) {
    var g = d.stateNode;
    if (!g) return null;
    var B = Zt(g);
    if (!B) return null;
    g = B[R];
    e: switch (R) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (B = !B.disabled) || (d = d.type, B = !(d === "button" || d === "input" || d === "select" || d === "textarea")), d = !B;
        break e;
      default:
        d = !1;
    }
    if (d) return null;
    if (g && typeof g != "function") throw Error("Expected `" + R + "` listener to be a function, instead got a value of `" + typeof g + "` type.");
    return g;
  }
  function ll(d, R, g) {
    d && g && g._reactName && (R = Or(d, g._reactName)) && (g._dispatchListeners == null && (g._dispatchListeners = []), g._dispatchInstances == null && (g._dispatchInstances = []), g._dispatchListeners.push(R), g._dispatchInstances.push(d));
  }
  function rr(d, R, g) {
    var B = g._reactName;
    R === "captured" && (B += "Capture"), (R = Or(d, B)) && (g._dispatchListeners == null && (g._dispatchListeners = []), g._dispatchInstances == null && (g._dispatchInstances = []), g._dispatchListeners.push(R), g._dispatchInstances.push(d));
  }
  var qr = {}, vt = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
  function il(d) {
    return function(R, g) {
      if (e.isValidElement(R)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
      if (Ie(R)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
      var B = "on" + d[0].toUpperCase() + d.slice(1), H = new We();
      H.target = R, H.type = d.toLowerCase();
      var W = Jt(R), L = new m(B, H.type, W, H, R);
      L.persist(), o(L, g), vt.has(d) ? L && L._reactName && ll(L._targetInst, null, L) : L && L._reactName && Tr(L._targetInst, rr, L), t.unstable_batchedUpdates(function() {
        if (er(R), L) {
          var z = L._dispatchListeners, me = L._dispatchInstances;
          if (pt(z)) for (var qe = 0; qe < z.length && !L.isPropagationStopped(); qe++) Sr(L, z[qe], me[qe]);
          else z && Sr(L, z, me);
          L._dispatchListeners = null, L._dispatchInstances = null, L.isPersistent() || L.constructor.release(L);
        }
        if (Oe) throw z = ft, Oe = !1, ft = null, z;
      }), tr();
    };
  }
  return "blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(d) {
    qr[d] = il(d);
  }), ne.Simulate = qr, ne.act = I, ne.findAllInRenderedTree = Ne, ne.findRenderedComponentWithType = function(d, R) {
    if (pe(d, "findRenderedComponentWithType"), d = _r(d, R), d.length !== 1) throw Error("Did not find exactly one match (found: " + d.length + ") for componentType:" + R);
    return d[0];
  }, ne.findRenderedDOMComponentWithClass = function(d, R) {
    if (pe(d, "findRenderedDOMComponentWithClass"), d = Ot(d, R), d.length !== 1) throw Error("Did not find exactly one match (found: " + d.length + ") for class:" + R);
    return d[0];
  }, ne.findRenderedDOMComponentWithTag = function(d, R) {
    if (pe(d, "findRenderedDOMComponentWithTag"), d = Pr(d, R), d.length !== 1) throw Error("Did not find exactly one match (found: " + d.length + ") for tag:" + R);
    return d[0];
  }, ne.isCompositeComponent = Ie, ne.isCompositeComponentWithType = mt, ne.isDOMComponent = Tt, ne.isDOMComponentElement = function(d) {
    return !!(d && e.isValidElement(d) && d.tagName);
  }, ne.isElement = function(d) {
    return e.isValidElement(d);
  }, ne.isElementOfType = function(d, R) {
    return e.isValidElement(d) && d.type === R;
  }, ne.mockComponent = function(d, R) {
    return R = R || d.mockTagName || "div", d.prototype.render.mockImplementation(function() {
      return e.createElement(R, null, this.props.children);
    }), this;
  }, ne.nativeTouchData = function(d, R) {
    return { touches: [{ pageX: d, pageY: R }] };
  }, ne.renderIntoDocument = function(d) {
    var R = document.createElement("div");
    return t.render(d, R);
  }, ne.scryRenderedComponentsWithType = _r, ne.scryRenderedDOMComponentsWithClass = Ot, ne.scryRenderedDOMComponentsWithTag = Pr, ne.traverseTwoPhase = Tr, ne;
}
var ae = {};
/**
 * @license React
 * react-dom-test-utils.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Du;
function Gp() {
  return Du || (Du = 1, process.env.NODE_ENV !== "production" && function() {
    var e = kc, t = et, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(c) {
      {
        for (var b = arguments.length, h = new Array(b > 1 ? b - 1 : 0), E = 1; E < b; E++)
          h[E - 1] = arguments[E];
        o("warn", c, h);
      }
    }
    function a(c) {
      {
        for (var b = arguments.length, h = new Array(b > 1 ? b - 1 : 0), E = 1; E < b; E++)
          h[E - 1] = arguments[E];
        o("error", c, h);
      }
    }
    function o(c, b, h) {
      {
        var E = r.ReactDebugCurrentFrame, D = E.getStackAddendum();
        D !== "" && (b += "%s", h = h.concat([D]));
        var F = h.map(function(te) {
          return String(te);
        });
        F.unshift("Warning: " + b), Function.prototype.apply.call(console[c], console, F);
      }
    }
    function l(c) {
      return c._reactInternals;
    }
    var u = 0, i = 1, s = 3, p = 5, m = 6, v = (
      /*                      */
      0
    ), w = (
      /*                    */
      2
    ), A = (
      /*                    */
      4096
    );
    r.ReactCurrentOwner;
    function T(c) {
      var b = c, h = c;
      if (c.alternate)
        for (; b.return; )
          b = b.return;
      else {
        var E = b;
        do
          b = E, (b.flags & (w | A)) !== v && (h = b.return), E = b.return;
        while (E);
      }
      return b.tag === s ? h : null;
    }
    function $(c) {
      if (T(c) !== c)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function f(c) {
      var b = c.alternate;
      if (!b) {
        var h = T(c);
        if (h === null)
          throw new Error("Unable to find node on an unmounted component.");
        return h !== c ? null : c;
      }
      for (var E = c, D = b; ; ) {
        var F = E.return;
        if (F === null)
          break;
        var te = F.alternate;
        if (te === null) {
          var be = F.return;
          if (be !== null) {
            E = D = be;
            continue;
          }
          break;
        }
        if (F.child === te.child) {
          for (var he = F.child; he; ) {
            if (he === E)
              return $(F), c;
            if (he === D)
              return $(F), b;
            he = he.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (E.return !== D.return)
          E = F, D = te;
        else {
          for (var ve = !1, ue = F.child; ue; ) {
            if (ue === E) {
              ve = !0, E = F, D = te;
              break;
            }
            if (ue === D) {
              ve = !0, D = F, E = te;
              break;
            }
            ue = ue.sibling;
          }
          if (!ve) {
            for (ue = te.child; ue; ) {
              if (ue === E) {
                ve = !0, E = te, D = F;
                break;
              }
              if (ue === D) {
                ve = !0, D = te, E = F;
                break;
              }
              ue = ue.sibling;
            }
            if (!ve)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (E.alternate !== D)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (E.tag !== s)
        throw new Error("Unable to find node on an unmounted component.");
      return E.stateNode.current === E ? c : b;
    }
    var C = Object.assign;
    function x(c) {
      var b, h = c.keyCode;
      return "charCode" in c ? (b = c.charCode, b === 0 && h === 13 && (b = 13)) : b = h, b === 10 && (b = 13), b >= 32 || b === 13 ? b : 0;
    }
    function O() {
      return !0;
    }
    function M() {
      return !1;
    }
    function y(c) {
      function b(h, E, D, F, te) {
        this._reactName = h, this._targetInst = D, this.type = E, this.nativeEvent = F, this.target = te, this.currentTarget = null;
        for (var be in c)
          if (c.hasOwnProperty(be)) {
            var he = c[be];
            he ? this[be] = he(F) : this[be] = F[be];
          }
        var ve = F.defaultPrevented != null ? F.defaultPrevented : F.returnValue === !1;
        return ve ? this.isDefaultPrevented = O : this.isDefaultPrevented = M, this.isPropagationStopped = M, this;
      }
      return C(b.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var h = this.nativeEvent;
          h && (h.preventDefault ? h.preventDefault() : typeof h.returnValue != "unknown" && (h.returnValue = !1), this.isDefaultPrevented = O);
        },
        stopPropagation: function() {
          var h = this.nativeEvent;
          h && (h.stopPropagation ? h.stopPropagation() : typeof h.cancelBubble != "unknown" && (h.cancelBubble = !0), this.isPropagationStopped = O);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: O
      }), b;
    }
    var P = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(c) {
        return c.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, S = y(P), U = C({}, P, {
      view: 0,
      detail: 0
    });
    y(U);
    var X, Z, J;
    function q(c) {
      c !== J && (J && c.type === "mousemove" ? (X = c.screenX - J.screenX, Z = c.screenY - J.screenY) : (X = 0, Z = 0), J = c);
    }
    var N = C({}, U, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Re,
      button: 0,
      buttons: 0,
      relatedTarget: function(c) {
        return c.relatedTarget === void 0 ? c.fromElement === c.srcElement ? c.toElement : c.fromElement : c.relatedTarget;
      },
      movementX: function(c) {
        return "movementX" in c ? c.movementX : (q(c), X);
      },
      movementY: function(c) {
        return "movementY" in c ? c.movementY : Z;
      }
    });
    y(N);
    var le = C({}, N, {
      dataTransfer: 0
    });
    y(le);
    var ee = C({}, U, {
      relatedTarget: 0
    });
    y(ee);
    var oe = C({}, P, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    y(oe);
    var fe = C({}, P, {
      clipboardData: function(c) {
        return "clipboardData" in c ? c.clipboardData : window.clipboardData;
      }
    });
    y(fe);
    var Oe = C({}, P, {
      data: 0
    });
    y(Oe);
    var ft = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Yt = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Kt(c) {
      if (c.key) {
        var b = ft[c.key] || c.key;
        if (b !== "Unidentified")
          return b;
      }
      if (c.type === "keypress") {
        var h = x(c);
        return h === 13 ? "Enter" : String.fromCharCode(h);
      }
      return c.type === "keydown" || c.type === "keyup" ? Yt[c.keyCode] || "Unidentified" : "";
    }
    var Xt = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function pt(c) {
      var b = this, h = b.nativeEvent;
      if (h.getModifierState)
        return h.getModifierState(c);
      var E = Xt[c];
      return E ? !!h[E] : !1;
    }
    function Re(c) {
      return pt;
    }
    var Jt = C({}, U, {
      key: Kt,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Re,
      // Legacy Interface
      charCode: function(c) {
        return c.type === "keypress" ? x(c) : 0;
      },
      keyCode: function(c) {
        return c.type === "keydown" || c.type === "keyup" ? c.keyCode : 0;
      },
      which: function(c) {
        return c.type === "keypress" ? x(c) : c.type === "keydown" || c.type === "keyup" ? c.keyCode : 0;
      }
    });
    y(Jt);
    var Qt = C({}, N, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    });
    y(Qt);
    var Zt = C({}, U, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Re
    });
    y(Zt);
    var er = C({}, P, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    y(er);
    var tr = C({}, N, {
      deltaX: function(c) {
        return "deltaX" in c ? c.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in c ? -c.wheelDeltaX : 0
        );
      },
      deltaY: function(c) {
        return "deltaY" in c ? c.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in c ? -c.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in c ? -c.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    });
    y(tr);
    var I = 1;
    function We(c, b, h, E, D, F, te, be, he) {
      var ve = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(h, ve);
      } catch (ue) {
        this.onError(ue);
      }
    }
    var Me = We;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var pe = document.createElement("react");
      Me = function(b, h, E, D, F, te, be, he, ve) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var ue = document.createEvent("Event"), cl = !1, Ou = !0, Lp = window.event, qu = Object.getOwnPropertyDescriptor(window, "event");
        function xu() {
          pe.removeEventListener(dl, Au, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Lp);
        }
        var jp = Array.prototype.slice.call(arguments, 3);
        function Au() {
          cl = !0, xu(), h.apply(E, jp), Ou = !1;
        }
        var ze, $u = !1, Mu = !1;
        function Iu($r) {
          if (ze = $r.error, $u = !0, ze === null && $r.colno === 0 && $r.lineno === 0 && (Mu = !0), $r.defaultPrevented && ze != null && typeof ze == "object")
            try {
              ze._suppressLogging = !0;
            } catch {
            }
        }
        var dl = "react-" + (b || "invokeguardedcallback");
        if (window.addEventListener("error", Iu), pe.addEventListener(dl, Au, !1), ue.initEvent(dl, !1, !1), pe.dispatchEvent(ue), qu && Object.defineProperty(window, "event", qu), cl && Ou && ($u ? Mu && (ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ze)), window.removeEventListener("error", Iu), !cl)
          return xu(), We.apply(this, arguments);
      };
    }
    var Tt = Me, Ie = !1, mt = null, Ne = !1, Ot = null, Pr = {
      onError: function(c) {
        Ie = !0, mt = c;
      }
    };
    function _r(c, b, h, E, D, F, te, be, he) {
      Ie = !1, mt = null, Tt.apply(Pr, arguments);
    }
    function Sr(c, b, h, E, D, F, te, be, he) {
      if (_r.apply(this, arguments), Ie) {
        var ve = Or();
        Ne || (Ne = !0, Ot = ve);
      }
    }
    function Tr() {
      if (Ne) {
        var c = Ot;
        throw Ne = !1, Ot = null, c;
      }
    }
    function Or() {
      if (Ie) {
        var c = mt;
        return Ie = !1, mt = null, c;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    var ll = Array.isArray;
    function rr(c) {
      return ll(c);
    }
    var qr = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vt = qr.Events, il = vt[0], d = vt[1], R = vt[2], g = vt[3], B = vt[4], H = e.unstable_act;
    function W(c) {
    }
    var L = !1;
    function z(c, b) {
      if (!c)
        return [];
      var h = f(c);
      if (!h)
        return [];
      for (var E = h, D = []; ; ) {
        if (E.tag === p || E.tag === m || E.tag === i || E.tag === u) {
          var F = E.stateNode;
          b(F) && D.push(F);
        }
        if (E.child) {
          E.child.return = E, E = E.child;
          continue;
        }
        if (E === h)
          return D;
        for (; !E.sibling; ) {
          if (!E.return || E.return === h)
            return D;
          E = E.return;
        }
        E.sibling.return = E.return, E = E.sibling;
      }
    }
    function me(c, b) {
      if (c && !l(c)) {
        var h, E = String(c);
        throw rr(c) ? h = "an array" : c && c.nodeType === I && c.tagName ? h = "a DOM node" : E === "[object Object]" ? h = "object with keys {" + Object.keys(c).join(", ") + "}" : h = E, new Error(b + "(...): the first argument must be a React class instance. " + ("Instead received: " + h + "."));
      }
    }
    function qe(c) {
      var b = document.createElement("div");
      return t.render(c, b);
    }
    function ul(c) {
      return e.isValidElement(c);
    }
    function hp(c, b) {
      return e.isValidElement(c) && c.type === b;
    }
    function xr(c) {
      return !!(c && c.nodeType === I && c.tagName);
    }
    function gp(c) {
      return !!(c && e.isValidElement(c) && c.tagName);
    }
    function sl(c) {
      return xr(c) ? !1 : c != null && typeof c.render == "function" && typeof c.setState == "function";
    }
    function Eu(c, b) {
      if (!sl(c))
        return !1;
      var h = l(c), E = h.type;
      return E === b;
    }
    function Ar(c, b) {
      if (me(c, "findAllInRenderedTree"), !c)
        return [];
      var h = l(c);
      return z(h, b);
    }
    function Ru(c, b) {
      return me(c, "scryRenderedDOMComponentsWithClass"), Ar(c, function(h) {
        if (xr(h)) {
          var E = h.className;
          typeof E != "string" && (E = h.getAttribute("class") || "");
          var D = E.split(/\s+/);
          if (!rr(b)) {
            if (b === void 0)
              throw new Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
            b = b.split(/\s+/);
          }
          return b.every(function(F) {
            return D.indexOf(F) !== -1;
          });
        }
        return !1;
      });
    }
    function Ep(c, b) {
      me(c, "findRenderedDOMComponentWithClass");
      var h = Ru(c, b);
      if (h.length !== 1)
        throw new Error("Did not find exactly one match (found: " + h.length + ") for class:" + b);
      return h[0];
    }
    function wu(c, b) {
      return me(c, "scryRenderedDOMComponentsWithTag"), Ar(c, function(h) {
        return xr(h) && h.tagName.toUpperCase() === b.toUpperCase();
      });
    }
    function Rp(c, b) {
      me(c, "findRenderedDOMComponentWithTag");
      var h = wu(c, b);
      if (h.length !== 1)
        throw new Error("Did not find exactly one match (found: " + h.length + ") for tag:" + b);
      return h[0];
    }
    function Cu(c, b) {
      return me(c, "scryRenderedComponentsWithType"), Ar(c, function(h) {
        return Eu(h, b);
      });
    }
    function wp(c, b) {
      me(c, "findRenderedComponentWithType");
      var h = Cu(c, b);
      if (h.length !== 1)
        throw new Error("Did not find exactly one match (found: " + h.length + ") for componentType:" + b);
      return h[0];
    }
    function Cp(c, b) {
      return L || (L = !0, n(`ReactTestUtils.mockComponent() is deprecated. Use shallow rendering or jest.mock() instead.

See https://reactjs.org/link/test-utils-mock-component for more information.`)), b = b || c.mockTagName || "div", c.prototype.render.mockImplementation(function() {
        return e.createElement(b, null, this.props.children);
      }), this;
    }
    function Pp(c, b) {
      return {
        touches: [{
          pageX: c,
          pageY: b
        }]
      };
    }
    function Pu(c, b, h) {
      var E = c.type || "unknown-event";
      c.currentTarget = d(h), Sr(E, b, void 0, c), c.currentTarget = null;
    }
    function _p(c) {
      var b = c._dispatchListeners, h = c._dispatchInstances;
      if (rr(b))
        for (var E = 0; E < b.length && !c.isPropagationStopped(); E++)
          Pu(c, b[E], h[E]);
      else b && Pu(c, b, h);
      c._dispatchListeners = null, c._dispatchInstances = null;
    }
    var Sp = function(c) {
      c && (_p(c), c.isPersistent() || c.constructor.release(c));
    };
    function Tp(c) {
      return c === "button" || c === "input" || c === "select" || c === "textarea";
    }
    function Op(c) {
      do
        c = c.return;
      while (c && c.tag !== p);
      return c || null;
    }
    function _u(c, b, h) {
      for (var E = []; c; )
        E.push(c), c = Op(c);
      var D;
      for (D = E.length; D-- > 0; )
        b(E[D], "captured", h);
      for (D = 0; D < E.length; D++)
        b(E[D], "bubbled", h);
    }
    function qp(c, b, h) {
      switch (c) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(h.disabled && Tp(b));
        default:
          return !1;
      }
    }
    function Su(c, b) {
      var h = c.stateNode;
      if (!h)
        return null;
      var E = R(h);
      if (!E)
        return null;
      var D = E[b];
      if (qp(b, c.type, E))
        return null;
      if (D && typeof D != "function")
        throw new Error("Expected `" + b + "` listener to be a function, instead got a value of `" + typeof D + "` type.");
      return D;
    }
    function xp(c, b, h) {
      var E = b._reactName;
      return h === "captured" && (E += "Capture"), Su(c, E);
    }
    function Ap(c, b, h) {
      if (c && h && h._reactName) {
        var E = h._reactName, D = Su(c, E);
        D && (h._dispatchListeners == null && (h._dispatchListeners = []), h._dispatchInstances == null && (h._dispatchInstances = []), h._dispatchListeners.push(D), h._dispatchInstances.push(c));
      }
    }
    function $p(c, b, h) {
      c || a("Dispatching inst must not be null");
      var E = xp(c, h, b);
      E && (h._dispatchListeners == null && (h._dispatchListeners = []), h._dispatchInstances == null && (h._dispatchInstances = []), h._dispatchListeners.push(E), h._dispatchInstances.push(c));
    }
    function Mp(c) {
      c && c._reactName && Ap(c._targetInst, null, c);
    }
    function Ip(c) {
      c && c._reactName && _u(c._targetInst, $p, c);
    }
    var Tu = {}, Np = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
    function Bp(c) {
      return function(b, h) {
        if (e.isValidElement(b))
          throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
        if (sl(b))
          throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
        var E = "on" + c[0].toUpperCase() + c.slice(1), D = new W();
        D.target = b, D.type = c.toLowerCase();
        var F = il(b), te = new S(E, D.type, F, D, b);
        te.persist(), C(te, h), Np.has(c) ? Mp(te) : Ip(te), t.unstable_batchedUpdates(function() {
          g(b), Sp(te), Tr();
        }), B();
      };
    }
    var Dp = ["blur", "cancel", "click", "close", "contextMenu", "copy", "cut", "auxClick", "doubleClick", "dragEnd", "dragStart", "drop", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "mouseDown", "mouseUp", "paste", "pause", "play", "pointerCancel", "pointerDown", "pointerUp", "rateChange", "reset", "resize", "seeked", "submit", "touchCancel", "touchEnd", "touchStart", "volumeChange", "drag", "dragEnter", "dragExit", "dragLeave", "dragOver", "mouseMove", "mouseOut", "mouseOver", "pointerMove", "pointerOut", "pointerOver", "scroll", "toggle", "touchMove", "wheel", "abort", "animationEnd", "animationIteration", "animationStart", "canPlay", "canPlayThrough", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "playing", "progress", "seeking", "stalled", "suspend", "timeUpdate", "transitionEnd", "waiting", "mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave", "change", "select", "beforeInput", "compositionEnd", "compositionStart", "compositionUpdate"];
    function kp() {
      Dp.forEach(function(c) {
        Tu[c] = Bp(c);
      });
    }
    kp(), ae.Simulate = Tu, ae.act = H, ae.findAllInRenderedTree = Ar, ae.findRenderedComponentWithType = wp, ae.findRenderedDOMComponentWithClass = Ep, ae.findRenderedDOMComponentWithTag = Rp, ae.isCompositeComponent = sl, ae.isCompositeComponentWithType = Eu, ae.isDOMComponent = xr, ae.isDOMComponentElement = gp, ae.isElement = ul, ae.isElementOfType = hp, ae.mockComponent = Cp, ae.nativeTouchData = Pp, ae.renderIntoDocument = qe, ae.scryRenderedComponentsWithType = Cu, ae.scryRenderedDOMComponentsWithClass = Ru, ae.scryRenderedDOMComponentsWithTag = wu, ae.traverseTwoPhase = _u;
  }()), ae;
}
process.env.NODE_ENV === "production" ? Xl.exports = Vp() : Xl.exports = Gp();
var Yp = Xl.exports, Jl, Ql, nr = et;
if (process.env.NODE_ENV === "production")
  Ql = nr.createRoot, Jl = nr.hydrateRoot;
else {
  var Mr = nr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ql = function(e, t) {
    Mr.usingClientEntryPoint = !0;
    try {
      return nr.createRoot(e, t);
    } finally {
      Mr.usingClientEntryPoint = !1;
    }
  }, Jl = function(e, t, r) {
    Mr.usingClientEntryPoint = !0;
    try {
      return nr.hydrateRoot(e, t, r);
    } finally {
      Mr.usingClientEntryPoint = !1;
    }
  };
}
var Fe = {}, Fi = { exports: {} };
Fi.exports;
(function(e) {
  const r = (o = 0) => (l) => `\x1B[${38 + o};5;${l}m`, n = (o = 0) => (l, u, i) => `\x1B[${38 + o};2;${l};${u};${i}m`;
  function a() {
    const o = /* @__PURE__ */ new Map(), l = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    l.color.gray = l.color.blackBright, l.bgColor.bgGray = l.bgColor.bgBlackBright, l.color.grey = l.color.blackBright, l.bgColor.bgGrey = l.bgColor.bgBlackBright;
    for (const [u, i] of Object.entries(l)) {
      for (const [s, p] of Object.entries(i))
        l[s] = {
          open: `\x1B[${p[0]}m`,
          close: `\x1B[${p[1]}m`
        }, i[s] = l[s], o.set(p[0], p[1]);
      Object.defineProperty(l, u, {
        value: i,
        enumerable: !1
      });
    }
    return Object.defineProperty(l, "codes", {
      value: o,
      enumerable: !1
    }), l.color.close = "\x1B[39m", l.bgColor.close = "\x1B[49m", l.color.ansi256 = r(), l.color.ansi16m = n(), l.bgColor.ansi256 = r(10), l.bgColor.ansi16m = n(10), Object.defineProperties(l, {
      rgbToAnsi256: {
        value: (u, i, s) => u === i && i === s ? u < 8 ? 16 : u > 248 ? 231 : Math.round((u - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(u / 255 * 5) + 6 * Math.round(i / 255 * 5) + Math.round(s / 255 * 5),
        enumerable: !1
      },
      hexToRgb: {
        value: (u) => {
          const i = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(u.toString(16));
          if (!i)
            return [0, 0, 0];
          let { colorString: s } = i.groups;
          s.length === 3 && (s = s.split("").map((m) => m + m).join(""));
          const p = Number.parseInt(s, 16);
          return [
            p >> 16 & 255,
            p >> 8 & 255,
            p & 255
          ];
        },
        enumerable: !1
      },
      hexToAnsi256: {
        value: (u) => l.rgbToAnsi256(...l.hexToRgb(u)),
        enumerable: !1
      }
    }), l;
  }
  Object.defineProperty(e, "exports", {
    enumerable: !0,
    get: a
  });
})(Fi);
var Lc = Fi.exports, Ue = {};
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.printIteratorEntries = Xp;
Ue.printIteratorValues = Jp;
Ue.printListItems = Qp;
Ue.printObjectProperties = Zp;
const Kp = (e, t) => {
  const r = Object.keys(e).sort(t);
  return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((n) => {
    Object.getOwnPropertyDescriptor(e, n).enumerable && r.push(n);
  }), r;
};
function Xp(e, t, r, n, a, o, l = ": ") {
  let u = "", i = e.next();
  if (!i.done) {
    u += t.spacingOuter;
    const s = r + t.indent;
    for (; !i.done; ) {
      const p = o(
        i.value[0],
        t,
        s,
        n,
        a
      ), m = o(
        i.value[1],
        t,
        s,
        n,
        a
      );
      u += s + p + l + m, i = e.next(), i.done ? t.min || (u += ",") : u += "," + t.spacingInner;
    }
    u += t.spacingOuter + r;
  }
  return u;
}
function Jp(e, t, r, n, a, o) {
  let l = "", u = e.next();
  if (!u.done) {
    l += t.spacingOuter;
    const i = r + t.indent;
    for (; !u.done; )
      l += i + o(u.value, t, i, n, a), u = e.next(), u.done ? t.min || (l += ",") : l += "," + t.spacingInner;
    l += t.spacingOuter + r;
  }
  return l;
}
function Qp(e, t, r, n, a, o) {
  let l = "";
  if (e.length) {
    l += t.spacingOuter;
    const u = r + t.indent;
    for (let i = 0; i < e.length; i++)
      l += u, i in e && (l += o(e[i], t, u, n, a)), i < e.length - 1 ? l += "," + t.spacingInner : t.min || (l += ",");
    l += t.spacingOuter + r;
  }
  return l;
}
function Zp(e, t, r, n, a, o) {
  let l = "";
  const u = Kp(e, t.compareKeys);
  if (u.length) {
    l += t.spacingOuter;
    const i = r + t.indent;
    for (let s = 0; s < u.length; s++) {
      const p = u[s], m = o(p, t, i, n, a), v = o(e[p], t, i, n, a);
      l += i + m + ": " + v, s < u.length - 1 ? l += "," + t.spacingInner : t.min || (l += ",");
    }
    l += t.spacingOuter + r;
  }
  return l;
}
var tt = {};
Object.defineProperty(tt, "__esModule", {
  value: !0
});
tt.test = tt.serialize = tt.default = void 0;
var ku = Ue, Qr = function() {
  return typeof globalThis < "u" ? globalThis : typeof Qr < "u" ? Qr : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), fl = Qr["jest-symbol-do-not-touch"] || Qr.Symbol;
const em = typeof fl == "function" && fl.for ? fl.for("jest.asymmetricMatcher") : 1267621, Ir = " ", jc = (e, t, r, n, a, o) => {
  const l = e.toString();
  return l === "ArrayContaining" || l === "ArrayNotContaining" ? ++n > t.maxDepth ? "[" + l + "]" : l + Ir + "[" + (0, ku.printListItems)(
    e.sample,
    t,
    r,
    n,
    a,
    o
  ) + "]" : l === "ObjectContaining" || l === "ObjectNotContaining" ? ++n > t.maxDepth ? "[" + l + "]" : l + Ir + "{" + (0, ku.printObjectProperties)(
    e.sample,
    t,
    r,
    n,
    a,
    o
  ) + "}" : l === "StringMatching" || l === "StringNotMatching" || l === "StringContaining" || l === "StringNotContaining" ? l + Ir + o(e.sample, t, r, n, a) : e.toAsymmetricMatcher();
};
tt.serialize = jc;
const Fc = (e) => e && e.$$typeof === em;
tt.test = Fc;
const tm = {
  serialize: jc,
  test: Fc
};
var rm = tm;
tt.default = rm;
var rt = {}, nm = ({ onlyFirst: e = !1 } = {}) => {
  const t = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
  ].join("|");
  return new RegExp(t, e ? void 0 : "g");
};
Object.defineProperty(rt, "__esModule", {
  value: !0
});
rt.test = rt.serialize = rt.default = void 0;
var Uc = Hc(nm), K = Hc(Lc);
function Hc(e) {
  return e && e.__esModule ? e : { default: e };
}
const am = (e) => e.replace((0, Uc.default)(), (t) => {
  switch (t) {
    case K.default.red.close:
    case K.default.green.close:
    case K.default.cyan.close:
    case K.default.gray.close:
    case K.default.white.close:
    case K.default.yellow.close:
    case K.default.bgRed.close:
    case K.default.bgGreen.close:
    case K.default.bgYellow.close:
    case K.default.inverse.close:
    case K.default.dim.close:
    case K.default.bold.close:
    case K.default.reset.open:
    case K.default.reset.close:
      return "</>";
    case K.default.red.open:
      return "<red>";
    case K.default.green.open:
      return "<green>";
    case K.default.cyan.open:
      return "<cyan>";
    case K.default.gray.open:
      return "<gray>";
    case K.default.white.open:
      return "<white>";
    case K.default.yellow.open:
      return "<yellow>";
    case K.default.bgRed.open:
      return "<bgRed>";
    case K.default.bgGreen.open:
      return "<bgGreen>";
    case K.default.bgYellow.open:
      return "<bgYellow>";
    case K.default.inverse.open:
      return "<inverse>";
    case K.default.dim.open:
      return "<dim>";
    case K.default.bold.open:
      return "<bold>";
    default:
      return "";
  }
}), Wc = (e) => typeof e == "string" && !!e.match((0, Uc.default)());
rt.test = Wc;
const zc = (e, t, r, n, a, o) => o(am(e), t, r, n, a);
rt.serialize = zc;
const om = {
  serialize: zc,
  test: Wc
};
var lm = om;
rt.default = lm;
var nt = {};
Object.defineProperty(nt, "__esModule", {
  value: !0
});
nt.test = nt.serialize = nt.default = void 0;
var Lu = Ue;
const im = " ", Vc = ["DOMStringMap", "NamedNodeMap"], um = /^(HTML\w*Collection|NodeList)$/, sm = (e) => Vc.indexOf(e) !== -1 || um.test(e), Gc = (e) => e && e.constructor && !!e.constructor.name && sm(e.constructor.name);
nt.test = Gc;
const cm = (e) => e.constructor.name === "NamedNodeMap", Yc = (e, t, r, n, a, o) => {
  const l = e.constructor.name;
  return ++n > t.maxDepth ? "[" + l + "]" : (t.min ? "" : l + im) + (Vc.indexOf(l) !== -1 ? "{" + (0, Lu.printObjectProperties)(
    cm(e) ? Array.from(e).reduce((u, i) => (u[i.name] = i.value, u), {}) : { ...e },
    t,
    r,
    n,
    a,
    o
  ) + "}" : "[" + (0, Lu.printListItems)(
    Array.from(e),
    t,
    r,
    n,
    a,
    o
  ) + "]");
};
nt.serialize = Yc;
const dm = {
  serialize: Yc,
  test: Gc
};
var fm = dm;
nt.default = fm;
var at = {}, se = {}, Ui = {};
Object.defineProperty(Ui, "__esModule", {
  value: !0
});
Ui.default = pm;
function pm(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(se, "__esModule", {
  value: !0
});
se.printText = se.printProps = se.printElementAsLeaf = se.printElement = se.printComment = se.printChildren = void 0;
var Kc = mm(Ui);
function mm(e) {
  return e && e.__esModule ? e : { default: e };
}
const vm = (e, t, r, n, a, o, l) => {
  const u = n + r.indent, i = r.colors;
  return e.map((s) => {
    const p = t[s];
    let m = l(p, r, u, a, o);
    return typeof p != "string" && (m.indexOf(`
`) !== -1 && (m = r.spacingOuter + u + m + r.spacingOuter + n), m = "{" + m + "}"), r.spacingInner + n + i.prop.open + s + i.prop.close + "=" + i.value.open + m + i.value.close;
  }).join("");
};
se.printProps = vm;
const ym = (e, t, r, n, a, o) => e.map(
  (l) => t.spacingOuter + r + (typeof l == "string" ? Xc(l, t) : o(l, t, r, n, a))
).join("");
se.printChildren = ym;
const Xc = (e, t) => {
  const r = t.colors.content;
  return r.open + (0, Kc.default)(e) + r.close;
};
se.printText = Xc;
const bm = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + (0, Kc.default)(e) + "-->" + r.close;
};
se.printComment = bm;
const hm = (e, t, r, n, a) => {
  const o = n.colors.tag;
  return o.open + "<" + e + (t && o.close + t + n.spacingOuter + a + o.open) + (r ? ">" + o.close + r + n.spacingOuter + a + o.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + o.close;
};
se.printElement = hm;
const gm = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
};
se.printElementAsLeaf = gm;
Object.defineProperty(at, "__esModule", {
  value: !0
});
at.test = at.serialize = at.default = void 0;
var qt = se;
const Em = 1, Jc = 3, Qc = 8, Zc = 11, Rm = /^((HTML|SVG)\w*)?Element$/, wm = (e) => {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}, Cm = (e) => {
  const t = e.constructor.name, { nodeType: r, tagName: n } = e, a = typeof n == "string" && n.includes("-") || wm(e);
  return r === Em && (Rm.test(t) || a) || r === Jc && t === "Text" || r === Qc && t === "Comment" || r === Zc && t === "DocumentFragment";
}, ed = (e) => {
  var t;
  return (e == null || (t = e.constructor) === null || t === void 0 ? void 0 : t.name) && Cm(e);
};
at.test = ed;
function Pm(e) {
  return e.nodeType === Jc;
}
function _m(e) {
  return e.nodeType === Qc;
}
function pl(e) {
  return e.nodeType === Zc;
}
const td = (e, t, r, n, a, o) => {
  if (Pm(e))
    return (0, qt.printText)(e.data, t);
  if (_m(e))
    return (0, qt.printComment)(e.data, t);
  const l = pl(e) ? "DocumentFragment" : e.tagName.toLowerCase();
  return ++n > t.maxDepth ? (0, qt.printElementAsLeaf)(l, t) : (0, qt.printElement)(
    l,
    (0, qt.printProps)(
      pl(e) ? [] : Array.from(e.attributes).map((u) => u.name).sort(),
      pl(e) ? {} : Array.from(e.attributes).reduce((u, i) => (u[i.name] = i.value, u), {}),
      t,
      r + t.indent,
      n,
      a,
      o
    ),
    (0, qt.printChildren)(
      Array.prototype.slice.call(e.childNodes || e.children),
      t,
      r + t.indent,
      n,
      a,
      o
    ),
    t,
    r
  );
};
at.serialize = td;
const Sm = {
  serialize: td,
  test: ed
};
var Tm = Sm;
at.default = Tm;
var ot = {};
Object.defineProperty(ot, "__esModule", {
  value: !0
});
ot.test = ot.serialize = ot.default = void 0;
var fr = Ue;
const Om = "@@__IMMUTABLE_ITERABLE__@@", qm = "@@__IMMUTABLE_LIST__@@", xm = "@@__IMMUTABLE_KEYED__@@", Am = "@@__IMMUTABLE_MAP__@@", ju = "@@__IMMUTABLE_ORDERED__@@", $m = "@@__IMMUTABLE_RECORD__@@", Mm = "@@__IMMUTABLE_SEQ__@@", Im = "@@__IMMUTABLE_SET__@@", Nm = "@@__IMMUTABLE_STACK__@@", Dt = (e) => "Immutable." + e, hn = (e) => "[" + e + "]", pr = " ", Fu = "…", Bm = (e, t, r, n, a, o, l) => ++n > t.maxDepth ? hn(Dt(l)) : Dt(l) + pr + "{" + (0, fr.printIteratorEntries)(
  e.entries(),
  t,
  r,
  n,
  a,
  o
) + "}";
function Dm(e) {
  let t = 0;
  return {
    next() {
      if (t < e._keys.length) {
        const r = e._keys[t++];
        return {
          done: !1,
          value: [r, e.get(r)]
        };
      }
      return {
        done: !0,
        value: void 0
      };
    }
  };
}
const km = (e, t, r, n, a, o) => {
  const l = Dt(e._name || "Record");
  return ++n > t.maxDepth ? hn(l) : l + pr + "{" + (0, fr.printIteratorEntries)(
    Dm(e),
    t,
    r,
    n,
    a,
    o
  ) + "}";
}, Lm = (e, t, r, n, a, o) => {
  const l = Dt("Seq");
  return ++n > t.maxDepth ? hn(l) : e[xm] ? l + pr + "{" + // from Immutable collection of entries or from ECMAScript object
  (e._iter || e._object ? (0, fr.printIteratorEntries)(
    e.entries(),
    t,
    r,
    n,
    a,
    o
  ) : Fu) + "}" : l + pr + "[" + (e._iter || // from Immutable collection of values
  e._array || // from ECMAScript array
  e._collection || // from ECMAScript collection in immutable v4
  e._iterable ? (0, fr.printIteratorValues)(
    e.values(),
    t,
    r,
    n,
    a,
    o
  ) : Fu) + "]";
}, ml = (e, t, r, n, a, o, l) => ++n > t.maxDepth ? hn(Dt(l)) : Dt(l) + pr + "[" + (0, fr.printIteratorValues)(
  e.values(),
  t,
  r,
  n,
  a,
  o
) + "]", rd = (e, t, r, n, a, o) => e[Am] ? Bm(
  e,
  t,
  r,
  n,
  a,
  o,
  e[ju] ? "OrderedMap" : "Map"
) : e[qm] ? ml(
  e,
  t,
  r,
  n,
  a,
  o,
  "List"
) : e[Im] ? ml(
  e,
  t,
  r,
  n,
  a,
  o,
  e[ju] ? "OrderedSet" : "Set"
) : e[Nm] ? ml(
  e,
  t,
  r,
  n,
  a,
  o,
  "Stack"
) : e[Mm] ? Lm(e, t, r, n, a, o) : km(e, t, r, n, a, o);
ot.serialize = rd;
const nd = (e) => e && (e[Om] === !0 || e[$m] === !0);
ot.test = nd;
const jm = {
  serialize: rd,
  test: nd
};
var Fm = jm;
ot.default = Fm;
var lt = {}, Zl = { exports: {} }, V = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uu;
function Um() {
  if (Uu) return V;
  Uu = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, a = 60114, o = 60109, l = 60110, u = 60112, i = 60113, s = 60120, p = 60115, m = 60116, v = 60121, w = 60122, A = 60117, T = 60129, $ = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var f = Symbol.for;
    e = f("react.element"), t = f("react.portal"), r = f("react.fragment"), n = f("react.strict_mode"), a = f("react.profiler"), o = f("react.provider"), l = f("react.context"), u = f("react.forward_ref"), i = f("react.suspense"), s = f("react.suspense_list"), p = f("react.memo"), m = f("react.lazy"), v = f("react.block"), w = f("react.server.block"), A = f("react.fundamental"), T = f("react.debug_trace_mode"), $ = f("react.legacy_hidden");
  }
  function C(q) {
    if (typeof q == "object" && q !== null) {
      var N = q.$$typeof;
      switch (N) {
        case e:
          switch (q = q.type, q) {
            case r:
            case a:
            case n:
            case i:
            case s:
              return q;
            default:
              switch (q = q && q.$$typeof, q) {
                case l:
                case u:
                case m:
                case p:
                case o:
                  return q;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  var x = o, O = e, M = u, y = r, P = m, S = p, U = t, X = a, Z = n, J = i;
  return V.ContextConsumer = l, V.ContextProvider = x, V.Element = O, V.ForwardRef = M, V.Fragment = y, V.Lazy = P, V.Memo = S, V.Portal = U, V.Profiler = X, V.StrictMode = Z, V.Suspense = J, V.isAsyncMode = function() {
    return !1;
  }, V.isConcurrentMode = function() {
    return !1;
  }, V.isContextConsumer = function(q) {
    return C(q) === l;
  }, V.isContextProvider = function(q) {
    return C(q) === o;
  }, V.isElement = function(q) {
    return typeof q == "object" && q !== null && q.$$typeof === e;
  }, V.isForwardRef = function(q) {
    return C(q) === u;
  }, V.isFragment = function(q) {
    return C(q) === r;
  }, V.isLazy = function(q) {
    return C(q) === m;
  }, V.isMemo = function(q) {
    return C(q) === p;
  }, V.isPortal = function(q) {
    return C(q) === t;
  }, V.isProfiler = function(q) {
    return C(q) === a;
  }, V.isStrictMode = function(q) {
    return C(q) === n;
  }, V.isSuspense = function(q) {
    return C(q) === i;
  }, V.isValidElementType = function(q) {
    return typeof q == "string" || typeof q == "function" || q === r || q === a || q === T || q === n || q === i || q === s || q === $ || typeof q == "object" && q !== null && (q.$$typeof === m || q.$$typeof === p || q.$$typeof === o || q.$$typeof === l || q.$$typeof === u || q.$$typeof === A || q.$$typeof === v || q[0] === w);
  }, V.typeOf = C, V;
}
var G = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hu;
function Hm() {
  return Hu || (Hu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, a = 60114, o = 60109, l = 60110, u = 60112, i = 60113, s = 60120, p = 60115, m = 60116, v = 60121, w = 60122, A = 60117, T = 60129, $ = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var f = Symbol.for;
      e = f("react.element"), t = f("react.portal"), r = f("react.fragment"), n = f("react.strict_mode"), a = f("react.profiler"), o = f("react.provider"), l = f("react.context"), u = f("react.forward_ref"), i = f("react.suspense"), s = f("react.suspense_list"), p = f("react.memo"), m = f("react.lazy"), v = f("react.block"), w = f("react.server.block"), A = f("react.fundamental"), f("react.scope"), f("react.opaque.id"), T = f("react.debug_trace_mode"), f("react.offscreen"), $ = f("react.legacy_hidden");
    }
    var C = !1;
    function x(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === r || I === a || I === T || I === n || I === i || I === s || I === $ || C || typeof I == "object" && I !== null && (I.$$typeof === m || I.$$typeof === p || I.$$typeof === o || I.$$typeof === l || I.$$typeof === u || I.$$typeof === A || I.$$typeof === v || I[0] === w));
    }
    function O(I) {
      if (typeof I == "object" && I !== null) {
        var We = I.$$typeof;
        switch (We) {
          case e:
            var Me = I.type;
            switch (Me) {
              case r:
              case a:
              case n:
              case i:
              case s:
                return Me;
              default:
                var pe = Me && Me.$$typeof;
                switch (pe) {
                  case l:
                  case u:
                  case m:
                  case p:
                  case o:
                    return pe;
                  default:
                    return We;
                }
            }
          case t:
            return We;
        }
      }
    }
    var M = l, y = o, P = e, S = u, U = r, X = m, Z = p, J = t, q = a, N = n, le = i, ee = !1, oe = !1;
    function fe(I) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Oe(I) {
      return oe || (oe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ft(I) {
      return O(I) === l;
    }
    function Yt(I) {
      return O(I) === o;
    }
    function Kt(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function Xt(I) {
      return O(I) === u;
    }
    function pt(I) {
      return O(I) === r;
    }
    function Re(I) {
      return O(I) === m;
    }
    function Jt(I) {
      return O(I) === p;
    }
    function Qt(I) {
      return O(I) === t;
    }
    function Zt(I) {
      return O(I) === a;
    }
    function er(I) {
      return O(I) === n;
    }
    function tr(I) {
      return O(I) === i;
    }
    G.ContextConsumer = M, G.ContextProvider = y, G.Element = P, G.ForwardRef = S, G.Fragment = U, G.Lazy = X, G.Memo = Z, G.Portal = J, G.Profiler = q, G.StrictMode = N, G.Suspense = le, G.isAsyncMode = fe, G.isConcurrentMode = Oe, G.isContextConsumer = ft, G.isContextProvider = Yt, G.isElement = Kt, G.isForwardRef = Xt, G.isFragment = pt, G.isLazy = Re, G.isMemo = Jt, G.isPortal = Qt, G.isProfiler = Zt, G.isStrictMode = er, G.isSuspense = tr, G.isValidElementType = x, G.typeOf = O;
  }()), G;
}
process.env.NODE_ENV === "production" ? Zl.exports = Um() : Zl.exports = Hm();
var Wm = Zl.exports;
Object.defineProperty(lt, "__esModule", {
  value: !0
});
lt.test = lt.serialize = lt.default = void 0;
var yt = zm(Wm), Nr = se;
function ad(e) {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (ad = function(n) {
    return n ? r : t;
  })(e);
}
function zm(e, t) {
  if (e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = ad(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(n, o, l) : n[o] = e[o];
    }
  return n.default = e, r && r.set(e, n), n;
}
const od = (e, t = []) => (Array.isArray(e) ? e.forEach((r) => {
  od(r, t);
}) : e != null && e !== !1 && t.push(e), t), Wu = (e) => {
  const t = e.type;
  if (typeof t == "string")
    return t;
  if (typeof t == "function")
    return t.displayName || t.name || "Unknown";
  if (yt.isFragment(e))
    return "React.Fragment";
  if (yt.isSuspense(e))
    return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if (yt.isContextProvider(e))
      return "Context.Provider";
    if (yt.isContextConsumer(e))
      return "Context.Consumer";
    if (yt.isForwardRef(e)) {
      if (t.displayName)
        return t.displayName;
      const r = t.render.displayName || t.render.name || "";
      return r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef";
    }
    if (yt.isMemo(e)) {
      const r = t.displayName || t.type.displayName || t.type.name || "";
      return r !== "" ? "Memo(" + r + ")" : "Memo";
    }
  }
  return "UNDEFINED";
}, Vm = (e) => {
  const { props: t } = e;
  return Object.keys(t).filter((r) => r !== "children" && t[r] !== void 0).sort();
}, ld = (e, t, r, n, a, o) => ++n > t.maxDepth ? (0, Nr.printElementAsLeaf)(Wu(e), t) : (0, Nr.printElement)(
  Wu(e),
  (0, Nr.printProps)(
    Vm(e),
    e.props,
    t,
    r + t.indent,
    n,
    a,
    o
  ),
  (0, Nr.printChildren)(
    od(e.props.children),
    t,
    r + t.indent,
    n,
    a,
    o
  ),
  t,
  r
);
lt.serialize = ld;
const id = (e) => e != null && yt.isElement(e);
lt.test = id;
const Gm = {
  serialize: ld,
  test: id
};
var Ym = Gm;
lt.default = Ym;
var it = {};
Object.defineProperty(it, "__esModule", {
  value: !0
});
it.test = it.serialize = it.default = void 0;
var Br = se, Zr = function() {
  return typeof globalThis < "u" ? globalThis : typeof Zr < "u" ? Zr : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), vl = Zr["jest-symbol-do-not-touch"] || Zr.Symbol;
const Km = typeof vl == "function" && vl.for ? vl.for("react.test.json") : 245830487, Xm = (e) => {
  const { props: t } = e;
  return t ? Object.keys(t).filter((r) => t[r] !== void 0).sort() : [];
}, ud = (e, t, r, n, a, o) => ++n > t.maxDepth ? (0, Br.printElementAsLeaf)(e.type, t) : (0, Br.printElement)(
  e.type,
  e.props ? (0, Br.printProps)(
    Xm(e),
    e.props,
    t,
    r + t.indent,
    n,
    a,
    o
  ) : "",
  e.children ? (0, Br.printChildren)(
    e.children,
    t,
    r + t.indent,
    n,
    a,
    o
  ) : "",
  t,
  r
);
it.serialize = ud;
const sd = (e) => e && e.$$typeof === Km;
it.test = sd;
const Jm = {
  serialize: ud,
  test: sd
};
var Qm = Jm;
it.default = Qm;
Object.defineProperty(Fe, "__esModule", {
  value: !0
});
var cd = Fe.default = gd = Fe.DEFAULT_OPTIONS = void 0, dd = Fe.format = Cd, Hi = Fe.plugins = void 0, Zm = ut(Lc), ar = Ue, ev = ut(
  tt
), tv = ut(rt), rv = ut(nt), nv = ut(at), av = ut(ot), ov = ut(lt), lv = ut(
  it
);
function ut(e) {
  return e && e.__esModule ? e : { default: e };
}
const fd = Object.prototype.toString, iv = Date.prototype.toISOString, uv = Error.prototype.toString, zu = RegExp.prototype.toString, yl = (e) => typeof e.constructor == "function" && e.constructor.name || "Object", sv = (e) => typeof window < "u" && e === window, cv = /^Symbol\((.*)\)(.*)$/, dv = /\n/gi;
class pd extends Error {
  constructor(t, r) {
    super(t), this.stack = r, this.name = this.constructor.name;
  }
}
function fv(e) {
  return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
}
function pv(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function mv(e) {
  return `${e}n`;
}
function Vu(e, t) {
  return t ? "[Function " + (e.name || "anonymous") + "]" : "[Function]";
}
function Gu(e) {
  return String(e).replace(cv, "Symbol($1)");
}
function Yu(e) {
  return "[" + uv.call(e) + "]";
}
function md(e, t, r, n) {
  if (e === !0 || e === !1)
    return "" + e;
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const a = typeof e;
  if (a === "number")
    return pv(e);
  if (a === "bigint")
    return mv(e);
  if (a === "string")
    return n ? '"' + e.replace(/"|\\/g, "\\$&") + '"' : '"' + e + '"';
  if (a === "function")
    return Vu(e, t);
  if (a === "symbol")
    return Gu(e);
  const o = fd.call(e);
  return o === "[object WeakMap]" ? "WeakMap {}" : o === "[object WeakSet]" ? "WeakSet {}" : o === "[object Function]" || o === "[object GeneratorFunction]" ? Vu(e, t) : o === "[object Symbol]" ? Gu(e) : o === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : iv.call(e) : o === "[object Error]" ? Yu(e) : o === "[object RegExp]" ? r ? zu.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : zu.call(e) : e instanceof Error ? Yu(e) : null;
}
function vd(e, t, r, n, a, o) {
  if (a.indexOf(e) !== -1)
    return "[Circular]";
  a = a.slice(), a.push(e);
  const l = ++n > t.maxDepth, u = t.min;
  if (t.callToJSON && !l && e.toJSON && typeof e.toJSON == "function" && !o)
    return Ye(e.toJSON(), t, r, n, a, !0);
  const i = fd.call(e);
  return i === "[object Arguments]" ? l ? "[Arguments]" : (u ? "" : "Arguments ") + "[" + (0, ar.printListItems)(
    e,
    t,
    r,
    n,
    a,
    Ye
  ) + "]" : fv(i) ? l ? "[" + e.constructor.name + "]" : (u || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : e.constructor.name + " ") + "[" + (0, ar.printListItems)(
    e,
    t,
    r,
    n,
    a,
    Ye
  ) + "]" : i === "[object Map]" ? l ? "[Map]" : "Map {" + (0, ar.printIteratorEntries)(
    e.entries(),
    t,
    r,
    n,
    a,
    Ye,
    " => "
  ) + "}" : i === "[object Set]" ? l ? "[Set]" : "Set {" + (0, ar.printIteratorValues)(
    e.values(),
    t,
    r,
    n,
    a,
    Ye
  ) + "}" : l || sv(e) ? "[" + yl(e) + "]" : (u || !t.printBasicPrototype && yl(e) === "Object" ? "" : yl(e) + " ") + "{" + (0, ar.printObjectProperties)(
    e,
    t,
    r,
    n,
    a,
    Ye
  ) + "}";
}
function vv(e) {
  return e.serialize != null;
}
function yd(e, t, r, n, a, o) {
  let l;
  try {
    l = vv(e) ? e.serialize(t, r, n, a, o, Ye) : e.print(
      t,
      (u) => Ye(u, r, n, a, o),
      (u) => {
        const i = n + r.indent;
        return i + u.replace(dv, `
` + i);
      },
      {
        edgeSpacing: r.spacingOuter,
        min: r.min,
        spacing: r.spacingInner
      },
      r.colors
    );
  } catch (u) {
    throw new pd(u.message, u.stack);
  }
  if (typeof l != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof l}".`
    );
  return l;
}
function bd(e, t) {
  for (let r = 0; r < e.length; r++)
    try {
      if (e[r].test(t))
        return e[r];
    } catch (n) {
      throw new pd(n.message, n.stack);
    }
  return null;
}
function Ye(e, t, r, n, a, o) {
  const l = bd(t.plugins, e);
  if (l !== null)
    return yd(l, e, t, r, n, a);
  const u = md(
    e,
    t.printFunctionName,
    t.escapeRegex,
    t.escapeString
  );
  return u !== null ? u : vd(
    e,
    t,
    r,
    n,
    a,
    o
  );
}
const Wi = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, hd = Object.keys(Wi), Pe = {
  callToJSON: !0,
  compareKeys: void 0,
  escapeRegex: !1,
  escapeString: !0,
  highlight: !1,
  indent: 2,
  maxDepth: 1 / 0,
  min: !1,
  plugins: [],
  printBasicPrototype: !0,
  printFunctionName: !0,
  theme: Wi
};
var gd = Fe.DEFAULT_OPTIONS = Pe;
function yv(e) {
  if (Object.keys(e).forEach((t) => {
    if (!Pe.hasOwnProperty(t))
      throw new Error(`pretty-format: Unknown option "${t}".`);
  }), e.min && e.indent !== void 0 && e.indent !== 0)
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  if (e.theme !== void 0) {
    if (e.theme === null)
      throw new Error('pretty-format: Option "theme" must not be null.');
    if (typeof e.theme != "object")
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`
      );
  }
}
const bv = (e) => hd.reduce((t, r) => {
  const n = e.theme && e.theme[r] !== void 0 ? e.theme[r] : Wi[r], a = n && Zm.default[n];
  if (a && typeof a.close == "string" && typeof a.open == "string")
    t[r] = a;
  else
    throw new Error(
      `pretty-format: Option "theme" has a key "${r}" whose value "${n}" is undefined in ansi-styles.`
    );
  return t;
}, /* @__PURE__ */ Object.create(null)), hv = () => hd.reduce((e, t) => (e[t] = {
  close: "",
  open: ""
}, e), /* @__PURE__ */ Object.create(null)), Ed = (e) => e && e.printFunctionName !== void 0 ? e.printFunctionName : Pe.printFunctionName, Rd = (e) => e && e.escapeRegex !== void 0 ? e.escapeRegex : Pe.escapeRegex, wd = (e) => e && e.escapeString !== void 0 ? e.escapeString : Pe.escapeString, Ku = (e) => {
  var t;
  return {
    callToJSON: e && e.callToJSON !== void 0 ? e.callToJSON : Pe.callToJSON,
    colors: e && e.highlight ? bv(e) : hv(),
    compareKeys: e && typeof e.compareKeys == "function" ? e.compareKeys : Pe.compareKeys,
    escapeRegex: Rd(e),
    escapeString: wd(e),
    indent: e && e.min ? "" : gv(
      e && e.indent !== void 0 ? e.indent : Pe.indent
    ),
    maxDepth: e && e.maxDepth !== void 0 ? e.maxDepth : Pe.maxDepth,
    min: e && e.min !== void 0 ? e.min : Pe.min,
    plugins: e && e.plugins !== void 0 ? e.plugins : Pe.plugins,
    printBasicPrototype: (t = e == null ? void 0 : e.printBasicPrototype) !== null && t !== void 0 ? t : !0,
    printFunctionName: Ed(e),
    spacingInner: e && e.min ? " " : `
`,
    spacingOuter: e && e.min ? "" : `
`
  };
};
function gv(e) {
  return new Array(e + 1).join(" ");
}
function Cd(e, t) {
  if (t && (yv(t), t.plugins)) {
    const n = bd(t.plugins, e);
    if (n !== null)
      return yd(n, e, Ku(t), "", 0, []);
  }
  const r = md(
    e,
    Ed(t),
    Rd(t),
    wd(t)
  );
  return r !== null ? r : vd(e, Ku(t), "", 0, []);
}
const Ev = {
  AsymmetricMatcher: ev.default,
  ConvertAnsi: tv.default,
  DOMCollection: rv.default,
  DOMElement: nv.default,
  Immutable: av.default,
  ReactElement: ov.default,
  ReactTestComponent: lv.default
};
Hi = Fe.plugins = Ev;
var Rv = Cd;
cd = Fe.default = Rv;
const p0 = /* @__PURE__ */ zp({
  __proto__: null,
  get DEFAULT_OPTIONS() {
    return gd;
  },
  get default() {
    return cd;
  },
  format: dd,
  get plugins() {
    return Hi;
  }
}, [Fe]);
var wv = Object.prototype.toString;
function Cv(e) {
  return typeof e == "function" || wv.call(e) === "[object Function]";
}
function Pv(e) {
  var t = Number(e);
  return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var _v = Math.pow(2, 53) - 1;
function Sv(e) {
  var t = Pv(e);
  return Math.min(Math.max(t, 0), _v);
}
function _e(e, t) {
  var r = Array, n = Object(e);
  if (e == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  for (var a = Sv(n.length), o = Cv(r) ? Object(new r(a)) : new Array(a), l = 0, u; l < a; )
    u = n[l], o[l] = u, l += 1;
  return o.length = a, o;
}
function mr(e) {
  "@babel/helpers - typeof";
  return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mr(e);
}
function Tv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ov(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Pd(n.key), n);
  }
}
function qv(e, t, r) {
  return t && Ov(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xv(e, t, r) {
  return t = Pd(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Pd(e) {
  var t = Av(e, "string");
  return mr(t) === "symbol" ? t : String(t);
}
function Av(e, t) {
  if (mr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (mr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $v = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    Tv(this, e), xv(this, "items", void 0), this.items = t;
  }
  return qv(e, [{
    key: "add",
    value: function(r) {
      return this.has(r) === !1 && this.items.push(r), this;
    }
  }, {
    key: "clear",
    value: function() {
      this.items = [];
    }
  }, {
    key: "delete",
    value: function(r) {
      var n = this.items.length;
      return this.items = this.items.filter(function(a) {
        return a !== r;
      }), n !== this.items.length;
    }
  }, {
    key: "forEach",
    value: function(r) {
      var n = this;
      this.items.forEach(function(a) {
        r(a, a, n);
      });
    }
  }, {
    key: "has",
    value: function(r) {
      return this.items.indexOf(r) !== -1;
    }
  }, {
    key: "size",
    get: function() {
      return this.items.length;
    }
  }]), e;
}();
const Mv = typeof Set > "u" ? Set : $v;
function ce(e) {
  var t;
  return (
    // eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
    (t = e.localName) !== null && t !== void 0 ? t : (
      // eslint-disable-next-line no-restricted-properties -- required for the fallback
      e.tagName.toLowerCase()
    )
  );
}
var Iv = {
  article: "article",
  aside: "complementary",
  button: "button",
  datalist: "listbox",
  dd: "definition",
  details: "group",
  dialog: "dialog",
  dt: "term",
  fieldset: "group",
  figure: "figure",
  // WARNING: Only with an accessible name
  form: "form",
  footer: "contentinfo",
  h1: "heading",
  h2: "heading",
  h3: "heading",
  h4: "heading",
  h5: "heading",
  h6: "heading",
  header: "banner",
  hr: "separator",
  html: "document",
  legend: "legend",
  li: "listitem",
  math: "math",
  main: "main",
  menu: "list",
  nav: "navigation",
  ol: "list",
  optgroup: "group",
  // WARNING: Only in certain context
  option: "option",
  output: "status",
  progress: "progressbar",
  // WARNING: Only with an accessible name
  section: "region",
  summary: "button",
  table: "table",
  tbody: "rowgroup",
  textarea: "textbox",
  tfoot: "rowgroup",
  // WARNING: Only in certain context
  td: "cell",
  th: "columnheader",
  thead: "rowgroup",
  tr: "row",
  ul: "list"
}, Nv = {
  caption: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  code: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  deletion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  emphasis: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  generic: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
  insertion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  paragraph: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  presentation: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  strong: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  subscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  superscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"])
};
function Bv(e, t) {
  return [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    // "disabled",
    "aria-dropeffect",
    // "errormessage",
    "aria-flowto",
    "aria-grabbed",
    // "haspopup",
    "aria-hidden",
    // "invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription"
  ].some(function(r) {
    var n;
    return e.hasAttribute(r) && !((n = Nv[t]) !== null && n !== void 0 && n.has(r));
  });
}
function _d(e, t) {
  return Bv(e, t);
}
function Dv(e) {
  var t = Lv(e);
  if (t === null || t === "presentation") {
    var r = kv(e);
    if (t !== "presentation" || _d(e, r || ""))
      return r;
  }
  return t;
}
function kv(e) {
  var t = Iv[ce(e)];
  if (t !== void 0)
    return t;
  switch (ce(e)) {
    case "a":
    case "area":
    case "link":
      if (e.hasAttribute("href"))
        return "link";
      break;
    case "img":
      return e.getAttribute("alt") === "" && !_d(e, "img") ? "presentation" : "img";
    case "input": {
      var r = e, n = r.type;
      switch (n) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
        case "radio":
          return n;
        case "range":
          return "slider";
        case "email":
        case "tel":
        case "text":
        case "url":
          return e.hasAttribute("list") ? "combobox" : "textbox";
        case "search":
          return e.hasAttribute("list") ? "combobox" : "searchbox";
        case "number":
          return "spinbutton";
        default:
          return null;
      }
    }
    case "select":
      return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox";
  }
  return null;
}
function Lv(e) {
  var t = e.getAttribute("role");
  if (t !== null) {
    var r = t.trim().split(" ")[0];
    if (r.length > 0)
      return r;
  }
  return null;
}
function Q(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function Sd(e) {
  return Q(e) && ce(e) === "caption";
}
function Fr(e) {
  return Q(e) && ce(e) === "input";
}
function jv(e) {
  return Q(e) && ce(e) === "optgroup";
}
function Fv(e) {
  return Q(e) && ce(e) === "select";
}
function Uv(e) {
  return Q(e) && ce(e) === "table";
}
function Hv(e) {
  return Q(e) && ce(e) === "textarea";
}
function Wv(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument, r = t.defaultView;
  if (r === null)
    throw new TypeError("no window available");
  return r;
}
function zv(e) {
  return Q(e) && ce(e) === "fieldset";
}
function Vv(e) {
  return Q(e) && ce(e) === "legend";
}
function Gv(e) {
  return Q(e) && ce(e) === "slot";
}
function Yv(e) {
  return Q(e) && e.ownerSVGElement !== void 0;
}
function Kv(e) {
  return Q(e) && ce(e) === "svg";
}
function Xv(e) {
  return Yv(e) && ce(e) === "title";
}
function en(e, t) {
  if (Q(e) && e.hasAttribute(t)) {
    var r = e.getAttribute(t).split(" "), n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return r.map(function(a) {
      return n.getElementById(a);
    }).filter(
      function(a) {
        return a !== null;
      }
      // TODO: why does this not narrow?
    );
  }
  return [];
}
function Le(e, t) {
  return Q(e) ? t.indexOf(Dv(e)) !== -1 : !1;
}
function Jv(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function Qv(e, t) {
  if (!Q(e))
    return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var r = t(e);
  return r.getPropertyValue("display") === "none" || r.getPropertyValue("visibility") === "hidden";
}
function Zv(e) {
  return Le(e, ["button", "combobox", "listbox", "textbox"]) || Td(e, "range");
}
function Td(e, t) {
  if (!Q(e))
    return !1;
  switch (t) {
    case "range":
      return Le(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("));
  }
}
function Xu(e, t) {
  var r = _e(e.querySelectorAll(t));
  return en(e, "aria-owns").forEach(function(n) {
    r.push.apply(r, _e(n.querySelectorAll(t)));
  }), r;
}
function ey(e) {
  return Fv(e) ? e.selectedOptions || Xu(e, "[selected]") : Xu(e, '[aria-selected="true"]');
}
function ty(e) {
  return Le(e, ["none", "presentation"]);
}
function ry(e) {
  return Sd(e);
}
function ny(e) {
  return Le(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function ay(e) {
  return !1;
}
function oy(e) {
  return Fr(e) || Hv(e) ? e.value : e.textContent || "";
}
function Ju(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function Od(e) {
  var t = ce(e);
  return t === "button" || t === "input" && e.getAttribute("type") !== "hidden" || t === "meter" || t === "output" || t === "progress" || t === "select" || t === "textarea";
}
function qd(e) {
  if (Od(e))
    return e;
  var t = null;
  return e.childNodes.forEach(function(r) {
    if (t === null && Q(r)) {
      var n = qd(r);
      n !== null && (t = n);
    }
  }), t;
}
function ly(e) {
  if (e.control !== void 0)
    return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : qd(e);
}
function iy(e) {
  var t = e.labels;
  if (t === null)
    return t;
  if (t !== void 0)
    return _e(t);
  if (!Od(e))
    return null;
  var r = e.ownerDocument;
  return _e(r.querySelectorAll("label")).filter(function(n) {
    return ly(n) === e;
  });
}
function uy(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? _e(e.childNodes) : t;
}
function xd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = new Mv(), n = Wv(e), a = t.compute, o = a === void 0 ? "name" : a, l = t.computedStyleSupportsPseudoElements, u = l === void 0 ? t.getComputedStyle !== void 0 : l, i = t.getComputedStyle, s = i === void 0 ? n.getComputedStyle.bind(n) : i, p = t.hidden, m = p === void 0 ? !1 : p;
  function v(f, C) {
    var x = "";
    if (Q(f) && u) {
      var O = s(f, "::before"), M = Ju(O);
      x = "".concat(M, " ").concat(x);
    }
    var y = Gv(f) ? uy(f) : _e(f.childNodes).concat(en(f, "aria-owns"));
    if (y.forEach(function(U) {
      var X = $(U, {
        isEmbeddedInLabel: C.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), Z = Q(U) ? s(U).getPropertyValue("display") : "inline", J = Z !== "inline" ? " " : "";
      x += "".concat(J).concat(X).concat(J);
    }), Q(f) && u) {
      var P = s(f, "::after"), S = Ju(P);
      x = "".concat(x, " ").concat(S);
    }
    return x.trim();
  }
  function w(f, C) {
    var x = f.getAttributeNode(C);
    return x !== null && !r.has(x) && x.value.trim() !== "" ? (r.add(x), x.value) : null;
  }
  function A(f) {
    return Q(f) ? w(f, "title") : null;
  }
  function T(f) {
    if (!Q(f))
      return null;
    if (zv(f)) {
      r.add(f);
      for (var C = _e(f.childNodes), x = 0; x < C.length; x += 1) {
        var O = C[x];
        if (Vv(O))
          return $(O, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (Uv(f)) {
      r.add(f);
      for (var M = _e(f.childNodes), y = 0; y < M.length; y += 1) {
        var P = M[y];
        if (Sd(P))
          return $(P, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (Kv(f)) {
      r.add(f);
      for (var S = _e(f.childNodes), U = 0; U < S.length; U += 1) {
        var X = S[U];
        if (Xv(X))
          return X.textContent;
      }
      return null;
    } else if (ce(f) === "img" || ce(f) === "area") {
      var Z = w(f, "alt");
      if (Z !== null)
        return Z;
    } else if (jv(f)) {
      var J = w(f, "label");
      if (J !== null)
        return J;
    }
    if (Fr(f) && (f.type === "button" || f.type === "submit" || f.type === "reset")) {
      var q = w(f, "value");
      if (q !== null)
        return q;
      if (f.type === "submit")
        return "Submit";
      if (f.type === "reset")
        return "Reset";
    }
    var N = iy(f);
    if (N !== null && N.length !== 0)
      return r.add(f), _e(N).map(function(fe) {
        return $(fe, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(fe) {
        return fe.length > 0;
      }).join(" ");
    if (Fr(f) && f.type === "image") {
      var le = w(f, "alt");
      if (le !== null)
        return le;
      var ee = w(f, "title");
      return ee !== null ? ee : "Submit Query";
    }
    if (Le(f, ["button"])) {
      var oe = v(f, {
        isEmbeddedInLabel: !1,
        isReferenced: !1
      });
      if (oe !== "")
        return oe;
    }
    return null;
  }
  function $(f, C) {
    if (r.has(f))
      return "";
    if (!m && Qv(f, s) && !C.isReferenced)
      return r.add(f), "";
    var x = Q(f) ? f.getAttributeNode("aria-labelledby") : null, O = x !== null && !r.has(x) ? en(f, "aria-labelledby") : [];
    if (o === "name" && !C.isReferenced && O.length > 0)
      return r.add(x), O.map(function(Z) {
        return $(Z, {
          isEmbeddedInLabel: C.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var M = C.recursion && Zv(f) && o === "name";
    if (!M) {
      var y = (Q(f) && f.getAttribute("aria-label") || "").trim();
      if (y !== "" && o === "name")
        return r.add(f), y;
      if (!ty(f)) {
        var P = T(f);
        if (P !== null)
          return r.add(f), P;
      }
    }
    if (Le(f, ["menu"]))
      return r.add(f), "";
    if (M || C.isEmbeddedInLabel || C.isReferenced) {
      if (Le(f, ["combobox", "listbox"])) {
        r.add(f);
        var S = ey(f);
        return S.length === 0 ? Fr(f) ? f.value : "" : _e(S).map(function(Z) {
          return $(Z, {
            isEmbeddedInLabel: C.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (Td(f, "range"))
        return r.add(f), f.hasAttribute("aria-valuetext") ? f.getAttribute("aria-valuetext") : f.hasAttribute("aria-valuenow") ? f.getAttribute("aria-valuenow") : f.getAttribute("value") || "";
      if (Le(f, ["textbox"]))
        return r.add(f), oy(f);
    }
    if (ny(f) || Q(f) && C.isReferenced || ry(f) || ay()) {
      var U = v(f, {
        isEmbeddedInLabel: C.isEmbeddedInLabel,
        isReferenced: !1
      });
      if (U !== "")
        return r.add(f), U;
    }
    if (f.nodeType === f.TEXT_NODE)
      return r.add(f), f.textContent || "";
    if (C.recursion)
      return r.add(f), v(f, {
        isEmbeddedInLabel: C.isEmbeddedInLabel,
        isReferenced: !1
      });
    var X = A(f);
    return X !== null ? (r.add(f), X) : (r.add(f), "");
  }
  return Jv($(e, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: o === "description",
    recursion: !1
  }));
}
function vr(e) {
  "@babel/helpers - typeof";
  return vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vr(e);
}
function Qu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qu(Object(r), !0).forEach(function(n) {
      sy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sy(e, t, r) {
  return t = cy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cy(e) {
  var t = dy(e, "string");
  return vr(t) === "symbol" ? t : String(t);
}
function dy(e, t) {
  if (vr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (vr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ad(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = en(e, "aria-describedby").map(function(a) {
    return xd(a, Zu(Zu({}, t), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (r === "") {
    var n = e.getAttribute("title");
    r = n === null ? "" : n;
  }
  return r;
}
function fy(e) {
  return Le(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function zi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return fy(e) ? "" : xd(e, t);
}
var Se = {}, gn = {}, Ct = {}, En = {};
Object.defineProperty(En, "__esModule", {
  value: !0
});
En.default = void 0;
function py() {
  var e = this, t = 0, r = {
    "@@iterator": function() {
      return r;
    },
    next: function() {
      if (t < e.length) {
        var a = e[t];
        return t = t + 1, {
          done: !1,
          value: a
        };
      } else
        return {
          done: !0
        };
    }
  };
  return r;
}
var my = py;
En.default = my;
Object.defineProperty(Ct, "__esModule", {
  value: !0
});
Ct.default = by;
var vy = yy(En);
function yy(e) {
  return e && e.__esModule ? e : { default: e };
}
function ei(e) {
  "@babel/helpers - typeof";
  return ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ei(e);
}
function by(e, t) {
  return typeof Symbol == "function" && ei(Symbol.iterator) === "symbol" && Object.defineProperty(e, Symbol.iterator, {
    value: vy.default.bind(t)
  }), e;
}
Object.defineProperty(gn, "__esModule", {
  value: !0
});
gn.default = void 0;
var hy = gy(Ct);
function gy(e) {
  return e && e.__esModule ? e : { default: e };
}
function bl(e, t) {
  return wy(e) || Ry(e, t) || $d(e, t) || Ey();
}
function Ey() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ry(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, o = !1, l, u;
    try {
      for (r = r.call(e); !(a = (l = r.next()).done) && (n.push(l.value), !(t && n.length === t)); a = !0)
        ;
    } catch (i) {
      o = !0, u = i;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function wy(e) {
  if (Array.isArray(e)) return e;
}
function Cy(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = $d(e)) || t) {
      r && (e = r);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(s) {
        throw s;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, l = !1, u;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var s = r.next();
    return o = s.done, s;
  }, e: function(s) {
    l = !0, u = s;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (l) throw u;
    }
  } };
}
function $d(e, t) {
  if (e) {
    if (typeof e == "string") return es(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return es(e, t);
  }
}
function es(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var xt = [["aria-activedescendant", {
  type: "id"
}], ["aria-atomic", {
  type: "boolean"
}], ["aria-autocomplete", {
  type: "token",
  values: ["inline", "list", "both", "none"]
}], ["aria-busy", {
  type: "boolean"
}], ["aria-checked", {
  type: "tristate"
}], ["aria-colcount", {
  type: "integer"
}], ["aria-colindex", {
  type: "integer"
}], ["aria-colspan", {
  type: "integer"
}], ["aria-controls", {
  type: "idlist"
}], ["aria-current", {
  type: "token",
  values: ["page", "step", "location", "date", "time", !0, !1]
}], ["aria-describedby", {
  type: "idlist"
}], ["aria-details", {
  type: "id"
}], ["aria-disabled", {
  type: "boolean"
}], ["aria-dropeffect", {
  type: "tokenlist",
  values: ["copy", "execute", "link", "move", "none", "popup"]
}], ["aria-errormessage", {
  type: "id"
}], ["aria-expanded", {
  type: "boolean",
  allowundefined: !0
}], ["aria-flowto", {
  type: "idlist"
}], ["aria-grabbed", {
  type: "boolean",
  allowundefined: !0
}], ["aria-haspopup", {
  type: "token",
  values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"]
}], ["aria-hidden", {
  type: "boolean",
  allowundefined: !0
}], ["aria-invalid", {
  type: "token",
  values: ["grammar", !1, "spelling", !0]
}], ["aria-keyshortcuts", {
  type: "string"
}], ["aria-label", {
  type: "string"
}], ["aria-labelledby", {
  type: "idlist"
}], ["aria-level", {
  type: "integer"
}], ["aria-live", {
  type: "token",
  values: ["assertive", "off", "polite"]
}], ["aria-modal", {
  type: "boolean"
}], ["aria-multiline", {
  type: "boolean"
}], ["aria-multiselectable", {
  type: "boolean"
}], ["aria-orientation", {
  type: "token",
  values: ["vertical", "undefined", "horizontal"]
}], ["aria-owns", {
  type: "idlist"
}], ["aria-placeholder", {
  type: "string"
}], ["aria-posinset", {
  type: "integer"
}], ["aria-pressed", {
  type: "tristate"
}], ["aria-readonly", {
  type: "boolean"
}], ["aria-relevant", {
  type: "tokenlist",
  values: ["additions", "all", "removals", "text"]
}], ["aria-required", {
  type: "boolean"
}], ["aria-roledescription", {
  type: "string"
}], ["aria-rowcount", {
  type: "integer"
}], ["aria-rowindex", {
  type: "integer"
}], ["aria-rowspan", {
  type: "integer"
}], ["aria-selected", {
  type: "boolean",
  allowundefined: !0
}], ["aria-setsize", {
  type: "integer"
}], ["aria-sort", {
  type: "token",
  values: ["ascending", "descending", "none", "other"]
}], ["aria-valuemax", {
  type: "number"
}], ["aria-valuemin", {
  type: "number"
}], ["aria-valuenow", {
  type: "number"
}], ["aria-valuetext", {
  type: "string"
}]], ti = {
  entries: function() {
    return xt;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = Cy(xt), a;
    try {
      for (n.s(); !(a = n.n()).done; ) {
        var o = bl(a.value, 2), l = o[0], u = o[1];
        t.call(r, u, l, xt);
      }
    } catch (i) {
      n.e(i);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = xt.find(function(n) {
      return n[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!ti.get(t);
  },
  keys: function() {
    return xt.map(function(t) {
      var r = bl(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return xt.map(function(t) {
      var r = bl(t, 2), n = r[1];
      return n;
    });
  }
}, Py = (0, hy.default)(ti, ti.entries());
gn.default = Py;
var Rn = {};
Object.defineProperty(Rn, "__esModule", {
  value: !0
});
Rn.default = void 0;
var _y = Sy(Ct);
function Sy(e) {
  return e && e.__esModule ? e : { default: e };
}
function hl(e, t) {
  return qy(e) || Oy(e, t) || Md(e, t) || Ty();
}
function Ty() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oy(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, o = !1, l, u;
    try {
      for (r = r.call(e); !(a = (l = r.next()).done) && (n.push(l.value), !(t && n.length === t)); a = !0)
        ;
    } catch (i) {
      o = !0, u = i;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function qy(e) {
  if (Array.isArray(e)) return e;
}
function xy(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Md(e)) || t) {
      r && (e = r);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(s) {
        throw s;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, l = !1, u;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var s = r.next();
    return o = s.done, s;
  }, e: function(s) {
    l = !0, u = s;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (l) throw u;
    }
  } };
}
function Md(e, t) {
  if (e) {
    if (typeof e == "string") return ts(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ts(e, t);
  }
}
function ts(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var At = [["a", {
  reserved: !1
}], ["abbr", {
  reserved: !1
}], ["acronym", {
  reserved: !1
}], ["address", {
  reserved: !1
}], ["applet", {
  reserved: !1
}], ["area", {
  reserved: !1
}], ["article", {
  reserved: !1
}], ["aside", {
  reserved: !1
}], ["audio", {
  reserved: !1
}], ["b", {
  reserved: !1
}], ["base", {
  reserved: !0
}], ["bdi", {
  reserved: !1
}], ["bdo", {
  reserved: !1
}], ["big", {
  reserved: !1
}], ["blink", {
  reserved: !1
}], ["blockquote", {
  reserved: !1
}], ["body", {
  reserved: !1
}], ["br", {
  reserved: !1
}], ["button", {
  reserved: !1
}], ["canvas", {
  reserved: !1
}], ["caption", {
  reserved: !1
}], ["center", {
  reserved: !1
}], ["cite", {
  reserved: !1
}], ["code", {
  reserved: !1
}], ["col", {
  reserved: !0
}], ["colgroup", {
  reserved: !0
}], ["content", {
  reserved: !1
}], ["data", {
  reserved: !1
}], ["datalist", {
  reserved: !1
}], ["dd", {
  reserved: !1
}], ["del", {
  reserved: !1
}], ["details", {
  reserved: !1
}], ["dfn", {
  reserved: !1
}], ["dialog", {
  reserved: !1
}], ["dir", {
  reserved: !1
}], ["div", {
  reserved: !1
}], ["dl", {
  reserved: !1
}], ["dt", {
  reserved: !1
}], ["em", {
  reserved: !1
}], ["embed", {
  reserved: !1
}], ["fieldset", {
  reserved: !1
}], ["figcaption", {
  reserved: !1
}], ["figure", {
  reserved: !1
}], ["font", {
  reserved: !1
}], ["footer", {
  reserved: !1
}], ["form", {
  reserved: !1
}], ["frame", {
  reserved: !1
}], ["frameset", {
  reserved: !1
}], ["h1", {
  reserved: !1
}], ["h2", {
  reserved: !1
}], ["h3", {
  reserved: !1
}], ["h4", {
  reserved: !1
}], ["h5", {
  reserved: !1
}], ["h6", {
  reserved: !1
}], ["head", {
  reserved: !0
}], ["header", {
  reserved: !1
}], ["hgroup", {
  reserved: !1
}], ["hr", {
  reserved: !1
}], ["html", {
  reserved: !0
}], ["i", {
  reserved: !1
}], ["iframe", {
  reserved: !1
}], ["img", {
  reserved: !1
}], ["input", {
  reserved: !1
}], ["ins", {
  reserved: !1
}], ["kbd", {
  reserved: !1
}], ["keygen", {
  reserved: !1
}], ["label", {
  reserved: !1
}], ["legend", {
  reserved: !1
}], ["li", {
  reserved: !1
}], ["link", {
  reserved: !0
}], ["main", {
  reserved: !1
}], ["map", {
  reserved: !1
}], ["mark", {
  reserved: !1
}], ["marquee", {
  reserved: !1
}], ["menu", {
  reserved: !1
}], ["menuitem", {
  reserved: !1
}], ["meta", {
  reserved: !0
}], ["meter", {
  reserved: !1
}], ["nav", {
  reserved: !1
}], ["noembed", {
  reserved: !0
}], ["noscript", {
  reserved: !0
}], ["object", {
  reserved: !1
}], ["ol", {
  reserved: !1
}], ["optgroup", {
  reserved: !1
}], ["option", {
  reserved: !1
}], ["output", {
  reserved: !1
}], ["p", {
  reserved: !1
}], ["param", {
  reserved: !0
}], ["picture", {
  reserved: !0
}], ["pre", {
  reserved: !1
}], ["progress", {
  reserved: !1
}], ["q", {
  reserved: !1
}], ["rp", {
  reserved: !1
}], ["rt", {
  reserved: !1
}], ["rtc", {
  reserved: !1
}], ["ruby", {
  reserved: !1
}], ["s", {
  reserved: !1
}], ["samp", {
  reserved: !1
}], ["script", {
  reserved: !0
}], ["section", {
  reserved: !1
}], ["select", {
  reserved: !1
}], ["small", {
  reserved: !1
}], ["source", {
  reserved: !0
}], ["spacer", {
  reserved: !1
}], ["span", {
  reserved: !1
}], ["strike", {
  reserved: !1
}], ["strong", {
  reserved: !1
}], ["style", {
  reserved: !0
}], ["sub", {
  reserved: !1
}], ["summary", {
  reserved: !1
}], ["sup", {
  reserved: !1
}], ["table", {
  reserved: !1
}], ["tbody", {
  reserved: !1
}], ["td", {
  reserved: !1
}], ["textarea", {
  reserved: !1
}], ["tfoot", {
  reserved: !1
}], ["th", {
  reserved: !1
}], ["thead", {
  reserved: !1
}], ["time", {
  reserved: !1
}], ["title", {
  reserved: !0
}], ["tr", {
  reserved: !1
}], ["track", {
  reserved: !0
}], ["tt", {
  reserved: !1
}], ["u", {
  reserved: !1
}], ["ul", {
  reserved: !1
}], ["var", {
  reserved: !1
}], ["video", {
  reserved: !1
}], ["wbr", {
  reserved: !1
}], ["xmp", {
  reserved: !1
}]], ri = {
  entries: function() {
    return At;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = xy(At), a;
    try {
      for (n.s(); !(a = n.n()).done; ) {
        var o = hl(a.value, 2), l = o[0], u = o[1];
        t.call(r, u, l, At);
      }
    } catch (i) {
      n.e(i);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = At.find(function(n) {
      return n[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!ri.get(t);
  },
  keys: function() {
    return At.map(function(t) {
      var r = hl(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return At.map(function(t) {
      var r = hl(t, 2), n = r[1];
      return n;
    });
  }
}, Ay = (0, _y.default)(ri, ri.entries());
Rn.default = Ay;
var Ht = {}, wn = {}, Cn = {};
Object.defineProperty(Cn, "__esModule", {
  value: !0
});
Cn.default = void 0;
var $y = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menuitem"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget"]]
}, My = $y;
Cn.default = My;
var Pn = {};
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
Pn.default = void 0;
var Iy = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-disabled": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget"]]
}, Ny = Iy;
Pn.default = Ny;
var _n = {};
Object.defineProperty(_n, "__esModule", {
  value: !0
});
_n.default = void 0;
var By = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null
  },
  relatedConcepts: [{
    concept: {
      name: "input"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget"]]
}, Dy = By;
_n.default = Dy;
var Sn = {};
Object.defineProperty(Sn, "__esModule", {
  value: !0
});
Sn.default = void 0;
var ky = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Ly = ky;
Sn.default = Ly;
var Tn = {};
Object.defineProperty(Tn, "__esModule", {
  value: !0
});
Tn.default = void 0;
var jy = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, Fy = jy;
Tn.default = Fy;
var On = {};
Object.defineProperty(On, "__esModule", {
  value: !0
});
On.default = void 0;
var Uy = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {
    "aria-atomic": null,
    "aria-busy": null,
    "aria-controls": null,
    "aria-current": null,
    "aria-describedby": null,
    "aria-details": null,
    "aria-dropeffect": null,
    "aria-flowto": null,
    "aria-grabbed": null,
    "aria-hidden": null,
    "aria-keyshortcuts": null,
    "aria-label": null,
    "aria-labelledby": null,
    "aria-live": null,
    "aria-owns": null,
    "aria-relevant": null,
    "aria-roledescription": null
  },
  relatedConcepts: [{
    concept: {
      name: "rel"
    },
    module: "HTML"
  }, {
    concept: {
      name: "role"
    },
    module: "XHTML"
  }, {
    concept: {
      name: "type"
    },
    module: "Dublin Core"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: []
}, Hy = Uy;
On.default = Hy;
var qn = {};
Object.defineProperty(qn, "__esModule", {
  value: !0
});
qn.default = void 0;
var Wy = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "frontmatter"
    },
    module: "DTB"
  }, {
    concept: {
      name: "level"
    },
    module: "DTB"
  }, {
    concept: {
      name: "level"
    },
    module: "SMIL"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, zy = Wy;
qn.default = zy;
var xn = {};
Object.defineProperty(xn, "__esModule", {
  value: !0
});
xn.default = void 0;
var Vy = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, Gy = Vy;
xn.default = Gy;
var An = {};
Object.defineProperty(An, "__esModule", {
  value: !0
});
An.default = void 0;
var Yy = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "group"]]
}, Ky = Yy;
An.default = Ky;
var $n = {};
Object.defineProperty($n, "__esModule", {
  value: !0
});
$n.default = void 0;
var Xy = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype"]]
}, Jy = Xy;
$n.default = Jy;
var Mn = {};
Object.defineProperty(Mn, "__esModule", {
  value: !0
});
Mn.default = void 0;
var Qy = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype"]]
}, Zy = Qy;
Mn.default = Zy;
var In = {};
Object.defineProperty(In, "__esModule", {
  value: !0
});
In.default = void 0;
var eb = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-modal": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype"]]
}, tb = eb;
In.default = tb;
Object.defineProperty(wn, "__esModule", {
  value: !0
});
wn.default = void 0;
var rb = ge(Cn), nb = ge(Pn), ab = ge(_n), ob = ge(Sn), lb = ge(Tn), ib = ge(On), ub = ge(qn), sb = ge(xn), cb = ge(An), db = ge($n), fb = ge(Mn), pb = ge(In);
function ge(e) {
  return e && e.__esModule ? e : { default: e };
}
var mb = [["command", rb.default], ["composite", nb.default], ["input", ab.default], ["landmark", ob.default], ["range", lb.default], ["roletype", ib.default], ["section", ub.default], ["sectionhead", sb.default], ["select", cb.default], ["structure", db.default], ["widget", fb.default], ["window", pb.default]], vb = mb;
wn.default = vb;
var Nn = {}, Bn = {};
Object.defineProperty(Bn, "__esModule", {
  value: !0
});
Bn.default = void 0;
var yb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-atomic": "true",
    "aria-live": "assertive"
  },
  relatedConcepts: [{
    concept: {
      name: "alert"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, bb = yb;
Bn.default = bb;
var Dn = {};
Object.defineProperty(Dn, "__esModule", {
  value: !0
});
Dn.default = void 0;
var hb = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "alert"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "alert"], ["roletype", "window", "dialog"]]
}, gb = hb;
Dn.default = gb;
var kn = {};
Object.defineProperty(kn, "__esModule", {
  value: !0
});
kn.default = void 0;
var Eb = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "Device Independence Delivery Unit"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, Rb = Eb;
kn.default = Rb;
var Ln = {};
Object.defineProperty(Ln, "__esModule", {
  value: !0
});
Ln.default = void 0;
var wb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      name: "article"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "document"]]
}, Cb = wb;
Ln.default = Cb;
var jn = {};
Object.defineProperty(jn, "__esModule", {
  value: !0
});
jn.default = void 0;
var Pb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      constraints: ["direct descendant of document"],
      name: "header"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, _b = Pb;
jn.default = _b;
var Fn = {};
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
Fn.default = void 0;
var Sb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Tb = Sb;
Fn.default = Tb;
var Un = {};
Object.defineProperty(Un, "__esModule", {
  value: !0
});
Un.default = void 0;
var Ob = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-pressed": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-pressed"
      }, {
        name: "type",
        value: "checkbox"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "aria-expanded",
        value: "false"
      }],
      name: "summary"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "aria-expanded",
        value: "true"
      }],
      constraints: ["direct descendant of details element with the open attribute defined"],
      name: "summary"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "button"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "image"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "reset"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "submit"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      name: "button"
    },
    module: "HTML"
  }, {
    concept: {
      name: "trigger"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command"]]
}, qb = Ob;
Un.default = qb;
var Hn = {};
Object.defineProperty(Hn, "__esModule", {
  value: !0
});
Hn.default = void 0;
var xb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: ["figure", "grid", "table"],
  requiredContextRole: ["figure", "grid", "table"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Ab = xb;
Hn.default = Ab;
var Wn = {};
Object.defineProperty(Wn, "__esModule", {
  value: !0
});
Wn.default = void 0;
var $b = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-colindex": null,
    "aria-colspan": null,
    "aria-rowindex": null,
    "aria-rowspan": null
  },
  relatedConcepts: [{
    concept: {
      constraints: ["descendant of table"],
      name: "td"
    },
    module: "HTML"
  }],
  requireContextRole: ["row"],
  requiredContextRole: ["row"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Mb = $b;
Wn.default = Mb;
var zn = {};
Object.defineProperty(zn, "__esModule", {
  value: !0
});
zn.default = void 0;
var Ib = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-checked": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "checkbox"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      name: "option"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input"]]
}, Nb = Ib;
zn.default = Nb;
var Vn = {};
Object.defineProperty(Vn, "__esModule", {
  value: !0
});
Vn.default = void 0;
var Bb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Db = Bb;
Vn.default = Db;
var Gn = {};
Object.defineProperty(Gn, "__esModule", {
  value: !0
});
Gn.default = void 0;
var kb = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-sort": null
  },
  relatedConcepts: [{
    attributes: [{
      name: "scope",
      value: "col"
    }],
    concept: {
      name: "th"
    },
    module: "HTML"
  }],
  requireContextRole: ["row"],
  requiredContextRole: ["row"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
}, Lb = kb;
Gn.default = Lb;
var Yn = {};
Object.defineProperty(Yn, "__esModule", {
  value: !0
});
Yn.default = void 0;
var jb = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-autocomplete": null,
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-expanded": "false",
    "aria-haspopup": "listbox"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "email"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "search"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "tel"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "text"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "url"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "url"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "multiple"
      }, {
        constraints: ["undefined"],
        name: "size"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "multiple"
      }, {
        name: "size",
        value: 1
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      name: "select"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-controls": null,
    "aria-expanded": "false"
  },
  superClass: [["roletype", "widget", "input"]]
}, Fb = jb;
Yn.default = Fb;
var Kn = {};
Object.defineProperty(Kn, "__esModule", {
  value: !0
});
Kn.default = void 0;
var Ub = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "aside"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Hb = Ub;
Kn.default = Hb;
var Xn = {};
Object.defineProperty(Xn, "__esModule", {
  value: !0
});
Xn.default = void 0;
var Wb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      constraints: ["direct descendant of document"],
      name: "footer"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, zb = Wb;
Xn.default = zb;
var Jn = {};
Object.defineProperty(Jn, "__esModule", {
  value: !0
});
Jn.default = void 0;
var Vb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "dd"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Gb = Vb;
Jn.default = Gb;
var Qn = {};
Object.defineProperty(Qn, "__esModule", {
  value: !0
});
Qn.default = void 0;
var Yb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Kb = Yb;
Qn.default = Kb;
var Zn = {};
Object.defineProperty(Zn, "__esModule", {
  value: !0
});
Zn.default = void 0;
var Xb = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "dialog"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "window"]]
}, Jb = Xb;
Zn.default = Jb;
var ea = {};
Object.defineProperty(ea, "__esModule", {
  value: !0
});
ea.default = void 0;
var Qb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    module: "DAISY Guide"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "list"]]
}, Zb = Qb;
ea.default = Zb;
var ta = {};
Object.defineProperty(ta, "__esModule", {
  value: !0
});
ta.default = void 0;
var eh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "Device Independence Delivery Unit"
    }
  }, {
    concept: {
      name: "body"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, th = eh;
ta.default = th;
var ra = {};
Object.defineProperty(ra, "__esModule", {
  value: !0
});
ra.default = void 0;
var rh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, nh = rh;
ra.default = nh;
var na = {};
Object.defineProperty(na, "__esModule", {
  value: !0
});
na.default = void 0;
var ah = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["article"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "list"]]
}, oh = ah;
na.default = oh;
var aa = {};
Object.defineProperty(aa, "__esModule", {
  value: !0
});
aa.default = void 0;
var lh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "figure"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, ih = lh;
aa.default = ih;
var oa = {};
Object.defineProperty(oa, "__esModule", {
  value: !0
});
oa.default = void 0;
var uh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-label"
      }],
      name: "form"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-labelledby"
      }],
      name: "form"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "name"
      }],
      name: "form"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, sh = uh;
oa.default = sh;
var la = {};
Object.defineProperty(la, "__esModule", {
  value: !0
});
la.default = void 0;
var ch = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "span"
    },
    module: "HTML"
  }, {
    concept: {
      name: "div"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, dh = ch;
la.default = dh;
var ia = {};
Object.defineProperty(ia, "__esModule", {
  value: !0
});
ia.default = void 0;
var fh = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-multiselectable": null,
    "aria-readonly": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "role",
        value: "grid"
      }],
      name: "table"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["row"], ["row", "rowgroup"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "table"]]
}, ph = fh;
ia.default = ph;
var ua = {};
Object.defineProperty(ua, "__esModule", {
  value: !0
});
ua.default = void 0;
var mh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-selected": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "role",
        value: "gridcell"
      }],
      name: "td"
    },
    module: "HTML"
  }],
  requireContextRole: ["row"],
  requiredContextRole: ["row"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "cell"], ["roletype", "widget"]]
}, vh = mh;
ua.default = vh;
var sa = {};
Object.defineProperty(sa, "__esModule", {
  value: !0
});
sa.default = void 0;
var yh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-disabled": null
  },
  relatedConcepts: [{
    concept: {
      name: "details"
    },
    module: "HTML"
  }, {
    concept: {
      name: "fieldset"
    },
    module: "HTML"
  }, {
    concept: {
      name: "optgroup"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, bh = yh;
sa.default = bh;
var ca = {};
Object.defineProperty(ca, "__esModule", {
  value: !0
});
ca.default = void 0;
var hh = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-level": "2"
  },
  relatedConcepts: [{
    concept: {
      name: "h1"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h2"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h3"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h4"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h5"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h6"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-level": "2"
  },
  superClass: [["roletype", "structure", "sectionhead"]]
}, gh = hh;
ca.default = gh;
var da = {};
Object.defineProperty(da, "__esModule", {
  value: !0
});
da.default = void 0;
var Eh = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "alt"
      }],
      name: "img"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "alt"
      }],
      name: "img"
    },
    module: "HTML"
  }, {
    concept: {
      name: "imggroup"
    },
    module: "DTB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Rh = Eh;
da.default = Rh;
var fa = {};
Object.defineProperty(fa, "__esModule", {
  value: !0
});
fa.default = void 0;
var wh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Ch = wh;
fa.default = Ch;
var pa = {};
Object.defineProperty(pa, "__esModule", {
  value: !0
});
pa.default = void 0;
var Ph = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "href"
      }],
      name: "a"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "href"
      }],
      name: "area"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "href"
      }],
      name: "link"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command"]]
}, _h = Ph;
pa.default = _h;
var ma = {};
Object.defineProperty(ma, "__esModule", {
  value: !0
});
ma.default = void 0;
var Sh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menu"
    },
    module: "HTML"
  }, {
    concept: {
      name: "ol"
    },
    module: "HTML"
  }, {
    concept: {
      name: "ul"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["listitem"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Th = Sh;
ma.default = Th;
var va = {};
Object.defineProperty(va, "__esModule", {
  value: !0
});
va.default = void 0;
var Oh = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-invalid": null,
    "aria-multiselectable": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-orientation": "vertical"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: [">1"],
        name: "size"
      }, {
        name: "multiple"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: [">1"],
        name: "size"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "multiple"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      name: "datalist"
    },
    module: "HTML"
  }, {
    concept: {
      name: "list"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "select"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["option", "group"], ["option"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, qh = Oh;
va.default = qh;
var ya = {};
Object.defineProperty(ya, "__esModule", {
  value: !0
});
ya.default = void 0;
var xh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-level": null,
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      constraints: ["direct descendant of ol, ul or menu"],
      name: "li"
    },
    module: "HTML"
  }, {
    concept: {
      name: "item"
    },
    module: "XForms"
  }],
  requireContextRole: ["directory", "list"],
  requiredContextRole: ["directory", "list"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Ah = xh;
ya.default = Ah;
var ba = {};
Object.defineProperty(ba, "__esModule", {
  value: !0
});
ba.default = void 0;
var $h = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-live": "polite"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Mh = $h;
ba.default = Mh;
var ha = {};
Object.defineProperty(ha, "__esModule", {
  value: !0
});
ha.default = void 0;
var Ih = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "main"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Nh = Ih;
ha.default = Nh;
var ga = {};
Object.defineProperty(ga, "__esModule", {
  value: !0
});
ga.default = void 0;
var Bh = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Dh = Bh;
ga.default = Dh;
var Ea = {};
Object.defineProperty(Ea, "__esModule", {
  value: !0
});
Ea.default = void 0;
var kh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "math"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Lh = kh;
Ea.default = Lh;
var Ra = {};
Object.defineProperty(Ra, "__esModule", {
  value: !0
});
Ra.default = void 0;
var jh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": "vertical"
  },
  relatedConcepts: [{
    concept: {
      name: "MENU"
    },
    module: "JAPI"
  }, {
    concept: {
      name: "list"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "select"
    },
    module: "XForms"
  }, {
    concept: {
      name: "sidebar"
    },
    module: "DTB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, Fh = jh;
Ra.default = Fh;
var wa = {};
Object.defineProperty(wa, "__esModule", {
  value: !0
});
wa.default = void 0;
var Uh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": "horizontal"
  },
  relatedConcepts: [{
    concept: {
      name: "toolbar"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select", "menu"], ["roletype", "structure", "section", "group", "select", "menu"]]
}, Hh = Uh;
wa.default = Hh;
var Ca = {};
Object.defineProperty(Ca, "__esModule", {
  value: !0
});
Ca.default = void 0;
var Wh = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      name: "MENU_ITEM"
    },
    module: "JAPI"
  }, {
    concept: {
      name: "listitem"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "menuitem"
    },
    module: "HTML"
  }, {
    concept: {
      name: "option"
    },
    module: "ARIA"
  }],
  requireContextRole: ["group", "menu", "menubar"],
  requiredContextRole: ["group", "menu", "menubar"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command"]]
}, zh = Wh;
Ca.default = zh;
var Pa = {};
Object.defineProperty(Pa, "__esModule", {
  value: !0
});
Pa.default = void 0;
var Vh = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menuitem"
    },
    module: "ARIA"
  }],
  requireContextRole: ["group", "menu", "menubar"],
  requiredContextRole: ["group", "menu", "menubar"],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input", "checkbox"], ["roletype", "widget", "command", "menuitem"]]
}, Gh = Vh;
Pa.default = Gh;
var _a = {};
Object.defineProperty(_a, "__esModule", {
  value: !0
});
_a.default = void 0;
var Yh = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menuitem"
    },
    module: "ARIA"
  }],
  requireContextRole: ["group", "menu", "menubar"],
  requiredContextRole: ["group", "menu", "menubar"],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input", "checkbox", "menuitemcheckbox"], ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"], ["roletype", "widget", "input", "radio"]]
}, Kh = Yh;
_a.default = Kh;
var Sa = {};
Object.defineProperty(Sa, "__esModule", {
  value: !0
});
Sa.default = void 0;
var Xh = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-valuetext": null,
    "aria-valuemax": "100",
    "aria-valuemin": "0"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-valuenow": null
  },
  superClass: [["roletype", "structure", "range"]]
}, Jh = Xh;
Sa.default = Jh;
var Ta = {};
Object.defineProperty(Ta, "__esModule", {
  value: !0
});
Ta.default = void 0;
var Qh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "nav"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Zh = Qh;
Ta.default = Zh;
var Oa = {};
Object.defineProperty(Oa, "__esModule", {
  value: !0
});
Oa.default = void 0;
var eg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: []
}, tg = eg;
Oa.default = tg;
var qa = {};
Object.defineProperty(qa, "__esModule", {
  value: !0
});
qa.default = void 0;
var rg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, ng = rg;
qa.default = ng;
var xa = {};
Object.defineProperty(xa, "__esModule", {
  value: !0
});
xa.default = void 0;
var ag = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-checked": null,
    "aria-posinset": null,
    "aria-setsize": null,
    "aria-selected": "false"
  },
  relatedConcepts: [{
    concept: {
      name: "item"
    },
    module: "XForms"
  }, {
    concept: {
      name: "listitem"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "option"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-selected": "false"
  },
  superClass: [["roletype", "widget", "input"]]
}, og = ag;
xa.default = og;
var Aa = {};
Object.defineProperty(Aa, "__esModule", {
  value: !0
});
Aa.default = void 0;
var lg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, ig = lg;
Aa.default = ig;
var $a = {};
Object.defineProperty($a, "__esModule", {
  value: !0
});
$a.default = void 0;
var ug = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, sg = ug;
$a.default = sg;
var Ma = {};
Object.defineProperty(Ma, "__esModule", {
  value: !0
});
Ma.default = void 0;
var cg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-valuetext": null
  },
  relatedConcepts: [{
    concept: {
      name: "progress"
    },
    module: "HTML"
  }, {
    concept: {
      name: "status"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
}, dg = cg;
Ma.default = dg;
var Ia = {};
Object.defineProperty(Ia, "__esModule", {
  value: !0
});
Ia.default = void 0;
var fg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-checked": null,
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "radio"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input"]]
}, pg = fg;
Ia.default = pg;
var Na = {};
Object.defineProperty(Na, "__esModule", {
  value: !0
});
Na.default = void 0;
var mg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null
  },
  relatedConcepts: [{
    concept: {
      name: "list"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["radio"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, vg = mg;
Na.default = vg;
var Ba = {};
Object.defineProperty(Ba, "__esModule", {
  value: !0
});
Ba.default = void 0;
var yg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-label"
      }],
      name: "section"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-labelledby"
      }],
      name: "section"
    },
    module: "HTML"
  }, {
    concept: {
      name: "Device Independence Glossart perceivable unit"
    }
  }, {
    concept: {
      name: "frame"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, bg = yg;
Ba.default = bg;
var Da = {};
Object.defineProperty(Da, "__esModule", {
  value: !0
});
Da.default = void 0;
var hg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-colindex": null,
    "aria-expanded": null,
    "aria-level": null,
    "aria-posinset": null,
    "aria-rowindex": null,
    "aria-selected": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      name: "tr"
    },
    module: "HTML"
  }],
  requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
  requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
  requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "group"], ["roletype", "widget"]]
}, gg = hg;
Da.default = gg;
var ka = {};
Object.defineProperty(ka, "__esModule", {
  value: !0
});
ka.default = void 0;
var Eg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "tbody"
    },
    module: "HTML"
  }, {
    concept: {
      name: "tfoot"
    },
    module: "HTML"
  }, {
    concept: {
      name: "thead"
    },
    module: "HTML"
  }],
  requireContextRole: ["grid", "table", "treegrid"],
  requiredContextRole: ["grid", "table", "treegrid"],
  requiredOwnedElements: [["row"]],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, Rg = Eg;
ka.default = Rg;
var La = {};
Object.defineProperty(La, "__esModule", {
  value: !0
});
La.default = void 0;
var wg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-sort": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "scope",
        value: "row"
      }],
      name: "th"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "scope",
        value: "rowgroup"
      }],
      name: "th"
    },
    module: "HTML"
  }],
  requireContextRole: ["row", "rowgroup"],
  requiredContextRole: ["row", "rowgroup"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
}, Cg = wg;
La.default = Cg;
var ja = {};
Object.defineProperty(ja, "__esModule", {
  value: !0
});
ja.default = void 0;
var Pg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-valuetext": null,
    "aria-orientation": "vertical",
    "aria-valuemax": "100",
    "aria-valuemin": "0"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-controls": null,
    "aria-valuenow": null
  },
  superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
}, _g = Pg;
ja.default = _g;
var Fa = {};
Object.defineProperty(Fa, "__esModule", {
  value: !0
});
Fa.default = void 0;
var Sg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Tg = Sg;
Fa.default = Tg;
var Ua = {};
Object.defineProperty(Ua, "__esModule", {
  value: !0
});
Ua.default = void 0;
var Og = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "search"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "input", "textbox"]]
}, qg = Og;
Ua.default = qg;
var Ha = {};
Object.defineProperty(Ha, "__esModule", {
  value: !0
});
Ha.default = void 0;
var xg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-orientation": "horizontal",
    "aria-valuemax": "100",
    "aria-valuemin": "0",
    "aria-valuenow": null,
    "aria-valuetext": null
  },
  relatedConcepts: [{
    concept: {
      name: "hr"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, Ag = xg;
Ha.default = Ag;
var Wa = {};
Object.defineProperty(Wa, "__esModule", {
  value: !0
});
Wa.default = void 0;
var $g = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-haspopup": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-valuetext": null,
    "aria-orientation": "horizontal",
    "aria-valuemax": "100",
    "aria-valuemin": "0"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "range"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-valuenow": null
  },
  superClass: [["roletype", "widget", "input"], ["roletype", "structure", "range"]]
}, Mg = $g;
Wa.default = Mg;
var za = {};
Object.defineProperty(za, "__esModule", {
  value: !0
});
za.default = void 0;
var Ig = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-valuetext": null,
    "aria-valuenow": "0"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "number"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"], ["roletype", "widget", "input"], ["roletype", "structure", "range"]]
}, Ng = Ig;
za.default = Ng;
var Va = {};
Object.defineProperty(Va, "__esModule", {
  value: !0
});
Va.default = void 0;
var Bg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-atomic": "true",
    "aria-live": "polite"
  },
  relatedConcepts: [{
    concept: {
      name: "output"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Dg = Bg;
Va.default = Dg;
var Ga = {};
Object.defineProperty(Ga, "__esModule", {
  value: !0
});
Ga.default = void 0;
var kg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Lg = kg;
Ga.default = Lg;
var Ya = {};
Object.defineProperty(Ya, "__esModule", {
  value: !0
});
Ya.default = void 0;
var jg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Fg = jg;
Ya.default = Fg;
var Ka = {};
Object.defineProperty(Ka, "__esModule", {
  value: !0
});
Ka.default = void 0;
var Ug = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Hg = Ug;
Ka.default = Hg;
var Xa = {};
Object.defineProperty(Xa, "__esModule", {
  value: !0
});
Xa.default = void 0;
var Wg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "button"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input", "checkbox"]]
}, zg = Wg;
Xa.default = zg;
var Ja = {};
Object.defineProperty(Ja, "__esModule", {
  value: !0
});
Ja.default = void 0;
var Vg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-posinset": null,
    "aria-setsize": null,
    "aria-selected": "false"
  },
  relatedConcepts: [],
  requireContextRole: ["tablist"],
  requiredContextRole: ["tablist"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "sectionhead"], ["roletype", "widget"]]
}, Gg = Vg;
Ja.default = Gg;
var Qa = {};
Object.defineProperty(Qa, "__esModule", {
  value: !0
});
Qa.default = void 0;
var Yg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-colcount": null,
    "aria-rowcount": null
  },
  relatedConcepts: [{
    concept: {
      name: "table"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["row"], ["row", "rowgroup"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Kg = Yg;
Qa.default = Kg;
var Za = {};
Object.defineProperty(Za, "__esModule", {
  value: !0
});
Za.default = void 0;
var Xg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-level": null,
    "aria-multiselectable": null,
    "aria-orientation": "horizontal"
  },
  relatedConcepts: [{
    module: "DAISY",
    concept: {
      name: "guide"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["tab"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"]]
}, Jg = Xg;
Za.default = Jg;
var eo = {};
Object.defineProperty(eo, "__esModule", {
  value: !0
});
eo.default = void 0;
var Qg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Zg = Qg;
eo.default = Zg;
var to = {};
Object.defineProperty(to, "__esModule", {
  value: !0
});
to.default = void 0;
var eE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "dfn"
    },
    module: "HTML"
  }, {
    concept: {
      name: "dt"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, tE = eE;
to.default = tE;
var ro = {};
Object.defineProperty(ro, "__esModule", {
  value: !0
});
ro.default = void 0;
var rE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-autocomplete": null,
    "aria-errormessage": null,
    "aria-haspopup": null,
    "aria-invalid": null,
    "aria-multiline": null,
    "aria-placeholder": null,
    "aria-readonly": null,
    "aria-required": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "type"
      }, {
        constraints: ["undefined"],
        name: "list"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "email"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "tel"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "text"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "url"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      name: "input"
    },
    module: "XForms"
  }, {
    concept: {
      name: "textarea"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "input"]]
}, nE = rE;
ro.default = nE;
var no = {};
Object.defineProperty(no, "__esModule", {
  value: !0
});
no.default = void 0;
var aE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, oE = aE;
no.default = oE;
var ao = {};
Object.defineProperty(ao, "__esModule", {
  value: !0
});
ao.default = void 0;
var lE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "status"]]
}, iE = lE;
ao.default = iE;
var oo = {};
Object.defineProperty(oo, "__esModule", {
  value: !0
});
oo.default = void 0;
var uE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": "horizontal"
  },
  relatedConcepts: [{
    concept: {
      name: "menubar"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "group"]]
}, sE = uE;
oo.default = sE;
var lo = {};
Object.defineProperty(lo, "__esModule", {
  value: !0
});
lo.default = void 0;
var cE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, dE = cE;
lo.default = dE;
var io = {};
Object.defineProperty(io, "__esModule", {
  value: !0
});
io.default = void 0;
var fE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-multiselectable": null,
    "aria-required": null,
    "aria-orientation": "vertical"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, pE = fE;
io.default = pE;
var uo = {};
Object.defineProperty(uo, "__esModule", {
  value: !0
});
uo.default = void 0;
var mE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["row"], ["row", "rowgroup"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "grid"], ["roletype", "structure", "section", "table", "grid"], ["roletype", "widget", "composite", "select", "tree"], ["roletype", "structure", "section", "group", "select", "tree"]]
}, vE = mE;
uo.default = vE;
var so = {};
Object.defineProperty(so, "__esModule", {
  value: !0
});
so.default = void 0;
var yE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-expanded": null,
    "aria-haspopup": null
  },
  relatedConcepts: [],
  requireContextRole: ["group", "tree"],
  requiredContextRole: ["group", "tree"],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-selected": null
  },
  superClass: [["roletype", "structure", "section", "listitem"], ["roletype", "widget", "input", "option"]]
}, bE = yE;
so.default = bE;
Object.defineProperty(Nn, "__esModule", {
  value: !0
});
Nn.default = void 0;
var hE = _(Bn), gE = _(Dn), EE = _(kn), RE = _(Ln), wE = _(jn), CE = _(Fn), PE = _(Un), _E = _(Hn), SE = _(Wn), TE = _(zn), OE = _(Vn), qE = _(Gn), xE = _(Yn), AE = _(Kn), $E = _(Xn), ME = _(Jn), IE = _(Qn), NE = _(Zn), BE = _(ea), DE = _(ta), kE = _(ra), LE = _(na), jE = _(aa), FE = _(oa), UE = _(la), HE = _(ia), WE = _(ua), zE = _(sa), VE = _(ca), GE = _(da), YE = _(fa), KE = _(pa), XE = _(ma), JE = _(va), QE = _(ya), ZE = _(ba), eR = _(ha), tR = _(ga), rR = _(Ea), nR = _(Ra), aR = _(wa), oR = _(Ca), lR = _(Pa), iR = _(_a), uR = _(Sa), sR = _(Ta), cR = _(Oa), dR = _(qa), fR = _(xa), pR = _(Aa), mR = _($a), vR = _(Ma), yR = _(Ia), bR = _(Na), hR = _(Ba), gR = _(Da), ER = _(ka), RR = _(La), wR = _(ja), CR = _(Fa), PR = _(Ua), _R = _(Ha), SR = _(Wa), TR = _(za), OR = _(Va), qR = _(Ga), xR = _(Ya), AR = _(Ka), $R = _(Xa), MR = _(Ja), IR = _(Qa), NR = _(Za), BR = _(eo), DR = _(to), kR = _(ro), LR = _(no), jR = _(ao), FR = _(oo), UR = _(lo), HR = _(io), WR = _(uo), zR = _(so);
function _(e) {
  return e && e.__esModule ? e : { default: e };
}
var VR = [["alert", hE.default], ["alertdialog", gE.default], ["application", EE.default], ["article", RE.default], ["banner", wE.default], ["blockquote", CE.default], ["button", PE.default], ["caption", _E.default], ["cell", SE.default], ["checkbox", TE.default], ["code", OE.default], ["columnheader", qE.default], ["combobox", xE.default], ["complementary", AE.default], ["contentinfo", $E.default], ["definition", ME.default], ["deletion", IE.default], ["dialog", NE.default], ["directory", BE.default], ["document", DE.default], ["emphasis", kE.default], ["feed", LE.default], ["figure", jE.default], ["form", FE.default], ["generic", UE.default], ["grid", HE.default], ["gridcell", WE.default], ["group", zE.default], ["heading", VE.default], ["img", GE.default], ["insertion", YE.default], ["link", KE.default], ["list", XE.default], ["listbox", JE.default], ["listitem", QE.default], ["log", ZE.default], ["main", eR.default], ["marquee", tR.default], ["math", rR.default], ["menu", nR.default], ["menubar", aR.default], ["menuitem", oR.default], ["menuitemcheckbox", lR.default], ["menuitemradio", iR.default], ["meter", uR.default], ["navigation", sR.default], ["none", cR.default], ["note", dR.default], ["option", fR.default], ["paragraph", pR.default], ["presentation", mR.default], ["progressbar", vR.default], ["radio", yR.default], ["radiogroup", bR.default], ["region", hR.default], ["row", gR.default], ["rowgroup", ER.default], ["rowheader", RR.default], ["scrollbar", wR.default], ["search", CR.default], ["searchbox", PR.default], ["separator", _R.default], ["slider", SR.default], ["spinbutton", TR.default], ["status", OR.default], ["strong", qR.default], ["subscript", xR.default], ["superscript", AR.default], ["switch", $R.default], ["tab", MR.default], ["table", IR.default], ["tablist", NR.default], ["tabpanel", BR.default], ["term", DR.default], ["textbox", kR.default], ["time", LR.default], ["timer", jR.default], ["toolbar", FR.default], ["tooltip", UR.default], ["tree", HR.default], ["treegrid", WR.default], ["treeitem", zR.default]], GR = VR;
Nn.default = GR;
var co = {}, fo = {};
Object.defineProperty(fo, "__esModule", {
  value: !0
});
fo.default = void 0;
var YR = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "abstract [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, KR = YR;
fo.default = KR;
var po = {};
Object.defineProperty(po, "__esModule", {
  value: !0
});
po.default = void 0;
var XR = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "acknowledgments [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, JR = XR;
po.default = JR;
var mo = {};
Object.defineProperty(mo, "__esModule", {
  value: !0
});
mo.default = void 0;
var QR = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "afterword [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, ZR = QR;
mo.default = ZR;
var vo = {};
Object.defineProperty(vo, "__esModule", {
  value: !0
});
vo.default = void 0;
var ew = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "appendix [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, tw = ew;
vo.default = tw;
var yo = {};
Object.defineProperty(yo, "__esModule", {
  value: !0
});
yo.default = void 0;
var rw = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "content"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "referrer [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, nw = rw;
yo.default = nw;
var bo = {};
Object.defineProperty(bo, "__esModule", {
  value: !0
});
bo.default = void 0;
var aw = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "EPUB biblioentry [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: ["doc-bibliography"],
  requiredContextRole: ["doc-bibliography"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "listitem"]]
}, ow = aw;
bo.default = ow;
var ho = {};
Object.defineProperty(ho, "__esModule", {
  value: !0
});
ho.default = void 0;
var lw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "bibliography [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["doc-biblioentry"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, iw = lw;
ho.default = iw;
var go = {};
Object.defineProperty(go, "__esModule", {
  value: !0
});
go.default = void 0;
var uw = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "biblioref [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, sw = uw;
go.default = sw;
var Eo = {};
Object.defineProperty(Eo, "__esModule", {
  value: !0
});
Eo.default = void 0;
var cw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "chapter [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, dw = cw;
Eo.default = dw;
var Ro = {};
Object.defineProperty(Ro, "__esModule", {
  value: !0
});
Ro.default = void 0;
var fw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "colophon [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, pw = fw;
Ro.default = pw;
var wo = {};
Object.defineProperty(wo, "__esModule", {
  value: !0
});
wo.default = void 0;
var mw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "conclusion [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, vw = mw;
wo.default = vw;
var Co = {};
Object.defineProperty(Co, "__esModule", {
  value: !0
});
Co.default = void 0;
var yw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "cover [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "img"]]
}, bw = yw;
Co.default = bw;
var Po = {};
Object.defineProperty(Po, "__esModule", {
  value: !0
});
Po.default = void 0;
var hw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "credit [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, gw = hw;
Po.default = gw;
var _o = {};
Object.defineProperty(_o, "__esModule", {
  value: !0
});
_o.default = void 0;
var Ew = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "credits [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Rw = Ew;
_o.default = Rw;
var So = {};
Object.defineProperty(So, "__esModule", {
  value: !0
});
So.default = void 0;
var ww = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "dedication [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Cw = ww;
So.default = Cw;
var To = {};
Object.defineProperty(To, "__esModule", {
  value: !0
});
To.default = void 0;
var Pw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "rearnote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: ["doc-endnotes"],
  requiredContextRole: ["doc-endnotes"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "listitem"]]
}, _w = Pw;
To.default = _w;
var Oo = {};
Object.defineProperty(Oo, "__esModule", {
  value: !0
});
Oo.default = void 0;
var Sw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "rearnotes [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["doc-endnote"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Tw = Sw;
Oo.default = Tw;
var qo = {};
Object.defineProperty(qo, "__esModule", {
  value: !0
});
qo.default = void 0;
var Ow = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "epigraph [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, qw = Ow;
qo.default = qw;
var xo = {};
Object.defineProperty(xo, "__esModule", {
  value: !0
});
xo.default = void 0;
var xw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "epilogue [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Aw = xw;
xo.default = Aw;
var Ao = {};
Object.defineProperty(Ao, "__esModule", {
  value: !0
});
Ao.default = void 0;
var $w = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "errata [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Mw = $w;
Ao.default = Mw;
var $o = {};
Object.defineProperty($o, "__esModule", {
  value: !0
});
$o.default = void 0;
var Iw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Nw = Iw;
$o.default = Nw;
var Mo = {};
Object.defineProperty(Mo, "__esModule", {
  value: !0
});
Mo.default = void 0;
var Bw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "footnote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Dw = Bw;
Mo.default = Dw;
var Io = {};
Object.defineProperty(Io, "__esModule", {
  value: !0
});
Io.default = void 0;
var kw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "foreword [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Lw = kw;
Io.default = Lw;
var No = {};
Object.defineProperty(No, "__esModule", {
  value: !0
});
No.default = void 0;
var jw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "glossary [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["definition"], ["term"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Fw = jw;
No.default = Fw;
var Bo = {};
Object.defineProperty(Bo, "__esModule", {
  value: !0
});
Bo.default = void 0;
var Uw = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "glossref [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, Hw = Uw;
Bo.default = Hw;
var Do = {};
Object.defineProperty(Do, "__esModule", {
  value: !0
});
Do.default = void 0;
var Ww = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "index [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, zw = Ww;
Do.default = zw;
var ko = {};
Object.defineProperty(ko, "__esModule", {
  value: !0
});
ko.default = void 0;
var Vw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "introduction [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Gw = Vw;
ko.default = Gw;
var Lo = {};
Object.defineProperty(Lo, "__esModule", {
  value: !0
});
Lo.default = void 0;
var Yw = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "noteref [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, Kw = Yw;
Lo.default = Kw;
var jo = {};
Object.defineProperty(jo, "__esModule", {
  value: !0
});
jo.default = void 0;
var Xw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "notice [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "note"]]
}, Jw = Xw;
jo.default = Jw;
var Fo = {};
Object.defineProperty(Fo, "__esModule", {
  value: !0
});
Fo.default = void 0;
var Qw = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "pagebreak [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "separator"]]
}, Zw = Qw;
Fo.default = Zw;
var Uo = {};
Object.defineProperty(Uo, "__esModule", {
  value: !0
});
Uo.default = void 0;
var eC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "page-list [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, tC = eC;
Uo.default = tC;
var Ho = {};
Object.defineProperty(Ho, "__esModule", {
  value: !0
});
Ho.default = void 0;
var rC = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "part [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, nC = rC;
Ho.default = nC;
var Wo = {};
Object.defineProperty(Wo, "__esModule", {
  value: !0
});
Wo.default = void 0;
var aC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "preface [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, oC = aC;
Wo.default = oC;
var zo = {};
Object.defineProperty(zo, "__esModule", {
  value: !0
});
zo.default = void 0;
var lC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "prologue [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, iC = lC;
zo.default = iC;
var Vo = {};
Object.defineProperty(Vo, "__esModule", {
  value: !0
});
Vo.default = void 0;
var uC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "pullquote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["none"]]
}, sC = uC;
Vo.default = sC;
var Go = {};
Object.defineProperty(Go, "__esModule", {
  value: !0
});
Go.default = void 0;
var cC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "qna [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, dC = cC;
Go.default = dC;
var Yo = {};
Object.defineProperty(Yo, "__esModule", {
  value: !0
});
Yo.default = void 0;
var fC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "subtitle [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "sectionhead"]]
}, pC = fC;
Yo.default = pC;
var Ko = {};
Object.defineProperty(Ko, "__esModule", {
  value: !0
});
Ko.default = void 0;
var mC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "help [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "note"]]
}, vC = mC;
Ko.default = vC;
var Xo = {};
Object.defineProperty(Xo, "__esModule", {
  value: !0
});
Xo.default = void 0;
var yC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "toc [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, bC = yC;
Xo.default = bC;
Object.defineProperty(co, "__esModule", {
  value: !0
});
co.default = void 0;
var hC = k(fo), gC = k(po), EC = k(mo), RC = k(vo), wC = k(yo), CC = k(bo), PC = k(ho), _C = k(go), SC = k(Eo), TC = k(Ro), OC = k(wo), qC = k(Co), xC = k(Po), AC = k(_o), $C = k(So), MC = k(To), IC = k(Oo), NC = k(qo), BC = k(xo), DC = k(Ao), kC = k($o), LC = k(Mo), jC = k(Io), FC = k(No), UC = k(Bo), HC = k(Do), WC = k(ko), zC = k(Lo), VC = k(jo), GC = k(Fo), YC = k(Uo), KC = k(Ho), XC = k(Wo), JC = k(zo), QC = k(Vo), ZC = k(Go), eP = k(Yo), tP = k(Ko), rP = k(Xo);
function k(e) {
  return e && e.__esModule ? e : { default: e };
}
var nP = [["doc-abstract", hC.default], ["doc-acknowledgments", gC.default], ["doc-afterword", EC.default], ["doc-appendix", RC.default], ["doc-backlink", wC.default], ["doc-biblioentry", CC.default], ["doc-bibliography", PC.default], ["doc-biblioref", _C.default], ["doc-chapter", SC.default], ["doc-colophon", TC.default], ["doc-conclusion", OC.default], ["doc-cover", qC.default], ["doc-credit", xC.default], ["doc-credits", AC.default], ["doc-dedication", $C.default], ["doc-endnote", MC.default], ["doc-endnotes", IC.default], ["doc-epigraph", NC.default], ["doc-epilogue", BC.default], ["doc-errata", DC.default], ["doc-example", kC.default], ["doc-footnote", LC.default], ["doc-foreword", jC.default], ["doc-glossary", FC.default], ["doc-glossref", UC.default], ["doc-index", HC.default], ["doc-introduction", WC.default], ["doc-noteref", zC.default], ["doc-notice", VC.default], ["doc-pagebreak", GC.default], ["doc-pagelist", YC.default], ["doc-part", KC.default], ["doc-preface", XC.default], ["doc-prologue", JC.default], ["doc-pullquote", QC.default], ["doc-qna", ZC.default], ["doc-subtitle", eP.default], ["doc-tip", tP.default], ["doc-toc", rP.default]], aP = nP;
co.default = aP;
var Jo = {}, Qo = {};
Object.defineProperty(Qo, "__esModule", {
  value: !0
});
Qo.default = void 0;
var oP = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    module: "GRAPHICS",
    concept: {
      name: "graphics-object"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "img"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "article"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "document"]]
}, lP = oP;
Qo.default = lP;
var Zo = {};
Object.defineProperty(Zo, "__esModule", {
  value: !0
});
Zo.default = void 0;
var iP = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    module: "GRAPHICS",
    concept: {
      name: "graphics-document"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "group"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "img"
    }
  }, {
    module: "GRAPHICS",
    concept: {
      name: "graphics-symbol"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "group"]]
}, uP = iP;
Zo.default = uP;
var el = {};
Object.defineProperty(el, "__esModule", {
  value: !0
});
el.default = void 0;
var sP = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "img"]]
}, cP = sP;
el.default = cP;
Object.defineProperty(Jo, "__esModule", {
  value: !0
});
Jo.default = void 0;
var dP = Vi(Qo), fP = Vi(Zo), pP = Vi(el);
function Vi(e) {
  return e && e.__esModule ? e : { default: e };
}
var mP = [["graphics-document", dP.default], ["graphics-object", fP.default], ["graphics-symbol", pP.default]], vP = mP;
Jo.default = vP;
Object.defineProperty(Ht, "__esModule", {
  value: !0
});
Ht.default = void 0;
var yP = Er(wn), bP = Er(Nn), hP = Er(co), gP = Er(Jo), EP = Er(Ct);
function Er(e) {
  return e && e.__esModule ? e : { default: e };
}
function RP(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ni(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Id(e)) || t) {
      r && (e = r);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(s) {
        throw s;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, l = !1, u;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var s = r.next();
    return o = s.done, s;
  }, e: function(s) {
    l = !0, u = s;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (l) throw u;
    }
  } };
}
function ur(e, t) {
  return PP(e) || CP(e, t) || Id(e, t) || wP();
}
function wP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Id(e, t) {
  if (e) {
    if (typeof e == "string") return rs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rs(e, t);
  }
}
function rs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function CP(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, o = !1, l, u;
    try {
      for (r = r.call(e); !(a = (l = r.next()).done) && (n.push(l.value), !(t && n.length === t)); a = !0)
        ;
    } catch (i) {
      o = !0, u = i;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function PP(e) {
  if (Array.isArray(e)) return e;
}
var Ke = [].concat(yP.default, bP.default, hP.default, gP.default);
Ke.forEach(function(e) {
  var t = ur(e, 2), r = t[1], n = ni(r.superClass), a;
  try {
    for (n.s(); !(a = n.n()).done; ) {
      var o = a.value, l = ni(o), u;
      try {
        var i = function() {
          var p = u.value, m = Ke.find(function($) {
            var f = ur($, 1), C = f[0];
            return C === p;
          });
          if (m)
            for (var v = m[1], w = 0, A = Object.keys(v.props); w < A.length; w++) {
              var T = A[w];
              Object.prototype.hasOwnProperty.call(r.props, T) || Object.assign(r.props, RP({}, T, v.props[T]));
            }
        };
        for (l.s(); !(u = l.n()).done; )
          i();
      } catch (s) {
        l.e(s);
      } finally {
        l.f();
      }
    }
  } catch (s) {
    n.e(s);
  } finally {
    n.f();
  }
});
var ai = {
  entries: function() {
    return Ke;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = ni(Ke), a;
    try {
      for (n.s(); !(a = n.n()).done; ) {
        var o = ur(a.value, 2), l = o[0], u = o[1];
        t.call(r, u, l, Ke);
      }
    } catch (i) {
      n.e(i);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = Ke.find(function(n) {
      return n[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!ai.get(t);
  },
  keys: function() {
    return Ke.map(function(t) {
      var r = ur(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return Ke.map(function(t) {
      var r = ur(t, 2), n = r[1];
      return n;
    });
  }
}, _P = (0, EP.default)(ai, ai.entries());
Ht.default = _P;
var tl = {}, ns = Object.prototype.toString, Nd = function(t) {
  var r = ns.call(t), n = r === "[object Arguments]";
  return n || (n = r !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && ns.call(t.callee) === "[object Function]"), n;
}, gl, as;
function SP() {
  if (as) return gl;
  as = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = Nd, a = Object.prototype.propertyIsEnumerable, o = !a.call({ toString: null }, "toString"), l = a.call(function() {
    }, "prototype"), u = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], i = function(v) {
      var w = v.constructor;
      return w && w.prototype === v;
    }, s = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, p = function() {
      if (typeof window > "u")
        return !1;
      for (var v in window)
        try {
          if (!s["$" + v] && t.call(window, v) && window[v] !== null && typeof window[v] == "object")
            try {
              i(window[v]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), m = function(v) {
      if (typeof window > "u" || !p)
        return i(v);
      try {
        return i(v);
      } catch {
        return !1;
      }
    };
    e = function(w) {
      var A = w !== null && typeof w == "object", T = r.call(w) === "[object Function]", $ = n(w), f = A && r.call(w) === "[object String]", C = [];
      if (!A && !T && !$)
        throw new TypeError("Object.keys called on a non-object");
      var x = l && T;
      if (f && w.length > 0 && !t.call(w, 0))
        for (var O = 0; O < w.length; ++O)
          C.push(String(O));
      if ($ && w.length > 0)
        for (var M = 0; M < w.length; ++M)
          C.push(String(M));
      else
        for (var y in w)
          !(x && y === "prototype") && t.call(w, y) && C.push(String(y));
      if (o)
        for (var P = m(w), S = 0; S < u.length; ++S)
          !(P && u[S] === "constructor") && t.call(w, u[S]) && C.push(u[S]);
      return C;
    };
  }
  return gl = e, gl;
}
var TP = Array.prototype.slice, OP = Nd, os = Object.keys, Ur = os ? function(t) {
  return os(t);
} : SP(), ls = Object.keys;
Ur.shim = function() {
  if (Object.keys) {
    var t = function() {
      var r = Object.keys(arguments);
      return r && r.length === arguments.length;
    }(1, 2);
    t || (Object.keys = function(n) {
      return OP(n) ? ls(TP.call(n)) : ls(n);
    });
  } else
    Object.keys = Ur;
  return Object.keys || Ur;
};
var Gi = Ur, qP = Error, xP = EvalError, AP = RangeError, $P = ReferenceError, Bd = SyntaxError, st = TypeError, MP = URIError, rl = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var a = 42;
  t[r] = a;
  for (r in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var o = Object.getOwnPropertySymbols(t);
  if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var l = Object.getOwnPropertyDescriptor(t, r);
    if (l.value !== a || l.enumerable !== !0)
      return !1;
  }
  return !0;
}, is = typeof Symbol < "u" && Symbol, IP = rl, Yi = function() {
  return typeof is != "function" || typeof Symbol != "function" || typeof is("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : IP();
}, El = {
  __proto__: null,
  foo: {}
}, NP = Object, BP = function() {
  return { __proto__: El }.foo === El.foo && !(El instanceof NP);
}, DP = "Function.prototype.bind called on incompatible ", kP = Object.prototype.toString, LP = Math.max, jP = "[object Function]", us = function(t, r) {
  for (var n = [], a = 0; a < t.length; a += 1)
    n[a] = t[a];
  for (var o = 0; o < r.length; o += 1)
    n[o + t.length] = r[o];
  return n;
}, FP = function(t, r) {
  for (var n = [], a = r, o = 0; a < t.length; a += 1, o += 1)
    n[o] = t[a];
  return n;
}, UP = function(e, t) {
  for (var r = "", n = 0; n < e.length; n += 1)
    r += e[n], n + 1 < e.length && (r += t);
  return r;
}, HP = function(t) {
  var r = this;
  if (typeof r != "function" || kP.apply(r) !== jP)
    throw new TypeError(DP + r);
  for (var n = FP(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var p = r.apply(
        this,
        us(n, arguments)
      );
      return Object(p) === p ? p : this;
    }
    return r.apply(
      t,
      us(n, arguments)
    );
  }, l = LP(0, r.length - n.length), u = [], i = 0; i < l; i++)
    u[i] = "$" + i;
  if (a = Function("binder", "return function (" + UP(u, ",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
    var s = function() {
    };
    s.prototype = r.prototype, a.prototype = new s(), s.prototype = null;
  }
  return a;
}, WP = HP, Ki = Function.prototype.bind || WP, zP = Function.prototype.call, VP = Object.prototype.hasOwnProperty, GP = Ki, Dd = GP.call(zP, VP), j, YP = qP, KP = xP, XP = AP, JP = $P, kt = Bd, Bt = st, QP = MP, kd = Function, Rl = function(e) {
  try {
    return kd('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, bt = Object.getOwnPropertyDescriptor;
if (bt)
  try {
    bt({}, "");
  } catch {
    bt = null;
  }
var wl = function() {
  throw new Bt();
}, ZP = bt ? function() {
  try {
    return arguments.callee, wl;
  } catch {
    try {
      return bt(arguments, "callee").get;
    } catch {
      return wl;
    }
  }
}() : wl, $t = Yi(), e_ = BP(), ie = Object.getPrototypeOf || (e_ ? function(e) {
  return e.__proto__;
} : null), It = {}, t_ = typeof Uint8Array > "u" || !ie ? j : ie(Uint8Array), ht = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? j : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? j : ArrayBuffer,
  "%ArrayIteratorPrototype%": $t && ie ? ie([][Symbol.iterator]()) : j,
  "%AsyncFromSyncIteratorPrototype%": j,
  "%AsyncFunction%": It,
  "%AsyncGenerator%": It,
  "%AsyncGeneratorFunction%": It,
  "%AsyncIteratorPrototype%": It,
  "%Atomics%": typeof Atomics > "u" ? j : Atomics,
  "%BigInt%": typeof BigInt > "u" ? j : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? j : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? j : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? j : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": YP,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": KP,
  "%Float32Array%": typeof Float32Array > "u" ? j : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? j : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? j : FinalizationRegistry,
  "%Function%": kd,
  "%GeneratorFunction%": It,
  "%Int8Array%": typeof Int8Array > "u" ? j : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? j : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? j : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": $t && ie ? ie(ie([][Symbol.iterator]())) : j,
  "%JSON%": typeof JSON == "object" ? JSON : j,
  "%Map%": typeof Map > "u" ? j : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !$t || !ie ? j : ie((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? j : Promise,
  "%Proxy%": typeof Proxy > "u" ? j : Proxy,
  "%RangeError%": XP,
  "%ReferenceError%": JP,
  "%Reflect%": typeof Reflect > "u" ? j : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? j : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !$t || !ie ? j : ie((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? j : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": $t && ie ? ie(""[Symbol.iterator]()) : j,
  "%Symbol%": $t ? Symbol : j,
  "%SyntaxError%": kt,
  "%ThrowTypeError%": ZP,
  "%TypedArray%": t_,
  "%TypeError%": Bt,
  "%Uint8Array%": typeof Uint8Array > "u" ? j : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? j : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? j : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? j : Uint32Array,
  "%URIError%": QP,
  "%WeakMap%": typeof WeakMap > "u" ? j : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? j : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? j : WeakSet
};
if (ie)
  try {
    null.error;
  } catch (e) {
    var r_ = ie(ie(e));
    ht["%Error.prototype%"] = r_;
  }
var n_ = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Rl("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Rl("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Rl("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var a = e("%AsyncGenerator%");
    a && ie && (r = ie(a.prototype));
  }
  return ht[t] = r, r;
}, ss = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Rr = Ki, tn = Dd, a_ = Rr.call(Function.call, Array.prototype.concat), o_ = Rr.call(Function.apply, Array.prototype.splice), cs = Rr.call(Function.call, String.prototype.replace), rn = Rr.call(Function.call, String.prototype.slice), l_ = Rr.call(Function.call, RegExp.prototype.exec), i_ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, u_ = /\\(\\)?/g, s_ = function(t) {
  var r = rn(t, 0, 1), n = rn(t, -1);
  if (r === "%" && n !== "%")
    throw new kt("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new kt("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return cs(t, i_, function(o, l, u, i) {
    a[a.length] = u ? cs(i, u_, "$1") : l || o;
  }), a;
}, c_ = function(t, r) {
  var n = t, a;
  if (tn(ss, n) && (a = ss[n], n = "%" + a[0] + "%"), tn(ht, n)) {
    var o = ht[n];
    if (o === It && (o = n_(n)), typeof o > "u" && !r)
      throw new Bt("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: n,
      value: o
    };
  }
  throw new kt("intrinsic " + t + " does not exist!");
}, Ae = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new Bt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Bt('"allowMissing" argument must be a boolean');
  if (l_(/^%?[^%]*%?$/, t) === null)
    throw new kt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = s_(t), a = n.length > 0 ? n[0] : "", o = c_("%" + a + "%", r), l = o.name, u = o.value, i = !1, s = o.alias;
  s && (a = s[0], o_(n, a_([0, 1], s)));
  for (var p = 1, m = !0; p < n.length; p += 1) {
    var v = n[p], w = rn(v, 0, 1), A = rn(v, -1);
    if ((w === '"' || w === "'" || w === "`" || A === '"' || A === "'" || A === "`") && w !== A)
      throw new kt("property names with quotes must have matching quotes");
    if ((v === "constructor" || !m) && (i = !0), a += "." + v, l = "%" + a + "%", tn(ht, l))
      u = ht[l];
    else if (u != null) {
      if (!(v in u)) {
        if (!r)
          throw new Bt("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (bt && p + 1 >= n.length) {
        var T = bt(u, v);
        m = !!T, m && "get" in T && !("originalValue" in T.get) ? u = T.get : u = u[v];
      } else
        m = tn(u, v), u = u[v];
      m && !i && (ht[l] = u);
    }
  }
  return u;
}, d_ = Ae, Hr = d_("%Object.defineProperty%", !0) || !1;
if (Hr)
  try {
    Hr({}, "a", { value: 1 });
  } catch {
    Hr = !1;
  }
var Xi = Hr, f_ = Ae, Wr = f_("%Object.getOwnPropertyDescriptor%", !0);
if (Wr)
  try {
    Wr([], "length");
  } catch {
    Wr = null;
  }
var Ji = Wr, ds = Xi, p_ = Bd, Mt = st, fs = Ji, Qi = function(t, r, n) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new Mt("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Mt("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Mt("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Mt("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Mt("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Mt("`loose`, if provided, must be a boolean");
  var a = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, l = arguments.length > 5 ? arguments[5] : null, u = arguments.length > 6 ? arguments[6] : !1, i = !!fs && fs(t, r);
  if (ds)
    ds(t, r, {
      configurable: l === null && i ? i.configurable : !l,
      enumerable: a === null && i ? i.enumerable : !a,
      value: n,
      writable: o === null && i ? i.writable : !o
    });
  else if (u || !a && !o && !l)
    t[r] = n;
  else
    throw new p_("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, oi = Xi, Ld = function() {
  return !!oi;
};
Ld.hasArrayLengthDefineBug = function() {
  if (!oi)
    return null;
  try {
    return oi([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Zi = Ld, m_ = Gi, v_ = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", y_ = Object.prototype.toString, b_ = Array.prototype.concat, ps = Qi, h_ = function(e) {
  return typeof e == "function" && y_.call(e) === "[object Function]";
}, jd = Zi(), g_ = function(e, t, r, n) {
  if (t in e) {
    if (n === !0) {
      if (e[t] === r)
        return;
    } else if (!h_(n) || !n())
      return;
  }
  jd ? ps(e, t, r, !0) : ps(e, t, r);
}, Fd = function(e, t) {
  var r = arguments.length > 2 ? arguments[2] : {}, n = m_(t);
  v_ && (n = b_.call(n, Object.getOwnPropertySymbols(t)));
  for (var a = 0; a < n.length; a += 1)
    g_(e, n[a], t[n[a]], r[n[a]]);
};
Fd.supportsDescriptors = !!jd;
var Pt = Fd, Ud = { exports: {} }, E_ = Ae, ms = Qi, R_ = Zi(), vs = Ji, ys = st, w_ = E_("%Math.floor%"), C_ = function(t, r) {
  if (typeof t != "function")
    throw new ys("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || w_(r) !== r)
    throw new ys("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], a = !0, o = !0;
  if ("length" in t && vs) {
    var l = vs(t, "length");
    l && !l.configurable && (a = !1), l && !l.writable && (o = !1);
  }
  return (a || o || !n) && (R_ ? ms(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r,
    !0,
    !0
  ) : ms(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r
  )), t;
};
(function(e) {
  var t = Ki, r = Ae, n = C_, a = st, o = r("%Function.prototype.apply%"), l = r("%Function.prototype.call%"), u = r("%Reflect.apply%", !0) || t.call(l, o), i = Xi, s = r("%Math.max%");
  e.exports = function(v) {
    if (typeof v != "function")
      throw new a("a function is required");
    var w = u(t, l, arguments);
    return n(
      w,
      1 + s(0, v.length - (arguments.length - 1)),
      !0
    );
  };
  var p = function() {
    return u(t, o, arguments);
  };
  i ? i(e.exports, "apply", { value: p }) : e.exports.apply = p;
})(Ud);
var Wt = Ud.exports, Hd = Ae, Wd = Wt, P_ = Wd(Hd("String.prototype.indexOf")), Ee = function(t, r) {
  var n = Hd(t, !!r);
  return typeof n == "function" && P_(t, ".prototype.") > -1 ? Wd(n) : n;
}, __ = Gi, zd = rl(), Vd = Ee, bs = Object, S_ = Vd("Array.prototype.push"), hs = Vd("Object.prototype.propertyIsEnumerable"), T_ = zd ? Object.getOwnPropertySymbols : null, Gd = function(t, r) {
  if (t == null)
    throw new TypeError("target must be an object");
  var n = bs(t);
  if (arguments.length === 1)
    return n;
  for (var a = 1; a < arguments.length; ++a) {
    var o = bs(arguments[a]), l = __(o), u = zd && (Object.getOwnPropertySymbols || T_);
    if (u)
      for (var i = u(o), s = 0; s < i.length; ++s) {
        var p = i[s];
        hs(o, p) && S_(l, p);
      }
    for (var m = 0; m < l.length; ++m) {
      var v = l[m];
      if (hs(o, v)) {
        var w = o[v];
        n[v] = w;
      }
    }
  }
  return n;
}, Cl = Gd, O_ = function() {
  if (!Object.assign)
    return !1;
  for (var e = "abcdefghijklmnopqrst", t = e.split(""), r = {}, n = 0; n < t.length; ++n)
    r[t[n]] = t[n];
  var a = Object.assign({}, r), o = "";
  for (var l in a)
    o += l;
  return e !== o;
}, q_ = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var e = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(e, "xy");
  } catch {
    return e[1] === "y";
  }
  return !1;
}, Yd = function() {
  return !Object.assign || O_() || q_() ? Cl : Object.assign;
}, x_ = Pt, A_ = Yd, $_ = function() {
  var t = A_();
  return x_(
    Object,
    { assign: t },
    { assign: function() {
      return Object.assign !== t;
    } }
  ), t;
}, M_ = Pt, I_ = Wt, N_ = Gd, Kd = Yd, B_ = $_, D_ = I_.apply(Kd()), Xd = function(t, r) {
  return D_(Object, arguments);
};
M_(Xd, {
  getPolyfill: Kd,
  implementation: N_,
  shim: B_
});
var k_ = Xd, yr = function() {
  return typeof (function() {
  }).name == "string";
}, sr = Object.getOwnPropertyDescriptor;
if (sr)
  try {
    sr([], "length");
  } catch {
    sr = null;
  }
yr.functionsHaveConfigurableNames = function() {
  if (!yr() || !sr)
    return !1;
  var t = sr(function() {
  }, "name");
  return !!t && !!t.configurable;
};
var L_ = Function.prototype.bind;
yr.boundFunctionsHaveNames = function() {
  return yr() && typeof L_ == "function" && (function() {
  }).bind().name !== "";
};
var j_ = yr, gs = Qi, F_ = Zi(), U_ = j_.functionsHaveConfigurableNames(), H_ = st, W_ = function(t, r) {
  if (typeof t != "function")
    throw new H_("`fn` is not a function");
  var n = arguments.length > 2 && !!arguments[2];
  return (!n || U_) && (F_ ? gs(
    /** @type {Parameters<define>[0]} */
    t,
    "name",
    r,
    !0,
    !0
  ) : gs(
    /** @type {Parameters<define>[0]} */
    t,
    "name",
    r
  )), t;
}, z_ = W_, V_ = st, G_ = Object, Jd = z_(function() {
  if (this == null || this !== G_(this))
    throw new V_("RegExp.prototype.flags getter called on non-object");
  var t = "";
  return this.hasIndices && (t += "d"), this.global && (t += "g"), this.ignoreCase && (t += "i"), this.multiline && (t += "m"), this.dotAll && (t += "s"), this.unicode && (t += "u"), this.unicodeSets && (t += "v"), this.sticky && (t += "y"), t;
}, "get flags", !0), Y_ = Jd, K_ = Pt.supportsDescriptors, X_ = Object.getOwnPropertyDescriptor, Qd = function() {
  if (K_ && /a/mig.flags === "gim") {
    var t = X_(RegExp.prototype, "flags");
    if (t && typeof t.get == "function" && typeof RegExp.prototype.dotAll == "boolean" && typeof RegExp.prototype.hasIndices == "boolean") {
      var r = "", n = {};
      if (Object.defineProperty(n, "hasIndices", {
        get: function() {
          r += "d";
        }
      }), Object.defineProperty(n, "sticky", {
        get: function() {
          r += "y";
        }
      }), r === "dy")
        return t.get;
    }
  }
  return Y_;
}, J_ = Pt.supportsDescriptors, Q_ = Qd, Z_ = Object.getOwnPropertyDescriptor, eS = Object.defineProperty, tS = TypeError, Es = Object.getPrototypeOf, rS = /a/, nS = function() {
  if (!J_ || !Es)
    throw new tS("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var t = Q_(), r = Es(rS), n = Z_(r, "flags");
  return (!n || n.get !== t) && eS(r, "flags", {
    configurable: !0,
    enumerable: !1,
    get: t
  }), t;
}, aS = Pt, oS = Wt, lS = Jd, Zd = Qd, iS = nS, ef = oS(Zd());
aS(ef, {
  getPolyfill: Zd,
  implementation: lS,
  shim: iS
});
var uS = ef, zr = { exports: {} }, sS = rl, _t = function() {
  return sS() && !!Symbol.toStringTag;
}, cS = _t(), dS = Ee, li = dS("Object.prototype.toString"), nl = function(t) {
  return cS && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : li(t) === "[object Arguments]";
}, tf = function(t) {
  return nl(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && li(t) !== "[object Array]" && li(t.callee) === "[object Function]";
}, fS = function() {
  return nl(arguments);
}();
nl.isLegacyArguments = tf;
var rf = fS ? nl : tf;
const pS = {}, mS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pS
}, Symbol.toStringTag, { value: "Module" })), vS = /* @__PURE__ */ Fp(mS);
var eu = typeof Map == "function" && Map.prototype, Pl = Object.getOwnPropertyDescriptor && eu ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, nn = eu && Pl && typeof Pl.get == "function" ? Pl.get : null, Rs = eu && Map.prototype.forEach, tu = typeof Set == "function" && Set.prototype, _l = Object.getOwnPropertyDescriptor && tu ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, an = tu && _l && typeof _l.get == "function" ? _l.get : null, ws = tu && Set.prototype.forEach, yS = typeof WeakMap == "function" && WeakMap.prototype, cr = yS ? WeakMap.prototype.has : null, bS = typeof WeakSet == "function" && WeakSet.prototype, dr = bS ? WeakSet.prototype.has : null, hS = typeof WeakRef == "function" && WeakRef.prototype, Cs = hS ? WeakRef.prototype.deref : null, gS = Boolean.prototype.valueOf, ES = Object.prototype.toString, RS = Function.prototype.toString, wS = String.prototype.match, ru = String.prototype.slice, Ze = String.prototype.replace, CS = String.prototype.toUpperCase, Ps = String.prototype.toLowerCase, nf = RegExp.prototype.test, _s = Array.prototype.concat, xe = Array.prototype.join, PS = Array.prototype.slice, Ss = Math.floor, ii = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Sl = Object.getOwnPropertySymbols, ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Lt = typeof Symbol == "function" && typeof Symbol.iterator == "object", de = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Lt || !0) ? Symbol.toStringTag : null, af = Object.prototype.propertyIsEnumerable, Ts = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Os(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || nf.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -Ss(-e) : Ss(e);
    if (n !== e) {
      var a = String(n), o = ru.call(t, a.length + 1);
      return Ze.call(a, r, "$&_") + "." + Ze.call(Ze.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Ze.call(t, r, "$&_");
}
var si = vS, qs = si.custom, xs = lf(qs) ? qs : null, _S = function e(t, r, n, a) {
  var o = r || {};
  if (Xe(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Xe(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var l = Xe(o, "customInspect") ? o.customInspect : !0;
  if (typeof l != "boolean" && l !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Xe(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Xe(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var u = o.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return sf(t, o);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var i = String(t);
    return u ? Os(t, i) : i;
  }
  if (typeof t == "bigint") {
    var s = String(t) + "n";
    return u ? Os(t, s) : s;
  }
  var p = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof n > "u" && (n = 0), n >= p && p > 0 && typeof t == "object")
    return ci(t) ? "[Array]" : "[Object]";
  var m = HS(o, n);
  if (typeof a > "u")
    a = [];
  else if (uf(a, t) >= 0)
    return "[Circular]";
  function v(q, N, le) {
    if (N && (a = PS.call(a), a.push(N)), le) {
      var ee = {
        depth: o.depth
      };
      return Xe(o, "quoteStyle") && (ee.quoteStyle = o.quoteStyle), e(q, ee, n + 1, a);
    }
    return e(q, o, n + 1, a);
  }
  if (typeof t == "function" && !As(t)) {
    var w = IS(t), A = Dr(t, v);
    return "[Function" + (w ? ": " + w : " (anonymous)") + "]" + (A.length > 0 ? " { " + xe.call(A, ", ") + " }" : "");
  }
  if (lf(t)) {
    var T = Lt ? Ze.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : ui.call(t);
    return typeof t == "object" && !Lt ? or(T) : T;
  }
  if (jS(t)) {
    for (var $ = "<" + Ps.call(String(t.nodeName)), f = t.attributes || [], C = 0; C < f.length; C++)
      $ += " " + f[C].name + "=" + of(SS(f[C].value), "double", o);
    return $ += ">", t.childNodes && t.childNodes.length && ($ += "..."), $ += "</" + Ps.call(String(t.nodeName)) + ">", $;
  }
  if (ci(t)) {
    if (t.length === 0)
      return "[]";
    var x = Dr(t, v);
    return m && !US(x) ? "[" + di(x, m) + "]" : "[ " + xe.call(x, ", ") + " ]";
  }
  if (OS(t)) {
    var O = Dr(t, v);
    return !("cause" in Error.prototype) && "cause" in t && !af.call(t, "cause") ? "{ [" + String(t) + "] " + xe.call(_s.call("[cause]: " + v(t.cause), O), ", ") + " }" : O.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + xe.call(O, ", ") + " }";
  }
  if (typeof t == "object" && l) {
    if (xs && typeof t[xs] == "function" && si)
      return si(t, { depth: p - n });
    if (l !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (NS(t)) {
    var M = [];
    return Rs && Rs.call(t, function(q, N) {
      M.push(v(N, t, !0) + " => " + v(q, t));
    }), $s("Map", nn.call(t), M, m);
  }
  if (kS(t)) {
    var y = [];
    return ws && ws.call(t, function(q) {
      y.push(v(q, t));
    }), $s("Set", an.call(t), y, m);
  }
  if (BS(t))
    return Tl("WeakMap");
  if (LS(t))
    return Tl("WeakSet");
  if (DS(t))
    return Tl("WeakRef");
  if (xS(t))
    return or(v(Number(t)));
  if ($S(t))
    return or(v(ii.call(t)));
  if (AS(t))
    return or(gS.call(t));
  if (qS(t))
    return or(v(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && t === globalThis || typeof Jr < "u" && t === Jr)
    return "{ [object globalThis] }";
  if (!TS(t) && !As(t)) {
    var P = Dr(t, v), S = Ts ? Ts(t) === Object.prototype : t instanceof Object || t.constructor === Object, U = t instanceof Object ? "" : "null prototype", X = !S && de && Object(t) === t && de in t ? ru.call(ct(t), 8, -1) : U ? "Object" : "", Z = S || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", J = Z + (X || U ? "[" + xe.call(_s.call([], X || [], U || []), ": ") + "] " : "");
    return P.length === 0 ? J + "{}" : m ? J + "{" + di(P, m) + "}" : J + "{ " + xe.call(P, ", ") + " }";
  }
  return String(t);
};
function of(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function SS(e) {
  return Ze.call(String(e), /"/g, "&quot;");
}
function ci(e) {
  return ct(e) === "[object Array]" && (!de || !(typeof e == "object" && de in e));
}
function TS(e) {
  return ct(e) === "[object Date]" && (!de || !(typeof e == "object" && de in e));
}
function As(e) {
  return ct(e) === "[object RegExp]" && (!de || !(typeof e == "object" && de in e));
}
function OS(e) {
  return ct(e) === "[object Error]" && (!de || !(typeof e == "object" && de in e));
}
function qS(e) {
  return ct(e) === "[object String]" && (!de || !(typeof e == "object" && de in e));
}
function xS(e) {
  return ct(e) === "[object Number]" && (!de || !(typeof e == "object" && de in e));
}
function AS(e) {
  return ct(e) === "[object Boolean]" && (!de || !(typeof e == "object" && de in e));
}
function lf(e) {
  if (Lt)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !ui)
    return !1;
  try {
    return ui.call(e), !0;
  } catch {
  }
  return !1;
}
function $S(e) {
  if (!e || typeof e != "object" || !ii)
    return !1;
  try {
    return ii.call(e), !0;
  } catch {
  }
  return !1;
}
var MS = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function Xe(e, t) {
  return MS.call(e, t);
}
function ct(e) {
  return ES.call(e);
}
function IS(e) {
  if (e.name)
    return e.name;
  var t = wS.call(RS.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function uf(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function NS(e) {
  if (!nn || !e || typeof e != "object")
    return !1;
  try {
    nn.call(e);
    try {
      an.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function BS(e) {
  if (!cr || !e || typeof e != "object")
    return !1;
  try {
    cr.call(e, cr);
    try {
      dr.call(e, dr);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function DS(e) {
  if (!Cs || !e || typeof e != "object")
    return !1;
  try {
    return Cs.call(e), !0;
  } catch {
  }
  return !1;
}
function kS(e) {
  if (!an || !e || typeof e != "object")
    return !1;
  try {
    an.call(e);
    try {
      nn.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function LS(e) {
  if (!dr || !e || typeof e != "object")
    return !1;
  try {
    dr.call(e, dr);
    try {
      cr.call(e, cr);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function jS(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function sf(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return sf(ru.call(e, 0, t.maxStringLength), t) + n;
  }
  var a = Ze.call(Ze.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, FS);
  return of(a, "single", t);
}
function FS(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + CS.call(t.toString(16));
}
function or(e) {
  return "Object(" + e + ")";
}
function Tl(e) {
  return e + " { ? }";
}
function $s(e, t, r, n) {
  var a = n ? di(r, n) : xe.call(r, ", ");
  return e + " (" + t + ") {" + a + "}";
}
function US(e) {
  for (var t = 0; t < e.length; t++)
    if (uf(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function HS(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = xe.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: xe.call(Array(t + 1), r)
  };
}
function di(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + xe.call(e, "," + r) + `
` + t.prev;
}
function Dr(e, t) {
  var r = ci(e), n = [];
  if (r) {
    n.length = e.length;
    for (var a = 0; a < e.length; a++)
      n[a] = Xe(e, a) ? t(e[a], e) : "";
  }
  var o = typeof Sl == "function" ? Sl(e) : [], l;
  if (Lt) {
    l = {};
    for (var u = 0; u < o.length; u++)
      l["$" + o[u]] = o[u];
  }
  for (var i in e)
    Xe(e, i) && (r && String(Number(i)) === i && i < e.length || Lt && l["$" + i] instanceof Symbol || (nf.call(/[^\w$]/, i) ? n.push(t(i, e) + ": " + t(e[i], e)) : n.push(i + ": " + t(e[i], e))));
  if (typeof Sl == "function")
    for (var s = 0; s < o.length; s++)
      af.call(e, o[s]) && n.push("[" + t(o[s]) + "]: " + t(e[o[s]], e));
  return n;
}
var cf = Ae, zt = Ee, WS = _S, zS = st, kr = cf("%WeakMap%", !0), Lr = cf("%Map%", !0), VS = zt("WeakMap.prototype.get", !0), GS = zt("WeakMap.prototype.set", !0), YS = zt("WeakMap.prototype.has", !0), KS = zt("Map.prototype.get", !0), XS = zt("Map.prototype.set", !0), JS = zt("Map.prototype.has", !0), nu = function(e, t) {
  for (var r = e, n; (n = r.next) !== null; r = n)
    if (n.key === t)
      return r.next = n.next, n.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = n, n;
}, QS = function(e, t) {
  var r = nu(e, t);
  return r && r.value;
}, ZS = function(e, t, r) {
  var n = nu(e, t);
  n ? n.value = r : e.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: t,
    next: e.next,
    value: r
  };
}, eT = function(e, t) {
  return !!nu(e, t);
}, df = function() {
  var t, r, n, a = {
    assert: function(o) {
      if (!a.has(o))
        throw new zS("Side channel does not contain " + WS(o));
    },
    get: function(o) {
      if (kr && o && (typeof o == "object" || typeof o == "function")) {
        if (t)
          return VS(t, o);
      } else if (Lr) {
        if (r)
          return KS(r, o);
      } else if (n)
        return QS(n, o);
    },
    has: function(o) {
      if (kr && o && (typeof o == "object" || typeof o == "function")) {
        if (t)
          return YS(t, o);
      } else if (Lr) {
        if (r)
          return JS(r, o);
      } else if (n)
        return eT(n, o);
      return !1;
    },
    set: function(o, l) {
      kr && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new kr()), GS(t, o, l)) : Lr ? (r || (r = new Lr()), XS(r, o, l)) : (n || (n = { key: {}, next: null }), ZS(n, o, l));
    }
  };
  return a;
}, tT = Dd, lr = df(), Be = st, au = {
  assert: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new Be("`O` is not an object");
    if (typeof t != "string")
      throw new Be("`slot` must be a string");
    if (lr.assert(e), !au.has(e, t))
      throw new Be("`" + t + "` is not present on `O`");
  },
  get: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new Be("`O` is not an object");
    if (typeof t != "string")
      throw new Be("`slot` must be a string");
    var r = lr.get(e);
    return r && r["$" + t];
  },
  has: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new Be("`O` is not an object");
    if (typeof t != "string")
      throw new Be("`slot` must be a string");
    var r = lr.get(e);
    return !!r && tT(r, "$" + t);
  },
  set: function(e, t, r) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new Be("`O` is not an object");
    if (typeof t != "string")
      throw new Be("`slot` must be a string");
    var n = lr.get(e);
    n || (n = {}, lr.set(e, n)), n["$" + t] = r;
  }
};
Object.freeze && Object.freeze(au);
var rT = au, ir = rT, nT = SyntaxError, Ms = typeof StopIteration == "object" ? StopIteration : null, aT = function(t) {
  if (!Ms)
    throw new nT("this environment lacks StopIteration");
  ir.set(t, "[[Done]]", !1);
  var r = {
    next: function() {
      var a = ir.get(this, "[[Iterator]]"), o = ir.get(a, "[[Done]]");
      try {
        return {
          done: o,
          value: o ? void 0 : a.next()
        };
      } catch (l) {
        if (ir.set(a, "[[Done]]", !0), l !== Ms)
          throw l;
        return {
          done: !0,
          value: void 0
        };
      }
    }
  };
  return ir.set(r, "[[Iterator]]", t), r;
}, Ol, Is;
function oT() {
  if (Is) return Ol;
  Is = 1;
  var e = {}.toString;
  return Ol = Array.isArray || function(t) {
    return e.call(t) == "[object Array]";
  }, Ol;
}
var lT = String.prototype.valueOf, iT = function(t) {
  try {
    return lT.call(t), !0;
  } catch {
    return !1;
  }
}, uT = Object.prototype.toString, sT = "[object String]", cT = _t(), ff = function(t) {
  return typeof t == "string" ? !0 : typeof t != "object" ? !1 : cT ? iT(t) : uT.call(t) === sT;
}, ou = typeof Map == "function" && Map.prototype ? Map : null, dT = typeof Set == "function" && Set.prototype ? Set : null, on;
ou || (on = function(t) {
  return !1;
});
var pf = ou ? Map.prototype.has : null, Ns = dT ? Set.prototype.has : null;
!on && !pf && (on = function(t) {
  return !1;
});
var mf = on || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (pf.call(t), Ns)
      try {
        Ns.call(t);
      } catch {
        return !0;
      }
    return t instanceof ou;
  } catch {
  }
  return !1;
}, fT = typeof Map == "function" && Map.prototype ? Map : null, lu = typeof Set == "function" && Set.prototype ? Set : null, ln;
lu || (ln = function(t) {
  return !1;
});
var Bs = fT ? Map.prototype.has : null, vf = lu ? Set.prototype.has : null;
!ln && !vf && (ln = function(t) {
  return !1;
});
var yf = ln || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (vf.call(t), Bs)
      try {
        Bs.call(t);
      } catch {
        return !0;
      }
    return t instanceof lu;
  } catch {
  }
  return !1;
}, Ds = rf, ks = aT;
if (Yi() || rl()) {
  var ql = Symbol.iterator;
  zr.exports = function(t) {
    if (t != null && typeof t[ql] < "u")
      return t[ql]();
    if (Ds(t))
      return Array.prototype[ql].call(t);
  };
} else {
  var pT = oT(), mT = ff, Ls = Ae, vT = Ls("%Map%", !0), yT = Ls("%Set%", !0), we = Ee, js = we("Array.prototype.push"), Fs = we("String.prototype.charCodeAt"), bT = we("String.prototype.slice"), hT = function(t, r) {
    var n = t.length;
    if (r + 1 >= n)
      return r + 1;
    var a = Fs(t, r);
    if (a < 55296 || a > 56319)
      return r + 1;
    var o = Fs(t, r + 1);
    return o < 56320 || o > 57343 ? r + 1 : r + 2;
  }, xl = function(t) {
    var r = 0;
    return {
      next: function() {
        var a = r >= t.length, o;
        return a || (o = t[r], r += 1), {
          done: a,
          value: o
        };
      }
    };
  }, Us = function(t, r) {
    if (pT(t) || Ds(t))
      return xl(t);
    if (mT(t)) {
      var n = 0;
      return {
        next: function() {
          var o = hT(t, n), l = bT(t, n, o);
          return n = o, {
            done: o > t.length,
            value: l
          };
        }
      };
    }
    if (r && typeof t["_es6-shim iterator_"] < "u")
      return t["_es6-shim iterator_"]();
  };
  if (!vT && !yT)
    zr.exports = function(t) {
      if (t != null)
        return Us(t, !0);
    };
  else {
    var gT = mf, ET = yf, Hs = we("Map.prototype.forEach", !0), Ws = we("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var zs = we("Map.prototype.iterator", !0), Vs = we("Set.prototype.iterator", !0);
    var Gs = we("Map.prototype.@@iterator", !0) || we("Map.prototype._es6-shim iterator_", !0), Ys = we("Set.prototype.@@iterator", !0) || we("Set.prototype._es6-shim iterator_", !0), RT = function(t) {
      if (gT(t)) {
        if (zs)
          return ks(zs(t));
        if (Gs)
          return Gs(t);
        if (Hs) {
          var r = [];
          return Hs(t, function(a, o) {
            js(r, [o, a]);
          }), xl(r);
        }
      }
      if (ET(t)) {
        if (Vs)
          return ks(Vs(t));
        if (Ys)
          return Ys(t);
        if (Ws) {
          var n = [];
          return Ws(t, function(a) {
            js(n, a);
          }), xl(n);
        }
      }
    };
    zr.exports = function(t) {
      return RT(t) || Us(t);
    };
  }
}
var wT = zr.exports, Ks = function(e) {
  return e !== e;
}, bf = function(t, r) {
  return t === 0 && r === 0 ? 1 / t === 1 / r : !!(t === r || Ks(t) && Ks(r));
}, CT = bf, hf = function() {
  return typeof Object.is == "function" ? Object.is : CT;
}, PT = hf, _T = Pt, ST = function() {
  var t = PT();
  return _T(Object, { is: t }, {
    is: function() {
      return Object.is !== t;
    }
  }), t;
}, TT = Pt, OT = Wt, qT = bf, gf = hf, xT = ST, Ef = OT(gf(), Object);
TT(Ef, {
  getPolyfill: gf,
  implementation: qT,
  shim: xT
});
var AT = Ef, $T = {}.toString, MT = Array.isArray || function(e) {
  return $T.call(e) == "[object Array]";
}, IT = Wt, Rf = Ee, NT = Ae, fi = NT("%ArrayBuffer%", !0), Vr = Rf("ArrayBuffer.prototype.byteLength", !0), BT = Rf("Object.prototype.toString"), Xs = !!fi && !Vr && new fi(0).slice, Js = !!Xs && IT(Xs), wf = Vr || Js ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return Vr ? Vr(t) : Js(t, 0), !0;
  } catch {
    return !1;
  }
} : fi ? function(t) {
  return BT(t) === "[object ArrayBuffer]";
} : function(t) {
  return !1;
}, DT = Date.prototype.getDay, kT = function(t) {
  try {
    return DT.call(t), !0;
  } catch {
    return !1;
  }
}, LT = Object.prototype.toString, jT = "[object Date]", FT = _t(), UT = function(t) {
  return typeof t != "object" || t === null ? !1 : FT ? kT(t) : LT.call(t) === jT;
}, pi = Ee, Cf = _t(), Pf, _f, mi, vi;
if (Cf) {
  Pf = pi("Object.prototype.hasOwnProperty"), _f = pi("RegExp.prototype.exec"), mi = {};
  var Al = function() {
    throw mi;
  };
  vi = {
    toString: Al,
    valueOf: Al
  }, typeof Symbol.toPrimitive == "symbol" && (vi[Symbol.toPrimitive] = Al);
}
var HT = pi("Object.prototype.toString"), WT = Object.getOwnPropertyDescriptor, zT = "[object RegExp]", VT = Cf ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  var r = WT(t, "lastIndex"), n = r && Pf(r, "value");
  if (!n)
    return !1;
  try {
    _f(t, vi);
  } catch (a) {
    return a === mi;
  }
} : function(t) {
  return !t || typeof t != "object" && typeof t != "function" ? !1 : HT(t) === zT;
}, GT = Ee, Qs = GT("SharedArrayBuffer.prototype.byteLength", !0), YT = Qs ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return Qs(t), !0;
  } catch {
    return !1;
  }
} : function(t) {
  return !1;
}, KT = Number.prototype.toString, XT = function(t) {
  try {
    return KT.call(t), !0;
  } catch {
    return !1;
  }
}, JT = Object.prototype.toString, QT = "[object Number]", ZT = _t(), eO = function(t) {
  return typeof t == "number" ? !0 : typeof t != "object" ? !1 : ZT ? XT(t) : JT.call(t) === QT;
}, Sf = Ee, tO = Sf("Boolean.prototype.toString"), rO = Sf("Object.prototype.toString"), nO = function(t) {
  try {
    return tO(t), !0;
  } catch {
    return !1;
  }
}, aO = "[object Boolean]", oO = _t(), lO = function(t) {
  return typeof t == "boolean" ? !0 : t === null || typeof t != "object" ? !1 : oO && Symbol.toStringTag in t ? nO(t) : rO(t) === aO;
}, yi = { exports: {} }, iO = Object.prototype.toString, uO = Yi();
if (uO) {
  var sO = Symbol.prototype.toString, cO = /^Symbol\(.*\)$/, dO = function(t) {
    return typeof t.valueOf() != "symbol" ? !1 : cO.test(sO.call(t));
  };
  yi.exports = function(t) {
    if (typeof t == "symbol")
      return !0;
    if (iO.call(t) !== "[object Symbol]")
      return !1;
    try {
      return dO(t);
    } catch {
      return !1;
    }
  };
} else
  yi.exports = function(t) {
    return !1;
  };
var fO = yi.exports, bi = { exports: {} }, Zs = typeof BigInt < "u" && BigInt, pO = function() {
  return typeof Zs == "function" && typeof BigInt == "function" && typeof Zs(42) == "bigint" && typeof BigInt(42) == "bigint";
}, mO = pO();
if (mO) {
  var vO = BigInt.prototype.valueOf, yO = function(t) {
    try {
      return vO.call(t), !0;
    } catch {
    }
    return !1;
  };
  bi.exports = function(t) {
    return t === null || typeof t > "u" || typeof t == "boolean" || typeof t == "string" || typeof t == "number" || typeof t == "symbol" || typeof t == "function" ? !1 : typeof t == "bigint" ? !0 : yO(t);
  };
} else
  bi.exports = function(t) {
    return !1;
  };
var bO = bi.exports, hO = ff, gO = eO, EO = lO, RO = fO, wO = bO, CO = function(t) {
  if (t == null || typeof t != "object" && typeof t != "function")
    return null;
  if (hO(t))
    return "String";
  if (gO(t))
    return "Number";
  if (EO(t))
    return "Boolean";
  if (RO(t))
    return "Symbol";
  if (wO(t))
    return "BigInt";
}, un = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, ec = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, sn;
un || (sn = function(t) {
  return !1;
});
var hi = un ? un.prototype.has : null, $l = ec ? ec.prototype.has : null;
!sn && !hi && (sn = function(t) {
  return !1;
});
var PO = sn || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (hi.call(t, hi), $l)
      try {
        $l.call(t, $l);
      } catch {
        return !0;
      }
    return t instanceof un;
  } catch {
  }
  return !1;
}, gi = { exports: {} }, _O = Ae, Tf = Ee, SO = _O("%WeakSet%", !0), Ml = Tf("WeakSet.prototype.has", !0);
if (Ml) {
  var Il = Tf("WeakMap.prototype.has", !0);
  gi.exports = function(t) {
    if (!t || typeof t != "object")
      return !1;
    try {
      if (Ml(t, Ml), Il)
        try {
          Il(t, Il);
        } catch {
          return !0;
        }
      return t instanceof SO;
    } catch {
    }
    return !1;
  };
} else
  gi.exports = function(t) {
    return !1;
  };
var TO = gi.exports, OO = mf, qO = yf, xO = PO, AO = TO, $O = function(t) {
  if (t && typeof t == "object") {
    if (OO(t))
      return "Map";
    if (qO(t))
      return "Set";
    if (xO(t))
      return "WeakMap";
    if (AO(t))
      return "WeakSet";
  }
  return !1;
}, Of = Function.prototype.toString, Nt = typeof Reflect == "object" && Reflect !== null && Reflect.apply, Ei, Gr;
if (typeof Nt == "function" && typeof Object.defineProperty == "function")
  try {
    Ei = Object.defineProperty({}, "length", {
      get: function() {
        throw Gr;
      }
    }), Gr = {}, Nt(function() {
      throw 42;
    }, null, Ei);
  } catch (e) {
    e !== Gr && (Nt = null);
  }
else
  Nt = null;
var MO = /^\s*class\b/, Ri = function(t) {
  try {
    var r = Of.call(t);
    return MO.test(r);
  } catch {
    return !1;
  }
}, Nl = function(t) {
  try {
    return Ri(t) ? !1 : (Of.call(t), !0);
  } catch {
    return !1;
  }
}, Yr = Object.prototype.toString, IO = "[object Object]", NO = "[object Function]", BO = "[object GeneratorFunction]", DO = "[object HTMLAllCollection]", kO = "[object HTML document.all class]", LO = "[object HTMLCollection]", jO = typeof Symbol == "function" && !!Symbol.toStringTag, FO = !(0 in [,]), wi = function() {
  return !1;
};
if (typeof document == "object") {
  var UO = document.all;
  Yr.call(UO) === Yr.call(document.all) && (wi = function(t) {
    if ((FO || !t) && (typeof t > "u" || typeof t == "object"))
      try {
        var r = Yr.call(t);
        return (r === DO || r === kO || r === LO || r === IO) && t("") == null;
      } catch {
      }
    return !1;
  });
}
var HO = Nt ? function(t) {
  if (wi(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  try {
    Nt(t, null, Ei);
  } catch (r) {
    if (r !== Gr)
      return !1;
  }
  return !Ri(t) && Nl(t);
} : function(t) {
  if (wi(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (jO)
    return Nl(t);
  if (Ri(t))
    return !1;
  var r = Yr.call(t);
  return r !== NO && r !== BO && !/^\[object HTML/.test(r) ? !1 : Nl(t);
}, WO = HO, zO = Object.prototype.toString, qf = Object.prototype.hasOwnProperty, VO = function(t, r, n) {
  for (var a = 0, o = t.length; a < o; a++)
    qf.call(t, a) && (n == null ? r(t[a], a, t) : r.call(n, t[a], a, t));
}, GO = function(t, r, n) {
  for (var a = 0, o = t.length; a < o; a++)
    n == null ? r(t.charAt(a), a, t) : r.call(n, t.charAt(a), a, t);
}, YO = function(t, r, n) {
  for (var a in t)
    qf.call(t, a) && (n == null ? r(t[a], a, t) : r.call(n, t[a], a, t));
}, KO = function(t, r, n) {
  if (!WO(r))
    throw new TypeError("iterator must be a function");
  var a;
  arguments.length >= 3 && (a = n), zO.call(t) === "[object Array]" ? VO(t, r, a) : typeof t == "string" ? GO(t, r, a) : YO(t, r, a);
}, XO = KO, JO = [
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array"
], Bl = JO, QO = typeof globalThis > "u" ? Jr : globalThis, ZO = function() {
  for (var t = [], r = 0; r < Bl.length; r++)
    typeof QO[Bl[r]] == "function" && (t[t.length] = Bl[r]);
  return t;
}, cn = XO, eq = ZO, tc = Wt, iu = Ee, Kr = Ji, tq = iu("Object.prototype.toString"), xf = _t(), rc = typeof globalThis > "u" ? Jr : globalThis, Ci = eq(), uu = iu("String.prototype.slice"), Dl = Object.getPrototypeOf, rq = iu("Array.prototype.indexOf", !0) || function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n] === r)
      return n;
  return -1;
}, dn = { __proto__: null };
xf && Kr && Dl ? cn(Ci, function(e) {
  var t = new rc[e]();
  if (Symbol.toStringTag in t) {
    var r = Dl(t), n = Kr(r, Symbol.toStringTag);
    if (!n) {
      var a = Dl(r);
      n = Kr(a, Symbol.toStringTag);
    }
    dn["$" + e] = tc(n.get);
  }
}) : cn(Ci, function(e) {
  var t = new rc[e](), r = t.slice || t.set;
  r && (dn["$" + e] = tc(r));
});
var nq = function(t) {
  var r = !1;
  return cn(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    dn,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(n, a) {
      if (!r)
        try {
          "$" + n(t) === a && (r = uu(a, 1));
        } catch {
        }
    }
  ), r;
}, aq = function(t) {
  var r = !1;
  return cn(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    dn,
    /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */
    function(n, a) {
      if (!r)
        try {
          n(t), r = uu(a, 1);
        } catch {
        }
    }
  ), r;
}, oq = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!xf) {
    var r = uu(tq(t), 8, -1);
    return rq(Ci, r) > -1 ? r : r !== "Object" ? !1 : aq(t);
  }
  return Kr ? nq(t) : null;
}, lq = Ee, nc = lq("ArrayBuffer.prototype.byteLength", !0), iq = wf, uq = function(t) {
  return iq(t) ? nc ? nc(t) : t.byteLength : NaN;
}, Af = k_, $e = Ee, ac = uS, sq = Ae, jt = wT, cq = df, oc = AT, lc = rf, ic = MT, uc = wf, sc = UT, cc = VT, dc = YT, fc = Gi, pc = CO, mc = $O, vc = oq, yc = uq, bc = $e("SharedArrayBuffer.prototype.byteLength", !0), hc = $e("Date.prototype.getTime"), kl = Object.getPrototypeOf, gc = $e("Object.prototype.toString"), fn = sq("%Set%", !0), Pi = $e("Map.prototype.has", !0), pn = $e("Map.prototype.get", !0), Ec = $e("Map.prototype.size", !0), mn = $e("Set.prototype.add", !0), $f = $e("Set.prototype.delete", !0), vn = $e("Set.prototype.has", !0), Xr = $e("Set.prototype.size", !0);
function Rc(e, t, r, n) {
  for (var a = jt(e), o; (o = a.next()) && !o.done; )
    if (Te(t, o.value, r, n))
      return $f(e, o.value), !0;
  return !1;
}
function Mf(e) {
  if (typeof e > "u")
    return null;
  if (typeof e != "object")
    return typeof e == "symbol" ? !1 : typeof e == "string" || typeof e == "number" ? +e == +e : !0;
}
function dq(e, t, r, n, a, o) {
  var l = Mf(r);
  if (l != null)
    return l;
  var u = pn(t, l), i = Af({}, a, { strict: !1 });
  return typeof u > "u" && !Pi(t, l) || !Te(n, u, i, o) ? !1 : !Pi(e, l) && Te(n, u, i, o);
}
function fq(e, t, r) {
  var n = Mf(r);
  return n ?? (vn(t, n) && !vn(e, n));
}
function wc(e, t, r, n, a, o) {
  for (var l = jt(e), u, i; (u = l.next()) && !u.done; )
    if (i = u.value, // eslint-disable-next-line no-use-before-define
    Te(r, i, a, o) && Te(n, pn(t, i), a, o))
      return $f(e, i), !0;
  return !1;
}
function Te(e, t, r, n) {
  var a = r || {};
  if (a.strict ? oc(e, t) : e === t)
    return !0;
  var o = pc(e), l = pc(t);
  if (o !== l)
    return !1;
  if (!e || !t || typeof e != "object" && typeof t != "object")
    return a.strict ? oc(e, t) : e == t;
  var u = n.has(e), i = n.has(t), s;
  if (u && i) {
    if (n.get(e) === n.get(t))
      return !0;
  } else
    s = {};
  return u || n.set(e, s), i || n.set(t, s), vq(e, t, a, n);
}
function Cc(e) {
  return !e || typeof e != "object" || typeof e.length != "number" || typeof e.copy != "function" || typeof e.slice != "function" || e.length > 0 && typeof e[0] != "number" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function pq(e, t, r, n) {
  if (Xr(e) !== Xr(t))
    return !1;
  for (var a = jt(e), o = jt(t), l, u, i; (l = a.next()) && !l.done; )
    if (l.value && typeof l.value == "object")
      i || (i = new fn()), mn(i, l.value);
    else if (!vn(t, l.value)) {
      if (r.strict || !fq(e, t, l.value))
        return !1;
      i || (i = new fn()), mn(i, l.value);
    }
  if (i) {
    for (; (u = o.next()) && !u.done; )
      if (u.value && typeof u.value == "object") {
        if (!Rc(i, u.value, r.strict, n))
          return !1;
      } else if (!r.strict && !vn(e, u.value) && !Rc(i, u.value, r.strict, n))
        return !1;
    return Xr(i) === 0;
  }
  return !0;
}
function mq(e, t, r, n) {
  if (Ec(e) !== Ec(t))
    return !1;
  for (var a = jt(e), o = jt(t), l, u, i, s, p, m; (l = a.next()) && !l.done; )
    if (s = l.value[0], p = l.value[1], s && typeof s == "object")
      i || (i = new fn()), mn(i, s);
    else if (m = pn(t, s), typeof m > "u" && !Pi(t, s) || !Te(p, m, r, n)) {
      if (r.strict || !dq(e, t, s, p, r, n))
        return !1;
      i || (i = new fn()), mn(i, s);
    }
  if (i) {
    for (; (u = o.next()) && !u.done; )
      if (s = u.value[0], m = u.value[1], s && typeof s == "object") {
        if (!wc(i, e, s, m, r, n))
          return !1;
      } else if (!r.strict && (!e.has(s) || !Te(pn(e, s), m, r, n)) && !wc(i, e, s, m, Af({}, r, { strict: !1 }), n))
        return !1;
    return Xr(i) === 0;
  }
  return !0;
}
function vq(e, t, r, n) {
  var a, o;
  if (typeof e != typeof t || e == null || t == null || gc(e) !== gc(t) || lc(e) !== lc(t))
    return !1;
  var l = ic(e), u = ic(t);
  if (l !== u)
    return !1;
  var i = e instanceof Error, s = t instanceof Error;
  if (i !== s || (i || s) && (e.name !== t.name || e.message !== t.message))
    return !1;
  var p = cc(e), m = cc(t);
  if (p !== m || (p || m) && (e.source !== t.source || ac(e) !== ac(t)))
    return !1;
  var v = sc(e), w = sc(t);
  if (v !== w || (v || w) && hc(e) !== hc(t) || r.strict && kl && kl(e) !== kl(t))
    return !1;
  var A = vc(e), T = vc(t);
  if (A !== T)
    return !1;
  if (A || T) {
    if (e.length !== t.length)
      return !1;
    for (a = 0; a < e.length; a++)
      if (e[a] !== t[a])
        return !1;
    return !0;
  }
  var $ = Cc(e), f = Cc(t);
  if ($ !== f)
    return !1;
  if ($ || f) {
    if (e.length !== t.length)
      return !1;
    for (a = 0; a < e.length; a++)
      if (e[a] !== t[a])
        return !1;
    return !0;
  }
  var C = uc(e), x = uc(t);
  if (C !== x)
    return !1;
  if (C || x)
    return yc(e) !== yc(t) ? !1 : typeof Uint8Array == "function" && Te(new Uint8Array(e), new Uint8Array(t), r, n);
  var O = dc(e), M = dc(t);
  if (O !== M)
    return !1;
  if (O || M)
    return bc(e) !== bc(t) ? !1 : typeof Uint8Array == "function" && Te(new Uint8Array(e), new Uint8Array(t), r, n);
  if (typeof e != typeof t)
    return !1;
  var y = fc(e), P = fc(t);
  if (y.length !== P.length)
    return !1;
  for (y.sort(), P.sort(), a = y.length - 1; a >= 0; a--)
    if (y[a] != P[a])
      return !1;
  for (a = y.length - 1; a >= 0; a--)
    if (o = y[a], !Te(e[o], t[o], r, n))
      return !1;
  var S = mc(e), U = mc(t);
  return S !== U ? !1 : S === "Set" || U === "Set" ? pq(e, t, r, n) : S === "Map" ? mq(e, t, r, n) : !0;
}
var yq = function(t, r, n) {
  return Te(t, r, n, cq());
};
Object.defineProperty(tl, "__esModule", {
  value: !0
});
tl.default = void 0;
var bq = su(yq), hq = su(Ct), If = su(Ht);
function su(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ll(e, t) {
  return Rq(e) || Eq(e, t) || Nf(e, t) || gq();
}
function gq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Eq(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, o = !1, l, u;
    try {
      for (r = r.call(e); !(a = (l = r.next()).done) && (n.push(l.value), !(t && n.length === t)); a = !0)
        ;
    } catch (i) {
      o = !0, u = i;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function Rq(e) {
  if (Array.isArray(e)) return e;
}
function wq(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Nf(e)) || t) {
      r && (e = r);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(s) {
        throw s;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, l = !1, u;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var s = r.next();
    return o = s.done, s;
  }, e: function(s) {
    l = !0, u = s;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (l) throw u;
    }
  } };
}
function Nf(e, t) {
  if (e) {
    if (typeof e == "string") return Pc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Pc(e, t);
  }
}
function Pc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Je = [], _c = If.default.keys();
for (var jl = 0; jl < _c.length; jl++) {
  var Fl = _c[jl], Ul = If.default.get(Fl);
  if (Ul)
    for (var Sc = [].concat(Ul.baseConcepts, Ul.relatedConcepts), Hl = 0; Hl < Sc.length; Hl++) {
      var Tc = Sc[Hl];
      if (Tc.module === "HTML") {
        var Wl = Tc.concept;
        Wl && function() {
          var e = JSON.stringify(Wl), t = Je.find(function(o) {
            return JSON.stringify(o[0]) === e;
          }), r = void 0;
          t ? r = t[1] : r = [];
          for (var n = !0, a = 0; a < r.length; a++)
            if (r[a] === Fl) {
              n = !1;
              break;
            }
          n && r.push(Fl), Je.push([Wl, r]);
        }();
      }
    }
}
var _i = {
  entries: function() {
    return Je;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = wq(Je), a;
    try {
      for (n.s(); !(a = n.n()).done; ) {
        var o = Ll(a.value, 2), l = o[0], u = o[1];
        t.call(r, u, l, Je);
      }
    } catch (i) {
      n.e(i);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = Je.find(function(n) {
      return (0, bq.default)(t, n[0]);
    });
    return r && r[1];
  },
  has: function(t) {
    return !!_i.get(t);
  },
  keys: function() {
    return Je.map(function(t) {
      var r = Ll(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return Je.map(function(t) {
      var r = Ll(t, 2), n = r[1];
      return n;
    });
  }
}, Cq = (0, hq.default)(_i, _i.entries());
tl.default = Cq;
var al = {};
Object.defineProperty(al, "__esModule", {
  value: !0
});
al.default = void 0;
var Pq = Df(Ct), Bf = Df(Ht);
function Df(e) {
  return e && e.__esModule ? e : { default: e };
}
function zl(e, t) {
  return Tq(e) || Sq(e, t) || kf(e, t) || _q();
}
function _q() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sq(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, o = !1, l, u;
    try {
      for (r = r.call(e); !(a = (l = r.next()).done) && (n.push(l.value), !(t && n.length === t)); a = !0)
        ;
    } catch (i) {
      o = !0, u = i;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function Tq(e) {
  if (Array.isArray(e)) return e;
}
function Oq(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = kf(e)) || t) {
      r && (e = r);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(s) {
        throw s;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, l = !1, u;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var s = r.next();
    return o = s.done, s;
  }, e: function(s) {
    l = !0, u = s;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (l) throw u;
    }
  } };
}
function kf(e, t) {
  if (e) {
    if (typeof e == "string") return Oc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Oc(e, t);
  }
}
function Oc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Qe = [], Lf = Bf.default.keys(), qq = function(t) {
  var r = Lf[t], n = Bf.default.get(r);
  if (n)
    for (var a = [].concat(n.baseConcepts, n.relatedConcepts), o = 0; o < a.length; o++) {
      var l = a[o];
      if (l.module === "HTML") {
        var u = l.concept;
        if (u) {
          var i = Qe.find(function(p) {
            return p[0] === r;
          }), s = void 0;
          i ? s = i[1] : s = [], s.push(u), Qe.push([r, s]);
        }
      }
    }
};
for (var Vl = 0; Vl < Lf.length; Vl++)
  qq(Vl);
var Si = {
  entries: function() {
    return Qe;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = Oq(Qe), a;
    try {
      for (n.s(); !(a = n.n()).done; ) {
        var o = zl(a.value, 2), l = o[0], u = o[1];
        t.call(r, u, l, Qe);
      }
    } catch (i) {
      n.e(i);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = Qe.find(function(n) {
      return n[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!Si.get(t);
  },
  keys: function() {
    return Qe.map(function(t) {
      var r = zl(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return Qe.map(function(t) {
      var r = zl(t, 2), n = r[1];
      return n;
    });
  }
}, xq = (0, Pq.default)(Si, Si.entries());
al.default = xq;
Object.defineProperty(Se, "__esModule", {
  value: !0
});
var Ce = Se.roles = Ff = Se.roleElements = jf = Se.elementRoles = Se.dom = Se.aria = void 0, Aq = wr(gn), $q = wr(Rn), Mq = wr(Ht), Iq = wr(tl), Nq = wr(al);
function wr(e) {
  return e && e.__esModule ? e : { default: e };
}
var Bq = Aq.default;
Se.aria = Bq;
var Dq = $q.default;
Se.dom = Dq;
var kq = Mq.default;
Ce = Se.roles = kq;
var Lq = Iq.default, jf = Se.elementRoles = Lq, jq = Nq.default, Ff = Se.roleElements = jq, cu = { exports: {} };
cu.exports;
(function(e) {
  var t = function() {
    var r = String.fromCharCode, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", o = {};
    function l(i, s) {
      if (!o[i]) {
        o[i] = {};
        for (var p = 0; p < i.length; p++)
          o[i][i.charAt(p)] = p;
      }
      return o[i][s];
    }
    var u = {
      compressToBase64: function(i) {
        if (i == null) return "";
        var s = u._compress(i, 6, function(p) {
          return n.charAt(p);
        });
        switch (s.length % 4) {
          default:
          case 0:
            return s;
          case 1:
            return s + "===";
          case 2:
            return s + "==";
          case 3:
            return s + "=";
        }
      },
      decompressFromBase64: function(i) {
        return i == null ? "" : i == "" ? null : u._decompress(i.length, 32, function(s) {
          return l(n, i.charAt(s));
        });
      },
      compressToUTF16: function(i) {
        return i == null ? "" : u._compress(i, 15, function(s) {
          return r(s + 32);
        }) + " ";
      },
      decompressFromUTF16: function(i) {
        return i == null ? "" : i == "" ? null : u._decompress(i.length, 16384, function(s) {
          return i.charCodeAt(s) - 32;
        });
      },
      //compress into uint8array (UCS-2 big endian format)
      compressToUint8Array: function(i) {
        for (var s = u.compress(i), p = new Uint8Array(s.length * 2), m = 0, v = s.length; m < v; m++) {
          var w = s.charCodeAt(m);
          p[m * 2] = w >>> 8, p[m * 2 + 1] = w % 256;
        }
        return p;
      },
      //decompress from uint8array (UCS-2 big endian format)
      decompressFromUint8Array: function(i) {
        if (i == null)
          return u.decompress(i);
        for (var s = new Array(i.length / 2), p = 0, m = s.length; p < m; p++)
          s[p] = i[p * 2] * 256 + i[p * 2 + 1];
        var v = [];
        return s.forEach(function(w) {
          v.push(r(w));
        }), u.decompress(v.join(""));
      },
      //compress into a string that is already URI encoded
      compressToEncodedURIComponent: function(i) {
        return i == null ? "" : u._compress(i, 6, function(s) {
          return a.charAt(s);
        });
      },
      //decompress from an output of compressToEncodedURIComponent
      decompressFromEncodedURIComponent: function(i) {
        return i == null ? "" : i == "" ? null : (i = i.replace(/ /g, "+"), u._decompress(i.length, 32, function(s) {
          return l(a, i.charAt(s));
        }));
      },
      compress: function(i) {
        return u._compress(i, 16, function(s) {
          return r(s);
        });
      },
      _compress: function(i, s, p) {
        if (i == null) return "";
        var m, v, w = {}, A = {}, T = "", $ = "", f = "", C = 2, x = 3, O = 2, M = [], y = 0, P = 0, S;
        for (S = 0; S < i.length; S += 1)
          if (T = i.charAt(S), Object.prototype.hasOwnProperty.call(w, T) || (w[T] = x++, A[T] = !0), $ = f + T, Object.prototype.hasOwnProperty.call(w, $))
            f = $;
          else {
            if (Object.prototype.hasOwnProperty.call(A, f)) {
              if (f.charCodeAt(0) < 256) {
                for (m = 0; m < O; m++)
                  y = y << 1, P == s - 1 ? (P = 0, M.push(p(y)), y = 0) : P++;
                for (v = f.charCodeAt(0), m = 0; m < 8; m++)
                  y = y << 1 | v & 1, P == s - 1 ? (P = 0, M.push(p(y)), y = 0) : P++, v = v >> 1;
              } else {
                for (v = 1, m = 0; m < O; m++)
                  y = y << 1 | v, P == s - 1 ? (P = 0, M.push(p(y)), y = 0) : P++, v = 0;
                for (v = f.charCodeAt(0), m = 0; m < 16; m++)
                  y = y << 1 | v & 1, P == s - 1 ? (P = 0, M.push(p(y)), y = 0) : P++, v = v >> 1;
              }
              C--, C == 0 && (C = Math.pow(2, O), O++), delete A[f];
            } else
              for (v = w[f], m = 0; m < O; m++)
                y = y << 1 | v & 1, P == s - 1 ? (P = 0, M.push(p(y)), y = 0) : P++, v = v >> 1;
            C--, C == 0 && (C = Math.pow(2, O), O++), w[$] = x++, f = String(T);
          }
        if (f !== "") {
          if (Object.prototype.hasOwnProperty.call(A, f)) {
            if (f.charCodeAt(0) < 256) {
              for (m = 0; m < O; m++)
                y = y << 1, P == s - 1 ? (P = 0, M.push(p(y)), y = 0) : P++;
              for (v = f.charCodeAt(0), m = 0; m < 8; m++)
                y = y << 1 | v & 1, P == s - 1 ? (P = 0, M.push(p(y)), y = 0) : P++, v = v >> 1;
            } else {
              for (v = 1, m = 0; m < O; m++)
                y = y << 1 | v, P == s - 1 ? (P = 0, M.push(p(y)), y = 0) : P++, v = 0;
              for (v = f.charCodeAt(0), m = 0; m < 16; m++)
                y = y << 1 | v & 1, P == s - 1 ? (P = 0, M.push(p(y)), y = 0) : P++, v = v >> 1;
            }
            C--, C == 0 && (C = Math.pow(2, O), O++), delete A[f];
          } else
            for (v = w[f], m = 0; m < O; m++)
              y = y << 1 | v & 1, P == s - 1 ? (P = 0, M.push(p(y)), y = 0) : P++, v = v >> 1;
          C--, C == 0 && (C = Math.pow(2, O), O++);
        }
        for (v = 2, m = 0; m < O; m++)
          y = y << 1 | v & 1, P == s - 1 ? (P = 0, M.push(p(y)), y = 0) : P++, v = v >> 1;
        for (; ; )
          if (y = y << 1, P == s - 1) {
            M.push(p(y));
            break;
          } else P++;
        return M.join("");
      },
      decompress: function(i) {
        return i == null ? "" : i == "" ? null : u._decompress(i.length, 32768, function(s) {
          return i.charCodeAt(s);
        });
      },
      _decompress: function(i, s, p) {
        var m = [], v = 4, w = 4, A = 3, T = "", $ = [], f, C, x, O, M, y, P, S = { val: p(0), position: s, index: 1 };
        for (f = 0; f < 3; f += 1)
          m[f] = f;
        for (x = 0, M = Math.pow(2, 2), y = 1; y != M; )
          O = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = s, S.val = p(S.index++)), x |= (O > 0 ? 1 : 0) * y, y <<= 1;
        switch (x) {
          case 0:
            for (x = 0, M = Math.pow(2, 8), y = 1; y != M; )
              O = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = s, S.val = p(S.index++)), x |= (O > 0 ? 1 : 0) * y, y <<= 1;
            P = r(x);
            break;
          case 1:
            for (x = 0, M = Math.pow(2, 16), y = 1; y != M; )
              O = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = s, S.val = p(S.index++)), x |= (O > 0 ? 1 : 0) * y, y <<= 1;
            P = r(x);
            break;
          case 2:
            return "";
        }
        for (m[3] = P, C = P, $.push(P); ; ) {
          if (S.index > i)
            return "";
          for (x = 0, M = Math.pow(2, A), y = 1; y != M; )
            O = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = s, S.val = p(S.index++)), x |= (O > 0 ? 1 : 0) * y, y <<= 1;
          switch (P = x) {
            case 0:
              for (x = 0, M = Math.pow(2, 8), y = 1; y != M; )
                O = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = s, S.val = p(S.index++)), x |= (O > 0 ? 1 : 0) * y, y <<= 1;
              m[w++] = r(x), P = w - 1, v--;
              break;
            case 1:
              for (x = 0, M = Math.pow(2, 16), y = 1; y != M; )
                O = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = s, S.val = p(S.index++)), x |= (O > 0 ? 1 : 0) * y, y <<= 1;
              m[w++] = r(x), P = w - 1, v--;
              break;
            case 2:
              return $.join("");
          }
          if (v == 0 && (v = Math.pow(2, A), A++), m[P])
            T = m[P];
          else if (P === w)
            T = C + C.charAt(0);
          else
            return null;
          $.push(T), m[w++] = C + T.charAt(0), v--, C = T, v == 0 && (v = Math.pow(2, A), A++);
        }
      }
    };
    return u;
  }();
  e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return t;
  });
})(cu);
var Fq = cu.exports;
const Uq = /* @__PURE__ */ Up(Fq);
function Uf(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const Hq = (e, t, r, n, a, o, l) => {
  const u = n + r.indent, i = r.colors;
  return e.map((s) => {
    const p = t[s];
    let m = l(p, r, u, a, o);
    return typeof p != "string" && (m.indexOf(`
`) !== -1 && (m = r.spacingOuter + u + m + r.spacingOuter + n), m = "{" + m + "}"), r.spacingInner + n + i.prop.open + s + i.prop.close + "=" + i.value.open + m + i.value.close;
  }).join("");
}, Wq = 3, zq = (e, t, r, n, a, o) => e.map((l) => {
  const u = typeof l == "string" ? Hf(l, t) : o(l, t, r, n, a);
  return u === "" && typeof l == "object" && l !== null && l.nodeType !== Wq ? "" : t.spacingOuter + r + u;
}).join(""), Hf = (e, t) => {
  const r = t.colors.content;
  return r.open + Uf(e) + r.close;
}, Vq = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + Uf(e) + "-->" + r.close;
}, Gq = (e, t, r, n, a) => {
  const o = n.colors.tag;
  return o.open + "<" + e + (t && o.close + t + n.spacingOuter + a + o.open) + (r ? ">" + o.close + r + n.spacingOuter + a + o.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + o.close;
}, Yq = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
}, Kq = 1, Wf = 3, zf = 8, Vf = 11, Xq = /^((HTML|SVG)\w*)?Element$/, Jq = (e) => {
  const t = e.constructor.name, {
    nodeType: r,
    tagName: n
  } = e, a = typeof n == "string" && n.includes("-") || typeof e.hasAttribute == "function" && e.hasAttribute("is");
  return r === Kq && (Xq.test(t) || a) || r === Wf && t === "Text" || r === zf && t === "Comment" || r === Vf && t === "DocumentFragment";
};
function Qq(e) {
  return e.nodeType === Wf;
}
function Zq(e) {
  return e.nodeType === zf;
}
function Gl(e) {
  return e.nodeType === Vf;
}
function ex(e) {
  return {
    test: (t) => {
      var r;
      return (t == null || (r = t.constructor) == null ? void 0 : r.name) && Jq(t);
    },
    serialize: (t, r, n, a, o, l) => {
      if (Qq(t))
        return Hf(t.data, r);
      if (Zq(t))
        return Vq(t.data, r);
      const u = Gl(t) ? "DocumentFragment" : t.tagName.toLowerCase();
      return ++a > r.maxDepth ? Yq(u, r) : Gq(u, Hq(Gl(t) ? [] : Array.from(t.attributes).map((i) => i.name).sort(), Gl(t) ? {} : Array.from(t.attributes).reduce((i, s) => (i[s.name] = s.value, i), {}), r, n + r.indent, a, o, l), zq(Array.prototype.slice.call(t.childNodes || t.children).filter(e), r, n + r.indent, a, o, l), r, n);
    }
  };
}
let Gf = null, du = null, fu = null;
try {
  const e = module && module.require;
  du = e.call(module, "fs").readFileSync, fu = e.call(module, "@babel/code-frame").codeFrameColumns, Gf = e.call(module, "chalk");
} catch {
}
function tx(e) {
  const t = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.slice(t, r), a = n.split(":"), [o, l, u] = [a[0], parseInt(a[1], 10), parseInt(a[2], 10)];
  let i = "";
  try {
    i = du(o, "utf-8");
  } catch {
    return "";
  }
  const s = fu(i, {
    start: {
      line: l,
      column: u
    }
  }, {
    highlightCode: !0,
    linesBelow: 0
  });
  return Gf.dim(n) + `
` + s + `
`;
}
function rx() {
  if (!du || !fu)
    return "";
  const t = new Error().stack.split(`
`).slice(1).find((r) => !r.includes("node_modules/"));
  return tx(t);
}
const Yf = 3;
function Yl() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
function pu() {
  if (typeof window > "u")
    throw new Error("Could not find default container");
  return window.document;
}
function Kf(e) {
  if (e.defaultView)
    return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window)
    return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null ? new Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof e.debug == "function" && typeof e.logTestingPlaygroundURL == "function" ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof e + ".");
}
function He(e) {
  if (!e || typeof e.querySelector != "function" || typeof e.querySelectorAll != "function")
    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + t(e) + ".");
  function t(r) {
    return typeof r == "object" ? r === null ? "null" : r.constructor.name : typeof r;
  }
}
const nx = () => {
  let e;
  try {
    var t;
    e = JSON.parse((t = process) == null || (t = t.env) == null ? void 0 : t.COLORS);
  } catch {
  }
  return typeof e == "boolean" ? e : typeof process < "u" && process.versions !== void 0 && process.versions.node !== void 0;
}, {
  DOMCollection: ax
} = Hi, ox = 1, lx = 8;
function ix(e) {
  return e.nodeType !== lx && (e.nodeType !== ox || !e.matches(Y().defaultIgnore));
}
function Ft(e, t, r) {
  if (r === void 0 && (r = {}), e || (e = pu().body), typeof t != "number" && (t = typeof process < "u" && process.env.DEBUG_PRINT_LIMIT || 7e3), t === 0)
    return "";
  e.documentElement && (e = e.documentElement);
  let n = typeof e;
  if (n === "object" ? n = e.constructor.name : e = {}, !("outerHTML" in e))
    throw new TypeError("Expected an element or document but got " + n);
  const {
    filterNode: a = ix,
    ...o
  } = r, l = dd(e, {
    plugins: [ex(a), ax],
    printFunctionName: !1,
    highlight: nx(),
    ...o
  });
  return t !== void 0 && e.outerHTML.length > t ? l.slice(0, t) + "..." : l;
}
const qc = function() {
  const e = rx();
  console.log(e ? Ft(...arguments) + `

` + e : Ft(...arguments));
};
let gt = {
  testIdAttribute: "data-testid",
  asyncUtilTimeout: 1e3,
  // asyncWrapper and advanceTimersWrapper is to support React's async `act` function.
  // forcing react-testing-library to wrap all async functions would've been
  // a total nightmare (consider wrapping every findBy* query and then also
  // updating `within` so those would be wrapped too. Total nightmare).
  // so we have this config option that's really only intended for
  // react-testing-library to use. For that reason, this feature will remain
  // undocumented.
  asyncWrapper: (e) => e(),
  unstable_advanceTimersWrapper: (e) => e(),
  eventWrapper: (e) => e(),
  // default value for the `hidden` option in `ByRole` queries
  defaultHidden: !1,
  // default value for the `ignore` option in `ByText` queries
  defaultIgnore: "script, style",
  // showOriginalStackTrace flag to show the full error stack traces for async errors
  showOriginalStackTrace: !1,
  // throw errors w/ suggestions for better queries. Opt in so off by default.
  throwSuggestions: !1,
  // called when getBy* queries fail. (message, container) => Error
  getElementError(e, t) {
    const r = Ft(t), n = new Error([e, "Ignored nodes: comments, " + gt.defaultIgnore + `
` + r].filter(Boolean).join(`

`));
    return n.name = "TestingLibraryElementError", n;
  },
  _disableExpensiveErrorDiagnostics: !1,
  computedStyleSupportsPseudoElements: !1
};
function ux(e) {
  try {
    return gt._disableExpensiveErrorDiagnostics = !0, e();
  } finally {
    gt._disableExpensiveErrorDiagnostics = !1;
  }
}
function Xf(e) {
  typeof e == "function" && (e = e(gt)), gt = {
    ...gt,
    ...e
  };
}
function Y() {
  return gt;
}
const sx = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function Jf(e) {
  return sx.includes(e.nodeName.toLowerCase()) ? "" : e.nodeType === Yf ? e.textContent : Array.from(e.childNodes).map((t) => Jf(t)).join("");
}
function Ti(e) {
  let t;
  return e.tagName.toLowerCase() === "label" ? t = Jf(e) : t = e.value || e.textContent, t;
}
function Qf(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!cx(e)) return [];
  const r = e.ownerDocument.querySelectorAll("label");
  return Array.from(r).filter((n) => n.control === e);
}
function cx(e) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || e.tagName === "INPUT" && e.getAttribute("type") !== "hidden";
}
function Zf(e, t, r) {
  let {
    selector: n = "*"
  } = r === void 0 ? {} : r;
  const a = t.getAttribute("aria-labelledby"), o = a ? a.split(" ") : [];
  return o.length ? o.map((l) => {
    const u = e.querySelector('[id="' + l + '"]');
    return u ? {
      content: Ti(u),
      formControl: null
    } : {
      content: "",
      formControl: null
    };
  }) : Array.from(Qf(t)).map((l) => {
    const u = Ti(l), s = Array.from(l.querySelectorAll("button, input, meter, output, progress, select, textarea")).filter((p) => p.matches(n))[0];
    return {
      content: u,
      formControl: s
    };
  });
}
function ep(e) {
  if (e == null)
    throw new Error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
      "It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?"
    );
}
function Vt(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  ep(r);
  const a = n(e);
  return typeof r == "string" || typeof r == "number" ? a.toLowerCase().includes(r.toString().toLowerCase()) : typeof r == "function" ? r(a, t) : rp(r, a);
}
function je(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  ep(r);
  const a = n(e);
  return r instanceof Function ? r(a, t) : r instanceof RegExp ? rp(r, a) : a === String(r);
}
function tp(e) {
  let {
    trim: t = !0,
    collapseWhitespace: r = !0
  } = e === void 0 ? {} : e;
  return (n) => {
    let a = n;
    return a = t ? a.trim() : a, a = r ? a.replace(/\s+/g, " ") : a, a;
  };
}
function St(e) {
  let {
    trim: t,
    collapseWhitespace: r,
    normalizer: n
  } = e;
  if (!n)
    return tp({
      trim: t,
      collapseWhitespace: r
    });
  if (typeof t < "u" || typeof r < "u")
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  return n;
}
function rp(e, t) {
  const r = e.test(t);
  return e.global && e.lastIndex !== 0 && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), e.lastIndex = 0), r;
}
function ol(e) {
  return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter((t) => t.nodeType === Yf && !!t.textContent).map((t) => t.textContent).join("");
}
const dx = fx(jf);
function np(e) {
  return e.hidden === !0 || e.getAttribute("aria-hidden") === "true" || e.ownerDocument.defaultView.getComputedStyle(e).display === "none";
}
function mu(e, t) {
  t === void 0 && (t = {});
  const {
    isSubtreeInaccessible: r = np
  } = t;
  if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === "hidden")
    return !0;
  let a = e;
  for (; a; ) {
    if (r(a))
      return !0;
    a = a.parentElement;
  }
  return !1;
}
function vu(e) {
  for (const {
    match: t,
    roles: r
  } of dx)
    if (t(e))
      return [...r];
  return [];
}
function fx(e) {
  function t(l) {
    let {
      name: u,
      attributes: i
    } = l;
    return "" + u + i.map((s) => {
      let {
        name: p,
        value: m,
        constraints: v = []
      } = s;
      return v.indexOf("undefined") !== -1 ? ":not([" + p + "])" : m ? "[" + p + '="' + m + '"]' : "[" + p + "]";
    }).join("");
  }
  function r(l) {
    let {
      attributes: u = []
    } = l;
    return u.length;
  }
  function n(l, u) {
    let {
      specificity: i
    } = l, {
      specificity: s
    } = u;
    return s - i;
  }
  function a(l) {
    let {
      attributes: u = []
    } = l;
    const i = u.findIndex((p) => p.value && p.name === "type" && p.value === "text");
    i >= 0 && (u = [...u.slice(0, i), ...u.slice(i + 1)]);
    const s = t({
      ...l,
      attributes: u
    });
    return (p) => i >= 0 && p.type !== "text" ? !1 : p.matches(s);
  }
  let o = [];
  for (const [l, u] of e.entries())
    o = [...o, {
      match: a(l),
      roles: Array.from(u),
      specificity: r(l)
    }];
  return o.sort(n);
}
function px(e, t) {
  let {
    hidden: r = !1
  } = t === void 0 ? {} : t;
  function n(a) {
    return [a, ...Array.from(a.children).reduce((o, l) => [...o, ...n(l)], [])];
  }
  return n(e).filter((a) => r === !1 ? mu(a) === !1 : !0).reduce((a, o) => {
    let l = [];
    return o.hasAttribute("role") ? l = o.getAttribute("role").split(" ").slice(0, 1) : l = vu(o), l.reduce((u, i) => Array.isArray(u[i]) ? {
      ...u,
      [i]: [...u[i], o]
    } : {
      ...u,
      [i]: [o]
    }, a);
  }, {});
}
function ap(e, t) {
  let {
    hidden: r,
    includeDescription: n
  } = t;
  const a = px(e, {
    hidden: r
  });
  return Object.entries(a).filter((o) => {
    let [l] = o;
    return l !== "generic";
  }).map((o) => {
    let [l, u] = o;
    const i = "-".repeat(50), s = u.map((p) => {
      const m = 'Name "' + zi(p, {
        computedStyleSupportsPseudoElements: Y().computedStyleSupportsPseudoElements
      }) + `":
`, v = Ft(p.cloneNode(!1));
      if (n) {
        const w = 'Description "' + Ad(p, {
          computedStyleSupportsPseudoElements: Y().computedStyleSupportsPseudoElements
        }) + `":
`;
        return "" + m + w + v;
      }
      return "" + m + v;
    }).join(`

`);
    return l + `:

` + s + `

` + i;
  }).join(`
`);
}
const m0 = function(e, t) {
  let {
    hidden: r = !1
  } = t === void 0 ? {} : t;
  return console.log(ap(e, {
    hidden: r
  }));
};
function mx(e) {
  return e.tagName === "OPTION" ? e.selected : Cr(e, "aria-selected");
}
function vx(e) {
  return e.getAttribute("aria-busy") === "true";
}
function yx(e) {
  if (!("indeterminate" in e && e.indeterminate))
    return "checked" in e ? e.checked : Cr(e, "aria-checked");
}
function bx(e) {
  return Cr(e, "aria-pressed");
}
function hx(e) {
  var t, r;
  return (t = (r = Cr(e, "aria-current")) != null ? r : e.getAttribute("aria-current")) != null ? t : !1;
}
function gx(e) {
  return Cr(e, "aria-expanded");
}
function Cr(e, t) {
  const r = e.getAttribute(t);
  if (r === "true")
    return !0;
  if (r === "false")
    return !1;
}
function Ex(e) {
  const t = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
    H6: 6
  };
  return e.getAttribute("aria-level") && Number(e.getAttribute("aria-level")) || t[e.tagName];
}
function Rx(e) {
  const t = e.getAttribute("aria-valuenow");
  return t === null ? void 0 : +t;
}
function wx(e) {
  const t = e.getAttribute("aria-valuemax");
  return t === null ? void 0 : +t;
}
function Cx(e) {
  const t = e.getAttribute("aria-valuemin");
  return t === null ? void 0 : +t;
}
function Px(e) {
  const t = e.getAttribute("aria-valuetext");
  return t === null ? void 0 : t;
}
const xc = tp();
function _x(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function Ac(e) {
  return new RegExp(_x(e.toLowerCase()), "i");
}
function Ve(e, t, r, n) {
  let {
    variant: a,
    name: o
  } = n, l = "";
  const u = {}, i = [["Role", "TestId"].includes(e) ? r : Ac(r)];
  o && (u.name = Ac(o)), e === "Role" && mu(t) && (u.hidden = !0, l = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `), Object.keys(u).length > 0 && i.push(u);
  const s = a + "By" + e;
  return {
    queryName: e,
    queryMethod: s,
    queryArgs: i,
    variant: a,
    warning: l,
    toString() {
      l && console.warn(l);
      let [p, m] = i;
      return p = typeof p == "string" ? "'" + p + "'" : p, m = m ? ", { " + Object.entries(m).map((v) => {
        let [w, A] = v;
        return w + ": " + A;
      }).join(", ") + " }" : "", s + "(" + p + m + ")";
    }
  };
}
function Ge(e, t, r) {
  return r && (!t || t.toLowerCase() === e.toLowerCase());
}
function Oi(e, t, r) {
  var n, a;
  if (t === void 0 && (t = "get"), e.matches(Y().defaultIgnore))
    return;
  const o = (n = e.getAttribute("role")) != null ? n : (a = vu(e)) == null ? void 0 : a[0];
  if (o !== "generic" && Ge("Role", r, o))
    return Ve("Role", e, o, {
      variant: t,
      name: zi(e, {
        computedStyleSupportsPseudoElements: Y().computedStyleSupportsPseudoElements
      })
    });
  const l = Zf(document, e).map((v) => v.content).join(" ");
  if (Ge("LabelText", r, l))
    return Ve("LabelText", e, l, {
      variant: t
    });
  const u = e.getAttribute("placeholder");
  if (Ge("PlaceholderText", r, u))
    return Ve("PlaceholderText", e, u, {
      variant: t
    });
  const i = xc(ol(e));
  if (Ge("Text", r, i))
    return Ve("Text", e, i, {
      variant: t
    });
  if (Ge("DisplayValue", r, e.value))
    return Ve("DisplayValue", e, xc(e.value), {
      variant: t
    });
  const s = e.getAttribute("alt");
  if (Ge("AltText", r, s))
    return Ve("AltText", e, s, {
      variant: t
    });
  const p = e.getAttribute("title");
  if (Ge("Title", r, p))
    return Ve("Title", e, p, {
      variant: t
    });
  const m = e.getAttribute(Y().testIdAttribute);
  if (Ge("TestId", r, m))
    return Ve("TestId", e, m, {
      variant: t
    });
}
function jr(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function Sx(e, t) {
  let {
    container: r = pu(),
    timeout: n = Y().asyncUtilTimeout,
    showOriginalStackTrace: a = Y().showOriginalStackTrace,
    stackTraceError: o,
    interval: l = 50,
    onTimeout: u = (s) => (Object.defineProperty(s, "message", {
      value: Y().getElementError(s.message, r).message
    }), s),
    mutationObserverOptions: i = {
      subtree: !0,
      childList: !0,
      attributes: !0,
      characterData: !0
    }
  } = t;
  if (typeof e != "function")
    throw new TypeError("Received `callback` arg must be a function");
  return new Promise(async (s, p) => {
    let m, v, w, A = !1, T = "idle";
    const $ = setTimeout(M, n), f = Yl();
    if (f) {
      const {
        unstable_advanceTimersWrapper: y
      } = Y();
      for (O(); !A; ) {
        if (!Yl()) {
          const P = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          a || jr(P, o), p(P);
          return;
        }
        if (await y(async () => {
          jest.advanceTimersByTime(l);
        }), A)
          break;
        O();
      }
    } else {
      try {
        He(r);
      } catch (P) {
        p(P);
        return;
      }
      v = setInterval(x, l);
      const {
        MutationObserver: y
      } = Kf(r);
      w = new y(x), w.observe(r, i), O();
    }
    function C(y, P) {
      A = !0, clearTimeout($), f || (clearInterval(v), w.disconnect()), y ? p(y) : s(P);
    }
    function x() {
      if (Yl()) {
        const y = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        return a || jr(y, o), p(y);
      } else
        return O();
    }
    function O() {
      if (T !== "pending")
        try {
          const y = ux(e);
          typeof (y == null ? void 0 : y.then) == "function" ? (T = "pending", y.then((P) => {
            T = "resolved", C(null, P);
          }, (P) => {
            T = "rejected", m = P;
          })) : C(null, y);
        } catch (y) {
          m = y;
        }
    }
    function M() {
      let y;
      m ? (y = m, !a && y.name === "TestingLibraryElementError" && jr(y, o)) : (y = new Error("Timed out in waitFor."), a || jr(y, o)), C(u(y), null);
    }
  });
}
function op(e, t) {
  const r = new Error("STACK_TRACE_MESSAGE");
  return Y().asyncWrapper(() => Sx(e, {
    stackTraceError: r,
    ...t
  }));
}
function yu(e, t) {
  return Y().getElementError(e, t);
}
function bu(e, t) {
  return yu(e + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", t);
}
function Gt(e, t, r, n) {
  let {
    exact: a = !0,
    collapseWhitespace: o,
    trim: l,
    normalizer: u
  } = n === void 0 ? {} : n;
  const i = a ? je : Vt, s = St({
    collapseWhitespace: o,
    trim: l,
    normalizer: u
  });
  return Array.from(t.querySelectorAll("[" + e + "]")).filter((p) => i(p.getAttribute(e), p, r, s));
}
function Tx(e, t, r, n) {
  const a = Gt(e, t, r, n);
  if (a.length > 1)
    throw bu("Found multiple elements by [" + e + "=" + r + "]", t);
  return a[0] || null;
}
function br(e, t) {
  return function(r) {
    for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      a[o - 1] = arguments[o];
    const l = e(r, ...a);
    if (l.length > 1) {
      const u = l.map((i) => yu(null, i).message).join(`

`);
      throw bu(t(r, ...a) + `

Here are the matching elements:

` + u, r);
    }
    return l[0] || null;
  };
}
function lp(e, t) {
  return Y().getElementError(`A better query is available, try this:
` + e.toString() + `
`, t);
}
function ip(e, t) {
  return function(r) {
    for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      a[o - 1] = arguments[o];
    const l = e(r, ...a);
    if (!l.length)
      throw Y().getElementError(t(r, ...a), r);
    return l;
  };
}
function hr(e) {
  return (t, r, n, a) => op(() => e(t, r, n), {
    container: t,
    ...a
  });
}
const Et = (e, t, r) => function(n) {
  for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
    o[l - 1] = arguments[l];
  const u = e(n, ...o), [{
    suggest: i = Y().throwSuggestions
  } = {}] = o.slice(-1);
  if (u && i) {
    const s = Oi(u, r);
    if (s && !t.endsWith(s.queryName))
      throw lp(s.toString(), n);
  }
  return u;
}, ye = (e, t, r) => function(n) {
  for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
    o[l - 1] = arguments[l];
  const u = e(n, ...o), [{
    suggest: i = Y().throwSuggestions
  } = {}] = o.slice(-1);
  if (u.length && i) {
    const s = [...new Set(u.map((p) => {
      var m;
      return (m = Oi(p, r)) == null ? void 0 : m.toString();
    }))];
    if (
      // only want to suggest if all the els have the same suggestion.
      s.length === 1 && !t.endsWith(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
        Oi(u[0], r).queryName
      )
    )
      throw lp(s[0], n);
  }
  return u;
};
function dt(e, t, r) {
  const n = Et(br(e, t), e.name, "query"), a = ip(e, r), o = br(a, t), l = Et(o, e.name, "get"), u = ye(a, e.name.replace("query", "get"), "getAll"), i = hr(ye(a, e.name, "findAll")), s = hr(Et(o, e.name, "find"));
  return [n, u, l, i, s];
}
var v0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getElementError: yu,
  wrapAllByQueryWithSuggestion: ye,
  wrapSingleQueryWithSuggestion: Et,
  getMultipleElementsFoundError: bu,
  queryAllByAttribute: Gt,
  queryByAttribute: Tx,
  makeSingleQuery: br,
  makeGetAllQuery: ip,
  makeFindQuery: hr,
  buildQueries: dt
});
function Ox(e) {
  return Array.from(e.querySelectorAll("label,input")).map((t) => ({
    node: t,
    textToMatch: Ti(t)
  })).filter((t) => {
    let {
      textToMatch: r
    } = t;
    return r !== null;
  });
}
const qx = function(e, t, r) {
  let {
    exact: n = !0,
    trim: a,
    collapseWhitespace: o,
    normalizer: l
  } = r === void 0 ? {} : r;
  const u = n ? je : Vt, i = St({
    collapseWhitespace: o,
    trim: a,
    normalizer: l
  });
  return Ox(e).filter((p) => {
    let {
      node: m,
      textToMatch: v
    } = p;
    return u(v, m, t, i);
  }).map((p) => {
    let {
      node: m
    } = p;
    return m;
  });
}, gr = function(e, t, r) {
  let {
    selector: n = "*",
    exact: a = !0,
    collapseWhitespace: o,
    trim: l,
    normalizer: u
  } = r === void 0 ? {} : r;
  He(e);
  const i = a ? je : Vt, s = St({
    collapseWhitespace: o,
    trim: l,
    normalizer: u
  }), p = Array.from(e.querySelectorAll("*")).filter((m) => Qf(m).length || m.hasAttribute("aria-labelledby")).reduce((m, v) => {
    const w = Zf(e, v, {
      selector: n
    });
    w.filter((T) => !!T.formControl).forEach((T) => {
      i(T.content, T.formControl, t, s) && T.formControl && m.push(T.formControl);
    });
    const A = w.filter((T) => !!T.content).map((T) => T.content);
    return i(A.join(" "), v, t, s) && m.push(v), A.length > 1 && A.forEach((T, $) => {
      i(T, v, t, s) && m.push(v);
      const f = [...A];
      f.splice($, 1), f.length > 1 && i(f.join(" "), v, t, s) && m.push(v);
    }), m;
  }, []).concat(Gt("aria-label", e, t, {
    exact: a,
    normalizer: s
  }));
  return Array.from(new Set(p)).filter((m) => m.matches(n));
}, Rt = function(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  const o = gr(e, t, ...n);
  if (!o.length) {
    const l = qx(e, t, ...n);
    if (l.length) {
      const u = l.map((i) => xx(e, i)).filter((i) => !!i);
      throw u.length ? Y().getElementError(u.map((i) => "Found a label with the text of: " + t + ", however the element associated with this label (<" + i + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + i + " />, you can use aria-label or aria-labelledby instead.").join(`

`), e) : Y().getElementError("Found a label with the text of: " + t + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, e);
    } else
      throw Y().getElementError("Unable to find a label with the text of: " + t, e);
  }
  return o;
};
function xx(e, t) {
  const r = t.getAttribute("for");
  if (!r)
    return null;
  const n = e.querySelector('[id="' + r + '"]');
  return n ? n.tagName.toLowerCase() : null;
}
const up = (e, t) => "Found multiple elements with the text of: " + t, Ax = Et(br(gr, up), gr.name, "query"), sp = br(Rt, up), $x = hr(ye(Rt, Rt.name, "findAll")), Mx = hr(Et(sp, Rt.name, "find")), Ix = ye(Rt, Rt.name, "getAll"), Nx = Et(sp, Rt.name, "get"), Bx = ye(gr, gr.name, "queryAll"), qi = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return He(t[0]), Gt("placeholder", ...t);
}, Dx = (e, t) => "Found multiple elements with the placeholder text of: " + t, kx = (e, t) => "Unable to find an element with the placeholder text of: " + t, Lx = ye(qi, qi.name, "queryAll"), [jx, Fx, Ux, Hx, Wx] = dt(qi, Dx, kx), xi = function(e, t, r) {
  let {
    selector: n = "*",
    exact: a = !0,
    collapseWhitespace: o,
    trim: l,
    ignore: u = Y().defaultIgnore,
    normalizer: i
  } = r === void 0 ? {} : r;
  He(e);
  const s = a ? je : Vt, p = St({
    collapseWhitespace: o,
    trim: l,
    normalizer: i
  });
  let m = [];
  return typeof e.matches == "function" && e.matches(n) && (m = [e]), [...m, ...Array.from(e.querySelectorAll(n))].filter((v) => !u || !v.matches(u)).filter((v) => s(ol(v), v, t, p));
}, zx = (e, t) => "Found multiple elements with the text: " + t, Vx = function(e, t, r) {
  r === void 0 && (r = {});
  const {
    collapseWhitespace: n,
    trim: a,
    normalizer: o,
    selector: l
  } = r, i = St({
    collapseWhitespace: n,
    trim: a,
    normalizer: o
  })(t.toString()), s = i !== t.toString(), p = (l ?? "*") !== "*";
  return "Unable to find an element with the text: " + (s ? i + " (normalized from '" + t + "')" : t) + (p ? ", which matches selector '" + l + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
}, Gx = ye(xi, xi.name, "queryAll"), [Yx, Kx, Xx, Jx, Qx] = dt(xi, zx, Vx), Ai = function(e, t, r) {
  let {
    exact: n = !0,
    collapseWhitespace: a,
    trim: o,
    normalizer: l
  } = r === void 0 ? {} : r;
  He(e);
  const u = n ? je : Vt, i = St({
    collapseWhitespace: a,
    trim: o,
    normalizer: l
  });
  return Array.from(e.querySelectorAll("input,textarea,select")).filter((s) => s.tagName === "SELECT" ? Array.from(s.options).filter((m) => m.selected).some((m) => u(ol(m), m, t, i)) : u(s.value, s, t, i));
}, Zx = (e, t) => "Found multiple elements with the display value: " + t + ".", e1 = (e, t) => "Unable to find an element with the display value: " + t + ".", t1 = ye(Ai, Ai.name, "queryAll"), [r1, n1, a1, o1, l1] = dt(Ai, Zx, e1), i1 = /^(img|input|area|.+-.+)$/i, $i = function(e, t, r) {
  return r === void 0 && (r = {}), He(e), Gt("alt", e, t, r).filter((n) => i1.test(n.tagName));
}, u1 = (e, t) => "Found multiple elements with the alt text: " + t, s1 = (e, t) => "Unable to find an element with the alt text: " + t, c1 = ye($i, $i.name, "queryAll"), [d1, f1, p1, m1, v1] = dt($i, u1, s1), y1 = (e) => {
  var t;
  return e.tagName.toLowerCase() === "title" && ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) === "svg";
}, Mi = function(e, t, r) {
  let {
    exact: n = !0,
    collapseWhitespace: a,
    trim: o,
    normalizer: l
  } = r === void 0 ? {} : r;
  He(e);
  const u = n ? je : Vt, i = St({
    collapseWhitespace: a,
    trim: o,
    normalizer: l
  });
  return Array.from(e.querySelectorAll("[title], svg > title")).filter((s) => u(s.getAttribute("title"), s, t, i) || y1(s) && u(ol(s), s, t, i));
}, b1 = (e, t) => "Found multiple elements with the title: " + t + ".", h1 = (e, t) => "Unable to find an element with the title: " + t + ".", g1 = ye(Mi, Mi.name, "queryAll"), [E1, R1, w1, C1, P1] = dt(Mi, b1, h1), Ii = function(e, t, r) {
  let {
    hidden: n = Y().defaultHidden,
    name: a,
    description: o,
    queryFallbacks: l = !1,
    selected: u,
    busy: i,
    checked: s,
    pressed: p,
    current: m,
    level: v,
    expanded: w,
    value: {
      now: A,
      min: T,
      max: $,
      text: f
    } = {}
  } = r === void 0 ? {} : r;
  if (He(e), u !== void 0) {
    var C;
    if (((C = Ce.get(t)) == null ? void 0 : C.props["aria-selected"]) === void 0)
      throw new Error('"aria-selected" is not supported on role "' + t + '".');
  }
  if (i !== void 0) {
    var x;
    if (((x = Ce.get(t)) == null ? void 0 : x.props["aria-busy"]) === void 0)
      throw new Error('"aria-busy" is not supported on role "' + t + '".');
  }
  if (s !== void 0) {
    var O;
    if (((O = Ce.get(t)) == null ? void 0 : O.props["aria-checked"]) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + t + '".');
  }
  if (p !== void 0) {
    var M;
    if (((M = Ce.get(t)) == null ? void 0 : M.props["aria-pressed"]) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + t + '".');
  }
  if (m !== void 0) {
    var y;
    if (((y = Ce.get(t)) == null ? void 0 : y.props["aria-current"]) === void 0)
      throw new Error('"aria-current" is not supported on role "' + t + '".');
  }
  if (v !== void 0 && t !== "heading")
    throw new Error('Role "' + t + '" cannot have "level" property.');
  if (A !== void 0) {
    var P;
    if (((P = Ce.get(t)) == null ? void 0 : P.props["aria-valuenow"]) === void 0)
      throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
  }
  if ($ !== void 0) {
    var S;
    if (((S = Ce.get(t)) == null ? void 0 : S.props["aria-valuemax"]) === void 0)
      throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
  }
  if (T !== void 0) {
    var U;
    if (((U = Ce.get(t)) == null ? void 0 : U.props["aria-valuemin"]) === void 0)
      throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
  }
  if (f !== void 0) {
    var X;
    if (((X = Ce.get(t)) == null ? void 0 : X.props["aria-valuetext"]) === void 0)
      throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
  }
  if (w !== void 0) {
    var Z;
    if (((Z = Ce.get(t)) == null ? void 0 : Z.props["aria-expanded"]) === void 0)
      throw new Error('"aria-expanded" is not supported on role "' + t + '".');
  }
  const J = /* @__PURE__ */ new WeakMap();
  function q(N) {
    return J.has(N) || J.set(N, np(N)), J.get(N);
  }
  return Array.from(e.querySelectorAll(
    // Only query elements that can be matched by the following filters
    _1(t)
  )).filter((N) => {
    if (N.hasAttribute("role")) {
      const oe = N.getAttribute("role");
      if (l)
        return oe.split(" ").filter(Boolean).some((Oe) => Oe === t);
      const [fe] = oe.split(" ");
      return fe === t;
    }
    return vu(N).some((oe) => oe === t);
  }).filter((N) => {
    if (u !== void 0)
      return u === mx(N);
    if (i !== void 0)
      return i === vx(N);
    if (s !== void 0)
      return s === yx(N);
    if (p !== void 0)
      return p === bx(N);
    if (m !== void 0)
      return m === hx(N);
    if (w !== void 0)
      return w === gx(N);
    if (v !== void 0)
      return v === Ex(N);
    if (A !== void 0 || $ !== void 0 || T !== void 0 || f !== void 0) {
      let ee = !0;
      if (A !== void 0 && ee && (ee = A === Rx(N)), $ !== void 0 && ee && (ee = $ === wx(N)), T !== void 0 && ee && (ee = T === Cx(N)), f !== void 0) {
        var le;
        ee && (ee = je((le = Px(N)) != null ? le : null, N, f, (oe) => oe));
      }
      return ee;
    }
    return !0;
  }).filter((N) => a === void 0 ? !0 : je(zi(N, {
    computedStyleSupportsPseudoElements: Y().computedStyleSupportsPseudoElements
  }), N, a, (le) => le)).filter((N) => o === void 0 ? !0 : je(Ad(N, {
    computedStyleSupportsPseudoElements: Y().computedStyleSupportsPseudoElements
  }), N, o, (le) => le)).filter((N) => n === !1 ? mu(N, {
    isSubtreeInaccessible: q
  }) === !1 : !0);
};
function _1(e) {
  var t;
  const r = '*[role~="' + e + '"]', n = (t = Ff.get(e)) != null ? t : /* @__PURE__ */ new Set(), a = new Set(Array.from(n).map((o) => {
    let {
      name: l
    } = o;
    return l;
  }));
  return [r].concat(Array.from(a)).join(",");
}
const cp = (e) => {
  let t = "";
  return e === void 0 ? t = "" : typeof e == "string" ? t = ' and name "' + e + '"' : t = " and name `" + e + "`", t;
}, S1 = function(e, t, r) {
  let {
    name: n
  } = r === void 0 ? {} : r;
  return 'Found multiple elements with the role "' + t + '"' + cp(n);
}, T1 = function(e, t, r) {
  let {
    hidden: n = Y().defaultHidden,
    name: a,
    description: o
  } = r === void 0 ? {} : r;
  if (Y()._disableExpensiveErrorDiagnostics)
    return 'Unable to find role="' + t + '"' + cp(a);
  let l = "";
  Array.from(e.children).forEach((p) => {
    l += ap(p, {
      hidden: n,
      includeDescription: o !== void 0
    });
  });
  let u;
  l.length === 0 ? n === !1 ? u = "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole" : u = "There are no available roles." : u = (`
Here are the ` + (n === !1 ? "accessible" : "available") + ` roles:

  ` + l.replace(/\n/g, `
  `).replace(/\n\s\s\n/g, `

`) + `
`).trim();
  let i = "";
  a === void 0 ? i = "" : typeof a == "string" ? i = ' and name "' + a + '"' : i = " and name `" + a + "`";
  let s = "";
  return o === void 0 ? s = "" : typeof o == "string" ? s = ' and description "' + o + '"' : s = " and description `" + o + "`", (`
Unable to find an ` + (n === !1 ? "accessible " : "") + 'element with the role "' + t + '"' + i + s + `

` + u).trim();
}, O1 = ye(Ii, Ii.name, "queryAll"), [q1, x1, A1, $1, M1] = dt(Ii, S1, T1), hu = () => Y().testIdAttribute, Ni = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return He(t[0]), Gt(hu(), ...t);
}, I1 = (e, t) => "Found multiple elements by: [" + hu() + '="' + t + '"]', N1 = (e, t) => "Unable to find an element by: [" + hu() + '="' + t + '"]', B1 = ye(Ni, Ni.name, "queryAll"), [D1, k1, L1, j1, F1] = dt(Ni, I1, N1);
var Bi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  queryAllByLabelText: Bx,
  queryByLabelText: Ax,
  getAllByLabelText: Ix,
  getByLabelText: Nx,
  findAllByLabelText: $x,
  findByLabelText: Mx,
  queryByPlaceholderText: jx,
  queryAllByPlaceholderText: Lx,
  getByPlaceholderText: Ux,
  getAllByPlaceholderText: Fx,
  findAllByPlaceholderText: Hx,
  findByPlaceholderText: Wx,
  queryByText: Yx,
  queryAllByText: Gx,
  getByText: Xx,
  getAllByText: Kx,
  findAllByText: Jx,
  findByText: Qx,
  queryByDisplayValue: r1,
  queryAllByDisplayValue: t1,
  getByDisplayValue: a1,
  getAllByDisplayValue: n1,
  findAllByDisplayValue: o1,
  findByDisplayValue: l1,
  queryByAltText: d1,
  queryAllByAltText: c1,
  getByAltText: p1,
  getAllByAltText: f1,
  findAllByAltText: m1,
  findByAltText: v1,
  queryByTitle: E1,
  queryAllByTitle: g1,
  getByTitle: w1,
  getAllByTitle: R1,
  findAllByTitle: C1,
  findByTitle: P1,
  queryByRole: q1,
  queryAllByRole: O1,
  getAllByRole: x1,
  getByRole: A1,
  findAllByRole: $1,
  findByRole: M1,
  queryByTestId: D1,
  queryAllByTestId: B1,
  getByTestId: L1,
  getAllByTestId: k1,
  findAllByTestId: j1,
  findByTestId: F1
});
function dp(e, t, r) {
  return t === void 0 && (t = Bi), r === void 0 && (r = {}), Object.keys(t).reduce((n, a) => {
    const o = t[a];
    return n[a] = o.bind(null, e), n;
  }, r);
}
const fp = (e) => !e || Array.isArray(e) && !e.length;
function $c(e) {
  if (fp(e))
    throw new Error("The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.");
}
async function y0(e, t) {
  const r = new Error("Timed out in waitForElementToBeRemoved.");
  if (typeof e != "function") {
    $c(e);
    const a = (Array.isArray(e) ? e : [e]).map((o) => {
      let l = o.parentElement;
      if (l === null) return () => null;
      for (; l.parentElement; ) l = l.parentElement;
      return () => l.contains(o) ? o : null;
    });
    e = () => a.map((o) => o()).filter(Boolean);
  }
  return $c(e()), op(() => {
    let n;
    try {
      n = e();
    } catch (a) {
      if (a.name === "TestingLibraryElementError")
        return;
      throw a;
    }
    if (!fp(n))
      throw r;
  }, t);
}
const Mc = {
  // Clipboard Events
  copy: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  cut: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  paste: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Composition Events
  compositionEnd: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionStart: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionUpdate: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Keyboard Events
  keyDown: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyPress: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyUp: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  // Focus Events
  focus: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  blur: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  focusIn: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  focusOut: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // Form Events
  change: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  input: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  invalid: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !0
    }
  },
  submit: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  reset: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  // Mouse Events
  click: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      button: 0,
      composed: !0
    }
  },
  contextMenu: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dblClick: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drag: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragEnd: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragEnter: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragExit: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragLeave: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragOver: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragStart: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drop: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseDown: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseEnter: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseLeave: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseMove: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOut: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOver: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseUp: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Selection Events
  select: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Touch Events
  touchCancel: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  touchEnd: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchMove: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchStart: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // UI Events
  resize: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  scroll: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Wheel Events
  wheel: {
    EventType: "WheelEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Media Events
  abort: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlay: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlayThrough: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  durationChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  emptied: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  encrypted: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  ended: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedData: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedMetadata: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadStart: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pause: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  play: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  playing: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  progress: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  rateChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeked: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeking: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  stalled: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  suspend: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  timeUpdate: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  volumeChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  waiting: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Events
  load: {
    // TODO: load events can be UIEvent or Event depending on what generated them
    // This is where this abstraction breaks down.
    // But the common targets are <img />, <script /> and window.
    // Neither of these targets receive a UIEvent
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  error: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Animation Events
  animationStart: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationEnd: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationIteration: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Transition Events
  transitionCancel: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionEnd: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  transitionRun: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionStart: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // pointer events
  pointerOver: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerEnter: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pointerDown: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerMove: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerUp: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerCancel: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  pointerOut: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerLeave: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  gotPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  lostPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // history events
  popState: {
    EventType: "PopStateEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // window events
  offline: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  online: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  }
}, Ic = {
  doubleClick: "dblClick"
};
function wt(e, t) {
  return Y().eventWrapper(() => {
    if (!t)
      throw new Error("Unable to fire an event - please provide an event object.");
    if (!e)
      throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
    return e.dispatchEvent(t);
  });
}
function Kl(e, t, r, n) {
  let {
    EventType: a = "Event",
    defaultInit: o = {}
  } = n === void 0 ? {} : n;
  if (!t)
    throw new Error('Unable to fire a "' + e + '" event - please provide a DOM element.');
  const l = {
    ...o,
    ...r
  }, {
    target: {
      value: u,
      files: i,
      ...s
    } = {}
  } = l;
  u !== void 0 && U1(t, u), i !== void 0 && Object.defineProperty(t, "files", {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: i
  }), Object.assign(t, s);
  const p = Kf(t), m = p[a] || p.Event;
  let v;
  if (typeof m == "function")
    v = new m(e, l);
  else {
    v = p.document.createEvent(a);
    const {
      bubbles: A,
      cancelable: T,
      detail: $,
      ...f
    } = l;
    v.initEvent(e, A, T, $), Object.keys(f).forEach((C) => {
      v[C] = f[C];
    });
  }
  return ["dataTransfer", "clipboardData"].forEach((A) => {
    const T = l[A];
    typeof T == "object" && (typeof p.DataTransfer == "function" ? Object.defineProperty(v, A, {
      value: Object.getOwnPropertyNames(T).reduce(($, f) => (Object.defineProperty($, f, {
        value: T[f]
      }), $), new p.DataTransfer())
    }) : Object.defineProperty(v, A, {
      value: T
    }));
  }), v;
}
Object.keys(Mc).forEach((e) => {
  const {
    EventType: t,
    defaultInit: r
  } = Mc[e], n = e.toLowerCase();
  Kl[e] = (a, o) => Kl(n, a, o, {
    EventType: t,
    defaultInit: r
  }), wt[e] = (a, o) => wt(a, Kl[e](a, o));
});
function U1(e, t) {
  const {
    set: r
  } = Object.getOwnPropertyDescriptor(e, "value") || {}, n = Object.getPrototypeOf(e), {
    set: a
  } = Object.getOwnPropertyDescriptor(n, "value") || {};
  if (a && r !== a)
    a.call(e, t);
  else if (r)
    r.call(e, t);
  else
    throw new Error("The given element does not have a value setter");
}
Object.keys(Ic).forEach((e) => {
  const t = Ic[e];
  wt[e] = function() {
    return wt[t](...arguments);
  };
});
function H1(e) {
  return e.replace(/[ \t]*[\n][ \t]*/g, `
`);
}
function W1(e) {
  return Uq.compressToEncodedURIComponent(H1(e));
}
function z1(e) {
  return "https://testing-playground.com/#markup=" + W1(e);
}
const V1 = (e, t, r) => Array.isArray(e) ? e.forEach((n) => qc(n, t, r)) : qc(e, t, r), G1 = function(e) {
  if (e === void 0 && (e = pu().body), !e || !("innerHTML" in e)) {
    console.log("The element you're providing isn't a valid DOM element.");
    return;
  }
  if (!e.innerHTML) {
    console.log("The provided element doesn't have any children.");
    return;
  }
  const t = z1(e.innerHTML);
  return console.log(`Open this URL in your browser

` + t), t;
}, Nc = {
  debug: V1,
  logTestingPlaygroundURL: G1
}, b0 = typeof document < "u" && document.body ? dp(document.body, Bi, Nc) : Object.keys(Bi).reduce((e, t) => (e[t] = () => {
  throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, e), Nc), Y1 = typeof ke.act == "function" ? ke.act : Yp.act;
function pp() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}
function De(e) {
  pp().IS_REACT_ACT_ENVIRONMENT = e;
}
function yn() {
  return pp().IS_REACT_ACT_ENVIRONMENT;
}
function K1(e) {
  return (t) => {
    const r = yn();
    De(!0);
    try {
      let n = !1;
      const a = e(() => {
        const o = t();
        return o !== null && typeof o == "object" && typeof o.then == "function" && (n = !0), o;
      });
      if (n) {
        const o = a;
        return {
          then: (l, u) => {
            o.then((i) => {
              De(r), l(i);
            }, (i) => {
              De(r), u(i);
            });
          }
        };
      } else
        return De(r), a;
    } catch (n) {
      throw De(r), n;
    }
  };
}
const Ut = K1(Y1), re = function() {
  return wt(...arguments);
};
Object.keys(wt).forEach((e) => {
  re[e] = function() {
    return wt[e](...arguments);
  };
});
const X1 = re.mouseEnter, J1 = re.mouseLeave;
re.mouseEnter = function() {
  return X1(...arguments), re.mouseOver(...arguments);
};
re.mouseLeave = function() {
  return J1(...arguments), re.mouseOut(...arguments);
};
const Q1 = re.pointerEnter, Z1 = re.pointerLeave;
re.pointerEnter = function() {
  return Q1(...arguments), re.pointerOver(...arguments);
};
re.pointerLeave = function() {
  return Z1(...arguments), re.pointerOut(...arguments);
};
const e0 = re.select;
re.select = (e, t) => {
  e0(e, t), e.focus(), re.keyUp(e, t);
};
const t0 = re.blur, r0 = re.focus;
re.blur = function() {
  return re.focusOut(...arguments), t0(...arguments);
};
re.focus = function() {
  return re.focusIn(...arguments), r0(...arguments);
};
let Di = {
  reactStrictMode: !1
};
function mp() {
  return {
    ...Y(),
    ...Di
  };
}
function h0(e) {
  typeof e == "function" && (e = e(mp()));
  const {
    reactStrictMode: t,
    ...r
  } = e;
  Xf(r), Di = {
    ...Di,
    reactStrictMode: t
  };
}
function n0() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- No Object.hasOwn in all target environments we support.
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
Xf({
  unstable_advanceTimersWrapper: (e) => Ut(e),
  // We just want to run `waitFor` without IS_REACT_ACT_ENVIRONMENT
  // But that's not necessarily how `asyncWrapper` is used since it's a public method.
  // Let's just hope nobody else is using it.
  asyncWrapper: async (e) => {
    const t = yn();
    De(!1);
    try {
      const r = await e();
      return await new Promise((n) => {
        setTimeout(() => {
          n();
        }, 0), n0() && jest.advanceTimersByTime(0);
      }), r;
    } finally {
      De(t);
    }
  },
  eventWrapper: (e) => {
    let t;
    return Ut(() => {
      t = e();
    }), t;
  }
});
const ki = /* @__PURE__ */ new Set(), bn = [];
function Li(e) {
  return mp().reactStrictMode ? /* @__PURE__ */ ke.createElement(ke.StrictMode, null, e) : e;
}
function ji(e, t) {
  return t ? /* @__PURE__ */ ke.createElement(t, null, e) : e;
}
function a0(e, t) {
  let {
    hydrate: r,
    ui: n,
    wrapper: a
  } = t, o;
  return r ? Ut(() => {
    o = Jl(e, Li(ji(n, a)));
  }) : o = Ql(e), {
    hydrate() {
      if (!r)
        throw new Error("Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.");
    },
    render(l) {
      o.render(l);
    },
    unmount() {
      o.unmount();
    }
  };
}
function o0(e) {
  return {
    hydrate(t) {
      et.hydrate(t, e);
    },
    render(t) {
      et.render(t, e);
    },
    unmount() {
      et.unmountComponentAtNode(e);
    }
  };
}
function vp(e, t) {
  let {
    baseElement: r,
    container: n,
    hydrate: a,
    queries: o,
    root: l,
    wrapper: u
  } = t;
  return Ut(() => {
    a ? l.hydrate(Li(ji(e, u)), n) : l.render(Li(ji(e, u)), n);
  }), {
    container: n,
    baseElement: r,
    debug: function(i, s, p) {
      return i === void 0 && (i = r), Array.isArray(i) ? (
        // eslint-disable-next-line no-console
        i.forEach((m) => console.log(Ft(m, s, p)))
      ) : (
        // eslint-disable-next-line no-console,
        console.log(Ft(i, s, p))
      );
    },
    unmount: () => {
      Ut(() => {
        l.unmount();
      });
    },
    rerender: (i) => {
      vp(i, {
        container: n,
        baseElement: r,
        root: l,
        wrapper: u
      });
    },
    asFragment: () => {
      if (typeof document.createRange == "function")
        return document.createRange().createContextualFragment(n.innerHTML);
      {
        const i = document.createElement("template");
        return i.innerHTML = n.innerHTML, i.content;
      }
    },
    ...dp(r, o)
  };
}
function gu(e, t) {
  let {
    container: r,
    baseElement: n = r,
    legacyRoot: a = !1,
    queries: o,
    hydrate: l = !1,
    wrapper: u
  } = t === void 0 ? {} : t;
  if (a && typeof et.render != "function") {
    const s = new Error("`legacyRoot: true` is not supported in this version of React. Please use React 18 instead.");
    throw Error.captureStackTrace(s, gu), s;
  }
  n || (n = document.body), r || (r = n.appendChild(document.createElement("div")));
  let i;
  return ki.has(r) ? bn.forEach((s) => {
    s.container === r && (i = s.root);
  }) : (i = (a ? o0 : a0)(r, {
    hydrate: l,
    ui: e,
    wrapper: u
  }), bn.push({
    container: r,
    root: i
  }), ki.add(r)), vp(e, {
    container: r,
    baseElement: n,
    queries: o,
    hydrate: l,
    wrapper: u,
    root: i
  });
}
function Bc() {
  bn.forEach((e) => {
    let {
      root: t,
      container: r
    } = e;
    Ut(() => {
      t.unmount();
    }), r.parentNode === document.body && document.body.removeChild(r);
  }), bn.length = 0, ki.clear();
}
function yp(e, t) {
  t === void 0 && (t = {});
  const {
    initialProps: r,
    ...n
  } = t;
  if (n.legacyRoot && typeof et.render != "function") {
    const s = new Error("`legacyRoot: true` is not supported in this version of React. Please use React 18 instead.");
    throw Error.captureStackTrace(s, yp), s;
  }
  const a = /* @__PURE__ */ ke.createRef();
  function o(s) {
    let {
      renderCallbackProps: p
    } = s;
    const m = e(p);
    return ke.useEffect(() => {
      a.current = m;
    }), null;
  }
  const {
    rerender: l,
    unmount: u
  } = gu(/* @__PURE__ */ ke.createElement(o, {
    renderCallbackProps: r
  }), n);
  function i(s) {
    return l(/* @__PURE__ */ ke.createElement(o, {
      renderCallbackProps: s
    }));
  }
  return {
    result: a,
    rerender: i,
    unmount: u
  };
}
var Dc;
if ((typeof process > "u" || !((Dc = process.env) != null && Dc.RTL_SKIP_AUTO_CLEANUP)) && (typeof afterEach == "function" ? afterEach(() => {
  Bc();
}) : typeof teardown == "function" && teardown(() => {
  Bc();
}), typeof beforeAll == "function" && typeof afterAll == "function")) {
  let e = yn();
  beforeAll(() => {
    e = yn(), De(!0);
  }), afterAll(() => {
    De(e);
  });
}
const bp = ({ children: e }) => /* @__PURE__ */ Nu.jsx(Hp, { children: /* @__PURE__ */ Nu.jsx(Wp, { theme: "light", children: e }) }), g0 = (e, t) => gu(e, { wrapper: bp, ...t });
function E0(e, t) {
  return {
    ...yp(e, { wrapper: bp, ...t })
  };
}
export {
  Ut as act,
  dt as buildQueries,
  Bc as cleanup,
  h0 as configure,
  Kl as createEvent,
  m1 as findAllByAltText,
  o1 as findAllByDisplayValue,
  $x as findAllByLabelText,
  Hx as findAllByPlaceholderText,
  $1 as findAllByRole,
  j1 as findAllByTestId,
  Jx as findAllByText,
  C1 as findAllByTitle,
  v1 as findByAltText,
  l1 as findByDisplayValue,
  Mx as findByLabelText,
  Wx as findByPlaceholderText,
  M1 as findByRole,
  F1 as findByTestId,
  Qx as findByText,
  P1 as findByTitle,
  re as fireEvent,
  f1 as getAllByAltText,
  n1 as getAllByDisplayValue,
  Ix as getAllByLabelText,
  Fx as getAllByPlaceholderText,
  x1 as getAllByRole,
  k1 as getAllByTestId,
  Kx as getAllByText,
  R1 as getAllByTitle,
  p1 as getByAltText,
  a1 as getByDisplayValue,
  Nx as getByLabelText,
  Ux as getByPlaceholderText,
  A1 as getByRole,
  L1 as getByTestId,
  Xx as getByText,
  w1 as getByTitle,
  mp as getConfig,
  tp as getDefaultNormalizer,
  yu as getElementError,
  bu as getMultipleElementsFoundError,
  ol as getNodeText,
  dp as getQueriesForElement,
  px as getRoles,
  Oi as getSuggestedQuery,
  mu as isInaccessible,
  qc as logDOM,
  m0 as logRoles,
  hr as makeFindQuery,
  ip as makeGetAllQuery,
  br as makeSingleQuery,
  Ft as prettyDOM,
  p0 as prettyFormat,
  Bi as queries,
  c1 as queryAllByAltText,
  Gt as queryAllByAttribute,
  t1 as queryAllByDisplayValue,
  Bx as queryAllByLabelText,
  Lx as queryAllByPlaceholderText,
  O1 as queryAllByRole,
  B1 as queryAllByTestId,
  Gx as queryAllByText,
  g1 as queryAllByTitle,
  d1 as queryByAltText,
  Tx as queryByAttribute,
  r1 as queryByDisplayValue,
  Ax as queryByLabelText,
  jx as queryByPlaceholderText,
  q1 as queryByRole,
  D1 as queryByTestId,
  Yx as queryByText,
  E1 as queryByTitle,
  v0 as queryHelpers,
  g0 as render,
  E0 as renderHook,
  b0 as screen,
  op as waitFor,
  y0 as waitForElementToBeRemoved,
  dp as within,
  ye as wrapAllByQueryWithSuggestion,
  Et as wrapSingleQueryWithSuggestion
};
