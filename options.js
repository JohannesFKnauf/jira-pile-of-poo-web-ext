function saveOptions(e) {
    chrome.storage.sync.set({
	smellindicator: document.querySelector("#smellindicator").value
    });
    e.preventDefault();
}

function restoreOptions() {    
    chrome.storage.sync.get('smellindicator', (res) => {
	document.querySelector("#smellindicator").value = res.smellindicator || '💩';
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
