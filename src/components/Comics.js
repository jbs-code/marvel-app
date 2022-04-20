import React from 'react'

function Comics({ heroData, comics }) {
    return (
        <div className="comics">

            <h4 className='comics-title mb-3'>Algunos cómics con {heroData.name}</h4>
            {
                comics.map(comic => {
                    return (

                        <div key={comic.id} className="comics-card">
                            <img className="card-img" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                            <p className="card-text"><small>{comic.title}</small></p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Comics