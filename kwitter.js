var firebaseConfig = {
    apiKey: "AIzaSyCjf6BOh7zvGehhf3rWHqSQsuqsMJP1grE",
    authDomain: "kwitter-2-ce2a0.firebaseapp.com",
    databaseURL: "https://kwitter-2-ce2a0-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-ce2a0",
    storageBucket: "kwitter-2-ce2a0.appspot.com",
    messagingSenderId: "629473673986",
    appId: "1:629473673986:web:959fa72ae0787504cbf81b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);






  function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}