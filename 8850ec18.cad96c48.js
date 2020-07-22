(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(163)),c=n(174),i={id:"key-pair",title:"Key pair"},s={id:"knowledge/tezos_protocol/cryptography/key-pair",isDocsHomePage:!1,title:"Key pair",description:"To control your account in the blockchain you need to have access to the seed or secret key. It is good practice to have a backup of the seed and therefore often a selection of words from a dictionary (seed phrases). The seed is then hashed and the resulting string of characters forms the secret key.",source:"@site/docs/knowledge/tezos_protocol/cryptography/key-pair.mdx",permalink:"/docs/knowledge/tezos_protocol/cryptography/key-pair",editUrl:"https://github.com/stove-labs/learn.stove-labs.com/edit/master/website/docs/knowledge/tezos_protocol/cryptography/key-pair.mdx",sidebar:"wiki",previous:{title:"Hash",permalink:"/docs/knowledge/tezos_protocol/cryptography/hash"},next:{title:"Signatures",permalink:"/docs/knowledge/tezos_protocol/cryptography/signature"}},p=[],l={rightToc:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To control your ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"address"}),"account")," in the blockchain you need to have access to the ",Object(r.b)("em",{parentName:"p"},"seed")," or ",Object(r.b)("em",{parentName:"p"},"secret key"),". It is good practice to have a backup of the seed and therefore often a selection of words from a dictionary (seed phrases). The seed is then hashed and the resulting string of characters forms the secret key.\nNext a so called key pair is derived using a mathematical function. As the name suggests, the key pair consists of two keys: the secret key (also ",Object(r.b)("em",{parentName:"p"},"private key"),") and public key. For each key there is only one other matching key that is calculated by elliptic curve multiplication in Tezos. Similar to hashing, this only goes one-way. You can derive from a secret key the corresponding public key, but not the other way around.\nEvery Tezos ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"address"}),"address")," of an implicit account starts with ",Object(r.b)("inlineCode",{parentName:"p"},"tz")," followed by either ",Object(r.b)("inlineCode",{parentName:"p"},"1"),",",Object(r.b)("inlineCode",{parentName:"p"},"2")," or ",Object(r.b)("inlineCode",{parentName:"p"},"3")," and the ",Object(r.b)("em",{parentName:"p"},"hash of the public key"),".  Originated accounts always start with capital letters ",Object(r.b)("inlineCode",{parentName:"p"},"KT"),"."),Object(r.b)("p",null,"The 3 signature schemes for implicit accounts depend on the elliptic curves used, in particular:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tz1")," for Ed25519"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tz2")," for Secp256k1 (ECDSA)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tz3")," for NIST P256 (ECDSA) ")),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Keep the ",Object(r.b)("strong",{parentName:"p"},"seed")," and ",Object(r.b)("strong",{parentName:"p"},"secret key")," always to yourself. Never share it with anyone, otherwise someone else will gain access to your account."))),Object(r.b)("center",null,Object(r.b)(c.a,{chart:'\ngraph LR\n\tseed["Seed"]--\x3e|hashing|secret["Secret Key<br>(Private Key)"]\n\tsecret-.->|"\u2a02"|seed\n\tsecret--\x3e|elliptic curve <br>manipulation|public["Public Key"]\n\tpublic-.->|"\u2a02"|secret\n\tpublic--\x3e|hashing|address["Address"]\n\taddress-.->|"\u2a02"|public\n\tclass seed,secret nodeDanger\n\tclass public,address nodeWarning\n',mdxType:"Mermaid"})),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'alice: {\n        pkh: "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",\n        sk: "edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq",\n        pk: "edpkvGfYw3LyB1UcCahKQk4rF2tvbMUk8GFiTuMjL75uGXrpvKXhjn"\n    }\n')),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Do not mix up ",Object(r.b)("em",{parentName:"p"},"pk")," with private key. Common abbreviations in the Tezos ecosystem and often seen in ",Object(r.b)("inlineCode",{parentName:"p"},".config")," files are:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"pkh")," = ",Object(r.b)("strong",{parentName:"li"},"p"),"ublic ",Object(r.b)("strong",{parentName:"li"},"k"),"ey ",Object(r.b)("strong",{parentName:"li"},"h"),"ash"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"sk")," = ",Object(r.b)("strong",{parentName:"li"},"s"),"ecret ",Object(r.b)("strong",{parentName:"li"},"k"),"ey"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"pk")," = ",Object(r.b)("strong",{parentName:"li"},"p"),"ublic ",Object(r.b)("strong",{parentName:"li"},"k"),"ey")))))}b.isMDXComponent=!0},174:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(190),c=n.n(r);c.a.initialize({startOnLoad:!0,themeCSS:"\n\t\t\t.node rect { fill: #f7f8fe; stroke: #000000 } \n\t\t\t.node polygon { fill: #f7f8fe; stroke: #000000 } \n\t\t\t.node path { fill: #f7f8fe; stroke: #000000 } \n\t\t\t.nodeWarning > rect{fill:#FFD03B; stroke:#000000;}\n\t\t\t.nodeDanger > rect{fill: #F86D70; stroke:#000000;} \n\t\t\t.nodeTezos > .label{color: #ffffff} \n\t\t\t.nodeTezos > rect {fill: #536DFE}\n\t\t"});t.a=({chart:e})=>(Object(a.useEffect)(()=>{c.a.contentLoaded()},[]),o.a.createElement("div",{className:"mermaid"},e))},191:function(e,t){},192:function(e,t){},193:function(e,t){},194:function(e,t){},195:function(e,t){},196:function(e,t){},197:function(e,t){},198:function(e,t){},200:function(e,t){},201:function(e,t){},202:function(e,t){},203:function(e,t){},204:function(e,t){},207:function(e,t,n){var a={"./locale":173,"./locale.js":173};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=207}}]);