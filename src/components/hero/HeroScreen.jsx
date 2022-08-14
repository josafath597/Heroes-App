import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../selectors/GetHeroById";

// import batman from "../../assets/heroes/dc-batman.jpg"; //estático

const heroImages = require.context("../../assets/heroes", true);

export const HeroScreen = () => {

  const { heroId } = useParams();

  const navigate = useNavigate();


  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  

  const handleReturn = () => {
    navigate(-1);
  }


  if (!hero) {
    return <Navigate to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;

  // const imagePath = `/assets/heroes/${hero.id}.jpg`; desde public/assets/heroes/
  // const imagePath =  batman  //import
  const imagePath = heroImages(`./${id}.jpg`);


  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={ imagePath }
             alt={ hero.name } 
             className="img-thumbnail animate__animated animate__fadeInLeft" />
        
      </div>

        <div className="col-8 animate__animated animate__fadeIn">
          <h3>{ superhero }</h3>
          <ul className="list-group">
              <li className="list-group-item text-white bg-transparent " > <b>Alter ego: </b> { alter_ego } </li>
              <li className="list-group-item text-white bg-transparent"> <b>Publisher: </b> { publisher } </li>
              <li className="list-group-item text-white bg-transparent"> <b>First Appearance: </b> { first_appearance } </li>
          </ul>

          <h5 className="mt-3">Characters</h5>
          <p>{ characters }</p>

          <button className="btn boton" onClick={ handleReturn }>
            Regresar
          </button>

          
        </div>
    </div>
  )
}