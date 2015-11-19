// BasicDopdown object ============================================================
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
				    		<button className="ui basic button" id="clear-menu" style={{"width" : "320px"}}>
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

// BasicDopdown object ============================================================
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
// Basic form object ==========================================================
var BasicForm = React.createClass({
	render: function() {
		var tokens = [
		{id: 1, label: 'Get User Token', accid: 123456, token: 'CCAAsdfjhgsdfkgLKF', icon: 'user icon'},
		{id: 2, label: 'Get Page Token', accid: 234567, token: 'CCAAHDNDFfkgLKF', icon: 'flag icon'},
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
				    <input className = "fbinputfield" type="text" placeholder="Type Account Name" 
				    		style={{"width" : "200px", "height" : "40px"}} value = {item.label} contenteditable="true"></input>
				  </div>
				</div>
				<div className="field">
				  <div className="detail-element ui labeled input">
				    <div className="ui label" style={{"width" : "120px"}}>Account ID</div>
				    <input className = "fbinputfield" type="text" placeholder="Type Account ID" 
				    		style={{"width" : "200px" , "height" : "40px"}} value = {item.accid} contenteditable="true"></input>
				  </div>
				</div>
				<div className="field">
				  <div className="detail-element ui labeled input">
				    <div className="ui label" style={{"width" : "120px"}}>Access Token</div>
				    <input className = "fbinputfield" type="text" placeholder="Get Access Token" 
				    		style={{"width" : "200px" , "height" : "40px"}} contenteditable="true"> </input>
				    

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
				  <button className="ui button" id="add-account">
  					<i className="add user icon"></i>
  					Add
				  </button>
				</div>

			</div>					
		);
	},

	getDefaultProps: function() {
		return {
			// accid: null,
			// accname: '',
			item: ''
		};
	},


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
			count: ''
		};
	},

	dropdownValueChanged: function(value, text, $selectedItem) {
		// console.log('I am inside App', value, text, $selectedItem);
		// console.log('I am inside', parseInt(value)-1);
		// this.setState({dropdownValue: parseInt(value)-1});
		this.setState({count: parseInt(value)-1});
		// console.log('Value is ',this.state.dropdownValue);
	},

	render: function() {
		var accounts = [
			{id: 1, label: 'Site Lantern', accid: 123456, token: 'CCAAsdfjhgsdfkgLKF'},
			{id: 2, label: 'Blitzkrieg', accid: 234567, token: 'CCAAHDNDFfkgLKF'},
			{id: 3, label: 'Primoris', accid: 152135, token: 'CCAALSDFJDSGdfkgLKF'},
			{id: 4, label: 'Facebook', accid: 178456, token: 'CCAAsdfDSPGVJFDGfkgLKF'},
		];

		return (
			<div>
				<BasicDropdown 
					items={accounts} 
					onChange={this.dropdownValueChanged}>
				</BasicDropdown>
				<BasicForm
					item = {accounts[this.state.count]}>
				</BasicForm>
			</div>
		);

	}
});

					// accid={items[this.state.count].accid} 
					// accname={items[this.state.count].label}>
					// token = {items[this.state.]}

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

		window.fbAsyncInit = function() {
			FB.init({
				appId      : '1517971371855482',
				xfbml      : true,
				version    : 'v2.5'
			});
    // ADD ADDITIONAL FACEBOOK CODE HERE
		};


		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		FB.init({
		    appId      : '1517971371855482',
		    status     : true,
		    xfbml      : true,
		    version    : 'v2.5' // or v2.0, v2.1, v2.2, v2.3
		});

		function onLogin(response) {
			if (response.status == 'connected') {
				console.log("It is logged in");
				FB.api('/me?fields=first_name', function(data) {
					var welcomeBlock = document.getElementById('fb-welcome');
					welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
				});
			}
			else {
				console.log("It is not logged in");
			}
		}

		FB.getLoginStatus(function(response) {
  // Check login status on load, and if the user is
		  // already logged in, go directly to the welcome message.
		  if (response.status == 'connected') {
		  	onLogin(response);
		  } else {
		    // Otherwise, show Login dialog first.
			    FB.login(function(response) {
			    	onLogin(response);
			    }, {scope: 'user_friends, email, access_token'});
			}
		});

		/* make the API call */
		FB.api(
			"/me/accounts",
			function (response) {
				if (response && !response.error) {
					/* handle the result */
					console.log("Priting Stuff Below");
					console.log(response);
				}
			}
		);
		// FB.ui({
		//   method: 'share_open_graph',
		//   action_type: 'og.likes',
		//   action_properties: JSON.stringify({
		//     // object:'https://developers.facebook.com/docs/facebook-login/',
		//     object:'https://apps.facebook.com/1502597476700863/',
		//   })
		// }, function(response){
		//   // Debug response (optional)
		//   console.log(response);
		// });
		FB.ui({
			method: 'feed',
			link: 'https://developers.facebook.com/docs/facebook-login/',
			caption: 'An example caption',
		}, function(response){
			console.log("I am here");
			// alert('Name is ' + response.name);
			console.log(response);
		});
	});
});