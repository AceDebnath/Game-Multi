var playing = false;
var score;
var action;
var timeremaining;
var correctAns;


//click on the start/restart button
document.getElementById("startRestart").onclick =
    function () {
        //if we are playing //if we hit the restart button
        if (playing == true) {
            location.reload();//relode the page 
        }
        else {//if we are not playing//if we hit the start button

            //change mode to playing 
            playing = true;

            //setting score to 0
            score = 0;
            //change th score value
            document.getElementById("scoreValue").innerHTML = score;
            //show countdown box
            document.getElementById("time").style.display = "block";
            //change button to restart 
            document.getElementById("startRestart").innerHTML = "Restart"

            //start countdown
            timeremaining = 60;
            startCountdown();

            //hide the game over box 
            hide("gameOver");

            //generate random Q&A
            generateQA();
        }
    }

    for(i=1;i<5;i++){
document.getElementById("box"+i).onclick=function(){
    //check if we are playing 
    if(playing==true){
        //yes
        if(this.innerHTML == correctAns){
            //correct ans 

            //increase score by one 
            score ++;
            document.getElementById("scoreValue").innerHTML = score;
            document.getElementById("gameOverValue").innerHTML = score;

            //hide wrong box and show correct box

            hide("wrong")
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000)

            //generate new qns ans ans

            generateQA();
        }
        else{
            //if wrong ans 
            hide("correct")
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000)
        }

    }
}
    }



//funcation

//start the count down 
function startCountdown() {
    action = setInterval(function () {
        timeremaining -= 1;
        document.getElementById("timevalue").innerHTML = timeremaining;
        if (timeremaining == 0) {
            stopCountdown();
            //to display the game over after the countdown finish
            show("gameOver");
            //to remove the count down when countdown ends
            hide("time");
            //hide correct and incorrect box 
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startRestart").innerHTML = "start";

        }
    }, 1000);
}
//stop the countdown
function stopCountdown() {
    clearInterval(action);
}
// to dispaly show 
function show(Id) {
    document.getElementById(Id).style.display = "block";
}
//to dis play hide
function hide(Id) {
    document.getElementById(Id).style.display = "none";
}
function generateQA() {
    var x = 1 + Math.round(Math.random() * 9);
    var y = 1 + Math.round(Math.random() * 9);
    correctAns = x * y;
    document.getElementById("question").innerHTML = x + "X" + y;
    var correctPosition = 1 + Math.round(Math.random() * 3)
    //fill the box with correct ans 
    document.getElementById("box" + correctPosition).innerHTML = correctAns;
    
    //creating an array to chek the ans are same or not 
    Answers =[correctAns]
    //fill the other boxes 
    for (i = 1; i < 5; i++) {
        var wrongans;
        if (i != correctPosition) {
            do {
                wrongans = (1 + Math.round(Math.random() * 9)) * (1 + Math.round(Math.random() * 9));
            }
            while (Answers.indexOf(wrongans)>-1)

            document.getElementById("box" + i).innerHTML = wrongans;
            Answers.push(wrongans);
        }
    }
}