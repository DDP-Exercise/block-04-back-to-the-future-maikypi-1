"use strict";
/*******************************************************
 *     Back to the Future - 100p
 *
 *     Marty! Marty can you read me? This is Doc Brown,
 *     im messaging you from the Year of 1955!
 *
 *     The Flux Capacitor worked and I traveled back in time!
 *     I don't have time to explain all the details, but
 *     time itself is of the essence Marty! As proud as I am
 *     of my achievement, it seems like I can't come back to
 *     the future. At least not without your help!
 *
 *     Do you remember the Wrist-watch I gave you? You need
 *     to sync its hands to match the digital clock of the
 *     Delorean! Only when they are perfectly in sync, the
 *     Flux Capacitor can bring me back to 1985!
 *
 *     I think it's best to create a model first, which keeps
 *     track of the true time. Once we got that, we can sync
 *     the two clocks in separate views. Yours, analogue and
 *     animated, mine digital. Use this controller file to
 *     glue everything together!
 *
 *     Our clocks should be synced in no-time! Got it?
 *     No - Time! *laughs nervously*. Unfortunatley, I only
 *     have enough fuel for one ride. So we need to be 100%
 *     certain that it works. I'd suggest you add a button somewhere
 *     that saves the current time into the localStorage.
 *
 *     Now hurry Marty! Or I will be stuck in the past forever!
 *
 *     Doc Brown - 1955-11-05
 *
 *     MaikyPi - 2026-04-19
 *******************************************************/

/* HINT:
setInterval(functionName, 1000); will call functionName() every 1000 miliseconds.*/

/* Info: controller.js = responsible for importing everything and creating the objects (acts as coordinator) */

/*  1. TimeModel import */


import {TimeModel} from "./model.time.js";
import {ViewDigital} from "./view.digital.js";
import {ViewAnalog} from "./view.analagoue.js";

const CLOCK = new TimeModel();
const DIGITAL = new ViewDigital();
const ANALOG = new ViewAnalog();

DIGITAL.timeUpdate(CLOCK);

/* 2. time update */

function update() {
    CLOCK.tick();
    DIGITAL.timeUpdate(CLOCK);
    ANALOG.updateTime(CLOCK);
}

setInterval(update, 1000); /* Updates the clock every second (1000 ms = 1 second) */

/* 3. Button and the event "click" */

const BUTTON = document.getElementById("saveTime");

BUTTON.addEventListener("click", function() {
    CLOCK.saveTime();
    console.log("Button is clicked and time is saved :-) ");
    BUTTON.textContent = "Saved!";
    BUTTON.classList.add("saved"); /* I create a class => to be able to change the design, after the button is clicked */
});