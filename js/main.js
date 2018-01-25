function bookSearch() {
 let search = document.getElementById('search').value;
 document.getElementById('results').innerHTML = "";
 console.log(search);

$.ajax({
  url: "https://www.googleapis.com/books/v1/volumes?q=" +search,
  dataType: "json",
  success: function(data) {
    console.log(data);
      for(i = 0; i < data.items.length; i++){
        results.innerHTML += "<h4>" + data.items[i].volumeInfo.title + "</h4>" + "<h6>" + data.items[i].volumeInfo.description + "</h6>"
      }
  },
  type: "GET"
});

}
document.getElementById('button').addEventListener('click', bookSearch, false);

$('carousel').carousel({
interval:3000
})
