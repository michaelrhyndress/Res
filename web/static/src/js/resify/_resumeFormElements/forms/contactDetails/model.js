type TimeObj = {
	start: String;
	end: String;
};

type DaysObj = {
	Sun: Boolean;
	Mon: Boolean;
	Tues: Boolean;
	Wed: Boolean;
	Thurs: Boolean;
	Fri: Boolean;
	Sat: Boolean;
};

type ContactDetailsForm = {
	phone: String;
	days: DaysObj;
	time: TimeObj
};

export type State = ContactDetailsForm;