const enter=document.getElementById("enterBtn");

const hero=document.querySelector(".hero");

const dash=document.getElementById("dashboard");

enter.onclick=function(){

hero.style.display="none";

dash.style.display="block";

setTimeout(startEmergency,8000);

}

function startEmergency(){

document.getElementById("fireStatus").innerHTML="🔴 FIRE DETECTED";

document.getElementById("fireStatus").className="red";

document.getElementById("floodStatus").innerHTML="🔴 FLOOD DETECTED";

document.getElementById("floodStatus").className="red";

document.getElementById("powerStatus").innerHTML="🟠 POWER FAILURE";

document.getElementById("powerStatus").className="orange";

document.getElementById("waterStatus").innerHTML="🔴 WATER LEVEL HIGH";

document.getElementById("waterStatus").className="red";

document.body.style.animation="flash .5s infinite";

}
