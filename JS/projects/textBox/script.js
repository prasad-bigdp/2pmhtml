const input = document.getElementById("inp")
document.getElementById('btn').addEventListener('click', function ()
{
    let str = input.value
    const lengthPara = document.createElement('p');
    lengthPara.textContent = "Total Length is: " + str.length;
    document.body.appendChild(lengthPara)
    lengthPara.id="paraId"

})