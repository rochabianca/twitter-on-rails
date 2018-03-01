function openFooter() {
  $('#footer__menu').addClass('opened-menu');
  $('#log-out-option').addClass('slideInUp');
  $('#log-out-option').removeClass('essential__display-none');
}

function closeFooter() {
  $('#footer__menu').removeClass('opened-menu');
  $('#log-out-option').addClass('essential__display-none').fadeIn('slow');
}

function openModal() {
  removeColumns();
  showCard();
}

function closeModal() {
  closeCard()
  addColumns();
  $('.profile__loading').removeClass('essential__display-none');
  $('.loading').removeClass('essential__display-none')
}

function openContent() {
  $('.loading').addClass('essential__display-none')
  $('#profile_card-content').removeClass('essential__display-none')
}

function removeColumns() {
  $('.removable').addClass('essential__display-none');
}

function addColumns() {
  $('.removable').removeClass('essential__display-none');
}

function showCard() {
  $('#profile-card').removeClass('essential__display-none').fadeIn('slow').addClass('slideInRight');
  $('.profile__bg').removeClass('essential__display-none').fadeIn(500);  
}

function closeCard() {
  $('#profile-card').addClass('essential__display-none').fadeOut('slow');
  $('.profile__bg').addClass('essential__display-none').fadeOut(500);
  $('.profile__user').removeClass('profile__opened');
}