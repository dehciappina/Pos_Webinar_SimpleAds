const fixedCtnr = document.querySelector('#fixed_ctnr')

document.body.onscroll = function() {
    if(window.pageYOffset > (window.innerHeight / 6)) {
        fixedCtnr.style.transform = "translate(0)"
    } else {
        fixedCtnr.style.transform = "translateY(100%)"
    }
}