import React from "react";
import {Tabs, Tab} from 'material-ui';

import {
	PersonalDetails,
	ContactDetails,
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
					<h1>Toggle to business</h1>
					<h1>Find Jobs</h1>
					<h1>Update Resume</h1>
			
					<h1>Logout</h1>
					<h1>Invite</h1>
				</Tab>
			
				<Tab icon={<i class="fa fa-user"></i>}>
					<PersonalDetails />
					<ContactDetails />
					<GeoLocation />
				</Tab>
			
				<Tab icon={<i class="fa fa-briefcase"></i>}>
			 		<WorkExperience />
				</Tab>
			
				<Tab icon={<i class="fa fa-graduation-cap"></i>}>
			 		<EducationHistory />
					<PublicationHistory />
					<AwardHistory />
				</Tab>
			
				<Tab icon={<i class="fa fa-tasks"></i>}>
			 		<SkillSet />
				</Tab>
			
				<Tab icon={<i class="fa fa-file-image-o"></i>}>
			 		<ThemeSelector />
				</Tab>
			
				<Tab icon={<i class="fa fa-lightbulb-o"></i>}>
			 		<ReferenceCollection />
				</Tab>
			
				<Tab icon={<i class="fa fa-cog"></i>}>
			 		<AccountInformation />
					<TagCloud />
				</Tab>
			
			</Tabs>
		);
	}
}