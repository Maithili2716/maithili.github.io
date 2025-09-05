function compChoice(){
     let choice = Math.random();
     if(choice>0 && choice<=1/3){
          return "rock";
     }
     else if(choice>1/3 && choice<=2/3){
          return "paper";
     }
     else if(choice>2/3 && choice<=1){
          return "scissors";
     }
}

function userChoice(){
     const images= document.querySelectorAll(".images img");
     images[0].addEventListener("click",()=>
         compare(compChoice(),"rock")
     );
     images[1].addEventListener("click",()=>   
          compare(compChoice(),"paper")
     );
     images[2].addEventListener("click",()=>                                       
          compare(compChoice(),"scissors")
     );
}

let won=0;
function compare(compMove,userMove){
     let moves=document.querySelector('.game span')
     moves.innerText=`You: ${userMove} & Computer: ${compMove}`;
     let s;
     if(compMove===userMove){
          s=`Tie`;
     }
     else if((compMove==="rock" && userMove==="scissors")|| (compMove==="paper" && userMove==="rock")|| (compMove==="scissors" && userMove==="paper")){
          s=`Lost`;
     } 
     else if((compMove==="rock" && userMove==="paper")|| (compMove==="paper" && userMove==="scissors")|| (compMove==="scissors" && userMove==="rock")) { 
          s=`Won`;
          won++;
     }
     let result=document.getElementById("result");
          console.log(result.innerText=`Result : ${s}`);
     let score=document.getElementById("score");
          console.log(score.innerText=`Your Score : ${won}`); 
};   

userChoice();



