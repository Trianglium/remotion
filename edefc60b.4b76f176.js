(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(158)),i={id:"performance",title:"Performance Tips"},c={unversionedId:"performance",id:"performance",isDocsHomePage:!1,title:"Performance Tips",description:"Video rendering is one of the most heavy workloads a computer can take on. Remotion aims to at least perform similarly than traditional video editing programs. This section describes several aspects that influence render speed that you can influence.",source:"@site/docs/performance.md",slug:"/performance",permalink:"/docs/performance",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/performance.md",version:"current",sidebar:"someSidebar",previous:{title:"Puppeteer timeout",permalink:"/docs/timeout"},next:{title:"v2.0 Breaking changes",permalink:"/docs/2-0-migration"}},s=[{value:"Increase concurrency",id:"increase-concurrency",children:[]},{value:"Decrease remote load",id:"decrease-remote-load",children:[]},{value:"Decrease image resolution",id:"decrease-image-resolution",children:[]},{value:"Choose the right image format and codec",id:"choose-the-right-image-format-and-codec",children:[]},{value:"Rendering still too slow?",id:"rendering-still-too-slow",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Video rendering is one of the most heavy workloads a computer can take on. Remotion aims to at least perform similarly than traditional video editing programs. This section describes several aspects that influence render speed that you can influence."),Object(a.b)("h2",{id:"increase-concurrency"},"Increase concurrency"),Object(a.b)("p",null,"By default, Remotion will use half of the threads available on the system to perform rendering. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.remotion.dev/docs/cli"}),"You can increase the default concurrency to use up to all of your threads"),". This will most likely increase render speed but might slow down other operations on your computer."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Most Intel and AMD CPUs have hyperthreading, which means that per CPU core you get 2 threads. So for example, if you have an 8-core CPU, you have 16 threads, which means that the maximum concurrency that Remotion supports is 16."))),Object(a.b)("h2",{id:"decrease-remote-load"},"Decrease remote load"),Object(a.b)("p",null,"Loading data from remote sources, such as making an API call, loading an image, video, or audio file from a remote location will increase the render time because Remotion has to wait until the data is fetched. Try to move assets to your local machine or cache API requests (for example in ",Object(a.b)("inlineCode",{parentName:"p"},"localStorage"),") to speed up Remotion rendering."),Object(a.b)("h2",{id:"decrease-image-resolution"},"Decrease image resolution"),Object(a.b)("p",null,"Generally, lower resolution frames result in faster renders. You can make the dimensions smaller while in development and rendering test files, and apply a ",Object(a.b)("inlineCode",{parentName:"p"},"scale")," transformation to the composition to move faster initially, and then render at full resolution later."),Object(a.b)("h2",{id:"choose-the-right-image-format-and-codec"},"Choose the right image format and codec"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/config#setimageformat"}),"JPEG rendering is faster")," than PNG rendering. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/encoding"}),"H264 is the fastest way")," to encode frames into a video. If you have deviated from the defaults, consider them again if you see slow rendering."),Object(a.b)("h2",{id:"rendering-still-too-slow"},"Rendering still too slow?"),Object(a.b)("p",null,"We are actively working on a way to massively speed up video rendering. Hang on!"))}d.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,f=m["".concat(i,".").concat(u)]||m[u]||p[u]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);