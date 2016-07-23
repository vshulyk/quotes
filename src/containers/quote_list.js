import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { nextQuote } from '../actions/next_quote_action';
import { answerChange } from '../actions/answer_change_action';
import { checkAnswer } from '../actions/check_answer_action';

import Quote from '../components/single_quote';

import RaisedButton from 'material-ui/RaisedButton';

class QuoteList extends Component {
	constructor(props) {
		super(props);

		this.renderQuotes = this.renderQuotes.bind(this);
		this.showNextQuote = props.nextQuote.bind(this);
		this.checkUserAnswer = this.checkUserAnswer.bind(this);
	}
	checkUserAnswer() {
		let quotes = this.props.quotes;
		this.props.checkAnswer( quotes[ quotes.length-1 ], this.props.answer );
	}
	renderQuotes() {
    let onChange = this.props.answerChange,
  			checkAnswer = this.checkUserAnswer,
  			status = this.props.status,
        value = this.props.answer;
		return this.props.quotes.map(function(x){
			return (
				<Quote 
					key={x.ts} qd={x} value={value} status={status}
					onChange={onChange} onBtnClick={checkAnswer}
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
    answer: state.currentAnswer,
    status: state.currentStatus
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ nextQuote, answerChange, checkAnswer }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps )( QuoteList );
