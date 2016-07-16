import React, {Component, PropTypes} from "react";
import objectAssign from 'object-assign';
import {TimePicker} from 'material-ui';

import '../../../../../scss/resify/_formElements/_elementTypes/_time/timePickerRange.scss';

export class TimePickerRange extends Component {
	
	static propTypes = {
		times: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.object
		]),
		onChange: PropTypes.func,
	};
	 
	sendCallback = (setter, string) => {
		this.props.onChange(
			objectAssign(
				this.props.times,
				{
					[setter]: string
				}
			)
		);
	}
	
	handleChangeStart = (event, datetime) => {
		let string = (datetime == null) ? null : datetime.toJSON();
		this.sendCallback("start", string);
	};
	
	handleChangeEnd = (event, datetime) => {
		let string = (datetime == null) ? null : datetime.toJSON();
		this.sendCallback("end", string);
	};
	
	getDate = (string) => {
		if (string != null) {
			return new Date(string);
		}
		return string;
	}
	
	render() {
		
		return (
			<div class="resify__form__timeField__wrapper">
				<label class="resify__form__timeField__title">
					{gettext("Available")+":"}
				</label>
			
				<TimePicker
					className="resify__form__timeField"
					floatingLabelText= { gettext("From") }
					format="ampm"
					id="basics.availability.set.start"
					onChange = { this.handleChangeStart }
					value={ this.getDate(this.props.times.start) }/>
	
				<TimePicker
					className="resify__form__timeField"
					floatingLabelText={ gettext("To") }
					format="ampm"
					id="basics.availability.set.end"
					onChange = { this.handleChangeEnd }
					value={ this.getDate(this.props.times.end) } />
			</div>
		);
	}
}