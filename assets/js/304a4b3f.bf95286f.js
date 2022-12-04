"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>A});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,A=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(A,u(u({ref:t},c),{},{components:n})):r.createElement(A,u({ref:t},c))}));function A(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,u[1]=l;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8970:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>c,assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},u="Docusaurus Markdown \u7528\u6cd5",l={unversionedId:"docusaurus/docusaurus",id:"docusaurus/docusaurus",title:"Docusaurus Markdown \u7528\u6cd5",description:"Docusaurus \u652f\u6301\u7684markdown\u8bed\u6cd5\u8bf7\u67e5\u9605\uff1a Markdown",source:"@site/docs/docusaurus/docusaurus.md",sourceDirName:"docusaurus",slug:"/docusaurus/",permalink:"/docusaurus/",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/docusaurus/docusaurus.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",next:{title:"\u600e\u6837\u5229\u7528github Action \u81ea\u52a8\u90e8\u7f72",permalink:"/docusaurus/deploy/auto-deploy"}},i={},s=[{value:"\u94fe\u63a5",id:"\u94fe\u63a5",level:2},{value:"\u56fe\u7247",id:"\u56fe\u7247",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2},{value:"\u7eaf\u6587\u672c",id:"\u7eaf\u6587\u672c",level:2},{value:"\u8b66\u544a",id:"\u8b66\u544a",level:2},{value:"\u6249\u9875",id:"\u6249\u9875",level:2},{value:"\u62d3\u5c55\u7684markdown\u8bed\u6cd5\uff1aMDX",id:"\u62d3\u5c55\u7684markdown\u8bed\u6cd5mdx",level:2}],c=e=>{let{children:t,color:n}=e;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${n} with label ${t}`)}},t)},d={toc:s,Highlight:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docusaurus-markdown-\u7528\u6cd5"},"Docusaurus Markdown \u7528\u6cd5"),(0,o.kt)("p",null,"Docusaurus \u652f\u6301\u7684markdown\u8bed\u6cd5\u8bf7\u67e5\u9605\uff1a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown"))),(0,o.kt)("p",null,"\u4e00\u4e9b\u57fa\u672c\u7528\u6cd5\u6bd4\u5982\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"#"),"\u6765\u8bbe\u5b9a\u6807\u9898\uff0c\u4ee5\u53ca\u4f7f\u7528\u4e24\u4e2a\u661f\u53f7\u6765",(0,o.kt)("strong",{parentName:"p"},"\u52a0\u7c97\u5b57\u4f53"),"\uff0c\u6211\u4eec\u5c31\u4e0d\u8d58\u8ff0\u4e86\u3002"),(0,o.kt)("h2",{id:"\u94fe\u63a5"},"\u94fe\u63a5"),(0,o.kt)("p",null,"\u94fe\u63a5\u5230\u67d0\u4e2amarkdown\u9875\u9762"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"\u94fe\u63a5\u5230\u67d0\u4e2a\u9875\u9762 [intro](intro.md).\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," \u94fe\u63a5\u5230\u67d0\u4e2a\u9875\u9762 ",(0,o.kt)("a",{parentName:"p",href:"/"},"intro"),"."),(0,o.kt)("h2",{id:"\u56fe\u7247"},"\u56fe\u7247"),(0,o.kt)("p",null,"\u8bf7\u628a\u6240\u6709\u56fe\u7247\u653e\u5230static/img\u6587\u4ef6\u5939\u5185\uff0c\u4f8b\u5982\n(",(0,o.kt)("inlineCode",{parentName:"p"},"static/img/docusaurus.png"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](/img/docusaurus.png)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus logo",src:n(3781).Z,width:"200",height:"200"})),(0,o.kt)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,o.kt)("p",null,"\u7528\u4e09\u4e2a\u53cd\u5355\u5f15\u53f7\uff08\u952e\u76d8\u6700\u5de6\u4e0a\u89d2\u7684\u90a3\u4e2a\uff09\u5305\u88f9\u4ee3\u7801\u3002\u4ee3\u7801\u652f\u6301\u9ad8\u4eae\u3002\u4f60\u53ef\u4ee5\u6307\u5b9a\u4ee3\u7801\u7684\u8bed\u8a00\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),(0,o.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,o.kt)("p",null,"\u53ea\u9700\u8981\u628a\u6587\u672c\u7f29\u8fdb\u4e24\u6b21\uff0c\u5c31\u80fd\u8ba9\u5176\u53d8\u4e3a\u5f15\u7528\uff0c\u88ab\u5f15\u7528\u5757\u6240\u5305\u88f9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u53ea\u9700\u8981\u628a\u6587\u672c\u7f29\u8fdb\u4e24\u6b21\uff0c\u5c31\u80fd\u8ba9\u5176\u53d8\u4e3a\u5f15\u7528\uff0c\u88ab\u5f15\u7528\u5757\u6240\u5305\u88f9\u3002\n")),(0,o.kt)("h2",{id:"\u7eaf\u6587\u672c"},"\u7eaf\u6587\u672c"),(0,o.kt)("p",null,"\u53ea\u9700\u8981\u4f7f\u7528","`","\u53cd\u5355\u5f15\u53f7","`","\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u7eaf\u6587\u672c"),(0,o.kt)("p",null,"\u53ea\u9700\u8981\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"\u53cd\u5355\u5f15\u53f7"),"\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u7eaf\u6587\u672c"),(0,o.kt)("h2",{id:"\u8b66\u544a"},"\u8b66\u544a"),(0,o.kt)("p",null,"\u53ef\u4ee5\u7b80\u5355\u5730\u4f7f\u7528\u8b66\u544a\u548cTips\u5757\u3002\u7528\u4e09\u4e2a\u5192\u53f7\u5f00\u59cb\u548c\u7ed3\u5c3e\uff0c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":::tip \u6211\u7684tip\n\n\u8fd9\u662f\u4e00\u4e2atip\n\n:::\n\n:::danger \u6211\u7684\u8b66\u544a\n\n\u8fd9\u662f\u4e00\u4e2adanger\u8b66\u544a\n\n:::\n")),(0,o.kt)("admonition",{title:"\u6211\u7684tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u4e2atip")),(0,o.kt)("admonition",{title:"\u6211\u7684\u8b66\u544a",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u4e2adanger\u8b66\u544a")),(0,o.kt)("h2",{id:"\u6249\u9875"},"\u6249\u9875"),(0,o.kt)("p",null,"\uff08\u6249\u9875\u4e0d\u662f\u5fc5\u987b\u7684\uff09\nMarkdown\u6587\u6863\u53ef\u4ee5\u589e\u52a0\u4e00\u4e9b\u5934\u90e8\u7684\u5143\u6570\u636e\uff0c\u88ab\u79f0\u4e3a",(0,o.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n\n")),(0,o.kt)("h2",{id:"\u62d3\u5c55\u7684markdown\u8bed\u6cd5mdx"},"\u62d3\u5c55\u7684markdown\u8bed\u6cd5\uff1aMDX"),(0,o.kt)("p",null,"\u8fd9\u662f\u4e00\u4e9b\u53ef\u9009\u7684\u9ad8\u7ea7\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u4e0d\u7528\u3002\n",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," \u53ef\u4ee5\u8ba9\u4f60\u4f7f\u7528React\u505a\u53ef\u4ea4\u4e92\u7684\u4e00\u4e9b\u62d3\u5c55\u529f\u80fd\u3002\u8fd9\u65f6\u8bf7\u4fdd\u5b58\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},".mdx"),"\u800c\u975e",(0,o.kt)("inlineCode",{parentName:"p"},".md"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n")),(0,o.kt)("p",null,"This is ",(0,o.kt)(c,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !"),(0,o.kt)("p",null,"This is ",(0,o.kt)(c,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," !"))}p.isMDXComponent=!0},3781:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);