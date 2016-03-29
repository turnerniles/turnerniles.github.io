$( function() {

  var $container = $('#container').masonry({
    itemSelector: '.item',
    columnWidth: 200
  });

  $('#load-images').click( function() {
    var $items = getItems();
    // hide by default
    $items.hide();
    // append to container
    $container.delay(1900).append( $items );
    $items.imagesLoaded().progress( function( imgLoad, image ) {
      // get item
      // image is imagesLoaded class, not <img>
      // <img> is image.img
      var $item = $( image.img ).parents('.item');
      // un-hide item
      $item.show();
      // masonry does its thing
      $container.masonry( 'appended', $item );
    });
  });

});

split = function() {
  var i, text, words;
  words = $('.typed-text').text().split('');
  for (i in words) {
    i = i;
    words[i] = '<span>' + words[i] + '</span>';
  }
  text = words.join('');
  $('.typed-text').html(text);
};

show_text = function() {
  var count, end_time, in_speed, length;
  split();
  in_speed = 10;
  count = 0;
  length = $('.current_step p span').length;
  end_time = length * in_speed + 200;
  $('.typed-text span').each(function() {
    $(this).delay(1900 + in_speed * count).animate({
      opacity: '1'
    }, 200);
    count++;
  });
};

show_text();

function getItems() {
  var items = '<div class="item"><img src="assets/img/portfolio/cheapestongilt.png" class="img-rounded portfolio-image" alt=""> </div>'+
              '<div class="item"><img src="assets/img/portfolio/jeffreyrudes.png" class="img-rounded portfolio-image jeffrey" alt=""></div>' +
              '<div class="item"><img src="assets/img/portfolio/billyreid.png" class="img-rounded portfolio-image" alt=""></div>' +
              '<div class="item"><img src="assets/img/portfolio/onenewsstand.png" class="img-rounded portfolio-image" alt=""></div>'+
              '<div class="item"><img src="assets/img/portfolio/wikidemo.png" class="img-rounded portfolio-image" alt=""></div>'+
              '<div class="item"><img src="assets/img/portfolio/tictactoe.png" class="img-rounded portfolio-image" alt=""></div>'+
              '<div class="item"><img src="assets/img/portfolio/cheapestongilt.png" class="img-rounded portfolio-image" alt=""> </div>'+
              '<div class="item"><img src="assets/img/portfolio/onenewsstand.png" class="img-rounded portfolio-image" alt=""></div>'+
              '<div class="item"><img src="assets/img/portfolio/wikidemo.png" class="img-rounded portfolio-image" alt=""></div>'+
              '<div class="item"><img src="assets/img/portfolio/tictactoe.png" class="img-rounded portfolio-image" alt=""></div>'+
              '<div class="item"><img src="assets/img/portfolio/cheapestongilt.png" class="img-rounded portfolio-image" alt=""> </div>'+
              '<div class="item"><img src="assets/img/portfolio/onenewsstand.png" class="img-rounded portfolio-image" alt=""></div>'+
              '<div class="item"><img src="assets/img/portfolio/wikidemo.png" class="img-rounded portfolio-image" alt=""></div>'+
              '<div class="item"><img src="assets/img/portfolio/tictactoe.png" class="img-rounded portfolio-image" alt=""></div>';
  return $( items );
}

$('#load-images').delay(3540).fadeIn()
