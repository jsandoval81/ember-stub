
App.Product = DS.Model.extend({
    title: DS.attr('string'),
    price: DS.attr('string'),
    reviews: DS.hasMany('reviews', {async: true})
});