import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeList.css"
export const EmployeeList = () => {
  const [employeesList, setEmployeesList] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await fetch("http://localhost:8080/employee");
    data = await data.json();
    setEmployeesList(data);
  }

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}

      {employeesList.map((e) => {
        return (
          <div className="employee_card" key={e.id}>
            <Link to={`/employees/${e.id}`}>
              <img className="employee_image" src={e.image} />
              <span className="employee_name">{e.employee_name}</span>
              <span className="employee_title">{e.employee_title}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
//  return (
//     <div>
//       {users.map((e) => {
//         return <p key={e.id}>
//             <Link to={`/users/${e.id}`}>
//                 {e.id}.{e.first_name}
//             </Link>
//         </p>;
//       })}
//     </div>
//   );
