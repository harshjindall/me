// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyCxYHbzASD1uKj1Dm_wb0MzvLTYYt3N--U",
  authDomain: "hxrshj7.firebaseapp.com",
  databaseURL: "https://hxrshj7-default-rtdb.firebaseio.com",
  projectId: "hxrshj7",
  storageBucket: "hxrshj7.appspot.com",
  messagingSenderId: "504741928398",
  appId: "1:504741928398:web:f89227ea639930311f5f9f",
    // measurementId: "G-G5RZWJXGRV"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('Subscribers');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');

  // Save message
  saveMessage(name, email);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
  });
}