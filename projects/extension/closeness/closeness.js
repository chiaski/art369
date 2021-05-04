console.log("Everything feels so, so close.");
console.log(window.location.href);


  var items = document.querySelectorAll('p, a, h2, img'); 
  console.log(items);
  
function closeness(count) {

  // count is a multiplier
  // to how many people have been here
  // before.
  
  // ----
  
  // pick a random element
  
  let r = $("body").eq(Math.floor(Math.random() * $("body").length));
  

      for (var i = items.length; i--;) {
        
        // should we modify this at all?
        
        if(Math.floor(Math.random() * 101) > (Math.random() * count)){
          
          // still too far 
          continue;
        }
        
        // farther if not closer
        
        let ranNum = Math.ceil(Math.random()) * count;
        
        
        if( $(items[i]).length ){
          
//          console.log(items[i]);
          
//          $(items[i]).text("FUCK");
          
        let currpos = $(items[i]).position();
//          console.log(currpos.top + "vs" + newpos.top);
          
        if(currpos.top - ranNum < 0){
          
        $(items[i]).css({
          top: Math.floor(Math.random() * currpos.top),
          position: 'absolute'
        });
          
        } else{
          
          
        $(items[i]).css({
          top: currpos.top - ranNum,
          position: 'absolute'
        });
          
        }

        $(r)[0].scrollIntoView();
          
        }
        
      }

  

}

closeness(0); // test