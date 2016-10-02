import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { connect } from 'react-redux';
import { setWorkPosition } from '../../../../profile/actions';

@connect()
export class PositionField extends Component {

	static propTypes = {
		parent: React.PropTypes.string
	};

	handleChange = (event) => {
		this.props.dispatch(setWorkPosition(
			this.props.parent,
			event.target.value
		));
	};

	render() {
		console.log(this.props.position);
		return (
			<TextField
				id="experience.set.position"
				className="text-field-long"
			    ref="textfield"
			    floatingLabelText={gettext("Position")}
				fullWidth={true}
				onChange={this.handleChange}
				value={this.props.position}/>
		);
	}
}