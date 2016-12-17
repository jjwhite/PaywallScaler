$(function() {
    $('a').click(function(e){
		console.log(this.href);
		if (check(this.href)){
			chrome.runtime.sendMessage({'href':this.href},function(response){})
			e.preventDefault();
		}
		
	});
});

var check = function(href){
		var result = urls.some(function(elm){
			if(href.indexOf(elm) !== -1)
				return true;
		});
    
    return result;

}

var urls = [
"nytimes.com",
"washingtonpost.com"
];
