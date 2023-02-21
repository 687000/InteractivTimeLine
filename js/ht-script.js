const paintings = [
  {
    "image": "images/Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg",
    "title": "Declaration of the Rights of Man and of the Citizen",
    "author": "Jean-Jacques-François Le Barbier 1791",
    "intro":"painting 1 intro",
    "content":"event 1 content",
    "link":"link1",
    "eventBlock":1
  },
  {
    "image": "image.jpg",
    "title": "painting 2 title",
    "author": "painting 2 author",
    "intro":"painting 2 intro",
    "content":"event 2 content",
    "link":"link2",
    "eventBlock":2
  }

]
const events = [
  {
    "id":1,
    "year": "1791",
    "image": "image.jpg",
    "title": "card1",
    "time": "event 1 time",
    "intro":"event 1 intro",
    "content":"event 1 content",
    "link":"link1",
    "eventBlock":1
  },
  {
    "id":2,
    "year": "1792",
    "image": "image.jpg",
    "title": "card2",
    "time": "event 2 time",
    "intro":"event 2 intro",
    "content":"event 2 content",
    "link":"link2",
    "eventBlock":1
  },
  {
    "id":3,
    "year": "1793",
    "image": "image.jpg",
    "title": "card3",
    "time": "event 3 time",
    "intro":"event 3 intro",
    "content":"event 3 content",
    "link":"link3",
    "eventBlock":2
  },
  {
    "id":4,
    "year": "1794",
    "image": "image.jpg",
    "title": "card4",
    "time": "event 4 time",
    "intro":"event 4 intro",
    "content":"event 4 content",
    "link":"link4",
    "eventBlock":2
  },
  {
    "id":5,
    "year": "1795",
    "image": "image.jpg",
    "title": "card5",
    "time": "event 5 time",
    "intro":"event 5 intro",
    "content":"event 5 content",
    "link":"link5",
    "eventBlock":3
  },  
]
events.forEach(event=>{
  addEventCard(event.id,event.year,event.eventBlock,event.image,event.title,event.time);
});

function addEventCard(id,year,eventBlock,image, title, time){
  document.getElementById("event-cards-container").innerHTML +=
`                <div class="carousel-item" id-value='`+id+`' time-value='`+year+
`'event-block-value='`+eventBlock+`'  style='transition:0.3s ease-out;'>
                    <img src="`+image+`">
                    <h3>`+title+`</h3>
                    <p>`+time+`</p>
                </div>
`;
}
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselPrev = document.querySelectorAll('.carousel-prev');
const carouselNext = document.querySelectorAll('.carousel-next');
let currentIndex = 0;
carouselItems[0].classList.add('current-card');
carouselItems[1].classList.add('next-card');
const eventIntroContainer = document.querySelector('.event-intro-container');
updateEventIntro(events[0].intro,events[0].content,events[0].link);
function updateEventIntro(intro,content,link){
  eventIntroContainer.innerHTML=`
                <h3>`+intro+`</h3>
                <p>`+content+`</p>`;
}
window.addEventListener('click',(e)=>{
    const cardPrev = document.querySelector('.prev-card');
    const cardNext = document.querySelector('.next-card');
    const cardCurrent = document.querySelector('.current-card');
    if (cardPrev!==null && cardPrev.contains(e.target)) {
        moveToPrevCard();
    } 
    else if(cardNext!==null &cardNext.contains(e.target))
    {
        moveToNextCard();
    }
    else if (cardCurrent!==null && cardCurrent.contains(e.target)) {
        const targetLink=events[cardCurrent.getAttribute("id-value")-1].link;
        window.open(targetLink, '_blank');
    } 
});
carouselPrev.forEach(item => {
  item.addEventListener('click', () => {
    moveToPrevCard();
});
});
carouselNext.forEach(item=>{
  item.addEventListener('click', () => {
    moveToNextCard()
});
});
function emptyCardClasses() {
  carouselItems.forEach(item => {
    item.classList.remove("prev-card");
    item.classList.remove("current-card");
    item.classList.remove("next-card");
    item.style.transform="default";
  });
}
function moveToPrevCard(){
  emptyCardClasses();
  const moveCurrentDown=carouselItems[currentIndex];
  moveCurrentDown.classList.remove("prev-card");
  moveCurrentDown.classList.remove("current-card");
  moveCurrentDown.classList.add("next-card");
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  updateEventIntro(events[currentIndex].intro,events[currentIndex].content,events[currentIndex].link);
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
  updatePainting();
}
function moveToNextCard(){
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
  updateEventIntro(events[currentIndex].intro,events[currentIndex].content,events[currentIndex].link);
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
  updatePainting();
}
const paintingContainer = document.querySelector('.paint-paint');
const paintingIntro = document.querySelector('.paint-intro-container');
const eventCardsContainer = document.querySelector('.event-cards-container');
const eventContainer = document.querySelector('.event-container');

paintingContainer.addEventListener('mouseover', () => {
  paintingIntro.style.display="block";
  eventIntroContainer.style.display="none";
  eventCardsContainer.style.display="none";
  eventContainer.style.gridTemplateRows = '90%';
  updatePaintingInfor();
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
setTimeNumber(events[0].year);
updatePainting();
function updatePainting(){
  const paintIndex=getCurrentPainting();
  document.getElementById("painting-container").style.backgroundImage = "url('"+paintings[paintIndex].image+"')";
  document.querySelector('.painting-banner h3').innerHTML=paintings[paintIndex].title;
  document.querySelector('.painting-banner p').innerHTML=paintings[paintIndex].author;
}
function updatePaintingInfor(){
  const paintIndex=getCurrentPainting();
  document.querySelector('.paint-intro-container h3').innerHTML=paintings[paintIndex].intro;
  document.querySelector('.paint-intro-container p').innerHTML=paintings[paintIndex].content;
  paintingContainer.href=paintings[paintIndex].link;
}
function getCurrentPainting(){
  let currentEventIndex = document.querySelector('.current-card').getAttribute('event-block-value');
  return paintings.findIndex(item => item.eventBlock == currentEventIndex);
}

