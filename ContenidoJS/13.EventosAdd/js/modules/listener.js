"use strict";

import { promedioFn } from "./funcionPromediar.js";

function evento(button){
    button.addEventListener("click", function() {
    promedioFn();
});

}
export { evento as eventoListener};