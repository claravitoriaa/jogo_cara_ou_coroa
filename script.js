let heads = 0;
let tails = 0;
let coin  = document.querySelector(".coin");
let flipBtn = ocument.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () =>{
 let i = Math.floor(math.random () *2);
 coin.computedStyleMAP.animation ='none'
 if(i){
    setTimeout(function{
        coin.computedStyleMAP.animation = 'spin-heads 3s forwars'
    },100);
    heads++;
 } else{}
}
