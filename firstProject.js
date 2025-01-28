console.log("Hello World");

const button = document.getElementById("MyBlog");
const targetSection = document.getElementById('myblog');
const GoodReadsButton = document.getElementById("BF");
const LinkedInButton = document.getElementById("MyLinkedIn");
const ProjectsButton = document.getElementById("Projects");
const targetSection2 = document.getElementById('AboutMe');
const targetSection3 = document.getElementById('mySkills');

// Add an event listener to the buttons
button.addEventListener("click", function() {
	targetSection.scrollIntoView({ behavior: 'smooth' });});

GoodReadsButton.addEventListener("click", function() {
	targetSection.scrollIntoView({ behavior: 'smooth' });});

LinkedInButton.addEventListener("click", function() {
	targetSection2.scrollIntoView({ behavior: 'smooth' });});

ProjectsButton.addEventListener("click", function() {
	targetSection3.scrollIntoView({ behavior: 'smooth' });});



const imageSlider = document.getElementById('ImageContainer');
const images = imageSlider.querySelectorAll('img');
let currentIndex = 0;

function cycleImages() {
	images[currentIndex].style.opacity = '0'; // Fade out the current image
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.opacity = '1'; // Fade in the next image
}
const imageSlider2 = document.getElementById('ImageContainer2');
const images2 = imageSlider2.querySelectorAll('img');
let currentIndex2 =0;

function cycleImages2() {
	images2[currentIndex2].style.opacity = '0'; // Fade out the current image
  currentIndex2 = (currentIndex2 + 1) % images.length;
  images2[currentIndex2].style.opacity = '1'; // Fade in the next image
}

const imageSlider3 = document.getElementById('ImageContainer3');
const images3 = imageSlider3.querySelectorAll('img');
let currentIndex3 =0;

function cycleImages3() {
	images3[currentIndex3].style.opacity = '0'; // Fade out the current image
  currentIndex3 = (currentIndex3 + 1) % images.length;
  images3[currentIndex3].style.opacity = '1'; // Fade in the next image
}

const imageSlider4 = document.getElementById('ImageContainer4');
const images4 = imageSlider4.querySelectorAll('img');
let currentIndex4 =0;

function cycleImages4() {
	images4[currentIndex4].style.opacity = '0'; // Fade out the current image
  currentIndex4 = (currentIndex4 + 1) % images.length;
  images4[currentIndex4].style.opacity = '1'; // Fade in the next image
}

const imageSlider5 = document.getElementById('ImageContainer5');
const images5 = imageSlider5.querySelectorAll('img');
let currentIndex5=0;

function cycleImages5() {
	images5[currentIndex5].style.opacity = '0'; // Fade out the current image
  currentIndex5 = (currentIndex5 + 1) % images.length;
  images5[currentIndex5].style.opacity = '1'; // Fade in the next image
}

const imageSlider6 = document.getElementById('ImageContainer6');
const images6 = imageSlider6.querySelectorAll('img');
let currentIndex6=0;

function cycleImages6() {
	images6[currentIndex6].style.opacity = '0'; // Fade out the current image
  currentIndex6 = (currentIndex6 + 1) % images.length;
  images6[currentIndex6].style.opacity = '1'; // Fade in the next image
}

setInterval(cycleImages6, 3000);
setInterval(cycleImages5, 3000);
setInterval(cycleImages4, 3000);
setInterval(cycleImages3, 5000);
setInterval(cycleImages2, 3000);
setInterval(cycleImages, 5000); // Change images every 5 seconds
