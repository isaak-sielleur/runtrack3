    var konami = "";
    var b = document.body;
    console.log(b);

    window.addEventListener('keydown', function(event) {
        var key = event.key;
        konami += key;

        if (konami == "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRight") {

            console.log('Code utilisé');

            var header = document.createElement('header');
            var main = document.createElement('main');
            var footer = document.createElement('footer');

            header.textContent = "header";
            b.appendChild(header);

            main.textContent = 'La Plateforme.io';
            b.appendChild(main);

            footer.textContent = "contact";
            b.appendChild(footer);

            // header.append(titre);
            // main.append(titremain);
            // footer.append(titrefooter);

        }
    })