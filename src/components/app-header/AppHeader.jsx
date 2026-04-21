import React from "react";
import styles from "./AppHeader.module.scss";

import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderLink from "./header-link/header-link";
import { useSelector } from "react-redux";

const AppHeader = () => {
  const user = useSelector((state) => state.user);
  const userName = user.userName ? user.userName : "Personal account";

  return (
    <header className="p-4">
      <div className={`${styles.container} container`}>
        <div className={styles.button_wrapper}>
          <HeaderLink path="/" Icon={BurgerIcon} text="Order builder" />
          <HeaderLink path="order-feed" Icon={ListIcon} text="Order feed" />
        </div>

        <Logo className="outline" />

        <HeaderLink path="/profile" Icon={ProfileIcon} text={userName} />
      </div>
    </header>
  );
};

export default React.memo(AppHeader);
