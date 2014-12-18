
//============
//== Router ==
//============
App.Router.map(function () {
    'use strict';
    this.route('about');
    this.resource('products', function () {
        this.resource('product', { path: '/:id' });
    });
});

//============
//== Routes ==
//============
App.ApplicationRoute = Ember.Route.extend({
    //== Load some fixture-type data
    model: function () {
        'use strict';        
        this.store.push('product', {
            id: 1,
            title: 'Product 1',
            price: '4.99',
            reviews: [1001, 1002]
        });
        this.store.push('product', {
            id: 2,
            title: 'Product 2',
            price: '8.99'
        });
        this.store.push('product', {
            id: 3,
            title: 'Product 3',
            price: '12.99'
        });
        this.store.push('review', {
            id: 1001,
            text: 'Fabulous product',
            product: 1
        });
        this.store.push('review', {
            id: 1002,
            text: 'Only OK',
            product: 1
        });
    }
});

//== Products route
App.ProductsRoute = Ember.Route.extend({
    model: function () {
        'use strict';
        return this.store.all('product');
    }
});

//== Product route
App.ProductRoute = Ember.Route.extend({
    model: function (params) {
        'use strict';
        return this.store.find('product', params.id);
    }
});
