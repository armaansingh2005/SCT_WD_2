let timer;
let running=false;


let hours=0;
let minutes=0;
let seconds=0;
let milliseconds=0;



function startTimer(){


    if(!running){


        running=true;


        timer=setInterval(()=>{


            milliseconds++;


            if(milliseconds==100){

                milliseconds=0;
                seconds++;

            }



            if(seconds==60){

                seconds=0;
                minutes++;

            }



            if(minutes==60){

                minutes=0;
                hours++;

            }



            updateDisplay();



        },10);



    }

}



function pauseTimer(){

    running=false;

    clearInterval(timer);

}




function resetTimer(){

    running=false;

    clearInterval(timer);



    hours=0;
    minutes=0;
    seconds=0;
    milliseconds=0;



    updateDisplay();



    document.getElementById("laps")
    .innerHTML="";


}




function updateDisplay(){



    let h =
    hours.toString()
    .padStart(2,'0');


    let m =
    minutes.toString()
    .padStart(2,'0');


    let s =
    seconds.toString()
    .padStart(2,'0');


    let ms =
    milliseconds.toString()
    .padStart(2,'0');



    document.getElementById("display")
    .innerHTML =
    `${h}:${m}:${s}:${ms}`;



}





function lapTime(){



    if(running){


        let lap =
        document.createElement("li");


        lap.innerText =
        document.getElementById("display")
        .innerText;



        document.getElementById("laps")
        .prepend(lap);


    }



}