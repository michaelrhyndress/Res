import React from "react";
import {TextField} from 'material-ui';
import {AccordionField} from '../ElementTypes';
import {DatePickerRange} from '../ElementTypes';

import Theme from '../../../../themes/FormTheme';

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
		
		const actionItems = [
			{
				side: "right",
				icon: "fa fa-trash-o",
				tooltip: "Delete this item?",
				iconStyle: {
					color: Theme.palette.dangerColor
				},
				action: this.deleteItem.bind(this)
			}
		],
		openCloseItem = {
			side: "left",
			iconStyle: {fontSize: "18px"},
			icon: {
				open: "fa fa-plus-square",
				close: "fa fa-minus-square"
			}
		},
		labels = ["label1", "label2", "label3"];
		
		var accordionItems = labels.map( (item, key) => {
			console.log(item);
			return (
				<AccordionField
					key={key}
					label = {item}
					openCloseItem = {openCloseItem}
					actionItems = {actionItems} >
			
					<ExperienceForm fields={{}}/>
					</AccordionField>
				);
			}, this);
		
		return (
			<div>
				{accordionItems}
			</div>
		);
	}
}