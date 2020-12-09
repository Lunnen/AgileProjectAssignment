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
        prompt("Image category: ", ""),
        prompt("Enter Category", ""),
        e.target.result, //sets value of raw-data-input in src.
        prompt("Alternative name (if image cannot load): ", ""),
        prompt("Title: ", ""),
        prompt("Description: ", "")
      )
    );

    localStorage.setItem("pureData", JSON.stringify(stringDataToSave)); //save the data locally as a string.

    createFilterButtons(); //Create a new filter button, if needed
    filterSelection("all"); //updates rendering of images
    updateItems(); //updates items in the "dragtodelete"
  };
  reader.readAsDataURL(file);
}
