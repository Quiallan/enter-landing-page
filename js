//enter.js

// Function to initialize Navbar Features
function initializeNavbarFeatures() {
    // Rotating quotes
    let quotes = ["Quote 1", "Quote 2", "Quote 3"];
    let currentQuoteIndex = 0;
    let textSliderElement = document.querySelector(".text-slider");
  
    setInterval(function() {
      textSliderElement.innerHTML = quotes[currentQuoteIndex];
      textSliderElement.style.animation = "none";
      setTimeout(() => {
        textSliderElement.style.animation = "moveUp 1s ease-in-out";
      }, 0);
      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }, 7000);
  
    // Dark Mode Toggle
    let toggleSwitchElement = document.querySelector(".slider");
    let toggleLabelElement = document.querySelector(".toggle-label");
    let circleElement = document.querySelector(".circle");
    let isDarkMode = false;
  
    toggleSwitchElement.addEventListener("click", function() {
      isDarkMode = !isDarkMode;
      if (isDarkMode) {
        toggleLabelElement.textContent = "On";
        document.body.style.backgroundColor = "black";
      } else {
        toggleLabelElement.textContent = "Off";
        document.body.style.backgroundColor = "white";
      }
      circleElement.style.left = isDarkMode ? "27.5px" : "2.5px";
    });
  
    // Scrolling Text
    let scrollingTextElement = document.querySelector(".scrolling-text");
    let textContent = "The Matrix is everywhere, Neo.";
    scrollingTextElement.innerHTML = textContent;
  
    setInterval(function() {
      let firstChar = textContent.charAt(0);
      let remainingText = textContent.slice(1);
      textContent = remainingText + firstChar;
      scrollingTextElement.innerHTML = textContent;
    }, 200);
  }
  
  // Fetch navbar.html and insert its content into the div with id="navbar"
  fetch('navbar.html')
    .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
      initializeNavbarFeatures();  // Initialize navbar features after it is loaded
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
//matrix canvas code  
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
characters = characters.split("");
var fontSize = 10;
var columns = canvas.width / fontSize;
var drops = [];
for (var x = 0; x < columns; x++) drops[x] = 1;

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px arial";
    for (var i = 0; i < drops.length; i++) {
        var text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}

setInterval(draw,33);
// added for responsiveness. 
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = canvas.width / fontSize;
    drops = [];
    for (var x = 0; x < columns; x++) drops[x] = 1;
}

window.addEventListener('resize', () => {
    setCanvasSize();
    draw();
});
setCanvasSize();

// Script for the Enter Button
const enterButton = document.getElementById('enterButton');

enterButton.addEventListener('click', () => {
    enterButton.classList.add('clicked');
    setTimeout(() => {
        window.location.href = "enter.html"; // Redirect to Matrix.html after the button animation
    }, 500); // Adjust the delay as needed
});
