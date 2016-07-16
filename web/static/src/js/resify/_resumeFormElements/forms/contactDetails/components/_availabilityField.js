import React from 'react';
import {TimePickerRange, PillGroup} from '../../../ElementTypes';
import { connect } from 'react-redux';
import { setAvailabilityDays, setAvailabilityTime } from '../actions';

@connect((store) => {
	return {
		time: {
			start: store.ContactDetailsForm.time.start,
			end: store.ContactDetailsForm.time.end
		},
		days: {
			Sun: store.ContactDetailsForm.days.Sun,
			Mon: store.ContactDetailsForm.days.Mon,
			Tues: store.ContactDetailsForm.days.Tues,
			Wed: store.ContactDetailsForm.days.Wed,
			Thurs: store.ContactDetailsForm.days.Thurs,
			Fri: store.ContactDetailsForm.days.Fri,
			Sat: store.ContactDetailsForm.days.Sat
		}
	}
})
export class AvailabilityField extends React.Component {
	
	handleChangeTimePicker = (time) => {
		console.log(this.props.time);
		this.props.dispatch(setAvailabilityTime(
			...this.props.time, time
		));
	}
	
	handleChangePillGroup = (days) => {
		console.log(days);
		this.props.dispatch(setAvailabilityDays(
			...this.props, days
		));
	}
	
	render() {
		return (
			<div>
				<TimePickerRange
					times={this.props.time} 
					onChange={this.handleChangeTimePicker} />
			
				<PillGroup
					options={this.props.days}
					onChange={this.handleChangePillGroup}
					classes={['rounded','bordered']} />
			</div>
		);
	}
}