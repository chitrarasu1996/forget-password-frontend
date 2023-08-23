import React, { useEffect } from 'react'
import {FormGroup,Label,Input,Form,Button} from "reactstrap"
import { useState } from 'react';
import {  FogetPasswordDetails } from '../service/api';
import { useNavigate } from 'react-router-dom';
const ForgetPassword = () => {
const navigate=useNavigate()

    const [emailDetails,setEmailDetails]=useState("");

    const submitted=async()=>{
      try{
        const response=await  FogetPasswordDetails(emailDetails)
         
        if(response.data.success){
alert(response.data.message)
        }else{
          alert(response.data.message)
        }
      }catch(er){
        alert("something went Wrong")
      }
       
 
    }
  return (
  <div>
    <Form className='form-wrapper'>

<div className='background-wrapper'>
<h2 className='title '>Forget password</h2>

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



<Button   color="secondary" onClick={submitted}>
Submit
</Button>

</div>
</Form>
  </div>
  )
}

export default ForgetPassword;