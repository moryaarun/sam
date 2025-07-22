// Om Jyotirlinga Tours - app.js (FIXED VERSION)
// Data (embedded)
const data = {
  jyotirlingas: [
    {
      name: "Somnath",
      location: "Prabhas Patan",
      state: "Gujarat",
      highlights: "First among 12, on Arabian Sea coast, rebuilt multiple times",
      bestTime: "October-March",
      speciality: "Ocean view, evening aarti, historical significance",
      nearbyAttractions: "Dwarkadhish Temple, Gir Forest",
      image: "https://pplx-res.cloudinary.com/image/upload/v1749358936/pplx_project_search_images/2d0445370070f38091cad845fd55d913a314df30.jpg",
    },
    {
      name: "Mallikarjuna",
      location: "Srisailam",
      state: "Andhra Pradesh",
      highlights: "Both Jyotirlinga and Shaktipeeth, Nallamala Hills",
      bestTime: "November-March",
      speciality: "Forest setting, ropeway service, Krishna River",
      nearbyAttractions: "Srisailam Dam, Wildlife Sanctuary",
      image: "https://pplx-res.cloudinary.com/image/upload/v1753193739/pplx_project_search_images/00c42648555d3bc7bdb840a30765c1f822220346.jpg",
    },
    {
      name: "Mahakaleshwar",
      location: "Ujjain",
      state: "Madhya Pradesh",
      highlights: "Only south-facing lingam, famous Bhasma Aarti",
      bestTime: "October-March",
      speciality: "Unique south-facing direction, ancient city of Ujjain",
      nearbyAttractions: "Kal Bhairav Temple, Sandipani Ashram",
      image: "https://pplx-res.cloudinary.com/image/upload/v1753021544/pplx_project_search_images/ea2088e27b7a81838bfb372d8200bf72460b1f0d.jpg",
    },
    {
      name: "Omkareshwar",
      location: "Khandwa",
      state: "Madhya Pradesh",
      highlights: "Om-shaped island on Narmada river, two temples",
      bestTime: "October-April",
      speciality: "Sacred island, boat rides, confluence of rivers",
      nearbyAttractions: "Maheshwar, Narmada River ghats",
      image: "https://pplx-res.cloudinary.com/image/upload/v1752921427/pplx_project_search_images/89c48ce9de41b68fcc761288d9ce4e47fa0f6b58.jpg",
    },
    {
      name: "Kedarnath",
      location: "Kedarnath",
      state: "Uttarakhand",
      highlights: "Highest Jyotirlinga at 3,583m, Himalayan setting",
      bestTime: "April-November",
      speciality: "17km trek from Gaurikund, snow-covered peaks",
      nearbyAttractions: "Badrinath, Tungnath, Chopta",
      image: "https://pplx-res.cloudinary.com/image/upload/v1748758125/pplx_project_search_images/8442441025aa0b299d46488d552e51fc0cdd7843.jpg",
    },
    {
      name: "Bhimashankar",
      location: "Pune",
      state: "Maharashtra",
      highlights: "Dense forests, wildlife sanctuary, Sahyadri mountains",
      bestTime: "October-March",
      speciality: "Protected forest area, trekking trails",
      nearbyAttractions: "Bhimashankar Wildlife Sanctuary, Shivneri Fort",
      image: "https://pplx-res.cloudinary.com/image/upload/v1751354671/pplx_project_search_images/44b25269b777ef9df688e5eb004c47253ff3dece.jpg",
    },
    {
      name: "Kashi Vishwanath",
      location: "Varanasi",
      state: "Uttar Pradesh",
      highlights: "Golden temple on Ganga, most famous Jyotirlinga",
      bestTime: "October-March",
      speciality: "Ancient city, Ganga aarti, spiritual atmosphere",
      nearbyAttractions: "Sarnath, Ganga Ghats, BHU",
      image: "https://pplx-res.cloudinary.com/image/upload/v1753193764/pplx_project_search_images/f1d7651c07de091ec4fc1bc67fcabcaa09d586f0.jpg",
    },
    {
      name: "Trimbakeshwar",
      location: "Nashik",
      state: "Maharashtra",
      highlights: "Source of Godavari River, unique three-faced lingam",
      bestTime: "October-March",
      speciality: "Origin of sacred Godavari, Brahmagiri Hills",
      nearbyAttractions: "Sula Vineyards, Panchavati, Kalaram Temple",
      image: "https://pplx-res.cloudinary.com/image/upload/v1751354670/pplx_project_search_images/13c70bb53c2b55adb3ef9d1fe878210f5f54dae1.jpg",
    },
    {
      name: "Vaidyanath",
      location: "Deoghar",
      state: "Jharkhand",
      highlights: "Major Shravani Mela festival, healing powers",
      bestTime: "October-March",
      speciality: "Medical healing significance, Shravan month pilgrimage",
      nearbyAttractions: "Trikut Hills, Nandan Pahar, Tapovan",
      image: "https://pplx-res.cloudinary.com/image/upload/v1753021544/pplx_project_search_images/ea2088e27b7a81838bfb372d8200bf72460b1f0d.jpg",
    },
    {
      name: "Nageshwar",
      location: "Dwarka",
      state: "Gujarat",
      highlights: "Near legendary Dwarka city, coastal location",
      bestTime: "October-March",
      speciality: "Krishna connection, coastal temple",
      nearbyAttractions: "Dwarkadhish Temple, Rukmini Temple, Bet Dwarka",
      image: "https://pplx-res.cloudinary.com/image/upload/v1749358936/pplx_project_search_images/2d0445370070f38091cad845fd55d913a314df30.jpg",
    },
    {
      name: "Rameshwar",
      location: "Rameswaram",
      state: "Tamil Nadu",
      highlights: "Magnificent corridors, Ramayana connection, island location",
      bestTime: "October-April",
      speciality: "22 sacred wells, longest temple corridor in world",
      nearbyAttractions: "Pamban Bridge, Dhanushkodi, Adam's Bridge",
      image: "https://pplx-res.cloudinary.com/image/upload/v1748758125/pplx_project_search_images/8442441025aa0b299d46488d552e51fc0cdd7843.jpg",
    },
    {
      name: "Grishneshwar",
      location: "Aurangabad",
      state: "Maharashtra",
      highlights: "Last Jyotirlinga, close to Ellora caves",
      bestTime: "October-March",
      speciality: "UNESCO World Heritage site nearby, smallest temple",
      nearbyAttractions: "Ellora Caves, Ajanta Caves, Daulatabad Fort",
      image: "https://pplx-res.cloudinary.com/image/upload/v1753193739/pplx_project_search_images/00c42648555d3bc7bdb840a30765c1f822220346.jpg",
    },
  ],
};

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {

  // ------------------ NAVIGATION ------------------
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle) {
    navToggle.addEventListener("click", function() {
      navMenu.classList.toggle("show");
      navToggle.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking nav links
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      if (navMenu && navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
        if (navToggle) navToggle.classList.remove("active");
      }
    });
  });

  // ------------------ SMOOTH SCROLLING ------------------
  function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  // Handle all anchor links
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
      const href = link.getAttribute('href');
      if (href && href.length > 1) {
        e.preventDefault();
        smoothScrollTo(href);
      }
    }
  });

  // ------------------ RENDER JYOTIRLINGA GRID ------------------
  const grid = document.getElementById("jyotirlinga-grid");
  
  if (grid) {
    data.jyotirlingas.forEach((temple, index) => {
      const card = document.createElement("div");
      card.className = "jyotirlinga-card";
      card.setAttribute("data-temple-index", index);
      
      card.innerHTML = `
        <div class="jyotirlinga-header">
          <div>
            <div class="jyotirlinga-name">${temple.name}</div>
            <div class="jyotirlinga-state">${temple.state}</div>
          </div>
          <div class="jyotirlinga-location">${temple.location}</div>
        </div>
        <div class="jyotirlinga-highlights">${temple.highlights}</div>
        <div class="jyotirlinga-meta">
          <span class="best-time">Best: ${temple.bestTime}</span>
          <span class="learn-more">Click for details →</span>
        </div>
      `;
      
      grid.appendChild(card);
    });
  }

  // ------------------ MODAL FUNCTIONALITY ------------------
  const modal = document.getElementById("jyotirlinga-modal");
  const modalClose = document.getElementById("modal-close");
  const modalBody = document.getElementById("modal-body");

  function buildModalContent(temple) {
    return `
      <img src="${temple.image}" alt="${temple.name}" class="modal-temple-image" />
      <div class="modal-content-body">
        <h3 class="modal-temple-name">${temple.name}</h3>
        <p class="modal-temple-location">${temple.location}, ${temple.state}</p>
        <div class="modal-temple-details">
          <div class="modal-detail-section">
            <h4>Speciality</h4>
            <p>${temple.speciality}</p>
          </div>
          <div class="modal-detail-section">
            <h4>Highlights</h4>
            <p>${temple.highlights}</p>
          </div>
          <div class="modal-detail-section">
            <h4>Best Time to Visit</h4>
            <p>${temple.bestTime}</p>
          </div>
          <div class="modal-detail-section">
            <h4>Nearby Attractions</h4>
            <p>${temple.nearbyAttractions}</p>
          </div>
        </div>
      </div>
    `;
  }

  // Modal click handler - only for jyotirlinga cards
  if (grid && modal && modalBody) {
    grid.addEventListener("click", function(e) {
      const card = e.target.closest(".jyotirlinga-card");
      if (card) {
        const index = parseInt(card.getAttribute("data-temple-index"), 10);
        const temple = data.jyotirlingas[index];
        
        if (temple) {
          modalBody.innerHTML = buildModalContent(temple);
          modal.style.display = "block";
          document.body.style.overflow = "hidden";
        }
      }
    });
  }

  // Close modal
  function closeModal() {
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  // Close modal when clicking outside
  window.addEventListener("click", function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // ------------------ PACKAGE INQUIRY BUTTONS ------------------
  const inquiryButtons = document.querySelectorAll(".package-inquiry");
  const packageSelect = document.getElementById("package");

  inquiryButtons.forEach(button => {
    button.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const packageValue = this.getAttribute("data-package");
      
      if (packageSelect && packageValue) {
        packageSelect.value = packageValue;
      }
      
      // Scroll to contact section
      smoothScrollTo("#contact");
    });
  });

  // ------------------ CONTACT FORM ------------------
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const phone = this.phone.value.trim();

      if (!name || !email || !phone) {
        alert("Please fill in all required fields.");
        return;
      }

      const submitBtn = this.querySelector("button[type='submit']");
      
      if (submitBtn) {
        const originalText = submitBtn.textContent;
        submitBtn.classList.add("loading");
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.classList.remove("loading");
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          contactForm.reset();
          alert("Thank you! Our team will contact you soon for your pilgrimage booking.");
        }, 2000);
      }
    });
  }

}); // End DOMContentLoaded