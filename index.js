var numDis = document.getElementById("numDisplay");
var inpNum = document.getElementById("num");
var answer = Math.round(Math.random()*100);
var score = 100;

document.getElementById("guess").addEventListener("click", function (){
//    console.log("clicked");
//    console.log(inpNum.value);
//    parseInt takes a fake number and changes it into a real number
//    console.log("45"+1, parseInt("45")+1);
    var myNum = parseInt(inpNum.value);
    
    if(myNum == answer){
        numDis.innerText = "You win!  Your score is "+score;
        
    } else {
        score = score -1;
        
        if (myNum > answer) {
            numDis.innerText = "Too big";
        
        } else if (myNum < answer) {
            numDis.innerText = "Too small";
            
        } else {
            numDis.innerText = "Enter a number";
        }
    }
});