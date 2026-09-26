document.addEventListener("DOMContentLoaded",function(){
var q=function(s){return document.querySelector(s)};
var pre=q(".preloader");
setTimeout(function(){if(pre)pre.classList.add("hide")},650);
var y=q(".year");if(y)y.textContent=new Date().getFullYear();
var menu=q(".menu"),nav=q("#main-menu");
function closeMenu(){if(!menu||!nav)return;nav.classList.remove("open");menu.classList.remove("active");menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Ouvrir le menu")}
function openMenu(){if(!menu||!nav)return;nav.classList.add("open");menu.classList.add("active");menu.setAttribute("aria-expanded","true");menu.setAttribute("aria-label","Fermer le menu")}
if(menu&&nav){
menu.addEventListener("click",function(){if(nav.classList.contains("open"))closeMenu();else openMenu()});
nav.querySelectorAll("a").forEach(function(a){a.addEventListener("click",closeMenu)});
document.addEventListener("click",function(e){if(nav.classList.contains("open")&&!nav.contains(e.target)&&!menu.contains(e.target))closeMenu()});
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeMenu()});
window.addEventListener("resize",function(){if(window.innerWidth>900)closeMenu()})
}
var current=location.pathname.split("/").pop()||"index.html";
if(nav)nav.querySelectorAll("a").forEach(function(a){if(a.getAttribute("href")===current)a.setAttribute("aria-current","page")});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add("show")})},{threshold:.12});
document.querySelectorAll(".reveal").forEach(function(e){io.observe(e)});
document.querySelectorAll('a[href$=".html"]').forEach(function(a){a.addEventListener("click",function(e){if(a.target==="_blank"||a.origin!==location.origin)return;var href=a.getAttribute("href");if(href===current)return;closeMenu();var w=q(".page-wipe");if(w){e.preventDefault();w.classList.add("go");setTimeout(function(){location.href=a.href},380)}})});
document.querySelectorAll("[data-light]").forEach(function(i){i.onclick=function(){var b=q(".lightbox");if(b){b.classList.add("open");b.querySelector("img").src=i.src}}});
var lb=q(".lightbox");if(lb)lb.addEventListener("click",function(){lb.classList.remove("open")});
var form=q("#booking");if(form)form.addEventListener("submit",function(e){e.preventDefault();var d=new FormData(form);var msg=["Bonjour JTK Résidence, je souhaite faire une demande de réservation.","","Nom : "+d.get("nom"),"Téléphone : "+d.get("tel"),"Appartement : "+d.get("app"),"Arrivée : "+d.get("arrivee"),"Départ : "+d.get("depart"),"Voyageurs : "+d.get("voyageurs"),"Message : "+(d.get("message")||"Aucun message supplémentaire.")].join("\n");window.open("https://wa.me/237681274136?text="+encodeURIComponent(msg),"_blank")});
});