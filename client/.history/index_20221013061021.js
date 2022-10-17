function signIn() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  // firebase code
  // firebase.auth().signInWithEmailAndPassword(email, password)
  axios
    .post("http://localhost:3000/api/login", {
      password: password,
      username: username,
      // phone: phone,
      // licence_no: licence_no,
      // address: address,
    })
    .then((result) => {
    //   let res = result.data;
    //   localStorage.setItem("user_id", res.user_id);
      window.location = "dashboard.html";

      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}
