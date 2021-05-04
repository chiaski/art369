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
var p = database.ref('overwritten');

// closeness

var whereami = (window.location.href).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
console.log(whereami);

console.log("Nothing is new.");


var alltext = "";

var paragraphs = document.querySelectorAll('a, p, li');

  function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }



function overwrite(count) {

   var alltext = "";

      for (var i = paragraphs.length; i--;) {
        alltext += $(paragraphs[i]).text();
      }

      var shuffledtext = shuffle(alltext.split(""));

      shuffledtext = shuffledtext.join("");

      for (var i = paragraphs.length; i--;) {

        let ranNum = Math.floor(Math.random() * alltext.length) + 1;
        let ranNum2 =  Math.floor(Math.random() * count) + 1;
        
     
       let newstr = alltext.substr(ranNum, ranNum2);
        
      $(paragraphs[i]).text(newstr);
        
      }
  
  
}


  p.get().then((snapshot) => {
    const data = snapshot.val();
    let newdata = data[whereami] ? data[whereami] + 1 : 1;
    newdata = parseInt(newdata);

    let d = {};
    d[whereami] = newdata;
    
    
    p.update(d);
    
    overwrite(newdata);
  })
  
