var charDivs = document.querySelectorAll('.identity');
var avengerImgCurrent = 0;


function changeAvengerDiv(n) {

    for (var i=0; i<charDivs.length; i++){
        charDivs[i].style.opacity =0;
        charDivs[i].classList.remove('fadeIn');
    
    }

    avengerImgCurrent = n;


charDivs[avengerImgCurrent].classList.add('fadeIn');

    charDivs[avengerImgCurrent].style.opacity = 1;
    
}



