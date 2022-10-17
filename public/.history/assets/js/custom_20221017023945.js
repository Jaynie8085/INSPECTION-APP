// =============  Data Table - (Start) ================= //

$(document).ready(function(){
    
    var table = $('#example').DataTable({
        
        buttons:['copy', 'csv', 'excel', 'pdf', 'print']
        
    });
    
    
    table.buttons().container()
    .appendTo('#example_wrapper .col-md-6:eq(0)');

});

document.addEventListener("DOMContentLoaded", () => {
  function fetchData() {
    fetch("http://localhost:3000/bookings")
      .then((resp) => resp.json())
      .then((data) => renderBookings(data));
  }
  function renderBookings(data) {
    for (const q of data) {
      //Find the container where we attach everything to
      const table = document
        .querySelector("#bookings-list")
        .getElementsByTagName("tbody")[0];
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
      //   footer.className = "blockquote-footer"; //for styling
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
  fetchData();
});

// =============  Data Table - (End) ================= //
