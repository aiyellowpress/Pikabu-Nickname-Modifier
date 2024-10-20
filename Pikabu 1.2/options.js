document.getElementById('save').addEventListener('click', () => {
  const spreadsheetId = document.getElementById('spreadsheetId').value;
  chrome.storage.sync.set({ spreadsheetId }, () => {
    alert('Spreadsheet ID saved!');
  });
});

chrome.storage.sync.get(['spreadsheetId'], (result) => {
  document.getElementById('spreadsheetId').value = result.spreadsheetId || '';
});