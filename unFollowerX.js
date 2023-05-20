chrome.tabs.onActivated.addListener(tab=>{
    chrome.tabs.get(tab.tabId,current_tab_info=>{
        if(/^https:\/\/www\.instagram/.test(current_tab_info.url)){
            chrome.tabs.executeScript(null,{file:"./js/instagram.js"});
            chrome.tabs.insertCSS(null,{file:"./css/tabsOnCss.css"});
        }
    })
})