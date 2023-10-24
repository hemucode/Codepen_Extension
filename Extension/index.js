async function init() {
  return Promise.all([ hydrate()]);
}

function injectReload() {
  return chrome.runtime.sendMessage({
    action: "INSERT_RELOAD_RULE"
  });
}

async function hydrate() {

   var a = new Promise(function(resolve, reject){
        chrome.storage.sync.get({"enabled": true}, function(options){
            resolve(options.enabled);
        })
    });

  const enabled = await a;

  var b = new Promise(function(resolve, reject){
        chrome.storage.sync.get({"reset": true}, function(options){
            resolve(options.reset);
        })
  });

  const reset = await b;


  console.log(enabled);

  var c = new Promise(function(resolve, reject){
        chrome.storage.sync.get({"videoCount": "Open Codepen first"}, function(options){
            resolve(options.videoCount);
        })
  });

  const videoCount = await c;

  // Hydrate Logo
  const $logo = document.querySelector(".logo");
  $logo.style.filter = enabled ? "grayscale(0)" : "grayscale(100%)";
  $logo.style.opacity = enabled ? "1" : "0.7";


  const $timeSaveInfo = document.querySelector("textarea");


  $timeSaveInfo.textContent = videoCount;


  const $copy = document.querySelector("#copy");

  $copy.addEventListener("click", async (event) => {
    document.querySelector("textarea").select();
    document.execCommand('copy');
  });


  const $reload = document.querySelector("#reload");

  $reload.addEventListener("click", async (event) => {
    await Promise.all([injectReload()]);
    await chrome.storage.sync.set({"reset": true});
    $timeSaveInfo.textContent = "";
   

  });


  // Hydrate Checkbox Label
  const $checkboxLabel = document.querySelector("[data-message=enabled]");
  $checkboxLabel.textContent = (
    enabled ? "enabled" : "disabled"
  );

  // Hydrate Checkbox Label
  const $enabledCheckbox = document.querySelector("input[name=enabled]");
  $enabledCheckbox.checked = enabled;

  $enabledCheckbox.addEventListener("change", async (event) => {
    

    const enabled = event.currentTarget.checked;


    // Persist
    await chrome.storage.sync.set({ enabled });
    await Promise.all([injectReload()]);

    // Update Checkbox Label
    $checkboxLabel.textContent = (
      enabled ? "enabled" : "disabled"
    );

    // Update Logo
    $logo.style.filter = enabled ? "grayscale(0)" : "grayscale(100%)";
    $logo.style.opacity = enabled ? "1" : "0.7";
  });
}

init();