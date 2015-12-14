var SocialIntegrationApp = React.createClass({

    render: function() {
        return (
            <div className="SocialIntegrationApp">
                <button className="ui button" onClick={this.verify}>Verify</button>

                <button className="ui button" onClick={this.extend}>Extend</button>

                <div className="ui message">
                    {this.state.accessToken}
                </div>
            </div>
        );
    },

    componentDidMount: function() {
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '753007021470021',
          xfbml      : true,
          version    : 'v2.5'
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));       
    },

    verify: function() {
        FB.login((response) => {
            console.log('first response', response);

            console.log('User id is', response.authResponse.userID);

            FB.api('/' + response.authResponse.userID + '/accounts', (response) => { 
                â€‚â€‚ console.log(response);

                }, {scope:"manage_pages"}
            );
        });
    },

    extend: function() {

    },

    getInitialState: function() {
        return {
            details: {},

            accessToken: ''
        };
    },

});


// Drawing the objects ===============================================
$(document).ready(function() {

  React.render(<SocialIntegrationApp />, document.querySelector('#mountid'));

}