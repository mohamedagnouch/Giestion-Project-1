import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Adduser(){
    let navigate = useNavigate();
     const [Nom,setNom]=useState("");
     const [Prenom, setPrenom] = useState("");
     const [Age, setAge] = useState("");
     const [Phone, setPhone] = useState("");
     const [Filières, setFilières] = useState("");
     const [groupe, setGoupe] = useState("");
     const[image,setImage]=useState("");
     const[Email,setEmail]=useState("");


 const addStagiare =(e)=>{
    e.preventDefault();
 
 axios
   .post(`http://localhost:3000/api/stagiare`, {
     
     Nom,
     Prenom,
     Age,
     Phone,
     Filières,
     groupe,
     image,
     Email
     
   })
   .then((data) => {
     console.log(data);
   });
   navigate("/")


}

    return (
      <div className="" id="bodyL">
        <div className="" id="Login">
          <h2 className="text-center" id="Ajouter">
            Ajouter Un Stagaire
          </h2>
          <div className="row">
            <br />
          <label htmlFor="" id="lab">  Nom :</label>
            <input
              type="text"
              required
              className="form-goupe"
              onChange={(e) => setNom(e.target.value)}
            />
            <br />
            <label htmlFor=""> Prenom :</label>
            <input
              type="text"
              required
              className="form-goupe "
              onChange={(e) => setPrenom(e.target.value)}
            />
            <br />
            <label htmlFor="">Age :</label>
            <input
              required
              type="number"
              className="form-goupe"
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <label htmlFor="">Phone :</label>
            <input
              type="text"
              required
              className="form-goupe "
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <label htmlFor="">Email :</label>
            <input
              type="email"
              required
              className="form-goupe "
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="">Filière :</label>
            <select
              className="form-goupe"
              onChange={(e) => setFilières(e.target.value)}
            >
              <option value="Mobile">Mobile</option>
              <option value="Developpment Full Stck">
                Developpment Full Stck
              </option>
            </select>
            <br />
            <label htmlFor="">groupe :</label>
            <select
              className="form-goupe"
              onChange={(e) => setGoupe(e.target.value)}
            >
              <option value="Dev 201">201</option>
              <option value="Dev 202">202</option>
              <option value="Dev 203">203</option>
              <option value="Dev 204">204</option>
              <option value="Dev 205">205</option>
              <option value="Dev 206">206</option>
              <option value="Dev 206">207</option>
              <option value="Dev 206">208</option>
              <option value="Dev 206">209</option>
            </select>
            {/* <input
              type="text"
              className="form-control from-control-lg"
              onChange={(e) => setGoupe(e.target.value)}
            /> */}
            <br />
            <label htmlFor="">Photo De Stagaire :</label>
            <input
              required
              type="text"
              className="form-goupe"
              src={URL}
              alt=""
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <br />

          <button
            className="btn btn-outline-light"
            onClick={addStagiare}
            id="AddS"
          >
            <i className="fa-solid fa-user-plus"></i> Add Stagiare
          </button>
        </div>
      </div>
    );
}
export default Adduser; 