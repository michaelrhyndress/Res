import React from "react";

import {Tabs, Tab, TextField, IconButton} from 'material-ui';
import EventPluginHub from 'react/lib/EventPluginHub';
import TapEventPlugin from 'react/lib/TapEventPlugin';
EventPluginHub.injection.injectEventPluginsByName({ TapEventPlugin });
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from '../../../themes/FormTheme.js';

//Forms
import {
	PersonalDetailsForm,
	ContactDetailsForm,
} from "../_resumeFormElements/forms";

import {
	WorkExperience,
	EducationHistory,
	PublicationHistory,
	AwardHistory,
	SkillSet,
	ThemeSelector,
	ReferenceCollection,
	AccountInformation,
	TagCloud,
	GeoLocation,
} from "../_resumeFormElements";

export default class TabNavigation extends React.Component {	
	render() {
		return (
			<Tabs>
				<Tab icon={<i class="fa fa-th-large"></i>}>
					<div class="resify__tab-section">
						<h1>Toggle to business</h1>
						<h1>Find Jobs</h1>
						<h1>Update Resume</h1>
	
						<h1>Logout</h1>
						<h1>Invite</h1>
					</div>
				</Tab>
	
				<Tab icon={<i class="fa fa-user"></i>}>
					<MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
						<div class="resify__tab-section">
							
							<h1>
								Personal Details 
								<IconButton
									tooltip={["Changes made here will affect all résumés"]}
									tooltipPosition="bottom-left"
									tooltipStyles={{fontSize: '12px'}}
									touch={false}
									iconClassName="fa fa-question-circle"
								/>
							</h1>
							<PersonalDetailsForm />
							
							<h2>Contact Information</h2>
							<ContactDetailsForm />
									
							<h2>Location</h2>
							<GeoLocation />
								
						</div>
					</MuiThemeProvider>
				</Tab>
	
				<Tab icon={<i class="fa fa-briefcase"></i>}>
					<MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
						<div class="resify__tab-section">
							<h1>Experience</h1>
				 			<WorkExperience />
						</div>
					</MuiThemeProvider>
				</Tab>
	
				<Tab icon={<i class="fa fa-graduation-cap"></i>}>
					<MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
						<div class="resify__tab-section">
					 		<EducationHistory />
							<PublicationHistory />
							<AwardHistory />
						</div>
					</MuiThemeProvider>
				</Tab>
	
				<Tab icon={<i class="fa fa-tasks"></i>}>
					<MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
				 		<div class="resify__tab-section">
							<SkillSet />
						</div>
					</MuiThemeProvider>
				</Tab>
	
				<Tab icon={<i class="fa fa-file-image-o"></i>}>
			 		<MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
						<div class="resify__tab-section">
							<ThemeSelector />
						</div>
					</MuiThemeProvider>
				</Tab>
	
				<Tab icon={<i class="fa fa-lightbulb-o"></i>}>
					<MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
						<div class="resify__tab-section">
				 			<ReferenceCollection />
						</div>
					</MuiThemeProvider>
				</Tab>
	
				<Tab icon={<i class="fa fa-cog"></i>}>
			 		<MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
						<div class="resify__tab-section">
							<AccountInformation />
							<TagCloud />
						</div>
					</MuiThemeProvider>
				</Tab>
	
			</Tabs>
		);
	}
}