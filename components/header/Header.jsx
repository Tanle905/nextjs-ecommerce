import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.sass";
import HeaderProfile from "./HeaderProfile";
import React, { useContext, useState } from "react";
import { UserContext } from "../../pages/_app";
import { useRouter } from "next/router";
import ProductSearch from "../product/ProductSearch";
import HeaderCart from "./HeaderCart";

export default function Header() {
  const router = useRouter();
  const [isProfileHover, setIsProfileHover] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [isSearchHover, setIsSearchHover] = useState(false);
  const [isCartHover, setIsCartHover] = useState(false);
  const { user } = useContext(UserContext);

  function searchHandle(e) {
    e.preventDefault();
    if (searchValue !== "") {
      router.push({
        pathname: "/search",
        query: { name: searchValue.toLowerCase() },
      });
    }
  }
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={styles.header__left}>
          <Link href="/">
            <a className={styles.header__brand}>Phong Vu.</a>
          </Link>
          <form action="" className={styles.header__form}>
            <input
              type="text"
              className={styles.form__input}
              placeholder="Nhập từ khóa cần tìm..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsSearchFocus(true)}
              onBlur={() => setIsSearchFocus(false)}
            />
            <button
              className={styles.form__button}
              onClick={(e) => searchHandle(e)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            {searchValue !== "" && (isSearchFocus || isSearchHover) && (
              <ProductSearch
                searchValue={searchValue}
                setIsSearchHover={setIsSearchHover}
              ></ProductSearch>
            )}
          </form>
        </div>
        <div className={styles.header__right}>
          <button className={styles.icon__button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles["icon"]}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            <span>Khuyến mãi</span>
          </button>
          <button className={styles.icon__button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles["icon"]}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>

            <span>Đơn hàng</span>
          </button>
          <button className={styles.icon__button}>
            {user ? (
              <>
                <Image
                  className={styles.avatar__img}
                  loader={() => user.avatar}
                  onMouseEnter={() => setIsProfileHover(true)}
                  onMouseLeave={() => setIsProfileHover(false)}
                  src="me.png"
                  layout="fill"
                ></Image>
                <span>{user.firstName}</span>
                {isProfileHover && (
                  <HeaderProfile
                    setIsProfileHover={setIsProfileHover}
                  ></HeaderProfile>
                )}
              </>
            ) : (
              <>
                <Link href={"/login"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles["icon"]}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </Link>
                <span>Đăng nhập</span>
              </>
            )}
          </button>
          <button className={styles.icon__button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles["icon"]}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span>Thông báo</span>
          </button>
          <button
            className={styles.icon__button}
            onMouseEnter={() => setIsCartHover(true)}
            onMouseLeave={() => setIsCartHover(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles["icon"]}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <div class={styles["cart-badge"]}>
              <span></span>
            </div>
            <span>Giỏ hàng</span>
            {isCartHover && (
              <HeaderCart setIsCartHover={setIsCartHover}></HeaderCart>
            )}
          </button>
        </div>
      </header>
    </div>
  );
}
