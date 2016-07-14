import React from "react";
import {TextField} from "material-ui";

export class FullnameField extends React.Component {
	
	static propTypes = {
		firstname: React.PropTypes.string,
		lastname: React.PropTypes.string
	}
	
	render() {
		return (
			<div style={{width: '100%', margin: '0 15px'}}>
				<TextField
					id="firstname"
					className="text-field-long"
				    ref="textfield"
					style={{
						width: '50%',
						margin: '0 -15px'
					}}
				    floatingLabelText="First Name"
					defaultValue={this.props.firstname}/>
				<TextField
					id="lastname"
					className="text-field-long"
				    ref="textfield"
					style={{
						width: '50%',
						margin: '0 15px'
					}}
				    floatingLabelText="Last name"
					defaultValue={this.props.lastname}/>
			</div>
		);
	}
}