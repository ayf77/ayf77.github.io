var pictures = document.querySelectorAll('.slider img');
var circles = document.querySelectorAll('.circle');
var bannerImgCurrent = 0;
const speed = 3500;

var changeTime = setInterval(changeSlide, speed);



function changeSlide(n) {

    for (var i=0; i<pictures.length; i++){
        pictures[i].style.opacity =0;
        circles[i].className = circles[i].className.replace(' current', '');
        
pictures[i].classList.remove('slideIn');
    }

    bannerImgCurrent = (bannerImgCurrent+1) % pictures.length;

    if (n!=undefined){
        clearInterval(changeTime);
        changeTime = setInterval(changeSlide,speed);
        bannerImgCurrent = n;

    }

    pictures[bannerImgCurrent].classList.add('slideIn');
    pictures[bannerImgCurrent].style.opacity = 1;
    circles[bannerImgCurrent].className += ' current';
    


}




