"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6156],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?t.createElement(g,a(a({ref:n},p),{},{components:r})):t.createElement(g,a({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6769:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(7462),o=(r(7294),r(3905));const i={sidebar_position:12,id:"version"},a="Version",s={unversionedId:"commands/version",id:"commands/version",title:"Version",description:"Running sedge version will give you the version you are running while using sedge.",source:"@site/docs/commands/version.mdx",sourceDirName:"commands",slug:"/commands/version",permalink:"/docs/commands/version",draft:!1,editUrl:"https://github.com/NethermindEth/sedge/tree/main/docs/docs/commands/version.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,id:"version"},sidebar:"tutorialSidebar",previous:{title:"Slashing Import",permalink:"/docs/commands/slashing-import"},next:{title:"Hardware requirements",permalink:"/docs/hardware-requirements/"}},l={},c=[{value:"Help",id:"help",level:2},{value:"Execution Example",id:"execution-example",level:2}],p={toc:c};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"version"},"Version"),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"sedge version")," will give you the version you are running while using sedge."),(0,o.kt)("h2",{id:"help"},"Help"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ sedge version -h\nInitializing configuration\nPrint sedge version\n\nUsage:\n  sedge version [flags]\n\nFlags:\n  -h, --help   help for version\n\nGlobal Flags:\n      --logLevel string   Set Log Level (default "info")\n')),(0,o.kt)("h2",{id:"execution-example"},"Execution Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sedge version\n2022-00-00 00:00:00 -- [INFO] [Logger Init] Log level: info\n2022-00-00 00:00:00 -- [INFO] You are running the latest version of sedge. Version:  v0.5.1\nsedge v0.5.1\n")))}u.isMDXComponent=!0}}]);