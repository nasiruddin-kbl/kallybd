const $=s=>document.querySelector(s),slides=[...document.querySelectorAll('.slide')],dotsBox=$('#dots');
let cur=0,timer;
slides.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','স্লাইড '+(i+1));b.onclick=()=>{go(i);auto()};dotsBox.appendChild(b)});
const dots=[...dotsBox.children];
function go(n){slides[cur].classList.remove('active');dots[cur].classList.remove('on');cur=(n+slides.length)%slides.length;slides[cur].classList.add('active');dots[cur].classList.add('on')}
function auto(){clearInterval(timer);timer=setInterval(()=>go(cur+1),5000)}
$('#next').onclick=()=>{go(cur+1);auto()};$('#prev').onclick=()=>{go(cur-1);auto()};
go(0);auto();
const header=$('#header'),menu=$('#menu'),links=[...menu.querySelectorAll('a')];
addEventListener('scroll',()=>{header.classList.toggle('scrolled',scrollY>20);
 const y=scrollY+120;links.forEach(a=>{const s=$(a.getAttribute('href'));a.classList.toggle('on',s&&s.offsetTop<=y&&s.offsetTop+s.offsetHeight>y)})});
$('#burger').onclick=()=>menu.classList.toggle('open');
links.forEach(a=>a.onclick=()=>menu.classList.remove('open'));
$('#yr').textContent=new Date().toLocaleDateString('bn-BD',{year:'numeric'});
$('#form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);
 const t=`নাম: ${f.get('name')}\nমোবাইল: ${f.get('phone')}\nবার্তা: ${f.get('msg')}`;
 open('https://wa.me/8801619231530?text='+encodeURIComponent(t),'_blank')};
