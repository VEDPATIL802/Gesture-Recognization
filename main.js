noseX = 0
noseY = 0
rightWristX = 0
leftWristX = 0
difference = 0

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#00ff00");
    document.getElementById("square_sides").innerHTML="width and a height of the square = "+difference+"px";
    fill("#3333ff");
    stroke("#bf00ff");
    square(noseX, noseY, difference);

}

function modelLoaded() {
    console.log("poseNet is initiallize")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX= " + rightWristX + " difference = " + difference);
    }
}