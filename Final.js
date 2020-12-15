let scoreEl = document.getElementById('score')
let highScoreEl = document.getElementById('highScore')
let highScore = 0
let score = 0
let startButton = document.getElementById('start')
let trail = []
let tail = 0
let speed = 100
let size = 24
let headX = 25
let headY = 25
let dotX = 112.5
let dotY = 112.5
let moveLeftHandler
let moveRightHandler
let moveDownHandler
let moveUpHandler
let goingLeft = false
let goingRight = false
let goingUp = false
let goingDown = false

function setup() {
    createCanvas(600,600)

}

function draw() {
    background('lightgreen')
    square(headX,headY,size)
    fill('red')
    circle(dotX, dotY, size)
    fill(1)
    noStroke()
   
  for (let i = 0; i < trail.length; i++){
        
        square(trail[i].x, trail[i].y, size)

    if (goingRight == true && trail[i].x -25 == headX && trail[i].y == headY){
        reset()
    }
    if (goingLeft == true && trail[i].x +25 == headX && trail[i].y == headY){
        reset()
    }
    if (goingUp == true && trail[i].x == headX && trail[i].y +25 == headY ){
        reset()
    }
    if (goingDown == true && trail[i].x == headX && trail[i].y -25== headY ){
        reset()
    }
}
if (headX === dotX-12.5 && headY === dotY-12.5){
        score ++
        dotX = getRandomInt(24)*25+12.5
        dotY = getRandomInt(24)*25+12.5
        scoreEl.innerHTML=score
        tail += 6.25
   }
  
trail.push({x:headX, y:headY})
  while(trail.length>tail){
    trail.shift()
  }

    if (headX < 0 || headX > 600 || headY > 600 || headY < 0) {
        reset()
    }
}



startButton.addEventListener("click", startGame)
function startGame() {
    console.log('game started')
    dotX = getRandomInt(24)*25+12.5
    dotY = getRandomInt(24)*25+12.5
    moveDownHandler = setInterval(moveDown, speed)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}


function keyPressed () {
    if (keyCode === 37){
        clearInterval(moveLeftHandler)
        clearInterval(moveRightHandler)
        clearInterval(moveUpHandler)
        clearInterval(moveDownHandler)
        moveLeftHandler = setInterval(moveLeft, speed)
    }
    if (keyCode === 38){
        clearInterval(moveLeftHandler)
        clearInterval(moveRightHandler)
        clearInterval(moveUpHandler)
        clearInterval(moveDownHandler)
        moveUpHandler = setInterval(moveUp, speed)
    }    
    if (keyCode === 39){
        clearInterval(moveLeftHandler)
        clearInterval(moveRightHandler)
        clearInterval(moveUpHandler)
        clearInterval(moveDownHandler)
        moveRightHandler = setInterval(moveRight, speed)
    }
    if (keyCode === 40){
        clearInterval(moveLeftHandler)
        clearInterval(moveRightHandler)
        clearInterval(moveUpHandler)
        clearInterval(moveDownHandler)
        moveDownHandler = setInterval(moveDown, speed)
    }
}

function moveLeft(){
    goingLeft = true
    goingRight = false
    goingUp = false
    goingDown = false
    
    headX = headX - 25

}

function moveUp(){
    goingLeft = false
    goingRight = false
    goingUp = true
    goingDown = false
    
    headY = headY - 25
}

function moveRight(){
    goingLeft = false
    goingRight = true
    goingUp = false
    goingDown = false
   
    headX = headX + 25
}

function moveDown(){
    goingLeft = false
    goingRight = false
    goingUp = false
    goingDown = true

    headY = headY + 25
}


function reset() {
    clearInterval(moveLeftHandler)
    clearInterval(moveRightHandler)
    clearInterval(moveUpHandler)
    clearInterval(moveDownHandler)
    if(score > highScore){
        highScore = score
        highScoreEl.innerHTML = highScore
    }
    score = 0
    scoreEl.innerHTML = score
    headX = 25
    headY = 25
    tail = 0
}