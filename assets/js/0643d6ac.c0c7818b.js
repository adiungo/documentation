"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={},i="Content Models",s={unversionedId:"models/content-models/index",id:"models/content-models/index",title:"Content Models",description:"A Content_Model represents a grouped collection of data that can have save and delete actions applied",source:"@site/docs/models/content-models/index.md",sourceDirName:"models/content-models",slug:"/models/content-models/",permalink:"/models/content-models/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"WordPress Integration",permalink:"/integrations/wordpress"},next:{title:"Location",permalink:"/models/location"}},l={},d=[{value:"Working With Models",id:"working-with-models",level:2},{value:"Extending Models",id:"extending-models",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"content-models"},"Content Models"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Content_Model"),' represents a grouped collection of data that can have save and delete actions applied\nto it. It generally represents a posted "thing", such as a Tweet, a Mastodon post, a blog post, or something like that.'),(0,a.kt)("h2",{id:"working-with-models"},"Working With Models"),(0,a.kt)("p",null,"Models can be saved, or deleted using their respective ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," methods. Each of these methods broadcast\na ",(0,a.kt)("inlineCode",{parentName:"p"},"Model_Event")," that can be observed by platforms. It's up to the ",(0,a.kt)("em",{parentName:"p"},"platform")," to actually instruct the model on what to\ndo when these actions are called."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$model->save();\n$model->delete();\n")),(0,a.kt)("p",null,"Models are also responsible for determining if they are identical to another given model. This makes it possible, when\nsyncing, to determine if a model was changed and needs updated. This is done using the ",(0,a.kt)("inlineCode",{parentName:"p"},"equals")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$model->equals($other_model);\n")),(0,a.kt)("h2",{id:"extending-models"},"Extending Models"),(0,a.kt)("p",null,"A model is an abstract class, and should be extended by data source integrations. For example, there is likely to be a\nTwitter data source, with a Tweet model in the future. This model will include a series of traits and interfaces that\ndescribe what makes up a Tweet, making it possible to set, and get the various properties that make up a Tweet."),(0,a.kt)("p",null,"It might look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class Tweet extends Content_Model implements Identifiable_Int Has_Attachment Has_Content Has_Author Has_Published_Date Has_Tags Has_Origin Has_Location{\n  use With_Identifiable_Int\n  use With_Content\n  use With_Author\n  use With_Published_Date\n  use With_Tags\n  use With_Origin\n  use With_Location\n  \n  public function equals(Tweet $tweet): boolean\n  {\n    return $tweet->get_id() === $this->get_id() && $tweet->get_published_date() === $this->get_published_date();\n  }\n}\n")),(0,a.kt)("p",null,"This defines ",(0,a.kt)("em",{parentName:"p"},"what")," the model is, but it doesn't describe how to actually handle the save/delete actions. Those actions\nare done by the platform integration by hooking into the events, like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Save\nContent_Model_Event::instance()->attach(Twitter::class, 'save', function(Content_Model_Provider $provider){\n  /** @var Tweet $model */\n  $tweet = $provider->get_content_model();\n  \n  // Do things with the tweet, perhaps adapt it, and then save the content in the way your platform does that.\n  // Note that save accounts for both creating, and updating content. It is up to you to determine if it needs saved!\n});\n\n// Delete\nContent_Model_Event::instance()->attach(Twitter::class, 'delete', function(Content_Model_Provider $provider){\n  /** @var Tweet $model */\n  $tweet = $provider->get_content_model();\n  \n  // Do things with the tweet, perhaps adapt it, and then delete/archive the content.\n});\n")))}p.isMDXComponent=!0}}]);