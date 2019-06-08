import superagent from 'superagent';

const API_URL = 'http://localhost:3000';
const Turn_On_Lights = '/lightgroup/on';

export const allLightsOn = store => {
  return superagent.get(`${API_URL}${Turn_On_Lights}`)
};
