jQuery.fn.center = function () {
  this.css("position","relative");
  this.css({
      top: '50%',
      left: '50%',
      margin: '-' + (this.height() / 2) + 'px 0 0 -' + (this.width() / 2) + 'px'
  });
  return this;
}

$(document).ready(function() {
  $('#card').center();
});