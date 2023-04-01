window.addEventListener('load', function(){


//setup
const canvas1 = document.getElementById('canvas1')
const ctx1 = canvas1.getContext('2d')

const canvas2 = document.getElementById('canvas2')
const ctx2 = canvas2.getContext('2d')

var window_width = window.innerWidth;
var window_height = window.innerHeight;

canvas1.width = 1800
canvas1.height = 800

canvas2.width = 1800
canvas2.height = 800

console.log(canvas1)
//setupend

// monster class
class Monster1 {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.width = 150;
        this.height = 150;
        this.image = document.getElementById('enemyImage');
        this.velocity = velocity
    }
    draw(c){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        // c.fill()
        // c.stroke();
        c.closePath()
        c.drawImage(this.image, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
    }

    update(){
        // this.x++;
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
    
    clickEnemy(xmouse, ymouse) {
        const distance =
        Math.sqrt(
            (( xmouse - this.x ) * (xmouse - this.x))
            +
            (( ymouse - this.y)  *  (ymouse - this.y))
        )
        // if(enemies.find(enemy12))
        if (distance <= this.radius) {
            if(enemies.includes(enemy1) == true){
                score.push('score')
                enemies.splice(enemies.indexOf(enemy1), 1)
                return true;
            } else {
                return false;
            }
        }
    }
}

class Monster2 {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.width = 150;
        this.height = 150;
        this.image = document.getElementById('enemyImage');
        this.velocity = velocity
    }
    draw(c){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        // c.fill()
        // c.stroke();
        c.closePath()
        c.drawImage(this.image, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
    }

    update(){
        // this.x++;
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
    
    clickEnemy(xmouse, ymouse) {
        const distance =
        Math.sqrt(
            (( xmouse - this.x ) * (xmouse - this.x))
            +
            (( ymouse - this.y)  *  (ymouse - this.y))
        )
        if (distance <= this.radius) {
            if(enemies.includes(enemy2) == true){
                score.push('score')
                enemies.splice(enemies.indexOf(enemy2), 1)
                return true;
            } else {
                return false;
            }
        }
    }
}

class Monster3 {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.width = 150;
        this.height = 150;
        this.image = document.getElementById('enemyImage');
        this.velocity = velocity
    }
    draw(c){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        // c.fill()
        // c.stroke();
        c.closePath()
        c.drawImage(this.image, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
    }

    update(){
        // this.x++;
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
    
    clickEnemy(xmouse, ymouse) {
        const distance =
        Math.sqrt(
            (( xmouse - this.x ) * (xmouse - this.x))
            +
            (( ymouse - this.y)  *  (ymouse - this.y))
        )
        if (distance <= this.radius) {
            if(enemies.includes(enemy3) == true){
                score.push('score')
                enemies.splice(enemies.indexOf(enemy3), 1)
                return true;
            } else {
                return false;
            }
        }
    }
}

class Monster4 {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.width = 150;
        this.height = 150;
        this.image = document.getElementById('enemyImage');
        this.velocity = velocity
    }
    draw(c){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        // c.fill()
        // c.stroke();
        c.closePath()
        c.drawImage(this.image, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
    }

    update(){
        // this.x++;
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
    
    clickEnemy(xmouse, ymouse) {
        const distance =
        Math.sqrt(
            (( xmouse - this.x ) * (xmouse - this.x))
            +
            (( ymouse - this.y)  *  (ymouse - this.y))
        )
        if (distance <= this.radius) {
            if(enemies.includes(enemy4) == true){
                score.push('score')
                enemies.splice(enemies.indexOf(enemy4), 1)
                return true;
            } else {
                return false;
            }
        }
    }
}

class Monster5 {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.width = 150;
        this.height = 150;
        this.image = document.getElementById('enemyImage');
        this.velocity = velocity
    }
    draw(c){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        // c.fill()
        // c.stroke();
        c.closePath()
        c.drawImage(this.image, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
    }

    update(){
        // this.x++;
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
    
    clickEnemy(xmouse, ymouse) {
        const distance =
        Math.sqrt(
            (( xmouse - this.x ) * (xmouse - this.x))
            +
            (( ymouse - this.y)  *  (ymouse - this.y))
        )
        if (distance <= this.radius) {
            if(enemies.includes(enemy5) == true){
                score.push('score')
                enemies.splice(enemies.indexOf(enemy5), 1)
                return true;
        } else {
            return false;
        }
    }
    }
}

class Monster6 {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.width = 150;
        this.height = 150;
        this.image = document.getElementById('enemyImage');
        this.velocity = velocity
    }
    draw(c){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        // c.fill()
        // c.stroke();
        c.closePath()
        c.drawImage(this.image, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
    }

    update(){
        // this.x++;
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
    
    clickEnemy(xmouse, ymouse) {
        const distance =
        Math.sqrt(
            (( xmouse - this.x ) * (xmouse - this.x))
            +
            (( ymouse - this.y)  *  (ymouse - this.y))
        )
        if (distance <= this.radius) {
            if(enemies.includes(enemy6) == true){
                score.push('score')
                enemies.splice(enemies.indexOf(enemy6), 1)
                return true;
        } else {
            return false;
        }
    }
}
}

class Monster7 {
    constructor(radius, color, velocity){
        this.x = 1920;
        this.y = 1080;
        this.radius = radius;
        this.color = color;
        this.width = 150;
        this.height = 150;
        this.image = document.getElementById('enemyImage2');
        this.velocity = velocity
    }
    draw(c){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        // c.fill()
        // c.stroke();
        c.closePath()
        c.drawImage(this.image, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
    }

    update(){
        // this.x++;
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
    
    clickEnemy(xmouse, ymouse) {
        const distance =
        Math.sqrt(
            (( xmouse - this.x ) * (xmouse - this.x))
            +
            (( ymouse - this.y)  *  (ymouse - this.y))
        )
        if (distance <= this.radius) {
            if(enemies1.includes(enemy7) == true){
                score.push('score')
                enemies1.splice(enemies1.indexOf(enemy7), 1)
                return true;
        } else {
            return false;
        }
        }
    }
}

class Monster8 {
    constructor(radius, color, velocity){
        this.x = 1920;
        this.y = 900;
        this.radius = radius;
        this.color = color;
        this.width = 150;
        this.height = 150;
        this.image = document.getElementById('enemyImage2');
        this.velocity = velocity
    }
    draw(c){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        // c.fill()
        // c.stroke();
        c.closePath()
        c.drawImage(this.image, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
    }

    update(){
        // this.x++;
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
    
    clickEnemy(xmouse, ymouse) {
        const distance =
        Math.sqrt(
            (( xmouse - this.x ) * (xmouse - this.x))
            +
            (( ymouse - this.y)  *  (ymouse - this.y))
        )
        if (distance <= this.radius) {
            if(enemies1.includes(enemy8) == true){
                score.push('score')
                enemies1.splice(enemies1.indexOf(enemy8), 1)
                return true;
        } else {
            return false;
        }
        }
    }
}

class Monster9 {
    constructor(radius, color, velocity){
        this.x = 1920;
        this.y = 800;
        this.radius = radius;
        this.color = color;
        this.width = 150;
        this.height = 150;
        this.image = document.getElementById('enemyImage2');
        this.velocity = velocity
    }
    draw(c){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        // c.fill()
        // c.stroke();
        c.closePath()
        c.drawImage(this.image, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
    }

    update(){
        // this.x++;
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
    
    clickEnemy(xmouse, ymouse) {
        const distance =
        Math.sqrt(
            (( xmouse - this.x ) * (xmouse - this.x))
            +
            (( ymouse - this.y)  *  (ymouse - this.y))
        )
        if (distance <= this.radius) {
            if(enemies1.includes(enemy9) == true){
                score.push('score')
                enemies1.splice(enemies1.indexOf(enemy9), 1)
                return true;
        } else {
            return false;
        }
    }
    }
}

class Monster10 {
    constructor(radius, color, velocity){
        this.x = 1920;
        this.y = 700;
        this.radius = radius;
        this.color = color;
        this.width = 150;
        this.height = 150;
        this.image = document.getElementById('enemyImage2');
        this.velocity = velocity
    }
    draw(c){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        // c.fill()
        // c.stroke();
        c.closePath()
        c.drawImage(this.image, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
    }

    update(){
        // this.x++;
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
    
    clickEnemy(xmouse, ymouse) {
        const distance =
        Math.sqrt(
            (( xmouse - this.x ) * (xmouse - this.x))
            +
            (( ymouse - this.y)  *  (ymouse - this.y))
        )
        if (distance <= this.radius) {
            if(enemies1.includes(enemy10) == true){
                score.push('score')
                enemies1.splice(enemies1.indexOf(enemy10), 1)
                return true;
        } else {
            return false;
        }
    }
    }
}

class Monster11 {
    constructor(radius, color, velocity){
        this.x = 1920;
        this.y = 600;
        this.radius = radius;
        this.color = color;
        this.width = 150;
        this.height = 150;
        this.image = document.getElementById('enemyImage2');
        this.velocity = velocity
    }
    draw(c){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        // c.fill()
        // c.stroke();
        c.closePath()
        c.drawImage(this.image, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
    }

    update(){
        // this.x++;
        this.draw(ctx1)
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
    
    clickEnemy(xmouse, ymouse) {
        const distance =
        Math.sqrt(
            (( xmouse - this.x ) * (xmouse - this.x))
            +
            (( ymouse - this.y)  *  (ymouse - this.y))
        )
        if (distance <= this.radius) {
            if(enemies1.includes(enemy11) == true){
                score.push('score')
                enemies1.splice(enemies1.indexOf(enemy11), 1)
                return true;
        } else {
            return false;
        }
    }
    }
}

class Monster12 {
    constructor(radius, color, velocity){
        this.x = 1920;
        this.y = 500;
        this.radius = radius;
        this.color = color;
        this.width = 150;
        this.height = 150;
        this.image = document.getElementById('enemyImage2');
        this.velocity = velocity
    }
    draw(c){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        // c.fill()
        // c.stroke();
        c.closePath()
        c.drawImage(this.image, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
    }

    update(){
        // this.x++;
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
    
    clickEnemy(xmouse, ymouse) {
        const distance =
        Math.sqrt(
            (( xmouse - this.x ) * (xmouse - this.x))
            +
            (( ymouse - this.y)  *  (ymouse - this.y))
        )
        // if(enemies.includes(enemy12) = true)
        if (distance <= this.radius) {
            if(enemies1.includes(enemy12) == true){
                score.push('score')
                enemies1.splice(enemies1.indexOf(enemy12), 1)
                return true;
        } else {
            return false;
        }
    }
    }
}


class Background {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.image = document.getElementById('backgroundImage')
        this.x = 0;
        this.y = 0;
        this.width = '1280px'
        this.height = '720px'
    }
    draw(c){
        c.drawImage(this.image, this.x, this.y);
    }
} 

const background = new Background(canvas1.width, canvas1.height);
//horizontal
const enemy1 = new Monster1 (0, 60, 75, 'red', { x: 1, y: 0 })
const enemy2 = new Monster2 (0, 120, 75, 'red', { x: 4, y: 0 })
const enemy3 = new Monster3 (0, 180, 75, 'red', { x: 3, y: 0 })
const enemy4 = new Monster4 (0, 240, 75, 'red', { x: 5, y: 0 })
const enemy5 = new Monster5 (0, 360, 75, 'red', { x: 3, y: 0 })
const enemy6 = new Monster6 (0, 420, 75, 'red', { x: 1, y: 0 })

//diaganol
const enemy7 = new Monster7 (75, 'red', { x: -1, y: -2})
const enemy8 = new Monster8 (75, 'red', { x: -2, y: -2 })
const enemy9 = new Monster9 (75, 'red', { x: -1, y: -2 })
const enemy10 = new Monster10 (75, 'red', { x: -4, y: -2 })
const enemy11 = new Monster11 (75, 'red', { x: -4, y: -1 })
const enemy12 = new Monster12 (75, 'red', { x: -3, y: -1 })

var enemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6]
var enemies1= [enemy7, enemy8, enemy9, enemy10, enemy11, enemy12]
const score = []


function animate(){
    
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height)
    requestAnimationFrame(animate)
    background.draw(ctx1)
    enemies.forEach((Monster) => {
        Monster.draw(ctx1)
        Monster.update()
    })
    ctx1.strokeStyle = "white";
    ctx1.font = "40px Arial";
    ctx1.fillText("Score: " + score.length, 10, 700)
    // ctx.font = "150px Arial";
    // ctx.fillText('YOU WIN!', 650, 400)
    if(score.length == 6){
        canvas1.style.display = 'none'
        canvas2.style.display = 'inline'
    } else {
    setTimeout(youlose1, 10000);
    }
}

function youlose1(){
    if(score.length !== 12){
        document.getElementById('youloseDiv').textContent = 'You lose!'
    }
}

let level2button = document.getElementById('level2')
level2button.addEventListener("click", something1)

function something1(){
    level2()
}

function level2(){
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height)
    requestAnimationFrame(level2)
    background.draw(ctx2)
    enemies1.forEach((Monster) => {
        Monster.draw(ctx2)
        Monster.update()
    })

}


canvas1.addEventListener('click', (event) => {
    const x = event.clientX 
    const y = event.clientY 
    console.log(enemy1.clickEnemy(x, y))
    console.log(enemy2.clickEnemy(x, y))
    console.log(enemy3.clickEnemy(x, y))
    console.log(enemy4.clickEnemy(x, y))
    console.log(enemy5.clickEnemy(x, y))
    console.log(enemy6.clickEnemy(x, y))
    console.log('x' + event.clientX + 'y' + event.clientY )
    console.log(enemies.includes(enemy12))
})

canvas2.addEventListener('click', (event) => {
    const x = event.clientX 
    const y = event.clientY 
    console.log(enemy7.clickEnemy(x, y))
    console.log(enemy8.clickEnemy(x, y))
    console.log(enemy9.clickEnemy(x, y))
    console.log(enemy10.clickEnemy(x, y))
    console.log(enemy11.clickEnemy(x, y))
    console.log(enemy12.clickEnemy(x, y))
    console.log('x' + event.clientX + 'y' + event.clientY )
    console.log(enemies.includes(enemy12))
})


let monsterbutton = document.getElementById('startButton')
monsterbutton.addEventListener("click", something)
function something(){
    animate()
    monsterbutton.style.display = 'none'
}


//end
})



// spawnEnemies()

// canvas.addEventListener('click', (event) => {
//     const x = event.clientX 
//     const y = event.clientY 
//     console.log(enemytest2.clickEnemy(x, y))
// })

// document.getElementById('scoreDiv').addEventListener('click', killMonster)

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
// 4) find faster way to create more classes
// 5)time out to come from different directions
// 6) add animations
// 7) if last monster hits edge of screen and you dont have score, you lose






//junk for now===================
//     canvas.addEventListener('click', (event) => {
//         const x = event.clientX 
//         const y = event.clientY 
//         console.log(enemytest.clickEnemy(x, y))
//         if (enemytest.clickEnemy(x, y) === true){
//             enemies.splice(enemies.indexOf(enemytest), 1)
//         }
//     })
// }
// }

// class Monster2 {
//     constructor(x, y, radius, color){
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.color = color;
//         this.width = 100;
//         this.height = 100;
//         this.image = document.getElementById('enemyImage');
//     }
//     draw(context){

//         context.beginPath()
//         context.arc(this.x + this.width/2, this.y + this.height/2 , this.radius, 0, Math.PI * 2, false);
//         context.fillStyle = this.color;
//         context.fill()
//         context.stroke();
//         context.closePath()
//         // context.drawImage(this.image, this.xpoint, this.ypoint, this.width, this.height)
//     }

//     update(){
//         this.xpoint+=4;
//     }
    
//     clickEnemy(xmouse, ymouse) {
//         const distance =
//         Math.sqrt(
//             (( xmouse - (this.x + this.width/2)) * (ymouse - (this.x + this.width/2)))
//             +
//             (( ymouse - (this.y + this.height/2) ) * (ymouse - (this.y + this.height/2)))
//         );
//         if (distance < this.radius) {
//             return true;
//         // } else {
//         //     return false;
//         }
//         canvas.addEventListener('click', (event) => {
//             const x = event.clientX 
//             const y = event.clientY 
//             console.log(enemytest.clickEnemy(x, y))
//             if (enemytest.clickEnemy(x, y) === true){
//                 enemies.splice(enemies.indexOf(enemytest), 1)
//             }
//         })

//     }

//     dead(){
        
//     }
// }

// const enemytest2 = new Monster2 (0, 100, 50, 'red')
// enemytest.draw(getContext2d)
//test========


// function spawnEnemies(){
//     setInterval(() => {
//         const x = 100
//         const y = 100
//         const radius = 30
//         const color = 'red'
//         const velocity = {
//             x:1,
//             y:0
//         }
//         enemies.push(new Monster(x, y, radius, color, velocity))
//         console.log(enemies)
//     }, 3000 )
    
// 