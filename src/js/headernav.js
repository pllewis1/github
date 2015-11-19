import React from 'react'

class Headernav extends React.Component {
  render () {
    return (

      <header>
        <nav className="left_nav">
          <a id="main_icon" className="octicon octicon-mark-github"></a>
            <input type="text" name="name" placeholder="Search GitHub" value=""/>
            <a id="pull" href="#">Pull requests</a>
            <a href="#">Issues</a>
            <a href="#">Gist</a>
        </nav>
        <nav className="right_nav">
          <a  href="#" className="octicon octicon-bell"></a>
          <a href="#" className="octicon octicon-plus"></a>
          <a className="octicon octicon-triangle-down"></a>
          <a href="#"> <img src={this.props.profile.avatar_url}/></a>
          <a id="far_right" className="octicon octicon-triangle-down" href="#"></a>
        </nav>
      </header>
    )
  };
}

export default Headernav;
