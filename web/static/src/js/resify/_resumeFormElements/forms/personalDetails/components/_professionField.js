import React from 'react';
import {TextField} from 'material-ui';
import { connect } from 'react-redux';
import { setLabel } from '../actions';

@connect((store) => {
	return {
		label: store.PersonalDetailsForm.label
	}
})
export class ProfessionField extends React.Component {
	
	componentWillMount = () => {
		this.props.dispatch(setLabel(window._sharedData.basics.label))
	}
	
	handleChange = (e, value) => {
		this.props.dispatch(setLabel(value));
	}
	
	render() {	
		return (
			<TextField
				className="text-field-long"
				floatingLabelText={gettext("Profession")}
				fullWidth={true}
				id="basics.set.label"
		        ref="basics.set.label"
				onChange={this.handleChange}
				value={this.props.label} />
		);
	}
}