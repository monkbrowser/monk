//
const CONFIG = {
  toggles: {
    // name: [ title, default_value ]
    ad_blocker: ["Ad Blocker", true],
    greyscale: ["Greyscale", false],
    text_only: ["Text Only", false],
  },
};
//
async function render(links) {
  //
  let storage = await chrome.storage.local.get(null);
  // init_storage
  for (let key in CONFIG.toggles) {
    if (storage[key] === true || storage[key] === false) {
      // do nothing
    } else {
      storage[key] = CONFIG.toggles[key][1];
    }
  }
  //
  let styles = document.querySelectorAll(`.royce-geyscale-style`);
  for (let style of styles) {
    style.remove();
  }
  //
  Object.keys(CONFIG.toggles).forEach((name) => {
    if (storage[name] === true) {
      if (document.contains(links[name]) === true) {
        // do nothing
      } else {
        document.documentElement.prepend(links[name]);
      }
    } else {
      if (document.contains(links[name]) === true) {
        links[name].remove();
      } else {
        // do nothing
      }
    }
  });
  //
}

async function init() {
  //
  let links = {};
  Object.keys(CONFIG.toggles).forEach((name) => {
    links[name] = document.createElement("link");
    links[name].rel = "stylesheet";
    links[name].href = chrome.runtime.getURL(`/monk/css/${name}.css`);
  });
  //
  chrome.storage.onChanged.addListener(() => {
    render(links);
  });
  render(links);
}

init();
