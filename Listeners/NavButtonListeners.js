$(document).ready(function() {
    
    // Click handler for recieved tasks button (decision)
    $('#recievedTasks').click(function() {
        // Clear tasklist
        $('#taskList').find('li').remove();
        // Get tasks
        getAvailableTasks(localStorage.getItem('token'), "ACTIVITY", "T._state = TaskState.READY");
    });
    
    // Click handler for handled tasks  button (notify)
    $('#handledTasks').click(function() {
        $('#taskList').find('li').remove();
        // Get notification tasks
        getAvailableTasks(localStorage.getItem('token'), "NOTIFICATION", "T._state = TaskState.READY");
    });
    
    // Click handler for create task button (init)
    $('#createTask').click(function() {
        $('#taskList').find('li').remove();
        // Get init tasks
        getAvailableTasks(localStorage.getItem('token'), "INIT", "");
    });
});