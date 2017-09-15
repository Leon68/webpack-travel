
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

$('.img-ct img').ready(function(){
    let barrel = Barrel()
    console.log('ready4')
    Carousel().init($('.carousel'));
    barrel.init($('.landscope-img'))
    GoTop().init($('body'))
    $('.load-more').on('click', function () {
        barrel.init($('.landscope-img'))
    })
})
