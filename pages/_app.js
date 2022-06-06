import Layout from "../components/Layout";
import "../styles/globals.sass";
import React, { useEffect, useState } from "react";
import { autoLogout } from "../lib/auth";
import { getAllProducts } from "../lib/product";

export const UserContext = React.createContext();
export const ProductContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  const [product, setProduct] = useState();
  useEffect(() => {
    console.log("mounted");
    getAllProducts().then(data=> setProduct(JSON.parse(data)))
    autoLogout(user, setUser);
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ProductContext.Provider value={{product}}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default MyApp;
