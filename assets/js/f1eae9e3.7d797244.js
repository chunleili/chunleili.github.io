"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3824],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>m});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=i,m=s["".concat(u,".").concat(d)]||s[d]||f[d]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(8168),i=(r(6540),r(5680));const o={},a="GGUI\u8f93\u51fa\u56fe\u7247\u5e8f\u5217\u4ee5\u751f\u6210\u89c6\u9891",c={unversionedId:"taichi/ouput-video",id:"taichi/ouput-video",title:"GGUI\u8f93\u51fa\u56fe\u7247\u5e8f\u5217\u4ee5\u751f\u6210\u89c6\u9891",description:"\u53ea\u9700\u8981\u8c03\u7528window.save_image\u8fd9\u4e2aAPI",source:"@site/docs/taichi/ouput-video.md",sourceDirName:"taichi",slug:"/taichi/ouput-video",permalink:"/taichi/ouput-video",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/taichi/ouput-video.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9762\u5411\u5bf9\u8c61data_oriented",permalink:"/taichi/data_oriented"},next:{title:"\u5728taichi\u4e2d\u4f7f\u7528shape\u4f5c\u4e3a\u5faa\u73af\u5927\u5c0f",permalink:"/taichi/shape"}},u={},p=[],l={toc:p},s="wrapper";function f(e){let{components:t,...r}=e;return(0,i.yg)(s,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"ggui\u8f93\u51fa\u56fe\u7247\u5e8f\u5217\u4ee5\u751f\u6210\u89c6\u9891"},"GGUI\u8f93\u51fa\u56fe\u7247\u5e8f\u5217\u4ee5\u751f\u6210\u89c6\u9891"),(0,i.yg)("p",null,"\u53ea\u9700\u8981\u8c03\u7528window.save_image\u8fd9\u4e2aAPI"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"        filename = f'./results/frame_{frame:05d}.png'\n        window.save_image(filename)\n        window.show()\n")))}f.isMDXComponent=!0}}]);