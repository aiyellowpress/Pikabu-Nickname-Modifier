async function updateNicknames() {
  const result = await new Promise((resolve) => {
    chrome.storage.sync.get(['spreadsheetId'], resolve);
  });
  const spreadsheetId = result.spreadsheetId;

  if (!spreadsheetId) {
    console.error("Spreadsheet ID not set in options.");
    return;
  }
  const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&tq=SELECT%20A,B`;
  try {
    const response = await fetch(url);
    const text = await response.text();

    // Extract JSON data from the Google Sheets response
    const jsonData = JSON.parse(text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1));
    const rows = jsonData.table.rows;
    const nicknameMap = {};
    rows.forEach(row => {
      const nickname = row.c[0].v;
      const prefix = row.c[1].v;
      nicknameMap[nickname] = prefix;
    });

    // Modify nicknames on the page
    const nicknames = document.querySelectorAll('.user__nick, a.story__user-link user__nick');
    nicknames.forEach(nicknameElement => {
	  const nickname = nicknameElement.textContent.trim();
      if (nicknameMap[nickname]) {
        nicknameElement.textContent = `${nicknameMap[nickname]} ${nickname}`;
      }
    });
  } catch (error) {
    console.error("Error fetching or processing spreadsheet data:", error);
  }
}

// Initial update when the page loads
updateNicknames();