//setup
const canvas1 = document.getElementById('canvas1')
const ctx1 = canvas1.getContext('2d')

const canvas2 = document.getElementById('canvas2')
const ctx2 = canvas2.getContext('2d')

const canvas3 = document.getElementById('canvas3')
const ctx3 = canvas3.getContext('2d')

canvas1.width = 1800
canvas1.height = 800

canvas2.width = 1800
canvas2.height = 800

canvas3.width = 1800
canvas3.height = 800

//sound 

var audio = new Audio('music/background.mp3');
var dead = new Audio('music/dead.wav');
var winsound = new Audio('music/win.mp3');
var losesound = new Audio('music/lose.mp3');
var levelsound = new Audio('music/level.wav');

var winsoundArray = [winsound]
var losesoundArray = [losesound]

var level1soundArray = [levelsound]
var level2soundArray = [levelsound]

// monster classes
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
                dead.load()
                dead.play()
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
                dead.load()
                dead.play()
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
                dead.load()
                dead.play()
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
                dead.load()
                dead.play()
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
                dead.load()
                dead.play()
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
                dead.load()
                dead.play()
                score.push('score')
                enemies.splice(enemies.indexOf(enemy6), 1)
                return true;
        } else {
            return false;
        }
    }
}
}

//level 2======================

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
                dead.load()
                dead.play()
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
                dead.load()
                dead.play()
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
                dead.load()
                dead.play()
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
                dead.load()
                dead.play()
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
                dead.load()
                dead.play()
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
                dead.load()
                dead.play()
                score.push('score')
                enemies1.splice(enemies1.indexOf(enemy12), 1)
                return true;
        } else {
            return false;
        }
    }
    }
}

// level 3================================================================
class Monster13 {
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
            if(enemies2.includes(enemy13) == true){
                dead.load()
                dead.play()
                score.push('score')
                enemies2.splice(enemies2.indexOf(enemy13), 1)
                return true;
            } else {
                return false;
            }
        }
    }
}

class Monster14 {
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
            if(enemies2.includes(enemy14) == true){
                dead.load()
                dead.play()
                score.push('score')
                enemies2.splice(enemies2.indexOf(enemy14), 1)
                return true;
            } else {
                return false;
            }
        }
    }
}

class Monster15 {
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
            if(enemies2.includes(enemy15) == true){
                dead.load()
                dead.play()
                score.push('score')
                enemies2.splice(enemies2.indexOf(enemy15), 1)
                return true;
            } else {
                return false;
            }
        }
    }
}

class Monster16 {
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
            if(enemies2.includes(enemy16) == true){
                dead.load()
                dead.play()
                score.push('score')
                enemies2.splice(enemies2.indexOf(enemy16), 1)
                return true;
            } else {
                return false;
            }
        }
    }
}

class Monster17 {
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
            if(enemies2.includes(enemy17) == true){
                dead.load()
                dead.play()
                score.push('score')
                enemies2.splice(enemies2.indexOf(enemy17), 1)
                return true;
        } else {
            return false;
        }
    }
    }
}

class Monster18 {
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
            if(enemies2.includes(enemy18) == true){
                dead.load()
                dead.play()
                score.push('score')
                enemies2.splice(enemies2.indexOf(enemy18), 1)
                return true;
        } else {
            return false;
        }
    }
}
}

class Monster19 {
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
            if(enemies2.includes(enemy19) == true){
                dead.load()
                dead.play()
                score.push('score')
                enemies2.splice(enemies2.indexOf(enemy19), 1)
                return true;
        } else {
            return false;
        }
        }
    }
}

class Monster20 {
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
            if(enemies2.includes(enemy20) == true){
                dead.load()
                dead.play()
                score.push('score')
                enemies2.splice(enemies2.indexOf(enemy20), 1)
                return true;
        } else {
            return false;
        }
        }
    }
}

class Monster21 {
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
            if(enemies2.includes(enemy21) == true){
                dead.load()
                dead.play()
                score.push('score')
                enemies2.splice(enemies2.indexOf(enemy21), 1)
                return true;
        } else {
            return false;
        }
    }
    }
}

class Monster22 {
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
            if(enemies2.includes(enemy22) == true){
                score.push('score')
                enemies2.splice(enemies2.indexOf(enemy22), 1)
                return true;
        } else {
            return false;
        }
    }
    }
}

class Monster23 {
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
            if(enemies2.includes(enemy23) == true){
                dead.load()
                dead.play()
                score.push('score')
                enemies2.splice(enemies2.indexOf(enemy23), 1)
                return true;
        } else {
            return false;
        }
    }
    }
}

class Monster24 {
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
            if(enemies2.includes(enemy24) == true){
                dead.load()
                dead.play()
                score.push('score')
                enemies2.splice(enemies2.indexOf(enemy24), 1)
                return true;
        } else {
            return false;
        }
    }
    }
}

//background

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

//new monster classes

//level1 horizontal
const enemy1 = new Monster1 (0, 60, 75, 'red', { x: 5, y: 0 })
const enemy2 = new Monster2 (0, 120, 75, 'red', { x: 7, y: 0 })
const enemy3 = new Monster3 (0, 180, 75, 'red', { x: 6, y: 0 })
const enemy4 = new Monster4 (0, 240, 75, 'red', { x: 8, y: 0 })
const enemy5 = new Monster5 (0, 360, 75, 'red', { x: 6, y: 0 })
const enemy6 = new Monster6 (0, 420, 75, 'red', { x: 4, y: 0 })

//level2 disagonal
const enemy7 = new Monster7 (100, 'red', { x: -8, y: -3})
const enemy8 = new Monster8 (100, 'red', { x: -9, y: -3 })
const enemy9 = new Monster9 (100, 'red', { x: -8, y: -3 })
const enemy10 = new Monster10 (100, 'red', { x: -11, y: -3 })
const enemy11 = new Monster11 (100, 'red', { x: -11, y: -4 })
const enemy12 = new Monster12 (100, 'red', { x: -10, y: -2 })

//level3 horizontal and diagonal
const enemy13 = new Monster13 (0, 60, 75, 'red', { x: 5, y: 0 })
const enemy14 = new Monster14 (0, 120, 75, 'red', { x: 7, y: 0 })
const enemy15 = new Monster15 (0, 180, 75, 'red', { x: 6, y: 0 })
const enemy16 = new Monster16 (0, 240, 75, 'red', { x: 8, y: 0 })
const enemy17 = new Monster17 (0, 360, 75, 'red', { x: 9, y: 0 })
const enemy18 = new Monster18 (0, 420, 75, 'red', { x: 4, y: 0 })
const enemy19 = new Monster19 (100, 'red', { x: -6, y: -3})
const enemy20 = new Monster20 (100, 'red', { x: -7, y: -3 })
const enemy21 = new Monster21 (100, 'red', { x: -6, y: -3 })
const enemy22 = new Monster22 (100, 'red', { x: -9, y: -3 })
const enemy23 = new Monster23 (100, 'red', { x: -9, y: -2 })
const enemy24 = new Monster24 (100, 'red', { x: -8, y: -2 })

//arrays

var enemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6]
var enemies1= [enemy7, enemy8, enemy9, enemy10, enemy11, enemy12]
var enemies2= [enemy13, enemy14, enemy15, enemy16, enemy17, enemy18, enemy19, enemy20, enemy21, enemy22, enemy23, enemy24]
const score = []

//buttons

let level1Button = document.getElementById('startButton')
level1Button.addEventListener("click", level1)

let level2button = document.getElementById('level2')
level2button.addEventListener("click", level2)

let level3button = document.getElementById('level3')
level3button.addEventListener("click", level3)

let startButtonDiv = document.getElementById('startButtonDiv')
let level2Div = document.getElementById('level2Div')
let level3Div = document.getElementById('level3Div')

//losing functions

function youlose1(){
    if(score.length !== 6 && score.length < 6){
        document.getElementById('youloseDiv').style.display = 'inline'
        losesoundArray.forEach(() => {
            losesound.play()
            losesoundArray.splice(losesound, 1)
        })
    }
}

function youlose2(){
    if(score.length !== 12 && score.length < 12){
        document.getElementById('youloseDiv').style.display = 'inline'
        losesoundArray.forEach(() => {
            losesound.play()
            losesoundArray.splice(losesound, 1)
        })
    }
}

function youlose3(){
    if(score.length !== 24 && score.length < 24){
        document.getElementById('youloseDiv').style.display = 'inline'
        losesoundArray.forEach(() => {
            losesound.play()
            losesoundArray.splice(losesound, 1)
        })
    }
}

//game and level functions

function level1(){
    audio.play()
    startButtonDiv.style.display = 'none'
    level1Button.style.display = 'none'
    requestAnimationFrame(level1)
    background.draw(ctx1)
    enemies.forEach((Monster) => {
        Monster.draw(ctx1)
        Monster.update()
    })
    ctx1.fillStyle = 'white';
    ctx1.font = "40px Arial";
    ctx1.fillText("Score: " + score.length, 10, 780)
    if(score.length == 6){
        canvas1.style.display = 'none'
        canvas2.style.display = 'inline'
        level2button.style.display = 'inline'
        level2Div.style.display ='inline'
        level1soundArray.forEach((Sound) => {
            levelsound.play()
            level1soundArray.splice(levelsound, 1)
        })
    } else {
        setTimeout(youlose1, 8000);
    }
}

function level2(){
    level2button.style.display = 'none'
    level2Div.style.display ='none'
    level2button.style.display = 'none'
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height)
    requestAnimationFrame(level2)
    background.draw(ctx2)
    enemies1.forEach((Monster) => {
        Monster.draw(ctx2)
        Monster.update()
    })
    ctx2.fillStyle = 'white';
    ctx2.font = "40px Arial";
    ctx2.fillText("Score: " + score.length, 10, 780)
    if(score.length == 12){
        canvas2.style.display = 'none'
        canvas3.style.display = 'inline'
        level2button.style.display = 'none'
        level3button.style.display = 'inline'
        level3Div.style.display ='inline'
        level2soundArray.forEach((Sounds) => {
            levelsound.load()
            levelsound.play()
            level2soundArray.splice(levelsound, 1)
        })
    } else {
    setTimeout(youlose2, 5000);
    }
}

function level3(){
    level3button.style.display = 'none'
    level3Div.style.display ='none'
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height)
    requestAnimationFrame(level3)
    background.draw(ctx3)
    ctx3.fillStyle = 'white';
    ctx3.font = "40px Arial";
    ctx3.fillText("Score: " + score.length, 10, 780)
    enemies2.forEach((Monster) => {
        Monster.draw(ctx3)
        Monster.update()
    })
    if (score.length == 24){
        document.getElementById('youwinDiv').style.display = 'inline'
        winsoundArray.forEach((Sound) => {
            winsound.play()
            winsoundArray.splice(winsound, 1)
        })
    } else {
        setTimeout(youlose3, 8000);
    }
}

//eventlisteners that track monsters

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
})

canvas3.addEventListener('click', (event) => {
    const x = event.clientX 
    const y = event.clientY 
    console.log(enemy13.clickEnemy(x, y))
    console.log(enemy14.clickEnemy(x, y))
    console.log(enemy15.clickEnemy(x, y))
    console.log(enemy16.clickEnemy(x, y))
    console.log(enemy17.clickEnemy(x, y))
    console.log(enemy18.clickEnemy(x, y))
    console.log(enemy19.clickEnemy(x, y))
    console.log(enemy20.clickEnemy(x, y))
    console.log(enemy21.clickEnemy(x, y))
    console.log(enemy22.clickEnemy(x, y))
    console.log(enemy23.clickEnemy(x, y))
    console.log(enemy24.clickEnemy(x, y))
    console.log('x' + event.clientX + 'y' + event.clientY )
})