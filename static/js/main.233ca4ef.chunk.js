(this.webpackJsonp95Recipes=this.webpackJsonp95Recipes||[]).push([[0],{104:function(e,n,t){"use strict";t.r(n);var i,r,c,a,o,s,l,d=t(0),u=t(17),A=t.n(u),j=t(25),g=t(16),p=t(11),h=t(3),b=t(107),f=t(28),O=t(8),v=(t(75),t(10)),m=t(61),w=t(109),x=t(20),C=t(7),I=t(65),L=t(2),y=["name","slug"],S=h.c.div(i||(i=Object(p.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n\n  width: 25%;\n  margin-bottom: 4px;\n\n  text-decoration: none;\n  color: inherit;\n"]))),K=h.c.span(r||(r=Object(p.a)(["\n  word-break: break-word;\n"]))),q=function(e){var n=e.name,t=e.slug,i=Object(I.a)(e,y),r=Object(O.f)();return Object(L.jsxs)(S,Object(v.a)(Object(v.a)({onClick:function(){return r.push("".concat("","/").concat(t))}},i),{},{children:[Object(L.jsx)(C.f,{variant:"32x32_4",style:{marginBottom:4}}),Object(L.jsx)(K,{children:"".concat(n,".txt")})]}))},k=h.c.div(c||(c=Object(p.a)(["\n  display: flex;\n  grid-template-columns: repeat(4, 1fr);\n  flex-wrap: wrap;\n"]))),B=h.c.span(a||(a=Object(p.a)(["\n  margin-bottom: -10px;\n  margin-top: 5px;\n"]))),M=function(e){var n=e.recipes,t=(e.setSelectedRecipe,e.openModal,e.openFilterModal),i=e.filter,r=e.isMobile,c=i.length>0?n.filter((function(e){return e.ingredients.some((function(e){return i.includes(e.Ingredientes)}))})):n,a={defaultPosition:r?{x:0,y:50}:{x:window.innerWidth/2-250,y:100},width:r?window.innerWidth-40:500};return Object(L.jsxs)(m.a,Object(v.a)(Object(v.a)({title:"".concat(Object.keys(n).length," recipes"),icon:Object(L.jsx)(C.m,{variant:"16x16_4"}),style:{marginLeft:20}},a),{},{menu:[{name:"File",list:Object(L.jsx)(w.a,{children:Object(L.jsx)(w.a.Item,{onClick:function(){return t(!0)},children:"Filter"})})}],children:[Object(L.jsx)(x.a,{bg:"white",boxShadow:"in",height:"100%",p:10,style:{overflowY:"auto",maxHeight:"50vh"},children:Object(L.jsx)(k,{children:Object.values(c).map((function(e){var n=e.name,t=e.slug;return Object(L.jsx)(q,{name:n,slug:t},n)}))})}),i.length>0&&Object(L.jsxs)(B,{children:["Filter: ",i.join(", ")]})]}))},Q=h.c.a.attrs({target:"_blank",rel:"noopener noreferrer"})(o||(o=Object(p.a)(["\n  flex-grow: 1;\n  height: 30;\n  padding-top: 9;\n  text-decoration: none;\n  color: inherit;\n"]))),G=function(e){var n=e.spreadsheetID,t=e.onUpdate;return Object(L.jsxs)(w.a,{children:[Object(L.jsx)(w.a.Item,{icon:Object(L.jsx)(C.d,{variant:"32x32_4"}),onClick:t,children:"Update"}),Object(L.jsx)(w.a.Item,{icon:Object(L.jsx)(C.g,{variant:"32x32_4"}),children:Object(L.jsx)(Q,{href:"https://docs.google.com/spreadsheets/d/".concat(n,"/edit?usp=sharing"),children:"Spreadsheet"})}),Object(L.jsx)(w.a.Divider,{}),Object(L.jsx)(w.a.Item,{icon:Object(L.jsx)(C.e,{variant:"32x32_4",style:{padding:4}}),onClick:t,children:Object(L.jsx)(Q,{href:"https://ggdaltoso.dev",children:"My Blog"})}),Object(L.jsx)(w.a.Item,{icon:Object(L.jsx)(C.c,{variant:"32x32_4"}),children:Object(L.jsx)(Q,{href:"https://github.com/ggdaltoso/95Recipes",children:"Github"})})]})},P=t(111),W=t(110),E=function(e){var n=e.allIngredients,t=e.toggleFilterModal,i=e.setAllIngredients,r=e.isMobile,c={width:r?window.innerWidth:500,height:window.innerHeight-(r?30:130)};return Object(L.jsx)(m.a,Object(v.a)(Object(v.a)({},c),{},{style:{top:0},icon:Object(L.jsx)(C.b,{}),title:"Filter",closeModal:function(){return t(!1)},buttons:[{value:"Filter",onClick:function(){return t(!1)}}],children:Object(L.jsx)(P.a,{legend:"Ingredients",style:{height:1,overflowY:"auto",flexGrow:1},children:Object(L.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:n.map((function(e){var t=e.name,r=e.checked;return Object(L.jsx)("div",{style:{width:"50%"},children:Object(L.jsx)(W.a,{checked:r,onChange:function(){var e=n.map((function(e){return e.name===t?{name:t,checked:!e.checked}:e}));i(e)},children:t})},t)}))})})}))},Y=t(24),z=t.n(Y),J=t(62),U=t(33),N=t(64),D=t(59),R=t.n(D),T=t(112),Z=t(40),X=t.n(Z),F=Object(d.createContext)(),H=h.c.div(s||(s=Object(p.a)(["\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.2);\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9999999;\n"]))),V=h.c.img(l||(l=Object(p.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 30px;\n"]))),_=function(){return Object(L.jsx)(H,{children:Object(L.jsx)(V,{src:"data:image/gif;base64,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CvDhHY2HVz7f9/TiVbR3fwI9fELr55esf1+9fP0tvdcfI/kBWBQKEUig4P+CC4bH4IMFGtieCiIFBhZ5EmbYGgoV4nUhexpqSKFpH4YY4ogW/meihCh6qOKKALY4S4kwGiijLDTWqN+Nq+So44QpdDjjiz92p4IAbQzSRoRFnmjbW4FUgFyTJqZgAZSASOkQlVRaieUfWpLEZZNeChKmKWOS+aSZU6Zp45pRtunmjnBmKeecQJ5wJZtb4rlimXH26aeTen7px5muDPpnnWDeqeh+JewZqJiPZgionYJWGiOjhzqqaVWF8knpp3SGOimapG5qKqajplreA7DGGisChvYh660UuBrgCULiSOSnPKriI6nBjjIssEGS+KumxYpyLLPJpugpl82G8mz/pdWetCy20bo4LaEmIKDAuOSSO4BpA5SrrhyZLirggIMwCeN58OK3rYgp2FdvM/damu++gsjrLn8AL/QtfSboW7AeAlf578L8HgxpCQov3DC4CUMccbvlpfBAAyCHHLIBGvdhgMgos9uqd6WVvNqdZrk8Eqq7mhCOzDNxTFjLOMOlM2k29xwKbdeVcLPQU8HsGtL/KN0Y00n/nBzPUG/lNNVVD0J0zFlvvXTXVwedtdVSc/b02BOVvSHWaLsTttFta/02CUfHfdDcI9Rttx5en713XmrXxvbfguEtgt579z3434qLTfjdgRdN9+NNR8511Y3DTTngK8vlN+GZT745Wt+GE4C43aHnPTrpln+Neemnx5364asX3vrnjMNe++ym766XDAgkIPzwxBdv/PHIJ6/88sMvMEcY0Ecv/fTUV2/99dhnr/323Hfv/ffghy/++OSXb/756AsRAgA7"})})};var $,ee,ne,te=function(e){return e.toString().toLowerCase().normalize("NFD").trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-")},ie="1Uou8R5Bgrdl9M8ykKZeSj5MAl_huugiG3rRIQyMtxvI",re=X.a.createInstance({name:" recipes"}),ce=X.a.createInstance({name:"ingredients"}),ae=function(e){var n=e.children,t=Object(d.useState)([]),i=Object(g.a)(t,2),r=i[0],c=i[1],a=Object(d.useState)([]),o=Object(g.a)(a,2),s=o[0],l=o[1],u=Object(d.useState)({}),A=Object(g.a)(u,2),p=A[0],h=A[1],b=Object(d.useState)(!1),f=Object(g.a)(b,2),O=f[0],m=f[1],w=Object(d.useState)(void 0),x=Object(g.a)(w,2),C=x[0],I=x[1];function y(){m(!0),R.a.init({key:ie,callback:function(e,n){var t=Object.values(n.models).map((function(e){var n=e.elements.findIndex((function(e){return e.Ingredientes.toLowerCase().includes("preparo")})),t=e.elements.findIndex((function(e){return e.Ingredientes.toLowerCase().includes("imagens")})),i=-1!==t,r=e.elements.slice(0,n),c=e.elements.slice(n+1,i?t:e.elements.length).map((function(e){return e.Ingredientes})),a=i?e.elements.slice(t+1,e.elements.length).map((function(e){return e.Ingredientes})):[],o=te(e.name);return{name:e.name,ingredients:r,preparation:c,images:a,slug:o}})),i=Array.from(new Set(t.map((function(e){return e.ingredients.map((function(e){return e.Ingredientes}))})).flat().sort())).map((function(e){return{name:e,checked:!1}}));re.setItem("recipes",t),ce.setItem("ingredients",i),c(t),l(i),setTimeout((function(){return m(!1)}))},simpleSheet:!0})}Object(d.useEffect)((function(){function e(){return(e=Object(U.a)(z.a.mark((function e(){var n,t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.getItem("recipes");case 2:return n=e.sent,e.next=5,ce.getItem("ingredients");case 5:t=e.sent,n?(c(n),l(t)):y();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var S=Object(j.b)((function(e){return e.serviceWorkerInitialized})),K=Object(j.b)((function(e){return e.serviceWorkerUpdated})),q=Object(j.b)((function(e){return e.serviceWorkerRegistration}));return Object(d.useEffect)((function(){S&&I({message:"95 Recipes has been saved for offline use.",type:"info",title:"Offile usage",closeAlert:function(){return I(void 0)},buttons:[{value:"OK",onClick:function(){return I(void 0)}}]})}),[S]),Object(d.useEffect)((function(){var e=function(){var e=q.waiting;e&&(e.postMessage({type:"SKIP_WAITING"}),e.addEventListener("statechange",(function(e){"activated"===e.target.state&&window.location.reload()})))};K&&I({message:"New version available! Click here to update",type:"warning",title:"Update",closeAlert:function(){return e()},buttons:[{value:"Update",onClick:function(){return e()}}]})}),[K,q.waiting]),Object(L.jsxs)(F.Provider,{value:{allIngredients:s,getRecipeFromSlug:function(e){return r.find((function(n){return n.slug===e}))||{}},recipes:r,selectedRecipe:p,setSelectedRecipe:h,sheetId:ie,updateRecipes:y,setAllIngredients:l},children:[n,O&&Object(L.jsx)(_,{}),C&&Object(L.jsx)(T.a,Object(v.a)({style:{zIndex:2}},C))]})},oe=function(){return Object(d.useContext)(F)};function se(){return(se=Object(U.a)(z.a.mark((function e(n){var t,i;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.title,i=n.slug,e.next=3,navigator.share({title:"95Recipes",text:"Confira a receita de ".concat(t,"\n"),url:"https://95recipes.ggdaltoso.dev/#/".concat(i,"/")});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var le,de,ue=h.c.div($||($=Object(p.a)(["\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n\n  ","\n"])),(function(e){var n=e.driveId;return"\n    background-image: url('https://drive.google.com/uc?id=".concat(n,"');\n  ")})),Ae=h.c.div(ee||(ee=Object(p.a)(["\n  display: grid;\n  grid-gap: 1px;\n  grid-template-columns: 1fr 1fr 1fr;\n\n  div::before {\n    content: '';\n    padding-bottom: 100%;\n    display: inline-block;\n    vertical-align: top;\n  }\n"]))),je=h.c.div(ne||(ne=Object(p.a)(["\n  overflow-y: auto;\n\n  p,\n  ol {\n    margin-top: 6;\n  }\n\n  p,\n  li:not(:last-child) {\n    margin-bottom: 6;\n  }\n\n  p:last-child {\n    margin-bottom: 0;\n  }\n"]))),ge=function(e){var n=e.isMobile,t=e.closeModal,i=Object(O.g)().recipeSlug,r=Object(d.useState)({}),c=Object(g.a)(r,2),a=c[0],o=c[1],s=oe(),l=s.getRecipeFromSlug,u=s.recipes,A=Object(O.f)();Object(d.useEffect)((function(){if(u.length>0){var e=l(i);o(e)}}),[i,u,l]);var j={width:n?window.innerWidth:void 0,height:n?window.innerHeight-30:"auto"};function p(){return A.push("".concat("","/"))}return i&&Object.keys(a).length>0?Object(L.jsx)(m.a,Object(v.a)(Object(v.a)({},j),{},{style:{top:0},icon:Object(L.jsx)(C.f,{variant:"16x16_4"}),title:a.name,closeModal:function(){p(),t()},buttons:[].concat(Object(J.a)(void 0!==navigator.share?[{value:"Share",onClick:function(){!function(e){se.apply(this,arguments)}({title:a.name,slug:a.slug})}}]:[]),[{value:"Close",onClick:p}]),children:Object(L.jsxs)(je,{style:{height:j.height-70},children:[Object(L.jsx)(P.a,{legend:"Ingredientes",children:a.ingredients.map((function(e){var n,t=(n=e).Quantidade||n.Medida?"Inteiros"===n.Medida?n.Quantidade:n.Quantidade&&n.Medida?"".concat(n.Quantidade," ").concat(n.Medida):void 0:"";return Object(L.jsxs)("p",{children:[Object(L.jsx)("span",{children:t.toLowerCase()})," ",Object(L.jsx)("span",{children:e.Ingredientes}),t?"":" a gosto",e["Observa\xe7\xe3o"]&&Object(L.jsxs)("small",{children:[" - (",e["Observa\xe7\xe3o"].toLowerCase(),")"]})]},e.Ingredientes)}))}),a.preparation.length>0&&Object(L.jsx)(P.a,{legend:"Modo de preparo",style:{marginTop:4},children:Object(L.jsx)("ol",{style:{marginBottom:0,paddingLeft:18},children:a.preparation.map((function(e){return Object(L.jsx)("li",{children:e},e)}))})}),a.images.length>0&&Object(L.jsx)(x.a,{boxShadow:"in",p:1,my:8,mx:2,overflowY:"auto",children:Object(L.jsx)(Ae,{children:a.images.map((function(e){return Object(L.jsx)(N.a,{children:Object(L.jsx)(ue,{driveId:e,role:"img"},e)},e)}))})})]})})):null},pe=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<500,he=h.c.h1(le||(le=Object(p.a)(["\n  font-size: 40px;\n  width: 100%;\n  text-align: center;\n"]))),be=Object(h.a)(de||(de=Object(p.a)(["\n  body {\n    font-size: 12px;\n  }\n"])));var fe=function(){var e=oe(),n=e.recipes,t=e.allIngredients,i=e.selectedRecipe,r=e.setSelectedRecipe,c=e.setAllIngredients,a=e.sheetId,o=e.updateRecipes,s=Object(d.useState)(!1),l=Object(g.a)(s,2),u=l[0],A=l[1],j=Object(d.useState)(!1),p=Object(g.a)(j,2),h=p[0],v=p[1];function m(){A(!1)}var w=t.filter((function(e){return e.checked})).map((function(e){return e.name}));return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(be,{}),Object(L.jsx)(he,{children:"95 Recipes "}),Object(L.jsxs)(f.a,{children:[Object.keys(n).length>0&&Object(L.jsx)(M,{recipes:n,openModal:function(){A(!0)},setSelectedRecipe:r,openFilterModal:v,filter:w,isMobile:pe}),Object(L.jsx)(O.c,{children:Object(L.jsx)(O.a,{path:"".concat("","/:recipeSlug"),children:Object(L.jsx)(ge,{selectedRecipe:i,closeModal:m,isMobile:pe})})})]}),u&&Object(L.jsx)(ge,{selectedRecipe:i,closeModal:m,isMobile:pe}),h&&Object(L.jsx)(E,{allIngredients:t,toggleFilterModal:v,setAllIngredients:c,isMobile:pe}),Object(L.jsx)(b.a,{list:Object(L.jsx)(G,{spreadsheetID:a,onUpdate:function(){o()}})})]})},Oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var me=t(63),we="SW_INIT",xe="SW_UPDATE";var Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case we:return Object(v.a)(Object(v.a)({},e),{},{serviceWorkerInitialized:!e.serviceWorkerInitialized});case xe:return Object(v.a)(Object(v.a)({},e),{},{serviceWorkerUpdated:!e.serviceWorkerUpdated,serviceWorkerRegistration:n.payload});default:return e}};var Ie=function(){return Object(me.a)(Ce,{serviceWorkerInitialized:!1,serviceWorkerUpdated:!1,serviceWorkerRegistration:{}})},Le=t(108),ye=t(106),Se=Ie();A.a.render(Object(L.jsx)(j.a,{store:Se,children:Object(L.jsxs)(Le.a,{children:[Object(L.jsx)(ye.a,{}),Object(L.jsx)(ae,{children:Object(L.jsx)(fe,{})})]})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");Oe?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):(console.log("Service worker found. Proceed as normal."),ve(e,n))})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ve(n,e)}))}}({onSuccess:function(){return Se.dispatch({type:we})},onUpdate:function(e){return Se.dispatch({type:xe,payload:e})}})}},[[104,1,2]]]);
//# sourceMappingURL=main.233ca4ef.chunk.js.map