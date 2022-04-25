
import { useState, useEffect } from "react"

export const Login = () => {
  //  use reqres to log user in.
  


const [token,setToken]=useState("")

    
        const [formData,setFormData]=useState({
           username:"",
           password:""
        })
       
      console.log(formData)

    const handleChange=(e)=>{
       
        // console.log(e.target.value)
        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
      }

    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(formData)
        fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(formData)
        }).then(()=>{
            getData()
        })
          
        

    }
     
    useEffect(()=>{
        getData()

    },[])

    async function getData(){
        let data=await fetch("https://reqres.in/api/login")
        data=await data.json()
        setToken(data)
    }
    console.log(token)
  return (
    <form className="loginform" onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        value={formData.username} onChange={handleChange}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        value={formData.password} onChange={handleChange}
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
  }
