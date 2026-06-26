const st1= document.getElementById("step-1");
const st2= document.getElementById("step-2");
const st3= document.getElementById("step-3");
const bs1= document.getElementById("btn-suivant-1");
const bs2= document.getElementById("btn-suivant-2");
const bb1= document.getElementById("btn-back-1");
const bb2= document.getElementById("btn-back-2");
const br= document.getElementById("btn-register");

bs1.addEventListener('click', function(e){
  st1.classList.add('hidden');
  st2.classList.remove('hidden');
  st3.classList.add('hidden');
});
bs2.addEventListener('click', function(e){
  st1.classList.add('hidden');
  st2.classList.add('hidden');
  st3.classList.remove('hidden');
});
bb1.addEventListener('click', function(e){
  st1.classList.remove('hidden');
  st2.classList.add('hidden');
  st3.classList.add('hidden');
});
bb2.addEventListener('click', function(e){
  st1.classList.add('hidden');
  st2.classList.remove('hidden');
  st3.classList.add('hidden');
});

st1.classList.remove('hidden');
st2.classList.add('hidden');
st3.classList.add('hidden');