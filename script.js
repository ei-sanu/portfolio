        // Loader
        window.addEventListener('load', function() {
          const loader = document.getElementById('loader-container');
          loader.style.display = 'none';
      });
 // Mobile Menu
 const hamburger = document.getElementById('hamburger-btn');
 const mobileMenu = document.getElementById('mobile-menu');
 const closeBtn = document.getElementById('close-btn');

 hamburger.addEventListener('click', () => {
     mobileMenu.classList.add('active');
 });

 closeBtn.addEventListener('click', () => {
     mobileMenu.classList.remove('active');
 });

 // Close menu when clicking outside
 document.addEventListener('click', (e) => {
     if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
         mobileMenu.classList.remove('active');
     }
 });

      // Typed.js initialization (if you're using it)
      var typed = new Typed(".text", {
          strings: ["Developer", "Designer", "Freelancer"],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true
      });
      const btns = document.querySelectorAll('.btn-group .btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        btns.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        btn.classList.add('active');
    });
});