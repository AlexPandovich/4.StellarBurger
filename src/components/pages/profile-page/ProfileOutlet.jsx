import styles from "./ProfilePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Input } from "components/input/Input";
import { PasswordInput } from "components/password-input/PasswordInput";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback } from "react";
import { updateUserByAccessToken } from "services/user/actions";

const ProfileOutlet = () => {
  const user = useSelector((state) => state.user);
  const [form, setValue] = useState({
    name: user.userName,
    email: user.email,
    password: "",
  });

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  let onSave = useCallback(
    async (e) => {
      e.preventDefault();
      console.log("update user", form);
      console.log("access token ", user.accessToken);
      dispatch(
        updateUserByAccessToken({ accessToken: user.accessToken, user: form }),
      );
    },
    [form],
  );

  return (
    <>
      <Input
        placeholder="name"
        name="name"
        onChange={onChange}
        value={form.name}
      />
      <Input
        placeholder="E-mail"
        name="email"
        onChange={onChange}
        value={form.email}
      />
      <PasswordInput
        placeholder="Password"
        name="password"
        onChange={onChange}
        value={form.password}
      />

      <Button
        htmlType="button"
        type="primary"
        size="medium"
        extraClass={`${styles.save__button}`}
        onClick={onSave}
      >
        Save
      </Button>
    </>
  );
};

export default ProfileOutlet;
