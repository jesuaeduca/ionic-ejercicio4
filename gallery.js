function onLoad() {
    getDelay().addEventListener("ionChange", setDelay);
    getTabs().addEventListener("ionChange", stopAll);
    document.addEventListener("ionSlidesDidLoad", setDelay);
}

function getTabs() {
    return(document.querySelector('ion-tabs'));
}

function getSlides() {
    return(document.querySelectorAll('ion-slides'));
}

function getDelay() {
    return(document.querySelector('ion-range'));
}

function setDelay() {
    getSlides().forEach(function(s) {
        s.options = {autoplay:{delay:5000-getDelay().value}};
        s.update();
    });
}

function stopAll() {
    getSlides().forEach(function(s) {
        s.stopAutoplay();
        s.slideTo(0);
        s.update();
    });
}

function button(action) { 
    getTabs().getSelected().then(function(tab) {
        var s = document.getElementById(tab.icon);
        if      (action == 'play')  s.startAutoplay();
        else if (action == 'pause') s.stopAutoplay();           
        else if (action == 'next') s.slideNext();           
        else if (action == 'prev') s.slidePrev();           
        s.update();
    });
    navigator.vibrate(40);
}
