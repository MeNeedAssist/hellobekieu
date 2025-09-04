// Falling hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
  setInterval(createHeart, 500);
  
  // Music toggle
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("musicBtn");
  let isPlaying = false;
  
  musicBtn.addEventListener("click", () => {
    if (isPlaying) {
      music.pause();
      musicBtn.className = "fa-solid fa-volume-xmark music-toggle"; // muted icon
    } else {
      music.play();
      musicBtn.className = "fa-solid fa-volume-high music-toggle"; // playing icon
    }
    isPlaying = !isPlaying;
  });


  // Typewriter effect
function typeWriter(element, text, delay = 80, callback) {
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, delay);
      } else if (callback) {
        callback();
      }
    }
    typing();
  }
  
  // Run typing effect in sequence
  window.onload = () => {
    const title = document.getElementById("title");
    const message = document.getElementById("message");
  
    const titleText = title.getAttribute("data-text");
    const messageText = message.getAttribute("data-text");
  
    typeWriter(title, titleText, 100, () => {
      // After title finishes, type message
      setTimeout(() => {
        typeWriter(message, messageText, 50, () => {
          // After message finishes, show next button
          nextBtn.classList.add("show");
        });
      }, 500);
    });
  };
  
  