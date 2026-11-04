const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
window.addEventListener('load',()=>setTimeout(()=>$('#loader')?.classList.add('hide'),350));
$('.menu').onclick=()=>$('.navlinks').classList.toggle('open');
$$('.navlinks a').forEach(a=>a.onclick=()=>$('.navlinks').classList.remove('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12}); $$('.reveal').forEach(e=>io.observe(e));
window.addEventListener('mousemove',e=>{const g=$('.cursor-glow');if(g){g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'}});
const tilt=$('.tilt'); if(tilt) tilt.addEventListener('mousemove',e=>{const r=tilt.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tilt.style.transform=`rotateY(${x*5}deg) rotateX(${-y*5}deg)`}); tilt?.addEventListener('mouseleave',()=>tilt.style.transform='');
$('.modal-open').onclick=()=>$('#safetyModal').classList.add('open'); $('.modal-close').onclick=()=>$('#safetyModal').classList.remove('open'); $('#safetyModal').onclick=e=>{if(e.target.id==='safetyModal')e.currentTarget.classList.remove('open')};
window.addEventListener('scroll',()=>$('.topbtn').classList.toggle('show',scrollY>600)); $('.topbtn').onclick=()=>scrollTo({top:0,behavior:'smooth'}); $('#year').textContent=new Date().getFullYear();
