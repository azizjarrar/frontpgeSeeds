


import axios from "axios";

const API_URL = "http://localhost:8080/api/demandes/";
//    return axiosApiInstance.post('/postnrmltopic/getSelectedTopicPosts',{...data},{ headers: {Authorization: 'Bearer ' + token }})

const getDemandes=(data)=>{
  return axios.get(API_URL+"demandes")
}
const addDemandes=(data)=>{
  return axios.post(API_URL+"demandes",{...data})
}
const updateDemandes=(data,id)=>{
  return axios.post(API_URL+"demandes/"+id,{...data})
}
const DeleteDemandes=(id)=>{
  return axios.delete(API_URL+"demandes/"+id)
}

/*
const deleteComments=(data)=>{
  return axios.post(API_URL+"deleteComments",{...data},{ headers: {Authorization: 'Bearer ' + localStorage.getItem("token") }})
}*/
export {getDemandes,addDemandes,updateDemandes,DeleteDemandes};
