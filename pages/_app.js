import Layout from "../components/Layout";
import "../styles/globals.sass";
import { useEffect, useState } from "react";
import { autoLogout } from "../lib/auth";
import { getAllProducts } from "../lib/product";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  const [product, setProduct] = useState();
  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    console.log("mounted");
    getAllProducts().then((data) => setProduct(JSON.parse(data)));
    autoLogout(user, setUser);
  }, [user]);
  return (
    <Layout user={user}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
