fetch("http://localhost:3000/api/reviews")
  .then((res) => res.json())
  .then((reviews) => {
    reviews.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.nextReview) - new Date(a.nextReview);
    }).reverse();
    reviews.forEach((review, index) => {
      let date = `${review.nextReview.slice(8,10)}/${review.nextReview.slice(5,7)}/${review.nextReview.slice(0,4)}`;

      let table = document.getElementById("table");
      var row = table.insertRow(index+1);
      row.insertCell(
        0
      ).innerHTML = `<input type="checkbox" id="${review.id}"/>`;
      row.insertCell(1).innerHTML = date
      row.insertCell(
        2
      ).innerHTML = review.name;
      row.insertCell(3).innerHTML = review.subject;
    });
  });
/* 
<tr>
    <td><input type="checkbox" /></td>
              <td>23/06/2020</td>
              <td>Polimorfismo</td>
              <td>Java</td>
            </tr>  */
