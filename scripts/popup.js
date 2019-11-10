// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
    $("#send").click(function () {
    var triggers = JSON.parse(localStorage.getItem('triggers')) || {};
    var item = $("#customTrigger").val();
    triggers[item] = item;
    // Save custom triggers in extension's local storage
    localStorage.setItem("triggers", JSON.stringify(triggers));
    var storedNames = JSON.parse(localStorage.getItem("triggers"));
    $("#customTrigger").val(''); // to reset the textbox
});

    // Query for the active tab
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        // Send a request for the DOM info
        chrome.tabs.sendMessage(
            tabs[0].id, { from: 'popup', subject: 'DOMInfo' }
      // ,
            // ...also specifying a callback to be called
            //    from the receiving end (content script).
            // setDomInfo()
);
    });
});

// function setDomInfo() {
//     // Hit the api to display some data
//     $("#content").append("<h2>Trigger warning</h2>");
//   $('html').height($('#menu').height());
//
// }

$(document).ready(function(){
  $('#send').attr('disabled',true);
  $('#customTrigger').keyup(function(){
    if($(this).val().length !=0)
      $('#send').attr('disabled', false);
    else
      $('#send').attr('disabled',true);
  })
});