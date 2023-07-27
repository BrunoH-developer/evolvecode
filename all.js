window.scroll({
    top: 0,
    behavior:'smooth',

});

const faqItems = document.querySelectorAll('.div-faq');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    faqItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
    const faqContent = item.querySelector('.p-faq'); 
    faqContent.classList.toggle('show');
    const addIcon = item.querySelector('.add');
    const removeIcon = item.querySelector('.rem');
    if (faqContent.classList.contains('show')) {
      addIcon.style.display = 'none';
      removeIcon.style.display = 'inline-block';
    } else {
      addIcon.style.display = 'inline-block';
      removeIcon.style.display = 'none';
    }
  });
});



  $(document).ready(function() {

    function addHeaderShadow() {
      var scrollTop = $(window).scrollTop();
      var header = $('.header');

      if (scrollTop > 0) {
        header.addClass('header');
      } else {
        header.removeClass('header');
      }
    }
    $(window).on('load scroll', addHeaderShadow);
  });
