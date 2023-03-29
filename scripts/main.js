const firstMonster = document.getElementById("myCanvas")
const getContext2d = firstMonster.getContext('2d')


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
        this.width = 200;
        this.height = 200;
        this.image = document.getElementById('enemyImage');
    }
    draw(context){

        context.beginPath()
        context.arc(this.xpoint + this.width/2, this.ypoint + this.height/2 , this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill()
        context.stroke();
        context.closePath()
        context.drawImage(this.image, this.xpoint, this.ypoint, 200, 200)
    }

    update(){
        this.xpoint+=1;
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

const enemytest = new Monster (200, 200, 100, 'red')
// enemytest.draw(getContext2d)
//test========
firstMonster.addEventListener('click', (event) => {
    const rect = firstMonster.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(enemytest.clickEnemy(x, y))
})

function animate(){
    getContext2d.clearRect(0, 0, firstMonster.width, firstMonster.height)
    enemytest.draw(getContext2d)
    enemytest.update()
    requestAnimationFrame(animate)
    enemytest.image.addEventListener('click', killMonster)
}

animate()

// document.getElementById('enemyImage').addEventListener('click', killMonster)

function killMonster(){
    deadMonsters.push('dead')
    // flyingEnemy.drawImage.style.display = "none"
    document.getElementById('statsDiv').textContent ='There are ' + deadMonsters.length + ' dead monsters'
}

// const clickable = document.getElementById('enemyImage')


// startButton.addEventListener("click", animate)

