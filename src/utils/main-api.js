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

module.exports = {
	post: function(paramsObj){
		var queryObject = {
			method: 'POST',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name : paramsObj.name,
				password : paramsObj.password
			})
		}
		return fetch(rootUrl + paramsObj.url, queryObject)
		.then(function(response){
			return response.json();
		});
	},
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
	
};