import Layout from "../components/Layout";
import "../styles/globals.sass";
import React, { useEffect, useState } from "react";
import { autoLogout } from "../lib/auth";
import { getAllProducts } from "../lib/product";

export const LayoutContext = React.createContext();

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
    <LayoutContext.Provider
      value={{ user, setUser, product, totalQuantity, setTotalQuantity }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LayoutContext.Provider>
  );
}

export default MyApp;
