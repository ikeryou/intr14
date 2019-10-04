

_angle = 0;


// 初期設定
init();
function init() {

  update();

}


// 毎フレーム実行
window.requestAnimationFrame(update);
function update() {

  var sw = window.innerWidth;
  var sh = window.innerHeight;

  _angle += 4;
  $('.text > span').each(function(i,e) {

    var weight = map(Math.sin(radian(_angle + i * 10)), 200, 800, -1, 1);
    TweenMax.set($(e), {
      'font-variation-settings': '"wght" ' + weight
    });

  });

  window.requestAnimationFrame(update);
}
