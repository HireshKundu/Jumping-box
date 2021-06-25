var fixedRect1, fixedRect2, fixedRect3,fixedRect4;
var box;

var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   fixedRect1 = createSprite(100,600,150,20)
   fixedRect1.shapeColor = "red"

   fixedRect2 = createSprite(300,600,150,20)
   fixedRect2.shapeColor = "green"

   fixedRect3 = createSprite(500,600,150,20)
   fixedRect3.shapeColor = "blue"

   fixedRect4 = createSprite(700,600,150,20)
   fixedRect4.shapeColor = "yellow"


    //create box sprite and give velocity

     box = createSprite(random(25,700),300,10,10)
     box.shapeColor = "white"
     box.velocityY = 2;
     
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();


    //add condition to check if box touching surface and make it bounce
    if(box.isTouching(fixedRect1)){
        box.shapeColor = "red"
        box.bounceOff(fixedRect1)
        music.play();
    }
    
    if(box.isTouching(fixedRect2)){
        box.shapeColor = "green"
        box.bounceOff(fixedRect2)
        music.play();
    } 
    if(box.isTouching(fixedRect3)){
        box.shapeColor = "blue"
        //box.bounceOff(fixedRect3)
        box.velocityY = 0;
        music.play();
    }

    if(box.isTouching(fixedRect4)){
        box.shapeColor = "yellow"
        box.bounceOff(fixedRect4)
        music.play();
    }

    createEdgeSprites();

   drawSprites();
}