// 特に意味のある処理は書いていません
chrome.action.onClicked.addListener((_tab) => {
    chrome.tabs.create({
        url: "https://www.google.com/",
    });
});

export { }