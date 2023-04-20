const ham = document.getElementsByClassName("hamburger")[0];
const mob = document.getElementsByClassName("mobileNav")[0];

ham.addEventListener("click", () => {
  if (mob.classList.contains("hide")) {
    mob.classList.remove("hide");
    mob.classList.add("show");
  } else if (mob.classList.contains("show")) {
    mob.classList.remove("show");
    mob.classList.add("hide");
  }
});
