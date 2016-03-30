// $( function() {
//
//   var $container = $('.grid').masonry({
//     itemSelector: '.grid-item',
//     percentPosition: true,
//     columnWidth: 1,
//     isAnimated: true,
//   });
//
//   $('#load-images').click( function() {
//     var $items = getItems();
//     // hide by default
//     $items.hide();
//     // append to container
//     $container.append( $items );
//     $items.imagesLoaded().progress( function( imgLoad, image ) {
//       // get item
//       // image is imagesLoaded class, not <img>
//       // <img> is image.img
//       var $item = $( image.img ).parents('.grid-item');
//       // un-hide item
//       $item.show();
//       // masonry does its thing
//       $container.masonry( 'appended', $item );
//     });
//   });
//
// });

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
  var items =
  // '<div class="grid-item"><a href = "https://wiki-demo.herokuapp.com/" target="_blank"><div class="image-background"></div><div class = "port-text">Wiki Demo</div><img src="assets/img/portfolio/wikidemo.png" class="portfolio-image" alt=""></a></div>'+
  '<div class="grid-item"><a href = "https://www.jeffreyrudes.com/" target="_blank"><div class="image-background"></div><div class = "port-text">Jeffrey Rudes</div><img src="assets/img/portfolio/jeffreyrudes.png" class="portfolio-image jeffrey" alt=""></a></div>' +
  '<div class="grid-item"><a href = "https://www.carson-street.com/" target="_blank"><div class="image-background"></div><div class = "port-text">Carson Street</div><img src="assets/img/portfolio/carsonstreet.png" class="portfolio-image" alt=""></a></div>'+
  '<div class="grid-item"><a href = "https://centro39.com" target="_blank"><div class="image-background"></div><div class = "port-text">Centro39</div><img src="assets/img/portfolio/centro39.png"" class="portfolio-image" alt=""></a></div>'+

  '<div class="grid-item"><a href = "https://buzzclicker.herokuapp.com" target="_blank"><div class="image-background"></div><div class = "port-text">Buzz Clicker</div><img src="assets/img/portfolio/buzzclicker" class="portfolio-image" alt=""></a></div>'+
  '<div class="grid-item"><a href = "http://turnerniles.com/tictactoe" target="_blank"><div class="image-background"></div><div class = "port-text">Tic Tac Toe</div><img src="assets/img/portfolio/tictactoe.png" class="portfolio-image" alt=""></a></div>'+
  '<div class="grid-item"><a href = "https://cheapestongilt.herokuapp.com" target="_blank"><div class="image-background"></div><div class = "port-text">Cheapest On Gilt</div><img src="assets/img/portfolio/cheapestongilt.png" class="portfolio-image" alt=""></a></div>'+
  // '<div class="grid-item"><a href = "https://www.billyreid.com/" target="_blank"><div class="image-background"></div><div class = "port-text">Billy Reid</div><img src="http://assets.maui.nyc/system/works/grid_images/000/000/006/small/br-thumb-3faster.gif?1455044035" class="portfolio-image" alt=""></a></div>' +
  '<div class="grid-item"><a href = "http://onenewsstand.com/" target="_blank"><div class="image-background"></div><div class = "port-text">One News Stand</div><img src="assets/img/portfolio/onenewsstand.png" class="portfolio-image" alt=""></a></div>';
  // '<div class="grid-item"><a href = "http://www.deveauxnewyork.com/" target="_blank"><div class="image-background"></div><div class = "port-text">Deveaux New York</div><img src="http://assets.maui.nyc/system/works/grid_images/000/000/018/small/deveauxgif-460x352.gif?1455316977" class="portfolio-image" alt=""></a></div>'+


  return $( items );
}

$('#load-images').delay(3140).fadeIn("100")


var effect = 'animate flip';
var item_selector = '.bs-grid-item'
$('.images-grid').imagesLoaded().progress(function(instance, image) {
  // Add the effect.
  var $image = $(image.img)
      .addClass(effect);

  // Find and show the item.
  var $item = $image
      .parents(item_selector)
      .show();
});
