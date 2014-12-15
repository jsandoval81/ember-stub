
var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});


App.Router.map(function () {
    'use strict';
    this.route('about');
    this.route('play');
});

