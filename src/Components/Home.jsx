import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home=()=>{
    const[searsh,setSearch]=useState([]);
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        lodUser()
    },[])
    const lodUser= async()=>{
        const result =await axios.get("http://localhost:3000/api/stagiare")
        setUsers(result.data)
    }
    const  deleteUser =  id=>{
      if(window.confirm("Delete Stagaiare !!!")){
      axios.delete(`http://localhost:3000/api/stagiare/${id}`);
      lodUser();
      window.location.reload()
      }
    }
     return (
       <div className="container">
         <h1
           className="shadow  offset-sm-2"
           id="Home"
           style={{ fontFamily: "cursive" }}
         >
           <i className="fa-solid fa-house-user"></i> Les informations des Stagiaires
           <i className="fa-sharp fa-solid fa-database"></i>
         </h1>
         <br />
         <h5 className="prrr">
           <i className="fa-sharp fa-solid fa-magnifying-glass"></i> Searsh Par
           id :
         </h5>{" "}
         <input
           className="form-control-lg col-md-4"
           type="text"
           onChange={(e) => setSearch(e.target.value)}
         />
         <br />
         <br />
         <table className="table shadow offset-sm-1 ">
           <thead>
             <tr className="bg-dark text-white">
               <th scope="col">Id</th>
               <th scope="col">Nom</th>
               <th scope="col">Prenom</th>
               <th scope="col">Age</th>
               <th scope="col">Phone</th>
               <th scope="col">Filière</th>
               <th scope="col">groupe</th>
               <th scope="col">Action</th>
             </tr>
           </thead>
           <tbody>
             {users
               .filter((value) => {
                 if (searsh === "") {
                   return value;
                 } else if (value.id.toString().includes(searsh.toString())) {
                   return value;
                 }
               })

               .map((user, index) => (
                 <tr key={index + 1}>
                   <td>{user.id}</td>
                   <td>{user.Nom}</td>
                   <td>{user.Prenom}</td>
                   <td>{user.Age}</td>
                   <td>{user.Phone}</td>
                   <td>{user.Filières}</td>
                   <td>{user.groupe}</td>
                   <td>
                     <Link
                       className="btn btn-dark"
                       to={`/stagaiare/${user.id}`}
                     >
                       <i className="fa-sharp fa-solid fa-eye"></i>
                     </Link>{" "}
                     <Link
                       className="btn btn-secondary"
                       to={`/user/edit/${user.id}`}
                     >
                       <i className="fa-solid fa-user-pen"></i>
                     </Link>{" "}
                     <Link
                       className="btn btn-danger"
                       onClick={() => deleteUser(user.id)}
                     >
                       <i className="fa-solid fa-user-minus"></i>
                     </Link>
                   </td>
                 </tr>
               ))}
           </tbody>
         </table>
       </div>
     );
}
export default Home;
