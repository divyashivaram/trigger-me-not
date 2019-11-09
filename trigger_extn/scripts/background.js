// Called when page loads.

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            var activeTab = tabs[0];
            // var myMessage = document.body;
            // chrome.tabs.sendMessage(activeTab.id, { message: myMessage, "action": "getSource" }, function(response) {});
            var storedTriggers = JSON.parse(localStorage.getItem("triggers"))
            // console.log('Background.js', storedTriggers)
            chrome.tabs.sendMessage(activeTab.id, { "action": "getSource", "message": storedTriggers }, function() {});
            // chrome.tabs.sendMessage(activeTab.id, { "message": docContent, "action": "getSource" });
        });
    }
});