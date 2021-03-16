var steps = 0;


$("iframe").load(function () {

  $(this).contents().on("mousedown, mouseup, click", function () {
    steps++;
    $("span#_steps").text(steps);
  });
});


$(".footer-navigate a").click(function () {
  steps++;
  $("span#_steps").text(steps);
});

var lie = Math.floor(1000 + Math.random() * 9000);

var time = 50;
var counter = setInterval(timer, 1200); //1000 will  run it every 1 second


function timer() {
  time -= 1;
  if (time <= 0) {
    clearInterval(counter);
    // time's up
    window.location = 'end.html';
  } else if(time <= 50){
    
    $("#_time").text(time);
  } else{
    
lie = Math.floor(1000 + Math.random() * 9000);

  $("#_time").text(lie);
  }
  
}
