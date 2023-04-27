$(function () {
  // 選單展開/關閉
  $('.nav__menu').click(function () {
    $('.nav__meunBtn').toggleClass('active')
    $('.list__content').toggleClass('active')
  })
  $('section').click(function () {
    $('.nav__meunBtn').removeClass('active')
    $('.list__content').removeClass('active')
  })
  // 選單內點選顏色變化
  $('.list__contentText ul li').hover(function () {

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
    let scrollTop = $(window).scrollTop();

    circleX += (mouseX - circleX) * speed;
    circleY += (mouseY + scrollTop - circleY) * speed; // 將滾動偏移量加到計算中
    $('.circle').css({
      'left': circleX + 'px',
      'top': circleY + 'px'
    });

    let circleElem = $('.circle');
    let specificElems = [
      $('.nav'),
      $('.Index__scroll p'),
      $('.OOH__ani--circle1'),
      $('.OOH__ani--circle2'),
      $('.OOH__ani--circle3'),
      $('.OOH__ani--circle4')
    ];

    let circleOffset = circleElem.offset();
    let circleWidth = circleElem.outerWidth();
    let circleHeight = circleElem.outerHeight();

    let s = false;
    for (let i = 0; i < specificElems.length; i++) {
      let specificOffset = specificElems[i].offset();
      let specificWidth = specificElems[i].outerWidth();
      let specificHeight = specificElems[i].outerHeight();
      if (circleOffset.left + circleWidth > specificOffset.left &&
        circleOffset.left < specificOffset.left + specificWidth &&
        circleOffset.top + circleHeight > specificOffset.top &&
        circleOffset.top < specificOffset.top + specificHeight) {
        s = true;
        break;
      }
    }

    if (s) {
      circleElem.addClass('circle--active');
      circleElem.removeClass('circle--Nactive');
    } else {
      circleElem.removeClass('circle--active');
      circleElem.addClass('circle--Nactive');
    }

    requestAnimationFrame(animate);

  }
  animate();

  $('.OOH__ani--Branding').on('click', function () {
    // 切換輪播到第一個幻燈片
    $('.OOH__slick').slick('slickGoTo', 0);
    $('.OOH__slick--Branding').css('background-color', '#37373d')
    $('.slick-slide:not(.OOH__slick--Branding)').css('background-color', 'black');

  });

  $('.OOH__ani--Production').on('click', function () {
    // 切換輪播到第一個幻燈片
    $('.OOH__slick').slick('slickGoTo', 1);
    $('.OOH__slick--Production').css('background-color', '#37373d')
    $('.slick-slide:not(.OOH__slick--Production)').css('background-color', 'black');
  });

  $('.OOH__ani--Social').on('click', function () {
    // 切換輪播到第一個幻燈片
    $('.OOH__slick').slick('slickGoTo', 3);
    $('.OOH__slick--Social').css('background-color', '#37373d')
    $('.slick-slide:not(.OOH__slick--Social)').css('background-color', 'black');
  });
  $('.OOH__ani--Media').on('click', function () {
    // 切換輪播到第一個幻燈片
    $('.OOH__slick').slick('slickGoTo', 2);
    $('.OOH__slick--Media').css('background-color', '#37373d')
    $('.slick-slide:not(.OOH__slick--Media)').css('background-color', 'black');
  });

  $('.OOH__slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<button class="slick-prev OOH__slick--Larrow OOH__slick--arrow"><img src="images/arrorL.png" alt=""></button>',
    nextArrow: '<button class="slick-next OOH__slick--Rarrow OOH__slick--arrow"><img src="images/arrorR.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ],

  });
});

