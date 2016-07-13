import React from 'react';
import {TextField} from 'material-ui';

export class PhoneField extends React.Component {
	
	formatNumber = (val) => {
		let x = val.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  	  	return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
	}
	
	handleFormating = (event) => {
		event.target.value = this.formatNumber(event.target.value);
	}
	
	render() {
		return (
			<TextField
				ref="phone"
				id="phone1"
				className="text-field-long"
		        ref="textfield"
		        floatingLabelText="Primary Phone Number."
				fullWidth={true}
				type='tel'
				onInput={this.handleFormating} />
		);
	}
}
// <ContactDetailsForm__Phone />
//<ContactDetailsForm__Availability />