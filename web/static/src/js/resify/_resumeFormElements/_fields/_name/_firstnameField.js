import React from "react";
import {TextField} from 'material-ui';

export class FirstnameField extends React.Component {
	render() {
		return (
			<TextField
				id="firstname"
				className="text-field-long"
			    ref="textfield"
				style={{
					width: '50%',
					margin: '0 -15px'
				}}
			    floatingLabelText="First Name" />
		);
	}
}