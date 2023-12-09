export async function getAllCategory() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products/categories`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Уучлаарай алдаа гарлаа:', error);
  }
}
export async function getCategoryProducts(categoryId: any) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${categoryId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('Уучлаарай алдаа гарлаа:', error);
  }
}
