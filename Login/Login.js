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
});