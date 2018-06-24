var Header = (function(){

	function clickHeaderLinkEvent(evt){
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		var url = $(evt.target).attr("href");

		$.ajax(url,{ datatype: "text" })
		.then(function(contents){
		$modal.html(contents).show();
		});
	}

	function init(){
		$modal = $("[rel=js-modal]");
		$("[rel=js-header]").on("click","> [rel^=js]",clickHeaderLinkEvent);
	}

	var $modal;

	return{
		init: init
	};

})();

