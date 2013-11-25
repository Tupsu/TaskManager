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
 * Navigation button listeners ex. listener for recieved tasks button.
 * @author Teemu Räsänen
 */
$(document).ready(function() {
    "use strict";
    
    // Click handler for recieved tasks button (decision)
    $('#recievedTasks').click(function() {
        clearTaskList();
        // Get tasks
        getAvailableTasks(localStorage.getItem(Strings.token), Strings.activity, Strings.subQueryTaskStateRdy);
    });
    
    // Click handler for handled tasks  button (notify)
    $('#handledTasks').click(function() {
        clearTaskList();
        // Get notification tasks
        getAvailableTasks(localStorage.getItem(Strings.token), Strings.notification, Strings.subQueryTaskStateRdy);
    });
    
    // Click handler for create task button (init)
    $('#createTask').click(function() {
        clearTaskList();
        // Get init tasks
        getAvailableTasks(localStorage.getItem(Strings.token), Strings.init, "");
    });
});