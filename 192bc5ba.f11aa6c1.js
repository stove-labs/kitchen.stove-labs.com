(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(6),o=(n(0),n(161)),i={id:"signature",title:"Signatures"},c={id:"knowledge/tezos_protocol/cryptography/signature",title:"Signatures",description:"Public [key cryptography](key-pair) and its digital signatures belong to the building blocks of a blockchain. They are always used when a piece of information needs to be written to the blockchain ledger. So called [transactions](../operations/transaction) carry the instructions to do so, but a digital signature is required to proof that it comes from the owner or authorized entity. In other words, the transaction initiator needs to authorize the action. The [protocol](../protocol) takes care of *validating* or checking of the correctness of the signature. ",source:"@site/docs/knowledge/tezos_protocol/cryptography/signature.mdx",permalink:"/docs/knowledge/tezos_protocol/cryptography/signature",editUrl:"https://github.com/stove-labs/learn.stove-labs.com/edit/master/website/docs/knowledge/tezos_protocol/cryptography/signature.mdx",sidebar:"wiki",previous:{title:"Key pair",permalink:"/docs/knowledge/tezos_protocol/cryptography/key-pair"},next:{title:"Protocol Architecture",permalink:"/docs/knowledge/tezos_protocol/protocol"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Public ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"key-pair"}),"key cryptography")," and its digital signatures belong to the building blocks of a blockchain. They are always used when a piece of information needs to be written to the blockchain ledger. So called ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../operations/transaction"}),"transactions")," carry the instructions to do so, but a digital signature is required to proof that it comes from the owner or authorized entity. In other words, the transaction initiator needs to authorize the action. The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../protocol"}),"protocol")," takes care of ",Object(o.b)("em",{parentName:"p"},"validating")," or checking of the correctness of the signature. "),Object(o.b)("p",null,"Consider that Alice has created two keys, a ",Object(o.b)("strong",{parentName:"p"},"private")," and a ",Object(o.b)("strong",{parentName:"p"},"public")," key. Those are not the same keys, but they are mathematically connected",Object(o.b)("sup",Object(r.a)({parentName:"p"},{id:"fnref-1"}),Object(o.b)("a",Object(r.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),". She keeps her private key, as the name suggests, private at all times. She uses it to digitally sign a message (or transaction). Anyone with Alice' pubilc key is able to verify that it was signed with the corresponding private key. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"                          different keys, but                            \n                     \u250c\u2500\u2500\u2500mathematically linked\u2500\u2500\u2500\u2500\u2510                      \n                     \u2502                            \u2502                      \n                     \u25bc                            \u25bc                      \n               \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                \n               \u2502           \u2502                \u2502           \u2502                \n               \u2502private key\u2502                \u2502public key \u2502                \n               \u2502           \u2502                \u2502           \u2502                \n               \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                \n                     \u2502                            \u2502                      \n                     \u2502                            \u2502                      \n                     \u2502                            \u2502                      \n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u2502      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510       \u2502       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502             \u2502      \u25bc      \u2502             \u2502       \u25bc       \u2502             \u2502\n\u2502             \u2502     .\u2500.     \u2502             \u2502      .\u2500.      \u2502             \u2502\n\u2502original text\u2502\u2500\u2500\u2500\u2500( x )\u2500\u2500\u2500\u25b6\u2502 signed text \u2502\u2500\u2500\u2500\u2500\u2500(   )\u2500\u2500\u2500\u2500\u25b6\u2502verified text\u2502\n\u2502             \u2502     `\u2500'     \u2502             \u2502      `\u2500'      \u2502             \u2502\n\u2502             \u2502   signing   \u2502             \u2502   verifying   \u2502             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518             \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518               \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),Object(o.b)("p",null,"In practice, the public key is ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"key-pair"}),"linked")," to an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"address"}),"address"),". The address represents an account that holds a balance. Whenever a user instructs to change its balance by performing a transfer transaction to another user, the protocol that is executed by a ",Object(o.b)("em",{parentName:"p"},"node"),", performs a check on the signature. In other words, it makes sure that the owner of the account authorizes the change. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"                                                                                                     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \n                                                                                                     \u2502                 \u2502   \n                                                                                                     \u2502   Secret Key    \u2502   \n                                                                                                     \u2502                 \u2502   \n                                                                                                     \u2502                 \u2502   \n                                                                                                     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \n                                                                                                              \u2502            \n                                                                                                              \u2502            \n                                                                                                              \u25bc            \n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \n\u2502                   \u2502     \u2502                 \u2502      \u2502                 \u2502     \u2502                 \u2502       \u2502                 \u2502   \n\u2502Transaction in JSON\u2502     \u2502 Transaction in  \u2502      \u2502  Add watermark  \u2502     \u2502  Balke2b Hash   \u2502       \u2502  Ed25519 Sign   \u2502   \n\u2502                   \u2502\u2500\u2500\u2500\u2500\u25b6\u2502     Binary      \u2502\u2500\u2500\u2500\u2500\u2500\u25b6\u2502                 \u2502\u2500\u2500\u2500\u2500\u25b6\u2502                 \u2502\u2500\u2500\u2500\u2500\u2500\u25b6 \u2502                 \u2502\u2500\u2500\u2510\n\u2502                   \u2502     \u2502                 \u2502      \u2502                 \u2502     \u2502                 \u2502       \u2502                 \u2502  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\n                                   \u2502                                                                                      \u2502\n                                   \u2502                                                                                      \u2502\n                                   \u2502                                                                                      \u2502\n                                   \u2502               \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                \u2502\n                                   \u2502               \u2502     Signed      \u2502                 \u2502                 \u2502                \u2502\n                                   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502   transaction   \u2502 \u25c0\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2502    Signature    \u2502\u25c0\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                                   \u2502                 \u2502                 \u2502                 \u2502                 \n                                                   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                 \n                                                            \u2502                                                              \n                                                            \u2502                                                              \n                                                        Injection                                                          \n                                                           RPC                                                             \n                                                            \u2502                                                              \n                                                            \u25bc                                                              \n                                      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                                         \n                                      \u2502 _____                _  _         _      \u2502                                         \n                                      \u2502|_   _|__ ______ ___ | \\| |___  __| |___  \u2502                                         \n                                      \u2502  | |/ -_)_ / _ (_-< | .` / _ \\/ _` / -_) \u2502                                         \n                                      \u2502  |_|\\___/__\\___/__/ |_|\\_\\___/\\__,_\\___| \u2502                                         \n                                      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                                         \n")),Object(o.b)("div",{className:"footnotes"},Object(o.b)("hr",{parentName:"div"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",Object(r.a)({parentName:"ol"},{id:"fn-1"}),"Ed25519, Secp256k1 (ECDSA), NIST P256 (ECDSA) learn more by reading up on ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"address"}),"addresses"),Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}l.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(h,c({ref:t},p,{components:n})):a.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);