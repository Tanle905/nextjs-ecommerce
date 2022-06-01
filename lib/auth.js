export default async function auth(email, password) {
  const URL = "https://phongvu-api.herokuapp.com/api/v1";
  const token = await fetch(URL + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: email, password }),
  }).then((res) => res.json().then((data) => data.data));
  localStorage["token"] = token.accessToken;
  const userData = await fetch(URL + "/users/me/profile", {
    method: "GET",
    headers: { Authorization: "Bearer " + token.accessToken },
  }).then((res) => res.json().then((data) => data.data));

  return userData;
}
