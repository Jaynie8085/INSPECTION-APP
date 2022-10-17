// =============  Data Table - (Start) ================= //

$(document).ready(function () {
  let table = $("#example").DataTable({
    buttons: ["copy", "csv", "excel", "pdf", "print"],
  });

  table.buttons().container().appendTo("#example_wrapper .col-md-6:eq(0)");
});

document.addEventListener("DOMContentLoaded", () => {
  function fetchBookings() {
    fetch("http://localhost:3000/bookings")
      .then((resp) => resp.json())
      .then((data) => renderBookingfetchBookings(data));
  }
  function renderBookingfetchBookings(data) {
    for (const q of data) {
      //Find the container where we attach everything to
      const table = document.querySelector("#example");
      //Create all necessary elements
      const tbody = document.createElement("tbody");
      const id = document.createElement("td");
      const service = document.createElement("td");
      const date = document.createElement("td");
      const time = document.createElement("td");
      const status = document.createElement("td");
      const user_id = document.createElement("td");
      const clear = document.createElement("td");
      const dislikesBtn = document.createElement("button");
      id.innerHTML = q.id;
      service.innerHTML = q.service;
      date.innerHTML = q.date;
      time.innerHTML = q.time;
      status.innerHTML = q.status;
      user_id.innerHTML = q.user_id;
      dislikesBtn.innerHTML;

      clear.append(dislikesBtn);
      tbody.append(id, date, time, user_id, service, clear);
      table.append(tbody);
      //Attach all the necessary attributes to delete button
      dislikesBtn.innerHTML = "Delete";
      // dislikesBtn.className = "btn-danger"; //for styling
      dislikesBtn.addEventListener("click", () => deleteQuote());
      function deleteQuote() {
        const url = `http://localhost:3000/bookings/${q.id}`;
        const reqObj = { method: "DELETE" };
        fetch(url, reqObj).then(tbody.remove());
      }
    }
  }
  //Call the function that will automatically run renderQuote() also
  fetchBookings();

  function fetchVehicles() {
    fetch("http://localhost:3000/vehicles")
      .then((resp) => resp.json())
      .then((vehicles) => renderVehicles(vehicles));
  }
  function renderVehicles(vehicles) {
    for (const q of vehicles) {
      //Find the container where we attach everything to
      const table = document.querySelector("#vehicle");
      //Create all necessary elements
      const tbody = document.createElement("tbody");
      const id = document.createElement("td");
      const numberplate = document.createElement("td");
      const chasisnumber = document.createElement("td");
      const model = document.createElement("td");
      const user_id = document.createElement("td");
      // const actions = document.createElement("td");
      const clear1 = document.createElement("td");
      const dislikesBtn = document.createElement("button");
      id.innerHTML = q.id;
      numberplate.innerHTML = q.numberplate;
      chasisnumber.innerHTML = q.chasisnumber;
      model.innerHTML = q.model;
      user_id.innerHTML = q.user_id;
      dislikesBtn.innerHTML;

      clear1.append(dislikesBtn);
      tbody.append(id, numberplate, chasisnumber, model, user_id, clear1);
      table.append(tbody);
      //Attach all the necessary attributes to delete button
      dislikesBtn.innerHTML = "Delete";
      // dislikesBtn.className = "btn-danger"; //for styling
      dislikesBtn.addEventListener("click", () => deleteQuote());
      function deleteQuote() {
        const url = `http://localhost:3000/Vehicles/${q.id}`;
        const reqObj = { method: "DELETE" };
        fetch(url, reqObj).then(tbody.remove());
      }
    }
  }
  //Call the function that will automatically run renderQuote() also
  fetchVehicles();


    function fetchVehicles() {
      fetch("http://localhost:3000/vehicles")
        .then((resp) => resp.json())
        .then((vehicles) => renderVehicles(vehicles));
    }
    function renderVehicles(vehicles) {
      for (const q of vehicles) {
        //Find the container where we attach everything to
        const table = document.querySelector("#vehicle");
        //Create all necessary elements
        const tbody = document.createElement("tbody");
        const id = document.createElement("td");
        const numberplate = document.createElement("td");
        const chasisnumber = document.createElement("td");
        const model = document.createElement("td");
        const user_id = document.createElement("td");
        // const actions = document.createElement("td");
        const clear1 = document.createElement("td");
        const dislikesBtn = document.createElement("button");
        id.innerHTML = q.id;
        numberplate.innerHTML = q.numberplate;
        chasisnumber.innerHTML = q.chasisnumber;
        model.innerHTML = q.model;
        user_id.innerHTML = q.user_id;
        dislikesBtn.innerHTML;

        clear1.append(dislikesBtn);
        tbody.append(id, numberplate, chasisnumber, model, user_id, clear1);
        table.append(tbody);
        //Attach all the necessary attributes to delete button
        dislikesBtn.innerHTML = "Delete";
        // dislikesBtn.className = "btn-danger"; //for styling
        dislikesBtn.addEventListener("click", () => deleteQuote());
        function deleteQuote() {
          const url = `http://localhost:3000/Vehicles/${q.id}`;
          const reqObj = { method: "DELETE" };
          fetch(url, reqObj).then(tbody.remove());
        }
      }
    }
    //Call the function that will automatically run renderQuote() also
    fetchVehicles();
});
document.addEventListener("DOMContentLoaded", () => {
  function fetchBookings() {
  // e.preventDefault();
  fetch("http://localhost:3000/inspections")
    .then((resp) => resp.json())
    .then((data) => (renderInspections = data));
};
function renderInspections(data) {
  renderInspections();
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
      const url = `http://localhost:3000/vehicles/${q.id}`;
      const reqObj = { method: "DELETE" };
      fetch(url, reqObj).then(quoteLi.remove());
    }
  }
  }

// =============  Data Table - (End) ================= //
