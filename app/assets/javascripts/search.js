$(document).on('ajax:beforeSend', '#search', function() {
  openModal()
});

$(document).on('click', '.profile__bg', closeModal);