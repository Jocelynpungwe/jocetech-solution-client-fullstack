var nx=Object.defineProperty;var ix=(e,t,r)=>t in e?nx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ox=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var gu=(e,t,r)=>(ix(e,typeof t!="symbol"?t+"":t,r),r);var fb=ox((hb,Ra)=>{function sx(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function Vm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gm={exports:{}},_l={},qm={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rs=Symbol.for("react.element"),ax=Symbol.for("react.portal"),lx=Symbol.for("react.fragment"),ux=Symbol.for("react.strict_mode"),cx=Symbol.for("react.profiler"),dx=Symbol.for("react.provider"),fx=Symbol.for("react.context"),px=Symbol.for("react.forward_ref"),hx=Symbol.for("react.suspense"),mx=Symbol.for("react.memo"),gx=Symbol.for("react.lazy"),kp=Symbol.iterator;function yx(e){return e===null||typeof e!="object"?null:(e=kp&&e[kp]||e["@@iterator"],typeof e=="function"?e:null)}var Km={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qm=Object.assign,Zm={};function Ii(e,t,r){this.props=e,this.context=t,this.refs=Zm,this.updater=r||Km}Ii.prototype.isReactComponent={};Ii.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ii.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jm(){}Jm.prototype=Ii.prototype;function Id(e,t,r){this.props=e,this.context=t,this.refs=Zm,this.updater=r||Km}var Fd=Id.prototype=new Jm;Fd.constructor=Id;Qm(Fd,Ii.prototype);Fd.isPureReactComponent=!0;var Cp=Array.isArray,Xm=Object.prototype.hasOwnProperty,$d={current:null},e0={key:!0,ref:!0,__self:!0,__source:!0};function t0(e,t,r){var n,i={},o=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Xm.call(t,n)&&!e0.hasOwnProperty(n)&&(i[n]=t[n]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)i[n]===void 0&&(i[n]=a[n]);return{$$typeof:rs,type:e,key:o,ref:s,props:i,_owner:$d.current}}function vx(e,t){return{$$typeof:rs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ud(e){return typeof e=="object"&&e!==null&&e.$$typeof===rs}function xx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ep=/\/+/g;function yu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xx(""+e.key):t.toString(36)}function Gs(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case rs:case ax:s=!0}}if(s)return s=e,i=i(s),e=n===""?"."+yu(s,0):n,Cp(i)?(r="",e!=null&&(r=e.replace(Ep,"$&/")+"/"),Gs(i,t,r,"",function(c){return c})):i!=null&&(Ud(i)&&(i=vx(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ep,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=n===""?".":n+":",Cp(e))for(var a=0;a<e.length;a++){o=e[a];var l=n+yu(o,a);s+=Gs(o,t,r,l,i)}else if(l=yx(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=n+yu(o,a++),s+=Gs(o,t,r,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function xs(e,t,r){if(e==null)return e;var n=[],i=0;return Gs(e,n,"","",function(o){return t.call(r,o,i++)}),n}function wx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var nt={current:null},qs={transition:null},Sx={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:qs,ReactCurrentOwner:$d};function r0(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:xs,forEach:function(e,t,r){xs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return xs(e,function(){t++}),t},toArray:function(e){return xs(e,function(t){return t})||[]},only:function(e){if(!Ud(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Ii;G.Fragment=lx;G.Profiler=cx;G.PureComponent=Id;G.StrictMode=ux;G.Suspense=hx;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sx;G.act=r0;G.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Qm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=$d.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Xm.call(t,l)&&!e0.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];n.children=a}return{$$typeof:rs,type:e.type,key:i,ref:o,props:n,_owner:s}};G.createContext=function(e){return e={$$typeof:fx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dx,_context:e},e.Consumer=e};G.createElement=t0;G.createFactory=function(e){var t=t0.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:px,render:e}};G.isValidElement=Ud;G.lazy=function(e){return{$$typeof:gx,_payload:{_status:-1,_result:e},_init:wx}};G.memo=function(e,t){return{$$typeof:mx,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=qs.transition;qs.transition={};try{e()}finally{qs.transition=t}};G.unstable_act=r0;G.useCallback=function(e,t){return nt.current.useCallback(e,t)};G.useContext=function(e){return nt.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return nt.current.useDeferredValue(e)};G.useEffect=function(e,t){return nt.current.useEffect(e,t)};G.useId=function(){return nt.current.useId()};G.useImperativeHandle=function(e,t,r){return nt.current.useImperativeHandle(e,t,r)};G.useInsertionEffect=function(e,t){return nt.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return nt.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return nt.current.useMemo(e,t)};G.useReducer=function(e,t,r){return nt.current.useReducer(e,t,r)};G.useRef=function(e){return nt.current.useRef(e)};G.useState=function(e){return nt.current.useState(e)};G.useSyncExternalStore=function(e,t,r){return nt.current.useSyncExternalStore(e,t,r)};G.useTransition=function(){return nt.current.useTransition()};G.version="18.3.1";qm.exports=G;var b=qm.exports;const M=Vm(b),cc=sx({__proto__:null,default:M},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x=b,kx=Symbol.for("react.element"),Cx=Symbol.for("react.fragment"),Ex=Object.prototype.hasOwnProperty,jx=_x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bx={key:!0,ref:!0,__self:!0,__source:!0};function n0(e,t,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Ex.call(t,n)&&!bx.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:kx,type:e,key:o,ref:s,props:i,_owner:jx.current}}_l.Fragment=Cx;_l.jsx=n0;_l.jsxs=n0;Gm.exports=_l;var u=Gm.exports,dc={},i0={exports:{}},jt={},o0={exports:{}},s0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,z){var F=O.length;O.push(z);e:for(;0<F;){var U=F-1>>>1,V=O[U];if(0<i(V,z))O[U]=z,O[F]=V,F=U;else break e}}function r(O){return O.length===0?null:O[0]}function n(O){if(O.length===0)return null;var z=O[0],F=O.pop();if(F!==z){O[0]=F;e:for(var U=0,V=O.length,be=V>>>1;U<be;){var ge=2*(U+1)-1,Me=O[ge],ke=ge+1,Xe=O[ke];if(0>i(Me,F))ke<V&&0>i(Xe,Me)?(O[U]=Xe,O[ke]=F,U=ke):(O[U]=Me,O[ge]=F,U=ge);else if(ke<V&&0>i(Xe,F))O[U]=Xe,O[ke]=F,U=ke;else break e}}return z}function i(O,z){var F=O.sortIndex-z.sortIndex;return F!==0?F:O.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,f=null,p=3,x=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var z=r(c);z!==null;){if(z.callback===null)n(c);else if(z.startTime<=O)n(c),z.sortIndex=z.expirationTime,t(l,z);else break;z=r(c)}}function w(O){if(v=!1,m(O),!y)if(r(l)!==null)y=!0,Pt(j);else{var z=r(c);z!==null&&oe(w,z.startTime-O)}}function j(O,z){y=!1,v&&(v=!1,g(k),k=-1),x=!0;var F=p;try{for(m(z),f=r(l);f!==null&&(!(f.expirationTime>z)||O&&!ee());){var U=f.callback;if(typeof U=="function"){f.callback=null,p=f.priorityLevel;var V=U(f.expirationTime<=z);z=e.unstable_now(),typeof V=="function"?f.callback=V:f===r(l)&&n(l),m(z)}else n(l);f=r(l)}if(f!==null)var be=!0;else{var ge=r(c);ge!==null&&oe(w,ge.startTime-z),be=!1}return be}finally{f=null,p=F,x=!1}}var E=!1,_=null,k=-1,T=5,A=-1;function ee(){return!(e.unstable_now()-A<T)}function _e(){if(_!==null){var O=e.unstable_now();A=O;var z=!0;try{z=_(!0,O)}finally{z?Ve():(E=!1,_=null)}}else E=!1}var Ve;if(typeof h=="function")Ve=function(){h(_e)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,ae=Ge.port2;Ge.port1.onmessage=_e,Ve=function(){ae.postMessage(null)}}else Ve=function(){S(_e,0)};function Pt(O){_=O,E||(E=!0,Ve())}function oe(O,z){k=S(function(){O(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Pt(j))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(O){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var F=p;p=z;try{return O()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var F=p;p=O;try{return z()}finally{p=F}},e.unstable_scheduleCallback=function(O,z,F){var U=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?U+F:U):F=U,O){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=F+V,O={id:d++,callback:z,priorityLevel:O,startTime:F,expirationTime:V,sortIndex:-1},F>U?(O.sortIndex=F,t(c,O),r(l)===null&&O===r(c)&&(v?(g(k),k=-1):v=!0,oe(w,F-U))):(O.sortIndex=V,t(l,O),y||x||(y=!0,Pt(j))),O},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(O){var z=p;return function(){var F=p;p=z;try{return O.apply(this,arguments)}finally{p=F}}}})(s0);o0.exports=s0;var Nx=o0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Px=b,kt=Nx;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a0=new Set,bo={};function Vn(e,t){Ci(e,t),Ci(e+"Capture",t)}function Ci(e,t){for(bo[e]=t,e=0;e<t.length;e++)a0.add(t[e])}var br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fc=Object.prototype.hasOwnProperty,Ox=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jp={},bp={};function Rx(e){return fc.call(bp,e)?!0:fc.call(jp,e)?!1:Ox.test(e)?bp[e]=!0:(jp[e]=!0,!1)}function Tx(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mx(e,t,r,n){if(t===null||typeof t>"u"||Tx(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,r,n,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function Yd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wd,Yd);He[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wd,Yd);He[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wd,Yd);He[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bd(e,t,r,n){var i=He.hasOwnProperty(t)?He[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mx(t,r,i,n)&&(r=null),n||i===null?Rx(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Mr=Px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ws=Symbol.for("react.element"),ti=Symbol.for("react.portal"),ri=Symbol.for("react.fragment"),Hd=Symbol.for("react.strict_mode"),pc=Symbol.for("react.profiler"),l0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),Vd=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),mc=Symbol.for("react.suspense_list"),Gd=Symbol.for("react.memo"),$r=Symbol.for("react.lazy"),c0=Symbol.for("react.offscreen"),Np=Symbol.iterator;function qi(e){return e===null||typeof e!="object"?null:(e=Np&&e[Np]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,vu;function ao(e){if(vu===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);vu=t&&t[1]||""}return`
`+vu+e}var xu=!1;function wu(e,t){if(!e||xu)return"";xu=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=n.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{xu=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ao(e):""}function Dx(e){switch(e.tag){case 5:return ao(e.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return e=wu(e.type,!1),e;case 11:return e=wu(e.type.render,!1),e;case 1:return e=wu(e.type,!0),e;default:return""}}function gc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ri:return"Fragment";case ti:return"Portal";case pc:return"Profiler";case Hd:return"StrictMode";case hc:return"Suspense";case mc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case u0:return(e.displayName||"Context")+".Consumer";case l0:return(e._context.displayName||"Context")+".Provider";case Vd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gd:return t=e.displayName||null,t!==null?t:gc(e.type)||"Memo";case $r:t=e._payload,e=e._init;try{return gc(e(t))}catch{}}return null}function Lx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gc(t);case 8:return t===Hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function d0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zx(e){var t=d0(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ss(e){e._valueTracker||(e._valueTracker=zx(e))}function f0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=d0(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ta(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yc(e,t){var r=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Pp(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=an(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function p0(e,t){t=t.checked,t!=null&&Bd(e,"checked",t,!1)}function vc(e,t){p0(e,t);var r=an(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xc(e,t.type,r):t.hasOwnProperty("defaultValue")&&xc(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Op(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function xc(e,t,r){(t!=="number"||Ta(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var lo=Array.isArray;function mi(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+an(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function wc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rp(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(N(92));if(lo(r)){if(1<r.length)throw Error(N(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:an(r)}}function h0(e,t){var r=an(t.value),n=an(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Tp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function m0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?m0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _s,g0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_s=_s||document.createElement("div"),_s.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_s.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function No(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ax=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(e){Ax.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ho[t]=ho[e]})});function y0(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ho.hasOwnProperty(e)&&ho[e]?(""+t).trim():t+"px"}function v0(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=y0(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Ix=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _c(e,t){if(t){if(Ix[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function kc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cc=null;function qd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ec=null,gi=null,yi=null;function Mp(e){if(e=os(e)){if(typeof Ec!="function")throw Error(N(280));var t=e.stateNode;t&&(t=bl(t),Ec(e.stateNode,e.type,t))}}function x0(e){gi?yi?yi.push(e):yi=[e]:gi=e}function w0(){if(gi){var e=gi,t=yi;if(yi=gi=null,Mp(e),t)for(e=0;e<t.length;e++)Mp(t[e])}}function S0(e,t){return e(t)}function _0(){}var Su=!1;function k0(e,t,r){if(Su)return e(t,r);Su=!0;try{return S0(e,t,r)}finally{Su=!1,(gi!==null||yi!==null)&&(_0(),w0())}}function Po(e,t){var r=e.stateNode;if(r===null)return null;var n=bl(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(N(231,t,typeof r));return r}var jc=!1;if(br)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){jc=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{jc=!1}function Fx(e,t,r,n,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(d){this.onError(d)}}var mo=!1,Ma=null,Da=!1,bc=null,$x={onError:function(e){mo=!0,Ma=e}};function Ux(e,t,r,n,i,o,s,a,l){mo=!1,Ma=null,Fx.apply($x,arguments)}function Wx(e,t,r,n,i,o,s,a,l){if(Ux.apply(this,arguments),mo){if(mo){var c=Ma;mo=!1,Ma=null}else throw Error(N(198));Da||(Da=!0,bc=c)}}function Gn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function C0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dp(e){if(Gn(e)!==e)throw Error(N(188))}function Yx(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Dp(i),e;if(o===n)return Dp(i),t;o=o.sibling}throw Error(N(188))}if(r.return!==n.return)r=i,n=o;else{for(var s=!1,a=i.child;a;){if(a===r){s=!0,r=i,n=o;break}if(a===n){s=!0,n=i,r=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===r){s=!0,r=o,n=i;break}if(a===n){s=!0,n=o,r=i;break}a=a.sibling}if(!s)throw Error(N(189))}}if(r.alternate!==n)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?e:t}function E0(e){return e=Yx(e),e!==null?j0(e):null}function j0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=j0(e);if(t!==null)return t;e=e.sibling}return null}var b0=kt.unstable_scheduleCallback,Lp=kt.unstable_cancelCallback,Bx=kt.unstable_shouldYield,Hx=kt.unstable_requestPaint,Ee=kt.unstable_now,Vx=kt.unstable_getCurrentPriorityLevel,Kd=kt.unstable_ImmediatePriority,N0=kt.unstable_UserBlockingPriority,La=kt.unstable_NormalPriority,Gx=kt.unstable_LowPriority,P0=kt.unstable_IdlePriority,kl=null,ur=null;function qx(e){if(ur&&typeof ur.onCommitFiberRoot=="function")try{ur.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:Zx,Kx=Math.log,Qx=Math.LN2;function Zx(e){return e>>>=0,e===0?32:31-(Kx(e)/Qx|0)|0}var ks=64,Cs=4194304;function uo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function za(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,s=r&268435455;if(s!==0){var a=s&~i;a!==0?n=uo(a):(o&=s,o!==0&&(n=uo(o)))}else s=r&~i,s!==0?n=uo(s):o!==0&&(n=uo(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-qt(t),i=1<<r,n|=e[r],t&=~i;return n}function Jx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xx(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-qt(o),a=1<<s,l=i[s];l===-1?(!(a&r)||a&n)&&(i[s]=Jx(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Nc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function O0(){var e=ks;return ks<<=1,!(ks&4194240)&&(ks=64),e}function _u(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ns(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qt(t),e[t]=r}function e2(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-qt(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function Qd(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-qt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var re=0;function R0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var T0,Zd,M0,D0,L0,Pc=!1,Es=[],Qr=null,Zr=null,Jr=null,Oo=new Map,Ro=new Map,Wr=[],t2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(e,t){switch(e){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":Oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(t.pointerId)}}function Qi(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=os(t),t!==null&&Zd(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function r2(e,t,r,n,i){switch(t){case"focusin":return Qr=Qi(Qr,e,t,r,n,i),!0;case"dragenter":return Zr=Qi(Zr,e,t,r,n,i),!0;case"mouseover":return Jr=Qi(Jr,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Oo.set(o,Qi(Oo.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Ro.set(o,Qi(Ro.get(o)||null,e,t,r,n,i)),!0}return!1}function z0(e){var t=kn(e.target);if(t!==null){var r=Gn(t);if(r!==null){if(t=r.tag,t===13){if(t=C0(r),t!==null){e.blockedOn=t,L0(e.priority,function(){M0(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Oc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Cc=n,r.target.dispatchEvent(n),Cc=null}else return t=os(r),t!==null&&Zd(t),e.blockedOn=r,!1;t.shift()}return!0}function Ap(e,t,r){Ks(e)&&r.delete(t)}function n2(){Pc=!1,Qr!==null&&Ks(Qr)&&(Qr=null),Zr!==null&&Ks(Zr)&&(Zr=null),Jr!==null&&Ks(Jr)&&(Jr=null),Oo.forEach(Ap),Ro.forEach(Ap)}function Zi(e,t){e.blockedOn===t&&(e.blockedOn=null,Pc||(Pc=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,n2)))}function To(e){function t(i){return Zi(i,e)}if(0<Es.length){Zi(Es[0],e);for(var r=1;r<Es.length;r++){var n=Es[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Qr!==null&&Zi(Qr,e),Zr!==null&&Zi(Zr,e),Jr!==null&&Zi(Jr,e),Oo.forEach(t),Ro.forEach(t),r=0;r<Wr.length;r++)n=Wr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Wr.length&&(r=Wr[0],r.blockedOn===null);)z0(r),r.blockedOn===null&&Wr.shift()}var vi=Mr.ReactCurrentBatchConfig,Aa=!0;function i2(e,t,r,n){var i=re,o=vi.transition;vi.transition=null;try{re=1,Jd(e,t,r,n)}finally{re=i,vi.transition=o}}function o2(e,t,r,n){var i=re,o=vi.transition;vi.transition=null;try{re=4,Jd(e,t,r,n)}finally{re=i,vi.transition=o}}function Jd(e,t,r,n){if(Aa){var i=Oc(e,t,r,n);if(i===null)Tu(e,t,n,Ia,r),zp(e,n);else if(r2(i,e,t,r,n))n.stopPropagation();else if(zp(e,n),t&4&&-1<t2.indexOf(e)){for(;i!==null;){var o=os(i);if(o!==null&&T0(o),o=Oc(e,t,r,n),o===null&&Tu(e,t,n,Ia,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Tu(e,t,n,null,r)}}var Ia=null;function Oc(e,t,r,n){if(Ia=null,e=qd(n),e=kn(e),e!==null)if(t=Gn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=C0(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ia=e,null}function A0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vx()){case Kd:return 1;case N0:return 4;case La:case Gx:return 16;case P0:return 536870912;default:return 16}default:return 16}}var Br=null,Xd=null,Qs=null;function I0(){if(Qs)return Qs;var e,t=Xd,r=t.length,n,i="value"in Br?Br.value:Br.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===i[o-n];n++);return Qs=i.slice(e,1<n?1-n:void 0)}function Zs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function js(){return!0}function Ip(){return!1}function bt(e){function t(r,n,i,o,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?js:Ip,this.isPropagationStopped=Ip,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=js)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=js)},persist:function(){},isPersistent:js}),t}var Fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=bt(Fi),is=we({},Fi,{view:0,detail:0}),s2=bt(is),ku,Cu,Ji,Cl=we({},is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ji&&(Ji&&e.type==="mousemove"?(ku=e.screenX-Ji.screenX,Cu=e.screenY-Ji.screenY):Cu=ku=0,Ji=e),ku)},movementY:function(e){return"movementY"in e?e.movementY:Cu}}),Fp=bt(Cl),a2=we({},Cl,{dataTransfer:0}),l2=bt(a2),u2=we({},is,{relatedTarget:0}),Eu=bt(u2),c2=we({},Fi,{animationName:0,elapsedTime:0,pseudoElement:0}),d2=bt(c2),f2=we({},Fi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),p2=bt(f2),h2=we({},Fi,{data:0}),$p=bt(h2),m2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=y2[e])?!!t[e]:!1}function tf(){return v2}var x2=we({},is,{key:function(e){if(e.key){var t=m2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?g2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(e){return e.type==="keypress"?Zs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),w2=bt(x2),S2=we({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=bt(S2),_2=we({},is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),k2=bt(_2),C2=we({},Fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),E2=bt(C2),j2=we({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b2=bt(j2),N2=[9,13,27,32],rf=br&&"CompositionEvent"in window,go=null;br&&"documentMode"in document&&(go=document.documentMode);var P2=br&&"TextEvent"in window&&!go,F0=br&&(!rf||go&&8<go&&11>=go),Wp=" ",Yp=!1;function $0(e,t){switch(e){case"keyup":return N2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ni=!1;function O2(e,t){switch(e){case"compositionend":return U0(t);case"keypress":return t.which!==32?null:(Yp=!0,Wp);case"textInput":return e=t.data,e===Wp&&Yp?null:e;default:return null}}function R2(e,t){if(ni)return e==="compositionend"||!rf&&$0(e,t)?(e=I0(),Qs=Xd=Br=null,ni=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return F0&&t.locale!=="ko"?null:t.data;default:return null}}var T2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!T2[e.type]:t==="textarea"}function W0(e,t,r,n){x0(n),t=Fa(t,"onChange"),0<t.length&&(r=new ef("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var yo=null,Mo=null;function M2(e){X0(e,0)}function El(e){var t=si(e);if(f0(t))return e}function D2(e,t){if(e==="change")return t}var Y0=!1;if(br){var ju;if(br){var bu="oninput"in document;if(!bu){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),bu=typeof Hp.oninput=="function"}ju=bu}else ju=!1;Y0=ju&&(!document.documentMode||9<document.documentMode)}function Vp(){yo&&(yo.detachEvent("onpropertychange",B0),Mo=yo=null)}function B0(e){if(e.propertyName==="value"&&El(Mo)){var t=[];W0(t,Mo,e,qd(e)),k0(M2,t)}}function L2(e,t,r){e==="focusin"?(Vp(),yo=t,Mo=r,yo.attachEvent("onpropertychange",B0)):e==="focusout"&&Vp()}function z2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(Mo)}function A2(e,t){if(e==="click")return El(t)}function I2(e,t){if(e==="input"||e==="change")return El(t)}function F2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:F2;function Do(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!fc.call(t,i)||!Jt(e[i],t[i]))return!1}return!0}function Gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qp(e,t){var r=Gp(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Gp(r)}}function H0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?H0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function V0(){for(var e=window,t=Ta();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ta(e.document)}return t}function nf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $2(e){var t=V0(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&H0(r.ownerDocument.documentElement,r)){if(n!==null&&nf(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=qp(r,o);var s=qp(r,n);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var U2=br&&"documentMode"in document&&11>=document.documentMode,ii=null,Rc=null,vo=null,Tc=!1;function Kp(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Tc||ii==null||ii!==Ta(n)||(n=ii,"selectionStart"in n&&nf(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),vo&&Do(vo,n)||(vo=n,n=Fa(Rc,"onSelect"),0<n.length&&(t=new ef("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=ii)))}function bs(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var oi={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionend:bs("Transition","TransitionEnd")},Nu={},G0={};br&&(G0=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function jl(e){if(Nu[e])return Nu[e];if(!oi[e])return e;var t=oi[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in G0)return Nu[e]=t[r];return e}var q0=jl("animationend"),K0=jl("animationiteration"),Q0=jl("animationstart"),Z0=jl("transitionend"),J0=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){J0.set(e,t),Vn(t,[e])}for(var Pu=0;Pu<Qp.length;Pu++){var Ou=Qp[Pu],W2=Ou.toLowerCase(),Y2=Ou[0].toUpperCase()+Ou.slice(1);dn(W2,"on"+Y2)}dn(q0,"onAnimationEnd");dn(K0,"onAnimationIteration");dn(Q0,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(Z0,"onTransitionEnd");Ci("onMouseEnter",["mouseout","mouseover"]);Ci("onMouseLeave",["mouseout","mouseover"]);Ci("onPointerEnter",["pointerout","pointerover"]);Ci("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B2=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Zp(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Wx(n,t,void 0,e),e.currentTarget=null}function X0(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var s=n.length-1;0<=s;s--){var a=n[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Zp(i,a,c),o=l}else for(s=0;s<n.length;s++){if(a=n[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Zp(i,a,c),o=l}}}if(Da)throw e=bc,Da=!1,bc=null,e}function le(e,t){var r=t[Ac];r===void 0&&(r=t[Ac]=new Set);var n=e+"__bubble";r.has(n)||(e1(t,e,2,!1),r.add(n))}function Ru(e,t,r){var n=0;t&&(n|=4),e1(r,e,n,t)}var Ns="_reactListening"+Math.random().toString(36).slice(2);function Lo(e){if(!e[Ns]){e[Ns]=!0,a0.forEach(function(r){r!=="selectionchange"&&(B2.has(r)||Ru(r,!1,e),Ru(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ns]||(t[Ns]=!0,Ru("selectionchange",!1,t))}}function e1(e,t,r,n){switch(A0(t)){case 1:var i=i2;break;case 4:i=o2;break;default:i=Jd}r=i.bind(null,t,r,e),i=void 0,!jc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Tu(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var a=n.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=kn(a),s===null)return;if(l=s.tag,l===5||l===6){n=o=s;continue e}a=a.parentNode}}n=n.return}k0(function(){var c=o,d=qd(r),f=[];e:{var p=J0.get(e);if(p!==void 0){var x=ef,y=e;switch(e){case"keypress":if(Zs(r)===0)break e;case"keydown":case"keyup":x=w2;break;case"focusin":y="focus",x=Eu;break;case"focusout":y="blur",x=Eu;break;case"beforeblur":case"afterblur":x=Eu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=l2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=k2;break;case q0:case K0:case Q0:x=d2;break;case Z0:x=E2;break;case"scroll":x=s2;break;case"wheel":x=b2;break;case"copy":case"cut":case"paste":x=p2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Up}var v=(t&4)!==0,S=!v&&e==="scroll",g=v?p!==null?p+"Capture":null:p;v=[];for(var h=c,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=Po(h,g),w!=null&&v.push(zo(h,w,m)))),S)break;h=h.return}0<v.length&&(p=new x(p,y,null,r,d),f.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&r!==Cc&&(y=r.relatedTarget||r.fromElement)&&(kn(y)||y[Nr]))break e;if((x||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,x?(y=r.relatedTarget||r.toElement,x=c,y=y?kn(y):null,y!==null&&(S=Gn(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(v=Fp,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Up,w="onPointerLeave",g="onPointerEnter",h="pointer"),S=x==null?p:si(x),m=y==null?p:si(y),p=new v(w,h+"leave",x,r,d),p.target=S,p.relatedTarget=m,w=null,kn(d)===c&&(v=new v(g,h+"enter",y,r,d),v.target=m,v.relatedTarget=S,w=v),S=w,x&&y)t:{for(v=x,g=y,h=0,m=v;m;m=Zn(m))h++;for(m=0,w=g;w;w=Zn(w))m++;for(;0<h-m;)v=Zn(v),h--;for(;0<m-h;)g=Zn(g),m--;for(;h--;){if(v===g||g!==null&&v===g.alternate)break t;v=Zn(v),g=Zn(g)}v=null}else v=null;x!==null&&Jp(f,p,x,v,!1),y!==null&&S!==null&&Jp(f,S,y,v,!0)}}e:{if(p=c?si(c):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var j=D2;else if(Bp(p))if(Y0)j=I2;else{j=z2;var E=L2}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=A2);if(j&&(j=j(e,c))){W0(f,j,r,d);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&xc(p,"number",p.value)}switch(E=c?si(c):window,e){case"focusin":(Bp(E)||E.contentEditable==="true")&&(ii=E,Rc=c,vo=null);break;case"focusout":vo=Rc=ii=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,Kp(f,r,d);break;case"selectionchange":if(U2)break;case"keydown":case"keyup":Kp(f,r,d)}var _;if(rf)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else ni?$0(e,r)&&(k="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(k="onCompositionStart");k&&(F0&&r.locale!=="ko"&&(ni||k!=="onCompositionStart"?k==="onCompositionEnd"&&ni&&(_=I0()):(Br=d,Xd="value"in Br?Br.value:Br.textContent,ni=!0)),E=Fa(c,k),0<E.length&&(k=new $p(k,e,null,r,d),f.push({event:k,listeners:E}),_?k.data=_:(_=U0(r),_!==null&&(k.data=_)))),(_=P2?O2(e,r):R2(e,r))&&(c=Fa(c,"onBeforeInput"),0<c.length&&(d=new $p("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:c}),d.data=_))}X0(f,t)})}function zo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Fa(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Po(e,r),o!=null&&n.unshift(zo(e,o,i)),o=Po(e,t),o!=null&&n.push(zo(e,o,i))),e=e.return}return n}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jp(e,t,r,n,i){for(var o=t._reactName,s=[];r!==null&&r!==n;){var a=r,l=a.alternate,c=a.stateNode;if(l!==null&&l===n)break;a.tag===5&&c!==null&&(a=c,i?(l=Po(r,o),l!=null&&s.unshift(zo(r,l,a))):i||(l=Po(r,o),l!=null&&s.push(zo(r,l,a)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var H2=/\r\n?/g,V2=/\u0000|\uFFFD/g;function Xp(e){return(typeof e=="string"?e:""+e).replace(H2,`
`).replace(V2,"")}function Ps(e,t,r){if(t=Xp(t),Xp(e)!==t&&r)throw Error(N(425))}function $a(){}var Mc=null,Dc=null;function Lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,G2=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,q2=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(e){return eh.resolve(null).then(e).catch(K2)}:zc;function K2(e){setTimeout(function(){throw e})}function Mu(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),To(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);To(t)}function Xr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function th(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var $i=Math.random().toString(36).slice(2),ar="__reactFiber$"+$i,Ao="__reactProps$"+$i,Nr="__reactContainer$"+$i,Ac="__reactEvents$"+$i,Q2="__reactListeners$"+$i,Z2="__reactHandles$"+$i;function kn(e){var t=e[ar];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Nr]||r[ar]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=th(e);e!==null;){if(r=e[ar])return r;e=th(e)}return t}e=r,r=e.parentNode}return null}function os(e){return e=e[ar]||e[Nr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function si(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function bl(e){return e[Ao]||null}var Ic=[],ai=-1;function fn(e){return{current:e}}function ce(e){0>ai||(e.current=Ic[ai],Ic[ai]=null,ai--)}function se(e,t){ai++,Ic[ai]=e.current,e.current=t}var ln={},Je=fn(ln),dt=fn(!1),An=ln;function Ei(e,t){var r=e.type.contextTypes;if(!r)return ln;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ft(e){return e=e.childContextTypes,e!=null}function Ua(){ce(dt),ce(Je)}function rh(e,t,r){if(Je.current!==ln)throw Error(N(168));se(Je,t),se(dt,r)}function t1(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(N(108,Lx(e)||"Unknown",i));return we({},r,n)}function Wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,An=Je.current,se(Je,e),se(dt,dt.current),!0}function nh(e,t,r){var n=e.stateNode;if(!n)throw Error(N(169));r?(e=t1(e,t,An),n.__reactInternalMemoizedMergedChildContext=e,ce(dt),ce(Je),se(Je,e)):ce(dt),se(dt,r)}var vr=null,Nl=!1,Du=!1;function r1(e){vr===null?vr=[e]:vr.push(e)}function J2(e){Nl=!0,r1(e)}function pn(){if(!Du&&vr!==null){Du=!0;var e=0,t=re;try{var r=vr;for(re=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}vr=null,Nl=!1}catch(i){throw vr!==null&&(vr=vr.slice(e+1)),b0(Kd,pn),i}finally{re=t,Du=!1}}return null}var li=[],ui=0,Ya=null,Ba=0,Ot=[],Rt=0,In=null,xr=1,wr="";function xn(e,t){li[ui++]=Ba,li[ui++]=Ya,Ya=e,Ba=t}function n1(e,t,r){Ot[Rt++]=xr,Ot[Rt++]=wr,Ot[Rt++]=In,In=e;var n=xr;e=wr;var i=32-qt(n)-1;n&=~(1<<i),r+=1;var o=32-qt(t)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,xr=1<<32-qt(t)+i|r<<i|n,wr=o+e}else xr=1<<o|r<<i|n,wr=e}function of(e){e.return!==null&&(xn(e,1),n1(e,1,0))}function sf(e){for(;e===Ya;)Ya=li[--ui],li[ui]=null,Ba=li[--ui],li[ui]=null;for(;e===In;)In=Ot[--Rt],Ot[Rt]=null,wr=Ot[--Rt],Ot[Rt]=null,xr=Ot[--Rt],Ot[Rt]=null}var _t=null,xt=null,he=!1,Ht=null;function i1(e,t){var r=Mt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ih(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_t=e,xt=Xr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_t=e,xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=In!==null?{id:xr,overflow:wr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Mt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,_t=e,xt=null,!0):!1;default:return!1}}function Fc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $c(e){if(he){var t=xt;if(t){var r=t;if(!ih(e,t)){if(Fc(e))throw Error(N(418));t=Xr(r.nextSibling);var n=_t;t&&ih(e,t)?i1(n,r):(e.flags=e.flags&-4097|2,he=!1,_t=e)}}else{if(Fc(e))throw Error(N(418));e.flags=e.flags&-4097|2,he=!1,_t=e}}}function oh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_t=e}function Os(e){if(e!==_t)return!1;if(!he)return oh(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lc(e.type,e.memoizedProps)),t&&(t=xt)){if(Fc(e))throw o1(),Error(N(418));for(;t;)i1(e,t),t=Xr(t.nextSibling)}if(oh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){xt=Xr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}xt=null}}else xt=_t?Xr(e.stateNode.nextSibling):null;return!0}function o1(){for(var e=xt;e;)e=Xr(e.nextSibling)}function ji(){xt=_t=null,he=!1}function af(e){Ht===null?Ht=[e]:Ht.push(e)}var X2=Mr.ReactCurrentBatchConfig;function Xi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var n=r.stateNode}if(!n)throw Error(N(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,e))}return e}function Rs(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sh(e){var t=e._init;return t(e._payload)}function s1(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function r(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function n(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=nn(g,h),g.index=0,g.sibling=null,g}function o(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,h,m,w){return h===null||h.tag!==6?(h=Uu(m,g.mode,w),h.return=g,h):(h=i(h,m),h.return=g,h)}function l(g,h,m,w){var j=m.type;return j===ri?d(g,h,m.props.children,w,m.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===$r&&sh(j)===h.type)?(w=i(h,m.props),w.ref=Xi(g,h,m),w.return=g,w):(w=ia(m.type,m.key,m.props,null,g.mode,w),w.ref=Xi(g,h,m),w.return=g,w)}function c(g,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Wu(m,g.mode,w),h.return=g,h):(h=i(h,m.children||[]),h.return=g,h)}function d(g,h,m,w,j){return h===null||h.tag!==7?(h=Rn(m,g.mode,w,j),h.return=g,h):(h=i(h,m),h.return=g,h)}function f(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Uu(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ws:return m=ia(h.type,h.key,h.props,null,g.mode,m),m.ref=Xi(g,null,h),m.return=g,m;case ti:return h=Wu(h,g.mode,m),h.return=g,h;case $r:var w=h._init;return f(g,w(h._payload),m)}if(lo(h)||qi(h))return h=Rn(h,g.mode,m,null),h.return=g,h;Rs(g,h)}return null}function p(g,h,m,w){var j=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:a(g,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ws:return m.key===j?l(g,h,m,w):null;case ti:return m.key===j?c(g,h,m,w):null;case $r:return j=m._init,p(g,h,j(m._payload),w)}if(lo(m)||qi(m))return j!==null?null:d(g,h,m,w,null);Rs(g,m)}return null}function x(g,h,m,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,a(h,g,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ws:return g=g.get(w.key===null?m:w.key)||null,l(h,g,w,j);case ti:return g=g.get(w.key===null?m:w.key)||null,c(h,g,w,j);case $r:var E=w._init;return x(g,h,m,E(w._payload),j)}if(lo(w)||qi(w))return g=g.get(m)||null,d(h,g,w,j,null);Rs(h,w)}return null}function y(g,h,m,w){for(var j=null,E=null,_=h,k=h=0,T=null;_!==null&&k<m.length;k++){_.index>k?(T=_,_=null):T=_.sibling;var A=p(g,_,m[k],w);if(A===null){_===null&&(_=T);break}e&&_&&A.alternate===null&&t(g,_),h=o(A,h,k),E===null?j=A:E.sibling=A,E=A,_=T}if(k===m.length)return r(g,_),he&&xn(g,k),j;if(_===null){for(;k<m.length;k++)_=f(g,m[k],w),_!==null&&(h=o(_,h,k),E===null?j=_:E.sibling=_,E=_);return he&&xn(g,k),j}for(_=n(g,_);k<m.length;k++)T=x(_,g,k,m[k],w),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?k:T.key),h=o(T,h,k),E===null?j=T:E.sibling=T,E=T);return e&&_.forEach(function(ee){return t(g,ee)}),he&&xn(g,k),j}function v(g,h,m,w){var j=qi(m);if(typeof j!="function")throw Error(N(150));if(m=j.call(m),m==null)throw Error(N(151));for(var E=j=null,_=h,k=h=0,T=null,A=m.next();_!==null&&!A.done;k++,A=m.next()){_.index>k?(T=_,_=null):T=_.sibling;var ee=p(g,_,A.value,w);if(ee===null){_===null&&(_=T);break}e&&_&&ee.alternate===null&&t(g,_),h=o(ee,h,k),E===null?j=ee:E.sibling=ee,E=ee,_=T}if(A.done)return r(g,_),he&&xn(g,k),j;if(_===null){for(;!A.done;k++,A=m.next())A=f(g,A.value,w),A!==null&&(h=o(A,h,k),E===null?j=A:E.sibling=A,E=A);return he&&xn(g,k),j}for(_=n(g,_);!A.done;k++,A=m.next())A=x(_,g,k,A.value,w),A!==null&&(e&&A.alternate!==null&&_.delete(A.key===null?k:A.key),h=o(A,h,k),E===null?j=A:E.sibling=A,E=A);return e&&_.forEach(function(_e){return t(g,_e)}),he&&xn(g,k),j}function S(g,h,m,w){if(typeof m=="object"&&m!==null&&m.type===ri&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ws:e:{for(var j=m.key,E=h;E!==null;){if(E.key===j){if(j=m.type,j===ri){if(E.tag===7){r(g,E.sibling),h=i(E,m.props.children),h.return=g,g=h;break e}}else if(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===$r&&sh(j)===E.type){r(g,E.sibling),h=i(E,m.props),h.ref=Xi(g,E,m),h.return=g,g=h;break e}r(g,E);break}else t(g,E);E=E.sibling}m.type===ri?(h=Rn(m.props.children,g.mode,w,m.key),h.return=g,g=h):(w=ia(m.type,m.key,m.props,null,g.mode,w),w.ref=Xi(g,h,m),w.return=g,g=w)}return s(g);case ti:e:{for(E=m.key;h!==null;){if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){r(g,h.sibling),h=i(h,m.children||[]),h.return=g,g=h;break e}else{r(g,h);break}else t(g,h);h=h.sibling}h=Wu(m,g.mode,w),h.return=g,g=h}return s(g);case $r:return E=m._init,S(g,h,E(m._payload),w)}if(lo(m))return y(g,h,m,w);if(qi(m))return v(g,h,m,w);Rs(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(r(g,h.sibling),h=i(h,m),h.return=g,g=h):(r(g,h),h=Uu(m,g.mode,w),h.return=g,g=h),s(g)):r(g,h)}return S}var bi=s1(!0),a1=s1(!1),Ha=fn(null),Va=null,ci=null,lf=null;function uf(){lf=ci=Va=null}function cf(e){var t=Ha.current;ce(Ha),e._currentValue=t}function Uc(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function xi(e,t){Va=e,lf=ci=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ut=!0),e.firstContext=null)}function zt(e){var t=e._currentValue;if(lf!==e)if(e={context:e,memoizedValue:t,next:null},ci===null){if(Va===null)throw Error(N(308));ci=e,Va.dependencies={lanes:0,firstContext:e}}else ci=ci.next=e;return t}var Cn=null;function df(e){Cn===null?Cn=[e]:Cn.push(e)}function l1(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,df(t)):(r.next=i.next,i.next=r),t.interleaved=r,Pr(e,n)}function Pr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Ur=!1;function ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,Z&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Pr(e,r)}return i=n.interleaved,i===null?(t.next=t,df(n)):(t.next=i.next,i.next=t),n.interleaved=t,Pr(e,r)}function Js(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Qd(e,r)}}function ah(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ga(e,t,r,n){var i=e.updateQueue;Ur=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=c=l=null,a=o;do{var p=a.lane,x=a.eventTime;if((n&p)===p){d!==null&&(d=d.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(p=t,x=r,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(x,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,p=typeof y=="function"?y.call(x,f,p):y,p==null)break e;f=we({},f,p);break e;case 2:Ur=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else x={eventTime:x,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=x,l=f):d=d.next=x,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);$n|=s,e.lanes=s,e.memoizedState=f}}function lh(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(N(191,i));i.call(n)}}}var ss={},cr=fn(ss),Io=fn(ss),Fo=fn(ss);function En(e){if(e===ss)throw Error(N(174));return e}function pf(e,t){switch(se(Fo,t),se(Io,e),se(cr,ss),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sc(t,e)}ce(cr),se(cr,t)}function Ni(){ce(cr),ce(Io),ce(Fo)}function c1(e){En(Fo.current);var t=En(cr.current),r=Sc(t,e.type);t!==r&&(se(Io,e),se(cr,r))}function hf(e){Io.current===e&&(ce(cr),ce(Io))}var ve=fn(0);function qa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lu=[];function mf(){for(var e=0;e<Lu.length;e++)Lu[e]._workInProgressVersionPrimary=null;Lu.length=0}var Xs=Mr.ReactCurrentDispatcher,zu=Mr.ReactCurrentBatchConfig,Fn=0,xe=null,De=null,Fe=null,Ka=!1,xo=!1,$o=0,ew=0;function qe(){throw Error(N(321))}function gf(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Jt(e[r],t[r]))return!1;return!0}function yf(e,t,r,n,i,o){if(Fn=o,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xs.current=e===null||e.memoizedState===null?iw:ow,e=r(n,i),xo){o=0;do{if(xo=!1,$o=0,25<=o)throw Error(N(301));o+=1,Fe=De=null,t.updateQueue=null,Xs.current=sw,e=r(n,i)}while(xo)}if(Xs.current=Qa,t=De!==null&&De.next!==null,Fn=0,Fe=De=xe=null,Ka=!1,t)throw Error(N(300));return e}function vf(){var e=$o!==0;return $o=0,e}function or(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?xe.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function At(){if(De===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Fe===null?xe.memoizedState:Fe.next;if(t!==null)Fe=t,De=e;else{if(e===null)throw Error(N(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Fe===null?xe.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Uo(e,t){return typeof t=="function"?t(e):t}function Au(e){var t=At(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=De,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((Fn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=n):l=l.next=f,xe.lanes|=d,$n|=d}c=c.next}while(c!==null&&c!==o);l===null?s=n:l.next=a,Jt(n,t.memoizedState)||(ut=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,xe.lanes|=o,$n|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Iu(e){var t=At(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Jt(o,t.memoizedState)||(ut=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function d1(){}function f1(e,t){var r=xe,n=At(),i=t(),o=!Jt(n.memoizedState,i);if(o&&(n.memoizedState=i,ut=!0),n=n.queue,xf(m1.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||Fe!==null&&Fe.memoizedState.tag&1){if(r.flags|=2048,Wo(9,h1.bind(null,r,n,i,t),void 0,null),Ue===null)throw Error(N(349));Fn&30||p1(r,t,i)}return i}function p1(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function h1(e,t,r,n){t.value=r,t.getSnapshot=n,g1(t)&&y1(e)}function m1(e,t,r){return r(function(){g1(t)&&y1(e)})}function g1(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Jt(e,r)}catch{return!0}}function y1(e){var t=Pr(e,1);t!==null&&Kt(t,e,1,-1)}function uh(e){var t=or();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:e},t.queue=e,e=e.dispatch=nw.bind(null,xe,e),[t.memoizedState,e]}function Wo(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function v1(){return At().memoizedState}function ea(e,t,r,n){var i=or();xe.flags|=e,i.memoizedState=Wo(1|t,r,void 0,n===void 0?null:n)}function Pl(e,t,r,n){var i=At();n=n===void 0?null:n;var o=void 0;if(De!==null){var s=De.memoizedState;if(o=s.destroy,n!==null&&gf(n,s.deps)){i.memoizedState=Wo(t,r,o,n);return}}xe.flags|=e,i.memoizedState=Wo(1|t,r,o,n)}function ch(e,t){return ea(8390656,8,e,t)}function xf(e,t){return Pl(2048,8,e,t)}function x1(e,t){return Pl(4,2,e,t)}function w1(e,t){return Pl(4,4,e,t)}function S1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _1(e,t,r){return r=r!=null?r.concat([e]):null,Pl(4,4,S1.bind(null,t,e),r)}function wf(){}function k1(e,t){var r=At();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&gf(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function C1(e,t){var r=At();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&gf(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function E1(e,t,r){return Fn&21?(Jt(r,t)||(r=O0(),xe.lanes|=r,$n|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=r)}function tw(e,t){var r=re;re=r!==0&&4>r?r:4,e(!0);var n=zu.transition;zu.transition={};try{e(!1),t()}finally{re=r,zu.transition=n}}function j1(){return At().memoizedState}function rw(e,t,r){var n=rn(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},b1(e))N1(t,r);else if(r=l1(e,t,r,n),r!==null){var i=rt();Kt(r,e,n,i),P1(r,t,n)}}function nw(e,t,r){var n=rn(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(b1(e))N1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,r);if(i.hasEagerState=!0,i.eagerState=a,Jt(a,s)){var l=t.interleaved;l===null?(i.next=i,df(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=l1(e,t,i,n),r!==null&&(i=rt(),Kt(r,e,n,i),P1(r,t,n))}}function b1(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function N1(e,t){xo=Ka=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function P1(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Qd(e,r)}}var Qa={readContext:zt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},iw={readContext:zt,useCallback:function(e,t){return or().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:ch,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ea(4194308,4,S1.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ea(4194308,4,e,t)},useInsertionEffect:function(e,t){return ea(4,2,e,t)},useMemo:function(e,t){var r=or();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=or();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=rw.bind(null,xe,e),[n.memoizedState,e]},useRef:function(e){var t=or();return e={current:e},t.memoizedState=e},useState:uh,useDebugValue:wf,useDeferredValue:function(e){return or().memoizedState=e},useTransition:function(){var e=uh(!1),t=e[0];return e=tw.bind(null,e[1]),or().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=xe,i=or();if(he){if(r===void 0)throw Error(N(407));r=r()}else{if(r=t(),Ue===null)throw Error(N(349));Fn&30||p1(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,ch(m1.bind(null,n,o,e),[e]),n.flags|=2048,Wo(9,h1.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=or(),t=Ue.identifierPrefix;if(he){var r=wr,n=xr;r=(n&~(1<<32-qt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=$o++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=ew++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ow={readContext:zt,useCallback:k1,useContext:zt,useEffect:xf,useImperativeHandle:_1,useInsertionEffect:x1,useLayoutEffect:w1,useMemo:C1,useReducer:Au,useRef:v1,useState:function(){return Au(Uo)},useDebugValue:wf,useDeferredValue:function(e){var t=At();return E1(t,De.memoizedState,e)},useTransition:function(){var e=Au(Uo)[0],t=At().memoizedState;return[e,t]},useMutableSource:d1,useSyncExternalStore:f1,useId:j1,unstable_isNewReconciler:!1},sw={readContext:zt,useCallback:k1,useContext:zt,useEffect:xf,useImperativeHandle:_1,useInsertionEffect:x1,useLayoutEffect:w1,useMemo:C1,useReducer:Iu,useRef:v1,useState:function(){return Iu(Uo)},useDebugValue:wf,useDeferredValue:function(e){var t=At();return De===null?t.memoizedState=e:E1(t,De.memoizedState,e)},useTransition:function(){var e=Iu(Uo)[0],t=At().memoizedState;return[e,t]},useMutableSource:d1,useSyncExternalStore:f1,useId:j1,unstable_isNewReconciler:!1};function Yt(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Wc(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:we({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ol={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=rt(),i=rn(e),o=kr(n,i);o.payload=t,r!=null&&(o.callback=r),t=en(e,o,i),t!==null&&(Kt(t,e,i,n),Js(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=rt(),i=rn(e),o=kr(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=en(e,o,i),t!==null&&(Kt(t,e,i,n),Js(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=rt(),n=rn(e),i=kr(r,n);i.tag=2,t!=null&&(i.callback=t),t=en(e,i,n),t!==null&&(Kt(t,e,n,r),Js(t,e,n))}};function dh(e,t,r,n,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,s):t.prototype&&t.prototype.isPureReactComponent?!Do(r,n)||!Do(i,o):!0}function O1(e,t,r){var n=!1,i=ln,o=t.contextType;return typeof o=="object"&&o!==null?o=zt(o):(i=ft(t)?An:Je.current,n=t.contextTypes,o=(n=n!=null)?Ei(e,i):ln),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ol,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function fh(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ol.enqueueReplaceState(t,t.state,null)}function Yc(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},ff(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=zt(o):(o=ft(t)?An:Je.current,i.context=Ei(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Wc(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ol.enqueueReplaceState(i,i.state,null),Ga(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Pi(e,t){try{var r="",n=t;do r+=Dx(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Fu(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Bc(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var aw=typeof WeakMap=="function"?WeakMap:Map;function R1(e,t,r){r=kr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ja||(Ja=!0,ed=n),Bc(e,t)},r}function T1(e,t,r){r=kr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Bc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Bc(e,t),typeof n!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function ph(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new aw;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Sw.bind(null,e,t,r),t.then(e,e))}function hh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mh(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=kr(-1,1),t.tag=2,en(r,t,1))),r.lanes|=1),e)}var lw=Mr.ReactCurrentOwner,ut=!1;function et(e,t,r,n){t.child=e===null?a1(t,null,r,n):bi(t,e.child,r,n)}function gh(e,t,r,n,i){r=r.render;var o=t.ref;return xi(t,i),n=yf(e,t,r,n,o,i),r=vf(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Or(e,t,i)):(he&&r&&of(t),t.flags|=1,et(e,t,n,i),t.child)}function yh(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Nf(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,M1(e,t,o,n,i)):(e=ia(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:Do,r(s,n)&&e.ref===t.ref)return Or(e,t,i)}return t.flags|=1,e=nn(o,n),e.ref=t.ref,e.return=t,t.child=e}function M1(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(Do(o,n)&&e.ref===t.ref)if(ut=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(ut=!0);else return t.lanes=e.lanes,Or(e,t,i)}return Hc(e,t,r,n,i)}function D1(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(fi,vt),vt|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(fi,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,se(fi,vt),vt|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,se(fi,vt),vt|=n;return et(e,t,i,r),t.child}function L1(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Hc(e,t,r,n,i){var o=ft(r)?An:Je.current;return o=Ei(t,o),xi(t,i),r=yf(e,t,r,n,o,i),n=vf(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Or(e,t,i)):(he&&n&&of(t),t.flags|=1,et(e,t,r,i),t.child)}function vh(e,t,r,n,i){if(ft(r)){var o=!0;Wa(t)}else o=!1;if(xi(t,i),t.stateNode===null)ta(e,t),O1(t,r,n),Yc(t,r,n,i),n=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=r.contextType;typeof c=="object"&&c!==null?c=zt(c):(c=ft(r)?An:Je.current,c=Ei(t,c));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==n||l!==c)&&fh(t,s,n,c),Ur=!1;var p=t.memoizedState;s.state=p,Ga(t,n,s,i),l=t.memoizedState,a!==n||p!==l||dt.current||Ur?(typeof d=="function"&&(Wc(t,r,d,n),l=t.memoizedState),(a=Ur||dh(t,r,a,n,p,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),s.props=n,s.state=l,s.context=c,n=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,u1(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Yt(t.type,a),s.props=c,f=t.pendingProps,p=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=zt(l):(l=ft(r)?An:Je.current,l=Ei(t,l));var x=r.getDerivedStateFromProps;(d=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&fh(t,s,n,l),Ur=!1,p=t.memoizedState,s.state=p,Ga(t,n,s,i);var y=t.memoizedState;a!==f||p!==y||dt.current||Ur?(typeof x=="function"&&(Wc(t,r,x,n),y=t.memoizedState),(c=Ur||dh(t,r,c,n,p,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),s.props=n,s.state=y,s.context=l,n=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return Vc(e,t,r,n,o,i)}function Vc(e,t,r,n,i,o){L1(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return i&&nh(t,r,!1),Or(e,t,o);n=t.stateNode,lw.current=t;var a=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=bi(t,e.child,null,o),t.child=bi(t,null,a,o)):et(e,t,a,o),t.memoizedState=n.state,i&&nh(t,r,!0),t.child}function z1(e){var t=e.stateNode;t.pendingContext?rh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rh(e,t.context,!1),pf(e,t.containerInfo)}function xh(e,t,r,n,i){return ji(),af(i),t.flags|=256,et(e,t,r,n),t.child}var Gc={dehydrated:null,treeContext:null,retryLane:0};function qc(e){return{baseLanes:e,cachePool:null,transitions:null}}function A1(e,t,r){var n=t.pendingProps,i=ve.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),se(ve,i&1),e===null)return $c(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,o?(n=t.mode,o=t.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ml(s,n,0,null),e=Rn(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=qc(r),t.memoizedState=Gc,e):Sf(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uw(e,t,s,n,a,i,r);if(o){o=n.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:n.children};return!(s&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=nn(i,l),n.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=nn(a,o):(o=Rn(o,s,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,s=e.child.memoizedState,s=s===null?qc(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~r,t.memoizedState=Gc,n}return o=e.child,e=o.sibling,n=nn(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Sf(e,t){return t=Ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ts(e,t,r,n){return n!==null&&af(n),bi(t,e.child,null,r),e=Sf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uw(e,t,r,n,i,o,s){if(r)return t.flags&256?(t.flags&=-257,n=Fu(Error(N(422))),Ts(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Ml({mode:"visible",children:n.children},i,0,null),o=Rn(o,i,s,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&bi(t,e.child,null,s),t.child.memoizedState=qc(s),t.memoizedState=Gc,o);if(!(t.mode&1))return Ts(e,t,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var a=n.dgst;return n=a,o=Error(N(419)),n=Fu(o,n,void 0),Ts(e,t,s,n)}if(a=(s&e.childLanes)!==0,ut||a){if(n=Ue,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Pr(e,i),Kt(n,e,i,-1))}return bf(),n=Fu(Error(N(421))),Ts(e,t,s,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_w.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,xt=Xr(i.nextSibling),_t=t,he=!0,Ht=null,e!==null&&(Ot[Rt++]=xr,Ot[Rt++]=wr,Ot[Rt++]=In,xr=e.id,wr=e.overflow,In=t),t=Sf(t,n.children),t.flags|=4096,t)}function wh(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Uc(e.return,t,r)}function $u(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function I1(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(et(e,t,n.children,r),n=ve.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wh(e,r,t);else if(e.tag===19)wh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(se(ve,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&qa(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),$u(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qa(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}$u(t,!0,r,null,o);break;case"together":$u(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ta(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Or(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,r=nn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=nn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function cw(e,t,r){switch(t.tag){case 3:z1(t),ji();break;case 5:c1(t);break;case 1:ft(t.type)&&Wa(t);break;case 4:pf(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;se(Ha,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(se(ve,ve.current&1),t.flags|=128,null):r&t.child.childLanes?A1(e,t,r):(se(ve,ve.current&1),e=Or(e,t,r),e!==null?e.sibling:null);se(ve,ve.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return I1(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(ve,ve.current),n)break;return null;case 22:case 23:return t.lanes=0,D1(e,t,r)}return Or(e,t,r)}var F1,Kc,$1,U1;F1=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Kc=function(){};$1=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,En(cr.current);var o=null;switch(r){case"input":i=yc(e,i),n=yc(e,n),o=[];break;case"select":i=we({},i,{value:void 0}),n=we({},n,{value:void 0}),o=[];break;case"textarea":i=wc(e,i),n=wc(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=$a)}_c(r,n);var s;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bo.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in n){var l=n[c];if(a=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(o||(o=[]),o.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&le("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}r&&(o=o||[]).push("style",r);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};U1=function(e,t,r,n){r!==n&&(t.flags|=4)};function eo(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function dw(e,t,r){var n=t.pendingProps;switch(sf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return ft(t.type)&&Ua(),Ke(t),null;case 3:return n=t.stateNode,Ni(),ce(dt),ce(Je),mf(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Os(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ht!==null&&(nd(Ht),Ht=null))),Kc(e,t),Ke(t),null;case 5:hf(t);var i=En(Fo.current);if(r=t.type,e!==null&&t.stateNode!=null)$1(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(N(166));return Ke(t),null}if(e=En(cr.current),Os(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[ar]=t,n[Ao]=o,e=(t.mode&1)!==0,r){case"dialog":le("cancel",n),le("close",n);break;case"iframe":case"object":case"embed":le("load",n);break;case"video":case"audio":for(i=0;i<co.length;i++)le(co[i],n);break;case"source":le("error",n);break;case"img":case"image":case"link":le("error",n),le("load",n);break;case"details":le("toggle",n);break;case"input":Pp(n,o),le("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},le("invalid",n);break;case"textarea":Rp(n,o),le("invalid",n)}_c(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?n.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ps(n.textContent,a,e),i=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ps(n.textContent,a,e),i=["children",""+a]):bo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&le("scroll",n)}switch(r){case"input":Ss(n),Op(n,o,!0);break;case"textarea":Ss(n),Tp(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=$a)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=m0(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[ar]=t,e[Ao]=n,F1(e,t,!1,!1),t.stateNode=e;e:{switch(s=kc(r,n),r){case"dialog":le("cancel",e),le("close",e),i=n;break;case"iframe":case"object":case"embed":le("load",e),i=n;break;case"video":case"audio":for(i=0;i<co.length;i++)le(co[i],e);i=n;break;case"source":le("error",e),i=n;break;case"img":case"image":case"link":le("error",e),le("load",e),i=n;break;case"details":le("toggle",e),i=n;break;case"input":Pp(e,n),i=yc(e,n),le("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=we({},n,{value:void 0}),le("invalid",e);break;case"textarea":Rp(e,n),i=wc(e,n),le("invalid",e);break;default:i=n}_c(r,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?v0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&g0(e,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&No(e,l):typeof l=="number"&&No(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(bo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&le("scroll",e):l!=null&&Bd(e,o,l,s))}switch(r){case"input":Ss(e),Op(e,n,!1);break;case"textarea":Ss(e),Tp(e);break;case"option":n.value!=null&&e.setAttribute("value",""+an(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?mi(e,!!n.multiple,o,!1):n.defaultValue!=null&&mi(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=$a)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)U1(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(N(166));if(r=En(Fo.current),En(cr.current),Os(t)){if(n=t.stateNode,r=t.memoizedProps,n[ar]=t,(o=n.nodeValue!==r)&&(e=_t,e!==null))switch(e.tag){case 3:Ps(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ps(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ar]=t,t.stateNode=n}return Ke(t),null;case 13:if(ce(ve),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&xt!==null&&t.mode&1&&!(t.flags&128))o1(),ji(),t.flags|=98560,o=!1;else if(o=Os(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[ar]=t}else ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),o=!1}else Ht!==null&&(nd(Ht),Ht=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Le===0&&(Le=3):bf())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return Ni(),Kc(e,t),e===null&&Lo(t.stateNode.containerInfo),Ke(t),null;case 10:return cf(t.type._context),Ke(t),null;case 17:return ft(t.type)&&Ua(),Ke(t),null;case 19:if(ce(ve),o=t.memoizedState,o===null)return Ke(t),null;if(n=(t.flags&128)!==0,s=o.rendering,s===null)if(n)eo(o,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=qa(e),s!==null){for(t.flags|=128,eo(o,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return se(ve,ve.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ee()>Oi&&(t.flags|=128,n=!0,eo(o,!1),t.lanes=4194304)}else{if(!n)if(e=qa(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),eo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!he)return Ke(t),null}else 2*Ee()-o.renderingStartTime>Oi&&r!==1073741824&&(t.flags|=128,n=!0,eo(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(r=o.last,r!==null?r.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ee(),t.sibling=null,r=ve.current,se(ve,n?r&1|2:r&1),t):(Ke(t),null);case 22:case 23:return jf(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?vt&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function fw(e,t){switch(sf(t),t.tag){case 1:return ft(t.type)&&Ua(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ni(),ce(dt),ce(Je),mf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hf(t),null;case 13:if(ce(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(ve),null;case 4:return Ni(),null;case 10:return cf(t.type._context),null;case 22:case 23:return jf(),null;case 24:return null;default:return null}}var Ms=!1,Qe=!1,pw=typeof WeakSet=="function"?WeakSet:Set,L=null;function di(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Se(e,t,n)}else r.current=null}function Qc(e,t,r){try{r()}catch(n){Se(e,t,n)}}var Sh=!1;function hw(e,t){if(Mc=Aa,e=V0(),nf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,a=-1,l=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var x;f!==r||i!==0&&f.nodeType!==3||(a=s+i),f!==o||n!==0&&f.nodeType!==3||(l=s+n),f.nodeType===3&&(s+=f.nodeValue.length),(x=f.firstChild)!==null;)p=f,f=x;for(;;){if(f===e)break t;if(p===r&&++c===i&&(a=s),p===o&&++d===n&&(l=s),(x=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=x}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Dc={focusedElem:e,selectionRange:r},Aa=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:Yt(t.type,v),S);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){Se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=Sh,Sh=!1,y}function wo(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Qc(t,r,o)}i=i.next}while(i!==n)}}function Rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Zc(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function W1(e){var t=e.alternate;t!==null&&(e.alternate=null,W1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ar],delete t[Ao],delete t[Ac],delete t[Q2],delete t[Z2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Y1(e){return e.tag===5||e.tag===3||e.tag===4}function _h(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Y1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jc(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=$a));else if(n!==4&&(e=e.child,e!==null))for(Jc(e,t,r),e=e.sibling;e!==null;)Jc(e,t,r),e=e.sibling}function Xc(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Xc(e,t,r),e=e.sibling;e!==null;)Xc(e,t,r),e=e.sibling}var Ye=null,Bt=!1;function Ar(e,t,r){for(r=r.child;r!==null;)B1(e,t,r),r=r.sibling}function B1(e,t,r){if(ur&&typeof ur.onCommitFiberUnmount=="function")try{ur.onCommitFiberUnmount(kl,r)}catch{}switch(r.tag){case 5:Qe||di(r,t);case 6:var n=Ye,i=Bt;Ye=null,Ar(e,t,r),Ye=n,Bt=i,Ye!==null&&(Bt?(e=Ye,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ye.removeChild(r.stateNode));break;case 18:Ye!==null&&(Bt?(e=Ye,r=r.stateNode,e.nodeType===8?Mu(e.parentNode,r):e.nodeType===1&&Mu(e,r),To(e)):Mu(Ye,r.stateNode));break;case 4:n=Ye,i=Bt,Ye=r.stateNode.containerInfo,Bt=!0,Ar(e,t,r),Ye=n,Bt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Qc(r,t,s),i=i.next}while(i!==n)}Ar(e,t,r);break;case 1:if(!Qe&&(di(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){Se(r,t,a)}Ar(e,t,r);break;case 21:Ar(e,t,r);break;case 22:r.mode&1?(Qe=(n=Qe)||r.memoizedState!==null,Ar(e,t,r),Qe=n):Ar(e,t,r);break;default:Ar(e,t,r)}}function kh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new pw),t.forEach(function(n){var i=kw.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ut(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,Bt=!1;break e;case 3:Ye=a.stateNode.containerInfo,Bt=!0;break e;case 4:Ye=a.stateNode.containerInfo,Bt=!0;break e}a=a.return}if(Ye===null)throw Error(N(160));B1(o,s,i),Ye=null,Bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Se(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)H1(t,e),t=t.sibling}function H1(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ut(t,e),nr(e),n&4){try{wo(3,e,e.return),Rl(3,e)}catch(v){Se(e,e.return,v)}try{wo(5,e,e.return)}catch(v){Se(e,e.return,v)}}break;case 1:Ut(t,e),nr(e),n&512&&r!==null&&di(r,r.return);break;case 5:if(Ut(t,e),nr(e),n&512&&r!==null&&di(r,r.return),e.flags&32){var i=e.stateNode;try{No(i,"")}catch(v){Se(e,e.return,v)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=r!==null?r.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&p0(i,o),kc(a,s);var c=kc(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?v0(i,f):d==="dangerouslySetInnerHTML"?g0(i,f):d==="children"?No(i,f):Bd(i,d,f,c)}switch(a){case"input":vc(i,o);break;case"textarea":h0(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?mi(i,!!o.multiple,x,!1):p!==!!o.multiple&&(o.defaultValue!=null?mi(i,!!o.multiple,o.defaultValue,!0):mi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ao]=o}catch(v){Se(e,e.return,v)}}break;case 6:if(Ut(t,e),nr(e),n&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Se(e,e.return,v)}}break;case 3:if(Ut(t,e),nr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{To(t.containerInfo)}catch(v){Se(e,e.return,v)}break;case 4:Ut(t,e),nr(e);break;case 13:Ut(t,e),nr(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Cf=Ee())),n&4&&kh(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Qe=(c=Qe)||d,Ut(t,e),Qe=c):Ut(t,e),nr(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(f=L=d;L!==null;){switch(p=L,x=p.child,p.tag){case 0:case 11:case 14:case 15:wo(4,p,p.return);break;case 1:di(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Se(n,r,v)}}break;case 5:di(p,p.return);break;case 22:if(p.memoizedState!==null){Eh(f);continue}}x!==null?(x.return=p,L=x):Eh(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=y0("display",s))}catch(v){Se(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){Se(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ut(t,e),nr(e),n&4&&kh(e);break;case 21:break;default:Ut(t,e),nr(e)}}function nr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Y1(r)){var n=r;break e}r=r.return}throw Error(N(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(No(i,""),n.flags&=-33);var o=_h(e);Xc(e,o,i);break;case 3:case 4:var s=n.stateNode.containerInfo,a=_h(e);Jc(e,a,s);break;default:throw Error(N(161))}}catch(l){Se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mw(e,t,r){L=e,V1(e)}function V1(e,t,r){for(var n=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||Ms;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Qe;a=Ms;var c=Qe;if(Ms=s,(Qe=l)&&!c)for(L=i;L!==null;)s=L,l=s.child,s.tag===22&&s.memoizedState!==null?jh(i):l!==null?(l.return=s,L=l):jh(i);for(;o!==null;)L=o,V1(o),o=o.sibling;L=i,Ms=a,Qe=c}Ch(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Ch(e)}}function Ch(e){for(;L!==null;){var t=L;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Qe||Rl(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Qe)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Yt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&lh(t,o,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}lh(t,s,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&To(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Qe||t.flags&512&&Zc(t)}catch(p){Se(t,t.return,p)}}if(t===e){L=null;break}if(r=t.sibling,r!==null){r.return=t.return,L=r;break}L=t.return}}function Eh(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var r=t.sibling;if(r!==null){r.return=t.return,L=r;break}L=t.return}}function jh(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Rl(4,t)}catch(l){Se(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(l){Se(t,i,l)}}var o=t.return;try{Zc(t)}catch(l){Se(t,o,l)}break;case 5:var s=t.return;try{Zc(t)}catch(l){Se(t,s,l)}}}catch(l){Se(t,t.return,l)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var gw=Math.ceil,Za=Mr.ReactCurrentDispatcher,_f=Mr.ReactCurrentOwner,Dt=Mr.ReactCurrentBatchConfig,Z=0,Ue=null,Pe=null,Be=0,vt=0,fi=fn(0),Le=0,Yo=null,$n=0,Tl=0,kf=0,So=null,lt=null,Cf=0,Oi=1/0,mr=null,Ja=!1,ed=null,tn=null,Ds=!1,Hr=null,Xa=0,_o=0,td=null,ra=-1,na=0;function rt(){return Z&6?Ee():ra!==-1?ra:ra=Ee()}function rn(e){return e.mode&1?Z&2&&Be!==0?Be&-Be:X2.transition!==null?(na===0&&(na=O0()),na):(e=re,e!==0||(e=window.event,e=e===void 0?16:A0(e.type)),e):1}function Kt(e,t,r,n){if(50<_o)throw _o=0,td=null,Error(N(185));ns(e,r,n),(!(Z&2)||e!==Ue)&&(e===Ue&&(!(Z&2)&&(Tl|=r),Le===4&&Yr(e,Be)),pt(e,n),r===1&&Z===0&&!(t.mode&1)&&(Oi=Ee()+500,Nl&&pn()))}function pt(e,t){var r=e.callbackNode;Xx(e,t);var n=za(e,e===Ue?Be:0);if(n===0)r!==null&&Lp(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Lp(r),t===1)e.tag===0?J2(bh.bind(null,e)):r1(bh.bind(null,e)),q2(function(){!(Z&6)&&pn()}),r=null;else{switch(R0(n)){case 1:r=Kd;break;case 4:r=N0;break;case 16:r=La;break;case 536870912:r=P0;break;default:r=La}r=eg(r,G1.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function G1(e,t){if(ra=-1,na=0,Z&6)throw Error(N(327));var r=e.callbackNode;if(wi()&&e.callbackNode!==r)return null;var n=za(e,e===Ue?Be:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=el(e,n);else{t=n;var i=Z;Z|=2;var o=K1();(Ue!==e||Be!==t)&&(mr=null,Oi=Ee()+500,On(e,t));do try{xw();break}catch(a){q1(e,a)}while(!0);uf(),Za.current=o,Z=i,Pe!==null?t=0:(Ue=null,Be=0,t=Le)}if(t!==0){if(t===2&&(i=Nc(e),i!==0&&(n=i,t=rd(e,i))),t===1)throw r=Yo,On(e,0),Yr(e,n),pt(e,Ee()),r;if(t===6)Yr(e,n);else{if(i=e.current.alternate,!(n&30)&&!yw(i)&&(t=el(e,n),t===2&&(o=Nc(e),o!==0&&(n=o,t=rd(e,o))),t===1))throw r=Yo,On(e,0),Yr(e,n),pt(e,Ee()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(N(345));case 2:wn(e,lt,mr);break;case 3:if(Yr(e,n),(n&130023424)===n&&(t=Cf+500-Ee(),10<t)){if(za(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){rt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zc(wn.bind(null,e,lt,mr),t);break}wn(e,lt,mr);break;case 4:if(Yr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var s=31-qt(n);o=1<<s,s=t[s],s>i&&(i=s),n&=~o}if(n=i,n=Ee()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*gw(n/1960))-n,10<n){e.timeoutHandle=zc(wn.bind(null,e,lt,mr),n);break}wn(e,lt,mr);break;case 5:wn(e,lt,mr);break;default:throw Error(N(329))}}}return pt(e,Ee()),e.callbackNode===r?G1.bind(null,e):null}function rd(e,t){var r=So;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=el(e,t),e!==2&&(t=lt,lt=r,t!==null&&nd(t)),e}function nd(e){lt===null?lt=e:lt.push.apply(lt,e)}function yw(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Jt(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yr(e,t){for(t&=~kf,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-qt(t),n=1<<r;e[r]=-1,t&=~n}}function bh(e){if(Z&6)throw Error(N(327));wi();var t=za(e,0);if(!(t&1))return pt(e,Ee()),null;var r=el(e,t);if(e.tag!==0&&r===2){var n=Nc(e);n!==0&&(t=n,r=rd(e,n))}if(r===1)throw r=Yo,On(e,0),Yr(e,t),pt(e,Ee()),r;if(r===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,lt,mr),pt(e,Ee()),null}function Ef(e,t){var r=Z;Z|=1;try{return e(t)}finally{Z=r,Z===0&&(Oi=Ee()+500,Nl&&pn())}}function Un(e){Hr!==null&&Hr.tag===0&&!(Z&6)&&wi();var t=Z;Z|=1;var r=Dt.transition,n=re;try{if(Dt.transition=null,re=1,e)return e()}finally{re=n,Dt.transition=r,Z=t,!(Z&6)&&pn()}}function jf(){vt=fi.current,ce(fi)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,G2(r)),Pe!==null)for(r=Pe.return;r!==null;){var n=r;switch(sf(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ua();break;case 3:Ni(),ce(dt),ce(Je),mf();break;case 5:hf(n);break;case 4:Ni();break;case 13:ce(ve);break;case 19:ce(ve);break;case 10:cf(n.type._context);break;case 22:case 23:jf()}r=r.return}if(Ue=e,Pe=e=nn(e.current,null),Be=vt=t,Le=0,Yo=null,kf=Tl=$n=0,lt=So=null,Cn!==null){for(t=0;t<Cn.length;t++)if(r=Cn[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,n.next=s}r.pending=n}Cn=null}return e}function q1(e,t){do{var r=Pe;try{if(uf(),Xs.current=Qa,Ka){for(var n=xe.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Ka=!1}if(Fn=0,Fe=De=xe=null,xo=!1,$o=0,_f.current=null,r===null||r.return===null){Le=1,Yo=t,Pe=null;break}e:{var o=e,s=r.return,a=r,l=t;if(t=Be,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=hh(s);if(x!==null){x.flags&=-257,mh(x,s,a,o,t),x.mode&1&&ph(o,c,t),t=x,l=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if(!(t&1)){ph(o,c,t),bf();break e}l=Error(N(426))}}else if(he&&a.mode&1){var S=hh(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),mh(S,s,a,o,t),af(Pi(l,a));break e}}o=l=Pi(l,a),Le!==4&&(Le=2),So===null?So=[o]:So.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=R1(o,l,t);ah(o,g);break e;case 1:a=l;var h=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(tn===null||!tn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=T1(o,a,t);ah(o,w);break e}}o=o.return}while(o!==null)}Z1(r)}catch(j){t=j,Pe===r&&r!==null&&(Pe=r=r.return);continue}break}while(!0)}function K1(){var e=Za.current;return Za.current=Qa,e===null?Qa:e}function bf(){(Le===0||Le===3||Le===2)&&(Le=4),Ue===null||!($n&268435455)&&!(Tl&268435455)||Yr(Ue,Be)}function el(e,t){var r=Z;Z|=2;var n=K1();(Ue!==e||Be!==t)&&(mr=null,On(e,t));do try{vw();break}catch(i){q1(e,i)}while(!0);if(uf(),Z=r,Za.current=n,Pe!==null)throw Error(N(261));return Ue=null,Be=0,Le}function vw(){for(;Pe!==null;)Q1(Pe)}function xw(){for(;Pe!==null&&!Bx();)Q1(Pe)}function Q1(e){var t=X1(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?Z1(e):Pe=t,_f.current=null}function Z1(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=fw(r,t),r!==null){r.flags&=32767,Pe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Pe=null;return}}else if(r=dw(r,t,vt),r!==null){Pe=r;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Le===0&&(Le=5)}function wn(e,t,r){var n=re,i=Dt.transition;try{Dt.transition=null,re=1,ww(e,t,r,n)}finally{Dt.transition=i,re=n}return null}function ww(e,t,r,n){do wi();while(Hr!==null);if(Z&6)throw Error(N(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(e2(e,o),e===Ue&&(Pe=Ue=null,Be=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Ds||(Ds=!0,eg(La,function(){return wi(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Dt.transition,Dt.transition=null;var s=re;re=1;var a=Z;Z|=4,_f.current=null,hw(e,r),H1(r,e),$2(Dc),Aa=!!Mc,Dc=Mc=null,e.current=r,mw(r),Hx(),Z=a,re=s,Dt.transition=o}else e.current=r;if(Ds&&(Ds=!1,Hr=e,Xa=i),o=e.pendingLanes,o===0&&(tn=null),qx(r.stateNode),pt(e,Ee()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Ja)throw Ja=!1,e=ed,ed=null,e;return Xa&1&&e.tag!==0&&wi(),o=e.pendingLanes,o&1?e===td?_o++:(_o=0,td=e):_o=0,pn(),null}function wi(){if(Hr!==null){var e=R0(Xa),t=Dt.transition,r=re;try{if(Dt.transition=null,re=16>e?16:e,Hr===null)var n=!1;else{if(e=Hr,Hr=null,Xa=0,Z&6)throw Error(N(331));var i=Z;for(Z|=4,L=e.current;L!==null;){var o=L,s=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(L=c;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:wo(8,d,o)}var f=d.child;if(f!==null)f.return=d,L=f;else for(;L!==null;){d=L;var p=d.sibling,x=d.return;if(W1(d),d===c){L=null;break}if(p!==null){p.return=x,L=p;break}L=x}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}L=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wo(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,L=g;break e}L=o.return}}var h=e.current;for(L=h;L!==null;){s=L;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,L=m;else e:for(s=h;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rl(9,a)}}catch(j){Se(a,a.return,j)}if(a===s){L=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,L=w;break e}L=a.return}}if(Z=i,pn(),ur&&typeof ur.onPostCommitFiberRoot=="function")try{ur.onPostCommitFiberRoot(kl,e)}catch{}n=!0}return n}finally{re=r,Dt.transition=t}}return!1}function Nh(e,t,r){t=Pi(r,t),t=R1(e,t,1),e=en(e,t,1),t=rt(),e!==null&&(ns(e,1,t),pt(e,t))}function Se(e,t,r){if(e.tag===3)Nh(e,e,r);else for(;t!==null;){if(t.tag===3){Nh(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(tn===null||!tn.has(n))){e=Pi(r,e),e=T1(t,e,1),t=en(t,e,1),e=rt(),t!==null&&(ns(t,1,e),pt(t,e));break}}t=t.return}}function Sw(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&r,Ue===e&&(Be&r)===r&&(Le===4||Le===3&&(Be&130023424)===Be&&500>Ee()-Cf?On(e,0):kf|=r),pt(e,t)}function J1(e,t){t===0&&(e.mode&1?(t=Cs,Cs<<=1,!(Cs&130023424)&&(Cs=4194304)):t=1);var r=rt();e=Pr(e,t),e!==null&&(ns(e,t,r),pt(e,r))}function _w(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),J1(e,r)}function kw(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(N(314))}n!==null&&n.delete(t),J1(e,r)}var X1;X1=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||dt.current)ut=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ut=!1,cw(e,t,r);ut=!!(e.flags&131072)}else ut=!1,he&&t.flags&1048576&&n1(t,Ba,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ta(e,t),e=t.pendingProps;var i=Ei(t,Je.current);xi(t,r),i=yf(null,t,n,e,i,r);var o=vf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ft(n)?(o=!0,Wa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ff(t),i.updater=Ol,t.stateNode=i,i._reactInternals=t,Yc(t,n,e,r),t=Vc(null,t,n,!0,o,r)):(t.tag=0,he&&o&&of(t),et(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ta(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Ew(n),e=Yt(n,e),i){case 0:t=Hc(null,t,n,e,r);break e;case 1:t=vh(null,t,n,e,r);break e;case 11:t=gh(null,t,n,e,r);break e;case 14:t=yh(null,t,n,Yt(n.type,e),r);break e}throw Error(N(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Yt(n,i),Hc(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Yt(n,i),vh(e,t,n,i,r);case 3:e:{if(z1(t),e===null)throw Error(N(387));n=t.pendingProps,o=t.memoizedState,i=o.element,u1(e,t),Ga(t,n,null,r);var s=t.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Pi(Error(N(423)),t),t=xh(e,t,n,r,i);break e}else if(n!==i){i=Pi(Error(N(424)),t),t=xh(e,t,n,r,i);break e}else for(xt=Xr(t.stateNode.containerInfo.firstChild),_t=t,he=!0,Ht=null,r=a1(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ji(),n===i){t=Or(e,t,r);break e}et(e,t,n,r)}t=t.child}return t;case 5:return c1(t),e===null&&$c(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Lc(n,i)?s=null:o!==null&&Lc(n,o)&&(t.flags|=32),L1(e,t),et(e,t,s,r),t.child;case 6:return e===null&&$c(t),null;case 13:return A1(e,t,r);case 4:return pf(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=bi(t,null,n,r):et(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Yt(n,i),gh(e,t,n,i,r);case 7:return et(e,t,t.pendingProps,r),t.child;case 8:return et(e,t,t.pendingProps.children,r),t.child;case 12:return et(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,se(Ha,n._currentValue),n._currentValue=s,o!==null)if(Jt(o.value,s)){if(o.children===i.children&&!dt.current){t=Or(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===n){if(o.tag===1){l=kr(-1,r&-r),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Uc(o.return,r,t),a.lanes|=r;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(N(341));s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),Uc(s,r,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}et(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,xi(t,r),i=zt(i),n=n(i),t.flags|=1,et(e,t,n,r),t.child;case 14:return n=t.type,i=Yt(n,t.pendingProps),i=Yt(n.type,i),yh(e,t,n,i,r);case 15:return M1(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Yt(n,i),ta(e,t),t.tag=1,ft(n)?(e=!0,Wa(t)):e=!1,xi(t,r),O1(t,n,i),Yc(t,n,i,r),Vc(null,t,n,!0,e,r);case 19:return I1(e,t,r);case 22:return D1(e,t,r)}throw Error(N(156,t.tag))};function eg(e,t){return b0(e,t)}function Cw(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,r,n){return new Cw(e,t,r,n)}function Nf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ew(e){if(typeof e=="function")return Nf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vd)return 11;if(e===Gd)return 14}return 2}function nn(e,t){var r=e.alternate;return r===null?(r=Mt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ia(e,t,r,n,i,o){var s=2;if(n=e,typeof e=="function")Nf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ri:return Rn(r.children,i,o,t);case Hd:s=8,i|=8;break;case pc:return e=Mt(12,r,t,i|2),e.elementType=pc,e.lanes=o,e;case hc:return e=Mt(13,r,t,i),e.elementType=hc,e.lanes=o,e;case mc:return e=Mt(19,r,t,i),e.elementType=mc,e.lanes=o,e;case c0:return Ml(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case l0:s=10;break e;case u0:s=9;break e;case Vd:s=11;break e;case Gd:s=14;break e;case $r:s=16,n=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Mt(s,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Rn(e,t,r,n){return e=Mt(7,e,n,t),e.lanes=r,e}function Ml(e,t,r,n){return e=Mt(22,e,n,t),e.elementType=c0,e.lanes=r,e.stateNode={isHidden:!1},e}function Uu(e,t,r){return e=Mt(6,e,null,t),e.lanes=r,e}function Wu(e,t,r){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jw(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_u(0),this.expirationTimes=_u(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_u(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pf(e,t,r,n,i,o,s,a,l){return e=new jw(e,t,r,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Mt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(o),e}function bw(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ti,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function tg(e){if(!e)return ln;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var r=e.type;if(ft(r))return t1(e,r,t)}return t}function rg(e,t,r,n,i,o,s,a,l){return e=Pf(r,n,!0,e,i,o,s,a,l),e.context=tg(null),r=e.current,n=rt(),i=rn(r),o=kr(n,i),o.callback=t??null,en(r,o,i),e.current.lanes=i,ns(e,i,n),pt(e,n),e}function Dl(e,t,r,n){var i=t.current,o=rt(),s=rn(i);return r=tg(r),t.context===null?t.context=r:t.pendingContext=r,t=kr(o,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=en(i,t,s),e!==null&&(Kt(e,i,s,o),Js(e,i,s)),s}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ph(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Of(e,t){Ph(e,t),(e=e.alternate)&&Ph(e,t)}function Nw(){return null}var ng=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rf(e){this._internalRoot=e}Ll.prototype.render=Rf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Dl(e,t,null,null)};Ll.prototype.unmount=Rf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Un(function(){Dl(null,e,null,null)}),t[Nr]=null}};function Ll(e){this._internalRoot=e}Ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=D0();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Wr.length&&t!==0&&t<Wr[r].priority;r++);Wr.splice(r,0,e),r===0&&z0(e)}};function Tf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Oh(){}function Pw(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var c=tl(s);o.call(c)}}var s=rg(t,n,e,0,null,!1,!1,"",Oh);return e._reactRootContainer=s,e[Nr]=s.current,Lo(e.nodeType===8?e.parentNode:e),Un(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var a=n;n=function(){var c=tl(l);a.call(c)}}var l=Pf(e,0,!1,null,null,!1,!1,"",Oh);return e._reactRootContainer=l,e[Nr]=l.current,Lo(e.nodeType===8?e.parentNode:e),Un(function(){Dl(t,l,r,n)}),l}function Al(e,t,r,n,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=tl(s);a.call(l)}}Dl(t,s,e,i)}else s=Pw(r,t,e,i,n);return tl(s)}T0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=uo(t.pendingLanes);r!==0&&(Qd(t,r|1),pt(t,Ee()),!(Z&6)&&(Oi=Ee()+500,pn()))}break;case 13:Un(function(){var n=Pr(e,1);if(n!==null){var i=rt();Kt(n,e,1,i)}}),Of(e,1)}};Zd=function(e){if(e.tag===13){var t=Pr(e,134217728);if(t!==null){var r=rt();Kt(t,e,134217728,r)}Of(e,134217728)}};M0=function(e){if(e.tag===13){var t=rn(e),r=Pr(e,t);if(r!==null){var n=rt();Kt(r,e,t,n)}Of(e,t)}};D0=function(){return re};L0=function(e,t){var r=re;try{return re=e,t()}finally{re=r}};Ec=function(e,t,r){switch(t){case"input":if(vc(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=bl(n);if(!i)throw Error(N(90));f0(n),vc(n,i)}}}break;case"textarea":h0(e,r);break;case"select":t=r.value,t!=null&&mi(e,!!r.multiple,t,!1)}};S0=Ef;_0=Un;var Ow={usingClientEntryPoint:!1,Events:[os,si,bl,x0,w0,Ef]},to={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rw={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=E0(e),e===null?null:e.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||Nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{kl=Ls.inject(Rw),ur=Ls}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ow;jt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tf(t))throw Error(N(200));return bw(e,t,null,r)};jt.createRoot=function(e,t){if(!Tf(e))throw Error(N(299));var r=!1,n="",i=ng;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Pf(e,1,!1,null,null,r,!1,n,i),e[Nr]=t.current,Lo(e.nodeType===8?e.parentNode:e),new Rf(t)};jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=E0(t),e=e===null?null:e.stateNode,e};jt.flushSync=function(e){return Un(e)};jt.hydrate=function(e,t,r){if(!zl(t))throw Error(N(200));return Al(null,e,t,!0,r)};jt.hydrateRoot=function(e,t,r){if(!Tf(e))throw Error(N(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",s=ng;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=rg(t,null,e,1,r??null,i,!1,o,s),e[Nr]=t.current,Lo(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Ll(t)};jt.render=function(e,t,r){if(!zl(t))throw Error(N(200));return Al(null,e,t,!1,r)};jt.unmountComponentAtNode=function(e){if(!zl(e))throw Error(N(40));return e._reactRootContainer?(Un(function(){Al(null,null,e,!1,function(){e._reactRootContainer=null,e[Nr]=null})}),!0):!1};jt.unstable_batchedUpdates=Ef;jt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!zl(r))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Al(e,t,r,!1,n)};jt.version="18.3.1-next-f1338f8080-20240426";function ig(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ig)}catch(e){console.error(e)}}ig(),i0.exports=jt;var Tw=i0.exports,Rh=Tw;dc.createRoot=Rh.createRoot,dc.hydrateRoot=Rh.hydrateRoot;function og(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=og(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Vr(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=og(e))&&(n&&(n+=" "),n+=t);return n}const Bo=e=>typeof e=="number"&&!isNaN(e),Tn=e=>typeof e=="string",wt=e=>typeof e=="function",oa=e=>Tn(e)||wt(e)?e:null,id=e=>b.isValidElement(e)||Tn(e)||wt(e)||Bo(e);function Mw(e,t,r){r===void 0&&(r=300);const{scrollHeight:n,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=n+"px",i.transition=`all ${r}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,r)})})}function Il(e){let{enter:t,exit:r,appendPosition:n=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(s){let{children:a,position:l,preventExitTransition:c,done:d,nodeRef:f,isIn:p,playToast:x}=s;const y=n?`${t}--${l}`:t,v=n?`${r}--${l}`:r,S=b.useRef(0);return b.useLayoutEffect(()=>{const g=f.current,h=y.split(" "),m=w=>{w.target===f.current&&(x(),g.removeEventListener("animationend",m),g.removeEventListener("animationcancel",m),S.current===0&&w.type!=="animationcancel"&&g.classList.remove(...h))};g.classList.add(...h),g.addEventListener("animationend",m),g.addEventListener("animationcancel",m)},[]),b.useEffect(()=>{const g=f.current,h=()=>{g.removeEventListener("animationend",h),i?Mw(g,d,o):d()};p||(c?h():(S.current=1,g.className+=` ${v}`,g.addEventListener("animationend",h)))},[p]),M.createElement(M.Fragment,null,a)}}function Th(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const tt=new Map;let Ho=[];const od=new Set,Dw=e=>od.forEach(t=>t(e)),sg=()=>tt.size>0;function ag(e,t){var r;if(t)return!((r=tt.get(t))==null||!r.isToastActive(e));let n=!1;return tt.forEach(i=>{i.isToastActive(e)&&(n=!0)}),n}function lg(e,t){id(e)&&(sg()||Ho.push({content:e,options:t}),tt.forEach(r=>{r.buildToast(e,t)}))}function Mh(e,t){tt.forEach(r=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===r.id&&r.toggle(e,t==null?void 0:t.id):r.toggle(e,t==null?void 0:t.id)})}function Lw(e){const{subscribe:t,getSnapshot:r,setProps:n}=b.useRef(function(o){const s=o.containerId||1;return{subscribe(a){const l=function(d,f,p){let x=1,y=0,v=[],S=[],g=[],h=f;const m=new Map,w=new Set,j=()=>{g=Array.from(m.values()),w.forEach(k=>k())},E=k=>{S=k==null?[]:S.filter(T=>T!==k),j()},_=k=>{const{toastId:T,onOpen:A,updateId:ee,children:_e}=k.props,Ve=ee==null;k.staleId&&m.delete(k.staleId),m.set(T,k),S=[...S,k.props.toastId].filter(Ge=>Ge!==k.staleId),j(),p(Th(k,Ve?"added":"updated")),Ve&&wt(A)&&A(b.isValidElement(_e)&&_e.props)};return{id:d,props:h,observe:k=>(w.add(k),()=>w.delete(k)),toggle:(k,T)=>{m.forEach(A=>{T!=null&&T!==A.props.toastId||wt(A.toggle)&&A.toggle(k)})},removeToast:E,toasts:m,clearQueue:()=>{y-=v.length,v=[]},buildToast:(k,T)=>{if((V=>{let{containerId:be,toastId:ge,updateId:Me}=V;const ke=be?be!==d:d!==1,Xe=m.has(ge)&&Me==null;return ke||Xe})(T))return;const{toastId:A,updateId:ee,data:_e,staleId:Ve,delay:Ge}=T,ae=()=>{E(A)},Pt=ee==null;Pt&&y++;const oe={...h,style:h.toastStyle,key:x++,...Object.fromEntries(Object.entries(T).filter(V=>{let[be,ge]=V;return ge!=null})),toastId:A,updateId:ee,data:_e,closeToast:ae,isIn:!1,className:oa(T.className||h.toastClassName),bodyClassName:oa(T.bodyClassName||h.bodyClassName),progressClassName:oa(T.progressClassName||h.progressClassName),autoClose:!T.isLoading&&(O=T.autoClose,z=h.autoClose,O===!1||Bo(O)&&O>0?O:z),deleteToast(){const V=m.get(A),{onClose:be,children:ge}=V.props;wt(be)&&be(b.isValidElement(ge)&&ge.props),p(Th(V,"removed")),m.delete(A),y--,y<0&&(y=0),v.length>0?_(v.shift()):j()}};var O,z;oe.closeButton=h.closeButton,T.closeButton===!1||id(T.closeButton)?oe.closeButton=T.closeButton:T.closeButton===!0&&(oe.closeButton=!id(h.closeButton)||h.closeButton);let F=k;b.isValidElement(k)&&!Tn(k.type)?F=b.cloneElement(k,{closeToast:ae,toastProps:oe,data:_e}):wt(k)&&(F=k({closeToast:ae,toastProps:oe,data:_e}));const U={content:F,props:oe,staleId:Ve};h.limit&&h.limit>0&&y>h.limit&&Pt?v.push(U):Bo(Ge)?setTimeout(()=>{_(U)},Ge):_(U)},setProps(k){h=k},setToggle:(k,T)=>{m.get(k).toggle=T},isToastActive:k=>S.some(T=>T===k),getSnapshot:()=>h.newestOnTop?g.reverse():g}}(s,o,Dw);tt.set(s,l);const c=l.observe(a);return Ho.forEach(d=>lg(d.content,d.options)),Ho=[],()=>{c(),tt.delete(s)}},setProps(a){var l;(l=tt.get(s))==null||l.setProps(a)},getSnapshot(){var a;return(a=tt.get(s))==null?void 0:a.getSnapshot()}}}(e)).current;n(e);const i=b.useSyncExternalStore(t,r,r);return{getToastToRender:function(o){if(!i)return[];const s=new Map;return i.forEach(a=>{const{position:l}=a.props;s.has(l)||s.set(l,[]),s.get(l).push(a)}),Array.from(s,a=>o(a[0],a[1]))},isToastActive:ag,count:i==null?void 0:i.length}}function zw(e){const[t,r]=b.useState(!1),[n,i]=b.useState(!1),o=b.useRef(null),s=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:l,closeToast:c,onClick:d,closeOnClick:f}=e;var p,x;function y(){r(!0)}function v(){r(!1)}function S(m){const w=o.current;s.canDrag&&w&&(s.didMove=!0,t&&v(),s.delta=e.draggableDirection==="x"?m.clientX-s.start:m.clientY-s.start,s.start!==m.clientX&&(s.canCloseOnClick=!1),w.style.transform=`translate3d(${e.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`},0)`,w.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",g);const m=o.current;if(s.canDrag&&s.didMove&&m){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),e.closeToast(),void e.collapseAll();m.style.transition="transform 0.2s, opacity 0.2s",m.style.removeProperty("transform"),m.style.removeProperty("opacity")}}(x=tt.get((p={id:e.toastId,containerId:e.containerId,fn:r}).containerId||1))==null||x.setToggle(p.id,p.fn),b.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||v(),window.addEventListener("focus",y),window.addEventListener("blur",v),()=>{window.removeEventListener("focus",y),window.removeEventListener("blur",v)}},[e.pauseOnFocusLoss]);const h={onPointerDown:function(m){if(e.draggable===!0||e.draggable===m.pointerType){s.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",g);const w=o.current;s.canCloseOnClick=!0,s.canDrag=!0,w.style.transition="none",e.draggableDirection==="x"?(s.start=m.clientX,s.removalDistance=w.offsetWidth*(e.draggablePercent/100)):(s.start=m.clientY,s.removalDistance=w.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(m){const{top:w,bottom:j,left:E,right:_}=o.current.getBoundingClientRect();m.nativeEvent.type!=="touchend"&&e.pauseOnHover&&m.clientX>=E&&m.clientX<=_&&m.clientY>=w&&m.clientY<=j?v():y()}};return a&&l&&(h.onMouseEnter=v,e.stacked||(h.onMouseLeave=y)),f&&(h.onClick=m=>{d&&d(m),s.canCloseOnClick&&c()}),{playToast:y,pauseToast:v,isRunning:t,preventExitTransition:n,toastRef:o,eventHandlers:h}}function Aw(e){let{delay:t,isRunning:r,closeToast:n,type:i="default",hide:o,className:s,style:a,controlledProgress:l,progress:c,rtl:d,isIn:f,theme:p}=e;const x=o||l&&c===0,y={...a,animationDuration:`${t}ms`,animationPlayState:r?"running":"paused"};l&&(y.transform=`scaleX(${c})`);const v=Vr("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":d}),S=wt(s)?s({rtl:d,type:i,defaultClassName:v}):Vr(v,s),g={[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{f&&n()}};return M.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":x},M.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${i}`}),M.createElement("div",{role:"progressbar","aria-hidden":x?"true":"false","aria-label":"notification timer",className:S,style:y,...g}))}let Iw=1;const ug=()=>""+Iw++;function Fw(e){return e&&(Tn(e.toastId)||Bo(e.toastId))?e.toastId:ug()}function ko(e,t){return lg(e,t),t.toastId}function rl(e,t){return{...t,type:t&&t.type||e,toastId:Fw(t)}}function zs(e){return(t,r)=>ko(t,rl(e,r))}function $(e,t){return ko(e,rl("default",t))}$.loading=(e,t)=>ko(e,rl("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),$.promise=function(e,t,r){let n,{pending:i,error:o,success:s}=t;i&&(n=Tn(i)?$.loading(i,r):$.loading(i.render,{...r,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(d,f,p)=>{if(f==null)return void $.dismiss(n);const x={type:d,...a,...r,data:p},y=Tn(f)?{render:f}:f;return n?$.update(n,{...x,...y}):$(y.render,{...x,...y}),p},c=wt(e)?e():e;return c.then(d=>l("success",s,d)).catch(d=>l("error",o,d)),c},$.success=zs("success"),$.info=zs("info"),$.error=zs("error"),$.warning=zs("warning"),$.warn=$.warning,$.dark=(e,t)=>ko(e,rl("default",{theme:"dark",...t})),$.dismiss=function(e){(function(t){var r;if(sg()){if(t==null||Tn(r=t)||Bo(r))tt.forEach(n=>{n.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const n=tt.get(t.containerId);n?n.removeToast(t.id):tt.forEach(i=>{i.removeToast(t.id)})}}else Ho=Ho.filter(n=>t!=null&&n.options.toastId!==t)})(e)},$.clearWaitingQueue=function(e){e===void 0&&(e={}),tt.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},$.isActive=ag,$.update=function(e,t){t===void 0&&(t={});const r=((n,i)=>{var o;let{containerId:s}=i;return(o=tt.get(s||1))==null?void 0:o.toasts.get(n)})(e,t);if(r){const{props:n,content:i}=r,o={delay:100,...n,...t,toastId:t.toastId||e,updateId:ug()};o.toastId!==e&&(o.staleId=e);const s=o.render||i;delete o.render,ko(s,o)}},$.done=e=>{$.update(e,{progress:1})},$.onChange=function(e){return od.add(e),()=>{od.delete(e)}},$.play=e=>Mh(!0,e),$.pause=e=>Mh(!1,e);const $w=typeof window<"u"?b.useLayoutEffect:b.useEffect,As=e=>{let{theme:t,type:r,isLoading:n,...i}=e;return M.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${r})`,...i})},Yu={info:function(e){return M.createElement(As,{...e},M.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return M.createElement(As,{...e},M.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return M.createElement(As,{...e},M.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return M.createElement(As,{...e},M.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return M.createElement("div",{className:"Toastify__spinner"})}},Uw=e=>{const{isRunning:t,preventExitTransition:r,toastRef:n,eventHandlers:i,playToast:o}=zw(e),{closeButton:s,children:a,autoClose:l,onClick:c,type:d,hideProgressBar:f,closeToast:p,transition:x,position:y,className:v,style:S,bodyClassName:g,bodyStyle:h,progressClassName:m,progressStyle:w,updateId:j,role:E,progress:_,rtl:k,toastId:T,deleteToast:A,isIn:ee,isLoading:_e,closeOnClick:Ve,theme:Ge}=e,ae=Vr("Toastify__toast",`Toastify__toast-theme--${Ge}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":Ve}),Pt=wt(v)?v({rtl:k,position:y,type:d,defaultClassName:ae}):Vr(ae,v),oe=function(U){let{theme:V,type:be,isLoading:ge,icon:Me}=U,ke=null;const Xe={theme:V,type:be};return Me===!1||(wt(Me)?ke=Me({...Xe,isLoading:ge}):b.isValidElement(Me)?ke=b.cloneElement(Me,Xe):ge?ke=Yu.spinner():(mn=>mn in Yu)(be)&&(ke=Yu[be](Xe))),ke}(e),O=!!_||!l,z={closeToast:p,type:d,theme:Ge};let F=null;return s===!1||(F=wt(s)?s(z):b.isValidElement(s)?b.cloneElement(s,z):function(U){let{closeToast:V,theme:be,ariaLabel:ge="close"}=U;return M.createElement("button",{className:`Toastify__close-button Toastify__close-button--${be}`,type:"button",onClick:Me=>{Me.stopPropagation(),V(Me)},"aria-label":ge},M.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},M.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(z)),M.createElement(x,{isIn:ee,done:A,position:y,preventExitTransition:r,nodeRef:n,playToast:o},M.createElement("div",{id:T,onClick:c,"data-in":ee,className:Pt,...i,style:S,ref:n},M.createElement("div",{...ee&&{role:E},className:wt(g)?g({type:d}):Vr("Toastify__toast-body",g),style:h},oe!=null&&M.createElement("div",{className:Vr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!_e})},oe),M.createElement("div",null,a)),F,M.createElement(Aw,{...j&&!O?{key:`pb-${j}`}:{},rtl:k,theme:Ge,delay:l,isRunning:t,isIn:ee,closeToast:p,hide:f,type:d,style:w,className:m,controlledProgress:O,progress:_||0})))},Fl=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Ww=Il(Fl("bounce",!0));Il(Fl("slide",!0));Il(Fl("zoom"));Il(Fl("flip"));const Yw={position:"top-right",transition:Ww,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Bw(e){let t={...Yw,...e};const r=e.stacked,[n,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:s,isToastActive:a,count:l}=Lw(t),{className:c,style:d,rtl:f,containerId:p}=t;function x(v){const S=Vr("Toastify__toast-container",`Toastify__toast-container--${v}`,{"Toastify__toast-container--rtl":f});return wt(c)?c({position:v,rtl:f,defaultClassName:S}):Vr(S,oa(c))}function y(){r&&(i(!0),$.play())}return $w(()=>{if(r){var v;const S=o.current.querySelectorAll('[data-in="true"]'),g=12,h=(v=t.position)==null?void 0:v.includes("top");let m=0,w=0;Array.from(S).reverse().forEach((j,E)=>{const _=j;_.classList.add("Toastify__toast--stacked"),E>0&&(_.dataset.collapsed=`${n}`),_.dataset.pos||(_.dataset.pos=h?"top":"bot");const k=m*(n?.2:1)+(n?0:g*E);_.style.setProperty("--y",`${h?k:-1*k}px`),_.style.setProperty("--g",`${g}`),_.style.setProperty("--s",""+(1-(n?w:0))),m+=_.offsetHeight,w+=.025})}},[n,l,r]),M.createElement("div",{ref:o,className:"Toastify",id:p,onMouseEnter:()=>{r&&(i(!1),$.pause())},onMouseLeave:y},s((v,S)=>{const g=S.length?{...d}:{...d,pointerEvents:"none"};return M.createElement("div",{className:x(v),style:g,key:`container-${v}`},S.map(h=>{let{content:m,props:w}=h;return M.createElement(Uw,{...w,stacked:r,collapseAll:y,isIn:a(w.toastId,w.containerId),style:w.style,key:`toast-${w.key}`},m)}))}))}/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Vo.apply(this,arguments)}var Gr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Gr||(Gr={}));const Dh="popstate";function Hw(e){e===void 0&&(e={});function t(n,i){let{pathname:o,search:s,hash:a}=n.location;return sd("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:nl(i)}return Gw(t,r,null,e)}function Oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cg(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Vw(){return Math.random().toString(36).substr(2,8)}function Lh(e,t){return{usr:e.state,key:e.key,idx:t}}function sd(e,t,r,n){return r===void 0&&(r=null),Vo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ui(t):t,{state:r,key:t&&t.key||n||Vw()})}function nl(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ui(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Gw(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,s=i.history,a=Gr.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(Vo({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=Gr.Pop;let S=d(),g=S==null?null:S-c;c=S,l&&l({action:a,location:v.location,delta:g})}function p(S,g){a=Gr.Push;let h=sd(v.location,S,g);c=d()+1;let m=Lh(h,c),w=v.createHref(h);try{s.pushState(m,"",w)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(w)}o&&l&&l({action:a,location:v.location,delta:1})}function x(S,g){a=Gr.Replace;let h=sd(v.location,S,g);c=d();let m=Lh(h,c),w=v.createHref(h);s.replaceState(m,"",w),o&&l&&l({action:a,location:v.location,delta:0})}function y(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:nl(S);return h=h.replace(/ $/,"%20"),Oe(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let v={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Dh,f),l=S,()=>{i.removeEventListener(Dh,f),l=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let g=y(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:x,go(S){return s.go(S)}};return v}var zh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zh||(zh={}));function qw(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?Ui(t):t,i=Mf(n.pathname||"/",r);if(i==null)return null;let o=dg(e);Kw(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let l=a5(i);s=i5(o[a],l)}return s}function dg(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Oe(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let c=on([n,l.relativePath]),d=r.concat(l);o.children&&o.children.length>0&&(Oe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),dg(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:r5(c,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of fg(o.path))i(o,s,l)}),t}function fg(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let s=fg(n.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Kw(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:n5(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Qw=/^:[\w-]+$/,Zw=3,Jw=2,Xw=1,e5=10,t5=-2,Ah=e=>e==="*";function r5(e,t){let r=e.split("/"),n=r.length;return r.some(Ah)&&(n+=t5),t&&(n+=Jw),r.filter(i=>!Ah(i)).reduce((i,o)=>i+(Qw.test(o)?Zw:o===""?Xw:e5),n)}function n5(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function i5(e,t){let{routesMeta:r}=e,n={},i="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],l=s===r.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=o5({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!d)return null;Object.assign(n,d.params);let f=a.route;o.push({params:n,pathname:on([i,d.pathname]),pathnameBase:d5(on([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=on([i,d.pathnameBase]))}return o}function o5(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=s5(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:n.reduce((c,d,f)=>{let{paramName:p,isOptional:x}=d;if(p==="*"){let v=a[f]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[f];return x&&!y?c[p]=void 0:c[p]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function s5(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),cg(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(n.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function a5(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return cg(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Mf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function l5(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?Ui(e):e;return{pathname:r?r.startsWith("/")?r:u5(r,t):t,search:f5(n),hash:p5(i)}}function u5(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Bu(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function c5(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function pg(e,t){let r=c5(e);return t?r.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function hg(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=Ui(e):(i=Vo({},e),Oe(!i.pathname||!i.pathname.includes("?"),Bu("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),Bu("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),Bu("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=r;else{let f=t.length-1;if(!n&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=l5(i,a),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const on=e=>e.join("/").replace(/\/\/+/g,"/"),d5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),f5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,p5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function h5(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const mg=["post","put","patch","delete"];new Set(mg);const m5=["get",...mg];new Set(m5);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Go(){return Go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Go.apply(this,arguments)}const Df=b.createContext(null),g5=b.createContext(null),qn=b.createContext(null),$l=b.createContext(null),hn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),gg=b.createContext(null);function y5(e,t){let{relative:r}=t===void 0?{}:t;as()||Oe(!1);let{basename:n,navigator:i}=b.useContext(qn),{hash:o,pathname:s,search:a}=vg(e,{relative:r}),l=s;return n!=="/"&&(l=s==="/"?n:on([n,s])),i.createHref({pathname:l,search:a,hash:o})}function as(){return b.useContext($l)!=null}function Ul(){return as()||Oe(!1),b.useContext($l).location}function yg(e){b.useContext(qn).static||b.useLayoutEffect(e)}function ls(){let{isDataRoute:e}=b.useContext(hn);return e?R5():v5()}function v5(){as()||Oe(!1);let e=b.useContext(Df),{basename:t,future:r,navigator:n}=b.useContext(qn),{matches:i}=b.useContext(hn),{pathname:o}=Ul(),s=JSON.stringify(pg(i,r.v7_relativeSplatPath)),a=b.useRef(!1);return yg(()=>{a.current=!0}),b.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){n.go(c);return}let f=hg(c,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:on([t,f.pathname])),(d.replace?n.replace:n.push)(f,d.state,d)},[t,n,s,o,e])}function x5(){let{matches:e}=b.useContext(hn),t=e[e.length-1];return t?t.params:{}}function vg(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=b.useContext(qn),{matches:i}=b.useContext(hn),{pathname:o}=Ul(),s=JSON.stringify(pg(i,n.v7_relativeSplatPath));return b.useMemo(()=>hg(e,JSON.parse(s),o,r==="path"),[e,s,o,r])}function w5(e,t){return S5(e,t)}function S5(e,t,r,n){as()||Oe(!1);let{navigator:i}=b.useContext(qn),{matches:o}=b.useContext(hn),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Ul(),d;if(t){var f;let S=typeof t=="string"?Ui(t):t;l==="/"||(f=S.pathname)!=null&&f.startsWith(l)||Oe(!1),d=S}else d=c;let p=d.pathname||"/",x=p;if(l!=="/"){let S=l.replace(/^\//,"").split("/");x="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=qw(e,{pathname:x}),v=j5(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:on([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:on([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,r,n);return t&&v?b.createElement($l.Provider,{value:{location:Go({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Gr.Pop}},v):v}function _5(){let e=O5(),t=h5(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),r?b.createElement("pre",{style:i},r):null,null)}const k5=b.createElement(_5,null);class C5 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?b.createElement(hn.Provider,{value:this.props.routeContext},b.createElement(gg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function E5(e){let{routeContext:t,match:r,children:n}=e,i=b.useContext(Df);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(hn.Provider,{value:t},n)}function j5(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var o;if((o=r)!=null&&o.errors)e=r.matches;else return null}let s=e,a=(i=r)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Oe(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,c=-1;if(r&&n&&n.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:x}=r,y=f.route.loader&&p[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||y){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,p)=>{let x,y=!1,v=null,S=null;r&&(x=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||k5,l&&(c<0&&p===0?(y=!0,S=null):c===p&&(y=!0,S=f.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,p+1)),h=()=>{let m;return x?m=v:y?m=S:f.route.Component?m=b.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=d,b.createElement(E5,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:r!=null},children:m})};return r&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?b.createElement(C5,{location:r.location,revalidation:r.revalidation,component:v,error:x,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var xg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xg||{}),il=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(il||{});function b5(e){let t=b.useContext(Df);return t||Oe(!1),t}function N5(e){let t=b.useContext(g5);return t||Oe(!1),t}function P5(e){let t=b.useContext(hn);return t||Oe(!1),t}function wg(e){let t=P5(),r=t.matches[t.matches.length-1];return r.route.id||Oe(!1),r.route.id}function O5(){var e;let t=b.useContext(gg),r=N5(il.UseRouteError),n=wg(il.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function R5(){let{router:e}=b5(xg.UseNavigateStable),t=wg(il.UseNavigateStable),r=b.useRef(!1);return yg(()=>{r.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Go({fromRouteId:t},o)))},[e,t])}function Wt(e){Oe(!1)}function T5(e){let{basename:t="/",children:r=null,location:n,navigationType:i=Gr.Pop,navigator:o,static:s=!1,future:a}=e;as()&&Oe(!1);let l=t.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:l,navigator:o,static:s,future:Go({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof n=="string"&&(n=Ui(n));let{pathname:d="/",search:f="",hash:p="",state:x=null,key:y="default"}=n,v=b.useMemo(()=>{let S=Mf(d,l);return S==null?null:{location:{pathname:S,search:f,hash:p,state:x,key:y},navigationType:i}},[l,d,f,p,x,y,i]);return v==null?null:b.createElement(qn.Provider,{value:c},b.createElement($l.Provider,{children:r,value:v}))}function M5(e){let{children:t,location:r}=e;return w5(ad(t),r)}new Promise(()=>{});function ad(e,t){t===void 0&&(t=[]);let r=[];return b.Children.forEach(e,(n,i)=>{if(!b.isValidElement(n))return;let o=[...t,i];if(n.type===b.Fragment){r.push.apply(r,ad(n.props.children,o));return}n.type!==Wt&&Oe(!1),!n.props.index||!n.props.children||Oe(!1);let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=ad(n.props.children,o)),r.push(s)}),r}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ld(){return ld=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ld.apply(this,arguments)}function D5(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function L5(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function z5(e,t){return e.button===0&&(!t||t==="_self")&&!L5(e)}const A5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],I5="6";try{window.__reactRouterVersion=I5}catch{}const F5="startTransition",Ih=cc[F5];function $5(e){let{basename:t,children:r,future:n,window:i}=e,o=b.useRef();o.current==null&&(o.current=Hw({window:i,v5Compat:!0}));let s=o.current,[a,l]=b.useState({action:s.action,location:s.location}),{v7_startTransition:c}=n||{},d=b.useCallback(f=>{c&&Ih?Ih(()=>l(f)):l(f)},[l,c]);return b.useLayoutEffect(()=>s.listen(d),[s,d]),b.createElement(T5,{basename:t,children:r,location:a.location,navigationType:a.action,navigator:s,future:n})}const U5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",W5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ie=b.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:d,unstable_viewTransition:f}=t,p=D5(t,A5),{basename:x}=b.useContext(qn),y,v=!1;if(typeof c=="string"&&W5.test(c)&&(y=c,U5))try{let m=new URL(window.location.href),w=c.startsWith("//")?new URL(m.protocol+c):new URL(c),j=Mf(w.pathname,x);w.origin===m.origin&&j!=null?c=j+w.search+w.hash:v=!0}catch{}let S=y5(c,{relative:i}),g=Y5(c,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:f});function h(m){n&&n(m),m.defaultPrevented||g(m)}return b.createElement("a",ld({},p,{href:y||S,onClick:v||o?n:h,ref:r,target:l}))});var Fh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Fh||(Fh={}));var $h;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($h||($h={}));function Y5(e,t){let{target:r,replace:n,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=ls(),c=Ul(),d=vg(e,{relative:s});return b.useCallback(f=>{if(z5(f,r)){f.preventDefault();let p=n!==void 0?n:nl(c)===nl(d);l(e,{replace:p,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[c,l,d,n,i,r,e,o,s,a])}var ct=function(){return ct=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},ct.apply(this,arguments)};function ol(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,o;n<i;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var ue="-ms-",Co="-moz-",te="-webkit-",Sg="comm",Wl="rule",Lf="decl",B5="@import",_g="@keyframes",H5="@layer",kg=Math.abs,zf=String.fromCharCode,ud=Object.assign;function V5(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function Cg(e){return e.trim()}function gr(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,r){return e.replace(t,r)}function sa(e,t,r){return e.indexOf(t,r)}function $e(e,t){return e.charCodeAt(t)|0}function Ri(e,t,r){return e.slice(t,r)}function sr(e){return e.length}function Eg(e){return e.length}function fo(e,t){return t.push(e),e}function G5(e,t){return e.map(t).join("")}function Uh(e,t){return e.filter(function(r){return!gr(r,t)})}var Yl=1,Ti=1,jg=0,It=0,Ne=0,Wi="";function Bl(e,t,r,n,i,o,s,a){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:Yl,column:Ti,length:s,return:"",siblings:a}}function Fr(e,t){return ud(Bl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Jn(e){for(;e.root;)e=Fr(e.root,{children:[e]});fo(e,e.siblings)}function q5(){return Ne}function K5(){return Ne=It>0?$e(Wi,--It):0,Ti--,Ne===10&&(Ti=1,Yl--),Ne}function Qt(){return Ne=It<jg?$e(Wi,It++):0,Ti++,Ne===10&&(Ti=1,Yl++),Ne}function Mn(){return $e(Wi,It)}function aa(){return It}function Hl(e,t){return Ri(Wi,e,t)}function cd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Q5(e){return Yl=Ti=1,jg=sr(Wi=e),It=0,[]}function Z5(e){return Wi="",e}function Hu(e){return Cg(Hl(It-1,dd(e===91?e+2:e===40?e+1:e)))}function J5(e){for(;(Ne=Mn())&&Ne<33;)Qt();return cd(e)>2||cd(Ne)>3?"":" "}function X5(e,t){for(;--t&&Qt()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return Hl(e,aa()+(t<6&&Mn()==32&&Qt()==32))}function dd(e){for(;Qt();)switch(Ne){case e:return It;case 34:case 39:e!==34&&e!==39&&dd(Ne);break;case 40:e===41&&dd(e);break;case 92:Qt();break}return It}function e4(e,t){for(;Qt()&&e+Ne!==57;)if(e+Ne===84&&Mn()===47)break;return"/*"+Hl(t,It-1)+"*"+zf(e===47?e:Qt())}function t4(e){for(;!cd(Mn());)Qt();return Hl(e,It)}function r4(e){return Z5(la("",null,null,null,[""],e=Q5(e),0,[0],e))}function la(e,t,r,n,i,o,s,a,l){for(var c=0,d=0,f=s,p=0,x=0,y=0,v=1,S=1,g=1,h=0,m="",w=i,j=o,E=n,_=m;S;)switch(y=h,h=Qt()){case 40:if(y!=108&&$e(_,f-1)==58){sa(_+=H(Hu(h),"&","&\f"),"&\f",kg(c?a[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:_+=Hu(h);break;case 9:case 10:case 13:case 32:_+=J5(y);break;case 92:_+=X5(aa()-1,7);continue;case 47:switch(Mn()){case 42:case 47:fo(n4(e4(Qt(),aa()),t,r,l),l);break;default:_+="/"}break;case 123*v:a[c++]=sr(_)*g;case 125*v:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+d:g==-1&&(_=H(_,/\f/g,"")),x>0&&sr(_)-f&&fo(x>32?Yh(_+";",n,r,f-1,l):Yh(H(_," ","")+";",n,r,f-2,l),l);break;case 59:_+=";";default:if(fo(E=Wh(_,t,r,c,d,i,a,m,w=[],j=[],f,o),o),h===123)if(d===0)la(_,t,E,E,w,o,f,a,j);else switch(p===99&&$e(_,3)===110?100:p){case 100:case 108:case 109:case 115:la(e,E,E,n&&fo(Wh(e,E,E,0,0,i,a,m,i,w=[],f,j),j),i,j,f,a,n?w:j);break;default:la(_,E,E,E,[""],j,0,a,j)}}c=d=x=0,v=g=1,m=_="",f=s;break;case 58:f=1+sr(_),x=y;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&K5()==125)continue}switch(_+=zf(h),h*v){case 38:g=d>0?1:(_+="\f",-1);break;case 44:a[c++]=(sr(_)-1)*g,g=1;break;case 64:Mn()===45&&(_+=Hu(Qt())),p=Mn(),d=f=sr(m=_+=t4(aa())),h++;break;case 45:y===45&&sr(_)==2&&(v=0)}}return o}function Wh(e,t,r,n,i,o,s,a,l,c,d,f){for(var p=i-1,x=i===0?o:[""],y=Eg(x),v=0,S=0,g=0;v<n;++v)for(var h=0,m=Ri(e,p+1,p=kg(S=s[v])),w=e;h<y;++h)(w=Cg(S>0?x[h]+" "+m:H(m,/&\f/g,x[h])))&&(l[g++]=w);return Bl(e,t,r,i===0?Wl:a,l,c,d,f)}function n4(e,t,r,n){return Bl(e,t,r,Sg,zf(q5()),Ri(e,2,-2),0,n)}function Yh(e,t,r,n,i){return Bl(e,t,r,Lf,Ri(e,0,n),Ri(e,n+1,-1),n,i)}function bg(e,t,r){switch(V5(e,t)){case 5103:return te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return te+e+e;case 4789:return Co+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return te+e+Co+e+ue+e+e;case 5936:switch($e(e,t+11)){case 114:return te+e+ue+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return te+e+ue+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return te+e+ue+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return te+e+ue+e+e;case 6165:return te+e+ue+"flex-"+e+e;case 5187:return te+e+H(e,/(\w+).+(:[^]+)/,te+"box-$1$2"+ue+"flex-$1$2")+e;case 5443:return te+e+ue+"flex-item-"+H(e,/flex-|-self/g,"")+(gr(e,/flex-|baseline/)?"":ue+"grid-row-"+H(e,/flex-|-self/g,""))+e;case 4675:return te+e+ue+"flex-line-pack"+H(e,/align-content|flex-|-self/g,"")+e;case 5548:return te+e+ue+H(e,"shrink","negative")+e;case 5292:return te+e+ue+H(e,"basis","preferred-size")+e;case 6060:return te+"box-"+H(e,"-grow","")+te+e+ue+H(e,"grow","positive")+e;case 4554:return te+H(e,/([^-])(transform)/g,"$1"+te+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,te+"$1"),/(image-set)/,te+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,te+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,te+"box-pack:$3"+ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+te+e+e;case 4200:if(!gr(e,/flex-|baseline/))return ue+"grid-column-align"+Ri(e,t)+e;break;case 2592:case 3360:return ue+H(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,gr(n.props,/grid-\w+-end/)})?~sa(e+(r=r[t].value),"span",0)?e:ue+H(e,"-start","")+e+ue+"grid-row-span:"+(~sa(r,"span",0)?gr(r,/\d+/):+gr(r,/\d+/)-+gr(e,/\d+/))+";":ue+H(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return gr(n.props,/grid-\w+-start/)})?e:ue+H(H(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sr(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+te+"$2-$3$1"+Co+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~sa(e,"stretch",0)?bg(H(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return H(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,o,s,a,l,c){return ue+i+":"+o+c+(s?ue+i+"-span:"+(a?l:+l-+o)+c:"")+e});case 4949:if($e(e,t+6)===121)return H(e,":",":"+te)+e;break;case 6444:switch($e(e,$e(e,14)===45?18:11)){case 120:return H(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+te+($e(e,14)===45?"inline-":"")+"box$3$1"+te+"$2$3$1"+ue+"$2box$3")+e;case 100:return H(e,":",":"+ue)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(e,"scroll-","scroll-snap-")+e}return e}function sl(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function i4(e,t,r,n){switch(e.type){case H5:if(e.children.length)break;case B5:case Lf:return e.return=e.return||e.value;case Sg:return"";case _g:return e.return=e.value+"{"+sl(e.children,n)+"}";case Wl:if(!sr(e.value=e.props.join(",")))return""}return sr(r=sl(e.children,n))?e.return=e.value+"{"+r+"}":""}function o4(e){var t=Eg(e);return function(r,n,i,o){for(var s="",a=0;a<t;a++)s+=e[a](r,n,i,o)||"";return s}}function s4(e){return function(t){t.root||(t=t.return)&&e(t)}}function a4(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Lf:e.return=bg(e.value,e.length,r);return;case _g:return sl([Fr(e,{value:H(e.value,"@","@"+te)})],n);case Wl:if(e.length)return G5(r=e.props,function(i){switch(gr(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jn(Fr(e,{props:[H(i,/:(read-\w+)/,":"+Co+"$1")]})),Jn(Fr(e,{props:[i]})),ud(e,{props:Uh(r,n)});break;case"::placeholder":Jn(Fr(e,{props:[H(i,/:(plac\w+)/,":"+te+"input-$1")]})),Jn(Fr(e,{props:[H(i,/:(plac\w+)/,":"+Co+"$1")]})),Jn(Fr(e,{props:[H(i,/:(plac\w+)/,ue+"input-$1")]})),Jn(Fr(e,{props:[i]})),ud(e,{props:Uh(r,n)});break}return""})}}var l4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yt={},Mi=typeof process<"u"&&yt!==void 0&&(yt.REACT_APP_SC_ATTR||yt.SC_ATTR)||"data-styled",Ng="active",Pg="data-styled-version",Vl="6.1.11",Af=`/*!sc*/
`,If=typeof window<"u"&&"HTMLElement"in window,u4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==""?yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.SC_DISABLE_SPEEDY!==void 0&&yt.SC_DISABLE_SPEEDY!==""&&yt.SC_DISABLE_SPEEDY!=="false"&&yt.SC_DISABLE_SPEEDY),Gl=Object.freeze([]),Di=Object.freeze({});function c4(e,t,r){return r===void 0&&(r=Di),e.theme!==r.theme&&e.theme||t||r.theme}var Og=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),d4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,f4=/(^-|-$)/g;function Bh(e){return e.replace(d4,"-").replace(f4,"")}var p4=/(a)(d)/gi,Is=52,Hh=function(e){return String.fromCharCode(e+(e>25?39:97))};function fd(e){var t,r="";for(t=Math.abs(e);t>Is;t=t/Is|0)r=Hh(t%Is)+r;return(Hh(t%Is)+r).replace(p4,"$1-$2")}var Vu,Rg=5381,pi=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Tg=function(e){return pi(Rg,e)};function h4(e){return fd(Tg(e)>>>0)}function m4(e){return e.displayName||e.name||"Component"}function Gu(e){return typeof e=="string"&&!0}var Mg=typeof Symbol=="function"&&Symbol.for,Dg=Mg?Symbol.for("react.memo"):60115,g4=Mg?Symbol.for("react.forward_ref"):60112,y4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},v4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},x4=((Vu={})[g4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vu[Dg]=Lg,Vu);function Vh(e){return("type"in(t=e)&&t.type.$$typeof)===Dg?Lg:"$$typeof"in e?x4[e.$$typeof]:y4;var t}var w4=Object.defineProperty,S4=Object.getOwnPropertyNames,Gh=Object.getOwnPropertySymbols,_4=Object.getOwnPropertyDescriptor,k4=Object.getPrototypeOf,qh=Object.prototype;function zg(e,t,r){if(typeof t!="string"){if(qh){var n=k4(t);n&&n!==qh&&zg(e,n,r)}var i=S4(t);Gh&&(i=i.concat(Gh(t)));for(var o=Vh(e),s=Vh(t),a=0;a<i.length;++a){var l=i[a];if(!(l in v4||r&&r[l]||s&&l in s||o&&l in o)){var c=_4(t,l);try{w4(e,l,c)}catch{}}}}return e}function Li(e){return typeof e=="function"}function Ff(e){return typeof e=="object"&&"styledComponentId"in e}function jn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Kh(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function qo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function pd(e,t,r){if(r===void 0&&(r=!1),!r&&!qo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=pd(e[n],t[n]);else if(qo(t))for(var n in t)e[n]=pd(e[n],t[n]);return e}function $f(e,t){Object.defineProperty(e,"toString",{value:t})}function us(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var C4=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,o=i;t>=o;)if((o<<=1)<0)throw us(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,r.length);s<l;s++)this.tag.insertRule(a,r[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var o=n;o<i;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),o=i+n,s=i;s<o;s++)r+="".concat(this.tag.getRule(s)).concat(Af);return r},e}(),ua=new Map,al=new Map,ca=1,Fs=function(e){if(ua.has(e))return ua.get(e);for(;al.has(ca);)ca++;var t=ca++;return ua.set(e,t),al.set(t,e),t},E4=function(e,t){ca=t+1,ua.set(e,t),al.set(t,e)},j4="style[".concat(Mi,"][").concat(Pg,'="').concat(Vl,'"]'),b4=new RegExp("^".concat(Mi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),N4=function(e,t,r){for(var n,i=r.split(","),o=0,s=i.length;o<s;o++)(n=i[o])&&e.registerName(t,n)},P4=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Af),i=[],o=0,s=n.length;o<s;o++){var a=n[o].trim();if(a){var l=a.match(b4);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(E4(d,c),N4(e,d,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function O4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ag=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Mi,"]")));return l[l.length-1]}(r),o=i!==void 0?i.nextSibling:null;n.setAttribute(Mi,Ng),n.setAttribute(Pg,Vl);var s=O4();return s&&n.setAttribute("nonce",s),r.insertBefore(n,o),n},R4=function(){function e(t){this.element=Ag(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,o=n.length;i<o;i++){var s=n[i];if(s.ownerNode===r)return s}throw us(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),T4=function(){function e(t){this.element=Ag(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),M4=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Qh=If,D4={isServer:!If,useCSSOMInjection:!u4},Ig=function(){function e(t,r,n){t===void 0&&(t=Di),r===void 0&&(r={});var i=this;this.options=ct(ct({},D4),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&If&&Qh&&(Qh=!1,function(o){for(var s=document.querySelectorAll(j4),a=0,l=s.length;a<l;a++){var c=s[a];c&&c.getAttribute(Mi)!==Ng&&(P4(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),$f(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(f){var p=function(g){return al.get(g)}(f);if(p===void 0)return"continue";var x=o.names.get(p),y=s.getGroup(f);if(x===void 0||y.length===0)return"continue";var v="".concat(Mi,".g").concat(f,'[id="').concat(p,'"]'),S="";x!==void 0&&x.forEach(function(g){g.length>0&&(S+="".concat(g,","))}),l+="".concat(y).concat(v,'{content:"').concat(S,'"}').concat(Af)},d=0;d<a;d++)c(d);return l}(i)})}return e.registerId=function(t){return Fs(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(ct(ct({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new M4(i):n?new R4(i):new T4(i)}(this.options),new C4(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Fs(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Fs(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Fs(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),L4=/&/g,z4=/^\s*\/\/.*$/gm;function Fg(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Fg(r.children,t)),r})}function A4(e){var t,r,n,i=Di,o=i.options,s=o===void 0?Di:o,a=i.plugins,l=a===void 0?Gl:a,c=function(p,x,y){return y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(t):p},d=l.slice();d.push(function(p){p.type===Wl&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(L4,r).replace(n,c))}),s.prefix&&d.push(a4),d.push(i4);var f=function(p,x,y,v){x===void 0&&(x=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,r=x,n=new RegExp("\\".concat(r,"\\b"),"g");var S=p.replace(z4,""),g=r4(y||x?"".concat(y," ").concat(x," { ").concat(S," }"):S);s.namespace&&(g=Fg(g,s.namespace));var h=[];return sl(g,o4(d.concat(s4(function(m){return h.push(m)})))),h};return f.hash=l.length?l.reduce(function(p,x){return x.name||us(15),pi(p,x.name)},Rg).toString():"",f}var I4=new Ig,hd=A4(),$g=M.createContext({shouldForwardProp:void 0,styleSheet:I4,stylis:hd});$g.Consumer;M.createContext(void 0);function Zh(){return b.useContext($g)}var F4=function(){function e(t,r){var n=this;this.inject=function(i,o){o===void 0&&(o=hd);var s=n.name+o.hash;i.hasNameForId(n.id,s)||i.insertRules(n.id,s,o(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,$f(this,function(){throw us(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=hd),this.name+t.hash},e}(),$4=function(e){return e>="A"&&e<="Z"};function Jh(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;$4(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Ug=function(e){return e==null||e===!1||e===""},Wg=function(e){var t,r,n=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Ug(o)&&(Array.isArray(o)&&o.isCss||Li(o)?n.push("".concat(Jh(i),":"),o,";"):qo(o)?n.push.apply(n,ol(ol(["".concat(i," {")],Wg(o),!1),["}"],!1)):n.push("".concat(Jh(i),": ").concat((t=i,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in l4||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Dn(e,t,r,n){if(Ug(e))return[];if(Ff(e))return[".".concat(e.styledComponentId)];if(Li(e)){if(!Li(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Dn(i,t,r,n)}var o;return e instanceof F4?r?(e.inject(r,n),[e.getName(n)]):[e]:qo(e)?Wg(e):Array.isArray(e)?Array.prototype.concat.apply(Gl,e.map(function(s){return Dn(s,t,r,n)})):[e.toString()]}function U4(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Li(r)&&!Ff(r))return!1}return!0}var W4=Tg(Vl),Y4=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&U4(t),this.componentId=r,this.baseHash=pi(W4,r),this.baseStyle=n,Ig.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=jn(i,this.staticRulesId);else{var o=Kh(Dn(this.rules,t,r,n)),s=fd(pi(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,s)){var a=n(o,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,a)}i=jn(i,s),this.staticRulesId=s}else{for(var l=pi(this.baseHash,n.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var p=Kh(Dn(f,t,r,n));l=pi(l,p+d),c+=p}}if(c){var x=fd(l>>>0);r.hasNameForId(this.componentId,x)||r.insertRules(this.componentId,x,n(c,".".concat(x),void 0,this.componentId)),i=jn(i,x)}}return i},e}(),Yg=M.createContext(void 0);Yg.Consumer;var qu={};function B4(e,t,r){var n=Ff(e),i=e,o=!Gu(e),s=t.attrs,a=s===void 0?Gl:s,l=t.componentId,c=l===void 0?function(w,j){var E=typeof w!="string"?"sc":Bh(w);qu[E]=(qu[E]||0)+1;var _="".concat(E,"-").concat(h4(Vl+E+qu[E]));return j?"".concat(j,"-").concat(_):_}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(w){return Gu(w)?"styled.".concat(w):"Styled(".concat(m4(w),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Bh(t.displayName),"-").concat(t.componentId):t.componentId||c,x=n&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(n&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(w,j){return v(w,j)&&S(w,j)}}else y=v}var g=new Y4(r,p,n?i.componentStyle:void 0);function h(w,j){return function(E,_,k){var T=E.attrs,A=E.componentStyle,ee=E.defaultProps,_e=E.foldedComponentIds,Ve=E.styledComponentId,Ge=E.target,ae=M.useContext(Yg),Pt=Zh(),oe=E.shouldForwardProp||Pt.shouldForwardProp,O=c4(_,ae,ee)||Di,z=function(Me,ke,Xe){for(var mn,gn=ct(ct({},ke),{className:void 0,theme:Xe}),mu=0;mu<Me.length;mu+=1){var vs=Li(mn=Me[mu])?mn(gn):mn;for(var zr in vs)gn[zr]=zr==="className"?jn(gn[zr],vs[zr]):zr==="style"?ct(ct({},gn[zr]),vs[zr]):vs[zr]}return ke.className&&(gn.className=jn(gn.className,ke.className)),gn}(T,_,O),F=z.as||Ge,U={};for(var V in z)z[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&z.theme===O||(V==="forwardedAs"?U.as=z.forwardedAs:oe&&!oe(V,F)||(U[V]=z[V]));var be=function(Me,ke){var Xe=Zh(),mn=Me.generateAndInjectStyles(ke,Xe.styleSheet,Xe.stylis);return mn}(A,z),ge=jn(_e,Ve);return be&&(ge+=" "+be),z.className&&(ge+=" "+z.className),U[Gu(F)&&!Og.has(F)?"class":"className"]=ge,U.ref=k,b.createElement(F,U)}(m,w,j)}h.displayName=f;var m=M.forwardRef(h);return m.attrs=x,m.componentStyle=g,m.displayName=f,m.shouldForwardProp=y,m.foldedComponentIds=n?jn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=p,m.target=n?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=n?function(j){for(var E=[],_=1;_<arguments.length;_++)E[_-1]=arguments[_];for(var k=0,T=E;k<T.length;k++)pd(j,T[k],!0);return j}({},i.defaultProps,w):w}}),$f(m,function(){return".".concat(m.styledComponentId)}),o&&zg(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Xh(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var em=function(e){return Object.assign(e,{isCss:!0})};function H4(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Li(e)||qo(e))return em(Dn(Xh(Gl,ol([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Dn(n):em(Dn(Xh(n,t)))}function md(e,t,r){if(r===void 0&&(r=Di),!t)throw us(1,t);var n=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,r,H4.apply(void 0,ol([i],o,!1)))};return n.attrs=function(i){return md(e,t,ct(ct({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return md(e,t,ct(ct({},r),i))},n}var Bg=function(e){return md(B4,e)},W=Bg;Og.forEach(function(e){W[e]=Bg(e)});const Uf=()=>u.jsxs(V4,{children:[u.jsx("span",{children:"JocesTech"})," Solution"]}),V4=W.h3`
  margin-bottom: 0;
  color: var(--actual-white);
  span {
    color: var(--primary-chocolate);
  }
`;var Hg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},tm=M.createContext&&M.createContext(Hg),G4=["attr","size","title"];function q4(e,t){if(e==null)return{};var r=K4(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function K4(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function ll(){return ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ll.apply(this,arguments)}function rm(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ul(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?rm(Object(r),!0).forEach(function(n){Q4(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rm(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Q4(e,t,r){return t=Z4(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z4(e){var t=J4(e,"string");return typeof t=="symbol"?t:t+""}function J4(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Vg(e){return e&&e.map((t,r)=>M.createElement(t.tag,ul({key:r},t.attr),Vg(t.child)))}function je(e){return t=>M.createElement(X4,ll({attr:ul({},e.attr)},t),Vg(e.child))}function X4(e){var t=r=>{var{attr:n,size:i,title:o}=e,s=q4(e,G4),a=i||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),M.createElement("svg",ll({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,s,{className:l,style:ul(ul({color:e.color||r.color},r.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&M.createElement("title",null,o),e.children)};return tm!==void 0?M.createElement(tm.Consumer,null,r=>t(r)):t(Hg)}function eS(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function Gg(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function tS(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function rS(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function qg(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function nS(e){return je({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(e)}function iS(e){return je({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function oS(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(e)}function sS(e){return je({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208H432c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function aS(e){return je({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function lS(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M203.97 23l-18.032 4.844 11.656 43.468c-25.837 8.076-50.32 21.653-71.594 40.75L94.53 80.594l-13.218 13.22 31.376 31.374c-19.467 21.125-33.414 45.53-41.813 71.343l-42.313-11.343-4.843 18.063 42.25 11.313c-6.057 27.3-6.157 55.656-.345 83L23.72 308.78l4.843 18.064 41.812-11.22c6.693 21.225 17.114 41.525 31.25 59.876l-29.97 52.688-16.81 29.593 29.56-16.842 52.657-29.97c18.41 14.216 38.784 24.69 60.094 31.407l-11.22 41.844 18.033 4.81 11.218-41.905c27.345 5.808 55.698 5.686 83-.375l11.312 42.28 18.063-4.81-11.344-42.376c25.812-8.4 50.217-22.315 71.342-41.78l31.375 31.373 13.22-13.218-31.47-31.47c19.09-21.266 32.643-45.738 40.72-71.563l43.53 11.657 4.813-18.063-43.625-11.686c5.68-27.044 5.576-55.06-.344-82.063l43.97-11.78-4.813-18.063L440.908 197c-6.73-20.866-17.08-40.79-31.032-58.844l29.97-52.656 16.842-29.563-29.593 16.844-52.656 29.97c-17.998-13.875-37.874-24.198-58.657-30.906l11.783-44L309.5 23l-11.78 43.97c-27-5.925-55.02-6.05-82.064-.376L203.97 23zm201.56 85L297.25 298.313l-.75.437-40.844-40.875-148.72 148.72-2.186 1.25 109.125-191.75 41.78 41.78L405.532 108zm-149.686 10.594c21.858 0 43.717 5.166 63.594 15.47l-116.625 66.342-2.22 1.28-1.28 2.22-66.25 116.406c-26.942-52.04-18.616-117.603 25.03-161.25 26.99-26.988 62.38-40.468 97.75-40.468zm122.72 74.594c26.994 52.054 18.67 117.672-25.002 161.343-43.66 43.662-109.263 52.005-161.312 25.033l116.438-66.282 2.25-1.25 1.25-2.25 66.375-116.592z"},child:[]}]})(e)}function uS(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M78.594 20.313c-20.396-.083-40.037 3.83-57.78 12.468C126.016 63.043 213.21 117.8 289.185 187.813c-9.978-45.738-40.414-87.43-79.375-117.78-11.143 8.35-27.725 8.505-41.156.75-13.402-7.74-21.53-22.143-19.906-35.938-23.19-9.237-47.145-14.438-70.156-14.532zm101.625 6.625c-5.215.166-9.516 2.475-11.532 5.968-3.442 5.962-.55 15.975 9.343 21.688 9.894 5.713 19.997 3.212 23.44-2.75 3.44-5.962.58-16.006-9.314-21.72-3.71-2.14-7.465-3.108-10.875-3.186-.354-.01-.714-.012-1.06 0zm-43.25 73.906L31.75 283.188c5.972 8.454 13.093 14.29 25.125 15.062l105.47-182.78c-8.03-5.31-16.5-10.178-25.376-14.626zm194.78 6.25l-17.406 10.78-10.22 66.657 38.313-59.124-10.687-18.312zm-140.344 61.72l-21.844 13.467 14.375 17.314 86.157-4.75-78.688-26.03zm209.75.686l-3.78 1.156-181.095 55.906-3.75 1.188-1.81 3.5-42.314 82.875-3.625 7.125 6.47 4.688 216.53 157.25 10.126 7.343 4.156-11.81 88.563-251.44 2.656-7.5-7-3.81-81.655-44.564-3.47-1.906zm-2.03 20.188l63.28 34.562-65.97 20.344-33.248-43.813 35.937-11.093zm-54.97 16.968l33.28 43.813L279 280.843l2.78-54.938 62.376-19.25zM262.78 231.78L260 286.72l-67.22 20.75 32.782-64.19 37.22-11.5zm202.5 11.126L400 428.312l4.063-166.5 61.218-18.906zm-80.06 24.72l-4.064 166.5-98.812-134.72 102.875-31.78zm-121.783 37.593L364.75 443.374 201.062 324.5l62.375-19.28z"},child:[]}]})(e)}function cS(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M453.295 17.117c-.546 7.232 1.619 15.478 5.957 22.612 4.338 7.133 10.666 12.847 17.338 15.69 9.655-11.206-5.483-37.974-20.092-38.624-1.09-.07-2.254.137-3.203.322zm-111.547 8.38L329.492 49.61l61.018 100.326 25.627-2.127 13.676-21.777-9.063-14.9-27.34 16.628-37.931-62.371L350.8 57.7l27.34-16.628-9.346-15.368zm93.977 1.62l-60.194 36.61 23.905 39.303 60.193-36.61c-6.345-4.604-11.676-10.635-15.754-17.34-4.078-6.704-6.981-14.21-8.15-21.963zm-125.01 19.711l-161.647 2.62c10.403 24.036 7.492 47.197-4.388 65.648-18.658-14.237-44.341-15.374-63.407-17.717-14.06 123.827-6.22 225.967-6.271 342.149-.004 9.469-1.157 23.12 4.826 32.947 1.887 3.1 4.37 5.928 8.129 8.342 17.708-6.206 41.405-12.44 54.87-22.274-6.951-.825-14.755.952-21.138.955-8.458-.04-19.144-6.11-24.748-19.496-2.919-6.973-6.636-18.193-.181-29.072 2.838-4.785 9.383-10.302 14.26-10.328 94.651.504 191.392-.32 279.568.154-5.523-76.851-10.013-154.096-5.53-232.308l-4.146.343-14.842-24.404-66.867 40.668 6.781 10.598-15.162 9.699-59.097-92.371 15.16-9.7L255 115.966l68.46-41.637-11.95-19.65-2.606-4.285zm-180.17 4.383c-15.366 8.213-29.102 17.702-40.99 28.707 16.167 1.495 33.74 3.063 48.64 9.95 3.139-13.836-3.247-26.896-7.65-38.657zm202.268 38.494l-66.645 40.534 7.275 11.962 33.325-20.265 9.351 15.377-33.322 20.267 7.277 11.963 66.643-40.533zM201.41 136.278l.445 17.992c-30.522.253-58.62 2.029-90.013 2.11V138.38a35163.72 35163.72 0 0 0 89.568-2.103zm144.983 78.98l.24 17.996-234.346 3.143-.242-17.996zm.078 40.684l.408 17.992-123.654 2.81-.41-17.994zm-235.178 3.097h90.602v17.998h-90.602zm234.795 33.237l.406 17.992-62.158 1.406-.406-17.994zm-83.686 1.455l.338 17.996-150.3 2.808-.337-17.994zm85.946 52.806l.402 17.995-125.647 2.808-.402-17.992zm-196.323 70.79c10.05 9.261 17.925 22.065 15.078 36.718-2.074 10.682-10.422 17.606-19.814 23.106s-20.775 9.866-32.512 13.914a1395.68 1395.68 0 0 1-12.238 4.154l301.387-7.672c7.772-.45 14.658-5.66 19.734-13.406 5.082-7.754 7.477-17.817 6.895-23.236-.583-5.419-4.857-14.677-10.973-21.48-6.116-6.805-13.547-10.824-19.025-10.618l-.198.008zm-39.785 2.787c-1.07 1.802-.466 8.714 1.303 12.939 3.72 8.887 6.028 8.437 8.232 8.447 8.877 2.102 17.347.269 25.85-1.025-2.053-4.123-5.283-8.704-10.283-12.113-4.12-2.809-20.675-15.634-25.102-8.248z"},child:[]}]})(e)}const Wf=[{id:1,text:"home",url:"/"},{id:2,text:"about",url:"/about"},{id:3,text:"products",url:"/products"}],dS=[{id:1,icon:u.jsx(lS,{}),title:"mission",text:"At Jocestech, our mission is to empower tech enthusiasts, professionals, and everyday users by providing a diverse range of cutting-edge products, unparalleled service, and expert guidance. We aim to foster a community where innovation meets accessibility, transforming the way people interact with technology."},{id:2,icon:u.jsx(uS,{}),title:"vision",text:"Our vision is to be the go-to destination for tech aficionados and consumers seeking top-tier devices, accessories, and expert advice. We aspire to create an ecosystem where convenience, innovation, and customer satisfaction converge, setting new standards in the tech ecommerce landscape."},{id:3,icon:u.jsx(cS,{}),title:"history",text:"Established in 2021, our tech ecommerce store began as a passion project by a group of tech enthusiasts aiming to democratize access to cutting-edge technology. Starting small, we have grown into a comprehensive platform offering curated gadgets, laptops, smartphones, and accessories from renowned brands. Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in the tech retail industry."}];function fS(e){return je({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Settings"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M12.6,20.936H11.3a.883.883,0,0,1-.852-.654l-.774-2.833-2.5,1.435a.886.886,0,0,1-1.06-.138l-.925-.919a.884.884,0,0,1-.143-1.066l1.469-2.545L6.509,14.2l-2.787-.747a.882.882,0,0,1-.654-.851V11.3a.882.882,0,0,1,.652-.85l2.839-.777L5.12,7.171a.885.885,0,0,1,.141-1.062l.918-.918A.885.885,0,0,1,7.24,5.049L9.792,6.514l.012,0,.745-2.79a.881.881,0,0,1,.851-.655h1.3a.883.883,0,0,1,.852.655l.762,2.838,2.509-1.441a.885.885,0,0,1,1.059.138l.926.919a.882.882,0,0,1,.141,1.067L17.483,9.777l.008.022,2.786.746a.883.883,0,0,1,.653.851v1.3a.883.883,0,0,1-.654.852l-2.837.774,1.439,2.505a.881.881,0,0,1-.141,1.063l-.917.917a.888.888,0,0,1-1.063.141l-2.539-1.462L14.2,17.5l-.745,2.785A.885.885,0,0,1,12.6,20.936Zm-1.21-1h1.119l.738-2.756a.888.888,0,0,1,.528-.592l.134-.052a.873.873,0,0,1,.76.057l2.51,1.445.789-.789-1.423-2.478a.881.881,0,0,1-.048-.78l.052-.125a.875.875,0,0,1,.584-.51l2.8-.749v-1.12l-2.755-.737a.885.885,0,0,1-.592-.529l-.052-.132a.882.882,0,0,1,.057-.763L18.04,6.818l-.8-.79-2.48,1.425a.878.878,0,0,1-.772.052l-.115-.047a.888.888,0,0,1-.518-.588l-.748-2.806H11.492l-.738,2.762a.883.883,0,0,1-.539.6l-.12.045a.874.874,0,0,1-.751-.058L6.822,5.962l-.789.789L7.455,9.227a.886.886,0,0,1,.046.785l-.051.12a.876.876,0,0,1-.579.5l-2.8.758v1.121l2.757.738a.889.889,0,0,1,.591.525l.048.121a.874.874,0,0,1-.055.77L5.958,17.181l.8.791,2.47-1.419a.878.878,0,0,1,.787-.045l.106.044a.874.874,0,0,1,.526.591ZM9.75,17.482l.008,0ZM9.6,17.421l.007,0ZM6.487,14.147h0Zm.044-4.411h0Zm7.724-3.2Z"},child:[]},{tag:"path",attr:{d:"M12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Zm0-5a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"},child:[]}]}]}]})(e)}var Kg={exports:{}},Qg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cs=b;function pS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hS=typeof Object.is=="function"?Object.is:pS,mS=cs.useSyncExternalStore,gS=cs.useRef,yS=cs.useEffect,vS=cs.useMemo,xS=cs.useDebugValue;Qg.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var o=gS(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=vS(function(){function l(x){if(!c){if(c=!0,d=x,x=n(x),i!==void 0&&s.hasValue){var y=s.value;if(i(y,x))return f=y}return f=x}if(y=f,hS(d,x))return y;var v=n(x);return i!==void 0&&i(y,v)?y:(d=x,f=v)}var c=!1,d,f,p=r===void 0?null:r;return[function(){return l(t())},p===null?void 0:function(){return l(p())}]},[t,r,n,i]);var a=mS(e,o[0],o[1]);return yS(function(){s.hasValue=!0,s.value=a},[a]),xS(a),a};Kg.exports=Qg;var wS=Kg.exports,St="default"in cc?M:cc,nm=Symbol.for("react-redux-context"),im=typeof globalThis<"u"?globalThis:{};function SS(){if(!St.createContext)return{};const e=im[nm]??(im[nm]=new Map);let t=e.get(St.createContext);return t||(t=St.createContext(null),e.set(St.createContext,t)),t}var un=SS(),_S=()=>{throw new Error("uSES not initialized!")};function Yf(e=un){return function(){return St.useContext(e)}}var Zg=Yf(),Jg=_S,kS=e=>{Jg=e},CS=(e,t)=>e===t;function ES(e=un){const t=e===un?Zg:Yf(e),r=(n,i={})=>{const{equalityFn:o=CS,devModeChecks:s={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:c,stabilityCheck:d,identityFunctionCheck:f}=t();St.useRef(!0);const p=St.useCallback({[n.name](y){return n(y)}}[n.name],[n,d,s.stabilityCheck]),x=Jg(l.addNestedSub,a.getState,c||a.getState,p,o);return St.useDebugValue(x),x};return Object.assign(r,{withTypes:()=>r}),r}var K=ES();function jS(e){e()}function bS(){let e=null,t=null;return{clear(){e=null,t=null},notify(){jS(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const i=t={callback:r,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!n||e===null||(n=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var om={notify(){},get:()=>[]};function NS(e,t){let r,n=om,i=0,o=!1;function s(v){d();const S=n.subscribe(v);let g=!1;return()=>{g||(g=!0,S(),f())}}function a(){n.notify()}function l(){y.onStateChange&&y.onStateChange()}function c(){return o}function d(){i++,r||(r=e.subscribe(l),n=bS())}function f(){i--,r&&i===0&&(r(),r=void 0,n.clear(),n=om)}function p(){o||(o=!0,d())}function x(){o&&(o=!1,f())}const y={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:c,trySubscribe:p,tryUnsubscribe:x,getListeners:()=>n};return y}var PS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OS=typeof navigator<"u"&&navigator.product==="ReactNative",RS=PS||OS?St.useLayoutEffect:St.useEffect;function TS({store:e,context:t,children:r,serverState:n,stabilityCheck:i="once",identityFunctionCheck:o="once"}){const s=St.useMemo(()=>{const c=NS(e);return{store:e,subscription:c,getServerState:n?()=>n:void 0,stabilityCheck:i,identityFunctionCheck:o}},[e,n,i,o]),a=St.useMemo(()=>e.getState(),[e]);RS(()=>{const{subscription:c}=s;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==e.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[s,a]);const l=t||un;return St.createElement(l.Provider,{value:s},r)}var MS=TS;function Xg(e=un){const t=e===un?Zg:Yf(e),r=()=>{const{store:n}=t();return n};return Object.assign(r,{withTypes:()=>r}),r}var DS=Xg();function LS(e=un){const t=e===un?DS:Xg(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var Te=LS();kS(wS.useSyncExternalStoreWithSelector);function We(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var zS=typeof Symbol=="function"&&Symbol.observable||"@@observable",sm=zS,Ku=()=>Math.random().toString(36).substring(7).split("").join("."),AS={INIT:`@@redux/INIT${Ku()}`,REPLACE:`@@redux/REPLACE${Ku()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Ku()}`},cl=AS;function Bf(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function ey(e,t,r){if(typeof e!="function")throw new Error(We(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(We(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(We(1));return r(ey)(e,t)}let n=e,i=t,o=new Map,s=o,a=0,l=!1;function c(){s===o&&(s=new Map,o.forEach((S,g)=>{s.set(g,S)}))}function d(){if(l)throw new Error(We(3));return i}function f(S){if(typeof S!="function")throw new Error(We(4));if(l)throw new Error(We(5));let g=!0;c();const h=a++;return s.set(h,S),function(){if(g){if(l)throw new Error(We(6));g=!1,c(),s.delete(h),o=null}}}function p(S){if(!Bf(S))throw new Error(We(7));if(typeof S.type>"u")throw new Error(We(8));if(typeof S.type!="string")throw new Error(We(17));if(l)throw new Error(We(9));try{l=!0,i=n(i,S)}finally{l=!1}return(o=s).forEach(h=>{h()}),S}function x(S){if(typeof S!="function")throw new Error(We(10));n=S,p({type:cl.REPLACE})}function y(){const S=f;return{subscribe(g){if(typeof g!="object"||g===null)throw new Error(We(11));function h(){const w=g;w.next&&w.next(d())}return h(),{unsubscribe:S(h)}},[sm](){return this}}}return p({type:cl.INIT}),{dispatch:p,subscribe:f,getState:d,replaceReducer:x,[sm]:y}}function IS(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:cl.INIT})>"u")throw new Error(We(12));if(typeof r(void 0,{type:cl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(We(13))})}function FS(e){const t=Object.keys(e),r={};for(let o=0;o<t.length;o++){const s=t[o];typeof e[s]=="function"&&(r[s]=e[s])}const n=Object.keys(r);let i;try{IS(r)}catch(o){i=o}return function(s={},a){if(i)throw i;let l=!1;const c={};for(let d=0;d<n.length;d++){const f=n[d],p=r[f],x=s[f],y=p(x,a);if(typeof y>"u")throw a&&a.type,new Error(We(14));c[f]=y,l=l||y!==x}return l=l||n.length!==Object.keys(s).length,l?c:s}}function dl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function $S(...e){return t=>(r,n)=>{const i=t(r,n);let o=()=>{throw new Error(We(15))};const s={getState:i.getState,dispatch:(l,...c)=>o(l,...c)},a=e.map(l=>l(s));return o=dl(...a)(i.dispatch),{...i,dispatch:o}}}function US(e){return Bf(e)&&"type"in e&&typeof e.type=="string"}var ty=Symbol.for("immer-nothing"),am=Symbol.for("immer-draftable"),Ct=Symbol.for("immer-state");function Vt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var zi=Object.getPrototypeOf;function cn(e){return!!e&&!!e[Ct]}function Rr(e){var t;return e?ry(e)||Array.isArray(e)||!!e[am]||!!((t=e.constructor)!=null&&t[am])||Kl(e)||Ql(e):!1}var WS=Object.prototype.constructor.toString();function ry(e){if(!e||typeof e!="object")return!1;const t=zi(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===WS}function fl(e,t){ql(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function ql(e){const t=e[Ct];return t?t.type_:Array.isArray(e)?1:Kl(e)?2:Ql(e)?3:0}function gd(e,t){return ql(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function ny(e,t,r){const n=ql(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function YS(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Kl(e){return e instanceof Map}function Ql(e){return e instanceof Set}function Sn(e){return e.copy_||e.base_}function yd(e,t){if(Kl(e))return new Map(e);if(Ql(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=ry(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[Ct];let i=Reflect.ownKeys(n);for(let o=0;o<i.length;o++){const s=i[o],a=n[s];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(n[s]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[s]})}return Object.create(zi(e),n)}else{const n=zi(e);if(n!==null&&r)return{...e};const i=Object.create(n);return Object.assign(i,e)}}function Hf(e,t=!1){return Zl(e)||cn(e)||!Rr(e)||(ql(e)>1&&(e.set=e.add=e.clear=e.delete=BS),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>Hf(n,!0))),e}function BS(){Vt(2)}function Zl(e){return Object.isFrozen(e)}var HS={};function Wn(e){const t=HS[e];return t||Vt(0,e),t}var Ko;function iy(){return Ko}function VS(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function lm(e,t){t&&(Wn("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function vd(e){xd(e),e.drafts_.forEach(GS),e.drafts_=null}function xd(e){e===Ko&&(Ko=e.parent_)}function um(e){return Ko=VS(Ko,e)}function GS(e){const t=e[Ct];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function cm(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[Ct].modified_&&(vd(t),Vt(4)),Rr(e)&&(e=pl(t,e),t.parent_||hl(t,e)),t.patches_&&Wn("Patches").generateReplacementPatches_(r[Ct].base_,e,t.patches_,t.inversePatches_)):e=pl(t,r,[]),vd(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==ty?e:void 0}function pl(e,t,r){if(Zl(t))return t;const n=t[Ct];if(!n)return fl(t,(i,o)=>dm(e,n,t,i,o,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return hl(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const i=n.copy_;let o=i,s=!1;n.type_===3&&(o=new Set(i),i.clear(),s=!0),fl(o,(a,l)=>dm(e,n,i,a,l,r,s)),hl(e,i,!1),r&&e.patches_&&Wn("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function dm(e,t,r,n,i,o,s){if(cn(i)){const a=o&&t&&t.type_!==3&&!gd(t.assigned_,n)?o.concat(n):void 0,l=pl(e,i,a);if(ny(r,n,l),cn(l))e.canAutoFreeze_=!1;else return}else s&&r.add(i);if(Rr(i)&&!Zl(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;pl(e,i),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&hl(e,i)}}function hl(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Hf(t,r)}function qS(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:iy(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=Vf;r&&(i=[n],o=Qo);const{revoke:s,proxy:a}=Proxy.revocable(i,o);return n.draft_=a,n.revoke_=s,a}var Vf={get(e,t){if(t===Ct)return e;const r=Sn(e);if(!gd(r,t))return KS(e,r,t);const n=r[t];return e.finalized_||!Rr(n)?n:n===Qu(e.base_,t)?(Zu(e),e.copy_[t]=Sd(n,e)):n},has(e,t){return t in Sn(e)},ownKeys(e){return Reflect.ownKeys(Sn(e))},set(e,t,r){const n=oy(Sn(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const i=Qu(Sn(e),t),o=i==null?void 0:i[Ct];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(YS(r,i)&&(r!==void 0||gd(e.base_,t)))return!0;Zu(e),wd(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Qu(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Zu(e),wd(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=Sn(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){Vt(11)},getPrototypeOf(e){return zi(e.base_)},setPrototypeOf(){Vt(12)}},Qo={};fl(Vf,(e,t)=>{Qo[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Qo.deleteProperty=function(e,t){return Qo.set.call(this,e,t,void 0)};Qo.set=function(e,t,r){return Vf.set.call(this,e[0],t,r,e[0])};function Qu(e,t){const r=e[Ct];return(r?Sn(r):e)[t]}function KS(e,t,r){var i;const n=oy(t,r);return n?"value"in n?n.value:(i=n.get)==null?void 0:i.call(e.draft_):void 0}function oy(e,t){if(!(t in e))return;let r=zi(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=zi(r)}}function wd(e){e.modified_||(e.modified_=!0,e.parent_&&wd(e.parent_))}function Zu(e){e.copy_||(e.copy_=yd(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var QS=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const o=r;r=t;const s=this;return function(l=o,...c){return s.produce(l,d=>r.call(this,d,...c))}}typeof r!="function"&&Vt(6),n!==void 0&&typeof n!="function"&&Vt(7);let i;if(Rr(t)){const o=um(this),s=Sd(t,void 0);let a=!0;try{i=r(s),a=!1}finally{a?vd(o):xd(o)}return lm(o,n),cm(i,o)}else if(!t||typeof t!="object"){if(i=r(t),i===void 0&&(i=t),i===ty&&(i=void 0),this.autoFreeze_&&Hf(i,!0),n){const o=[],s=[];Wn("Patches").generateReplacementPatches_(t,i,o,s),n(o,s)}return i}else Vt(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(s,...a)=>this.produceWithPatches(s,l=>t(l,...a));let n,i;return[this.produce(t,r,(s,a)=>{n=s,i=a}),n,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Rr(e)||Vt(8),cn(e)&&(e=sy(e));const t=um(this),r=Sd(e,void 0);return r[Ct].isManual_=!0,xd(t),r}finishDraft(e,t){const r=e&&e[Ct];(!r||!r.isManual_)&&Vt(9);const{scope_:n}=r;return lm(n,t),cm(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const i=t[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(t=t.slice(r+1));const n=Wn("Patches").applyPatches_;return cn(e)?n(e,t):this.produce(e,i=>n(i,t))}};function Sd(e,t){const r=Kl(e)?Wn("MapSet").proxyMap_(e,t):Ql(e)?Wn("MapSet").proxySet_(e,t):qS(e,t);return(t?t.scope_:iy()).drafts_.push(r),r}function sy(e){return cn(e)||Vt(10,e),ay(e)}function ay(e){if(!Rr(e)||Zl(e))return e;const t=e[Ct];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=yd(e,t.scope_.immer_.useStrictShallowCopy_)}else r=yd(e,!0);return fl(r,(n,i)=>{ny(r,n,ay(i))}),t&&(t.finalized_=!1),r}var Et=new QS,ly=Et.produce;Et.produceWithPatches.bind(Et);Et.setAutoFreeze.bind(Et);Et.setUseStrictShallowCopy.bind(Et);Et.applyPatches.bind(Et);Et.createDraft.bind(Et);Et.finishDraft.bind(Et);function ZS(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function JS(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function XS(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var fm=e=>Array.isArray(e)?e:[e];function e3(e){const t=Array.isArray(e[0])?e[0]:e;return XS(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function t3(e,t){const r=[],{length:n}=e;for(let i=0;i<n;i++)r.push(e[i].apply(null,t));return r}var r3=class{constructor(e){this.value=e}deref(){return this.value}},n3=typeof WeakRef<"u"?WeakRef:r3,i3=0,pm=1;function $s(){return{s:i3,v:void 0,o:null,p:null}}function Gf(e,t={}){let r=$s();const{resultEqualityCheck:n}=t;let i,o=0;function s(){var f;let a=r;const{length:l}=arguments;for(let p=0,x=l;p<x;p++){const y=arguments[p];if(typeof y=="function"||typeof y=="object"&&y!==null){let v=a.o;v===null&&(a.o=v=new WeakMap);const S=v.get(y);S===void 0?(a=$s(),v.set(y,a)):a=S}else{let v=a.p;v===null&&(a.p=v=new Map);const S=v.get(y);S===void 0?(a=$s(),v.set(y,a)):a=S}}const c=a;let d;if(a.s===pm?d=a.v:(d=e.apply(null,arguments),o++),c.s=pm,n){const p=((f=i==null?void 0:i.deref)==null?void 0:f.call(i))??i;p!=null&&n(p,d)&&(d=p,o!==0&&o--),i=typeof d=="object"&&d!==null||typeof d=="function"?new n3(d):d}return c.v=d,d}return s.clearCache=()=>{r=$s(),s.resetResultsCount()},s.resultsCount=()=>o,s.resetResultsCount=()=>{o=0},s}function uy(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...i)=>{let o=0,s=0,a,l={},c=i.pop();typeof c=="object"&&(l=c,c=i.pop()),ZS(c,`createSelector expects an output function after the inputs, but received: [${typeof c}]`);const d={...r,...l},{memoize:f,memoizeOptions:p=[],argsMemoize:x=Gf,argsMemoizeOptions:y=[],devModeChecks:v={}}=d,S=fm(p),g=fm(y),h=e3(i),m=f(function(){return o++,c.apply(null,arguments)},...S),w=x(function(){s++;const E=t3(h,arguments);return a=m.apply(null,E),a},...g);return Object.assign(w,{resultFunc:c,memoizedResultFunc:m,dependencies:h,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>a,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:f,argsMemoize:x})};return Object.assign(n,{withTypes:()=>n}),n}var o3=uy(Gf),s3=Object.assign((e,t=o3)=>{JS(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e),n=r.map(o=>e[o]);return t(n,(...o)=>o.reduce((s,a,l)=>(s[r[l]]=a,s),{}))},{withTypes:()=>s3});function cy(e){return({dispatch:r,getState:n})=>i=>o=>typeof o=="function"?o(r,n,e):i(o)}var a3=cy(),l3=cy,u3=(...e)=>{const t=uy(...e),r=Object.assign((...n)=>{const i=t(...n),o=(s,...a)=>i(cn(s)?sy(s):s,...a);return Object.assign(o,i),o},{withTypes:()=>r});return r};u3(Gf);var c3=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?dl:dl.apply(null,arguments)},d3=e=>e&&typeof e.match=="function";function Cr(e,t){function r(...n){if(t){let i=t(...n);if(!i)throw new Error(ht(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>US(n)&&n.type===e,r}var dy=class po extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,po.prototype)}static get[Symbol.species](){return po}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new po(...t[0].concat(this)):new po(...t.concat(this))}};function hm(e){return Rr(e)?ly(e,()=>{}):e}function mm(e,t,r){if(e.has(t)){let i=e.get(t);return r.update&&(i=r.update(i,t,e),e.set(t,i)),i}if(!r.insert)throw new Error(ht(10));const n=r.insert(t,e);return e.set(t,n),n}function f3(e){return typeof e=="boolean"}var p3=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let s=new dy;return r&&(f3(r)?s.push(a3):s.push(l3(r.extraArgument))),s},h3="RTK_autoBatch",fy=e=>t=>{setTimeout(t,e)},m3=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:fy(10),g3=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let i=!0,o=!1,s=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?m3:e.type==="callback"?e.queueNotification:fy(e.timeout),c=()=>{s=!1,o&&(o=!1,a.forEach(d=>d()))};return Object.assign({},n,{subscribe(d){const f=()=>i&&d(),p=n.subscribe(f);return a.add(d),()=>{p(),a.delete(d)}},dispatch(d){var f;try{return i=!((f=d==null?void 0:d.meta)!=null&&f[h3]),o=!i,o&&(s||(s=!0,l(c))),n.dispatch(d)}finally{i=!0}}})},y3=e=>function(r){const{autoBatch:n=!0}=r??{};let i=new dy(e);return n&&i.push(g3(typeof n=="object"?n:void 0)),i},v3=!0;function x3(e){const t=p3(),{reducer:r=void 0,middleware:n,devTools:i=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{};let a;if(typeof r=="function")a=r;else if(Bf(r))a=FS(r);else throw new Error(ht(1));let l;typeof n=="function"?l=n(t):l=t();let c=dl;i&&(c=c3({trace:!v3,...typeof i=="object"&&i}));const d=$S(...l),f=y3(d);let p=typeof s=="function"?s(f):f();const x=c(...p);return ey(a,o,x)}function py(e){const t={},r=[];let n;const i={addCase(o,s){const a=typeof o=="string"?o:o.type;if(!a)throw new Error(ht(28));if(a in t)throw new Error(ht(29));return t[a]=s,i},addMatcher(o,s){return r.push({matcher:o,reducer:s}),i},addDefaultCase(o){return n=o,i}};return e(i),[t,r,n]}function w3(e){return typeof e=="function"}function S3(e,t){let[r,n,i]=py(t),o;if(w3(e))o=()=>hm(e());else{const a=hm(e);o=()=>a}function s(a=o(),l){let c=[r[l.type],...n.filter(({matcher:d})=>d(l)).map(({reducer:d})=>d)];return c.filter(d=>!!d).length===0&&(c=[i]),c.reduce((d,f)=>{if(f)if(cn(d)){const x=f(d,l);return x===void 0?d:x}else{if(Rr(d))return ly(d,p=>f(p,l));{const p=f(d,l);if(p===void 0){if(d===null)return d;throw new Error(ht(9))}return p}}return d},a)}return s.getInitialState=o,s}var _3="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",hy=(e=21)=>{let t="",r=e;for(;r--;)t+=_3[Math.random()*64|0];return t},k3=(e,t)=>d3(e)?e.match(t):e(t);function C3(...e){return t=>e.some(r=>k3(r,t))}var E3=["name","message","stack","code"],Ju=class{constructor(e,t){gu(this,"_type");this.payload=e,this.meta=t}},gm=class{constructor(e,t){gu(this,"_type");this.payload=e,this.meta=t}},j3=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of E3)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},ot=(()=>{function e(t,r,n){const i=Cr(t+"/fulfilled",(l,c,d,f)=>({payload:l,meta:{...f||{},arg:d,requestId:c,requestStatus:"fulfilled"}})),o=Cr(t+"/pending",(l,c,d)=>({payload:void 0,meta:{...d||{},arg:c,requestId:l,requestStatus:"pending"}})),s=Cr(t+"/rejected",(l,c,d,f,p)=>({payload:f,error:(n&&n.serializeError||j3)(l||"Rejected"),meta:{...p||{},arg:d,requestId:c,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(c,d,f)=>{const p=n!=null&&n.idGenerator?n.idGenerator(l):hy(),x=new AbortController;let y,v;function S(h){v=h,x.abort()}const g=async function(){var w,j;let h;try{let E=(w=n==null?void 0:n.condition)==null?void 0:w.call(n,l,{getState:d,extra:f});if(N3(E)&&(E=await E),E===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const _=new Promise((k,T)=>{y=()=>{T({name:"AbortError",message:v||"Aborted"})},x.signal.addEventListener("abort",y)});c(o(p,l,(j=n==null?void 0:n.getPendingMeta)==null?void 0:j.call(n,{requestId:p,arg:l},{getState:d,extra:f}))),h=await Promise.race([_,Promise.resolve(r(l,{dispatch:c,getState:d,extra:f,requestId:p,signal:x.signal,abort:S,rejectWithValue:(k,T)=>new Ju(k,T),fulfillWithValue:(k,T)=>new gm(k,T)})).then(k=>{if(k instanceof Ju)throw k;return k instanceof gm?i(k.payload,p,l,k.meta):i(k,p,l)})])}catch(E){h=E instanceof Ju?s(null,p,l,E.payload,E.meta):s(E,p,l)}finally{y&&x.signal.removeEventListener("abort",y)}return n&&!n.dispatchConditionRejection&&s.match(h)&&h.meta.condition||c(h),h}();return Object.assign(g,{abort:S,requestId:p,arg:l,unwrap(){return g.then(b3)}})}}return Object.assign(a,{pending:o,rejected:s,fulfilled:i,settled:C3(s,i),typePrefix:t})}return e.withTypes=()=>e,e})();function b3(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function N3(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var P3=Symbol.for("rtk-slice-createasyncthunk");function O3(e,t){return`${e}/${t}`}function R3({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[P3];return function(i){const{name:o,reducerPath:s=o}=i;if(!o)throw new Error(ht(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(M3()):i.reducers)||{},l=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(m,w){const j=typeof m=="string"?m:m.type;if(!j)throw new Error(ht(12));if(j in c.sliceCaseReducersByType)throw new Error(ht(13));return c.sliceCaseReducersByType[j]=w,d},addMatcher(m,w){return c.sliceMatchers.push({matcher:m,reducer:w}),d},exposeAction(m,w){return c.actionCreators[m]=w,d},exposeCaseReducer(m,w){return c.sliceCaseReducersByName[m]=w,d}};l.forEach(m=>{const w=a[m],j={reducerName:m,type:O3(o,m),createNotation:typeof i.reducers=="function"};L3(w)?A3(j,w,d,t):D3(j,w,d)});function f(){const[m={},w=[],j=void 0]=typeof i.extraReducers=="function"?py(i.extraReducers):[i.extraReducers],E={...m,...c.sliceCaseReducersByType};return S3(i.initialState,_=>{for(let k in E)_.addCase(k,E[k]);for(let k of c.sliceMatchers)_.addMatcher(k.matcher,k.reducer);for(let k of w)_.addMatcher(k.matcher,k.reducer);j&&_.addDefaultCase(j)})}const p=m=>m,x=new Map;let y;function v(m,w){return y||(y=f()),y(m,w)}function S(){return y||(y=f()),y.getInitialState()}function g(m,w=!1){function j(_){let k=_[m];return typeof k>"u"&&w&&(k=S()),k}function E(_=p){const k=mm(x,w,{insert:()=>new WeakMap});return mm(k,_,{insert:()=>{const T={};for(const[A,ee]of Object.entries(i.selectors??{}))T[A]=T3(ee,_,S,w);return T}})}return{reducerPath:m,getSelectors:E,get selectors(){return E(j)},selectSlice:j}}const h={name:o,reducer:v,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:S,...g(s),injectInto(m,{reducerPath:w,...j}={}){const E=w??s;return m.inject({reducerPath:E,reducer:v},j),{...h,...g(E,!0)}}};return h}}function T3(e,t,r,n){function i(o,...s){let a=t(o);return typeof a>"u"&&n&&(a=r()),e(a,...s)}return i.unwrapped=e,i}var Kn=R3();function M3(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function D3({type:e,reducerName:t,createNotation:r},n,i){let o,s;if("reducer"in n){if(r&&!z3(n))throw new Error(ht(17));o=n.reducer,s=n.prepare}else o=n;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,s?Cr(e,s):Cr(e))}function L3(e){return e._reducerDefinitionType==="asyncThunk"}function z3(e){return e._reducerDefinitionType==="reducerWithPrepare"}function A3({type:e,reducerName:t},r,n,i){if(!i)throw new Error(ht(18));const{payloadCreator:o,fulfilled:s,pending:a,rejected:l,settled:c,options:d}=r,f=i(e,o,d);n.exposeAction(t,f),s&&n.addCase(f.fulfilled,s),a&&n.addCase(f.pending,a),l&&n.addCase(f.rejected,l),c&&n.addMatcher(f.settled,c),n.exposeCaseReducer(t,{fulfilled:s||Us,pending:a||Us,rejected:l||Us,settled:c||Us})}function Us(){}var I3=(e,t)=>{if(typeof e!="function")throw new Error(ht(32))},qf="listenerMiddleware",F3=e=>{let{type:t,actionCreator:r,matcher:n,predicate:i,effect:o}=e;if(t)i=Cr(t).match;else if(r)t=r.type,i=r.match;else if(n)i=n;else if(!i)throw new Error(ht(21));return I3(o),{predicate:i,type:t,effect:o}},$3=Object.assign(e=>{const{type:t,predicate:r,effect:n}=F3(e);return{id:hy(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(ht(22))}}},{withTypes:()=>$3}),U3=Object.assign(Cr(`${qf}/add`),{withTypes:()=>U3});Cr(`${qf}/removeAll`);var W3=Object.assign(Cr(`${qf}/remove`),{withTypes:()=>W3});function ht(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Y3={isSideBarOpen:!1},my=Kn({name:"Toggle",initialState:Y3,reducers:{toggleSideBar:e=>{e.isSideBarOpen=!e.isSideBarOpen},toggleCloseSideBar:e=>{e.isSideBarOpen=!1}}}),{toggleSideBar:B3,toggleCloseSideBar:bn}=my.actions,H3=my.reducer,Ws=e=>{localStorage.setItem("user",JSON.stringify(e))},V3=()=>{localStorage.removeItem("user")},G3=()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):null},Xu=e=>{localStorage.setItem("cart",JSON.stringify(e))},q3=()=>{const e=localStorage.getItem("cart");return e?JSON.parse(e):null},gy=()=>{localStorage.removeItem("cart")};function yy(e,t){return function(){return e.apply(t,arguments)}}const{toString:K3}=Object.prototype,{getPrototypeOf:Kf}=Object,Jl=(e=>t=>{const r=K3.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),tr=e=>(e=e.toLowerCase(),t=>Jl(t)===e),Xl=e=>t=>typeof t===e,{isArray:Yi}=Array,Zo=Xl("undefined");function Q3(e){return e!==null&&!Zo(e)&&e.constructor!==null&&!Zo(e.constructor)&&Lt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const vy=tr("ArrayBuffer");function Z3(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&vy(e.buffer),t}const J3=Xl("string"),Lt=Xl("function"),xy=Xl("number"),eu=e=>e!==null&&typeof e=="object",X3=e=>e===!0||e===!1,da=e=>{if(Jl(e)!=="object")return!1;const t=Kf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},e_=tr("Date"),t_=tr("File"),r_=tr("Blob"),n_=tr("FileList"),i_=e=>eu(e)&&Lt(e.pipe),o_=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Lt(e.append)&&((t=Jl(e))==="formdata"||t==="object"&&Lt(e.toString)&&e.toString()==="[object FormData]"))},s_=tr("URLSearchParams"),[a_,l_,u_,c_]=["ReadableStream","Request","Response","Headers"].map(tr),d_=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ds(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,i;if(typeof e!="object"&&(e=[e]),Yi(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(n=0;n<s;n++)a=o[n],t.call(null,e[a],a,e)}}function wy(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,i;for(;n-- >0;)if(i=r[n],t===i.toLowerCase())return i;return null}const Sy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,_y=e=>!Zo(e)&&e!==Sy;function _d(){const{caseless:e}=_y(this)&&this||{},t={},r=(n,i)=>{const o=e&&wy(t,i)||i;da(t[o])&&da(n)?t[o]=_d(t[o],n):da(n)?t[o]=_d({},n):Yi(n)?t[o]=n.slice():t[o]=n};for(let n=0,i=arguments.length;n<i;n++)arguments[n]&&ds(arguments[n],r);return t}const f_=(e,t,r,{allOwnKeys:n}={})=>(ds(t,(i,o)=>{r&&Lt(i)?e[o]=yy(i,r):e[o]=i},{allOwnKeys:n}),e),p_=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),h_=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},m_=(e,t,r,n)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!n||n(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=r!==!1&&Kf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},g_=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},y_=e=>{if(!e)return null;if(Yi(e))return e;let t=e.length;if(!xy(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},v_=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Kf(Uint8Array)),x_=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},w_=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},S_=tr("HTMLFormElement"),__=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,i){return n.toUpperCase()+i}),ym=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),k_=tr("RegExp"),ky=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};ds(r,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(n[o]=s||i)}),Object.defineProperties(e,n)},C_=e=>{ky(e,(t,r)=>{if(Lt(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(Lt(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},E_=(e,t)=>{const r={},n=i=>{i.forEach(o=>{r[o]=!0})};return Yi(e)?n(e):n(String(e).split(t)),r},j_=()=>{},b_=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ec="abcdefghijklmnopqrstuvwxyz",vm="0123456789",Cy={DIGIT:vm,ALPHA:ec,ALPHA_DIGIT:ec+ec.toUpperCase()+vm},N_=(e=16,t=Cy.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function P_(e){return!!(e&&Lt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const O_=e=>{const t=new Array(10),r=(n,i)=>{if(eu(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[i]=n;const o=Yi(n)?[]:{};return ds(n,(s,a)=>{const l=r(s,i+1);!Zo(l)&&(o[a]=l)}),t[i]=void 0,o}}return n};return r(e,0)},R_=tr("AsyncFunction"),T_=e=>e&&(eu(e)||Lt(e))&&Lt(e.then)&&Lt(e.catch),C={isArray:Yi,isArrayBuffer:vy,isBuffer:Q3,isFormData:o_,isArrayBufferView:Z3,isString:J3,isNumber:xy,isBoolean:X3,isObject:eu,isPlainObject:da,isReadableStream:a_,isRequest:l_,isResponse:u_,isHeaders:c_,isUndefined:Zo,isDate:e_,isFile:t_,isBlob:r_,isRegExp:k_,isFunction:Lt,isStream:i_,isURLSearchParams:s_,isTypedArray:v_,isFileList:n_,forEach:ds,merge:_d,extend:f_,trim:d_,stripBOM:p_,inherits:h_,toFlatObject:m_,kindOf:Jl,kindOfTest:tr,endsWith:g_,toArray:y_,forEachEntry:x_,matchAll:w_,isHTMLForm:S_,hasOwnProperty:ym,hasOwnProp:ym,reduceDescriptors:ky,freezeMethods:C_,toObjectSet:E_,toCamelCase:__,noop:j_,toFiniteNumber:b_,findKey:wy,global:Sy,isContextDefined:_y,ALPHABET:Cy,generateString:N_,isSpecCompliantForm:P_,toJSONObject:O_,isAsyncFn:R_,isThenable:T_};function Y(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}C.inherits(Y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ey=Y.prototype,jy={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{jy[e]={value:e}});Object.defineProperties(Y,jy);Object.defineProperty(Ey,"isAxiosError",{value:!0});Y.from=(e,t,r,n,i,o)=>{const s=Object.create(Ey);return C.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Y.call(s,e.message,t,r,n,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const M_=null;function kd(e){return C.isPlainObject(e)||C.isArray(e)}function by(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function xm(e,t,r){return e?e.concat(t).map(function(i,o){return i=by(i),!r&&o?"["+i+"]":i}).join(r?".":""):t}function D_(e){return C.isArray(e)&&!e.some(kd)}const L_=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function tu(e,t,r){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=C.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,S){return!C.isUndefined(S[v])});const n=r.metaTokens,i=r.visitor||d,o=r.dots,s=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(t);if(!C.isFunction(i))throw new TypeError("visitor must be a function");function c(y){if(y===null)return"";if(C.isDate(y))return y.toISOString();if(!l&&C.isBlob(y))throw new Y("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(y)||C.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,v,S){let g=y;if(y&&!S&&typeof y=="object"){if(C.endsWith(v,"{}"))v=n?v:v.slice(0,-2),y=JSON.stringify(y);else if(C.isArray(y)&&D_(y)||(C.isFileList(y)||C.endsWith(v,"[]"))&&(g=C.toArray(y)))return v=by(v),g.forEach(function(m,w){!(C.isUndefined(m)||m===null)&&t.append(s===!0?xm([v],w,o):s===null?v:v+"[]",c(m))}),!1}return kd(y)?!0:(t.append(xm(S,v,o),c(y)),!1)}const f=[],p=Object.assign(L_,{defaultVisitor:d,convertValue:c,isVisitable:kd});function x(y,v){if(!C.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(y),C.forEach(y,function(g,h){(!(C.isUndefined(g)||g===null)&&i.call(t,g,C.isString(h)?h.trim():h,v,p))===!0&&x(g,v?v.concat(h):[h])}),f.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return x(e),t}function wm(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Qf(e,t){this._pairs=[],e&&tu(e,this,t)}const Ny=Qf.prototype;Ny.append=function(t,r){this._pairs.push([t,r])};Ny.toString=function(t){const r=t?function(n){return t.call(this,n,wm)}:wm;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function z_(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Py(e,t,r){if(!t)return e;const n=r&&r.encode||z_,i=r&&r.serialize;let o;if(i?o=i(t,r):o=C.isURLSearchParams(t)?t.toString():new Qf(t,r).toString(n),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Sm{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Oy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},A_=typeof URLSearchParams<"u"?URLSearchParams:Qf,I_=typeof FormData<"u"?FormData:null,F_=typeof Blob<"u"?Blob:null,$_={isBrowser:!0,classes:{URLSearchParams:A_,FormData:I_,Blob:F_},protocols:["http","https","file","blob","url","data"]},Zf=typeof window<"u"&&typeof document<"u",U_=(e=>Zf&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),W_=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Y_=Zf&&window.location.href||"http://localhost",B_=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Zf,hasStandardBrowserEnv:U_,hasStandardBrowserWebWorkerEnv:W_,origin:Y_},Symbol.toStringTag,{value:"Module"})),Zt={...B_,...$_};function H_(e,t){return tu(e,new Zt.classes.URLSearchParams,Object.assign({visitor:function(r,n,i,o){return Zt.isNode&&C.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function V_(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function G_(e){const t={},r=Object.keys(e);let n;const i=r.length;let o;for(n=0;n<i;n++)o=r[n],t[o]=e[o];return t}function Ry(e){function t(r,n,i,o){let s=r[o++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=o>=r.length;return s=!s&&C.isArray(i)?i.length:s,l?(C.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!a):((!i[s]||!C.isObject(i[s]))&&(i[s]=[]),t(r,n,i[s],o)&&C.isArray(i[s])&&(i[s]=G_(i[s])),!a)}if(C.isFormData(e)&&C.isFunction(e.entries)){const r={};return C.forEachEntry(e,(n,i)=>{t(V_(n),i,r,0)}),r}return null}function q_(e,t,r){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const fs={transitional:Oy,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",i=n.indexOf("application/json")>-1,o=C.isObject(t);if(o&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return i?JSON.stringify(Ry(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t)||C.isReadableStream(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return H_(t,this.formSerializer).toString();if((a=C.isFileList(t))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return tu(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(r.setContentType("application/json",!1),q_(t)):t}],transformResponse:[function(t){const r=this.transitional||fs.transitional,n=r&&r.forcedJSONParsing,i=this.responseType==="json";if(C.isResponse(t)||C.isReadableStream(t))return t;if(t&&C.isString(t)&&(n&&!this.responseType||i)){const s=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?Y.from(a,Y.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Zt.classes.FormData,Blob:Zt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],e=>{fs.headers[e]={}});const K_=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Q_=e=>{const t={};let r,n,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),r=s.substring(0,i).trim().toLowerCase(),n=s.substring(i+1).trim(),!(!r||t[r]&&K_[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},_m=Symbol("internals");function ro(e){return e&&String(e).trim().toLowerCase()}function fa(e){return e===!1||e==null?e:C.isArray(e)?e.map(fa):String(e)}function Z_(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const J_=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function tc(e,t,r,n,i){if(C.isFunction(n))return n.call(this,t,r);if(i&&(t=r),!!C.isString(t)){if(C.isString(n))return t.indexOf(n)!==-1;if(C.isRegExp(n))return n.test(t)}}function X_(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function e6(e,t){const r=C.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(i,o,s){return this[n].call(this,t,i,o,s)},configurable:!0})})}class mt{constructor(t){t&&this.set(t)}set(t,r,n){const i=this;function o(a,l,c){const d=ro(l);if(!d)throw new Error("header name must be a non-empty string");const f=C.findKey(i,d);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||l]=fa(a))}const s=(a,l)=>C.forEach(a,(c,d)=>o(c,d,l));if(C.isPlainObject(t)||t instanceof this.constructor)s(t,r);else if(C.isString(t)&&(t=t.trim())&&!J_(t))s(Q_(t),r);else if(C.isHeaders(t))for(const[a,l]of t.entries())o(l,a,n);else t!=null&&o(r,t,n);return this}get(t,r){if(t=ro(t),t){const n=C.findKey(this,t);if(n){const i=this[n];if(!r)return i;if(r===!0)return Z_(i);if(C.isFunction(r))return r.call(this,i,n);if(C.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=ro(t),t){const n=C.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||tc(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let i=!1;function o(s){if(s=ro(s),s){const a=C.findKey(n,s);a&&(!r||tc(n,n[a],a,r))&&(delete n[a],i=!0)}}return C.isArray(t)?t.forEach(o):o(t),i}clear(t){const r=Object.keys(this);let n=r.length,i=!1;for(;n--;){const o=r[n];(!t||tc(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const r=this,n={};return C.forEach(this,(i,o)=>{const s=C.findKey(n,o);if(s){r[s]=fa(i),delete r[o];return}const a=t?X_(o):String(o).trim();a!==o&&delete r[o],r[a]=fa(i),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return C.forEach(this,(n,i)=>{n!=null&&n!==!1&&(r[i]=t&&C.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(i=>n.set(i)),n}static accessor(t){const n=(this[_m]=this[_m]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=ro(s);n[a]||(e6(i,s),n[a]=!0)}return C.isArray(t)?t.forEach(o):o(t),this}}mt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(mt.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});C.freezeMethods(mt);function rc(e,t){const r=this||fs,n=t||r,i=mt.from(n.headers);let o=n.data;return C.forEach(e,function(a){o=a.call(r,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Ty(e){return!!(e&&e.__CANCEL__)}function Bi(e,t,r){Y.call(this,e??"canceled",Y.ERR_CANCELED,t,r),this.name="CanceledError"}C.inherits(Bi,Y,{__CANCEL__:!0});function My(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new Y("Request failed with status code "+r.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function t6(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function r6(e,t){e=e||10;const r=new Array(e),n=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),d=n[o];s||(s=c),r[i]=l,n[i]=c;let f=o,p=0;for(;f!==i;)p+=r[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-s<t)return;const x=d&&c-d;return x?Math.round(p*1e3/x):void 0}}function n6(e,t){let r=0;const n=1e3/t;let i=null;return function(){const s=this===!0,a=Date.now();if(s||a-r>n)return i&&(clearTimeout(i),i=null),r=a,e.apply(null,arguments);i||(i=setTimeout(()=>(i=null,r=Date.now(),e.apply(null,arguments)),n-(a-r)))}}const ml=(e,t,r=3)=>{let n=0;const i=r6(50,250);return n6(o=>{const s=o.loaded,a=o.lengthComputable?o.total:void 0,l=s-n,c=i(l),d=s<=a;n=s;const f={loaded:s,total:a,progress:a?s/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&d?(a-s)/c:void 0,event:o,lengthComputable:a!=null};f[t?"download":"upload"]=!0,e(f)},r)},i6=Zt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function i(o){let s=o;return t&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=i(window.location.href),function(s){const a=C.isString(s)?i(s):s;return a.protocol===n.protocol&&a.host===n.host}}():function(){return function(){return!0}}(),o6=Zt.hasStandardBrowserEnv?{write(e,t,r,n,i,o){const s=[e+"="+encodeURIComponent(t)];C.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),C.isString(n)&&s.push("path="+n),C.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function s6(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function a6(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Dy(e,t){return e&&!s6(t)?a6(e,t):t}const km=e=>e instanceof mt?{...e}:e;function Yn(e,t){t=t||{};const r={};function n(c,d,f){return C.isPlainObject(c)&&C.isPlainObject(d)?C.merge.call({caseless:f},c,d):C.isPlainObject(d)?C.merge({},d):C.isArray(d)?d.slice():d}function i(c,d,f){if(C.isUndefined(d)){if(!C.isUndefined(c))return n(void 0,c,f)}else return n(c,d,f)}function o(c,d){if(!C.isUndefined(d))return n(void 0,d)}function s(c,d){if(C.isUndefined(d)){if(!C.isUndefined(c))return n(void 0,c)}else return n(void 0,d)}function a(c,d,f){if(f in t)return n(c,d);if(f in e)return n(void 0,c)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,d)=>i(km(c),km(d),!0)};return C.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=l[d]||i,p=f(e[d],t[d],d);C.isUndefined(p)&&f!==a||(r[d]=p)}),r}const Ly=e=>{const t=Yn({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:a}=t;t.headers=s=mt.from(s),t.url=Py(Dy(t.baseURL,t.url),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(C.isFormData(r)){if(Zt.hasStandardBrowserEnv||Zt.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((l=s.getContentType())!==!1){const[c,...d]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([c||"multipart/form-data",...d].join("; "))}}if(Zt.hasStandardBrowserEnv&&(n&&C.isFunction(n)&&(n=n(t)),n||n!==!1&&i6(t.url))){const c=i&&o&&o6.read(o);c&&s.set(i,c)}return t},l6=typeof XMLHttpRequest<"u",u6=l6&&function(e){return new Promise(function(r,n){const i=Ly(e);let o=i.data;const s=mt.from(i.headers).normalize();let{responseType:a}=i,l;function c(){i.cancelToken&&i.cancelToken.unsubscribe(l),i.signal&&i.signal.removeEventListener("abort",l)}let d=new XMLHttpRequest;d.open(i.method.toUpperCase(),i.url,!0),d.timeout=i.timeout;function f(){if(!d)return;const x=mt.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),v={data:!a||a==="text"||a==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:x,config:e,request:d};My(function(g){r(g),c()},function(g){n(g),c()},v),d=null}"onloadend"in d?d.onloadend=f:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(f)},d.onabort=function(){d&&(n(new Y("Request aborted",Y.ECONNABORTED,i,d)),d=null)},d.onerror=function(){n(new Y("Network Error",Y.ERR_NETWORK,i,d)),d=null},d.ontimeout=function(){let y=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const v=i.transitional||Oy;i.timeoutErrorMessage&&(y=i.timeoutErrorMessage),n(new Y(y,v.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,i,d)),d=null},o===void 0&&s.setContentType(null),"setRequestHeader"in d&&C.forEach(s.toJSON(),function(y,v){d.setRequestHeader(v,y)}),C.isUndefined(i.withCredentials)||(d.withCredentials=!!i.withCredentials),a&&a!=="json"&&(d.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&d.addEventListener("progress",ml(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",ml(i.onUploadProgress)),(i.cancelToken||i.signal)&&(l=x=>{d&&(n(!x||x.type?new Bi(null,e,d):x),d.abort(),d=null)},i.cancelToken&&i.cancelToken.subscribe(l),i.signal&&(i.signal.aborted?l():i.signal.addEventListener("abort",l)));const p=t6(i.url);if(p&&Zt.protocols.indexOf(p)===-1){n(new Y("Unsupported protocol "+p+":",Y.ERR_BAD_REQUEST,e));return}d.send(o||null)})},c6=(e,t)=>{let r=new AbortController,n;const i=function(l){if(!n){n=!0,s();const c=l instanceof Error?l:this.reason;r.abort(c instanceof Y?c:new Bi(c instanceof Error?c.message:c))}};let o=t&&setTimeout(()=>{i(new Y(`timeout ${t} of ms exceeded`,Y.ETIMEDOUT))},t);const s=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",i):l.unsubscribe(i))}),e=null)};e.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",i));const{signal:a}=r;return a.unsubscribe=s,[a,()=>{o&&clearTimeout(o),o=null}]},d6=function*(e,t){let r=e.byteLength;if(!t||r<t){yield e;return}let n=0,i;for(;n<r;)i=n+t,yield e.slice(n,i),n=i},f6=async function*(e,t,r){for await(const n of e)yield*d6(ArrayBuffer.isView(n)?n:await r(String(n)),t)},Cm=(e,t,r,n,i)=>{const o=f6(e,t,i);let s=0;return new ReadableStream({type:"bytes",async pull(a){const{done:l,value:c}=await o.next();if(l){a.close(),n();return}let d=c.byteLength;r&&r(s+=d),a.enqueue(new Uint8Array(c))},cancel(a){return n(a),o.return()}},{highWaterMark:2})},Em=(e,t)=>{const r=e!=null;return n=>setTimeout(()=>t({lengthComputable:r,total:e,loaded:n}))},ru=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",zy=ru&&typeof ReadableStream=="function",Cd=ru&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),p6=zy&&(()=>{let e=!1;const t=new Request(Zt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),jm=64*1024,Ed=zy&&!!(()=>{try{return C.isReadableStream(new Response("").body)}catch{}})(),gl={stream:Ed&&(e=>e.body)};ru&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!gl[t]&&(gl[t]=C.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new Y(`Response type '${t}' is not supported`,Y.ERR_NOT_SUPPORT,n)})})})(new Response);const h6=async e=>{if(e==null)return 0;if(C.isBlob(e))return e.size;if(C.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(C.isArrayBufferView(e))return e.byteLength;if(C.isURLSearchParams(e)&&(e=e+""),C.isString(e))return(await Cd(e)).byteLength},m6=async(e,t)=>{const r=C.toFiniteNumber(e.getContentLength());return r??h6(t)},g6=ru&&(async e=>{let{url:t,method:r,data:n,signal:i,cancelToken:o,timeout:s,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:d,withCredentials:f="same-origin",fetchOptions:p}=Ly(e);c=c?(c+"").toLowerCase():"text";let[x,y]=i||o||s?c6([i,o],s):[],v,S;const g=()=>{!v&&setTimeout(()=>{x&&x.unsubscribe()}),v=!0};let h;try{if(l&&p6&&r!=="get"&&r!=="head"&&(h=await m6(d,n))!==0){let E=new Request(t,{method:"POST",body:n,duplex:"half"}),_;C.isFormData(n)&&(_=E.headers.get("content-type"))&&d.setContentType(_),E.body&&(n=Cm(E.body,jm,Em(h,ml(l)),null,Cd))}C.isString(f)||(f=f?"cors":"omit"),S=new Request(t,{...p,signal:x,method:r.toUpperCase(),headers:d.normalize().toJSON(),body:n,duplex:"half",withCredentials:f});let m=await fetch(S);const w=Ed&&(c==="stream"||c==="response");if(Ed&&(a||w)){const E={};["status","statusText","headers"].forEach(k=>{E[k]=m[k]});const _=C.toFiniteNumber(m.headers.get("content-length"));m=new Response(Cm(m.body,jm,a&&Em(_,ml(a,!0)),w&&g,Cd),E)}c=c||"text";let j=await gl[C.findKey(gl,c)||"text"](m,e);return!w&&g(),y&&y(),await new Promise((E,_)=>{My(E,_,{data:j,headers:mt.from(m.headers),status:m.status,statusText:m.statusText,config:e,request:S})})}catch(m){throw g(),m&&m.name==="TypeError"&&/fetch/i.test(m.message)?Object.assign(new Y("Network Error",Y.ERR_NETWORK,e,S),{cause:m.cause||m}):Y.from(m,m&&m.code,e,S)}}),jd={http:M_,xhr:u6,fetch:g6};C.forEach(jd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const bm=e=>`- ${e}`,y6=e=>C.isFunction(e)||e===null||e===!1,Ay={getAdapter:e=>{e=C.isArray(e)?e:[e];const{length:t}=e;let r,n;const i={};for(let o=0;o<t;o++){r=e[o];let s;if(n=r,!y6(r)&&(n=jd[(s=String(r)).toLowerCase()],n===void 0))throw new Y(`Unknown adapter '${s}'`);if(n)break;i[s||"#"+o]=n}if(!n){const o=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(bm).join(`
`):" "+bm(o[0]):"as no adapter specified";throw new Y("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return n},adapters:jd};function nc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Bi(null,e)}function Nm(e){return nc(e),e.headers=mt.from(e.headers),e.data=rc.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ay.getAdapter(e.adapter||fs.adapter)(e).then(function(n){return nc(e),n.data=rc.call(e,e.transformResponse,n),n.headers=mt.from(n.headers),n},function(n){return Ty(n)||(nc(e),n&&n.response&&(n.response.data=rc.call(e,e.transformResponse,n.response),n.response.headers=mt.from(n.response.headers))),Promise.reject(n)})}const Iy="1.7.2",Jf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Jf[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Pm={};Jf.transitional=function(t,r,n){function i(o,s){return"[Axios v"+Iy+"] Transitional option '"+o+"'"+s+(n?". "+n:"")}return(o,s,a)=>{if(t===!1)throw new Y(i(s," has been removed"+(r?" in "+r:"")),Y.ERR_DEPRECATED);return r&&!Pm[s]&&(Pm[s]=!0,console.warn(i(s," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,s,a):!0}};function v6(e,t,r){if(typeof e!="object")throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const o=n[i],s=t[o];if(s){const a=e[o],l=a===void 0||s(a,o,e);if(l!==!0)throw new Y("option "+o+" must be "+l,Y.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new Y("Unknown option "+o,Y.ERR_BAD_OPTION)}}const bd={assertOptions:v6,validators:Jf},Ir=bd.validators;class Ln{constructor(t){this.defaults=t,this.interceptors={request:new Sm,response:new Sm}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+o):n.stack=o}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Yn(this.defaults,r);const{transitional:n,paramsSerializer:i,headers:o}=r;n!==void 0&&bd.assertOptions(n,{silentJSONParsing:Ir.transitional(Ir.boolean),forcedJSONParsing:Ir.transitional(Ir.boolean),clarifyTimeoutError:Ir.transitional(Ir.boolean)},!1),i!=null&&(C.isFunction(i)?r.paramsSerializer={serialize:i}:bd.assertOptions(i,{encode:Ir.function,serialize:Ir.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=o&&C.merge(o.common,o[r.method]);o&&C.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),r.headers=mt.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(r)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let d,f=0,p;if(!l){const y=[Nm.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,c),p=y.length,d=Promise.resolve(r);f<p;)d=d.then(y[f++],y[f++]);return d}p=a.length;let x=r;for(f=0;f<p;){const y=a[f++],v=a[f++];try{x=y(x)}catch(S){v.call(this,S);break}}try{d=Nm.call(this,x)}catch(y){return Promise.reject(y)}for(f=0,p=c.length;f<p;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=Yn(this.defaults,t);const r=Dy(t.baseURL,t.url);return Py(r,t.params,t.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(t){Ln.prototype[t]=function(r,n){return this.request(Yn(n||{},{method:t,url:r,data:(n||{}).data}))}});C.forEach(["post","put","patch"],function(t){function r(n){return function(o,s,a){return this.request(Yn(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Ln.prototype[t]=r(),Ln.prototype[t+"Form"]=r(!0)});class Xf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(i=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](i);n._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{n.subscribe(a),o=a}).then(i);return s.cancel=function(){n.unsubscribe(o)},s},t(function(o,s,a){n.reason||(n.reason=new Bi(o,s,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new Xf(function(i){t=i}),cancel:t}}}function x6(e){return function(r){return e.apply(null,r)}}function w6(e){return C.isObject(e)&&e.isAxiosError===!0}const Nd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Nd).forEach(([e,t])=>{Nd[t]=e});function Fy(e){const t=new Ln(e),r=yy(Ln.prototype.request,t);return C.extend(r,Ln.prototype,t,{allOwnKeys:!0}),C.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return Fy(Yn(e,i))},r}const Re=Fy(fs);Re.Axios=Ln;Re.CanceledError=Bi;Re.CancelToken=Xf;Re.isCancel=Ty;Re.VERSION=Iy;Re.toFormData=tu;Re.AxiosError=Y;Re.Cancel=Re.CanceledError;Re.all=function(t){return Promise.all(t)};Re.spread=x6;Re.isAxiosError=w6;Re.mergeConfig=Yn;Re.AxiosHeaders=mt;Re.formToJSON=e=>Ry(C.isHTMLForm(e)?new FormData(e):e);Re.getAdapter=Ay.getAdapter;Re.HttpStatusCode=Nd;Re.default=Re;const st=Re.create({baseURL:"https://jocestech-backend-fullstack.onrender.com/api/v1"}),S6={cart:q3()||[],total_items:0,total_amount:0,tax:377,shipping_fee:534},$y=Kn({name:"Cart",initialState:S6,reducers:{addToCart:(e,{payload:t})=>{const{id:r,mainColor:n,amount:i,product:o}=t;if(e.cart.find(a=>a.id===r+n)){const a=e.cart.map(l=>{if(l.id===r+n){let c=l.amount+i;return c>l.max&&(c=l.max),{...l,amount:c}}else return l});e.cart=a}else{const a={id:r+n,name:o.name,color:n,amount:i,image:o.image[0],price:o.price,max:o.inventory,productId:r};e.cart=[...e.cart,a],Xu(e.cart)}},removeItem:(e,{payload:t})=>{const r=e.cart.filter(n=>n.id!==t);e.cart=r,Xu(e.cart)},toggleAmount:(e,{payload:t})=>{const{id:r,value:n}=t,i=e.cart.map(o=>{if(o.id===r){if(n==="inc"){let s=o.amount+1;return s>o.max&&(s=o.max),{...o,amount:s}}if(n==="dec"){let s=o.amount-1;return s<1&&(s=1),{...o,amount:s}}}return o});e.cart=i,Xu(e.cart)},clearCart:e=>{e.cart=[],e.total_items=0,e.total_amount=0,gy()},countCartTotal:e=>{const{total_items:t,total_amount:r}=e.cart.reduce((n,i)=>{const{amount:o,price:s}=i;return n.total_items+=o,n.total_amount+=s*o,n},{total_items:0,total_amount:0});e.total_items=t,e.total_amount=r}}}),{addToCart:_6,removeItem:k6,toggleAmount:Om,clearCart:ep,countCartTotal:C6}=$y.actions,E6=$y.reducer,j6={products_loading:!1,products_error:!1,products:[],featured_products:[],single_product_loading:!1,single_product_error:!1,single_product:[],single_product_review:[],single_product_review_loading:!1,single_product_review_error:!1,page:1,numOfPages:1,recommanded_products:[]},Eo=ot("product/getAllProducts",async(e,t)=>{try{const{data:r}=await st.get("/products");return r}catch(r){return t.rejectWithValue(r.response.data.msg)}}),pa=ot("product/getSingleProducts",async(e,t)=>{try{const{data:r}=await st.get(`/products/${e}`),{product:n}=r;return t.dispatch(b6({products:t.getState().products.products,category:n.category})),r}catch(r){return t.rejectWithValue(r.response.data.msg)}}),ha=ot("product/getSingleProductReview",async(e,t)=>{try{const{page:r}=t.getState().products,{data:n}=await st.get(`/products/review/${e}?page=${r}`);return n}catch(r){return t.rejectWithValue(r.response.data.msg)}}),Uy=Kn({name:"Product",initialState:j6,reducers:{getRecommandedProduct:(e,{payload:t})=>{const{products:r,category:n}=t;e.recommanded_products=r.filter(i=>i.category===n)},changePage:(e,{payload:t})=>{e.page=t}},extraReducers:e=>{e.addCase(Eo.pending,t=>{t.products_loading=!0,t.products_error=!1}).addCase(Eo.fulfilled,(t,{payload:r})=>{const{products:n}=r;t.products_loading=!1,t.products_error=!1,t.products=n,t.featured_products=n.filter(i=>i.featured===!0)}).addCase(Eo.rejected,(t,{payload:r})=>{t.products_loading=!1,t.products_error=!0,$.error(r)}).addCase(pa.pending,t=>{t.single_product_loading=!0,t.single_product_error=!1}).addCase(pa.fulfilled,(t,{payload:r})=>{t.single_product_loading=!1,t.single_product_error=!1;const{product:n}=r;t.single_product=n,t.page=1}).addCase(pa.rejected,(t,{payload:r})=>{t.single_product_loading=!1,t.single_product_error=!0,$.error(r)}).addCase(ha.pending,t=>{t.single_product_review_loading=!0,t.single_product_review_error=!1}).addCase(ha.fulfilled,(t,{payload:r})=>{const{reviews:n,numOfPages:i}=r;t.single_product_review_loading=!1,t.single_product_review_error=!1,t.single_product_review=n,t.numOfPages=i}).addCase(ha.rejected,(t,{payload:r})=>{t.single_product_review_loading=!1,t.single_product_review_error=!0,$.error(r)})}}),{getRecommandedProduct:b6,changePage:ic}=Uy.actions,N6=Uy.reducer,ir={title:"",comment:"",rating:1,isLoading:!1,isError:!1,isEdit:!1,editReviewId:"",newReview:null},ma=ot("review/addReview",async(e,t)=>{try{const{data:r}=await st.post("/reviews",e);return r}catch(r){return t.rejectWithValue(r.response.data.msg)}}),ga=ot("review/updateReview",async(e,t)=>{const{reviewId:r,review:n}=e;try{const{data:i}=await st.patch(`/reviews/${r}`,n);return i}catch(i){return t.rejectWithValue(i.response.data.msg)}}),ya=ot("review/deleteReview",async(e,t)=>{try{const{data:r}=await st.delete(`/reviews/${e}`);return r}catch(r){return t.rejectWithValue(r.response.data.msg)}}),Wy=Kn({name:"review",initialState:ir,reducers:{handleReviewChange:(e,{payload:t})=>{const{name:r,value:n}=t;e[r]=n},handleEditReview:(e,{payload:t})=>{const{reviewId:r,reviews:n}=t,i=n.find(o=>o._id===r);e.isEdit=!0,e.editReviewId=r,e.comment=i.comment,e.rating=i.rating,e.title=i.title,$.success("Edit Review Mode Selected, Scroll Down")},clearReview:(e,{payload:t})=>{e.newReview=null}},extraReducers:e=>{e.addCase(ma.pending,t=>{t.isLoading=!0,t.isError=!1}).addCase(ma.fulfilled,(t,{payload:r})=>{const{review:n}=r;t.isLoading=!1,t.isError=!1,t.isEdit=!1,t.editReviewId="",t.comment=ir.comment,t.rating=ir.rating,t.title=ir.title,t.newReview=n,$.success("Review Added sucessfully")}).addCase(ma.rejected,(t,{payload:r})=>{t.isLoading=!1,t.isError=!0,$.error(r)}).addCase(ga.pending,t=>{t.isLoading=!0,t.isError=!1}).addCase(ga.fulfilled,(t,{payload:r})=>{const{review:n}=r;t.isLoading=!1,t.isError=!1,t.isEdit=!1,t.editReviewId="",t.comment=ir.comment,t.rating=ir.rating,t.title=ir.title,t.newReview=n,$.success("Review Updated sucessfully")}).addCase(ga.rejected,(t,{payload:r})=>{t.isLoading=!1,t.isError=!0,$.error(r)}).addCase(ya.pending,t=>{t.isLoading=!0,t.isError=!1}).addCase(ya.fulfilled,(t,{payload:r})=>{const{msg:n}=r;t.isLoading=!1,t.isError=!1,t.isEdit=!1,t.editReviewId="",t.comment=ir.comment,t.rating=ir.rating,t.title=ir.title,t.newReview=null,$.success(n)}).addCase(ya.rejected,(t,{payload:r})=>{t.isLoading=!1,t.isError=!0,$.error(r)})}}),{handleReviewChange:yn,handleEditReview:P6,clearReview:O6}=Wy.actions,R6=Wy.reducer,_n={address:{name:"",email:"",line1:"",city:"",state:"",postal_code:""}},T6={orderLoading:!1,orderError:!1,order:{},userOrders:[],status:"pending",clientSecret:null,..._n},va=ot("order/create",async(e,t)=>{try{const{data:r}=await st.post("/orders",e);return r}catch(r){return t.rejectWithValue(r.response.data.msg)}}),xa=ot("order/update",async(e,t)=>{try{const{order:r,address:n,paymentIntentId:i}=e,{data:o}=await st.patch(`/orders/${r.orderId}`,{paymentIntentId:i,address:n});return o}catch(r){return t.rejectWithValue(r.response.data.msg)}}),wa=ot("order/getCurrentUserOrders",async(e,t)=>{try{const{data:r}=await st.get("/orders/showAllMyOrders");return r}catch(r){return t.rejectWithValue(r.response.data.msg)}}),Yy=Kn({name:"Order",initialState:T6,reducers:{toggleAddress:(e,{payload:t})=>{const{value:r,name:n,user:i}=t;e.address.name=i.name,e.address.email=i.email,e.address[n]=r},clearOrder:e=>{e.address.name=_n.address.name,e.address.email=_n.address.email,e.address.line1=_n.address.line1,e.address.city=_n.address.city,e.address.state=_n.address.state,e.address.postal_code=_n.address.postal_code}},extraReducers:e=>{e.addCase(va.pending,(t,{payload:r})=>{t.orderLoading=!0,t.orderError=!1}).addCase(va.fulfilled,(t,{payload:r})=>{const{order:n,clientSecret:i}=r;t.orderLoading=!1,t.orderError=!1,t.clientSecret=i,t.order={orderId:n._id,orderItems:n.orderItems}}).addCase(va.rejected,(t,{payload:r})=>{t.orderLoading=!1,t.orderError=!0,$.error(r)}).addCase(xa.pending,(t,{payload:r})=>{t.orderLoading=!0,t.orderError=!1}).addCase(xa.fulfilled,(t,{payload:r})=>{t.orderLoading=!1,t.orderError=!1}).addCase(xa.rejected,(t,{payload:r})=>{t.orderLoading=!1,t.orderError=!0,$.error(r)}).addCase(wa.pending,(t,{payload:r})=>{t.orderLoading=!0,t.orderError=!1}).addCase(wa.fulfilled,(t,{payload:r})=>{const{orders:n}=r;t.orderLoading=!1,t.orderError=!1,t.userOrders=n}).addCase(wa.rejected,(t,{payload:r})=>{t.orderLoading=!1,t.orderError=!0,$.error(r)})}}),{toggleAddress:M6,clearOrder:By}=Yy.actions,D6=Yy.reducer,L6={isLoading:!1,user:G3()},Sa=ot("user/updateUser",async(e,t)=>{try{const{data:r}=await st.patch("/user/updateUser",e);return r}catch(r){return t.rejectWithValue(r.response.data.msg)}}),_a=ot("user/updateUserPassword",async(e,t)=>{try{const{data:r}=await st.patch("/user/updateUserPassword",e);return r}catch(r){return t.rejectWithValue(r.response.data.msg)}}),ka=ot("user/registerUser",async(e,t)=>{try{const{data:r}=await st.post("/auth/register",e);return r}catch(r){return t.rejectWithValue(r.response.data.msg)}}),Ca=ot("user/loginUser",async(e,t)=>{try{const{data:r}=await st.post("/auth/login",e);return r}catch(r){return t.rejectWithValue(r.response.data.msg)}}),Ea=ot("user/logoutUser",async(e,t)=>{try{const{data:r}=await st.get("/auth/logout");return t.dispatch(ep()),t.dispatch(O6()),t.dispatch(By()),r}catch(r){return t.rejectWithValue(r.response.data.msg)}}),z6=Kn({name:"User",initialState:L6,reducers:{},extraReducers:e=>{e.addCase(Sa.pending,t=>{t.isLoading=!0}).addCase(Sa.fulfilled,(t,{payload:r})=>{const{user:n}=r;t.isLoading=!1,t.user=n,Ws(n),$.success("Updated Credential Successfully")}).addCase(Sa.rejected,(t,{payload:r})=>{t.isLoading=!1,$.error(r)}).addCase(_a.pending,t=>{t.isLoading=!0}).addCase(_a.fulfilled,(t,{payload:r})=>{const{user:n}=r;t.isLoading=!1,t.user=n,Ws(n),$.success("Password Changed Successfully")}).addCase(_a.rejected,(t,{payload:r})=>{t.isLoading=!1,$.error(r)}).addCase(ka.pending,t=>{t.isLoading=!0}).addCase(ka.fulfilled,(t,{payload:r})=>{const{user:n}=r;t.isLoading=!1,t.user=n,Ws(n),$.success(`Hello There ${n.name}`)}).addCase(ka.rejected,(t,{payload:r})=>{t.isLoading=!1,$.error(r)}).addCase(Ca.pending,t=>{t.isLoading=!0}).addCase(Ca.fulfilled,(t,{payload:r})=>{const{user:n}=r;t.isLoading=!1,t.user=n,Ws(n),$.success(`Hello There ${n.name}`)}).addCase(Ca.rejected,(t,{payload:r})=>{t.isLoading=!1,$.error(r)}).addCase(Ea.pending,t=>{t.isLoading=!0}).addCase(Ea.fulfilled,(t,{payload:r})=>{const{msg:n}=r;t.isLoading=!1,t.user=null,V3(),gy(),$.success(n)}).addCase(Ea.rejected,(t,{payload:r})=>{t.isLoading=!1,$.error(r)})}}),A6=z6.reducer,Hy=()=>{const{total_items:e}=K(n=>n.cart),{user:t}=K(n=>n.user),r=Te();return u.jsxs(I6,{className:"cart-btn-wrapper",children:[u.jsxs(ie,{to:"/cart",className:"cart-btn",onClick:()=>r(bn()),children:["Cart",u.jsxs("span",{className:"cart-container",children:[u.jsx(nS,{}),u.jsx("span",{className:"cart-value",children:e})]})]}),t?u.jsxs("button",{type:"button",className:"auth-btn",onClick:()=>{r(bn()),r(Ea())},children:["Logout ",u.jsx(sS,{})]}):u.jsxs(ie,{type:"button",className:"auth-btn",to:"/register",onClick:()=>r(bn()),children:["Login ",u.jsx(aS,{})]}),t&&u.jsx(ie,{type:"button",className:"auth-btn",to:"/setting",onClick:()=>r(bn()),children:u.jsx(fS,{})})]})},I6=W.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1.5rem;
  align-items: center;
  width: 225px;

  .cart-btn {
    /* color: var(--clr-grey-1); */
    color: var(--actual-white);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    /* color: var(--clr-grey-1); */
    display: flex;

    align-items: center;
  }
  @media (max-width: 1020px) {
    .cart-btn {
      color: var(--actual-white);
    }
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    /* background: var(--clr-primary-5); */
    background: #d87d4a;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--primary-chocolate);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`,F6=()=>{const e=Te(),{user:t}=K(r=>r.user);return u.jsx("header",{className:"background-header",children:u.jsx($6,{children:u.jsxs("div",{className:"nav-center",children:[u.jsxs("div",{className:"nav-header",children:[u.jsx(ie,{to:"/",children:u.jsx(Uf,{})}),u.jsx("button",{type:"button",className:"nav-toggle",onClick:()=>e(B3()),children:u.jsx(eS,{})})]}),u.jsxs("ul",{className:"nav-links",children:[Wf.map(r=>{const{id:n,text:i,url:o}=r;return u.jsx("li",{children:u.jsx(ie,{to:o,children:i})},n)}),t&&u.jsx("li",{children:u.jsx(ie,{to:"/checkout",children:"checkout"})})]}),u.jsx(Hy,{})]})})})},$6=W.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(46, 45, 45);

  .nav-center {
    width: 80vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: white;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 1020px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      grid-column-gap: 100px;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: #fff;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--primary-chocolate);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`,U6=()=>{const{user:e}=K(n=>n.user),{isSideBarOpen:t}=K(n=>n.toggle),r=Te();return u.jsx(W6,{children:u.jsxs("aside",{className:`${t?"sidebar show-sidebar":"sidebar"}`,children:[u.jsxs("div",{className:"sidebar-header",children:[u.jsx(Uf,{}),u.jsx("button",{className:"close-btn",onClick:()=>r(bn()),children:u.jsx(iS,{})})]}),u.jsxs("ul",{className:"links",children:[Wf.map(({id:n,text:i,url:o})=>u.jsx("li",{children:u.jsx(ie,{to:o,onClick:()=>r(bn()),children:i})},n)),e&&u.jsx("li",{children:u.jsx(ie,{to:"/checkout",onClick:()=>r(bn()),children:"checkout"})})]}),u.jsx(Hy,{})]})})},W6=W.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--actual-white);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--primary-blackish);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary-blackish);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`,Y6=()=>u.jsx(B6,{children:u.jsx("footer",{className:"section-center",children:u.jsxs("div",{className:"project-container",children:[u.jsxs("div",{className:"logo-footer-container",children:[u.jsx(Uf,{}),u.jsx("div",{className:"link",children:u.jsx("ul",{className:"nav-links",children:Wf.map(e=>{const{id:t,text:r,url:n}=e;return u.jsx("li",{children:u.jsx(ie,{to:n,children:r})},t)})})})]}),u.jsx("p",{className:"footer-paragraph",children:"Jocestech is an all in one stop to fulfill your tech needs. We're a small team of tech lovers and specialists who are devoted to helping you get the most out of personal gadget. Come and visit our demo facility - we’re open 7 days a week."}),u.jsxs("div",{className:"copyright-container",children:[u.jsx("p",{className:"copyright",children:"Copyright 2021. All Rights Reserved"}),u.jsx("div",{children:u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"104",height:"24",viewBox:"0 0 104 24",fill:"none",children:[u.jsx("path",{d:"M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z",fill:"white"}),u.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M92 0C88.741 0 88.333 0.014 87.053 0.072C82.695 0.272 80.273 2.69 80.073 7.052C80.014 8.333 80 8.741 80 12C80 15.259 80.014 15.668 80.072 16.948C80.272 21.306 82.69 23.728 87.052 23.928C88.333 23.986 88.741 24 92 24C95.259 24 95.668 23.986 96.948 23.928C101.302 23.728 103.73 21.31 103.927 16.948C103.986 15.668 104 15.259 104 12C104 8.741 103.986 8.333 103.928 7.053C103.732 2.699 101.311 0.273 96.949 0.073C95.668 0.014 95.259 0 92 0ZM92 2.163C95.204 2.163 95.584 2.175 96.85 2.233C100.102 2.381 101.621 3.924 101.769 7.152C101.827 8.417 101.838 8.797 101.838 12.001C101.838 15.206 101.826 15.585 101.769 16.85C101.62 20.075 100.105 21.621 96.85 21.769C95.584 21.827 95.206 21.839 92 21.839C88.796 21.839 88.416 21.827 87.151 21.769C83.891 21.62 82.38 20.07 82.232 16.849C82.174 15.584 82.162 15.205 82.162 12C82.162 8.796 82.175 8.417 82.232 7.151C82.381 3.924 83.896 2.38 87.151 2.232C88.417 2.175 88.796 2.163 92 2.163ZM85.838 12C85.838 8.597 88.597 5.838 92 5.838C95.403 5.838 98.162 8.597 98.162 12C98.162 15.404 95.403 18.163 92 18.163C88.597 18.163 85.838 15.403 85.838 12ZM92 16C89.791 16 88 14.21 88 12C88 9.791 89.791 8 92 8C94.209 8 96 9.791 96 12C96 14.21 94.209 16 92 16ZM96.965 5.595C96.965 4.8 97.61 4.155 98.406 4.155C99.201 4.155 99.845 4.8 99.845 5.595C99.845 6.39 99.201 7.035 98.406 7.035C97.61 7.035 96.965 6.39 96.965 5.595Z",fill:"white"}),u.jsx("path",{d:"M64 4.55705C63.117 4.94905 62.168 5.21305 61.172 5.33205C62.189 4.72305 62.97 3.75805 63.337 2.60805C62.386 3.17205 61.332 3.58205 60.21 3.80305C59.313 2.84605 58.032 2.24805 56.616 2.24805C53.437 2.24805 51.101 5.21405 51.819 8.29305C47.728 8.08805 44.1 6.12805 41.671 3.14905C40.381 5.36205 41.002 8.25705 43.194 9.72305C42.388 9.69705 41.628 9.47605 40.965 9.10705C40.911 11.388 42.546 13.522 44.914 13.997C44.221 14.185 43.462 14.229 42.69 14.081C43.316 16.037 45.134 17.46 47.29 17.5C45.22 19.123 42.612 19.848 40 19.54C42.179 20.937 44.768 21.752 47.548 21.752C56.69 21.752 61.855 14.031 61.543 7.10605C62.505 6.41105 63.34 5.54405 64 4.55705Z",fill:"white"})]})})]})]})})}),B6=W.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  text-align: center;
  color: white;
  height: 654px;
  flex-shrink: 0;

  p {
    color: white;
  }

  .footer-link {
    display: block;
    margin-top: 1.25rem;
    text-decoration: none;
    color: var(--white);
  }

  .footer-paragraph,
  .copyright {
    font-size: 0.9375rem;
    line-height: 25px; /* 166.667% */
    opacity: 0.5;
  }

  .footer-paragraph {
    margin: 1.5625rem 0;
    font-weight: 500;
    max-width: 33.75rem;
  }

  .copyright {
    font-weight: 700;
    margin-bottom: 1.5625rem;
  }

  .link {
    margin-top: 1.875rem;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.9375rem;

    a {
      color: #fff;
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);

      &:hover {
        border-bottom: 2px solid var(--primary-chocolate);
      }
    }
  }

  @media (min-width: 550px) {
    align-items: start;
    text-align: left;
    .nav-links {
      flex-direction: row;
      justify-content: start;
      margin-top: 0.9375rem;
    }

    .copyright-container {
      display: flex;
      justify-content: space-between;
    }
    .link {
      margin-top: 0;
    }
  }

  @media (min-width: 1020px) {
    height: 365px;
    .logo-footer-container {
      display: flex;
      justify-content: space-between;
    }
    .nav-links {
      margin-top: 0;
    }
  }
`,H6=()=>u.jsx("section",{className:"background-hero",children:u.jsxs(V6,{className:"section-center",children:[u.jsx("article",{className:"content",children:u.jsxs("div",{className:"container",children:[u.jsx("p",{className:"hero-product",children:"NEW PRODUCT"}),u.jsx("h1",{children:"XX99 Mark II Headphones"}),u.jsx("p",{className:"hero-description",children:"Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."}),u.jsx(ie,{to:"/products",className:"btn primary-btn",children:"see products"})]})}),u.jsx("article",{className:"img-container"})]})}),V6=W.section`
  height: calc(100vh - 5rem);
  display: grid;
  place-items: center;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5.625rem;
  }

  h1 {
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 35px; /* 103.571% */
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .hero-product {
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 10px;
    text-transform: uppercase;
    opacity: 0.4964;
  }

  .hero-description {
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
    opacity: 0.75;
    width: 328px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3.5rem;
      line-height: 58px;
      width: 490px;
    }
    .hero-description {
      width: 349px;
    }
  }

  @media (min-width: 1020px) {
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    .container {
      justify-content: center;
      align-items: start;
    }

    h1 {
      text-align: left;
    }

    .hero-product {
      text-align: left;
    }

    .hero-description {
      text-align: left;
    }
  }
`,me=e=>new Intl.NumberFormat("en-CA",{style:"currency",currency:"CAD"}).format(e/100),oc=(e,t)=>{let r=e.map(n=>n[t]);return t==="colors"&&(r=r.flat()),["all",...new Set(r)]},Vy=({image:e,name:t,price:r,id:n})=>u.jsxs(G6,{children:[u.jsxs("div",{className:"container",children:[u.jsx("img",{src:e[0],alt:t}),u.jsx(ie,{to:`/products/${n}`,className:"link",children:u.jsx(qg,{})})]}),u.jsxs("footer",{children:[u.jsx("h5",{children:t}),u.jsx("p",{children:me(r)})]})]}),G6=W.article`
  box-shadow: var(--shadow-1);
  padding: 1rem;
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primary-chocolate);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--actual-black);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--secondy-chocolate);
    letter-spacing: var(--spacing);
  }
`,q6=()=>{const{featured_products:e}=K(t=>t.products);return u.jsx(K6,{className:"section",children:u.jsx("div",{className:"section-center featured",children:e.slice(0,3).map(t=>u.jsx(Vy,{...t},t.id))})})},K6=W.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 165px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 768px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
`,Q6=()=>u.jsx(Z6,{children:u.jsxs("div",{className:"section-center",children:[u.jsxs("article",{className:"header",children:[u.jsxs("h3",{children:["Jocestech ",u.jsx("br",{})," we JUST love technology"]}),u.jsx("p",{children:"Our Store is dedicated to delivering a seamless shopping experience. From personalized expert guidance ensuring the perfect product fit to fast, secure shipping and 24/7 customer support, we prioritize your satisfaction. Enjoy hassle-free returns, exclusive deals, and access to tech insights, empowering you to make informed decisions. We're here to elevate your tech journey, offering convenience, expertise, and reliable service every step of the way."})]}),u.jsx("div",{className:"services-center",children:dS.map(e=>{const{id:t,icon:r,title:n,text:i}=e;return u.jsxs("article",{className:"service",children:[u.jsx("span",{className:"icon",children:r}),u.jsx("h4",{children:n}),u.jsx("p",{children:i})]},t)})})]})}),Z6=W.section`
  h3,
  h4 {
    color: var(--actual-white);
  }
  padding: 5rem 0;

  background: var(--actual-black);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--actual-white);
    opacity: 0.75;
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: rgb(46, 45, 45);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--actual-white);
      opacity: 0.75;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 1020px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }

  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`,J6=()=>u.jsx(X6,{children:u.jsxs("div",{className:"section-center",children:[u.jsx("h3",{children:"Join our newsletter and get 20% off"}),u.jsxs("div",{className:"content",children:[u.jsx("p",{children:"Join our tech community and stay ahead with the latest in innovation, exclusive deals, and tech insights. Sign up for our newsletter to unlock access to special offers, expert recommendations, and stay informed about the newest gadgets and trends. Elevate your tech experience – subscribe now to be part of our dynamic tech community!"}),u.jsxs("form",{className:"contact-form",children:[u.jsx("input",{type:"email",className:"form-input",placeholder:"enter email"}),u.jsx("button",{type:"submit",className:"submit-btn",children:"subscribe"})]})]})]})}),X6=W.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--primary-chocolate);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    background: var(--secondy-chocolate);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`,Nn=({type:e,name:t,value:r,handleChange:n,labelText:i})=>u.jsxs("div",{className:"form-row",children:[u.jsx("label",{htmlFor:t,className:"form-label",children:i||t}),r?u.jsx("input",{id:t,type:e,value:r,name:t,onChange:n,className:"form-input"}):u.jsx("input",{id:t,type:e,name:t,onChange:n,className:"form-input"})]}),Bn=()=>u.jsx("div",{className:"section section-center text-center",children:u.jsx("h2",{children:"there was an error..."})}),Hn=()=>u.jsx("div",{className:"section secton-center",children:u.jsx("div",{className:"loading"})}),Rm={filtered_products:[],all_products:[],grid_view:!0,sort:"price-lowest",filters:{text:"",company:"all",category:"all",color:"all",min_price:0,max_price:0,price:0,shipping:!1},isLoading:!1,isError:!1},ja=ot("filter/getfilterProduct",async(e,t)=>{try{const{data:r}=await st.get("/products"),{products:n}=r;return n}catch(r){return t.rejectWithValue(r.response.data.msg)}}),Gy=Kn({name:"Filter",initialState:Rm,reducers:{setGridView:e=>{e.grid_view=!0},setListView:e=>{e.grid_view=!1},sortProduct:e=>{const{sort:t,filtered_products:r}=e;let n=[];t==="price-lowest"&&(n=r.sort((i,o)=>i.price-o.price)),t==="price-highest"&&(n=r.sort((i,o)=>o.price-i.price)),t==="name-a"&&(n=r.sort((i,o)=>i.name.localeCompare(o.name))),t==="name-z"&&(n=r.sort((i,o)=>o.name.localeCompare(i.name))),e.filtered_products=n},updateSort:(e,{payload:t})=>{e.sort=t},filterProducs:e=>{const{all_products:t}=e,{text:r,category:n,company:i,color:o,price:s,shipping:a}=e.filters;let l=[...t];r&&(l=l.filter(c=>c.name.toLowerCase().startsWith(r))),n!=="all"&&(l=l.filter(c=>c.category===n)),i!=="all"&&(l=l.filter(c=>c.company===i)),o!=="all"&&(l=l.filter(c=>c.colors.find(d=>d===o))),l=l.filter(c=>c.price<=s),a&&(l=l.filter(c=>c.freeShipping===!0)),e.filtered_products=l},updateFilters:(e,{payload:t})=>{const{name:r,value:n}=t;e.filters[r]=n},clearFilters:e=>{e.filters={...Rm.filters,price:e.filters.max_price,max_price:e.filters.max_price}}},extraReducers:e=>{e.addCase(ja.pending,t=>{t.isLoading=!0,t.isError=!1}).addCase(ja.fulfilled,(t,{payload:r})=>{t.isLoading=!1,t.isError=!1;let n=r.map(i=>i.price);n=Math.max(...n),t.all_products=r,t.filtered_products=r,t.filters.max_price=n,t.filters.price=n}).addCase(ja.rejected,(t,{payload:r})=>{t.isLoading=!1,t.isError=!0,$.error(r)})}}),{setGridView:e8,setListView:t8,sortProduct:r8,filterProducs:n8,updateFilters:i8,updateSort:o8,clearFilters:s8}=Gy.actions,a8=Gy.reducer,l8=()=>{const e=Te(),{filters:{text:t,category:r,company:n,color:i,min_price:o,price:s,max_price:a,shipping:l},all_products:c}=K(y=>y.filter),d=oc(c,"category"),f=oc(c,"company"),p=oc(c,"colors"),x=y=>{let v=y.target.name,S=y.target.value;v==="category"&&(S=y.target.textContent),v==="color"&&(S=y.target.dataset.color),v==="price"&&(S=Number(S)),v==="shipping"&&(S=y.target.checked),v==="categoryOption"&&(v="category"),e(i8({name:v,value:S}))};return u.jsx(u8,{children:u.jsxs("div",{className:"content",children:[u.jsxs("form",{onSubmit:y=>y.preventDefault(),children:[u.jsxs("section",{children:[u.jsx("div",{className:"form-control",children:u.jsx("input",{type:"text",name:"text",value:t,placeholder:"search",onChange:x,className:"search-input"})}),u.jsxs("div",{className:"form-control",children:[u.jsx("h5",{children:"category"}),u.jsx("div",{className:"category-big-screen",children:d.map((y,v)=>u.jsx("button",{onClick:x,type:"button",name:"category",className:`${r===y.toLowerCase()?"active":null}`,children:y},v))}),u.jsx("div",{className:"category-small-screen ",children:u.jsx("select",{name:"categoryOption",value:r,onChange:x,className:"company",children:d.map((y,v)=>u.jsx("option",{value:y,children:y},v))})})]}),u.jsxs("div",{className:"form-control",children:[u.jsx("h5",{children:"company"}),u.jsx("select",{name:"company",value:n,onChange:x,className:"company",children:f.map((y,v)=>u.jsx("option",{value:y,children:y},v))})]})]}),u.jsxs("section",{children:[u.jsxs("div",{className:"form-control",children:[u.jsx("h5",{children:"colors"}),u.jsx("div",{className:"colors",children:p.map((y,v)=>y==="all"?u.jsx("button",{name:"color",onClick:x,"data-color":"all",className:`${i==="all"?"all-btn active":"all-btn"}`,children:"all"},v):u.jsx("button",{name:"color",style:{background:y},className:`${i===y?"color-btn active":"color-btn"}`,"data-color":y,onClick:x,children:i===y?u.jsx(Gg,{}):null},v))})]}),u.jsxs("div",{className:"form-control",children:[u.jsx("h5",{children:"price"}),u.jsx("p",{className:"price",children:me(s)}),u.jsx("input",{type:"range",name:"price",onChange:x,min:o,max:a,value:s})]}),u.jsxs("div",{className:"form-control shipping",children:[u.jsx("label",{htmlFor:"shipping",children:"free shipping"}),u.jsx("input",{type:"checkbox",name:"shipping",id:"shipping",checked:l,onChange:x})]})]})]}),u.jsx("button",{type:"button",className:"clear-btn",onClick:()=>e(s8()),children:"clear filters"})]})})},u8=W.section`
  form {
    display: flex;
    justify-content: space-between;
  }

  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }

  .category-big-screen {
    display: none;
  }
  .category-small-screen {
    display: block;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
    .category-big-screen {
      display: block;
    }
    .category-small-screen {
      display: none;
    }
    form {
      display: flex;
      flex-direction: column;
    }
  }
`,qy=({products:e})=>u.jsx(c8,{children:u.jsx("div",{className:"products-container",children:e.map(t=>u.jsx(Vy,{...t},t.id))})}),c8=W.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`,d8=({products:e})=>u.jsx(f8,{children:e.map(t=>{const{id:r,image:n,name:i,price:o,description:s}=t;return u.jsxs("article",{children:[u.jsx("img",{src:n[0],alt:i}),u.jsxs("div",{children:[u.jsx("h4",{children:i}),u.jsx("h5",{className:"price",children:me(o)}),u.jsxs("p",{children:[s.substring(0,150),"..."]}),u.jsx(ie,{to:`/products/${r}`,className:"btn",children:"Details"})]})]},r)})}),f8=W.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--secondy-chocolate);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`,p8=()=>{const{grid_view:e,filtered_products:t,isLoading:r,isError:n}=K(i=>i.filter);return r?u.jsx(Hn,{}):n?u.jsx(Bn,{}):t.length<1?u.jsx("h5",{style:{textTransform:"none"},children:"Sorry, no products matched your search."}):e===!1?u.jsx(d8,{products:t}):u.jsx(qy,{products:t})};function h8(e){return je({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"},child:[]}]})(e)}function m8(e){return je({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"},child:[]}]})(e)}function Ky(e){return je({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"},child:[]}]})(e)}function g8(e){return je({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"},child:[]}]})(e)}function y8(e){return je({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"},child:[]}]})(e)}const v8=()=>{const e=Te(),{filtered_products:t,grid_view:r,sort:n}=K(i=>i.filter);return u.jsxs(x8,{children:[u.jsxs("div",{className:"btn-container",children:[u.jsx("button",{onClick:()=>e(e8()),className:`${r?"active":null}`,children:u.jsx(h8,{})}),u.jsx("button",{onClick:()=>e(t8()),className:`${r?null:"active"}`,children:u.jsx(m8,{})})]}),u.jsxs("p",{children:[t.length," products found"]}),u.jsx("hr",{}),u.jsxs("form",{children:[u.jsx("label",{htmlFor:"sort",children:"sort by"}),u.jsxs("select",{name:"sort",id:"sort",value:n,onChange:i=>{const o=i.target.value;e(o8(o))},className:"sort-input",children:[u.jsx("option",{value:"price-lowest",children:"price (lowest)"}),u.jsx("option",{value:"price-highest",children:"price (highest)"}),u.jsx("option",{value:"name-a",children:"name (a - z)"}),u.jsx("option",{value:"name-z",children:"name (z - a)"})]})]})]})},x8=W.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`,ps=({title:e,product:t})=>u.jsx(w8,{children:u.jsx("div",{className:"section-center",children:u.jsxs("h3",{children:[u.jsx(ie,{to:"/",children:"Home "}),t&&u.jsx(ie,{to:"/products",children:"/ Products"}),"/ ",e]})})}),w8=W.section`
  background: var(--primary-blackish);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--actual-white);
  a {
    color: var(--primary-chocolate);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--primary-chocolate);
  }
`,S8=({image:e=[[]]})=>{const[t,r]=b.useState(e[0]);return u.jsxs(_8,{children:[u.jsx("img",{src:t,alt:"",className:"main "}),u.jsx("div",{className:"gallery",children:e.map((n,i)=>u.jsx("img",{src:n,alt:"",className:`${n===t?"active":null}`,onClick:()=>r(e[i])},i))})]})},_8=W.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`,Qy=({increase:e,decrease:t,amount:r})=>u.jsxs(k8,{className:"amount-btns",children:[u.jsx("button",{type:"button",className:"amount-btn",onClick:t,children:u.jsx(tS,{})}),u.jsx("h2",{className:"amount",children:r}),u.jsx("button",{type:"button",className:"amount-btn",onClick:e,children:u.jsx(rS,{})})]}),k8=W.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`,C8=({product:e})=>{const{id:t,inventory:r,colors:n}=e,[i,o]=b.useState(n[0]),[s,a]=b.useState(1),l=Te(),c=()=>{a(f=>{let p=f+1;return p>r&&(p=r),p})},d=()=>{a(f=>{let p=f-1;return p<1&&(p=1),p})};return u.jsxs(E8,{children:[u.jsxs("div",{className:"colors",children:[u.jsx("span",{children:"colors :"}),u.jsx("div",{children:n.map((f,p)=>u.jsx("button",{style:{background:f},className:`${i===f?"color-btn active":"color-btn"}`,onClick:()=>o(f),children:i===f?u.jsx(Gg,{}):null},p))})]}),u.jsxs("div",{className:"btn-container",children:[u.jsx(Qy,{increase:c,decrease:d,amount:s}),u.jsx(ie,{to:"/cart",className:"btn add-to-cart",onClick:()=>l(_6({id:t,mainColor:i,amount:s,product:e})),children:"add to cart"})]})]})},E8=W.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }

  .add-to-cart {
    text-align: center;
  }
`,Zy=({averageRating:e,reviews:t,showReview:r})=>{const n=Array.from({length:5},(i,o)=>{const s=o+.5;return u.jsx("span",{children:e>s?u.jsx(Ky,{}):e>o?u.jsx(g8,{}):u.jsx(y8,{})},o)});return u.jsxs(j8,{children:[u.jsx("div",{className:"stars",children:n}),r&&u.jsxs("p",{className:"reviews",children:["(",t," customer reviews)"]})]})},j8=W.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`,b8=()=>u.jsxs(N8,{children:[u.jsxs("div",{className:"content",children:[u.jsx("h5",{children:"item"}),u.jsx("h5",{children:"price"}),u.jsx("h5",{children:"quantity"}),u.jsx("h5",{children:"subtotal"}),u.jsx("span",{})]}),u.jsx("hr",{})]}),N8=W.div`
  display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`,P8=({id:e,image:t,name:r,color:n,price:i,amount:o})=>{const s=Te();K(c=>c.cart);const a=()=>{s(Om({id:e,value:"inc"}))},l=()=>{s(Om({id:e,value:"dec"}))};return u.jsxs(O8,{children:[u.jsxs("div",{className:"title",children:[u.jsx("img",{src:t,alt:r}),u.jsxs("div",{children:[u.jsx("h5",{className:"name",children:r}),u.jsxs("p",{className:"color",children:["color :",u.jsx("span",{style:{background:n}})]}),u.jsx("h5",{className:"price-small",children:me(i)})]})]}),u.jsx("h5",{className:"price",children:me(i)}),u.jsx(Qy,{amount:o,increase:a,decrease:l}),u.jsx("h5",{className:"subtotal",children:me(i*o)}),u.jsx("button",{className:"remove-btn",onClick:()=>s(k6(e)),children:u.jsx(oS,{})})]})},O8=W.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .price-small {
    color: var(--primary-chocolate);
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--primary-chocolate);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`,R8=()=>{const{total_amount:e,shipping_fee:t,tax:r}=K(i=>i.cart),{user:n}=K(i=>i.user);return u.jsx(T8,{children:u.jsxs("div",{children:[u.jsxs("article",{children:[u.jsxs("h5",{children:["subtotal :",u.jsx("span",{children:me(e)})]}),u.jsxs("p",{children:["shipping fee :",u.jsx("span",{children:me(t)})]}),u.jsxs("p",{children:["tax :",u.jsx("span",{children:me(r)})]}),u.jsx("hr",{}),u.jsxs("h4",{children:["order total :",u.jsx("span",{children:me(e+t+r)})]})]}),n?u.jsx(ie,{to:"/checkout",className:"btn",children:"proceed to checkout"}):u.jsx(ie,{to:"/register",className:"btn",children:"login"})]})})},T8=W.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`,M8=()=>{const e=Te(),{cart:t}=K(r=>r.cart);return u.jsxs(D8,{className:"section section-center",children:[u.jsx(b8,{}),t.map(r=>u.jsx(P8,{...r},r.id)),u.jsx("hr",{}),u.jsxs("div",{className:"link-container",children:[u.jsx(ie,{to:"/products",className:"link-btn",children:"continue shopping"}),u.jsx("button",{type:"button",className:"link-btn clear-btn",onClick:()=>e(ep()),children:"clear shopping cart"})]}),u.jsx(R8,{})]})},D8=W.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--primary-chocolate);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;var Jy="https://js.stripe.com/v3",L8=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Tm="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",z8=function(){for(var t=document.querySelectorAll('script[src^="'.concat(Jy,'"]')),r=0;r<t.length;r++){var n=t[r];if(L8.test(n.src))return n}return null},Mm=function(t){var r="",n=document.createElement("script");n.src="".concat(Jy).concat(r);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(n),n},A8=function(t,r){!t||!t._registerWrapper||t._registerWrapper({name:"stripe-js",version:"3.4.0",startTime:r})},no=null,Ys=null,Bs=null,I8=function(t){return function(){t(new Error("Failed to load Stripe.js"))}},F8=function(t,r){return function(){window.Stripe?t(window.Stripe):r(new Error("Stripe.js not available"))}},$8=function(t){return no!==null?no:(no=new Promise(function(r,n){if(typeof window>"u"||typeof document>"u"){r(null);return}if(window.Stripe&&t&&console.warn(Tm),window.Stripe){r(window.Stripe);return}try{var i=z8();if(i&&t)console.warn(Tm);else if(!i)i=Mm(t);else if(i&&Bs!==null&&Ys!==null){var o;i.removeEventListener("load",Bs),i.removeEventListener("error",Ys),(o=i.parentNode)===null||o===void 0||o.removeChild(i),i=Mm(t)}Bs=F8(r,n),Ys=I8(n),i.addEventListener("load",Bs),i.addEventListener("error",Ys)}catch(s){n(s);return}}),no.catch(function(r){return no=null,Promise.reject(r)}))},U8=function(t,r,n){if(t===null)return null;var i=t.apply(void 0,r);return A8(i,n),i},io,Xy=!1,ev=function(){return io||(io=$8(null).catch(function(t){return io=null,Promise.reject(t)}),io)};Promise.resolve().then(function(){return ev()}).catch(function(e){Xy||console.warn(e)});var W8=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];Xy=!0;var i=Date.now();return ev().then(function(o){return U8(o,r,i)})},tv={exports:{}},Y8="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",B8=Y8,H8=B8;function rv(){}function nv(){}nv.resetWarningCache=rv;var V8=function(){function e(n,i,o,s,a,l){if(l!==H8){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:nv,resetWarningCache:rv};return r.PropTypes=r,r};tv.exports=V8();var G8=tv.exports;const ye=Vm(G8);function Dm(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Lm(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Dm(Object(r),!0).forEach(function(n){iv(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Dm(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ba(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ba=function(t){return typeof t}:ba=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ba(e)}function iv(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ov(e,t){return q8(e)||K8(e,t)||Q8(e,t)||Z8()}function q8(e){if(Array.isArray(e))return e}function K8(e,t){var r=e&&(typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"]);if(r!=null){var n=[],i=!0,o=!1,s,a;try{for(r=r.call(e);!(i=(s=r.next()).done)&&(n.push(s.value),!(t&&n.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&r.return!=null&&r.return()}finally{if(o)throw a}}return n}}function Q8(e,t){if(e){if(typeof e=="string")return zm(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return zm(e,t)}}function zm(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Z8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gt=function(t,r,n){var i=!!n,o=M.useRef(n);M.useEffect(function(){o.current=n},[n]),M.useEffect(function(){if(!i||!t)return function(){};var s=function(){o.current&&o.current.apply(o,arguments)};return t.on(r,s),function(){t.off(r,s)}},[i,r,t,o])},Pd=function(t){var r=M.useRef(t);return M.useEffect(function(){r.current=t},[t]),r.current},Ai=function(t){return t!==null&&ba(t)==="object"},J8=function(t){return Ai(t)&&typeof t.then=="function"},X8=function(t){return Ai(t)&&typeof t.elements=="function"&&typeof t.createToken=="function"&&typeof t.createPaymentMethod=="function"&&typeof t.confirmCardPayment=="function"},Am="[object Object]",ek=function e(t,r){if(!Ai(t)||!Ai(r))return t===r;var n=Array.isArray(t),i=Array.isArray(r);if(n!==i)return!1;var o=Object.prototype.toString.call(t)===Am,s=Object.prototype.toString.call(r)===Am;if(o!==s)return!1;if(!o&&!n)return t===r;var a=Object.keys(t),l=Object.keys(r);if(a.length!==l.length)return!1;for(var c={},d=0;d<a.length;d+=1)c[a[d]]=!0;for(var f=0;f<l.length;f+=1)c[l[f]]=!0;var p=Object.keys(c);if(p.length!==a.length)return!1;var x=t,y=r,v=function(g){return e(x[g],y[g])};return p.every(v)},sv=function(t,r,n){return Ai(t)?Object.keys(t).reduce(function(i,o){var s=!Ai(r)||!ek(t[o],r[o]);return n.includes(o)?(s&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),i):s?Lm(Lm({},i||{}),{},iv({},o,t[o])):i},null):null},av="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",Im=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:av;if(t===null||X8(t))return t;throw new Error(r)},tk=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:av;if(J8(t))return{tag:"async",stripePromise:Promise.resolve(t).then(function(i){return Im(i,r)})};var n=Im(t,r);return n===null?{tag:"empty"}:{tag:"sync",stripe:n}},rk=function(t){!t||!t._registerWrapper||!t.registerAppInfo||(t._registerWrapper({name:"react-stripe-js",version:"2.7.0"}),t.registerAppInfo({name:"react-stripe-js",version:"2.7.0",url:"https://stripe.com/docs/stripe-js/react"}))},nu=M.createContext(null);nu.displayName="ElementsContext";var lv=function(t,r){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return t},uv=function(t){var r=t.stripe,n=t.options,i=t.children,o=M.useMemo(function(){return tk(r)},[r]),s=M.useState(function(){return{stripe:o.tag==="sync"?o.stripe:null,elements:o.tag==="sync"?o.stripe.elements(n):null}}),a=ov(s,2),l=a[0],c=a[1];M.useEffect(function(){var p=!0,x=function(v){c(function(S){return S.stripe?S:{stripe:v,elements:v.elements(n)}})};return o.tag==="async"&&!l.stripe?o.stripePromise.then(function(y){y&&p&&x(y)}):o.tag==="sync"&&!l.stripe&&x(o.stripe),function(){p=!1}},[o,l,n]);var d=Pd(r);M.useEffect(function(){d!==null&&d!==r&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[d,r]);var f=Pd(n);return M.useEffect(function(){if(l.elements){var p=sv(n,f,["clientSecret","fonts"]);p&&l.elements.update(p)}},[n,f,l.elements]),M.useEffect(function(){rk(l.stripe)},[l.stripe]),M.createElement(nu.Provider,{value:l},i)};uv.propTypes={stripe:ye.any,options:ye.object};var nk=function(t){var r=M.useContext(nu);return lv(r,t)},ik=function(){var t=nk("calls useElements()"),r=t.elements;return r};ye.func.isRequired;var cv=M.createContext(null);cv.displayName="CustomCheckoutSdkContext";var ok=function(t,r){if(!t)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(r," in an <CustomCheckoutProvider> provider."));return t},sk=M.createContext(null);sk.displayName="CustomCheckoutContext";ye.any,ye.shape({clientSecret:ye.string.isRequired,elementsOptions:ye.object}).isRequired;var Od=function(t){var r=M.useContext(cv),n=M.useContext(nu);if(r&&n)throw new Error("You cannot wrap the part of your app that ".concat(t," in both <CustomCheckoutProvider> and <Elements> providers."));return r?ok(r,t):lv(n,t)},ak=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},Ae=function(t,r){var n="".concat(ak(t),"Element"),i=function(l){var c=l.id,d=l.className,f=l.options,p=f===void 0?{}:f,x=l.onBlur,y=l.onFocus,v=l.onReady,S=l.onChange,g=l.onEscape,h=l.onClick,m=l.onLoadError,w=l.onLoaderStart,j=l.onNetworksChange,E=l.onConfirm,_=l.onCancel,k=l.onShippingAddressChange,T=l.onShippingRateChange,A=Od("mounts <".concat(n,">")),ee="elements"in A?A.elements:null,_e="customCheckoutSdk"in A?A.customCheckoutSdk:null,Ve=M.useState(null),Ge=ov(Ve,2),ae=Ge[0],Pt=Ge[1],oe=M.useRef(null),O=M.useRef(null);gt(ae,"blur",x),gt(ae,"focus",y),gt(ae,"escape",g),gt(ae,"click",h),gt(ae,"loaderror",m),gt(ae,"loaderstart",w),gt(ae,"networkschange",j),gt(ae,"confirm",E),gt(ae,"cancel",_),gt(ae,"shippingaddresschange",k),gt(ae,"shippingratechange",T),gt(ae,"change",S);var z;v&&(t==="expressCheckout"?z=v:z=function(){v(ae)}),gt(ae,"ready",z),M.useLayoutEffect(function(){if(oe.current===null&&O.current!==null&&(ee||_e)){var U=null;_e?U=_e.createElement(t,p):ee&&(U=ee.create(t,p)),oe.current=U,Pt(U),U&&U.mount(O.current)}},[ee,_e,p]);var F=Pd(p);return M.useEffect(function(){if(oe.current){var U=sv(p,F,["paymentRequest"]);U&&oe.current.update(U)}},[p,F]),M.useLayoutEffect(function(){return function(){if(oe.current&&typeof oe.current.destroy=="function")try{oe.current.destroy(),oe.current=null}catch{}}},[]),M.createElement("div",{id:c,className:d,ref:O})},o=function(l){Od("mounts <".concat(n,">"));var c=l.id,d=l.className;return M.createElement("div",{id:c,className:d})},s=r?o:i;return s.propTypes={id:ye.string,className:ye.string,onChange:ye.func,onBlur:ye.func,onFocus:ye.func,onReady:ye.func,onEscape:ye.func,onClick:ye.func,onLoadError:ye.func,onLoaderStart:ye.func,onNetworksChange:ye.func,onConfirm:ye.func,onCancel:ye.func,onShippingAddressChange:ye.func,onShippingRateChange:ye.func,options:ye.object},s.displayName=n,s.__elementType=t,s},Ie=typeof window>"u",lk=M.createContext(null);lk.displayName="EmbeddedCheckoutProviderContext";var uk=function(){var t=Od("calls useStripe()"),r=t.stripe;return r};Ae("auBankAccount",Ie);Ae("card",Ie);Ae("cardNumber",Ie);Ae("cardExpiry",Ie);Ae("cardCvc",Ie);Ae("fpxBank",Ie);Ae("iban",Ie);Ae("idealBank",Ie);Ae("p24Bank",Ie);Ae("epsBank",Ie);var ck=Ae("payment",Ie);Ae("expressCheckout",Ie);Ae("paymentRequestButton",Ie);Ae("linkAuthentication",Ie);Ae("address",Ie);Ae("shippingAddress",Ie);Ae("paymentMethodMessaging",Ie);Ae("affirmMessage",Ie);Ae("afterpayClearpayMessage",Ie);const dk=({order:e})=>{const t=uk(),r=ik(),n=ls(),[i,o]=b.useState(null),[s,a]=b.useState(!1),{address:l}=K(g=>g.order),{user:c}=K(g=>g.user),{tax:d,shipping_fee:f,total_amount:p}=K(g=>g.cart),x=Te();function y(g){x(M6({name:g.target.name,value:g.target.value,user:c}))}b.useEffect(()=>{!t||new URLSearchParams(window.location.search).get("payment_intent_client_secret")},[]);const v=async g=>{if(g.preventDefault(),!t||!r)return;a(!0);const{error:h,paymentIntent:m}=await t.confirmPayment({elements:r,confirmParams:{},redirect:"if_required"});h?(console.error("Payment failed",h),o("Payment failed. Please try again.")):m.status==="succeeded"?(x(xa({paymentIntentId:m.id,address:l,order:e})),x(ep()),x(By()),n("/payment-successfull"),o("Payment successful! Thank you for your purchase.")):o("Payment processing. Please wait."),a(!1)},S={layout:"tabs"};return u.jsx(fk,{children:u.jsxs("form",{id:"payment-form",onSubmit:v,children:[u.jsxs("div",{className:"form-container",children:[u.jsx("h3",{children:"BILLING DETAILS"}),u.jsxs("div",{className:"grid-layout-container",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"fullName",children:"Name"}),u.jsx("input",{type:"text",placeholder:"Alexel Ward",id:"fullName",name:"fullName",value:c.name,required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"email",children:"Email Address"}),u.jsx("input",{type:"email",placeholder:"alexi@mail.com",id:"email",name:"email",value:c.email,required:!0})]})]}),u.jsx("h3",{children:"SHIPPING INFO"}),u.jsxs("div",{className:"grid-layout-container",children:[u.jsxs("div",{className:"form-address-container",children:[u.jsx("label",{htmlFor:"address",children:"Your Address"}),u.jsx("input",{type:"text",placeholder:"1137 Williams Avenue",id:"address",name:"line1",value:l.line1,onChange:y,required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{children:"City"}),u.jsx("input",{type:"text",placeholder:"Ottawa",id:"city",name:"city",value:l.city,onChange:y,required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{children:"State"}),u.jsx("input",{type:"text",placeholder:"Ontario",id:"city",name:"state",value:l.state,onChange:y,required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"zipCode",children:"ZIP Code"}),u.jsx("input",{type:"text",placeholder:"X28 4C9",id:"zipCode",name:"postal_code",value:l.zipCode,onChange:y,required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"country",children:"Country"}),u.jsx("input",{type:"text",placeholder:"United State",id:"country",name:"country",value:"Canada",required:!0})]})]}),u.jsxs("article",{className:"grand-total-container",children:[u.jsx("h4",{children:"GRAND TOTAL"}),u.jsx("div",{className:"grand-total-product-container",children:e.orderItems.map((g,h)=>u.jsxs("div",{className:"product-total-details",children:[u.jsx("img",{className:"img-total",src:g.image[0]}),u.jsxs("div",{children:[u.jsx("p",{className:"product-total-name",children:g.name}),u.jsxs("p",{className:"color product-total-price-qty",children:["color :",u.jsx("span",{style:{background:g.color}})]}),u.jsxs("p",{className:"product-total-price-qty",children:["Price: ",u.jsx("span",{children:me(g.price)})]}),u.jsxs("p",{className:"product-total-price-qty",children:["Qty: ",u.jsx("span",{children:g.amount})]})]})]},h))}),u.jsxs("p",{className:"shipping-fee",children:["Shipping Fee: ",me(f)]}),u.jsxs("p",{className:"shipping-fee",children:["Tax: ",me(d)]}),u.jsxs("p",{className:"final-price",children:["FINAL PRICE:"," ",u.jsx("span",{children:me(p+f+d)})]})]})]}),u.jsx(ck,{id:"payment-element",options:S}),u.jsx("button",{disabled:s||!t||!r,id:"submit",children:u.jsx("span",{id:"button-text",children:s?u.jsx("div",{className:"spinner",id:"spinner"}):"Pay now"})}),i&&u.jsx("div",{id:"payment-message",children:i})]})})},fk=W.section`
  .backgroundOpacity {
    opacity: 0.1;
  }

  .color {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }

  .grand-total-container {
    .shipping-fee {
      font-size: 12px;
      color: var(--secondy-chocolate);
    }
  }
  .grand-total-container {
    .final-price {
      color: gray;
      span {
        color: var(--secondy-chocolate);
      }
    }
  }

  .img-total {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }

  .product-total-details {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
    .product-total-name {
      font-size: 12px;
      color: var(--secondy-chocolate);
    }
    .product-total-price-qty {
      font-size: 10px;
      color: var(--actual-black);
      span {
        color: var(--secondy-chocolate);
      }
    }
    p {
      margin-bottom: 5px;
    }
  }

  .semi-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .form-container {
    padding: 40px 40px 0 40px;
  }

  .card-element-container {
    padding: 0 10px 40px 10px;
  }

  form {
    width: 90vw;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
  }
  input {
    border-radius: 6px;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  .result-message {
    line-height: 22px;
    font-size: 16px;
  }
  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }
  .hidden {
    display: none;
  }
  #card-error {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
  }
  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  #payment-request-button {
    margin-bottom: 32px;
  }
  /* Buttons and links */
  button {
    background: var(--primary-chocolate);
    font-family: Arial, sans-serif;
    color: var(--actual-white);
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }
  button:hover {
    filter: contrast(115%);
  }
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }
  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .spinner:before,
  .spinner:after {
    position: absolute;
    content: '';
  }
  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: var(--secondy-chocolate);
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }
  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: var(--secondy-chocolate);
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 600px) {
    form {
      width: 90vw;
    }
  }

  input {
    width: 100%;
    padding: 19px 0 19px 24px;
    border-radius: 8px;
    border: 1px solid #cfcfcf;
    background: #fff;
    color: #000;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
    opacity: 0.4;
    margin-bottom: 24px;
  }
  label {
    color: #000;
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.214px;
    margin-bottom: 9px;
  }

  h3 {
    color: #d87d4a;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 192.308% */
    letter-spacing: 0.929px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .grand-total-container {
    /* height: 92px; */
    flex-shrink: 0;
    border-radius: 8px;
    h4 {
      color: var(--actual-black);
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 166.667% */
      opacity: 0.5;
    }
    p {
      color: var(--actual-black);
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }
  }
  .success-container {
    padding: 50px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid var(--actual-black);
    position: fixed;
    z-index: 1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .thank-message {
      color: #000;
      font-family: Manrope;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px; /* 116.667% */
      letter-spacing: 0.857px;
      text-transform: uppercase;
    }

    .sucessfull-grand-total {
      background: var(--primary-chocolate);
      padding: 20px;
      width: 100%;
      border-radius: 8px;
      .grand-total {
        color: var(--primary-blackish);
        font-family: Manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px; /* 166.667% */
        opacity: 0.5;
      }
      .actual-total {
        color: var(--primary-blackish);
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
      }
    }
  }

  @media (min-width: 768px) {
    .grid-layout-container,
    .grand-total-product-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 18px;
    }
    .form-address-container {
      grid-column: span 2;
    }
  }
  .disabled {
    opacity: 0.4;
    background: #000;
  }
`;var pk={};const hk=W8(pk.REACT_APP_STRIPE_PUBLIC_KEY),mk=()=>{const e=Te(),{cart:t,tax:r,shipping_fee:n}=K(d=>d.cart),{clientSecret:i,order:o,orderLoading:s,orderError:a}=K(d=>d.order);b.useEffect(()=>{e(va({items:t,tax:r,shippingFee:n}))},[]);const c={clientSecret:i,appearance:{theme:"stripe"}};return s?u.jsx(Hn,{}):a?u.jsx(Bn,{}):u.jsx(gk,{className:"section",children:u.jsx("div",{className:"App",children:i&&u.jsx(uv,{options:c,stripe:hk,children:u.jsx(dk,{order:o})})})})},gk=W.section`
  form {
    width: 80vw;
    min-width: 500px;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
  }

  #payment-message {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    text-align: center;
  }

  #payment-element {
    margin-bottom: 24px;
  }

  /* Buttons and links */
  button {
    background: var(--primary-chocolate);
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }

  button:hover {
    filter: contrast(115%);
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }

  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner:before,
  .spinner:after {
    position: absolute;
    content: '';
  }

  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }

  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
      min-width: initial;
    }
  }
`,yk="/assets/image-removebg-preview-38-DN96WvC0.png",vk=({products:e})=>u.jsx(xk,{className:"section-center",children:u.jsxs("div",{className:"homepage-product",children:[u.jsx("div",{className:"oval-container",children:u.jsx("div",{className:"oval-shape-one",children:u.jsx("div",{className:"oval-shape-two",children:u.jsx("div",{className:"oval-shape-three",children:u.jsx("img",{src:yk,alt:"speakers"})})})})}),u.jsxs("div",{className:"project-container",children:[u.jsxs("h2",{children:["ZX9 ",u.jsx("span",{className:"title-span",children:"SPEAKER"})]}),e.filter(t=>t.name==="ZX9 SPEAKER").map(t=>u.jsxs(u.Fragment,{children:[u.jsx("p",{children:t.description}),u.jsx(ie,{className:"btn third-btn",to:`products/${t._id}`,children:"see product"},t.name)]}))]})]})}),xk=W.section`
  height: 540px;
  border-radius: 8px;
  background: var(--primary-chocolate);
  text-align: center;
  color: var(--actual-white);
  padding-top: 3.4375rem;
  margin-bottom: 3.75rem;

  .homepage-product {
    margin-top: -2.5rem;
  }
  .oval-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .oval-shape-one,
  .oval-shape-two,
  .oval-shape-three {
    display: flex;
    border-radius: 50%;
  }

  .oval-shape-one {
    width: 600px;
    height: 300px;
    margin-top: -3.75rem;
    border-bottom: 1px solid var(--actual-white);
  }

  .oval-shape-two {
    width: 200px;
    height: 200px;
    margin: auto;
    border: 1px solid var(--actual-white);
  }

  .oval-shape-three {
    justify-content: center;
    width: 150px;
    height: 150px;
    margin: auto;
    border: 1px solid var(--actual-white);
  }

  .oval-shape-one {
    img {
      width: 100%;
      align-self: center;
    }
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 40px; /* 111.111% */
    letter-spacing: 1.286px;
    text-transform: uppercase;
    margin-top: -3.125rem;
    margin-bottom: 1.5rem;
  }
  .title-span {
    display: block;
  }

  p {
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
    opacity: 0.75;
    max-width: 280px;

    margin: 0 auto;
    margin-bottom: 1.5625rem;
  }
  .btn-quarterly {
    background: #000;
  }
  @media (min-width: 760px) {
    .oval-shape-one {
      border-left: 1px solid var(--actual-white);
      border-right: 1px solid var(--actual-white);
      margin-top: -3.125rem;
    }
  }
  @media (min-width: 1020px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    text-align: left;

    h2 {
      color: #fff;
      font-family: Manrope;
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 58px; /* 103.571% */
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-top: 0;
    }

    p {
      text-align: left;
      margin-left: -3px;
    }

    .homepage-product {
      display: flex;
      margin-top: 0;
    }
    .oval-shape-one {
      img {
        width: 410.234px;
        height: 493px;
        flex-shrink: 0;
      }
    }
    .oval-shape-one {
      width: 944px;
      height: 944px;
      flex-shrink: 0;
      border-bottom: none;
      border-left: none;
      border-top: none;
      border-right: none;
      border-radius: 944px;
    }

    .oval-shape-three {
      width: 472px;
      height: 472px;
      flex-shrink: 0;
      border-bottom: none;
      border-radius: 472px;
    }

    .oval-shape-two {
      width: 542px;
      height: 542px;
      flex-shrink: 0;
      border-bottom: none;
    }

    .oval-container {
      margin-top: -10.625rem;
      margin-left: -9.375rem;
    }
    .project-container {
      margin-left: -11.25rem;
      margin-top: 3.125rem;
    }
  }

  @media (min-width: 1220px) {
    h2 {
      font-size: 3.125rem;
    }
    p {
      width: 450px;
    }
    .project-container {
      margin-left: -6.25rem;
    }
  }
`,wk=({products:e})=>u.jsx(Sk,{className:"section-center",children:u.jsx("div",{className:"special-product-one",children:e.filter(t=>t.name==="ZX7 SPEAKER").map(t=>u.jsxs("div",{className:"special-product-one-container",children:[u.jsx("h2",{children:t.name}),u.jsx(ie,{class:"btn secondary-btn",to:`products/${t._id}`,children:"see product"},t.name)]}))})}),Sk=W.section`
  margin-bottom: 3.75rem;
  .special-product-one {
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 90% center;
    height: 367px;
    margin-top: 1.5625rem;
    padding-left: 1.25rem;
  }

  h2 {
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
  .btn-secondary {
    color: #000000;
    border: 1px solid #000;
    margin-top: 1.5rem;
  }
  .special-product-one-container {
    margin-left: 2.1875rem;
  }
  @media (min-width: 768px) {
    .special-product-one-container {
      margin-left: 4rem;
    }
  }
  @media (min-width: 1020px) {
    .special-product-one-container {
      margin-left: 6.25rem;
    }
  }
`,_k=({products:e})=>u.jsx(kk,{className:"section-center",children:u.jsxs("div",{class:"homepage-product",children:[u.jsx("div",{className:"special-product-two"}),u.jsx("div",{class:"homepage-product-container",children:e.filter(t=>t.name==="YX1 WIRELESS EARPHONES").map(t=>u.jsxs("div",{class:"homepage-product-info",children:[u.jsx("h2",{children:"YX1 EARPHONES"}),u.jsx(ie,{class:"btn secondary-btn",to:`products/${t._id}`,children:"see product"})]},t.name))})]})}),kk=W.section`
  .homepage-product {
    display: grid;
    margin-top: 1.5rem;
    margin-bottom: 3.125rem;
  }

  img {
    width: 100%;
    height: 200px;
  }

  .homepage-product-container {
    text-align: left;
    width: 100%;
    height: 200px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #f1f1f1;
    margin-top: 1.25rem;
    padding-top: 2.5625rem;
    padding-left: 1.25rem;
  }
  @media (min-width: 768px) {
    .homepage-product {
      grid-template-columns: 1fr 1fr;
    }
    .homepage-product-container {
      margin-top: 0;
    }
    .homepage-product-info {
      margin-left: 2.5625rem;
    }
  }
  @media (min-width: 1020px) {
    .homepage-product-info {
      margin-left: 3.4375rem;
    }
  }
`,Ck=()=>{const{products:e}=K(t=>t.products);return u.jsxs(u.Fragment,{children:[u.jsx(vk,{products:e}),u.jsx(wk,{products:e}),u.jsx(_k,{products:e})]})},dv=()=>u.jsx(Ek,{className:"section section-center",children:u.jsxs("div",{className:"audio-headset-product",children:[u.jsx("div",{className:"special-product-three"}),u.jsxs("div",{className:"project-container",children:[u.jsxs("h2",{children:["Bringing you the"," ",u.jsxs("span",{className:"span-line",children:[" ",u.jsx("span",{className:"span-color",children:"best"})," Gadget"]})]}),u.jsx("p",{children:"Located at the heart of Ottawa, Jocestech is the premier store for high end gadgets. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Jocestech the best place to buy your portable gadget."})]})]})}),Ek=W.section`
  text-align: center;
  h2 {
    margin: 25px 0;
    color: #000;
    font-size: 28px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
  }

  .span-color {
    color: #d87d4a;
    font-size: 28px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
  }

  p {
    color: #000;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
    text-transform: none;
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    .span-line {
      display: block;
    }
  }

  @media (min-width: 1020px) {
    text-align: left;
    .span-color,
    h2 {
      font-size: 40px;

      line-height: 44px; /* 110% */
      letter-spacing: 1.429px;
      text-transform: uppercase;
    }
    .span-line {
      display: inline-block;
    }
    .audio-headset-product {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 100px;
      .project-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        order: -1;
        height: 400px;
      }
    }
  }
`;//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var fv;function R(){return fv.apply(null,arguments)}function jk(e){fv=e}function Xt(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function zn(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function J(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function tp(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(J(e,t))return!1;return!0}function at(e){return e===void 0}function Tr(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function hs(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function pv(e,t){var r=[],n,i=e.length;for(n=0;n<i;++n)r.push(t(e[n],n));return r}function qr(e,t){for(var r in t)J(t,r)&&(e[r]=t[r]);return J(t,"toString")&&(e.toString=t.toString),J(t,"valueOf")&&(e.valueOf=t.valueOf),e}function fr(e,t,r,n){return zv(e,t,r,n,!0).utc()}function bk(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function B(e){return e._pf==null&&(e._pf=bk()),e._pf}var Rd;Array.prototype.some?Rd=Array.prototype.some:Rd=function(e){var t=Object(this),r=t.length>>>0,n;for(n=0;n<r;n++)if(n in t&&e.call(this,t[n],n,t))return!0;return!1};function rp(e){var t=null,r=!1,n=e._d&&!isNaN(e._d.getTime());if(n&&(t=B(e),r=Rd.call(t.parsedDateParts,function(i){return i!=null}),n=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r),e._strict&&(n=n&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=n;else return n;return e._isValid}function iu(e){var t=fr(NaN);return e!=null?qr(B(t),e):B(t).userInvalidated=!0,t}var Fm=R.momentProperties=[],sc=!1;function np(e,t){var r,n,i,o=Fm.length;if(at(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),at(t._i)||(e._i=t._i),at(t._f)||(e._f=t._f),at(t._l)||(e._l=t._l),at(t._strict)||(e._strict=t._strict),at(t._tzm)||(e._tzm=t._tzm),at(t._isUTC)||(e._isUTC=t._isUTC),at(t._offset)||(e._offset=t._offset),at(t._pf)||(e._pf=B(t)),at(t._locale)||(e._locale=t._locale),o>0)for(r=0;r<o;r++)n=Fm[r],i=t[n],at(i)||(e[n]=i);return e}function ms(e){np(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),sc===!1&&(sc=!0,R.updateOffset(this),sc=!1)}function er(e){return e instanceof ms||e!=null&&e._isAMomentObject!=null}function hv(e){R.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function Ft(e,t){var r=!0;return qr(function(){if(R.deprecationHandler!=null&&R.deprecationHandler(null,e),r){var n=[],i,o,s,a=arguments.length;for(o=0;o<a;o++){if(i="",typeof arguments[o]=="object"){i+=`
[`+o+"] ";for(s in arguments[0])J(arguments[0],s)&&(i+=s+": "+arguments[0][s]+", ");i=i.slice(0,-2)}else i=arguments[o];n.push(i)}hv(e+`
Arguments: `+Array.prototype.slice.call(n).join("")+`
`+new Error().stack),r=!1}return t.apply(this,arguments)},t)}var $m={};function mv(e,t){R.deprecationHandler!=null&&R.deprecationHandler(e,t),$m[e]||(hv(t),$m[e]=!0)}R.suppressDeprecationWarnings=!1;R.deprecationHandler=null;function pr(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Nk(e){var t,r;for(r in e)J(e,r)&&(t=e[r],pr(t)?this[r]=t:this["_"+r]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Td(e,t){var r=qr({},e),n;for(n in t)J(t,n)&&(zn(e[n])&&zn(t[n])?(r[n]={},qr(r[n],e[n]),qr(r[n],t[n])):t[n]!=null?r[n]=t[n]:delete r[n]);for(n in e)J(e,n)&&!J(t,n)&&zn(e[n])&&(r[n]=qr({},r[n]));return r}function ip(e){e!=null&&this.set(e)}var Md;Object.keys?Md=Object.keys:Md=function(e){var t,r=[];for(t in e)J(e,t)&&r.push(t);return r};var Pk={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Ok(e,t,r){var n=this._calendar[e]||this._calendar.sameElse;return pr(n)?n.call(t,r):n}function dr(e,t,r){var n=""+Math.abs(e),i=t-n.length,o=e>=0;return(o?r?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+n}var op=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Hs=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ac={},Si={};function I(e,t,r,n){var i=n;typeof n=="string"&&(i=function(){return this[n]()}),e&&(Si[e]=i),t&&(Si[t[0]]=function(){return dr(i.apply(this,arguments),t[1],t[2])}),r&&(Si[r]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function Rk(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Tk(e){var t=e.match(op),r,n;for(r=0,n=t.length;r<n;r++)Si[t[r]]?t[r]=Si[t[r]]:t[r]=Rk(t[r]);return function(i){var o="",s;for(s=0;s<n;s++)o+=pr(t[s])?t[s].call(i,e):t[s];return o}}function Na(e,t){return e.isValid()?(t=gv(t,e.localeData()),ac[t]=ac[t]||Tk(t),ac[t](e)):e.localeData().invalidDate()}function gv(e,t){var r=5;function n(i){return t.longDateFormat(i)||i}for(Hs.lastIndex=0;r>=0&&Hs.test(e);)e=e.replace(Hs,n),Hs.lastIndex=0,r-=1;return e}var Mk={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Dk(e){var t=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return t||!r?t:(this._longDateFormat[e]=r.match(op).map(function(n){return n==="MMMM"||n==="MM"||n==="DD"||n==="dddd"?n.slice(1):n}).join(""),this._longDateFormat[e])}var Lk="Invalid date";function zk(){return this._invalidDate}var Ak="%d",Ik=/\d{1,2}/;function Fk(e){return this._ordinal.replace("%d",e)}var $k={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Uk(e,t,r,n){var i=this._relativeTime[r];return pr(i)?i(e,t,r,n):i.replace(/%d/i,e)}function Wk(e,t){var r=this._relativeTime[e>0?"future":"past"];return pr(r)?r(t):r.replace(/%s/i,t)}var Um={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function $t(e){return typeof e=="string"?Um[e]||Um[e.toLowerCase()]:void 0}function sp(e){var t={},r,n;for(n in e)J(e,n)&&(r=$t(n),r&&(t[r]=e[n]));return t}var Yk={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Bk(e){var t=[],r;for(r in e)J(e,r)&&t.push({unit:r,priority:Yk[r]});return t.sort(function(n,i){return n.priority-i.priority}),t}var yv=/\d/,Nt=/\d\d/,vv=/\d{3}/,ap=/\d{4}/,ou=/[+-]?\d{6}/,fe=/\d\d?/,xv=/\d\d\d\d?/,wv=/\d\d\d\d\d\d?/,su=/\d{1,3}/,lp=/\d{1,4}/,au=/[+-]?\d{1,6}/,Hi=/\d+/,lu=/[+-]?\d+/,Hk=/Z|[+-]\d\d:?\d\d/gi,uu=/Z|[+-]\d\d(?::?\d\d)?/gi,Vk=/[+-]?\d+(\.\d{1,3})?/,gs=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Vi=/^[1-9]\d?/,up=/^([1-9]\d|\d)/,yl;yl={};function D(e,t,r){yl[e]=pr(t)?t:function(n,i){return n&&r?r:t}}function Gk(e,t){return J(yl,e)?yl[e](t._strict,t._locale):new RegExp(qk(e))}function qk(e){return Er(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,r,n,i,o){return r||n||i||o}))}function Er(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Tt(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function q(e){var t=+e,r=0;return t!==0&&isFinite(t)&&(r=Tt(t)),r}var Dd={};function ne(e,t){var r,n=t,i;for(typeof e=="string"&&(e=[e]),Tr(t)&&(n=function(o,s){s[t]=q(o)}),i=e.length,r=0;r<i;r++)Dd[e[r]]=n}function ys(e,t){ne(e,function(r,n,i,o){i._w=i._w||{},t(r,i._w,i,o)})}function Kk(e,t,r){t!=null&&J(Dd,e)&&Dd[e](t,r._a,r,e)}function cu(e){return e%4===0&&e%100!==0||e%400===0}var Ze=0,Sr=1,lr=2,ze=3,Gt=4,_r=5,Pn=6,Qk=7,Zk=8;I("Y",0,0,function(){var e=this.year();return e<=9999?dr(e,4):"+"+e});I(0,["YY",2],0,function(){return this.year()%100});I(0,["YYYY",4],0,"year");I(0,["YYYYY",5],0,"year");I(0,["YYYYYY",6,!0],0,"year");D("Y",lu);D("YY",fe,Nt);D("YYYY",lp,ap);D("YYYYY",au,ou);D("YYYYYY",au,ou);ne(["YYYYY","YYYYYY"],Ze);ne("YYYY",function(e,t){t[Ze]=e.length===2?R.parseTwoDigitYear(e):q(e)});ne("YY",function(e,t){t[Ze]=R.parseTwoDigitYear(e)});ne("Y",function(e,t){t[Ze]=parseInt(e,10)});function jo(e){return cu(e)?366:365}R.parseTwoDigitYear=function(e){return q(e)+(q(e)>68?1900:2e3)};var Sv=Gi("FullYear",!0);function Jk(){return cu(this.year())}function Gi(e,t){return function(r){return r!=null?(_v(this,e,r),R.updateOffset(this,t),this):Jo(this,e)}}function Jo(e,t){if(!e.isValid())return NaN;var r=e._d,n=e._isUTC;switch(t){case"Milliseconds":return n?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return n?r.getUTCSeconds():r.getSeconds();case"Minutes":return n?r.getUTCMinutes():r.getMinutes();case"Hours":return n?r.getUTCHours():r.getHours();case"Date":return n?r.getUTCDate():r.getDate();case"Day":return n?r.getUTCDay():r.getDay();case"Month":return n?r.getUTCMonth():r.getMonth();case"FullYear":return n?r.getUTCFullYear():r.getFullYear();default:return NaN}}function _v(e,t,r){var n,i,o,s,a;if(!(!e.isValid()||isNaN(r))){switch(n=e._d,i=e._isUTC,t){case"Milliseconds":return void(i?n.setUTCMilliseconds(r):n.setMilliseconds(r));case"Seconds":return void(i?n.setUTCSeconds(r):n.setSeconds(r));case"Minutes":return void(i?n.setUTCMinutes(r):n.setMinutes(r));case"Hours":return void(i?n.setUTCHours(r):n.setHours(r));case"Date":return void(i?n.setUTCDate(r):n.setDate(r));case"FullYear":break;default:return}o=r,s=e.month(),a=e.date(),a=a===29&&s===1&&!cu(o)?28:a,i?n.setUTCFullYear(o,s,a):n.setFullYear(o,s,a)}}function Xk(e){return e=$t(e),pr(this[e])?this[e]():this}function eC(e,t){if(typeof e=="object"){e=sp(e);var r=Bk(e),n,i=r.length;for(n=0;n<i;n++)this[r[n].unit](e[r[n].unit])}else if(e=$t(e),pr(this[e]))return this[e](t);return this}function tC(e,t){return(e%t+t)%t}var Ce;Array.prototype.indexOf?Ce=Array.prototype.indexOf:Ce=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function cp(e,t){if(isNaN(e)||isNaN(t))return NaN;var r=tC(t,12);return e+=(t-r)/12,r===1?cu(e)?29:28:31-r%7%2}I("M",["MM",2],"Mo",function(){return this.month()+1});I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});I("MMMM",0,0,function(e){return this.localeData().months(this,e)});D("M",fe,Vi);D("MM",fe,Nt);D("MMM",function(e,t){return t.monthsShortRegex(e)});D("MMMM",function(e,t){return t.monthsRegex(e)});ne(["M","MM"],function(e,t){t[Sr]=q(e)-1});ne(["MMM","MMMM"],function(e,t,r,n){var i=r._locale.monthsParse(e,n,r._strict);i!=null?t[Sr]=i:B(r).invalidMonth=e});var rC="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),kv="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Cv=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,nC=gs,iC=gs;function oC(e,t){return e?Xt(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Cv).test(t)?"format":"standalone"][e.month()]:Xt(this._months)?this._months:this._months.standalone}function sC(e,t){return e?Xt(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Cv.test(t)?"format":"standalone"][e.month()]:Xt(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function aC(e,t,r){var n,i,o,s=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],n=0;n<12;++n)o=fr([2e3,n]),this._shortMonthsParse[n]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(o,"").toLocaleLowerCase();return r?t==="MMM"?(i=Ce.call(this._shortMonthsParse,s),i!==-1?i:null):(i=Ce.call(this._longMonthsParse,s),i!==-1?i:null):t==="MMM"?(i=Ce.call(this._shortMonthsParse,s),i!==-1?i:(i=Ce.call(this._longMonthsParse,s),i!==-1?i:null)):(i=Ce.call(this._longMonthsParse,s),i!==-1?i:(i=Ce.call(this._shortMonthsParse,s),i!==-1?i:null))}function lC(e,t,r){var n,i,o;if(this._monthsParseExact)return aC.call(this,e,t,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;n<12;n++){if(i=fr([2e3,n]),r&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!r&&!this._monthsParse[n]&&(o="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[n]=new RegExp(o.replace(".",""),"i")),r&&t==="MMMM"&&this._longMonthsParse[n].test(e))return n;if(r&&t==="MMM"&&this._shortMonthsParse[n].test(e))return n;if(!r&&this._monthsParse[n].test(e))return n}}function Ev(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=q(t);else if(t=e.localeData().monthsParse(t),!Tr(t))return e}var r=t,n=e.date();return n=n<29?n:Math.min(n,cp(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,n):e._d.setMonth(r,n),e}function jv(e){return e!=null?(Ev(this,e),R.updateOffset(this,!0),this):Jo(this,"Month")}function uC(){return cp(this.year(),this.month())}function cC(e){return this._monthsParseExact?(J(this,"_monthsRegex")||bv.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(J(this,"_monthsShortRegex")||(this._monthsShortRegex=nC),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function dC(e){return this._monthsParseExact?(J(this,"_monthsRegex")||bv.call(this),e?this._monthsStrictRegex:this._monthsRegex):(J(this,"_monthsRegex")||(this._monthsRegex=iC),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function bv(){function e(l,c){return c.length-l.length}var t=[],r=[],n=[],i,o,s,a;for(i=0;i<12;i++)o=fr([2e3,i]),s=Er(this.monthsShort(o,"")),a=Er(this.months(o,"")),t.push(s),r.push(a),n.push(a),n.push(s);t.sort(e),r.sort(e),n.sort(e),this._monthsRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function fC(e,t,r,n,i,o,s){var a;return e<100&&e>=0?(a=new Date(e+400,t,r,n,i,o,s),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,r,n,i,o,s),a}function Xo(e){var t,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,t=new Date(Date.UTC.apply(null,r)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function vl(e,t,r){var n=7+t-r,i=(7+Xo(e,0,n).getUTCDay()-t)%7;return-i+n-1}function Nv(e,t,r,n,i){var o=(7+r-n)%7,s=vl(e,n,i),a=1+7*(t-1)+o+s,l,c;return a<=0?(l=e-1,c=jo(l)+a):a>jo(e)?(l=e+1,c=a-jo(e)):(l=e,c=a),{year:l,dayOfYear:c}}function es(e,t,r){var n=vl(e.year(),t,r),i=Math.floor((e.dayOfYear()-n-1)/7)+1,o,s;return i<1?(s=e.year()-1,o=i+jr(s,t,r)):i>jr(e.year(),t,r)?(o=i-jr(e.year(),t,r),s=e.year()+1):(s=e.year(),o=i),{week:o,year:s}}function jr(e,t,r){var n=vl(e,t,r),i=vl(e+1,t,r);return(jo(e)-n+i)/7}I("w",["ww",2],"wo","week");I("W",["WW",2],"Wo","isoWeek");D("w",fe,Vi);D("ww",fe,Nt);D("W",fe,Vi);D("WW",fe,Nt);ys(["w","ww","W","WW"],function(e,t,r,n){t[n.substr(0,1)]=q(e)});function pC(e){return es(e,this._week.dow,this._week.doy).week}var hC={dow:0,doy:6};function mC(){return this._week.dow}function gC(){return this._week.doy}function yC(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function vC(e){var t=es(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}I("d",0,"do","day");I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});I("e",0,0,"weekday");I("E",0,0,"isoWeekday");D("d",fe);D("e",fe);D("E",fe);D("dd",function(e,t){return t.weekdaysMinRegex(e)});D("ddd",function(e,t){return t.weekdaysShortRegex(e)});D("dddd",function(e,t){return t.weekdaysRegex(e)});ys(["dd","ddd","dddd"],function(e,t,r,n){var i=r._locale.weekdaysParse(e,n,r._strict);i!=null?t.d=i:B(r).invalidWeekday=e});ys(["d","e","E"],function(e,t,r,n){t[n]=q(e)});function xC(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function wC(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function dp(e,t){return e.slice(t,7).concat(e.slice(0,t))}var SC="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Pv="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),_C="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),kC=gs,CC=gs,EC=gs;function jC(e,t){var r=Xt(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?dp(r,this._week.dow):e?r[e.day()]:r}function bC(e){return e===!0?dp(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function NC(e){return e===!0?dp(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function PC(e,t,r){var n,i,o,s=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],n=0;n<7;++n)o=fr([2e3,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(o,"").toLocaleLowerCase();return r?t==="dddd"?(i=Ce.call(this._weekdaysParse,s),i!==-1?i:null):t==="ddd"?(i=Ce.call(this._shortWeekdaysParse,s),i!==-1?i:null):(i=Ce.call(this._minWeekdaysParse,s),i!==-1?i:null):t==="dddd"?(i=Ce.call(this._weekdaysParse,s),i!==-1||(i=Ce.call(this._shortWeekdaysParse,s),i!==-1)?i:(i=Ce.call(this._minWeekdaysParse,s),i!==-1?i:null)):t==="ddd"?(i=Ce.call(this._shortWeekdaysParse,s),i!==-1||(i=Ce.call(this._weekdaysParse,s),i!==-1)?i:(i=Ce.call(this._minWeekdaysParse,s),i!==-1?i:null)):(i=Ce.call(this._minWeekdaysParse,s),i!==-1||(i=Ce.call(this._weekdaysParse,s),i!==-1)?i:(i=Ce.call(this._shortWeekdaysParse,s),i!==-1?i:null))}function OC(e,t,r){var n,i,o;if(this._weekdaysParseExact)return PC.call(this,e,t,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),n=0;n<7;n++){if(i=fr([2e3,1]).day(n),r&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[n]||(o="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[n]=new RegExp(o.replace(".",""),"i")),r&&t==="dddd"&&this._fullWeekdaysParse[n].test(e))return n;if(r&&t==="ddd"&&this._shortWeekdaysParse[n].test(e))return n;if(r&&t==="dd"&&this._minWeekdaysParse[n].test(e))return n;if(!r&&this._weekdaysParse[n].test(e))return n}}function RC(e){if(!this.isValid())return e!=null?this:NaN;var t=Jo(this,"Day");return e!=null?(e=xC(e,this.localeData()),this.add(e-t,"d")):t}function TC(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function MC(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=wC(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function DC(e){return this._weekdaysParseExact?(J(this,"_weekdaysRegex")||fp.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(J(this,"_weekdaysRegex")||(this._weekdaysRegex=kC),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function LC(e){return this._weekdaysParseExact?(J(this,"_weekdaysRegex")||fp.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(J(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=CC),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function zC(e){return this._weekdaysParseExact?(J(this,"_weekdaysRegex")||fp.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(J(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=EC),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function fp(){function e(d,f){return f.length-d.length}var t=[],r=[],n=[],i=[],o,s,a,l,c;for(o=0;o<7;o++)s=fr([2e3,1]).day(o),a=Er(this.weekdaysMin(s,"")),l=Er(this.weekdaysShort(s,"")),c=Er(this.weekdays(s,"")),t.push(a),r.push(l),n.push(c),i.push(a),i.push(l),i.push(c);t.sort(e),r.sort(e),n.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function pp(){return this.hours()%12||12}function AC(){return this.hours()||24}I("H",["HH",2],0,"hour");I("h",["hh",2],0,pp);I("k",["kk",2],0,AC);I("hmm",0,0,function(){return""+pp.apply(this)+dr(this.minutes(),2)});I("hmmss",0,0,function(){return""+pp.apply(this)+dr(this.minutes(),2)+dr(this.seconds(),2)});I("Hmm",0,0,function(){return""+this.hours()+dr(this.minutes(),2)});I("Hmmss",0,0,function(){return""+this.hours()+dr(this.minutes(),2)+dr(this.seconds(),2)});function Ov(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}Ov("a",!0);Ov("A",!1);function Rv(e,t){return t._meridiemParse}D("a",Rv);D("A",Rv);D("H",fe,up);D("h",fe,Vi);D("k",fe,Vi);D("HH",fe,Nt);D("hh",fe,Nt);D("kk",fe,Nt);D("hmm",xv);D("hmmss",wv);D("Hmm",xv);D("Hmmss",wv);ne(["H","HH"],ze);ne(["k","kk"],function(e,t,r){var n=q(e);t[ze]=n===24?0:n});ne(["a","A"],function(e,t,r){r._isPm=r._locale.isPM(e),r._meridiem=e});ne(["h","hh"],function(e,t,r){t[ze]=q(e),B(r).bigHour=!0});ne("hmm",function(e,t,r){var n=e.length-2;t[ze]=q(e.substr(0,n)),t[Gt]=q(e.substr(n)),B(r).bigHour=!0});ne("hmmss",function(e,t,r){var n=e.length-4,i=e.length-2;t[ze]=q(e.substr(0,n)),t[Gt]=q(e.substr(n,2)),t[_r]=q(e.substr(i)),B(r).bigHour=!0});ne("Hmm",function(e,t,r){var n=e.length-2;t[ze]=q(e.substr(0,n)),t[Gt]=q(e.substr(n))});ne("Hmmss",function(e,t,r){var n=e.length-4,i=e.length-2;t[ze]=q(e.substr(0,n)),t[Gt]=q(e.substr(n,2)),t[_r]=q(e.substr(i))});function IC(e){return(e+"").toLowerCase().charAt(0)==="p"}var FC=/[ap]\.?m?\.?/i,$C=Gi("Hours",!0);function UC(e,t,r){return e>11?r?"pm":"PM":r?"am":"AM"}var Tv={calendar:Pk,longDateFormat:Mk,invalidDate:Lk,ordinal:Ak,dayOfMonthOrdinalParse:Ik,relativeTime:$k,months:rC,monthsShort:kv,week:hC,weekdays:SC,weekdaysMin:_C,weekdaysShort:Pv,meridiemParse:FC},pe={},oo={},ts;function WC(e,t){var r,n=Math.min(e.length,t.length);for(r=0;r<n;r+=1)if(e[r]!==t[r])return r;return n}function Wm(e){return e&&e.toLowerCase().replace("_","-")}function YC(e){for(var t=0,r,n,i,o;t<e.length;){for(o=Wm(e[t]).split("-"),r=o.length,n=Wm(e[t+1]),n=n?n.split("-"):null;r>0;){if(i=du(o.slice(0,r).join("-")),i)return i;if(n&&n.length>=r&&WC(o,n)>=r-1)break;r--}t++}return ts}function BC(e){return!!(e&&e.match("^[^/\\\\]*$"))}function du(e){var t=null,r;if(pe[e]===void 0&&typeof Ra<"u"&&Ra&&Ra.exports&&BC(e))try{t=ts._abbr,r=require,r("./locale/"+e),sn(t)}catch{pe[e]=null}return pe[e]}function sn(e,t){var r;return e&&(at(t)?r=Dr(e):r=hp(e,t),r?ts=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),ts._abbr}function hp(e,t){if(t!==null){var r,n=Tv;if(t.abbr=e,pe[e]!=null)mv("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=pe[e]._config;else if(t.parentLocale!=null)if(pe[t.parentLocale]!=null)n=pe[t.parentLocale]._config;else if(r=du(t.parentLocale),r!=null)n=r._config;else return oo[t.parentLocale]||(oo[t.parentLocale]=[]),oo[t.parentLocale].push({name:e,config:t}),null;return pe[e]=new ip(Td(n,t)),oo[e]&&oo[e].forEach(function(i){hp(i.name,i.config)}),sn(e),pe[e]}else return delete pe[e],null}function HC(e,t){if(t!=null){var r,n,i=Tv;pe[e]!=null&&pe[e].parentLocale!=null?pe[e].set(Td(pe[e]._config,t)):(n=du(e),n!=null&&(i=n._config),t=Td(i,t),n==null&&(t.abbr=e),r=new ip(t),r.parentLocale=pe[e],pe[e]=r),sn(e)}else pe[e]!=null&&(pe[e].parentLocale!=null?(pe[e]=pe[e].parentLocale,e===sn()&&sn(e)):pe[e]!=null&&delete pe[e]);return pe[e]}function Dr(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return ts;if(!Xt(e)){if(t=du(e),t)return t;e=[e]}return YC(e)}function VC(){return Md(pe)}function mp(e){var t,r=e._a;return r&&B(e).overflow===-2&&(t=r[Sr]<0||r[Sr]>11?Sr:r[lr]<1||r[lr]>cp(r[Ze],r[Sr])?lr:r[ze]<0||r[ze]>24||r[ze]===24&&(r[Gt]!==0||r[_r]!==0||r[Pn]!==0)?ze:r[Gt]<0||r[Gt]>59?Gt:r[_r]<0||r[_r]>59?_r:r[Pn]<0||r[Pn]>999?Pn:-1,B(e)._overflowDayOfYear&&(t<Ze||t>lr)&&(t=lr),B(e)._overflowWeeks&&t===-1&&(t=Qk),B(e)._overflowWeekday&&t===-1&&(t=Zk),B(e).overflow=t),e}var GC=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,qC=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,KC=/Z|[+-]\d\d(?::?\d\d)?/,Vs=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],lc=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],QC=/^\/?Date\((-?\d+)/i,ZC=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,JC={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Mv(e){var t,r,n=e._i,i=GC.exec(n)||qC.exec(n),o,s,a,l,c=Vs.length,d=lc.length;if(i){for(B(e).iso=!0,t=0,r=c;t<r;t++)if(Vs[t][1].exec(i[1])){s=Vs[t][0],o=Vs[t][2]!==!1;break}if(s==null){e._isValid=!1;return}if(i[3]){for(t=0,r=d;t<r;t++)if(lc[t][1].exec(i[3])){a=(i[2]||" ")+lc[t][0];break}if(a==null){e._isValid=!1;return}}if(!o&&a!=null){e._isValid=!1;return}if(i[4])if(KC.exec(i[4]))l="Z";else{e._isValid=!1;return}e._f=s+(a||"")+(l||""),yp(e)}else e._isValid=!1}function XC(e,t,r,n,i,o){var s=[e7(e),kv.indexOf(t),parseInt(r,10),parseInt(n,10),parseInt(i,10)];return o&&s.push(parseInt(o,10)),s}function e7(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function t7(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function r7(e,t,r){if(e){var n=Pv.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(n!==i)return B(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function n7(e,t,r){if(e)return JC[e];if(t)return 0;var n=parseInt(r,10),i=n%100,o=(n-i)/100;return o*60+i}function Dv(e){var t=ZC.exec(t7(e._i)),r;if(t){if(r=XC(t[4],t[3],t[2],t[5],t[6],t[7]),!r7(t[1],r,e))return;e._a=r,e._tzm=n7(t[8],t[9],t[10]),e._d=Xo.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),B(e).rfc2822=!0}else e._isValid=!1}function i7(e){var t=QC.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Mv(e),e._isValid===!1)delete e._isValid;else return;if(Dv(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:R.createFromInputFallback(e)}R.createFromInputFallback=Ft("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function ei(e,t,r){return e??t??r}function o7(e){var t=new Date(R.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function gp(e){var t,r,n=[],i,o,s;if(!e._d){for(i=o7(e),e._w&&e._a[lr]==null&&e._a[Sr]==null&&s7(e),e._dayOfYear!=null&&(s=ei(e._a[Ze],i[Ze]),(e._dayOfYear>jo(s)||e._dayOfYear===0)&&(B(e)._overflowDayOfYear=!0),r=Xo(s,0,e._dayOfYear),e._a[Sr]=r.getUTCMonth(),e._a[lr]=r.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=n[t]=i[t];for(;t<7;t++)e._a[t]=n[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[ze]===24&&e._a[Gt]===0&&e._a[_r]===0&&e._a[Pn]===0&&(e._nextDay=!0,e._a[ze]=0),e._d=(e._useUTC?Xo:fC).apply(null,n),o=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ze]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==o&&(B(e).weekdayMismatch=!0)}}function s7(e){var t,r,n,i,o,s,a,l,c;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(o=1,s=4,r=ei(t.GG,e._a[Ze],es(de(),1,4).year),n=ei(t.W,1),i=ei(t.E,1),(i<1||i>7)&&(l=!0)):(o=e._locale._week.dow,s=e._locale._week.doy,c=es(de(),o,s),r=ei(t.gg,e._a[Ze],c.year),n=ei(t.w,c.week),t.d!=null?(i=t.d,(i<0||i>6)&&(l=!0)):t.e!=null?(i=t.e+o,(t.e<0||t.e>6)&&(l=!0)):i=o),n<1||n>jr(r,o,s)?B(e)._overflowWeeks=!0:l!=null?B(e)._overflowWeekday=!0:(a=Nv(r,n,i,o,s),e._a[Ze]=a.year,e._dayOfYear=a.dayOfYear)}R.ISO_8601=function(){};R.RFC_2822=function(){};function yp(e){if(e._f===R.ISO_8601){Mv(e);return}if(e._f===R.RFC_2822){Dv(e);return}e._a=[],B(e).empty=!0;var t=""+e._i,r,n,i,o,s,a=t.length,l=0,c,d;for(i=gv(e._f,e._locale).match(op)||[],d=i.length,r=0;r<d;r++)o=i[r],n=(t.match(Gk(o,e))||[])[0],n&&(s=t.substr(0,t.indexOf(n)),s.length>0&&B(e).unusedInput.push(s),t=t.slice(t.indexOf(n)+n.length),l+=n.length),Si[o]?(n?B(e).empty=!1:B(e).unusedTokens.push(o),Kk(o,n,e)):e._strict&&!n&&B(e).unusedTokens.push(o);B(e).charsLeftOver=a-l,t.length>0&&B(e).unusedInput.push(t),e._a[ze]<=12&&B(e).bigHour===!0&&e._a[ze]>0&&(B(e).bigHour=void 0),B(e).parsedDateParts=e._a.slice(0),B(e).meridiem=e._meridiem,e._a[ze]=a7(e._locale,e._a[ze],e._meridiem),c=B(e).era,c!==null&&(e._a[Ze]=e._locale.erasConvertYear(c,e._a[Ze])),gp(e),mp(e)}function a7(e,t,r){var n;return r==null?t:e.meridiemHour!=null?e.meridiemHour(t,r):(e.isPM!=null&&(n=e.isPM(r),n&&t<12&&(t+=12),!n&&t===12&&(t=0)),t)}function l7(e){var t,r,n,i,o,s,a=!1,l=e._f.length;if(l===0){B(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<l;i++)o=0,s=!1,t=np({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],yp(t),rp(t)&&(s=!0),o+=B(t).charsLeftOver,o+=B(t).unusedTokens.length*10,B(t).score=o,a?o<n&&(n=o,r=t):(n==null||o<n||s)&&(n=o,r=t,s&&(a=!0));qr(e,r||t)}function u7(e){if(!e._d){var t=sp(e._i),r=t.day===void 0?t.date:t.day;e._a=pv([t.year,t.month,r,t.hour,t.minute,t.second,t.millisecond],function(n){return n&&parseInt(n,10)}),gp(e)}}function c7(e){var t=new ms(mp(Lv(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Lv(e){var t=e._i,r=e._f;return e._locale=e._locale||Dr(e._l),t===null||r===void 0&&t===""?iu({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),er(t)?new ms(mp(t)):(hs(t)?e._d=t:Xt(r)?l7(e):r?yp(e):d7(e),rp(e)||(e._d=null),e))}function d7(e){var t=e._i;at(t)?e._d=new Date(R.now()):hs(t)?e._d=new Date(t.valueOf()):typeof t=="string"?i7(e):Xt(t)?(e._a=pv(t.slice(0),function(r){return parseInt(r,10)}),gp(e)):zn(t)?u7(e):Tr(t)?e._d=new Date(t):R.createFromInputFallback(e)}function zv(e,t,r,n,i){var o={};return(t===!0||t===!1)&&(n=t,t=void 0),(r===!0||r===!1)&&(n=r,r=void 0),(zn(e)&&tp(e)||Xt(e)&&e.length===0)&&(e=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=i,o._l=r,o._i=e,o._f=t,o._strict=n,c7(o)}function de(e,t,r,n){return zv(e,t,r,n,!1)}var f7=Ft("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=de.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:iu()}),p7=Ft("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=de.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:iu()});function Av(e,t){var r,n;if(t.length===1&&Xt(t[0])&&(t=t[0]),!t.length)return de();for(r=t[0],n=1;n<t.length;++n)(!t[n].isValid()||t[n][e](r))&&(r=t[n]);return r}function h7(){var e=[].slice.call(arguments,0);return Av("isBefore",e)}function m7(){var e=[].slice.call(arguments,0);return Av("isAfter",e)}var g7=function(){return Date.now?Date.now():+new Date},so=["year","quarter","month","week","day","hour","minute","second","millisecond"];function y7(e){var t,r=!1,n,i=so.length;for(t in e)if(J(e,t)&&!(Ce.call(so,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(n=0;n<i;++n)if(e[so[n]]){if(r)return!1;parseFloat(e[so[n]])!==q(e[so[n]])&&(r=!0)}return!0}function v7(){return this._isValid}function x7(){return rr(NaN)}function fu(e){var t=sp(e),r=t.year||0,n=t.quarter||0,i=t.month||0,o=t.week||t.isoWeek||0,s=t.day||0,a=t.hour||0,l=t.minute||0,c=t.second||0,d=t.millisecond||0;this._isValid=y7(t),this._milliseconds=+d+c*1e3+l*6e4+a*1e3*60*60,this._days=+s+o*7,this._months=+i+n*3+r*12,this._data={},this._locale=Dr(),this._bubble()}function Pa(e){return e instanceof fu}function Ld(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function w7(e,t,r){var n=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),o=0,s;for(s=0;s<n;s++)q(e[s])!==q(t[s])&&o++;return o+i}function Iv(e,t){I(e,0,0,function(){var r=this.utcOffset(),n="+";return r<0&&(r=-r,n="-"),n+dr(~~(r/60),2)+t+dr(~~r%60,2)})}Iv("Z",":");Iv("ZZ","");D("Z",uu);D("ZZ",uu);ne(["Z","ZZ"],function(e,t,r){r._useUTC=!0,r._tzm=vp(uu,e)});var S7=/([\+\-]|\d\d)/gi;function vp(e,t){var r=(t||"").match(e),n,i,o;return r===null?null:(n=r[r.length-1]||[],i=(n+"").match(S7)||["-",0,0],o=+(i[1]*60)+q(i[2]),o===0?0:i[0]==="+"?o:-o)}function xp(e,t){var r,n;return t._isUTC?(r=t.clone(),n=(er(e)||hs(e)?e.valueOf():de(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+n),R.updateOffset(r,!1),r):de(e).local()}function zd(e){return-Math.round(e._d.getTimezoneOffset())}R.updateOffset=function(){};function _7(e,t,r){var n=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=vp(uu,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&t&&(i=zd(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),n!==e&&(!t||this._changeInProgress?Uv(this,rr(e-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,R.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?n:zd(this)}function k7(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function C7(e){return this.utcOffset(0,e)}function E7(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(zd(this),"m")),this}function j7(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=vp(Hk,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function b7(e){return this.isValid()?(e=e?de(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function N7(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function P7(){if(!at(this._isDSTShifted))return this._isDSTShifted;var e={},t;return np(e,this),e=Lv(e),e._a?(t=e._isUTC?fr(e._a):de(e._a),this._isDSTShifted=this.isValid()&&w7(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function O7(){return this.isValid()?!this._isUTC:!1}function R7(){return this.isValid()?this._isUTC:!1}function Fv(){return this.isValid()?this._isUTC&&this._offset===0:!1}var T7=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,M7=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function rr(e,t){var r=e,n=null,i,o,s;return Pa(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:Tr(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(n=T7.exec(e))?(i=n[1]==="-"?-1:1,r={y:0,d:q(n[lr])*i,h:q(n[ze])*i,m:q(n[Gt])*i,s:q(n[_r])*i,ms:q(Ld(n[Pn]*1e3))*i}):(n=M7.exec(e))?(i=n[1]==="-"?-1:1,r={y:vn(n[2],i),M:vn(n[3],i),w:vn(n[4],i),d:vn(n[5],i),h:vn(n[6],i),m:vn(n[7],i),s:vn(n[8],i)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(s=D7(de(r.from),de(r.to)),r={},r.ms=s.milliseconds,r.M=s.months),o=new fu(r),Pa(e)&&J(e,"_locale")&&(o._locale=e._locale),Pa(e)&&J(e,"_isValid")&&(o._isValid=e._isValid),o}rr.fn=fu.prototype;rr.invalid=x7;function vn(e,t){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*t}function Ym(e,t){var r={};return r.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(t)&&--r.months,r.milliseconds=+t-+e.clone().add(r.months,"M"),r}function D7(e,t){var r;return e.isValid()&&t.isValid()?(t=xp(t,e),e.isBefore(t)?r=Ym(e,t):(r=Ym(t,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function $v(e,t){return function(r,n){var i,o;return n!==null&&!isNaN(+n)&&(mv(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=r,r=n,n=o),i=rr(r,n),Uv(this,i,e),this}}function Uv(e,t,r,n){var i=t._milliseconds,o=Ld(t._days),s=Ld(t._months);e.isValid()&&(n=n??!0,s&&Ev(e,Jo(e,"Month")+s*r),o&&_v(e,"Date",Jo(e,"Date")+o*r),i&&e._d.setTime(e._d.valueOf()+i*r),n&&R.updateOffset(e,o||s))}var L7=$v(1,"add"),z7=$v(-1,"subtract");function Wv(e){return typeof e=="string"||e instanceof String}function A7(e){return er(e)||hs(e)||Wv(e)||Tr(e)||F7(e)||I7(e)||e===null||e===void 0}function I7(e){var t=zn(e)&&!tp(e),r=!1,n=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,o,s=n.length;for(i=0;i<s;i+=1)o=n[i],r=r||J(e,o);return t&&r}function F7(e){var t=Xt(e),r=!1;return t&&(r=e.filter(function(n){return!Tr(n)&&Wv(e)}).length===0),t&&r}function $7(e){var t=zn(e)&&!tp(e),r=!1,n=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,o;for(i=0;i<n.length;i+=1)o=n[i],r=r||J(e,o);return t&&r}function U7(e,t){var r=e.diff(t,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function W7(e,t){arguments.length===1&&(arguments[0]?A7(arguments[0])?(e=arguments[0],t=void 0):$7(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var r=e||de(),n=xp(r,this).startOf("day"),i=R.calendarFormat(this,n)||"sameElse",o=t&&(pr(t[i])?t[i].call(this,r):t[i]);return this.format(o||this.localeData().calendar(i,this,de(r)))}function Y7(){return new ms(this)}function B7(e,t){var r=er(e)?e:de(e);return this.isValid()&&r.isValid()?(t=$t(t)||"millisecond",t==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(t).valueOf()):!1}function H7(e,t){var r=er(e)?e:de(e);return this.isValid()&&r.isValid()?(t=$t(t)||"millisecond",t==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(t).valueOf()<r.valueOf()):!1}function V7(e,t,r,n){var i=er(e)?e:de(e),o=er(t)?t:de(t);return this.isValid()&&i.isValid()&&o.isValid()?(n=n||"()",(n[0]==="("?this.isAfter(i,r):!this.isBefore(i,r))&&(n[1]===")"?this.isBefore(o,r):!this.isAfter(o,r))):!1}function G7(e,t){var r=er(e)?e:de(e),n;return this.isValid()&&r.isValid()?(t=$t(t)||"millisecond",t==="millisecond"?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf())):!1}function q7(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function K7(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Q7(e,t,r){var n,i,o;if(!this.isValid())return NaN;if(n=xp(e,this),!n.isValid())return NaN;switch(i=(n.utcOffset()-this.utcOffset())*6e4,t=$t(t),t){case"year":o=Oa(this,n)/12;break;case"month":o=Oa(this,n);break;case"quarter":o=Oa(this,n)/3;break;case"second":o=(this-n)/1e3;break;case"minute":o=(this-n)/6e4;break;case"hour":o=(this-n)/36e5;break;case"day":o=(this-n-i)/864e5;break;case"week":o=(this-n-i)/6048e5;break;default:o=this-n}return r?o:Tt(o)}function Oa(e,t){if(e.date()<t.date())return-Oa(t,e);var r=(t.year()-e.year())*12+(t.month()-e.month()),n=e.clone().add(r,"months"),i,o;return t-n<0?(i=e.clone().add(r-1,"months"),o=(t-n)/(n-i)):(i=e.clone().add(r+1,"months"),o=(t-n)/(i-n)),-(r+o)||0}R.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";R.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Z7(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function J7(e){if(!this.isValid())return null;var t=e!==!0,r=t?this.clone().utc():this;return r.year()<0||r.year()>9999?Na(r,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):pr(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Na(r,"Z")):Na(r,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function X7(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",r,n,i,o;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),r="["+e+'("]',n=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",o=t+'[")]',this.format(r+n+i+o)}function eE(e){e||(e=this.isUtc()?R.defaultFormatUtc:R.defaultFormat);var t=Na(this,e);return this.localeData().postformat(t)}function tE(e,t){return this.isValid()&&(er(e)&&e.isValid()||de(e).isValid())?rr({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function rE(e){return this.from(de(),e)}function nE(e,t){return this.isValid()&&(er(e)&&e.isValid()||de(e).isValid())?rr({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function iE(e){return this.to(de(),e)}function Yv(e){var t;return e===void 0?this._locale._abbr:(t=Dr(e),t!=null&&(this._locale=t),this)}var Bv=Ft("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Hv(){return this._locale}var xl=1e3,_i=60*xl,wl=60*_i,Vv=(365*400+97)*24*wl;function ki(e,t){return(e%t+t)%t}function Gv(e,t,r){return e<100&&e>=0?new Date(e+400,t,r)-Vv:new Date(e,t,r).valueOf()}function qv(e,t,r){return e<100&&e>=0?Date.UTC(e+400,t,r)-Vv:Date.UTC(e,t,r)}function oE(e){var t,r;if(e=$t(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?qv:Gv,e){case"year":t=r(this.year(),0,1);break;case"quarter":t=r(this.year(),this.month()-this.month()%3,1);break;case"month":t=r(this.year(),this.month(),1);break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=r(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=ki(t+(this._isUTC?0:this.utcOffset()*_i),wl);break;case"minute":t=this._d.valueOf(),t-=ki(t,_i);break;case"second":t=this._d.valueOf(),t-=ki(t,xl);break}return this._d.setTime(t),R.updateOffset(this,!0),this}function sE(e){var t,r;if(e=$t(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?qv:Gv,e){case"year":t=r(this.year()+1,0,1)-1;break;case"quarter":t=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=r(this.year(),this.month()+1,1)-1;break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=wl-ki(t+(this._isUTC?0:this.utcOffset()*_i),wl)-1;break;case"minute":t=this._d.valueOf(),t+=_i-ki(t,_i)-1;break;case"second":t=this._d.valueOf(),t+=xl-ki(t,xl)-1;break}return this._d.setTime(t),R.updateOffset(this,!0),this}function aE(){return this._d.valueOf()-(this._offset||0)*6e4}function lE(){return Math.floor(this.valueOf()/1e3)}function uE(){return new Date(this.valueOf())}function cE(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function dE(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function fE(){return this.isValid()?this.toISOString():null}function pE(){return rp(this)}function hE(){return qr({},B(this))}function mE(){return B(this).overflow}function gE(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}I("N",0,0,"eraAbbr");I("NN",0,0,"eraAbbr");I("NNN",0,0,"eraAbbr");I("NNNN",0,0,"eraName");I("NNNNN",0,0,"eraNarrow");I("y",["y",1],"yo","eraYear");I("y",["yy",2],0,"eraYear");I("y",["yyy",3],0,"eraYear");I("y",["yyyy",4],0,"eraYear");D("N",wp);D("NN",wp);D("NNN",wp);D("NNNN",bE);D("NNNNN",NE);ne(["N","NN","NNN","NNNN","NNNNN"],function(e,t,r,n){var i=r._locale.erasParse(e,n,r._strict);i?B(r).era=i:B(r).invalidEra=e});D("y",Hi);D("yy",Hi);D("yyy",Hi);D("yyyy",Hi);D("yo",PE);ne(["y","yy","yyy","yyyy"],Ze);ne(["yo"],function(e,t,r,n){var i;r._locale._eraYearOrdinalRegex&&(i=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?t[Ze]=r._locale.eraYearOrdinalParse(e,i):t[Ze]=parseInt(e,10)});function yE(e,t){var r,n,i,o=this._eras||Dr("en")._eras;for(r=0,n=o.length;r<n;++r){switch(typeof o[r].since){case"string":i=R(o[r].since).startOf("day"),o[r].since=i.valueOf();break}switch(typeof o[r].until){case"undefined":o[r].until=1/0;break;case"string":i=R(o[r].until).startOf("day").valueOf(),o[r].until=i.valueOf();break}}return o}function vE(e,t,r){var n,i,o=this.eras(),s,a,l;for(e=e.toUpperCase(),n=0,i=o.length;n<i;++n)if(s=o[n].name.toUpperCase(),a=o[n].abbr.toUpperCase(),l=o[n].narrow.toUpperCase(),r)switch(t){case"N":case"NN":case"NNN":if(a===e)return o[n];break;case"NNNN":if(s===e)return o[n];break;case"NNNNN":if(l===e)return o[n];break}else if([s,a,l].indexOf(e)>=0)return o[n]}function xE(e,t){var r=e.since<=e.until?1:-1;return t===void 0?R(e.since).year():R(e.since).year()+(t-e.offset)*r}function wE(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].name;return""}function SE(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].narrow;return""}function _E(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].abbr;return""}function kE(){var e,t,r,n,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(r=i[e].since<=i[e].until?1:-1,n=this.clone().startOf("day").valueOf(),i[e].since<=n&&n<=i[e].until||i[e].until<=n&&n<=i[e].since)return(this.year()-R(i[e].since).year())*r+i[e].offset;return this.year()}function CE(e){return J(this,"_erasNameRegex")||Sp.call(this),e?this._erasNameRegex:this._erasRegex}function EE(e){return J(this,"_erasAbbrRegex")||Sp.call(this),e?this._erasAbbrRegex:this._erasRegex}function jE(e){return J(this,"_erasNarrowRegex")||Sp.call(this),e?this._erasNarrowRegex:this._erasRegex}function wp(e,t){return t.erasAbbrRegex(e)}function bE(e,t){return t.erasNameRegex(e)}function NE(e,t){return t.erasNarrowRegex(e)}function PE(e,t){return t._eraYearOrdinalRegex||Hi}function Sp(){var e=[],t=[],r=[],n=[],i,o,s,a,l,c=this.eras();for(i=0,o=c.length;i<o;++i)s=Er(c[i].name),a=Er(c[i].abbr),l=Er(c[i].narrow),t.push(s),e.push(a),r.push(l),n.push(s),n.push(a),n.push(l);this._erasRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}I(0,["gg",2],0,function(){return this.weekYear()%100});I(0,["GG",2],0,function(){return this.isoWeekYear()%100});function pu(e,t){I(0,[e,e.length],0,t)}pu("gggg","weekYear");pu("ggggg","weekYear");pu("GGGG","isoWeekYear");pu("GGGGG","isoWeekYear");D("G",lu);D("g",lu);D("GG",fe,Nt);D("gg",fe,Nt);D("GGGG",lp,ap);D("gggg",lp,ap);D("GGGGG",au,ou);D("ggggg",au,ou);ys(["gggg","ggggg","GGGG","GGGGG"],function(e,t,r,n){t[n.substr(0,2)]=q(e)});ys(["gg","GG"],function(e,t,r,n){t[n]=R.parseTwoDigitYear(e)});function OE(e){return Kv.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function RE(e){return Kv.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function TE(){return jr(this.year(),1,4)}function ME(){return jr(this.isoWeekYear(),1,4)}function DE(){var e=this.localeData()._week;return jr(this.year(),e.dow,e.doy)}function LE(){var e=this.localeData()._week;return jr(this.weekYear(),e.dow,e.doy)}function Kv(e,t,r,n,i){var o;return e==null?es(this,n,i).year:(o=jr(e,n,i),t>o&&(t=o),zE.call(this,e,t,r,n,i))}function zE(e,t,r,n,i){var o=Nv(e,t,r,n,i),s=Xo(o.year,0,o.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}I("Q",0,"Qo","quarter");D("Q",yv);ne("Q",function(e,t){t[Sr]=(q(e)-1)*3});function AE(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}I("D",["DD",2],"Do","date");D("D",fe,Vi);D("DD",fe,Nt);D("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});ne(["D","DD"],lr);ne("Do",function(e,t){t[lr]=q(e.match(fe)[0])});var Qv=Gi("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear");D("DDD",su);D("DDDD",vv);ne(["DDD","DDDD"],function(e,t,r){r._dayOfYear=q(e)});function IE(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}I("m",["mm",2],0,"minute");D("m",fe,up);D("mm",fe,Nt);ne(["m","mm"],Gt);var FE=Gi("Minutes",!1);I("s",["ss",2],0,"second");D("s",fe,up);D("ss",fe,Nt);ne(["s","ss"],_r);var $E=Gi("Seconds",!1);I("S",0,0,function(){return~~(this.millisecond()/100)});I(0,["SS",2],0,function(){return~~(this.millisecond()/10)});I(0,["SSS",3],0,"millisecond");I(0,["SSSS",4],0,function(){return this.millisecond()*10});I(0,["SSSSS",5],0,function(){return this.millisecond()*100});I(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});I(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});I(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});I(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});D("S",su,yv);D("SS",su,Nt);D("SSS",su,vv);var Kr,Zv;for(Kr="SSSS";Kr.length<=9;Kr+="S")D(Kr,Hi);function UE(e,t){t[Pn]=q(("0."+e)*1e3)}for(Kr="S";Kr.length<=9;Kr+="S")ne(Kr,UE);Zv=Gi("Milliseconds",!1);I("z",0,0,"zoneAbbr");I("zz",0,0,"zoneName");function WE(){return this._isUTC?"UTC":""}function YE(){return this._isUTC?"Coordinated Universal Time":""}var P=ms.prototype;P.add=L7;P.calendar=W7;P.clone=Y7;P.diff=Q7;P.endOf=sE;P.format=eE;P.from=tE;P.fromNow=rE;P.to=nE;P.toNow=iE;P.get=Xk;P.invalidAt=mE;P.isAfter=B7;P.isBefore=H7;P.isBetween=V7;P.isSame=G7;P.isSameOrAfter=q7;P.isSameOrBefore=K7;P.isValid=pE;P.lang=Bv;P.locale=Yv;P.localeData=Hv;P.max=p7;P.min=f7;P.parsingFlags=hE;P.set=eC;P.startOf=oE;P.subtract=z7;P.toArray=cE;P.toObject=dE;P.toDate=uE;P.toISOString=J7;P.inspect=X7;typeof Symbol<"u"&&Symbol.for!=null&&(P[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});P.toJSON=fE;P.toString=Z7;P.unix=lE;P.valueOf=aE;P.creationData=gE;P.eraName=wE;P.eraNarrow=SE;P.eraAbbr=_E;P.eraYear=kE;P.year=Sv;P.isLeapYear=Jk;P.weekYear=OE;P.isoWeekYear=RE;P.quarter=P.quarters=AE;P.month=jv;P.daysInMonth=uC;P.week=P.weeks=yC;P.isoWeek=P.isoWeeks=vC;P.weeksInYear=DE;P.weeksInWeekYear=LE;P.isoWeeksInYear=TE;P.isoWeeksInISOWeekYear=ME;P.date=Qv;P.day=P.days=RC;P.weekday=TC;P.isoWeekday=MC;P.dayOfYear=IE;P.hour=P.hours=$C;P.minute=P.minutes=FE;P.second=P.seconds=$E;P.millisecond=P.milliseconds=Zv;P.utcOffset=_7;P.utc=C7;P.local=E7;P.parseZone=j7;P.hasAlignedHourOffset=b7;P.isDST=N7;P.isLocal=O7;P.isUtcOffset=R7;P.isUtc=Fv;P.isUTC=Fv;P.zoneAbbr=WE;P.zoneName=YE;P.dates=Ft("dates accessor is deprecated. Use date instead.",Qv);P.months=Ft("months accessor is deprecated. Use month instead",jv);P.years=Ft("years accessor is deprecated. Use year instead",Sv);P.zone=Ft("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",k7);P.isDSTShifted=Ft("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",P7);function BE(e){return de(e*1e3)}function HE(){return de.apply(null,arguments).parseZone()}function Jv(e){return e}var X=ip.prototype;X.calendar=Ok;X.longDateFormat=Dk;X.invalidDate=zk;X.ordinal=Fk;X.preparse=Jv;X.postformat=Jv;X.relativeTime=Uk;X.pastFuture=Wk;X.set=Nk;X.eras=yE;X.erasParse=vE;X.erasConvertYear=xE;X.erasAbbrRegex=EE;X.erasNameRegex=CE;X.erasNarrowRegex=jE;X.months=oC;X.monthsShort=sC;X.monthsParse=lC;X.monthsRegex=dC;X.monthsShortRegex=cC;X.week=pC;X.firstDayOfYear=gC;X.firstDayOfWeek=mC;X.weekdays=jC;X.weekdaysMin=NC;X.weekdaysShort=bC;X.weekdaysParse=OC;X.weekdaysRegex=DC;X.weekdaysShortRegex=LC;X.weekdaysMinRegex=zC;X.isPM=IC;X.meridiem=UC;function Sl(e,t,r,n){var i=Dr(),o=fr().set(n,t);return i[r](o,e)}function Xv(e,t,r){if(Tr(e)&&(t=e,e=void 0),e=e||"",t!=null)return Sl(e,t,r,"month");var n,i=[];for(n=0;n<12;n++)i[n]=Sl(e,n,r,"month");return i}function _p(e,t,r,n){typeof e=="boolean"?(Tr(t)&&(r=t,t=void 0),t=t||""):(t=e,r=t,e=!1,Tr(t)&&(r=t,t=void 0),t=t||"");var i=Dr(),o=e?i._week.dow:0,s,a=[];if(r!=null)return Sl(t,(r+o)%7,n,"day");for(s=0;s<7;s++)a[s]=Sl(t,(s+o)%7,n,"day");return a}function VE(e,t){return Xv(e,t,"months")}function GE(e,t){return Xv(e,t,"monthsShort")}function qE(e,t,r){return _p(e,t,r,"weekdays")}function KE(e,t,r){return _p(e,t,r,"weekdaysShort")}function QE(e,t,r){return _p(e,t,r,"weekdaysMin")}sn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,r=q(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+r}});R.lang=Ft("moment.lang is deprecated. Use moment.locale instead.",sn);R.langData=Ft("moment.langData is deprecated. Use moment.localeData instead.",Dr);var hr=Math.abs;function ZE(){var e=this._data;return this._milliseconds=hr(this._milliseconds),this._days=hr(this._days),this._months=hr(this._months),e.milliseconds=hr(e.milliseconds),e.seconds=hr(e.seconds),e.minutes=hr(e.minutes),e.hours=hr(e.hours),e.months=hr(e.months),e.years=hr(e.years),this}function ex(e,t,r,n){var i=rr(t,r);return e._milliseconds+=n*i._milliseconds,e._days+=n*i._days,e._months+=n*i._months,e._bubble()}function JE(e,t){return ex(this,e,t,1)}function XE(e,t){return ex(this,e,t,-1)}function Bm(e){return e<0?Math.floor(e):Math.ceil(e)}function ej(){var e=this._milliseconds,t=this._days,r=this._months,n=this._data,i,o,s,a,l;return e>=0&&t>=0&&r>=0||e<=0&&t<=0&&r<=0||(e+=Bm(Ad(r)+t)*864e5,t=0,r=0),n.milliseconds=e%1e3,i=Tt(e/1e3),n.seconds=i%60,o=Tt(i/60),n.minutes=o%60,s=Tt(o/60),n.hours=s%24,t+=Tt(s/24),l=Tt(tx(t)),r+=l,t-=Bm(Ad(l)),a=Tt(r/12),r%=12,n.days=t,n.months=r,n.years=a,this}function tx(e){return e*4800/146097}function Ad(e){return e*146097/4800}function tj(e){if(!this.isValid())return NaN;var t,r,n=this._milliseconds;if(e=$t(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+n/864e5,r=this._months+tx(t),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(t=this._days+Math.round(Ad(this._months)),e){case"week":return t/7+n/6048e5;case"day":return t+n/864e5;case"hour":return t*24+n/36e5;case"minute":return t*1440+n/6e4;case"second":return t*86400+n/1e3;case"millisecond":return Math.floor(t*864e5)+n;default:throw new Error("Unknown unit "+e)}}function Lr(e){return function(){return this.as(e)}}var rx=Lr("ms"),rj=Lr("s"),nj=Lr("m"),ij=Lr("h"),oj=Lr("d"),sj=Lr("w"),aj=Lr("M"),lj=Lr("Q"),uj=Lr("y"),cj=rx;function dj(){return rr(this)}function fj(e){return e=$t(e),this.isValid()?this[e+"s"]():NaN}function Qn(e){return function(){return this.isValid()?this._data[e]:NaN}}var pj=Qn("milliseconds"),hj=Qn("seconds"),mj=Qn("minutes"),gj=Qn("hours"),yj=Qn("days"),vj=Qn("months"),xj=Qn("years");function wj(){return Tt(this.days()/7)}var yr=Math.round,hi={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Sj(e,t,r,n,i){return i.relativeTime(t||1,!!r,e,n)}function _j(e,t,r,n){var i=rr(e).abs(),o=yr(i.as("s")),s=yr(i.as("m")),a=yr(i.as("h")),l=yr(i.as("d")),c=yr(i.as("M")),d=yr(i.as("w")),f=yr(i.as("y")),p=o<=r.ss&&["s",o]||o<r.s&&["ss",o]||s<=1&&["m"]||s<r.m&&["mm",s]||a<=1&&["h"]||a<r.h&&["hh",a]||l<=1&&["d"]||l<r.d&&["dd",l];return r.w!=null&&(p=p||d<=1&&["w"]||d<r.w&&["ww",d]),p=p||c<=1&&["M"]||c<r.M&&["MM",c]||f<=1&&["y"]||["yy",f],p[2]=t,p[3]=+e>0,p[4]=n,Sj.apply(null,p)}function kj(e){return e===void 0?yr:typeof e=="function"?(yr=e,!0):!1}function Cj(e,t){return hi[e]===void 0?!1:t===void 0?hi[e]:(hi[e]=t,e==="s"&&(hi.ss=t-1),!0)}function Ej(e,t){if(!this.isValid())return this.localeData().invalidDate();var r=!1,n=hi,i,o;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(r=e),typeof t=="object"&&(n=Object.assign({},hi,t),t.s!=null&&t.ss==null&&(n.ss=t.s-1)),i=this.localeData(),o=_j(this,!r,n,i),r&&(o=i.pastFuture(+this,o)),i.postformat(o)}var uc=Math.abs;function Xn(e){return(e>0)-(e<0)||+e}function hu(){if(!this.isValid())return this.localeData().invalidDate();var e=uc(this._milliseconds)/1e3,t=uc(this._days),r=uc(this._months),n,i,o,s,a=this.asSeconds(),l,c,d,f;return a?(n=Tt(e/60),i=Tt(n/60),e%=60,n%=60,o=Tt(r/12),r%=12,s=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=a<0?"-":"",c=Xn(this._months)!==Xn(a)?"-":"",d=Xn(this._days)!==Xn(a)?"-":"",f=Xn(this._milliseconds)!==Xn(a)?"-":"",l+"P"+(o?c+o+"Y":"")+(r?c+r+"M":"")+(t?d+t+"D":"")+(i||n||e?"T":"")+(i?f+i+"H":"")+(n?f+n+"M":"")+(e?f+s+"S":"")):"P0D"}var Q=fu.prototype;Q.isValid=v7;Q.abs=ZE;Q.add=JE;Q.subtract=XE;Q.as=tj;Q.asMilliseconds=rx;Q.asSeconds=rj;Q.asMinutes=nj;Q.asHours=ij;Q.asDays=oj;Q.asWeeks=sj;Q.asMonths=aj;Q.asQuarters=lj;Q.asYears=uj;Q.valueOf=cj;Q._bubble=ej;Q.clone=dj;Q.get=fj;Q.milliseconds=pj;Q.seconds=hj;Q.minutes=mj;Q.hours=gj;Q.days=yj;Q.weeks=wj;Q.months=vj;Q.years=xj;Q.humanize=Ej;Q.toISOString=hu;Q.toString=hu;Q.toJSON=hu;Q.locale=Yv;Q.localeData=Hv;Q.toIsoString=Ft("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",hu);Q.lang=Bv;I("X",0,0,"unix");I("x",0,0,"valueOf");D("x",lu);D("X",Vk);ne("X",function(e,t,r){r._d=new Date(parseFloat(e)*1e3)});ne("x",function(e,t,r){r._d=new Date(q(e))});//! moment.js
R.version="2.30.1";jk(de);R.fn=P;R.min=h7;R.max=m7;R.now=g7;R.utc=fr;R.unix=BE;R.months=VE;R.isDate=hs;R.locale=sn;R.invalid=iu;R.duration=rr;R.isMoment=er;R.weekdays=qE;R.parseZone=HE;R.localeData=Dr;R.isDuration=Pa;R.monthsShort=GE;R.weekdaysMin=QE;R.defineLocale=hp;R.updateLocale=HC;R.locales=VC;R.weekdaysShort=KE;R.normalizeUnits=$t;R.relativeTimeRounding=kj;R.relativeTimeThreshold=Cj;R.calendarFormat=U7;R.prototype=P;R.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};function jj(e){return je({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"},child:[]}]})(e)}function bj(e){return je({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"},child:[]}]})(e)}const Nj=()=>{const{numOfPages:e,page:t}=K(s=>s.products),r=Te(),n=Array.from({length:e},(s,a)=>a+1),i=()=>{let s=t+1;s>e&&(s=1),r(ic(s))},o=()=>{let s=t-1;s<1&&(s=e),r(ic(s))};return u.jsxs(Pj,{children:[u.jsxs("button",{className:"prev-btn",onClick:o,children:[u.jsx(jj,{}),"prev"]}),u.jsx("div",{className:"btn-container",children:n.map(s=>u.jsx("button",{type:"button",className:s===t?"pageBtn active":"pageBtn",onClick:()=>r(ic(s)),children:s},s))}),u.jsxs("button",{className:"next-btn",onClick:i,children:["next",u.jsx(bj,{})]})]})},Pj=W.section`
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--primary-gray);
    border-radius: var(--borderRadius);
  }
  .pageBtn {
    background: transparent;
    border-color: transparent;
    width: 40px;
    height: 30px;
    font-weight: 700;
    font-size: 1rem;
    color: var(--actual-black);
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
  }
  .active {
    background: var(--secondy-chocolate);
    color: var(--actual-white);
  }
  .prev-btn,
  .next-btn {
    width: 80px;
    height: 30px;
    background: var(--primary-chocolate);
    border-color: transparent;
    border-radius: var(--borderRadius);
    color: var(--actual-white);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--secondy-chocolate);
  }
`,Oj=({productId:e})=>{const t=Te(),{user:r}=K(d=>d.user),{title:n,comment:i,rating:o,isEdit:s,editReviewId:a,isLoading:l}=K(d=>d.review),c=d=>{if(d.preventDefault(),s){t(ga({reviewId:a,review:{product:e,rating:o,title:n,comment:i}}));return}t(ma({product:e,rating:o,title:n,comment:i}))};return u.jsx(Rj,{children:u.jsxs("form",{class:"review-form",onSubmit:c,children:[u.jsx("h2",{children:"Add a Review"}),u.jsxs("div",{class:"form-group",children:[u.jsx("label",{for:"title",children:"Title"}),u.jsx("input",{type:"text",id:"title",name:"title",value:n,required:!0,onChange:d=>t(yn({name:d.target.name,value:d.target.value}))})]}),u.jsxs("div",{class:"form-group",children:[u.jsx("label",{for:"comment",children:"Comment"}),u.jsx("textarea",{id:"comment",name:"comment",rows:"5",value:i,required:!0,onChange:d=>t(yn({name:d.target.name,value:d.target.value}))})]}),u.jsxs("div",{class:"form-group rating-group",children:[u.jsx("label",{children:"Rating"}),u.jsxs("div",{class:"rating",children:[u.jsx("input",{type:"radio",id:"star5",name:"rating",value:"5",onClick:d=>t(yn({name:d.target.name,value:d.target.value}))}),u.jsx("label",{for:"star5",title:"5 stars",children:"★"}),u.jsx("input",{type:"radio",id:"star4",name:"rating",value:"4",onClick:d=>t(yn({name:d.target.name,value:d.target.value}))}),u.jsx("label",{for:"star4",title:"4 stars",children:"★"}),u.jsx("input",{type:"radio",id:"star3",name:"rating",value:"3",onClick:d=>t(yn({name:d.target.name,value:d.target.value}))}),u.jsx("label",{for:"star3",title:"3 stars",children:"★"}),u.jsx("input",{type:"radio",id:"star2",name:"rating",value:"2",onClick:d=>t(yn({name:d.target.name,value:d.target.value}))}),u.jsx("label",{for:"star2",title:"2 stars",children:"★"}),u.jsx("input",{type:"radio",id:"star1",name:"rating",value:"1",onClick:d=>t(yn({name:d.target.name,value:d.target.value}))}),u.jsx("label",{for:"star1",title:"1 star",style:{color:"#f5b301"},children:"★"})]})]}),r?u.jsx("button",{className:"btn",type:"submit",disabled:l,children:l?"Please Wait...":"Submit Review"}):u.jsx(ie,{className:"btn",to:"/register",children:"Login To Add Review"})]})})},Rj=W.section`
  padding-top: 1rem;
  .review-form-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }

  .review-form-container h2 {
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form-group input[type='text'],
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }

  .form-group textarea {
    resize: none; /* Prevent resizing */
  }

  .rating-group {
    margin-bottom: 20px;
  }

  .rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  .rating input {
    display: none;
  }

  .rating label {
    font-size: 30px;
    color: #ddd;
    cursor: pointer;
  }

  .rating input:checked ~ label,
  .rating input:hover ~ label,
  .rating label:hover ~ label {
    color: #f5b301;
  }
`,Tj=({reviews:e,groupRating:t=[],averageRating:r,productId:n})=>{const[i,o]=b.useState(0),{user:s}=K(c=>c.user),{numOfPages:a}=K(c=>c.products),l=Te();return b.useEffect(()=>{t.length>0&&o(t.reduce((c,d)=>c+d.groupRating,0))},[t]),u.jsxs(Mj,{children:[u.jsxs("h6",{children:[r," ",u.jsx("span",{className:"star",children:u.jsx(Ky,{})})," ","overall rating"]}),t.length>0&&t.map(c=>u.jsxs("div",{className:"group-rating",children:[u.jsxs("h4",{children:[c._id," stars"]}),u.jsx("div",{className:"overal-rate-bar",children:u.jsx("div",{style:{width:`${Math.ceil(c.groupRating/i*100)}%`,backgroundColor:"var( --secondy-chocolate)",height:"100%",borderRadius:"10px"}})}),u.jsxs("h4",{children:[Math.ceil(c.groupRating/i*100),"%"]})]},c._id)),e.map(c=>{const d=R(c.createdAt).format("MMMM Do YYYY");return u.jsxs("div",{children:[u.jsx("hr",{}),u.jsxs("div",{className:"review",children:[u.jsx(Zy,{averageRating:c.rating}),u.jsxs("div",{className:"info",children:[u.jsx("p",{className:"name",children:c.user.name}),u.jsx("p",{className:"date",children:d})]}),u.jsx("h5",{children:c.title}),u.jsx("p",{children:c.comment}),c.user._id===(s==null?void 0:s.userId)&&u.jsxs("div",{children:[u.jsx("button",{type:"button",className:"btn-review edit-btn",onClick:()=>l(P6({reviewId:c._id,reviews:e})),children:"Edit"}),u.jsx("button",{type:"button",className:"btn-review delete-btn",onClick:()=>l(ya(c._id)),children:"Delete"})]})]}),u.jsx("hr",{})]},c._id)}),a>1&&u.jsx(Nj,{}),u.jsx(Oj,{productId:n})]})},Mj=W.section`
  .star {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  .group-rating {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 1rem;
    margin-bottom: 1rem;
  }
  .overal-rate-bar {
    background-color: var(--primary-gray);
    border-radius: 10px;
    max-height: 1rem;
    width: '80%';
  }
  h4 {
    font-size: 1rem;
  }
  .review {
    padding: 1rem 0;
    text-align: left;
  }

  .review .info {
    display: flex;
  }
  .name {
    font-weight: 700;
    margin-right: 10px;
  }
  .date {
    opacity: 0.5;
  }

  .btn-review {
    font-size: 1rem;
    color: var(--actual-white);
    padding: 5px 10px;
    border: none;
    border: 15px;
    cursor: pointer;
  }
  .edit-btn {
    background-color: var(--primary-chocolate);
    margin-right: 1rem;
  }
  .edit-btn:hover {
    background-color: var(--secondy-chocolate);
  }
  .delete-btn {
    background-color: var(--clr-red-dark);
  }
  .delete-btn {
    background-color: var(--clr-red-light);
  }
`,Dj=()=>{const{products_loading:e,products_error:t}=K(n=>n.products),r=Te();return b.useEffect(()=>{r(Eo())},[]),e?u.jsx(Hn,{}):t?u.jsx(Bn,{}):u.jsxs(u.Fragment,{children:[u.jsx(q6,{}),u.jsx(Ck,{})]})},Lj=()=>{const e=Te(),{recommanded_products:t,single_product:r,products_loading:n,products_error:i}=K(o=>o.products);return b.useEffect(()=>{e(Eo())},[r]),n?u.jsx(Hn,{}):i?u.jsx(Bn,{}):u.jsx(qy,{products:t})},zj=({image:e,name:t,price:r,id:n,amount:i,colors:o})=>u.jsxs(Aj,{children:[u.jsxs("div",{className:"container",children:[u.jsx("img",{src:e[0],alt:t}),u.jsx(ie,{to:`/products/${n}`,className:"link",children:u.jsx(qg,{})})]}),u.jsxs("section",{className:"wrapper",children:[u.jsx("h5",{children:t}),u.jsx("p",{children:me(r)}),i&&u.jsxs("p",{children:["Amount: ",i]}),o&&o.length>0&&u.jsx("div",{className:"color-container",children:o.map((s,a)=>u.jsx("div",{className:"color-container",children:u.jsx("div",{style:{backgroundColor:s},className:"color-span"})},a))})]})]}),Aj=W.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
    width: 100%;
  }
  img {
    display: block;
    object-fit: cover;
    width: 100%;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primary-900);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--black);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }

  h5,
  p {
    text-align: center;
    opacity: 0.5;
  }

  h5 {
    font-size: 1rem;
    margin: 5px 0;
  }

  p {
    margin: 0 0 5px 0;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .color-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .color-span {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid var(--grey-50);
  }
`,Ij=({name:e,email:t,line1:r,city:n,postal:i,state:o})=>u.jsxs(Fj,{className:"shipping wrapper-container",children:[u.jsx("h5",{children:"Shipping Address"}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"User Name : "}),e]}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"User Email :"})," ",t]}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"Street :"})," ",r]}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"City :"})," ",n]}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"Postal Code :"})," ",i]}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"State :"})," ",o]}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"Country :"})," Canada"]})]}),Fj=W.div`
  h5,
  p {
    opacity: 0.5;
  }

  h5 {
    margin: 5px 0;
  }

  p {
    margin: 0 0 5px 0;
  }

  .wrapper-container {
    box-shadow: var(--shadow-4);
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  .shipping {
    margin-bottom: 1rem;
  }

  @media (min-width: 750px) {
    .shipping {
      margin-bottom: none;
    }
  }
`,$j=({shippingFee:e,tax:t,subtotal:r,createdAt:n,total:i,status:o,updatedAt:s})=>u.jsxs(Uj,{className:"wrapper-container",children:[u.jsx("h5",{children:"Billing Info"}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"Shipping :"}),me(e)]}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"Tax :"}),me(t)]}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"Subtotal :"}),me(r)]}),u.jsxs("div",{children:[u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"Placed Date :"})," ",R(n).format("YYYY-MM-DD")]}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"Total :"}),me(i)]}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"Status :"}),o]}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"Updated Date :"})," ",R(s).format("YYYY-MM-DD")]})]})]}),Uj=W.div`
  h5,
  p {
    opacity: 0.5;
  }

  h5 {
    margin: 5px 0;
  }

  p {
    margin: 0 0 5px 0;
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
`,Wj=()=>{const{userOrders:e}=K(t=>t.order);return u.jsx(Yj,{children:e.length===0?u.jsx("h4",{children:"No order history"}):e.map((t,r)=>u.jsxs("section",{className:"orders-info",children:[u.jsx("article",{children:t.orderItems.map((n,i)=>{const{image:o,name:s,amount:a,price:l,color:c,product:d}=n;return u.jsx("div",{children:u.jsx(zj,{image:o,name:s,price:l,id:d,amount:a,colors:[`#${c}`]})},i)})},r),u.jsxs("article",{className:"shipping-container",children:[u.jsx(Ij,{name:t.shippingAddress.name,email:t.shippingAddress.email,line1:t.shippingAddress.line1,city:t.shippingAddress.city,postal:t.shippingAddress.postal_code,state:t.shippingAddress.state}),u.jsx("div",{children:u.jsx($j,{shippingFee:t.shippingFee,tax:t.tax,subtotal:t.subtotal,createdAt:t.createdAt,total:t.total,status:t.status,updatedAt:t.updatedAt})})]})]}))})},Yj=W.section`
  h5,
  p {
    opacity: 0.5;
  }

  h5,
  h3 {
    margin: 5px 0;
  }

  p {
    margin: 0 0 5px 0;
  }

  .wrapper-container {
    padding: 2rem;
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  .shipping-container {
    margin-top: 1rem;
    .shipping {
      margin-bottom: 1rem;
    }
  }

  .orders-info {
    margin: 2rem 0;
  }

  @media (min-width: 750px) {
    .orders-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      box-shadow: var(--shadow-1);
    }
  }
`,Bj="/assets/about-image-B2l0sVB9.jpg",Hj=()=>(b.useEffect(()=>{window.scrollTo(0,0)},[]),u.jsxs("main",{children:[u.jsx(ps,{title:"about"}),u.jsxs(Vj,{className:"page section section-center",children:[u.jsx("img",{src:Bj,alt:"desktop, laptop and phone drawing"}),u.jsxs("article",{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"About JocesTech"}),u.jsx("div",{className:"underline"})]}),u.jsxs("p",{children:["At JocesTech, we're passionate about technology. Our mission is simple: to provide you with a handpicked selection of top-tier smartphones, laptops, and accessories. We're committed to delivering quality, guidance, and a seamless shopping experience.",u.jsx("strong",{children:" We JOCEST love tech, yes JUST tech"})]}),u.jsx("h4",{children:"Our Purpose"}),u.jsx("p",{children:"Our purpose is simple yet profound—to make top-tier technology accessible to all. We curate a diverse collection of smartphones, laptops, and accessories, meticulously selected to cater to your varying needs and preferences."}),u.jsx("p",{children:"We're not just a tech store; we're your tech partners. We go beyond providing products; we offer guidance, expertise, and a personalized touch to help you discover the perfect device that seamlessly integrates with your lifestyle."}),u.jsx("h4",{children:"Join Our Community"}),u.jsx("p",{children:"Whether you're an early tech adopter or exploring new gadgets, join our community at JocesTech.com. Let's navigate the world of tech together and find devices that complement and enhance your life."}),u.jsx("p",{children:"Thank you for entrusting us to be your tech solution provider."})]})]})]})),Vj=W.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 1rem auto;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }

  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`,Gj=()=>{const{cart:e}=K(r=>r.cart),t=Te();return b.useEffect(()=>{window.scrollTo(0,0)},[]),b.useEffect(()=>{t(C6())},[e]),e.length<1?u.jsx(Hm,{className:"page-100",children:u.jsxs("div",{className:"empty",children:[u.jsx("h2",{children:"Your cart is empty"}),u.jsx(ie,{to:"/products",className:"btn",children:"fill it"})]})}):u.jsxs("main",{children:[u.jsx(ps,{title:"cart"}),u.jsx(Hm,{className:"page",children:u.jsx(M8,{})})]})},Hm=W.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`,qj=()=>{const{cart:e}=K(t=>t.cart);return b.useEffect(()=>{window.scrollTo(0,0)},[]),u.jsxs("main",{children:[u.jsx(ps,{title:"checkout"}),u.jsx(Kj,{className:"page",children:e.length<1?u.jsxs("div",{className:"empty",children:[u.jsx("h2",{children:"Your cart is empty"}),u.jsx(ie,{to:"/products",className:"btn",children:"fill it"})]}):u.jsx(mk,{})})]})},Kj=W.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`,Qj=()=>(b.useEffect(()=>{window.scrollTo(0,0)},[]),u.jsx(Zj,{className:"page-100",children:u.jsxs("section",{children:[u.jsx("h1",{children:"404"}),u.jsx("h3",{children:"Sorry, the page you tried cannot be found"}),u.jsx(ie,{to:"/",className:"btn",children:"back home"})]})})),Zj=W.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`,Jj=()=>(b.useEffect(()=>{window.scrollTo(0,0)},[]),u.jsxs("main",{children:[u.jsx(H6,{}),u.jsx(Dj,{}),u.jsx(Q6,{}),u.jsx(J6,{})]})),Xj=()=>{const e=ls(),{cart:t,shipping_fee:r,total_amount:n,tax:i}=K(o=>o.cart);return b.useEffect(()=>{window.scrollTo(0,0),setTimeout(()=>{e("/")},3e3)},[]),u.jsx(eb,{className:"section ",children:u.jsx("section",{className:"section-center ",children:u.jsxs("article",{className:"success-container",children:[u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",children:[u.jsx("circle",{cx:"32",cy:"32",r:"32",fill:"#D87D4A"}),u.jsx("path",{d:"M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812",stroke:"white","stroke-width":"4"})]}),u.jsx("h4",{className:"thank-message",children:"THANK YOU FOR YOUR ORDER"}),u.jsx("p",{className:"result-message",children:"Payment succeeded"}),u.jsxs("article",{className:"grand-total-container",children:[u.jsx("h4",{children:"GRAND TOTAL"}),u.jsx("div",{className:"grand-total-product-container",children:t.map(o=>u.jsxs("div",{className:"product-total-details",children:[u.jsx("img",{className:"img-total",src:o.image}),u.jsxs("div",{children:[u.jsx("p",{children:o.name}),u.jsxs("p",{children:["Price: ",me(o.price)]}),u.jsxs("p",{children:["Qty: ",o.amount]})]})]}))}),u.jsxs("p",{children:["Shipping Fee: ",me(r)]}),u.jsxs("p",{children:["Tax: ",me(i)]}),u.jsxs("p",{children:["FINAL PRICE: ",me(n+r+i)]})]}),u.jsx("p",{children:u.jsx("strong",{children:"Invoice Will Be Emailed Shortly"})})]})})})},eb=W.section`
  .backgroundOpacity {
    opacity: 0.1;
  }

  .img-total {
    width: 100px;
  }

  .product-total-details {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    p {
      margin-bottom: 5px;
    }
  }

  .result-message {
    line-height: 22px;
    font-size: 16px;
  }
  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }
  .hidden {
    display: none;
  }

  h3 {
    color: #d87d4a;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 192.308% */
    letter-spacing: 0.929px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .grand-total-container {
    /* height: 92px; */
    flex-shrink: 0;
    border-radius: 8px;
    h4 {
      color: var(--actual-black);
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 166.667% */
      opacity: 0.5;
    }
    p {
      color: var(--actual-black);
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }
  }
  .success-container {
    padding: 50px;
    border-radius: 8px;
    background: #fff;

    box-shadow: var(--dark-shadow);
    .thank-message {
      color: #000;
      font-family: Manrope;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px; /* 116.667% */
      letter-spacing: 0.857px;
      text-transform: uppercase;
    }

    .sucessfull-grand-total {
      background: var(--primary-chocolate);
      padding: 20px;
      width: 100%;
      border-radius: 8px;
      .grand-total {
        color: var(--primary-blackish);
        font-family: Manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px; /* 166.667% */
        opacity: 0.5;
      }
      .actual-total {
        color: var(--primary-blackish);
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
      }
    }
  }

  @media (min-width: 768px) {
    .grid-layout-container,
    .grand-total-product-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 18px;
    }
  }

  .disabled {
    opacity: 0.4;
    background: #000;
  }
`,tb=()=>{const e=Te(),{filters:t,sort:r}=K(n=>n.filter);return b.useEffect(()=>{e(ja())},[]),b.useEffect(()=>{e(n8()),e(r8())},[t,r]),b.useEffect(()=>{window.scrollTo(0,0)},[]),u.jsxs("main",{children:[u.jsx(ps,{title:"products"}),u.jsx(rb,{className:"page",children:u.jsxs("div",{className:"section-center products",children:[u.jsx(l8,{}),u.jsxs("div",{children:[u.jsx(v8,{}),u.jsx(p8,{})]})]})})]})},rb=W.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`,nb={name:"",email:"",password:"",isMember:!1},ib=()=>{const[e,t]=b.useState(nb),{isLoading:r,user:n}=K(c=>c.user),i=ls(),o=Te(),s=c=>{const d=c.target.name,f=c.target.value;t(p=>({...p,[d]:f}))},a=c=>{c.preventDefault();const{name:d,email:f,password:p,isMember:x}=e;if(!f||!p||!x&&!d){$.error("Please Fill Out All Fields");return}if(!x){o(ka({name:d,email:f,password:p}));return}o(Ca({email:f,password:p}))},l=()=>{t(c=>({...c,isMember:!c.isMember}))};return b.useEffect(()=>{n&&i("/products")},[n,i]),b.useEffect(()=>{window.scrollTo(0,0)},[]),u.jsx(ob,{className:"full-page",children:u.jsxs("form",{className:"form",onSubmit:a,children:[u.jsx("h3",{children:e.isMember?"Login":"Register"}),!e.isMember&&u.jsx(Nn,{name:"name",value:e.name,type:"text",handleChange:s}),u.jsx(Nn,{name:"email",value:e.email,type:"email",handleChange:s}),u.jsx(Nn,{name:"password",value:e.password,type:"password",handleChange:s}),u.jsx("button",{type:"submit",className:"btn ",disabled:r,children:r?"Loading...":"submit"}),u.jsxs("p",{children:[e.isMember?"Not a member yet?":"Already a member?",u.jsx("button",{type:"button",onClick:l,className:"member-btn",children:e.isMember?"Register":"Login"})]})]})})},ob=W.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-chocolate);
    box-shadow: var(--dark-shadow);
  }

  h3 {
    text-align: center;
    color: var(--primary-chocolate);
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-chocolate);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`,sb=()=>{const{id:e}=x5(),t=Te(),{single_product_loading:r,single_product_error:n,single_product:i,single_product_review:o,single_product_review_loading:s,single_product_review_error:a,page:l}=K(T=>T.products),{newReview:c}=K(T=>T.review);if(b.useEffect(()=>{t(pa(e)),window.scrollTo(0,0)},[e,c]),b.useEffect(()=>{t(ha(e))},[e,l,c]),r)return u.jsx(Hn,{});if(n)return u.jsx(Bn,{});const{name:d,price:f,description:p,inventory:x,averageRating:y,reviews:v,id:S,company:g,image:h,features:m,box:w,freeShipping:j,groupRating:E,numOfReviews:_,category:k}=i;return u.jsxs(ab,{children:[u.jsx(ps,{title:d,product:!0}),u.jsxs("div",{className:"section section-center page",children:[u.jsx(ie,{to:"/products",className:"btn",children:"back to products"}),u.jsxs("div",{className:"product-center",children:[u.jsx(S8,{image:h}),u.jsxs("section",{className:"content",children:[u.jsx("h2",{children:d}),u.jsx(Zy,{averageRating:y,reviews:_,showReview:!0}),u.jsx("h5",{className:"price",children:me(f)}),u.jsx("p",{className:"desc",children:p}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"Available : "}),x>0?"In stock":"out of stock"]}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"SKU :"}),S]}),u.jsxs("p",{className:"info",children:[u.jsx("span",{children:"Brand :"}),g]}),j&&u.jsx("p",{className:"info",children:u.jsx("span",{children:"Free Shipping"})}),u.jsx("hr",{}),x>0&&u.jsx(C8,{product:i})]})]}),u.jsxs("div",{className:"feature-and-inbox-container",children:[u.jsxs("div",{children:[u.jsx("h6",{children:"FEATURES"}),u.jsx("p",{className:"feature-desc",children:m})]}),u.jsxs("div",{className:"inbox-container",children:[u.jsx("h6",{children:"in the box"}),w&&w.map(T=>u.jsxs("p",{children:[u.jsx("span",{children:T.substring(0,3)},T),T.substring(3)]}))]})]}),s?u.jsx(Hn,{}):a?u.jsx(Bn,{}):u.jsxs(u.Fragment,{children:[u.jsx("h6",{children:"Reviews"}),u.jsx(Tj,{reviews:o,groupRating:E,averageRating:y,productId:e})]}),u.jsx("h6",{children:"RECOMMANDED PRODUCTS"}),u.jsx(Lj,{}),u.jsx(dv,{})]})]})},ab=W.main`
  img {
    width: 100%;
  }
  .feature-desc {
    color: #000;
    font-family: Manrope;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
    opacity: 0.5;
  }

  h6 {
    color: #000;
    font-family: Manrope;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 150% */
    letter-spacing: 0.857px;
    text-transform: uppercase;
    margin: 1.25rem 0;
  }

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--secondy-chocolate);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  .inbox-container {
    p {
      color: #000;
      font-family: Manrope;
      font-size: 0.9375rem;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 166.667% */
      opacity: 0.5;
      span {
        color: var(--primary-chocolate);
        font-family: Manrope;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 700;
        line-height: 25px; /* 166.667% */
      }
    }
  }

  .feature-and-inbox-container {
    margin: 3.125rem 0;
  }

  @media (min-width: 550px) {
    .product-image-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 0.625rem;
    }
  }

  @media (min-width: 768px) {
    .feature-and-inbox-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 100px;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`,lb=()=>{const{isLoading:e,user:t}=K(f=>f.user),{orderLoading:r,orderError:n}=K(f=>f.order),i=Te(),o=ls(),s={name:(t==null?void 0:t.name)||"",email:(t==null?void 0:t.email)||"",isResetPassword:!1,oldPassword:"",newPassword:""},[a,l]=b.useState(s);b.useEffect(()=>{if(!t){o("/"),l(s);return}i(wa())},[t]);const c=f=>{f.preventDefault();const{name:p,email:x,isResetPassword:y,oldPassword:v,newPassword:S}=a;if((!p||!x)&&!y){$.error("Please Fill Out All Fields");return}if(y&&(!v||!S)){$.error("Please All Password Fields ");return}if(y){i(_a({oldPassword:v,newPassword:S}));return}i(Sa({name:p,email:x}))},d=f=>{const p=f.target.name,x=f.target.value;l(y=>({...y,[p]:x}))};return r?u.jsx(Hn,{}):n?u.jsx(Bn,{}):u.jsxs(ub,{children:[u.jsx("h2",{children:"Settings"}),u.jsx("form",{className:"form",onSubmit:c,children:u.jsxs("div",{className:"form-center",children:[a.isResetPassword?u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"Reset Password"}),u.jsx(Nn,{type:"password",name:"oldPassword",labelText:"Old Password",value:a.oldPassword,handleChange:d}),u.jsx(Nn,{type:"password",name:"newPassword",labelText:"New Password",value:a.newPassword,handleChange:d})]}):u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"Profile"}),u.jsx(Nn,{type:"text",name:"name",value:a.name,handleChange:d}),u.jsx(Nn,{type:"email",name:"email",value:a.email,handleChange:d})]}),u.jsx("button",{className:"btn",style:{backgroundColor:"var(--clr-red-dark)"},type:"button",onClick:()=>l(f=>({...f,isResetPassword:!a.isResetPassword})),children:"reset password"}),u.jsx("button",{className:"btn btn-block",type:"submit",disabled:e,children:e?"Please Wait...":"save changes"})]})}),u.jsx("h2",{children:"View All Orders"}),u.jsx(Wj,{}),u.jsx(dv,{})]})},ub=W.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--dark-shadow);

  h3 {
    margin-top: 0;
  }

  .dashboard-user-profile {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .form {
    margin: 0 0 1rem 0;
    border-radius: 0;
    box-shadow: var(--dark-shadow);
    padding: 1rem;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;function cb(){return u.jsxs($5,{children:[u.jsx(F6,{}),u.jsx(U6,{}),u.jsxs(M5,{children:[u.jsx(Wt,{path:"/",element:u.jsx(Jj,{})}),u.jsx(Wt,{path:"/register",element:u.jsx(ib,{})}),u.jsx(Wt,{path:"about",element:u.jsx(Hj,{})}),u.jsx(Wt,{path:"cart",element:u.jsx(Gj,{})}),u.jsx(Wt,{path:"products",element:u.jsx(tb,{})}),u.jsx(Wt,{path:"products/:id",element:u.jsx(sb,{})}),u.jsx(Wt,{path:"checkout",element:u.jsx(qj,{})}),u.jsx(Wt,{path:"payment-successfull",element:u.jsx(Xj,{})}),u.jsx(Wt,{path:"setting",element:u.jsx(lb,{})}),u.jsx(Wt,{path:"*",element:u.jsx(Qj,{})})]}),u.jsx(Y6,{}),u.jsx(Bw,{position:"top-center"})]})}const db=x3({reducer:{toggle:H3,user:A6,products:N6,filter:a8,cart:E6,order:D6,review:R6}});dc.createRoot(document.getElementById("root")).render(u.jsx(MS,{store:db,children:u.jsx(cb,{})}))});export default fb();
