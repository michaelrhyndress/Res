import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { connect } from 'react-redux';
import { setWorkSummary } from '../../../../profile/actions';

@connect()
export class SummaryField extends Component {
	static propTypes = {
		parent: React.PropTypes.string
	};

	handleChange = (event) => {
		this.props.dispatch(setWorkSummary(
			this.props.parent,
			event.target.value
		));
	};

	render() {
		return (
			<TextField
				id="experience.set.summary"
				className="text-field-long"
			    ref="textfield"
			    floatingLabelText={gettext("Summary")}
				multiLine={true}
				fullWidth={true}
				onChange={this.handleChange}
				hintText={gettext("Highlights. Learning Experiences. Etc.")}
				value={this.props.summary} />
		);
	}
}