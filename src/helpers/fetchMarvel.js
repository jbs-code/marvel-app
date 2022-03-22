import md5 from "blueimp-md5";

export const fetchMarvel = async (state, type) => {
    const publicKey = 'f50cd8f912f17d8a742d37621d7bcba9';
    const privateKey = 'd074b73cc27052e7631d8ed6c47599171857de23';
    const ts = new Date().getTime();
    let hash = md5(`${ts}${privateKey}${publicKey}`);
    const url = 'https://gateway.marvel.com/v1/public/characters';

    switch (type) {
        case 'hero':
            return await (await fetch(`${url}?ts=${ts}&apikey=${publicKey}&hash=${hash}&name=${state}`)).json();
            
        case 'comic':
            return await (await fetch(`${url}/${state}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`)).json();

        default:
            break;
    }


}