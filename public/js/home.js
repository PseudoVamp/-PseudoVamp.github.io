const randomSquares = document.getElementById("randomSquares");

let run = 0;
const handleMouseOver = (eachSquare) => {
  // Generate a random x and y coordinate for the div to move to
  const newX = (Math.random() * window.innerWidth) / 1.1;
  const newY = (Math.random() * window.innerHeight) / 1.5;
  // - 200;

  // const newX = Math.floor(Math.random() * 100) + "vw";
  // const newY = Math.floor(Math.random() * (70 - 4)) + 4 + "vh";

  eachSquare.target.style.right = newX + "px";
  eachSquare.target.style.top = newY + "px";
  run++;
  if (run % 7 === 0) {
    console.log("Don't touch me!");
  }
  if (run % 7 === 1) {
    console.log("Excuse you!");
  }
  if (run % 7 === 2) {
    console.log("Whats your problem?");
  }
  if (run % 7 === 3) {
    console.log("Leave us alone!");
  }
  if (run % 7 === 4) {
    console.log("STRANGER DANGER!");
  }
  if (run % 7 === 5) {
    console.log("Help! Help! I'm being Repressed!");
  }
};

const createSquares = (x, y) => {
  for (let i = 0; i < 30; i++) {
    let squares = document.createElement("div");
    squares.className = "allSquares";
    x.appendChild(squares);
    squares.id = y + i;

    //   Math.random() * (max - min) + min;
    squares.style.width = Math.floor(Math.random() * (150 - 60)) + 60 + "px";
    squares.style.height = Math.floor(Math.random() * (150 - 60)) + 60 + "px";
    squares.style.right = Math.floor(Math.random() * 94) + "vw";
    squares.style.top = Math.floor(Math.random() * (70 - 4)) + 4 + "vh";
    squares.style.backgroundColor =
      "var(--bg-" + Math.floor(Math.random() * 6) + ")";

    const eachSquare = document.getElementById(`color${i}`);
    eachSquare.addEventListener("mouseover", handleMouseOver);
    // eachSquare.addEventListener("mouseover", handleMouseOut);
  }
};

createSquares(randomSquares, "color");

//making things animate on scroll in
//
//

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
