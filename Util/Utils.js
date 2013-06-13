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

/*
 * Removes every li element from tasklist
 *
 */
function clearTaskList() {
    "use strict";
    
    $('#taskList').find('li').remove();
}