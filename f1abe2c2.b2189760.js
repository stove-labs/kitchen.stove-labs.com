(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{155:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return o})),r.d(e,"metadata",(function(){return i})),r.d(e,"rightToc",(function(){return s})),r.d(e,"default",(function(){return p}));var n=r(1),a=r(6),c=(r(0),r(161)),o={id:"smart-contract",title:"Overview"},i={id:"knowledge/smart_contract/smart-contract",title:"Overview",description:"A smart contract is a special type of account. Its address always starts with the letters `KT1`.  The smart contract account is created by *originating* it from an [*implicit* account](../tezos_protocol/implicit-account). That's why it is also called `originated account`. It has the smart contract code attached to it. Whenever a smart contract receives a transaction (an instruction), its code is invoked and executed. The contract code is written in a Tezos specific language called [Michelson](michelson). ",source:"@site/docs/knowledge/smart_contract/smart-contract.md",permalink:"/docs/knowledge/smart_contract/smart-contract",editUrl:"https://github.com/stove-labs/learn.stove-labs.com/edit/master/website/docs/knowledge/smart_contract/smart-contract.md",sidebar:"wiki",previous:{title:"Tezos starter kit",permalink:"/docs/wiki/workstation-setup/starter-kit"},next:{title:"Entrypoints",permalink:"/docs/knowledge/smart_contract/entrypoints"}},s=[{value:"Anatomy of a smart contract",id:"anatomy-of-a-smart-contract",children:[{value:"Entrypoints",id:"entrypoints",children:[]}]}],l={rightToc:s};function p(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A smart contract is a special type of account. Its address always starts with the letters ",Object(c.b)("inlineCode",{parentName:"p"},"KT1"),".  The smart contract account is created by ",Object(c.b)("em",{parentName:"p"},"originating")," it from an ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"../tezos_protocol/implicit-account"}),Object(c.b)("em",{parentName:"a"},"implicit")," account"),". That's why it is also called ",Object(c.b)("inlineCode",{parentName:"p"},"originated account"),". It has the smart contract code attached to it. Whenever a smart contract receives a transaction (an instruction), its code is invoked and executed. The contract code is written in a Tezos specific language called ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"michelson"}),"Michelson"),". "),Object(c.b)("h2",{id:"anatomy-of-a-smart-contract"},"Anatomy of a smart contract"),Object(c.b)("h3",{id:"entrypoints"},"Entrypoints"))}p.isMDXComponent=!0},161:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=a.a.createContext({}),p=function(t){var e=a.a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i({},e,{},t)),r},u=function(t){var e=p(t.components);return a.a.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=Object(n.forwardRef)((function(t,e){var r=t.components,n=t.mdxType,c=t.originalType,o=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||c;return r?a.a.createElement(f,i({ref:e},l,{components:r})):a.a.createElement(f,i({ref:e},l))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);