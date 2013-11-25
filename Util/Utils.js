/** 
 	This file is part of TaskManager.

    TaskManager is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    TaskManager is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with TaskManager.  If not, see <http://www.gnu.org/licenses/>.
 **/

/**
 * Common util functions.
 * @author Teemu Räsänen
 */

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