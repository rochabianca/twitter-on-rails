$(document).on('mouseenter', '.tweet', function() {
  $('.profile__delete-tweet', this).removeClass('essential__display-none').fadeIn('slow');
  $('.profile__delete-tweet', this).addClass('fadeInDown');
  $('.tweet__actions', this).removeClass('essential__display-none').fadeIn('slow');
  $('.tweet__actions', this).addClass('fadeInDown');
});

$(document).on('mouseleave', '.tweet', function() {
  $('.profile__delete-tweet', this).addClass('essential__display-none').fadeIn('slow')
  $('.tweet__actions', this).addClass('essential__display-none').fadeIn('slow')
});