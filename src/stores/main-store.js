var Reflux = require('reflux');
var ActionsReflux = require('../actions/main-actions');
var MainApi = require('../utils/main-api');

module.exports = Reflux.createStore({
	// if any actions get called, and you have method of same name, invoke it
	// subscribed to Actions
	listenables: [
		ActionsReflux
	],
	loginUser: function(username, password){
		var paramsObj = {
			url: 'api/authenticate',
			name: username,
			password: password
		};
		// AJAX request thru Fetch
		return MainApi.post(paramsObj)
				.then(function(data){
					this.token = data.token;
					this.triggerChange();
				}.bind(this) );
	},
	// signupUser: function(){
	// 	return MainApi.post('api/authenticate')
	// 			.then(function(json){
	// 				this.topics = json.data;
	// 				this.triggerChange();
	// 			}.bind(this) );
	// },
	// getAllUsers: function(){
	// 	return MainApi.get('users')
	// 			.then(function(json){
	// 				this.topics = json.data;
	// 				this.triggerChange();
	// 			}.bind(this) );
	// },
	triggerChange: function(){
		// Reflux emits 'change' : Reflux.trigger(event, emitObj)
		this.trigger('change', this.token);
	}
});