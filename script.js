const fixedCtnr = document.querySelector('#video_ctnr');

const assinatura = document.querySelector('#assinatura');
let viewPosition;

if(!window.matchMedia('(min-width:720px)').matches) {
    document.body.onscroll = function() {
        viewPosition = window.innerHeight - assinatura.getBoundingClientRect().bottom;
        console.log(viewPosition);

        if(viewPosition > window.innerHeight / 10) {
            fixedCtnr.style.transform = "translate(0)"
        } else {
            fixedCtnr.style.transform = "translateY(100%)"
        }
    }
} else {
    
}
