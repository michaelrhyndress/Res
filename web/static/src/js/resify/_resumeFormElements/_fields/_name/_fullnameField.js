import React from "react";
import {LastnameField} from "./";
import {FirstnameField} from "./";

export class FullnameField extends React.Component {
	render() {
		return (
			<div style={{width: '100%', margin: '0 15px'}}>
				<FirstnameField />
				<LastnameField />
			</div>
		);
	}
}