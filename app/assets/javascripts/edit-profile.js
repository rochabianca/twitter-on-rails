$(document).on('click', '.cancel-account', openDangerZone);
$(document).on('click', '.danger-zone-opened', closeDangerZone);

function openDangerZone() {
  $('.edit-profile__danger-zone').removeClass('essential__display-none');
  $('.edit-profile__danger-zone').addClass('slideInUp');
  $('.cancel-account').addClass('danger-zone-opened');
};

function closeDangerZone() {
  $('.edit-profile__danger-zone').addClass('essential__display-none');
  $('.edit-profile__danger-zone').removeClass('slideInUp');
  $('.cancel-account').removeClass('danger-zone-opened');
}


/* v1 sem funções - Melhor que com?

$(document).on('click', '.cancel-account', function() {
  $('.edit-profile__danger-zone').removeClass('essential__display-none');
  $('.edit-profile__danger-zone').addClass('slideInUp');
  $('.cancel-account').addClass('danger-zone-opened');
});

$(document).on('click', '.danger-zone-opened', function() {
  $('.edit-profile__danger-zone').addClass('essential__display-none');
  $('.edit-profile__danger-zone').removeClass('slideInUp');
  $('.cancel-account').removeClass('danger-zone-opened');
});

*/