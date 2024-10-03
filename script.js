
const acceleration = 9.8;

const height = prompt("Is kokio aukscio soka parasiutininkas?");

let dropTime = Math.sqrt((2 * height) / acceleration);

let unfoldingTime = prompt("Per kiek laiko issiskleidzia parasiutas?");

// if(dropTime<unfoldingTime){
//     console.log("Parasiutas nespes issikleisti");}
//     else{
//         console.log("Parasiutas spes issiskleisti");
//     }

if(height && unfoldingTime){
    let Tripresult = dropTime < unfoldingTime
    ? "Parasiutas nespes issikleisti" 
    : "Parasiutas spes issiskleisti";
    
    console.log(Tripresult);


}else{

    alert("Suveskite duomenis!");

}


