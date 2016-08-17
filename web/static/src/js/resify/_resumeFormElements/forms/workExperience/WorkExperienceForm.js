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
		active: store.profile.active_resume,
		resumes: store.profile.resumes
	}
})
export class WorkExperienceForm extends React.Component {

	componentWillMount = () => {
		this.active_resume = this.props.resumes[this.props.active] || null;
		console.log(this.props.resumes);
		console.log(this.props.active);
	};

	deleteItem = (key) => {
		console.log("deleting: " + key);
		this.props.dispatch(deleteWork(key));
	};

	addItem() {
		const nextID = Math.max.apply(Math, this.props.work.map(function(obj){
			return obj.order;
		}));
		this.props.dispatch(addWork());
	}
	
	render() {
		if (this.active_resume == null) { return null; }

		const accordionItems = this.this.active_resume.map( (item) => {
			let  actionItems = [
				{
					side: "right",
					icon: "fa fa-trash-o",
					tooltip: "Delete this item?",
					iconStyle: {
						color: Theme.palette.dangerColor
					},
					action: this.deleteItem.bind(this, item.id)
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
					key={item.id}
					label = {item.position}
					openCloseItem = {openCloseItem}
					actionItems = {actionItems} >

					<ExperienceForm parent={item.id} />

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