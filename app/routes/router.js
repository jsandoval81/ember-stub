
//============
//== Router ==
//============
App.Router.map(function () {
    'use strict';
    this.route('about');
    this.resource('products', function () {
        this.route('search', {path: 'search/:title'});
        this.resource('product', { path: '/:id' });
    });
});

//============
//== Routes ==
//============
//== Products route
App.ProductsRoute = Ember.Route.extend({
    model: function () {
        'use strict';
        return this.store.find('product');
    }
});

//== Search route
App.ProductsSearchRoute = Ember.Route.extend({
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
