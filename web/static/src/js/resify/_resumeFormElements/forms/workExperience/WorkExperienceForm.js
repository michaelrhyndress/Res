import React from "react";
import {AccordionField} from '../../ElementTypes';
import { connect } from 'react-redux';
import { addWork, deleteWork } from './actions';

import {
	PositionField,
	EmployerField,
	PeriodField,
	SummaryField
} from './components';

import Theme from '../../../../../themes/FormTheme';


class ExperienceForm extends React.Component {
	render() {
		return(
			<div>
				<PositionField parent={this.props.parent} />
				<EmployerField parent={this.props.parent} />
				<PeriodField parent={this.props.parent} />
				<SummaryField parent={this.props.parent} />
			</div>
		);
	}
}


@connect((store) => {
	return {
		work: store.Work
	}
})
export class WorkExperienceForm extends React.Component {
	
	deleteItem = (key) => {
		console.log("deleting: " + key);
		this.props.dispatch(deleteWork(key));
	};

	addItem() {
		this.props.dispatch(addWork());
	}
	
	render() {
		const accordionItems = this.props.work.map( (item, key) => {
			let  actionItems = [
				{
					side: "right",
					icon: "fa fa-trash-o",
					tooltip: "Delete this item?",
					iconStyle: {
						color: Theme.palette.dangerColor
					},
					action: this.deleteItem.bind(this, key)
				}
			],
			openCloseItem = {
				side: "left",
				iconStyle: {fontSize: "18px"},
				icon: {
					open: "fa fa-plus-square",
					close: "fa fa-minus-square"
				}
			};
			return (
				<AccordionField
					key={key}
					label = {this.props.position}
					openCloseItem = {openCloseItem}
					actionItems = {actionItems} >

					<ExperienceForm parent={key} />

				</AccordionField>
			);
		}, this);
		
		return (
			<div>
				{accordionItems}
				<label
					onClick={this.addItem.bind(this)} >
					+ Add
				</label>
			</div>
		);
	}
}