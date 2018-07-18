const NUM_PICTURES = 262;
const NUM_CATEGORIES = 4;

const USER_NAME = "Nick";
const DINGUS_NAME = "Sam";

document.images['RandomImg'].src = 'images/image_' + Math.floor(NUM_PICTURES * Math.random()) + '.jpg';

var phrases = [
  ['Sup, dude.', ''],
  ['Good to see', 'you again!'],
  ['Welcome back.', ''],
  ['Welcome back.', ''],
  ['Welcome back.', ''],
  ['How\'s it going,', USER_NAME + '?'],
  ['How\'s it going,', USER_NAME + '?'],
  ['Hello again,', USER_NAME + '!'],
  ['Hello again,', USER_NAME + '!'],
  ['Hello again,', USER_NAME + '!'],
  ['Hello again,', USER_NAME + '!'],
  ['Yo, my guy.', ''],
  ['Uh oh, is ' + DINGUS_NAME, ' watching...?'],
  ['Hi, ' + USER_NAME + '!', ''],
  ['Hi, ' + USER_NAME + '!', '']
];

function slideIn(selector, delay) {
  setTimeout((function() {
    selector.css('visibility','visible').hide().fadeIn(1000).animate({
      'left': '0px'
    }, {
      duration: 1000,
      queue: false
    });
  }), delay)
}

function slideIn2(selector, delay) {
  setTimeout((function() {
    selector.css('visibility','visible').hide().fadeIn(1000).animate({
      'right': '50px'
    }, {
      duration: 750,
      queue: false
    });
  }), delay);
}

function slideIn3(selector, delay) {
  setTimeout((function() {
    selector.css('visibility','visible').hide().fadeIn(1000).animate({
      'right': '0px'
    }, {
      duration: 750,
      queue: false
    });
  }), delay);
}

function propogate(table, x, y, delay) {
  var right = get(table, x + 1, y);
  var down = get(table, x, y + 1);
  slideIn(get(table, x, y), delay);
  if (right.length !== 0 && get(table, x + 1, y-1).length === 0) propogate(table, x + 1, y, delay+200);
  if (down.length !== 0) propogate(table, x, y + 1, delay+200);
}

$(function() {
  var headers = $('.container').children('h1');
  var welcome1 = $('#welcome1');
  var welcome2 = $('#welcome2');
  var phrase = phrases[Math.floor(Math.random() * phrases.length)]
  $('#begin')[0].innerHTML = phrase[0];
  $('#end')[0].innerHTML = phrase[1];
  slideIn2(welcome1, 0);
  slideIn($(headers[0]), 0);
  propogate(0, 0, 0, 0);
  slideIn3(welcome2, 100);
  slideIn($(headers[1]), 150);
  propogate(1, 0, 0, 200);
  slideIn($(headers[2]), 350);
  propogate(2, 0, 0, 400);
  slideIn($(headers[3]), 550);
  propogate(3, 0, 0, 600);
});













































function get(table, x, y) {
  return $($($($('table')[table]).children().children()[y]).find("div.cell")[x]);
}
