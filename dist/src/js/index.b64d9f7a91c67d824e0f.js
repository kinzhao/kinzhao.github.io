var Home=function(e){function n(n){for(var o,r,i=n[0],c=n[1],a=n[2],d=0,s=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(I,r)&&I[r]&&s.push(I[r][0]),I[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(U&&U(n);s.length;)s.shift()();return M.push.apply(M,a||[]),t()}function t(){for(var e,n=0;n<M.length;n++){for(var t=M[n],o=!0,r=1;r<t.length;r++){var i=t[r];0!==I[i]&&(o=!1)}o&&(M.splice(n--,1),e=S(S.s=t[0]))}return e}var o=window.webpackHotUpdateHome;window.webpackHotUpdateHome=function(e,n){!function(e,n){if(O[e]&&g[e]){for(var t in g[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--y&&0===b&&k()}}(e,n),o&&o(e,n)};var r,i=!0,c="b64d9f7a91c67d824e0f",a={},d=[],s=[],l=[],u="idle";function p(e){u=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var f,h,m,v,y=0,b=0,w={},g={},O={};function x(e){return+e+""===e?+e:e}function _(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return i=e,p("check"),function(e){return e=e||1e4,new Promise((function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var o=new XMLHttpRequest,r=S.p+""+c+".hot-update.json";o.open("GET",r,!0),o.timeout=e,o.send(null)}catch(e){return t(e)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)t(new Error("Manifest request to "+r+" timed out."));else if(404===o.status)n();else if(200!==o.status&&304!==o.status)t(new Error("Manifest request to "+r+" failed."));else{try{var e=JSON.parse(o.responseText)}catch(e){return void t(e)}n(e)}}}))}(1e4).then((function(e){if(!e)return p(D()?"ready":"idle"),null;g={},w={},O=e.c,m=e.h,p("prepare");var n=new Promise((function(e,n){f={resolve:e,reject:n}}));for(var t in h={},I)j(t);return"prepare"===u&&0===b&&0===y&&k(),n}))}function j(e){O[e]?(g[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=S.p+""+e+"."+c+".hot-update.js",document.head.appendChild(n)}(e)):w[e]=!0}function k(){p("ready");var e=f;if(f=null,e)if(i)Promise.resolve().then((function(){return H(i)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(x(t));e.resolve(n)}}function H(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");return function n(t){var o,i,s,l,u;function f(e){for(var n=[e],t={},o=n.map((function(e){return{chain:[e],id:e}}));o.length>0;){var r=o.pop(),i=r.id,c=r.chain;if((l=E[i])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var a=0;a<l.parents.length;a++){var d=l.parents[a],s=E[d];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([d]),moduleId:i,parentId:d};-1===n.indexOf(d)&&(s.hot._acceptedDependencies[i]?(t[d]||(t[d]=[]),y(t[d],[i])):(delete t[d],n.push(d),o.push({chain:c.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function y(e,n){for(var t=0;t<n.length;t++){var o=n[t];-1===e.indexOf(o)&&e.push(o)}}D();var b={},w=[],g={},_=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var j in h)if(Object.prototype.hasOwnProperty.call(h,j)){var k;u=x(j);var H=!1,P=!1,M=!1,A="";switch((k=h[j]?f(u):{type:"disposed",moduleId:j}).chain&&(A="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(H=new Error("Aborted because of self decline: "+k.moduleId+A));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(H=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+A));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(H=new Error("Aborted because "+u+" is not accepted"+A));break;case"accepted":t.onAccepted&&t.onAccepted(k),P=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),M=!0;break;default:throw new Error("Unexception type "+k.type)}if(H)return p("abort"),Promise.reject(H);if(P)for(u in g[u]=h[u],y(w,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,u)&&(b[u]||(b[u]=[]),y(b[u],k.outdatedDependencies[u]));M&&(y(w,[k.moduleId]),g[u]=_)}var z,q=[];for(i=0;i<w.length;i++)u=w[i],E[u]&&E[u].hot._selfAccepted&&g[u]!==_&&!E[u].hot._selfInvalidated&&q.push({module:u,parents:E[u].parents.slice(),errorHandler:E[u].hot._selfAccepted});p("dispose"),Object.keys(O).forEach((function(e){!1===O[e]&&function(e){delete I[e]}(e)}));for(var U,L,C=w.slice();C.length>0;)if(u=C.pop(),l=E[u]){var R={},T=l.hot._disposeHandlers;for(s=0;s<T.length;s++)(o=T[s])(R);for(a[u]=R,l.hot.active=!1,delete E[u],delete b[u],s=0;s<l.children.length;s++){var J=E[l.children[s]];J&&(z=J.parents.indexOf(u))>=0&&J.parents.splice(z,1)}}for(u in b)if(Object.prototype.hasOwnProperty.call(b,u)&&(l=E[u]))for(L=b[u],s=0;s<L.length;s++)U=L[s],(z=l.children.indexOf(U))>=0&&l.children.splice(z,1);for(u in p("apply"),void 0!==m&&(c=m,m=void 0),h=void 0,g)Object.prototype.hasOwnProperty.call(g,u)&&(e[u]=g[u]);var G=null;for(u in b)if(Object.prototype.hasOwnProperty.call(b,u)&&(l=E[u])){L=b[u];var N=[];for(i=0;i<L.length;i++)if(U=L[i],o=l.hot._acceptedDependencies[U]){if(-1!==N.indexOf(o))continue;N.push(o)}for(i=0;i<N.length;i++){o=N[i];try{o(L)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:L[i],error:e}),t.ignoreErrored||G||(G=e)}}}for(i=0;i<q.length;i++){var X=q[i];u=X.module,d=X.parents,r=u;try{S(u)}catch(e){if("function"==typeof X.errorHandler)try{X.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),t.ignoreErrored||G||(G=n),G||(G=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||G||(G=e)}}return G?(p("fail"),Promise.reject(G)):v?n(t).then((function(e){return w.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e})):(p("idle"),new Promise((function(e){e(w)})))}(n=n||{})}function D(){if(v)return h||(h={}),v.forEach(P),v=void 0,!0}function P(n){Object.prototype.hasOwnProperty.call(h,n)||(h[n]=e[n])}var E={},I={0:0},M=[];function S(n){if(E[n])return E[n].exports;var t=E[n]={i:n,l:!1,exports:{},hot:function(n){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:r!==n,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)t._acceptedDependencies[e[o]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":(h={})[n]=e[n],p("ready");break;case"ready":P(n);break;case"prepare":case"check":case"dispose":case"apply":(v=v||[]).push(n)}},check:_,apply:H,status:function(e){if(!e)return u;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:a[n]};return r=void 0,t}(n),parents:(s=d,d=[],s),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=E[e];if(!n)return S;var t=function(t){return n.hot.active?(E[t]?-1===E[t].parents.indexOf(e)&&E[t].parents.push(e):(d=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),d=[]),S(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(n){S[e]=n}}};for(var i in S)Object.prototype.hasOwnProperty.call(S,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,o(i));return t.e=function(e){return"ready"===u&&p("prepare"),b++,S.e(e).then(n,(function(e){throw n(),e}));function n(){b--,"prepare"===u&&(w[e]||j(e),0===b&&0===y&&k())}},t.t=function(e,n){return 1&n&&(e=t(e)),S.t(e,-2&n)},t}(n)),t.l=!0,t.exports}S.m=e,S.c=E,S.d=function(e,n,t){S.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},S.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,n){if(1&n&&(e=S(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(S.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)S.d(t,o,function(n){return e[n]}.bind(null,o));return t},S.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(n,"a",n),n},S.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},S.p="",S.h=function(){return c};var A=window.webpackJsonpHome=window.webpackJsonpHome||[],z=A.push.bind(A);A.push=n,A=A.slice();for(var q=0;q<A.length;q++)n(A[q]);var U=z;return M.push([3,1]),t()}([function(e,n,t){var o=t(1);(n=e.exports=t(2)(!1)).i(t(5),""),n.push([e.i,"body,html{width:100%;height:100%;margin:0}body .home,html .home{background:url("+o(t(12))+") no-repeat 50% fixed;background-size:cover;cursor:crosshair;overflow-x:hidden;font-family:Helvetica,Gotham,Myriad Pro;color:#f2f2f2;width:100%;height:100%}@media screen and (max-width:767px){body .home .introduction,html .home .introduction{width:290px;padding:5%}}@media screen and (min-width:768px){body .home .introduction,html .home .introduction{width:500px;padding:30px}}body .home .introduction,html .home .introduction{position:absolute;left:50%;top:50%;height:auto;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:rgba(0,0,0,.8);text-align:left;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .home .introduction h1,html .home .introduction h1{text-transform:uppercase;font-weight:700;font-size:25px;margin:0 0 20px}body .home .introduction p,html .home .introduction p{font-size:20px;line-height:200%;margin:0 0 20px}body .home .introduction p .jpmc:hover,html .home .introduction p .jpmc:hover{color:#007ab5}body .home .introduction a,body .home .introduction a:visited,html .home .introduction a,html .home .introduction a:visited{text-decoration:none;font-size:20px;color:#fff}body .home .introduction .social-media,html .home .introduction .social-media{text-align:center}body .home .introduction .social-media i,html .home .introduction .social-media i{padding:10px}body .home .introduction .social-media i:hover,html .home .introduction .social-media i:hover{color:#007ab5}",""])},,,function(e,n,t){"use strict";t(4);var o=t(15);document.body.innerHTML=(0,o.Component)()},function(e,n,t){var o=t(0);"string"==typeof o&&(o=[[e.i,o,""]]);var r=t(13)(o,{hmr:!0,transform:void 0,insertInto:void 0});o.locals&&(e.exports=o.locals),e.hot.accept(0,(function(){var n=t(0);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,o=0;for(t in e){if(!n||e[t]!==n[t])return!1;o++}for(t in n)o--;return 0===o}(o.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(n)})),e.hot.dispose((function(){r()}))},,,,,,,,function(e,n,t){e.exports=t.p+"src/images/hero-image.jpg"},,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Component=function(){return'\n        <div class="home">\n            <div class="introduction">\n                <h1>Hello, I\'m Kin.</h1>\n                <p>I\'m a Senior Software Engineer at <a class="jpmc" href="https://www.chase.com/">JP Morgan Chase</a>.</p>\n                <p>Interested in Web, Mobile Development, Machine Learning, Artificial Intelligence and learning new technologies.</p>\n                <div class="social-media">\n                    '+o.SocialList.map((function(e){return'<a href="'+e.link+'"><span><i class="fa fa-'+e.icon+' fa-2x" aria-hidden="true"></i></span></a>'})).join(" ")+"\n                </div>\n            </div>\n        </div>\n    "};var o=t(16)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.SocialList=[{link:"http://www.linkedin.com/in/kinzhaoo",icon:"linkedin-square"},{link:"http://www.github.com/kinzhao",icon:"github"},{link:"https://stackoverflow.com/users/3183744/kin",icon:"stack-overflow"},{link:"mailto:developer@kinzhao.com?Subject=kinzhao.com",icon:"envelope-o"}]}]).default;