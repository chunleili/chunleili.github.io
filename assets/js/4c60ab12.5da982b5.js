"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7655],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),a=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=a(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=a(t),m=i,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:i,c[1]=l;for(var a=2;a<o;a++)c[a]=t[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},966:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=t(7462),i=(t(7294),t(3905));const o={},c="\u7528Eigen\u7684Vector\u66ff\u4ee3std::vector\u5b9e\u73b0\u771f\u6b63\u6570\u5b66\u610f\u4e49\u4e0a\u7684\u5411\u91cf",l={unversionedId:"Eigen/Eigen_vector",id:"Eigen/Eigen_vector",title:"\u7528Eigen\u7684Vector\u66ff\u4ee3std::vector\u5b9e\u73b0\u771f\u6b63\u6570\u5b66\u610f\u4e49\u4e0a\u7684\u5411\u91cf",description:"\u4e09\u7ef4\u70b9\u5750\u6807",source:"@site/docs/Eigen/Eigen_vector.md",sourceDirName:"Eigen",slug:"/Eigen/Eigen_vector",permalink:"/Eigen/Eigen_vector",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/Eigen/Eigen_vector.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mac/Linux\u914d\u7f6eEigen",permalink:"/Eigen/Eigen-install"},next:{title:"Houdini isn't scary \u7cfb\u5217\u7b14\u8bb0",permalink:"/Houdini/Houdini-learn/"}},p={},a=[{value:"\u4e09\u7ef4\u70b9\u5750\u6807",id:"\u4e09\u7ef4\u70b9\u5750\u6807",level:2},{value:"\u5355\u4e2a\u70b9 vec3f",id:"\u5355\u4e2a\u70b9-vec3f",level:3},{value:"\u70b9\u96c6Points",id:"\u70b9\u96c6points",level:3},{value:"\u4e24\u70b9\u8ddd\u79bb",id:"\u4e24\u70b9\u8ddd\u79bb",level:3}],u={toc:a};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7528eigen\u7684vector\u66ff\u4ee3stdvector\u5b9e\u73b0\u771f\u6b63\u6570\u5b66\u610f\u4e49\u4e0a\u7684\u5411\u91cf"},"\u7528Eigen\u7684Vector\u66ff\u4ee3std::vector\u5b9e\u73b0\u771f\u6b63\u6570\u5b66\u610f\u4e49\u4e0a\u7684\u5411\u91cf"),(0,i.kt)("h2",{id:"\u4e09\u7ef4\u70b9\u5750\u6807"},"\u4e09\u7ef4\u70b9\u5750\u6807"),(0,i.kt)("h3",{id:"\u5355\u4e2a\u70b9-vec3f"},"\u5355\u4e2a\u70b9 vec3f"),(0,i.kt)("p",null,"\u5355\u4e2a\u70b9\u76f4\u63a5\u4f7f\u7528Eigen::Vector3f\u5373\u53ef\uff0c\u8bb0\u4f4f\u8981",(0,i.kt)("inlineCode",{parentName:"p"},"include Eigen/Dense")),(0,i.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u4f7f\u7528\uff0c\u6211\u4eec\u5728Common\u4e2d\u7ed9\u4ed6\u8d77\u4e2a\u522b\u540dvec3f"),(0,i.kt)("p",null,"common.h"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <vector>\n#include <iostream>\n#include <Eigen/Dense>\n \nusing vec3f = Eigen::Vector3f;\n")),(0,i.kt)("p",null,"main.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#include "Common.h"\n \nint main()\n{\n  std::vector<vec3f> pos_in{{1.1,2,3},{3,4,5}};\n  std::cout<<pos_in[1]<<std::endl;\n}\n')),(0,i.kt)("p",null,"output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"3\n4\n5\n")),(0,i.kt)("p",null,"\u4ee5\u540e\u51e1\u662f\u4f7f\u7528\u4e09\u7ef4\u70b9\u7684\u5730\u65b9\uff0c\u90fd\u53ea\u9700\u8981",(0,i.kt)("inlineCode",{parentName:"p"},'#include "Common.h"'),"\uff0c\u7136\u540e\u5229\u7528vec3f\u5373\u53ef\u3002\u53ef\u4ee5\u7528std::cout\u6765\u6253\u5370\uff0c\u56e0\u4e3aEigen\u5e93\u91cc\u9762\u5b9e\u73b0\u4e86std\u7a7a\u95f4\u4e2dcout\u6a21\u7248\u7684\u7279\u5316\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u76ee\u524d\u4e0d\u53ef\u4ee5\u8fdb\u884c\u52a0\u51cf\u7b49\u8fd0\u7b97\uff0c\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u76ee\u524d\u4f7f\u7528\u7684std::vector\u4e0d\u652f\u6301\u8fd9\u4e9b\u8fd0\u7b97\u3002"),(0,i.kt)("p",null,"\u663e\u7136\u6211\u4eec\u66f4\u5e0c\u671b\u7ba1\u7406\u4e00\u4e2a\u70b9\u96c6\u5408\uff0c\u8fd9\u6837\u624d\u80fd\u8fdb\u884c\u52a0\u51cf\u3002"),(0,i.kt)("h3",{id:"\u70b9\u96c6points"},"\u70b9\u96c6Points"),(0,i.kt)("p",null,"\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u7cfb\u5217\u7684\u70b9\u96c6. \u4e3b\u8981\u662f\u5957\u7528\n",(0,i.kt)("inlineCode",{parentName:"p"},"Eigen::Matrix<vec3f, Eigen::Dynamic, 1>")),(0,i.kt)("p",null,"\u540c\u6837\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u5728Common\u4e2d\u8d77\u4e00\u4e2a\u522b\u540d\u4e3aPoints"),(0,i.kt)("p",null,"Common.h"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <vector>\n#include <iostream>\n#include <Eigen/Dense>\n \nusing vec3f = Eigen::RowVector3f;\nusing std::vector;\nusing Points = Eigen::Matrix<vec3f, Eigen::Dynamic, 1>\n")),(0,i.kt)("p",null,"main.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#include "Common.h"\nusing namespace Eigen;\nint main()\n{\n    int numParticles = 10;\n    Points  pos_in(numParticles);\n    \n    pos_in[0] = vec3f {1,2,3};\n    pos_in[1] = vec3f {1.1,4,5};\n\n    Points pos_in2(numParticles);\n    pos_in2[0] = vec3f {2,2,3};\n    pos_in2[1] = vec3f {2.1,4,5};\n\n    Points res(numParticles);\n    res = pos_in + pos_in2;\n    for(auto&& x:res)\n        std::cout<<x<<std::endl;\n}\n')),(0,i.kt)("p",null,"\u6253\u5370\u7684\u65f6\u5019\u4f1a\u53d1\u73b0\u6240\u6709\u7684\u6570\u503c\u90fd\u662f\u7ad6\u7740\u6253\u5370\u7684\uff0c\u8fd9\u6837\u5f88\u96be\u770b\u6e05\u54ea\u4e09\u4e2a\u662f\u4e00\u4e2a\u70b9\u3002\u56e0\u6b64\u6211\u4eec\u4e0d\u59a8\u5728Common.h\u4e2d\u5c06vec3f\u6539\u4e3a\u884c\u5411\u91cf."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using vec3f = Eigen::RowVector3f;")),(0,i.kt)("p",null,"output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"3 4 6\n3.2   8  10\n0 0 0\n0 0 0\n0 0 0\n0 0 0\n0 0 0\n0 0 0\n0 0 0\n0 0 0\n")),(0,i.kt)("h3",{id:"\u4e24\u70b9\u8ddd\u79bb"},"\u4e24\u70b9\u8ddd\u79bb"),(0,i.kt)("p",null,"\u4f7f\u7528.norm()\u65b9\u6cd5\u53ef\u4ee5\u8ba1\u7b97\u4e24\u4e2a\u70b9\u7684\u8ddd\u79bb\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    vec3f distVec = pos_in[1] - pos_in2[1];\n    float dist = distVec.norm();\n    std::cout<<distVec<<std::endl;\n    std::cout<<dist<<std::endl;\n")),(0,i.kt)("p",null,"\u5176\u4e2d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    pos_in[0] = vec3f {1,2,3};\n    pos_in[1] = vec3f {1.1,4,5};\n\n    pos_in2[0] = vec3f {2,2,3};\n    pos_in2[1] = vec3f {2.1,5,5};\n")),(0,i.kt)("p",null,"output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-1 -1  0\n1.41421\n")))}s.isMDXComponent=!0}}]);