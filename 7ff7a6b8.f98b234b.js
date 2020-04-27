(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),i=(n(0),n(149)),o={id:"hash",title:"Hash"},c={id:"wiki/hash",title:"Hash",description:"This function can basically take text/data of any size and compute a fixed-size value called *hash*.",source:"@site/docs/wiki/hash.md",permalink:"/docs/wiki/hash",editUrl:"https://github.com/stove-labs/learn.stove-labs.com/edit/master/website/docs/wiki/hash.md",sidebar:"wiki",previous:{title:"Address",permalink:"/docs/wiki/address"},next:{title:"Implicit account",permalink:"/docs/wiki/implicit-account"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This function can basically take text/data of any size and compute a fixed-size value called ",Object(i.b)("em",{parentName:"p"},"hash"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"sha256 is a type of SHA-2 (Secure Hash Algorithm 2)\nsha256('never trust a skinny chef') = 36d87a683cfb033dcdb751723d5ef32085988716ce87a30c4ee3844992510a6a\nsha256('never trust a skiny chef')  = 40526579889ed880ceac08478fff0fc7dec022dd5843725b1fb3a26ea1f8a62f\n")),Object(i.b)("p",null,"The four most important properties of hashing functions to understand are:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"deterministic - the same input always returns the same output hash"),Object(i.b)("li",{parentName:"ol"},"uncorrelated - a small change in the message generates a completely different hash"),Object(i.b)("li",{parentName:"ol"},"unique - it is infeasible for two different messages to generate the same hash"),Object(i.b)("li",{parentName:"ol"},"one-way - it is infeasible to calculate or guess the input from the output hash")))}u.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(o,".").concat(b)]||p[b]||f[b]||i;return n?a.a.createElement(d,c({ref:t},l,{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);