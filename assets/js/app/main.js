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
  var userID = "";

  //sistemde loginmisin ?

  firebase.auth().onAuthStateChanged((user) => {
    console.log("user => ", user);
    if (user) {
      //Çıkış yap :
      logOut();
      const description = $("#description").val();
      //Kullanıcnın idisini alır
      userID = user.uid;

      // firebase.database().ref().child("users").child(userID).child("todos").push("ferhat");
      firebase.database().ref(userID).push(userID);
    } else {
      window.location.href = "login.html";
    }
  });
});

const logOut = () => {
  $("#logout").click(function (e) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.href = "index.html";
      });
  });
};
