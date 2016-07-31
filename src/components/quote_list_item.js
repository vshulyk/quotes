import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

export default class QuoteListItem extends Component {
  render() {
    this.info = this.props.quote.info;
    this.meta = this.props.quote;

    const status = this.meta.isSolved ?"correct" :"incorrect";
    return (
      <div>
        <Paper className="board-quote" zDepth={2}>
        	{this.info.quote}
          <span className={status} > ({this.info.author})</span>
        </Paper>
      </div>
    );
  }
}
