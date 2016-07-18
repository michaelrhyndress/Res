import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { connect } from 'react-redux';
import { setPosition } from '../actions';

@connect((store, ownProps) => {
	const _this = store.Work[ownProps.parent];
	console.log(_this.position);
	return {
		position: _this.position
	}
})
export class PositionField extends Component {

	static propTypes = {
		parent: React.PropTypes.number
	};

	handleChange = (event) => {
		this.props.dispatch(setPosition(
			this.props.parent,
			event.target.value
		));
	};

	render() {
		return (
			<TextField
				id="experience.set.position"
				className="text-field-long"
			    ref="textfield"
			    floatingLabelText= {gettext("Position")}
				fullWidth={true}
				onChange={this.handleChange}
				value={this.props.position}/>
		);
	}
}