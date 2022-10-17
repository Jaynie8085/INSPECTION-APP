// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDF9DKF44fhzBzk5fZB5Mk4_21q4Ey2kxQ",
  authDomain: "inspection-e4bf7.firebaseapp.com",
  projectId: "inspection-e4bf7",
  storageBucket: "inspection-e4bf7.appspot.com",
  messagingSenderId: "94545597565",
  appId: "1:94545597565:web:9e1d12415061541a4ecd14",
  measurementId: "G-P207FELWW2",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  // firebase code
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      document.write("You are Signed Up");
      console.log(result);
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ..
    });
    signUpRails();
};

// Sign In function
const signIn = () => {
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      document.write("You are Signed In");
      // window.location = "form.html";
      window.location = "dashboard.html";

      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
    
};
function signUpRails() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  const phone = document.getElementById("phone").value;
  const licence_no = document.getElementById("licence_no").value;
  const address = document.getElementById("address").value;
  axios
    // .post("https://inspectionsapp-rails.herokuapp.com/api/signup", {
    .post("http://localhost:3000/users", {
      username: username,

      phone: phone,
      licence_no: licence_no,
      address: address,
      email: email,
    })
    .then((result) => {
      // Signed in
      // document.write("You are Signed Up");
      // window.location = "form.html";
      window.location = "dashboard.html";

      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}