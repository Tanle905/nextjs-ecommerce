import Link from "next/link";
import styles from "./HeaderCart.module.sass";

export default function HeaderCart({ setIsCartHover }) {
  if (localStorage.getItem("items")) {
    const cartItems = JSON.parse(localStorage.getItem("items"));
    return (
      <section
        className={styles["header-cart"]}
        onMouseEnter={() => setIsCartHover(true)}
        onMouseLeave={() => setIsCartHover(false)}
      >
        <div className={styles["cart-list"]}>
          {cartItems.map((item) => {
            return (
              <div className={styles.item} key={item.id}>
                <img src={item.image} className={styles.item__img} alt="" />
                <div className={styles["span-block"]}>
                  <Link href={`/product/${item.id}`}>
                    <span className={styles.name__p}>{item.name}</span>
                  </Link>
                  <span className={styles.quantity__span}>
                    Số lượng: {item.quantity}
                  </span>
                  <span className={styles.price__span}>{item.price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles["to-checkout"]}>
          <div className={styles.total}>
            {/* <span class="total-quantity__span">Tổng tiền({{totalQuantity}}) sản phẩm: </span> */}
            {/* <span class="total-price__span">{{totalPrice | currency:'AUD':'symbol-narrow':'3.2-2'}}</span> */}
          </div>
          <div className={styles["to-checkout__button"]}>
            Xem giỏ hàng
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section
        className={styles["header-cart"]}
        onMouseEnter={() => setIsCartHover(true)}
        onMouseLeave={() => setIsCartHover(false)}
      >
        <div className={styles["cart-list"]}>
          <div className={styles.item}>
            <p>Giỏ hàng trống</p>
          </div>
        </div>
      </section>
    );
  }
}
