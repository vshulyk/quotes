import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
// import Board from '../containers/board';

export default class Quote extends Component {
	constructor() {
		super();
	}
  render() {
  	const info = this.props.qd.data;
    return (
      <div>
      	<Paper className="board-quote" zDepth={2}> 
					<div>{info.quote}</div>
				</Paper>
      	<TextField hintText="Hint Text" />
      </div>
    );
  }
}
