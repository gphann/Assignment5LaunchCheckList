// Write your JavaScript code here!
window.addEventListener("load", function() {
   // let button = document.getElementById("formSubmit");
   // button.addEventListener("click", function(event) {
   let json = [];   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
            response.json().then(function(json) {

            const target = document.getElementById('missionTarget');
            target.innerHTML = `
            <div class = "target">
            <ol>
                  <li> Name: ${json[0].name} </li>
                  <li> Diameter: ${json[0].diameter} </li>
                  <li> Star: ${json[0].star} </li>
                  <li> Distance from Earth: ${json[0].distance} </li>
                  <li> Number of moons: ${json[0].moons} </li>
                  <img src = "${json[0].image}">
            </ol>
            `;
         });
      });

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      
      let form = document.querySelector('form');
      form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (pilotNameInput.value.trim() === "" || null || copilotNameInput.value.trim() === "" || null || fuelLevelInput.value === "" || null || cargoMassInput.value === "" || null) {
         window.alert("All fields are required!");
      };
      if (isNaN(pilotNameInput.value) === false) {
         window.alert("Please enter alphanumeric characters for pilot name.");
      };
      if (isNaN(copilotNameInput.value) === false) {
         window.alert("Please enter alphanumeric characters for co-pilot name.");
      };
      if (isNaN(fuelLevelInput.value) === true) {
         window.alert("Please enter a number for the fuel level.");
      };
      if (isNaN(cargoMassInput.value) === true) {
         window.alert("Please enter a number for the cargo mass.");
      };
     
      let faultyItemShow = document.getElementById("faultyItems");
      faultyItemShow.style.visibility = "visible";

      let pilotStatusReady = document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} ready.`;
      let copilotStatusReady = document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput.value} ready.`;
     
      if (fuelLevelInput.value < 10000 && cargoMassInput.value <= 10000) {
         launchStatus.style.color = "red";
         let fuelLevelLow = document.getElementById("fuelStatus");
         fuelLevelLow.innerHTML = `Not enough fuel for the journey.`;
         let launchStatusNotReady = document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch!`;
         let cargoMassLight = document.getElementById("cargoStatus");
         cargoMassLight.innerHTML;
      
      } else if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
         launchStatus.style.color = "red";
         let fuelLevelLow = document.getElementById("fuelStatus");
         fuelLevelLow.innerHTML = `Not enough fuel for the journey.`;
         let launchStatusNotReady = document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch!`;
         let cargoMassHeavy = document.getElementById("cargoStatus");
         cargoMassHeavy.innerHTML = `Too much mass for the shuttle to take off.`;

      } else if (fuelLevelInput.value >= 10000 && cargoMassInput.value > 10000) {
         launchStatus.style.color = "red";
         let launchStatusNotReady = document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch!`;
         let fuelLevelEnough = document.getElementById("fuelStatus");
         let cargoMassHeavy = document.getElementById("cargoStatus");
         cargoMassHeavy.innerHTML = `Too much mass for the shuttle to take off.`;
      
      } else if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000) {
         launchStatus.style.color = "green";
         let launchStatusReady = document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch!`;
         let fuelLevelEnough = document.getElementById("fuelStatus");
         let cargoMassLight = document.getElementById("cargoStatus");
         cargoMassLight.innerHTML;
      };

   });

});

// /* This block of code shows how to format the HTML once you fetch some planetary JSON!
// <h2>Mission Destination</h2>
// <ol>
//    <li>Name: ${}</li>
//    <li>Diameter: ${}</li>
//    <li>Star: ${}</li>
//    <li>Distance from Earth: ${}</li>
//    <li>Number of Moons: ${}</li>
// </ol>
// <img src="${}">
// /*
