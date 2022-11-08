img = "";
status = "";
function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function preload(){
    img = loadImage('lion.jpeg');
}
function draw(){
    image(img, 0,0,640,420);
    fill("##FFFFFF");
    text("lion",85,35)
    noFill();
    stroke("#FFFFFF");
    rect(80,40, 500, 375 );
}
function modelLoaded() {
    console.log("Model Activated!")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
if (error) {
    console.log(error);
}
console.log(results);
}