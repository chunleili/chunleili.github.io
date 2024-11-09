"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7146],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const o={},i="\u4f7f\u7528CMakePresets\u6307\u5b9a\u914d\u7f6e\u548c\u6784\u5efa\u4fe1\u606f",c={unversionedId:"cmake/CMakePresets",id:"cmake/CMakePresets",title:"\u4f7f\u7528CMakePresets\u6307\u5b9a\u914d\u7f6e\u548c\u6784\u5efa\u4fe1\u606f",description:"\u4e00\u4e2a\u8303\u672c",source:"@site/docs/cmake/CMakePresets.md",sourceDirName:"cmake",slug:"/cmake/CMakePresets",permalink:"/cmake/CMakePresets",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/cmake/CMakePresets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"amgcl_install",permalink:"/amgcl/amgcl_install"},next:{title:"\u5229\u7528ExternalProject_Add\u89e3\u51b3\u7b2c\u4e09\u65b9\u5e93target\u547d\u540d\u51b2\u7a81\u95ee\u9898",permalink:"/cmake/ExternalProject_Add"}},s={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u4f7f\u7528cmakepresets\u6307\u5b9a\u914d\u7f6e\u548c\u6784\u5efa\u4fe1\u606f"},"\u4f7f\u7528CMakePresets\u6307\u5b9a\u914d\u7f6e\u548c\u6784\u5efa\u4fe1\u606f"),(0,a.yg)("p",null,"\u4e00\u4e2a\u8303\u672c"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "version": 6,\n    "configurePresets": [\n        {\n            "name": "vs2022",\n            "description": "Default",\n            "generator": "Visual Studio 17 2022",\n            "architecture": "x64",\n            "binaryDir": "build",\n            "toolchainFile": "E:/codes/vcpkg/scripts/buildsystems/vcpkg.cmake",\n            "cacheVariables": {\n                "ZENO_WITH_SPH": true,\n                "ZENO_WITH_FastFLIP": false,\n                "ZENO_WITH_TOOL_FLIPtools": true,\n                "ZENO_WITH_ZenoFX":true,\n                "ZENO_WITH_zenvdb":true,\n                "ZENOFX_ENABLE_OPENVDB":true,\n                "ZENO_WITH_FBX":true\n            }\n        },\n        {\n            "name": "vs2019",\n            "description": "Default",\n            "generator": "Visual Studio 16 2019",\n            "inherits": "vs2022"\n        }\n    ],\n    "buildPresets": [\n        {\n            "name": "vs2022-Rel",\n            "description": "VS 2022 Release",\n            "configurePreset": "vs2022",\n            "configuration": "Release"\n        },\n        {\n            "name": "vs2022-Debug",\n            "description": "VS 2022 Debug",\n            "configurePreset": "vs2022",\n            "configuration": "Debug"\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);