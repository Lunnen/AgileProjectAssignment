

//replace input button with a custom button
const inputButton = document.getElementById("inputFile");
const customBtn = document.getElementById("custom-button");

customBtn.addEventListener("click", function() {
    inputButton.click();
});

inputButton.addEventListener("change", function() {
    if (inputButton.value) {
        console.log("file chosen");
        console.log(inputButton.value);
        console.log(inputButton.files[0]);
    }
    else {
        console.log("no file chosen");
    }
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