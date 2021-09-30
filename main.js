var canvas= document.getElementById("myCanvas")
ctx=canvas.getContext('2d')
var rover_x=300
var rover_y=230
var rover_image="rover.png"
var backround_image="mars.jpg"
function addimage() {
    background_add=new Image()
    background_add.onload=uploadbackground
    background_add.src=backround_image
    rover_add=new Image()
    rover_add.onload=roverupload
    rover_add.src=rover_image
}
function uploadbackground(){
    ctx.drawImage(background_add,0,0,800,600)
}
function roverupload(){
    ctx.drawImage(rover_add,rover_x,rover_y,150,150)
}

window.addEventListener("keydown",mykeydown)

function mykeydown(e) {
keypressed=e.keyCode
console.log(keypressed)
if(keypressed=="37") {
Left()   
}
if(keypressed=="38") {
Up()   
   }
   if(keypressed=="39") {
Right()   
   }
   if(keypressed=="40") {
Down()   
   }
   

}
function Left(){
    if (rover_x>0){
        rover_x=rover_x-15
        uploadbackground()
        roverupload()  
    }
}
function Up(){
    if (rover_y>0){
        rover_y=rover_y-15
        uploadbackground()
        roverupload()  
    }
}
function Right(){
    if (rover_x<700){
        rover_x=rover_x+15
        uploadbackground()
        roverupload()  
    }
}
function Down(){
    if (rover_y<500){
        rover_y=rover_y+15
        uploadbackground()
        roverupload()  
    }
}