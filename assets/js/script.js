$( function() {

  $('#back-to-home').click( function() {
    console.log("hello");
    $('.bs-grid-item img').removeClass("zoom-in");
    $('.bs-grid-item img').addClass("fade-out");
    $('.bs-grid-item').fadeOut();
    $('.back-to-home-text').addClass('')
  })

  $('#load-images').click( function() {
    $('.bs-grid-item img').removeClass("fade-out");
    $('.back').addClass("back-fade-in");
    var effect = 'animate zoom-in';
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

(function() {
  $(".back").hover(function(){
    $(this).toggleClass("anim");
  })
})();

show_text();
$('#load-images').delay(3140).fadeIn("100")
