(window.webpackJsonp=window.webpackJsonp||[]).push([[11,48],{148:function(e,a,t){"use strict";t.r(a);t(12);var n=t(0),l=t.n(n),s=t(149),c=t(150),o=t(47),i=t(154),r=t(1),m=t(152),u=t.n(m),d=t(163),b=t(164),p=t(151),h=t(155),k=t(106),f=t.n(k);function E({item:e,onItemClick:a,collapsible:t}){const{items:s,href:c,label:o,type:i}=e,[m,d]=Object(n.useState)(e.collapsed),[b,k]=Object(n.useState)(null);e.collapsed!==b&&(k(e.collapsed),d(e.collapsed));const f=Object(n.useCallback)(e=>{e.preventDefault(),d(e=>!e)});switch(i){case"category":return s.length>0&&l.a.createElement("li",{className:u()("menu__list-item",{"menu__list-item--collapsed":m}),key:o},l.a.createElement("a",{className:u()("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&!e.collapsed}),href:"#!",onClick:t?f:void 0},o),l.a.createElement("ul",{className:"menu__list"},s.map(e=>l.a.createElement(E,{key:e.label,item:e,onItemClick:a,collapsible:t}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:o},l.a.createElement(p.a,Object(r.a)({className:"menu__link",to:c},Object(h.a)(c)?{activeClassName:"menu__link--active",exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"}),o))}}var g=function(e){const[a,t]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:s,hideOnScroll:o=!1}={}}}={},isClient:i}=Object(c.a)(),{logoLink:m,logoLinkProps:h,logoImageUrl:k,logoAlt:g}=Object(b.a)(),{docsSidebars:_,path:v,sidebar:C,sidebarCollapsible:w}=e;if(Object(d.a)(a),!C)return null;const N=_[C];if(!N)throw new Error(`Cannot find the sidebar "${C}" in the sidebar config!`);return w&&N.forEach(e=>function e(a,t){const{items:n,href:l,type:s}=a;switch(s){case"category":{const l=n.map(a=>e(a,t)).filter(e=>e).length>0;return a.collapsed=!l,l}case"link":default:return l===t}}(e,v)),l.a.createElement("div",{className:f.a.sidebar},o&&l.a.createElement(p.a,Object(r.a)({className:f.a.sidebarLogo,to:m},h),null!=k&&l.a.createElement("img",{key:i,src:k,alt:g}),null!=s&&l.a.createElement("strong",null,s)),l.a.createElement("div",{className:u()("menu","menu--responsive",f.a.menu,{"menu--show":a})},l.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{t(!a)}},a?l.a.createElement("span",{className:u()(f.a.sidebarMenuIcon,f.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:f.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},N.map(e=>l.a.createElement(E,{key:e.label,item:e,onItemClick:()=>{t(!1)},collapsible:w})))))},_=t(157),v=t(160),C=t(159),w=t(111),N=t.n(w);a.default=function(e){const{route:a,docsMetadata:t,location:n}=e,r=a.routes.find(e=>Object(C.b)(n.pathname,e))||{},{permalinkToSidebar:m,docsSidebars:u,version:d}=t,b=m[r.path],{siteConfig:{themeConfig:p={}}={},isClient:h}=Object(c.a)(),{sidebarCollapsible:k=!0}=p;return 0===Object.keys(r).length?l.a.createElement(v.default,e):l.a.createElement(i.a,{version:d,key:h},l.a.createElement("div",{className:N.a.docPage},b&&l.a.createElement("div",{className:N.a.docSidebarContainer},l.a.createElement(g,{docsSidebars:u,path:r.path,sidebar:b,sidebarCollapsible:k})),l.a.createElement("main",{className:N.a.docMainContainer},l.a.createElement(s.a,{components:_.a},Object(o.a)(a.routes)))))}},160:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(154);a.default=function(){return l.a.createElement(s.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);