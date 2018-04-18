import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// time and date
clock.granularity = "minutes";
function updateClock() {
  let elTime = document.getElementById("time");
  let elDate = document.getElementById("date");
  let dtDate = new Date();
  let iHours = util.monoDigits(dtDate.getHours());
  let spacer = ' ';
  let iMins = util.monoDigits(util.zeroPad(dtDate.getMinutes()));
  
  iHours = iHours % 24;
  iHours = iHours ? iHours : 24;

  elTime.text = `${iHours}${spacer}${iMins}`;
  
  elDate.text = `${util.getDay3(dtDate.getDay())} ${dtDate.getDate()} ${util.getMonth3(dtDate.getMonth())}`;
}

clock.ontick = () => updateClock();
// END time and date

// battery
import { battery } from "power";
// Switch for Battery Display
let switcher = false;
let myBatIcn = document.getElementById("batIcon");
let myBatRect = document.getElementById("batRect");
let batHeight = Math.round((100-battery.chargeLevel)*0.14);
  
myBatRect.height = batHeight;

if ( switcher === false) {
  myBatIcn.style.display = "inline";
  switcher = true;
  console.log("Current battery level: " + batHeight);
} else {
  myBatIcn.style.display = "none";
  switcher = false;
}
// END battery

// animations start on screen on
import { display } from "display";

display.onchange = function() { 
  if (display.on) {
    displayOn();
  } else {
    displayOff();
  }
}

var clouds1 = document.getElementById("cloudsAnimation1");
var clouds2 = document.getElementById("cloudsAnimation2");
var propellersMove = document.getElementById("propellersMove");
var propellersAnimation = document.getElementById("propellersAnimation");
var planeMove = document.getElementById("planeMove");
var planeAnimation = document.getElementById("planeAnimation");
var dotsBlink182 = document.getElementById("dotsBlink182");

function displayOn() {
  console.log("Display ON");
  
  propellersMove.animate("enable");
  planeMove.animate("enable");
  clouds1.animate("enable");
  dotsBlink182.animate("enable");
  
  planeMove.style.visibility = "visible";
  propellersMove.style.visibility = "visible";
  
  setTimeout(function() {
    propellersAnimation.animate("enable");
    planeAnimation.animate("enable");
  }, 6000);
  
  setTimeout(function() {
    clouds2.animate("enable");
  }, 750);
}

function displayOff() {
  console.log("Display OFF");
  
  clouds1.animate("disable");
  clouds2.animate("disable");
  propellersMove.animate("disable");
  propellersAnimation.animate("disable");
  planeMove.animate("disable");
  planeAnimation.animate("disable");
  planeMove.style.visibility = "hidden";
  propellersMove.style.visibility = "hidden";
  dotsBlink182.animate("disable");
}
// END animations start on screen on