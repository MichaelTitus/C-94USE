
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAfCCO-DiB4_yu0vPhMhK1z-uVz_kemGL8",
    authDomain: "kwitter-a3390.firebaseapp.com",
    databaseURL: "https://kwitter-a3390-default-rtdb.firebaseio.com",
    projectId: "kwitter-a3390",
    storageBucket: "kwitter-a3390.appspot.com",
    messagingSenderId: "1036707766721",
    appId: "1:1036707766721:web:1f812f75eceda253aacf40"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function adduser() {
    username = document.getElementById("userName").value;
    firebase.database().ref("/").child(username).update({
        Practice_Activity: "Value",
        Practice_Activity_KEY:"Chat"
    })
}
