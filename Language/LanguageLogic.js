$(document).ready(function() {
    $('#recievedTasks .ui-btn-text').text(Lang.btn_recieved_tasks);
    $('#handledTasks .ui-btn-text').text(Lang.btn_handled_tasks);
    $('#createTask .ui-btn-text').text(Lang.btn_create_task);
    $('title').text(Lang.title);
    $('.ui-title').text(Lang.title);
    $('#taskList').attr('data-filter-placeholder', Lang.search_tasks);
    $('form div input').attr('placeholder', Lang.search_tasks);
    $('#labelUsername').text(Lang.username);
    $('#labelPassword').text(Lang.password);
    $('#btn_login .ui-btn-text').text(Lang.btn_login);
});