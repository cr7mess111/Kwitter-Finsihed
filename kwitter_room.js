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
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML ="welcome " + user_name + "!"; 

//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_name);
      row = "<div class = 'room name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location = "kwitter.html"
}