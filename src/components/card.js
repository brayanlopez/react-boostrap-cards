import React from 'react';

export default function Card() {
  return (
    <div className="card text-center bg-dark">
      {/* <img src={this.props.data.image} alt="image" /> */}
      <div className="card-body text-light">
        <h1 className="card-title">Card</h1>
        <p className="card-text text-secondary">lorem ipsum dolor sit amet</p>
        <a href="#!" className="btn btn-outline-secondary">
          Go to this website
        </a>
      </div>
    </div>
  );
}
