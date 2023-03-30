//setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

var window_width = window.innerWidth;
var window_height = window.innerHeight;

canvas.width = window_width
canvas.height = window_height

console.log(canvas)
//setupend

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

const enemytest2 = new Monster2 (0, 100, 50, 'red')
// enemytest.draw(getContext2d)
//test========
canvas.addEventListener('click', (event) => {
    const x = event.clientX 
    const y = event.clientY 
    // console.log(event)
    console.log(enemytest.clickEnemy(x, y))
    if (enemytest.clickEnemy(x, y) === true){
        enemies.splice(0, 1)
    }
})


const enemytest = new Monster (60, 60, 50, 'red')
const enemies = [enemytest]
// animate()

function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height)
    // enemytest.draw(c)
    // enemytest.update()
    requestAnimationFrame(animate)
    enemies.forEach(Monster => {
    enemytest.draw(c)
    enemytest.update()
    
    })
}
animate()


// document.getElementById('enemyImage').addEventListener('click', killMonster)

// function killMonster(){
//     deadMonsters.push('dead')
//     // flyingEnemy.drawImage.style.display = "none"
//     document.getElementById('statsDiv').textContent ='There are ' + deadMonsters.length + ' dead monsters'
// }

// startButton.addEventListener("click", animate)

// GOALS
// 1) slice from array after click
// 2) create enemies coming from different directions at different speeds
// 3) score after click