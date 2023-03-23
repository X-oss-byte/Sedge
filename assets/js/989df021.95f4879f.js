"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=i,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||r;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1,slug:"contributing"},a="Contributing",s={unversionedId:"guidelines/contribution-guidelines",id:"guidelines/contribution-guidelines",title:"Contributing",description:"Thank you for considering making contributions to Sedge and Nethermind related repositories!",source:"@site/docs/guidelines/contribution-guidelines.mdx",sourceDirName:"guidelines",slug:"/guidelines/contributing",permalink:"/docs/guidelines/contributing",draft:!1,editUrl:"https://github.com/NethermindEth/sedge/tree/main/docs/docs/guidelines/contribution-guidelines.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"contributing"},sidebar:"tutorialSidebar",previous:{title:"Contribution Guidelines",permalink:"/docs/guidelines"},next:{title:"Adding new Networks",permalink:"/docs/guidelines/new-networks"}},l={},u=[{value:"Contributing with a new feature or fix",id:"contributing-with-a-new-feature-or-fix",level:2},{value:"Open a discussion",id:"open-a-discussion",level:2},{value:"Pull Requests",id:"pull-requests",level:2},{value:"Coding style",id:"coding-style",level:2},{value:"Comments",id:"comments",level:3},{value:"Logging",id:"logging",level:3},{value:"Testing",id:"testing",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"Thank you for considering making contributions to Sedge and Nethermind related repositories!"),(0,i.kt)("h2",{id:"contributing-with-a-new-feature-or-fix"},"Contributing with a new feature or fix"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start by browsing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/sedge/issues"},"new issues")," or in our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/PaCMRFdvWT"},"Discord"),".\nIf you are looking for something interesting or if you have something in your mind, there is a chance it had been discussed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Determine whether a GitHub issue or discussion is more appropriate for your needs:")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you want to propose something new that requires specification or an additional design, or you would like to change a\nprocess, start with a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/sedge/discussions/new"},"new discussion")," or under Sedge\n",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/PaCMRFdvWT"},"Discord server")," at the Nethermind Org. With discussions, we can better handle\nthe design process using discussion threads. A discussion usually leads to one or more issues.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the issue you want addressed is a specific proposal or a bug, then open a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/sedge/issues/new/choose"},"new issue"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Review existing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/sedge/issues"},"issues")," to find an issue you'd like to help with.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Participate in thoughtful discussion on that issue.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you would like to contribute:")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure that the proposal has been accepted.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure that nobody else has already begun working on this issue. If they have,\nmake sure to contact them to collaborate.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If nobody has been assigned for the issue, and you would like to work on it,\nmake a comment on the issue to inform the community of your intentions\nto begin work.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To submit your work as a contribution to the repository follow standard GitHub best practices. See ",(0,i.kt)("a",{parentName:"p",href:"#pull-requests"},"pull request guideline")," below."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," For very small or blatantly obvious problems such as typos, you are\nnot required to an open issue to submit a PR, but be aware that for more complex\nproblems/features, if a PR is opened before an adequate design discussion has\ntaken place in a GitHub issue, that PR runs a high likelihood of being rejected."),(0,i.kt)("h2",{id:"open-a-discussion"},"Open a discussion"),(0,i.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,i.kt)("p",null,"Before submitting a pull request:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Merge the latest develop ",(0,i.kt)("inlineCode",{parentName:"li"},"git merge origin/develop"),","),(0,i.kt)("li",{parentName:"ul"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"make format")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"make test")," to ensure that all checks and tests pass.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If you have something to show, start with a Draft PR. It's good to have early validation of your work, and we highly\nrecommend this practice. A Draft PR also indicates to the community that the work is in progress. Draft PRs also helps\nthe core team provide early feedback and ensure the work is in the right direction."),(0,i.kt)("li",{parentName:"ol"},"When the code is complete, change your PR from Draft to Ready for Review."),(0,i.kt)("li",{parentName:"ol"},"Go through the actions for each checkbox present in the PR template description. The PR actions are automatically provided for each new PR."),(0,i.kt)("li",{parentName:"ol"},"Be sure to include a relevant changelog entry in the Unreleased section of CHANGELOG.md (see file for log format).\nThe entry should be on top of all others changes in the section.")),(0,i.kt)("h2",{id:"coding-style"},"Coding style"),(0,i.kt)("p",null,"We follow the Golang Code Style and Formatting guidelines. Please run ",(0,i.kt)("inlineCode",{parentName:"p"},"make format")," before submitting a PR."),(0,i.kt)("h3",{id:"comments"},"Comments"),(0,i.kt)("p",null,"Try to add comments to your code. If you are not sure what to comment, comment what you are doing."),(0,i.kt)("p",null,"Functions that are exposed to the public API should have comments in the form of\n",(0,i.kt)("a",{parentName:"p",href:"https://blog.golang.org/godoc-documenting-go-code"},"GoDoc")," comments."),(0,i.kt)("h3",{id:"logging"},"Logging"),(0,i.kt)("p",null,"Logging is done using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sirupsen/logrus"},"Logrus"),"."),(0,i.kt)("h3",{id:"testing"},"Testing"),(0,i.kt)("p",null,"For each feature that you might consider to add, please add a test case to the test suite. This will help us to avoid\nregressions and to make sure that the feature works as expected."))}p.isMDXComponent=!0}}]);