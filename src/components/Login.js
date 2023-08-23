
import React from 'react'
import {FormGroup,Label,Input,Form,Button, CardText} from "reactstrap"
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { loggedDetails } from '../service/api';
const Login=()=>{

const navigate=useNavigate();

const [emailDetails,setEmailDetails]=useState("");

const [password,setPassword]=useState("")

const submitted=async(e)=>{
  e.preventDefault()
  try{
    const response=await  loggedDetails(emailDetails,password) 
    alert(response.data.message)
    if(response.data.success){
       localStorage.setItem("login",response.data.email)   
    }

  }catch(er){
alert(er)
console.log(er)
  }

}
  return (
    <div>
    <Form className='form-wrapper'>
      <div className='background-wrapper'>
      <h2 className='title '>Login</h2>
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
    <Button  color="primary" className='me-2' onClick={submitted}>
      Login
    </Button>
   
    <Button onClick={()=>navigate('/forget-password')} color="secondary"  >
    forgetPassword
    </Button>
    <div className='d-flex align-items-start mt-2 justify-content-center'>
      <h6 className='hover-wrap'style={{textDecoration:"underline"}} onClick={()=>navigate("/register")}>New Here? Create Account </h6>
    </div>
    </div>
    
  </Form>
  
   </div>
  )
  }
export default Login