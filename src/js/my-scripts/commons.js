/*-------------------------*/
/*      commons.js         */
/*-------------------------*/

// COP TEXT

function copyText() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
    /* Select the text field */
    copyText.select();
    /* Copy the text inside the text field */
    document.execCommand("copy");
    /* We can use an alert the copied text */
    alert("Copied IP to clipboard: " + copyText.value);
}


// ACTIVE BUTTONS
//make button "activatable"
(function() {
    $("button").on('click', function() {
        $(this).toggleClass('active');
        return;
    });
}).call(this);