$(document).on('click', '.profile__user', function() {
  $('#mentions').addClass('essential__display-none').fadeIn('slow');
  $('#trending').addClass('essential__display-none').fadeIn('slow');
  $('#profile-card').removeClass('essential__display-none').fadeIn('slow');
  $('.profile__user').addClass('profile__opened');
});

$(document).on('click', '.profile__opened, .quit', function() {
  $('#mentions').removeClass('essential__display-none');
  $('#trending').removeClass('essential__display-none');
  $('#profile-card').addClass('essential__display-none').fadeIn('slow');
  $('.profile__user').removeClass('profile__opened');
});