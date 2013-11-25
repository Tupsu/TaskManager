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
 * Localisation core logic
 * @author Teemu Räsänen
 */
$(document).ready(function() {
    "use strict";
    
    // Translate page when page is loaded
    translatePage();
    // Translate page when page is changed via changePage(...)
    $(document).on("pagechange", function (event) {
        translatePage();
    });
});

function translatePage() {
    "use strict";
    
    if ($.mobile.activePage.attr('id') === Strings.mainPageId) {
        $('#recievedTasks .ui-btn-text').text(Lang.btn_recieved_tasks);
        $('#handledTasks .ui-btn-text').text(Lang.btn_handled_tasks);
        $('#createTask .ui-btn-text').text(Lang.btn_create_task);
        $('title').text(Lang.title);
        $('#taskList').attr('data-filter-placeholder', Lang.search_tasks);
        $('form div input').attr('placeholder', Lang.search_tasks);
        $('#logout .ui-btn-text').text(Lang.btn_logout);
    }
    
    if ($.mobile.activePage.attr('id') === Strings.loginPageId) {
        $('#labelUsername').text(Lang.username);
        $('#labelPassword').text(Lang.password);
        $('#btn_login .ui-btn-text').text(Lang.btn_login);
        $('title').text(Lang.login_title);
    }
}