import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    // get the main container element
   const mainContainer = document.getElementById("main-container");
   
   // check to make sure that the main container exists
   if (!mainContainer) {
    console.error("main container not found");
    return;
   }

   // generate HTML for each product and join into single string
   const productsHTML = prods.map(product => generateProductHTML(product)).join('');
   // set the inner html of main container to generated products html
   mainContainer.innerHTML = productsHTML;
}

// Call renderProducts on page load with all products
renderProducts(products);

function getByCategory(category: string): void {
    // your code
    const temp = products.filter((x) => x.category == category);
    renderProducts(temp);
}

function getByRating(minRating: number): void {
    // your code
    const temp = products.filter((x) => x.rating >= minRating);
    renderProducts(temp);
    
}

export { renderProducts, getByCategory, getByRating };