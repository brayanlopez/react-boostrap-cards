import React from 'react';
import PropTypes from "prop-types";
import "./cards.css"

function Card({ data }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={data.image} alt="image" className="img card-img-top" />
      </div>
      <div className="card-body text-light">
        <h1 className="card-title">{data.title}</h1>
        <p className="card-text text-secondary">{data.description}</p>
        <a href="#!" className="btn btn-outline-secondary">
          Go to this website
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired
}

export default Card;