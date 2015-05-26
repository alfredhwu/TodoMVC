/* js/router.js */

Todos.Router.map( function () {
	// route URL '/' to template todos
	this.resource('todos', { path: '/' });
});


Todos.TodosRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});