var db;

function conection(){
    firebase.initializeApp({
        apiKey: "AIzaSyCccO_9IONJrTZgW965CBjdBzBcTDqisdI",
        authDomain: "mbgp-2a4dd.firebaseapp.com",
        projectId: "mbgp-2a4dd",
      });
      
      db = firebase.firestore();  
      console.log("conexao banco",db);  
}

function readnews(){
    db.collection("noticias").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data().autor);
            console.log(doc.data().titulo);
            /*document.getElementById('titulo').innerHTML += doc.data().titulo;*/
            document.getElementById('noticias').innerHTML += '<article class="noticia col-1_2 col-1 noticia-grande">'+
                '<h1><a href="#">'+doc.data().titulo+'</a></h1>'+
                '<p>'+doc.data().texto+'</p>'+
                '<iframe width="560" height="315" src='+doc.data().video+' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>'+
                '</article>';            
        });
    });
}
function lastnews(){
    db.collection("antigas").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data().autor);
            console.log(doc.data().titulo);    
            document.getElementById('antigas').innerHTML += '<article class="noticia col-1_2 row1 noticia-pequena">'+
            '<h1><a href="#">'+doc.data().titulo+'</a></h1>'+
            '<p>'+doc.data().texto+'</p>'+
            '</article>)';
        });
    });
}

/*
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCccO_9IONJrTZgW965CBjdBzBcTDqisdI",
    authDomain: "mbgp-2a4dd.firebaseapp.com",
    projectId: "mbgp-2a4dd",
  });
  
  var db = firebase.firestore();
*/
