(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(1),r=a(6),o=(a(0),a(161)),i={id:"gas-fees",title:"Gas & Fees"},c={id:"knowledge/tezos_protocol/operations/gas-fees",title:"Gas & Fees",description:'Every transaction on Tezos incurs costs for its computation and used storage. Consider that every [node](../node) is performing the calculation and keeps a copy of the data. That\'s why it is necessary charge a fee to provide an incentive for node operators to run the infrastructure and to encourage "lean" code.',source:"@site/docs/knowledge/tezos_protocol/operations/gas-fees.md",permalink:"/docs/knowledge/tezos_protocol/operations/gas-fees",editUrl:"https://github.com/stove-labs/learn.stove-labs.com/edit/master/website/docs/knowledge/tezos_protocol/operations/gas-fees.md",sidebar:"wiki",previous:{title:"Overview",permalink:"/docs/knowledge/tezos_protocol/operations/operations"},next:{title:"Origination",permalink:"/docs/knowledge/tezos_protocol/operations/originated-account"}},s=[{value:"Burn",id:"burn",children:[]},{value:"Gas",id:"gas",children:[]},{value:"Calculating total fee",id:"calculating-total-fee",children:[]}],b={rightToc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Every transaction on Tezos incurs costs for its computation and used storage. Consider that every ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../node"}),"node"),' is performing the calculation and keeps a copy of the data. That\'s why it is necessary charge a fee to provide an incentive for node operators to run the infrastructure and to encourage "lean" code.'),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"A ",Object(o.b)("strong",{parentName:"p"},"fee")," is paid to a ",Object(o.b)("em",{parentName:"p"},"baker"),", while a ",Object(o.b)("strong",{parentName:"p"},"burn")," is destroyed. The latter has a deflationary quality for the total supply of ",Object(o.b)("em",{parentName:"p"},"tez"),", because no account is the recipient -  not even a ",Object(o.b)("em",{parentName:"p"},"baker"),"."))),Object(o.b)("h2",{id:"burn"},"Burn"),Object(o.b)("p",null,"Whenever a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"transaction"}),"transaction")," increases the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../context"}),"context")," of the blockchain, the source address must pay a burn fee.\nThe two different types of burn fee are:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Allocation burn of 0.257 tez or 257000 mtez",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Activation of a new address happens when the first transaction is sent to it",Object(o.b)("sup",Object(n.a)({parentName:"li"},{id:"fnref-1"}),Object(o.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),". "),Object(o.b)("li",{parentName:"ol"},"A new ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"../../smart_contract/smart-contract"}),"smart contract")," is created. A new ",Object(o.b)("inlineCode",{parentName:"li"},"KT1")," address is ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"originated-account"}),"originated"),"."))),Object(o.b)("li",{parentName:"ol"},"Storage burn: the size of the smart contract increases.")),Object(o.b)("h2",{id:"gas"},"Gas"),Object(o.b)("p",null,"In short, gas is a measure for ",Object(o.b)("em",{parentName:"p"},"how long")," it takes a program to compute. It is a rough equivalent of computational steps required to calculate the new ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"context"}),"state"),". This limitation prevents programs in the form of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../smart_contract/smart-contract"}),"smart contracts")," to run uncontrollably.\nConsider the case of a smart contract that runs recursively. If there would be nothing to stop the program from running, many contracts could clog up the blockchain network. That's why a gas limit needs to be paid for every transaction. If the total gas used by the smart contract computation is less or equal the gas limit, then the transaction is processed and changes are applied to the state. However, if the total gas used is higher than the gas limit paid previously, then all changes are reverted, but the gas fee is collected by the baker. In other words, the transaction is still valid, but has no effect on the state. It is the responsibility of the sender to include enough gas for the transaction."),Object(o.b)("h2",{id:"calculating-total-fee"},"Calculating total fee"),Object(o.b)("p",null,"The most reliable way to determine the total fee that has to be paid for a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"operations"}),"transaction operation")," is calculated by doing a ",Object(o.b)("inlineCode",{parentName:"p"},"--dry-run")," in ",Object(o.b)("em",{parentName:"p"},"tezos-client"),". The node simulates the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../smart_contract/michelson"}),"michelson")," execution and traces the amount of gas used for computation and how much storage is required. Then the client adds as a safety mechanism another 100 extra ",Object(o.b)("em",{parentName:"p"},"units of gas"),". As stated above, this is not a problem, because the transaction initiator will receive back the surplus of gas."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Simulating the operation with the ",Object(o.b)("em",{parentName:"p"},"tezos-client")," using the ",Object(o.b)("inlineCode",{parentName:"p"},"--dry-run")," flag is very useful. The transaction is ran locally in your node and you will immediately know whether it executes successfully. Additionally, it traces gas and storage costs that you can use for ",Object(o.b)("inlineCode",{parentName:"p"},"gas_limit")," and ",Object(o.b)("inlineCode",{parentName:"p"},"storage_limit"),", when announcing the transaction on a live network. In this way you will avoid paying fees for an erroneous transaction.  "))),Object(o.b)("p",null,"Nevertheless it is useful to understand how the fee per operation is computed. In protocol ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://tezos.gitlab.io/protocols/004_Pt24m4xi.html"}),"004_Athens")," the constants were updated, but the formula has not changed:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"total_cost = safety gas + burn + fees\n\nsafety gas = 100 gas units\n\nburn = storage_difference * minimal_nanotez_per_byte\n\nfees >= minimal_fees +\n        minimal_nanotez_per_byte * size +\n        minimal_nanotez_per_gas_unit * gas\n\nin practice:\n\nfees >= 100 +\n        1 * size +\n        0.1 * gas\n")),Object(o.b)("p",null,"Two examples are:"),Object(o.b)("p",null,"Transfer to an inactive",Object(o.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-1"}),Object(o.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../implicit-account"}),"implicit account")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"gas_limit : 10200\nstorage_limit : 257 bytes\nfee : 1281 mtz\nopbytes : ~162\n")),Object(o.b)("p",null,"Transfer to an active ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../implicit-account"}),"implicit account")," or KT1 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"originated-account"}),"originated account")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"gas_limit : 10200\nstorage_limit : 0 bytes\nfee : 1281 mtz\nopbytes : ~162\n")),Object(o.b)("p",null,"For more information on gas & fees visit the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://tezos.gitlab.io/protocols/004_Pt24m4xi.html#gas-and-fees"}),"official documentation"),"."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"According to the popular JavaScript API library ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/TezTech/eztz/blob/master/PROTO_004_FEES.md"}),"eztz"),", recommended settings for transactions should be a fee of 1420mutez, a storage limit of 300 and a gas limit of 10600, meeting a variety of cases. The safest way is to simulate any operation with ",Object(o.b)("inlineCode",{parentName:"p"},"--dry-run")," in ",Object(o.b)("em",{parentName:"p"},"tezos-client")," to estimate the costs and to add a safety blanket of +100mutez."))),Object(o.b)("p",null,"Recommended settings for transactions should be fee of 1420mutez, storage limit of 300, and gas limit of 10600 (to cover a variety of cases)"),Object(o.b)("p",null,Object(o.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-1"}),Object(o.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," An ",Object(o.b)("em",{parentName:"p"},"inactive")," account has 0 balance and is not registered as a baker."),Object(o.b)("div",{className:"footnotes"},Object(o.b)("hr",{parentName:"div"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-1"}),"The public key for an address is ",Object(o.b)("em",{parentName:"li"},"revealed")," when a the first transaction is sent from it. This is important for other participants to verify operations signed by that public key.",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}l.isMDXComponent=!0},161:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(a),d=n,u=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return a?r.a.createElement(u,c({ref:t},b,{components:a})):r.a.createElement(u,c({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);