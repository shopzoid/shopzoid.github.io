// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCORThhpBzHN6_4Z1U-4kI__A6xf5fRuzA",
  authDomain: "shopzoid-app.firebaseapp.com",
  databaseURL: "https://shopzoid-app-default-rtdb.firebaseio.com",
  projectId: "shopzoid-app",
  storageBucket: "shopzoid-app.appspot.com",
  messagingSenderId: "124724344551",
  appId: "1:124724344551:web:7be967100ee7a075469442",
  measurementId: "G-XFNSKZGLNM"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Daftar ShopZoid From Website');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e) {
    e.preventDefault();
    alert("Setelah Daftar Silahkan Download Aplikasi Untuk Melanjutkan")
    setTimeout(function(){window.location.href = "Shopzoid-0_4_debug.apk" ;}, 000);
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var instagram = getInputVal('instagram');
    var kategori = getInputVal('kategori');
  
    // Save message
    saveMessage(name, email, phone, instagram, kategori);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, phone, instagram, kategori) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      phone: phone,
      instagram: instagram,
      kategori: kategori,
    });
  }