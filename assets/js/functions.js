var HamiltonHoursButton = document.getElementById("HamiltonHoursButton");
var BoarHoursButton = document.getElementById("BoarHoursButton");
var HamiltonHours = document.getElementById("HamiltonHours");
var BoarHours = document.getElementById("BoarHours");

BoarHours.style.visibility = "visible";
//console.log("here");

function changeHours(what){
    if(what == "Ham"){
        //HamiltonHours.style.visibility = "visible";
        //BoarHours.style.visibility = "hidden";
        //HamiltonHours.style.transform = "scale(1.0)";
        //BoarHours.style.transform = "scale(0.0)";
        HamiltonHours.style.display = "initial";
        BoarHours.style.display = "none";

    }
    else{
       // BoarHours.style.visibility = "visible";
        //HamiltonHours.style.visibility = "hidden";
        //BoarHours.style.transform = "scale(1.0)";
        //HamiltonHours.style.transform = "scale(0.0)";
        HamiltonHours.style.display = "none";
        BoarHours.style.display = "initial";
        
    }
}

HamiltonHoursButton.addEventListener("click", function(){ changeHours("Ham");}, false);
BoarHoursButton.addEventListener("click", function(){ changeHours("Boar");}, false);

