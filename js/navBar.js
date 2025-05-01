function hambergerMenu() {
    let menu = document.getElementById("navBar");
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }

window.addEventListener("resize", () => {
const nav = document.getElementById("navBar");
if (window.innerWidth > 768) {
    nav.style.display = "flex";
} else {
    nav.style.display = "none";
}
});
  