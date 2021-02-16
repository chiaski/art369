
  var steps = 0;


$("iframe").load(function () {


  $(this).contents().on("mousedown, mouseup, click", function () {
    steps++;
    $("span#_steps").text(steps);
  });
});


var time=500;
var counter=setInterval(timer, 2000); //1000 will  run it every 1 second

function timer()
{
  time -= 1;
  if (time <= 0)
  {
     clearInterval(counter);
  }

  $("#_time").text(time);
}