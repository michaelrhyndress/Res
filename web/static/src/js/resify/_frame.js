import React from "react";

//css
import "../../scss/resify/_frame/frame.scss"

export default class Frame extends React.Component {
	render() {
		const 	btnProps	= this.props.options.btn,
				classOptions= ["resify__frame--fullwidth", "resify__frame"],
				btnOptions	= [
					gettext("Edit Mode"),
					gettext("Fullscreen")
				],
				classname	= classOptions[btnProps.fullwidth.startFull ? 0 : 1],
				btnText		= btnOptions[btnProps.fullwidth.startFull ? 0 : 1];
			
		return (
			<div class={classname}>
				<h1>Frame</h1>
				{ btnProps.fullwidth.render ?
					<button 
						onClick={btnProps.fullwidth.toggle}
						class="resify__frame__btn--fullscreen">
						{btnText}
						</button> : null }
				<div class="resify__frame--resume">
						{JSON.stringify(window._sharedData)}
				</div>
			</div>
		);
	}
}