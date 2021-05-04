// GENERAL MESSAGES



// PROGRESSION
// arguments are unlock requirements

function progression(clicks, truemoney) {

  if (!clicks && !truemoney) {
    return;
  }
  
  if(secs < 1000){
      rate = 999999999;
      clearTimeout(loop);
      _log("Time is over.");
      $("#end").fadeIn(20000).css("display", "flex");
      $(".vfx-color").css("background", "#000000");
    return;
  }

  switch (truemoney) {

    case 3:
      _log("When all the seconds are gone, time itself will end.")
      break;

    case 10:
      _log("Each second you watch on the clock is now your own.");
      break;


    case 30:
      _log("If you need more time, why don't you try and take some?");
      $("button[data-unlock='1']").fadeIn("slow");
      break;

    case 240:
      _log("Eventually, you learn to punish time itself.");
      $("button[data-unlock='2']").fadeIn("slow");
      $(".vfx-color").css("background", "#f5f5f5");
      break;
      
    // SPEED UP TIME
      
    case 100: 
      _log("You learn how to rush time, slowly...");
      $("button[data-unlock='4a']").fadeIn("slow");
      break;
    
    case 105: 
      _log("Such that every tick and bit comes a little sooner...");
      break;
      
    case 110: 
      _log("This action can be a repeated one.");
      $(".vfx-color").css("background", "hsl(0, 0%, 92%)");
      break;
      
      
    // SLOW DOWN TIME
      
    case 500: 
      _log("You also learn how to pause it...");
      $("button[data-unlock='4b']").fadeIn("slow");
      break;
    
    case 505: 
      _log("Such that every tick is silenced...");
      break;
      
    case 510: 
      _log("This action can be a repeated one.");
      $(".vfx-color").css("background", "hsl(0, 0%, 88%)");
      break;
      
      
    // CAPTURE TIME

    case 600: 
      _log("Turning over the rickety clock, you discover an ancient dial.")
      break;
    
    case 610:
      _log("Suddenly, you discover an affinity for progression.")
      $("button[data-unlock='5']").fadeIn("slow");
      break;
      
    case 630:
      _log("The constant moving forward of all things.");
      $(".vfx-color").css("background", "hsl(0, 0%, 80%)");
      break;

    case 650:
      _log("Perhaps... this is a shared experience?")
      break;
      
    // ---
      
      
    // WAIT LONGER

    case 1000: 
      _log("You align yourself with the of the world.");
      $("button[data-unlock='7']").fadeIn("slow");
      break;
      
      
    case 1020: 
      $(".vfx-color").css("background", "hsl(0, 0%, 78%)");
      break;
      
    
    case 1500:
      _log("The timekeeper learns to let time pass.");
      break;
      
    case 1520:
      _log("You wait...");
      $(".vfx-color").css("background", "hsl(0, 0%, 65%)");
      $("button[data-unlock='8']").fadeIn("slow");
      break;
      
      
      
    // CAPTURE RATE
      
    
    case 1800:
      _log("You become incredibly familiar with the ancient device, transforming movement itself.");
      $(".vfx-color").css("background", "hsl(0, 0%, 45%)");
      break;
      
    
    case 1830:
      _log("You, the timekeeper, are the equilibrium.");
      $("button[data-unlock='6']").fadeIn("slow");
      break;
      
    
    case 10000:
      $(".vfx-color").css("background", "hsl(0, 0%, 40%)");
      break;
      
    case 13000:
      $(".vfx-color").css("background", "hsl(0, 0%, 35%)");
      break;
      
      
    case 14000:
      $(".vfx-color").css("background", "hsl(0, 0%, 30%)");
      break;
    
    case 15000:
      $(".vfx-color").css("background", "hsl(0, 0%, 25%)");
      break;
      
      
    case 16000:
      $(".vfx-color").css("background", "hsl(0, 0%, 20%)");
      break;
      
    case 17000:
      $(".vfx-color").css("background", "hsl(0, 0%, 15%)");
      break;
      
    case 18000:
      $(".vfx-color").css("background", "hsl(0, 0%, 10%)");
      break;
      
    case 20000:
      $(".vfx-color").css("background", "hsl(0, 0%, 5%)");
      break;
  }

}

// GAME LOOP

// fix global value for rate and time
// money is per session

var money = 0; // your seconds
var _truemoney = 0; // time that has passed, never taken away

var rate = 1000; // default: 1000 / 1 sec
var _clicks = 0; // determines game progression

var secs = seconds_since_epoch();

// global!

var _d = new Date();

function updateDate(seconds_since, div) {

  // Date construc works in ms
  _d = new Date(seconds_since * 1000);

  $(div).text(_d.getMonth() + 1 + "/" + _d.getDate() + "/" + _d.getFullYear());

}

function seconds_since_epoch() {
  _d = new Date();
  return Math.floor(_d / 1000);
}

var c = 0;

// this is the main game loop.

var loop = function () {
  secs++;
  money++;
  _truemoney++;

  //      console.log(secs);

  //  console.log("secs since: " + secs);
  updateDate(secs, '._date');
  updateDate(money, '._yourtime');

  $("._secs").text(secs);
  $("._money").text(money);

  progression(_clicks, _truemoney);

  c++;
  setTimeout(loop, rate);
}

setTimeout(loop, rate);

console.log("HACK: Type 'rate = 100' to speed up the timer.");

// FIREBASE

var firebaseConfig = {
  apiKey: "AIzaSyCcq4zlHJJJuHP2lo0jrmjzksYihz150Tc",
  authDomain: "proximities-df813.firebaseapp.com",
  projectId: "proximities-df813",
  storageBucket: "proximities-df813.appspot.com",
  messagingSenderId: "184345690811",
  appId: "1:184345690811:web:bf9a1dbb976456c3539f9e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// on start, load base time

var database = firebase.database();
var ms = database.ref('clock');

// load global clock
ms.get().then((snapshot) => {

  const data = snapshot.val();
  
  secs = parseInt(data["ms"]);
  rate = parseInt(data["rate"]);
  
})



// SHOP, ACTIONS, WORLD EVENTS
// Play with real-world counter

function _log(what, timeout) {

  // reverse append so we can fadein the newest item

  if (timeout) {

    setTimeout(function () {
      $("<div class='_log'>" + what + "</div>").prependTo("._logtext").hide().fadeIn("slow")
    }, timeout);

  } else {
    $("<div class='_log'>" + what + "</div>").prependTo("._logtext").hide().fadeIn("slow");
  }


}

function buy(item, cost) {

  let log = "Bought ";

  switch (item) {
    case "rateup":
      
      if(rate <= 50){
        log = "The clock is stilled. You cannot cahnge it further."
        break;
      }

      if (money >= cost) {
        rate -= 50; // speed up
        money -= cost;
        log += "more time..."
        break;
      } else {
        log = "Not enough seconds...";
      }

      break;


    case "ratedown":

      if (money >= cost) {
        rate += 50; // slow down
        money -= cost;
        log += "more time...?"
        break;
      } else {
        log = "Not enough seconds...";
      }

      break;


  }

  _log(log);
}

function action(what, cost) {

  let log = "And then the timekeeper ";

  console.log(what);

  let max = 604800; // 1 week
  let min = 86400; // 1 day
  let r = Math.floor(Math.random() * (max - min) + min);
  
  
  switch (what) {

    case "take":
      log += "took time.";
      // the counter is in milliseconds.. so the timer is huge

      max = 604800; // 1 week
      min = 86400; // 1 day

      r = Math.floor(Math.random() * (max - min) + min);

      secs -= r;
      money += r;

      break;
      
    case "taketwo":
      log += "waited.";
      // the counter is in milliseconds.. so the timer is huge

      max = 31556952; // 1 week
      min = 604800; // 1 week

      r = Math.floor(Math.random() * (max - min) + min);

      secs -= r;
      money += r;

      break;
      
    case "correct":
      
      if (money >= cost) {
        money -= cost;

        ms.get().then((snapshot) => {

          const data = snapshot.val();

          secs = parseInt(data["ms"]);
          rate = parseInt(data["rate"]);

        })

        log = "You adjust the clock, fixing it up.";
        break;

      } else {
        log = "Not enough seconds!";
      }

      break;

      
      
      break;


    case "punish":

      if (money >= cost) {
        money -= cost;
        secs -= 3888000; // 45 days
        log += " silenced time..."
        break;

      } else {
        log = "Not enough seconds...";
      }

      break;
      
    case "quell":

      if (money >= cost) {
        money -= (cost / 2);
        secs -= (3888000 * 2); // 90 days
        log = "Time bends.";
        break;

      } else {
        log = "Not enough seconds!";
      }

      break;
      

    case "capture":

      if (money >= cost) {

        ms.get().then((snapshot) => {

          // afect firebase
          ms.update({
            ms: secs
          });
        })


        log += "captured time, for all others."
      } else {
        log = "Try to take more time."
      }

      break;
      
      
    case "captureR":

      if (money >= cost) {

        ms.get().then((snapshot) => {

          // afect firebase
          ms.update({
            rate: rate
          });
        })


        log += "captured time, for all others."
      } else {
        log = "Try to take more time."
      }

      break;




  }

  _log(log);
}




// WORLD EVENTS
