async function reloadAffectedTab() {
  const [currentTab] = await chrome.tabs.query({
    active: true,
    url: "*://*.codepen.io/*",
  });
  const isTabAffected = Boolean(currentTab?.url);
  if (isTabAffected) {
    return chrome.tabs.reload();
  }
}



chrome.runtime.onMessage.addListener(async (request, sender) => {
  switch (request.action) {
    case "INSERT_RELOAD_RULE": {
      return reloadAffectedTab();
    }
    default:
      throw new Error(`Unknown Action: ${request.action}`);
  }
});