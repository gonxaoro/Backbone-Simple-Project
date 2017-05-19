var app = app || {};

(function ($) {
  'use strict';

  app.LibraryView = Backbone.View.extend({
    el: $('.library-app'),
    $title :$('#title'),
    $author: $('#author'),
    $category: $('#category'),

    // Delegated events for creating new items, and clearing completed ones.
    events: {
      'click #store-button': 'storeBook'
    },

    initialize: function () {
      this.$list = $('#book-list');
      if(app.data){
        for(var i=0;i<app.data.length;i++){
          app.books.push(new app.Book({title: app.data[i].title, author: app.data[i].author, category: app.data[i].category }));
    		}
      }




      // Listen for the change event on the collection.
			// This is equivalent to listening on every one of the
			// book objects in the collection.
			this.listenTo(app.books, 'add', this.render);


      this.render();
    },


    render: function () {
      this.$list.html('');

      app.books.each(function(book){
				var view = new app.BookView({ model: book });
				this.$list.append(view.render().el);

			}, this);	// "this" is the context in the callback

      return this;
    },


    storeBook: function () {
      var b = new app.Book({title: $('#title').val(), author: $('#author').val(), category: $('#category').val()});
      app.books.push(b);

      $('#title').val('');
      $('#author').val('');
      $('#category').val('');
      $('#store-button').attr('disabled', 'disabled');
    }
  });
})(jQuery);
