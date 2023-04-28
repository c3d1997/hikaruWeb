// 我是誰我在哪我在幹嘛
// 1+1=2,那今天天氣好嗎?
if (window.matchMedia("(max-width: 1024px)").matches) {
  // 創建一個新的時間軸
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.OOH__title--L',
      start: 'top 60%',
    },
  });
  // 添加從 0% 寬度到 100% 寬度的動畫
  t1.fromTo(
    $('.line-6'),
    {
      width: '0%',
      opacity: 0,
    },
    {
      duration: 0.1,
      width: '100%',
      opacity: 1,
      ease: 'power1.out',
    }
  );
  // 添加將透明度降為 0 的動畫，並在時間軸中添加一個相對位置
  t1.to(
    $('.line-6'),
    {
      opacity: 0,
      duration: 0.1,
    },
    '+=0.5' // 根據需要調整此值以控制兩個動畫之間的延遲
  );
  t1.from($('.OOH__title--L img:nth-child(1)'), {
    duration: 0.25,
    opacity: 0,
    y: 50,
  }, '<')

  const t2 = gsap.timeline(
    {
      scrollTrigger: {
        trigger: '.OOH__title--L',
        start: 'top 10%',
      },
    }
  );

  t2.fromTo($('.OOH__ani img'),
    { opacity: 0 },
    {
      duration: 1,
      opacity: 1,
      ease: 'power1.out',
    })
  t2.to(
    $('.OOH__aniProduction'),
    {
      duration: 1,
      top: 'calc(68% - 124px)',
      left: 'calc(-26% - 124px)',

      ease: 'power1.out',
    },)
  t2.to(
    $('.OOH__aniBranding'),
    {
      duration: 1,
      top: 'calc(-9% - 124px)',
      left: 'calc(50% - 124px)',
      ease: 'power1.out',
    }, '<')
  t2.to(
    $('.OOH__aniSocial'),
    {
      duration: 1,
      top: 'calc(68% - 124px)',
      left: 'calc(118% - 124px)',
      ease: 'power1.out',
    }, '<')
  t2.to(
    $('.OOH__aniMedia'),
    {
      duration: 1,
      top: 'calc(111% - 124px)',
      left: 'calc(50% - 124px)',
      ease: 'power1.out',
    }, '<')
  t2.from(
    $('.OOH__ani--all'),
    {
      duration: 1,
      opacity: 0,
      ease: 'power1.out',
    }, '<')

  t2.to(
    $('.OOH__aniProduction'),
    {
      duration: .75,
      top: 'calc(55% - 124px)',
      left: 'calc(50% - 124px)',
      ease: 'power1.out',
    }, '+=1')
  t2.to(
    $('.OOH__aniBranding'),
    {
      duration: .75,
      top: 'calc(55% - 124px)',
      left: 'calc(50% - 124px)',
      ease: 'power1.out',
    }, '<')
  t2.to(
    $('.OOH__aniSocial'),
    {
      duration: .75,
      top: 'calc(55% - 124px)',
      left: 'calc(50% - 124px)',
      ease: 'power1.out',
    }, '<')
  t2.to(
    $('.OOH__aniMedia'),
    {
      duration: .75,
      top: 'calc(55% - 124px)',
      left: 'calc(50% - 124px)',
      ease: 'power1.out',
    }, '<')
  t2.to(
    $('.OOH__aniBranding'),
    {
      duration: .2,
      opacity: 0
    }, '-=.1')
  t2.to(
    $('.OOH__aniSocial'),
    {
      duration: .2,
      opacity: 0
    }, '<')
  t2.to(
    $('.OOH__aniMedia'),
    {
      duration: .2,
      opacity: 0
    }, '<')

  t2.from(
    $('.OOH__ani--Digital'),
    {
      duration: 1,
      opacity: 0,
      ease: 'power1.out',
    })



  const t3 = gsap.timeline(
    {
      scrollTrigger: {
        trigger: '.OOH__title',
        start: 'top 30%',
      },
    }
  );

  t3.from(
    $('.OOH__title--Lslogn'),
    {
      duration: .5,
      y: 30,
      opacity: 0,
      ease: 'back.out(1.5)'
    }
  )
  t3.from(
    $('.OOH__title--R'),
    {
      duration: .5,
      y: 30,
      opacity: 0,
      ease: 'back.out(1.5)'
    }, '<'
  )
} else {
  // 創建一個新的時間軸
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.OOH__title--L',
      start: 'top 60%',
    },
  });
  // 添加從 0% 寬度到 100% 寬度的動畫
  t1.fromTo(
    $('.line-6'),
    {
      width: '0%',
      opacity: 0,
    },
    {
      duration: 0.1,
      width: '100%',
      opacity: 1,
      ease: 'power1.out',
    }
  );
  // 添加將透明度降為 0 的動畫，並在時間軸中添加一個相對位置
  t1.to(
    $('.line-6'),
    {
      opacity: 0,
      duration: 0.1,
    },
    '+=0.5' // 根據需要調整此值以控制兩個動畫之間的延遲
  );
  t1.from($('.OOH__title--L img:nth-child(1)'), {
    duration: 0.25,
    opacity: 0,
    y: 50,
  }, '<')

  const t2 = gsap.timeline(
    {
      scrollTrigger: {
        trigger: '.OOH__title--L',
        start: 'top 10%',
      },
    }
  );

  t2.fromTo($('.OOH__ani img'),
    { opacity: 0 },
    {
      duration: 1,
      opacity: 1,
      ease: 'power1.out',
    })
  t2.to(
    $('.OOH__aniProduction'),
    {
      duration: 1,
      top: 'calc(70% - 174px)',
      left: 'calc(-21% - 174px)',

      ease: 'power1.out',
    },)
  t2.to(
    $('.OOH__aniBranding'),
    {
      duration: 1,
      top: 'calc(-9% - 174px)',
      left: 'calc(50% - 174px)',
      ease: 'power1.out',
    }, '<')
  t2.to(
    $('.OOH__aniSocial'),
    {
      duration: 1,
      top: 'calc(70% - 174px)',
      left: 'calc(116% - 174px)',
      ease: 'power1.out',
    }, '<')
  t2.to(
    $('.OOH__aniMedia'),
    {
      duration: 1,
      top: 'calc(107% - 174px)',
      left: 'calc(50% - 174px)',
      ease: 'power1.out',
    }, '<')
  t2.from(
    $('.OOH__ani--all'),
    {
      duration: 1,
      opacity: 0,
      ease: 'power1.out',
    }, '<')

  t2.to(
    $('.OOH__aniProduction'),
    {
      duration: .75,
      top: 'calc(55% - 174px)',
      left: 'calc(50% - 174px)',
      ease: 'power1.out',
    }, '+=1')
  t2.to(
    $('.OOH__aniBranding'),
    {
      duration: .75,
      top: 'calc(55% - 174px)',
      left: 'calc(50% - 174px)',
      ease: 'power1.out',
    }, '<')
  t2.to(
    $('.OOH__aniSocial'),
    {
      duration: .75,
      top: 'calc(55% - 174px)',
      left: 'calc(50% - 174px)',
      ease: 'power1.out',
    }, '<')
  t2.to(
    $('.OOH__aniMedia'),
    {
      duration: .75,
      top: 'calc(55% - 174px)',
      left: 'calc(50% - 174px)',
      ease: 'power1.out',
    }, '<')
  t2.to(
    $('.OOH__aniBranding'),
    {
      duration: .2,
      opacity: 0
    }, '-=.1')
  t2.to(
    $('.OOH__aniSocial'),
    {
      duration: .2,
      opacity: 0
    }, '<')
  t2.to(
    $('.OOH__aniMedia'),
    {
      duration: .2,
      opacity: 0
    }, '<')

  t2.from(
    $('.OOH__ani--Digital'),
    {
      duration: 1,
      opacity: 0,
      ease: 'power1.out',
    })



  const t3 = gsap.timeline(
    {
      scrollTrigger: {
        trigger: '.OOH__title',
        start: 'top 30%',
      },
    }
  );

  t3.from(
    $('.OOH__title--Lslogn'),
    {
      duration: .5,
      y: 30,
      opacity: 0,
      ease: 'back.out(1.5)'
    }
  )
  t3.from(
    $('.OOH__title--R'),
    {
      duration: .5,
      y: 30,
      opacity: 0,
      ease: 'back.out(1.5)'
    }, '<'
  )
}


