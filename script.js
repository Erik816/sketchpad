$(document).ready(function(){

  var userInput = prompt("Select the number of boxes per side");
  var blockSize = (480 / userInput);
  var containerSize = (userInput * userInput);

  for (var i = 1; i <= containerSize; i++){
    $('#container').append('<div class="block"></ div>');
    $('.block').width(blockSize);
    $('.block').height(blockSize);
  };

  $('.block').hover(function(){
    $(this).css('background', 'yellow');
  }, function(){
    $(this).css('background', 'yellow');
  });

  $('button').click(function(){
    location.reload();
  });
});
