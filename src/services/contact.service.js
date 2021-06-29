
import axios from "axios";
const API_URL = "http://localhost:8080/api/contactStaff/";
const API_URL_USER = "http://localhost:8080/api/contactUser/";

//    return axiosApiInstance.post('/postnrmltopic/getSelectedTopicPosts',{...data},{ headers: {Authorization: 'Bearer ' + token }})
const getcontactStaff=()=>{
  return axios.get(API_URL+"contactStaff")
}
const addcontactStaff=(data)=>{
  return axios.post(API_URL+"contactStaff",{...data})
}
/***********************************************************************************************************************************/
const getcontactUser=()=>{
    return axios.get(API_URL_USER+"contactUser")
  }
  const addcontactUser=(data)=>{
    return axios.post(API_URL_USER+"contactUser",{...data})
  }
export {getcontactStaff,addcontactStaff,getcontactUser,addcontactUser};
