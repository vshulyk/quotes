import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export default class Quote extends Component {
  constructor( props ) {
  	super();
    // BAD IDEA

    // first time
    //this.info = props.quote.info;
    //this.meta = props.quote;
  }

  componentWillUpdate() {
    // BAD IDEA

    //console.log('update');
    //this.info = this.props.quote.info;
    //this.meta = this.props.quote;
  }

  renderStatus() {
    if ( this.meta.isTouched ) {
      return (
        <div>
          <div>
            <span>Solved? </span>
            <span>{this.meta.isSolved}</span>
          </div>
        </div>
      );
    }
    return;
  }

  renderHint( answer ) {
    var length = answer.length,
        revealNumber = !this.meta.hintsLeft ? length :Math.floor(length/(this.meta.hintsLeft+1) ),
        onHintClick = this.props.onHintBtnClick.bind(null,this.meta.hintsLeft);

    if ( this.meta.hintsLeft == 4 ) {
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
        <RaisedButton className="board-next" label="hint?" 
          primary={true} onClick={onHintClick} 
        />
      </div>
    );
  }

  render() {
    this.info = this.props.quote.info;
    this.meta = this.props.quote;

    return (
      <div>
        <Paper className="board-quote" zDepth={2}>
          <div>{this.info.quote}</div>
          <TextField hintText="Hint Text" onChange={this.props.onInputChange} />
          <RaisedButton className="board-next" label="check" primary={true} onClick={this.props.onBtnClick} />
          {this.renderStatus()}
          {this.renderHint( this.info.author )}
        </Paper>
      </div>
    );
  }
}
