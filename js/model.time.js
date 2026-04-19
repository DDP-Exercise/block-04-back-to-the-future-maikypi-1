"use strict";

/* 1. Where do I store my time? (in a variable inside my class - TimeModel: everything related to time belongs in this class) */
export class TimeModel {
    constructor() {
        /* constructor = sets the clock to the current time*/
        this.time = new Date();
    }

    /* 2. Add one second to update the clock */
    tick() {
        this.time.setSeconds(this.time.getSeconds() + 1); /* setSeconds = sets the new time, getSeconds gets the current seconds and adds 1 */
    }

        /*  3. return the hours */

        getHours()
        {
            return this.time.getHours();
        }

        /* 4. return the minutes */

        getMinutes()
        {
            return this.time.getMinutes();
        }

        /*  5. return the seconds */

        getSeconds()
        {
            return this.time.getSeconds();
        }


        /* Safe Time */
        saveTime()
        {
            localStorage.setItem("time", this.time.toString());
        }

        }