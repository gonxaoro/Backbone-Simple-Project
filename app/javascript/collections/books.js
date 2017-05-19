var app = app || {};

(function () {
  'use strict';
  // The collection of todos is backed by *localStorage* instead of a remote
  // server.
  var Books = Backbone.Collection.extend({
    // Reference to this collection's model.
    model: app.Book


  });

  // Create our global collection of **Todos**.
  app.books = new Books();

})();
