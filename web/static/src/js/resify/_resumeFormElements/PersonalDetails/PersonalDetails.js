import React from "react";
import {TextField} from 'material-ui';

class PersonalDetailsForm__Name__First extends React.Component {
	render() {
		return (
			<TextField
				id="firstname"
				className="text-field-long"
			    ref="textfield"
				style={{
					width: '50%',
					margin: '0 -15px'
				}}
			    floatingLabelText="First Name" />
		);
	}
}

class PersonalDetailsForm__Name__Last extends React.Component {
	render() {
		return (
			<TextField
				id="lastname"
				className="text-field-long"
			    ref="textfield"
				style={{
					width: '50%',
					margin: '0 15px'
				}}
			    floatingLabelText="Last name"/>
		);
	}
}

class PersonalDetailsForm__Name extends React.Component {
	render() {
		return (
			<div class="col-md-12">
				<PersonalDetailsForm__Name__First />
				<PersonalDetailsForm__Name__Last />
			</div>
		);
	}
}

class PersonalDetailsForm__Handle extends React.Component {
	
	constructor() {
		super();
		this.state = {
			error: "",
			label: "URL"
		};
	}
	
	handleChange = (event) => {
		var ready	= false,
			slug	= this.slugify(event, event.target.value);
			
		event.target.value = slug.slug;
		
		if(slug.valid) {
			ready = this.checkLength(slug.slug);
			this.updatePath(slug.slug);
		}
		if (ready) { //Query to see if Available
			this.checkAvailability(slug.slug);
		}
	}
	
	checkAvailability(string) {
		console.log("Available");
		return true;
	}
	
	checkLength(string) {
		var valid = (string.length >= 5);
		if (!valid) {ow
			this.setState({error: "Must be at least 5 characters"});
		} else {
			this.resetError();
		}
		return valid;
	}
	
	resetError() {
		this.setState({error: ""});
	}
	
	updatePath(slug) {
		this.setState({label: "URL - "+ window.location.href.split('?')[0] + slug});
	}
	
	slugify(e, string) {
		let valid = false,
		slug = string
	    .toString()
	    .trim()
	    .replace(/\s+/g, "-")
	    .replace(/[^\w\-]+/g, "")
	    .replace(/\-\-+/g, "-")
	    .replace(/^-+/, "")
	    .replace(/-+$/, "");
		
		if (slug != string) {
			this.setState({error: "Only use letters, numbers and '_'"});
		}
		else {
			this.resetError();
			valid = true;
		}
				
		return {slug: slug, valid: valid};
	}
	
	render() {
		return (
			<TextField
				id="handle"
				className="text-field-long"
		        ref="textfield"
		        floatingLabelText={this.state.label}
				errorText={this.state.error}
				fullWidth={true} 
				onInput={this.handleChange}/>
		);
	}
}

class PersonalDetailsForm__Profession extends React.Component {
	render() {
		return (
			<TextField
				id="profession"
				className="text-field-long"
		        ref="textfield"
		        floatingLabelText="Profession"
				fullWidth={true} />
		);
	}
}

class PersonalDetailsForm__Statement extends React.Component {
	render() {
		return (
			<TextField
				id="personl-statement"
				className="text-field-long"
		        ref="textfield"
		        floatingLabelText="Personal Statement"
				multiLine={true}
				fullWidth={true}
				hintText="Let's talk about you." />
		);
	}
}



class PersonalDetailsForm extends React.Component {
	render() {
		return (
			<div>
				<PersonalDetailsForm__Name />
				<PersonalDetailsForm__Handle />
				<PersonalDetailsForm__Profession />
				<PersonalDetailsForm__Statement />
			</div>
		);
	}
}

export class PersonalDetails extends React.Component {
	render() {
		return (
			<PersonalDetailsForm />
		);
	}
}