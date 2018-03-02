var totalCaracteres = 140;

$(document).on('turbolinks:load', newTweetInitialState);
$(document).on('keyup paste', '#tweet_content', changeCharacteres);
$(document).on('click', '#open-tweet-model', openNewTweetModal);
$(document).on('click', '#new-tweet__quit, #sendTweet, .tweet-opened', hideNewTweetModal);