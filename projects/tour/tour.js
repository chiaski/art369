
  var steps = 0;


$("iframe").load(function () {

  $(this).contents().on("mousedown, mouseup, click", function () {
    steps++;
    $("span#_steps").text(steps);
  });
});


$(".footer-navigate a").click(function(){
  steps++;
    $("span#_steps").text(steps);
});


var time=500;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second


function timer()
{
  time -= 1;
  if (time <= 0)
  {
     clearInterval(counter);
    
    // time's up
    window.location = 'end.html';
    
  }

  $("#_time").text(time);
}