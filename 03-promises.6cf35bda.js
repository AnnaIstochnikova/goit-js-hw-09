const e=document.querySelector(".delay"),o=document.querySelector(".delay--step"),t=document.querySelector(".amount"),n=document.querySelector(".button--submit");document.querySelector(".form");let l=0,r=0,s=0;function c(){const e=Math.random()>.3;return console.log("Delay:",l),console.log("Delay Step:",r),console.log("Amount:",s),new Promise(((o,t)=>{setTimeout((()=>{e?o("Success! Value passed to resolve function"):t("Error! Error passed to reject function")}),l)}))}n.addEventListener("click",(function(n){n.preventDefault(),l=parseInt(e.value),r=parseInt(o.value),s=parseInt(t.value),c()})),n.addEventListener("submit",c),c().then((({position:e,delayValue:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${l}ms`)}));
//# sourceMappingURL=03-promises.6cf35bda.js.map
