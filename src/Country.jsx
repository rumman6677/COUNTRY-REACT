import { useState } from 'react';
import './Country.css'
import CountryDetail from './CountryDetail';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, capital, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }

   

    console.log(handleVisitedCountry);


    return (
        <div className= {`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited? 'green' : 'black'}} >{name.common}</h3>
            <img src={flags?.png} alt="" />
            <h3>Capital: {capital}</h3>
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button> <br/>
            <button onClick={() =>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br/>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited?  'I have visited this Country' : 'I want to visit'}
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}

            ></CountryDetail>
        </div>
    );
};

export default Country;

// const Country = ({world}) => {
//     const {name, capital,flags} = world;
//     return (
//         <div>
//           <h3>Name: {name?.common}</h3>
//           <h4>Capital: {capital}</h4>
//           <img src={flags?.png} alt="" />
//         </div>
//     );
// };

// export default Country;