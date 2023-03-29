const canvasRowOne = document.getElementById("canvasRowOne")
const canvasRowTwo = document.getElementById("canvasRowTwo")
const getContext2d1 = canvasRowOne.getContext('2d')
const getContext2d2 = canvasRowTwo.getContext('2d')

//where dead monsters go for score
var deadMonsters = []

//pushes monsters to dead monsters
document.getElementById('statsDiv').textContent ='There are ' + deadMonsters.length + ' dead monsters'

// monster class
class Monster {
    constructor(xpoint, ypoint, radius, color){
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.radius = radius;
        this.color = color;
        this.width = 100;
        this.height = 100;
        this.image = document.getElementById('enemyImage');
    }
    draw(context){

        context.beginPath()
        context.arc(this.xpoint + this.width/2, this.ypoint + this.height/2 , this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill()
        context.stroke();
        context.closePath()
        context.drawImage(this.image, this.xpoint, this.ypoint, this.width, this.height)
    }

    update(){
        this.xpoint+=4;
    }
    
    clickEnemy(xmouse, ymouse) {
        const distance =
        Math.sqrt(
            (( xmouse - (this.xpoint + this.width/2)) * (ymouse - (this.xpoint + this.width/2)))
            +
            (( ymouse - (this.ypoint + this.height/2) ) * (ymouse - (this.ypoint + this.height/2)))
        );
        if (distance < this.radius) {
            return true;
        } else {
            return false;
        }
    }
}

const enemytest = new Monster (100, 0, 50, 'red')
const enemytest2 = new Monster (100, 0, 50, 'red')
// enemytest.draw(getContext2d)
//test========
canvasRowOne.addEventListener('click', (event) => {
    const rect = canvasRowOne.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(enemytest.clickEnemy(x, y))
})

function animate(){
    getContext2d1.clearRect(0, 0, canvasRowOne.width, canvasRowOne.height)
    enemytest.draw(getContext2d1)
    enemytest.update()
    requestAnimationFrame(animate)
}

function animate2(){
    getContext2d2.clearRect(0, 0, canvasRowTwo.width, canvasRowTwo.height)
    enemytest2.draw(getContext2d2)
    enemytest2.update()
    requestAnimationFrame(animate2)
}

animate()
animate2()

// function animate(){
//     getContext2d.clearRect(0, 0, canvasRowOne.width, canvasRowOne.height)
//     enemytwo.draw(getContext2d)
//     enemytwo.update()
//     requestAnimationFrame(animate)
//     enemytwo.image.addEventListener('click', killMonster)
// }
// animate()
// document.getElementById('enemyImage').addEventListener('click', killMonster)

function killMonster(){
    deadMonsters.push('dead')
    // flyingEnemy.drawImage.style.display = "none"
    document.getElementById('statsDiv').textContent ='There are ' + deadMonsters.length + ' dead monsters'
}

// const clickable = document.getElementById('enemyImage')


// startButton.addEventListener("click", animate)

