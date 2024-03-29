import * as t from './actionTypes';
import axios from 'axios';
import store from '../store';

const version = 1,
      api = axios.create({
        baseURL: `http://127.0.0.1:8000/@api/v${version}`
      }),
      services = axios.create({
        baseURL: 'http://127.0.0.1:8000/@services'
      });



const getAPI = (call, pk = undefined) => {
  if (typeof pk == "number" || typeof pk == "string") {
    call = `${call}/${pk}`;
  }
  return `/${call}/`;
};

const sendPatch = (path, payload, reattempt=true, func=undefined) => {
    api({
      method: 'PATCH',
      url: path,
      data: payload,
      headers: { 'Authorization': `JWT ${window._services.api.token}`, 'Content-Type':'application/json' }
    }).then(() => {
      if (func != undefined) {
        func();
      }
      console.log("saved");
    }).catch(function (error) {
      console.log(error);
      if (reattempt) {
        console.log("reattempting...");
        refreshToken();
        sendPatch(path, payload, func);
      }
    });
};

const refreshToken = () => {
  services({
    method: 'GET',
    url: 'refresh_token/',
    headers: { 'Authorization': `JWT ${window._services.api.token}`, 'Content-Type':'application/json' }
  }).then( (payload) => {
    window._services.api.token = payload.data.token;
    console.log("reauthenticated");
  }).catch(function (error) {
    console.log(error);
  });

};


// export const getProfile = () => ({
//   type: t.GET_PROFILE,
//   payload: axios.get("http://localhost:8000/@api/v1/profile/1/")
// });

//UserDetails
export const setFirstname = ( first_name ) => {
  sendPatch(
      getAPI(
          "users",
          window._sharedData.profile.user.pk
      ),
      {first_name}
  );
  return ({
    type: t.SET_FIRSTNAME,
    payload: first_name
  });
};

export const setLastname = ( last_name ) => {
  sendPatch(
      getAPI(
        "users",
        window._sharedData.profile.user.pk
      ),
      {last_name}
  );
  return ({
    type: t.SET_LASTNAME,
    payload: last_name
  });
};

export const setUsername = ( username ) => {
  sendPatch(
      getAPI(
          "users",
          window._sharedData.profile.user.pk,
          refreshToken()
      ),
      {username}
  );

  return ({
    type: t.SET_USERNAME,
    payload: username
  });
};

export const setLabel = ( label ) => {
  sendPatch(
      getAPI(
          "userdetails",
          window._sharedData.profile.pk
      ),
      {label}
  );
  return ({
    type: t.SET_LABEL,
    payload: label
  });
};

export const setSummary = ( summary ) => {
  sendPatch(
      getAPI(
          "userdetails",
          window._sharedData.profile.pk
      ),
      {summary}
  );
  return ({
    type: t.SET_SUMMARY,
    payload: summary
  });
};


//Contact
export const setAvailabilityPhone = ( phone ) => {
  let newAvail = {...window._sharedData.profile.availability, phone};
  sendPatch(
      getAPI(
          "userdetails",
          window._sharedData.profile.pk
      ),
      {availability: newAvail}
  );
  return ({
    type: t.SET_AVAILABILITY_PHONE,
	payload: phone
  });
};

export const setAvailabilityDays = ( days ) => {
  let newAvail = {...store.getState().profile.availability, days};
  sendPatch(
      getAPI(
          "userdetails",
          window._sharedData.profile.pk
      ),
      {availability: newAvail}
  );
  return ({
    type: t.SET_AVAILABILITY_DAYS,
    payload: days
  });
};

export const setAvailabilityTime = ( time ) => {
  let newAvail = {...store.getState().profile.availability, time};
  sendPatch(
      getAPI(
          "userdetails",
          window._sharedData.profile.pk
      ),
      {availability: newAvail}
  );
  return ({
    type: t.SET_AVAILABILITY_TIME,
    payload: time
  });
};

//Work
export const addWork = ( id, ord ) => {
  return ({
    type: t.ADD_WORK,
    order: ord
  });
};

export const deleteWork = ( id ) => {
  let deletedWork = [
      ...store.getState().profile.resumes.entities[window._sharedData.profile.active_resume].work
  ].filter(function (workItem) {
      return workItem.id != id;
  });

  sendPatch(
      getAPI(
          "resumes",
          window._sharedData.profile.active_resume
      ),
      {work: deletedWork}
  );

  return({
    type: t.DELETE_WORK,
    payload: deletedWork
  })
};

export const setWorkPosition = (parent, payload) => {
  let updatedWorkPosition = [...store.getState().profile.resumes.entities[window._sharedData.profile.active_resume].work];

  for (let workItem of updatedWorkPosition) {
      if (workItem.id === parent) {
          workItem.position = payload;
      }
  }

  sendPatch(
      getAPI(
          "resumes",
          window._sharedData.profile.active_resume
      ),
      {work: updatedWorkPosition}
  );
  return ({
    type: t.SET_WORK_POSITION,
    payload : updatedWorkPosition
  });
};

export const setWorkEmployer = (parent, payload) => {

    let updatedWorkEmployer = [...store.getState().profile.resumes.entities[window._sharedData.profile.active_resume].work];

    for (let workItem of updatedWorkEmployer) {
        if (workItem.id === parent) {
            workItem.company = payload;
        }
    }
    sendPatch(
        getAPI(
            "resumes",
            window._sharedData.profile.active_resume
        ),
        {work: updatedWorkEmployer}
    );
    return ({
        type: t.SET_WORK_EMPLOYER,
        payload : updatedWorkEmployer
  });
};

export const setWorkSummary = (parent, payload) => {
    let updatedWorkSummary = [...store.getState().profile.resumes.entities[window._sharedData.profile.active_resume].work];

    for (let workItem of updatedWorkSummary) {
        if (workItem.id === parent) {
            workItem.summary = payload;
        }
    }
    sendPatch(
        getAPI(
            "resumes",
            window._sharedData.profile.active_resume
        ),
        {work: updatedWorkSummary}
  );
  return ({
    type: t.SET_WORK_SUMMARY,
    payload : updatedWorkSummary
  });
};