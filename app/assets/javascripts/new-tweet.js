var totalCaracteres = 140;

$(document).on('turbolinks:load', newTweetInitialState);
$(document).on('keyup paste', '#tweet_content', changeCharacteres);
$(document).on('click', '#open-tweet-model', openNewTweetModal);
$(document).on('click', '#new-tweet__quit, #sendTweet, .tweet-opened', hideNewTweetModal);

function newTweetInitialState() {
  $('.caracteres').text(totalCaracteres);
  $('.button__tweet').addClass('button__disabled');
}

function openNewTweetModal() {
  $('.menu').addClass('menu__opened').fadeIn('slow');
  $('#open-tweet-model').addClass('tweet-opened');
  $('.new-tweet').addClass('slideInLeft');
  $('.new-tweet').removeClass('essential__display-none').fadeIn('slow');
};

function hideNewTweetModal() {
  $('.menu').removeClass('menu__opened');
  $('.new-tweet').addClass('essential__display-none');
  $('#open-tweet-model').removeClass('tweet-opened');
};

function changeCharacteres() {
  setTimeout(function() {
    var valorTextarea = $('#tweet_content').val().length,
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
}