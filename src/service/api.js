
import axios from "axios";

const API="https://reset-password-ibi2.onrender.com/"

export const RegisterDetails=async(userName,Email,Password)=>{
    const registerdDetails=await axios.post(API+"users/resgister", {userName,Email,Password})
return registerdDetails
}

export const  loggedDetails=async(Email,Password)=>{
    const logged=await  axios.post(API+"user/login",{Email,Password})
    return logged
}

export const FogetPasswordDetails=async(Email)=>{
    const reset=await axios.post(API+"user/forget-password",{Email})
 
   return reset
};

export const resetPassword=async(password,userId,token)=>{

    const response=await axios.post(API+`user/reset-password/${userId}`,
    password,
    {headers:{
        token
    }} 
     
     )
  return response

}