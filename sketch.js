//This is for creating thre local variables
var monkey_mov,monkey,banana_img,obstacle_img,backgroundj,invground,ground,obstacleg,bananag;
var score = 0;

//This is function preload
function preload()
{
 banana_img=loadImage("Banana.png");
 obstacle_img=loadImage("stone.png");
 backgroundj=loadImage("jungle2.jpg");
 monkey_mov=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png",
"Monkey_09.png","Monkey_10.png");
}

//This is function setup
function setup() 
{
  createCanvas(800,400);
  
  //This is for creating the background
  ground=createSprite(0,0,600,20);
  ground.addImage(backgroundj);
  ground.scale = 1.5;
  ground.velocityX=-10;
  
  //This is for creating the invisible ground
  invground = createSprite(200,370,400,20);
  invground.visible = false;
  
  //This is for creating the monkey sprite and           giving it an animation and scaling it
  monkey = createSprite (200,350,10,10);
  monkey.addAnimation( "mon",monkey_mov);
  monkey.scale=0.1;
  
  //This is for creating the groups
  obstacleg = new Group();
  bananag = new Group();
  
  score = 0
}

function draw() 
{
  background(220);
  
  //This is for jumping the trex with up arrow
  if (keyDown("up")) 
  {
   monkey.velocityY=-10;
  }
  
  //This is for adding gravity to monkey
  monkey.velocityY=monkey.velocityY +0.5;
  
  //This is for resetting the stage and           colliing the monkey to ground
  monkey.collide(invground);
  if (invground.x<0)
  {
      invground.x = invground.width/2;
  }
  if(ground.x<0) 
  {
    ground.x=ground.width/2;
  }
  
  
  spawnban();
  spawnston();
  
  if(bananag .isTouching(monkey))
  {
    bananag.destroyEach();
    score=score+1;
  }
    switch(score)
    {
    
    case 10:monkey.scale=0.12;
    break;
    
    case 20:monkey.scale=0.14;
    break;
    
    case 30:monkey.scale=0.16;
    break;
    
    case 40:monkey.scale=0.18;
    break;
    default:break;
    }
    
  
  
  if(obstacleg.isTouching(monkey))
  {
    
    monkey.scale = 0.08;
  }

  drawSprites();
  textFont("AR DECODE");
  textSize(50);
  text("Score:-"+score,20,300);
}
    function spawnban() {
  //write code here to spawn the food
  if (frameCount % 80 === 0) {
    var ban = createSprite(700,100,10,10);
    ban.y = random(80,120);    
    ban.addImage(banana_img);
    ban.scale = 0.1;
    ban.velocityX = -9;
     //assign lifetime to the variable
    ban.lifetime = 400/5;
    monkey.depth = ban.depth + 1;
    
    //add each banana to the group
    bananag.add(ban);
  }
}

function spawnston() { 
  if(frameCount % 80 === 0) {
    var ston = createSprite(700,360,5,5);
    ston.velocityX = -9;
    ston.addImage(obstacle_img);
    
    //assign scale and lifetime to the obstacle     
    ston.scale = 0.2;
    ston.lifetime = 400/5;
    
    //add each obstacle to the group
      obstacleg.add(ston);
  }
}