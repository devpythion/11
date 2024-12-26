chrome.runtime.sendMessage({ action: "getCounts" }, (response) => {
    document.getElementById("characters").textContent = response.characters;
    document.getElementById("integers").textContent = response.integers;
  });
  