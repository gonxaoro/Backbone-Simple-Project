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
		console.log("s");
    var empty = false;
    $('.group > input').each(function() {
        if ($(this).val()) {
          $('#store-button').removeAttr('disabled');
        }else{
					$('#store-button').attr('disabled', 'disabled');
				}
    });

  });


});
