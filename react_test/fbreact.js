// BasicDopdown object ============================================================
var BasicDropdown = React.createClass({
	render: function() {
		var items = this.props.items.map(function(item, index, token) {
			return (<div data-value={item.id} className="item" data-id={item.accid} id={item.id}>{item.label}</div>)
		});
		// console.log(items);

		return (
			<div id = "mainForm">	
				<div className="ui floating dropdown labeled icon button" style={{"width" : "320px" , "height" : "40px"}}>
				  <i className="icon book"></i>
				  <span className="text">Select an Account</span>
				  <div className="menu">
				    <div className="ui icon search input" style={{"width" : "275px"}}>
				      <i className="search icon"></i>
				      <input type="text" placeholder="Search tags..."></input>
				    </div>
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
		{id:99, label: '', accid: '', token: ''}

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
				    <input type="text" placeholder="Type Account Name" style={{"width" : "200px", "height" : "40px"}} value = {item.label}></input>
				  </div>
				</div>
				<div className="field">
				  <div className="detail-element ui labeled input">
				    <div className="ui label" style={{"width" : "120px"}}>Account ID</div>
				    <input type="text" placeholder="Type Account ID" style={{"width" : "200px" , "height" : "40px"}} value = {item.accid}></input>
				  </div>
				</div>
				<div className="field">
				  <div className="detail-element ui labeled input">
				    <div className="ui label" style={{"width" : "120px"}} >Access Token</div>
				    <input type="text" placeholder="Get Access Token" style={{"width" : "200px" , "height" : "40px"}} value = {item.token}> </input>
				    

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
			count: 100
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
			{id:99, label: ' ', accid: ' ', token: ' '}
		];

		return (
			<div>
				<BasicDropdown 
					items={accounts} 
					onChange={this.dropdownValueChanged}>
				</BasicDropdown>
				<BasicForm
					item = {accounts[this.state.count]} >
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
		{id: 4, label: 'Facebook', accid: 178456}
	];

	// Rendering the fb integration form
	React.render(<App />, document.querySelector('#firstDropdown'));

	// Initialising the accordian - Information box
	$('.ui.accordion')
	.accordion();

	// React.render(<BasicForm />, document.querySelector('#firstDropdown'))
	// window.fbAsyncInit = function() {
	// 	FB.init({
	// 		appId      : '145634995501895',
	// 		xfbml      : true,
	// 		version    : 'v2.5'
	// 	});
	// };



	$('#loginfb').on('click', function() {
		console.log("Login is clicked");
		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		FB.init({
		    appId      : '145634995501895',
		    status     : true,
		    xfbml      : true,
		    version    : 'v2.5' // or v2.0, v2.1, v2.2, v2.3
		});

		FB.getLoginStatus(function(response) {
		  if (response.status === 'connected') {
		    console.log('Logged in.');
		  }
		  else {
		    FB.login();
		  }
		});
		/* make the API call */
		FB.api(
			'/me',
			'GET',
			{"fields":"id,name"},
			function(response) {
      // Insert your code here
		  }
		);

		FB.ui({
		  method: 'share_open_graph',
		  action_type: 'og.likes',
		  action_properties: JSON.stringify({
		    object:'https://developers.facebook.com/docs/facebook-login/',
		  })
		}, function(response){
		  // Debug response (optional)
		  console.log(response);
		});
	});
});