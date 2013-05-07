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
    }
    
    if ($.mobile.activePage.attr('id') === Strings.loginPageId) {
        $('#labelUsername').text(Lang.username);
        $('#labelPassword').text(Lang.password);
        $('#btn_login .ui-btn-text').text(Lang.btn_login);
        $('title').text(Lang.login_title);
    }
}