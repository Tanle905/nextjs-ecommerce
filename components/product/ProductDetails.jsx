import styles from "./ProductDetails.module.sass";

export default function ProductDetails({ productData }) {
  return (
    <div className={styles.product}>
      <div className={styles["product-upper"]}>
        <img className={styles.detail__img} src={productData.image} alt="" />
        <div className={styles["detail-info"]}>
          <div>
            <span className={styles.title__span}>{productData.name}</span>
            <div className={styles["info--row"]}>
              <span className={styles.brand__span}>
                Danh mục {productData.category.name}
              </span>
              <span className={styles.sku__span}>SKU: {productData.sku}</span>
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
  );
}
