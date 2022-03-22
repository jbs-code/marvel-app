import { useState } from "react";
import { fetchMarvel } from "../helpers/fetchMarvel";

function useHero(setSearch) {
    const [hero, setHero] = useState({});

    const HandleHero = (e) => {
        e.preventDefault();
        fetchMarvel(e.target.innerText, 'hero').then(res => {
            const { data } = res;
            setHero(data.results[0]);
        });
        
        setSearch('');
    }
    return { hero, HandleHero }
}

export default useHero;
