var totalCaracteres = 140;

$(document).on('turbolinks:load', function () {
  $('.caracteres').text(totalCaracteres);
  $('.button-tweet').addClass('button--disabled');
});

$(document).on('keyup paste', '#tweet_content', function() {
  setTimeout(function() {
  var valorTextarea = $('#tweet_content').val().length,
      // palavras = $('#tweet_content').val().split(' ').length;

  // totalCaracteres = (140-valorTextarea+palavras-1);
  totalCaracteres = (140-valorTextarea);

  if (totalCaracteres < 16) {
    $('.caracteres').addClass('text--danger');
  }
  if (totalCaracteres < 0 || totalCaracteres == 140) {
    $('.button-tweet').addClass('button--disabled');
  }
  else {
    $('.caracteres').removeClass('text--danger');
    $('.button-tweet').removeClass('button--disabled');
  }


  $('.caracteres').text(totalCaracteres);
  }, 200)
});