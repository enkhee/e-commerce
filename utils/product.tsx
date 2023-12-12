export async function getAllProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Уучлаарай алдаа гарлаа:', error);
  }
}

// export function getAllProducts() {
//     return fetch('https://fakestoreapi.com/products')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .catch(error => {
//             console.error("Уучлаарай алдаа гарлаа:", error);
//         });
// }

export async function getSingleProduct(id: any) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.error('Уучлаарай алдаа гарлаа:', error);
  }
}

export async function getLimitProducts(limit: number) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products?limit=${limit}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Уучлаарай алдаа гарлаа:', error);
  }
}

export async function getSortProducts(sort: string) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products?sort=${sort}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Уучлаарай алдаа гарлаа:', error);
  }
}
