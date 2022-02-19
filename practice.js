var firebaseConfig = {
    apiKey: "AIzaSyDw5ih8YtTfglrukcUagug6ua4ngYsGxtE",
    authDomain: "kwitter-dee01.firebaseapp.com",
    databaseURL: "https://kwitter-dee01-default-rtdb.firebaseio.com",
    projectId: "kwitter-dee01",
    storageBucket: "kwitter-dee01.appspot.com",
    messagingSenderId: "576509435176",
    appId: "1:576509435176:web:d6f5c94309c6865d10c41d"
  };
  firebase.initializeApp(firebaseConfig) ;
function adduser(){
    username=document.getElementById("Username").value ;
    localStorage.setItem("username",username);
    firebase.database().ref("/").child(username).update ({
    purpose:"adding username"
    });
}