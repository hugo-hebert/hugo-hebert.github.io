(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9208:function(t,n,e){var r="__lodash_hash_undefined__",o="[object Function]",u="[object GeneratorFunction]",c=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/,i=/^\./,s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,f=/\\(\\)?/g,p=/^\[object .+?Constructor\]$/,l="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,h="object"==typeof self&&self&&self.Object===Object&&self,v=l||h||Function("return this")();var y=Array.prototype,_=Function.prototype,d=Object.prototype,b=v["__core-js_shared__"],g=function(){var t=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),m=_.toString,w=d.hasOwnProperty,j=d.toString,x=RegExp("^"+m.call(w).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),P=v.Symbol,O=y.splice,k=G(v,"Map"),E=G(Object,"create"),S=P?P.prototype:void 0,C=S?S.toString:void 0;function R(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function I(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function T(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function $(t,n){for(var e,r,o=t.length;o--;)if((e=t[o][0])===(r=n)||e!==e&&r!==r)return o;return-1}function F(t,n){for(var e,r=0,o=(n=function(t,n){if(X(t))return!1;var e=typeof t;if("number"==e||"symbol"==e||"boolean"==e||null==t||D(t))return!0;return a.test(t)||!c.test(t)||null!=n&&t in Object(n)}(n,t)?[n]:X(e=n)?e:B(e)).length;null!=t&&r<o;)t=t[M(n[r++])];return r&&r==o?t:void 0}function N(t){return!(!L(t)||(n=t,g&&g in n))&&(function(t){var n=L(t)?j.call(t):"";return n==o||n==u}(t)||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(e){}return n}(t)?x:p).test(function(t){if(null!=t){try{return m.call(t)}catch(n){}try{return t+""}catch(n){}}return""}(t));var n}function A(t,n){var e=t.__data__;return function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}(n)?e["string"==typeof n?"string":"hash"]:e.map}function G(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return N(e)?e:void 0}R.prototype.clear=function(){this.__data__=E?E(null):{}},R.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},R.prototype.get=function(t){var n=this.__data__;if(E){var e=n[t];return e===r?void 0:e}return w.call(n,t)?n[t]:void 0},R.prototype.has=function(t){var n=this.__data__;return E?void 0!==n[t]:w.call(n,t)},R.prototype.set=function(t,n){return this.__data__[t]=E&&void 0===n?r:n,this},I.prototype.clear=function(){this.__data__=[]},I.prototype.delete=function(t){var n=this.__data__,e=$(n,t);return!(e<0)&&(e==n.length-1?n.pop():O.call(n,e,1),!0)},I.prototype.get=function(t){var n=this.__data__,e=$(n,t);return e<0?void 0:n[e][1]},I.prototype.has=function(t){return $(this.__data__,t)>-1},I.prototype.set=function(t,n){var e=this.__data__,r=$(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},T.prototype.clear=function(){this.__data__={hash:new R,map:new(k||I),string:new R}},T.prototype.delete=function(t){return A(this,t).delete(t)},T.prototype.get=function(t){return A(this,t).get(t)},T.prototype.has=function(t){return A(this,t).has(t)},T.prototype.set=function(t,n){return A(this,t).set(t,n),this};var B=U((function(t){var n;t=null==(n=t)?"":function(t){if("string"==typeof t)return t;if(D(t))return C?C.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}(n);var e=[];return i.test(t)&&e.push(""),t.replace(s,(function(t,n,r,o){e.push(r?o.replace(f,"$1"):n||t)})),e}));function M(t){if("string"==typeof t||D(t))return t;var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}function U(t,n){if("function"!=typeof t||n&&"function"!=typeof n)throw new TypeError("Expected a function");var e=function(){var r=arguments,o=n?n.apply(this,r):r[0],u=e.cache;if(u.has(o))return u.get(o);var c=t.apply(this,r);return e.cache=u.set(o,c),c};return e.cache=new(U.Cache||T),e}U.Cache=T;var X=Array.isArray;function L(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function D(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==j.call(t)}t.exports=function(t,n,e){var r=null==t?void 0:F(t,n);return void 0===r?e:r}},7544:function(t,n,e){t.exports=e(6029)},1780:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e(6276)}])},6029:function(t,n,e){"use strict";var r,o=(r=e(8520))&&r.__esModule?r:{default:r};function u(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,n){return!n||"object"!==f(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var f=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function p(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=a(t);if(n){var o=a(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return i(this,e)}}n.default=void 0;var l=function(t){return t&&t.__esModule?t:{default:t}}(e(7294)),h=e(3794);function v(t,n,e,r,o,u,c){try{var a=t[u](c),i=a.value}catch(s){return void e(s)}a.done?n(i):Promise.resolve(i).then(r,o)}function y(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function c(t){v(u,r,o,c,a,"next",t)}function a(t){v(u,r,o,c,a,"throw",t)}c(void 0)}))}}function _(){return(_=y(o.default.mark((function t(n){var e,r,u;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.Component,r=n.ctx,t.next=3,h.loadGetInitialProps(e,r);case 3:return u=t.sent,t.abrupt("return",{pageProps:u});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return _.apply(this,arguments)}var b=function(t){!function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}(a,t);var n,e,r,o=p(a);function a(){return u(this,a),o.apply(this,arguments)}return n=a,(e=[{key:"render",value:function(){var t=this.props,n=t.Component,e=t.pageProps;return l.default.createElement(n,Object.assign({},e))}}])&&c(n.prototype,e),r&&c(n,r),a}(l.default.Component);b.origGetInitialProps=d,b.getInitialProps=d,n.default=b},6276:function(t,n,e){"use strict";e.r(n),e.d(n,{GlobalContext:function(){return k},default:function(){return S}});var r=e(8520),o=e.n(r),u=e(5893),c=e(7544),a=e(9008),i=(e(9042),e(7294)),s=e(9208),f=e.n(s),p=e(4155);function l(t,n,e,r,o,u,c){try{var a=t[u](c),i=a.value}catch(s){return void e(s)}a.done?n(i):Promise.resolve(i).then(r,o)}function h(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function c(t){l(u,r,o,c,a,"next",t)}function a(t){l(u,r,o,c,a,"throw",t)}c(void 0)}))}}function v(t){var n=void 0===t?"":t;return"".concat(p.env.NEXT_PUBLIC_STRAPI_API_URL||"http://localhost:1337/api").concat(n)}function y(t){var n="";return t.map((function(t,e){n=""!==n?n.concat("&populate[".concat(e,"]=").concat(t)):n.concat("populate[".concat(e,"]=").concat(t))})),""!==n&&(n="?".concat(n)),n}function _(t){return d.apply(this,arguments)}function d(){return(d=h(o().mark((function t(n,e){var r,u,c,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=y(void 0===e?[]:e),u=v(n+r),t.next=5,fetch(u);case 5:return c=t.sent,t.next=8,c.json();case 8:return a=t.sent,t.abrupt("return",a);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return g.apply(this,arguments)}function g(){return(g=h(o().mark((function t(n,e){var r,u,c,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=y(void 0===e?[]:e),u=v(n+r),t.next=5,fetch(u);case 5:return c=t.sent,t.next=8,c.json();case 8:return a=t.sent,t.abrupt("return",f()(a,"data.attributes",null));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return w.apply(this,arguments)}function w(){return(w=h(o().mark((function t(n,e){var r,u,c,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=y(void 0===e?[]:e),u=v(n+r),t.next=5,fetch(u);case 5:return c=t.sent,t.next=8,c.json();case 8:return a=t.sent,t.abrupt("return",a);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t,n,e,r,o,u,c){try{var a=t[u](c),i=a.value}catch(s){return void e(s)}a.done?n(i):Promise.resolve(i).then(r,o)}function x(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function P(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){x(t,n,e[n])}))}return t}var O,k=(0,i.createContext)({});function E(t){var n=t.Component,e=t.pageProps,r=e.global;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a.default,{children:[(0,u.jsx)("meta",{charSet:"UTF-8"}),(0,u.jsx)("meta",{name:"description",content:r.data.attributes.meta_title},"description"),(0,u.jsx)("title",{children:r.data.attributes.meta_title}),(0,u.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,u.jsx)("link",{rel:"manifest",href:"/manifest.json"})]}),(0,u.jsx)(k.Provider,{value:r,children:(0,u.jsx)(n,P({},e))})]})}E.getInitialProps=(O=o().mark((function t(n){var e,r,u,a,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.default.getInitialProps(n);case 2:return e=t.sent,t.next=5,_("/global");case 5:return r=t.sent,t.next=8,b("/home");case 8:return u=t.sent,t.next=11,m("/skills");case 11:return a=t.sent,t.next=14,m("/employment-histories");case 14:return i=t.sent,t.abrupt("return",P({},e,{pageProps:{global:r,homePage:u,skills:a,employment_history:i}}));case 16:case"end":return t.stop()}}),t)})),function(){var t=this,n=arguments;return new Promise((function(e,r){var o=O.apply(t,n);function u(t){j(o,e,r,u,c,"next",t)}function c(t){j(o,e,r,u,c,"throw",t)}u(void 0)}))});var S=E},9042:function(){},9008:function(t,n,e){t.exports=e(5443)}},function(t){var n=function(n){return t(t.s=n)};t.O(0,[774,179],(function(){return n(1780),n(387)}));var e=t.O();_N_E=e}]);