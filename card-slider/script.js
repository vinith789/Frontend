const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  },

  // Animation reset
  on: {
    slideChangeTransitionStart: function () {
      const activeSlides = document.querySelectorAll('.swiper-slide-active .content-wrapper');
      activeSlides.forEach(slide => {
        slide.style.animation = 'none'; // Reset animation
        setTimeout(() => {
          slide.style.animation = ''; // Trigger reflow and animation
        }, 10);
      });
    }
  }
});

// Array containing user details
const user1 = [
  {
    name: "Sport Day",
    profession: "Jan 2019",
    image: "../image/Frame 1.png"
  },
  {
    name: "Pongal Festival",
    profession: "jan 2022",
    image: "../image/Frame 1.png"
  },
  {
    name: "Annual Day",
    profession: "dec 2024",
    image: "../image/Frame 1.png"
  },
  {
    name: "Symposium",
    profession: "jun 2024",
    image: "../image/Frame 1.png"
  },
  {
    name: "Hostal Day Celebration",
    profession: "jan 2019",
    image: "../image/Frame 1.png"
  }
];

const user2 = [
  {
    name: "std-1",
    profession: "Waht He Done",
    image: "../image/Frame 1.png"
  },
  {
    name: "std-2",
    profession: "Waht He Done",
    image: "../image/Frame 1.png"
  },
  {
    name: "std-3",
    profession: "Waht He Done",
    image: "../image/Frame 1.png"
  },
  {
    name: "std-4",
    profession: "Waht He Done",
    image: "../image/Frame 1.png"
  },
  {
    name: "std-5",
    profession: "Waht He Done",
    image: "../image/Frame 1.png"
  }
];

const user3 = [
  {
    name: "CSE",
    profession: "About CSE",
    image: "../image/Frame 1.png"
  },
  {
    name: "AI&DS",
    profession: "About AI&DS",
    image: "../image/Frame 1.png"
  },
  {
    name: "IT",
    profession: "About IT",
    image: "../image/Frame 1.png"
  },
  {
    name: "EEE",
    profession: "About EEE",
    image: "../image/Frame 1.png"
  },
  {
    name: "ECE",
    profession: "About ECE",
    image: "../image/Frame 1.png"
  },
  {
    name: "CIVIL",
    profession: "About CIVIL",
    image: "../image/Frame 1.png"
  },
  {
    name: "MECH",
    profession: "About MECH",
    image: "../image/Frame 1.png"
  }
];

// Function to generate and append cards
function generateCard() {
  const cardList = document.getElementById('card-list-1');

  user1.forEach(user => {
    const cardItem = document.createElement('div');
    cardItem.classList.add('card-item', 'swiper-slide');

    cardItem.innerHTML = `
      <div class="content-wrapper">
        <img src="${user.image}" alt="User Image" class="user-image">
        <h2 class="user-name">${user.name}</h2>
        <p class="user-profession">${user.profession}</p>
        <button class="message-button">Preview</button>
      </div>
    `;

    cardList.appendChild(cardItem);
  });
}

// Call the function to generate cards dynamically
generateCard();

function generateCard1() {
  const cardList = document.getElementById('card-list-2');

  user2.forEach(user => {
    const cardItem = document.createElement('div');
    cardItem.classList.add('card-item', 'swiper-slide');

    cardItem.innerHTML = `
      <div class="content-wrapper">
        <img src="${user.image}" alt="User Image" class="user-image">
        <h2 class="user-name">${user.name}</h2>
        <p class="user-profession">${user.profession}</p>
        <button class="message-button">Preview</button>
      </div>
    `;

    cardList.appendChild(cardItem);
  });
}

// Call the function to generate cards dynamically
generateCard1();

function generateCards() {
  const cardList = document.getElementById('card-list-3');

  user3.forEach(user => {
    const cardItem = document.createElement('div');
    cardItem.classList.add('card-item', 'swiper-slide');

    cardItem.innerHTML = `
      <div class="content-wrapper">
        <img src="${user.image}" alt="User Image" class="user-image">
        <h2 class="user-name">${user.name}</h2>
        <p class="user-profession">${user.profession}</p>
        <button class="message-button">Preview</button>
      </div>
    `;

    cardList.appendChild(cardItem);
  });
}

// Call the function to generate cards dynamically
generateCards();
