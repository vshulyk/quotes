import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { nextQuote } from '../actions/next_quote_action';
import Quote from '../components/single_quote';

import RaisedButton from 'material-ui/RaisedButton';

class QuoteList extends Component {
	constructor() {
		super();

		this.renderQuotes = this.renderQuotes.bind(this);
		this.showNextQuote = this.showNextQuote.bind(this);
	}
	renderQuotes() {
		return this.props.quotes.map(function(x){
			return (
				<Quote key={x.ts} qd={x}/>
			)
		});
	}
	showNextQuote() {
		this.props.nextQuote();
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
		quotes: state.quotes
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		nextQuote: nextQuote
	}, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps )( QuoteList );