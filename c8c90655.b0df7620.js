(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(6),a=(r(0),r(161)),c={id:"transaction",title:"Transaction"},i={id:"knowledge/tezos_protocol/operations/transaction",title:"Transaction",description:"Transactions are a subset of [operations](operations). There are two types of transactions: ",source:"@site/docs/knowledge/tezos_protocol/operations/transaction.md",permalink:"/docs/knowledge/tezos_protocol/operations/transaction",editUrl:"https://github.com/stove-labs/learn.stove-labs.com/edit/master/website/docs/knowledge/tezos_protocol/operations/transaction.md",sidebar:"wiki",previous:{title:"Revelation",permalink:"/docs/knowledge/tezos_protocol/operations/reveal-operation"},next:{title:"Taquito SDK",permalink:"/docs/knowledge/references/taquito"}},s=[],p={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Transactions are a subset of ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"operations"}),"operations"),". There are two types of transactions:\n1. Transfer funds ",Object(a.b)("em",{parentName:"p"},"tez"),"\n2. Invoke/interact with ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../../smart_contract/smart-contract"}),"smart contracts")),Object(a.b)("p",null,"Before a transaction gets rejected from the mempool of a ",Object(a.b)("em",{parentName:"p"},"node"),", its max life-time is 60 blocks."))}l.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,m=u["".concat(c,".").concat(b)]||u[b]||f[b]||a;return r?o.a.createElement(m,i({ref:t},p,{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);