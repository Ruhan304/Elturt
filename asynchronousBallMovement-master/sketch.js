var ball;
var database;
var position;

function setup(){
    database = firebase.database()
    createCanvas(1000,1000);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var get = database.ref('ball/position')
    get.on(
        "value",readPosition
    )
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-8,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(8,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-8);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+8);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set({
        'x' : position.x + x,
        'y' : position.y + y
    })
    
}

function readPosition(data){
    position = data.val()
    ball.x = position.x
    ball.y = position.y
    }

























































































































































































































































































































































































