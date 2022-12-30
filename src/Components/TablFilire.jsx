import axios from 'axios';
import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom';

const TablFilire =()=>{
    const[filire,setFilire]=useState([]);


    useEffect(()=>{
        getData()
    })
    const getData = async()=>{
        const result = await axios.get("http://localhost:3000/api/fullstack")
        setFilire(result.data)
    }

    return (
      <div>
        <div>
          <table className="table shadow offset">
            <thead>
              <tr className="bg-dark text-white">
                <th scope="col">Num Module</th>
                <th scope="col">Code Module</th>
                <th scope="col">Module</th>
                <th scope="col">MHT</th>
                <th scope="col">coefficient</th>
                <th scope="col">EFM Régonal</th>
              </tr>
            </thead>
            <tbody>
              {filire.map((item, index) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.Code_Module}</td>
                  <td>{item.Module}</td>
                  <td>{item.MHT} H</td>
                  <td>{item.Coef}</td>
                  <td>{item.EFM_Régional}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link className="btn btn-outline-dark" to="/Filières">
            {" "}
            <i className="fa-solid fa-backward"></i>{" "} Back To Filières
          </Link>
        </div>
      </div>
    );

}
export default TablFilire;
