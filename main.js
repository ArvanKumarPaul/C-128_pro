var harry_potter = "";
var gopnik = "";

left_wristX = 0;
left_wristY = 0;
right_wristX = 0;
right_wristY = 0;

function preload() {

  harry_potter = loadSound("music.mp3");
  gopnik = loadSound("music2.mp3");

}

function setup () {

  canvas = createCanvas(640,350);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);

}

function draw() {

  image(video,640,350);

}

function gotPoses(results) {

  if(results.length>0) {

    left_wristX = results[0].pose.leftWrist.x;
    left_wristY = results[0].pose.leftWrist.y;
    right_wristX = results[0].pose.rightWrist.x;
    right_wristY = results[0].pose.rightWrist.y;

  }

}