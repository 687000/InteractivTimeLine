const carouselItems = document.querySelectorAll('.carousel-item');
const carouselPrev = document.querySelectorAll('.carousel-prev');
const carouselNext = document.querySelectorAll('.carousel-next');
let currentIndex = 0;

carouselPrev.forEach(item => {
  item.addEventListener('click', () => {
  emptyCardClasses();
  const moveCurrentDown=carouselItems[currentIndex];
  moveCurrentDown.classList.remove("prev-card");
  moveCurrentDown.classList.remove("current-card");
  moveCurrentDown.classList.add("next-card");
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  const movePrevDown=carouselItems[currentIndex];
  const currentYear=movePrevDown.getAttribute("time-value");
  setTimeNumber(currentYear);
  movePrevDown.classList.remove("next-card");
  movePrevDown.classList.remove("prev-card");
  movePrevDown.classList.add("current-card"); 
  prevIndex=currentIndex-1;
  if (prevIndex < 0) {
    prevIndex = carouselItems.length - 1;
  }
  carouselItems[prevIndex].classList.add("prev-card");
});
});

carouselNext.forEach(item=>{
  item.addEventListener('click', () => {
  emptyCardClasses();
  const moveCurrentUp=carouselItems[currentIndex];
  moveCurrentUp.classList.remove("next-card");
  moveCurrentUp.classList.remove("current-card");
  moveCurrentUp.classList.add("prev-card");
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
    moveCurrentUp.style.transform=0;
  }
  const moveNextUp=carouselItems[currentIndex];
  const currentYear=moveNextUp.getAttribute("time-value");
  setTimeNumber(currentYear);
  moveNextUp.classList.remove("next-card");
  moveNextUp.classList.remove("prev-card");
  moveNextUp.classList.add("current-card");
  nextIndex=currentIndex+1;
  if (nextIndex >=carouselItems.length) {
    nextIndex = 0;
  }
  carouselItems[nextIndex].classList.add("next-card");
});
});
function emptyCardClasses() {
  carouselItems.forEach(item => {
    item.classList.remove("prev-card");
    item.classList.remove("current-card");
    item.classList.remove("next-card");
  });
}

const paintingContainer = document.querySelector('.paint-paint');
const paintingIntro = document.querySelector('.paint-intro-container');
const eventIntroContainer = document.querySelector('.event-intro-container');
const eventCardsContainer = document.querySelector('.event-cards-container');
const eventContainer = document.querySelector('.event-container');

paintingContainer.addEventListener('mouseover', () => {
  paintingIntro.style.display="block";
  eventIntroContainer.style.display="none";
  eventCardsContainer.style.display="none";
  eventContainer.style.gridTemplateRows = '90%';
});


paintingContainer.addEventListener('mouseout', () => {
  paintingIntro.style.display="none";
  eventIntroContainer.style.display="grid";
  eventCardsContainer.style.display="block";
  eventContainer.style.gridTemplateRows = '60% 40%';
});

const verticalTime = document.getElementById('vertical-time');
const horizontalTime=document.getElementById('horizontal-time')
function setTimeNumber(number){
  verticalTime.innerHTML=number;
  horizontalTime.innerHTML=number;
}
