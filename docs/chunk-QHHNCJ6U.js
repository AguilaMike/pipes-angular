import{i as O,j as N,k as w,l as R}from"./chunk-GYFOS7U2.js";import{$a as s,Aa as a,Ba as S,Gb as u,Ib as g,Jb as _,Ka as x,La as i,O as v,Pa as E,Ra as l,V as T,W as b,Wa as p,Xa as c,db as m,eb as M,ec as F,fb as f,gc as Q,hb as y,hc as j,ic as k,jb as C,va as I,wc as D}from"./chunk-H652PN7T.js";function q(e,o){e&1&&s(0)}function A(e,o){if(e&1&&(p(0,"div",8),f(1,1),l(2,q,1,0,"ng-container",6),c()),e&2){let t=m();a(2),i("ngTemplateOutlet",t.headerTemplate)}}function B(e,o){e&1&&s(0)}function H(e,o){if(e&1&&(p(0,"div",9),y(1),l(2,B,1,0,"ng-container",6),c()),e&2){let t=m();a(1),C(" ",t.header," "),a(1),i("ngTemplateOutlet",t.titleTemplate)}}function P(e,o){e&1&&s(0)}function V(e,o){if(e&1&&(p(0,"div",10),y(1),l(2,P,1,0,"ng-container",6),c()),e&2){let t=m();a(1),C(" ",t.subheader," "),a(1),i("ngTemplateOutlet",t.subtitleTemplate)}}function z(e,o){e&1&&s(0)}function G(e,o){e&1&&s(0)}function J(e,o){if(e&1&&(p(0,"div",11),f(1,2),l(2,G,1,0,"ng-container",6),c()),e&2){let t=m();a(2),i("ngTemplateOutlet",t.footerTemplate)}}var K=["*",[["p-header"]],[["p-footer"]]],L=["*","p-header","p-footer"],Z=(()=>{class e{el;header;subheader;style;styleClass;headerFacet;footerFacet;templates;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;constructor(t){this.el=t}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"title":this.titleTemplate=t.template;break;case"subtitle":this.subtitleTemplate=t.template;break;case"content":this.contentTemplate=t.template;break;case"footer":this.footerTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}getBlockableElement(){return this.el.nativeElement.children[0]}static \u0275fac=function(r){return new(r||e)(S(I))};static \u0275cmp=T({type:e,selectors:[["p-card"]],contentQueries:function(r,n,h){if(r&1&&(g(h,O,5),g(h,N,5),g(h,w,4)),r&2){let d;u(d=_())&&(n.headerFacet=d.first),u(d=_())&&(n.footerFacet=d.first),u(d=_())&&(n.templates=d)}},hostAttrs:[1,"p-element"],inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},ngContentSelectors:L,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(r,n){r&1&&(M(K),p(0,"div",0),l(1,A,3,1,"div",1),p(2,"div",2),l(3,H,3,2,"div",3)(4,V,3,2,"div",4),p(5,"div",5),f(6),l(7,z,1,0,"ng-container",6),c(),l(8,J,3,1,"div",7),c()()),r&2&&(E(n.styleClass),i("ngClass","p-card p-component")("ngStyle",n.style),x("data-pc-name","card"),a(1),i("ngIf",n.headerFacet||n.headerTemplate),a(2),i("ngIf",n.header||n.titleTemplate),a(1),i("ngIf",n.subheader||n.subtitleTemplate),a(3),i("ngTemplateOutlet",n.contentTemplate),a(1),i("ngIf",n.footerFacet||n.footerTemplate))},dependencies:[F,Q,k,j],styles:[`@layer primeng{.p-card-header img{width:100%}}
`],encapsulation:2,changeDetection:0})}return e})(),$=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=b({type:e});static \u0275inj=v({imports:[D,R]})}return e})();export{Z as a,$ as b};