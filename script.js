const arrows = document.querySelectorAll(".arrow")
const movieLists = document.querySelectorAll(".movie-list")

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length
    let clickCounter = 0
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270)
        clickCounter++
        if ((itemNumber) - (4 + clickCounter) + (4 - ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`
        } else {
            movieLists[i].style.transform = "translateX(0)"
            clickCounter = 0
        }
    })
})

const toggle = document.querySelector(".toggle")
const itens = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle, .toggle-ball")

toggle.addEventListener("click", () => {
    itens.forEach(item => {
        item.classList.toggle("active")
    })
})