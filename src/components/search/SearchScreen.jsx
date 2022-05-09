import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { GetHeroesByName } from "../../selectors/GetHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import  queryString  from 'query-string';
import { useMemo } from "react";


export const SearchScreen = () => {
  
  const navigate =  useNavigate();
  const location = useLocation();
  
  const { q = '' } = queryString.parse(location.search);

  const [values , handleInputChange] = useForm({  searchText: q });

  const {searchText} = values;

  const heroesFiltered = useMemo(() => GetHeroesByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);
  }




  return (
    <>
      <h2>Búsquedas</h2>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Buscar un Héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ handleInputChange }
              />

            <button type="submit" className="btn boton mt-3">Buscar</button>

          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {
            (q === '')
              ? <div className="alert alert-danger">Buscar un héroe</div>
              : (heroesFiltered.length === 0) && <div className="alert alert-danger">No hay resultados { q }</div>
          }



          {
            heroesFiltered.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>

    </>
  )
}
