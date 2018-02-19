$(document).on('mouseenter', '.timeline__list', function() {
  $('.profile__delete-tweet', this).removeClass('essential__display-none').fadeIn('slow')
  $('.timeline__actions', this).removeClass('essential__display-none').fadeIn('slow')
});

$(document).on('mouseleave', '.timeline__list', function() {
  $('.profile__delete-tweet', this).addClass('essential__display-none').fadeIn('slow')
  $('.timeline__actions', this).addClass('essential__display-none').fadeIn('slow')
});