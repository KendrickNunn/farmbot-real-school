//farmbot api token
var darealtoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ1bmtub3duIiwic3ViIjoxMDU3MCwiaWF0IjoxNjM2NjUxMDg0LCJqdGkiOiJmODdhMDQ3NC0zZWQ2LTQ0MTEtYjk5Zi0wYzBiYTI4MWU1ODIiLCJpc3MiOiIvL215LmZhcm0uYm90OjQ0MyIsImV4cCI6MTY0MTgzNTA4NCwibXF0dCI6ImNsZXZlci1vY3RvcHVzLnJtcS5jbG91ZGFtcXAuY29tIiwiYm90IjoiZGV2aWNlXzEwNTgwIiwidmhvc3QiOiJ4aWNvbmZ1bSIsIm1xdHRfd3MiOiJ3c3M6Ly9jbGV2ZXItb2N0b3B1cy5ybXEuY2xvdWRhbXFwLmNvbTo0NDMvd3MvbXF0dCJ9.FPQ_fvgGdfZEdBEq4oqUZ_KPIhIeV6-2aDrO3ztV3LqLvNqjwbaoNA9VAhzxQR3tO7BzkAoWVfS0iBs4II2dnCmwjJaRfj2BULCRR2vRq-a9hUdCH12c3KGr8hMOmaUuHqzaimORbyM7QAmKliQwJ_46dQ2oewOBBEqNEOEH_qtz1fQ95TqoIwxF--s2j7GQ8w-iH4ZDOLljQjwLpXRGqHjfe79AOeSbU5r9ByWCe0e4slNMl4okxz9sgyc9AUw2Bf1b5k2c_cU015V9bXcHsU9mfv0O6E0ytgAQkTnko2ENAb70qVPb2okaC4ip1zKtj82-ENUf0GYPjS03EiA6uw";



//connects to farmbot command

let farmbot123 = new fbjs.Farmbot({ token: darealtoken });
  farmbot123
    .connect()
    .then(function(farmbot123){
      console.log("Bot online!");
      return farmbot123.moveRelative({ x: 50, y: 0, z: 0, speed: 100 });
    })

//varribles
// .value attached to the textbox varible makes it output the value attached
var textbox = document.getElementById("numbsinput")
textbox.value = 0;

var reading = "What you need to know \n-------------------------------------------------------\n \n The top row is where you can see the name of the tab such as \"navigation\" and \"camera\" and there is also the tab selector as you can see in the small round bubble at the top left corner. \n \n The button for navigation the pin point scope logo and clicking it brings you to the navigation tab as stated earlier\n \nThe button for the camera tab is the camera and this is where you can take and see the photos using the farmbot camera \n \n What does the navigation tab do? - \n you can move around the farmbot in any selected quantity in millimeters \n \n------------------------------------------- \n \n The home buttons are goto home and find homeThe Find home button finds the home point for the Farmbot to start usually the corner of the grid. \n \n Goto home goes to the home point so, you have a fresh start of where the bot is \n \n----------------------------------------------------------- \n \n Typing in a amount of measurement to moveAs you can see in the green box above the directional key layout for the farmbot it says to put in a number to move in millimetersJust type in how many millimeter as a number and don't add anything at the endEx -   100--------------------------------------------------------------------------------------------------------------movement buttonsAs you can see there is a set of buttons that look like -    ^      ^<- v ->   vOn the left side buttons that is the move the bot left, right, backwards, and forwards relative to its location on the farm. On the right side those are the move the farm bot up and down on the z axis relative to its position-------------------------------------------------------"

//---------------------------------------------------------------------------------------------
//onlick commands

//onlick up
document.getElementById("upclickbutton").onclick = forwardclick1
//onlick down
document.getElementById("downclickbutton").onclick = backingclick1
//onlick left
document.getElementById("leftclickbutton").onclick = leftclick1
//onlick right
document.getElementById("rightclickbutton").onclick = rightclick1
//onlick lift
document.getElementById("liftclickbutton").onclick = liftclick1
//onlick delift
document.getElementById("lowclickbutton").onclick = deliftclick1
//onclick comand for  readme
document.getElementById("readme").onclick = readme

//---------------------------------------------------------------------------------------------

//functions

// Edited by Mr. Eguia. Move up button works now
//up
function forwardclick1() {
  console.log("succesfully clicked the moved forward button sir");
  farmbot123
    .connect()
    .then(function(farmbot123){
      console.log("success, you moved the bot forward "+textbox.value+" millimeters")
      return farmbot123.moveRelative({ x: 0, y: parseInt(textbox.value), z: 0, speed: 100 });
    });
}

//down
function backingclick1() {
  console.log("succesfully clicked the moved back button sir");
  farmbot123
    .connect()
    .then(function(farmbot123){
      console.log("success, you moved the bot back "+textbox.value+" millimeters")
      return farmbot123.moveRelative({ x: 0, y: parseInt("-" + textbox.value), z: 0, speed: 100 });
    });
}

//left
function leftclick1() {
  console.log("succesfully clicked the moved left button sir");
  farmbot123
    .connect()
    .then(function(farmbot123){
      console.log("success, you moved the bot left "+textbox.value+" millimeters")
      return farmbot123.moveRelative({ x: parseInt("-" +textbox.value), y: 0, z: 0, speed: 100 });
    });
}

//right
function rightclick1() {
  console.log("succesfully clicked the moved right button sir");
  farmbot123
    .connect()
    .then(function(farmbot123){
      console.log("success, you moved the bot right "+textbox.value+" millimeters")
      return farmbot123.moveRelative({ x: parseInt(textbox.value), y: 0, z: 0, speed: 100 });
    });
}

//lift
function liftclick1() {
  console.log("succesfully clicked the moved lift button sir");
  farmbot123
    .connect()
    .then(function(farmbot123){
      console.log("success, you moved the bot lifted "+textbox.value+" millimeters")
      return farmbot123.moveRelative({ x: 0, y: 0, z: parseInt(textbox.value), speed: 100 });
    });
}

//lower
function deliftclick1() {
  console.log("succesfully clicked the moved lower button sir");
  farmbot123
    .connect()
    .then(function(farmbot123){
      console.log("success, you moved the bot vertically down "+textbox.value+" millimeters")
      return farmbot123.moveRelative({ x: 0, y: 0, z: parseInt("-" + textbox.value), speed: 100 });
    });
}

//function for alerting the instructions /read.me
function readme() {
  alert(reading);
}
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------

