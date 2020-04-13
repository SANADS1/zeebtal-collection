/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* JS Document */

/** ****************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Search
4. Init Menu
5. Init Quantity

***************************** */

$(document).ready(() => {
  /*

  1. Vars and Inits

  */

  // eslint-disable-next-line no-undef
  const header = $('.header');
  // eslint-disable-next-line no-tabs
  // eslint-disable-next-line no-unused-vars
  let hambActive = false;
  let menuActive = false;

  setHeader();

  $(window).on('resize', () => {
    setHeader();
  });

  $(document).on('scroll', () => {
    setHeader();
  });

  initSearch();
  initMenu();
  initQuantity();

  /*

2. Set Header

*/

  function setHeader() {
    if ($(window).scrollTop() > 100) {
      header.addClass('scrolled');
    } else {
      header.removeClass('scrolled');
    }
  }

  /*

3. Init Search

 */

  function initSearch() {
    if ($('.search').length && $('.search_panel').length) {
      const search = $('.search');
      const panel = $('.search_panel');

      search.on('click', () => {
        panel.toggleClass('active');
      });
    }
  }

  /*

4. Init Menu

*/

  function initMenu() {
    if ($('.hamburger').length) {
      const hamb = $('.hamburger');

      hamb.on('click', (event) => {
        event.stopPropagation();

        if (!menuActive) {
          openMenu();

          $(document).one('click', function cls(e) {
            if ($(e.target).hasClass('menu_mm')) {
              $(document).one('click', cls);
            } else {
              closeMenu();
            }
          });
        } else {
          $('.menu').removeClass('active');
          menuActive = false;
        }
      });

      // Handle page menu
      if ($('.page_menu_item').length) {
        const items = $('.page_menu_item');
        items.each(function () {
          const item = $(this);

          item.on('click', (evt) => {
            if (item.hasClass('has-children')) {
              evt.preventDefault();
              evt.stopPropagation();
              const subItem = item.find('> ul');
              if (subItem.hasClass('active')) {
                subItem.toggleClass('active');
                TweenMax.to(subItem, 0.3, { height: 0 });
              } else {
                subItem.toggleClass('active');
                TweenMax.set(subItem, { height: 'auto' });
                TweenMax.from(subItem, 0.3, { height: 0 });
              }
            } else {
              evt.stopPropagation();
            }
          });
        });
      }
    }
  }

  function openMenu() {
    // eslint-disable-next-line no-undef
    const fs = $('.menu');
    fs.addClass('active');
    hambActive = true;
    menuActive = true;
  }

  function closeMenu() {
    const fs = $('.menu');
    fs.removeClass('active');
    hambActive = false;
    menuActive = false;
  }

  /*

5. Init Quantity

*/

  function initQuantity() {
    // Handle product quantity input
    if ($('.product_quantity').length) {
      const input = $('#quantity_input');
      const incButton = $('#quantity_inc_button');
      const decButton = $('#quantity_dec_button');

      let originalVal;
      let endVal;

      incButton.on('click', () => {
        originalVal = input.val();
        endVal = parseFloat(originalVal) + 1;
        input.val(endVal);
      });

      decButton.on('click', () => {
        originalVal = input.val();
        if (originalVal > 0) {
          endVal = parseFloat(originalVal) - 1;
          input.val(endVal);
        }
      });
    }
  }
});
