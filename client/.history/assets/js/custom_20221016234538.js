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
        let newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.id;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.service;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.status;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.user.username;
        cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;

      //Add appropriate classes and ids. Grab data and insert if needed.
    //   quoteLi.className = "quote-card"; //for styling
    //   blockQuote.className = "blockquote"; //for styling
    //   p.className = "mb-0"; //for styling
    //   //   footer.className = "blockquote-footer"; //for styling
    //   quoteLi.dataset.id = q.id;
    //   //Grab data and insert it into created elements
    //   // p.innerHTML = q.user.username;
    //   footer.innerHTML = q.model;
    //   //Append everything to main container
    //   blockQuote.append(p, footer, br, hr, dislikesBtn);
    //   quoteLi.append(blockQuote);
    //   quoteUL.append(quoteLi);
    //   //Attach all the necessary attributes to delete button
    //   dislikesBtn.innerHTML = "Delete";
    //   dislikesBtn.className = "btn-danger"; //for styling
    //   dislikesBtn.addEventListener("click", () => deleteQuote());
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
