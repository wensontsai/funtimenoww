// var MainApi = {
// 	login(username, password){
// 		var loginUrl = `https://api.github.com/users/${username}`;
// 	    return fetch(url).
// 	    	then((res) => res.json())
// 	},
// 	signup(username, password){
// 		var return fetch(url).
// 	    	then((res) => res.json())signupUrl = `https://api.github.com/users/${username}`;
	    
// 	},
// 	getAllUsers(access_token){
// 		var rl = `https://api.github.com/users/${username}`;
// 	    return fetch(url).
// 	    	then((res) => res.json())
// 	}
// };

// module.exports = MainApi;

var rootUrl = 'http://localhost:8080/';
var apiKey = '03f2082edbdfba5';

module.exports = {
	get: function(url){
		return fetch(rootUrl + url, {
			// headers: { 
			// 	'Authorization': 'Client-ID ' + apiKey
			// }

			// *********************************
			// include cookie in header?
			// *********************************

		})
		.then(function(response){
			return response.json();
		});
	},
	post: function(url, paramsObj){

		// *********************************
		// parse paramsObj so that everything is concatenated
		// '?username=asdfasdf&password=345345345'
		// *********************************

		return fetch(rootUrl + url, {
			// headers: { 
			// 	'Authorization': 'Client-ID ' + apiKey
			// }
		})
		.then(function(response){
			return response.json();
		});
	}
};