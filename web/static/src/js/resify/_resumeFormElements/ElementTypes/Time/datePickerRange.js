import React from "react";
import {DatePicker} from 'material-ui';

import '../../../../../scss/resify/_formElements/_elementTypes/_time/datePickerRange.scss';


export class DatePickerRange extends React.Component {
	
	constructor(props) {
	    super(props);

	    const minDate = new Date();
	    const maxDate = new Date();
	    minDate.setFullYear(minDate.getFullYear() - 1);
	    minDate.setHours(0, 0, 0, 0);
	    maxDate.setFullYear(maxDate.getFullYear() + 1);
	    maxDate.setHours(0, 0, 0, 0);
		
		this.state = {
			minDate: minDate,
			maxDate: maxDate,
			autoOk: false,
			disableYearSelection: false
		};
	}

	
	render() {
		
		const to = {value: this.props.fromDefault},
			from = {value: this.props.toDefault}
		return (
			<div class="resify__form__timeField__wrapper">
				<label class="resify__form__timeField__title">Available: </label>
				<DatePicker
					autoOk={this.state.autoOk}
					floatingLabelText="Started"
					defaultDate={this.state.minDate}
					disableYearSelection={this.state.disableYearSelection}
				/>
				<DatePicker
					autoOk={this.state.autoOk}
					floatingLabelText="Ended"
					defaultDate={this.state.maxDate}
					disableYearSelection={this.state.disableYearSelection}
				/>
			</div>
		);
	}
}