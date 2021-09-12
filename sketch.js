var canvas, backgroundImage,done;

var questions;

var question, contestant, quiz;

function preload()
{
  backgroundImage = loadImage("GK.jpg")
}

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background(backgroundImage);

}
