
App.Router.map(function () {
    'use strict';
    this.route('about');
    this.resource('products');
});

App.ProductsRoute = Ember.Route.extend({
    model: function () {
        'use strict';
        return this.store.find('products');
    }
});

