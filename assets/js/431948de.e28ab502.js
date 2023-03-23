"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:4,id:"gnosis"},i="Gnosis",l={unversionedId:"networks/gnosis",id:"networks/gnosis",title:"Gnosis",description:"Gnosis Chain is an EVM based Ethereum sidechain designed to be a platform for decentralized prediction markets.",source:"@site/docs/networks/gnosis.mdx",sourceDirName:"networks",slug:"/networks/gnosis",permalink:"/docs/networks/gnosis",draft:!1,editUrl:"https://github.com/NethermindEth/sedge/tree/main/docs/docs/networks/gnosis.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"gnosis"},sidebar:"tutorialSidebar",previous:{title:"Sepolia",permalink:"/docs/networks/sepolia"},next:{title:"Chiado",permalink:"/docs/networks/chiado"}},s={},u=[{value:"Supported Execution Clients",id:"supported-execution-clients",level:2},{value:"Supported Consensus Clients",id:"supported-consensus-clients",level:2},{value:"Supported Validator Clients",id:"supported-validator-clients",level:2},{value:"Run a Validator or Full Node",id:"run-a-validator-or-full-node",level:2},{value:"Generating a Full Node",id:"generating-a-full-node",level:3},{value:"Running a Full Node with a Validator",id:"running-a-full-node-with-a-validator",level:3},{value:"Create keystore for validator",id:"create-keystore-for-validator",level:3},{value:"Running your setup",id:"running-your-setup",level:3},{value:"Consensus Clients Requirements",id:"consensus-clients-requirements",level:2},{value:"Lighthouse Client",id:"lighthouse-client",level:3},{value:"Lighthouse Minimum",id:"lighthouse-minimum",level:4},{value:"Lighthouse Recommended",id:"lighthouse-recommended",level:4},{value:"Teku Client",id:"teku-client",level:3},{value:"Teku Minimum",id:"teku-minimum",level:4},{value:"Teku Recommended",id:"teku-recommended",level:4},{value:"Execution Client Requirements",id:"execution-client-requirements",level:2},{value:"Nethermind Client",id:"nethermind-client",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gnosis"},"Gnosis"),(0,r.kt)("p",null,"Gnosis Chain is an EVM based Ethereum sidechain designed to be a platform for decentralized prediction markets.\nIt is a permissionless network governed by the Gnosis community."),(0,r.kt)("h2",{id:"supported-execution-clients"},"Supported Execution Clients"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.nethermind.io/"},"Nethermind"))),(0,r.kt)("h2",{id:"supported-consensus-clients"},"Supported Consensus Clients"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://lighthouse-book.sigmaprime.io/"},"Lighthouse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://chainsafe.github.io/lodestar/"},"Lodestar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/en/latest/"},"Teku"))),(0,r.kt)("h2",{id:"supported-validator-clients"},"Supported Validator Clients"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://lighthouse-book.sigmaprime.io/"},"Lighthouse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://chainsafe.github.io/lodestar/"},"Lodestar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/en/latest/"},"Teku"))),(0,r.kt)("h2",{id:"run-a-validator-or-full-node"},"Run a Validator or Full Node"),(0,r.kt)("p",null,"Validators and Full Nodes, protect the network by validating transactions and blocks. They are the backbone of the\nnetwork and are responsible for the security of the network. This guide shows you how to use Sedge to setup a\nfull node or a validator in Gnosis."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Validating the Gnosis Beacon Chain requires 1\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.gnosischain.com/about/tokens/gno"},"GNO")," per validator process.")),(0,r.kt)("h3",{id:"generating-a-full-node"},"Generating a Full Node"),(0,r.kt)("p",null,"To generate a setup of a full node (without a validator node) with random clients, you only need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-validator")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge generate full-node"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sedge generate full-node --no-validator --network=gnosis\n")),(0,r.kt)("h3",{id:"running-a-full-node-with-a-validator"},"Running a Full Node with a Validator"),(0,r.kt)("p",null,"To generate a setup of a validator with random clients, you need to omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-validator")," flag. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sedge generate full-node --network=gnosis\n")),(0,r.kt)("h3",{id:"create-keystore-for-validator"},"Create keystore for validator"),(0,r.kt)("p",null,"To create a keystore for a validator, you need to run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sedge keys --network gnosis\n")),(0,r.kt)("h3",{id:"running-your-setup"},"Running your setup"),(0,r.kt)("p",null,"Once you have generated your setup, you can run it with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sedge run\n")),(0,r.kt)("h2",{id:"consensus-clients-requirements"},"Consensus Clients Requirements"),(0,r.kt)("h3",{id:"lighthouse-client"},"Lighthouse Client"),(0,r.kt)("h4",{id:"lighthouse-minimum"},"Lighthouse Minimum"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dual-core CPU, 2015 or newer"),(0,r.kt)("li",{parentName:"ul"},"8 GB RAM"),(0,r.kt)("li",{parentName:"ul"},"500 GB SSD"),(0,r.kt)("li",{parentName:"ul"},"10 Mb/s download, 5 Mb/s upload broadband connection")),(0,r.kt)("h4",{id:"lighthouse-recommended"},"Lighthouse Recommended"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quad-core AMD Ryzen, Intel Broadwell, ARMv8 or newer"),(0,r.kt)("li",{parentName:"ul"},"16 GB RAM"),(0,r.kt)("li",{parentName:"ul"},"1 TB SSD"),(0,r.kt)("li",{parentName:"ul"},"100 Mb/s download, 20 Mb/s upload broadband connection")),(0,r.kt)("h3",{id:"teku-client"},"Teku Client"),(0,r.kt)("h4",{id:"teku-minimum"},"Teku Minimum"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dual Core CPU, i5-760 or AMD FX-8100 or better"),(0,r.kt)("li",{parentName:"ul"},"8 GB RAM"),(0,r.kt)("li",{parentName:"ul"},"500 GB SSD"),(0,r.kt)("li",{parentName:"ul"},"1 Mb/s broadband connection")),(0,r.kt)("h4",{id:"teku-recommended"},"Teku Recommended"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quad core CPU, Intel Core i7\u20134770 or AMD FX-8310 or better"),(0,r.kt)("li",{parentName:"ul"},"16 GB RAM"),(0,r.kt)("li",{parentName:"ul"},"1 TB SSD"),(0,r.kt)("li",{parentName:"ul"},"10 Mb/s broadband connection")),(0,r.kt)("p",null,"For a more detailed description, you can look on the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gnosischain.com/node/consensus-layer-validator#beacon-chain-node-requirements"},"Beacon Chain Node Requirements")," at the Gnosis Chain documentation."),(0,r.kt)("h2",{id:"execution-client-requirements"},"Execution Client Requirements"),(0,r.kt)("h3",{id:"nethermind-client"},"Nethermind Client"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OS: Ubuntu"),(0,r.kt)("li",{parentName:"ul"},"CPU: 2 cores"),(0,r.kt)("li",{parentName:"ul"},"RAM: 8GB"),(0,r.kt)("li",{parentName:"ul"},"Disk: 500gb SSD")),(0,r.kt)("p",null,"For a more detailed description, you can look on the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gnosischain.com/node/execution-layer-validator"},"Guide for Run a Gnosis Execution Layer Node")))}p.isMDXComponent=!0}}]);