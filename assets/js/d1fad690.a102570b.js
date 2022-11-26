"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[389],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4201:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3,title:"Data Sources"},i=void 0,s={unversionedId:"data-sources/index",id:"data-sources/index",title:"Data Sources",description:"A Data Source is a single source of data. This data source can be anything, so long as it can create",source:"@site/docs/data-sources/index.md",sourceDirName:"data-sources",slug:"/data-sources/",permalink:"/data-sources/",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Data Sources"},sidebar:"docs",previous:{title:"Adiungo - A Content Ownership Manifesto",permalink:"/"},next:{title:"CSV",permalink:"/data-sources/csv"}},c={},l=[{value:"Fetching Paginated Data",id:"fetching-paginated-data",level:2},{value:"Fetching a single item",id:"fetching-a-single-item",level:2}],d={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Data Source is a single source of data. This data source can be anything, so long as it can create\na ",(0,r.kt)("inlineCode",{parentName:"p"},"Content_Model_Collection")," from the data source."),(0,r.kt)("h2",{id:"fetching-paginated-data"},"Fetching Paginated Data"),(0,r.kt)("p",null,"When importing data, it's generally a good-idea to fetch the data in small batches. This ensures that\na request doesn't time out, and makes it possible to create multiple threads to import data faster."),(0,r.kt)("p",null,"As such, a data source should also be able to provide the next batch of data. This is accomplished\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"has_more")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"get_next")," methods. These two methods make it possible for an integration to\nloop through these items and know when to stop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n/** @var Data_Source $data_source */\n$data_source->get_data()->each((Model $item) => $item->save());\n\nwhile($data_source->has_more()){\n  // Returns the next page of data.\n  $data_source = $data_source->get_next();\n  \n  // Do whatever you need to-do with the data. Perhaps save the items.\n  $data_source->get_data()->each((Model $item) => $item->save());\n}\n?>\n")),(0,r.kt)("p",null,"Typically, these data sources are used by the ",(0,r.kt)("a",{parentName:"p",href:"index-strategies"},"Index Strategy")," to actually fetch the data. Ideally,\nthis wouldn't\nrun in a single thread, but instead run in a separate request using a background process, or something similar."),(0,r.kt)("h2",{id:"fetching-a-single-item"},"Fetching a single item"),(0,r.kt)("p",null,"It's also possible to fetch a single record from a data source, based on the ID. This makes it possible to spot-check,\nor update a specific record when-needed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WARNING: This approach will make a request each time it is called, and is not appropriate for getting batches of data.\nIf you have a collection of IDs to retrieve, it's generally better to use ",(0,r.kt)("inlineCode",{parentName:"strong"},"get_data"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n/** @var Data_Source $data_source */\n$data_source->get_item(123);\n?>\n")))}u.isMDXComponent=!0}}]);