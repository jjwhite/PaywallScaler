$(function() {
    $('a').click(function(e){
		e.preventDefault();
		chrome.windows.create({"url": this.href, "incognito": true});
	});
});
