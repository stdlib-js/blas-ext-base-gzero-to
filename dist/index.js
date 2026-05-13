"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=n(function(P,v){
function g(e,r,t,s){var o,i,a,u;for(o=r.data,i=r.accessors[1],a=s,u=0;u<e;u++)i(o,a,u),a+=t;return r}v.exports=g
});var c=n(function(R,q){
var l=require('@stdlib/array-base-arraylike2object/dist'),z=f();function T(e,r,t,s){var o,i,a;if(e<=0)return r;if(i=l(r),i.accessorProtocol)return z(e,i,t,s),r;for(o=s,a=0;a<e;a++)r[o]=a,o+=t;return r}q.exports=T
});var d=n(function(h,y){
var b=require('@stdlib/strided-base-stride2offset/dist'),j=c();function k(e,r,t){return j(e,r,t,b(e,t))}y.exports=k
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=d(),x=c();m(p,"ndarray",x);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
