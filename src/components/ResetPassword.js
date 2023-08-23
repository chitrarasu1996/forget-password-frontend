import React, { useEffect } from 'react'
import {FormGroup,Label,Input,Form,Button} from "reactstrap"
import { useState } from 'react'
import { useLocation, useParams,useNavigate } from 'react-router-dom'
import { resetPassword } from '../service/api'

const ResetPassword = () => {
const navigate=useNavigate()
    const [password,setPassword]=useState({
      password:"",
      confirmPassword:""
    })
 

    const searchParams = new URLSearchParams(document.location.search)
let getToken=searchParams.get("token")
let getId=searchParams.get("id")



    const submitted=async(e)=>{
      e.preventDefault()

      if(password.password.length>2&&password.confirmPassword.length>2){
    const res=await resetPassword({password:password.password},getId,getToken)

if(res.data.success){
 
  alert(res.data.message)
  navigate("/")
  return
}else{
  alert(res.data.message)
}
  }else{
    alert("password or confirm password shold be same and more than 2 characters")
}
       

    }
  return (
<div>
<Form  onSubmit={submitted} className='form-wrapper'>

<div className='background-wrapper'>
<h2 className='title'>Reset password</h2>

<FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
   onChange={(e)=>setPassword({...password,password:e.target.value})}
      value={password.password}

      />
     
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    <FormGroup floating>
      <Input
        id="examplePassword1"
        name="password1"
        placeholder="confirm password"
        type="password"
        onChange={(e)=>setPassword({...password,confirmPassword:e.target.value})}
        value={password.confirmPassword}

      />
     
      <Label for="examplePassword1">
       confirm Password
      </Label>
    </FormGroup>


<Button  type="submit" color="primary">
Create New password
</Button>

</div>
</Form>

</div>
  )
}

export default ResetPassword