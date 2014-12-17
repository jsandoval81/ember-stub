
App.Router.map(function () {
    'use strict';
    this.route('about');
    this.resource('products');
    this.resource('product', { path: 'products/:id' });
});

App.ApplicationRoute = Ember.Route.extend({
    model: function () {
        'use strict';
        this.store.push('products', {
            id: 1,
            title: 'Product 1',
            price: '4.99'
        });
        this.store.push('products', {
            id: 2,
            title: 'Product 2',
            price: '8.99'
        });
        this.store.push('products', {
            id: 3,
            title: 'Product 3',
            price: '12.99'
        });
    }
});

App.ProductsRoute = Ember.Route.extend({
    model: function () {
        'use strict';
        return this.store.all('products');
    }
});

App.ProductRoute = Ember.Route.extend({
    model: function (params) {
        'use strict';
        return this.store.find('products', params.id);
    }
});
