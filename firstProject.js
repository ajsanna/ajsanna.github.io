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
  images[currentIndex].style.opacity = '1'; // Fade