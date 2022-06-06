import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./HeaderCart.module.sass";

export default function HeaderCart({ setIsCartHover }) {
  if (localStorage.getItem("items")) {
    const cartItems = JSON.parse(localStorage.getItem('items'))
    let totalQuantity = null;
    let totalPrice = null;
    cartItems.forEach((item) => {
      totalQuantity = totalQuantity + item.quantity;
      totalPrice = totalPrice + item.price * item.quantity;
    });
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
                  <span className={styles.price__span}>{item.price}$ USD</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles["to-checkout"]}>
          <div className={styles.total}>
            <span className={styles["total-quantity__span"]}>
              Tổng tiền({totalQuantity}) sản phẩm:{" "}
            </span>
            <span className={styles["total-price__span"]}>
              {totalPrice}$ USD
            </span>
          </div>
          <div className={styles["to-checkout__button"]}>Xem giỏ hàng</div>
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
