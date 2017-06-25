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

    document.querySelector("#delete").addEventListener("click", function() {

        outputDiv.innerHTML = "";
        errorMessage.innerHTML = "";

    }, false);
