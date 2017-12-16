import {contactForm} from './contact-jquery.js'
import {initMap} from './map.js';
import { nav } from './nav.js';
import { carousel } from './carousel.js';
import { Slider } from './slider.js';




//to trzeba bo inaczej google map nie zadziala
//sprawdz koniec linka z google map - tam jest odpalana
//funkcja. metoda taka zwie sie jsonp - wymyslili ja Polacy :)
//o co chodzi dokladnie? To obejscie CORS.
//A co to CORS? To na nastepnym module...

window.initMap = initMap;

document.addEventListener('DOMContentLoaded', function() {
    contactForm();
    nav();
    carousel();

    const cnf = {
        selektor : '.main-paralax',
        selektorSlide : '.main-paralax-slide',
        prevSelector : '.main-paralax-prev',
        nextSelector : '.main-paralax-next',
        animDelay : 5000
    }

    const slider = new Slider(cnf);

    slider.init();
})

