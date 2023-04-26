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

  $(".OOH__slick").on("init reInit afterChange", function (event, slick, currentSlide) {
    // 設定特定class的函數
    setFixedClasses(slick);
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
  function setFixedClasses(slick) {
    var currentSlideIndex = slick.currentSlide;
    var totalSlides = slick.slideCount;

    // 檢查並設定顯示中的第一個輪播項目的背景
    slick.$slides.eq(currentSlideIndex % totalSlides).removeClass("OOH__slick--bg1 OOH__slick--bg2 OOH__slick--bg3").addClass("OOH__slick--bg1");

    // 檢查並設定顯示中的第二個輪播項目的背景
    slick.$slides.eq((currentSlideIndex + 1) % totalSlides).removeClass("OOH__slick--bg1 OOH__slick--bg2 OOH__slick--bg3").addClass("OOH__slick--bg2");

    // 檢查並設定顯示中的第三個輪播項目的背景
    slick.$slides.eq((currentSlideIndex + 2) % totalSlides).removeClass("OOH__slick--bg1 OOH__slick--bg2 OOH__slick--bg3").addClass("OOH__slick--bg3");
  }
});   