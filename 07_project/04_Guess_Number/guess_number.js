  let randomNum = Math.round(Math.random()*10+1);
  console.log(randomNum);
  const submit = document.querySelector('#submitBtn');
  const input = document.querySelector('#input');
  const message = document.querySelector('.message');
  const attempt = document.querySelector('.attempts');
  let attempts =0;
  const maxAttempts = 6;
  
  submit.addEventListener('click',function(e){
    e.preventDefault()
    if(attempts>=maxAttempts){
      message.innerHTML = `Game Over, You have used ${maxAttempts} changes attempts Random Number :${randomNum}`
      submit.disabled = true; 
      return;
    }
    const guess = parseInt(input.value);
    attempts++
    attempt.innerHTML =`Attempts : ${attempts}`
    if(randomNum===guess){
      message.innerHTML=`You guess is right ,Random Number : ${randomNum},Your Number :${guess}`
      submit.disabled =true
    } else if(randomNum>guess){
       message.innerHTML = `You guess number is lesser than actual number` 
    } else if(randomNum<guess){
       message.innerHTML = `You guess number is greater than actual number` 
    }

    if(attempts === maxAttempts && randomNum !== guess){
      message.innerHTML += `<br>😞 Game Over! सही नंबर था: ${randomNum}`;
      submit.disabled = true;
    }
  });
  function newGame(){
    const newGameButton = document.querySelector('$newGame');
    newGameButton.addEventListener('Click',function(e){
      randomNum=Math.round(Math.random()*10+1);
    })
  }
