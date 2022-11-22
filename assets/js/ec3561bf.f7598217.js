"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},s="Index Strategies",i={unversionedId:"index-strategies/index",id:"index-strategies/index",title:"Index Strategies",description:"Index strategies represent the culmination of things needed to actually index data. A strategy accepts",source:"@site/docs/index-strategies/index.md",sourceDirName:"index-strategies",slug:"/index-strategies/",permalink:"/index-strategies/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Implementers",permalink:"/implementers"},next:{title:"Content Models",permalink:"/models/content-models/"}},l={},d=[{value:"Example - Index data from a CSV import",id:"example---index-data-from-a-csv-import",level:2},{value:"Suggested Implementation - Use a Builder",id:"suggested-implementation---use-a-builder",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"index-strategies"},"Index Strategies"),(0,r.kt)("p",null,"Index strategies represent the culmination of things needed to actually index data. A strategy accepts\na ",(0,r.kt)("a",{parentName:"p",href:"/data-sources"},"Data Source"),", and uses that source to loop through the records and save the data."),(0,r.kt)("p",null,"Different data sources may require different values to be set to them in-order to function. Perhaps it's necessary to\nauthenticate with a secret, or maybe you're importing a CSV and need to map columns to model properties. Either way,\nthis is generally a required step to accomplish what's needed. The Index Strategy will take a data source will all of\nthese set properties, and then use it to index the data."),(0,r.kt)("h2",{id:"example---index-data-from-a-csv-import"},"Example - Index data from a CSV import"),(0,r.kt)("p",null,"Let's say you have a CSV file that you want to import to the database. To accomplish this, you can make use of\nthe ",(0,r.kt)("a",{parentName:"p",href:"/data-sources/csv"},"CSV Data Source"),", attach that data source to an index strategy, and then call that strategy to\ninstruct the system to import, or ",(0,r.kt)("em",{parentName:"p"},"index")," the data in the database."),(0,r.kt)("p",null,"For the sake of this example, let's assume we have a very basic ",(0,r.kt)("a",{parentName:"p",href:"/models/content-models"},"content model")," that includes content,\na title, and an author."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class Example_Model implements Has_Title, Has_Content, Has_Author{\n  use With_Title\n  use With_Content\n  use With_Author\n}\n")),(0,r.kt)("p",null,"Now, we can associate that model with a CSV import by mapping each column to the various model setters, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// This would probably come from a file_get_contents call.\n$csv_data = 'id,author,title,content\n1,Alex,\"When Twitter Loses, WordPress Wins\",Content 1\n2,Kara,What It\u2019s Like Working in NICU,Content 2\n3,Courtney,How to train your golden to do anything,Content 3\n4,Jonathon,Forget capital gains \u2013 get dividends,Content 4\n5,Kellie,I. Love. You.,Content 5';\n\n$data_source = (new CSV())\n                 ->set_model(Example_Model::class)\n                 ->map_column('id', 'set_id', Types::Integer)\n                 ->map_column('author','set_author', Types::String)\n                 ->map_column('title', 'set_title', Types::String)\n                 ->map_column('content', 'set_content', Types::String)\n                 ->set_csv($csv_data)\n")),(0,r.kt)("p",null,"Finally, we can combine that data source with a data source, and when the time is right use it to index the data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$strategy = (new Index_Strategy())\n              ->set_data_source($data_source);\n\n// When we\'re ready, we can use this data source. Perhaps this is called in a hook of some sort.\n// Calling this would initiate a loop that would go through all CSV files and index the data.\n$strategy->index_data();\n\n// Or we can index a single record from the CSV, if we prefer. This would index "When Twitter Loses, WordPress Wins" by "Alex"\n$strategy->index_item(1)\n')),(0,r.kt)("h2",{id:"suggested-implementation---use-a-builder"},"Suggested Implementation - Use a Builder"),(0,r.kt)("p",null,'An Index Strategy Builder works kind of like a "template" for an index strategy. They allow you to pre-build common\npatterns among different integrations, so you don\'t have to repeat a lot of the setup every time. We could expand on the\nexample above and actually make a builder to make it easier to import any CSV that matches this format in the future.'),(0,r.kt)("p",null,"You absolutely don't have to do this - but this helps illustrate how some of the core implementers in Adiungo enables\nyou to set this kind of thing up."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class Example_CSV_Importer implements Has_Index_Strategy, Has_Data_Source{\n  use With_Index_Strategy;\n  use With_Data_Source;\n  \n  public function __construct(string $csv_data){\n    $this->set_data_source((new CSV())\n                 ->set_model(Example_Model::class)\n                 ->map_column('id', 'set_id', Types::Integer)\n                 ->map_column('author','set_author', Types::String)\n                 ->map_column('title', 'set_title', Types::String)\n                 ->map_column('content', 'set_content', Types::String)\n                 ->set_csv($csv_data));\n   $this->set_index_strategy((new Index_Strategy())->set_data_source($this->get_data_source()));\n  }\n}\n")),(0,r.kt)("p",null,'Now, when the time comes, you can build this class, and potentially change anything about the data source or index\nstrategy if needed. Think of this like a "template" that provides sane defaults for your example.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'// This would probably come from a file_get_contents call.\n$csv_data = \'id,author,title,content\n1,Alex,"When Twitter Loses, WordPress Wins",Content 1\n2,Kara,What It\u2019s Like Working in NICU,Content 2\n3,Courtney,How to train your golden to do anything,Content 3\n4,Jonathon,Forget capital gains \u2013 get dividends,Content 4\n5,Kellie,I. Love. You.,Content 5\';\n\n// When we\'re ready, we can use this data source. Perhaps this is called in a hook of some sort.\n// Calling this would initiate a loop that would go through all CSV files and index the data.\n(new Example_CSV_Importer($csv_data))->get_index_strategy()->index_data();\n\n// Or we can index a single record from the CSV, if we prefer. This would index "When Twitter Loses, WordPress Wins" by "Alex"\n(new Example_CSV_Importer($csv_data))->get_index_strategy()->index_item(1);\n\n// Finally, you can override or change things. Perhaps you have a special csv where the "author" column is called "user"\n$importer = (new Example_CSV_Importer($csv_data));\n\n$importer->get_data_source()->map_column(\'user\',\'set_author\',Types::String);\n\n$importer->get_index_strategy()->index_data();\n\n')))}u.isMDXComponent=!0}}]);