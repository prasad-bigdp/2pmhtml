async function fetchData ()
{
    try
    {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        const data = await res.json()
        console.log(data)
    }
    catch (err)
    {
        console.log(err)
    }
}
fetchData()