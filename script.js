window.onscroll = function () {
  var navbar = document.getElementById('navbar');
  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Adicione essa linha se você quiser uma rolagem suave
  });
}

window.onscroll = function () {
  var scrollButton = document.getElementById('scrollButton');
  if (window.pageYOffset > 0) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};



