import { useContext } from "react";
import styles from "./ProductSearch.module.sass";
import Link from "next/link";
import Image from "next/image";
import { ProductContext } from "../../pages/_app";

export default function ProductSearch({ searchValue, setIsSearchHover }) {
  const { product } = useContext(ProductContext);
  if (product) {
    const productData = product.data;
    const matchedProduct = productData.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      <div
        className={styles["product-search"]}
        onMouseEnter={() => setIsSearchHover(true)}
        onMouseLeave={() => setIsSearchHover(false)}
      >
        {matchedProduct.map((product) => {
          return (
            <Link key={product._id} href={`/product/${product._id}`}>
              <div className={styles["product-search-detail"]}>
                <div className={styles["image-wraper"]}>
                  <Image
                    loader={() => product.image}
                    src="product.png"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <p className={styles["product-search-detail__p"]}>
                  {product.name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
