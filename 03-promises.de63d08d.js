!function(){"use strict";var e=document.querySelector(".delay"),o=document.querySelector(".delay--step"),t=document.querySelector(".amount"),n=document.querySelector(".button--submit"),c=(document.querySelector(".form"),0),r=0,u=0;function l(e,o){var t=Math.random()>.3;return console.log("Delay:",c),console.log("Delay Step:",r),console.log("Amount:",u),new Promise((function(e,o){setTimeout((function(){t?e("Success! Value passed to resolve function"):o("Error! Error passed to reject function")}),c)}))}n.addEventListener("click",(function(n){n.preventDefault(),c=parseInt(e.value),r=parseInt(o.value),u=parseInt(t.value),l()})),n.addEventListener("submit",l);for(var a=[],s=1;s<=u;s++)a.push(l("Promise number ".concat(s)));Promise.allSettled(a).then((function(e){var o=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(e){var o=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}();
//# sourceMappingURL=03-promises.de63d08d.js.map
