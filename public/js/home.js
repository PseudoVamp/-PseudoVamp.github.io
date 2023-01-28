const randomSquares = document.getElementById("randomSquares");

const handleMouseOver = (eachSquare) => {
  // Generate a random x and y coordinate for the div to move to
  const newX = Math.random() * window.innerWidth;
  const newY = Math.random() * window.innerHeight;

  //   const currentX = this.target.style.left;
  //   const currentY = this.target.style.top;

  eachSquare.target.style.left = newX + "px";
  eachSquare.target.style.top = newY + "px";
};
// const handleMouseOut = (eachSquare) => {
//   // Put the square back to its original position
//   eachSquare.target.style.left = "0px";
//   eachSquare.target.style.top = "0px";
// };

const createSquares = (x, y) => {
  for (let i = 0; i < 25; i++) {
    let squares = document.createElement("div");
    squares.className = "allSquares";
    x.appendChild(squares);
    squares.id = y + i;

    //   Math.random() * (max - min) + min;
    squares.style.width = Math.floor(Math.random() * (150 - 50) + 50) + "px";
    squares.style.height = Math.floor(Math.random() * (150 - 50) + 50) + "px";
    squares.style.right = Math.floor(Math.random() * 100) + "vw";
    squares.style.top = Math.floor(Math.random() * 100 + 7) + "vh";
    squares.style.backgroundColor =
      "var(--bg-" + Math.floor(Math.random() * 5) + ")";

    const eachSquare = document.getElementById(`color${i}`);
    eachSquare.addEventListener("mouseover", handleMouseOver);
    // eachSquare.addEventListener("mouseout", handleMouseOut);
  }
};

createSquares(randomSquares, "color");
