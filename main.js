// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyChP-WmQAI4_7OUiTj2myPZcv-qOTw4Vas",
  authDomain: "hjsnewsletter.firebaseapp.com",
  databaseURL: "https://hjsnewsletter-default-rtdb.firebaseio.com",
  projectId: "hjsnewsletter",
  storageBucket: "hjsnewsletter.appspot.com",
  messagingSenderId: "1093409587493",
  appId: "1:1093409587493:web:8fd09ff0ac086f48435acc",
  // measurementId: "G-4GT8HXK4GL"    

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