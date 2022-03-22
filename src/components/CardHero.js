import React from 'react';

function CardHero({ heroData }) {
    return (
        heroData.name
            ?
            <div className="row mt-3">
                <div className="col-5">
                    <img className="card-img animate__animated animate__fadeInLeft" src={`${heroData.thumbnail?.path}.${heroData.thumbnail?.extension}`} alt={heroData.name} width='100%' />
                </div>

                <div className="col-7 card-body animate__animated animate__fadeIn">
                    <h3 className="card-title">{heroData.name}</h3>
                    <p className="card-text">{heroData.description}</p>
                </div>
            </div>
            :
            <div className="alert alert-primary mt-3">No hay superhéroe</div>
    )
}

export default CardHero;
