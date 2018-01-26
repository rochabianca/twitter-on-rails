
$('#new-tweet').keyup( function() {
  console.log("hi");
  setTimeout(function() {
  var valorTextarea = $('textarea').val().length,
      palavras = $('textarea').val().split(' ').length;
  $('.caracteres').text(valorTextarea);
  $('.palavras').text(palavras);
  }, 200)
});