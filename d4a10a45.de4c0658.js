(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{108:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(118)),i={id:"use-img-and-iframe",title:"Use <Img> and <IFrame> tags"},c={unversionedId:"use-img-and-iframe",id:"use-img-and-iframe",isDocsHomePage:!1,title:"Use <Img> and <IFrame> tags",description:"Prefer Remotions ` and ` Tags over the native HTML elements. This will ensure that rendering is paused until all resources are actually loaded. The last you would want is your video to have a flickering frame!",source:"@site/docs/use-img-and-iframe.md",slug:"/use-img-and-iframe",permalink:"/docs/use-img-and-iframe",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/use-img-and-iframe.md",version:"current",sidebar:"someSidebar",previous:{title:"Custom Webpack config",permalink:"/docs/webpack"},next:{title:"Plain Javascript",permalink:"/docs/javascript"}},u=[],s={toc:u};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Prefer Remotions ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"img"}),Object(o.b)("inlineCode",{parentName:"a"},"<Img />"))," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"iframe"}),Object(o.b)("inlineCode",{parentName:"a"},"<IFrame />"))," Tags over the native HTML elements. This will ensure that rendering is paused until all resources are actually loaded. The last you would want is your video to have a flickering frame!"))}l.isMDXComponent=!0},118:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),d=n,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.a.createElement(f,c(c({ref:r},s),{},{components:t})):a.a.createElement(f,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);