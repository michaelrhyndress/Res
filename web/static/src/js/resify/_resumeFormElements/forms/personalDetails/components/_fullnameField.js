import React from "react";
import { TextField } from 'material-ui';
import { connect } from 'react-redux';
import { setFirstname, setLastname } from '../../../../profile/actions';

@connect((store) => {
	return {
		first_name: store.profile.user.first_name,
		last_name: store.profile.user.last_name
	}
})
export class FullnameField extends React.Component {

	handleChangeFirstname = (e, value) => {
		this.props.dispatch(setFirstname(value));
	};
	handleChangeLastname = (e, value) => {
		this.props.dispatch(setLastname(value));
	};
	
	render() {
		return (
			<div style={{width: '100%', margin: '0 15px'}}>
				<TextField
					className="text-field-long"
					floatingLabelText={gettext("First Name")}
					id="basics.set.firstname"
					onChange={this.handleChangeFirstname}
					ref="basics.set.fullname"
					style={{
						width: '50%',
						margin: '0 -15px'
					}}
					value={this.props.first_name} />

				<TextField
					className="text-field-long"
					floatingLabelText={gettext("Last Name")}
					id="basics.set.lastname"
					onChange={this.handleChangeLastname}
					ref="basics.set.fullname"
					style={{
						width: '50%',
						margin: '0 15px'
					}}
					value={this.props.last_name} />
			</div>
		);
	}
}