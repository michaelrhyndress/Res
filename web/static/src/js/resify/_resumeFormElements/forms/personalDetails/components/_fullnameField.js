import React from "react";
import { TextField } from 'material-ui';
import { connect } from 'react-redux';
import { setFullname } from '../actions';

@connect((store) => {
	return {
		fullname: store.PersonalDetailsForm.fullname,
	}
})
export class FullnameField extends React.Component {
	
	handleChange = (e, value) => {
		this.props.dispatch(setFullname(value));
	}
	
	render() {
		return (
			<TextField
				className="text-field-long"
				floatingLabelText={gettext("Full Name")}
				fullWidth={true} 
				id="basics.set.fullname"
				onChange={this.handleChange}
		        ref="basics.set.fullname"
				value={this.props.fullname} />
		);
	}
}