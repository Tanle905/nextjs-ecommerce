import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../pages/_app";
import FormDetail from "./FormDetail";
import styles from "./AccountForm.module.sass";
import { updateAccount } from "../../lib/services";
import { useRouter } from "next/router";

export default function AccountForm() {
  const { user } = useContext(UserContext);
  const router = useRouter()
  const initialValues = [
    { name: "firstName", label: "Họ", value: (user && user.firstName) || "" },
    { name: "lastName", label: "Tên", value: (user && user.lastName) || "" },
    { name: "phone", label: "SĐT", value: (user && user.phone) || "" },
    {
      name: "avatar",
      label: "Ảnh đại diện",
      value: (user && user.avatar) || "",
    },
    { name: "dob", label: "Ngày sinh", value: (user && user.dob) || "" },
  ];
  const [form, setForm] = useState(initialValues);
  useEffect(() => setForm(initialValues), [user]);
  function onChangeHandle(event) {
    const { name, value } = event.target;
    console.log(value);
    setForm((prevForm) => {
      const index = prevForm.findIndex((input) => input.name === name);
      prevForm[index].value = event.target.value;
      return [...prevForm];
    });
  }
  if (user) {
    return (
      <section className={styles.profile}>
        <span className={styles["profile-title"]}>Thông tin tài khoản</span>
        <form
          className={styles.profile__form}
          onSubmit={(event) => updateAccount(event, form, router)}
        >
          {form.map((input, index) => {
            return (
              <FormDetail
                key={index}
                input={input}
                onChangeHandle={onChangeHandle}
              ></FormDetail>
            );
          })}
          <div className={styles.form__button}>
            <button type="submit">Cập nhật</button>
          </div>
        </form>
      </section>
    );
  } else return <div>is loading...</div>;
}
