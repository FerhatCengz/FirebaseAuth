$(document).ready(function () {
  var config = {
    apiKey: "AIzaSyAc02M_2Ofx0NJVYUo6lCOeojIuOrGPi_s",
    authDomain: "fir-todolist-8d567.firebaseapp.com",
    projectId: "fir-todolist-8d567",
    storageBucket: "fir-todolist-8d567.appspot.com",
    messagingSenderId: "778315616968",
    appId: "1:778315616968:web:942ea7fdccbd15191d0bfd",
  };

  firebase.initializeApp(config);

  $("#registerBtn").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((e) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            window.location.href = "index.html";
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
});
