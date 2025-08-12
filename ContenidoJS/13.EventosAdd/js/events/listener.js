"use strict";

import { promedioSweet } from "../modules/promediar.js";

function evento(button){
    button.addEventListener("click", function() {
    promedioSweet();
});

}
export { evento as evtListener};