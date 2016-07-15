import React from "react";
import {TextField} from 'material-ui';
import {TimePickerRange, PillGroup} from '../../ElementTypes';
import Theme from "../../../../../themes/FormTheme";

import {
	PhoneField,
	AvailabilityField,
} from '../../_fields/';

export class ContactDetailsForm extends React.Component {
	render() {
		return (
			<div>
				<PhoneField />
				<AvailabilityField />
			</div>
		);
	}
}