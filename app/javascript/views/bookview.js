var app = app || {};

(function ($) {
  'use strict';

  app.BookView = Backbone.View.extend({
    tagName: 'li',

    listTemplate: _.template($('#list-template').html()),
    // Delegated events for creating new items, and clearing completed ones.
    events: {
      'click #store-button': 'storeBook'
    },

    initialize: function () {

			return this;
    },


    render: function () {
      this.$el.html(this.listTemplate({
        title: this.model.get('title'),
        author: this.model.get('author'),
        category: this.model.get('category')
      }));

      return this;
    },


    storeBook: function () {
      console.log("click botón");

    }
  });
})(jQuery);
