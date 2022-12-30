import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Filières extends Component {
  
  render() {
    return (
      <div className="">
        <div className="offset-md-5 ">
          <div className="card shadow h-80 mb-3" style={{ width: "25rem" }}>
            <img
              src={
                "https://mic-centre.com/wp-content/uploads/2020/11/Full-Stack-Developer.jpg"
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title">
                Développement Digital option Web Full Stack
              </h6>

              <p className="card-text"></p>
              <Link className="btn btn-outline-dark w-25" to="/TablFilire">
                <i class="fa-solid fa-check"></i> Check
              </Link>
            </div>
          </div>
        </div>
        <div className="offset-md-5" id="cardee">
          <div className="card shadow h-90 mb-3" style={{ width: "25rem" }}>
            <img
              src={
                "https://www.t-t.ma/produits-et-services/wp-content/uploads/2022/09/mobile-app-2022-scaled.jpg"
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title">
                Développement Digital option Web Full Stack
              </h6>

              <p className="card-text"></p>
              <Link className="btn btn-outline-dark w-25" to="/DevMob">
                <i class="fa-solid fa-check"></i> Check
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}