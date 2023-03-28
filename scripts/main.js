//animation test


const firstMonster = document.getElementById("myCanvas")
//get access to canvas properties
const getContext2d = firstMonster.getContext('2d')

// test animation
fillRectFunc()

var rectX = 0;
var rectY = 0;
var velocityX = 0;
var velocityY = 0;


function fillRectFunc(){
    getContext2d.clearRect(0, 0, firstMonster.width, firstMonster.height)
    getContext2d.fillRect(rectX, rectY, 50, 50)
    requestAnimationFrame(fillRectFunc)
    rectX += velocityX;
    rectY += velocityY;
}

//js test
// document.getElementById('myCanvas').textContent = 'Hello'

//rect test
// getContextConst.fillRect(0, 0, 50, 50)
// requestAnimationFrame(fillRectTest)

startButton.addEventListener("click", monsterMovement)
function monsterMovement(){
    velocityX = 5
    velocityY = 5

}

//kill monster when click
firstMonster.addEventListener('click', killMonster)

//where dead monsters go for score
var deadMonsters = []

//pushes monsters to dead monsters
function killMonster(){
    //score dead monster
    deadMonsters.push('dead')
    //monster disapears
    firstMonster.style.display = "none"
    //test
    document.getElementById('statsDiv').textContent ='There are ' + deadMonsters.length + ' dead monsters'
}

document.getElementById('statsDiv').textContent ='There are ' + deadMonsters.length + ' dead monsters'

//score
// document.getElementById('testDiv').textContent ='There are ' + deadMonsters.length + ' dead monsters'


// document.getElementById('testDiv').textContent = deadMonsters


// movement stuff just in case
// addEventListener("keydown", function(click){
//     console.log(click.code)
// })
