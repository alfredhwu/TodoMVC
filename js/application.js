/* js/application.js */


// create a new instance of Ember.Application
window.Todos = Ember.Application.create();

// indicate that AppAdapter is an extention of the DS.FixtureAdapter
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();