$(document).ready(function() {
    //  $("#container").append('<div class=grid></div>');

  for (var rows = 0; rows < 100; rows++) {
    for (var columns = 0; columns < 100; columns++) {
      $("#container").append("<div class=grid></div>");
    };
  };
  $(".grid").width(640/100);
  $(".grid").height(640/100);

  $(".grid").mouseover(function() {
    $(this).css("background", "red");
  });
});
