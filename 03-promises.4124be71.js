const e=document.querySelector(".delay"),o=document.querySelector(".delay--step"),t=document.querySelector(".amount"),n=document.querySelector(".button--submit");document.querySelector(".form");let l=0,r=0,s=0;function c(e,o){const t=Math.random()>.3;return console.log("Delay:",l),console.log("Delay Step:",r),console.log("Amount:",s),new Promise(((e,o)=>{setTimeout((()=>{t?e("Success! Value passed to resolve function"):o("Error! Error passed to reject function")}),l)}))}n.addEventListener("click",(function(n){n.preventDefault(),l=parseInt(e.value),r=parseInt(o.value),s=parseInt(t.value),c()})),n.addEventListener("submit",c);const u=[];for(let e=1;e<=s;e++)u.push(c());Promise.allSettled(u).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.4124be71.js.map
