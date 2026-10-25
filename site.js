// Event-driven controls: no scroll handler, layout reads or automatic tab timers.
(() => {
 const nav=document.getElementById('site-nav'),menu=document.querySelector('.menu-btn');
 const setMenu=open=>{menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);};
 menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
 nav.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false);});
 addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){setMenu(false);menu.focus();}});
 const phone=matchMedia('(max-width: 767px)');
 const fitStrips=()=>document.querySelectorAll('.problem-cards').forEach(el=>{if(phone.matches)el.tabIndex=0;else el.removeAttribute('tabindex');});
 phone.addEventListener('change',fitStrips);fitStrips();
 // Desktop-only, one-shot compositor transitions; mobile and reduced motion stay static.
 if(!phone.matches&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){
  document.documentElement.classList.add('motion');
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}));
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
 }
 const tabs=[...document.querySelectorAll('.step-tab')];
 const panels=tabs.map(t=>document.getElementById(t.getAttribute('aria-controls')));
 function select(i,focus=false){
  const current=(i+tabs.length)%tabs.length;
  tabs.forEach((t,n)=>{const on=n===current;t.setAttribute('aria-selected',String(on));t.tabIndex=on?0:-1;panels[n].toggleAttribute('data-hidden',!on);});
  if(focus)tabs[current].focus();
 }
 tabs.forEach((t,i)=>{
  t.addEventListener('click',()=>select(i));
  t.addEventListener('keydown',e=>{const next={ArrowRight:i+1,ArrowLeft:i-1,Home:0,End:tabs.length-1}[e.key];if(next!==undefined){e.preventDefault();select(next,true);}});
 });
})();
