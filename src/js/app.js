import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import $ from './token';
import Headernav from './headernav';
import Summary from './summary';
import Repos from './repos';

class App extends React.Component {
  constructor(props) {
    // do all the stuff that our react.component's constructor would
    // normally do.
    super(props);

    this.state = {
      hasLoaded: false,
      profile: {},
      repos: []
    };

  }

  componentDidMount(){
    this.getProfileData();
    this.getRepoData();
  }

  getProfileData(){
    jQuery.ajax('https://api.github.com/users/pllewis1')
      .then( response => {
        this.setState({
          hasLoaded: true,
          profile: response
        });
      });
  }

  getRepoData(){
    jQuery.ajax('https://api.github.com/users/pllewis1/repos')
      .then( response => {
        this.setState({
          hasLoaded: true,
          repos: response
        });
      });
  }

  render () {
    return (
      <main>
        <Headernav profile={this.state.profile}/>
        <Summary profile={this.state.profile}/>
        <Repos repos={this.state.repos}/>
        </main>
      )
    }
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);


export default App;
