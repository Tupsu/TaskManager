$(document).ready(function() {
    "use strict";
    
    $(document).on('click', '#btn_login', function() {
        if (!isTokenSet()) {
            var username = $('#username').val();
            var password = $('#password').val();   
            authenticate(username, password);
        }
        $.mobile.changePage(Strings.mainPageUrl);
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