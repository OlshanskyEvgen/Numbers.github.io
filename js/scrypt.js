let userName = null;
let userBalance = 5000;
let userStat = 0;
let computerStat = 0;;
const typeBet = document.querySelector('#bet');
const win = document.querySelector('#startBtn');

 do{
 userName = prompt("Введіть ваше ім'я", "Гравець");} while ( userName == null || userName.trim() === "" );
document.getElementById('playerName').innerText = userName;

balanceAnimation();
const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', () =>{
    let bet = parseInt(typeBet.value);
    startBtn.disabled = true;
    typeBet.disabled = true;
    if(!checkBet(bet) || !checkBalance(userBalance, bet) ){
        typeBet.disabled = false;
        return;
    }
    let userNumber = Math.floor(Math.pow(Math.random(), 1/0.4)*100)+1;
    let computerNumber = Math.floor(Math.pow(Math.random(), 1/0.6)*100)+1;
    numberAnimation(userNumber,computerNumber)
    if(userNumber > computerNumber ){
        userStat ++;
        setTimeout(()=>{
            startBtn.disabled = true;
            document.getElementById('playerStat').innerText = userStat;
        },1100)
    }else if (userNumber < computerNumber){
        computerStat ++;
        setTimeout(()=>{
            startBtn.disabled = true;
            document.getElementById('computerStat').innerText = computerStat;
        },1100)
        
    }else {
        userStat ++;
        computerStat ++;
        setTimeout(()=>{
            startBtn.disabled = true;
            document.getElementById('computerStat').innerText = computerStat;
        document.getElementById('playerStat').innerText = userStat;
        },1100) 
    }
    setTimeout(()=>{
            if(userStat >= 3){
        winAnimation();
        balanceAnimationPlus(bet,userBalance)
        userBalance += bet;
        userStat = 0;
        computerStat =0;
         document.getElementById('computerStat').innerText = computerStat;
        document.getElementById('playerStat').innerText = userStat;
    }else if (computerStat >= 3){
        loseAnimation()
        balanceAnimationMinus(bet,userBalance)
        userBalance -= bet;
        userStat = 0;
        computerStat =0;
         document.getElementById('computerStat').innerText = computerStat;
        document.getElementById('playerStat').innerText = userStat;
    }else if (computerStat === userStat && computerStat >= 3 ){
        drawAnimation()  
        userStat = 0;
        computerStat =0;
         document.getElementById('computerStat').innerText = computerStat;
        document.getElementById('playerStat').innerText = userStat;
    }},1100) 
  
     
});
function checkBet(bet){
  if( isNaN(bet)){
        alert("нема ставки нема гри");
        return false;
    }else if ( bet <= 0){
        alert("В кредит не граємо");
        return false;
    }else{
    return true;}
}
function checkBalance(balance, bet){
 if(balance === 0 || balance < bet){
        alert("Не вистачає грошей");
        return false;
    }else{
        return true;
    }
    

}
function numberAnimation(finalNumberUser,finalNumberComputer ){
    let interval = setInterval (() => {
    let numberUser = Math.floor(Math.random()*100);
    let numberComputer = Math.floor(Math.random()*100);
    document.getElementById('computerNumb').innerText =  numberComputer;
    document.getElementById('playerNumb').innerText =  numberUser;
    setTimeout(()=> {
        document.getElementById('computerNumb').innerText = finalNumberComputer;
        document.getElementById('playerNumb').innerText = finalNumberUser;
        clearInterval(interval);
    }, 1000)
    }, 50)

}
function balanceAnimationPlus(bet,balance){
     const time = 100;
     let  step = 0;
     let countStep = Math.round (time/(bet/10));
     if (bet/10 <= 1 || bet/10 <= 10){
        step = 1;
     }else if (bet/10 > 10 || bet/10 < 100){
        step = 10;
     }else {
        step = 100;
     }
     const stop = balance + bet;
     let animation = setInterval (()=>{
        balance += step;
         if(balance === stop){
            clearInterval (animation);
     }
        document.getElementById('balance').innerHTML = `Ваш баланс: <br> ${balance}₴`;
     }, countStep);
}
function balanceAnimationMinus(bet,balance){
     const time = 100;
     let  step = 0;
     let countStep = Math.round (time/(bet/10));
     if (bet/10 <= 1 || bet/10 <= 10){
        step = 1;
     }else if (bet/10 > 10 || bet/10 < 100){
        step = 10;
     }else {
        step = 100;
     }
     const stop = balance - bet;
     let animation = setInterval (()=>{
        balance -= step;
         if(balance === stop){
            clearInterval (animation);
     }
        document.getElementById('balance').innerHTML = `Ваш баланс: <br> ${balance}₴`;
     }, countStep);
}
function balanceAnimation (){
        const time = 1000;
        const step = 10;
        let startBalance = 0;
        let countStep = Math.round(time/(userBalance/step));
        let animation = setInterval (()=>{
            startBalance += step;
            if (startBalance === userBalance){
                clearInterval(animation);
            }
            document.getElementById('balance').innerHTML = `Ваш баланс: <br> ${startBalance}₴`;
        }, countStep)
 }
 function winAnimation(){
        win.style.background = 'linear-gradient(0deg, #03f330, #2db947ff )';
        win.innerText = "Ви перемогли";
        setTimeout(()=>{
            typeBet.disabled = false;
            startBtn.disabled = false;
            win.style.background = 'linear-gradient(0deg, #2c2c2c, #676767 )';
        win.innerText = "Грати";
        },2000)
 }
  function loseAnimation(){    
        win.style.background = 'linear-gradient(0deg, #920000, #ff0000 )';
        win.innerText = "Ви програли";
        setTimeout(()=>{
            typeBet.disabled = false;
            startBtn.disabled = false;
            win.style.background = 'linear-gradient(0deg, #2c2c2c, #676767 )';
        win.innerText = "Грати";
        },2000)
 }

  function  drawAnimation(){
        win.style.background = 'linear-gradient(0deg, #000c92ff, #0666ffff )';
        win.innerText = "перемогла дружба";
        setTimeout(()=>{
            typeBet.disabled = false;
            startBtn.disabled = false;
            win.style.background = 'linear-gradient(0deg, #2c2c2c, #676767 )';
        win.innerText = "Грати";
        },2000)
 }