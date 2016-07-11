import React from "react";

import '../../../../../scss/resify/_formElements/_elementTypes/_text/LabelAndField.scss';

export class LabelAndField extends React.Component {
	render() {
		return (
			<div class="resify__form__label-field">
				<div class="input-block">
					<label class="display-label">{this.props.label}</label>
					<label class="display-box">
						{this.props.content} <span class="descriptive-text">| {this.props.help}</span>
					</label>
				</div>
			</div>
		);
	}
}