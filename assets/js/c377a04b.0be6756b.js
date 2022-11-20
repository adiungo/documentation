"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,slug:"/"},r="Adiungo - A Content Ownership Manifesto",l={unversionedId:"index",id:"index",title:"Adiungo - A Content Ownership Manifesto",description:'First off, let\'s get this out of the way - Adiungo is pronounced "Ah-DOON-Go", and the closest translation to English',source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"docs",next:{title:"Data Sources",permalink:"/data-sources/"}},s={},u=[{value:"The Proposal",id:"the-proposal",level:2},{value:"Integrations",id:"integrations",level:2},{value:"Proof of Concept",id:"proof-of-concept",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adiungo---a-content-ownership-manifesto"},"Adiungo - A Content Ownership Manifesto"),(0,a.kt)("p",null,"First off, let's get this out of the way - Adiungo is pronounced ",(0,a.kt)("inlineCode",{parentName:"p"},'"Ah-DOON-Go"'),', and the closest translation to English\nis "add", but it also is used to "join, harness, attach, and incorporate". I felt that these words accurately describe\nthe goal of this project.'),(0,a.kt)("p",null,"The purpose of Adiungo is to help people take control of their online identity, and archive all of their online content\non their website automatically. It is intended to be a curator of sorts - something that will automatically ensure that\nwhenever you do something online, that information is collected, and stored in a single place for you to access in\nwhatever way you want."),(0,a.kt)("p",null,"At the time of this writing, my personal identity is fragmented across the web in different places, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Social Media Platforms"),(0,a.kt)("li",{parentName:"ul"},"My personal website"),(0,a.kt)("li",{parentName:"ul"},"Pull Requests"),(0,a.kt)("li",{parentName:"ul"},"Software Releases"),(0,a.kt)("li",{parentName:"ul"},"Discussions (such as this one!)"),(0,a.kt)("li",{parentName:"ul"},"Podcast interviews"),(0,a.kt)("li",{parentName:"ul"},"Various bother blogs where I've written content"),(0,a.kt)("li",{parentName:"ul"},"Livestream recordings"),(0,a.kt)("li",{parentName:"ul"},"Online Videos")),(0,a.kt)("p",null,"This creates a very fragmented view of me, and makes it very hard to get a full picture of my presence on the web.\nAnother issue, is that many places we hang out online can disappear at any time. We're never guaranteed to have access\nto our data, and never really know if the data will be removed in the future."),(0,a.kt)("p",null,"I envision a world where your personal website is, yet again, the canonical location for your entire online identity."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wouldn't it be nice if you could visit a person's website, and see their entire online identity in one location?*"),(0,a.kt)("li",{parentName:"ul"},"How awesome would it be if you could create an RSS feed from a person's feed based on what you want to actually see?"),(0,a.kt)("li",{parentName:"ul"},"Wouldn't it be amazing if you could just...delete a social media account, but still keep the content on your site?"),(0,a.kt)("li",{parentName:"ul"},"How cool would it be to be able to search in a single location for everything a person has done?")),(0,a.kt)("h2",{id:"the-proposal"},"The Proposal"),(0,a.kt)("p",null,"I propose that we build a platform that can connect to different online spaces, collect the content published by you,\nand store that data somewhere in a way that it can be searched later I think this package should be built in a way that\nmakes it possible for platforms to integrate with it (WordPress, Drupal, Laravel) directly."),(0,a.kt)("p",null,"Exactly how it accomplishes that would probably depend on how the space allows us to connect to it. Perhaps it's\nautomatically polled every few minutes to see if there's any new content, or maybe it's polled on-demand, just-in-time,\nevery 15 minute. It could even be set up as a webhook, automatically publishing the content on the site as soon as you\npost in the space. It just depends on what method the platform allows us to do, but I think generally we would want to\nstart with the \"polled on-demand\" approach, if possible."),(0,a.kt)("h2",{id:"integrations"},"Integrations"),(0,a.kt)("p",null,"I recognize that many of these integrations may not be possible with how aggressively some of these platforms prevent\neasy access to the data, but I think it's do-able all the same."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ActivityPub (Mastodon, and other federated websites)"),(0,a.kt)("li",{parentName:"ul"},"Non-federated social platforms (Instagram, Twitter, Tumblr)"),(0,a.kt)("li",{parentName:"ul"},"WordPress blogs"),(0,a.kt)("li",{parentName:"ul"},"SoundCloud, Stitcher, and other places where audio is shared"),(0,a.kt)("li",{parentName:"ul"},"Twitch, YouTube, Vimeo, WordPress TV")),(0,a.kt)("h2",{id:"proof-of-concept"},"Proof of Concept"),(0,a.kt)("p",null,"A very, very basic version of this vision can be seen on ",(0,a.kt)("a",{parentName:"p",href:"https://www.alexstandiford.com/blog"},"my own website"),". This\nsite has a REST API that automatically\ngrabs data from several predetermined sources, and will either link directly to the original post, or if it's\noriginally from my website, it simply displays the post directly. All the content for each post is saved in my\ndatabase, so if something happens to that content on the other site, I can flip a switch and self-host it, or choose to\ndelete it afterward. This is missing a lot of the functionality I want in the feed, but roughly-speaking, this kind-of\nthe idea. Preserve my content, curate it in one place, and direct the visitor to the best place for that content."),(0,a.kt)("p",null,"I intend to expand this idea across all content I publish online. Every code contribution, Tweet, Toot, blog post,\npodcast article, all of it. I want to have a copy of all of it on my site, and I want it to happen automatically, with\nno additional effort on my part. Ironically, this very post is something I intend to archive, and have on my site.\nCall for Contributors"),(0,a.kt)("p",null,"I'm prepared to take a lead on this project, and am looking for people to collaborate with me on this. I know that I\ncan't do this alone, and don't even want to try. Instead, I'm asking for help from other people who think this cause is\nworthy."),(0,a.kt)("p",null,"Some things we need to really get this project moving:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testers"),(0,a.kt)("li",{parentName:"ul"},"Front-End Developers"),(0,a.kt)("li",{parentName:"ul"},"PHP Back-End Developers"),(0,a.kt)("li",{parentName:"ul"},"WordPress Developers"),(0,a.kt)("li",{parentName:"ul"},"Continuous Integration Assistance"),(0,a.kt)("li",{parentName:"ul"},"Documentation Writers")),(0,a.kt)("p",null,"If you're interested in joining in, add a comment to this discussion with a little information about you and how you\nthink you can help. If this gets any traction, I will follow up in another post after this one with further details."))}p.isMDXComponent=!0}}]);