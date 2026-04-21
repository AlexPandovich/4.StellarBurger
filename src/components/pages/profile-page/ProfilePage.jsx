import { Outlet } from "react-router-dom";
import styles from "./ProfilePage.module.scss";
import { NavLink } from "react-router-dom";
import ProfileMenuItem from "./ProfileMenuItem";
import cn from "classnames";

const ProfilePage = () => {
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
        <ProfileMenuItem
          path="/profile/exit"
          className={styles.profile__menu__item}
          name="Exit"
        />
      </div>

      <div className={cn("ml-15", styles.outlet)}>
        <Outlet />
      </div>
    </section>
  );
};

export default ProfilePage;
