chrome.storage.sync.get({
    keywordsArray: []
  }, function(items) {
    numberoftrigger(items.keywordsArray);
  });
  
  var counter = 0;
  
  function numberoftrigger(keywordsArray) {
    for (var i = 0; i < keywordsArray.length; i++) {
      numberoftrigger(keywordsArray[i]);
    }
  
    function numberoftrigger(obj) {
      for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].innerText.toLowerCase().includes(obj.keyword.toLowerCase())) {
          counter++;
        }
      }
    }
  }
  
  document.getElementById('counter').textContent = 'Number of trigger words: ' + counter;