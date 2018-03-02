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
  $('.loading').removeClass('essential__display-none')
}

function openContent() {
  $('.loading').addClass('essential__display-none')
  $('#profile_card-content').removeClass('essential__display-none')
}

function addColumns() {
  $('.removable').removeClass('essential__display-none');
}

function removeColumns() {
  $('.removable').addClass('essential__display-none');
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

function newTweetInitialState() {
  $('.caracteres').text(totalCaracteres);
  $('.button__tweet').addClass('button__disabled');
}

function openNewTweetModal() {
  $('.menu').addClass('menu__opened').fadeIn('slow');
  $('#open-tweet-model').addClass('tweet-opened');
  $('.new-tweet').addClass('slideInLeft').removeClass('essential__display-none').fadeIn('slow');
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

function showDeleteOption() {
  $('.profile__delete-tweet', this).removeClass('essential__display-none').fadeIn(800);
}

function hideDeleteOption() {
  $('.profile__delete-tweet', this).addClass('essential__display-none').fadeOut(800)
}