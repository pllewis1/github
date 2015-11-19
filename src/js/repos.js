import React from 'react'
import jQuery from 'jquery';

class Repos extends React.Component {

  render () {
    let rep = this.props.repos.map(rep => {

    return (
      <div className="repoman">
        <h4 className="entry"> <a href="#">{this.props.repos.name}</a>
          <span> {this.props.repos.language} </span>
          <span class="octicon octicon-star"> {this.props.repos.stargazers_count}</span>
          <span class="octicon octicon-git-branch"> {this.props.repos.forks}</span>
        </h4>
        <time> this.repos.updated_at</time>
      </div>
    )
  });

  return (
    <ul>
      {rep}
    </ul>
  )
}
}

export default Repos;
