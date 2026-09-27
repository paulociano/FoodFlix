$(function () {
  var $carousel = $('.owl-carousel');

  $carousel.owlCarousel({
    loop: true,
    margin: 14,
    nav: true,
    dots: false,
    smartSpeed: 420,
    navText: ['‹', '›'],
    responsive: {
      0: { items: 1.4 },
      520: { items: 2.2 },
      760: { items: 3.2 },
      1024: { items: 4.2 },
      1240: { items: 5 }
    }
  });

  var $header = $('.site-header');
  var $menu = $('#menu-principal');
  var $toggle = $('.menu-toggle');

  function syncHeader() {
    $header.toggleClass('is-scrolled', window.scrollY > 18);
  }

  function closeMenu() {
    $menu.removeClass('is-open');
    $toggle.attr('aria-expanded', 'false').attr('aria-label', 'Abrir menu');
    $('body').removeClass('menu-open');
  }

  $toggle.on('click', function () {
    var willOpen = !$menu.hasClass('is-open');
    $menu.toggleClass('is-open', willOpen);
    $toggle.attr('aria-expanded', String(willOpen));
    $toggle.attr('aria-label', willOpen ? 'Fechar menu' : 'Abrir menu');
    $('body').toggleClass('menu-open', willOpen);
  });

  $menu.find('a').on('click', function () {
    closeMenu();
    $menu.find('a').removeClass('is-active');
    $(this).addClass('is-active');
  });

  $(window).on('scroll', syncHeader);
  syncHeader();

  $('[data-action="watch"]').on('click', function () {
    document.querySelector('#colecao').scrollIntoView({ behavior: 'smooth' });
  });

  $('[data-action="info"]').on('click', function () {
    document.querySelector('.editorial').scrollIntoView({ behavior: 'smooth' });
  });
});
