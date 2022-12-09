"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6823],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),a=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=a(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,l=f(e,["components","mdxType","originalType","parentName"]),u=a(r),m=o,b=u["".concat(p,".").concat(m)]||u[m]||s[m]||c;return r?n.createElement(b,i(i({ref:t},l),{},{components:r})):n.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=m;var f={};for(var p in t)hasOwnProperty.call(t,p)&&(f[p]=t[p]);f.originalType=e,f[u]="string"==typeof e?e:o,i[1]=f;for(var a=2;a<c;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>f,toc:()=>a});var n=r(7462),o=(r(7294),r(3905));const c={},i="\u4f7f\u7528GUI\u7248\u672c\u7684ffmpeg\u505a\u5feb\u901f\u526a\u8f91\u548c\u56fe\u7247\u5e8f\u5217\u5408\u6210",f={unversionedId:"ffmpeg/ffmpeg-GUI",id:"ffmpeg/ffmpeg-GUI",title:"\u4f7f\u7528GUI\u7248\u672c\u7684ffmpeg\u505a\u5feb\u901f\u526a\u8f91\u548c\u56fe\u7247\u5e8f\u5217\u5408\u6210",description:"\u5f00\u6e90\u8f6f\u4ef6\u7684\u540d\u5b57\u4e3ashutter-encoder",source:"@site/docs/ffmpeg/ffmpeg-GUI.md",sourceDirName:"ffmpeg",slug:"/ffmpeg/ffmpeg-GUI",permalink:"/ffmpeg/ffmpeg-GUI",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/ffmpeg/ffmpeg-GUI.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528ffmpeg\u5feb\u901f\u526a\u8f91\u89c6\u9891",permalink:"/ffmpeg/cut-video"},next:{title:"\u4f7f\u7528ffmpeg \u5c06 \u56fe\u7247\u5e8f\u5217\u8f6c\u89c6\u9891\u6216\u8005GIF",permalink:"/ffmpeg/pic2video"}},p={},a=[],l={toc:a};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f7f\u7528gui\u7248\u672c\u7684ffmpeg\u505a\u5feb\u901f\u526a\u8f91\u548c\u56fe\u7247\u5e8f\u5217\u5408\u6210"},"\u4f7f\u7528GUI\u7248\u672c\u7684ffmpeg\u505a\u5feb\u901f\u526a\u8f91\u548c\u56fe\u7247\u5e8f\u5217\u5408\u6210"),(0,o.kt)("p",null,"\u5f00\u6e90\u8f6f\u4ef6\u7684\u540d\u5b57\u4e3ashutter-encoder\nLinux\u3001Mac\u548cWindows\u90fd\u652f\u6301"),(0,o.kt)("p",null,"\u7528\u6cd5\u5982\u4e0b"),(0,o.kt)("p",null,"\u3010\u4f7f\u7528\u5f00\u6e90\u8f6f\u4ef6shutter encoder\u5feb\u901f\u526a\u8f91\u89c6\u9891\u3011 ",(0,o.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1Z3411Z7vb/?share_source=copy_web&vd_source=ad002c814962fc699cf9d167be8f2bb4"},"https://www.bilibili.com/video/BV1Z3411Z7vb/?share_source=copy_web&vd_source=ad002c814962fc699cf9d167be8f2bb4")),(0,o.kt)("p",null,"\u3010\u4f7f\u7528\u5f00\u6e90\u8f6f\u4ef6shutter encoder\u5feb\u901f\u5c06\u56fe\u7247\u5e8f\u5217\u8f6c\u6362\u4e3a\u89c6\u9891\u3011 ",(0,o.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1mG4y147ze/?share_source=copy_web&vd_source=ad002c814962fc699cf9d167be8f2bb4"},"https://www.bilibili.com/video/BV1mG4y147ze/?share_source=copy_web&vd_source=ad002c814962fc699cf9d167be8f2bb4")))}u.isMDXComponent=!0}}]);