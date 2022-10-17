document.addEventListener("DOMContentLoaded", () => {
  function fetchData() {
    fetch("http://localhost:3000/vehicles")
      .then((resp) => resp.json())
      .then((data) => renderQuotes(data));
  }
  function renderQuotes(data) {
    for (const q of data) {
      //Find the container where we attach everything to
      const quoteUL = document.querySelector("#quote-list");
      //Create all necessary elements
      const quoteLi = document.createElement("li");
      const blockQuote = document.createElement("blockquote");
      const p = document.createElement("p");
      const footer = document.createElement("span");
      const br = document.createElement("br");
      const hr = document.createElement("hr");
      //Create the dislikes button
      const dislikesBtn = document.createElement("button");
      const numberplate = document.createElement("span");
      const br1 = document.createElement("br");
      p.innerHTML = q.chasisnumber;    
      numberplate.innerHTML = q.numberplate;
      const br2 = document.createElement("br");
      //Add appropriate classes and ids. Grab data and insert if needed.
      // quoteLi.className = "quote-card"; //for styling
      // blockQuote.className = "blockquote"; //for styling
      // p.className = "mb-0"; //for styling
      // footer.className = "blockquote-footer"; //for styling
      quoteLi.dataset.id = q.id;
      //Grab data and insert it into created elements
      // p.innerHTML = q.user.username;
      footer.innerHTML = q.model;
      //Append everything to main container
      blockQuote.append(footer, br2, p, br1, numberplate, br, hr, dislikesBtn);
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
  fetchData();
});
function vehicles() {
  // event.preventdefault();

  const numberplate = document.getElementById("numberplate").value;
  const chasisnumber = document.getElementById("chasisnumber").value;
  const model = document.getElementById("model").value;
  const user_id = 2;
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

document.addEventListener("DOMContentLoaded", () => {
  function fetchBookings() {
    fetch("http://localhost:3000/bookings")
      .then((resp) => resp.json())
      .then((data) => renderBookings(data));
  }
  function renderBookings(data) {
    for (const q of data) {
      //Find the container where we attach everything to
      const quoteUL = document.querySelector("#bookings-list");
      //Create all necessary elements
      const quoteLi = document.createElement("li");
      const blockQuote = document.createElement("blockquote");
      const p = document.createElement("p");
      const footer = document.createElement("span");
      const time = document.createElement("span");
      const br = document.createElement("br");
      const br1 = document.createElement("br");
      const br2 = document.createElement("br");
      const hr = document.createElement("hr");
      const service = document.createElement("label");
      //Create the dislikes button
      const dislikesBtn = document.createElement("button");

      //Add appropriate classes and ids. Grab data and insert if needed.
      // quoteLi.className = "quote-card"; //for styling
      // blockQuote.className = "blockquote"; //for styling
      // p.className = "mb-0"; //for styling
      // footer.className = "blockquote-footer"; //for styling
      quoteLi.dataset.id = q.id;
      //Grab data and insert it into created elements
      p.innerHTML = q.date;0
      time.innerHTML = q.time;
      
      footer.innerHTML = q.service;
      //Append everything to main container
      blockQuote.append(footer, br1, p, br2, time, br, dislikesBtn,hr);
      quoteLi.append(blockQuote);
      quoteUL.append(quoteLi);
      //Attach all the necessary attributes to delete button
      dislikesBtn.innerHTML = "Delete";
      dislikesBtn.className = "btn-danger"; //for styling
      dislikesBtn.addEventListener("click", () => deleteQuote());
      function deleteQuote() {
        const url = `http://localhost:3000/bookings/${q.id}`;
        const reqObj = { method: "DELETE" };
        fetch(url, reqObj).then(quoteLi.remove());
      }
    }
  }
  //Call the function that will automatically run renderQuote() also
  fetchBookings();
});

document.addEventListener("DOMContentLoaded", () => {
  function fetchInspections() {
    fetch("http://localhost:3000/inspections")
      .then((resp) => resp.json())
      .then((data) => renderInspections(data));
  }
  function renderInspections(data) {
    for (const q of data) {
      //Find the container where we attach everything to
      const quoteUL = document.querySelector("#bookings-list");
      //Create all necessary elements
      const quoteLi = document.createElement("li");
      const blockQuote = document.createElement("blockquote");
      const p = document.createElement("p");
      const footer = document.createElement("span");
      const time = document.createElement("span");
      const br = document.createElement("br");
      const br1 = document.createElement("br");
      const br2 = document.createElement("br");
      const hr = document.createElement("hr");
      const service = document.createElement("label");
      //Create the dislikes button
      const dislikesBtn = document.createElement("button");

      //Add appropriate classes and ids. Grab data and insert if needed.
      // quoteLi.className = "quote-card"; //for styling
      // blockQuote.className = "blockquote"; //for styling
      // p.className = "mb-0"; //for styling
      // footer.className = "blockquote-footer"; //for styling
      quoteLi.dataset.id = q.id;
      //Grab data and insert it into created elements
      p.innerHTML = q.date;
      0;
      time.innerHTML = q.time;

      footer.innerHTML = q.service;
      //Append everything to main container
      blockQuote.append(footer, br1, p, br2, time, br, dislikesBtn, hr);
      quoteLi.append(blockQuote);
      quoteUL.append(quoteLi);
      //Attach all the necessary attributes to delete button
      dislikesBtn.innerHTML = "Delete";
      dislikesBtn.className = "btn-danger"; //for styling
      dislikesBtn.addEventListener("click", () => deleteQuote());
      function deleteQuote() {
        const url = `http://localhost:3000/bookings/${q.id}`;
        const reqObj = { method: "DELETE" };
        fetch(url, reqObj).then(quoteLi.remove());
      }
    }
  }
  //Call the function that will automatically run renderQuote() also
  fetchBookings();
});


document.addEventListener("DOMContentLoaded", (ev) => {
  // Recent Orders Data
  //   document.getElementById("example").appendChild(fetchData());
  function fetchData() {
    table.destroy();
    fetch("http://localhost:3000/bookings")
      .then((response) => response.json())
      .then(data => {
        buildTableBody(data);
        console.log(data);
        function buildTableBody(data) {
          // fetchData();
          const table = document.getElementById("example");
          const tbody = document.createElement("tbody");

          let bodyContent = "";
          for (const row of data) {
            bodyContent += `
                <tr>
                    <td>${row.id}</td>
                    <td>${row.service}</td>
                    <td>${row.date}</td>
                    <td>${row.status}</td>
                    <td>${row.time}</td>
                    <td>${row.user_id}</td>
                    <td class="${row.statusColor}">${row.status}</td>
                    <td class="primary">Details</td>
                </tr>
                `;
          }

          tbody.innerHTML = bodyContent;
          table.appendChild(tbody)
        //   return tbody;
        }
      });
  }
  fetchData();
});