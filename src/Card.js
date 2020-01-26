import React from 'react';

const Card = ({id ,name, quote}) => {
    return(
    <div className='tc grow bg-light-blue br3 pa3 ma3 dib bw3 shadow-5'>
        <img alt='robots' src={`http://api.adorable.io/avatars/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <div className="tc f4 measure-narrow">
                <p>{quote}</p>
                </div>
            </div>
    </div>
    );
}

export default Card;