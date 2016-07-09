import React from "react";

import Footer from "./_sidebar/_footer";
import TabNavigation from "./_sidebar/_tabNavigation";
//css
import "../../scss/resify/_sidebar/sidebar.scss";


export default class Sidebar extends React.Component {	
	render() {
		return (
			<div class={this.props.open ? 'resify__sidebar' : 'resify__sidebar--hidden'}>
				<TabNavigation />
				<Footer />
			</div>
		);
	}
}