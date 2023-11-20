import{a as i,i as a}from"./assets/vendor-2dcf4ad5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();i.defaults.headers.common["x-api-key"]="live_tTd2DeRlMjmrwT0GvEPrcbWJhw1aaGd3xLGjpt1jvcgogKWXbIOuJRg3sms8DZoD";function d(){return i.get("https://api.thecatapi.com/v1/breeds").then(s=>s.data)}function u(s){return i.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${s}`).then(r=>r.data[0])}const e={breedSelect:document.querySelector(".breed-select"),loaderText:document.querySelector(".loader"),errorText:document.querySelector(".error"),catInfoSection:document.querySelector(".cat-info"),refreshButton:document.querySelector(".refresh-button"),firstPresentation:document.querySelector(".first-presentation")};e.refreshButton.style.display="none";d().then(s=>{s.forEach(r=>{const o=document.createElement("option");o.value=r.id,o.text=r.name,e.breedSelect.appendChild(o)}),e.loaderText.style.display="none",e.breedSelect.style.display="block"}).catch(s=>{console.error("Error fetching breeds:",s),e.loaderText.style.display="none",e.breedSelect.style.display="none",a.error({error:"Error",title:"Error",message:"❌ Oops! Something went wrong! Try reloading the page!"}),e.refreshButton.style.display="block"});e.breedSelect.addEventListener("change",f);function f(){e.firstPresentation&&e.firstPresentation.remove();const s=e.breedSelect.value;e.loaderText.style.display="block",e.catInfoSection.style.display="none",e.breedSelect.style.display="none",u(s).then(r=>{const o=r.breeds[0];e.catInfoSection.innerHTML=`
            <img src="${r.url}" alt="${o.name}" class="cat-img" width="450px" />
            <div class="cat-info-accent">
                <h2>${o.name}</h2>
                <p>${o.description}</p>
                <p><strong>Temperament:</strong> ${o.temperament}</p>
                <a href="${o.wikipedia_url}" target="_blank" class="more-info-button">Read more</a>
            </div>
            `,e.loaderText.style.display="none",e.catInfoSection.style.display="flex",e.breedSelect.style.display="block"}).catch(r=>{console.error("Error fetching breeds:",r),e.loaderText.style.display="none",e.breedSelect.style.display="none",a.error({error:"Error",title:"Error",message:"❌ Oops! Something went wrong! Try reloading the page!"}),e.refreshButton.style.display="block"})}
//# sourceMappingURL=commonHelpers.js.map
