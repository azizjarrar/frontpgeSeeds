


import axios from "axios";

const API_URL = "http://localhost:8080/api/staffs/";
//    return axiosApiInstance.post('/postnrmltopic/getSelectedTopicPosts',{...data},{ headers: {Authorization: 'Bearer ' + token }})

const getStaffs=(data)=>{
  return axios.get(API_URL+"staffs")
}
const getOneStaffs=(id)=>{
  return axios.get(API_URL+"staffs/"+id)
}
const addStaf=(data)=>{
  return axios.post(API_URL+"staffs",{...data})
}
const updateStaf=(data,id)=>{
  return axios.put(API_URL+"staffs/"+id,{...data})
}
const deleteStaf=(id)=>{
  return axios.delete(API_URL+"staffs/"+id)
}
/*
const deleteComments=(data)=>{
  return axios.post(API_URL+"deleteComments",{...data},{ headers: {Authorization: 'Bearer ' + localStorage.getItem("token") }})
}*/
export {getOneStaffs,deleteStaf,getStaffs,addStaf,updateStaf};
