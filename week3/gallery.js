var i = 0; //start point 
var images = []
var time = 3000;

images[0] = "images/1.jpeg";
images[1] = "images/2.jpeg";
images[2] = "images/3.jpeg";
images[3] = "images/4.jpeg";
images[4] = "images/5.jpeg";
images[5] = "images/6.jpeg";
images[6] = "images/7.jpeg";
images[7] = "images/8.jpeg";

function changeImg(){
    document.slide.src = images[i]; 

    if(i < images.length){
        i++
    }else{
        i=0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;