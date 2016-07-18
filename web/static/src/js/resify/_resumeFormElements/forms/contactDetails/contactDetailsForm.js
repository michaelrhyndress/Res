import React from "react";

import {
	PhoneField,
	AvailabilityField,
} from './components';

export class ContactDetailsForm extends React.Component {
	render() {
		return (
			<div style={{display: 'inline-block'}}>
				<PhoneField />
				<AvailabilityField />
			</div>
		);
	}
}