import Layout from "../components/Layout";
import "../styles/globals.sass";
import { useEffect, useState } from "react";
import { autoLogout } from "../lib/auth";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  useEffect(() => {
    console.log("mounted");
    autoLogout(user, setUser);
  }, [user]);
  return (
    <Layout user={user}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
