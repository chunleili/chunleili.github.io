"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1176],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=l(r),s=o,d=u["".concat(i,".").concat(s)]||u[s]||m[s]||a;return r?n.createElement(d,p(p({ref:t},f),{},{components:r})):n.createElement(d,p({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,p[1]=c;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4232:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},p="\u4f7f\u7528ffmpeg\u5feb\u901f\u526a\u8f91\u89c6\u9891",c={unversionedId:"ffmpeg/cut-video",id:"ffmpeg/cut-video",title:"\u4f7f\u7528ffmpeg\u5feb\u901f\u526a\u8f91\u89c6\u9891",description:"\u526a\u5207\u89c6\u9891",source:"@site/docs/ffmpeg/cut-video.md",sourceDirName:"ffmpeg",slug:"/ffmpeg/cut-video",permalink:"/ffmpeg/cut-video",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/ffmpeg/cut-video.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"variant and visit",permalink:"/cpp/variant and visit"},next:{title:"\u4f7f\u7528GUI\u7248\u672c\u7684ffmpeg\u505a\u5feb\u901f\u526a\u8f91\u548c\u56fe\u7247\u5e8f\u5217\u5408\u6210",permalink:"/ffmpeg/ffmpeg-GUI"}},i={},l=[{value:"\u526a\u5207\u89c6\u9891",id:"\u526a\u5207\u89c6\u9891",level:2},{value:"\u5408\u5e76\u89c6\u9891",id:"\u5408\u5e76\u89c6\u9891",level:2}],f={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f7f\u7528ffmpeg\u5feb\u901f\u526a\u8f91\u89c6\u9891"},"\u4f7f\u7528ffmpeg\u5feb\u901f\u526a\u8f91\u89c6\u9891"),(0,o.kt)("h2",{id:"\u526a\u5207\u89c6\u9891"},"\u526a\u5207\u89c6\u9891"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ffmpeg -ss 00:00:00 -t 00:00:30 -i test.mp4 -vcodec copy -acodec copy output.mp4\n* -ss \u6307\u5b9a\u4ece\u4ec0\u4e48\u65f6\u95f4\u5f00\u59cb\n* -t \u6307\u5b9a\u9700\u8981\u622a\u53d6\u591a\u957f\u65f6\u95f4\n* -i \u6307\u5b9a\u8f93\u5165\u6587\u4ef6\n")),(0,o.kt)("h2",{id:"\u5408\u5e76\u89c6\u9891"},"\u5408\u5e76\u89c6\u9891"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"ffmpeg -f concat -i list.txt -c copy concat.mp4\n")),(0,o.kt)("p",null,"list.txt\u6587\u4ef6\u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"file 'PBD1.mkv'\nfile 'PBD2.mkv'\nfile 'PBD3.mkv'\n")),(0,o.kt)("p",null,"\u6765\u6e90\uff1a\n",(0,o.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/eff314074177"},"https://www.jianshu.com/p/eff314074177")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/x_wukong/p/12692122.html"},"https://www.cnblogs.com/x_wukong/p/12692122.html")))}u.isMDXComponent=!0}}]);