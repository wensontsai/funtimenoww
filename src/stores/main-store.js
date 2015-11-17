var Reflux = require('reflux');
var ActionsReflux = require('../actions/main-actions');
// var MainApi = require('../utils/MainApi');

module.exports = Reflux.createStore({
	// if any actions get called, and you have method of same name, invoke it
	// subscribed to Actions
	listenables: [
		ActionsReflux
	],
	loginUser: function(){
		// AJAX request thru Fetch
		return Api.get('api/users')
				.then(function(json){
					this.topics = json.data;
					this.triggerChange();
				}.bind(this) );
	},
	signupUser: function(){
		return Api.post('api/authenticate')
				.then(function(json){
					this.topics = json.data;
					this.triggerChange();
				}.bind(this) );
	},
	getAllUsers: function(){
		return Api.get('users')
				.then(function(json){
					this.topics = json.data;
					this.triggerChange();
				}.bind(this) );
	},
	triggerChange: function(){
		// Reflux emits 'change' : Reflux.trigger(event, emitObj)
		this.trigger('change', this.topics);
	}
});