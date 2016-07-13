import React from 'react';
import {TextField} from 'material-ui';

export class PersonalStatementField extends React.Component {
	render() {
		return (
			<TextField
				id="personl-statement"
				className="text-field-long"
		        ref="textfield"
		        floatingLabelText="Personal Statement"
				multiLine={true}
				fullWidth={true}
				hintText="Let's talk about you." />
		);
	}
}