import React from "react";
import {TextField} from 'material-ui';
import {AccordionField} from '../ElementTypes';
import {DatePickerRange} from '../ElementTypes';

class ExperienceForm__Position extends React.Component {
	render() {
		return (
			<TextField
				id="experience.position"
				className="text-field-long"
			    ref="textfield"
			    floatingLabelText="Position"
				fullWidth={true} />
		);
	}
}

class ExperienceForm__Employer extends React.Component {
	render() {
		return (
			<TextField
				id="experience.employer"
				className="text-field-long"
			    ref="textfield"
			    floatingLabelText="Employer"
				fullWidth={true} />
		);
	}
}


class ExperienceForm__Period extends React.Component {
	render() {
		return (
			<DatePickerRange />
		);
	}
}

class ExperienceForm__Statement extends React.Component {
	render() {
		return (
			<TextField
				id="experience.statement"
				className="text-field-long"
			    ref="textfield"
			    floatingLabelText="Personal Statement"
				multiLine={true}
				fullWidth={true}
				hintText="Highlights. Learning Experiences. Etc." />
		);
	}
}

class ExperienceForm extends React.Component {
	render() {
		return(
			<div>
				<ExperienceForm__Position />
				<ExperienceForm__Employer />
				<ExperienceForm__Period />
				<ExperienceForm__Statement />
			</div>
		);
	}
}

export class WorkExperience extends React.Component {
	deleteItem() {
		console.log("Deleted");
	}
	render() {
		return (
			<div>
				<AccordionField
					label = "Front End Developer"
					openCloseItem = {{
						side: "left",
						iconStyle: {fontSize: "18px"},
						icon: {
							open: "fa fa-plus-square",
							close: "fa fa-minus-square"
						}
					}}
					actionItems = {[
						{
							side: "right",
							icon: "fa fa-trash-o",
							tooltip: "Delete this item?",
							iconStyle: {
								color: '#C92228'
							},
							action: this.deleteItem.bind(this)
						}
					]}
				>
					<ExperienceForm />
				</AccordionField>
			</div>
		);
	}
}