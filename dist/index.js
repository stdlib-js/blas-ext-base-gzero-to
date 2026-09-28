"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var f=n(function(P,v){
function g(e,r,a,s){var o,i,t,u;for(o=r.data,i=r.accessors[1],t=s,u=0;u<e;u++)i(o,t,u),t+=a;return r}v.exports=g
});var c=n(function(R,q){
var l=require('@stdlib/array-base-arraylike2object/dist'),z=f();function T(e,r,a,s){var o,i,t;if(e<=0)return r;if(i=l(r),i.accessorProtocol)return z(e,i,a,s),r;for(o=s,t=0;t<e;t++)r[o]=t,o+=a;return r}q.exports=T
});var d=n(function(h,y){
var b=require('@stdlib/strided-base-stride2offset/dist'),j=c();function k(e,r,a){return j(e,r,a,b(e,a))}y.exports=k
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=d(),x=c();m(p,"ndarray",x);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
