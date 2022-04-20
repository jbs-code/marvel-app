import { useState } from "react";
import { fetchMarvel } from "../helpers/fetchMarvel";

function useHero(setSearch) {
    const [hero, setHero] = useState({
        id: "1016825",
        name: "Ultimate Spider-Man (USM)",
        description: "For the past year, Peter Parker has been saving New York City from villains as the masked hero, Spider-Man. Facing thugs and evil geniuses alike, he learns how to balance heroics with homework and friends. Despite being a Super Hero, Peter is very much an average 16-year-old.  With the added responsibilities of being Spider-Man, juggling all the aspects of his life will continually challenge him.                                                                 \r\n\r\nWhen S.H.I.E.L.D. Director, Nick Fury, offers Peter the chance to raise his game and become THE ULTIMATE SPIDER-MAN, Midtown High becomes a secret operations base for Spider-Man and other young heroes under the watchful eye of Fury and the schoolâ€™s new principal, Agent Coulson. ",
        thumbnail: {
            path: "https://i.annihil.us/u/prod/marvel/i/mg/2/50/5232171a451bb", 
            extension: "jpg"
        }
    });

    const handleHero = (search) => {
        fetchMarvel(search, 'hero').then(res => {
            if (res.data?.results[0]) {
                const { id, name, description, thumbnail } = res.data.results[0];
                setHero({ id, name, description, thumbnail });
            }
            else {
                setHero({});
            }
        });

        setSearch('Ultimate Spider-Man (USM)');
    }
    return { hero, handleHero }
}

export default useHero;
