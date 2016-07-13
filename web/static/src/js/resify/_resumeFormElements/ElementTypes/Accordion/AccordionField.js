import React from "react";
import {Divider} from "material-ui";
import ActionPanel from "../Panel/ActionPanel";

let accordionStyle = {
	accordion: {
		padding: '15px 0',
		fontSize: '18px',
		whiteSpace: 'nowrap'
	},
	section: {
		display: 'none'
	},
	label: {

	}
}

export class AccordionField extends React.Component {
	
	constructor() {
		super();
		this.state = {open: false};
	}
	
	handleToggle(){
		this.setState({
			open: !this.state.open,
		});
	}
	
	render() {
		let toggler=[],leftPanelItems=[],rightPanelItems=[];
			
		toggler = [{
			side: this.props.openCloseItem.side,
			icon: (this.state.open) ? this.props.openCloseItem.icon.close : this.props.openCloseItem.icon.open,
			iconStyle: this.props.openCloseItem.iconStyle,
			action: this.handleToggle.bind(this)
		}];
		toggler = this.props.actionItems.concat(toggler);
		leftPanelItems= toggler.filter(function(i) {return i.side === "left"});
		rightPanelItems = toggler.filter(function(i) {return leftPanelItems.indexOf(i) < 0;});
		
		accordionStyle.section = {
			display: ((!this.state.open) ? 'none' : 'block')
		};
		
		[leftPanelItems, rightPanelItems].map(e => { return e.reverse() });
		
		return (
			<div style={{marginTop: '20px'}}>
				<Divider />
				<div style={accordionStyle.accordion}>
					<ActionPanel items={leftPanelItems} style={{float:'left'}}/>
			
					<label style={accordionStyle.label}>
						{this.props.label}
					</label>
						
					<ActionPanel items={rightPanelItems} style={{float:'right'}} />
						
				</div>
				<div style={accordionStyle.section}>
						{this.props.children}
				</div>
				{this.state.open ? '' : <Divider />}
			</div>
		);
	}
}