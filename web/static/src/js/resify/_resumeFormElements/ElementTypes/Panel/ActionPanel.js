import React from 'react';
import {IconButton} from 'material-ui';
import theme from "../../../../../themes/FormThemeDark";


const panelIconStyle = {
	cursor: 'pointer',
	padding: '0 20px 0 0',
	height: 'auto'
};

class ActionItem extends React.Component {
	
	getTooltipPosition() {
		return (this.props.side === "left")
			? "bottom-right"
			: "bottom-left"
	}
	
	getIconStyles() {
		return Object.assign(
			{},
			{
				color: theme.palette.primary1Color
			},
			this.props.iconStyle
		);
	}
	
	render() {
		return (
			<a onClick={this.props.action} style={{float: 'right'}}>
				<IconButton
					style={panelIconStyle}
					iconStyle={this.getIconStyles()}
					tooltip={this.props.tooltip}
					tooltipPosition={this.getTooltipPosition()}
					touch={true}
					iconClassName={this.props.icon}
				/>
			</a>
		);
	}
}

class ActionPanel extends React.Component {
	render() {
		const actionNodes = this.props.items.map(function(node, index) {
			return (
				<ActionItem
					key={index}
					side={node.side}
					tooltip={node.tooltip}
					icon={node.icon}
					iconStyle={node.iconStyle}
					action={node.action} />
			);
		});
		
		return (
			<div style={this.props.style} >
				{actionNodes}
			</div>
		);
	}
}

export default ActionPanel;