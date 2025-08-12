"use strict";

import { promedioSweet } from "../modules/promediar.js";

function evento(button){
    button.onclick = promedioSweet;
}

export {evento as evtPropiedad};