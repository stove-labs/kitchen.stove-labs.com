(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(161)),c={id:"operations",title:"Overview"},i={id:"knowledge/tezos_protocol/operations/operations",title:"Overview",description:"Operations change the [context](../context) of the blockchain. This transformation of the state happens at certain intervals,  whenever a new [block](../block) is created. The block holds all operations.",source:"@site/docs/knowledge/tezos_protocol/operations/operations.md",permalink:"/docs/knowledge/tezos_protocol/operations/operations",editUrl:"https://github.com/stove-labs/learn.stove-labs.com/edit/master/website/docs/knowledge/tezos_protocol/operations/operations.md",sidebar:"wiki",previous:{title:"Node",permalink:"/docs/knowledge/tezos_protocol/node"},next:{title:"Gas & Fees",permalink:"/docs/knowledge/tezos_protocol/operations/gas-fees"}},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Operations change the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../context"}),"context")," of the blockchain. This transformation of the state happens at certain intervals,  whenever a new ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../block"}),"block")," is created. The block holds all operations."),Object(o.b)("p",null,"There are different types of operations (how it affects balance",Object(o.b)("sup",Object(r.a)({parentName:"p"},{id:"fnref-1"}),Object(o.b)("a",Object(r.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),"):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Baking type  ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Accusations (reward)"),Object(o.b)("li",{parentName:"ul"},"Endorsements (reward)"))),Object(o.b)("li",{parentName:"ul"},"Voting type",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Ballot (does not affect)"),Object(o.b)("li",{parentName:"ul"},"Proposal (does not affect)"))),Object(o.b)("li",{parentName:"ul"},"Anonymous type",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Activate account (burn)"),Object(o.b)("li",{parentName:"ul"},"Double baking evidence (reward - loss)"),Object(o.b)("li",{parentName:"ul"},"Double endorsement evidence (reward - loss)"),Object(o.b)("li",{parentName:"ul"},"Seed nonce revelation (reward)"))),Object(o.b)("li",{parentName:"ul"},"Manager type",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Revelation (fee)"),Object(o.b)("li",{parentName:"ul"},"Delegations (fee)"),Object(o.b)("li",{parentName:"ul"},"Transactions to transfer ",Object(o.b)("em",{parentName:"li"},"tez")," funds (transfer - fee)"),Object(o.b)("li",{parentName:"ul"},"Transactions to invoke/interact with ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../../smart_contract/smart-contract"}),"smart contracts")," (transfer - fee)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"originated-account"}),"Originations")," of smart contracts")))),Object(o.b)("div",{className:"footnotes"},Object(o.b)("hr",{parentName:"div"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",Object(r.a)({parentName:"ol"},{id:"fn-1"}),Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://tezos.stackexchange.com/questions/2236/rewards-for-operations/2240#2240"}),"Online discussion")," about rewards for operations.",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}p.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),f=r,m=b["".concat(c,".").concat(f)]||b[f]||u[f]||o;return n?a.a.createElement(m,i({ref:t},s,{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);