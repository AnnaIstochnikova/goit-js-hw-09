function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var l=n("7Y9D8");const u=document.querySelector(".delay"),s=document.querySelector(".delay--step"),i=document.querySelector(".amount"),a=document.querySelector(".button--submit");let d=0,c=0,f=0;function p(e){const t=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{t?o("Success! Value passed to resolve function"):r("Error! Error passed to reject function")}),e)}))}a.addEventListener("click",(function(t){t.preventDefault(),d=parseInt(u.value),c=parseInt(s.value),f=parseInt(i.value),function(){const t=[];for(let e=1;e<=f;e++){const o=d+(e-1)*c;t.push({promise:p(`Promise number ${e}`),delay:o})}Promise.allSettled(t.map((e=>e.promise))).then((o=>{o.forEach(((o,r)=>{"fulfilled"===o.status?setTimeout((()=>{e(l).Notify.success(`Fulfilled promise ${r+1} in ${t[r].delay}ms`)}),t[r].delay):setTimeout((()=>{e(l).Notify.failure(`Rejected promise ${r+1} in ${t[r].delay}ms`)}),t[r].delay)}))}))}()}));
//# sourceMappingURL=03-promises.caac456f.js.map
