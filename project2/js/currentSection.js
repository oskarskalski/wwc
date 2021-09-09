const changeNavPosition = () => {
    let header = document.querySelector('#home')
    let about = document.querySelector('#about');
    let services = document.querySelector('#services')
    let gallery = document.querySelector('#gallery')
    let blog = document.querySelector("#blog")
    let contact = document.querySelector("#contact")

    let aboutPosition = about.offsetTop
    let servicesPosition = services.offsetTop
    let galleryPosition = gallery.offsetTop
    let blogPosition = blog.offsetTop
    let contactPosition = contact.offsetTop
    let i = 0;

    let headerHeight = header.offsetHeight

    let sections = []
    document.querySelectorAll(".nav-list__list-element")
        .forEach(e => sections.push(e))

    document.addEventListener('scroll', function () {

        [].forEach.call(sections, el => {
            el.classList.remove("current-section");
        });

        let scrollPosition = window.pageYOffset
        scrollPosition += 100
        if (scrollPosition > contactPosition) {
            i = 5
        } else if (scrollPosition > blogPosition) {
            i = 4
        } else if (scrollPosition > galleryPosition) {
            i = 3;
        } else if (scrollPosition > servicesPosition) {
            i = 2;
        } else if (scrollPosition > aboutPosition) {
            i = 1;
        } else {
            i = 0
        }

        sections[i].classList.add("current-section")
    }, false)
}

changeNavPosition()