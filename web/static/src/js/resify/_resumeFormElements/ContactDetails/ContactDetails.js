import React from "react";

import {TextField} from 'material-ui';
import {TimePickerRange} from '../ElementTypes';

const 	toTime	= new Date().setHours(8),
		fromTime= new Date().setHours(17,0,0,0);


class ContactDetailsForm__Phone extends React.Component {
	
	
	handleFormating = (event) => {
		event.target.value = this.formatNumber(event.target.value);
	}
	 
	formatNumber(val) {
		let x = val.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  	  	return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
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

class ContactDetailsForm__Availability extends React.Component {
	render() {
		return (
			<TimePickerRange toDefault={toTime} fromDefault={fromTime} />
		);
	}
}


class ContactDetailsForm extends React.Component {
	render() {
		return (
			<div>
				<ContactDetailsForm__Phone />
				<ContactDetailsForm__Availability />
			</div>
		);
	}
}

export class ContactDetails extends React.Component {
	render() {
		return (
			<ContactDetailsForm />
		);
	}
}