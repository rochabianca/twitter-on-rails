$(document).on('click', '.cancel-account', openDangerZone);
$(document).on('click', '.danger-zone-opened', closeDangerZone);

function openDangerZone() {
  $('.edit-profile__danger-zone').removeClass('essential__display-none').addClass('slideInUp');
  $('.cancel-account').addClass('danger-zone-opened');
};

function closeDangerZone() {
  $('.edit-profile__danger-zone').addClass('essential__display-none').removeClass('slideInUp');
  $('.cancel-account').removeClass('danger-zone-opened');
}