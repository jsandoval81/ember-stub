
App.Review = DS.Model.extend({
    text: DS.attr('string'),
    product: DS.belongsTo('product')
});