export const fetchPokemon = async(num) => {
    const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/${num + 1}`)
    const data = await responce.json()
    // console.log(data)

    return {
        name : data.name,
        image: data?.sprites?.other?.dream_world?.front_default,
    }
}