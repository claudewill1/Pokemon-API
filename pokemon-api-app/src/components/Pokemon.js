import React, {useState, useEffect} from 'react';

const Pokemon = (props) => {
    const [state, setState] = useState([]);

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807/')
            .then(response => {
                return response.json()
            })
            .then(response => {
                setState({
                    pokemon: response.results
                })
            })
    });

    return (
        <div className='container'>
            <ul>
                {state.pokemon ? state.pokemon.map((poke, index)=> {
                    return <li key={index}>{poke.name}</li>
                }):null}
            </ul>
        </div>
    );
}
export default Pokemon;