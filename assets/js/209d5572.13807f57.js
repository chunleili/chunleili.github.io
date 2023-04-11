"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3339],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),o=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=o(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=o(t),g=a,k=s["".concat(p,".").concat(g)]||s[g]||u[g]||i;return t?r.createElement(k,l(l({ref:n},m),{},{components:t})):r.createElement(k,l({ref:n},m))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=t(7462),a=(t(7294),t(3905));const i={},l="cmake\u642d\u914dvcpkg\u7684manifest\u6a21\u5f0f\u5b9e\u73b0\u81ea\u52a8\u5b89\u88c5\u5305",c={unversionedId:"cmake/vcpkg-manifest",id:"cmake/vcpkg-manifest",title:"cmake\u642d\u914dvcpkg\u7684manifest\u6a21\u5f0f\u5b9e\u73b0\u81ea\u52a8\u5b89\u88c5\u5305",description:"\u597d\u5904",source:"@site/docs/cmake/vcpkg-manifest.md",sourceDirName:"cmake",slug:"/cmake/vcpkg-manifest",permalink:"/cmake/vcpkg-manifest",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/cmake/vcpkg-manifest.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f7b\u5e95\u5f04\u61c2cmake\u4e2d\u7684 INTEFACE \u53ef\u89c1\u6027/\u4f20\u9012\u6027 \u95ee\u9898",permalink:"/cmake/understanding-INTERFACE"},next:{title:"vscode cmake\u63d2\u4ef6\u7684\u4e00\u4e9b\u6280\u5de7",permalink:"/cmake/vscode-cmake-tools"}},p={},o=[{value:"\u597d\u5904",id:"\u597d\u5904",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2}],m={toc:o},s="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cmake\u642d\u914dvcpkg\u7684manifest\u6a21\u5f0f\u5b9e\u73b0\u81ea\u52a8\u5b89\u88c5\u5305"},"cmake\u642d\u914dvcpkg\u7684manifest\u6a21\u5f0f\u5b9e\u73b0\u81ea\u52a8\u5b89\u88c5\u5305"),(0,a.kt)("h2",{id:"\u597d\u5904"},"\u597d\u5904"),(0,a.kt)("p",null,"\u7c7b\u4f3c\u4e8epip\u7684requirements\u3002\u4f60\u53ea\u9700\u8981\u6307\u5b9a\u8be5\u9879\u76ee\u7684\u4f9d\u8d56\u5e93\uff0c\u5c31\u4f1a\u81ea\u52a8\u8fd0\u884cvcpkg\u4e3a\u4f60\u5b89\u88c5\u6240\u6709\u7684\u4f9d\u8d56\u5e93\u3002\u5e76\u4e14\u5b89\u88c5\u5728\u5f53\u524d\u9879\u76eebuild\u4e0b\u9762\u3002\u8fd9\u4e9b\u7b2c\u4e09\u65b9\u5e93\u4e0e\u4f60\u672c\u5730\u7684\u5df2\u7ecf\u88c5\u597d\u4e86\u7684\u7b2c\u4e09\u65b9\u5e93\u662f\u9694\u79bb\u5f00\u7684\uff0c\u56e0\u6b64\u89e3\u51b3\u4e86\u7248\u672c\u95ee\u9898\u3002\u5e76\u4e14\u4ed6\u4eba\u5b89\u88c5\u4f60\u7684\u5e93\u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u81ea\u52a8\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93\u3002"),(0,a.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,a.kt)("p",null,"\u53ea\u9700\u8981\u4e24\u70b9"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6839\u76ee\u5f55\u4e0b\u5efa\u7acbvcpkg.json"),(0,a.kt)("li",{parentName:"ol"},"CMakeLists.txt\u4e2d\u4f7f\u7528find_package")),(0,a.kt)("p",null,"\u6b64\u65f6\u8fd0\u884ccmake\u914d\u7f6e\uff0c\u5373\u53ef\u81ea\u52a8\u4e3a\u4f60\u4e0b\u8f7d\u5e76\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93"),(0,a.kt)("p",null,"vcpkg.json\u5185\u5bb9\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "name": "opengl",\n    "version": "0.0.1",\n    "description": "learn the OpenGL",\n    "dependencies": [\n        "eigen3",\n        "imgui",\n        "glfw3",\n        "glm",\n        "glad",\n        "assimp"\n    ]\n}\n')),(0,a.kt)("p",null,"\u5bf9\u5e94\u7684CMakeLists.txt\u4e2d\u7684find_package\u8bed\u53e5\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"find_package(Eigen3 CONFIG REQUIRED)\ntarget_link_libraries(main PRIVATE Eigen3::Eigen)\n\nfind_package(imgui CONFIG REQUIRED)\ntarget_link_libraries(main PRIVATE imgui::imgui)\n\nfind_package(assimp CONFIG REQUIRED)\ntarget_link_libraries(main PRIVATE assimp::assimp)\n\nfind_package(glfw3 CONFIG REQUIRED)\ntarget_link_libraries(main PRIVATE glfw)\n\nfind_package(glad CONFIG REQUIRED)\ntarget_link_libraries(main PRIVATE glad::glad)\n\nfind_package(glm CONFIG REQUIRED)\ntarget_link_libraries(main PRIVATE glm::glm)\n")),(0,a.kt)("p",null,"\u5b89\u88c5\u7ed3\u679c"),(0,a.kt)("p",null,"\u5728build\u76ee\u5f55\u4e0b\u4f1a\u4ea7\u751fvcpkg_installed\u6587\u4ef6\u5939\uff0c\u6240\u6709\u7684\u7b2c\u4e09\u65b9\u5e93\u90fd\u4f1a\u5b89\u88c5\u5728\u8fd9\u91cc\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/724beaf72300443782fafccbbdf45382.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})))}u.isMDXComponent=!0}}]);