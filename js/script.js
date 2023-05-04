const nav = document.querySelector(".nav");
const toggle = document.querySelector(".navbar-toggler");
const overlay = document.querySelector(".overlay");
const img = document.querySelectorAll("img");

toggle.addEventListener("click", () => {
    const visibility = nav.getAttribute('data-visible')
    nav.classList.add("trans")
    if (visibility === "false") {
        nav.setAttribute("data-visible", "true")
        toggle.setAttribute("aria-expanded", "true")
        overlay.setAttribute("aria-expanded", "true")
    } else if(visibility === "true") {
        nav.setAttribute("data-visible", "false")
        toggle.setAttribute("aria-expanded", "false")
        overlay.setAttribute("aria-expanded", "false")
    }
})

// link close
const links = document.querySelectorAll(".nav-item");

links.forEach(link => {
    link.addEventListener("click", () => 
    {
        visibility = nav.getAttribute('data-visible')
        if(visibility === "true") {
            nav.setAttribute("data-visible", "false")
            toggle.setAttribute("aria-expanded", "false")
            overlay.setAttribute("aria-expanded", "false")} 
    })
})

