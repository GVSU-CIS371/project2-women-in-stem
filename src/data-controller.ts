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