import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const imagePath = `/assets/heroes/${id}.jpg`


    return (
      <div className="col animate__animated animate__fadeIn">

          <div className="card mt-3">

              <div className="row g-0">

                  <div className="col-5">
                    <img src={ imagePath } className="card-img" alt={superhero} />
                  </div>

                  <div className="col-7">

                      <div className="card-body">

                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                ( alter_ego !== characters ) && 
                                <p className="text-muted">{ characters }</p>
                            }

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            
                            
                            <Link to={`/hero/${id}`} className="text-decoration-none">
                            <button type="button" className="btn boton">Más..</button>
                            </Link>

                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
