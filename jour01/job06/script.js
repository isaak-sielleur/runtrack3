    function fizzbuzz() {
        var nombre = 1;
        var text1 = "Fizz";
        var text2 = "Buzz";
        var text3 = "FizzBuzz";

        while (nombre <= 151) {
            if (nombre % 3 == 0 || nombre % 5 == 0) {
                if (nombre % 3 == 0 && nombre % 5 != 0) {
                    console.log(text1);
                }

                if (nombre % 5 == 0 && nombre % 3 != 0) {
                    console.log(text2);
                }

                if (nombre % 3 == 0 && nombre % 5 == 0) {
                    console.log(text3);
                }
            } else {
                console.log(nombre);
            }
            nombre++;
        }
    }
    fizzbuzz();