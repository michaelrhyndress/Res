import React from "react";
import {Checkbox, Divider} from 'material-ui';
import {LabelAndField} from '../ElementTypes';
import '../../../../scss/resify/_formElements/_elementTypes/_text/checkboxAndField.scss';


export class AccountInformation extends React.Component {
	render() {
		return (
			<div>
				<h1>Account Information</h1>
				<Divider />
				<Checkbox
					id="profile.public"
				    name="profile.public"
				    value="profile.public"
					label={["Public profile?",<span className="descriptive-text"> | Allow others to view your résumé.</span>]}
					className="resify__form__checkbox-field"
				    iconStyle={{
				      fill: '#3f8aff'
				    }}
				/>
				<Divider />
					<LabelAndField label="Created" content="Dec. 8, 2014" help="Your resume's birthday!" />
				<Divider />
					<LabelAndField label="Modified" content="Jan. 9, 2016" help="Your last update." />
			</div>
		);
	}
}