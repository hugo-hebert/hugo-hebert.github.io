(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(t,n,r){var e="__lodash_hash_undefined__",o="[object Function]",i="[object GeneratorFunction]",a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/,c=/^\./,s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,l=/\\(\\)?/g,f=/^\[object .+?Constructor\]$/,p="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,h="object"==typeof self&&self&&self.Object===Object&&self,_=p||h||Function("return this")();var v=Array.prototype,d=Function.prototype,y=Object.prototype,g=_["__core-js_shared__"],b=function(){var t=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),j=d.toString,m=y.hasOwnProperty,w=y.toString,x=RegExp("^"+j.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),O=_.Symbol,k=v.splice,E=V(_,"Map"),$=V(Object,"create"),N=O?O.prototype:void 0,S=N?N.toString:void 0;function C(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function P(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function F(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function T(t,n){for(var r,e,o=t.length;o--;)if((r=t[o][0])===(e=n)||r!==r&&e!==e)return o;return-1}function A(t,n){for(var r,e=0,o=(n=function(t,n){if(L(t))return!1;var r=typeof t;if("number"==r||"symbol"==r||"boolean"==r||null==t||W(t))return!0;return u.test(t)||!a.test(t)||null!=n&&t in Object(n)}(n,t)?[n]:L(r=n)?r:X(r)).length;null!=t&&e<o;)t=t[G(n[e++])];return e&&e==o?t:void 0}function I(t){return!(!M(t)||(n=t,b&&b in n))&&(function(t){var n=M(t)?w.call(t):"";return n==o||n==i}(t)||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(r){}return n}(t)?x:f).test(function(t){if(null!=t){try{return j.call(t)}catch(n){}try{return t+""}catch(n){}}return""}(t));var n}function R(t,n){var r=t.__data__;return function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}(n)?r["string"==typeof n?"string":"hash"]:r.map}function V(t,n){var r=function(t,n){return null==t?void 0:t[n]}(t,n);return I(r)?r:void 0}C.prototype.clear=function(){this.__data__=$?$(null):{}},C.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},C.prototype.get=function(t){var n=this.__data__;if($){var r=n[t];return r===e?void 0:r}return m.call(n,t)?n[t]:void 0},C.prototype.has=function(t){var n=this.__data__;return $?void 0!==n[t]:m.call(n,t)},C.prototype.set=function(t,n){return this.__data__[t]=$&&void 0===n?e:n,this},P.prototype.clear=function(){this.__data__=[]},P.prototype.delete=function(t){var n=this.__data__,r=T(n,t);return!(r<0)&&(r==n.length-1?n.pop():k.call(n,r,1),!0)},P.prototype.get=function(t){var n=this.__data__,r=T(n,t);return r<0?void 0:n[r][1]},P.prototype.has=function(t){return T(this.__data__,t)>-1},P.prototype.set=function(t,n){var r=this.__data__,e=T(r,t);return e<0?r.push([t,n]):r[e][1]=n,this},F.prototype.clear=function(){this.__data__={hash:new C,map:new(E||P),string:new C}},F.prototype.delete=function(t){return R(this,t).delete(t)},F.prototype.get=function(t){return R(this,t).get(t)},F.prototype.has=function(t){return R(this,t).has(t)},F.prototype.set=function(t,n){return R(this,t).set(t,n),this};var X=H((function(t){var n;t=null==(n=t)?"":function(t){if("string"==typeof t)return t;if(W(t))return S?S.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}(n);var r=[];return c.test(t)&&r.push(""),t.replace(s,(function(t,n,e,o){r.push(e?o.replace(l,"$1"):n||t)})),r}));function G(t){if("string"==typeof t||W(t))return t;var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}function H(t,n){if("function"!=typeof t||n&&"function"!=typeof n)throw new TypeError("Expected a function");var r=function(){var e=arguments,o=n?n.apply(this,e):e[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,e);return r.cache=i.set(o,a),a};return r.cache=new(H.Cache||F),r}H.Cache=F;var L=Array.isArray;function M(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function W(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==w.call(t)}t.exports=function(t,n,r){var e=null==t?void 0:A(t,n);return void 0===e?r:e}},8581:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5606)}])},5606:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var e=r(5893),o=r(9208),i=r.n(o),a={getValue:function(t,n,r,e){var o=void 0===e?null:e;return i()(t,"".concat(n,".data.attributes.").concat(r),o)}},u=r(9008);function c(t){var n=a.getValue(t,"global","meta_title")+" | Home";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(u.default,{children:(0,e.jsx)("title",{children:n})}),(0,e.jsx)("div",{className:"",children:(0,e.jsxs)("main",{className:"main",children:["WIP. Check back soon.",(0,e.jsxs)("a",{href:"https://www.linkedin.com/in/hugo-hebert-0649b1111/",className:"link external",children:["LinkedIn ",(0,e.jsx)("img",{src:"/assets/img/icons/top-right.png",alt:"",width:"40px",height:"40px"})," "]})]})})]})}}},function(t){t.O(0,[774,888,179],(function(){return n=8581,t(t.s=n);var n}));var n=t.O();_N_E=n}]);