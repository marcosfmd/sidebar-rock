let showMenuActive = document.querySelector(".menu")

showMenuActive.addEventListener("click", () => {
  document.querySelector(".logo").classList.toggle("change")
  document.querySelector(".header").classList.toggle("header-change")
  document.querySelector(".list-group").classList.toggle("list-group-change")
  document.querySelector(".input-search").classList.toggle("change")
  document.querySelector(".p1").classList.toggle("change")
  document.querySelector(".p2").classList.toggle("change")
  document.querySelector(".p3").classList.toggle("change")
  document.querySelector(".p4").classList.toggle("change")
  document.querySelector(".p5").classList.toggle("change")
  document.querySelector(".content-info-profile ").classList.toggle("content-info-profile-change")
  document.querySelector(".figure-imagem-description").classList.toggle("change")
  document.querySelector(".name-profiction").classList.toggle("change")

})


