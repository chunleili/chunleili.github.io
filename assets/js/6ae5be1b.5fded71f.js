"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,b=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},l="\u5728zeno\u4e2d\u6e32\u67d3\u6d41\u4f53",o={unversionedId:"zeno/zeno_water_render",id:"zeno/zeno_water_render",title:"\u5728zeno\u4e2d\u6e32\u67d3\u6d41\u4f53",description:"\u6211\u4eec\u4e4b\u524d\u6e32\u67d3\u6d41\u4f53\u7684\u6d41\u7a0b\u90fd\u662f\u5728blender\u4e2d\u7684\u3002\u6559\u7a0b\u5982\u4e0b\u6240\u793a\uff1a",source:"@site/docs/zeno/zeno_water_render.md",sourceDirName:"zeno",slug:"/zeno/zeno_water_render",permalink:"/zeno/zeno_water_render",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/zeno/zeno_water_render.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5728zeno\u4e2d\u5355\u72ec\u7684\u6d4b\u8bd5\u67d0\u4e2a\u6587\u4ef6",permalink:"/zeno/zeno_test"},next:{title:"IterMethods",permalink:"/\u8bfb\u4e66\u7b14\u8bb0/IterMethods/"}},p={},u=[{value:"1\u8868\u9762\u91cd\u5efa",id:"1\u8868\u9762\u91cd\u5efa",level:2},{value:"\u8f93\u5165obj\u6570\u636e",id:"\u8f93\u5165obj\u6570\u636e",level:3},{value:"\u5c06\u6570\u636e\u8f6c\u6362\u4e3avdb\u683c\u5f0f",id:"\u5c06\u6570\u636e\u8f6c\u6362\u4e3avdb\u683c\u5f0f",level:3},{value:"\u8868\u9762\u91cd\u5efa\uff1aSmoothLiquidSDF\u8282\u70b9",id:"\u8868\u9762\u91cd\u5efasmoothliquidsdf\u8282\u70b9",level:3},{value:"\u8f93\u51fa\u8868\u9762\u7ed3\u679c\u4e3aobj\u683c\u5f0f",id:"\u8f93\u51fa\u8868\u9762\u7ed3\u679c\u4e3aobj\u683c\u5f0f",level:3},{value:"2\u6e32\u67d3",id:"2\u6e32\u67d3",level:2},{value:"\u8f93\u5165Obj",id:"\u8f93\u5165obj",level:3},{value:"BindMaterial \u7ed1\u5b9a\u6750\u8d28",id:"bindmaterial-\u7ed1\u5b9a\u6750\u8d28",level:3},{value:"ShaderFinalize \u7528BSDF\u5236\u4f5c\u6750\u8d28",id:"shaderfinalize-\u7528bsdf\u5236\u4f5c\u6750\u8d28",level:3},{value:"\u7ed3\u679c",id:"\u7ed3\u679c",level:3}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5728zeno\u4e2d\u6e32\u67d3\u6d41\u4f53"},"\u5728zeno\u4e2d\u6e32\u67d3\u6d41\u4f53"),(0,a.kt)("p",null,"\u6211\u4eec\u4e4b\u524d\u6e32\u67d3\u6d41\u4f53\u7684\u6d41\u7a0b\u90fd\u662f\u5728blender\u4e2d\u7684\u3002\u6559\u7a0b\u5982\u4e0b\u6240\u793a\uff1a\n",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_43940314/article/details/125260073"},"https://blog.csdn.net/weixin_43940314/article/details/125260073")),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0azeno\u6e32\u67d3\u6d41\u4f53\u66f4\u52a0\u65b9\u4fbf\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5df2\u6709\u7684\u6570\u636e\u4e3a80\u4e2a\u65f6\u95f4\u5e27\u7684\u7c92\u5b50\u7684\u4f4d\u7f6e\u3002\u4ee5obj\u683c\u5f0f\u5b58\u50a8\u3002\u540e\u7f00\u4e3apos.1.obj, pos.2.obj..."),(0,a.kt)("p",null,"\u672c\u6587\u6838\u5fc3\u76ee\u7684\u6709\u4e24\u4e2a\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ece\u7c92\u5b50\u4f4d\u7f6e\u6570\u636e\u8fdb\u884c\u8868\u9762\u91cd\u5efa\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4ece\u8868\u9762\u91cd\u5efa\u7684\u7ed3\u679c\u6e32\u67d3\u6d41\u4f53\u3002")),(0,a.kt)("p",null,"\u672c\u6587\u91c7\u7528\u7684zeno\u7248\u672c\u4e3a2022-7-28\u6784\u5efa\u7684gup cuda\u7248\u672c\u3002"),(0,a.kt)("h2",{id:"1\u8868\u9762\u91cd\u5efa"},"1\u8868\u9762\u91cd\u5efa"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u8981\u91c7\u53d6\u7684\u6838\u5fc3\u8282\u70b9\u4e3a",(0,a.kt)("strong",{parentName:"p"},"SmoothLiquidSDF\u8282\u70b9")),(0,a.kt)("h3",{id:"\u8f93\u5165obj\u6570\u636e"},"\u8f93\u5165obj\u6570\u636e"),(0,a.kt)("p",null,"\u5148\u8f93\u5165obj\u6570\u636e\uff0c\u7528readObjPrim\u548cStringEval\u3002\u5982\u679c\u4e0d\u7528stringEval\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u8bfb\u53d6$F\u8fd9\u4e2a\u5185\u7f6e\u53d8\u91cf\u3002\u8fd9\u4e2a\u53d8\u91cf\u4ee3\u8868\u5e27\u53f7\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48758868/197704975-0ef2476c-0681-4333-a075-49fad1386cc9.png",alt:"image"})),(0,a.kt)("p",null,"\u6b64\u65f6\u663e\u793a\u6b64\u8282\u70b9\uff0c\u5e94\u8be5\u80fd\u770b\u5230\u7c92\u5b50\n\u5982\u679c\u6ca1\u770b\u5230\uff0c\u8bf7\u70b9\u51fbReadObjPrim\u8282\u70b9\u540e alt+f"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48758868/197705146-c38a26cb-0fa5-45f7-a5c3-34615b38f777.png",alt:"image"})),(0,a.kt)("h3",{id:"\u5c06\u6570\u636e\u8f6c\u6362\u4e3avdb\u683c\u5f0f"},"\u5c06\u6570\u636e\u8f6c\u6362\u4e3avdb\u683c\u5f0f"),(0,a.kt)("p",null,"\u4f7f\u7528\u8282\u70b9\uff1aPrimToVDBPointDataGrid\n\u7531\u4e8eSmoothLiquidSDF\u8282\u70b9\u8f93\u5165\u6570\u636e\u5fc5\u987b\u662fvdb\u683c\u5f0f\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u8981\u8f6c\u6362\u4e00\u4e0b\u3002\n\u8f6c\u6362\u9700\u8981\u4e2aDx\uff0c\u53d6\u7c92\u5b50\u76f4\u5f84\u5373\u53ef\u3002\u6211\u4eec\u8f93\u5165\u6570\u636e\u7684\u7c92\u5b50\u534a\u5f84\u4e3a3.0\uff0c\u6545\u6b64\u5904\u53d66.0"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48758868/197706082-d24fd94e-2fd5-4b78-91de-33a80214528d.png",alt:"image"})),(0,a.kt)("h3",{id:"\u8868\u9762\u91cd\u5efasmoothliquidsdf\u8282\u70b9"},"\u8868\u9762\u91cd\u5efa\uff1aSmoothLiquidSDF\u8282\u70b9"),(0,a.kt)("p",null,"\u5fc5\u987b\u7684\u4e24\u4e2a\u8f93\u5165\u6570\u636e\u4e3a\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"inParticles\uff0c\u9700\u8981vdbPoint\u683c\u5f0f\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ol"},"Dx, \u91cd\u5efa\u7684\u7f51\u683c\u7cbe\u5ea6\u3002\u8d8a\u5c0f\u8d8a\u7ec6\u817b\u3002\u6211\u4eec\u7684\u8fd9\u91cc\u5927\u6982\u53d61.0")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48758868/197706817-77f8d196-22ce-46a2-88bc-9fa2baace3f7.png",alt:"image"})),(0,a.kt)("p",null,"\u6b64\u65f6\u70b9\u51fb\u8fd0\u884c\uff0c\u53ef\u4ee5\u770b\u5230\u8868\u9762\u91cd\u5efa\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48758868/197706875-ad27f22b-a205-4dbb-b75d-e4f81ff65802.png",alt:"image"})),(0,a.kt)("h3",{id:"\u8f93\u51fa\u8868\u9762\u7ed3\u679c\u4e3aobj\u683c\u5f0f"},"\u8f93\u51fa\u8868\u9762\u7ed3\u679c\u4e3aobj\u683c\u5f0f"),(0,a.kt)("p",null,"\u540c\u6837\u9700\u8981\u5148\u8f6c\u6362\u683c\u5f0f\u3002\u7531\u4e8eSmoothLiquidSDF\u8282\u70b9\u8f93\u51fa\u7684\u4e3avdb\u6570\u636e\uff0c\u6240\u4ee5\u8f6c\u6362\u56deprim"),(0,a.kt)("p",null,"\u7136\u540e\u518dwriteObjPrim"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48758868/197707553-90b1165a-c947-4a32-bddd-90262a62b230.png",alt:"image"})),(0,a.kt)("p",null,"\u6ce8\u610f\u663e\u793aWriteObjPrim"),(0,a.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48758868/197707761-718d854d-fd6c-4190-a4a9-8e7c4f4825f6.png",alt:"image"})),(0,a.kt)("h2",{id:"2\u6e32\u67d3"},"2\u6e32\u67d3"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5355\u72ec\u65b0\u5efa\u4e00\u4e2azeno\u56fe")),(0,a.kt)("h3",{id:"\u8f93\u5165obj"},"\u8f93\u5165Obj"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48758868/197708175-508320c7-77a9-4f6c-a2c9-e595df29d1dd.png",alt:"image"})),(0,a.kt)("h3",{id:"bindmaterial-\u7ed1\u5b9a\u6750\u8d28"},"BindMaterial \u7ed1\u5b9a\u6750\u8d28"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48758868/197708238-af1cdf18-9b47-4a30-87c8-7a1917c54484.png",alt:"image"}),"\n\u8fd9\u4e2a\u8282\u70b9\u65e0\u9700\u8f93\u51fa\u4efb\u4f55\u4e1c\u897f\uff0c\u5b83\u662f\u6839\u636emtlid\u6765\u8bc6\u522b\u6750\u8d28\u7684\u3002\u6ce8\u610f\u8981\u663e\u793a\u5b83"),(0,a.kt)("h3",{id:"shaderfinalize-\u7528bsdf\u5236\u4f5c\u6750\u8d28"},"ShaderFinalize \u7528BSDF\u5236\u4f5c\u6750\u8d28"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48758868/197708502-042636a6-e362-40e7-8715-33ed47ce8a38.png",alt:"image"})),(0,a.kt)("p",null,"\u8fd9\u4e2a\u8282\u70b9\u53c2\u6570\u6bd4\u8f83\u957f\u3002\u53ea\u9700\u8981\u8bb0\u4f4f\u66f4\u6539metallic\u4e3a1\uff0copacity 0.9\u5373\u53ef\u3002\n\u5e76\u4e14\u5b83\u662f\u6839\u636emtlid\u6765\u6807\u8bc6\u6750\u8d28\u7684\u3002"),(0,a.kt)("h3",{id:"\u7ed3\u679c"},"\u7ed3\u679c"),(0,a.kt)("p",null,"\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684\u663e\u793a-\u5149\u7ebf\u8ffd\u8e2a\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48758868/197708772-199284a7-d509-4dcc-8aa6-8738285e2092.png",alt:"image"})),(0,a.kt)("p",null,"\u8fd0\u884c\u5373\u53ef\u5f97\u5230\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48758868/197708975-abb80ce8-b371-4750-b73a-f114d7915deb.png",alt:"image"})))}s.isMDXComponent=!0}}]);