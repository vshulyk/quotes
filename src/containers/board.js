import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { nextQuote } from '../actions/next_quote_action';

class Board extends Component {
	constructor() {
		super();

		this.renderQuotes = this.renderQuotes.bind(this);
		this.showNextQuote = this.showNextQuote.bind(this);
	}
	renderQuotes() {
		return this.props.quotes.map(x => <div key={x.ts}>{x.data.quote}</div>);
	}
	showNextQuote() {
		this.props.nextQuote();
	}
	render() {
		return (
			<div>
				{this.renderQuotes()}
				<div className="btn btn-primary" onClick={this.showNextQuote}>Add</div>
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

export default connect( mapStateToProps, mapDispatchToProps )( Board );