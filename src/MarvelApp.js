import { useEffect, useState } from "react";
import CardHero from "./components/CardHero";
import { fetchMarvel } from "./helpers/fetchMarvel";
import { getCharacterByName } from "./helpers/getCharacterByName";
import useHero from "./hooks/useHero";
import useHeroData from "./hooks/useHeroData";

function MarvelApp() {

  const [search, setSearch] = useState('');
  const { hero, HandleHero } = useHero(setSearch);
  const heroData = useHeroData(hero);
  const herosSearch = getCharacterByName(search);

  const [comics, setComics] = useState({});

  //Este componente puede optimizarse más, la animación también puede mejorar

  useEffect(() => {
    hero.id &&
      fetchMarvel(hero.id, 'comic').then(res => {
        const { results } = res.data;
        setComics(results);
      });
  }, [hero])

  const handleInput = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="container mt-3">
      <h1>MarvelApp</h1>

      <div>
        <input placeholder="Buscar superheroe" onChange={handleInput} className="form-control" />
        <ul className="list-group">
          {
            herosSearch.map(hero => <button
              type="button"
              className="list-group-item list-group-item-action"
              key={hero}
              onClick={HandleHero}>
              {hero}</button>)
          }
        </ul>
      </div>

      <CardHero heroData={heroData} />

      {
        comics.length > 0 &&
        <div className="row justify-content-around mt-4 animate__animated animate__fadeIn">
          <h4>Algunos cómics con {heroData.name}</h4>
          {
            comics.map(comic => {
              return (

                <div key={comic.id} className="col-2 mt-4 me-1 card pt-3">
                  <img className="card-img" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                  <p className="card-text text-center text-dark"><small>{comic.title}</small></p>
                </div>
              )
            })
          }
        </div>

      }
    </div>
  );
}

export default MarvelApp;
