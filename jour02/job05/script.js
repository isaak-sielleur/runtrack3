window.onload = () => {

    window.addEventListener("scroll", () => {

        let hauteur = document.documentElement.scrollHeight - window.innerHeight
        let position = window.scrollY
        let largeur = document.documentElement.clientWidth
        let barre = position / hauteur * largeur

        document.getElementById("progression").style.width = barre + "px"
    })
}

function scroll() {
    (document).on('scroll', function scroll() {

        let hauteur = (document).height() - (window).height()
        let position = (document).scrollTop()
        let largeur = (window).width()
        let barre = position / hauteur * largeur

            ("#progress").css("width", barre);
    })
}