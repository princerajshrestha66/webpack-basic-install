
window.jQuery = window.$ = require('jquery');
module.exports = function() {
    $( document ).ready(function() {
        $('.test').click(function () {
            alert('hello')
        })
    });
}