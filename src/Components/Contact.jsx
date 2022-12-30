import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
  const [searshe,setSearche]=useState("")
  const[users,setUsers]=useState([]);
    useEffect(()=>{
        lodUser()
    },[])
    const lodUser= async()=>{
        const result =await axios.get("http://localhost:3000/api/stagiare")
        setUsers(result.data)
    }
  return (
    <div className="row">
      <h1 className=" col-md-4" id="Contact">
        <i className="fa-sharp fa-solid fa-address-card"></i> Contact d' stagaiare
      </h1>
      <br />
      <div>
        <h5 className="prrr">
          {" "}
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i> Searsh Contact
          Stagaire :
        </h5>{" "}
        <input
          type="text"
          className="form-control-lg col-md-3"
          onChange={(e) => setSearche(e.target.value)}
        />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      {users
        .filter((value) => {
          if (searshe === "") {
            return value;
          } else if (value.Prenom.toString().includes(searshe.toString())) {
            return value;
          } else if (value.groupe.toString().includes(searshe.toString())) {
            return value;
          } else if (value.Nom.toString().includes(searshe.toString())) {
            return value;
          }
        })

        .map((user, index) => (
          <div className="col-md-3 mb-3" key={index.id}>
            <div className="card shadow h-90 mb-3" style={{ width: "18rem" }}>
              <img src={user.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">Nom :{user.Nom}</h6>
                <h6 className="card-title">Prenom :{user.Prenom}</h6>
                <h6 className="card-title">Groupe :{user.groupe}</h6>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Contact;
