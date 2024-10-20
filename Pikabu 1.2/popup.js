// popup.js
document.getElementById('updateNicknames').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs && tabs.length > 0) {
      const activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: () => {
          updateNicknames();
        }
      });
    } else {
      console.error("No active tab found.");
      // Handle the case where there's no active tab, e.g., show an error message in the popup
    }
  });
});
