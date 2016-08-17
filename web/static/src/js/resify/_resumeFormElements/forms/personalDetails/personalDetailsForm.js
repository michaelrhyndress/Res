import React from 'react';

import {
	FullnameField,
	PersonalStatementField,
	ProfessionField,
	UsernameField
} from './components';

export class PersonalDetailsForm extends React.Component {
	render() {
		return (
			<div>
				<FullnameField />
				<UsernameField />
				<ProfessionField />
				<PersonalStatementField />
			</div>
		);
	}
}