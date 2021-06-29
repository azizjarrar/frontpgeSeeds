


import axios from "axios";

const API_URL = "http://localhost:8080/api/users/";
//    return axiosApiInstance.post('/postnrmltopic/getSelectedTopicPosts',{...data},{ headers: {Authorization: 'Bearer ' + token }})

const getUsers=(data)=>{
  return axios.get(API_URL+"users")
}
const getUserById=(id)=>{
  return axios.get(API_URL+"users/"+id)
}
const updateUser=(data)=>{
  return axios.get(API_URL+"users")
}
const DelteUser=(data)=>{
  return axios.get(API_URL+"users")
}
/*
const deleteComments=(data)=>{
  return axios.post(API_URL+"deleteComments",{...data},{ headers: {Authorization: 'Bearer ' + localStorage.getItem("token") }})
}*/
export {getUsers,getUserById,updateUser,DelteUser};
