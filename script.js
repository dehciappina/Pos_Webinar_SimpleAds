const fixedCtnr = document.querySelector('#fixed_ctnr')

document.body.onscroll = function() {
    if(window.pageYOffset > 50) {
        fixedCtnr.style.transform = "translate(0)"
    } else {
        fixedCtnr.style.transform = "translateY(100%)"
    }
}