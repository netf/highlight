import{a as O}from"./chunk-NLMHZ7JJ.js";var k=O(D=>{"use strict";function x(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function A(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),e.push.apply(e,n)}return e}function p(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?A(Object(e),!0).forEach(function(n){x(r,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):A(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}var z=r=>function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=Object.assign({},...e.map(i=>i.styles)),d=Object.keys(a),N=d.filter(i=>"mappings"in a[i]),K=i=>{var o=[],m={},l=p({},i),y=!1;for(var h of N){var b=i[h];if(b!=null){var C=a[h];y=!0;for(var v of C.mappings)m[v]=b,l[v]==null&&delete l[v]}}var g=y?p(p({},m),l):i;for(var S in g){var s=g[S],c=a[S];try{if(c.mappings)continue;if(typeof s=="string"||typeof s=="number")o.push(c.values[s].defaultClass);else if(Array.isArray(s))for(var f=0;f<s.length;f++){var j=s[f];if(j!=null){var R=c.responsiveArray[f];o.push(c.values[j].conditions[R])}}else for(var P in s){var w=s[P];w!=null&&o.push(c.values[w].conditions[P])}}catch($){throw $}}return r(o.join(" "))};return Object.assign(K,{properties:new Set(d)})};D.createSprinkles=z});var q=O(u=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0});var B=k(),G=r=>r,E=function(){return B.createSprinkles(G)(...arguments)},H=E;u.createAtomsFn=H;u.createSprinkles=E});var J=O((T,F)=>{"use strict";F.exports=q()});export{J as a};
