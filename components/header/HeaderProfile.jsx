import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../../pages/_app";
import styles from "./HeaderProfile.module.sass";
import Link from "next/link";

export default function HeaderProfile({ setIsProfileHover }) {
  const router = useRouter();
  const {user} = useContext(UserContext);

  function logoutHandle() {
    localStorage.removeItem("token");
    router.reload();
  }
  return (
    <div
      className={styles["header-profile"]}
      onMouseEnter={() => setIsProfileHover(true)}
      onMouseLeave={() => setIsProfileHover(false)}
    >
      <div className={styles["profile-info"]}>
        <img src={user.avatar} className={styles.header__img} />
        <div className={styles.title}>
          <span className={styles.title__span}>
            {user.lastName + " " + user.firstName}
          </span>
          <span className={styles.email__span}>{user.email}</span>
        </div>
      </div>
      <Link href='/account'>
      <div className={styles.option}>
        <span>Thông tin tài khoản</span>
      </div>
      </Link>
      <div className={styles.option}>
        <span>Sổ địa chỉ</span>
      </div>
      <div className={styles.option}>
        <span>Thanh toán</span>
      </div>
      <a className={styles.logout__button} onClick={() => logoutHandle()}>
        Đăng xuất
      </a>
    </div>
  );
}
