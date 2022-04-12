$(document).ready(function () {
  $(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 1200,
  });

  // Posteos
  var post = [
    {
      title: "Prueba de título 1",
      date: "Publicado el " + moment().format("LL"),
      content:
        "Ex Lorem ut mollit exercitation qui quis. Lorem eiusmod aute laborum dolore aute ex excepteur eiusmod qui velit quis fugiat ipsum anim. Est anim minim ipsum aliquip deserunt mollit consequat magna in esse duis veniam enim sunt. Sunt laborum dolor culpa ad sint do veniam amet veniam.",
    },
    {
      title: "Prueba de título 2",
      date: "Publicado el " + moment().format("LL"),
      content:
        "Labore velit occaecat tempor aliqua Lorem sint labore minim. Ex et duis magna irure. Aliqua anim excepteur nulla cillum et velit fugiat fugiat duis dolore excepteur deserunt nostrud. Nostrud non anim non veniam proident laboris pariatur dolor incididunt. Aliquip in laborum ex ea reprehenderit incididunt mollit minim. Do voluptate excepteur deserunt consectetur reprehenderit est labore et aute occaecat dolor sint culpa sit. Minim nulla esse Lorem dolore fugiat.",
    },
    {
      title: "Prueba de título 3",
      date: "Publicado el " + moment().format("LL"),
      content:
        "Laborum reprehenderit ea pariatur veniam labore aliquip reprehenderit excepteur in nostrud laboris ut reprehenderit adipisicing. Sint magna laborum sunt voluptate officia commodo fugiat mollit velit ut do ea id qui. Voluptate amet cillum sit magna quis ex consectetur ipsum duis Lorem et officia eu. Est excepteur fugiat sint irure nisi qui nisi nostrud dolore et sit. Officia in id enim magna aliquip exercitation velit sunt excepteur anim Lorem excepteur anim eiusmod. Excepteur officia consectetur velit do proident sunt duis. Elit fugiat excepteur in quis id irure labore ut occaecat proident ad ipsum.",
    },
    {
      title: "Prueba de título 4",
      date: "Publicado el " + moment().format("LL"),
      content:
        "Cupidatat reprehenderit laboris commodo aliqua amet do non magna. Consequat mollit mollit nisi proident exercitation aute esse ea ex eu. Aliquip quis cillum do excepteur in labore et amet. Nisi et est exercitation Lorem commodo dolore esse deserunt ipsum aliquip Lorem qui pariatur fugiat. Ad culpa duis velit reprehenderit ad ipsum id pariatur et adipisicing.",
    },
  ];
  post.forEach((item, index) => {
    var post = `
        <article class="postclass">
            <h3>${item.title}</h3>
            <span class="dateclass">${item.date}</span>
            <p>
              ${item.content}
            </p>
            <a href="#" class="readmore">Leer más</a>
          </article>
    `;
    $('#post-div').append(post);
  });

  // Selector de tema
  var theme = $('#theme');
  $('#to-green').click(function(){
    theme.attr( 'href', 'css/green.css');
  });
  $('#to-blue').click(function(){
    theme.attr( 'href', 'css/blue.css');
  });
  $('#to-red').click(function(){
    theme.attr( 'href', 'css/red.css');
  });

  // Scrollm arriba de la web
  $('.subir').click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  // Loging falso
  $('#login form').submit(function(){
    let formName = $('#form-name').val();

    localStorage.setItem('forName', form_name);
  });
  
  var for_name = localStorage.getItem('form_name');
});
