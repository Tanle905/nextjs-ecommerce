import Head from "next/head";
import { getAllProductIds, getProductData } from "../../lib/product";
import { useRouter } from "next/router";
import ProductDetails from "../../components/product/ProductDetails";
import NotFound from "../../components/NotFound";

export default function Product({ product }) {
  const router = useRouter();
  const parsedProduct = product && JSON.parse(product);
  const productData = product && parsedProduct.data;
  if (router.isFallback) {
    return <div>is Loading...</div>;
  } else if (productData) {
    return (
      <>
        <Head>
          <title>{productData.name}</title>
        </Head>
        <ProductDetails productData={productData}></ProductDetails>
      </>
    );
  } else{
    return <NotFound></NotFound>
  }
}
export async function getStaticPaths() {
  const productIds = await getAllProductIds();
  return {
    paths: productIds,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProductData(params.id);

  return {
    props: {
      product,
    },
  };
}
