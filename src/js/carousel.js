const carouselItems = [
  {
    text: "Carla is the best! She made me the night's brightest star! She stayed with me the whole  wedding ensuring I always looked and felt wonderful!!",
    img: "/public/assets/images/font-images/Janny.png",
  },
  {
    text: "Carla Beauty's makeup for my photoshoot was outstanding! Their expertise and attention to detail made me look perfect in every shot. Highly recommend",
    img: "/public/assets/images/font-images/Ingrid.png",
  },
  {
    text: "Carla Beauty's party makeup service was amazing! The makeup lasted all night, keeping me flawless until the end. Thank you, Carla for an unforgettable experience!",
    img: "/public/assets/images/font-images/Marcela.png",
  },
];

let currentIndex = 0;

const quoteElement = document.querySelector(".quote");
const imageElement = document.querySelector(".testimonial-container__image"); // 画像表示用
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");

const updateQuotes = () => {
  const currentItem = carouselItems[currentIndex];

  quoteElement.textContent = currentItem.text;
  imageElement.src = currentItem.img;
};

arrowLeft.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateQuotes();
});

arrowRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateQuotes();
});

updateQuotes();
