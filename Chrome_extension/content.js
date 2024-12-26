document.addEventListener("mouseup", () => {
    const selection = window.getSelection().toString().trim();
    if (selection) {
      const characters = selection.length;
      const integers = (selection.match(/\d+/g) || []).length;
  
      chrome.runtime.sendMessage({
        action: "updateCounts",
        data: { characters, integers }
      });
    }
  });
  