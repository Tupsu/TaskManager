$(document).ready(function() {
    $(document).on('click', '#btn_login', function() {
        var username = $('#username').val();
        var password = $('#password').val();   
        authenticate(username, password);
        // //$('.ui-dialog').dialog('close');
        $.mobile.changePage('../index.html');
    });
});