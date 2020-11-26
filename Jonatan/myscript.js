
const img = document.getElementById("myImg");
console.log(img.files);

//replace "input type=file" button with a custom button
const inputButton = document.getElementById("inputFile");
const customBtn = document.getElementById("custom-button");

//virtually clicks the input button
customBtn.addEventListener("click", function() {
    inputButton.click();
});

inputButton.addEventListener("change", function() {
    document.getElementById("inputFile").onchange = function() {
        document.getElementById("myForm").submit();
    }
});


window.addEventListener("load", function() {
    document.querySelector('input[type="file"]').addEventListener("change", function(){
        if(this.files && this.files[0]) {
            UploadImage(URL.createObjectURL(this.files[0]));
        }
    });
});

function UploadImage(imgSource) {
    picContainers.push(
        new PictureContainer(
          "FILTER",
          imgSource,
          "ALT",
          "TITLE",
          "TEXT"
        )
      );
}