setTimeout(function () {

    document.getElementById("fireStatus").innerHTML =
    "🔴 FIRE DETECTED";
    document.getElementById("fireStatus").className = "red";

    document.getElementById("floodStatus").innerHTML =
    "🔴 FLOOD DETECTED";
    document.getElementById("floodStatus").className = "red";

    document.getElementById("powerStatus").innerHTML =
    "🟠 POWER FAILURE";

    document.getElementById("waterStatus").innerHTML =
    "🔴 WATER LEVEL HIGH";

}, 8000);
