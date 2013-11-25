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
 * Check if user is logged in and either update task list UI or load login page.
 * @author Teemu Räsänen
 */
// Wait until page is fully loaded. $(document).ready() causes incorrect page loading when using changePage(arg) on some browsers (WebKit)
$(window).load(function() {
    "use strict";
    
	// Check if user is logged in
    if (isTokenSet()) {
        // Get tasks
        getAvailableTasks(localStorage.getItem(Strings.token), Strings.activity, Strings.subQueryTaskStateRdy);
    } else {
        // User is not logged in -> load login page
        $.mobile.changePage(Strings.loginPageUrl);
    }
});