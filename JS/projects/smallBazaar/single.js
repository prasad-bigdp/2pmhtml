
let params = new URLSearchParams(window.location.search)
let pid =params.get('pid')
async function fetchData() {
	try {
		const res = await fetch(`https://dummyjson.com/products/${pid}`)
		const data = await res.json()
		displayData(data)
	} catch (err) {
		console.log(err)
	}
}
fetchData()
function displayData(ele) {

		const productDiv = document.createElement("div")
		const productImage = document.createElement("img")
		productImage.src = ele.thumbnail
		const productTitle = document.createElement("h2")
		productTitle.textContent = ele.title
		const productLink = document.createElement("a")
		productLink.href = `./single.html?pid=${ele.id}`
		productLink.appendChild(productTitle)
		const productPrice = document.createElement("p")
		productPrice.textContent = "Price: ₹" + ele.price
		const productButton = document.createElement("button")
		productButton.textContent = "add to cart"
		productDiv.append(productImage, productLink, productPrice, productButton)
		document.getElementById('myProduct').appendChild(productDiv)
}




