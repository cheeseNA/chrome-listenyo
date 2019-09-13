var showPage = function(){
    chrome.tabs.create({
        url: 'https://listenyo.com/'
    });
};

(function() {
  chrome.browserAction.onClicked.addListener(showPage);
}) ();