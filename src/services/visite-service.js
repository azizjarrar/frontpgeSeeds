


import axios from "axios";

const API_URL = "http://localhost:8080/api/visites/";
//    return axiosApiInstance.post('/postnrmltopic/getSelectedTopicPosts',{...data},{ headers: {Authorization: 'Bearer ' + token }})

const getvisites=(data)=>{
  return axios.get(API_URL+"visites")
}
const addvisites=(data)=>{
  return axios.post(API_URL+"visites",{...data})
}
const updavisites=(data,id)=>{
  return axios.put(API_URL+"visites/"+id,{...data})
}
const deletevisites=(id)=>{
  return axios.delete(API_URL+"visites/"+id)
}
const getVistesOfUser=(id)=>{
  return axios.get(API_URL+"visites/"+id)

}
/*
const deleteComments=(data)=>{
  return axios.post(API_URL+"deleteComments",{...data},{ headers: {Authorization: 'Bearer ' + localStorage.getItem("token") }})
}*/
export {getVistesOfUser,getvisites,addvisites,updavisites,deletevisites};
