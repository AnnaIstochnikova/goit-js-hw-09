!function(){"use strict";var e=document.querySelector(".delay"),t=document.querySelector(".delay--step"),o=document.querySelector(".amount"),n=document.querySelector(".button--submit"),r=(document.querySelector(".form"),0),c=0,u=0;function a(e,t){var o=Math.random()>.3;return new Promise((function(e,n){setTimeout((function(){o?e("Success! Value passed to resolve function"):n("Error! Error passed to reject function")}),t)}))}n.addEventListener("click",(function(n){n.preventDefault(),r=parseInt(e.value),c=parseInt(t.value),u=parseInt(o.value),function(){for(var e=[],t=1;t<=u;t++){var o=r+(t-1)*c;e.push({promise:a("Promise number ".concat(t),o),delay:o})}Promise.allSettled(e.map((function(e){return e.promise}))).then((function(t){t.forEach((function(t,o){"fulfilled"===t.status?console.log("✅ Fulfilled promise ".concat(o+1," in ").concat(e[o].delay,"ms")):console.log("❌ Rejected promise ".concat(o+1))}))}))}()}))}();
//# sourceMappingURL=03-promises.b40bdeed.js.map