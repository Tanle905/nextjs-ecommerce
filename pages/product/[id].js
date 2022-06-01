import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllProductIds, getProductData } from "../../lib/product";
import styles from "../../styles/ProductDetail.module.sass";

export default function Product({ product }) {
  const parsedProduct = JSON.parse(product);
  const productData = parsedProduct.data;
  return (
    <>
      <Head>
        <title>{productData.name}</title>
      </Head>
      <Layout>
        <div className={styles.product}>
          <div className={styles["product-upper"]}>
            <img
              className={styles.detail__img}
              src={productData.image}
              alt=""
            />
            <div className={styles["detail-info"]}>
              <div>
                <span className={styles.title__span}>{productData.name}</span>
                <div className={styles["info--row"]}>
                  <span className={styles.brand__span}>
                    Danh mục {productData.category.name}
                  </span>
                  <span className={styles.sku__span}>
                    SKU: {productData.sku}
                  </span>
                </div>
                <span className={styles.price__span}>{productData.price}</span>
              </div>
              <div className={styles.button}>
                <button className={styles["buy-now__button"]}>MUA NGAY</button>
                <button className={styles["add-to-cart__button"]}>
                  THÊM VÀO GIỎ HÀNG
                </button>
              </div>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: productData.description }}
            className="product-detail"
          ></div>
        </div>
      </Layout>
    </>
  );
}
export async function getStaticPaths() {
  const productIds = await getAllProductIds();
  return {
    paths: productIds,
    fallback: false,
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
