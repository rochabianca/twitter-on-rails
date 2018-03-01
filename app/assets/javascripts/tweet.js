$(document).on('mouseenter', '.tweet', showDeleteOption);
$(document).on('mouseleave', '.tweet', hideDeleteOption);

function showDeleteOption() {
  $('.profile__delete-tweet', this).removeClass('essential__display-none').fadeIn(800).addClass('fadeInDown');
}

function hideDeleteOption() {
  $('.profile__delete-tweet', this).addClass('essential__display-none').fadeOut(800)
}