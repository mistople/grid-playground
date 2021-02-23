(this["webpackJsonpgrid-playground"]=this["webpackJsonpgrid-playground"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(6),o=n.n(i),s=n(3),l=n(5),C=n(2),r=n(0),d=function(e){var t={display:"grid",maxWidth:"100vw",gridTemplateColumns:"repeat(".concat(e.grid.columnCount,", 1fr)"),columnGap:"".concat(e.grid.columnGap,"px"),padding:"".concat(e.grid.paddingTopBottom,"px ").concat(e.grid.paddingLeftRight,"px"),gridTemplateRows:"repeat(".concat(e.grid.rowCount,", 1fr)"),rowGap:"".concat(e.grid.rowGap,"px")},n={background:"rgba(250, 134, 134, 0.3)",border:"1px dashed #fa8686"};var c=function(e,t){for(var c=[],a=0;a<e;a++){for(var i=[],o=0;o<t;o++)i.push(Object(r.jsx)("div",{style:n},o));c.push(i)}return c}(e.grid.rowCount,e.grid.columnCount);return Object(r.jsx)("main",{style:t,className:e.className,children:c})},j=(n(14),n(7)),h=n.n(j),u=(n(16),function(e){var t=e.gridState,n=e.className,a=Object(c.useState)("Copy"),i=Object(C.a)(a,2),o=i[0],s=i[1];Object(c.useLayoutEffect)((function(){h.a.highlightAll()}));var l=".grid-container { \n  grid-template-columns: repeat(".concat(t.columnCount,", 1fr);\n  grid-column-gap: ").concat(t.columnGap,"px;\n  grid-template-rows: repeat(").concat(t.rowCount,", 1fr);\n  grid-row-gap: ").concat(t.rowGap,"px;\n  padding: ").concat(t.paddingTopBottom,"px ").concat(t.paddingLeftRight,"px; \n}");return Object(r.jsxs)("div",{className:"".concat(n," code-sidebar"),children:[Object(r.jsxs)("header",{className:"code-sidebar-header",children:[Object(r.jsx)("h2",{children:"CSS"}),Object(r.jsx)("button",{className:"copy-code-button",onClick:function(){s("Copied"),setTimeout((function(){s("Copy")}),1500);var e=document.createElement("textarea");e.value=l,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),window.analytics.track("Copied the code",{codeSnippet:l})},children:o})]}),Object(r.jsx)("div",{className:"code-sidebar-content",children:Object(r.jsx)("pre",{children:Object(r.jsx)("code",{className:"language-css",children:l})})})]})}),b=(n(17),Object(r.jsx)("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",children:Object(r.jsx)("path",{d:"M6.2373 3.00083C7.2038 3.00083 7.9873 3.78433 7.9873 4.75083V19.2508C7.9873 20.2173 7.2038 21.0008 6.2373 21.0008H3.7373C2.77081 21.0008 1.9873 20.2173 1.9873 19.2508V4.75083C1.9873 3.83266 2.69441 3.07964 3.59378 3.00663L3.7373 3.00083H6.2373ZM20.2634 3.00083C21.2299 3.00083 22.0134 3.78433 22.0134 4.75083V19.2508C22.0134 20.2173 21.2299 21.0008 20.2634 21.0008H17.7634C16.7969 21.0008 16.0134 20.2173 16.0134 19.2508V4.75083C16.0134 3.78433 16.7969 3.00083 17.7634 3.00083H20.2634ZM13.2373 3C14.2038 3 14.9873 3.7835 14.9873 4.75V19.25C14.9873 20.2165 14.2038 21 13.2373 21H10.7373C9.77081 21 8.9873 20.2165 8.9873 19.25V4.75C8.9873 3.7835 9.77081 3 10.7373 3H13.2373ZM6.2373 4.50083H3.7373L3.67998 4.50743C3.56954 4.53334 3.4873 4.63248 3.4873 4.75083V19.2508C3.4873 19.3889 3.59923 19.5008 3.7373 19.5008H6.2373C6.37538 19.5008 6.4873 19.3889 6.4873 19.2508V4.75083C6.4873 4.61276 6.37538 4.50083 6.2373 4.50083ZM20.2634 4.50083H17.7634C17.6253 4.50083 17.5134 4.61276 17.5134 4.75083V19.2508C17.5134 19.3889 17.6253 19.5008 17.7634 19.5008H20.2634C20.4014 19.5008 20.5134 19.3889 20.5134 19.2508V4.75083C20.5134 4.61276 20.4014 4.50083 20.2634 4.50083ZM13.2373 4.5H10.7373C10.5992 4.5 10.4873 4.61193 10.4873 4.75V19.25C10.4873 19.3881 10.5992 19.5 10.7373 19.5H13.2373C13.3754 19.5 13.4873 19.3881 13.4873 19.25V4.75C13.4873 4.61193 13.3754 4.5 13.2373 4.5Z",fill:"#1e1e1e"})})),p=Object(r.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",className:"icon",children:[Object(r.jsx)("path",{d:"M20 6.24219C20 4.99955 18.9926 3.99219 17.75 3.99219H6.25C5.00736 3.99219 4 4.99955 4 6.24219V10.2422C4 10.6564 4.33579 10.9922 4.75 10.9922C5.16421 10.9922 5.5 10.6564 5.5 10.2422V6.24219C5.5 5.82797 5.83579 5.49219 6.25 5.49219H17.75C18.1642 5.49219 18.5 5.82797 18.5 6.24219V10.2422C18.5 10.6564 18.8358 10.9922 19.25 10.9922C19.6642 10.9922 20 10.6564 20 10.2422V6.24219Z",fill:"#212121"}),Object(r.jsx)("path",{d:"M17.2188 13.2197C17.4851 12.9534 17.9018 12.9292 18.1954 13.1471L18.2795 13.2197L20.6496 15.5871C20.858 15.7128 21 15.9629 21 16.2509C21 16.503 20.8911 16.726 20.7242 16.862L20.6493 16.9148L18.2795 19.282L18.1954 19.3546C17.9344 19.5482 17.5762 19.5506 17.3128 19.3618L17.2188 19.282L17.1462 19.1979C16.9526 18.9369 16.9502 18.5787 17.1391 18.3153L17.2188 18.2213L18.44 17H14.6562L14.5671 16.9931C14.2468 16.9434 14 16.6296 14 16.2499C14 15.8702 14.247 15.5565 14.5673 15.5068L14.6563 15.5H18.44L17.2188 14.2803L17.1462 14.1962C16.9284 13.9026 16.9526 13.4859 17.2188 13.2197Z",fill:"#212121"}),Object(r.jsx)("path",{d:"M6.78115 13.2226C7.04742 13.4889 7.07162 13.9055 6.85377 14.1991L6.78115 14.2832L5.56 15.5029H9.34367C9.7061 15.5029 10 15.8386 10 16.2528C10 16.6325 9.75319 16.9464 9.43288 16.9961L9.34383 17.0029H5.56L6.78115 18.2242C7.04742 18.4905 7.07162 18.9072 6.85377 19.2008L6.78115 19.2849C6.51488 19.5512 6.09822 19.5754 5.80461 19.3575L5.72049 19.2849L3.35072 16.9177C3.14219 16.7921 3 16.5419 3 16.2538C3 15.9658 3.14201 15.7157 3.35039 15.59L5.72049 13.2226C6.01338 12.9297 6.48826 12.9297 6.78115 13.2226Z",fill:"#212121"})]}),g=Object(r.jsxs)("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",children:[Object(r.jsx)("path",{d:"M4 3.77002C4 2.80352 4.7835 2.02002 5.75 2.02002H18.25C19.2165 2.02002 20 2.80352 20 3.77002V6.27002C20 7.23652 19.2165 8.02002 18.25 8.02002H5.75C4.7835 8.02002 4 7.23652 4 6.27002V3.77002ZM5.75 3.52002C5.61193 3.52002 5.5 3.63195 5.5 3.77002V6.27002C5.5 6.40809 5.61193 6.52002 5.75 6.52002H18.25C18.3881 6.52002 18.5 6.40809 18.5 6.27002V3.77002C18.5 3.63195 18.3881 3.52002 18.25 3.52002H5.75Z",fill:"#1e1e1e"}),Object(r.jsx)("path",{d:"M4 10.77C4 9.80352 4.7835 9.02002 5.75 9.02002H18.25C19.2165 9.02002 20 9.80352 20 10.77V13.27C20 14.2365 19.2165 15.02 18.25 15.02H5.75C4.7835 15.02 4 14.2365 4 13.27V10.77ZM5.75 10.52C5.61193 10.52 5.5 10.6319 5.5 10.77V13.27C5.5 13.4081 5.61193 13.52 5.75 13.52H18.25C18.3881 13.52 18.5 13.4081 18.5 13.27V10.77C18.5 10.6319 18.3881 10.52 18.25 10.52H5.75Z",fill:"#1e1e1e"}),Object(r.jsx)("path",{d:"M5.75 16.02C4.7835 16.02 4 16.8035 4 17.77V20.27C4 21.2365 4.7835 22.02 5.75 22.02H18.25C19.2165 22.02 20 21.2365 20 20.27V17.77C20 16.8035 19.2165 16.02 18.25 16.02H5.75ZM5.5 17.77C5.5 17.6319 5.61193 17.52 5.75 17.52H18.25C18.3881 17.52 18.5 17.6319 18.5 17.77V20.27C18.5 20.4081 18.3881 20.52 18.25 20.52H5.75C5.61193 20.52 5.5 20.4081 5.5 20.27V17.77Z",fill:"#1e1e1e"})]}),L=Object(r.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",className:"icon",children:[Object(r.jsx)("path",{d:"M13.2197 6.78115C12.9534 6.51488 12.9292 6.09822 13.1471 5.80461L13.2197 5.72049L15.5871 3.35039C15.7128 3.14201 15.9629 3 16.2509 3C16.503 3 16.726 3.10886 16.862 3.27578L16.9148 3.35073L19.282 5.72049L19.3546 5.80461C19.5482 6.0656 19.5506 6.42381 19.3618 6.6872L19.282 6.78115L19.1979 6.85377C18.9369 7.04742 18.5787 7.04981 18.3153 6.86094L18.2213 6.78115L17 5.56V9.34383L16.9931 9.43288C16.9434 9.75319 16.6296 10 16.2499 10C15.8702 10 15.5565 9.75305 15.5068 9.43272L15.5 9.34367V5.56L14.2803 6.78115L14.1962 6.85377C13.9026 7.07162 13.4859 7.04742 13.2197 6.78115Z",fill:"#212121"}),Object(r.jsx)("path",{d:"M13.2226 17.2188C13.4889 16.9526 13.9055 16.9284 14.1991 17.1462L14.2832 17.2188L15.5029 18.44V14.6563C15.5029 14.2939 15.8386 14 16.2528 14C16.6325 14 16.9464 14.2468 16.9961 14.5671L17.0029 14.6562V18.44L18.2242 17.2188C18.4905 16.9526 18.9072 16.9284 19.2008 17.1462L19.2849 17.2188C19.5512 17.4851 19.5754 17.9018 19.3575 18.1954L19.2849 18.2795L16.9177 20.6493C16.7921 20.8578 16.5419 21 16.2538 21C15.9658 21 15.7157 20.858 15.59 20.6496L13.2226 18.2795C12.9297 17.9866 12.9297 17.5117 13.2226 17.2188Z",fill:"#212121"}),Object(r.jsx)("path",{d:"M6.25 3.99219C5.00736 3.99219 4 4.99955 4 6.24219V17.7422C4 18.9848 5.00736 19.9922 6.25 19.9922H10.25C10.6642 19.9922 11 19.6564 11 19.2422C11 18.828 10.6642 18.4922 10.25 18.4922H6.25C5.83579 18.4922 5.5 18.1564 5.5 17.7422V6.24219C5.5 5.82797 5.83579 5.49219 6.25 5.49219H10.25C10.6642 5.49219 11 5.1564 11 4.74219C11 4.32797 10.6642 3.99219 10.25 3.99219H6.25Z",fill:"#212121"})]}),m=Object(r.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",className:"icon",children:[Object(r.jsx)("path",{d:"M12.75 15.5799V8.42013L13.7517 9.31055C14.0613 9.58574 14.5354 9.55785 14.8105 9.24826C15.0857 8.93868 15.0579 8.46462 14.7483 8.18944L12.4983 6.18944C12.2141 5.93684 11.7859 5.93684 11.5017 6.18944L9.25172 8.18944C8.94213 8.46462 8.91425 8.93868 9.18944 9.24826C9.46462 9.55785 9.93868 9.58574 10.2483 9.31055L11.25 8.42012V15.5799L10.2483 14.6895C9.93868 14.4143 9.46462 14.4421 9.18944 14.7517C8.91425 15.0613 8.94213 15.5354 9.25172 15.8106L11.5017 17.8106C11.5057 17.8141 11.5098 17.8177 11.5139 17.8211C11.6379 17.9268 11.7969 17.9928 11.971 17.9995C11.9897 18.0002 12.0084 18.0002 12.027 17.9995C12.2088 17.9931 12.3742 17.9219 12.5007 17.8084L14.7483 15.8106C15.0579 15.5354 15.0857 15.0613 14.8105 14.7517C14.5354 14.4421 14.0613 14.4143 13.7517 14.6895L12.75 15.5799Z",fill:"#1e1e1e"}),Object(r.jsx)("path",{d:"M17.75 21C19.5449 21 21 19.5449 21 17.75V6.25C21 4.45507 19.5449 3 17.75 3H6.25C4.45508 3 3 4.45507 3 6.25V17.75C3 19.5449 4.45508 21 6.25 21H17.75ZM19.5 17.75C19.5 18.7165 18.7165 19.5 17.75 19.5H6.25C5.2835 19.5 4.5 18.7165 4.5 17.75V17.5H9.64715L8.58734 16.558C8.40599 16.3967 8.26606 16.2063 8.16835 16H4.5L4.5 8H8.16834C8.26605 7.79371 8.40598 7.60324 8.58734 7.44203L9.64713 6.5L4.5 6.5V6.25C4.5 5.2835 5.2835 4.5 6.25 4.5L17.75 4.5C18.7165 4.5 19.5 5.2835 19.5 6.25V6.5L14.3528 6.5L15.4126 7.44203C15.594 7.60324 15.7339 7.79371 15.8316 8H19.5V16H15.8316C15.7339 16.2063 15.594 16.3967 15.4126 16.558L14.3528 17.5H19.5V17.75Z",fill:"#1e1e1e"})]}),x=Object(r.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",className:"icon",children:[Object(r.jsx)("path",{d:"M15.5799 11.25H8.42013L9.31055 10.2483C9.58574 9.93869 9.55785 9.46464 9.24826 9.18945C8.93868 8.91426 8.46462 8.94215 8.18944 9.25174L6.18944 11.5017C5.93684 11.7859 5.93684 12.2141 6.18944 12.4983L8.18944 14.7483C8.46462 15.0579 8.93868 15.0858 9.24827 14.8106C9.55785 14.5354 9.58574 14.0613 9.31055 13.7517L8.42012 12.75H15.5799L14.6895 13.7517C14.4143 14.0613 14.4421 14.5354 14.7517 14.8106C15.0613 15.0858 15.5354 15.0579 15.8106 14.7483L17.8106 12.4983C17.8141 12.4943 17.8177 12.4902 17.8211 12.4861C17.9264 12.3626 17.9922 12.2045 17.9994 12.0313C18.0002 12.0112 18.0002 11.991 17.9994 11.9709C17.9925 11.7899 17.9215 11.6254 17.8084 11.4993L15.8106 9.25174C15.5354 8.94215 15.0613 8.91426 14.7517 9.18945C14.4421 9.46464 14.4143 9.93869 14.6895 10.2483L15.5799 11.25Z",fill:"#1e1e1e"}),Object(r.jsx)("path",{d:"M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45508 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75ZM19.5 6.25C19.5 5.2835 18.7165 4.5 17.75 4.5H17.5V9.64713L16.558 8.58737C16.3968 8.406 16.2063 8.26607 16 8.16836V4.5H8V8.16836C7.7937 8.26606 7.60323 8.406 7.44202 8.58737L6.5 9.64713V4.5H6.25C5.2835 4.5 4.5 5.2835 4.5 6.25V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H6.5V14.3529L7.44202 15.4126C7.60323 15.594 7.7937 15.7339 8 15.8317V19.5H16V15.8316C16.2063 15.7339 16.3968 15.594 16.558 15.4126L17.5 14.3529V19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75V6.25Z",fill:"#1e1e1e"})]}),O=Object(r.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",children:Object(r.jsx)("path",{d:"M3 6.25C3 4.45507 4.45507 3 6.25 3H17.75C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25ZM6.25 4.5C5.2835 4.5 4.5 5.2835 4.5 6.25V8.5H8.5V4.5H6.25ZM4.5 10V14H8.5L8.5 10H4.5ZM10 10L10 14H14L14 10H10ZM15.5 10L15.5 14H19.5V10H15.5ZM14 15.5H10V19.5H14V15.5ZM15.5 19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75V15.5H15.5V19.5ZM15.5 8.5H19.5V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5H15.5V8.5ZM14 4.5H10V8.5H14V4.5ZM4.5 15.5V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H8.5V15.5H4.5Z",fill:"#212121"})}),w=Object(r.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",children:Object(r.jsx)("path",{d:"M8.06562 18.9434L14.5656 4.44339C14.7351 4.06542 15.1788 3.89637 15.5568 4.0658C15.9033 4.22112 16.0742 4.60695 15.9698 4.96131L15.9344 5.05698L9.43438 19.557C9.26495 19.935 8.82118 20.104 8.44321 19.9346C8.09673 19.7793 7.92581 19.3934 8.03024 19.0391L8.06562 18.9434L14.5656 4.44339L8.06562 18.9434ZM2.21967 11.4699L6.46967 7.21986C6.76256 6.92696 7.23744 6.92696 7.53033 7.21986C7.7966 7.48612 7.8208 7.90279 7.60295 8.1964L7.53033 8.28052L3.81066 12.0002L7.53033 15.7199C7.82322 16.0127 7.82322 16.4876 7.53033 16.7805C7.26406 17.0468 6.8474 17.071 6.55379 16.8531L6.46967 16.7805L2.21967 12.5305C1.9534 12.2642 1.9292 11.8476 2.14705 11.554L2.21967 11.4699L6.46967 7.21986L2.21967 11.4699ZM16.4697 7.21986C16.7359 6.95359 17.1526 6.92938 17.4462 7.14724L17.5303 7.21986L21.7803 11.4699C22.0466 11.7361 22.0708 12.1528 21.8529 12.4464L21.7803 12.5305L17.5303 16.7805C17.2374 17.0734 16.7626 17.0734 16.4697 16.7805C16.2034 16.5142 16.1792 16.0976 16.3971 15.804L16.4697 15.7199L20.1893 12.0002L16.4697 8.28052C16.1768 7.98762 16.1768 7.51275 16.4697 7.21986Z",fill:"#212121"})}),V=(n(18),function(e){var t=e.children;return Object(r.jsx)("section",{className:"section-container",children:t})});n(19);function v(e){e.target.select()}var H=function(e){var t=e.label,n=e.type,c=e.onChange,a=e.icon,i=e.name,o=e.value;return Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{"aria-label":t,htmlFor:t,children:t}),Object(r.jsxs)("div",{className:"input-with-icon",children:[a,Object(r.jsx)("input",{className:"input",name:i,type:n,id:t,value:o,onFocus:v,onChange:c})]})]})},f=(n(20),function(e){var t=e.gridState,n=e.onInputChange,c=e.className;return Object(r.jsxs)("div",{className:"".concat(c," editor-sidebar"),children:[Object(r.jsx)("header",{className:"editor-header",children:Object(r.jsx)("h1",{children:"Grid Playground"})}),Object(r.jsxs)(V,{children:[Object(r.jsx)("h2",{children:"Columns"}),Object(r.jsxs)("div",{className:"input-row",children:[Object(r.jsx)(H,{label:"Column count",name:"columnCount",type:"number",icon:b,onChange:n,value:t.columnCount}),Object(r.jsx)(H,{label:"Column gap",name:"columnGap",type:"number",icon:p,onChange:n,value:t.columnGap})]})]}),Object(r.jsxs)(V,{children:[Object(r.jsx)("h2",{children:"Rows"}),Object(r.jsxs)("div",{className:"input-row",children:[Object(r.jsx)(H,{label:"Row count",name:"rowCount",type:"number",icon:g,onChange:n,value:t.rowCount}),Object(r.jsx)(H,{label:"Row gap",name:"rowGap",type:"number",icon:L,onChange:n,value:t.rowGap})]})]}),Object(r.jsxs)(V,{children:[Object(r.jsx)("h2",{children:"Container"}),Object(r.jsxs)("div",{className:"input-row",children:[Object(r.jsx)(H,{label:"Vertical",name:"paddingTopBottom",type:"number",icon:m,onChange:n,value:t.paddingTopBottom}),Object(r.jsx)(H,{label:"Horizontal",name:"paddingLeftRight",type:"number",icon:x,onChange:n,value:t.paddingLeftRight})]})]})]})}),M=(n(21),function(e){var t=e.onEditorButtonClick,n=e.onCodeButtonClick,c=e.className;return Object(r.jsxs)("header",{className:"".concat(c," app-header"),children:[Object(r.jsx)("button",{"aria-label":"Edit grid",onClick:t,children:O}),Object(r.jsx)("h1",{children:"Grid Playground"}),Object(r.jsx)("button",{"aria-label":"View code",onClick:n,children:w})]})}),Z=n(8),N=1024,y={columnCount:4,columnGap:20,paddingTopBottom:32,paddingLeftRight:32,rowCount:1,rowGap:20},B=function(){var e=Object(c.useState)(!1),t=Object(C.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),o=Object(C.a)(i,2),j=o[0],h=o[1],b=Object(c.useState)(y),p=Object(C.a)(b,2),g=p[0],L=p[1],m=Object(Z.useMediaQuery)({minWidth:N});function x(){a(!n),window.analytics.track("Toggled code sidebar",{isCodeSidebarVisible:n})}function O(){h(!j),window.analytics.track("Toggled editor sidebar",{isEditorSidebarVisible:j})}function w(e){var t=e.target.name,n=e.target.value;L(Object(l.a)(Object(l.a)({},g),{},Object(s.a)({},t,n))),window.analytics.track("Change ".concat(t),{value:n})}var V=Object(r.jsxs)("div",{className:"overlay-container",children:[Object(r.jsx)(f,{gridState:g,onInputChange:w,className:"overlay-editor"}),Object(r.jsx)("div",{className:"overlay",onClick:O})]}),v=Object(r.jsx)(f,{gridState:g,onInputChange:w,className:"editor"}),H=Object(r.jsxs)("div",{className:"overlay-container",children:[Object(r.jsx)(u,{gridState:g,className:"overlay-code"}),Object(r.jsx)("div",{className:"overlay",onClick:x})]}),B=Object(r.jsx)(u,{gridState:g,className:"code"});return Object(r.jsxs)("div",{className:"app",children:[!m&&Object(r.jsx)(M,{className:"app-header-main",onCodeButtonClick:x,onEditorButtonClick:O}),!m&&j?V:v,Object(r.jsx)(d,{className:"grid",grid:g}),!m&&n?H:B]})},S=(n(22),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))});o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(B,{})}),document.getElementById("root")),S()}],[[23,1,2]]]);
//# sourceMappingURL=main.abed8b22.chunk.js.map