window.addEventListener("load", () => {
  fetch(chrome.runtime.getURL("search.html"))
    .then((response) => response.text())
    .then((html) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      const contentContainer = document.getElementById("contents");

      if (contentContainer) {
        while (tempDiv.firstChild) {
          contentContainer.insertBefore(
            tempDiv.firstChild,
            contentContainer.firstChild
          );
        }
      } else {
        console.error("Content container not found.");
      }
    })
    .catch((error) => {
      console.error("Error fetching search.html:", error);
    });
});
