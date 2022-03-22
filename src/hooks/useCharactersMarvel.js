import { useState } from 'react';
import { fetchMarvel } from '../helpers/fetchMarvel';

function useCharactersMarvel() {
    const [data, setData] = useState({});

    const getHero = (name) => {
        fetchMarvel(name).then(data => console.log(data));
        // fetchMarvel(name).then(data => setData(data));
    };

    return {data, getHero};
}

export default useCharactersMarvel;
