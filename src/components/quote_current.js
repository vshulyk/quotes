import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import { MAX_HINT } from '../actions/get_hint_action';

export default class Quote extends Component {

  constructor() {
    super()
    this.useHint = this.useHint.bind( this );
  }

  useHint() {
    this.props.onHintBtnClick( this.meta.hintsLeft );  
    if ( this.meta.hintsLeft == 1 ) {
      this.props.solveAndFetch( false );
    }
  }

  renderStatus() {
    if ( this.meta.isTouched ) {
      return (
        <div>
          <div>
            <span>Solved? </span>
            <span>{this.meta.isSolved ?'YES' :'NO'}</span>
          </div>
        </div>
      );
    }
    return;
  }

  renderHint( answer ) {
    var length = answer.length,
        revealNumber = Math.floor(length/(this.meta.hintsLeft + 1) );

    if ( this.meta.hintsLeft == MAX_HINT ) {
      revealNumber = 0;
    }

    const secret = answer.slice(0,revealNumber) + answer.slice(revealNumber).replace(/./g,'*');

    console.log('SECRET', this.meta.hintsLeft, secret,this.info.author);

    if ( !this.meta.hintsLeft ) {
      return(
      <div>
        <span>ANSWER: </span>
        <span>{answer}</span>
      </div>
      );
    }

    return (
      <div>
        <div>
          <span>ANSWER: </span>
          <span>{secret}</span>
        </div>
        <RaisedButton className="board-next" label={"help (" + this.meta.hintsLeft + ")"} 
          primary={true} onClick={this.useHint} 
        />
      </div>
    );
  }

  render() {
    this.info = this.props.quote.info;
    this.meta = this.props.quote;

    const label = this.props.userAnswer.length >= 4 ?'check' :'give up';

    return (
      <div>
        <Paper className="board-quote" zDepth={2}>
          <div>{this.info.quote}</div>
          <TextField hintText="match at least 4 letters in a row" onChange={this.props.onInputChange} />
          <RaisedButton className="board-next" label={label} primary={true} onClick={this.props.onBtnClick} />
          {this.renderStatus()}
          {this.renderHint( this.info.author )}
        </Paper>
      </div>
    );
  }
}
