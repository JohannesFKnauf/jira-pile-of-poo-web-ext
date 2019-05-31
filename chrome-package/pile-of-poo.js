var replaceSmellIndicators = function() {
    chrome.storage.sync.get('smellindicator', (res) => {
	var smellIndicator = res.smellindicator || '💩';

	var cardDaysIndicators = document.getElementsByClassName("ghx-days");
	for (let i = 0; i < cardDaysIndicators.length; i++) {
	    let cardDaysIndicator = cardDaysIndicators[i];
	    let cardDays = parseInt(cardDaysIndicator.title.replace(/ days? in this column/, ""));
	    cardDaysIndicator.textContent = smellIndicator.repeat(cardDays);
	}
    });
};


replaceSmellIndicators();

var callback = function(mutationsList, observer) {
    replaceSmellIndicators();
};

var observer = new MutationObserver(callback);
var config = { attributes: true, childList: true, subtree: true };
var targetNode = document.getElementById("content");
observer.observe(targetNode, config);
