import React, { useEffect } from 'react';
import { gsapCardHero } from '../scripts/gsap';

function CardHero({ heroData }) {
    useEffect(() => {
        gsapCardHero();
    }, [heroData]);
    return (
        heroData.name
            ?
            <div className="card mt-3 mb-3">
                <div className="card-character">
                    <img className="card-img" src={`${heroData.thumbnail?.path}.${heroData.thumbnail?.extension}`} alt={heroData.name}/>
                </div>

                <div className="card-description">
                    <h3 className="card-title">{heroData.name}</h3>
                    <p className="card-text">{heroData.description}</p>
                </div>
            </div>
            :
            <h2 className="mt-3">No hay superhéroe</h2>
    )
}

export default CardHero;
