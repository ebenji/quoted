import React from 'react';
import Card from './Card';

const CardList = ({quotes}) => {
    return (
        <div>
          {
            quotes.map((user, i) => {
              return (
                <Card
                  key={i}
                  id={quotes[i].id}
                  name={quotes[i].name}
                  quote={quotes[i].quote}
                  />
              );
            })
          }
        </div>
      );
}

export default CardList;