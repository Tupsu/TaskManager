$(document).ready(function() {
	 // Check if user is logged in
    if (isTokenSet()) {
        // Get tasks
        getAvailableTasks(localStorage.getItem('token'), "ACTIVITY", "T._state = TaskState.READY");
    } else {
        // User is not logged in -> load login page
        $.mobile.changePage('/TaskManager/Login/Login.html');
    }
});

