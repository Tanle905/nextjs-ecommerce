export async function getAllProducts() {
  const productDatas = await fetch(
    process.env.NEXT_PUBLIC_baseURL + "/products?page=1&limit=10&search=&sort[createdAt]=asc"
  ).then((res) => res.json());
  return JSON.stringify(productDatas);
}

export async function getAllProductIds() {
  const productDatas = await fetch(
    process.env.NEXT_PUBLIC_baseURL + "/products?page=1&limit=10&search=&sort[createdAt]=asc"
  ).then((res) => res.json());
  return productDatas.data.map((data) => {
    return {
      params: { id: data._id },
    };
  });
}

export async function getProductData(id) {
  const productData = await fetch(
    `${process.env.NEXT_PUBLIC_baseURL}/products/${id}`
  ).then((res) => res.json());
  return JSON.stringify(productData);
}

