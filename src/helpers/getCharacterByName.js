//Esta función es para hacer la busqueda de héroes en el array con todos los nombres
//para desplegar la lista del search.
import {heros} from '../data/marvelHeros';

export const getCharacterByName = (name = '') => {

    if(name === ''){
        return [];
    }

    return heros.filter(hero => hero.toLowerCase().includes(name.toLowerCase()));
} 