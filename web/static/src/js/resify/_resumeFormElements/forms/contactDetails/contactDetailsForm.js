import React from "react";
import {TextField} from 'material-ui';
import {TimePickerRange, PillGroup} from '../../ElementTypes';
import Theme from "../../../../../themes/FormTheme";

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