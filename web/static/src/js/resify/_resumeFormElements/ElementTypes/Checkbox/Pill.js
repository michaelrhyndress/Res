import React from 'react';
import objectAssign from 'object-assign';
import {IconButton} from 'material-ui';
import Ink from 'react-ink';
import '../../../../../scss/resify/_formElements/_elementTypes/_checkbox/pill.scss';


export class PillGroup extends React.Component {	
	
	handleClick = (option, e) => {		
		this.props.onChange(
			objectAssign(
				this.props.options,
				{
					[option]: !this.props.options[option]
				}
			)
		);
	}
	
	render() {
		const classes = this.props.classes.join(" ");
		
		var pillNodes = Object.keys(this.props.options).map(function(label, index) {
			let active = this.props.options[label] ? "active "+ classes : classes;
			return (
				<label
					key={index}
					onClick={this.handleClick.bind(this, label)}
					class={active} >
					{label}
					<Ink background={false} />
				</label>
			);
		}, this);
			
		return (
			<div class="resify__form__checkbox__pill-group">
				{pillNodes}
			</div>
		);
	}
}
