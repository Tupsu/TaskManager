$(document).ready(function() {
    "use strict";
    
	// Check if user is logged in
    if (isTokenSet()) {
        // Get tasks
        getAvailableTasks(localStorage.getItem(Strings.token), Strings.activity, Strings.subQueryTaskStateRdy);
    } else {
        // User is not logged in -> load login page
        $.mobile.changePage(Strings.loginPageUrl);
    }
});