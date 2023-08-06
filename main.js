var img = "";
var img2 = "";
var img3 = "";
var img4 = "";
var img5 = "";



function setup(){
    canvas = createCanvas(402, 902);
    canvas.center();
}
function preload(){
    img = loadImage("img1.jpeg");
    img2 = loadImage("img2.jpeg");
    img3 = loadImage("img3.jpeg");
    img4 = loadImage("img4.jpeg");
    img5 = loadImage("img5.jpeg");
}
function draw(){
    image(img, 0, 0, 402, 902);
    fill("black");
    text("Light bulb & sky", 45, 75);
    noFill();
    stroke("black");
    rect(10, 5, 450, 450);
}
function nextimg(){
    
}