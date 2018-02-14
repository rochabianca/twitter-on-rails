var totalCaracteres = 140;

$(document).on('turbolinks:load', function () {
  $('.caracteres').text(totalCaracteres);
  $('.button__tweet').addClass('button__disabled');
});

$(document).on('keyup paste', '#tweet_content', function() {
  setTimeout(function() {
  var valorTextarea = $('#tweet_content').val().length,
      // palavras = $('#tweet_content').val().split(' ').length;

  // totalCaracteres = (140-valorTextarea+palavras-1);
  totalCaracteres = (140-valorTextarea);

  if (totalCaracteres < 16) {
    $('.caracteres').addClass('text__danger');
  }
  if (totalCaracteres < 0 || totalCaracteres == 140) {
    $('.button__tweet').addClass('button__disabled');
  }
  else {
    $('.caracteres').removeClass('text--danger');
    $('.button__tweet').removeClass('button__disabled');
  }


  $('.caracteres').text(totalCaracteres);
  }, 200)
});

$(document).on('click', '#open-tweet-model', function() {
  $('.menu').addClass('menu__opened').fadeIn('slow');
  $('.new-tweet').removeClass('essential__display-none').fadeIn('slow');
});

$(document).on('click', '#new-tweet__quit, #sendTweet', function() {
  $('.menu').removeClass('menu__opened');
  $('.new-tweet').addClass('essential__display-none');
});