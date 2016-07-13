import React from "react";
import {TextField} from 'material-ui';

export class LastnameField extends React.Component {
	render() {
		return (
			<TextField
				id="lastname"
				className="text-field-long"
			    ref="textfield"
				style={{
					width: '50%',
					margin: '0 15px'
				}}
			    floatingLabelText="Last name"/>
		);
	}
}