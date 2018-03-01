function closeFooter() {
  $('#footer__menu').removeClass('opened-menu');
  $('#log-out-option').addClass('essential__display-none').fadeIn('slow');
}

function openModal() {
  $('#mentions').addClass('essential__display-none').fadeIn('slow');
  $('#trending').addClass('essential__display-none').fadeIn('slow');
  $('#profile-card').removeClass('essential__display-none').fadeIn('slow');
  $('#profile-card').addClass('slideInRight');
  $('.profile__bg').removeClass('essential__display-none').fadeIn(500);  
}

function closeModal() {
  $('#profile-card').addClass('essential__display-none').fadeOut('slow');
  $('.profile__bg').addClass('essential__display-none').fadeOut(500);
  $('#mentions').removeClass('essential__display-none');
  $('#trending').removeClass('essential__display-none');
  $('.profile__user').removeClass('profile__opened');
  $('.profile__loading').removeClass('essential__display-none');
  $('.loading').removeClass('essential__display-none')
}

function openContent() {
  $('.loading').addClass('essential__display-none')
  $('#profile_card-content').removeClass('essential__display-none')
}