import React from 'react'


import {FormGroup,Label,Input,Form,Button} from "reactstrap"
import { useState } from 'react';
import {RegisterDetails} from "../service/api"
;
import { useNavigate } from 'react-router-dom';

 
 const Register=()=> {
   const navigate=useNavigate()
const [emailDetails,setEmailDetails]=useState("");

const [password,setPassword]=useState("")

 const[userName,setUserName]=useState("")


const submitted=async(e)=>{
  e.preventDefault();

const res=await  RegisterDetails(userName,emailDetails,password)
console.log(res)
if(res.data.success){
alert(res.data.message)
navigate("/")
}else{
  alert(res.data.message)
}
}
  return (
    <div>

    <Form  onSubmit={submitted}className='form-wrapper'>

      <div className='background-wrapper'>
      <h1 className='title '>Register</h1>
      <FormGroup floating>
    
    <Input
      id="name"
      name="name"
      placeholder="Enter name"
      type="text"
      onChange={(e)=>setUserName(e.target.value)}
      value={userName}
    />
    <Label for="name" >
  username
    </Label>
  
  </FormGroup>
    <FormGroup floating>
    
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
        onChange={(e)=>setEmailDetails(e.target.value)}
        value={emailDetails}
      />
      <Label for="exampleEmail" >
        Email
      </Label>
    
    </FormGroup>
  
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
   onChange={(e)=>setPassword(e.target.value)}
      value={password}

      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>

    {' '}
    <div className='d-flex justify-content-evenly align-items-center' > 
    <Button  type='submit' className='me-2'color="primary" >
      Submit
    </Button>
   
     
    </div>
    <h6 className='hover-wrap mt-2' onClick={()=>navigate("/")} style={{textDecoration:"underline"}} color="secondary" >Back To Login</h6> 
    </div>
  </Form>
  
   </div>
  )
}
export default Register;
