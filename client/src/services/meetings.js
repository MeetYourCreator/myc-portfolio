import api from './apiConfig'

const BASE_URL = 'https ://twelve-step-alphabet-api.herokuapp.com/'

//Read All
export const getAllMeetings = async () => {
  const resp = await api.get(`${BASE_URL}/meetings`);
  return resp.data;
}

//Read One
export const getOneMeeting = async (id) => {
  const resp = await api.get(`${BASE_URL}/meetings/${id}`);
  return resp.data;
}

//Destroy
export const destroyReview = async(id) => {
  const resp = await api.delete(`${BASE_URL}/meetings/${id}`);
  return resp;
}

//Create
export const postReview = async (reviewData) => {
  const resp = await api.post(`${BASE_URL}/meetings`, reviewData);
  return resp.data;
}

//Update
export const putUpdatedReview = async (id, updatedData) => {
  const resp = await api.put(`${BASE_URL}/meetings/${id}`, updatedData);
  return resp.data;
}