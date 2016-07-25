import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export default class Quote extends Component {
  constructor( props ) {
  	super();

    this.info = props.qd.data;

    this.getStatus = this.getStatus.bind(this);
  }
  getStatus() {
    const status = this.props.status;
    if ( this.props.status ) {
      return (
        <div>
          <div>
            <span>{this.props.status}</span>
          </div>
        </div>
      );
    }
    return;
  }
  renderHint( answer ) {
    var length = answer.length,
        showAnswer = this.props.hintLevel == 4,
        revealNumber = showAnswer ? length :this.props.hintLevel * Math.floor(length/4),
        onHintClick = this.props.onHintBtnClick.bind(null,this.props.hintLevel);

    const secret = answer.slice(0,revealNumber) + answer.slice(revealNumber).replace(/./g,'*');

    console.log('SECRET', secret,this.info.author);

    if ( showAnswer ) {
      return(
      <div>
        <span>ANSWER:</span>
        <span>{secret}</span>
      </div>
      );
    }
    return (
      <div>
        <div>
          <span>ANSWER:</span>
          <span>{secret}</span>
        </div>
        <RaisedButton className="board-next" label="hint?" primary={true} 
          onClick={onHintClick} 
        />
      </div>
    );
  }
  render() {
    return (
      <div>
        <Paper className="board-quote" zDepth={2}>
          <div>{this.info.quote}</div>
          <TextField hintText="Hint Text" value={this.props.value} onChange={this.props.onChange} />
          <RaisedButton className="board-next" label="check" primary={true} onClick={this.props.onBtnClick} />
          {this.getStatus()}
          {this.renderHint( this.info.author )}
        </Paper>
      </div>
    );
  }
}
