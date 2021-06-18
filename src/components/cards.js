import React from 'react';
import Card from './card.js';

const data = [
  {
    id: 1,
    title: 'Card 1',
    description: 'Lorem Ipsum dolor sit amet bla bla',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Lorem Ipsum dolor sit amet bla bla super bla bla',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 2,
    title: 'Card 1',
    description: 'Lorem Ipsum dolor sit amet bla bla super bla bla',
    image: 'https://picsum.photos/200/300'
  }
];

export default function Card() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {data.map(card => {
          <div className="col-md-4">
            <Card />;
          </div>;
        })}
      </div>
    </div>
  );
}
