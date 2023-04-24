$(function () {
  // 選單展開/關閉
  $('.nav__menu').click(function () {
    $('.nav__meunBtn').toggleClass('active')
    $('.list__content').toggleClass('active')
  })
  // 選單內點選顏色變化
  $('.list__contentText ul li').click(function () {
    // 阻止連結行為
    event.preventDefault();

    $('.list__contentText ul li').removeClass('active');
    $(this).addClass('active')

  })

  let mouseX = 0;
  let mouseY = 0;
  let circleX = 0;
  let circleY = 0;
  let speed = 0.1;

  $(document).mousemove(function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  function animate() {
    circleX += (mouseX - circleX) * speed;
    circleY += (mouseY - circleY) * speed;
    $('.circle').css({
      'left': circleX + 'px',
      'top': circleY + 'px'
    });

    // 特定 區塊 碰觸的功能
    let circleElem = $('.circle');
    let specificElem = $('.nav');

    let circleOffset = circleElem.offset();
    let circleWidth = circleElem.outerWidth();
    let circleHeight = circleElem.outerHeight();

    let specificOffset = specificElem.offset();
    let specificWidth = specificElem.outerWidth();
    let specificHeight = specificElem.outerHeight();

    if (
      circleOffset.left + circleWidth > specificOffset.left &&
      circleOffset.left < specificOffset.left + specificWidth &&
      circleOffset.top + circleHeight > specificOffset.top &&
      circleOffset.top < specificOffset.top + specificHeight
    ) {
      circleElem.addClass('circle--active');
      circleElem.removeClass('circle--Nactive');
    } else {
      circleElem.removeClass('circle--active');
      circleElem.addClass('circle--Nactive');
    }

    requestAnimationFrame(animate);
  }

  animate();
})