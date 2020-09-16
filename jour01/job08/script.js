    var n = 8;
    var p = 22;

    function nombrepremier(n, p) {

        var test = true;
        var testb = true;

        for (var div = 2; div < n; div++) {

            var calcule = n % div;
            if (calcule == 0) {
                test = false;
                break;
            }

        }
        for (var div = 2; div < p; div++) {
            var calcule = p % div;
            if (calcule == 0) {
                testb = false;
                break;
            }

        }

        console.log(test, testb);
        if (test == true && testb == true) {
            console.log(n + p);
        } else {
            console.log(test, testb);
        }
    }

    nombrepremier(n, p);