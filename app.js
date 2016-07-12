$(document).ready(
  $('.color-palette .btn').on('click', function(e) {
    var color = e.target.outerText;
    var colorString = `background-color:rgb(${color})`;
    $('.preview-tile').attr('style', colorString);
  })
)
