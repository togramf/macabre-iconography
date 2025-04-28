(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ht={},Ur=[],Hn=()=>{},Lm=()=>!1,Jo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),wc=t=>t.startsWith("onUpdate:"),It=Object.assign,Pc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Im=Object.prototype.hasOwnProperty,rt=(t,e)=>Im.call(t,e),Oe=Array.isArray,Fr=t=>Qo(t)==="[object Map]",jd=t=>Qo(t)==="[object Set]",ze=t=>typeof t=="function",St=t=>typeof t=="string",Ni=t=>typeof t=="symbol",mt=t=>t!==null&&typeof t=="object",Zd=t=>(mt(t)||ze(t))&&ze(t.then)&&ze(t.catch),Jd=Object.prototype.toString,Qo=t=>Jd.call(t),Dm=t=>Qo(t).slice(8,-1),Qd=t=>Qo(t)==="[object Object]",Lc=t=>St(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ps=Cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nm=/-(\w)/g,xn=ea(t=>t.replace(Nm,(e,n)=>n?n.toUpperCase():"")),Um=/\B([A-Z])/g,hr=ea(t=>t.replace(Um,"-$1").toLowerCase()),ta=ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ea=ea(t=>t?`on${ta(t)}`:""),Ri=(t,e)=>!Object.is(t,e),Sa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},eh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Fm=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Om=t=>{const e=St(t)?Number(t):NaN;return isNaN(e)?t:e};let Tu;const na=()=>Tu||(Tu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ia(t){if(Oe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=St(i)?Vm(i):ia(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(t)||mt(t))return t}const Bm=/;(?![^(]*\))/g,km=/:([^]+)/,Hm=/\/\*[^]*?\*\//g;function Vm(t){const e={};return t.replace(Hm,"").split(Bm).forEach(n=>{if(n){const i=n.split(km);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ic(t){let e="";if(St(t))e=t;else if(Oe(t))for(let n=0;n<t.length;n++){const i=Ic(t[n]);i&&(e+=i+" ")}else if(mt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const zm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gm=Cc(zm);function th(t){return!!t||t===""}const nh=t=>!!(t&&t.__v_isRef===!0),Ci=t=>St(t)?t:t==null?"":Oe(t)||mt(t)&&(t.toString===Jd||!ze(t.toString))?nh(t)?Ci(t.value):JSON.stringify(t,ih,2):String(t),ih=(t,e)=>nh(e)?ih(t,e.value):Fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ma(i,s)+" =>"]=r,n),{})}:jd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ma(n))}:Ni(e)?Ma(e):mt(e)&&!Oe(e)&&!Qd(e)?String(e):e,Ma=(t,e="")=>{var n;return Ni(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sn;class rh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=sn,!e&&sn&&(this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=sn;try{return sn=this,e()}finally{sn=n}}}on(){sn=this}off(){sn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Wm(t){return new rh(t)}function Xm(){return sn}let dt;const ya=new WeakSet;class sh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,sn&&sn.active&&sn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ya.has(this)&&(ya.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ah(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bu(this),lh(this);const e=dt,n=wn;dt=this,wn=!0;try{return this.fn()}finally{ch(this),dt=e,wn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Uc(e);this.deps=this.depsTail=void 0,bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ya.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ml(this)&&this.run()}get dirty(){return ml(this)}}let oh=0,ms,_s;function ah(t,e=!1){if(t.flags|=8,e){t.next=_s,_s=t;return}t.next=ms,ms=t}function Dc(){oh++}function Nc(){if(--oh>0)return;if(_s){let e=_s;for(_s=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ms;){let e=ms;for(ms=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function lh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ch(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Uc(i),$m(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function ml(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(uh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function uh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ms))return;t.globalVersion=Ms;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ml(t)){t.flags&=-3;return}const n=dt,i=wn;dt=t,wn=!0;try{lh(t);const r=t.fn(t._value);(e.version===0||Ri(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{dt=n,wn=i,ch(t),t.flags&=-3}}function Uc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Uc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function $m(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let wn=!0;const fh=[];function Ui(){fh.push(wn),wn=!1}function Fi(){const t=fh.pop();wn=t===void 0?!0:t}function bu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=dt;dt=void 0;try{e()}finally{dt=n}}}let Ms=0;class Ym{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!dt||!wn||dt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==dt)n=this.activeLink=new Ym(dt,this),dt.deps?(n.prevDep=dt.depsTail,dt.depsTail.nextDep=n,dt.depsTail=n):dt.deps=dt.depsTail=n,dh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=dt.depsTail,n.nextDep=void 0,dt.depsTail.nextDep=n,dt.depsTail=n,dt.deps===n&&(dt.deps=i)}return n}trigger(e){this.version++,Ms++,this.notify(e)}notify(e){Dc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nc()}}}function dh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)dh(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const _l=new WeakMap,ar=Symbol(""),gl=Symbol(""),ys=Symbol("");function kt(t,e,n){if(wn&&dt){let i=_l.get(t);i||_l.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Fc),r.map=i,r.key=n),r.track()}}function ni(t,e,n,i,r,s){const o=_l.get(t);if(!o){Ms++;return}const a=l=>{l&&l.trigger()};if(Dc(),e==="clear")o.forEach(a);else{const l=Oe(t),c=l&&Lc(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===ys||!Ni(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ys)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ar)),Fr(t)&&a(o.get(gl)));break;case"delete":l||(a(o.get(ar)),Fr(t)&&a(o.get(gl)));break;case"set":Fr(t)&&a(o.get(ar));break}}Nc()}function _r(t){const e=Qe(t);return e===t?e:(kt(e,"iterate",ys),vn(t)?e:e.map(Ht))}function ra(t){return kt(t=Qe(t),"iterate",ys),t}const qm={__proto__:null,[Symbol.iterator](){return Ta(this,Symbol.iterator,Ht)},concat(...t){return _r(this).concat(...t.map(e=>Oe(e)?_r(e):e))},entries(){return Ta(this,"entries",t=>(t[1]=Ht(t[1]),t))},every(t,e){return Xn(this,"every",t,e,void 0,arguments)},filter(t,e){return Xn(this,"filter",t,e,n=>n.map(Ht),arguments)},find(t,e){return Xn(this,"find",t,e,Ht,arguments)},findIndex(t,e){return Xn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Xn(this,"findLast",t,e,Ht,arguments)},findLastIndex(t,e){return Xn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Xn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ba(this,"includes",t)},indexOf(...t){return ba(this,"indexOf",t)},join(t){return _r(this).join(t)},lastIndexOf(...t){return ba(this,"lastIndexOf",t)},map(t,e){return Xn(this,"map",t,e,void 0,arguments)},pop(){return is(this,"pop")},push(...t){return is(this,"push",t)},reduce(t,...e){return Au(this,"reduce",t,e)},reduceRight(t,...e){return Au(this,"reduceRight",t,e)},shift(){return is(this,"shift")},some(t,e){return Xn(this,"some",t,e,void 0,arguments)},splice(...t){return is(this,"splice",t)},toReversed(){return _r(this).toReversed()},toSorted(t){return _r(this).toSorted(t)},toSpliced(...t){return _r(this).toSpliced(...t)},unshift(...t){return is(this,"unshift",t)},values(){return Ta(this,"values",Ht)}};function Ta(t,e,n){const i=ra(t),r=i[e]();return i!==t&&!vn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const Km=Array.prototype;function Xn(t,e,n,i,r,s){const o=ra(t),a=o!==t&&!vn(t),l=o[e];if(l!==Km[e]){const f=l.apply(t,s);return a?Ht(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,Ht(f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Au(t,e,n,i){const r=ra(t);let s=n;return r!==t&&(vn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Ht(a),l,t)}),r[e](s,...i)}function ba(t,e,n){const i=Qe(t);kt(i,"iterate",ys);const r=i[e](...n);return(r===-1||r===!1)&&kc(n[0])?(n[0]=Qe(n[0]),i[e](...n)):r}function is(t,e,n=[]){Ui(),Dc();const i=Qe(t)[e].apply(t,n);return Nc(),Fi(),i}const jm=Cc("__proto__,__v_isRef,__isVue"),hh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ni));function Zm(t){Ni(t)||(t=String(t));const e=Qe(this);return kt(e,"has",t),e.hasOwnProperty(t)}class ph{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?a_:vh:s?gh:_h).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Oe(e);if(!r){let l;if(o&&(l=qm[n]))return l;if(n==="hasOwnProperty")return Zm}const a=Reflect.get(e,n,Ut(e)?e:i);return(Ni(n)?hh.has(n):jm(n))||(r||kt(e,"get",n),s)?a:Ut(a)?o&&Lc(n)?a:a.value:mt(a)?r?Eh(a):sa(a):a}}class mh extends ph{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=ur(s);if(!vn(i)&&!ur(i)&&(s=Qe(s),i=Qe(i)),!Oe(e)&&Ut(s)&&!Ut(i))return l?!1:(s.value=i,!0)}const o=Oe(e)&&Lc(n)?Number(n)<e.length:rt(e,n),a=Reflect.set(e,n,i,Ut(e)?e:r);return e===Qe(r)&&(o?Ri(i,s)&&ni(e,"set",n,i):ni(e,"add",n,i)),a}deleteProperty(e,n){const i=rt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ni(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Ni(n)||!hh.has(n))&&kt(e,"has",n),i}ownKeys(e){return kt(e,"iterate",Oe(e)?"length":ar),Reflect.ownKeys(e)}}class Jm extends ph{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Qm=new mh,e_=new Jm,t_=new mh(!0);const vl=t=>t,Js=t=>Reflect.getPrototypeOf(t);function n_(t,e,n){return function(...i){const r=this.__v_raw,s=Qe(r),o=Fr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?vl:e?xl:Ht;return!e&&kt(s,"iterate",l?gl:ar),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Qs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function i_(t,e){const n={get(r){const s=this.__v_raw,o=Qe(s),a=Qe(r);t||(Ri(r,a)&&kt(o,"get",r),kt(o,"get",a));const{has:l}=Js(o),c=e?vl:t?xl:Ht;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&kt(Qe(r),"iterate",ar),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Qe(s),a=Qe(r);return t||(Ri(r,a)&&kt(o,"has",r),kt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Qe(a),c=e?vl:t?xl:Ht;return!t&&kt(l,"iterate",ar),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return It(n,t?{add:Qs("add"),set:Qs("set"),delete:Qs("delete"),clear:Qs("clear")}:{add(r){!e&&!vn(r)&&!ur(r)&&(r=Qe(r));const s=Qe(this);return Js(s).has.call(s,r)||(s.add(r),ni(s,"add",r,r)),this},set(r,s){!e&&!vn(s)&&!ur(s)&&(s=Qe(s));const o=Qe(this),{has:a,get:l}=Js(o);let c=a.call(o,r);c||(r=Qe(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ri(s,u)&&ni(o,"set",r,s):ni(o,"add",r,s),this},delete(r){const s=Qe(this),{has:o,get:a}=Js(s);let l=o.call(s,r);l||(r=Qe(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ni(s,"delete",r,void 0),c},clear(){const r=Qe(this),s=r.size!==0,o=r.clear();return s&&ni(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=n_(r,t,e)}),n}function Oc(t,e){const n=i_(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(rt(n,r)&&r in i?n:i,r,s)}const r_={get:Oc(!1,!1)},s_={get:Oc(!1,!0)},o_={get:Oc(!0,!1)};const _h=new WeakMap,gh=new WeakMap,vh=new WeakMap,a_=new WeakMap;function l_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function c_(t){return t.__v_skip||!Object.isExtensible(t)?0:l_(Dm(t))}function sa(t){return ur(t)?t:Bc(t,!1,Qm,r_,_h)}function xh(t){return Bc(t,!1,t_,s_,gh)}function Eh(t){return Bc(t,!0,e_,o_,vh)}function Bc(t,e,n,i,r){if(!mt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=c_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Or(t){return ur(t)?Or(t.__v_raw):!!(t&&t.__v_isReactive)}function ur(t){return!!(t&&t.__v_isReadonly)}function vn(t){return!!(t&&t.__v_isShallow)}function kc(t){return t?!!t.__v_raw:!1}function Qe(t){const e=t&&t.__v_raw;return e?Qe(e):t}function u_(t){return!rt(t,"__v_skip")&&Object.isExtensible(t)&&eh(t,"__v_skip",!0),t}const Ht=t=>mt(t)?sa(t):t,xl=t=>mt(t)?Eh(t):t;function Ut(t){return t?t.__v_isRef===!0:!1}function Sh(t){return yh(t,!1)}function Mh(t){return yh(t,!0)}function yh(t,e){return Ut(t)?t:new f_(t,e)}class f_{constructor(e,n){this.dep=new Fc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Qe(e),this._value=n?e:Ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||vn(e)||ur(e);e=i?e:Qe(e),Ri(e,n)&&(this._rawValue=e,this._value=i?e:Ht(e),this.dep.trigger())}}function Br(t){return Ut(t)?t.value:t}const d_={get:(t,e,n)=>e==="__v_raw"?t:Br(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ut(r)&&!Ut(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Th(t){return Or(t)?t:new Proxy(t,d_)}class h_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Fc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ms-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&dt!==this)return ah(this,!0),!0}get value(){const e=this.dep.track();return uh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function p_(t,e,n=!1){let i,r;return ze(t)?i=t:(i=t.get,r=t.set),new h_(i,r,n)}const eo={},ko=new WeakMap;let Ji;function m_(t,e=!1,n=Ji){if(n){let i=ko.get(n);i||ko.set(n,i=[]),i.push(t)}}function __(t,e,n=ht){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=_=>r?_:vn(_)||r===!1||r===0?bi(_,1):bi(_);let u,f,h,p,g=!1,E=!1;if(Ut(t)?(f=()=>t.value,g=vn(t)):Or(t)?(f=()=>c(t),g=!0):Oe(t)?(E=!0,g=t.some(_=>Or(_)||vn(_)),f=()=>t.map(_=>{if(Ut(_))return _.value;if(Or(_))return c(_);if(ze(_))return l?l(_,2):_()})):ze(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){Ui();try{h()}finally{Fi()}}const _=Ji;Ji=u;try{return l?l(t,3,[p]):t(p)}finally{Ji=_}}:f=Hn,e&&r){const _=f,N=r===!0?1/0:r;f=()=>bi(_(),N)}const m=Xm(),d=()=>{u.stop(),m&&m.active&&Pc(m.effects,u)};if(s&&e){const _=e;e=(...N)=>{_(...N),d()}}let M=E?new Array(t.length).fill(eo):eo;const y=_=>{if(!(!(u.flags&1)||!u.dirty&&!_))if(e){const N=u.run();if(r||g||(E?N.some((L,C)=>Ri(L,M[C])):Ri(N,M))){h&&h();const L=Ji;Ji=u;try{const C=[N,M===eo?void 0:E&&M[0]===eo?[]:M,p];l?l(e,3,C):e(...C),M=N}finally{Ji=L}}}else u.run()};return a&&a(y),u=new sh(f),u.scheduler=o?()=>o(y,!1):y,p=_=>m_(_,!1,u),h=u.onStop=()=>{const _=ko.get(u);if(_){if(l)l(_,4);else for(const N of _)N();ko.delete(u)}},e?i?y(!0):M=u.run():o?o(y.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function bi(t,e=1/0,n){if(e<=0||!mt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ut(t))bi(t.value,e,n);else if(Oe(t))for(let i=0;i<t.length;i++)bi(t[i],e,n);else if(jd(t)||Fr(t))t.forEach(i=>{bi(i,e,n)});else if(Qd(t)){for(const i in t)bi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&bi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hs(t,e,n,i){try{return i?t(...i):t()}catch(r){oa(r,e,n)}}function Ln(t,e,n,i){if(ze(t)){const r=Hs(t,e,n,i);return r&&Zd(r)&&r.catch(s=>{oa(s,e,n)}),r}if(Oe(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Ln(t[s],e,n,i));return r}}function oa(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ht;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){Ui(),Hs(s,null,10,[t,l,c]),Fi();return}}g_(t,n,r,i,o)}function g_(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const $t=[];let Un=-1;const kr=[];let Si=null,Lr=0;const bh=Promise.resolve();let Ho=null;function Ah(t){const e=Ho||bh;return t?e.then(this?t.bind(this):t):e}function v_(t){let e=Un+1,n=$t.length;for(;e<n;){const i=e+n>>>1,r=$t[i],s=Ts(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Hc(t){if(!(t.flags&1)){const e=Ts(t),n=$t[$t.length-1];!n||!(t.flags&2)&&e>=Ts(n)?$t.push(t):$t.splice(v_(e),0,t),t.flags|=1,Rh()}}function Rh(){Ho||(Ho=bh.then(wh))}function x_(t){Oe(t)?kr.push(...t):Si&&t.id===-1?Si.splice(Lr+1,0,t):t.flags&1||(kr.push(t),t.flags|=1),Rh()}function Ru(t,e,n=Un+1){for(;n<$t.length;n++){const i=$t[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;$t.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ch(t){if(kr.length){const e=[...new Set(kr)].sort((n,i)=>Ts(n)-Ts(i));if(kr.length=0,Si){Si.push(...e);return}for(Si=e,Lr=0;Lr<Si.length;Lr++){const n=Si[Lr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Si=null,Lr=0}}const Ts=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wh(t){try{for(Un=0;Un<$t.length;Un++){const e=$t[Un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Hs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Un<$t.length;Un++){const e=$t[Un];e&&(e.flags&=-2)}Un=-1,$t.length=0,Ch(),Ho=null,($t.length||kr.length)&&wh()}}let gn=null,Ph=null;function Vo(t){const e=gn;return gn=t,Ph=t&&t.type.__scopeId||null,e}function zo(t,e=gn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Bu(-1);const s=Vo(e);let o;try{o=t(...r)}finally{Vo(s),i._d&&Bu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function zi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ui(),Ln(l,n,8,[t.el,a,t,e]),Fi())}}const E_=Symbol("_vte"),Lh=t=>t.__isTeleport,Mi=Symbol("_leaveCb"),to=Symbol("_enterCb");function S_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vc(()=>{t.isMounted=!0}),kh(()=>{t.isUnmounting=!0}),t}const dn=[Function,Array],Ih={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dn,onEnter:dn,onAfterEnter:dn,onEnterCancelled:dn,onBeforeLeave:dn,onLeave:dn,onAfterLeave:dn,onLeaveCancelled:dn,onBeforeAppear:dn,onAppear:dn,onAfterAppear:dn,onAppearCancelled:dn},Dh=t=>{const e=t.subTree;return e.component?Dh(e.component):e},M_={name:"BaseTransition",props:Ih,setup(t,{slots:e}){const n=Gr(),i=S_();return()=>{const r=e.default&&Fh(e.default(),!0);if(!r||!r.length)return;const s=Nh(r),o=Qe(t),{mode:a}=o;if(i.isLeaving)return Aa(s);const l=Cu(s);if(!l)return Aa(s);let c=El(l,o,i,n,f=>c=f);l.type!==Kt&&bs(l,c);let u=n.subTree&&Cu(n.subTree);if(u&&u.type!==Kt&&!tr(l,u)&&Dh(n).type!==Kt){let f=El(u,o,i,n);if(bs(u,f),a==="out-in"&&l.type!==Kt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Aa(s);a==="in-out"&&l.type!==Kt?f.delayLeave=(h,p,g)=>{const E=Uh(i,u);E[String(u.key)]=u,h[Mi]=()=>{p(),h[Mi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Nh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Kt){e=n;break}}return e}const y_=M_;function Uh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function El(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:g,onLeaveCancelled:E,onBeforeAppear:m,onAppear:d,onAfterAppear:M,onAppearCancelled:y}=e,_=String(t.key),N=Uh(n,t),L=(A,T)=>{A&&Ln(A,i,9,T)},C=(A,T)=>{const B=T[1];L(A,T),Oe(A)?A.every(H=>H.length<=1)&&B():A.length<=1&&B()},k={mode:o,persisted:a,beforeEnter(A){let T=l;if(!n.isMounted)if(s)T=m||l;else return;A[Mi]&&A[Mi](!0);const B=N[_];B&&tr(t,B)&&B.el[Mi]&&B.el[Mi](),L(T,[A])},enter(A){let T=c,B=u,H=f;if(!n.isMounted)if(s)T=d||c,B=M||u,H=y||f;else return;let $=!1;const ee=A[to]=oe=>{$||($=!0,oe?L(H,[A]):L(B,[A]),k.delayedLeave&&k.delayedLeave(),A[to]=void 0)};T?C(T,[A,ee]):ee()},leave(A,T){const B=String(t.key);if(A[to]&&A[to](!0),n.isUnmounting)return T();L(h,[A]);let H=!1;const $=A[Mi]=ee=>{H||(H=!0,T(),ee?L(E,[A]):L(g,[A]),A[Mi]=void 0,N[B]===t&&delete N[B])};N[B]=t,p?C(p,[A,$]):$()},clone(A){const T=El(A,e,n,i,r);return r&&r(T),T}};return k}function Aa(t){if(aa(t))return t=Li(t),t.children=null,t}function Cu(t){if(!aa(t))return Lh(t.type)&&t.children?Nh(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ze(n.default))return n.default()}}function bs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,bs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fh(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===on?(o.patchFlag&128&&r++,i=i.concat(Fh(o.children,e,a))):(e||o.type!==Kt)&&i.push(a!=null?Li(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Vs(t,e){return ze(t)?It({name:t.name},e,{setup:t}):t}function Oh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Go(t,e,n,i,r=!1){if(Oe(t)){t.forEach((g,E)=>Go(g,e&&(Oe(e)?e[E]:e),n,i,r));return}if(gs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Go(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?$c(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ht?a.refs={}:a.refs,f=a.setupState,h=Qe(f),p=f===ht?()=>!1:g=>rt(h,g);if(c!=null&&c!==l&&(St(c)?(u[c]=null,p(c)&&(f[c]=null)):Ut(c)&&(c.value=null)),ze(l))Hs(l,a,12,[o,u]);else{const g=St(l),E=Ut(l);if(g||E){const m=()=>{if(t.f){const d=g?p(l)?f[l]:u[l]:l.value;r?Oe(d)&&Pc(d,s):Oe(d)?d.includes(s)||d.push(s):g?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,p(l)&&(f[l]=o)):E&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,rn(m,n)):m()}}}na().requestIdleCallback;na().cancelIdleCallback;const gs=t=>!!t.type.__asyncLoader,aa=t=>t.type.__isKeepAlive;function T_(t,e){Bh(t,"a",e)}function b_(t,e){Bh(t,"da",e)}function Bh(t,e,n=Nt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(la(e,i,n),n){let r=n.parent;for(;r&&r.parent;)aa(r.parent.vnode)&&A_(i,e,n,r),r=r.parent}}function A_(t,e,n,i){const r=la(e,t,i,!0);zc(()=>{Pc(i[e],r)},n)}function la(t,e,n=Nt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Ui();const a=Gs(n),l=Ln(e,n,t,o);return a(),Fi(),l});return i?r.unshift(s):r.push(s),s}}const fi=t=>(e,n=Nt)=>{(!Cs||t==="sp")&&la(t,(...i)=>e(...i),n)},R_=fi("bm"),Vc=fi("m"),C_=fi("bu"),w_=fi("u"),kh=fi("bum"),zc=fi("um"),P_=fi("sp"),L_=fi("rtg"),I_=fi("rtc");function D_(t,e=Nt){la("ec",t,e)}const N_="components";function As(t,e){return F_(N_,t,!0,e)||t}const U_=Symbol.for("v-ndc");function F_(t,e,n=!0,i=!1){const r=gn||Nt;if(r){const s=r.type;{const a=yg(s,!1);if(a&&(a===e||a===xn(e)||a===ta(xn(e))))return s}const o=wu(r[t]||s[t],e)||wu(r.appContext[t],e);return!o&&i?s:o}}function wu(t,e){return t&&(t[e]||t[xn(e)]||t[ta(xn(e))])}function O_(t,e,n,i){let r;const s=n,o=Oe(t);if(o||St(t)){const a=o&&Or(t);let l=!1;a&&(l=!vn(t),t=ra(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?Ht(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(mt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Sl=t=>t?op(t)?$c(t):Sl(t.parent):null,vs=It(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sl(t.parent),$root:t=>Sl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vh(t),$forceUpdate:t=>t.f||(t.f=()=>{Hc(t.update)}),$nextTick:t=>t.n||(t.n=Ah.bind(t.proxy)),$watch:t=>rg.bind(t)}),Ra=(t,e)=>t!==ht&&!t.__isScriptSetup&&rt(t,e),B_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ra(i,e))return o[e]=1,i[e];if(r!==ht&&rt(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&rt(c,e))return o[e]=3,s[e];if(n!==ht&&rt(n,e))return o[e]=4,n[e];Ml&&(o[e]=0)}}const u=vs[e];let f,h;if(u)return e==="$attrs"&&kt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ht&&rt(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,rt(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ra(r,e)?(r[e]=n,!0):i!==ht&&rt(i,e)?(i[e]=n,!0):rt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ht&&rt(t,o)||Ra(e,o)||(a=s[0])&&rt(a,o)||rt(i,o)||rt(vs,o)||rt(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:rt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pu(t){return Oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ml=!0;function k_(t){const e=Vh(t),n=t.proxy,i=t.ctx;Ml=!1,e.beforeCreate&&Lu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:E,deactivated:m,beforeDestroy:d,beforeUnmount:M,destroyed:y,unmounted:_,render:N,renderTracked:L,renderTriggered:C,errorCaptured:k,serverPrefetch:A,expose:T,inheritAttrs:B,components:H,directives:$,filters:ee}=e;if(c&&H_(c,i,null),o)for(const se in o){const Y=o[se];ze(Y)&&(i[se]=Y.bind(n))}if(r){const se=r.call(n,n);mt(se)&&(t.data=sa(se))}if(Ml=!0,s)for(const se in s){const Y=s[se],he=ze(Y)?Y.bind(n,n):ze(Y.get)?Y.get.bind(n,n):Hn,_e=!ze(Y)&&ze(Y.set)?Y.set.bind(n):Hn,Te=Vt({get:he,set:_e});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>Te.value,set:Le=>Te.value=Le})}if(a)for(const se in a)Hh(a[se],i,n,se);if(l){const se=ze(l)?l.call(n):l;Reflect.ownKeys(se).forEach(Y=>{Co(Y,se[Y])})}u&&Lu(u,t,"c");function Z(se,Y){Oe(Y)?Y.forEach(he=>se(he.bind(n))):Y&&se(Y.bind(n))}if(Z(R_,f),Z(Vc,h),Z(C_,p),Z(w_,g),Z(T_,E),Z(b_,m),Z(D_,k),Z(I_,L),Z(L_,C),Z(kh,M),Z(zc,_),Z(P_,A),Oe(T))if(T.length){const se=t.exposed||(t.exposed={});T.forEach(Y=>{Object.defineProperty(se,Y,{get:()=>n[Y],set:he=>n[Y]=he})})}else t.exposed||(t.exposed={});N&&t.render===Hn&&(t.render=N),B!=null&&(t.inheritAttrs=B),H&&(t.components=H),$&&(t.directives=$),A&&Oh(t)}function H_(t,e,n=Hn){Oe(t)&&(t=yl(t));for(const i in t){const r=t[i];let s;mt(r)?"default"in r?s=Vn(r.from||i,r.default,!0):s=Vn(r.from||i):s=Vn(r),Ut(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Lu(t,e,n){Ln(Oe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hh(t,e,n,i){let r=i.includes(".")?tp(n,i):()=>n[i];if(St(t)){const s=e[t];ze(s)&&lr(r,s)}else if(ze(t))lr(r,t.bind(n));else if(mt(t))if(Oe(t))t.forEach(s=>Hh(s,e,n,i));else{const s=ze(t.handler)?t.handler.bind(n):e[t.handler];ze(s)&&lr(r,s,t)}}function Vh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Wo(l,c,o,!0)),Wo(l,e,o)),mt(e)&&s.set(e,l),l}function Wo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Wo(t,s,n,!0),r&&r.forEach(o=>Wo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=V_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const V_={data:Iu,props:Du,emits:Du,methods:ds,computed:ds,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:ds,directives:ds,watch:G_,provide:Iu,inject:z_};function Iu(t,e){return e?t?function(){return It(ze(t)?t.call(this,this):t,ze(e)?e.call(this,this):e)}:e:t}function z_(t,e){return ds(yl(t),yl(e))}function yl(t){if(Oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Gt(t,e){return t?[...new Set([].concat(t,e))]:e}function ds(t,e){return t?It(Object.create(null),t,e):e}function Du(t,e){return t?Oe(t)&&Oe(e)?[...new Set([...t,...e])]:It(Object.create(null),Pu(t),Pu(e??{})):e}function G_(t,e){if(!t)return e;if(!e)return t;const n=It(Object.create(null),t);for(const i in e)n[i]=Gt(t[i],e[i]);return n}function zh(){return{app:null,config:{isNativeTag:Lm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let W_=0;function X_(t,e){return function(i,r=null){ze(i)||(i=It({},i)),r!=null&&!mt(r)&&(r=null);const s=zh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:W_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:bg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&ze(u.install)?(o.add(u),u.install(c,...f)):ze(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||Rt(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(p,u,h),l=!0,c._container=u,u.__vue_app__=c,$c(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ln(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Hr;Hr=c;try{return u()}finally{Hr=f}}};return c}}let Hr=null;function Co(t,e){if(Nt){let n=Nt.provides;const i=Nt.parent&&Nt.parent.provides;i===n&&(n=Nt.provides=Object.create(i)),n[t]=e}}function Vn(t,e,n=!1){const i=Nt||gn;if(i||Hr){const r=Hr?Hr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ze(e)?e.call(i&&i.proxy):e}}const Gh={},Wh=()=>Object.create(Gh),Xh=t=>Object.getPrototypeOf(t)===Gh;function $_(t,e,n,i=!1){const r={},s=Wh();t.propsDefaults=Object.create(null),$h(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:xh(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Y_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=Qe(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ca(t.emitsOptions,h))continue;const p=e[h];if(l)if(rt(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=xn(h);r[g]=Tl(l,a,g,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{$h(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!rt(e,f)&&((u=hr(f))===f||!rt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Tl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!rt(e,f))&&(delete s[f],c=!0)}c&&ni(t.attrs,"set","")}function $h(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ps(l))continue;const c=e[l];let u;r&&rt(r,u=xn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ca(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Qe(n),c=a||ht;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Tl(r,l,f,c[f],t,!rt(c,f))}}return o}function Tl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ze(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Gs(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===hr(n))&&(i=!0))}return i}const q_=new WeakMap;function Yh(t,e,n=!1){const i=n?q_:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!ze(t)){const u=f=>{l=!0;const[h,p]=Yh(f,e,!0);It(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return mt(t)&&i.set(t,Ur),Ur;if(Oe(s))for(let u=0;u<s.length;u++){const f=xn(s[u]);Nu(f)&&(o[f]=ht)}else if(s)for(const u in s){const f=xn(u);if(Nu(f)){const h=s[u],p=o[f]=Oe(h)||ze(h)?{type:h}:It({},h),g=p.type;let E=!1,m=!0;if(Oe(g))for(let d=0;d<g.length;++d){const M=g[d],y=ze(M)&&M.name;if(y==="Boolean"){E=!0;break}else y==="String"&&(m=!1)}else E=ze(g)&&g.name==="Boolean";p[0]=E,p[1]=m,(E||rt(p,"default"))&&a.push(f)}}const c=[o,a];return mt(t)&&i.set(t,c),c}function Nu(t){return t[0]!=="$"&&!ps(t)}const qh=t=>t[0]==="_"||t==="$stable",Gc=t=>Oe(t)?t.map(Fn):[Fn(t)],K_=(t,e,n)=>{if(e._n)return e;const i=zo((...r)=>Gc(e(...r)),n);return i._c=!1,i},Kh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(qh(r))continue;const s=t[r];if(ze(s))e[r]=K_(r,s,i);else if(s!=null){const o=Gc(s);e[r]=()=>o}}},jh=(t,e)=>{const n=Gc(e);t.slots.default=()=>n},Zh=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},j_=(t,e,n)=>{const i=t.slots=Wh();if(t.vnode.shapeFlag&32){const r=e._;r?(Zh(i,e,n),n&&eh(i,"_",r,!0)):Kh(e,i)}else e&&jh(t,e)},Z_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ht;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Zh(r,e,n):(s=!e.$stable,Kh(e,r)),o=e}else e&&(jh(t,e),o={default:1});if(s)for(const a in r)!qh(a)&&o[a]==null&&delete r[a]},rn=fg;function J_(t){return Q_(t)}function Q_(t,e){const n=na();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Hn,insertStaticContent:g}=t,E=(I,D,S,te=null,K=null,q=null,b=void 0,w=null,F=!!D.dynamicChildren)=>{if(I===D)return;I&&!tr(I,D)&&(te=V(I),Le(I,K,q,!0),I=null),D.patchFlag===-2&&(F=!1,D.dynamicChildren=null);const{type:x,ref:v,shapeFlag:U}=D;switch(x){case zs:m(I,D,S,te);break;case Kt:d(I,D,S,te);break;case wa:I==null&&M(D,S,te,b);break;case on:H(I,D,S,te,K,q,b,w,F);break;default:U&1?N(I,D,S,te,K,q,b,w,F):U&6?$(I,D,S,te,K,q,b,w,F):(U&64||U&128)&&x.process(I,D,S,te,K,q,b,w,F,ce)}v!=null&&K&&Go(v,I&&I.ref,q,D||I,!D)},m=(I,D,S,te)=>{if(I==null)i(D.el=a(D.children),S,te);else{const K=D.el=I.el;D.children!==I.children&&c(K,D.children)}},d=(I,D,S,te)=>{I==null?i(D.el=l(D.children||""),S,te):D.el=I.el},M=(I,D,S,te)=>{[I.el,I.anchor]=g(I.children,D,S,te,I.el,I.anchor)},y=({el:I,anchor:D},S,te)=>{let K;for(;I&&I!==D;)K=h(I),i(I,S,te),I=K;i(D,S,te)},_=({el:I,anchor:D})=>{let S;for(;I&&I!==D;)S=h(I),r(I),I=S;r(D)},N=(I,D,S,te,K,q,b,w,F)=>{D.type==="svg"?b="svg":D.type==="math"&&(b="mathml"),I==null?L(D,S,te,K,q,b,w,F):A(I,D,K,q,b,w,F)},L=(I,D,S,te,K,q,b,w)=>{let F,x;const{props:v,shapeFlag:U,transition:P,dirs:O}=I;if(F=I.el=o(I.type,q,v&&v.is,v),U&8?u(F,I.children):U&16&&k(I.children,F,null,te,K,Ca(I,q),b,w),O&&zi(I,null,te,"created"),C(F,I,I.scopeId,b,te),v){for(const ue in v)ue!=="value"&&!ps(ue)&&s(F,ue,null,v[ue],q,te);"value"in v&&s(F,"value",null,v.value,q),(x=v.onVnodeBeforeMount)&&Dn(x,te,I)}O&&zi(I,null,te,"beforeMount");const G=eg(K,P);G&&P.beforeEnter(F),i(F,D,S),((x=v&&v.onVnodeMounted)||G||O)&&rn(()=>{x&&Dn(x,te,I),G&&P.enter(F),O&&zi(I,null,te,"mounted")},K)},C=(I,D,S,te,K)=>{if(S&&p(I,S),te)for(let q=0;q<te.length;q++)p(I,te[q]);if(K){let q=K.subTree;if(D===q||ip(q.type)&&(q.ssContent===D||q.ssFallback===D)){const b=K.vnode;C(I,b,b.scopeId,b.slotScopeIds,K.parent)}}},k=(I,D,S,te,K,q,b,w,F=0)=>{for(let x=F;x<I.length;x++){const v=I[x]=w?yi(I[x]):Fn(I[x]);E(null,v,D,S,te,K,q,b,w)}},A=(I,D,S,te,K,q,b)=>{const w=D.el=I.el;let{patchFlag:F,dynamicChildren:x,dirs:v}=D;F|=I.patchFlag&16;const U=I.props||ht,P=D.props||ht;let O;if(S&&Gi(S,!1),(O=P.onVnodeBeforeUpdate)&&Dn(O,S,D,I),v&&zi(D,I,S,"beforeUpdate"),S&&Gi(S,!0),(U.innerHTML&&P.innerHTML==null||U.textContent&&P.textContent==null)&&u(w,""),x?T(I.dynamicChildren,x,w,S,te,Ca(D,K),q):b||Y(I,D,w,null,S,te,Ca(D,K),q,!1),F>0){if(F&16)B(w,U,P,S,K);else if(F&2&&U.class!==P.class&&s(w,"class",null,P.class,K),F&4&&s(w,"style",U.style,P.style,K),F&8){const G=D.dynamicProps;for(let ue=0;ue<G.length;ue++){const ae=G[ue],Re=U[ae],be=P[ae];(be!==Re||ae==="value")&&s(w,ae,Re,be,K,S)}}F&1&&I.children!==D.children&&u(w,D.children)}else!b&&x==null&&B(w,U,P,S,K);((O=P.onVnodeUpdated)||v)&&rn(()=>{O&&Dn(O,S,D,I),v&&zi(D,I,S,"updated")},te)},T=(I,D,S,te,K,q,b)=>{for(let w=0;w<D.length;w++){const F=I[w],x=D[w],v=F.el&&(F.type===on||!tr(F,x)||F.shapeFlag&70)?f(F.el):S;E(F,x,v,null,te,K,q,b,!0)}},B=(I,D,S,te,K)=>{if(D!==S){if(D!==ht)for(const q in D)!ps(q)&&!(q in S)&&s(I,q,D[q],null,K,te);for(const q in S){if(ps(q))continue;const b=S[q],w=D[q];b!==w&&q!=="value"&&s(I,q,w,b,K,te)}"value"in S&&s(I,"value",D.value,S.value,K)}},H=(I,D,S,te,K,q,b,w,F)=>{const x=D.el=I?I.el:a(""),v=D.anchor=I?I.anchor:a("");let{patchFlag:U,dynamicChildren:P,slotScopeIds:O}=D;O&&(w=w?w.concat(O):O),I==null?(i(x,S,te),i(v,S,te),k(D.children||[],S,v,K,q,b,w,F)):U>0&&U&64&&P&&I.dynamicChildren?(T(I.dynamicChildren,P,S,K,q,b,w),(D.key!=null||K&&D===K.subTree)&&Jh(I,D,!0)):Y(I,D,S,v,K,q,b,w,F)},$=(I,D,S,te,K,q,b,w,F)=>{D.slotScopeIds=w,I==null?D.shapeFlag&512?K.ctx.activate(D,S,te,b,F):ee(D,S,te,K,q,b,F):oe(I,D,F)},ee=(I,D,S,te,K,q,b)=>{const w=I.component=vg(I,te,K);if(aa(I)&&(w.ctx.renderer=ce),xg(w,!1,b),w.asyncDep){if(K&&K.registerDep(w,Z,b),!I.el){const F=w.subTree=Rt(Kt);d(null,F,D,S)}}else Z(w,I,D,S,K,q,b)},oe=(I,D,S)=>{const te=D.component=I.component;if(cg(I,D,S))if(te.asyncDep&&!te.asyncResolved){se(te,D,S);return}else te.next=D,te.update();else D.el=I.el,te.vnode=D},Z=(I,D,S,te,K,q,b)=>{const w=()=>{if(I.isMounted){let{next:U,bu:P,u:O,parent:G,vnode:ue}=I;{const xe=Qh(I);if(xe){U&&(U.el=ue.el,se(I,U,b)),xe.asyncDep.then(()=>{I.isUnmounted||w()});return}}let ae=U,Re;Gi(I,!1),U?(U.el=ue.el,se(I,U,b)):U=ue,P&&Sa(P),(Re=U.props&&U.props.onVnodeBeforeUpdate)&&Dn(Re,G,U,ue),Gi(I,!0);const be=Fu(I),de=I.subTree;I.subTree=be,E(de,be,f(de.el),V(de),I,K,q),U.el=be.el,ae===null&&ug(I,be.el),O&&rn(O,K),(Re=U.props&&U.props.onVnodeUpdated)&&rn(()=>Dn(Re,G,U,ue),K)}else{let U;const{el:P,props:O}=D,{bm:G,m:ue,parent:ae,root:Re,type:be}=I,de=gs(D);Gi(I,!1),G&&Sa(G),!de&&(U=O&&O.onVnodeBeforeMount)&&Dn(U,ae,D),Gi(I,!0);{Re.ce&&Re.ce._injectChildStyle(be);const xe=I.subTree=Fu(I);E(null,xe,S,te,I,K,q),D.el=xe.el}if(ue&&rn(ue,K),!de&&(U=O&&O.onVnodeMounted)){const xe=D;rn(()=>Dn(U,ae,xe),K)}(D.shapeFlag&256||ae&&gs(ae.vnode)&&ae.vnode.shapeFlag&256)&&I.a&&rn(I.a,K),I.isMounted=!0,D=S=te=null}};I.scope.on();const F=I.effect=new sh(w);I.scope.off();const x=I.update=F.run.bind(F),v=I.job=F.runIfDirty.bind(F);v.i=I,v.id=I.uid,F.scheduler=()=>Hc(v),Gi(I,!0),x()},se=(I,D,S)=>{D.component=I;const te=I.vnode.props;I.vnode=D,I.next=null,Y_(I,D.props,te,S),Z_(I,D.children,S),Ui(),Ru(I),Fi()},Y=(I,D,S,te,K,q,b,w,F=!1)=>{const x=I&&I.children,v=I?I.shapeFlag:0,U=D.children,{patchFlag:P,shapeFlag:O}=D;if(P>0){if(P&128){_e(x,U,S,te,K,q,b,w,F);return}else if(P&256){he(x,U,S,te,K,q,b,w,F);return}}O&8?(v&16&&ve(x,K,q),U!==x&&u(S,U)):v&16?O&16?_e(x,U,S,te,K,q,b,w,F):ve(x,K,q,!0):(v&8&&u(S,""),O&16&&k(U,S,te,K,q,b,w,F))},he=(I,D,S,te,K,q,b,w,F)=>{I=I||Ur,D=D||Ur;const x=I.length,v=D.length,U=Math.min(x,v);let P;for(P=0;P<U;P++){const O=D[P]=F?yi(D[P]):Fn(D[P]);E(I[P],O,S,null,K,q,b,w,F)}x>v?ve(I,K,q,!0,!1,U):k(D,S,te,K,q,b,w,F,U)},_e=(I,D,S,te,K,q,b,w,F)=>{let x=0;const v=D.length;let U=I.length-1,P=v-1;for(;x<=U&&x<=P;){const O=I[x],G=D[x]=F?yi(D[x]):Fn(D[x]);if(tr(O,G))E(O,G,S,null,K,q,b,w,F);else break;x++}for(;x<=U&&x<=P;){const O=I[U],G=D[P]=F?yi(D[P]):Fn(D[P]);if(tr(O,G))E(O,G,S,null,K,q,b,w,F);else break;U--,P--}if(x>U){if(x<=P){const O=P+1,G=O<v?D[O].el:te;for(;x<=P;)E(null,D[x]=F?yi(D[x]):Fn(D[x]),S,G,K,q,b,w,F),x++}}else if(x>P)for(;x<=U;)Le(I[x],K,q,!0),x++;else{const O=x,G=x,ue=new Map;for(x=G;x<=P;x++){const ge=D[x]=F?yi(D[x]):Fn(D[x]);ge.key!=null&&ue.set(ge.key,x)}let ae,Re=0;const be=P-G+1;let de=!1,xe=0;const De=new Array(be);for(x=0;x<be;x++)De[x]=0;for(x=O;x<=U;x++){const ge=I[x];if(Re>=be){Le(ge,K,q,!0);continue}let ke;if(ge.key!=null)ke=ue.get(ge.key);else for(ae=G;ae<=P;ae++)if(De[ae-G]===0&&tr(ge,D[ae])){ke=ae;break}ke===void 0?Le(ge,K,q,!0):(De[ke-G]=x+1,ke>=xe?xe=ke:de=!0,E(ge,D[ke],S,null,K,q,b,w,F),Re++)}const Fe=de?tg(De):Ur;for(ae=Fe.length-1,x=be-1;x>=0;x--){const ge=G+x,ke=D[ge],Ve=ge+1<v?D[ge+1].el:te;De[x]===0?E(null,ke,S,Ve,K,q,b,w,F):de&&(ae<0||x!==Fe[ae]?Te(ke,S,Ve,2):ae--)}}},Te=(I,D,S,te,K=null)=>{const{el:q,type:b,transition:w,children:F,shapeFlag:x}=I;if(x&6){Te(I.component.subTree,D,S,te);return}if(x&128){I.suspense.move(D,S,te);return}if(x&64){b.move(I,D,S,ce);return}if(b===on){i(q,D,S);for(let U=0;U<F.length;U++)Te(F[U],D,S,te);i(I.anchor,D,S);return}if(b===wa){y(I,D,S);return}if(te!==2&&x&1&&w)if(te===0)w.beforeEnter(q),i(q,D,S),rn(()=>w.enter(q),K);else{const{leave:U,delayLeave:P,afterLeave:O}=w,G=()=>i(q,D,S),ue=()=>{U(q,()=>{G(),O&&O()})};P?P(q,G,ue):ue()}else i(q,D,S)},Le=(I,D,S,te=!1,K=!1)=>{const{type:q,props:b,ref:w,children:F,dynamicChildren:x,shapeFlag:v,patchFlag:U,dirs:P,cacheIndex:O}=I;if(U===-2&&(K=!1),w!=null&&Go(w,null,S,I,!0),O!=null&&(D.renderCache[O]=void 0),v&256){D.ctx.deactivate(I);return}const G=v&1&&P,ue=!gs(I);let ae;if(ue&&(ae=b&&b.onVnodeBeforeUnmount)&&Dn(ae,D,I),v&6)me(I.component,S,te);else{if(v&128){I.suspense.unmount(S,te);return}G&&zi(I,null,D,"beforeUnmount"),v&64?I.type.remove(I,D,S,ce,te):x&&!x.hasOnce&&(q!==on||U>0&&U&64)?ve(x,D,S,!1,!0):(q===on&&U&384||!K&&v&16)&&ve(F,D,S),te&&$e(I)}(ue&&(ae=b&&b.onVnodeUnmounted)||G)&&rn(()=>{ae&&Dn(ae,D,I),G&&zi(I,null,D,"unmounted")},S)},$e=I=>{const{type:D,el:S,anchor:te,transition:K}=I;if(D===on){ie(S,te);return}if(D===wa){_(I);return}const q=()=>{r(S),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(I.shapeFlag&1&&K&&!K.persisted){const{leave:b,delayLeave:w}=K,F=()=>b(S,q);w?w(I.el,q,F):F()}else q()},ie=(I,D)=>{let S;for(;I!==D;)S=h(I),r(I),I=S;r(D)},me=(I,D,S)=>{const{bum:te,scope:K,job:q,subTree:b,um:w,m:F,a:x}=I;Uu(F),Uu(x),te&&Sa(te),K.stop(),q&&(q.flags|=8,Le(b,I,D,S)),w&&rn(w,D),rn(()=>{I.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},ve=(I,D,S,te=!1,K=!1,q=0)=>{for(let b=q;b<I.length;b++)Le(I[b],D,S,te,K)},V=I=>{if(I.shapeFlag&6)return V(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const D=h(I.anchor||I.el),S=D&&D[E_];return S?h(S):D};let re=!1;const le=(I,D,S)=>{I==null?D._vnode&&Le(D._vnode,null,null,!0):E(D._vnode||null,I,D,null,null,null,S),D._vnode=I,re||(re=!0,Ru(),Ch(),re=!1)},ce={p:E,um:Le,m:Te,r:$e,mt:ee,mc:k,pc:Y,pbc:T,n:V,o:t};return{render:le,hydrate:void 0,createApp:X_(le)}}function Ca({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Gi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function eg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Jh(t,e,n=!1){const i=t.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=yi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Jh(o,a)),a.type===zs&&(a.el=o.el)}}function tg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Qh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qh(e)}function Uu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ng=Symbol.for("v-scx"),ig=()=>Vn(ng);function lr(t,e,n){return ep(t,e,n)}function ep(t,e,n=ht){const{immediate:i,deep:r,flush:s,once:o}=n,a=It({},n),l=e&&i||!e&&s!=="post";let c;if(Cs){if(s==="sync"){const p=ig();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Hn,p.resume=Hn,p.pause=Hn,p}}const u=Nt;a.call=(p,g,E)=>Ln(p,u,g,E);let f=!1;s==="post"?a.scheduler=p=>{rn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():Hc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=__(t,e,a);return Cs&&(c?c.push(h):l&&h()),h}function rg(t,e,n){const i=this.proxy,r=St(t)?t.includes(".")?tp(i,t):()=>i[t]:t.bind(i,i);let s;ze(e)?s=e:(s=e.handler,n=e);const o=Gs(this),a=ep(r,s.bind(i),n);return o(),a}function tp(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const sg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xn(e)}Modifiers`]||t[`${hr(e)}Modifiers`];function og(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ht;let r=n;const s=e.startsWith("update:"),o=s&&sg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>St(u)?u.trim():u)),o.number&&(r=n.map(Fm)));let a,l=i[a=Ea(e)]||i[a=Ea(xn(e))];!l&&s&&(l=i[a=Ea(hr(e))]),l&&Ln(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ln(c,t,6,r)}}function np(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!ze(t)){const l=c=>{const u=np(c,e,!0);u&&(a=!0,It(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(mt(t)&&i.set(t,null),null):(Oe(s)?s.forEach(l=>o[l]=null):It(o,s),mt(t)&&i.set(t,o),o)}function ca(t,e){return!t||!Jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(t,e[0].toLowerCase()+e.slice(1))||rt(t,hr(e))||rt(t,e))}function Fu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:g,inheritAttrs:E}=t,m=Vo(t);let d,M;try{if(n.shapeFlag&4){const _=r||i,N=_;d=Fn(c.call(N,_,u,f,p,h,g)),M=a}else{const _=e;d=Fn(_.length>1?_(f,{attrs:a,slots:o,emit:l}):_(f,null)),M=e.props?a:ag(a)}}catch(_){xs.length=0,oa(_,t,1),d=Rt(Kt)}let y=d;if(M&&E!==!1){const _=Object.keys(M),{shapeFlag:N}=y;_.length&&N&7&&(s&&_.some(wc)&&(M=lg(M,s)),y=Li(y,M,!1,!0))}return n.dirs&&(y=Li(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&bs(y,n.transition),d=y,Vo(m),d}const ag=t=>{let e;for(const n in t)(n==="class"||n==="style"||Jo(n))&&((e||(e={}))[n]=t[n]);return e},lg=(t,e)=>{const n={};for(const i in t)(!wc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function cg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Ou(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!ca(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ou(i,o,c):!0:!!o;return!1}function Ou(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ca(n,s))return!0}return!1}function ug({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const ip=t=>t.__isSuspense;function fg(t,e){e&&e.pendingBranch?Oe(t)?e.effects.push(...t):e.effects.push(t):x_(t)}const on=Symbol.for("v-fgt"),zs=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),wa=Symbol.for("v-stc"),xs=[];let an=null;function jt(t=!1){xs.push(an=t?null:[])}function dg(){xs.pop(),an=xs[xs.length-1]||null}let Rs=1;function Bu(t,e=!1){Rs+=t,t<0&&an&&e&&(an.hasOnce=!0)}function rp(t){return t.dynamicChildren=Rs>0?an||Ur:null,dg(),Rs>0&&an&&an.push(t),t}function An(t,e,n,i,r,s){return rp(xt(t,e,n,i,r,s,!0))}function Wc(t,e,n,i,r){return rp(Rt(t,e,n,i,r,!0))}function Xo(t){return t?t.__v_isVNode===!0:!1}function tr(t,e){return t.type===e.type&&t.key===e.key}const sp=({key:t})=>t??null,wo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?St(t)||Ut(t)||ze(t)?{i:gn,r:t,k:e,f:!!n}:t:null);function xt(t,e=null,n=null,i=0,r=null,s=t===on?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sp(e),ref:e&&wo(e),scopeId:Ph,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:gn};return a?(Xc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=St(n)?8:16),Rs>0&&!o&&an&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&an.push(l),l}const Rt=hg;function hg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===U_)&&(t=Kt),Xo(t)){const a=Li(t,e,!0);return n&&Xc(a,n),Rs>0&&!s&&an&&(a.shapeFlag&6?an[an.indexOf(t)]=a:an.push(a)),a.patchFlag=-2,a}if(Tg(t)&&(t=t.__vccOpts),e){e=pg(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=Ic(a)),mt(l)&&(kc(l)&&!Oe(l)&&(l=It({},l)),e.style=ia(l))}const o=St(t)?1:ip(t)?128:Lh(t)?64:mt(t)?4:ze(t)?2:0;return xt(t,e,n,i,r,o,s,!0)}function pg(t){return t?kc(t)||Xh(t)?It({},t):t:null}function Li(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?mg(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&sp(c),ref:e&&e.ref?n&&s?Oe(s)?s.concat(wo(e)):[s,wo(e)]:wo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==on?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Li(t.ssContent),ssFallback:t.ssFallback&&Li(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&bs(u,l.clone(u)),u}function $o(t=" ",e=0){return Rt(zs,null,t,e)}function bl(t="",e=!1){return e?(jt(),Wc(Kt,null,t)):Rt(Kt,null,t)}function Fn(t){return t==null||typeof t=="boolean"?Rt(Kt):Oe(t)?Rt(on,null,t.slice()):Xo(t)?yi(t):Rt(zs,null,String(t))}function yi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Li(t)}function Xc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Oe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Xc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Xh(e)?e._ctx=gn:r===3&&gn&&(gn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:gn},n=32):(e=String(e),i&64?(n=16,e=[$o(e)]):n=8);t.children=e,t.shapeFlag|=n}function mg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ic([e.class,i.class]));else if(r==="style")e.style=ia([e.style,i.style]);else if(Jo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Oe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Dn(t,e,n,i=null){Ln(t,e,7,[n,i])}const _g=zh();let gg=0;function vg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||_g,s={uid:gg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yh(i,r),emitsOptions:np(i,r),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=og.bind(null,s),t.ce&&t.ce(s),s}let Nt=null;const Gr=()=>Nt||gn;let Yo,Al;{const t=na(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Yo=e("__VUE_INSTANCE_SETTERS__",n=>Nt=n),Al=e("__VUE_SSR_SETTERS__",n=>Cs=n)}const Gs=t=>{const e=Nt;return Yo(t),t.scope.on(),()=>{t.scope.off(),Yo(e)}},ku=()=>{Nt&&Nt.scope.off(),Yo(null)};function op(t){return t.vnode.shapeFlag&4}let Cs=!1;function xg(t,e=!1,n=!1){e&&Al(e);const{props:i,children:r}=t.vnode,s=op(t);$_(t,i,s,e),j_(t,r,n);const o=s?Eg(t,e):void 0;return e&&Al(!1),o}function Eg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,B_);const{setup:i}=n;if(i){Ui();const r=t.setupContext=i.length>1?Mg(t):null,s=Gs(t),o=Hs(i,t,0,[t.props,r]),a=Zd(o);if(Fi(),s(),(a||t.sp)&&!gs(t)&&Oh(t),a){if(o.then(ku,ku),e)return o.then(l=>{Hu(t,l)}).catch(l=>{oa(l,t,0)});t.asyncDep=o}else Hu(t,o)}else ap(t)}function Hu(t,e,n){ze(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:mt(e)&&(t.setupState=Th(e)),ap(t)}function ap(t,e,n){const i=t.type;t.render||(t.render=i.render||Hn);{const r=Gs(t);Ui();try{k_(t)}finally{Fi(),r()}}}const Sg={get(t,e){return kt(t,"get",""),t[e]}};function Mg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Sg),slots:t.slots,emit:t.emit,expose:e}}function $c(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Th(u_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vs)return vs[n](t)},has(e,n){return n in e||n in vs}})):t.proxy}function yg(t,e=!0){return ze(t)?t.displayName||t.name:t.name||e&&t.__name}function Tg(t){return ze(t)&&"__vccOpts"in t}const Vt=(t,e)=>p_(t,e,Cs);function Ws(t,e,n){const i=arguments.length;return i===2?mt(e)&&!Oe(e)?Xo(e)?Rt(t,null,[e]):Rt(t,e):Rt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Xo(n)&&(n=[n]),Rt(t,e,n))}const bg="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rl;const Vu=typeof window<"u"&&window.trustedTypes;if(Vu)try{Rl=Vu.createPolicy("vue",{createHTML:t=>t})}catch{}const lp=Rl?t=>Rl.createHTML(t):t=>t,Ag="http://www.w3.org/2000/svg",Rg="http://www.w3.org/1998/Math/MathML",ti=typeof document<"u"?document:null,zu=ti&&ti.createElement("template"),Cg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ti.createElementNS(Ag,t):e==="mathml"?ti.createElementNS(Rg,t):n?ti.createElement(t,{is:n}):ti.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ti.createTextNode(t),createComment:t=>ti.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ti.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{zu.innerHTML=lp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=zu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},di="transition",rs="animation",ws=Symbol("_vtc"),cp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},wg=It({},Ih,cp),Pg=t=>(t.displayName="Transition",t.props=wg,t),Lg=Pg((t,{slots:e})=>Ws(y_,Ig(t),e)),Wi=(t,e=[])=>{Oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Gu=t=>t?Oe(t)?t.some(e=>e.length>1):t.length>1:!1;function Ig(t){const e={};for(const H in t)H in cp||(e[H]=t[H]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=Dg(r),E=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:M,onEnterCancelled:y,onLeave:_,onLeaveCancelled:N,onBeforeAppear:L=d,onAppear:C=M,onAppearCancelled:k=y}=e,A=(H,$,ee,oe)=>{H._enterCancelled=oe,Xi(H,$?u:a),Xi(H,$?c:o),ee&&ee()},T=(H,$)=>{H._isLeaving=!1,Xi(H,f),Xi(H,p),Xi(H,h),$&&$()},B=H=>($,ee)=>{const oe=H?C:M,Z=()=>A($,H,ee);Wi(oe,[$,Z]),Wu(()=>{Xi($,H?l:s),$n($,H?u:a),Gu(oe)||Xu($,i,E,Z)})};return It(e,{onBeforeEnter(H){Wi(d,[H]),$n(H,s),$n(H,o)},onBeforeAppear(H){Wi(L,[H]),$n(H,l),$n(H,c)},onEnter:B(!1),onAppear:B(!0),onLeave(H,$){H._isLeaving=!0;const ee=()=>T(H,$);$n(H,f),H._enterCancelled?($n(H,h),qu()):(qu(),$n(H,h)),Wu(()=>{H._isLeaving&&(Xi(H,f),$n(H,p),Gu(_)||Xu(H,i,m,ee))}),Wi(_,[H,ee])},onEnterCancelled(H){A(H,!1,void 0,!0),Wi(y,[H])},onAppearCancelled(H){A(H,!0,void 0,!0),Wi(k,[H])},onLeaveCancelled(H){T(H),Wi(N,[H])}})}function Dg(t){if(t==null)return null;if(mt(t))return[Pa(t.enter),Pa(t.leave)];{const e=Pa(t);return[e,e]}}function Pa(t){return Om(t)}function $n(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ws]||(t[ws]=new Set)).add(e)}function Xi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[ws];n&&(n.delete(e),n.size||(t[ws]=void 0))}function Wu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ng=0;function Xu(t,e,n,i){const r=t._endId=++Ng,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Ug(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),s()},h=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function Ug(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${di}Delay`),s=i(`${di}Duration`),o=$u(r,s),a=i(`${rs}Delay`),l=i(`${rs}Duration`),c=$u(a,l);let u=null,f=0,h=0;e===di?o>0&&(u=di,f=o,h=s.length):e===rs?c>0&&(u=rs,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?di:rs:null,h=u?u===di?s.length:l.length:0);const p=u===di&&/\b(transform|all)(,|$)/.test(i(`${di}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function $u(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Yu(n)+Yu(t[i])))}function Yu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function qu(){return document.body.offsetHeight}function Fg(t,e,n){const i=t[ws];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ku=Symbol("_vod"),Og=Symbol("_vsh"),Bg=Symbol(""),kg=/(^|;)\s*display\s*:/;function Hg(t,e,n){const i=t.style,r=St(n);let s=!1;if(n&&!r){if(e)if(St(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Po(i,a,"")}else for(const o in e)n[o]==null&&Po(i,o,"");for(const o in n)o==="display"&&(s=!0),Po(i,o,n[o])}else if(r){if(e!==n){const o=i[Bg];o&&(n+=";"+o),i.cssText=n,s=kg.test(n)}}else e&&t.removeAttribute("style");Ku in t&&(t[Ku]=s?i.display:"",t[Og]&&(i.display="none"))}const ju=/\s*!important$/;function Po(t,e,n){if(Oe(n))n.forEach(i=>Po(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Vg(t,e);ju.test(n)?t.setProperty(hr(i),n.replace(ju,""),"important"):t[i]=n}}const Zu=["Webkit","Moz","ms"],La={};function Vg(t,e){const n=La[e];if(n)return n;let i=xn(e);if(i!=="filter"&&i in t)return La[e]=i;i=ta(i);for(let r=0;r<Zu.length;r++){const s=Zu[r]+i;if(s in t)return La[e]=s}return e}const Ju="http://www.w3.org/1999/xlink";function Qu(t,e,n,i,r,s=Gm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ju,e.slice(6,e.length)):t.setAttributeNS(Ju,e,n):n==null||s&&!th(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Ni(n)?String(n):n)}function ef(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?lp(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=th(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function zg(t,e,n,i){t.addEventListener(e,n,i)}function Gg(t,e,n,i){t.removeEventListener(e,n,i)}const tf=Symbol("_vei");function Wg(t,e,n,i,r=null){const s=t[tf]||(t[tf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Xg(e);if(i){const c=s[e]=qg(i,r);zg(t,a,c,l)}else o&&(Gg(t,a,o,l),s[e]=void 0)}}const nf=/(?:Once|Passive|Capture)$/;function Xg(t){let e;if(nf.test(t)){e={};let i;for(;i=t.match(nf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):hr(t.slice(2)),e]}let Ia=0;const $g=Promise.resolve(),Yg=()=>Ia||($g.then(()=>Ia=0),Ia=Date.now());function qg(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ln(Kg(i,n.value),e,5,[i])};return n.value=t,n.attached=Yg(),n}function Kg(t,e){if(Oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const rf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,jg=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?Fg(t,i,o):e==="style"?Hg(t,n,i):Jo(e)?wc(e)||Wg(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zg(t,e,i,o))?(ef(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qu(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!St(i))?ef(t,xn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Qu(t,e,i,o))};function Zg(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&rf(e)&&ze(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return rf(e)&&St(n)?!1:e in t}const Jg=["ctrl","shift","alt","meta"],Qg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Jg.some(n=>t[`${n}Key`]&&!e.includes(n))},ev=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=Qg[e[o]];if(a&&a(r,e))return}return t(r,...s)})},tv=It({patchProp:jg},Cg);let sf;function nv(){return sf||(sf=J_(tv))}const iv=(...t)=>{const e=nv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=sv(i);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,rv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function rv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sv(t){return St(t)?document.querySelector(t):t}const ov="/macabre-iconography/assets/background-D2Pia1Am.mp4",Xs=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},av={name:"App"};function lv(t,e,n,i,r,s){const o=As("router-link"),a=As("router-view");return jt(),An("div",null,[e[2]||(e[2]=xt("video",{class:"video-background",autoplay:"",muted:"",loop:""},[xt("source",{src:ov,type:"video/mp4"})],-1)),xt("nav",null,[Rt(o,{to:"/"},{default:zo(()=>e[0]||(e[0]=[$o("Home")])),_:1}),Rt(o,{to:"/about"},{default:zo(()=>e[1]||(e[1]=[$o("About")])),_:1})]),Rt(a)])}const cv=Xs(av,[["render",lv]]);/*!
  * shared v11.1.3
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const qo=typeof window<"u",Oi=(t,e=!1)=>e?Symbol.for(t):Symbol(t),uv=(t,e,n)=>fv({l:t,k:e,s:n}),fv=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Tt=t=>typeof t=="number"&&isFinite(t),dv=t=>Yc(t)==="[object Date]",Wr=t=>Yc(t)==="[object RegExp]",ua=t=>Ye(t)&&Object.keys(t).length===0,Ct=Object.assign,hv=Object.create,ct=(t=null)=>hv(t);let of;const rr=()=>of||(of=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:ct());function af(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const pv=Object.prototype.hasOwnProperty;function Rn(t,e){return pv.call(t,e)}const bt=Array.isArray,pt=t=>typeof t=="function",Ce=t=>typeof t=="string",Je=t=>typeof t=="boolean",et=t=>t!==null&&typeof t=="object",mv=t=>et(t)&&pt(t.then)&&pt(t.catch),up=Object.prototype.toString,Yc=t=>up.call(t),Ye=t=>Yc(t)==="[object Object]",_v=t=>t==null?"":bt(t)||Ye(t)&&t.toString===up?JSON.stringify(t,null,2):String(t);function qc(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}function gv(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const no=t=>!et(t)||bt(t);function Lo(t,e){if(no(t)||no(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(et(i[s])&&!et(r[s])&&(r[s]=Array.isArray(i[s])?[]:ct()),no(r[s])||no(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v11.1.3
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function vv(t,e,n){return{line:t,column:e,offset:n}}function Cl(t,e,n){return{start:t,end:e}}const ot={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},xv=17;function fa(t,e,n={}){const{domain:i,messages:r,args:s}=n,o=t,a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=i,a}function Ev(t){throw t}const Yn=" ",Sv="\r",Xt=`
`,Mv="\u2028",yv="\u2029";function Tv(t){const e=t;let n=0,i=1,r=1,s=0;const o=C=>e[C]===Sv&&e[C+1]===Xt,a=C=>e[C]===Xt,l=C=>e[C]===yv,c=C=>e[C]===Mv,u=C=>o(C)||a(C)||l(C)||c(C),f=()=>n,h=()=>i,p=()=>r,g=()=>s,E=C=>o(C)||l(C)||c(C)?Xt:e[C],m=()=>E(n),d=()=>E(n+s);function M(){return s=0,u(n)&&(i++,r=0),o(n)&&n++,n++,r++,e[n]}function y(){return o(n+s)&&s++,s++,e[n+s]}function _(){n=0,i=1,r=1,s=0}function N(C=0){s=C}function L(){const C=n+s;for(;C!==n;)M();s=0}return{index:f,line:h,column:p,peekOffset:g,charAt:E,currentChar:m,currentPeek:d,next:M,peek:y,reset:_,resetPeek:N,skipToPeek:L}}const hi=void 0,bv=".",lf="'",Av="tokenizer";function Rv(t,e={}){const n=e.location!==!1,i=Tv(t),r=()=>i.index(),s=()=>vv(i.line(),i.column(),i.index()),o=s(),a=r(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(b,w,F,...x){const v=c();if(w.column+=F,w.offset+=F,u){const U=n?Cl(v.startLoc,w):null,P=fa(b,U,{domain:Av,args:x});u(P)}}function h(b,w,F){b.endLoc=s(),b.currentType=w;const x={type:w};return n&&(x.loc=Cl(b.startLoc,b.endLoc)),F!=null&&(x.value=F),x}const p=b=>h(b,13);function g(b,w){return b.currentChar()===w?(b.next(),w):(f(ot.EXPECTED_TOKEN,s(),0,w),"")}function E(b){let w="";for(;b.currentPeek()===Yn||b.currentPeek()===Xt;)w+=b.currentPeek(),b.peek();return w}function m(b){const w=E(b);return b.skipToPeek(),w}function d(b){if(b===hi)return!1;const w=b.charCodeAt(0);return w>=97&&w<=122||w>=65&&w<=90||w===95}function M(b){if(b===hi)return!1;const w=b.charCodeAt(0);return w>=48&&w<=57}function y(b,w){const{currentType:F}=w;if(F!==2)return!1;E(b);const x=d(b.currentPeek());return b.resetPeek(),x}function _(b,w){const{currentType:F}=w;if(F!==2)return!1;E(b);const x=b.currentPeek()==="-"?b.peek():b.currentPeek(),v=M(x);return b.resetPeek(),v}function N(b,w){const{currentType:F}=w;if(F!==2)return!1;E(b);const x=b.currentPeek()===lf;return b.resetPeek(),x}function L(b,w){const{currentType:F}=w;if(F!==7)return!1;E(b);const x=b.currentPeek()===".";return b.resetPeek(),x}function C(b,w){const{currentType:F}=w;if(F!==8)return!1;E(b);const x=d(b.currentPeek());return b.resetPeek(),x}function k(b,w){const{currentType:F}=w;if(!(F===7||F===11))return!1;E(b);const x=b.currentPeek()===":";return b.resetPeek(),x}function A(b,w){const{currentType:F}=w;if(F!==9)return!1;const x=()=>{const U=b.currentPeek();return U==="{"?d(b.peek()):U==="@"||U==="|"||U===":"||U==="."||U===Yn||!U?!1:U===Xt?(b.peek(),x()):B(b,!1)},v=x();return b.resetPeek(),v}function T(b){E(b);const w=b.currentPeek()==="|";return b.resetPeek(),w}function B(b,w=!0){const F=(v=!1,U="")=>{const P=b.currentPeek();return P==="{"||P==="@"||!P?v:P==="|"?!(U===Yn||U===Xt):P===Yn?(b.peek(),F(!0,Yn)):P===Xt?(b.peek(),F(!0,Xt)):!0},x=F();return w&&b.resetPeek(),x}function H(b,w){const F=b.currentChar();return F===hi?hi:w(F)?(b.next(),F):null}function $(b){const w=b.charCodeAt(0);return w>=97&&w<=122||w>=65&&w<=90||w>=48&&w<=57||w===95||w===36}function ee(b){return H(b,$)}function oe(b){const w=b.charCodeAt(0);return w>=97&&w<=122||w>=65&&w<=90||w>=48&&w<=57||w===95||w===36||w===45}function Z(b){return H(b,oe)}function se(b){const w=b.charCodeAt(0);return w>=48&&w<=57}function Y(b){return H(b,se)}function he(b){const w=b.charCodeAt(0);return w>=48&&w<=57||w>=65&&w<=70||w>=97&&w<=102}function _e(b){return H(b,he)}function Te(b){let w="",F="";for(;w=Y(b);)F+=w;return F}function Le(b){let w="";for(;;){const F=b.currentChar();if(F==="{"||F==="}"||F==="@"||F==="|"||!F)break;if(F===Yn||F===Xt)if(B(b))w+=F,b.next();else{if(T(b))break;w+=F,b.next()}else w+=F,b.next()}return w}function $e(b){m(b);let w="",F="";for(;w=Z(b);)F+=w;return b.currentChar()===hi&&f(ot.UNTERMINATED_CLOSING_BRACE,s(),0),F}function ie(b){m(b);let w="";return b.currentChar()==="-"?(b.next(),w+=`-${Te(b)}`):w+=Te(b),b.currentChar()===hi&&f(ot.UNTERMINATED_CLOSING_BRACE,s(),0),w}function me(b){return b!==lf&&b!==Xt}function ve(b){m(b),g(b,"'");let w="",F="";for(;w=H(b,me);)w==="\\"?F+=V(b):F+=w;const x=b.currentChar();return x===Xt||x===hi?(f(ot.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),x===Xt&&(b.next(),g(b,"'")),F):(g(b,"'"),F)}function V(b){const w=b.currentChar();switch(w){case"\\":case"'":return b.next(),`\\${w}`;case"u":return re(b,w,4);case"U":return re(b,w,6);default:return f(ot.UNKNOWN_ESCAPE_SEQUENCE,s(),0,w),""}}function re(b,w,F){g(b,w);let x="";for(let v=0;v<F;v++){const U=_e(b);if(!U){f(ot.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${w}${x}${b.currentChar()}`);break}x+=U}return`\\${w}${x}`}function le(b){return b!=="{"&&b!=="}"&&b!==Yn&&b!==Xt}function ce(b){m(b);let w="",F="";for(;w=H(b,le);)F+=w;return F}function Ie(b){let w="",F="";for(;w=ee(b);)F+=w;return F}function I(b){const w=F=>{const x=b.currentChar();return x==="{"||x==="@"||x==="|"||x==="("||x===")"||!x||x===Yn?F:(F+=x,b.next(),w(F))};return w("")}function D(b){m(b);const w=g(b,"|");return m(b),w}function S(b,w){let F=null;switch(b.currentChar()){case"{":return w.braceNest>=1&&f(ot.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),b.next(),F=h(w,2,"{"),m(b),w.braceNest++,F;case"}":return w.braceNest>0&&w.currentType===2&&f(ot.EMPTY_PLACEHOLDER,s(),0),b.next(),F=h(w,3,"}"),w.braceNest--,w.braceNest>0&&m(b),w.inLinked&&w.braceNest===0&&(w.inLinked=!1),F;case"@":return w.braceNest>0&&f(ot.UNTERMINATED_CLOSING_BRACE,s(),0),F=te(b,w)||p(w),w.braceNest=0,F;default:{let v=!0,U=!0,P=!0;if(T(b))return w.braceNest>0&&f(ot.UNTERMINATED_CLOSING_BRACE,s(),0),F=h(w,1,D(b)),w.braceNest=0,w.inLinked=!1,F;if(w.braceNest>0&&(w.currentType===4||w.currentType===5||w.currentType===6))return f(ot.UNTERMINATED_CLOSING_BRACE,s(),0),w.braceNest=0,K(b,w);if(v=y(b,w))return F=h(w,4,$e(b)),m(b),F;if(U=_(b,w))return F=h(w,5,ie(b)),m(b),F;if(P=N(b,w))return F=h(w,6,ve(b)),m(b),F;if(!v&&!U&&!P)return F=h(w,12,ce(b)),f(ot.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,F.value),m(b),F;break}}return F}function te(b,w){const{currentType:F}=w;let x=null;const v=b.currentChar();switch((F===7||F===8||F===11||F===9)&&(v===Xt||v===Yn)&&f(ot.INVALID_LINKED_FORMAT,s(),0),v){case"@":return b.next(),x=h(w,7,"@"),w.inLinked=!0,x;case".":return m(b),b.next(),h(w,8,".");case":":return m(b),b.next(),h(w,9,":");default:return T(b)?(x=h(w,1,D(b)),w.braceNest=0,w.inLinked=!1,x):L(b,w)||k(b,w)?(m(b),te(b,w)):C(b,w)?(m(b),h(w,11,Ie(b))):A(b,w)?(m(b),v==="{"?S(b,w)||x:h(w,10,I(b))):(F===7&&f(ot.INVALID_LINKED_FORMAT,s(),0),w.braceNest=0,w.inLinked=!1,K(b,w))}}function K(b,w){let F={type:13};if(w.braceNest>0)return S(b,w)||p(w);if(w.inLinked)return te(b,w)||p(w);switch(b.currentChar()){case"{":return S(b,w)||p(w);case"}":return f(ot.UNBALANCED_CLOSING_BRACE,s(),0),b.next(),h(w,3,"}");case"@":return te(b,w)||p(w);default:{if(T(b))return F=h(w,1,D(b)),w.braceNest=0,w.inLinked=!1,F;if(B(b))return h(w,0,Le(b));break}}return F}function q(){const{currentType:b,offset:w,startLoc:F,endLoc:x}=l;return l.lastType=b,l.lastOffset=w,l.lastStartLoc=F,l.lastEndLoc=x,l.offset=r(),l.startLoc=s(),i.currentChar()===hi?h(l,13):K(i,l)}return{nextToken:q,currentOffset:r,currentPosition:s,context:c}}const Cv="parser",wv=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function Pv(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function Lv(t={}){const e=t.location!==!1,{onError:n}=t;function i(d,M,y,_,...N){const L=d.currentPosition();if(L.offset+=_,L.column+=_,n){const C=e?Cl(y,L):null,k=fa(M,C,{domain:Cv,args:N});n(k)}}function r(d,M,y){const _={type:d};return e&&(_.start=M,_.end=M,_.loc={start:y,end:y}),_}function s(d,M,y,_){e&&(d.end=M,d.loc&&(d.loc.end=y))}function o(d,M){const y=d.context(),_=r(3,y.offset,y.startLoc);return _.value=M,s(_,d.currentOffset(),d.currentPosition()),_}function a(d,M){const y=d.context(),{lastOffset:_,lastStartLoc:N}=y,L=r(5,_,N);return L.index=parseInt(M,10),d.nextToken(),s(L,d.currentOffset(),d.currentPosition()),L}function l(d,M){const y=d.context(),{lastOffset:_,lastStartLoc:N}=y,L=r(4,_,N);return L.key=M,d.nextToken(),s(L,d.currentOffset(),d.currentPosition()),L}function c(d,M){const y=d.context(),{lastOffset:_,lastStartLoc:N}=y,L=r(9,_,N);return L.value=M.replace(wv,Pv),d.nextToken(),s(L,d.currentOffset(),d.currentPosition()),L}function u(d){const M=d.nextToken(),y=d.context(),{lastOffset:_,lastStartLoc:N}=y,L=r(8,_,N);return M.type!==11?(i(d,ot.UNEXPECTED_EMPTY_LINKED_MODIFIER,y.lastStartLoc,0),L.value="",s(L,_,N),{nextConsumeToken:M,node:L}):(M.value==null&&i(d,ot.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Nn(M)),L.value=M.value||"",s(L,d.currentOffset(),d.currentPosition()),{node:L})}function f(d,M){const y=d.context(),_=r(7,y.offset,y.startLoc);return _.value=M,s(_,d.currentOffset(),d.currentPosition()),_}function h(d){const M=d.context(),y=r(6,M.offset,M.startLoc);let _=d.nextToken();if(_.type===8){const N=u(d);y.modifier=N.node,_=N.nextConsumeToken||d.nextToken()}switch(_.type!==9&&i(d,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Nn(_)),_=d.nextToken(),_.type===2&&(_=d.nextToken()),_.type){case 10:_.value==null&&i(d,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Nn(_)),y.key=f(d,_.value||"");break;case 4:_.value==null&&i(d,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Nn(_)),y.key=l(d,_.value||"");break;case 5:_.value==null&&i(d,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Nn(_)),y.key=a(d,_.value||"");break;case 6:_.value==null&&i(d,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Nn(_)),y.key=c(d,_.value||"");break;default:{i(d,ot.UNEXPECTED_EMPTY_LINKED_KEY,M.lastStartLoc,0);const N=d.context(),L=r(7,N.offset,N.startLoc);return L.value="",s(L,N.offset,N.startLoc),y.key=L,s(y,N.offset,N.startLoc),{nextConsumeToken:_,node:y}}}return s(y,d.currentOffset(),d.currentPosition()),{node:y}}function p(d){const M=d.context(),y=M.currentType===1?d.currentOffset():M.offset,_=M.currentType===1?M.endLoc:M.startLoc,N=r(2,y,_);N.items=[];let L=null;do{const A=L||d.nextToken();switch(L=null,A.type){case 0:A.value==null&&i(d,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Nn(A)),N.items.push(o(d,A.value||""));break;case 5:A.value==null&&i(d,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Nn(A)),N.items.push(a(d,A.value||""));break;case 4:A.value==null&&i(d,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Nn(A)),N.items.push(l(d,A.value||""));break;case 6:A.value==null&&i(d,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Nn(A)),N.items.push(c(d,A.value||""));break;case 7:{const T=h(d);N.items.push(T.node),L=T.nextConsumeToken||null;break}}}while(M.currentType!==13&&M.currentType!==1);const C=M.currentType===1?M.lastOffset:d.currentOffset(),k=M.currentType===1?M.lastEndLoc:d.currentPosition();return s(N,C,k),N}function g(d,M,y,_){const N=d.context();let L=_.items.length===0;const C=r(1,M,y);C.cases=[],C.cases.push(_);do{const k=p(d);L||(L=k.items.length===0),C.cases.push(k)}while(N.currentType!==13);return L&&i(d,ot.MUST_HAVE_MESSAGES_IN_PLURAL,y,0),s(C,d.currentOffset(),d.currentPosition()),C}function E(d){const M=d.context(),{offset:y,startLoc:_}=M,N=p(d);return M.currentType===13?N:g(d,y,_,N)}function m(d){const M=Rv(d,Ct({},t)),y=M.context(),_=r(0,y.offset,y.startLoc);return e&&_.loc&&(_.loc.source=d),_.body=E(M),t.onCacheKey&&(_.cacheKey=t.onCacheKey(d)),y.currentType!==13&&i(M,ot.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,d[y.offset]||""),s(_,M.currentOffset(),M.currentPosition()),_}return{parse:m}}function Nn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Iv(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function cf(t,e){for(let n=0;n<t.length;n++)Kc(t[n],e)}function Kc(t,e){switch(t.type){case 1:cf(t.cases,e),e.helper("plural");break;case 2:cf(t.items,e);break;case 6:{Kc(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Dv(t,e={}){const n=Iv(t);n.helper("normalize"),t.body&&Kc(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function Nv(t){const e=t.body;return e.type===2?uf(e):e.cases.forEach(n=>uf(n)),t}function uf(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=qc(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}function Ir(t){switch(t.t=t.type,t.type){case 0:{const e=t;Ir(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)Ir(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)Ir(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Ir(e.key),e.k=e.key,delete e.key,e.modifier&&(Ir(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function Uv(t,e){const{filename:n,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&t.loc&&(o.source=t.loc.source);const a=()=>o;function l(E,m){o.code+=E}function c(E,m=!0){const d=m?i:"";l(r?d+"  ".repeat(E):d)}function u(E=!0){const m=++o.indentLevel;E&&c(m)}function f(E=!0){const m=--o.indentLevel;E&&c(m)}function h(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:h,helper:E=>`_${E}`,needIndent:()=>o.needIndent}}function Fv(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),Xr(t,e.key),e.modifier?(t.push(", "),Xr(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function Ov(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(Xr(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function Bv(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(Xr(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function kv(t,e){e.body?Xr(t,e.body):t.push("null")}function Xr(t,e){const{helper:n}=t;switch(e.type){case 0:kv(t,e);break;case 1:Bv(t,e);break;case 2:Ov(t,e);break;case 6:Fv(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const Hv=(t,e={})=>{const n=Ce(e.mode)?e.mode:"normal",i=Ce(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,s=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],a=Uv(t,{filename:i,breakLineCode:r,needIndent:s});a.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(s),o.length>0&&(a.push(`const { ${qc(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),Xr(a,t),a.deindent(s),a.push("}"),delete t.helpers;const{code:l,map:c}=a.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function Vv(t,e={}){const n=Ct({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,a=Lv(n).parse(t);return i?(s&&Nv(a),r&&Ir(a),{ast:a,code:""}):(Dv(a,n),Hv(a,n))}/*!
  * core-base v11.1.3
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function zv(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(rr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(rr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function zn(t){return et(t)&&jc(t)===0&&(Rn(t,"b")||Rn(t,"body"))}const fp=["b","body"];function Gv(t){return Bi(t,fp)}const dp=["c","cases"];function Wv(t){return Bi(t,dp,[])}const hp=["s","static"];function Xv(t){return Bi(t,hp)}const pp=["i","items"];function $v(t){return Bi(t,pp,[])}const mp=["t","type"];function jc(t){return Bi(t,mp)}const _p=["v","value"];function io(t,e){const n=Bi(t,_p);if(n!=null)return n;throw Ps(e)}const gp=["m","modifier"];function Yv(t){return Bi(t,gp)}const vp=["k","key"];function qv(t){const e=Bi(t,vp);if(e)return e;throw Ps(6)}function Bi(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(Rn(t,r)&&t[r]!=null)return t[r]}return n}const xp=[...fp,...dp,...hp,...pp,...vp,...gp,..._p,...mp];function Ps(t){return new Error(`unhandled node type: ${t}`)}function Da(t){return n=>Kv(n,t)}function Kv(t,e){const n=Gv(e);if(n==null)throw Ps(0);if(jc(n)===1){const s=Wv(n);return t.plural(s.reduce((o,a)=>[...o,ff(t,a)],[]))}else return ff(t,n)}function ff(t,e){const n=Xv(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=$v(e).reduce((r,s)=>[...r,wl(t,s)],[]);return t.normalize(i)}}function wl(t,e){const n=jc(e);switch(n){case 3:return io(e,n);case 9:return io(e,n);case 4:{const i=e;if(Rn(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(Rn(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw Ps(n)}case 5:{const i=e;if(Rn(i,"i")&&Tt(i.i))return t.interpolate(t.list(i.i));if(Rn(i,"index")&&Tt(i.index))return t.interpolate(t.list(i.index));throw Ps(n)}case 6:{const i=e,r=Yv(i),s=qv(i);return t.linked(wl(t,s),r?wl(t,r):void 0,t.type)}case 7:return io(e,n);case 8:return io(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const jv=t=>t;let ro=ct();function Zv(t,e={}){let n=!1;const i=e.onError||Ev;return e.onError=r=>{n=!0,i(r)},{...Vv(t,e),detectError:n}}function Jv(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Ce(t)){Je(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||jv)(t),r=ro[i];if(r)return r;const{ast:s,detectError:o}=Zv(t,{...e,location:!1,jit:!0}),a=Da(s);return o?a:ro[i]=a}else{const n=t.cacheKey;if(n){const i=ro[n];return i||(ro[n]=Da(t))}else return Da(t)}}let Ls=null;function Qv(t){Ls=t}function e0(t,e,n){Ls&&Ls.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const t0=n0("function:translate");function n0(t){return e=>Ls&&Ls.emit(t,e)}const ri={INVALID_ARGUMENT:xv,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},i0=24;function si(t){return fa(t,null,void 0)}function Zc(t,e){return e.locale!=null?df(e.locale):df(t.locale)}let Na;function df(t){if(Ce(t))return t;if(pt(t)){if(t.resolvedOnce&&Na!=null)return Na;if(t.constructor.name==="Function"){const e=t();if(mv(e))throw si(ri.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Na=e}else throw si(ri.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw si(ri.NOT_SUPPORT_LOCALE_TYPE)}function r0(t,e,n){return[...new Set([n,...bt(e)?e:et(e)?Object.keys(e):Ce(e)?[e]:[n]])]}function Ep(t,e,n){const i=Ce(n)?n:Is,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let o=[n];for(;bt(o);)o=hf(s,o,e);const a=bt(e)||!Ye(e)?e:e.default?e.default:null;o=Ce(a)?[a]:a,bt(o)&&hf(s,o,!1),r.__localeChainCache.set(i,s)}return s}function hf(t,e,n){let i=!0;for(let r=0;r<e.length&&Je(i);r++){const s=e[r];Ce(s)&&(i=s0(t,e[r],n))}return i}function s0(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=o0(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function o0(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(bt(n)||Ye(n))&&n[r]&&(i=n[r])}return i}const ki=[];ki[0]={w:[0],i:[3,0],"[":[4],o:[7]};ki[1]={w:[1],".":[2],"[":[4],o:[7]};ki[2]={w:[2],i:[3,0],0:[3,0]};ki[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};ki[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};ki[5]={"'":[4,0],o:8,l:[5,0]};ki[6]={'"':[4,0],o:8,l:[6,0]};const a0=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function l0(t){return a0.test(t)}function c0(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function u0(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function f0(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:l0(e)?c0(e):"*"+e}function d0(t){const e=[];let n=-1,i=0,r=0,s,o,a,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),r++},h[3]=()=>{if(r>0)r--,i=4,h[0]();else{if(r=0,o===void 0||(o=f0(o),o===!1))return!1;h[1]()}};function p(){const g=t[n+1];if(i===5&&g==="'"||i===6&&g==='"')return n++,a="\\"+g,h[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&p())){if(l=u0(s),f=ki[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(a=s,u()===!1))))return;if(i===7)return e}}const pf=new Map;function h0(t,e){return et(t)?t[e]:null}function p0(t,e){if(!et(t))return null;let n=pf.get(e);if(n||(n=d0(e),n&&pf.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const o=n[s];if(xp.includes(o)&&zn(r))return null;const a=r[o];if(a===void 0||pt(r))return null;r=a,s++}return r}const m0="11.1.3",da=-1,Is="en-US",mf="",_f=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function _0(){return{upper:(t,e)=>e==="text"&&Ce(t)?t.toUpperCase():e==="vnode"&&et(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Ce(t)?t.toLowerCase():e==="vnode"&&et(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Ce(t)?_f(t):e==="vnode"&&et(t)&&"__v_isVNode"in t?_f(t.children):t}}let Sp;function g0(t){Sp=t}let Mp;function v0(t){Mp=t}let yp;function x0(t){yp=t}let Tp=null;const E0=t=>{Tp=t},S0=()=>Tp;let bp=null;const gf=t=>{bp=t},M0=()=>bp;let vf=0;function y0(t={}){const e=pt(t.onWarn)?t.onWarn:gv,n=Ce(t.version)?t.version:m0,i=Ce(t.locale)||pt(t.locale)?t.locale:Is,r=pt(i)?Is:i,s=bt(t.fallbackLocale)||Ye(t.fallbackLocale)||Ce(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,o=Ye(t.messages)?t.messages:Ua(r),a=Ye(t.datetimeFormats)?t.datetimeFormats:Ua(r),l=Ye(t.numberFormats)?t.numberFormats:Ua(r),c=Ct(ct(),t.modifiers,_0()),u=t.pluralRules||ct(),f=pt(t.missing)?t.missing:null,h=Je(t.missingWarn)||Wr(t.missingWarn)?t.missingWarn:!0,p=Je(t.fallbackWarn)||Wr(t.fallbackWarn)?t.fallbackWarn:!0,g=!!t.fallbackFormat,E=!!t.unresolving,m=pt(t.postTranslation)?t.postTranslation:null,d=Ye(t.processor)?t.processor:null,M=Je(t.warnHtmlMessage)?t.warnHtmlMessage:!0,y=!!t.escapeParameter,_=pt(t.messageCompiler)?t.messageCompiler:Sp,N=pt(t.messageResolver)?t.messageResolver:Mp||h0,L=pt(t.localeFallbacker)?t.localeFallbacker:yp||r0,C=et(t.fallbackContext)?t.fallbackContext:void 0,k=t,A=et(k.__datetimeFormatters)?k.__datetimeFormatters:new Map,T=et(k.__numberFormatters)?k.__numberFormatters:new Map,B=et(k.__meta)?k.__meta:{};vf++;const H={version:n,cid:vf,locale:i,fallbackLocale:s,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:p,fallbackFormat:g,unresolving:E,postTranslation:m,processor:d,warnHtmlMessage:M,escapeParameter:y,messageCompiler:_,messageResolver:N,localeFallbacker:L,fallbackContext:C,onWarn:e,__meta:B};return H.datetimeFormats=a,H.numberFormats=l,H.__datetimeFormatters=A,H.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&e0(H,n,B),H}const Ua=t=>({[t]:ct()});function Jc(t,e,n,i,r){const{missing:s,onWarn:o}=t;if(s!==null){const a=s(t,n,e,r);return Ce(a)?a:e}else return e}function ss(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function T0(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function b0(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(T0(t,e[i]))return!0;return!1}function xf(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,u,f]=Pl(...e),h=Je(u.missingWarn)?u.missingWarn:t.missingWarn;Je(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,g=Zc(t,u),E=o(t,r,g);if(!Ce(l)||l==="")return new Intl.DateTimeFormat(g,f).format(c);let m={},d,M=null;const y="datetime format";for(let L=0;L<E.length&&(d=E[L],m=n[d]||{},M=m[l],!Ye(M));L++)Jc(t,l,d,h,y);if(!Ye(M)||!Ce(d))return i?da:l;let _=`${d}__${l}`;ua(f)||(_=`${_}__${JSON.stringify(f)}`);let N=a.get(_);return N||(N=new Intl.DateTimeFormat(d,Ct({},M,f)),a.set(_,N)),p?N.formatToParts(c):N.format(c)}const Ap=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Pl(...t){const[e,n,i,r]=t,s=ct();let o=ct(),a;if(Ce(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw si(ri.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw si(ri.INVALID_ISO_DATE_ARGUMENT)}}else if(dv(e)){if(isNaN(e.getTime()))throw si(ri.INVALID_DATE_ARGUMENT);a=e}else if(Tt(e))a=e;else throw si(ri.INVALID_ARGUMENT);return Ce(n)?s.key=n:Ye(n)&&Object.keys(n).forEach(l=>{Ap.includes(l)?o[l]=n[l]:s[l]=n[l]}),Ce(i)?s.locale=i:Ye(i)&&(o=i),Ye(r)&&(o=r),[s.key||"",a,s,o]}function Ef(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function Sf(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,u,f]=Ll(...e),h=Je(u.missingWarn)?u.missingWarn:t.missingWarn;Je(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,g=Zc(t,u),E=o(t,r,g);if(!Ce(l)||l==="")return new Intl.NumberFormat(g,f).format(c);let m={},d,M=null;const y="number format";for(let L=0;L<E.length&&(d=E[L],m=n[d]||{},M=m[l],!Ye(M));L++)Jc(t,l,d,h,y);if(!Ye(M)||!Ce(d))return i?da:l;let _=`${d}__${l}`;ua(f)||(_=`${_}__${JSON.stringify(f)}`);let N=a.get(_);return N||(N=new Intl.NumberFormat(d,Ct({},M,f)),a.set(_,N)),p?N.formatToParts(c):N.format(c)}const Rp=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Ll(...t){const[e,n,i,r]=t,s=ct();let o=ct();if(!Tt(e))throw si(ri.INVALID_ARGUMENT);const a=e;return Ce(n)?s.key=n:Ye(n)&&Object.keys(n).forEach(l=>{Rp.includes(l)?o[l]=n[l]:s[l]=n[l]}),Ce(i)?s.locale=i:Ye(i)&&(o=i),Ye(r)&&(o=r),[s.key||"",a,s,o]}function Mf(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}const A0=t=>t,R0=t=>"",C0="text",w0=t=>t.length===0?"":qc(t),P0=_v;function yf(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function L0(t){const e=Tt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Tt(t.named.count)||Tt(t.named.n))?Tt(t.named.count)?t.named.count:Tt(t.named.n)?t.named.n:e:e}function I0(t,e){e.count||(e.count=t),e.n||(e.n=t)}function D0(t={}){const e=t.locale,n=L0(t),i=et(t.pluralRules)&&Ce(e)&&pt(t.pluralRules[e])?t.pluralRules[e]:yf,r=et(t.pluralRules)&&Ce(e)&&pt(t.pluralRules[e])?yf:void 0,s=d=>d[i(n,d.length,r)],o=t.list||[],a=d=>o[d],l=t.named||ct();Tt(t.pluralIndex)&&I0(n,l);const c=d=>l[d];function u(d,M){const y=pt(t.messages)?t.messages(d,!!M):et(t.messages)?t.messages[d]:!1;return y||(t.parent?t.parent.message(d):R0)}const f=d=>t.modifiers?t.modifiers[d]:A0,h=Ye(t.processor)&&pt(t.processor.normalize)?t.processor.normalize:w0,p=Ye(t.processor)&&pt(t.processor.interpolate)?t.processor.interpolate:P0,g=Ye(t.processor)&&Ce(t.processor.type)?t.processor.type:C0,m={list:a,named:c,plural:s,linked:(d,...M)=>{const[y,_]=M;let N="text",L="";M.length===1?et(y)?(L=y.modifier||L,N=y.type||N):Ce(y)&&(L=y||L):M.length===2&&(Ce(y)&&(L=y||L),Ce(_)&&(N=_||N));const C=u(d,!0)(m),k=N==="vnode"&&bt(C)&&L?C[0]:C;return L?f(L)(k,N):k},message:u,type:g,interpolate:p,normalize:h,values:Ct(ct(),o,l)};return m}const Tf=()=>"",mn=t=>pt(t);function bf(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:o,messages:a}=t,[l,c]=Il(...e),u=Je(c.missingWarn)?c.missingWarn:t.missingWarn,f=Je(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,h=Je(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,g=Ce(c.default)||Je(c.default)?Je(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:null,E=n||g!=null&&(Ce(g)||pt(g)),m=Zc(t,c);h&&N0(c);let[d,M,y]=p?[l,m,a[m]||ct()]:Cp(t,l,m,o,f,u),_=d,N=l;if(!p&&!(Ce(_)||zn(_)||mn(_))&&E&&(_=g,N=_),!p&&(!(Ce(_)||zn(_)||mn(_))||!Ce(M)))return r?da:l;let L=!1;const C=()=>{L=!0},k=mn(_)?_:wp(t,l,M,_,N,C);if(L)return _;const A=O0(t,M,y,c),T=D0(A),B=U0(t,k,T),H=i?i(B,l):B;if(__INTLIFY_PROD_DEVTOOLS__){const $={timestamp:Date.now(),key:Ce(l)?l:mn(_)?_.key:"",locale:M||(mn(_)?_.locale:""),format:Ce(_)?_:mn(_)?_.source:"",message:H};$.meta=Ct({},t.__meta,S0()||{}),t0($)}return H}function N0(t){bt(t.list)?t.list=t.list.map(e=>Ce(e)?af(e):e):et(t.named)&&Object.keys(t.named).forEach(e=>{Ce(t.named[e])&&(t.named[e]=af(t.named[e]))})}function Cp(t,e,n,i,r,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=ct(),h,p=null;const g="translate";for(let E=0;E<u.length&&(h=u[E],f=o[h]||ct(),(p=l(f,e))===null&&(p=f[e]),!(Ce(p)||zn(p)||mn(p)));E++)if(!b0(h,u)){const m=Jc(t,e,h,s,g);m!==e&&(p=m)}return[p,h,f]}function wp(t,e,n,i,r,s){const{messageCompiler:o,warnHtmlMessage:a}=t;if(mn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=o(i,F0(t,n,r,i,a,s));return l.locale=n,l.key=e,l.source=i,l}function U0(t,e,n){return e(n)}function Il(...t){const[e,n,i]=t,r=ct();if(!Ce(e)&&!Tt(e)&&!mn(e)&&!zn(e))throw si(ri.INVALID_ARGUMENT);const s=Tt(e)?String(e):(mn(e),e);return Tt(n)?r.plural=n:Ce(n)?r.default=n:Ye(n)&&!ua(n)?r.named=n:bt(n)&&(r.list=n),Tt(i)?r.plural=i:Ce(i)?r.default=i:Ye(i)&&Ct(r,i),[s,r]}function F0(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:o=>{throw s&&s(o),o},onCacheKey:o=>uv(e,n,o)}}function O0(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,h={locale:e,modifiers:r,pluralRules:s,messages:(p,g)=>{let E=o(n,p);if(E==null&&(u||g)){const[,,m]=Cp(u||t,p,e,a,l,c);E=o(m,p)}if(Ce(E)||zn(E)){let m=!1;const M=wp(t,p,e,E,p,()=>{m=!0});return m?Tf:M}else return mn(E)?E:Tf}};return t.processor&&(h.processor=t.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),Tt(i.plural)&&(h.pluralIndex=i.plural),h}zv();/*!
  * vue-i18n v11.1.3
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const B0="11.1.3";function k0(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(rr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(rr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(rr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(rr().__INTLIFY_PROD_DEVTOOLS__=!1)}const Qt={UNEXPECTED_RETURN_TYPE:i0,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function cn(t,...e){return fa(t,null,void 0)}const Dl=Oi("__translateVNode"),Nl=Oi("__datetimeParts"),Ul=Oi("__numberParts"),Pp=Oi("__setPluralRules"),Lp=Oi("__injectWithOption"),Fl=Oi("__dispose");function Ds(t){if(!et(t)||zn(t))return t;for(const e in t)if(Rn(t,e))if(!e.includes("."))et(t[e])&&Ds(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let o=0;o<i;o++){if(n[o]==="__proto__")throw new Error(`unsafe key: ${n[o]}`);if(n[o]in r||(r[n[o]]=ct()),!et(r[n[o]])){s=!0;break}r=r[n[o]]}if(s||(zn(r)?xp.includes(n[i])||delete t[e]:(r[n[i]]=t[e],delete t[e])),!zn(r)){const o=r[n[i]];et(o)&&Ds(o)}}return t}function Qc(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,o=Ye(n)?n:bt(i)?ct():{[t]:ct()};if(bt(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||ct(),Lo(c,o[l])):Lo(c,o)}else Ce(a)&&Lo(JSON.parse(a),o)}),r==null&&s)for(const a in o)Rn(o,a)&&Ds(o[a]);return o}function Ip(t){return t.type}function Dp(t,e,n){let i=et(e.messages)?e.messages:ct();"__i18nGlobal"in n&&(i=Qc(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(et(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(et(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Af(t){return Rt(zs,null,t,0)}const Rf="__INTLIFY_META__",Cf=()=>[],H0=()=>!1;let wf=0;function Pf(t){return(e,n,i,r)=>t(n,i,Gr()||void 0,r)}const V0=()=>{const t=Gr();let e=null;return t&&(e=Ip(t)[Rf])?{[Rf]:e}:null};function eu(t={}){const{__root:e,__injectWithOption:n}=t,i=e===void 0,r=t.flatJson,s=qo?Sh:Mh;let o=Je(t.inheritLocale)?t.inheritLocale:!0;const a=s(e&&o?e.locale.value:Ce(t.locale)?t.locale:Is),l=s(e&&o?e.fallbackLocale.value:Ce(t.fallbackLocale)||bt(t.fallbackLocale)||Ye(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),c=s(Qc(a.value,t)),u=s(Ye(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),f=s(Ye(t.numberFormats)?t.numberFormats:{[a.value]:{}});let h=e?e.missingWarn:Je(t.missingWarn)||Wr(t.missingWarn)?t.missingWarn:!0,p=e?e.fallbackWarn:Je(t.fallbackWarn)||Wr(t.fallbackWarn)?t.fallbackWarn:!0,g=e?e.fallbackRoot:Je(t.fallbackRoot)?t.fallbackRoot:!0,E=!!t.fallbackFormat,m=pt(t.missing)?t.missing:null,d=pt(t.missing)?Pf(t.missing):null,M=pt(t.postTranslation)?t.postTranslation:null,y=e?e.warnHtmlMessage:Je(t.warnHtmlMessage)?t.warnHtmlMessage:!0,_=!!t.escapeParameter;const N=e?e.modifiers:Ye(t.modifiers)?t.modifiers:{};let L=t.pluralRules||e&&e.pluralRules,C;C=(()=>{i&&gf(null);const P={version:B0,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:N,pluralRules:L,missing:d===null?void 0:d,missingWarn:h,fallbackWarn:p,fallbackFormat:E,unresolving:!0,postTranslation:M===null?void 0:M,warnHtmlMessage:y,escapeParameter:_,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};P.datetimeFormats=u.value,P.numberFormats=f.value,P.__datetimeFormatters=Ye(C)?C.__datetimeFormatters:void 0,P.__numberFormatters=Ye(C)?C.__numberFormatters:void 0;const O=y0(P);return i&&gf(O),O})(),ss(C,a.value,l.value);function A(){return[a.value,l.value,c.value,u.value,f.value]}const T=Vt({get:()=>a.value,set:P=>{C.locale=P,a.value=P}}),B=Vt({get:()=>l.value,set:P=>{C.fallbackLocale=P,l.value=P,ss(C,a.value,P)}}),H=Vt(()=>c.value),$=Vt(()=>u.value),ee=Vt(()=>f.value);function oe(){return pt(M)?M:null}function Z(P){M=P,C.postTranslation=P}function se(){return m}function Y(P){P!==null&&(d=Pf(P)),m=P,C.missing=d}const he=(P,O,G,ue,ae,Re)=>{A();let be;try{__INTLIFY_PROD_DEVTOOLS__,i||(C.fallbackContext=e?M0():void 0),be=P(C)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(C.fallbackContext=void 0)}if(G!=="translate exists"&&Tt(be)&&be===da||G==="translate exists"&&!be){const[de,xe]=O();return e&&g?ue(e):ae(de)}else{if(Re(be))return be;throw cn(Qt.UNEXPECTED_RETURN_TYPE)}};function _e(...P){return he(O=>Reflect.apply(bf,null,[O,...P]),()=>Il(...P),"translate",O=>Reflect.apply(O.t,O,[...P]),O=>O,O=>Ce(O))}function Te(...P){const[O,G,ue]=P;if(ue&&!et(ue))throw cn(Qt.INVALID_ARGUMENT);return _e(O,G,Ct({resolvedMessage:!0},ue||{}))}function Le(...P){return he(O=>Reflect.apply(xf,null,[O,...P]),()=>Pl(...P),"datetime format",O=>Reflect.apply(O.d,O,[...P]),()=>mf,O=>Ce(O))}function $e(...P){return he(O=>Reflect.apply(Sf,null,[O,...P]),()=>Ll(...P),"number format",O=>Reflect.apply(O.n,O,[...P]),()=>mf,O=>Ce(O))}function ie(P){return P.map(O=>Ce(O)||Tt(O)||Je(O)?Af(String(O)):O)}const ve={normalize:ie,interpolate:P=>P,type:"vnode"};function V(...P){return he(O=>{let G;const ue=O;try{ue.processor=ve,G=Reflect.apply(bf,null,[ue,...P])}finally{ue.processor=null}return G},()=>Il(...P),"translate",O=>O[Dl](...P),O=>[Af(O)],O=>bt(O))}function re(...P){return he(O=>Reflect.apply(Sf,null,[O,...P]),()=>Ll(...P),"number format",O=>O[Ul](...P),Cf,O=>Ce(O)||bt(O))}function le(...P){return he(O=>Reflect.apply(xf,null,[O,...P]),()=>Pl(...P),"datetime format",O=>O[Nl](...P),Cf,O=>Ce(O)||bt(O))}function ce(P){L=P,C.pluralRules=L}function Ie(P,O){return he(()=>{if(!P)return!1;const G=Ce(O)?O:a.value,ue=S(G),ae=C.messageResolver(ue,P);return zn(ae)||mn(ae)||Ce(ae)},()=>[P],"translate exists",G=>Reflect.apply(G.te,G,[P,O]),H0,G=>Je(G))}function I(P){let O=null;const G=Ep(C,l.value,a.value);for(let ue=0;ue<G.length;ue++){const ae=c.value[G[ue]]||{},Re=C.messageResolver(ae,P);if(Re!=null){O=Re;break}}return O}function D(P){const O=I(P);return O??(e?e.tm(P)||{}:{})}function S(P){return c.value[P]||{}}function te(P,O){if(r){const G={[P]:O};for(const ue in G)Rn(G,ue)&&Ds(G[ue]);O=G[P]}c.value[P]=O,C.messages=c.value}function K(P,O){c.value[P]=c.value[P]||{};const G={[P]:O};if(r)for(const ue in G)Rn(G,ue)&&Ds(G[ue]);O=G[P],Lo(O,c.value[P]),C.messages=c.value}function q(P){return u.value[P]||{}}function b(P,O){u.value[P]=O,C.datetimeFormats=u.value,Ef(C,P,O)}function w(P,O){u.value[P]=Ct(u.value[P]||{},O),C.datetimeFormats=u.value,Ef(C,P,O)}function F(P){return f.value[P]||{}}function x(P,O){f.value[P]=O,C.numberFormats=f.value,Mf(C,P,O)}function v(P,O){f.value[P]=Ct(f.value[P]||{},O),C.numberFormats=f.value,Mf(C,P,O)}wf++,e&&qo&&(lr(e.locale,P=>{o&&(a.value=P,C.locale=P,ss(C,a.value,l.value))}),lr(e.fallbackLocale,P=>{o&&(l.value=P,C.fallbackLocale=P,ss(C,a.value,l.value))}));const U={id:wf,locale:T,fallbackLocale:B,get inheritLocale(){return o},set inheritLocale(P){o=P,P&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,ss(C,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:H,get modifiers(){return N},get pluralRules(){return L||{}},get isGlobal(){return i},get missingWarn(){return h},set missingWarn(P){h=P,C.missingWarn=h},get fallbackWarn(){return p},set fallbackWarn(P){p=P,C.fallbackWarn=p},get fallbackRoot(){return g},set fallbackRoot(P){g=P},get fallbackFormat(){return E},set fallbackFormat(P){E=P,C.fallbackFormat=E},get warnHtmlMessage(){return y},set warnHtmlMessage(P){y=P,C.warnHtmlMessage=P},get escapeParameter(){return _},set escapeParameter(P){_=P,C.escapeParameter=P},t:_e,getLocaleMessage:S,setLocaleMessage:te,mergeLocaleMessage:K,getPostTranslationHandler:oe,setPostTranslationHandler:Z,getMissingHandler:se,setMissingHandler:Y,[Pp]:ce};return U.datetimeFormats=$,U.numberFormats=ee,U.rt=Te,U.te=Ie,U.tm=D,U.d=Le,U.n=$e,U.getDateTimeFormat=q,U.setDateTimeFormat=b,U.mergeDateTimeFormat=w,U.getNumberFormat=F,U.setNumberFormat=x,U.mergeNumberFormat=v,U[Lp]=n,U[Dl]=V,U[Nl]=le,U[Ul]=re,U}function z0(t){const e=Ce(t.locale)?t.locale:Is,n=Ce(t.fallbackLocale)||bt(t.fallbackLocale)||Ye(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=pt(t.missing)?t.missing:void 0,r=Je(t.silentTranslationWarn)||Wr(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=Je(t.silentFallbackWarn)||Wr(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=Je(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=Ye(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=pt(t.postTranslation)?t.postTranslation:void 0,f=Ce(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,h=!!t.escapeParameterHtml,p=Je(t.sync)?t.sync:!0;let g=t.messages;if(Ye(t.sharedMessages)){const N=t.sharedMessages;g=Object.keys(N).reduce((C,k)=>{const A=C[k]||(C[k]={});return Ct(A,N[k]),C},g||{})}const{__i18n:E,__root:m,__injectWithOption:d}=t,M=t.datetimeFormats,y=t.numberFormats,_=t.flatJson;return{locale:e,fallbackLocale:n,messages:g,flatJson:_,datetimeFormats:M,numberFormats:y,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:h,messageResolver:t.messageResolver,inheritLocale:p,__i18n:E,__root:m,__injectWithOption:d}}function Ol(t={}){const e=eu(z0(t)),{__extender:n}=t,i={id:e.id,get locale(){return e.locale.value},set locale(r){e.locale.value=r},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(r){e.fallbackLocale.value=r},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(r){e.setMissingHandler(r)},get silentTranslationWarn(){return Je(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(r){e.missingWarn=Je(r)?!r:r},get silentFallbackWarn(){return Je(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(r){e.fallbackWarn=Je(r)?!r:r},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(r){e.fallbackFormat=r},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(r){e.setPostTranslationHandler(r)},get sync(){return e.inheritLocale},set sync(r){e.inheritLocale=r},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){e.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(r){e.escapeParameter=r},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...r){return Reflect.apply(e.t,e,[...r])},rt(...r){return Reflect.apply(e.rt,e,[...r])},te(r,s){return e.te(r,s)},tm(r){return e.tm(r)},getLocaleMessage(r){return e.getLocaleMessage(r)},setLocaleMessage(r,s){e.setLocaleMessage(r,s)},mergeLocaleMessage(r,s){e.mergeLocaleMessage(r,s)},d(...r){return Reflect.apply(e.d,e,[...r])},getDateTimeFormat(r){return e.getDateTimeFormat(r)},setDateTimeFormat(r,s){e.setDateTimeFormat(r,s)},mergeDateTimeFormat(r,s){e.mergeDateTimeFormat(r,s)},n(...r){return Reflect.apply(e.n,e,[...r])},getNumberFormat(r){return e.getNumberFormat(r)},setNumberFormat(r,s){e.setNumberFormat(r,s)},mergeNumberFormat(r,s){e.mergeNumberFormat(r,s)}};return i.__extender=n,i}function G0(t,e,n){return{beforeCreate(){const i=Gr();if(!i)throw cn(Qt.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=Lf(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=Ol(s);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=Lf(t,r);else{this.$i18n=Ol({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&Dp(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$te=(s,o)=>this.$i18n.te(s,o),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=Gr();if(!i)throw cn(Qt.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function Lf(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[Pp](e.pluralizationRules||t.pluralizationRules);const n=Qc(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const tu={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function W0({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===on?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},ct())}function Np(){return on}const X0=Vs({name:"i18n-t",props:Ct({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Tt(t)||!isNaN(t)}},tu),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||nu({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f!=="_"),o=ct();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=Ce(t.plural)?+t.plural:t.plural);const a=W0(e,s),l=r[Dl](t.keypath,a,o),c=Ct(ct(),i),u=Ce(t.tag)||et(t.tag)?t.tag:Np();return Ws(u,c,l)}}}),If=X0;function $0(t){return bt(t)&&!Ce(t[0])}function Up(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const o={part:!0};let a=ct();t.locale&&(o.locale=t.locale),Ce(t.format)?o.key=t.format:et(t.format)&&(Ce(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((h,p)=>n.includes(p)?Ct(ct(),h,{[p]:t.format[p]}):h,ct()));const l=i(t.value,o,a);let c=[o.key];bt(l)?c=l.map((h,p)=>{const g=r[h.type],E=g?g({[h.type]:h.value,index:p,parts:l}):[h.value];return $0(E)&&(E[0].key=`${h.type}-${p}`),E}):Ce(l)&&(c=[l]);const u=Ct(ct(),s),f=Ce(t.tag)||et(t.tag)?t.tag:Np();return Ws(f,u,c)}}const Y0=Vs({name:"i18n-n",props:Ct({value:{type:Number,required:!0},format:{type:[String,Object]}},tu),setup(t,e){const n=t.i18n||nu({useScope:t.scope,__useComponent:!0});return Up(t,e,Rp,(...i)=>n[Ul](...i))}}),Df=Y0;function q0(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function K0(t){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw cn(Qt.UNEXPECTED_ERROR);const c=q0(t,a.$),u=Nf(l);return[Reflect.apply(c.t,c,[...Uf(u)]),c]};return{created:(o,a)=>{const[l,c]=e(a);qo&&t.global===c&&(o.__i18nWatcher=lr(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{qo&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=Nf(a);o.textContent=Reflect.apply(l.t,l,[...Uf(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function Nf(t){if(Ce(t))return{path:t};if(Ye(t)){if(!("path"in t))throw cn(Qt.REQUIRED_VALUE,"path");return t}else throw cn(Qt.INVALID_VALUE)}function Uf(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,o={},a=i||{};return Ce(n)&&(o.locale=n),Tt(r)&&(o.plural=r),Tt(s)&&(o.plural=s),[e,a,o]}function j0(t,e,...n){const i=Ye(n[0])?n[0]:{};(Je(i.globalInstall)?i.globalInstall:!0)&&([If.name,"I18nT"].forEach(s=>t.component(s,If)),[Df.name,"I18nN"].forEach(s=>t.component(s,Df)),[Of.name,"I18nD"].forEach(s=>t.component(s,Of))),t.directive("t",K0(e))}const Z0=Oi("global-vue-i18n");function J0(t={}){const e=__VUE_I18N_LEGACY_API__&&Je(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=Je(t.globalInjection)?t.globalInjection:!0,i=new Map,[r,s]=Q0(t,e),o=Oi("");function a(f){return i.get(f)||null}function l(f,h){i.set(f,h)}function c(f){i.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(f,...h){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,u),Ye(h[0])){const E=h[0];u.__composerExtend=E.__composerExtend,u.__vueI18nExtend=E.__vueI18nExtend}let p=null;!e&&n&&(p=ax(f,u.global)),__VUE_I18N_FULL_INSTALL__&&j0(f,u,...h),__VUE_I18N_LEGACY_API__&&e&&f.mixin(G0(s,s.__composer,u));const g=f.unmount;f.unmount=()=>{p&&p(),u.dispose(),g()}},get global(){return s},dispose(){r.stop()},__instances:i,__getInstance:a,__setInstance:l,__deleteInstance:c};return u}function nu(t={}){const e=Gr();if(e==null)throw cn(Qt.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw cn(Qt.NOT_INSTALLED);const n=ex(e),i=nx(n),r=Ip(e),s=tx(t,r);if(s==="global")return Dp(i,t,r),i;if(s==="parent"){let l=ix(n,e,t.__useComponent);return l==null&&(l=i),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=Ct({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=eu(l),o.__composerExtend&&(a[Fl]=o.__composerExtend(a)),sx(o,e,a),o.__setInstance(e,a)}return a}function Q0(t,e){const n=Wm(),i=__VUE_I18N_LEGACY_API__&&e?n.run(()=>Ol(t)):n.run(()=>eu(t));if(i==null)throw cn(Qt.UNEXPECTED_ERROR);return[n,i]}function ex(t){const e=Vn(t.isCE?Z0:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw cn(t.isCE?Qt.NOT_INSTALLED_WITH_PROVIDE:Qt.UNEXPECTED_ERROR);return e}function tx(t,e){return ua(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function nx(t){return t.mode==="composition"?t.global:t.global.__composer}function ix(t,e,n=!1){let i=null;const r=e.root;let s=rx(e,n);for(;s!=null;){const o=t;if(t.mode==="composition")i=o.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(s);a!=null&&(i=a.__composer,n&&i&&!i[Lp]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function rx(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function sx(t,e,n){Vc(()=>{},e),zc(()=>{const i=n;t.__deleteInstance(e);const r=i[Fl];r&&(r(),delete i[Fl])},e)}const ox=["locale","fallbackLocale","availableLocales"],Ff=["t","rt","d","n","tm","te"];function ax(t,e){const n=Object.create(null);return ox.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw cn(Qt.UNEXPECTED_ERROR);const o=Ut(s.value)?{get(){return s.value.value},set(a){s.value.value=a}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,o)}),t.config.globalProperties.$i18n=n,Ff.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw cn(Qt.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,Ff.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}const lx=Vs({name:"i18n-d",props:Ct({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},tu),setup(t,e){const n=t.i18n||nu({useScope:t.scope,__useComponent:!0});return Up(t,e,Ap,(...i)=>n[Nl](...i))}}),Of=lx;k0();g0(Jv);v0(p0);x0(Ep);if(__INTLIFY_PROD_DEVTOOLS__){const t=rr();t.__INTLIFY__=!0,Qv(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const cx={en:{ldgwelcome:"Welcome to my site",ldgdescription:"An immersive experience",ldgbuttonseemore:"See More",changeLanguage:"Change language"},es:{ldgwelcome:"Bienvenido a mi sitio",ldgdescription:"Una experiencia inmersiva",ldgbuttonseemore:"See More",changeLanguage:"Cambiar idioma"}},ux=J0({locale:"en",fallbackLocale:"en",messages:cx});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Dr=typeof document<"u";function Fp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function fx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Fp(t.default)}const it=Object.assign;function Fa(t,e){const n={};for(const i in e){const r=e[i];n[i]=In(r)?r.map(t):t(r)}return n}const Es=()=>{},In=Array.isArray,Op=/#/g,dx=/&/g,hx=/\//g,px=/=/g,mx=/\?/g,Bp=/\+/g,_x=/%5B/g,gx=/%5D/g,kp=/%5E/g,vx=/%60/g,Hp=/%7B/g,xx=/%7C/g,Vp=/%7D/g,Ex=/%20/g;function iu(t){return encodeURI(""+t).replace(xx,"|").replace(_x,"[").replace(gx,"]")}function Sx(t){return iu(t).replace(Hp,"{").replace(Vp,"}").replace(kp,"^")}function Bl(t){return iu(t).replace(Bp,"%2B").replace(Ex,"+").replace(Op,"%23").replace(dx,"%26").replace(vx,"`").replace(Hp,"{").replace(Vp,"}").replace(kp,"^")}function Mx(t){return Bl(t).replace(px,"%3D")}function yx(t){return iu(t).replace(Op,"%23").replace(mx,"%3F")}function Tx(t){return t==null?"":yx(t).replace(hx,"%2F")}function Ns(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const bx=/\/$/,Ax=t=>t.replace(bx,"");function Oa(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Px(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Ns(o)}}function Rx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Cx(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&$r(e.matched[i],n.matched[r])&&zp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $r(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wx(t[n],e[n]))return!1;return!0}function wx(t,e){return In(t)?kf(t,e):In(e)?kf(e,t):t===e}function kf(t,e){return In(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Px(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Us;(function(t){t.pop="pop",t.push="push"})(Us||(Us={}));var Ss;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ss||(Ss={}));function Lx(t){if(!t)if(Dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ax(t)}const Ix=/^[^#]+#/;function Dx(t,e){return t.replace(Ix,"#")+e}function Nx(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ha=()=>({left:window.scrollX,top:window.scrollY});function Ux(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Nx(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Hf(t,e){return(history.state?history.state.position-e:-1)+t}const kl=new Map;function Fx(t,e){kl.set(t,e)}function Ox(t){const e=kl.get(t);return kl.delete(t),e}let Bx=()=>location.protocol+"//"+location.host;function Gp(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Bf(l,"")}return Bf(n,t)+i+r}function kx(t,e,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=Gp(t,location),g=n.value,E=e.value;let m=0;if(h){if(n.value=p,e.value=h,o&&o===g){o=null;return}m=E?h.position-E.position:0}else i(p);r.forEach(d=>{d(n.value,g,{delta:m,type:Us.pop,direction:m?m>0?Ss.forward:Ss.back:Ss.unknown})})};function l(){o=n.value}function c(h){r.push(h);const p=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(it({},h.state,{scroll:ha()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Vf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ha():null}}function Hx(t){const{history:e,location:n}=window,i={value:Gp(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Bx()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=it({},e.state,Vf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=it({},r.value,e.state,{forward:l,scroll:ha()});s(u.current,u,!0);const f=it({},Vf(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Vx(t){t=Lx(t);const e=Hx(t),n=kx(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=it({location:"",base:t,go:i,createHref:Dx.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function zx(t){return typeof t=="string"||t&&typeof t=="object"}function Wp(t){return typeof t=="string"||typeof t=="symbol"}const Xp=Symbol("");var zf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zf||(zf={}));function Yr(t,e){return it(new Error,{type:t,[Xp]:!0},e)}function qn(t,e){return t instanceof Error&&Xp in t&&(e==null||!!(t.type&e))}const Gf="[^/]+?",Gx={sensitive:!1,strict:!1,start:!0,end:!0},Wx=/[.+*?^${}()[\]/\\]/g;function Xx(t,e){const n=it({},Gx,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Wx,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:E,optional:m,regexp:d}=h;s.push({name:g,repeatable:E,optional:m});const M=d||Gf;if(M!==Gf){p+=10;try{new RegExp(`(${M})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+_.message)}}let y=E?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,p+=20,m&&(p+=-8),E&&(p+=-20),M===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=s[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:E,optional:m}=p,d=g in c?c[g]:"";if(In(d)&&!E)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=In(d)?d.join("/"):d;if(!M)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function $x(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $p(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=$x(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Wf(i))return 1;if(Wf(r))return-1}return r.length-i.length}function Wf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Yx={type:0,value:""},qx=/[a-zA-Z0-9_]/;function Kx(t){if(!t)return[[]];if(t==="/")return[[Yx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:qx.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function jx(t,e,n){const i=Xx(Kx(t.path),n),r=it(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Zx(t,e){const n=[],i=new Map;e=qf({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,p){const g=!p,E=$f(f);E.aliasOf=p&&p.record;const m=qf(e,f),d=[E];if("alias"in f){const _=typeof f.alias=="string"?[f.alias]:f.alias;for(const N of _)d.push($f(it({},E,{components:p?p.record.components:E.components,path:N,aliasOf:p?p.record:E})))}let M,y;for(const _ of d){const{path:N}=_;if(h&&N[0]!=="/"){const L=h.record.path,C=L[L.length-1]==="/"?"":"/";_.path=h.record.path+(N&&C+N)}if(M=jx(_,h,m),p?p.alias.push(M):(y=y||M,y!==M&&y.alias.push(M),g&&f.name&&!Yf(M)&&o(f.name)),Yp(M)&&l(M),E.children){const L=E.children;for(let C=0;C<L.length;C++)s(L[C],M,p&&p.children[C])}p=p||M}return y?()=>{o(y)}:Es}function o(f){if(Wp(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const h=eE(f,n);n.splice(h,0,f),f.record.name&&!Yf(f)&&i.set(f.record.name,f)}function c(f,h){let p,g={},E,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw Yr(1,{location:f});m=p.record.name,g=it(Xf(h.params,p.keys.filter(y=>!y.optional).concat(p.parent?p.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&Xf(f.params,p.keys.map(y=>y.name))),E=p.stringify(g)}else if(f.path!=null)E=f.path,p=n.find(y=>y.re.test(E)),p&&(g=p.parse(E),m=p.record.name);else{if(p=h.name?i.get(h.name):n.find(y=>y.re.test(h.path)),!p)throw Yr(1,{location:f,currentLocation:h});m=p.record.name,g=it({},h.params,f.params),E=p.stringify(g)}const d=[];let M=p;for(;M;)d.unshift(M.record),M=M.parent;return{name:m,path:E,params:g,matched:d,meta:Qx(d)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Xf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function $f(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Jx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Jx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Yf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qx(t){return t.reduce((e,n)=>it(e,n.meta),{})}function qf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function eE(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;$p(t,e[s])<0?i=s:n=s+1}const r=tE(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function tE(t){let e=t;for(;e=e.parent;)if(Yp(e)&&$p(t,e)===0)return e}function Yp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function nE(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Bp," "),o=s.indexOf("="),a=Ns(o<0?s:s.slice(0,o)),l=o<0?null:Ns(s.slice(o+1));if(a in e){let c=e[a];In(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Kf(t){let e="";for(let n in t){const i=t[n];if(n=Mx(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(In(i)?i.map(s=>s&&Bl(s)):[i&&Bl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function iE(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=In(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const rE=Symbol(""),jf=Symbol(""),ru=Symbol(""),qp=Symbol(""),Hl=Symbol("");function os(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ti(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Yr(4,{from:n,to:e})):h instanceof Error?l(h):zx(h)?l(Yr(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Ba(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Fp(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Ti(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=fx(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&Ti(p,n,i,o,a,r)()}))}}return s}function Zf(t){const e=Vn(ru),n=Vn(qp),i=Vt(()=>{const l=Br(t.to);return e.resolve(l)}),r=Vt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex($r.bind(null,u));if(h>-1)return h;const p=Jf(l[c-2]);return c>1&&Jf(u)===p&&f[f.length-1].path!==p?f.findIndex($r.bind(null,l[c-2])):h}),s=Vt(()=>r.value>-1&&cE(n.params,i.value.params)),o=Vt(()=>r.value>-1&&r.value===n.matched.length-1&&zp(n.params,i.value.params));function a(l={}){if(lE(l)){const c=e[Br(t.replace)?"replace":"push"](Br(t.to)).catch(Es);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Vt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function sE(t){return t.length===1?t[0]:t}const oE=Vs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zf,setup(t,{slots:e}){const n=sa(Zf(t)),{options:i}=Vn(ru),r=Vt(()=>({[Qf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Qf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&sE(e.default(n));return t.custom?s:Ws("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),aE=oE;function lE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cE(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!In(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Jf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qf=(t,e,n)=>t??e??n,uE=Vs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Vn(Hl),r=Vt(()=>t.route||i.value),s=Vn(jf,0),o=Vt(()=>{let c=Br(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Vt(()=>r.value.matched[o.value]);Co(jf,Vt(()=>o.value+1)),Co(rE,a),Co(Hl,r);const l=Sh();return lr(()=>[l.value,a.value,t.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!$r(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return ed(n.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Ws(h,it({},g,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ed(n.default,{Component:m,route:c})||m}}});function ed(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const fE=uE;function dE(t){const e=Zx(t.routes,t),n=t.parseQuery||nE,i=t.stringifyQuery||Kf,r=t.history,s=os(),o=os(),a=os(),l=Mh(pi);let c=pi;Dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fa.bind(null,V=>""+V),f=Fa.bind(null,Tx),h=Fa.bind(null,Ns);function p(V,re){let le,ce;return Wp(V)?(le=e.getRecordMatcher(V),ce=re):ce=V,e.addRoute(ce,le)}function g(V){const re=e.getRecordMatcher(V);re&&e.removeRoute(re)}function E(){return e.getRoutes().map(V=>V.record)}function m(V){return!!e.getRecordMatcher(V)}function d(V,re){if(re=it({},re||l.value),typeof V=="string"){const S=Oa(n,V,re.path),te=e.resolve({path:S.path},re),K=r.createHref(S.fullPath);return it(S,te,{params:h(te.params),hash:Ns(S.hash),redirectedFrom:void 0,href:K})}let le;if(V.path!=null)le=it({},V,{path:Oa(n,V.path,re.path).path});else{const S=it({},V.params);for(const te in S)S[te]==null&&delete S[te];le=it({},V,{params:f(S)}),re.params=f(re.params)}const ce=e.resolve(le,re),Ie=V.hash||"";ce.params=u(h(ce.params));const I=Rx(i,it({},V,{hash:Sx(Ie),path:ce.path})),D=r.createHref(I);return it({fullPath:I,hash:Ie,query:i===Kf?iE(V.query):V.query||{}},ce,{redirectedFrom:void 0,href:D})}function M(V){return typeof V=="string"?Oa(n,V,l.value.path):it({},V)}function y(V,re){if(c!==V)return Yr(8,{from:re,to:V})}function _(V){return C(V)}function N(V){return _(it(M(V),{replace:!0}))}function L(V){const re=V.matched[V.matched.length-1];if(re&&re.redirect){const{redirect:le}=re;let ce=typeof le=="function"?le(V):le;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=M(ce):{path:ce},ce.params={}),it({query:V.query,hash:V.hash,params:ce.path!=null?{}:V.params},ce)}}function C(V,re){const le=c=d(V),ce=l.value,Ie=V.state,I=V.force,D=V.replace===!0,S=L(le);if(S)return C(it(M(S),{state:typeof S=="object"?it({},Ie,S.state):Ie,force:I,replace:D}),re||le);const te=le;te.redirectedFrom=re;let K;return!I&&Cx(i,ce,le)&&(K=Yr(16,{to:te,from:ce}),Te(ce,ce,!0,!1)),(K?Promise.resolve(K):T(te,ce)).catch(q=>qn(q)?qn(q,2)?q:_e(q):Y(q,te,ce)).then(q=>{if(q){if(qn(q,2))return C(it({replace:D},M(q.to),{state:typeof q.to=="object"?it({},Ie,q.to.state):Ie,force:I}),re||te)}else q=H(te,ce,!0,D,Ie);return B(te,ce,q),q})}function k(V,re){const le=y(V,re);return le?Promise.reject(le):Promise.resolve()}function A(V){const re=ie.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(V):V()}function T(V,re){let le;const[ce,Ie,I]=hE(V,re);le=Ba(ce.reverse(),"beforeRouteLeave",V,re);for(const S of ce)S.leaveGuards.forEach(te=>{le.push(Ti(te,V,re))});const D=k.bind(null,V,re);return le.push(D),ve(le).then(()=>{le=[];for(const S of s.list())le.push(Ti(S,V,re));return le.push(D),ve(le)}).then(()=>{le=Ba(Ie,"beforeRouteUpdate",V,re);for(const S of Ie)S.updateGuards.forEach(te=>{le.push(Ti(te,V,re))});return le.push(D),ve(le)}).then(()=>{le=[];for(const S of I)if(S.beforeEnter)if(In(S.beforeEnter))for(const te of S.beforeEnter)le.push(Ti(te,V,re));else le.push(Ti(S.beforeEnter,V,re));return le.push(D),ve(le)}).then(()=>(V.matched.forEach(S=>S.enterCallbacks={}),le=Ba(I,"beforeRouteEnter",V,re,A),le.push(D),ve(le))).then(()=>{le=[];for(const S of o.list())le.push(Ti(S,V,re));return le.push(D),ve(le)}).catch(S=>qn(S,8)?S:Promise.reject(S))}function B(V,re,le){a.list().forEach(ce=>A(()=>ce(V,re,le)))}function H(V,re,le,ce,Ie){const I=y(V,re);if(I)return I;const D=re===pi,S=Dr?history.state:{};le&&(ce||D?r.replace(V.fullPath,it({scroll:D&&S&&S.scroll},Ie)):r.push(V.fullPath,Ie)),l.value=V,Te(V,re,le,D),_e()}let $;function ee(){$||($=r.listen((V,re,le)=>{if(!me.listening)return;const ce=d(V),Ie=L(ce);if(Ie){C(it(Ie,{replace:!0,force:!0}),ce).catch(Es);return}c=ce;const I=l.value;Dr&&Fx(Hf(I.fullPath,le.delta),ha()),T(ce,I).catch(D=>qn(D,12)?D:qn(D,2)?(C(it(M(D.to),{force:!0}),ce).then(S=>{qn(S,20)&&!le.delta&&le.type===Us.pop&&r.go(-1,!1)}).catch(Es),Promise.reject()):(le.delta&&r.go(-le.delta,!1),Y(D,ce,I))).then(D=>{D=D||H(ce,I,!1),D&&(le.delta&&!qn(D,8)?r.go(-le.delta,!1):le.type===Us.pop&&qn(D,20)&&r.go(-1,!1)),B(ce,I,D)}).catch(Es)}))}let oe=os(),Z=os(),se;function Y(V,re,le){_e(V);const ce=Z.list();return ce.length?ce.forEach(Ie=>Ie(V,re,le)):console.error(V),Promise.reject(V)}function he(){return se&&l.value!==pi?Promise.resolve():new Promise((V,re)=>{oe.add([V,re])})}function _e(V){return se||(se=!V,ee(),oe.list().forEach(([re,le])=>V?le(V):re()),oe.reset()),V}function Te(V,re,le,ce){const{scrollBehavior:Ie}=t;if(!Dr||!Ie)return Promise.resolve();const I=!le&&Ox(Hf(V.fullPath,0))||(ce||!le)&&history.state&&history.state.scroll||null;return Ah().then(()=>Ie(V,re,I)).then(D=>D&&Ux(D)).catch(D=>Y(D,V,re))}const Le=V=>r.go(V);let $e;const ie=new Set,me={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:E,resolve:d,options:t,push:_,replace:N,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:he,install(V){const re=this;V.component("RouterLink",aE),V.component("RouterView",fE),V.config.globalProperties.$router=re,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Br(l)}),Dr&&!$e&&l.value===pi&&($e=!0,_(r.location).catch(Ie=>{}));const le={};for(const Ie in pi)Object.defineProperty(le,Ie,{get:()=>l.value[Ie],enumerable:!0});V.provide(ru,re),V.provide(qp,xh(le)),V.provide(Hl,l);const ce=V.unmount;ie.add(V),V.unmount=function(){ie.delete(V),ie.size<1&&(c=pi,$&&$(),$=null,l.value=pi,$e=!1,se=!1),ce()}}};function ve(V){return V.reduce((re,le)=>re.then(()=>A(le)),Promise.resolve())}return me}function hE(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>$r(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>$r(c,l))||r.push(l))}return[n,i,r]}const Kp="/macabre-iconography/assets/img-blood-B3DiUhcU.jpeg",jp="/macabre-iconography/assets/img-sangre-CuxFgV4b.jpeg",pE={key:0},mE={key:1},_E={key:2},gE=["src"],vE={key:3},xE=["src"],EE={mounted(){document.body.style.overflow="hidden"},beforeUnmount(){document.body.style.overflow=""}},SE=Object.assign(EE,{__name:"OverlayComponent",props:["data"],setup(t){function e(n){return new URL(Object.assign({"../assets/images/img-blood.jpeg":Kp,"../assets/images/img-sangre.jpeg":jp})[`../assets/images/${n}`],import.meta.url).href}return(n,i)=>(jt(),Wc(Lg,{name:"fade"},{default:zo(()=>[xt("div",{class:"overlay",onClick:i[2]||(i[2]=r=>this.$emit("close"))},[xt("div",{class:"overlay-content",onClick:i[1]||(i[1]=ev(()=>{},["stop"]))},[xt("h2",null,Ci(t.data.title),1),n.$i18n.locale==n.$i18n.fallbackLocale?(jt(),An("p",pE,Ci(t.data.descriptionEn),1)):bl("",!0),n.$i18n.locale!=n.$i18n.fallbackLocale?(jt(),An("p",mE,Ci(t.data.descriptionEs),1)):bl("",!0),t.data.vid1?(jt(),An("div",_E,[xt("iframe",{src:t.data.vid1,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",width:"100%",height:"315"},null,8,gE)])):(jt(),An("div",vE,[xt("img",{src:e(t.data.cover),alt:"Illustration",class:"overlay-img"},null,8,xE)])),xt("button",{onClick:i[0]||(i[0]=r=>n.$emit("close"))},"Close")])])]),_:1}))}}),ME=[{id:"1",title:"Corasonsito",cover:"img-blood.jpeg",descriptionEn:"Description in English",descriptionEs:"El corazón es el centro del cuerpo, bombea sangre a todos sus rincones para así transportar el oxígeno y nutrientes, que las células necesitan para renovar sus tejidos. Célula a célula, rincón a rincón, el corazón nos mantiene vivos con el emanar y el movimiento de esta sangre. Resulta casi obvio el paralelismo con el agua, que emana de las fuentes, manteniendo con vida a todos los seres vivos que le rodean, brizna a brizna, célula a célula. Del agua dependemos todos los seres vivos que conocemos, y de nuestra sangre nosotros dependemos.",vid1:"https://www.youtube.com/embed/95BS41XbkmQ?si=3Gj6gBwm6y5FMAqg"},{id:"2",title:"Sangre",cover:"img-sangre.jpeg",descriptionEn:"Description in English",descriptionEs:"Description in Spanish",vid1:""}],yE={components:{OverlayComponent:SE},methods:{changeLanguage(){this.$i18n.locale=this.$i18n.locale==="en"?"es":"en"},async fetchOverlays(){try{const t=await fetch("https://67e2f7f097fc65f535384c4d.mockapi.io/Projects");this.overlays=await t.json(),this.overlaysContent=ME}catch(t){console.error("Error during data fetching :",t)}},openOverlay(t){console.log("open Overlay "+t),this.selectedOverlay=this.overlaysContent.find(e=>e.id===t)},getImageUrl(t){return new URL(Object.assign({"../assets/images/img-blood.jpeg":Kp,"../assets/images/img-sangre.jpeg":jp})[`../assets/images/${t}`],import.meta.url).href}},data(){return{overlays:[],overlaysContent:[],selectedOverlay:null}},mounted(){this.fetchOverlays()}},TE={class:"content"},bE={class:"overlay-container"},AE={class:"main-box"},RE=["onClick"];function CE(t,e,n,i,r,s){const o=As("OverlayComponent");return jt(),An("div",null,[xt("div",TE,[xt("h1",null,Ci(t.$t("ldgwelcome")),1),xt("p",null,Ci(t.$t("ldgdescription")),1),xt("button",{onClick:e[0]||(e[0]=(...a)=>s.changeLanguage&&s.changeLanguage(...a))},Ci(t.$t("changeLanguage")),1),xt("div",bE,[xt("div",AE,[(jt(!0),An(on,null,O_(r.overlaysContent,a=>(jt(),An("div",{class:"sub-box",key:a.id},[xt("button",{onClick:l=>s.openOverlay(a.id),class:"btn-dynamic",style:ia({backgroundImage:`url(${s.getImageUrl(a.cover)})`})},null,12,RE),r.selectedOverlay?(jt(),Wc(o,{key:0,data:r.selectedOverlay,onClose:e[1]||(e[1]=l=>r.selectedOverlay=null)},null,8,["data"])):bl("",!0)]))),128))])])])])}const wE=Xs(yE,[["render",CE],["__scopeId","data-v-b97a3fe9"]]),PE={name:"HomePage",components:{LandingPage:wE}};function LE(t,e,n,i,r,s){const o=As("LandingPage");return jt(),An("div",null,[Rt(o),e[0]||(e[0]=$o("> "))])}const IE=Xs(PE,[["render",LE]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const su="176",DE=0,td=1,NE=2,Zp=1,UE=2,ei=3,Ii=0,Zt=1,ii=2,wi=0,Vr=1,nd=2,id=3,rd=4,FE=5,nr=100,OE=101,BE=102,kE=103,HE=104,VE=200,zE=201,GE=202,WE=203,Vl=204,zl=205,XE=206,$E=207,YE=208,qE=209,KE=210,jE=211,ZE=212,JE=213,QE=214,Gl=0,Wl=1,Xl=2,qr=3,$l=4,Yl=5,ql=6,Kl=7,Jp=0,eS=1,tS=2,Pi=0,nS=1,iS=2,rS=3,sS=4,oS=5,aS=6,lS=7,Qp=300,Kr=301,jr=302,jl=303,Zl=304,pa=306,Jl=1e3,sr=1001,Ql=1002,Pn=1003,cS=1004,so=1005,Bn=1006,ka=1007,or=1008,ci=1009,em=1010,tm=1011,Fs=1012,ou=1013,fr=1014,oi=1015,$s=1016,au=1017,lu=1018,Os=1020,nm=35902,im=1021,rm=1022,Cn=1023,Bs=1026,ks=1027,sm=1028,cu=1029,om=1030,uu=1031,fu=1033,Io=33776,Do=33777,No=33778,Uo=33779,ec=35840,tc=35841,nc=35842,ic=35843,rc=36196,sc=37492,oc=37496,ac=37808,lc=37809,cc=37810,uc=37811,fc=37812,dc=37813,hc=37814,pc=37815,mc=37816,_c=37817,gc=37818,vc=37819,xc=37820,Ec=37821,Fo=36492,Sc=36494,Mc=36495,am=36283,yc=36284,Tc=36285,bc=36286,uS=3200,fS=3201,dS=0,hS=1,Ai="",pn="srgb",Zr="srgb-linear",Ko="linear",at="srgb",gr=7680,sd=519,pS=512,mS=513,_S=514,lm=515,gS=516,vS=517,xS=518,ES=519,od=35044,ad="300 es",ai=2e3,jo=2001;class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ha=Math.PI/180,Ac=180/Math.PI;function Ys(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function SS(t,e){return(t%e+e)%e}function Va(t,e,n){return(1-n)*t+n*e}function as(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ut{constructor(e=0,n=0){ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],E=r[0],m=r[3],d=r[6],M=r[1],y=r[4],_=r[7],N=r[2],L=r[5],C=r[8];return s[0]=o*E+a*M+l*N,s[3]=o*m+a*y+l*L,s[6]=o*d+a*_+l*C,s[1]=c*E+u*M+f*N,s[4]=c*m+u*y+f*L,s[7]=c*d+u*_+f*C,s[2]=h*E+p*M+g*N,s[5]=h*m+p*y+g*L,s[8]=h*d+p*_+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return e[0]=f*E,e[1]=(r*c-u*i)*E,e[2]=(a*i-r*o)*E,e[3]=h*E,e[4]=(u*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=p*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(za.makeScale(e,n)),this}rotate(e){return this.premultiply(za.makeRotation(-e)),this}translate(e,n){return this.premultiply(za.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const za=new We;function cm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Zo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function MS(){const t=Zo("canvas");return t.style.display="block",t}const ld={};function Oo(t){t in ld||(ld[t]=!0,console.warn(t))}function yS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function TS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const cd=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ud=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AS(){const t={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=li(r.r),r.g=li(r.g),r.b=li(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=zr(r.r),r.g=zr(r.g),r.b=zr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ai?Ko:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Zr]:{primaries:e,whitePoint:i,transfer:Ko,toXYZ:cd,fromXYZ:ud,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:cd,fromXYZ:ud,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),t}const Ze=AS();function li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let vr;class RS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vr===void 0&&(vr=Zo("canvas")),vr.width=e.width,vr.height=e.height;const r=vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=vr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Zo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=li(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(li(n[i]/255)*255):n[i]=li(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CS=0;class du{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Ys(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ga(r[o].image)):s.push(Ga(r[o]))}else s=Ga(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ga(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?RS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wS=0;class Jt extends Qr{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=sr,r=sr,s=Bn,o=or,a=Cn,l=ci,c=Jt.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Ys(),this.name="",this.source=new du(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jl:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case Ql:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jl:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case Ql:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Qp;Jt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,n=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],E=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,_=(p+1)/2,N=(d+1)/2,L=(u+h)/4,C=(f+E)/4,k=(g+m)/4;return y>_&&y>N?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=L/i,s=C/i):_>N?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=L/r,s=k/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=C/s,r=k/s),this.set(i,r,s,n),this}let M=Math.sqrt((m-g)*(m-g)+(f-E)*(f-E)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-E)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PS extends Qr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth?i.depth:1,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n);const r={width:e,height:n,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new du(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends PS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class um extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LS extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],E=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=E;return}if(f!==E||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*E,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const N=Math.sqrt(y),L=Math.atan2(N,d*M);m=Math.sin(m*L)/N,a=Math.sin(a*L)/N}const _=a*M;if(l=l*m+h*_,c=c*m+p*_,u=u*m+g*_,f=f*m+E*_,m===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=N,c*=N,u*=N,f*=N}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*h,e[n+1]=l*g+u*h+c*f-a*p,e[n+2]=c*g+u*p+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new Q,fd=new qs;class Ks{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Mn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Mn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Mn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(s,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),ao.subVectors(this.max,ls),xr.subVectors(e.a,ls),Er.subVectors(e.b,ls),Sr.subVectors(e.c,ls),mi.subVectors(Er,xr),_i.subVectors(Sr,Er),$i.subVectors(xr,Sr);let n=[0,-mi.z,mi.y,0,-_i.z,_i.y,0,-$i.z,$i.y,mi.z,0,-mi.x,_i.z,0,-_i.x,$i.z,0,-$i.x,-mi.y,mi.x,0,-_i.y,_i.x,0,-$i.y,$i.x,0];return!Xa(n,xr,Er,Sr,ao)||(n=[1,0,0,0,1,0,0,0,1],!Xa(n,xr,Er,Sr,ao))?!1:(lo.crossVectors(mi,_i),n=[lo.x,lo.y,lo.z],Xa(n,xr,Er,Sr,ao))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Mn=new Q,oo=new Ks,xr=new Q,Er=new Q,Sr=new Q,mi=new Q,_i=new Q,$i=new Q,ls=new Q,ao=new Q,lo=new Q,Yi=new Q;function Xa(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Yi.fromArray(t,s);const a=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),l=e.dot(Yi),c=n.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const IS=new Ks,cs=new Q,$a=new Q;class hu{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):IS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);const n=cs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(cs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add($a)),this.expandByPoint(cs.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new Q,Ya=new Q,co=new Q,gi=new Q,qa=new Q,uo=new Q,Ka=new Q;class DS{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,n),jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ya.copy(e).add(n).multiplyScalar(.5),co.copy(n).sub(e).normalize(),gi.copy(this.origin).sub(Ya);const s=e.distanceTo(n)*.5,o=-this.direction.dot(co),a=gi.dot(this.direction),l=-gi.dot(co),c=gi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const E=1/u;f*=E,h*=E,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ya).addScaledVector(co,h),p}intersectSphere(e,n){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,n,i,r,s){qa.subVectors(n,e),uo.subVectors(i,e),Ka.crossVectors(qa,uo);let o=this.direction.dot(Ka),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const l=a*this.direction.dot(uo.crossVectors(gi,uo));if(l<0)return null;const c=a*this.direction.dot(qa.cross(gi));if(c<0||l+c>o)return null;const u=-a*gi.dot(Ka);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,g,E,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,E,m)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,E,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=E,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,E=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=h-E*c,n[9]=-a*l,n[2]=E-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,E=c*f;n[0]=h+E*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=E+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,E=c*f;n[0]=h-E*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=E-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,E=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+E,n[1]=l*f,n[5]=E*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,E=a*c;n[0]=l*u,n[4]=E-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=h-E*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,E=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+E,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=E*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NS,e,US)}lookAt(e,n,i){const r=this.elements;return tn.subVectors(e,n),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),vi.crossVectors(i,tn),vi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),vi.crossVectors(i,tn)),vi.normalize(),fo.crossVectors(tn,vi),r[0]=vi.x,r[4]=fo.x,r[8]=tn.x,r[1]=vi.y,r[5]=fo.y,r[9]=tn.y,r[2]=vi.z,r[6]=fo.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],E=i[6],m=i[10],d=i[14],M=i[3],y=i[7],_=i[11],N=i[15],L=r[0],C=r[4],k=r[8],A=r[12],T=r[1],B=r[5],H=r[9],$=r[13],ee=r[2],oe=r[6],Z=r[10],se=r[14],Y=r[3],he=r[7],_e=r[11],Te=r[15];return s[0]=o*L+a*T+l*ee+c*Y,s[4]=o*C+a*B+l*oe+c*he,s[8]=o*k+a*H+l*Z+c*_e,s[12]=o*A+a*$+l*se+c*Te,s[1]=u*L+f*T+h*ee+p*Y,s[5]=u*C+f*B+h*oe+p*he,s[9]=u*k+f*H+h*Z+p*_e,s[13]=u*A+f*$+h*se+p*Te,s[2]=g*L+E*T+m*ee+d*Y,s[6]=g*C+E*B+m*oe+d*he,s[10]=g*k+E*H+m*Z+d*_e,s[14]=g*A+E*$+m*se+d*Te,s[3]=M*L+y*T+_*ee+N*Y,s[7]=M*C+y*B+_*oe+N*he,s[11]=M*k+y*H+_*Z+N*_e,s[15]=M*A+y*$+_*se+N*Te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],E=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+E*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],E=e[13],m=e[14],d=e[15],M=f*m*c-E*h*c+E*l*p-a*m*p-f*l*d+a*h*d,y=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,_=u*E*c-g*f*c+g*a*p-o*E*p-u*a*d+o*f*d,N=g*f*l-u*E*l-g*a*h+o*E*h+u*a*m-o*f*m,L=n*M+i*y+r*_+s*N;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=M*C,e[1]=(E*h*s-f*m*s-E*r*p+i*m*p+f*r*d-i*h*d)*C,e[2]=(a*m*s-E*l*s+E*r*c-i*m*c-a*r*d+i*l*d)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*C,e[4]=y*C,e[5]=(u*m*s-g*h*s+g*r*p-n*m*p-u*r*d+n*h*d)*C,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*d-n*l*d)*C,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*C,e[8]=_*C,e[9]=(g*f*s-u*E*s-g*i*p+n*E*p+u*i*d-n*f*d)*C,e[10]=(o*E*s-g*a*s+g*i*c-n*E*c-o*i*d+n*a*d)*C,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*C,e[12]=N*C,e[13]=(u*E*r-g*f*r+g*i*h-n*E*h-u*i*m+n*f*m)*C,e[14]=(g*a*r-o*E*r-g*i*l+n*E*l+o*i*m-n*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,E=o*u,m=o*f,d=a*f,M=l*c,y=l*u,_=l*f,N=i.x,L=i.y,C=i.z;return r[0]=(1-(E+d))*N,r[1]=(p+_)*N,r[2]=(g-y)*N,r[3]=0,r[4]=(p-_)*L,r[5]=(1-(h+d))*L,r[6]=(m+M)*L,r[7]=0,r[8]=(g+y)*C,r[9]=(m-M)*C,r[10]=(1-(h+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Mr.set(r[0],r[1],r[2]).length();const o=Mr.set(r[4],r[5],r[6]).length(),a=Mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],yn.copy(this);const c=1/s,u=1/o,f=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,n.setFromRotationMatrix(yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ai){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===ai)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===jo)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ai){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let g,E;if(a===ai)g=(o+s)*f,E=-2*f;else if(a===jo)g=s*f,E=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Mr=new Q,yn=new At,NS=new Q(0,0,0),US=new Q(1,1,1),vi=new Q,fo=new Q,tn=new Q,dd=new At,hd=new qs;class ui{constructor(e=0,n=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hd.setFromEuler(this),this.setFromQuaternion(hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class fm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FS=0;const pd=new Q,yr=new qs,Zn=new At,ho=new Q,us=new Q,OS=new Q,BS=new qs,md=new Q(1,0,0),_d=new Q(0,1,0),gd=new Q(0,0,1),vd={type:"added"},kS={type:"removed"},Tr={type:"childadded",child:null},ja={type:"childremoved",child:null};class ln extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new Q,n=new ui,i=new qs,r=new Q(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new We}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(md,e)}rotateY(e){return this.rotateOnAxis(_d,e)}rotateZ(e){return this.rotateOnAxis(gd,e)}translateOnAxis(e,n){return pd.copy(e).applyQuaternion(this.quaternion),this.position.add(pd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(md,e)}translateY(e){return this.translateOnAxis(_d,e)}translateZ(e){return this.translateOnAxis(gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ho.copy(e):ho.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(us,ho,this.up):Zn.lookAt(ho,us,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(Zn),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vd),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kS),ja.child=e,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vd),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,OS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,BS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new Q(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new Q,Jn=new Q,Za=new Q,Qn=new Q,br=new Q,Ar=new Q,xd=new Q,Ja=new Q,Qa=new Q,el=new Q,tl=new Et,nl=new Et,il=new Et;class bn{constructor(e=new Q,n=new Q,i=new Q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Tn.subVectors(e,n),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Tn.subVectors(r,n),Jn.subVectors(i,n),Za.subVectors(e,n);const o=Tn.dot(Tn),a=Tn.dot(Jn),l=Tn.dot(Za),c=Jn.dot(Jn),u=Jn.dot(Za),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return tl.setScalar(0),nl.setScalar(0),il.setScalar(0),tl.fromBufferAttribute(e,n),nl.fromBufferAttribute(e,i),il.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(tl,s.x),o.addScaledVector(nl,s.y),o.addScaledVector(il,s.z),o}static isFrontFacing(e,n,i,r){return Tn.subVectors(i,n),Jn.subVectors(e,n),Tn.cross(Jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Tn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;br.subVectors(r,i),Ar.subVectors(s,i),Ja.subVectors(e,i);const l=br.dot(Ja),c=Ar.dot(Ja);if(l<=0&&c<=0)return n.copy(i);Qa.subVectors(e,r);const u=br.dot(Qa),f=Ar.dot(Qa);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(br,o);el.subVectors(e,s);const p=br.dot(el),g=Ar.dot(el);if(g>=0&&p<=g)return n.copy(s);const E=p*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Ar,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return xd.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(xd,a);const d=1/(m+E+h);return o=E*d,a=h*d,n.copy(i).addScaledVector(br,o).addScaledVector(Ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},po={h:0,s:0,l:0};function rl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class lt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=SS(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=rl(o,s,e+1/3),this.g=rl(o,s,e),this.b=rl(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pn){const i=dm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return Ze.fromWorkingColorSpace(Bt.copy(this),e),Math.round(qe(Bt.r*255,0,255))*65536+Math.round(qe(Bt.g*255,0,255))*256+Math.round(qe(Bt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=pn){Ze.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+n,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(xi),e.getHSL(po);const i=Va(xi.h,po.h,n),r=Va(xi.s,po.s,n),s=Va(xi.l,po.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new lt;lt.NAMES=dm;let HS=0;class ma extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=Vr,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=zl,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vl&&(i.blendSrc=this.blendSrc),this.blendDst!==zl&&(i.blendDst=this.blendDst),this.blendEquation!==nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pu extends ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Jp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new Q,mo=new ut;let VS=0;class Gn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=od,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)mo.fromBufferAttribute(this,n),mo.applyMatrix3(e),this.setXY(n,mo.x,mo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=as(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=as(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=as(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=as(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=as(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==od&&(e.usage=this.usage),e}}class hm extends Gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class pm extends Gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class cr extends Gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let zS=0;const hn=new At,sl=new ln,Rr=new Q,nn=new Ks,fs=new Ks,Lt=new Q;class pr extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cm(e)?pm:hm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,n,i){return hn.makeTranslation(e,n,i),this.applyMatrix4(hn),this}scale(e,n,i){return hn.makeScale(e,n,i),this.applyMatrix4(hn),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new cr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ks);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(nn.min,fs.min),nn.expandByPoint(Lt),Lt.addVectors(nn.max,fs.max),nn.expandByPoint(Lt)):(nn.expandByPoint(fs.min),nn.expandByPoint(fs.max))}nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(Rr.fromBufferAttribute(e,c),Lt.add(Rr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<i.count;k++)a[k]=new Q,l[k]=new Q;const c=new Q,u=new Q,f=new Q,h=new ut,p=new ut,g=new ut,E=new Q,m=new Q;function d(k,A,T){c.fromBufferAttribute(i,k),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,T),h.fromBufferAttribute(s,k),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,T),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const B=1/(p.x*g.y-g.x*p.y);isFinite(B)&&(E.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(B),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(B),a[k].add(E),a[A].add(E),a[T].add(E),l[k].add(m),l[A].add(m),l[T].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let k=0,A=M.length;k<A;++k){const T=M[k],B=T.start,H=T.count;for(let $=B,ee=B+H;$<ee;$+=3)d(e.getX($+0),e.getX($+1),e.getX($+2))}const y=new Q,_=new Q,N=new Q,L=new Q;function C(k){N.fromBufferAttribute(r,k),L.copy(N);const A=a[k];y.copy(A),y.sub(N.multiplyScalar(N.dot(A))).normalize(),_.crossVectors(L,A);const B=_.dot(l[k])<0?-1:1;o.setXYZW(k,y.x,y.y,y.z,B)}for(let k=0,A=M.length;k<A;++k){const T=M[k],B=T.start,H=T.count;for(let $=B,ee=B+H;$<ee;$+=3)C(e.getX($+0)),C(e.getX($+1)),C(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new Q,s=new Q,o=new Q,a=new Q,l=new Q,c=new Q,u=new Q,f=new Q;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),E=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?p=l[E]*a.data.stride+a.offset:p=l[E]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new Gn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ed=new At,qi=new DS,_o=new hu,Sd=new Q,go=new Q,vo=new Q,xo=new Q,ol=new Q,Eo=new Q,Md=new Q,So=new Q;class kn extends ln{constructor(e=new pr,n=new pu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Eo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ol.fromBufferAttribute(f,e),o?Eo.addScaledVector(ol,u):Eo.addScaledVector(ol.sub(n),u))}n.add(Eo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(s),qi.copy(e.ray).recast(e.near),!(_o.containsPoint(qi.origin)===!1&&(qi.intersectSphere(_o,Sd)===null||qi.origin.distanceToSquared(Sd)>(e.far-e.near)**2))&&(Ed.copy(s).invert(),qi.copy(e.ray).applyMatrix4(Ed),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,qi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=h.length;g<E;g++){const m=h[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,N=y;_<N;_+=3){const L=a.getX(_),C=a.getX(_+1),k=a.getX(_+2);r=Mo(this,d,e,i,c,u,f,L,C,k),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let m=g,d=E;m<d;m+=3){const M=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);r=Mo(this,o,e,i,c,u,f,M,y,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=h.length;g<E;g++){const m=h[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,N=y;_<N;_+=3){const L=_,C=_+1,k=_+2;r=Mo(this,d,e,i,c,u,f,L,C,k),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=g,d=E;m<d;m+=3){const M=m,y=m+1,_=m+2;r=Mo(this,o,e,i,c,u,f,M,y,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function GS(t,e,n,i,r,s,o,a){let l;if(e.side===Zt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ii,a),l===null)return null;So.copy(a),So.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(So);return c<n.near||c>n.far?null:{distance:c,point:So.clone(),object:t}}function Mo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,go),t.getVertexPosition(l,vo),t.getVertexPosition(c,xo);const u=GS(t,e,n,i,go,vo,xo,Md);if(u){const f=new Q;bn.getBarycoord(Md,go,vo,xo,f),r&&(u.uv=bn.getInterpolatedAttribute(r,a,l,c,f,new ut)),s&&(u.uv1=bn.getInterpolatedAttribute(s,a,l,c,f,new ut)),o&&(u.normal=bn.getInterpolatedAttribute(o,a,l,c,f,new Q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Q,materialIndex:0};bn.getNormal(go,vo,xo,h.normal),u.face=h,u.barycoord=f}return u}class es extends pr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cr(c,3)),this.setAttribute("normal",new cr(u,3)),this.setAttribute("uv",new cr(f,2));function g(E,m,d,M,y,_,N,L,C,k,A){const T=_/C,B=N/k,H=_/2,$=N/2,ee=L/2,oe=C+1,Z=k+1;let se=0,Y=0;const he=new Q;for(let _e=0;_e<Z;_e++){const Te=_e*B-$;for(let Le=0;Le<oe;Le++){const $e=Le*T-H;he[E]=$e*M,he[m]=Te*y,he[d]=ee,c.push(he.x,he.y,he.z),he[E]=0,he[m]=0,he[d]=L>0?1:-1,u.push(he.x,he.y,he.z),f.push(Le/C),f.push(1-_e/k),se+=1}}for(let _e=0;_e<k;_e++)for(let Te=0;Te<C;Te++){const Le=h+Te+oe*_e,$e=h+Te+oe*(_e+1),ie=h+(Te+1)+oe*(_e+1),me=h+(Te+1)+oe*_e;l.push(Le,$e,me),l.push($e,ie,me),Y+=6}a.addGroup(p,Y,A),p+=Y,h+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=Jr(t[n]);for(const r in i)e[r]=i[r]}return e}function WS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function mm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const XS={clone:Jr,merge:Wt};var $S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$S,this.fragmentShader=YS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=WS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class _m extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new Q,yd=new ut,Td=new ut;class _n extends _m{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ac*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ac*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,n){return this.getViewBounds(e,yd,Td),n.subVectors(Td,yd)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ha*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cr=-90,wr=1;class qS extends ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Cr,wr,e,n);r.layers=this.layers,this.add(r);const s=new _n(Cr,wr,e,n);s.layers=this.layers,this.add(s);const o=new _n(Cr,wr,e,n);o.layers=this.layers,this.add(o);const a=new _n(Cr,wr,e,n);a.layers=this.layers,this.add(a);const l=new _n(Cr,wr,e,n);l.layers=this.layers,this.add(l);const c=new _n(Cr,wr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class gm extends Jt{constructor(e=[],n=Kr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KS extends dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gm(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new es(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:wi});s.uniforms.tEquirect.value=n;const o=new kn(r,s),a=n.minFilter;return n.minFilter===or&&(n.minFilter=Bn),new qS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class yo extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jS={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const m=n.getJointPose(E,i),d=this._getHandJoint(c,E);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new yo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class ZS extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ll=new Q,JS=new Q,QS=new We;class Qi{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ll.subVectors(i,n).cross(JS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ll),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||QS.getNormalMatrix(e),r=this.coplanarPoint(ll).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new hu,To=new Q;class vm{constructor(e=new Qi,n=new Qi,i=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],E=r[10],m=r[11],d=r[12],M=r[13],y=r[14],_=r[15];if(i[0].setComponents(l-s,h-c,m-p,_-d).normalize(),i[1].setComponents(l+s,h+c,m+p,_+d).normalize(),i[2].setComponents(l+o,h+u,m+g,_+M).normalize(),i[3].setComponents(l-o,h-u,m-g,_-M).normalize(),i[4].setComponents(l-a,h-f,m-E,_-y).normalize(),n===ai)i[5].setComponents(l+a,h+f,m+E,_+y).normalize();else if(n===jo)i[5].setComponents(a,f,E,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(To.x=r.normal.x>0?e.max.x:e.min.x,To.y=r.normal.y>0?e.max.y:e.min.y,To.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xm extends Jt{constructor(e,n,i=fr,r,s,o,a=Pn,l=Pn,c,u=Bs){if(u!==Bs&&u!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new du(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class _a extends pr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],g=[],E=[],m=[];for(let d=0;d<u;d++){const M=d*h-o;for(let y=0;y<c;y++){const _=y*f-s;g.push(_,-M,0),E.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const y=M+c*d,_=M+c*(d+1),N=M+1+c*(d+1),L=M+1+c*d;p.push(y,_,L),p.push(_,N,L)}this.setIndex(p),this.setAttribute("position",new cr(g,3)),this.setAttribute("normal",new cr(E,3)),this.setAttribute("uv",new cr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.widthSegments,e.heightSegments)}}class eM extends ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tM extends ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nM extends _m{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class iM extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function bd(t,e,n,i){const r=rM(i);switch(n){case im:return t*e;case sm:return t*e/r.components*r.byteLength;case cu:return t*e/r.components*r.byteLength;case om:return t*e*2/r.components*r.byteLength;case uu:return t*e*2/r.components*r.byteLength;case rm:return t*e*3/r.components*r.byteLength;case Cn:return t*e*4/r.components*r.byteLength;case fu:return t*e*4/r.components*r.byteLength;case Io:case Do:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case No:case Uo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(t,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(t,8)*Math.max(e,8)/2;case rc:case sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case cc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case dc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case pc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case mc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case gc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case vc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case xc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Fo:case Sc:case Mc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case am:case yc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Tc:case bc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rM(t){switch(t){case ci:case em:return{byteLength:1,components:1};case Fs:case tm:case $s:return{byteLength:2,components:1};case au:case lu:return{byteLength:2,components:4};case fr:case ou:case oi:return{byteLength:4,components:1};case nm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:su}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=su);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Em(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function sM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],E=f[p];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++h,f[h]=E)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const E=f[p];t.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var oM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,EM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,GM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,JM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,QM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ry=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ly=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,my=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,My=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ny=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,By=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$y=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_T=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:oM,alphahash_pars_fragment:aM,alphamap_fragment:lM,alphamap_pars_fragment:cM,alphatest_fragment:uM,alphatest_pars_fragment:fM,aomap_fragment:dM,aomap_pars_fragment:hM,batching_pars_vertex:pM,batching_vertex:mM,begin_vertex:_M,beginnormal_vertex:gM,bsdfs:vM,iridescence_fragment:xM,bumpmap_pars_fragment:EM,clipping_planes_fragment:SM,clipping_planes_pars_fragment:MM,clipping_planes_pars_vertex:yM,clipping_planes_vertex:TM,color_fragment:bM,color_pars_fragment:AM,color_pars_vertex:RM,color_vertex:CM,common:wM,cube_uv_reflection_fragment:PM,defaultnormal_vertex:LM,displacementmap_pars_vertex:IM,displacementmap_vertex:DM,emissivemap_fragment:NM,emissivemap_pars_fragment:UM,colorspace_fragment:FM,colorspace_pars_fragment:OM,envmap_fragment:BM,envmap_common_pars_fragment:kM,envmap_pars_fragment:HM,envmap_pars_vertex:VM,envmap_physical_pars_fragment:JM,envmap_vertex:zM,fog_vertex:GM,fog_pars_vertex:WM,fog_fragment:XM,fog_pars_fragment:$M,gradientmap_pars_fragment:YM,lightmap_pars_fragment:qM,lights_lambert_fragment:KM,lights_lambert_pars_fragment:jM,lights_pars_begin:ZM,lights_toon_fragment:QM,lights_toon_pars_fragment:ey,lights_phong_fragment:ty,lights_phong_pars_fragment:ny,lights_physical_fragment:iy,lights_physical_pars_fragment:ry,lights_fragment_begin:sy,lights_fragment_maps:oy,lights_fragment_end:ay,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:cy,logdepthbuf_pars_vertex:uy,logdepthbuf_vertex:fy,map_fragment:dy,map_pars_fragment:hy,map_particle_fragment:py,map_particle_pars_fragment:my,metalnessmap_fragment:_y,metalnessmap_pars_fragment:gy,morphinstance_vertex:vy,morphcolor_vertex:xy,morphnormal_vertex:Ey,morphtarget_pars_vertex:Sy,morphtarget_vertex:My,normal_fragment_begin:yy,normal_fragment_maps:Ty,normal_pars_fragment:by,normal_pars_vertex:Ay,normal_vertex:Ry,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:wy,clearcoat_normal_fragment_maps:Py,clearcoat_pars_fragment:Ly,iridescence_pars_fragment:Iy,opaque_fragment:Dy,packing:Ny,premultiplied_alpha_fragment:Uy,project_vertex:Fy,dithering_fragment:Oy,dithering_pars_fragment:By,roughnessmap_fragment:ky,roughnessmap_pars_fragment:Hy,shadowmap_pars_fragment:Vy,shadowmap_pars_vertex:zy,shadowmap_vertex:Gy,shadowmask_pars_fragment:Wy,skinbase_vertex:Xy,skinning_pars_vertex:$y,skinning_vertex:Yy,skinnormal_vertex:qy,specularmap_fragment:Ky,specularmap_pars_fragment:jy,tonemapping_fragment:Zy,tonemapping_pars_fragment:Jy,transmission_fragment:Qy,transmission_pars_fragment:eT,uv_pars_fragment:tT,uv_pars_vertex:nT,uv_vertex:iT,worldpos_vertex:rT,background_vert:sT,background_frag:oT,backgroundCube_vert:aT,backgroundCube_frag:lT,cube_vert:cT,cube_frag:uT,depth_vert:fT,depth_frag:dT,distanceRGBA_vert:hT,distanceRGBA_frag:pT,equirect_vert:mT,equirect_frag:_T,linedashed_vert:gT,linedashed_frag:vT,meshbasic_vert:xT,meshbasic_frag:ET,meshlambert_vert:ST,meshlambert_frag:MT,meshmatcap_vert:yT,meshmatcap_frag:TT,meshnormal_vert:bT,meshnormal_frag:AT,meshphong_vert:RT,meshphong_frag:CT,meshphysical_vert:wT,meshphysical_frag:PT,meshtoon_vert:LT,meshtoon_frag:IT,points_vert:DT,points_frag:NT,shadow_vert:UT,shadow_frag:FT,sprite_vert:OT,sprite_frag:BT},Ee={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},On={basic:{uniforms:Wt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Wt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Wt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Wt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Wt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Wt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Wt([Ee.points,Ee.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Wt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Wt([Ee.common,Ee.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Wt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Wt([Ee.sprite,Ee.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Wt([Ee.common,Ee.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Wt([Ee.lights,Ee.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};On.physical={uniforms:Wt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const bo={r:0,b:0,g:0},ji=new ui,kT=new At;function HT(t,e,n,i,r,s,o){const a=new lt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?n:e).get(_)),_}function E(y){let _=!1;const N=g(y);N===null?d(a,l):N&&N.isColor&&(d(N,1),_=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,_){const N=g(_);N&&(N.isCubeTexture||N.mapping===pa)?(u===void 0&&(u=new kn(new es(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Jr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ji.copy(_.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kT.makeRotationFromEuler(ji)),u.material.toneMapped=Ze.getTransfer(N.colorSpace)!==at,(f!==N||h!==N.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=N,h=N.version,p=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new kn(new _a(2,2),new Di({name:"BackgroundMaterial",uniforms:Jr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(N.colorSpace)!==at,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(f!==N||h!==N.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=N,h=N.version,p=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,_){y.getRGB(bo,mm(t)),i.buffers.color.setClear(bo.r,bo.g,bo.b,_,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:E,addToRenderList:m,dispose:M}}function VT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(T,B,H,$,ee){let oe=!1;const Z=f($,H,B);s!==Z&&(s=Z,c(s.object)),oe=p(T,$,H,ee),oe&&g(T,$,H,ee),ee!==null&&e.update(ee,t.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,_(T,B,H,$),ee!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return t.createVertexArray()}function c(T){return t.bindVertexArray(T)}function u(T){return t.deleteVertexArray(T)}function f(T,B,H){const $=H.wireframe===!0;let ee=i[T.id];ee===void 0&&(ee={},i[T.id]=ee);let oe=ee[B.id];oe===void 0&&(oe={},ee[B.id]=oe);let Z=oe[$];return Z===void 0&&(Z=h(l()),oe[$]=Z),Z}function h(T){const B=[],H=[],$=[];for(let ee=0;ee<n;ee++)B[ee]=0,H[ee]=0,$[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:$,object:T,attributes:{},index:null}}function p(T,B,H,$){const ee=s.attributes,oe=B.attributes;let Z=0;const se=H.getAttributes();for(const Y in se)if(se[Y].location>=0){const _e=ee[Y];let Te=oe[Y];if(Te===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(Te=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(Te=T.instanceColor)),_e===void 0||_e.attribute!==Te||Te&&_e.data!==Te.data)return!0;Z++}return s.attributesNum!==Z||s.index!==$}function g(T,B,H,$){const ee={},oe=B.attributes;let Z=0;const se=H.getAttributes();for(const Y in se)if(se[Y].location>=0){let _e=oe[Y];_e===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(_e=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(_e=T.instanceColor));const Te={};Te.attribute=_e,_e&&_e.data&&(Te.data=_e.data),ee[Y]=Te,Z++}s.attributes=ee,s.attributesNum=Z,s.index=$}function E(){const T=s.newAttributes;for(let B=0,H=T.length;B<H;B++)T[B]=0}function m(T){d(T,0)}function d(T,B){const H=s.newAttributes,$=s.enabledAttributes,ee=s.attributeDivisors;H[T]=1,$[T]===0&&(t.enableVertexAttribArray(T),$[T]=1),ee[T]!==B&&(t.vertexAttribDivisor(T,B),ee[T]=B)}function M(){const T=s.newAttributes,B=s.enabledAttributes;for(let H=0,$=B.length;H<$;H++)B[H]!==T[H]&&(t.disableVertexAttribArray(H),B[H]=0)}function y(T,B,H,$,ee,oe,Z){Z===!0?t.vertexAttribIPointer(T,B,H,ee,oe):t.vertexAttribPointer(T,B,H,$,ee,oe)}function _(T,B,H,$){E();const ee=$.attributes,oe=H.getAttributes(),Z=B.defaultAttributeValues;for(const se in oe){const Y=oe[se];if(Y.location>=0){let he=ee[se];if(he===void 0&&(se==="instanceMatrix"&&T.instanceMatrix&&(he=T.instanceMatrix),se==="instanceColor"&&T.instanceColor&&(he=T.instanceColor)),he!==void 0){const _e=he.normalized,Te=he.itemSize,Le=e.get(he);if(Le===void 0)continue;const $e=Le.buffer,ie=Le.type,me=Le.bytesPerElement,ve=ie===t.INT||ie===t.UNSIGNED_INT||he.gpuType===ou;if(he.isInterleavedBufferAttribute){const V=he.data,re=V.stride,le=he.offset;if(V.isInstancedInterleavedBuffer){for(let ce=0;ce<Y.locationSize;ce++)d(Y.location+ce,V.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ce=0;ce<Y.locationSize;ce++)m(Y.location+ce);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let ce=0;ce<Y.locationSize;ce++)y(Y.location+ce,Te/Y.locationSize,ie,_e,re*me,(le+Te/Y.locationSize*ce)*me,ve)}else{if(he.isInstancedBufferAttribute){for(let V=0;V<Y.locationSize;V++)d(Y.location+V,he.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let V=0;V<Y.locationSize;V++)m(Y.location+V);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let V=0;V<Y.locationSize;V++)y(Y.location+V,Te/Y.locationSize,ie,_e,Te*me,Te/Y.locationSize*V*me,ve)}}else if(Z!==void 0){const _e=Z[se];if(_e!==void 0)switch(_e.length){case 2:t.vertexAttrib2fv(Y.location,_e);break;case 3:t.vertexAttrib3fv(Y.location,_e);break;case 4:t.vertexAttrib4fv(Y.location,_e);break;default:t.vertexAttrib1fv(Y.location,_e)}}}}M()}function N(){k();for(const T in i){const B=i[T];for(const H in B){const $=B[H];for(const ee in $)u($[ee].object),delete $[ee];delete B[H]}delete i[T]}}function L(T){if(i[T.id]===void 0)return;const B=i[T.id];for(const H in B){const $=B[H];for(const ee in $)u($[ee].object),delete $[ee];delete B[H]}delete i[T.id]}function C(T){for(const B in i){const H=i[B];if(H[T.id]===void 0)continue;const $=H[T.id];for(const ee in $)u($[ee].object),delete $[ee];delete H[T.id]}}function k(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:k,resetDefaultState:A,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:m,disableUnusedAttributes:M}}function zT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let E=0;E<f;E++)g+=u[E]*h[E];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function GT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Cn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const k=C===$s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ci&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==oi&&!k)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:N,maxSamples:L}}function WT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Qi,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,E=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,y=M*4;let _=d.clippingState||null;l.value=_,_=u(g,h,y,p);for(let N=0;N!==y;++N)_[N]=n[N];d.clippingState=_,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const E=f!==null?f.length:0;let m=null;if(E!==0){if(m=l.value,g!==!0||m===null){const d=p+E*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,_=p;y!==E;++y,_+=4)o.copy(f[y]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function XT(t){let e=new WeakMap;function n(o,a){return a===jl?o.mapping=Kr:a===Zl&&(o.mapping=jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===jl||a===Zl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new KS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Nr=4,Ad=[.125,.215,.35,.446,.526,.582],ir=20,cl=new nM,Rd=new lt;let ul=null,fl=0,dl=0,hl=!1;const er=(1+Math.sqrt(5))/2,Pr=1/er,Cd=[new Q(-er,Pr,0),new Q(er,Pr,0),new Q(-Pr,0,er),new Q(Pr,0,er),new Q(0,er,-Pr),new Q(0,er,Pr),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],$T=new Q;class wd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=$T}=s;ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,fl,dl),this._renderer.xr.enabled=hl,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Kr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:$s,format:Cn,colorSpace:Zr,depthBuffer:!1},r=Pd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pd(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YT(s)),this._blurMaterial=qT(s,e,n)}return r}_compileMaterial(e){const n=new kn(this._lodPlanes[0],e);this._renderer.compile(n,cl)}_sceneToCubeUV(e,n,i,r,s){const l=new _n(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Rd),f.toneMapping=Pi,f.autoClear=!1;const g=new pu({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),E=new kn(new es,g);let m=!1;const d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(Rd),m=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const _=this._cubeSize;Ao(r,y*_,M>2?_:0,_,_),f.setRenderTarget(r),m&&f.render(E,l),f.render(e,l)}E.geometry.dispose(),E.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Kr||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ld());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new kn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ao(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,cl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cd[(r-s-1)%Cd.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new kn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ir-1),E=s/g,m=isFinite(s)?1+Math.floor(u*E):ir;m>ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ir}`);const d=[];let M=0;for(let C=0;C<ir;++C){const k=C/E,A=Math.exp(-k*k/2);d.push(A),C===0?M+=A:C<m&&(M+=2*A)}for(let C=0;C<d.length;C++)d[C]=d[C]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const _=this._sizeLods[r],N=3*_*(r>y-Nr?r-y+Nr:0),L=4*(this._cubeSize-_);Ao(n,N,L,3*_,2*_),l.setRenderTarget(n),l.render(f,cl)}}function YT(t){const e=[],n=[],i=[];let r=t;const s=t-Nr+1+Ad.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Nr?l=Ad[o-t+Nr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,E=3,m=2,d=1,M=new Float32Array(E*g*p),y=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let L=0;L<p;L++){const C=L%3*2/3-1,k=L>2?0:-1,A=[C,k,0,C+2/3,k,0,C+2/3,k+1,0,C,k,0,C+2/3,k+1,0,C,k+1,0];M.set(A,E*g*L),y.set(h,m*g*L);const T=[L,L,L,L,L,L];_.set(T,d*g*L)}const N=new pr;N.setAttribute("position",new Gn(M,E)),N.setAttribute("uv",new Gn(y,m)),N.setAttribute("faceIndex",new Gn(_,d)),e.push(N),r>Nr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Pd(t,e,n){const i=new dr(t,e,n);return i.texture.mapping=pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function qT(t,e,n){const i=new Float32Array(ir),r=new Q(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ld(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Id(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function KT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===jl||l===Zl,u=l===Kr||l===jr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new wd(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new wd(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function jT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Oo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ZT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,g=f.attributes.position;let E=0;if(p!==null){const M=p.array;E=p.version;for(let y=0,_=M.length;y<_;y+=3){const N=M[y+0],L=M[y+1],C=M[y+2];h.push(N,L,L,C,C,N)}}else if(g!==void 0){const M=g.array;E=g.version;for(let y=0,_=M.length/3-1;y<_;y+=3){const N=y+0,L=y+1,C=y+2;h.push(N,L,L,C,C,N)}}else return;const m=new(cm(h)?pm:hm)(h,1);m.version=E;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function JT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function f(h,p,g,E){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],E[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,E,0,g);let d=0;for(let M=0;M<g;M++)d+=p[M]*E[M];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function QT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function eb(t,e,n){const i=new WeakMap,r=new Et;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let A=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),E===!0&&(y=3);let _=a.attributes.position.count*y,N=1;_>e.maxTextureSize&&(N=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const L=new Float32Array(_*N*4*f),C=new um(L,_,N,f);C.type=oi,C.needsUpdate=!0;const k=y*4;for(let T=0;T<f;T++){const B=m[T],H=d[T],$=M[T],ee=_*N*4*T;for(let oe=0;oe<B.count;oe++){const Z=oe*k;p===!0&&(r.fromBufferAttribute(B,oe),L[ee+Z+0]=r.x,L[ee+Z+1]=r.y,L[ee+Z+2]=r.z,L[ee+Z+3]=0),g===!0&&(r.fromBufferAttribute(H,oe),L[ee+Z+4]=r.x,L[ee+Z+5]=r.y,L[ee+Z+6]=r.z,L[ee+Z+7]=0),E===!0&&(r.fromBufferAttribute($,oe),L[ee+Z+8]=r.x,L[ee+Z+9]=r.y,L[ee+Z+10]=r.z,L[ee+Z+11]=$.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new ut(_,N)},i.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let E=0;E<c.length;E++)p+=c[E];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function tb(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Sm=new Jt,Dd=new xm(1,1),Mm=new um,ym=new LS,Tm=new gm,Nd=[],Ud=[],Fd=new Float32Array(16),Od=new Float32Array(9),Bd=new Float32Array(4);function ts(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Nd[r];if(s===void 0&&(s=new Float32Array(r),Nd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ga(t,e){let n=Ud[e];n===void 0&&(n=new Int32Array(e),Ud[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function nb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function ob(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(wt(n,i))return;Bd.set(i),t.uniformMatrix2fv(this.addr,!1,Bd),Pt(n,i)}}function ab(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(wt(n,i))return;Od.set(i),t.uniformMatrix3fv(this.addr,!1,Od),Pt(n,i)}}function lb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(wt(n,i))return;Fd.set(i),t.uniformMatrix4fv(this.addr,!1,Fd),Pt(n,i)}}function cb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function hb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function _b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function gb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Dd.compareFunction=lm,s=Dd):s=Sm,n.setTexture2D(e||s,r)}function vb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ym,r)}function xb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Tm,r)}function Eb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Mm,r)}function Sb(t){switch(t){case 5126:return nb;case 35664:return ib;case 35665:return rb;case 35666:return sb;case 35674:return ob;case 35675:return ab;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return fb;case 35669:case 35673:return db;case 5125:return hb;case 36294:return pb;case 36295:return mb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return xb;case 36289:case 36303:case 36311:case 36292:return Eb}}function Mb(t,e){t.uniform1fv(this.addr,e)}function yb(t,e){const n=ts(e,this.size,2);t.uniform2fv(this.addr,n)}function Tb(t,e){const n=ts(e,this.size,3);t.uniform3fv(this.addr,n)}function bb(t,e){const n=ts(e,this.size,4);t.uniform4fv(this.addr,n)}function Ab(t,e){const n=ts(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Rb(t,e){const n=ts(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Cb(t,e){const n=ts(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function wb(t,e){t.uniform1iv(this.addr,e)}function Pb(t,e){t.uniform2iv(this.addr,e)}function Lb(t,e){t.uniform3iv(this.addr,e)}function Ib(t,e){t.uniform4iv(this.addr,e)}function Db(t,e){t.uniform1uiv(this.addr,e)}function Nb(t,e){t.uniform2uiv(this.addr,e)}function Ub(t,e){t.uniform3uiv(this.addr,e)}function Fb(t,e){t.uniform4uiv(this.addr,e)}function Ob(t,e,n){const i=this.cache,r=e.length,s=ga(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Sm,s[o])}function Bb(t,e,n){const i=this.cache,r=e.length,s=ga(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ym,s[o])}function kb(t,e,n){const i=this.cache,r=e.length,s=ga(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Tm,s[o])}function Hb(t,e,n){const i=this.cache,r=e.length,s=ga(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Mm,s[o])}function Vb(t){switch(t){case 5126:return Mb;case 35664:return yb;case 35665:return Tb;case 35666:return bb;case 35674:return Ab;case 35675:return Rb;case 35676:return Cb;case 5124:case 35670:return wb;case 35667:case 35671:return Pb;case 35668:case 35672:return Lb;case 35669:case 35673:return Ib;case 5125:return Db;case 36294:return Nb;case 36295:return Ub;case 36296:return Fb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ob;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return Hb}}class zb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Sb(n.type)}}class Gb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Vb(n.type)}}class Wb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function kd(t,e){t.seq.push(e),t.map[e.id]=e}function Xb(t,e,n){const i=t.name,r=i.length;for(pl.lastIndex=0;;){const s=pl.exec(i),o=pl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){kd(n,c===void 0?new zb(a,t,e):new Gb(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Wb(a),kd(n,f)),n=f}}}class Bo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Xb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Hd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $b=37297;let Yb=0;function qb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Vd=new We;function Kb(t){Ze._getMatrix(Vd,Ze.workingColorSpace,t);const e=`mat3( ${Vd.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Ko:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function zd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+qb(t.getShaderSource(e),o)}else return r}function jb(t,e){const n=Kb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Zb(t,e){let n;switch(e){case nS:n="Linear";break;case iS:n="Reinhard";break;case rS:n="Cineon";break;case sS:n="ACESFilmic";break;case aS:n="AgX";break;case lS:n="Neutral";break;case oS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ro=new Q;function Jb(){Ze.getLuminanceCoefficients(Ro);const t=Ro.x.toFixed(4),e=Ro.y.toFixed(4),n=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function eA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function tA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function hs(t){return t!==""}function Gd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(t){return t.replace(nA,rA)}const iA=new Map;function rA(t,e){let n=Xe[e];if(n===void 0){const i=iA.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rc(n)}const sA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xd(t){return t.replace(sA,oA)}function oA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $d(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===UE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function lA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Kr:case jr:e="ENVMAP_TYPE_CUBE";break;case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function uA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Jp:e="ENVMAP_BLENDING_MULTIPLY";break;case eS:e="ENVMAP_BLENDING_MIX";break;case tS:e="ENVMAP_BLENDING_ADD";break}return e}function fA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function dA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=aA(n),c=lA(n),u=cA(n),f=uA(n),h=fA(n),p=Qb(n),g=eA(s),E=r.createProgram();let m,d,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(hs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(hs).join(`
`),d.length>0&&(d+=`
`)):(m=[$d(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),d=[$d(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==Pi?Zb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,jb("linearToOutputTexel",n.outputColorSpace),Jb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hs).join(`
`)),o=Rc(o),o=Gd(o,n),o=Wd(o,n),a=Rc(a),a=Gd(a,n),a=Wd(a,n),o=Xd(o),a=Xd(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===ad?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ad?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=M+m+o,_=M+d+a,N=Hd(r,r.VERTEX_SHADER,y),L=Hd(r,r.FRAGMENT_SHADER,_);r.attachShader(E,N),r.attachShader(E,L),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function C(B){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(E).trim(),$=r.getShaderInfoLog(N).trim(),ee=r.getShaderInfoLog(L).trim();let oe=!0,Z=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(oe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,N,L);else{const se=zd(r,N,"vertex"),Y=zd(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+H+`
`+se+`
`+Y)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):($===""||ee==="")&&(Z=!1);Z&&(B.diagnostics={runnable:oe,programLog:H,vertexShader:{log:$,prefix:m},fragmentShader:{log:ee,prefix:d}})}r.deleteShader(N),r.deleteShader(L),k=new Bo(r,E),A=tA(r,E)}let k;this.getUniforms=function(){return k===void 0&&C(this),k};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(E,$b)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Yb++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=N,this.fragmentShader=L,this}let hA=0;class pA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new mA(e),n.set(e,i)),i}}class mA{constructor(e){this.id=hA++,this.code=e,this.usedTimes=0}}function _A(t,e,n,i,r,s,o){const a=new fm,l=new pA,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,T,B,H,$){const ee=H.fog,oe=$.geometry,Z=A.isMeshStandardMaterial?H.environment:null,se=(A.isMeshStandardMaterial?n:e).get(A.envMap||Z),Y=se&&se.mapping===pa?se.image.height:null,he=g[A.type];A.precision!==null&&(p=r.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const _e=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Te=_e!==void 0?_e.length:0;let Le=0;oe.morphAttributes.position!==void 0&&(Le=1),oe.morphAttributes.normal!==void 0&&(Le=2),oe.morphAttributes.color!==void 0&&(Le=3);let $e,ie,me,ve;if(he){const st=On[he];$e=st.vertexShader,ie=st.fragmentShader}else $e=A.vertexShader,ie=A.fragmentShader,l.update(A),me=l.getVertexShaderID(A),ve=l.getFragmentShaderID(A);const V=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),le=$.isInstancedMesh===!0,ce=$.isBatchedMesh===!0,Ie=!!A.map,I=!!A.matcap,D=!!se,S=!!A.aoMap,te=!!A.lightMap,K=!!A.bumpMap,q=!!A.normalMap,b=!!A.displacementMap,w=!!A.emissiveMap,F=!!A.metalnessMap,x=!!A.roughnessMap,v=A.anisotropy>0,U=A.clearcoat>0,P=A.dispersion>0,O=A.iridescence>0,G=A.sheen>0,ue=A.transmission>0,ae=v&&!!A.anisotropyMap,Re=U&&!!A.clearcoatMap,be=U&&!!A.clearcoatNormalMap,de=U&&!!A.clearcoatRoughnessMap,xe=O&&!!A.iridescenceMap,De=O&&!!A.iridescenceThicknessMap,Fe=G&&!!A.sheenColorMap,ge=G&&!!A.sheenRoughnessMap,ke=!!A.specularMap,Ve=!!A.specularColorMap,ft=!!A.specularIntensityMap,z=ue&&!!A.transmissionMap,Me=ue&&!!A.thicknessMap,ne=!!A.gradientMap,fe=!!A.alphaMap,Ae=A.alphaTest>0,ye=!!A.alphaHash,Ge=!!A.extensions;let gt=Pi;A.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(gt=t.toneMapping);const Ft={shaderID:he,shaderType:A.type,shaderName:A.name,vertexShader:$e,fragmentShader:ie,defines:A.defines,customVertexShaderID:me,customFragmentShaderID:ve,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:ce,batchingColor:ce&&$._colorsTexture!==null,instancing:le,instancingColor:le&&$.instanceColor!==null,instancingMorph:le&&$.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:V===null?t.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Zr,alphaToCoverage:!!A.alphaToCoverage,map:Ie,matcap:I,envMap:D,envMapMode:D&&se.mapping,envMapCubeUVHeight:Y,aoMap:S,lightMap:te,bumpMap:K,normalMap:q,displacementMap:h&&b,emissiveMap:w,normalMapObjectSpace:q&&A.normalMapType===hS,normalMapTangentSpace:q&&A.normalMapType===dS,metalnessMap:F,roughnessMap:x,anisotropy:v,anisotropyMap:ae,clearcoat:U,clearcoatMap:Re,clearcoatNormalMap:be,clearcoatRoughnessMap:de,dispersion:P,iridescence:O,iridescenceMap:xe,iridescenceThicknessMap:De,sheen:G,sheenColorMap:Fe,sheenRoughnessMap:ge,specularMap:ke,specularColorMap:Ve,specularIntensityMap:ft,transmission:ue,transmissionMap:z,thicknessMap:Me,gradientMap:ne,opaque:A.transparent===!1&&A.blending===Vr&&A.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ae,alphaHash:ye,combine:A.combine,mapUv:Ie&&E(A.map.channel),aoMapUv:S&&E(A.aoMap.channel),lightMapUv:te&&E(A.lightMap.channel),bumpMapUv:K&&E(A.bumpMap.channel),normalMapUv:q&&E(A.normalMap.channel),displacementMapUv:b&&E(A.displacementMap.channel),emissiveMapUv:w&&E(A.emissiveMap.channel),metalnessMapUv:F&&E(A.metalnessMap.channel),roughnessMapUv:x&&E(A.roughnessMap.channel),anisotropyMapUv:ae&&E(A.anisotropyMap.channel),clearcoatMapUv:Re&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:be&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:De&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:ge&&E(A.sheenRoughnessMap.channel),specularMapUv:ke&&E(A.specularMap.channel),specularColorMapUv:Ve&&E(A.specularColorMap.channel),specularIntensityMapUv:ft&&E(A.specularIntensityMap.channel),transmissionMapUv:z&&E(A.transmissionMap.channel),thicknessMapUv:Me&&E(A.thicknessMap.channel),alphaMapUv:fe&&E(A.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(q||v),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!oe.attributes.uv&&(Ie||fe),fog:!!ee,useFog:A.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:re,skinning:$.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:Ie&&A.map.isVideoTexture===!0&&Ze.getTransfer(A.map.colorSpace)===at,decodeVideoTextureEmissive:w&&A.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(A.emissiveMap.colorSpace)===at,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ii,flipSided:A.side===Zt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ge&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&A.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function d(A){const T=[];if(A.shaderID?T.push(A.shaderID):(T.push(A.customVertexShaderID),T.push(A.customFragmentShaderID)),A.defines!==void 0)for(const B in A.defines)T.push(B),T.push(A.defines[B]);return A.isRawShaderMaterial===!1&&(M(T,A),y(T,A),T.push(t.outputColorSpace)),T.push(A.customProgramCacheKey),T.join()}function M(A,T){A.push(T.precision),A.push(T.outputColorSpace),A.push(T.envMapMode),A.push(T.envMapCubeUVHeight),A.push(T.mapUv),A.push(T.alphaMapUv),A.push(T.lightMapUv),A.push(T.aoMapUv),A.push(T.bumpMapUv),A.push(T.normalMapUv),A.push(T.displacementMapUv),A.push(T.emissiveMapUv),A.push(T.metalnessMapUv),A.push(T.roughnessMapUv),A.push(T.anisotropyMapUv),A.push(T.clearcoatMapUv),A.push(T.clearcoatNormalMapUv),A.push(T.clearcoatRoughnessMapUv),A.push(T.iridescenceMapUv),A.push(T.iridescenceThicknessMapUv),A.push(T.sheenColorMapUv),A.push(T.sheenRoughnessMapUv),A.push(T.specularMapUv),A.push(T.specularColorMapUv),A.push(T.specularIntensityMapUv),A.push(T.transmissionMapUv),A.push(T.thicknessMapUv),A.push(T.combine),A.push(T.fogExp2),A.push(T.sizeAttenuation),A.push(T.morphTargetsCount),A.push(T.morphAttributeCount),A.push(T.numDirLights),A.push(T.numPointLights),A.push(T.numSpotLights),A.push(T.numSpotLightMaps),A.push(T.numHemiLights),A.push(T.numRectAreaLights),A.push(T.numDirLightShadows),A.push(T.numPointLightShadows),A.push(T.numSpotLightShadows),A.push(T.numSpotLightShadowsWithMaps),A.push(T.numLightProbes),A.push(T.shadowMapType),A.push(T.toneMapping),A.push(T.numClippingPlanes),A.push(T.numClipIntersection),A.push(T.depthPacking)}function y(A,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),A.push(a.mask)}function _(A){const T=g[A.type];let B;if(T){const H=On[T];B=XS.clone(H.uniforms)}else B=A.uniforms;return B}function N(A,T){let B;for(let H=0,$=u.length;H<$;H++){const ee=u[H];if(ee.cacheKey===T){B=ee,++B.usedTimes;break}}return B===void 0&&(B=new dA(t,T,A,s),u.push(B)),B}function L(A){if(--A.usedTimes===0){const T=u.indexOf(A);u[T]=u[u.length-1],u.pop(),A.destroy()}}function C(A){l.remove(A)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:N,releaseProgram:L,releaseShaderCache:C,programs:u,dispose:k}}function gA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function vA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Yd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,g,E,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:E,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=E,d.group=m),e++,d}function a(f,h,p,g,E,m){const d=o(f,h,p,g,E,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,g,E,m){const d=o(f,h,p,g,E,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||vA),i.length>1&&i.sort(h||Yd),r.length>1&&r.sort(h||Yd)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function xA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new qd,t.set(i,[o])):r>=s.length?(o=new qd,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function EA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new lt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return t[e.id]=n,n}}}function SA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let MA=0;function yA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function TA(t){const e=new EA,n=SA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const r=new Q,s=new At,o=new At;function a(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,g=0,E=0,m=0,d=0,M=0,y=0,_=0,N=0,L=0,C=0;c.sort(yA);for(let A=0,T=c.length;A<T;A++){const B=c[A],H=B.color,$=B.intensity,ee=B.distance,oe=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=H.r*$,f+=H.g*$,h+=H.b*$;else if(B.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(B.sh.coefficients[Z],$);C++}else if(B.isDirectionalLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const se=B.shadow,Y=n.get(B);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=B.shadow.matrix,M++}i.directional[p]=Z,p++}else if(B.isSpotLight){const Z=e.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy(H).multiplyScalar($),Z.distance=ee,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,i.spot[E]=Z;const se=B.shadow;if(B.map&&(i.spotLightMap[N]=B.map,N++,se.updateMatrices(B),B.castShadow&&L++),i.spotLightMatrix[E]=se.matrix,B.castShadow){const Y=n.get(B);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,i.spotShadow[E]=Y,i.spotShadowMap[E]=oe,_++}E++}else if(B.isRectAreaLight){const Z=e.get(B);Z.color.copy(H).multiplyScalar($),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),i.rectArea[m]=Z,m++}else if(B.isPointLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){const se=B.shadow,Y=n.get(B);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,Y.shadowCameraNear=se.camera.near,Y.shadowCameraFar=se.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=oe,i.pointShadowMatrix[g]=B.shadow.matrix,y++}i.point[g]=Z,g++}else if(B.isHemisphereLight){const Z=e.get(B);Z.skyColor.copy(B.color).multiplyScalar($),Z.groundColor.copy(B.groundColor).multiplyScalar($),i.hemi[d]=Z,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const k=i.hash;(k.directionalLength!==p||k.pointLength!==g||k.spotLength!==E||k.rectAreaLength!==m||k.hemiLength!==d||k.numDirectionalShadows!==M||k.numPointShadows!==y||k.numSpotShadows!==_||k.numSpotMaps!==N||k.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+N-L,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,k.directionalLength=p,k.pointLength=g,k.spotLength=E,k.rectAreaLength=m,k.hemiLength=d,k.numDirectionalShadows=M,k.numPointShadows=y,k.numSpotShadows=_,k.numSpotMaps=N,k.numLightProbes=C,i.version=MA++)}function l(c,u){let f=0,h=0,p=0,g=0,E=0;const m=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const y=c[d];if(y.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(y.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=i.point[h];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const _=i.hemi[E];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function Kd(t){const e=new TA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function bA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Kd(t),e.set(r,[a])):s>=o.length?(a=new Kd(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const AA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function CA(t,e,n){let i=new vm;const r=new ut,s=new ut,o=new Et,a=new eM({depthPacking:fS}),l=new tM,c={},u=n.maxTextureSize,f={[Ii]:Zt,[Zt]:Ii,[ii]:ii},h=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:AA,fragmentShader:RA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new pr;g.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new kn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zp;let d=this.type;this.render=function(L,C,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const A=t.getRenderTarget(),T=t.getActiveCubeFace(),B=t.getActiveMipmapLevel(),H=t.state;H.setBlending(wi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const $=d!==ei&&this.type===ei,ee=d===ei&&this.type!==ei;for(let oe=0,Z=L.length;oe<Z;oe++){const se=L[oe],Y=se.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const he=Y.getFrameExtents();if(r.multiply(he),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,Y.mapSize.y=s.y)),Y.map===null||$===!0||ee===!0){const Te=this.type!==ei?{minFilter:Pn,magFilter:Pn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new dr(r.x,r.y,Te),Y.map.texture.name=se.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const _e=Y.getViewportCount();for(let Te=0;Te<_e;Te++){const Le=Y.getViewport(Te);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),H.viewport(o),Y.updateMatrices(se,Te),i=Y.getFrustum(),_(C,k,Y.camera,se,this.type)}Y.isPointLightShadow!==!0&&this.type===ei&&M(Y,k),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(A,T,B)};function M(L,C){const k=e.update(E);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new dr(r.x,r.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(C,null,k,h,E,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(C,null,k,p,E,null)}function y(L,C,k,A){let T=null;const B=k.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)T=B;else if(T=k.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const H=T.uuid,$=C.uuid;let ee=c[H];ee===void 0&&(ee={},c[H]=ee);let oe=ee[$];oe===void 0&&(oe=T.clone(),ee[$]=oe,C.addEventListener("dispose",N)),T=oe}if(T.visible=C.visible,T.wireframe=C.wireframe,A===ei?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:f[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=t.properties.get(T);H.light=k}return T}function _(L,C,k,A,T){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===ei)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,L.matrixWorld);const $=e.update(L),ee=L.material;if(Array.isArray(ee)){const oe=$.groups;for(let Z=0,se=oe.length;Z<se;Z++){const Y=oe[Z],he=ee[Y.materialIndex];if(he&&he.visible){const _e=y(L,he,A,T);L.onBeforeShadow(t,L,C,k,$,_e,Y),t.renderBufferDirect(k,null,$,_e,L,Y),L.onAfterShadow(t,L,C,k,$,_e,Y)}}}else if(ee.visible){const oe=y(L,ee,A,T);L.onBeforeShadow(t,L,C,k,$,oe,null),t.renderBufferDirect(k,null,$,oe,L,null),L.onAfterShadow(t,L,C,k,$,oe,null)}}const H=L.children;for(let $=0,ee=H.length;$<ee;$++)_(H[$],C,k,A,T)}function N(L){L.target.removeEventListener("dispose",N);for(const k in c){const A=c[k],T=L.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}const wA={[Gl]:Wl,[Xl]:ql,[$l]:Kl,[qr]:Yl,[Wl]:Gl,[ql]:Xl,[Kl]:$l,[Yl]:qr};function PA(t,e){function n(){let z=!1;const Me=new Et;let ne=null;const fe=new Et(0,0,0,0);return{setMask:function(Ae){ne!==Ae&&!z&&(t.colorMask(Ae,Ae,Ae,Ae),ne=Ae)},setLocked:function(Ae){z=Ae},setClear:function(Ae,ye,Ge,gt,Ft){Ft===!0&&(Ae*=gt,ye*=gt,Ge*=gt),Me.set(Ae,ye,Ge,gt),fe.equals(Me)===!1&&(t.clearColor(Ae,ye,Ge,gt),fe.copy(Me))},reset:function(){z=!1,ne=null,fe.set(-1,0,0,0)}}}function i(){let z=!1,Me=!1,ne=null,fe=null,Ae=null;return{setReversed:function(ye){if(Me!==ye){const Ge=e.get("EXT_clip_control");ye?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Me=ye;const gt=Ae;Ae=null,this.setClear(gt)}},getReversed:function(){return Me},setTest:function(ye){ye?V(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(ye){ne!==ye&&!z&&(t.depthMask(ye),ne=ye)},setFunc:function(ye){if(Me&&(ye=wA[ye]),fe!==ye){switch(ye){case Gl:t.depthFunc(t.NEVER);break;case Wl:t.depthFunc(t.ALWAYS);break;case Xl:t.depthFunc(t.LESS);break;case qr:t.depthFunc(t.LEQUAL);break;case $l:t.depthFunc(t.EQUAL);break;case Yl:t.depthFunc(t.GEQUAL);break;case ql:t.depthFunc(t.GREATER);break;case Kl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=ye}},setLocked:function(ye){z=ye},setClear:function(ye){Ae!==ye&&(Me&&(ye=1-ye),t.clearDepth(ye),Ae=ye)},reset:function(){z=!1,ne=null,fe=null,Ae=null,Me=!1}}}function r(){let z=!1,Me=null,ne=null,fe=null,Ae=null,ye=null,Ge=null,gt=null,Ft=null;return{setTest:function(st){z||(st?V(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(st){Me!==st&&!z&&(t.stencilMask(st),Me=st)},setFunc:function(st,En,Wn){(ne!==st||fe!==En||Ae!==Wn)&&(t.stencilFunc(st,En,Wn),ne=st,fe=En,Ae=Wn)},setOp:function(st,En,Wn){(ye!==st||Ge!==En||gt!==Wn)&&(t.stencilOp(st,En,Wn),ye=st,Ge=En,gt=Wn)},setLocked:function(st){z=st},setClear:function(st){Ft!==st&&(t.clearStencil(st),Ft=st)},reset:function(){z=!1,Me=null,ne=null,fe=null,Ae=null,ye=null,Ge=null,gt=null,Ft=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],g=null,E=!1,m=null,d=null,M=null,y=null,_=null,N=null,L=null,C=new lt(0,0,0),k=0,A=!1,T=null,B=null,H=null,$=null,ee=null;const oe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,se=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=se>=1):Y.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=se>=2);let he=null,_e={};const Te=t.getParameter(t.SCISSOR_BOX),Le=t.getParameter(t.VIEWPORT),$e=new Et().fromArray(Te),ie=new Et().fromArray(Le);function me(z,Me,ne,fe){const Ae=new Uint8Array(4),ye=t.createTexture();t.bindTexture(z,ye),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<ne;Ge++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(Me,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,Ae):t.texImage2D(Me+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ae);return ye}const ve={};ve[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(t.DEPTH_TEST),o.setFunc(qr),K(!1),q(td),V(t.CULL_FACE),S(wi);function V(z){u[z]!==!0&&(t.enable(z),u[z]=!0)}function re(z){u[z]!==!1&&(t.disable(z),u[z]=!1)}function le(z,Me){return f[z]!==Me?(t.bindFramebuffer(z,Me),f[z]=Me,z===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Me),z===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Me),!0):!1}function ce(z,Me){let ne=p,fe=!1;if(z){ne=h.get(Me),ne===void 0&&(ne=[],h.set(Me,ne));const Ae=z.textures;if(ne.length!==Ae.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let ye=0,Ge=Ae.length;ye<Ge;ye++)ne[ye]=t.COLOR_ATTACHMENT0+ye;ne.length=Ae.length,fe=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,fe=!0);fe&&t.drawBuffers(ne)}function Ie(z){return g!==z?(t.useProgram(z),g=z,!0):!1}const I={[nr]:t.FUNC_ADD,[OE]:t.FUNC_SUBTRACT,[BE]:t.FUNC_REVERSE_SUBTRACT};I[kE]=t.MIN,I[HE]=t.MAX;const D={[VE]:t.ZERO,[zE]:t.ONE,[GE]:t.SRC_COLOR,[Vl]:t.SRC_ALPHA,[KE]:t.SRC_ALPHA_SATURATE,[YE]:t.DST_COLOR,[XE]:t.DST_ALPHA,[WE]:t.ONE_MINUS_SRC_COLOR,[zl]:t.ONE_MINUS_SRC_ALPHA,[qE]:t.ONE_MINUS_DST_COLOR,[$E]:t.ONE_MINUS_DST_ALPHA,[jE]:t.CONSTANT_COLOR,[ZE]:t.ONE_MINUS_CONSTANT_COLOR,[JE]:t.CONSTANT_ALPHA,[QE]:t.ONE_MINUS_CONSTANT_ALPHA};function S(z,Me,ne,fe,Ae,ye,Ge,gt,Ft,st){if(z===wi){E===!0&&(re(t.BLEND),E=!1);return}if(E===!1&&(V(t.BLEND),E=!0),z!==FE){if(z!==m||st!==A){if((d!==nr||_!==nr)&&(t.blendEquation(t.FUNC_ADD),d=nr,_=nr),st)switch(z){case Vr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nd:t.blendFunc(t.ONE,t.ONE);break;case id:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Vr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case id:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,y=null,N=null,L=null,C.set(0,0,0),k=0,m=z,A=st}return}Ae=Ae||Me,ye=ye||ne,Ge=Ge||fe,(Me!==d||Ae!==_)&&(t.blendEquationSeparate(I[Me],I[Ae]),d=Me,_=Ae),(ne!==M||fe!==y||ye!==N||Ge!==L)&&(t.blendFuncSeparate(D[ne],D[fe],D[ye],D[Ge]),M=ne,y=fe,N=ye,L=Ge),(gt.equals(C)===!1||Ft!==k)&&(t.blendColor(gt.r,gt.g,gt.b,Ft),C.copy(gt),k=Ft),m=z,A=!1}function te(z,Me){z.side===ii?re(t.CULL_FACE):V(t.CULL_FACE);let ne=z.side===Zt;Me&&(ne=!ne),K(ne),z.blending===Vr&&z.transparent===!1?S(wi):S(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const fe=z.stencilWrite;a.setTest(fe),fe&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),w(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?V(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function K(z){T!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),T=z)}function q(z){z!==DE?(V(t.CULL_FACE),z!==B&&(z===td?t.cullFace(t.BACK):z===NE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),B=z}function b(z){z!==H&&(Z&&t.lineWidth(z),H=z)}function w(z,Me,ne){z?(V(t.POLYGON_OFFSET_FILL),($!==Me||ee!==ne)&&(t.polygonOffset(Me,ne),$=Me,ee=ne)):re(t.POLYGON_OFFSET_FILL)}function F(z){z?V(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function x(z){z===void 0&&(z=t.TEXTURE0+oe-1),he!==z&&(t.activeTexture(z),he=z)}function v(z,Me,ne){ne===void 0&&(he===null?ne=t.TEXTURE0+oe-1:ne=he);let fe=_e[ne];fe===void 0&&(fe={type:void 0,texture:void 0},_e[ne]=fe),(fe.type!==z||fe.texture!==Me)&&(he!==ne&&(t.activeTexture(ne),he=ne),t.bindTexture(z,Me||ve[z]),fe.type=z,fe.texture=Me)}function U(){const z=_e[he];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function P(){try{t.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function O(){try{t.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function G(){try{t.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{t.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{t.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{t.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(){try{t.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{t.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{t.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(){try{t.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(z){$e.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),$e.copy(z))}function ge(z){ie.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),ie.copy(z))}function ke(z,Me){let ne=c.get(Me);ne===void 0&&(ne=new WeakMap,c.set(Me,ne));let fe=ne.get(z);fe===void 0&&(fe=t.getUniformBlockIndex(Me,z.name),ne.set(z,fe))}function Ve(z,Me){const fe=c.get(Me).get(z);l.get(Me)!==fe&&(t.uniformBlockBinding(Me,fe,z.__bindingPointIndex),l.set(Me,fe))}function ft(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},he=null,_e={},f={},h=new WeakMap,p=[],g=null,E=!1,m=null,d=null,M=null,y=null,_=null,N=null,L=null,C=new lt(0,0,0),k=0,A=!1,T=null,B=null,H=null,$=null,ee=null,$e.set(0,0,t.canvas.width,t.canvas.height),ie.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:V,disable:re,bindFramebuffer:le,drawBuffers:ce,useProgram:Ie,setBlending:S,setMaterial:te,setFlipSided:K,setCullFace:q,setLineWidth:b,setPolygonOffset:w,setScissorTest:F,activeTexture:x,bindTexture:v,unbindTexture:U,compressedTexImage2D:P,compressedTexImage3D:O,texImage2D:xe,texImage3D:De,updateUBOMapping:ke,uniformBlockBinding:Ve,texStorage2D:be,texStorage3D:de,texSubImage2D:G,texSubImage3D:ue,compressedTexSubImage2D:ae,compressedTexSubImage3D:Re,scissor:Fe,viewport:ge,reset:ft}}function LA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,v){return p?new OffscreenCanvas(x,v):Zo("canvas")}function E(x,v,U){let P=1;const O=F(x);if((O.width>U||O.height>U)&&(P=U/Math.max(O.width,O.height)),P<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const G=Math.floor(P*O.width),ue=Math.floor(P*O.height);f===void 0&&(f=g(G,ue));const ae=v?g(G,ue):f;return ae.width=G,ae.height=ue,ae.getContext("2d").drawImage(x,0,0,G,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+G+"x"+ue+")."),ae}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),x;return x}function m(x){return x.generateMipmaps}function d(x){t.generateMipmap(x)}function M(x){return x.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?t.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(x,v,U,P,O=!1){if(x!==null){if(t[x]!==void 0)return t[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let G=v;if(v===t.RED&&(U===t.FLOAT&&(G=t.R32F),U===t.HALF_FLOAT&&(G=t.R16F),U===t.UNSIGNED_BYTE&&(G=t.R8)),v===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.R8UI),U===t.UNSIGNED_SHORT&&(G=t.R16UI),U===t.UNSIGNED_INT&&(G=t.R32UI),U===t.BYTE&&(G=t.R8I),U===t.SHORT&&(G=t.R16I),U===t.INT&&(G=t.R32I)),v===t.RG&&(U===t.FLOAT&&(G=t.RG32F),U===t.HALF_FLOAT&&(G=t.RG16F),U===t.UNSIGNED_BYTE&&(G=t.RG8)),v===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.RG8UI),U===t.UNSIGNED_SHORT&&(G=t.RG16UI),U===t.UNSIGNED_INT&&(G=t.RG32UI),U===t.BYTE&&(G=t.RG8I),U===t.SHORT&&(G=t.RG16I),U===t.INT&&(G=t.RG32I)),v===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.RGB8UI),U===t.UNSIGNED_SHORT&&(G=t.RGB16UI),U===t.UNSIGNED_INT&&(G=t.RGB32UI),U===t.BYTE&&(G=t.RGB8I),U===t.SHORT&&(G=t.RGB16I),U===t.INT&&(G=t.RGB32I)),v===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(G=t.RGBA16UI),U===t.UNSIGNED_INT&&(G=t.RGBA32UI),U===t.BYTE&&(G=t.RGBA8I),U===t.SHORT&&(G=t.RGBA16I),U===t.INT&&(G=t.RGBA32I)),v===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(G=t.RGB9_E5),v===t.RGBA){const ue=O?Ko:Ze.getTransfer(P);U===t.FLOAT&&(G=t.RGBA32F),U===t.HALF_FLOAT&&(G=t.RGBA16F),U===t.UNSIGNED_BYTE&&(G=ue===at?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function _(x,v){let U;return x?v===null||v===fr||v===Os?U=t.DEPTH24_STENCIL8:v===oi?U=t.DEPTH32F_STENCIL8:v===Fs&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===fr||v===Os?U=t.DEPTH_COMPONENT24:v===oi?U=t.DEPTH_COMPONENT32F:v===Fs&&(U=t.DEPTH_COMPONENT16),U}function N(x,v){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Pn&&x.minFilter!==Bn?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function L(x){const v=x.target;v.removeEventListener("dispose",L),k(v),v.isVideoTexture&&u.delete(v)}function C(x){const v=x.target;v.removeEventListener("dispose",C),T(v)}function k(x){const v=i.get(x);if(v.__webglInit===void 0)return;const U=x.source,P=h.get(U);if(P){const O=P[v.__cacheKey];O.usedTimes--,O.usedTimes===0&&A(x),Object.keys(P).length===0&&h.delete(U)}i.remove(x)}function A(x){const v=i.get(x);t.deleteTexture(v.__webglTexture);const U=x.source,P=h.get(U);delete P[v.__cacheKey],o.memory.textures--}function T(x){const v=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(v.__webglFramebuffer[P]))for(let O=0;O<v.__webglFramebuffer[P].length;O++)t.deleteFramebuffer(v.__webglFramebuffer[P][O]);else t.deleteFramebuffer(v.__webglFramebuffer[P]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[P])}else{if(Array.isArray(v.__webglFramebuffer))for(let P=0;P<v.__webglFramebuffer.length;P++)t.deleteFramebuffer(v.__webglFramebuffer[P]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let P=0;P<v.__webglColorRenderbuffer.length;P++)v.__webglColorRenderbuffer[P]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[P]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=x.textures;for(let P=0,O=U.length;P<O;P++){const G=i.get(U[P]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(U[P])}i.remove(x)}let B=0;function H(){B=0}function $(){const x=B;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),B+=1,x}function ee(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function oe(x,v){const U=i.get(x);if(x.isVideoTexture&&b(x),x.isRenderTargetTexture===!1&&x.version>0&&U.__version!==x.version){const P=x.image;if(P===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(U,x,v);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+v)}function Z(x,v){const U=i.get(x);if(x.version>0&&U.__version!==x.version){ie(U,x,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+v)}function se(x,v){const U=i.get(x);if(x.version>0&&U.__version!==x.version){ie(U,x,v);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+v)}function Y(x,v){const U=i.get(x);if(x.version>0&&U.__version!==x.version){me(U,x,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+v)}const he={[Jl]:t.REPEAT,[sr]:t.CLAMP_TO_EDGE,[Ql]:t.MIRRORED_REPEAT},_e={[Pn]:t.NEAREST,[cS]:t.NEAREST_MIPMAP_NEAREST,[so]:t.NEAREST_MIPMAP_LINEAR,[Bn]:t.LINEAR,[ka]:t.LINEAR_MIPMAP_NEAREST,[or]:t.LINEAR_MIPMAP_LINEAR},Te={[pS]:t.NEVER,[ES]:t.ALWAYS,[mS]:t.LESS,[lm]:t.LEQUAL,[_S]:t.EQUAL,[xS]:t.GEQUAL,[gS]:t.GREATER,[vS]:t.NOTEQUAL};function Le(x,v){if(v.type===oi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Bn||v.magFilter===ka||v.magFilter===so||v.magFilter===or||v.minFilter===Bn||v.minFilter===ka||v.minFilter===so||v.minFilter===or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(x,t.TEXTURE_WRAP_S,he[v.wrapS]),t.texParameteri(x,t.TEXTURE_WRAP_T,he[v.wrapT]),(x===t.TEXTURE_3D||x===t.TEXTURE_2D_ARRAY)&&t.texParameteri(x,t.TEXTURE_WRAP_R,he[v.wrapR]),t.texParameteri(x,t.TEXTURE_MAG_FILTER,_e[v.magFilter]),t.texParameteri(x,t.TEXTURE_MIN_FILTER,_e[v.minFilter]),v.compareFunction&&(t.texParameteri(x,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(x,t.TEXTURE_COMPARE_FUNC,Te[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Pn||v.minFilter!==so&&v.minFilter!==or||v.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(x,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function $e(x,v){let U=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",L));const P=v.source;let O=h.get(P);O===void 0&&(O={},h.set(P,O));const G=ee(v);if(G!==x.__cacheKey){O[G]===void 0&&(O[G]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),O[G].usedTimes++;const ue=O[x.__cacheKey];ue!==void 0&&(O[x.__cacheKey].usedTimes--,ue.usedTimes===0&&A(v)),x.__cacheKey=G,x.__webglTexture=O[G].texture}return U}function ie(x,v,U){let P=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(P=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(P=t.TEXTURE_3D);const O=$e(x,v),G=v.source;n.bindTexture(P,x.__webglTexture,t.TEXTURE0+U);const ue=i.get(G);if(G.version!==ue.__version||O===!0){n.activeTexture(t.TEXTURE0+U);const ae=Ze.getPrimaries(Ze.workingColorSpace),Re=v.colorSpace===Ai?null:Ze.getPrimaries(v.colorSpace),be=v.colorSpace===Ai||ae===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let de=E(v.image,!1,r.maxTextureSize);de=w(v,de);const xe=s.convert(v.format,v.colorSpace),De=s.convert(v.type);let Fe=y(v.internalFormat,xe,De,v.colorSpace,v.isVideoTexture);Le(P,v);let ge;const ke=v.mipmaps,Ve=v.isVideoTexture!==!0,ft=ue.__version===void 0||O===!0,z=G.dataReady,Me=N(v,de);if(v.isDepthTexture)Fe=_(v.format===ks,v.type),ft&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,Fe,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Fe,de.width,de.height,0,xe,De,null));else if(v.isDataTexture)if(ke.length>0){Ve&&ft&&n.texStorage2D(t.TEXTURE_2D,Me,Fe,ke[0].width,ke[0].height);for(let ne=0,fe=ke.length;ne<fe;ne++)ge=ke[ne],Ve?z&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ge.width,ge.height,xe,De,ge.data):n.texImage2D(t.TEXTURE_2D,ne,Fe,ge.width,ge.height,0,xe,De,ge.data);v.generateMipmaps=!1}else Ve?(ft&&n.texStorage2D(t.TEXTURE_2D,Me,Fe,de.width,de.height),z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de.width,de.height,xe,De,de.data)):n.texImage2D(t.TEXTURE_2D,0,Fe,de.width,de.height,0,xe,De,de.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ve&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Fe,ke[0].width,ke[0].height,de.depth);for(let ne=0,fe=ke.length;ne<fe;ne++)if(ge=ke[ne],v.format!==Cn)if(xe!==null)if(Ve){if(z)if(v.layerUpdates.size>0){const Ae=bd(ge.width,ge.height,v.format,v.type);for(const ye of v.layerUpdates){const Ge=ge.data.subarray(ye*Ae/ge.data.BYTES_PER_ELEMENT,(ye+1)*Ae/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,ye,ge.width,ge.height,1,xe,Ge)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,de.depth,xe,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Fe,ge.width,ge.height,de.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,de.depth,xe,De,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Fe,ge.width,ge.height,de.depth,0,xe,De,ge.data)}else{Ve&&ft&&n.texStorage2D(t.TEXTURE_2D,Me,Fe,ke[0].width,ke[0].height);for(let ne=0,fe=ke.length;ne<fe;ne++)ge=ke[ne],v.format!==Cn?xe!==null?Ve?z&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,ge.width,ge.height,xe,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Fe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?z&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ge.width,ge.height,xe,De,ge.data):n.texImage2D(t.TEXTURE_2D,ne,Fe,ge.width,ge.height,0,xe,De,ge.data)}else if(v.isDataArrayTexture)if(Ve){if(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Fe,de.width,de.height,de.depth),z)if(v.layerUpdates.size>0){const ne=bd(de.width,de.height,v.format,v.type);for(const fe of v.layerUpdates){const Ae=de.data.subarray(fe*ne/de.data.BYTES_PER_ELEMENT,(fe+1)*ne/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,de.width,de.height,1,xe,De,Ae)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,xe,De,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,de.width,de.height,de.depth,0,xe,De,de.data);else if(v.isData3DTexture)Ve?(ft&&n.texStorage3D(t.TEXTURE_3D,Me,Fe,de.width,de.height,de.depth),z&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,xe,De,de.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,de.width,de.height,de.depth,0,xe,De,de.data);else if(v.isFramebufferTexture){if(ft)if(Ve)n.texStorage2D(t.TEXTURE_2D,Me,Fe,de.width,de.height);else{let ne=de.width,fe=de.height;for(let Ae=0;Ae<Me;Ae++)n.texImage2D(t.TEXTURE_2D,Ae,Fe,ne,fe,0,xe,De,null),ne>>=1,fe>>=1}}else if(ke.length>0){if(Ve&&ft){const ne=F(ke[0]);n.texStorage2D(t.TEXTURE_2D,Me,Fe,ne.width,ne.height)}for(let ne=0,fe=ke.length;ne<fe;ne++)ge=ke[ne],Ve?z&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,xe,De,ge):n.texImage2D(t.TEXTURE_2D,ne,Fe,xe,De,ge);v.generateMipmaps=!1}else if(Ve){if(ft){const ne=F(de);n.texStorage2D(t.TEXTURE_2D,Me,Fe,ne.width,ne.height)}z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,De,de)}else n.texImage2D(t.TEXTURE_2D,0,Fe,xe,De,de);m(v)&&d(P),ue.__version=G.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function me(x,v,U){if(v.image.length!==6)return;const P=$e(x,v),O=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,x.__webglTexture,t.TEXTURE0+U);const G=i.get(O);if(O.version!==G.__version||P===!0){n.activeTexture(t.TEXTURE0+U);const ue=Ze.getPrimaries(Ze.workingColorSpace),ae=v.colorSpace===Ai?null:Ze.getPrimaries(v.colorSpace),Re=v.colorSpace===Ai||ue===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const be=v.isCompressedTexture||v.image[0].isCompressedTexture,de=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let fe=0;fe<6;fe++)!be&&!de?xe[fe]=E(v.image[fe],!0,r.maxCubemapSize):xe[fe]=de?v.image[fe].image:v.image[fe],xe[fe]=w(v,xe[fe]);const De=xe[0],Fe=s.convert(v.format,v.colorSpace),ge=s.convert(v.type),ke=y(v.internalFormat,Fe,ge,v.colorSpace),Ve=v.isVideoTexture!==!0,ft=G.__version===void 0||P===!0,z=O.dataReady;let Me=N(v,De);Le(t.TEXTURE_CUBE_MAP,v);let ne;if(be){Ve&&ft&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,ke,De.width,De.height);for(let fe=0;fe<6;fe++){ne=xe[fe].mipmaps;for(let Ae=0;Ae<ne.length;Ae++){const ye=ne[Ae];v.format!==Cn?Fe!==null?Ve?z&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,0,0,ye.width,ye.height,Fe,ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,ke,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,0,0,ye.width,ye.height,Fe,ge,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,ke,ye.width,ye.height,0,Fe,ge,ye.data)}}}else{if(ne=v.mipmaps,Ve&&ft){ne.length>0&&Me++;const fe=F(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,ke,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(de){Ve?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,xe[fe].width,xe[fe].height,Fe,ge,xe[fe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ke,xe[fe].width,xe[fe].height,0,Fe,ge,xe[fe].data);for(let Ae=0;Ae<ne.length;Ae++){const Ge=ne[Ae].image[fe].image;Ve?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,0,0,Ge.width,Ge.height,Fe,ge,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,ke,Ge.width,Ge.height,0,Fe,ge,Ge.data)}}else{Ve?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Fe,ge,xe[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ke,Fe,ge,xe[fe]);for(let Ae=0;Ae<ne.length;Ae++){const ye=ne[Ae];Ve?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,0,0,Fe,ge,ye.image[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,ke,Fe,ge,ye.image[fe])}}}m(v)&&d(t.TEXTURE_CUBE_MAP),G.__version=O.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function ve(x,v,U,P,O,G){const ue=s.convert(U.format,U.colorSpace),ae=s.convert(U.type),Re=y(U.internalFormat,ue,ae,U.colorSpace),be=i.get(v),de=i.get(U);if(de.__renderTarget=v,!be.__hasExternalTextures){const xe=Math.max(1,v.width>>G),De=Math.max(1,v.height>>G);O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?n.texImage3D(O,G,Re,xe,De,v.depth,0,ue,ae,null):n.texImage2D(O,G,Re,xe,De,0,ue,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,x),q(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,P,O,de.__webglTexture,0,K(v)):(O===t.TEXTURE_2D||O>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,P,O,de.__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(x,v,U){if(t.bindRenderbuffer(t.RENDERBUFFER,x),v.depthBuffer){const P=v.depthTexture,O=P&&P.isDepthTexture?P.type:null,G=_(v.stencilBuffer,O),ue=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=K(v);q(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,G,v.width,v.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,G,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,G,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,x)}else{const P=v.textures;for(let O=0;O<P.length;O++){const G=P[O],ue=s.convert(G.format,G.colorSpace),ae=s.convert(G.type),Re=y(G.internalFormat,ue,ae,G.colorSpace),be=K(v);U&&q(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,Re,v.width,v.height):q(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,Re,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Re,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const P=i.get(v.depthTexture);P.__renderTarget=v,(!P.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),oe(v.depthTexture,0);const O=P.__webglTexture,G=K(v);if(v.depthTexture.format===Bs)q(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0);else if(v.depthTexture.format===ks)q(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,O,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function le(x){const v=i.get(x),U=x.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==x.depthTexture){const P=x.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),P){const O=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,P.removeEventListener("dispose",O)};P.addEventListener("dispose",O),v.__depthDisposeCallback=O}v.__boundDepthTexture=P}if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const P=x.texture.mipmaps;P&&P.length>0?re(v.__webglFramebuffer[0],x):re(v.__webglFramebuffer,x)}else if(U){v.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[P]),v.__webglDepthbuffer[P]===void 0)v.__webglDepthbuffer[P]=t.createRenderbuffer(),V(v.__webglDepthbuffer[P],x,!1);else{const O=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[P];t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,O,t.RENDERBUFFER,G)}}else{const P=x.texture.mipmaps;if(P&&P.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),V(v.__webglDepthbuffer,x,!1);else{const O=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,O,t.RENDERBUFFER,G)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(x,v,U){const P=i.get(x);v!==void 0&&ve(P.__webglFramebuffer,x,x.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&le(x)}function Ie(x){const v=x.texture,U=i.get(x),P=i.get(v);x.addEventListener("dispose",C);const O=x.textures,G=x.isWebGLCubeRenderTarget===!0,ue=O.length>1;if(ue||(P.__webglTexture===void 0&&(P.__webglTexture=t.createTexture()),P.__version=v.version,o.memory.textures++),G){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let Re=0;Re<v.mipmaps.length;Re++)U.__webglFramebuffer[ae][Re]=t.createFramebuffer()}else U.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)U.__webglFramebuffer[ae]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ue)for(let ae=0,Re=O.length;ae<Re;ae++){const be=i.get(O[ae]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),o.memory.textures++)}if(x.samples>0&&q(x)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ae=0;ae<O.length;ae++){const Re=O[ae];U.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ae]);const be=s.convert(Re.format,Re.colorSpace),de=s.convert(Re.type),xe=y(Re.internalFormat,be,de,Re.colorSpace,x.isXRRenderTarget===!0),De=K(x);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,xe,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,U.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),x.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),V(U.__webglDepthRenderbuffer,x,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(G){n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture),Le(t.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)ve(U.__webglFramebuffer[ae][Re],x,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re);else ve(U.__webglFramebuffer[ae],x,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let ae=0,Re=O.length;ae<Re;ae++){const be=O[ae],de=i.get(be);n.bindTexture(t.TEXTURE_2D,de.__webglTexture),Le(t.TEXTURE_2D,be),ve(U.__webglFramebuffer,x,be,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),m(be)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ae=x.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,P.__webglTexture),Le(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)ve(U.__webglFramebuffer[Re],x,v,t.COLOR_ATTACHMENT0,ae,Re);else ve(U.__webglFramebuffer,x,v,t.COLOR_ATTACHMENT0,ae,0);m(v)&&d(ae),n.unbindTexture()}x.depthBuffer&&le(x)}function I(x){const v=x.textures;for(let U=0,P=v.length;U<P;U++){const O=v[U];if(m(O)){const G=M(x),ue=i.get(O).__webglTexture;n.bindTexture(G,ue),d(G),n.unbindTexture()}}}const D=[],S=[];function te(x){if(x.samples>0){if(q(x)===!1){const v=x.textures,U=x.width,P=x.height;let O=t.COLOR_BUFFER_BIT;const G=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(x),ae=v.length>1;if(ae)for(let be=0;be<v.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const Re=x.texture.mipmaps;Re&&Re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let be=0;be<v.length;be++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(O|=t.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(O|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[be]);const de=i.get(v[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de,0)}t.blitFramebuffer(0,0,U,P,0,0,U,P,O,t.NEAREST),l===!0&&(D.length=0,S.length=0,D.push(t.COLOR_ATTACHMENT0+be),x.depthBuffer&&x.resolveDepthBuffer===!1&&(D.push(G),S.push(G),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,S)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let be=0;be<v.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,ue.__webglColorRenderbuffer[be]);const de=i.get(v[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,de,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const v=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function K(x){return Math.min(r.maxSamples,x.samples)}function q(x){const v=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function b(x){const v=o.render.frame;u.get(x)!==v&&(u.set(x,v),x.update())}function w(x,v){const U=x.colorSpace,P=x.format,O=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||U!==Zr&&U!==Ai&&(Ze.getTransfer(U)===at?(P!==Cn||O!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function F(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=H,this.setTexture2D=oe,this.setTexture2DArray=Z,this.setTexture3D=se,this.setTextureCube=Y,this.rebindTextures=ce,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=q}function IA(t,e){function n(i,r=Ai){let s;const o=Ze.getTransfer(r);if(i===ci)return t.UNSIGNED_BYTE;if(i===au)return t.UNSIGNED_SHORT_4_4_4_4;if(i===lu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===nm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===em)return t.BYTE;if(i===tm)return t.SHORT;if(i===Fs)return t.UNSIGNED_SHORT;if(i===ou)return t.INT;if(i===fr)return t.UNSIGNED_INT;if(i===oi)return t.FLOAT;if(i===$s)return t.HALF_FLOAT;if(i===im)return t.ALPHA;if(i===rm)return t.RGB;if(i===Cn)return t.RGBA;if(i===Bs)return t.DEPTH_COMPONENT;if(i===ks)return t.DEPTH_STENCIL;if(i===sm)return t.RED;if(i===cu)return t.RED_INTEGER;if(i===om)return t.RG;if(i===uu)return t.RG_INTEGER;if(i===fu)return t.RGBA_INTEGER;if(i===Io||i===Do||i===No||i===Uo)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Io)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Io)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===No)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ec||i===tc||i===nc||i===ic)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ic)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rc||i===sc||i===oc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===rc||i===sc)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===oc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ac||i===lc||i===cc||i===uc||i===fc||i===dc||i===hc||i===pc||i===mc||i===_c||i===gc||i===vc||i===xc||i===Ec)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ac)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_c)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ec)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fo||i===Sc||i===Mc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fo)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===am||i===yc||i===Tc||i===bc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const DA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class UA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Di({vertexShader:DA,fragmentShader:NA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kn(new _a(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FA extends Qr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const E=new UA,m=n.getContextAttributes();let d=null,M=null;const y=[],_=[],N=new ut;let L=null;const C=new _n;C.viewport=new Et;const k=new _n;k.viewport=new Et;const A=[C,k],T=new iM;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=y[ie];return me===void 0&&(me=new al,y[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=y[ie];return me===void 0&&(me=new al,y[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=y[ie];return me===void 0&&(me=new al,y[ie]=me),me.getHandSpace()};function $(ie){const me=_.indexOf(ie.inputSource);if(me===-1)return;const ve=y[me];ve!==void 0&&(ve.update(ie.inputSource,ie.frame,c||o),ve.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ee(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",oe);for(let ie=0;ie<y.length;ie++){const me=_[ie];me!==null&&(_[ie]=null,y[ie].disconnect(me))}B=null,H=null,E.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,M=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",oe),m.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,V=null,re=null;m.depth&&(re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=m.stencil?ks:Bs,V=m.stencil?Os:fr);const le={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new dr(h.textureWidth,h.textureHeight,{format:Cn,type:ci,depthTexture:new xm(h.textureWidth,h.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ve={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new dr(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function oe(ie){for(let me=0;me<ie.removed.length;me++){const ve=ie.removed[me],V=_.indexOf(ve);V>=0&&(_[V]=null,y[V].disconnect(ve))}for(let me=0;me<ie.added.length;me++){const ve=ie.added[me];let V=_.indexOf(ve);if(V===-1){for(let le=0;le<y.length;le++)if(le>=_.length){_.push(ve),V=le;break}else if(_[le]===null){_[le]=ve,V=le;break}if(V===-1)break}const re=y[V];re&&re.connect(ve)}}const Z=new Q,se=new Q;function Y(ie,me,ve){Z.setFromMatrixPosition(me.matrixWorld),se.setFromMatrixPosition(ve.matrixWorld);const V=Z.distanceTo(se),re=me.projectionMatrix.elements,le=ve.projectionMatrix.elements,ce=re[14]/(re[10]-1),Ie=re[14]/(re[10]+1),I=(re[9]+1)/re[5],D=(re[9]-1)/re[5],S=(re[8]-1)/re[0],te=(le[8]+1)/le[0],K=ce*S,q=ce*te,b=V/(-S+te),w=b*-S;if(me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(w),ie.translateZ(b),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),re[10]===-1)ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const F=ce+b,x=Ie+b,v=K-w,U=q+(V-w),P=I*Ie/x*F,O=D*Ie/x*F;ie.projectionMatrix.makePerspective(v,U,P,O,F,x),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function he(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let me=ie.near,ve=ie.far;E.texture!==null&&(E.depthNear>0&&(me=E.depthNear),E.depthFar>0&&(ve=E.depthFar)),T.near=k.near=C.near=me,T.far=k.far=C.far=ve,(B!==T.near||H!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),B=T.near,H=T.far),C.layers.mask=ie.layers.mask|2,k.layers.mask=ie.layers.mask|4,T.layers.mask=C.layers.mask|k.layers.mask;const V=ie.parent,re=T.cameras;he(T,V);for(let le=0;le<re.length;le++)he(re[le],V);re.length===2?Y(T,C,k):T.projectionMatrix.copy(C.projectionMatrix),_e(ie,T,V)};function _e(ie,me,ve){ve===null?ie.matrix.copy(me.matrixWorld):(ie.matrix.copy(ve.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ac*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(T)};let Te=null;function Le(ie,me){if(u=me.getViewerPose(c||o),g=me,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let V=!1;ve.length!==T.cameras.length&&(T.cameras.length=0,V=!0);for(let ce=0;ce<ve.length;ce++){const Ie=ve[ce];let I=null;if(p!==null)I=p.getViewport(Ie);else{const S=f.getViewSubImage(h,Ie);I=S.viewport,ce===0&&(e.setRenderTargetTextures(M,S.colorTexture,S.depthStencilTexture),e.setRenderTarget(M))}let D=A[ce];D===void 0&&(D=new _n,D.layers.enable(ce),D.viewport=new Et,A[ce]=D),D.matrix.fromArray(Ie.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Ie.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(I.x,I.y,I.width,I.height),ce===0&&(T.matrix.copy(D.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),V===!0&&T.cameras.push(D)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ce=f.getDepthInformation(ve[0]);ce&&ce.isValid&&ce.texture&&E.init(e,ce,r.renderState)}}for(let ve=0;ve<y.length;ve++){const V=_[ve],re=y[ve];V!==null&&re!==void 0&&re.update(V,me,c||o)}Te&&Te(ie,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),g=null}const $e=new Em;$e.setAnimationLoop(Le),this.setAnimationLoop=function(ie){Te=ie},this.dispose=function(){}}}const Zi=new ui,OA=new At;function BA(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,mm(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,y,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),E(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Zt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Zt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),y=M.envMap,_=M.envMapRotation;y&&(m.envMap.value=y,Zi.copy(_),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),m.envMapRotation.value.setFromMatrix4(OA.makeRotationFromEuler(Zi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=y*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function E(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const _=y.program;i.uniformBlockBinding(M,_)}function c(M,y){let _=r[M.id];_===void 0&&(g(M),_=u(M),r[M.id]=_,M.addEventListener("dispose",m));const N=y.program;i.updateUBOMapping(M,N);const L=e.render.frame;s[M.id]!==L&&(h(M),s[M.id]=L)}function u(M){const y=f();M.__bindingPointIndex=y;const _=t.createBuffer(),N=M.__size,L=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,N,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,_),_}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=r[M.id],_=M.uniforms,N=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let L=0,C=_.length;L<C;L++){const k=Array.isArray(_[L])?_[L]:[_[L]];for(let A=0,T=k.length;A<T;A++){const B=k[A];if(p(B,L,A,N)===!0){const H=B.__offset,$=Array.isArray(B.value)?B.value:[B.value];let ee=0;for(let oe=0;oe<$.length;oe++){const Z=$[oe],se=E(Z);typeof Z=="number"||typeof Z=="boolean"?(B.__data[0]=Z,t.bufferSubData(t.UNIFORM_BUFFER,H+ee,B.__data)):Z.isMatrix3?(B.__data[0]=Z.elements[0],B.__data[1]=Z.elements[1],B.__data[2]=Z.elements[2],B.__data[3]=0,B.__data[4]=Z.elements[3],B.__data[5]=Z.elements[4],B.__data[6]=Z.elements[5],B.__data[7]=0,B.__data[8]=Z.elements[6],B.__data[9]=Z.elements[7],B.__data[10]=Z.elements[8],B.__data[11]=0):(Z.toArray(B.__data,ee),ee+=se.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,B.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(M,y,_,N){const L=M.value,C=y+"_"+_;if(N[C]===void 0)return typeof L=="number"||typeof L=="boolean"?N[C]=L:N[C]=L.clone(),!0;{const k=N[C];if(typeof L=="number"||typeof L=="boolean"){if(k!==L)return N[C]=L,!0}else if(k.equals(L)===!1)return k.copy(L),!0}return!1}function g(M){const y=M.uniforms;let _=0;const N=16;for(let C=0,k=y.length;C<k;C++){const A=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,B=A.length;T<B;T++){const H=A[T],$=Array.isArray(H.value)?H.value:[H.value];for(let ee=0,oe=$.length;ee<oe;ee++){const Z=$[ee],se=E(Z),Y=_%N,he=Y%se.boundary,_e=Y+he;_+=he,_e!==0&&N-_e<se.storage&&(_+=N-_e),H.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=se.storage}}}const L=_%N;return L>0&&(_+=N-L),M.__size=_,M.__cache={},this}function E(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const M in r)t.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class HA{constructor(e={}){const{canvas:n=MS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),E=new Int32Array(4);let m=null,d=null;const M=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let N=!1;this._outputColorSpace=pn;let L=0,C=0,k=null,A=-1,T=null;const B=new Et,H=new Et;let $=null;const ee=new lt(0);let oe=0,Z=n.width,se=n.height,Y=1,he=null,_e=null;const Te=new Et(0,0,Z,se),Le=new Et(0,0,Z,se);let $e=!1;const ie=new vm;let me=!1,ve=!1;const V=new At,re=new At,le=new Q,ce=new Et,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let I=!1;function D(){return k===null?Y:1}let S=i;function te(R,W){return n.getContext(R,W)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${su}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",Ae,!1),n.addEventListener("webglcontextcreationerror",ye,!1),S===null){const W="webgl2";if(S=te(W,R),S===null)throw te(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let K,q,b,w,F,x,v,U,P,O,G,ue,ae,Re,be,de,xe,De,Fe,ge,ke,Ve,ft,z;function Me(){K=new jT(S),K.init(),Ve=new IA(S,K),q=new GT(S,K,e,Ve),b=new PA(S,K),q.reverseDepthBuffer&&h&&b.buffers.depth.setReversed(!0),w=new QT(S),F=new gA,x=new LA(S,K,b,F,q,Ve,w),v=new XT(_),U=new KT(_),P=new sM(S),ft=new VT(S,P),O=new ZT(S,P,w,ft),G=new tb(S,O,P,w),Fe=new eb(S,q,x),de=new WT(F),ue=new _A(_,v,U,K,q,ft,de),ae=new BA(_,F),Re=new xA,be=new bA(K),De=new HT(_,v,U,b,G,p,l),xe=new CA(_,G,q),z=new kA(S,w,q,b),ge=new zT(S,K,w),ke=new JT(S,K,w),w.programs=ue.programs,_.capabilities=q,_.extensions=K,_.properties=F,_.renderLists=Re,_.shadowMap=xe,_.state=b,_.info=w}Me();const ne=new FA(_,S);this.xr=ne,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const R=K.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=K.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(Z,se,!1))},this.getSize=function(R){return R.set(Z,se)},this.setSize=function(R,W,j=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,se=W,n.width=Math.floor(R*Y),n.height=Math.floor(W*Y),j===!0&&(n.style.width=R+"px",n.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(Z*Y,se*Y).floor()},this.setDrawingBufferSize=function(R,W,j){Z=R,se=W,Y=j,n.width=Math.floor(R*j),n.height=Math.floor(W*j),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(Te)},this.setViewport=function(R,W,j,J){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,W,j,J),b.viewport(B.copy(Te).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(Le)},this.setScissor=function(R,W,j,J){R.isVector4?Le.set(R.x,R.y,R.z,R.w):Le.set(R,W,j,J),b.scissor(H.copy(Le).multiplyScalar(Y).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(R){b.setScissorTest($e=R)},this.setOpaqueSort=function(R){he=R},this.setTransparentSort=function(R){_e=R},this.getClearColor=function(R){return R.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,j=!0){let J=0;if(R){let X=!1;if(k!==null){const pe=k.texture.format;X=pe===fu||pe===uu||pe===cu}if(X){const pe=k.texture.type,Se=pe===ci||pe===fr||pe===Fs||pe===Os||pe===au||pe===lu,we=De.getClearColor(),Pe=De.getClearAlpha(),He=we.r,Be=we.g,Ne=we.b;Se?(g[0]=He,g[1]=Be,g[2]=Ne,g[3]=Pe,S.clearBufferuiv(S.COLOR,0,g)):(E[0]=He,E[1]=Be,E[2]=Ne,E[3]=Pe,S.clearBufferiv(S.COLOR,0,E))}else J|=S.COLOR_BUFFER_BIT}W&&(J|=S.DEPTH_BUFFER_BIT),j&&(J|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",Ae,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),De.dispose(),Re.dispose(),be.dispose(),F.dispose(),v.dispose(),U.dispose(),G.dispose(),ft.dispose(),z.dispose(),ue.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",gu),ne.removeEventListener("sessionend",vu),Hi.stop()};function fe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=w.autoReset,W=xe.enabled,j=xe.autoUpdate,J=xe.needsUpdate,X=xe.type;Me(),w.autoReset=R,xe.enabled=W,xe.autoUpdate=j,xe.needsUpdate=J,xe.type=X}function ye(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ge(R){const W=R.target;W.removeEventListener("dispose",Ge),gt(W)}function gt(R){Ft(R),F.remove(R)}function Ft(R){const W=F.get(R).programs;W!==void 0&&(W.forEach(function(j){ue.releaseProgram(j)}),R.isShaderMaterial&&ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,j,J,X,pe){W===null&&(W=Ie);const Se=X.isMesh&&X.matrixWorld.determinant()<0,we=bm(R,W,j,J,X);b.setMaterial(J,Se);let Pe=j.index,He=1;if(J.wireframe===!0){if(Pe=O.getWireframeAttribute(j),Pe===void 0)return;He=2}const Be=j.drawRange,Ne=j.attributes.position;let Ke=Be.start*He,tt=(Be.start+Be.count)*He;pe!==null&&(Ke=Math.max(Ke,pe.start*He),tt=Math.min(tt,(pe.start+pe.count)*He)),Pe!==null?(Ke=Math.max(Ke,0),tt=Math.min(tt,Pe.count)):Ne!=null&&(Ke=Math.max(Ke,0),tt=Math.min(tt,Ne.count));const Mt=tt-Ke;if(Mt<0||Mt===1/0)return;ft.setup(X,J,we,j,Pe);let vt,je=ge;if(Pe!==null&&(vt=P.get(Pe),je=ke,je.setIndex(vt)),X.isMesh)J.wireframe===!0?(b.setLineWidth(J.wireframeLinewidth*D()),je.setMode(S.LINES)):je.setMode(S.TRIANGLES);else if(X.isLine){let Ue=J.linewidth;Ue===void 0&&(Ue=1),b.setLineWidth(Ue*D()),X.isLineSegments?je.setMode(S.LINES):X.isLineLoop?je.setMode(S.LINE_LOOP):je.setMode(S.LINE_STRIP)}else X.isPoints?je.setMode(S.POINTS):X.isSprite&&je.setMode(S.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Oo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))je.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ue=X._multiDrawStarts,Dt=X._multiDrawCounts,nt=X._multiDrawCount,Sn=Pe?P.get(Pe).bytesPerElement:1,mr=F.get(J).currentProgram.getUniforms();for(let en=0;en<nt;en++)mr.setValue(S,"_gl_DrawID",en),je.render(Ue[en]/Sn,Dt[en])}else if(X.isInstancedMesh)je.renderInstances(Ke,Mt,X.count);else if(j.isInstancedBufferGeometry){const Ue=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Dt=Math.min(j.instanceCount,Ue);je.renderInstances(Ke,Mt,Dt)}else je.render(Ke,Mt)};function st(R,W,j){R.transparent===!0&&R.side===ii&&R.forceSinglePass===!1?(R.side=Zt,R.needsUpdate=!0,Zs(R,W,j),R.side=Ii,R.needsUpdate=!0,Zs(R,W,j),R.side=ii):Zs(R,W,j)}this.compile=function(R,W,j=null){j===null&&(j=R),d=be.get(j),d.init(W),y.push(d),j.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),R!==j&&R.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),d.setupLights();const J=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const pe=X.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){const we=pe[Se];st(we,j,X),J.add(we)}else st(pe,j,X),J.add(pe)}),d=y.pop(),J},this.compileAsync=function(R,W,j=null){const J=this.compile(R,W,j);return new Promise(X=>{function pe(){if(J.forEach(function(Se){F.get(Se).currentProgram.isReady()&&J.delete(Se)}),J.size===0){X(R);return}setTimeout(pe,10)}K.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let En=null;function Wn(R){En&&En(R)}function gu(){Hi.stop()}function vu(){Hi.start()}const Hi=new Em;Hi.setAnimationLoop(Wn),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(R){En=R,ne.setAnimationLoop(R),R===null?Hi.stop():Hi.start()},ne.addEventListener("sessionstart",gu),ne.addEventListener("sessionend",vu),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(W),W=ne.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,W,k),d=be.get(R,y.length),d.init(W),y.push(d),re.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ie.setFromProjectionMatrix(re),ve=this.localClippingEnabled,me=de.init(this.clippingPlanes,ve),m=Re.get(R,M.length),m.init(),M.push(m),ne.enabled===!0&&ne.isPresenting===!0){const pe=_.xr.getDepthSensingMesh();pe!==null&&va(pe,W,-1/0,_.sortObjects)}va(R,W,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(he,_e),I=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,I&&De.addToRenderList(m,R),this.info.render.frame++,me===!0&&de.beginShadows();const j=d.state.shadowsArray;xe.render(j,R,W),me===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,X=m.transmissive;if(d.setupLights(),W.isArrayCamera){const pe=W.cameras;if(X.length>0)for(let Se=0,we=pe.length;Se<we;Se++){const Pe=pe[Se];Eu(J,X,R,Pe)}I&&De.render(R);for(let Se=0,we=pe.length;Se<we;Se++){const Pe=pe[Se];xu(m,R,Pe,Pe.viewport)}}else X.length>0&&Eu(J,X,R,W),I&&De.render(R),xu(m,R,W);k!==null&&C===0&&(x.updateMultisampleRenderTarget(k),x.updateRenderTargetMipmap(k)),R.isScene===!0&&R.onAfterRender(_,R,W),ft.resetDefaultState(),A=-1,T=null,y.pop(),y.length>0?(d=y[y.length-1],me===!0&&de.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function va(R,W,j,J){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ie.intersectsSprite(R)){J&&ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(re);const Se=G.update(R),we=R.material;we.visible&&m.push(R,Se,we,j,ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ie.intersectsObject(R))){const Se=G.update(R),we=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ce.copy(R.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ce.copy(Se.boundingSphere.center)),ce.applyMatrix4(R.matrixWorld).applyMatrix4(re)),Array.isArray(we)){const Pe=Se.groups;for(let He=0,Be=Pe.length;He<Be;He++){const Ne=Pe[He],Ke=we[Ne.materialIndex];Ke&&Ke.visible&&m.push(R,Se,Ke,j,ce.z,Ne)}}else we.visible&&m.push(R,Se,we,j,ce.z,null)}}const pe=R.children;for(let Se=0,we=pe.length;Se<we;Se++)va(pe[Se],W,j,J)}function xu(R,W,j,J){const X=R.opaque,pe=R.transmissive,Se=R.transparent;d.setupLightsView(j),me===!0&&de.setGlobalState(_.clippingPlanes,j),J&&b.viewport(B.copy(J)),X.length>0&&js(X,W,j),pe.length>0&&js(pe,W,j),Se.length>0&&js(Se,W,j),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Eu(R,W,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[J.id]===void 0&&(d.state.transmissionRenderTarget[J.id]=new dr(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?$s:ci,minFilter:or,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const pe=d.state.transmissionRenderTarget[J.id],Se=J.viewport||B;pe.setSize(Se.z*_.transmissionResolutionScale,Se.w*_.transmissionResolutionScale);const we=_.getRenderTarget();_.setRenderTarget(pe),_.getClearColor(ee),oe=_.getClearAlpha(),oe<1&&_.setClearColor(16777215,.5),_.clear(),I&&De.render(j);const Pe=_.toneMapping;_.toneMapping=Pi;const He=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),d.setupLightsView(J),me===!0&&de.setGlobalState(_.clippingPlanes,J),js(R,j,J),x.updateMultisampleRenderTarget(pe),x.updateRenderTargetMipmap(pe),K.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ne=0,Ke=W.length;Ne<Ke;Ne++){const tt=W[Ne],Mt=tt.object,vt=tt.geometry,je=tt.material,Ue=tt.group;if(je.side===ii&&Mt.layers.test(J.layers)){const Dt=je.side;je.side=Zt,je.needsUpdate=!0,Su(Mt,j,J,vt,je,Ue),je.side=Dt,je.needsUpdate=!0,Be=!0}}Be===!0&&(x.updateMultisampleRenderTarget(pe),x.updateRenderTargetMipmap(pe))}_.setRenderTarget(we),_.setClearColor(ee,oe),He!==void 0&&(J.viewport=He),_.toneMapping=Pe}function js(R,W,j){const J=W.isScene===!0?W.overrideMaterial:null;for(let X=0,pe=R.length;X<pe;X++){const Se=R[X],we=Se.object,Pe=Se.geometry,He=Se.group;let Be=Se.material;Be.allowOverride===!0&&J!==null&&(Be=J),we.layers.test(j.layers)&&Su(we,W,j,Pe,Be,He)}}function Su(R,W,j,J,X,pe){R.onBeforeRender(_,W,j,J,X,pe),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(_,W,j,J,R,pe),X.transparent===!0&&X.side===ii&&X.forceSinglePass===!1?(X.side=Zt,X.needsUpdate=!0,_.renderBufferDirect(j,W,J,X,R,pe),X.side=Ii,X.needsUpdate=!0,_.renderBufferDirect(j,W,J,X,R,pe),X.side=ii):_.renderBufferDirect(j,W,J,X,R,pe),R.onAfterRender(_,W,j,J,X,pe)}function Zs(R,W,j){W.isScene!==!0&&(W=Ie);const J=F.get(R),X=d.state.lights,pe=d.state.shadowsArray,Se=X.state.version,we=ue.getParameters(R,X.state,pe,W,j),Pe=ue.getProgramCacheKey(we);let He=J.programs;J.environment=R.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(R.isMeshStandardMaterial?U:v).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,He===void 0&&(R.addEventListener("dispose",Ge),He=new Map,J.programs=He);let Be=He.get(Pe);if(Be!==void 0){if(J.currentProgram===Be&&J.lightsStateVersion===Se)return yu(R,we),Be}else we.uniforms=ue.getUniforms(R),R.onBeforeCompile(we,_),Be=ue.acquireProgram(we,Pe),He.set(Pe,Be),J.uniforms=we.uniforms;const Ne=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ne.clippingPlanes=de.uniform),yu(R,we),J.needsLights=Rm(R),J.lightsStateVersion=Se,J.needsLights&&(Ne.ambientLightColor.value=X.state.ambient,Ne.lightProbe.value=X.state.probe,Ne.directionalLights.value=X.state.directional,Ne.directionalLightShadows.value=X.state.directionalShadow,Ne.spotLights.value=X.state.spot,Ne.spotLightShadows.value=X.state.spotShadow,Ne.rectAreaLights.value=X.state.rectArea,Ne.ltc_1.value=X.state.rectAreaLTC1,Ne.ltc_2.value=X.state.rectAreaLTC2,Ne.pointLights.value=X.state.point,Ne.pointLightShadows.value=X.state.pointShadow,Ne.hemisphereLights.value=X.state.hemi,Ne.directionalShadowMap.value=X.state.directionalShadowMap,Ne.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ne.spotShadowMap.value=X.state.spotShadowMap,Ne.spotLightMatrix.value=X.state.spotLightMatrix,Ne.spotLightMap.value=X.state.spotLightMap,Ne.pointShadowMap.value=X.state.pointShadowMap,Ne.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=Be,J.uniformsList=null,Be}function Mu(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Bo.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function yu(R,W){const j=F.get(R);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function bm(R,W,j,J,X){W.isScene!==!0&&(W=Ie),x.resetTextureUnits();const pe=W.fog,Se=J.isMeshStandardMaterial?W.environment:null,we=k===null?_.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Zr,Pe=(J.isMeshStandardMaterial?U:v).get(J.envMap||Se),He=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Be=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ne=!!j.morphAttributes.position,Ke=!!j.morphAttributes.normal,tt=!!j.morphAttributes.color;let Mt=Pi;J.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Mt=_.toneMapping);const vt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,je=vt!==void 0?vt.length:0,Ue=F.get(J),Dt=d.state.lights;if(me===!0&&(ve===!0||R!==T)){const zt=R===T&&J.id===A;de.setState(J,R,zt)}let nt=!1;J.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Dt.state.version||Ue.outputColorSpace!==we||X.isBatchedMesh&&Ue.batching===!1||!X.isBatchedMesh&&Ue.batching===!0||X.isBatchedMesh&&Ue.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ue.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ue.instancing===!1||!X.isInstancedMesh&&Ue.instancing===!0||X.isSkinnedMesh&&Ue.skinning===!1||!X.isSkinnedMesh&&Ue.skinning===!0||X.isInstancedMesh&&Ue.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ue.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ue.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ue.instancingMorph===!1&&X.morphTexture!==null||Ue.envMap!==Pe||J.fog===!0&&Ue.fog!==pe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==de.numPlanes||Ue.numIntersection!==de.numIntersection)||Ue.vertexAlphas!==He||Ue.vertexTangents!==Be||Ue.morphTargets!==Ne||Ue.morphNormals!==Ke||Ue.morphColors!==tt||Ue.toneMapping!==Mt||Ue.morphTargetsCount!==je)&&(nt=!0):(nt=!0,Ue.__version=J.version);let Sn=Ue.currentProgram;nt===!0&&(Sn=Zs(J,W,X));let mr=!1,en=!1,ns=!1;const _t=Sn.getUniforms(),un=Ue.uniforms;if(b.useProgram(Sn.program)&&(mr=!0,en=!0,ns=!0),J.id!==A&&(A=J.id,en=!0),mr||T!==R){b.buffers.depth.getReversed()?(V.copy(R.projectionMatrix),TS(V),bS(V),_t.setValue(S,"projectionMatrix",V)):_t.setValue(S,"projectionMatrix",R.projectionMatrix),_t.setValue(S,"viewMatrix",R.matrixWorldInverse);const Yt=_t.map.cameraPosition;Yt!==void 0&&Yt.setValue(S,le.setFromMatrixPosition(R.matrixWorld)),q.logarithmicDepthBuffer&&_t.setValue(S,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&_t.setValue(S,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,en=!0,ns=!0)}if(X.isSkinnedMesh){_t.setOptional(S,X,"bindMatrix"),_t.setOptional(S,X,"bindMatrixInverse");const zt=X.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),_t.setValue(S,"boneTexture",zt.boneTexture,x))}X.isBatchedMesh&&(_t.setOptional(S,X,"batchingTexture"),_t.setValue(S,"batchingTexture",X._matricesTexture,x),_t.setOptional(S,X,"batchingIdTexture"),_t.setValue(S,"batchingIdTexture",X._indirectTexture,x),_t.setOptional(S,X,"batchingColorTexture"),X._colorsTexture!==null&&_t.setValue(S,"batchingColorTexture",X._colorsTexture,x));const fn=j.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Fe.update(X,j,Sn),(en||Ue.receiveShadow!==X.receiveShadow)&&(Ue.receiveShadow=X.receiveShadow,_t.setValue(S,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(un.envMap.value=Pe,un.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(un.envMapIntensity.value=W.environmentIntensity),en&&(_t.setValue(S,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&Am(un,ns),pe&&J.fog===!0&&ae.refreshFogUniforms(un,pe),ae.refreshMaterialUniforms(un,J,Y,se,d.state.transmissionRenderTarget[R.id]),Bo.upload(S,Mu(Ue),un,x)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Bo.upload(S,Mu(Ue),un,x),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&_t.setValue(S,"center",X.center),_t.setValue(S,"modelViewMatrix",X.modelViewMatrix),_t.setValue(S,"normalMatrix",X.normalMatrix),_t.setValue(S,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const zt=J.uniformsGroups;for(let Yt=0,xa=zt.length;Yt<xa;Yt++){const Vi=zt[Yt];z.update(Vi,Sn),z.bind(Vi,Sn)}}return Sn}function Am(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Rm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,W,j){const J=F.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),F.get(R.texture).__webglTexture=W,F.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const j=F.get(R);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0};const Cm=S.createFramebuffer();this.setRenderTarget=function(R,W=0,j=0){k=R,L=W,C=j;let J=!0,X=null,pe=!1,Se=!1;if(R){const Pe=F.get(R);if(Pe.__useDefaultFramebuffer!==void 0)b.bindFramebuffer(S.FRAMEBUFFER,null),J=!1;else if(Pe.__webglFramebuffer===void 0)x.setupRenderTarget(R);else if(Pe.__hasExternalTextures)x.rebindTextures(R,F.get(R.texture).__webglTexture,F.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ne=R.depthTexture;if(Pe.__boundDepthTexture!==Ne){if(Ne!==null&&F.has(Ne)&&(R.width!==Ne.image.width||R.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(R)}}const He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Se=!0);const Be=F.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Be[W])?X=Be[W][j]:X=Be[W],pe=!0):R.samples>0&&x.useMultisampledRTT(R)===!1?X=F.get(R).__webglMultisampledFramebuffer:Array.isArray(Be)?X=Be[j]:X=Be,B.copy(R.viewport),H.copy(R.scissor),$=R.scissorTest}else B.copy(Te).multiplyScalar(Y).floor(),H.copy(Le).multiplyScalar(Y).floor(),$=$e;if(j!==0&&(X=Cm),b.bindFramebuffer(S.FRAMEBUFFER,X)&&J&&b.drawBuffers(R,X),b.viewport(B),b.scissor(H),b.setScissorTest($),pe){const Pe=F.get(R.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pe.__webglTexture,j)}else if(Se){const Pe=F.get(R.texture),He=W;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Pe.__webglTexture,j,He)}else if(R!==null&&j!==0){const Pe=F.get(R.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Pe.__webglTexture,j)}A=-1},this.readRenderTargetPixels=function(R,W,j,J,X,pe,Se){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=F.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){b.bindFramebuffer(S.FRAMEBUFFER,we);try{const Pe=R.texture,He=Pe.format,Be=Pe.type;if(!q.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-J&&j>=0&&j<=R.height-X&&S.readPixels(W,j,J,X,Ve.convert(He),Ve.convert(Be),pe)}finally{const Pe=k!==null?F.get(k).__webglFramebuffer:null;b.bindFramebuffer(S.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(R,W,j,J,X,pe,Se){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=F.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we)if(W>=0&&W<=R.width-J&&j>=0&&j<=R.height-X){b.bindFramebuffer(S.FRAMEBUFFER,we);const Pe=R.texture,He=Pe.format,Be=Pe.type;if(!q.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Ne),S.bufferData(S.PIXEL_PACK_BUFFER,pe.byteLength,S.STREAM_READ),S.readPixels(W,j,J,X,Ve.convert(He),Ve.convert(Be),0);const Ke=k!==null?F.get(k).__webglFramebuffer:null;b.bindFramebuffer(S.FRAMEBUFFER,Ke);const tt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await yS(S,tt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Ne),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,pe),S.deleteBuffer(Ne),S.deleteSync(tt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,j=0){const J=Math.pow(2,-j),X=Math.floor(R.image.width*J),pe=Math.floor(R.image.height*J),Se=W!==null?W.x:0,we=W!==null?W.y:0;x.setTexture2D(R,0),S.copyTexSubImage2D(S.TEXTURE_2D,j,0,0,Se,we,X,pe),b.unbindTexture()};const wm=S.createFramebuffer(),Pm=S.createFramebuffer();this.copyTextureToTexture=function(R,W,j=null,J=null,X=0,pe=null){pe===null&&(X!==0?(Oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=X,X=0):pe=0);let Se,we,Pe,He,Be,Ne,Ke,tt,Mt;const vt=R.isCompressedTexture?R.mipmaps[pe]:R.image;if(j!==null)Se=j.max.x-j.min.x,we=j.max.y-j.min.y,Pe=j.isBox3?j.max.z-j.min.z:1,He=j.min.x,Be=j.min.y,Ne=j.isBox3?j.min.z:0;else{const fn=Math.pow(2,-X);Se=Math.floor(vt.width*fn),we=Math.floor(vt.height*fn),R.isDataArrayTexture?Pe=vt.depth:R.isData3DTexture?Pe=Math.floor(vt.depth*fn):Pe=1,He=0,Be=0,Ne=0}J!==null?(Ke=J.x,tt=J.y,Mt=J.z):(Ke=0,tt=0,Mt=0);const je=Ve.convert(W.format),Ue=Ve.convert(W.type);let Dt;W.isData3DTexture?(x.setTexture3D(W,0),Dt=S.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(x.setTexture2DArray(W,0),Dt=S.TEXTURE_2D_ARRAY):(x.setTexture2D(W,0),Dt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,W.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,W.unpackAlignment);const nt=S.getParameter(S.UNPACK_ROW_LENGTH),Sn=S.getParameter(S.UNPACK_IMAGE_HEIGHT),mr=S.getParameter(S.UNPACK_SKIP_PIXELS),en=S.getParameter(S.UNPACK_SKIP_ROWS),ns=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,vt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,vt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,He),S.pixelStorei(S.UNPACK_SKIP_ROWS,Be),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ne);const _t=R.isDataArrayTexture||R.isData3DTexture,un=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const fn=F.get(R),zt=F.get(W),Yt=F.get(fn.__renderTarget),xa=F.get(zt.__renderTarget);b.bindFramebuffer(S.READ_FRAMEBUFFER,Yt.__webglFramebuffer),b.bindFramebuffer(S.DRAW_FRAMEBUFFER,xa.__webglFramebuffer);for(let Vi=0;Vi<Pe;Vi++)_t&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,F.get(R).__webglTexture,X,Ne+Vi),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,F.get(W).__webglTexture,pe,Mt+Vi)),S.blitFramebuffer(He,Be,Se,we,Ke,tt,Se,we,S.DEPTH_BUFFER_BIT,S.NEAREST);b.bindFramebuffer(S.READ_FRAMEBUFFER,null),b.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||F.has(R)){const fn=F.get(R),zt=F.get(W);b.bindFramebuffer(S.READ_FRAMEBUFFER,wm),b.bindFramebuffer(S.DRAW_FRAMEBUFFER,Pm);for(let Yt=0;Yt<Pe;Yt++)_t?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,fn.__webglTexture,X,Ne+Yt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,fn.__webglTexture,X),un?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,zt.__webglTexture,pe,Mt+Yt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,zt.__webglTexture,pe),X!==0?S.blitFramebuffer(He,Be,Se,we,Ke,tt,Se,we,S.COLOR_BUFFER_BIT,S.NEAREST):un?S.copyTexSubImage3D(Dt,pe,Ke,tt,Mt+Yt,He,Be,Se,we):S.copyTexSubImage2D(Dt,pe,Ke,tt,He,Be,Se,we);b.bindFramebuffer(S.READ_FRAMEBUFFER,null),b.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else un?R.isDataTexture||R.isData3DTexture?S.texSubImage3D(Dt,pe,Ke,tt,Mt,Se,we,Pe,je,Ue,vt.data):W.isCompressedArrayTexture?S.compressedTexSubImage3D(Dt,pe,Ke,tt,Mt,Se,we,Pe,je,vt.data):S.texSubImage3D(Dt,pe,Ke,tt,Mt,Se,we,Pe,je,Ue,vt):R.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,pe,Ke,tt,Se,we,je,Ue,vt.data):R.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,pe,Ke,tt,vt.width,vt.height,je,vt.data):S.texSubImage2D(S.TEXTURE_2D,pe,Ke,tt,Se,we,je,Ue,vt);S.pixelStorei(S.UNPACK_ROW_LENGTH,nt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Sn),S.pixelStorei(S.UNPACK_SKIP_PIXELS,mr),S.pixelStorei(S.UNPACK_SKIP_ROWS,en),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ns),pe===0&&W.generateMipmaps&&S.generateMipmap(Dt),b.unbindTexture()},this.copyTextureToTexture3D=function(R,W,j=null,J=null,X=0){return Oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,j,J,X)},this.initRenderTarget=function(R){F.get(R).__webglFramebuffer===void 0&&x.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?x.setTextureCube(R,0):R.isData3DTexture?x.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?x.setTexture2DArray(R,0):x.setTexture2D(R,0),b.unbindTexture()},this.resetState=function(){L=0,C=0,k=null,b.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const VA={mounted(){this.initThree()},methods:{initThree(){const t=this.$refs.threeContainer,e=new ZS,n=new _n(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=5;const i=new HA({alpha:!0});i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),t.appendChild(i.domElement);const r=new es,s=new pu({color:65280,wireframe:!0}),o=new kn(r,s);e.add(o);function a(){requestAnimationFrame(a),o.rotation.x+=.01,o.rotation.y+=.01,i.render(e,n)}a(),window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)})}}},zA={ref:"threeContainer",class:"three-container"};function GA(t,e,n,i,r,s){return jt(),An("div",zA,null,512)}const WA=Xs(VA,[["render",GA],["__scopeId","data-v-969ae852"]]),XA={components:{ThreeScene:WA}},$A={class:"content"};function YA(t,e,n,i,r,s){const o=As("ThreeScene");return jt(),An("div",null,[Rt(o),xt("div",$A,[e[0]||(e[0]=xt("h1",null,"Informations and credits with 3D in it",-1)),xt("button",null,Ci(t.$t("ldgbuttonseemore")),1)])])}const qA=Xs(XA,[["render",YA],["__scopeId","data-v-224edc55"]]),KA=[{path:"/",component:IE},{path:"/about",component:qA}],jA=dE({history:Vx(),routes:KA}),_u=iv(cv);_u.use(ux);_u.use(jA);_u.mount("#app");
