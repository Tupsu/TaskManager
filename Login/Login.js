$(document).ready(function() {
    $(document).on('click', '#btn_login', function() {
        var username = $('#username').val();
        var password = $('#password').val();   
        authenticate(username, password);
        $.mobile.changePage('../index.html');
    });
});