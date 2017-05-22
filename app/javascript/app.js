var app = app || {};
$(function () {
	'use strict';

	$.getJSON("./js/datos.json").success(function(data){
		app.data = data;

	}).error(function(data){
		console.log("FALLO");
	}).complete(function(data){
		new app.LibraryView();
	});

	$('.group > input').keyup(function() {
    if($('.group > input').filter(function(){	return $.trim(this.value) === '';}).length > 0 ){
			$('#store-button').attr('disabled', 'disabled');
		}else{
			$('#store-button').removeAttr('disabled');
		}
  });
});
