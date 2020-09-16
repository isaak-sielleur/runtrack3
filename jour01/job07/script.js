    function jourtravaille(date) {
        var a = date;
        var test = false;
        var datechaine = date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
        tabdate = [
            new Date(2020, 0, 1),
            new Date(2020, 3, 13),
            new Date(2020, 4, 1),
            new Date(2020, 4, 8),
            new Date(2020, 4, 21),
            new Date(2020, 5, 1),
            new Date(2020, 6, 14),
            new Date(2020, 7, 15),
            new Date(2020, 10, 1),
            new Date(2020, 10, 11),
            new Date(2020, 11, 25)
        ];
        i = 0;
        if (a.getDay() != 0 && a.getDay() != 6) {
            while (tabdate.length > i) {
                if (tabdate[i].getDate() == a.getDate() && tabdate[i].getMonth() == a.getMonth() && tabdate[i].getFullYear() == a.getFullYear()) {
                    console.log("Le ", datechaine, "est un jour férié");
                    test = true;
                    break;
                }
                i++;
            }
        } else {
            test = true;
            console.log("Non,", datechaine, "est un week-end");
        }

        if (test == false) {
            console.log("Oui,", datechaine, "est un jour travaillé ");
        }

    }
    d = new Date(2020, 2, 1);
    jourtravaille(d);