import React, { Component } from 'react';
import { TextField } from 'material-ui';

export class EmployerField extends Component {
	render() {
		return (
			<TextField
				id="experience.set.employer"
				className="text-field-long"
			    ref="textfield"
			    floatingLabelText={gettext("Employer")}
				fullWidth={true} />
		);
	}
}