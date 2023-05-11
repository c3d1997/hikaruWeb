// $(function () {
//   $(window).on("beforeunload", function () {
//     $(window).scrollTop(0);
//   });


//   // // 動態開始前的初始位置設定
//   // elementWith = $('#index-triangleAni').width

//   // gsap.set($('#index-triangleAni'), { display: 'block', position: 'absolute', left: 'calc(50% - elementWith/ 2)', top: 'calc(48% - 466px / 2)' });
//   // 在加載開始時禁用滾動
//   function disableScroll() {
//     document.body.style.overflow = 'hidden';
//   }

//   // 在加載結束時重新啟用滾動
//   function enableScroll() {
//     document.body.style.overflow = '';
//   }
//   // 加載開始時調用禁用滾動函數
//   disableScroll();

//   // 桌面版動畫效果
//   if (window.matchMedia("(min-width: 1280px)").matches) {
//     // 使用GSAP進行桌面版動畫效果的程式碼
//     gsap.set($('.container'), { padding: '0' });
//     gsap.set($('.Index__title'), { width: '0px', });
//     gsap.set($('.bottom-line'), { display: 'none' });
//     gsap.set($('.Index__ani'), { display: 'block', 'margin-left': '0px' });
//     gsap.set($('.Index__ani svg'), { opacity: '0' });
//     gsap.set($('.Index__smalLogoB'), { opacity: '0' });
//     gsap.set($('.Index__slogn'), { opacity: '0' });
//     gsap.set($('.ring-ani div'), { opacity: 0 });
//     gsap.set($('.Index__smalLogoW'), { opacity: 0, y: 10 });
//     gsap.set($('.ring-ani-bg div'), { scale: 0, opacity: 0, border: '1px solid #3e3e3e' });


//     const timeline = gsap.timeline();
//     const timeline2 = gsap.timeline();
//     const timeline3 = gsap.timeline();
//     const timeline4 = gsap.timeline();
//     const timeline5 = gsap.timeline();
//     const timeline6 = gsap.timeline();
//     const timeline7 = gsap.timeline();

//     timeline.to($('.ring-ani-bg div'), {
//       opacity: 1,
//       scale: 1,
//       border: '2px solid #3e3e3e',
//       duration: 2,
//     });
//     timeline.to($('.Index__smalLogoW'), {
//       opacity: 1,
//       y: 0,
//     },);
//     timeline.to($('.ring-ani div'), {
//       opacity: 1,
//       duration: 3,
//     });  // 在第一個動畫結束後等待5秒再開始第二個動畫

//     timeline.to($('.ring-ani div'), {
//       opacity: 0,
//       display: 'none',
//       duration: 1,
//     }, "+=1");
//     timeline.to($('.ring-ani-bg div'), {
//       opacity: 0,
//       display: 'none'
//     },);
//     timeline.to($('.loading'), {
//       opacity: 0,
//       duration: 1,
//     },);
//     timeline.to($('.Index__smalLogoW'), {
//       opacity: 0,
//     }, '<');
//     timeline.to($('.Index__smalLogoB'), {
//       opacity: 1,
//     }, '<');
//     timeline.to($('.Index__ani svg'), {
//       opacity: 1,
//     }, '+=0.5');
//     timeline.to($('.Index__ani svg'), {
//       opacity: 1,
//     }, '+=0.5');
//     timeline.to($('.Index__title'), {
//       width: '550px',
//       duration: 2,
//       ease: 'power2.in',
//     },);
//     timeline.to($('.Index__ani'), {
//       'margin-left': '30px',
//       duration: 1,
//     }, '<');
//     timeline.to($('.Index__smalLogoB'), {
//       x: 84,
//       y: 6,
//       duration: 1,
//     },);
//     timeline.to($('.Index__slogn'), {
//       opacity: 1,
//       duration: 2,
//     },);
//     timeline.fromTo($('.Index__ani--line1'), 2, { width: '0%' }, { width: '300%', ease: 'power1.out' }, '<');
//     timeline.fromTo($('.Index__ani--line2'), 2, { width: '0%' }, { width: '300%', ease: 'power1.out' }, '<');
//     timeline.fromTo($('.Index__ani--line3'), 2, { width: '0%' }, { width: '300%', ease: 'power1.out' }, '<');
//     timeline.fromTo($('.Index__ani--ball'), 1, { opacity: 0 }, { opacity: 1 }, '<');
//     timeline.fromTo($('.Index__lightBall--set1'), 1, { opacity: 0 }, { opacity: 0.15 }, '<');
//     timeline.fromTo($('.Index__lightBall--set2'), 1, { opacity: 0 }, { opacity: 1 }, '<');

//     timeline.fromTo($('.nav'), .5, {
//       display: 'none', opacity: 0
//     }, {
//       display: 'flex', opacity: 1
//     }, '<');



//     timeline2.fromTo($('.line-1'), .5, { width: '0%', opacity: 0 }, {
//       width: '100%', opacity: 1,
//       ease: 'power1.out',
//     }).to($('.line-1'), {
//       opacity: 0,
//       duration: .5,
//     },).fromTo($('.Index__title div:nth-child(1) img'), .5, { y: 10, opacity: 0 }, {
//       y: 0, opacity: 1,
//       ease: 'back.out(1.7)',
//     }, '<');

//     timeline3.fromTo($('.line-2'), .5, { width: '0%', opacity: 0 }, {
//       width: '100%', opacity: 1,
//       ease: 'power1.out',
//     },).to($('.line-2'), {
//       opacity: 0,
//       duration: .5,
//     },).fromTo($('.Index__title div:nth-child(2) img'), .5, { y: 10, opacity: 0 }, {
//       y: 0, opacity: 1,
//       ease: 'back.out(1.7)',
//     }, '<');

//     timeline4.fromTo($('.line-3'), .5, { width: '0%', opacity: 0 }, {
//       width: '100%', opacity: 1,
//       ease: 'power1.out',
//     },).to($('.line-3'), {
//       opacity: 0,
//       duration: .5,
//     },).fromTo($('.Index__title div:nth-child(3) img'), .5, { y: 10, opacity: 0 }, {
//       y: 0, opacity: 1,
//       ease: 'back.out(1.7)',
//     }, '<');


//     timeline5.fromTo($('.line-4'), .5, { width: '0%', opacity: 0 }, {
//       width: '100%', opacity: 1,
//       ease: 'power1.out',
//     },).to($('.line-4'), {
//       opacity: 0,
//       duration: .5,
//     },).fromTo($('.Index__title div:nth-child(4) h1'), .5, { y: 10, opacity: 0 }, {
//       y: 0, opacity: 1,
//       ease: 'back.out(1.7)',
//     }, '<');

//     timeline6.fromTo($('.line-5'), .5, { width: '0%', opacity: 0 }, {
//       width: '100%', opacity: 1,
//       ease: 'power1.out',
//     },).to($('.line-5'), {
//       opacity: 0,
//       duration: .5,
//     },).fromTo($('.Index__title div:nth-child(5) h2'), .5, { y: 10, opacity: 0 }, {
//       y: 0, opacity: 1,
//       ease: 'back.out(1.7)',
//     }, '<');




//     timeline5.to($('.loading'), {
//       duration: 1,
//       onComplete: enableScroll  // 在動畫完成時調用重新啟用滾動函數
//     });

//     timeline.add(timeline2);
//     timeline.add(timeline3, timeline2.startTime() + 0.2);
//     timeline.add(timeline4, timeline3.startTime() + 0.2);
//     timeline.add(timeline5, timeline4.startTime() + 0.2);
//     timeline.add(timeline6, timeline5.startTime() + 0.2);
//   }
//   else if (window.matchMedia("(min-width: 1024px)").matches) {
//     gsap.set($('.Index__title'), { width: '0px', padding: '0px' });
//     // 使用GSAP進行桌面版動畫效果的程式碼
//     gsap.set($('.container'), { padding: '0' });
//     gsap.set($('.bottom-line'), { display: 'none' });
//     gsap.set($('.Index__ani'), { display: 'block', 'margin-left': '0px' });
//     gsap.set($('.Index__ani svg'), { opacity: '0' });
//     gsap.set($('.Index__smalLogoB'), { opacity: '0' });
//     gsap.set($('.Index__slogn'), { opacity: '0' });
//     gsap.set($('.ring-ani div'), { opacity: 0 });
//     gsap.set($('.Index__smalLogoW'), { opacity: 0, y: 10 });
//     gsap.set($('.ring-ani-bg div'), { scale: 0, opacity: 0, border: '1px solid #3e3e3e' });


//     const timeline = gsap.timeline();
//     const timeline2 = gsap.timeline();
//     const timeline3 = gsap.timeline();
//     const timeline4 = gsap.timeline();
//     const timeline5 = gsap.timeline();
//     const timeline6 = gsap.timeline();
//     const timeline7 = gsap.timeline();

//     timeline.to($('.ring-ani-bg div'), {
//       opacity: 1,
//       scale: 1,
//       border: '2px solid #3e3e3e',
//       duration: 2,
//     });
//     timeline.to($('.Index__smalLogoW'), {
//       opacity: 1,
//       y: 0,
//     },);
//     timeline.to($('.ring-ani div'), {
//       opacity: 1,
//       duration: 3,
//     });  // 在第一個動畫結束後等待5秒再開始第二個動畫

//     timeline.to($('.ring-ani div'), {
//       opacity: 0,
//       display: 'none',
//       duration: 1,
//     }, "+=1");
//     timeline.to($('.ring-ani-bg div'), {
//       opacity: 0,
//       display: 'none'
//     },);
//     timeline.to($('.loading'), {
//       opacity: 0,
//       duration: 1,
//     },);
//     timeline.to($('.Index__smalLogoW'), {
//       opacity: 0,
//     }, '<');
//     timeline.to($('.Index__smalLogoB'), {
//       opacity: 1,
//     }, '<');
//     timeline.to($('.Index__ani svg'), {
//       opacity: 1,
//     }, '+=0.5');
//     timeline.to($('.Index__ani svg'), {
//       opacity: 1,
//     }, '+=0.5');
//     timeline.to($('.Index__title'), {
//       width: '550px',
//       duration: 2,
//       ease: 'power2.in',
//       padding: '0 0 0 100px'
//     },);
//     timeline.to($('.Index__ani'), {
//       'margin-left': '30px',
//       duration: 1,
//     }, '<');
//     timeline.to($('.Index__smalLogoB'), {
//       x: 84,
//       y: 6,
//       duration: 1,
//     },);
//     timeline.to($('.Index__slogn'), {
//       opacity: 1,
//       duration: 2,
//     },);
//     timeline.fromTo($('.Index__ani--line1'), 2, { width: '0%' }, { width: '300%', ease: 'power1.out' }, '<');
//     timeline.fromTo($('.Index__ani--line2'), 2, { width: '0%' }, { width: '300%', ease: 'power1.out' }, '<');
//     timeline.fromTo($('.Index__ani--line3'), 2, { width: '0%' }, { width: '300%', ease: 'power1.out' }, '<');
//     timeline.fromTo($('.Index__ani--ball'), 1, { opacity: 0 }, { opacity: 1 }, '<');
//     timeline.fromTo($('.Index__lightBall--set1'), 1, { opacity: 0 }, { opacity: 0.15 }, '<');
//     timeline.fromTo($('.Index__lightBall--set2'), 1, { opacity: 0 }, { opacity: 1 }, '<');

//     timeline.fromTo($('.nav'), .5, {
//       display: 'none', opacity: 0
//     }, {
//       display: 'flex', opacity: 1
//     }, '<');



//     timeline2.fromTo($('.line-1'), .5, { width: '0%', opacity: 0 }, {
//       width: '100%', opacity: 1,
//       ease: 'power1.out',
//     }).to($('.line-1'), {
//       opacity: 0,
//       duration: .5,
//     },).fromTo($('.Index__title div:nth-child(1) img'), .5, { y: 10, opacity: 0 }, {
//       y: 0, opacity: 1,
//       ease: 'back.out(1.7)',
//     }, '<');

//     timeline3.fromTo($('.line-2'), .5, { width: '0%', opacity: 0 }, {
//       width: '100%', opacity: 1,
//       ease: 'power1.out',
//     },).to($('.line-2'), {
//       opacity: 0,
//       duration: .5,
//     },).fromTo($('.Index__title div:nth-child(2) img'), .5, { y: 10, opacity: 0 }, {
//       y: 0, opacity: 1,
//       ease: 'back.out(1.7)',
//     }, '<');

//     timeline4.fromTo($('.line-3'), .5, { width: '0%', opacity: 0 }, {
//       width: '100%', opacity: 1,
//       ease: 'power1.out',
//     },).to($('.line-3'), {
//       opacity: 0,
//       duration: .5,
//     },).fromTo($('.Index__title div:nth-child(3) img'), .5, { y: 10, opacity: 0 }, {
//       y: 0, opacity: 1,
//       ease: 'back.out(1.7)',
//     }, '<');


//     timeline5.fromTo($('.line-4'), .5, { width: '0%', opacity: 0 }, {
//       width: '100%', opacity: 1,
//       ease: 'power1.out',
//     },).to($('.line-4'), {
//       opacity: 0,
//       duration: .5,
//     },).fromTo($('.Index__title div:nth-child(4) h1'), .5, { y: 10, opacity: 0 }, {
//       y: 0, opacity: 1,
//       ease: 'back.out(1.7)',
//     }, '<');

//     timeline6.fromTo($('.line-5'), .5, { width: '0%', opacity: 0 }, {
//       width: '100%', opacity: 1,
//       ease: 'power1.out',
//     },).to($('.line-5'), {
//       opacity: 0,
//       duration: .5,
//     },).fromTo($('.Index__title div:nth-child(5) h2'), .5, { y: 10, opacity: 0 }, {
//       y: 0, opacity: 1,
//       ease: 'back.out(1.7)',
//     }, '<');




//     timeline5.to($('.loading'), {
//       duration: 1,
//       onComplete: enableScroll  // 在動畫完成時調用重新啟用滾動函數
//     });

//     timeline.add(timeline2);
//     timeline.add(timeline3, timeline2.startTime() + 0.2);
//     timeline.add(timeline4, timeline3.startTime() + 0.2);
//     timeline.add(timeline5, timeline4.startTime() + 0.2);
//     timeline.add(timeline6, timeline5.startTime() + 0.2);
//   } else {
//     gsap.set($('.Index__title'), { width: '0px', display: 'none', padding: '0px' });
//     // 使用GSAP進行桌面版動畫效果的程式碼
//     gsap.set($('.container'), { padding: '0 30px' });
//     gsap.set($('.Index__ani--line1'), { display: 'none' });
//     gsap.set($('.Index__ani--line2'), { display: 'none' });
//     gsap.set($('.Index__ani--line3'), { display: 'none' });
//     gsap.set($('.Index__lightBall'), { display: 'none' });
//     gsap.set($('.Index__ani--ball'), { display: 'none' });
//     gsap.set($('.Index__ani'), { display: 'block', 'margin-left': '0px' });
//     gsap.set($('.Index__ani svg'), { opacity: '0' });
//     gsap.set($('.Index__smalLogoB'), { opacity: '0' });
//     gsap.set($('.Index__slogn'), { opacity: '0' });
//     gsap.set($('.ring-ani div'), { opacity: 0 });
//     gsap.set($('.Index__smalLogoW'), { opacity: 0, y: 10 });
//     gsap.set($('.ring-ani-bg div'), { scale: 0, opacity: 0, border: '1px solid #3e3e3e' });


//     const timeline = gsap.timeline();
//     const timeline2 = gsap.timeline();
//     const timeline3 = gsap.timeline();
//     const timeline4 = gsap.timeline();
//     const timeline5 = gsap.timeline();
//     const timeline6 = gsap.timeline();
//     const timeline7 = gsap.timeline();

//     timeline.to($('.ring-ani-bg div'), {
//       opacity: 1,
//       scale: 1,
//       border: '2px solid #3e3e3e',
//       duration: 2,
//     });
//     timeline.to($('.Index__smalLogoW'), {
//       opacity: 1,
//       y: 0,
//     },);
//     timeline.to($('.ring-ani div'), {
//       opacity: 1,
//       duration: 3,
//     });  // 在第一個動畫結束後等待5秒再開始第二個動畫

//     timeline.to($('.ring-ani div'), {
//       opacity: 0,
//       display: 'none',
//       duration: 1,
//     }, "+=1");
//     timeline.to($('.ring-ani-bg div'), {
//       opacity: 0,
//       display: 'none'
//     },);
//     timeline.to($('.loading'), {
//       opacity: 0,
//       duration: 1,
//     },);
//     timeline.to($('.Index__ani'), {
//       display: 'none',
//       duration: .1,
//     },);
//     timeline.to($('.Index__title'), {
//       display: 'flex',
//     },);
//     timeline.to($('.Index__title'), {
//       width: '550px',
//       duration: .5,
//       ease: 'power2.in',
//       padding: '0 0 0 0px'
//     },);

//     timeline.fromTo($('.nav'), .5, {
//       display: 'none', opacity: 0
//     }, {
//       display: 'flex', opacity: 1
//     }, '<');



//     timeline2.fromTo($('.line-1'), .5, { width: '0%', opacity: 0 }, {
//       width: '100%', opacity: 1,
//       ease: 'power1.out',
//     }).to($('.line-1'), {
//       opacity: 0,
//       duration: .5,
//     },).fromTo($('.Index__title div:nth-child(1) img'), .5, { y: 10, opacity: 0 }, {
//       y: 0, opacity: 1,
//       ease: 'back.out(1.7)',
//     }, '<');

//     timeline3.fromTo($('.line-2'), .5, { width: '0%', opacity: 0 }, {
//       width: '100%', opacity: 1,
//       ease: 'power1.out',
//     },).to($('.line-2'), {
//       opacity: 0,
//       duration: .5,
//     },).fromTo($('.Index__title div:nth-child(2) img'), .5, { y: 10, opacity: 0 }, {
//       y: 0, opacity: 1,
//       ease: 'back.out(1.7)',
//     }, '<');

//     timeline4.fromTo($('.line-3'), .5, { width: '0%', opacity: 0 }, {
//       width: '100%', opacity: 1,
//       ease: 'power1.out',
//     },).to($('.line-3'), {
//       opacity: 0,
//       duration: .5,
//     },).fromTo($('.Index__title div:nth-child(3) img'), .5, { y: 10, opacity: 0 }, {
//       y: 0, opacity: 1,
//       ease: 'back.out(1.7)',
//     }, '<');


//     timeline5.fromTo($('.line-4'), .5, { width: '0%', opacity: 0 }, {
//       width: '100%', opacity: 1,
//       ease: 'power1.out',
//     },).to($('.line-4'), {
//       opacity: 0,
//       duration: .5,
//     },).fromTo($('.Index__title div:nth-child(4) h1'), .5, { y: 10, opacity: 0 }, {
//       y: 0, opacity: 1,
//       ease: 'back.out(1.7)',
//     }, '<');

//     timeline6.fromTo($('.line-5'), .5, { width: '0%', opacity: 0 }, {
//       width: '100%', opacity: 1,
//       ease: 'power1.out',
//     },).to($('.line-5'), {
//       opacity: 0,
//       duration: .5,
//     },).fromTo($('.Index__title div:nth-child(5) h2'), .5, { y: 10, opacity: 0 }, {
//       y: 0, opacity: 1,
//       ease: 'back.out(1.7)',
//     }, '<');




//     timeline5.to($('.loading'), {
//       duration: 1,
//       onComplete: enableScroll  // 在動畫完成時調用重新啟用滾動函數
//     });

//     timeline.add(timeline2);
//     timeline.add(timeline3, timeline2.startTime() + 0.2);
//     timeline.add(timeline4, timeline3.startTime() + 0.2);
//     timeline.add(timeline5, timeline4.startTime() + 0.2);
//     timeline.add(timeline6, timeline5.startTime() + 0.2);
//   }




// })

