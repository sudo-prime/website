const NUM_PICTURES = 262;  // The number of pictures in the images folder.
const USER_NAME = "Nick";  // The name you want to display. Most likely yours!

document.images['RandomImg'].src = 'images/image_' + Math.floor(NUM_PICTURES * Math.random()) + '.jpg';

// Contains phrases in first, last pairs. Both must be specified.
// Index 0 corresponds to the top line of text, and index 1 is the bottom.
// If index 1 is an empty string, the bottom line won't be displayed. (good for short phrases)
var phrases = [
  ['Sup, dude.', ''],
  ['Good to see', 'you again!'],
  ['Good to see', 'you again!'],
  ['Good to see', 'you again!'],
  ['Good to see', 'you again!'],
  ['Welcome back.', ''],
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
  ['Yo, my guy.', ''],
  ['Hi, ' + USER_NAME + '!', ''],
  ['Hi, ' + USER_NAME + '!', ''],
  ['Hi, ' + USER_NAME + '!', ''],
  ['Hi, ' + USER_NAME + '!', '']
];

// Function for grabbing the specific div.cell element (that needs to be animated, in this case)
// in a given table, at index x, y (from the top left).
function get(table, x, y) {
  /*
    This requires some explaining.
    The following line is an insane jQuery I threw together that somehow works, as follows.
    1. Grab every table element.
    2. Grab the one you want, at the specified index.
    3. Doing so makes it no longer a navigtor, so we wrap the result in one to pick up where we left off.
    4. Call .children() on it twice, to obtain first the tbody, then all the <tr>s.
    5. Select the row you want, at given index.
    6. Repeat step 3.
    7. Find all the div.cell elements in the row.
    8. Repeat step 2.
    9. Repeat step 3.
    Tadaa! You now have the div.cell element you wanted.

    But at what cost...?
    */
  return $($($($('table')[table]).children().children()[y]).find("div.cell")[x]);
}

// Animates the element at the given selector, after a specified delay, and for specified duration.
// Optionally takes action object containing CSS to animate.
function slideIn(selector, delay, duration, action={'left':"0px"}, fadeDuration=1000) {
  // Start only after the delay has passed.
  setTimeout((function() {
    // Set the visibility to visible, and then hide it again for some reason.
    // It doesn't work unless you do this - don't ask me why.
    selector.css('visibility','visible').hide().fadeIn(fadeDuration).animate(
      action,
    {
      duration: duration,
      queue: false
    });
  }), delay)
}

// Recursive propogate function. Used to correctly animate divs in a grid,
// starting from the upper left and moving to the bottom right diagonally.
// Looks cool.
function propogate(table, x, y, delay) {
  // Grab the div to the right and below
  // (using that egregious get method that we all know and love)
  var right = get(table, x + 1, y);
  var down = get(table, x, y + 1);
  // Animate the div at the given x and y
  slideIn(get(table, x, y), delay, 1000);
  // As long as there is an element to the right and there is no element above it (to avoid animating twice),
  // animate it (rather, call propogate on it's coordinates)
  if (right.length !== 0 && get(table, x + 1, y-1).length === 0) propogate(table, x + 1, y, delay+200);
  // Do the same for the element below
  if (down.length !== 0) propogate(table, x, y + 1, delay+200);
}

// Main, I guess (is this how jQuery works?)
$(function() {
  var headers = $('.container').children('h1'); // The headers above the button tables (Popular, School, etc.)
  var welcome1 = $('#welcome1'); // The first welcome div
  var welcome2 = $('#welcome2'); // The second welcome div

  // Pick a phrase from the list of available phrases
  var phrase = phrases[Math.floor(Math.random() * phrases.length)
  ]
  $('#begin')[0].innerHTML = phrase[0]; // This is the top text of the first welcome div
  $('#end')[0].innerHTML = phrase[1]; // Same for the bottom text

  // Slide in the first welcome div, the first header, and the first table element at time 0
  slideIn(welcome1, 0, 750, {'right': '50px'});
  slideIn($(headers[0]), 0, 1000);
  propogate(0, 0, 0, 0);
  // Then, slide in the second welcome div at time 100
  slideIn(welcome2, 100, 750, {'right': '0px'});
  // And the second header at time 150
  slideIn($(headers[1]), 150, 1000);
  // Propogate table #2 at time 200
  propogate(1, 0, 0, 200);
  // etc.
  slideIn($(headers[2]), 350, 1000);
  propogate(2, 0, 0, 400);
  slideIn($(headers[3]), 550, 1000);
  propogate(3, 0, 0, 600);
});
