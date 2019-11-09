// Called when page loads.

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            var activeTab = tabs[0];
            // var myMessage = document.body;
            // chrome.tabs.sendMessage(activeTab.id, { message: myMessage, "action": "getSource" }, function(response) {});
            chrome.tabs.sendMessage(activeTab.id, { "action": "getSource" }, function(response) {});
            // chrome.tabs.sendMessage(activeTab.id, { "message": docContent, "action": "getSource" });
        });
    }
});