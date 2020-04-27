(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),i=(n(0),n(149)),c={id:"address",title:"Address"},o={id:"wiki/address",title:"Address",description:"## Implicit account",source:"@site/docs/wiki/address.md",permalink:"/docs/wiki/address",editUrl:"https://github.com/stove-labs/learn.stove-labs.com/edit/master/website/docs/wiki/address.md",sidebar:"wiki",previous:{title:"Tezos starter kit",permalink:"/docs/wiki/workstation-setup/starter-kit"},next:{title:"Hash",permalink:"/docs/wiki/hash"}},p=[{value:"Implicit account",id:"implicit-account",children:[]},{value:"Originated account",id:"originated-account",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"implicit-account"},"Implicit account"),Object(i.b)("p",null,"The address of an ",Object(i.b)("em",{parentName:"p"},"implicit")," account takes the following shape: "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"tz"),"+ ",Object(i.b)("inlineCode",{parentName:"p"},"signature scheme"),"+ ",Object(i.b)("inlineCode",{parentName:"p"},"hash of public key")),Object(i.b)("p",null,"It starts with ",Object(i.b)("inlineCode",{parentName:"p"},"tz")," and is followed by the signature scheme ",Object(i.b)("em",{parentName:"p"},"1"),", ",Object(i.b)("em",{parentName:"p"},"2")," or ",Object(i.b)("em",{parentName:"p"},"3")," and the hash of the public key."),Object(i.b)("p",null,"The 3 signature schemes depend on the elliptic curves used"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tz1")," for Ed25519"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tz2")," for Secp256k1 (ECDSA)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tz3")," for NIST P256 (ECDSA) ")),Object(i.b)("h2",{id:"originated-account"},"Originated account"),Object(i.b)("p",null,"The address of an ",Object(i.b)("em",{parentName:"p"},"originated")," account, a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"smart-contract"}),"smart contract"),", always starts with ",Object(i.b)("inlineCode",{parentName:"p"},"KT1"),"."))}s.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,o({ref:t},l,{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);