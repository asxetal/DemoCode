document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById('mobile-menu');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', function() {
    navList.classList.toggle('active'); // Toggle the active class
  });
});
