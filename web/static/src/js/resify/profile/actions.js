import * as t from './actionTypes';
import axios from 'axios';

const version = 1,
      base = `http://127.0.0.1:8000/@api/v${version}`,
      axi = axios.create({baseURL: base});

axi.defaults.headers.common['Authorization'] = `JWT ${window._services.api.token}`;
// axi.defaults.headers.common['Content-Type'] = 'application/json';

const getAPI = (call, pk = undefined) => {
  if (typeof pk == "number") {
    call = `${call}/${pk}`;
  }
  return `/${call}/`;
};

const sendPatch = (api, json) => {
    axi({
      method: 'PATCH',
      url: api,
      data: json,
      headers: { 'Authorization': `JWT ${window._services.api.token}`, 'Content-Type':'application/json' }
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
  console.log(firstname);
  sendPatch(
      getAPI(
          "users",
          window._sharedData.profile.user.pk
      ),
      {first_name: firstname}
  );
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