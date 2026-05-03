import cn from "classnames";
import styles from "./ProfilePage.module.scss";
import { NavLink } from "react-router-dom";
const ProfileMenuItem = ({ path, className, name }) => {
  return (
    <NavLink
      to={path}
      end
      className={({ isActive }) =>
        cn(className, isActive ? styles.active : styles.inactive)
      }
    >
      {name}
    </NavLink>
  );
};
export default ProfileMenuItem;
