const max=prompt("Enter the maximum number number");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number if you want to quit then please enter quit as input");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("You are right! congrats!! the random number is :",random);
        break;
    }
    else{
       guess= prompt("You are wrong ! please try again");
    }
}