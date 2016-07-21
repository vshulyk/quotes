import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { nextQuote } from '../actions/next_quote_action';
import { answerChange } from '../actions/answer_change_action';

import Quote from '../components/single_quote';

import RaisedButton from 'material-ui/RaisedButton';

class QuoteList extends Component {
	constructor(props) {
		super(props);

		this.renderQuotes = this.renderQuotes.bind(this);
		this.showNextQuote = props.nextQuote.bind(this);

        this.onAnswerTextChange = props.answerChange;
	}
	renderQuotes() {
        var onChange = this.onAnswerTextChange,
            value = this.props.answer;
		return this.props.quotes.map(function(x){
			return (
				<Quote key={x.ts} qd={x} onChange={onChange} value={value} />
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
        answer: state.currentAnswer
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ nextQuote, answerChange }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps )( QuoteList );
