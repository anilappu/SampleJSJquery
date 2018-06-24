var Details = (function(){
	function loadPerson(ID){
		$.ajax("details/" + ID +".html",{datatype: "text"})
		.then(function(content){
			$content.html(content);
		});
	}
	function init(){
		$content = $("[rel=js-details]");
	}

	var $content;

	return{
		init: init,
		loadPerson: loadPerson
	};
})();
