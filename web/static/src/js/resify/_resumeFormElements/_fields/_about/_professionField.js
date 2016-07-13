import React from 'react';
import {TextField} from 'material-ui';

export class ProfessionField extends React.Component {
	render() {
		return (
			<TextField
				id="profession"
				className="text-field-long"
		        ref="textfield"
		        floatingLabelText="Profession"
				fullWidth={true} />
		);
	}
}