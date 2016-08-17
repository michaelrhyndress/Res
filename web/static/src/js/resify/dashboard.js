import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import { getProfile } from './profile/actions';
//MUI

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DashboardTheme from '../../themes/DashboardTheme.js';

// Components
import Frame from './_frame';
import Sidebar from './_sidebar';

//REDUX
import store from "./store";

// Css
import "../../scss/resify/_dashboard/dashboard.scss";

@connect((store) => {
	return {

	}
})
export default class Dashboard extends React.Component {

	constructor() {
		super();
		this.state = {
			sidebar: {
				render: true,
				startOpen: true
			}
		};
	}
	
	toggleSidebar() {
		this.state.sidebar.startOpen = !this.state.sidebar.startOpen;
		this.setState({sidebar: this.state.sidebar});
	}
	
	render() {
		const options = {
			btn: {
				fullwidth: {
					render: this.state.sidebar.render,
					toggle: this.toggleSidebar.bind(this),
					startFull: this.state.sidebar.render && !this.state.sidebar.startOpen
				}
			}
		};
		
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(DashboardTheme)}>
				<div class="dashboard__wrapper">
					{this.state.sidebar.render
						? <Sidebar open={this.state.sidebar.startOpen} />
						: null
					}
					<Frame options={options}/>
				</div>
			</MuiThemeProvider>
		);
	}
}


const app = document.getElementById('dashboard');

ReactDOM.render(<Provider store={store}>
	<Dashboard />
</Provider>, app);