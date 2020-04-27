(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(6),o=(r(0),r(144)),i={id:"key-pair",title:"Key pair"},c={id:"wiki/key-pair",title:"Key pair",description:"To control your [account](address) in the blockchain you need to have access to the *seed* or *secret key*. It is good practice to have a backup of the seed and therefore often a selection of words from a dictionary (seed phrases). The seed is then hashed and the resulting string of characters forms the secret key. ",source:"@site/docs/wiki/key-pair.md",permalink:"/docs/wiki/key-pair",editUrl:"https://github.com/stove-labs/learn.stove-labs.com/edit/master/website/docs/wiki/key-pair.md",sidebar:"wiki",previous:{title:"Hash",permalink:"/docs/wiki/hash"}},s=[],p={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To control your ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"address"}),"account")," in the blockchain you need to have access to the ",Object(o.b)("em",{parentName:"p"},"seed")," or ",Object(o.b)("em",{parentName:"p"},"secret key"),". It is good practice to have a backup of the seed and therefore often a selection of words from a dictionary (seed phrases). The seed is then hashed and the resulting string of characters forms the secret key.\nNext a so called key pair is derived using a mathematical function. As the name suggests, the key pair consists of two keys: the secret key (also ",Object(o.b)("em",{parentName:"p"},"private key"),") and public key. For each key there is only one other matching key that is calculated by elliptic curve multiplication in Tezos. Similar to hashing, this only goes one-way. You can derive from a secret key the corresponding public key, but not the other way around.\nEvery Tezos ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"address"}),"address")," starts with ",Object(o.b)("inlineCode",{parentName:"p"},"tz")," followed by either ",Object(o.b)("inlineCode",{parentName:"p"},"1"),",",Object(o.b)("inlineCode",{parentName:"p"},"2")," or ",Object(o.b)("inlineCode",{parentName:"p"},"3")," and the ",Object(o.b)("em",{parentName:"p"},"hash of the public key"),".  "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"                                      elliptic curve                                      \n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 hashing  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 multiplication \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 hashing  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502             \u2502\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25b6\u2502             \u2502\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25b6\u2502             \u2502\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25b6\u2502             \u2502\n\u2502    Seed     \u2502          \u2502 Secret Key  \u2502          \u2502 Public Key  \u2502          \u2502   Address   \u2502\n\u2502             \u2502\u25c0x x x x x\u2502(Private Key)\u2502\u25c0x x x x x\u2502             \u2502\u25c0x x x x x\u2502             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518          \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518          \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518          \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),Object(o.b)("p",null,"Commonly declared in ",Object(o.b)("inlineCode",{parentName:"p"},".config")," files:"),Object(o.b)("p",null,"pkh = public key hash,\nsk = secret key,\npk = public key"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'alice: {\n        pkh: "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",\n        sk: "edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq",\n        pk: "edpkvGfYw3LyB1UcCahKQk4rF2tvbMUk8GFiTuMjL75uGXrpvKXhjn"\n    }\n')))}l.isMDXComponent=!0},144:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(h,c({ref:t},p,{components:r})):a.a.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);