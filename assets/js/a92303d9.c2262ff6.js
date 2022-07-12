"use strict";(self.webpackChunkavdan_os_docs=self.webpackChunkavdan_os_docs||[]).push([[294],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=d(n),m=r,v=u["".concat(s,".").concat(m)]||u[m]||l[m]||o;return n?a.createElement(v,i(i({ref:e},p),{},{components:n})):a.createElement(v,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7783:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Intro to Nadva",c={unversionedId:"nadva-intro",id:"nadva-intro",title:"Intro to Nadva",description:"\ud83d\udea7 Under Construction \ud83d\udea7",source:"@site/docs/nadva/nadva-intro.mdx",sourceDirName:".",slug:"/nadva-intro",permalink:"/nadva/nadva-intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Multitasking in AvdanOS",permalink:"/nadva/category/multitasking-in-avdanos"}},s={},d=[],p={toc:d};function l(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"intro-to-nadva"},"Intro to Nadva"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h3",{parentName:"div",id:"-under-construction-"},"\ud83d\udea7 Under Construction \ud83d\udea7"),(0,r.kt)("p",{parentName:"div"},"This section of documentation is still under construction \u2014 it is not formalized and may change.\nHelp contribute to it on our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Avdan-OS/docsite/tree/dev/docs/nadva/nadva-intro.mdx"},"GitHub"),"."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"'Nadva' \u2014 isn't that 'Avdan' backwards ? ")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Nadva")," is AvdanOS' display server. Nadva is planned to be a session ",(0,r.kt)("a",{parentName:"p",href:"https://wayland.freedesktop.org"},"Wayland compositor"),"."),(0,r.kt)("p",null,"In Avdan's ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=tXFEiw1aJTw"},"concept video"),",\nyou can see windows interacting in ways which can reminisce both traditional tilling window managers, and floating-window managers."))}l.isMDXComponent=!0}}]);