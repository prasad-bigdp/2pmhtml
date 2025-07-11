const productsDiv = document.getElementById('products');
async function fetchData ()
{
    try
    {
        const res = await fetch(`https://dummyjson.com/products`) 
    const data = await res.json();
    displayData(data.products)
    }
    catch (err)
    {
        console.log(err);
    }
}
fetchData();
function displayData (data)
{
    data.forEach((ele, ind) =>
    {
        console.log(ele)
        const productDiv = document.createElement('div');
        const productImage = document.createElement('img');
        productImage.src = ele.thumbnail;
        const productTitle = document.createElement('h2');
        productTitle.textContent = ele.title
        const productLink = document.createElement("a")
        productLink.href =`./single.html?pid=${ele.id}`
        productLink.appendChild(productTitle);
        const productPrice = document.createElement('p');
        productPrice.textContent = "Price: ₹"+ele.price
        const productButton = document.createElement('button');
        productButton.textContent = "add to cart"
        productButton.addEventListener('click',()=>addToCart(ele))
        productDiv.append(productImage, productLink, productPrice, productButton);
        productsDiv.appendChild(productDiv)

    })
}




