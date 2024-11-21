
const getPokemons = async (limit = 20, offset = 0) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0${offset}`)
        .then(resp => resp.json());

    return data;
}
export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);
    return (
        <div>
            {JSON.stringify(pokemons)}
        </div>
    );
}
