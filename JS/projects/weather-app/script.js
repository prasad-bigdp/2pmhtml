const inputEle = document.getElementById('inp');
document.getElementById('btn').addEventListener('click', function ()
{
    let cityName = inputEle.value;
    let API_key="6d193ef2d5d6159b4ba4619cce20157c"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`)
        .then((res) => res.json())
        .then((data) =>
        {
            const newPara = document.createElement('p');
            newPara.innerHTML = "The temparature is " + Math.round(data.main.temp-273)+ "<sup>o</sup> c";
            document.body.appendChild(newPara)
        })
        .catch((err) => console.log(err))
})