# Project1_kill_the_flying_monsters_CM
Click based HTML canvas game. Click to kill the monsters and win.

# Motivation

First personal project from coding bootcamp. Wanted to make a side scroller game but I decided I'd make this to learn the basics instead. 

# Screenshots

![readmescreenshot](https://user-images.githubusercontent.com/108496506/229316694-451190b9-072c-46ee-875a-63e0ee20f4fa.png)

# Built with

Javascript, HTML, and CSS

# Features

Uses HTML's canvas to make a click based game. Uses the pythagorean theorem to calculate clicks and make sure you clicked the correct monster. You have to click all of the monsters before they leave the screen. If you don't you lose. If you do you go on to the next level. If you pass level 3 you win.

# How to use

Deployed through https://christianmendez1.github.io/Project1_kill_the_flying_monsters_CM/
On macbooks or displays with zoomed in resolutions make sure to zoom out to see the entire game if needed.

# Approach taken

All of the enemies are classes that use canvas to fly across the screen. A class method is used to increase the coordinates over time which causes them to move across the screen. I put every new class into an array depending on the level. When I press the start button the arrays are drawn onto the canvas. Eventlisteners use class methods to calculate the x and y coordiates of your clicks to make sure that you clicked the correct enemy. When you click the enemy it is spliced out of the array and a string is pushed into the score array. If you reach a certain score you go on to the next level. If you dont reach the score in time then timeout will run the lose function. The game generates levels through buttons that appear after you finish the level. After level 3 you win.

# Code Example

```
function animate(){
    requestAnimationFrame(animate)
    background.draw(ctx1)
    enemies.forEach((Monster) => {
        Monster.draw(ctx1)
        Monster.update()
    })
    ctx1.font = "40px Arial";
    ctx1.fillText("Score: " + score.length, 10, 700)
    if(score.length == 6){
        canvas1.style.display = 'none'
        canvas2.style.display = 'inline'
        level2button.style.display = 'inline'
    } else {
        setTimeout(youlose1, 8000);
    }
}
```

# Installation
```
Clone through https://github.com/ChristianMendez1/Project1_kill_the_flying_monsters_CM
Tested through Visual Stuidio Code's live server
```
# Credits

```
These youtube videos helped a lot
https://www.youtube.com/watch?v=7JtLHJbm0kA&t=2352s&ab_channel=Frankslaboratory
https://www.youtube.com/watch?v=BG6ZuNJLP1Y&list=PLaJpVE7nJHlorkyhVjQV1KQmLrCQHwm5_&index=5&t=4s&ab_channel=DanielWood
https://www.youtube.com/watch?v=eI9idPTT0c4&list=PLaJpVE7nJHlorkyhVjQV1KQmLrCQHwm5_&index=4&t=1843s&ab_channel=ChrisCourses
```
