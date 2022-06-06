import Layout from "../components/Layout";
import "../styles/globals.sass";
import React, { useEffect, useState } from "react";
import { autoLogout } from "../lib/auth";

export const UserContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  useEffect(() => {
    console.log("mounted");
    autoLogout(user, setUser);
  }, [user]);
  return (
    <UserContext.Provider value={{user, setUser}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;
