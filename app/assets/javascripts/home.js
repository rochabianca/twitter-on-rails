$(document).on('click', '#footer__menu', function() {
  $('#footer__menu').addClass('opened-menu');
  $('#log-out-option').addClass('slideInUp');
  $('#log-out-option').removeClass('essential__display-none');
})

$(document).on('click', '.opened-menu', function() {
  $('#footer__menu').removeClass('opened-menu');
  $('#log-out-option').addClass('essential__display-none').fadeIn('slow');
  
})