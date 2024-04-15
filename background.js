chrome.runtime.onInstalled.addListener(() => {
  const blockedSites = [
    "*://*.instagram.com/*",
    "*://*.facebook.com/*",
    "*://*.reddit.com/*",
    "*://*.tiktok.com/*"
    // Add more sites here if needed
  ];

  const rules = blockedSites.map((site, index) => ({
    id: index + 1, // Increment index by 1 to start from 1
    priority: 1,
    action: {
      type: 'block'
    },
    condition: {
      urlFilter: site,
      resourceTypes: ['main_frame']
    }
  }));

  const ruleIdsToRemove = blockedSites.map((site, index) => index + 1); // Increment index by 1 to start from 1

  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: ruleIdsToRemove,
    addRules: rules
  });
});
