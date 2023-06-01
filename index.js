var images = ["image3.jpg", "image2.jpg"]; // Array of image paths
var currentIndex = 0;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var textStyles = {
  fontFamily: "Times New Roman",
  fontSize: "50px",
  color: "#000",
  textAlign: "center",
  textBaseline: "middle",
};
var textContents = [
  ["Hi!", "I'm AqSu"],
  ["I am", "a Software Engineer"],
];

function drawImageWithText() {
  var image = new Image();
  image.onload = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    context.fillStyle = textStyles.color;
    context.font = textStyles.fontSize + " " + textStyles.fontFamily;
    context.textAlign = textStyles.textAlign;
    context.textBaseline = textStyles.textBaseline;

    var firstLineY = (canvas.height / 2) - 30;
    var secondLineY = (canvas.height / 2) + 30;

    context.fillText(
      textContents[currentIndex][0],
      canvas.width / 2,
      firstLineY
    );
    context.fillText(
      textContents[currentIndex][1],
      canvas.width / 2,
      secondLineY
    );
  };
  image.src = images[currentIndex];
}

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image when reaching the end
  drawImageWithText();
}

drawImageWithText(); // Initial rendering
setInterval(changeImage, 5000); // Change image every 5 seconds