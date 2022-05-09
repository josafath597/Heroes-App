import React, { useMemo } from 'react'
import { HeroCard } from './HeroCard';
import { GetHeroesByPublisher } from '../../selectors/GetHeroesByPublisher';

export const HeroList = ({publisher}) => {

    

    const heroes = useMemo(() => GetHeroesByPublisher( publisher), [publisher]);


    
    return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-3 animate__animated animate__fadeIn">
        
       
        { 
                heroes.map( (hero) => (
                    <HeroCard key={hero.id} { ...hero }/>
                ))
        }
    </div>
    
  )
}
