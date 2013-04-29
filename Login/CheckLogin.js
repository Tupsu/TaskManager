$(document).ready(function() {
	 // Check if user is logged in (token is set).
    if (localStorage.getItem('token')) {
        // Get tasks
        getAvailableTasks(localStorage.getItem('token'), "ACTIVITY", "T._state = TaskState.READY");
    } else {
        // User is not logged in -> load login page
        $.mobile.changePage('Login/Login.html');
    }
});

