
App.Product = DS.Model.extend({
    title: DS.attr('string'),
    price: DS.attr('string'),
    quantity: DS.attr('number'),
    reviews: DS.hasMany('reviews', {async: true})
});