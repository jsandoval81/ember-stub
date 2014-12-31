
var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.RESTAdapter.extend({

});





App.Product = DS.Model.extend({
    title: DS.attr('string'),
    price: DS.attr('string'),
    quantity: DS.attr('number'),
    reviews: DS.hasMany('reviews', {async: true})
});

App.Review = DS.Model.extend({
    text: DS.attr('string'),
    product: DS.belongsTo('product')
});

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



App.BreadcrumbsController = Ember.ArrayController.extend({
    needs: ['application'],

    _activeRoutes: function () {
        'use strict';
        var router = this.container.lookup('router:main');
        return router.get('router.currentHandlerInfos').mapBy('handler');
    }.property('controllers.application.currentPath'),
  
    breadcrumbs: Ember.computed.filterBy('_activeRoutes', 'controller.breadcrumbName'),
});

App.ProductsController = Ember.ArrayController.extend({
    searchText: '',
    actions: {
        searchInventory: function () {
            'use strict';
            this.transitionToRoute('products.search', this.searchText);
        }
    },
    breadcrumbName: 'Products List'
});

App.ProductsSearchController = Ember.ArrayController.extend({
    sortProperties: ['title'],
    sortAscending: true,
    /*needs: "bakery",

    // search on the sorted 
    searchResults: Ember.computed.defaultTo("arrangedContent"),

    filterItem: function (model) {
        searchInput = this.get('controllers.bakery.searchText')
        regexp = new RegExp(searchInput, "i");
        if(!searchInput || (searchInput && (0 == searchInput.length))) {
            return true
        } else if (-1 != model.name.search(regexp)) {
            return true
        } else {
            return false
        }
    },

    searchFilter: function() {
        searchInput = this.get('controllers.bakery.searchText')
        Ember.Logger.debug("someone is looking for " + this.get("controllers.bakery.searchText"))

        // search on the sorted
        this.set('searchResults',this.get('arrangedContent').filter(this.filterItem.bind(this)))

    }.observes("controllers.bakery.searchText")
    */

});

App.ProductController = Ember.ObjectController.extend({
    price: function () {
        'use strict';
        var productPrice = this.get('model.price');
        return '$' + productPrice;
    }.property('model.price'),
    breadcrumbName: Ember.computed.alias('model.title')
});