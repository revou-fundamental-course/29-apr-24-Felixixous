let start = 0;
otomatis();

function otomatis()
{

    const sliders = document.querySelectorAll(".slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none";
    }

    if (start >= sliders.length) { 
        start = 0;
        
    }

    sliders[start].style.display = "block";
    console.log("gambar ke" +start);
    start++;
    setTimeout(otomatis, 2000);
}

function checkForm() {
    var username = document.getElementById("username").value;
    var emailaddress = document.getElementById("email address").value;

    if(username == "" || emailaddress == ""){
        alert("form tidak boleh kosong")
    }
    else {
        alert("Berhasil Terkirim")
    }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("Home");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("Home")
  } else {
    navbar.classList.remove("Home");
  }
}
