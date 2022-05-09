import { heroes } from "../data/heroes";

export const GetHeroesByName = ( name = '') => {

    if(name.length === 0) {
        return [];
    }


    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name.toLowerCase()) )
}