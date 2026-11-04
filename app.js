
(function(){
var C=window.SITE_CONFIG||{};
var f=document.getElementById('lead-form'); if(!f) return;
var msg=document.getElementById('msg'), btn=f.querySelector('button');
function show(t,c){msg.className='msg '+c;msg.textContent=t}
function digits(v){return (v||'').replace(/\D/g,'')}
f.addEventListener('submit',function(ev){
 ev.preventDefault(); msg.className='msg';
 var d=Object.fromEntries(new FormData(f).entries());
 if(d.website){return}
 var ph=digits(d.phone);
 if(ph.length===11&&(ph[0]==='8'||ph[0]==='7')){ph='7'+ph.slice(1)} else if(ph.length===10){ph='7'+ph} else {show('Проверьте номер телефона: нужно 10 цифр после +7','err');return}
 if(!d.name||d.name.trim().length<2){show('Укажите имя','err');return}
 if(!d.address||d.address.trim().length<5){show('Укажите адрес: улица и дом','err');return}
 if(!d.consent){show('Нужно согласие на обработку персональных данных','err');return}
 var lead={name:d.name.trim(),phone:'+'+ph,city:d.city,address:d.address.trim(),tariff:d.tariff,page:location.pathname,ts:new Date().toISOString()};
 btn.disabled=true;
 if(!C.endpoint){
  try{var a=JSON.parse(localStorage.getItem('test-leads')||'[]');a.push(lead);localStorage.setItem('test-leads',JSON.stringify(a))}catch(e){}
  show('Тестовый режим: заявка сохранена только в этом браузере и никому не отправлена. Для реальной работы подключите приём заявок (см. инструкцию).','ok');
  f.reset(); btn.disabled=false; return;
 }
 fetch(C.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(lead)})
 .then(function(r){if(!r.ok)throw new Error(r.status);return r.json().catch(function(){return {}})})
 .then(function(){show('Спасибо! Заявка принята. Мы перезвоним в ближайшее время.','ok');f.reset()})
 .catch(function(){show('Не получилось отправить. Позвоните нам: '+(C.phone||''),'err')})
 .then(function(){btn.disabled=false});
});
})();
