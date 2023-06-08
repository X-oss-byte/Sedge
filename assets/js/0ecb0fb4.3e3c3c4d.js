"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),h=o,u=m["".concat(l,".").concat(h)]||m[h]||c[h]||a;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6,id:"import-key"},i="Import key",s={unversionedId:"commands/import-key",id:"commands/import-key",title:"Import key",description:"Running sedge import-key will import validator keys from a directory following",source:"@site/docs/commands/importKey.mdx",sourceDirName:"commands",slug:"/commands/import-key",permalink:"/docs/commands/import-key",draft:!1,editUrl:"https://github.com/NethermindEth/sedge/tree/main/docs/docs/commands/importKey.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"import-key"},sidebar:"tutorialSidebar",previous:{title:"Generate",permalink:"/docs/commands/generate"},next:{title:"Keys",permalink:"/docs/commands/keys"}},l={},d=[{value:"Help",id:"help",level:2},{value:"Execution examples",id:"execution-examples",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"import-key"},"Import key"),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"sedge import-key")," will import validator keys from a directory following\nthe EIP-2335: BLS12-381 Keystore standard. This command needs to be run on an already\ninitialized sedge setup containing a validator client."),(0,o.kt)("h2",{id:"help"},"Help"),(0,o.kt)("p",null,"To know more about the command options, run ",(0,o.kt)("inlineCode",{parentName:"p"},"sedge import-key --help"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ sedge import-key --help                          \n\nImport validator client keys, use the \'from\' flag to specify the keys location,\nand make sure that follows the EIP-2335: BLS12-381 Keystore standard. This command\nassumes that the validator client container exists, stopped or not.\n\nThis command stops the validator client during the importing process due to the\nvalidator database being locked while it\'s running but leaves the validator client\nin the same state in which it was found. That means if the validator is running/stopped\nbefore the import, then the validator will be running/stopped after the command\nis executed, regardless of whether the export fails or not. To force a different\nbehavior use --start-validator and --stop-validator flags.\n\nThe [validator] is a required argument used to specify which validator client, from\nall supported by Sedge (lighthouse, lodestar, prysm or teku), is used to import the\nvalidator keys. This is necessary because each client has its own way to achieve\nthe importation.\n\nUsage:\n  sedge import-key [flags] [validator]\n\nFlags:\n      --custom-config string         file path or url to use as custom network config.\n      --custom-deploy-block string   custom network deploy block.\n      --custom-genesis string        file path or url to use as custom network genesis.\n      --from string                  path to the validator keys, must follow the EIP-2335: BLS12-381 Keystore standard (default "[WORK_DIR]/sedge-data/keystore")\n  -h, --help                         help for import-key\n  -n, --network string               network\n  -p, --path string                  path to the generation directory (default "[WORK_DIR]/sedge-data")\n      --start-validator              starts the validator client after import, regardless of the state the validator was in before\n      --stop-validator               stops the validator client after import, regardless of the state the validator was in before\n\nGlobal Flags:\n      --logLevel string   Set Log Level, e.g panic, fatal, error, warn, warning, info, debug, trace (default "info")\n')),(0,o.kt)("h2",{id:"execution-examples"},"Execution examples"),(0,o.kt)("p",null,"In this example we will import validator keys from a non default directory into\na sedge setup with a stopped validator client (Prysm in this case). This is the\nfolder structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 keystore\n\u2502   \u251c\u2500\u2500 deposit_data.json\n\u2502   \u251c\u2500\u2500 keystore_password.txt\n\u2502   \u2514\u2500\u2500 validator_keys\n\u2502       \u2514\u2500\u2500 keystore-m_12381_3600_0_0_0.json\n\u2514\u2500\u2500 sedge-data\n    \u251c\u2500\u2500 docker-compose.yml\n    \u251c\u2500\u2500 .env\n    \u2514\u2500\u2500 jwtsecret\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"keystore")," folder contains the validator keys, the ",(0,o.kt)("inlineCode",{parentName:"p"},"sedge-data")," folder contains\nthe sedge setup. The ",(0,o.kt)("inlineCode",{parentName:"p"},"keystore_password.txt")," file contains the password to unlock\nthe validator keys."),(0,o.kt)("p",null,"To import the validator keys, and start the validator client after the import, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sedge import-key --from keystore -n sepolia --start-validator prysm\n2023-01-26 11:59:34 -- [INFO] [Logger Init] Log level: info\n2023-01-26 11:59:34 -- [INFO] You are running the latest version of sedge. Version:  v0.6.0\n# highlight-next-line\n2023-01-26 11:59:34 -- [WARN] The keys path is not the default one, copying the keys to the default path /root/sedge/example/sedge-data/keystore\n2023-01-26 11:59:34 -- [INFO] Importing validator keys\n2023-01-26 11:59:34 -- [INFO] The keys import container is starting\n# highlight-next-line\n2023-01-26 11:59:35 -- [INFO] The validator container is being restarted\n# highlight-next-line\n2023-01-26 11:59:36 -- [INFO] Validator keys imported successfully\n")),(0,o.kt)("p",null,"Notice the warning message, this is because the ",(0,o.kt)("inlineCode",{parentName:"p"},"--from")," flag is not the default\npath for the validator keys. Sedge will copy the keys to the default path, and\nthen import them."),(0,o.kt)("p",null,"Notice also that the validator client is restarted after the import, this is\nbecause the ",(0,o.kt)("inlineCode",{parentName:"p"},"--start-validator")," flag was used."),(0,o.kt)("p",null,"The resulted folder structure is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 keystore\n\u2502   \u251c\u2500\u2500 deposit_data.json\n\u2502   \u251c\u2500\u2500 keystore_password.txt\n\u2502   \u2514\u2500\u2500 validator_keys\n\u2502       \u2514\u2500\u2500 keystore-m_12381_3600_0_0_0.json\n\u2514\u2500\u2500 sedge-data\n    \u251c\u2500\u2500 docker-compose.yml\n    \u251c\u2500\u2500 .env\n    \u251c\u2500\u2500 jwtsecret\n    \u251c\u2500\u2500 keystore/\n    \u2514\u2500\u2500 validator-data/\n")),(0,o.kt)("p",null,"Notice the new folder ",(0,o.kt)("inlineCode",{parentName:"p"},"keystore")," inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"sedge-data")," folder, this is where\nthe validator keys are copied to. Also notice the new folder ",(0,o.kt)("inlineCode",{parentName:"p"},"validator-data"),",\nthis is where the validator client stores its data."))}c.isMDXComponent=!0}}]);