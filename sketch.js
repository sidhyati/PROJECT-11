var track, trackImg;
var runner, runnerRunning;
var leftBoundary, rightBoundary;

function preload(){
  //pre-load images
  trackImg = loadImage("path.png");

  runnerRunning = loadAnimation ("Runner-1.png", "Runner-2.png");
}


function setup(){
    createCanvas(400,400);
 
    //creating track sprite
      track = createSprite(200,200,)
      track.addImage("path.png", trackImg);

    //runner sprite
      runner = createSprite (280, 300);
      runner.addAnimation("running", runnerRunning);

    runner.scale = 0.1;

}

function draw() {
    background(0);

    //giving velocity to track sprite
      track.velocityY=6;

    //reset background
      if (track.y > 400){
        track.y = height/2;
      }

    //runner moves with mouse
    runner.x = mouseX

    //invisible boundaries
      leftBoundary = createSprite (20, 20, 60, 800);
      leftBoundary.visible = false;

      rightBoundary = createSprite (380, 20, 60, 800);
      rightBoundary.visible = false;

      runner.collide (leftBoundary);
      runner.collide (rightBoundary);



    drawSprites();
}
