const canvas = document.querySelector('canvas')

const c = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const gravity = 0.5
//to create any sort of player or art on canvas create a class is a good start
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.height = 30
        this.width = 30
    }
    //method to define how player looks:
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    //need to create an update function - method to change player property over time
    update(){
        this.draw()
        this.position.y += this.velocity.y

        //establishing a floor and factoring gravity into fall
        if (this.position.y + this.height + this.velocity.y <= canvas.height){ //if player is higher than bottom of screen, keep building velocity, else velocity = 0
            this.velocity.y += gravity
        } else this.velocity.y = 0
    }
}

const player = new Player()
//player.update()

//need animation funciton to loop player update
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height) //clear canvas to maintain player shape during updates (x,y,width,height)
    player.update()
}

animate()