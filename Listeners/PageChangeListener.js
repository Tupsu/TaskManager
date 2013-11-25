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
 * Listens for page change events and updates task list UI.
 * @author Teemu Räsänen
 */
$(document).ready(function() {
    "use strict";
    
    // Load tasks after changePage(arg) call
    $(document).on("pagechange", function (event) {
        if ($.mobile.activePage.attr('id') === "mainPage") {
            // Get tasks
            if (isTokenSet()) {
                getAvailableTasks(localStorage.getItem(Strings.token), Strings.activity, Strings.subQueryTaskStateRdy);
            }
        }
    });
});