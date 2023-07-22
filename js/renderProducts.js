const productsContainer = document.querySelector('#products-container');
getProducts();
async function getProducts() {
    const response = await fetch('./js/products.json');
    const productsArray = await response.json();
	renderProducts(productsArray);
}
function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `
		<div class="card" data-id="${item.id}">
		<img class="gul-img" src="img/${item.imgSrc}" alt="">
		<div class="card-text">
			<h3 class="card-title">${item.title}</h3>
			<p small data-items-in-box class="text-muted">${item.arragment}</p>

			<div class="wrapper">
				<div class="number">
					<span class="minus" data-action="minus">-</span>
					<div class="input" data-counter>1</div>
					<span class="plus" data-action="plus">+</span>
				</div>
				<div class="price">
					<div class="price__currency">${item.price} $</div>
				</div>
			</div>
			<button data-cart type="button" class="btn btn-block btn-outline-warning">
			+ in busket
			</button>
		</div>
	</div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}

