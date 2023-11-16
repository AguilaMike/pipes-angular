import{a as g,b as C,c as y,d as D,g as N,h as A}from"./chunk-KC3HAAGD.js";import{Ga as h,M as d,Nb as f,V as l,Ya as c,Yb as $,cc as s,oa as m,pb as M,wa as p}from"./chunk-H652PN7T.js";import"./chunk-2XJVAMHT.js";var b="@",a=class{constructor(e,t,r,o,n){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=n,this._rendererFactoryPromise=null}loadImpl(){return(this.moduleImpl??import("./chunk-S44USWNA.js")).catch(t=>{throw new d(5300,!1)}).then(({\u0275createEngine:t,\u0275AnimationRendererFactory:r})=>{let o=t(this.animationType,this.doc),n=new r(this.delegate,o,this.zone);return this.delegate=n,n})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new u(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(n=>{let I=n.createRenderer(e,t);o.use(I)}).catch(n=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}},u=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,o){this.delegate.insertBefore(e,t,r,o)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,o){this.delegate.setAttribute(e,t,r,o)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,o){this.delegate.setStyle(e,t,r,o)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(b)}};function v(i="animations"){return[{provide:p,useFactory:(e,t,r)=>new a(e,t,r,i),deps:[$,C,h]},{provide:m,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}]}var P=[{path:"",loadComponent:()=>import("./chunk-TMWC4YKO.js").then(i=>i.MainAppComponent),children:[{path:"",redirectTo:"pipes",pathMatch:"full"},{path:"pipes",loadChildren:()=>import("./chunk-D4NPEHTT.js").then(i=>i.routes)},{path:"**",redirectTo:"pipes"}]},{path:"**",redirectTo:""}];function T(i){let e=i,t=Math.floor(Math.abs(i)),r=i.toString().replace(/^[^.]*\.?/,"").length,o=parseInt(i.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return e===1?1:o===0&&t!==0&&t%1e6===0&&r===0||!(o>=0&&o<=5)?4:5}var E=["es-MX",[["a.\xA0m.","p.\xA0m."],void 0,void 0],void 0,[["D","L","M","M","J","V","S"],["dom","lun","mar","mi\xE9","jue","vie","s\xE1b"],["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"],["DO","LU","MA","MI","JU","VI","SA"]],void 0,[["E","F","M","A","M","J","J","A","S","O","N","D"],["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]],void 0,[["a. C.","d. C."],void 0,["antes de Cristo","despu\xE9s de Cristo"]],0,[6,0],["dd/MM/yy","d MMM y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}","{1} {0}","{1}, {0}",void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","\xA4#,##0.00","#E0"],"MXN","$","peso mexicano",{AUD:[void 0,"$"],BRL:[void 0,"R$"],BYN:[void 0,"p."],CAD:[void 0,"$"],CNY:[void 0,"\xA5"],ESP:["\u20A7"],EUR:[void 0,"\u20AC"],GBP:[void 0,"\xA3"],HKD:[void 0,"$"],ILS:[void 0,"\u20AA"],INR:[void 0,"\u20B9"],JPY:[void 0,"\xA5"],KRW:[void 0,"\u20A9"],MRO:["MRU"],MRU:["UM"],MXN:["$"],NZD:[void 0,"$"],PHP:[void 0,"\u20B1"],TWD:[void 0,"NT$"],USD:[void 0,"$"],VND:[void 0,"\u20AB"],XAF:[],XCD:[void 0,"$"],XOF:[]},"ltr",T];function L(i){let e=i,t=Math.floor(Math.abs(i)),r=i.toString().replace(/^[^.]*\.?/,"").length,o=parseInt(i.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return t===0||t===1?1:o===0&&t!==0&&t%1e6===0&&r===0||!(o>=0&&o<=5)?4:5}var F=["fr-CA",[["a","p"],["a.m.","p.m."],void 0],[["a.m.","p.m."],void 0,void 0],[["D","L","M","M","J","V","S"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["di","lu","ma","me","je","ve","sa"]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["janv.","f\xE9vr.","mars","avr.","mai","juin","juill.","ao\xFBt","sept.","oct.","nov.","d\xE9c."],["janvier","f\xE9vrier","mars","avril","mai","juin","juillet","ao\xFBt","septembre","octobre","novembre","d\xE9cembre"]],void 0,[["av. J.-C.","ap. J.-C."],void 0,["avant J\xE9sus-Christ","apr\xE8s J\xE9sus-Christ"]],0,[6,0],["y-MM-dd","d MMM y","d MMMM y","EEEE d MMMM y"],["HH 'h' mm","HH 'h' mm 'min' ss 's'","HH 'h' mm 'min' ss 's' z","HH 'h' mm 'min' ss 's' zzzz"],["{1} {0}","{1}, {0}","{1} '\xE0' {0}",void 0],[",","\xA0",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"CAD","$","dollar canadien",{AUD:["$\xA0AU","$"],BEF:["FB"],BYN:[void 0,"Br"],CAD:["$"],CYP:["\xA3CY"],EGP:[void 0,"\xA3E"],FRF:["F"],GEL:[],HKD:["$\xA0HK","$"],IEP:["\xA3IE"],ILP:["\xA3IL"],ILS:[void 0,"\u20AA"],INR:[void 0,"\u20B9"],ITL:["\u20A4IT"],KRW:[void 0,"\u20A9"],LBP:[void 0,"\xA3L"],MTP:["\xA3MT"],MXN:[void 0,"$"],NZD:["$\xA0NZ","$"],PHP:[void 0,"\u20B1"],RHD:["$RH"],RON:[void 0,"L"],RWF:[void 0,"FR"],SGD:["$\xA0SG","$"],TOP:[void 0,"$T"],TWD:[void 0,"NT$"],USD:["$\xA0US","$"],VND:[void 0,"\u20AB"],XAF:[],XCD:[void 0,"$"],XOF:[],XPF:[]},"ltr",L];function B(i){let e=i,t=Math.floor(Math.abs(i)),r=i.toString().replace(/^[^.]*\.?/,"").length,o=parseInt(i.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return t===0||t===1?1:o===0&&t!==0&&t%1e6===0&&r===0||!(o>=0&&o<=5)?4:5}var R=["fr",[["AM","PM"],void 0,void 0],void 0,[["D","L","M","M","J","V","S"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["di","lu","ma","me","je","ve","sa"]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["janv.","f\xE9vr.","mars","avr.","mai","juin","juil.","ao\xFBt","sept.","oct.","nov.","d\xE9c."],["janvier","f\xE9vrier","mars","avril","mai","juin","juillet","ao\xFBt","septembre","octobre","novembre","d\xE9cembre"]],void 0,[["av. J.-C.","ap. J.-C."],void 0,["avant J\xE9sus-Christ","apr\xE8s J\xE9sus-Christ"]],1,[6,0],["dd/MM/y","d MMM y","d MMMM y","EEEE d MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}","{1}, {0}","{1} '\xE0' {0}",void 0],[",","\u202F",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","euro",{ARS:["$AR","$"],AUD:["$AU","$"],BEF:["FB"],BMD:["$BM","$"],BND:["$BN","$"],BYN:[void 0,"\u0440."],BZD:["$BZ","$"],CAD:["$CA","$"],CLP:["$CL","$"],CNY:[void 0,"\xA5"],COP:["$CO","$"],CYP:["\xA3CY"],EGP:[void 0,"\xA3E"],FJD:["$FJ","$"],FKP:["\xA3FK","\xA3"],FRF:["F"],GBP:["\xA3GB","\xA3"],GIP:["\xA3GI","\xA3"],HKD:[void 0,"$"],IEP:["\xA3IE"],ILP:["\xA3IL"],ITL:["\u20A4IT"],JPY:[void 0,"\xA5"],KMF:[void 0,"FC"],LBP:["\xA3LB","\xA3L"],MTP:["\xA3MT"],MXN:["$MX","$"],NAD:["$NA","$"],NIO:[void 0,"$C"],NZD:["$NZ","$"],PHP:[void 0,"\u20B1"],RHD:["$RH"],RON:[void 0,"L"],RWF:[void 0,"FR"],SBD:["$SB","$"],SGD:["$SG","$"],SRD:["$SR","$"],TOP:[void 0,"$T"],TTD:["$TT","$"],TWD:[void 0,"NT$"],USD:["$US","$"],UYU:["$UY","$"],WST:["$WS"],XCD:[void 0,"$"],XPF:["FCFP"],ZMW:[void 0,"Kw"]},"ltr",B];s(E,"es-MX");s(F,"fr-CA");s(R,"fr");var S={providers:[{provide:f,useValue:"es-MX"},v(),g(),N(P,A())]};var H=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!0,features:[M],decls:1,vars:0,template:function(o,n){o&1&&c(0,"router-outlet")},dependencies:[D],encapsulation:2});let i=e;return i})();y(H,S).catch(i=>console.error(i));
