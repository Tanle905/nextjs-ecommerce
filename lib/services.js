export async function updateAccount(event, form, router) {
  event.preventDefault();
  try {
    const data = form.reduce(
      (acc, cur) => ({ ...acc, [cur.name]: cur.value }),
      {}
    );
    const { token } = JSON.parse(localStorage.getItem("token"));
    const resData = await fetch(
      process.env.NEXT_PUBLIC_baseURL + "/users/me/profile",
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((res) => res.json());
    alert("Cap nhat tai khoan thanh cong");
    router.reload();
  } catch (err) {
    alert("Cap nhat tai khoan that bai");
  }
}
