function myFunction() {
  let x = document.getElementById("menu");
  let y = document.getElementById("flip");
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.style.transform = "rotateY(0deg)";
  } else {
    x.style.display = "flex";
    y.style.transform = "rotateY(-180deg)";
  }
}