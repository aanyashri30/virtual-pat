//Create variables here
var dog,dogImg,dogImg1;
var food,foodStock;
var database;
var foods;

function preload()
{
  //load images here
  dogImg = loadImage("images/dog1.png");
  dogImg1 = loadImage("images/dog.png");
}

function setup() {
	createCanvas(800, 700);
  
  database = firebase.database();

  dog = createSprite(250,300,50,50);
  dog.scale = 0.4;
  dog.addImage(dogImg);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
}


function draw() {  
background("pink");

if(keyWentDown("UP_ARROW"))
{
     writeStock(foods);
     dog.addImage(dogImg1);
}

  drawSprites();
  fill("black");
  text("Food Remaining:"+foods,170,200);
  textSize(13);
  text("Press up arrow key to feed the doggy",300,20);
  //add styles here

}

  function writeStock(x)
  {
     if(x<=0)
     {
       x = 0
     } 
     
     else
    {
      x = x-1;
    }
    database.ref('/').update({
      Food:x
    })
  }


