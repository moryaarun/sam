// Jyotirlinga Darshan Tours - JavaScript Functionality (Fixed Version)

// Application Data
const jyotirlingaData = [
 {
  "name": "Somnath",
  "state": "Gujarat", 
  "bestMonth": "October to March",
  "description": "Home to the first and most ancient Jyotirlinga, Somnath is a spiritual powerhouse located along the Arabian Sea. The temple's grandeur and its dramatic seaside backdrop make it a must-visit. Steeped in mythology and history, Somnath has stood the test of time, being rebuilt several times after invasions — a symbol of faith and resilience.",
  "package": "Gujarat Divine & Wildlife Trail: Somnath – Dwarka – Nageshwar – Gir (4 Days / 3 Nights)",
  "highlights": "Somnath Jyotirlinga, Dwarka Temple, Nageshwar Jyotirlinga, Bet Dwarka, Gir Safari.",
  "itinerary": `Day 1: Arrival in Somnath
                    • Visit Somnath Jyotirlinga Temple.
                    • Explore Bhalka Tirth, Triveni Sangam, and the Light & Sound Show at the temple.
                    • Overnight stay in Somnath.
                \nDay 2: Somnath to Dwarka (Approx. 4.5–5 hrs drive)
                    • En route, stop at Porbandar (birthplace of Mahatma Gandhi – Kirti Mandir).
                    • Reach Dwarka and visit Dwarkadhish Temple.
                    • Evening Aarti and leisure at Gomti Ghat.
                    • Overnight stay in Dwarka.
                \nDay 3: Nageshwar + Bet Dwarka
                    • Morning visit to Nageshwar Jyotirlinga Temple.
                    • Take a boat to Bet Dwarka (island temple of Lord Krishna).
                    • Visit Rukmini Temple on return.
                    • Optional shopping and cultural walk.
                    • Overnight stay in Dwarka or travel to Gir (depending on pace).
                \nDay 4: Gir Safari + Departure
                    • Early morning Jeep Safari at Gir National Park (pre-booking required).
                    • Visit Devalia Safari Park if time permits.
                    • Depart from Rajkot or Diu (nearest airports).`,
  "image": "images/Somnath.jpg"
},
 {
  "name": "Mallikarjuna", 
  "state": "Andhra Pradesh",
  "bestMonth": "October to March",
  "description": "Srisailam is home to the Mallikarjuna Jyotirlinga, one of the 12 sacred Jyotirlingas of Lord Shiva, and also one of the 18 Maha Shakti Peethas — making it a rare dual pilgrimage site. Nestled in the lush Nallamala Hills by the Krishna River, the temple complex offers both spiritual energy and natural beauty.",
  "package": "Srisailam Spiritual Retreat (2 Days / 1 Night)",
  "highlights": "Temple darshan, Bhramaramba Shakti Peeth, Krishna River views, Ramoji Film City",
  "itinerary": `Day 1: Hyderabad to Srisailam (Approx. 4–5 hrs)
                  • Depart early morning from Hyderabad.
                  • Reach Srisailam and check in to hotel.
                  • Visit Mallikarjuna Swamy Temple and Bhramaramba Devi Temple.
                  • Explore Pathala Ganga via ropeway and enjoy boat ride on the Krishna River.
                  • Evening visit to Srisailam Dam or Sikharam Viewpoint.
                  • Overnight stay in Srisailam.
                \nDay 2: Srisailam to Ramoji Film City (Approx. 5 hrs)
                  • Early check-out and drive to Ramoji Film City.
                  • Enjoy full-day Film City tour with live shows, theme attractions, and studio sets.
                  • Evening return or optional overnight stay in Hyderabad (or inside Ramoji’s hotels).
                \nOptional Add-ons:
                  • Akkamahadevi Caves boat ride in Srisailam (3–4 hrs, seasonal)
                  • Hyderabad sightseeing (Charminar, Golconda Fort, Birla Temple) — Add 1 extra day.`,
  "image": "images/Mallikaarjun.jpg"
},
  {
    "name": "Mahakaleshwar",
    "state": "Madhya Pradesh", 
    "bestMonth": "October to March",
    "description": "Located in the ancient city of Ujjain, Mahakaleshwar is one of the 12 Jyotirlingas and the only one that is south-facing (Dakshinamukhi) — a unique aspect that adds to its mystical aura. The temple is known for the sacred Bhasma Aarti, performed at dawn using sacred ash — a ritual that attracts thousands of devotees daily.",
    "package": "Ujjain Sacred Circuit (3 Days / 2 Nights)",
    "highlights": "Dawn Bhasma Aarti, Shipra River ghats, Kaal Bhairav temple",
    "itinerary": "Day 1: Arrival in Ujjain, evening temple visit and local sightseeing\nDay 2: Early morning Bhasma Aarti (4 AM), Shipra River ghats, Kaal Bhairav temple\nDay 3: Ram Ghat, Sandipani Ashram, Ved Shala observatory, departure",
    "image": "images/Mahakaleshwar.jpg"
  },
  {
    "name": "Omkareshwar",
    "state": "Madhya Pradesh",
    "bestMonth": "October to February", 
    "description": "Located on a sacred island in the Narmada River, Omkareshwar is known for its unique Om-shaped formation and divine energy. The temple complex offers breathtaking views and spiritual serenity.",
    "package": "Narmada Divine Journey (2 Days / 1 Night)",
    "highlights": "Island temple, Narmada Parikrama, river aarti",
    "itinerary": "Day 1: Arrival at Omkareshwar, boat ride to temple island, evening aarti\nDay 2: Narmada Parikrama, Mamleshwar temple visit, departure",
    "image": "images/Omkareshwar.jpg"
  },
  {
    "name": "Kedarnath",
    "state": "Uttarakhand",
    "bestMonth": "May-June, September-October",
    "description": "Nestled high in the Himalayas, Kedarnath is accessible only during summer and autumn months. This sacred shrine by the Mandakini River offers an unparalleled spiritual experience amidst snow-capped peaks.",
    "package": "Himalayan Spiritual Trek (3 Days / 2 Nights)", 
    "highlights": "Temple trek, Bhairavnath temple, Himalayan views",
    "itinerary": "Day 1: Reach Gaurikund, begin 16km trek to Kedarnath\nDay 2: Early morning darshan, visit Bhairavnath temple, rest day\nDay 3: Final darshan, trek back to Gaurikund, departure",
    "image": "images/Kedarnath.jpg"
  },
  {
    "name": "Bhimashankar",
    "state": "Maharashtra",
    "bestMonth": "October to March",
    "description": "Located in the Sahyadri hills near Pune, Bhimashankar combines spiritual significance with natural beauty, being situated within a wildlife sanctuary.",
    "package": "Sahyadri Spiritual Retreat (2 Days / 1 Night)",
    "highlights": "Temple darshan, wildlife sanctuary, scenic trekking",
    "itinerary": "Day 1: Drive from Pune to Bhimashankar, temple darshan, nature walk\nDay 2: Early morning puja, wildlife sanctuary visit, return to Pune",
    "image": "images/Bhimashankar.jpg"
  },
  {
    "name": "Kashi Vishwanath", 
    "state": "Uttar Pradesh",
    "bestMonth": "November to February",
    "description": "In the heart of Varanasi on the banks of the sacred Ganga, Kashi Vishwanath is considered the spiritual capital of India and the ultimate destination for moksha (liberation).",
    "package": "Spiritual Wonders of Uttar Pradesh: Prayagraj – Kashi – Ayodhya (5 Days/4 Nights)",
    "highlights": "Ganga Aarti at Dashashwamedh Ghat, temple darshan, spiritual city tour",
    "itinerary": "Day 1: Arrival in Varanasi, Kashi Corridor visit, evening Ganga aarti\nDay 2: Early morning boat ride, temple darshan, city exploration\nDay 3: Travel to Prayagraj, Triveni Sangam, Akshayavat\nDay 4: Journey to Ayodhya, Ram Janmabhoomi, Hanuman Garhi\nDay 5: Final temple visits, departure",
    "image": "images/Kashi.jpg"
  },
  {
    "name": "Trimbakeshwar",
    "state": "Maharashtra", 
    "bestMonth": "October to March",
    "description": "Located at the origin of the sacred Godavari River, Trimbakeshwar features a unique three-faced Shiva linga and is surrounded by the beautiful Brahmagiri hills.",
    "package": "Godavari Source Pilgrimage (2 Days / 1 Night)",
    "highlights": "Trimbakeshwar Jyotirlinga, Kushavarta Kund, Brahmagiri Hill, Anjaneri (Hanuman's birthplace)",
    "itinerary": "Day 1: Arrival in Nashik, Trimbakeshwar temple darshan, Kushavarta Kund\nDay 2: Brahmagiri hill trek, Anjaneri visit, departure",
    "image": "images/Trimbakeshwar.jpg"
  },
  {
    "name": "Vaidyanath",
    "state": "Jharkhand",
    "bestMonth": "October to March",
    "description": "Located in Deoghar, Vaidyanath is believed to have healing powers and is especially crowded during the Sawan festival when millions of devotees visit.",
    "package": "Deoghar Healing Pilgrimage (2 Days / 1 Night)",
    "highlights": "Temple darshan, Baidyanath dham, healing prayers",
    "itinerary": "Day 1: Arrival in Deoghar, temple darshan, local temples visit\nDay 2: Early morning puja, Naulakha Mandir, departure",
    "image": "images/Vaidyanath.jpg"
  },
  {
    "name": "Nageshwar",
    "state": "Gujarat",
    "bestMonth": "October to March", 
    "description": "Near Dwarka, Nageshwar is famous for its giant Shiva statue and proximity to the Arabian Sea, offering both spiritual and scenic experiences.",
    "package": "Dwarka-Nageshwar Divine Tour (3 Days / 2 Nights)",
    "highlights": "Temple darshan, giant Shiva statue, Dwarka city tour",
    "itinerary": "Day 1: Arrival in Dwarka, Dwarkadhish temple, local sightseeing\nDay 2: Nageshwar Jyotirlinga darshan, giant Shiva statue, Bet Dwarka\nDay 3: Rukmini temple, Gomti Ghat, departure",
    "image": "images/Nageshwar.jpg"
  },
  {
    "name": "Rameshwaram",
    "state": "Tamil Nadu",
    "bestMonth": "October to April",
    "description": "Located on Pamban Island and connected to the Ramayana, Rameshwar is famous for its magnificent corridors and the ritual of Agni Theertham.",
    "package": "Rameshwar Island Pilgrimage (3 Days / 2 Nights)",
    "highlights": "Temple corridors, Agni Theertham, Pamban Bridge, island tour",
    "itinerary": "Day 1: Arrival in Rameshwaram, temple darshan, corridor exploration\nDay 2: 22 holy water tanks visit, Agni Theertham bath, Pamban Bridge\nDay 3: Dhanushkodi visit, Adam's Bridge view, departure",
    "image": "images/Rameshwaram.jpg"
  },
  {
    "name": "Grishneshwar", 
    "state": "Maharashtra",
    "bestMonth": "October to March",
    "description": "The last Jyotirlinga, located near the famous Ellora Caves, Grishneshwar combines spiritual significance with incredible architectural heritage.",
    "package": "Ellora Heritage & Spiritual Tour (2 Days / 1 Night)", 
    "highlights": "Grishneshwar Temple, Ellora Caves, Kailasa Temple, Daulatabad Fort",
    "itinerary": "Day 1: Arrival in Aurangabad, Grishneshwar temple darshan, local exploration\nDay 2: Ellora Caves tour, Kailasa Temple, Daulatabad Fort, departure",
    "image": "images/Grishneshwar.jpg"
  }
];

const reviewsData = [
  {
    "name": "Praveen Tiwari",
    "rating": 5,
    "text": "Wonderful spiritual journey to all 12 Jyotirlingas. The team arranged everything perfectly - accommodation, transportation, and guides. Highly recommended for anyone seeking divine blessings.",
    "location": "Mumbai"
  },
  {
    "name": "Priya Patel", 
    "rating": 5,
    "text": "Our family's pilgrimage to Kedarnath and Kashi was beautifully organized. The spiritual experience was beyond words. Thank you for making our dream journey possible!",
    "location": "Ahmedabad"
  },
  {
    "name": "Ram Shalunke",
    "rating": 4,
    "text": "Excellent service and knowledgeable guides. The Gujarat Jyotirlinga tour was well-planned with comfortable stays. Will definitely book again for other pilgrimage tours.",
    "location": "Pune"
  },
  {
    "name": "Lakshmi Devi",
    "rating": 5, 
    "text": "The Char Dham yatra was a life-changing experience. Professional service, punctual transportation, and spiritual guidance throughout the journey. Blessed to have chosen this agency.",
    "location": "Bangalore"
  }
];

// Chatbot state management
let chatbotState = {
  step: 0,
  userData: {
    email: '',
    phone: '',
    interest: ''
  }
};

const chatbotMessages = [
  "🙏 Welcome to Jyotirlinga Darshan Tours! How can we help you today?",
  "Thank you! Please provide your email address so we can send you detailed information:",
  "Perfect! Now please share your phone number for better assistance:",
  "Which Jyotirlinga yatra are you interested in? (You can mention specific temples or tour packages):",
  "Thank you for sharing your details! 🙏 Our team will connect with you shortly to plan your spiritual journey. Om Namah Shivaya!"
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing Jyotirlinga Darshan Tours website...');
  
  initializeApp();
});

// Initialize all app functionality
function initializeApp() {
  renderJyotirlingaCards();
  renderReviews();
  setupMobileNavigation();
  setupSmoothScrolling();
  setupModal();
  setupInquiryForm();
  setupChatbot();
}

// Render Jyotirlinga Cards
function renderJyotirlingaCards() {
  const grid = document.getElementById('jyotirlinga-grid');
  if (!grid) {
    console.error('Jyotirlinga grid container not found');
    return;
  }

  grid.innerHTML = '';

  jyotirlingaData.forEach((jyotirlinga, index) => {
    const card = createJyotirlingaCard(jyotirlinga, index);
    grid.appendChild(card);
  });

  console.log(`Rendered ${jyotirlingaData.length} Jyotirlinga cards`);
}

// Create individual Jyotirlinga card - FIXED to pass correct data
function createJyotirlingaCard(jyotirlinga, index) {
  const card = document.createElement('div');
  card.className = 'jyotirlinga-card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `View details for ${jyotirlinga.name} Jyotirlinga`);
  
  // Store jyotirlinga data as a data attribute to ensure correct data is passed
  card.dataset.jyotirlingaIndex = index;

  card.innerHTML = `
    <img src="${jyotirlinga.image}" alt="${jyotirlinga.name} Temple" class="card-image" loading="lazy">
    <div class="card-content">
      <h3 class="card-title">${jyotirlinga.name}</h3>
      <p class="card-location"><strong>📍 ${jyotirlinga.state}</strong></p>
      <div class="best-month-badge">🗓️ Best Time: ${jyotirlinga.bestMonth}</div>
    </div>
  `;

  // Add click event listener - FIXED to use stored index
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const index = parseInt(card.dataset.jyotirlingaIndex);
    const jyotirlingaData_item = jyotirlingaData[index];
    openJyotirlingaModal(jyotirlingaData_item);
  });
  
  // Add keyboard navigation - FIXED to use stored index
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const index = parseInt(card.dataset.jyotirlingaIndex);
      const jyotirlingaData_item = jyotirlingaData[index];
      openJyotirlingaModal(jyotirlingaData_item);
    }
  });

  return card;
}

// Render Reviews Section
function renderReviews() {
  const reviewsGrid = document.getElementById('reviews-grid');
  if (!reviewsGrid) {
    console.error('Reviews grid container not found');
    return;
  }

  reviewsGrid.innerHTML = '';

  reviewsData.forEach(review => {
    const reviewCard = createReviewCard(review);
    reviewsGrid.appendChild(reviewCard);
  });

  console.log(`Rendered ${reviewsData.length} reviews`);
}

// Create individual review card
function createReviewCard(review) {
  const card = document.createElement('div');
  card.className = 'review-card';

  const stars = '⭐'.repeat(review.rating);

  card.innerHTML = `
    <div class="review-rating">${stars}</div>
    <p class="review-text">"${review.text}"</p>
    <div class="review-author">${review.name}</div>
    <div class="review-location">${review.location}</div>
  `;

  return card;
}

// Setup Mobile Navigation - FIXED
function setupMobileNavigation() {
  const navToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!navToggle || !navMenu) {
    console.error('Mobile navigation elements not found');
    return;
  }

  navToggle.addEventListener('click', (e) => {
    e.preventDefault();
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking on navigation links
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
}

// Setup Smooth Scrolling - FIXED to work properly
function setupSmoothScrolling() {
  // Handle all navigation links including mobile
  document.addEventListener('click', function(e) {
    // Check if the clicked element is a navigation link
    if (e.target.matches('a[href^="#"]')) {
      e.preventDefault();
      
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = 80;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navToggle = document.getElementById('mobile-nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        if (navToggle && navMenu) {
          navToggle.classList.remove('active');
          navMenu.classList.remove('active');
        }
      }
    }
  });
}

// Setup Modal Functionality
function setupModal() {
  const modal = document.getElementById('jyotirlinga-modal');
  const closeBtn = document.getElementById('modal-close');

  if (!modal || !closeBtn) {
    console.error('Modal elements not found');
    return;
  }

  // Close modal when clicking close button
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
  });

  // Close modal when clicking overlay
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

// Open Jyotirlinga Modal - FIXED to display correct content
function openJyotirlingaModal(jyotirlinga) {
  const modal = document.getElementById('jyotirlinga-modal');
  const modalBody = document.getElementById('modal-body');

  if (!modal || !modalBody) {
    console.error('Modal elements not found');
    return;
  }

  modalBody.innerHTML = `
    <img src="${jyotirlinga.image}" alt="${jyotirlinga.name} Temple" class="modal-image">
    <h2 class="modal-title">${jyotirlinga.name} Jyotirlinga</h2>
    
    <div class="modal-meta">
      <div class="meta-item">📍 ${jyotirlinga.state}</div>
      <div class="meta-item">🗓️ ${jyotirlinga.bestMonth}</div>
    </div>

    <div class="modal-section">
      <h4>About This Sacred Place</h4>
      <p>${jyotirlinga.description}</p>
    </div>

    <div class="modal-section">
      <h4>Tour Package</h4>
      <h5 style="color: var(--saffron); margin-bottom: 8px;">${jyotirlinga.package}</h5>
      <div class="package-highlights">
        <strong>Package Highlights:</strong><br>
        ${jyotirlinga.highlights}
      </div>
    </div>

    <div class="modal-section">
      <h4>Suggested Itinerary</h4>
      <div style="white-space: pre-line; background: var(--color-bg-3); padding: 16px; border-radius: 8px; border-left: 4px solid var(--saffron);">
${jyotirlinga.itinerary}
      </div>
    </div>

    <div style="text-align: center; margin-top: 24px;">
      <button class="btn btn--primary btn--lg" onclick="closeModal(); document.getElementById('inquiry').scrollIntoView({behavior: 'smooth', block: 'start'});">Book This Package</button>
    </div>
  `;

  modal.classList.remove('hidden');
  
  // Focus management for accessibility
  setTimeout(() => {
    const closeButton = modal.querySelector('#modal-close');
    if (closeButton) {
      closeButton.focus();
    }
  }, 100);
}

// Close Modal
function closeModal() {
  const modal = document.getElementById('jyotirlinga-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Setup Inquiry Form - FIXED with better feedback
function setupInquiryForm() {
  const form = document.getElementById('inquiry-form');
  const successMsg = document.getElementById('form-success');
  const errorMsg = document.getElementById('form-error');

  if (!form) {
    console.error('Inquiry form not found');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Clear previous messages
    if (successMsg) successMsg.classList.add('hidden');
    if (errorMsg) errorMsg.classList.add('hidden');
    
    // Show detailed loading state
    submitBtn.innerHTML = '⏳ Submitting your inquiry...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Validate required fields
      if (!data.fullName || !data.email || !data.phone) {
        throw new Error('Please fill in all required fields');
      }
      
      // Simulate form submission with longer delay for better user experience
      await simulateFormSubmission(data);
      
      // Show success message
      if (successMsg) {
        successMsg.innerHTML = `
          <div style="text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 8px;">🙏</div>
            <strong>Thank you, ${data.fullName}!</strong><br>
            Your inquiry has been received successfully. Our travel expert will contact you within 24 hours at ${data.phone} to discuss your personalized pilgrimage plan.
            <br><br>
            <em>Om Namah Shivaya</em>
          </div>
        `;
        successMsg.classList.remove('hidden');
        
        // Scroll to success message
        setTimeout(() => {
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
      
      // Reset form
      form.reset();
      
    } catch (error) {
      console.error('Form submission error:', error);
      
      if (errorMsg) {
        errorMsg.innerHTML = `
          <div style="text-align: center;">
            <div style="font-size: 1.5rem; margin-bottom: 8px;">❌</div>
            <strong>Submission Error</strong><br>
            ${error.message || 'Sorry, there was an error submitting your inquiry.'}<br><br>
            Please try again or contact us directly:<br>
            📧 <a href="mailto:morya_arun@yahoo.co.in" style="color: white;">morya_arun@yahoo.co.in</a><br>
            📞 <a href="tel:+919773930301" style="color: white;">+91 97739 30301</a>
          </div>
        `;
        errorMsg.classList.remove('hidden');
      }
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
    }
  });
}

// Simulate form submission with better error handling
function simulateFormSubmission(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        reject(new Error('Please enter a valid email address'));
        return;
      }
      
      // Validate phone number (basic)
      const phoneRegex = /^\d{10}$|^\+91\d{10}$/;
      if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
        reject(new Error('Please enter a valid 10-digit phone number'));
        return;
      }
      
      // Simulate 95% success rate
      if (Math.random() > 0.05) {
        console.log('Form submitted successfully:', data);
        resolve(data);
      } else {
        reject(new Error('Network error. Please check your connection and try again.'));
      }
    }, 1500);
  });
}

// Setup Chatbot - COMPLETELY FIXED
function setupChatbot() {
  console.log('Setting up chatbot...');
  
  const chatToggle = document.getElementById('chatbot-toggle');
  const chatWindow = document.getElementById('chatbot-window');
  const chatClose = document.getElementById('chatbot-close');
  const chatInput = document.getElementById('chatbot-input');
  const chatSend = document.getElementById('chatbot-send');
  const chatMessages = document.getElementById('chatbot-messages');

  if (!chatToggle || !chatWindow || !chatClose || !chatInput || !chatSend || !chatMessages) {
    console.error('Chatbot elements not found:', {
      chatToggle: !!chatToggle,
      chatWindow: !!chatWindow,
      chatClose: !!chatClose,
      chatInput: !!chatInput,
      chatSend: !!chatSend,
      chatMessages: !!chatMessages
    });
    return;
  }

  console.log('All chatbot elements found, setting up event listeners...');

  // Toggle chat window
  chatToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Chat toggle clicked');
    
    const isHidden = chatWindow.classList.contains('hidden');
    chatWindow.classList.toggle('hidden');
    
    if (isHidden) {
      console.log('Opening chatbot...');
      // Start conversation if it's the first time
      if (chatbotState.step === 0) {
        setTimeout(() => {
          addChatMessage(chatbotMessages[0], false);
          chatbotState.step = 1;
        }, 300);
      }
      // Focus on input
      setTimeout(() => chatInput.focus(), 400);
    }
  });

  // Close chat window
  chatClose.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Chat close clicked');
    chatWindow.classList.add('hidden');
  });

  // Send message function
  function sendChatMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    console.log('Sending message:', message);

    // Add user message
    addChatMessage(message, true);
    chatInput.value = '';

    // Process user input based on current step
    processChatbotResponse(message);
  }

  // Send message on button click
  chatSend.addEventListener('click', (e) => {
    e.preventDefault();
    sendChatMessage();
  });
  
  // Send message on Enter key
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendChatMessage();
    }
  });

  // Add chat message function
  function addChatMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user' : 'bot'}`;
    messageDiv.textContent = message;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    console.log(`Added ${isUser ? 'user' : 'bot'} message:`, message);
  }

  // Process chatbot response
  function processChatbotResponse(userMessage) {
    setTimeout(() => {
      let response = '';
      
      console.log('Processing response for step:', chatbotState.step);
      
      switch (chatbotState.step) {
        case 1:
          // Expecting email
          chatbotState.userData.email = userMessage;
          response = chatbotMessages[2];
          chatbotState.step = 2;
          break;
          
        case 2:
          // Expecting phone
          chatbotState.userData.phone = userMessage;
          response = chatbotMessages[3];
          chatbotState.step = 3;
          break;
          
        case 3:
          // Expecting interest
          chatbotState.userData.interest = userMessage;
          response = chatbotMessages[4];
          chatbotState.step = 4;
          
          // Disable input after completion
          chatInput.disabled = true;
          chatSend.disabled = true;
          chatInput.placeholder = 'Conversation completed. Thank you!';
          
          // Log the collected data
          console.log('Chatbot conversation completed:', chatbotState.userData);
          break;
          
        default:
          response = "Thank you for your interest! Please contact us at morya_arun@yahoo.co.in for more information.";
      }
      
      if (response) {
        addChatMessage(response, false);
      }
    }, 800);
  }
  
  console.log('Chatbot setup completed successfully');
}

// Initialize scroll animations (optional enhancement)
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe cards for animation
  document.querySelectorAll('.jyotirlinga-card, .review-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

// Initialize scroll animations after a short delay
setTimeout(initScrollAnimations, 500);

console.log('Jyotirlinga Darshan Tours JavaScript initialized successfully!');