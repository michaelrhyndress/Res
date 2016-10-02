import React from "react";
import {AccordionField} from '../../ElementTypes';
import { connect } from 'react-redux';
import { addWork, deleteWork } from '../../../profile/actions';

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
				<PositionField parent={this.props.parent} position={this.props.data.position}/>
				<EmployerField parent={this.props.parent} company={this.props.data.company}/>
				<PeriodField parent={this.props.parent} />
				<SummaryField parent={this.props.parent} summary={this.props.data.summary}/>
			</div>
		);
	}
}


@connect((store) => {
	return {
		active: store.profile.active_resume,
		resumes: store.profile.resumes.entities
	}
})
export class WorkExperienceForm extends React.Component {

	// componentWillMount = () => {
	// };

	deleteItem = (key) => {
		console.log("deleting: " + key);
		this.props.dispatch(deleteWork(key));
	};

	addItem = () => {
		const workList = this.props.resumes[this.props.active].work;
		const order = (workList == null || workList.length == 0) ?  100 : Math.max.apply(Math, workList.map(function(obj){
			return obj.order + 1;
		}));
		this.props.dispatch(addWork(order));
	};
	
	render() {
		const activeResume = this.props.resumes[this.props.active];
		let accordionItems = [];
		if (activeResume.work) {
			accordionItems = activeResume.work.map((item) => {
				let actionItems = [
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
						label={item.position}
						openCloseItem={openCloseItem}
						actionItems={actionItems}>

						<ExperienceForm parent={item.id} data={item}/>

					</AccordionField>
				);
			}, this);
		}
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