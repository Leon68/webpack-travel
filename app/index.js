
import './css/main.css'
import './css/reset.css'
import './css/normal.css'
import './css/ui.css'
// import './css/icon-font/iconfont.css'
import $ from 'jquery'
import GoTop from './com/gotop'
import Barrel from './com/barrel'
import Carousel from './com/carousel'


//
GoTop().init($('body'))
let barrel = Barrel()
    barrel.init($('.landscope-img'))
$('.load-more').on('click', function () {
    barrel.init($('.landscope-img'))
})

Carousel().init($('.carousel'));
