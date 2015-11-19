import React from 'react'

class Summary extends React.Component {
  render () {
    let prof = this.props.profile;

    return (
      <div>
        <img src={prof.avatar_url}/>
        <h1> {prof.name} </h1>
        <h2> {prof.login} </h2>
        <div className="F"> <h3> {prof.followers} <span className="blue"> followers </span></h3></div>
        <div className="S"> <h3> {prof.followers} <span className="blue"> starred </span></h3></div>
        <div className="G"> <h3> {prof.followers} <span className="blue"> following </span></h3></div>

      </div>
    );

  }
}

export default Summary;
