export async function auth(email, password) {
  const now = new Date();
  try {
    const token = await fetch(process.env.NEXT_PUBLIC_baseURL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, password }),
    }).then((res) => res.json().then((data) => data.data));
    localStorage.setItem(
      "token",
      JSON.stringify({
        token: token.accessToken,
        expireIn: now.setTime(now.getTime() + 3600000),
      })
    );
    const userData = await fetch(
      process.env.NEXT_PUBLIC_baseURL + "/users/me/profile",
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token.accessToken },
      }
    ).then((res) => res.json().then((data) => data.data));
    return { userData, error: false };
  } catch (error) {
    return { error: true };
  }
}
export async function getUserData(token) {
  const userData = await fetch(
    process.env.NEXT_PUBLIC_baseURL + "/users/me/profile",
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  ).then((res) => res.json().then((data) => data.data));
  return userData;
}

export async function autoLogout(user, setUser) {
  if (localStorage.getItem("token")) {
    const { token, expireIn } = JSON.parse(localStorage.getItem("token"));
    if (token && !user) {
      setUser(await getUserData(token));
      const intervalId = setInterval(() => {
        const now = new Date().getTime();
        if (expireIn - now < 0) {
          localStorage.removeItem("token");
          setUser(null);
          clearInterval(intervalId);
        }
      }, 1000);
    }
  }
}
