


import axios from "axios";

const API_URL = "http://localhost:8080/api/interventions/";
//    return axiosApiInstance.post('/postnrmltopic/getSelectedTopicPosts',{...data},{ headers: {Authorization: 'Bearer ' + token }})

const getinterventions=(data)=>{
  return axios.get(API_URL+"interventions")
}
const addinterventions=(data)=>{
  return axios.post(API_URL+"interventions",{...data})
}
const updateinterventions=(data,id)=>{
  return axios.post(API_URL+"interventions/"+id,{...data})
}
const deleteinterventions=(id)=>{
  return axios.delete(API_URL+"interventions/"+id)
}

/*
const deleteComments=(data)=>{
  return axios.post(API_URL+"deleteComments",{...data},{ headers: {Authorization: 'Bearer ' + localStorage.getItem("token") }})
}*/
export {deleteinterventions,getinterventions,addinterventions,updateinterventions};
