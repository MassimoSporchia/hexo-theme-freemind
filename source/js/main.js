$(document).ready(function() {

	replaceMeta();

	$(window).resize(function(){
		replaceMeta();
	});
});

replaceMeta = function(){
	if ($(window).width() < 980) {
		if ($("#side_meta #post_meta").length>0) {
			$("#post_meta").appendTo("#top_meta");
		}
		if ($("#sidebar #site_search").length>0) {
			$("#site_search").appendTo("#top_search");
			$("#site_search #st-search-input").css("width", "95%");
		}
	} else {
		if ($("#top_meta #post_meta").length>0) {
			$("#post_meta").appendTo("#side_meta");
		}
		if ($("#top_search #site_search").length>0) {
			$("#site_search").prependTo("#sidebar");
			$("#site_search #st-search-input").css("width", "85%");
		}
	}
}
