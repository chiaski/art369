javascript:(function(){
  
var paragraphs = document.querySelectorAll("p");
var iframes = document.querySelectorAll("iframe");
  var times = 1;
  
function disappear(x, repeats){
    let opac = ((100 - (repeats * 4.5)) / 100);
    paragraphs[x].style.opacity = opac;
}
  
  for (var x = 0; x < paragraphs.length; x++) {
      paragraphs[x].style.transition = "all 20s";
  }
  
  for (var x = 0; x < paragraphs.length; x++) {
    for(var repeats = 1; repeats < 30; repeats++){
      setTimeout(disappear(x, repeats),1000);
      times++;
    }
  } 

  
  setTimeout(function(){
var imagess = document.querySelectorAll("img");
  for (var x = 0; x < imagess.length; x++) {
    console.log("...");
      imagess[x].style.transition = "all 20s";
      imagess[x].style.filter = "grayscale(100%)";
  }
  }, 5000);
  
  setTimeout(function(){
    doument.body.style.transition = "all 30s";
    doument.body.style.filter="grayscale(100%)";
  }, 10000);
  
  
  setTimeout(function(){
    for (var x = 0; x < paragraphs.length; x++) {
      paragraphs[x].remove();
    }
  }, 10000);
  
  
  setTimeout(function(){
    for (var x = 0; x < paragraphs.length; x++) {
      paragraphs[x].remove();
    }
    
    for (var x = 0; x < iframes.length; x++) {
      iframes[x].remove();
    }
    
  }, 10000);


  setTimeout(function(){
var links = document.getElementsByTagName("a");
for (var x = 0; x < links.length; x++) {
var time =Math.floor(Math.random() * 30) + 1;
    links[x].style.transition = "all " + time + "s";
      links[x].style.filter = "grayscale(100%)";
}
  }, 10000);
  
    
  })();


//  setInterval(disappear, 1000);

//  
//var paragraphs = document.querySelectorAll("p");
//for (var x = 0; x < paragraphs.length; x++) {
//  paragraphs[x].style.color = "blue";
//}
