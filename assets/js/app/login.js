$(document).ready(function () {
  var config = {
    apiKey: "AIzaSyAc02M_2Ofx0NJVYUo6lCOeojIuOrGPi_s",
    authDomain: "fir-todolist-8d567.firebaseapp.com",
    databaseURL: "https://fir-todolist-8d567-default-rtdb.firebaseio.com",
    projectId: "fir-todolist-8d567",
    storageBucket: "fir-todolist-8d567.appspot.com",
    messagingSenderId: "778315616968",
    appId: "1:778315616968:web:942ea7fdccbd15191d0bfd",
  };
  firebase.initializeApp(config);

  $("#loginBtn").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();

    firebase
      .auth()
      //Auth eder.
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "index.html";
      })
      .catch((data) => {
        alert("KULLANICI ADI VE YA ŞİFRE HATALI !");
      });
  });
});

$("#btnGoogle").click(function (e) {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // code which runs on success
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      alert(errorCode);

      var errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
});

$("#btnFacebook").click(function (e) {
  const provider = new firebase.auth.FacebookAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // code which runs on success
      console.log("result =>", result);
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      alert(errorCode);

      var errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
});
