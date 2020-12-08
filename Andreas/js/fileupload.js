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
        prompt("Enter Filter button Category: ", ""),
        e.target.result, //sets value of raw-data-input in src.
        prompt("Enter Alternative name (if image cannot load): ", ""),
        prompt("Image title: ", ""),
        prompt("Enter text to describe the image", "")
      )
    );

    localStorage.setItem("pureData", JSON.stringify(stringDataToSave)); //save the data locally as a string.

    filterSelection("all"); //updates rendering of images
    createFilterButtons(); //Create a new filter button, if needed
  };
  reader.readAsDataURL(file);
}
