
//ADICIONE SEUS LINKS DO FIREBASE
const firebaseConfig = { 
  apiKey: "AIzaSyDSPWgJj9H_nakEN4qav8irjgAb2lpG2jo",
  authDomain: "teste-da-aula-bd91f.firebaseapp.com", 
  databaseURL: "https://teste-da-aula-bd91f-default-rtdb.firebaseio.com",
  projectId: "teste-da-aula-bd91f", storageBucket: "teste-da-aula-bd91f.appspot.com",
  messagingSenderId: "361156814947", appId: "1:361156814947:web:62c38c931b49e47266b056" }; 
     
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da sala: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
