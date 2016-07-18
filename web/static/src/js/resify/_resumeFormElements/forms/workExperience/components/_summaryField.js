import React, { Component } from 'react';
import { TextField } from 'material-ui';

export class SummaryField extends Component {
	render() {
		return (
			<TextField
				id="experience.set.summary"
				className="text-field-long"
			    ref="textfield"
			    floatingLabelText="Summary"
				multiLine={true}
				fullWidth={true}
				hintText="Highlights. Learning Experiences. Etc." />
		);
	}
}