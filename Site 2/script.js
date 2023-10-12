let popup = document.getElementById("popup")
let contente = document.getElementById("content")

function openPopup() {
  popup.classList.add("open-popup")
  contente.classList.add("hide-cont")
}

function closePopup() {
  popup.classList.remove("open-popup")
  contente.classList.remove("hide-cont")
}

