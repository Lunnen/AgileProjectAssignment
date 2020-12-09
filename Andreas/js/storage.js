"use strict";
/*---------------------------------------------------
Reads the localStorage data line by line and pushes it into imgContainer. */

let local = JSON.parse(localStorage.getItem("pureData")) || [];

if (local !== null) {
  for (let i = 0; i < local.length; i = i + 5) {
    imgContainers.push(
      new ImgContainer(
        local[i], //read & push Category value
        local[i + 1], //read & push imgSrc
        local[i + 2], //read & push altName
        local[i + 3], //read & push Title value
        local[i + 4] //read & push Text value
      )
    );
  }
}
//---------------------------------------------------
function saveStorage() {
  localStorage.setItem("pureData", JSON.stringify(stringDataToSave)); //save the data locally as a string.
}
//---------------------------------------------------
