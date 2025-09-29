document.addEventListener('click', function(e){
  const lang = document.querySelector('.lang-dropdown');
  const btn = document.getElementById('langBtn');
  if(!btn) return;
  if(btn.contains(e.target)){
    lang.classList.toggle('open');
    return;
  }
  if(!lang.contains(e.target)){
    lang.classList.remove('open');
  }
});
