// GENERAL MESSAGES



// GLOBAL GAME VARIABLES
var game_values = {

}


var messages = [
  "When all the seconds are gone, time itself will end.",
  "Every "
]

// PROGRESSION



// GAME LOOP

// fix global value for rate and time
// money is per session
var money = 0;
var rate = 1000; // def 1 sec
var clicks = 1000; // determines game progression

var secs = seconds_since_epoch();

// global!

var _d = new Date();

function updateDate(seconds_since) {

  // Date construc works in ms
  _d = new Date(seconds_since * 1000);

  $("._date").text(_d.getMonth() + "/" + _d.getDate() + "/" + _d.getFullYear());

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
  //      console.log(secs);
  $("._secs").text(secs);
  $("._money").text(money);

  console.log("secs since: " + secs);
  updateDate(secs);

  c++;
  setTimeout(loop, rate);
}

setTimeout(loop, rate);

// BEGINNING
setTimeout(function () {
  $("<div class='_log'>" + "When all the seconds are gone, time itself will end." + "</div>").appendTo("#LOG").hide().fadeIn("slow")
}, 2000);


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
  console.log(data["ms"]);
  secs = parseInt(data["ms"]);
})



// SHOP, ACTIONS, WORLD EVENTS
// Play with real-world counter

function _log(what) {
  // reverse append so we can fadein the newest item

  $("<div class='_log'>" + what + "</div>").prependTo("._logtext").hide().fadeIn("slow");
}

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

  _log(log);
}

function action(what, cost) {

  let log = "And then the timekeeper ";

  console.log(what);

  switch (what) {

    case "take":
      log += "took time.";
      // the counter is in milliseconds.. so the timer is huge
      let r = Math.floor(Math.random() * 100000) + 1;

      secs -= r;
      money += r;

      break;

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

    case "capture":

      if (money >= cost) {

        ms.get().then((snapshot) => {

          // afect firebase
          ms.set({
            ms: secs
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
