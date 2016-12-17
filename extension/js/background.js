chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    chrome.windows.create({"url": request.href, "incognito": true});
});
