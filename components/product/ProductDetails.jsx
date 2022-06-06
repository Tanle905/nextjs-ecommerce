import styles from "./ProductDetails.module.sass";
export default function ProductDetails({ productData }) {
  function AddToCartHandle() {
    const items =
      (localStorage.getItem("items") && JSON.parse(localStorage.getItem("items"))) ||
      [];
    const quantityLeft =
      productData.quantity -
      ((checkForDuplicate(items, productData._id)[0] &&
        checkForDuplicate(items, productData._id)[0].quantity) ||
        0);
    if (quantityLeft > 0) {
      if (checkForDuplicate(items, productData._id).length !== 0) {
        checkForDuplicate(items, productData._id)[0].quantity++;
      } else {
        items.push({
          id: productData._id,
          name: productData.name,
          price: productData.price,
          image: productData.image,
          quantity: 1,
          sku: productData.sku,
        });
      }
      localStorage.setItem("items", JSON.stringify(items));
      quantityLeft--;
    } else alert("Da dat so luong toi da");

    function checkForDuplicate(items, id) {
      return items.filter((item) => item.id.includes(id));
    }
  }
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
            <button
              className={styles["add-to-cart__button"]}
              onClick={AddToCartHandle}
            >
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
