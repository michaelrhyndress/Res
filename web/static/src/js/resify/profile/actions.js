import * as t from './actionTypes';
import axios from 'axios';

// axios.defaults.headers.common['xsrfCookieName'] = 'csrftoken';
// axios.defaults.headers.common['xsrfHeaderName'] = 'X-CSRFToken';
// axios.defaults.headers.common['Content-Type'] = 'application/json';

const getAPI = (call, pk = undefined) => {
  let version = 1,
      base = `http://localhost:8000/@api/v${version}`;

  if (typeof pk != undefined) {
    call = `${call}/${pk}`;
  }
  return `${base}/${call}/`;
};

const sendPatch = (api, json) => {
    axios({
      method: 'patch',
      url: api,
      data: json
    }).then(() => {
      console.log("saved");
    }).catch(function (error) {
      console.log(error);
    });
};


export const getProfile = () => ({
  type: t.GET_PROFILE,
  payload: axios.get("http://localhost:8000/@api/v1/profile/1/")
});

//UserDetails
export const setFirstname = ( firstname ) => {
  let api = "/@api/v1/users/" + window._sharedData.profile.user.pk + "/";
  axios({
    method: 'patch',
    url: api,
    data: {first_name: firstname}
  }).then((response) => {
    console.log("saved");
  });
  return ({
    type: t.SET_FIRSTNAME,
    payload: firstname
  });
};

export const setLastname = ( lastname ) => ({
  type: t.SET_LASTNAME,
  payload: lastname
});

export const setUsername = ( username ) => ({
  type: t.SET_USERNAME,
  payload: username
});

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

export const setSummary = ( summary ) => ({
  type: t.SET_SUMMARY,
  payload: summary
});