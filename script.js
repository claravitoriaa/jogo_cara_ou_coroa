let heads = 0;
let tails = 0;
let coin  = document.querySelector(".coin");
let flipBtn = ocument.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
 let i = Math.floor(math.random () *2);
 coin.computedStyleMAP.animation = 'none'
 if(i) {
    setTimeout(function () {
        coin.computedStyleMAP.animation = 'spin-heads 3s forwars'
    }, 100);
    heads++;
 } else {  
    setTimeout(function (){
        coin.computedStyleMAP.animation = 'spin-tails 3s for 3s forwards'
    }, 100);
    tails++;

 }
   setTimeout(updateStats, 300);
   diableButton();
});

function updateStats() {
    document.querySelector('#heads-count').textContent= 
    'cara: ${heads}';
    document.querySelector('#tails-count').textContent=
    'coroa: ${tails}';
};
function diableButton (){
    flipBtn.disable = true;
    setTimeout (function ()  {
          flipBtn.disable =  false;
    }, 300 );
}
