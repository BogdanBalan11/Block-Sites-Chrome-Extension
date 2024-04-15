document.addEventListener('DOMContentLoaded', function() {
  const blockButton = document.getElementById('blockButton');

  blockButton.addEventListener('click', function() {
    const sitesInput = document.getElementById('sitesInput').value;
    const sites = sitesInput.split(',').map(site => `*://*.${site.trim()}/*`).join(', ');

    chrome.runtime.sendMessage({ action: 'blockSites', sites: sites });
  });
});
