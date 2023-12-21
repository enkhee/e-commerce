export async function getAllCarts() {
  try {
    const response = await fetch(`https://fakestoreapi.com/carts/2`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const carts = await response.json();
    return carts;
  } catch (error) {
    console.error('Уучлаарай алдаа гарлаа:', error);
  }
}

export async function getSingleCart(id: any) {
  try {
    const response = await fetch(`https://fakestoreapi.com/carts/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const carts = await response.json();
    return carts;
  } catch (error) {
    console.error('Уучлаарай алдаа гарлаа:', error);
  }
}

export async function getAddCart(data: any) {
  try {
    const response = await fetch('https://fakestoreapi.com/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Уучлаарай алдаа гарлаа:', error);
  }
}

export async function getUpdateCart(data: any) {
  try {
    const response = await fetch('https://fakestoreapi.com/carts/2', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Уучлаарай алдаа гарлаа:', error);
  }
}

export async function getDeleteCart(data: any) {
  try {
    const response = await fetch('https://fakestoreapi.com/carts/2', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Уучлаарай алдаа гарлаа:', error);
  }
}
