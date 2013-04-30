$(document).ready(function() {
    $(document).on('click', '#btn_login', function() {
        if (localStorage.getItem('token') == null) {
            var username = $('#username').val();
            var password = $('#password').val();   
            authenticate(username, password);
        }
        $.mobile.changePage('../');
    });
});