$(document).on('ajax:beforeSend', '.profile__edit', function() {
  closeFooter();
  openModal();
});

