import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
  const [empDetails,setEmpDetails]=useState([])
  const {id}=useParams()
  useEffect(()=>{
    getData()
  },[])

  async function getData(){
    let data=await fetch(`http://localhost:8080/employee/${id}`)
    data=await data.json()
    setEmpDetails(data)
  }
  console.log(empDetails.tasks)
  let t=empDetails.tasks
  console.log(t)
  return (
    <div className="user_details">
      <img className="user_image" src={empDetails.image}/>
      <h4 className="user_name">{empDetails.employee_name}</h4>
      <span className="user_salary">${empDetails.salary}</span>
      <span className="tasks">
        {empDetails.tasks.map((e)=>{
          return <li className="task">{e}</li>
        })}
        
      </span>
      
      Status: <b className="status">{empDetails.status}</b>
      Title: <b className="title">{empDetails.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
// {
//   "id": 1,
//   "employee_name": "Kial Bengtsen",
//   "employee_id": "3ec7a664-9948-4099-9829-a8c75deef782",
//   "title": "Team Lead",
//   "salary": 1000,
//   "image": "http://dummyimage.com/185x177.png/ff4444/ffffff",
//   "username": "kbengtsen0",
//   "password": "oJ79pX",
//   "tasks": ["fixing bugs"],
//   "status": "working",
//   "team": "frontend"
// },