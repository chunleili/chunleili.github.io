"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1941],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},i="3.1\u7a00\u758f\u77e9\u9635\u64cd\u4f5c",o={unversionedId:"Eigen/SparseMatrix-Storage",id:"Eigen/SparseMatrix-Storage",title:"3.1\u7a00\u758f\u77e9\u9635\u64cd\u4f5c",description:"\u53c2\u8003//eigen.tuxfamily.org/dox-devel/groupTutorialSparse.html",source:"@site/docs/Eigen/SparseMatrix-Storage.md",sourceDirName:"Eigen",slug:"/Eigen/SparseMatrix-Storage",permalink:"/Eigen/SparseMatrix-Storage",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/Eigen/SparseMatrix-Storage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7528Eigen\u7684Vector\u66ff\u4ee3std::vector\u5b9e\u73b0\u771f\u6b63\u6570\u5b66\u610f\u4e49\u4e0a\u7684\u5411\u91cf",permalink:"/Eigen/Eigen_vector"},next:{title:"Houdini isn't scary \u7cfb\u5217\u7b14\u8bb0",permalink:"/Houdini/Houdini-learn/"}},p={},u=[{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"31\u7a00\u758f\u77e9\u9635\u64cd\u4f5c"},"3.1\u7a00\u758f\u77e9\u9635\u64cd\u4f5c"),(0,a.kt)("p",null,"\u53c2\u8003: ",(0,a.kt)("a",{parentName:"p",href:"https://eigen.tuxfamily.org/dox-devel/group__TutorialSparse.html"},"https://eigen.tuxfamily.org/dox-devel/group__TutorialSparse.html")),(0,a.kt)("p",null,"\u7a00\u758f\u77e9\u9635\u5c31\u662f\u7edd\u5927\u90e8\u5206\u5143\u7d20\u90fd\u4e3a0\u7684\u77e9\u9635\u3002"),(0,a.kt)("p",null,"\u7a00\u758f\u77e9\u9635\u4e0e\u7a20\u5bc6\u77e9\u9635\u4e0d\u4ec5\u6570\u636e\u7ed3\u6784\u4e0a\u4e0d\u540c\uff0c\u53ef\u7528\u7684\u7b97\u6cd5\u4e5f\u662f\u4e0d\u540c\u7684\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u9996\u5148\u770b\u6570\u636e\u7ed3\u6784"),(0,a.kt)("h2",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u8981\u5b58\u50a8\u5982\u4e0b\u77e9\u9635"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"0   3   0   0   0\n22  0   0   0   17\n7   5   0   1   0\n0   0   0   0   0\n0   0   14  0   8\n")),(0,a.kt)("p",null,"\u91c7\u7528\u538b\u7f29\u5217\u5b58\u50a8\u65b9\u6848\uff08Compressed Column Storage\uff09\u5b58\u50a8\u3002\u8fd9\u70b9Youssad\u7684Iterative Methods\u4e00\u4e66\u4e2d\u6709\u66f4\u8be6\u5c3d\u7684\u63cf\u8ff0\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5b58\u50a8\u7684\u662f\u5982\u4e0b\u56db\u4e2a\u6570\u7ec4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u503c Value"),(0,a.kt)("li",{parentName:"ol"},"\u884c\u53f7 InnerIndices"),(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u5217\u8d77\u59cb\u7d22\u5f15 OuterStarts"),(0,a.kt)("li",{parentName:"ol"},"\u8be5\u5217\u975e0\u503c\u4e2a\u6570 InnerNNZs")),(0,a.kt)("p",null,"\u6ce8\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728Eigen\u4e2d\uff0c\u9ed8\u8ba4\u4e3a\u5217\u4e3b\u5e8f\uff0cinner\u4ee3\u8868\u7684\u662f\u4e00\u5217\uff0c\u6545Inner Indices\u662f\u884c\u53f7\u3002"),(0,a.kt)("li",{parentName:"ul"},"NNZ\u4ee3\u8868Number of Non-Zeros"),(0,a.kt)("li",{parentName:"ul"},"OuterStarts\u5b58\u50a8\u7684\u8d77\u59cb\u7d22\u5f15\u662f\u5bf9\u5e94Value\u548cInnerIndices\u4e2d\u7684\u7d22\u5f15\uff0c\u800c\u975e\u539f\u672c\u77e9\u9635\u7684\u7d22\u5f15\u3002")),(0,a.kt)("p",null,"\u6545\u5b9e\u9645\u5b58\u50a8\u7684\u6570\u636e\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Values:         22  7   _   3   5   14  _   _   1   _   17  8\nInnerIndices:   1   2   _   0   2   4   _   _   2   _   1   4\nOuterStarts:    0   3   5   8   10  12\nInnerNNZs:      2   2   1   1   2   \n")),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,a.kt)("p",null,"\u4e00\u5217\u4e00\u5217\u5730\u770b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u5217\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u5217\u670922\u548c7\u4e24\u4e2a\u975e\u96f6\u503c\uff0c22\u5bf9\u5e94\u884c\u53f7\u4e3a1\uff0c7\u5bf9\u5e94\u884c\u53f7\u4e3a2\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u5217\u7684\u7b2c\u4e00\u4e2a\u5143\u7d2022\uff0c\u5728Values\u548cInnerIndices\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\u662f0\uff0c\u6545OuterStarts=0."),(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u4e00\u5217\u975e\u96f6\u6570InnerNNZs\u4e3a2\uff0c\u6545\u4ece22\u52307\u662f\u7b2c\u4e00\u5217\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u5217",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"- \u7b2c\u4e8c\u5217\u67093\u548c5\u4e24\u4e2a\u975e\u96f6\u503c\uff0c3\u5bf9\u5e94\u7684\u884c\u53f7\u4e3a0\uff0c5\u5bf9\u5e94\u884c\u53f7\u4e3a2 \n- \u7b2c\u4e8c\u5217\u7684\u7b2c\u4e00\u4e2a\u5143\u7d203\uff0c\u5728Values\u548cInnerIndices\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\u662f3\uff0c\u6545OuterStarts=3.\n- \u8fd9\u4e00\u5217\u975e\u96f6\u6570InnerNNZs\u4e3a2\uff0c\u6545\u4ece3\u52305\u662f\u7b2c\u4e8c\u5217\u3002\n")),"...")),(0,a.kt)("p",null,"\u6211\u4eec\u6ce8\u610f\u5230\u6709\u4e9b\u591a\u4f59\u7684\u7a7a\u95f4\u3002\u8fd9\u662f\u4e3a\u4e86\u5c06\u6765\u63d2\u5165\u65b0\u5143\u7d20\u65f6\u5feb\u901f\u63d2\u5165\u7559\u7684\u7a7a\u4f4d\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u91c7\u7528SparseMatrix::makeCompressed()\u6765\u91ca\u653e\u591a\u4f59\u7684\u7a7a\u95f4\u3002\u8fd9\u79cd\u53eb\u505a\u538b\u7f29\u6a21\u5f0f"),(0,a.kt)("p",null,"\u91ca\u653e\u4e4b\u540e\u5b58\u50a8\u7684\u6570\u7ec4\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Values:         22  7   3   5   14  1   17  8\nInnerIndices:   1   2   0   2   4   2   1   4\nOuterStarts:    0   2   4   5   6   8\n")),(0,a.kt)("p",null,"\u6211\u4eec\u6ce8\u610f\u5230\uff0c\u7531\u4e8e\u4e0d\u518d\u6709\u591a\u4f59\u7684\u7a7a\u95f4\uff0c\u56e0\u6b64\u4e5f\u4e0d\u9700\u8981\u5b58\u50a8InnerNNZs\u4e86\u3002\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"InnerNNZs[j] == OuterStarts[j+1] - OuterStarts[j]")),(0,a.kt)("p",null,"\u53e6\u5916\uff0cEigen\u5927\u591a\u6570\u4e0e\u5916\u90e8\u5e93\u4ea4\u4e92\u7684\u5305\u88c5\u7c7b\uff0c\u8fd4\u56de\u7684\u90fd\u662f\u538b\u7f29\u6a21\u5f0f\u7684\u77e9\u9635\u3002\u4f46\u662f\u4e00\u65e6\u6211\u4eec\u63d2\u5165\u65b0\u7684\u5143\u7d20\uff0c\u5c31\u81ea\u52a8\u4f1a\u8f6c\u5316\u4e3a\u975e\u538b\u7f29\u6a21\u5f0f\u3002"))}c.isMDXComponent=!0}}]);