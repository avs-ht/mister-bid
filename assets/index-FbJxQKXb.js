(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const u=document.querySelector(".burger"),i=document.querySelector(".header"),n=document.querySelector("body"),d=document.querySelectorAll(".nav__item"),a=document.querySelectorAll(".question__open-button"),f=document.querySelector(".signature__year");u.addEventListener("click",()=>{if(i.classList.toggle("is-menu-opened"),n.style.overflow===""){n.style.overflow="hidden";return}n.style.overflow=""});d.forEach(r=>{r.addEventListener("click",()=>{i.classList.remove("is-menu-opened"),n.style.overflow=""})});a.forEach(r=>{r.addEventListener("click",()=>{r.parentNode.parentNode.querySelector(".question__answer").classList.toggle("opened")})});f.innerHTML=`${new Date().getFullYear()}`;