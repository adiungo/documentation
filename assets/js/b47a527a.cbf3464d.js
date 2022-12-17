"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Integrations",s={unversionedId:"integrations/index",id:"integrations/index",title:"Integrations",description:"An integration is a collection of index strategies, content models that",source:"@site/docs/integrations/index.md",sourceDirName:"integrations",slug:"/integrations/",permalink:"/integrations/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Index Strategies",permalink:"/index-strategies/"},next:{title:"WordPress Integration",permalink:"/integrations/wordpress"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrations"},"Integrations"),(0,o.kt)("p",null,"An integration is a collection of ",(0,o.kt)("a",{parentName:"p",href:"/index-strategies"},"index strategies"),", ",(0,o.kt)("a",{parentName:"p",href:"/models/content-models"},"content models")," that\nare used in-combination to actually index\ncontent from different online services. These integrations are responsible for creating builders that make it easy for a\nplatform to set up an integration with a site."),(0,o.kt)("p",null,"For example, let's say your ",(0,o.kt)("a",{parentName:"p",href:"/supported-platforms"},"platform")," of choice is a WordPress website that you regularly publish\ncontent on, and you want to automatically capture that content and index it on your own site. Normally, this would\nrequire several classes to fully build the ",(0,o.kt)("a",{parentName:"p",href:"/data-sources/rest"},"REST data source")," needed to accomplish this. To work\naround this, it's most-likely better to use the ",(0,o.kt)("a",{parentName:"p",href:"/integrations/wordpress"},"WordPress integration"),". These integrations\ninclude ",(0,o.kt)("a",{parentName:"p",href:"https://refactoring.guru/design-patterns/builder"},"builder")," classes that will automatically build these data\nsources for you, requiring minimum input."))}p.isMDXComponent=!0}}]);