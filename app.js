let h1Id=document.getElementById('h1');
let buttonId=document.getElementById('button');
let counter=0;
buttonId.addEventListener('click',function(){
	counter++;
	h1Id.textContent='score: '+counter;
});