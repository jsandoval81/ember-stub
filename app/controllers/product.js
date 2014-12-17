
App.ProductController = Ember.ObjectController.extend({
    price: function () {
        'use strict';
        var productPrice = this.get('model.price');
        return '$' + productPrice;
    }.property('model.price')
});