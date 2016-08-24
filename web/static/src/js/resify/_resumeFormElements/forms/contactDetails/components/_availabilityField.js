import React from 'react';
import {TimePickerRange, PillGroup} from '../../../ElementTypes';
import { connect } from 'react-redux';
import { PhoneField } from '../components';
import { setAvailabilityDays, setAvailabilityTime } from '../../../../profile/actions';

@connect((store) => {
	return {
		time: {
			start: store.profile.availability.time.start,
			end: store.profile.availability.time.end
		},
		days: {
			Sun: store.profile.availability.days.Sun,
			Mon: store.profile.availability.days.Mon,
			Tues: store.profile.availability.days.Tues,
			Wed: store.profile.availability.days.Wed,
			Thurs: store.profile.availability.days.Thurs,
			Fri: store.profile.availability.days.Fri,
			Sat: store.profile.availability.days.Sat
		}
	}
})
export class AvailabilityField extends React.Component {

	handleChangeTimePicker = (time) => {
		console.log(this.props.time);
		this.props.dispatch(setAvailabilityTime(
			...this.props.time, time
		));
	};
	
	handleChangePillGroup = (days) => {
		console.log(days);
		this.props.dispatch(setAvailabilityDays(days));
	};
	
	render() {
		return (
			<div>
				<PhoneField />

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