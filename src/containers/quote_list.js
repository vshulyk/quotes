import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { nextQuote } from '../actions/next_quote_action';
import { onAnswerChange } from '../actions/answer_change_action';
import { markSolved } from '../actions/mark_solved_action';
import { getHint } from '../actions/get_hint_action';

import Quote from '../components/quote_current';
import QuoteListItem from '../components/quote_list_item';

import CircularProgress from 'material-ui/CircularProgress';



class QuoteList extends Component {
	constructor(props) {
		super(props);

		this.renderCurrentQuote = this.renderCurrentQuote.bind(this);
		this.renderList = this.renderList.bind(this);
		this.showNextQuote = props.nextQuote.bind(this);

		this.checkAnswer = this.checkAnswer.bind(this);
		this.solveAndFetch = this.solveAndFetch.bind(this);

		// INIT
		this.showNextQuote();
	}

	checkAnswer() {
		const answer = this.props.currentQuote.info.author,
			userAnswer = this.props.userInput;

		if ( userAnswer.length >= 4 && answer.toLowerCase().indexOf( userAnswer.toLowerCase() ) >= 0 ) {
			this.solveAndFetch( true );
		} else {
			this.solveAndFetch( false );
		}
	}

	solveAndFetch( result ) {
		this.props.markSolved( result );
    this.props.nextQuote();
	}

	renderCurrentQuote() {
		if ( !this.props.currentQuote ) {
			return (
				<CircularProgress />
			)
		}

		return (
			<Quote 
				quote={this.props.currentQuote} userAnswer={this.props.userInput}
				onInputChange={this.props.onAnswerChange} 
				onHintBtnClick={this.props.getHint}
				solveAndFetch={this.solveAndFetch}
				onBtnClick={this.checkAnswer}
			/>
		)
	}

	renderList() {
		if ( this.props.quotes.length ) {
			return this.props.quotes.map(function(q) {
				return (
					<QuoteListItem key={q.ts} quote={q} />
				);
			});
		}
	}

	render() {
		return (
			<div className="col-lg-6 col-md-8 col-centered" >
				{ this.renderCurrentQuote() }
				{ this.renderList() }
			</div>
		)
	}
};



function mapStateToProps(state) {
	return {
		quotes: state.quotes.list,
		currentQuote: state.quotes.current,
    userInput: state.currentAnswer
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ nextQuote, onAnswerChange, markSolved, getHint }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps )( QuoteList );
