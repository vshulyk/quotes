import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { nextQuote } from '../actions/next_quote_action';
import { answerChange } from '../actions/answer_change_action';
import { checkAnswer } from '../actions/check_answer_action';
import { getHint } from '../actions/get_hint_action';

import Quote from '../components/single_quote';

// import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

class QuoteList extends Component {
	constructor(props) {
		super(props);

		this.renderQuotes = this.renderQuotes.bind(this);
		this.showNextQuote = props.nextQuote.bind(this);
		this.renderSingleQuote = this.renderSingleQuote.bind(this);

		// INIT
		this.showNextQuote();
	}

	renderQuotes() {
		if ( !this.props.currentQuote ) {
			return (
				<CircularProgress />
			)
		}

		return [this.props.currentQuote, ...this.props.quotes].map(this.renderSingleQuote);
	}

	renderSingleQuote( quote ) {
		let checkAnswer = this.props.checkAnswer.bind(null, this.props.currentQuote, this.props.userInput);

		return (
			<Quote 
				key={quote.ts} quote={quote} userAnswer={this.props.userInput}
				onInputChange={this.props.onAnswerChange} onBtnClick={checkAnswer}
				onHintBtnClick={this.props.getHint}
			/>
		)
	}

	render() {
		return (
			<div>
				{this.renderQuotes()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		quotes: state.quotes.list,
		currentQuote: state.quotes.current,
    userInput: state.currentAnswer
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ nextQuote, answerChange, checkAnswer, getHint }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps )( QuoteList );
