import React from "react";

import {TimePicker} from 'material-ui';

import '../../../../../scss/resify/_formElements/_elementTypes/_time/timePickerRange.scss';


const timePickerStyle={
	
}

export class TimePickerRange extends React.Component {
	render() {
		
		const to = {value: this.props.fromDefault},
			from = {value: this.props.toDefault}
		return (
			<div class="resify__form__timeField__wrapper">
				<label class="resify__form__timeField__title">Available: </label>
				<TimePicker
					id="availability.from"
					format="ampm"
					className="resify__form__timeField"
					floatingLabelText="From"
					value={to}
					textFieldStyle={timePickerStyle}
				/>
				<TimePicker
					id="availability.to"
					format="ampm"
					className="resify__form__timeField"
					floatingLabelText="To"
					value={from}
					textFieldStyle={timePickerStyle}
	        	/>
			</div>
		);
	}
}