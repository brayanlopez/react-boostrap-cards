import React from 'react';
import Card from './card';

const cards = [
  {
    id: 1,
    title: 'Card 1',
    description: 'Lorem Ipsum dolor sit amet bla bla',
    image: 'https://picsum.photos/1000/1000'
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Lorem Ipsum dolor sit amet bla bla super bla bla',
    image: 'https://picsum.photos/1000/3000'
  },
  {
    id: 3,
    title: 'Card 1',
    description: 'Lorem Ipsum dolor sit amet bla bla super bla bla',
    image: 'https://picsum.photos/1000/2000'
  }
];

function Cards() {
  console.log(cards);
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map((card) => {
          return (
            <div className="col-md-4" key={card.id}>
              <Card data={card} />
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default Cards;