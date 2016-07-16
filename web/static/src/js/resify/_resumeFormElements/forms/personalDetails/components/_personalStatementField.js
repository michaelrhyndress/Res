import React from 'react';
import { TextField } from 'material-ui';
import { connect } from 'react-redux';
import { setSummary } from '../actions';

@connect((store) => {
	return {
		summary: store.PersonalDetailsForm.summary
	}
})
export class PersonalStatementField extends React.Component {
	
	handleChange = (e, value) => {
		this.props.dispatch(setSummary(value));
	}
	
	get = (option) => {
		const WORD_MAP = {
			TITLE_FIELD: gettext("Personal Statement"),
			HINT_FIELD: gettext("Let's talk about you.")
		};
		return WORD_MAP[option] || null;
	}
	
	render() {
		return (
			<TextField
				className="text-field-long"
				floatingLabelText={this.get("TITLE_FIELD")}
				fullWidth={true}
				hintText={this.get("HINT_FIELD")}
				id="basics.set.summary"
				multiLine={true}
				onChange={this.handleChange}
		        ref="basics.set.summary"
				value={this.props.summary} />
		);
	}
}