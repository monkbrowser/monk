//
const CONFIG = {
  toggles: {
    // css_file_name: [ title, default_value ]
    ad_blocker: ["Ad Blocker", true],
    greyscale: ["Greyscale", false],
    text_only: ["Text Only", false],
  },
};
//
function render(toggle, value) {
  if (value) {
    toggle.classList.add("active");
  } else {
    toggle.classList.remove("active");
  }
}
async function init() {
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
  let html = "";
  for (let key in CONFIG.toggles) {
    html += `
      <div class="section section_link ${
        storage[key] ? "active" : ""
      }" data-toggle-key="${key}">
        <div class="section_link_text">${CONFIG.toggles[key][0]}</div>
        <div class="chrome_toggle">
          <div class="chrome_toggle-bar"></div>
          <div class="chrome_toggle-knob"></div>
        </div>
      </div>
    `;
  }
  //
  document.querySelector(".page.main.active").innerHTML = html;
  let toggles = document.querySelectorAll(`[data-toggle-key]`);
  //
  function sendMessage(msg) {
    return new Promise((resolve, reject) => {
      let i = 5;
      const send = () => {
        chrome.runtime
          .sendMessage(msg)
          .then((response) => {
            resolve(response);
          })
          .catch((reason) => {
            i -= 1;
            if (i <= 0) {
              reject(reason);
            } else {
              setTimeout(send, 200);
            }
          });
      };
      send();
    });
  }
  for (let toggle of toggles) {
    let key = toggle.dataset.toggleKey;
    render(toggle, storage[key]);
    toggle.addEventListener("click", async () => {
      storage[key] = !storage[key];
      chrome.storage.local.set(storage);
      render(toggle, storage[key]);
      if (key === "ad_blocker") {
        console.log("ad_blocker");
        if (storage[key] === true) {
          await sendMessage({
            what: "applyRulesets",
            enabledRulesets: ["default"],
          });
          await sendMessage({
            what: "setFilteringMode",
            hostname: "all-urls",
            level: 3,
          });
          let tabs = await chrome.tabs.query({
            active: true,
            currentWindow: true,
          });
          chrome.tabs.reload(tabs[0].id);
        } else {
          await sendMessage({
            what: "applyRulesets",
            enabledRulesets: [],
          });
          await sendMessage({
            what: "setFilteringMode",
            hostname: "all-urls",
            level: 0,
          });
          let tabs = await chrome.tabs.query({
            active: true,
            currentWindow: true,
          });
          chrome.tabs.reload(tabs[0].id);
        }
      }
    });
  }
  //
}
//
init();
