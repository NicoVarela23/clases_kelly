"use strict";

import { promedioFn } from "./funcionPromediar.js";

function evento(button){
    button.onclick = promedioFn;
}

export {evento as propiedadEvento};