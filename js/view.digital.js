"use strict";

/* What should the digital view do?
   -> Get the time from the model (TimeModel) and display it in the HTML.
   Accessing it via: model.getHours(), model.getMinutes(), model.getSeconds() */

/* 1. Create a new class that can be used in other files, therefore I use export */

export class ViewDigital { /* ViewDigital class = blueprint for the digital clock; export allows reuse in other modules */
    constructor() {
        this.element = document.getElementById("digital-clock");
    }

    timeUpdate(CLOCK) {
        let H = CLOCK.getHours();
        let M = CLOCK.getMinutes();
        let S = CLOCK.getSeconds();

        /* Checks if the number is a single digit and adds a leading zero if necessary */
        if (H < 10) {
            H = "0" + H;
        }

        if (M < 10) {
            M = "0" + M;
        }

        if (S < 10) {
            S = "0" + S;
        }

        this.element.textContent = H + ":" + M + ":" + S;
    }
}