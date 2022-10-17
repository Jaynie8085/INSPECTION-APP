    const fetchData=()=> {
      e
    fetch("http://localhost:3000/vehicles")
      .then((resp) => resp.json())
      .then((data) => renderQuotes(data));
  }
  function renderQuotes(data) {
    // fetchData();
    for (const q of data) {
      //Find the container where we at tach everything to
      const quoteUL = document.querySelector("#quote-list");
      //Create all necessary elements
      const quoteLi = document.createElement("li");
      const blockQuote = document.createElement("blockquote");
      const p = document.createElement("p");
      
      const footer = document.createElement("footer");
      const br = document.createElement("br");
      const hr = document.createElement("hr");
      //Create the dislikes button
      const dislikesBtn = document.createElement("button");

      //Add appropriate classes and ids. Grab data and insert if needed.
      quoteLi.className = "quote-card"; //for styling
      blockQuote.className = "blockquote"; //for styling
      p.className = "mb-0"; //for styling
      footer.className = "blockquote-footer"; //for styling
      quoteLi.dataset.id = q.id;
      //Grab data and insert it into created elements
      p.innerHTML = q.user.username;
      footer.innerHTML = q.model;
      //Append everything to main container
      blockQuote.append(p, footer, br, hr, dislikesBtn);
      quoteLi.append(blockQuote);
      quoteUL.append(quoteLi);
      //Attach all the necessary attributes to delete button
      dislikesBtn.innerHTML = "Delete";
      dislikesBtn.className = "btn-danger"; //for styling
      dislikesBtn.addEventListener("click", () => deleteQuote());
      function deleteQuote() {
        const url = `http://localhost:3000/vehicles/${q.id}`;
        const reqObj = { method: "DELETE" };
        fetch(url, reqObj).then(quoteLi.remove());
      }
    }
  }
  //Call the function that will automatically run renderQuote() also

function signIn() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  // firebase code
  // firebase.auth().signInWithEmailAndPassword(email, password)
  // axios
  // .post("https://inspectionsapp-rails.herokuapp.com/api/login", {
  axios
    .post("http://localhost:3000/api/login", {
      password: password,
      username: username,
      // phone: phone,
      // licence_no: licence_no,
      // address: address,
    })
    .then((result) => {
      let res = result.data;
      localStorage.setItem("user_id", res.user_id);
      window.location = "dashboard.html";

      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}

function signUp() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  const licence_no = document.getElementById("licence_no").value;
  const address = document.getElementById("address").value;
  axios
    // .post("https://inspectionsapp-rails.herokuapp.com/api/signup", {
    .post("http://localhost:3000/api/signup", {
      username: username,
      password: password,
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

function Booking(event) {
  // event.preventdefault();

  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const user_id = 7;
  // const btn = document.getElementById("submit-btn").value;

  axios
    // .post("https://inspectionsapp-rails.herokuapp.com/api/bookings", {
    .post("http://localhost:3000/bookings", {
      service: service,
      date: date,
      time: time,
      user_id: user_id,
    })
    .then((result) => {
      // Signed in
      alert(`Your Apointment is set. See you on ${date} @ ${time}`, 1000);

      // window.location.reload()
      // window.location = "dashboard.html";

      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}

function vehicles() {
  // event.preventdefault();

  const numberplate = document.getElementById("numberplate").value;
  const chasisnumber = document.getElementById("chasisnumber").value;
  const model = document.getElementById("model").value;
  const user_id = 1;
  // const btn = document.getElementById("submit-btn").value;

  axios
    .post("http://localhost:3000/vehicles", {
      numberplate: numberplate,
      chasisnumber: chasisnumber,
      model: model,
      user_id: user_id,
    })
    .then((result) => {
      // Signed in
      alert(
        `Conguratulations!! Your ${model} has been added to our database!`,
        1000
      );

      // window.location.reload()
      window.location = "dashboard.html";

      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}
