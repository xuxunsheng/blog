(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4875:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var l=o.apply(null,r);l&&e.push(l)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()},9587:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1585)}])},6727:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return a},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return c},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return s}});var r,n,o="refresh",a="navigate",l="restore",i="server-patch",c="prefetch",u="fast-refresh",s="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2177:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4699:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(6576),o=r(1040),a=r(5754);r(7994),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});var l=r(8266)._(r(959)),i=r(6177),c=r(7571),u=r(526),s=r(8056),f=r(9540),d=r(3392),h=r(6780),p=r(5690),v=r(2177),g=r(249),b=r(6727),m=new Set;function y(e,t,r,n,o,a){if(a||(0,c.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){var l=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(m.has(l))return;m.add(l)}Promise.resolve(a?e.prefetch(t,o):e.prefetch(t,r,n)).catch(function(e){})}}function x(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}var j=l.default.forwardRef(function(e,t){var r,u,m=e.href,j=e.as,C=e.children,_=e.prefetch,k=void 0===_?null:_,O=e.passHref,w=e.replace,A=e.shallow,E=e.scroll,N=e.locale,P=e.onClick,M=e.onMouseEnter,T=e.onTouchStart,R=e.legacyBehavior,S=void 0!==R&&R,z=o._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=C,S&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));var I=!1!==k,L=null===k?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,H=l.default.useContext(d.RouterContext),U=l.default.useContext(h.AppRouterContext),F=null!=H?H:U,K=!H,B=l.default.useMemo(function(){if(!H){var e=x(m);return{href:e,as:j?x(j):e}}var t=a._((0,i.resolveHref)(H,m,!0),2),r=t[0],n=t[1];return{href:r,as:j?(0,i.resolveHref)(H,j):n||r}},[H,m,j]),D=B.href,V=B.as,X=l.default.useRef(D),J=l.default.useRef(V);S&&(u=l.default.Children.only(r));var q=S?u&&"object"==typeof u&&u.ref:t,G=a._((0,p.useIntersection)({rootMargin:"200px"}),3),W=G[0],Y=G[1],Q=G[2],Z=l.default.useCallback(function(e){(J.current!==V||X.current!==D)&&(Q(),J.current=V,X.current=D),W(e),q&&("function"==typeof q?q(e):"object"==typeof q&&(q.current=e))},[V,q,D,Q,W]);l.default.useEffect(function(){F&&Y&&I&&y(F,D,V,{locale:N},{kind:L},K)},[V,D,Y,N,I,null==H?void 0:H.locale,F,K,L]);var $={ref:Z,onClick:function(e){S||"function"!=typeof P||P(e),S&&u.props&&"function"==typeof u.props.onClick&&u.props.onClick(e),F&&!e.defaultPrevented&&function(e,t,r,n,o,a,i,u,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(d=e.currentTarget.getAttribute("target"))||"_self"===d)&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&(!e.nativeEvent||2!==e.nativeEvent.which)&&(s||(0,c.isLocalURL)(r))){e.preventDefault();var d,h=function(){"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:i}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};s?l.default.startTransition(h):h()}}(e,F,D,V,w,A,E,N,K,I)},onMouseEnter:function(e){S||"function"!=typeof M||M(e),S&&u.props&&"function"==typeof u.props.onMouseEnter&&u.props.onMouseEnter(e),F&&(I||!K)&&y(F,D,V,{locale:N,priority:!0,bypassPrefetchedCheck:!0},{kind:L},K)},onTouchStart:function(e){S||"function"!=typeof T||T(e),S&&u.props&&"function"==typeof u.props.onTouchStart&&u.props.onTouchStart(e),F&&(I||!K)&&y(F,D,V,{locale:N,priority:!0,bypassPrefetchedCheck:!0},{kind:L},K)}};if((0,s.isAbsoluteUrl)(V))$.href=V;else if(!S||O||"a"===u.type&&!("href"in u.props)){var ee=void 0!==N?N:null==H?void 0:H.locale,et=(null==H?void 0:H.isLocaleDomain)&&(0,v.getDomainLocale)(V,ee,null==H?void 0:H.locales,null==H?void 0:H.domainLocales);$.href=et||(0,g.addBasePath)((0,f.addLocale)(V,ee,null==H?void 0:H.defaultLocale))}return S?l.default.cloneElement(u,$):l.default.createElement("a",n._({},z,$),r)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5690:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5754);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});var o=r(959),a=r(2472),l="function"==typeof IntersectionObserver,i=new Map,c=[];function u(e){var t=e.rootRef,r=e.rootMargin,u=e.disabled||!l,s=n._((0,o.useState)(!1),2),f=s[0],d=s[1],h=(0,o.useRef)(null),p=(0,o.useCallback)(function(e){h.current=e},[]);return(0,o.useEffect)(function(){if(l){if(!u&&!f){var e,n,o,s,p=h.current;if(p&&p.tagName)return n=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=i.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},c.push(r),i.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,o=e.observer,(s=e.elements).set(p,function(e){return e&&d(e)}),o.observe(p),function(){if(s.delete(p),o.unobserve(p),0===s.size){o.disconnect(),i.delete(n);var e=c.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&c.splice(e,1)}}}}else if(!f){var v=(0,a.requestIdleCallback)(function(){return d(!0)});return function(){return(0,a.cancelIdleCallback)(v)}}},[u,r,t,f,h.current]),[p,f,(0,o.useCallback)(function(){d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(6576),o=r(1527),a=r(9786),l=r(1151),i=r.n(l),c=r(959),u=JSON.parse('[{"title":"html","path":"html","routes":[{"path":"SemanticsTag","title":"语义化标签"},{"path":"anchor","title":"锚元素"}]},{"title":"css","path":"css","routes":[{"path":"flex","title":"flex 布局","date":"2022-01-01"},{"path":"grid","title":"grid 布局"},{"path":"unit","title":"布局单位"},{"path":"stacking-context","title":"层叠上下文"}]},{"title":"javascript","path":"javascript","routes":[{"path":"promise","title":"promise"},{"path":"async-await","title":"async 和 await"},{"path":"execution-context","title":"执行上下文"},{"path":"scopes","title":"作用域"}]},{"title":"react","path":"react","routes":[{"path":"roadmap","title":"学习路线"},{"path":"lifecycle","title":"类组件生命周期"},{"path":"hook","title":"hook"},{"path":"high-compoment","title":"组件逻辑复用方案"}]},{"title":"react 源码","path":"react-src","routes":[{"path":"architecture","title":"源码架构"},{"path":"fiber-node","title":"fiber 节点"},{"path":"render-mode","title":"渲染模式"},{"path":"execution-context","title":"context"},{"path":"scheduler","title":"scheduler"},{"path":"first-render","title":"初次渲染"},{"path":"update-render","title":"更新渲染"},{"path":"render-task","title":"渲染任务的执行"},{"path":"reconcile","title":"reconcile"}]},{"title":"实践","path":"demo","routes":[{"path":"music-player","title":"音乐播放器"},{"path":"font-advance","title":"字体库优化"}]},{"title":"资料","path":"material","routes":[{"path":"roadmap","title":"路线图"}]},{"title":"遐想","path":"opinion","routes":[{"path":"blog","title":"博客"}]}]'),s=r(4875),f=r.n(s),d=r(6565),h=r.n(d);function p(){var e=(0,a.useRouter)().asPath;return(0,o.jsx)("nav",{children:(0,o.jsx)("ul",{className:"mt-6 mb-12",children:(0,o.jsx)(c.Suspense,{fallback:null,children:u.map(function(t){return(0,o.jsxs)("li",{className:"mt-1",children:[(0,o.jsx)("div",{className:f()("pl-1 border border-transparent rounded-sm font-bold text-lg",{"text-highlight":e==="".concat(t.path)}),children:t.title}),(0,o.jsx)("ul",{children:t.routes.map(function(r){var n=h().join(t.path,r.path);return(0,o.jsx)("li",{className:f()("pl-4 border border-transparent rounded-sm font-bold hover:bg-dark/5 text-sm py-0.5 hover:dark:bg-light/5",{"text-highlight":e.includes(n)}),children:(0,o.jsx)(i(),{href:n,className:"block",children:r.title})},n)})})]},t.path)})})})})}var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=c.createContext&&c.createContext(v),b=function(){return(b=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function y(e){return function(t){return c.createElement(x,b({attr:b({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return c.createElement(t.tag,b({key:r},t.attr),e(t.child))})}(e.child))}}function x(e){var t=function(t){var r,n=e.attr,o=e.size,a=e.title,l=m(e,["attr","size","title"]),i=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),c.createElement("svg",b({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:r,style:b(b({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),a&&c.createElement("title",null,a),e.children)};return void 0!==g?c.createElement(g.Consumer,null,function(e){return t(e)}):t(v)}function j(e){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"}}]})(e)}function C(e){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"}}]})(e)}function _(e){return y({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(e)}function k(){return(0,o.jsxs)("div",{className:"w-full h-full flex flex-row items-center justify-between px-4",children:[(0,o.jsx)("div",{children:"厘清逻辑"}),(0,o.jsxs)("div",{className:"mr-2 flex flex-row items-center justify-between gap-2 text-xl",children:[(0,o.jsx)("a",{href:"https://github.com/Xxs-7/Xxs-7.github.io",className:"p-1 rounded-full hover:bg-dark/5 hover:dark:bg-light/5",children:(0,o.jsx)(_,{})}),(0,o.jsx)("button",{className:"block dark:hidden p-1 rounded-full hover:bg-dark/5 hover:dark:bg-light/5",type:"button","aria-label":"Use Dark Mode",onClick:function(){window.__setPreferredTheme("dark")},children:(0,o.jsx)(j,{})}),(0,o.jsx)("button",{type:"button",className:"hidden dark:block p-1 rounded-full hover:bg-dark/5 hover:dark:bg-light/5","aria-label":"Use Light Mode",onClick:function(){window.__setPreferredTheme("light")},children:(0,o.jsx)(C,{})})]})]})}function O(e){var t=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("header",{className:"w-full fixed t-0 h-14 border-b backdrop-blur border-slate-900/10 dark:border-slate-300/10 z-10",children:(0,o.jsx)(k,{})}),(0,o.jsxs)("div",{className:"pt-14 flex max-w-screen overflow-y-scroll",children:[(0,o.jsx)("nav",{className:"hidden lg:block fixed top-14 lg:bottom-0 lg:h-screen w-[18rem] pb-10 pl-4 overflow-y-auto min-h-screen z-10",children:(0,o.jsx)(p,{})}),(0,o.jsx)("main",{className:"relative lg:ml-[18rem] min-w-0 flex-1 pl-1 pr-5 pb-6",children:t})]})]})}r(1655),r(2191),r(3969);var w=function(e){var t=e.Component,r=e.pageProps;return(0,o.jsx)(O,{children:(0,o.jsx)(t,(0,n._)({},r))})}},3969:function(){},2191:function(){},1655:function(){},6565:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",o=0,a=-1,l=0,i=0;i<=e.length;++i){if(i<e.length)r=e.charCodeAt(i);else if(47===r)break;else r=47;if(47===r){if(a===i-1||1===l);else if(a!==i-1&&2===l){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2)){if(n.length>2){var c=n.lastIndexOf("/");if(c!==n.length-1){-1===c?(n="",o=0):o=(n=n.slice(0,c)).length-1-n.lastIndexOf("/"),a=i,l=0;continue}}else if(2===n.length||1===n.length){n="",o=0,a=i,l=0;continue}}t&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(a+1,i):n=e.slice(a+1,i),o=i-a-1;a=i,l=0}else 46===r&&-1!==l?++l:l=-1}return n}var n={resolve:function(){for(var e,n,o="",a=!1,l=arguments.length-1;l>=-1&&!a;l--)l>=0?n=arguments[l]:(void 0===e&&(e=""),n=e),t(n),0!==n.length&&(o=n+"/"+o,a=47===n.charCodeAt(0));return(o=r(o,!a),a)?o.length>0?"/"+o:"/":o.length>0?o:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return(0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&o&&(e+="/"),n)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var o=arguments[r];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r||(e=n.resolve(e))===(r=n.resolve(r)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var a=e.length,l=a-o,i=1;i<r.length&&47===r.charCodeAt(i);++i);for(var c=r.length-i,u=l<c?l:c,s=-1,f=0;f<=u;++f){if(f===u){if(c>u){if(47===r.charCodeAt(i+f))return r.slice(i+f+1);if(0===f)return r.slice(i+f)}else l>u&&(47===e.charCodeAt(o+f)?s=f:0===f&&(s=0));break}var d=e.charCodeAt(o+f);if(d!==r.charCodeAt(i+f))break;47===d&&(s=f)}var h="";for(f=o+s+1;f<=a;++f)(f===a||47===e.charCodeAt(f))&&(0===h.length?h+="..":h+="/..");return h.length>0?h+r.slice(i+s):(i+=s,47===r.charCodeAt(i)&&++i,r.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,o=-1,a=!0,l=e.length-1;l>=1;--l)if(47===(r=e.charCodeAt(l))){if(!a){o=l;break}}else a=!1;return -1===o?n?"/":".":n&&1===o?"//":e.slice(0,o)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');t(e);var n,o=0,a=-1,l=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var i=r.length-1,c=-1;for(n=e.length-1;n>=0;--n){var u=e.charCodeAt(n);if(47===u){if(!l){o=n+1;break}}else -1===c&&(l=!1,c=n+1),i>=0&&(u===r.charCodeAt(i)?-1==--i&&(a=n):(i=-1,a=c))}return o===a?a=c:-1===a&&(a=e.length),e.slice(o,a)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!l){o=n+1;break}}else -1===a&&(l=!1,a=n+1);return -1===a?"":e.slice(o,a)},extname:function(e){t(e);for(var r=-1,n=0,o=-1,a=!0,l=0,i=e.length-1;i>=0;--i){var c=e.charCodeAt(i);if(47===c){if(!a){n=i+1;break}continue}-1===o&&(a=!1,o=i+1),46===c?-1===r?r=i:1!==l&&(l=1):-1!==r&&(l=-1)}return -1===r||-1===o||0===l||1===l&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){var t,r;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+r:t+"/"+r:r},parse:function(e){t(e);var r,n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var o=e.charCodeAt(0),a=47===o;a?(n.root="/",r=1):r=0;for(var l=-1,i=0,c=-1,u=!0,s=e.length-1,f=0;s>=r;--s){if(47===(o=e.charCodeAt(s))){if(!u){i=s+1;break}continue}-1===c&&(u=!1,c=s+1),46===o?-1===l?l=s:1!==f&&(f=1):-1!==l&&(f=-1)}return -1===l||-1===c||0===f||1===f&&l===c-1&&l===i+1?-1!==c&&(0===i&&a?n.base=n.name=e.slice(1,c):n.base=n.name=e.slice(i,c)):(0===i&&a?(n.name=e.slice(1,l),n.base=e.slice(1,c)):(n.name=e.slice(i,l),n.base=e.slice(i,c)),n.ext=e.slice(l,c)),i>0?n.dir=e.slice(0,i-1):a&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}},l=!0;try{t[e](a,a.exports,n),l=!1}finally{l&&delete r[e]}return a.exports}n.ab="//";var o=n(114);e.exports=o}()},1151:function(e,t,r){e.exports=r(4699)},9786:function(e,t,r){e.exports=r(8910)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(9587),t(8910)}),_N_E=e.O()}]);