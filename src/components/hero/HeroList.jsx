import React from 'react'
import { HeroCard } from './HeroCard';
import { GetHeroesByPublisher } from '../../selectors/GetHeroesByPublisher';

export const HeroList = ({publisher}) => {

    const heroes = GetHeroesByPublisher( publisher );


    
    return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
       
        { 
                heroes.map( (hero) => (
                    <HeroCard key={hero.id} { ...hero }/>
                ))
        }
    </div>
    
  )
}
