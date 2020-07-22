(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{124:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return p}));var a=o(2),n=o(6),r=(o(0),o(163)),c=(o(168),o(174)),i={id:"operations",title:"Overview"},s={id:"knowledge/tezos_protocol/operations/operations",isDocsHomePage:!1,title:"Overview",description:"Operations change the context of the blockchain. This transformation of the state happens at certain intervals,  whenever a new block is created. The block holds all operations that are applied at that batch operation.",source:"@site/docs/knowledge/tezos_protocol/operations/operations.mdx",permalink:"/docs/knowledge/tezos_protocol/operations/operations",editUrl:"https://github.com/stove-labs/learn.stove-labs.com/edit/master/website/docs/knowledge/tezos_protocol/operations/operations.mdx",sidebar:"wiki",previous:{title:"Node",permalink:"/docs/knowledge/tezos_protocol/node"},next:{title:"Gas & Fees",permalink:"/docs/knowledge/tezos_protocol/operations/gas-fees"}},l=[{value:"Types of operations",id:"types-of-operations",children:[]},{value:"Operation lifecycle",id:"operation-lifecycle",children:[]}],b={rightToc:l};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Operations change the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../context"}),"context")," of the blockchain. This transformation of the state happens at certain intervals,  whenever a new ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../block"}),"block")," is created. The ",Object(r.b)("strong",{parentName:"p"},"block holds all operations")," that are applied at that batch operation."),Object(r.b)("h2",{id:"types-of-operations"},"Types of operations"),Object(r.b)("p",null,"This is a list of different ",Object(r.b)("em",{parentName:"p"},"types of operations"),Object(r.b)("sup",Object(a.a)({parentName:"p"},{id:"fnref-1"}),Object(r.b)("a",Object(a.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," (how it affects balance",Object(r.b)("sup",Object(a.a)({parentName:"p"},{id:"fnref-2"}),Object(r.b)("a",Object(a.a)({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2")),"):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Baking")," type  ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Accusations (reward)"),Object(r.b)("li",{parentName:"ul"},"Endorsements (reward)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Voting")," type",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Ballot (does not affect)"),Object(r.b)("li",{parentName:"ul"},"Proposal (does not affect)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Anonymous")," type",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Activate account (burn)"),Object(r.b)("li",{parentName:"ul"},"Double baking evidence (reward - loss)"),Object(r.b)("li",{parentName:"ul"},"Double endorsement evidence (reward - loss)"),Object(r.b)("li",{parentName:"ul"},"Seed nonce revelation (reward)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Manager")," type",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Revelation (fee)"),Object(r.b)("li",{parentName:"ul"},"Delegations (fee)"),Object(r.b)("li",{parentName:"ul"},"Transactions to transfer ",Object(r.b)("em",{parentName:"li"},"tez")," funds (transfer - fee)"),Object(r.b)("li",{parentName:"ul"},"Transactions to invoke/interact with ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"../../smart_contract/smart-contract"}),"smart contracts")," (transfer - fee)"),Object(r.b)("li",{parentName:"ul"},"Originations of smart contracts")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Good to know")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Operations are uniquely identifiable by their hash. In Tezos all operation hashes start with ",Object(r.b)("strong",{parentName:"p"},"o")," as defined in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitlab.com/tezos/tezos/-/blob/master/src/lib_crypto/operation_hash.ml"}),"source code"),"."))),Object(r.b)("h2",{id:"operation-lifecycle"},"Operation lifecycle"),Object(r.b)("p",null,"Below is a simplified transaction diagram of the lifecycle of operations. A node receives ",Object(r.b)("strong",{parentName:"p"},"new operations in two ways"),": a ",Object(r.b)("strong",{parentName:"p"},"user announces")," the new operation through the RPC ",Object(r.b)("strong",{parentName:"p"},"or")," the node ",Object(r.b)("strong",{parentName:"p"},"receives it from another peer")," through ",Object(r.b)("em",{parentName:"p"},"advertisement"),". After that the operations are passed to a part of the ",Object(r.b)("strong",{parentName:"p"},"validation system"),' - the "pre-validator". It decides which operations are allowed to enter the ',Object(r.b)("em",{parentName:"p"},"mempool"),". Reasons for rejection could be that the operation does not have enough ",Object(r.b)("em",{parentName:"p"},"gas"),",the balance (XTZ) is too low, the voting period for the ballot is not correct, to name a few. Valid operations are then added to the mempool. It is important to know that even when receiving operations from other peers, the validation steps are nevertheless applied before proceeding to the mempool."),Object(r.b)("p",null,"When the time comes that the baker receives endorsements to bake (produce) a new block, the ",Object(r.b)("strong",{parentName:"p"},"baker queries for all valid operations from the mempool"),". A ",Object(r.b)("strong",{parentName:"p"},"new block")," gets backed by ",Object(r.b)("strong",{parentName:"p"},"injecting it in the node"),". After receiving the block, the protocol checks in another part of the ",Object(r.b)("strong",{parentName:"p"},"validation system")," for correctness. We will not get too much into detail of the ",Object(r.b)("em",{parentName:"p"},"block")," and ",Object(r.b)("em",{parentName:"p"},"chain validator"),", but it checks for errors",Object(r.b)("sup",Object(a.a)({parentName:"p"},{id:"fnref-3"}),Object(r.b)("a",Object(a.a)({parentName:"sup"},{href:"#fn-3",className:"footnote-ref"}),"3"))," such as: too many operations in a block, wrong protocol, expired chain (fork), to name just a few. After ",Object(r.b)("strong",{parentName:"p"},"successfully passing")," those, a ",Object(r.b)("strong",{parentName:"p"},"new block is created")," and the (block-)chain length increases by one block. Operations that had been baked are flushed from the mempool. The ",Object(r.b)("strong",{parentName:"p"},"new block is advertised to other peer nodes"),"."),Object(r.b)(c.a,{chart:"\nsequenceDiagram\nautonumber\n Alice ->> Peer Node: announce operation through RPC\n    Remote Peer ->> Peer Node: announce operation through advertisment\n    Note over Peer Node: Pre-validate\n    Peer Node->Peer Node: add to Mempool\n    Note over Baker: time to bake (produce) a new block\n    Baker -> Peer Node: query all valid operations\n    Peer Node -> Baker: return operations from mempool\n    Note over Baker: bake new block\n    Baker -> Peer Node: inject\n    Note over Peer Node: block-, chain-validator\n    Note over Peer Node: new block created\n    Peer Node -> Peer Node: flush mempool\n    Peer Node -> Remote Peer: advertise new block\n",mdxType:"Mermaid"}),Object(r.b)("p",null,"In the following overview the block does not get injected by a baker, but is exchanged among nodes. The main ",Object(r.b)("strong",{parentName:"p"},"difference")," is that usually when a baker injects the block, all the information is present in the node and respectively in the mempool. In this case however, all the ",Object(r.b)("strong",{parentName:"p"},"data is shipped to the node"),". You encounter this frequently when ",Object(r.b)("strong",{parentName:"p"},"starting a node from scratch")," (bootstrapping). Another sub-validator called peer validator takes care of fetching the block from the distributed database shared among the p2p nodes. "),Object(r.b)("center",null,Object(r.b)(c.a,{chart:"\nsequenceDiagram\n  autonumber\n    Remote Peer -> Peer Node: advertise new block\n    Note over Peer Node: peer-, block-, chain-validator\n    Note over Peer Node: new head (leading block)\n    Peer Node -> Peer Node: flush mempool\n",mdxType:"Mermaid"})),Object(r.b)("div",{className:"footnotes"},Object(r.b)("hr",{parentName:"div"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",Object(a.a)({parentName:"ol"},{id:"fn-1"}),Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/tezos/tezos/-/blob/mainnet/src/proto_001_PtCJ7pwo/lib_protocol/alpha_context.mli#L806"}),"Source code lib_protocol"),Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")),Object(r.b)("li",Object(a.a)({parentName:"ol"},{id:"fn-2"}),Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://tezos.stackexchange.com/questions/2236/rewards-for-operations/2240#2240"}),"Online discussion")," about rewards for operations.",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#fnref-2",className:"footnote-backref"}),"\u21a9")),Object(r.b)("li",Object(a.a)({parentName:"ol"},{id:"fn-3"}),Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/tezos/tezos/blob/mainnet/src/lib_shell_services/block_validator_errors.ml"}),"Source code lib_shell")," for block validator errors.",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#fnref-3",className:"footnote-backref"}),"\u21a9")))))}p.isMDXComponent=!0},166:function(e,t,o){"use strict";var a=o(0),n=o(36);t.a=function(){return Object(a.useContext)(n.a)}},168:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var a=o(166),n=o(171);function r(e,{forcePrependBaseUrl:t=!1,absolute:o=!1}={}){const{siteConfig:{baseUrl:r="/",url:c}={}}=Object(a.a)();if(!e)return e;if(t)return r+e;if(!Object(n.a)(e))return e;const i=r+e.replace(/^\//,"");return o?c+i:i}},171:function(e,t,o){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}o.d(t,"a",(function(){return a}))},174:function(e,t,o){"use strict";var a=o(0),n=o.n(a),r=o(190),c=o.n(r);c.a.initialize({startOnLoad:!0,themeCSS:"\n\t\t\t.node rect { fill: #f7f8fe; stroke: #000000 } \n\t\t\t.node polygon { fill: #f7f8fe; stroke: #000000 } \n\t\t\t.node path { fill: #f7f8fe; stroke: #000000 } \n\t\t\t.nodeWarning > rect{fill:#FFD03B; stroke:#000000;}\n\t\t\t.nodeDanger > rect{fill: #F86D70; stroke:#000000;} \n\t\t\t.nodeTezos > .label{color: #ffffff} \n\t\t\t.nodeTezos > rect {fill: #536DFE}\n\t\t"});t.a=({chart:e})=>(Object(a.useEffect)(()=>{c.a.contentLoaded()},[]),n.a.createElement("div",{className:"mermaid"},e))},191:function(e,t){},192:function(e,t){},193:function(e,t){},194:function(e,t){},195:function(e,t){},196:function(e,t){},197:function(e,t){},198:function(e,t){},200:function(e,t){},201:function(e,t){},202:function(e,t){},203:function(e,t){},204:function(e,t){},207:function(e,t,o){var a={"./locale":173,"./locale.js":173};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id=207}}]);