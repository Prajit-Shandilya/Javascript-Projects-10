const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var button1, ground;
var upground, mScreen, suoo;


function setup() {
    createCanvas(2000, 700);


    engine = Engine.create();
    world = engine.world;

    upground = new OBS1(1000, 25, 400, 90);
    mScreen = new OBS4(1000, 350, 400, 700);

    suoo = new OBS3(1000, 30, 100, 7);
    ground = new OBS1(1000, 675, 400, 90);
    button1 = new OBS2(1000, 672, 20);

    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(200);
    //text(mouseX + ";" + mouseY, 200, 200);
    textSize(20);
    fill("blue");
    textFont("Comic Sans Ms");


    mScreen.display();
    upground.display();
    suoo.display();
    ground.display();
    button1.display();
    drawSprites();
    text("WelcomeTo Prajit's Bank!", 885, 250);
    text("This Game Is In Progress", 875, 300);
    text("If You Want To Enjoy", 875, 400);
    text("Press the Space Button", 865, 420);
}