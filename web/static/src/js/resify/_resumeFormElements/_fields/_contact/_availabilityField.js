import React from 'react';
import {TimePickerRange, PillGroup} from '../../ElementTypes';

const 	toTime	= new Date().setHours(8),
		fromTime= new Date().setHours(17,0,0,0);
		
export class AvailabilityField extends React.Component {
	
	constructor() {
		super();
		
		this.state = {
			timeRange: {
				fromTime: '7 pm' ,
				toTime: '9 pm',
			},
			selectables: {
				"Sun": false,
				"Mon": true,
				"Tues": true,
				"Wed": true,
				"Thurs": true,
				"Fri": true,
				"Sat": false,
			}
		}
	}
	
	handleChange = (selectables) => {
		console.log(selectables);
		this.setState({selectables});
	}
	
	render() {
		return (
			<div>
				<TimePickerRange toDefault={this.state.toTime} fromDefault={this.state.fromTime} />
				<PillGroup
					options={this.state.selectables}
					onChange={this.handleChange}
					classes={['rounded','bordered']}
					/>
			</div>
		);
	}
}