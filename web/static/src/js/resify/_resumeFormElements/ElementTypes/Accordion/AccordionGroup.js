import React from "react";

import {AccordionField} from "./AccordionField";

export class AccordionGroup extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
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
							color: Theme.palette.dangerColor
						},
						action: this.deleteItem.bind(this)
					}
				]} >
				<ExperienceForm />
			</AccordionField>

		);
	}
}