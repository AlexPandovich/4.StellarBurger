import { Input } from "components/input/Input";
import styles from "./LoginPage.module.scss";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "components/password-input/PasswordInput";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearError } from "services/user/reducer";
import { loginUser } from "services/user/actions";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const [form, setValue] = useState({ email: "", password: "" });
  const { userName, email, status, error } = useSelector((state) => state.user);
  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearError());
  }, []);

  let onLogin = useCallback(
    async (e) => {
      e.preventDefault();
      dispatch(loginUser(form));
    },
    [form],
  );
  return (
    <div className={`${styles.login}`}>
      <h2 className={styles.login__header}>Log in</h2>
      <Input placeholder="E-mail" name="email" onChange={onChange} />
      <PasswordInput
        placeholder="Password"
        name="password"
        onChange={onChange}
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        extraClass={`${styles.login__button}`}
        onClick={onLogin}
      >
        Log in
      </Button>
      {error && <p className={`${styles.errorMessage} mt-6 ml-6`}>{error}</p>}

      <div className={`${styles.register__block} mt-20`}>
        New user? <a href="/register">Register</a>
      </div>
      <div className={`${styles.restore__block} mt-4 mb-30`}>
        Forget password? <a href="/restore"> Restore</a>
      </div>
    </div>
  );
};

export default LoginPage;
