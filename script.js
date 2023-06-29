document.addEventListener("DOMContentLoaded", function() {
  var menu = document.getElementById('menu');
  var header = document.querySelector('header');
  var top = document.querySelector('.top');
  var links = document.querySelectorAll('a[href*="#"]');
  var form = document.getElementById('sheetdb-form');

  menu.addEventListener('click', function() {
    this.classList.toggle('fa-times');
    header.classList.toggle('toggle');
  });

  window.addEventListener('scroll', function() {
    menu.classList.remove('fa-times');
    header.classList.remove('toggle');

    if (window.pageYOffset > 0) {
      top.style.display = 'block';
    } else {
      top.style.display = 'none';
    }
  });

  Array.from(links).forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      var target = document.querySelector(this.getAttribute('href'));
      var offsetTop = target.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    var formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      alert('Message sent successfully');
      window.location.href = 'https://jubayer0307.github.io/portfolio/';
    });
  });
});
