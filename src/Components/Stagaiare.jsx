import React from "react";
import { useState , useEffect} from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";


const Stagaire =()=>{
   const [users, setUsers] = useState([]);
   const{id}=useParams();
   
   const lodUser = async () => {
     const result = await axios.get(`http://localhost:3000/api/stagiare/${id}`);
     setUsers(result.data);
   };
   useEffect(() => {
     lodUser();
   }, []);
 
    return (
      <div className="">
        <h1 className="Disply-4" id="Code">
          Code d' Stagaiare : {id}
        </h1>
        <hr />
        {users.map((user, index) => (
          <div>
            {/* <ul className="list-group-item">
              <li className="list-group-item">Nom: {user.Nom}</li>
              <li className="list-group-item">Prenom:{user.Prenom}</li>
              <li className="list-group-item">Age:{user.Age}</li>
              <li className="list-group-item">Phone:{user.Phone}</li>
              <li className="list-group-item">Filier:{user.Filières}</li>
              <li className="list-group-item">Groupe:{user.groupe}</li>
            </ul> */}
            <div>
              <div key={index.id}>
                <h5>Data d' Stagiare :</h5>
                <img src={user.image} alt=""  id="images" />
                <h6>Nom : {user.Nom}</h6>
                <br />
                <h6>Prenom : {user.Prenom}</h6>
                <br />
                <h6>Age : {user.Age}</h6>
                <br />
                <h6>Phone : {user.Phone}</h6>
                <br />
                <h6>Email : {user.Email}</h6>
                <br />
                <h6>Filières : {user.Filières}</h6>
                <br />
                <h6>groupe : {user.groupe}</h6>
                <br />
              </div>
            </div>
          </div>
        ))}
        <Link className="btn btn-outline-dark" id="LinkTest" to="/">
          {" "}
          <h6>
            <i className="fa-solid fa-backward"></i> Back to Home
          </h6>
        </Link>{" "}
        <Link className="btn btn-outline-dark" to="/">
          <h6>
            <i className="fa-solid fa-print"></i>
            {" "}
            Imprimer l' Info
          </h6>
        </Link>
      </div>
    );
}
export default Stagaire;