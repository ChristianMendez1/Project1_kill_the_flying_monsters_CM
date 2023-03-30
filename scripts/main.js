const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

var window_width = window.innerWidth;
var window_height = window.innerHeight;

canvas.width = window_width
canvas.height = window_height

console.log(canvas)

//where dead monsters go for score
var deadMonsters = []

//pushes monsters to dead monsters
// document.getElementById('statsDiv').textContent ='There are ' + deadMonsters.length + ' dead monsters'

// monster class
class Monster {
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.width = 100;
        this.height = 100;
        this.image = document.getElementById('enemyImage');
    }
    draw(c){

        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill()
        c.stroke();
        c.closePath()
        c.drawImage(this.image, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
    }

    update(){
        this.x++;
    }
    
    clickEnemy(xmouse, ymouse) {
        const distance =
        Math.sqrt(
            (( xmouse - this.x ) * (xmouse - this.x))
            +
            (( ymouse - this.y)  *  (ymouse - this.y))
        )
        if (distance <= this.radius) {
            return true;
        } else {
            return false;
        }
    }
}

class Monster2 {
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.width = 100;
        this.height = 100;
        this.image = document.getElementById('enemyImage');
    }
    draw(context){

        context.beginPath()
        context.arc(this.x + this.width/2, this.y + this.height/2 , this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill()
        context.stroke();
        context.closePath()
        // context.drawImage(this.image, this.xpoint, this.ypoint, this.width, this.height)
    }

    update(){
        this.xpoint+=4;
    }
    
    clickEnemy(xmouse, ymouse) {
        const distance =
        Math.sqrt(
            (( xmouse - (this.x + this.width/2)) * (ymouse - (this.x + this.width/2)))
            +
            (( ymouse - (this.y + this.height/2) ) * (ymouse - (this.y + this.height/2)))
        );
        if (distance < this.radius) {
            return true;
        } else {
            return false;
        }

    }

    dead(){
        
    }
}

const enemytest = new Monster (60, 60, 50, 'red')
const enemytest2 = new Monster2 (0, 100, 50, 'red')
// enemytest.draw(getContext2d)
//test========
canvas.addEventListener('click', (event) => {
    const x = event.clientX 
    const y = event.clientY 
    // console.log(event)
    console.log(enemytest.clickEnemy(x, y))
})

function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height)
    enemytest.draw(c)
    enemytest.update()
    requestAnimationFrame(animate)
}

function animate2(){
    // getContext2d2.clearRect(0, 0, canvasRowOne.width, canvasRowOne.height)
    enemytest2.draw(c)
    // enemytest2.update()
    // requestAnimationFrame(animate2)
}

animate()
// animate2()

// function animate(){
//     getContext2d.clearRect(0, 0, canvasRowOne.width, canvasRowOne.height)
//     enemytwo.draw(getContext2d)
//     enemytwo.update()
//     requestAnimationFrame(animate)
//     enemytwo.image.addEventListener('click', killMonster)
// }
// animate()
// document.getElementById('enemyImage').addEventListener('click', killMonster)

// function killMonster(){
//     deadMonsters.push('dead')
//     // flyingEnemy.drawImage.style.display = "none"
//     document.getElementById('statsDiv').textContent ='There are ' + deadMonsters.length + ' dead monsters'
// }

// const clickable = document.getElementById('enemyImage')


// startButton.addEventListener("click", animate)

class grid {
    constructor() {
        this.position = {
            x:0,
            y:0
        }
        this.velocity ={
            x:0,
            y:0
        }
        this.invaders ={

        }
    }
}

class Projectile {
    constructor(x,y,radius,color,velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
}

window.addEventListener('click', (event) => 
    {
    const projectile = new Projectile (
        event.clientX, event.clientY, 5, 'red', null
    )
    console.log(event)
    projectile.draw(c)
})

class Circle {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fill()
    }
}

const EnemyCircle = new Circle (30, 30, 30, 'blue')
// EnemyCircle.draw()