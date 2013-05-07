$(document).ready(function() {
    "use strict";
    
    // Load tasks after changePage(arg) call
    $(document).on("pagechange", function (event) {
        if ($.mobile.activePage.attr('id') === "mainPage") {
            // Get tasks
            if (isTokenSet()) {
                getAvailableTasks(localStorage.getItem(Strings.token), Strings.activity, Strings.subQueryTaskStateRdy);
            }
        }
    });
});