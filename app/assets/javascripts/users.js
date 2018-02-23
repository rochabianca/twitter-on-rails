$(document).on('ajax:beforeSend', '.profile__user', function() {
  $('#mentions').addClass('essential__display-none').fadeIn('slow');
  $('#trending').addClass('essential__display-none').fadeIn('slow');
  $('#profile-card').removeClass('essential__display-none').fadeIn('slow');
  $('#profile-card').addClass('slideInRight');
  $('.profile__bg').removeClass('essential__display-none').fadeIn(500);
});