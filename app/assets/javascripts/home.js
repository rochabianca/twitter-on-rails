// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on('click', '#menu__footer', function() {
  $('#menu__footer').addClass('opened-menu');
  $('#log-out-option').addClass('slideInUp');
  $('#log-out-option').removeClass('essential__display-none');
  
  
})

$(document).on('click', '.opened-menu', function() {
  $('#menu__footer').removeClass('opened-menu');
  // $('#log-out-option').addClass('slideInDown').fadeIn('slow');
  $('#log-out-option').addClass('essential__display-none').fadeIn('slow');
})