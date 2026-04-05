import { useEffect, useState } from "react";
import styles from "./RegisterPage.module.scss";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "components/password-input/PasswordInput";
import { Navigate } from "react-router-dom";
import { useCallback } from "react";
import { registerRequest } from "utils/api";
import { Input } from "components/input/Input";
import { useDispatch } from "react-redux";
import { addUser, clearError } from "services/user/reducer";
import { useSelector } from "react-redux";
import { registerUser } from "services/user/actions";

const RegisterPage = () => {
  const [form, setValue] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const { userName, email, status, error } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(clearError());
  }, []);

  let onRegister = useCallback(
    async (e) => {
      e.preventDefault();
      dispatch(registerUser(form));
    },
    [form],
  );

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  if (userName) return <Navigate to="/" />;

  return (
    <div className={`${styles.register}`}>
      <h2 className={styles.register__header}>Register</h2>
      <Input placeholder="Name" name="name" onChange={onChange} />
      <Input placeholder="E-mail" name="email" onChange={onChange} />
      <PasswordInput
        placeholder="Password"
        name="password"
        onChange={onChange}
      />
      {error && <p className={`${styles.errorMessage} mt-6 ml-6`}>{error}</p>}

      <p></p>
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={onRegister}
        extraClass={`${styles.register__button}`}
      >
        Register
      </Button>

      <div className={`${styles.login__block} mt-4 mb-30`}>
        Already registered? <a href="/login"> Login</a>
      </div>
    </div>
  );
};

export default RegisterPage;
