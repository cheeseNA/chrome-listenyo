chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('bg: ' + tab.url);
    var res = /^https:\/\/www\.youtube\.com\/watch\?(.+&)*v=([_\-a-zA-Z\d]+)/.exec(tab.url)
    console.log(res)
    if(res){
        chrome.tabs.create({
            url: "https://listenyo.com/?song="+res[2]
        })
    }
});