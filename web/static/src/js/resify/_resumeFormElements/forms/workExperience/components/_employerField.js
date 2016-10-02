import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { connect } from 'react-redux';
import { setWorkEmployer } from '../../../../profile/actions';

@connect()
export class EmployerField extends Component {

	static propTypes = {
		parent: React.PropTypes.string
	};

	handleChange = (event) => {
		this.props.dispatch(setWorkEmployer(
			this.props.parent,
			event.target.value
		));
	};

	render() {
		return (
			<TextField
				id="experience.set.employer"
				className="text-field-long"
			    ref="textfield"
			    floatingLabelText={gettext("Employer")}
				fullWidth={true}
				onChange={this.handleChange}
				value={this.props.company} />
		);
	}
}