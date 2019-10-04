

// 初期設定
init();
function init() {
  show();
}



function show() {

  el = $('.text');

  TweenMax.set(el, {
    'letter-spacing':'0.5em',
    opacity:0,
    'font-variation-settings': '"wght" ' + 100
  });

  TweenMax.to(el, 1.5, {
    ease:Power4.easeInOut,
    'letter-spacing':'0.01em',
    opacity:2,
    'font-variation-settings': '"wght" ' + 800,
    delay:1,
    onComplete:hide
  });

}


function hide() {

  el = $('.text');

  TweenMax.to(el, 1, {
    ease:Power4.easeInOut,
    opacity:0,
    delay:1,
    onComplete:show
  });

}
