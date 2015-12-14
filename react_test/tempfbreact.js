// BasicDopdown class ============================================================
var BasicDropdown = React.createClass({
	render: function() {
		var items = this.props.items.map(function(item, index, token) {
			return (<div data-value={item.id} className="item" data-id={item.accid} id={item.id}>{item.label}</div>)
		});
		// console.log(items);

		return (
			<div id = "mainForm">	
				<div className="ui floating dropdown labeled icon button base" style={{"width" : "320px" , "height" : "40px"}}>
				  <i className="icon book"></i>
				  <span className="text">Select an Account</span>
				  <div className="menu">
				    <div className="ui icon search input" style={{"width" : "275px"}}>
				      <i className="search icon"></i>
				      <input type="text" placeholder="Search tags..."></input>
				    </div>
				    <div className="scrolling menu">
				    	{items}
				    	<div className="clear-button" id = "clear">
				    		<button className="fluid ui button" id="clear-menu">
				    			Clear
				    		</button>
				    	</div>
				    </div>
				  </div>
				</div>
			</div>
		);
	},

	getDefaultProps: function() {
		return {
			items: [],

			onChange: function() {}
		};
	},

	componentDidMount: function() {
		var $root = $(React.findDOMNode(this));
		var self = this;
		$root.find('.dropdown')
			.dropdown({
				onChange: function(value, text, $selectedItem) {
		      		// console.log(items[value-1].accid);
		      		self.props.onChange(value, text, $selectedItem);
		  		}
			});
	}
});

// BasicDopdown class ============================================================
var SecondaryDropdown = React.createClass({
	render: function() {
		var items = this.props.items.map(function(item, index, token) {
			return (<div data-value={item.id} className="item" data-id={item.accid} id={item.id}><i className={item.icon}></i>
				{item.label}</div>)
		});
		// console.log(items);

		return (
			<div id = "mainForm">	
				<div className="ui floating dropdown labeled icon button" style={{"width" : "250" , "height" : "40px"}}>
				  <i className="exchange icon"></i>
				  <span className="text">Get Tokens</span>
				  <div className="menu">
				    <div className="scrolling menu">
				    	{items}
				    </div>
				  </div>
				</div>
			</div>
		);
	},

	getDefaultProps: function() {
		return {
			items: [],
			onChange: function() {}
		};
	},

	componentDidMount: function() {
		var $root = $(React.findDOMNode(this));
		var self = this;
		$root.find('.dropdown')
			.dropdown({
				onChange: function(value, text, $selectedItem) {
		      		// console.log(items[value-1].accid);
		      		self.props.onChange(value, text, $selectedItem);
		  		}
			});
	}
});
// Basic form class ==========================================================
var BasicForm = React.createClass({
	render: function() {
		var tokens = [
		{id: 1, label: 'Get User Token', accid: 123456, token: '', icon: 'user icon'},
		{id: 2, label: 'Get Page Token', accid: 234567, token: '', icon: 'flag icon'},
		];
		// var accid = this.props.accid
		// var accname = this.props.accname
		var item = this.props.item
		return (
			<div className="field" id = "myForm">
				<div className="field">
				</div>
				<div className="field">
				  <div className="detail-element ui labeled input">
				    <div className="ui label" style={{"width" : "120px"}}>Account Name</div>
				    <input className = "fbinputfield" type="text" placeholder="Type Account Name" id="aName"
				    		value = {item.label} //onChange={this.onDataChanged.bind(this, 'name')}
				    		style={{"width" : "200px", "height" : "40px"}}></input>
				  </div>
				</div>
				<div className="field">
				  <div className="detail-element ui labeled input">
				    <div className="ui label" style={{"width" : "120px"}}>Account ID</div>
				    <input className = "fbinputfield" type="text" placeholder="Type Account ID" id="aID"
				    		value = {item.accid} //onChange={this.onDataChanged.bind(this, 'id')}
				    		style={{"width" : "200px" , "height" : "40px"}}></input>
				  </div>
				</div>
				<div className="field">
				  <div className="detail-element ui labeled input">
				    <div className="ui label" style={{"width" : "120px"}}>Access Token</div>
				    <input className = "fbinputfield" type="text" placeholder="Get Access Token" id="aToken" 
				    		value = {item.token} onChange = {this.onDataChanged.bind(this, 'token')}
				    		style={{"width" : "200px" , "height" : "40px"}}> </input>
				    
				    <div>
				    <SecondaryDropdown items={tokens} ></SecondaryDropdown>
				    </div>
					
				  </div>
				</div>
				<div className="field">
				  <button className="ui button" id="loginfb">
  					<i className="sign in icon"></i>
  					Login
				  </button>

				  <button className="ui button" id="clear-form">
  					<i className="refresh icon"></i>
  					Clear
				  </button>
				</div>

				<div>
				  <button className="ui button" id="add-account" onClick = {this.saveItem}>
  					<i className="save icon"></i>
  					Save
				  </button>
				</div>

			</div>					
		);
	},

	getDefaultProps: function() {
		return {
			// accid: null,
			// accname: '',
			item: {},
			onDataChanged: function() {},
			saveItem: function() {},
			currentToken: ''
		};
	},

	saveItem: function() {
		this.props.addItem(name, token);
	},

	onDataChanged: function (key, e) {
		var oldData = this.props.item;
		oldData[key] = e.target.value;
		currentToken = oldData[key]
		console.log(currentToken);
		this.props.onDataChanged(oldData);
	}

});

// Main app object =========================================================
var App = React.createClass({
	renderHelloMessage: function() {
		return (
			<div></div>
		);
	},

	getInitialState: function() {
		return {
			// dropdownValue: '', 
			// items: [],
			id: '',

			accounts: [
			{id: 1, label: 'Site Lantern', accid: 123456, token: 'CCAAsdfjhgsdfkgLKF'},
			{id: 2, label: 'Blitzkrieg', accid: 234567, token: 'CCAAHDNDFfkgLKF'},
			{id: 3, label: 'Primoris', accid: 152135, token: 'CCAALSDFJDSGdfkgLKF'},
			{id: 4, label: 'Facebook', accid: 178456, token: 'CCAAsdfDSPGVJFDGfkgLKF'}
			]
		};
	},

	dropdownValueChanged: function(value, text, $selectedItem) {
		// console.log('I am inside App', value, text, $selectedItem);
		// console.log('I am inside', parseInt(value)-1);
		// this.setState({dropdownValue: parseInt(value)-1});
		this.setState({id: parseInt(value)});
		this.accountForId
		// console.log('Text is ', value);
	},

	onDataChanged: function(newData) {
		var accounts = this.state.accounts;

		// Find the account with the matching ID as new Data
		accounts = accounts.map(function(account) {
			if (account.id === newData.id)
				return newData;
			else
				return account;
		});
		// Using for loop 
		// for (var i=0;i<accounts.length;i++) {
		// 	if (accounts[i].id === newData.id)
		// 		accounts[i] = newData;
		// }

		this.setState({accounts: accounts});

	},

	accountForId: function(id) {
		// Takes an id, and returns the account with that id
		for (var i=0;i<this.state.accounts.length;i++)
			if (this.state.accounts[i].id === id)
				return this.state.accounts[i];
	},

	render: function() {
		return (
			<div>
				<BasicDropdown 
					items={this.state.accounts} 
					onChange={this.dropdownValueChanged}>
				</BasicDropdown>
				<BasicForm
					item = {this.accountForId(this.state.id)}
					onDataChanged= {this.onDataChanged}>
				</BasicForm>
			</div>
		);

	}
});

// Drawing the objects ===============================================
$(document).ready(function() {
	var items = [
		{id: 1, label: 'Site Lantern', accid: 123456},
		{id: 2, label: 'Blitzkrieg', accid: 234567},
		{id: 3, label: 'Primoris', accid: 152135},
		{id: 3, label: 'Beside', accid: 152135},
		{id: 4, label: 'Facebook', accid: 178456}
	];

	// Rendering the fb integration form
	React.render(<App />, document.querySelector('#firstDropdown'));

	// Initialising the accordian - Information box
	$('.ui.accordion')
	.accordion();

	$('#clear-menu').on('click', function() {
		$('.dropdown').dropdown('restore defaults');
	});

	$('#clear-form').on('click', function() {
		$('.dropdown').dropdown('restore defaults');
		$('.fbinputfield')[0].value = '';
		$('.fbinputfield')[1].value = '';
		$('.fbinputfield')[2].value = '';
	});

	$('#loginfb').on('click', function() {
		console.log("Login is clicked");

		// window.fbAsyncInit = function() {
		// 	FB.init({
		// 		appId      : '1517971371855482',
		// 		xfbml      : true,
		// 		version    : 'v2.5'
		// 	});
  //   // ADD ADDITIONAL FACEBOOK CODE HERE
		// };


		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		FB.init({
		    appId      : '1520343321618287',
		    status     : true,
		    xfbml      : true,
		    version    : 'v2.5' // or v2.0, v2.1, v2.2, v2.3
		});

		function onLogin(response) {
			if (response.status == 'connected') {
				console.log("It is logged in");
				FB.api('/me?fields=first_name', function(data) {
					var welcomeBlock = document.getElementById('fb-welcome');
					// welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
				});
			}
			else {
				console.log("It is not logged in");
			}
		}
		

		FB.getLoginStatus(function(response) {
  // Check login status on load, and if the user is
		  // already logged in, go directly to the welcome message.
		  console.log("Inside Log in status function");
		  if (response.status === 'connected') {
			console.log("Inside if connected");
			var accessToken = response.authResponse.accessToken;
			console.log(accessToken);
			console.log("Access Token");
		  	onLogin(response);
		  } 
		  // else {
		 //    // Otherwise, show Login dialog first.
			//     FB.login(function(response) {
			//     	console.log("Inside FB.login");
			//     	// onLogin(response);
			//     }, {scope: 'user_friends, email'});
			// }
		});

// FB API =========================================================================================
		// /* make the API call */
		// FB.api(
		// 	'/me',
		// 	'GET',
		// 	{"fields":"id,name,access_token"},
		// 	function(response) {
  //     // Insert your code here
  //     			console.log("I am inside api");
  //     			console.log(response);
  //     			console.log(response['access_token']);
		//  	}
		// );

		/* make the API call */
		FB.api(
			"/{user-id}",
			function (response) {
				if (response && !response.error) {
					/* handle the result */
				}
			}
			);

// FB UI ====================================================================================
		// FB.ui({
		//   method: 'share_open_graph',
		//   action_type: 'og.likes',
		//   action_properties: JSON.stringify({
		//     object:'https://developers.facebook.com/docs/facebook-login/',
		//     // object:'http://blitzkriegsrilanka.wix.com/blitzkriegstudio',
		//   })
		// }, function(response){
		//   // Debug response (optional)
		//   console.log(response);
		// });
		FB.ui({
			method: 'feed',
			// link: 'https://www.facebook.com/connect/blank.html#_=_',
			// link: 'https://developers.facebook.com/docs/facebook-login/',
			link: 'http://localhost/',
			caption: 'An example caption',
		}, function(response){
			console.log("I am here");
			// alert('Name is ' + response.name);
			console.log(response);
		});
	});
});