"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const s={},o="The Data Source Adapter",i={unversionedId:"the-data-source-adapter",id:"the-data-source-adapter",title:"The Data Source Adapter",description:"One challenge that comes with fetching data from different locations is actually converting the raw model data into the",source:"@site/docs/the-data-source-adapter.md",sourceDirName:".",slug:"/the-data-source-adapter",permalink:"/the-data-source-adapter",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"WordPress Plugin",permalink:"/supported-platforms/wordpress"}},l={},d=[{value:"Basic Example",id:"basic-example",level:2},{value:"Working With Nested Data",id:"working-with-nested-data",level:2},{value:"Typecasting With a Closure",id:"typecasting-with-a-closure",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-data-source-adapter"},"The Data Source Adapter"),(0,r.kt)("p",null,"One challenge that comes with fetching data from different locations is actually converting the raw model data into the\nactual model that Adiungo can understand. One way to convert this raw data into a model is to use\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Data_Source_Adapter")," class."),(0,r.kt)("p",null,"This adapter is baked-into the ",(0,r.kt)("a",{parentName:"p",href:"/data-sources/csv"},"CSV Importer"),", but it is also used by other data sources, like ",(0,r.kt)("a",{parentName:"p",href:"/data-sources/rest"},"Rest"),"."),(0,r.kt)("h2",{id:"basic-example"},"Basic Example"),(0,r.kt)("p",null,"Given this ",(0,r.kt)("a",{parentName:"p",href:"/models/content-models"},"model"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class Custom_Model extends Content_Model implements Has_Name, Identifiable_Int{\n    use With_Name;\n    use With_Int_Identity;\n}\n")),(0,r.kt)("p",null,"And this raw JSON response as an input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "This is the item",\n  "id": 123\n}\n')),(0,r.kt)("p",null,"We could convert the model using this adapter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'(new Data_Source_Adapter())->set_content_model_instance(Custom_Model::class)\n    // This connects the raw model\'s "name" value with the "set_name" setter in Custom_Model, and automatically casts the raw model to a string before setting.\n    ->map_field(\'name\', \'set_name\', Types::String)\n    // This connects the raw model\'s "id" value with the "set_id" setter in Custom_Model, and automatically casts the raw model to an integer before setting.\n    ->map_field(\'id\', \'set_id\', Types::Integer)\n    // this passes in the JSON, and converts it into the Custom_Model, setting the mapped properties.\n    ->convert_to_model(json_decode(\'{"name": "This is the item","id": 123}\', true))\n')),(0,r.kt)("h2",{id:"working-with-nested-data"},"Working With Nested Data"),(0,r.kt)("p",null,'The adapter also supports setting nested data using dot notation. Let\'s change the JSON to nest the "name" value:'),(0,r.kt)("p",null,"And this raw JSON response as an input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": {\n    "rendered": "This is the item"\n  },\n  "id": 123\n}\n')),(0,r.kt)("p",null,"We could convert the model by changing the field mapped to set_name to use name.rendered using this adapter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'(new Data_Source_Adapter())->set_content_model_instance(Custom_Model::class)\n    // This connects the raw model\'s "name" value with the "set_name" setter in Custom_Model, and automatically casts the raw model to a string before setting.\n    ->map_field(\'name.rendered\', \'set_name\', Types::String)\n    // This connects the raw model\'s "id" value with the "set_id" setter in Custom_Model, and automatically casts the raw model to an integer before setting.\n    ->map_field(\'id\', \'set_id\', Types::Integer)\n    // this passes in the JSON, and converts it into the Custom_Model, setting the mapped properties.\n    ->convert_to_model(json_decode(\'{"name": {"rendered":  "This is the item"},"id": 123}\', true))\n')),(0,r.kt)("h2",{id:"typecasting-with-a-closure"},"Typecasting With a Closure"),(0,r.kt)("p",null,"Sometimes, it's necessary to typecast using something that isn't a primitive type. It's also possible to set a type\nusing a closure instead of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Types")," enum. This is useful in cases where you have to construct objects from a single\npiece of data, such as a category."),(0,r.kt)("p",null,"Given this ",(0,r.kt)("a",{parentName:"p",href:"/models/content-models"},"model"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class Custom_Model extends Content_Model implements Has_Name, Identifiable_Int, Has_Categories{\n    use With_Name;\n    use With_Int_Identity;\n    use With_Categories;\n}\n")),(0,r.kt)("p",null,"And this raw JSON response as an input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "This is the item",\n  "categories": [1, 2, 3],\n  "id": 123\n}\n')),(0,r.kt)("p",null,"We could convert the model using this adapter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"(new Data_Source_Adapter())->set_content_model_instance(Custom_Model::class)\n    // This connects the raw model's \"name\" value with the \"set_name\" setter in Custom_Model, and automatically casts the raw model to a string before setting.\n    ->map_field('name', 'set_name', Types::String)\n    // This connects the raw model's \"id\" value with the \"set_id\" setter in Custom_Model, and automatically casts the raw model to an integer before setting.\n    ->map_field('id', 'set_id', Types::Integer)\n    // This will create partial Category objects using the provided ID.\n    ->map_field(\n        'categories',\n        'add_categories',\n        // Loop through the categories, and create a category instance and set the ID based on the provided ID.\n        fn (array $categories) => Array_Helper::map($categories, fn (string|null $category) => (new Category())->set_id($category))\n    )\n    // this passes in the JSON, and converts it into the Custom_Model, setting the mapped properties.\n    ->convert_to_model(json_decode('{\"name\": \"This is the item\",\"categories\": [1,2,3],\"id\": 123}', true))\n")))}p.isMDXComponent=!0}}]);