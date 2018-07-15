const NUM_PICTURES = 262;
const NUM_CATEGORIES = 4;

document.images['RandomImg'].src = 'images/image_' + Math.floor(NUM_PICTURES * Math.random()) + '.jpg';


// $("div.cell").map(function() {
//   return
// })

function slideIn(selector, delay) {
  selector.css('visibility','visible').hide().delay(delay).fadeIn(1000).animate({
    'left': '0px'
  }, {
    duration: 1000,
    queue: false
  });
}

function get(table, x, y) {
  return $($($($('table')[table]).children().children()[y]).find("div.cell")[x]);
}

function propogate(table, x, y, delay) {
  slideIn(get(table, x, y), delay)
  right = get(table, x + 1, y)
  down = get(table, x, y + 1)
  if (right.length !== 0) propogate(table, x + 1, y, delay+200);
  if (down.length !== 0) propogate(table, x, y + 1, delay+200);
}

$(function() {
  var headers = $('.container').children('h1')
  slideIn($(headers[0]), 0)
  propogate(0, 0, 0, 0);
  slideIn($(headers[1]), 200)
  propogate(1, 0, 0, 200);
  slideIn($(headers[2]), 400)
  propogate(2, 0, 0, 400);
  slideIn($(headers[3]), 600)
  propogate(3, 0, 0, 600);
});
