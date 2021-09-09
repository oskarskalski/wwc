let linkItems = document.querySelectorAll('.list-element__link')
let nodes = Array.prototype.slice.call(linkItems)
let id


nodes.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        if (id !== undefined)
            clearInterval(id)
        let currentPosition = window.pageYOffset
        let elementName = item.getAttribute('href').replace('#', '')
        let element = document.getElementById(elementName)
        let elementPosition = element.offsetTop

        let goUp = currentPosition < elementPosition

        let i = currentPosition;
        id = setInterval(function () {
            window.scrollTo(0, i)

            if (goUp) {
                i += 10
                if (i >= elementPosition)
                    clearInterval(id)
            } else {
                i -= 10

                if (i <= elementPosition)
                    clearInterval(id)
            }

        }, 1)
    }, false)
})
