import React from 'react';
import {TextField} from 'material-ui';
import { connect } from 'react-redux';
import { setAvailabilityPhone } from '../actions';

@connect((store) => {
	return {
		phone: store.ContactDetailsForm.phone
	}
})
export class PhoneField extends React.Component {
	
	formatNumber = (val) => {
		let x = val.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  	  	return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
	}
	
	handleFormating = (event) => {
		let val = this.formatNumber(event.target.value);
		this.props.dispatch(setAvailabilityPhone(
			...this.props,
			val
		));
	};
	
	render() {
		return (
			<TextField
				className="text-field-long"
				floatingLabelText={gettext("Primary Phone Number.")}
				fullWidth={true}
				id="basics.availability.set.phone"
				onChange={this.handleFormating}
				ref="basics.availability.set.phone"
				type='tel'
				value={this.props.phone} />
		);
	}
}
// <ContactDetailsForm__Phone />
//<ContactDetailsForm__Availability />