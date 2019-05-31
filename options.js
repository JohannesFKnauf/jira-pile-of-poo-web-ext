function saveOptions(e) {
    console.log(document.querySelector("#smellindicator").value);
    browser.storage.sync.set({
	smellindicator: document.querySelector("#smellindicator").value
    });
    e.preventDefault();
}

function restoreOptions() {    
    var gettingItem = browser.storage.sync.get('smellindicator');
    gettingItem.then((res) => {
	document.querySelector("#smellindicator").value = res.smellindicator || '💩';
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
