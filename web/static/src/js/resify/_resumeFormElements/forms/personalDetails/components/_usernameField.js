import React from 'react';
import axios from 'axios';
import { TextField } from "material-ui";
import { connect } from 'react-redux';
import { setUsername } from '../../../../profile/actions';
import Theme from "../../../../../../themes/FormTheme";


const version = 1,
      api = axios.create({
        baseURL: `http://127.0.0.1:8000/@api/v${version}`
      });


@connect((store) => {
	return {
		username: store.profile.user.username
	}
})
export class UsernameField extends React.Component {

	get = (option) => {
		const WORD_MAP = {
			SUCCESS: gettext("Change saved."),
			FAILURE: gettext("Change not saved."),
			PENDING: gettext("Checking..."),
			AVAILABLE: gettext("Available! Hit 'Enter' to save."),
			TAKEN: gettext("Username is not available."),
			TITLE_FIELD: gettext("Username"),
			LENGTH_ERROR_SHORT: gettext("Must be at least 5 characters"),
			FORMATTING_ERROR: gettext("Only use letters, numbers and '_'")
		};
		
		return WORD_MAP[option] || null;
	};

	// TODO: Better method management and saving of validity
	constructor() {
		super();
		// this.defaults = {
		// 	username: window._sharedData.user.username
		// };
		this.defaultError = {text: "", color: ""};
		this.state = {
			error: this.defaultError,
			label: this.get("TITLE_FIELD")
		};
	}
	
	
	checkAvailability(string) {
		this.setError({error: {text: this.get("PENDING"), color: Theme.palette.infoColor}});
		api({
			method: 'GET',
			url: '/users/',
			params: {'username': string},
			headers: { 'Authorization': `JWT ${window._services.api.token}`, 'Content-Type':'application/json' }
		}).then((e) => {
			if (e.data.length === 0) {
				this.setError({error: {text: this.get("AVAILABLE"), color: Theme.palette.successColor}});
			} else {
				this.setError({error: {text: this.get("TAKEN"), color: Theme.palette.warningColor}});
			}
		}).catch(function (error) {
			console.log(error);
		});

		return true;
	}
	
	checkLength(string) {
		var valid = (string.length >= 5);
		if (!valid) {
			if (string.length === 0) {
				this.setError();
			}
			this.setError({error: {text: this.get("LENGTH_ERROR_SHORT"), color: Theme.palette.warningColor}});
		} else {
			this.setError();
		}
		return valid;
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
	};
	
	handleKeyEvents = (event) => {
		const val = event.target.value;
	    if(event.key == 'Enter'){
			if (val == this.props.username) {
				return;
			}
	     	if(!this.slugify(event, val).valid || !this.checkLength(val)){
				 this.setError({error: {text: this.get("FAILURE"), color: Theme.palette.dangerColor}});
				 return;
			} 
			else {
				if (this.state.error.color === Theme.palette.successColor) {
					this.props.dispatch(setUsername(val));
					this.setError({error: {text: this.get("SUCCESS"), color: Theme.palette.successColor}});
				}
				else {
					this.setError({error: {text: this.get("FAILURE"), color: Theme.palette.dangerColor}});
				}
				return;
			}
	     }
	};
	
	handleLeaveField = (event) => {
		event.target.value = this.props.username;
		this.setError();
	};

	setError = (error="") => {
		if (error === "") {
			this.setState({
				error: this.defaultError,
				label: this.get("TITLE_FIELD")
			});
		} else {
			this.setState(error);
		}
	};
	
	slugify = (e, string) => {
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
			this.setError({error: {text: this.get("FORMATTING_ERROR"), color: Theme.palette.infoColor}});
		}
		else {
			this.setError();
			valid = true;
		}
		
		return {slug: slug, valid: valid};
	};
	
	updatePath = (slug) => {
		this.setError({label: this.get("TITLE_FIELD") +" - "+ window.location.href.split('?')[0] + slug});
	};
	
	render() {

		return (
			<TextField
				className="text-field-long"
				defaultValue={this.props.username}
				errorStyle={{color: this.state.error.color}}
				errorText={this.state.error.text}
				floatingLabelText={this.state.label}
				fullWidth={true} 
				id="basics.set.username"
				onBlur={this.handleLeaveField}
				onInput={this.handleInput}
				onKeyDown={this.handleKeyEvents}
		        ref="basics.set.username" />
		);
	}
}