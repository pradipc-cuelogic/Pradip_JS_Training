    var outputDiv, outputValue, zero, period, operator, numLimit;

    var outputDiv = document.getElementById("result");

    var numbElem = document.querySelectorAll(".numb");

    var errorMessage = document.getElementById("errorMessage");

    var elemLength = numbElem.length;

    for (var i = 0; i < elemLength; i++) {

        numbElem[i].addEventListener("click", function() {

            numb = this.value;

            outputValue = outputDiv.innerHTML += numb;

            numLimit = outputValue.length;

            if (numLimit >= 10) {
            	errorMessage.innerHTML = "Max 10 inputs allowed.";
            }
            return false;
        });

    }

    // document.querySelector(".zero").addEventListener("click", function() {

    //     zero = this.value;

    //     if (outputDiv.innerHTML === "") {
    //         outputValue = outputDiv.innerHTML = zero;
    //     } else if (outputDiv.innerHTML === outputValue) {

    //         outputValue = outputDiv.innerHTML += zero;

    //     }

    // }, false);

    // document.querySelector(".period").addEventListener("click", function() {

    //     period = this.value;

    //     if (outputDiv.innerHTML === "") {

    //         output = outputDiv.innerHTML = outputDiv.innerHTML.concat("0.");

    //     } else if (outputDiv.innerHTML === output) {

    //         outputDiv.innerHTML = outputDiv.innerHTML.concat(".");

    //     }

    // }, false);


    // document.querySelector("#equal").addEventListener("click", function() {

    //     if (outputDiv.innerHTML === output) {

    //         outputDiv.innerHTML = eval(output);
    //     } else {
    //         outputDiv.innerHTML = "";
    //     }

    // }, false);

    document.querySelector("#delete").addEventListener("click", function() {

        outputDiv.innerHTML = "";
        errorMessage.innerHTML = "";

    }, false);


    // var elem1 = document.querySelectorAll(".operator");

    // var len1 = elem1.length;

    // for (var i = 0; i < len1; i++) {

    //     elem1[i].addEventListener("click", function() {

    //         operator = this.value;

    //         if (outputDiv.innerHTML === "") {

    //             outputDiv.innerHTML = outputDiv.innerHTML.concat("");

    //         } else if (outputValue) {

    //             outputDiv.innerHTML = outputValue.concat(operator);

    //         }

    //     }, false);

    // }
