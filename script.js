const fixedCtnr = document.querySelector('#video_ctnr')

if(!window.matchMedia('(min-width:720px)').matches) {
    document.body.onscroll = function() {
        if(window.pageYOffset > 25) {
            fixedCtnr.style.transform = "translate(0)"
        } else {
            fixedCtnr.style.transform = "translateY(100%)"
        }
    }
} else {
    
}
