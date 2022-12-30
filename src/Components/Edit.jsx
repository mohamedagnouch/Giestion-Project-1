import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const Edit =()=>{

    let naveigate = useNavigate();
    const {id}=useParams();
      const [Nom, setNom] = useState("");
      const [Prenom, setPrenom] = useState("");
      const [Age, setAge] = useState("");
      const [Phone, setPhone] = useState("");
      const [Filières, setFilières] = useState("");
      const [groupe, setGoupe] = useState("");
     const [image, setImage] = useState("");
     const[Email,setEmail]=useState("");


       const UpdateStagiare = (e) => {
         e.preventDefault();
         axios
           .patch(`http://localhost:3000/api/stagiare/${id}`, {
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
         naveigate("/");
       };
    return (
      <div className="" id="bodyL">
        <div className="" id="Login">
          <h2 className="text-center" id="Edit">
            Edit Stagaire
          </h2>
          <div className="row">
            <label htmlFor="">Nom :</label>
            <input
              type="text"
              className="form-goupe"
              onChange={(e) => setNom(e.target.value)}
            />
            <br />
            <label htmlFor="">Prenom :</label>
            <input
              type="text"
              className="form-goupe"
              onChange={(e) => setPrenom(e.target.value)}
            />
            <br />
            <label htmlFor=""> Age :</label>
            <input
              type="number"
              className="form-goupe"
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <label htmlFor="">Phone : </label>
            <input
              type="text"
              className="form-goupe"
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
            <label htmlFor="">Photo d' Stagaire:</label>
            <input
              id=""
              type="text"
              className="form-goupe"
              src={URL}
              alt=""
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <br />
          <Link className="btn btn-outline-info" to="/">
            
            <i className="fa-solid fa-backward"></i>
            {" "}
            Back To Home
          </Link>{" "}
          <button
            className="btn btn-outline-info"
            id="ClickUpdate"
            onClick={UpdateStagiare}
          >
            <i className="fa-solid fa-pen"></i>
            {" "}
            Update Stagiare
          </button>
        </div>
      </div>
    );
}
export default Edit;