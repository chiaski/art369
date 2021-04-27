// GENERAL MESSAGES



// SHOP, ACTIONS, WORLD EVENTS

function buy(item, cost) {

  let log = "Bought ";

  switch (item) {
    case "rate":

      if (money >= cost) {
        rate -= 100;
        money -= cost;
        log += "more time..."
        break;
      } else {
        log = "Not enough seconds!";
      }

      break;


    case "ratedown":

      if (money >= cost) {
        rate += 1000;
        money -= cost;
        log += "more time..."
        break;
      } else {
        log = "Not enough seconds!";
      }

      break;



  }


  // reverse append so we can fadein the newest item
  $("<div class='_log'>" + log + "</div>").appendTo("#LOG").hide().fadeIn("slow");

}

function action(what, cost) {

  let log = "And then the timekeeper ";

  console.log(what);

  switch (what) {

    case "quell":

      if (money >= cost) {
        money -= cost;
        secs -= 500;
        log += " silenced time..."
        break;

      } else {
        log = "Not enough seconds!";
      }

      break;

    case "punish":

      if (money >= cost) {
        money -= cost;
        secs -= 1000000;
        log += " silenced time..."
        break;

      } else {
        log = "Not enough seconds!";
      }

      break;

  }

  // reverse append so we can fadein the newest item
  $("<div class='_log'>" + log + "</div>").appendTo("#LOG").hide().fadeIn("slow");

}


// WORLD EVENTS
