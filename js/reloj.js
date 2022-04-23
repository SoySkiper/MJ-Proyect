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

  // Scrollm arriba de la web
  $(".subir").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  // Loging falso
  $("#login form").submit(function () {
    var formName = $("#form-name").val();

    localStorage.setItem("sesion", formName);
  });

  var sesionIncrustada = localStorage.getItem("sesion");

  if (sesionIncrustada != null && sesionIncrustada != "undefined") {
    var about_parrafo = $("#about p");
    about_parrafo.html(
      "<br><strong>Bienvenido " + sesionIncrustada + "<strong>"
    );
    about_parrafo.append("<br><a href='#' id='logout'>Cerrar sesión<a>");
    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  //MomentJS

  setInterval(function () {
    var reloj = moment().format("h:mm:ss a");
    $("#reloj").html(reloj);
  }, 1000);
});
