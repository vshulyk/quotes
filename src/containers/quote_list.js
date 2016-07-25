import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { nextQuote } from '../actions/next_quote_action';
import { answerChange } from '../actions/answer_change_action';
import { checkAnswer } from '../actions/check_answer_action';
import { getHint } from '../actions/get_hint_action';

import Quote from '../components/single_quote';

import RaisedButton from 'material-ui/RaisedButton';

class QuoteList extends Component {
	constructor(props) {
		super(props);

		this.renderQuotes = this.renderQuotes.bind(this);
		this.showNextQuote = props.nextQuote.bind(this);
		this.checkUserAnswer = this.checkUserAnswer.bind(this);

		// INIT
		this.showNextQuote();
	}
	checkUserAnswer() {
		this.props.checkAnswer( this.quoteObj, this.userInput );
	}
	renderQuotes() {
    let onChange = this.props.answerChange,
  			checkAnswer = this.checkUserAnswer,
  			getHint = this.props.getHint,
  			status = this.props.status,
  			hintLevel = this.props.hintLevel,
        value = this.props.userInput;

		this.quoteObj = this.props.quotes[ this.props.quotes.length-1 ];

		return this.props.quotes.map(function(x){
			return (
				<Quote 
					key={x.ts} qd={x} value={value} status={status}
					onChange={onChange} onBtnClick={checkAnswer}
					onHintBtnClick={getHint} hintLevel={hintLevel}
				/>
			)
		});
	}
	render() {
		return (
			<div>
				{this.renderQuotes()}
				<RaisedButton className="board-next" label="Next quote" primary={true} onClick={this.showNextQuote} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		quotes: state.quotes,
    userInput: state.currentAnswer,
    status: state.currentStatus,
    hintLevel: state.hints
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ nextQuote, answerChange, checkAnswer, getHint }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps )( QuoteList );
