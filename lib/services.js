export async function updateAccount(event, form, router) {
  event.preventDefault();
  try{
    const data = form.reduce(
        (acc, cur) => ({ ...acc, [cur.name]: cur.value }),
        {}
      );
      const { token } = JSON.parse(localStorage.getItem("token"));
      const resData = await fetch(
        process.env.NEXT_PUBLIC_baseURL + "/users/me/profile",
        {
          method: "PUT",
          headers: { Authorization: "Bearer " + token },
          body: data,
        }
      ).then((res) => res.json());
  } catch(err){
      alert("Cap nhat tai khoan that bai")
  }
  router.reload()
}
