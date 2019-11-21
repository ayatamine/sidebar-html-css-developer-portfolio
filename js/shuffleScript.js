var Shuffle = window.Shuffle;
var element = document.querySelector('.my-shuffle-container');
var sizer = element.querySelector('.my-sizer-element');

var shuffleInstance = new Shuffle(element, {
  itemSelector: '.picture-item',
  sizer: sizer // could also be a selector: '.my-sizer-element'
});
// shuffleInstance.filter('animal');
$("#all").on("click", function(){
   shuffleInstance.filter();
});
$("#design").on("click", function(){
   shuffleInstance.filter('design');
});
$("#development").on("click", function(){
   shuffleInstance.filter('development');
});
$("#freelance").on("click", function(){
   shuffleInstance.filter('freelance');
});