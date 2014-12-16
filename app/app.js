
var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Products = DS.Model.extend({
    title: DS.attr('string')
});

App.Products.reopenClass({
    FIXTURES: [
        { id: 1, title: 'Product 1' },
        { id: 2, title: 'Product 2' },
        { id: 3, title: 'Product 3' },
        { id: 4, title: 'Product 4' },
        { id: 5, title: 'Product 5' },
        { id: 6, title: 'Product 6' }
    ]
});
