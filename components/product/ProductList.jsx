import styles from "./ProductList.module.sass"
import Link from "next/link";

export default function ProductList({products}) {
  return (
    <div className={styles.product}>
    <span className={styles.title__span}>Sản phẩm</span>
    <div className={styles["product-container"]}>
      {products.map((product) => {
        return (
          <Link key={product._id} href={`/product/${product._id}`}>
            <div className={styles.product__detail}>
              <img
                className={styles["product-image__img"]}
                src={product.image}
                alt=""
              />
              <p className={styles["product-name__p"]}>{product.name}</p>
              <span className={styles["product-price__span"]}>
                {product.price}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
  );
}
