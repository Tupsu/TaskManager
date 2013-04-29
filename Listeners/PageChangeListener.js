$(document).ready(function() {
    // Load tasks after changePage(arg) call
    $(document).on("pagechange", function (event) {
        if ($.mobile.activePage.attr('id') == "mainPage") {
            // Get tasks
            getAvailableTasks(localStorage.getItem('token'), "ACTIVITY", "T._state = TaskState.READY");
        }
    });
});