import * as t from './actionTypes';

export const setAvailabilityPhone = ( dict ) => ({
	type: t.SET_AVAILABILITY_PHONE,
	payload: dict
});
export const setAvailabilityDays = ( dict ) => ({
	type: t.SET_AVAILABILITY_DAYS,
	payload: dict
});
export const setAvailabilityTime = ( dict ) => ({
	type: t.SET_AVAILABILITY_TIME,
	payload: dict
});