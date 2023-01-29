const randomSquares = document.getElementById("randomSquares");

const handleMouseOver = (eachSquare) => {
  // Generate a random x and y coordinate for the div to move to
  const newX = Math.random() * window.innerWidth;
  const newY = Math.random() * window.innerHeight - window.innerHeight * 0.3;

  eachSquare.target.style.right = newX + "px";
  eachSquare.target.style.top = newY + "px";
};

const createSquares = (x, y) => {
  for (let i = 0; i < 40; i++) {
    let squares = document.createElement("div");
    squares.className = "allSquares";
    x.appendChild(squares);
    squares.id = y + i;

    //   Math.random() * (max - min) + min;
    squares.style.width = Math.floor(Math.random() * (150 - 60) + 60) + "px";
    squares.style.height = Math.floor(Math.random() * (150 - 60) + 60) + "px";
    squares.style.right = Math.floor(Math.random() * 100) + "vw";
    squares.style.top = Math.floor(Math.random() * 75) + "vh";
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
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
