// Called when page loads.

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            var activeTab = tabs[0];
            var storedTriggers = JSON.parse(localStorage.getItem("triggers"))
            chrome.tabs.sendMessage(activeTab.id, { "action": "getSource", "message": storedTriggers }, function() {});
        });
    }
});