const nav = () => {
    const navBtn = document.querySelector(".nav-list__open-nav-button")

    navBtn.addEventListener('click', () => {
        const navList = document.querySelector(".page-nav__nav-list")
        navList.classList.toggle("disable-element")
        navList.classList.toggle("page-nav-animation")
    }, false)
}

nav()