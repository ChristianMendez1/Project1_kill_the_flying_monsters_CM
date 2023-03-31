
//setup
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

var window_width = window.innerWidth;
var window_height = window.innerHeight;

canvas.width = 1800
canvas.height = 800

console.log(canvas)
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
        if (distance <= this.radius) {
            score.push('score')
            enemies.splice(enemies.indexOf(enemy1), 1)
            return true;
        } else {
            return false;
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
            score.push('score')
            enemies.splice(enemies.indexOf(enemy2), 1)
            return true;
        } else {
            return false;
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
            score.push('score')
            enemies.splice(enemies.indexOf(enemy3), 1)
            return true;
        } else {
            return false;
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
            score.push('score')
            enemies.splice(enemies.indexOf(enemy4), 1)
            return true;
        } else {
            return false;
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
            score.push('score')
            enemies.splice(enemies.indexOf(enemy5), 1)
            return true;
        } else {
            return false;
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
            score.push('score')
            enemies.splice(enemies.indexOf(enemy6), 1)
            return true;
        } else {
            return false;
        }
    }
}

class Monster7 {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
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
            score.push('score')
            enemies.splice(enemies.indexOf(enemy7), 1)
            return true;
        } else {
            return false;
        }
    }
}

class Monster8 {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
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
            score.push('score')
            enemies.splice(enemies.indexOf(enemy8), 1)
            return true;
        } else {
            return false;
        }
    }
}

class Monster9 {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
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
            score.push('score')
            enemies.splice(enemies.indexOf(enemy9), 1)
            return true;
        } else {
            return false;
        }
    }
}

class Monster10 {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
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
            score.push('score')
            enemies.splice(enemies.indexOf(enemy10), 1)
            return true;
        } else {
            return false;
        }
    }
}

class Monster11 {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
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
        this.draw(ctx)
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
            score.push('score')
            enemies.splice(enemies.indexOf(enemy11), 1)
            return true;
        } else {
            return false;
        }
    }
}

class Monster12 {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
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
            score.push('score')
            enemies.splice(enemies.indexOf(enemy12), 1)
            return true;
        } else {
            return false;
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

const background = new Background(canvas.width, canvas.height);
//horizontal
const enemy1 = new Monster1 (0, 60, 75, 'red', { x: 1, y: 0 })
const enemy2 = new Monster2 (0, 120, 75, 'red', { x: 4, y: 0 })
const enemy3 = new Monster3 (0, 180, 75, 'red', { x: 3, y: 0 })
const enemy4 = new Monster4 (0, 240, 75, 'red', { x: 5, y: 0 })
const enemy5 = new Monster5 (0, 360, 75, 'red', { x: 3, y: 0 })
const enemy6 = new Monster6 (0, 420, 75, 'red', { x: 1, y: 0 })

//diaganol
const enemy7 = new Monster7 (1920, 1080, 75, 'red', { x: -1, y: -2})
const enemy8 = new Monster8 (1920, 900, 75, 'red', { x: -2, y: -2 })
const enemy9 = new Monster9 (1920, 800, 75, 'red', { x: -1, y: -2 })
const enemy10 = new Monster10 (1920, 700, 75, 'red', { x: -4, y: -2 })
const enemy11 = new Monster11 (1920, 600, 75, 'red', { x: -4, y: -1 })
const enemy12 = new Monster12 (1920, 500, 75, 'red', { x: -3, y: -1 })

const enemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11, enemy12]
const score = []


function animate(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate)
    background.draw(ctx)
    enemies.forEach((Monster) => {
        Monster.draw(ctx)
        Monster.update()
    })
    ctx.strokeStyle = "white";
    ctx.font = "40px Arial";
    ctx.fillText("Score: " + score.length, 10, 700)
    // ctx.font = "150px Arial";
    // ctx.fillText('YOU WIN!', 650, 400)
    if(score.length == 12){
        ctx.fillText('YOU WIN!', 650, 400)
    }
}

canvas.addEventListener('click', (event) => {
    const x = event.clientX 
    const y = event.clientY 
    console.log(enemy1.clickEnemy(x, y))
    console.log(enemy2.clickEnemy(x, y))
    console.log(enemy3.clickEnemy(x, y))
    console.log(enemy4.clickEnemy(x, y))
    console.log(enemy5.clickEnemy(x, y))
    console.log(enemy6.clickEnemy(x, y))
    console.log(enemy7.clickEnemy(x, y))
    console.log(enemy8.clickEnemy(x, y))
    console.log(enemy9.clickEnemy(x, y))
    console.log(enemy10.clickEnemy(x, y))
    console.log(enemy11.clickEnemy(x, y))
    console.log(enemy12.clickEnemy(x, y))
    document.getElementById('scoreDiv').textContent = "Score: " + score.length;

    ctx.strokeStyle = "red";
    ctx.fillText("Score: " + score.length, 100, 500)
})

animate()



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
    
// }