function moveRandomEl(elm) {
  // Ensure it has absolute positioning so it can break out of the container boundary
  elm.style.position = "fixed"; 
  
  // Calculate random coordinates based on the entire viewport width/height
  // Subtracting 100 to ensure the button doesn't fly off the edge of the screen
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 50));
  
  // Use transform translate for hardware-accelerated, ultra-smooth movement
  elm.style.left = "0px";
  elm.style.top = "0px";
  elm.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  // "mouseover" triggers faster than "mouseenter", making it harder to catch
  moveRandom.addEventListener("mouseover", function (e) {
    moveRandomEl(e.target);
  });
}

// --- Your Heart Animation Code Below remains the same ---
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️'; 
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 7000);
}
setInterval(createHeart, 100);