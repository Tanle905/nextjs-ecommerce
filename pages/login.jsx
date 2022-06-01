import { useState } from "react";
import Layout from "../components/Layout";
import auth from "../lib/auth";
import styles from "../styles/Login.module.sass";

export default function Login() {
  const [email, setEmail] = useState("delete101020@live.com");
  const [password, setPassword] = useState("12345678");
  const [user, setUser] = useState();
  function submitHandle(event) {
    event.preventDefault();
    auth(email, password).then((data) => setUser(data));
  }
  return (
    <Layout user={user}>
      <section className={styles.auth}>
        <span className={styles["auth-title"]}></span>
        <form className={styles.auth__form} onSubmit={(e) => submitHandle(e)}>
          <div>
            <label>Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="text"
            />
          </div>
          <div></div>
          <div>
            <label>Mật khẩu:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="8"
              name="password"
              type="password"
            />
          </div>
          <div className={styles.form__button}>
            <button type="submit">Đăng nhập</button>
          </div>
        </form>
      </section>
    </Layout>
  );
}
