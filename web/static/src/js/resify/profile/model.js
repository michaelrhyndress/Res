type User = {
	first_name: String,
	last_name: String,
	username: String,
	email: String
};

type TimeObj = {
	start: String,
	end: String
};

type DaysObj = {
	Sun: Boolean,
	Mon: Boolean,
	Tues: Boolean,
	Wed: Boolean,
	Thurs: Boolean,
	Fri: Boolean,
	Sat: Boolean
};

type Availability = {
	phone: String,
	days: DaysObj,
	time: TimeObj
};

type Resume = {
	"id": String,
	"created_by": Number,
	"name": String,
	"summary": String,
	"work": null,
	"education": null,
	"skills": null,
	"references": null,
	"theme": null,
	"updated_date": String,
	"created_date": String
};

type Resumes = [Resume];

type Profile = {
	user: User,
	label: String,
	summary: String,
	active_resume: String,
	availability: Availability,
	is_public: Boolean,
	location: Object,
	resumes: Resumes,
	social_profiles: Object,
	start_page: Number,
	website: String
};

export type State = Profile;
