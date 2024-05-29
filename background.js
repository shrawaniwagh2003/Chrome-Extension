// listen to update in tab system and find wherther a page contain the youtube video /whethter it is an youtube page


//firstly check whther it include youtube.com/watch 

chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      const queryParameters = tab.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
      console.log("url",urlParameters);
      
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: urlParameters.get("v"),
      });
    }
  });


  // vidoe id 
  