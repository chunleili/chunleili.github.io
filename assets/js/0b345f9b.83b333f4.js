"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={},o=void 0,s={unversionedId:"taichi/SPH_Taichi/read-json",id:"taichi/SPH_Taichi/read-json",title:"read-json",description:"\u4f9d\u7136\u662f\u5f20\u94ed\u777f\u540c\u5b66\u7684SPH_Taichi",source:"@site/docs/taichi/SPH_Taichi/read-json.md",sourceDirName:"taichi/SPH_Taichi",slug:"/taichi/SPH_Taichi/read-json",permalink:"/taichi/SPH_Taichi/read-json",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/taichi/SPH_Taichi/read-json.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7c92\u5b50\u683c\u5f0f\u5e93partio\u7684\u5b89\u88c5\u4e0e\u4f7f\u7528",permalink:"/partio/partio-intro"},next:{title:"\u3010taichi\u3011\u5173\u4e8eSPH_Taichi\u7684\u63a2\u7d22\u4e0e\u5c1d\u8bd5",permalink:"/taichi/SPH_Taichi"}},c={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f9d\u7136\u662f\u5f20\u94ed\u777f\u540c\u5b66\u7684SPH_Taichi"),(0,i.kt)("h1",{id:"\u6d4b\u8bd5\u4f7f\u7528json\u8bfb\u53d6\u573a\u666f\u6587\u4ef6\u53c2\u6570"},"\u6d4b\u8bd5\u4f7f\u7528json\u8bfb\u53d6\u573a\u666f\u6587\u4ef6\u53c2\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import json\n\ndef test_json():\n    scene_file_path = 'E:\\Dev\\SPH_Taichi\\data\\scenes\\dragon_bath.json'\n    with open(scene_file_path, \"r\") as f:\n        config = json.load(f)\n\n    # get all data\n    print('---------get all data----------')\n    print(config)\n\n    # get density0\n    print('---------get density0----------')\n    someKey = 'Configuration'\n    someValue = 'density0'\n    density0 = config[someKey][someValue]\n    print(density0)\n    print(type(density0))\n\n    # get gravitation\n    print('---------get gravitation----------')\n    someKey2 = 'Configuration'\n    someValue2 = 'gravitation'\n    gravitation = config[someKey2][someValue2]\n    print(gravitation)\n    print(type(gravitation))\n\n    # # get geometryFile\n    print('---------get geometryFile----------')\n    rbs = config[\"RigidBodies\"]\n    geometryFile=rbs[0]['geometryFile']\n    print(geometryFile)\n    print(type(geometryFile))\n\n\nif __name__ == '__main__':\n    test_json()\n")),(0,i.kt)("p",null,"\u8981\u6ce8\u610f\u7684\u5c31\u662f\u6700\u540e\u4e00\u4e2a\u6d4b\u8bd5\u4e2d\u7684rbs","[0]","\u3002\u8fd9\u662f\u56e0\u4e3aRigidBodies\u662f\u4e00\u4e2a\u5217\u8868\u3002\u4e5f\u5c31\u662f\u8bf4\u53ef\u80fd\u4f1a\u6709\u591a\u4e2aRigidBodies\u3002\u56e0\u6b64\u6211\u4eec\u53d6\u7b2c\u4e00\u4e2a\u3002"),(0,i.kt)("p",null,"\u8f93\u51fa"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"---------get all data----------\n{'Configuration': {'domainStart': [0.0, 0.0, 0.0], 'domainEnd': [5.0, 3.0, 2.0], 'particleRadius': 0.01, 'numberOfStepsPerRenderUpdate': 1, 'density0': 1000, 'simulationMethod': 4, 'gravitation': [0.0, -9.81, 0.0], 'timeStepSize': 0.0004, 'stiffness': 50000, 'exponent': 7, 'boundaryHandlingMethod': 0, 'exportFrame': False, 'exportPly': False, 'exportObj': False}, 'RigidBodies': [{'objectId': 1, 'geometryFile': './data/models/Dragon_50k.obj', 'translation': [3.5, 0.05, 1.0], 'rotationAxis': [0, 1, 0], 'rotationAngle': 0, 'scale': [1, 1, 1], \n'velocity': [0.0, 0.0, 0.0], 'density': 1000.0, 'color': [255, 255, 255], 'isDynamic': False}], 'FluidBlocks': [{'objectId': 0, 'start': [0.1, 0.1, 0.5], 'end': [1.2, 2.9, 1.6], 'translation': [0.2, 0.0, 0.2], 'scale': [1, 1, 1], 'velocity': [0.0, -1.0, 0.0], 'density': 1000.0, 'color': [50, 100, 200]}]}\n---------get density0----------\n1000\n<class 'int'>\n---------get gravitation----------\n[0.0, -9.81, 0.0]\n<class 'list'>\n---------get geometryFile----------\n./data/models/Dragon_50k.obj\n<class 'str'>\n")))}d.isMDXComponent=!0}}]);