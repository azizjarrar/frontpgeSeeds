


import axios from "axios";

const API_URL = "http://localhost:8080/api/";
//    return axiosApiInstance.post('/postnrmltopic/getSelectedTopicPosts',{...data},{ headers: {Authorization: 'Bearer ' + token }})

const getplantes=(data)=>{
  return axios.get(API_URL+"plantes")
}
const addplantes=(data)=>{
  return axios.post(API_URL+"plantes",{...data})
}
const updateplantes=(data,id)=>{
  return axios.put(API_URL+"plantes/"+id,{...data})
}
const deletePlante=(id)=>{
  return axios.delete(API_URL+"plantes/"+id)
}

/*
const deleteComments=(data)=>{
  return axios.post(API_URL+"deleteComments",{...data},{ headers: {Authorization: 'Bearer ' + localStorage.getItem("token") }})
}*/
export {deletePlante,getplantes,addplantes,updateplantes};
