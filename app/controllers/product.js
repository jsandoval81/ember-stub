
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