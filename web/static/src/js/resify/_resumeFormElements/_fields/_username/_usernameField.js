import React from 'react';
import {TextField} from "material-ui";
import Theme from "../../../../../themes/FormTheme";


export class UsernameField extends React.Component {
	
	// TODO: Use Dict to track validity
	constructor() {
		super();
		this.state = {
			error: {text: "", color: ""},
			label: "Username"
		};
	}
	
	handleKeyEvents = (event) => {
		const val = event.target.value;
	    if(event.key == 'Enter'){
	     	if(!this.slugify(event, val).valid || !this.checkLength(val)){
				 this.setError({error: {text:"Change was not saved.", color: Theme.palette.dangerColor}});
				  return;
			} 
			else {
				console.log("saved");
				this.setError({error: {text:"Change saved.", color: Theme.palette.successColor}});
				return;
			}
	     }
	}
	
	handleLeaveField = (event) => {
		var valid	= false;
		valid = this.checkLength(event.target.value);
		console.log("Saved?");
	}
	
	handleInput = (event) => {
		var valid	= false,
			slug	= this.slugify(event, event.target.value);
			
		event.target.value = slug.slug;
		if(slug.valid) {
			valid = this.checkLength(slug.slug);
		}
		if (valid) { //Query to see if Available
			this.checkAvailability(slug.slug); //Store last checked so I can use it for onChange
		}
		this.updatePath(slug.slug);
	}
	
	checkAvailability(string) {
		this.setError({error: {text:"Checking...", color: Theme.palette.successColor}});
		
		//Just a test for async
		this.setError({error: {text:"Available! Hit 'Enter' to save.", color: Theme.palette.successColor}});
		
		return true;
	}
	
	checkLength(string) {
		var valid = (string.length >= 5);
		if (!valid) {
			if (string.length === 0) {
				this.setError();
			}
			this.setError({error: {text: "Must be at least 5 characters", color: Theme.palette.warningColor}});
		} else {
			this.setError();
		}
		return valid;
	}

	setError(error="") {
		if (error === "") {
			this.setState({
				error: {text: "", color: ""},
				label: "Username"
			});
		} else {
			this.setState(error);
		}
	}
	
	
	updatePath(slug) {
		this.setError({label: "Username - "+ window.location.href.split('?')[0] + slug});
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
			this.setError({error: {text: "Only use letters, numbers and '_'", color: Theme.palette.infoColor}});
		}
		else {
			this.setError();
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
				errorText={this.state.error.text}
				errorStyle={{color: this.state.error.color}}
				fullWidth={true} 
				onInput={this.handleInput}
				onBlur={this.handleLeaveField}
				onKeyDown={this.handleKeyEvents} />
		);
	}
}