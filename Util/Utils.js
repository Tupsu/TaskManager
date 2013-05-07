/*
 * Checks if token exists.
 */
function  isTokenSet() {
    "use strict";
    
    if (localStorage.getItem(Strings.token)) {
        return true;
    }
    return false;
}