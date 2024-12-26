let counts = { characters: 0, integers: 0 };

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "updateCounts") {
    counts = message.data;
  }
});

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { action: "showPopup" });
});

chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
  if (message.action === "getCounts") {
    sendResponse(counts);
  }
});
