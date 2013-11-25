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
$(document).ready(function() {
    "use strict";
    
    $(document).on('click', '#btn_login', function() {
        if (!isTokenSet()) {
            var username = $('#username').val();
            var password = $('#password').val();  
            // authenticate->setToken->callback function->changePage
            authenticate(username, password, function() {
                $.mobile.changePage(Strings.mainPageUrl);
            });
        }
    });
    
    $(document).on('click', '#logout', function() {
        if (isTokenSet()) {
            logout();
            $.mobile.changePage(Strings.loginPageUrl);
        }
    });
});

/**
 * Logs out the current user
 */
function logout() {
    localStorage.removeItem(Strings.token);
    clearTaskList();
}