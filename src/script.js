const XHRbutton = document.querySelector("#xhr");
const fetchButton = document.querySelector("#fetch");
const axiosButton = document.querySelector("#axios");
const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
const para = document.querySelector("#visible");

// XMLHttpRequest
function success(){
    var data = JSON.parse(this.responseText)[0];
    para.innerText = data;
  }

function error(err){
  console.log("Error occured:", err);
  }

XHRbutton.addEventListener('click', event => {
  var xhr = new XMLHttpRequest();
  xhr.onload = success;
  xhr.onerror = error;
  xhr.open('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes');
  xhr.send();
});

//FETCH
fetchButton.addEventListener('click', event => {
  fetch(url)
  .then(response => response.json())
  .then(data => para.innerText = data)
  .catch(err => alert("Something went wrong!", err))
});


//jQuery
$( "#jquery" ).click(function(event) {
  $.getJSON(url, function(data){
    $("#visible").text(data);
  })
});

//AXIOS
axiosButton.addEventListener('click', event => {
  axios.get(url, {})
  .then( response => {
  para.innerText = response.data;
  })
  .catch( error => {
  console.log(error);
  })
});
