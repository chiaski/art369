
  var steps = 0;


$("iframe").load(function () {


  $(this).contents().on("mousedown, mouseup, click", function () {
    steps++;
    $("span#_steps").text(steps);
  });
});
