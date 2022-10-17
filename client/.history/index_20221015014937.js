function fetchData() {
  fetch("http://localhost:3000/vehicles")
    .then((resp) => resp.json())
    .then((data) => renderQuotes(data));
}
// console.log(data);
function renderQuotes(data) {
  for (const q of data) {
    //Find the container where we attach everything to
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
    // p.innerHTML = q.user.username;
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
      const url = `http://localhost:3000/api/vehicles/${q.id}`;
      const reqObj = { method: "DELETE" };
      fetch(url, reqObj).then(quoteLi.remove());
    }
  }
}
//Call the function that will automatically run renderQuote() also

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

// function signIn() {
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;
//   // firebase code
//   // firebase.auth().signInWithEmailAndPassword(email, password)
//   axios
//     .post("http://localhost:3000/api/login", {
//       password: password,
//       username: username,
//       // phone: phone,
//       // licence_no: licence_no,
//       // address: address,
//     })
//     .then((result) => {
//     //   let res = result.data;
//     //   localStorage.setItem("user_id", res.user_id);
//       window.location = "dashboard.html";

//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error.code);
//       console.log(error.message);
//     });
// }
