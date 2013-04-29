$(document).ready(function() {
    
    // Click handler for recieved tasks button (decision)
    $('#recievedTasks').click(function() {
        clearTaskList();
        // Get tasks
        getAvailableTasks(localStorage.getItem('token'), "ACTIVITY", "T._state = TaskState.READY");
    });
    
    // Click handler for handled tasks  button (notify)
    $('#handledTasks').click(function() {
        clearTaskList();
        // Get notification tasks
        getAvailableTasks(localStorage.getItem('token'), "NOTIFICATION", "T._state = TaskState.READY");
    });
    
    // Click handler for create task button (init)
    $('#createTask').click(function() {
        clearTaskList();
        // Get init tasks
        getAvailableTasks(localStorage.getItem('token'), "INIT", "");
    });
});

/*
 * Removes every li element from tasklist
 *
 */
function clearTaskList() {
    $('#taskList').find('li').remove();
}