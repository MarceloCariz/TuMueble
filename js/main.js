document.addEventListener("DOMContentLoaded", function () {
  const burger_show = document.querySelector(".burger-show");
  const burger = document.querySelector(".burger-click");

  burger.addEventListener("click", function () {
    if (burger_show.classList.contains("hidden")) {
      burger_show.classList.remove("hidden");

      burger_show.classList.add("block");
    } else {
      burger_show.classList.remove("block");

      burger_show.classList.add("hidden");
    }
    // console.log("Hola");
  });
});
