/*
 * Checks if token exists.
 */
function  isTokenSet() {
    if (localStorage.getItem("token")) {
        return true;
    }
    return false;
}