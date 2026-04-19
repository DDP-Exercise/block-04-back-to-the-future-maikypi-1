"use strict";

export class ViewAnalog {
    constructor() {
        this.hour = document.getElementById("hour");
        this.minute = document.getElementById("minute");
        this.second = document.getElementById("second");
    }

    updateTime(time) {
        const H = time.getHours();
        const M = time.getMinutes();
        const S = time.getSeconds();

        const SECONDDEG = S * 6; /* Circle = 360°, 60 seconds fit into one circle → 360 / 60 = 6 */
        const MINUTEDEG = M * 6;
        const HOURDEG = ((H % 12) * 30 )+ M * 0.5; /* 360 / 12 = 30, because an analog clock has 12 hours */

/* Rotates the clock hands according to the calculated degrees (transform(=change it) : rotate)*/
        this.second.style.transform = "rotate(" + SECONDDEG + "deg)";
        this.minute.style.transform = "rotate(" + MINUTEDEG + "deg)";
        this.hour.style.transform = "rotate(" + HOURDEG + "deg)";

          }


}