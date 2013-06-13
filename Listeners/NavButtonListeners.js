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