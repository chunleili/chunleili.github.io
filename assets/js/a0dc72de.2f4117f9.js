"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},o="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),o=c(n),g=i,u=o["".concat(d,".").concat(g)]||o[g]||m[g]||l;return n?a.createElement(u,r(r({ref:t},s),{},{components:n})):a.createElement(u,r({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=g;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[o]="string"==typeof e?e:i,r[1]=p;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const l={},r="Houdini\u6e32\u67d3\u6d41\u4f53\uff08\u8fdb\u9636\u7248\uff09--ysy",p={unversionedId:"Houdini/render-fluid-advanced-ysy",id:"Houdini/render-fluid-advanced-ysy",title:"Houdini\u6e32\u67d3\u6d41\u4f53\uff08\u8fdb\u9636\u7248\uff09--ysy",description:"\u5de5\u7a0b\u6587\u4ef6\uff1a",source:"@site/docs/Houdini/render-fluid-advanced-ysy.md",sourceDirName:"Houdini",slug:"/Houdini/render-fluid-advanced-ysy",permalink:"/Houdini/render-fluid-advanced-ysy",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/Houdini/render-fluid-advanced-ysy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Houdini Principled shader\u51e0\u4e2a\u6700\u91cd\u8981\u7684\u53c2\u6570\u8bb2\u89e3",permalink:"/Houdini/principled-shader"},next:{title:"\u4f7f\u7528Houdini\u7684Karma\u6e32\u67d3\u5668\u6e32\u67d3\u6d41\u4f53",permalink:"/Houdini/render-fluid-karma"}},d={},c=[{value:"\u6e32\u67d3\u6d41\u7a0b",id:"\u6e32\u67d3\u6d41\u7a0b",level:2},{value:"1 \u6587\u4ef6\u5bfc\u5165",id:"1-\u6587\u4ef6\u5bfc\u5165",level:3},{value:"2 split",id:"2-split",level:3},{value:"3 \u8868\u9762\u91cd\u5efa\u524d\u653e\u592710\u500d",id:"3-\u8868\u9762\u91cd\u5efa\u524d\u653e\u592710\u500d",level:3},{value:"4 particle fluid surface\u8868\u9762\u5efa\u6a21",id:"4-particle-fluid-surface\u8868\u9762\u5efa\u6a21",level:3},{value:"5 attribute wrangle\u589e\u52a0\u901f\u5ea6\u5927\u5c0f",id:"5-attribute-wrangle\u589e\u52a0\u901f\u5ea6\u5927\u5c0f",level:3},{value:"6 Stage",id:"6-stage",level:2},{value:"1 Geometry Sequence\u5bfc\u5165\u5e8f\u5217",id:"1-geometry-sequence\u5bfc\u5165\u5e8f\u5217",level:3},{value:"2 SOP Import\u5bfc\u5165\u9759\u6b62\u7269\u4f53",id:"2-sop-import\u5bfc\u5165\u9759\u6b62\u7269\u4f53",level:3},{value:"3 matrial library \u6750\u8d28",id:"3-matrial-library-\u6750\u8d28",level:3},{value:"water",id:"water",level:4},{value:"4 camera",id:"4-camera",level:3},{value:"5 backdrop(\u80cc\u677f)\uff1a SOP Create",id:"5-backdrop\u80cc\u677f-sop-create",level:3},{value:"6 assign material",id:"6-assign-material",level:3},{value:"7 \u706f\u5149",id:"7-\u706f\u5149",level:3},{value:"8 render geometry setting: water",id:"8-render-geometry-setting-water",level:3},{value:"9  render geometry setting: solid",id:"9--render-geometry-setting-solid",level:3},{value:"10 redshift\u6e32\u67d3",id:"10-redshift\u6e32\u67d3",level:3},{value:"\u8981\u5b89\u88c5\u7684\u63d2\u4ef6",id:"\u8981\u5b89\u88c5\u7684\u63d2\u4ef6",level:2},{value:"OICO \u989c\u8272\u7ba1\u7406\u8bbe\u7f6e",id:"oico-\u989c\u8272\u7ba1\u7406\u8bbe\u7f6e",level:2},{value:"\u5c06Exr\u591a\u4e2a\u56fe\u7247\u5408\u6210\u89c6\u9891",id:"\u5c06exr\u591a\u4e2a\u56fe\u7247\u5408\u6210\u89c6\u9891",level:2}],s={toc:c};function o(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"houdini\u6e32\u67d3\u6d41\u4f53\u8fdb\u9636\u7248--ysy"},"Houdini\u6e32\u67d3\u6d41\u4f53\uff08\u8fdb\u9636\u7248\uff09--ysy"),(0,i.kt)("p",null,"\u5de5\u7a0b\u6587\u4ef6\uff1a"),(0,i.kt)("p",null,"\u94fe\u63a5\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://pan.baidu.com/s/1eneV39-jC2N197P4etzDsA"},"https://pan.baidu.com/s/1eneV39-jC2N197P4etzDsA"),"\n\u63d0\u53d6\u7801\uff1axzn7 "),(0,i.kt)("p",null,"\u6216\u8005"),(0,i.kt)("p",null,"\u94fe\u63a5: ",(0,i.kt)("a",{parentName:"p",href:"https://pan.baidu.com/s/1d-YoI8htr7QtkMm4qbIBtw?pwd=mt5w"},"https://pan.baidu.com/s/1d-YoI8htr7QtkMm4qbIBtw?pwd=mt5w"),"\n\u63d0\u53d6\u7801: mt5w "),(0,i.kt)("p",null,"\u6700\u7ec8\u6548\u679c\n",(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/d1de95eb21b447a78f4d9aec6a86def1.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,"2022-11-10\nTo be finished"),(0,i.kt)("p",null,"Learn from ysy"),(0,i.kt)("p",null,"The corresponding ",(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_43940314/article/details/127785069?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22127785069%22%2C%22source%22%3A%22weixin_43940314%22%7D"},"csdn blog")," "),(0,i.kt)("h2",{id:"\u6e32\u67d3\u6d41\u7a0b"},"\u6e32\u67d3\u6d41\u7a0b"),(0,i.kt)("h3",{id:"1-\u6587\u4ef6\u5bfc\u5165"},"1 \u6587\u4ef6\u5bfc\u5165"),(0,i.kt)("p",null,"\u5229\u7528file\u5bfc\u5165\u539f\u59cb\u6587\u4ef6\uff0c\u5229\u7528rop geometry\u4fdd\u5b58\u6210bgeo.sc\u52a0\u5feb\u8bfb\u53d6\u901f\u5ea6"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/87f92a5eadca4263957b5d91d72c2806.png",alt:"\u8bf7\u6dfb\u52a0\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h3",{id:"2-split"},"2 split"),(0,i.kt)("p",null,"\u53ea\u5206\u51fa\u6d41\u4f53\u90e8\u5206"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/30afe2eb7149468983c8408e7470f824.png",alt:"\u8bf7\u6dfb\u52a0\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h3",{id:"3-\u8868\u9762\u91cd\u5efa\u524d\u653e\u592710\u500d"},"3 \u8868\u9762\u91cd\u5efa\u524d\u653e\u592710\u500d"),(0,i.kt)("h3",{id:"4-particle-fluid-surface\u8868\u9762\u5efa\u6a21"},"4 particle fluid surface\u8868\u9762\u5efa\u6a21"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/2af73f9887b04d3cb3b3edfc2d00d3a3.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,"\u53c2\u6570"),(0,i.kt)("p",null,"\u8c03\u8282particle seperation"),(0,i.kt)("p",null,"voxel scale"),(0,i.kt)("p",null,"influence scale"),(0,i.kt)("p",null,"droplet scale"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/4a058bcfbe2b4f139b326faced98516a.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,"\u5728filter\u9762\u677f"),(0,i.kt)("p",null,"dilate"),(0,i.kt)("p",null,"smooth"),(0,i.kt)("p",null,"erode"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/fde7bbf940fe4d17a78196ffc16592f6.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h3",{id:"5-attribute-wrangle\u589e\u52a0\u901f\u5ea6\u5927\u5c0f"},"5 attribute wrangle\u589e\u52a0\u901f\u5ea6\u5927\u5c0f"),(0,i.kt)("p",null,"\u589e\u52a0\u5c5e\u6027speed\n",(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/b27787b3924f43e2847d5c27d5a798ee.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h2",{id:"6-stage"},"6 Stage"),(0,i.kt)("p",null,"\u5207\u6362\u5230stage\u7a97\u53e3"),(0,i.kt)("h3",{id:"1-geometry-sequence\u5bfc\u5165\u5e8f\u5217"},"1 Geometry Sequence\u5bfc\u5165\u5e8f\u5217"),(0,i.kt)("h3",{id:"2-sop-import\u5bfc\u5165\u9759\u6b62\u7269\u4f53"},"2 SOP Import\u5bfc\u5165\u9759\u6b62\u7269\u4f53"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/cdc9d1ac38be41f59915371d003caa50.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h3",{id:"3-matrial-library-\u6750\u8d28"},"3 matrial library \u6750\u8d28"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/57f4c770f5db4489bfd8c166378991d4.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h4",{id:"water"},"water"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/f2515f776a36479b83d47e28c5c742ca.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h3",{id:"4-camera"},"4 camera"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/0c35210a18f1455287e56b7e4152edeb.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h3",{id:"5-backdrop\u80cc\u677f-sop-create"},"5 backdrop(\u80cc\u677f)\uff1a SOP Create"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/6c27e451a52d47beb59be05499f4a08b.png",alt:"\u8bf7\u6dfb\u52a0\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/3e722928e4e746e38bc6f6562325b884.png",alt:"\u8bf7\u6dfb\u52a0\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h3",{id:"6-assign-material"},"6 assign material"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/46bd5e42c8ab4886833a690b0f23bd80.png",alt:"\u8bf7\u6dfb\u52a0\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/b253b6bdea0e4de1950aec12ec006471.png",alt:"\u8bf7\u6dfb\u52a0\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h3",{id:"7-\u706f\u5149"},"7 \u706f\u5149"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/e40c420fa7e54fce8afd84825d69e3ce.png",alt:"\u8bf7\u6dfb\u52a0\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h3",{id:"8-render-geometry-setting-water"},"8 render geometry setting: water"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/6a907db3e1254c6d9b07b0a03aa3f90b.png",alt:"\u8bf7\u6dfb\u52a0\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/8877247738af405ea2f8b11c9e4fa527.png",alt:"\u8bf7\u6dfb\u52a0\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h3",{id:"9--render-geometry-setting-solid"},"9  render geometry setting: solid"),(0,i.kt)("p",null,"\u589e\u52a0motion blur"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/7e0eb4dec8464a8da6efb0868ce1dfab.png",alt:"\u8bf7\u6dfb\u52a0\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h3",{id:"10-redshift\u6e32\u67d3"},"10 redshift\u6e32\u67d3"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/ec85c2267f1b492d8aecfe83fdd489ea.png",alt:"\u8bf7\u6dfb\u52a0\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,"\u6ce8\u610fDenoising\u4e2d\u5f00\u542fOptiX\u662f\u7528GPU\u964d\u566a\u3002\u8be5\u529f\u80fd\u6709\u53ef\u80fd\u5bfc\u81f4\u7a0b\u5e8f\u5d29\u6e83\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/048e32f667034a7c9c0541a3005b3876.png",alt:"\u8bf7\u6dfb\u52a0\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h2",{id:"\u8981\u5b89\u88c5\u7684\u63d2\u4ef6"},"\u8981\u5b89\u88c5\u7684\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5b89\u88c5\u914d\u7f6eHoudini 19.5.403\n\u4ee5\u4e0b\u9700\u8981\u4e0b\u8f7d\u7684\u6587\u4ef6\u53ef\u4ee5\u5728\u767e\u5ea6\u7f51\u76d8\u4e0b\u8f7d\uff08Houdini\uff0credshift\uff0cSolaris\uff0cOCIO\uff09\uff1a\n\u94fe\u63a5\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://pan.baidu.com/s/1_J8zMDLJgPrufD7nJXDwiA"},"https://pan.baidu.com/s/1_J8zMDLJgPrufD7nJXDwiA"),"\n\u63d0\u53d6\u7801\uff1a1234"),(0,i.kt)("p",null,"1.\u4e0b\u8f7dHoudini19.5.403\n",(0,i.kt)("a",{parentName:"p",href:"https://www.sidefx.com/download/"},"https://www.sidefx.com/download/"),"\n2.\u67e5\u627e\u5b89\u88c5\u7684houdini\u5bf9\u5e94\u7684rs\u7248\u672c\u53f7\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.redshift3d.com/display/RSDOCS/Houdini+Plugin+Configuration"},"https://docs.redshift3d.com/display/RSDOCS/Houdini+Plugin+Configuration")),(0,i.kt)("p",null," ",(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/a570e48f4ed8462b93e25a8ea3c1bf57.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,"\u5728Maxon \u8f6f\u4ef6\u4e0a\u4e0b\u8f7d\u5bf9\u5e94\u7248\u672c\u7684redshift\u6216\u8005\u53bb\u5b98\u7f51\u4e0b\u8f7d\u3002\n\u5728maxon\u5b98\u7f51\u5b89\u88c5maxon\uff0c\u5176\u4e2dredshift\u9700\u8981\u7248\u6743\uff0c\u7533\u8bf7\u5b66\u751f\u8ba4\u8bc1\u8d2d\u4e70\u3002\n3.\u7531\u4e8e\u5b89\u88c5\u7684Houdini19.5.403\u5728\u5b98\u7f51\u6ca1\u6709\u5bf9\u5e94\u6700\u65b0\u7248\u7684redshift\uff0c\u524d\u5f80\u8bba\u575b\u4e0b\u8f7d\u6700\u65b0\u7684redshift\u548cSolaris\uff1a"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://redshift.maxon.net/topic/31230/houdini-solaris-plugins-custom-builds"},"https://redshift.maxon.net/topic/31230/houdini-solaris-plugins-custom-builds")),(0,i.kt)("p",null,"\u89e3\u538b\u4ee5\u540e\u6539\u6210\u5bf9\u5e94\u7248\u672c\uff0cOUT\u653e\u5230houdini\u6587\u4ef6\u5939\u4e0b\u9762\uff0cstage\u90a3\u4e2a\u538b\u7f29\u5305\u5219\u662f\u653e\u5230Solaris\u4e0b\u9762\uff0c\u7136\u540e\u6587\u4ef6\u540d\u4e5f\u662f\u4e00\u6837\u7684\u7248\u672c\u53f7\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/dd058e692fab40adbdd4c95cf4282477.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,"4,\u627e\u5230houdini\u7684env\u6587\u4ef6\uff0c\u7528\u8bb0\u4e8b\u672c\u6253\u5f00\n\u4e00\u822c\u5728C:\\Users\\Administrator\\Documents\\houdinixxx\uff08linux\u5728~/houdinixxx\uff09"),(0,i.kt)("p",null," ",(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/07488bde8c58463bb30fba3e0ac43127.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/47752a8a8f3648d08f214d4dd56d366e.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,'\u6dfb\u52a0\u5982\u4e0b\uff1a\nHOUDINI_PATH = "/usr/redshift/redshift4houdini/${HOUDINI_VERSION};&"\nPXR_PLUGINPATH_NAME = "/usr/redshift/redshift4solaris/${HOUDINI_VERSION}"\nOCIO="/home/lj/Downloads/houdini19.0.383/RedshiftOCIOConfigs-main/redshift-custom-config/config.ocio"\nHOUDINI_NVIDIA_OPTIX_DSO_PATH="/home/lj/Pictures/optix"'),(0,i.kt)("p",null,"\u5176\u4e2dOCIO\u5728\u5b98\u7f51\u6216\u7f51\u76d8\u4e0b\u8f7d\n5.\u6253\u5f00houdini\uff0c\u83dc\u5355edit-references-rendering \u52fe\u9009redshift\u4fdd\u5b58\u5373\u53ef"),(0,i.kt)("p",null,"   ",(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/07842f022da34fba8af4cbc0845f308e.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/4354448ea4b642b38d3db5ced4b5b80e.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,"6.OCIO\n",(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/eeaedaf840544f10bb9487bee9d09b5c.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/3bc515e342ce4edb98424f831d7f03be.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,"Ubuntu\u7cfb\u7edf\u5378\u8f7dHoudini\n\u5728opt/hfs19.0.383 \u76ee\u5f55\u4e0b\nsudo su\nsource houdini.uninstall"),(0,i.kt)("h2",{id:"oico-\u989c\u8272\u7ba1\u7406\u8bbe\u7f6e"},"OICO \u989c\u8272\u7ba1\u7406\u8bbe\u7f6e"),(0,i.kt)("p",null," ",(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/dad562b4edae4820bf99d6e56755df2d.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,"\u5c06\u6e32\u67d3\u751f\u6210\u7684exr\u56fe\u7247\u5e8f\u5217\u8f93\u5165\uff0c"),(0,i.kt)("p",null," ",(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/77cb2253cc66455d838e8452517fc402.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null," ",(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/b0fc18330b7b46a9b194a9aef6e8b658.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/dd1dd7ae790d4bafb1bd297f746bbca8.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,"\u70b9\u51fbrender\u8f93\u51fa\u56fe\u7247\u989c\u8272\u7ba1\u7406\u4fee\u6b63\u540e\u7684exr\u6587\u4ef6\u5e8f\u5217"),(0,i.kt)("p",null," ",(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/842afa7067d742af830fd9c4c1de255a.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h2",{id:"\u5c06exr\u591a\u4e2a\u56fe\u7247\u5408\u6210\u89c6\u9891"},"\u5c06Exr\u591a\u4e2a\u56fe\u7247\u5408\u6210\u89c6\u9891"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5b89\u88c5Adobe_After_Effects2022\u3002")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u65b0\u5efa\u9879\u76ee\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/8056e5ee57294dffa2edbb5c334dc58b.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5bfc\u5165\u6240\u6709Exr\u6587\u4ef6\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/1c61306058214db6b509ba4f00cbe8f8.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9009\u4e2d\u6240\u6709\u5bfc\u5165\u7684\u6587\u4ef6\uff0c\u62d6\u5165\u4e0b\u65b9\u7ea2\u6846\u5185\uff0c\u70b9\u51fb\u786e\u5b9a\u3002"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/c664434351dd4d039469a91a8e6bd5d9.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb\u6e32\u67d3\u961f\u5217\uff0c\u7136\u540e\u6309Ctrl+M\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/1c751d265d4e499486d46c37dffaedc7.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u8f93\u51fa\u53c2\u6570\u540e\u70b9\u51fb\u6e32\u67d3\u5373\u53ef\u5f97\u5230\u89c6\u9891\u6587\u4ef6\u3002"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/4a19ddf5be93403e91828c6fc6371602.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})))}o.isMDXComponent=!0}}]);