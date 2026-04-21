import { Outlet } from "react-router-dom";
import styles from "./ProfilePage.module.scss";
import { NavLink } from "react-router-dom";
import ProfileMenuItem from "./ProfileMenuItem";
import cn from "classnames";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "services/user/reducer";
import { clearIngredients } from "services/constructor/reducer";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const onExit = useCallback((e) => {
    e.preventDefault();
    dispatch(deleteUser());
    dispatch(clearIngredients());
  });
  return (
    <section className={styles.profile}>
      <div className={styles.profile__menu}>
        <ProfileMenuItem
          path="/profile"
          className={styles.profile__menu__item}
          name="Profile"
        />
        <ProfileMenuItem
          path="/profile/order-history"
          className={styles.profile__menu__item}
          name="Order History"
        />
        <a
          className={cn(styles.profile__menu__item, styles.inactive)}
          href="/exit"
          onClick={onExit}
        >
          Exit
        </a>
      </div>

      <div className={cn("ml-15", styles.outlet)}>
        <Outlet />
      </div>
    </section>
  );
};

export default ProfilePage;
