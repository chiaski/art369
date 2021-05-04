// firebase

var firebaseConfig = {
  apiKey: "AIzaSyCcq4zlHJJJuHP2lo0jrmjzksYihz150Tc",
  authDomain: "proximities-df813.firebaseapp.com",
  projectId: "proximities-df813",
  storageBucket: "proximities-df813.appspot.com",
  messagingSenderId: "184345690811",
  appId: "1:184345690811:web:bf9a1dbb976456c3539f9e",
 databaseURL:"https://proximities-df813-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var presence = database.ref('presence');

// closeness

var whereami = (window.location.href).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
var howami = 0;
console.log("Everything feels so, so close.");
console.log(whereami);


var items = document.querySelectorAll('p, a, h2, img, div');
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

    if (Math.floor(Math.random() * 101) > (Math.random() * count)) {

      // still too far 
      continue;
    }

    // farther if not closer

    let ranNum = Math.ceil(Math.random()) * count;


    if ($(items[i]).length) {

      //          console.log(items[i]);

      //          $(items[i]).text("FUCK");

      let currpos = $(items[i]).position();
      let randRotate = ((Math.random() - 0.5) * 1) * count;

      console.log(randRotate);
      
      if (currpos.top - ranNum < 0) {

        $(items[i]).css({
          top: Math.floor(Math.random() * currpos.top),
          position: 'absolute',
          transform: 'rotate(' + randRotate + 'deg)'
        });

      } else {

        $(items[i]).css({
          top: currpos.top - ranNum,
          transform: 'rotate(' + randRotate + 'deg)',
          position: 'absolute'
        });

      }

      $(r)[0].scrollIntoView();

    }

  }



}

  presence.get().then((snapshot) => {
    const data = snapshot.val();
    console.log(data[whereami]);
    let newdata = data[whereami] ? data[whereami] + 1 : 1;
    newdata = parseInt(newdata);

    let d = {};
    d[whereami] = newdata;
    
    
    presence.update(d);
    
    closeness(newdata);
  })
  


function closer(){


}
