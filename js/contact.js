$(document).ready(function () {
  // Selector de tema
  var theme = $("#theme");
  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
  });
  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });
  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
  });

  // Scroll arriba de la web
  $(".subir").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  $("form input[name='date']").datepicker({
    dateFormat: 'dd-mm-yy'
  });

  $.validate({
    lang: 'es',
    ErrorMenssagePosition: 'top',
    scrollToTopOnError: true
  });
});
