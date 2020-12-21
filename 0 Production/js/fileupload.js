"use strict";
/*-----------------------------------------------------
Replace "input type=file" button with a custom button
*/
const customBtn = document.getElementById("custom-button");

//virtually clicks the input button
customBtn.addEventListener("click", function () {
  input.click();
});

var input = document.getElementById("inputFile");
input.addEventListener("change", showDataURI);

function showDataURI() {
  var output = document.getElementById("output");
  var file = input.files[0];

  var reader = new FileReader();
  reader.onload = (e) => {
    imgContainers.push(
      new ImgContainer(
        e.target.result, //sets value of raw-data-input in src.
        randomNrID(), //Random nr (ID) to sync DropEvent remove with imgContainers-array.
        "title",
        "Description"
      )
    );

    saveData(); //Saves everything in imgContainers to LocalStorage inside client browser.
    filterSelection("all"); //updates rendering of images
    createFilterButtons(); //Create a new filter button, if needed
  };
  reader.readAsDataURL(file);
  updateItems(); //updates items in the "dropEvents"
}
