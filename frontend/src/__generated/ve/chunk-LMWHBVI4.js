function s(r,n,e){return n in r?Object.defineProperty(r,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[n]=e,r}function O(r,n){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);n&&(t=t.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),e.push.apply(e,t)}return e}function o(r){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?O(Object(e),!0).forEach(function(t){s(r,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):O(Object(e)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))})}return r}var v=(r,n,e)=>{for(var t of Object.keys(r)){var u;if(r[t]!==((u=n[t])!==null&&u!==void 0?u:e[t]))return!1}return!0},d=r=>n=>{var e=r.defaultClassName,t=o(o({},r.defaultVariants),n);for(var u in t){var f,p=(f=t[u])!==null&&f!==void 0?f:r.defaultVariants[u];if(p!=null){var a=p;typeof a=="boolean"&&(a=a===!0?"true":"false");var l=r.variantClassNames[u][a];l&&(e+=" "+l)}}for(var[i,b]of r.compoundVariants)v(i,t,r.defaultVariants)&&(e+=" "+b);return e};export{d as a};
