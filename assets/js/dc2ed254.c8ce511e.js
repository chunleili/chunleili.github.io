"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(r),y=o,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||a;return r?n.createElement(m,u(u({ref:t},c),{},{components:r})):n.createElement(m,u({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,u[1]=l;for(var i=2;i<a;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},342:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={slug:"deploy",title:"\u5982\u4f55\u90e8\u7f72\u5230github pages",authors:["chunlei"],tags:["docusaurus","front-end"]},u=void 0,l={unversionedId:"docusaurus/deploy/test-deploy",id:"docusaurus/deploy/test-deploy",title:"\u5982\u4f55\u90e8\u7f72\u5230github pages",description:"\u6211\u4eec\u6d4b\u8bd5\u4e00\u4e0b\u5982\u4f55\u90e8\u7f72\u5230github-pages",source:"@site/docs/docusaurus/deploy/test-deploy.md",sourceDirName:"docusaurus/deploy",slug:"/docusaurus/deploy/deploy",permalink:"/docusaurus/deploy/deploy",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/docusaurus/deploy/test-deploy.md",tags:[{label:"docusaurus",permalink:"/tags/docusaurus"},{label:"front-end",permalink:"/tags/front-end"}],version:"current",frontMatter:{slug:"deploy",title:"\u5982\u4f55\u90e8\u7f72\u5230github pages",authors:["chunlei"],tags:["docusaurus","front-end"]},sidebar:"tutorialSidebar",previous:{title:"\u600e\u6837\u5229\u7528github Action \u81ea\u52a8\u90e8\u7f72",permalink:"/docusaurus/deploy/auto-deploy"},next:{title:"\u600e\u6837\u5229\u7528docusaurus\u521b\u5efa\u535a\u5ba2/\u6587\u6863\uff1f",permalink:"/docusaurus/first-docusaurus/how-to-docusaurus"}},s={},i=[],c={toc:i};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6211\u4eec\u6d4b\u8bd5\u4e00\u4e0b\u5982\u4f55\u90e8\u7f72\u5230github-pages"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9996\u5148\u5efa\u7acb\u65b0\u7684\u5206\u652fgh-pages\u3002\u8fd9\u4e2a\u4e0d\u8981\u548cmain\u5206\u652f\u641e\u6df7\uff0c\u8fd9\u4e2a\u5206\u652f\u4e0d\u7528\u53bb\u7ba1\uff0cdeploy\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u66f4\u65b0\u4ee3\u7801\u3002")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u7136\u540e\u628adocusaurus.config.js\u4e2d\u7684\u90e8\u5206\u4ee3\u7801\u66f4\u6539\u4e3a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  organizationName: 'chunleili', // Usually your GitHub org/user name.\n  projectName: 'chunleili.github.io', // Usually your repo name.\n  deploymentBranch: 'gh-pages',\n  trailingSlash: false,\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u6700\u540e\u8fd0\u884c\u90e8\u7f72")),(0,o.kt)("p",null,"\u5047\u5982\u662fwindows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cmd /C 'set \"GIT_USER=chunleili\" && yarn deploy'\n")),(0,o.kt)("p",null,"\u5047\u5982\u662flinux"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GIT_USER=chunleili yarn deploy\n")))}p.isMDXComponent=!0}}]);