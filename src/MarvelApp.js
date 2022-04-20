import { useEffect, useState } from "react";
import CardHero from "./components/CardHero";
import Comics from "./components/Comics";
import { fetchMarvel } from "./helpers/fetchMarvel";
import { getCharacterByName } from "./helpers/getCharacterByName";
import useHero from "./hooks/useHero";
import { gsapMarvelApp } from "./scripts/gsap";

function MarvelApp() {

  const [search, setSearch] = useState('Ultimate Spider-Man (USM)');
  const { hero, handleHero } = useHero(setSearch);
  const herosSearch = getCharacterByName(search);

  const [comics, setComics] = useState({});

  useEffect(() => {
    if (hero?.id) {
      fetchMarvel(hero.id, 'comic').then(res => {
        const { results } = res.data;
        setComics(results);
      });
    }
    else {
      setComics({});
    }
  }, [hero])

  useEffect(() => {
    gsapMarvelApp();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleHero(search);
  }

  return (
    <div className="container">
      <h1>MarvelApp</h1>

      <form onSubmit={handleSubmit} className="form-search">
        <div className="form-input">
          <input list="list" placeholder="Elige un superhéroe." onChange={handleInput} className="input mr-1" />
          <button type="submit">Buscar</button>
        </div>
        <datalist id="list" className="data-list">
          {
            herosSearch.map(hero => <option
              key={hero}
              className="option"
            >
              {hero}</option>)
          }
        </datalist>
      </form>

      <CardHero heroData={hero} />

      {
        comics.length > 0 && <Comics heroData={hero} comics={comics} />
      }

      <footer>
        <p className="mt-3 mb-2">
          Puedes ver el código de esta aplicación{' '}
          <a href="https://github.com/jbs-code/marvel-app" target='_blank' rel='noopener noreferrer'>aquí.</a>
        </p>
      </footer>
    </div>
  );
}

export default MarvelApp;
