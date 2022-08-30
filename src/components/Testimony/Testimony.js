import React from 'react';
import './Testimony.css'


function Testimony(props) {
  
    return (
        <div className='testimony-container'>
            <img
                src={require(`./../../resources/images/testimony-${props.image}.jpg`)}
                className='testimony-image'
                alt={`Foto de ${props.name}`}
            />
            <div className="testimony-text-container">
                <p className="testimony-name"><strong>{props.name}</strong> in {props.country}</p>
                <p className="testimony-position">{props.position} at <strong>{props.enterprise}</strong></p>
                <p className="testimony-text">"{props.testimony}"</p>
            </div>
        </div>
    )
}

export default Testimony