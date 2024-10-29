export async function useProductsAPI(sourse) {
  const { data: ProductsData } = await useFetch(
    `https://fakestoreapi.com/products/${sourse ?? ""}`
  );
return ProductsData.value;
}
